// Prompt User for Data
const inquirer = require('inquirer');

function promptUser() {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is your full name?',
            name: 'userName'
        },
        // {
        //     type: 'input',
        //     message: 'What is your Github username?',
        //     name: 'githubUsername'
        // },
        // {
        //     type: 'input',
        //     message: 'What is your contact email?',
        //     name: 'userEmail'
        // },
        // {
        //     type: 'input',
        //     message: 'What is the name of your Github repo?',
        //     name: 'githubRepo'
        // },
        // {
        //     type: 'input',
        //     message: 'Enter project name.',
        //     name: 'projectName'
        // },
        // {
        //     type: 'input',
        //     message: 'Enter project image file name with extension (saved in "img" folder)',
        //     name: 'projectImage'
        // },
        // {
        //     type: 'input',
        //     message: 'Enter a short project blurb.',
        //     name: 'projectBlurb'
        // },
        // {
        //     type: 'confirm',
        //     message: 'Is the project live?',
        //     name: 'projectLive'
        // },
        // {
        //     type: 'input',
        //     message: 'Enter the live site URL.',
        //     name: 'siteURL',
        //     when: function (answers) {
        //         return answers.projectLive;
        //     }
        // },
        // {
        //     type: 'input',
        //     message: 'Enter the project description.',
        //     name: 'projectDescription'
        // },
        // {
        //     type: 'input',
        //     message: 'List any technologies used.',
        //     name: 'projectTech'
        // },
        // {
        //     type: 'input',
        //     message: 'How do you install the project?',
        //     name: 'projectInstall'
        // },
        // {
        //     type: 'input',
        //     message: 'How do you use the project?',
        //     name: 'projectHowTo'
        // },
        // {
        //     type: 'confirm',
        //     message: 'Are there any tests for the project?',
        //     name: 'testConfirm'
        // },
        // {
        //     type: 'input',
        //     message: 'Enter your test.',
        //     name: 'projectTest',
        //     when: function (answers) {
        //         return answers.testConfirm;
        //     }
        // },
        {
            type: 'input',
            message: 'List any contributors.',
            name: 'projectContributors'
        }
    ])
}

module.exports = promptUser;