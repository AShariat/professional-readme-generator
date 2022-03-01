function renderLicenseBadge(license) {
  const replacedSpacesLicense = license.replaceAll(" ", "%20");
  if (license == 'None') {
    return '';
  }
  return `
![](https://img.shields.io/badge/License-${replacedSpacesLicense}-blue)
`;
};

function renderLicenseSection(license) {
  if (license == 'None') {
    return '';
  }
  return `
## License

This Application Is Licensed Under ***${license}***
`;
};

module.exports = function generateMarkdown(data) {
  const { table, installation, usage, contribution, tests, github, email, ...header } = data;

  const tableInstallation = tableInstallationCheck => {
    if (!tableInstallationCheck) {
      return '';
    }
    return `
- [Installation](#installation)`;
  };

  const tableUsage = tableUsageCheck => {
    if (!tableUsageCheck) {
      return '';
    }
    return `
- [Usage](#usage)`;
  };

  const tableLicense = tableLicenseCheck => {
    if (tableLicenseCheck == 'None') {
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
    if (!tableText || (!installation && !usage && !contribution && !tests && !github && !email)) {
      return '';
    }
    return `
## Table of Contents
${tableInstallation(installation)}${tableUsage(usage)}${tableLicense(header.license)}${tableContribution(contribution)}${tableTests(tests)}${tableQuestions(github, email)}
`;
  };

  const renderInstallationSection = renderInstallation => {
    if (!renderInstallation) {
      return '';
    }
    return `
## Installation

${installation}
`;
  };

  const renderUsageSection = renderUsage => {
    if (!renderUsage) {
      return '';
    }
    return `
## Usage

${usage}
`;
  };

  const renderContributionSection = renderContribution => {
    if (!renderContribution) {
      return '';
    }
    return `
## Contribution

${contribution}
`;
  };

  const renderTestsSection = renderTests => {
    if (!renderTests) {
      return '';
    }
    return `
## Tests

${tests}    
`;
  };

  const renderQuestionsSection = (renderGithub, renderEmail) => {
    if (!renderGithub && !renderEmail) {
      return '';
    } else if (renderGithub && !renderEmail) {
      return `
## Questions
  
[GitHub](https://github.com/${github}/)`;
    } else if (!renderGithub && renderEmail) {
      return `
## Questions
  
You can reach me at ${email} with additional questions!`;
    } else {
      return `
## Questions
  
[GitHub](https://github.com/${github}/)
You can reach me at ${email} with additional questions!`;
    }
  };

  return `# ${header.title}
${renderLicenseBadge(header.license)}
## Description

${header.description}
${tableOfContents(table)}${renderInstallationSection(installation)}${renderUsageSection(usage)}${renderLicenseSection(header.license)}${renderContributionSection(contribution)}${renderTestsSection(tests)}${renderQuestionsSection(github, email)}`;
};