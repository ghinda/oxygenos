<?php
$file = "../../system/settings.xml";
$xml = simplexml_load_file($file) or die ("Unable to load XML file!");

$xml->theme = $_POST['theme'];
$xml->bgcolor = $_POST['bgcolor'];
$xml->wallpaper = $_POST['wallpaper']; 

file_put_contents($file, $xml->asXML()); 

?>
