(()=>{"use strict";var e={23:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ID=void 0;class r{static getNewID(){return this.id++}}t.ID=r,r.id=1},366:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});const n=r(23);t.default=class{constructor(e,t){this.name=e,this.price=t,this.id=n.ID.getNewID()}}},607:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const d=n(r(366)),s=document.getElementById("form");null==s||s.addEventListener("submit",(e=>{e.preventDefault();let t=+document.getElementById("product-price").value,r=document.getElementById("product-name").value;const n=new d.default(r,t),o=document.getElementById("table");null==o||o.insertAdjacentHTML("beforeend",`\n  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">\n              <th\n              scope="row"\n                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"\n              >\n                ${n.id}\n              </th>\n              <td class="px-6 py-4">${n.name}</td>\n              <td class="px-6 py-4">${n.price}</td>\n            </tr>\n            `),s.reset()}))}},t={};!function r(n){var d=t[n];if(void 0!==d)return d.exports;var s=t[n]={exports:{}};return e[n].call(s.exports,s,s.exports,r),s.exports}(607)})();