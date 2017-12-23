/*global $, console,alert */
$(function () {
	'use strict';
	$('.carousel').carousel({
		interval: 2000
	});
	
	//Show option box when click on the gear
	
	$('.gear-check').click(function () {
		$('.color-option').fadeToggle();
	});
	
	//Change Theme Color On Click 
	
	$('.option-box .color-option ul li')
		.eq(0).css("background", "#e41b17").end()
		.eq(1).css("background", "#178fe4").end()
		.eq(2).css("background", "#e48917").end()
		.eq(3).css("background", "#6fe417").end()
		.eq(4).css("background", "#fff");
	
	$('.option-box .color-option ul li').click(function () {
		$('link[href*="theme"]').attr("href", $(this).attr('data-value'));
	});
	
	//Loading Screen Hide
	
	$(window).load(function () {
		
		$('.loading h2').fadeOut(2000, function () {
			$(this).parent().fadeOut(2000, function () {
				$('body').css("overflow", "auto");
				
				$(this).remove();
				
			});
		});
	});
	
	$(window).scroll(function () {
		if ($(this).scrollTop() >= 700) {
			$('.scroll-top').fadeIn(2000);
		} else {
			$('.scroll-top').fadeOut(1000);
		}
	});
	
	$('.scroll-top').click(function () {
		$('html,body').animate({ scrollTop : 0 }, 1000);
	});
	
});