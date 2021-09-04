const city = document.querySelector('#weather span:first-child');
const weather = document.querySelector('#weather span:last-child');
const API_KEY = 'bb9dd35d18888d6ee5d0b92eadc50ed3';

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  fetch(url).then((response) =>
  response.json().then((data) => {
      city.innerText = `In ${data.name}`
      weather.innerText = `It's ${data.weather[0].main} now...`
      console.log(data);
    }),
    );
}
function onGeoError() {
    console.log('You got error!');
}

city.innerText = `Loading...`;
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
