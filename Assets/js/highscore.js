

// ======== SCOREBOARD ========

// gets socre items and pstores in local storage
let storage = JSON.parse(localStorage.getItem('highscores'))

// create score container
scoreContainer = document.getElementById('highscore-container')

// if no scores, print no scores
if (storage === null) {
    scoreContainer.textContent = "No Current Scores"
} 
// else display scores stored in local storage in a p element
else {
  scoreContainer.textContent = ''
  for (var i = 0; i < storage.length; i++) {
    let user = document.createElement('p')
    user.textContent = `Name: ${storage[i].name} - Score: ${storage[i].currentScore}`
    scoreContainer.append(user)
  }
}


// ====== PLAY AGAIN ===========

// create the button
let playAgainBtn = document.createElement('button');
playAgainBtn.setAttribute('id', 'playAgain-btn');
playAgainBtn.textContent = 'Play Again!';
document.querySelector('#highscore-container').append(playAgainBtn);

// sends user back to the game index to play again
playAgainBtn.addEventListener('click', function (event) {
  console.log(event.target.id)

  window.location.href = 'index.html';

})