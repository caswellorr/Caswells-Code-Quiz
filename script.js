
//  ================== TIMER =========================

let timeLeft = 20;
let startButton = document.querySelector(".start-button")
let intervalId;
let displayTimer = document.querySelector(".timer-count");
startButton.addEventListener("click", function(){
  clearInterval(intervalId);
  timeLeft = 10;

   
  startTimer();

})

function startTimer(){

  intervalId = setInterval(function(){
    timeLeft--;
    displayTimer.textContent = timeLeft;
    if(timeLeft === 0){
      console.log("you lost!")
      clearInterval(intervalId);

    }
    
    }, 1000)

}

// ================== QUESTIONS ======================


let questions = [
  {
    question: "What is the capitol of Texas?",
    answers: ["Houston", "Dallas", "San Antonio", "Austin"],
    correctAnswer: 3,
  },
  {
    question: "What is the capitol of Colorado?",
    answers: ["Denver", "Carbondale", "Estes Park", "Boulder"],
    correctAnswer: 0,
  },
  {
    question: "What is the capitol of California?",
    answers: ["Los Angeles", "San Francisco", "Sacramento", "San Diego"],
    correctAnswer: 3,
  },
  {
    question: "What is the capitol of South Dakota?",
    answers: ["Sturgis", "Pierre", "Rapid City", "Deadwood"],
    correctAnswer: 2,
  },
];

// console.log(questions);

let currentQuestion = 0

for (let i=0; i < questions.length ; i++) {
  const element = questions[i]
}

for (let j = 0; j < questions[startingQuestinos].answers.length; i++);

document.querySelector("#question").textContent = questions



