"use strict";

AOS.init();
$(window).scroll(function (e) {
  if ($(window).scrollTop() <= 0) {
    $('.navbar').addClass('bg-white');
    $('.navbar').removeClass('bg-light');
  } else {
    $('.navbar').addClass('bg-light');
    $('.navbar').removeClass('bg-white');
  }
});
$(document).ready(function () {
  $('.navbar-toggler').on('click', function () {
    $('.toggler-bar-top').toggleClass('toggler-bar-top-rotate');
    $('.toggler-bar-bottom').toggleClass('toggler-bar-bottom-rotate');
    $('.toggler-bar-middle').toggleClass('d-none');
  });
});
//# sourceMappingURL=all.js.map
