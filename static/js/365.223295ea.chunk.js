"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[365],{2671:function(e,n,t){t.d(n,{qI:function(){return u},Jr:function(){return s},an:function(){return r},Hc:function(){return a},qO:function(){return i}});var r=function(e,n){n(!e)},a=function(e){e.preventDefault()},s=function(e,n){var t=e.toLowerCase();return n.filter((function(e){return e.name.toLowerCase().includes(t)}))},i=function(e,n){var t=n.toLowerCase();return e.find((function(e){return e.name.toLowerCase()===t}))},o=t(5562),u=function(e){switch(e){case 400:o.Notify.failure("Wrong email or password");break;case 500:o.Notify.failure("Something wrong, please try later");break;case"FETCH_ERROR":o.Notify.failure("Chek your connection to the internet")}}},5365:function(e,n,t){t.r(n),t.d(n,{default:function(){return Q}});var r=t(885),a=t(2791),s=t(4554),i=t(890),o=t(6151),u=t(9818),l=t(7123),c=t(3400),d=t(195),m=t(6739),h=t(3329),x=function(e){var n=e.open,t=e.setOpen,r=e.children;return(0,h.jsxs)(u.Z,{open:n,onClose:function(){return t(!1)},children:[(0,h.jsx)(l.Z,{sx:{p:0},children:(0,h.jsx)(c.Z,{"aria-label":"close",variant:"contained",onClick:function(){return t(!1)},sx:{position:"absolute",right:0,top:0,p:0},children:(0,h.jsx)(m.Z,{})})}),(0,h.jsx)(d.Z,{sx:{maxWidth:"375px"},children:r})]})},p=t(1413),f=t(5861),v=t(7757),g=t.n(v),b=t(5264),Z=t(5290),j=t(6362),y=t(667),w=t(9709),C=t(8820),k=t(3734),N=t(2671),I=k.mh.wY,L=k.mh.Lt,q=function(e){var n,t,a=e.id,s=I(),i=s.data,o=s.error,u=L(),l=(0,r.Z)(u,2),c=l[0],d=l[1].isLoading,m=i.filter((function(e){return e.id===a})),x=i.filter((function(e){return e.id!==a})),v=(0,Z.cI)({mode:"onChange",defaultValues:{name:m[0].name,number:m[0].number}}),k=v.register,q=v.handleSubmit,z=v.formState.errors,A=v.getValues,S=function(){var e=(0,f.Z)(g().mark((function e(n){var t,r,s;return g().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.name,r=n.number,e.next=3,c((0,p.Z)({id:a},{name:t,number:r}));case 3:if(!(s=e.sent).error){e.next=7;break}return(0,N.qI)(s.error.status),e.abrupt("return");case 7:b.Notify.success("Contact has updated");case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return o&&b.Notify.failure("Something wrong, check your internet connection and try later"),(0,h.jsx)("form",{onSubmit:q(S),children:(0,h.jsxs)(j.Z,{fullWidth:!0,sx:{gap:1},children:[(0,h.jsx)(y.Z,(0,p.Z)({label:"Name",type:"text",variant:"outlined",size:"small",placeholder:"Input name of the contact",error:!(null===z||void 0===z||!z.name),helperText:null!==z&&void 0!==z&&z.name?null===z||void 0===z||null===(n=z.name)||void 0===n?void 0:n.message:null},k("name",{required:"Name is required",maxLength:{value:20,message:"Only 20 symbols"},pattern:{value:/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,message:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"},validate:{isName:function(){var e=A("name"),n=!(0,N.qO)(x,e);return n||"This name allready exist in contacts list"}}}))),(0,h.jsx)(y.Z,(0,p.Z)({label:"Phone",type:"text",variant:"outlined",size:"small",placeholder:"Input phone number",error:!(null===z||void 0===z||!z.number),helperText:null!==z&&void 0!==z&&z.number?null===z||void 0===z||null===(t=z.number)||void 0===t?void 0:t.message:null},k("number",{required:"Number is required",minLength:{value:5,message:"must be at least 5 characters"},maxLength:{value:13,message:"Only 13 symbols"},pattern:{value:/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,message:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"}}))),(0,h.jsx)(w.Z,{type:"submit",fullWidth:!0,loadingPosition:"start",variant:"contained",loading:d,startIcon:(0,h.jsx)(C.Z,{}),children:"Edit contact"})]})})},z=t(3992),A=t(6052),S=function(){var e,n,t=(0,A.wY)(),a=t.data,s=t.error,i=(0,A.Tn)(),o=(0,r.Z)(i,2),u=o[0],l=o[1].isLoading,c=(0,Z.cI)({mode:"onChange",defaultValues:{name:"",number:""}}),d=c.register,m=c.handleSubmit,x=c.formState.errors,v=c.reset,C=c.getValues,k=function(){var e=(0,f.Z)(g().mark((function e(n){var t,r,a;return g().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.name,r=n.number,e.next=3,u({name:t,number:r});case 3:if(!(a=e.sent).error){e.next=7;break}return(0,N.qI)(a.error.status),e.abrupt("return");case 7:b.Notify.success("New contact has added"),v();case 9:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return s&&b.Notify.failure("Something wrong, check your internet connection and try later"),(0,h.jsx)("form",{onSubmit:m(k),children:(0,h.jsxs)(j.Z,{fullWidth:!0,sx:{gap:1},children:[(0,h.jsx)(y.Z,(0,p.Z)({label:"Name",type:"text",variant:"outlined",size:"small",placeholder:"Input name of the contact",error:!(null===x||void 0===x||!x.name),helperText:null!==x&&void 0!==x&&x.name?null===x||void 0===x||null===(e=x.name)||void 0===e?void 0:e.message:null},d("name",{required:"Name is required",maxLength:{value:20,message:"Only 20 symbols"},pattern:{value:/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,message:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"},validate:{isName:function(){var e=C("name"),n=!(0,N.qO)(a,e);return n||"This name allready exist in contacts list"}}}))),(0,h.jsx)(y.Z,(0,p.Z)({label:"Phone",type:"text",variant:"outlined",size:"small",placeholder:"Input phone number",error:!(null===x||void 0===x||!x.number),helperText:null!==x&&void 0!==x&&x.number?null===x||void 0===x||null===(n=x.number)||void 0===n?void 0:n.message:null},d("number",{required:"Number is required",minLength:{value:5,message:"must be at least 5 characters"},maxLength:{value:13,message:"Only 13 symbols"},pattern:{value:/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,message:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"}}))),(0,h.jsx)(w.Z,{type:"submit",fullWidth:!0,loadingPosition:"start",variant:"contained",loading:l,startIcon:(0,h.jsx)(z.Z,{}),children:"Add contact"})]})})},T=t(5562),O=t(8535),P=t(1889),_=t(703),W=t(6520),F=t(5803),E=t(4939),J=t(7483),M=function(e){var n=e.id,t=e.name,u=e.number,l=(0,A.Nt)(),c=(0,r.Z)(l,2),d=c[0],m=c[1].isLoading,p=(0,a.useState)(3),v=(0,r.Z)(p,2),b=v[0],Z=v[1],j=(0,a.useState)(!1),y=(0,r.Z)(j,2),k=y[0],I=y[1],L=function(){var e=(0,f.Z)(g().mark((function e(n){var t;return g().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(n);case 2:if(!(t=e.sent).error){e.next=6;break}return(0,N.qI)(t.error.status),e.abrupt("return");case 6:T.Notify.success("Contacts has deleted");case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(P.ZP,{item:!0,xs:12,sm:4,md:3,children:(0,h.jsx)(_.Z,{elevation:b,onMouseEnter:function(){return Z(8)},onMouseLeave:function(){return Z(3)},children:(0,h.jsxs)(s.Z,{sx:{p:1},children:[(0,h.jsxs)(i.Z,{sx:{display:"flex",alignItems:"center",gap:1},children:[(0,h.jsx)(F.Z,{})," ",t]}),(0,h.jsxs)(i.Z,{sx:{display:"flex",alignItems:"center",gap:1},children:[(0,h.jsx)(E.Z,{})," ",u]}),(0,h.jsxs)(i.Z,{align:"center",children:[(0,h.jsx)(W.Z,{title:"Edit contact",children:(0,h.jsx)(o.Z,{"aria-label":"edit contact",onClick:function(){return I(!0)},variant:"contained",sx:{mr:"10px"},children:(0,h.jsx)(C.Z,{})})}),(0,h.jsx)(W.Z,{title:"Delete contact",children:(0,h.jsx)(w.Z,{"aria-label":"delete contact",onClick:function(){return L(n)},loading:m,variant:"contained",children:(0,h.jsx)(J.Z,{})})})]})]})})}),(0,h.jsx)(x,{open:k,setOpen:I,children:(0,h.jsx)(q,{id:n})})]})},V=t(7047),B=function(){for(var e=[],n=0;n<8;n++)e.push((0,h.jsx)(P.ZP,{item:!0,xs:12,sm:4,md:3,children:(0,h.jsx)(V.Z,{variant:"rectangular",height:50})},n));return(0,h.jsx)(h.Fragment,{children:e})},R=k.mh.wY,Y=function(){var e=R(),n=e.data,t=e.isLoading,r=e.error,a=(0,O.v9)(k.zK);return r&&T.Notify.failure("Something wrong, check your internet connection and try later"),(0,h.jsx)(P.ZP,{container:!0,spacing:2,justifyContent:"center",children:t?(0,h.jsx)(B,{}):n.length>0?(0,N.Jr)(a,n).map((function(e){var n=e.id,t=e.name,r=e.number;return(0,h.jsx)(M,{id:n,name:t,number:r},n)})):(0,h.jsx)(P.ZP,{item:!0,children:(0,h.jsx)(i.Z,{variant:"body1",sx:{mx:"auto"},children:"There are no contacts yet here, you could add some"})})})},D=t(1405),H=t(1292),$=t(3466),K=t(2167),G=function(){var e=(0,D.I0)();return(0,h.jsx)(s.Z,{sx:{mb:"10px",textAlign:"center"},children:(0,h.jsx)(y.Z,{label:"Find your contacts by name",type:"text",variant:"outlined",size:"small",placeholder:"Begin to type name",onChange:function(n){return e((0,H.T)(n.currentTarget.value))},InputProps:{startAdornment:(0,h.jsx)($.Z,{position:"start",children:(0,h.jsx)(K.Z,{color:"primary"})})}})})},Q=function(){var e=(0,a.useState)(!1),n=(0,r.Z)(e,2),t=n[0],u=n[1];return(0,h.jsxs)(s.Z,{children:[(0,h.jsx)(i.Z,{variant:"h1",align:"center",sx:{mb:"10px",fontSize:"32px"},children:"CONTACTS"}),(0,h.jsxs)(s.Z,{sx:{maxWidth:"375px",mx:"auto"},children:[(0,h.jsx)(o.Z,{variant:"contained",onClick:function(){return u(!0)},fullWidth:!0,sx:{mb:"10px"},children:"Add contact"}),(0,h.jsx)(x,{open:t,setOpen:u,children:(0,h.jsx)(S,{})})]}),(0,h.jsx)(G,{}),(0,h.jsx)(Y,{})]})}}}]);
//# sourceMappingURL=365.223295ea.chunk.js.map