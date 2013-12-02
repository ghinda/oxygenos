	$(document).ready( function() {		
		
		if($("#widgets #sticky").length > 0) {		  
		  $('#sticky').fadeIn('fast');
		} else {      
		  $('<link href="apps/sticky/sticky.css" rel="stylesheet" type="text/css" media="screen" />').appendTo("body");
		  $('<div id="sticky"></div>').appendTo("#widgets");		
		
		  $('#sticky').html('<div class="close">x</div><textarea name="stickyTextArea" id="stickyTextArea"></textarea>');					  	
    
      $("#sticky").draggable();
    
      $('#sticky .close').hover(function() {
        $(this).addClass('close-hover');
      },function() {
        $(this).removeClass('close-hover');    
      });
    
      $('#sticky .close').click(function() {      
        $('#sticky').fadeOut('fast');      
      });     
    
    }           
        					
	});
