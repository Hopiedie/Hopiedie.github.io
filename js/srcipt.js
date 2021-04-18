$(document).ready(function(){
    $('.pidor__slider').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        prevArrow: '<button type="button" class="slick-prev"><img src="img/left.png" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/right.png" alt=""></button>'
    });

       $('ul.staff__tabs').on('click', 'li:not(.staff__tab_active)', function() {
        $(this)
          .addClass('staff__tab_active').siblings().removeClass('staff__tab_active')
          .closest('div.container').find('div.staff__catalogue').removeClass('staff__catalogue_active').eq($(this).index()).addClass('staff__catalogue_active');
    });
    new WOW().init()

    var typed = new Typed(".typing",{
        strings: ["Cock Sucker","Fucking slave","Anal Boy", "Boy next door"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });


  $('.staff__card_link').on('click', function(e){
    e.preventDefault();
    $(this).parent().parent().addClass('staff__card_active');
  });
  
  $('.staff__card_link_back').on('click', function(e){
    e.preventDefault();
    $(this).parent().parent().removeClass('staff__card_active');
  });
  
$('.people__slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,

  prevArrow: '<button type="button" class="people-prev"><img src="icons/left.svg" alt=""></button>',
  nextArrow: '<button type="button" class="people-next"><img src="icons/right.svg" alt=""></button>'
});

});
