(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{127:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=n(2),a=s(o),r=n(581),l=s(n(595));function s(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var c=["Чехия","Мальта","Нидерланды","Германия","Гватемала","США","Люксембург","Канада","Австралия"],d=function(e){function t(){var e,n,i;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=Array(o),r=0;r<o;r++)a[r]=arguments[r];return n=i=u(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),i.state={items:c.slice(2,6)},i.toggleValue=function(e,t){i.setState({items:t?i.state.items.concat(e):i.state.items.filter(function(t){return t!==e})})},i.changeValue=function(e){i.setState({items:e})},u(i,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),i(t,[{key:"render",value:function(){var e=this,t=this.state.items.map(function(e){return a.default.createElement(r.TagsInputItem,{value:e,key:e},e)});return a.default.createElement("div",null,c.map(function(t){return a.default.createElement(l.default,{checked:e.state.items.indexOf(t)>-1,style:{marginRight:20},onCheck:function(n,i){e.toggleValue(t,i)},key:t},t)}),a.default.createElement("div",{style:{marginTop:40,maxWidth:300,border:"1px solid"}},a.default.createElement(r.TagsInput,{onChange:this.changeValue,onMoreClick:function(){}},t)),a.default.createElement("div",{style:{marginTop:10,maxWidth:300,border:"1px solid"}},a.default.createElement(r.TagsInput,{onChange:this.changeValue,isExpanded:!0},t)),a.default.createElement("div",{style:{marginTop:40,maxWidth:240,border:"1px solid"}},a.default.createElement(r.TagsInput,{onChange:this.changeValue,size:"small"},t)),a.default.createElement("div",{style:{marginTop:10,maxWidth:240,border:"1px solid"}},a.default.createElement(r.TagsInput,{onChange:this.changeValue,onMoreClick:function(){},size:"small",isExpanded:!0},t)),a.default.createElement("div",{style:{marginTop:40,maxWidth:240,border:"1px solid"}},a.default.createElement(r.TagsInput,{onChange:this.changeValue,onMoreClick:function(){},size:"small",disabled:!0},t)),a.default.createElement("div",{style:{marginTop:10,maxWidth:240,border:"1px solid"}},a.default.createElement(r.TagsInput,{onChange:this.changeValue,onMoreClick:function(){},size:"small",isExpanded:!0,disabled:!0},t)),a.default.createElement("div",{style:{marginTop:40}},"this.state.items: ",a.default.createElement("b",null,this.state.items.join(", "))))}}]),t}();t.default=d},581:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(623);Object.defineProperty(t,"TagsInput",{enumerable:!0,get:function(){return a(i).default}});var o=n(622);function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"TagsInputItem",{enumerable:!0,get:function(){return a(o).default}})},585:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e};t.default=s;var o=r(n(2)),a=r(n(89));function r(e){return e&&e.__esModule?e:{default:e}}var l=o.default.createElement("path",{d:"M12-6H-3h15zM-3 14h15-15zM.146 2.854a.5.5 0 0 0 0 .707l2.647 2.646a.999.999 0 0 0 1.414 0l4.647-4.646a.5.5 0 0 0 0-.707L8.146.146a.5.5 0 0 0-.707 0L3.5 4.086l-1.939-1.94a.5.5 0 0 0-.707 0l-.708.708z",fillRule:"evenodd"});function s(e){return o.default.createElement(a.default,i({},e,{viewBox:"0 0 9 7"}),l)}s.displayName="TickIcon"},593:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e};t.default=s;var o=r(n(2)),a=r(n(89));function r(e){return e&&e.__esModule?e:{default:e}}var l=o.default.createElement("path",{d:"M13 0v13M0 0v13m5.146-3.439l-2.249-2.25a.5.5 0 0 1 0-.708l.706-.706a.5.5 0 0 1 .708 0L5.5 7.086l3.439-3.439a.5.5 0 0 1 .708 0l.706.706a.5.5 0 0 1 0 .708l-4.499 4.5a.502.502 0 0 1-.708 0",fillRule:"evenodd"});function s(e){return o.default.createElement(a.default,i({},e,{viewBox:"0 0 13 13"}),l)}s.displayName="TickIconSmall"},594:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,o,a,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},s=n(2),u=b(s),c=b(n(1)),d=b(n(25)),f=b(n(585)),p=b(n(593)),h=n(81),m=n(35);function b(e){return e&&e.__esModule?e:{default:e}}function v(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}n(200);var y=function(e){return{background:e.background,borderColor:e.border,color:e.tick}},g={fill:null,width:null,height:null},k=(0,m.injectSheet)(function(e){var t=e.checkbox,n=t.types,i=n.regular,o=n.awesome;return l({checkbox:{extend:h.isolateMixin,fontFamily:e.fontFamily,fontSize:t.fontSize,position:"relative",display:"inline-block",verticalAlign:"top",cursor:"pointer",userSelect:"none",transition:"color "+t.animationDuration+"ms"},isDisabled:{cursor:"not-allowed",pointerEvents:"none"},regular:l({color:i.colors.default.text,"&$isDisabled":{color:i.colors.disabled.text},"& $fake":y(i.colors.default),"&$isEnabled:hover $fake":y(i.colors.hover),"&$isEnabled:active $fake":y(i.colors.active),"&$isDisabled $fake":y(i.colors.disabled),"&$isChecked $fake":y(i.colors.checked)},(0,h.focusSourceMixin)("other","& $real:focus ~ $fake",y(i.colors.focus))),awesome:{color:o.colors.default.text,"&$isDisabled":{color:o.colors.disabled.text},"& $fake":y(o.colors.default),"&$isEnabled:hover $fake":y(o.colors.hover),"&&$isChecked $fake, &&$indeterminate $fake":y(o.colors.checked),"&$isEnabled$isChecked:hover $fake, &$isEnabled$indeterminate:hover $fake":y(o.colors.checkedHover),"&$isDisabled $fake":y(o.colors.disabled),"&$isDisabled$isChecked $fake, &$isDisabled$indeterminate $fake":y(o.colors.checkedDisabled)},fake:{display:"block",boxSizing:"border-box",position:"absolute",borderRadius:t.borderRadius,borderStyle:"solid",borderWidth:1,lineHeight:0,transitionDuration:t.animationDuration,transitionProperty:"border-color, background-color, color","&:before":{position:"absolute",content:'""',opacity:0,top:0,right:0,bottom:.5,left:0,background:"currentColor",height:2,margin:"auto 2px",borderRadius:1,transform:"scaleX(0.4)",transitionDuration:t.animationDuration,transitionProperty:"transform, opacity"},"$indeterminate &:before":{opacity:1,transform:"scaleX(1)"},"$iconright &":{right:0},"$iconleft &":{left:0}},real:{position:"absolute",opacity:0,appearance:"none",pointerEvents:"none"},label:{fontSize:t.fontSize,fontWeight:"normal",display:"inline-block"},tick:{position:"absolute",fill:"currentColor",opacity:0,transitionDuration:t.animationDuration,transitionProperty:"transform, opacity","$isChecked &":{opacity:1}},isEnabled:{},isChecked:{},indeterminate:{},iconright:{},iconleft:{}},["medium","small"].reduce(function(e,n){return l({},e,(i={},o=n,a={"&$checkbox":{lineHeight:t.sizes[n].size+"px"},"& $fake":{top:"small"===n?Math.round((t.sizes[n].lineHeight-t.sizes[n].size)/2):Math.round((t.sizes[n].lineHeight-t.sizes[n].size)/2)-1,width:t.sizes[n].size,height:t.sizes[n].size},"& $tick":{top:Math.round((t.sizes[n].size-t.sizes[n].tickSize)/2)-1,left:Math.round((t.sizes[n].size-t.sizes[n].tickSize)/2)-1,width:t.sizes[n].tickSize,height:t.sizes[n].tickSize,transform:"small"===n?"translateY(-"+.3*t.sizes[n].tickSize+"px)":"translateY(-"+.5*t.sizes[n].tickSize+"px)","$isChecked&":{transform:"translateY(0)"}},"& $label":{lineHeight:t.sizes[n].lineHeight+"px","$iconright&":{paddingRight:t.sizes[n].size+t.sizes[n].labelMargin},"$iconleft&":{paddingLeft:t.sizes[n].size+t.sizes[n].labelMargin}}},o in i?Object.defineProperty(i,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):i[o]=a,i));var i,o,a},{}))},{name:"Checkbox"})((a=o=function(e){function t(){var e,n,i;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=Array(o),r=0;r<o;r++)a[r]=arguments[r];return n=i=v(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),i.onChange=function(e){i.props.onCheck&&i.props.onCheck(e,i.input.checked)},v(i,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,s.Component),r(t,[{key:"componentDidMount",value:function(){this.input&&(this.input.indeterminate=this.props.indeterminate)}},{key:"componentDidUpdate",value:function(){this.input&&(this.input.indeterminate=this.props.indeterminate)}},{key:"render",value:function(){var e=this,t=this.props,n=t.name,i=t.style,o=t.disabled,a=t.iconPosition,r=t.className,s=t.checkboxClassName,c=t.checkboxStyle,h=t.labelClassName,m=t.labelStyle,b=t.children,v=t.variation,y=t.size,k=t.checked,w=t.indeterminate,C=t.classes,x=(t.onCheck,t.theme,function(e,t){var n={};for(var i in e)t.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n}(t,["name","style","disabled","iconPosition","className","checkboxClassName","checkboxStyle","labelClassName","labelStyle","children","variation","size","checked","indeterminate","classes","onCheck","theme"])),O=(0,d.default)(r,C.checkbox,C[v],C[y],C["icon"+a],o?C.isDisabled:C.isEnabled,w?C.indeterminate:k&&C.isChecked);return u.default.createElement("label",{className:O,style:i},u.default.createElement("input",l({},x,{ref:function(t){e.input=t},checked:k,name:n,type:"checkbox",className:C.real,disabled:o,onChange:this.onChange})),u.default.createElement("span",{className:(0,d.default)(C.fake,s),style:c},"small"===y?u.default.createElement(p.default,{className:C.tick,style:g}):u.default.createElement(f.default,{className:C.tick,style:g})),u.default.createElement("span",{className:(0,d.default)(C.label,h),style:m},b))}}]),t}(),o.propTypes={name:c.default.string,disabled:c.default.bool,className:c.default.string,style:c.default.object,iconPosition:c.default.oneOf(["left","right"]),checked:c.default.bool,indeterminate:c.default.bool,onCheck:c.default.func,checkboxStyle:c.default.object,checkboxClassName:c.default.string,labelStyle:c.default.object,labelClassName:c.default.string,variation:c.default.oneOf(["regular","awesome"]),size:c.default.oneOf(["small","medium"])},o.defaultProps={iconPosition:"left",disabled:!1,checked:!1,indeterminate:!1,name:"",variation:"regular",size:"medium"},i=a))||i;t.default=k},595:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(594);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return(e=i,e&&e.__esModule?e:{default:e}).default;var e}})},621:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e};t.default=s;var o=r(n(2)),a=r(n(89));function r(e){return e&&e.__esModule?e:{default:e}}var l=o.default.createElement("path",{d:"M0 0v15V0zm15 0v15V0zM8.35 8.5l2.4 2.4a.5.5 0 0 1 0 .71l-.14.14a.5.5 0 0 1-.7 0L7.5 9.35l-2.4 2.4a.5.5 0 0 1-.71 0l-.14-.14a.5.5 0 0 1 0-.7l2.4-2.41-2.4-2.4a.5.5 0 0 1 0-.71l.14-.14a.5.5 0 0 1 .7 0l2.41 2.4 2.4-2.4a.5.5 0 0 1 .71 0l.14.14a.5.5 0 0 1 0 .7L8.35 8.5z"});function s(e){return o.default.createElement(a.default,i({},e,{viewBox:"0 0 15 15"}),l)}s.displayName="ClearIcon"},622:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,o,a,r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),s=n(2),u=m(s),c=m(n(1)),d=m(n(25)),f=n(81),p=n(35),h=m(n(621));function m(e){return e&&e.__esModule?e:{default:e}}function b(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var v={fill:null},y=(0,p.injectSheet)(function(e){return{root:{extend:f.isolateMixin,display:"inline-flex",fontSize:e.tagsInput.fontSize,lineHeight:e.tagsInput.height+"px",color:e.tagsInput.colors.default.text,whiteSpace:"nowrap",pointerEvents:"none"},text:{flex:"0 1 auto",overflow:"hidden",textOverflow:"ellipsis"},icon:{flex:"none",fontSize:15,width:"1em",height:"1em",alignSelf:"center",color:e.tagsInput.colors.default.icon,fill:"currentColor",cursor:"pointer",pointerEvents:"auto","&:hover , &:active":{color:e.tagsInput.colors.hover.icon}},isDisabled:{color:e.tagsInput.colors.disabled.text,"&& $icon":{color:e.tagsInput.colors.disabled.icon,cursor:"not-allowed"}}}},{name:"TagsInputItem"})((a=o=function(e){function t(){var e,n,i;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=Array(o),r=0;r<o;r++)a[r]=arguments[r];return n=i=b(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),i.handleClick=function(e){var t=i.props,n=t.value;(0,t.onClick)(e,n)},i.handleMouseDown=function(e){e.preventDefault()},b(i,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,s.Component),l(t,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.style,i=e.disabled,o=e.nodeRef,a=e.children,l=e.onClick,s=e.classes,c=(e.theme,e.value,function(e,t){var n={};for(var i in e)t.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n}(e,["className","style","disabled","nodeRef","children","onClick","classes","theme","value"]));return u.default.createElement("div",r({},c,{className:(0,d.default)(t,s.root,i&&s.isDisabled),style:n,ref:o}),u.default.createElement("span",{className:s.text},a),l&&u.default.createElement(h.default,{className:s.icon,size:null,style:v,onClick:i?void 0:this.handleClick,onMouseDown:i?void 0:this.handleMouseDown,role:i?void 0:"button"}))}}]),t}(),o.propTypes={className:c.default.string,style:c.default.object,value:c.default.any.isRequired,children:c.default.string.isRequired,onClick:c.default.func,nodeRef:c.default.func,disabled:c.default.bool},i=a))||i;y.displayName="ruiTagsInputItem",t.default=y},623:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,o,a,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},s=n(2),u=m(s),c=m(n(1)),d=m(n(25)),f=n(35),p=n(81),h=m(n(203));function m(e){return e&&e.__esModule?e:{default:e}}function b(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var v=(0,f.injectSheet)(function(e){return l({root:{extend:p.isolateMixin,fontSize:e.tagsInput.fontSize,fontFamily:e.fontFamily,fontWeight:400,userSelect:"none",overflow:"hidden"},items:{display:"flex",marginLeft:-e.tagsInput.sideMargin,"$isDisabled &":{pointerEvents:"none"}}},["medium","small"].reduce(function(t,n){return l({},t,(i={},o=n,a={"& $items":{minHeight:e.tagsInput.height+e.tagsInput.sizes[n].verticalMargin,marginTop:-e.tagsInput.sizes[n].verticalMargin},"& $item":{marginTop:e.tagsInput.sizes[n].verticalMargin}},o in i?Object.defineProperty(i,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):i[o]=a,i));var i,o,a},{}),{isExpanded:{"& $items":{flexWrap:"wrap"}},item:{"&&":{flex:"none",alignSelf:"flex-start",whiteSpace:"nowrap",maxWidth:"calc(100% - "+e.tagsInput.sideMargin+"px)",marginLeft:e.tagsInput.sideMargin,lineHeight:e.tagsInput.height+"px"}},more:{composes:"$item",color:e.tagsInput.colors.default.more,"$isDisabled &&":{color:e.tagsInput.colors.disabled.more}},isClickable:{cursor:"pointer",pointerEvents:"auto","&:hover, &:active":{color:e.tagsInput.colors.hover.more}},isHidden:{"&&":{order:1,visibility:"hidden"}},isDisabled:{}})},{name:"TagsInput"})(i=(0,h.default)("resize")((a=o=function(e){function t(){var e,n,i;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=Array(o),r=0;r<o;r++)a[r]=arguments[r];return n=i=b(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),i.state={visibleItemsCount:null,containerWidth:null},i.items=[],i.container=null,i.moreButton=null,i.handleWindowResize=function(){i.setState({containerWidth:Math.floor(i.container.getBoundingClientRect().width)})},i.saveItemsRefs=function(e,t,n){i.items.length=n,i.items[t]=e},i.saveContainerRef=function(e){i.container=e},i.saveMoreButtonRef=function(e){i.moreButton=e},i.onItemClick=function(e,t){if(!i.props.disabled){e.stopPropagation();var n=u.default.Children.toArray(i.props.children).map(function(e){return e.props.value});i.props.onChange(n.filter(function(e){return e!==t}))}},b(i,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,s.PureComponent),r(t,[{key:"componentDidMount",value:function(){this.props.windowEvents.on("resize",this.handleWindowResize,!1),this.props.isExpanded||this.setVisibleItemsCount()}},{key:"componentWillUpdate",value:function(e){0===u.default.Children.count(e.children)&&(this.items=[])}},{key:"componentDidUpdate",value:function(e,t){this.shouldVisibleItemsCountReset(this.state,t,this.props,e)&&this.setVisibleItemsCount()}},{key:"componentWillUnmount",value:function(){this.props.windowEvents.removeListener("resize",this.handleWindowResize,!1)}},{key:"shouldVisibleItemsCountReset",value:function(e,t,n,i){if(n.isExpanded)return!1;if(n.isExpanded!==i.isExpanded)return!0;if(e.containerWidth!==t.containerWidth)return!0;var o=u.default.Children.toArray(n.children),a=u.default.Children.toArray(i.children),r=o.length;if(r!==a.length)return!0;for(;r--;)if(o[r].props.children!==a[r].props.children)return!0;return!1}},{key:"setVisibleItemsCount",value:function(){var e=this.items.filter(function(e){return e}).length;if(e<1)this.setState({visibleItemsCount:null});else{for(var t=Math.ceil(this.container.getBoundingClientRect().width),n=Math.ceil(this.moreButton.getBoundingClientRect().width)+20,i=0,o=0,a=[];i<e;){var r=Math.ceil(this.items[i].getBoundingClientRect().width)+20;if(o+r>t)break;a.push(r),o+=r,i+=1}if(i<e)for(var l=t-o;l<n;){l+=a[i],i-=1}this.setState({visibleItemsCount:i<e?i:null})}}},{key:"render",value:function(){var e=this,t=this.props,n=t.children,i=t.className,o=t.style,a=t.disabled,r=t.classes,c=t.isExpanded,f=t.onMoreClick,p=t.size,h=t.theme.i18n,m=t.onChange,b=(t.windowEvents,function(e,t){var n={};for(var i in e)t.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n}(t,["children","className","style","disabled","classes","isExpanded","onMoreClick","size","theme","onChange","windowEvents"])),v=this.state.visibleItemsCount,y=(0,d.default)(i,r.root,r[p],a&&r.isDisabled,c&&r.isExpanded),g=u.default.Children.count(n),k=u.default.Children.map(n,function(t,n){if(!t.type||"ruiTagsInputItem"!==t.type.displayName)throw new Error("Child component should be instance of <TagsInputItem />");return(0,s.cloneElement)(t,{nodeRef:function(t){e.saveItemsRefs(t,n,g)},className:(0,d.default)(r.item,null!==v&&v<=n&&!c&&r.isHidden),key:t.props.children,onClick:m?e.onItemClick:void 0,disabled:a})}),w=null===v?0:k.length-v;return u.default.createElement("div",l({className:y,style:o},b),u.default.createElement("div",{ref:this.saveContainerRef,className:r.items},k,!c&&u.default.createElement("div",{className:(0,d.default)(r.more,f&&r.isClickable,0===w&&r.isHidden),role:f?"button":void 0,ref:this.saveMoreButtonRef,onClick:f},"+ ",h.tagsInput.more," ",w)))}}]),t}(),o.propTypes={children:c.default.node,disabled:c.default.bool,size:c.default.oneOf(["small","medium"]),className:c.default.string,isExpanded:c.default.bool,style:c.default.object,onChange:c.default.func,onMoreClick:c.default.func},o.defaultProps={size:"medium"},i=a))||i)||i;t.default=v}}]);