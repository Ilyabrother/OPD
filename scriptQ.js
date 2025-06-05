const quizData = [
    {
        question: "Что является основным источником энергии для солнечных панелей?",
        image: "https://avatars.mds.yandex.net/i?id=a6e8ff344eaa697ffdbbb5e0cc9a5509_l-5573072-images-thumbs&n=13",
        options: ["Ветер", "Солнечный свет", "Тепло земли", "Вода"],
        correct: 1
    },
    {
        question: "Как называется устройство, преобразующее энергию ветра в электричество?",
        image: "https://avatars.mds.yandex.net/i?id=91a4621b3e199711760cba326af9359d_l-5283209-images-thumbs&n=13",
        options: ["Солнечная панель", "Ветряная турбина", "Гидроэлектростанция", "Геотермальный генератор"],
        correct: 1
    },
    {
        question: "Какой вид энергии использует геотермальная электростанция?",
        image: "https://avatars.mds.yandex.net/i?id=7f123c4201937738423713528d385627_l-5220800-images-thumbs&n=13",
        options: ["Энергия солнца", "Энергия ветра", "Тепло земли", "Энергия воды"],
        correct: 2
    },
    {
        question: "Что из перечисленного относится к возобновляемым источникам энергии?",
        image: "https://goo.su/lv9C",
        options: ["Уголь", "Нефть", "Солнечная энергия", "Природный газ"],
        correct: 2
    },
    {
        question: "Как называется процесс преобразования солнечного света в электричество?",
        image: "https://via.placeholder.com/300x200?text=Фотогальваника",
        options: ["Фотосинтез", "Фотогальваника", "Термоэлектричество", "Гидроэнергетика"],
        correct: 1
    },
    {
        question: "Какой газ чаще всего используется в биогазовых установках?",
        image: "https://via.placeholder.com/300x200?text=Биогаз",
        options: ["Азот", "Метан", "Кислород", "Углекислый газ"],
        correct: 1
    },
    {
        question: "Что из перечисленного является преимуществом ветроэнергетики?",
        image: "https://via.placeholder.com/300x200?text=Ветроэнергетика",
        options: ["Высокая стоимость установок", "Зависимость от погодных условий", "Отсутствие выбросов CO2", "Шумовое загрязнение"],
        correct: 2
    },
    {
        question: "Какой тип энергии используется в гидроэлектростанциях?",
        image: "https://via.placeholder.com/300x200?text=Гидроэнергия",
        options: ["Энергия ветра", "Энергия воды", "Солнечная энергия", "Геотермальная энергия"],
        correct: 1
    },
    {
        question: "Что такое биомасса в контексте альтернативной энергетики?",
        image: "https://via.placeholder.com/300x200?text=Биомасса",
        options: ["Ископаемое топливо", "Органический материал", "Минеральные ресурсы", "Синтетическое топливо"],
        correct: 1
    },
    {
        question: "Какой вид энергии использует энергию приливов и отливов?",
        image: "https://via.placeholder.com/300x200?text=Приливная+энергия",
        options: ["Солнечная энергия", "Ветроэнергия", "Приливная энергия", "Геотермальная энергия"],
        correct: 2
    },
    {
        question: "Как называется технология хранения энергии с использованием сжатого воздуха?",
        image: "https://via.placeholder.com/300x200?text=Сжатый+воздух",
        options: ["Аккумуляторная батарея", "CAES", "Тепловой насос", "Гидроаккумулятор"],
        correct: 1
    },
    {
        question: "Что из перечисленного является недостатком солнечной энергии?",
        image: "https://via.placeholder.com/300x200?text=Солнечная+энергия",
        options: ["Отсутствие выбросов", "Зависимость от времени суток", "Низкая стоимость", "Высокая эффективность"],
        correct: 1
    },
    {
        question: "Какой материал чаще всего используется в солнечных панелях?",
        image: "https://via.placeholder.com/300x200?text=Кремний",
        options: ["Медь", "Кремний", "Алюминий", "Сталь"],
        correct: 1
    },
    {
        question: "Что из перечисленного является примером биотоплива?",
        image: "https://via.placeholder.com/300x200?text=Биотопливо",
        options: ["Бензин", "Этанол", "Уголь", "Природный газ"],
        correct: 1
    },
    {
        question: "Какой тип электростанции использует тепло от солнца для нагрева жидкости?",
        image: "https://via.placeholder.com/300x200?text=Солнечная+термоэнергия",
        options: ["Фотогальваническая", "Гидроэлектростанция", "Солнечная термоэнергия", "Ветряная турбина"],
        correct: 2
    }
];

let currentQuestion = 0;
let score = 0;
let lastAnswered = -1; // Отслеживает последний отвеченный вопрос
const userAnswers = new Array(quizData.length).fill(null); // Хранит ответы пользователя

const quizContainer = document.getElementById('quiz');
const nextBtn = document.getElementById('next-btn');
const resultDiv = document.getElementById('result');
const progressDiv = document.getElementById('progress');

function loadQuestion() {
    const q = quizData[currentQuestion];
    quizContainer.innerHTML = `
        <div class="quiz-container">
            <div class="arrow arrow-left" onclick="prevQuestion()">◀</div>
            <img src="${q.image}" alt="Вопрос" class="quiz-image">
            <div class="quiz-content">
                <div class="question">${currentQuestion + 1}. ${q.question}</div>
                <div class="options">
                    ${q.options.map((option, index) => `
                        <button class="option ${userAnswers[currentQuestion] === index ? (index === q.correct ? 'correct' : 'incorrect') : ''}" 
                            onclick="checkAnswer(${index})" 
                            ${userAnswers[currentQuestion] !== null ? 'disabled' : ''}>
                            ${option}
                        </button>
                    `).join('')}
                </div>
            </div>
            <div class="arrow arrow-right" onclick="nextQuestion()">▶</div>
        </div>
    `;
    progressDiv.textContent = `Вопрос ${currentQuestion + 1} из ${quizData.length}`;
    nextBtn.style.display = currentQuestion === quizData.length - 1 && userAnswers[currentQuestion] !== null ? 'block' : 'none';
}

function checkAnswer(selectedIndex) {
    const q = quizData[currentQuestion];
    userAnswers[currentQuestion] = selectedIndex;
    lastAnswered = Math.max(lastAnswered, currentQuestion);
    const buttons = document.querySelectorAll('.option');
    buttons.forEach((btn, index) => {
        btn.classList.add('disabled');
        if (index === q.correct) {
            btn.classList.add('correct');
        } else if (index === selectedIndex && selectedIndex !== q.correct) {
            btn.classList.add('incorrect');
        }
    });
    if (selectedIndex === q.correct) {
        score++;
    }
    if (currentQuestion < quizData.length - 1) {
        setTimeout(() => {
            currentQuestion++;
            loadQuestion();
        }, 1000); // Переход через 1 секунду
    } else {
        nextBtn.style.display = 'block';
    }
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
    }
}

function nextQuestion() {
    if (currentQuestion < lastAnswered) {
        currentQuestion++;
        loadQuestion();
    } else if (currentQuestion < quizData.length - 1 && userAnswers[currentQuestion] !== null) {
        currentQuestion++;
        loadQuestion();
    }
}

nextBtn.addEventListener('click', () => {
    quizContainer.innerHTML = '';
    nextBtn.style.display = 'none';
    resultDiv.textContent = `Тест завершен! Ваш результат: ${score} из ${quizData.length}`;
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        prevQuestion();
    } else if (e.key === 'ArrowRight') {
        nextQuestion();
    }
});

loadQuestion();