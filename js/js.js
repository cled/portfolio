$(function(){




	$('div.media').hide();
	$('div.media img').hide();
	$('div.magnify').hide();
	$('div.magnify2').hide();
	$('div.magnifyVideo').hide();
	$('div.magnifyVideo2').hide();
	$('div.transC > *').hide();
	$('div.minimize img').css({'height':0});
	$('.titlesBG').css({width: '234px'});

    
	$('div.content').each(function(){
        var isTransitioning = false;
        var isExpanded = false;
        var $currentContent = $(this);
        var $currentTitle = $currentContent.find('div.titlesBG');
        
        $currentTitle.click(function(){
            var $currentTitle = $(this);
            
            // only expand when minimized and not in transition
            if (!isTransitioning && !isExpanded) {

                isTransitioning = true;
                isExpanded = true;
                                                    
                //remove hover
                $currentTitle.removeClass('titleHover');
                //$currentTitle.find('a').removeClass('hack');
                
                //animate
                $currentTitle.animate({width: '600px'},400,'swing');
                $currentContent.animate({height:'260px'},200,'swing');

                setTimeout(function(){
                    $currentContent.find('div.media').slideDown(400);
                    $currentContent.find('div.transC .contentText').fadeIn(800);
                    $currentContent.find('div.transC .transparency').slideDown(600);
                
                
                    setTimeout(function(){
                        $currentContent.find('div.media img').fadeIn(500);
                                                                
                        setTimeout(function(){
                            $currentContent.find('div.magnify').fadeIn(400);
                            $currentContent.find('div.magnify2').fadeIn(400);
                            $currentContent.find('div.magnifyVideo').fadeIn(400);
                            $currentContent.find('div.magnifyVideo2').fadeIn(400);
                            $currentContent.find('div.minimize img').animate({height: '20px'},200,'swing',endExpand);
                            $currentContent.find('div.minimize').css({cursor:'pointer'});												
                        },300);
                    },100);
                    
                },300);
            }
        })
								
        $currentContent.find('div.minimize').click(function(){
            var $currentTitle = $currentContent.find('div.titlesBG');
                
            if (!isTransitioning && isExpanded) {
                isTransitioning = true;
                isExpanded = false;  
    
                //add hover
                $currentTitle.mouseleave(function(){if (!isExpanded){$currentTitle.addClass('titleHover')}});
    
                //$currentTitle.mouseleave(function(){if (!isExpanded){$currentTitle.find('a').addClass('hack')}});
                
                //animate
                $(this).find('img').animate({height: 0},150,'swing');
                $(this).css({cursor:'default'});
                
                $currentContent.animate({height:'45'},150,'swing');
                $currentContent.find('div.transC > *').hide(); 
                $currentContent.find('div.media').slideUp(150);
                $currentContent.find('div.media img').fadeOut(150);
                $currentContent.find('div.magnify').hide();
                $currentContent.find('div.magnify2').hide();
                $currentContent.find('div.magnifyVideo').hide();
                $currentContent.find('div.magnifyVideo2').hide();
                
                setTimeout(function(){
                    $currentContent.find('div.titlesBG').animate({width: '234px'},100,'swing',endMinimize);
                },150);
    
             }

         });    
        function endExpand() {
            isTransitioning = false;
        }
            
        function endMinimize() {
            isTransitioning = false;
        }
        
        $currentContent.find('div.overlay').overlay({
            expose: { 
                color: '#BAD0DB', 
                opacity: 0.7, 
                closeSpeed: 1000 
                }, 
            onLoad: 
    
            function() { 
                var wrap = this.getContent().find("div.wrap"); 
                if (wrap.is(":empty")) { 
                    wrap.load($currentContent.find('div.media').attr('href')); 
                }
            }
        })

        $currentContent.find('.magnify').click(function(){
            $currentContent.find('div.overlay').overlay().load();
        });
        /*
        var player1 = $f("player1", "flowplayer-3.1.5.swf");
        var player2 = $f("player2", "flowplayer-3.1.5.swf");

        $currentContent.find('div.overlayVideo').overlay({
            expose: { 
                color: '#BAD0DB', 
                opacity: 0.7, 
                closeSpeed: 1000 
            }, 					
            onLoad: function() {
                player1.load();
            },
            onClose: function() {
                player1.unload();
            }
        });
                 */               
        
        $currentContent.find('.magnifyVideo').click(function(){
            $currentContent.find('div.overlayVideo').overlay().load();
        });

        $currentContent.find('div.overlayVideo2').overlay({
            expose: { 
                color: '#BAD0DB', 
                opacity: 0.7, 
                closeSpeed: 1000 
            }, 
            onLoad: function() {
                player2.load();
            },
            onClose: function() {
                player2.unload();
            }
        });
                                
        
        $currentContent.find('.magnifyVideo2').click(function(){
                $currentContent.find('div.overlayVideo2').overlay().load();
        });					      
            
    });
});
