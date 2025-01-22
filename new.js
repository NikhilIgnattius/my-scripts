function createWidgetInIframe() {
  // Create the iframe
  const iframe = document.createElement("iframe");
  iframe.style.position = "fixed";
  iframe.style.top = "0";
  iframe.style.left = "0";
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.style.border = "none";
  iframe.style.zIndex = "9999"; // Ensure it's on top of other elements
  document.body.appendChild(iframe);

  // Access the iframe's document
  const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
  iframeDoc.open();
  iframeDoc.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <style>
        body {
          margin: 0;
          padding: 0;
          background: transparent;
          display: flex;
          justify-content: flex-end; /* Align widget to the right */
          align-items: center;
          height: 100%;
          width: 100%;
        }
        .widget {
          width: 300px;
          height: auto;
          background-color: white;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          padding: 16px;
          border-radius: 8px;
        }
        .feature {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 8px;
          cursor: pointer;
        }
        .feature p {
          margin: 0;
          font-size: 14px;
          font-family: Arial, sans-serif;
        }
      </style>
    </head>
    <body>
      <div class="widget" id="widget"></div>
      <script>
        // Add the features to the widget
        const widget = document.getElementById("widget");

        const features = [
          {
            text: "Enable Dark Mode",
            svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><circle cx="12" cy="12" r="10" fill="#333" /></svg>',
            action: () => alert("Dark Mode Enabled")
          },
          {
            text: "Hide Images",
            svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><rect width="24" height="24" fill="#F00" /></svg>',
            action: () => alert("Images Hidden")
          }
        ];

        features.forEach((feature) => {
          const featureDiv = document.createElement("div");
          featureDiv.className = "feature";
          featureDiv.innerHTML = \`\${feature.svg}<p>\${feature.text}</p>\`;
          featureDiv.addEventListener("click", feature.action);
          widget.appendChild(featureDiv);
        });
      </script>
    </body>
    </html>
  `);
  iframeDoc.close();
}

createWidgetInIframe();
