// $(document).on('click',function(){
// 	$('.collapse').collapse('hide');
// });

$(function(){

	$('.collapse.navbar-collapse').on('show.bs.collapse', function(){
		$('.navbar-toggle').find('.fa').removeClass().addClass('fa fa-times');
	});
	$('.collapse.navbar-collapse').on('hide.bs.collapse', function(){
		$('.navbar-toggle').find('.fa').removeClass().addClass('fa fa-bars');
	});

	$('#elastislide-box').elastislide({
		minItems: 1
	});
	$('#elastislide-sidebar-brochures').elastislide({
		minItems: 1
	});
	$('#elastislide-sidebar-boxes').elastislide({
		minItems: 1
	});
	$('#elastislide-partners').elastislide({
		minItems: 1
	});	
	

});
