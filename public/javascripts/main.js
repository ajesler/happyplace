// configuration
var feedback_fadeDelay = 500;
var feedback_displayTime = 5000;

var feedback_index = 0;

function nextFeedbackIndex(i, min, max){
  var r = (i == max) ? min : i + 1;
  return r;
}

function displayFeedback(data){
  console.log("displaying ", data)
  $("#body").text(data.body);
  $("#staff").text(data.staff);
  $("#customer").text(data.customer);
}

function showNextFeedback(){
  displayFeedback(feedback[feedback_index]);
  feedback_index = nextFeedbackIndex(feedback_index, 0, feedback.length-1);
}

function transitionNextFeedback(){
  console.log("showNextFeedback");
  var fd = $("div.feedback-display");
  fd.fadeOut(feedback_fadeDelay, function(){
    
    showNextFeedback();
    fd.fadeIn(feedback_fadeDelay);
  });
}

function initFeedback(){
  showNextFeedback();
  var interval = setInterval(transitionNextFeedback, feedback_displayTime);
}

$( document ).ready(initFeedback);
