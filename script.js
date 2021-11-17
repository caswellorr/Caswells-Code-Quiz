// =================== VARIABLES =============================

let timeLeft = 60;
let startButton = document.querySelector("#start-button");
let intervalId;
let displayTimer = document.querySelector("#countdown");
let resetButton = document.querySelector("#reset-button"); 
let btn1 = document.querySelector('#btn1');
// let btn2 = document.querySelector('#btn2');
// let btn3 = document.querySelector('#btn3');
// let btn4 = document.querySelector('#btn4');

// ==================== START GAME ============================

startButton.addEventListener("click", function(){
  clearInterval(intervalId);
  timeLeft = 60;

  // when start button is pressed, the timer begins
  startTimer();

  // When start button is pressed, the question appears on the screen
  startGame();

  
});

//  ===================== TIMER =========================

function startTimer(){

  intervalId = setInterval(function(){
    timeLeft--;
    displayTimer.textContent = timeLeft;
    if(timeLeft === 0){
      console.log("Time's Up!")
      clearInterval(intervalId);

    }
    
    }, 1000)

};

// ================== QUESTIONS AND ANSWERS ======================


let currentLyric = 0;
let lyricArray = [
  {
    givenLyric: "All my exes live in ________ ...",
    answers: ["Texas", "Kansas", "Sturgis", "Frisco"],
    correctAnswer: 0,
  },
  {
    givenLyric: "the Rocky Mountain ________ is better than the way we had...",
    answers: ["clay", "hey", "way", "stay"],
    correctAnswer: 2,
  },
  {
    givenLyric: "Got me on my knees, _________ ...",
    answers: ["Rigby", "Perla", "Layla", "Kayla"],
    correctAnswer: 2,
  },
  {
    givenLyric: "__________ all my troubles seemed so far away...",
    answers: ["In the car today", "The other day", "Wednesday", "Yesterday"],
    correctAnswer: 3,
  },
  {
    givenLyric: "__________ on the Mountain ...",
    answers: ["Aspens", "Fire", "Snow", "Goats"],
    correctAnswer: 1,
  },
];

btn1.innerText = lyricArray[currentLyric].answers[0];


//============= START GAME FUNCTION =====================

function startGame () {

  // Connects the question from array to the HTML
  document.querySelector(".lyrics").textContent = lyricArray[currentLyric].givenLyric
   console.log(lyricArray[currentLyric].givenLyric);
  
}

btn1.innerText = lyricArray[currentLyric].answers[0];

console.log(btn1);


// document.querySelector("#btn1").textContent = lyricArray[currentLyric].answers[1];

// document.querySelector("#btn2").textContent = lyricArray[currentLyric].answers[1]
// document.querySelector("#btn3").textContent = lyricArray[currentLyric].answers[2]
// document.querySelector("#btn4").textContent = lyricArray[currentLyric].answers[3]



         







// questions = questions[currentQuestion];

// for (let i=0; i < questions.length ; i++) {
//   const element = questions[i];
//   console.log(currentQuestion);
// }

// for (let j = 0; j < questions[currentQuestion].answers.length; i++);


// data- listen to click and get data set from the button itself

// document.querySelector("#question").textContent = questions[currentQuestion].question;

// four 

//eventlistener for each button each questions that checks if its answered correctly then moves to next question and if wrong it takes time from the timer

// need to make a function to start the game and put into the start button that starts timer anfd the game


//setTimeout

//eventDelegation

// <form> for username and local.Storage to store it?


//setAttribute(visibolitu)

//userScore = 0

//scoreboard = 0

//highscore=0