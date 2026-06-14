document.addEventListener('DOMContentLoaded', () => {
    // Data
    const courses = [
        { id: 'IT101', category: 'core-it', diff: 'easy', icon: 'fas fa-info-circle', title: 'IT101: Intro to IT', hrs: '40h', desc: 'Hardware, Software, and Digital Literacy foundations.', link: 'https://seu1.org/files/level3/IT-101/' },
        { id: 'CS140', category: 'programming', diff: 'med', icon: 'fab fa-java', title: 'CS140: Programming I', hrs: '100h', desc: 'Fundamentals of Java programming and logic.', link: 'https://seu1.org/files/level3/CS-140/' },
        { id: 'CS141', category: 'programming', diff: 'med', icon: 'fas fa-cube', title: 'CS141: Programming II', hrs: '120h', desc: 'Object-Oriented Programming and advanced Java concepts.', link: 'https://seu1.org/files/level4/CS-141/' },
        { id: 'MATH150', category: 'math', diff: 'hard', icon: 'fas fa-project-diagram', title: 'MATH150: Discrete Math', hrs: '90h', desc: 'Logic, sets, functions, and graph theory.', link: 'https://seu1.org/files/level3/MATH-150/' },
        { id: 'IT230', category: 'programming', diff: 'med', icon: 'fas fa-code', title: 'IT230: Web Technologies', hrs: '80h', desc: 'HTML5, CSS3, and JavaScript modern workflows.', link: 'https://seu1.org/files/level4/IT-230/' },
        { id: 'IT241', category: 'core-it', diff: 'hard', icon: 'fas fa-microchip', title: 'IT241: Operating Systems', hrs: '110h', desc: 'Process management, memory, and concurrency.', link: 'https://seu1.org/files/level5/IT-241/' },
        { id: 'IT244', category: 'core-it', diff: 'med', icon: 'fas fa-database', title: 'IT244: Database Systems', hrs: '85h', desc: 'Relational design, SQL, and data integrity.', link: 'https://seu1.org/files/level4/IT-244/' },
        { id: 'IT245', category: 'core-it', diff: 'hard', icon: 'fas fa-brain', title: 'IT245: Data Structures', hrs: '150h', desc: 'The Beast: Complex algorithms and efficient data storage.', link: 'https://seu1.org/files/level5/IT-245/' },
        { id: 'MATH251', category: 'math', diff: 'med', icon: 'fas fa-table', title: 'MATH251: Linear Algebra', hrs: '80h', desc: 'Systems of equations, matrices, and vectors.', link: 'https://seu1.org/files/level5/MATH-251/' },
        { id: 'STAT101', category: 'math', diff: 'easy', icon: 'fas fa-chart-line', title: 'STAT101: Statistics', hrs: '60h', desc: 'Probability, distributions, and inferential stats.', link: 'https://seu1.org/files/level5/STAT-101/' },
        { id: 'IT340', category: 'core-it', diff: 'hard', icon: 'fas fa-network-wired', title: 'IT340: Networks', hrs: '120h', desc: 'Global communication protocols and architecture.', link: 'https://seu1.org/files/level6/IT-340/' },
        { id: 'IT344', category: 'core-it', diff: 'med', icon: 'fas fa-tasks', title: 'IT344: Software Engineering', hrs: '90h', desc: 'SDLC, design patterns, and team management.', link: 'https://seu1.org/files/level6/IT-344/' },
        { id: 'IT440', category: 'advanced', diff: 'hard', icon: 'fas fa-user-shield', title: 'IT440: Info Security', hrs: '130h', desc: 'Encryption, vulnerabilities, and cyber defense.', link: 'https://seu1.org/files/level7/IT-440/' },
        { id: 'IT412', category: 'advanced', diff: 'med', icon: 'fas fa-cloud', title: 'IT412: Cloud Computing', hrs: '70h', desc: 'Virtualization, SaaS, and modern cloud infra.', link: 'https://seu1.org/files/level8/IT-412/' },
        { id: 'IT448', category: 'programming', diff: 'med', icon: 'fas fa-mobile-alt', title: 'IT448: Mobile Dev', hrs: '100h', desc: 'Developing for iOS and Android ecosystems.', link: 'https://seu1.org/files/level8/IT-448/' }
    ];

    const quizzes = {
        'IT245': [
            { q: "What is the time complexity of searching a value in a balanced Binary Search Tree?", a: ["O(n)", "O(log n)", "O(1)"], c: 1, e: "A balanced BST allows us to discard half the tree at each step, resulting in logarithmic time." },
            { q: "Which data structure is typically used to implement recursion?", a: ["Queue", "Linked List", "Stack"], c: 2, e: "The 'Call Stack' keeps track of function calls in a Last-In-First-Out manner." },
            { q: "Which algorithm is most efficient for sorting large datasets?", a: ["Bubble Sort", "Merge Sort", "Selection Sort"], c: 1, e: "Merge Sort uses a divide-and-conquer approach with O(n log n) complexity." }
        ],
        'CS141': [
            { q: "What is the ability of an object to take on many forms?", a: ["Encapsulation", "Inheritance", "Polymorphism"], c: 2, e: "Polymorphism allows methods to be overridden or overloaded to perform differently." },
            { q: "Which keyword is used to inherit a class in Java?", a: ["implements", "extends", "inherits"], c: 1, e: "'extends' is used for class inheritance, while 'implements' is for interfaces." },
            { q: "What is a constructor?", a: ["A method to delete objects", "A special method to initialize objects", "A type of variable"], c: 1, e: "Constructors are called when an object is instantiated to set its initial state." }
        ],
        'IT244': [
            { q: "Which JOIN returns all records when there is a match in either left or right table?", a: ["INNER JOIN", "LEFT JOIN", "FULL OUTER JOIN"], c: 2, e: "FULL OUTER JOIN combines the results of both left and right outer joins." },
            { q: "What is Normalization used for?", a: ["Speeding up queries", "Reducing data redundancy", "Backing up data"], c: 1, e: "Normalization organizes fields and tables to minimize duplication." },
            { q: "What does SQL stand for?", a: ["Simple Query Language", "Structured Query Language", "Standard Query Link"], c: 1, e: "It is the standard language for relational database management." }
        ],
        'MATH251': [
            { q: "What is an Identity Matrix?", a: ["A matrix with all 0s", "A matrix with all 1s", "A square matrix with 1s on diagonal and 0s elsewhere"], c: 2, e: "Multiplying any matrix by an Identity matrix leaves it unchanged." },
            { q: "If the determinant of a matrix is 0, what does it mean?", a: ["The matrix is invertible", "The matrix is singular (not invertible)", "The matrix is identity"], c: 1, e: "A zero determinant means the matrix rows/columns are linearly dependent." },
            { q: "What is row reduction primarily used for?", a: ["Finding eigenvalues", "Solving systems of linear equations", "Multiplying matrices"], c: 1, e: "Gaussian elimination/row reduction is the primary tool for solving Ax=b." }
        ],
        'IT340': [
            { q: "At which OSI layer does IP addressing occur?", a: ["Data Link", "Transport", "Network"], c: 2, e: "Layer 3 (Network) handles logical addressing and routing." },
            { q: "What is the purpose of DNS?", a: ["Routing packets", "Translating domain names to IP addresses", "Encrypting data"], c: 1, e: "Domain Name System acts as the phonebook of the internet." },
            { q: "Which protocol is 'connectionless'?", a: ["TCP", "UDP", "HTTP"], c: 1, e: "User Datagram Protocol (UDP) does not establish a formal connection before sending data." }
        ]
    };

    // Default questions for courses without specific ones
    const defaultQuiz = [
        { q: "What is the primary goal of this course?", a: ["Pass the exam", "Master the core concepts", "Just show up"], c: 1, e: "Mastering concepts is the key to a successful IT career." },
        { q: "Which resource is most helpful for SEU students?", a: ["seu1.org", "Social Media", "Gaming"], c: 0, e: "seu1.org is the premier archive for SEU past papers and summaries." },
        { q: "How should you approach complex IT subjects?", a: ["Study last minute", "Consistent practice and visualization", "Skip lectures"], c: 1, e: "IT subjects require hands-on coding and deep logical understanding." }
    ];

    // UI Logic
    const grid = document.getElementById('courseGrid');
    const search = document.getElementById('courseSearch');
    const modal = document.getElementById('quizModal');
    const navItems = document.querySelectorAll('.nav-links li');
    const sidebar = document.getElementById('sidebar');
    const mobileToggle = document.getElementById('mobileToggle');
    const mobileClose = document.getElementById('mobileClose');
    const navOverlay = document.getElementById('navOverlay');

    // Render Cards
    function render(filter = 'all', query = '') {
        grid.innerHTML = '';
        courses.forEach(c => {
            const matchesFilter = filter === 'all' || c.category === filter;
            const matchesSearch = c.title.toLowerCase().includes(query.toLowerCase()) || c.desc.toLowerCase().includes(query.toLowerCase());
            
            if (matchesFilter && matchesSearch) {
                const card = document.createElement('div');
                card.className = 'course-card';
                card.innerHTML = `
                    <div class="card-header">
                        <span class="badge ${c.diff}">${c.diff}</span>
                        <div class="course-icon"><i class="${c.icon}"></i></div>
                    </div>
                    <h3>${c.title}</h3>
                    <div class="course-meta">
                        <span><i class="far fa-clock"></i> ${c.hrs}</span>
                        <span><i class="fas fa-book-open"></i> Core</span>
                    </div>
                    <p>${c.desc}</p>
                    <div class="resource-links">
                        <a href="${c.link}" target="_blank"><i class="fas fa-external-link-alt"></i> Archive</a>
                        <button class="quiz-btn" data-id="${c.id}"><i class="fas fa-vial"></i> Take Assessment</button>
                    </div>
                `;
                grid.appendChild(card);
            }
        });

        // Re-attach quiz listeners
        document.querySelectorAll('.quiz-btn').forEach(btn => {
            btn.onclick = () => startQuiz(btn.dataset.id);
        });
    }

    // Quiz System
    let currentQuiz = [], qIdx = 0, score = 0;

    function startQuiz(id) {
        currentQuiz = quizzes[id] || defaultQuiz;
        qIdx = 0; score = 0;
        document.getElementById('quizTitle').innerText = `${id} Assessment`;
        document.getElementById('quizContent').classList.remove('hidden');
        document.getElementById('quizResult').classList.add('hidden');
        modal.style.display = 'flex';
        showQ();
    }

    function showQ() {
        const q = currentQuiz[qIdx];
        document.getElementById('quizProgress').style.width = `${((qIdx + 1) / currentQuiz.length) * 100}%`;
        document.getElementById('questionText').innerText = q.q;
        const optCont = document.getElementById('optionsContainer');
        const expBox = document.getElementById('explanationBox');
        const nextBtn = document.getElementById('nextBtn');
        
        optCont.innerHTML = '';
        expBox.classList.add('hidden');
        nextBtn.classList.add('hidden');

        q.a.forEach((opt, i) => {
            const div = document.createElement('div');
            div.className = 'option-card';
            div.innerHTML = `<span>${opt}</span><i class="far fa-circle"></i>`;
            div.onclick = () => {
                if (nextBtn.classList.contains('hidden')) {
                    const allOpts = optCont.querySelectorAll('.option-card');
                    allOpts[q.c].classList.add('correct');
                    allOpts[q.c].querySelector('i').className = 'fas fa-check-circle';
                    
                    if (i === q.c) {
                        score++;
                    } else {
                        div.classList.add('wrong');
                        div.querySelector('i').className = 'fas fa-times-circle';
                    }
                    
                    expBox.innerText = q.e || "Great job!";
                    expBox.classList.remove('hidden');
                    nextBtn.classList.remove('hidden');
                    allOpts.forEach(o => o.style.pointerEvents = 'none');
                }
            };
            optCont.appendChild(div);
        });
    }

    document.getElementById('nextBtn').onclick = () => {
        qIdx++;
        if (qIdx < currentQuiz.length) showQ();
        else {
            document.getElementById('quizContent').classList.add('hidden');
            document.getElementById('quizResult').classList.remove('hidden');
            document.getElementById('scoreText').innerText = `Your Knowledge Score: ${score} / ${currentQuiz.length}`;
        }
    };

    // UI Handlers
    search.oninput = (e) => render(document.querySelector('.nav-links li.active').dataset.filter, e.target.value);
    
    navItems.forEach(li => {
        li.onclick = () => {
            navItems.forEach(n => n.classList.remove('active'));
            li.classList.add('active');
            render(li.dataset.filter, search.value);
            if (window.innerWidth <= 992) sidebar.classList.remove('open');
        };
    });

    mobileToggle.onclick = () => { sidebar.classList.add('open'); navOverlay.classList.add('active'); };
    mobileClose.onclick = () => { sidebar.classList.remove('open'); navOverlay.classList.remove('active'); };
    navOverlay.onclick = () => { sidebar.classList.remove('open'); navOverlay.classList.remove('active'); };
    document.getElementById('modalClose').onclick = () => modal.style.display = 'none';
    document.getElementById('finishQuiz').onclick = () => modal.style.display = 'none';

    // Init
    document.getElementById('currentDate').innerText = new Date().toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' });
    render();
});