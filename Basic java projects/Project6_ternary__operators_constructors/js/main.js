// ternary operations//
function ride_Function() {
  var height, can_ride;
  height = document.getElementById("height").value;
  can_ride = (height < 52) ? "you are too short":"you are tall enough";
  document.getElementById("ride").innerHTML = can_ride + " to ride";
}
//contructors//
function vehicle(make, model, year, color) {
  this.vehicle_make = make;
  this.vehicle_model = model;
  this.vehicle_year = year;
  this.vehicle_color = color;
}
var jack = new vehicle("dodge", "viper", 2020, "red");
var emily = new vehicle("jeep", "trail hawk", 2019, "white and black");
var erick = new vehicle("ford", "pinto", 1971, "mustard");
function my_Function() {
  document.getElementById("keywords_and_constructors").innerHTML = "erick drives a " + erick.vehicle_color + "-colored" + erick.vehicle_model + " manufactured in " + erick.vehicle_year;
}
//nested functions//
function count_Function() {
  document.getElementById("counting").innerHTML = count() ;
  function count() {
    var starting_point = 9;
    function plus_one() {starting_point += 1;}
    plus_one();
    return starting_point;
  }
}