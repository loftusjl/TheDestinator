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

$('form').submit(function(event) {
    event.preventDefault()
    loadingOn().show()
    let photoReference = ''; // this is obtained from the main places search
    locQuery = 'query=' + $('#location').val();
    queryURL = baseURL + locQuery + keyAPI; // First places request based on search textbox
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        loadingOff().hide()
        //console.log(response.results);
        //creating a varible to store response results prefix
        let results = response.results;
        photoReference = '&photoreference=' + response.results[0].photos[0].photo_reference;
        //console.log(`Photo URL for AJAX: ${photoURL + photoMaxWidth + photoReference + keyAPI}`);
        if (response.results[0].photos.length > 0) {
            $('#photoDIV').append(`<img src="${photoURL + photoMaxWidth + photoReference + keyAPI}">`)
        } else {
            //console.log(`No photos to show`)
        }

    })
})
//function for displaying name of location user searched place in event listener
function placeName () {
    //can change naming convention later and jquery selector later
    let setting = $('#autocomplete').val();
    //displaing val inside display location
    $('#location').text(setting)
}

//function for displaying attraction names
function attracDisplay () {
    let $p = $('<p>');

    //displaying pictures, Jesse already coded just going to copy paste WIP

    //displaying name of place
    let title = $p.text(results.name);
    //displaying address under photo
    let address = $p.text(results.formatted_address);
    //displaying phone number (if available)
    let phoneNumber = $p.text(results.formatted_phone_number);
    //displays rating
    let rating = $p.text(results.rating);
    //price level for user to see
    let price = $p.text(results.price_level);
    //printing all into info section not yet defined
    // $('.something').append(`${title}${address}${phoneNumber}${rating}${price}`);

}

// start progress bar
function loadingOn() {
    document.getElementById("loading").style.display = "block";
}

function loadingOff() {
    document.getElementById("loading").style.display = "none";
}
// end progress bar