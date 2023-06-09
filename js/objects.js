(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
// const person = {
//     firstName: "Ava",
//     lastName: "Smith",
//     sayHello(){
//         return `${person.firstName} ${person.lastName} says hello:)`;
//     }
//     };
// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.sayHello());

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    // person.sayHello = function() {
    //     return `Hello from ${this.firstName} ${this.lastName}`;
    // }
    //
    // console.log(person.sayHello());
    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */


    // let shoppers = [
    //     {name: 'Cameron', amount: 180},
    //     {name: 'Ryan', amount: 250},
    //     {name: 'George', amount: 320}
    // ];
    //
    // shoppers.forEach((shopper) => {
    //     const discountMath = () => {
    //         if (shopper.amount > 200) {
    //             console.log(`You spent over $200! You get a %12 discount!`)
    //             return shopper.amount - (shopper.amount * 0.12);
    //         } else {
    //             return shopper.amount
    //         }
    //     }
    //         console.log(`Shopper's name: ${shopper.name}`);
    //         console.log(`Amount spent: $${shopper.amount.toFixed(2)}`);
    //         console.log(`How much you have to pay: $${discountMath().toFixed(2)}`);
    //     });



    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    // let books = [
    //     {title: 'Throne of Glass', author: {firstName: 'Sarah', lastName: 'Maas'}},
    //     {title: 'The Hate U Give', author: {firstName: 'Angie', lastName: 'Thomas'}},
    //     {title: 'Between Shades of Gray', author: {firstName: 'Ruta', lastName: 'Sepetys'}},
    //     {title: 'The House on Mango Street', author: {firstName: 'Sandra', lastName: 'Cisneros'}},
    //     {title: 'Pet Sematary', author: {firstName: 'Stephen', lastName: 'King'}}
    // ];

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
    // for(let i = 0; i < books.length; i++){
    //     console.log(`Book # ${i}`);
    //     console.log(`Title: ${books[i].title}`);
    //     console.log(`Author: ${books[i].author.firstName} ${books[i].author.lastName}`);
    // }

    // books.forEach((book, index) => {
    //     console.log(`Book # ${index +1}`);
    //     console.log(`Title: ${book.title}`);
    //     console.log(`Author: ${book.author.firstName} ${book.author.lastName}`);
    //     if(index < books.length -1){
    //         console.log("---");
    //     }
    // })
    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */


    //returns a book object with the properties described
    //Refactor your code that creates the books array to instead use your function.

    function createBook(title, authorFirstName, authorLastName){
        return {
            title: title,
            author: {
                firstName: authorFirstName,
                lastName: authorLastName
            }
        };
    }

    let books = [
        createBook("Twilight", "Stephenie", "Meyer"),
        createBook("Throne of Glass", "Sarah", "Maas"),
    ];

    function showBookInfo(book) {
        console.log(`Title: ${book.title}`);
        console.log(`Author: ${book.author.firstName} ${book.author.lastName}`)
    }
    showBookInfo(books[1]);
})();