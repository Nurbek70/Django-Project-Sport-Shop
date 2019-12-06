(function($) {
  "use strict";

  jQuery(document).ready(function(){


    /*--
    Menu Sticky
    -----------------------------------*/
    var windows = $(window);
    var screenSize = windows.width();
    var sticky = $('.header-sticky');
    var menubarTop = $('.menubar-top');


    windows.on('scroll', function () {
      var scroll = windows.scrollTop();


      if (scroll < 300) {
        sticky.removeClass('is-sticky');

        menubarTop.removeClass('d-none');
        menubarTop.addClass('d-flex');
      } else {
        sticky.addClass('is-sticky');
        menubarTop.addClass('d-none');
        menubarTop.removeClass('d-flex');
      }


      //code for scroll top

      if (scroll >= 400) {
        $('.scroll-top').fadeIn();
      } else {
        $('.scroll-top').fadeOut();
      }

    });



    /*--
	Scroll to top
	-----------------------------------*/

    $('.scroll-top').on('click', function () {
      $('html,body').animate({
        scrollTop: 0
      }, 2000);
    });


    /*--
	Single blog post slider active
	-----------------------------------*/
    var blogPostSlider = $('.blog-image-gallery');
    blogPostSlider.slick({
      
      
      prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
      nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right"></i></button>',
      arrows: true,
      autoplay: false,
      autoplaySpeed: 5000,
      dots: false,
      pauseOnFocus: false,
      pauseOnHover: false,
      infinite: true,
      slidesToShow: 1
    });

    /*--
	Category slider active
	-----------------------------------*/
    var catSlider = $('.category-slider-container');
    catSlider.slick({
      
      arrows: true,
      autoplay: false,
      draggable: false,
      dots: false,
      infinite: true,
      slidesToShow: 6,
      
      prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-caret-left"></i></button>',
      nextArrow: '<button type="button" class="slick-next"><i class="fa fa-caret-right"></i></button>',
      responsive: [{
        breakpoint: 1499,
        settings: {
          slidesToShow: 6,
        }
      },
                   {
                     breakpoint: 1199,
                     settings: {
                       slidesToShow: 5,
                     }
                   },
                   {
                     breakpoint: 991,

                     settings: {
                       slidesToShow: 4,
                     }
                   },
                   {
                     breakpoint: 767,
                     settings: {
                       slidesToShow: 3,
                     }
                   },
                   {
                     breakpoint: 575,
                     settings: {
                       slidesToShow: 2,
                     }
                   }
                  ]
    });

    /*--
	Blog slider active
	-----------------------------------*/
    var blogSlider = $('.blog-slider-container');
    blogSlider.slick({
      
      arrows: true,
      autoplay: false,
      dots: false,
      infinite: true,
      slidesToShow: 3,
      
      prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-caret-left"></i></button>',
      nextArrow: '<button type="button" class="slick-next"><i class="fa fa-caret-right"></i></button>',
      responsive: [{
        breakpoint: 1499,
        settings: {
          slidesToShow: 3,
        }
      },
                   {
                     breakpoint: 1199,
                     settings: {
                       slidesToShow: 3,
                     }
                   },
                   {
                     breakpoint: 991,
                     settings: {
                       slidesToShow: 2,
                     }
                   },
                   {
                     breakpoint: 767,
                     settings: {
                       slidesToShow: 2,
                     }
                   },
                   {
                     breakpoint: 575,
                     settings: {
                       slidesToShow: 1,
                     }
                   }
                  ]
    });

    /*--
	Brand slider active
	-----------------------------------*/
    var brandLogoSlider = $('.brand-logo-wrapper');
    brandLogoSlider.slick({
      
      arrows: true,
      autoplay: true,
      dots: false,
      infinite: true,
      slidesToShow: 5,
      
      prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-caret-left"></i></button>',
      nextArrow: '<button type="button" class="slick-next"><i class="fa fa-caret-right"></i></button>',
      responsive: [{
        breakpoint: 1499,
        settings: {
          slidesToShow: 5,
        }
      },
                   {
                     breakpoint: 1199,
                     settings: {
                       slidesToShow: 5,
                     }
                   },
                   {
                     breakpoint: 991,
                     settings: {
                       slidesToShow: 4,
                     }
                   },
                   {
                     breakpoint: 767,
                     settings: {
                       slidesToShow: 3,
                     }
                   },
                   {
                     breakpoint: 575,
                     settings: {
                       slidesToShow: 2,
                     }
                   }
                  ]
    });



    /*--
	Multisale slider active
	-----------------------------------*/
    var multisaleSlider = $('.multisale-slider-wrapper');
    multisaleSlider.slick({
      
      arrows: true,
      autoplay: false,
      dots: false,
      infinite: true,
      slidesToShow: 4,
      
      prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-caret-left"></i></button>',
      nextArrow: '<button type="button" class="slick-next"><i class="fa fa-caret-right"></i></button>',
      responsive: [{
        breakpoint: 1499,
        settings: {
          slidesToShow: 4,
        }
      },
                   {
                     breakpoint: 1199,
                     settings: {
                       slidesToShow: 3,
                     }
                   },
                   {
                     breakpoint: 991,
                     settings: {
                       slidesToShow: 2,
                     }
                   },
                   {
                     breakpoint: 767,
                     settings: {
                       slidesToShow: 2,
                     }
                   },
                   {
                     breakpoint: 575,
                     settings: {
                       slidesToShow: 2,
                     }
                   },
                   {
                     breakpoint: 479,
                     settings: {
                       slidesToShow: 1,
                     }
                   }
                  ]
    });

    /*--
	Related product slider active
	-----------------------------------*/
    var relatedSlider = $('.related-product-slider-wrapper');
    relatedSlider.slick({
      
      arrows: true,
      autoplay: false,
      dots: false,
      infinite: true,
      slidesToShow: 4,
      
      prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-caret-left"></i></button>',
      nextArrow: '<button type="button" class="slick-next"><i class="fa fa-caret-right"></i></button>',
      responsive: [{
        breakpoint: 1499,
        settings: {
          slidesToShow: 4,
        }
      },
                   {
                     breakpoint: 1199,
                     settings: {
                       slidesToShow: 4,
                     }
                   },
                   {
                     breakpoint: 991,
                     settings: {
                       slidesToShow: 3,
                     }
                   },
                   {
                     breakpoint: 767,
                     settings: {
                       slidesToShow: 2,
                     }
                   },
                   {
                     breakpoint: 575,
                     settings: {
                       slidesToShow: 1,
                     }
                   }
                  ]
    });

    /*--
	Sale single product slider active
	-----------------------------------*/
    var saleSingleSlider = $('.sale-single-product-container');
    saleSingleSlider.slick({
      
      arrows: true,
      autoplay: false,
      dots: false,
      infinite: true,
      slidesToShow: 1,
      prevArrow: '<button type="button" class="slick-prev"><span class="arrow_carrot-left"></span></button>',
      nextArrow: '<button type="button" class="slick-next"><span class="arrow_carrot-right"></span></button>',
      responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
        }
      },
                   {
                     breakpoint: 991,
                     settings: {
                       slidesToShow: 1,
                       arrows: false
                     }
                   },
                   {
                     breakpoint: 480,
                     settings: {
                       slidesToShow: 1,
                       arrows: false
                     }
                   }
                  ]
    });

    /*----------------------------------- 
    	Single Product slide image Active 
    	--------------------------------------*/
    $('.small-image-slider-single-product').slick({
      
      prevArrow: '<i class="fa fa-angle-up"></i>',
      nextArrow: '<i class="fa fa-angle-down slick-next-btn"></i>',
      slidesToShow: 3,
      vertical: true,
      responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
                   {
                     breakpoint: 991,
                     settings: {
                       slidesToShow: 3,
                       slidesToScroll: 1
                     }
                   },
                   {
                     breakpoint: 767,
                     settings: {
                       slidesToShow: 3,
                       slidesToScroll: 3
                     }
                   },
                   {

                     breakpoint: 480,
                     settings: {
                       prevArrow: '<i class="fa fa-angle-left"></i>',
                       nextArrow: '<i class="fa fa-angle-right slick-next-btn"></i>',
                       vertical: false,
                       slidesToShow: 2,
                       slidesToScroll: 1
                     }
                   }
                  ]
    });


    /*----------------------------------- 
    	Single Product image gallery Tabstyle Three  Active 
    	--------------------------------------*/
    $('.small-image-slider-single-product-tabstyle-3').slick({
      
      prevArrow: '<i class="fa fa-angle-left"></i>',
      nextArrow: '<i class="fa fa-angle-right slick-next-btn"></i>',
      slidesToShow: 3,
      responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
                   {
                     breakpoint: 991,
                     settings: {
                       slidesToShow: 3,
                       slidesToScroll: 1
                     }
                   },
                   {
                     breakpoint: 767,
                     settings: {
                       slidesToShow: 3,
                       slidesToScroll: 3
                     }
                   },
                   {
                     breakpoint: 480,
                     settings: {
                       slidesToShow: 2,
                       slidesToScroll: 2
                     }
                   }
                  ]
    });




    /*----------------------------------- 
    	Product image gallery slider
    	--------------------------------------*/
    $('.product-image-gallery-slider').slick({
      
      prevArrow: '<i class="fa fa-angle-left"></i>',
      nextArrow: '<i class="fa fa-angle-right slick-next-btn"></i>',
      slidesToShow: 3,
      responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
                   {
                     breakpoint: 991,
                     settings: {
                       slidesToShow: 2,
                       slidesToScroll: 1
                     }
                   },
                   {
                     breakpoint: 767,
                     settings: {
                       slidesToShow: 2,
                       slidesToScroll: 1
                     }
                   },
                   {
                     breakpoint: 480,
                     settings: {
                       slidesToShow: 1,
                       slidesToScroll: 1
                     }
                   }
                  ]
    });

    /*----------------------------------- 
    	Single Product slide image Active 
    	--------------------------------------*/
    $('.small-image-slider').slick({
      
      prevArrow: '<i class="fa fa-angle-left"></i>',
      nextArrow: '<i class="fa fa-angle-right slick-next-btn"></i>',
      slidesToShow: 3,
      responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
                   {
                     breakpoint: 991,
                     settings: {
                       slidesToShow: 2,
                       slidesToScroll: 2
                     }
                   },
                   {
                     breakpoint: 767,
                     settings: {
                       slidesToShow: 3,
                       slidesToScroll: 3
                     }
                   },
                   {
                     breakpoint: 480,
                     settings: {
                       slidesToShow: 3,
                       slidesToScroll: 3
                     }
                   }
                  ]
    });

    $('.modal').on('shown.bs.modal', function (e) {
      $('.small-image-slider').resize();
      $('.small-image-slider').slick('setPosition');

    }) 


    /*----- 
	Quantity
	--------------------------------*/
    $('.pro-qty').append('<a href="#" class="inc qty-btn">+</a>');
    $('.pro-qty').append('<a href="#" class= "dec qty-btn">-</a>');
    $('.qty-btn').on('click', function (e) {
      e.preventDefault();
      var $button = $(this);
      var oldValue = $button.parent().find('input').val();
      if ($button.hasClass('inc')) {
        var newVal = parseFloat(oldValue) + 1;
      } else {
        // Don't allow decrementing below zero
        if (oldValue > 0) {
          var newVal = parseFloat(oldValue) - 1;
        } else {
          newVal = 0;
        }
      }
      $button.parent().find('input').val(newVal);
    });


    /*----- 
	Activate countdown
	--------------------------------*/
    $('[data-countdown]').each(function () {
      var $this = $(this),
          finalDate = $(this).data('countdown');
      $this.countdown(finalDate, function (event) {
        $this.html(event.strftime('<div class="single-countdown"><span class="single-countdown-time">%D</span><span class="single-countdown-text">Days</span></div><div class="single-countdown"><span class="single-countdown-time">%H</span><span class="single-countdown-text">Hours</span></div><div class="single-countdown"><span class="single-countdown-time">%M</span><span class="single-countdown-text">Mins</span></div><div class="single-countdown"><span class="single-countdown-time">%S</span><span class="single-countdown-text">Secs</span></div>'));
      });
    });

    /*--------------------------
		Mobile Menu
		------------------------*/
    var mainMenuNav = $('.main-menu nav');
    mainMenuNav.meanmenu({
      meanScreenWidth: '991',
      meanMenuContainer: '.mobile-menu',
      meanMenuClose: '<span class="menu-close"></span>',
      meanMenuOpen: '<span class="menu-bar"></span>',
      meanRevealPosition: 'right',
      meanMenuCloseSize: '0',
    });



    /*--
		MailChimp
		-----------------------------------*/
    $('#mc-form').ajaxChimp({
      language: 'en',
      callback: mailChimpResponse,
      // ADD YOUR MAILCHIMP URL BELOW HERE!
      url: 'http://devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&amp;id=05d85f18ef'

    });

    function mailChimpResponse(resp) {

      if (resp.result === 'success') {
        $('.mailchimp-success').html('' + resp.msg).fadeIn(900);
        $('.mailchimp-error').fadeOut(400);

      } else if (resp.result === 'error') {
        $('.mailchimp-error').html('' + resp.msg).fadeIn(900);
      }
    }



    /*---------------------
			Category Menu
			------------------------*/

    /*-- Variables --*/
    var categoryToggleWrap = $('.category-toggle-wrap');
    var categoryToggle = $('.category-toggle');
    var categoryMenu = $('.category-menu');

    /*
		 *  Category Menu Default Close for Mobile & Tablet Device
		 *  And Open for Desktop Device and Above
		 */
    function categoryMenuToggle() {
      var screenSize = windows.width();
      if (screenSize <= 991) {
        categoryMenu.slideUp();
      } else {
        categoryMenu.slideDown();
      }
    }

    /*-- Category Menu Toggles --*/
    function categorySubMenuToggle() {
      var screenSize = windows.width();
      if (screenSize <= 991) {
        $('.category-menu .menu-item-has-children > a').prepend('<i class="expand menu-expand"></i>');
        $('.category-menu .menu-item-has-children ul').slideUp();
        //        $('.category-menu .menu-item-has-children i').on('click', function(e){
        //            e.preventDefault();
        //            $(this).toggleClass('expand');
        //            $(this).siblings('ul').css('transition', 'none').slideToggle();
        //        })
      } else {
        $('.category-menu .menu-item-has-children > a i').remove();
        $('.category-menu .menu-item-has-children ul').slideDown();
      }
    }
    categoryMenuToggle();
    windows.resize(categoryMenuToggle);
    categorySubMenuToggle();
    windows.resize(categorySubMenuToggle);

    categoryToggle.on('click', function () {
      categoryMenu.slideToggle();
    });

    /*-- Category Sub Menu --*/
    $('.category-menu').on('click', 'li a, li a .menu-expand', function (e) {
      var $a = $(this).hasClass('menu-expand') ? $(this).parent() : $(this);
      if ($a.parent().hasClass('menu-item-has-children')) {
        if ($a.attr('href') === '#' || $(this).hasClass('menu-expand')) {
          if ($a.siblings('ul:visible').length > 0) $a.siblings('ul').slideUp();
          else {
            $(this).parents('li').siblings('li').find('ul:visible').slideUp();
            $a.siblings('ul').slideDown();
          }
        }
      }
      if ($(this).hasClass('menu-expand') || $a.attr('href') === '#') {
        e.preventDefault();
        return false;
      }
    });

    /*-- Sidebar Category --*/
    var categoryChildren = $('.sidebar-category li .children');

    categoryChildren.slideUp();
    categoryChildren.parents('li').addClass('has-children');

    $('.sidebar-category').on('click', 'li.has-children > a', function (e) {

      if ($(this).parent().hasClass('has-children')) {
        if ($(this).siblings('ul:visible').length > 0) $(this).siblings('ul').slideUp();
        else {
          $(this).parents('li').siblings('li').find('ul:visible').slideUp();
          $(this).siblings('ul').slideDown();
        }
      }
      if ($(this).attr('href') === '#') {
        e.preventDefault();
        return false;
      }
    });

    // Set plus-minus option in category menu
    $(".category-menu li:nth-child(n+8)").addClass("hidden");
    var num = $(".category-menu ul li").length;
    if (num > 8){
      $(".category-menu li.cat_more").removeClass("hidden");
    }

    //More category

    $(".category-menu li.hidden").hide();
    $("#more-btn").on('click', function (e) {
      e.preventDefault();
      $(".category-menu li.hidden").toggle(500);
      var htmlAfter = '<span class="icon_minus_alt2"></span> Less Categories';
      var htmlBefore = '<span class="icon_plus_alt2"></span> More Categories';


      if($(this).html() == htmlBefore){
        $(this).html(htmlAfter);
      }else{
        $(this).html(htmlBefore);
      }
    });


    /*--
		Sticky sidebar
		-----------------------------------*/

    $('.sticky_cls').stickySidebar({
      topSpacing: 90,
      bottomSpacing: -90,
      minWidth: 767
    });

    /*--
		Price range
		-----------------------------------*/

    $('#price-range').slider({
      range: true,
      min: 0,
      max: 2000,
      values: [ 25, 970 ],
      slide: function( event, ui ) {
        $('#price-amount').val( 'Price: ' + '$' + ui.values[ 0 ] + ' - $' + ui.values[ 1 ] );
      }
    });
    $('#price-amount').val( 'Price: ' + '$' + $('#price-range').slider( 'values', 0 ) +
                           ' - $' + $('#price-range').slider('values', 1 ) ); 

    /*--
		Product View Mode
		
    $('.view-mode-icons a').on('click', function (e) {
      e.preventDefault();

      var shopProductWrap = $('.shop-product-wrap');
      var viewMode = $(this).data('target');

      $('.view-mode-icons a').removeClass('active');
      $(this).addClass('active');
      shopProductWrap.removeClass('grid list').addClass(viewMode);
    });
*/


    /*--
    Nice Select
    ------------------------*/
    $('.nice-select').niceSelect();

    /*----- 
	Shipping Form Toggle
	--------------------------------*/ 
    $('[data-shipping]').on('click', function(){
      if( $('[data-shipping]:checked').length > 0 ) {
        $('#shipping-form').slideDown();
      } else {
        $('#shipping-form').slideUp();
      }
    });

    /*----- 
	Payment Method Select
	--------------------------------*/
    $('[name="payment-method"]').on('click', function(){

      var $value = $(this).attr('value');

      $('.single-method p').slideUp();
      $('[data-method="'+$value+'"]').slideDown();

    });


    // Remove href
    $('.remove_href').removeAttr('href');


    /* Ajax Wishlist */
    $(".wish_action").on('click', function(){
      $(this).addClass("loading_wishlist");
      setTimeout(function () {
        $(".wish_action").removeClass("loading_wishlist");
      },1500);
    });



  });

})(jQuery);