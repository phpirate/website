(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{175:function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var r=t(177),a={search:{placeholder:"\ud83d\udd0d Busqueda..."},sort:{sortAsc:"Ordenar la columna en orden ascendente",sortDesc:"Ordenar la columna en orden descendente"},pagination:{previous:"Anterior",next:"Siguiente",navigate:function(e,n){return"P\xe1gina "+e+" de "+n},page:function(e){return"P\xe1gina "+e},showing:"Mostrando los resultados",of:"sobre",to:"a",results:""},loading:"Cargando...",noRecordsFound:"Nig\xfan resultado encontrado",error:"Se produjo un error al recuperar datos"},i={search:{placeholder:"\ud83d\udd0d Recherche..."},sort:{sortAsc:"Trier la colonne dans l'ordre croissant",sortDesc:"Trier la colonne dans l'ordre d\xe9croissant"},pagination:{previous:"Pr\xe9c\xe9dent",next:"Suivant",navigate:function(e,n){return"Page "+e+" de "+n},page:function(e){return"Page "+e},showing:"Affichage des r\xe9sultats",of:"sur",to:"\xe0",results:""},loading:"Chargement...",noRecordsFound:"Aucun r\xe9sultat trouv\xe9",error:"Une erreur est survenue lors de la r\xe9cup\xe9ration des donn\xe9es"},o=t(176),s=t(0),l=t.n(s),c=t(179);class d extends s.Component{render(){return l.a.createElement(o.a,{children:this.props.children,transformCode:e=>`\nfunction () {\n  ${e}\n \n  const wrapperRef = useRef(null);\n   \n  useEffect(() => {\n    if (typeof (grid) == 'object' && wrapperRef && wrapperRef.current && wrapperRef.current.childNodes.length === 0) {\n      grid.render(wrapperRef.current);\n    }\n  });\n  \n  return (\n    <div ref={wrapperRef} />\n  );\n}\n`,live:!0,scope:{Grid:r.e,html:r.k,h:r.j,gCreateRef:r.i,gComponent:r.d,PluginPosition:r.g,BaseComponent:r.b,CodeBlock:o.a,useEffect:s.useEffect,useRef:s.useRef,faker:c,esES:a,frFR:i,...this.props.scope}})}}},93:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return p}));var r=t(3),a=t(8),i=(t(0),t(174)),o=t(175),s={id:"html-cells",title:"HTML in cells",keywords:["javascript","table","javascript table","gridjs","grid js","html cell"]},l={unversionedId:"examples/html-cells",id:"examples/html-cells",isDocsHomePage:!1,title:"HTML in cells",description:"If you are using the ES module, import the html function first:",source:"@site/docs/examples/html-cells.md",sourceDirName:"examples",slug:"/examples/html-cells",permalink:"/docs/examples/html-cells",editUrl:"https://github.com/grid-js/website/edit/master/docs/examples/html-cells.md",version:"current",lastUpdatedBy:"Afshin Mehrabani",lastUpdatedAt:1600806961,formattedLastUpdatedAt:"9/22/2020",frontMatter:{id:"html-cells",title:"HTML in cells",keywords:["javascript","table","javascript table","gridjs","grid js","html cell"]},sidebar:"sidebar",previous:{title:"Row buttons",permalink:"/docs/examples/row-buttons"},next:{title:"HTML in header cells",permalink:"/docs/examples/html-header-cells"}},c=[],d={toc:c};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"If you are using the ES module, import the ",Object(i.b)("inlineCode",{parentName:"p"},"html")," function first:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},'import { Grid, html } from "gridjs";\n')),Object(i.b)("p",null,"or use ",Object(i.b)("inlineCode",{parentName:"p"},"gridjs.html(...)")," if you are using the UMD export."),Object(i.b)("p",null,"Then you can use that in ",Object(i.b)("inlineCode",{parentName:"p"},"formatter")," function or directly in ",Object(i.b)("inlineCode",{parentName:"p"},"data")," array:"),Object(i.b)(o.a,{children:"\nconst grid = new Grid({\n  columns: [\n      { \n        name: 'Name',\n        formatter: (cell) => html(`<b>${cell}</b>`)\n      },\n      'Email',\n      { \n        name: 'Actions',\n        formatter: (_, row) => html(`<a href='mailto:${row.cells[1].data}'>Email</a>`)\n      },\n   ],\n  data: Array(5).fill().map(x => [\n    faker.name.findName(),\n    faker.internet.email(),\n    null\n  ])\n});\n",mdxType:"LiveExample"}),Object(i.b)("br",null),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Using the ",Object(i.b)("inlineCode",{parentName:"p"},"html")," function can expose your application to ",Object(i.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Cross-site_scripting"},"XSS attacks"),".\nMake sure you understand the implications of using this function and ",Object(i.b)("strong",{parentName:"p"},"always")," sanitize the user inputs before passing them\nto the ",Object(i.b)("inlineCode",{parentName:"p"},"html")," function."))),Object(i.b)(o.a,{children:"\nconst grid = new Grid({\n  columns: [\n    'Name',\n    'Email',\n    'Actions',\n  ],\n  data: Array(5).fill().map(x => [\n    faker.name.findName(),\n    faker.internet.email(),\n    html(\n      \"<div style='padding: 2px; border: 1px solid #ccc;border-radius: 4px;'>\" +\n        \"<center>hello!</center>\" +\n      \"</div>\"\n    )\n  ]),\n  search: true\n});\n",mdxType:"LiveExample"}))}p.isMDXComponent=!0}}]);