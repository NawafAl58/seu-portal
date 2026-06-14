document.addEventListener('DOMContentLoaded', () => {
    // UI Helpers
    const sidebar = document.getElementById('sidebar');
    const mobileToggle = document.getElementById('mobileToggle');
    const mobileClose = document.getElementById('mobileClose');
    const navOverlay = document.getElementById('navOverlay');
    const searchInput = document.getElementById('courseSearch');
    const cards = document.querySelectorAll('.course-card');
    const navItems = document.querySelectorAll('.nav-links li');
    const dateEl = document.getElementById('currentDate');

    if (dateEl) dateEl.textContent = new Date().toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

    // Mobile Navigation
    const toggleSidebar = () => {
        sidebar.classList.toggle('open');
        navOverlay.classList.toggle('active');
    };

    mobileToggle.onclick = toggleSidebar;
    mobileClose.onclick = toggleSidebar;
    navOverlay.onclick = toggleSidebar;

    // Search and Filter
    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        cards.forEach(card => {
            const name = card.getAttribute('data-name').toLowerCase();
            card.style.display = name.includes(term) ? 'flex' : 'none';
        });
    });

    navItems.forEach(item => {
        item.onclick = () => {
            const filter = item.getAttribute('data-filter');
            navItems.forEach(n => n.classList.remove('active'));
            item.classList.add('active');
            cards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
            if (window.innerWidth <= 992) toggleSidebar();
        };
    });

    // Quiz Engine
    const quizzes = {
        'IT245': [
            { q: "What is the time complexity of pushing to a stack?", a: ["O(1)", "O(n)", "O(log n)"], c: 0 },
            { q: "Which data structure uses FIFO?", a: ["Stack", "Queue", "Binary Tree"], c: 1 }
        ],
        'IT241': [
            { q: "What is 'SJF' in CPU scheduling?", a: ["Shortest Job First", "Small Job First", "Single Job Flow"], c: 0 },
            { q: "Deadlock occurs when processes are waiting for...", a: ["Input", "Resources", "Output"], c: 1 }
        ],
        'IT244': [
            { q: "Which SQL command is used to fetch data?", a: ["FETCH", "GET", "SELECT"], c: 2 },
            { q: "What does ERD stand for?", a: ["Entity Relation Diagram", "Easy Row Data", "Enhanced Real Data"], c: 0 }
        ],
        'IT230': [
            { q: "Which tag is used for the largest heading in HTML?", a: ["<head>", "<h6>", "<h1>"], c: 2 },
            { q: "What does CSS stand for?", a: ["Cascading Style Sheets", "Colorful Style Sheets", "Computer Style Sheets"], c: 0 }
        ],
        'IT340': [
            { q: "How many layers are in the OSI model?", a: ["5", "7", "4"], c: 1 },
            { q: "Which layer is responsible for IP addressing?", a: ["Transport", "Data Link", "Network"], c: 2 }
        ],
        'IT440': [
            { q: "What is the 'C' in the CIA triad?", a: ["Control", "Confidentiality", "Cipher"], c: 1 },
            { q: "AES is what type of algorithm?", a: ["Asymmetric", "Symmetric", "Hashing"], c: 1 }
        ],
        'IT412': [
            { q: "What does SaaS stand for?", a: ["Software as a Service", "System as a Solution", "Storage as a Site"], c: 0 }
        ],
        'MATH251': [
            { q: "What is the determinant of an Identity matrix?", a: ["0", "1", "Infinity"], c: 1 }
        ]
    };

    let activeSub = '', qIdx = 0, score = 0;
    const modal = document.getElementById('quizModal');
    const qCont = document.getElementById('quizContainer');
    const rCont = document.getElementById('quizResult');

    document.querySelectorAll('.quiz-btn').forEach(btn => {
        btn.onclick = () => {
            activeSub = btn.dataset.subject;
            qIdx = 0; score = 0;
            document.getElementById('quizTitle').innerText = `${activeSub} Quiz`;
            qCont.classList.remove('hidden');
            rCont.classList.add('hidden');
            modal.style.display = 'block';
            renderQ();
        };
    });

    function renderQ() {
        const q = quizzes[activeSub][qIdx];
        document.getElementById('questionText').innerText = q.q;
        const optCont = document.getElementById('optionsContainer');
        optCont.innerHTML = '';
        q.a.forEach((opt, i) => {
            const b = document.createElement('button');
            b.className = 'option-btn';
            b.innerText = opt;
            b.onclick = () => {
                if (i === q.c) score++;
                qIdx++;
                if (qIdx < quizzes[activeSub].length) renderQ();
                else showResult();
            };
            optCont.appendChild(b);
        });
    }

    function showResult() {
        qCont.classList.add('hidden');
        rCont.classList.remove('hidden');
        document.getElementById('scoreText').innerText = `You scored ${score} / ${quizzes[activeSub].length}`;
    }

    document.getElementById('modalClose').onclick = () => modal.style.display = 'none';
    document.getElementById('finishQuiz').onclick = () => modal.style.display = 'none';
});