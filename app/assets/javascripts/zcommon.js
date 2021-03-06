$(document).ready(function(){	
  $(function(){
    $.FancyNotifications();
});

// $.FancyNotifications.error("This is an error message.");
// $.FancyNotifications.alert("This is an alert message.");
$.FancyNotifications.notice("This is a notice message.");

  

  
  $(".website-settings-group").click(function(){
    $(this).toggleClass('active');
  });
  
  $(".chat-count").effect("bounce", { times: 5 }, 100);

  $(".ui-checkbox-container").click(function(){
    // console.log(this)
    // console.log($(this).find('input[type="checkbox"]').is(":checked"))

    if($(this).find('input[type="checkbox"]').is(':checked')){
      $(this).find('.ui-checked').remove();
      $(this).find('input[type="checkbox"]').prop('checked', false);
      $(this).removeClass('active');
    } else{
        $(this).addClass('active');
        $(this).append('<div class="ui-checked"></div>');
        $(this).find('input[type="checkbox"]').prop('checked', true);
    }

  });

  $("#pidginLink").click(function(){
    $("#pidginSection").slideToggle('fast');
  });
  $("#gtalkLink").click(function(){
    $("#gtalkSection").slideToggle('fast');
  });
  $("#adiumLink").click(function(){
    $("#adiumSection").slideToggle('fast');
  });

  $("#feedBackBtn").click(function(){
    $("#feedbackModal").removeClass('hide');
    $(".modal-backdrop").removeClass('hide');
  });


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

  $("#sendToEmailBtn").click(function(){
    $(".modal-chat-view").addClass('hide');
    $("#forwardToEmailModal").removeClass('hide');
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
$(".dropdown-tab.websites").click(function(){
  $(".dropdown-tab .dropdown-menu").toggle();
});
$(".date-selector .dropdown-tab").click(function(){
  $('.date-selector .dropdown-tab').removeClass('active');
  $(this).addClass('active');
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

  // TOUR ANIMATION


  setTimeout(function(){
    $(".modal-backdrop.white").fadeIn();
    setTimeout(function(){
      $(".tour-intro").fadeIn(300);

      $(".tour-intro .action").click(function(){
        $(".tour-intro").fadeOut(300);
        $(".tour-status").fadeIn(300);
      });
      $(".tour-status .action").click(function(){
        $("#firstNav").addClass('selected');
        $("#firstNav").next().slideDown('fast');
        $("#dashboardNav").removeClass('selected');
        $(".tour-status").fadeOut(300);
        $(".tour-websites").fadeIn(300);
      });
      $(".tour-websites .action").click(function(){
        $(".tour-websites").fadeOut(300);
        $(".tour-chats").fadeIn(300);
      });
      $(".tour-chats .action").click(function(){
        $(".tour-chats").fadeOut(300);
        $(".tour-chat-settings").fadeIn(300);
      });
      
      $(".tour-chat-settings .action").click(function(){
        $(".tour-chat-settings").fadeOut(300);
        $(".tour-widget-settings").fadeIn(300);
      });

      $(".tour-widget-settings .action").click(function(){
        $(".tour-widget-settings").fadeOut(300);
        $(".tour-chat-home").fadeIn(300);
        $(".dashboard-dropdown").addClass('active');
      });



      $(".tour-chat-home .action").click(function(){
        $(".tour-chat-home").fadeOut(300);
        $(".tour-notifications").fadeIn(300);        
        $(".dashboard-dropdown").removeClass('active');
      });

      $(".tour-notifications .action").click(function(){

        $(".tour-notifications").fadeOut(300);
        $(".tour-end").fadeIn(300);
        $(".modal-backdrop").show();
      });

      $(".tour-end .action").click(function(){
        $(".tour-end").fadeOut(300);
        $(".modal-backdrop").fadeOut(300);
      });
    },1000)
  }, 1000)

  setTimeout(function(){
    $("#dashboardGuide").slideDown('fast');
  },2000)

  $("#skipTour").click(function(){
    $(".tooltip-tour, .modal-backdrop.white").remove();
  });
  

  

   $(".dial").knob({
        'min':0,
        'max':10,
        'width': 170,
        'fgColor': '#56b6f9',
        'bgColor': '#c7dceb',
        'thickness': .35,
        'readOnly': true
  });  
     

      $("#dateRange").dateRange({
        
        rangePicker : true,        
      });        

     
$("#minimize").click(function(){
  console.log('minimize');
 $(".widget-1 .offerchat-widget-wrapper").css('top','400px');
});
          
$(".notification-button").click(function(){
    $(this).toggleClass('active');
    $(".notification-list-container").toggleClass('hide');
    
  });



var thumb = $('img#thumb'); 

  new AjaxUpload('bannerUpload', {
    action: $('form#bannerUploadForm').attr('action'),
    name: 'image',
    onSubmit: function(file, extension) {
      $('div.preview').addClass('loading');
    },
    onComplete: function(file, response) {
      thumb.load(function(){
        $('div.preview').removeClass('loading');
        thumb.unbind();
      });
      thumb.attr('src', response);
    }
  });


});


                                        

        