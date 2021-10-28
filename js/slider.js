$(document).ready(function(){
    $('#slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: $('#btn-left'),
        nextArrow: $('#btn-right')
    })
});