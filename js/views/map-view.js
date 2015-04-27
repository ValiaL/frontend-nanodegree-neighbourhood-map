/*global $ */
/*jshint unused:false */

var app = app || {};

function appViewModel(){

  var self = this;

  self.now = ko.observable(moment().weekday(String).format('dddd, hA'));

  var myLatlng = new google.maps.LatLng(37.995207, 23.763363);
  var mapOptions = {
    zoom: 8,
    center: myLatlng
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Hello World!'
  });

 /* self.dailyMenus = [
   // {day:"Monday", location1 = [37.971015, 23.726838], location2 = [37.984712, 23.735026], location3 = [37.983598, 23.736879]},
   // {day:"Tuesday", location1 = [37.971015, 23.726838], location2 = [37.076823, 23.810021], location3 = [37.970381, 23.704356]},
    {day:"Wendesday", location1 = [37.971015, 23.726838], location2 = [37.978196, 23.740657], location3 = [37.979233, 23.737117]}
   // {day:"Thursday", location1 = [37.981601, 23.737042], location2 = [37.985829, 23.735572], location3 = [37.989322, 23.744851]},
   // {day:"Friday", location1 = [37.986773, 23.753889], location2 = [37.984997, 23.761217], location3 = [37.984980, 23.773341]},
  ];

  self.shops = ko.observableArray([
      new initialize.myLatlng = self.dailyMenus[0].location1[];
      new initialize.myLatlng = self.dailyMenus[0].location2[];
      new initialize.myLatlng = self.dailyMenus[0].location2[];

    ])*/
 

}


google.maps.event.addDomListener(window, 'load', appViewModel);

ko.applyBindings(new appViewModel());


/*
function latlng(lat,lng) {
  return new google.maps.LatLng(lat,lng);
}
*/
/*var model = {
       name : 'Yellow Cafe',
       mapOptions = {
            center: { lat: 37.995207, lng: 23.763363},
            zoom: 16
            } 
    };              */


 // var ViewModel = function(){
 //          /**
 //           * self is used by child methods
 //           *   to refer to the root object easily
 //          */
 //          var self=this;
 //          /**
 //           * An array of google.maps.Marker() objects
 //           *   used by self.setNearByMarkers() to set
 //           *   markers on the map.
 //           */
 //          this.dailyMarkers = ko.observableArray([]);

 //        function initialize() {


 //        var mapOptions = {

 //          center: { lat: 37.975892, lng: 23.733990},
 //          zoom: 8
       
 //        };

 //        var map = new google.maps.Map(document.getElementById('map-canvas'),
 //            mapOptions);


 //      /*  var marker = new google.maps.Marker({

 //             this.position: {lat: 37.995207, lng: 23.763363},
 //             this.map: self.map,
 //             this.title: model.mapOptions.name
 //            });*/

 //      }

 //      google.maps.event.addDomListener(window, 'load', initialize);

 //      }

      
  