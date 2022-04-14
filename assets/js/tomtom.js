var trafficMapEL = document.querySelector("#traffic-map");
var trafficMapBtn = document.querySelector("#toggle-traffic-button");
var searchFormEl = document.querySelector("#search-form");
var searchFormInput = document.querySelector("#search-input");
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
let trafficData = fetch(`${TomBUrl}traffic/map/${versionNumber}/tile/flow/${style}/${zoom}/${x}/${y}.${format}?key=${TApiKey}`)


function handleFormSubmit(evt) {
    evt.preventDefault();
        window.alert("foo");
  }
  
  function handleButtonClick(evt) {
    
  }

function addEventListeners() {
    searchFormEl.addEventListener("submit", handleFormSubmit);
    // buttonContainerEl.addEventListener("click", handleButtonClick);
}

function init() {
    addEventListeners(); 
    // populateButtons();
  }

init();