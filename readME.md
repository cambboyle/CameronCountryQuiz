<!-- omit from toc -->
# CameronCountryQuiz

[LIVE Site HERE](https://cambboyle.github.io/CameronCountryQuiz/)

This is a game I created aimed at testing players' knowledge of the flags of the world.

Built using **HTML**, **CSS** and **JavaScript**

![Am I Responsive](https://github.com/cambboyle/CameronCountryQuiz/blob/main/assets/images/readMe/AMIRESPONSIVE.png)

## Table of Contents

- [User Experience](#user-experience)
  - [User Stories](#user-stories)
    - [User Goals](#user-goals)
  - [Project Goals](#project-goals)
  - [Developer Goals](#developer-goals)
- [Features](#features)
  - [Planned Features](#planned-features)
    - [Features That Didn't Make It](#features-that-didnt-make-it)
  - [Completed Project](#completed-project)
- [Design Choices](#design-choices)
  - [Fonts](#fonts)
  - [Icons](#icons)
  - [Colouring](#colouring)
  - [Wireframes](#wireframes)
- [Technology Used](#technology-used)
  - [Frameworks, Libraries & Programs Used](#frameworks-libraries--programs-used)
- [Testing](#testing)
  - [Manual Testing](#manual-testing)
    - [Validation](#validation)
      - [HTML](#html)
      - [CSS](#css)
      - [Javascript](#javascript)
      - [Lighthouse](#lighthouse)
  - [Bugs](#bugs)
    - [Solved Bugs](#solved-bugs)
  - [Deployment](#deployment)
    - [GitHub Pages](#github-pages)
    - [Local Clone](#local-clone)
- [Credits](#credits)
  - [Validation Credits](#validation-credits)

## User Experience

### User Stories

#### User Goals

- Challenge themselves or challenge friends on the knowledge of flags & countries
- Change settings to customise their experience
- Replay the quiz as many times as they want

Here is a quick example of how I want the user flow to look like, it is simple but there isn't much else to do in the game.

![userFlow](https://github.com/cambboyle/CameronCountryQuiz/blob/main/assets/images/readMe/UserFlow_WF.png)

##### First Time Visitor

1. As a first time visitor, I want to learn more about flags, countries and their capitals.
2. As a first time visitor, I want the instructions of the quiz to be clear.
3. As a first time visitor, I want to tailor my experience to my liking.

##### Returning Visitor

1. As a returning visitor, I want to replay the quiz and attempt to beat my high score.
2. As a returning visitor, I want to further my learning of flags, countries and their capitals.

##### Frequent Visitor

1. As a frequent visitor, I want to change my settings to allow for a harder quiz.

### Project Goals

My main goal for this project was to create a educative quiz for users to expand and test their knowledge on the flags of the world

My target audience for this project is anyone who likes learning, flags or challenging themselves or friends.

### Developer Goals

- Easy to navigate UI
- A professional, fun looking game built using JS, HTML and CSS
- A project where I can add more questions and settings in the future if I desire

## Features

### Main Menu

- Information Panel
  - Title, Author and a short summary of the game.

![infoPanel](https://github.com/cambboyle/CameronCountryQuiz/blob/main/assets/images/readMe/infoPanel.png)
  
- Start Button
  - When clicked, game.html is loaded and the game starts.

![startQuizButton](https://github.com/cambboyle/CameronCountryQuiz/blob/main/assets/images/readMe/startQuizButton.png)

### Quiz Page

- Question
  - Randomly generated from a selection of 3 questions: "What is the capital of this country?", "What country is this?" and "What continent is this country in?".
![question](https://github.com/cambboyle/CameronCountryQuiz/blob/main/assets/images/readMe/startQuizButton.png)

- Flag
  - Randomly selected using the REST Countries API, this works in hand with the answer choices so that the correct answer is always among the options.

![flag](https://github.com/cambboyle/CameronCountryQuiz/blob/main/assets/images/readMe/flag.png)
  
- Answers Buttons
  - 1 answer is correct, the other 3 options are randomly selected from the REST Countries API.
  - If the script randomly picks the same answer twice, the script "re-rolls" until a non-duplicated option appears.

![answerButtons](https://github.com/cambboyle/CameronCountryQuiz/blob/main/assets/images/readMe/answerButtons.png)
  
- Score Counter
  - Gives the user feedback as to how many questions they have answered correctly.

![scoreCounter](https://github.com/cambboyle/CameronCountryQuiz/blob/main/assets/images/readMe/scoreCounter.png)

- Question Counter
  - Keeps track of the current question number and displays it out of how many the user has selected in the options modal (default is "out of 10").

![questionCounter](https://github.com/cambboyle/CameronCountryQuiz/blob/main/assets/images/readMe/questionCounter.png)

- Correct Answer
  - Displays only if the question is answered wrong.
  - Let's the user know the correct answer, so at least they are learning something even if they answer wrong.

![correctAnswer](https://github.com/cambboyle/CameronCountryQuiz/blob/main/assets/images/readMe/correctAnswer.png)

- Back Button
  - Takes the user back to the index.html (home menu).

![backButton](https://github.com/cambboyle/CameronCountryQuiz/blob/main/assets/images/readMe/backButton.png)

- Options Button
  - Opens up the options modal for the user.

![settingsButton](https://github.com/cambboyle/CameronCountryQuiz/blob/main/assets/images/readMe/settingsButton.png)

- End Game Pop-up
  - An alert that appears when the user has reached their maximum specified questions.
  - Displays the users' score and tells them the game is over.

![endGamePopUp](https://github.com/cambboyle/CameronCountryQuiz/blob/main/assets/images/readMe/endGamePopUp.png)

- End Game Buttons
  - "Play Again" restarts the game and sets everything back to its default.
  - "Back to Menu" takes the user back to the main menu.

![endGameButtons](https://github.com/cambboyle/CameronCountryQuiz/blob/main/assets/images/readMe/endGameButtons.png)

### Options Modal

- Modal
![optionsModal](https://github.com/cambboyle/CameronCountryQuiz/blob/main/assets/images/readMe/optionModal.png)

- Question Number Slider
  - Lets the user determine how many questions they want in their quiz (Current maximum is 20).

![questionSlider](https://github.com/cambboyle/CameronCountryQuiz/blob/main/assets/images/readMe/questionSlider.png)

- Save Changes Button
  - Saves the users' changes locally and applies them to the game.

![saveButton](https://github.com/cambboyle/CameronCountryQuiz/blob/main/assets/images/readMe/saveButton.png)

### Planned Features

Different types of questions, for example presenting the user with a silhouette of a random country, and they get to choose between four answers.

I'd also like to branch out into other geography based topics, like wonders of the world, mountain ranges and rivers etc.

Another feature I would like to add in the future is to have a leaderboard, or groups where the user can compete with their friends or on a worldwide scale.

#### Features That Didn't Make It

- I attempted to add options menu html, got everything working but couldn't get save feature to work when page is refreshed/reloaded. Instead added the modal for the options in the game.html page. This way users' settings can be saved on the page itself instead of having to use more advanced local storage.

### Completed Project

Main Menu

![Main Page](https://github.com/cambboyle/CameronCountryQuiz/blob/main/assets/images/readMe/mainPage.jpg)

Game Page

![Game Page](https://github.com/cambboyle/CameronCountryQuiz/blob/main/assets/images/readMe/gamePage.jpg)

![with Menu](https://github.com/cambboyle/CameronCountryQuiz/blob/main/assets/images/readMe/gamePageWSettings.jpg)

I opted to not customise the bootstrap for the options modal because I want it to stand out compared to the main game and the background.

## Design Choices

The design of the project was made to be easy to navigate and to be as minimal as possible, to get the user into the game as quick as they can.

### Fonts

I chose to use Montserrat from google Fonts for the font of the site, I used this one for my last project but I really enjoy the font and I think it works really well with the minimal aesthetic I'm going for.

### Icons

I used two icons in this project, both from Font Awesome. The cog for the settings and the left facing arrow for the back button. I used these as they are globally recognised for their purpose.

### Colouring

I chose to not use a lot of colour in this project. Most of the UI is transparent black with a white border, this choice mixes well with the background image I used which is a space picture of the Earth.

### Wireframes

I decided to use Balsamiq for the wireframes for this project instead of Miro (used on last project), I used this because I wanted to try out different wireframing applications so I got a taste of everything.

I really liked using Balsamiq but I much prefer Miro as I feel there is more opportunity with Miro.

![landingPageWF](https://github.com/cambboyle/CameronCountryQuiz/blob/main/assets/images/readMe/Landing_WF.png)
![questionWF](https://github.com/cambboyle/CameronCountryQuiz/blob/main/assets/images/readMe/Question_WF.png)
![optionsOld](https://github.com/cambboyle/CameronCountryQuiz/blob/main/assets/images/readMe/OptionsOLD_WF.png)
![optionsModal](https://github.com/cambboyle/CameronCountryQuiz/blob/main/assets/images/readMe/Modal_WF.png)

## Technology Used

- HTML5
- CSS3
- JavaScript

### Frameworks, Libraries & Programs Used

- VS Code
- Git
- GitHub
- Google Fonts
- Bootstrap 5.3
- MD Bootstrap
- Am I Responsive
- Balsamiq
- JQuery

- Rest Countries API 3.1

## Testing

----

I opted to use mostly manual testing on my site as opposed to JEST or any full automated testing. This is because I thought that my project was a bit too small to require any automated tests.

I tested the game on different browsers, devices and had multiple users test my game manually.

### Manual Testing

#### Test 1 - Full Game

Expected:  On loading the page, the user reads the brief information, clicks start quiz, answers their questions and click play again or back to menu when the game is over.

Test: Follow the expected user flow.

Result: Flow is successful as expected, the user can successfully replay the game at the end.

#### Test 2 - Settings Save

Expected: When the user is in the game menu, they can open the settings modal, change the amount of questions they desire and close the modal. Seeing that the game has updated to fit their specified settings.

Test: User changes settings and continues their game with their new settings.

Result: Successful user interaction with settings, choices are saved and game is updated when the modal is closed.

#### Test 3 - Screen Sizing

Expected: Mobile and Tablet devices are responsive and no issues are found.

Test: Loading the game on a mobile device and a tablet and testing the game functions, responsiveness and flow.

Result: Working as expected, no faults on mobile or tablet browsers. This is visible in the AmIResponsive screenshot.

#### Validation

##### HTML

![HTML](https://github.com/cambboyle/CameronCountryQuiz/blob/main/assets/images/readMe/HTMLValidation.png)

##### CSS

![CSS](https://github.com/cambboyle/CameronCountryQuiz/blob/main/assets/images/readMe/CSSValidation.png)

##### Javascript

![JS](https://github.com/cambboyle/CameronCountryQuiz/blob/main/assets/images/readMe/JSHintResults.png)

##### Lighthouse

![LighthouseDesktop](https://github.com/cambboyle/CameronCountryQuiz/blob/main/assets/images/readMe/LighthouseDesktop.png)

![LighthouseMobile](https://github.com/cambboyle/CameronCountryQuiz/blob/main/assets/images/readMe/LighthouseMobile.png)

### Bugs

#### Solved Bugs

- Timer issue, as rounds progress, timer gets quicker but is not intended.
  - Get rid of timer, add "rounds" instead
 
- Options.html didn't save settings when page was refreshed or new page was loaded.
    - Fixed by implementing the Bootstrap Modal that contained options for the game on the game.html page.

### Deployment

This project was made with VSCode, where I committed and pushed using Git to GitHub.

#### GitHub Pages

I deployed the page to GitHub pages from my GitHub repository. These were the steps I took to do this:

1. Logged in to GitHub.
2. Selected **cambboyle/CameronCountryQuiz** from the list of repositories.
3. Clicked on the repo's settings.
4. Scrolled down and selected the GitHub Pages tab.
5. In the source dropdown, keep it as "Deploy from a branch", then select "Master" from the branch dropdown.
6. Click Save, this should now start the build process for the site.

The development branch and Master branch are completely identical.

#### Local Clone

1. Follow this link to the [GitHub Repository](https://github.com/cambboyle/CameronCountryQuiz).
2. Click the green <> Code dropdown.
3. Copy the HTTPS URL for the repository.
4. In VSCode, open up the terminal.
5. Change the directory to where you want the cloned directory to be stored.
6. Type `git clone`, then the paste in the URL from the repo.
7. Press enter in the terminal and the clone should be made.

## Credits

Icons - <https://fontawesome.com>

Google Fonts - <https://fonts.google.com/?query=montserrat>

Extra notes and methods - <https://www.w3schools.com>

Bootstrap notes - <https://getbootstrap.com>

Bootstrap 5.3 Modal - <https://getbootstrap.com/docs/5.3/components/modal/>

Material design for bootstrap - <https://mdbootstrap.com>

Background image by NASA on Unsplash - <https://unsplash.com/photos/photo-of-outer-space-Q1p7bh3SHj8>

Getting an API using fetch() - <https://www.youtube.com/watch?v=zUcc4vW-jsI>

Learning Balsamiq - <https://www.youtube.com/@balsamiq>

REST Countries API - <https://restcountries.com>

REST Countries API Knowledge <https://www.dhiwise.com/post/a-comprehensive-guide-to-leveraging-the-rest-countries-api>

Answer Buttons same width using "btn-block" BS class - <https://forums.mobirise.com/discussion/22830/buttons-all-the-same-width>

Centering a div to screen <https://mdbootstrap.com/how-to/bootstrap/center-div-vertically-and-horizontally/>.

### Validation Credits

AmIResponsive - <https://ui.dev/amiresponsive?url=https%3A%2F%2Fbytes.dev>

HTML Validator - <https://validator.w3.org>

CSS Validator - <https://jigsaw.w3.org/css-validator/>

JSHint - <https://jshint.com>
