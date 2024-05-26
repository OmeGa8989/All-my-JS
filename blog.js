const express = require('express')
const router = express.Router()

// middleware that is specific to this router (this is only for this router)
const timeLog = (req, res, next) => {
    console.log('Time: ', Date.now())
    next()
}
router.use(timeLog)

// define the home page route
router.get('/', (req, res) => {
    res.send('Blog home page')
})
// define the about route
router.get('/about/:slug', (req, res) => {
    // res.send('About blog')
    res.send(`Blog of ${req.params.slug}`)
})

module.exports = router  // mount the router to our app
