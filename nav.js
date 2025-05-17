window.onload = function () {
    var nav = document.getElementsByTagName("nav")[0];
    var pos = nav.offsetTop;
    window.onscroll = function () {
        if (window.pageYOffset >= pos) nav.setAttribute("id", "fixednav");
        else nav.removeAttribute("id");
    }
}