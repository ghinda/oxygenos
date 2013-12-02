<?php
header( "Cache-Control: no-cache, must-revalidate" );
header( "Pragma: no-cache" );
?>
<link rel="stylesheet" href="apps/oxipad/etc/oxipad.css" type="text/css" />
<script src="apps/oxipad/etc/oxipad.js" type="text/javascript"></script>

<div id="oxiFileSelector" class="fileSelector"></div>

<div id="padTools">
  <div id="padNew" class="tool">Nou</div>
  <div id="padSave" class="tool">Salveaza</div>
  <div id="padOpen" class="tool">Deschide</div>
  <div id="oxipadStatus"></div>
</div>

<textarea name="padArea" id="padArea"> </textarea>

<div id="padFileContent"></div>

