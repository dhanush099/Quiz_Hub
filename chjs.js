const quizData = [{
        question: " Presence of which among the following minerals in Banana makes them slightly radioactive?",
        a: "Sodium",
        b: "Calcium",
        c: "Magnesium",
        d: "Pottasium",
        correct: "d",
    },
    {
        question: "Which of the following is the softest metal?",
        a: "Cesium",
        b: "Lead",
        c: "Gold",
        d: "Silver",
        correct: "a",
    },
    {
        question: "Commercially, sodium bicarbonate is known as_____",
        a: "Washing soda",
        b: "Baking soda",
        c: "Bleaching powder",
        d: "Soda ash",
        correct: "b",
    },
    {
        question: "What is S.I. unit of Surface Tension?",
        a: "Dyne/meter",
        b: "Newton-meter",
        c: "Newton/meter",
        d: "Dyne-meter",
        correct: "b",
    },
    {
        question: "Which one is not metal__",
        a: "sulpher",
        b: "Suger",
        c: "Nitrogen",
        d: "all",
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
