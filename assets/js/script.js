/// Laura's JS
var firstScreen = document.querySelector(".first-screen")
var mapCont = document.querySelector(".map")
var sidebar = document.querySelector(".sidebar")
var form = document.querySelector("#search-form")
var secondScreen = document.querySelector(".second-screen")
var titleEl = document.querySelector("#title")
var mapSwitchRealty = document.querySelector("#ms-realty")
var mapSwitchTraffic = document.querySelector("#ms-traffic")
var trafficMap = document.querySelector("#map1")
var realtyMap = document.querySelector("#map2")


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
// let realtyData = fetch('https://realty-in-us.p.rapidapi.com/properties/list-for-sale?state_code=NY&city=New%20York%20City&offset=0&limit=200&sort=relevance', options)
// 	.then(function(response) {
// 		return response.json();
// 	})
// 	.then(function(response) {
// 		console.log(response)
// 	})
// 	.catch (function (err) {
// 		console.error(err)
// 	})
		
		
// 	// 	response => response.json())
// 	// .then(response => console.log(response))
// 	// .catch(err => console.error(err));


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

mapSwitchRealty.addEventListener("click", function() {
	trafficMap.style.display="none";
	realtyMap.style.display="block";
	mapSwitchRealty.style.display="none";
	mapSwitchTraffic.style.display="block";
	

})
mapSwitchTraffic.addEventListener("click", function() {
	trafficMap.style.display="block";
	realtyMap.style.display="none";
	mapSwitchRealty.style.display="block";
	mapSwitchTraffic.style.display="none";
	

})


var accessToken = "pk.eyJ1IjoibGF1cmFhbnR1bmV6MDI0IiwiYSI6ImNsMjN0dmQ1bzF0a2szYnA2ZGJpNDJvd3YifQ.hLWsrVySzzKYd4I1ISkVMA"

var map = L.map('map2', {
    center: [33.74, -84.39],
    zoom: 13
});
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibGF1cmFhbnR1bmV6MDI0IiwiYSI6ImNsMjN0dmQ1bzF0a2szYnA2ZGJpNDJvd3YifQ.hLWsrVySzzKYd4I1ISkVMA'
}).addTo(map);

// var marker = L.marker([51.5, -0.09]).addTo(map);
// var circle = L.circle([51.508, -0.11], {
//     color: 'red',
//     fillColor: '#f03',
//     fillOpacity: 0.5,
//     radius: 500
// }).addTo(map);
// var polygon = L.polygon([
//     [51.509, -0.08],
//     [51.503, -0.06],
//     [51.51, -0.047]
// ]).addTo(map);