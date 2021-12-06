

// ============= SCOREBOARD ==============

// display top 5 scores?? 

let storage = JSON.parse(localStorage.getItem('highscores'))

scoreContainer = document.getElementById('highscore-container')

if (storage === null) {
  scoreContainer.textContent = "No Current Scores"
}

else {
  scoreContainer.textContent = ''
  for (var i = 0; i < storage.length; i++) {
    let user = document.createElement('p')
    user.textContent = `Name: ${storage[i].name} - Score: ${storage[i].currentScore}`
    scoreContainer.append(user)
  }
}


// ================ PLAY AGAIN ================

let playAgainBtn = document.createElement('button');
playAgainBtn.setAttribute('id', 'playAgain-btn');
playAgainBtn.textContent = 'Play Again!';
document.querySelector('#highscore-container').append(playAgainBtn);

playAgainBtn.addEventListener('click', function (event) {
  console.log(event.target.id)

  window.location.href = 'index.html';

})

