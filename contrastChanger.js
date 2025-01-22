let currentContrastIndex = -1;  // Start from the first contrast mode
const contrastModes = ["Invert", "Dark", "Light", "Reset"];

export default function contrastChanger() {
    currentContrastIndex = (currentContrastIndex+1) % contrastModes.length;
  function applyStyles(elements, styles) {
    elements.forEach((element) => {
        
      for (let property in styles) {
        element.style.setProperty(property, styles[property], "important");
      }
    });
  }

  function resetStyles() {
    const allElements = document.querySelectorAll("*");
    allElements.forEach((element) => {
      element.style.removeProperty("color");
      element.style.removeProperty("background-color");
      element.style.removeProperty("border-color");
    });
    document.querySelector("html").style.removeProperty("filter");
  }

  // Get the current contrast mode
  const contrastType = contrastModes[currentContrastIndex];

  // Reset all styles at the start
  resetStyles();

  // Handle the "Reset" contrast type directly
  if (contrastType === "Reset") {
    return;
  }

  // Apply Invert filter
  if (contrastType === "Invert") {
      let a = document.getElementByTagName("iframe");
    console.log(a)
    const htmlElement = document.querySelector("html");
    htmlElement.style.filter = "invert(100%)";
  } else {
    const themes = {
      Dark: {
        text: { color: "#50D0A0", "background-color": "black" },
        link: {
          color: "#FDFF3C",
          "background-color": "black",
          "border-color": "white",
        },
        input: {
          color: "#50D0A0",
          "background-color": "black",
          "border-color": "white",
        },
      },
      Light: {
        text: { color: "black", "background-color": "white" },
        link: {
          color: "blue",
          "background-color": "white",
          "border-color": "black",
        },
        input: {
          color: "black",
          "background-color": "white",
          "border-color": "black",
        },
      },
    };

    const selectedTheme = themes[contrastType];

    // Apply styles to elements
    applyStyles(
      document.querySelectorAll("h1, h2, h3, h4, h5, h6, p, li, span, ul"),
      selectedTheme.text
    );
    applyStyles(document.querySelectorAll("div, section,body"), selectedTheme.text);

    // Select <a> and all its child elements
    const linksAndChildren = [];
    document.querySelectorAll("a").forEach((link) => {
      linksAndChildren.push(link, ...link.querySelectorAll("*"));
    });
    applyStyles(linksAndChildren, selectedTheme.link);

    applyStyles(document.querySelectorAll("input, button"), selectedTheme.input);
  }

  // Observe changes to dynamically styled elements
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === Node.ELEMENT_NODE) {
          // Apply styles dynamically to added elements
          if (node.matches("a")) {
            const linkWithChildren = [node, ...node.querySelectorAll("*")];
            applyStyles(linkWithChildren, themes[contrastType].link);
          }
          if (node.matches("input, button"))
            applyStyles([node], themes[contrastType].input);

          const nestedElements = node.querySelectorAll(
            "h1, h2, h3, h4, h5, h6, p, li, span, div, section, a, input, button"
          );
          applyStyles(nestedElements, themes[contrastType].text);
        }
      });
    });
  });

  observer.observe(document.body, { childList: true, subtree: true });
  
}
