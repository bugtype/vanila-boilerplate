(()=>{"use strict";var t={306:(t,e,n)=>{n.r(e)},566:(t,e,n)=>{n.r(e)},832:(t,e,n)=>{n.r(e)},980:(t,e,n)=>{n.r(e)},307:(t,e,n)=>{n.r(e)},178:function(t,e,n){var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=n(887),a=n(86),s=n(905);n(307);var u=function(t){function e(e){var n=e.$target,r=t.call(this)||this;return r.$target=null,a.router.config({rootEl:n,routes:[{path:"/",component:s.HomePage},{path:"/result",component:s.ResultPage}],failPage:s.HomePage,hash:!0}),r}return o(e,t),e}(i.Component);e.default=u},187:function(t,e,n){var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=n(887);n(306);var a=function(t){function e(e){var n=e.$target,r=e.onClick,o=t.call(this)||this;o.$gameRestartButton=null,o.state={};var i=document.createElement("div");return o.$gameRestartButton=i,o.$gameRestartButton.classList.add("game-button"),n.appendChild(i),i.addEventListener("click",(function(){return r()})),o.render(),o}return o(e,t),e.prototype.render=function(){this.$gameRestartButton.innerHTML="다시 시작"},e}(i.Component);e.default=a},991:function(t,e,n){var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=function(t){function e(e){var n=e.$target,r=e.onButtonClick,o=t.call(this)||this;o.$gameStartButton=null,o.state={waiting:!0};var i=document.createElement("div");return o.$gameStartButton=i,o.$gameStartButton.classList.add("game-button"),n.appendChild(i),i.addEventListener("click",(function(){return r()})),o.render(),o}return o(e,t),e.prototype.setState=function(t){var e=t.waiting,n=this.state.waiting!==e;this.state={waiting:e},n&&this.render()},e.prototype.render=function(){this.$gameStartButton.innerHTML=this.state.waiting?" 시작":"초기화"},e}(n(887).Component);e.default=i},8:function(t,e,n){var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=function(t){function e(e){var n=e.$target,r=e.placeHolder,o=e.onEnter,i=t.call(this)||this;i.$questionInput=null,i.state={};var a=document.createElement("input");return i.$questionInput=a,n.appendChild(a),a.placeholder=r,a.addEventListener("change",o),a.addEventListener("focus",(function(){return a.placeholder=""})),i.render(),i}return o(e,t),e.prototype.focus=function(){this.$questionInput.focus()},e.prototype.setState=function(t){var e=t.value;this.$questionInput.value=e},e.prototype.render=function(){},e}(n(887).Component);e.default=i},3:function(t,e,n){var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),i=this&&this.__assign||function(){return(i=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var a=function(t){function e(e){var n=e.$target,r=e.text,o=t.call(this)||this;o.$questionWord=null,o.state={text:""},o.state.text=r;var i=document.createElement("div");return o.$questionWord=i,n.appendChild(i),o.render(),o}return o(e,t),e.prototype.setState=function(t){var e=this.state.text!==t.text;this.state=i({},t),e&&this.render()},e.prototype.render=function(){this.$questionWord.innerHTML='\n            <div class="home-word"> '+this.state.text+" </div>\n        "},e}(n(887).Component);e.default=a},25:function(t,e,n){var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),i=this&&this.__assign||function(){return(i=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var a=function(t){function e(e){var n=e.$target,r=t.call(this)||this;r.$el=null,r.state={remainingTime:0};var o=document.createElement("div");return r.$el=o,n.appendChild(o),r.render(),r}return o(e,t),e.prototype.setState=function(t){this.state=i({},t),this.render()},e.prototype.render=function(){this.$el.innerHTML="<div> 남은 시간 : "+this.state.remainingTime+"초 </div>"},e}(n(887).Component);e.default=a},266:function(t,e,n){var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),i=this&&this.__assign||function(){return(i=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var a=n(887);n(566);var s=function(t){function e(e){var n=e.$target,r=e.score,o=t.call(this)||this;o.$el=null,o.$scoreEl=null,o.$minusEl=null,o.state={score:0},o.state.score=r;var i=document.createElement("div");o.$el=i,n.appendChild(i);var a=document.createElement("div");a.innerHTML="<div> 점수 : "+o.state.score+" </div>";var s=document.createElement("div");return s.classList.add("header-minus"),s.innerHTML="-1",o.$scoreEl=a,o.$minusEl=s,i.appendChild(a),i.appendChild(s),o.render(),o}return o(e,t),e.prototype.showMinusAnimation=function(){this.$minusEl.classList.remove("minus__animation"),this.$minusEl.offsetWidth,this.$minusEl.classList.add("minus__animation")},e.prototype.setState=function(t){this.state=i({},t),this.render()},e.prototype.render=function(){this.$scoreEl.innerHTML="<div> 점수 : "+this.state.score+" </div>"},e}(a.Component);e.default=s},130:function(t,e,n){var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),i=this&&this.__assign||function(){return(i=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var a=n(887),s=n(25),u=n(266),c=function(t){function e(e){var n=e.$target,r=t.call(this)||this;r.$header=null,r.$remaining=null,r.$score=null,r.state={time:0,score:0};var o=document.createElement("div");return o.classList.add("home-header"),r.$header=o,n.appendChild(o),r.$remaining=new s.default({$target:o}),r.$score=new u.default({$target:o,score:0}),r.render(),r}return o(e,t),e.prototype.setState=function(t){t.score!==this.state.score&&(this.$score.setState({score:t.score}),t.score<this.state.score&&this.$score.showMinusAnimation()),t.time!==this.state.time&&this.$remaining.setState({remainingTime:t.time}),this.state=i({},t)},e.prototype.render=function(){},e}(a.Component);e.default=c},740:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.GameReStartButton=e.GameStartButton=e.QuestionInput=e.QuestionWord=e.TimerHeader=void 0;var r=n(130);Object.defineProperty(e,"TimerHeader",{enumerable:!0,get:function(){return r.default}});var o=n(3);Object.defineProperty(e,"QuestionWord",{enumerable:!0,get:function(){return o.default}});var i=n(8);Object.defineProperty(e,"QuestionInput",{enumerable:!0,get:function(){return i.default}});var a=n(991);Object.defineProperty(e,"GameStartButton",{enumerable:!0,get:function(){return a.default}});var s=n(187);Object.defineProperty(e,"GameReStartButton",{enumerable:!0,get:function(){return s.default}})},887:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.ViewModel=e.Component=void 0;e.Component=function(){};var n=function(){function t(){var t=this;this.setObserverCallback=function(e){t.observerCallback=e}}return t.prototype.update=function(t){this.observerCallback&&this.observerCallback(t)},t}();e.ViewModel=n},607:(t,e,n)=>{new(n(178).default)({$target:document.querySelector("#App")})},454:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0});var n={get:function(t){return fetch(t).then((function(t){return t.json()}))}};e.default=n},86:function(t,e,n){var r=this&&this.__createBinding||(Object.create?function(t,e,n,r){void 0===r&&(r=n),Object.defineProperty(t,r,{enumerable:!0,get:function(){return e[n]}})}:function(t,e,n,r){void 0===r&&(r=n),t[r]=e[n]}),o=this&&this.__exportStar||function(t,e){for(var n in t)"default"===n||Object.prototype.hasOwnProperty.call(e,n)||r(e,t,n)};Object.defineProperty(e,"__esModule",{value:!0}),e.router=e.store=e.httpClient=void 0;var i=n(454);Object.defineProperty(e,"httpClient",{enumerable:!0,get:function(){return i.default}});var a=n(401);Object.defineProperty(e,"store",{enumerable:!0,get:function(){return a.default}});var s=n(713);Object.defineProperty(e,"router",{enumerable:!0,get:function(){return s.default}}),o(n(532),e)},532:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.navigationToResultPage=e.navigationToHomePage=e.navigator=void 0;var r=n(713);e.navigator={push:function(t){history.pushState(null,null,t)}};var o=function(t){var n=r.default.isHash()?t.replace("/","#"):t;e.navigator.push(n),r.default.check()};e.navigationToHomePage=function(){return o("/")},e.navigationToResultPage=function(){return o("/result")}},713:function(t,e){var n=this&&this.__assign||function(){return(n=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var r={rootEl:null,routes:[],failPage:null,hash:!1},o={config:function(t){r=n({},t)},isHash:function(){return r.hash},check:function(){var t=r.hash?window.location.hash.replace("#","/"):window.location.pathname,e=r.routes.filter((function(e){return e.path===t}));r.rootEl.innerHTML="",e.length?new e[0].component(r.rootEl):new r.failPage(r.rootEl)}};window.addEventListener("popstate",o.check),window.addEventListener("DOMContentLoaded",o.check),e.default=o},401:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0});var n=localStorage;e.default=n},460:function(t,e,n){var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),i=this&&this.__assign||function(){return(i=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var a=n(887),s=n(740);n(832);var u=n(451),c=function(t){function e(e){var n=t.call(this)||this;n.state={score:0,remainingTime:0,guessWord:"",status:"fetching"},n.$target=e,n.vm=new u.HomePageViewModel,n.vm.setObserverCallback((function(t){n.setState(t)})),n.handleInputChange=n.handleInputChange.bind(n),n.handleButtonClick=n.handleButtonClick.bind(n),n.setState=n.setState.bind(n),n.$container=document.createElement("div"),n.$container.classList.add("home-container"),e.appendChild(n.$container);var r=new s.TimerHeader({$target:n.$container});n.$header=r;var o=document.createElement("div");o.classList.add("home-board"),n.$container.appendChild(o);var i=new s.QuestionWord({$target:o,text:"Waiting..."});n.$content=i;var a=new s.QuestionInput({$target:o,placeHolder:"입력",onEnter:n.handleInputChange});n.$input=a;var c=new s.GameStartButton({$target:o,onButtonClick:n.handleButtonClick});return n.$gameButton=c,n}return o(e,t),e.prototype.handleButtonClick=function(){"playing"===this.state.status?this.vm.clearGame():(this.vm.startGame(),this.$input.focus())},e.prototype.handleInputChange=function(t){var e=t.target.value;this.vm.enterUserInput(e),this.$input.setState({value:""})},e.prototype.setState=function(t){this.state=i({},t),this.$header.setState({time:t.remainingTime,score:t.score}),this.$content.setState({text:"playing"===t.status?this.state.guessWord:"문제 단어"}),this.$gameButton.setState({waiting:"fetching"===t.status||"waiting"===t.status})},e}(a.Component);e.default=c},606:function(t,e,n){var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=n(887),a=n(740);n(980);var s=n(451),u=function(t){function e(e){var n=t.call(this)||this;return n._handleOnClick=n._handleOnClick.bind(n),n.vm=new s.ResultPageViewModel,n.vm.state.error||(n.$el=document.createElement("div"),n.$el.classList.add("result-root"),e.appendChild(n.$el),n.$result=document.createElement("div"),n.$result.classList.add("result-container"),n.$el.appendChild(n.$result),n.$button=new a.GameReStartButton({$target:n.$el,onClick:n._handleOnClick}),n.render()),n}return o(e,t),e.prototype._handleOnClick=function(){this.vm.goHomePage()},e.prototype.render=function(){this.$result.innerHTML='\n      <div class="result-success"> Mission Complete! </div>\n      <div class="result-score"> 당신의 점수는 '+this.vm.state.score+'점입니다. </div>\n      <div class="result-avg-time"> 단어당 평균 답변 시간은 '+this.vm.state.avg+"초 입니다.  </div>\n    "},e}(i.Component);e.default=u},905:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.ResultPage=e.HomePage=void 0;var r=n(460);Object.defineProperty(e,"HomePage",{enumerable:!0,get:function(){return r.default}});var o=n(606);Object.defineProperty(e,"ResultPage",{enumerable:!0,get:function(){return o.default}})},999:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.wordService=e.resultService=void 0;var r=n(588);Object.defineProperty(e,"resultService",{enumerable:!0,get:function(){return r.default}});var o=n(417);Object.defineProperty(e,"wordService",{enumerable:!0,get:function(){return o.default}})},588:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0});var r=n(86),o={getResult:function(){try{var t=r.store.getItem("result");return t?JSON.parse(t):null}catch(t){return null}},setResult:function(t){return r.store.setItem("result",JSON.stringify(t))}};e.default=o},417:function(t,e,n){var r=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function a(t){try{u(r.next(t))}catch(t){i(t)}}function s(t){try{u(r.throw(t))}catch(t){i(t)}}function u(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,s)}u((r=r.apply(t,e||[])).next())}))},o=this&&this.__generator||function(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};Object.defineProperty(e,"__esModule",{value:!0});var i=n(86),a={getAll:function(){return r(void 0,void 0,void 0,(function(){return o(this,(function(t){switch(t.label){case 0:return[4,i.httpClient.get("https://my-json-server.typicode.com/kakaopay-fe/resources/words")];case 1:return[2,t.sent()]}}))}))}};e.default=a},259:function(t,e,n){var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),i=this&&this.__assign||function(){return(i=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},a=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function a(t){try{u(r.next(t))}catch(t){i(t)}}function s(t){try{u(r.throw(t))}catch(t){i(t)}}function u(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,s)}u((r=r.apply(t,e||[])).next())}))},s=this&&this.__generator||function(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};Object.defineProperty(e,"__esModule",{value:!0});var u=n(887),c=n(86),l=n(999);function p(t){for(var e=0,n=0;n<t.length;n++)e+=t[n];return Math.floor(e/t.length)}var f=function(t){function e(){var e=t.call(this)||this;return e.timer=null,e.state={score:0,remainingTime:0,wordList:[],currentIdx:0,status:"fetching",userGuessTimeList:[],guessTime:0},e._fetchWord(),e}return o(e,t),e.prototype.enterUserInput=function(t){var e=this.state.currentIdx;t===this.state.wordList[e].text&&(this._wordSuccess(),this._nextWord())},e.prototype.startGame=function(){if(0==this.state.wordList.length)return alert("서버에서 단어 받아오는데 실패... 새로고침해주세요."),void(this.state=i(i({},this.state),{status:"error"}));this.state=i(i({},this.state),{remainingTime:this.state.wordList[this.state.currentIdx].second,score:this.state.wordList.length,guessTime:(new Date).getTime(),status:"playing"}),this._update(),this._startTimer()},e.prototype.clearGame=function(){this.state=i(i({},this.state),{status:"waiting",score:this.state.wordList.length,remainingTime:0,currentIdx:0}),clearInterval(this.timer),this._update()},e.prototype.getState=function(){return this.state},e.prototype._fetchWord=function(){return a(this,void 0,void 0,(function(){var t;return s(this,(function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),[4,l.wordService.getAll()];case 1:return t=e.sent(),this.state=i(i({},this.state),{score:t.length,wordList:t,currentIdx:0}),this.update({score:0,remainingTime:0,guessWord:"",status:"waiting"}),[3,3];case 2:return e.sent(),[3,3];case 3:return[2]}}))}))},e.prototype._update=function(){this.update({score:this.state.score,remainingTime:this.state.remainingTime,guessWord:this.state.wordList[this.state.currentIdx].text,status:this.state.status})},e.prototype._minusScore=function(){this.state=i(i({},this.state),{score:this.state.score-1})},e.prototype._wordSuccess=function(){var t=(new Date).getTime();this.state=i(i({},this.state),{userGuessTimeList:this.state.userGuessTimeList.concat(Math.floor((t-this.state.guessTime)/1e3))})},e.prototype._startTimer=function(){var t=this;clearInterval(this.timer),this.timer=setInterval((function(){if(!t.state.remainingTime)return t._minusScore(),void t._nextWord();var e=t.state.remainingTime-1;t.state=i(i({},t.state),{remainingTime:e}),t._update()}),1e3)},e.prototype._nextWord=function(){var t=this.state.currentIdx+1,e=(new Date).getTime();if(t===this.state.wordList.length)return clearInterval(this.timer),l.resultService.setResult({score:this.state.score,avg:p(this.state.userGuessTimeList)||0}),void c.navigationToResultPage();this.state=i(i({},this.state),{remainingTime:this.state.wordList[t].second,guessTime:e,currentIdx:t}),this._update()},e}(u.ViewModel);e.default=f},451:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.ResultPageViewModel=e.HomePageViewModel=void 0;var r=n(259);Object.defineProperty(e,"HomePageViewModel",{enumerable:!0,get:function(){return r.default}});var o=n(145);Object.defineProperty(e,"ResultPageViewModel",{enumerable:!0,get:function(){return o.default}})},145:function(t,e,n){var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=n(887),a=n(86),s=n(999),u=function(t){function e(){var e=t.call(this)||this;e.state={score:0,avg:0,error:!1};var n=s.resultService.getResult();return n?(e.state={score:n.score,avg:n.avg,error:!1},e):(e.state.error=!0,alert("플레이를 해주세요."),e.goHomePage(),e)}return o(e,t),e.prototype.goHomePage=function(){a.navigationToHomePage()},e}(i.ViewModel);e.default=u}},e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={exports:{}};return t[r].call(o.exports,o,o.exports,n),o.exports}n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n(607)})();