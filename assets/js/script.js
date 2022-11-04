var startButtonEl = document.getElementById("start-button");
var timerEl = document.getElementById("timer");
var welcomePageEl = document.getElementById("welcome-page");
var question1 = document.getElementById("question-1");
var question2 = document.getElementById("question-2");
var question3 = document.getElementById("question-3");
var question4 = document.getElementById("question-4");
var question5 = document.getElementById("question-5");
var scoreInputEl = document.getElementById("score-input");
var submitButtonEl = document.getElementById("submit-button");
var userInitialsEl = document.getElementById("initials");
var scoreEl = 0;
var scoreNumberEl = document.getElementById("score-number");
var highscoreEl = document.getElementById("highscore-sheet");
var highscoreTally = document.getElementById("highscore-tally");


//highscore-sheet
var goBack = document.getElementById("go-back");
var clearHighscores = document.getElementById("clear-highscores");

correctAns = document.querySelectorAll("#correct");
wrongAns = document.querySelectorAll("#not-correct");
buttonsArray = document.querySelectorAll("button");

question1.style.display = "none";
question2.style.display = "none";
question3.style.display = "none";
question4.style.display = "none";
question5.style.display = "none";
scoreInputEl.style.display = "none";
highscoreEl.style.display = "none";

startButtonEl.addEventListener("click", function () {
  welcomePageEl.replaceChildren(question1);
  question1.style.display = "block";
  quizInterval();
});

var secondsLeft = 25;

function quizInterval() {
  timerInterval = setInterval(function () {
    timerEl.textContent = secondsLeft + " seconds left to complete quiz.";
    secondsLeft--;
    

    if (secondsLeft < 0) {
      clearInterval(timerInterval);
      timerEl.textContent = "  ";
      
      
    }
  }, 1000);
}


for (let i = 1; i < 5; i++) {
  buttonsArray[i].addEventListener("click", function () {
    question1.replaceChildren(question2);
    question2.style.display = "block";
  });
}

for (let i = 5; i < 9; i++) {
  buttonsArray[i].addEventListener("click", function () {
    question2.replaceChildren(question3);
    question3.style.display = "block";
  });
}

for (let i = 9; i < 13; i++) {
  buttonsArray[i].addEventListener("click", function () {
    question3.replaceChildren(question4);
    question4.style.display = "block";
  });
}

for (let i = 13; i < 17; i++) {
  buttonsArray[i].addEventListener("click", function () {
    question4.replaceChildren(question5);
    question5.style.display = "block";
  });
}

for (let i = 17; i < 21; i++) {
  buttonsArray[i].addEventListener("click", function () {
    question5.replaceChildren(scoreInputEl);
    scoreInputEl.style.display = "block";
    secondsLeft = 0;
    
  });
}

for (let i = 0; i < correctAns.length; i++) {
  correctAns[i].addEventListener("click", function () {
    var score = scoreEl;
    score = 1000 + score;
    scoreEl = score;
    console.log(scoreEl);

    scoreNumberEl.textContent = "Your score is "+ scoreEl + "!";
 
  });
}


submitButtonEl.addEventListener("click", function () {
  localStorage.setItem(userInitialsEl.value, scoreEl);
  scoreInputEl.replaceChildren(highscoreEl);
    highscoreEl.style.display = "block";

});

for (let i = 0; i < wrongAns.length; i++) {
    wrongAns[i].addEventListener('click', function (){
      secondsLeft = secondsLeft - 3;  
    })}

highscoreTally.createElement("li") = localStorage.getItem(userInitialsEl.value);