// Insert code to start the timer or reset the game when the Start Game button is clicked
// <button onclick="timerStart()">Start Game</button>

// Initialize variables using arrays

var questions = ["Who is buried in Grant's Tomb?", "Why did the chicken cross the road?", "How much is 7 x 9?"];
var answers0 = ["Ulysses S. Grant", "The Unknown Soldier", "Elvis Presley"];
var answers1 = ["To get to Grant's Tomb", "To have something to complain about", "To get to the other side"];
var answers2 = ["56", "63", "72"];
var correctAnswers = ["Ulysses S. Grant", "All the wood", "63"];

// Initialize score and timer variables
var score = 0;
var timeleft = 30;

// Display questions, score, timer
// This line of JavaScript "grabs" the main div on the page ("#questionList");
var questionDiv = document.getElementById("questionList");

// We then use a for loop to iterate through all the questions in questionList.
// With each iteration, we perform a series of code operations each time.
for (var i = 0; i < questions.length; i++) {

// For each question in the array, we create a new placeholder div.
// This placeholder will get overwritten with each iteration of the loop.
var newQuestionDiv = document.createElement("div");

// We then assign the the value of this placeholder div to be the text in the array.
newQuestionDiv.innerHTML = questions[i] + "<br>" + "<br>";

	// In the next block, create radio buttons using for loop (nested within each question)
	// for (var b = 0; b < length.answers[i]; b++) {
	//	var newRadioButtonDiv = document.createElement("INPUT");
	//	x.setAttribute("type", "radio");
	//	document.body.appendChild(x);
	// }

// We then add the placeholder div to the our main div on the page ("#questionList")
questionDiv.appendChild(newQuestionDiv);
}

// Get answer from player
// onclick?

// Compare player answer to correct answer
// if (playerAnswer = correctAnswer) {
//	score++;
//}

// Update score
// document.getElementById ("Correct Answers: ")
// document.getelementById (score);

// When time is up, end game
// if(timeleft = 0)
// end game;

// Run timer

timerStart();

function timerStart() {
  var Timer = setInterval(function(){
    timeleft--;
      document.getElementById("countdowntimer").textContent = timeleft;
        if(timeleft <= 0)
          clearInterval(Timer);
  },1000);
 }