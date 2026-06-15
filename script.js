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
            category: 'college-req',
            diff: 'hard',
            icon: 'fas fa-project-diagram',
            hrs: '3',
            desc: 'Logic, set theory, and graph theory for computer science.',
            summary: '<h3>MATH150: Discrete Mathematics - The Computer Scientist\'s Toolkit</h3><p>Discrete Math deals with distinct, separate values rather than continuous ones.</p>'
        },
        'MATH251': {
            title: 'MATH251: Linear Algebra',
            category: 'college-req',
            diff: 'hard',
            icon: 'fas fa-th',
            hrs: '3',
            desc: 'Vector spaces, matrices, and linear transformations.',
            summary: '<h3>MATH251: Linear Algebra - Data Science Engine</h3><p>Linear Algebra is the engine behind modern AI and Computer Graphics.</p>'
        },
        'PHYS101': {
            title: 'PHYS101: General Physics',
            category: 'college-req',
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
            category: 'it-core',
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
            },
            {
                q: "In Gaussian Elimination, which operation is NOT allowed?",
                options: ["Swapping two rows", "Multiplying a row by zero", "Multiplying a row by a non-zero scalar", "Adding a multiple of one row to another"],
                correct: 1,
                exp: "Multiplying a row by zero destroys information and changes the solution set, thus it is not a valid elementary row operation."
            },
            {
                q: "What are Eigenvalues (λ) satisfying for a matrix A and vector v?",
                options: ["Av = λv", "Av = v/λ", "A + λI = 0", "det(A) = λ"],
                correct: 0,
                exp: "The eigenvalue equation is Av = λv, meaning the transformation A only scales the eigenvector v by a factor of λ without changing its direction."
            }
        ],
        'IT241': [
            {
                q: "Which layer of the OSI model is responsible for routing packets across different networks?",
                options: ["Data Link Layer", "Transport Layer", "Network Layer", "Physical Layer"],
                correct: 2,
                exp: "The Network Layer (Layer 3) handles logical addressing and path determination (routing)."
            },
            {
                q: "What is the primary difference between TCP and UDP?",
                options: ["UDP is more secure", "TCP is connection-oriented, UDP is connectionless", "TCP is faster than UDP", "UDP handles error correction"],
                correct: 1,
                exp: "TCP establishes a connection and ensures delivery, while UDP sends packets without confirmation, making it faster but less reliable."
            }
        ],
        'MATH150': [
            {
                q: "According to De Morgan's Laws, ¬(P ∧ Q) is logically equivalent to:",
                options: ["¬P ∧ ¬Q", "¬P ∨ ¬Q", "P ∨ Q", "¬P ∧ Q"],
                correct: 1,
                exp: "De Morgan's Law states that the negation of a conjunction is the disjunction of the negations: ¬(P ∧ Q) ≡ ¬P ∨ ¬Q."
            },
            {
                q: "In Graph Theory, what is a 'Cycle'?",
                options: ["A path that starts and ends at the same vertex", "A graph with no edges", "A vertex with no edges", "A path that visits every vertex once"],
                correct: 0,
                exp: "A cycle is a closed path where the start and end vertices are the same, with no other repeated vertices."
            }
        ],
        'IT244': [
            {
                q: "What does '3NF' (Third Normal Form) require?",
                options: ["No multi-valued attributes", "Every non-key attribute must depend only on the primary key", "No transitive dependencies", "All of the above"],
                correct: 2,
                exp: "3NF is reached when a table is in 2NF and has no transitive functional dependencies (non-key attributes depending on other non-key attributes)."
            },
            {
                q: "Which SQL command is used to remove all records from a table without deleting the table structure?",
                options: ["DROP", "DELETE", "TRUNCATE", "REMOVE"],
                correct: 2,
                exp: "TRUNCATE is a DDL command that removes all rows from a table, which is faster than DELETE and keeps the table structure."
            }
        ]
    };

    const allCourseIds = [
        'ENG001', 'CS001', 'COMM001', 'MATH001', 'MATH150', 'MATH251', 'STAT101', 'PHYS101',
        'IT101', 'IT230', 'IT241', 'IT244', 'IT245', 'IT340', 'IT344', 'IT343',
        'IT440', 'IT446', 'IT448', 'IT411', 'IT412', 'IT481', 'IT482',
        'IT471', 'IT473', 'IT451', 'IT452',
        'ISLM101', 'ISLM102', 'ISLM103', 'ISLM104'
    ];

    const finalCourses = allCourseIds.map(id => {
        if (courseContent[id]) {
            return { id, ...courseContent[id] };
        } else {
            const prefix = id.startsWith('IT') ? 'IT Core/Advanced' : id.startsWith('ISLM') ? 'University Requirement' : 'College Requirement';
            return {
                id,
                title: id + ': Course Title',
                category: id.startsWith('IT') ? (id >= 'IT400' ? 'advanced' : 'it-core') : (id.startsWith('ISLM') ? 'university-req' : 'college-req'),
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
        grid.innerHTML = '';
        finalCourses.forEach(c => {
            if ((filter === 'all' || c.category === filter) && (c.id.toLowerCase().includes(query.toLowerCase()) || c.title.toLowerCase().includes(query.toLowerCase()))) {
                const card = document.createElement('div');
                card.className = 'course-card';
                card.innerHTML = `
                    <div class="card-header">
                        <span class="badge ${c.diff}">${c.diff}</span>
                        <div class="course-icon"><i class="${c.icon}"></i></div>
                    </div>
                    <h3>${c.title}</h3>
                    <div class="course-meta">
                        <span><i class="far fa-clock"></i> ${c.hrs} Credits</span>
                    </div>
                    <p>${c.desc}</p>
                    <button class="primary-btn view-course" data-id="${c.id}"><i class="fas fa-book-open"></i> Study Hub</button>
                `;
                grid.appendChild(card);
            }
        });
        document.querySelectorAll('.view-course').forEach(btn => btn.onclick = () => openHub(btn.dataset.id));
    }

    let activeId = null;
    function openHub(id) {
        activeId = id;
        const course = finalCourses.find(c => c.id === id);
        document.getElementById('modalTitle').innerText = course.title;
        document.getElementById('courseSummaryContent').innerHTML = course.summary;
        modal.style.display = 'flex';
        initQuiz(id);
    }

    let qIdx = 0, score = 0;
    
    function initQuiz(id) {
        qIdx = 0; score = 0;
        document.getElementById('quizContent').classList.remove('hidden');
        document.getElementById('quizResult').classList.add('hidden');
        showQ(id);
    }

    function showQ(id) {
        const courseQuiz = quizzes[id] || [{q: "Quiz coming soon for " + id, options: ["Ok"], correct: 0, exp: "Coming soon!"}];
        const currentQ = courseQuiz[qIdx] || courseQuiz[0];
        
        document.getElementById('quizProgress').style.width = \`${((qIdx + 1) / courseQuiz.length) * 100}%\`;
        document.getElementById('questionText').innerText = currentQ.q;
        
        const optCont = document.getElementById('optionsContainer'), expBox = document.getElementById('explanationBox'), nextBtn = document.getElementById('nextBtn');
        optCont.innerHTML = ''; expBox.classList.add('hidden'); nextBtn.classList.add('hidden');

        currentQ.options.forEach((opt, i) => {
            const div = document.createElement('div');
            div.className = 'option-card';
            div.innerHTML = \`<span>\${opt}</span><i class="far fa-circle"></i>\`;
            div.onclick = () => {
                if (nextBtn.classList.contains('hidden')) {
                    const all = optCont.querySelectorAll('.option-card');
                    all[currentQ.correct].classList.add('correct');
                    if (i === currentQ.correct) score++; else div.classList.add('wrong');
                    expBox.innerText = currentQ.exp;
                    expBox.classList.remove('hidden'); nextBtn.classList.remove('hidden');
                    all.forEach(o => o.style.pointerEvents = 'none');
                }
            };
            optCont.appendChild(div);
        });
        
        nextBtn.onclick = () => {
            qIdx++;
            if (qIdx < courseQuiz.length) showQ(id);
            else {
                document.getElementById('quizContent').classList.add('hidden');
                document.getElementById('quizResult').classList.remove('hidden');
                document.getElementById('scoreText').innerText = score + " / " + courseQuiz.length;
            }
        };
    }

    navItems.forEach(li => li.onclick = () => {
        navItems.forEach(n => n.classList.remove('active')); li.classList.add('active');
        render(li.dataset.filter, search.value);
    });

    search.oninput = (e) => render(document.querySelector('.nav-links li.active').dataset.filter, e.target.value);
    closeM.onclick = () => { modal.style.display = 'none'; };
    
    document.querySelectorAll('.tab-btn').forEach(btn => btn.onclick = () => {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active')); btn.classList.add('active');
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        document.getElementById(btn.dataset.tab + 'Tab').classList.add('active');
    });

    render();
});
