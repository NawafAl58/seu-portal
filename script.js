document.addEventListener('DOMContentLoaded', () => {
    const courseContent = {
        'ENG001': {
            title: 'ENG001: English Skills',
            category: 'first-year',
            diff: 'easy',
            icon: 'fas fa-language',
            hrs: '8',
            desc: 'Intensive academic English proficiency development.',
            summary: '<h3>ENG001: English Skills - Comprehensive Course Summary</h3><p>ENG001 is the cornerstone of the first-year experience at SEU...</p>'
        },
        'CS001': {
            title: 'CS001: Computer Essentials',
            category: 'first-year',
            diff: 'easy',
            icon: 'fas fa-laptop',
            hrs: '3',
            desc: 'Foundational computing concepts and digital tool mastery.',
            summary: '<h3>CS001: Computer Essentials - Exhaustive Guide</h3><p>This course provides the absolute baseline of digital literacy...</p>'
        },
        'MATH001': {
            title: 'MATH001: College Algebra',
            category: 'first-year',
            diff: 'med',
            icon: 'fas fa-calculator',
            hrs: '3',
            desc: 'Fundamental algebraic structures and mathematical logic.',
            summary: '<h3>MATH001: College Algebra - Technical Reference</h3><p>Algebra serves as the logical infrastructure for programming...</p>'
        },
        'MATH150': {
            title: 'MATH150: Discrete Mathematics',
            category: 'math',
            diff: 'hard',
            icon: 'fas fa-project-diagram',
            hrs: '3',
            desc: 'Logic, set theory, and graph theory for computer science.',
            summary: '<h3>MATH150: Discrete Mathematics - The Computer Scientist\'s Toolkit</h3><p>Discrete Math deals with distinct, separate values rather than continuous ones.</p>'
        },
        'MATH251': {
            title: 'MATH251: Linear Algebra',
            category: 'math',
            diff: 'hard',
            icon: 'fas fa-th',
            hrs: '3',
            desc: 'Vector spaces, matrices, and linear transformations.',
            summary: '<h3>MATH251: Linear Algebra - Data Science Engine</h3><p>Linear Algebra is the engine behind modern AI and Computer Graphics.</p>'
        },
        'PHYS101': {
            title: 'PHYS101: General Physics',
            category: 'core-it',
            diff: 'hard',
            icon: 'fas fa-bolt',
            hrs: '3',
            desc: 'Classical mechanics, electricity, and optics.',
            summary: '<h3>PHYS101: General Physics - Hardware Foundations</h3><p>IT students study Physics to understand physical reality.</p>'
        },
        'IT101': {
            title: 'IT101: Intro to IT & IS',
            category: 'it-core',
            diff: 'med',
            icon: 'fas fa-desktop',
            hrs: '3',
            desc: 'Infrastructure, systems, and digital ethics.',
            summary: '<h3>IT101: Intro to IT & IS - The Industry Blueprint</h3><p>This course provides a macro-view of the IT landscape.</p>'
        },
        'IT230': {
            title: 'IT230: Web Technologies',
            category: 'it-core',
            diff: 'med',
            icon: 'fas fa-code',
            hrs: '3',
            desc: 'Full-stack web development (HTML, CSS, JS, PHP).',
            summary: '<h3>IT230: Web Technologies - Full Stack Roadmap</h3><p>Web development is split into Client-Side and Server-Side.</p>'
        },
        'IT241': {
            title: 'IT241: Computer Networks',
            category: 'it-core',
            diff: 'hard',
            icon: 'fas fa-network-wired',
            hrs: '3',
            desc: 'Data communications and network architecture.',
            summary: '<h3>IT241: Computer Networks - The Connected World</h3><p>Understanding how data flows through global infrastructures.</p>'
        },
        'IT244': {
            title: 'IT244: Database Management',
            category: 'it-core',
            diff: 'med',
            icon: 'fas fa-database',
            hrs: '3',
            desc: 'Relational database design and SQL mastery.',
            summary: '<h3>IT244: Database Management - Data Architecture</h3><p>Data is the oil of the digital age. This course teaches how to store it.</p>'
        },
        'IT344': {
            title: 'IT344: Information Security',
            category: 'advanced',
            diff: 'hard',
            icon: 'fas fa-user-shield',
            hrs: '3',
            desc: 'Cybersecurity, cryptography, and defense.',
            summary: '<h3>IT344: Information Security - Defensive Operations</h3><p>In a world of threats, security is a requirement.</p>'
        }
    };

    const quizzes = {
        'MATH251': [
            {
                q: "What is the condition for a set of vectors to be a 'Basis' for a vector space?",
                options: ["They must be linearly independent only", "They must span the space only", "They must be linearly independent and span the space", "They must all be unit vectors"],
                correct: 2,
                exp: "A basis is defined by two critical properties: Linear Independence (no vector is a redundancy) and Spanning (the vectors can reach any point in the space)."
            },
            {
                q: "What does the Rank-Nullity Theorem state for an m x n matrix A?",
                options: ["Rank(A) + Nullity(A) = m", "Rank(A) + Nullity(A) = n", "Rank(A) = Nullity(A)", "Rank(A) * Nullity(A) = n"],
                correct: 1,
                exp: "The Rank-Nullity Theorem states that the dimension of the column space (Rank) plus the dimension of the null space (Nullity) equals the number of columns (n)."
            }
        ],
        'IT241': [
            {
                q: "Which layer of the OSI model is responsible for routing packets across different networks?",
                options: ["Data Link Layer", "Transport Layer", "Network Layer", "Physical Layer"],
                correct: 2,
                exp: "The Network Layer (Layer 3) handles logical addressing and path determination (routing)."
            }
        ]
    };

    const allCourseIds = [
        'ENG001', 'CS001', 'MATH001', 'MATH150', 'MATH251', 'PHYS101',
        'IT101', 'IT230', 'IT241', 'IT244', 'IT344'
    ];

    const finalCourses = allCourseIds.map(id => {
        if (courseContent[id]) {
            return { id, ...courseContent[id] };
        } else {
            return {
                id,
                title: id + ': Course Title',
                category: 'it-core',
                diff: 'med',
                icon: 'fas fa-book',
                hrs: '3',
                desc: 'Detailed exploration of ' + id + ' principles.',
                summary: '<h3>' + id + ' Summary</h3><p>Placeholder summary for ' + id + '.</p>'
            };
        }
    });

    const grid = document.getElementById('courseGrid');
    const search = document.getElementById('courseSearch');
    const modal = document.getElementById('courseModal');
    const closeM = document.getElementById('closeCourseModal');
    const navItems = document.querySelectorAll('.nav-links li');

    function render(filter = 'all', query = '') {
        if (!grid) return;
        grid.innerHTML = '';
        finalCourses.forEach(c => {
            if ((filter === 'all' || c.category === filter) && (c.id.toLowerCase().includes(query.toLowerCase()) || c.title.toLowerCase().includes(query.toLowerCase()))) {
                const card = document.createElement('div');
                card.className = 'course-card';
                card.innerHTML = \`
                    <div class="card-header">
                        <span class="badge \${c.diff}">\${c.diff}</span>
                        <div class="course-icon"><i class="\${c.icon}"></i></div>
                    </div>
                    <h3>\${c.title}</h3>
                    <div class="course-meta">
                        <span><i class="far fa-clock"></i> \${c.hrs} Credits</span>
                    </div>
                    <p>\${c.desc}</p>
                    <button class="primary-btn view-course" data-id="\${c.id}"><i class="fas fa-book-open"></i> Study Hub</button>
                \`;
                grid.appendChild(card);
            }
        });
        document.querySelectorAll('.view-course').forEach(btn => btn.onclick = () => openHub(btn.dataset.id));
    }

    function openHub(id) {
        if (!modal) return;
        const course = finalCourses.find(c => c.id === id);
        const modalTitle = document.getElementById('modalTitle');
        const summaryContent = document.getElementById('courseSummaryContent');
        if (modalTitle) modalTitle.innerText = course.title;
        if (summaryContent) summaryContent.innerHTML = course.summary;
        modal.style.display = 'flex';
        initQuiz(id);
    }

    let qIdx = 0, score = 0;
    function initQuiz(id) {
        qIdx = 0; score = 0;
        const quizContent = document.getElementById('quizContent');
        const quizResult = document.getElementById('quizResult');
        if (quizContent) quizContent.classList.remove('hidden');
        if (quizResult) quizResult.classList.add('hidden');
        showQ(id);
    }

    function showQ(id) {
        const courseQuiz = quizzes[id] || [{q: "Quiz coming soon for " + id, options: ["Ok"], correct: 0, exp: "Coming soon!"}];
        const currentQ = courseQuiz[qIdx] || courseQuiz[0];
        
        const progressBar = document.getElementById('quizProgress');
        const questionText = document.getElementById('questionText');
        const optCont = document.getElementById('optionsContainer');
        const expBox = document.getElementById('explanationBox');
        const nextBtn = document.getElementById('nextBtn');

        if (progressBar) progressBar.style.width = \`\${((qIdx + 1) / courseQuiz.length) * 100}%\`;
        if (questionText) questionText.innerText = currentQ.q;
        if (optCont) optCont.innerHTML = ''; 
        if (expBox) expBox.classList.add('hidden'); 
        if (nextBtn) nextBtn.classList.add('hidden');

        if (optCont) {
            currentQ.options.forEach((opt, i) => {
                const div = document.createElement('div');
                div.className = 'option-card';
                div.innerHTML = \`<span>\${opt}</span><i class="far fa-circle"></i>\`;
                div.onclick = () => {
                    if (nextBtn && nextBtn.classList.contains('hidden')) {
                        const all = optCont.querySelectorAll('.option-card');
                        all[currentQ.correct].classList.add('correct');
                        if (i === currentQ.correct) score++; else div.classList.add('wrong');
                        if (expBox) {
                            expBox.innerText = currentQ.exp;
                            expBox.classList.remove('hidden');
                        }
                        if (nextBtn) nextBtn.classList.remove('hidden');
                        all.forEach(o => o.style.pointerEvents = 'none');
                    }
                };
                optCont.appendChild(div);
            });
        }
        
        if (nextBtn) {
            nextBtn.onclick = () => {
                qIdx++;
                if (qIdx < courseQuiz.length) {
                    showQ(id);
                } else {
                    const quizContent = document.getElementById('quizContent');
                    const quizResult = document.getElementById('quizResult');
                    const scoreText = document.getElementById('scoreText');
                    if (quizContent) quizContent.classList.add('hidden');
                    if (quizResult) quizResult.classList.remove('hidden');
                    if (scoreText) scoreText.innerText = score + " / " + courseQuiz.length;
                }
            };
        }
    }

    navItems.forEach(li => li.onclick = () => {
        navItems.forEach(n => n.classList.remove('active')); 
        li.classList.add('active');
        render(li.dataset.filter, search ? search.value : '');
    });

    if (search) {
        search.oninput = (e) => {
            const activeNav = document.querySelector('.nav-links li.active');
            render(activeNav ? activeNav.dataset.filter : 'all', e.target.value);
        };
    }

    if (closeM) {
        closeM.onclick = () => { if (modal) modal.style.display = 'none'; };
    }
    
    document.querySelectorAll('.tab-btn').forEach(btn => btn.onclick = () => {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active')); 
        btn.classList.add('active');
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        const targetTab = document.getElementById(btn.dataset.tab + 'Tab');
        if (targetTab) targetTab.classList.add('active');
    });

    // Mobile Toggle
    const mobileToggle = document.getElementById('mobileToggle');
    const mobileClose = document.getElementById('mobileClose');
    const sidebar = document.getElementById('sidebar');
    const navOverlay = document.getElementById('navOverlay');

    if (mobileToggle && sidebar && navOverlay) {
        mobileToggle.onclick = () => {
            sidebar.classList.add('open');
            navOverlay.classList.add('active');
        };
    }

    if (mobileClose && sidebar && navOverlay) {
        mobileClose.onclick = () => {
            sidebar.classList.remove('open');
            navOverlay.classList.remove('active');
        };
    }

    if (navOverlay) {
        navOverlay.onclick = () => {
            if (sidebar) sidebar.classList.remove('open');
            navOverlay.classList.remove('active');
        };
    }

    // Set Current Date
    const dateEl = document.getElementById('currentDate');
    if (dateEl) {
        const now = new Date();
        dateEl.innerText = now.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
    }

    render();
});
