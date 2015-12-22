$(function() {

	
	// REMOVE # FROM URL
	$( 'a[href="#"]' ).click( function(e) {
		e.preventDefault();
	});
	
	// BACKSTRETCH
	$(".achievements").backstretch("images/inspirations-bg.jpg");
	$(".testimonials").backstretch("images/testimonials-bg.jpg");
	$(".lead-profile").backstretch("images/lead-profile-bg.jpg");
	
	// MAIN SLIDER
	$(".mainslider .flexslider").flexslider({
		animation: "fade",
		easing: "swing",
		pauseOnHover: true, 
		controlNav: false,               
		directionNav: true,             
		prevText: "",           
		nextText: "",
		slideshowSpeed: 12000,
		animationSpeed: 800,
	});
	
	// CAROUSEL
	if($(window).width() < 767) {
	   // change functionality for smaller screens
	   $(".services-list-carousel .flexslider").flexslider({
			animation: "slide",
			animationLoop: false,
			pauseOnHover: true, 
			controlNav: false,               
			directionNav: true,             
			prevText: "",           
			nextText: "",
			itemMargin: 0,
			minItems: 1,
			maxItems: 1
		});
	} else {
	   // change functionality for larger screens
	   $(".services-list-carousel .flexslider").flexslider({
			animation: "slide",
			animationLoop: false,
			pauseOnHover: true, 
			controlNav: false,               
			directionNav: true,             
			prevText: "",           
			nextText: "",
			itemWidth: 210,
			itemMargin: 25,
			minItems: 1,
			maxItems: 3
		});
	}
	
	// ACCORDION
	var $active = $("#accordion .panel-collapse.in")
					.prev()
					.addClass("active");
					
	$active
		.find("a")
		.append("<span class=\"glyphicon glyphicon-minus pull-right\"></span>");
		
	$("#accordion .panel-heading")
		.not($active)
		.find('a')
		.prepend("<span class=\"glyphicon glyphicon-plus pull-right\"></span>");
	
	$("#accordion").on("show.bs.collapse", function (e) {	
		$("#accordion .panel-heading.active")
			.removeClass("active")
			.find(".glyphicon")
			.toggleClass("glyphicon-plus glyphicon-minus");				
		$(e.target)
			.prev()
			.addClass("active")
			.find(".glyphicon")
			.toggleClass("glyphicon-plus glyphicon-minus");		
	});
	
	$("#accordion").on("hide.bs.collapse", function (e) {
		$(e.target)
			.prev()
			.removeClass("active")
			.find(".glyphicon")
			.removeClass("glyphicon-minus")
			.addClass("glyphicon-plus");
	});
	
	// PROGRESS BAR
	setTimeout(function(){
        $('.progress-bar').each(function() {
            var me = $(this);
            var perc = me.attr("data-percentage");

            //TODO: left and right text handling

            var current_perc = 0;

            var progress = setInterval(function() {
                if (current_perc >= perc) {
                    clearInterval(progress);
                } else {
                    current_perc += 1;
                    me.css('width', (current_perc)+'%');
                }

                me.text((current_perc)+'%');
            }, 50);
        });
    },300);
	
	// TESTIMONIAL CAROUSEL
	$("#quote-carousel").carousel({
		pause: "hover",
		wrap: false,
		interval: 6000
	});	
	
	// IMAGE HOVER
	$(window).load(function(){
		$(".hcaption").hcaptions({
			  effect: "fade",
			  overlay_x: "center",
		      overlay_y: "center",
		});
	});
		
	// BADGES COUNTER
	function count($this){
		var current = parseInt($this.html(), 10);
		$this.html(++current);
		if(current !== $this.data('count')){
			setTimeout(function(){count($this)}, 50);
		}
	}        
	$(".badges-counter").each(function() {
	  $(this).data('count', parseInt($(this).html(), 10));
	  $(this).html('0');
	  count($(this));
	});
	
	// PORTFOLIO FILTERS
	$("#portfolio-filter li a").click(function(){
		$("#portfolio-filter li a").removeClass("active");
		var dc = $(this).attr('data-cat');
		if(dc=="all") {
			$('#portfolio-items li').fadeIn(600);			
			return;
		}
		$('#portfolio-items li').each(function(){
			if($(this).attr('data-cat').indexOf(dc) < 0) $(this).fadeOut(600); else $(this).fadeIn(600);
		});
	});
/*    
	// GOOGLE MAP
	$(".map").height(300);
	function initialize($) {
		var mapOptions = {	
			zoom: 8,
			center: new google.maps.LatLng(17.421306, 78.457553),
			disableDefaultUI: true
		};
		var map = new google.maps.Map(document.querySelector('.map'), mapOptions);
	}
	google.maps.event.addDomListener(window, 'load', initialize);
*/	
});

	function WriteMe(me){
		var sep = '@';
		var dot = '.';
		var url = 'mailto:';
		var dom = 'ioda-net';
		var tld = 'ch';
		var sub = '?subject=Informations à propos de geoportail.xyz';
		switch (me){
			case 'contact' : var murl = url+'contact'+sep+dom+dot+tld+sub; break;
			case 'webmaster' : var murl = url+'webmaster'+sep+dom+dot+tld+sub; break;
		}
		//alert(murl);
		document.location= murl;
	
	}
