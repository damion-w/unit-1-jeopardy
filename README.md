# Jeopardy.Lite
Inspired by Jeopardy, the popular trivia game show.  More details can be found at their website, https://www.jeopardy.com/. 

## Introduction
The goal of this document is to provide an overview on the game I’m delivering for my Unit 1 project, Jeopardy.Lite.

Jeopardy.Lite is a trivia game where a “question” is given in the form of an answer and contestants must provide their “answers” in the form of a question.  For example, a “question” might be, “This person was the 44th president of the United States”, and the “answer” would be, “Who is Barack Obama?”.

3 players can play at a time.  The Jeopardy game board has 5 categories of questions, with 5 questions per category.  The player with the highest score wins.

## Technologies used
The game comprises 3 main components: game board, score panel, and question/answer panel.  All 3 are created using Flexbox technology.  The question/answer panel is implemented as a modal box, appearing “above” the gameboard.

## Approach taken
The high-level object is the gameBoard, which is an array that holds 6 CategoryAndQuestion classes, which represent the 6 columns on the game board.  The CategoryAndQuestion class comprises a name and array of 5 Question classes, which represent each question in a given category.  The Question class comprises a question string, answer, and amount of points a player gets/loses if they answer correctly/incorrectly.  Lastly, there is a Game class that holds game information, such as who’s turn it is and functions for determining if a game is over.

# User Stories
1. As a user, I can see categories and questions I can answer in order to get points
1. As a user, I can select a cell and see a question.
1. As a user, I can attempt to answer a question I’ve selected.
1. As a user, I can receive points when I’ve answered a question correctly
1. As a user, I can lose point when I’ve answered a question incorrectly
1. As a user, I can see who has won the game

## Wireframes
### Game board
![Game board](/img/wireframe-gameboard.png)

### Question/answer panel
![Question/answer panel](/img/wireframe-question-answer-panel.png)

## Instructions
1. Click a question cell.
1. Attempt to answer the question that appears.  Type response in textbox.
  1. If the answer is correct, you’ll receive the points that are in the question cell clicked in #1.  Take another turn.
  1. If the answer is not correct, you’ll lose the points that are in the question cell clicked in #1.  It is the next player’s turn (denoted by the white border on the players question/answer column in the panel.
1. Repeat until all questions have been attempted.
1. The winner is displayed once the last question is attempted.

## Unsolved Problems
No unsolved problems, but here’s a list of things I wanted to do but ended up cutting due to running out of time:
1. Timer for answering a question
1. Displaying messages to players using something more elegant than an alert
1. Allow players to enter their name
1. Add round 2 and final Jeopardy round
1. Add additional categories
1. Add sound effects
1. Implement system where points a player can get for a correct answer decreases based on how long they take to answer the question
