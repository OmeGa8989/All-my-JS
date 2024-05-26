const express = require("express")
const app = express();

const blog = require('./routes/blog') // dir name is routes and blog folder is saved in it
//  any endpoint ending with /blog will be handled by this path directory mentioned 

const port = 3000;

app.listen(port, () => {
    console.log("Listening on port", port)
})

// built in middleware to (express.static) serves static assets such as HTML files, images, and so on.
// app.use is express used for handling any kind of opertions we wanna throw upon our server FIRSTLYS
app.use(express.static('public'))

app.use('/blog', blog)

app.get('/', (req, res) => {
    console.log("GET")
    res.send("hello world GET")
}).post('/', (req, res) => {
    console.log("POST request")
    res.send("hello world post")
}).put('/', (req, res) => {
    console.log("PUT request")
    res.send("HeLLo world PUT")
})


app.put('/index', (req, res) => {
    console.log("Hey index")
    // res.send('Hello world Index')
    // res.sendFile(path.join(__dirname, "templates", "../index.html"))
    res.sendFile("templates/index.html", { root: __dirname })
})


app.get('/json', (req, res) => {
    console.log("JSOn")
    res.json({ name: "adhyan", a: 1 })
})

// app.use(express.static(''))

//  GET PUT POST DELETE

// HTTPS REQUESTS 
