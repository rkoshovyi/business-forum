$(document).ready(function() {
	var regButton = $('.header__button');
	var regButton2 = $('.first__button');
	var regNav = $('.modal-registration');
	var regClose = $('.modal-registration__close');
	var regMenu = $('.menu');


	$(regButton).click(function() {
		$(regNav).toggleClass('hide'),
		$(regMenu).addClass('menu--hide'),
		$(regNav).addClass('zoomIn');
	})

	$(regButton2).click(function() {
		$(regNav).toggleClass('hide'),
		$(regNav).addClass('zoomIn');
	})

	$(regClose).click(function() {
		$(regNav).addClass('hide'),
		$(regNav).addClass('zoomIn');
	})
}); 