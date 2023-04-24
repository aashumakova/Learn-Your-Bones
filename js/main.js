/*----- constants -----*/

const words = {
    arm: ['humerus', 'ulna', 'radius'],
    leg: ['femur', 'tibia', 'fibula'],
    skull: ['frontal', 'occipital', 'temporal'],

}
/*----- app's state (variables) -----*/
let secretWord = '';
let count = 0;
let winCount = 0;



/*----- cached element references -----*/
const wordsContainer = document.getElementById('words-container');
const letterContainer = document.getElementById('letter-container');
const userInputSection = document.getElementById('user-input-section');
const canvas = document.getElementById('canvas');
const resultText = document.getElementById('result-text');
const playAgainButton = document.getElementById('play-again-button');


/*----- event listeners -----*/
playAgainButton.addEventListener('click', init)

// /*----- functions -----*/
init()

function init(){
// computer generates a random word
    const wordArray = words['arm'];
    secretWord = wordArray[Math.floor(Math.random() * wordArray.length)];
    console.log(secretWord)
}
    

    //update the input section to show empty slots for each letter
    // let displayItem = secretWord.split('').map(function(char) {
    //     return '<span class="dashes"></span>';
    //   }).join('');
    //   userInputSection.innerHTML = displayItem;
    //   console.log(displayItem)
// let displayItem = secretWord.split('').map(function(char) {
//     return '';
//     }).join('');
//     userInputSection.innerHTML = displayItem;
