// TODO: Include packages needed for this application
const inquire = require('inquirer');
const fs = require('fs');
const gM = require('generateMarkdown');
// TODO: Create an array of questions for user input


var titleAnswer;

inquire.prompt([
    {
        type: 'input',
        message: 'What is the title?',
        name: 'titleName'
    }
]).then(response =>
       response !== null 
       ? titleAnswer = response.titleName
       : console.log("Error of unknown origin has appeared.")
    );

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Success!')
    );
}

// TODO: Create a function to initialize app
function init() {
    writeToFile('README.md', "# " + titleAnswer);
}

// Function call to initialize app
init();
