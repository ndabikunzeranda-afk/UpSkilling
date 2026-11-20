<?php
/**
 * REST API: Courses & Modules Endpoint
 * Upskilling System
 */

header('Content-Type: application/json; charset=utf-8');
require_once __DIR__ . '/../config/database.php';

$pdo = getDatabaseConnection();
$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'GET') {
    $skillSlug = $_GET['skill'] ?? null;

    if ($pdo === null) {
        // Return JSON fallback if MySQL is not running
        echo json_encode([
            'status' => 'offline_mode',
            'message' => 'Database not connected, using client-side store',
            'data' => []
        ]);
        exit;
    }

    try {
        if ($skillSlug) {
            $stmt = $pdo->prepare("
                SELECT c.id as course_id, c.title as course_title, c.description as course_description,
                       sc.name as skill_name, sc.slug as skill_slug, sc.icon as skill_icon
                FROM courses c
                JOIN skill_categories sc ON c.category_id = sc.id
                WHERE sc.slug = :slug LIMIT 1
            ");
            $stmt->execute(['slug' => $skillSlug]);
            $course = $stmt->fetch();

            if ($course) {
                // Fetch modules
                $modStmt = $pdo->prepare("
                    SELECT id, module_number, title, description
                    FROM modules WHERE course_id = :course_id ORDER BY module_number ASC
                ");
                $modStmt->execute(['course_id' => $course['course_id']]);
                $course['modules'] = $modStmt->fetchAll();

                echo json_encode(['status' => 'success', 'course' => $course]);
                exit;
            }
        }

        // Return all categories
        $stmt = $pdo->query("SELECT * FROM skill_categories WHERE is_active = 1 ORDER BY sort_order ASC");
        $categories = $stmt->fetchAll();
        echo json_encode(['status' => 'success', 'categories' => $categories]);
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(['status' => 'error', 'message' => $e->getMessage()]);
    }
    exit;
}

if ($method === 'POST') {
    // Save new module
    $input = json_decode(file_get_contents('php://input'), true);
    if (!$input || empty($input['title']) || empty($input['skill_slug'])) {
        http_response_code(400);
        echo json_encode(['status' => 'error', 'message' => 'Invalid payload']);
        exit;
    }

    if ($pdo === null) {
        echo json_encode(['status' => 'saved_locally', 'message' => 'Saved in local storage']);
        exit;
    }

    try {
        // Insert into database
        $stmt = $pdo->prepare("
            INSERT INTO modules (course_id, module_number, title, description)
            SELECT c.id, COALESCE(MAX(m.module_number), 0) + 1, :title, :summary
            FROM courses c
            JOIN skill_categories sc ON c.category_id = sc.id
            LEFT JOIN modules m ON m.course_id = c.id
            WHERE sc.slug = :slug
            GROUP BY c.id
        ");
        $stmt->execute([
            'title' => $input['title'],
            'summary' => $input['summary'] ?? '',
            'slug' => $input['skill_slug']
        ]);
        echo json_encode(['status' => 'success', 'message' => 'Module added to database']);
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(['status' => 'error', 'message' => $e->getMessage()]);
    }
    exit;
}
