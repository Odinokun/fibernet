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

  $('.form').on('change', function () {
    setInterval(btnActivate, 1000);
  });
  // end btn form active

};