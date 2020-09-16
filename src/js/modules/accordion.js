module.exports = function() {

  // begin accordion
  $('.tariff-accordion__question').on('click', function () {
    let row = $(this).parents('.tariff-accordion__row');

    $(row).toggleClass('active');
    $(row).find('.tariff-accordion__answer').slideToggle();
  });
  // end accordion

};