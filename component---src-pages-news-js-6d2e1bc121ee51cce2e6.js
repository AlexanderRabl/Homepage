"use strict";(self.webpackChunkhomepage=self.webpackChunkhomepage||[]).push([[3],{6434:function(e,t,a){var n=a(7294);t.Z=function(e){var t=e.children,a=e.className,c=void 0===a?"":a;return n.createElement("button",{type:"button",className:"\n        "+c+"\n        rounded\n        text-white\n        transition-colors\n        duration-200\n        transform\n        bg-primary-300\n        rounded-md\n        hover:bg-primary-400\n        focus:outline-none\n        focus:bg-primary-400\n        text-white\n    "},t)}},5029:function(e,t,a){var n=a(7294),c=a(6434),r=(a(1597),a(7782));t.Z=function(e){var t=e.children;(0,r.useTranslation)().t;return n.createElement("div",{className:"w-full bg-center bg-cover h-48 mt-14 lg:mt-24",style:{backgroundImage:'url("https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80")'}},n.createElement("div",{className:"flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50"},n.createElement("div",{className:"text-center"},n.createElement("h1",{className:"text-3xl font-semibold text-white uppercase lg:text-6xl"},t),n.createElement(c.Z,{className:"w-full px-4 py-2 mt-4 text-sm font-medium uppercase lg:w-auto",role:"link"},n.createElement(r.Link,{to:"/contact",className:""},n.createElement(r.Trans,null,"Contact"))))))}},4395:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var n=a(7294),c=a(1597),r=a(7782),s=a(8549),i=function(e){var t=e.children,a=e.className,c=void 0===a?"":a;return n.createElement("p",{className:"uppercase tracking-wider "+c},t)},l=a(7059),o=function(e){var t=e.slug,r=e.title,s=e.description,i=e.author,o=e.publishedDate,m=e.imageData,d=e.tags,f="/news/"+t,u=(0,l.c)(m);return n.createElement("div",{className:"max-w-2xl mx-auto overflow-hidden bg-white rounded-lg shadow-md"},n.createElement(l.G,{className:"object-cover w-full h-64",image:u,alt:"News Image"}),n.createElement("div",{className:"p-6"},n.createElement("div",null,d.map((function(e){return n.createElement("span",{className:"text-xs font-medium text-primary uppercase mr-3"},e)})),n.createElement(c.Link,{to:f,className:"block mt-2 text-2xl font-semibold text-gray-800 transition-colors duration-200 transform hover:text-gray-600 hover:underline"},r),n.createElement("p",{className:"mt-2 text-sm text-gray-600"},s)),n.createElement("div",{className:"mt-4"},n.createElement("div",{className:"flex items-center"},n.createElement("div",{className:"flex items-center"},n.createElement(l.S,{className:"object-cover w-10 h-10 rounded-full",src:"./../images/PortraitfotoMini.jpg",alt:"Avatar",__imageData:a(8e3)}),n.createElement(c.Link,{to:"/about",className:"mx-2 font-semibold text-gray-300"},i)),n.createElement("span",{className:"mx-1 text-xs text-gray-600"},o)))))},m=a(5029),d=function(e){var t=e.data.allContentfulNewsPost.edges.map((function(e,t){return n.createElement("div",{className:"flex-1 px-3"},n.createElement(o,{key:t,slug:e.node.slug,title:e.node.title,description:e.node.description.description,imageData:e.node.image,author:e.node.author,publishedDate:e.node.published,tags:e.node.tags}))}));return n.createElement(s.Z,null,n.createElement(m.Z,null,n.createElement(r.Trans,null,"News")),n.createElement("section",{id:"news",className:"py-10"},n.createElement("div",{className:"container mx-auto"},n.createElement(i,{className:"mb-8 text-gray-600 text-center"},"Latest News"),n.createElement("div",{className:"grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3"},t))))}},8e3:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/Homepage/static/34f169cd0d0e901aff3ddcc5ecb266db/aaae2/PortraitfotoMini.jpg","srcSet":"/Homepage/static/34f169cd0d0e901aff3ddcc5ecb266db/ef1f0/PortraitfotoMini.jpg 25w,\\n/Homepage/static/34f169cd0d0e901aff3ddcc5ecb266db/ccb33/PortraitfotoMini.jpg 50w,\\n/Homepage/static/34f169cd0d0e901aff3ddcc5ecb266db/aaae2/PortraitfotoMini.jpg 100w","sizes":"(min-width: 100px) 100px, 100vw"},"sources":[{"srcSet":"/Homepage/static/34f169cd0d0e901aff3ddcc5ecb266db/3cf3a/PortraitfotoMini.webp 25w,\\n/Homepage/static/34f169cd0d0e901aff3ddcc5ecb266db/1b496/PortraitfotoMini.webp 50w,\\n/Homepage/static/34f169cd0d0e901aff3ddcc5ecb266db/38252/PortraitfotoMini.webp 100w","type":"image/webp","sizes":"(min-width: 100px) 100px, 100vw"}]},"width":100,"height":96}')}}]);
//# sourceMappingURL=component---src-pages-news-js-6d2e1bc121ee51cce2e6.js.map