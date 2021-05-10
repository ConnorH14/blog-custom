$(document).ready(function(){
  $("#week-1").load("journal/week1.html");
});

function showWeekOne(){
  document.getElementById("week-1").classList.remove('hide-journal');
}