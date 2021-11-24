// =================== VARIABLES =============================

let timeLeft = 60;
let startButton = document.querySelector("#start-button");
let intervalId;
let displayTimer = document.querySelector("#countdown");
let resetButton = document.querySelector("#reset-button");

let score = 0;

// ==================== START GAME ============================

startButton.addEventListener("click", function () {
  clearInterval(intervalId);
  timeLeft = 60;

  // when start button is pressed, the timer begins
  startTimer();

  // When start button is pressed, the question appears on the screen
  startGame();


});

//  ===================== TIMER =========================

function startTimer() {

  intervalId = setInterval(function () {
    timeLeft--;
    displayTimer.textContent = timeLeft;
    if (timeLeft === 0) {
      console.log("Time's Up!")
      clearInterval(intervalId);
      endGame();

    }

  }, 1000)

};

// ================== QUESTIONS AND ANSWERS ======================


let currentLyric = 0;
let lyricArray = [
  {
    givenLyric: "All my exes live in ________ ...",
    answers: ["Texas", "Kansas", "Sturgis", "Frisco"],
    correctAnswer: "Texas",
  },
  {
    givenLyric: "the Rocky Mountain ________ is better than the way we had...",
    answers: ["Clay", "Hey", "Way", "Stay"],
    correctAnswer: "Way",
  },
  {
    givenLyric: "Got me on my knees, _________ ...",
    answers: ["Rigby", "Perla", "Layla", "Kayla"],
    correctAnswer: "Layla",
  },
  {
    givenLyric: "__________ all my troubles seemed so far away...",
    answers: ["In the car today", "The other day", "Wednesday", "Yesterday"],
    correctAnswer: "Yesterday",
  },
  {
    givenLyric: "__________ on the Mountain ...",                                       
    answers: ["Aspens", "Fire", "Snow", "Goats"],
    correctAnswer: "Fire",
  },
];


//============= START GAME FUNCTION =====================

function startGame() {
  // makes the start button disappear after clicked
  document.querySelector('#start-button').setAttribute('class', 'hide')

  renderQuestions()
}

function renderQuestions() {
  // acts like clearInterval - once the function has run through and the user has chosen an answer with a consequence, these lines clear it out to make space for the next optin in the lyricArray
  document.querySelector('.lyrics').textContent = "";
  document.querySelector('#options').textContent = "";

  // Connects the question from array to the HTML
  document.querySelector('.lyrics').textContent = lyricArray[currentLyric].givenLyric
  console.log(lyricArray[currentLyric].givenLyric);

  for (var i = 0; i < lyricArray[currentLyric].answers.length; i++) {
    //creating a variable that will create an element  that becomes the buttons for the answer choices
    var optionBtn = document.createElement('button');
    // setting the value of the id of the optionBtn to the value of the answers property of the array, which is the number order of the array
    optionBtn.setAttribute('id', lyricArray[currentLyric].answers[i]);// sets the text of the optionsBtn to the text in the answers property
    optionBtn.textContent = lyricArray[currentLyric].answers[i];
    // appending the optionsBtn variable to the options id in the html to display
    document.querySelector('#options').append(optionBtn);
    // creating an event for the answer options for user to choose from, and when clicked an event happens - either you get 20 points added to your score, or 5 seconds taken off the timer
    optionBtn.addEventListener('click', function (event) {
      console.log(event.target.id)
      if (event.target.id === lyricArray[currentLyric].correctAnswer) {
        score += 20;
        console.log('correct');
      } else {
        timeLeft -= 5;
        console.log('incorrect')
      }
      // after an option is clicked, we want to move to the next value of the lyricArray, so we increment to the currentLyric=0, then it goes to currentLyric=1 and so on.. 
      currentLyric++

      if (currentLyric == 5){
        endGame()
      }

      renderQuestions()
    });

  };

};

localStorage.setItem()

function endGame() {
console.log('cucumber');
  
  // hide - the <main> element
  // display text that lets user know game's over by creating an element
  // display final score
  // store score to localStorage
  // display an input - form saved to local storage
  // previous highscores
  // turn off timer

}

// key value pairs

// local storage a container to store things


// function to end the game then prompts user to enter name and save score to local storage




// need game to stop oonce user answers the last question or when timer is out. and to tally the score (as they go). 

// data- listen to click and get data set from the button itself

//setTimeout

//eventDelegation

// <form> for username and local.Storage to store it?


//setAttribute(visibolitu)

//userScore = 0

//scoreboard = 0

//highscore = 0

// let array = []
// undefined
// array.push({name: 'caswell', score: 4 })
// 1
// array
// [{…}]0: {name: 'caswell', score: 4}length: 1[[Prototype]]: Array(0)
// localStorage.setItem('array', array)
// undefined
// localStorage.setItem('array', JSON.stringify)
// undefined
// localStorage.setItem('array', JSON.stringify(array))
// undefined
// localStorage.array
// '[{"name":"caswell","score":4}]'
// JSON.parse(localStorage.array)