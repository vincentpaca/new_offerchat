// =======================================================================
// Fancy jQuery Notifications
//
// Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php
//
//
// Requires: jquery
//
// Author: Michael Luckeneder (https://github.com/mluckeneder)
//
//
// =======================================================================

(function( $ ){
  var $closeTimeout;

  

  var setupNotificationBehavior = function(){
	$(".flash").click(function(){
		$.FancyNotifications.close();
		$(this).slideUp('fast');
	});
	$('.flash').slideDown('fast');
	$closeTimeout = setTimeout("$('.flash').slideUp('fast',function(){ $(this).remove();});","3000");
  };

  
  $.FancyNotifications = function() {
	setupNotificationBehavior();
  };

  $.FancyNotifications.error = function(message){
	$.FancyNotifications.close();
	this.showMessage("error", message);
  };

  $.FancyNotifications.alert = function(message){
	$.FancyNotifications.close();
	this.showMessage("alert", message);
  };

  $.FancyNotifications.notice = function(message){
	$.FancyNotifications.close();
	this.showMessage("notice", message);
  };

  $.FancyNotifications.showMessage = function(type,message){
    var $div = $("<div></div>");
	$div.attr("class","flash");
	$div.attr("id", "flash_"+type);
	$div.hide();
	$div.html("<div class='flash-message'>"+message+"</div>");

	$('body').prepend($div);

	setupNotificationBehavior();
  };
  
  $.FancyNotifications.close = function(){
	clearTimeout($closeTimeout);
	$('.flash').slideUp('fast',function(){ $(this).remove();});
  };
 

  

  
})( jQuery );