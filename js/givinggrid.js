var widgetContainer=document.getElementById("givinggrid-widget");
if(widgetContainer){var gid=widgetContainer.getAttribute("data-gid"),wol=widgetContainer.getAttribute("data-wol");if(gid){var widgetContainerWidth=widgetContainer.offsetWidth,frameHeight=800,frameScroll="auto",frameWidth="100%";179>widgetContainerWidth?(frameHeight=390,frameScroll="no"):221>widgetContainerWidth?(frameHeight=430,frameScroll="no"):232>widgetContainerWidth?(frameHeight=560,frameScroll="no"):248>widgetContainerWidth?(frameHeight=540,frameScroll="no"):269>widgetContainerWidth?(frameHeight=
540,frameScroll="no"):309>widgetContainerWidth?(frameHeight=575,frameScroll="no"):321>widgetContainerWidth?(frameHeight=570,frameScroll="no"):412>widgetContainerWidth?(frameHeight=575,frameScroll="no"):531>widgetContainerWidth?(frameHeight=560,frameScroll="no"):550>widgetContainerWidth?(frameHeight=555,frameScroll="no"):560>widgetContainerWidth?(frameHeight=520,frameScroll="no"):594>widgetContainerWidth?(frameHeight=300,frameScroll="no"):717>widgetContainerWidth?(frameHeight=325,frameScroll="no"):
755>widgetContainerWidth?(frameHeight=320,frameScroll="no",381592==gid&&(frameHeight=800,frameScroll="yes")):frameHeight=800;widgetContainer.innerHTML=1==wol&&370>widgetContainerWidth?'<a href="https://www.givinggrid.com/'+gid+'/"><img src="https://www.givinggrid.com/images/wol-widget-sm.png" alt="Wall of Love"></a>':1==wol&&755>widgetContainerWidth?'<a href="https://www.givinggrid.com/'+gid+'/"><img src="https://www.givinggrid.com/images/wol-widget-reg.png" alt="Wall of Love"></a>':'<iframe src="https://www.givinggrid.com/'+
gid+'/offsite/?ns=1" width="'+frameWidth+'" height="'+frameHeight+'" frameborder="0" style="border: none; height: '+frameHeight+'px" allowtransparency="true" id="givinggrid-widget-frame" scrolling="'+frameScroll+'"></iframe>'}};