const hamburgerBtn = document.querySelector(".header__button");
const imgBtn = document.querySelector(".header__icon");
const menuBoxes = document.querySelector(".menu__boxes");
const mainMenu = document.querySelector(".menu");
const arrows = document.querySelectorAll(".menu__arrow");

// Functions
const rotateArrow = function (arrow) {
  arrow[0].classList.toggle("up-arrow");
};

const displaySubMenu = function (menu) {
  menu.nextElementSibling.classList.toggle("active-submenu");
  rotateArrow(menu.children);
};

const changeImgBtn = function () {
  imgBtn.src = mainMenu.classList.contains("active-main-menu")
    ? "build/img/icon-close.svg"
    : "build/img/icon-hamburger.svg";
};

const pathArrow = function () {
  return window.screen.width < 768
    ? "build/img/icon-arrow-dark.svg"
    : "build/img/icon-arrow-light.svg";
};

const loadArrow = function () {
  let path = pathArrow();
  arrows.forEach((arrow) => {
    arrow.src = path;
  });
};
loadArrow();

// Event listeners
hamburgerBtn.addEventListener("click", function (e) {
  mainMenu.classList.toggle("active-main-menu");
  changeImgBtn();
});

menuBoxes.addEventListener("click", function (e) {
  let btnSubMenu;

  if (
    e.target.classList.contains("menu__arrow") ||
    e.target.classList.contains("menu__button")
  ) {
    btnSubMenu = e.target.classList.contains("menu__arrow")
      ? e.target.closest(".menu__button")
      : e.target;
    displaySubMenu(btnSubMenu);
  }
});
