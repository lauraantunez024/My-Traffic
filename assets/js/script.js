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