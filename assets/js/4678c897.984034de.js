/*! For license information please see 4678c897.984034de.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{105:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return d})),n.d(t,"default",(function(){return u}));var o=n(3),r=n(8),s=(n(0),n(174)),i=n(175),c=n(208),a={id:"selection-events",title:"Selection events",keywords:["javascript","table","javascript table","gridjs","grid js","checkbox","cell checkbox","row selection","selection events"]},p={unversionedId:"examples/selection-events",id:"examples/selection-events",isDocsHomePage:!1,title:"Selection events",description:"You can also subscribe to the RowSelection store and receive updates as soon as a row is checked or unchecked:",source:"@site/docs/examples/selection-events.md",sourceDirName:"examples",slug:"/examples/selection-events",permalink:"/docs/examples/selection-events",editUrl:"https://github.com/grid-js/website/edit/master/docs/examples/selection-events.md",version:"current",lastUpdatedBy:"Afshin Mehrabani",lastUpdatedAt:1604780355,formattedLastUpdatedAt:"11/7/2020",frontMatter:{id:"selection-events",title:"Selection events",keywords:["javascript","table","javascript table","gridjs","grid js","checkbox","cell checkbox","row selection","selection events"]},sidebar:"sidebar",previous:{title:"Row selection",permalink:"/docs/examples/row-selection"},next:{title:"Nested Header",permalink:"/docs/examples/nested-header"}},d=[],l={toc:d};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"You can also subscribe to the ",Object(s.b)("inlineCode",{parentName:"p"},"RowSelection")," store and receive updates as soon as a row is checked or unchecked:"),Object(s.b)(i.a,{children:"\nconst grid = new Grid({\n  columns: [\n      {\n        id: 'awesomeCheckbox',\n        name: 'Select',\n        plugin: {\n          component: RowSelection,\n          props: {\n            id: (row) => row.cell(2).data\n          }\n        }\n      },\n      { \n        name: 'Name',\n        formatter: (cell) => `Name: ${cell}`\n      },\n      'Email',\n  ],\n  sort: true,\n  data: Array(5).fill().map(x => [\n    faker.name.findName(),\n    faker.internet.email(),\n  ])\n});\n  \ngrid.on('ready', () => {\n  // find the plugin with the give plugin ID\n  const checkboxPlugin = grid.config.plugin.get('awesomeCheckbox');\n  \n  // subscribe to the store events\n  checkboxPlugin.props.store.on('updated', function (state, prevState) {\n    console.log('checkbox updated', state, prevState);\n  });\n})\n",scope:{RowSelection:c.a},mdxType:"LiveExample"}))}u.isMDXComponent=!0},175:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var o=n(177),r={search:{placeholder:"\ud83d\udd0d Busqueda..."},sort:{sortAsc:"Ordenar la columna en orden ascendente",sortDesc:"Ordenar la columna en orden descendente"},pagination:{previous:"Anterior",next:"Siguiente",navigate:function(e,t){return"P\xe1gina "+e+" de "+t},page:function(e){return"P\xe1gina "+e},showing:"Mostrando los resultados",of:"sobre",to:"a",results:""},loading:"Cargando...",noRecordsFound:"Nig\xfan resultado encontrado",error:"Se produjo un error al recuperar datos"},s={search:{placeholder:"\ud83d\udd0d Recherche..."},sort:{sortAsc:"Trier la colonne dans l'ordre croissant",sortDesc:"Trier la colonne dans l'ordre d\xe9croissant"},pagination:{previous:"Pr\xe9c\xe9dent",next:"Suivant",navigate:function(e,t){return"Page "+e+" de "+t},page:function(e){return"Page "+e},showing:"Affichage des r\xe9sultats",of:"sur",to:"\xe0",results:""},loading:"Chargement...",noRecordsFound:"Aucun r\xe9sultat trouv\xe9",error:"Une erreur est survenue lors de la r\xe9cup\xe9ration des donn\xe9es"},i=n(176),c=n(0),a=n.n(c),p=n(179);class d extends c.Component{render(){return a.a.createElement(i.a,{children:this.props.children,transformCode:e=>`\nfunction () {\n  ${e}\n \n  const wrapperRef = useRef(null);\n   \n  useEffect(() => {\n    if (typeof (grid) == 'object' && wrapperRef && wrapperRef.current && wrapperRef.current.childNodes.length === 0) {\n      grid.render(wrapperRef.current);\n    }\n  });\n  \n  return (\n    <div ref={wrapperRef} />\n  );\n}\n`,live:!0,scope:{Grid:o.e,html:o.k,h:o.j,gCreateRef:o.i,gComponent:o.d,PluginPosition:o.g,BaseComponent:o.b,CodeBlock:i.a,useEffect:c.useEffect,useRef:c.useRef,faker:p,esES:r,frFR:s,...this.props.scope}})}}},208:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var o=n(177),r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)};function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}function i(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var o=Array(e),r=0;for(t=0;t<n;t++)for(var s=arguments[t],i=0,c=s.length;i<c;i++,r++)o[r]=s[i];return o}var c=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return s(t,e),t.prototype.getInitialState=function(){return{rowIds:[]}},t.prototype.handle=function(e,t){if("CHECK"===e){var n=t.ROW_ID;this.check(n)}"UNCHECK"===e&&(n=t.ROW_ID,this.uncheck(n))},t.prototype.check=function(e){this.state.rowIds.indexOf(e)>-1||this.setState({rowIds:i([e],this.state.rowIds)})},t.prototype.uncheck=function(e){var t=this.state.rowIds.indexOf(e);if(-1!==t){var n=i(this.state.rowIds);n.splice(t,1),this.setState({rowIds:n})}},t}(o.c),a=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return s(t,e),t.prototype.check=function(e){this.dispatch("CHECK",{ROW_ID:e})},t.prototype.uncheck=function(e){this.dispatch("UNCHECK",{ROW_ID:e})},t}(o.a),p=function(e){function t(t,n){var o=e.call(this,t,n)||this;if(o.isDataCell=function(e){return void 0!==e.row},o.getParentTR=function(){return o.base&&o.base.parentElement&&o.base.parentElement.parentElement},o.state={isChecked:!1},o.isDataCell(t)){if(t.store)o.store=t.store;else{var r=new c(o.config.dispatcher);o.store=r,t.plugin.props.store=r}o.actions=new a(o.config.dispatcher),o.storeUpdatedFn=o.storeUpdated.bind(o),o.store.on("updated",o.storeUpdatedFn),t.cell.data&&o.check()}return o}return s(t,e),t.prototype.componentWillUnmount=function(){this.store.off("updated",this.storeUpdatedFn)},t.prototype.componentDidMount=function(){this.store&&this.storeUpdated(this.store.state)},t.prototype.storeUpdated=function(e){var t=this.getParentTR();if(t){var n=e.rowIds.indexOf(this.props.id(this.props.row))>-1;this.setState({isChecked:n}),n?t.classList.add(this.props.selectedClassName):t.classList.remove(this.props.selectedClassName)}},t.prototype.check=function(){this.actions.check(this.props.id(this.props.row)),this.props.cell.update(!0)},t.prototype.uncheck=function(){this.actions.uncheck(this.props.id(this.props.row)),this.props.cell.update(!1)},t.prototype.toggle=function(){this.state.isChecked?this.uncheck():this.check()},t.prototype.render=function(){var e=this;return this.isDataCell(this.props)?Object(o.j)("input",{type:"checkbox",checked:this.state.isChecked,onChange:function(){return e.toggle()},className:this.props.checkboxClassName}):null},t.defaultProps={selectedClassName:Object(o.h)("tr","selected"),checkboxClassName:Object(o.h)("checkbox")},t}(o.f)}}]);