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
            // console.log(houses);
            // working with the houses array
            // FILTER METHOD ============================
            let housesTwoBedsPlus = houses.filter(house => {
                // filter method has to return a condition
                const numberOfBeds = parseFloat(house.beds);
                const numberOfBaths = parseFloat(house.baths);
                return numberOfBeds >= 4 && numberOfBaths >= 5;
            });
            // console.log(housesTwoBedsPlus);

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
            // console.log(houseNodes);
            for(let house of houseNodes) {
                document.querySelector('.container').appendChild(house);
            }
            // REDUCE METHOD ========================
            // find the most expensive house
            // reduce method takes an anonymous function as its first argument, second is the initial value.
            const largestPrice = houses.reduce(/* function parameter */ (accumulator, house, index) => {
                let price = parseFloat(house.price);
                if (price > accumulator) {
                    accumulator = price;
                }
                return accumulator;
            },
            /* initial value for the accumulator */ 0);
            console.log("most expensive =>", largestPrice.toLocaleString('en-US', {style: 'currency', currency: 'USD'}));

            // find the cheapest house
            const cheapestPrice = houses.reduce(/* function parameter */ (accumulator, house, index) => {
                    let price = parseFloat(house.price);
                    if (price < accumulator) {
                        accumulator = price;
                    }
                    return accumulator;
                },
                /* initial value for the accumulator */ parseFloat(houses[0].price));
            console.log("least expensive =>",cheapestPrice.toLocaleString('en-US', {style: 'currency', currency: 'USD'}))

            //find all the prices
            const allPrices = houses.reduce(/* function parameter */ (accumulator, house, index) => {
                    let price = parseFloat(house.price);
                    accumulator += price;
                    return accumulator;
                },
                /* initial value for the accumulator */ parseFloat(houses[0].price));
            console.log("total price =>", allPrices.toLocaleString('en-US', {style: 'currency', currency: 'USD'}));

            // How many houses were for sale in 2022
            // what was the most expensive house
            // what was the cheapest house
            // what was the total market value of all houses for sale?

            const dashboardObject = houses.reduce((accumulator, house, index) => {
                accumulator.totalHouses++;
                let price = parseFloat(house.price);
                if (price > accumulator.mostExpensive) {
                    accumulator.mostExpensive = price;
                }
                if (price < accumulator.cheapestHouse) {
                    accumulator.cheapestHouse = price;
                }
                accumulator.totalMarketValue += price;
                return accumulator;
            }, {
                totalHouses: 0,
                mostExpensive: 0,
                cheapestHouse: parseFloat(houses[0].price),
                totalMarketValue: 0
            });
            console.log(dashboardObject);
        });

}) ();