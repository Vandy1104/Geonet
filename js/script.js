console.log('geonet');
$(document).ready(function(){
	//accessing key from json file
	// var myKey = JSON.parse(apiKey);
	// console.log(myKey[0]);
	// myKey = myKey[0].key;
	// console.log(myKey);
	//accessing apiKey from external JSON file
	var myKey = JSON.parse(apiKey);
	console.log(myKey[0].key);


	$.ajax({
	  url : 'https://api.geonet.org.nz/intensity?type=reported',
		type :'GET',
		dataType :'json',
		success:function(data){
			console.log(data);
			//console.log(data.features[0].geometry.coordinates[0]);
			// var i;
			// for (var i = 0; i < data.features.length; i++) {
			// 	console.log(data.features[i]);
			//dynamically creating script tag and appending to the html body including the apikey

			initMap();

			var script = document.createElement('script');
			script.src = 'https://maps.googleapis.com/maps/api/js?key='+ myKey[0].key ;
			document.getElementsByTagName('body')[0].appendChild(script);


				// Initialize and add the map
			function initMap() {
			  // The location of Uluru
			  var uluru = {lat: -25.344, lng: 131.036};
			  // The map, centered at Uluru
			  var map = new google.maps.Map(
			      document.getElementById('map'), {zoom: 4, center: uluru});
			  // The marker, positioned at Uluru
			  var marker = new google.maps.Marker({position: uluru, map: map});
				}

		},
			error:function(){
			console.log('error');
		}
	});//ajax
}); //document ready
// <script async defer
// src="https://maps.googleapis.com/maps/api/js?key=" + myKey&callback=initMap">
// </script>
