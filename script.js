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
                    <div class="formula"><strong>Combinations Formula:</strong> C(n, k) = n! / (k!(n-k)!)</div>`
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
            id: 'ISLM101',
            category: 'university-req',
            diff: 'easy',
            icon: 'fas fa-mosque',
            title: 'ISLM101: Islamic Culture I',
            hrs: '2',
            desc: 'Introduction to Islamic faith and its characteristics.',
            summary: `<h3>ISLM101 Course Summary</h3>
                    <p>A study of the foundational values and beliefs of Islamic civilization.</p>
                    <h4>Key Areas</h4>
                    <ul>
                        <li>Definitions of culture vs. civilization.</li>
                        <li>The comprehensive nature of Islamic Creed (Aqidah).</li>
                        <li>The impact of Islamic values on scientific ethics and social behavior.</li>
                    </ul>`
        },
        {
            id: 'ISLM102',
            category: 'university-req',
            diff: 'easy',
            icon: 'fas fa-book',
            title: 'ISLM102: Islamic Culture II',
            hrs: '2',
            desc: 'Islam and society.',
            summary: `<h3>ISLM102 Course Summary</h3>
                    <p>Examines the Islamic perspective on social structures and community.</p>
                    <h4>Focus Areas</h4>
                    <ul>
                        <li>Family rights and responsibilities in Islam.</li>
                        <li>Social justice and community solidarity.</li>
                        <li>The Islamic approach to universal human rights.</li>
                    </ul>`
        },
        {
            id: 'ISLM103',
            category: 'university-req',
            diff: 'easy',
            icon: 'fas fa-balance-scale',
            title: 'ISLM103: Islamic Culture III',
            hrs: '2',
            desc: 'Islamic economic and political systems.',
            summary: `<h3>ISLM103 Course Summary</h3>
                    <p>Focuses on the practical systems of governance and economy in Islam.</p>
                    <h4>Core Topics</h4>
                    <ul>
                        <li>Principles of the Islamic Economic System (Zakat, prohibition of Riba).</li>
                        <li>The concept of Shura (consultation) in political leadership.</li>
                        <li>The role of ethical finance in modern society.</li>
                    </ul>`
        },
        {
            id: 'ISLM104',
            category: 'university-req',
            diff: 'easy',
            icon: 'fas fa-heart',
            title: 'ISLM104: Islamic Culture IV',
            hrs: '2',
            desc: 'Contemporary issues and human rights.',
            summary: `<h3>ISLM104 Course Summary</h3>
                    <p>Discusses modern global challenges from an Islamic perspective.</p>
                    <h4>Discussion Topics</h4>
                    <ul>
                        <li>Islam and globalization.</li>
                        <li>Dialogue between civilizations.</li>
                        <li>Responding to extremist ideologies and promoting moderation.</li>
                    </ul>`
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
                        <li><strong>Types of Systems:</strong> Transaction Processing (TPS), Decision Support (DSS), and Enterprise Resource Planning (ERP).</li>
                        <li><strong>Infrastructure:</strong> Hardware, Operating Systems, Networking, and Cloud.</li>
                        <li><strong>Digital Ethics:</strong> Privacy, intellectual property, and the social impact of automation.</li>
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
                        <li><strong>HTML5:</strong> Semantic markup for better accessibility and SEO.</li>
                        <li><strong>CSS3:</strong> Styling with Flexbox, CSS Grid, and responsive design techniques.</li>
                        <li><strong>JavaScript:</strong> Programming logic on the client-side, event handling, and DOM manipulation.</li>
                        <li><strong>PHP & MySQL:</strong> Handling form data on the server and storing/retrieving information from a database.</li>
                    </ul>
                    <div class="note"><strong>Exam Tip:</strong> Be ready to explain the difference between GET and POST methods in web forms!</div>`
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
                    <p>The OS is the ultimate resource manager. This course explains how it manages everything under the hood.</p>
                    <h4>Advanced OS Concepts</h4>
                    <ul>
                        <li><strong>Process Scheduling:</strong> Algorithms like First-Come-First-Serve (FCFS), Round Robin (RR), and Shortest Job First (SJF).</li>
                        <li><strong>Concurrency & Deadlocks:</strong> Understanding race conditions and how the OS uses Semaphores to prevent them.</li>
                        <li><strong>Memory Management:</strong> Paging, Segmentation, and the magic of Virtual Memory (RAM swapping to disk).</li>
                        <li><strong>Storage:</strong> How file systems (NTFS, EXT4) organize data on physical disks.</li>
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
                    <p>Every modern app is powered by a database. This course teaches you how to build them correctly.</p>
                    <h4>The Relational Model</h4>
                    <ul>
                        <li><strong>Entity-Relationship Diagrams (ERD):</strong> Modeling the real world into tables and relationships.</li>
                        <li><strong>Normalization:</strong> The 3 steps (1NF, 2NF, 3NF) to ensure your data isn't redundant or prone to errors.</li>
                        <li><strong>SQL Mastery:</strong> Complex SELECT queries, JOINs, Subqueries, and Data Definition Language (DDL).</li>
                        <li><strong>ACID Properties:</strong> Ensuring database transactions are reliable (Atomicity, Consistency, Isolation, Durability).</li>
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
                    <p>Data Structures are how we organize data to make programs run fast. Crucial for coding interviews!</p>
                    <h4>The IT Engine Room</h4>
                    <ul>
                        <li><strong>Arrays & Linked Lists:</strong> The basic building blocks of linear data storage.</li>
                        <li><strong>Stacks & Queues:</strong> Understanding LIFO (Last-In-First-Out) and FIFO (First-In-First-Out) logic.</li>
                        <li><strong>Trees & Graphs:</strong> Hierarchical data structures and networking models. BST, AVL, and Heaps.</li>
                        <li><strong>Sorting & Searching:</strong> Algorithms like Merge Sort, Quick Sort, and Binary Search.</li>
                    </ul>
                    <div class="formula"><strong>Big O Notation:</strong> O(1) < O(log n) < O(n) < O(n log n) < O(n²)</div>`
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
                    <p>Teaches how computers talk to each other across the room or across the world.</p>
                    <h4>Networking Blueprint</h4>
                    <ul>
                        <li><strong>OSI 7-Layer Model:</strong> Understanding the flow from the Physical layer to the Application layer.</li>
                        <li><strong>Subnetting (VLSM):</strong> The mathematical art of carving IP address ranges for efficiency.</li>
                        <li><strong>Routing Protocols:</strong> How routers decide the best path (OSPF, BGP, RIP).</li>
                        <li><strong>TCP/IP Suite:</strong> The universal language of the internet (IP, TCP, UDP, ICMP).</li>
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
                    <p>Learn to defend systems against hackers, malware, and data breaches.</p>
                    <h4>The Cybersecurity Shield</h4>
                    <ul>
                        <li><strong>The CIA Triad:</strong> Confidentiality, Integrity, and Availability. The 3 goals of security.</li>
                        <li><strong>Cryptography:</strong> Symmetric (fast) vs Asymmetric (secure/Public key) encryption.</li>
                        <li><strong>Network Defense:</strong> Using Firewalls, IDS (Intrusion Detection), and Honeypots.</li>
                        <li><strong>Security Policy:</strong> Risk assessment, business continuity, and disaster recovery planning.</li>
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
                    <p>Managing the "Triple Constraint" of Project Management: Scope, Time, and Cost.</p>
                    <h4>Management Methodologies</h4>
                    <ul>
                        <li><strong>Waterfall vs Agile:</strong> Comparing traditional sequential development with modern, iterative Scrum.</li>
                        <li><strong>Project Planning:</strong> Creating WBS (Work Breakdown Structure) and Gantt Charts.</li>
                        <li><strong>Quality & Risk:</strong> Ensuring the final software meets user expectations while avoiding failures.</li>
                        <li><strong>Team Leadership:</strong> Managing human resources and communication in technical teams.</li>
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
                    <p>Integration is about making different systems talk to each other to form a cohesive whole.</p>
                    <h4>Integration Strategies</h4>
                    <ul>
                        <li><strong>Vertical vs Horizontal:</strong> Methods of connecting silos of information.</li>
                        <li><strong>Middleware:</strong> Software that acts as a bridge (ESB, message queues).</li>
                        <li><strong>Service Oriented Architecture (SOA):</strong> Building systems as a collection of reusable services.</li>
                        <li><strong>API Economy:</strong> Leveraging REST and SOAP to connect modern web applications.</li>
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
                    <p>Discusses the responsibilities of IT professionals and the laws of the digital world.</p>
                    <h4>Ethical Frameworks</h4>
                    <ul>
                        <li><strong>Intellectual Property:</strong> Navigating Copyrights, Patents, and Open Source licenses.</li>
                        <li><strong>Cyber Law:</strong> Understanding the legal consequences of hacking and data misuse.</li>
                        <li><strong>Privacy in the Digital Age:</strong> Balancing security with individual privacy rights.</li>
                        <li><strong>Global Impact:</strong> How AI and automation affect society and the workforce.</li>
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
                    <p>Teaches the modern shift from buying servers to "renting" computing power on the cloud.</p>
                    <h4>Cloud Architecture</h4>
                    <ul>
                        <li><strong>Service Models:</strong> IaaS (Infrastructure), PaaS (Platform), and SaaS (Software).</li>
                        <li><strong>Deployment Models:</strong> Public, Private, Hybrid, and Community clouds.</li>
                        <li><strong>Virtualization:</strong> The technology (Hypervisors) that allows one server to act as many.</li>
                        <li><strong>Containers & Orchestration:</strong> Introduction to Docker and Kubernetes.</li>
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
                    <p>Practical, hands-on management of servers and network infrastructure.</p>
                    <h4>Administrator Playbook</h4>
                    <ul>
                        <li><strong>Linux/Unix Administration:</strong> Command line mastery, user management, and cron jobs.</li>
                        <li><strong>Active Directory (Windows):</strong> Centralized management of users and computers in an enterprise.</li>
                        <li><strong>Network Services:</strong> Configuring DNS, DHCP, and Web Servers (Apache/Nginx).</li>
                        <li><strong>Disaster Recovery:</strong> Planning for backups and system restoration after failure.</li>
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
                    <p>Design and build mobile applications that run on billions of devices.</p>
                    <h4>Mobile Development Stack</h4>
                    <ul>
                        <li><strong>Native Development:</strong> Kotlin for Android and Swift for iOS.</li>
                        <li><strong>Cross-Platform:</strong> Using Flutter or React Native to write code once for both platforms.</li>
                        <li><strong>Mobile UX:</strong> Understanding touch constraints, screen sizes, and battery life optimization.</li>
                        <li><strong>Back-end Integration:</strong> Connecting apps to cloud databases and authentication services (Firebase).</li>
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
            summary: `<h3>GP1: The Planning Phase</h3>
                    <p>This is the first half of your senior project. You move from an idea to a full technical design.</p>
                    <h4>Project Milestones</h4>
                    <ul>
                        <li><strong>Literature Review:</strong> Researching existing solutions to the problem you want to solve.</li>
                        <li><strong>System Analysis:</strong> Gathering requirements and creating Use Case diagrams.</li>
                        <li><strong>High-Level Design:</strong> Architecture, Database Schemas, and UI/UX Wireframes.</li>
                        <li><strong>The Proposal:</strong> Presenting your plan to the faculty for approval.</li>
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
            summary: `<h3>GP2: Implementation & Defense</h3>
                    <p>The final hurdle. You build the system you designed in GP1 and prove it works.</p>
                    <h4>Execution Phase</h4>
                    <ul>
                        <li><strong>Full-Stack Coding:</strong> Developing the front-end, back-end, and database.</li>
                        <li><strong>Quality Assurance:</strong> Rigorous testing (Unit testing, System testing) to find bugs.</li>
                        <li><strong>Final Report:</strong> Writing the comprehensive technical documentation (The Thesis).</li>
                        <li><strong>Final Defense:</strong> A live demo and presentation of your project to the grading committee.</li>
                    </ul>`
        }
    ];

    const quizzes = {};
    courses.forEach(c => {
        quizzes[c.id] = [
            { q: `What is a primary learning outcome of ${c.id}?`, a: ["Hardware Basics", "Core Theory", "Application Skills", "Ethics"], c: 2, e: "This course focuses on practical application in IT." },
            { q: `Which university offers this BSIT plan?`, a: ["KSU", "KAU", "SEU", "PNU"], c: 2, e: "Saudi Electronic University (SEU) provides this plan." },
            { q: `Is this course required for the SEU IT degree?`, a: ["No", "Optional", "Yes", "Only for minors"], c: 2, e: "This is a core course in the IT curriculum." },
            { q: `How many credit hours does ${c.id} typically award?`, a: ["1", "2", "3", "4"], c: 2, e: "Most core courses are 3 credits." },
            { q: `What system is used at SEU for official records?`, a: ["Banner", "LMS", "Blackboard", "Email"], c: 0, e: "Banner is the student information system." },
            { q: `The BSIT program is designed for how many years?`, a: ["2", "3", "4", "5"], c: 2, e: "It's a standard 4-year degree." },
            { q: `What is the teaching language for IT at SEU?`, a: ["Arabic", "English", "French", "Bilingual"], c: 1, e: "Courses are delivered in English." },
            { q: `Which level of Bloom's Taxonomy does this hub target?`, a: ["Knowledge", "Evaluation", "Creation", "All levels"], c: 3, e: "We aim for comprehensive mastery." },
            { q: `Where can students find project guidance?`, a: ["Social Media", "Faculty Mentors", "Gaming forums", "Manuals"], c: 1, e: "Faculty supervisors provide core project guidance." },
            { q: `Who is the creator of this portal?`, a: ["Nawaf", "N58", "The AI", "The Admin"], c: 1, e: "This portal is a creation of N58." }
        ];
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
