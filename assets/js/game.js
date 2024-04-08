// REST Countries API endpoint
const API_URL = 'https://restcountries.com/v3.1/all';

// HTML elements
const startButton = document.getElementById('start-button');
const flagImage = document.getElementById('flag-image');
const choiceButtons = document.querySelectorAll('.choice-btn');
const scoreDisplay = document.getElementById('score');
const questionDisplay = document.getElementById('question');
const timeDisplay = document.getElementById('time');
const timerEndAlert = document.getElementById('timer-end-alert');
const playAgainButton = document.getElementById('play-again');
const backToMenuButton = document.getElementById('back-to-menu');

// Game state
let countries = [];
let currentCountry;
let score = 0;
let currentQuestion;
let timeRemaining = 15; // 15 seconds
let intervalId;
let isGameOver = false;

// Fetch countries data
fetch(API_URL)
    .then(response => response.json())
    .then(data => {
        countries = data;
        startGame();
    })
    .catch(error => console.error('Error fetching countries:', error));

// Start the game
function startGame() {
    if (isGameOver) return;
    // Select a random country
    currentCountry = countries[Math.floor(Math.random() * countries.length)];

    // Select a random question
    currentQuestion = getRandomQuestion();

    // Display the question
    displayQuestion(currentQuestion);

    // Display the flag
    flagImage.src = currentCountry.flags.png;

    // Shuffle the choices
    const choices = getChoices(currentQuestion);
    shuffleArray(choices);

    // Update the choice buttons
    choiceButtons.forEach((btn, index) => {
        btn.textContent = choices[index];
        btn.addEventListener('click', handleChoice);
    });

    // Start the timer
    startTimer();

}

// Display the correct answer if wrong
let correctAnswerElement = document.querySelector('.correct-answer');
if (!correctAnswerElement) {
  correctAnswerElement = document.createElement('div');
  correctAnswerElement.classList.add('correct-answer');
  questionDisplay.appendChild(correctAnswerElement);
}

function displayCorrectAnswer() {
  const correctAnswer = getCorrectAnswer(currentQuestion, currentCountry);
  correctAnswerElement.textContent = `Correct answer: ${correctAnswer}`;
}

// Modify the handleChoice function to display the correct answer if the answer is incorrect
function handleChoice(event) {
  if (isGameOver) return;

  const selectedChoice = event.target.textContent;
  const correctAnswer = getCorrectAnswer(currentQuestion, currentCountry);
  if (selectedChoice !== correctAnswer) {
    displayCorrectAnswer();
  } else {
    correctAnswerElement.textContent = '';
  }
  score += selectedChoice === correctAnswer ? 1 : 0;
  scoreDisplay.textContent = `Score: ${score}`;
  startGame();
}

// Get 3 random countries
function getRandomCountries(count) {
    const randomCountries = [];
    const usedCountries = new Set([currentCountry.name.common]);

    while (randomCountries.length < count) {
        const randomIndex = Math.floor(Math.random() * countries.length);
        const randomCountry = countries[randomIndex];

        if (!usedCountries.has(randomCountry.name.common)) {
            randomCountries.push(randomCountry);
            usedCountries.add(randomCountry.name.common);
        }
    }

    return randomCountries;
}

// Get a random question
function getRandomQuestion() {
    const questions = [
        "What country is this?",
        "What is the capital of this country?",
        "What continent is this country in?"
    ];
    return questions[Math.floor(Math.random() * questions.length)];
}

// Get the correct answer for the current question
function getCorrectAnswer(question, country) {
    switch (question) {
        case "What country is this?":
            return country.name.common;
        case "What is the capital of this country?":
            return country.capital[0];
        case "What continent is this country in?":
            return country.region;
        default:
            return "";
    }
}

// Get the choices for the current question
function getChoices(question) {
    switch (question) {
        case "What country is this?":
            return [currentCountry.name.common, ...getRandomCountries(3).map(c => c.name.common)];
        case "What is the capital of this country?":
            const capitals = [currentCountry.capital[0], ...getRandomCountries(3).map(c => c.capital[0])];
            return capitals;
        case "What continent is this country in?":
            const correctContinent = currentCountry.continents[0];
            const wrongOptions = ['Africa', 'Asia', 'Europe', 'North America', 'South America', 'Oceania'].filter(c => c !== correctContinent);
            return [correctContinent, ...getUniqueRandomFromArray(wrongOptions, 3)];
        default:
            return [];
    }
}

// Display the current question
function displayQuestion(question) {
    questionDisplay.textContent = question;
}

// Get 3 unique random elements from an array
function getUniqueRandomFromArray(array, count) {
    const randomElements = [];
    const usedElements = new Set();

    while (randomElements.length < count) {
        const randomIndex = Math.floor(Math.random() * array.length);
        const randomElement = array[randomIndex];

        if (!usedElements.has(randomElement)) {
            randomElements.push(randomElement);
            usedElements.add(randomElement);
        }
    }

    return randomElements;
}

// Shuffle an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Start the timer
function startTimer() {
    timeRemaining = 15;
    timeDisplay.textContent = `Time: ${timeRemaining}`;
    intervalId = setInterval(() => {
        if (timeRemaining > 0) {
            timeRemaining--;
            timeDisplay.textContent = `Time: ${timeRemaining}`;
        } else {
            clearInterval(intervalId);
            isGameOver = true;
            timerEndAlert.style.display = 'block';
            playAgainButton.style.display = 'block';
            backToMenuButton.style.display = 'block';
            alert(`Game over! Your score is ${score}.`);
        }
    }, 1000);
}

  // Play again function
function playAgain() {
    isGameOver = false;
    score = 0;
    scoreDisplay.textContent = `Score: ${score}`;
    timerEndAlert.style.display = 'none';
    playAgainButton.style.display = 'none';
    backToMenuButton.style.display = 'none';
    startGame();
  }
  
  // Back to menu function
  function backToMenu() {
    // Navigate to the index.html page
    window.location.href = 'index.html';
  }
  
  // Add event listeners to the buttons
  playAgainButton.addEventListener('click', playAgain);
  backToMenuButton.addEventListener('click', backToMenu);

// --------------------------------------------------------
