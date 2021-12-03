import "./style.css";
const landingPage = (() => {
  const mainContent = document.querySelector("#content");
  const landingContainer = document.createElement("div");

  mainContent.appendChild(landingContainer);

  landingContainer.classList.add("landing-container");

  const introContainer = document.createElement("div");
  introContainer.classList.add("intro-container");

  landingContainer.appendChild(introContainer);

  const introTitle = document.createElement("h1");
  introTitle.classList.add("intro-title");
  introTitle.innerText = "THE WORLD'S MOST-LOVED CAFE & RESTAURANT";

  introContainer.appendChild(introTitle);

  const introContainerWrapper = document.querySelector(".intro-container");
  const menuContainerWrapper = document.querySelector(".menu-container");

  function landingFunc() {
    if (!landingContainer.contains(introContainerWrapper)) {
      landingContainer.appendChild(introContainerWrapper);
    }

    if (!mainContent.lastElementChild.classList.contains("landing-container")) {
      mainContent.removeChild(mainContent.lastElementChild);
    }
  }

  return { landingFunc };
})();

export default landingPage;
