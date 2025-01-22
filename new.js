function accessibilityButton() {
  const style = document.createElement("style");
  document.head.appendChild(style);
  const sheet = style.sheet;

  // Adding CSS rules dynamically
  const cssRules = [
    `.accessibility-button { height: 50px; width: 50px; position: fixed; right: 20px; bottom: 30px; z-index: 99999; transition: 0.3s; }`,
    `.accessibility-button:hover { transform: scale(1.2); }`,
    `iframe { position: fixed; right: 0; bottom: 0; width: 300px; height: 400px; border: 2px solid #006be6; display: none; z-index: 99998; }`,
    `.iframe-content { font-family: 'Poppins', serif; display: flex; justify-content: center; align-items: center; height: 100%; background-color: #eff1f5; }`,
    `.iframe-content div { width: 80%; padding: 1em; background-color: white; border-radius: 16px; box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); text-align: center; }`
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
  document.body.appendChild(iframe);

  let isIframeVisible = false;

 accessibilityButton.addEventListener("click", () => {
  if (isIframeVisible) {
    iframe.style.display = "none";
  } else {
    iframe.style.display = "block";

    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    iframeDoc.open();
    iframeDoc.write(`
      <html>
        <head>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap">
        </head>
        <body>
        </body>
        <script src="https://nikhilignattius.github.io/my-scripts/widget.js" type="module" defer></script>
      </html>
    `);
    iframeDoc.close();
  }
  isIframeVisible = !isIframeVisible;
});
}

document.addEventListener("DOMContentLoaded", accessibilityButton);
