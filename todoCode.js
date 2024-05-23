import mongoose from 'mongoose';
await mongoose.connect('mongodb://localhost:27017/')
import { Todo } from '../todo.js';

import express from 'express';
const app = express()
const port = 3000

app.get('/a', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
const todo = new Todo({
    title: "THis is the first title",
    desc: "description of the first todo",
    isDone: false

})
