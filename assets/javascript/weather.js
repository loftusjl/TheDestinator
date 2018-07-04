let dayArray = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
//weatherForcast()
function weatherForcast(searchCity) {

  var APIKey = "87231f56cfbb4322a1a44bc975de93ac";
  //api call for 5 day forecast
  var queryURL = `https://api.openweathermap.org/data/2.5/forecast?q=${searchCity}&units=imperial&appid=` + APIKey;
  //API call for current temp
  let currentTemp = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&units=imperial&appid=` + APIKey;
  //${searchCity}
  //for current temp
  $.ajax({
      url: currentTemp,
      method: "GET"
    })
    .then(function (searchResponse) {
      $('#current-temp').html(searchResponse.name + "'s" + ' Current Temp: ' + searchResponse.main.temp + " " + "<img src=http://openweathermap.org/img/w/" + searchResponse.weather[0].icon + ".png>")
      console.log(searchResponse)
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
          days: day,
          tempMax: dailyForecast[i].main.temp_max,
          tempMin: dailyForecast[i].main.temp_min,
          icon: '<img src=http://openweathermap.org/img/w/' + dailyForecast[i].weather[0].icon + '.png>'
        })
        
      }
      $(".day1").html(temperatureArray[0].days + " " + temperatureArray[0].icon + "<br>" + "Low: " + temperatureArray[0].tempMin + " " + "High: " + temperatureArray[0].tempMax);
      $(".day2").html(temperatureArray[1].days + " " + temperatureArray[1].icon + "<br>" + "Low: " + temperatureArray[1].tempMin + " " + "High: " + temperatureArray[1].tempMax);
      $(".day3").html(temperatureArray[2].days + " " + temperatureArray[2].icon + "<br>" + "Low: " + temperatureArray[2].tempMin + " " + "High: " + temperatureArray[2].tempMax);
      $(".day4").html(temperatureArray[3].days + " " + temperatureArray[3].icon + "<br>" + "Low: " + temperatureArray[3].tempMin + " " + "High: " + temperatureArray[3].tempMax);
      $(".day5").html(temperatureArray[4].days + " " + temperatureArray[4].icon + "<br>" + "Low: " + temperatureArray[4].tempMin + " " + "High: " + temperatureArray[4].tempMax);
      console.log(temperatureArray)
      //temperatureArray.filter(dayFilter(i))
      //console.log('Temperature Array', temperatureArray.filter(dayFilter(i)))

        //Math.max(temperatureArray.filter(tempMax))
        //Math.min(temperatureArray.filter(tempMin))
      
    })





}