// TODO: Include packages needed for this application
const inquire = require('inquirer');
const fs = require('fs');
 const gM = require('./generateMarkdown');
// TODO: Create an array of questions for user input

var titleAnswer;

inquire.prompt([
    {
        type: 'input',
        message: 'What is the title?',
        name: 'titleName'
    },
    {
        type: 'input',
        message: 'What is the description?',
        name: 'descName'
    },
    {
        type: 'input',
        message: 'What is the usage?',
        name: 'usageName'
    },
    {
        type: 'input',
        message: 'What are the installation instructions?',
        name: 'installName'
    },
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'githubName'
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'githubEmail'
    },
    {
        type: 'list',
        message: 'What liscense do you want?',
        name: 'liscenseName',
        choices: [
            'MIT',
            'ISC',
            'MPL 2.0',
            'Apache 2.0'
        ]
    }
]).then((response) => {
       response !== null || response == "undefined"
       ? (titleAnswer = response.titleName)
       : console.log("Error of unknown origin has appeared.");
        if (response) {
            console.log(response);
            fs.writeFile("README.md", "", (err) => err ? console.error(err) : console.log('README cleared.') );
            // appendToFile("README.md", JSON.stringify(response));
            appendToFile("README.md", gM.generateMarkdown(response));
        }
    }
    );

// TODO: Create a function to write README file
function appendToFile(fileName, data) {
    fs.appendFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Success!')
    );
}

// TODO: Create a function to initialize app
function init() {
    
}

// Function call to initialize app
init();
