$(document).ready(function () {
	var Quiz = {
		questions: [ {"id": 1, "question": "Green Flag", "answer1": "Start of the Race", "answer2": "End of Hazard", "answer3": "Restart of the Race", "answer4": "Pit Lane Open"},
                 {"id": 2, "question": "Yellow Flag"},
                 {"id": 3, "question": "Red Flag"},
                 {"id": 4, "question": "White Flag"},
                 {"id": 5, "question": "Checkerd Flag"},
                 {"id": 6, "question": "Blue with Yellow Stripe"},
                 {"id": 7, "question": "Black Flag"},
                 {"id": 8, "question": "Black with Orage Circle"},
                 {"id": 9, "question": "American Flag"},
                 {"id": 10,"question": "Yellow and Red Stripes"}]
  };

  // User Clicks Begin Button, First Question Appears

  $('.beginButton').click(function(event) {
    event.preventDefault();
    var NewQuiz = Object.create(Quiz);
    $('.question').text("What does/could this flag mean to a driver when shown to him during a race?");
    $('.questionNumber').show();
    $('.imageBox').show();
    $('.answerBox').show();
    $('.feedback').show();
    $('.beginButton').hide();
    $('.number').text(NewQuiz.questions[0].id);
    $('.flagDescription').text(NewQuiz.questions[0].question);
    $(".answer1").text(NewQuiz.questions[0].answer1);
    $(".answer2").text(NewQuiz.questions[0].answer2);
    $(".answer3").text(NewQuiz.questions[0].answer3);
    $(".answer4").text(NewQuiz.questions[0].answer4);   
  });
});
