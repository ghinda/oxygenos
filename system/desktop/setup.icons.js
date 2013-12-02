$(document).ready(function() {
  $("#home-starter").click(function() {
    $("#nos").window({ url: "nos/nos.html" });          
  });
  
  $("#oxipad-starter").click(function() {
      $("#oxipad").window({ url: "oxipad/oxipad.php" });            
  });
  
  $("#oxiphoto-starter").click(function() {
      $("#oxiphoto").window({ url: "oxiphoto/oxiphoto.php", width: 520, height: 550 });            
  });
  
  $("#info-starter").click(function() {
      $("#info").window({ url: "about/about.html" });            
  });
    
  
});
