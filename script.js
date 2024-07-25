const button = document.getElementById('search-button');
const input = document.getElementById('city-input');
const cityname = document.getElementById('city-name');
const citytime = document.getElementById('city-time');
const citytemp = document.getElementById('city-temp');

async function getData(cityname) {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=4d9383adf5e9433b8fa44520242507&q=${cityname}&aqi=no`);
    return await response.json();
}

button.addEventListener('click', async () => {
    const value = input.value;
    const result = await getData(value);
    cityname.innerText = `${result.location.name}, ${result.location.region}, ${result.location.country}`;
    citytime.innerText = result.location.localtime;
    citytemp.innerText = `${result.current.temp_c}°C`;
});


