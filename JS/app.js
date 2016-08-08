$(document).ready(function () {
	var Quiz = {
		questions: [ {"id": 1, "question": "Green Flag", "photo": "http://s3.motoringfile.com.s3.amazonaws.com/wp-content/uploads/2015/07/Race-Duncan.jpg", "options": {"answer1": "Start of the Race", "answer2": "End of Hazard", "answer3": "Restart of the Race", "answer4": "All of the Above", "right": "All of the Above"}},
                 
                 {"id": 2, "question": "Yellow Flag", "photo": "http://i.imgur.com/GOt4x.jpg","options": {"answer1": "Full Course Caution or Local Caution", "answer2": "Slow Down, Red Flag at Next Station", "answer3" : "Bananas Ahead", "answer4": "Warning", "right": "Full Course Caution or Local Caution"}},
                 
                 {"id": 3, "question": "Red Flag", "photo": "https://f1simplified.files.wordpress.com/2011/11/red-flag.jpg", "options": { "answer1": "Disqualified", "answer2": "Pit Lane Closed", "answer3": "Race is Over", "answer4": "Race is being Stopped", "right": "Race is being Stopped"}},
                 
                 {"id": 4, "question": "White Flag", "photo": "http://cdn.fansided.com/wp-content/blogs.dir/243/files/2014/05/ryan-hunter-reay-helio-castroneves-indycar-indianapolis-500-590x900.jpg", "options": { "answer1": "Final Lap", "Answer2": "Debris on Track", "answer3": "Return to the Pits for a Penalty", "answer4": "Disqualified", "right": "Final Lap"}},
                 
                 {"id": 5, "question": "Checkered Flag", "photo": "http://i1.mirror.co.uk/incoming/article3301347.ece/ALTERNATES/s615/F1-Grand-Prix-of-Malaysia-Race.jpg", "options": { "answer1": "Race has Finished", "answer2": "Final Lap", "answer3": "Unsportsmanlike Conduct", "answer4": "Has no Meaing/Not Used", "right": "Race has Finished"}},
                 
                 {"id": 6, "question": "Blue with Yellow Stripe", "photo": "https://upload.wikimedia.org/wikipedia/commons/3/3f/Move_Over_Flag_Road_America_2012.jpg", "options": { "answer1": "Move Over", "answer2": "Disqualified", "answer3": "Faster Car Approaching", "answer4": "Final Lap", "right": "Faster Car Approaching"}},
                 
                 {"id": 7, "question": "Black Flag", "photo": "http://kartsportnews.com/OLD-site/content/2008/106_08NT_(photowagon.com.au.jpg", "options": { "answer1": "Halfway Through Race", "answer2": "End of Race", "answer3": "Safety Vehicle on Track", "answer4": "Return to the Pits for a Penalty", "right": "Return to the Pits for a Penalty"}},
                 
                 {"id": 8, "question": "Black with Orage Circle", "photo": "http://www.bestudy.ir/Bestudy/Files/Image/05427cb9e36d49d1a29111252a9d7a4f.jpg", "options": { "answer1": "Return to the Pits to Repair Car", "answer2": "Disqualified", "answer3": "Debris on Track", "answer4": "Local Caution", "right": "Return to the Pits to Repair Car"}},
                 
                 {"id": 9, "question": "American Flag", "photo": "http://il2.picdn.net/shutterstock/videos/139987/thumb/1.jpg", "options": { "answer1": "The National Anthem will be Played", "answer2": "An American Driver as Taken the Lead", "answer3": "Not Used in Motorsport", "answer4": "Final Lap", "right": "Not Used in Motorsport"}},
                 
                 {"id": 10,"question": "Yellow and Red Stripes", "photo": "http://3.bp.blogspot.com/-4khUTrHbj2Y/UN9vxDAW4eI/AAAAAAAALu4/xgvhTtkmjzU/s1600/Debris+on+the+track+with+a+smile.JPG", "options": { "answer1": "Debris on Track", "answer2": "Oil on Track", "answer3": "Rain on This portion of the Track", "answer4": "All of the Above", "right": "All of the Above"}}],
    correct: 0,
    incorrect: 0,
    currentQuestion: 0,
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
    $('.number').text(NewQuiz.questions[NewQuiz.currentQuestion].id);
    $('.numCorrect').text(NewQuiz.correct);
    $('.numWrong').text(NewQuiz.incorrect);
    $('.flagDescription').text(NewQuiz.questions[NewQuiz.currentQuestion].question);
    for(var key in options) {
      $("." + key).text(NewQuiz.questions[NewQuiz.currentQuestion].options[key]);
      }
  
  // User Answers Question #1 and Question #2 Appears


    $('.submitButton').click(function(event) {     
     var userInput = $('.answer:checked').next('span').text();
     console.log(userInput)
     console.log(NewQuiz.questions[NewQuiz.currentQuestion].options.right)
      if (userInput == NewQuiz.questions[NewQuiz.currentQuestion].options.right) {
      alert("Correct!");
      NewQuiz.correct ++;        
    } else {
      alert("Incorrect")
      NewQuiz.incorrect ++;        
    };
    $('.numCorrect').text(NewQuiz.correct);
    $('.numWrong').text(NewQuiz.incorrect);      
    NewQuiz.currentQuestion++;
    $('.number').text(NewQuiz.questions[NewQuiz.currentQuestion].id);
    $('.flagDescription').text(NewQuiz.questions[NewQuiz.currentQuestion].question);
    $(".flag").attr("src", NewQuiz.questions[NewQuiz.currentQuestion].photo);    
    for(var key in options) {
      $("." + key).text(NewQuiz.questions[NewQuiz.currentQuestion].options[key]);
    };    
    $('.answer').attr('checked', false);      
    });
  });  
});