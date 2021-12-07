import menuImg from "./img/menu.png";
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

  const contactContainer = document.querySelector(".contact-container");

  if (mainContent.contains(contactContainer)) {
    mainContent.removeChild(contactContainer);
  }
}

export default menuFunc;
