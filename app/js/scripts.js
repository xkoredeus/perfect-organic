$(function() {
  // $('.main-slider__cnt').owlCarousel({
  //     nav: true,
  //     items: 1,
  //     loop: false,
  //     dots: true,
  //     navText: ["<img src='img/slider__arrow_prev.png'>", "<img src='img/slider__arrow_next.png'>"],
  // });
	// $('.team__cnt').owlCarousel({
 //      nav: false,
 //      dots: true,
 //      items: 5,
 //      loop: true,
 //      margin: 20,
 //      center:true,
 //      autoWidth:true,
 //      mouseDrag: false,
 //      responsive : {
 //        0   : {
 //            items: 1
 //        },
 //        380 : {
 //            items: 1
 //        },
 //        480 : {
 //            items: 1
 //        },
 //        768 : {
 //            items: 3
 //        },
 //        1040 : {
 //            items: 4
 //        }
 //      }
	// });
	// $(".tab-content__item").hide();
	// $(".tabs__container div.tab-content__item:first-child").addClass('active');
	// $(".main-slider .main-slider__bg-item:first-child").addClass('active');
	//     $('ul.tabs__list > li').click(function () {
	//         if (!($(this).hasClass('active'))) {
	//             var thisLi = $(this);
	//             var numLi = thisLi.index();
	//             thisLi.addClass('active').siblings().removeClass('active');
	//             thisLi.parent().next().children('div').removeClass('active').eq(numLi).addClass('active','slow');
	//             thisLi.parent().parent().parent().parent().find('.main-slider__bg').children('.main-slider__bg-item').removeClass('active','slow').eq(numLi).addClass('active','slow');
	//             $('.reviews__cnt_text').owlCarousel('refresh');
	//         }
 //    });
 $('.content-menu__wrp').on('click', function(){
     $(this).find('.content-menu').toggleClass('active');
  });
  $('.content-menu__cross').on('click', function(){
     $('.content-menu__wrp').toggleClass('active');
  });
  //стилизация input type number
  
	// $(function() {
	// 	var $shuka = 
	//   (function quantityProducts() {
	//     var $quantityArrowMinus = $(".cart__item-quantity-minus");
	//     var $quantityArrowPlus = $(".cart__item-quantity-plus");
	//     var $quantityNum = $(".cart__item-quantity-num");
	//     $quantityArrowMinus.click(quantityMinus);
	//     $quantityArrowPlus.click(quantityPlus);
	//     function quantityMinus() {
	//       if ($quantityNum.val() > 1) {
	//         $quantityNum.val(+$quantityNum.val() - 1);
	//       }
	//     }
	//     function quantityPlus() {
	//       $quantityNum.val(+$quantityNum.val() + 1);
	//     }
	//   })();
	// });

	// $('.cart__item-quantity-minus').on('click', function(){
	// 	if ($(this).next('.cart__item-quantity-num').val() > 1) {
	// 		$(this).next('.cart__item-quantity-num').val(+$('.cart__item-quantity-num').val() - 1);
	// 	}
	// });
	// $('.cart__item-quantity-plus').on('click', function(){
	// 	$(this).prev('.cart__item-quantity-num').val(+$('.cart__item-quantity-num').val() + 1);
	// });

	$( '.cart__item-quantity' ).on( 'click', '.cart__item-quantity-minus, .cart__item-quantity-plus', function ( event ) {
    event.preventDefault();
    var input = $( this ).siblings( '.cart__item-quantity-num' );
    if ( input.val() > 0 ) {
        if ( $( this ).hasClass( '.cart__item-quantity-minus' )  ) {
            input.val( +input.val() - 1 );
        } else if ( $( this ).hasClass( '.cart__item-quantity-plus' ) ) {
            input.val( +input.val() + 1 );
        }
    }
	});
});