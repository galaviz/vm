jQuery(document).ready(function(e){jQuery.browser.mobile===!1&&(e(".featureswrap img.left").css("opacity",0).one("inview",function(i){i&&e(this).addClass("animated fadeInLeftBig delayp1")}),e(".featureswrap img.right").css("opacity",0).one("inview",function(i){i&&e(this).addClass("animated fadeInRightBig delayp1")}))});