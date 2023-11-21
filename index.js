// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use this application?'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'How can others contribute to your project?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What are the test instructions?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None']
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:'
    }
];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Successfully created README.md!')
    );
}

// Function to generate markdown for README
function generateMarkdown(response) {
    // Here you'll format the README based on the user responses
    // Placeholder for README content
    return `# ${response.title}
    
## Description
${response.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation
${response.installation}

## Usage
${response.usage}

## Contributing
${response.contribution}

## Tests
${response.tests}

## License
${response.license === 'None' ? 'This project is not licensed.' : `This project is licensed under the ${response.license} license.`}

## Questions
For any questions, please contact me at [${response.email}](mailto:${response.email}).
GitHub: [${response.github}](https://github.com/${response.github})
`;
}

// Function to initialize app
function init() {
    inquirer.prompt(questions).then((response) => {
        const READMEContent = generateMarkdown(response);
        writeToFile('README.md', READMEContent);
    });
}

// Function call to initialize app
init();
