//global constants for dependencies
const inquirer = require('inquirer');
const fs = require('fs');
const template = require('./src/pageTemplate');

// initialize an inquirer prompt
// create variables to hold questions for Manager, Engineer, Interns (each has their own variable)
  // Manager: ask for manager's name, id, email, office number
  // Engineer: ask for the engineer's name, email, and github username
  // Intern: ask for intern's name, email, and school

//create a function to prompt questions for manager, engineer, and intern (each has their own function to manager prompts)
  //within each of these functions, add the answers to a responses object
  
// writeFile team members to html -> generatePage()
  //lookup from last challenge how to do a write and copy because of css
// use bootstrap cards
// 

//TODO: add validation to inputs

const managerQuestions = [
    {
      type: "input",
      name: "name",
      message: "Welcome to the Team Profile Generator v0.1! Please enter the manager's name",
    },
    {
      type: "number",
      name: "id",
      message: "What is the manager's employee ID?",
    },
    {
      type: "input",
      name: "email",
      message: "What is the manager's email address?",
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
      message: "What is the manager's office number?"
    },
    {
      type: "list",
      name: "addEmployee",
      message: "Would you like to add more team members?",
      choices: ["Yes, add an Engineer.", "Yes, add an Intern", "No, not right now."]
    },
  ];

  const engineerQuestions = [

  ]
// function addEmployees() {
//   inquirer.prompt([
//     {
//       type: "list",
//       name: "addEmployee",
//       message: "Would you like to add more team members?",
//       choices: ["Yes, add an Engineer.", "Yes, add an Intern", "No, not right now."]
//     },
//   ])
//   .then(function(employeeData) {
//     switch(employeeData.addEmployee) {
//       case "Yes, add an Engineer":
//         //TODO - add function to addEngineer();
//         addEngineer();
//         break;

//       case "Yes, add an Intern":
//         //TODO - add function to addIntern();
//         addIntern();
//         break;
      
//       case "No, not right now":
//         //TODO - add function to write to html called createTeamProfile()
//         createTeamProfile();
//     }
//   });
// }





// //function to init app
// function init() {
  welcomeMessage();
// };


// // Function call to initialize app
// init();