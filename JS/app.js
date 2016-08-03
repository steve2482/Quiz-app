$(document).ready(function () {
	var Quiz = {
		questions: [ "Green Flag", "Yellow Flag", "Red Flag", "White Flag", "Checkerd Flag", "Blue with Yellow Stripe", "Black", "Black with Orange Circle", "American", "Red & Yellow Striped"]
  }

  $('.beginButton').click(function(event) {
    event.preventDefault();
    $('.question').text("What does/could this flag mean to a driver when shown to him during a race?");
    $('.questionNumber').show();
    $('.imageBox').show();
    $('.answerBox').show();
    $('.feedback').show();
    $('.beginButton').hide();
    $('.flagDescription').text(Quiz.questions[0]);    
  });
});
