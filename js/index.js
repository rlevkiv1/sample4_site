// contact form
$(function() {
    $('#btn-send').click(sendForm);
});
function sendForm(e) {
    e.preventDefault();
    $.ajax({
        url: "https://formspree.io/rostyklevkiv@gmail.com",
        method: "POST",
        data: {
            name: $('#name').val(),
            email: $('#email').val(),
            message: $('#message').val(),
        },
        dataType: "json",
        success: function() {
            $('#thanks').html('Thank you to contacting me!')
        }
    });
};

// skills
jQuery(document).ready(function(){
	jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},1000);
	});
});

// google map
function initMap() {
  var myLatLng = {lat: 49.815, lng: 23.998};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 7,
    center: myLatLng
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'My location!'
  });
}
