// Importing necessary modules
import { contrastChanger } from "./contrastChanger.js";
import { highlightLinks } from "./highlightLinks.js";

// Event Listener for DOM Content Loaded
document.addEventListener("DOMContentLoaded", accessibilityButton);

// Utility Function to Print Messages
function print(message) {
  console.log(message);
}

// Main Function to Handle Accessibility Button and Widget
function accessibilityButton() {
  const style = document.createElement("style");
  document.head.appendChild(style);
  const sheet = style.sheet;

  // Adding CSS rules dynamically
  const cssRules = [
    `.accessibility-button { height: 50px; width: 50px; position: fixed; right: 20px; bottom: 30px; z-index: 99999; transition: 0.3s; }`,
    `.accessibility-button:hover { transform: scale(1.2); }`,
    `.widget { position: fixed; background-color: #006be6; width: 30em; height: 100vh; padding-top: 2em; right: 0; top: 0; font-family: 'Poppins', serif; display: none; opacity: 0; transform: translateX(100%); transition: opacity 0.3s ease, transform 0.3s ease; z-index: 99998; overflow-y: auto; border-radius: 16px 0 0 16px; }`,
    `.widget-title { color: white; font-size: 1.5rem; margin: 0em 1em 1em; }`,
    `.main-div { background-color: #eff1f5; width: 100%; height: 100vh; border-radius: 16px 16px 0 0; padding: 1em; gap: 0.5em; box-sizing: border-box; display: flex; flex-wrap: wrap; justify-content: space-between; align-content: flex-start; }`,
    `.feature { background-color: white; padding: 1em; margin: 1em 0; border-radius: 16px; text-align: center; border: 2px solid transparent; width: calc(50% - 0.5em); transition: border 0.3s ease; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 8em; box-sizing: border-box; }`,
    `.feature:hover { border: 2px solid #006be6; }`,
    `.feature svg { width: 2.5rem; height: 2.5rem; margin-bottom: 10px; fill: black; }`,
    `.feature p { font-weight: 300; margin: 0; padding: 0; }`,
  ];

  cssRules.forEach((rule) => sheet.insertRule(rule, sheet.cssRules.length));
  console.log("CSS rules added successfully.");

  // Adding Google Font
  const googleFontLink = document.createElement("link");
  googleFontLink.rel = "stylesheet";
  googleFontLink.href = "https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap";
  document.head.appendChild(googleFontLink);

  // Creating Accessibility Button
  const accessibilityButton = document.createElement("div");
  accessibilityButton.className = "accessibility-button";
  const logo = document.createElement("img");
  logo.src = "https://cdn-icons-png.freepik.com/256/668/668274.png?semt=ais_hybrid";
  logo.style.width = "100%";
  accessibilityButton.appendChild(logo);
  document.body.appendChild(accessibilityButton);

  // Widget Functionality
  let isWidgetVisible = false;
  let widget = null;

  accessibilityButton.addEventListener("click", () => {
    if (!widget) widget = createWidget();

    if (isWidgetVisible) {
      widget.style.opacity = "0";
      widget.style.transform = "translateX(100%)";
      setTimeout(() => {
        widget.style.display = "none";
        enableBackgroundScroll();
      }, 300);
    } else {
      widget.style.display = "block";
      setTimeout(() => {
        widget.style.opacity = "1";
        widget.style.transform = "translateX(0)";
        disableBackgroundScroll();
      }, 10);
    }
    isWidgetVisible = !isWidgetVisible;
  });

  // Creating the Widget
  function createWidget() {
    widget = document.createElement("div");
    widget.className = "widget";

    const title = document.createElement("p");
    title.className = "widget-title";
    title.textContent = "Accessibility Menu";
    widget.appendChild(title);

    const mainDiv = document.createElement("div");
    mainDiv.className = "main-div";

    const features = [
      { text: "Contrast +", svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18V4a8 8 0 0 1 0 16z"/></svg>`, action: contrastChanger },
      { text: "Highlight Links", svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.707 5.826L17.172 2.293a1 1 0 0 0-1.414 0L2 16.051 4.415 18.466z"/></svg>`, action: highlightLinks },
      { text: "Bigger Text", svg: `<svg viewBox="0 0 24 24"><path d="M8 4V20M17 12V20M6 20H10M15 20H19M13 7V4H3V7M21 14V12H13V14" /></svg>`, action: () => print("BIGGER TEXT") },
    ];

    features.forEach(({ text, svg, action }) => {
      const featureDiv = document.createElement("div");
      featureDiv.className = "feature";
      featureDiv.innerHTML = `${svg}<p>${text}</p>`;
      featureDiv.addEventListener("click", action);
      mainDiv.appendChild(featureDiv);
    });

    widget.appendChild(mainDiv);
    document.body.appendChild(widget);
    return widget;
  }

  function disableBackgroundScroll() {
    document.body.style.overflow = "hidden";
  }

  function enableBackgroundScroll() {
    document.body.style.overflow = "";
  }
}
