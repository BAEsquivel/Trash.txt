(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{143:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n(2),i=c(r),a=c(n(273)),u=c(n(800)),l=n(616);function c(e){return e&&e.__esModule?e:{default:e}}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var d=i.default.createElement(u.default,{color:"purple"}),p=function(e){function t(){var e,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,i=Array(r),a=0;a<r;a++)i[a]=arguments[a];return n=o=s(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),o.state={leftIsOpened:!1,rightIsOpened:!1},o.openNotification=function(e){o.setState(f({},e+"IsOpened",!0))},o.closeNotification=function(e){o.setState(f({},e+"IsOpened",!1))},s(o,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),o(t,[{key:"render",value:function(){var e=this;return i.default.createElement("div",null,i.default.createElement(l.Notification,{isOpened:this.state.rightIsOpened,icon:d,title:"Hi",body:"Добавьте, пожалуйста, дату вашего рождения",actionButton:"Добавить дату рождения",onAction:function(){return e.closeNotification("right")},onRequestClose:function(){return e.closeNotification("right")}}),i.default.createElement(l.Notification,{isOpened:this.state.leftIsOpened,positionX:"left",title:"Hi",body:"Добавьте, пожалуйста, дату вашего рождения",actionButton:"Добавить дату рождения",onAction:function(){return e.closeNotification("left")},onRequestClose:function(){return e.closeNotification("left")}}),i.default.createElement("div",{style:{marginBottom:20}},i.default.createElement(a.default,{onClick:function(){return e.openNotification("right")}},"Нотификация"),i.default.createElement(a.default,{type:"secondary",style:{marginLeft:20},onClick:function(){return e.openNotification("left")}},"Слева без иконки")))}}]),t}();t.default=p},574:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();t.default=function(e){return function(t){function n(){var e,t,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);for(var a=arguments.length,u=Array(a),c=0;c<a;c++)u[c]=arguments[c];return r=f(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(u))),t=r,r.elements=[],r.renderToLayer=function(e,t){var n=(0,l.default)(),a=(0,i.cloneElement)(e,o({},t,{key:n,isOpened:!0}));return r.elements.push(a),r.renderPortal(),a},r.unrenderAtLayer=function(e){var t=r.elements.indexOf(e);return t<0?Promise.resolve():new Promise(function(n){var o=e.props.containerRef,a=(0,i.cloneElement)(e,{isOpened:!1,containerRef:function(e){o&&o(e),n(a)}});r.elements[t]=a,r.renderPortal()}).then(function(e){r.elements=r.elements.filter(function(t){return t!==e}),r.renderPortal()})},f(r,t)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,t),r(n,[{key:"componentWillUnmount",value:function(){this.elements=[],this.unmountPortal()}},{key:"renderPortal",value:function(){if(this.elements.length>0){this.node||(this.node=document.createElement("div"),document.body.appendChild(this.node));var e=a.default.createElement("div",null,this.elements);(0,u.unstable_renderSubtreeIntoContainer)(this,e,this.node)}else this.unmountPortal()}},{key:"unmountPortal",value:function(){this.node&&((0,u.unmountComponentAtNode)(this.node),document.body.removeChild(this.node),this.node=null)}},{key:"render",value:function(){return a.default.createElement(e,o({},this.props,{renderToLayer:this.renderToLayer,unrenderAtLayer:this.unrenderAtLayer}))}}]),n}(i.Component)};var i=n(2),a=c(i),u=n(96),l=c(n(199));function c(e){return e&&e.__esModule?e:{default:e}}function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}},575:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();t.default=function(e){var t,n;return n=t=function(t){function n(){var e,t,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);for(var r=arguments.length,i=Array(r),a=0;a<r;a++)i[a]=arguments[a];return o=f(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(i))),t=o,o.onOpen=function(){o.resolveOpening&&o.resolveOpening()},o.onClose=function(){o.resolveClosing&&o.resolveClosing()},f(o,t)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,t),r(n,[{key:"componentDidMount",value:function(){this.props.isOpened&&this.mountPortal()}},{key:"componentDidUpdate",value:function(e){var t=this.props.isOpened;t!==e.isOpened?t?this.mountPortal():this.unmountPortal():t&&this.renderPortal()}},{key:"componentWillUnmount",value:function(){this.unmountPortal(!0)}},{key:"mountPortal",value:function(){var e=this;this.node||new Promise(function(t){e.node=document.createElement("div"),e.node.style.position="absolute",e.node.style.zIndex=e.props.zIndex,document.body.appendChild(e.node),e.props.containerRef(e.node),e.resolveOpening=t,e.renderPortal()}).then(function(){e.resolveOpening=null,e.props.onOpen()})}},{key:"renderPortal",value:function(){this.node&&(0,l.unstable_renderSubtreeIntoContainer)(this,this.renderContent(),this.node)}},{key:"unmountPortal",value:function(e){var t=this;this.node&&new Promise(function(n){e&&n(),t.resolveClosing=n,t.renderPortal()}).then(function(){(0,l.unmountComponentAtNode)(t.node),document.body.removeChild(t.node),t.node=null,t.resolveClosing=null,t.props.containerRef(),t.props.onClose()})}},{key:"renderContent",value:function(){return a.default.createElement(e,o({},this.props,{onOpen:this.onOpen,onClose:this.onClose}))}},{key:"render",value:function(){return null}}]),n}(i.Component),t.propTypes={isOpened:u.default.bool,zIndex:u.default.number,onOpen:u.default.func,onClose:u.default.func,containerRef:u.default.func},t.defaultProps={isOpened:!1,onOpen:function(){},onClose:function(){},containerRef:function(){}},n};var i=n(2),a=c(i),u=c(n(1)),l=n(96);function c(e){return e&&e.__esModule?e:{default:e}}function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}},578:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e};t.default=l;var r=a(n(2)),i=a(n(89));function a(e){return e&&e.__esModule?e:{default:e}}var u=r.default.createElement("path",{d:"M7.5 6.58L1.742.824a.4.4 0 0 0-.565 0l-.354.354a.4.4 0 0 0 0 .565L6.581 7.5.823 13.258a.4.4 0 0 0 0 .565l.354.354a.4.4 0 0 0 .565 0L7.5 8.419l5.758 5.758a.4.4 0 0 0 .565 0l.354-.354a.4.4 0 0 0 0-.565L8.419 7.5l5.758-5.758a.4.4 0 0 0 0-.565l-.354-.354a.4.4 0 0 0-.565 0L7.5 6.581z"});function l(e){return r.default.createElement(i.default,o({},e,{viewBox:"0 0 15 15"}),u)}l.displayName="ClearIcon"},614:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();t.default=function(e){var t;return(0,u.default)(t=function(t){function n(){var e,t,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);for(var r=arguments.length,i=Array(r),a=0;a<r;a++)i[a]=arguments[a];return o=c(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(i))),t=o,o.openNotification=function(e){var t={},n=function(){o.props.unrenderAtLayer(t.element)};return t.element=o.props.renderToLayer(e,{onRequestClose:n}),t.close=n,t},o.closeNotification=function(e){e.close()},c(o,t)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,t),r(n,[{key:"render",value:function(){var t=this.props,n=(t.renderToLayer,t.unrenderAtLayer,function(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}(t,["renderToLayer","unrenderAtLayer"]));return a.default.createElement(e,o({},n,{openNotification:this.openNotification,closeNotification:this.closeNotification}))}}]),n}(i.Component))||t};var i=n(2),a=l(i),u=l(n(574));function l(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}},615:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,r,i,a,u,l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},f=n(2),s=C(f),d=C(n(1)),p=C(n(25)),y=C(n(268)),b=C(n(578)),h=C(n(720)),v=C(n(267)),m=C(n(197)),O=C(n(575)),g=C(n(270)),_=n(269),w=n(35),P=n(81);function C(e){return e&&e.__esModule?e:{default:e}}function j(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var E=(o=(0,g.default)(_.SNACKBAR_ZINDEX),r=(0,w.injectSheet)(function(e){return c({notification:c({extend:P.isolateMixin,fontFamily:e.fontFamily,position:"fixed",left:15,right:15,bottom:5,boxSizing:"border-box",boxShadow:e.notification.boxShadow,padding:e.notification.padding,backgroundColor:e.notification.colors.background,color:e.notification.colors.text,fontSize:e.notification.fontSize,opacity:0,transitionDuration:e.notification.animationDuration,transitionProperty:"bottom, opacity"},(0,P.ifDesktop)({width:335,borderRadius:e.notification.borderRadius}))},(0,P.ifDesktop)({left:{right:"auto"},right:{left:"auto",right:15}}),{isVisible:{bottom:15,opacity:1},title:{extend:P.middleMixin,fontSize:e.notification.titleSize,fontWeight:500},icon:{extend:P.middleMixin,display:"inline-block",borderRadius:"50%",marginRight:10,width:39,height:39,backgroundColor:e.notification.colors.iconBackground,textAlign:"center"},body:{marginTop:10},actionButton:{extend:P.middleMixin,boxSizing:"border-box",outline:"none",border:0,margin:0,marginTop:12,padding:0,height:20,backgroundColor:"transparent",color:e.notification.actionButton.colors.default,fontSize:e.notification.actionButton.fontSize,fontWeight:500,cursor:"pointer",transitionDuration:e.notification.animationDuration,transitionProperty:"color","&:hover:not(:active)":{color:e.notification.actionButton.colors.hover},"&:active":{color:e.notification.actionButton.colors.active},"& svg":{marginLeft:7}},close:{position:"absolute !important",top:13,right:13}})},{name:"Notification"}),o(i=(0,O.default)(i=r((u=a=function(e){function t(){var e,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,i=Array(r),a=0;a<r;a++)i[a]=arguments[a];return n=o=j(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),o.onClickOutside=function(){o.state.isVisible&&o.props.onRequestClose()},j(o,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,f.PureComponent),l(t,[{key:"render",value:function(){var e=this.props,t=e.isOpened,n=e.className,o=e.positionX,r=e.style,i=e.theme,a=e.classes,u=e.icon,l=e.title,c=e.body,f=e.showClose,d=e.actionButton,O=e.onAction,g=e.onRequestClose,_=e.closeOnClickOutside,w=e.onClose,P=s.default.createElement(v.default,{isVisible:t,activeClassName:a.isVisible,animationDuration:i.notification.animationDuration,onInvisible:w},s.default.createElement("div",{style:r,className:(0,p.default)(a.notification,a[o],n)},f&&s.default.createElement(y.default,{type:"flat",buttonType:"button",size:"small",className:a.close,onClick:g},s.default.createElement(b.default,{color:i.notification.colors.close})),s.default.createElement("div",{className:a.title},u&&s.default.createElement("div",{className:a.icon},u),l),s.default.createElement("div",{className:a.body},c),d&&s.default.createElement("button",{type:"button",className:a.actionButton,onClick:O},d,s.default.createElement(h.default,{size:9,color:i.notification.actionButton.colors.default}))));return _?s.default.createElement(m.default,{handler:this.onClickOutside},P):P}}]),t}(),a.propTypes={className:d.default.string,style:d.default.object,isOpened:d.default.bool,icon:d.default.node,title:d.default.node.isRequired,body:d.default.node.isRequired,actionButton:d.default.string,positionX:d.default.oneOf(["left","right"]),showClose:d.default.bool,closeOnClickOutside:d.default.bool,onAction:d.default.func,onRequestClose:d.default.func},a.defaultProps={isOpened:!1,positionX:"right",showClose:!0,closeOnClickOutside:!1,onAction:function(){},onRequestClose:function(){}},i=u))||i)||i)||i);t.default=E},616:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(615);Object.defineProperty(t,"Notification",{enumerable:!0,get:function(){return i(o).default}});var r=n(614);function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"provideNotification",{enumerable:!0,get:function(){return i(r).default}})},720:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e};t.default=l;var r=a(n(2)),i=a(n(89));function a(e){return e&&e.__esModule?e:{default:e}}var u=r.default.createElement("path",{d:"M2.698 2.141a.203.203 0 0 1-.007-.283l.713-.714c.076-.076.207-.069.28.004l3.564 3.566a.41.41 0 0 1 0 .574L3.684 8.854a.2.2 0 0 1-.28.004l-.713-.714c-.076-.076-.075-.2.007-.283l2.858-2.86-2.858-2.86z"});function l(e){return r.default.createElement(i.default,o({},e,{viewBox:"0 0 10 10"}),u)}l.displayName="ChevronRightIcon"},800:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e};t.default=l;var r=a(n(2)),i=a(n(89));function a(e){return e&&e.__esModule?e:{default:e}}var u=r.default.createElement("path",{d:"M17.5 12.5c0 .828-.56 1.5-1.25 1.5S15 13.328 15 12.5s.56-1.5 1.25-1.5 1.25.672 1.25 1.5zM9.75 11c-.69 0-1.25.672-1.25 1.5S9.06 14 9.75 14 11 13.328 11 12.5 10.44 11 9.75 11zM13 19.354c2.235 0 3-2.354 3-2.354h-6s.847 2.354 3 2.354zm13-6.75c0 2.865-.791 5.778-1.933 8.243A19.738 19.738 0 0 1 22.25 24l-3.796-1.917C16.898 23.27 15.084 24 13 24c-1.993 0-3.825-.749-5.408-1.941L3.75 24a19.738 19.738 0 0 1-1.817-3.153C.791 18.382 0 15.469 0 12.604 0 5.014 5.281 0 13 0s13 5.014 13 12.604zm-5.669 4.285c.123-.202.313-.354.536-.43 2.106-.713 2.57-3.529 1.802-4.746-6.576-.39-10.89-3.363-12.669-6.322-2.257 5.063-5.078 6.628-6.863 6.795-.482 1.714.322 3.706 1.996 4.273.224.076.413.228.536.43C7.377 19.719 9.684 22 13 22c3.318 0 5.624-2.284 7.331-5.111z",fillRule:"nonzero"});function l(e){return r.default.createElement(i.default,o({},e,{viewBox:"0 0 26 24"}),u)}l.displayName="FaceIcon"}}]);