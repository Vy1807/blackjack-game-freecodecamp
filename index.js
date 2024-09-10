/*
BLACKJACK RULES
You start with two cards. If the sum of the two cards is:
 *Below 21: You are still in the game!
 *Equal to 21: You won!
 *Above 21: You lost!
*/

//Useful variables
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let balanceEl = document.getElementById("balance-el")

//first object! - Player data
let player = {
    name: "Vyctor",
    balance: 145
}
//Show Player Data
balanceEl.textContent = player.name + ": $" + player.balance

//Function that generates random numbers
function getRandomCard() {
    // if 1     -> return 11
    // if 11-13 -> return 10
   let randVar = Math.floor(Math.random()*13 ) + 1
   if (randVar > 11){
    return 10
   }
   else if(randVar == 1){
    return 11
   }
   else{
    return randVar
   }
}

//Function that starts as the player clicks in the "Start game" button
function startGame() {
     let isAlive = true
     let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    console.log(isAlive, hasBlackJack)
    renderGame()
}

//Function that shows the cards and the messages
function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
        isAlive = true
        hasBlackJack = false
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

//Function that starts when the user clicks in the "New Card" button
function newCard() {
    if (isAlive === true && hasBlackJack === false){ 
        console.log("Can draw more cards!")
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
    }
    else {
        console.log("Cannot draw more cards!")
    }
}

