function weatherForcast() {

let weatherSearch = $('#autocomplete').val();
const CURRENT_LOCATION = document.getElementsByClassName('weather-content__overview')[0];
const CURRENT_TEMP = document.getElementsByClassName('weather-content__temp')[0];
const FORECAST = document.getElementsByClassName('component__forecast-box')[0];

var APIKey = "87231f56cfbb4322a1a44bc975de93ac";
var queryURL = `https://api.openweathermap.org/data/2.5/forecast?q=${weatherSearch}&units=imperial&appid=` + APIKey;


$.ajax({
    url: queryURL,
    method: "GET"
  })
  .then(function(weatherForecast) {
    let city = weatherForecast.city.name;
    let dailyForecast = weatherForecast.list;
  
    renderData(city, dailyForecast);
  })

  renderData = (location, forecast) => {
    console.log(forecast)
    const currentWeather = forecast[0].weather[0];
    const widgetHeader =`<h1>${location}</h1><small>${currentWeather.description}</small>`;
    CURRENT_TEMP.innerHTML =`'<img class="wi" src=http://openweathermap.org/img/w/'${currentWeather.icon}'.png'></i>
    ${Math.round(forecast[0].temp.day)} <i class="wi wi-degrees"></i>`;
    
    CURRENT_LOCATION.innerHTML = widgetHeader;
    
        // render each daily forecast
        forecast.forEach(day => {
          let date = new Date(day.dt * 1000);
          let days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
          let name = days[date.getDay()];
          let dayBlock = document.createElement("div");
          dayBlock.className = 'forecast__item';
          dayBlock.innerHTML =
            `<div class="forecast-item__heading">${name}</div>
            <div class="forecast-item__info">
            <img class="wi" src=http://openweathermap.org/img/w/${day.weather[0].icon}'.png'></i>
            <span class="degrees">${Math.round(day.temp.day)}
            <i class="wi wi-degrees"></i></span></div>`;
          FORECAST.appendChild(dayBlock);
        });
    //   let hour = moment(response.list[i].dt_txt).format('HH:mm')
      
    //   for (var i = 0; i < hour.length; i++) {
    //   if (hour === 00) {
    //     day++
    //   } else {
        // $(".city").html("<h1>" + response.city.name + " Weather Details</h1>");
        // $(".icon").html('<img src=http://openweathermap.org/img/w/' + response.list[i].weather[0].icon + '.png>');
        // $(".weather").text("Forecast: " + response.list[i].weather[0].main);
        // $(".humidity").text("Humidity: " + response.list[i].main.humidity);
        // $(".temp").text("Temperature (F) " + response.list[i].main.temp);
     // }
    

 // }
  
};
}

