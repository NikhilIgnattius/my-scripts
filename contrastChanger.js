// let currentContrastIndex = -1;  // Start from the first contrast mode
// const contrastModes = ["Invert", "Dark", "Light", "Reset"];

// export default function contrastChanger() {
//     currentContrastIndex = (currentContrastIndex + 1) % contrastModes.length;

//     function applyStyles(elements, styles) {
//     elements.forEach((element) => {
//         // Check if the element or its ancestors are inside an iframe
//         let currentElement = element;
//         let insideIframe = false;

//         while (currentElement) {
//             if (currentElement.tagName === "IFRAME") {
//                 insideIframe = true;
//                 break;
//             }
//             currentElement = currentElement.parentNode;
//         }

//         // If inside an iframe, skip; otherwise, apply styles
//         if (insideIframe) {
//             console.log(`Skipping element inside iframe:`, element);
//         } else {
//             console.log(`Applying styles to element outside iframe:`, element);
//             for (let property in styles) {
//                 element.style.setProperty(property, styles[property], "important");
//             }
//         }
//     });
// }


//     function resetStyles() {
//         const allElements = document.querySelectorAll("*");
//         allElements.forEach((element) => {
//             // Skip iframe elements and their content
//             if (element.tagName === 'IFRAME') return;

//             element.style.removeProperty("color");
//             element.style.removeProperty("background-color");
//             element.style.removeProperty("border-color");
//         });
//         document.querySelector("html").style.removeProperty("filter");
//     }

//     // Get the current contrast mode
//     const contrastType = contrastModes[currentContrastIndex];

//     // Reset all styles at the start
//     resetStyles();

//     // Handle the "Reset" contrast type directly
//     if (contrastType === "Reset") {
//         console.log('Resetting contrast styles');
//         return;
//     }

//     // Apply Invert filter
//     if (contrastType === "Invert") {
//         const htmlElement = document.querySelector("html");
//         htmlElement.style.filter = "invert(100%)";
//         console.log('Applied invert filter');
//     } else {
//         const themes = {
//             Dark: {
//                 text: { color: "#50D0A0", "background-color": "black" },
//                 link: {
//                     color: "#FDFF3C",
//                     "background-color": "black",
//                     "border-color": "white",
//                 },
//                 input: {
//                     color: "#50D0A0",
//                     "background-color": "black",
//                     "border-color": "white",
//                 },
//             },
//             Light: {
//                 text: { color: "black", "background-color": "white" },
//                 link: {
//                     color: "blue",
//                     "background-color": "white",
//                     "border-color": "black",
//                 },
//                 input: {
//                     color: "black",
//                     "background-color": "white",
//                     "border-color": "black",
//                 },
//             },
//         };

//         const selectedTheme = themes[contrastType];

//         // Apply styles to elements
//         // applyStyles(
//         //     document.querySelectorAll("h1, h2, h3, h4, h5, h6, p, li, span, ul"),
//         //     selectedTheme.text
//         // );
//         // applyStyles(document.querySelectorAll("div, section, body"), selectedTheme.text);
// let node1 = document;
//                           let addedElements1 = document.querySelectorAll(
//     "h1, h2, h3, h4, h5, h6, p, li, span, div, section, a, input, button"
// );
// console.log(addedElements1); // Check if it's empty


//                     applyStyles(addedElements1, themes[contrastType].text)

//         // Select <a> and all its child elements
//         const linksAndChildren = [];
//         document.querySelectorAll(":not(iframe) a").forEach((link) => {
//             linksAndChildren.push(link, ...link.querySelectorAll(":not(iframe) *"));
//         });
//         // applyStyles(linksAndChildren, selectedTheme.link);
// let node2 = document;
//        let addedElements2 = document.querySelectorAll(
//     "h1, h2, h3, h4, h5, h6, p, li, span, div, section, a, input, button"
// );
// console.log(addedElements2); // Check if it's empty


//                     applyStyles(addedElements2, themes[contrastType].text);
//         applyStyles(document.querySelectorAll("input, button"), selectedTheme.input);
//         console.log(`Applied ${contrastType} styles`);
//     }

//     // Observe changes to dynamically styled elements
//     const observer = new MutationObserver((mutations) => {
//         mutations.forEach((mutation) => {
//             mutation.addedNodes.forEach((node) => {
//                 if (node.nodeType === Node.ELEMENT_NODE && node.tagName !== 'IFRAME') {
//                     console.log(`New node added:`, node);  // Debugging log

//                     // Apply styles dynamically to added elements
//                     if (node.matches("a")) {
//                         const linkWithChildren = [node, ...node.querySelectorAll(":not(iframe) *")];
//                         applyStyles(linkWithChildren, themes[contrastType].link);
//                     }
//                     if (node.matches("input, button"))
//                         applyStyles([node], themes[contrastType].input);
// let node3 = document;
//                   let addedElements3 = document.querySelectorAll(
//     "h1, h2, h3, h4, h5, h6, p, li, span, div, section, a, input, button"
// );
// console.log(addedElements3); // Check if it's empty

//                     applyStyles(addedElements3, themes[contrastType].text);
//                 }
//             });
//         });
//     });

//     observer.observe(document.body, { childList: true, subtree: true });

//     // Now, exclude the content inside iframe as well by applying styles to the document within each iframe
//     const iframes = document.querySelectorAll("iframe");
//     console.log(iframes)
//     iframes.forEach((iframe) => {
//         const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
//         if (iframeDocument) {
//             // Reset styles inside iframe
//             const iframeElements = iframeDocument.querySelectorAll("*");
//             iframeElements.forEach((element) => {
//                 element.style.removeProperty("color");
//                 element.style.removeProperty("background-color");
//                 element.style.removeProperty("border-color");
//             });
//             iframeDocument.querySelector("html").style.removeProperty("filter");
//         }
//     });
// }
