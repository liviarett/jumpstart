$(document).ready(function(){
  $('.carousel').slick({
      autoplay: true,
      autoplaySpeed: 4000,
      arrows: false,
      draggable: false,
      pauseOnFocus: false
  });
    
    /*var scrollPosition = $(window).scroll(function () {
        return $(window).scrollTop();
    });
    
    console.log(scrollPosition);*/
    
    var scrollPosition = window.scrollY;

    scrollPosition = 0;
    
    $(window).scroll(function() {
    var scrollDown = $(this).scrollTop();
    
        if (scrollDown - scrollPosition > 50) {
            var navbarHeight = $('.navbar').scrollTop();
            $('.navbar').animate({
                top: '-' + scrollDown}, 150);
            
          /*  scrollPosition = scrollDown;*/
            
        } else {
            $('.navbar').animate({
                top: '0px'}, 150);    
        };
    });
    
});