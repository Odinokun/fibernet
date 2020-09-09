module.exports = function () {

  // begin search field shake
  $('.menu__item').on('mouseover', function () {
    let link = $(this).find('.menu__link');

    if ($(link).hasClass('disabled')) {
      $('.index-search__btn').addClass('shake');
      $(this).find('.menu-tooltip').css('opacity', 1);
    }
  });

  $('.menu__item').on('mouseout', function () {
    $('.index-search__btn').removeClass('shake');
    $('.menu-tooltip').css('opacity', 0);
  });
  // end search field shake

};