(() => {
    // map
    const url = './data/houses.json';
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    // fetch is a promise
    fetch(url, options)
        .then(response => {
            return response.json();
        })
        .then(houses => {
            console.log(houses);
            // working with the houses array
            const housesTwoBedsPlus = [];
            for (let house of houses) {
                const numberOfBeds = parseFloat(house.beds);
                if (numberOfBeds >= 2) {
                    housesTwoBedsPlus.push(house);
                }
            }
            console.log(housesTwoBedsPlus);
        });

}) ();