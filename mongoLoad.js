const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
    console.log('Connection Open')
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    rating: String,
    boxOffice: String
})

const Movie = mongoose.model('Movie', movieSchema);

// making instances for the movie class 
const Avengers = new Movie({
    title: 'Avengers',
    rating: 5,
    year: 2019,
    boxOffice: 'Yup it was box-office hit'
})

const random = new Movie({
    name: 'haha',
    year: 2020,
})

