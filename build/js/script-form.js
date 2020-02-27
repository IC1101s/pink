var mainNav = document.querySelector(".main-nav");
var mainToggle = document.querySelector(".main-nav__toggle");
var pageHeader = document.querySelector(".page-header");
var caption = document.querySelector(".caption");
var captionTitle = document.querySelector(".caption__title");

pageHeader.classList.remove("page-header--nojs");
mainNav.classList.remove("main-nav--nojs");
caption.classList.remove("caption--nojs");
captionTitle.classList.remove("caption__title--nojs");

mainToggle.addEventListener("click", function () {
	if (mainNav.classList.contains("main-nav--closed")) {
		mainNav.classList.remove("main-nav--closed");
		mainNav.classList.add("main-nav--opened");
		pageHeader.classList.add("page-header--block");
		caption.classList.add("caption--block");
		captionTitle.classList.add("caption__title--block");
	} else {
		mainNav.classList.add("main-nav--closed");
		mainNav.classList.remove("main-nav--opened");
		pageHeader.classList.remove("page-header--block");
		caption.classList.remove("caption--block");
		captionTitle.classList.remove("caption__title--block");
	}
});