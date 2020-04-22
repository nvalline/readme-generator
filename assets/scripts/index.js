const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

// Prompt User for Data
function promptUser() {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'Enter project name.',
            name: 'projectName'
        },
        {
            type: 'input',
            message: 'Enter project image file name.',
            name: 'projectImage'
        },
        {
            type: 'input',
            message: 'Enter a short project blurb.',
            name: 'projectBlurb'
        },
        {
            type: 'input',
            message: 'Enter the live site URL.',
            name: 'siteURL'
        },
        {
            type: 'input',
            message: 'Enter the project description.',
            name: 'projectDescription'
        },
        {
            type: 'input',
            message: 'List any technologies used.',
            name: 'projectTech'
        },
        {
            type: 'input',
            message: 'How do you use the project?',
            name: 'projectHowTo'
        },
        {
            type: 'input',
            message: 'How do you install the project?',
            name: 'projectInstall'
        },
        {
            type: 'input',
            message: 'List any contributors.',
            name: 'projectRefs'
        }
    ])
}

async function init() {
    console.log('HI');
    try {
        const answers = await promptUser();

        console.log(answers)

    } catch (err) {
        console.log(`There was an error: ${err}`)
    }
}

init();
