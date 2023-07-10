"use strict";

$(function () {
   // NOTES--
   // $('#id-container').css('background-color', 'red');
   // $('.title').css('color', 'purple');
   //
   // // Same thing with JS
   // let titleElements = document.querySelectorAll('.title');
   // titleElements.forEach(titleElement => {
   //    titleElement.style.color = 'blue';
   // });
   //
   // // Use jQuery to select all 'li' elements
   // $('li').css('color', 'pink');
   //
   // // Use jquery to select ,=multiple selectors
   // $('h1, p, .highlight').css('font-weight', 'bold');
   //
   // // Select everything
   // $('*').css('outline', '1px solid lightblue').css('font-weight', 'bold');

   //ID SELECTORS --
   // alert($('#paragraph1').html());
   //
   // let contents2 = $('#paragraph2').html();
   // alert(contents2);

   //CLASS SELECTORS --
   // $('.codeup').css('border', '1px solid red');

   //ELEMENT SELECTORS --
   // $('li').css('font-size', '10px').css('background-color', 'pink');
   // $('h1').css('background-color', 'pink');
   // $('p').css('background-color', 'pink');
   // let contents = $('h1').html();
   // alert(contents);

   //MULTIPLE SELECTORS --
   // $('li, p, h1').css('background-color', 'pink');

   //Add jQuery code that will change the background color of an h1 element when clicked.

   //MY CODE
   // function changeBackgroundColor() {
   //    $(this).css('background-color', 'pink');
   // }
   //
   // $('h1').on('click', changeBackgroundColor);

   //WALKTHROUGH

   $('h1').on('click', (e) => {
      $(e.target).css('background-color', 'blue');
   });
   //Make all paragraphs have a font size of 18px when they are double clicked.

   //MY CODE
   // function changeFontSize() {
   //    $('p').css('font-size', '18px');
   // }
   // $('p').on('dblclick', changeFontSize);

   //WALKTHROUGH
   $('p').on('dblclick', (e) => {
      $(e.target).css('font-size', '18px');
   });
   //Set all li text color to red when the mouse is hovering; reset to black when it is not.

   //MY CODE
   // function changeTextColor() {
   //    $('li').css('color', 'red');
   // }
   // function changeTextColorToDefault() {
   //    $('li').css('color', 'black');
   // }
   //
   // $('li')
   //     .on('mouseenter', changeTextColor)
   //     .on('mouseleave', changeTextColorToDefault);

   //WALKTHROUGH
   $('li').on('mouseenter', (e) => {
      $(e.target).css('color', 'red');
   });

   $('li').on('mouseleave', (e) => {
      $(e.target).css('color', 'black');
   });
})