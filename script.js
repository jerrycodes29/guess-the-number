'use strict'
const $ = (selector) => document.querySelector(selector)

let randomNumber = Math.trunc(Math.random() * 30) + 1
const winningNumber = $('.number')
$('.guess').value = ''

const displayMessage = function (message) {
    $('.message').textContent = message
}

let score = 30
const scoreElement = $('#score')

let highScore = localStorage.getItem('highScore')
    ? localStorage.getItem('highScore')
    : 0
const highScoreElement = $('#highScore')
highScoreElement.textContent = highScore

const checkGuessValue = function () {
    const guessValue = Number($('.guess').value)
    if (!guessValue) displayMessage('⛔ Please input some number!')
    else if (guessValue === randomNumber) {
        displayMessage('✌🏼 Yay! Congratulations!')

        $('body').style.backgroundColor = '#68B984'
        winningNumber.style.backgroundColor = '#ffffff'
        winningNumber.style.borderStyle = 'solid'

        if (highScore < score) {
            highScore = score
            localStorage.setItem('highScore', highScore)
            highScoreElement.textContent = highScore
        }
    } else {
        if (score > 1) {
            score--
            displayMessage(
                guessValue > randomNumber ? '📈 Too High!' : '📉 Too Low!'
            )
            scoreElement.textContent = score
        } else {
            displayMessage('😓 Sorry! You lost!')
            $('body').style.backgroundColor = '#DC3535'
            winningNumber.style.backgroundColor = '#ffffff'
            winningNumber.style.borderStyle = 'solid'
            winningNumber.textContent = randomNumber
            scoreElement.textContent = 0
        }
    }
}

$('#checkBtn').addEventListener('click', checkGuessValue)

$('#resetBtn').addEventListener('click', function () {
    $('body').style.backgroundColor = '#eeeee5'
    winningNumber.style.backgroundColor = '#ffffff'
    winningNumber.style.borderStyle = 'dotted'
    winningNumber.textContent = '?'
    scoreElement.textContent = 30
    displayMessage('🎈 Try your guess..!!')
    $('.guess').value = ''
    randomNumber = Math.trunc(Math.random() * 30) + 1
})
