$(document).ready(function(){
    $('.category').on('click', function(){
        $(this).next('ul').slideToggle(); // Эффект сворачивания/разворачивания
    });
});
