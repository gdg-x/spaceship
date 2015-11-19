import {Page} from 'ionic/ionic';

@Page({
  templateUrl: 'app/map/map.html'
})
export class Map {
  constructor() {
    this.map = null;
  }

  addMarkerAndInfo(latLng, infoContent) {
    var infowindow = new google.maps.InfoWindow({
      content: ['<h5>', infoContent, '</h5>'].join('')
    });

    var marker = new google.maps.Marker({
      position: latLng,
      map: this.map,
      title: infoContent
    });

    marker.addListener('click', function () {
      infowindow.open(this.map, marker);
    });
  }

  onInit() {
    var googleplex = {lat: 37.421949, lng: -122.084197};

    this.map = new google.maps.Map(document.getElementById('map'), {
      center: googleplex,
      zoom: 9
    });

    this.addMarkerAndInfo(googleplex, 'Center of the Google Universe');

  }
}
