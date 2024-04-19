const express = require('express')
const app = express();
const path = require('path')

// let num = Math.random() * 10 + 1;

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))

app.listen(8080, () => {
    console.log('Listening on port 8080')
})


app.get('/', (req, res) => {
    res.render('home.ejs')
})

app.get('/rand', (req, res) => {
    const num = (Math.floor(Math.random() * 10) + 1);
    res.render('home.ejs', { num })
})
