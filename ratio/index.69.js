(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{149:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n(2),i=u(r),a=u(n(698)),l=u(n(864));function u(e){return e&&e.__esModule?e:{default:e}}var c=i.default.createElement(l.default,{color:"magenta"}),s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),o(t,[{key:"render",value:function(){return i.default.createElement("div",{style:{display:"flex",alignItems:"center"}},i.default.createElement("div",{style:{width:"33%",display:"flex",alignItems:"center"}},"Подсказка справа",i.default.createElement(a.default,{style:{marginLeft:15}},"Номер телефона поможет вам восстановить пароль от почты")),i.default.createElement("div",{style:{width:"33%",display:"flex",alignItems:"center"}},"Кастомная иконка",i.default.createElement(a.default,{icon:c,style:{marginLeft:15}},"Номер телефона поможет вам восстановить пароль от почты")),i.default.createElement("div",{style:{width:"33%",display:"flex",alignItems:"center",justifyContent:"flex-end"}},"Подсказка слева",i.default.createElement(a.default,{style:{marginLeft:15}},"Номер телефона поможет вам восстановить пароль от почты")))}}]),t}();t.default=s},697:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,r,i,a,l,u,c=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=n(2),f=_(s),p=_(n(1)),d=_(n(32)),h=_(n(722)),y=_(n(267)),b=n(274),m=n(117),v=n(35),O=n(81);function _(e){return e&&e.__esModule?e:{default:e}}function w(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function j(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var P=(0,v.injectSheet)(function(e){return{hint:{extend:O.isolateMixin,fontFamily:e.fontFamily,position:"relative",top:-14,color:e.hint.colors.text,borderRadius:e.hint.borderRadius,boxSizing:"border-box",boxShadow:e.hint.boxShadow,paddingTop:15,paddingBottom:20,width:275,backgroundColor:e.hint.colors.background,fontSize:e.hint.fontSize,lineHeight:1.31,opacity:.01,transitionDuration:e.hint.animationDuration+"ms",transitionProperty:"opacity"},isVisible:{opacity:1},icon:{position:"absolute",top:14},left:{left:-15,paddingLeft:47,paddingRight:24,"& $icon":{left:15}},right:{left:15,paddingLeft:24,paddingRight:47,"& $icon":{right:15}}}},{name:"HintContent"})((i=r=function(e){function t(){return w(this,t),g(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return j(t,s.PureComponent),c(t,[{key:"render",value:function(){var e=this.props,t=e.isVisible,n=e.className,o=e.style,r=e.icon,i=e.children,a=e.pointX,l=e.theme,u=e.classes,c=e.onMouseEnter,p=e.onMouseLeave,h=e.onBecomeVisible,b=e.onBecomeInvisible,m=r.props||{},v=(0,s.cloneElement)(r,{className:(0,d.default)(u.icon,m.className),color:m.color||l.hint.colors.icon});return f.default.createElement(y.default,{isVisible:t,activeClassName:u.isVisible,animationDuration:l.hint.animationDuration,onVisible:h,onInvisible:b},f.default.createElement("div",{className:(0,d.default)(u.hint,u[a],n),style:o,onMouseEnter:c,onMouseLeave:p},v,i))}}]),t}(),r.propTypes={className:p.default.string,style:p.default.object,icon:p.default.node.isRequired,children:p.default.node.isRequired,isVisible:p.default.bool.isRequired,pointX:p.default.oneOf(m.POINTS_X),onMouseEnter:p.default.func,onMouseLeave:p.default.func,onBecomeVisible:p.default.func,onBecomeInvisible:p.default.func},o=i))||o,E=(0,v.injectSheet)(function(){return{icon:{display:"inline-block"}}},{name:"Hint"})((u=l=function(e){function t(e){w(this,t);var n=g(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.show=function(){n.state.isOpened?clearTimeout(n.hideTimeout):n.setState({isOpened:!0})},n.hide=function(){n.state.isOpened&&(clearTimeout(n.hideTimeout),n.hideTimeout=setTimeout(function(){n.setState({isOpened:!1})},60))},n.state={isOpened:e.isOpened||!1},n}return j(t,s.PureComponent),c(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.isOpened;void 0!==t&&t!==this.props.isOpened&&(t?this.show():this.hide())}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.style,o=e.contentClassName,r=e.contentStyle,i=e.icon,a=e.children,l=e.positionX,u=e.theme,c=e.classes,p=e.closeOnScroll,h="left"===l?"right":"left",y=i.props||{},m=(0,s.cloneElement)(i,{style:n,className:(0,d.default)(c.icon,t),color:y.color||u.hint.colors.icon,onMouseEnter:this.show,onMouseLeave:this.hide});return f.default.createElement(b.FixedOverlay,{isOpened:this.state.isOpened,anchor:m,content:f.default.createElement(P,{className:o,style:r,icon:i,onMouseEnter:this.show,onMouseLeave:this.hide},a),autoPositionX:!0,anchorPointX:h,contentPointX:h,anchorPointY:"top",contentPointY:"top",cachePositionOptions:!1,closeOnScroll:p,onContentClose:this.hide})}}]),t}(),l.propTypes={className:p.default.string,style:p.default.object,icon:p.default.node.isRequired,contentClassName:p.default.string,contentStyle:p.default.object,children:p.default.node.isRequired,isOpened:p.default.bool,positionX:p.default.oneOf(["left","right"]),closeOnScroll:p.default.bool},l.defaultProps={positionX:"right",closeOnScroll:!0,icon:f.default.createElement(h.default,{size:16})},a=u))||a;t.default=E},698:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(697);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return(e=o,e&&e.__esModule?e:{default:e}).default;var e}})},722:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,r,i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(2),u=s(l),c=s(n(89));function s(e){return e&&e.__esModule?e:{default:e}}var f=u.default.createElement("path",{d:"M8 0c4.416 0 8 3.584 8 8s-3.584 8-8 8-8-3.584-8-8 3.584-8 8-8zm0 14.5c3.583 0 6.5-2.917 6.5-6.5S11.583 1.5 8 1.5A6.509 6.509 0 0 0 1.5 8c0 3.583 2.917 6.5 6.5 6.5zM6.917 9.532c0-.593.072-1.065.216-1.416.144-.351.407-.697.79-1.038.383-.34.638-.617.765-.831.127-.214.19-.44.19-.676 0-.715-.33-1.073-.99-1.073-.313 0-.564.096-.752.289-.188.192-.287.458-.295.796H5c.008-.808.27-1.44.784-1.897C6.298 3.229 7 3 7.888 3c.897 0 1.593.217 2.089.65.495.434.742 1.047.742 1.838 0 .36-.08.7-.241 1.02-.16.319-.442.673-.844 1.062l-.514.49c-.322.308-.506.67-.553 1.085l-.025.387H6.917zm-.184 1.948c0-.283.096-.517.289-.7.192-.185.439-.277.74-.277.3 0 .546.092.739.276a.929.929 0 0 1 .289.701c0 .28-.095.51-.283.692-.188.182-.437.273-.746.273s-.557-.09-.746-.273a.921.921 0 0 1-.282-.692z",fillRule:"evenodd"}),p=(r=o=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l.PureComponent),a(t,[{key:"render",value:function(){return u.default.createElement(c.default,i({},this.props,{viewBox:"0 0 16 16"}),f)}}]),t}(),o.displayName="QuestionIcon",r);t.default=p},864:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,r,i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(2),u=s(l),c=s(n(89));function s(e){return e&&e.__esModule?e:{default:e}}var f=u.default.createElement("path",{d:"M7.25 11.75h1.5v-4.5h-1.5v4.5zM8 .5C3.86.5.5 3.86.5 8c0 4.14 3.36 7.5 7.5 7.5 4.14 0 7.5-3.36 7.5-7.5C15.5 3.86 12.14.5 8 .5zM8 14c-3.308 0-6-2.693-6-6 0-3.308 2.692-6 6-6 3.307 0 6 2.692 6 6 0 3.307-2.693 6-6 6zm-.75-8.25h1.5v-1.5h-1.5v1.5z",fillRule:"evenodd"}),p=(r=o=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l.PureComponent),a(t,[{key:"render",value:function(){return u.default.createElement(c.default,i({},this.props,{viewBox:"0 0 16 16"}),f)}}]),t}(),o.displayName="InfoIcon",r);t.default=p}}]);