function my_Dictionary() {
  var animal = {
    species:"dog",
    color:"white",
    breed:"samoyed",
    age:5,
    sound:"bark!",
  };
  delete animal.sound;//deletes the sound ouput//
  document.getElementById("Dictionary").innerHTML = animal.sound;
}