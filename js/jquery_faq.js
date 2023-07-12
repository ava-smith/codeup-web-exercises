"use strict";

//functionality using jQuery

// $(function () {
//     $('.faqs').append(`
//         <a href="#">Toggle Visibility</a>
//     `);
//
//     $('a').on('click', function (e) {
//         e.preventDefault();
//         $('dd').toggleClass('invisible')
//     });
//
//     $('dt').on('click', function () {
//         $(this).toggleClass('highlighted');
//     });
//
//     $('#listsButton').on('click', function () {
//         $('ul').each(function() {
//             $(this).children('li:last').toggleClass('change-background');
//         });
//     });
//
//     $('h3').on('click', function () {
//         $(this).next().find('li').toggleClass('bold-text');
//     });
//
//     $('li').on('click', function () {
//         const parentUl = $(this).parent('ul');
//         const firstLi = parentUl.children('li:first');
//         firstLi.toggleClass('color-blue');
//     });
// });

//JS equivalent
const toggleVisibilityLink = document.createElement('a');
toggleVisibilityLink.innerText = 'Toggle Visibility';

const faqs = document.querySelector('.faqs');
faqs.appendChild(toggleVisibilityLink);

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

const listButton = document.querySelector('#listsButton');
const ulElements = document.querySelectorAll('ul');
listButton.addEventListener('click', () => {
    ulElements.forEach((ul) => {
        ul.lastElementChild.classList.toggle('change-background');
    });
});

const h3Elements = document.querySelectorAll('h3');

h3Elements.forEach((h3Element) => {
    h3Element.addEventListener('click', (e) => {
        const liElementCollection = e.target.nextElementSibling.children;
        Array.from(liElementCollection).forEach((liElement) => {
            liElement.classList.toggle('bold-text');
        });
    });
});

const liElements = document.querySelectorAll('li');

liElements.forEach((liElement) => {
    liElement.addEventListener('click', (e) => {
        const clickedParent = e.target.parentElement;
        clickedParent.firstElementChild.classList.toggle('color-blue');
    });
});

//BONUS--

//VARIABLES...
const allPhotosContainer = document.querySelector('.container');
const swapButtons = document.querySelectorAll('.swap-btn');

//FUNCTIONS...
function handleSwapClick(e) {
    const clickedButton = e.target;
    const singleImageDiv = clickedButton.parentElement;
    if(singleImageDiv === allPhotosContainer.firstElementChild){
        swapLeftTwoPhotos();
    }
    else if(singleImageDiv === allPhotosContainer.lastElementChild) {
        swapRightTwoPhotos();
    }
    else {
        Math.random() < 0.5 ? swapLeftTwoPhotos() : swapRightTwoPhotos();
    }
}

function swapLeftTwoPhotos() {
    const leftPhoto = allPhotosContainer.querySelector('div:first-child img');
    const middlePhoto = allPhotosContainer.querySelector('div:nth-child(2) img');
    const tempPhotoSrc = leftPhoto.src;

    //Swap the src from both photos
    leftPhoto.src = middlePhoto.src;
    middlePhoto.src = tempPhotoSrc;
}

function swapRightTwoPhotos() {
    const rightPhoto = allPhotosContainer.querySelector('div:last-child img');
    const middlePhoto = allPhotosContainer.querySelector('div:nth-child(2) img');
    const tempPhotoSrc = rightPhoto.src;

    //Swap the src from both photos
    rightPhoto.src = middlePhoto.src;
    middlePhoto.src = tempPhotoSrc;
}

//EVENTS...
swapButtons.forEach((swapButton) => {
    swapButton.addEventListener('click', handleSwapClick);
})