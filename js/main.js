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



/*----- cached element references -----*/
const wordsContainer = document.getElementById('words-container');
const wordCategoriesButton = document.getElementById('words-container');
const letterContainer = document.getElementById('letter-container');
const userInputSection = document.getElementById('user-input-section');
// const canvas = document.getElementById('canvas');
const resultText = document.getElementById('result-text');
const playAgainButton = document.getElementById('play-again-button');
const letterButtonsEl = document.querySelector('#letter-container');


/*----- event listeners -----*/
playAgainButton.addEventListener('click', init)

wordCategoriesButton.addEventListener('click', function (event) {
    const categoryValue = event.target.textContent;
    // event.target.disabled = 'true';
    const wordArray = words[categoryValue];
    secretWord = wordArray[Math.floor(Math.random() * wordArray.length)].toUpperCase();
    event.target.disabled = 'true';
    console.log(secretWord)
    createDisplayWord()
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
})

function createDisplayWord(){
            // let displayWord = [];
            for ( let i = 0; i < secretWord.length; i++) {
                displayWord[i] = 'x';
            }
            console.log(displayWord)
        
            displayWord.forEach(function(letterSlot) {
            let letterSlotSpot = document.createElement('p');
            letterSlotSpot.innerHTML = letterSlot;
            userInputSection.appendChild(letterSlotSpot);
            }
            )
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

function renderLetters() {
letterButtonsEl.style.visibility = secretWord ? 'visible' : 'hidden';
}

function checkLetter (letter, secretWord) {
        // let count = 0;
        //while (count <= 5) {]
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
                    // const updatedDisplay = displayWord.replacewith(displayWord.splice(j, 1, letter));
                    // const letterSlotSpot = document.getElementsByTagName('p').reset();
                    displayWord.forEach(function(letterSlot) {
                    let letterSlotSpot = document.createElement('p');
                    letterSlotSpot.innerHTML = letterSlot;
                    userInputSection.appendChild(letterSlotSpot);
                    });

                    winCount +=1;
                    console.log(winCount, 'win count');
                    if (winCount === secretWord.length) {
                        resultText.innerHTML = `Good job! We have a future healthcare professional here!!!`;
                    }
                } 
                //else {
                    // add a strike
                    // count +=1;
                    // console.log(count, 'count');
                    // count ++;
                //}
                } 
        } else {
        count +=1;
        console.log(count, 'count');
        }

            // update display word array with player's move if the letter word is correct
            // for ( var j = 0; j < secretWord.length; j++ ) {
            //     // if the letter is in the word
            //     console.log(j);
            //     console.log(letter);
            //     console.log(secretWord[j]);
            //     console.log(secretWord)
            //     if (secretWord[j] === letter) {
            //         // update the displayWord
            //         displayWord.splice(j, 1, letter);
            //         console.log(displayWord);
            //         // const updatedDisplay = displayWord.replacewith(displayWord.splice(j, 1, letter));
            //         // const letterSlotSpot = document.getElementsByTagName('p').reset();
            //         displayWord.forEach(function(letterSlot) {
            //         let letterSlotSpot = document.createElement('p');
            //         letterSlotSpot.innerHTML = letterSlot;
            //         userInputSection.appendChild(letterSlotSpot);
            //         });

            //         winCount +=1;
            //         console.log(winCount, 'win count');
            //         if (winCount === secretWord.length) {
            //             resultText.innerHTML = `Good job! We have a future healthcare professional here!!!`;
            //         }
            //     } 
            //     //else {
            //         // add a strike
            //         // count +=1;
            //         // console.log(count, 'count');
            //         // count ++;
            //     //}
            //     } 
                // count +=1;
                //     console.log(count, 'count');
checkEndOfGame()
}

 function checkEndOfGame(){
    if (count === 5) {
        // game ends
        resultText.innerHTML = `Keep on studying. You can do it!`;
        return
     }
    // if (winCount === secretWord.length) {
    //     resultText.innerHTML = `Good job! We have a future healthcare professional here!!!`;
    //     return
    // }
    // if (count === 5) {
    //     // game ends
    //     resultText.innerHTML = `Keep on studying. You can do it!`;
    //  }
 }

// console.log(count, winCount)
// /*----- functions -----*/
// need a function to pull each item word category aka a key from the object onto the game board   
init()

function init() {
    count = 0;
    winCount = 0;
    displayWord = [];
    renderLetters()
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



