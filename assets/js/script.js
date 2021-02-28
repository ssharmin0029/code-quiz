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
var questionTitle = document.querySelector("#question-title");
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

