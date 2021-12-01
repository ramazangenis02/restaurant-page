import "./style.css";

const navBar = (() => {
  const mainContent = document.querySelector("#content");

  const navBarContainer = document.createElement("div");
  const navBarWrapper = document.createElement("div");

  navBarContainer.classList.add("navbar-container");
  navBarWrapper.classList.add("navbar-wrapper");

  navBarContainer.appendChild(navBarWrapper);
  mainContent.appendChild(navBarContainer);

  const home = document.createElement("span");
  const menu = document.createElement("menu");
  const contact = document.createElement("contact");

  home.classList.add("nav-links");
  menu.classList.add("nav-links");
  contact.classList.add("nav-links");

  home.innerText = "Home";
  menu.innerText = "Menu";
  contact.innerText = "Contact";

  navBarWrapper.appendChild(home);
  navBarWrapper.appendChild(menu);
  navBarWrapper.appendChild(contact);
})();

export default navBar;
