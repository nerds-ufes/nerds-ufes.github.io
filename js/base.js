$(document).ready(function(){
    $(".showbibtex").click(function(){
        $(this).parent().parent().find('.bibTex').toggle();
        return;
    });

    $('.download-group div').click(function(){
       if(!$(this).find("i").hasClass("icon-rotate")){
            $(this).find('i').addClass("icon-rotate");  
            $(this).parent().find('ul').slideDown();
        }else{
            $(this).find('i').removeClass("icon-rotate");  
            $(this).parent().find('ul').slideUp();
        }
    });
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        // On-page links
        if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
        ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
            if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
                }, 500, function() {
                // Callback after animation
                // Must change focus!
                return false;
                var $target = $(target);
                $target.focus();
                if ($target.is(":focus")) { // Checking if the target was focused
                    return false;
                } else {
                    $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                    //$target.focus(); // Set focus again
                    };
                });
            }
        }
    });
});
$(window).scroll(function(){
    var scrollBottom = $(document).height() - ($(window).scrollTop() + $(window).height());
    if(scrollBottom < $("footer").height()){
        $('.back_to_top').fadeOut();
    }else{
        $('.back_to_top').fadeIn();
    }
});