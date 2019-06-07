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




      event.preventDefault();
  });
});
