(function ($) {
  'use strict';

  $(document).ready(function () {
    
    function blueasyMenu() {
      var $trigger = $('.trigger-nav'),
          $menu = $('.trigger-victim');
      
      $trigger.click(function() {
        $(this).next($menu).slideToggle();
      });
         //Button mobile
        
            
      $(window).resize(function() {
        if ( $(window).width() > 992 ) {
          $menu.removeAttr('style');
        }
      });
          //off display block
    }
    blueasyMenu();

  }); //end ready

}(jQuery));