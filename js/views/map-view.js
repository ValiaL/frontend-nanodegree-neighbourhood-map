/*global $ */
/*jshint unused:false */

var app = app || {};

var dailyplaces= [];


var locations = [
      {name:'Vissinokipos', lat: 37.984660, long: 23.735055},
      {name:'Mommys',lat: 37.982386, long: 23.736798},
      {name:'Circus', lat:37.983504, long:23.735607},
      {name:'Lotte', lat: 37.967345, long:23.726889},
      {name:'Lostre kouzina', lat:37.962764, long:23.732438},
      {name:'Jazz note', lat:37.964919, long:23.734640}
    ];

//choose the places depending on the day 
//that Today() returns

function chooseTodaysPlaces (day) {

  var self = this;
  //var day = getToday(0);
  switch (day) {
    case 0:
        console.log('Today is Sunday!');
        day = "Sunday";
        dailyplaces.push(locations[0], locations[1], locations[2]);
        break;
    case 1:
        console.log('Today is Monday!');
        day = "Monday";
        dailyplaces.push(locations[1], locations[3], locations[5]);
        break;
    case 2:
        console.log('Today is Tuesday!');
        day = "Tuesday";
        dailyplaces.push(locations[2], locations[5], locations[0]);
        break;
    case 3:
        day = "Wednesday";
        dailyplaces.push(locations[3], locations[0], locations[4]);
        break;
    case 4:
        console.log('Today is Thursday!');
        day = "Thursday";
        dailyplaces.push(locations[4], locations[3], locations[5]);
        break;
    case 5:
        console.log('Today is Friday!');
        day = "Friday";
        dailyplaces.push(locations[5], locations[5], locations[3]);
        break;
    case 6:
        console.log('Today is Saturday!');
        day = "Saturday";
        dailyplaces.push(locations[0], locations[3], locations[1]);
        break;
      } 

    };


// Use moment.js to get the day of the week 
// If format is true function will return formatted version of 'Day, Time'
// Otherwise it returns day in numerical form (eg. '2' for Tuesday)

function getToday (format) {

  if (format == true) {
    date = moment().weekday(String).format('dddd, hA')
  }
  else
    date = moment().weekday();

  return date;
}

//var allPlaces = ko.observableArray([]);
var todaysPlaces = ko.observableArray([]);
chooseTodaysPlaces(0);
//chooseTodaysPlaces(getToday());
dailyplaces.forEach(populateMarkersArray);
//locations.forEach(populateMarkersArray);

//todaysPlaces.push(showPlacesToday(getToday()));
//console.log(todaysPlaces[0]);

function populateMarkersArray(element) { //, index, array
    todaysPlaces.push(element);
}

 var myLatlng = new google.maps.LatLng(37.995207, 23.763363);

 var mapOptions = {
    zoom: 13,
    center: myLatlng
  }

 var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

 function initialize(){

    dailyplaces.forEach(loadMarkers);

    var infowindow0 = new google.maps.InfoWindow();
    var marker0 = new google.maps.Marker({
        map: map,
        anchorPoint: new google.maps.Point(0, -29)
    });

    google.maps.event.addListener(function() {
        infowindow0.close();
        marker0.setVisible(false);
        var place = autocomplete.getPlace();
        if (!place.geometry) {
            return;
        }

    infowindow0.setContent('<div><strong>' + place.name + '</strong><br>' + address);
        infowindow0.open(map, marker0);
    });

 }

 google.maps.event.addDomListener(window, 'load', initialize);

function loadMarkers(element) { //, index, array
    var myLatlng = new google.maps.LatLng(element.lat,element.long);
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: element.name
    });
    loadInfoWindow(element, marker);
}

function loadInfoWindow(element, marker) {
    var contentString = '<div class="strong"><a href="' + element.url + '" target="_blank">' + element.name + '</a></div><div>' + element.add1 + '</div><div>' + element.add2 + '</div><div>'+ element.phone + '</div>';
    var infowindow = new google.maps.InfoWindow({
      content: contentString
    });
    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map,marker);
        //toggleBounce(marker);
    });
}

function toggleBounce(marker) {
    if (marker.getAnimation() != null) {
        marker.setAnimation(null);
    } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
    }
}

function appViewModel(){

  var self = this;

  //Get today's date and time
  //Use getToday(true) to get the formatted version in form of 'Day, Time'
  self.now = ko.observable(getToday(true));


 

  /*for (var i = 0; i < locations.length; i++) {  
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map,
        icon: icons[iconCounter]
      });*/

      //markers.push(marker);

    /* google.maps.event.addListener(marker, 'click', (function(marker, i) {
      return function() {
        infowindow.setContent(locations[i][0]);
        infowindow.open(map, marker);
      }
    })(marker, i));

  /*var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Hello World!'
  });*/

  

  /*self.shops = ko.observableArray([
      new initialize.myLatlng = self.dailyMenus[0].location1[];
      new initialize.myLatlng = self.dailyMenus[0].location2[];
      new initialize.myLatlng = self.dailyMenus[0].location2[];

    ])*/

}


//google.maps.event.addDomListener(window, 'load', appViewModel);

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

      
  