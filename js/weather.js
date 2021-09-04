const city = document.querySelector('#weather span:first-child');
const weather = document.querySelector('#weather span:last-child');
const API_KEY = 'bb9dd35d18888d6ee5d0b92eadc50ed3';

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  fetch(url).then((response) =>
    response.json().then((data) => {
      city.innerText = `${data.name}`
      weather.innerText = `${data.weather[0].main}`
      console.log(data);
    }),
  );
}
function onGeoError() {
  console.log('You got error!');
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
