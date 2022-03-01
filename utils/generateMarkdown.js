// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

module.exports = function generateMarkdown(data) {
  const { table, license, contribution, tests, github, email, ...header } = data;

  const tableLicense = tableLicenseCheck => {
    if (!tableLicenseCheck) {
      return '';
    }
    return `
- [License](#license)`;
  };

  const tableContribution = tableContributionCheck => {
    if (!tableContributionCheck) {
      return '';
    }
    return `
- [Contribution](#contribution)`;
  };

  const tableTests = tableTestsCheck => {
    if (!tableTestsCheck) {
      return '';
    }
    return `
- [Tests](#tests)`;
  };

  const tableQuestions = (tableGithubCheck, tableEmailCheck) => {
    if (!tableGithubCheck && !tableEmailCheck) {
      return '';
    }
    return `
- [Questions](#questions)`;
  };

  const tableOfContents = tableText => {
    if (!tableText) {
      return '';
    }
    return `
## Table of Contents
  
- [Installation](#installation)
- [Usage](#usage)${tableLicense(license)}${tableContribution(contribution)}${tableTests(tests)}${tableQuestions(github, email)}
`;
  };

  const renderLicenseSection = renderLicense => {
    if (!renderLicense) {
      return '';
    }
    return `
## License
  
* ${license}
`;
  };

  const renderContributionSection = renderContribution => {
    if (!renderContribution) {
      return '';
    }
    return `
## Contribution

* ${contribution}
`;
  };

  const renderTestsSection = renderTests => {
    if (!renderTests) {
      return '';
    }
    return `
## Tests

* ${tests}    
`;
  };

  const renderQuestionsSection = (renderGithub, renderEmail) => {
    if (!renderGithub && !renderEmail) {
      return '';
    } else if (renderGithub && !renderEmail) {
      return `
## Questions
  
* https://github.com/${github}`;
    } else if (!renderGithub && renderEmail) {
      return `
## Questions
  
* You can reach me at ${email} with additional questions!`;
    } else {
      return `
## Questions
  
* https://github.com/${github}
* You can reach me at ${email} with additional questions!`;
    }
  };

  return `# ${header.title}

## Description

* ${header.description}
${tableOfContents(table)}
## Installation

* ${header.installation}

## Usage

* ${header.usage}
${renderLicenseSection(license)}${renderContributionSection(contribution)}${renderTestsSection(tests)}${renderQuestionsSection(github, email)}`;
};