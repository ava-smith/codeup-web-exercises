"use strict";
$(() => {
    // GLOBAL VARIABLES ========================================
    const map = initializeMap();
    const OPEN_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/forecast';
    const SAN_ANTONIO_COORDINATES = ['29.4252', '-98.4946'];
    const URL = getWeatherURL(...SAN_ANTONIO_COORDINATES);
    const forecastContainer = document.querySelector('.forecast');
    const tempsContainer = document.querySelector('.temps');
    // FUNCTIONS ========================================

    // function that initializes the map
    function initializeMap() {
        mapboxgl.accessToken = MAPBOX_TOKEN;

        const mapOptions = {
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v12',
            zoom: 10,
            center: [-98.4946, 29.4252],
        }

        return new mapboxgl.Map(mapOptions);
    }

    // function that creates a URL for request based on coordinates
    function getWeatherURL(lat, lon) {
        return `${OPEN_WEATHER_URL}?lat=${lat}&lon=${lon}&units=imperial&appid=${OPEN_WEATHER_APPID}`;
    }

    // calls the weather api to get information on the weather

    $.ajax(URL).done(data => {
        // console.log(data.list[0]);
        // console.log(returnMinMaxTemps(data));
        let tempsData = returnMinMaxTemps(data);
        displayTemps(tempsData);
        renderWeatherCard(data.list);
    }).fail(console.error);


    // function that renders the min and max temps and the date
    function displayTemps(minMaxTemps) {
        tempsContainer.innerHTML = '';
        for(let i = 0; i < minMaxTemps.length; i++){
            const topWeatherCard = document.createElement('div');
            topWeatherCard.innerHTML = `
                <div class="top-card">
                    <p>Date: ${minMaxTemps[i].date}</p>
                    <p>${minMaxTemps[i].min}°</p>
                    <p class="top">${minMaxTemps[i].max}°</p>
                </div>
            `;
            tempsContainer.appendChild(topWeatherCard);
        }
    }

    //function that renders the weather cards
    function renderWeatherCard(weatherArray) {
        forecastContainer.innerHTML = '';
        for(let i = 0; i < weatherArray.length; i += 8) {
            const bottomWeatherCard = document.createElement('div');
            bottomWeatherCard.innerHTML = `
                <div class="bottom-card">
                    <p>Feels Like: ${weatherArray[i].main.feels_like}°</p>
                    <p>${weatherArray[i].weather[0].description}</p>
                    <p>Humidity: ${weatherArray[i].main.humidity}</p>
                </div>
            `;
            forecastContainer.appendChild(bottomWeatherCard);
        }
    }

    // function that shows the city the user searched on the map
    // with a marker
    const marker = new mapboxgl.Marker({
        draggable: true
    })
        .setLngLat([-98.4946, 29.4252])
        .addTo(map);

    function searchWeather() {
        const userQuery = $('input').val();
        geocode(userQuery, MAPBOX_TOKEN)
            .then((data) => {
                console.log(data);
                map.setCenter(data)
                    .setZoom(10);
                let newURL = getWeatherURL(data[1], data[0]);
                $.ajax(newURL).done(data => {
                    let tempsData = returnMinMaxTemps(data);
                    displayTemps(tempsData);
                    renderWeatherCard(data.list);
                }).fail(console.error);
            })
    }

    // EVENTS ========================================
    $('#search-button').on('click', searchWeather);

    marker.on("dragend", function () {
        let coordinates = marker.getLngLat();
        let lat = coordinates.lat;
        let lon = coordinates.lng;
        let coords = {lat,lon};
        let newURL = getWeatherURL(lat, lon);
        $.ajax(newURL).done(data => {
            let tempsData = returnMinMaxTemps(data);
            displayTemps(tempsData);
            renderWeatherCard(data.list);
        }).fail(console.error);
    })


    // RUNS WHEN THE PROGRAM LOADS ========================================

});