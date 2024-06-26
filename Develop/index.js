// TODO: Include packages needed for this application
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input

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
      message: "Please include Installation instructions:",
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
      choices: ["None", "MIT License", "Apache License 2.0", "other"],
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
      name: "tests",
    },
    {
      // Questions
      // Enter my GitHub username and create link to my GH profile
      type: "input",
      message: "Input your GitHub Repository",
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
    let data = generateMarkdown(answers);
    fs.writeFile("README.md", data, (err) => {
      err ? console.log(err) : console.log("Your README.md has been generated");
    });
  });

//   .catch((error) => {
//     if (error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else went wrong
//     }
//   });

// TODO: Create a function to write README file
// function init() {
//   fs.writeFile("README.md", data, (err) => {
//     err ? console.log(Err) : console.log("Your README.md has been generated");
//   });
// }

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
