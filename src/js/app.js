$(function() {

  // begin SVG for IE
  require('./modules/svg4everybody')();

  // begin no-JS
  require('./modules/noJs')();

  // begin mobile menu
  require('./modules/menu')();

  // begin open search input
  require('./modules/search')();

  // begin jqueryUI elements
  require('./modules/UI')();

  // begin phone mask
  // require('./modules/maskedinput')();

  // begin Slick slider
  // require('./modules/slick')();

  // begin Popup
  // require('./modules/popup')();

});