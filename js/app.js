(function(){var e,t;e=function(e,t){var n;return n=new RegExp("\\b"+t+"\\b"),e.className=e.className.match(n)?e.className.replace(n,""):e.className+" "+t+" "},t=function(){return e(document.body,"dark"),e(document.body,"light")},addEventListener("load",function(){return"true"===localStorage.getItem("use-alternate-theme")?t():void 0}),document.getElementById("theme-toggle").addEventListener("click",function(){var e;return document.body.className.match(/\btransition-background-color\b/)||(document.body.className=document.body.className+" transition-background-color "),e="true"===localStorage.getItem("use-alternate-theme"),localStorage.setItem("use-alternate-theme",!e),t()}),document.getElementById("download-links-toggle").addEventListener("click",function(){return e(document.body,"show-download-links")})}).call(this);