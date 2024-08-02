// preloader====

let loader = document.getElementById("preloader");

window.addEventListener("load", function () {
  loader.style.display = "none"
});
// top preloader ==========
setTimeout(() => {
  let progressBar = document.getElementById("myProgressBar");

  let barwidth = 5;

  let ab = setInterval(progressFunction, 20);

  function progressFunction() {
    if (barwidth >= 100) {
      clearInterval(ab);
      setTimeout(() => {
        progressBar.classList.add("height-0");
      }, 500);
      setTimeout(() => {
        document.getElementById("loader").classList.add("hide-loader");
      }, 500);
    } else {
      barwidth++;
      progressBar.style.width = barwidth + "%";
    }
  }
}, 200);

// suggestion scroll carosel
function scrolll() {
  let left = document.querySelector(".scroll-images");
  left.scrollBy(350, 0)
}
function scrollr() {
  let right = document.querySelector(".scroll-images");
  right.scrollBy(-350, 0)
}
// ====== like btn ======
document.addEventListener('DOMContentLoaded', function () {
  const likeButtons = document.querySelectorAll('.like-button');

  // Iterate over each button and add a click event listener
  likeButtons.forEach(img => {
    img.addEventListener('click', function () {
      // Toggle the 'liked' class on button click
      img.classList.toggle('liked');
    });
  });
});

// ====== favourite btn ========
// select all like buttons
const favouritBtn = document.querySelectorAll('.favourit');

favouritBtn.forEach(img => {
  img.addEventListener('click', function () {
    img.classList.toggle('favouritBtn');
  });
});
// ====================== reels section lo0aded ======
function loadContent(File) {
  fetch(File)
    .then(Response => Response.text())
    .then(data => {
      document.getElementById('content-main-1').innerHTML = data;
      console.log(data);
    })
    .catch(error => console.error('Error loading content', error));
}
// ============ message attach on navbar =============
// offcanvas for search bar
document.addEventListener("DOMContentLoaded", () => {
  let openBtn = document.getElementById("searchOpenBtn");
  let offcanva = document.getElementById('offcanva');
  let overlay = document.getElementById("overlay");
  let navSec = document.querySelectorAll('.navbar-sec');
  let instalogo = document.getElementById('insta-logo');
  let instaName = document.getElementById('insta-name');
  let icDetail = document.querySelectorAll('.i-d');
  let icSetteled = document.querySelectorAll('.nav-item')
 
  openBtn.addEventListener('click', () => {
    offcanva.classList.add('showContent');
    overlay.classList.add('showContent');
    instalogo.classList.add('iconShow');
    instaName.classList.add('full');
    navSec.forEach((nav)=>{
      nav.classList.add('mwidth');
    });
   icDetail.forEach((icon)=>{
      icon.classList.add('detail');
    });
    icSetteled.forEach((setting)=>{
      setting.classList.add('font');
    });
  });
  overlay.addEventListener('click', () => {
    offcanva.classList.remove('showContent')
    overlay.classList.remove('showContent');
    instalogo.classList.remove('iconShow');
    instaName.classList.remove('full');
    navSec.forEach((nav)=>{
      nav.classList.remove('mwidth');
    });
   icDetail.forEach((icon)=>{
      icon.classList.remove('detail');
    });
    icSetteled.forEach((setting)=>{
      setting.classList.remove('font');
    });
  });

});
// ============ search offcanvas end =====================

// notification offcanvas start

document.addEventListener("DOMContentLoaded", () => {
  let notificationOpenBtn = document.getElementById("notification");
  let offcanva = document.getElementById('offcanva');
  let overlay = document.getElementById("overlay");
  let navSec = document.querySelectorAll('.navbar-sec');
  let instalogo = document.getElementById('insta-logo');
  let instaName = document.getElementById('insta-name');
  let icDetail = document.querySelectorAll('.i-d');
  let icSetteled = document.querySelectorAll('.nav-item')
 
  notificationOpenBtn.addEventListener('click', () => {
    offcanva.classList.add('showContent');
    overlay.classList.add('showContent');
    instalogo.classList.add('iconShow');
    instaName.classList.add('full');
    navSec.forEach((nav)=>{
      nav.classList.add('mwidth');
    });
   icDetail.forEach((icon)=>{
      icon.classList.add('detail');
    });
    icSetteled.forEach((setting)=>{
      setting.classList.add('font');
    });
  });
  overlay.addEventListener('click', () => {
    offcanva.classList.remove('showContent')
    overlay.classList.remove('showContent');
    instalogo.classList.remove('iconShow');
    instaName.classList.remove('full');
    navSec.forEach((nav)=>{
      nav.classList.remove('mwidth');
    });
   icDetail.forEach((icon)=>{
      icon.classList.remove('detail');
    });
    icSetteled.forEach((setting)=>{
      setting.classList.remove('font');
    });
  });

});

// navbar active content
const navitems = document.querySelectorAll(".nav-item");

navitems.forEach(item =>{
  item.addEventListener('click', ()=>{
    navitems.forEach(nav => nav.classList.remove('active'));
    item.classList.add('active');
  });
});
