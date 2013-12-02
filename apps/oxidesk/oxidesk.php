<?php
header( "Cache-Control: no-cache, must-revalidate" );
header( "Pragma: no-cache" );
?>
<script type="text/javascript" src="apps/oxidesk/etc/jquery.simpleColor.js"></script>

<link rel="stylesheet" href="apps/oxidesk/etc/oxidesk.css" type="text/css" />

<?php
$file = "../../system/settings.xml";
$xml = simplexml_load_file($file) or die ("Unable to load XML file!");

$theme = $xml->theme;
$bgcolor = $xml->bgcolor;
$wallpaper = $xml->wallpaper;

?>

<script src="apps/oxidesk/etc/oxidesk.js" type="text/javascript"></script>

<div id="oxideskFileSelector" class="fileSelector"></div>

<div id="oxidesk">

<div class="field"> 
  <label>Tema grafica </label> 
  <select name="theme" id="theme">
    <option value ="flora" <?php if($theme == 'flora') echo "selected" ?>>Flora</option>
    <option value ="ozone" <?php if($theme == 'ozone') echo "selected" ?>>Ozone</option>    
  </select>
</div>

<div class="field"> 
  <label>Culoare Background </label> 
  <input type="text" name="bgcolor" id="bgcolor" size="8" value="<?php echo $bgcolor; ?>" />
</div>

<div class="field"> 
  <label>Wallpaper </label> 
  <input type="text" name="wallpaper" id="wallpaper" size="40" value="<?php echo $wallpaper; ?>" />
  <a href="#" id="editWallpaper" class="edit"></a> 
</div>  

<div class="bottom">
  <input type="submit" value="Salveaza modificarile" id="savesettings" id="savesettings" />
  <div id="status"></div>
</div>

</div>
