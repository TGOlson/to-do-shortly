$(document).on('click', '.note_class', function() {
  $(this).toggleClass('highlight');
});

$(document).on('click', '.remove_note', function() {
  $(this).parent().remove();
});

$(document).on('click', '#add_button', function() {
  var new_note_text = $('.add_note').val();
  $('ul').append('<li><a class="remove_note">&otimes;</a><span class="color">&nbsp;</span><span class="note_class">'+new_note_text+'</span></li>');
  $('.add_note').val(''); // clear input field after submitting a note
  $('.add_note').prop('placeholder', "Add another..."); // create a new snazzy placeholder

  var line_height = $('.note_class').height();
  var last_height = $('li').last().height() - 2;
  
  if(last_height > line_height) {
    $('li').last().remove();
    alert("Please keep notes to one line, sorry.");
  };

});

$(document).on('click', '.clear_all', function() {
  $('li').remove();
});