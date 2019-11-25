/* global document */
const ready = require('../../js/utils/documentReady.js');

ready(function(){
  function initMap() {
    const coordinates = {
      lat: 55.7939889,
      lng: 37.5911291
    };

    const map = new google.maps.Map(document.getElementById('map'), {
      center: coordinates,
      zoom: 16
    });

    const marker = new google.maps.Marker({
      position: coordinates,
      map: map,
      // icon: '' добавить адрес к картинке для стилизации пина
    });
  }
  initMap();
});
