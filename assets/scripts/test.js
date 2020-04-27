const inquirer = require('inquirer');

function promptUser() {
    return inquirer.prompt([
        {
            type: 'confirm',
            message: 'References?',
            name: 'confirmRefs'
        },
        {
            type: 'input',
            message: 'List all references.',
            name: 'refs',
            when: function (answers) {
                return answers.confirmRefs;
            }
        }
    ])
    // console.log(refs)
}

// ask references last and then write new await function to loop references and ask for URLs

function getURLs(answers) {
    const answerArr = answers.refs.split(',');
    console.log(`This is the 1st answerArr: ${answerArr}`)

    // for (const answer of answerArr) {
    //     console.log(answer)
    //     await inquirer.prompt([
    //         {
    //             type: 'input',
    //             message: `What is the URL for ${answer}`,
    //             name: 'url'
    //         }
    //     ])
    // }

    return;
}

async function init() {
    console.log('HI');
    try {
        const answers = await promptUser();

        if (answers.refs) {
            const URLs = await getURLs(answers);
        }

        console.log('URLs')


    } catch (err) {
        console.log(`There was an error: ${err}`)
    }
}


const currentYear = new Date().getFullYear();
console.log(currentYear)
init();