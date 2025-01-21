// import biggerText from "./biggerText.js";
import contrastChanger from "https://nikhilignattius.github.io/my-scripts/contrastChanger.js";

document.addEventListener("DOMContentLoaded", accessibilityButton);
function print(message){
  console.log(message);
}

function accessibilityButton() {
  const style = document.createElement("style");

  document.head.appendChild(style);

  const sheet = style.sheet;

  sheet.insertRule(
    ".accessibility-button { height: 50px; width: 50px; position: fixed; right: 20px; bottom: 30px; z-index: 99999; transition: 0.3s; }",
    sheet.cssRules.length
  );
  sheet.insertRule(
    ".accessibility-button:hover { transform: scale(1.2); }",
    sheet.cssRules.length
  );
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
    ".feature { background-color: white; padding: 1em; margin: 1em 0em; border-radius: 16px; text-align: center; border: 2px solid transparent; transition: border 0.3s ease; width: calc(50% - 0.5em); box-sizing: border-box; display: flex; flex-direction: column; align-items: center; height: 8em; justify-content:center;}",
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
    ".feature p { font-weight: 300; padding: 0; margin: 0;}",
    sheet.cssRules.length
  );

  console.log("CSS rules added successfully.");

  const googleFontLink = document.createElement("link");
  googleFontLink.rel = "stylesheet";
  googleFontLink.href =
    "https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap";
  document.head.appendChild(googleFontLink);

  let accessibilityButton = document.createElement("div");
  accessibilityButton.className = "accessibility-button";

  let logo = document.createElement("img");
  logo.src =
    "https://cdn-icons-png.freepik.com/256/668/668274.png?semt=ais_hybrid";
  logo.style.width = "100%";

  accessibilityButton.appendChild(logo);
  let body = document.querySelector("body");
  if (body) {
    body.appendChild(accessibilityButton);
  }

  let isWidgetVisible = false;
  let widget = null;

  accessibilityButton.addEventListener("click", () => {
    if (widget === null) {
      widget = createWidget();
    }

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
      {
        text: "Contrast +",
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18V4a8 8 0 0 1 0 16z"/></svg>`,
        action:() => contrastChanger()
      },
      {
        text: "Highlight Links",
        svg: `<svg fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="m20.707 5.826-3.535-3.533a.999.999 0 0 0-1.408-.006L7.096 10.82a1.01 1.01 0 0 0-.273.488l-1.024 4.437L4 18h2.828l1.142-1.129 3.588-.828c.18-.042.345-.133.477-.262l8.667-8.535a1 1 0 0 0 .005-1.42zm-9.369 7.833-2.121-2.12 7.243-7.131 2.12 2.12-7.242 7.131zM4 20h16v2H4z"></path></g></svg>`,
        action:()=>print("LINK HIGHLIGHT")
      },
      {
        text: "Bigger Text",
        svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8 4V20M17 12V20M6 20H10M15 20H19M13 7V4H3V7M21 14V12H13V14" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`,
        action:()=> biggerText(),
      },
      {
        text: "Text Spacing",
        svg: `<svg fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M16,5V4H13v9h1a1,1,0,0,1,0,2H10a1,1,0,0,1,0-2h1V4H8V5A1,1,0,0,1,6,5V3A1,1,0,0,1,7,2H17a1,1,0,0,1,1,1V5a1,1,0,0,1-2,0Zm3.707,9.293a1,1,0,0,0-1.414,1.414L19.586,17H4.414l1.293-1.293a1,1,0,0,0-1.414-1.414l-3,3a1,1,0,0,0,0,1.414l3,3a1,1,0,1,0,1.414-1.414L4.414,19H19.586l-1.293,1.293a1,1,0,1,0,1.414,1.414l3-3a1,1,0,0,0,0-1.414Z"></path></g></svg>`,
        action:()=> print("TEXT SPACE")
      },
      {
        text: "Pause Animations",
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black"><path d="M8 3h4v18H8zm8 0h4v18h-4z"/></svg>`,
        action:()=> print("PAUSE ANIMATION")
      },
      {
        text: "Hide Images",
        svg: `<svg width="256px" height="256px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Edit / Hide"> <path id="Vector" d="M3.99989 4L19.9999 20M16.4999 16.7559C15.1473 17.4845 13.6185 17.9999 11.9999 17.9999C8.46924 17.9999 5.36624 15.5478 3.5868 13.7788C3.1171 13.3119 2.88229 13.0784 2.7328 12.6201C2.62619 12.2933 2.62616 11.7066 2.7328 11.3797C2.88233 10.9215 3.11763 10.6875 3.58827 10.2197C4.48515 9.32821 5.71801 8.26359 7.17219 7.42676M19.4999 14.6335C19.8329 14.3405 20.138 14.0523 20.4117 13.7803L20.4146 13.7772C20.8832 13.3114 21.1182 13.0779 21.2674 12.6206C21.374 12.2938 21.3738 11.7068 21.2672 11.38C21.1178 10.9219 20.8827 10.6877 20.4133 10.2211C18.6338 8.45208 15.5305 6 11.9999 6C11.6624 6 11.3288 6.02241 10.9999 6.06448M13.3228 13.5C12.9702 13.8112 12.5071 14 11.9999 14C10.8953 14 9.99989 13.1046 9.99989 12C9.99989 11.4605 10.2135 10.9711 10.5608 10.6113" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>`,
        action:()=> print("HIDE")
      },
      {
        text: "Dyslexia Friendly",
        svg: `<svg height="200px" width="200px" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"> .st0{fill:#000000;} </style> <g> <path class="st0" d="M314.685,210.72c-8.365,0-15.028-1.612-20.383-4.096c-8.012-3.71-13.202-9.427-16.468-15.135 c-1.628-2.838-2.755-5.66-3.463-8.144c-0.708-2.476-0.987-4.656-0.979-5.956c0-2.484-2.007-4.491-4.483-4.491 c-2.476,0-4.484,2.007-4.484,4.491c0,1.613,0.198,3.39,0.593,5.347c0.69,3.43,1.973,7.378,4.088,11.466 c3.15,6.096,8.168,12.503,15.67,17.357c1.884,1.242,3.898,2.352,6.087,3.34c0.345,1.488,0.83,4.096,0.823,7.263 c0,2.294-0.255,4.845-0.946,7.469c-0.692,2.624-1.818,5.289-3.628,7.896c-1.39,2.048-0.896,4.828,1.143,6.235 c2.032,1.407,4.821,0.906,6.227-1.134c2.451-3.53,4.006-7.206,4.928-10.702c0.913-3.505,1.233-6.844,1.233-9.764 c0-1.456-0.082-2.83-0.197-4.063c4.31,0.995,9.032,1.587,14.238,1.587c2.476,0,4.484-2.006,4.484-4.483 C319.169,212.728,317.162,210.72,314.685,210.72z"></path> <path class="st0" d="M334.558,153.042c-2.155-1.201-4.878-0.461-6.103,1.703c-1.217,2.147-0.452,4.878,1.703,6.103 c3.306,1.892,5.314,3.981,6.663,6.145c-5.528,1.94-10.414,2.747-14.749,2.747c-6.326-0.008-11.499-1.678-15.876-4.244 c-4.352-2.558-7.864-6.07-10.537-9.698c-4.4-6.005-10.117-11.343-16.862-15.242c-6.745-3.882-14.535-6.317-22.908-6.317 c-7.329,0-15.053,1.892-22.719,6.095c-3.126,1.712-5.848,3.718-8.209,5.915c-9.32,3.586-17.34,4.886-24.142,4.886 c-9.681-0.017-16.904-2.6-21.74-5.15c-2.41-1.283-4.212-2.55-5.379-3.471c-0.584-0.468-1.02-0.83-1.284-1.077l-0.263-0.255 l-0.05-0.049c-1.719-1.76-4.541-1.81-6.326-0.1c-1.776,1.719-1.826,4.549-0.115,6.334c0.263,0.256,3.332,3.397,9.229,6.532 c2.582,1.365,5.741,2.706,9.394,3.8c-0.97,1.365-2.296,3.372-3.742,5.905c-2.772,4.895-5.956,11.771-7.568,19.858 c-0.502,2.442,1.078,4.795,3.504,5.28c2.427,0.494,4.779-1.094,5.264-3.521c1.358-6.818,4.154-12.889,6.597-17.191 c1.226-2.172,2.352-3.874,3.167-5.042c0.411-0.568,0.732-1.02,0.954-1.3c0.107-0.14,0.19-0.238,0.238-0.304l0.066-0.066 l0.008-0.016c0.404-0.502,0.675-1.07,0.831-1.678c2.278,0.296,4.672,0.461,7.214,0.461c4.705,0,9.871-0.559,15.431-1.818 c-2.772,5.931-3.899,12.133-3.908,17.809c0.017,5.708,1.103,10.907,3.053,15.037c1.06,2.229,3.734,3.192,5.963,2.13 c2.229-1.062,3.192-3.726,2.13-5.964c-1.242-2.584-2.197-6.68-2.18-11.204c-0.008-4.886,1.061-10.249,3.587-15.16 c2.541-4.902,6.473-9.369,12.585-12.725c6.441-3.538,12.61-4.985,18.409-5.002c6.622,0.017,12.856,1.924,18.433,5.133 c5.561,3.2,10.414,7.724,14.115,12.766c3.257,4.45,7.617,8.826,13.219,12.133c5.593,3.307,12.469,5.487,20.416,5.47 c5.256,0,10.964-0.937,17.117-3.026l0.008,0.313c0,2.196-0.345,4.194-0.683,5.61c-0.164,0.691-0.337,1.258-0.46,1.612 c-0.058,0.181-0.099,0.313-0.132,0.395l-0.024,0.066v0.008c-0.904,2.294,0.197,4.886,2.492,5.807 c2.303,0.913,4.911-0.205,5.832-2.492c0.123-0.321,1.908-4.804,1.933-11.005c0-3.554-0.617-7.732-2.698-11.853 C343.401,159.984,339.855,156.028,334.558,153.042z"></path> <path class="st0" d="M219.572,119.564c3.086-3.636,7.47-6.498,12.462-8.415c4.993-1.942,10.554-2.904,15.769-2.904 c5.067,0,9.797,0.929,13.252,2.55c2.262,1.036,4.918,0.05,5.946-2.188c1.037-2.246,0.058-4.919-2.18-5.938 c-5.001-2.32-10.891-3.356-17.019-3.365c-6.3,0-12.864,1.127-18.993,3.48c-6.103,2.352-11.779,5.947-16.056,11.006 c-1.612,1.883-1.374,4.705,0.51,6.3C215.155,121.702,217.993,121.456,219.572,119.564z"></path> <path class="st0" d="M288.782,0.457C178.362-6.338,85.38,63.128,87.485,176.304l-0.082,10.242l-47.972,84.716 c-2.583,4.565-2.814,10.101-0.625,14.872c2.188,4.771,6.531,8.201,11.68,9.221l29.646,8.176l9.311,89.824 c0.247,8.661,4.097,16.822,10.628,22.506c6.531,5.692,15.152,8.382,23.756,7.419l23.673,1.884c4.622-0.51,9.246,0.962,12.708,4.072 c3.463,3.093,5.446,7.526,5.446,12.174V512h200.302c0,0,0-34.226,0-47.881c0-13.663,4.721-44.887,13.654-59.184 c32.475-51.92,85.333-79.542,94.25-186.014C482.784,112.432,419.233,8.494,288.782,0.457z M422.046,183.049 c-4.491,7.42-11.754,12.042-19.684,13.408c-2.434,0.428-4.08,2.731-3.668,5.174c0.436,2.434,2.747,4.088,5.182,3.652 c1.818-0.313,3.611-0.765,5.38-1.333c1.908,3.956,2.862,8.209,2.862,12.445c0,4.524-1.077,9.015-3.142,13.078 c-2.057,4.056-5.1,7.667-9.098,10.48c-5.026,3.528-10.743,5.206-16.418,5.215c-0.452,0-0.897-0.049-1.341-0.058 c-0.099-0.749-0.19-1.489-0.321-2.221v-0.009c-0.978-5.19-3.01-9.944-5.782-14.074l-0.338-0.501l-0.46-0.395 c-3.389-2.912-7.889-7.683-11.36-12.544c-1.752-2.426-3.24-4.886-4.244-7.074c-1.012-2.196-1.481-4.105-1.464-5.232 c0-0.502,0.074-0.848,0.173-1.078c0.082-0.222,0.164-0.354,0.337-0.535c1.744-1.736,1.744-4.582,0-6.342 c-1.752-1.736-4.581-1.736-6.325,0c-1.103,1.086-1.926,2.401-2.427,3.792c-0.518,1.366-0.708,2.788-0.708,4.162 c0.016,3.101,0.954,6.046,2.27,8.958c1.999,4.352,4.976,8.67,8.209,12.618c3.036,3.702,6.252,7.033,9.148,9.583 c1.999,3.052,3.454,6.507,4.17,10.315c0.296,1.605,0.452,3.2,0.485,4.722v0.033c0,0.197,0.008,0.395,0.008,0.608 c0,6.762-2.41,13.17-6.548,18.212c-4.145,5.034-9.977,8.694-16.895,9.994c-1.802,0.345-3.595,0.51-5.356,0.51 c-9.5,0.008-18.286-4.771-23.566-12.355c2.846-2.887,5.273-6.268,7.115-10.11v0.008c2.295-4.746,3.504-9.78,3.718-14.764 c0.107-2.468-1.801-4.557-4.269-4.664c-2.484-0.115-4.566,1.809-4.681,4.277c-0.156,3.8-1.077,7.608-2.829,11.244l-0.008,0.017 c-1.884,3.89-4.5,7.148-7.626,9.723l-0.016,0.008c-5.149,4.203-11.64,6.523-18.277,6.523c-4.178,0-8.423-0.913-12.454-2.863 c-7.46-3.586-12.642-9.977-14.937-17.29h-0.008c-0.872-2.772-1.324-5.692-1.324-8.62c0-4.187,0.913-8.432,2.862-12.47 c1.078-2.229,0.132-4.91-2.097-5.972c-2.221-1.077-4.894-0.148-5.972,2.082c-2.533,5.264-3.759,10.866-3.759,16.361 c0,2.665,0.313,5.297,0.856,7.871c-3.496,1.909-7.436,3.134-11.697,3.438h-0.008c-0.699,0.05-1.382,0.082-2.073,0.082 c-6.729,0-12.955-2.336-17.891-6.293c-4.318-3.454-7.624-8.102-9.385-13.515c3.142-3.1,5.758-6.744,7.674-10.783 c1.053-2.238,0.098-4.903-2.138-5.956c-2.229-1.061-4.919-0.107-5.964,2.138c-1.769,3.752-4.352,7.083-7.502,9.74 c-4.491,3.792-10.151,6.227-16.451,6.68h-0.008c-0.699,0.049-1.382,0.082-2.064,0.082c-14.214,0-26.355-10.504-28.412-24.553 l-0.008-0.041v-0.024c-0.115-0.675-0.189-1.374-0.238-2.098c-0.049-0.683-0.074-1.39-0.074-2.081c0-1.802,0.173-3.586,0.494-5.306 c0.436-2.435-1.167-4.771-3.602-5.223c-2.418-0.436-4.762,1.152-5.223,3.586c-0.404,2.253-0.625,4.573-0.625,6.942l0.008,0.271 c-4.03-0.452-7.938-1.744-11.434-3.792c-4.426-2.582-8.185-6.366-10.784-11.22c-2.311-4.335-3.406-8.949-3.406-13.523 c0-5.906,1.835-11.704,5.216-16.55c1.308,1.842,2.78,3.578,4.433,5.206c3.784,3.71,8.16,6.457,12.791,8.25 c2.311,0.906,4.895-0.247,5.791-2.566c0.905-2.303-0.255-4.894-2.55-5.791c-3.545-1.366-6.869-3.454-9.748-6.284v-0.008 c-2.55-2.484-4.524-5.314-5.931-8.349c-1.809-3.85-2.714-8.036-2.714-12.19c0.007-7.288,2.722-14.51,8.2-20.103 c4.664-4.755,10.537-7.536,16.632-8.382h0.008h0.016c1.3-0.165,2.599-0.255,3.899-0.255c7.272,0.008,14.502,2.748,20.112,8.218 c1.769,1.719,4.598,1.702,6.334-0.074c1.728-1.76,1.695-4.59-0.066-6.326c-7.14-6.992-16.385-10.57-25.64-10.734 c1.044-4.286,3.052-8.274,5.865-11.631c3.907-4.655,9.246-8.094,15.629-9.566c2.172-0.485,4.31-0.732,6.44-0.732 c3.751,0,7.403,0.756,10.776,2.122c-0.954,3.34-1.481,6.844-1.481,10.48c0,2.467,2,4.466,4.475,4.466 c2.475,0,4.474-1.999,4.474-4.466c0-3.916,0.799-7.658,2.197-11.055c2.163-5.199,5.824-9.624,10.422-12.75 c4.614-3.126,10.134-4.943,16.13-4.943c8.637,0,16.345,3.775,21.625,9.804c4.45,5.059,7.124,11.672,7.124,18.944 c0,2.467,2.016,4.466,4.483,4.466c2.476,0,4.491-1.999,4.491-4.466c0-8.276-2.681-15.95-7.214-22.16 c2.32-3.208,5.273-5.939,8.694-7.962c4.277-2.517,9.254-3.973,14.593-3.973c6.152,0,11.803,1.917,16.467,5.19 c4.681,3.274,8.333,7.914,10.398,13.301h-0.008c1.218,3.2,1.884,6.638,1.884,10.266c0,2.468,2.015,4.474,4.483,4.474 c2.468,0,4.491-2.006,4.491-4.474c0-3.702-0.568-7.263-1.563-10.644c5.314-4.935,12.347-7.732,19.61-7.732 c3.792,0,7.642,0.749,11.359,2.336c5.182,2.246,9.345,5.791,12.314,10.118c2.97,4.335,4.713,9.418,5.018,14.682 c0.033,0.543,0.058,1.078,0.058,1.62c-0.017,3.801-0.766,7.634-2.361,11.36c-0.978,2.271,0.074,4.903,2.344,5.873 c2.278,0.979,4.902-0.066,5.889-2.336c1.662-3.866,2.616-7.856,2.937-11.861c4.392,0.312,8.669,1.645,12.454,3.882 c4.318,2.55,8.011,6.284,10.529,11.071c2.204,4.187,3.24,8.637,3.249,13.046c0,2.015-0.247,4.014-0.682,5.972 c-2.682-1.053-5.478-1.76-8.267-2.172c-2.435-0.337-4.714,1.374-5.042,3.825c-0.354,2.452,1.357,4.713,3.792,5.051 c2.821,0.402,5.593,1.209,8.242,2.459c0.461,0.766,1.168,1.399,2.056,1.786c0.543,0.238,1.127,0.354,1.695,0.354 c1.653,1.102,3.158,2.344,4.5,3.701l0.008,0.008c5.379,5.42,8.266,12.733,8.266,20.21 C426.233,173.252,424.892,178.385,422.046,183.049z"></path> <path class="st0" d="M375.522,143.452c-2.221-1.917-4.606-3.488-7.132-4.59c-2.534-1.119-5.199-1.785-7.921-1.785 c-2.476,0-4.475,2.007-4.475,4.483c0,2.476,1.999,4.475,4.475,4.475c1.645,0,3.718,0.568,5.922,1.835 c3.282,1.883,6.696,5.272,9.164,9.5c2.501,4.236,4.096,9.262,4.08,14.469c-0.017,5.717-1.818,11.689-6.704,17.619 c-1.563,1.9-1.3,4.73,0.608,6.301c1.909,1.588,4.738,1.308,6.31-0.584c6.144-7.428,8.768-15.653,8.76-23.336 c0-4.672-0.954-9.147-2.517-13.227C383.723,152.5,379.956,147.284,375.522,143.452z"></path> <path class="st0" d="M344.545,123.142c-12.314,0-22.193-4.54-29.037-10.471c-3.422-2.962-6.038-6.268-7.757-9.443 c-1.744-3.167-2.534-6.186-2.517-8.448c0-2.467-2.007-4.474-4.475-4.474c-2.476,0-4.483,2.007-4.483,4.474 c0.016,4.204,1.333,8.53,3.603,12.726c2.394,4.376,5.882,8.628,10.299,12.362c-0.889,1.234-2.114,2.846-3.694,4.549 c-3.406,3.726-8.324,7.847-14.206,9.945c-2.311,0.822-3.537,3.38-2.706,5.716c0.83,2.336,3.381,3.537,5.725,2.714 c7.971-2.862,13.926-8.085,17.981-12.536c1.802-1.974,3.2-3.791,4.245-5.239c7.403,4.269,16.558,7.091,27.021,7.091 c2.476,0,4.474-2.007,4.474-4.475C349.019,125.158,347.02,123.142,344.545,123.142z"></path> </g> </g></svg>`,
        action:()=> print("DF")
      },
      {
        text: "Cursor",
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black"><path d="M3 3l9 20 3-9 9-3-20-9z"/></svg>`,
        action:()=>print("CURSOR")
      },
      {
        text: "Tool Tips",
        svg: `<svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 512"><path fill-rule="nonzero" d="M256 0c70.69 0 134.69 28.66 181.02 74.98C483.34 121.3 512 185.31 512 256c0 70.69-28.66 134.7-74.98 181.02C390.69 483.34 326.69 512 256 512c-70.69 0-134.69-28.66-181.02-74.98C28.66 390.69 0 326.69 0 256c0-70.69 28.66-134.69 74.98-181.02C121.31 28.66 185.31 0 256 0zm-9.96 161.03c0-4.28.76-8.26 2.27-11.91 1.5-3.63 3.77-6.94 6.79-9.91 3-2.95 6.29-5.2 9.84-6.7 3.57-1.5 7.41-2.28 11.52-2.28 4.12 0 7.96.78 11.49 2.27 3.54 1.51 6.78 3.76 9.75 6.73 2.95 2.97 5.16 6.26 6.64 9.91 1.49 3.63 2.22 7.61 2.22 11.89 0 4.17-.73 8.08-2.21 11.69-1.48 3.6-3.68 6.94-6.65 9.97-2.94 3.03-6.18 5.32-9.72 6.84-3.54 1.51-7.38 2.29-11.52 2.29-4.22 0-8.14-.76-11.75-2.26-3.58-1.51-6.86-3.79-9.83-6.79-2.94-3.02-5.16-6.34-6.63-9.97-1.48-3.62-2.21-7.54-2.21-11.77zm13.4 178.16c-1.11 3.97-3.35 11.76 3.3 11.76 1.44 0 3.27-.81 5.46-2.4 2.37-1.71 5.09-4.31 8.13-7.75 3.09-3.5 6.32-7.65 9.67-12.42 3.33-4.76 6.84-10.22 10.49-16.31.37-.65 1.23-.87 1.89-.48l12.36 9.18c.6.43.73 1.25.35 1.86-5.69 9.88-11.44 18.51-17.26 25.88-5.85 7.41-11.79 13.57-17.8 18.43l-.1.06c-6.02 4.88-12.19 8.55-18.51 11.01-17.58 6.81-45.36 5.7-53.32-14.83-5.02-12.96-.9-27.69 3.06-40.37l19.96-60.44c1.28-4.58 2.89-9.62 3.47-14.33.97-7.87-2.49-12.96-11.06-12.96h-17.45c-.76 0-1.38-.62-1.38-1.38l.08-.48 4.58-16.68c.16-.62.73-1.04 1.35-1.02l89.12-2.79c.76-.03 1.41.57 1.44 1.33l-.07.43-37.76 124.7zm158.3-244.93c-41.39-41.39-98.58-67-161.74-67-63.16 0-120.35 25.61-161.74 67-41.39 41.39-67 98.58-67 161.74 0 63.16 25.61 120.35 67 161.74 41.39 41.39 98.58 67 161.74 67 63.16 0 120.35-25.61 161.74-67 41.39-41.39 67-98.58 67-161.74 0-63.16-25.61-120.35-67-161.74z"/></svg>`,
        action:()=>print("TOOL TIP")
      },
      {
        text: "Text Align",
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black"><path d="M4 6h16v2H4zm0 4h10v2H4zm0 4h16v2H4zm0 4h10v2H4z"/></svg>`,
        action:()=>print("ALIGN")
      },
      {
        text: "Line Height",
        svg: `<svg fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M22,6.5v2a1,1,0,0,1-2,0v-1H17v9h2a1,1,0,0,1,0,2H13a1,1,0,0,1,0-2h2v-9H12v1a1,1,0,0,1-2,0v-2a1,1,0,0,1,1-1H21A1,1,0,0,1,22,6.5ZM7.293,5.707A1,1,0,0,0,8.707,4.293l-3-3a1,1,0,0,0-1.414,0l-3,3A1,1,0,0,0,2.707,5.707L4,4.414V19.586L2.707,18.293a1,1,0,0,0-1.414,1.414l3,3a1,1,0,0,0,1.414,0l3-3a1,1,0,0,0-1.414-1.414L6,19.586V4.414Z"></path></g></svg>`,
        action:()=>print("LINE HEIGHT")
      },
      {
        text: "Saturation",
        svg: `<svg viewBox="-4.05 -4.05 23.10 23.10" xmlns="http://www.w3.org/2000/svg" fill="#000000" stroke="#000000" stroke-width="0.99"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#000000" fill-rule="evenodd" d="M392.54029,248.622619 C391.919172,247.841981 391.241067,247.124106 390.63952,246.594006 C390.375508,246.361352 389.889452,246 390,246 C390.110548,246 389.624492,246.361352 389.36048,246.594006 C388.758933,247.124106 388.080828,247.841981 387.45971,248.622619 C385.937499,250.535776 385,252.487925 385,254 C385,256.808331 387.210659,259 390,259 C392.789341,259 395,256.808331 395,254 C395,252.487925 394.062501,250.535776 392.54029,248.622619 Z M390,260 C386.686292,260 384,257.388328 384,254 C384,250 389.13916,245 390,245 C390.86084,245 396,250 396,254 C396,257.388328 393.313708,260 390,260 Z" transform="translate(-384 -245)"></path> </g></svg>`,
        action:()=>print("SATURATION")
      },  
    ];

    features.forEach(({ text, svg, action }) => {
      const feature = document.createElement("div");
      feature.className = "feature";

      const icon = document.createElement("div");
      icon.innerHTML = svg;
      feature.appendChild(icon);

      const label = document.createElement("p");
      label.textContent = text;
      feature.appendChild(label);

      feature.addEventListener("click", action);
      mainDiv.appendChild(feature);
    });

    widget.appendChild(mainDiv);

    document.body.appendChild(widget);

    return widget;
  }
}

function disableBackgroundScroll() {
  document.body.style.overflow = "hidden";
  document.body.style.position = "fixed";
  document.body.style.width = "100%";
}

function enableBackgroundScroll() {
  document.body.style.overflow = "";
  document.body.style.position = "";
  document.body.style.width = "";
}
