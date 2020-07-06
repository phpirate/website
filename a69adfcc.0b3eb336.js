(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{147:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),i=(n(0),n(179)),o=n(180),s={id:"event-handler",title:"Events",keywords:["javascript","table","javascript table","gridjs","grid js","event handler"]},c={id:"examples/event-handler",isDocsHomePage:!1,title:"Events",description:"Grid.js has a global EventEmitter object which is used to emit events throughout the application lifecycle.",source:"@site/docs/examples/event-handler.md",permalink:"/docs/examples/event-handler",editUrl:"https://github.com/grid-js/website/edit/master/docs/examples/event-handler.md",lastUpdatedBy:"Afshin Mehrabani",lastUpdatedAt:1593947806,sidebar:"sidebar",previous:{title:"Stock Market",permalink:"/docs/examples/stock-market"}},l=[],d={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Grid.js has a global EventEmitter object which is used to emit events throughout the application lifecycle.\nSimply, use the ",Object(i.b)("inlineCode",{parentName:"p"},"on")," method to capture and bind a function to events."),Object(i.b)("p",null,"Open your developer tools console to see the logs:"),Object(i.b)(o.a,{children:"\nconst grid = new Grid({\n  columns: ['Name', 'Email', 'Phone Number'],\n  sort: true,\n  search: true,\n  data: [\n    ['John', 'john@example.com', '(353) 01 222 3333'],\n    ['Mark', 'mark@gmail.com',   '(01) 22 888 4444'],\n    ['Eoin', 'eo3n@yahoo.com',   '(05) 10 878 5554'],\n    ['Nisen', 'nis900@gmail.com',   '313 333 1923']\n  ]\n});\n   \ngrid.on('rowClick', (...args) => console.log('row: ' + JSON.stringify(args), args));\ngrid.on('cellClick', (...args) => console.log('cell: ' + JSON.stringify(args), args));\n",mdxType:"LiveExample"}),Object(i.b)("br",null),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"See a full list of Grid.js events on ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/grid-js/gridjs/blob/master/src/events.ts"}),"event.ts"),"."))))}p.isMDXComponent=!0},180:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));n(184);var r=n(3),a=n(182),i=n(181),o=n(0),s=n.n(o),c=n(183),l=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){return s.a.createElement(i.a,{children:this.props.children,transformCode:function(e){return"\nfunction () {\n  "+e+"\n \n  const wrapperRef = useRef(null);\n   \n  useEffect(() => {\n    if (wrapperRef && wrapperRef.current && wrapperRef.current.childNodes.length === 0) {\n      grid.render(wrapperRef.current);\n    }\n  });\n  \n  return (\n    <div ref={wrapperRef} />\n  );\n}\n"},live:!0,scope:Object.assign({Grid:a.b,html:a.e,h:a.d,gCreateRef:a.c,gComponent:a.a,CodeBlock:i.a,useEffect:o.useEffect,useRef:o.useRef,faker:c},this.props.scope)})},t}(o.Component)}}]);