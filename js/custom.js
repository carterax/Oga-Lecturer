$(document).ready(function() {
  $('.locale-chip').click(function() {
    $('.locale').show();
    $('.name-lec').hide();
  });
  $('.name-chip').click(function() {
    $('.locale').hide();
    $('.name-lec').show();
  });
});
