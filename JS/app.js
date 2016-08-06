$(document).ready(function () {
	var Quiz = {
		questions: [ {"id": 1, "question": "Green Flag", "options": {"answer1": "Start of the Race", "answer2": "End of Hazard", "answer3": "Restart of the Race", "answer4": "All of the Above"}},
                 {"id": 2, "question": "Yellow Flag", "options": {"answer1": "Full Course Caution", "answer2": "Slow Down, Red Flag at Next Station", "answer3" : "Local Caution", "answer4": "Warning"}},
                 {"id": 3, "question": "Red Flag", "options": { "answer1": "Disqualified", "answer2": "Pit Lane Closed", "answer3": "Race is Over", "answer4": "Race is being Stopped"}},
                 {"id": 4, "question": "White Flag", "options": { "answer1": "Final Lap", "Answer2": "Debris on Track", "answer3": "Return to the Pits for a Penalty", "answer4": "Disqualified"}},
                 {"id": 5, "question": "Checkerd Flag", "options": { "answer1": "Race has Finished", "answer2": "Final Lap", "answer3": "Unsportsmanlike Conduct", "answer4": "Has no Meaing/Not Used"}},
                 {"id": 6, "question": "Blue with Yellow Stripe", "options": { "answer1": "Move Over", "answer2": "Disqualified", "answer3": "Faster Car Approaching", "answer4": "Final Lap"}},
                 {"id": 7, "question": "Black Flag", "options": { "answer1": "Halfway Through Race", "answer2": "End of Race", "answer3": "Safety Vehicle on Track", "answer4": "Return to the Pits for a Penalty"}},
                 {"id": 8, "question": "Black with Orage Circle", "options": { "answer1": "Return to the Pits to Repair Car", "answer2": "Disqualified", "answer3": "Debris on Track", "answer4": "Local Caution"}},
                 {"id": 9, "question": "American Flag", "options": { "answer1": "The National Anthem will be Played", "answer2": "An American Driver as Taken the Lead", "answer3": "Not Used in Motorsport", "answer4": "Final Lap"}},
                 {"id": 10,"question": "Yellow and Red Stripes", "options": { "answer1": "Debris on Track", "answer2": "Oil on Track", "answer3": "Rain on This portion of the Track", "answer4": "Disqualified"}}],
    correct: 0,
    incorrect: 0,
  };
  

  // User Clicks Begin Button, First Question Appears

  $('.beginButton').click(function(event) {
    event.preventDefault();
    var NewQuiz = Object.create(Quiz);
    var options = NewQuiz.questions[0].options
    $('.question').text("What does/could this flag mean to a driver when shown to him during a race?");
    $('.questionNumber').show();
    $('.imageBox').show();
    $('.answerBox').show();
    $('.feedback').show();
    $('.beginButton').hide();
    $('.number').text(NewQuiz.questions[0].id);
    $('.numCorrect').text(NewQuiz.correct);
    $('.numWrong').text(NewQuiz.incorrect);
    $('.flagDescription').text(NewQuiz.questions[0].question);
    for(var key in options) {
      $("." + key).text(NewQuiz.questions[0].options[key]);
      }

  // User Answers Question #1 and Question #2 Appears


    $('.submitButton').click(function(event) {
      if (document.getElementById('Answer4').checked) {
        alert("Correct!");
        NewQuiz.correct = NewQuiz.correct + 1;
      } else {
        alert("Incorrect")
        NewQuiz.incorrect = NewQuiz.incorrect +1;
      }
      $('.number').text(NewQuiz.questions[1].id);
      $('.flagDescription').text(NewQuiz.questions[1].question);
      $(".flag").attr("src", "http://i.imgur.com/GOt4x.jpg");
      for(var key in options) {
        $("." + key).text(NewQuiz.questions[1].options[key]);
      };
      $('.numCorrect').text(NewQuiz.correct);
      $('.numWrong').text(NewQuiz.incorrect);
      $('.answer').attr('checked', false);      
    });

    // User Answers Question #2 and Question #3 Appears

    $('.submitButton').click(function(event) {
      if (document.getElementById('Answer1').checked) {
        alert("Correct!");
        NewQuiz.correct = NewQuiz.correct + 1;
      } else {
        alert("Incorrect")
        NewQuiz.incorrect = NewQuiz.incorrect +1;
      }
      $('.number').text(NewQuiz.questions[2].id);
      $('.flagDescription').text(NewQuiz.questions[2].question);
      $(".flag").attr("src", "https://thefinallap.files.wordpress.com/2012/06/nascar-trucks-red-flag-dover.jpg?w=572");
      for(var key in options) {
        $("." + key).text(NewQuiz.questions[2].options[key]);
      };
      $('.numCorrect').text(NewQuiz.correct);
      $('.numWrong').text(NewQuiz.incorrect);
      $('.answer').attr('checked', false);      
    });


  }); 
});