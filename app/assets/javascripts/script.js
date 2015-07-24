$(document).ready(function() {
  
  $('#websites-div').hide();
  
  $('#portfolio').click(function() {
    $('#developer').slideUp(800);
    $('#portfolio').slideUp(800);
    $('#websites-div').show(800);
  });
    
});

