// Preloader
$(window).on('load', function () {
	$('html').removeClass('sv');
    var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');
});


//Плавность перехода по якорям
$(function(){
  $('a[href^="#"]').on('click', function(event) {
    // отменяем стандартное действие
    event.preventDefault();
    
    var sc = $(this).attr("href"),
        dn = $(sc).offset().top;
    
    $('html, body').animate({scrollTop: dn}, 1000);
    
    /*
    * 1000 скорость перехода в миллисекундах
    */
  });
});

//Анимации появления элементов сайта

ScrollReveal().reveal('.centered', {
    delay: 350,
    duration: 500,
    distance: '50px'
});

ScrollReveal().reveal('h2', {
    delay: 250,
    duration: 500,
    distance: '50px',
    origin: 'left'
});

ScrollReveal().reveal('h3', {
    delay: 250,
    duration: 500,
    distance: '50px'
});

ScrollReveal().reveal('p', {
    delay: 350,
    duration: 500,
    distance: '50px',
    origin: 'right'
});

ScrollReveal().reveal('figure', {
    delay: 350,
    duration: 500,
    distance: '50px',
    origin: 'right'
});

ScrollReveal().reveal('a', {
    delay: 350,
    duration: 500,
    distance: '50px',
    origin: 'right'
});

ScrollReveal().reveal('img', {
    delay: 350,
    duration: 500
});

ScrollReveal().clean('ul.navbar-nav');
ScrollReveal().clean('.carousel h3');
ScrollReveal().clean('.carousel img');
ScrollReveal().clean('.navbar a');