
(function($){
	$.fn.jqGalView = function(options){
		return this.each(function(){
			var el = this, $_ = $(this); $img = $('img', $_);
			el.opts = $.extend({}, $.fn.jqGalView.defaults, options);
			var title = $_.attr('title') ? $_.attr('title') : el.opts.title;
			el.opts.title = title;
			
			//  swap out current image gallery for jqGalView structure
			var $this = $.fn.jqGalView.swapOut($_);
			
			//  Build our header
			// oxygenos // var $header = $(el.opts.headerElements.replace(/%t/g,'<span>'+el.opts.title+'</span>')).appendTo($this);
			
			var $container = $('<div class="gvContainer">').appendTo($this);
			//  Build our holder for the thumbnail images
			var $holder = $('<div class="gvHolder"/>').appendTo($container);

			$img.each(function(i){
				var $el = $(this);

				var $div = $('<div id="gvID'+i+'" class="gvItem">').appendTo($holder).append('<div class="gvLoaderMini">')
				.hover(
					function(){
						$div.children('.gvOpen').stop().animate({top:0},'fast', el.opts.ease);
					},
					function(){
						$div.children('.gvOpen').stop().animate({top:-16},'fast', el.opts.ease);
					}
				);
				var image = new Image();
				image.onload = function(){
					image.onload = null;
					if(el.opts.getUrlBy == 0)
						this.altImg = $el.parent().attr('href');
					else if(el.opts.getUrlBy == 1)
						this.altImg = el.opts.fullSizePath + this.src.split('/').pop();
					else if(el.opts.getUrlBy == 2)
						this.altImg = $this.src.replace(el.opts.prefix,'');
	
					this.altTxt = $el.attr('alt');
					$div.empty().append(this).css('cursor','pointer');
					$.fn.jqGalView.preloader(this);
					
					wContainer = $div.width();
					hContainer = $div.height();
					$w = image.width;
					$h = image.height;
					
					$('<div class="gvOpen">'+el.opts.openTxt+'</div>').appendTo($div).css({top:-16,opacity:".75"})
					.click(
						function(){
							$el.trigger('click');
						}
					);
					$(this)
					.click(
						function(){
							$.fn.jqGalView.view(this,el);
						}
					)
					.css({marginLeft:(wContainer-$w)*.5,marginTop:(hContainer-$h)*.5});
				};
				image.src = this.src;
			});
			
			var $footer = $('<div class="gvLinks">').appendTo($('<div class="gvFooter">').appendTo($this));
			el.mainImgContainer = $('<div class="gvImgContainer">').appendTo($container);
			el.image = $('<img/>').appendTo(el.mainImgContainer);
			// oxygenos // el.descTxt = $('<div class="gvDescText"/>').appendTo(el.mainImgContainer);
			el.loader = $('<div class="gvLoader"/>').appendTo($container);
			
			for(var i = 0; i < $img.size()/el.opts.items; i++){
				$('<a href="#'+(i)+'">'+(i+1)+'</a>').appendTo($footer)
					.click(function(){
						var $l = $(this);
						var index = $l.attr('href').replace(/^.*#/, '')

						if(el.image.is(":hidden")){
							$holder.animate({marginTop:-(el.mainImgContainer.height()*index)},'1000', el.opts.tnease);
						}
						else{
							el.mainImgContainer.fadeOut(100).unbind();
							el.image.fadeOut(100,function(){$holder.animate({marginTop:-(el.mainImgContainer.height()*index)},'1000', el.opts.tnease);});
						}
						
						
						return false;
					});	
			};

			//  remove current images and replace with jqGalview
			$(this).after($this).remove();
		});
	};//  end: $.fn.jqGalView
	
	$.fn.jqGalView.view = function(img,el){
		if(typeof img.altImg == 'undefined') return false;
		var url = /\?imgmax/.test(img.altImg) ? img.altImg : img.altImg+'?imgmax=800';
		var $i_wh = {}; // 
		var $i_whFinal = {}; // 
		var wContainer, hContainer;
		var $w, $h, $wOrg, $hOrg, isOver = false; 

		el.loader.show();
		wContainer = el.mainImgContainer.width();
		hContainer = el.mainImgContainer.height();
		el.mainImgContainer.show();
		
		el.image.attr({src:url,title:el.opts.backTxt}).css({top:0,left:0,position:'absolute'}).hide();
		// oxygenos // var a = $('<a href="#" target="_blank" class="gvFullSizeText">'+el.opts.goFullSizeTxt+'</a>');
		
		//oxygenos // a.attr('href',url);
		var txt = img.altTxt ? img.altTxt +' : ' : '';
		// oxygenos // el.descTxt.empty().append(txt).append(a);		
		
		$img = new Image();
		$img.onload = function(){
			$img.onload = null;
			$w = $wOrg = $img.width;
			$h = $hOrg = $img.height;

			if ($w > wContainer) {
				$h = $h * (wContainer / $w); 
				$w = wContainer; 
				if ($h > wContainer) { 
					$w = $w * (hContainer / $h); 
					$h = hContainer; 
				}
			} else if ($h > hContainer) { 
				$w = $w * (hContainer / $h); 
				$h = hContainer; 
				if ($w > wContainer) { 
					$h = $h * (wContainer / $w); 
					$w = wContainer;
				}
			}
			el.image.css({width:$w,height:$h, marginLeft:(wContainer-$w)*.5,marginTop:(hContainer-$h)*.5})
			.click(function(e){
				el.mainImgContainer.fadeOut().unbind();
				el.image.fadeOut();
				// oxygenos // a.unbind();
				el.image.attr({src:''}).hide();
			});
			if(el.opts.modal && typeof $.fn.jqm == 'function'){
				a.click(function(){
					$.fn.jqGalView.buildDialogBox(this.href,$wOrg,$hOrg);
					return false;
				});
			};
			// oxygenos // el.loader.fadeOut('fast',function(){el.image.fadeIn(function(){el.descTxt.fadeIn();});});
			el.loader.fadeOut('fast',function(){el.image.fadeIn();}); // oxygenos add			
		};
		$img.src = url;
		
	};
	$.fn.jqGalView.preloader = function(element){
		var url = /\?imgmax/.test(element.altImg) ? element.altImg : element.altImg+'?imgmax=800';
		$img = new Image();
		$img.onload = function(){
			$img.onload = null;
		};
		$img.src = url;
	};
	$.fn.jqGalView.buildDialogBox = function($url, imageWidth, imageHeight){
		
		$('#gvModal').remove();
		$gvModal = $('<div id="gvModal" class="jqmWindow">').appendTo('body');

		//	borrowed from thickbox
		var de = document.documentElement;
		var w = window.innerWidth || self.innerWidth || (de&&de.clientWidth) || document.body.clientWidth;
		var h = window.innerHeight || self.innerHeight || (de&&de.clientHeight) || document.body.clientHeight;
		
		var x = w - 150;
		var y = h - 150;
		if (imageWidth > x) {
			imageHeight = imageHeight * (x / imageWidth); 
			imageWidth = x; 
			if (imageHeight > y) { 
				imageWidth = imageWidth * (y / imageHeight); 
				imageHeight = y; 
			}
		} else if (imageHeight > y) { 
			imageWidth = imageWidth * (y / imageHeight); 
			imageHeight = y; 
			if (imageWidth > x) { 
				imageHeight = imageHeight * (x / imageWidth); 
				imageWidth = x;
			}
		}
		// End Resizing
	
		var $img = $('<img src="'+$url+'"/>').appendTo($gvModal).css({width:imageWidth,height:imageHeight,padding:0});
		$('#gvModal').jqm({zIndex:5000,modal:false,overlay:50,
			onHide: function(hash, serial){
				hash.o.remove();
				hash.w.remove();
			},
			onShow: function(hash){
				hash.w.fadeIn('slow',function(){$img.fadeIn();});
			}
		}).css({marginLeft: '-' + parseInt(((imageWidth+20) / 2),10) + 'px', width: (imageWidth+20) + 'px',marginTop: '-' + parseInt(((imageHeight+20) / 2),10) + 'px'}).jqmShow(); 
	};
	$.fn.jqGalView.swapOut = function($el){
		var id = $el.attr('id') ? (' id="'+$el.attr('id')+'"') : '';
		var $this = $('<div' + id + '>');
		return $this;
	};
	
	$.fn.jqGalView.defaults = {
		getUrlBy : 0, // 0 == from parent A tag | 1 == the full size resides in another folder
		fullSizePath : null,
		prefix: 'thumbnail.',
		items: 20,
		openTxt:'deschide&raquo; ',
		backTxt:'<< Click pentru intoarcere',
		goFullSizeTxt: 'Marime Completa',
		tnease:null,
		modal : false,
		title : null,
		headerElements : '<div class="gvHeader">%t</div>'
	};
})(jQuery);
 
