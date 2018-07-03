let dayArray = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun']
function weatherForcast(searchCity) {

  var APIKey = "87231f56cfbb4322a1a44bc975de93ac";
  var queryURL = `https://api.openweathermap.org/data/2.5/forecast?q=${searchCity}&units=imperial&appid=` + APIKey;


  $.ajax({
      url: queryURL,
      method: "GET"
    })
    .then(function (weatherForecast) {
      let city = weatherForecast.city.name;
      let dailyForecast = weatherForecast.list;
      //console.log(city)
      //console.log('here is the array ', dailyForecast)

      let temperatureArray = []
      
      for (i = 0; i < dailyForecast.length; i++) {
        let day = moment(dailyForecast[i].dt_txt).format('ddd')
        let hour = moment(dailyForecast[i].dt_txt).format('HH')
        temperatureArray.push({
          day: day,
          tempMax: dailyForecast[i].main.temp_max,
          tempMin: dailyForecast[i].main.temp_min
        })
        
        let temp = dailyForecast[i].main.temp
        let wind = dailyForecast[i].wind.speed
        let humidity = dailyForecast[i].main.humidity
        let icon = $('.day1').html('<img src=http://openweathermap.org/img/w/' + dailyForecast[0].weather[0].icon + '.png>')
        
        
          //console.log(temp, wind, humidity)
          //console.log(hour)
          $(".day1").text(day + " " + icon + " " + temp + " " + humidity + " " + wind);
          $(".day2").text(day + " " + icon + " " + temp + " " + humidity + " " + wind);
          $(".day3").text(day + " " + icon + " " + temp + " " + humidity + " " + wind);
          $(".day4").text(day + " " + icon + " " + temp + " " + humidity + " " + wind);
          $(".day5").text(day + " " + icon + " " + temp + " " + humidity + " " + wind);
        }
         //temperatureArray.filter(dayFilter(i))
         //console.log('Temperature Array', temperatureArray.filter(dayFilter(i)))
      //console.log(temperatureArray)
      for (d = 0; d < dayArray.length; d++) {
      //Math.max(temperatureArray.filter(tempMax))
      //Math.min(temperatureArray.filter(tempMin))
      //console.log(Math.max(temperatureArray.filter(tempMax)))
    }
    })





}