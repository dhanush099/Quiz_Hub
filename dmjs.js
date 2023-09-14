const quizData = [{
        question: "The least non-negative residue modulo 17 of 128^129 is",
        a: "8",
        b: "1",
        c: "7",
        d: "9",
        correct: "d",
    },
    {
        question: "A solution for the simultaneous congruence x☰4(mod 5); x☰3(mod 4); x☰5(mod 7) is",
        a: "x ☰ 20(mod 140)",
        b: "x ☰ 19(mod 140)",
        c: "x ☰ 17(mod 140)",
        d: "x ☰ 18(mod 140)",
        correct: "b",
    },
    {
        question: "Which of the following is not an inverse for 4(mod 7)",
        a: "-3",
        b: "23",
        c: "-5",
        d: "2",
        correct: "a",
    },
    {
        question: "The values of q and r as in the divison algorithm if a=-5 and b=3 are",
        a: "q=-2; r=-1",
        b: "q=-2; r=2",
        c: "q=2; r=1",
        d: "q=-2; r=1",
        correct: "d",
    },
    {
        question: "The least non-negative residue modulo 11 of 29^251 is",
        a: "6",
        b: "2",
        c: "8",
        d: "7",
        correct: "b",
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
