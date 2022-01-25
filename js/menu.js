$(document).ready(function(){
    var menuStatus = false;  
    $("#menuButton").click(function(){
        if(menuStatus){
            $("#menu").removeClass("menuOpen");
            $("#menu").addClass("menuClose");
            menuStatus = !menuStatus;
            return;
        }
        $("#menu").addClass("menuOpen");
        $("#menu").removeClass("menuClose");
        menuStatus = !menuStatus;
    });
    $(".menuButton_").click(function(){
        $("#menu").removeClass("menuOpen");
        $("#menu").addClass("menuClose");
        menuStatus = false;
    });
});