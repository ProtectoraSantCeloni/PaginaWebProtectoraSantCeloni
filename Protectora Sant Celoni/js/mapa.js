function initMap() {
    var LatitudLongitud = {lat: 41.684570, lng: 2.491311};

    var mapa = new google.maps.Map(document.getElementById('mapa'), {
        center: LatitudLongitud,
        zoom: 16
    });

    var marker = new google.maps.Marker({
        map: mapa,
        position: LatitudLongitud
    });
}