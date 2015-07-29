$(document).ready(function() {
	function scroll_page() {
		if(jQuery(window).width() > 1000){
			var top_space = 232;
		}
		if(jQuery(window).width() < 1000){
			var top_space = 10;
		}
		$('.main_nav a').bind('click',function(event){
			 var $anchor = $(this);
				$('html, body').stop().animate({
					scrollTop: $($anchor.attr('href')).offset().top - top_space
				}, 1500 );
			event.preventDefault();
		});
	}
	jQuery(document).ready(scroll_page);
	jQuery(window).resize(scroll_page);
	
	
	$ ('.news_list li:even').addClass('odd');
	
	
	
	
		$('.hideme').each( function(i){
				var bottom_of_object = $(this).position().top + $(this).outerHeight() -  $(this).outerHeight()/4 ;
				var bottom_of_window = $(window).scrollTop() + $(window).height();
				
				/* If the object is completely visible in the window, fade it it */
				if( bottom_of_window > bottom_of_object ){
						
						$(this).animate({'opacity':'1'},500);    
				}
		}); 
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.hideme').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight() -  $(this).outerHeight()/4;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},500);
                    
            }
            
        }); 
    
    });
    
		
 });