
//.....................preloader.................
 
// makes sure the whole site is loaded

jQuery(window).load(function() {
        // will first fade out the loading animation

    jQuery("#status").delay(5000).fadeOut("slow");

        // will fade out the whole DIV that covers the website.

    jQuery("#preloader").delay(5000).fadeOut("slow").remove();

});
    


/*........................ /// preloader.....................*/



$(document).ready(function() {
    

    // Анимация карточек в портфолио
    $(".thumbnail").hover(function(){
        $(this).find(".link-more").stop().animate({
            top:0
        }, 250);
    }, function () {
        $(this).find(".link-more").stop().animate({
            top: -250
        }, 250);
    });
    


    // Управление появлением мобильного меню
    $(".toggle_menu").click(function() {
        if( $(".mobile_menu_holder").is(":visible")) {
            $(".mobile_menu_holder").fadeOut(200);
        } else {
            $(".mobile_menu_holder").fadeIn(200);
        };
    });

    // Управление анимацией кнопки Меню
    $("#toggle").click(function() {
      $(this).toggleClass("on");
    });


	
	/* Page Scroll to id fn call */
	$("nav a,a[href='#top'],a[rel='m_PageScroll2id'],a.PageScroll2id, .topnav a").mPageScroll2id({
		highlightSelector:"nav a"
	});



});


