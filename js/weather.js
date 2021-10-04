const API_KEY = "b07ca05b105c0c0962c0ea9df479393f";


function onGeoOk(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
    console.log(url);
}

function onGeoError() {
    alert("Can't find you. No weather for you.")
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
