/*global $ */
/*jshint unused:false */
var app = app || {};

       function initialize() {


        var mapOptions = {

          center: { lat: 37.975892, lng: 23.733990},
          zoom: 8
       
        };

        var map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);


        var marker = new google.maps.Marker({

             position: {lat: 37.995207, lng: 23.763363},
             map: map,
             title: 'Hello World!'
            });

      }
      google.maps.event.addDomListener(window, 'load', initialize);
  