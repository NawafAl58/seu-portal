document.addEventListener('DOMContentLoaded', () => {
    const courses = [
        { id: 'ENG001', category: 'first-year', diff: 'easy', icon: 'fas fa-language', title: 'ENG001: English Skills', hrs: '8', desc: 'Intensive fundamental English language development.', summary: `<h3>ENG001 Course Summary</h3><p>Academic and technical proficiency development.</p><h4>Key Areas</h4><ul><li>Reading Strategies (Skimming/Scanning)</li><li>Writing Mechanics</li><li>Grammar (12 Tenses, Passive Voice)</li><li>Technical Communication</li></ul>` },
        { id: 'CS001', category: 'first-year', diff: 'easy', icon: 'fas fa-laptop', title: 'CS001: Computer Essentials', hrs: '3', desc: 'Mastery of basic computing concepts and digital tools.', summary: `<h3>CS001 Course Summary</h3><p>Fundamental digital literacy.</p><h4>Modules</h4><ul><li>Hardware Anatomy (Von Neumann)</li><li>Software Ecosystems</li><li>Networking & HTTPS</li><li>Excel & Word Mastery</li></ul>` },
        { id: 'COMM001', category: 'first-year', diff: 'easy', icon: 'fas fa-comments', title: 'COMM001: Communication Skills', hrs: '2', desc: 'Developing professional interpersonal skills.', summary: `<h3>COMM001 Summary</h3><p>Effective information exchange.</p><ul><li>Communication Process</li><li>Non-Verbal (Proxemics)</li><li>Active Listening</li></ul>` },
        { id: 'MATH001', category: 'first-year', diff: 'med', icon: 'fas fa-calculator', title: 'MATH001: College Algebra', hrs: '3', desc: 'Fundamental algebraic concepts.', summary: `<h3>MATH001 Summary</h3><p>Logical basis for algorithms.</p><ul><li>Equations & Inequalities</li><li>Function Composition</li><li>Logarithms</li><li>Matrices</li></ul>` },
        { id: 'MATH150', category: 'college-req', diff: 'hard', icon: 'fas fa-project-diagram', title: 'MATH150: Discrete Mathematics', hrs: '3', desc: 'Logic, sets, and graph theory.', summary: `<h3>MATH150 Summary</h3><p>The math of computers.</p><ul><li>Formal Logic & Truth Tables</li><li>Set Theory</li><li>Number Theory</li><li>Graph Theory</li></ul>` },
        { id: 'MATH251', category: 'college-req', diff: 'hard', icon: 'fas fa-th', title: 'MATH251: Linear Algebra', hrs: '3', desc: 'Matrix theory and vector spaces.', summary: `<h3>MATH251 Summary</h3><p>Engine for 3D and ML.</p><ul><li>Gaussian Elimination</li><li>Vector Spaces</li><li>Eigenvalues</li></ul>` },
        { id: 'STAT101', category: 'college-req', diff: 'med', icon: 'fas fa-chart-line', title: 'STAT101: Intro Statistics', hrs: '3', desc: 'Data analysis and probability.', summary: `<h3>STAT101 Summary</h3><ul><li>Descriptive Stats</li><li>Bayes Theorem</li><li>Normal Distribution</li></ul>` },
        { id: 'PHYS101', category: 'college-req', diff: 'hard', icon: 'fas fa-bolt', title: 'PHYS101: General Physics', hrs: '3', desc: 'Mechanics and electricity.', summary: `<h3>PHYS101 Summary</h3><ul><li>Newton's Laws</li><li>Circuits (Ohm's Law)</li><li>Optics</li></ul>` },
        { id: 'IT101', category: 'it-core', diff: 'med', icon: 'fas fa-desktop', title: 'IT101: Intro to IT & IS', hrs: '3', desc: 'Infrastructure and systems.', summary: `<h3>IT101 Summary</h3><ul><li>TPS, DSS, ERP</li><li>SaaS/Cloud</li><li>CIA Triad</li></ul>` },
        { id: 'IT230', category: 'it-core', diff: 'med', icon: 'fas fa-code', title: 'IT230: Web Technologies', hrs: '3', desc: 'HTML, CSS, JS, PHP.', summary: `<h3>IT230 Summary</h3><ul><li>Full Stack Foundations</li><li>Responsive Design</li><li>Server-side Logic</li></ul>` },
        { id: 'IT241', category: 'it-core', diff: 'hard', icon: 'fas fa-cog', title: 'IT241: Operating Systems', hrs: '3', desc: 'Processes and Memory.', summary: `<h3>IT241 Summary</h3><ul><li>Scheduling (FCFS, RR)</li><li>Virtual Memory</li><li>Deadlocks</li></ul>` },
        { id: 'IT244', category: 'it-core', diff: 'med', icon: 'fas fa-database', title: 'IT244: Database Management', hrs: '3', desc: 'Design and SQL.', summary: `<h3>IT244 Summary</h3><ul><li>ERD Modeling</li><li>Normalization</li><li>Advanced SQL</li></ul>` },
        { id: 'IT245', category: 'it-core', diff: 'hard', icon: 'fas fa-brain', title: 'IT245: Data Structures', hrs: '3', desc: 'Stacks, Trees, Graphs.', summary: `<h3>IT245 Summary</h3><ul><li>Complexity (Big O)</li><li>Linked Lists</li><li>BST/AVL Trees</li></ul>` },
        { id: 'IT340', category: 'it-core', diff: 'hard', icon: 'fas fa-network-wired', title: 'IT340: Network Management', hrs: '3', desc: 'OSI and Routing.', summary: `<h3>IT340 Summary</h3><ul><li>OSI 7 Layers</li><li>Subnetting</li><li>OSPF/BGP</li></ul>` },
        { id: 'IT344', category: 'it-core', diff: 'hard', icon: 'fas fa-user-shield', title: 'IT344: Information Security', hrs: '3', desc: 'Cybersecurity and Crypto.', summary: `<h3>IT344 Summary</h3><ul><li>Encryption</li><li>Firewalls/IDS</li><li>Risk Management</li></ul>` },
        { id: 'IT343', category: 'it-core', diff: 'med', icon: 'fas fa-tasks', title: 'IT343: IT Project Management', hrs: '3', desc: 'SDLC and Agile.', summary: `<h3>IT343 Summary</h3><ul><li>Agile/Scrum</li><li>Gantt Charts</li><li>WBS</li></ul>` },
        { id: 'IT440', category: 'advanced', diff: 'med', icon: 'fas fa-puzzle-piece', title: 'IT440: System Integration', hrs: '3', desc: 'Connecting systems.', summary: `<h3>IT440 Summary</h3><ul><li>Middleware/ESB</li><li>SOA/APIs</li><li>REST/SOAP</li></ul>` },
        { id: 'IT446', category: 'advanced', diff: 'easy', icon: 'fas fa-gavel', title: 'IT446: IT Ethics', hrs: '3', desc: 'Legal and social issues.', summary: `<h3>IT446 Summary</h3><ul><li>Intellectual Property</li><li>Privacy Laws</li><li>Saudi Cyber Laws</li></ul>` },
        { id: 'IT448', category: 'advanced', diff: 'med', icon: 'fas fa-cloud', title: 'IT448: Cloud Computing', hrs: '3', desc: 'AWS/Azure and Arch.', summary: `<h3>IT448 Summary</h3><ul><li>IaaS, PaaS, SaaS</li><li>Virtualization</li><li>Cloud Arch</li></ul>` },
        { id: 'IT411', category: 'advanced', diff: 'hard', icon: 'fas fa-tools', title: 'IT411: System Admin', hrs: '3', desc: 'Server management.', summary: `<h3>IT411 Summary</h3><ul><li>Linux Admin</li><li>Active Directory</li><li>DRP/Backup</li></ul>` },
        { id: 'IT412', category: 'advanced', diff: 'med', icon: 'fas fa-mobile-alt', title: 'IT412: Mobile App Dev', hrs: '3', desc: 'Android and iOS Dev.', summary: `<h3>IT412 Summary</h3><ul><li>Flutter/React Native</li><li>Mobile UI/UX</li><li>Back-end Sync</li></ul>` },
        { id: 'IT481', category: 'advanced', diff: 'hard', icon: 'fas fa-graduation-cap', title: 'IT481: GP I', hrs: '2', desc: 'Proposal and Analysis.', summary: `<h3>IT481 Summary</h3><ul><li>Problem Def</li><li>Feasibility</li><li>SRS/SDS</li></ul>` },
        { id: 'IT482', category: 'advanced', diff: 'hard', icon: 'fas fa-trophy', title: 'IT482: GP II', hrs: '4', desc: 'Implementation and Defense.', summary: `<h3>IT482 Summary</h3><ul><li>Coding/Assembly</li><li>Beta Testing</li><li>Final Defense</li></ul>` },
        { id: 'IT471', category: 'electives', diff: 'med', icon: 'fas fa-cloud-upload-alt', title: 'IT471: Cloud Computing (E)', hrs: '3', desc: 'Intro to Cloud.', summary: 'Basic Cloud Concepts.' },
        { id: 'IT473', category: 'electives', diff: 'hard', icon: 'fas fa-network-wired', title: 'IT473: Cloud Arch (E)', hrs: '3', desc: 'Scalable cloud design.', summary: 'Cloud Architecting.' },
        { id: 'IT451', category: 'electives', diff: 'med', icon: 'fas fa-shield-alt', title: 'IT451: Network Security (E)', hrs: '3', desc: 'Securing networks.', summary: 'Network Defense.' },
        { id: 'IT452', category: 'electives', diff: 'hard', icon: 'fas fa-search-plus', title: 'IT452: Forensics (E)', hrs: '3', desc: 'Cyber investigation.', summary: 'Digital Forensics.' },
        { id: 'ISLM101', category: 'university-req', diff: 'easy', icon: 'fas fa-mosque', title: 'ISLM101: Islamic Culture I', hrs: '2', desc: 'Islamic faith intro.', summary: 'Faith and Values.' },
        { id: 'ISLM102', category: 'university-req', diff: 'easy', icon: 'fas fa-book', title: 'ISLM102: Islamic Culture II', hrs: '2', desc: 'Islam and society.', summary: 'Social systems.' },
        { id: 'ISLM103', category: 'university-req', diff: 'easy', icon: 'fas fa-balance-scale', title: 'ISLM103: Islamic Culture III', hrs: '2', desc: 'Economics and politics.', summary: 'Islamic Systems.' },
        { id: 'ISLM104', category: 'university-req', diff: 'easy', icon: 'fas fa-heart', title: 'ISLM104: Islamic Culture IV', hrs: '2', desc: 'Contemporary issues.', summary: 'Human Rights.' }
    ];

    const quizzes = {
        'ENG001': [
            { q: "Primary goal of ENG001?", a: ["Creative writing", "Academic proficiency", "Spelling only", "Poetry"], c: 1, e: "Prepares students for technical academic work." },
            { q: "Topic sentence job?", a: ["Concluding", "Introducing main idea", "Giving data", "Adding links"], c: 1, e: "Sets the tone for the entire paragraph." },
            { q: "Scanning is for?", a: ["Main ideas", "Specific info", "Mood", "Editing"], c: 1, e: "Fast search for specific names/dates." },
            { q: "Skimming is for?", a: ["Deep study", "General gist", "Memorizing", "Translation"], c: 1, e: "Getting the overall concept quickly." },
            { q: "Academic Word List (AWL)?", a: ["Slang", "Standard academic terms", "Lyrics", "Emoji"], c: 1, e: "Vocabulary essential for high-level study." },
            { q: "Passive voice focus?", a: ["The actor", "The action/object", "Emotions", "Dialogue"], c: 1, e: "Used for objectivity in technical reports." },
            { q: "Inference means?", a: ["Scanning", "Reading between lines", "Summarizing", "Printing"], c: 1, e: "Drawing logical conclusions from hidden clues." },
            { q: "Run-on sentence?", a: ["Long phrase", "Punctuation error", "Valid link", "Noun"], c: 1, e: "Joining independent clauses without correct grammar." },
            { q: "Active Listening part?", a: ["Ignoring", "Paraphrasing", "Interrupting", "Sleeping"], c: 1, e: "Confirms understanding by repeating in own words." },
            { q: "Transition 'Moreover'?", a: ["Contrast", "Addition", "Result", "Time"], c: 1, e: "Used to add more relevant information." }
        ],
        'CS001': [
            { q: "Brain of computer?", a: ["RAM", "SSD", "CPU", "GPU"], c: 2, e: "CPU processes all instructions." },
            { q: "Volatile memory?", a: ["HDD", "RAM", "ROM", "Flash"], c: 1, e: "RAM loses data when power is lost." },
            { q: "Secure web protocol?", a: ["HTTP", "FTP", "HTTPS", "SMTP"], c: 2, e: "HTTPS provides encrypted communication." },
            { q: "1TB equals how many GB?", a: ["100", "512", "1024", "2048"], c: 2, e: "Binary conversion is 1024." },
            { q: "Operating System role?", a: ["Web design", "Resource management", "Photo edit", "Sound"], c: 1, e: "The OS bridges hardware and software." },
            { q: "Valid IPv4?", a: ["10.0.0.1", "256.1.1.1", "www.site", "A1::B2"], c: 0, e: "Four decimal octets (0-255)." },
            { q: "GUI meaning?", a: ["Global Unit", "Graphical User Interface", "Great UI", "Game Unit"], c: 1, e: "Visual interaction with software." },
            { q: "Excel VLOOKUP?", a: ["Calculates math", "Search for values", "Formatting", "Graphing"], c: 1, e: "Vertical lookup in tables." },
            { q: "ALU handles?", a: ["Memory", "Math/Logic", "Power", "Display"], c: 1, e: "Arithmetic Logic Unit is within the CPU." },
            { q: "Von Neumann bottleneck?", a: ["Slow CPU", "Memory/CPU data path", "Heat", "Disk speed"], c: 1, e: "Limited throughput between CPU and memory." }
        ],
        'IT101': [
            { q: "CIA Triad?", a: ["Cops, Info, Apps", "Confidentiality, Integrity, Availability", "Cloud, Intranet, AI", "Code, Input, Access"], c: 1, e: "The core model for information security." },
            { q: "TPS stands for?", a: ["Tech Power", "Transaction Processing System", "Total Point", "Time Source"], c: 1, e: "Handles day-to-day business data." },
            { q: "SaaS example?", a: ["AWS", "Gmail", "Windows", "RAM"], c: 1, e: "Software delivered over the internet." },
            { q: "ERP focus?", a: ["Gaming", "Business process integration", "Cleaning", "Repair"], c: 1, e: "Enterprise Resource Planning unites Finance/HR/IT." },
            { q: "Firewall job?", a: ["Cooling", "Traffic filtering", "Speed", "Charging"], c: 1, e: "Monitors and controls network traffic." },
            { q: "Client-Server model?", a: ["Peer to peer", "Request-Response architecture", "Offline only", "Broadcast"], c: 1, e: "Standard architecture for web apps." },
            { q: "IoT meaning?", a: ["Input tasks", "Internet of Things", "Intranet trust", "Inner Tool"], c: 1, e: "Networked physical objects." },
            { q: "Decision Support System?", a: ["DSS", "TPS", "LMS", "VPN"], c: 0, e: "Helps managers make complex choices." },
            { q: "Data Warehouse?", a: ["Storage room", "Central data repository", "Big file", "Server rack"], c: 1, e: "Storehouse for historical analytical data." },
            { q: "Phishing is?", a: ["Fishing", "Social engineering scam", "Coding error", "Speed test"], c: 1, e: "Deceptive attempt to obtain sensitive info." }
        ]
    };

    // Generic Quiz Generator for remaining courses
    courses.forEach(c => {
        if(!quizzes[c.id]) {
            quizzes[c.id] = Array.from({length: 10}, (_, i) => ({
                q: `Question ${i+1} for ${c.id}: What is the core principle?`,
                a: ["Theory", "Practical Application", "Both", "None"],
                c: 2,
                e: `Learning ${c.id} requires a balance of theory and practice.`
            }));
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
        courses.forEach(c => {
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

    let activeId = null, qIdx = 0, score = 0;
    function openHub(id) {
        activeId = id;
        const course = courses.find(c => c.id === id);
        document.getElementById('modalTitle').innerText = course.title;
        document.getElementById('courseSummaryContent').innerHTML = course.summary;
        
        // Show Last Score if exists
        const lastScore = localStorage.getItem(`score_${id}`);
        const quizHeader = document.getElementById('quizHeader');
        quizHeader.innerHTML = `<h3>Practice Quiz</h3>`;
        if (lastScore) {
            quizHeader.innerHTML += `<div class="last-score-badge"><i class="fas fa-history"></i> Last Score: ${lastScore}/10</div>`;
        }

        modal.style.display = 'flex';
        initQuiz(id);
    }

    function initQuiz(id) {
        qIdx = 0; score = 0;
        document.getElementById('quizContent').classList.remove('hidden');
        document.getElementById('quizResult').classList.add('hidden');
        showQ(id);
    }

    function showQ(id) {
        const q = quizzes[id][qIdx];
        document.getElementById('quizProgress').style.width = `${((qIdx + 1) / 10) * 100}%`;
        document.getElementById('questionText').innerText = q.q;
        const optCont = document.getElementById('optionsContainer'), expBox = document.getElementById('explanationBox'), nextBtn = document.getElementById('nextBtn');
        optCont.innerHTML = ''; expBox.classList.add('hidden'); nextBtn.classList.add('hidden');

        q.a.forEach((opt, i) => {
            const div = document.createElement('div');
            div.className = 'option-card';
            div.innerHTML = `<span>${opt}</span><i class="far fa-circle"></i>`;
            div.onclick = () => {
                if (nextBtn.classList.contains('hidden')) {
                    const all = optCont.querySelectorAll('.option-card');
                    all[q.c].classList.add('correct');
                    all[q.c].querySelector('i').className = 'fas fa-check-circle';
                    if (i === q.c) score++;
                    else { div.classList.add('wrong'); div.querySelector('i').className = 'fas fa-times-circle'; }
                    expBox.innerText = q.e; expBox.classList.remove('hidden'); nextBtn.classList.remove('hidden');
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
            // Refresh last score badge
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
