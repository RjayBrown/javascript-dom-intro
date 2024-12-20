/*
JAVASCRIPT IN THE BROWSER (REVIEW)
----------------------------------

This project will cover:
  - Variables for DOM Elements
  - Event Listeners
  - Function Declarations (creating the function)
  - Function Calls (running the function)

******************************************/

/*
VARIABLES FOR STORING DOM ELEMENTS
----------------------------------

JavaScript allows you to build interactivity into your website by storing DOM elements in a variable for later use (see example below). You can name variables however you like, and it is standard practice to use descriptive names for the element for better readability.

NOTE: The string passed in as an argument must be formatted correctly or the element will not be assigned to the variable (see example below).

  - TAG => 'element'
  - CLASS => '.element'
  - ID => '#element'

const element = document.querySelector('.element')
  - The variale is storing the first DOM element that contains the 'element' class.


******************************************/

/* Create your DOM element variables below */

const element = document.querySelector('.element')





/*
EVENT LISTENERS
----------------

Adding event listeners to DOM elements gives you control over how the element responds to actions initiated by the user. These actions are the 'events' that you will use to add interactivity to a webpage.

element.addEventListener('click', test)

SEARCH & APPLY
  - Event Listener Event Types

MDN web docs are a great resource for learning more!

********************************************/

/* Add your event listeners below */

element.addEventListener('click', test)




/*
DECLARING THE FUNCTION
----------------------
When you create a function in JavaScript, it is known as a function declaration.

function test() {
  console.log('It Works!')
}

It can be helpful in development to create a function solely for testing the connection between the DOM element and the event listener. Using the example above, the test function will run when the element is clicked.

element.addEventListener('click', test)


Once the connection is established, you can create a new function for handling the event. Like variables, function names are typically descriptive of the operations being performed. You can use the test function below when working on the theme challenge and mini-project.

**********************************************/

/* Create (declare) your functions below */

function test() {
  console.log('It Works!')
}




/*
CALLING THE FUNCTION
--------------------
Calling a function is how JavaScript performs operations that are enclosed within the function's declaration. Please review the function call example below.

test()

If the function is called, it will run in the browser every time the page loads.

SEARCH & APPLY
  - localStorage.setItem()
  - localStorage.getItem()
  - localStorage.clear()


CHALLENGE HINT
  - The theme classes (light & dark) are already set up in the CSS file. You will need to use what you've learned to display the correct theme when the page loads.

**********************************************/

/* Call the functions you want to run when the page loads below */

test()