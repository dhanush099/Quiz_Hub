const quizData = [{
        question: "How is an array initialized in C language?",
        a: "int a[3]={1,2,3};",
        b: "int a ={1,2,3,};",
        c: "int a[] = new int[3];",
        d: "inta(3) = [1,2,3];",
        correct: "a",
    },
    {
        question: "Which of the following is a linear data structure?",
        a: "Array",
        b: "AVL Trees",
        c: "Binary Trees",
        d: "Grapes",
        correct: "a",
    },
    {
        question: "How are String represented in memory in C?",
        a: "The object of some class.",
        b: "Same as other primitive data types.",
        c: "An array of characters.",
        d: "Linkedlist of characters",
        correct: "c",
    },
    {
        question: "Which one of the following is an application of queue data structure ?",
        a: "When a resourse is shared among multiple consumers.",
        b: "When data is transferred asynchronosly.",
        c: "Load Balancing",
        d: "All the above.",
        correct: "d",
    },
    {
        question: "When a pop() operation is called on an empty queue, what is the condition called?",
        a: "Overflow",
        b: "Underflow",
        c: "Syntax Error",
        d: "Garbage Value",
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
