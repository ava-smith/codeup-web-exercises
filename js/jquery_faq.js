"use strict";

//functionality using jQuery

// $(function () {
//     $('body').append(`
//     <a href="#">Toggle Invisibility</a>
//     `);
//     $('a').on('click', function (e) {
//         e.preventDefault();
//         $('dd').toggleClass('invisible')
//     });
//
//     $('dt').on('click', function () {
//         $(this).toggleClass('highlighted');
//     });
// });

//JS equivalent
const toggleVisibilityLink = document.createElement('a');
toggleVisibilityLink.innerText = 'Toggle Visibility';

const bodyElement = document.querySelector('body');
bodyElement.appendChild(toggleVisibilityLink);

const ddElements = document.querySelectorAll('dd');
toggleVisibilityLink.addEventListener('click', () => {
    ddElements.forEach((ddElement) => {
        ddElement.classList.toggle('invisible');
    });
});

const dtElements = document.querySelectorAll('dt');
dtElements.forEach((dtElement) => {
    dtElement.addEventListener('click', () => {
        dtElement.classList.toggle('highlighted');
    });
});