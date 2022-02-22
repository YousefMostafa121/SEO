let menu = document.getElementById("menu");
let nav = document.getElementById("nav");
menu.onclick =  () => {
  'use strict';
  nav.classList.toggle("active");
}
let themeBtn = document.querySelector("#theme-btn");

themeBtn.onclick = () => {
  themeBtn.classList.toggle("fa-sun");
  if (themeBtn.classList.contains("fa-sun")) {
    document.body.classList.add("active");
  } else {
    document.body.classList.remove("active");
  }
};

window.onscroll = () => {

  let maxHeight = window.document.body.scrollHeight - window.innerHeight;
  let percentage = (window.scrollY / maxHeight) * 100;
  document.querySelector("header .indecator").style.width =
    percentage + "%";
};
