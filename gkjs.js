const quizData = [{
        question: "Which has become the first airport in India to be fully hydro and solar powered",
        a: "Surat International Airport",
        b: "Kannur International Airport, Kerala",
        c: "Indira Gandhi International Airport, Delhi",
        d: "Chaudhary Charan Singh International Airport, Lucknow",
        correct: "c",
    },
    {
        question: "What is ‘Hermit’, which was seen in the news recently?",
        a: "Missile",
        b: "Satellite",
        c: "Spyware",
        d: "Vaccine",
        correct: "c",
    },
    {
        question: "Which country launched its manned mission to its Tiangong Space station?",
        a: "Japan",
        b: "Israel",
        c: "China",
        d: "South Korea",
        correct: "c",
    },
    {
        question: "The ‘West Nile fever’ was first detected in 1937 in which country?",
        a: "India",
        b: "Uganda",
        c: "Syria",
        d: "Israel",
        correct: "b",
    },
    {
        question: "Which port is known as Queen of Arabian Sea?",
        a: "Vizag port",
        b: "Paradip port",
        c: "Kochi Port",
        d: "Mumbai Port",
        correct: "c",
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