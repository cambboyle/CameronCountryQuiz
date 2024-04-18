<!-- omit from toc -->
# CameronCountryQuiz

[LIVE Site HERE](https://cambboyle.github.io/CameronCountryQuiz/)

This is a game I created aimed at testing players' knowledge of the flags of the world.

Built using **HTML**, **CSS** and **JavaScript**

![Am I Responsive](_)

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
  - [Style](#style)
  - [Images](#images)
  - [Wireframes](#wireframes)
- [Technology Used](#technology-used)
  - [Frameworks, Libraries & Programs Used](#frameworks-libraries--programs-used)
- [Testing](#testing)
  - [Manual Testing](#manual-testing)
  - [Automated Testing](#automated-testing)
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

  ![infoPanel](assets\images\readMe\infoPanel.png)
  
- Start Button
  - When clicked, game.html is loaded and the game starts.

### Quiz Page

- Question
  - Randomly generated from a selection of 3 questions: "What is the capital of this country?", "What country is this?" and "What continent is this country in?".

- Flag
  - Randomly selected using the REST Countries API, this works in hand with the answer choices so that the correct answer is always among the options.
  
- Answers Buttons
  - 1 answer is correct, the other 3 options are randomly selected from the REST Countries API.
  - If the script randomly picks the same answer twice, the script "re-rolls" until a non-duplicated option appears.
  
- Score Counter
  - Gives the user feedback as to how many questions they have answered correctly.
  
- Question Counter
  - Keeps track of the current question number and displays it out of how many the user has selected in the options modal (default is "out of 10").

- Correct Answer
  - Displays only if the question is answered wrong.
  - Let's the user know the correct answer, so at least they are learning something even if they answer wrong.

- Back Button
  - Takes the user back to the index.html (home menu).
  
- Options Button
  - Opens up the options modal for the user.
  
- End Game Pop-up
  - An alert that appears when the user has reached their maximum specified questions.
  - Displays the users' score and tells them the game is over.
  
- End Game Buttons
  - "Play Again" restarts the game and sets everything back to its default.
  - "Back to Menu" takes the user back to the main menu.
  
### Options Modal

- Question Number Slider
  - Lets the user determine how many questions they want in their quiz (Current maximum is 20).
  
- Save Changes Button
  - Saves the users' changes locally and applies them to the game.

### Planned Features

discuss possibilities for the future

#### Features That Didn't Make It

- attempted to add options menu html, got everything working but couldn't get save feature to work when page is refreshed/reloaded

### Completed Project

INSERT IMAGES OF SITE PAGES HERE

## Design Choices

The design of the project was made to be easy to navigate and to be as minimal as possible, to get the user into the game as soon as possible

### Fonts

The font I chose for this project was...

### Icons

Icons

### Colouring

colouring or lack thereof

### Style

rounded transparent boxes

### Images

the background image

### Wireframes

I decided to use Balsamiq for the wireframes for this project instead of Miro (used on last project), I used this because I wanted to try out different wireframing applications so I got a taste of everything.

I really liked using Balsamiq but I much prefer Miro as I feel there is more opportunity with Miro.

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

#### Test 2 - Settings Save

#### Test 3 - Screen Sizing

#### User Testing

### Automated Testing

#### Validation

##### HTML

##### CSS

##### Javascript

##### Lighthouse

### Bugs

#### Solved Bugs

- Timer issue, as rounds progress, timer gets quicker but is not intended.
  - Get rid of timer, add "rounds" instead

### Deployment

#### GitHub Pages

#### Local Clone

## Credits

- <https://www.youtube.com/watch?v=zUcc4vW-jsI>
- Background Photo by NASA on Unsplash
- REST Countries API Knowledge <https://www.dhiwise.com/post/a-comprehensive-guide-to-leveraging-the-rest-countries-api>

### Validation Credits
