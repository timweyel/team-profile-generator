//global constants for dependencies
const inquirer = require('inquirer');
const fs = require('fs');
const template = require('./src/pageTemplate');

// initialize an inquirer prompt
// ask for the team manager's name, emp ID, email, and office #
  // .then assign these answers to variables  
  // push these variables to an array
// call the next function which prompts with a list and if they want to 
  // add more team members.
  // .then select to add an engineer, add an intern, or that the team is complete(if complete, proceed to write html)

// Engineer: ask for the engineer's name, email, and github username
  // .then assign answers to variables
  // push these variables to an array

// Intern: ask for intern's name, email, and school
  // .then assign these answers to variables
  // push these variables to an array

// write team members to html -> generatePage()
// use bootstrap cards
// 

function welcomeMessage() {
  inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Welcome to the Team Profile Generator v0.1! Please enter your manager's name",
    },
    {
      type: "number",
      name: "id",
      message: "What is your manager's employee ID?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your manager's email address?",
      //TODO: cleanup this UX - how to clear input after submission?
      // credit to: https://gist.github.com/Amitabh-K/ae073eea3d5207efaddffde19b1618e8
      default: () => {},
      validate: function (email) {

          valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)

          if (valid) {
            // console.log("Great job");
              return true;
          } else {
              console.log(".  Please enter a valid email")
              return false;
          }
        // end credit
        }
    },
    {
      type: "number",
      name: "officeNumber",
      message: "What is your manager's office number?"
    }
  ])
  .then(employeeData => {
    console.log(employeeData);
    addEmployees();
  });
};

function addEmployees() {
  inquirer.prompt([
    {
      type: "list",
      name: "addEmployee",
      message: "Would you like to add more team members?",
      choices: ["Yes, add an Engineer.", "Yes, add an Intern", "No, not right now."]
    },
  ])
  .then(function(employeeData) {
    switch(employeeData.addEmployee) {
      case "Yes, add an Engineer":
        //TODO - add function to addEngineer();
        addEngineer();
        break;

      case "Yes, add an Intern":
        //TODO - add function to addIntern();
        addIntern();
        break;
      
      case "No, not right now":
        //TODO - add function to write to html called createTeamProfile()
        createTeamProfile();
    }
  });
}





// //function to init app
// function init() {
  welcomeMessage();
// };


// // Function call to initialize app
// init();