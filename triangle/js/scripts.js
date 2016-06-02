$(document).ready(function() {
  $("#prompt form").submit(function(event) {
    var groundedness = $("#groundedness").val();
    var basic = parseInt($("#basic").val());

    $("#gryffinclaw").addClass("toggle");
    $("#gryffinpuff").addClass("toggle");
    $("#ravenpuff").addClass("toggle");
    $("#slytherclaw").addClass("toggle");
    $("#slytherdor").addClass("toggle");
    $("#slytherpuff").addClass("toggle");

    if (groundedness === "Definitely grounded" && basic === 1) {
      $("#slytherpuff").removeClass("toggle");
    }

    if (groundedness === "Definitely grounded" && basic === 2) {
      $("#gryffinpuff").removeClass("toggle");
    }

    if (groundedness === "Definitely grounded" && basic === 3) {
      $("#slytherdor").removeClass("toggle");
    }

    if (groundedness === "High as a kite" && basic === 1) {
      $("#ravenpuff").removeClass("toggle");
    }

    if (groundedness === "High as a kite" && basic === 2) {
      $("#gryffinclaw").removeClass("toggle");
    }

    if (groundedness === "High as a kite" && basic === 3) {
      $("#slytherclaw").removeClass("toggle");
    }

    event.preventDefault();
  });
});
