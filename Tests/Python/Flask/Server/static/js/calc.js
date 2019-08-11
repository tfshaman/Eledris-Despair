
$(document).ready(function() {
//alert('a');
$(function() {
    $('a#calculate').bind('click', function() {
      $.getJSON($SCRIPT_ROOT + '/_add_numbers', {
        a: $('input[name="a"]').val(),
        b: $('input[name="b"]').val()
      }, function(data) {
        $("#result").text(data.result);
        document.cookie = "last" + "=" + (data.result) + ";" + (1 * 24 * 60 * 60 * 1000) + ";path=/";




      }

      );
      return false;
    });
  });
  if ( $( '#2' ).length > 0 ) {
  // Correct! This code will only run if there's an element in your page
  // with an ID of 'nonexistent'
}



});