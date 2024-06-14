const navbar = document.getElementById("navbar-group");
const menu = document.getElementById("menu");
if (menu) {
  menu.addEventListener("click", () => {
    navbar.classList.toggle("active");
  });
}
