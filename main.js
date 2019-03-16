$(function(){
    
    'use strict';
    
    
    $('.navbar li a').click(function(e){
        
        e.preventDefault();
        
        $('html, body').animate({
            
            scrollTop: $('#' +$(this).data('scroll')).offset().top
            
        }, 1000);        
    });
    
     $('.next').on('click', function(){
    var currentImg = $('.active');
    var nextImg = currentImg.next();

    if(nextImg.length){
      currentImg.removeClass('active').css('z-index', -10);
      nextImg.addClass('active').css('z-index', 10);
    }
  });

  $('.prev').on('click', function(){
    var currentImg = $('.active');
    var prevImg = currentImg.prev();

    if(prevImg.length){
      currentImg.removeClass('active').css('z-index', -10);
      prevImg.addClass('active').css('z-index', 10);
    }
  });
});