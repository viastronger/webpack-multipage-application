//计算font-size
var initWid = 750;
var oHtml = document.getElementsByTagName("html")[0];
var scWid = document.documentElement.offsetWidth || document.body.offsetWidth;
if (scWid >= 750) {
    oHtml.style.fontSize = 30 + 'px';
} else {
    oHtml.style.fontSize = (30 * scWid / initWid) + "px";
}

