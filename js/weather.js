const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY= "889601d91980a0dead4237d7f58399a1";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    //lat,lon,api
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        city.innerText =data.name;
        weather.innerText = `天気は"${data.weather[0].main}"__気温は"${data.main.temp}"度__湿度は"${data.main.humidity}"`;
    });
}
function onGeoError() {
    alert("位置情報サービス/オフ")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);



  