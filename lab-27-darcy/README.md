# Lab 27:  Forms & Props

### Author: Darcy Knore

### Description:<br>
This project creates a simple Reddit Search Engine, using controlled inputs, and passing data from parent to child through props.  

<u>Project Features</u>:

App Component
  * Should contain all of the application state
  * Should contain methods for modifying the application state
  * The state should have a topics array for holding the results of the search

SearchForm Component
  * Should contain a text input for the user to supply a reddit board to look up
  * Should contain a number input for the user to limit the number of results to return. The number must be greater than 0 and less than 100
  * onSubmit the form should make a request to reddit
  * It should make a get request to http://www.reddit.com/r/${searchFormBoard}.json?limit=${searchFormLimit}
  * On success it should pass the results to the application state
  * On failure it should add a class to the form called error and turn the form's inputs borders red

SearchResultList Component
  * Should inherit all search results through props
  * If there are topics in the application state it should display the unordered list
  * Each list item in the unordered list should contain the following:
    - an anchor tag with a href to the topic.url
    - inside the anchor a heading tag with the topic.title
    - inside the anchor a p tag with the number of topic.ups

### Architecture:
This project uses javascript, React, Node, and SASS.  With fellow developers in mind, the application layout was thoughtfully organized, easy to read, and able to be executed efficiently.

### Getting Started:
Simply clone this repository to your local environment and run the following npm commands:
- npm install
- npm run build

### Change Log
This application has not been launched.
