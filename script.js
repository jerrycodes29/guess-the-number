'use strict'

const $ = (selector) => document.querySelector(selector)
const randomNumber = Math.trunc(Math.random() * 30) + 1

const winningNumber = $('.number')
winningNumber.textContent = randomNumber

const msgElement = $('.message')
const displayMessage = function (message) {
    msgElement.textContent = message
}

$('#checkBtn').addEventListener('click', function () {
    const guessValue = Number($('.guess').value)
    if (!guessValue) displayMessage('⛔ Please input some number!')
    else if (guessValue === randomNumber) {
        displayMessage('✌🏼 Yay! Congratulations!')

        $('body').style.backgroundColor = '#68B984'
        winningNumber.style.backgroundColor = '#ffffff'
        winningNumber.style.borderStyle = 'solid'
    }
})
