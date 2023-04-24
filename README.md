# Planning for spaceman

## Analyze the app's functionality

MVP
    What is the least amount of work i need to do in order to release this item

As a user....
- I want to be able to have 2 players, because that is how spaceman is played. 2nd player will be our computer.
- I want the 1st player to choose a theme for the word that the player wants to guess because that is how spaceman is played.
- I want the computer to choose a random word from the collection because that is how spaceman is played.
- I want the 1st player to guess the word that computer picked, because that is how spaceman is played.
- I want empty slots to populate the screen, because that is how spaceman is played. These slots represent letters for the secret word.
- I want the 1st player to guess letters in the secret word because that is how spaceman is played.
- I want the letters to populate the empty slots if the player guesses correct, because that is how spaceman is played. 
- I want it to be a strike if the player guesses incorrect, because that is how spaceman is played. With every strike the computer 'pulls' a bone away from the skeleton; First strike is represented by an "arm" being taken away, and the last one is represented by the "skull" bein knocked off.
- I want the 1st payer to win, if the word is guessed before the skeleton falls apart, because that is how spaceman is played.
-   I want to know if the player won or if the player lost, because that is how spaceman is played.
-   I want to be able to play again after the game is over, because that is how spaceman is played.

If I have time these would be great

Bonus user stories
-   add calm background music
-   add contianers with different body parts fot the player to choose from: skull bones, chest bones, spine bones, pelvis arm, hand, leg, foot.

## Think about the overall design (look and feel) of the app 
-   clean/minimalist
-   shades of green and grey
-   Dosis 
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Dosis&family=Raleway:wght@100&display=swap" rel="stylesheet">
```
``` css 
font-family: 'Dosis', sans-serif;
```

## Wireframe the UI

! [My wireframe pic](IMG_0382.png)


## Pseudocode

1) Define required constants
    1) Word container - it will house the words that the computer will choose from. These options will never change.

2) Define required variables used to track the state of the game
    1) secret word board: empty slots that will be filled with letters 
    2) drawing of the skeleton.
    3) alphabet board: player will pick letters out of this array. If the letter has already been taken, it will be greyed out


3) Cache DOM elements
    1) Message spot
    2) Play again button
    3) Secret word being updated
    4) Alphabet board being updated
    5) Skeleton being updated
   

4) Unpon loading the app should
    4.1) Initialize the stated variables
    - Secret word board is empty
    - Skeleton picture is all ready
    - Alphabet board is greyed out
    - The turn variable should be set to null since the player hasn't made any clicks yet 

    4.2) Render those values to the page
    -   Render the secret word, letter slots populate.
    -   Alphabeth board becomes active;
    -   Render the message, "Learn your bones!"
    - Do NOT Render the play again button on first view

  4.3) Wait for the user to interact aka click the letters
  

5) Handle a player clicking on an alphabet letter: 
    1) update the alphabeth board after the player clicks on a letter
    2) update secret word board array with player's move if the letter word is correct
    3) update the drawing of the skeleton if the player choose wrong letter 
    5) Re-render the alphabet board with the player move (grey out the letter)

6) Handle a player clicking the replay button
    1) Reset the stated variables
    2) Render the alphabeth board

7) The player wins, if the word is guessed before the skeleton falls apart. The player looses, if the skeleton falls apart before the word is guessed. 


## Identify the application's data

-   The alphabeth board (one array with 26 elements)
``` js
let board 

