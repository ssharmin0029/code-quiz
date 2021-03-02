// --------------------------------------------------------------------
// Variables to reference elements in the document 
// --------------------------------------------------------------------
var scoresListEl = document.getElementById('scores-list');
var returnButton = document.getElementById('return-button');
var clearScoresButton = document.getElementById('clear-scores-button');

// Gets stored quiz score(s) from the local storage, if there is any
// If not, makes a new-empty array
highScores = JSON.parse(localStorage.getItem("highScores") || "[]");

// Sorts the array of highScores in descending order
highScores.sort(function(a, b) {
    return b.score - a.score;
});

// Loops through the array highScores 
for (var i = 0; i < highScores.length; i++) {
    // Creates list element 
    var liEls = document.createElement("li");
    // Sets values of intials and score to the textContent of list element 
    liEls.textContent = highScores[i].nameInitials + " ------ " + highScores[i].score;
    // Appends list element to the scoresListEl
    scoresListEl.appendChild(liEls);
}

returnButton.addEventListener("click", function() {
    // Creates a back button on a page
    // back() method loads the previous URL in the history list
    history.back();
});

clearScoresButton.addEventListener("click", function() {
    // Clears all keys stored in the localStorage 
    localStorage.clear();
    history.back();
});
