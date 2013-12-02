<?php
$filename = "../../" .$_POST["filename"];
$content = $_POST["content"];

$f = fopen($filename,"w");
fwrite($f,$content);
fclose($f); 
chmod($filename,0600);

?>
