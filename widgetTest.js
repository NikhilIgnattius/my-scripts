// import biggerText from "./biggerText.js";
import { contrastChanger } from "./contrastChanger.js";
import { highlightLinks } from "./highlightLinks.js";

document.addEventListener("DOMContentLoaded", accessibilityWidget);

function print(message) {
  console.log(message);
}

function accessibilityWidget() {
  const style = document.createElement("style");
  document.head.appendChild(style);

  const sheet = style.sheet;

  sheet.insertRule(
    ".widget { position: fixed; background-color: #006be6; width: 30em; height: 100vh; padding-top: 2em; right: 0; top: 0; font-family: 'Poppins', serif; font-weight: 400; font-style: normal; display: none; opacity: 0; transform: translateX(100%); transition: opacity 0.3s ease, transform 0.3s ease; z-index: 99998; overflow-y: auto; border-radius: 16px 0 0 16px; }",
    sheet.cssRules.length
  );
  sheet.insertRule(
    ".widget-title { color: white; font-size: 1.5rem; margin: 0em 1em 1em; }",
    sheet.cssRules.length
  );
  sheet.insertRule(
    ".main-div { background-color: #eff1f5; width: 100%; height: 100vh; border-radius: 16px 16px 0 0; display: flex; flex-wrap: wrap; justify-content: space-between; align-content: flex-start; overflow-y: auto; padding: 1em; gap: 0.5em; box-sizing: border-box; }",
    sheet.cssRules.length
  );
  sheet.insertRule(
    ".feature { background-color: white; padding: 1em; margin: 1em 0em; border-radius: 16px; text-align: center; border: 2px solid transparent; transition: border 0.3s ease; width: calc(50% - 0.5em); box-sizing: border-box; display: flex; flex-direction: column; align-items: center; height: 8em; justify-content:center; }",
    sheet.cssRules.length
  );
  sheet.insertRule(
    ".feature:hover { border: 2px solid #006be6; }",
    sheet.cssRules.length
  );
  sheet.insertRule(
    ".feature svg { width: 2.5rem; height: 2.5rem; margin-bottom: 10px; fill: black; }",
    sheet.cssRules.length
  );
  sheet.insertRule(
    ".feature p { font-weight: 300; padding: 0; margin: 0; }",
    sheet.cssRules.length
  );

  console.log("CSS rules added successfully.");

  createWidget();
}

function createWidget() {
  const widget = document.createElement("div");
  widget.className = "widget";

  const title = document.createElement("p");
  title.className = "widget-title";
  title.textContent = "Accessibility Menu";
  widget.appendChild(title);

  const mainDiv = document.createElement("div");
  mainDiv.className = "main-div";

  const features = [
    {
      text: "Contrast +",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18V4a8 8 0 0 1 0 16z"/></svg>`,
      action: () => contrastChanger(),
    },
    {
      text: "Highlight Links",
      svg: `<svg fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m20.707 5.826-3.535-3.533a.999.999 0 0 0-1.408-.006L7.096 10.82a1.01 1.01 0 0 0-.273.488l-1.024 4.437L4 18h2.828l1.142-1.129 3.588-.828c.18-.042.345-.133.477-.262l8.667-8.535a1 1 0 0 0 .005-1.42zm-9.369 7.833-2.121-2.12 7.243-7.131 2.12 2.12-7.242 7.131zM4 20h16v2H4z"></path></svg>`,
      action: () => highlightLinks(),
    },
    {
      text: "Bigger Text",
      svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 4V20M17 12V20M6 20H10M15 20H19M13 7V4H3V7M21 14V12H13V14" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>`,
      action: () => print("Bigger Text"),
    },
  ];

  features.forEach((feature) => {
    const featureDiv = document.createElement("div");
    featureDiv.className = "feature";
    featureDiv.innerHTML = `${feature.svg}<p>${feature.text}</p>`;
    featureDiv.addEventListener("click", feature.action);
    mainDiv.appendChild(featureDiv);
  });

  widget.appendChild(mainDiv);
  document.body.appendChild(widget);

  widget.style.display = "block";
  setTimeout(() => {
    widget.style.opacity = "1";
    widget.style.transform = "translateX(0)";
  }, 10);

  return widget;
}
accessibilityWidget()
