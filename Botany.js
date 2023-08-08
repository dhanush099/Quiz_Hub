const quizData = [{
        question: "Which of the organisms breathes from skin?",
        a: "Snake",
        b: "Earthworm",
        c: "Monkey",
        d: "Human",
        correct: "b",
    },
    {
        question: "The Outer whorl is called the __________  and consists of sepals.",
        a: "Calyx",
        b: "Corolla",
        c: "Androecium",
        d: "Gynaecium",
        correct: "a",
    },
    {
        question: "The flexibility in plants is due to a tissue called",
        a: "Parenchyma",
        b: "Collenchyma",
        c: "Sclerenchyma",
        d: "None of above",
        correct: "b",
    },
    {
        question: "Which of the following is an example of green algae ?",
        a: "Laminaria",
        b: "Sargassum",
        c: "Chlamydomonas",
        d: "Fucus",
        correct: "3",
    },
    {
        question: "Sweet Potattop is an underground structure which stores food. Where is the food prepared  in this plant ?",
        a: "Leaves",
        b: "Fruit",
        c: "Stem",
        d: "Root",
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