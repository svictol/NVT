$(document).ready(function(){
    $('.category').on('click', function(){
        $(this).next('ul').slideToggle(); // Плавное сворачивание/разворачивание списка
    });
});
