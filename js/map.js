
var map;
var styles = [{
    "stylers": [{
        "saturation": -100
    }]
}];

function initMap() {
    var thealexc = {
        lat: 55.698628,
        lng: 37.615169
    };
    var thealexm = {
        lat: 55.698628,
        lng: 37.615169
    };
    map = new google.maps.Map(document.getElementById('map'), {
        center: thealexc,
        zoom: 15,
        styles: styles,
        mapTypeControl: false,
        scrollwheel: false
    });
    var image = 'img/balloon.png';
    var marker = new google.maps.Marker({
        position: thealexm,
        map: map,
        icon: image,
        title: 'voron-auto'
    });

    var infowindow = new google.maps.InfoWindow({
        content: "<strong>Voron-auto</strong><br><span>Специализированный автотехцентр</span>"
    });
    google.maps.event.addListener(marker, 'click', function () {
        infowindow.open(map, marker);
    });
}