$(function() {
  $('.card__slider').owlCarousel({
      // nav: true,
      items: 1,
      // loop: true,
      dots: true,
      autoplay: true,
      // navText: ["<img src='img/slider__arrow_prev.png'>", "<img src='img/slider__arrow_next.png'>"],
  });
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

	// tabs
	$(document).ready(function () {
		$(".tabs__content-item").hide();
		$(".tabs__container div.tabs__content-item.active-tab").show();
		$('ul.tabs__list > li').click(function () {
		  if (!($(this).hasClass('active'))) {
		    var thisLi = $(this);
		    var numLi = thisLi.index();
		    thisLi.addClass('active').siblings().removeClass('active');
		    thisLi.parent().next().children('div').hide().eq(numLi).fadeIn('slow');
		  }
		});
	});
	//категории товаров
	$('.content-menu__wrp').on('click', function(){
	 $(this).find('.content-menu').toggleClass('active');
	});
	$('.content-menu__cross').on('click', function(){
	 $('.content-menu__wrp').toggleClass('active');
	});

	//страница оформления заказа
	$(".order__item_hide").hide();
	$('.order__btn-next').on('click', function(e){
		e.preventDefault();
		$(this).closest('.order__item').next('.order__item_hide').slideToggle();
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

	$( '.cart__item-quantity' ).on( 'click', '.cart__item-quantity-minus, .cart__item-quantity-plus', function () {
    var input = $( this ).siblings( '.cart__item-quantity-num' );

        if ( $( this ).hasClass( '.cart__item-quantity-minus' )  ) {
            input.val( +input.val() - 1 );
        } else if ( $( this ).hasClass( '.cart__item-quantity-plus' ) ) {
            input.val( +input.val() + 1 );
        }

    console.log(this);
	});
	// var $quantityNum = $('.cart__item-quantity-num')
	// var $arrowPlus = $(".cart__item-quantity-plus");
 //    var $arrowMinus = $(".cart__item-quantity-minus");

 //    $arrowPlus.each(function () {
 //        $(this).click(function () {
 //            $quantityNum.val(+$quantityNum.val() + 1);
 //        });
 //    });

 //    $arrowMinus.each(function () {
 //        $(this).click(function () {
 //            if ($quantityNum.val() > 1) {
 //                $quantityNum.val(+$quantityNum.val() - 1);
 //            }
 //        });
 //    });
});