var trafficMapEL = document.querySelector("#traffic-map");
var trafficMapBtn = document.querySelector("#toggle-traffic-button");
var searchFormEl = document.querySelector("#search-form");
var searchFormInput = document.querySelector("#search-input");
//tomtom perameters
const TomBUrl = "https://api.tomtom.com/";
const TApiKey = "I28sS2O89AHgGz3gUm9lZBAXNk2HwB0N";
const versionNumber = 4;
const thickness = "absolute";
const ext = "json";
const style = "relative";
const zoom = 12;
const format = "json"
const versionNumberOne = 2;
const countrySet = "US/USA"
const radius = 40233.60;
// grabs needed arguments from street data in order to get map from the api to work
function mapData(trafData, lat, lon) {
    console.log(JSON.stringify(trafData) + "this one")
    //// then with the lat lon from the getStreetAddress function and will display on the map and show real time traffic flow in that area
    tt.setProductInfo('<your-product-id>', '<your-product-version>')
    tt.map({
        key: TApiKey,
        container: 'map1',
        center: { lat: lat, lng: lon },
        zoom: 12,
        pitch: 50,
        stylesVisibility: {
            trafficIncidents: true,
            trafficFlow: true
        }
    })
}
// user input is added to the geocode api call so we can get back lat and lon based on zip code and address inputs 
// so that way we have the correct data needed to make the traffic flow api call then from there get the traffic map api call
function getStreetAddress(street) {
    var url = `${TomBUrl}search/${versionNumberOne}/geocode/${street}.${ext}?key=${TApiKey}&countrySet=${countrySet}&radius=${radius}`;
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            var streetObject = data.results[0];
            var lat = streetObject.position.lat;
            var lon = streetObject.position.lon;
            window.localStorage.setItem("lon", lon);
            window.localStorage.setItem("lat", lat);
            // combines lat and lon into one string in order to meet traffic flow api parameters
            var point = lat + "," + lon;
            document.getElementById('lat').innerHTML = lat;
            document.getElementById('lon').innerHTML = lon;
            //traffic flow api call
            var currentTrafficUrl = `${TomBUrl}traffic/services/${versionNumber}/flowSegmentData/${style}/${zoom}/${format}?key=${TApiKey}&point=${point}`;
            fetch(currentTrafficUrl)
                .then(function (response) {
                    return response.json()
                }).then(function (trafData) {
                    //grabs lat lon and traffic flow data and passes them as arguments need for the map api to work/ display
                    mapData(trafData, lat, lon);
                })
        });
}
//gets user input then creates a value for input
function handleFormSubmit(evt) {
    evt.preventDefault();
    var street = searchFormInput.value;
    document.getElementById('userinput').textContent = street

    getStreetAddress(street);
}
//listens for user submit in search form
function addEventListeners() {
    searchFormEl.addEventListener("submit", handleFormSubmit);
}
function init() {
    addEventListeners();
    mapData();
}
//runs on page load
init();