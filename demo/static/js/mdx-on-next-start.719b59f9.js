(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"./src/docs/mdx/onNextStart.mdx":function(e,n,t){"use strict";t.r(n);var o=t("./node_modules/react/index.js"),a=t.n(o),m=t("./node_modules/@mdx-js/tag/dist/index.js"),r=t("./node_modules/docz/dist/index.m.js"),c=t("./src/react-elastic-carousel/index.js"),s=t("./src/docs/components/SimpleItem.js");function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},m=Object.keys(e);for(o=0;o<m.length;o++)t=m[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(o=0;o<m.length;o++)t=m[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}n.default=function(e){var n=e.components,t=l(e,["components"]);return a.a.createElement(m.MDXTag,{name:"wrapper",components:n},a.a.createElement(m.MDXTag,{name:"ul",components:n},a.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},a.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"onNextStart")," will pass both the ",a.a.createElement(m.MDXTag,{name:"strong",components:n,parentName:"li"},"current")," and ",a.a.createElement(m.MDXTag,{name:"strong",components:n,parentName:"li"},"next")," ",a.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"item-object"),":  ")),a.a.createElement(m.MDXTag,{name:"pre",components:n},a.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre"},"(currentItem, nextItem) => {/*...*/}\n")),a.a.createElement(m.MDXTag,{name:"ul",components:n},a.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},"The ",a.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"item-object")," has the shape of:")),a.a.createElement(m.MDXTag,{name:"pre",components:n},a.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre"},"{\n    item: {/* your item */},\n    index: // the item's index number \n}\n")),a.a.createElement(r.Playground,{__position:0,__code:'<Carousel\n  itemsToShow={2}\n  onNextStart={(currentItem, nextItem) =>\n    alert(JSON.stringify(currentItem) + `\n` + JSON.stringify(nextItem))\n  }\n>\n  <Item someProp="cool1">1</Item>\n  <Item someProp="cool2">2</Item>\n  <Item someProp="cool3">3</Item>\n  <Item someProp="cool4">4</Item>\n  <Item someProp="cool5">5</Item>\n  <Item someProp="cool6">6</Item>\n</Carousel>',__scope:{props:t,Carousel:c.b,Item:s.a}},a.a.createElement(c.b,{itemsToShow:2,onNextStart:function(e,n){return alert(JSON.stringify(e)+"\n"+JSON.stringify(n))}},a.a.createElement(s.a,{someProp:"cool1"},"1"),a.a.createElement(s.a,{someProp:"cool2"},"2"),a.a.createElement(s.a,{someProp:"cool3"},"3"),a.a.createElement(s.a,{someProp:"cool4"},"4"),a.a.createElement(s.a,{someProp:"cool5"},"5"),a.a.createElement(s.a,{someProp:"cool6"},"6"))))}}}]);