/// Laura's JS
var firstScreen = document.querySelector(".first-screen")
var mapCont = document.querySelector(".map-holder")
var form = document.querySelector("#search-form")




form.addEventListener("submit", function(event) {
    event.preventDefault();
    firstScreen.style.display = "none";
    mapCont.style.display="block";

});


// This API shows properties that are listed for sale in Atlanta Georgia. We can only do one city and state at a time so we should talk about which one. 

const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://realty-in-us.p.rapidapi.com/properties/list-for-sale?state_code=GA&city=Atlanta&offset=0&limit=500&sort=relevance",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Host": "realty-in-us.p.rapidapi.com",
		"X-RapidAPI-Key": "395cc9c100mshac427d1df6a23e9p130807jsn016fa6b52c1c"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});





// Plan B API VVVV

// const settings = {
// 	"async": true,
// 	"crossDomain": true,
// 	"url": "https://us-real-estate.p.rapidapi.com/location/for-sale-nearby-areas-by-postal-code?postal_code=10022",
// 	"method": "GET",
// 	"headers": {
// 		"X-RapidAPI-Host": "us-real-estate.p.rapidapi.com",
// 		"X-RapidAPI-Key": "395cc9c100mshac427d1df6a23e9p130807jsn016fa6b52c1c"
// 	}
// };

// $.ajax(settings).done(function (response) {
// 	console.log(response);
// });


///Fernando's API Call

// $(document).ready(function () {
//     var apiKey = "I28sS2O89AHgGz3gUm9lZBAXNk2HwB0N";
//     var baseUrl = "api.tomtom.com"
//     var versionNumber = 4;
//     var style = "absolute";
//     var zoom = 10;
//     var format = "json";
//     var point = "33.03,-93.15";
//     var urlKey = `https://${baseUrl}/traffic/services/${versionNumber}/flowSegmentData/${style}/${zoom}/${format}?key=${apiKey}&point=${point}`//&unit={unit}&thickness={thickness}&openLr={boolean}&jsonp={jsonp}

//     $.ajax({
//         url: urlKey, success: function (result) {
//             console.log (result)
//         }
//     });




// })
// >>>>>>> 4f7722c83b1c17184fcda6e0409fec2e71a7d2d5
