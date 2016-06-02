$(document).ready(function() {
  $("#prompt form").submit(function(event) {
    var x = parseInt($("#x").val());
    var y = parseInt($("#y").val());
    var z = parseInt($("#z").val());

    $("#answer").empty();
    $("#x").removeClass("form-control");
    $("#y").removeClass("form-control");
    $("#z").removeClass("form-control");


    if (isNaN(x) || isNaN(y) || isNaN(z)) {
      alert("Please complete all fields.")
    } else {
      if (x + y <= z || z + y <= x || x + x <= y) {
          $("#x").addClass("form-control");
          $("#y").addClass("form-control");
          $("#z").addClass("form-control");
      } else {
        if (x === y && x === z) {
          $("#answer").append("<p>You are an equilateral triangle. That's awesome!</p>");
        } else if (x === y || x === z || y === z) {
          $("#answer").append("<p>You are an isosceles triangle. Good for you!</p>");
        } else {
          $("#answer").append("<p>You are a scalene triangle. You're the worst!</p>");
        }
      }
    }
    event.preventDefault();
  });
});
