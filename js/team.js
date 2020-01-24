$(function() {

    $(window).load(function(){
        $('#cover11').fadeOut();
   });
   
    $(window).scroll(function(){
        if($(window).scrollTop() >20){
            $('nav').addClass('fixed-top')
   
    
        }else{
            $('nav').removeClass('fixed-top')

        }
    })
})

$(window).scroll(()=>{
    $('nav').toggleClass('scrolled',$(this).scrollTop() > 20 )
    
  });