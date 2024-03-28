const express = require('express')
const app = express();
app.get('/:yt/:ID', (req, res) => {
    const { yt, ID } = req.params;
    const { q } = req.query;
    console.log(req.query)
    if (!q) {
        console.log('Nothing found if nothing searched :(')
        res.send('Nothing found if nothing searched :(')

    }
    res.send(`<h3>Searching the query ${q} on the youtube ${yt} and ID${ID}</h3>`)
})
