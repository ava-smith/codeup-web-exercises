"use strict";

//functionality using jQuery

$(function () {
    $('.faqs').append(`
        <a href="#">Toggle Visibility</a>
    `);

    $('a').on('click', function (e) {
        e.preventDefault();
        $('dd').toggleClass('invisible')
    });

    $('dt').on('click', function () {
        $(this).toggleClass('highlighted');
    });

    $('#listsButton').on('click', function () {
        $('ul').each(function() {
            $(this).children('li:last').toggleClass('change-background');
        });
    });

    $('h3').on('click', function () {
        $(this).next().find('li').toggleClass('bold-text');
    });

    $('li').on('click', function () {
        const parentUl = $(this).parent('ul');
        const firstLi = parentUl.children('li:first');

        firstLi.toggleClass('color-blue');
    })
});

//JS equivalent
// const toggleVisibilityLink = document.createElement('a');
// toggleVisibilityLink.innerText = 'Toggle Visibility';
//
// const bodyElement = document.querySelector('body');
// bodyElement.appendChild(toggleVisibilityLink);
//
// const ddElements = document.querySelectorAll('dd');
// toggleVisibilityLink.addEventListener('click', () => {
//     ddElements.forEach((ddElement) => {
//         ddElement.classList.toggle('invisible');
//     });
// });
//
// const dtElements = document.querySelectorAll('dt');
// dtElements.forEach((dtElement) => {
//     dtElement.addEventListener('click', () => {
//         dtElement.classList.toggle('highlighted');
//     });
// });