(() => {

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// TODO:
//  Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

    let filterLanguages = users.filter(user => {
       const userLanguages = user.languages;
       return userLanguages.length >= 3;
    });
    console.log(filterLanguages);

// TODO:
//  Use .map to create an array of strings where each element is a user's email address.

    let mapEmails = users.map(user => {
        const userEmails = user.email;
        const emailString = `${userEmails}`;
        return emailString;
    });
    console.log(mapEmails);

// TODO:
//  Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

    const totalExperience = users.reduce((accumulator, user, index) => {
        let experience = user.yearsOfExperience;
        accumulator += experience / users.length;
        return accumulator;
    }, 0);

    console.log("average experience =>", totalExperience);

// TODO:
//  Use .reduce to get the longest email from the list of users.

    const longestEmail = users.reduce((accumulator, user, index) => {
        let emailLengths = user.email.length;
        if (emailLengths > accumulator.length) {
            accumulator = user.email;
        }
        return accumulator;
    }, "");

    console.log("longest email =>", longestEmail);

// TODO:
//  Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

    const listOfNames = users.reduce((accumulator, user, index) => {
        let comma = accumulator.length ? ", " : "";
        return accumulator + comma + user.name;
    }, "");

    console.log(listOfNames);

// TODO:
//  Bonus: Use .reduce to get the unique list of languages from the list of users.

    const uniqueLanguages = users.reduce((accumulator, user, index) => {
        let comma = accumulator.length ? ". " : "";
        return accumulator + comma + user.languages;
    }, "");

    console.log(uniqueLanguages);
}) ();