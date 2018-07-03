let dayArray = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

function weatherForcast(searchCity) {

  var APIKey = "87231f56cfbb4322a1a44bc975de93ac";
  //api call for 5 day forecast
  var queryURL = `https://api.openweathermap.org/data/2.5/forecast?q=${searchCity}&units=imperial&appid=` + APIKey;
  //API call for current temp
  let currentTemp = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&units=imperial&appid=` + APIKey;

  //for current temp
  $.ajax({
      url: currentTemp,
      method: "GET"
    })
    .then(function (searchResponse) {
      $('#current-temp').text(searchResponse.name + "'s" + ' Current Temp: ' + searchResponse.main.temp)
    })

  //for 5 day forecast
  $.ajax({
      url: queryURL,
      method: "GET"
    })
    .then(function (weatherForecast) {
      let dailyForecast = weatherForecast.list;
      let temperatureArray = []
  
      for (i = 0; i < dailyForecast.length; i+=8) {
        let day = moment(dailyForecast[i].dt_txt).format('ddd')
        let hour = moment(dailyForecast[i].dt_txt).format('HH')
        temperatureArray.push({
          dt: dailyForecast[i].dt,
          dt: dailyForecast[i].dt_txt,
          day: day,
          tempMax: dailyForecast[i].main.temp_max,
          tempMin: dailyForecast[i].main.temp_min,
          icon: dailyForecast[i].weather[0].icon
        })
        let temp = dailyForecast[i].main.temp
        let wind = dailyForecast[i].wind.speed
        let humidity = dailyForecast[i].main.humidity
        let icon = '<img src=http://openweathermap.org/img/w/' + dailyForecast[i].weather[0].icon + '.png>'

        //console.log(temp, wind, humidity)
        //console.log(hour)
        $(".day1").html(day + " " + icon + " " + temp + " " + humidity + " " + wind);
        $(".day2").html(day + " " + icon + " " + temp + " " + humidity + " " + wind);
        $(".day3").html(day + " " + icon + " " + temp + " " + humidity + " " + wind);
        $(".day4").html(day + " " + icon + " " + temp + " " + humidity + " " + wind);
        $(".day5").html(day + " " + icon + " " + temp + " " + humidity + " " + wind);
      }
      //temperatureArray.filter(dayFilter(i))
      //console.log('Temperature Array', temperatureArray.filter(dayFilter(i)))
      console.log(temperatureArray)

        //Math.max(temperatureArray.filter(tempMax))
        //Math.min(temperatureArray.filter(tempMin))
      
    })





}