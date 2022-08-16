const rulesModal = document.querySelector('[data-rules-modal]')
const openRulesButton = document.querySelector('[data-open-rules]')
const closeRulesButton = document.querySelector('[data-close-rules]')
const closeRulesButtonMobile = document.querySelector('[data-close-rules-mobile]')
const rockButton = document.querySelector('[data-rock-button]')
const paperButton = document.querySelector('[data-paper-button]')
const scissorsButton = document.querySelector('[data-scissors-button]')
const scoreCounter = document.querySelector('[data-score-counter]')
const playerButton = document.querySelector('[data-player-button]')
const houseButton = document.querySelector('[data-house-button]')
const firstScreen = document.querySelector('[data-first-screen]')
const secondScreen = document.querySelector('[data-second-screen]')
const resulText = document.querySelector('[data-result-text]')
const playAgainButton = document.querySelector('[data-play-again-button]')

const rules = {rock: 'scissors', scissors: 'paper', paper:'rock'}
const options = ['rock', 'paper', 'scissors']

let playerPick = ''
let playerScore = 0

playAgainButton.addEventListener('click', resetGame)

openRulesButton.addEventListener('click', () => {
  rulesModal.classList.add('open')
})

closeRulesButton.addEventListener('click', () => {
  rulesModal.classList.remove('open')

})

closeRulesButtonMobile.addEventListener('click', () => {
  rulesModal.classList.remove('open')
})

rockButton.addEventListener('click', () => {
  playerPick = 'rock'
  playerButton.classList.add(`${playerPick}-button`)
  playerButton.classList.add(`${playerPick}-button`)
  start()
})

paperButton.addEventListener('click', () => {
  playerPick = 'paper'
  playerButton.classList.add(`${playerPick}-button`)
  start()
})

scissorsButton.addEventListener('click', () => {
  playerPick = 'scissors'
  playerButton.classList.add(`${playerPick}-button`)
  start()
})

function winCondition(playerPick, housePick) {
  secondScreen.classList = 'second-screen'
  houseButton.classList = `house-button ${housePick}-button`
  if(playerPick == housePick) return resulText.textContent = 'draw'
  const win = housePick == rules[playerPick]
  if(win) {
    resulText.textContent = 'you win'
    playerButton.classList.add('winner')
    playerScore++
  }
  if(!win) {
    resulText.textContent = 'you lose'
    houseButton.classList.add('winner')
    playerScore == 0 ? this : playerScore--
  }
  scoreCounter.textContent = playerScore
}

function start() {
  firstScreen.classList.add('off')
  secondScreen.classList = 'second-screen waiting'
  const housePick = options[Math.floor(Math.random() * 3)]
  setTimeout(winCondition, 1000, playerPick, housePick)
}

function resetGame() {
  secondScreen.classList.add('off')
  firstScreen.classList = 'first-screen'
  houseButton.classList = 'house-button placeholder'
  playerButton.classList = 'player-button'
}