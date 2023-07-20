(() => {
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
            // FILTER METHOD ============================
            let housesTwoBedsPlus = houses.filter(house => {
                // filter method has to return a condition
                const numberOfBeds = parseFloat(house.beds);
                const numberOfBaths = parseFloat(house.baths);
                return numberOfBeds >= 4 && numberOfBaths >= 5;
            });
            console.log(housesTwoBedsPlus);

            // MAP METHOD ================================
            // when you want to transform each element in an array
            // and return a new array with the transformed elements

            // let housesPriceRange = houses.map(house => {
            //     const priceRange = 2_000_000;
            //     const canBuy = parseFloat(house.price) > priceRange ? 'Nope' : 'Yes!';
            //     // add this conditional to filter through the ones I can afford (remove conditional for original problem).
            //     if(parseFloat(house.price) < priceRange) {
            //         const newValue = `Address: ${house.address} \nCan I afford it: ${canBuy}`;
            //         return newValue;
            //     }
            //     // you need this filter to fix the conditional, so it doesn't return undefined for the houses I can't afford.
            // }).filter(house => {
            //     return house
            //     // or .filter(house => house);
            // });
            // for(let house of housesPriceRange) {
            //     console.log(house);
            // }

            let houseNodes = houses.map(house => {
                let card = document.createElement('div');
                card.innerHTML = `
                    <h2>${house.address}</h2>
                    <p>Beds: ${house.beds}</p>
                    <p>Baths: ${house.baths}</p>
                `;
                return card;
            })
            console.log(houseNodes);
            for(let house of houseNodes) {
                document.querySelector('.container').appendChild(house);
            }


        });

}) ();