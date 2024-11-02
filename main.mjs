import readline from 'readline'
import fs from 'fs'

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    function askUser(question) {
        return new Promise (resolve => {
            rl.question (question, answer => {
                resolve(answer)
            })
        })
    }

    