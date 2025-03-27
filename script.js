function toggleMenu() {
	const menu = document.querySelector(".menu-links");
	const icon = document.querySelector("#hamburger-icon");
	menu.classList.toggle("open");
	icon.classList.toggle("open");
}
function outFunc() {
	var tooltip = document.getElementById("myTooltip");
	tooltip.innerHTML = "Copy to clipboard";
}
function copyNumberToClipboard() {
	var number = "+639604266837";
	navigator.clipboard.writeText(number);

	var tooltip = document.getElementById("myTooltip");
	tooltip.innerHTML = "Copied: " + number;
}

var GallerySlider = new Swiper('.gallery-slider', {
	effect: 'coverflow',
	grabCursor: true,
	centeredSlides: true,
	loop: true,
	slidesPerView: 'auto',
	coverflowEffect: {
	  rotate: 0,
	  stretch: 0,
	  depth: 100,
	  modifier: 2.5,
	},
	pagination: {
	  el: '.swiper-pagination',
	  clickable: true,
	},
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	}
  });