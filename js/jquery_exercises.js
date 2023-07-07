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
   // let contents1 = $('#paragraph1').html();
   // alert(contents1);
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
   $('li, p, h1').css('background-color', 'pink');

})