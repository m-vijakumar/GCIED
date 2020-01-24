(function ($) {
  // "use strict";
	var nav = $('nav');
  var navHeight = nav.outerHeight();
    $(window).load(function(){
        $('#cover11').fadeOut();
   });
    $(window).scroll(()=>{
       $('nav').toggleClass('scrolled',$(this).scrollTop() > 160 )
       
     });
   
   $(window).resize(()=>{
     If($(this).width()<991)
     $('navbar-brand').remove('navbar-band') 
   })

   
   $('#navicon').on("click",function (){
       
    if($('#navicon').hasClass('fa fa-bars')){
        $('#navicon').removeClass('fa fa-bars')
        $('#navicon').addClass('fa fa-close')
    }else{
        $('#navicon').removeClass('fa fa-close')
        $('#navicon').addClass('fa fa-bars')
    }
    

  })

   $('.nav-item[href="#"]:not([href="#"])').on("click", function () {
           if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
               var target = $(this.hash);
               target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
               if (target.length) {
                   $('html, body').animate({
                       scrollTop: (target.offset().top - navHeight + 5)
                   }, 1000, "easeInOutExpo");
                   return false;
               }
           }
       });
   
    //    $('a[href^="#"]').on('click', function (e) {
    //     e.preventDefault();
    //     $(document).off("scroll");
        
    //     $('a').each(function () {
    //         $(this).removeClass('active');
    //     })
    //     $(this).addClass('active');
    //      var target = this.hash,
    //      menu = target;
    //     $target = $(target);
              
    //    $('html, body').stop().animate({
    //         'scrollTop': $target.offset().top+2
    //     }, 600, 'swing', function () {
    //         window.location.hash = target;
    //         $(document).on("scroll", onScroll);
    //     });
    // });

       $('a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
        $('#navicon').removeClass('fa fa-close')
        $('#navicon').addClass('fa fa-bars')
    });
     $('body').scrollspy({
           target: '.navbar',
           offset: 50
       });
   
   })(jQuery)
    function myfun(){
   
     document.getElementById('feed').value= " " ;
   
     }
     