const API_KEY = "b07ca05b105c0c0962c0ea9df479393f";


function onGeoOk(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
    fetch(url).then((response) => response.json()).then((data) => {
        const name = data.name;
        const weather = data.weather[0].main;
        const temperture = data.main.temp;
        showWeatherIcon(weather);
        showLocation(name);
        showTemperture(temperture);
    });
}

function onGeoError() {
    alert("Can't find you. No weather for you.")
}

function showWeatherIcon(weather) {
    document.querySelector(".header__weather span").innerText = weather;
}

function showTemperture(temp) {
    document.querySelector(".header__weather span:last-child").innerText = temp;
}

function showLocation(location) {
    document.querySelector(".header__location span").innerText = location;
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
