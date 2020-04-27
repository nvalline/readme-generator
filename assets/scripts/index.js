const axios = require('axios');
const fs = require('fs');
const util = require('util');
const promptUser = require('../utils/promptUser')
const generateMarkdown = require('../utils/generateMarkdown')

const writeFileAsync = util.promisify(fs.writeFile);

function getUserProfileImage(answers) {
    const queryURL = `https://api.github.com/users/${answers.githubUsername}`;

    return axios.get(queryURL)
        .then(function (response) {
            githubPic = response.data.avatar_url;
            return githubPic;
        })
        .catch(function (error) {
            console.log(error)
        })
}

async function init() {
    console.log('Hi, please follow the prompts!');
    try {
        let siteLive = 'See the project live.';

        const answers = await promptUser();
        const userImage = await getUserProfileImage(answers);

        if (!answers.siteURL) {
            answers.siteURL = '#';
            siteLive = 'The project is not live.';
        }

        if (!answers.projectTest) {
            answers.projectTest = 'There are no tests.';
        }

        const currentYear = new Date().getFullYear();

        const markdown = generateMarkdown(answers, userImage, siteLive, currentYear);

        await writeFileAsync('./README.md', markdown);

        console.log('Success! A new README file was written.')
    } catch (err) {
        console.log(`There was an error: ${err}`)
    }
}

init();
