$(document).ready(function(){	
	$(".scrollable").mCustomScrollbar({
		autoDraggerLength: true,
		advanced: {
            updateOnBrowserResize: true,
            updateOnContentResize: false
        }
	});
  $(".scrollable-responses").mCustomScrollbar({
    autoDraggerLength: true,
    advanced: {
            updateOnBrowserResize: true,
            updateOnContentResize: false
        }
  }); 
  $(".user-profile").click(function(){
    $(".user-settings").slideToggle('fast');
  });
  

    $(".chat-area input[type=text]").focus();
    $(".chat-area").addClass('active');
  

  $(".chat-group").hover(function(){
    $(this).find('.chat-options').removeClass('hide');
  }, function(){
      $(this).find('.chat-options').addClass('hide');
  });
	
});