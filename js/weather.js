function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log("住んでいる所", lat, lng);
    
}
function onGeoError() {
    alert("位置情報サービス/オフ")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);