// Generate Markdown
function generateMarkdown(answers) {
    return `
# ${answers.projectName}

<img src="./assets/img/${answers.projectImage}" alt="Project Screenshot" max-height="550px">

> ${answers.projectBlurb}

#### [View The Site](${answers.siteURL})

<!-- Badge(s) Here -->

---

### Table of Contents

Your section headers will be used to reference location of destination.

- [Description](#description)
- [Technologies](#technologies)
- [How To Use](#how-to-use)
- [Installation](#installation)
- [Contributors](#contributors)
- [Test(s)](#tests)
- [Questions](#questions)
- [License](#license)

---

## Description

${answers.projectDescription}

[Back To The Top](#project-name)

---

## Technologies

![GitHub Top Language](https://img.shields.io/github/languages/top/${answers.githubUsername}/${answers.githubRepo})
- ${answers.projectTech}

[Back To The Top](#project-name)

---

## How To Use

${answers.projectHowTo}

[Back To The Top](#project-name)

---

## Installation

${answers.projectInstall}

#### [View The Site](${answers.siteURL})

[Back To The Top](#project-name)

---

## Contributors

- ${answers.projectContributors}

[Back To The Top](#project-name)

---

## Tests

${answers.projectTest}

[Back To The Top](#project-name)

---

## Questions

Please contact the following.

Github Profile Pic

- ${answers.userEmail}

[Back To The Top](#project-name)

---

## License

Copyright (c) [2020][nate valline]

[Back To The Top](#project-name)

---
    `;
}

module.exports = generateMarkdown;