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
// let realtyData = fetch('https://realty-in-us.p.rapidapi.com/properties/list-for-sale?state_code=NY&city=New%20York%20City&offset=0&limit=200&sort=relevance', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));


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


function getListingData(listing) {
	let realtyData = fetch('https://realty-in-us.p.rapidapi.com/properties/list-for-sale?state_code=NY&city=New%20York%20City&offset=0&limit=5&sort=relevance', options)
	.then(function(response) {
		return response.json();
	})
	.then(function(listD) {
		console.log(listD)
	})
	.catch (function (err) {
		console.error(err)
	})


}




function handleFormSubmit(evt) {
    evt.preventDefault();
    var listing = searchFormInput.value;
    getListingData(listing);
}


function addEventListeners() {
    form.addEventListener("submit", handleFormSubmit);
    // buttonContainerEl.addEventListener("click", handleButtonClick);
}

function init() {
    addEventListeners();
}

init();
