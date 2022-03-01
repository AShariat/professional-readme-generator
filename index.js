const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

const questions = ["What is your project's title? (Required)", "Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide: What was your motivation? Why did you build this project? What problem does it solve? What did you learn? (Required)", "Would you like to add Table of Contents for this project?", "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.", "Provide instructions and examples for use.", "Choose a license for your project. If you need help choosing a license, refer to https://choosealicense.com.", "If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. https://www.contributor-covenant.org is an industry standard, but you can always write your own if you'd prefer.", "Go the extra mile and write tests for your application. Then provide examples on how to run them here.", "Provide your GitHub username.", "Provide your email address."];

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
    },
    {
      type: 'input',
      name: 'usage',
      message: questions[4],
    },
    {
      type: 'input',
      name: 'license',
      message: questions[5],
    },
    {
      type: 'input',
      name: 'contribution',
      message: questions[6],
    },
    {
      type: 'input',
      name: 'tests',
      message: questions[7],
    },
    {
      type: 'input',
      name: 'github',
      message: questions[8],
    },
    {
      type: 'input',
      name: 'email',
      message: questions[9],
    }
  ])
  .then(readmeData => {
    return readmeData;
  });
};

function writeToFile(fileName, data) {
  fs.writeFile('./dist/'+fileName+'.md', data, err => {
    if (err) throw err;
    console.log("Readme complete!");
  });
};

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

init();