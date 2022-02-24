// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

const tableOfContents = tableText => {
  if (!tableText) {
    return '';
  }
  return `
## Table of Contents
  `;
};

// TODO: Create a function to generate markdown for README
module.exports = function generateMarkdown(data) {
  const { table, ...header } = data;
  return `# ${header.title}

## Description

${header.description}
${tableOfContents(table)}
  `;
};

// module.exports = generateMarkdown;