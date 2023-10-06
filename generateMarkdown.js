
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
            case 'None':
            default:
                licenseMarkdown = "";
                break;
        } 
    }
    return licenseMarkdown; 
}

function renderLicenseSection(license) {
        var licenseMarkdown = "";  
    if (license == null  || license == 'undefined') { return " "; } else {
        
        switch(license) {
            case 'MIT':
                licenseMarkdown = "This site is licensed under MIT. For more information, go to https://opensource.org/licenses/MIT.";
                break;
            case 'ISC':
                licenseMarkdown = "This site is licensed under ISC. For more information, go to https://opensource.org/licenses/ISC.";
                break;
            case 'MPL 2.0':
                licenseMarkdown = "This site is licensed under MPL 2.0. For more information, go to https://opensource.org/licenses/MPL-2.0.";
                break;
            case 'Apache 2.0':
                licenseMarkdown = "This site is licensed under Apache 2.0. For more information, go to https://opensource.org/licenses/Apache-2.0.";
                break;
            case 'None':
            default:
                licenseMarkdown = "This site isn't licensed under anything.";
        } 
    }
    return licenseMarkdown; 
}

function generateMarkdown(data) {
    
  return `# ${data.titleName} ${renderLicenseBadge(data.licenseName)}

## Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [Questions](#questions)
7. [License](#license)

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

${renderLicenseSection(data.licenseName)}

`;
}

module.exports = {
    generateMarkdown,
}
