document.addEventListener('DOMContentLoaded', () => {
    const courses = [
        {
            id: 'ENG001',
            category: 'first-year',
            diff: 'easy',
            icon: 'fas fa-language',
            title: 'ENG001: English Skills',
            hrs: '8',
            desc: 'Intensive fundamental English language development.',
            summary: `<h3>ENG001 Course Summary</h3>
                    <p>The core objective of ENG001 is to transition students from general English usage to academic and technical proficiency, which is essential for the BSIT program.</p>
                    <h4>Key Academic Areas</h4>
                    <ul>
                        <li><strong>Reading Strategies:</strong> Focus on "Skimming" for the main idea and "Scanning" for specific technical data. Understanding "Inference" (reading between the lines) is also a key skill.</li>
                        <li><strong>Writing Mechanics:</strong> Mastery of paragraph structure: Topic Sentence -> Supporting Details -> Concluding Sentence. Learning to avoid Run-on sentences and Comma splices.</li>
                        <li><strong>Grammar Fundamentals:</strong> Deep dive into the 12 tenses, with heavy emphasis on the Passive Voice, as it is standard for writing technical reports and scientific documentation.</li>
                        <li><strong>Listening & Speaking:</strong> Developing the ability to follow academic lectures and participate in technical discussions/presentations.</li>
                    </ul>
                    <div class="note"><strong>Exam Tip:</strong> Reading exams often test your ability to identify transitions (However, Furthermore, Consequently). Memorize these to boost your score!</div>`
        },
        {
            id: 'CS001',
            category: 'first-year',
            diff: 'easy',
            icon: 'fas fa-laptop',
            title: 'CS001: Computer Essentials',
            hrs: '3',
            desc: 'Mastery of basic computing concepts and digital tools.',
            summary: `<h3>CS001 Course Summary</h3>
                    <p>This course provides the fundamental digital literacy required for all IT professionals.</p>
                    <h4>Module Highlights</h4>
                    <ul>
                        <li><strong>Hardware Anatomy:</strong> Understanding the Von Neumann architecture. CPU (The brain), RAM (Volatile memory), and Storage (HDD/SSD).</li>
                        <li><strong>Software Ecosystems:</strong> System software (Operating Systems like Windows/Linux) vs Application software. Role of the Kernel in resource management.</li>
                        <li><strong>Networking & The Web:</strong> Understanding the Client-Server model, IP addressing, DNS, and secure web protocols (HTTPS).</li>
                        <li><strong>Office Productivity:</strong> Expert-level usage of Microsoft Word (Styles, Referencing) and Excel (Complex formulas like VLOOKUP and pivot tables).</li>
                    </ul>
                    <div class="formula"><strong>Data Units:</strong> 1 Byte = 8 Bits | 1 Kilobyte (KB) = 1024 Bytes | 1 Megabyte (MB) = 1024 KB.</div>`
        },
        {
            id: 'COMM001',
            category: 'first-year',
            diff: 'easy',
            icon: 'fas fa-comments',
            title: 'COMM001: Communication Skills',
            hrs: '2',
            desc: 'Developing professional interpersonal and presentation skills.',
            summary: `<h3>COMM001 Course Summary</h3>
                    <p>Focuses on effective information exchange in professional and academic settings.</p>
                    <h4>Mastery Skills</h4>
                    <ul>
                        <li><strong>The Communication Process:</strong> Sender -> Message -> Channel -> Receiver -> Feedback. Understanding "Noise" as any interference.</li>
                        <li><strong>Non-Verbal Communication:</strong> The power of body language, proximity (proxemics), and tone (paralanguage).</li>
                        <li><strong>Active Listening:</strong> Techniques to improve comprehension and empathy in professional dialogue.</li>
                        <li><strong>Public Speaking:</strong> Structuring presentations and overcoming glossophobia (fear of speaking).</li>
                    </ul>`
        },
        {
            id: 'MATH001',
            category: 'first-year',
            diff: 'med',
            icon: 'fas fa-calculator',
            title: 'MATH001: College Algebra',
            hrs: '3',
            desc: 'Fundamental algebraic concepts and mathematical reasoning.',
            summary: `<h3>MATH001 Course Summary</h3>
                    <p>Algebra provides the logical basis for algorithm design and data manipulation.</p>
                    <h4>Core Mathematical Concepts</h4>
                    <ul>
                        <li><strong>Equations & Inequalities:</strong> Solving linear, quadratic, and absolute value equations.</li>
                        <li><strong>Functions:</strong> Understanding Domain, Range, and Function Composition (f ∘ g). Graphing linear and quadratic functions.</li>
                        <li><strong>Logarithms:</strong> The relationship between exponential and logarithmic forms. Log laws are essential for complexity analysis in IT.</li>
                        <li><strong>Matrices:</strong> Matrix operations (Addition, Multiplication) and solving systems using Cramer's Rule.</li>
                    </ul>
                    <div class="formula"><strong>Quadratic Formula:</strong> x = (-b ± √(b² - 4ac)) / 2a</div>`
        },
        {
            id: 'MATH150',
            category: 'college-req',
            diff: 'hard',
            icon: 'fas fa-project-diagram',
            title: 'MATH150: Discrete Mathematics',
            hrs: '3',
            desc: 'Logic, sets, relations, and graph theory for CS.',
            summary: `<h3>MATH150 Course Summary</h3>
                    <p>The "Math of Computers." This is perhaps the most important math course for an IT major.</p>
                    <h4>Key Logical Structures</h4>
                    <ul>
                        <li><strong>Formal Logic:</strong> Truth tables, Propositional Logic (AND, OR, NOT, XOR), and Conditional statements (If P, then Q).</li>
                        <li><strong>Set Theory:</strong> Unions, Intersections, Power Sets, and Cartesian Products.</li>
                        <li><strong>Number Theory:</strong> Modular arithmetic (The basis of encryption) and Prime factorization.</li>
                        <li><strong>Graph Theory:</strong> Understanding Nodes, Edges, Adjacency Matrices, and Trees.</li>
                    </ul>
                    <div class="formula"><strong>De Morgan's Law:</strong> ¬(P ∧ Q) ≡ ¬P ∨ ¬Q</div>`
        },
        {
            id: 'MATH251',
            category: 'college-req',
            diff: 'hard',
            icon: 'fas fa-th',
            title: 'MATH251: Linear Algebra',
            hrs: '3',
            desc: 'Matrix theory and vector spaces for graphics and data.',
            summary: `<h3>MATH251 Course Summary</h3>
                    <p>Linear Algebra is the engine behind 3D graphics, game engines, and machine learning models.</p>
                    <h4>Advanced Mathematical Topics</h4>
                    <ul>
                        <li><strong>Systems of Linear Equations:</strong> Mastering Gaussian Elimination and Gauss-Jordan to find unique solutions.</li>
                        <li><strong>Vector Spaces:</strong> Understanding spans, linear independence, and basis vectors.</li>
                        <li><strong>Eigenvalues & Eigenvectors:</strong> Solving the characteristic equation: det(A - λI) = 0.</li>
                        <li><strong>Linear Transformations:</strong> How matrices can rotate, scale, and translate vectors in space.</li>
                    </ul>`
        },
        {
            id: 'STAT101',
            category: 'college-req',
            diff: 'med',
            icon: 'fas fa-chart-line',
            title: 'STAT101: Introductory Statistics',
            hrs: '3',
            desc: 'Data analysis, probability, and statistical inference.',
            summary: `<h3>STAT101 Course Summary</h3>
                    <p>Statistics is vital for interpreting user data, system performance, and research findings.</p>
                    <h4>Statistical Units</h4>
                    <ul>
                        <li><strong>Descriptive Stats:</strong> Calculating Mean, Median, Mode, and the Standard Deviation (σ).</li>
                        <li><strong>Probability Theory:</strong> Conditional probability and the application of Bayes' Theorem.</li>
                        <li><strong>Distributions:</strong> The Normal (Gaussian) Distribution and the importance of the Central Limit Theorem.</li>
                        <li><strong>Inference:</strong> Hypothesis testing, p-values, and confidence intervals.</li>
                    </ul>`
        },
        {
            id: 'PHYS101',
            category: 'college-req',
            diff: 'hard',
            icon: 'fas fa-bolt',
            title: 'PHYS101: General Physics',
            hrs: '3',
            desc: 'Classical mechanics, electricity, and magnetism.',
            summary: `<h3>PHYS101 Course Summary</h3>
                    <p>Explores the physical properties of matter and energy that make hardware possible.</p>
                    <h4>Core Physics Pillars</h4>
                    <ul>
                        <li><strong>Classical Mechanics:</strong> Newton's 3 Laws of Motion. Force, Work, Power, and Energy conservation.</li>
                        <li><strong>Electricity & Circuits:</strong> Understanding Current (I), Voltage (V), and Resistance (R). Designing Series and Parallel circuits.</li>
                        <li><strong>Magnetism:</strong> The physics of electromagnetism, which is the basis for hard drive storage and electric motors.</li>
                        <li><strong>Optics:</strong> Light behavior, which explains how fiber optic cables transmit data across continents.</li>
                    </ul>
                    <div class="formula"><strong>Ohm's Law:</strong> V = I × R</div>`
        },
        {
            id: 'IT101',
            category: 'it-core',
            diff: 'med',
            icon: 'fas fa-desktop',
            title: 'IT101: Intro to IT & IS',
            hrs: '3',
            desc: 'Overview of IT infrastructure and information systems.',
            summary: `<h3>IT101 Course Summary</h3>
                    <p>The foundational "bird's eye view" of the entire Information Technology landscape.</p>
                    <h4>The IT Stack</h4>
                    <ul>
                        <li><strong>Information Systems (IS):</strong> Understanding how people, data, and technology work together to solve business problems.</li>
                        <li><strong>Types of Systems:</strong> TPS, DSS, and ERP.</li>
                        <li><strong>Infrastructure:</strong> Hardware, Operating Systems, Networking, and Cloud.</li>
                        <li><strong>Digital Ethics:</strong> Privacy and intellectual property.</li>
                    </ul>`
        },
        {
            id: 'IT230',
            category: 'it-core',
            diff: 'med',
            icon: 'fas fa-code',
            title: 'IT230: Web Technologies',
            hrs: '3',
            desc: 'Building modern web applications (HTML, CSS, JS, PHP).',
            summary: `<h3>IT230 Course Summary</h3>
                    <p>Covers both Client-side and Server-side development for the web.</p>
                    <h4>Full Stack Foundations</h4>
                    <ul>
                        <li><strong>HTML5:</strong> Semantic markup for better accessibility.</li>
                        <li><strong>CSS3:</strong> Styling with Flexbox and CSS Grid.</li>
                        <li><strong>JavaScript:</strong> Programming logic on the client-side.</li>
                        <li><strong>PHP & MySQL:</strong> Handling server-side data and databases.</li>
                    </ul>`
        },
        {
            id: 'IT241',
            category: 'it-core',
            diff: 'hard',
            icon: 'fas fa-cog',
            title: 'IT241: Operating Systems',
            hrs: '3',
            desc: 'Internal workings of OS: Processes, Memory, and Storage.',
            summary: `<h3>IT241 Course Summary</h3>
                    <p>The OS is the ultimate resource manager. This course explains its internal mechanisms.</p>
                    <h4>Advanced OS Concepts</h4>
                    <ul>
                        <li><strong>Scheduling:</strong> Algorithms like FCFS, Round Robin, and SJF.</li>
                        <li><strong>Memory:</strong> Paging, Segmentation, and Virtual Memory.</li>
                        <li><strong>Concurreny:</strong> Deadlocks, Mutex, and Semaphores.</li>
                    </ul>`
        },
        {
            id: 'IT244',
            category: 'it-core',
            diff: 'med',
            icon: 'fas fa-database',
            title: 'IT244: Database Management',
            hrs: '3',
            desc: 'Relational database design, ERD, and advanced SQL.',
            summary: `<h3>IT244 Course Summary</h3>
                    <p>Learn to design and manage relational databases efficiently.</p>
                    <h4>Relational Foundations</h4>
                    <ul>
                        <li><strong>ERD:</strong> Entity-Relationship modeling.</li>
                        <li><strong>Normalization:</strong> Reducing redundancy (1NF, 2NF, 3NF).</li>
                        <li><strong>SQL:</strong> Advanced querying and data definition.</li>
                    </ul>`
        },
        {
            id: 'IT245',
            category: 'it-core',
            diff: 'hard',
            icon: 'fas fa-brain',
            title: 'IT245: Data Structures',
            hrs: '3',
            desc: 'Stacks, Queues, Trees, Graphs, and Algorithm complexity.',
            summary: `<h3>IT245 Course Summary</h3>
                    <p>Organizing data to make programs run efficiently. Crucial for advanced IT.</p>
                    <h4>Data Architectures</h4>
                    <ul>
                        <li><strong>Linear:</strong> Stacks, Queues, and Linked Lists.</li>
                        <li><strong>Non-Linear:</strong> Trees (BST, AVL) and Graphs.</li>
                        <li><strong>Algorithms:</strong> Sorting and Search efficiency (Big O).</li>
                    </ul>`
        },
        {
            id: 'IT340',
            category: 'it-core',
            diff: 'hard',
            icon: 'fas fa-network-wired',
            title: 'IT340: Network Management',
            hrs: '3',
            desc: 'Protocols, OSI model, Subnetting, and Routing.',
            summary: `<h3>IT340 Course Summary</h3>
                    <p>Detailed study of networking protocols and infrastructure management.</p>
                    <h4>Network Architecture</h4>
                    <ul>
                        <li><strong>OSI Model:</strong> Layers 1 through 7.</li>
                        <li><strong>IP:</strong> IPv4 Subnetting and IPv6.</li>
                        <li><strong>Routing:</strong> Dynamic protocols like OSPF and BGP.</li>
                    </ul>`
        },
        {
            id: 'IT344',
            category: 'it-core',
            diff: 'hard',
            icon: 'fas fa-user-shield',
            title: 'IT344: Information Security',
            hrs: '3',
            desc: 'Cybersecurity, Cryptography, and Risk Management.',
            summary: `<h3>IT344 Course Summary</h3>
                    <p>Protecting systems and data from unauthorized access and cyber threats.</p>
                    <h4>Security Pillars</h4>
                    <ul>
                        <li><strong>CIA Triad:</strong> Confidentiality, Integrity, and Availability.</li>
                        <li><strong>Cryptography:</strong> Symmetric and Asymmetric encryption.</li>
                        <li><strong>Network Defense:</strong> Firewalls and IDS.</li>
                    </ul>`
        },
        {
            id: 'IT343',
            category: 'it-core',
            diff: 'med',
            icon: 'fas fa-tasks',
            title: 'IT343: IT Project Management',
            hrs: '3',
            desc: 'Software development lifecycle, Agile, and Gantt charts.',
            summary: `<h3>IT343 Course Summary</h3>
                    <p>The processes involved in planning and executing IT projects.</p>
                    <h4>PM Frameworks</h4>
                    <ul>
                        <li><strong>SDLC:</strong> Waterfall and Agile methodologies.</li>
                        <li><strong>Planning:</strong> WBS and Gantt Charts.</li>
                        <li><strong>Risk:</strong> Mitigating technical and project risks.</li>
                    </ul>`
        },
        {
            id: 'IT440',
            category: 'advanced',
            diff: 'med',
            icon: 'fas fa-puzzle-piece',
            title: 'IT440: System Integration',
            hrs: '3',
            desc: 'Connecting disparate systems and middleware.',
            summary: `<h3>IT440 Course Summary</h3>
                    <p>How to make different software and hardware work as a unified system.</p>
                    <h4>Integration Methods</h4>
                    <ul>
                        <li><strong>Middleware:</strong> ESBs and message queues.</li>
                        <li><strong>SOA:</strong> Service-Oriented Architecture.</li>
                        <li><strong>APIs:</strong> Connecting via REST and SOAP.</li>
                    </ul>`
        },
        {
            id: 'IT446',
            category: 'advanced',
            diff: 'easy',
            icon: 'fas fa-gavel',
            title: 'IT446: IT Ethics',
            hrs: '3',
            desc: 'Legal, social, and professional issues in IT.',
            summary: `<h3>IT446 Course Summary</h3>
                    <p>Exploring the ethical and legal boundaries of the IT profession.</p>
                    <h4>Ethical Issues</h4>
                    <ul>
                        <li><strong>Intellectual Property:</strong> Patents and Copyrights.</li>
                        <li><strong>Privacy:</strong> Data protection in the digital age.</li>
                        <li><strong>Legality:</strong> Cybercrime laws in Saudi Arabia.</li>
                    </ul>`
        },
        {
            id: 'IT448',
            category: 'advanced',
            diff: 'med',
            icon: 'fas fa-cloud',
            title: 'IT448: Cloud Computing',
            hrs: '3',
            desc: 'Virtualization, AWS/Azure, and cloud architecture.',
            summary: `<h3>IT448 Course Summary</h3>
                    <p>Transitioning from local hardware to on-demand cloud services.</p>
                    <h4>Cloud Concepts</h4>
                    <ul>
                        <li><strong>Service Models:</strong> IaaS, PaaS, and SaaS.</li>
                        <li><strong>Virtualization:</strong> The engine behind cloud instances.</li>
                        <li><strong>Platforms:</strong> Overview of AWS and Microsoft Azure.</li>
                    </ul>`
        },
        {
            id: 'IT411',
            category: 'advanced',
            diff: 'hard',
            icon: 'fas fa-tools',
            title: 'IT411: System Admin',
            hrs: '3',
            desc: 'Server management, Linux admin, and maintenance.',
            summary: `<h3>IT411 Course Summary</h3>
                    <p>The daily tasks of managing enterprise server environments.</p>
                    <h4>Admin Skills</h4>
                    <ul>
                        <li><strong>OS Admin:</strong> Linux command line and user management.</li>
                        <li><strong>Active Directory:</strong> Managing Windows domains.</li>
                        <li><strong>Backup:</strong> Planning for disaster recovery.</li>
                    </ul>`
        },
        {
            id: 'IT412',
            category: 'advanced',
            diff: 'med',
            icon: 'fas fa-mobile-alt',
            title: 'IT412: Mobile App Dev',
            hrs: '3',
            desc: 'Developing Android/iOS apps with modern frameworks.',
            summary: `<h3>IT412 Course Summary</h3>
                    <p>Principles of designing and building mobile applications.</p>
                    <h4>Mobile Stack</h4>
                    <ul>
                        <li><strong>Platforms:</strong> Native vs. Cross-platform (Flutter/React Native).</li>
                        <li><strong>UI/UX:</strong> Mobile-first design considerations.</li>
                        <li><strong>APIs:</strong> Integrating mobile apps with back-end services.</li>
                    </ul>`
        },
        {
            id: 'IT481',
            category: 'advanced',
            diff: 'hard',
            icon: 'fas fa-graduation-cap',
            title: 'IT481: Graduation Project I',
            hrs: '2',
            desc: 'Project proposal, analysis, and initial design phase.',
            summary: `<h3>IT481 Course Summary</h3>
                    <p>The research and planning phase for the final senior project.</p>
                    <h4>GP1 Phases</h4>
                    <ul>
                        <li><strong>Proposal:</strong> Defining the problem and scope.</li>
                        <li><strong>Analysis:</strong> Requirement gathering and feasibility.</li>
                        <li><strong>Design:</strong> Creating the technical blueprint.</li>
                    </ul>`
        },
        {
            id: 'IT482',
            category: 'advanced',
            diff: 'hard',
            icon: 'fas fa-trophy',
            title: 'IT482: Graduation Project II',
            hrs: '4',
            desc: 'Project implementation, testing, and final defense.',
            summary: `<h3>IT482 Course Summary</h3>
                    <p>The implementation and final assessment phase of the graduation project.</p>
                    <h4>GP2 Execution</h4>
                    <ul>
                        <li><strong>Development:</strong> Coding and system assembly.</li>
                        <li><strong>Testing:</strong> Verifying performance and security.</li>
                        <li><strong>Defense:</strong> Final presentation to the committee.</li>
                    </ul>`
        },
        {
            id: 'IT471',
            category: 'electives',
            diff: 'med',
            icon: 'fas fa-cloud-upload-alt',
            title: 'IT471: Cloud Computing (E)',
            hrs: '3',
            desc: 'Introduction to Cloud concepts and infrastructure.',
            summary: `<h3>IT471 Course Summary</h3>
                    <p>Introductory elective course for the Cloud Computing track.</p>
                    <h4>Cloud Basics</h4>
                    <ul>
                        <li>Characteristics of Cloud.</li>
                        <li>Deployment models.</li>
                        <li>Basic AWS/Azure services.</li>
                    </ul>`
        },
        {
            id: 'IT473',
            category: 'electives',
            diff: 'hard',
            icon: 'fas fa-network-wired',
            title: 'IT473: Cloud Systems Arch (E)',
            hrs: '3',
            desc: 'Designing and architecting scalable cloud systems.',
            summary: `<h3>IT473 Course Summary</h3>
                    <p>Designing scalable, highly available systems on the cloud.</p>
                    <h4>Arch Principles</h4>
                    <ul>
                        <li>Elasticity and Scalability.</li>
                        <li>Serverless architectures.</li>
                        <li>Cloud security best practices.</li>
                    </ul>`
        },
        {
            id: 'IT451',
            category: 'electives',
            diff: 'med',
            icon: 'fas fa-shield-alt',
            title: 'IT451: Network Security (E)',
            hrs: '3',
            desc: 'Deep dive into securing network infrastructures.',
            summary: `<h3>IT451 Course Summary</h3>
                    <p>Focuses on advanced network security protocols and tools.</p>
                    <h4>Network Defense</h4>
                    <ul>
                        <li>IPSec and VPNs.</li>
                        <li>Firewall configuration.</li>
                        <li>Wireless security.</li>
                    </ul>`
        },
        {
            id: 'IT452',
            category: 'electives',
            diff: 'hard',
            icon: 'fas fa-search-plus',
            title: 'IT452: Computer Forensics (E)',
            hrs: '3',
            desc: 'Investigating digital evidence and cyber crimes.',
            summary: `<h3>IT452 Course Summary</h3>
                    <p>Legal and technical aspects of digital forensics.</p>
                    <h4>Forensics Tasks</h4>
                    <ul>
                        <li>Evidence collection and preservation.</li>
                        <li>File system analysis.</li>
                        <li>Memory and network forensics.</li>
                    </ul>`
        },
        {
            id: 'ISLM101',
            category: 'university-req',
            diff: 'easy',
            icon: 'fas fa-mosque',
            title: 'ISLM101: Islamic Culture I',
            hrs: '2',
            desc: 'Introduction to Islamic faith and its characteristics.',
            summary: 'The conceptual foundation of Islamic Culture.'
        },
        {
            id: 'ISLM102',
            category: 'university-req',
            diff: 'easy',
            icon: 'fas fa-book',
            title: 'ISLM102: Islamic Culture II',
            hrs: '2',
            desc: 'Islam and society.',
            summary: 'Social structures and rights in Islam.'
        },
        {
            id: 'ISLM103',
            category: 'university-req',
            diff: 'easy',
            icon: 'fas fa-balance-scale',
            title: 'ISLM103: Islamic Culture III',
            hrs: '2',
            desc: 'Islamic economic and political systems.',
            summary: 'Islamic perspectives on governance and economy.'
        },
        {
            id: 'ISLM104',
            category: 'university-req',
            diff: 'easy',
            icon: 'fas fa-heart',
            title: 'ISLM104: Islamic Culture IV',
            hrs: '2',
            desc: 'Contemporary issues and human rights.',
            summary: 'Modern challenges and Islamic responses.'
        }
    ];

    const quizzes = {
        'ENG001': [
            { q: "What is the primary goal of ENG001?", a: ["Creative writing", "Academic proficiency", "Spelling only", "Poetry"], c: 1, e: "The course aims to prepare students for academic English." },
            { q: "Which writing part introduces the main idea?", a: ["Conclusion", "Supporting detail", "Topic sentence", "Appendix"], c: 2, e: "The topic sentence presents the central thought of a paragraph." },
            { q: "Passive voice is preferred in which context?", a: ["Novels", "Technical reports", "Casual texts", "Advertisements"], c: 1, e: "Technical writing often uses passive voice for objectivity." },
            { q: "Scanning is a reading strategy to find:", a: ["Main ideas", "Specific info", "Author's mood", "Synonyms"], c: 1, e: "Scanning is looking for specific data (dates, names, etc.)." },
            { q: "What is 'Skimming'?", a: ["Reading for detail", "Reading for general gist", "Proofreading", "Memorizing"], c: 1, e: "Skimming is a fast reading technique for the overall idea." },
            { q: "Transition words like 'However' show:", a: ["Addition", "Contrast", "Result", "Time"], c: 1, e: "However is used to contrast two ideas." },
            { q: "Academic vocabulary is often found in the:", a: ["Comic books", "AWL (Academic Word List)", "Slang dictionaries", "Lyrics"], c: 1, e: "The AWL is the standard for academic English terms." },
            { q: "A run-on sentence is a:", a: ["Short sentence", "Grammatical error", "Perfect paragraph", "Verb"], c: 1, e: "Run-on sentences occur when two main clauses are joined without punctuation." },
            { q: "Effective listening involves:", a: ["Interrupting", "Paraphrasing", "Ignoring", "Multitasking"], c: 1, e: "Active listening often requires paraphrasing to confirm understanding." },
            { q: "Technical English focuses on:", a: ["Ambiguity", "Precision", "Emotional appeal", "Slang"], c: 1, e: "Technical communication must be clear and precise." }
        ],
        'CS001': [
            { q: "What is the 'Brain' of the computer?", a: ["RAM", "SSD", "CPU", "GPU"], c: 2, e: "The Central Processing Unit (CPU) handles all logic and processing." },
            { q: "RAM is known as:", a: ["Permanent memory", "Volatile memory", "Storage", "Input device"], c: 1, e: "RAM is volatile; it loses data when power is turned off." },
            { q: "Which protocol is secure for web browsing?", a: ["HTTP", "FTP", "HTTPS", "SMTP"], c: 2, e: "HTTPS encrypts the communication for security." },
            { q: "1 Gigabyte (GB) equals how many Megabytes (MB)?", a: ["100", "512", "1024", "2048"], c: 2, e: "In binary terms, 1GB = 1024MB." },
            { q: "What is the role of an Operating System?", a: ["Designing websites", "Managing hardware", "Editing photos", "Playing music"], c: 1, e: "The OS manages hardware and system resources." },
            { q: "Which is a valid IPv4 address?", a: ["192.168.1.1", "256.0.0.1", "www.google.com", "A1:B2"], c: 0, e: "IPv4 uses four decimal numbers separated by dots (0-255)." },
            { q: "What does GUI stand for?", a: ["Global User Index", "Graphical User Interface", "General Unit Info", "Great User Input"], c: 1, e: "GUI allows interaction via visual icons and windows." },
            { q: "Excel formulas always start with:", a: ["#", "$", "=", "@"], c: 2, e: "The equals sign (=) starts every Excel formula." },
            { q: "Which part of the CPU performs calculations?", a: ["CU", "Registers", "ALU", "Cache"], c: 2, e: "The Arithmetic Logic Unit (ALU) performs math and logic." },
            { q: "SSDs are faster than HDDs because they use:", a: ["Moving disks", "Flash memory", "Magnetic tapes", "Laser"], c: 1, e: "Solid State Drives use flash memory with no moving parts." }
        ],
        'MATH150': [
            { q: "What is the truth value of 'P AND Q' if P is true and Q is false?", a: ["True", "False", "Both", "Unknown"], c: 1, e: "Both must be true for AND to be true." },
            { q: "Which symbol represents 'For all' in logic?", a: ["∃", "∀", "¬", "∧"], c: 1, e: "∀ is the universal quantifier." },
            { q: "A Set with 3 elements has how many Power Set elements?", a: ["3", "6", "8", "9"], c: 2, e: "Power Set size is 2^n. 2^3 = 8." },
            { q: "De Morgan's Law states ¬(P ∨ Q) is equivalent to:", a: ["¬P ∨ ¬Q", "¬P ∧ ¬Q", "P ∧ Q", "¬P ∧ Q"], c: 1, e: "¬(P ∨ Q) ≡ ¬P ∧ ¬Q." },
            { q: "Modular arithmetic: 10 mod 3 equals:", a: ["1", "3", "0", "10"], c: 0, e: "10 divided by 3 has a remainder of 1." },
            { q: "In graph theory, a 'Cycle' is a path that:", a: ["Never ends", "Starts and ends at the same node", "Is invisible", "Only has one node"], c: 1, e: "A cycle returns to its starting point." },
            { q: "What is the probability of a certain event?", a: ["0", "0.5", "1", "-1"], c: 2, e: "Certainty is represented by 1 (or 100%)." },
            { q: "A 'Bijection' is a function that is:", a: ["Only Injective", "Only Surjective", "Both Injective and Surjective", "Neither"], c: 2, e: "Bijective functions are one-to-one and onto." },
            { q: "Proof by induction starts with a:", a: ["Assumption", "Base case", "Conclusion", "Contradiction"], c: 1, e: "The base case is the first step of mathematical induction." },
            { q: "A graph with no cycles is called a:", a: ["Tree", "Ring", "Matrix", "Loop"], c: 0, e: "A connected graph without cycles is a tree." }
        ],
        'IT101': [
            { q: "What does TPS stand for?", a: ["Technical Power System", "Transaction Processing System", "Total Point Score", "Time per Second"], c: 1, e: "TPS handles daily business transactions." },
            { q: "Cloud Computing 'SaaS' stands for:", a: ["Storage as a Service", "System as a Service", "Software as a Service", "Security as a Service"], c: 2, e: "SaaS provides software via the web (e.g. Gmail)." },
            { q: "What is the primary focus of Information Systems?", a: ["Only coding", "People, Processes, and Tech", "Building hardware", "Gaming"], c: 1, e: "IS integrates people and technology for business." },
            { q: "The 'Digital Divide' refers to:", a: ["Split screens", "Inequality in tech access", "Fast internet", "New CPUs"], c: 1, e: "It is the gap between those with and without digital access." },
            { q: "MIS stands for:", a: ["Management Information System", "Medical Info System", "Mobile Input Source", "Modern IT Suite"], c: 0, e: "MIS helps managers make decisions using data." },
            { q: "A Firewall's main job is:", a: ["Cooling", "Security filtering", "Faster browsing", "Printing"], c: 1, e: "Firewalls filter incoming/outgoing traffic for security." },
            { q: "Which model is the internet built on?", a: ["Standalone", "Client-Server", "Broadcast", "Manual"], c: 1, e: "The internet primarily uses the Client-Server architecture." },
            { q: "IoT stands for:", a: ["Input of Tasks", "Internet of Things", "Intranet of Trust", "Index of Tools"], c: 1, e: "IoT refers to physical objects connected to the web." },
            { q: "ERP systems are used to:", a: ["Only play games", "Integrate business processes", "Fix computers", "Clean data"], c: 1, e: "ERP integrates core business functions (Finance, HR, etc.)." },
            { q: "What is 'Big Data'?", a: ["One large file", "Large, complex datasets", "A large computer", "A hard drive brand"], c: 1, e: "Big Data involves volume, velocity, and variety of info." }
        ]
    };

    // Fill remaining quizzes with placeholders for 27+ courses to ensure no crashes
    courses.forEach(c => {
        if(!quizzes[c.id]) {
            quizzes[c.id] = [
                { q: `Detailed question about ${c.id} topic?`, a: ["Incorrect", "Correct", "Partially", "None"], c: 1, e: `Researching actual ${c.id} exams is key.` },
                { q: `What is the core of ${c.id}?`, a: ["Skill", "Knowledge", "Logic", "All"], c: 3, e: "Every part of the course is vital." },
                { q: "Is this course part of the BSIT plan?", a: ["Yes", "No", "Optional", "Maybe"], c: 0, e: "It is a standard course for SEU IT students." },
                { q: "The study load (hrs) is:", a: ["1", "2", "3", "4"], c: 2, e: "Standard courses are 3 credits." },
                { q: "Level of difficulty?", a: ["Intro", "Intermediate", "Advanced", "Variable"], c: 3, e: "Difficulty varies by semester." },
                { q: "Key requirement?", a: ["Exam", "Project", "Both", "Attendance"], c: 2, e: "Assessment usually includes both." },
                { q: "Target Skill?", a: ["Technical", "Analytical", "Practical", "All"], c: 3, e: "Comprehensive skill development is expected." },
                { q: "Primary source?", a: ["Book", "LMS", "Google", "Portal"], c: 1, e: "LMS is the official source." },
                { q: "Grading system?", a: ["Letters", "Numbers", "Pass/Fail", "Points"], c: 0, e: "SEU uses the A-F letter system." },
                { q: "Made by?", a: ["N58", "University", "Admin", "User"], c: 0, e: "N58 created this portal for you." }
            ];
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
            const matchesFilter = filter === 'all' || c.category === filter;
            const matchesSearch = c.id.toLowerCase().includes(query.toLowerCase()) || c.title.toLowerCase().includes(query.toLowerCase());
            
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
                    <button class="primary-btn view-course" data-id="${c.id}"><i class="fas fa-book-open"></i> Study Hub</button>
                `;
                grid.appendChild(card);
            }
        });

        document.querySelectorAll('.view-course').forEach(btn => {
            btn.onclick = () => openHub(btn.dataset.id);
        });
    }

    let activeId = null;
    function openHub(id) {
        activeId = id;
        const course = courses.find(c => c.id === id);
        document.getElementById('modalTitle').innerText = course.title;
        document.getElementById('courseSummaryContent').innerHTML = course.summary;
        
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelector('[data-tab="summary"]').classList.add('active');
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        document.getElementById('summaryTab').classList.add('active');
        
        modal.style.display = 'flex';
        initQuiz(id);
    }

    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.onclick = () => {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            document.getElementById(btn.dataset.tab + 'Tab').classList.add('active');
        };
    });

    let qIdx = 0, score = 0;
    function initQuiz(id) {
        qIdx = 0; score = 0;
        document.getElementById('quizContent').classList.remove('hidden');
        document.getElementById('quizResult').classList.add('hidden');
        showQ(id);
    }

    function showQ(id) {
        const qSet = quizzes[id];
        const q = qSet[qIdx];
        document.getElementById('quizProgress').style.width = `${((qIdx + 1) / qSet.length) * 100}%`;
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
                    const all = optCont.querySelectorAll('.option-card');
                    all[q.c].classList.add('correct');
                    all[q.c].querySelector('i').className = 'fas fa-check-circle';
                    if (i === q.c) score++;
                    else {
                        div.classList.add('wrong');
                        div.querySelector('i').className = 'fas fa-times-circle';
                    }
                    expBox.innerText = q.e;
                    expBox.classList.remove('hidden');
                    nextBtn.classList.remove('hidden');
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
            document.getElementById('quizContent').classList.add('hidden');
            document.getElementById('quizResult').classList.remove('hidden');
            document.getElementById('scoreText').innerText = `Final Score: ${score} / 10`;
        }
    };

    document.getElementById('restartQuiz').onclick = () => initQuiz(activeId);

    navItems.forEach(li => {
        li.onclick = () => {
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
    
    mobileToggle.onclick = () => { sidebar.classList.add('open'); navOverlay.classList.add('active'); };
    document.getElementById('mobileClose').onclick = () => { sidebar.classList.remove('open'); navOverlay.classList.remove('active'); };
    navOverlay.onclick = () => { sidebar.classList.remove('open'); navOverlay.classList.remove('active'); };
    closeM.onclick = () => { modal.style.display = 'none'; };

    render();
});
