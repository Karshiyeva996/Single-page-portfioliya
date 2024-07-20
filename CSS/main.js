$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 5,
        margin: 10,
        loop: true,
        center: true,
        mouseDrag: true,
        autoplay: true,
        autoplayTimeout: 1000,
        responsive : {
            // breakpoint from 0 up
            320 : {
                items: 1,
                nav: true
            
            },
            // breakpoint from 480 up
            480 : {
               items: 2,
            },
            // breakpoint from 768 up
            768 : {
                items: 3,
            }
        }
       
    });
    
  }); 

  