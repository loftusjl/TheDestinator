let yelpBusinessSearch = 'businesses/search?';
let yelpURL = 'https://api.yelp.com/v3/';
let yelpHeaders = { headers: { Authorization: "Bearer qlzoMPClc_UIn2xgz5qrVbK6oOcTue-cMV4Yq2Jj0lLXQd-SZAdfeGzXu_fh_62vECy4zEi_T0ixNUpJ_aooGcYfzKiij_1Ydl3fW6j0i2r8Xf-B6NX1GPmMP8AxW3Yx", "Access-Control-Allow-Origin": "*","Access-Control-Allow-Methods":"GET,PUT,POST,DELETE", "Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept" },  }


function yelpDisplay(mylat, mylng) {

  // const url = `https://api.yelp.com/v3/businesses/search?location=${searchCity}&categories=Food&sort_by=rating`
  const url = `${yelpURL}${yelpBusinessSearch}categories=Food&&latitude=${mylat}&longitude=${mylng}&sort_by=rating&limit=15`
  //console.log(`yelpurl: ${url}`)

  $.ajaxPrefilter(function (options) {
    if (options.crossDomain && $.support.cors) {
      options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
    }
  });

  // Yelp Search Business and push to DOM
  $.ajax(url, yelpHeaders )
    .then(function (response) {
      $('#RestaurantsAccordion').empty();
      //console.log('Restaurant', response)
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

// Match google places result with yelp lookup
function yelpBusinessIDSearch(mylat, mylng) {
  $('#hotelAccordion').empty();
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": `https://api.yelp.com/v3/businesses/search?term=hotels&latitude=${mylat}&longitude=${mylng}&sort_by=rating&limit=15`,
    "method": "GET",
    "headers": {
      "Authorization": "Bearer qlzoMPClc_UIn2xgz5qrVbK6oOcTue-cMV4Yq2Jj0lLXQd-SZAdfeGzXu_fh_62vECy4zEi_T0ixNUpJ_aooGcYfzKiij_1Ydl3fW6j0i2r8Xf-B6NX1GPmMP8AxW3Yx",
      "Cache-Control": "no-cache",
      "Postman-Token": "86622e64-5c93-40fa-bd2e-21aef202b050"
    }
  }
  
  $.ajax(settings).done(function (response) {
    let results = response.businesses[0];
   
    if (typeof results != 'undefined') {
      let busID = results.id;
      let busName = results.name;
      let busImageURL = results.image_url;
      let busAddress = results.location.display_address;
      let busURL = results.url;
      let busPhone = results.display_phone;
      let busRating = results.rating;
      let busPrice = results.price;
     
      if (typeof busPrice == 'undefined') { busPrice = 'Not Listed'}
      $('#hotelAccordion').append(`<div class="card">
                    <div class="card-header" id="heading${busID}">
                      <h5 class="mb-0">
                        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse${busID}" aria-expanded="true" aria-controls="collapse${busID}">
                          ${busName} &nbsp;|&nbsp; Rating: ${busRating} &nbsp;|&nbsp;  Price: ${busPrice}
                        </button>
                      </h5>
                    </div>
                
                    <div id="collapse${busID}" class="collapse" aria-labelledby="heading${busID}" data-parent="#hotelAccordion">
                      <div class="card-body">
                      <img class= resImg src=${busImageURL} alt= restaurant-image>
                      <ul class="list-group">
                        <li class="list-group-item">Address: ${busAddress}</li>
                        <li class="list-group-item">Website: <a href=${busURL}>${busURL}</a></li>
                        <li class="list-group-item">Phone: ${busPhone}</li>
                        
                      </ul>
                      </div>
                    </div>
                  </div>`)
    }
    
  });
}

function addResult(result) {

  yelpBusinessIDSearch(searchCity, result.name)

}


// Add function to append point of interests options accordion here
