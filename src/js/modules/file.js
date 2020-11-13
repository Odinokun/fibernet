module.exports = function() {

  // begin input file
  $('input[type="file"]').on('change', function (event) {
    let input = event.target;

    for (let i = 0; i < input.files.length; i++) {
      $('.help-form__file-names-list').append('<li>' + input.files[i].name + '</li>');
    }

    if($('.help-form__file-names-list li')){
      $('.help-form__file-clear').fadeIn();
    }
  });

  $('.help-form__file-clear').on('click', function (e) {
    e.preventDefault();

    let input = $('input[type="file"]');
    $(input).value = "";
    $(input)[0].value = "";
    $('.help-form__file-names-list li').slideUp(0);
      $('.help-form__file-clear').slideUp(0);
  })
  // end input file

};