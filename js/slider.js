$(document).ready(function(){
    $('#slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $('#btn-left'),
        nextArrow: $('#btn-right')
    })
});