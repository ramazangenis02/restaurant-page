import "./style.css";

const landingPage = (() => {
  const mainContent = document.querySelector("#content");
  const landingContainer = document.createElement("div");

  mainContent.appendChild(landingContainer);

  landingContainer.classList.add("landing-container");

  const introContainer = document.createElement("div");
  introContainer.classList.add("intro-container");

  landingContainer.appendChild(introContainer);

  // const introTitleContainer = document.createElement("div");
  // introTitleContainer.classList.add("intro-title-container");

  // introContainer.appendChild(introTitleContainer);

  const introTitle = document.createElement("h1");
  introTitle.classList.add("intro-title");
  introTitle.innerText = "THE WORLD'S MOST-LOVED CAFE & RESTAURANT";

  introContainer.appendChild(introTitle);
})();

export default landingPage;
