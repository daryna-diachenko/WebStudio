(() => {
// Add active class to the current button (highlight it)
var header = document.getElementById("nav");
var links = header.getElementsByClassName("nav__link");
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}})();