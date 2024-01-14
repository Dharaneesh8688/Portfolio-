
$(document).ready(function() {
   
    $('#fade').hide();
    $('.card').hide();
    $('#about').hide();
    $('#skills').hide();
   
         $(document).ready(function() {
            $('#fade').slideDown(3000);
           
         });


         $(window).scroll(function(){
          
            $('#about').slideDown(3000);
        });
        $(window).scroll(function() {
            var targetPosition = $('#skills').offset().top;
            var scrollPosition = $(window).scrollTop();
            var offset = 10;
            if (scrollPosition = targetPosition - offset) {
                $('#skills').slideDown(3000);
                $
            }
        });
        $(window).scroll(function() {
            var targetPosition = $('#about').offset().top;
            var scrollPosition = $(window).scrollTop();
            var offset = 10;
            if (scrollPosition = targetPosition - offset) {
                $('.card').slideDown(5000);
                $
            }
        });
      
    });
