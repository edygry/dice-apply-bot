// ==UserScript==
// @name        dice-auto-apply
// @namespace
// @version     0.0.1
// @author      Trim21 <trim21me@gmail.com>
// @source      https://github.com/trim21/webpack-userscript-template
// @match       *://www.dice.com/jobs*
// @run-at      document-end
// ==/UserScript==

/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.js":
/***/ (() => {

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function apply_page_logic(win) {
  // var doc = win.document
  // console.log(doc)
  await sleep(8000);
  var button_outer = win.document.querySelector("apply-button-wc");
  console.log(button_outer);
  win.document
    .querySelector("apply-button-wc")
    .shadowRoot.querySelector(".btn.btn-primary")
    .click();
  await sleep(4000);
  var steps_text = win.document.querySelector("progress-bar").label;
  var total_steps = Number(steps_text.split("of")[1].trim());
  for (let index = 0; index < total_steps; index++) {
    win.document.querySelector(".btn-next").click();
    await sleep(2000);
  }
  await sleep(2000);
}
async function job_apply(element) {
  var win;
  try {
    var job_id = element.querySelector(".card-title-link.normal").id;
    var job_link = `https://www.dice.com/job-detail/${job_id}`;
    win = window.open(job_link, "", "width=800,height=600");
    // win.onload = async()=>
    await apply_page_logic(win);

    win.close();
  } catch {
    win.close();
  }
}
async function job_loop() {
  var job_list = Array.from(
    document.querySelectorAll("div.card-header:not(.has-status)"),
  );
  for (let index = 0; index < job_list.length; index++) {
    const element = job_list[index];

    await job_apply(element);
  }
}
async function main() {
  console.log("run main");
  await job_loop();
  // var job_id = document.querySelector('div.card-header:not(.has-status)').querySelector('.card-title-link.normal').id
  // var job_link = `https://www.dice.com/job-detail/${job_id}`
  // var win = window.open(job_link)
  // // win.onload = async()=>
  // await apply_page_logic(win)

  // win.close()
}
// const showButtons = (this_el)=>this_el.hidden=!this_el.hidden
console.log("test run");
var s = document.createElement("div");
// s.innerHTML = `<button class="btn btn-block btn-primary btn-efc-primary px-4" onclick="showButtons(this)"><i class="fa fa-lg fa-fw fa-gear"></i></button>`;
s_b = document.createElement("button");
s_b.innerHTML = "Apply Bot";
s.onclick = main;
s_b.setAttribute("id", "my_main_content");
s_b.classList.add(
  // btn btn-block btn-primary btn-efc-primary px-4
  "btn",
  "btn-primary",
  "btn-efc-primary",
);
s.appendChild(s_b);
s.style =
  "top: 61px; right: 0px; position: fixed; z-index: 99999; padding: 10px;";
document.body.appendChild(s);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/main.js");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_main__WEBPACK_IMPORTED_MODULE_0__);
// import "./style/main.less";
// //checkout homepage https://github.com/Trim21/gm-fetch for @trim21/gm-fetch
// import GM_fetch from "@trim21/gm-fetch";
// async function main() {
//   console.log("script start");
//   // cross domain requests
//   console.log(`uuid: ${await fetchExample()}`);
// }
// async function fetchExample(): Promise<string> {
//   const res = await GM_fetch("https://httpbin.org/uuid");
//   const data = await res.json();
//   return data.uuid;
// }
// main().catch((e) => {
//   console.log(e);
// });


})();

/******/ })()
;