(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{186:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(19),o=a(197),s=a(9),l=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};t.a=function(e){var{isNavLink:t}=e,a=l(e,["isNavLink"]);const{to:i,href:u}=a,d=i||u,m=Object(o.a)(d),h=Object(n.useRef)(!1),f=t?c.c:c.b,b=s.a.canUseIntersectionObserver;let p;return Object(n.useEffect)(()=>(!b&&m&&window.docusaurus.prefetch(d),()=>{b&&p&&p.disconnect()}),[d,b,m]),d&&m&&!d.startsWith("#")?r.a.createElement(f,Object.assign({},a,{onMouseEnter:()=>{h.current||(window.docusaurus.preload(d),h.current=!0)},innerRef:e=>{var t,a;b&&e&&m&&(t=e,a=()=>{window.docusaurus.prefetch(d)},p=new window.IntersectionObserver(e=>{e.forEach(e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(p.unobserve(t),p.disconnect(),a())})}),p.observe(t))},to:d})):r.a.createElement("a",Object.assign({href:d},!m&&{target:"_blank",rel:"noopener noreferrer"},a))}},187:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},190:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(185),r=a(197);function c(e,{forcePrependBaseUrl:t=!1,absolute:a=!1}={}){const{siteConfig:{baseUrl:c="/",url:o}={}}=Object(n.a)();if(!e)return e;if(t)return c+e;if(!Object(r.a)(e))return e;const s=c+e.replace(/^\//,"");return a?o+s:s}},196:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(201),o=a(185),s=a(190),l=a(241);var i=()=>{const[e,t]=Object(n.useState)({}),a=Object(n.useCallback)((e,t)=>{try{localStorage.setItem("docusaurus.tab."+e,t)}catch(a){console.error(a)}},[]);return Object(n.useEffect)(()=>{try{const e={};for(let t=0;t<localStorage.length;t+=1){const a=localStorage.key(t);if(a.startsWith("docusaurus.tab.")){e[a.substring("docusaurus.tab.".length)]=localStorage.getItem(a)}}t(e)}catch(e){console.error(e)}},[]),{tabGroupChoices:e,setTabGroupChoices:(e,n)=>{t(t=>({...t,[e]:n})),a(e,n)}}};var u=()=>{const{siteConfig:{themeConfig:{announcementBar:{id:e}={}}}={}}=Object(o.a)(),[t,a]=Object(n.useState)(!0);return Object(n.useEffect)(()=>{if(!e)return;const t=localStorage.getItem("docusaurus.announcement.id"),n=e!==t;localStorage.setItem("docusaurus.announcement.id",e),n&&localStorage.setItem("docusaurus.announcement.dismiss",!1),(n||"false"===localStorage.getItem("docusaurus.announcement.dismiss"))&&a(!1)},[]),{isAnnouncementBarClosed:t,closeAnnouncementBar:()=>{localStorage.setItem("docusaurus.announcement.dismiss",!0),a(!0)}}},d=a(209);var m=function(e){const{tabGroupChoices:t,setTabGroupChoices:a}=i(),{isAnnouncementBarClosed:n,closeAnnouncementBar:c}=u();return r.a.createElement(d.a.Provider,{value:{tabGroupChoices:t,setTabGroupChoices:a,isAnnouncementBarClosed:n,closeAnnouncementBar:c}},e.children)},h=a(213),f=a(2),b=a(187),p=a(186),v=(a(13),a(211)),g=a(243),k=a(98),E=a.n(k);var O=({handleSearchBarToggle:e,isSearchBarExpanded:t})=>{const[c,s]=Object(n.useState)(!1),l=Object(n.useRef)(null),{siteConfig:i={}}=Object(o.a)(),{themeConfig:{algolia:u}}=i,d=Object(v.b)(),{navigateToSearchPage:m}=Object(g.a)();const h=(e=!0)=>{c||Promise.all([Promise.all([a.e(75),a.e(79)]).then(a.t.bind(null,1372,7)),a.e(50).then(a.t.bind(null,1373,7))]).then(([{default:t}])=>{s(!0),window.docsearch=t,function(e){window.docsearch({appId:u.appId,apiKey:u.apiKey,indexName:u.indexName,inputSelector:"#search_input_react",algoliaOptions:u.algoliaOptions,autocompleteOptions:{openOnFocus:!0,autoselect:!1,hint:!1,tabAutocomplete:!1},handleSelected:(e,t,a)=>{t.stopPropagation();const n=document.createElement("a");n.href=a.url;const r="#__docusaurus"===n.hash?""+n.pathname:`${n.pathname}${n.hash}`;d.push(r)}}),e&&l.current.focus()}(e)})},f=Object(n.useCallback)(()=>{h(),c&&l.current.focus(),e(!t)},[t]),p=Object(n.useCallback)(()=>{e(!t)},[t]),k=Object(n.useCallback)(e=>{const t="mouseover"!==e.type;h(t)}),O=Object(n.useCallback)(e=>{e.defaultPrevented||"Enter"!==e.key||m(e.target.value)});return r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("div",{className:E.a.searchWrapper},r.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:Object(b.a)(E.a.searchIconButton,{[E.a.searchIconButtonHidden]:t}),onClick:f,onKeyDown:f,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:Object(b.a)("navbar__search-input",E.a.searchInput,{[E.a.searchInputExpanded]:t}),onMouseOver:k,onFocus:k,onBlur:p,onKeyDown:O,ref:l})))},j=a(268),_=a.n(j),y=a(99),w=a.n(y);const C=()=>r.a.createElement("span",{className:Object(b.a)(w.a.toggle,w.a.moon)}),N=()=>r.a.createElement("span",{className:Object(b.a)(w.a.toggle,w.a.sun)});var S=function(e){const{isClient:t}=Object(o.a)();return r.a.createElement(_.a,Object(f.a)({disabled:!t,icons:{checked:r.a.createElement(C,null),unchecked:r.a.createElement(N,null)}},e))},T=a(244);var B=function(e){const[t,a]=Object(n.useState)(e);return Object(n.useEffect)(()=>{const e=()=>a(window.location.hash);return window.addEventListener("hashchange",e),()=>window.removeEventListener("hashchange",e)},[]),[t,a]},L=a(245);var x=e=>{const[t,a]=Object(n.useState)(!0),[r,c]=Object(n.useState)(!1),[o,s]=Object(n.useState)(0),[l,i]=Object(n.useState)(0),u=Object(n.useCallback)(e=>{null!==e&&i(e.getBoundingClientRect().height)},[]),d=Object(v.c)(),[m,h]=B(d.hash);return Object(L.a)(({scrollY:t})=>{if(!e)return;if(0===t&&a(!0),t<l)return;if(r)return c(!1),a(!1),void s(t);const n=document.documentElement.scrollHeight-l,i=window.innerHeight;o&&t>=o?a(!1):t+i<n&&a(!0),s(t)},[o,l]),Object(n.useEffect)(()=>{e&&(a(!0),h(d.hash))},[d]),Object(n.useEffect)(()=>{e&&m&&c(!0)},[m]),{navbarRef:u,isNavbarVisible:t}},P=a(246),I=a(247),M=a(248),D=a(100),A=a.n(D);function U({activeBasePath:e,activeBaseRegex:t,to:a,href:n,label:c,activeClassName:o="navbar__link--active",prependBaseUrlToHref:l,...i}){const u=Object(s.a)(a),d=Object(s.a)(e),m=Object(s.a)(n,{forcePrependBaseUrl:!0});return r.a.createElement(p.a,Object(f.a)({},n?{target:"_blank",rel:"noopener noreferrer",href:l?m:n}:{isNavLink:!0,activeClassName:o,to:u,...e||t?{isActive:(e,a)=>t?new RegExp(t).test(a.pathname):a.pathname.startsWith(d)}:null},i),c)}function X({items:e,position:t="right",className:a,...n}){const c=(e,t=!1)=>Object(b.a)({"navbar__item navbar__link":!t,dropdown__link:t},e);return e?r.a.createElement("div",{className:Object(b.a)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===t,"dropdown--right":"right"===t})},r.a.createElement(U,Object(f.a)({className:c(a)},n,{onClick:e=>e.preventDefault(),onKeyDown:e=>{"Enter"===e.key&&e.target.parentNode.classList.toggle("dropdown--show")}}),n.label),r.a.createElement("ul",{className:"dropdown__menu"},e.map(({className:e,...t},a)=>r.a.createElement("li",{key:a},r.a.createElement(U,Object(f.a)({activeClassName:"dropdown__link--active",className:c(e,!0)},t)))))):r.a.createElement(U,Object(f.a)({className:c(a)},n))}function F({items:e,position:t,className:a,...n}){const c=(e,t=!1)=>Object(b.a)("menu__link",{"menu__link--sublist":t},e);return e?r.a.createElement("li",{className:"menu__list-item"},r.a.createElement(U,Object(f.a)({className:c(a,!0)},n),n.label),r.a.createElement("ul",{className:"menu__list"},e.map(({className:e,...t},a)=>r.a.createElement("li",{className:"menu__list-item",key:a},r.a.createElement(U,Object(f.a)({activeClassName:"menu__link--active",className:c(e)},t,{onClick:n.onClick})))))):r.a.createElement("li",{className:"menu__list-item"},r.a.createElement(U,Object(f.a)({className:c(a)},n)))}var R=function(){const{siteConfig:{themeConfig:{navbar:{title:e,links:t=[],hideOnScroll:a=!1}={},disableDarkMode:c=!1}},isClient:s}=Object(o.a)(),[l,i]=Object(n.useState)(!1),[u,d]=Object(n.useState)(!1),{isDarkTheme:m,setLightTheme:h,setDarkTheme:v}=Object(T.a)(),{navbarRef:g,isNavbarVisible:k}=x(a),{logoLink:E,logoLinkProps:j,logoImageUrl:_,logoAlt:y}=Object(M.a)();Object(P.a)(l);const w=Object(n.useCallback)(()=>{i(!0)},[i]),C=Object(n.useCallback)(()=>{i(!1)},[i]),N=Object(n.useCallback)(e=>e.target.checked?v():h(),[h,v]),B=Object(I.a)();Object(n.useEffect)(()=>{B===I.b.desktop&&i(!1)},[B]);const{leftLinks:L,rightLinks:D}=function(e){return{leftLinks:e.filter(e=>{var t;return"left"===(null!==(t=e.position)&&void 0!==t?t:"right")}),rightLinks:e.filter(e=>{var t;return"right"===(null!==(t=e.position)&&void 0!==t?t:"right")})}}(t);return r.a.createElement("nav",{ref:g,className:Object(b.a)("navbar","navbar--light","navbar--fixed-top",{"navbar-sidebar--show":l,[A.a.navbarHideable]:a,[A.a.navbarHidden]:!k})},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},null!=t&&0!==t.length&&r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:w,onKeyDown:w},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement(p.a,Object(f.a)({className:"navbar__brand",to:E},j),null!=_&&r.a.createElement("img",{key:s,className:"navbar__logo",src:_,alt:y}),null!=e&&r.a.createElement("strong",{className:Object(b.a)("navbar__title",{[A.a.hideLogoText]:u})},e)),L.map((e,t)=>r.a.createElement(X,Object(f.a)({},e,{key:t})))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},D.map((e,t)=>r.a.createElement(X,Object(f.a)({},e,{key:t}))),!c&&r.a.createElement(S,{className:A.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:m,onChange:N}),r.a.createElement(O,{handleSearchBarToggle:d,isSearchBarExpanded:u}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:C}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(p.a,Object(f.a)({className:"navbar__brand",onClick:C,to:E},j),null!=_&&r.a.createElement("img",{key:s,className:"navbar__logo",src:_,alt:y}),null!=e&&r.a.createElement("strong",{className:"navbar__title"},e)),!c&&l&&r.a.createElement(S,{"aria-label":"Dark mode toggle in sidebar",checked:m,onChange:N})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},t.map((e,t)=>r.a.createElement(F,Object(f.a)({},e,{onClick:C,key:t}))))))))},H=a(101),G=a.n(H);function K({to:e,href:t,label:a,prependBaseUrlToHref:n,...c}){const o=Object(s.a)(e),l=Object(s.a)(t,{forcePrependBaseUrl:!0});return r.a.createElement(p.a,Object(f.a)({className:"footer__link-item"},t?{target:"_blank",rel:"noopener noreferrer",href:n?l:t}:{to:o},c),a)}const W=({url:e,alt:t})=>r.a.createElement("img",{className:"footer__logo",alt:t,src:e});var $=function(){const e=Object(o.a)(),{siteConfig:t={}}=e,{themeConfig:a={}}=t,{footer:n}=a,{copyright:c,links:l=[],logo:i={}}=n||{},u=Object(s.a)(i.src);return n?r.a.createElement("footer",{className:Object(b.a)("footer",{"footer--dark":"dark"===n.style})},r.a.createElement("div",{className:"container"},l&&l.length>0&&r.a.createElement("div",{className:"row footer__links"},l.map((e,t)=>r.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.a.createElement("ul",{className:"footer__items"},e.items.map((e,t)=>e.html?r.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(K,e)))):null))),(i||c)&&r.a.createElement("div",{className:"text--center"},i&&i.src&&r.a.createElement("div",{className:"margin-bottom--sm"},i.href?r.a.createElement("a",{href:i.href,target:"_blank",rel:"noopener noreferrer",className:G.a.footerLogoLink},r.a.createElement(W,{alt:i.alt,url:u})):r.a.createElement(W,{alt:i.alt,url:u})),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:c}})))):null};a(102);t.a=function(e){const{siteConfig:t={}}=Object(o.a)(),{favicon:a,title:n,themeConfig:{image:i},url:u}=t,{children:d,title:f,noFooter:b,description:p,image:v,keywords:g,permalink:k,version:E}=e,O=f?`${f} | ${n}`:n,j=v||i,_=Object(s.a)(j,{absolute:!0}),y=Object(s.a)(a);return r.a.createElement(l.a,null,r.a.createElement(m,null,r.a.createElement(c.a,null,r.a.createElement("html",{lang:"en"}),O&&r.a.createElement("title",null,O),O&&r.a.createElement("meta",{property:"og:title",content:O}),a&&r.a.createElement("link",{rel:"shortcut icon",href:y}),p&&r.a.createElement("meta",{name:"description",content:p}),p&&r.a.createElement("meta",{property:"og:description",content:p}),E&&r.a.createElement("meta",{name:"docsearch:version",content:E}),g&&g.length&&r.a.createElement("meta",{name:"keywords",content:g.join(",")}),j&&r.a.createElement("meta",{property:"og:image",content:_}),j&&r.a.createElement("meta",{property:"twitter:image",content:_}),j&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+O}),k&&r.a.createElement("meta",{property:"og:url",content:u+k}),k&&r.a.createElement("link",{rel:"canonical",href:u+k}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),r.a.createElement(h.a,null),r.a.createElement(R,null),r.a.createElement("div",{className:"main-wrapper"},d),!b&&r.a.createElement($,null)))}},197:function(e,t,a){"use strict";function n(e){return!1===/^(https?:|\/\/|mailto:|tel:)/.test(e)}a.d(t,"a",(function(){return n}))},208:function(e,t,a){"use strict";var n=a(0);const r=a.n(n).a.createContext({isDarkTheme:!1,setLightTheme:()=>{},setDarkTheme:()=>{}});t.a=r},209:function(e,t,a){"use strict";var n=a(0);const r=Object(n.createContext)({tabGroupChoices:{},setTabGroupChoices:()=>{},isAnnouncementBarClosed:!1,closeAnnouncementBar:()=>{}});t.a=r},210:function(e,t,a){"use strict";var n=a(0),r=a(209);t.a=function(){return Object(n.useContext)(r.a)}},211:function(e,t,a){"use strict";var n=a(19);a.d(t,"a",(function(){return n.d})),a.d(t,"b",(function(){return n.e})),a.d(t,"c",(function(){return n.f}))},213:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(185),o=a(210),s=a(97),l=a.n(s);t.a=function(){const{siteConfig:{themeConfig:{announcementBar:e={}}}={}}=Object(c.a)(),{content:t,backgroundColor:a,textColor:n}=e,{isAnnouncementBarClosed:s,closeAnnouncementBar:i}=Object(o.a)();return!t||s?null:r.a.createElement("div",{className:l.a.announcementBar,style:{backgroundColor:a,color:n},role:"banner"},r.a.createElement("div",{className:l.a.announcementBarContent,dangerouslySetInnerHTML:{__html:t}}),r.a.createElement("button",{type:"button",className:l.a.announcementBarClose,onClick:i,"aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7")))}},241:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(185);const o="",s="dark";var l=()=>{const{siteConfig:{themeConfig:{disableDarkMode:e}}={}}=Object(c.a)(),[t,a]=Object(n.useState)("undefined"!=typeof document?document.documentElement.getAttribute("data-theme"):o),r=Object(n.useCallback)(e=>{try{localStorage.setItem("theme",e)}catch(t){console.error(t)}},[a]),l=Object(n.useCallback)(()=>{a(o),r(o)},[]),i=Object(n.useCallback)(()=>{a(s),r(s)},[]);return Object(n.useEffect)(()=>{document.documentElement.setAttribute("data-theme",t)},[t]),Object(n.useEffect)(()=>{if(!e)try{const e=localStorage.getItem("theme");null!==e&&a(e)}catch(t){console.error(t)}},[a]),Object(n.useEffect)(()=>{e||window.matchMedia("(prefers-color-scheme: dark)").addListener(({matches:e})=>{a(e?s:o)})},[]),{isDarkTheme:t===s,setLightTheme:l,setDarkTheme:i}},i=a(208);t.a=function(e){const{isDarkTheme:t,setLightTheme:a,setDarkTheme:n}=l();return r.a.createElement(i.a.Provider,{value:{isDarkTheme:t,setLightTheme:a,setDarkTheme:n}},e.children)}},243:function(e,t,a){"use strict";var n=a(211),r=a(9),c=a(185);t.a=function(){const e=Object(n.b)(),t=Object(n.c)(),{siteConfig:{baseUrl:a}={}}=Object(c.a)();return{searchValue:r.a.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:a=>{const n=new URLSearchParams(t.search);a?n.set("q",a):n.delete("q"),e.replace({search:n.toString()})},navigateToSearchPage:t=>{e.push(`${a}search?q=${t}`)}}}},244:function(e,t,a){"use strict";var n=a(0),r=a(208);t.a=function(){return Object(n.useContext)(r.a)}},245:function(e,t,a){"use strict";var n=a(0),r=a(9);const c=()=>({scrollX:r.a.canUseDOM?window.pageXOffset:0,scrollY:r.a.canUseDOM?window.pageYOffset:0});t.a=(e,t=[])=>{const[a,r]=Object(n.useState)(c()),o=()=>{const t=c();r(t),e&&e(t)};return Object(n.useEffect)(()=>(window.addEventListener("scroll",o),()=>window.removeEventListener("scroll",o,{passive:!0})),t),a}},246:function(e,t,a){"use strict";var n=a(0);t.a=function(e=!0){Object(n.useEffect)(()=>(document.body.style.overflow=e?"hidden":"visible",()=>{document.body.style.overflow="visible"}),[e])}},247:function(e,t,a){"use strict";a.d(t,"b",(function(){return r}));var n=a(0);const r={desktop:"desktop",mobile:"mobile"};t.a=function(){const e="undefined"!=typeof window;function t(){if(e)return window.innerWidth>996?r.desktop:r.mobile}const[a,c]=Object(n.useState)(t);return Object(n.useEffect)(()=>{if(!e)return!1;function a(){c(t())}return window.addEventListener("resize",a),()=>window.removeEventListener("resize",a)},[]),a}},248:function(e,t,a){"use strict";var n=a(185),r=a(244),c=a(190),o=a(197);t.a=()=>{const{siteConfig:{themeConfig:{navbar:{logo:e={}}={}}}={}}=Object(n.a)(),{isDarkTheme:t}=Object(r.a)(),a=Object(c.a)(e.href||"/");let s={};e.target?s={target:e.target}:Object(o.a)(a)||(s={rel:"noopener noreferrer",target:"_blank"});const l=e.srcDark&&t?e.srcDark:e.src;return{logoLink:a,logoLinkProps:s,logoImageUrl:Object(c.a)(l),logoAlt:e.alt}}},268:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),c=a(0),o=m(c),s=m(a(214)),l=m(a(8)),i=m(a(269)),u=m(a(270)),d=a(271);function m(e){return e&&e.__esModule?e:{default:e}}var h=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleClick=a.handleClick.bind(a),a.handleTouchStart=a.handleTouchStart.bind(a),a.handleTouchMove=a.handleTouchMove.bind(a),a.handleTouchEnd=a.handleTouchEnd.bind(a),a.handleFocus=a.handleFocus.bind(a),a.handleBlur=a.handleBlur.bind(a),a.previouslyChecked=!(!e.checked&&!e.defaultChecked),a.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var a=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:a})}},{key:"handleTouchStart",value:function(e){this.startX=(0,d.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,d.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var a=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>a?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<a&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var a=this.props.icons;return a?void 0===a[e]?t.defaultProps.icons[e]:a[e]:null}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,r=(t.icons,function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["className","icons"])),c=(0,s.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},a);return o.default.createElement("div",{className:c,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},o.default.createElement("div",{className:"react-toggle-track"},o.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),o.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),o.default.createElement("div",{className:"react-toggle-thumb"}),o.default.createElement("input",n({},r,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(c.PureComponent);t.default=h,h.displayName="Toggle",h.defaultProps={icons:{checked:o.default.createElement(i.default,null),unchecked:o.default.createElement(u.default,null)}},h.propTypes={checked:l.default.bool,disabled:l.default.bool,defaultChecked:l.default.bool,onChange:l.default.func,onFocus:l.default.func,onBlur:l.default.func,className:l.default.string,name:l.default.string,value:l.default.string,id:l.default.string,"aria-labelledby":l.default.string,"aria-label":l.default.string,icons:l.default.oneOfType([l.default.bool,l.default.shape({checked:l.default.node,unchecked:l.default.node})])}},269:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},c.default.createElement("title",null,"switch-check"),c.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},270:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},c.default.createElement("title",null,"switch-x"),c.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},271:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var a=t[0];return{x:a.clientX,y:a.clientY}}var n=e.pageX;if(void 0!==n)return{x:n,y:e.pageY}}return{x:0,y:0}}}}]);