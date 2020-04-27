// Generate Markdown
function generateMarkdown(answers, userImage, siteLive, currentYear) {
    return `
# ${answers.projectName}

<img src="./assets/img/${answers.projectImage}" alt="Project Screenshot" max-height="550px">

> ${answers.projectBlurb}

#### [View The Site](${answers.siteURL}) - ${siteLive}

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

![GitHub Top Language](https://img.shields.io/github/languages/top/${answers.githubUsername}/${answers.githubRepo}) ![GitHub language count](https://img.shields.io/github/languages/count/${answers.githubUsername}/${answers.githubRepo})

- ${answers.projectTech}

[Back To The Top](#project-name)

---

## How To Use

${answers.projectHowTo}

[Back To The Top](#project-name)

---

## Installation

${answers.projectInstall}

#### [View The Site](${answers.siteURL}) - ${siteLive}

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

Please contact the following for any questions.

<img src="${userImage}" alt="User Image" width="50px">

- ${answers.userEmail}

[Back To The Top](#project-name)

---

## License

MIT License

Copyright (c) ${currentYear} ${answers.userName}

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

[Back To The Top](#project-name)

---
    `;
}

module.exports = generateMarkdown;