'use strict';
/* global $ */

// code to scoll to a section in you website
const scrollTo = (function() {
  function scrollToHome() {
    $('nav').find('a').click(function(event) { // select class that triggers scoll
      event.preventDefault();
      const section = $(this).attr('href');
      $('html, body').animate({ // class you want to scroll to
        scrollTop: $(section).offset().top
      }, 100); //animation time length
    });
  }

  function bindScroll() {
    scrollToHome();
  }

  return bindScroll;
}());

// - $(section).height()