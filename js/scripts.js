// var survey = function() {
  // $("#userName").text(name);
  // $("#userDob").text(dob);
  // $("#userAnimal").text(animal);
  // $("#userVeg").text(vegetable);
  // $("#userRock").text(mineral);

//   $("#userName").append("bla");
//   $("#userDob").append("bla");
//   $("#userAnimal").append("bla");
//   $("#userVeg").append("bla");
//   $("#userRock").append("bla");
// }

// Front End Data input

$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    event.preventDefault();
    var name = $("#name").val();
    var dob = $("#dob").val();
    var animal = $("#animal").val();
    var color = $("#color").val();
    var vegetable = parseInt($("#vegetable").val());
    var mineral = $("input:radio[name=rock]:checked").val();

    alert("haha");

    $("#userName").text(name);
    $("#userDob").text(dob);
    $("#userAnimal").text(animal);
    $("#userVeg").text(vegetable);
    $("#userRock").text(mineral);









    // $("#userName").append("bla");
    // $("#userDob").append("bla");
    // $("#userAnimal").append("bla");
    // $("#userVeg").append("bla");
    // $("#userRock").append("bla");

    // survey();

    // $("#results").show(survey);


  });
});
