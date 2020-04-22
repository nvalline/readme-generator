function generateMarkdown(answers) {
    return `
# ${answers.projectName}

<img src="${answers.projectImage}" alt="" max-height="550px">

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

#### Technologies

- ![GitHub Top Language](https://img.shields.io/github/languages/top/${answers.githubUsername}/${answers.githubRepo})
- Technology List

[Back To The Top](#project-name)

---

## How To Use

${answers.projectHowTo}

[Back To The Top](#project-name)

---

#### Installation

${answers.projectInstall}

[Back To The Top](#project-name)

---

## Contributors

- ${answers.projectContributors}

[Back To The Top](#project-name)

---

## Tests

[Back To The Top](#project-name)

---

## Questions

[Back To The Top](#project-name)

---

## License

Copyright (c) [2020][nate valline]

[Back To The Top](#project-name)

---
    `;
}

module.exports = generateMarkdown;