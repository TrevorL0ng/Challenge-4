// Setting our DOM elements in order used on HTML
var viewBigScore = document.getElementById("see-scores");
var timerClock = document.querySelector("#timer");
var introScreen = document.getElementById("intro-container");
var startButton = document.getElementById("start");
var questionScreen = document.getElementById("question-container");
var questionCard = document.getElementById("question");
var answerButtons = document.getElementById("answers");
var correctAnswer = document.getElementById("right");
var wrongAnswer = document.getElementById("wrong");
var outroCard = document.getElementById("outro-container");
var userScore = document.getElementById("your-score");
var userInitials = document.getElementById("score-form");
var highScoreScreen = document.getElementById("score-container");
var bigScoresCard = document.getElementById("bigScores-list");
var backButton = document.getElementById("go-back");
var clearButton = document.getElementById("clear-bigScores");
var score = 0;
var endQuiz;

// Questions to be used in the quiz 

var questions = [
    {question:"What operator is used to increment by 1? in Javascript?",
        answer:"3.) ++",
        choices: [{choice: "1.) +1"}, {choice:"2.) 1up"}, {choice:"3.) ++"}, {choice:"4.) ^"}]
    },
    // {question:""
    //     answer: 
    //     choices: []
    // },
    // {question:
    //     answer: 
    //     choices: []
    // },
];

// Setting up the start of the game. Timer is set and made to increment down every second
var timeLeft;
var setClock = function (){
    timeLeft = 42;

var gameClock = setInterval(function(){
    timerClock.textContent = timeLeft;
    timeLeft--

    // if (timeLeft < 0) {
    //     ShowBSL();
    //     timerClock.textContent = 0;
    //     clearInterval(gameClock);
    // }

    // if (endQuiz) {
    //     clearInterval(gameClock);
    // }

}, 1000)
};

// We remove the elements of the intro once 'begin' is clicked and insert the questions

var startGame = function () {
    introScreen.classList.add("d-none");
    introScreen.classList.remove("show");
    questionScreen.classList.add("show");
    questionScreen.classList.remove("d-none");
    setClock();
}

// Button listener declared after the function it is calling
startButton.addEventListener("click", startGame);

// Question list to be cycled through




