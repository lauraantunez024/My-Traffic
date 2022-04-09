/// Laura's JS
var firstScreen = document.querySelector(".first-screen")
var secondScreen = document.querySelector(".second-screen")
var form = document.querySelector("#search-form")




form.addEventListener("submit", function(event) {
    event.preventDefault();
    firstScreen.style.display = "none";
    secondScreen.style.display="block";

});



///Fernando's API Call


$(document).ready(function () {
    var apiKey = "I28sS2O89AHgGz3gUm9lZBAXNk2HwB0N";
    var baseUrl = "api.tomtom.com"
    var versionNumber = 4;
    var style = "absolute";
    var zoom = 10;
    var format = "json";
    var point = "33.03,-93.15";
    var urlKey = `https://${baseUrl}/traffic/services/${versionNumber}/flowSegmentData/${style}/${zoom}/${format}?key=${apiKey}&point=${point}`//&unit={unit}&thickness={thickness}&openLr={boolean}&jsonp={jsonp}

    $.ajax({
        url: urlKey, success: function (result) {
            console.log (result)
        }
    });








})
// >>>>>>> 4f7722c83b1c17184fcda6e0409fec2e71a7d2d5
