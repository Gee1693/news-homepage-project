"use strict";

let btnOpen = document.querySelector(".ham-menu");
let btnClose = document.querySelector(".close-menu");
let nav = document.querySelector(".mobile");

btnOpen.addEventListener("click", toggleMenu);
btnClose.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (nav.classList.contains("hide")) {
    nav.classList.remove("hide");
    document.body.classList.add("shade");
    btnOpen.classList.add("hide");
    btnClose.classList.remove("hide");
  } else {
    nav.classList.add("hide");
    document.body.classList.remove("shade");
    btnOpen.classList.remove("hide");
    btnClose.classList.add("hide");
  }
}
