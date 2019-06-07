var pleaseSelect1 = false;
var pleaseSelect2 = false;
var pleaseSelect3 = false;
var pleaseSelect4 = false;
var pleaseSelect5 = false;

function doremove1() {    //doremovex functions will remove the first option from the dropdown lists ("Please select") when the user clicks the individal list
  if(!pleaseSelect1) {
    $("#question1 option:first").remove();
    pleaseSelect1 = true;
  }
};
function doremove2() {    //doremovex functions will remove the first option from the dropdown lists ("Please select") when the user clicks the individal list
  if(!pleaseSelect2) {
    $("#question2 option:first").remove();
    pleaseSelect2 = true;
  }
};
function doremove3() {    //doremovex functions will remove the first option from the dropdown lists ("Please select") when the user clicks the individal list
  if(!pleaseSelect3) {
    $("#question3 option:first").remove();
    pleaseSelect3 = true;
  }
};
function doremove4() {    //doremovex functions will remove the first option from the dropdown lists ("Please select") when the user clicks the individal list
  if(!pleaseSelect4) {
    $("#question4 option:first").remove();
    pleaseSelect4 = true;
  }
};
function doremove5() {    //doremovex functions will remove the first option from the dropdown lists ("Please select") when the user clicks the individal list
  if(!pleaseSelect5) {
    $("#question5 option:first").remove();
    pleaseSelect5 = true;
  }
};

$(function(){
  $("#programmingQuestionnaire").submit(function(event){

    $("#programmingQuestionnaire span").remove();
    var questionnaireComplete = true;

    if ($("#question1").val() === '0'){
      $("#question1").after('<span class="text-danger">Please select an option to proceed</span>');
      questionnaireComplete = false;
    }
    if ($("#question2").val() === '0'){
      $("#question2").after('<span class="text-danger">Please select an option to proceed</span>');
      questionnaireComplete = false;
    }
    if ($("#question3").val() === '0'){
      $("#question3").after('<span class="text-danger">Please select an option to proceed</span>');
      questionnaireComplete = false;
    }
    if ($("#question4").val() === '0'){
      $("#question4").after('<span class="text-danger">Please select an option to proceed</span>');
      questionnaireComplete = false;
    }
    if ($("#question5").val() === '0'){
      $("#question5").after('<span class="text-danger">Please select an option to proceed</span>');
      questionnaireComplete = false;
    }

    var numberOfQuestions = 5;
    var userResult = 0;

    if(questionnaireComplete) {
      var resultScore = 0;
      resultScore += parseInt($("#question1").val());
      resultScore += parseInt($("#question2").val());
      resultScore += parseInt($("#question3").val());
      resultScore += parseInt($("#question4").val());
      resultScore += parseInt($("#question5").val());

      userResult = resultScore / numberOfQuestions;
      if (userResult < 1.66){
        $("#programmingLanguage").text("Python");
      } else if (userResult < 2.33){
        $("#programmingLanguage").text("Ruby+Ruby on Rails");
      } else {
        $("#programmingLanguage").text("Java");
      }
      $("#questionnaireResult").show();

      $("div#outerDiv").removeClass("outer");
      $("div#outerDiv").addClass("outerComplete");

    }
    event.preventDefault();
  });
});
