// begin AUTOCOMPLETE
$(function () {
  let searchInput = $('#search-adress');
  let clearInput = $('.index-search__form-clear');
  let availableTags = [
    "Невская 1",
    "Некрасова 14д",
    "Некрасова 4",
    "Некрасова 21",
    "Бадаева 25",
    "Бадаева 15",
    "Бадаева 40",
    "Невская 1",
    "Некрасова 14д",
    "Некрасова 4",
    "Некрасова 21",
    "Некрасова 21а",
    "Бадаева 25",
    "Бадаева 15",
    "Бадаева 40",
    "Невская 1",
    "Некрасова 14д",
    "Некрасова 4",
    "Некрасова 21",
    "Бадаева 25",
    "Бадаева 15",
    "Бадаева 40",
    "Невская 1",
    "Некрасова 14д",
    "Некрасова 4",
    "Некрасова 21",
    "Некрасова 21а",
    "Бадаева 25",
    "Бадаева 15",
    "Бадаева 40",
    "Вавиловых 4"
  ];

  $(searchInput).autocomplete({
    source: availableTags,
    create: function (event, ui) {
        $(searchInput).focus();
    },
    response: function (event, ui) {
      $(clearInput).addClass('active');
    },
    open: function (event, ui) {
      $('.ui-autocomplete-input, .index-search__ui-widget').addClass('open');
    },
    close: function (event, ui) {
      $('.ui-autocomplete-input, .index-search__ui-widget').removeClass('open');
      if ($(searchInput).val().length > 1) {
        $(clearInput).addClass('active');
      } else {
        $(clearInput).removeClass('active');
        $(searchInput).focus();
      }
    }
  }).autocomplete('widget').addClass('search-adress-list');
});

$('.index-search__form-clear').on('click', function (e) {
  e.preventDefault();

  $('#search-adress').val('');
  $('#search-adress').focus();
  $('.index-search__form-clear').removeClass('active');
});
// end AUTOCOMPLETE