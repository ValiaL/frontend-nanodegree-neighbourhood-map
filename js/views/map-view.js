/*global $ */
/*jshint unused:false */
var app = app || {};

var model = {
       name : 'Yellow Cafe',
       mapOptions : {
            center: { lat: 37.995207, lng: 23.763363},
            zoom: 16
            } 
    }                  


 var ViewModel = function(){
          /**
           * self is used by child methods
           *   to refer to the root object easily
          */
          var self=this;

          /**
           * An array of google.maps.Marker() objects
           *   used by self.setNearByMarkers() to set
           *   markers on the map.
           */
          this.dailyMarkers = ko.observableArray([]);

        function initialize() {


        var mapOptions = {

          center: { lat: 37.975892, lng: 23.733990},
          zoom: 8
       
        };

        var map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);


        var marker = new google.maps.Marker({

             position: {model.mapOptions.center.lat,model.mapOptions.center.lng},
             map: self.map,
             title: model.mapOptions.name
            });

      }

      google.maps.event.addDomListener(window, 'load', initialize);

      }

      
  