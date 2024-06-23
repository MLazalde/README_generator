// TODO: Include packages needed for this application
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
// const questions =

inquirer
  .prompt([
    /* Pass your questions in here */
    {
      // Title of the Project
      type: "input",
      message: "What is the title of the project?",
      name: "title",
    },
    {
      // Description
      type: "input",
      message: "Give a description of the project:",
      name: "description",
    },
    {
      // Installation
      type: "list",
      message: "Would you like to include Installation instructions?",
      choices: ["No", "Yes"],
      name: "install",
    },
    {
      // Usage
      type: "input",
      message: "What is the usage for this app?",
      name: "usage",
    },
    {
      // License
      // Make this a list of options with Badge
      type: "list",
      message: "What license is being used?",
      choices: ["MIT", "other"],
      name: "license",
    },
    {
      // Contributing
      type: "input",
      message: "Please add any contributors:",
      name: "contributor",
    },
    {
      // Tests
      type: "list",
      message: "Are there any Tests you would like to add?",
      choices: ["No", "Yes"],
      name: 'tests',
    },
    {
      // Questions
      // Enter my GitHub username and create link to my GH profile
      type: "input",
      message: "Input your GitHub Username",
      name: "gitHub",
    },
    {
      // Enter my email address with instructions to reach me with additional questions
      type: "input",
      message: "Input your email address",
      name: "email",
    },
  ])
  .then((answers) => {
    return;
    // Use user feedback for... whatever!!
  });
//   .catch((error) => {
//     if (error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else went wrong
//     }
//   });

// // TODO: Create a function to write README file
// function fs.writeFile('README.md', generateMarkdown) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
