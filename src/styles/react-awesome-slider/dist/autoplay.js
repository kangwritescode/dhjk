!function webpackUniversalModuleDefinition(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("prop-types")):"function"==typeof define&&define.amd?define(["react","prop-types"],t):"object"==typeof exports?exports["react-awesome-button"]=t(require("react"),require("prop-types")):e["react-awesome-button"]=t(e.React,e.PropTypes)}(this,(function(e,t){return function(e){var t={};function __webpack_require__(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,__webpack_require__),n.l=!0,n.exports}return __webpack_require__.m=e,__webpack_require__.c=t,__webpack_require__.d=function(e,t,r){__webpack_require__.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},__webpack_require__.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__webpack_require__.t=function(e,t){if(1&t&&(e=__webpack_require__(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(__webpack_require__.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)__webpack_require__.d(r,n,function(t){return e[t]}.bind(null,n));return r},__webpack_require__.n=function(e){var t=e&&e.__esModule?function getDefault(){return e.default}:function getModuleExports(){return e};return __webpack_require__.d(t,"a",t),t},__webpack_require__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=11)}([function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function sliceIterator(e,t){var r=[],n=!0,o=!1,i=void 0;try{for(var s,a=e[Symbol.iterator]();!(n=(s=a.next()).done)&&(r.push(s.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{!n&&a.return&&a.return()}finally{if(o)throw i}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},o=function(){function defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}();t.serialize=function serialize(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"&";return Object.entries(e).map((function(e){var t=n(e,2);return t[0]+"="+t[1]})).join(t)},t.classToModules=function classToModules(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1];if(!t)return e.join(" ").trim();var r=[],n=e.length;for(;n--;)t[e[n]]&&r.push(t[e[n]]);return r},t.getClassName=function getClassName(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments[1];if(t)return t[e]||e;return e};t.MediaLoader=function(){function MediaLoader(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,MediaLoader),"undefined"!=typeof window&&(this.image=new Image,this.resolve=null,this.video=document.createElement("video"),this.events())}return o(MediaLoader,[{key:"events",value:function events(){var e=this;this.video.addEventListener("loadeddata",(function(){return e.resolve&&e.resolve(!0)})),this.video.addEventListener("loadeddata",(function(){return e.resolve&&e.resolve(!1)})),this.image.onload=function(){return e.resolve&&e.resolve(!0)},this.image.onerror=function(){return e.resolve&&e.resolve(!1)}}},{key:"load",value:function load(e){var t=this;return new Promise((function(r){e||r(!0),t.resolve=r,t.loading=!0,t.ended=!1,e.match(/\.(mp4|webm)/i)&&t.video.setAttribute("src",e),e.match(/\.(png|jp(e)?g|gif|webp)/i)&&(t.image.src=e,(t.image.width>0||t.image.height>0)&&r(!0))}))}}]),MediaLoader}()},function(e,t,r){e.exports=function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(t){return e[t]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";function r(e,t,{tolerance:r=0,propertyName:n}={}){return new Promise(o=>{if(!e)return void o(!1);let i=null;const s=t.charAt(0).toUpperCase()+t.slice(1);let a=0;function c(t){if((t.srcElement||t.target)===e){if(a>=r){if(n&&n!==t.propertyName)return;e.removeEventListener(i,c),o(t)}a+=1}}void 0!==e.style[`Webkit${s}`]&&(i=`webkit${s}End`),void 0!==e.style.OTransition&&(i=`o${t}End`),void 0!==e.style[t]&&(i=`${t}end`),e.clearCssEndEvent&&e.clearCssEndEvent(),e.clearCssEndEvent=function(){e.removeEventListener(i,c)},e.addEventListener(i,c)})}function o(e){window&&window.requestAnimationFrame(e)}function i(e){window&&window.requestAnimationFrame(()=>{window.requestAnimationFrame(e)})}function u(e,t){!function e(t,r){window&&t&&Number.isInteger(t)&&t>0?window.requestAnimationFrame(()=>{e(t-1,r)}):r()}(e+1,t)}function f(){return new Promise(e=>{i(e)})}function c(e,t={}){return new Promise(n=>{r(e,"transition",t).then(n)})}function s(e,t={}){return new Promise(n=>{r(e,"animation",t).then(n)})}n.r(t),n.d(t,"setCssEndEvent",(function(){return r})),n.d(t,"beforeCssLayout",(function(){return o})),n.d(t,"beforeNextCssLayout",(function(){return i})),n.d(t,"beforeFutureCssLayout",(function(){return u})),n.d(t,"onceNextCssLayout",(function(){return f})),n.d(t,"onceTransitionEnd",(function(){return c})),n.d(t,"onceAnimationEnd",(function(){return s}))}])},,,,,,,,function(e,t,r){e.exports=r(12)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=function(){function defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}();t.default=function AutoplayHoc(e){var t,r;return r=t=function(t){function _class(e){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,_class);var t=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(_class.__proto__||Object.getPrototypeOf(_class)).call(this,e));return t.forceStop=!1,t.rootElement=e.rootElement||c,t.state={selected:0},t}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(_class,t),o(_class,[{key:"setInfo",value:function setInfo(e){this.currentInfo=e,e.currentIndex!==this.state.selected&&this.setState({selected:e.currentIndex})}},{key:"setTimer",value:function setTimer(e){var t=this;if(!0!==this.forceStop){var r=e.querySelector("."+(0,u.getClassName)(this.rootElement+"__timer",this.props.cssModule));r||(r=this.createBarElement(),e.querySelector("div").appendChild(r)),r.classList.remove((0,u.getClassName)(this.rootElement+"__timer--animated",this.props.cssModule)),(0,a.onceNextCssLayout)().then((function(){r.classList.remove((0,u.getClassName)(t.rootElement+"__timer--run",t.props.cssModule)),r.classList.remove((0,u.getClassName)(t.rootElement+"__timer--fast",t.props.cssModule)),(0,a.onceNextCssLayout)().then((function(){r.classList.add((0,u.getClassName)(t.rootElement+"__timer--animated",t.props.cssModule)),(0,a.onceNextCssLayout)().then((function(){r.classList.add((0,u.getClassName)(t.rootElement+"__timer--run",t.props.cssModule)),(0,a.onceTransitionEnd)(r).then((function(){t.clearBarAnimation(r),!0!==t.forceStop&&!1!==t.props.play&&t.goTonext()}))}))}))}))}}},{key:"getBarFromSlide",value:function getBarFromSlide(e){return e.querySelector("."+(0,u.getClassName)(this.rootElement+"__timer",this.props.cssModule))||null}},{key:"createBarElement",value:function createBarElement(){var e=document.createElement("div");return e.classList.add((0,u.getClassName)(this.rootElement+"__timer",this.props.cssModule)),e.style.setProperty("--timer-delay",this.props.interval+"ms"),e.style.setProperty("--timer-height",this.props.timerHeight),e.style.setProperty("--timer-background-color",this.props.timerBackgroundColor),e}},{key:"clearBar",value:function clearBar(e){var t=this,r=this.getBarFromSlide(e.currentSlide);r&&(r.clearCssEndEvent&&r.clearCssEndEvent(),r.classList.add((0,u.getClassName)(this.rootElement+"__timer--fast",this.props.cssModule)),(0,a.onceTransitionEnd)(r).then((function(){t.clearBarAnimation(r)})))}},{key:"clearBarAnimation",value:function clearBarAnimation(e){e.classList.remove((0,u.getClassName)(this.rootElement+"__timer--animated",this.props.cssModule))}},{key:"restartBarAnimation",value:function restartBarAnimation(e){e.classList.remove((0,u.getClassName)(this.rootElement+"__timer--run",this.props.cssModule)),e.classList.remove((0,u.getClassName)(this.rootElement+"__timer--fast",this.props.cssModule))}},{key:"goTonext",value:function goTonext(){var e=this.currentInfo,t=e.currentIndex+1,r=t>e.slides-1?0:t;this.setState({selected:r})}},{key:"render",value:function render(){var t=this,r=this.props,o=(r.inverval,r.play,r.cancelOnInteraction),i=(r.showTimer,r.onTransitionStart),a=r.onTransitionEnd,u=r.onFirstMount,c=r.onTransitionRequest,l=function _objectWithoutProperties(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}(r,["inverval","play","cancelOnInteraction","showTimer","onTransitionStart","onTransitionEnd","onFirstMount","onTransitionRequest"]);return s.default.createElement(e,n({},l,{selected:this.state.selected,onFirstMount:function onFirstMount(e){l.startupScreen||(t.setInfo(e),t.setTimer(e.currentSlide)),u&&u(e)},onTransitionStart:function onTransitionStart(e){var r=t.getBarFromSlide(e.nextSlide);r&&t.restartBarAnimation(r),i&&i(e)},onTransitionRequest:function onTransitionRequest(e){t.clearBar(e),t.currentInfo=e,!0===o&&(t.forceStop=!0),c&&c(e)},onTransitionEnd:function onTransitionEnd(e){t.setInfo(e),t.setTimer(e.currentSlide),a&&a(e)}}))}}]),_class}(i.Component),t.defaultProps={interval:2e3,play:!1,cancelOnInteraction:!1,timerHeight:"6px",cssModule:null,timerBackgroundColor:"rgba(0, 0, 0, 0.15)",showTimer:!0,onTransitionStart:null,onTransitionEnd:null,onTransitionRequest:null,rootElement:c},r};var i=r(0),s=_interopRequireDefault(i),a=r(3),u=(_interopRequireDefault(r(1)),r(2));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var c="awssld"}])}));