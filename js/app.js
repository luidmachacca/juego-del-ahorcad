/**
 * app.js - Inicialización y event listeners
 */
document.addEventListener('DOMContentLoaded', () => {
  const keysContainer = document.querySelector('.keyboard');
  const wordDisplayContainer = document.querySelector('.word-display');
  const attemptsCountEl = document.querySelector('.attempts__count');
  const categoryTextEl = document.querySelector('.category-badge__text');
  const messageContainer = document.querySelector('.message');
  const newGameBtn = document.querySelector('.btn--new-game');
  const svgEl = document.querySelector('.game-board__svg');

  HangmanDrawing.init(svgEl);

  function renderWord() {
    const displayWord = Game.getDisplayWord();
    wordDisplayContainer.innerHTML = displayWord.map(({ letter, revealed }) => {
      const isWrongReveal = Game.isOver && !Game.guessedLetters.includes(letter);
      let classes = 'letter';
      if (revealed && !isWrongReveal) classes += ' letter--revealed';
      if (isWrongReveal) classes += ' letter--wrong-reveal';
      if (!revealed && !isWrongReveal) classes += ' letter--empty';
      return `<span class="${classes}">${revealed ? letter : ''}</span>`;
    }).join('');
  }

  function renderKeyboard() {
    const rows = [
      'QWERTYUIOP',
      'ASDFGHJKL',
      'ZXCVBNM'
    ];

    keysContainer.innerHTML = rows.map(row => {
      const keys = row.split('').map(letter => {
        const state = Game.getLetterState(letter);
        let classes = 'key';
        if (state === 'correct') classes += ' key--correct key--disabled';
        if (state === 'wrong') classes += ' key--wrong key--disabled';
        if (Game.isOver) classes += ' key--disabled';
        return `<button class="${classes}" data-letter="${letter}">${letter}</button>`;
      }).join('');
      return `<div class="keyboard__row">${keys}</div>`;
    }).join('');
  }

  function renderAttempts() {
    attemptsCountEl.textContent = Game.getAttemptsLeft();
  }

  function renderCategory() {
    categoryTextEl.textContent = Game.category;
  }

  function showMessage() {
    if (!Game.isOver) {
      messageContainer.innerHTML = '';
      messageContainer.className = 'message';
      return;
    }

    if (Game.isWon) {
      messageContainer.innerHTML = '¡Felicidades! Ganaste!';
      messageContainer.className = 'message message--win';
    } else {
      messageContainer.innerHTML = `¡Perdiste! La palabra era: <strong>${Game.word}</strong>`;
      messageContainer.className = 'message message--lose';
    }
  }

  function handleGuess(letter) {
    if (Game.isOver) return;

    const result = Game.guessLetter(letter);

    if (result === 'wrong') {
      HangmanDrawing.showNextPart();
    }

    renderWord();
    renderKeyboard();
    renderAttempts();
    showMessage();
  }

  function startNewGame() {
    Game.init();
    HangmanDrawing.reset();
    renderWord();
    renderKeyboard();
    renderAttempts();
    renderCategory();
    showMessage();
  }

  keysContainer.addEventListener('click', (e) => {
    const key = e.target.closest('.key');
    if (!key || key.classList.contains('key--disabled')) return;
    handleGuess(key.dataset.letter);
  });

  document.addEventListener('keydown', (e) => {
    if (Game.isOver) return;
    const letter = e.key.toUpperCase();
    if (/^[A-Z]$/.test(letter)) {
      handleGuess(letter);
    }
  });

  newGameBtn.addEventListener('click', startNewGame);

  startNewGame();
});
