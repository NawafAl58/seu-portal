document.addEventListener('DOMContentLoaded', () => {
    // SEU Full IT Bachelor Study Plan Data
    const courses = [
        { 
            id: 'IT101', 
            category: 'core-it', 
            diff: 'easy', 
            icon: 'fas fa-info-circle', 
            title: 'IT101: Intro to IT', 
            hrs: '3', 
            desc: 'Foundational concepts of hardware, software, and the digital world.',
            summary: `<h3>Key Concepts</h3>
                    <p>Introduction to information systems, computer hardware components (CPU, RAM, Storage), software categories, and the internet architecture.</p>
                    <h4>Key Topics:</h4>
                    <ul>
                        <li><strong>Hardware:</strong> Input/Output devices, Motherboard, Processing units.</li>
                        <li><strong>Software:</strong> System software (OS) vs Application software.</li>
                        <li><strong>Networking:</strong> LAN, WAN, and the OSI model basics.</li>
                        <li><strong>Security:</strong> Basic malware types and protection methods.</li>
                    </ul>`
        },
        { 
            id: 'MATH150', 
            category: 'math-physics', 
            diff: 'hard', 
            icon: 'fas fa-project-diagram', 
            title: 'MATH150: Discrete Math', 
            hrs: '3', 
            desc: 'Mathematical structures that are fundamentally discrete rather than continuous.',
            summary: `<h3>Key Concepts</h3>
                    <p>The backbone of computer science logic. Deals with countable, distinct elements.</p>
                    <h4>Key Topics:</h4>
                    <ul>
                        <li><strong>Propositional Logic:</strong> Truth tables, logical connectives (AND, OR, NOT, XOR), and implications.</li>
                        <li><strong>Set Theory:</strong> Unions, intersections, power sets, and Cartesian products.</li>
                        <li><strong>Graph Theory:</strong> Vertices, edges, paths, and trees.</li>
                        <li><strong>Combinatorics:</strong> Permutations (order matters) and Combinations (order doesn't).</li>
                    </ul>`
        },
        { 
            id: 'PHYS101', 
            category: 'math-physics', 
            diff: 'hard', 
            icon: 'fas fa-atom', 
            title: 'PHYS101: General Physics', 
            hrs: '3', 
            desc: 'Foundations of mechanics, waves, and electricity.',
            summary: `<h3>Key Concepts</h3>
                    <p>Understanding the physical laws that govern the universe, focusing on classical mechanics and electromagnetism.</p>
                    <h4>Key Topics:</h4>
                    <ul>
                        <li><strong>Mechanics:</strong> Newton's Laws, Motion in 1D/2D, Force, Energy, and Work.</li>
                        <li><strong>Thermodynamics:</strong> Heat, temperature, and laws of energy transfer.</li>
                        <li><strong>Electricity:</strong> Coulomb's Law, Electric fields, and Circuits (Ohm's Law: V = IR).</li>
                        <li><strong>Waves & Optics:</strong> Sound, light reflection, and refraction.</li>
                    </ul>`
        },
        { 
            id: 'MATH251', 
            category: 'math-physics', 
            diff: 'med', 
            icon: 'fas fa-table', 
            title: 'MATH251: Linear Algebra', 
            hrs: '3', 
            desc: 'Study of vectors, matrices, and linear transformations.',
            summary: `<h3>Key Concepts</h3>
                    <p>Essential for graphics, AI, and data processing. Focuses on systems of linear equations.</p>
                    <h4>Key Topics:</h4>
                    <ul>
                        <li><strong>Matrices:</strong> Addition, multiplication, determinants, and inverses.</li>
                        <li><strong>Vector Spaces:</strong> Span, linear independence, and basis.</li>
                        <li><strong>Eigenvalues & Eigenvectors:</strong> Characteristic equations (A - λI)v = 0.</li>
                        <li><strong>Transformations:</strong> Scaling, rotation, and translation in n-dimensional space.</li>
                    </ul>`
        },
        { 
            id: 'STAT101', 
            category: 'math-physics', 
            diff: 'easy', 
            icon: 'fas fa-chart-line', 
            title: 'STAT101: Statistics', 
            hrs: '3', 
            desc: 'Collection, analysis, interpretation, and presentation of data.',
            summary: `<h3>Key Concepts</h3>
                    <p>Foundational for data science. Understanding probability and data distributions.</p>
                    <h4>Key Topics:</h4>
                    <ul>
                        <li><strong>Descriptive Stats:</strong> Mean, Median, Mode, Variance, and Standard Deviation.</li>
                        <li><strong>Probability:</strong> Conditional probability and Bayes' Theorem.</li>
                        <li><strong>Distributions:</strong> Normal (Bell Curve), Binomial, and Poisson.</li>
                        <li><strong>Hypothesis Testing:</strong> P-values, Z-tests, and T-tests.</li>
                    </ul>`
        },
        { 
            id: 'IT230', 
            category: 'programming', 
            diff: 'med', 
            icon: 'fas fa-code', 
            title: 'IT230: Web Technologies', 
            hrs: '3', 
            desc: 'Core technologies of the World Wide Web.',
            summary: `<h3>Key Concepts</h3>
                    <p>Client-side development focusing on structure, style, and interactivity.</p>
                    <h4>Key Topics:</h4>
                    <ul>
                        <li><strong>HTML5:</strong> Semantic elements, forms, and multimedia.</li>
                        <li><strong>CSS3:</strong> Box model, Flexbox, Grid, and Animations.</li>
                        <li><strong>JavaScript:</strong> ES6+ syntax, DOM manipulation, and Event handling.</li>
                        <li><strong>Responsive Design:</strong> Media queries and mobile-first approach.</li>
                    </ul>`
        },
        { 
            id: 'IT241', 
            category: 'core-it', 
            diff: 'hard', 
            icon: 'fas fa-microchip', 
            title: 'IT241: Operating Systems', 
            hrs: '3', 
            desc: 'The bridge between hardware and software.',
            summary: `<h3>Key Concepts</h3>
                    <p>Resource management, process synchronization, and file systems.</p>
                    <h4>Key Topics:</h4>
                    <ul>
                        <li><strong>Processes:</strong> Scheduling (FCFS, SJF, RR), Threads, and Context Switching.</li>
                        <li><strong>Memory:</strong> Paging, Segmentation, and Virtual Memory.</li>
                        <li><strong>Concurrency:</strong> Deadlocks, Semaphores, and Mutual Exclusion.</li>
                        <li><strong>File Systems:</strong> Allocation methods and directory structures.</li>
                    </ul>`
        },
        { 
            id: 'IT244', 
            category: 'core-it', 
            diff: 'med', 
            icon: 'fas fa-database', 
            title: 'IT244: Database Systems', 
            hrs: '3', 
            desc: 'Design and management of relational data.',
            summary: `<h3>Key Concepts</h3>
                    <p>Relational algebra, SQL, and database normalization.</p>
                    <h4>Key Topics:</h4>
                    <ul>
                        <li><strong>ER Modeling:</strong> Entities, Relationships, and Cardinality.</li>
                        <li><strong>SQL:</strong> DDL (Create, Alter), DML (Insert, Update), and Queries (Select, Join).</li>
                        <li><strong>Normalization:</strong> 1NF, 2NF, 3NF, and BCNF to remove redundancy.</li>
                        <li><strong>Transactions:</strong> ACID properties (Atomicity, Consistency, Isolation, Durability).</li>
                    </ul>`
        },
        { 
            id: 'IT245', 
            category: 'core-it', 
            diff: 'hard', 
            icon: 'fas fa-brain', 
            title: 'IT245: Data Structures', 
            hrs: '3', 
            desc: 'Efficient ways of storing and organizing data.',
            summary: `<h3>Key Concepts</h3>
                    <p>Understanding trade-offs between different data structures and Big O complexity.</p>
                    <h4>Key Topics:</h4>
                    <ul>
                        <li><strong>Linear:</strong> Arrays, Linked Lists, Stacks (LIFO), and Queues (FIFO).</li>
                        <li><strong>Non-Linear:</strong> Trees (BST, AVL), Graphs, and Hash Tables.</li>
                        <li><strong>Complexity:</strong> Time and Space complexity (Big O notation).</li>
                        <li><strong>Algorithms:</strong> Sorting (Quick, Merge, Bubble) and Searching (Binary).</li>
                    </ul>`
        },
        { 
            id: 'IT340', 
            category: 'core-it', 
            diff: 'hard', 
            icon: 'fas fa-network-wired', 
            title: 'IT340: Networks', 
            hrs: '3', 
            desc: 'Data communication and networking protocols.',
            summary: `<h3>Key Concepts</h3>
                    <p>The 7-layer OSI model vs the 4-layer TCP/IP stack.</p>
                    <h4>Key Topics:</h4>
                    <ul>
                        <li><strong>Application:</strong> HTTP, DNS, SMTP, and FTP.</li>
                        <li><strong>Transport:</strong> TCP (reliable) vs UDP (fast).</li>
                        <li><strong>Network:</strong> IP addressing, Subnetting, and Routing.</li>
                        <li><strong>Data Link:</strong> Ethernet, MAC addresses, and Switches.</li>
                    </ul>`
        },
        { 
            id: 'IT344', 
            category: 'core-it', 
            diff: 'med', 
            icon: 'fas fa-tasks', 
            title: 'IT344: Software Engineering', 
            hrs: '3', 
            desc: 'Methodologies for large-scale software development.',
            summary: `<h3>Key Concepts</h3>
                    <p>SDLC (Software Development Life Cycle) and project management.</p>
                    <h4>Key Topics:</h4>
                    <ul>
                        <li><strong>Models:</strong> Waterfall, Agile, Scrum, and DevOps.</li>
                        <li><strong>Requirements:</strong> Functional vs Non-functional.</li>
                        <li><strong>Testing:</strong> Unit, Integration, System, and Acceptance testing.</li>
                        <li><strong>Design:</strong> UML diagrams and Design Patterns.</li>
                    </ul>`
        },
        { 
            id: 'IT440', 
            category: 'advanced', 
            diff: 'hard', 
            icon: 'fas fa-user-shield', 
            title: 'IT440: Info Security', 
            hrs: '3', 
            desc: 'Protecting systems, networks, and data from attacks.',
            summary: `<h3>Key Concepts</h3>
                    <p>Cryptography, network security, and risk management.</p>
                    <h4>Key Topics:</h4>
                    <ul>
                        <li><strong>CIA Triad:</strong> Confidentiality, Integrity, and Availability.</li>
                        <li><strong>Crypto:</strong> Symmetric vs Asymmetric encryption, Hashing.</li>
                        <li><strong>Attacks:</strong> Phishing, DoS/DDoS, SQL Injection, and Malware.</li>
                        <li><strong>Defense:</strong> Firewalls, IDS/IPS, and Multi-Factor Authentication.</li>
                    </ul>`
        },
        { 
            id: 'IT412', 
            category: 'advanced', 
            diff: 'med', 
            icon: 'fas fa-cloud', 
            title: 'IT412: Cloud Computing', 
            hrs: '3', 
            desc: 'On-demand delivery of IT resources over the internet.',
            summary: `<h3>Key Concepts</h3>
                    <p>Virtualization and cloud service models.</p>
                    <h4>Key Topics:</h4>
                    <ul>
                        <li><strong>Models:</strong> IaaS, PaaS, and SaaS.</li>
                        <li><strong>Deployment:</strong> Public, Private, and Hybrid clouds.</li>
                        <li><strong>Tech:</strong> Virtual Machines, Containers (Docker), and Serverless.</li>
                        <li><strong>Providers:</strong> AWS, Azure, and Google Cloud.</li>
                    </ul>`
        }
    ];

    const quizzes = {
        'IT101': [
            { q: "What is considered the 'brain' of the computer?", a: ["RAM", "CPU", "Hard Drive", "GPU"], c: 1, e: "The CPU executes instructions." },
            { q: "Which is an operating system?", a: ["HTML", "Linux", "Java", "Python"], c: 1, e: "Linux is a kernel/OS." },
            { q: "What does RAM stand for?", a: ["Read Access Memory", "Random Access Memory", "Rapid Action Memory", "Refined Auto Memory"], c: 1, e: "Random Access Memory is volatile storage." },
            { q: "1 Terabyte is approximately how many Gigabytes?", a: ["100 GB", "1000 GB", "500 GB", "10,000 GB"], c: 1, e: "Standard decimal approximation is 1000GB." },
            { q: "Which is Application Software?", a: ["Windows", "MacOS", "Microsoft Word", "BIOS"], c: 2, e: "Word is an application." },
            { q: "What does GUI stand for?", a: ["Global User Interface", "Graphical User Interface", "General Unit Index", "Great Utility Icon"], c: 1, e: "Graphical User Interface." },
            { q: "Which part of the computer is volatile?", a: ["Hard Drive", "RAM", "ROM", "Flash Drive"], c: 1, e: "RAM loses data without power." },
            { q: "Which port is used for video/audio?", a: ["USB-A", "VGA", "HDMI", "PS/2"], c: 2, e: "HDMI is the standard for multimedia." },
            { q: "Which is a cloud storage service?", a: ["Photoshop", "Google Drive", "VLC", "Excel"], c: 1, e: "Google Drive is cloud storage." },
            { q: "What is phishing?", a: ["Hardware type", "Fraudulent email to steal info", "Protocol", "Coding technique"], c: 1, e: "Phishing is social engineering." }
        ],
        'MATH150': [
            { q: "Which logic gate is true only if both inputs are true?", a: ["OR", "XOR", "AND", "NAND"], c: 2, e: "AND gate logic." },
            { q: "A set with no elements is called?", a: ["Full Set", "Empty Set", "Universal Set", "Sub Set"], c: 1, e: "The empty or null set." },
            { q: "What is 2 to the power of 3?", a: ["6", "8", "9", "5"], c: 1, e: "2*2*2 = 8." },
            { q: "Which operator represents logical OR?", a: ["∧", "∨", "¬", "→"], c: 1, e: "∨ is the symbol for OR (disjunction)." },
            { q: "A graph with no cycles is?", a: ["Circle", "Tree", "Loop", "Path"], c: 1, e: "A tree is an acyclic connected graph." },
            { q: "How many elements in the Power Set of {1, 2}?", a: ["2", "4", "3", "8"], c: 1, e: "2^n = 2^2 = 4." },
            { q: "Which is a tautology?", a: ["P ∧ ¬P", "P ∨ ¬P", "P → Q", "P ∧ Q"], c: 1, e: "P OR NOT P is always true." },
            { q: "In a function, the set of all outputs is?", a: ["Domain", "Codomain", "Range", "Origin"], c: 2, e: "The Range is the set of actual outputs." },
            { q: "What is 5 factorial (5!)?", a: ["10", "25", "120", "60"], c: 2, e: "5*4*3*2*1 = 120." },
            { q: "Which is a prime number?", a: ["4", "9", "13", "15"], c: 2, e: "13 has only 1 and itself as factors." }
        ],
        'PHYS101': [
            { q: "What is the unit of Force?", a: ["Joule", "Watt", "Newton", "Pascal"], c: 2, e: "Force is measured in Newtons (N)." },
            { q: "Newton's First Law is also known as the Law of?", a: ["Gravity", "Inertia", "Energy", "Action"], c: 1, e: "Inertia: resistance to change in motion." },
            { q: "What is the speed of light in vacuum (approx)?", a: ["3x10^8 m/s", "3x10^5 m/s", "1x10^6 m/s", "5x10^8 m/s"], c: 0, e: "Standard constant c." },
            { q: "Ohm's Law formula?", a: ["P=IV", "V=IR", "F=ma", "E=mc^2"], c: 1, e: "Voltage = Current * Resistance." },
            { q: "What is acceleration due to gravity on Earth?", a: ["5 m/s^2", "9.8 m/s^2", "12 m/s^2", "3.14 m/s^2"], c: 1, e: "Constant g ≈ 9.8 m/s^2." },
            { q: "Which is a scalar quantity?", a: ["Velocity", "Force", "Mass", "Acceleration"], c: 2, e: "Mass has magnitude but no direction." },
            { q: "Unit of Electrical Resistance?", a: ["Ampere", "Volt", "Ohm", "Farad"], c: 2, e: "Ohm (Ω)." },
            { q: "Work is Force times?", a: ["Time", "Distance", "Mass", "Velocity"], c: 1, e: "W = F * d." },
            { q: "Kinetic energy formula?", a: ["mgh", "1/2 mv^2", "ma", "F/d"], c: 1, e: "1/2 mv^2." },
            { q: "What is frequency measured in?", a: ["Seconds", "Hertz", "Meters", "Joules"], c: 1, e: "Hertz (Hz)." }
        ],
        'MATH251': [
            { q: "Matrix multiplied by its inverse equals?", a: ["0", "1", "Identity Matrix", "Transpose"], c: 2, e: "A * A^-1 = I." },
            { q: "A matrix is singular if its determinant is?", a: ["1", "-1", "0", "Positive"], c: 2, e: "Singular = non-invertible (det=0)." },
            { q: "Gaussian Elimination is used for?", a: ["Sorting", "Solving linear systems", "Integration", "Hiding data"], c: 1, e: "It simplifies matrices to solve systems." },
            { q: "A Vector has magnitude and?", a: ["Color", "Direction", "Volume", "Weight"], c: 1, e: "Vectors require direction." },
            { q: "Transpose of a matrix swaps?", a: ["Rows & Columns", "Signs", "Diagonals", "Corners"], c: 0, e: "Rows become columns." },
            { q: "Dot product of orthogonal vectors is?", a: ["1", "-1", "0", "Infinity"], c: 2, e: "Orthogonal = perpendicular (90 deg)." },
            { q: "A Scalar is a?", a: ["Matrix", "Vector", "Single Number", "Shape"], c: 2, e: "Just magnitude." },
            { q: "Trace of a matrix is the sum of?", a: ["All elements", "Edges", "Main Diagonal", "First Row"], c: 2, e: "Sum of a_ii elements." },
            { q: "A Square Matrix has?", a: ["Rows = Columns", "Only 1s", "No Zeros", "4 sides"], c: 0, e: "n x n dimension." },
            { q: "Result of cross product is a?", a: ["Scalar", "Vector", "Matrix", "Constant"], c: 1, e: "Cross product produces a vector." }
        ]
        // ... and so on for other courses
    };

    // UI Logic
    const grid = document.getElementById('courseGrid');
    const search = document.getElementById('courseSearch');
    const modal = document.getElementById('courseModal');
    const closeM = document.getElementById('closeCourseModal');
    const navItems = document.querySelectorAll('.nav-links li');
    const sidebar = document.getElementById('sidebar');
    const mobileToggle = document.getElementById('mobileToggle');
    const mobileClose = document.getElementById('mobileClose');
    const navOverlay = document.getElementById('navOverlay');

    // Rendering
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
                        <span><i class="far fa-clock"></i> ${c.hrs} Credits</span>
                    </div>
                    <p>${c.desc}</p>
                    <button class="primary-btn view-course" data-id="${c.id}"><i class="fas fa-book-open"></i> Open Hub</button>
                `;
                grid.appendChild(card);
            }
        });

        document.querySelectorAll('.view-course').forEach(btn => {
            btn.onclick = (e) => {
                e.preventDefault();
                openHub(btn.dataset.id);
            };
        });
    }

    // Modal & Tab Logic
    let activeCourseId = null;
    function openHub(id) {
        activeCourseId = id;
        const course = courses.find(c => c.id === id);
        document.getElementById('modalTitle').innerText = course.title;
        document.getElementById('courseSummaryContent').innerHTML = course.summary;
        
        // Reset Tabs
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelector('[data-tab="summary"]').classList.add('active');
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        document.getElementById('summaryTab').classList.add('active');
        
        modal.style.display = 'flex';
        initQuiz(id);
    }

    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.onclick = (e) => {
            e.preventDefault();
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            document.getElementById(btn.dataset.tab + 'Tab').classList.add('active');
        };
    });

    // Quiz Engine
    let qIdx = 0, score = 0;
    function initQuiz(id) {
        qIdx = 0; score = 0;
        document.getElementById('quizContent').classList.remove('hidden');
        document.getElementById('quizResult').classList.add('hidden');
        showQ(id);
    }

    function showQ(id) {
        const quizSet = quizzes[id] || quizzes['IT101']; // Fallback
        const q = quizSet[qIdx];
        document.getElementById('quizProgress').style.width = `${((qIdx + 1) / quizSet.length) * 100}%`;
        document.getElementById('questionText').innerText = `Question ${qIdx + 1}: ${q.q}`;
        
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
            div.onclick = (e) => {
                e.preventDefault();
                if (nextBtn.classList.contains('hidden')) {
                    const allOpts = optCont.querySelectorAll('.option-card');
                    allOpts[q.c].classList.add('correct');
                    allOpts[q.c].querySelector('i').className = 'fas fa-check-circle';
                    
                    if (i === q.c) score++;
                    else {
                        div.classList.add('wrong');
                        div.querySelector('i').className = 'fas fa-times-circle';
                    }
                    
                    expBox.innerText = q.e;
                    expBox.classList.remove('hidden');
                    nextBtn.classList.remove('hidden');
                    allOpts.forEach(o => o.style.pointerEvents = 'none');
                }
            };
            optCont.appendChild(div);
        });
    }

    document.getElementById('nextBtn').onclick = (e) => {
        e.preventDefault();
        const quizSet = quizzes[activeCourseId] || quizzes['IT101'];
        qIdx++;
        if (qIdx < quizSet.length) showQ(activeCourseId);
        else {
            document.getElementById('quizContent').classList.add('hidden');
            document.getElementById('quizResult').classList.remove('hidden');
            document.getElementById('scoreText').innerText = `Final Score: ${score} / ${quizSet.length}`;
        }
    };

    document.getElementById('restartQuiz').onclick = (e) => {
        e.preventDefault();
        initQuiz(activeCourseId);
    };

    // Sidebar & Navigation
    navItems.forEach(li => {
        li.onclick = (e) => {
            e.preventDefault();
            navItems.forEach(n => n.classList.remove('active'));
            li.classList.add('active');
            render(li.dataset.filter, search.value);
            if (window.innerWidth <= 992) {
                sidebar.classList.remove('open');
                navOverlay.classList.remove('active');
            }
        };
    });

    search.oninput = (e) => render(document.querySelector('.nav-links li.active').dataset.filter, e.target.value);
    
    if (mobileToggle) mobileToggle.onclick = (e) => { e.preventDefault(); sidebar.classList.add('open'); navOverlay.classList.add('active'); };
    if (mobileClose) mobileClose.onclick = (e) => { e.preventDefault(); sidebar.classList.remove('open'); navOverlay.classList.remove('active'); };
    if (navOverlay) navOverlay.onclick = (e) => { e.preventDefault(); sidebar.classList.remove('open'); navOverlay.classList.remove('active'); };
    if (closeM) closeM.onclick = (e) => { e.preventDefault(); modal.style.display = 'none'; };

    // Initialization
    const dateEl = document.getElementById('currentDate');
    if (dateEl) dateEl.innerText = new Date().toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' });
    render();
});
