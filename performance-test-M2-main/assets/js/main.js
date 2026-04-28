const date = new Date()
document.getElementById("year").innerText = date.getFullYear()

// Write your Js code here 

const toggle = document.getElementById("toggle");
const nav_buttons = document.getElementById("nav_buttons");

toggle.onclick = function() {
    if (nav_buttons.style.display == "flex") {
        nav_buttons.style.display = "none";
    } else {
        nav_buttons.style.display = "flex";
    }
};

let img = document.getElementsByClassName("img_media");
const view_img = document.getElementById("media_view");

img.onclick = function() {
    media_view.src = img.src
};

console.log(src_img)