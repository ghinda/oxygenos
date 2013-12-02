<script type="text/javascript" src="apps/oxiphoto/common/js/jqgalview.js"></script>
<script type="text/javascript">
	$(document).ready(function(){
		$('#one').jqGalView();				
	});
</script>
<link href="apps/oxiphoto/common/css/jqGalView.css" rel="stylesheet" type="text/css" />

    <ul id="one">
    <?php 
    $dir = '../../home/Imagini';
    if ($handle = opendir($dir)) {      
      while (false !== ($file = readdir($handle))) {
        if ( ($file!=".") && ($file!="..") ) {
          $img ="home/Imagini/".$file; 
          echo "<li><a href=\"" .$img. "\"><img src=\"" .$img. "\" width=\"75\" height=\"75\" border=\"0\" /></a></li> \n";
        }                    
      } 
      closedir($handle); 
    }
    ?>
     					
		</ul>
