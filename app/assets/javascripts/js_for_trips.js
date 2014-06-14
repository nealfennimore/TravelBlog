$( document ).ready( function() {
  $("#new_trip").on("submit", function(e) {
    e.preventDefault();

    var data = $(this).serialize();

    $.ajax({
      url: '/trips',
      type: "post",
      data: data,
      dataType: "json"})
      .done( function(resp) {
        $("#side").append("SUCCESS!");
    });
  });
});

















