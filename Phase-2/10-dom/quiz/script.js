const questions = [
    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        options: ["1. var", "2. int", "3. string", "4. float"],
        answer: 1
    },
    {
        question: "Which method is used to print something in console?",
        options: ["1. print()", "2. console.log()", "3. echo()", "4. write()"],
        answer: 2
    },
    {
        question: "Which symbol is used for comments in JavaScript?",
        options: ["1. //", "2. <!-- -->", "3. #", "4. **"],
        answer: 1
    },
    {
        question: "Which data type is NOT primitive in JavaScript?",
        options: ["1. String", "2. Number", "3. Object", "4. Boolean"],
        answer: 3
    },
    {
        question: "What will typeof null return?",
        options: ["1. null", "2. object", "3. undefined", "4. number"],
        answer: 2
    },
    {
        question: "Which operator is used for strict equality?",
        options: ["1. ==", "2. =", "3. ===", "4. !="],
        answer: 3
    },
    {
        question: "Which function converts JSON to object?",
        options: ["1. JSON.stringify()", "2. JSON.parse()", "3. JSON.convert()", "4. JSON.toObject()"],
        answer: 2
    },
    {
        question: "Which keyword is used to define a constant?",
        options: ["1. var", "2. let", "3. constant", "4. const"],
        answer: 4
    },
    {
        question: "Which method adds an element to end of array?",
        options: ["1. push()", "2. pop()", "3. shift()", "4. unshift()"],
        answer: 1
    },
    {
        question: "Which method removes last element from array?",
        options: ["1. shift()", "2. splice()", "3. pop()", "4. slice()"],
        answer: 3
    },
    {
        question: "What is the default value of uninitialized variable?",
        options: ["1. null", "2. undefined", "3. 0", "4. NaN"],
        answer: 2
    },
    {
        question: "Which loop is guaranteed to run at least once?",
        options: ["1. for loop", "2. while loop", "3. do...while loop", "4. foreach loop"],
        answer: 3
    },
    {
        question: "Which keyword is used to create a class?",
        options: ["1. function", "2. object", "3. class", "4. define"],
        answer: 3
    },
    {
        question: "Which method is used to join array elements into string?",
        options: ["1. concat()", "2. join()", "3. merge()", "4. combine()"],
        answer: 2
    },
    {
        question: "Which event occurs when user clicks on an element?",
        options: ["1. onchange", "2. onmouseover", "3. onclick", "4. onload"],
        answer: 3
    }
]

let currentQuestionIndex = 0
let score = 0
let thisChoice = 0

const QUESTIONCONTAINER = document.getElementById('question-container')
const RESULTCONTAINER = document.getElementById("result-container")

const QUESTIONTEXT = document.getElementById("question-text")
const CHOICELIST = document.getElementById("choice-list")

const NEXTBTN = document.getElementById("next-btn")
const RESTARTBTN = document.getElementById("restart-btn")
const STARTBTN = document.getElementById("start-btn")

STARTBTN.addEventListener('click', startQuiz)
RESTARTBTN.addEventListener('click', restartQuiz)
NEXTBTN.addEventListener('click', nextQuestion)

function restartQuiz() {
    NEXTBTN.textContent = 'Next Question'
    RESULTCONTAINER.classList.add('hidden')
    score = 0
    currentQuestionIndex = 0
    startQuiz()
}

function startQuiz() {
    STARTBTN.classList.add("hidden")
    QUESTIONCONTAINER.classList.remove('hidden')
    showQuestion()
}

function showQuestion() {
    CHOICELIST.innerHTML = ''
    QUESTIONTEXT.textContent = `${currentQuestionIndex + 1}. ${questions[currentQuestionIndex].question}`
    questions[currentQuestionIndex].options.forEach(options => {
        const li = document.createElement('li')
        li.innerText = options
        CHOICELIST.append(li)
        li.addEventListener('click', (event) => selectAnswer(event))
    });
}

function nextQuestion() {
    if (thisChoice == parseInt(questions[currentQuestionIndex].answer)) score++
    QUESTIONTEXT.textContent = ''
    CHOICELIST.textContent = ''
    NEXTBTN.classList.add('hidden')
    currentQuestionIndex++
    if (currentQuestionIndex == questions.length - 1) NEXTBTN.textContent = 'Submit'
    if (currentQuestionIndex == questions.length) return showResult()
    showQuestion()
}

function selectAnswer(event) {
    clearSelection()
    event.target.classList.add('selected')
    NEXTBTN.classList.remove('hidden')
    thisChoice = parseInt(event.target.textContent)
}

function clearSelection() {
    const list = document.querySelectorAll('.selected')
    list.forEach(item => item.classList.remove('selected'))
}

function showResult() {
    RESULTCONTAINER.classList.remove('hidden')
    const scoreDisplay = document.getElementById('score')
    scoreDisplay.textContent = `${score} out of ${questions.length}`
}