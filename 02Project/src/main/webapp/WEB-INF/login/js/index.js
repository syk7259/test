$('input[type="submit"]').mousedown(function(){
  $(this).css('background', '#2ecc71');
});
$('input[type="submit"]').mouseup(function(){
  $(this).css('background', '#1abc9c');
});

$('#loginform').click(function(){
	$('.login').fadeToggle('show');
	$('.register').fadeOut();
	$(this).toggleClass('green');
});

$('#RegisterForm').click(function(){
	$('.login').fadeOut();
	$('.register').fadeToggle('show');
	$(this).toggleClass('green');
});



$(document).mouseup(function (e)
{
    var container = $(".login");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container.hide();
        $('#loginform').removeClass('green');
    }
    
    $(document).mouseup(function (e)
    		{
    		    var container = $(".register");

    		    if (!container.is(e.target) // if the target of the click isn't the container...
    		        && container.has(e.target).length === 0) // ... nor a descendant of the container
    		    {
    		        container.hide();
    		        $('#RegisterForm').removeClass('green');
    		    }
});
});