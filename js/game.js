/**
 * game.js - Lógica principal del juego del ahorcado
 */
const Game = {
  word: '',
  category: '',
  guessedLetters: [],
  wrongGuesses: 0,
  maxWrong: 6,
  isOver: false,
  isWon: false,

  init() {
    this.reset();
  },

  reset() {
    const { word, category } = getRandomWord();
    this.word = word;
    this.category = category;
    this.guessedLetters = [];
    this.wrongGuesses = 0;
    this.isOver = false;
    this.isWon = false;
  },

  guessLetter(letter) {
    letter = letter.toUpperCase();

    if (this.isOver || this.guessedLetters.includes(letter)) {
      return null;
    }

    this.guessedLetters.push(letter);

    if (this.word.includes(letter)) {
      this.checkWin();
      return 'correct';
    } else {
      this.wrongGuesses++;
      this.checkLose();
      return 'wrong';
    }
  },

  checkWin() {
    const allLettersGuessed = this.word
      .split('')
      .every(letter => this.guessedLetters.includes(letter));

    if (allLettersGuessed) {
      this.isOver = true;
      this.isWon = true;
    }
  },

  checkLose() {
    if (this.wrongGuesses >= this.maxWrong) {
      this.isOver = true;
      this.isWon = false;
    }
  },

  getDisplayWord() {
    return this.word.split('').map(letter => ({
      letter,
      revealed: this.guessedLetters.includes(letter) || this.isOver
    }));
  },

  getAttemptsLeft() {
    return this.maxWrong - this.wrongGuesses;
  },

  isLetterUsed(letter) {
    return this.guessedLetters.includes(letter.toUpperCase());
  },

  getLetterState(letter) {
    letter = letter.toUpperCase();
    if (!this.guessedLetters.includes(letter)) return 'unused';
    if (this.word.includes(letter)) return 'correct';
    return 'wrong';
  }
};
