import menuImg from "./img/Black and White Minimalist BBQ Menu.png";
import navBar from "./navbar";

function menuFunc() {
  const mainContent = document.querySelector("#content");
  const landingContainer = document.querySelector(".landing-container");
  const introContainer = document.querySelector(".intro-container");
  const menuContainer = document.createElement("div");

  menuContainer.classList.add("menu-container");

  const menuContainerWrapper = document.querySelector(".menu-container");

  if (landingContainer.contains(introContainer)) {
    landingContainer.removeChild(introContainer);
  }

  if (!mainContent.contains(menuContainerWrapper)) {
    mainContent.appendChild(menuContainer);
  }

  const menuImgWrapper = new Image();
  menuImgWrapper.src = menuImg;

  menuContainer.appendChild(menuImgWrapper);

  const navHome = navBar.home;
  const navMenu = navBar.menu;

  if (!navMenu.classList.contains("nav-active")) {
    mainContent.removeChild(menuContainerWrapper);
  }

  return { menuContainerWrapper };
}

function menuFuncReset(e) {}

export { menuFunc, menuFuncReset };
