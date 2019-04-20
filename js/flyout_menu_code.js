/*JS file of the Responsive jQuery Fixed Flyout Menu by Fabian Lins*/

$(document).ready(function() {

	/*Change this variable to true or false (no quotation marks) to scale the icons with the "--image_flyout_scaling_mobile" variable in the flyout_menu_style.css file.*/
		/*TIP! Using false works pretty well. Only change it if you would like to have a different scaling for the mobile icons.*/
		/*TIP! If you don't know what it does, just keep it false.*/
	use_flyout_menu_to_mobile_view=false;

	/*Change this variable to adjust the width for the mobile view. Make sure you keep the qutation marks and px - for example: "1023px".*/
		/*IMPORTANT! You need to set the use_flyout_menu_to_mobile_view variable to true to make use of this variable!*/
	change_flyout_menu_to_mobile_view="1023px";

	/*Change this variable to either "right" or "left" (with quotation marks) to set the position of the menu.*/
		/*TIP! Usually right looks better than left.*/
	flyout_menu_side="right";

	/*Change this variable to adjust the speed of the expanding or shrinking of the menu.*/
	flyout_animation_speed=100;

	/*Change this variable to adjust the speed when you scroll to the same page.*/
	flyout_menu_scroll_speed=500;

	/*DON'T CHANGE THIS VARIABLE!*/
	flyout_menu_active=false;

	/*DON'T CHANGE THIS VARIABLE!*/
	flyout_social_media_width="-"+($("#social_media_icon_flyout_parent").outerWidth(true).toString()+"px");

	/*Link check function*/
	function isExternal(url) {
        var match = url.match(/^([^:\/?#]+:)?(?:\/\/([^\/?#]*))?([^?#]+)?(\?[^#]*)?(#.*)?/);
        if (typeof match[1] === "string" && match[1].length > 0 && match[1].toLowerCase() !== location.protocol) return true;
        if (typeof match[2] === "string" && match[2].length > 0 && match[2].replace(new RegExp(":("+{"http:":80,"https:":443}[location.protocol]+")?$"), "") !== location.host) return true;
        return false;
    }

	if(flyout_menu_side==="left"){
		$(".arrow_menu:eq(0)").addClass("flyout_hide");
		$(".social_media_margin_pseudo").css("margin-left",flyout_social_media_width);
		$("#flyout_menu").addClass("flyout_menu_left");
	}
	else{
		$(".arrow_menu:eq(1)").addClass("flyout_hide");
		$(".social_media_margin_pseudo").css("margin-right",flyout_social_media_width);
		$("#flyout_menu").addClass("flyout_menu_right");
	}

	if($("#flyout_menu").outerHeight(true)>$(window).outerHeight())
	{
		$("#flyout_menu").addClass("scrollbar_flyout_menu");
	}

	$("#flyout_menu").removeClass("hide_flyout_menu_onload");

	function mediaQueryFlyoutMenu(){
		if (window.matchMedia("(max-width:"+change_flyout_menu_to_mobile_view+")").matches) {
			$(".social_media_icon_flyout").addClass("social_media_icon_flyout_mobile_width");
			flyout_social_media_width="-"+($("#social_media_icon_flyout_parent").outerWidth(true).toString()+"px");
			if(flyout_menu_side==="left") {
				$(".social_media_margin_pseudo").css("margin-left",flyout_social_media_width);
			}
			else{
				$(".social_media_margin_pseudo").css("margin-right",flyout_social_media_width);
			}		
		}
		else{
			$(".social_media_icon_flyout").removeClass("social_media_icon_flyout_mobile_width");
		}
	}

	if(use_flyout_menu_to_mobile_view===true){
		mediaQueryFlyoutMenu();
	}

	if(use_flyout_menu_to_mobile_view===true){
		$(window).on('resize', function(){	
			mediaQueryFlyoutMenu();
			flyout_social_media_width="-"+($("#social_media_icon_flyout_parent").outerWidth(true).toString()+"px");
			flyout_menu_active=false;
				if(flyout_menu_side==="left") {
					$(".arrow_menu_triangle").removeClass("triangle_left");
					$(".arrow_menu_triangle").addClass("triangle_right");
					$(".social_media_margin_pseudo").css("margin-left",flyout_social_media_width);
				}
				else{
					$(".arrow_menu_triangle").addClass("triangle_left");
					$(".arrow_menu_triangle").removeClass("triangle_right");
					$(".social_media_margin_pseudo").css("margin-right",flyout_social_media_width);
				}
		});
	}

	/* When you click on a link.*/
	$("#flyout_menu").on(
	"click keypress", function () {
		if(flyout_menu_active===false) {
			flyout_menu_active=true;
			if(flyout_menu_side==="left") {
				$(".social_media_margin_pseudo").animate({marginLeft:"0px"},flyout_animation_speed);
				$(".arrow_menu_triangle").addClass("triangle_left");
				$(".arrow_menu_triangle").removeClass("triangle_right");
			}
			else{
				$(".social_media_margin_pseudo").animate({marginRight:"0px"},flyout_animation_speed);
				$(".arrow_menu_triangle").removeClass("triangle_left");
				$(".arrow_menu_triangle").addClass("triangle_right");
			}
		}
		else {
			flyout_menu_active=false;
			if(flyout_menu_side==="left") {
				$(".social_media_margin_pseudo").animate({marginLeft: flyout_social_media_width},flyout_animation_speed);
				$(".arrow_menu_triangle").removeClass("triangle_left");
				$(".arrow_menu_triangle").addClass("triangle_right");
			}
			else{
				$(".social_media_margin_pseudo").animate({marginRight: flyout_social_media_width},flyout_animation_speed);
				$(".arrow_menu_triangle").addClass("triangle_left");
				$(".arrow_menu_triangle").removeClass("triangle_right");				
			}
		}
	});

	/* When you click on a link.*/
	$(".flyout_text_a").click(function(){
		var flyout_text_link = $(this).attr("href");
		if (typeof flyout_text_link==="undefined") {
			flyout_text_link = $(this).find("a").attr("href");
		}
		if((isExternal(flyout_text_link)==true) || (flyout_text_link.includes("/")==true) || (flyout_text_link.includes(".html")==true)){
			window.location.href = flyout_text_link;
		}
		else{
			$("html, body").animate({
				scrollTop: $(flyout_text_link).offset().top		
			}, flyout_menu_scroll_speed);
		}
	});

	/* When you move your mouse over the "arrow side" of the menu*/
	$(".arrow_menu").on(
	"mouseenter focusin", function () {
		$(".arrow_menu_triangle").addClass("mouseover_opacity");
	});

	/* When you move your mouse out of the "arrow side" of the menu*/
	$(".arrow_menu").on(
	"mouseleave focusout", function () {
		$(".arrow_menu_triangle").removeClass("mouseover_opacity");
	});

	/* Keyboard accessibility */
	$(document).keydown(function(e) {
		var key_pressed = e.keykey_pressed || e.which;
		/* Esc Key */
		if (key_pressed == "27") {
			if(flyout_menu_active===true) {
				if ($(".arrow_menu_triangle").is(":focus")||$(".flyout_text_a").is(":focus")||$(".social_media_icon_flyout").is(":focus")) {
					flyout_menu_active=false;
					if(flyout_menu_side==="left") {
						$(".social_media_margin_pseudo").animate({marginLeft: flyout_social_media_width},flyout_animation_speed);
						$(".arrow_menu_triangle").removeClass("triangle_left");
						$(".arrow_menu_triangle").addClass("triangle_right");
					}
					else{
						$(".social_media_margin_pseudo").animate({marginRight: flyout_social_media_width},flyout_animation_speed);
						$(".arrow_menu_triangle").addClass("triangle_left");
						$(".arrow_menu_triangle").removeClass("triangle_right");				
					}
				}
			document.activeElement.blur();	
			}
		}
	});
});