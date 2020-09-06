module.exports = function() {

  // begin mobile menu
  $('.burger input').on('click', function () {
    $('.header__mobile-menu-wrap').toggleClass('active');
  });
  // end mobile menu

};