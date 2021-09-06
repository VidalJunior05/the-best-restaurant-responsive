$(function(){
    $('.back-to-top').hide();
    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            $('.back-to-top').fadeIn();
            
        }else{
            $('.back-to-top').fadeOut();
        }
    });
    $('.back-to-top').click(function(){
        $('html, body').animate({
            scrollTop:0
        }, 1000);
    });
});
$(document).ready(function(){
    $('#menu-mobile').click(function(){
        $(this).toggleClass('fa-times');
        $('.menu-desktop').toggleClass('nav-toggle');
    });

    $(window).on('scroll load',function(){
        $('#menu-mobile').removeClass('fa-times');
        $('.menu-desktop').removeClass('nav-toggle');
        
        //Scroll Spy - A classe active acompanha o scroll e muda 
        $('section').each(function(){

            let top = $(window).scrollTop();
            let height = $(this).height();
            let id = $(this).attr('id');
            let offset = $(this).offset().top - 200;

            if(top > offset && top < offset + height){
                $('.menu-desktop ul li a').removeClass('active');
                $('.menu-desktop').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });


    $('.menu .list .btn').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
       
        let src = $(this).attr('data-src');
        $('#menu-img').attr('src', src);
    });
});