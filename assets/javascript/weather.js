let day = 0
var APIKey = "87231f56cfbb4322a1a44bc975de93ac";
var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=Escondido&units=imperial&appid=" + APIKey;

$.ajax({
    url: queryURL,
    method: "GET"
  })
  .then(function(response) {

      let hour = moment(response.list[i].dt_txt).format('HH:mm')
      
      for (var i = 0; i < hour.length; i++) {
      if (hour === 00) {
        day++
      } else {
        $(".city").html("<h1>" + response.city.name + " Weather Details</h1>");
        $(".icon").html('<img src=http://openweathermap.org/img/w/' + response.list[i].weather[0].icon + '.png>');
        $(".weather").text("Forecast: " + response.list[i].weather[0].main);
        $(".humidity").text("Humidity: " + response.list[i].main.humidity);
        $(".temp").text("Temperature (F) " + response.list[i].main.temp);
      }
    console.log(response);

  }
  
});