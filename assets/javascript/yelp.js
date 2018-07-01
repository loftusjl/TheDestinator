function yelpDisplay() {
  let yelpSearch = $('#autocomplete').val();
  console.log(yelpSearch)


  const url = `https://api.yelp.com/v3/businesses/search?location=${yelpSearch}`
  $.ajaxPrefilter(function (options) {
    if (options.crossDomain && $.support.cors) {
      options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
    }
  });

  // Yelp Search Business and push to DOM
  $.ajax(url, { headers: { Authorization: "Bearer qlzoMPClc_UIn2xgz5qrVbK6oOcTue-cMV4Yq2Jj0lLXQd-SZAdfeGzXu_fh_62vECy4zEi_T0ixNUpJ_aooGcYfzKiij_1Ydl3fW6j0i2r8Xf-B6NX1GPmMP8AxW3Yx" } })
    .then(function (response) {
      console.log(response)
      let business = response.businesses;
      //appends restaurants to accordion body
      for (i = 0; i < business.length; i++) {

        $('#accordion').append(`<div class="card">
                  <div class="card-header" id="heading${i}">
                    <h5 class="mb-0">
                      <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse${i}" aria-expanded="true" aria-controls="collapse${i}">
                        ${business[i].name}  Rating: ${business[i].rating}  Price: ${business[i].price}
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
//yelp results based on activities
//finish later
function yelpPOI(){
  let yelpSearch = $('#autocomplete').val();
  console.log(yelpSearch)

  const url = `https://api.yelp.com/v3/businesses/search?location=${yelpSearch}`
  $.ajaxPrefilter(function (options) {
    if (options.crossDomain && $.support.cors) {
      options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
    }
  });

  // Yelp Search Business and push to DOM
  $.ajax(url, { headers: { Authorization: "Bearer qlzoMPClc_UIn2xgz5qrVbK6oOcTue-cMV4Yq2Jj0lLXQd-SZAdfeGzXu_fh_62vECy4zEi_T0ixNUpJ_aooGcYfzKiij_1Ydl3fW6j0i2r8Xf-B6NX1GPmMP8AxW3Yx" } })
    .then(function (response) {
      console.log(response)
      let business = response.businesses;

    });

}