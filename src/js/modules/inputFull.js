module.exports = function() {

  // begin input full
  $('.form').on('change', function () {
    let formInput = $(this).find('.form__input');

    for (let i = 0; i < formInput.length; i++){
      let inputVal = formInput[i].value;
      if (inputVal.length > 0){
        $(formInput[i]).addClass('full');
      } else {
        $(formInput[i]).removeClass('full');
      }
    }
  });
  // end input full

};