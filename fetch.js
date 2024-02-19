fetch('https://swapi.dev/api/people/1/')
    .then((res) => {
        console.log("resolved", res)
        return res.json()
    })
    .then((data) => console.log("PROMISE OBJECT USING JSON DONE", data))
    .catch((e) => console.log("ERROR!", e))
