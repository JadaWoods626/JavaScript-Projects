// while loops //
function counting_to_ten() {
  var digit = "";
  var x = 1;
  while (x < 11) {
    digit += "<br>" + x;
    x++;
  }
  document.getElementById("counting_to_ten").innerHTML = digit;
}
// loops//
var instruments = ["guitar", "drums", "piano", "bass", "violin", "trumpet", "flute",];
var content = "";
var y;
function call_loop() {
  for (y = 0; y < instruments.length; y++) {
    content += instruments[y] + "<br>";
  }
  document.getElementById("list_of_instruments").innerHTML = content;
}
// array//
function cat_pics() {
  var cat_picture = [];
  cat_picture[0] = "sleeping";
  cat_picture[1] = "playing";
  cat_picture[2] = "eating";
  cat_picture[3] = "purring";
  document.getElementById("cat").innerHTML = "in this picture the cat is " + cat_picture[2] + ".";
}
// constant//
function constant_function() {
  const musical_instrument = {type:"guitar", brand:"fender", color:"black"};
  musical_instrument.color = "blue";
  musical_instrument.price = "$900";
  document.getElementById("constant").innerHTML = "the cost of the " + musical_instrument.type + " was " + musical_instrument.price;
}
// let //
var x = 82;
document.write(x);
{
  let x = 33;
  document.write("<br>" + x);
}
document.write("<br>" + x);
// objects //
let car = {
  make: "dodge",
  model: "viper",
  year: "2021",
  color: "blue",
  description : function() {
    return "the car is a " + this.year + this.color + this.make + this.model;
  }
};
document.getElementById("car_object").innerHTML = car.description();