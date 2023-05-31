console.log("Hello World!");

const logo = document.querySelector("#logo");

const sideBar = document.querySelector("#side-bar");

const closeBtn = document.querySelector(".close-btn");

logo.onclick = function(){
    sideBar.style.left="0%";
}

closeBtn.onclick = function(){
    sideBar.style.left="-100%";
}
