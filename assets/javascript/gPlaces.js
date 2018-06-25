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
        //   console.log(response);
      });
})

$('form').submit(function(event) {
    event.preventDefault()
    locQuery += $('#location').val();
    queryURL = baseURL + locQuery + keyAPI;
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response.results);
        photoReference += response.results[0].photos[0].photo_reference;
        console.log(`PhotoReference: ${photoReference}`)
        console.log(`Photo URL for AJAX: ${photoURL + photoMaxWidth + photoReference + keyAPI}`)
    }).then(function() {
        $('#photoDIV').append(`<img src="${photoURL + photoMaxWidth + photoReference + keyAPI}>`)
        
    })
})
