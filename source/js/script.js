var mainNav = document.querySelector(".main-nav");
var mainToggle = document.querySelector(".main-nav__toggle");

mainNav.classList.remove("main-nav--nojs");

mainToggle.addEventListener("click", function () {
	if (mainNav.classList.contains("main-nav--closed")) {
		mainNav.classList.remove("main-nav--closed");
		mainNav.classList.add("main-nav--opened");
	} else {
		mainNav.classList.add("main-nav--closed");
		mainNav.classList.remove("main-nav--opened");
	}
});

// var sliderToggle = document.querySelectorAll(".slider__toggle");

// sliderToggle.addEventListener("click", function () {
	
// 	if (sliderToggle.classList.contains("slider__toggle--active")) {
// 		sliderToggle.classList.remove("slider__toggle--active");
// 	} else {
// 		sliderToggle.classList.add("slider__toggle--active");
// 	}
// });