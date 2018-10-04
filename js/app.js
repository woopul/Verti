var mobile = window.matchMedia("screen and (max-width: 760px)");
var menuLi = $(".menu li");
var menuTrigger = $("#menu-trigger");

    menuLi.on('click', function () {
        $(".nav-active").removeClass(".nav-active");
        $(this).addClass(".nav-active");
    });

// if (mobile.matches) {
//     $(menuTrigger).css('display' , 'block');
// } else {
//     $(menuTrigger).css('display' , 'none');
// }
// mobile.addListener(function (mobile) {
//     if (mobile.matches) {
//         menuTrigger.css('display' , 'block');
//     } else {
//         menuTrigger.css('display' , 'none');
//     }
// });

// menuTrigger.addEventListener("click", function () {
//     if(menu.style.display === "block"){
//         menu.style.display = "none";
//     } else {
//         menu.style.display = "block";
//     }
// });