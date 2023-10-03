// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license == null) { return " "; } else {

    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license == null) { return " "; } else {

    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license == null) { return " "; } else {

    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
//   return `# ${data.title}
    return "here";
// `;
}

function renderTitle(title) {
    return `# ${title}\n`;
}

function renderDescription(desc) {
    return `\n## Description
    
    ${desc}\n`;
}

function renderTOC(toc) {
    return `\n## Table of Contents
    
    ${toc}\n`;
}

function renderInstallation(inst) {
    return `\n##Installation
    
    ${inst}\n`;
}

function renderUsage(use) {
    return `\n##Usage
    
    ${use}\n`;
}

function renderContributing(contr) {
    return `\n##Contributing
    
    ${contr}\n`;
}

function renderTests(tes) {
    return `\n##Tests
    
    ${tes}\n`;
}

function renderQuestions(quest) {
    return `\n##Questions
    
    ${quest}\n`;
}

module.exports = {
    generateMarkdown,
    renderTitle,
    renderDescription,
    renderTOC,
    renderInstallation,
    renderUsage,
    renderContributing,
    renderTests,
    renderQuestions,
}
