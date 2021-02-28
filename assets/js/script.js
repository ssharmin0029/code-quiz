// Variable definitions to reference DOM elements 
var timerEl = document.querySelector("#timer-count");
var startBtnEl = document.querySelector("#btn-start");
var quizQuestionEl = document.querySelector("#quiz-question");
var answerChoicesEl = document.querySelector("#answer-choices");
var quizStartScreen = document.querySelector("#quiz-start-section");
var quizScreen = document.querySelector("#quiz-section");

// 
var currentQuestionIndex = 0;
var timerCount = questions.length * 15;

// function startTimer() {
//     document.getElemntById("#quiz-start-section").classList.add('d-none');
//     document.getElemntById("#quiz-section").classList.remove('d-none');
// }

function setTimer() {
    // Sets interval in variable
    // setInterval(function, interval(ms))
    var timer = setInterval(function() {
        timerCount--;
        timerEl.textContent = timerCount;
    }, 1000);

    //if statements 
}

setTimer();

function startQuiz() {
    // Hide quiz start screen
    quizStartScreen.setAttribute("class", "hide");

    // Un-hide question section
    quizScreen.setAttribute("class", "show");

    setTimer;
    getQuestion();
}
    
function getQuestion() {
    // Gets current question from the array of objects and stores in a variable
    var currentQuestion = mcQuestions[currentQuestionIndex];

    // Update the quizQuestionEl with current question 
    quizQuestionEl.textContent = mcQuestions[currentQuestionIndex].questionTitle

    // Empty the asnwerChoicesEl if there are any old choices 
    answerChoicesEl.textContent = "";

    // Store array of choices in a variable 
    var ansChoices = mcQuestions[currentQuestionIndex].choices

    // 
    for (var i = i; i < ansChoices.length; i++) {
        var next
    }
}

// Attach event listener to start button to call startGame function on click
startBtnEl.addEventListener("click", startQuiz);