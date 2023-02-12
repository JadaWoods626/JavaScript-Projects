//global variable//
var x = 10;
function add_numbers_1() {
  document.write(20 + x + "<br>");
}
function add_numbers_2() {
  document.write(x + 100);
}
add_numbers_1();
add_numbers_2();
//local variable//
function add_numbers_3() {
  var v = 10;
  document.write(20 + v + "<br>");
}
function add_numbers_4() {
  document.write(v + 100);
}
add_numbers_3();
add_numbers_4();
//console log//
function add_number_5() {
  var w = 10;
  console.log(15 + w);
}
function add_number_6() {
  console.log(w + 100);
}
add_number_5();
add_number_6();
//if statements//
if (1 < 2) {
  document.write("The left number is smaller than he number on the right")
}
function get_Date() {
  if (new Date().getHours() < 18) {
  }
  document.getElementById("Greeting").innerHTML = "How are you today";
}
//else statements//
function age_Function() {
  age = document.getElementById("age").value;
  if (age >= 18) {
    vote = "you are old enough to vote!";
  }
  else {
    vote = "you are not old enough to vote!";
  }
  document.getElementById("how_old_are_you?").innerHTML = vote;
  }
//else if statements//
function time_function() {
  var time = new Date().getHours();
  var reply;
  if (time < 12 == time > 0) {
    reply = "it is morning time";
  }
  else if (time >= 12 == time < 18) {
    reply = "it is afternoon";
  }
  else {
    reply = "it is evening time";
  }
  document.getElementById("time_of_the_day").innerHTML = reply;
}

