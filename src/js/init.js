import $ from "jquery"

// -----------------------------------------------------
// ---------------   FUNCTIONS    ----------------------
// -----------------------------------------------------

export function loadAllScripts() {
	"use strict";

	cavani_tm_modalbox();
	cavani_tm_page_transition();
	cavani_tm_trigger_menu();
	cavani_tm_my_progress();
	//cavani_tm_circular_progress();
	cavani_tm_portfolio_popup();
	cavani_tm_news_popup();
	cavani_tm_service_popup();
	cavani_tm_cursor();
	cavani_tm_imgtosvg();
	//cavani_tm_popup();
	cavani_tm_portfolio();
	cavani_tm_data_images();
	cavani_tm_contact_form();
	//cavani_tm_mycarousel();
	//glitch();
	hashtag();
	//cavani_tm_ripple();
	cavani_tm_moving_box();
	cavani_tm_my_load();
}

// -----------------------------------------------------
// --------------------   MODALBOX    ------------------
// -----------------------------------------------------

export function cavani_tm_modalbox() {

	"use strict";

	$('.cavani_tm_all_wrap').prepend('<div class="cavani_tm_modalbox"><div class="box_inner"><div class="close"><a href="#"><i class="icon-cancel"></i></a></div><div class="description_wrap"></div></div></div>');
}

// -----------------------------------------------------
// -------------   PAGE TRANSITION    ------------------
// -----------------------------------------------------

export function cavani_tm_page_transition() {

	"use strict";

	var section = $('.cavani_tm_section');
	var allLi = $('.transition_link li');
	var button = $('.transition_link a');
	var wrapper = $('.cavani_tm_all_wrap');
	var enter = wrapper.data('enter');
	var exit = wrapper.data('exit');

	button.on('click', function () {
		var element = $(this);
		var href = element.attr('href');
		if (element.parent().hasClass('cavani_tm_button')) {
			$('.menu .transition_link a[href="' + href + '"]').trigger('click');
			hashtag();
			return false;
		}
		var sectionID = $(href);
		var parent = element.closest('li');
		if (!parent.hasClass('active')) {
			allLi.removeClass('active');
			wrapper.find(section).removeClass('animated ' + enter);
			if (wrapper.hasClass('opened')) {
				wrapper.find(section).addClass('animated ' + exit);
			}
			parent.addClass('active');
			wrapper.addClass('opened');
			wrapper.find(sectionID).removeClass('animated ' + exit).addClass('animated ' + enter);
			$(section).addClass('hidden');
			$(sectionID).removeClass('hidden').addClass('active');
		}
		return false;
	});
}

// -----------------------------------------------------
// ---------------   TRIGGER MENU    -------------------
// -----------------------------------------------------

export function cavani_tm_trigger_menu() {

	"use strict";

	var hamburger = $('.cavani_tm_topbar .trigger .hamburger');
	var mobileMenu = $('.cavani_tm_mobile_menu');
	var mobileMenuList = $('.cavani_tm_mobile_menu ul li a');

	hamburger.on('click', function () {
		var element = $(this);

		if (element.hasClass('is-active')) {
			element.removeClass('is-active');
			mobileMenu.removeClass('opened');
		} else {
			element.addClass('is-active');
			mobileMenu.addClass('opened');
		}
		return false;
	});

	mobileMenuList.on('click', function () {
		$('.cavani_tm_topbar .trigger .hamburger').removeClass('is-active');
		mobileMenu.removeClass('opened');
		return false;
	});
}

// -------------------------------------------------
// -------------  PROGRESS BAR  --------------------
// -------------------------------------------------

export function cavani_tm_my_progress() {

	"use strict";

	$('.progress_inner').each(function () {
		var progress = $(this);
		var pValue = parseInt(progress.data('value'), 10);
		var pColor = progress.data('color');
		var pBarWrap = progress.find('.bar');
		var pBar = progress.find('.bar_in');
		pBar.css({ width: pValue + '%', backgroundColor: pColor });
		setTimeout(function () { pBarWrap.addClass('open'); });
	});
}

// -----------------------------------------------------
// ---------------   CIRCULAR PROGRESS   ---------------
// -----------------------------------------------------

export function cavani_tm_circular_progress() {

	"use strict";

	var ww = $(window).width();
	var circVal;

	if (ww > 1400) {
		circVal = 120;
	}
	else if (ww >= 768) {
		circVal = 100;
	}
	else {
		circVal = 80;
	}

	$('.circular_progress_bar .myCircle').each(function () {
		var element = $(this);
		element.append('<span class="number"></span>');
		var value = element.data('value');
		element.circleProgress({
			size: circVal,
			value: 0,
			animation: { duration: 1400 },
			thickness: 3,
			fill: "#7d7789",
			emptyFill: 'rgba(0,0,0,0)',
			startAngle: -Math.PI / 2
		}).on('circle-animation-progress', function (event, progress, stepValue) {
			element.find('.number').text(parseInt(stepValue.toFixed(2) * 100) + '%');
		});
		element.circleProgress('value', 1.0);
		setTimeout(function () { element.circleProgress('value', value); }, 1400);
	});
}

// -------------------------------------------------
// -----------  PORTFOLIO POPUP  -------------------
// -------------------------------------------------

export function cavani_tm_portfolio_popup() {

	"use strict";

	var modalBox = $('.cavani_tm_modalbox');
	var button = $('.cavani_tm_portfolio .portfolio_popup');
	var closePopup = modalBox.find('.close');

	button.off().on('click', function () {
		var element = $(this);
		var parent = element.closest('.list_inner');
		var content = parent.find('.hidden_content').html();
		var image = parent.find('.image .main').data('img-url');
		var details = parent.find('.details').html();
		modalBox.addClass('opened');
		modalBox.find('.description_wrap').html(content);
		modalBox.find('.popup_details').prepend('<div class="top_image"><img src="img/thumbs/4-2.jpg" alt="" /><div class="main" data-img-url="' + image + '"></div></div>');
		modalBox.find('.popup_details .top_image').after('<div class="portfolio_main_title">' + details + '<div>');
		cavani_tm_data_images();
		return false;
	});
	closePopup.on('click', function () {
		modalBox.removeClass('opened');
		modalBox.find('.description_wrap').html('');
		return false;
	});
}

// -------------------------------------------------
// ----------------  NEWS POPUP  -------------------
// -------------------------------------------------

export function cavani_tm_news_popup() {

	"use strict";

	var modalBox = $('.cavani_tm_modalbox');
	var button = $('.cavani_tm_news .news_list > ul > li .post_title h3 a');
	var closePopup = modalBox.find('.close');

	button.on('click', function () {
		var element = $(this);
		var parent = element.closest('li');
		var content = parent.find('.news_hidden_details').html();
		var image = parent.data('img');
		var category = parent.find('.extra_metas').html();
		var title = parent.find('.post_title a').text();
		modalBox.addClass('opened');
		modalBox.find('.description_wrap').html(content);
		modalBox.find('.news_popup_informations').prepend('<div class="image"><img src="img/thumbs/4-2.jpg" alt="" /><div class="main" data-img-url="' + image + '"></div></div>');
		modalBox.find('.news_popup_informations .image').after('<div class="details"><div class="meta">' + category + '</div><div class="title"><h3>' + title + '</h3></div><div>');
		cavani_tm_data_images();
		return false;
	});
	closePopup.on('click', function () {
		modalBox.removeClass('opened');
		modalBox.find('.description_wrap').html('');
		return false;
	});
}

// -------------------------------------------------
// -------------  SERVICE POPUP  -------------------
// -------------------------------------------------

export function cavani_tm_service_popup() {

	"use strict";

	var modalBox = $('.cavani_tm_modalbox');
	var button = $('.cavani_tm_service .service_list ul li .cavani_tm_full_link');
	var closePopup = modalBox.find('.close');

	button.on('click', function () {
		var element = $(this);
		var parent = element.closest('.list_inner');
		var elImage = parent.find('.popup_service_image').attr('src');
		var title = parent.find('.title').html();
		var content = parent.find('.service_hidden_details').html();
		modalBox.addClass('opened');
		modalBox.find('.description_wrap').html(content);
		modalBox.find('.service_popup_informations').prepend('<div class="image"><img src="img/thumbs/4-2.jpg" alt="" /><div class="main" data-img-url="' + elImage + '"></div></div>');
		cavani_tm_data_images();
		modalBox.find('.service_popup_informations .image').after('<div class="main_title"><h3>' + title + '</h3></div>');
		return false;
	});
	closePopup.on('click', function () {
		modalBox.removeClass('opened');
		modalBox.find('.description_wrap').html('');
		return false;
	});
}

// -----------------------------------------------------
// ---------------   PRELOADER   -----------------------
// -----------------------------------------------------

export function cavani_tm_preloader() {

	"use strict";

	var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
	var preloader = $('#preloader');

	if (!isMobile) {
		setTimeout(function () {
			preloader.addClass('preloaded');
		}, 800);
		setTimeout(function () {
			preloader.remove();
		}, 2000);

	} else {
		preloader.remove();
	}
}

// -----------------------------------------------------
// -----------------   MY LOAD    ----------------------
// -----------------------------------------------------

export function cavani_tm_my_load() {

	"use strict";

	var speed = 500;
	setTimeout(function () { cavani_tm_preloader(); }, speed);
}

// -----------------------------------------------------
// ------------------   CURSOR    ----------------------
// -----------------------------------------------------

export function cavani_tm_cursor() {

	"use strict";

	var myCursor = $('.mouse-cursor');

	if (myCursor.length) {
		if ($("body")) {
			const e = document.querySelector(".cursor-inner"),
				t = document.querySelector(".cursor-outer");
			let n, i = 0,
				o = !1;
			window.onmousemove = function (s) {
				o || (t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)", n = s.clientY, i = s.clientX
			}, $("body").on("mouseenter", "a,.cavani_tm_topbar .trigger, .cursor-pointer", function () {
				e.classList.add("cursor-hover"), t.classList.add("cursor-hover")
			}), $("body").on("mouseleave", "a,.cavani_tm_topbar .trigger, .cursor-pointer", function () {
				$(this).is("a") && $(this).closest(".cursor-pointer").length || (e.classList.remove("cursor-hover"), t.classList.remove("cursor-hover"))
			}), e.style.visibility = "visible", t.style.visibility = "visible"
		}
	}
};

// -----------------------------------------------------
// ---------------    IMAGE TO SVG    ------------------
// -----------------------------------------------------

export function cavani_tm_imgtosvg() {

	"use strict";

	$('img.svg').each(function () {

		var $img = $(this);
		var imgClass = $img.attr('class');
		var imgURL = $img.attr('src');

		$.get(imgURL, function (data) {
			// Get the SVG tag, ignore the rest
			var $svg = $(data).find('svg');

			// Add replaced image's classes to the new SVG
			if (typeof imgClass !== 'undefined') {
				$svg = $svg.attr('class', imgClass + ' replaced-svg');
			}

			// Remove any invalid XML tags as per http://validator.w3.org
			$svg = $svg.removeAttr('xmlns:a');

			// Replace image with new SVG
			$img.replaceWith($svg);

		}, 'xml');

	});
}

// -----------------------------------------------------
// --------------------   POPUP    ---------------------
// -----------------------------------------------------

export function cavani_tm_popup() {

	"use strict";

	$('.gallery_zoom').each(function () { // the containers for all your galleries
		$(this).magnificPopup({
			delegate: 'a.zoom', // the selector for gallery item
			type: 'image',
			gallery: {
				enabled: true
			},
			removalDelay: 300,
			mainClass: 'mfp-fade'
		});

	});
	$('.popup-youtube, .popup-vimeo').each(function () { // the containers for all your galleries
		$(this).magnificPopup({
			disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false
		});
	});

	$('.soundcloude_link').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true,
		},
	});
}

// -------------------------------------------------
// -----------------    PORTFOLIO    ---------------
// -------------------------------------------------

export function cavani_tm_portfolio() {

	"use strict";

	if ($().isotope) {

		// Needed variables
		var filter = $('.cavani_tm_portfolio .portfolio_filter ul');

		if (filter.length) {
			// Isotope Filter 
			filter.find('a').on('click', function () {
				var element = $(this);
				var selector = element.attr('data-filter');
				var list = element.closest('.cavani_tm_portfolio').find('.portfolio_list').children('ul');
				list.isotope({
					filter: selector,
					animationOptions: {
						duration: 750,
						easing: 'linear',
						queue: false
					}
				});

				filter.find('a').removeClass('current');
				element.addClass('current');
				return false;
			});
		}
	}
}

// -----------------------------------------------------
// ---------------   DATA IMAGES    --------------------
// -----------------------------------------------------

export function cavani_tm_data_images() {

	"use strict";

	var data = $('*[data-img-url]');

	data.each(function () {
		var element = $(this);
		var url = element.data('img-url');
		element.css({ backgroundImage: 'url(' + url + ')' });
	});
}

// -----------------------------------------------------
// ----------------    CONTACT FORM    -----------------
// -----------------------------------------------------

export function cavani_tm_contact_form() {

	"use strict";

	$(".contact_form #send_message").on('click', function () {

		var name = $(".contact_form #name").val();
		var email = $(".contact_form #email").val();
		var message = $(".contact_form #message").val();
		var subject = $(".contact_form #subject").val();
		var success = $(".contact_form .returnmessage").data('success');

		$(".contact_form .returnmessage").empty(); //To empty previous error/success message.
		//checking for blank fields	
		if (name === '' || email === '' || message === '') {

			$('div.empty_notice').slideDown(500).delay(2000).slideUp(500);
		}
		else {
			// Returns successful data submission message when the entered information is stored in database.
			$.post("modal/contact.php", { ajax_name: name, ajax_email: email, ajax_message: message, ajax_subject: subject }, function (data) {

				$(".contact_form .returnmessage").append(data);//Append returned message to message paragraph


				if ($(".contact_form .returnmessage span.contact_error").length) {
					$(".contact_form .returnmessage").slideDown(500).delay(2000).slideUp(500);
				} else {
					$(".contact_form .returnmessage").append("<span class='contact_success'>" + success + "</span>");
					$(".contact_form .returnmessage").slideDown(500).delay(4000).slideUp(500);
				}

				if (data === "") {
					$("#contact_form")[0].reset();//To reset form fields on success
				}

			});
		}
		return false;
	});
}

// -----------------------------------------------------
// --------------    OWL CAROUSEL    -------------------
// -----------------------------------------------------

export function cavani_tm_mycarousel() {

	"use strict";

	var carousel = $('.cavani_tm_about .testimonials .owl-carousel');

	carousel.owlCarousel({
		loop: true,
		items: 2,
		lazyLoad: false,
		margin: 30,
		autoplay: true,
		autoplayTimeout: 7000,
		dots: false,
		nav: false,
		navSpeed: false,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			}
		}
	});

}

// -----------------------------------------------------
// -------------------    HASHTAG    -------------------
// -----------------------------------------------------

export function hashtag() {
	"use strict";
	var ccc = $('.cavani_tm_header .menu .ccc');
	var element = $('.cavani_tm_header .menu .active a');
	$('.cavani_tm_header .menu a').on('mouseenter', function () {
		var e = $(this);
		currentLink(ccc, e);
	});
	$('.cavani_tm_header .menu').on('mouseleave', function () {
		element = $('.cavani_tm_header .menu .active a');
		currentLink(ccc, element);
		element.parent().siblings().removeClass('mleave');
	});
	currentLink(ccc, element);

}

export function currentLink(ccc, e) {
	"use strict";
	if (!e.length) { return false; }
	var left = e.offset().left;
	var width = e.outerWidth();
	var menuleft = $('.cavani_tm_header .menu').offset().left;
	e.parent().removeClass('mleave');
	e.parent().siblings().addClass('mleave');
	ccc.css({ left: (left - menuleft) + 'px', width: width + 'px' });

}

// -------------------------------------------------
// -------------  GLITCH  --------------------------
// -------------------------------------------------

export function glitch() {
	"use strict";

	$(".glitch").mgGlitch({
		destroy: false,
		glitch: true,
		scale: true,
		blend: true,
		blendModeType: "hue",
		glitch1TimeMin: 200,
		glitch1TimeMax: 400,
		glitch2TimeMin: 10,
		glitch2TimeMax: 100
	});
}

// -------------------------------------------------
// -------------  RIPPLE  --------------------------
// -------------------------------------------------

export function cavani_tm_ripple() {

	"use strict";

	$('#ripple').ripples({
		resolution: 500,
		dropRadius: 20,
		perturbance: 0.04
	});
}

// -------------------------------------------------
// -------------  MOVING BOX  ----------------------
// -------------------------------------------------

export function cavani_tm_moving_box() {

	"use strict";

	var wrapper = $('.cavani_tm_news');
	var list = wrapper.find('.news_list > ul > li');
	if (!$('.cavani_fn_moving_box').length) {
		$('body').append('<div class="cavani_fn_moving_box"></div>');
	}
	var box = $('.cavani_fn_moving_box');

	list.on('mouseenter', function () {
		var element = $(this);
		var image = element.data('img');
		var ellOffset = element.offset().top;

		if (image === '') {
			box.removeClass('opened');
			return false;
		}

		box.addClass('opened');
		box.css({ backgroundImage: 'url(' + image + ')', top: ellOffset + 'px' });

	}).on('mouseleave', function () {
		box.removeClass('opened');
	});
}
