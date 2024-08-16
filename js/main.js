function toggleNavbar() {
    var x = document.getElementById("myNavbar");
    if (x.className === "nav-links") {
        x.className += " responsive";
    } else {
        x.className = "nav-links";
    }
}
