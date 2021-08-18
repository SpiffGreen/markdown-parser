/**
 * @description A mini library for minifying html, css and javascript
 */

const { minifyJS, minifyCSS, minifyHTML } = require("./Utilities");

// Code Samples
const cssExample = `:root {
    color-scheme: light dark;
    /* both supported */
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body, html {
    font-size: 17px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }
  
  a {
    color: #2068b1;
    text-decoration: none;
  }
  
  .center {
    margin: 0 auto;
    width: 95%;
    max-width: 600px;
    padding: 20px 0 0 0;
  }
  
  hr {
    border: 1px solid dodgerblue;
  }
  
  button,
  a {
    cursor: pointer;
  }
  
  details {
    outline: none;
  }/*# sourceMappingURL=general.css.map */`;

const htmlExample = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Password Generator | Generate Strong and Secure passwords with this tool</title>
    <link rel="stylesheet" href="./dist/css/general.min.css">
    <script src="./dist/js/app.js" type="module"></script>
</head>
<body>
    <div class="container">
        <!-- Navigation Section -->
        <nav>
            <h2>Password Generator</h2>
            <a href="/list.html">See Passwords</a>
        </nav>
        <!-- End of navigation section -->

        <!-- Main section -->
        <main>
            <header class="view banner">Click Generate</header>
            <p class="len-p">length: <span class="len">16</span></p>
            <section class="banner">
                <span class="length-guard">4</span><input type="range" name="length" id="length" minlength="4" maxlength="32" min=4 max=32 value=16 /><span class="length-guard">32</span>
            </section>
            <section class="settings">
                <p class="setting">Settings</p>
                <div class="btw">
                    <p>Include Uppercase</p>
                    <div class="toggleSwitch" data-checked=true><div class="switch"></div></div>
                </div>
                <div class="btw">
                    <p>Include lowercase</p>
                    <div class="toggleSwitch" data-checked=true><div class="switch"></div></div>
                </div>
                <div class="btw">
                    <p>Include number</p>
                    <div class="toggleSwitch" data-checked=true><div class="switch"></div></div>
                </div>
                <div class="btw">
                    <p>Include Symbols</p>
                    <div class="toggleSwitch" data-checked=true><div class="switch"></div></div>
                </div>
                <button class="genBtn">Generate Password</button>
            </section>
        </main>
        <!-- /End of main section -->
    </div>
</body>
</html>`;

const jsExample = `import genPass from "./utilities.js"

window.addEventListener("DOMContentLoaded", initApp);
let customSwitches = null, generateBtn = null;
console.log("Spiff Jekey .  Green");
function initApp() {
    customSwitches = document.querySelectorAll(".toggleSwitch");
    customSwitches.forEach(i => {
        i.addEventListener("click", toggleItem);
    });

    generateBtn = document.querySelector(".genBtn");
    generateBtn.addEventListener("click", updatePassview);
}

function toggleItem(e) {
    e.target.classList.toggle("off");
    e.target.setAttribute("data-checked", e.target.classList.contains("off") ? false : true);
    // Disable generate button if all params are off.
    if(document.querySelectorAll(".off").length >= 4) {
        generateBtn.setAttribute("disabled", true);
    } else {
        generateBtn.removeAttribute("disabled");
    }
}

function updatePassview() {
    const view = document.querySelector(".view");
    let cCaps = customSwitches[0].getAttribute("data-checked") === "true" ? true : false;
    let cSmall = customSwitches[1].getAttribute("data-checked") === "true" ? true : false;
    let cNums = customSwitches[2].getAttribute("data-checked") === "true" ? true : false;
    let cSym = customSwitches[3].getAttribute("data-checked") === "true" ? true : false;
    view.innerText = genPass(21, cSmall, cCaps, cNums, cSym);
}`;

// Test
console.log(minifyCSS(cssExample));
// console.log(cssExample);

console.log(minifyHTML(htmlExample));
// console.log(htmlExample);

console.log(minifyJS(jsExample));
// console.log(jsExample);