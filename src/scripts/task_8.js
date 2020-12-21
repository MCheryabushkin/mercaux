function initMap() {
      
    const map = new google.maps.Map(document.getElementById('map'), {
        center: new google.maps.LatLng(55.76359, 37.56760),
        zoom: 16
    });

    const marker = new google.maps.Marker({
        position: new google.maps.LatLng(55.76359, 37.56760),
        map: map,
        animation: google.maps.Animation.BOUNCE
    });
}
