const getEvents = (userName) => {
    const url = `https://api.github.com/users/${userName}/events`;
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `token ${GITHUB_API}`
        }
    }
    return fetch(url, options)
        .then((response) => {
            return response.json();
        })
        .catch(error => {
            console.log(error);
        })
    }

(() => {
    getEvents("ava-smith").then((events) => {
        console.log(events);
        const pushEvents = events.filter(event => {
            return event.type ==="PushEvent";
        });
        console.log(pushEvents[0].created_at);
    });

})();