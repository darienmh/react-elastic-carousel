(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{Krsg:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return u})),n.d(t,"default",(function(){return h}));var r=n("Fcif"),o=n("7L9N"),a=n("+I+c"),i=n("mXGw"),c=n("/FXl"),b=n("TjRS"),m=n("ZFoC"),l=n("KMBU"),s=n("LEdC"),d=n("xGbp"),p=(n("aD51"),["components"]),u={};void 0!==u&&u&&u===Object(u)&&Object.isExtensible(u)&&!u.hasOwnProperty("__filemeta")&&Object.defineProperty(u,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/docs/mdx/renderArrow.mdx"}});var j={_frontmatter:u},O=b.a;function h(e){var t,n=e.components,h=Object(a.a)(e,p);return Object(c.b)(O,Object(r.a)({},j,h,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"renderarrow"},"renderArrow"),Object(c.b)("h3",{id:"you-can-provide-custom-arrow-buttons"},"You can provide custom Arrow buttons."),Object(c.b)("h2",{id:"signature"},"Signature"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"You can pass a function that returns a react element,",Object(c.b)("br",{parentName:"li"}),"This function is a ",Object(c.b)("a",{parentName:"li",href:"https://reactjs.org/docs/render-props.html"},"render prop")," and its signature is:  ")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"({type, onClick, isEdge}) => {/* return your element here */}\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"type")," will be either ",Object(c.b)("inlineCode",{parentName:"li"},"consts.PREV")," or ",Object(c.b)("inlineCode",{parentName:"li"},"consts.NEXT"),", depends on the relevant arrow direction."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"onClick")," Is the hook to the inner ",Object(c.b)("inlineCode",{parentName:"li"},"onClick")," of the ",Object(c.b)("inlineCode",{parentName:"li"},"Carousel"),". You can attach it wherever you want within the returned component."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"isEdge")," Will be true when there are no more items to show for this direction.")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"You should import the ",Object(c.b)("inlineCode",{parentName:"em"},"consts")," object to check the arrow direction")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"import Carousel, { consts } from 'react-elastic-carousel';\n // ....\n\ntype === consts.PREV\n")),Object(c.b)("h2",{id:"demo"},"Demo"),Object(c.b)(m.c,{__position:0,__code:"{\n    class App extends React.Component {\n      myArrow({ type, onClick, isEdge }) {\n        const pointer = type === consts.PREV ? '👈' : '👉'\n        return (\n          <Button onClick={onClick} disabled={isEdge}>\n            {pointer}\n          \n        )\n      }\n      render() {\n        return (\n          <div>\n            <Carousel renderArrow={this.myArrow}>\n              <Item>1</Item>\n              <Item>2</Item>\n              <Item>3</Item>\n              <Item>4</Item>\n              <Item>5</Item>\n              <Item>6</Item>\n            </Carousel>\n          </div>\n        )\n      }\n    }\n  }\n</Playground>",__scope:(t={props:h,DefaultLayout:b.a,Playground:m.c,Props:m.d,Carousel:l.b,consts:l.a,Button:s.a,Item:d.a},t.DefaultLayout=b.a,t._frontmatter=u,t),mdxType:"Playground"},function(e){function t(){return e.apply(this,arguments)||this}Object(o.a)(t,e);var n=t.prototype;return n.myArrow=function(e){var t=e.type,n=e.onClick,r=e.isEdge,o=t===l.a.PREV?"👈":"👉";return Object(c.b)(s.a,{onClick:n,disabled:r,mdxType:"Button"},o)},n.render=function(){return Object(c.b)("div",null,Object(c.b)(l.b,{renderArrow:this.myArrow,mdxType:"Carousel"},Object(c.b)(d.a,{mdxType:"Item"},"1"),Object(c.b)(d.a,{mdxType:"Item"},"2"),Object(c.b)(d.a,{mdxType:"Item"},"3"),Object(c.b)(d.a,{mdxType:"Item"},"4"),Object(c.b)(d.a,{mdxType:"Item"},"5"),Object(c.b)(d.a,{mdxType:"Item"},"6")))},t}(i.Component)))}void 0!==h&&h&&h===Object(h)&&Object.isExtensible(h)&&!h.hasOwnProperty("__filemeta")&&Object.defineProperty(h,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/docs/mdx/renderArrow.mdx"}}),h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-docs-mdx-render-arrow-mdx-1087a6c08940cb0a564c.js.map