// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string



function renderLicenseBadge(license) {
    console.log(license);
    var licenseMarkdown = "";  

    if (license == null || license == 'undefined') {
        return " ";
    } else {
        switch(license) {
            case 'MIT':
                licenseMarkdown = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
                break;
            case 'ISC':
                licenseMarkdown = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
                break;
            case 'MPL 2.0':
                licenseMarkdown = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
                break;
            case 'Apache 2.0':
                licenseMarkdown = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
                break;
        } 
    }
    return licenseMarkdown; 
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {
//     if (license == null  || license == 'undefined') { return " "; } else {

//     }
// }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license == null  || license == 'undefined') { return " "; } else {
        // TODO: Add code from lines 6-29 and modify it to say something similar to the following...

        // "This site is licensed under {license name goes here}. For more information, go to {license URL goes here}."
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    
  return `# ${data.titleName} ${renderLicenseBadge(data.licenseName)}

## Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [Questions](#questions)
7. [Liscense](#liscense)

## Description
  
${data.descName}

## Installation

${data.installName}

## Usage

${data.usageName}

## Contributing

${data.contrName}

## Tests

${data.testingName}

## Questions

My Github username: ${data.githubName}\n
My email address: ${data.githubEmail}

## License

${data.licenseName}

`;
}

// function renderTitle(title) {
//     return `\n# ${title}\n`;
// }

// function renderDescription(desc) {
//     return `\n## Description
    
//     ${desc}\n`;
// }

// function renderTOC(toc) {
//     return `\n## Table of Contents
    
//     ${toc}\n`;
// }

// function renderInstallation(inst) {
//     return `\n## Installation
    
//     ${inst}\n`;
// }

// function renderUsage(use) {
//     return `\n## Usage
    
//     ${use}\n`;
// }

// function renderContributing(contr) {
//     return `\n## Contributing
    
//     ${contr}\n`;
// }

// function renderTests(tes) {
//     return `\n## Tests
    
//     ${tes}\n`;
// }

// function renderQuestions(username, email) {
//     return `\n## Questions
    
//     My Github username: ${username}

//     My email address: ${email}\n`;
// }

module.exports = {
    generateMarkdown,
    // renderTitle,
    // renderDescription,
    // renderTOC,
    // renderInstallation,
    // renderUsage,
    // renderContributing,
    // renderTests,
    // renderQuestions,
}
