(self.webpackChunkhomepage=self.webpackChunkhomepage||[]).push([[351],{6494:function(e){"use strict";e.exports=Object.assign},2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function o(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){if(e.constructor!==i.constructor)return!1;var c,l,u,s;if(Array.isArray(e)){if((c=e.length)!=i.length)return!1;for(l=c;0!=l--;)if(!o(e[l],i[l]))return!1;return!0}if(n&&e instanceof Map&&i instanceof Map){if(e.size!==i.size)return!1;for(s=e.entries();!(l=s.next()).done;)if(!i.has(l.value[0]))return!1;for(s=e.entries();!(l=s.next()).done;)if(!o(l.value[1],i.get(l.value[0])))return!1;return!0}if(r&&e instanceof Set&&i instanceof Set){if(e.size!==i.size)return!1;for(s=e.entries();!(l=s.next()).done;)if(!i.has(l.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(i)){if((c=e.length)!=i.length)return!1;for(l=c;0!=l--;)if(e[l]!==i[l])return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===i.toString();if((c=(u=Object.keys(e)).length)!==Object.keys(i).length)return!1;for(l=c;0!=l--;)if(!Object.prototype.hasOwnProperty.call(i,u[l]))return!1;if(t&&e instanceof Element)return!1;for(l=c;0!=l--;)if(("_owner"!==u[l]&&"__v"!==u[l]&&"__o"!==u[l]||!e.$$typeof)&&!o(e[u[l]],i[u[l]]))return!1;return!0}return e!=e&&i!=i}e.exports=function(e,t){try{return o(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},5414:function(e,t,n){"use strict";n.r(t),n.d(t,{Helmet:function(){return he}});var r,a,o,i,c=n(5697),l=n.n(c),u=n(4839),s=n.n(u),f=n(2993),d=n.n(f),p=n(7294),m=n(6494),h=n.n(m),g="bodyAttributes",y="htmlAttributes",b="titleAttributes",v={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(v).map((function(e){return v[e]})),"charset"),T="cssText",E="href",x="http-equiv",k="innerHTML",O="itemprop",A="name",C="property",S="rel",L="src",j="target",N={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},P="defaultTitle",I="defer",M="encodeSpecialCharacters",_="onChangeClientState",R="titleTemplate",H=Object.keys(N).reduce((function(e,t){return e[N[t]]=t,e}),{}),D=[v.NOSCRIPT,v.SCRIPT,v.STYLE],B="data-react-helmet",Y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},q=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},U=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},z=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},K=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},W=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},V=function(e){var t=Q(e,v.TITLE),n=Q(e,R);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=Q(e,P);return t||r||void 0},G=function(e){return Q(e,_)||function(){}},$=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return F({},e,t)}),{})},Z=function(e,t){return t.filter((function(e){return void 0!==e[v.BASE]})).map((function(e){return e[v.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var o=r[a].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},J=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+Y(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),i=0;i<o.length;i++){var c=o[i],l=c.toLowerCase();-1===t.indexOf(l)||n===S&&"canonical"===e[n].toLowerCase()||l===S&&"stylesheet"===e[l].toLowerCase()||(n=l),-1===t.indexOf(c)||c!==k&&c!==T&&c!==O||(n=c)}if(!n||!e[n])return!1;var u=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][u]&&(a[n][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(a),i=0;i<o.length;i++){var c=o[i],l=h()({},r[c],a[c]);r[c]=l}return e}),[]).reverse()},Q=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},X=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){X(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X:n.g.requestAnimationFrame||X,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:n.g.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,oe=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,u=e.scriptTags,s=e.styleTags,f=e.title,d=e.titleAttributes;le(v.BODY,r),le(v.HTML,a),ce(f,d);var p={baseTag:ue(v.BASE,n),linkTags:ue(v.LINK,o),metaTags:ue(v.META,i),noscriptTags:ue(v.NOSCRIPT,c),scriptTags:ue(v.SCRIPT,u),styleTags:ue(v.STYLE,s)},m={},h={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(h[e]=p[e].oldTags)})),t&&t(),l(e,m,h)},ie=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),le(v.TITLE,t)},le=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(B),a=r?r.split(","):[],o=[].concat(a),i=Object.keys(t),c=0;c<i.length;c++){var l=i[c],u=t[l]||"";n.getAttribute(l)!==u&&n.setAttribute(l,u),-1===a.indexOf(l)&&a.push(l);var s=o.indexOf(l);-1!==s&&o.splice(s,1)}for(var f=o.length-1;f>=0;f--)n.removeAttribute(o[f]);a.length===o.length?n.removeAttribute(B):n.getAttribute(B)!==i.join(",")&&n.setAttribute(B,i.join(","))}},ue=function(e,t){var n=document.head||document.querySelector(v.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),a=Array.prototype.slice.call(r),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===k)n.innerHTML=t.innerHTML;else if(r===T)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(B,"true"),a.some((function(e,t){return i=t,n.isEqualNode(e)}))?a.splice(i,1):o.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:o}},se=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[N[n]||n]=e[n],t}),t)},de=function(e,t,n){switch(e){case v.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[B]=!0,a=fe(n,r),[p.createElement(v.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=se(n),o=ie(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+W(o,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+W(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case g:case y:return{toComponent:function(){return fe(t)},toString:function(){return se(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})[B]=!0,r);return Object.keys(t).forEach((function(e){var n=N[e]||e;if(n===k||n===T){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),p.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===k||e===T)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+W(r[t],n)+'"';return e?e+" "+a:a}),""),o=r.innerHTML||r.cssText||"",i=-1===D.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}},pe=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.scriptTags,u=e.styleTags,s=e.title,f=void 0===s?"":s,d=e.titleAttributes;return{base:de(v.BASE,t,r),bodyAttributes:de(g,n,r),htmlAttributes:de(y,a,r),link:de(v.LINK,o,r),meta:de(v.META,i,r),noscript:de(v.NOSCRIPT,c,r),script:de(v.SCRIPT,l,r),style:de(v.STYLE,u,r),title:de(v.TITLE,{title:f,titleAttributes:d},r)}},me=s()((function(e){return{baseTag:Z([E,j],e),bodyAttributes:$(g,e),defer:Q(e,I),encode:Q(e,M),htmlAttributes:$(y,e),linkTags:J(v.LINK,[S,E],e),metaTags:J(v.META,[A,w,x,C,O],e),noscriptTags:J(v.NOSCRIPT,[k],e),onChangeClientState:G(e),scriptTags:J(v.SCRIPT,[L,k],e),styleTags:J(v.STYLE,[T],e),title:V(e),titleAttributes:$(b,e)}}),(function(e){ae&&ne(ae),e.defer?ae=te((function(){oe(e,(function(){ae=null}))})):(oe(e),ae=null)}),pe)((function(){return null})),he=(a=me,i=o=function(e){function t(){return q(this,t),K(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!d()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case v.SCRIPT:case v.NOSCRIPT:return{innerHTML:t};case v.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return F({},r,((t={})[n.type]=[].concat(r[n.type]||[],[F({},a,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(r.type){case v.TITLE:return F({},a,((t={})[r.type]=i,t.titleAttributes=F({},o),t));case v.BODY:return F({},a,{bodyAttributes:F({},o)});case v.HTML:return F({},a,{htmlAttributes:F({},o)})}return F({},a,((n={})[r.type]=F({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=F({},t);return Object.keys(e).forEach((function(t){var r;n=F({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return p.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[H[n]||n]=e[n],t}),t)}(z(a,["children"]));switch(n.warnOnInvalidChildren(e,o),e.type){case v.LINK:case v.META:case v.NOSCRIPT:case v.SCRIPT:case v.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=z(e,["children"]),r=F({},n);return t&&(r=this.mapChildrenToProps(t,r)),p.createElement(a,r)},U(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(p.Component),o.propTypes={base:l().object,bodyAttributes:l().object,children:l().oneOfType([l().arrayOf(l().node),l().node]),defaultTitle:l().string,defer:l().bool,encodeSpecialCharacters:l().bool,htmlAttributes:l().object,link:l().arrayOf(l().object),meta:l().arrayOf(l().object),noscript:l().arrayOf(l().object),onChangeClientState:l().func,script:l().arrayOf(l().object),style:l().arrayOf(l().object),title:l().string,titleAttributes:l().object,titleTemplate:l().string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=a.peek,o.rewind=function(){var e=a.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);he.renderStatic=he.rewind,t.default=he},4839:function(e,t,n){"use strict";var r,a=n(7294),o=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l,u=[];function s(){l=e(u.map((function(e){return e.props}))),f.canUseDOM?t(l):n&&(l=n(l))}var f=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return l},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,u=[],e};var i=a.prototype;return i.UNSAFE_componentWillMount=function(){u.push(this),s()},i.componentDidUpdate=function(){s()},i.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),s()},i.render=function(){return o.createElement(r,this.props)},a}(a.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(f,"canUseDOM",c),f}}},6549:function(e,t,n){"use strict";var r=n(4836);t.__esModule=!0,t.Helmet=void 0;var a=r(n(7071)),o=r(n(7294)),i=n(5414),c=n(8112),l=["children"];t.Helmet=function(e){var t=e.children,n=(0,a.default)(e,l),r=(0,c.useI18next)(),u=r.languages,s=r.language,f=r.originalPath,d=r.defaultLanguage,p=r.siteUrl,m=void 0===p?"":p,h=function(e){var t=m+(e===d?"":"/"+e)+f;return t.endsWith("/")?t:t+"/"};return o.default.createElement(i.Helmet,n,o.default.createElement("html",{lang:s}),o.default.createElement("link",{rel:"canonical",href:h(s)}),u.map((function(e){return o.default.createElement("link",{rel:"alternate",key:e,href:h(e),hrefLang:e})})),o.default.createElement("link",{rel:"alternate",href:h(d),hrefLang:"x-default"}),t)}},2562:function(e,t,n){"use strict";var r=n(4836);t.__esModule=!0,t.Link=void 0;var a=r(n(434)),o=r(n(7071)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=a?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(r,o,i):r[o]=e[o]}r.default=e,n&&n.set(e,r);return r}(n(7294)),c=n(9402),l=n(1597),u=n(7610),s=["language","to","onClick"];function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var d=i.default.forwardRef((function(e,t){var n=e.language,r=e.to,f=e.onClick,d=(0,o.default)(e,s),p=(0,i.useContext)(c.I18nextContext),m=n||p.language,h=""+function(e){return p.generateDefaultLanguagePage||e!==p.defaultLanguage?"/"+e:""}(m)+r;return i.default.createElement(l.Link,(0,a.default)({},d,{to:h,innerRef:t,hrefLang:m,onClick:function(e){n&&localStorage.setItem(u.LANGUAGE_KEY,n),f&&f(e)}}))}));t.Link=d},531:function(e,t,n){"use strict";t.__esModule=!0;var r=n(549);Object.keys(r).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===r[e]||(t[e]=r[e]))}));var a=n(9402);Object.keys(a).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===a[e]||(t[e]=a[e]))}));var o=n(8112);Object.keys(o).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===o[e]||(t[e]=o[e]))}));var i=n(2562);Object.keys(i).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===i[e]||(t[e]=i[e]))}));var c=n(6549);Object.keys(c).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===c[e]||(t[e]=c[e]))}))},8112:function(e,t,n){"use strict";var r=n(4836);t.__esModule=!0,t.useI18next=void 0;var a=r(n(434)),o=n(549),i=n(7294),c=n(1597),l=n(9402),u=n(7610);t.useI18next=function(e,t){var n=(0,o.useTranslation)(e,t),r=n.i18n,s=n.t,f=n.ready,d=(0,i.useContext)(l.I18nextContext),p=d.routed,m=d.defaultLanguage,h=d.generateDefaultLanguagePage,g=function(e){return h||e!==m?"/"+e:""};return(0,a.default)({},d,{i18n:r,t:s,ready:f,navigate:function(e,t){var n=g(d.language),r=p?""+n+e:""+e;return(0,c.navigate)(r,t)},changeLanguage:function(e,t,n){var r=""+g(e)+(t||function(e){if(!p)return e;var t=e.indexOf("/",1);return e.substring(t)}(function(e){var t="/Homepage";return 0===e.indexOf(t)&&(e=e.slice(t.length)),e}(window.location.pathname)))+window.location.search;return localStorage.setItem(u.LANGUAGE_KEY,e),(0,c.navigate)(r,n)}})}},7782:function(e,t,n){e.exports=n(531)},6768:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(7294),a=n(7782),o=function(){var e=(0,a.useTranslation)().t;return r.createElement("footer",{className:"bg-gray-800"},r.createElement("div",{className:"container px-6 py-8 mx-auto"},r.createElement("div",{className:"text-center"},r.createElement("a",{href:"#",className:"text-2xl font-bold text-white hover:text-gray-300"},"Steuerberatung Alexander Rabl")),r.createElement("hr",{className:"my-10 border-gray-700"}),r.createElement("div",{className:"flex flex-col items-center sm:flex-row sm:justify-between"},r.createElement("p",{className:"text-sm text-gray-400"},"© Copyright 2022. All Rights Reserved."),r.createElement("div",{className:"flex mt-3 -mx-2 sm:mt-0"},r.createElement(a.Link,{to:"#",className:"mx-2 text-sm text-primary-500 hover:underline","aria-label":"Reddit"},"AAB"),r.createElement(a.Link,{to:"#",className:"mx-2 text-sm text-primary-500 hover:underline","aria-label":"Reddit"},"Privacy"),r.createElement(a.Link,{to:"#",className:"mx-2 text-sm text-primary-500 hover:underline","aria-label":"Reddit"},"Cookies"),r.createElement(a.Link,{to:"/legal-notice",className:"mx-2 text-sm text-primary-500 hover:underline","aria-label":e("LegalNotice")},r.createElement(a.Trans,null,"LegalNotice"))))))},i=function(){var e=(0,a.useI18next)(),t=e.languages,n=e.originalPath,o=(0,r.useState)(!1),i=o[0],c=o[1];return r.createElement("div",null,r.createElement("nav",{className:"flex flex-wrap p-2 bg-gray-800 hidden lg:block"},r.createElement("div",{className:"text-end mr-10"},r.createElement("ul",{className:"languages lg:flex-grow"},t.map((function(e){return r.createElement("li",{className:"inline-block uppercase mx-3 text-white hover:underline",key:e},r.createElement(a.Link,{to:n,language:e},e))}))))),r.createElement("nav",{className:"flex flex-wrap items-center justify-between p-4 bg-primary-700"},r.createElement("div",{className:"flex items-center flex-shrink-0 mr-6 text-white"},r.createElement(a.Link,{to:"/",className:"text-xl font-semibold tracking-tight lg:ml-40"},"Alexander Rabl")),r.createElement("div",{className:"block lg:hidden"},r.createElement("button",{onClick:function(){return c(!i)},className:"flex items-center px-3 py-2 text-white border border-white rounded hover:text-white hover:border-white"},r.createElement("svg",{className:"w-3 h-3 fill-current",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},r.createElement("title",null,"Menu"),r.createElement("path",{d:"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"})))),r.createElement("div",{className:(i?"block":"hidden")+" w-full block flex-grow lg:flex lg:items-center lg:w-auto"},r.createElement("div",{className:"text-md lg:flex-grow"},r.createElement(a.Link,{to:"/",href:"#responsive-header",className:"block mt-4 mr-4 text-white lg:inline-block lg:mt-0 hover:text-white"},"Home"),r.createElement(a.Link,{to:"/about",className:"block mt-4 mr-4 text-white lg:inline-block lg:mt-0 hover:text-white"},"About"),r.createElement(a.Link,{to:"/services",className:"block mt-4 mr-4 text-white lg:inline-block lg:mt-0 hover:text-white"},"Services"),r.createElement(a.Link,{to:"/news",className:"block mt-4 mr-4 text-white lg:inline-block lg:mt-0 hover:text-white"},"News"),r.createElement(a.Link,{to:"/contact",className:"block mt-4 mr-4 text-white lg:inline-block lg:mt-0 hover:text-white"},"Contact")),r.createElement("div",{className:"lg:hidden mr-10"},r.createElement("ul",{className:"languages inline-block flex flex-grow"},t.map((function(e){return r.createElement("li",{key:e},r.createElement(a.Link,{to:n,className:"block uppercase mt-4 mr-5 text-white inline-block lg:mt-0 hover:text-white hover:underline",language:e},e))})))))))},c=function(e){var t=e.children;return r.createElement(r.Fragment,null,r.createElement(i,null),r.createElement("main",{className:"text-gray-900"},t),r.createElement(o,null))}}}]);
//# sourceMappingURL=commons-27d97d5880ebcfeed787.js.map