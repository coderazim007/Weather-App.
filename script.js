const inputbox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description  = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed'); 

async function checkWeather(city){
 const api_key = "64476cc9c6941ead51bb5fec25520bb3";
 

 const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

 const weather_data = await fetch(`${url}`).then(response => response.json());

 
  
 temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;

  description.innerHTML = `${weather_data.weather[0].description}`;

  humidity.innerHTML = `${weather_data.main.humidity}%`;

  wind_speed.innerHTML =  `${weather_data.wind.speed}Km/H`;
     
     switch(weather_data.weather[0].main){

		case 'Clouds':
			weather_img.src = "/asset/cloud.png";

			break;

			case 'Clear':
			weather_img.src = "/asset/clear.png";
			break;
			
			case 'Rain':
			weather_img.src = "/asset/rain.png";
			break;

			case 'Mist':
			weather_img.src = "/asset/mist.png";
			break;


			case 'Snow':
			weather_img.src = "/asset/snow.png";
			break;

			
	 }


}

  
searchBtn.addEventListener('click', ()=>{
  checkWeather(inputbox.value);
});