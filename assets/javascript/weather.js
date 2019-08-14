//weatherForcast()
function weatherForcast(searchCity) {
	var APIKey = '87231f56cfbb4322a1a44bc975de93ac';
	//api call for 5 day forecast
	var queryURL = `https://api.openweathermap.org/data/2.5/forecast?q=${searchCity}&units=imperial&appid=${APIKey}`;
	//API call for current temp
	let currentTemp = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&units=imperial&appid=${APIKey}`;

	//for current temp
	$.ajax({
		url: currentTemp,
		method: 'GET',
	}).then(function(searchResponse) {
		curr = searchResponse.main.temp;
		currIcon = searchResponse.weather[0].icon;
		$('#current-temp').html(
			`${searchResponse.name}'s Current Temp: ${
				searchResponse.main.temp
			} <img src=http://openweathermap.org/img/w/${
				searchResponse.weather[0].icon
			}.png>`
		);
	});
	//for 5 day forecast
	$.ajax({
		url: queryURL,
		method: 'GET',
	}).then(function(forecast) {
		let dailyForecast = forecast.list;
		let days = [
			{
				data: [],
				time: moment()
					.add(1, 'days')
					.format('YYYY-MM-DD'),
			},
			{
				data: [],
				time: moment()
					.add(2, 'days')
					.format('YYYY-MM-DD'),
			},
			{
				data: [],
				time: moment()
					.add(3, 'days')
					.format('YYYY-MM-DD'),
			},
			{
				data: [],
				time: moment()
					.add(4, 'days')
					.format('YYYY-MM-DD'),
			},
			{
				data: [],
				time: moment()
					.add(5, 'days')
					.format('YYYY-MM-DD'),
			},
		];

		// Break days up into 24hrs
		dailyForecast.map(x => {
			let curDate = x.dt_txt;
			let matchDate = curDate.substr(0, curDate.indexOf(' '));
			days.map(y => {
				if (matchDate === y.time) {
					y.data.push(x);
				}
			});
		});

		function getHighLow(temp) {
			let tempArr = {
				temp_low: 1000,
				temp_high: 0,
				high_icon: '',
				low_icon: '',
			};
			temp.data.map(x => {
				if (x.main.temp_max > tempArr.temp_high) {
					tempArr.temp_high = x.main.temp_max;
					tempArr.high_icon = `<img src=http://openweathermap.org/img/w/${
						x.weather[0].icon
					}.png>`;
				}
				if (x.main.temp_min < tempArr.temp_low) {
					tempArr.temp_low = x.main.temp_min;
					tempArr.low_icon = `<img src=http://openweathermap.org/img/w/${
						x.weather[0].icon
					}.png>`;
				}
			});
			return tempArr;
		}

		function display(data) {
			$('.temp').empty();
			data.map(newDiv => {
				$('.temp').append(
					`<div class="card-body days col">
          <div class='day1 arvo'>
          ${moment(newDiv.time).format('ddd')} ${
						getHighLow(newDiv).high_icon
					} Low: ${getHighLow(newDiv).temp_low} High: ${
						getHighLow(newDiv).temp_high
					}
          </div>
          </div>`
				);
			});
		}

		display(days);
	});
}
