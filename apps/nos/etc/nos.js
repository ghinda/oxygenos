	$(document).ready( function() {		
		
		$(".tool").hover(function() {		  
		  $(this).addClass("tool-hover");		  
		}, function() {
		  $(this).removeClass("tool-hover");
		});
		
    $("#nosSelectedFile").hover(function() {
      $(this).addClass("field-hover");
    }, function() {
      $(this).removeClass("field-hover");
    }); 		
    
    $("#nosSelectedFile").click(function() {
      var selectorValue=$(this).attr("value");      
      if(selectorValue=="Selectati un fisier..") $(this).attr("value","")  
    });		
		
		function selectFile(f) {
		  $("#nosSelectedFile").attr("value", f);
		}
		
		$('#nosFileTree').fileTree({ root: 'home/' }, selectFile);
				
	});
