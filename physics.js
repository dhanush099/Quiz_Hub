const quizData = [{
        question: "Which among the following temperature scale is based upon absolute zero?",
        a: "Celsius",
        b: "Fahrenheit",
        c: "Kelvin ",
        d: "Rankine",
        correct: "c",
    },
    {
        question: "Direct Current produces a magnetic field similar to a permanent magnet. This magnetic field:",
        a: "is unidirectional and has a steady magnitude",
        b: "is unidirectional but its magnitude varies in regular pattern",
        c: "has steady magnitude but changes direction in regular pattern",
        d: "changes direction and magnitude in regular pattern",
        correct: "a",
    },
    {
        question: "Who among the following is credited for the Corpuscular theory of light?",
        a: "Isaac Newton",
        b: "Christiaan Hyugens",
        c: "Albert Einstein",
        d: "James Clerk Maxwell",
        correct: "a",
    },
    {
        question: "Nuclear Reactors are based on which of the following phenomenon?",
        a: "Magnetic confinement of Plasma",
        b: "Nuclear Fusion",
        c: " Controlled Nuclear Fission",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "What is the change in the angular momentum of a system as per the Law of Conservation of Angular momentum, if the total external torque acting is zero?",
        a: "Remains constant",
        b: "Becomes zero",
        c: "Increases exponentially",
        d: "None of the above",
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
   <a href="index.html" class="mm" style="text-decoration: none;"><button>Home</button></a>
   `
        }
    }
})
