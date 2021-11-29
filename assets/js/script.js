// Setting our DOM elements in order used on HTML
var viewBigScore = document.getElementById("see-scores");
var timerClock = document.getElementById("timer");
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
var timeLeft;
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

console.log(questions);
