$( document ).ready( function() {
  $('body').delegate('.list-group-item > a', 'click', function(e) {
    console.log("IN LOAD PINS!!");
    e.preventDefault();

    var data = $(this).data("trip-id");

    $.ajax({
        url: '/trips/' + data,
        type: "get",
        data: data,
        dataType: "json"
      }).done( function(resp) {
        for (var i = 0; i < resp.coords.length; i++) {
          myLatlng = new google.maps.LatLng(resp.coords[i].lat, resp.coords[i].lon);
          placeMarker(myLatlng, theMap);
        }
      });
  });
});


  // Click the link for a trip
  // Prevent the default action
  // Drop the correct pin and pan to that location