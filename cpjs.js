const quizData = [{
        question: "The first expression in a for loop is",
        a: "Step value of loop",
        b: "Value of the counter variable",
        c: "Any of above",
        d: "None of above",
        correct: "b",
    },
    {
        question: "Break statement is used for ?",
        a: "Quit a program",
        b: "Both of above",
        c: "None of above",
        d: "Quit the current iteration",
        correct: "d",
    },
    {
        question: "Continue statement used for",
        a: "To continue to the next line of code",
        b: "To handle run time error",
        c: "To stop the current iteration and begin the next iteration from the beginning",
        d: "None of above",
        correct: "c",
    },
    {
        question: "Which is valid C expression ?",
        a: "int my_num = 100,000;",
        b: "int my_num = 100000;",
        c: "int my num = 1000;",
        d: "int $my_num = 10000;",
        correct: "b",
    },
    {
        question: "Which of the following declaration is not supported by C language ?",
        a: "String str;",
        b: "char *str;",
        c: "loat str = 3e2;",
        d: "Both String str; & float str = 3e2;",
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