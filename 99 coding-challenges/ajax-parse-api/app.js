 /* == Don't worry about this code, it will ensure     ==
    == that your ajax calls are allowed by the browser == */

$.ajaxPrefilter(function(settings, _, jqXHR) {
  jqXHR.setRequestHeader("X-Parse-Application-Id", "R1nkYjZtlvFTHlzY1u7nSBeTfD7F6GAb2hkniEL9");
  jqXHR.setRequestHeader("X-Parse-REST-API-Key", "ooaqHz9PpiASHuOvVBeI7f4aZmE7moLcdrpCxSxU");
});

/* ========================================================= */

// use this as your AJAX url
var url = 'https://api.parse.com/1/classes/tweets';

var tweet = {
  username: "illy",     // feel free to change this
  text: "Namo Amitofo"  // and this
};

// Write your GET request here

var get = function() {

};

// Write your POST request here

var post = function() {
 
};


// Invoke your code here
