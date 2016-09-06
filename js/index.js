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