$(() => {

    const favoriteRestaurants = [
        {
            "name": "Compadres Hill Country Cocina",
            "category": "Mexican",
            "stars": "4.8"
        },
        {
            "name": "CAVA",
            "category": "Mediterranean",
            "stars": "4.5"
        },
        {
            "name": "Texas Roadhouse",
            "category": "Steakhouse",
            "stars": "4.4"
        }
    ]

    // GLOBAL VARIABLES
    const map = initializeMap();
    // const marker = createMarker();
    // const popup = createPopup();

    // FUNCTIONS

    // function that initializes the map
    function initializeMap() {
        mapboxgl.accessToken = MAPBOX_TOKEN;

        const mapOptions = {
            container: 'map',
            style:'mapbox://styles/mapbox/streets-v12',
            zoom: 10,
            center: [-98.4916, 29.4252],
        }

        return new mapboxgl.Map(mapOptions);
    }

    // function that goes to the city of my favorite restaurant using geocode
    function goToRestaurant() {
        geocode('Borne, Texas', MAPBOX_TOKEN).then((data) => {
            console.log(data);
            map.setCenter(data)
                .setZoom(15)
                .setCenter([-98.73465, 29.79499])
        });
    }

    // function that creates a marker at my favorite restaurant
    // function createMarker() {
    //     return new mapboxgl.Marker()
    //         .setLngLat([-98.73465, 29.79499])
    //         .addTo(map)
    // }

    // function that creates a popup
    // function createPopup() {
    //     return new mapboxgl.Popup()
    //         .setLngLat([-98.73465, 29.79499])
    //         .setHTML(`
    //             <div>
    //                 <h1>Compadres Hill Country Cocina</h1>
    //                 <p>This place is a veteran friendly restaurant, serving up delicious Mexican food.</p>
    //             </div>
    //         `);
    // }

    function markRestaurant(restaurants) {
        restaurants.forEach((restaurant) => {
            geocode(`${restaurant.name}`, MAPBOX_TOKEN).then((data) => {
                console.log(data);
                const restaurantPopup = new mapboxgl.Popup()
                    .setHTML(`
                        <h1>${restaurant.name}</h1>
                        <p>${restaurant.category}</p>
                        <p>${restaurant.stars}</p>
                    `);
                const restaurantMarker = new mapboxgl.Marker()
                    .setLngLat(data)
                    .addTo(map)
                    .setPopup(restaurantPopup);
                restaurantPopup.addTo(map);
            })
        })
    }

    // EVENTS
    document.querySelector('#geocode-button').addEventListener('click', goToRestaurant);
    document.querySelector('#mark-restaurants').addEventListener('click', markRestaurant);



    // RUNS WHEN THE PROGRAM LOADS
    // marker.setPopup(popup);

});