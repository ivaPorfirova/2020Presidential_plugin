
/* variable still needs to be filled*/
jQuery.ajax({
  dataType: 'json',
  accepts: {
        "*": allTypes,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
    },
})

/* rought code :D */

var url=" ";
$.getJSON( url, myObj )
.done(function( json ) { ... }) /* got JSON from server */
.fail( funciton( jqxhr, textStatus, error ) {
  var err = textStatus + ", " + error;
  console.log( "Failed to obtain JSON data fromt server:" + err);
}); /* failed to get JSON*/
