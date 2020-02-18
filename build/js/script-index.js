var mainNav = document.querySelector(".main-nav");
var mainToggle = document.querySelector(".main-nav__toggle");
var pageHeader = document.querySelector(".page-header");
var applicationSlogan = document.querySelector(".application__slogan");

pageHeader.classList.remove("page-header--nojs");
applicationSlogan.classList.remove("application__slogan--nojs");
mainNav.classList.remove("main-nav--nojs");

mainToggle.addEventListener("click", function () {
	if (mainNav.classList.contains("main-nav--closed")) {
		mainNav.classList.remove("main-nav--closed");
		mainNav.classList.add("main-nav--opened");
		pageHeader.classList.add("page-header--block");
		applicationSlogan.classList.add("application__slogan--block");
	} else {
		mainNav.classList.add("main-nav--closed");
		mainNav.classList.remove("main-nav--opened");
		pageHeader.classList.remove("page-header--block");
		applicationSlogan.classList.remove("application__slogan--block");
	}
});