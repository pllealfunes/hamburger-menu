"use strict"

let hamburger = document.querySelector("#hamburger");
let menu = document.querySelector("#menu");
let exit = document.querySelector("#exit");

hamburger.addEventListener("click", function () {
    menu.style.display = "block";
});

exit.addEventListener("click", function () {
    menu.style.display = "none";
});