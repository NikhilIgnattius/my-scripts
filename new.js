function accessibilityButton() {
  const style = document.createElement("style");
  document.head.appendChild(style);
  const sheet = style.sheet;

  // Adding CSS rules dynamically
  const cssRules = [
    `.accessibility-button { height: 50px; width: 50px; position: fixed; right: 20px; bottom: 30px; z-index: 99999; transition: 0.3s; }`,
    `.accessibility-button:hover { transform: scale(1.2); }`,
    `iframe { position: fixed; right: 0; top: 0; width: 300px; height: 100vh; border: 2px solid #006be6; display: none; z-index: 99998; }`,
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

  // Creating the iframe
  const iframe = document.createElement("iframe");
  iframe.src = "./widget.html"
  document.body.appendChild(iframe);

  // Preload iframe content once
  

  // Toggle iframe visibility on button click
  let isIframeVisible = false;
  accessibilityButton.addEventListener("click", () => {
    isIframeVisible = !isIframeVisible;
    iframe.style.display = isIframeVisible ? "block" : "none";
    iframe.style.height = "100vh";
    iframe.style.width = "100vw"

  });
}

document.addEventListener("DOMContentLoaded", accessibilityButton);
