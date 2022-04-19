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
var searchFormInput = document.querySelector("#search-input");
var recentSearches= document.querySelector("#recentSearches");
var searchList=[];







// This API shows properties that are listed for sale in Atlanta Georgia. We can only do one city and state at a time so we should talk about which one. 
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com',
		'X-RapidAPI-Key': '395cc9c100mshac427d1df6a23e9p130807jsn016fa6b52c1c'
	}
};

// fetch('https://realty-in-us.p.rapidapi.com/properties/v2/list-for-sale?city=Atlanta&state_code=GA&offset=0&limit=200&sort=relevance', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

//abstraction and modularization

form.addEventListener("submit", function(event) {
    event.preventDefault();
    firstScreen.style.display = "none";
    secondScreen.style.display="block";
    mapCont.style.display="block";
	sidebar.style.display="block";
    console.log("here" + searchFormInput.value);
    searchList.push(searchFormInput.value);
    console.log(searchList);
    saveSearch();
    console.log("here4");
    getAddress((searchFormInput.value).trim());
    console.log("here32");
});

titleEl.addEventListener("click", function(event) {
    // window.location.reload();

    event.preventDefault();
    saveSearch();
    console.log(searchList);
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

function  saveSearch(){
    recentSearches.innerHTML = "";
    searchList.forEach(function(address){
      console.log (address);
      var li = document.createElement("li");
      li.textContent=address;
      recentSearches.appendChild (li);
    });
  }
// const mymap = L.map('map2').setView([0, 0], 6);
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

var popup = L.popup()
    .setLatLng([51.513, -0.09])
    .openOn(map);


let firstTime = true;

i=0;
async function getAddress(addy) {
const api_url = `https://realty-in-us.p.rapidapi.com/properties/v2/list-for-sale?city=${addy}&state_code=GA&offset=0&limit=200&sort=relevance&radius=10`;
  const response = await fetch(api_url, options);
  console.log(addy==="Atlanta");
  console.log(addy);
  const data = await response.json();
  console.log(data);
    data.properties.forEach((prop) =>{
        console.log(prop)
        var address = prop.address
        console.log("address: " + address)
      //   var lat = address.lat
      //   var lon = address.lon 
        var bed = prop.beds
        console.log("bed: " + bed)
        var bath = prop.baths
        console.log("bath: " + bath)
        var houseURL = prop.rdc_web_url
        var area = address.city
      
        var price = prop.price
        var street = address.line
      
        document.getElementById('houseURL').textContent = houseURL;
        document.getElementById('price').textContent = price;
        document.getElementById('bed').textContent = bed;
        document.getElementById('bath').textContent = bath;
        document.getElementById('area').textContent = area;
        
      
      
      var lat = window.localStorage.getItem("lat");
      var lon = window.localStorage.getItem("lon");
      map.panTo(new L.LatLng(lat, lon));
      popup.setLatLng([lat, lon]);
      popup.setContent(street);

    })
} 



// marker.setLatLng([lat, lon]);

// getAddress();


function handleFormSubmit(evt) {
    evt.preventDefault();
    var address = searchFormInput.value;
	
    
    getStreetAddress(street);
}



function addEventListeners() {
    searchFormEl.addEventListener("submit", handleFormSubmit);
    // buttonContainerEl.addEventListener("click", handleButtonClick);
}


// addEventListeners();

