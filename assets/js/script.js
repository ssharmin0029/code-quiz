// Variables to reference DOM elements + Variables definitions to hold values
var timerCount = document.querySelector("#timer-count");
var userScore = document.querySelector("#user-score");
var viewScoreButton = document.querySelector("#view-scores-button");
var secondsLeft = 75;
// ------------------------------------------------------------------------
var quizStartEl = document.querySelector("#quiz-start-section");
var startButton = document.querySelector("#start-button");
// ------------------------------------------------------------------------
var quizQuestionsEl = document.querySelector("#quiz-section");
var questionTitleEl = document.querySelector("#question-title");
var answerChoicesButton = document.querySelectorAll(".answer-choices")
var asnwer1Button = document.querySelector("#choice1");
var asnwer2Button = document.querySelector("#choice2");
var asnwer3Button = document.querySelector("#choice3");
var asnwer4Button = document.querySelector("#choice4");
var feedback = document.querySelector("#feedback");
var questionCount = 0;
// ------------------------------------------------------------------------
var submitScoreEl = document.querySelectorAll("#submit-score-section");
var userInitials = document.querySelectorAll("#user-initials");
var submitScoreButton = document.querySelector("#submit-score-button");
// ------------------------------------------------------------------------
var highScoresEl = document.querySelector("#high-scores-section");
var scoreListEl = document.querySelector("#score-list");
var returnButton = document.querySelector("#return-button");
var clearScoresButton = document.querySelector("#clear-scores-button");
var scoreList = [];
// ------------------------------------------------------------------------

// Array of question objects
var arrayOfQuestions = [
    {
        questionTitle: "What does HTML stands for?",
        answerChoices: ["1. Hypertext Machine language", "2. Hypertext and links markup language", "3. Hypertext Markup Language", "4. Hightext machine language"],
        answer: "3"
    },
    {
        questionTitle: "What is the default value of the position property?",
        answerChoices: ["1. relative", "2. fixed", "3. absolute", "4. static"],
        answer: "4"
    },
    {
        questionTitle: "Commonly used data types DO NOT include:",
        answerChoices: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
        answer: "3"
    },
    {
        questionTitle: "The condition in an if/else statement is enclosed within ________.",
        answerChoices: ["1. quotes", "2. curly brackets", "3. parentheses", "4. square brackets"],
        answer: "3"
    },
    {
        questionTitle: "The Document Object Model (DOM) allows you to:",
        answerChoices: ["1. Get elements from the DOM", "2. Create, Add and Remove elements in the DOM", "3. Traverse the elements of the DOM", "4. All of the above"],
        answer: "4"
    },
    {
        questionTitle: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answerChoices: ["1. JavaScript", "2. terminal/bash", "3. for loops", "4. console.log"],
        answer: "4"
    }
];
// ------------------------------------------------------------------------

function getQuestion (id) {
    if (id < arrayOfQuestions.length) {
        questionTitleEl.textContent = arrayOfQuestions[id].questionTitle
        asnwer1Button.textContent = arrayOfQuestions[id].answerChoices[0];
        asnwer2Button.textContent = arrayOfQuestions[id].answerChoices[1];
        asnwer3Button.textContent = arrayOfQuestions[id].answerChoices[2];
        asnwer4Button.textContent = arrayOfQuestions[id].answerChoices[3];
    }
}

function setTimer () {
    var timerInterval = setInterval (function () {
        secondsLeft--;
        timerCount.textContent = "Time: " + secondsLeft;

        if (secondsLeft === 0 || questionCount === arrayOfQuestions.length) {
            quizQuestionsEl.style.visibility = "hidden";
            submitScoreEl.style.display = "block";
            userScore.textContent = secondsLeft;
        } 

    }, 1000);
}

function startQuiz () {
    quizStartEl.style.visibility = "hidden";
    quizQuestionsEl.style.display = "block";

    setTimer();
    getQuestion(questionCount);
}

// Start the Quiz with the timer 
startButton.addEventListener("click", startQuiz);
