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
    let photoReference = ''; // this is obtained from the main places search
    locQuery = 'query=' + $('#location').val();
    queryURL = baseURL + locQuery + keyAPI; // First places request based on search textbox
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response.results);
        //creating a varible to store response results prefix
        let results = response.results;
        photoReference = '&photoreference=' + response.results[0].photos[0].photo_reference;
        console.log(`Photo URL for AJAX: ${photoURL + photoMaxWidth + photoReference + keyAPI}`);
        if (response.results[0].photos.length > 0) {
            $('#photoDIV').append(`<img src="${photoURL + photoMaxWidth + photoReference + keyAPI}">`)
        } else {
            console.log(`No photos to show`)
        }

    })
})

//function for displaying attraction names
function attracDisplay () {


    //displaying pictures, Jesse already coded just going to copy paste WIP

    //displaying address under photo
    let $p = $('<p>');
    let address = $p.text(results.formatted_address);
    //displaying phone number (if available)
    let phoneNumber = $p.text(results.formatted_phone_number);
    //

}