const quizData = [{
        question: "Which word means “feeling great appreciation”?",
        a: "Greatful",
        b: "Grateful",
        c: "Greatfull",
        d: "Gratefull",
        correct: "b",
    },
    {
        question: "What is the past tense of the word “lie” as in “lie down”?",
        a: "Lay",
        b: "Laid",
        c: "Layed",
        d: "Laied",
        correct: "a",
    },
    {
        question: "Who is the person in charge at a high school?",
        a: "Principle",
        b: "Princeple",
        c: "Principal",
        d: "Princepal",
        correct: "c",
    },
    {
        question: "What is a word or a group of words that is self-contradicting called?",
        a: "Antithesis",
        b: "Oxymoron",
        c: "Synecdoche",
        d: "Litotes",
        correct: "b",
    },
    {
        question: "I ____ football every Saturday afternoon.",
        a: "am play",
        b: "playing",
        c: "am playing",
        d: "play",
        correct: "d",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('opta')
const b_text = document.getElementById('optb')
const c_text = document.getElementById('optc')
const d_text = document.getElementById('optd')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if (currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>

           <button onclick="location.reload()">Reload</button>
           <a href="Whtml.html" class="mm" style="text-decoration: none;"><button>Main Menu</button></a>
           <a href="Homepage.html" class="mm" style="text-decoration: none;"><button>Home</button></a>
           `
        }
    }
})