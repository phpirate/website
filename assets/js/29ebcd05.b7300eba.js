(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{175:function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var r=t(177),a={search:{placeholder:"\ud83d\udd0d Busqueda..."},sort:{sortAsc:"Ordenar la columna en orden ascendente",sortDesc:"Ordenar la columna en orden descendente"},pagination:{previous:"Anterior",next:"Siguiente",navigate:function(e,n){return"P\xe1gina "+e+" de "+n},page:function(e){return"P\xe1gina "+e},showing:"Mostrando los resultados",of:"sobre",to:"a",results:""},loading:"Cargando...",noRecordsFound:"Nig\xfan resultado encontrado",error:"Se produjo un error al recuperar datos"},o={search:{placeholder:"\ud83d\udd0d Recherche..."},sort:{sortAsc:"Trier la colonne dans l'ordre croissant",sortDesc:"Trier la colonne dans l'ordre d\xe9croissant"},pagination:{previous:"Pr\xe9c\xe9dent",next:"Suivant",navigate:function(e,n){return"Page "+e+" de "+n},page:function(e){return"Page "+e},showing:"Affichage des r\xe9sultats",of:"sur",to:"\xe0",results:""},loading:"Chargement...",noRecordsFound:"Aucun r\xe9sultat trouv\xe9",error:"Une erreur est survenue lors de la r\xe9cup\xe9ration des donn\xe9es"},s=t(176),i=t(0),c=t.n(i),d=t(179);class l extends i.Component{render(){return c.a.createElement(s.a,{children:this.props.children,transformCode:e=>`\nfunction () {\n  ${e}\n \n  const wrapperRef = useRef(null);\n   \n  useEffect(() => {\n    if (typeof (grid) == 'object' && wrapperRef && wrapperRef.current && wrapperRef.current.childNodes.length === 0) {\n      grid.render(wrapperRef.current);\n    }\n  });\n  \n  return (\n    <div ref={wrapperRef} />\n  );\n}\n`,live:!0,scope:{Grid:r.e,html:r.k,h:r.j,gCreateRef:r.i,gComponent:r.d,PluginPosition:r.g,BaseComponent:r.b,CodeBlock:s.a,useEffect:i.useEffect,useRef:i.useRef,faker:d,esES:a,frFR:o,...this.props.scope}})}}},92:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return d})),t.d(n,"default",(function(){return u}));var r=t(3),a=t(8),o=(t(0),t(174)),s=t(175),i={id:"row-buttons",title:"Row buttons",keywords:["javascript","table","javascript table","gridjs","grid js","action buttons"]},c={unversionedId:"examples/row-buttons",id:"examples/row-buttons",isDocsHomePage:!1,title:"Row buttons",description:"You can get access to the cell or the entire row using the formatter function. In this example, we are adding a button",source:"@site/docs/examples/row-buttons.md",sourceDirName:"examples",slug:"/examples/row-buttons",permalink:"/docs/examples/row-buttons",editUrl:"https://github.com/grid-js/website/edit/master/docs/examples/row-buttons.md",version:"current",lastUpdatedBy:"Afshin Mehrabani",lastUpdatedAt:1593952023,formattedLastUpdatedAt:"7/5/2020",frontMatter:{id:"row-buttons",title:"Row buttons",keywords:["javascript","table","javascript table","gridjs","grid js","action buttons"]},sidebar:"sidebar",previous:{title:"Cell Attributes",permalink:"/docs/examples/cell-attributes"},next:{title:"HTML in cells",permalink:"/docs/examples/html-cells"}},d=[],l={toc:d};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"You can get access to the cell or the entire row using the ",Object(o.b)("inlineCode",{parentName:"p"},"formatter")," function. In this example, we are adding a button\nto each row which has an ",Object(o.b)("inlineCode",{parentName:"p"},"onClick")," handler function that can read the entire row."),Object(o.b)("p",null,"Import the ",Object(o.b)("inlineCode",{parentName:"p"},"h")," function first:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'import { Grid, h } from "gridjs";\n')),Object(o.b)("p",null,"Then you can use that in ",Object(o.b)("inlineCode",{parentName:"p"},"formatter")," function or directly in ",Object(o.b)("inlineCode",{parentName:"p"},"data")," array:"),Object(o.b)(s.a,{children:"\nconst grid = new Grid({\n  columns: [\n      { \n        name: 'Name',\n      },\n      'Email',\n      { \n        name: 'Actions',\n        formatter: (cell, row) => {\n          return h('button', {\n            className: 'py-2 mb-4 px-4 border rounded-md text-white bg-blue-600',\n            onClick: () => alert(`Editing \"${row.cells[0].data}\" \"${row.cells[1].data}\"`)\n          }, 'Edit');\n        }\n      },\n   ],\n  data: Array(5).fill().map(x => [\n    faker.name.findName(),\n    faker.internet.email(),\n    null\n  ])\n});\n",mdxType:"LiveExample"}),Object(o.b)("br",null),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"It is also possible to bind callback functions to ",Object(o.b)("inlineCode",{parentName:"p"},"cellClick")," or ",Object(o.b)("inlineCode",{parentName:"p"},"rowClick")," events.\nSee ",Object(o.b)("a",{parentName:"p",href:"/docs/examples/event-handler"},"Events")," for more details."))))}u.isMDXComponent=!0}}]);