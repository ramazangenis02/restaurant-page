function contactFunc() {
  const mainContent = document.querySelector("#content");
  const landingContainer = document.querySelector(".landing-container");
  const introContainer = document.querySelector(".intro-container");

  const menuContainer = document.querySelector(".menu-container");

  if (landingContainer.contains(introContainer)) {
    landingContainer.removeChild(introContainer);
  }

  if (mainContent.contains(menuContainer)) {
    mainContent.removeChild(menuContainer);
  }

  const contactContainer = document.createElement("div");
  contactContainer.classList.add("contact-container");

  const contactMapWrapper = document.createElement("div");
  contactMapWrapper.classList.add("contact-map");

  const contactInfoWrapper = document.createElement("div");
  contactInfoWrapper.classList.add("contact-info");

  const contactContainerWrapper = document.querySelector(".contact-container");

  contactContainer.appendChild(contactMapWrapper);
  contactContainer.appendChild(contactInfoWrapper);

  const iframe = document.createElement("iframe");
  iframe.src =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.91477100938!2d-74.11976334348923!3d40.697403441991554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20Amerika%20Birle%C5%9Fik%20Devletleri!5e0!3m2!1str!2str!4v1638621618458!5m2!1str!2str";

  iframe.classList.add("map");

  if (!mainContent.contains(contactContainerWrapper)) {
    mainContent.appendChild(contactContainer);
  }
  contactMapWrapper.appendChild(iframe);

  const infoTitle = document.createElement("h3");
  infoTitle.classList.add("info-title");
  infoTitle.innerHTML = "Find Us Here";

  contactInfoWrapper.appendChild(infoTitle);
  const infoOpenDaysContainer = document.createElement("div");
  infoOpenDaysContainer.classList.add("info-open-days-container");

  const infoOpenDaysTitle = document.createElement("h4");
  infoOpenDaysTitle.classList.add("info-open-days-title");
  infoOpenDaysTitle.innerHTML = "The days we are open";

  const infoOpenDays = document.createElement("p");
  infoOpenDays.classList.add("info-open-days");
  infoOpenDays.innerHTML = "Monday Tuesday Wednesday Thursday Friday";

  infoOpenDaysContainer.appendChild(infoOpenDaysTitle);
  infoOpenDaysContainer.appendChild(infoOpenDays);
  contactInfoWrapper.appendChild(infoOpenDaysContainer);

  const infoAddress = document.createElement("p");
  infoAddress.classList.add("info-address");
  infoAddress.innerHTML = "184 Constantin Burg Esperanzaburgh ";

  contactInfoWrapper.appendChild(infoAddress);
}

export default contactFunc;
