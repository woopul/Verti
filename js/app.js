var mobile = window.matchMedia("screen and (max-width: 760px)");
var menu = $(".menu");
var menuTrigger = $("#menu-trigger");


if (mobile.matches) {
    $(menuTrigger).css('display' , 'block');
} else {
    $(menuTrigger).css('display' , 'none');
}
// mobile.addListener(function () {
//     if (mobile.matches) {
//         menuTrigger.css('display' , 'block');
//     } else {
//         menuTrigger.css('display' , 'none');
//     }
// });

menuTrigger.addEventListener("click", function () {
    if(menu.style.display === "block"){
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
});