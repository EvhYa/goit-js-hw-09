function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},i=o.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var i={id:e,exports:{}};return n[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){t[e]=o},o.parcelRequired7c6=i);var r=i("7Y9D8");const l=document.querySelector(".form"),u=l[0],a=l[1],d=l[2];function s({position:e,delay:o}){const n=Math.random()>.3;return new Promise(((t,i)=>{n?t({position:e,delay:o}):i({position:e,delay:o})}))}l.addEventListener("submit",(function(o){o.preventDefault();for(let o=1;o<=d.value;o+=1)setTimeout((()=>{s({position:o,delay:Number(u.value)+(o-1)*Number(a.value)}).then((({position:o,delay:n})=>{e(r).Notify.success(`✅ Fulfilled promise ${o} in ${n}ms`)})).catch((({position:o,delay:n})=>{e(r).Notify.failure(`❌ Rejected promise ${o} in ${n}ms`)}))}),Number(u.value)+(o-1)*Number(a.value))}));
//# sourceMappingURL=03-promises.ca6829da.js.map