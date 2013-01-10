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
  
$("#addResponseBtn").click(function(){
  $("#addResponseModal").removeClass('hide');
  $(".modal-backdrop").removeClass('hide');
});
$(".close").click(function(){
  $(".modal,.modal-backdrop").addClass('hide');
});
    
$(function(){
  $('#more-info').click(function() {
    $(".visitor-more-info").slideToggle('fast');
  if($(this).val() == "more info") {
    $(this).html("less info");
    $(this).val('less info');

  }
  else {
    $(this).html("more info");
    $(this).val("more info");
  }

});
});

$('.table-head-collapsible').click(function(){
    $(this).next().toggle('fast');
    // console.log(this.)
  });
  

  $(".chat-group").hover(function(){
    $(this).find('.chat-options').removeClass('hide');
  }, function(){
      $(this).find('.chat-options').addClass('hide');
  });
	
});