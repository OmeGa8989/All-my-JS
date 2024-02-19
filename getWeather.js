// using callbacks for a getWeather

// getWeather(displayIcon){
//     const weather = function displayIcon(data) {
//         if (data === 'Sunny')
//             render('☀️')
//         if (data === 'Rainy')
//             render('🌧️')
//     }
// }
// getWeather((callback) => {
//     setTimeout(() => {
//         callback = "Sunny";
//     }, 1000)
// })


// Converting this callback using Promises 
let getWeather = (data, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if ('data' === "SUNNY" || data === 'rainy') {
            }
            else { reject() }

        }, delay)
    })
}

getWeather('SUNNY', 2000)
    .then((result) => {
        console.log('☀️ITS SUNNY WEATHER☀️')
        return getWeather('RAINY', 3000);
    })
getWeather('rainy', 2000)
    .then((result) => {
        console.log('🌧️ITS RAINY WEAHTER🌧️')
    })
    .catch(() => console.log("invalid INPUT!!!!"));