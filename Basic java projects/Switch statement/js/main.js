// switch statement //
function color_function() {
  var color_output;
  var colors = document.getElementById("color_input").value;
  var color_string = " is a great color";
  switch (colors) {
    case "light blue":
      color_output = "light blue" + color_string;
      break;
    case "light blue":
      color_output = "light blue" + color_string;
      break;
    case "yellow":
      color_output = "yellow" + color_string;
      break;
    case "green":
      color_output = "green" + color_string;
      break;
    case "blue":
      color_output = "blue" + color_string;
      break;
    case "purple":
      color_output = "purple" + color_string;
      break;
    case "red":
      color_output = "red" + color_string;
      break;
    default:
      color_output = "please enter a color exactly as written on the list.";
  }
  document.getElementById("output").innerHTML = color_output;
}
