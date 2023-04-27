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
// let displayWordOptions = [];
// let letterSlotSpot = [];



/*----- cached element references -----*/
const wordsContainer = document.getElementById('words-container');
const wordCategoriesButton = document.getElementById('words-container');
const letterContainer = document.getElementById('letter-container');
const userInputSection = document.getElementById('user-input-section');
// const canvas = document.getElementById('canvas');
const resultText = document.getElementById('result-text');
const playAgainButton = document.getElementById('play-again-button');
const letterButtonsEl = document.querySelector('#letter-container');
// const letterButtonEls = [...document.querySelectorAll('#letter-container')];


/*----- event listeners -----*/
playAgainButton.addEventListener('click', function(){
    window.location.reload();
}
)
// playAgainButton.addEventListener('click', init)


wordCategoriesButton.addEventListener('click', generateWordArray) //{
    //const categoryValue = event.target.textContent;
    // event.target.disabled = 'true';
    // const wordArray = words[categoryValue];
    // secretWord = wordArray[Math.floor(Math.random() * wordArray.length)].toUpperCase();
    // event.target.disabled = 'true';
    // console.log(secretWord)
    //createDisplayWord()
    // console.log('Category button clicked:', categoryValue);
    //  //function createDisplayWord(){
    //         // let displayWord = [];
            // for ( let i = 0; i < secretWord.length; i++) {
            //     displayWord[i] = 'x';
            // 
            // console.log(displayWord)c
        
            // displayWord.forEach(function(letterSlot) {
            // let letterSlotSpot = document.createElement('p');
            // letterSlotSpot.innerHTML = letterSlot;
            // userInputSection.appendChild(letterSlotSpot);
            // }
            // )
            // renderLetters()
    //     //}
//}
// )

function generateWordArray (){
    const categoryValue = event.target.textContent;
    const wordArray = words[categoryValue];
    secretWord = wordArray[Math.floor(Math.random() * wordArray.length)].toUpperCase();
    event.target.disabled = 'true';
    console.log(secretWord);
    createDisplayWord()
}

function createDisplayWord(){
            // let displayWord = [];
            for ( let i = 0; i < secretWord.length; i++) {
                displayWord[i] = 'x';
            }
            console.log(displayWord)
        
            displayString = displayWord.join(' ');
            console.log(displayString);
            userInputSection.innerHTML = displayString;
            // displayWord.forEach(function(letterSlot) {
            // let letterSlotSpot = document.createElement('p');
            // letterSlotSpot.innerHTML = letterSlot;
            // userInputSection.appendChild(letterSlotSpot);
            // }
            //)
            renderLetters()
        }

letterButtonsEl.addEventListener('click', function(event) {
    const letter = event.target.textContent;
    event.target.disabled = 'true';
    console.log('Button clicked:', letter);
    // const letter = buttonValue;
    // displayWordSplit = displayWord.split('');
    checkLetter (letter, secretWord)
    })

    // loop through all the letterButtonEls 
    // for each element to take element and make .disabled = 'false'
    // inside of init

function renderLetters() {
letterButtonsEl.style.visibility = secretWord ? 'visible' : 'hidden';
}

function checkLetter (letter, secretWord) {
    if (secretWord.includes(letter)) {
    for ( var j = 0; j < secretWord.length; j++ ) {
    // if the letter is in the word
    console.log(j);
    console.log(letter);
    console.log(secretWord[j]);
    console.log(secretWord)
    if (secretWord[j] === letter) {
    // update the displayWord
        displayWord.splice(j, 1, letter);
        console.log(displayWord);
        displayString = displayWord.join(' ');
        console.log(displayString);
        userInputSection.innerHTML = displayString;
        winCount +=1;
    }
    //winCount +=1;
    console.log(winCount, 'win count');
    if (winCount === secretWord.length) {
    resultText.innerHTML = `Good job! We have a future healthcare professional here!!!`;
    }
    // if (displayString === secretWord.length) {
    //     resultText.innerHTML = `Good job!`;
    // }
    }
    } else {
        count +=1;
        console.log(count, 'count');
        }

            
checkEndOfGame()
}

function checkEndOfGame(){
    if (count === 5) {
        // game ends
        resultText.innerHTML = `Keep on studying. You can do it!`;
        return
     }
 }
// /*----- functions -----*/
// need a function to pull each item word category aka a key from the object onto the game board   
init()

function init() {
    count = 0;
    winCount = 0;
    secretWord = '';
    displayWord = [];
    userInputSection.innerHTML = '';
    // let displayWordOptions = [];
    // let letterSlotSpot = [];
    // renderLetters(); 
    resultText.innerHTML = '';
    renderLetters();
    // checkEndOfGame(); 
    // const markerEls = [...document.querySelectorAll('#markers > div')]
    // const letterButtonEls = [...document.querySelectorAll('#letter-container')]
    // letterButtonsEl.forEach(function(letterButton) {
    // letterButton.disabled = 'false';
    // });   
    // loop through all the letterButtonEls
    // letterButtonsEl.forEach((letterButton) => {
    //     letterButton.disabled = 'false';

    // }) 
    // for each element to take element and make .disabled = 'false'
    // inside of init

}
function displayWordOptions () {
        wordsContainer.innerHTML +=`<h1>Select your body parts</h1>`;
        let wordCategories = Object.keys(words);
        console.log(wordCategories)
        wordCategories.forEach(function(wordCategory){
        let wordCategoriesButton = document.createElement('div');
        wordCategoriesButton.innerHTML += `<button class="options">${wordCategory}</button>`;
        wordsContainer.appendChild(wordCategoriesButton);
        })
    }
    displayWordOptions()