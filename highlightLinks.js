export function highlightLinks() {
  let isStyleApplied = false; // State to track if styles are currently applied

  const toggleStyles = () => {
    const allLinks = document.querySelectorAll("a"); // Update the list of links dynamically

    if (isStyleApplied) {
      // Reset styles
      allLinks.forEach((element) => {
        element.style.removeProperty("color");
        element.style.removeProperty("background-color");
        element.style.removeProperty("text-decoration");

        element.querySelectorAll("*").forEach((child) => {
          child.style.removeProperty("background-color");
          child.style.removeProperty("color");
          child.style.removeProperty("text-decoration");
        });
      });
    } else {
      // Apply styles
      allLinks.forEach((element) => {
        if (element.hasAttribute("href")) {
          element.style.setProperty("color", "yellow", "important");
          element.style.setProperty("background-color", "black", "important");
          element.style.setProperty("text-decoration", "underline", "important");
        }

        element.querySelectorAll("*").forEach((child) => {
          child.style.setProperty("background-color", "inherit", "important");
          child.style.setProperty("color", "inherit", "important");
          child.style.setProperty("text-decoration", "underline", "important");
        });
      });

      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              if (node.tagName.toLowerCase() === "a") {
                node.style.setProperty(
                  "background-color",
                  "black",
                  "important"
                );
                node.style.setProperty("color", "#FDFF3C", "important");
                node.style.setProperty(
                  "text-decoration",
                  "underline",
                  "important"
                );

                node.querySelectorAll("*").forEach((child) => {
                  child.style.setProperty(
                    "background-color",
                    "inherit",
                    "important"
                  );
                  child.style.setProperty("color", "inherit", "important");
                });
              }
            }
          });
        });
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true,
      });
    }

    // Toggle the state
    isStyleApplied = !isStyleApplied;
  };
}
