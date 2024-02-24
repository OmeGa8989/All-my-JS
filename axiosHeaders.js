const getDadJoke = async () => {
    let jokes = document.querySelector("#jokes")
    const res = await axios.get('https://icanhazdadjoke.com/', config)
    console.log(res.data.joke)
    const newLi = document.createElement("li")
    newLi.append(res.data.joke)
    jokes.append(newLi)
    let config = {
        headers: {
            Accept: 'application/json'

        }

    }

    const res = await axios.get('https://icanhazdadjoke.com/', config)
    console.log(res.data.joke)
    const newLi = document.createElement("li")
    newLi.append(res.data.joke)
    jokes.append(newLi)
    // console.log(getDadJoke())
}
console.log(getDadJoke())

// console.log(res)
// console.log(getDadJoke())