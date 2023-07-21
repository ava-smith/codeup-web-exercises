const getPerson = (id = 1) => {
    const url = `https://swapi.dev/api/people/${id}/`;
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }
    return fetch(url, options)
        .then((response) => {
            return response.json();
        })
        .catch(error => {
           console.log(error.message);
        });
}

const getFilm = (url) => {
    const filmUrl = url;
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }
    return fetch(url, options)
        .then((response) => {
            return response.json();
        });
}

(() => { // IIFE (Immediately Invoked Function Expression)
    getPerson(1).then((person) => {
        console.log(person);
        getFilm(person.films[0]).then(film => {
            console.log(film);
        })
    });

})();