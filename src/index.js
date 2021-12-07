import navBar from "./navbar";
import menuFunc from "./menu";
import contactFunc from "./contact";
import landingPage from "./landing";

const navHome = navBar.home;
const navMenu = navBar.menu;
const navContact = navBar.contact;

navHome.addEventListener("click", () => {
  navHome.classList.add("nav-active");

  navMenu.classList.remove("nav-active");
  navContact.classList.remove("nav-active");

  landingPage.landingFunc();
});

navMenu.addEventListener("click", () => {
  navMenu.classList.add("nav-active");

  navHome.classList.remove("nav-active");
  navContact.classList.remove("nav-active");

  menuFunc();
});

navContact.addEventListener("click", () => {
  navContact.classList.add("nav-active");

  navMenu.classList.remove("nav-active");
  navHome.classList.remove("nav-active");

  contactFunc();
});
