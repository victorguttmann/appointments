/*
$(document).ready(function() {
  $("#booking").submit(function(event) {
    alert("Your appointment has been booked!");
    event.preventDefault();
  });
});
*/



$(document).ready(function() {
  $("form#booking").submit(function(event) {
    event.preventDefault();
    alert("Booked!")
	});
});
