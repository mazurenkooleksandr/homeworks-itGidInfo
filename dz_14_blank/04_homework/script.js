// task 1 --------------------

let nameCities = {
    7735220: 'Kangqiao',
    7735222: 'Sujiazhuang',
    7735235: 'Xindong',
    3638264: 'La Cruz de Taratara',
    3638075: 'La Esmeralda',
    3638497: 'Chameta',
};


function createOption () {
    for(let key in nameCities) {
        let option = new Option (nameCities[key], key);
        document.querySelector('select').appendChild(option);
    }
}
createOption();


function getWeather() {
    let opt = document.getElementById('select-city');
    let value = opt.options[opt.selectedIndex].value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?id=${value}&appid=41a3c036f496bacf57632c46c5e3b68e`)
    
    .then(function (resp) { return resp.json() })
    .then(function (data) {
        console.log(data);
        document.querySelector('.name-city').textContent = data.name;
        document.querySelector('.temperature').innerHTML = Math.round(data.main.temp - 273) + "&deg;";
        document.querySelector('.text').textContent = data.weather[0]['description'];
        document.querySelector('.weather-icons').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png" width="50px">`
    });
}
document.querySelector('#select-city').onchange = getWeather;