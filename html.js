const quizData = [{
        question: "Which element is used to get highlighted text in HTML5 ?",
        a: "<u>",
        b: "<mark>",
        c: "<highlight>",
        d: "<b>",
        correct: "b",
    },
    {
        question: "How do we write comments in HTML ?",
        a: "</…….>",
        b: "</……/>",
        c: "<!……>",
        d: "<…….!>",
        correct: "c",
    },
    {
        question: "In HTML, which attribute is used to create a link that opens in a new window tab ?",
        a: "src=”_blank”",
        b: "alt=”_blank”",
        c: "target=”_self”",
        d: "target=”_blank”",
        correct: "d",
    },
    {
        question: "Which HTML element is used for short quote ?",
        a: "<em>",
        b: "<abbr>",
        c: "<q>",
        d: "<blockquote>",
        correct: "c",
    },
    {
        question: "What is the work of <address> element in HTML5 ?",
        a: "contains IP address",
        b: "contains home address",
        c: " contains url",
        d: "contains contact details for author",
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
