//  MONGOOSE HELPS TO IMPOSE A SCHEMA ON MY DATABASE . 
//  IN mongoDB there was no proper format so there was high chances of errors. mongoose with mongoDB helps imply a schema while creating a DB.



const mongoose = require('mongoose');


main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const TodoSchema = new mongoose.Schema({
    Title: String,
    desc: String,
    isDone: Boolean
});
export const Todo = mongoose.model('Todo', TodoSchema)
