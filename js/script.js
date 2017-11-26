
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



/*-------,бесконечный скролл ------*/

// var nextPages = [
//   'article1',
//   'article2',
//   'article3',
// ];

// $('.article-container').infiniteScroll({
//   path: function() {
//     return nextPages[ this.loadCount ] + '.html';
//   },
//   append: '.post',
//   elementScroll: false,
//   loadOnScroll: true,
// });

/*-------галерея ------*/

// $('.owl-carousel').owlCarousel({
//     loop:true,
//     margin:10,
//     nav:true,
//     responsive:{
//         0:{
//             items:1
//         },
//         768:{
//             items:2
//         },
//         992:{
//             items:3
//         },
//         1200:{
//             items:4
//         },
//         1307:{
//             items:5
//         }
//     }
// })

