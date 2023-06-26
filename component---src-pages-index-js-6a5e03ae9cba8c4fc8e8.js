/*! For license information please see component---src-pages-index-js-6a5e03ae9cba8c4fc8e8.js.LICENSE.txt */
(self.webpackChunkresumeapp=self.webpackChunkresumeapp||[]).push([[678],{4184:function(e,t){var n;!function(){"use strict";var a={}.hasOwnProperty;function l(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n)&&n.length){var o=l.apply(null,n);o&&e.push(o)}else if("object"===r)for(var s in n)a.call(n,s)&&n[s]&&e.push(s)}}return e.join(" ")}e.exports?(l.default=l,e.exports=l):void 0===(n=function(){return l}.apply(t,[]))||(e.exports=n)}()},1349:function(e){e.exports={siteTitle:"Resume | Sathishkumar Krishnan",manifestName:"Resume",manifestShortName:"Landing",manifestStartUrl:"/",manifestBackgroundColor:"#663399",manifestThemeColor:"#663399",manifestDisplay:"standalone",manifestIcon:"src/assets/img/website-icon.png",pathPrefix:"/personal/",firstName:"Sathishkumar ",lastName:"Krishnan",socialLinks:[{icon:"fa-github",name:"Github",url:"https://github.com/satskrishnan"},{icon:"fa-linkedin-in",name:"Linkedin",url:"https://linkedin.com/in/sathishkr/"},{icon:"fa-twitter",name:"Twitter",url:"https://twitter.com/sathishkr"},{icon:"fa-facebook-f",name:"Facebook",url:"https://facebook.com/sathishvt"}],email:"sathishkrishnan@digisco.dev",phone:"+1 5879734255",address:"Calgary, Canada"}},6973:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var a=n(7294),l=n(3374),r=n(7326),o=n(4578),s=n(9986),i=n(523),c=n.n(i);const m=e=>e.children;var u=function(e){function t(){var t;return(t=e.call(this)||this).handleClick=t.handleClick.bind((0,r.Z)(t)),t}(0,o.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){c().polyfill()},n.handleClick=function(e){e.preventDefault();let t=0,n=!0;const{type:a,element:l,offset:r,timeout:o}=this.props;if(a&&l)switch(a){case"class":t=document.getElementsByClassName(l)[0],n=!!t;break;case"id":t=document.getElementById(l),n=!!t}n?this.scrollTo(t,r,o):console.log("Element not found: "+l)},n.scrollTo=function(e,t,n){void 0===t&&(t=0),void 0===n&&(n=null);const a=e?e.getBoundingClientRect().top+window.pageYOffset:0;n?setTimeout((()=>{window.scroll({top:a+t,left:0,behavior:"smooth"})}),n):window.scroll({top:a+t,left:0,behavior:"smooth"})},n.render=function(){return a.createElement(m,null,"object"==typeof this.props.children?a.cloneElement(this.props.children,{onClick:this.handleClick}):a.createElement("span",{onClick:this.handleClick},this.props.children))},t}(a.Component),f=n.p+"static/profile-659f0ceabd146ec5a8d0b301e7833ce9.jpg",p=n(1349),d=n.n(p);var h=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={tabs:[{content:"About",href:"about"},{content:"Experience",href:"experience"},{content:"Education",href:"education"},{content:"Skills",href:"skills"},{content:"Interests",href:"interests"},{content:"Awards",href:"awards"}],isCollapsed:!0},n.toggleNavbar=n.toggleNavbar.bind((0,r.Z)(n)),n}(0,o.Z)(t,e);var n=t.prototype;return n.toggleNavbar=function(){this.setState({isCollapsed:!this.state.isCollapsed})},n.render=function(){const{tabs:e,isCollapsed:t}=this.state;return a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary fixed-top",id:"sideNav"},a.createElement("a",{className:"navbar-brand",href:"#about"},a.createElement("span",{className:"d-block d-lg-none"},d().firstName," ",d().lastName),a.createElement("span",{className:"d-none d-lg-block"},a.createElement("img",{className:"img-fluid img-profile rounded-circle mx-auto mb-2",src:f,alt:""}))),a.createElement("button",{className:"navbar-toggler navbar-toggler-right "+(t?"collapsed":""),type:"button","data-toggle":"collapse","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",onClick:this.toggleNavbar},a.createElement("span",{className:"navbar-toggler-icon"})),a.createElement("div",{className:"collapse navbar-collapse "+(t?"":"show"),id:"navbarSupportedContent"},a.createElement(s.Z,{items:e.map((e=>e.href)),currentClassName:"active",offset:-300,className:"navbar-nav"},e.map(((e,t)=>{const{href:n,content:l}=e;return a.createElement("li",{className:"nav-item",key:n},a.createElement(u,{type:"id",element:n},a.createElement("a",{className:"nav-link",href:"#"+n},l)))})))))},t}(a.Component);var v=()=>a.createElement(l.Z,null,a.createElement(h,null),a.createElement("div",{className:"container-fluid p-0"},a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"about"},a.createElement("div",{className:"w-100"},a.createElement("h1",{className:"mb-0"},d().firstName,d().lastName),a.createElement("div",{className:"subheading mb-5"},d().address," · ",d().phone," ·",a.createElement("a",{href:"mailto:"+d().email},d().email)),a.createElement("p",{className:"lead mb-5"},"I'm a Finacle Technical Consultant with more than 19+ Years of Experience in Banking Product Consulting, Implementation,  Development and Production Support."),a.createElement("div",{className:"social-icons"},d().socialLinks.map((e=>{const{icon:t,url:n}=e;return a.createElement("a",{key:n,href:n},a.createElement("i",{className:"fab "+t}))}))))),a.createElement("hr",{className:"m-0"}),a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex justify-content-center",id:"experience"},a.createElement("div",{className:"w-100"},a.createElement("h2",{className:"mb-5"},"Experience"),a.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},a.createElement("div",{className:"resume-content"},a.createElement("h3",{className:"mb-0"},"Principal Consultant"),a.createElement("div",{className:"subheading mb-3"},"Edgeverve"),a.createElement("p",null,"As a presales technical consultant, I work on an individual role, primarily taking care of technical aspects on RFI/RFP, Technology and Architecture demo, and POC lead.",a.createElement("br",null),a.createElement("br",null),"For more than a decade in Edgeverve (Infosys), I've played varied roles across the different teams as Solution/Integration Architect, Presales consultant, Developer, and the Team lead.",a.createElement("br",null),a.createElement("br",null),"Worked closely with Product teams in adapting newer technical components onto the Presales team. I've also successfully deployed these technical components and carried POC/demo to the clients.",a.createElement("br",null),a.createElement("br",null),"I've worked as an Integration Architect for Finacle Implementation in a Tier-1 Bank in the USA. Helped the team to quickly complete integration delivery, which helped obtain a further implementation of Finacle across different solutions and geographies.",a.createElement("br",null),a.createElement("br",null),"Domain Knowledge: Retail Deposits, Unsecured Personal Lending")),a.createElement("div",{className:"resume-date text-md-right"},a.createElement("span",{className:"text-primary"},"November 2009 - Present"))),a.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},a.createElement("div",{className:"resume-content"},a.createElement("h3",{className:"mb-0"},"Consultant"),a.createElement("div",{className:"subheading mb-3"},"Oracle Financials Services Software Ltd"),a.createElement("p",null,"I worked as a developer in the Flexcube Branch Web Application Module for the US market. I have developed Combined Deposit, IRA & Statements for the Branch Module.",a.createElement("br",null),a.createElement("br",null),"Involved in the Development, Implementation & Post Live Support for First Investment Bank, Bulgaria.",a.createElement("br",null),a.createElement("br",null),"I have also handled support for Euro Bank EFG from the regional support in Athens.")),a.createElement("div",{className:"resume-date text-md-right"},a.createElement("span",{className:"text-primary"},"August 2005 - November 2009"))),a.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},a.createElement("div",{className:"resume-content"},a.createElement("h3",{className:"mb-0"},"Software Engineer"),a.createElement("div",{className:"subheading mb-3"},"Deutsche Software Limited"),a.createElement("p",null,"I worked as part of the Production Management Facilities and handled multiple support projects for the Deutsche Bank Investment Banking Operation.")),a.createElement("div",{className:"resume-date text-md-right"},a.createElement("span",{className:"text-primary"},"November 2003 - August 2005"))))),a.createElement("hr",{className:"m-0"}),a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"education"},a.createElement("div",{className:"w-100"},a.createElement("h2",{className:"mb-5"},"Education"),a.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},a.createElement("div",{className:"resume-content"},a.createElement("h3",{className:"mb-0"},"RVS College of Engineering & Technology"),a.createElement("div",{className:"subheading mb-3"},"Madurai Kamaraj University"),a.createElement("div",{className:"subheading mb-3"},"Bachelor of Engineering"),a.createElement("div",null,"Computer Science"),a.createElement("p",null,"First Class - Distinction")),a.createElement("div",{className:"resume-date text-md-right"},a.createElement("span",{className:"text-primary"},"Jun 1999 - May 2003"))))),a.createElement("hr",{className:"m-0"}),a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"skills"},a.createElement("div",{className:"w-100"},a.createElement("h2",{className:"mb-5"},"Technical Skills"),a.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},a.createElement("div",{className:"resume-content"},a.createElement("h3",{className:"mb-0"},"Core Banking Platform"),a.createElement("br",null),a.createElement("div",{className:"subheading mb-3"},"Finacle Universal Banking Solution"),a.createElement("div",null,"Finacle Architecture & Technology, Finacle Integration Platform, Finacle Extensibility, OECloud, Containerization, Deployment"))),a.createElement("div",{className:"subheading mb-3"},"Programming Languages & Tools"),a.createElement("ul",{className:"list-inline dev-icons"},a.createElement("li",{className:"list-inline-item"},a.createElement("i",{className:"fab fa-docker"})),a.createElement("li",{className:"list-inline-item"},a.createElement("i",{class:"fas fa-dharmachakra"})),a.createElement("li",{className:"list-inline-item"},a.createElement("i",{className:"fab fa-java"})),a.createElement("li",{className:"list-inline-item"},a.createElement("i",{className:"fab fa-jenkins"})),a.createElement("li",{className:"list-inline-item"},a.createElement("i",{className:"fab fa-aws"})),a.createElement("li",{className:"list-inline-item"},a.createElement("i",{className:"fab fa-node-js"})),a.createElement("li",{className:"list-inline-item"},a.createElement("i",{className:"fab fa-github"})),a.createElement("li",{className:"list-inline-item"},a.createElement("i",{className:"fab fa-npm"}))))),a.createElement("hr",{className:"m-0"}),a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"interests"},a.createElement("div",{className:"w-100"},a.createElement("h2",{className:"mb-5"},"Interests"),a.createElement("p",null,"I enjoy exploring newer technologies, learn, and try hands-on. I like attending technology meet-ups and meeting new personalities. No-code and Generative AI are my current interests."),a.createElement("p",{className:"mb-0"},"My personal site is developed using the Gatsby resume template and deployed using Github Pages. I also deployed another personal site, developed using the Gatsby resume cms template, and deployed in vercel.    ",a.createElement("a",{href:"https://sathishkr.com/"},"Personal Site.")),a.createElement("p",{className:"mb-0"},a.createElement("br",null),"Indoors, I love playing cricket, PS4 with my two boys (9 & 17), cooking, and movies."))),a.createElement("hr",{className:"m-0"}),a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"awards"},a.createElement("div",{className:"w-100"},a.createElement("h2",{className:"mb-5"},"Awards & Certifications"),a.createElement("ul",{className:"fa-ul mb-0"},a.createElement("li",null,a.createElement("i",{className:"fa-li fa fa-certificate text-warning"}),"AWS Certified Cloud Practitioner"),a.createElement("li",null,a.createElement("i",{className:"fa-li fa fa-certificate text-warning"}),"Microsoft Certified - Azure Fundamentals"),a.createElement("li",null,a.createElement("i",{className:"fa-li fa fa-certificate text-warning"}),"Oracle Cloud Infrastructure Foundations"),a.createElement("li",null,a.createElement("i",{className:"fa-li fa fa-certificate text-warning"}),"Oracle Cloud Architect Associate"),a.createElement("li",null,a.createElement("i",{className:"fa-li fa fa-certificate text-warning"}),"Google Cloud Digital Leader."),a.createElement("li",null,a.createElement("i",{className:"fa-li fa fa-award text-warning"}),"Finacle GEM  - Individual Performance Award - 2011"),a.createElement("li",null,a.createElement("i",{className:"fa-li fa fa-medal text-warning"}),"Finacle Sales Award - Cross Sell Champion - 2017"),a.createElement("li",null,a.createElement("i",{className:"fa-li fa fa-trophy text-warning"}),"Go Gitters - Infosys Automation Hackathon Winner (Openshift - Istio)"),a.createElement("li",null,a.createElement("i",{className:"fa-li fa fa-trophy text-warning"}),"Finacle Acer Award - Technology Excellence (Gold) - 2023"),a.createElement("li",null,a.createElement("i",{className:"fa-li fa fa-trophy text-warning"}),"Finacle Sales Award - 2023"),a.createElement("li",null,a.createElement("i",{className:"fa-li fa fa-award text-warning"}),"Flexcube - Best Employee - Individual Performance Award - 2006"),a.createElement("li",null,a.createElement("i",{className:"fa-li fa fa-award text-warning"}),"Red Hat Ascend Champion"))))))},9986:function(e,t,n){"use strict";var a=n(4836);t.Z=void 0;var l=a(n(434)),r=a(n(8416)),o=a(n(861)),s=a(n(6690)),i=a(n(4993)),c=a(n(3808)),m=a(n(6115)),u=a(n(9728)),f=a(n(1655)),p=a(n(5697)),d=a(n(7294)),h=a(n(4184)),v=a(n(2502));var g=function(e){function t(e){var n;return(0,s.default)(this,t),(n=(0,i.default)(this,(0,c.default)(t).call(this,e))).state={targetItems:[],inViewState:[],isScrolledPast:[]},n._handleSpy=n._handleSpy.bind((0,m.default)(n)),n}return(0,f.default)(t,e),(0,u.default)(t,null,[{key:"propTypes",get:function(){return{items:p.default.arrayOf(p.default.string).isRequired,currentClassName:p.default.string.isRequired,scrolledPastClassName:p.default.string,style:p.default.object,componentTag:p.default.oneOfType([p.default.string,p.default.elementType]),offset:p.default.number,rootEl:p.default.string,onUpdate:p.default.func}}},{key:"defaultProps",get:function(){return{items:[],currentClassName:"",style:{},componentTag:"ul",offset:0,onUpdate:function(){}}}}]),(0,u.default)(t,[{key:"_initSpyTarget",value:function(e){return e.map((function(e){return document.getElementById(e)}))}},{key:"_fillArray",value:function(e,t){for(var n=[],a=0,l=e.length;a<l;a++)n[a]=t;return n}},{key:"_isScrolled",value:function(){return this._getScrollDimension().scrollTop>0}},{key:"_getScrollDimension",value:function(){var e=document,t=this.props.rootEl;return{scrollTop:t?e.querySelector(t).scrollTop:e.documentElement.scrollTop||e.body.parentNode.scrollTop||e.body.scrollTop,scrollHeight:t?e.querySelector(t).scrollHeight:e.documentElement.scrollHeight||e.body.parentNode.scrollHeight||e.body.scrollHeight}}},{key:"_getElemsViewState",value:function(e){for(var t=[],n=[],a=[],l=e||this.state.targetItems,r=!1,s=0,i=l.length;s<i;s++){var c=l[s],m=!r&&this._isInView(c);m?(r=!0,t.push(c)):n.push(c);var u=s===i-1,f=this._isScrolled();this._isAtBottom()&&this._isInView(c)&&!m&&u&&f&&(n.pop(),n.push.apply(n,(0,o.default)(t)),t=[c],a=this._fillArray(a,!1),m=!0),a.push(m)}return{inView:t,outView:n,viewStatusList:a,scrolledPast:this.props.scrolledPastClassName&&this._getScrolledPast(a)}}},{key:"_isInView",value:function(e){if(!e)return!1;var t,n=this.props,a=n.rootEl,l=n.offset;a&&(t=document.querySelector(a).getBoundingClientRect());var r=e.getBoundingClientRect(),o=a?t.height:window.innerHeight,s=this._getScrollDimension().scrollTop,i=s+o,c=a?r.top+s-t.top+l:r.top+s+l,m=c+e.offsetHeight;return c<i&&m>s}},{key:"_isAtBottom",value:function(){var e=this.props.rootEl,t=this._getScrollDimension(),n=t.scrollTop,a=t.scrollHeight;return n+(e?document.querySelector(e).getBoundingClientRect().height:window.innerHeight)>=a}},{key:"_getScrolledPast",value:function(e){if(!e.some((function(e){return e})))return e;var t=!1;return e.map((function(e){return e&&!t?(t=!0,!1):!t}))}},{key:"_spy",value:function(e){var t=this,n=this._getElemsViewState(e),a=this.state.inViewState;this.setState({inViewState:n.viewStatusList,isScrolledPast:n.scrolledPast},(function(){t._update(a)}))}},{key:"_update",value:function(e){var t,n;(t=this.state.inViewState,n=e,t.length===n.length&&t.every((function(e,t){return e===n[t]})))||this.props.onUpdate(this.state.targetItems[this.state.inViewState.indexOf(!0)])}},{key:"_handleSpy",value:function(){(0,v.default)(this._spy(),100)}},{key:"_initFromProps",value:function(){var e=this._initSpyTarget(this.props.items);this.setState({targetItems:e}),this._spy(e)}},{key:"offEvent",value:function(){(this.props.rootEl?document.querySelector(this.props.rootEl):window).removeEventListener("scroll",this._handleSpy)}},{key:"onEvent",value:function(){(this.props.rootEl?document.querySelector(this.props.rootEl):window).addEventListener("scroll",this._handleSpy)}},{key:"componentDidMount",value:function(){this._initFromProps(),this.onEvent()}},{key:"componentWillUnmount",value:function(){this.offEvent()}},{key:"UNSAFE_componentWillReceiveProps",value:function(){this._initFromProps()}},{key:"render",value:function(){var e=this,t=this.props.componentTag,n=this.props,a=n.children,o=n.className,s=n.scrolledPastClassName,i=n.style,c=0,m=d.default.Children.map(a,(function(t,n){var a;if(!t)return null;var o=t.type,i=s&&e.state.isScrolledPast[n],m=(0,h.default)((a={},(0,r.default)(a,"".concat(t.props.className),t.props.className),(0,r.default)(a,"".concat(e.props.currentClassName),e.state.inViewState[n]),(0,r.default)(a,"".concat(e.props.scrolledPastClassName),i),a));return d.default.createElement(o,(0,l.default)({},t.props,{className:m,key:c++}),t.props.children)})),u=(0,h.default)((0,r.default)({},"".concat(o),o));return d.default.createElement(t,{className:u,style:i},m)}}]),t}(d.default.Component);t.Z=g},2502:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){var t,n,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;return function(){var l=+new Date;!!t&&l<t+a?(clearTimeout(n),n=setTimeout((function(){t=l,e()}),a)):(t=l,e())}};t.default=n},523:function(e){!function(){"use strict";e.exports={polyfill:function(){var e=window,t=document;if(!("scrollBehavior"in t.documentElement.style)||!0===e.__forceSmoothScrollPolyfill__){var n,a=e.HTMLElement||e.Element,l=468,r={scroll:e.scroll||e.scrollTo,scrollBy:e.scrollBy,elementScroll:a.prototype.scroll||i,scrollIntoView:a.prototype.scrollIntoView},o=e.performance&&e.performance.now?e.performance.now.bind(e.performance):Date.now,s=(n=e.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(n)?1:0);e.scroll=e.scrollTo=function(){void 0!==arguments[0]&&(!0!==c(arguments[0])?d.call(e,t.body,void 0!==arguments[0].left?~~arguments[0].left:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:e.scrollY||e.pageYOffset):r.scroll.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:e.scrollY||e.pageYOffset))},e.scrollBy=function(){void 0!==arguments[0]&&(c(arguments[0])?r.scrollBy.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):d.call(e,t.body,~~arguments[0].left+(e.scrollX||e.pageXOffset),~~arguments[0].top+(e.scrollY||e.pageYOffset)))},a.prototype.scroll=a.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==c(arguments[0])){var e=arguments[0].left,t=arguments[0].top;d.call(this,this,void 0===e?this.scrollLeft:~~e,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");r.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},a.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==c(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):r.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},a.prototype.scrollIntoView=function(){if(!0!==c(arguments[0])){var n=function(e){for(;e!==t.body&&!1===f(e);)e=e.parentNode||e.host;return e}(this),a=n.getBoundingClientRect(),l=this.getBoundingClientRect();n!==t.body?(d.call(this,n,n.scrollLeft+l.left-a.left,n.scrollTop+l.top-a.top),"fixed"!==e.getComputedStyle(n).position&&e.scrollBy({left:a.left,top:a.top,behavior:"smooth"})):e.scrollBy({left:l.left,top:l.top,behavior:"smooth"})}else r.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function i(e,t){this.scrollLeft=e,this.scrollTop=t}function c(e){if(null===e||"object"!=typeof e||void 0===e.behavior||"auto"===e.behavior||"instant"===e.behavior)return!0;if("object"==typeof e&&"smooth"===e.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+e.behavior+" is not a valid value for enumeration ScrollBehavior.")}function m(e,t){return"Y"===t?e.clientHeight+s<e.scrollHeight:"X"===t?e.clientWidth+s<e.scrollWidth:void 0}function u(t,n){var a=e.getComputedStyle(t,null)["overflow"+n];return"auto"===a||"scroll"===a}function f(e){var t=m(e,"Y")&&u(e,"Y"),n=m(e,"X")&&u(e,"X");return t||n}function p(t){var n,a,r,s,i=(o()-t.startTime)/l;s=i=i>1?1:i,n=.5*(1-Math.cos(Math.PI*s)),a=t.startX+(t.x-t.startX)*n,r=t.startY+(t.y-t.startY)*n,t.method.call(t.scrollable,a,r),a===t.x&&r===t.y||e.requestAnimationFrame(p.bind(e,t))}function d(n,a,l){var s,c,m,u,f=o();n===t.body?(s=e,c=e.scrollX||e.pageXOffset,m=e.scrollY||e.pageYOffset,u=r.scroll):(s=n,c=n.scrollLeft,m=n.scrollTop,u=i),p({scrollable:s,method:u,startTime:f,startX:c,startY:m,x:a,y:l})}}}}()},3897:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a},e.exports.__esModule=!0,e.exports.default=e.exports},3405:function(e,t,n){var a=n(3897);e.exports=function(e){if(Array.isArray(e))return a(e)},e.exports.__esModule=!0,e.exports.default=e.exports},6690:function(e){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},e.exports.__esModule=!0,e.exports.default=e.exports},9728:function(e,t,n){var a=n(4062);function l(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,a(l.key),l)}}e.exports=function(e,t,n){return t&&l(e.prototype,t),n&&l(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e},e.exports.__esModule=!0,e.exports.default=e.exports},8416:function(e,t,n){var a=n(4062);e.exports=function(e,t,n){return(t=a(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.__esModule=!0,e.exports.default=e.exports},434:function(e){function t(){return e.exports=t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},e.exports.__esModule=!0,e.exports.default=e.exports,t.apply(this,arguments)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},3808:function(e){function t(n){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},e.exports.__esModule=!0,e.exports.default=e.exports,t(n)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},1655:function(e,t,n){var a=n(6015);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&a(e,t)},e.exports.__esModule=!0,e.exports.default=e.exports},9498:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},2281:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},4993:function(e,t,n){var a=n(8698).default,l=n(6115);e.exports=function(e,t){if(t&&("object"===a(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return l(e)},e.exports.__esModule=!0,e.exports.default=e.exports},861:function(e,t,n){var a=n(3405),l=n(9498),r=n(6116),o=n(2281);e.exports=function(e){return a(e)||l(e)||r(e)||o()},e.exports.__esModule=!0,e.exports.default=e.exports},5036:function(e,t,n){var a=n(8698).default;e.exports=function(e,t){if("object"!==a(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var l=n.call(e,t||"default");if("object"!==a(l))return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)},e.exports.__esModule=!0,e.exports.default=e.exports},4062:function(e,t,n){var a=n(8698).default,l=n(5036);e.exports=function(e){var t=l(e,"string");return"symbol"===a(t)?t:String(t)},e.exports.__esModule=!0,e.exports.default=e.exports},8698:function(e){function t(n){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(n)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},6116:function(e,t,n){var a=n(3897);e.exports=function(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=component---src-pages-index-js-6a5e03ae9cba8c4fc8e8.js.map