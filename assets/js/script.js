/// Laura's JS
var firstScreen = document.querySelector(".first-screen")
var mapCont = document.querySelector(".map")
var sidebar = document.querySelector(".sidebar")
var form = document.querySelector("#search-form")
var secondScreen = document.querySelector(".second-screen")
var titleEl = document.querySelector("#title")



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
	.then(function(response) {
		return response.json();
	})
	.then(function(response) {
		console.log(response)
	})
	.catch (function (err) {
		console.error(err)
	})
		
		
	// 	response => response.json())
	// .then(response => console.log(response))
	// .catch(err => console.error(err));


//abstraction and modularization

form.addEventListener("submit", function(event) {
    event.preventDefault();
    firstScreen.style.display = "none";
    mapCont.style.display="block";
	sidebar.style.display="block";
});

titleEl.addEventListener("click", function(event) {
    event.preventDefault();
	firstScreen.style.display="block"
    mapCont.style.display = "none";
	sidebar.style.display="none";
});


// var map = new Map({
// 	view: new View({
// 	  center: [0, 0],
// 	  zoom: 1
// 	}),
// 	layers: [
// 	  new TileLayer({
// 		source: new OSM()
// 	  })
// 	],
// 	target: 'map'
//   });
var map = new ol.Map({
	target: 'map',
	layers: [
	  new ol.layer.Tile({
		source: new ol.source.OSM()
	  })
	],
	view: new ol.View({
	  center: ol.proj.fromLonLat([37.41, 8.82]),
	  zoom: 4
	})
  });