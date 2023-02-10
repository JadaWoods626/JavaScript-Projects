//string//
document.write(typeof "word");
//number//
document.write(typeof 3);
document.write("10" + 22);
//numbers over infinity//
document.write(2E310);
//numbers in negative infinity//
document.write(-3E310);
//not a number (nan)//
function my_Function() {
  document.getElementById("test").innerHTML = 0/0;
}
//checking if it is a nan//
function my_Function() {
  document.getElementById("testing").innerHTML = isNaN('007');
}
//boolean values//
document.write(10 < 2);
document.write(10 == 10);
a = "dogs";
b = "cats";
c = "dogs";
document.write(a === b);
document.write(a === c);
//console log//
console.log(2 + 2);
console.log(22 < 2);
//logical operators//
document.write(5 < 2 && 10 < 4);
document.write(5 > 2 || 10 > 20);
//not operator//
function not_Function() {
  document.getElementById("not").innerHTML = !(20 > 10);
}