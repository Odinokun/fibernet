module.exports = function() {

  // begin Slick slider

  $('.tariff-slider').slick({
    dots: false,
    arrows: true,
    infinite: false,
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: "<div class='prev'><svg width=\"14\" height=\"24\" viewBox=\"0 0 14 24\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M13.5695 2.39881L3.54376 12.0006L13.5695 21.6014C14.1435 22.1502 14.1435 23.0399 13.5695 23.5877C12.9954 24.1374 12.0674 24.1374 11.4914 23.5877L0.432001 12.9933C-0.143998 12.4445 -0.143998 11.5558 0.432001 11.007L11.4914 0.411587C12.0674 -0.137193 12.9954 -0.137193 13.5695 0.411587C14.1435 0.95943 14.1435 1.84909 13.5695 2.39881Z\"></path></svg></div>",
    nextArrow: "<div class='next'><svg width=\"14\" height=\"24\" viewBox=\"0 0 14 24\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M0.430534 21.6012L10.4562 11.9994L0.430532 2.39857C-0.143511 1.84979 -0.143511 0.96013 0.430532 0.412286C1.00458 -0.137429 1.93263 -0.137429 2.50863 0.412286L13.568 11.0067C14.144 11.5555 14.144 12.4442 13.568 12.993L2.50863 23.5884C1.93263 24.1372 1.00458 24.1372 0.430534 23.5884C-0.143509 23.0406 -0.143509 22.1509 0.430534 21.6012Z\"/></svg></div>",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 550,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  // end Slick slider

  $('.tariff-slider').on('swipe', function () {
    let lastChild = $(this).find('.slick-slide:last');
    let firstChild = $(this).find('.slick-slide[data-slick-index="0"]');

    if($(lastChild).hasClass('slick-active')){
      $(this).children('.next').addClass('hide');
    } else {
      $(this).children('.next').removeClass('hide');
    }

    if($(firstChild).hasClass('slick-active')){
      $(this).children('.prev').removeClass('active');
    } else {
      $(this).children('.prev').addClass('active');
    }
  });


  //begin fadeOut/fadeIn next/prev btn
  $('.tariff-slider .next, .tariff-slider .prev').on('click', function () {
    let slider = $(this).parents('.tariff-slider');
    let lastChild = $(slider).find('.slick-slide:last');
    let firstChild = $(slider).find('.slick-slide[data-slick-index="0"]');

    if($(lastChild).hasClass('slick-active')){
      $(slider).children('.next').addClass('hide');
    } else {
      $(slider).children('.next').removeClass('hide');
    }

    if($(firstChild).hasClass('slick-active')){
      $(slider).children('.prev').removeClass('active');
    } else {
      $(slider).children('.prev').addClass('active');
    }
  });
  //end fadeOut/fadeIn next/prev btn
};
