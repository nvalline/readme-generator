const fs = require('fs');
const util = require('util');
const promptUser = require('../utils/promptUser')
const generateMarkdown = require('../utils/generateMarkdown')

const writeFileAsync = util.promisify(fs.writeFile);

async function init() {
    console.log('HI');
    try {
        const answers = await promptUser();
        const markdown = generateMarkdown(answers);

        await writeFileAsync('../../README.md', markdown);

        console.log('Success! A new README file was written.')
    } catch (err) {
        console.log(`There was an error: ${err}`)
    }
}

init();
