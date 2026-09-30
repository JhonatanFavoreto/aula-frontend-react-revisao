const menuButton = document.querySelector(".menu-toggle");
const mainMenu = document.querySelector("#main-menu");
const menuLinks = document.querySelectorAll("#main-menu a");

function toggleMenu() {
  const isOpen = mainMenu.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.querySelector(".menu-label").textContent = isOpen
    ? "Fechar"
    : "Menu";
  menuButton.querySelector(".menu-icon").textContent = isOpen ? "×" : "☰";
}

menuButton.addEventListener("click", toggleMenu);

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mainMenu.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.querySelector(".menu-label").textContent = "Menu";
    menuButton.querySelector(".menu-icon").textContent = "☰";
  });
});
