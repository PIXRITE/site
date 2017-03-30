
$(function(){$(document).on("click",".js-smoothScroll",function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var t=$(this.hash);if(t=t.length?t:$("[name="+this.hash.slice(1)+"]"),t.length)return $("html,body").animate({scrollTop:t.offset().top-130},1e3),!1}})});

$("body").click();


//# sourceMappingURL=maps/main.js.map
