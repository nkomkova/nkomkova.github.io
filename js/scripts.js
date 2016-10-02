$(function(){
	
	$('.form-control-search').focusin(function(){
		$('.enter').css('display', 'none');
		$('.sl').css('display', 'none');
		$('.navbar-registration').css('display', 'none');		
		$('.form-control-search').css('width', 265 + 'px');
		if (document.body.clientWidth < 993) {
			$('.form-control-search').css('width', 230 + 'px');
			$('.form-control-search').css('marginLeft', 5 + 'px');
		}
	});
	$('.form-control-search').focusout(function(){
		$('.enter').css('display', 'inline');
		$('.sl').css('display', 'inline');
		$('.navbar-registration').css('display', 'block');		
		$('.form-control-search').css('width', 87 + 'px');		
	});
	

	$('#carousel').carousel({
		interval: 4000
	});

	$('#partnerslide').elastislide();
	$('#elastislide2').elastislide();
	$('#news-carousel').elastislide();
	$('#news-carousel-small').elastislide({
		minItems: 1
	});

	$('.dropdown-toggle').dropdown();

	$('#small-menu').on('click', function(){
		$('.small-menu .dropdown-menu.dropdown-small-menu').slideToggle();
	});
	/*$('#dropdown-color').on('click', function(){
		$('.small-menu .dropdown-menu.dropdown-color-menu').slideToggle();
	});*/

/*	$('.collapse').on('show.bs.collapse', function(){
		$(this).prev().find('.glyphicon').removeClass().addClass('glyphicon glyphicon-menu-up');		
	});
	$('.collapse').on('hide.bs.collapse', function(){
		$(this).prev().find('.glyphicon').removeClass().addClass('glyphicon glyphicon-menu-down');		
	});*/


	$("[data-toggle=popover]").popover({
		html: true, 
		content: function() {
			return $('#popover-content').html();
		}
	});
});	

