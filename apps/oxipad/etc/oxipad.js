	$(document).ready( function() {		
		var oxiFileId = 1;
		var oxiFileName = "home/Documente/Document" + oxiFileId + ".txt";
		
		$(".tool").hover(function() {		  
		  $(this).addClass("tool-hover");		  
		}, function() {
		  $(this).removeClass("tool-hover");
		});
    
    function oxiNewFile() {
      oxiFileId++;
      oxiFileName = "home/Documente/Document" + oxiFileId + ".txt";      
      $('#padArea').val("");      
    }
    
    function doneSaving() {
      $('#oxipadStatus').html('Salvat');                      
      $('#oxipadStatus').fadeOut('slow');           
    }                
    
    function oxiSaveFile() {      
      $('#oxipadStatus').fadeIn('fast');
      $('#oxipadStatus').html('Salveaza...');
      content = $('#padArea').val();
      filename = oxiFileName;          
      $.post('apps/oxipad/savefile.php', {
        content: content,
        filename: filename        
      }, doneSaving );      
    }
    
    function oxiSelectFile(file) {
      oxiFileName = file;      
      $('#padFileContent').load(oxiFileName, function() {        
        $('#padArea').val($('#padFileContent').html());
        });
      $('#oxiFileSelector').fadeOut();
    }
    
    $('#padNew').click(oxiNewFile);    
    $('#padSave').click(oxiSaveFile);
    
    $('#padOpen').click(function() {      
      $('#oxiFileSelector').fileTree({ root: 'home/Documente/' }, oxiSelectFile );
      $('#oxiFileSelector').fadeIn();
    });		
				
	});
