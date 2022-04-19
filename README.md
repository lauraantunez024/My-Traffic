# Project



mapSwitchRealty.addEventListener("click", function() {
	trafficMap.style.display="none";
	realtyMap.style.display="block";
	mapSwitchRealty.style.display="none";
	mapSwitchTraffic.style.display="block";
	

})
mapSwitchTraffic.addEventListener("click", function(event) {
	event.preventDefault();
	trafficMap.style.display="block";
	realtyMap.style.display="none";
	mapSwitchRealty.style.display="block";
	mapSwitchTraffic.style.display="none";
	

})
