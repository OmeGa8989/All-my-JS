const express = require('express')
const app = express();



app.listen(8080, () => {
    console.log('Listening on port 8080')
})


app.get('/', (req, res) => {
    res.send('<h1>Welcome to my Homepage!</h1>')
})

app.get('/r/:subreddit/:ID', (req, res) => {
    // console.log(req.params)
    const { subreddit, ID } = req.params;
    console.log(`Welcome to ${subreddit} subreddit`)
    // res.send(`<h2>Welcome to ${subreddit} subreddit</h2>`)
    res.send(`<h2>You are browsing the ${ID} ID on ${subreddit} subreddit</h2>`)
})

app.get('*', (req, res) => {
    res.send('<h1>Invalid url Path! Try again</h1>')
})
