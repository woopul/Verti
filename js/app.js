var mobile = window.matchMedia("screen and (max-width: 760px)");
var menu = document.querySelector(".menu");
var menuTrigger = document.getElementById("menu-trigger");


if (mobile.matches) {
    menuTrigger.style.display = "block";
} else {
    menuTrigger.style.display = 'none';
}
mobile.addListener(function () {
    if (mobile.matches) {
        menuTrigger.style.display = "block";
    } else {
        menuTrigger.style.display = 'none';
    }
});

menuTrigger.addEventListener("click", function () {
    if(menu.style.display === "block"){
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }

})