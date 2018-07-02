// let searchCity = $('#autocomplete').val();
let yelpBusinessSearch = 'businesses/search?location=';
let yelpURL = 'https://api.yelp.com/v3/';
let yelpHeaders = { headers: { Authorization: "Bearer qlzoMPClc_UIn2xgz5qrVbK6oOcTue-cMV4Yq2Jj0lLXQd-SZAdfeGzXu_fh_62vECy4zEi_T0ixNUpJ_aooGcYfzKiij_1Ydl3fW6j0i2r8Xf-B6NX1GPmMP8AxW3Yx" } }


function yelpDisplay(searchCity) {

  // const url = `https://api.yelp.com/v3/businesses/search?location=${searchCity}&categories=Food&sort_by=rating`
  const url = `${yelpURL}${yelpBusinessSearch}${searchCity}&categories=Food&sort_by=rating`
  console.log(`yelpurl: ${url}`)

  $.ajaxPrefilter(function (options) {
    if (options.crossDomain && $.support.cors) {
      options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
    }
  });

  // Yelp Search Business and push to DOM
  $.ajax(url, yelpHeaders )
    .then(function (response) {
      console.log('Restaurant', response)
      let business = response.businesses;
      //appends restaurants to accordion body
      for (i = 0; i < business.length; i++) {

        $('#RestaurantsAccordion').append(`<div class="card">
                  <div class="card-header" id="heading${i}">
                    <h5 class="mb-0">
                      <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse${i}" aria-expanded="true" aria-controls="collapse${i}">
                        ${business[i].name} &nbsp;|&nbsp; Rating: ${business[i].rating} &nbsp;|&nbsp;  Price: ${business[i].price}
                      </button>
                    </h5>
                  </div>
              
                  <div id="collapse${i}" class="collapse" aria-labelledby="heading${i}" data-parent="#accordion">
                    <div class="card-body">
                    <img class= resImg src=${business[i].image_url} alt= restaurant-image>
                    <ul class="list-group">
                      <li class="list-group-item">Type: ${business[i].categories[0].title}</li>
                      <li class="list-group-item">Address: ${business[i].location.display_address}</li>
                      <li class="list-group-item">Website: <a href=${business[i].url}>${business[i].url}</a></li>
                      <li class="list-group-item">Phone: ${business[i].display_phone}</li>
                      
                    </ul>
                    </div>
                  </div>
                </div>`)
      }
    });
}

function yelpBusinessIDSearch(searchCity, busName) {
  var settings = {
    // "async": true,
    // "crossDomain": true,
    "url": `https://api.yelp.com/v3/businesses/search?location=${searchCity}&term=${busName}&categories=hotels&limit=1`,
    "method": "GET",
    "headers": {
      "Authorization": "Bearer qlzoMPClc_UIn2xgz5qrVbK6oOcTue-cMV4Yq2Jj0lLXQd-SZAdfeGzXu_fh_62vECy4zEi_T0ixNUpJ_aooGcYfzKiij_1Ydl3fW6j0i2r8Xf-B6NX1GPmMP8AxW3Yx",
      "Cache-Control": "no-cache",
      // "Postman-Token": "dfb5acc5-388c-46f8-bd71-6dfb3e7a1d0d"
    }
  }
  
  $.ajax(settings).done(function (response) {
    let busID = response.businesses[0].id;
    let busImageURL = busID.image_url;
    let busCategories = busID.categories[0].title;
    let busAddress = busID.location.display_address;
    let busURL = busID.url;
    let busPhone = busID.display_phone;
    $('#hotelAccordion').append(`<div class="card">
                  <div class="card-header" id="heading${busID}">
                    <h5 class="mb-0">
                      <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse${busID}" aria-expanded="true" aria-controls="collapse${busID}">
                        ${busID.name} &nbsp;|&nbsp; Rating: ${busID.rating} &nbsp;|&nbsp;  Price: ${busID.price}
                      </button>
                    </h5>
                  </div>
              
                  <div id="collapse${busID}" class="collapse" aria-labelledby="heading${busID}" data-parent="#accordion">
                    <div class="card-body">
                    <img class= resImg src=${busImageURL} alt= restaurant-image>
                    <ul class="list-group">
                      <li class="list-group-item">Type: ${busCategories}</li>
                      <li class="list-group-item">Address: ${busAddress}</li>
                      <li class="list-group-item">Website: <a href=${busURL}>${busURL}</a></li>
                      <li class="list-group-item">Phone: ${busPhone}</li>
                      
                    </ul>
                    </div>
                  </div>
                </div>`)
    console.log('BusinessID',response.businesses[0]);
  });
}

// var settings = {
//   "async": true,
//   "crossDomain": true,
//   "url": "https://api.yelp.com/v3/businesses/search?location=La%20Mesa,%20CA,%20USA&term=casa%20la%20mesa&categories=hotels",
//   "method": "GET",
//   "headers": {
//     "Authorization": "Bearer qlzoMPClc_UIn2xgz5qrVbK6oOcTue-cMV4Yq2Jj0lLXQd-SZAdfeGzXu_fh_62vECy4zEi_T0ixNUpJ_aooGcYfzKiij_1Ydl3fW6j0i2r8Xf-B6NX1GPmMP8AxW3Yx",
//     "Cache-Control": "no-cache",
//     "Postman-Token": "f5a2a710-7f99-487f-8b60-46e1482e9e0e"
//   }
// }

// $.ajax(settings).done(function (response) {
//   console.log(response);
// });
//yelp results based on activities
//finish later
// function yelpPOI(){
//   let searchCity = $('#autocomplete').val();
//   console.log(searchCity)

//   const url = `https://api.yelp.com/v3/businesses/search?location=${searchCity}`
//   $.ajaxPrefilter(function (options) {
//     if (options.crossDomain && $.support.cors) {
//       options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
//     }
//   });

//   // Yelp Search Business and push to DOM
//   $.ajax(url, { headers: { Authorization: "Bearer qlzoMPClc_UIn2xgz5qrVbK6oOcTue-cMV4Yq2Jj0lLXQd-SZAdfeGzXu_fh_62vECy4zEi_T0ixNUpJ_aooGcYfzKiij_1Ydl3fW6j0i2r8Xf-B6NX1GPmMP8AxW3Yx" } })
//     .then(function (response) {
//       console.log(response)
//       let business = response.businesses;

//     });

// }