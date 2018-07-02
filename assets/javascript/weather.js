function weatherForcast() {

let weatherSearch = $('#autocomplete').val();


var APIKey = "87231f56cfbb4322a1a44bc975de93ac";
var queryURL = `https://api.openweathermap.org/data/2.5/forecast?q=${weatherSearch}&units=imperial&appid=` + APIKey;


$.ajax({
    url: queryURL,
    method: "GET"
  })
  .then(function(weatherForecast) {
    let city = weatherForecast.city.name;
    let dailyForecast = weatherForecast.list;
    console.log(city)
    console.log('here is the array ', dailyForecast)
    for (i = 0; i < dailyForecast.length; i++) {
        let temp = dailyForecast[i].main.temp
        let wind = dailyForecast[i].wind.speed
        let humidity = dailyForecast[i].main.humidity
        let day = dailyForecast[i].dt_txt
        console.log(temp, wind, humidity)
     
        $(".day1").text("Forecast: " + day + " " + temp + " " + humidity + " " + wind);
        $(".day2").text("Forecast: " + day + " " + temp + " " + humidity + " " + wind);
        $(".day3").text("Forecast: " + day + " " + temp + " " + humidity + " " + wind);
        $(".day4").text("Forecast: " + day + " " + temp + " " + humidity + " " + wind);
        $(".day5").text("Forecast: " + day + " " + temp + " " + humidity + " " + wind);
    }
  })

  
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
  
}


