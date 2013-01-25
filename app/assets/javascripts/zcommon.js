$(document).ready(function(){	
  $(function(){
    $.FancyNotifications();
});
// $.FancyNotifications.error("This is an error message.");
// $.FancyNotifications.alert("This is an alert message.");
$.FancyNotifications.notice("This is a notice message.");
  
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

  $("#chatHistoryCell").click(function(){
    $('.modal-chat-view').removeClass('hide');
    $(".modal-backdrop").removeClass('hide');
  });

  $(".user-profile").click(function(){
    $(".user-settings").slideToggle('fast');
  });
  
  $(".btn-selector .btn").click(function(){
    $(this).toggleClass('active')
  });

$("#selectAllAgents").click(function(){
  $('.btn-selector .btn').addClass('active');
});
$("#clearAllAgents").click(function(){
  $('.btn-selector .btn').removeClass('active');
});

    $(".chat-area input[type=text]").focus();
    $(".chat-area").addClass('active');
  
$("#addResponseBtn").click(function(){
  $("#addResponseModal").removeClass('hide');
  $(".modal-backdrop").removeClass('hide');
});

$("#resetPasswordBtn").click(function(){
  $("#resetPasswordModal").removeClass('hide');
  $(".modal-backdrop").removeClass('hide');
});

$("#transferChatBtn").click(function(){
  $("#transferChatModal").removeClass('hide');
  $(".modal-backdrop").removeClass('hide');
});
$("#addTriggerBtn").click(function(){
  $("#addTriggerModal").removeClass('hide');
  $(".modal-backdrop").removeClass('hide');
});
$("#sendDeveloperBtn").click(function(){
  $("#sendDeveloperModal").removeClass('hide');
  $(".modal-backdrop").removeClass('hide');
});
$(".close").click(function(){
  $(".modal,.modal-backdrop").addClass('hide');
});
$("button.close-dark").click(function(){
  $(".modal,.modal-backdrop").addClass('hide');
})
$("#closeChat").click(function(){
  $(".dialog-box,.modal-backdrop").removeClass('hide');
});
    
$(function(){
  $('#more-info').click(function() {
    console.log($('.visitor-more-info').is(':visible'));

  if($('.visitor-more-info').is(':visible') == true ) {
    $(this).text("more info");
    console.log(this);
  }
  else {
    $(this).text("hide info");
  }
  $(".visitor-more-info").slideToggle('fast');

});
});
$("#closeChat").click(function(){
  $(".dialog-box").removeClass(".hide");
});
$(".dropdown-group > .btn").click(function(){
  $(".dropdown-menu").toggle();
});

$('.table-head-collapsible').click(function(){
    $(this).next().toggle('fast');
    if($('.btn.rounded > span', this).attr('class') == 'maximize'){
      $('.btn.rounded > span', this).removeClass('maximize');
      $('.btn.rounded > span', this).addClass('minimize');
    } else{
        $('.btn.rounded > span', this).removeClass('minimize');
        $('.btn.rounded > span', this).addClass('maximize');
    }
  });
  
$("#widgetCode").click(function() {
   $(this).select();
});

  $(".chat-group").hover(function(){
    $(this).find('.chat-options').removeClass('hide');
  }, function(){
      $(this).find('.chat-options').addClass('hide');
  });

  $(".swatch-selector a").click(function(){
    $(".swatch-selector a").removeClass('selected');
    $(this).addClass('selected');
  });
	
});

