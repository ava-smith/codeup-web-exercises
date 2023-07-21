const getUserName = () => {
    const url = `https://api.github.com/users/ava-smith/events`;
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
        // .then((data) => {
        //     console.log(data);
        // });
    }

(() => {
    getUserName().then((data) => {
        console.log(data);
        console.log(data[0].created_at);
    });

})();