import $ from 'jquery'

// -----------------------------------------------------
// ---------------   FUNCTIONS    ----------------------
// -----------------------------------------------------

export function loadAllScripts() {
	"use strict";

	cavani_tm_modalbox();
	cavani_tm_page_transition();
	cavani_tm_trigger_menu();
	cavani_tm_portfolio_popup();
	cavani_tm_cursor();
	cavani_tm_imgtosvg();
	cavani_tm_portfolio();
	cavani_tm_data_images();
	hashtag();
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
