var menuButton = document.querySelector("#mobile-button");
var mainHeader = document.querySelector(".main-header");

menuButton.addEventListener("click", function(){
    mainHeader.classList.toggle("main-header--active");
})