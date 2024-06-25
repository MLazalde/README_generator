// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (`${answers.license}` === "none") {
    return [];
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
# ${answers.title}

## Description

${answers.description}

## Table of Contents (

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${answers.install}

## Usage

${answers.usage}

## License

![GitHub License](https://img.shields.io/badge/license-${answers.license}-blue.svg)

https://img.shields.io/badge/license-${}-blue.svg

${answers.license}

## Contributing

${answers.contributor}

## Tests

${answers.tests}

## Questions

GitHub Repository: [GitHub](${answers.gitHub}) /n
If you have any questions, please email me at ${answers.email}.

`;
}
// # ${answers.title}
module.exports = generateMarkdown;
