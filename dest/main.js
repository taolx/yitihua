/**
 * Created by Andrew on 22.05.2017.
 */

$(document).ready(function(){
    $(".btn").on("click", function () {
     
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top - 60}, 1500);
    });
});