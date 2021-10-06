(()=>{"use strict";var t={116:(t,e,n)=>{n.d(e,{Z:()=>a});var o=n(81),r=n.n(o),s=n(645),i=n.n(s)()(r());i.push([t.id,"body {\r\n  background-color: white;\r\n  margin: 0;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  text-align: center;\r\n}\r\n\r\nbutton {\r\n  all: unset;\r\n  background-color: green;\r\n  padding: 10px;\r\n  border-radius: 10px;\r\n  margin: 5px;\r\n  transition: all 50ms linear;\r\n}\r\n\r\nbutton:hover {\r\n  cursor: pointer;\r\n  background-color: greenyellow;\r\n}\r\n",""]),i.locals={};const a=i},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",o=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),o&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),o&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,o,r,s){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(o)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(i[c]=!0)}for(var l=0;l<t.length;l++){var h=[].concat(t[l]);o&&i[h[0]]||(void 0!==s&&(void 0===h[5]||(h[1]="@layer".concat(h[5].length>0?" ".concat(h[5]):""," {").concat(h[1],"}")),h[5]=s),n&&(h[2]?(h[1]="@media ".concat(h[2]," {").concat(h[1],"}"),h[2]=n):h[2]=n),r&&(h[4]?(h[1]="@supports (".concat(h[4],") {").concat(h[1],"}"),h[4]=r):h[4]="".concat(r)),e.push(h))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,o=0;o<e.length;o++)if(e[o].identifier===t){n=o;break}return n}function o(t,o){for(var s={},i=[],a=0;a<t.length;a++){var c=t[a],l=o.base?c[0]+o.base:c[0],h=s[l]||0,d="".concat(l," ").concat(h);s[l]=h+1;var u=n(d),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var p=r(m,o);o.byIndex=a,e.splice(a,0,{identifier:d,updater:p,references:1})}i.push(d)}return i}function r(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,r){var s=o(t=t||[],r=r||{});return function(t){t=t||[];for(var i=0;i<s.length;i++){var a=n(s[i]);e[a].references--}for(var c=o(t,r),l=0;l<s.length;l++){var h=n(s[l]);0===e[h].references&&(e[h].updater(),e.splice(h,1))}s=c}}},569:t=>{var e={};t.exports=function(t,n){var o=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var s=n.sourceMap;s&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),e.styleTagTransform(o,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var s=e[o]={id:o,exports:{}};return t[o](s,s.exports,n),s.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{class t{constructor(t,e){this.props=t,this.state=e,this.rootElement=null,this.render=()=>this.rootElement,this.setState=t=>{for(const[e,n]of Object.entries(t))this.state[e]=n;this.render()}}}const e=new Set,o=t=>{e.add(t)},r=t=>{clearInterval(t),e.delete(t)},s=()=>{e.forEach((t=>{clearInterval(t)})),e.clear()};class i extends t{constructor(t,e){super(t,e),this.intervalId=setInterval((()=>{this.setState({date:new Date})}),1e3),o(this.intervalId),this.rootElement=document.createElement("div"),this.rootElement.className="clock",this.render=()=>(this.rootElement.textContent=this.state.date,this.rootElement)}}class a extends t{constructor(t,e){super(t,e),this.rootElement=document.createElement("div"),this.rootElement.className="stopwatch-control",this.rootElement.addEventListener("click",(t=>{switch(t.target.id){case"stopwatch-start":this.props.onStart();break;case"stopwatch-stop":this.props.onStop();break;case"stopwatch-reset":this.props.onReset()}})),this.render=()=>{if(this.rootElement.innerText="",this.state.isRunning){const t=document.createElement("button");t.id="stopwatch-stop",t.textContent="Stop",this.rootElement.appendChild(t)}else{const t=document.createElement("button");t.id="stopwatch-start",t.textContent="Start";const e=document.createElement("button");e.id="stopwatch-reset",e.textContent="Reset",this.rootElement.appendChild(t),this.rootElement.appendChild(e)}return this.rootElement}}}const c=36e5;class l extends t{constructor(t,e){super(t,e),this.rootElement=document.createElement("div"),this.rootElement.className="stopwatch-timestamp",this.render=()=>{let t=this.state.elapsed;const e=String(Math.floor(t/c)).padStart(2,"0");t%=c;const n=String(Math.floor(t/6e4)).padStart(2,"0");t%=6e4;const o=String(Math.floor(t/1e3)).padStart(2,"0");t%=1e3;const r=String(Math.floor(t/10)).padStart(2,"0");return this.rootElement.textContent=`${e}:${n}:${o}.${r}`,this.rootElement}}}class h extends t{constructor(t,e){super(t,e),this.stopwatchInterval=null,this.deltaOrg=null,this.timestamp=new l({},{elapsed:0}),this.startStopwatch=()=>{this.deltaOrg=Date.now(),this.stopwatchInterval=setInterval((()=>{const t=Date.now()-this.deltaOrg,e=this.timestamp.state.elapsed+t;this.timestamp.setState({elapsed:e}),this.deltaOrg=Date.now()}),10),o(this.stopwatchInterval),this.controller.setState({isRunning:!0})},this.stopStopwatch=()=>{this.stopwatchInterval&&(r(this.stopwatchInterval),this.stopwatchInterval=null,this.controller.setState({isRunning:!1}))},this.resetStopwatch=()=>{this.stopStopwatch(),this.timestamp.setState({elapsed:0})},this.controller=new a({onStart:this.startStopwatch,onStop:this.stopStopwatch,onReset:this.resetStopwatch},{isRunning:!1}),this.rootElement=document.createElement("div"),this.rootElement.className="stopwatch",this.render=()=>(this.rootElement.appendChild(this.controller.render()),this.rootElement.appendChild(this.timestamp.render()),this.rootElement)}}class d extends t{constructor(t,e){super(t,e),this.rootElement=document.createElement("div"),this.rootElement.className="countdown-control",this.rootElement.addEventListener("click",(t=>{switch(t.target.id){case"countdown-start":this.props.onStart();break;case"countdown-stop":this.props.onStop();break;case"countdown-reset":this.props.onReset()}})),this.render=()=>{if(this.rootElement.innerText="",this.state.isRunning){const t=document.createElement("button");t.id="countdown-stop",t.textContent="Stop",this.rootElement.appendChild(t)}else{const t=document.createElement("button");t.id="countdown-start",t.textContent="Start";const e=document.createElement("button");e.id="countdown-reset",e.textContent="Reset",this.rootElement.appendChild(t),this.rootElement.appendChild(e)}return this.rootElement}}}const u=36e5;class m extends t{constructor(t,e){super(t,e),this.rootElement=document.createElement("div"),this.rootElement.className="countdown-timestamp",this.render=()=>{let t=this.state.remaining;const e=String(Math.floor(t/u)).padStart(2,"0");t%=u;const n=String(Math.floor(t/6e4)).padStart(2,"0");t%=6e4;const o=String(Math.floor(t/1e3)).padStart(2,"0");return t%=1e3,String(Math.floor(t/10)).padStart(2,"0"),this.rootElement.textContent=`${e}:${n}:${o}`,this.rootElement}}}class p extends t{constructor(t,e){super(t,e),this.hourSetter=document.createElement("input"),this.hourSetter.type="number",this.hourSetter.value="0",this.hourSetter.min="0",this.hourSetter.max="99",this.minuteSetter=document.createElement("input"),this.minuteSetter.type="number",this.minuteSetter.value="0",this.minuteSetter.min="0",this.minuteSetter.max="59",this.secondSetter=document.createElement("input"),this.secondSetter.type="number",this.secondSetter.value="0",this.secondSetter.min="0",this.secondSetter.max="59",this.getTotalMs=()=>{let t=0;return t+=36e5*this.hourSetter.value,t+=6e4*this.minuteSetter.value,t+=1e3*this.secondSetter.value,t},this.rootElement=document.createElement("div"),this.rootElement.className="countdown-timeamount",this.rootElement.addEventListener("change",(()=>{this.props.onChange()})),this.render=()=>(this.rootElement.appendChild(this.hourSetter),this.rootElement.appendChild(this.minuteSetter),this.rootElement.appendChild(this.secondSetter),this.rootElement)}}class E extends t{constructor(t,e){super(t,e),this.countdownInterval=null,this.deltaOrg=null,this.timestamp=new m({},{remaining:0}),this.startCountdown=()=>{this.deltaOrg=Date.now(),this.countdownInterval=setInterval((()=>{const t=Date.now()-this.deltaOrg,e=this.timestamp.state.remaining-t;this.timestamp.setState({remaining:e>0?e:0}),this.deltaOrg=Date.now(),this.timestamp.state.remaining<=0&&this.stopCountdown()}),10),o(this.countdownInterval),this.controller.setState({isRunning:!0})},this.stopCountdown=()=>{this.countdownInterval&&(r(this.countdownInterval),this.countdownInterval=null,this.controller.setState({isRunning:!1}))},this.resetCountdown=()=>{this.stopCountdown(),this.timestamp.setState({remaining:this.timeAmount.getTotalMs()})},this.controller=new d({onStart:this.startCountdown,onStop:this.stopCountdown,onReset:this.resetCountdown},{isRunning:!1}),this.changeTimeAmount=()=>{this.stopCountdown(),this.timestamp.setState({remaining:this.timeAmount.getTotalMs()})},this.timeAmount=new p({onChange:this.changeTimeAmount},{}),this.rootElement=document.createElement("div"),this.rootElement.className="countdown",this.render=()=>(this.rootElement.appendChild(this.timeAmount.render()),this.rootElement.appendChild(this.controller.render()),this.rootElement.appendChild(this.timestamp.render()),this.rootElement)}}class v extends t{constructor(t,e){super(t,e),this.rootElement=document.createElement("div"),this.rootElement.className="content",this.render=()=>{switch(this.rootElement.innerText="",s(),this.state.mode){case"clock":this.rootElement.appendChild(new i({},{date:new Date}).render());break;case"stopwatch":this.rootElement.appendChild(new h({},{}).render());break;case"countdown":this.rootElement.appendChild(new E({},{}).render())}return this.rootElement}}}class w extends t{constructor(t,e){super(t,e),this.rootElement=document.createElement("div"),this.rootElement.className="buttons",this.rootElement.addEventListener("click",(t=>{const e=parseInt(t.target.id);null==e||Number.isNaN(e)||this.props.onClick(this.props.modes[e])})),this.render=()=>(Array.from({length:this.props.modes.length},((t,e)=>{const n=document.createElement("button");return n.id=e,n.textContent=this.props.modes[e],n})).forEach((t=>{this.rootElement.appendChild(t)})),this.rootElement)}}var f=n(379),S=n.n(f),g=n(795),C=n.n(g),x=n(569),b=n.n(x),y=n(565),I=n.n(y),M=n(216),k=n.n(M),N=n(589),T=n.n(N),R=n(116),O={};O.styleTagTransform=T(),O.setAttributes=I(),O.insert=b().bind(null,"head"),O.domAPI=C(),O.insertStyleElement=k(),S()(R.Z,O),R.Z&&R.Z.locals&&R.Z.locals,new class extends t{constructor(t,e){super(t,e),this.content=new v({},{mode:"clock"}),this.changeMode=t=>{this.content.setState({mode:t})},this.buttons=new w({modes:["clock","stopwatch","countdown"],onClick:this.changeMode},{}),this.rootElement=document.querySelector("main"),this.rootElement.className="main",this.render=()=>(this.rootElement.appendChild(this.buttons.render()),this.rootElement.appendChild(this.content.render()),this.rootElement)}}({},{}).render()})()})();