$(function(){
	$('.collapse-mobile-menu').on('show.bs.collapse', function(){
		$('.mobile-menu-collapse').find('.fa').removeClass().addClass('fa fa-times');
	});
	$('.collapse-mobile-menu').on('hide.bs.collapse', function(){
		$('.mobile-menu-collapse').find('.fa').removeClass().addClass('fa fa-bars');
	});

	// $(function(){
	// 	if ('#bio-sections a[data-toggle="tab"]').tab('show'){
	// 		$('#bio-more a:first').tab('show');
	// 	};
	// });	
	// $(document).ready(function () {
	// 	$("div.tab_container div.tab_content:first-child").show();
	// 	$("ul#bio-more li:first").addClass("active");
	// 	$('ul#bio-more > li').click(function () {
	// 		if (!($(this).hasClass('active'))) {
	// 			var thisLi = $(this);
	// 			var numLi = thisLi.index();
	// 			thisLi.addClass('active').siblings().removeClass('active');
	// 			thisLi.parent().next().children('div').hide().eq(numLi).show();
	// 		}
	// 	});
	// });

});	