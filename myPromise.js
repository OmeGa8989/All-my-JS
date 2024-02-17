const fakeReq2 = (url) => {
    return new Promise((resolve, reject) => {
        const random = Math.random();
        setTimeout(() => {
            if (random > 0.6) {
                resolve('Your List of all the TRENDING MUSIC from YOUTUBE!');
            }
            else
                reject('CONNECTION TIMEOUT!');
        }, 2000)
    })
}

fakeReq2('youtube.co.in/trending/music')
    .then((data) => {
        console.log("SEARCH FOUND!", data)
    })
    .catch((err) => {
        console.log("UNKNOWN ERRORS ", err)
    })



// next up I will show u transitioning background colors using promises
// we did the same using callback and it was hell nested. YOU can see how clean
// it looks with promises 

let delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

delayedColorChange('violet', 1000)
    .then(() => delayedColorChange('indigo', 1000))
    .then(() => delayedColorChange('blue', 1000))
    .then(() => delayedColorChange('green', 1000))
    .then(() => delayedColorChange('yellow', 1000))
    .then(() => delayedColorChange('orange', 1000))
    .then(() => delayedColorChange('red', 1000))
    .then(() => delayedColorChange('teal', 1000))
    .then(() => delayedColorChange('white', 1000))
    .catch(() => console.log("ERROR?????!"))
