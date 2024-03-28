const express = require('express');

const app = express();
app.listen(8080, () => {
    console.log("LISTENING ON THE PORT 8080!")
})

app.get('/help', (req, res) => {
    console.log('this is a help request!')
    res.send('<H1>Sending HELP!</H1>')
})

app.get('/', (req, res) => {
    console.log("HOMEPAGE")
    res.send('<h1>Welcome to Homepage!</h1>')
})

app.post('/help', (req, res) => {
    res.send('This is a POST request to path /help (different from /get request)')
})

app.get('*', (req, res) => {
    res.send('Unknown Path! Please enter valid path!')
    console.log('Invalid Path!')
})
