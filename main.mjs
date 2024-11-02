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

    function createObject(name, age, email) {
        const data = {
            name, 
            age,
            email
        }

        let existingData = []

        const filePath = './object.json'

        if (fs.existsSync(filePath)) {
            const fileData = fs.readFileSync(filepath)
            existingData = JSON.parse(fileData)
        }
        existingData.push(data)

        fs.writeFileSync(filepath, JSON.stringify(existingData, null, 2))
        console.log("dodales obiekt")
    }