/// Laura's JS
var firstScreen = document.querySelector(".first-screen")
var mapCont = document.querySelector(".map-container")
var sidebar = documemnt.querySelector(".sidebar")
var form = document.querySelector("#search-form")
var secondScreen = document.querySelector(".second-screen")

//tomtom perameters
const TomBUrl = "https://api.tomtom.com/";
const TApiKey = "I28sS2O89AHgGz3gUm9lZBAXNk2HwB0N";
const versionNumber = 4;
const style = "absolute";
const zoom = 10;
const format = "json";
var point = "33.03,-93.15";

//realty parameters
const RltBUrl = "https://realty-in-us.p.rapidapi.com/";
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com',
		'X-RapidAPI-Key': '395cc9c100mshac427d1df6a23e9p130807jsn016fa6b52c1c'
	}
};
// This API shows properties that are listed for sale in Atlanta Georgia. We can only do one city and state at a time so we should talk about which one. 
let realtyData = fetch('https://realty-in-us.p.rapidapi.com/properties/list-for-sale?state_code=NY&city=New%20York%20City&offset=0&limit=200&sort=relevance', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
let trafficData = fetch(`${TomBUrl}traffic/services/${versionNumber}/flowSegmentData/${style}/${zoom}/${format}?key=${TApiKey}&point=${point}`)

//promises both api keys data then returns them
Promise.all([
	realtyData,
	trafficData
]).then(function (responses) {
	// Get a JSON object from each of the responses
	return Promise.all(responses.map(function (response) {
		return response.json();
	}));
}).then(function (data) {
	// Log the data to the console
	// You would do something with both sets of data here
	console.log(data);
}).catch(function (error) {
	// if there's an error, log it
	console.log(error);
});

form.addEventListener("submit", function(event) {
    event.preventDefault();
    firstScreen.style.display = "none";
    mapCont.style.display="block";
	sidebar.style.display="block";


});


