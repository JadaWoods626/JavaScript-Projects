//concat()//
function full_Sentence() {
  var part_1 = "i have ";
  var part_2 = "made this ";
  var part_3 = "into a complete ";
  var part_4 = "sentence";
  var whole_sentence = part_1.concat(part_2, part_3, part_4);
  document.getElementById("concatenate").innerHTML = whole_sentence;
}
//slice//
function slice_Method() {
  var sentence = "all work and no play makes daniel a dull boy.";
  var section = sentence.slice(27,33);
  document.getElementById("slice").innerHTML = section;
}
//number method//
function string_Method() {
  var d = 822;
  document.getElementById("numbers_to_string").innerHTML = d.toString();
}
//toprecision//
function precision_Method() {
  var a = 12345.3012987376112;
  document.getElementById("precision").innerHTML = a.toPrecision(10);
}