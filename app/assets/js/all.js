$(document).ready(function(){
	$('.hamburger').click(function(){
		$(this).toggleClass('open');
	});
});

Datepicker.locales["zh-TW"] = {
	days: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"],
	daysShort: ["日", "一", "二", "三", "四", "五", "六", "日"],
	daysMin: ["日", "一", "二", "三", "四", "五", "六", "日"],
	months: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
	monthsShort: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
	format: 'yyyy/mm/dd',
	titleFormat: "y年MM月",
	today: "今天",
	clear: "清除"
}


const mySwiper = new Swiper(".mySwiper", {
	loop: false,
	slidesPerView: 3,
	breakpoints: {
		375: {
			slidesPerView: 2,
			},
		767: {
			slidesPerView: 4,
		},
		1024: {
			slidesPerView: 6,
		},
	},
});


const programSwiper = new Swiper(".programSwiper", {
	autoplay: {
	  // delay: 2000,
	  // disableOnInteraction: false,
		disableOnInteraction: false,
		delay: 0,
	},
	speed: 1500,
	loop: true,
	slidesPerView: 3,
	spaceBetween: 16,
	breakpoints: {
		767: {
		slidesPerView: 5,
		},
		991: {
		slidesPerView: 7,
		},
	},
});


const courseSwiper = new Swiper(".courseSwiper", {
	effect: 'fade',
	fadeEffect: {
	crossFade: true
	},
	// cssMode: true,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	pagination: {
		el: ".swiper-pagination",
	},
	mousewheel: true,
	keyboard: true,
});

const elem = document.querySelector('input[name="datepicker"]');
const datepicker = new Datepicker( elem, {
  autohide: true, // 選完日期自動隱藏
}); 

//漢堡選單點擊
$(document).ready(function(){
	$('.hamburger').click(function(){
		$(this).toggleClass('open');
	});
});

AOS.init({
	// Global settings:
	disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
	startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
	initClassName: 'aos-init', // class applied after initialization
	animatedClassName: 'aos-animate', // class applied on animation
	useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
	disableMutationObserver: false, // disables automatic mutations' detections (advanced)
	debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
	throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
	

	// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
	offset: 120, // offset (in px) from the original trigger point
	delay: 0, // values from 0 to 3000, with step 50ms
	duration: 400, // values from 0 to 3000, with step 50ms
	easing: 'ease', // default easing for AOS animations
	once: false, // whether animation should happen only once - while scrolling down
	mirror: false, // whether elements should animate out while scrolling past them
	anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});