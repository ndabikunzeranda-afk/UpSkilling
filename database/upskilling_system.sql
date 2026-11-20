-- ============================================================================
-- Upskilling System Database Schema & Initial Seed Data
-- ============================================================================

CREATE DATABASE IF NOT EXISTS `upskilling_system` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `upskilling_system`;

-- ----------------------------------------------------------------------------
-- Table: users
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `users` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `username` VARCHAR(50) NOT NULL UNIQUE,
    `email` VARCHAR(100) NOT NULL UNIQUE,
    `password_hash` VARCHAR(255) NOT NULL,
    `role` ENUM('admin', 'student') NOT NULL DEFAULT 'student',
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------------------------------------------------------
-- Table: skill_categories
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `skill_categories` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(100) NOT NULL UNIQUE,
    `slug` VARCHAR(100) NOT NULL UNIQUE,
    `icon` VARCHAR(50) NOT NULL,
    `description` VARCHAR(255) NOT NULL DEFAULT 'View learning modules',
    `sort_order` INT NOT NULL DEFAULT 0,
    `is_active` TINYINT(1) NOT NULL DEFAULT 1,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------------------------------------------------------
-- Table: courses
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `courses` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `category_id` INT NOT NULL,
    `title` VARCHAR(150) NOT NULL,
    `slug` VARCHAR(150) NOT NULL UNIQUE,
    `description` TEXT,
    `source_document` VARCHAR(255) DEFAULT NULL,
    `is_published` TINYINT(1) NOT NULL DEFAULT 1,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (`category_id`) REFERENCES `skill_categories`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------------------------------------------------------
-- Table: course_documents
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `course_documents` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `course_id` INT NOT NULL,
    `file_name` VARCHAR(255) NOT NULL,
    `file_path` VARCHAR(255) NOT NULL,
    `file_type` VARCHAR(50) NOT NULL,
    `uploaded_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (`course_id`) REFERENCES `courses`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------------------------------------------------------
-- Table: modules
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `modules` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `course_id` INT NOT NULL,
    `module_number` INT NOT NULL DEFAULT 1,
    `title` VARCHAR(150) NOT NULL,
    `description` TEXT,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (`course_id`) REFERENCES `courses`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------------------------------------------------------
-- Table: lessons
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `lessons` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `module_id` INT NOT NULL,
    `lesson_number` INT NOT NULL DEFAULT 1,
    `title` VARCHAR(150) NOT NULL,
    `summary` VARCHAR(255) DEFAULT NULL,
    `content` LONGTEXT,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (`module_id`) REFERENCES `modules`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ============================================================================
-- Seed Data: The 9 Skill Categories matching reference dashboard
-- ============================================================================
INSERT INTO `skill_categories` (`id`, `name`, `slug`, `icon`, `description`, `sort_order`) VALUES
(1, 'Personal Branding', 'personal-branding', 'user', 'View learning modules', 1),
(2, 'Networking Skills', 'networking-skills', 'users', 'View learning modules', 2),
(3, 'Academic Success', 'academic-success', 'graduation-cap', 'View learning modules', 3),
(4, 'Professional Conduct', 'professional-conduct', 'briefcase', 'View learning modules', 4),
(5, 'Communication', 'communication', 'messages-square', 'View learning modules', 5),
(6, 'Digital Learning', 'digital-learning', 'monitor', 'View learning modules', 6),
(7, 'Action Planning', 'action-planning', 'clipboard-list', 'View learning modules', 7),
(8, 'Research Skills', 'research-skills', 'search', 'View learning modules', 8),
(9, 'Personal Goals', 'personal-goals', 'target', 'View learning modules', 9)
ON DUPLICATE KEY UPDATE 
    `name` = VALUES(`name`),
    `icon` = VALUES(`icon`),
    `description` = VALUES(`description`),
    `sort_order` = VALUES(`sort_order`);

-- Sample Course Data for Communication Skills (shown in System_View reference)
INSERT INTO `courses` (`id`, `category_id`, `title`, `slug`, `description`, `source_document`) VALUES
(1, 5, 'Communication Skills', 'communication-skills', 'Example course structure', 'communication.pdf')
ON DUPLICATE KEY UPDATE `title` = VALUES(`title`);

INSERT INTO `modules` (`id`, `course_id`, `module_number`, `title`) VALUES
(1, 1, 1, 'Fundamentals of Communication')
ON DUPLICATE KEY UPDATE `title` = VALUES(`title`);

INSERT INTO `lessons` (`id`, `module_id`, `lesson_number`, `title`, `summary`) VALUES
(1, 1, 1, 'Fundamentals of Communication', 'Understand communication principles.'),
(2, 1, 2, 'Verbal Communication', 'Practise speaking clearly.'),
(3, 1, 3, 'Non-verbal Communication', 'Understand gestures and body language.'),
(4, 1, 4, 'Presentation Skills', 'Organize and deliver presentations.'),
(5, 1, 5, 'Written Communication', 'Write clear academic and professional messages.')
ON DUPLICATE KEY UPDATE `title` = VALUES(`title`);
