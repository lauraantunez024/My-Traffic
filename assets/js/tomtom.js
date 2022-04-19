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


function mapData(trafData, lat, lon) {
    console.log(JSON.stringify(trafData) + "this one")

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

var point;
var lat;
var lon;


//3636 Habersham Rd NW, Atlanta, GA 30305

function getStreetAddress(street) {
    var url = `${TomBUrl}search/${versionNumberOne}/geocode/${street}.${ext}?key=${TApiKey}&countrySet=${countrySet}&radius=${radius}`;

    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            var streetObject = data.results[0];

            lat = streetObject.position.lat;
            lon = streetObject.position.lon;
            point = lat + "," + lon;
            // console.log(point);
            var currentTrafficUrl = `${TomBUrl}traffic/services/${versionNumber}/flowSegmentData/${style}/${zoom}/${format}?key=${TApiKey}&point=${point}`;

            fetch(currentTrafficUrl)
                .then(function (response) {
                    return response.json()
                }).then(function (trafData) {
                    mapData(trafData, lat, lon);
                })

        });

}




function handleFormSubmit(evt) {
    evt.preventDefault();
    var street = searchFormInput.value;
    document.getElementById('userinput').textContent = street
    
    getStreetAddress(street);
}


function addEventListeners() {
    searchFormEl.addEventListener("submit", handleFormSubmit);
    // buttonContainerEl.addEventListener("click", handleButtonClick);
}

function init() {
    addEventListeners();
    mapData();
}

init();

