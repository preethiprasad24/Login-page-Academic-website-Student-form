const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

function toggleMenu() {
    let menu = document.getElementById("menuList");

    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

 function form() {
    window.location.href = "student form/form.html";}
    
     function fees() {
    window.location.href = "fees";}

     function courses() {
    window.location.href = "courses";}