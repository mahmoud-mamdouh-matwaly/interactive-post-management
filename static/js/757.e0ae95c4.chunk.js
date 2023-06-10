"use strict";(self.webpackChunkinteractive_post_management=self.webpackChunkinteractive_post_management||[]).push([[757,348],{348:function(e,i,n){n.r(i),n.d(i,{default:function(){return y}});var l=n(1413),r=n(9439),a=n(2791),t=n(1079),s=n(5705),d=n(176),o=n(4087),u=n(4464),c=n(6069),v=n(6340),h=n(9229),m=n(184),b=function(e){var i=e.label,n=e.handleChange,l=e.value,r=e.hasError,a=e.messageError,t=e.readOnly,s=void 0!==t&&t,d=e.isTextArea,o=void 0!==d&&d,u=e.name;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("label",{htmlFor:i,children:[i," : "]}),!o&&(0,m.jsx)(c.I,{id:i,name:u,type:"text",onChange:n,value:l,readOnly:s,disabled:s,placeholder:i}),o&&(0,m.jsx)(v.g,{id:i,name:u,type:"text",onChange:n,value:l,readOnly:s,disabled:s,placeholder:i}),r?(0,m.jsx)(h.x,{color:"red.500",children:a}):null]})},f=n(8007),p=(0,f.Ry)({title:(0,f.Z_)().required("Title is required"),body:(0,f.Z_)().required("Description is required")}),x=function(e){var i=e.postItem,n=e.handleSubmit,c=void 0===n?function(){}:n,v=e.isView,h=void 0!==v&&v,f=(0,a.useState)(!0),x=(0,r.Z)(f,2),y=x[0],Z=x[1],g=(0,s.TA)({initialValues:{title:null===i||void 0===i?void 0:i.title,body:null===i||void 0===i?void 0:i.body},enableReinitialize:!0,validationSchema:p,onSubmit:function(e){c((0,l.Z)({},e))}}),C=(0,a.useCallback)((function(e){g.handleChange(e),Z(!1)}),[]);return(0,m.jsxs)("form",{onSubmit:g.handleSubmit,children:[(0,m.jsxs)(d.k,{direction:h?"column":"row",w:"100%",children:[(0,m.jsx)(o.xu,{w:h?"100%":"48%",children:(0,m.jsx)(b,{label:"Title",handleChange:C,value:g.values.title,hasError:!(!g.touched.title||!g.errors.title),messageError:g.errors.title,name:"title",readOnly:h})}),(0,m.jsx)(u.L,{}),(0,m.jsx)(o.xu,{w:h?"100%":"48%",children:(0,m.jsx)(b,{label:"Description",handleChange:C,value:g.values.body,hasError:!(!g.touched.body||!g.errors.body),messageError:g.errors.body,isTextArea:!0,name:"body",readOnly:h})})]}),h?null:(0,m.jsx)(d.k,{w:"100%",align:"center",justify:"end",my:"md",children:(0,m.jsx)(t.Z,{type:"primary",htmlType:"submit",text:"Submit",bg:"blue.600",color:"white",isDisabled:y})})]})},y=(0,a.memo)(x)},3856:function(e,i,n){n.d(i,{Y:function(){return F}});var l=n(1413),r=n(5987),a=n(9439),t=n(9886),s=n(4591),d=n(7872),o=n(9219),u=n(2996),c=n(1357),v=n(6992),h=n(2791),m=n(184),b=["id","isRequired","isInvalid","isDisabled","isReadOnly"],f=["getRootProps","htmlProps"],p=(0,t.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),x=(0,a.Z)(p,2),y=x[0],Z=x[1],g=(0,t.k)({strict:!1,name:"FormControlContext"}),C=(0,a.Z)(g,2),j=C[0],R=C[1];var k=(0,d.G)((function(e,i){var n=(0,o.jC)("Form",e),t=function(e){var i=e.id,n=e.isRequired,t=e.isInvalid,d=e.isDisabled,o=e.isReadOnly,u=(0,r.Z)(e,b),c=(0,h.useId)(),m=i||"field-".concat(c),f="".concat(m,"-label"),p="".concat(m,"-feedback"),x="".concat(m,"-helptext"),y=(0,h.useState)(!1),Z=(0,a.Z)(y,2),g=Z[0],C=Z[1],j=(0,h.useState)(!1),R=(0,a.Z)(j,2),k=R[0],I=R[1],q=(0,h.useState)(!1),F=(0,a.Z)(q,2),S=F[0],T=F[1],O=(0,h.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,l.Z)((0,l.Z)({id:x},e),{},{ref:(0,s.lq)(i,(function(e){e&&I(!0)}))})}),[x]),_=(0,h.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,l.Z)((0,l.Z)({},e),{},{ref:i,"data-focus":(0,v.PB)(S),"data-disabled":(0,v.PB)(d),"data-invalid":(0,v.PB)(t),"data-readonly":(0,v.PB)(o),id:void 0!==e.id?e.id:f,htmlFor:void 0!==e.htmlFor?e.htmlFor:m})}),[m,d,S,t,o,f]),P=(0,h.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,l.Z)((0,l.Z)({id:p},e),{},{ref:(0,s.lq)(i,(function(e){e&&C(!0)})),"aria-live":"polite"})}),[p]),D=(0,h.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,l.Z)((0,l.Z)((0,l.Z)({},e),u),{},{ref:i,role:"group"})}),[u]),N=(0,h.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,l.Z)((0,l.Z)({},e),{},{ref:i,role:"presentation","aria-hidden":!0,children:e.children||"*"})}),[]);return{isRequired:!!n,isInvalid:!!t,isReadOnly:!!o,isDisabled:!!d,isFocused:!!S,onFocus:function(){return T(!0)},onBlur:function(){return T(!1)},hasFeedbackText:g,setHasFeedbackText:C,hasHelpText:k,setHasHelpText:I,id:m,labelId:f,feedbackId:p,helpTextId:x,htmlProps:u,getHelpTextProps:O,getErrorMessageProps:P,getRootProps:D,getLabelProps:_,getRequiredIndicatorProps:N}}((0,u.Lr)(e)),d=t.getRootProps,p=(t.htmlProps,(0,r.Z)(t,f)),x=(0,v.cx)("chakra-form-control",e.className);return(0,m.jsx)(j,{value:p,children:(0,m.jsx)(y,{value:n,children:(0,m.jsx)(c.m.div,(0,l.Z)((0,l.Z)({},d({},i)),{},{className:x,__css:n.container}))})})}));k.displayName="FormControl",(0,d.G)((function(e,i){var n=R(),r=Z(),a=(0,v.cx)("chakra-form__helper-text",e.className);return(0,m.jsx)(c.m.div,(0,l.Z)((0,l.Z)({},null==n?void 0:n.getHelpTextProps(e,i)),{},{__css:r.helperText,className:a}))})).displayName="FormHelperText";var I=["isDisabled","isInvalid","isReadOnly","isRequired"],q=["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"];function F(e){var i=function(e){var i,n,a,t=R(),s=e.id,d=e.disabled,o=e.readOnly,u=e.required,c=e.isRequired,h=e.isInvalid,m=e.isReadOnly,b=e.isDisabled,f=e.onFocus,p=e.onBlur,x=(0,r.Z)(e,q),y=e["aria-describedby"]?[e["aria-describedby"]]:[];(null==t?void 0:t.hasFeedbackText)&&(null==t?void 0:t.isInvalid)&&y.push(t.feedbackId);(null==t?void 0:t.hasHelpText)&&y.push(t.helpTextId);return(0,l.Z)((0,l.Z)({},x),{},{"aria-describedby":y.join(" ")||void 0,id:null!=s?s:null==t?void 0:t.id,isDisabled:null!=(i=null!=d?d:b)?i:null==t?void 0:t.isDisabled,isReadOnly:null!=(n=null!=o?o:m)?n:null==t?void 0:t.isReadOnly,isRequired:null!=(a=null!=u?u:c)?a:null==t?void 0:t.isRequired,isInvalid:null!=h?h:null==t?void 0:t.isInvalid,onFocus:(0,v.v0)(null==t?void 0:t.onFocus,f),onBlur:(0,v.v0)(null==t?void 0:t.onBlur,p)})}(e),n=i.isDisabled,a=i.isInvalid,t=i.isReadOnly,s=i.isRequired,d=(0,r.Z)(i,I);return(0,l.Z)((0,l.Z)({},d),{},{disabled:n,readOnly:t,required:s,"aria-invalid":(0,v.Qm)(a),"aria-required":(0,v.Qm)(s),"aria-readonly":(0,v.Qm)(t)})}},6069:function(e,i,n){n.d(i,{I:function(){return h}});var l=n(1413),r=n(5987),a=n(3856),t=n(7872),s=n(9219),d=n(2996),o=n(1357),u=n(6992),c=n(184),v=["htmlSize"],h=(0,t.G)((function(e,i){var n=e.htmlSize,t=(0,r.Z)(e,v),h=(0,s.jC)("Input",t),m=(0,d.Lr)(t),b=(0,a.Y)(m),f=(0,u.cx)("chakra-input",e.className);return(0,c.jsx)(o.m.input,(0,l.Z)((0,l.Z)({size:n},b),{},{__css:h.field,ref:i,className:f}))}));h.displayName="Input",h.id="Input"},4087:function(e,i,n){n.d(i,{xu:function(){return u}});var l=n(1413),r=n(5987),a=n(1357),t=n(7872),s=n(184),d=["size","centerContent"],o=["size"],u=(0,a.m)("div");u.displayName="Box";var c=(0,t.G)((function(e,i){var n=e.size,a=e.centerContent,t=void 0===a||a,o=(0,r.Z)(e,d),c=t?{display:"flex",alignItems:"center",justifyContent:"center"}:{};return(0,s.jsx)(u,(0,l.Z)({ref:i,boxSize:n,__css:(0,l.Z)((0,l.Z)({},c),{},{flexShrink:0,flexGrow:0})},o))}));c.displayName="Square",(0,t.G)((function(e,i){var n=e.size,a=(0,r.Z)(e,o);return(0,s.jsx)(c,(0,l.Z)({size:n,ref:i,borderRadius:"9999px"},a))})).displayName="Circle"}}]);
//# sourceMappingURL=757.e0ae95c4.chunk.js.map