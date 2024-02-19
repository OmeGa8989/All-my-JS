// axios and promises
axios.get('https://swapi.dev/api/people/1/')
    .then((Response) => {
        console.log("Response:", Response)
    })

// AXIOs and async function

let starWars = async (id) => {
    try {
        let request = await axios.get(`https://swapi.dev/api/people/${id}/`)
        console.log(request)
    }
    catch (e) { console.log('ERROR', e) }
}
starWars(3)
starWars(5)
starWars(8)

