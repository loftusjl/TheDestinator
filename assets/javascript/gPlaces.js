let baseURL = 'https://maps.googleapis.com/maps/api/place/textsearch/json?';
let keyAPI = '&key=AIzaSyAtAoE-_wQqtKgBC2vDZ_l4Y0qnpzBaMfw';
let locQuery = 'query=';
let photoMaxWidth = 'maxwidth=400';
let photoURL = 'https://maps.googleapis.com/maps/api/place/photo?'
let photoReference = '&photoreference=';

let queryURL = baseURL + keyAPI;
$( document ).ready(function() {
    $.ajax({
        url: queryURL,
        method: "GET"
      })
      .then(function(response) {
          console.log(response);
      });
})

$('#submitSearch').on('click', function(event) {
    event.preventDefault()
    locQuery += $('#location').val();
    queryURL = baseURL + locQuery + keyAPI;
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response.results);
        photoReference += response.results[0].photos[0].photo_reference;
        
    })
    $.ajax({
        url: photoURL + photoMaxWidth + photoReference,
        method: "GET"
    }).then(function(photo){
        console.log(photo);
    })
})
