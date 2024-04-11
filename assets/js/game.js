// REST Countries API endpoint
const API_URL = 'https://restcountries.com/v3.1/all';

// HTML elements
const startButton = document.getElementById('start-button');
const flagImage = document.getElementById('flag-image');
const choiceButtons = document.querySelectorAll('.choice-btn');
const scoreDisplay = document.getElementById('score');
const questionDisplay = document.getElementById('question');
const playAgainButton = document.getElementById('play-again');
const backToMenuButton = document.getElementById('back-to-menu');

// Game state
let countries = [];
let currentCountry;
let score = 0;
let currentQuestion;
let isGameOver = false;
let currentQuestionNumber = 1;
let maxQuestions = 10;

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

    // Select the desired number of random countries from the enabled continents
    currentCountry = countries.filter(country => enabledContinents.includes(country.continents[0]))[Math.floor(Math.random() * questionCount)];

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

    // Check if the current question number exceeds the maximum set questions
    if (currentQuestionNumber > maxQuestions) {
        // Game over, show alert with final score
        alert(`Game Over! Your final score is: ${score}`);
        playAgainButton.style.display = 'block';
        backToMenuButton.style.display = 'block';
        isGameOver = true;
        return;
    }

    // Display the question number out of the maximum set questions
    document.getElementById('question-counter').textContent = `Question ${currentQuestionNumber} out of ${maxQuestions}`;

    // Increment the current question number
    currentQuestionNumber++;
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

// Handle User's choice
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

// End of Game Logic
// Play again function
function playAgain() {
    isGameOver = false;
    score = 0;
    currentQuestionNumber = 1;
    document.getElementById('question-counter').textContent = `Question ${currentQuestionNumber} out of ${maxQuestions}`;
    scoreDisplay.textContent = `Score: ${score}`;
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

// Modal
document.getElementById('settingsButton').addEventListener('click', function () {
    var settingsModal = new bootstrap.Modal(document.getElementById('settings-modal'));
    settingsModal.show();
});
// Get settings 
const questionCountInput = document.getElementById('question-count');
const continentCheckboxes = document.querySelectorAll('.form-check-input[id^="continent-"]');

// Get selected # of questions
let questionCount = parseInt(questionCountInput.value);

// Get the selected continent filters
const enabledContinents = Array.from(continentCheckboxes)
    .filter(checkbox => checkbox.checked)
    .map(checkbox => checkbox.id.split('-')[1]);

// Close Modal
// Get the close button element of the modal
const closeButton = document.querySelector('#settings-modal .btn-close');

// Add an event listener to the close button
closeButton.addEventListener('click', function () {
    // Get the modal instance
    var settingsModal = bootstrap.Modal.getInstance(document.getElementById('settings-modal'));
    // Call the hide method on the modal instance
    settingsModal.hide();
});

// Save Settings

// Get the "Save Changes" button
const saveSettingsButton = document.getElementById('save-settings');

// Add an event listener to the "Save Changes" button
saveSettingsButton.addEventListener('click', function () {
    // Disable the save button
    saveSettingsButton.disabled = true;

    // Get the selected number of questions
    const questionCountInput = document.getElementById('question-count');
    maxQuestions = parseInt(questionCountInput.value);

    // Get the selected continent filters
    var continentCheckboxes = document.querySelectorAll('.form-check-input[id^="continent-"]');
    let enabledContinents = Array.from(continentCheckboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.id.split('-')[1]);

    // Update the game logic to use the new settings
    currentQuestionNumber = 1;
    startGame();

    // Log a message to the console
    console.log('Settings saved.');

    // Close the settings modal
    var settingsModal = bootstrap.Modal.getInstance(document.getElementById('settings-modal'));
    settingsModal.hide();

    // Display the updated question count
    document.getElementById('question-counter').textContent = `Question count: ${questionCount}`;

});

// Add event listeners to the continent checkboxes and question count input
continentCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function () {
        // Log a message to the console
        console.log('Settings changed.');
    });
});

questionCountInput.addEventListener('input', function () {
    // Log a message to the console
    console.log('Settings changed.');
});

// Add event listeners to the continent checkboxes and question count input
continentCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', enableSaveButton);
});

questionCountInput.addEventListener('input', enableSaveButton);

// Function to enable the save button
function enableSaveButton() {
    saveSettingsButton.disabled = false;
}


