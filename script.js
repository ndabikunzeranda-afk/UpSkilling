/**
 * ============================================================================
 * Upskilling System - Full Screen Web Platform Engine
 * Features: State Routing, Full Viewport Layout, Real-time Search,
 *           Category Filters, Sidebar Outline, Interactive Readers & Quizzes
 * ============================================================================
 */

// Skill Categories & Comprehensive Courses Dataset
const defaultSkillsData = [
  {
    id: "personal-branding",
    name: "Personal Branding",
    category: "personal",
    icon: "user",
    description: "View learning modules",
    course: {
      title: "Personal Branding",
      subtitle: "Establish and communicate your unique professional identity",
      modules: [
        {
          id: 1,
          title: "Defining Your Professional Identity",
          summary: "Identify values, strengths, and unique value proposition.",
          keyIdea: "Your personal brand is what people say about your expertise and character when you leave the room.",
          learn: "Clarify your core values, your specialized strengths, and what sets you apart from your peers. Align your daily actions with your professional ambitions.",
          example: "A software student creates a GitHub portfolio highlighting clean, well-tested code and technical blog posts.",
          quiz: {
            question: "What forms the foundation of a sustainable personal brand?",
            options: [
              { text: "Authentic skills and core values", correct: true },
              { text: "Exaggerated resume claims", correct: false },
              { text: "Copying someone else's bio", correct: false }
            ],
            explanation: "Authenticity and demonstrable competence build genuine trust and lasting professional respect."
          }
        },
        {
          id: 2,
          title: "Crafting an Effective Bio & Elevator Pitch",
          summary: "Write compelling summaries for academic & professional profiles.",
          keyIdea: "A concise, engaging summary creates immediate relevance in under 30 seconds.",
          learn: "Structure your elevator pitch around: who you are, what problems you solve, and what future impact you seek to create.",
          example: "Introducing yourself at a career fair: 'I'm a final-year student specializing in AI systems for healthcare workflows.'",
          quiz: {
            question: "How long should an introductory elevator pitch typically be?",
            options: [
              { text: "30 to 60 seconds", correct: true },
              { text: "10 to 15 minutes", correct: false },
              { text: "Over 30 minutes", correct: false }
            ],
            explanation: "Brevity keeps the listener engaged while conveying key value quickly."
          }
        },
        {
          id: 3,
          title: "Portfolio & Project Showcasing",
          summary: "Curate past work, case studies, and achievements.",
          keyIdea: "Show, don't just tell. Concrete artifacts prove ability better than buzzwords.",
          learn: "Structure case studies using the STAR method: Situation, Task, Action, and Measurable Result.",
          example: "Documenting a group project with a problem breakdown, architecture diagram, and user feedback stats.",
          quiz: {
            question: "What makes a project case study most credible?",
            options: [
              { text: "Measurable outcomes and demonstrable process", correct: true },
              { text: "Long paragraphs with zero visuals", correct: false },
              { text: "Hiding your actual contribution", correct: false }
            ],
            explanation: "Evidence-based results and clear role ownership show real competency."
          }
        }
      ]
    }
  },
  {
    id: "networking-skills",
    name: "Networking Skills",
    category: "career",
    icon: "users",
    description: "View learning modules",
    course: {
      title: "Networking Skills",
      subtitle: "Building purposeful, mutually beneficial professional relationships",
      modules: [
        {
          id: 1,
          title: "Fundamentals of Networking",
          summary: "Building genuine academic and career relationships.",
          keyIdea: "Networking is not transactional collecting of contacts; it is cultivating genuine relationships.",
          learn: "Focus on curiosity, active listening, and ways you can add value to others before asking for favors.",
          example: "Connecting with an alumnus whose research paper you read, asking a thoughtful question about their methodology.",
          quiz: {
            question: "What is the best mindset when beginning a new networking connection?",
            options: [
              { text: "Curiosity and offering value", correct: true },
              { text: "Asking for a job immediately", correct: false },
              { text: "Bragging about your accomplishments", correct: false }
            ],
            explanation: "Mutual respect and genuine intellectual curiosity open far more doors."
          }
        },
        {
          id: 2,
          title: "Informational Interviewing",
          summary: "Reaching out to alumni and industry professionals.",
          keyIdea: "Informational interviews allow you to explore career paths and gain industry insights.",
          learn: "Reach out with a short, polite message requesting a 15-minute conversation. Prepare 3-5 focused questions.",
          example: "Sending a LinkedIn message to a data analyst asking how they transitioned from university to their first role.",
          quiz: {
            question: "What should you ask in an informational interview?",
            options: [
              { text: "Day-to-day challenges and career lessons", correct: true },
              { text: "Confidential company trade secrets", correct: false },
              { text: "Demand an internship on the spot", correct: false }
            ],
            explanation: "Focusing on insights and advice makes the interviewee comfortable and helpful."
          }
        }
      ]
    }
  },
  {
    id: "academic-success",
    name: "Academic Success",
    category: "academic",
    icon: "graduation-cap",
    description: "View learning modules",
    course: {
      title: "Academic Success",
      subtitle: "Strategies for high-impact learning, critical reasoning, and study excellence",
      modules: [
        {
          id: 1,
          title: "Time Management & Study Habits",
          summary: "Prioritizing tasks and managing deadlines effectively.",
          keyIdea: "Consistency beats cramming. Spaced repetition and active recall produce enduring retention.",
          learn: "Use time-blocking and the Pomodoro technique to maintain deep focus without cognitive burnout.",
          example: "Studying 45 minutes daily over two weeks instead of pulling an all-nighter before an exam.",
          quiz: {
            question: "Which study method has the highest scientific retention rate?",
            options: [
              { text: "Active recall and spaced repetition", correct: true },
              { text: "Passive re-reading of highlighted text", correct: false },
              { text: "Cramming the night before", correct: false }
            ],
            explanation: "Testing yourself at spaced intervals forces memory consolidation in the brain."
          }
        },
        {
          id: 2,
          title: "Critical Thinking & Academic Integrity",
          summary: "Evaluating arguments, evidence, and citations.",
          keyIdea: "Critical thinking means questioning assumptions and evaluating empirical evidence rigorously.",
          learn: "Differentiate between correlation and causation. Properly attribute external ideas with recognized citations.",
          example: "Cross-referencing claims from multiple peer-reviewed papers before forming a thesis conclusion.",
          quiz: {
            question: "Why is proper citation essential in academic writing?",
            options: [
              { text: "To acknowledge original ideas and prevent plagiarism", correct: true },
              { text: "Only to make the bibliography longer", correct: false },
              { text: "To confuse the reader", correct: false }
            ],
            explanation: "Academic integrity respects intellectual property and builds verifiable research."
          }
        }
      ]
    }
  },
  {
    id: "professional-conduct",
    name: "Professional Conduct",
    category: "career",
    icon: "briefcase",
    description: "View learning modules",
    course: {
      title: "Professional Conduct",
      subtitle: "Workplace ethics, integrity, accountability, and team standards",
      modules: [
        {
          id: 1,
          title: "Workplace Ethics & Accountability",
          summary: "Core ethical principles and taking responsibility for outcomes.",
          keyIdea: "Integrity is doing the right thing consistently, especially when no one is watching.",
          learn: "Own your mistakes immediately, communicate proactively when deadlines shift, and protect sensitive data.",
          example: "Informing your supervisor early when a project milestone is blocked, offering two potential solutions.",
          quiz: {
            question: "When you discover a mistake in your work, what is the best professional response?",
            options: [
              { text: "Acknowledge it promptly and propose a correction", correct: true },
              { text: "Blame a teammate", correct: false },
              { text: "Try to conceal it", correct: false }
            ],
            explanation: "Prompt transparency and solution-oriented accountability build professional trust."
          }
        }
      ]
    }
  },
  {
    id: "communication",
    name: "Communication",
    category: "career",
    icon: "messages-square",
    description: "View learning modules",
    course: {
      title: "Communication Skills",
      subtitle: "Example course structure",
      modules: [
        {
          id: 1,
          title: "Fundamentals of Communication",
          summary: "Understand communication principles.",
          keyIdea: "Communication is a two-way loop involving sender, message, channel, receiver, and feedback.",
          learn: "Eliminate noise, understand the receiver's context, and check for mutual understanding through feedback.",
          example: "Summarizing what you understood from a lecture before asking a follow-up question.",
          quiz: {
            question: "What confirms that a message was accurately understood?",
            options: [
              { text: "Clear feedback and confirmation from the receiver", correct: true },
              { text: "Assuming silence means complete agreement", correct: false },
              { text: "Speaking louder", correct: false }
            ],
            explanation: "Effective feedback completes the communication loop."
          }
        },
        {
          id: 2,
          title: "Verbal Communication",
          summary: "Practise speaking clearly.",
          keyIdea: "Effective communication is not only about speaking. It also involves organizing your ideas and understanding your audience.",
          learn: "Explain your main point first, provide supporting details, and conclude with the message you want your audience to remember. Read at your own pace. Continue when you're ready.",
          example: "A student presenting a group project introduces the topic, explains the team's findings, and ends with the main conclusion. Examples help connect concepts to everyday life.",
          quiz: {
            question: "What should you establish first when preparing a presentation?",
            options: [
              { text: "The main message", correct: true },
              { text: "The background decoration", correct: false },
              { text: "The number of slides", correct: false }
            ],
            explanation: "The core message guides all supporting arguments, structure, and slide decisions."
          }
        },
        {
          id: 3,
          title: "Non-verbal Communication",
          summary: "Understand gestures and body language.",
          keyIdea: "Non-verbal cues like eye contact, posture, and facial expressions reinforce or undermine spoken words.",
          learn: "Maintain open posture, appropriate eye contact, and attentive head nodding when engaging with collaborators.",
          example: "Sitting upright and maintaining eye contact during a video conference to show active participation.",
          quiz: {
            question: "How does body language affect spoken communication?",
            options: [
              { text: "It reinforces or contradicts the spoken message", correct: true },
              { text: "It has zero impact on listeners", correct: false },
              { text: "It only matters in theater", correct: false }
            ],
            explanation: "Humans instinctively interpret posture, expressions, and tone alongside spoken language."
          }
        },
        {
          id: 4,
          title: "Presentation Skills",
          summary: "Organize and deliver presentations.",
          keyIdea: "A good presentation engages the audience's attention, clearly explains key points, and inspires action.",
          learn: "Structure presentations into: Hook, Problem Statement, Solution / Findings, and Clear Call-to-Action.",
          example: "Using a storytelling hook to introduce complex data in a departmental project review.",
          quiz: {
            question: "What is the primary role of presentation visual slides?",
            options: [
              { text: "To visually support and clarify your spoken points", correct: true },
              { text: "To hold whole paragraphs of text for reading aloud", correct: false },
              { text: "To show decorative clip art", correct: false }
            ],
            explanation: "Slides should amplify the speaker's message, not distract from it."
          }
        },
        {
          id: 5,
          title: "Written Communication",
          summary: "Write clear academic and professional messages.",
          keyIdea: "Written messages must be clear, concise, structured, and free of ambiguity.",
          learn: "Use informative subject lines, clear bullet points for action items, and polite opening and closing greetings.",
          example: "Writing a concise email to a lecturer requesting a recommendation letter with all necessary dates attached.",
          quiz: {
            question: "What should the subject line of a professional email contain?",
            options: [
              { text: "A specific and concise summary of the email topic", correct: true },
              { text: "Just 'Urgent' with no details", correct: false },
              { text: "Leave it completely blank", correct: false }
            ],
            explanation: "A precise subject line allows the recipient to immediately categorize and prioritize the message."
          }
        }
      ]
    }
  },
  {
    id: "digital-learning",
    name: "Digital Learning",
    category: "academic",
    icon: "monitor",
    description: "View learning modules",
    course: {
      title: "Digital Learning",
      subtitle: "Navigating digital tools, LMS platforms, and modern self-directed learning",
      modules: [
        {
          id: 1,
          title: "Mastering Learning Management Systems (LMS)",
          summary: "Navigating modules, submissions, and course discussions.",
          keyIdea: "A structured digital workspace reduces friction and keeps assignments organized.",
          learn: "Check discussion forums regularly, organize course downloads into cloud folders, and set reminders for submission deadlines.",
          example: "Setting up automated calendar notifications 48 hours before an LMS deadline.",
          quiz: {
            question: "What is best practice for submitting digital coursework?",
            options: [
              { text: "Submit in advance in the requested format and verify receipt", correct: true },
              { text: "Wait until the final minute and hope connection holds", correct: false },
              { text: "Email an unformatted draft to classmates", correct: false }
            ],
            explanation: "Early submission avoids last-minute technical glitches."
          }
        }
      ]
    }
  },
  {
    id: "action-planning",
    name: "Action Planning",
    category: "personal",
    icon: "clipboard-list",
    description: "View learning modules",
    course: {
      title: "Action Planning",
      subtitle: "Transforming ambitions into structured, milestone-driven execution plans",
      modules: [
        {
          id: 1,
          title: "SMART Goals Formulation",
          summary: "Creating Specific, Measurable, Achievable, Relevant, and Time-bound plans.",
          keyIdea: "A goal without a timeline and milestones is just a wish.",
          learn: "Define each component of SMART to turn broad desires into weekly executable steps.",
          example: "'Complete 3 Python data analysis modules by Friday 5 PM' instead of 'learn Python'.",
          quiz: {
            question: "What does the 'M' in SMART goals represent?",
            options: [
              { text: "Measurable", correct: true },
              { text: "Meaningless", correct: false },
              { text: "Massive", correct: false }
            ],
            explanation: "Measurability gives you clear feedback on whether the goal has been achieved."
          }
        }
      ]
    }
  },
  {
    id: "research-skills",
    name: "Research Skills",
    category: "academic",
    icon: "search",
    description: "View learning modules",
    course: {
      title: "Research Skills",
      subtitle: "Inquiry methods, source evaluation, and scientific literature investigation",
      modules: [
        {
          id: 1,
          title: "Formulating Research Questions",
          summary: "Narrowing focus into testable, scholarly questions.",
          keyIdea: "A well-framed research question directs methodology and determines project feasibility.",
          learn: "Avoid questions that are too broad or easily answered with a simple fact; target analytical depth.",
          example: "Investigating how remote work impacts team communication latency across distributed time zones.",
          quiz: {
            question: "What characterizes a strong research question?",
            options: [
              { text: "Clear, focused, analytical, and researchable", correct: true },
              { text: "Extremely vague and open-ended", correct: false },
              { text: "Answerable with a simple yes or no", correct: false }
            ],
            explanation: "Depth and specificity provide meaningful inquiry grounds."
          }
        }
      ]
    }
  },
  {
    id: "personal-goals",
    name: "Personal Goals",
    category: "personal",
    icon: "target",
    description: "View learning modules",
    course: {
      title: "Personal Goals",
      subtitle: "Long-term vision setting, daily compounding habits, and self-mastery",
      modules: [
        {
          id: 1,
          title: "Vision & Value Alignment",
          summary: "Aligning short-term actions with long-term aspirations.",
          keyIdea: "Daily habits determine your future more than occasional heroic efforts.",
          learn: "Create a 3-year vision broken down into quarterly priorities and daily 20-minute habits.",
          example: "Reading 10 pages of industry literature daily to build domain mastery over a year.",
          quiz: {
            question: "How do daily habits influence long-term goals?",
            options: [
              { text: "Small daily actions compound over time into major mastery", correct: true },
              { text: "They make no difference compared to luck", correct: false },
              { text: "They only cause fatigue", correct: false }
            ],
            explanation: "The compounding effect of consistent deliberate practice produces excellence."
          }
        }
      ]
    }
  }
];

// SVG Icon Library
const iconSvgs = {
  user: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>',
  users: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>',
  'graduation-cap': '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg>',
  briefcase: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect width="20" height="14" x="2" y="6" rx="2"></rect></svg>',
  'messages-square': '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2z"></path><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"></path></svg>',
  monitor: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="3" rx="2"></rect><line x1="8" x2="16" y1="21" y2="21"></line><line x1="12" x2="12" y1="17" y2="21"></line></svg>',
  'clipboard-list': '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><path d="M12 11h4"></path><path d="M12 16h4"></path><path d="M8 11h.01"></path><path d="M8 16h.01"></path></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>',
  target: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>',
  arrowRight: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>'
};

// Global Web Application Engine
class UpskillingPlatform {
  constructor() {
    this.skills = this.loadSkills();
    this.progress = this.loadProgress();
    this.activeFilter = 'all';
    this.searchQuery = '';
    this.currentSkill = null;
    this.currentModuleIndex = 0;
    this.currentTab = 'learn';

    this.initElements();
    this.bindEvents();
    this.renderSkillsGrid();
  }

  loadSkills() {
    const saved = localStorage.getItem('upskilling_skills_data');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) {}
    }
    return defaultSkillsData;
  }

  saveSkills() {
    localStorage.setItem('upskilling_skills_data', JSON.stringify(this.skills));
  }

  loadProgress() {
    const saved = localStorage.getItem('upskilling_progress_data');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) {}
    }
    return { completedModules: {}, bookmarks: {}, lastActiveSkill: 'communication', lastActiveIndex: 1 };
  }

  saveProgress() {
    localStorage.setItem('upskilling_progress_data', JSON.stringify(this.progress));
  }

  initElements() {
    // Views
    this.dashboardView = document.getElementById('dashboard-view');
    this.courseView = document.getElementById('course-view');
    this.lessonView = document.getElementById('lesson-view');
    this.skillsGrid = document.getElementById('skills-grid');

    // Nav
    this.navBtnDashboard = document.getElementById('nav-btn-dashboard');
    this.navBtnCourses = document.getElementById('nav-btn-courses');
    this.navBtnBookmarks = document.getElementById('nav-btn-bookmarks');
    this.globalSearch = document.getElementById('global-search');

    // Course view elements
    this.courseHeaderIcon = document.getElementById('course-header-icon');
    this.courseTitle = document.getElementById('course-title');
    this.courseSubtitle = document.getElementById('course-subtitle');
    this.modulesList = document.getElementById('modules-list');
    this.courseModulesCounter = document.getElementById('course-modules-counter');

    // Reader elements
    this.sidebarModuleList = document.getElementById('sidebar-module-list');
    this.lessonBrandTitle = document.getElementById('lesson-brand-title');
    this.lessonBrandCrumb = document.getElementById('lesson-brand-crumb');
    this.lessonBookmarkBtn = document.getElementById('lesson-bookmark-btn');
    this.lessonCounter = document.getElementById('lesson-counter');
    this.lessonMainTitle = document.getElementById('lesson-main-title');
    this.lessonProgressFill = document.getElementById('lesson-progress-fill');
    this.lessonKeyIdeaText = document.getElementById('lesson-key-idea-text');

    // Tabs
    this.tabLearn = document.getElementById('tab-learn');
    this.tabExample = document.getElementById('tab-example');
    this.tabPractice = document.getElementById('tab-practice');

    // Modal
    this.modal = document.getElementById('add-modal');
  }

  bindEvents() {
    // Navbar links
    this.navBtnDashboard?.addEventListener('click', () => {
      this.setActiveNav(this.navBtnDashboard);
      this.showDashboard();
    });
    this.navBtnCourses?.addEventListener('click', () => {
      this.setActiveNav(this.navBtnCourses);
      this.showCourse(this.currentSkill ? this.currentSkill.id : 'communication');
    });
    this.navBtnBookmarks?.addEventListener('click', () => {
      this.setActiveNav(this.navBtnBookmarks);
      this.showBookmarksView();
    });

    document.getElementById('nav-brand-logo')?.addEventListener('click', (e) => {
      e.preventDefault();
      this.setActiveNav(this.navBtnDashboard);
      this.showDashboard();
    });

    // Continue Learning Button in Welcome Banner
    document.getElementById('btn-continue-learning')?.addEventListener('click', () => {
      const targetSkill = this.progress.lastActiveSkill || 'communication';
      const targetIdx = this.progress.lastActiveIndex !== undefined ? this.progress.lastActiveIndex : 0;
      this.currentSkill = this.skills.find(s => s.id === targetSkill) || this.skills[0];
      this.showLesson(targetIdx);
    });

    // Search Box Real-Time Filter
    this.globalSearch?.addEventListener('input', (e) => {
      this.searchQuery = e.target.value.toLowerCase().trim();
      this.renderSkillsGrid();
    });

    // Category Filter Buttons
    document.querySelectorAll('.filter-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.activeFilter = btn.getAttribute('data-filter');
        this.renderSkillsGrid();
      });
    });

    // Back Buttons
    document.getElementById('btn-back-to-dashboard')?.addEventListener('click', () => {
      this.setActiveNav(this.navBtnDashboard);
      this.showDashboard();
    });
    document.getElementById('btn-back-to-course')?.addEventListener('click', () => {
      this.showCourse(this.currentSkill.id);
    });

    // Reader Tabs
    document.querySelectorAll('.tab-pill-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const tab = e.target.getAttribute('data-tab');
        this.switchTab(tab);
      });
    });

    // Reader Navigation Buttons
    document.getElementById('btn-prev-lesson')?.addEventListener('click', () => this.navigateLesson(-1));
    document.getElementById('btn-next-lesson')?.addEventListener('click', () => this.navigateLesson(1));
    document.getElementById('btn-mark-complete')?.addEventListener('click', () => this.markCurrentLessonComplete());

    // Bookmark Toggle
    this.lessonBookmarkBtn?.addEventListener('click', () => this.toggleBookmark());

    // Modal Events
    document.getElementById('btn-open-add-modal')?.addEventListener('click', () => {
      this.modal.classList.add('active');
    });
    document.getElementById('btn-close-modal')?.addEventListener('click', () => {
      this.modal.classList.remove('active');
    });
    document.getElementById('btn-cancel-modal')?.addEventListener('click', () => {
      this.modal.classList.remove('active');
    });

    // Add Module Form
    document.getElementById('add-module-form')?.addEventListener('submit', (e) => {
      e.preventDefault();
      this.handleAddModuleSubmit();
    });
  }

  setActiveNav(activeBtn) {
    document.querySelectorAll('.nav-item-btn').forEach(b => b.classList.remove('active'));
    if (activeBtn) activeBtn.classList.add('active');
  }

  renderSkillsGrid() {
    if (!this.skillsGrid) return;
    this.skillsGrid.innerHTML = '';

    // Filter by category and search query
    const filtered = this.skills.filter(s => {
      const matchesCategory = (this.activeFilter === 'all') || (s.category === this.activeFilter);
      const matchesSearch = !this.searchQuery || 
        s.name.toLowerCase().includes(this.searchQuery) || 
        s.description.toLowerCase().includes(this.searchQuery) ||
        (s.course?.modules && s.course.modules.some(m => m.title.toLowerCase().includes(this.searchQuery)));
      return matchesCategory && matchesSearch;
    });

    document.getElementById('skills-total-pill').textContent = `${filtered.length} Categories Available`;

    if (filtered.length === 0) {
      this.skillsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; padding: 48px 0; text-align: center; color: #94a3b8;">
          <p style="font-size: 15px; margin-bottom: 8px;">No matching skills found for "${this.searchQuery}"</p>
          <button class="btn-secondary" onclick="document.getElementById('global-search').value=''; window.upskillingPlatform.searchQuery=''; window.upskillingPlatform.renderSkillsGrid();">Clear Search</button>
        </div>
      `;
      return;
    }

    filtered.forEach(skill => {
      const card = document.createElement('div');
      card.className = 'skill-card';
      card.tabIndex = 0;
      card.role = 'button';
      card.setAttribute('data-skill-id', skill.id);
      card.setAttribute('aria-label', `${skill.name} - ${skill.description}`);

      const iconSvg = iconSvgs[skill.icon] || iconSvgs.user;
      const totalMods = skill.course?.modules?.length || 0;
      
      let completedCount = 0;
      if (skill.course?.modules) {
        skill.course.modules.forEach(m => {
          if (this.progress.completedModules[`${skill.id}-${m.id}`]) completedCount++;
        });
      }

      const isCompleted = totalMods > 0 && completedCount === totalMods;
      const inProgress = completedCount > 0 && !isCompleted;

      card.innerHTML = `
        <div class="card-left">
          <div class="card-icon-wrapper">${iconSvg}</div>
          <div class="card-text-group">
            <span class="skill-name">${skill.name}</span>
            <span class="skill-description">
              ${skill.description}
            </span>
          </div>
        </div>
        <div class="card-right">
          <span class="module-count-badge">${totalMods} modules</span>
          <span class="card-status-pill completed ${isCompleted ? 'active' : ''}">✓ Done</span>
          <span class="card-status-pill in-progress ${inProgress ? 'active' : ''}">${completedCount}/${totalMods}</span>
          <div class="card-arrow">${iconSvgs.arrowRight}</div>
        </div>
      `;

      card.addEventListener('click', () => {
        this.setActiveNav(this.navBtnCourses);
        this.showCourse(skill.id);
      });

      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.showCourse(skill.id);
        }
      });

      this.skillsGrid.appendChild(card);
    });
  }

  showDashboard() {
    this.courseView.classList.remove('active');
    this.lessonView.classList.remove('active');
    this.dashboardView.classList.add('active');
    this.renderSkillsGrid();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  showCourse(skillId) {
    const skill = this.skills.find(s => s.id === skillId) || this.skills[0];
    if (!skill) return;
    this.currentSkill = skill;

    this.dashboardView.classList.remove('active');
    this.lessonView.classList.remove('active');
    this.courseView.classList.add('active');

    // Populate Course Banner
    this.courseHeaderIcon.innerHTML = iconSvgs[skill.icon] || iconSvgs.user;
    this.courseTitle.textContent = skill.course.title;
    this.courseSubtitle.textContent = skill.course.subtitle || "Comprehensive competency modules and interactive lessons.";

    const modules = skill.course.modules || [];
    this.courseModulesCounter.textContent = `${modules.length} Modules`;

    // Populate Module List
    this.modulesList.innerHTML = '';
    modules.forEach((mod, idx) => {
      const item = document.createElement('div');
      item.className = 'module-item';
      const numStr = String(idx + 1).padStart(2, '0');
      const modKey = `${skill.id}-${mod.id}`;
      const isDone = !!this.progress.completedModules[modKey];

      item.innerHTML = `
        <div class="module-number">${numStr}</div>
        <div class="module-info">
          <div class="module-heading">${mod.title}</div>
          <div class="module-subtext">${mod.summary || ''}</div>
        </div>
        <div class="module-item-right">
          <span class="card-status-pill ${isDone ? 'completed active' : ''}">✓ Completed</span>
          <button class="btn-start-lesson">
            ${isDone ? 'Review Lesson' : 'Start Lesson'}
            ${iconSvgs.arrowRight}
          </button>
        </div>
      `;

      item.addEventListener('click', () => this.showLesson(idx));
      this.modulesList.appendChild(item);
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  showLesson(moduleIndex) {
    if (!this.currentSkill || !this.currentSkill.course.modules) return;
    const modules = this.currentSkill.course.modules;
    if (moduleIndex < 0 || moduleIndex >= modules.length) return;

    this.currentModuleIndex = moduleIndex;
    const mod = modules[moduleIndex];
    const total = modules.length;

    // Track active position
    this.progress.lastActiveSkill = this.currentSkill.id;
    this.progress.lastActiveIndex = moduleIndex;
    this.saveProgress();

    this.dashboardView.classList.remove('active');
    this.courseView.classList.remove('active');
    this.lessonView.classList.add('active');

    // Update Reader Sidebar Chapters
    this.renderSidebarChapters(modules, moduleIndex);

    // Header Branding & Breadcrumbs
    this.lessonBrandTitle.textContent = "Upskilling System";
    this.lessonBrandCrumb.textContent = `My Learning / ${this.currentSkill.name}`;

    // Bookmark State
    const modKey = `${this.currentSkill.id}-${mod.id}`;
    if (this.progress.bookmarks[modKey]) {
      this.lessonBookmarkBtn.classList.add('active');
      this.lessonBookmarkBtn.querySelector('span').textContent = 'Bookmarked';
    } else {
      this.lessonBookmarkBtn.classList.remove('active');
      this.lessonBookmarkBtn.querySelector('span').textContent = 'Bookmark';
    }

    // Module counter & status
    this.lessonCounter.textContent = `MODULE ${moduleIndex + 1} OF ${total}`;
    this.lessonMainTitle.textContent = mod.title;

    // Progress Bar
    const percent = Math.round(((moduleIndex + 1) / total) * 100);
    this.lessonProgressFill.style.width = `${percent}%`;

    // Key Idea Callout Box
    this.lessonKeyIdeaText.textContent = mod.keyIdea || "Apply practical knowledge directly in your projects.";

    // Render Tabs
    this.renderTabContents(mod);
    this.switchTab('learn');

    // Update Previous/Next Buttons
    const prevBtn = document.getElementById('btn-prev-lesson');
    if (prevBtn) {
      prevBtn.style.opacity = moduleIndex === 0 ? '0.5' : '1';
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  renderSidebarChapters(modules, activeIndex) {
    if (!this.sidebarModuleList) return;
    this.sidebarModuleList.innerHTML = '';

    modules.forEach((m, idx) => {
      const li = document.createElement('li');
      const numStr = String(idx + 1).padStart(2, '0');
      const isCurrent = idx === activeIndex;
      const modKey = `${this.currentSkill.id}-${m.id}`;
      const isDone = !!this.progress.completedModules[modKey];

      li.innerHTML = `
        <a class="sidebar-mod-link ${isCurrent ? 'active' : ''}">
          <span class="sidebar-mod-num">${numStr}.</span>
          <span style="flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${m.title}</span>
          ${isDone ? '<span style="color: var(--success); font-size: 11px;">✓</span>' : ''}
        </a>
      `;

      li.addEventListener('click', (e) => {
        e.preventDefault();
        this.showLesson(idx);
      });

      this.sidebarModuleList.appendChild(li);
    });
  }

  renderTabContents(mod) {
    // Learn Panel
    this.tabLearn.innerHTML = `
      <h4 class="panel-heading">1. Core Concepts & Framework</h4>
      <p class="panel-body-text">${mod.learn || 'Study the structured concepts for this module.'}</p>
      <div class="panel-footnote">Read at your own pace. Proceed to the Example tab to see practical usage.</div>
    `;

    // Example Panel
    this.tabExample.innerHTML = `
      <h4 class="panel-heading">Real-Life Application Scenario</h4>
      <p class="panel-body-text">${mod.example || 'Concrete examples bridge theoretical knowledge into everyday execution.'}</p>
      <div class="panel-footnote">Examples illustrate how to apply these techniques in academic and workplace tasks.</div>
    `;

    // Practice Panel (Interactive Quiz)
    const quiz = mod.quiz || {
      question: "What is the primary objective of this lesson?",
      options: [
        { text: "Master practical application and retain core habits", correct: true },
        { text: "Passive observation with no practice", correct: false }
      ],
      explanation: "Active recall and deliberate practice create enduring competence."
    };

    let optionsHtml = '';
    quiz.options.forEach((opt, idx) => {
      optionsHtml += `
        <label class="quiz-option-card" data-idx="${idx}">
          <input type="radio" name="lesson-quiz" value="${idx}">
          <span>${opt.text}</span>
        </label>
      `;
    });

    this.tabPractice.innerHTML = `
      <h4 class="panel-heading">Quick Knowledge Check</h4>
      <p class="panel-body-text" style="font-weight: 500; margin-bottom: 8px;">${quiz.question}</p>
      <div class="quiz-options-group">${optionsHtml}</div>
      <div id="quiz-feedback-box" class="quiz-feedback-box"></div>
    `;

    // Radio option click listener
    const optionCards = this.tabPractice.querySelectorAll('.quiz-option-card');
    const feedbackBox = this.tabPractice.querySelector('#quiz-feedback-box');

    optionCards.forEach(card => {
      card.addEventListener('click', () => {
        const idx = parseInt(card.getAttribute('data-idx'), 10);
        const opt = quiz.options[idx];

        optionCards.forEach(c => c.classList.remove('correct', 'incorrect'));

        if (opt.correct) {
          card.classList.add('correct');
          feedbackBox.className = 'quiz-feedback-box active success';
          feedbackBox.innerHTML = `<strong>Correct!</strong> ${quiz.explanation || 'Great job understanding this key idea.'}`;
          // Auto mark as completed
          this.markCurrentLessonComplete(false);
        } else {
          card.classList.add('incorrect');
          feedbackBox.className = 'quiz-feedback-box active error';
          feedbackBox.innerHTML = `<strong>Not quite:</strong> Review the Learn tab and consider the core purpose of the technique.`;
        }
      });
    });
  }

  switchTab(tabName) {
    this.currentTab = tabName;
    document.querySelectorAll('.tab-pill-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-tab') === tabName);
    });

    document.querySelectorAll('.tab-content-panel').forEach(panel => {
      panel.classList.toggle('active', panel.id === `tab-${tabName}`);
    });
  }

  markCurrentLessonComplete(showAlert = true) {
    if (!this.currentSkill) return;
    const mod = this.currentSkill.course.modules[this.currentModuleIndex];
    const modKey = `${this.currentSkill.id}-${mod.id}`;
    this.progress.completedModules[modKey] = true;
    this.saveProgress();

    // Re-render sidebar to show checkmark
    this.renderSidebarChapters(this.currentSkill.course.modules, this.currentModuleIndex);

    if (showAlert) {
      alert(`Lesson "${mod.title}" marked as complete!`);
    }
  }

  navigateLesson(direction) {
    const nextIndex = this.currentModuleIndex + direction;
    const modules = this.currentSkill.course.modules;
    if (nextIndex >= 0 && nextIndex < modules.length) {
      this.showLesson(nextIndex);
    } else if (nextIndex >= modules.length) {
      alert(`🎉 Congratulations! You have finished all modules in ${this.currentSkill.name}.`);
      this.showCourse(this.currentSkill.id);
    } else {
      this.showCourse(this.currentSkill.id);
    }
  }

  toggleBookmark() {
    if (!this.currentSkill) return;
    const mod = this.currentSkill.course.modules[this.currentModuleIndex];
    const modKey = `${this.currentSkill.id}-${mod.id}`;

    if (this.progress.bookmarks[modKey]) {
      delete this.progress.bookmarks[modKey];
      this.lessonBookmarkBtn.classList.remove('active');
      this.lessonBookmarkBtn.querySelector('span').textContent = 'Bookmark';
    } else {
      this.progress.bookmarks[modKey] = true;
      this.lessonBookmarkBtn.classList.add('active');
      this.lessonBookmarkBtn.querySelector('span').textContent = 'Bookmarked';
    }
    this.saveProgress();
  }

  showBookmarksView() {
    const bookmarkedKeys = Object.keys(this.progress.bookmarks);
    if (bookmarkedKeys.length === 0) {
      alert('You have no bookmarked modules yet. Open any lesson and click the Bookmark button to save it here!');
      this.showDashboard();
      return;
    }

    this.dashboardView.classList.remove('active');
    this.lessonView.classList.remove('active');
    this.courseView.classList.add('active');

    this.courseHeaderIcon.innerHTML = iconSvgs.user;
    this.courseTitle.textContent = "My Bookmarked Lessons";
    this.courseSubtitle.textContent = "Quick access to your saved learning modules";
    this.courseModulesCounter.textContent = `${bookmarkedKeys.length} Saved`;

    this.modulesList.innerHTML = '';
    bookmarkedKeys.forEach((key, idx) => {
      const [skillId, modId] = key.split('-');
      const skill = this.skills.find(s => s.id === skillId);
      if (!skill) return;
      const mod = skill.course.modules.find(m => String(m.id) === modId);
      if (!mod) return;

      const item = document.createElement('div');
      item.className = 'module-item';
      item.innerHTML = `
        <div class="module-number">${String(idx + 1).padStart(2, '0')}</div>
        <div class="module-info">
          <div class="module-heading">${mod.title}</div>
          <div class="module-subtext">${skill.name} • ${mod.summary || ''}</div>
        </div>
        <button class="btn-start-lesson">Open Lesson ${iconSvgs.arrowRight}</button>
      `;

      item.addEventListener('click', () => {
        this.currentSkill = skill;
        const modIdx = skill.course.modules.indexOf(mod);
        this.showLesson(modIdx);
      });

      this.modulesList.appendChild(item);
    });
  }

  handleAddModuleSubmit() {
    const skillSelect = document.getElementById('new-module-skill').value;
    const title = document.getElementById('new-module-title').value.trim();
    const summary = document.getElementById('new-module-summary').value.trim();
    const keyIdea = document.getElementById('new-module-keyidea').value.trim();

    if (!title) return;

    const targetSkill = this.skills.find(s => s.id === skillSelect);
    if (!targetSkill) return;

    if (!targetSkill.course.modules) targetSkill.course.modules = [];
    const newId = targetSkill.course.modules.length + 1;

    targetSkill.course.modules.push({
      id: newId,
      title: title,
      summary: summary || "New interactive learning module.",
      keyIdea: keyIdea || "Apply practical knowledge directly in your projects.",
      learn: `Detailed learning guide for ${title}. Study key ideas and integrate them with your academic development.`,
      example: `Practical real-world application of ${title}.`,
      quiz: {
        question: `What is the core focus of ${title}?`,
        options: [
          { text: "Executing clear deliberate milestones", correct: true },
          { text: "Ignoring structured planning", correct: false }
        ],
        explanation: "Consistent execution delivers consistent competence."
      }
    });

    this.saveSkills();
    this.modal.classList.remove('active');
    document.getElementById('add-module-form').reset();

    if (this.currentSkill && this.currentSkill.id === skillSelect) {
      this.showCourse(skillSelect);
    } else {
      this.renderSkillsGrid();
      alert(`Module "${title}" added successfully to ${targetSkill.name}!`);
    }
  }
}

// Global initialization
document.addEventListener('DOMContentLoaded', () => {
  window.upskillingPlatform = new UpskillingPlatform();
});
