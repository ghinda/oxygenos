  $(document).ready(function() {

    jQuery.fn.window = function(options) {
      var settings = jQuery.extend({ width: 400, height: 400, isRun: false },options);
      //var window_id = $(this);
      var task_id = $(this).attr("id")+"-task";
      var task_button = "#taskbar #"+task_id;
      var title = $(this).attr("title");
      var self = this;

      settings.isRun = $(this).attr("class")=="ui-dialog-content";

      if(settings.isRun) {
        self.dialog("activate");
        self.parent().parent().show(); // show window if minimized
      }
      else {
        $(this).dialog({
          minWidth: 400,
          minHeight: 400,
          width: settings.width,
          height: settings.height,
          close: function() {
            $(task_button).hide("slow", function() {
              $("#taskbar #"+task_id).remove();
            });
            $(this).dialog("destroy");
          },
		      activate: function() {
            $(".task").removeClass("task-on");
            $(task_button).addClass("task-on");
		      }
        });

        $(this).show();
        if(settings.url) $(this).load("apps/"+settings.url);
        if(settings.script) $(this).getScript(settings.script);

		    if(title.length>20) title=title.substr(0, 17)+"...";
        $("#taskbar").append('<div id="'+task_id+'" class="task">'+title+'</div>');

		    self.dialog("activate");

        $(task_button).fadeTo("fast", 0.44);

        $(task_button).hover(function() {
          $(this).fadeTo("fast", 0.77);
          //$(this).addClass("task-hover");
        },
        function() {
          $(this).fadeTo("fast", 0.44);
          //$(this).removeClass("task-hover");
        });

        $(task_button).click(function() {
          self.dialog("activate");
          self.parent().parent().show();
        });

      }

		return this;
    };

    // get theme, background-color and wallpaper

    jQuery.fn.initDesktop = function(options) {
      $.ajax({
        type: "GET",
        url: "system/settings.xml",
        dataType: "xml",
        success: function(xml) {
          theme = $(xml).find("theme").text();

          var url = "system/themes/" + theme + "/" + theme + ".all.css";
          jQuery(document.createElement('link') ).attr({
                href: url,
                media: 'screen',
                type: 'text/css',
                title: 'theme',
                rel: 'stylesheet'
          }).appendTo('head');

          $("body").attr("class", theme);

          bgcolor = $(xml).find("bgcolor").text();
          $("body").css("background-color", bgcolor);

          wallpaper = $(xml).find("wallpaper").text();
          wallpaper = "url(" + wallpaper + ")";
          $("body").css("background-image", wallpaper);
        }
      });
    }

    $().initDesktop();

    // setup desktop icons
    function setupIcons() {
      $("#desktop-icons .icon").fadeTo("fast", 0.7);
      $("#desktop-icons .icon").hover(function() {
        $(this).addClass("icon-hover");
        $(this).fadeTo("fast", 0.8);
      },
      function() {
        $(this).removeClass("icon-hover");
        $(this).fadeTo("fast", 0.7);
      });
    }

    $("#desktop-icons").load("system/desktop/icons.html", null, setupIcons);
    jQuery.getScript("system/desktop/setup.icons.js");

    // setup kicker and kickoff
    var closer;
    $("#startmenu").fadeOut();
    $("#startmenu").load("apps/kickoff/kickoff.html", null);
    $("#kicker").fadeTo("fast", 0.7);
    $("#kicker").hover(function(){
      $(this).fadeTo("fast", 1);
      if(closer) clearTimeout(closer);
    },
    function() {
      $(this).fadeTo("fast", 0.7);
      closer=setTimeout('$("#startmenu").fadeOut();', 3000);
    });
    $("#kicker").click(function(){
      $("#startmenu").fadeIn();
    });
    $("#startmenu").hover(function(){
      if(closer) clearTimeout(closer);
    },function() {
      $("#startmenu").fadeOut();
    });

  });

  $(window).load(function() {
    $("#loader").fadeOut();
    //setTimeout('$("#loader").fadeOut();', 2000);
  });
