module.exports = function () {

  // begin jqueryUI elements
  $('.index-search__btn').on('click', function (e) {
    e.preventDefault();

    $(this).addClass('hidden');
    $('.index-search__form').addClass('active');
    $('#search-adress').focus();
  });
  // end jqueryUI elements

};