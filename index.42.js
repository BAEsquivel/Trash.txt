(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{123:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=r(2),u=(n=o)&&n.__esModule?n:{default:n},l=r(651);var i=u.default.createElement("div",null,u.default.createElement(l.H1,null,"Heading level 1"),u.default.createElement(l.H2,null,"Heading level 2"),u.default.createElement(l.H3,null,"Heading level 3"),u.default.createElement(l.Text,null,"Text Text Text Text Text Text"),u.default.createElement(l.Quote,null,"Quote Quote Quote"),u.default.createElement(l.Quote,null,u.default.createElement("p",null,"First paragraph"),u.default.createElement("p",null,"Second paragraph")),u.default.createElement(l.Epigraph,null,"Epigraph Epigraph Epigraph"),u.default.createElement(l.Description,null,"Description Description Description"),u.default.createElement(l.GalleryDescription,null,"GalleryDescription GalleryDescription GalleryDescription"),u.default.createElement(l.Source,null,"Source Source Source"),u.default.createElement("br",null),u.default.createElement(l.Timestamp,null,"Timestamp Timestamp Timestamp"),u.default.createElement("br",null),u.default.createElement(l.PhotoSource,null,"PhotoSource PhotoSource PhotoSource"),u.default.createElement(l.List,null,u.default.createElement("li",null,"Unordered list"),u.default.createElement("li",null,"Unordered list"),u.default.createElement("li",null,"Unordered",u.default.createElement("br",null),"list")),u.default.createElement(l.List,{numbered:!0},u.default.createElement("li",null,"Ordered list"),u.default.createElement("li",null,"Ordered list"),u.default.createElement("li",null,"Ordered",u.default.createElement("br",null),"list"))),c=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),a(t,[{key:"render",value:function(){return i}}]),t}();t.default=c},573:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,a,o,u=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i=r(2),c=b(i),f=b(r(1)),p=b(r(25)),d=r(35),s=r(81);function b(e){return e&&e.__esModule?e:{default:e}}function m(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}var y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.fontWeight,r=void 0===t?400:t,n=e.lineHeight,a=(e.mobile,m(e,["fontWeight","lineHeight","mobile"]));return l({},a,{fontWeight:r,lineHeight:n&&n+"px"})},v=(0,d.injectSheet)(function(e){var t=e.typography;return{reset:s.isolateMixin,h1:l({extend:y(t.h1),margin:"15px 0"},(0,s.ifMobile)({extend:y(t.h1.mobile)})),h2:l({extend:y(t.h2),margin:"20px 0"},(0,s.ifMobile)({extend:y(t.h2.mobile)})),h3:l({extend:y(t.h3),margin:"20px 0"},(0,s.ifMobile)({extend:y(t.h3.mobile)})),text:l({extend:y(t.text),margin:"20px 0"},(0,s.ifMobile)({extend:y(t.text.mobile)})),quote:{extend:y(t.quote),margin:"30px 0",paddingLeft:37,borderLeft:"3px solid "+t.quote.borderColor,"& p":{margin:0},"& p + p":{marginTop:20}},epigraph:{extend:y(t.epigraph),margin:"20px 0"},source:{composes:"$uppercase",extend:y(t.source)},timestamp:{extend:y(t.timestamp)},description:{extend:y(t.description),margin:"20px 0 25px"},galleryDescription:{extend:y(t.galleryDescription)},photoSource:{extend:y(t.photoSource)},list:{extend:y(t.text),position:"relative",margin:"30px 0",paddingLeft:40,listStyle:"none","& li + li":{marginTop:15},"& li:before":{position:"absolute",left:0},"ul& li:before":{content:'""',marginTop:9,width:10,height:10,borderRadius:"50%",background:t.list.bullet.color},"ol&":{counterReset:"order"},"ol& li:before":{extend:y(t.list.number),counterIncrement:"order",content:'counter(order)"."',color:t.list.number.color}},uppercase:{textTransform:"uppercase",letterSpacing:1.3/11+"em"}}},{name:"Typography"})((o=a=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.PureComponent),u(t,[{key:"render",value:function(){var e=this.props,t=e.tagName,r=e.className,n=e.classes,a=e.type,o=e.uppercase,u=e.children,i=(e.theme,m(e,["tagName","className","classes","type","uppercase","children","theme"]));return c.default.createElement(t,l({className:(0,p.default)(r,n.reset,a&&n[a],o&&n.uppercase)},i),u)}}]),t}(),a.propTypes={type:f.default.oneOf(["h1","h2","h3","text","quote","epigraph","source","timestamp","description","galleryDescription","photoSource","list"]),tagName:f.default.string,children:f.default.node,uppercase:f.default.bool},a.defaultProps={tagName:"div"},n=o))||n;t.default=v},639:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=l(r(2)),o=l(r(1)),u=l(r(573));function l(e){return e&&e.__esModule?e:{default:e}}var i=function(e){var t=e.numbered,r=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}(e,["numbered"]);return a.default.createElement(u.default,n({},r,{tagName:t?"ol":"ul",type:"list"}))};i.propTypes={numbered:o.default.bool},t.default=i},640:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=u(r(2)),o=u(r(573));function u(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return a.default.createElement(o.default,n({tagName:"span"},e,{type:"photoSource"}))}},641:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=u(r(2)),o=u(r(573));function u(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return a.default.createElement(o.default,n({tagName:"div"},e,{type:"galleryDescription"}))}},642:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=u(r(2)),o=u(r(573));function u(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return a.default.createElement(o.default,n({tagName:"div"},e,{type:"description"}))}},643:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=u(r(2)),o=u(r(573));function u(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return a.default.createElement(o.default,n({tagName:"time"},e,{type:"timestamp"}))}},644:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=u(r(2)),o=u(r(573));function u(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return a.default.createElement(o.default,n({tagName:"span"},e,{type:"source"}))}},645:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=u(r(2)),o=u(r(573));function u(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return a.default.createElement(o.default,n({tagName:"div"},e,{type:"epigraph"}))}},646:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=u(r(2)),o=u(r(573));function u(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return a.default.createElement(o.default,n({tagName:"blockquote"},e,{type:"quote"}))}},647:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=u(r(2)),o=u(r(573));function u(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return a.default.createElement(o.default,n({tagName:"p"},e,{type:"text"}))}},648:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=u(r(2)),o=u(r(573));function u(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return a.default.createElement(o.default,n({tagName:"h3"},e,{type:"h3"}))}},649:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=u(r(2)),o=u(r(573));function u(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return a.default.createElement(o.default,n({tagName:"h2"},e,{type:"h2"}))}},650:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=u(r(2)),o=u(r(573));function u(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return a.default.createElement(o.default,n({tagName:"h1"},e,{type:"h1"}))}},651:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(573);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return y(n).default}});var a=r(650);Object.defineProperty(t,"H1",{enumerable:!0,get:function(){return y(a).default}});var o=r(649);Object.defineProperty(t,"H2",{enumerable:!0,get:function(){return y(o).default}});var u=r(648);Object.defineProperty(t,"H3",{enumerable:!0,get:function(){return y(u).default}});var l=r(647);Object.defineProperty(t,"Text",{enumerable:!0,get:function(){return y(l).default}});var i=r(646);Object.defineProperty(t,"Quote",{enumerable:!0,get:function(){return y(i).default}});var c=r(645);Object.defineProperty(t,"Epigraph",{enumerable:!0,get:function(){return y(c).default}});var f=r(644);Object.defineProperty(t,"Source",{enumerable:!0,get:function(){return y(f).default}});var p=r(643);Object.defineProperty(t,"Timestamp",{enumerable:!0,get:function(){return y(p).default}});var d=r(642);Object.defineProperty(t,"Description",{enumerable:!0,get:function(){return y(d).default}});var s=r(641);Object.defineProperty(t,"GalleryDescription",{enumerable:!0,get:function(){return y(s).default}});var b=r(640);Object.defineProperty(t,"PhotoSource",{enumerable:!0,get:function(){return y(b).default}});var m=r(639);function y(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"List",{enumerable:!0,get:function(){return y(m).default}})}}]);