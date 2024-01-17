function getParam(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

var Value = getParam("b00");

if (Value === "7RU3") {
    document.write("<section id=\"photos\">");
    document.write("<center><img src=\"ghost2.jpeg\" alt=\"ghost\"></center>");
    document.write("</section>");
    document.write("<center><p>Hackoween_{Y0U'11 N3V3R Sl33P}<p><center>");
} else {
    document.write("<section id=\"photos\">");
    document.write("<center><img src=\"ghost1.jpeg\" alt=\"ghost\"></center>");
    document.write("</section>");
}
