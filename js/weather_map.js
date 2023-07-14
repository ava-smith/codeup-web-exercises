"use strict";
$(() => {
    // GLOBAL VARIABLES ========================================
    const map = initializeMap();
    const OPEN_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/forecast';
    const SAN_ANTONIO_COORDINATES = ['29.4252', '-98.4946'];
    const URL = getWeatherURL(...SAN_ANTONIO_COORDINATES);

    $.ajax(URL).done(data => {
        console.log(data);
    }).fail(console.error);
    // FUNCTIONS ========================================

    // function that initializes the map
    function initializeMap() {
        mapboxgl.accessToken = MAPBOX_TOKEN;

        const mapOptions = {
            container: 'map',
            style:'mapbox://styles/mapbox/streets-v12',
            zoom: 10,
            center: [-98.4861, 29.4260],
        }

        return new mapboxgl.Map(mapOptions);
    }

    // function that creates a URL for request based on coordinates
    function getWeatherURL(lat, lon) {
        return `${OPEN_WEATHER_URL}?lat=${lat}&lon=${lon}&units=imperial&appid=${OPEN_WEATHER_APPID}`;
    }

    // EVENTS ========================================


    // RUNS WHEN THE PROGRAM LOADS ========================================



});