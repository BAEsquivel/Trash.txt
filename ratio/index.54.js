(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{134:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();t.default=function(){return b};var r=n(2),i=u(r),a=u(n(273)),l=n(606);function u(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var s=i.default.createElement(l.Snackbar,{positionY:"top",showClose:!0,type:"danger"},"При удалении почты произошла ошибка"),f=i.default.createElement(l.Snackbar,{positionY:"top",positionX:"left",autoCloseDuration:3e3,size:"small",type:"danger"},"Я маленький снэкбар"),p=function(e){function t(){var e,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,a=Array(r),u=0;u<r;u++)a[u]=arguments[u];return n=o=c(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),o.openAlert=function(){o.props.openSnackbar(s)},o.openConfirm=function(){var e=o.props.openSnackbar(i.default.createElement(l.Snackbar,{positionX:"right",autoCloseDuration:0,actionButton:"Ok",onAction:function(){return e.close()}},"Вы готовы удалить почту?"))},o.openSnackbar=function(){o.props.openSnackbar(f)},c(o,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),o(t,[{key:"render",value:function(){return i.default.createElement("div",null,i.default.createElement("div",{style:{marginBottom:20}},i.default.createElement(a.default,{type:"danger",onClick:this.openAlert},"Алерт"),i.default.createElement(a.default,{type:"outline",style:{marginLeft:20},onClick:this.openConfirm},"Подтверждение"),i.default.createElement(a.default,{type:"primary",style:{marginLeft:20},onClick:this.openSnackbar},"Маленький снэкбар")))}}]),t}(),d=(0,l.provideSnackbar)(p),b=i.default.createElement(d,null)},575:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();t.default=function(e){return function(t){function n(){var e,t,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);for(var a=arguments.length,l=Array(a),c=0;c<a;c++)l[c]=arguments[c];return r=s(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(l))),t=r,r.elements=[],r.renderToLayer=function(e,t){var n=(0,u.default)(),a=(0,i.cloneElement)(e,o({},t,{key:n,isOpened:!0}));return r.elements.push(a),r.renderPortal(),a},r.unrenderAtLayer=function(e){var t=r.elements.indexOf(e);return t<0?Promise.resolve():new Promise(function(n){var o=e.props.containerRef,a=(0,i.cloneElement)(e,{isOpened:!1,containerRef:function(e){o&&o(e),n(a)}});r.elements[t]=a,r.renderPortal()}).then(function(e){r.elements=r.elements.filter(function(t){return t!==e}),r.renderPortal()})},s(r,t)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,t),r(n,[{key:"componentWillUnmount",value:function(){this.elements=[],this.unmountPortal()}},{key:"renderPortal",value:function(){if(this.elements.length>0){this.node||(this.node=document.createElement("div"),document.body.appendChild(this.node));var e=a.default.createElement("div",null,this.elements);(0,l.unstable_renderSubtreeIntoContainer)(this,e,this.node)}else this.unmountPortal()}},{key:"unmountPortal",value:function(){this.node&&((0,l.unmountComponentAtNode)(this.node),document.body.removeChild(this.node),this.node=null)}},{key:"render",value:function(){return a.default.createElement(e,o({},this.props,{renderToLayer:this.renderToLayer,unrenderAtLayer:this.unrenderAtLayer}))}}]),n}(i.Component)};var i=n(2),a=c(i),l=n(96),u=c(n(199));function c(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}},576:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();t.default=function(e){var t,n;return n=t=function(t){function n(){var e,t,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);for(var r=arguments.length,i=Array(r),a=0;a<r;a++)i[a]=arguments[a];return o=s(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(i))),t=o,o.onOpen=function(){o.resolveOpening&&o.resolveOpening()},o.onClose=function(){o.resolveClosing&&o.resolveClosing()},s(o,t)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,t),r(n,[{key:"componentDidMount",value:function(){this.props.isOpened&&this.mountPortal()}},{key:"componentDidUpdate",value:function(e){var t=this.props.isOpened;t!==e.isOpened?t?this.mountPortal():this.unmountPortal():t&&this.renderPortal()}},{key:"componentWillUnmount",value:function(){this.unmountPortal(!0)}},{key:"mountPortal",value:function(){var e=this;this.node||new Promise(function(t){e.node=document.createElement("div"),e.node.style.position="absolute",e.node.style.zIndex=e.props.zIndex,document.body.appendChild(e.node),e.props.containerRef(e.node),e.resolveOpening=t,e.renderPortal()}).then(function(){e.resolveOpening=null,e.props.onOpen()})}},{key:"renderPortal",value:function(){this.node&&(0,u.unstable_renderSubtreeIntoContainer)(this,this.renderContent(),this.node)}},{key:"unmountPortal",value:function(e){var t=this;this.node&&new Promise(function(n){e&&n(),t.resolveClosing=n,t.renderPortal()}).then(function(){(0,u.unmountComponentAtNode)(t.node),document.body.removeChild(t.node),t.node=null,t.resolveClosing=null,t.props.containerRef(),t.props.onClose()})}},{key:"renderContent",value:function(){return a.default.createElement(e,o({},this.props,{onOpen:this.onOpen,onClose:this.onClose}))}},{key:"render",value:function(){return null}}]),n}(i.Component),t.propTypes={isOpened:l.default.bool,zIndex:l.default.number,onOpen:l.default.func,onClose:l.default.func,containerRef:l.default.func},t.defaultProps={isOpened:!1,onOpen:function(){},onClose:function(){},containerRef:function(){}},n};var i=n(2),a=c(i),l=c(n(1)),u=n(96);function c(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}},578:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,r,i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(2),u=s(l),c=s(n(89));function s(e){return e&&e.__esModule?e:{default:e}}var f=u.default.createElement("path",{d:"M7.5 6.58L1.742.824a.4.4 0 0 0-.565 0l-.354.354a.4.4 0 0 0 0 .565L6.581 7.5.823 13.258a.4.4 0 0 0 0 .565l.354.354a.4.4 0 0 0 .565 0L7.5 8.419l5.758 5.758a.4.4 0 0 0 .565 0l.354-.354a.4.4 0 0 0 0-.565L8.419 7.5l5.758-5.758a.4.4 0 0 0 0-.565l-.354-.354a.4.4 0 0 0-.565 0L7.5 6.581z"}),p=(r=o=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l.PureComponent),a(t,[{key:"render",value:function(){return u.default.createElement(c.default,i({},this.props,{viewBox:"0 0 15 15"}),f)}}]),t}(),o.displayName="ClearIcon",r);t.default=p},604:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();t.default=function(e){var t;return(0,l.default)(t=function(t){function n(){var e,t,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);for(var r=arguments.length,i=Array(r),a=0;a<r;a++)i[a]=arguments[a];return o=c(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(i))),t=o,o.openSnackbar=function(e){var t={},n=function(){o.props.unrenderAtLayer(t.element)};return t.element=o.props.renderToLayer(e,{onRequestClose:n}),t.close=n,t},o.closeSnackbar=function(e){e.close()},c(o,t)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,t),r(n,[{key:"render",value:function(){var t=this.props,n=(t.renderToLayer,t.unrenderAtLayer,function(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}(t,["renderToLayer","unrenderAtLayer"]));return a.default.createElement(e,o({},n,{openSnackbar:this.openSnackbar,closeSnackbar:this.closeSnackbar}))}}]),n}(i.Component))||t};var i=n(2),a=u(i),l=u(n(575));function u(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}},605:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,r,i,a,l,u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},s=n(2),f=_(s),p=_(n(1)),d=_(n(32)),b=_(n(578)),y=_(n(267)),m=_(n(197)),h=_(n(576)),v=_(n(270)),O=n(269),g=n(35),k=n(81);function _(e){return e&&e.__esModule?e:{default:e}}function C(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var w=(o=(0,v.default)(O.SNACKBAR_ZINDEX),r=(0,g.injectSheet)(function(e){return{snackbar:c({extend:[k.isolateMixin,k.middleMixin],fontFamily:e.fontFamily,position:"fixed",boxSizing:"border-box",display:"flex",justifyContent:"flex-start",alignItems:"center",padding:e.snackbar.sizes.medium.padding,width:"100%",lineHeight:1.15,color:e.snackbar.colors.text,fontSize:e.snackbar.fontSize,opacity:0,transitionDuration:e.snackbar.animationDuration,transitionProperty:"top, bottom, opacity"},(0,k.ifDesktop)({width:"auto",minWidth:350,maxWidth:750,borderRadius:e.snackbar.borderRadius})),top:c({top:-10},(0,k.ifDesktop)({top:0}),{"&$isVisible":c({top:0},(0,k.ifDesktop)({top:10}))}),bottom:c({bottom:-10},(0,k.ifDesktop)({bottom:0}),{"&$isVisible":c({bottom:0},(0,k.ifDesktop)({bottom:10}))}),isVisible:{opacity:1},left:c({left:0},(0,k.ifDesktop)({left:10})),center:{left:"50%",transform:"translateX(-50%)"},right:c({right:0},(0,k.ifDesktop)({right:10})),main:{backgroundColor:e.snackbar.colors.background.main},primary:{backgroundColor:e.snackbar.colors.background.primary},success:{backgroundColor:e.snackbar.colors.background.success},danger:{backgroundColor:e.snackbar.colors.background.danger},icon:{extend:k.middleMixin,marginRight:15},content:{flexGrow:1,textAlign:"left"},button:{boxSizing:"border-box",outline:"none",border:0,borderRadius:e.snackbar.borderRadius,height:20,lineHeight:"20px",marginLeft:15,padding:"0 10px",backgroundColor:"transparent",color:e.snackbar.colors.actionButton,fontSize:e.snackbar.fontSize,textAlign:"center",textTransform:"uppercase",letterSpacing:1,cursor:"pointer",transitionDuration:".2s",transitionProperty:"background-color, border","&:hover:not(:active)":{backgroundColor:"rgba(0, 0, 0, 0.05)"},"&:focus:not(:active)":{border:"1px solid"},"&:active":{backgroundColor:"rgba(0, 0, 0, 0.1)"}},close:{composes:"$button",extend:k.middleMixin,borderRadius:"50%",width:20,padding:0,lineHeight:0},small:{padding:e.snackbar.sizes.small.padding}}},{name:"Snackbar"}),o(i=(0,h.default)(i=r((l=a=function(e){function t(){var e,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,i=Array(r),a=0;a<r;a++)i[a]=arguments[a];return n=o=C(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),o.onWillVisible=function(){o.props.autoCloseDuration&&(o.autoCloseTimeout=setTimeout(function(){o.props.onRequestClose()},o.props.autoCloseDuration))},o.onWillInvisible=function(){clearTimeout(o.autoCloseTimeout)},o.onClickOutside=function(){o.state.isVisible&&o.props.onRequestClose()},C(o,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,s.PureComponent),u(t,[{key:"componentWillUnmount",value:function(){this.onWillInvisible()}},{key:"render",value:function(){var e=this.props,t=e.isOpened,n=e.children,o=e.className,r=e.positionX,i=e.positionY,a=e.type,l=e.style,u=e.theme,c=e.icon,p=e.showClose,h=e.actionButton,v=e.onAction,O=e.onRequestClose,g=e.closeOnClickOutside,k=e.onClose,_=e.size,C=e.classes,w=f.default.createElement(y.default,{isVisible:t,activeClassName:C.isVisible,animationDuration:u.snackbar.animationDuration,onWillVisible:this.onWillVisible,onWillInvisible:this.onWillInvisible,onInvisible:k},f.default.createElement("div",{style:l,className:(0,d.default)(C.snackbar,C[r],C[i],C[a],"small"===_&&C.small,o)},c&&f.default.createElement("div",{className:C.icon},(0,s.cloneElement)(c,{color:c.props.color||u.snackbar.colors.text})),f.default.createElement("div",{className:C.content},n),h&&f.default.createElement("button",{type:"button",className:C.button,onClick:v},h),p&&f.default.createElement("button",{type:"button",className:C.close,onClick:O},f.default.createElement(b.default,{size:10,color:u.snackbar.colors.text}))));return g?f.default.createElement(m.default,{handler:this.onClickOutside},w):w}}]),t}(),a.propTypes={className:p.default.string,style:p.default.object,children:p.default.node.isRequired,isOpened:p.default.bool,type:p.default.oneOf(["main","primary","success","danger"]),icon:p.default.node,actionButton:p.default.string,positionX:p.default.oneOf(["left","center","right"]),positionY:p.default.oneOf(["top","bottom"]),showClose:p.default.bool,closeOnClickOutside:p.default.bool,autoCloseDuration:p.default.number,onAction:p.default.func,onRequestClose:p.default.func,size:p.default.oneOf(["small","medium"])},a.defaultProps={type:"main",isOpened:!1,positionX:"center",positionY:"bottom",showClose:!1,closeOnClickOutside:!1,autoCloseDuration:4e3,onAction:function(){},onRequestClose:function(){},size:"medium"},i=l))||i)||i)||i);t.default=w},606:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(605);Object.defineProperty(t,"Snackbar",{enumerable:!0,get:function(){return i(o).default}});var r=n(604);function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"provideSnackbar",{enumerable:!0,get:function(){return i(r).default}})}}]);