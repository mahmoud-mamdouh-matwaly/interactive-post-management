"use strict";(self.webpackChunkinteractive_post_management=self.webpackChunkinteractive_post_management||[]).push([[612],{612:function(n,e,r){r.r(e),r.d(e,{default:function(){return C}});var o=r(2791),t=r(7689),a=r(1413),u=r(9439);function l(n,e){var r=(0,o.useId)();return(0,o.useMemo)((function(){return n||[e,r].filter(Boolean).join("-")}),[n,e,r])}function i(){return!("undefined"===typeof window||!window.document||!window.document.createElement)}var s=i()?o.useLayoutEffect:o.useEffect;function c(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=(0,o.useRef)(n);return s((function(){r.current=n})),(0,o.useCallback)((function(){for(var n,e,o=arguments.length,t=new Array(o),a=0;a<o;a++)t[a]=arguments[a];return null==(e=r.current)?void 0:(n=e).call.apply(n,[r].concat(t))}),e)}var d=r(1765);var p=r(8594),f=r(695),m=r(3204),g=r(184),v=(0,o.lazy)((function(){return Promise.all([r.e(966),r.e(79)]).then(r.bind(r,5079))})),w=(0,o.lazy)((function(){return Promise.all([r.e(966),r.e(816)]).then(r.bind(r,9816))})),C=function(){var n=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=n.onClose,r=n.onOpen,t=n.isOpen,i=n.id,s=c(r),p=c(e),f=(0,o.useState)(n.defaultIsOpen||!1),m=(0,u.Z)(f,2),g=m[0],v=m[1],w=function(n,e){var r=void 0!==n;return[r,r&&"undefined"!==typeof n?n:e]}(t,g),C=(0,u.Z)(w,2),x=C[0],h=C[1],b=l(i,"disclosure"),j=(0,o.useCallback)((function(){x||v(!1),null==p||p()}),[x,p]),y=(0,o.useCallback)((function(){x||v(!0),null==s||s()}),[x,s]),k=(0,o.useCallback)((function(){(h?j:y)()}),[h,y,j]);return{isOpen:!!h,onOpen:y,onClose:j,onToggle:k,isControlled:x,getButtonProps:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.Z)((0,a.Z)({},n),{},{"aria-expanded":h,"aria-controls":b,onClick:(0,d.v0)(n.onClick,k)})},getDisclosureProps:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.Z)((0,a.Z)({},n),{},{hidden:!h,id:b})}}}(),e=n.isOpen,r=n.onOpen,i=n.onClose;return(0,g.jsxs)(p.r,{templateAreas:'"nav header"\n    "nav main"\n    "nav footer"',gridTemplateRows:"60px 1fr 30px",gridTemplateColumns:"220px 1fr",gap:"1",fontWeight:"bold",children:[(0,g.jsx)(f.P,{pl:"2",bg:"blue.950",area:"nav",children:(0,g.jsx)(o.Suspense,{fallback:(0,g.jsx)(m.$,{}),children:(0,g.jsx)(w,{isOpen:e,onClose:i})})}),(0,g.jsx)(f.P,{bg:"white",area:"header",children:(0,g.jsx)(o.Suspense,{fallback:(0,g.jsx)(m.$,{}),children:(0,g.jsx)(v,{setCollapsed:r,collapsed:e})})}),(0,g.jsx)(f.P,{px:"xs",pt:"2xl",area:"main",bg:"gray.50",children:(0,g.jsx)(t.j3,{})})]})}},8594:function(n,e,r){r.d(e,{r:function(){return s}});var o=r(1413),t=r(5987),a=r(7872),u=r(1357),l=r(184),i=["templateAreas","gap","rowGap","columnGap","column","row","autoFlow","autoRows","templateRows","autoColumns","templateColumns"],s=(0,a.G)((function(n,e){var r=n.templateAreas,a=n.gap,s=n.rowGap,c=n.columnGap,d=n.column,p=n.row,f=n.autoFlow,m=n.autoRows,g=n.templateRows,v=n.autoColumns,w=n.templateColumns,C=(0,t.Z)(n,i),x={display:"grid",gridTemplateAreas:r,gridGap:a,gridRowGap:s,gridColumnGap:c,gridAutoColumns:v,gridColumn:d,gridRow:p,gridAutoFlow:f,gridAutoRows:m,gridTemplateRows:g,gridTemplateColumns:w};return(0,l.jsx)(u.m.div,(0,o.Z)({ref:e,__css:x},C))}));s.displayName="Grid"},695:function(n,e,r){r.d(e,{P:function(){return p}});var o=r(1413),t=r(5987),a=r(7872),u=r(1357),l=r(2796),i=r(6992);Object.freeze(["base","sm","md","lg","xl","2xl"]);var s=r(184),c=["area","colSpan","colStart","colEnd","rowEnd","rowSpan","rowStart"];function d(n){return e=n,r=function(n){return"auto"===n?"auto":"span ".concat(n,"/span ").concat(n)},Array.isArray(e)?e.map((function(n){return null===n?null:r(n)})):(0,i.Kn)(e)?Object.keys(e).reduce((function(n,o){return n[o]=r(e[o]),n}),{}):null!=e?r(e):null;var e,r}var p=(0,a.G)((function(n,e){var r=n.area,a=n.colSpan,i=n.colStart,p=n.colEnd,f=n.rowEnd,m=n.rowSpan,g=n.rowStart,v=(0,t.Z)(n,c),w=(0,l.o)({gridArea:r,gridColumn:d(a),gridRow:d(m),gridColumnStart:i,gridColumnEnd:p,gridRowStart:g,gridRowEnd:f});return(0,s.jsx)(u.m.div,(0,o.Z)({ref:e,__css:w},v))}));p.displayName="GridItem"},2796:function(n,e,r){function o(n){var e=Object.assign({},n);for(var r in e)void 0===e[r]&&delete e[r];return e}r.d(e,{o:function(){return o}})}}]);
//# sourceMappingURL=612.a15fda6d.chunk.js.map