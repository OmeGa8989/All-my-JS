const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}
fakeRequestPromise('yelp.com/api/coffee/page1')
    .then(() => {
        console.log("RESOLVED")
        console.log("(PAGE1) WORKED!")
        fakeRequestPromise('yelp.com/api/coffee/page2')
            .then(() => {
                console.log("RESOLVED!!")
                console.log("(PAGE2)WORKED")
                fakeRequestPromise('yelp.com/api/coffee/page3')
                    .then(() => {
                        console.log('RESOLVED!!')
                        console.log('IT WORKED!(PAGE3)')
                    })
                    .catch(() => {
                        console.log('CONNECTION TIMEOUT!(FOR PAGE3)')

                    })
            })
            .catch(() => {
                console.log('CONNECTION TIMEOUT!(FOR PAGE2)')
            })
    })
    .catch(() => {
        console.log("REJECTED")
        console.log("CONNECTION TIMEOUT!")

    })

// NOW LET'S SEE THE MAGIC OF PROMISES
fakeRequestPromise('youtube.com/music/page1')
    .then((data) => {
        console.log("IT WORKED!(page1)")
        console.log(data)
        return fakeRequestPromise('youtube.com/music/page2')
    })
    .then((data) => {
        console.log("IT WORKED!(page2)")
        console.log(data)
        return fakeRequestPromise('youtube.com/music/page3')
    })
    .then((data) => {
        console.log("IT WORKED!(page3)")
        console.log(data)

    })
    .catch((err) => {
        console.log("REQUEST FAILED")
        console.log(err)
    })

