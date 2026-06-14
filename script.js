document.addEventListener('DOMContentLoaded', () => {
    // Current Date
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('currentDate').textContent = new Date().toLocaleDateString(undefined, options);

    // Search Functionality
    const searchInput = document.getElementById('courseSearch');
    const cards = document.querySelectorAll('.course-card');

    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        cards.forEach(card => {
            const name = card.getAttribute('data-name');
            card.style.display = name.includes(term) ? 'block' : 'none';
        });
    });

    // Filter Navigation
    const navItems = document.querySelectorAll('.nav-links li');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const filter = item.getAttribute('data-filter');
            if (!filter) return;

            navItems.forEach(n => n.classList.remove('active'));
            item.classList.add('active');

            cards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Mock Quiz Logic
    const quizData = {
        'IT241': [
            { q: "What is the main role of a Kernel?", a: ["Memory Management", "GUI Design", "Web Browsing"], correct: 0 },
            { q: "Which of these is a process state?", a: ["Waiting", "Flying", "Sleeping"], correct: 0 }
        ],
        'MATH251': [
            { q: "What is a matrix with only one column called?", a: ["Row Vector", "Column Vector", "Identity"], correct: 1 }
        ]
    };

    let currentSubject = '';
    let currentQuestionIdx = 0;
    let score = 0;

    const modal = document.getElementById('quizModal');
    const quizBtns = document.querySelectorAll('.quiz-btn');
    const closeBtn = document.querySelector('.close');

    quizBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            currentSubject = btn.getAttribute('data-subject');
            startQuiz(currentSubject);
        });
    });

    function startQuiz(subject) {
        currentQuestionIdx = 0;
        score = 0;
        document.getElementById('quizTitle').textContent = `${subject} Check`;
        document.getElementById('quizContainer').classList.remove('hidden');
        document.getElementById('quizResult').classList.add('hidden');
        modal.style.display = 'block';
        showQuestion();
    }

    function showQuestion() {
        const q = quizData[currentSubject][currentQuestionIdx];
        document.getElementById('questionText').textContent = q.q;
        const optionsCont = document.getElementById('optionsContainer');
        optionsCont.innerHTML = '';
        
        q.a.forEach((opt, idx) => {
            const b = document.createElement('button');
            b.classList.add('option-btn');
            b.textContent = opt;
            b.onclick = () => checkAnswer(idx);
            optionsCont.appendChild(b);
        });
    }

    function checkAnswer(idx) {
        if (idx === quizData[currentSubject][currentQuestionIdx].correct) score++;
        currentQuestionIdx++;
        if (currentQuestionIdx < quizData[currentSubject].length) {
            showQuestion();
        } else {
            showResult();
        }
    }

    function showResult() {
        document.getElementById('quizContainer').classList.add('hidden');
        document.getElementById('quizResult').classList.remove('hidden');
        document.getElementById('scoreText').textContent = `You scored ${score} out of ${quizData[currentSubject].length}!`;
    }

    closeBtn.onclick = () => modal.style.display = 'none';
    window.onclick = (event) => { if (event.target == modal) modal.style.display = 'none'; }
});

function closeModal() {
    document.getElementById('quizModal').style.display = 'none';
}