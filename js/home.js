$(document).ready(function(){
    var menuStatus = false;
    if($(window).scrollTop() > 0){
        $("#nav").addClass("headerFixed");
    }
    $(window).scroll(function(){
        if($(window).scrollTop() > 1){
            $("#nav").addClass("headerFixed");
        }else{
            $("#nav").removeClass("headerFixed");
        }
    });    
});