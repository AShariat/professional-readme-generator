// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = ["What is your project's title? (Required)", "Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide: What was your motivation? Why did you build this project? What problem does it solve? What did you learn? (Required)", "Would you like to add Table of Contents for this project? (Optional)", "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running. (Required)"];

const promptQuestions = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: questions[0],
      validate: titleInput => {
        if (titleInput) {
          return true;
        } else {
          console.log("Please enter your project's title!");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'description',
      message: questions[1],
      validate: descriptionInput => {
        if (descriptionInput) {
          return true;
        } else {
          console.log("Please enter your project's description!");
          return false;
        }
      }
    },
    {
      type: 'confirm',
      name: 'table',
      message: questions[2],
      default: true
    },
    {
      type: 'input',
      name: 'installation',
      message: questions[3],
      validate: installationInput => {
        if (installationInput) {
          return true;
        } else {
          console.log("Please enter your project's description!");
          return false;
        }
      }
    }
  ])
  .then(readmeData => {
    return readmeData;
  });
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile('./dist/'+fileName+'.md', data, err => {
    if (err) throw err;
    console.log("Readme complete!");
  });
};

// TODO: Create a function to initialize app
function init() {
  promptQuestions()
  .then(readmeData => {
    return generateMarkdown(readmeData);
  })
  .then(file => {
    return writeToFile('README', file);
  })
  .catch(err => {
    console.log(err);
  });
};

// Function call to initialize app
init();