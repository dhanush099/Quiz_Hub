const quizData = [{
        question: "Which of the following elements of electrical engineering cannot be analyzed using Ohm’s law?",
        a: "Capacitors",
        b: "Inductors",
        c: "Transistors",
        d: "Transistors",
        correct: "c",
    },
    {
        question: "What is constant for a charged spherical shell according to basic electrical energy?",
        a: "Electrical potential outside the spherical shell",
        b: "Electrical potential inside the spherical shell",
        c: "Electrical field outside the spherical shell",
        d: "Electrical field inside the spherical shell",
        correct: "b",
    },
    {
        question: "Where does electro-static shielding occur in a charged spherical shell?",
        a: "When electrical potential outside spherical shell is zero”",
        b: "When electrical potential inside the spherical shell is zero",
        c: "When electrical field outside the spherical shell",
        d: "Electrical field inside the spherical shell",
        correct: "d",
    },
    {
        question: "Which of the following is a correct representation of peak value in an AC Circuit?",
        a: "RMS value/Peak factor",
        b: "RMS value*Form factor",
        c: "RMS value/Form factor",
        d: "RMS value*Peak factor",
        correct: "d",
    },
    {
        question: "Which of the following according to fundaments of electrical energy is correct about alternating current?",
        a: "Frequency is zero",
        b: "Magnitude changes with time",
        c: "Can be transported to larger distances with less loss in power ",
        d: "Flows in both directions",
        correct: "a",
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

    const currentQuizData = quizData[currentQuiz]

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