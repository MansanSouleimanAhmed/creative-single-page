parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Focm":[function(require,module,exports) {
var e=function(){var e=document.querySelector(".hambourger"),s=document.querySelectorAll(".hambourger-item"),t=document.querySelector("#crossline-one"),l=document.querySelector("#crossline-two"),n=document.querySelector(".collapse-navbar-item");n.style.display="none",e.addEventListener("mouseover",function(e){Array.from(s).forEach(function(e){e.style.display="none"}),l.style.display="block",t.style.display="block",t.classList.add("before"),l.classList.add("after"),n.style.display="block"}),e.addEventListener("mouseout",function(e){t.classList.remove("before"),l.classList.remove("after"),n.classList.remove("collapse-navbar-display-block"),n.style.display="none",Array.from(s).forEach(function(e){e.style.display="block"})})};window.addEventListener("resize",function(){window.matchMedia("(max-width: 768px)").matches&&e()});var s=1;function t(e){n(s+=e)}function l(e){n(s=e)}function n(e){var t,l=document.getElementsByClassName("image-slider"),n=document.getElementsByClassName("text-span"),o=document.getElementsByClassName("date-span"),a=document.getElementsByClassName("title-black-div");for(e>l.length&&(s=1),e<1&&(s=l.length),t=0;t<l.length;t++)l[t].style.display="none",o[t].style.display="none",n[t].style.display="none",a[t].style.display="none";l[s-1].style.display="block",n[s-1].style.display="block",o[s-1].style.display="block",a[s-1].style.display="block"}n(s);
},{}]},{},["Focm"], null)
//# sourceMappingURL=/src.30ccd4b5.js.map