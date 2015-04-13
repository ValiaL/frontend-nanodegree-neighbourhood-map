/*global $ */
/*jshint unused:false */
var app = app || {};

(function ($){
	'use strict';

      initialize: function() {
        var mapOptions = {
          center: { lat: -34.397, lng: 150.644},
          zoom: 8
        };
        var map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);
      }
      google.maps.event.addDomListener(window, 'load', initialize);
  
})(jQuery);