// We define a function that takes one parameter named $.
(function ($) {

// Store our function as a property of Drupal.behaviors
  Drupal.behaviors.imageSwap = {
    attach: function (context, settings) {
         $('.team-item a img').hover(
         function () {
            src = $(this).attr('src');
//		alert(src);
            $(this).attr('src', src.replace('desature', 'myoriginal'));
         }, 
         function () {
//		alert(src);
            $(this).attr('src', src.replace('myoriginal', 'desature'));
         }
       );
    }
  }
}(jQuery));
