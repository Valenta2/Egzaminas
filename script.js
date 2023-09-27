"use strict"
// SWIPER
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  breakpoints: {
    1000: {
    slidesPerView: 3,
    slidesPerGroup: 3
    }
  }
});
//TABS SECTION
var tabs = document.getElementsByClassName("tab")
// hide tabs
// for(var i = 0; i < tabs.length; i++){
//   tabs[i].style.display = 'none'
// }
function showTab(evt,id){
    for(var i = 0; i < tabs.length; i++){
        tabs[i].style.display = "none"
        // tabs[i].classList.remove("active")
    }
    document.getElementById(id).style.display = "block"
    // tabs[i].classList.add("active")
}


// Nav Burger
const burger = document.getElementById("burger")
const links = document.querySelector(".links")
const anchors = links.querySelectorAll("a")
const sections = document.querySelectorAll("section")

burger.addEventListener("click", function(){
    burger.classList.toggle("rotate")
    links.classList.toggle("showNav")
})

for(const anchor of anchors){
    anchor.addEventListener("click", function(){
        links.classList.remove("showNav")
        burger.classList.remove("rotate")
    })
        //remove class
        for(const anchor of anchors){
            anchor.classList.remove("active")
        }
        // add class to pressed anchor link
        this.classList.add("active")
    }
  




