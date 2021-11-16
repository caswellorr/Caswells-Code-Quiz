
//  ================== TIMER =========================

let timeLeft = 60;
let startButton = document.querySelector("#start-button");
let intervalId;
let displayTimer = document.querySelector("#countdown");
let resetButton = document.querySelector("#reset-button");


startButton.addEventListener("click", function(){
  clearInterval(intervalId);
  timeLeft = 60;

   
  startTimer();


});

function startTimer(){

  intervalId = setInterval(function(){
    timeLeft--;
    displayTimer.textContent = timeLeft;
    if(timeLeft === 0){
      console.log("you lost!")
      clearInterval(intervalId);

    }
    
    }, 1000)

};



// ================== QUESTIONS ======================

let currentQuestion = 0;
let questions = [
  {
    question: "All my exes live in ________ ...",
    answers: ["Texas", "Kansas", "Sturgis", "Frisco"],
    correctAnswer: 0,
  },
  {
    question: "the Rocky Mountain ________ is better than the way we had...",
    answers: ["clay", "hey", "way", "stay"],
    correctAnswer: 2,
  },
  {
    question: "Got me on my knees, _________ ...",
    answers: ["Rigby", "Perla", "Layla", "Kayla"],
    correctAnswer: 2,
  },
  {
    question: "__________ all my troubles seemed so far away...",
    answers: ["In the car today", "The other day", "Wednesday", "Yesterday"],
    correctAnswer: 3,
  },
  {
    question: "__________ on the Mountain ...",
    answers: ["Aspens", "Fire", "Snow", "Goats"],
    correctAnswer: 1,
  },
];


// questions = questions[currentQuestion];

// for (let i=0; i < questions.length ; i++) {
//   const element = questions[i];
//   console.log(currentQuestion);
// }

// for (let j = 0; j < questions[currentQuestion].answers.length; i++);

// document.querySelector("#question").textContent = questions


// document.querySelector("#question").textContent = questions[currentQuestion].question;
