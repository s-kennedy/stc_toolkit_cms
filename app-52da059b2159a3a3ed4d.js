webpackJsonp([0xd2a57dc1d883],{106:function(n,e,o){"use strict";function t(n,e,o){var t=r.map(function(o){if(o.plugin[n]){var t=o.plugin[n](e,o.options);return t}});return t=t.filter(function(n){return"undefined"!=typeof n}),t.length>0?t:o?[o]:[]}function a(n,e,o){return r.reduce(function(o,t){return t.plugin[n]?o.then(function(){return t.plugin[n](e,t.options)}):o},Promise.resolve())}e.__esModule=!0,e.apiRunner=t,e.apiRunnerAsync=a;var r=[{plugin:o(315),options:{plugins:[]}}]},308:function(n,e,o){"use strict";var t;e.components={"component---src-templates-about-jsx":o(511),"component---src-templates-reference-jsx":o(516),"component---src-templates-home-jsx":o(515),"component---src-templates-case-study-jsx":o(514),"component---src-templates-building-block-jsx":o(513),"component---src-templates-action-jsx":o(512),"component---src-pages-404-js":o(510)},e.json=(t={"layout-index.json":o(10),"about-save-the-children.json":o(520)},t["layout-index.json"]=o(10),t["about-toolkit.json"]=o(521),t["layout-index.json"]=o(10),t["about-child-sensitivity.json"]=o(519),t["layout-index.json"]=o(10),t["reference-resources.json"]=o(539),t["layout-index.json"]=o(10),t["reference-acronyms.json"]=o(536),t["layout-index.json"]=o(10),t["index.json"]=o(535),t["layout-index.json"]=o(10),t["reference-glossary.json"]=o(537),t["layout-index.json"]=o(10),t["reference-references.json"]=o(538),t["layout-index.json"]=o(10),t["building-blocks-analysis-actions-1-case-study.json"]=o(532),t["layout-index.json"]=o(10),t["building-blocks-design.json"]=o(533),t["layout-index.json"]=o(10),t["actions-9.json"]=o(530),t["layout-index.json"]=o(10),t["actions-5.json"]=o(526),t["layout-index.json"]=o(10),t["actions-6.json"]=o(527),t["layout-index.json"]=o(10),t["building-blocks-meal.json"]=o(534),t["layout-index.json"]=o(10),t["actions-1.json"]=o(522),t["layout-index.json"]=o(10),t["building-blocks-analysis.json"]=o(531),t["layout-index.json"]=o(10),t["actions-3.json"]=o(524),t["layout-index.json"]=o(10),t["actions-2.json"]=o(523),t["layout-index.json"]=o(10),t["actions-4.json"]=o(525),t["layout-index.json"]=o(10),t["actions-7.json"]=o(528),t["layout-index.json"]=o(10),t["actions-8.json"]=o(529),t["layout-index.json"]=o(10),t["404.json"]=o(517),t["layout-index.json"]=o(10),t["404-html.json"]=o(518),t),e.layouts={"layout---index":o(509)}},309:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}function a(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function r(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}function u(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}e.__esModule=!0;var s=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(n[t]=o[t])}return n},c=o(1),i=t(c),l=o(6),d=t(l),f=o(176),p=t(f),m=o(76),h=t(m),g=o(106),y=function(n){var e=n.children;return i.default.createElement("div",null,e())},x=function(n){function e(o){a(this,e);var t=r(this,n.call(this)),u=o.location;return p.default.getPage(u.pathname)||(u=s({},u,{pathname:"/404.html"})),t.state={location:u,pageResources:p.default.getResourcesForPathname(u.pathname)},t}return u(e,n),e.prototype.componentWillReceiveProps=function(n){var e=this;if(this.state.location.pathname!==n.location.pathname){var o=p.default.getResourcesForPathname(n.location.pathname);if(o)this.setState({location:n.location,pageResources:o});else{var t=n.location;p.default.getPage(t.pathname)||(t=s({},t,{pathname:"/404.html"})),p.default.getResourcesForPathname(t.pathname,function(n){e.setState({location:t,pageResources:n})})}}},e.prototype.componentDidMount=function(){var n=this;h.default.on("onPostLoadPageResources",function(e){p.default.getPage(n.state.location.pathname)&&e.page.path===p.default.getPage(n.state.location.pathname).path&&n.setState({pageResources:e.pageResources})})},e.prototype.shouldComponentUpdate=function(n,e){return!e.pageResources||(!(this.state.pageResources||!e.pageResources)||(this.state.pageResources.component!==e.pageResources.component||(this.state.pageResources.json!==e.pageResources.json||!(this.state.location.key===e.location.key||!e.pageResources.page||!e.pageResources.page.matchPath&&!e.pageResources.page.path))))},e.prototype.render=function(){var n=(0,g.apiRunner)("replaceComponentRenderer",{props:s({},this.props,{pageResources:this.state.pageResources}),loader:f.publicLoader}),e=n[0];return this.props.page?this.state.pageResources?e||(0,c.createElement)(this.state.pageResources.component,s({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?e||(0,c.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:y,s({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},e}(i.default.Component);x.propTypes={page:d.default.bool,layout:d.default.bool,location:d.default.object},e.default=x,n.exports=e.default},76:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var a=o(583),r=t(a),u=(0,r.default)();n.exports=u},310:function(n,e,o){"use strict";var t=o(73),a={};n.exports=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(o){var r=decodeURIComponent(o),u=r.slice(e.length);if(u.split("#").length>1&&(u=u.split("#").slice(0,-1).join("")),u.split("?").length>1&&(u=u.split("?").slice(0,-1).join("")),a[u])return a[u];var s=void 0;return n.some(function(n){if(n.matchPath){if((0,t.matchPath)(u,{path:n.path})||(0,t.matchPath)(u,{path:n.matchPath}))return s=n,a[u]=n,!0}else{if((0,t.matchPath)(u,{path:n.path,exact:!0}))return s=n,a[u]=n,!0;if((0,t.matchPath)(u,{path:n.path+"index.html"}))return s=n,a[u]=n,!0}return!1}),s}}},311:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var a=o(143),r=t(a),u=o(106),s=(0,u.apiRunner)("replaceHistory"),c=s[0],i=c||(0,r.default)();n.exports=i},518:function(n,e,o){o(3),n.exports=function(n){return o.e(0xa2868bfb69fc,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(547)})})}},517:function(n,e,o){o(3),n.exports=function(n){return o.e(0xe70826b53c04,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(548)})})}},519:function(n,e,o){o(3),n.exports=function(n){return o.e(0xa0ba6a996dae,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(549)})})}},520:function(n,e,o){o(3),n.exports=function(n){return o.e(0xc6fdbd04045f,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(550)})})}},521:function(n,e,o){o(3),n.exports=function(n){return o.e(5924105280593,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(551)})})}},522:function(n,e,o){o(3),n.exports=function(n){return o.e(0xcd0c3910e004,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(552)})})}},523:function(n,e,o){o(3),n.exports=function(n){return o.e(0x68873fdbd14d,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(553)})})}},524:function(n,e,o){o(3),n.exports=function(n){return o.e(0xf5b4fb014900,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(554)})})}},525:function(n,e,o){o(3),n.exports=function(n){return o.e(76098127511028,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(555)})})}},526:function(n,e,o){o(3),n.exports=function(n){return o.e(0xaf710a8b7698,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(556)})})}},527:function(n,e,o){o(3),n.exports=function(n){return o.e(32621463576961,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(557)})})}},528:function(n,e,o){o(3),n.exports=function(n){return o.e(75260769624557,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(558)})})}},529:function(n,e,o){o(3),n.exports=function(n){return o.e(0x8cbb36a54dcc,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(559)})})}},530:function(n,e,o){o(3),n.exports=function(n){return o.e(0xeba71faddf4c,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(560)})})}},532:function(n,e,o){o(3),n.exports=function(n){return o.e(0xed9b7bb82455,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(561)})})}},531:function(n,e,o){o(3),n.exports=function(n){return o.e(0xc865ef30d9d8,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(562)})})}},533:function(n,e,o){o(3),n.exports=function(n){return o.e(0xd51c4f8ebdef,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(563)})})}},534:function(n,e,o){o(3),n.exports=function(n){return o.e(0xbc9c9a161baf,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(564)})})}},535:function(n,e,o){o(3),n.exports=function(n){return o.e(0x81b8806e4260,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(565)})})}},10:function(n,e,o){o(3),n.exports=function(n){return o.e(60335399758886,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(145)})})}},536:function(n,e,o){o(3),n.exports=function(n){return o.e(0x7e0683712921,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(566)})})}},537:function(n,e,o){o(3),n.exports=function(n){return o.e(0xe49ebef0501d,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(567)})})}},538:function(n,e,o){o(3),n.exports=function(n){return o.e(37612622547688,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(568)})})}},539:function(n,e,o){o(3),n.exports=function(n){return o.e(26950785294951,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(569)})})}},509:function(n,e,o){o(3),n.exports=function(n){return o.e(0x67ef26645b2a,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(312)})})}},176:function(n,e,o){(function(n){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}e.__esModule=!0,e.publicLoader=void 0;var a=o(1),r=(t(a),o(310)),u=t(r),s=o(76),c=t(s),i=void 0,l={},d={},f={},p={},m={},h=[],g=[],y={},x=[],j={},b=function(n){return n&&n.default||n},v=void 0,N=!0;v=o(313)({getNextQueuedResources:function(){return x.slice(-1)[0]},createResourceDownload:function(n){_(n,function(){x=x.filter(function(e){return e!==n}),v.onResourcedFinished(n)})}}),c.default.on("onPreLoadPageResources",function(n){v.onPreLoadPageResources(n)}),c.default.on("onPostLoadPageResources",function(n){v.onPostLoadPageResources(n)});var C=function(n,e){return j[n]>j[e]?1:j[n]<j[e]?-1:0},R=function(n,e){return y[n]>y[e]?1:y[n]<y[e]?-1:0},_=function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(p[e])n.nextTick(function(){o(null,p[e])});else{var t=void 0;t="component---"===e.slice(0,12)?d.components[e]:"layout---"===e.slice(0,9)?d.layouts[e]:d.json[e],t(function(n,t){p[e]=t,o(n,t)})}},k=function(e,o){m[e]?n.nextTick(function(){o(null,m[e])}):_(e,function(n,t){if(n)o(n);else{var a=b(t());m[e]=a,o(n,a)}})},E=1,P={empty:function(){g=[],y={},j={},x=[],h=[]},addPagesArray:function(n){h=n;var e="";e="/stc_toolkit",i=(0,u.default)(n,e)},addDevRequires:function(n){l=n},addProdRequires:function(n){d=n},dequeue:function(n){return g.pop()},enqueue:function(n){if(!h.some(function(e){return e.path===n}))return!1;var e=1/E;E+=1,y[n]?y[n]+=1:y[n]=1,P.has(n)||g.unshift(n),g.sort(R);var o=i(n);return o.jsonName&&(j[o.jsonName]?j[o.jsonName]+=1+e:j[o.jsonName]=1+e,x.indexOf(o.jsonName)!==-1||p[o.jsonName]||x.unshift(o.jsonName)),o.componentChunkName&&(j[o.componentChunkName]?j[o.componentChunkName]+=1+e:j[o.componentChunkName]=1+e,x.indexOf(o.componentChunkName)!==-1||p[o.jsonName]||x.unshift(o.componentChunkName)),x.sort(C),v.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:x,resourcesCount:j}},getPages:function(){return{pathArray:g,pathCount:y}},getPage:function(n){return i(n)},has:function(n){return g.some(function(e){return e===n})},getResourcesForPathname:function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};N&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(i(e)||navigator.serviceWorker.getRegistrations().then(function(n){if(n.length){for(var e=n,o=Array.isArray(e),t=0,e=o?e:e[Symbol.iterator]();;){var a;if(o){if(t>=e.length)break;a=e[t++]}else{if(t=e.next(),t.done)break;a=t.value}var r=a;r.unregister()}window.location.reload()}})),N=!1;var t=i(e);if(!t)return console.log("A page wasn't found for \""+e+'"'),o();if(e=t.path,f[e])return n.nextTick(function(){o(f[e]),c.default.emit("onPostLoadPageResources",{page:t,pageResources:f[e]})}),f[e];c.default.emit("onPreLoadPageResources",{path:e});var a=void 0,r=void 0,u=void 0,s=function(){if(a&&r&&(!t.layoutComponentChunkName||u)){f[e]={component:a,json:r,layout:u,page:t};var n={component:a,json:r,layout:u,page:t};o(n),c.default.emit("onPostLoadPageResources",{page:t,pageResources:n})}};return k(t.componentChunkName,function(n,e){n&&console.log("Loading the component for "+t.path+" failed"),a=e,s()}),k(t.jsonName,function(n,e){n&&console.log("Loading the JSON for "+t.path+" failed"),r=e,s()}),void(t.layoutComponentChunkName&&k(t.layout,function(n,e){n&&console.log("Loading the Layout for "+t.path+" failed"),u=e,s()}))},peek:function(n){return g.slice(-1)[0]},length:function(){return g.length},indexOf:function(n){return g.length-g.indexOf(n)-1}};e.publicLoader={getResourcesForPathname:P.getResourcesForPathname};e.default=P}).call(e,o(68))},570:function(n,e){n.exports=[{componentChunkName:"component---src-templates-about-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"about-save-the-children.json",path:"/about/save-the-children"},{componentChunkName:"component---src-templates-about-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"about-toolkit.json",path:"/about/toolkit"},{componentChunkName:"component---src-templates-about-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"about-child-sensitivity.json",path:"/about/child-sensitivity"},{componentChunkName:"component---src-templates-reference-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"reference-resources.json",path:"/reference/resources"},{componentChunkName:"component---src-templates-reference-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"reference-acronyms.json",path:"/reference/acronyms"},{componentChunkName:"component---src-templates-home-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"index.json",path:"/"},{componentChunkName:"component---src-templates-reference-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"reference-glossary.json",path:"/reference/glossary"},{componentChunkName:"component---src-templates-reference-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"reference-references.json",path:"/reference/references"},{componentChunkName:"component---src-templates-case-study-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"building-blocks-analysis-actions-1-case-study.json",path:"/building-blocks/analysis/actions/1/case-study"},{componentChunkName:"component---src-templates-building-block-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"building-blocks-design.json",path:"/building-blocks/design"},{componentChunkName:"component---src-templates-action-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"actions-9.json",path:"/actions/9"},{componentChunkName:"component---src-templates-action-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"actions-5.json",path:"/actions/5"},{componentChunkName:"component---src-templates-action-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"actions-6.json",path:"/actions/6"},{componentChunkName:"component---src-templates-building-block-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"building-blocks-meal.json",path:"/building-blocks/meal"},{componentChunkName:"component---src-templates-action-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"actions-1.json",path:"/actions/1"},{componentChunkName:"component---src-templates-building-block-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"building-blocks-analysis.json",path:"/building-blocks/analysis"},{componentChunkName:"component---src-templates-action-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"actions-3.json",path:"/actions/3"},{componentChunkName:"component---src-templates-action-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"actions-2.json",path:"/actions/2"},{componentChunkName:"component---src-templates-action-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"actions-4.json",path:"/actions/4"},{componentChunkName:"component---src-templates-action-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"actions-7.json",path:"/actions/7"},{componentChunkName:"component---src-templates-action-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"actions-8.json",path:"/actions/8"},{componentChunkName:"component---src-pages-404-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404.json",path:"/404/"},{componentChunkName:"component---src-pages-404-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404-html.json",path:"/404.html"}]},313:function(n,e){"use strict";n.exports=function(n){var e=n.getNextQueuedResources,o=n.createResourceDownload,t=[],a=[],r=function(){var n=e();n&&(a.push(n),o(n))},u=function(n){switch(n.type){case"RESOURCE_FINISHED":a=a.filter(function(e){return e!==n.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":t.push(n.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":t=t.filter(function(e){return e!==n.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===a.length&&0===t.length&&r()},0)};return{onResourcedFinished:function(n){u({type:"RESOURCE_FINISHED",payload:n})},onPreLoadPageResources:function(n){u({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:n})},onPostLoadPageResources:function(n){u({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:n})},onNewResourcesAdded:function(){u({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:t,resourcesDownloading:a}},empty:function(){t=[],a=[]}}}},0:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var a=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(n[t]=o[t])}return n},r=o(106),u=o(1),s=t(u),c=o(28),i=t(c),l=o(73),d=o(543),f=o(420),p=t(f),m=o(311),h=t(m),g=o(76),y=t(g),x=o(570),j=t(x),b=o(571),v=t(b),N=o(309),C=t(N),R=o(308),_=t(R),k=o(176),E=t(k);o(410),window.___emitter=y.default,E.default.addPagesArray(j.default),E.default.addProdRequires(_.default),window.asyncRequires=_.default,window.___loader=E.default,window.matchPath=l.matchPath;var P=v.default.reduce(function(n,e){return n[e.fromPath]=e,n},{}),w=function(n){var e=P[n];return null!=e&&(h.default.replace(e.toPath),!0)};w(window.location.pathname),(0,r.apiRunnerAsync)("onClientEntry").then(function(){function n(n){window.___history||(window.___history=n,n.listen(function(n,e){w(n.pathname)||(0,r.apiRunner)("onRouteUpdate",{location:n,action:e})}))}function e(n,e){var o=e.location.pathname,t=(0,r.apiRunner)("shouldUpdateScroll",{prevRouterProps:n,pathname:o});if(t.length>0)return t[0];if(n){var a=n.location.pathname;if(a===o)return!1}return!0}(0,r.apiRunner)("registerServiceWorker").length>0&&o(314);var t=function(n){function e(o){o.page.path===E.default.getPage(n).path&&(y.default.off("onPostLoadPageResources",e),clearTimeout(t),window.___history.push(n))}var o=P[n];if(o&&(n=o.toPath),window.location.pathname!==n){var t=setTimeout(function(){y.default.off("onPostLoadPageResources",e),y.default.emit("onDelayedLoadPageResources",{pathname:n}),window.___history.push(n)},1e3);E.default.getResourcesForPathname(n)?(clearTimeout(t),window.___history.push(n)):y.default.on("onPostLoadPageResources",e)}};window.___navigateTo=t,(0,r.apiRunner)("onRouteUpdate",{location:h.default.location,action:h.default.action});var c=(0,r.apiRunner)("replaceRouterComponent",{history:h.default})[0],f=function(n){var e=n.children;return s.default.createElement(l.Router,{history:h.default},e)},m=(0,l.withRouter)(C.default);E.default.getResourcesForPathname(window.location.pathname,function(){var o=function(){return(0,u.createElement)(c?c:f,null,(0,u.createElement)(d.ScrollContext,{shouldUpdateScroll:e},(0,u.createElement)(m,{layout:!0,children:function(e){return(0,u.createElement)(l.Route,{render:function(o){n(o.history);var t=e?e:o;return E.default.getPage(t.location.pathname)?(0,u.createElement)(C.default,a({page:!0},t)):(0,u.createElement)(C.default,{page:!0,location:{pathname:"/404.html"}})}})}})))},t=(0,r.apiRunner)("wrapRootComponent",{Root:o},o)[0];(0,p.default)(function(){return i.default.render(s.default.createElement(t,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,r.apiRunner)("onInitialClientRender")})})})})},571:function(n,e){n.exports=[]},314:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var a=o(76),r=t(a),u="/";u="/stc_toolkit/","serviceWorker"in navigator&&navigator.serviceWorker.register(u+"sw.js").then(function(n){n.addEventListener("updatefound",function(){var e=n.installing;console.log("installingWorker",e),e.addEventListener("statechange",function(){switch(e.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),r.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(n){console.error("Error during service worker registration:",n)})},315:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var a=o(1),r=t(a),u=o(73),s=o(12),c=o(333),i=t(c);e.replaceRouterComponent=function(n){var e=n.history,o=(0,i.default)(),t=function(n){var t=n.children;return r.default.createElement(s.Provider,{store:o},r.default.createElement(u.Router,{history:e},t))};return t}},420:function(n,e,o){!function(e,o){n.exports=o()}("domready",function(){var n,e=[],o=document,t=o.documentElement.doScroll,a="DOMContentLoaded",r=(t?/^loaded|^c/:/^loaded|^i|^c/).test(o.readyState);return r||o.addEventListener(a,n=function(){for(o.removeEventListener(a,n),r=1;n=e.shift();)n()}),function(n){r?setTimeout(n,0):e.push(n)}})},3:function(n,e,o){"use strict";function t(){function n(n){var e=t.lastChild;return"SCRIPT"!==e.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",e)):void(e.onload=e.onerror=function(){e.onload=e.onerror=null,setTimeout(n,0)})}var e,t=document.querySelector("head"),a=o.e,r=o.s;o.e=function(t,u){var s=!1,c=!0,i=function(n){u&&(u(o,n),u=null)};return!r&&e&&e[t]?void i(!0):(a(t,function(){s||(s=!0,c?setTimeout(function(){i()}):i())}),void(s||(c=!1,n(function(){s||(s=!0,r?r[t]=void 0:(e||(e={}),e[t]=!0),i(!0))}))))}}t()},583:function(n,e){function o(n){return n=n||Object.create(null),{on:function(e,o){(n[e]||(n[e]=[])).push(o)},off:function(e,o){n[e]&&n[e].splice(n[e].indexOf(o)>>>0,1)},emit:function(e,o){(n[e]||[]).map(function(n){n(o)}),(n["*"]||[]).map(function(n){n(e,o)})}}}n.exports=o},707:function(n,e){"use strict";function o(n){return function(e){var o=e.dispatch,t=e.getState;return function(e){return function(a){return"function"==typeof a?a(o,t,n):e(a)}}}}e.__esModule=!0;var t=o();t.withExtraArgument=o,e.default=t},510:function(n,e,o){o(3),n.exports=function(n){return o.e(0x9427c64ab85d,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(332)})})}},333:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}e.__esModule=!0;var a=o(287),r=o(334),u=o(707),s=t(u),c={adminTools:{isLoggedIn:!1,isEditingPage:!1}},i=function(){return(0,a.createStore)(r.appReducers,c,(0,a.applyMiddleware)(s.default))};e.default=i,n.exports=e.default},334:function(n,e){"use strict";e.__esModule=!0;var o=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(n[t]=o[t])}return n},t=e.adminTools=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments[1];switch(e.type){case"USER_LOGGED_IN":return o({},n,{isLoggedIn:!0,userRoles:e.userRoles});case"LOCK_FAILURE":return o({},n,{isLoggedIn:!1,error:e.err});case"USER_LOGGED_OUT":return o({},n,{isLoggedIn:!1,isEditingPage:!1});case"TOGGLE_EDITING":return o({},n,{isEditingPage:!n.isEditingPage});case"SAVING_PAGE":return o({},n,{savingPage:!0});case"SAVE_PAGE_SUCCESS":return console.log("page saved!"),o({},n,{savingPage:!1,pageSaved:!0});case"SAVE_PAGE_FAILURE":return console.log("page not saved :("),console.log(e.err),o({},n,{savingPage:!0,pageSaved:!1,error:e.err});default:return n}},a=e.pageData=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments[1];switch(e.type){case"UPDATE_PAGE_META_DATA":return o({},e.pageData);case"UPDATE_PAGE_TITLE":return o({},n,{title:e.title});default:return n}},r=e.content=function(){var n,e,t,a,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},u=arguments[1];switch(u.type){case"UPDATE_PAGE_CONTENT":return o({},u.content);case"UPDATE_PAGE_HEADER":var s=u.header;return o({},r,{header:o({},r.header,s)});case"UPDATE_SECTION_CONTENT":var c=u.sectionIndex,i=u.contentIndex,l=u.newContent;return o({},r,{body:o({},r.body,(e={},e[c]=o({},r.body[c],{content:o({},r.body[c].content,(n={},n[i]=o({},r.body[c].content[i],l),n))}),e))});case"DUPLICATE_SECTION":var d=o({},r.body[u.sectionIndex]),f=Object.values(r.body);return f.splice(u.sectionIndex,0,d),o({},r,{body:f});case"DELETE_SECTION":var p=Object.values(r.body);return p.splice(u.sectionIndex,1),o({},r,{body:p});case"ADD_CONTENT_ITEM":var m=o({},r.body[u.sectionIndex]),h=Object.values(m.content),g={type:"paragraph",text:"something"};return h.push(g),o({},r,{body:o({},r.body,(t={},t[u.sectionIndex]=o({},r.body[u.sectionIndex],{content:h}),t))});case"DELETE_CONTENT_ITEM":var y=o({},r.body[u.sectionIndex]),x=Object.values(y.content);return x.splice(u.contentIndex,1),o({},r,{body:o({},r.body,(a={},a[u.sectionIndex]=o({},r.body[u.sectionIndex],{content:x}),a))});default:return r}},u=e.notifications=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments[1];switch(e.type){case"SHOW_NOTIFICATION":return o({},n,{message:e.message,color:e.color});case"CLOSE_NOTIFICATION":return o({},n,{message:null,color:null});default:return n}};e.appReducers=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments[1];return{notifications:u(n.notifications,e),adminTools:t(n.adminTools,e),pageData:a(n.pageData,e),content:r(n.content,e)}}},511:function(n,e,o){o(3),n.exports=function(n){return o.e(72553922630409,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(335)})})}},512:function(n,e,o){o(3),n.exports=function(n){return o.e(84408224173190,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(336)})})}},513:function(n,e,o){o(3),n.exports=function(n){return o.e(0xeb7040f504b4,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(337)})})}},514:function(n,e,o){o(3),n.exports=function(n){return o.e(53031929681086,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(338)})})}},515:function(n,e,o){o(3),n.exports=function(n){return o.e(0xb2c7ae8e6d15,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(339)})})}},516:function(n,e,o){o(3),n.exports=function(n){return o.e(69344388523591,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(340)})})}}});
//# sourceMappingURL=app-52da059b2159a3a3ed4d.js.map