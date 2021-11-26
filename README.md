# What's that Lyric? 🏆

## Description 📖

This application assesses how well you know the lyrics to a couple classic songs. 

There is a missing lyric in each line from a song you should know. 

You have thirty seconds to fill in the blanks on the click of the button with the provided lyrics. Choose wisely because if you get it wrong, five seconds will be taken off the timer. If you get it correct, you will be awarded 20 points to your score. 

When you have answered all the questions or the time runs out, you can enter your initals and be added to the scoreboard. Play again to try to beat your high score!

## Features 📝

When the start button is clicked, it fires off a function that begins the timer and another function that renders the game's 'questions' and answers.

The startGame Function:

The game presents the user with a line from a song; however there is a missing lyric. The user then chooses a lyric to fill in the blank by clicking on one of four buttons that come from a nested array.

The application knows the correct answer by comparing the user's choice to the 'correctAnswer' in the array using a conditional statement: if the user clicks the correct answer, 20 points are tallied to their score, else 5 seconds are subtracted from the timer.

This all happens within a for loop that loops through an array. Once the user chooses, the game moves to the next question by incrementing on the a variable that distinguishes the current position of the array.

When the user reaches the end of the array, another conditional statement is used: if the current position of the array equals the last 'question', employ the endGame function.

The endGame function:

When either the timer runs out or the last question is answered, the game ends.

The content within the container presenting the rendered questions is hidden and replaced by a "Game Over!" banner and a form where the user can input their initials and submit their score.

Once submited, the application uses localStorage to store the user's initials and score.

A scoreboard is displayed with player's history and score so the user can compare their score with other players and the high score. 

Then the user can play again if they want to by clicking the play again button.


## Takeaways 💡

I learned how to start functions on the click of a button.

I learned how to nest arrays and cycle through them using a for loop.

I learned how to use conditional statements to add to a score and to take time off a timer depending on a user's choice.

I learned how to store a form into localStorage then display a scoreboard so the user could compare their scores to other players.

I traversed the DOM to hide and display elements.



## User Story

```
AS A coding boot camp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
```


---

© 2021 Caswell Lee Orr. Confidential and Proprietary. All Rights Reserved.


