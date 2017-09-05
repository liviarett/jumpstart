$(document).ready(function(){
  $('.carousel').slick({
      autoplay: true,
      autoplaySpeed: 4000,
      arrows: false,
      draggable: false,
      pauseOnFocus: false,
      pauseOnHover: false
  });
    
 /*   var lastScrollTop = 0;
    
    $(window).scroll(function() {
        var scrollTop = $(this).scrollTop();
        if (scrollTop - lastScrollTop > 50) {
            var navHeight = $('.navbar').css('height');
            $('.navbar').animate({
                top: '-' + navHeight
            }, 150);
            lastScrollTop = scrollTop;
        } else if (lastScrollTop - scrollTop > 50) {
            $('.navbar').animate({
                top: '0px'
            }, 150);
            lastScrollTop = scrollTop;
        }
    });
});*/

    var scrollPosition = 0;                 //x
    
    $(window).scroll(function() {
        
    var scrollDown = $(this).scrollTop();   //y
    
        if (scrollDown - scrollPosition > 50) {
            var navbarHeight = $('.navbar').css('height');                                 //z
            $('.navbar').animate({
                top: '-' + navbarHeight
                }, 150);
            
            scrollPosition = scrollDown;
        
            console.log(scrollPosition);
            
        } else if (scrollPosition - scrollDown > 50) {
            $('.navbar').animate({
                top: '0px'
                }, 150);

            scrollPosition = scrollDown;
            console.log(scrollPosition);
        };
    });
    });
