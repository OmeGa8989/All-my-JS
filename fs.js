// for (let i = 0; i < 10; i++) {
//     console.log("First node Execution ")
// }
const fs = require('fs');
fs.mkdir()
const folderName = process.argv[2] || 'Project'
try {
    fs.mkdir(folderName)
    fs.writeFileSync(`${folderName}/index.html`, '')
    fs.writeFileSync(`${folderName}/app.js`, '')
    fs.writeFileSync(`${folderName}/styles.css`, '')
} catch (e) {
    console.log("Something went wrong! Please try again!")
    console.log(e)
}
