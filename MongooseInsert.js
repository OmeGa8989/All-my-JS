const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/movies')
    .then(() => {
        console.log("Connection Open!")
    })
    .catch(() => {
        console.log('Error!')
        console.log(err)
    })

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    rating: String,
    boxOffice: String
})

const Movie = mongoose.model('Movie', movieSchema);

// making instances for the movie class 
// const Avengers = new Movie({
//     title: 'Avengers',
//     rating: 5,
//     year: 2019,
//     boxOffice: 'Yup it was box-office hit'
// })

// const random = new Movie({
//     name: 'haha',
//     year: 2020,
// })


// through Mongo Insert method 
Movie.insertMany([
    { title: "asfa", rating: 1, year: 1241, boxOffice: 'ahha' },
    { title: "erfw", rating: 23, year: 2412, boxOffice: 'dw' },
    { title: "wqe", rating: 23, year: 12241, boxOffice: 'gre' },
    { title: "wqq", rating: 3, year: 12241, boxOffice: 'fvwef' },
    { title: "asdfasf", rating: 31, yea: 12411, boxOffice: 'loren' },
    { title: "fsdf", rating: 43, year: 121441, boxOffice: 'ipsum' },
    { title: "sdfsfv", rating: 63, year: 12441, boxOffice: 'geko' },
    { title: "ewfwfg", rating: 83, year: 124521, boxOffice: 'ahhafe' }
])
    .then((data) => {
        console.log('Data Received')
        console.log(data)
    })
    .catch((err) => {
        console.log('ERROR!', err)
    })
