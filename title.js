if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", function() {
        loaded();
    });
} else if (document.attachEvent) {
    document.attachEvent("onreadystatechange", function() {
        loaded();
    });
}
function loaded() {
    setInterval(loop, 250);
}
var x = 0;
var titleText = [ "z", "ze", "zer", "zero", "zeros", "zerost", "zerosty", "zerostyl", "zerostyle", "zerostyl", "zerosty", "zerost", "zeros", "zero", "zer", "ze", "z" ];

function loop() {
    document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];
}
