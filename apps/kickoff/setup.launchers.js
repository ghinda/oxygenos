$(document).ready(function() {
  
  function setupLaunchers() {        
      $("#kickoff .launcher").hover(function() {
        $(this).addClass("launcher-hover");        
      },
      function() {
        $(this).removeClass("launcher-hover");
      });
  }
  
  setupLaunchers();   
 
	$("#applications").hover(function() { 
    $("#tabs").scrollTo( $("#applications-tab"), 300);
    $(".category").removeClass("category-hover");
    $(this).addClass("category-hover");            
  },function(){});
  
  $("#preferences").hover(function() { 
    $("#tabs").scrollTo( $("#preferences-tab"), 300);
    $(".category").removeClass("category-hover");
    $(this).addClass("category-hover");            
  },function(){});
  
  $("#logout").fadeTo("fast", 0.4);
  $("#logout").hover(function() {  
    $(this).fadeTo("fast", 1);
  },
  function() {
    $(this).fadeTo("fast", 0.4);
  });
  
  $("#logout").click(function() {
    $("#loader").html("Sesiune incheiata.");
    $("#loader").fadeIn("slow");
  });
  
  
  
// launchers start here

  $("#nos-launcher").click(function() {
      $("#nos").window({ url: "nos/nos.html", width: 450 });            
  });
  
  $("#oxipad-launcher").click(function() {
      $("#oxipad").window({ url: "oxipad/oxipad.php" });            
  });
  
  $("#oxiphoto-launcher").click(function() {
      $("#oxiphoto").window({ url: "oxiphoto/oxiphoto.php", width: 500 });            
  });
  
  $("#oxicalc-launcher").click(function() {
      $("#oxicalc").window({ url: "oxicalc/oxicalc.html", width: 240, height: 270 });            
  });
  
  $("#sticky-launcher").click(function() {
      $.getScript("apps/sticky/sticky.js");            
  });
  
  $("#oxidesk-launcher").click(function() {
      $("#oxidesk").window({ url: "oxidesk/oxidesk.php", width: 500 });
  });
  
});
