//global constants for dependencies
const inquirer = require('inquirer');
const fs = require('fs');
const template = require('./src/pageTemplate');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// create variables to hold questions for Manager, Engineer, Interns (each has their own variable)
  // Manager: ask for manager's name, id, email, office number
  // Engineer: ask for the engineer's name, email, and github username
  // Intern: ask for intern's name, email, and school

const managerQuestions = [
  //TODO: add validation to inputs
  {
    type: "input",
    name: "name",
    message: "Please enter the manager's name",
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
    // Engineer: ask for the engineer's name, email, and github username
    //TODO: add validation to inputs
  {
    type: "input",
    name: "name",
    message: "What is the engineer's name?"
  },
  {
    type: "input",
    name: "email",
    message: "What is their email address?"
  },
  {
    type: "input",
    name: "id",
    message: "What is their employee id?"
  },
  {
    type: "input",
    name: "githubUsername",
    message: "What is their GitHub username?"
  },
  {
    type: "list",
    name: "addEmployee",
    message: "Would you like to add more team members?",
    choices: ["Yes, add an Engineer.", "Yes, add an Intern", "No, not right now."]
  },
];

const internQuestions = [
    // Intern: ask for intern's name, email, and school
    //TODO: add validation to inputs
  {
    type: "input",
    name: "name",
    message: "What is their name?"
  },
  {
    type: "input",
    name: "email",
    message: "What is their email address?"
  },
  {
    type: "input",
    name: "id",
    message: "What is their employee id?"
  },
  {
    type: "input",
    name: "school",
    message: "What college did they attend?"
  },
  {
    type: "list",
    name: "addTeammate",
    message: "Would you like to add more team members?",
    choices: ["Yes, add an Engineer.", "Yes, add an Intern", "No, not right now."]
  }
];

//create a function to prompt questions for manager, engineer, and intern (each has their own function to manager prompts)
  //within each of these functions, add the answers to a responses object
  

   //TODO - add function to addManager();
const addManager = () => {
  inquirer
  .prompt(managerQuestions)
  .then(responses => {
    const manager = new Manager(responses.name, responses.id, responses.email, responses.officeNumber);
    if(!manager.teamMembers){
      manager.teamMembers = [];
    }
    if(responses.addTeammate === 'Yes, add an Engineer.') {
      addEngineer(manager);
    }
    if(responses.addTeammate === 'Yes, add an Intern.') {
      addIntern(manager);
    }
    else if(responses.addTeammate === 'No, not right now.') {
      createTeamProfile(manager);
    }
    console.log('responses from addManager', responses);
  });
};

   //TODO - add function to addEngineer();
const addEngineer = manager => {
  inquirer
  .prompt(engineerQuestions)
  .then(responses => {
    const intern = new Intern(responses.name, responses.id, responses.email, responses.school);
    manager.teamMembers.push(Intern);

    if(responses.addTeammate === 'Yes, add an Engineer.') {
      addEngineer(manager);
    }
    if(responses.addTeammate === 'Yes, add an Intern.') {
      addIntern(manager);
    }
    else if(responses.addTeammate === 'No, not right now.') {
      createTeamProfile(manager);
    }
    console.log('responses from addEngineer', responses);
  });
};

   //TODO - add function to addIntern();

   //TODO - add function to writeFile to html called createTeamProfile()

// writeFile team members to html -> generatePage()
  //lookup from last challenge how to do a write and copy because of css
// use bootstrap cards
// 

//function to init app
const init = () => {
  console.log("Welcome to the Team Profile Generator v0.1!");
  addManager();
};


// Function call to initialize app
init();