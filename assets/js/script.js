// Variables to reference DOM elements + Variables definitions to hold values
var timerCount = document.querySelector("#timer-count");
var userScore = document.querySelector("#user-score");
var viewScoreButton = document.querySelector("#view-scores-button");
var secondsLeft = 90;
// ------------------------------------------------------------------------
var quizStartEl = document.querySelector("#quiz-start-section");
var startButton = document.querySelector("#start-button");
// ------------------------------------------------------------------------
var quizQuestionsEl = document.querySelector("#quiz-section");
var questionTitleEl = document.querySelector("#question-title");
var answerChoicesButton = document.querySelectorAll("button.answer-choices")
var asnwer1Button = document.querySelector("#choice1");
var asnwer2Button = document.querySelector("#choice2");
var asnwer3Button = document.querySelector("#choice3");
var asnwer4Button = document.querySelector("#choice4");
var feedback = document.querySelector("#feedback");
var currentQuestionIndex = 0;
// ------------------------------------------------------------------------
var submitScoreEl = document.querySelector("#submit-score-section");
var userInitials = document.querySelector("#user-initials");
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
        // Index 2
        correctAnswer: "2"
    },
    {
        questionTitle: "What is the default value of the position property?",
        answerChoices: ["1. relative", "2. fixed", "3. absolute", "4. static"],
        // Index 3
        correctAnswer: "3"
    },
    {
        questionTitle: "Commonly used data types DO NOT include:",
        answerChoices: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
        // Index 2
        correctAnswer: "2"
    },
    {
        questionTitle: "The condition in an if/else statement is enclosed within ________.",
        answerChoices: ["1. quotes", "2. curly brackets", "3. parentheses", "4. square brackets"],
        // Index 2
        correctAnswer: "2"
    },
    {
        questionTitle: "The Document Object Model (DOM) allows you to:",
        answerChoices: ["1. Get elements from the DOM", "2. Create, Add and Remove elements in the DOM", "3. Traverse the elements of the DOM", "4. All of the above"],
        // Index 3
        correctAnswer: "3"
    },
    {
        questionTitle: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answerChoices: ["1. JavaScript", "2. terminal/bash", "3. for loops", "4. console.log"],
        // Index 3
        correctAnswer: "3"
    }
];
// ------------------------------------------------------------------------

//
function getQuestion (id) {
    if (id < arrayOfQuestions.length) {
        questionTitleEl.textContent = arrayOfQuestions[id].questionTitle
        asnwer1Button.textContent = arrayOfQuestions[id].answerChoices[0];
        asnwer2Button.textContent = arrayOfQuestions[id].answerChoices[1];
        asnwer3Button.textContent = arrayOfQuestions[id].answerChoices[2];
        asnwer4Button.textContent = arrayOfQuestions[id].answerChoices[3];
    }
}

//
function setTimer () {
    var timerInterval = setInterval (function () {
        secondsLeft--;
        timerCount.textContent = "Time: " + secondsLeft;

        if (secondsLeft === 0 || currentQuestionIndex === arrayOfQuestions.length) {
            clearInterval(timerInterval);
            quizQuestionsEl.style.display = "none";
            submitScoreEl.style.display = "block";
            userScore.textContent = secondsLeft;
        } 

    }, 1000);
}

//
function startQuiz () {
    quizStartEl.style.display = "none";
    quizQuestionsEl.style.display = "block";

    setTimer();
    getQuestion(currentQuestionIndex);
}

// ------------------------------------------------------------------------

//
function answerChecker (event) {
    event.preventDefault();

    feedback.style.display = "block";
    var responseEl = document.createElement("p");
    feedback.appendChild(responseEl);

    setTimeout (function () {
        responseEl.style.display = "none";
    }, 1000);
    
    if (arrayOfQuestions[currentQuestionIndex].correctAnswer === event.target.value) {
        responseEl.textContent = "Correct Choice!";
    }
    else {
        secondsLeft = secondsLeft - 10;
        responseEl.textContent = "Wrong Choice!";
    }

    if (currentQuestionIndex < arrayOfQuestions.length) {
        currentQuestionIndex++;
    }
    getQuestion(currentQuestionIndex);
    
}

//
function addScore (event) {
    event.preventDefault();

    submitScoreEl.style.display = "none";
    highScoresEl.style.dsiplay = "block";

    var initialsInput = userInitials.value.toUpperCase();
    scoreList.push({initials: initialsInput, score: secondsLeft});

    //sort 
    // scoreList = scoreList.sort(function(a, b) {
    //     var scoreA = a.score;
    //     var scoreB = b.score;

    //     if (scoreA <scoreB) {
    //         return -1;
    //     }
    //     else if (scoreA > scoreB) {
    //         return 1;
    //     }
    //     else {
    //         return 0;
    //     }
    // });

    scoreListEl.textContent = "";
    for (var i = 0; i < scoreList.length; i++) {
        let li = document.createElement("li");
        li.textContent = scoreList[i].initials + ": " + scoreList[i].score;
        scoreListEl.append(li);
    }
    // Adds to local storage
    storeScores();
    renderScores();
}

function storeScores () {
    localStorage.setItem("scoreList", JSON.stringify(scoreList));
}

function renderScores () {
    // Gets stored scores from the localStorage
    // parses the JSON string to an object 
    var storedScoreList = JSON.parse(localStorage.getItem("scoreList"));

    // If scores were retrieved from the localStorage, update the scoreList array to it 
    if (storedScoreList !== null) {
        scoreList = storedScoreList;
    }
}

//
function clearHighScores () {
    localStorage.clear()
    scoreListEl.textContent = "";
}


// ------------------------------------------------------------------------

// Start the Quiz with the timer 
startButton.addEventListener("click", startQuiz);

//  
answerChoicesButton.forEach(element => {
    element.addEventListener("click",answerChecker);
});

//
submitScoreButton.addEventListener("click", addScore);

//
clearScoresButton.addEventListener("click", clearHighScores);

//Return Button 

//View-Hide High Scores Button 