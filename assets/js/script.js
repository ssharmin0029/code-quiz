// --------------------------------------------------------------------------------------
// Variables to reference elements in the document + Variables definitions to hold values
// --------------------------------------------------------------------------------------
var quizStartEl = document.getElementById('quiz-start-section');
var quizQuestionsEl = document.getElementById("quiz-section");
var submitScoreEl = document.getElementById('submit-score-section');
var timerCountEl = document.getElementById('timer-count');
var questionTitleEl = document.getElementById('question-title');
var answerChoicesEl = document.getElementById('answer-choices');
// If there is a match gets the first element with a class of "feedback"
var feedbackEl = document.getElementsByClassName('feedback')[0];
var userScoreEl = document.getElementById('user-score');
// userInitialsEl in addScore()
var submitScoreButton = document.getElementById('submit-score-button');
var startButton = document.getElementById('start-button');

var secondsLeft = 90;
var currentQuestionIndex = -1;

// --------------------------------------------------------------------------------------
// The init function is called when the page loads 
// --------------------------------------------------------------------------------------
function init() {
    // Quiz-Question and Quiz-End-Score Sections won't be displayed
    quizStartEl.style.display = "block";
    quizQuestionsEl.style.display = "none";
    submitScoreEl.style.display = "none";
}

// --------------------------------------------------------------------------------------
// The startQuiz function is called when the start button is clicked 
// --------------------------------------------------------------------------------------
function startQuiz() {
    // Quiz-Start Section won't be displayed 
    quizStartEl.style.display = "none";
    quizQuestionsEl.style.display = "block";
    
    // Calls startTimer and getQuestion functions 
    startTimer();
    getQuestion();
}

// --------------------------------------------------------------------------------------
// The startTimer function starts and stops the timer, and triggers displayScore function
// --------------------------------------------------------------------------------------
function startTimer() {
    // Sets timer 
    // Sets interval in variable; setInterval(function, interval(ms))
    var timeInterval = setInterval(function() {
        secondsLeft--;
        // Sets the textContent of timerCountEl to show the remaining seconds 
        timerCountEl.textContent = "Time: " + secondsLeft + " s";

        // Once secondsLeft becomes 0 or currentQuestionIndex reaches the length of the arrayOfQuestions --> 
        if (secondsLeft == 0 || currentQuestionIndex === arrayOfQuestions.length) {
            // Stops execution of action at set interval
            clearInterval(timeInterval);
            // Calls displayScore() after less than a second
            setTimeout(displayScore, 500);
        }
    }, 1000);
}

// --------------------------------------------------------------------------------------
// The getQuestion function is called when the startQuiz function is called with a click
// --------------------------------------------------------------------------------------
function getQuestion() {
    currentQuestionIndex++;

    // Sets the textContent of questionTitleE to the questionTitle
    questionTitleEl.textContent = arrayOfQuestions[currentQuestionIndex].questionTitle;
    // Sets the textContent of answerChoicesEl to an empty string 
    answerChoicesEl.textContent = "";

    // Stores the answerChoices to a new array-variable called choices 
    var choices = arrayOfQuestions[currentQuestionIndex].answerChoices

    // Loops through the array choices 
    for (var i = 0; i < choices.length; i++) {
        // Creates button element 
        var choiceNode = document.createElement("button");
        // Sets value of choices of currentIndex to the textContent 
        choiceNode.textContent = choices[i];
        // Appends button to the answerChoicesEl
        answerChoicesEl.appendChild(choiceNode);
    }
}

// --------------------------------------------------------------------------------------
// The hideFeedback function to not show feedbackEl
// --------------------------------------------------------------------------------------
function hideFeedback() {
    feedbackEl.style.display = "none";
}

// --------------------------------------------------------------------------------------
// The displayFeedback function to show feedbackEl
// --------------------------------------------------------------------------------------
function displayFeedback() {
    feedbackEl.style.display = "block";
}

// --------------------------------------------------------------------------------------
// The checkAnswer function validates the correct answer 
// Action to be perfomed on click stored in named function 
// --------------------------------------------------------------------------------------
function checkAnswer(event) {
    //Prevent default action 
    event.preventDefault();

    // If the correct answer stored in a array question matches to the textContent of the targetd event --> 
    if (arrayOfQuestions[currentQuestionIndex].correctAnswer === event.target.textContent) {
        // Set the textContent of feedbackEl to 'Correct Answer'
        feedbackEl.textContent = "✅ Correct";
        // Calls displayScore() after 1 second
        setTimeout(hideFeedback, 1000);
        displayFeedback();
    }
    else {
        // Set the textContent of feedbackEl to 'Wrong Answer'
        feedbackEl.textContent = "❌ Wrong";
        setTimeout(hideFeedback, 1000);
        // If the answer is wrong, take away 10 seconds from the remaining seconds 
        secondsLeft = secondsLeft - 10;
        displayFeedback();
    }
    // Calls getQuestion function 
    getQuestion();
}

// --------------------------------------------------------------------------------------
// The displayScore function shows the user's final quiz score 
// --------------------------------------------------------------------------------------
function displayScore() {
    // Quiz-Start and Quiz-Question Sections won't be displayed
    quizStartEl.style.display = "none";
    quizQuestionsEl.style.display = "none";
    submitScoreEl.style.display = "block";
    
    // Sets the textContent of userScoreEl to show the user's score 
    userScoreEl.textContent = "Your final score is: " + secondsLeft;
}

// --------------------------------------------------------------------------------------
// The addScore function adds scores to the local storage
// --------------------------------------------------------------------------------------
function addScore() {
    // Accessing the value of input element by id
    var userInitialsEl = document.getElementById('user-initials').value.toUpperCase();

    // Creates a new object with nameInitials and score keys 
    var quizScore = {
        nameInitials: userInitialsEl,
        score: secondsLeft
    };

    // Gets stored quiz score(s) from the local storage, if there is any
    // If not, makes a new-empty array
    var highScores = JSON.parse(localStorage.getItem("highScores") || "[]");
    // Pushes quizScore object to highScores array
    highScores.push(quizScore);
    // Stringifies the pushed object in the array and sets the keys in the local storage 
    localStorage.setItem("highScores", JSON.stringify(highScores));
}

// Clicking on submitScoreButton takes to a new html page, containing the highScores
submitScoreButton.addEventListener("click", function(event) {
    // Stops event from bubbling up and adding new scores
    event.stopPropagation();
    addScore();

    // Referring to the highScores.html page using window object location 
    location.href = './highScores.html'
});

// --------------------------------------------------------------------------------------
// Function Call + Event Listeners 
// --------------------------------------------------------------------------------------
// Calls init() so it fires when the page opens 
init();

// Attaches event listener to startButton to call startQuiz function on click
startButton.addEventListener("click", startQuiz);

// Add listenr to check for correct answer on each question call
answerChoicesEl.addEventListener("click", checkAnswer);