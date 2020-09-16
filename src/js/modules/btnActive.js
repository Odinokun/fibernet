module.exports = function() {

  // begin btn form active
  function btnActivate() {
    let inputPhoneVal = $('.form__input--phone').val();
    let inputNameVal = $('.form__input--name').val();
    let googleResponse = jQuery('#g-recaptcha-response').val();

    if (inputPhoneVal.length > 0 && inputNameVal.length > 0 && googleResponse) {
      $('.form__submit').removeClass('disabled');
    } else {
      $('.form__submit').addClass('disabled');
    }
  }

  $('.form, .help-form').on('change', function () {
    setInterval(btnActivate, 1000);
  });
  // end btn form active

  //begin tariff page slider btn
  $('.tariff-slider__btn').on('click', function () {
    let slider = $(this).parents('.tariff-slider');
    let btns = $(slider).find('.tariff-slider__btn');

    if ($(this).hasClass('active')){
      $(this).removeClass('active');
    } else {
      $(btns).removeClass('active');
      $(this).addClass('active');
    }
  });
  //end tariff page slider btn

};