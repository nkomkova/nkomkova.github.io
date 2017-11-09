
/*-------выпадающее меню при наведении ------*/

// jQuery('.desctop-menu ul.nav li.dropdown').hover(function() {
//   jQuery(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn();
// }, function() {
//   jQuery(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut();
// });

$(function(){
	$('.collapse-mobile-menu').on('show.bs.collapse', function(){
		$('.mobile-menu-collapse').find('.fa').removeClass().addClass('fa fa-times');
	});
	$('.collapse-mobile-menu').on('hide.bs.collapse', function(){
		$('.mobile-menu-collapse').find('.fa').removeClass().addClass('fa fa-bars');
	});

});

var nextPages = [
  'article1',
  'article2',
  'article3',
];

$('.article-container').infiniteScroll({
  path: function() {
    return nextPages[ this.loadCount ] + '.html';
  },
  append: '.post',
  elementScroll: false,
  loadOnScroll: true,
});

