document.addEventListener('DOMContentLoaded', () => {
    // Official SEU BSIT Full Curriculum Data
    const courses = [
        {
            id: 'ENG001',
            category: 'level-1-2',
            diff: 'easy',
            icon: 'fas fa-language',
            title: 'ENG001: English Skills 1',
            hrs: '8',
            desc: 'Intensive fundamental English language development.',
            summary: `<h3>Introduction to Academic English</h3>
                    <p>This course is designed to transition students from general English to academic proficiency. It focuses on the four pillars of language: Reading, Writing, Listening, and Speaking.</p>
                    <h4>Detailed Concept Breakdown:</h4>
                    <p><strong>1. Academic Vocabulary:</strong> Building a lexicon specifically for higher education. This involves moving beyond common nouns to specialized terms used in scientific and technical contexts.</p>
                    <p><strong>2. Grammar Foundations:</strong> Deep dive into sentence structures, including complex and compound sentences, correct tense usage (Present Perfect vs. Simple Past), and the passive voice, which is critical for technical reports.</p>
                    <p><strong>3. Reading Comprehension:</strong> Techniques for scanning and skimming technical texts, identifying main ideas, and understanding the nuance of academic arguments.</p>
                    <p><strong>4. Writing Skills:</strong> The course teaches the fundamentals of paragraph construction—Topic Sentence, Supporting Details, and Concluding Sentence. Students learn to avoid "Run-on" sentences and comma splices.</p>`
        },
        {
            id: 'CS001',
            category: 'level-1-2',
            diff: 'easy',
            icon: 'fas fa-mouse',
            title: 'CS001: Computer Essentials',
            hrs: '3',
            desc: 'Mastery of basic computing concepts and digital tools.',
            summary: `<h3>The Foundation of Modern Computing</h3>
                    <p>CS001 provides the essential digital literacy required for any IT professional. It covers the evolution of computing, hardware internals, and software ecosystems.</p>
                    <h4>Core Syllabus Modules:</h4>
                    <p><strong>1. Hardware Architecture:</strong> Detailed look at Von Neumann architecture. Understanding the interaction between the CPU, RAM (Volatile Memory), and non-volatile storage (HDD/SSD). Explanation of 32-bit vs 64-bit systems.</p>
                    <p><strong>2. Operating Systems:</strong> Introduction to Kernel functions, file system hierarchies (NTFS vs FAT32), and process management. Familiarity with Windows, Linux, and macOS environments.</p>
                    <p><strong>3. Productivity Software:</strong> Advanced use of word processors, spreadsheets (formulas, data visualization), and presentation software for professional communication.</p>
                    <p><strong>4. Internet & Cloud:</strong> The mechanics of the WWW, cloud storage providers (SaaS, PaaS), and the importance of secure browsing (HTTPS, SSL).</p>`
        },
        {
            id: 'MATH150',
            category: 'math-science',
            diff: 'hard',
            icon: 'fas fa-project-diagram',
            title: 'MATH150: Discrete Math',
            hrs: '3',
            desc: 'The mathematical foundation of logic and computer science.',
            summary: `<h3>Comprehensive Study of Discrete Structures</h3>
                    <p>Discrete Mathematics is the language of Computer Science. It deals with structures that are distinct and separable.</p>
                    <h4>Key Academic Units:</h4>
                    <p><strong>1. Propositional & Predicate Logic:</strong> Understanding truth tables is vital. 
                    Formula for number of rows in a truth table: 2^n. 
                    Logical Connectives: 
                    - Negation (¬P)
                    - Conjunction (P ∧ Q)
                    - Disjunction (P ∨ Q)
                    - Conditional (P → Q): Only false when P is true and Q is false.
                    - Biconditional (P ↔ Q).</p>
                    <p><strong>2. Set Theory & Relations:</strong> Defining sets (A ∪ B, A ∩ B), power sets, and Cartesian products. Understanding reflexive, symmetric, and transitive relations.</p>
                    <p><strong>3. Combinatorics:</strong> 
                    - Permutations (order matters): P(n,r) = n! / (n-r)!
                    - Combinations (order irrelevant): C(n,r) = n! / (r!(n-r)!)
                    Critical for analyzing algorithm efficiency.</p>
                    <p><strong>4. Graph Theory:</strong> Concepts of vertices (nodes) and edges. Identifying Euler paths (using every edge) and Hamilton cycles (visiting every vertex).</p>`
        },
        {
            id: 'PHYS101',
            category: 'math-science',
            diff: 'hard',
            icon: 'fas fa-bolt',
            title: 'PHYS101: General Physics',
            hrs: '3',
            desc: 'Physics concepts essential for understanding hardware and electronics.',
            summary: `<h3>Foundational Physics for Information Technology</h3>
                    <p>This course bridges the gap between abstract computing and the physical reality of hardware.</p>
                    <h4>Mastery Topics:</h4>
                    <p><strong>1. Mechanics (Newtonian Laws):</strong>
                    - 1st Law: Law of Inertia.
                    - 2nd Law: F = ma (Force = mass × acceleration).
                    - 3rd Law: Action and Reaction.
                    Understanding kinetic vs potential energy (PE = mgh, KE = ½mv²).</p>
                    <p><strong>2. Thermodynamics:</strong> Heat transfer, entropy, and the laws governing energy conservation in systems (critical for understanding CPU cooling and data center efficiency).</p>
                    <p><strong>3. Electricity & Magnetism (The IT Core):</strong>
                    - Ohm's Law: V = IR (Voltage = Current × Resistance).
                    - Kirchhoff’s Laws for circuit analysis.
                    - Capacitance and its role in memory storage.
                    - Electromagnetism as the basis for HDD storage and transmission.</p>
                    <p><strong>4. Waves & Optics:</strong> Signal propagation, frequency, wavelength, and fiber optic data transmission fundamentals.</p>`
        },
        {
            id: 'IT101',
            category: 'it-core',
            diff: 'med',
            icon: 'fas fa-laptop-code',
            title: 'IT101: Intro to IT & IS',
            hrs: '3',
            desc: 'Holistic view of Information Systems in the business world.',
            summary: `<h3>Introduction to Information Technology & Systems</h3>
                    <p>This course goes beyond coding to explain how technology serves organizational goals. It combines hardware, software, and human processes.</p>
                    <h4>Detailed Explanations:</h4>
                    <p><strong>1. The Information System Pyramid:</strong>
                    - Strategic Level: Executive Information Systems (EIS).
                    - Tactical Level: Decision Support Systems (DSS).
                    - Operational Level: Transaction Processing Systems (TPS).</p>
                    <p><strong>2. Enterprise Systems:</strong> Detailed study of ERP (Enterprise Resource Planning), CRM (Customer Relationship Management), and SCM (Supply Chain Management). How they integrate data across a business.</p>
                    <p><strong>3. The IT Infrastructure:</strong> Understanding the "stack"—from physical network cables to databases, operating systems, and final user applications.</p>
                    <p><strong>4. Ethics in IS:</strong> Privacy, intellectual property, and the social impact of information systems on the global economy.</p>`
        },
        {
            id: 'MATH251',
            category: 'math-science',
            diff: 'hard',
            icon: 'fas fa-th',
            title: 'MATH251: Linear Algebra',
            hrs: '3',
            desc: 'Matrix operations and vector spaces for computer graphics and data.',
            summary: `<h3>Matrices, Vectors, and Linear Systems</h3>
                    <p>Linear Algebra is the engine behind 3D graphics, machine learning, and data compression.</p>
                    <h4>Step-by-Step Mathematical Procedures:</h4>
                    <p><strong>1. Solving Linear Systems:</strong> Using Augmented Matrices and Gauss-Jordan Elimination. 
                    Goal: Transform the matrix into Reduced Row Echelon Form (RREF) to find values for variables (x, y, z).</p>
                    <p><strong>2. Matrix Operations:</strong> 
                    - Addition: Element-wise (must have same dimensions).
                    - Multiplication: Row-by-column dot products (A[m×n] * B[n×p] = C[m×p]).
                    - Inverses: A * A⁻¹ = I (The Identity Matrix).
                    - Determinants (det A): Non-zero determinant means the matrix is invertible.</p>
                    <p><strong>3. Vector Spaces & Subspaces:</strong> Understanding Span, Linear Independence (vectors don't depend on each other), and Basis. Essential for coordinate transformations.</p>
                    <p><strong>4. Eigenvalues & Eigenvectors:</strong> Solving the characteristic equation: det(A - λI) = 0. These are used in Google's PageRank and facial recognition algorithms.</p>`
        },
        {
            id: 'IT241',
            category: 'it-core',
            diff: 'hard',
            icon: 'fas fa-microchip',
            title: 'IT241: Operating Systems',
            hrs: '3',
            desc: 'Deep dive into system software and resource management.',
            summary: `<h3>The Core of Computer System Management</h3>
                    <p>The Operating System (OS) is the software that manages computer hardware resources and provides common services for computer programs.</p>
                    <h4>Critical OS Components:</h4>
                    <p><strong>1. Process Management:</strong>
                    - Definition of a Process: A program in execution.
                    - Scheduling Algorithms: FCFS, SJF (Shortest Job First), Round Robin (time-quantum based).
                    - Deadlocks: The "Dining Philosophers" problem. Conditions for deadlock: Mutual Exclusion, Hold and Wait, No Preemption, Circular Wait.</p>
                    <p><strong>2. Memory Management:</strong>
                    - Paging: Breaking physical memory into fixed-size blocks (frames) and logical memory into blocks (pages).
                    - Segmentation: Memory as a collection of logical segments.
                    - Virtual Memory: Using disk space as an extension of RAM via Page Faults.</p>
                    <p><strong>3. Storage & File Systems:</strong> Allocation methods (Contiguous, Linked, Indexed). Understanding disk scheduling (SCAN, C-SCAN).</p>
                    <p><strong>4. Concurrency:</strong> Semaphores and Mutexes used to prevent race conditions during multi-threaded execution.</p>`
        },
        {
            id: 'IT244',
            category: 'it-core',
            diff: 'med',
            icon: 'fas fa-database',
            title: 'IT244: Database Management',
            hrs: '3',
            desc: 'Designing and querying relational databases using SQL.',
            summary: `<h3>Relational Database Design & SQL Mastery</h3>
                    <p>Data is the most valuable asset. This course teaches how to store it efficiently, securely, and reliably.</p>
                    <h4>Core Principles:</h4>
                    <p><strong>1. ER Modeling (Entity-Relationship):</strong> Visualizing data through Entities, Attributes, and Relationships. Understanding Cardinality (1:1, 1:N, M:N).</p>
                    <p><strong>2. Database Normalization:</strong> The process of organizing data to minimize redundancy.
                    - 1NF: Atomic values only.
                    - 2NF: No partial functional dependency.
                    - 3NF: No transitive dependency (Non-key fields must only depend on the Primary Key).</p>
                    <p><strong>3. SQL (Structured Query Language):</strong>
                    - DDL: CREATE, ALTER, DROP.
                    - DML: INSERT, UPDATE, DELETE.
                    - DQL: Mastering SELECT, WHERE, JOIN (Inner, Left, Right), GROUP BY, and HAVING.</p>
                    <p><strong>4. ACID Transactions:</strong> 
                    - Atomicity: All or nothing.
                    - Consistency: Valid state.
                    - Isolation: Independent runs.
                    - Durability: Saved forever.</p>`
        },
        {
            id: 'IT245',
            category: 'it-core',
            diff: 'hard',
            icon: 'fas fa-brain',
            title: 'IT245: Data Structures',
            hrs: '3',
            desc: 'Organizing data for efficient access and manipulation.',
            summary: `<h3>Algorithms and Data Structures (The IT Engine)</h3>
                    <p>How we store data directly impacts how fast an application runs. This course is about making the right choices.</p>
                    <h4>Structural Deep Dive:</h4>
                    <p><strong>1. Linear Structures:</strong> 
                    - Arrays: Constant time access by index O(1).
                    - Linked Lists: Dynamic size, efficient insertion/deletion.
                    - Stacks: LIFO (Last-In-First-Out) - used in undo features.
                    - Queues: FIFO (First-In-First-Out) - used in print buffers.</p>
                    <p><strong>2. Non-Linear Structures:</strong>
                    - Binary Search Trees (BST): Left < Parent < Right. Searching O(log n).
                    - AVL/Red-Black Trees: Self-balancing to maintain speed.
                    - Graphs: Modeling networks. Search methods: DFS (Depth First) and BFS (Breadth First).</p>
                    <p><strong>3. Hashing:</strong> Using Hash Tables for O(1) average lookup time. Understanding collision resolution (Chaining vs Open Addressing).</p>
                    <p><strong>4. Big O Notation:</strong> Measuring complexity. 
                    O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2ⁿ).</p>`
        },
        {
            id: 'IT340',
            category: 'it-core',
            diff: 'hard',
            icon: 'fas fa-network-wired',
            title: 'IT340: Network Management',
            hrs: '3',
            desc: 'Communication protocols, routing, and IP addressing.',
            summary: `<h3>Data Communication and Network Protocols</h3>
                    <p>Understanding how data travels across the globe via the internet and local networks.</p>
                    <h4>The OSI 7-Layer Model (The Blueprint):</h4>
                    <p>1. <strong>Physical:</strong> Bits, cables, hubs.
                    2. <strong>Data Link:</strong> Frames, MAC addresses, Switches.
                    3. <strong>Network:</strong> Packets, IP addresses, Routers (The IP layer).
                    4. <strong>Transport:</strong> TCP (Reliable/Connection-oriented) vs UDP (Fast/Connectionless).
                    5. <strong>Session:</strong> Dialogue control.
                    6. <strong>Presentation:</strong> Encryption/Compression.
                    7. <strong>Application:</strong> HTTP, FTP, DNS, SMTP.</p>
                    <h4>Key Networking Skills:</h4>
                    <p><strong>Subnetting:</strong> Breaking a large IP network into smaller, manageable subnets using CIDR notation and Subnet Masks.</p>
                    <p><strong>Routing Protocols:</strong> Static routing vs Dynamic routing (OSPF, RIP, BGP).</p>
                    <p><strong>Network Security:</strong> VLANs, NAT (Network Address Translation), and Firewalls.</p>`
        },
        {
            id: 'IT344',
            category: 'it-core',
            diff: 'med',
            icon: 'fas fa-shield-alt',
            title: 'IT344: Information Security',
            hrs: '3',
            desc: 'Protecting information through technology and policy.',
            summary: `<h3>Cyberspace Protection and Defense</h3>
                    <p>In an era of constant threats, security is the highest priority for Information Technology.</p>
                    <h4>The CIA Triad (Core Goals):</h4>
                    <p>- <strong>Confidentiality:</strong> Only authorized users see data.
                    - <strong>Integrity:</strong> Data is not altered incorrectly.
                    - <strong>Availability:</strong> Systems work when needed (anti-DDoS).</p>
                    <h4>Technical Safeguards:</h4>
                    <p><strong>1. Cryptography:</strong> 
                    - Symmetric: Same key (AES).
                    - Asymmetric: Public/Private keys (RSA).
                    - Hashing: One-way fingerprint (SHA-256) for integrity.</p>
                    <p><strong>2. Authentication:</strong> Moving beyond passwords to MFA (Multi-Factor) and Biometrics.</p>
                    <p><strong>3. Attack Vectors:</strong> Understanding Malware (Viruses, Worms, Trojans) and Social Engineering (Phishing). 
                    - SQL Injection: Attacking databases.
                    - XSS: Attacking web users.</p>
                    <p><strong>4. Security Policy:</strong> Access Control Lists (ACLs), Business Continuity, and Disaster Recovery.</p>`
        },
        {
            id: 'STAT101',
            category: 'math-science',
            diff: 'med',
            icon: 'fas fa-chart-bar',
            title: 'STAT101: Intro to Statistics',
            hrs: '3',
            desc: 'Analyzing and interpreting data to make informed decisions.',
            summary: `<h3>Statistical Analysis for Data-Driven IT</h3>
                    <p>Statistics provides the tools to turn raw data into meaningful insights.</p>
                    <h4>Core Mathematical Tools:</h4>
                    <p><strong>1. Descriptive Statistics:</strong>
                    - Central Tendency: Mean (average), Median (middle), Mode (most frequent).
                    - Dispersion: Range, Variance, and Standard Deviation (how spread out the data is).</p>
                    <p><strong>2. Probability Theory:</strong> Fundamentals of chance. Conditional probability P(A|B) and Bayes' Theorem, which is core to modern AI spam filters.</p>
                    <p><strong>3. Data Distributions:</strong>
                    - Normal Distribution: The Bell Curve. 68-95-99.7 rule.
                    - Binomial & Poisson distributions for discrete events.</p>
                    <p><strong>4. Inferential Statistics:</strong>
                    - Hypothesis Testing: Using P-values to determine if a result is statistically significant.
                    - Regression Analysis: Finding the relationship between two variables (e.g., CPU load vs Temperature).</p>`
        }
    ];

    // Comprehensive Quiz Bank (10 Qs per course)
    const quizzes = {
        'ENG001': [
            { q: "Which part of a paragraph introduces the main idea?", a: ["Supporting details", "Topic sentence", "Conclusion", "Transitions"], c: 1, e: "The topic sentence summarizes the primary point." },
            { q: "What is a 'comma splice'?", a: ["Correct punctuation", "Joining two main clauses with only a comma", "A type of sentence", "A spelling error"], c: 1, e: "You should use a semicolon or a period instead." },
            { q: "Which tense is used for scientific facts?", a: ["Simple Past", "Present Continuous", "Simple Present", "Future Perfect"], c: 2, e: "Facts are always stated in Simple Present." },
            { q: "What does 'skimming' mean?", a: ["Reading for detail", "Reading quickly for main ideas", "Skipping words", "Slow reading"], c: 1, e: "Skimming is a fast reading technique." },
            { q: "A 'Run-on' sentence is:", a: ["Too short", "Two independent clauses without punctuation", "Perfect", "A fragment"], c: 1, e: "Run-ons occur when clauses are joined improperly." },
            { q: "Identify the noun in: 'The software runs efficiently.'", a: ["Software", "Runs", "Efficiently", "The"], c: 0, e: "Software is the subject/noun." },
            { q: "What is a synonym for 'Vast'?", a: ["Small", "Tiny", "Huge", "Thin"], c: 2, e: "Vast means very large." },
            { q: "Which is a formal greeting for a business email?", a: ["Hey!", "Yo", "Dear Sir/Madam", "What's up"], c: 2, e: "Formal contexts require professional greetings." },
            { q: "In academic writing, you should avoid:", a: ["Facts", "Slang", "Evidence", "References"], c: 1, e: "Slang is informal and unprofessional." },
            { q: "A concluding sentence usually:", a: ["Asks a question", "Starts the topic", "Restates the main idea", "Is unnecessary"], c: 2, e: "It wraps up the paragraph." }
        ],
        'CS001': [
            { q: "What is the primary function of the CPU?", a: ["Store data", "Execute instructions", "Display images", "Connect to internet"], c: 1, e: "The Central Processing Unit is the 'brain' that processes data." },
            { q: "Which of these is volatile memory?", a: ["SSD", "HDD", "RAM", "ROM"], c: 2, e: "RAM loses data when power is turned off." },
            { q: "What does 'SaaS' stand for?", a: ["Storage as a System", "Software as a Service", "System as a Service", "Security as a Service"], c: 1, e: "Software as a Service (e.g., Office 365)." },
            { q: "How many bits are in a byte?", a: ["4", "16", "8", "32"], c: 2, e: "1 Byte = 8 bits." },
            { q: "Which is an open-source operating system?", a: ["Windows", "macOS", "Linux", "iOS"], c: 2, e: "Linux is free and open-source." },
            { q: "A TeraByte (TB) is approximately:", a: ["1000 MB", "1000 KB", "1000 GB", "100 GB"], c: 2, e: "1TB = 1000 (or 1024) Gigabytes." },
            { q: "What part of the OS manages hardware?", a: ["Shell", "Kernel", "UI", "Browser"], c: 1, e: "The Kernel is the core component of an OS." },
            { q: "Which protocol is secure for web browsing?", a: ["HTTP", "FTP", "HTTPS", "SMTP"], c: 2, e: "HTTPS uses encryption (SSL/TLS)." },
            { q: "What is a 'firewall' for?", a: ["Cooling", "Protecting against net threats", "Cleaning files", "Speeding up CPU"], c: 1, e: "Firewalls monitor and filter network traffic." },
            { q: "What is the BIOS responsible for?", a: ["Internet", "Booting the computer", "Word processing", "Saving photos"], c: 1, e: "Basic Input/Output System initializes hardware during startup." }
        ],
        'MATH150': [
            { q: "How many rows in a truth table for 3 variables?", a: ["3", "6", "8", "9"], c: 2, e: "Formula is 2^n. 2³ = 8." },
            { q: "What is the negation of (P AND Q)?", a: ["NOT P AND NOT Q", "NOT P OR NOT Q", "P OR Q", "NOT P"], c: 1, e: "De Morgan's Law: ¬(P ∧ Q) ≡ ¬P ∨ ¬Q." },
            { q: "A set with no elements is called?", a: ["Empty set", "Full set", "Universal set", "Zero set"], c: 0, e: "Also known as the null set." },
            { q: "What is 5! (factorial)?", a: ["25", "60", "120", "15"], c: 2, e: "5 * 4 * 3 * 2 * 1 = 120." },
            { q: "A graph that is connected and acyclic is a:", a: ["Circuit", "Tree", "Loop", "Path"], c: 1, e: "A tree has no cycles." },
            { q: "The power set of {A, B} has how many elements?", a: ["2", "4", "3", "8"], c: 1, e: "2^|S| = 2² = 4." },
            { q: "In logic, what is a 'tautology'?", a: ["Always false", "Sometimes true", "Always true", "A contradiction"], c: 2, e: "A statement that is true under every interpretation." },
            { q: "If A ⊆ B, then:", a: ["A contains B", "B is empty", "Every element of A is in B", "A and B are equal"], c: 2, e: "Definition of a subset." },
            { q: "P → Q is false only when:", a: ["P is F, Q is F", "P is T, Q is T", "P is T, Q is F", "P is F, Q is T"], c: 2, e: "A conditional is false only if truth implies falsehood." },
            { q: "Permutations concern:", a: ["Unordered sets", "Ordered arrangements", "Probability only", "Graphs"], c: 1, e: "Order matters in permutations." }
        ],
        'PHYS101': [
            { q: "What is the unit of Force?", a: ["Joule", "Watt", "Newton", "Pascal"], c: 2, e: "Force is measured in Newtons (N)." },
            { q: "Ohm's Law formula is:", a: ["P = IV", "V = IR", "F = ma", "E = mc²"], c: 1, e: "Voltage = Current × Resistance." },
            { q: "Acceleration due to gravity (g) is approx:", a: ["5 m/s²", "9.8 m/s²", "12 m/s²", "1.5 m/s²"], c: 1, e: "Standard Earth gravity is 9.8 m/s²." },
            { q: "Which is a scalar quantity?", a: ["Velocity", "Mass", "Acceleration", "Force"], c: 1, e: "Mass has no direction, making it a scalar." },
            { q: "Newton's 2nd Law is:", a: ["F = m/a", "F = mv", "F = ma", "F = m+a"], c: 2, e: "Force equals mass times acceleration." },
            { q: "Energy of motion is called:", a: ["Potential", "Thermal", "Kinetic", "Static"], c: 2, e: "Kinetic energy (½mv²)." },
            { q: "The unit of Electrical Resistance is:", a: ["Volt", "Ampere", "Ohm", "Coulomb"], c: 2, e: "Resistance is measured in Ohms (Ω)." },
            { q: "Current is measured in:", a: ["Watts", "Amperes", "Volts", "Joules"], c: 1, e: "The unit is Ampere (A)." },
            { q: "What does a capacitor store?", a: ["Resistance", "Heat", "Electrical Charge", "Magnetic flux"], c: 2, e: "Capacitors store energy in an electric field." },
            { q: "Frequency is measured in:", a: ["Seconds", "Meters", "Hertz", "Newtons"], c: 2, e: "Hertz (Hz) is cycles per second." }
        ],
        'IT101': [
            { q: "What is 'ERP'?", a: ["Email Resource Plan", "Enterprise Resource Planning", "Easy Row Process", "Enhanced Real Protocol"], c: 1, e: "ERP integrates all business processes into one system." },
            { q: "Which IS level serves Senior Managers?", a: ["Operational", "Tactical", "Strategic", "Technological"], c: 2, e: "Strategic level systems (EIS) help long-term planning." },
            { q: "What is CRM?", a: ["Computer Resource Map", "Customer Relationship Management", "Core Risk Method", "Client Real Model"], c: 1, e: "CRM manages interactions with current and future customers." },
            { q: "A 'DSS' stands for:", a: ["Digital Safe System", "Decision Support System", "Data Scan System", "Direct Site Service"], c: 1, e: "Helps tactical managers make non-routine decisions." },
            { q: "Hardware, Software, and People are:", a: ["Parts of an IS", "Unnecessary", "Only for IT companies", "Internet terms"], c: 0, e: "They are the core components of an Information System." },
            { q: "E-Commerce involves:", a: ["Only buying", "Only selling", "Buying and selling over the internet", "Cash only"], c: 2, e: "Electronic transactions are the core of E-commerce." },
            { q: "What is 'Supply Chain Management'?", a: ["Managing employees", "Managing the flow of goods/services", "Managing hardware", "Selling to users"], c: 1, e: "SCM oversees products from raw material to final delivery." },
            { q: "What does IP stand for in Intellectual Property?", a: ["Internet Protocol", "Information Power", "Intellectual Property", "Instant Policy"], c: 2, e: "Legal rights over creations of the mind." },
            { q: "Digital transformation is about:", a: ["Buying computers", "Using tech to solve business problems", "Deleting paper", "Hiring IT staff"], c: 1, e: "It's a strategic shift in how business is done." },
            { q: "Privacy in IT concerns:", a: ["Speed", "Protection of personal data", "Storage size", "Cables"], c: 1, e: "Ensuring user data is handled correctly." }
        ],
        'MATH251': [
            { q: "A matrix is 'singular' if:", a: ["It is small", "Its determinant is 0", "It is square", "It is 1x1"], c: 1, e: "A zero determinant means no inverse exists." },
            { q: "Result of multiplying Matrix by its Inverse?", a: ["Zero matrix", "Original matrix", "Identity Matrix", "Vector"], c: 2, e: "A * A⁻¹ = I." },
            { q: "Gauss-Jordan elimination aims for:", a: ["RREF", "A mess", "Determinant", "Eigenvalue"], c: 0, e: "Reduced Row Echelon Form solves the system." },
            { q: "The Identity Matrix has what on the main diagonal?", a: ["0", "Infinity", "1", "-1"], c: 2, e: "1s on the diagonal, 0s elsewhere." },
            { q: "To multiply A(3x2) by B(2x4), the result is:", a: ["3x2", "2x4", "3x4", "Impossible"], c: 2, e: "Inner dimensions must match, outer determine result." },
            { q: "Dot product of [1, 2] and [3, 4] is:", a: ["11", "10", "15", "5"], c: 0, e: "(1*3) + (2*4) = 3 + 8 = 11." },
            { q: "Vectors are linearly independent if:", a: ["They are parallel", "One is a multiple of another", "None can be written as combination of others", "They are 0"], c: 2, e: "They span unique dimensions." },
            { q: "Transpose of a Row vector is a:", a: ["Square matrix", "Column vector", "Zero", "Scalar"], c: 1, e: "Rows become columns." },
            { q: "Matrix addition requires:", a: ["Same columns only", "Same rows only", "Identical dimensions", "Square shape"], c: 2, e: "Matrices must be the same size." },
            { q: "A 3x3 matrix has how many elements?", a: ["3", "6", "9", "12"], c: 2, e: "3 * 3 = 9." }
        ],
        'IT241': [
            { q: "What is a 'Deadlock'?", a: ["Fast process", "Processes waiting for resources held by each other", "System update", "Power failure"], c: 1, e: "A stalemate in resource allocation." },
            { q: "Which is a CPU scheduling algorithm?", a: ["NTFS", "Round Robin", "HTTP", "TCP"], c: 1, e: "Round Robin allocates time slices." },
            { q: "What is a 'Page Fault'?", a: ["Broken screen", "Page not in physical RAM", "Coding error", "Disk failure"], c: 1, e: "Occurs when virtual memory must fetch from disk." },
            { q: "A thread is:", a: ["A whole program", "A lightweight process", "A physical cable", "A virus"], c: 1, e: "The smallest unit of CPU utilization." },
            { q: "GUI stands for:", a: ["General Unit Index", "Graphical User Interface", "Global User Info", "Great User Icon"], c: 1, e: "Visual interaction for users." },
            { q: "Which part of the OS allocates RAM?", a: ["File system", "Memory manager", "Scheduler", "Driver"], c: 1, e: "The memory manager handles allocation/deallocation." },
            { q: "Virtual memory allows:", a: ["No RAM use", "Running programs larger than physical RAM", "Faster CPU", "Infinite storage"], c: 1, e: "It simulates RAM using disk space." },
            { q: "FIFO stands for:", a: ["Fast In Fast Out", "First In First Out", "File In File Out", "Finished Input"], c: 1, e: "First-come, first-served logic." },
            { q: "A Semaphore is used for:", a: ["Speed", "Synchronization", "Graphics", "Storage"], c: 1, e: "Protects shared resources in concurrent systems." },
            { q: "Which system call creates a process in Unix?", a: ["exit()", "wait()", "fork()", "read()"], c: 2, e: "fork() creates a child process." }
        ],
        'IT244': [
            { q: "What does SQL stand for?", a: ["Simple Query Link", "Structured Query Language", "Standard Query Logic", "System Query Link"], c: 1, e: "The standard database language." },
            { q: "Which key uniquely identifies a row?", a: ["Foreign Key", "Secondary Key", "Primary Key", "Index"], c: 2, e: "Primary keys must be unique and non-null." },
            { q: "What is 1st Normal Form (1NF)?", a: ["No duplicates", "Atomic values only", "No nulls", "Fast access"], c: 1, e: "Requires single-valued attributes." },
            { q: "Which SQL command retrieves data?", a: ["INSERT", "UPDATE", "SELECT", "DELETE"], c: 2, e: "SELECT is the data query command." },
            { q: "A 'Foreign Key' does what?", a: ["Locks the table", "Links to a Primary Key in another table", "Encrypts data", "Sorts data"], c: 1, e: "Establishes relationships between tables." },
            { q: "What does 'Atomicity' in ACID mean?", a: ["Data is small", "All parts of transaction succeed or none", "Fast speed", "Always on"], c: 1, e: "The 'all or nothing' rule." },
            { q: "Which join returns only matching rows?", a: ["Full Join", "Left Join", "Inner Join", "Outer Join"], c: 2, e: "Inner joins require matches in both tables." },
            { q: "Normalizing a database aims to:", a: ["Add data", "Reduce redundancy", "Delete logs", "Increase size"], c: 1, e: "Prevents data anomalies." },
            { q: "SQL DELETE command:", a: ["Removes table", "Removes specific rows", "Clears columns", "Is permanent"], c: 1, e: "Deletes records from a table." },
            { q: "What is an 'Attribute' in a database?", a: ["A row", "A relationship", "A column/field", "A file"], c: 2, e: "Attributes are the characteristics of an entity." }
        ],
        'IT245': [
            { q: "Big O for accessing an element in an Array by index?", a: ["O(n)", "O(log n)", "O(1)", "O(n²)"], c: 2, e: "Arrays provide constant time access." },
            { q: "A Stack follows which principle?", a: ["FIFO", "LIFO", "Priority", "Random"], c: 1, e: "Last-In-First-Out." },
            { q: "Complexity of Binary Search on sorted data?", a: ["O(n)", "O(log n)", "O(1)", "O(n²)"], c: 1, e: "Each step halves the search space." },
            { q: "Which structure is non-linear?", a: ["Linked List", "Queue", "Tree", "Array"], c: 1, e: "Trees have hierarchical parent-child links." },
            { q: "A Queue principle is:", a: ["LIFO", "FIFO", "FILO", "Unordered"], c: 1, e: "First-In-First-Out." },
            { q: "Root node of a tree is:", a: ["At the bottom", "The first node", "The last node", "The leaf"], c: 1, e: "The top-level starting node." },
            { q: "A 'Hash Collision' happens when:", a: ["Computer crashes", "Two keys map to the same hash value", "No memory left", "File is deleted"], c: 1, e: "Need resolution techniques like chaining." },
            { q: "In a BST, the right child is always:", a: ["Smaller", "Equal", "Greater", "Null"], c: 2, e: "Standard BST property: Right > Parent." },
            { q: "Which sort is O(n log n) average?", a: ["Bubble Sort", "Merge Sort", "Insertion Sort", "Selection Sort"], c: 1, e: "Merge and Quick sort are faster." },
            { q: "A Graph with no cycles is a:", a: ["DAG", "Forest", "Tree", "Circle"], c: 2, e: "Connected acyclic graph." }
        ],
        'IT340': [
            { q: "Which OSI layer handles routing?", a: ["Data Link", "Network", "Transport", "Physical"], c: 1, e: "Network layer (L3) moves packets across networks." },
            { q: "What is a MAC address?", a: ["Internet ID", "Physical hardware address", "Name of a computer", "IP version"], c: 1, e: "Used at the Data Link layer." },
            { q: "TCP is different from UDP because it is:", a: ["Faster", "Reliable and connection-oriented", "Simple", "Wireless"], c: 1, e: "TCP uses handshakes and acknowledgments." },
            { q: "HTTP operates at which layer?", a: ["Layer 2", "Layer 4", "Layer 7", "Layer 3"], c: 2, e: "HTTP is an Application layer protocol." },
            { q: "What does DNS do?", a: ["Sends emails", "Translates names to IP addresses", "Secures files", "Routes data"], c: 1, e: "Domain Name System is the internet's phonebook." },
            { q: "A 24-bit subnet mask looks like:", a: ["255.0.0.0", "255.255.255.0", "255.255.0.0", "0.0.0.0"], c: 1, e: "Class C mask /24." },
            { q: "What is a 'Router'?", a: ["Connects devices in LAN", "Forwards packets between different networks", "Provides power", "Increases speed"], c: 1, e: "Routers operate at the Network layer." },
            { q: "IPv4 addresses have how many bits?", a: ["32", "64", "128", "16"], c: 0, e: "IPv4 is a 32-bit address." },
            { q: "FTP is used for:", a: ["Browsing", "File Transfer", "Email", "Gaming"], c: 1, e: "File Transfer Protocol." },
            { q: "What is NAT used for?", a: ["Encryption", "Saving public IP addresses", "Speed", "Deleting viruses"], c: 1, e: "Network Address Translation maps private to public IPs." }
        ],
        'IT344': [
            { q: "What is 'Confidentiality' in CIA?", a: ["Data is always ready", "Data is accurate", "Data only seen by authorized users", "Data is fast"], c: 2, e: "Preventing unauthorized disclosure." },
            { q: "Which is a Symmetric encryption algorithm?", a: ["RSA", "ECC", "AES", "DSA"], c: 2, e: "Advanced Encryption Standard uses one secret key." },
            { q: "A DDoS attack aims at:", a: ["Confidentiality", "Integrity", "Availability", "Authentication"], c: 2, e: "Disrupting system access." },
            { q: "Hashing is 'one-way' meaning:", a: ["Easy to reverse", "Impossible to get original data from hash", "Only for files", "Very slow"], c: 1, e: "Hashes are fingerprints, not encryption." },
            { q: "What is 'Phishing'?", a: ["Technical bug", "Social engineering to steal info", "Network tool", "A database command"], c: 1, e: "Deceiving users into giving credentials." },
            { q: "Asymmetric encryption uses:", a: ["One key", "Two keys (Public/Private)", "No keys", "Password only"], c: 1, e: "One key to encrypt, another to decrypt." },
            { q: "Multi-Factor Authentication (MFA) requires:", a: ["Two passwords", "Something you know and something you have", "Just a fingerprint", "A long username"], c: 1, e: "Multiple categories of credentials." },
            { q: "What is a 'Trojans'?", a: ["Self-replicating virus", "Malware disguised as legitimate software", "A firewall", "A secure file"], c: 1, e: "Gains access by appearing useful." },
            { q: "SQL Injection is a:", a: ["Network error", "Database vulnerability", "Hardware bug", "Password tool"], c: 1, e: "Injecting malicious code into queries." },
            { q: "What is an ACL?", a: ["Access Control List", "Auto Computer Link", "Advanced Code Level", "Air Cooling Line"], c: 0, e: "Filters traffic based on rules." }
        ],
        'STAT101': [
            { q: "The arithmetic average of a data set is the:", a: ["Median", "Mode", "Mean", "Variance"], c: 0, e: "Mean = sum / count." },
            { q: "Which measure is most frequent in a set?", a: ["Mean", "Median", "Mode", "Range"], c: 2, e: "Mode is the most common value." },
            { q: "Probability of a certain event is:", a: ["0", "0.5", "1", "100"], c: 2, e: "Certainty is represented by 1 (or 100%)." },
            { q: "The 'Bell Curve' represents which distribution?", a: ["Binomial", "Poisson", "Normal", "Uniform"], c: 2, e: "Normal distribution is symmetric and bell-shaped." },
            { q: "Standard Deviation measures:", a: ["Total sum", "Middle value", "Spread/Dispersion", "Accuracy"], c: 2, e: "High SD means data is widely spread from the mean." },
            { q: "A P-value < 0.05 usually indicates:", a: ["Insignificant results", "Statistical significance", "A calculation error", "High variance"], c: 1, e: "Indicates strong evidence against the null hypothesis." },
            { q: "Median is the:", a: ["Average", "Middle value of sorted data", "Highest value", "Lowest value"], c: 1, e: "Splits the distribution in half." },
            { q: "Range is calculated as:", a: ["Mean - Mode", "Sum of all", "Max - Min", "Standard Deviation²"], c: 2, e: "Simple measure of spread." },
            { q: "Correlation measures:", a: ["Cause", "Effect", "Relationship between two variables", "Average"], c: 2, e: "Value between -1 and +1." },
            { q: "What is a 'Sample'?", a: ["Entire population", "A subset of the population", "A single number", "A graph"], c: 1, e: "Used to make inferences about the whole." }
        ]
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
            btn.onclick = (e) => {
                e.preventDefault();
                openHub(btn.dataset.id);
            };
        });
    }

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

    let qIdx = 0, score = 0;
    function initQuiz(id) {
        qIdx = 0; score = 0;
        document.getElementById('quizContent').classList.remove('hidden');
        document.getElementById('quizResult').classList.add('hidden');
        showQ(id);
    }

    function showQ(id) {
        const quizSet = quizzes[id] || quizzes['ENG001'];
        const q = quizSet[qIdx];
        document.getElementById('quizProgress').style.width = `${((qIdx + 1) / quizSet.length) * 100}%`;
        document.getElementById('questionText').innerText = `Assessment Question ${qIdx + 1}: ${q.q}`;
        
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
        const quizSet = quizzes[activeCourseId] || quizzes['ENG001'];
        qIdx++;
        if (qIdx < quizSet.length) showQ(activeCourseId);
        else {
            document.getElementById('quizContent').classList.add('hidden');
            document.getElementById('quizResult').classList.remove('hidden');
            document.getElementById('scoreText').innerText = `Assessment Score: ${score} / ${quizSet.length}`;
        }
    };

    document.getElementById('restartQuiz').onclick = (e) => {
        e.preventDefault();
        initQuiz(activeCourseId);
    };

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

    const dateEl = document.getElementById('currentDate');
    if (dateEl) dateEl.innerText = new Date().toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' });
    render();
});
