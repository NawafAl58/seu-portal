document.addEventListener('DOMContentLoaded', () => {
    // Data - Filtered to IT and specific Math courses only
    const courses = [
        { id: 'IT101', category: 'core-it', diff: 'easy', icon: 'fas fa-info-circle', title: 'IT101: Intro to IT', hrs: '40h', desc: 'Hardware, Software, and Digital Literacy foundations.', link: 'https://seu1.org/files/level3/IT-101/' },
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

    // Comprehensive Quiz Engine with 10 questions per course
    const quizzes = {
        'IT101': [
            { q: "What is considered the 'brain' of the computer?", a: ["RAM", "CPU", "Hard Drive", "GPU"], c: 1, e: "The CPU (Central Processing Unit) executes instructions and processes data." },
            { q: "Which of these is an operating system?", a: ["HTML", "Python", "Linux", "Java"], c: 2, e: "Linux is a kernel/OS, others are markup or programming languages." },
            { q: "What does RAM stand for?", a: ["Read Access Memory", "Random Access Memory", "Rapid Action Memory", "Refined Auto Memory"], c: 1, e: "Random Access Memory is temporary volatile storage used for active tasks." },
            { q: "1 Terabyte is equal to approximately how many Gigabytes?", a: ["100 GB", "1000 GB", "500 GB", "10,000 GB"], c: 1, e: "Standard binary/decimal approximations treat 1TB as 1000GB or 1024GB." },
            { q: "Which is an example of 'Application Software'?", a: ["Windows", "MacOS", "Microsoft Word", "BIOS"], c: 2, e: "Word is an application for users; the others are system software." },
            { q: "What does 'GUI' stand for?", a: ["Global User Interface", "Graphical User Interface", "General Unit Index", "Great Utility Icon"], c: 1, e: "Graphical User Interface allows interaction via visual elements like icons." },
            { q: "Which part of the computer is 'volatile'?", a: ["Hard Drive", "RAM", "ROM", "Flash Drive"], c: 1, e: "RAM loses its data when power is turned off." },
            { q: "What type of port is used for high-speed video/audio transfer?", a: ["USB-A", "VGA", "HDMI", "PS/2"], c: 2, e: "HDMI is the modern standard for high-definition multimedia." },
            { q: "Which is a cloud storage service?", a: ["Photoshop", "Google Drive", "VLC Player", "Excel"], c: 1, e: "Google Drive stores files on remote servers accessible via internet." },
            { q: "What is 'phishing'?", a: ["A type of hardware", "A fraudulent email attempt to steal info", "A network protocol", "A coding technique"], c: 1, e: "Phishing is social engineering used to trick users into revealing sensitive data." }
        ],
        'IT230': [
            { q: "Which HTML tag is used for a hyperlink?", a: ["<link>", "<a>", "<href>", "<url>"], c: 1, e: "The <a> (anchor) tag is used to create links." },
            { q: "What does CSS stand for?", a: ["Cascading Style Sheets", "Creative Style Sheets", "Computer Style Sheets", "Complex Style Sheets"], c: 0, e: "Cascading Style Sheets describe how HTML elements are displayed." },
            { q: "In JavaScript, how do you declare a variable that cannot be reassigned?", a: ["var", "let", "const", "static"], c: 2, e: "const creates a read-only reference to a value." },
            { q: "Which CSS property changes text color?", a: ["background-color", "text-style", "color", "font-weight"], c: 2, e: "The 'color' property specifically targets the foreground/text color." },
            { q: "What is the correct way to add an external script in HTML?", a: ["<script href='...'>", "<script name='...'>", "<script src='...'>", "<javascript src='...'>"], c: 2, e: "The 'src' attribute is used to link external JavaScript files." },
            { q: "Which CSS box model property adds space INSIDE the border?", a: ["Margin", "Padding", "Outline", "Content"], c: 1, e: "Padding creates space between the content and the border." },
            { q: "What is the default 'display' value for a <div>?", a: ["inline", "block", "flex", "grid"], c: 1, e: "Divs are block-level elements by default." },
            { q: "Which JS method converts a JSON string to an object?", a: ["JSON.stringify()", "JSON.parse()", "JSON.convert()", "JSON.toObject()"], c: 1, e: "JSON.parse() is used to turn raw strings into usable JS objects." },
            { q: "What does the 'DOM' stand for?", a: ["Data Object Model", "Document Object Model", "Digital Order Model", "Display Object Mode"], c: 1, e: "Document Object Model represents the web page structure as a tree." },
            { q: "In CSS, which selector targets an element with id='header'?", a: [".header", "#header", "header", "*header"], c: 1, e: "The '#' symbol is the ID selector in CSS." }
        ],
        'IT241': [
            { q: "What is the core part of an Operating System?", a: ["Shell", "Kernel", "UI", "File System"], c: 1, e: "The Kernel manages system resources and hardware communication." },
            { q: "Which scheduling algorithm gives the CPU to the process that arrives first?", a: ["SJF", "Round Robin", "FCFS", "Priority"], c: 2, e: "First-Come-First-Served (FCFS) is non-preemptive and simple." },
            { q: "What is a 'Deadlock'?", a: ["A fast process", "A state where processes are blocked waiting for resources held by each other", "A system crash", "A file error"], c: 1, e: "Deadlock is a stalemate in resource allocation." },
            { q: "What is 'Virtual Memory'?", a: ["RAM expansion hardware", "Technique using disk space to simulate RAM", "Memory in the cloud", "Graphics memory"], c: 1, e: "It allows execution of processes larger than physical memory." },
            { q: "Which system call creates a new process in Unix?", a: ["exec()", "wait()", "fork()", "exit()"], c: 2, e: "fork() creates a child process that is a copy of the parent." },
            { q: "What is a 'Thread'?", a: ["A heavy process", "A basic unit of CPU utilization", "A network cable", "A type of variable"], c: 1, e: "Threads allow a single process to perform multiple tasks concurrently." },
            { q: "What does 'Paging' prevent?", a: ["Internal fragmentation", "External fragmentation", "Slow CPU", "Thrashing"], c: 1, e: "Paging allows physical memory to be non-contiguous, solving external fragmentation." },
            { q: "What is a 'Semaphore'?", a: ["A synchronization tool", "A type of memory", "A disk format", "A process state"], c: 0, e: "Semaphores are integer variables used for signaling between processes." },
            { q: "Which part of the OS handles user commands?", a: ["Kernel", "Shell", "Driver", "Registry"], c: 1, e: "The Shell is a command-line interpreter for the user." },
            { q: "What is 'Thrashing'?", a: ["High disk activity due to constant page faults", "Fast data transfer", "CPU cooling down", "Cleaning the disk"], c: 0, e: "Thrashing occurs when the OS spends more time paging than executing." }
        ],
        'IT244': [
            { q: "What does SQL stand for?", a: ["Simple Query Language", "Structured Query Language", "Standard Query Link", "Sequential Query Logic"], c: 1, e: "SQL is the standard language for relational databases." },
            { q: "Which SQL command removes all records from a table but keeps the structure?", a: ["DROP", "DELETE", "TRUNCATE", "REMOVE"], c: 2, e: "TRUNCATE is a DDL command that quickly clears a table." },
            { q: "What is a 'Primary Key'?", a: ["A key for encryption", "A unique identifier for a record", "A secondary index", "A foreign link"], c: 1, e: "A primary key uniquely identifies each row in a table." },
            { q: "Which normal form deals with removing multi-valued attributes?", a: ["1NF", "2NF", "3NF", "BCNF"], c: 0, e: "1st Normal Form requires atomic values and no repeating groups." },
            { q: "What does ACID stand for in transactions?", a: ["Active, Clear, Ion, Done", "Atomicity, Consistency, Isolation, Durability", "Auto, Check, Index, Data", "All, Correct, In, Disk"], c: 1, e: "ACID properties ensure reliable database transaction processing." },
            { q: "Which clause is used to filter results in a SELECT statement?", a: ["GROUP BY", "WHERE", "ORDER BY", "HAVING"], c: 1, e: "WHERE filters rows before they are grouped or sorted." },
            { q: "What is a 'Foreign Key'?", a: ["A key from another country", "A field that links two tables", "A hidden key", "A primary key in the same table"], c: 1, e: "Foreign keys establish relationships by referencing primary keys in other tables." },
            { q: "Which SQL aggregate function finds the highest value?", a: ["TOP()", "HIGH()", "MAX()", "SUM()"], c: 2, e: "MAX() returns the maximum value in a column." },
            { q: "What is an ERD?", a: ["Entity Relation Diagram", "Easy Row Data", "Enhanced Real Data", "Electronic Record Design"], c: 0, e: "ERD is a visual representation of the database schema." },
            { q: "Which command is used to add data to a table?", a: ["ADD", "UPDATE", "INSERT INTO", "CREATE"], c: 2, e: "INSERT INTO is the standard DML command for adding new rows." }
        ],
        'IT245': [
            { q: "What is the time complexity of searching in a Hash Table (average)?", a: ["O(n)", "O(log n)", "O(1)", "O(n log n)"], c: 2, e: "Hashing provides constant time lookup on average." },
            { q: "Which data structure follows LIFO?", a: ["Queue", "Stack", "Tree", "Graph"], c: 1, e: "Last-In-First-Out is the principle of a Stack." },
            { q: "Which sorting algorithm has O(n log n) worst-case complexity?", a: ["Quick Sort", "Merge Sort", "Bubble Sort", "Insertion Sort"], c: 1, e: "Merge Sort consistently performs at O(n log n)." },
            { q: "What is a 'Linked List'?", a: ["Array in memory", "Collection of nodes with data and pointers", "A list of websites", "A type of tree"], c: 1, e: "Nodes in a linked list are connected via pointers." },
            { q: "In a Binary Search Tree, where is the smaller value relative to a node?", a: ["Right child", "Left child", "Sibling", "Parent"], c: 1, e: "BST property: Left < Node < Right." },
            { q: "What is 'Big O' notation used for?", a: ["Counting zeros", "Describing asymptotic complexity", "Formatting code", "Naming variables"], c: 1, e: "Big O describes how runtime/space requirements grow with input size." },
            { q: "Which structure is best for implementing a 'Undo' feature?", a: ["Queue", "Stack", "Set", "Map"], c: 1, e: "Stacks allow reversing the most recent action first." },
            { q: "What is a 'Graph'?", a: ["A chart", "Nodes connected by edges", "A type of table", "Linear data"], c: 1, e: "Graphs represent non-linear relationships between objects." },
            { q: "Which algorithm is used for finding the shortest path in a weighted graph?", a: ["DFS", "BFS", "Dijkstra's", "Binary Search"], c: 2, e: "Dijkstra's algorithm efficiently finds shortest paths." },
            { q: "What is 'Recursion'?", a: ["A infinite loop", "A function calling itself", "A data structure", "A type of error"], c: 1, e: "Recursion solves problems by breaking them into smaller versions of the same problem." }
        ],
        'MATH150': [
            { q: "Which logical operator is true only when both inputs are true?", a: ["OR", "XOR", "AND", "NAND"], c: 2, e: "AND requires all conditions to be met." },
            { q: "What is a 'Set'?", a: ["Ordered list", "Unordered collection of distinct objects", "A group of numbers", "A mathematical error"], c: 1, e: "Sets contain unique elements with no specific order." },
            { q: "What is the truth value of (P AND NOT P)?", a: ["True", "False", "Conditional", "Unknown"], c: 1, e: "This is a contradiction; it can never be true." },
            { q: "In functions, what is the set of all possible inputs called?", a: ["Range", "Codomain", "Domain", "Output"], c: 2, e: "The Domain defines the valid input space for a function." },
            { q: "What is a 'Tautology'?", a: ["Always false", "Always true", "Sometimes true", "A logic error"], c: 1, e: "A tautology is a formula that is true under every possible interpretation." },
            { q: "Which proof method assumes the opposite to prove a statement?", a: ["Direct Proof", "Induction", "Contradiction", "Exhaustion"], c: 2, e: "Reductio ad absurdum (proof by contradiction)." },
            { q: "What is 'Mathematical Induction' used for?", a: ["Finding values", "Proving statements for all natural numbers", "Solving integrals", "Drawing graphs"], c: 1, e: "Induction is a powerful proof technique for discrete structures." },
            { q: "A graph with no cycles is called?", a: ["Complete", "Bipartite", "Tree", "Directed"], c: 2, e: "A tree is a connected acyclic graph." },
            { q: "How many elements are in the Power Set of a set with 3 elements?", a: ["3", "6", "8", "9"], c: 2, e: "Power set size is 2^n. 2^3 = 8." },
            { q: "What is 'Permutation' concerned with?", a: ["Selection", "Order/Arrangement", "Sum", "Probability"], c: 1, e: "Permutations are ordered arrangements; combinations are unordered selections." }
        ],
        'MATH251': [
            { q: "What is the result of multiplying a matrix by its inverse?", a: ["0", "1", "Identity Matrix", "Transpose"], c: 2, e: "A * A^-1 = I." },
            { q: "A matrix is singular if its determinant is?", a: ["1", "-1", "0", "Positive"], c: 2, e: "A zero determinant means the matrix is not invertible." },
            { q: "What is 'Row Reduction' (Gaussian Elimination) used for?", a: ["Multiplying matrices", "Solving linear systems", "Calculating area", "Sorting data"], c: 1, e: "It transforms a system into a simpler upper-triangular form." },
            { q: "What is a 'Vector'?", a: ["A point", "Quantity with magnitude and direction", "A long number", "A matrix with 2 columns"], c: 1, e: "Vectors are core elements in linear algebra representing directions in space." },
            { q: "The 'Transpose' of a matrix involves?", a: ["Inverting values", "Swapping rows and columns", "Calculating sum", "Scaling"], c: 1, e: "Rows become columns and columns become rows." },
            { q: "Two vectors are 'Orthogonal' if their dot product is?", a: ["1", "0", "-1", "Maximal"], c: 1, e: "Orthogonality is the algebraic equivalent of perpendicularity." },
            { q: "What is a 'Scalar'?", a: ["A large matrix", "A single real number", "A vector", "A geometric shape"], c: 1, e: "Scalars scale vectors or matrices." },
            { q: "What is the 'Trace' of a square matrix?", a: ["Sum of all elements", "Sum of diagonal elements", "Product of diagonal", "Determinant"], c: 1, e: "Trace is the sum of elements from the top-left to bottom-right." },
            { q: "What does 'Linear Independence' mean?", a: ["Vectors are parallel", "No vector in the set can be written as a combination of others", "All vectors are zero", "Vectors are perpendicular"], c: 1, e: "Linearly independent vectors span a space uniquely." },
            { q: "A 'Square Matrix' has?", a: ["Equal rows and columns", "More rows than columns", "No zeros", "Only 1s on diagonal"], c: 0, e: "The dimensions are n x n." }
        ],
        'STAT101': [
            { q: "What is the 'Mean'?", a: ["Middle value", "Most frequent value", "Arithmetic average", "Difference between high and low"], c: 2, e: "Mean is calculated by summing all values and dividing by the count." },
            { q: "Which measure of central tendency is the 'Middle' value?", a: ["Mean", "Median", "Mode", "Variance"], c: 1, e: "Median splits the sorted data into two equal halves." },
            { q: "What is 'Probability' range?", a: ["-1 to 1", "0 to 1", "0 to 100", "Any number"], c: 1, e: "Probability is always between 0 (impossible) and 1 (certain)." },
            { q: "What is 'Standard Deviation'?", a: ["Average value", "Measure of data dispersion", "The highest value", "A type of graph"], c: 1, e: "Standard deviation quantifies how much values deviate from the mean." },
            { q: "A 'Normal Distribution' curve looks like?", a: ["A straight line", "A bell", "A staircase", "A circle"], c: 1, e: "The bell curve is the hallmark of a normal (Gaussian) distribution." },
            { q: "What is the 'Mode'?", a: ["The average", "The middle", "The most frequent value", "The range"], c: 2, e: "Mode is the data point that occurs most often." },
            { q: "What does 'Correlation' measure?", a: ["Cause and effect", "Strength and direction of linear relationship", "Total sum", "Average error"], c: 1, e: "Correlation indicates how two variables move together." },
            { q: "What is a 'Sample'?", a: ["The whole population", "A subset of the population", "A single data point", "A graph"], c: 1, e: "Samples are used to make inferences about larger populations." },
            { q: "Which variable type is 'Height'?", a: ["Qualitative", "Discrete", "Continuous", "Categorical"], c: 2, e: "Continuous variables can take any value within a range." },
            { q: "What is a 'P-value' used for?", a: ["Calculating mean", "Hypothesis testing", "Finding range", "Drawing charts"], c: 1, e: "P-value determines statistical significance in testing." }
        ],
        'IT340': [
            { q: "Which layer of the OSI model is responsible for routing?", a: ["Physical", "Data Link", "Network", "Transport"], c: 2, e: "Layer 3 (Network) handles logical addressing and path determination." },
            { q: "What does TCP stand for?", a: ["Transfer Control Protocol", "Transmission Control Protocol", "Total Command Port", "Technical Connection Process"], c: 1, e: "TCP is a reliable, connection-oriented protocol." },
            { q: "What is the primary function of a Router?", a: ["Connect devices in LAN", "Forward packets between networks", "Boost signal", "Store files"], c: 1, e: "Routers operate at the Network layer to bridge different networks." },
            { q: "Which protocol is used for sending emails?", a: ["HTTP", "FTP", "SMTP", "POP3"], c: 2, e: "Simple Mail Transfer Protocol is the industry standard for outgoing mail." },
            { q: "What is an IP address used for?", a: ["Identifying a device on a network", "Naming a file", "Charging for internet", "Encryption"], c: 0, e: "IP addresses provide unique logical locations for network communication." },
            { q: "Which layer handles bit-level transmission?", a: ["Session", "Presentation", "Application", "Physical"], c: 3, e: "Layer 1 (Physical) deals with raw bits over a medium." },
            { q: "What is 'DHCP' used for?", a: ["Security", "Automatically assigning IP addresses", "Building websites", "Domain lookup"], c: 1, e: "Dynamic Host Configuration Protocol simplifies network management." },
            { q: "Which port is used for standard HTTP?", a: ["443", "21", "80", "22"], c: 2, e: "Port 80 is the default for unencrypted web traffic." },
            { q: "What is the purpose of the 'Subnet Mask'?", a: ["Hiding the IP", "Defining the network vs host portion of an IP", "Speeding up internet", "Changing MAC"], c: 1, e: "The mask tells the device which part of the address belongs to the network." },
            { q: "Which device operates at the Data Link layer?", a: ["Hub", "Switch", "Router", "Firewall"], c: 1, e: "Switches use MAC addresses to forward frames locally." }
        ],
        'IT344': [
            { q: "What does 'SDLC' stand for?", a: ["Software Data Life Cycle", "Software Development Life Cycle", "System Design Logic Center", "Simple Digital Line Code"], c: 1, e: "SDLC is the process of planning, creating, testing, and deploying software." },
            { q: "Which model is the most linear/sequential?", a: ["Agile", "Spiral", "Waterfall", "Scrum"], c: 2, e: "Waterfall follows a rigid step-by-step process." },
            { q: "What is 'Agile' methodology?", a: ["Fast coding", "Iterative and incremental development", "Strict documentation", "No testing"], c: 1, e: "Agile focuses on flexibility and customer feedback through iterations." },
            { q: "What is 'Unit Testing'?", a: ["Testing the whole system", "Testing individual components/functions", "User testing", "Stress testing"], c: 1, e: "It ensures each small part of the code works correctly." },
            { q: "In the 'V-Model', what is the counterpart to 'Requirements Analysis'?", a: ["Unit Testing", "System Testing", "Acceptance Testing", "Integration Testing"], c: 2, e: "Requirements are validated via Acceptance Testing." },
            { q: "What is a 'Requirement'?", a: ["A piece of code", "A feature or constraint the system must meet", "A bug", "The user manual"], c: 1, e: "Requirements define WHAT the system should do." },
            { q: "What is 'Refactoring'?", a: ["Adding new features", "Improving internal code structure without changing behavior", "Deleting code", "Fixing bugs"], c: 1, e: "Refactoring keeps code clean and maintainable." },
            { q: "What does 'UML' stand for?", a: ["Unified Modeling Language", "User Management Link", "Universal Mode Logic", "Uniform Marking List"], c: 0, e: "UML is a standard way to visualize system design." },
            { q: "Which role facilitates the Scrum process?", a: ["CEO", "Scrum Master", "Product Owner", "Developer"], c: 1, e: "The Scrum Master removes blockers and ensures Agile practices are followed." },
            { q: "What is 'Maintenance' in software?", a: ["Building the app", "Post-deployment support and updates", "Initial design", "Writing requirements"], c: 1, e: "Software needs updates to fix bugs or adapt to environment changes." }
        ],
        'IT440': [
            { q: "What is the 'CIA' triad in security?", a: ["Central Intelligence Agency", "Confidentiality, Integrity, Availability", "Control, Index, Access", "Crypt, In, Auto"], c: 1, e: "These are the three core goals of information security." },
            { q: "What is 'Symmetric Encryption'?", a: ["Using two different keys", "Using the same key for encryption and decryption", "No keys used", "Hashing"], c: 1, e: "Both parties share one secret key." },
            { q: "Which type of malware replicates itself over a network?", a: ["Virus", "Worm", "Trojan", "Spyware"], c: 1, e: "Worms spread automatically without user action." },
            { q: "What is 'Hashing' used for?", a: ["Confidentiality", "Data Integrity", "Speed", "Storage"], c: 1, e: "Hashing ensures data has not been modified." },
            { q: "A 'DoS' attack aims to compromise which CIA pillar?", a: ["Confidentiality", "Integrity", "Availability", "Non-repudiation"], c: 2, e: "Denial of Service prevents legitimate users from accessing resources." },
            { q: "What is 'Social Engineering'?", a: ["Building social apps", "Manipulating people into giving up info", "Hacking hardware", "Software updates"], c: 1, e: "It targets human psychology rather than technical flaws." },
            { q: "What does 'MFA' stand for?", a: ["Multiple File Access", "Multi-Factor Authentication", "Main Firewall Alert", "Manual Force Access"], c: 1, e: "Using two or more verification methods (e.g. password + SMS)." },
            { q: "Which protocol is the secure version of HTTP?", a: ["SHTTP", "HTTPS", "HTTP2", "SSL"], c: 1, e: "HTTPS uses TLS/SSL to encrypt web traffic." },
            { q: "What is a 'Firewall'?", a: ["A physical wall", "Network security device that monitors traffic", "An antivirus", "A browser"], c: 1, e: "Firewalls filter traffic based on security rules." },
            { q: "What is 'Phishing'?", a: ["A network tool", "Deceptive attempt to obtain sensitive info", "Coding error", "A type of firewall"], c: 1, e: "Often via emails that look official." }
        ],
        'IT412': [
            { q: "What does 'SaaS' stand for?", a: ["Software as a Service", "System as a Site", "Storage as a Solution", "Security as a System"], c: 0, e: "SaaS delivers software over the internet (e.g. Gmail, Office 365)." },
            { q: "Which cloud model provides the highest level of control?", a: ["SaaS", "PaaS", "IaaS", "Public Cloud"], c: 2, e: "Infrastructure as a Service (IaaS) provides virtual servers and storage." },
            { q: "What is 'Virtualization'?", a: ["Making things look real", "Running multiple virtual machines on one physical server", "Cloud storage", "High speed net"], c: 1, e: "Virtualization is the fundamental technology enabling cloud computing." },
            { q: "Which is a 'Public Cloud' provider?", a: ["Windows 10", "AWS", "MySQL", "Ubuntu"], c: 1, e: "Amazon Web Services is a leading public cloud platform." },
            { q: "What is 'Scalability'?", a: ["Fixing bugs", "Ability to handle increasing workloads by adding resources", "Security", "Cost"], c: 1, e: "Cloud allows scaling up (more power) or out (more instances)." },
            { q: "What is 'PaaS' primarily used for?", a: ["Storing files", "Developing and deploying applications", "Sending emails", "Replacing hardware"], c: 1, e: "Platform as a Service provides tools for developers." },
            { q: "What is 'Elasticity'?", a: ["Software flexibility", "Automatic scaling of resources up and down based on demand", "Low cost", "Data backup"], c: 1, e: "Elasticity matches resources to demand in real-time." },
            { q: "Which cloud model is owned and operated by a single organization?", a: ["Public", "Private", "Hybrid", "Community"], c: 1, e: "Private clouds are dedicated to one organization." },
            { q: "What is 'Cloud Bursting'?", a: ["Cloud server failure", "Spilling over from private to public cloud during peak demand", "Deleting data", "Hacking"], c: 1, e: "It handles sudden spikes using public resources." },
            { q: "What does 'On-demand self-service' mean?", a: ["Calling support", "Users can provision resources without human intervention", "Fixed costs", "Slow access"], c: 1, e: "One of the 5 essential characteristics of cloud computing." }
        ],
        'IT448': [
            { q: "Which language is primarily used for Android development (modern)?", a: ["Swift", "Java", "Kotlin", "C++"], c: 2, e: "Kotlin is now the preferred language for Android." },
            { q: "What is 'React Native'?", a: ["Database", "Cross-platform mobile framework", "A browser", "Operating system"], c: 1, e: "It allows building mobile apps using JavaScript/React." },
            { q: "Which company developed iOS?", a: ["Google", "Microsoft", "Apple", "Samsung"], c: 2, e: "iOS is the proprietary system for iPhones/iPads." },
            { q: "What is an 'IDE' used for mobile dev?", a: ["Android Studio", "VLC", "Chrome", "Excel"], c: 0, e: "Android Studio is the official Integrated Development Environment." },
            { q: "What is an 'Emulator'?", a: ["A real phone", "Software that simulates a mobile device on a PC", "A network tool", "A charging cable"], c: 1, e: "Emulators are used for testing apps without physical hardware." },
            { q: "Which language is used for native iOS development?", a: ["C#", "Swift", "Kotlin", "PHP"], c: 1, e: "Swift is Apple's modern language for iOS/macOS." },
            { q: "What is 'APK'?", a: ["Apple Package Kit", "Android Package Kit", "Advanced Programming Key", "Auto Power King"], c: 1, e: "The file format used to install apps on Android." },
            { q: "What does 'UI/UX' stand for?", a: ["User Instance/User X", "User Interface/User Experience", "Unit Index/Unit X", "Universal Interface/Update X"], c: 1, e: "UI is the look; UX is the feel and logic of interaction." },
            { q: "What is 'Responsive Design' in mobile apps?", a: ["Fast response", "Layout that adapts to different screen sizes", "Voice control", "Touch input"], c: 1, e: "Ensures the app looks good on all devices." },
            { q: "Where do you publish Android apps?", a: ["App Store", "Play Store", "Steam", "GitHub"], c: 1, e: "Google Play Store is the primary marketplace." }
        ]
    };

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
                        <span><i class="fas fa-book-open"></i> Core IT</span>
                    </div>
                    <p>${c.desc}</p>
                    <div class="resource-links">
                        <a href="${c.link}" target="_blank"><i class="fas fa-external-link-alt"></i> Archive</a>
                        <button class="quiz-btn" data-id="${c.id}"><i class="fas fa-vial"></i> Take Assessment (10 Qs)</button>
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
        currentQuiz = quizzes[id];
        qIdx = 0; score = 0;
        document.getElementById('quizTitle').innerText = `${id} Assessment (10 Questions)`;
        document.getElementById('quizContent').classList.remove('hidden');
        document.getElementById('quizResult').classList.add('hidden');
        modal.style.display = 'flex';
        showQ();
    }

    function showQ() {
        const q = currentQuiz[qIdx];
        document.getElementById('quizProgress').style.width = `${((qIdx + 1) / currentQuiz.length) * 100}%`;
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
                    
                    expBox.innerText = q.e;
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
            document.getElementById('scoreText').innerText = `Final Score: ${score} / ${currentQuiz.length}`;
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