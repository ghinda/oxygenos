	$(document).ready( function() {
  
    $('#bgcolor').simpleColor({
			cellWidth: 9,
			cellHeight: 9,
			border: '1px solid #333333',
			buttonClass: 'button'
	  });				
		
		function oxiSelectFile(file) {      
      $('#wallpaper').val(file);     
      $('#oxideskFileSelector').fadeOut();       
    }        
    
    $('#editWallpaper').click(function() {            
      $('#oxideskFileSelector').fileTree({ root: 'home/Wallpapers/' }, oxiSelectFile );
      $('#oxideskFileSelector').fadeIn();
      return false;
    });		
    
    
    var theme, bgcolor, wallpaper;				
    		
    function doneSaving() {
      $('#status').html('Salvat');                      
      $('#status').fadeOut('slow');
      $().initDesktop();      
    }
            
    $('#savesettings').click(function() {
      $('#status').fadeIn('fast');
      $('#status').html('Salveaza...');
      theme = $('#theme').val();
      bgcolor = $('#bgcolor').val();    
      wallpaper = $('#wallpaper').val();
      $.post('apps/oxidesk/savesettings.php', {
        theme: theme,
        bgcolor: bgcolor,
        wallpaper: wallpaper
      }, doneSaving );      
    });
				
	});
