document.addEventListener("DOMContentLoaded", accessibilityButton);

function accessibilityButton() {
  // Create a style element for styling
  const style = document.createElement("style");
  document.head.appendChild(style);
  const sheet = style.sheet;

  // Add external font link for styling
  const googleFontLink = document.createElement("link");
  googleFontLink.rel = "stylesheet";
  googleFontLink.href =
    "https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap";
  document.head.appendChild(googleFontLink);

  // Create the accessibility button
  let accessibilityButton = document.createElement("div");
  accessibilityButton.className = "accessibility-button";
  accessibilityButton.style.position = "fixed";
  accessibilityButton.style.bottom = "20px"; // Position from the bottom
  accessibilityButton.style.right = "20px";  // Position from the right
  accessibilityButton.style.backgroundColor = "#4CAF50";  // Button color
  accessibilityButton.style.padding = "15px";  // Button padding
  accessibilityButton.style.borderRadius = "50%";  // Round shape
  accessibilityButton.style.cursor = "pointer";  // Cursor style
  accessibilityButton.style.zIndex = "9999";  // Ensure button is above content

  // Create the logo inside the button
  let logo = document.createElement("img");
  logo.src =
    "https://cdn-icons-png.freepik.com/256/668/668274.png?semt=ais_hybrid";
  logo.style.width = "50px";  // Set logo size inside the button

  accessibilityButton.appendChild(logo);
  document.body.appendChild(accessibilityButton);

  // Initialize widget state
  let isWidgetVisible = false;
  let widget = null;

  // Toggle widget visibility on button click
  accessibilityButton.addEventListener("click", () => {
    if (!widget) {
      widget = createWidget();  // Create iframe widget only if it doesn't exist
    }

    // Toggle widget visibility
    if (isWidgetVisible) {
      widget.style.opacity = "0";  // Fade out the widget
      widget.style.transform = "translateY(100%)";  // Slide widget out (downwards)
      setTimeout(() => {
        widget.style.display = "none";  // Hide widget after animation
      }, 300);
    } else {
      widget.style.display = "block";  // Show widget
      setTimeout(() => {
        widget.style.opacity = "1";  // Fade in the widget
        widget.style.transform = "translateY(0)";  // Slide widget in (upwards)
      }, 10);
    }

    isWidgetVisible = !isWidgetVisible;  // Update widget state
  });

  // Create iframe widget content
  function createWidget() {
    const widgetContainer = document.createElement("div");
    widgetContainer.className = "widget";
    widgetContainer.style.position = "fixed";
    widgetContainer.style.bottom = "0";  // Stick to the bottom of the page
    widgetContainer.style.right = "0";
    widgetContainer.style.width = "100%";
    widgetContainer.style.height = "50%";  // Set height to half of the screen
    widgetContainer.style.backgroundColor = "#fff";
    widgetContainer.style.zIndex = "10000";
    widgetContainer.style.transition = "all 0.3s ease";
    widgetContainer.style.display = "none";  // Initially hidden
    widgetContainer.style.opacity = "0";  // Initially transparent
    widgetContainer.style.transform = "translateY(100%)";  // Start from the bottom

    // Create iframe inside the widget
    const iframe = document.createElement("iframe");
    iframe.src = "https://nikhilignattius.github.io/my-scripts/index.html";  // URL you want to load inside iframe
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "none";

    widgetContainer.appendChild(iframe);  // Add iframe to the widget container
    document.body.appendChild(widgetContainer);  // Add widget to the body

    return widgetContainer;  // Return the widget container to toggle visibility
  }
}
