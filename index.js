// /*
// BLACKJACK RULES

// You start with two cards. If the sum of the two cards is:

//  *Below 21: You are still in the game!
//  *Equal to 21: You won!
//  *Above 21: You lost!

// */

// //Função para numeros aleatórios
// function randomNumbers(){
//     return Math.floor(Math.random() * 10 ) + 2
// }

// //Useful variables
// let firstCard = 18
// let secondCard = 1
// let cards = [firstCard, secondCard]
// let sum = cards[0] + cards[1]
// let hasBlackjack = false
// let isAlive = true
// let message = ""

// //Document variables
// let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
// let cardsEl = document.getElementById("cards-el")

// //Main Function
// function renderGame(){
//     //Cards
//     messageEl.textContent = message
//     sumEl.textContent = "Sum:" + sum
//     cardsEl.textContent = "Cards: "
//     for (i = 0; i < cards.length; i++){
//         cardsEl.textContent += " / " + cards[i] 
//     }

//     if (sum <= 20){
//         message = "Do you want to draw a new card?"
//     }
//     else if (sum === 21){
//         message = "Wohoo! You've got Blackjack!"
//         hasBlackjack = true
//     }
//     else{
//         message = "You're out of the game!"
//         isAlive = false
//      }
//      messageEl.textContent = message
// }

// function startGame(){
//     renderGame()
// }

// function newCardAction(){
//     newCard = 2
//     sum += newCard
//     cards.push(newCard)
//     console.log(cards)
//     renderGame()
// }



