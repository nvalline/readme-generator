const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

// Prompt User for Data
function promptUser() {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'Enter project name',
            name: 'projectName'
        },
        {
            type: 'input',
            message: 'Enter project image file name',
            name: 'projectImage'
        },
        {

        }
    ])
}
