module.exports = function() {

  // begin input full
  $('.form, .help-form').on('change', function () {
    let formInput = $(this).find('.form__input');
    let formTextarea = $(this).find('.form__textarea');

    for (let i = 0; i < formInput.length; i++){
      let inputVal = formInput[i].value;
      if (inputVal.length > 0){
        $(formInput[i]).addClass('full');
      } else {
        $(formInput[i]).removeClass('full');
      }
    }

    for (let i = 0; i < formTextarea.length; i++){
      let textareaVal = formTextarea[i].value;
      if (textareaVal.length > 0){
        $(formTextarea[i]).addClass('full');
      } else {
        $(formTextarea[i]).removeClass('full');
      }
    }
  });
  // end input full

};