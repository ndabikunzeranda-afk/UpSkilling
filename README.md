# Upskilling System - Interactive Student Learning Dashboard & Course Platform

A functional, multi-tiered educational web application built with HTML5, CSS3, Vanilla JavaScript, PHP, and MySQL.

The application starts with the exact visual look of the reference design (`1.png`), but functions as a dynamic web platform that supports deep module navigation, interactive reading, knowledge-check quizzes, progress tracking, and runtime feature expansion.

---

## 🌟 Interactive Website Architecture

### 1. View 1: Student Learning Dashboard (`1.png`)
- **Theme**: Deep dark mode (`#000000` body, `#303030` main container, `#263A50` welcome banner).
- **Welcome Header**: *"Welcome to your learning space — Develop your skills. Build your future."*
- **Grid Layout**: Exactly 2 columns with `7px` spacing and `77px` height cards with thin grey borders (`#505050`).
- **Interactive Skill Cards**:
  1. Personal Branding
  2. Networking Skills
  3. Academic Success
  4. Professional Conduct
  5. Communication
  6. Digital Learning
  7. Action Planning
  8. Research Skills
  9. Personal Goals (positioned in the left column of the last row)
- **Live Progress Tags**: Automatically indicates when a student is in-progress or has completed all modules in a category.

### 2. View 2: Course & Modules List (`2.png`)
- Clicking any skill card (e.g., **Communication**) opens its course outline.
- Displays course heading with category icon and subtitle (*"Example course structure"*).
- Lists numbered modules with summaries:
  - `01 Fundamentals of Communication`
  - `02 Verbal Communication`
  - `03 Non-verbal Communication`
  - `04 Presentation Skills`
  - `05 Written Communication`
- Click **"Back to all skills"** to smoothly return to the dashboard.

### 3. View 3: Interactive Lesson Reader (`Lesson_interactive_*.png`)
- Clicking any module opens the reader with:
  - **Banner**: "Upskilling System" / "My Learning / [Category]" with bookmark toggle.
  - **Module Counter**: e.g., `MODULE 2 OF 5` and `[In progress]` badge.
  - **Progress Bar**: Dynamically computed percentage fill in `#FF8500` orange.
  - **Today's Key Idea**: Highlight box with lightbulb icon and lesson focus.
  - **Segmented Tabs**:
    - **Learn**: Concept explanations and message structuring.
    - **Example**: Real-world application scenarios.
    - **Practice**: Interactive multiple-choice knowledge check with real-time feedback and explanations.
  - **Navigation Controls**: `Previous`, `Next`, and `Modules List` buttons.

---

## 🚀 Adding New Features & Modules

### Option A: From the UI (Instant & Local)
1. On the main dashboard, click the **"Add Module"** button in the welcome header.
2. Select a skill category, enter a module title, summary, and key idea.
3. Click **"Add Module"**. The new module is immediately available in the course list and lesson reader, persisted in your browser's `localStorage`.

### Option B: Programmatically via JavaScript
Open the browser console and use the global `upskillingApp` instance:
```javascript
// Add a new module to any skill
window.upskillingApp.skills.find(s => s.id === 'digital-learning').course.modules.push({
  id: 2,
  title: "Cloud Development & DevOps",
  summary: "Continuous integration and deployment basics.",
  keyIdea: "Automate testing to ensure repeatable code quality."
});
window.upskillingApp.saveSkills();
window.upskillingApp.renderDashboardCards();
```

### Option C: Via Database & PHP Backend
1. Import `database/upskilling_system.sql` into MySQL.
2. The REST API at `php/api/courses.php` handles:
   - `GET php/api/courses.php`: List all categories.
   - `GET php/api/courses.php?skill=communication`: Retrieve course and module tree.
   - `POST php/api/courses.php`: Save a new module to the MySQL database.

---

## 📁 File Structure

```
Up_skilling/
├── index.html                 # Main website entry point (standalone, offline-ready)
├── style.css                  # Core CSS3 styles (root)
├── script.js                  # Vanilla JavaScript state engine & interactive reader
├── index.php                  # PHP dynamic application (XAMPP/Apache ready)
├── README.md                  # This documentation
│
├── assets/
│   ├── css/
│   │   └── style.css          # Synchronized CSS asset
│   └── js/
│       └── main.js            # Synchronized JS asset
│
├── php/
│   ├── config/
│   │   └── database.php       # PDO MySQL connection
│   └── api/
│       └── courses.php        # JSON API for course data and module creation
│
└── database/
    └── upskilling_system.sql  # MySQL schema and initial dataset
```

---

## 💻 How to Run

1. **Direct Browser (Zero Setup)**:
   Simply double-click or open [index.html](file:///d:/Modules/Career%20Guidance/Up_skilling/index.html) in Chrome, Edge, or Firefox.
2. **With PHP / XAMPP**:
   Start a server in the workspace directory:
   ```bash
   php -S localhost:8000
   ```
   Open `http://localhost:8000` or `http://localhost:8000/index.php`.
