const searchbtn = document.getElementById('searchbtn');
const inputbox = document.querySelector('.input-box');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity= document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');
const weather_body = document.querySelector('.weather-body');
const location_not_found = document.querySelector(".location-not-found");
const image = document.getElementById('bgimg')

const images = ["/assets/img1.jpg","/assets/img2.jpg","/assets/img3.jpg","/assets/img4.jpg" , "/assets/img5.jpg","/assets/img6.jpg","/assets/img7.jpg","/assets/img8.jpg"]
setInterval(() => {
    let random = Math.floor(Math.random()*8);
    // console.log(random);
    image.src = images[random];
}, 2000);
async function checkweather(city){
    image.style.display = "none";
    api_key = "10d530acd0da87ad5c8a4625826bba2a"
    url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`

    const weatherdata= await fetch(`${url}`).then(Response => Response.json());
    console.log(weatherdata);
if (weatherdata.cod === `404`) {
    location_not_found.style.display = "flex";
    weather_body.style.display = "none";
    inputbox.disabled = true;

    setInterval(() => {
        location_not_found.style.display = "none";
        image.style.display = "flex";
        inputbox.disabled = false;
        inputbox.value="";

    }, 5000);
    

    return;
    
}
    location_not_found.style.display = "none";
    image.style.display = "none";
    

    weather_body.style.display = "flex";
    temperature.innerHTML =`${Math.round(weatherdata.main.temp - 273.15)}°C` ;
    description.innerHTML=`${weatherdata.weather[0].description}`;
    humidity.innerHTML =`${weatherdata.main.humidity}%`;
    wind_speed.innerHTML =`${weatherdata.wind.speed}km/H`;

    switch(weatherdata.weather[0].main){
        case 'Smoke':
            weather_img.src = "/assets/mist.png";
            break;
        case 'Clear':
            weather_img.src = "/assets/clear.png";
            break;
        case 'Rain':
            weather_img.src = "/assets/rain.png";
            break;
        case 'Mist':
            weather_img.src = "/assets/mist.png";
            break;
        case 'Snow':
            weather_img.src = "/assets/snow.png";
            break;
        case 'Fog':
            weather_img.src = "/assets/mist.png";
            break;
    }
}



searchbtn.addEventListener('click' , ()=>{
   checkweather(inputbox.value);
})
