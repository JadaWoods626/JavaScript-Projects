function validationForm() {
  let x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("name must be filed out");
    return false;
  }
}