(self.webpackChunkhomepage=self.webpackChunkhomepage||[]).push([[594],{9806:function(e,t,n){"use strict";n(5743),Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(7294),u=(r=o)&&"object"==typeof r&&"default"in r?r.default:r,i=function(){return i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},i.apply(this,arguments)},c="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{};function a(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function f(e,t){return e(t={exports:{}},t.exports),t.exports}var l=f((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.BLOCKS=void 0,function(e){e.DOCUMENT="document",e.PARAGRAPH="paragraph",e.HEADING_1="heading-1",e.HEADING_2="heading-2",e.HEADING_3="heading-3",e.HEADING_4="heading-4",e.HEADING_5="heading-5",e.HEADING_6="heading-6",e.OL_LIST="ordered-list",e.UL_LIST="unordered-list",e.LIST_ITEM="list-item",e.HR="hr",e.QUOTE="blockquote",e.EMBEDDED_ENTRY="embedded-entry-block",e.EMBEDDED_ASSET="embedded-asset-block",e.TABLE="table",e.TABLE_ROW="table-row",e.TABLE_CELL="table-cell",e.TABLE_HEADER_CELL="table-header-cell"}(t.BLOCKS||(t.BLOCKS={}))}));a(l);l.BLOCKS;var E=f((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.INLINES=void 0,function(e){e.HYPERLINK="hyperlink",e.ENTRY_HYPERLINK="entry-hyperlink",e.ASSET_HYPERLINK="asset-hyperlink",e.EMBEDDED_ENTRY="embedded-entry-inline"}(t.INLINES||(t.INLINES={}))}));a(E);E.INLINES;var s=f((function(e,t){var n;Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.BOLD="bold",e.ITALIC="italic",e.UNDERLINE="underline",e.CODE="code"}(n||(n={})),t.default=n}));a(s);var L=f((function(e,t){var n,r=c&&c.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var r,o=0,u=t.length;o<u;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))};Object.defineProperty(t,"__esModule",{value:!0}),t.V1_NODE_TYPES=t.TEXT_CONTAINERS=t.HEADINGS=t.CONTAINERS=t.VOID_BLOCKS=t.TABLE_BLOCKS=t.LIST_ITEM_BLOCKS=t.TOP_LEVEL_BLOCKS=void 0,t.TOP_LEVEL_BLOCKS=[l.BLOCKS.PARAGRAPH,l.BLOCKS.HEADING_1,l.BLOCKS.HEADING_2,l.BLOCKS.HEADING_3,l.BLOCKS.HEADING_4,l.BLOCKS.HEADING_5,l.BLOCKS.HEADING_6,l.BLOCKS.OL_LIST,l.BLOCKS.UL_LIST,l.BLOCKS.HR,l.BLOCKS.QUOTE,l.BLOCKS.EMBEDDED_ENTRY,l.BLOCKS.EMBEDDED_ASSET,l.BLOCKS.TABLE],t.LIST_ITEM_BLOCKS=[l.BLOCKS.PARAGRAPH,l.BLOCKS.HEADING_1,l.BLOCKS.HEADING_2,l.BLOCKS.HEADING_3,l.BLOCKS.HEADING_4,l.BLOCKS.HEADING_5,l.BLOCKS.HEADING_6,l.BLOCKS.OL_LIST,l.BLOCKS.UL_LIST,l.BLOCKS.HR,l.BLOCKS.QUOTE,l.BLOCKS.EMBEDDED_ENTRY,l.BLOCKS.EMBEDDED_ASSET],t.TABLE_BLOCKS=[l.BLOCKS.TABLE,l.BLOCKS.TABLE_ROW,l.BLOCKS.TABLE_CELL,l.BLOCKS.TABLE_HEADER_CELL],t.VOID_BLOCKS=[l.BLOCKS.HR,l.BLOCKS.EMBEDDED_ENTRY,l.BLOCKS.EMBEDDED_ASSET],t.CONTAINERS=((n={})[l.BLOCKS.OL_LIST]=[l.BLOCKS.LIST_ITEM],n[l.BLOCKS.UL_LIST]=[l.BLOCKS.LIST_ITEM],n[l.BLOCKS.LIST_ITEM]=t.LIST_ITEM_BLOCKS,n[l.BLOCKS.QUOTE]=[l.BLOCKS.PARAGRAPH],n[l.BLOCKS.TABLE]=[l.BLOCKS.TABLE_ROW],n[l.BLOCKS.TABLE_ROW]=[l.BLOCKS.TABLE_CELL,l.BLOCKS.TABLE_HEADER_CELL],n[l.BLOCKS.TABLE_CELL]=[l.BLOCKS.PARAGRAPH],n[l.BLOCKS.TABLE_HEADER_CELL]=[l.BLOCKS.PARAGRAPH],n),t.HEADINGS=[l.BLOCKS.HEADING_1,l.BLOCKS.HEADING_2,l.BLOCKS.HEADING_3,l.BLOCKS.HEADING_4,l.BLOCKS.HEADING_5,l.BLOCKS.HEADING_6],t.TEXT_CONTAINERS=r([l.BLOCKS.PARAGRAPH],t.HEADINGS,!0),t.V1_NODE_TYPES=[l.BLOCKS.DOCUMENT,l.BLOCKS.PARAGRAPH,l.BLOCKS.HEADING_1,l.BLOCKS.HEADING_2,l.BLOCKS.HEADING_3,l.BLOCKS.HEADING_4,l.BLOCKS.HEADING_5,l.BLOCKS.HEADING_6,l.BLOCKS.OL_LIST,l.BLOCKS.UL_LIST,l.BLOCKS.LIST_ITEM,l.BLOCKS.HR,l.BLOCKS.QUOTE,l.BLOCKS.EMBEDDED_ENTRY,l.BLOCKS.EMBEDDED_ASSET,E.INLINES.HYPERLINK,E.INLINES.ENTRY_HYPERLINK,E.INLINES.ASSET_HYPERLINK,E.INLINES.EMBEDDED_ENTRY,"text"]}));a(L);L.V1_NODE_TYPES,L.TEXT_CONTAINERS,L.HEADINGS,L.CONTAINERS,L.VOID_BLOCKS,L.TABLE_BLOCKS,L.LIST_ITEM_BLOCKS,L.TOP_LEVEL_BLOCKS;var O=f((function(e,t){Object.defineProperty(t,"__esModule",{value:!0})}));a(O);var S=f((function(e,t){Object.defineProperty(t,"__esModule",{value:!0})}));a(S);var p=f((function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n={nodeType:l.BLOCKS.DOCUMENT,data:{},content:[{nodeType:l.BLOCKS.PARAGRAPH,data:{},content:[{nodeType:"text",value:"",marks:[],data:{}}]}]};t.default=n}));a(p);var _=f((function(e,t){function n(e,t){for(var n=0,r=Object.keys(e);n<r.length;n++){if(t===e[r[n]])return!0}return!1}Object.defineProperty(t,"__esModule",{value:!0}),t.isText=t.isBlock=t.isInline=void 0,t.isInline=function(e){return n(E.INLINES,e.nodeType)},t.isBlock=function(e){return n(l.BLOCKS,e.nodeType)},t.isText=function(e){return"text"===e.nodeType}}));a(_);_.isText,_.isBlock,_.isInline;var d=f((function(e,t){var n=c&&c.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),r=c&&c.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=c&&c.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)},u=c&&c.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)"default"!==o&&Object.prototype.hasOwnProperty.call(e,o)&&n(t,e,o);return r(t,e),t},i=c&&c.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.helpers=t.EMPTY_DOCUMENT=t.MARKS=t.INLINES=t.BLOCKS=void 0,Object.defineProperty(t,"BLOCKS",{enumerable:!0,get:function(){return l.BLOCKS}}),Object.defineProperty(t,"INLINES",{enumerable:!0,get:function(){return E.INLINES}}),Object.defineProperty(t,"MARKS",{enumerable:!0,get:function(){return i(s).default}}),o(L,t),o(O,t),o(S,t),Object.defineProperty(t,"EMPTY_DOCUMENT",{enumerable:!0,get:function(){return i(p).default}});var a=u(_);t.helpers=a}));a(d);var B,y,v=d.helpers,C=(d.EMPTY_DOCUMENT,d.MARKS),T=d.INLINES,A=d.BLOCKS;function I(e,t){return e.map((function(e,n){return r=N(e,t),u=n,o.isValidElement(r)&&null===r.key?o.cloneElement(r,{key:u}):r;var r,u}))}function N(e,t){var n=t.renderNode,r=t.renderMark,o=t.renderText;if(v.isText(e))return e.marks.reduce((function(e,t){return r[t.type]?r[t.type](e):e}),o?o(e.value):e.value);var i=I(e.content,t);return e.nodeType&&n[e.nodeType]?n[e.nodeType](e,i):u.createElement(u.Fragment,null,i)}var b=((B={})[A.DOCUMENT]=function(e,t){return t},B[A.PARAGRAPH]=function(e,t){return u.createElement("p",null,t)},B[A.HEADING_1]=function(e,t){return u.createElement("h1",null,t)},B[A.HEADING_2]=function(e,t){return u.createElement("h2",null,t)},B[A.HEADING_3]=function(e,t){return u.createElement("h3",null,t)},B[A.HEADING_4]=function(e,t){return u.createElement("h4",null,t)},B[A.HEADING_5]=function(e,t){return u.createElement("h5",null,t)},B[A.HEADING_6]=function(e,t){return u.createElement("h6",null,t)},B[A.EMBEDDED_ENTRY]=function(e,t){return u.createElement("div",null,t)},B[A.UL_LIST]=function(e,t){return u.createElement("ul",null,t)},B[A.OL_LIST]=function(e,t){return u.createElement("ol",null,t)},B[A.LIST_ITEM]=function(e,t){return u.createElement("li",null,t)},B[A.QUOTE]=function(e,t){return u.createElement("blockquote",null,t)},B[A.HR]=function(){return u.createElement("hr",null)},B[A.TABLE]=function(e,t){return u.createElement("table",null,u.createElement("tbody",null,t))},B[A.TABLE_ROW]=function(e,t){return u.createElement("tr",null,t)},B[A.TABLE_HEADER_CELL]=function(e,t){return u.createElement("th",null,t)},B[A.TABLE_CELL]=function(e,t){return u.createElement("td",null,t)},B[T.ASSET_HYPERLINK]=function(e){return m(T.ASSET_HYPERLINK,e)},B[T.ENTRY_HYPERLINK]=function(e){return m(T.ENTRY_HYPERLINK,e)},B[T.EMBEDDED_ENTRY]=function(e){return m(T.EMBEDDED_ENTRY,e)},B[T.HYPERLINK]=function(e,t){return u.createElement("a",{href:e.data.uri},t)},B),K=((y={})[C.BOLD]=function(e){return u.createElement("b",null,e)},y[C.ITALIC]=function(e){return u.createElement("i",null,e)},y[C.UNDERLINE]=function(e){return u.createElement("u",null,e)},y[C.CODE]=function(e){return u.createElement("code",null,e)},y);function m(e,t){return u.createElement("span",{key:t.data.target.sys.id},"type: ",t.nodeType," id: ",t.data.target.sys.id)}t.documentToReactComponents=function(e,t){return void 0===t&&(t={}),e?N(e,{renderNode:i(i({},b),t.renderNode),renderMark:i(i({},K),t.renderMark),renderText:t.renderText}):null}},8147:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.BLOCKS=void 0,function(e){e.DOCUMENT="document",e.PARAGRAPH="paragraph",e.HEADING_1="heading-1",e.HEADING_2="heading-2",e.HEADING_3="heading-3",e.HEADING_4="heading-4",e.HEADING_5="heading-5",e.HEADING_6="heading-6",e.OL_LIST="ordered-list",e.UL_LIST="unordered-list",e.LIST_ITEM="list-item",e.HR="hr",e.QUOTE="blockquote",e.EMBEDDED_ENTRY="embedded-entry-block",e.EMBEDDED_ASSET="embedded-asset-block",e.TABLE="table",e.TABLE_ROW="table-row",e.TABLE_CELL="table-cell",e.TABLE_HEADER_CELL="table-header-cell"}(t.BLOCKS||(t.BLOCKS={}))},6763:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(8147),o={nodeType:r.BLOCKS.DOCUMENT,data:{},content:[{nodeType:r.BLOCKS.PARAGRAPH,data:{},content:[{nodeType:"text",value:"",marks:[],data:{}}]}]};t.default=o},5033:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isText=t.isBlock=t.isInline=void 0;var r=n(8147),o=n(6065);function u(e,t){for(var n=0,r=Object.keys(e);n<r.length;n++){if(t===e[r[n]])return!0}return!1}t.isInline=function(e){return u(o.INLINES,e.nodeType)},t.isBlock=function(e){return u(r.BLOCKS,e.nodeType)},t.isText=function(e){return"text"===e.nodeType}},2405:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),u=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)},i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t},c=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.helpers=t.EMPTY_DOCUMENT=t.MARKS=t.INLINES=t.BLOCKS=void 0;var a=n(8147);Object.defineProperty(t,"BLOCKS",{enumerable:!0,get:function(){return a.BLOCKS}});var f=n(6065);Object.defineProperty(t,"INLINES",{enumerable:!0,get:function(){return f.INLINES}});var l=n(5838);Object.defineProperty(t,"MARKS",{enumerable:!0,get:function(){return c(l).default}}),u(n(1066),t),u(n(6383),t),u(n(2056),t);var E=n(6763);Object.defineProperty(t,"EMPTY_DOCUMENT",{enumerable:!0,get:function(){return c(E).default}});var s=i(n(5033));t.helpers=s},6065:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.INLINES=void 0,function(e){e.HYPERLINK="hyperlink",e.ENTRY_HYPERLINK="entry-hyperlink",e.ASSET_HYPERLINK="asset-hyperlink",e.EMBEDDED_ENTRY="embedded-entry-inline"}(t.INLINES||(t.INLINES={}))},5838:function(e,t){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.BOLD="bold",e.ITALIC="italic",e.UNDERLINE="underline",e.CODE="code"}(n||(n={})),t.default=n},2056:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},1066:function(e,t,n){"use strict";var r,o=this&&this.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var r,o=0,u=t.length;o<u;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))};Object.defineProperty(t,"__esModule",{value:!0}),t.V1_NODE_TYPES=t.TEXT_CONTAINERS=t.HEADINGS=t.CONTAINERS=t.VOID_BLOCKS=t.TABLE_BLOCKS=t.LIST_ITEM_BLOCKS=t.TOP_LEVEL_BLOCKS=void 0;var u=n(8147),i=n(6065);t.TOP_LEVEL_BLOCKS=[u.BLOCKS.PARAGRAPH,u.BLOCKS.HEADING_1,u.BLOCKS.HEADING_2,u.BLOCKS.HEADING_3,u.BLOCKS.HEADING_4,u.BLOCKS.HEADING_5,u.BLOCKS.HEADING_6,u.BLOCKS.OL_LIST,u.BLOCKS.UL_LIST,u.BLOCKS.HR,u.BLOCKS.QUOTE,u.BLOCKS.EMBEDDED_ENTRY,u.BLOCKS.EMBEDDED_ASSET,u.BLOCKS.TABLE],t.LIST_ITEM_BLOCKS=[u.BLOCKS.PARAGRAPH,u.BLOCKS.HEADING_1,u.BLOCKS.HEADING_2,u.BLOCKS.HEADING_3,u.BLOCKS.HEADING_4,u.BLOCKS.HEADING_5,u.BLOCKS.HEADING_6,u.BLOCKS.OL_LIST,u.BLOCKS.UL_LIST,u.BLOCKS.HR,u.BLOCKS.QUOTE,u.BLOCKS.EMBEDDED_ENTRY,u.BLOCKS.EMBEDDED_ASSET],t.TABLE_BLOCKS=[u.BLOCKS.TABLE,u.BLOCKS.TABLE_ROW,u.BLOCKS.TABLE_CELL,u.BLOCKS.TABLE_HEADER_CELL],t.VOID_BLOCKS=[u.BLOCKS.HR,u.BLOCKS.EMBEDDED_ENTRY,u.BLOCKS.EMBEDDED_ASSET],t.CONTAINERS=((r={})[u.BLOCKS.OL_LIST]=[u.BLOCKS.LIST_ITEM],r[u.BLOCKS.UL_LIST]=[u.BLOCKS.LIST_ITEM],r[u.BLOCKS.LIST_ITEM]=t.LIST_ITEM_BLOCKS,r[u.BLOCKS.QUOTE]=[u.BLOCKS.PARAGRAPH],r[u.BLOCKS.TABLE]=[u.BLOCKS.TABLE_ROW],r[u.BLOCKS.TABLE_ROW]=[u.BLOCKS.TABLE_CELL,u.BLOCKS.TABLE_HEADER_CELL],r[u.BLOCKS.TABLE_CELL]=[u.BLOCKS.PARAGRAPH],r[u.BLOCKS.TABLE_HEADER_CELL]=[u.BLOCKS.PARAGRAPH],r),t.HEADINGS=[u.BLOCKS.HEADING_1,u.BLOCKS.HEADING_2,u.BLOCKS.HEADING_3,u.BLOCKS.HEADING_4,u.BLOCKS.HEADING_5,u.BLOCKS.HEADING_6],t.TEXT_CONTAINERS=o([u.BLOCKS.PARAGRAPH],t.HEADINGS,!0),t.V1_NODE_TYPES=[u.BLOCKS.DOCUMENT,u.BLOCKS.PARAGRAPH,u.BLOCKS.HEADING_1,u.BLOCKS.HEADING_2,u.BLOCKS.HEADING_3,u.BLOCKS.HEADING_4,u.BLOCKS.HEADING_5,u.BLOCKS.HEADING_6,u.BLOCKS.OL_LIST,u.BLOCKS.UL_LIST,u.BLOCKS.LIST_ITEM,u.BLOCKS.HR,u.BLOCKS.QUOTE,u.BLOCKS.EMBEDDED_ENTRY,u.BLOCKS.EMBEDDED_ASSET,i.INLINES.HYPERLINK,i.INLINES.ENTRY_HYPERLINK,i.INLINES.ASSET_HYPERLINK,i.INLINES.EMBEDDED_ENTRY,"text"]},6383:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},5830:function(e,t,n){"use strict";n.r(t);var r=n(2459),o=n.n(r),u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function i(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var c={},a=function(e){return e&&e.sys&&"Link"===e.sys.type},f=function(e){return e.type+"!"+e.id},l=function e(t,n,r,o){if(n(t))return r(t);if(t&&"object"===(void 0===t?"undefined":u(t))){for(var i in t)t.hasOwnProperty(i)&&(t[i]=e(t[i],n,r,o));o&&(t=function(e){if(Array.isArray(e))return e.filter((function(e){return e!==c}));for(var t in e)e[t]===c&&delete e[t];return e}(t))}return t},E=function(e,t,n){var r=function(e,t){var n=t.sys,r=n.linkType,o=n.id,u=f({type:r,id:o});return e.get(u)||c}(e,t);return r===c?n?r:t:r};t.default=function(e,t){if(t=t||{},!e.items)return[];var n=o()(e),r=Object.keys(n.includes||{}).reduce((function(t,n){return[].concat(i(t),i(e.includes[n]))}),[]),u=[].concat(i(n.items),i(r)),c=new Map(u.map((function(e){return[f(e.sys),e]})));return u.forEach((function(e){var n=function(e,t){return Array.isArray(t)?Object.keys(e).filter((function(e){return-1!==t.indexOf(e)})).reduce((function(t,n){return t[n]=e[n],t}),{}):e}(e,t.itemEntryPoints);Object.assign(e,l(n,a,(function(e){return E(c,e,t.removeUnresolved)}),t.removeUnresolved))})),n.items}},2459:function(e,t,n){n(5743),e.exports=function(){"use strict";var e=Function.prototype.toString,t=Object.create,r=Object.defineProperty,o=Object.getOwnPropertyDescriptor,u=Object.getOwnPropertyNames,i=Object.getOwnPropertySymbols,c=Object.getPrototypeOf,a=Object.prototype,f=a.hasOwnProperty,l=a.propertyIsEnumerable,E="function"==typeof i,s="function"==typeof WeakMap,L=function(){if(s)return function(){return new WeakMap};var e=function(){function e(){this._keys=[],this._values=[]}return e.prototype.has=function(e){return!!~this._keys.indexOf(e)},e.prototype.get=function(e){return this._values[this._keys.indexOf(e)]},e.prototype.set=function(e,t){this._keys.push(e),this._values.push(t)},e}();return function(){return new e}}(),O=function(n,r){var o=n.__proto__||c(n);if(!o)return t(null);var u=o.constructor;if(u===r.Object)return o===r.Object.prototype?{}:t(o);if(~e.call(u).indexOf("[native code]"))try{return new u}catch(a){}return t(o)},S=function(e,t,n,r){var o=O(e,t);for(var u in r.set(e,o),e)f.call(e,u)&&(o[u]=n(e[u],r));if(E)for(var c=i(e),a=0,s=c.length,L=void 0;a<s;++a)L=c[a],l.call(e,L)&&(o[L]=n(e[L],r));return o},p=function(e,t,n,c){var a=O(e,t);c.set(e,a);for(var f=E?u(e).concat(i(e)):u(e),l=0,s=f.length,L=void 0,S=void 0;l<s;++l)if("callee"!==(L=f[l])&&"caller"!==L)if(S=o(e,L)){S.get||S.set||(S.value=n(e[L],c));try{r(a,L,S)}catch(p){a[L]=S.value}}else a[L]=n(e[L],c);return a},_=function(e){var t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t},d=Array.isArray,B=Object.getPrototypeOf,y=function(){return"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==n.g?n.g:(console&&console.error&&console.error('Unable to locate global object, returning "this".'),this)}();function v(e,t){var n=!(!t||!t.isStrict),r=t&&t.realm||y,o=n?p:S,u=function e(t,u){if(!t||"object"!=typeof t)return t;if(u.has(t))return u.get(t);var i,c=t.__proto__||B(t),a=c&&c.constructor;if(!a||a===r.Object)return o(t,r,e,u);if(d(t)){if(n)return p(t,r,e,u);i=new a,u.set(t,i);for(var f=0,l=t.length;f<l;++f)i[f]=e(t[f],u);return i}if(t instanceof r.Date)return new a(t.getTime());if(t instanceof r.RegExp)return(i=new a(t.source,t.flags||_(t))).lastIndex=t.lastIndex,i;if(r.Map&&t instanceof r.Map)return i=new a,u.set(t,i),t.forEach((function(t,n){i.set(n,e(t,u))})),i;if(r.Set&&t instanceof r.Set)return i=new a,u.set(t,i),t.forEach((function(t){i.add(e(t,u))})),i;if(r.Blob&&t instanceof r.Blob)return t.slice(0,t.size,t.type);if(r.Buffer&&r.Buffer.isBuffer(t))return i=r.Buffer.allocUnsafe?r.Buffer.allocUnsafe(t.length):new a(t.length),u.set(t,i),t.copy(i),i;if(r.ArrayBuffer){if(r.ArrayBuffer.isView(t))return i=new a(t.buffer.slice(0)),u.set(t,i),i;if(t instanceof r.ArrayBuffer)return i=t.slice(0),u.set(t,i),i}return"function"==typeof t.then||t instanceof Error||r.WeakMap&&t instanceof r.WeakMap||r.WeakSet&&t instanceof r.WeakSet?t:o(t,r,e,u)};return u(e,L())}return v.default=v,v.strict=function(e,t){return v(e,{isStrict:!0,realm:t?t.realm:void 0})},v}()},9662:function(e,t,n){var r=n(614),o=n(6330),u=TypeError;e.exports=function(e){if(r(e))return e;throw u(o(e)+" is not a function")}},9670:function(e,t,n){var r=n(111),o=String,u=TypeError;e.exports=function(e){if(r(e))return e;throw u(o(e)+" is not an object")}},1318:function(e,t,n){var r=n(5656),o=n(1400),u=n(6244),i=function(e){return function(t,n,i){var c,a=r(t),f=u(a),l=o(i,f);if(e&&n!=n){for(;f>l;)if((c=a[l++])!=c)return!0}else for(;f>l;l++)if((e||l in a)&&a[l]===n)return e||l||0;return!e&&-1}};e.exports={includes:i(!0),indexOf:i(!1)}},4326:function(e,t,n){var r=n(1702),o=r({}.toString),u=r("".slice);e.exports=function(e){return u(o(e),8,-1)}},9920:function(e,t,n){var r=n(2597),o=n(3887),u=n(1236),i=n(3070);e.exports=function(e,t,n){for(var c=o(t),a=i.f,f=u.f,l=0;l<c.length;l++){var E=c[l];r(e,E)||n&&r(n,E)||a(e,E,f(t,E))}}},8880:function(e,t,n){var r=n(9781),o=n(3070),u=n(9114);e.exports=r?function(e,t,n){return o.f(e,t,u(1,n))}:function(e,t,n){return e[t]=n,e}},9114:function(e){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},8052:function(e,t,n){var r=n(614),o=n(3070),u=n(6339),i=n(3072);e.exports=function(e,t,n,c){c||(c={});var a=c.enumerable,f=void 0!==c.name?c.name:t;if(r(n)&&u(n,f,c),c.global)a?e[t]=n:i(t,n);else{try{c.unsafe?e[t]&&(a=!0):delete e[t]}catch(l){}a?e[t]=n:o.f(e,t,{value:n,enumerable:!1,configurable:!c.nonConfigurable,writable:!c.nonWritable})}return e}},3072:function(e,t,n){var r=n(7854),o=Object.defineProperty;e.exports=function(e,t){try{o(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},9781:function(e,t,n){var r=n(7293);e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(e,t,n){var r=n(7854),o=n(111),u=r.document,i=o(u)&&o(u.createElement);e.exports=function(e){return i?u.createElement(e):{}}},8113:function(e,t,n){var r=n(5005);e.exports=r("navigator","userAgent")||""},7392:function(e,t,n){var r,o,u=n(7854),i=n(8113),c=u.process,a=u.Deno,f=c&&c.versions||a&&a.version,l=f&&f.v8;l&&(o=(r=l.split("."))[0]>0&&r[0]<4?1:+(r[0]+r[1])),!o&&i&&(!(r=i.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=i.match(/Chrome\/(\d+)/))&&(o=+r[1]),e.exports=o},748:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(e,t,n){var r=n(7854),o=n(1236).f,u=n(8880),i=n(8052),c=n(3072),a=n(9920),f=n(4705);e.exports=function(e,t){var n,l,E,s,L,O=e.target,S=e.global,p=e.stat;if(n=S?r:p?r[O]||c(O,{}):(r[O]||{}).prototype)for(l in t){if(s=t[l],E=e.dontCallGetSet?(L=o(n,l))&&L.value:n[l],!f(S?l:O+(p?".":"#")+l,e.forced)&&void 0!==E){if(typeof s==typeof E)continue;a(s,E)}(e.sham||E&&E.sham)&&u(s,"sham",!0),i(n,l,s,e)}}},7293:function(e){e.exports=function(e){try{return!!e()}catch(t){return!0}}},4374:function(e,t,n){var r=n(7293);e.exports=!r((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},6916:function(e,t,n){var r=n(4374),o=Function.prototype.call;e.exports=r?o.bind(o):function(){return o.apply(o,arguments)}},6530:function(e,t,n){var r=n(9781),o=n(2597),u=Function.prototype,i=r&&Object.getOwnPropertyDescriptor,c=o(u,"name"),a=c&&"something"===function(){}.name,f=c&&(!r||r&&i(u,"name").configurable);e.exports={EXISTS:c,PROPER:a,CONFIGURABLE:f}},1702:function(e,t,n){var r=n(4374),o=Function.prototype,u=o.bind,i=o.call,c=r&&u.bind(i,i);e.exports=r?function(e){return e&&c(e)}:function(e){return e&&function(){return i.apply(e,arguments)}}},5005:function(e,t,n){var r=n(7854),o=n(614),u=function(e){return o(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?u(r[e]):r[e]&&r[e][t]}},8173:function(e,t,n){var r=n(9662);e.exports=function(e,t){var n=e[t];return null==n?void 0:r(n)}},7854:function(e,t,n){var r=function(e){return e&&e.Math==Math&&e};e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},2597:function(e,t,n){var r=n(1702),o=n(7908),u=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return u(o(e),t)}},3501:function(e){e.exports={}},4664:function(e,t,n){var r=n(9781),o=n(7293),u=n(317);e.exports=!r&&!o((function(){return 7!=Object.defineProperty(u("div"),"a",{get:function(){return 7}}).a}))},8361:function(e,t,n){var r=n(1702),o=n(7293),u=n(4326),i=Object,c=r("".split);e.exports=o((function(){return!i("z").propertyIsEnumerable(0)}))?function(e){return"String"==u(e)?c(e,""):i(e)}:i},2581:function(e,t,n){var r=n(1702),o=n(614),u=n(7506),i=r(Function.toString);o(u.inspectSource)||(u.inspectSource=function(e){return i(e)}),e.exports=u.inspectSource},9909:function(e,t,n){var r,o,u,i=n(8536),c=n(7854),a=n(1702),f=n(111),l=n(8880),E=n(2597),s=n(7506),L=n(6200),O=n(3501),S="Object already initialized",p=c.TypeError,_=c.WeakMap;if(i||s.state){var d=s.state||(s.state=new _),B=a(d.get),y=a(d.has),v=a(d.set);r=function(e,t){if(y(d,e))throw new p(S);return t.facade=e,v(d,e,t),t},o=function(e){return B(d,e)||{}},u=function(e){return y(d,e)}}else{var C=L("state");O[C]=!0,r=function(e,t){if(E(e,C))throw new p(S);return t.facade=e,l(e,C,t),t},o=function(e){return E(e,C)?e[C]:{}},u=function(e){return E(e,C)}}e.exports={set:r,get:o,has:u,enforce:function(e){return u(e)?o(e):r(e,{})},getterFor:function(e){return function(t){var n;if(!f(t)||(n=o(t)).type!==e)throw p("Incompatible receiver, "+e+" required");return n}}}},614:function(e){e.exports=function(e){return"function"==typeof e}},4705:function(e,t,n){var r=n(7293),o=n(614),u=/#|\.prototype\./,i=function(e,t){var n=a[c(e)];return n==l||n!=f&&(o(t)?r(t):!!t)},c=i.normalize=function(e){return String(e).replace(u,".").toLowerCase()},a=i.data={},f=i.NATIVE="N",l=i.POLYFILL="P";e.exports=i},111:function(e,t,n){var r=n(614);e.exports=function(e){return"object"==typeof e?null!==e:r(e)}},1913:function(e){e.exports=!1},2190:function(e,t,n){var r=n(5005),o=n(614),u=n(7976),i=n(3307),c=Object;e.exports=i?function(e){return"symbol"==typeof e}:function(e){var t=r("Symbol");return o(t)&&u(t.prototype,c(e))}},6244:function(e,t,n){var r=n(7466);e.exports=function(e){return r(e.length)}},6339:function(e,t,n){var r=n(7293),o=n(614),u=n(2597),i=n(9781),c=n(6530).CONFIGURABLE,a=n(2581),f=n(9909),l=f.enforce,E=f.get,s=Object.defineProperty,L=i&&!r((function(){return 8!==s((function(){}),"length",{value:8}).length})),O=String(String).split("String"),S=e.exports=function(e,t,n){"Symbol("===String(t).slice(0,7)&&(t="["+String(t).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!u(e,"name")||c&&e.name!==t)&&(i?s(e,"name",{value:t,configurable:!0}):e.name=t),L&&n&&u(n,"arity")&&e.length!==n.arity&&s(e,"length",{value:n.arity});try{n&&u(n,"constructor")&&n.constructor?i&&s(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(o){}var r=l(e);return u(r,"source")||(r.source=O.join("string"==typeof t?t:"")),e};Function.prototype.toString=S((function(){return o(this)&&E(this).source||a(this)}),"toString")},4758:function(e){var t=Math.ceil,n=Math.floor;e.exports=Math.trunc||function(e){var r=+e;return(r>0?n:t)(r)}},133:function(e,t,n){var r=n(7392),o=n(7293);e.exports=!!Object.getOwnPropertySymbols&&!o((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},8536:function(e,t,n){var r=n(7854),o=n(614),u=n(2581),i=r.WeakMap;e.exports=o(i)&&/native code/.test(u(i))},3070:function(e,t,n){var r=n(9781),o=n(4664),u=n(3353),i=n(9670),c=n(4948),a=TypeError,f=Object.defineProperty,l=Object.getOwnPropertyDescriptor,E="enumerable",s="configurable",L="writable";t.f=r?u?function(e,t,n){if(i(e),t=c(t),i(n),"function"==typeof e&&"prototype"===t&&"value"in n&&L in n&&!n.writable){var r=l(e,t);r&&r.writable&&(e[t]=n.value,n={configurable:s in n?n.configurable:r.configurable,enumerable:E in n?n.enumerable:r.enumerable,writable:!1})}return f(e,t,n)}:f:function(e,t,n){if(i(e),t=c(t),i(n),o)try{return f(e,t,n)}catch(r){}if("get"in n||"set"in n)throw a("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},1236:function(e,t,n){var r=n(9781),o=n(6916),u=n(5296),i=n(9114),c=n(5656),a=n(4948),f=n(2597),l=n(4664),E=Object.getOwnPropertyDescriptor;t.f=r?E:function(e,t){if(e=c(e),t=a(t),l)try{return E(e,t)}catch(n){}if(f(e,t))return i(!o(u.f,e,t),e[t])}},8006:function(e,t,n){var r=n(6324),o=n(748).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,o)}},5181:function(e,t){t.f=Object.getOwnPropertySymbols},7976:function(e,t,n){var r=n(1702);e.exports=r({}.isPrototypeOf)},6324:function(e,t,n){var r=n(1702),o=n(2597),u=n(5656),i=n(1318).indexOf,c=n(3501),a=r([].push);e.exports=function(e,t){var n,r=u(e),f=0,l=[];for(n in r)!o(c,n)&&o(r,n)&&a(l,n);for(;t.length>f;)o(r,n=t[f++])&&(~i(l,n)||a(l,n));return l}},5296:function(e,t){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,o=r&&!n.call({1:2},1);t.f=o?function(e){var t=r(this,e);return!!t&&t.enumerable}:n},2140:function(e,t,n){var r=n(6916),o=n(614),u=n(111),i=TypeError;e.exports=function(e,t){var n,c;if("string"===t&&o(n=e.toString)&&!u(c=r(n,e)))return c;if(o(n=e.valueOf)&&!u(c=r(n,e)))return c;if("string"!==t&&o(n=e.toString)&&!u(c=r(n,e)))return c;throw i("Can't convert object to primitive value")}},3887:function(e,t,n){var r=n(5005),o=n(1702),u=n(8006),i=n(5181),c=n(9670),a=o([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=u.f(c(e)),n=i.f;return n?a(t,n(e)):t}},4488:function(e){var t=TypeError;e.exports=function(e){if(null==e)throw t("Can't call method on "+e);return e}},6200:function(e,t,n){var r=n(2309),o=n(9711),u=r("keys");e.exports=function(e){return u[e]||(u[e]=o(e))}},7506:function(e,t,n){var r=n(7854),o=n(3072),u="__core-js_shared__",i=r[u]||o(u,{});e.exports=i},2309:function(e,t,n){var r=n(1913),o=n(7506);(e.exports=function(e,t){return o[e]||(o[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.24.1",mode:r?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.24.1/LICENSE",source:"https://github.com/zloirock/core-js"})},1400:function(e,t,n){var r=n(9303),o=Math.max,u=Math.min;e.exports=function(e,t){var n=r(e);return n<0?o(n+t,0):u(n,t)}},5656:function(e,t,n){var r=n(8361),o=n(4488);e.exports=function(e){return r(o(e))}},9303:function(e,t,n){var r=n(4758);e.exports=function(e){var t=+e;return t!=t||0===t?0:r(t)}},7466:function(e,t,n){var r=n(9303),o=Math.min;e.exports=function(e){return e>0?o(r(e),9007199254740991):0}},7908:function(e,t,n){var r=n(4488),o=Object;e.exports=function(e){return o(r(e))}},7593:function(e,t,n){var r=n(6916),o=n(111),u=n(2190),i=n(8173),c=n(2140),a=n(5112),f=TypeError,l=a("toPrimitive");e.exports=function(e,t){if(!o(e)||u(e))return e;var n,a=i(e,l);if(a){if(void 0===t&&(t="default"),n=r(a,e,t),!o(n)||u(n))return n;throw f("Can't convert object to primitive value")}return void 0===t&&(t="number"),c(e,t)}},4948:function(e,t,n){var r=n(7593),o=n(2190);e.exports=function(e){var t=r(e,"string");return o(t)?t:t+""}},6330:function(e){var t=String;e.exports=function(e){try{return t(e)}catch(n){return"Object"}}},9711:function(e,t,n){var r=n(1702),o=0,u=Math.random(),i=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+i(++o+u,36)}},3307:function(e,t,n){var r=n(133);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(e,t,n){var r=n(9781),o=n(7293);e.exports=r&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},5112:function(e,t,n){var r=n(7854),o=n(2309),u=n(2597),i=n(9711),c=n(133),a=n(3307),f=o("wks"),l=r.Symbol,E=l&&l.for,s=a?l:l&&l.withoutSetter||i;e.exports=function(e){if(!u(f,e)||!c&&"string"!=typeof f[e]){var t="Symbol."+e;c&&u(l,e)?f[e]=l[e]:f[e]=a&&E?E(t):s(t)}return f[e]}},5837:function(e,t,n){n(2109)({global:!0},{globalThis:n(7854)})},5743:function(e,t,n){n(5837)},6699:function(e,t,n){"use strict";var r=n(4836);t.Z=function(e,t){var n=e.raw,r=e.references;void 0===t&&(t={});var i=JSON.parse(n);if(!r||!r.length)return(0,o.documentToReactComponents)(i,t);var c={items:[{sys:{type:"Entry"},richText:i}],includes:{Entry:r.filter((function(e){return"ContentfulAsset"!==e.__typename})).map((function(e){return Object.assign({},e,{sys:{type:"Entry",id:e.contentful_id}})})),Asset:r.filter((function(e){return"ContentfulAsset"===e.__typename})).map((function(e){return Object.assign({},e,{sys:{type:"Asset",id:e.contentful_id}})}))}},a=(0,u.default)(c,{removeUnresolved:!0});return(0,o.documentToReactComponents)(a[0].richText,t)};var o=n(9806),u=r(n(5830))},457:function(e,t,n){"use strict";n.r(t);var r=n(7294),o=n(9806),u=n(6699),i=n(2405),c=n(7059),a=n(6768),f=n(2788);t.default=function(e){var t,n,l={renderMark:(t={},t[i.MARKS.BOLD]=function(e){return r.createElement("b",{className:"font-bold"},e)},t),renderNode:(n={},n[i.BLOCKS.PARAGRAPH]=function(e,t){return r.createElement("p",{className:"text-lg"},t)},n[i.INLINES.HYPERLINK]=function(e,t){var n=e.data.uri;return r.createElement("a",{href:n,className:"underline"},t)},n[i.BLOCKS.HEADING_1]=function(e,t){return r.createElement("h1",{className:"text-5xl font-normal leading-normal mt-0 mb-2 font-light"},t)},n[i.BLOCKS.HEADING_2]=function(e,t){return r.createElement("h2",{className:"text-4xl font-normal leading-normal mt-0 mb-2 font-light"},t)},n[i.BLOCKS.EMBEDDED_ASSET]=function(e){var t=e.data.target,n=t.gatsbyImageData,o=t.description;return n?r.createElement(c.G,{image:(0,c.c)(n),alt:o}):null},n[i.BLOCKS.TABLE]=function(e,t){return r.createElement("table",{className:"table p-4 bg-white shadow rounded-lg"},r.createElement("tbody",null,t))},n[i.BLOCKS.TABLE_ROW]=function(e,t){return r.createElement("tr",{className:"text-gray-700"},t)},n[i.BLOCKS.TABLE_CELL]=function(e,t){return r.createElement("td",{className:"border-b-2 p-4"},t)},n[i.BLOCKS.UL_LIST]=function(e,t){return r.createElement("ul",{className:"list-disc p-4"},t)},n[i.BLOCKS.OL_LIST]=function(e,t){return r.createElement("ol",null,t)},n[i.BLOCKS.LIST_ITEM]=function(e,t){var n,u=(0,o.documentToReactComponents)(e,{renderNode:(n={},n[i.BLOCKS.PARAGRAPH]=function(e,t){return t},n[i.BLOCKS.LIST_ITEM]=function(e,t){return t},n)});return r.createElement("li",{className:"text-lg"},u)},n)};return r.createElement(a.Z,null,r.createElement("section",{className:"pt-20 md:pt-40"},r.createElement("div",{className:"container mx-auto px-8 lg:flex"},r.createElement("div",{className:"text-center lg:text-left lg:w-2/3"},r.createElement("h1",{className:"text-4xl lg:text-5xl font-bold leading-none"},e.data.contentfulNewsPost.title),r.createElement("p",{className:"text-xl lg:text-2xl mt-6 font-light"},e.data.contentfulNewsPost.subtitle),r.createElement("p",{className:"mt-4 text-gray-600"},e.data.contentfulNewsPost.author,", ",e.data.contentfulNewsPost.published)),r.createElement("div",{className:"lg:w-1/3"},r.createElement(f.Z,null)))),r.createElement("section",{className:"my-10"},r.createElement("div",{className:"container mx-auto px-8 tracking-wider"},(0,u.Z)(e.data.contentfulNewsPost.body,l))))}}}]);
//# sourceMappingURL=component---src-templates-news-post-contentful-js-ef53d7038716d1f03810.js.map