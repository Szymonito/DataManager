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

    function readObject() {
        const filepath = './object.json'

        if(fs.existsSync(filepath)) {
            const fileData = fs.readFileSync(filepath)
            const data = JSON.parse(filedata)
            console.log("Plik json zawiera:", data)
        } else {
            console.log("Nie ma takiego pliku.")
        }
    }

    async function main() {
        const choice = await askUser("Chcesz utworzyc plik?/n")

        if(choice === "odczytać"){
            readObject()
        } else if (choice === "utworzyć") {
            const name = await askUser("Podaj swoje imie/n")
            const age = await askUser("Podaj swoj wiek/n")
            const email = await askUser("Podaj swoj email/m")

            createObject(name, age, email)
        } else {
            console.log("Musisz cos wybrac")
        }

        rl.close()

    }

    main()