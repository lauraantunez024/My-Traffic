var firstScreen = document.querySelector(".first-screen")
var secondScreen = document.querySelector(".second-screen")
var form = document.querySelector("#search-form")




form.addEventListener("submit", function(event) {
    event.preventDefault();
    firstScreen.style.display = "none";
    secondScreen.style.display="block";

});



