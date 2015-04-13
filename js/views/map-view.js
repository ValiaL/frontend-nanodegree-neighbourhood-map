/*global $ */
/*jshint unused:false */
var app = app || {};

function initialize() {
var mapOptions = {
  center: { lat: -34.397, lng: 150.644},
  zoom: 8
};
var map = new google.maps.Map(document.getElementById('map-canvas'),
    mapOptions);

var request = {
    location: athens,
    radius: '500',
    types: ['store']
  };

 service = new google.maps.places.PlacesService(map);
 service.nearbySearch(request, callback);
}


function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      var place = results[i];
      createMarker(results[i]);
    }
  }
}
google.maps.event.addDomListener(window, 'load', initialize);
  


var ViewModel = {


}