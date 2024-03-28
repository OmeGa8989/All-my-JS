const express = require('express');

const app = express();
// console.dir(app);

app.use((req, res) => {
    console.log("NEW REQUEST!")
    // res.send("hey we got your request!")
    // res.send({ color: 'black' })
    res.send('<h1>Got your Request!Working on it!</h1>')
})


app.listen(8080, () => {
    console.log("LISTENING ON THE PORT 8080!")

})
// app.get((request,response)=>{})
app.get((req, res) => {
    console.log('<p>Ok so this is how  you get a request! by using express</p>')
})
// app.listen((callback)=>{})
app.listen(9090, () => {
    console.log('This will fire up a server for you! The local host name is localhost:9090')
})
