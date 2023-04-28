/*----- constants -----*/

const words = {
    arm: ['humerus', 'ulna', 'radius'],
    leg: ['femur', 'tibia', 'fibula'],
    skull: ['frontal', 'occipital', 'temporal'],

}
/*----- app's state (variables) -----*/
let secretWord = '';
let count = 0;
let inputSection = '';
let winCount = 0;
let displayWord = [];
let displayString = '';

/*----- cached element references -----*/
const wordsContainer = document.getElementById('words-container');
const wordCategoriesButton = document.getElementById('words-container');
const letterContainer = document.getElementById('letter-container');
const userInputSection = document.getElementById('user-input-section');
const resultText = document.getElementById('result-text');
const playAgainButton = document.getElementById('play-again-button');
const letterButtonsEl = document.querySelector('#letter-container');


/*----- event listeners -----*/
playAgainButton.addEventListener('click', function(){
    window.location.reload();
}
)

letterButtonsEl.addEventListener('click', function(event) {
    const letter = event.target.textContent;
    event.target.disabled = 'true';
    checkLetter (letter, secretWord)
})

wordCategoriesButton.addEventListener('click', generateWordArray) 

/*----- functions -----*/
init()

function init() {
    count = 0;
    winCount = 0;
    secretWord = '';
    displayWord = [];
    userInputSection.innerHTML = '';
    resultText.innerHTML = '';
    renderLetters();
}

function generateWordArray(){
    const categoryValue = event.target.textContent;
    const wordArray = words[categoryValue];
    secretWord = wordArray[Math.floor(Math.random() * wordArray.length)].toUpperCase();
    event.target.disabled = 'true';
    createDisplayWord()
}

function displayWordOptions () {
    wordsContainer.innerHTML +=`<h1>Select your body parts</h1>`;
    let wordCategories = Object.keys(words);
    wordCategories.forEach(function(wordCategory){
    let wordCategoriesButton = document.createElement('div');
    wordCategoriesButton.innerHTML += `<button class="options">${wordCategory}</button>`;
    wordsContainer.appendChild(wordCategoriesButton);
    })
}
displayWordOptions()

function createDisplayWord(){
    for ( let i = 0; i < secretWord.length; i++) {
    displayWord[i] = 'x';
    }
            
    displayString = displayWord.join(' ');
    userInputSection.innerHTML = displayString;
    renderLetters()
}

function renderLetters() {
    letterButtonsEl.style.visibility = secretWord ? 'visible' : 'hidden';
}

function checkLetter (letter, secretWord) {
    if (secretWord.includes(letter)) {
    for ( var j = 0; j < secretWord.length; j++ ) {
    if (secretWord[j] === letter) {
        displayWord.splice(j, 1, letter);
        console.log(displayWord);
        displayString = displayWord.join(' ');
        console.log(displayString);
        userInputSection.innerHTML = displayString;
        winCount +=1;
    }
    
    if (winCount === secretWord.length) {
    resultText.innerHTML = `Good job! We have a future healthcare professional here!!!`;
    }
    }
    } else {
        count +=1;
    }           
    checkEndOfGame()
}

function checkEndOfGame(){
    if (count === 5) {
        resultText.innerHTML = `Keep on studying. You can do it!`;
        return
    }
}
