/// Laura's JS
var firstScreen = document.querySelector(".first-screen")
var mapCont = document.querySelector(".map-holder")
var form = document.querySelector("#search-form")

//tomtom perameters
const TomBUrl = "https://api.tomtom.com/";
const TApiKey = "I28sS2O89AHgGz3gUm9lZBAXNk2HwB0N";
const versionNumber = 4;
const style = "relative0";
const zoom = 12;
const format = "png";
const thickness = "absolute";
const tileSize = 256;
var x = 2044;
var y = 1360;

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
let trafficData = fetch(`${TomBUrl}traffic/map/${versionNumber}/tile/flow/${style}/${zoom}/${x}/${y}.${format}?key=${TApiKey}`)

//abstraction and modularization

form.addEventListener("submit", function(event) {
    event.preventDefault();
    firstScreen.style.display = "none";
    mapCont.style.display="block";

});