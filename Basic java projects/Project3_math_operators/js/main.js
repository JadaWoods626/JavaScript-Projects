//Basic math//
function addition_Function() {
  var addition = 2 + 2 ;
  document.getElementById("Math").innerHTML = "2 + 2 = " + addition;
}
function subtraction_Function() {
  var subtraction = 4 - 2 ;
  document.getElementById("Math").innerHTML = " 4 - 2 = " + subtraction;
}
function multiplication() {
  var simple_math = 2 * 2 ;
  document.getElementById("Math").innerHTML = " 2 * 2 = " + simple_math;
}
function division() {
  var simple_math = 4 / 2 ;
  document.getElementById("Math").innerHTML = " 4 / 2 = "  + simple_math;
}
//Writes a sentence while calculating the sum//
function modulus_Operator() {
  var simple_math = 9 % 2 ;
  document.getElementById("Math").innerHTML = "When you divide 9 by 2 you have a remainder of: "  + simple_math;
}
//Making a negative number//
function negation_Operator() {
  var x = 10;
  document.getElementById("Math").innerHTML = -x;
}
//Adding one to the variable//
var w = 22;
w++;
document.write(w);
//Subtracting one from the variable//
var j = 22;
j--;
document.write(j);
//Chooses a random number between 0 and 100//
window.alert(Math.random() * 100);