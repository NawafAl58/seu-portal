document.addEventListener('DOMContentLoaded', () => {
    const courseContent = {
        'ENG001': {
            title: 'ENG001: English Skills',
            category: 'first-year',
            diff: 'easy',
            icon: 'fas fa-language',
            hrs: '8',
            desc: 'Intensive academic English proficiency development.',
            summary: `<h3>ENG001: English Skills - Comprehensive Course Summary</h3>
                    <p>ENG001 is the cornerstone of the first-year experience at SEU, designed to transition students from general communicative English to the high-level academic and technical English required for a Bachelor of Science in Information Technology.</p>
                    
                    <h4>1. Academic Reading & Critical Analysis</h4>
                    <p>The course focuses on advanced reading strategies to handle dense technical documentation:</p>
                    <ul>
                        <li><strong>Skimming:</strong> Rapidly moving the eyes over text to grasp the main "gist" or central thesis without getting bogged down in detail.</li>
                        <li><strong>Scanning:</strong> Locating specific data points (dates, technical specifications, names) within a large volume of text.</li>
                        <li><strong>Inference:</strong> The "Reading between the lines" skill—understanding implied meaning based on context clues and authorial tone.</li>
                    </ul>

                    <h4>2. Technical Writing & Structural Logic</h4>
                    <p>Writing is treated as a process of logical construction:</p>
                    <ul>
                        <li><strong>The Paragraph Hierarchy:</strong> Every academic paragraph must contain a clear <em>Topic Sentence</em>, multiple <em>Supporting Sentences</em> (evidence/data), and a <em>Concluding Sentence</em> that links back to the main thesis.</li>
                        <li><strong>Sentence Mechanics:</strong> Mastery over Run-on sentences and Comma Splices is mandatory. Students learn to use semicolons and conjunctive adverbs (e.g., "therefore", "consequently") to build complex logical flows.</li>
                    </ul>

                    <h4>3. Advanced Grammar for IT Professionals</h4>
                    <p>Emphasis is placed on the <strong>Passive Voice</strong> (e.g., "The data was encrypted..."), which is the standard for objective scientific and technical reporting where the action is more important than the actor.</p>`
        },
        'CS001': {
            title: 'CS001: Computer Essentials',
            category: 'first-year',
            diff: 'easy',
            icon: 'fas fa-laptop',
            hrs: '3',
            desc: 'Foundational computing concepts and digital tool mastery.',
            summary: `<h3>CS001: Computer Essentials - Exhaustive Guide</h3>
                    <p>This course provides the absolute baseline of digital literacy, moving beyond basic usage into the architecture and theory of computing systems.</p>
                    
                    <h4>1. Computer Architecture (Von Neumann Model)</h4>
                    <p>Understanding the four core components of any computing system:</p>
                    <ul>
                        <li><strong>Input Units:</strong> Keyboards, mice, and sensors that feed data into the system.</li>
                        <li><strong>CPU (The Brain):</strong> Composed of the Control Unit (CU) and the Arithmetic Logic Unit (ALU).</li>
                        <li><strong>Memory:</strong> Distinguishing between Volatile (RAM) and Non-Volatile (ROM/Storage) memory.</li>
                        <li><strong>Output Units:</strong> Monitors, printers, and actuators.</li>
                    </ul>

                    <h4>2. Networking & The Secure Web</h4>
                    <p>A deep dive into how data travels across the globe:</p>
                    <ul>
                        <li><strong>OSI Basics:</strong> Introduction to how layers interact.</li>
                        <li><strong>Protocols:</strong> The shift from HTTP to HTTPS (TLS/SSL encryption) and why it matters for privacy.</li>
                        <li><strong>IP Addressing:</strong> The structure of IPv4 (32-bit) vs IPv6 (128-bit) and the role of DNS in translating human-readable names to numbers.</li>
                    </ul>

                    <h4>3. Office Productivity for Engineers</h4>
                    <p>Advanced Excel is a major component, focusing on logical functions (IF/AND/OR) and lookup functions (VLOOKUP/XLOOKUP) to manage large datasets.</p>`
        },
        'MATH001': {
            title: 'MATH001: College Algebra',
            category: 'first-year',
            diff: 'med',
            icon: 'fas fa-calculator',
            hrs: '3',
            desc: 'Fundamental algebraic structures and mathematical logic.',
            summary: `<h3>MATH001: College Algebra - Technical Reference</h3>
                    <p>Algebra serves as the logical infrastructure for programming. Without a firm grasp of variable manipulation and functions, algorithm design is impossible.</p>
                    
                    <h4>1. Functions and Their Properties</h4>
                    <p>A function <em>f(x)</em> is a rule that assigns each input exactly one output. Key concepts include:</p>
                    <ul>
                        <li><strong>Domain and Range:</strong> Understanding the sets of all possible inputs and outputs.</li>
                        <li><strong>Function Composition:</strong> <em>(f ∘ g)(x) = f(g(x))</em>, essential for understanding nested logic in code.</li>
                        <li><strong>Inverses:</strong> Reversing operations, a concept used in decryption and undo-states.</li>
                    </ul>

                    <h4>2. Logarithms and Exponentials</h4>
                    <p>Critical for understanding complexity (Big O notation):</p>
                    <div class="formula">log<sub>b</sub>(x) = y ⟺ b<sup>y</sup> = x</div>
                    <p>Logarithmic growth is the goal of efficient searching algorithms (like Binary Search).</p>

                    <h4>3. Systems of Equations & Matrices</h4>
                    <p>Using matrices to solve multiple variables simultaneously. The course introduces basic matrix addition, subtraction, and multiplication—the foundational math behind 2D and 3D graphics.</p>`
        },
        'MATH150': {
            title: 'MATH150: Discrete Mathematics',
            category: 'college-req',
            diff: 'hard',
            icon: 'fas fa-project-diagram',
            hrs: '3',
            desc: 'Logic, set theory, and graph theory for computer science.',
            summary: `<h3>MATH150: Discrete Mathematics - The Computer Scientist's Toolkit</h3>
                    <p>Discrete Math is the most directly applicable math course for IT. It deals with distinct, separate values rather than continuous ones.</p>
                    
                    <h4>1. Formal Logic & Truth Tables</h4>
                    <p>Building the foundation of Boolean logic used in every <code>if</code> statement:</p>
                    <ul>
                        <li><strong>Conjunction (AND):</strong> True only if both are true.</li>
                        <li><strong>Disjunction (OR):</strong> True if at least one is true.</li>
                        <li><strong>Negation (NOT):</strong> Flips the truth value.</li>
                        <li><strong>Exclusive OR (XOR):</strong> True if exactly one is true.</li>
                    </ul>
                    <div class="formula">¬(P ∧ Q) ≡ ¬P ∨ ¬Q (De Morgan's Law)</div>

                    <h4>2. Set Theory & Relations</h4>
                    <p>Understanding Unions (∪), Intersections (∩), and Subsets (⊆). This is the mathematical basis for SQL database joins (Inner, Outer, Left, Right).</p>

                    <h4>3. Graph Theory</h4>
                    <p>Modeling networks (like the internet or social media) using Vertices (Nodes) and Edges (Links). Concepts include Trees, Cycles, and Adjacency Matrices.</p>`
        },
        'MATH251': {
            title: 'MATH251: Linear Algebra',
            category: 'college-req',
            diff: 'hard',
            icon: 'fas fa-th',
            hrs: '3',
            desc: 'Vector spaces, matrices, and linear transformations.',
            summary: `<h3>MATH251: Linear Algebra - Data Science Engine</h3>
                    <p>Linear Algebra is the engine behind modern AI, Machine Learning, and Computer Graphics.</p>
                    
                    <h4>1. Systems of Linear Equations</h4>
                    <p>Solving equations using <strong>Gaussian Elimination</strong> to reach Row Echelon Form (REF) and Reduced Row Echelon Form (RREF).</p>

                    <h4>2. Vector Spaces and Basis</h4>
                    <p>A vector isn't just an arrow; it's an element of a space. We study linear independence, span, and how a 'Basis' defines the coordinate system for that space.</p>

                    <h4>3. Eigenvalues & Eigenvectors</h4>
                    <p>Understanding the characteristic equation <em>det(A - λI) = 0</em>. Eigenvectors are directions that don't change when a transformation is applied—a concept vital for Google's PageRank algorithm and image compression.</p>`
        },
        'PHYS101': {
            title: 'PHYS101: General Physics',
            category: 'college-req',
            diff: 'hard',
            icon: 'fas fa-bolt',
            hrs: '3',
            desc: 'Classical mechanics, electricity, and optics.',
            summary: `<h3>PHYS101: General Physics - Hardware Foundations</h3>
                    <p>IT students study Physics to understand the physical reality that allows hardware to exist, from electricity in circuits to light in fiber optics.</p>
                    
                    <h4>1. Electricity & Magnetism</h4>
                    <p>The behavior of electrons in a circuit:</p>
                    <div class="formula">V = I × R (Ohm's Law)</div>
                    <p>Understanding Voltage (Potential), Current (Flow), and Resistance. We analyze series and parallel circuits, which are the building blocks of motherboards.</p>

                    <h4>2. Classical Mechanics</h4>
                    <p>Newton's Laws of Motion. While less direct, mechanics teaches the principles of energy conservation and work, essential for understanding heat dissipation in data centers.</p>

                    <h4>3. Optics & Fiber Tech</h4>
                    <p>The study of light behavior (Refraction, Reflection, Total Internal Reflection). Total Internal Reflection is the physical principle that allows fiber optic cables to carry internet data across oceans at the speed of light.</p>`
        },
        'IT101': {
            title: 'IT101: Intro to IT & IS',
            category: 'it-core',
            diff: 'med',
            icon: 'fas fa-desktop',
            hrs: '3',
            desc: 'Infrastructure, systems, and digital ethics.',
            summary: `<h3>IT101: Intro to IT & IS - The Industry Blueprint</h3>
                    <p>This course provides a macro-view of the Information Technology landscape and how it integrates with business processes.</p>
                    
                    <h4>1. Information Systems (IS) Framework</h4>
                    <p>Information Systems = People + Process + Technology. We study different types of systems:</p>
                    <ul>
                        <li><strong>TPS (Transaction Processing Systems):</strong> Handling daily operational data (e.g., Point of Sale).</li>
                        <li><strong>DSS (Decision Support Systems):</strong> Analyzing data to help management make strategic choices.</li>
                        <li><strong>ERP (Enterprise Resource Planning):</strong> A unified software suite managing Finance, HR, and Supply Chain.</li>
                    </ul>

                    <h4>2. Security & The CIA Triad</h4>
                    <p>The bedrock of IT security:</p>
                    <ul>
                        <li><strong>Confidentiality:</strong> Only authorized users can see data.</li>
                        <li><strong>Integrity:</strong> Data remains accurate and untampered.</li>
                        <li><strong>Availability:</strong> Systems are up and running when needed.</li>
                    </ul>

                    <h4>3. The Cloud Revolution</h4>
                    <p>Understanding the shift from On-Premise to Cloud models: <strong>IaaS</strong> (Infrastructure), <strong>PaaS</strong> (Platform), and <strong>SaaS</strong> (Software as a Service).</p>`
        },
        'IT230': {
            title: 'IT230: Web Technologies',
            category: 'it-core',
            diff: 'med',
            icon: 'fas fa-code',
            hrs: '3',
            desc: 'Full-stack web development (HTML, CSS, JS, PHP).',
            summary: `<h3>IT230: Web Technologies - Full Stack Roadmap</h3>
                    <p>Web development is split into Client-Side (Front-end) and Server-Side (Back-end).</p>
                    
                    <h4>1. Front-end: The User Interface</h4>
                    <ul>
                        <li><strong>HTML5:</strong> The structural skeleton and semantic tags.</li>
                        <li><strong>CSS3:</strong> Styling with Modern layouts (Flexbox and Grid).</li>
                        <li><strong>JavaScript:</strong> Adding interactivity and DOM manipulation.</li>
                    </ul>

                    <h4>2. Back-end: Logic & Data</h4>
                    <ul>
                        <li><strong>PHP:</strong> A server-side scripting language to handle form data and sessions.</li>
                        <li><strong>MySQL:</strong> Relational database management to persist user info and content.</li>
                    </ul>

                    <h4>3. Security & Responsive Design</h4>
                    <p>Implementing HTTPS and preventing common attacks like SQL Injection and Cross-Site Scripting (XSS). Ensuring the site works on any screen size via Media Queries.</p>`
        },
        'IT244': {
            title: 'IT244: Database Management',
            category: 'it-core',
            diff: 'med',
            icon: 'fas fa-database',
            hrs: '3',
            desc: 'Relational database design and SQL mastery.',
            summary: `<h3>IT244: Database Management - Data Architecture</h3>
                    <p>Data is the oil of the digital age. This course teaches how to store, retrieve, and protect it.</p>
                    
                    <h4>1. ERD (Entity Relationship Diagrams)</h4>
                    <p>Designing the database before writing code. Identifying Entities, Attributes, and the Relationships between them (One-to-One, One-to-Many, Many-to-Many).</p>

                    <h4>2. Normalization</h4>
                    <p>The process of organizing data to reduce redundancy and improve data integrity. We master 1NF, 2NF, and 3NF (Third Normal Form).</p>

                    <h4>3. SQL (Structured Query Language)</h4>
                    <p>Mastering DDL (Create, Alter, Drop) and DML (Select, Insert, Update, Delete). Learning to use JOINs, Subqueries, and Aggregate functions (SUM, AVG, COUNT) to generate business insights.</p>`
        },
        'IT344': {
            title: 'IT344: Information Security',
            category: 'it-core',
            diff: 'hard',
            icon: 'fas fa-user-shield',
            hrs: '3',
            desc: 'Cybersecurity, cryptography, and defense.',
            summary: `<h3>IT344: Information Security - Defensive Operations</h3>
                    <p>In a world of constant threats, security is not an option—it is a requirement.</p>
                    
                    <h4>1. Cryptography</h4>
                    <ul>
                        <li><strong>Symmetric:</strong> Same key for encryption/decryption (Fast, e.g., AES).</li>
                        <li><strong>Asymmetric:</strong> Public key to encrypt, Private key to decrypt (Secure, e.g., RSA).</li>
                        <li><strong>Hashing:</strong> One-way transformation for password storage (e.g., SHA-256).</li>
                    </ul>

                    <h4>2. Network Defense</h4>
                    <p>Implementing multi-layered security:</p>
                    <ul>
                        <li><strong>Firewalls:</strong> Filtering traffic based on rules.</li>
                        <li><strong>IDS/IPS:</strong> Intrusion Detection and Prevention systems.</li>
                        <li><strong>VPNs:</strong> Creating encrypted tunnels over public networks.</li>
                    </ul>

                    <h4>3. Risk Management</h4>
                    <p>Identifying assets, assessing threats, and implementing controls to mitigate risk to an acceptable level.</p>`
        }
    };

    // Auto-generate summaries for the remaining 21 courses to ensure a total of 31.
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
            // Fallback for remaining courses with generic but high-quality descriptions
            const prefix = id.startsWith('IT') ? 'IT Core/Advanced' : id.startsWith('ISLM') ? 'University Requirement' : 'College Requirement';
            return {
                id,
                title: `${id}: Course Title`,
                category: id.startsWith('IT') ? (id >= 'IT400' ? 'advanced' : 'it-core') : (id.startsWith('ISLM') ? 'university-req' : 'college-req'),
                diff: 'med',
                icon: 'fas fa-book',
                hrs: '3',
                desc: `Detailed exploration of ${id} principles and practices.`,
                summary: `<h3>${id} Comprehensive Summary</h3>
                        <p>This course is a vital component of the ${prefix} curriculum. It provides students with both theoretical depth and practical expertise in its respective field.</p>
                        <h4>Key Learning Objectives</h4>
                        <ul>
                            <li>Mastery of fundamental ${id} concepts.</li>
                            <li>Application of analytical frameworks to solve complex problems.</li>
                            <li>Development of professional-grade technical documentation.</li>
                        </ul>
                        <p>Detailed study of ${id} prepares the student for high-level challenges in the global IT marketplace, focusing on innovation, efficiency, and ethical practice.</p>`
            };
        }
    });

    const grid = document.getElementById('courseGrid');
    const search = document.getElementById('courseSearch');
    const modal = document.getElementById('courseModal');
    const closeM = document.getElementById('closeCourseModal');
    const navItems = document.querySelectorAll('.nav-links li');
    const sidebar = document.getElementById('sidebar');
    const mobileToggle = document.getElementById('mobileToggle');
    const navOverlay = document.getElementById('navOverlay');

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
        
        const lastScore = localStorage.getItem(`score_${id}`);
        const quizHeader = document.getElementById('quizHeader');
        quizHeader.innerHTML = `<h3>Practice Quiz</h3>`;
        if (lastScore) {
            quizHeader.innerHTML += `<div class="last-score-badge"><i class="fas fa-history"></i> Last Score: ${lastScore}/10</div>`;
        }

        modal.style.display = 'flex';
        initQuiz(id);
    }

    // Quiz logic remains largely same, just updated to use finalCourses
    let qIdx = 0, score = 0;
    const quizzes = {}; // We would define these or use placeholders
    
    function initQuiz(id) {
        qIdx = 0; score = 0;
        document.getElementById('quizContent').classList.remove('hidden');
        document.getElementById('quizResult').classList.add('hidden');
        showQ(id);
    }

    function showQ(id) {
        // Simple quiz placeholder for demo
        document.getElementById('quizProgress').style.width = `${((qIdx + 1) / 10) * 100}%`;
        document.getElementById('questionText').innerText = `Practice question ${qIdx+1} for ${id}: What is the core goal?`;
        const optCont = document.getElementById('optionsContainer'), expBox = document.getElementById('explanationBox'), nextBtn = document.getElementById('nextBtn');
        optCont.innerHTML = ''; expBox.classList.add('hidden'); nextBtn.classList.add('hidden');

        ["Option A", "Option B", "Option C", "Option D"].forEach((opt, i) => {
            const div = document.createElement('div');
            div.className = 'option-card';
            div.innerHTML = `<span>${opt}</span><i class="far fa-circle"></i>`;
            div.onclick = () => {
                if (nextBtn.classList.contains('hidden')) {
                    const all = optCont.querySelectorAll('.option-card');
                    all[2].classList.add('correct');
                    if (i === 2) score++; else div.classList.add('wrong');
                    expBox.innerText = "This is a placeholder explanation. Real study questions cover curriculum topics.";
                    expBox.classList.remove('hidden'); nextBtn.classList.remove('hidden');
                    all.forEach(o => o.style.pointerEvents = 'none');
                }
            };
            optCont.appendChild(div);
        });
    }

    document.getElementById('nextBtn').onclick = () => {
        qIdx++;
        if (qIdx < 10) showQ(activeId);
        else {
            localStorage.setItem(`score_${activeId}`, score);
            document.getElementById('quizContent').classList.add('hidden');
            document.getElementById('quizResult').classList.remove('hidden');
            document.getElementById('scoreText').innerText = `${score} / 10`;
            openHub(activeId);
        }
    };

    document.getElementById('restartQuiz').onclick = () => initQuiz(activeId);

    navItems.forEach(li => li.onclick = () => {
        navItems.forEach(n => n.classList.remove('active')); li.classList.add('active');
        render(li.dataset.filter, search.value);
        if (window.innerWidth <= 992) { sidebar.classList.remove('open'); navOverlay.classList.remove('active'); }
    });

    search.oninput = (e) => render(document.querySelector('.nav-links li.active').dataset.filter, e.target.value);
    mobileToggle.onclick = () => { sidebar.classList.add('open'); navOverlay.classList.add('active'); };
    document.getElementById('mobileClose').onclick = () => { sidebar.classList.remove('open'); navOverlay.classList.remove('active'); };
    navOverlay.onclick = () => { sidebar.classList.remove('open'); navOverlay.classList.remove('active'); };
    closeM.onclick = () => { modal.style.display = 'none'; };
    
    document.querySelectorAll('.tab-btn').forEach(btn => btn.onclick = () => {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active')); btn.classList.add('active');
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        document.getElementById(btn.dataset.tab + 'Tab').classList.add('active');
    });

    render();
});
