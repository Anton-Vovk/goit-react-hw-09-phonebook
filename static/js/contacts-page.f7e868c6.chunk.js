(this["webpackJsonpgoit-react-hw-09-phonebook"]=this["webpackJsonpgoit-react-hw-09-phonebook"]||[]).push([[0],{106:function(t,e,n){t.exports={form:"ContactForm_form__1ppRQ",label:"ContactForm_label__3Hf0Q",input:"ContactForm_input__3wfRb",button:"ContactForm_button__1DASa"}},107:function(t,e,n){t.exports={listSection:"ContactList_listSection__pz1W4",item:"ContactList_item__wafQh",button:"ContactList_button__38Twb"}},108:function(t,e,n){t.exports={wrapper:"Filter_wrapper__34T7M",input:"Filter_input__3TTLo",title:"Filter_title__2C-iW"}},109:function(t,e,n){t.exports={container:"PhonebookPage_container__3lil9",phonebook:"PhonebookPage_phonebook__NuCEq",contacts:"PhonebookPage_contacts__2qqwf"}},114:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return T}));var a=n(0),c=n(38),r=n.n(c),o=n(103),s=n(112),i=(n(105),n(106)),u=n.n(i),l=n(9),b=n(17),j=n.n(b),p=n(24),f=n(19),m=n.n(f),h=n(11),O=n(30),d=function(t){return t.phonebook.loading},_=function(t){return t.phonebook.items},x=function(t){return t.phonebook.filter},v=Object(O.a)([_,x],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))})),g=n(1);var N=function(){var t=Object(l.d)(_),e=Object(l.c)(),n=Object(a.useState)(""),c=Object(o.a)(n,2),r=c[0],i=c[1],b=Object(a.useState)(""),f=Object(o.a)(b,2),O=f[0],d=f[1];return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("form",{className:u.a.form,onSubmit:function(n){n.preventDefault();var a=t.some((function(t){return t.name===r})),c=t.some((function(t){return t.number===O}));a?alert("".concat(r," is already in contacts!!!")):c?alert("".concat(O," is already in contacts!!!")):(e(function(t,e){return function(){var n=Object(p.a)(j.a.mark((function n(a){var c,r,o;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c={name:t,number:e},a(Object(h.b)()),n.prev=2,n.next=5,m.a.post("/contacts",c);case 5:r=n.sent,o=r.data,a(Object(h.c)(o)),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(2),a(Object(h.a)(n.t0.message));case 13:case"end":return n.stop()}}),n,null,[[2,10]])})));return function(t){return n.apply(this,arguments)}}()}(r,O)),i((function(t){return""})),d((function(t){return""})))},children:[Object(g.jsxs)("label",{className:u.a.label,children:["Name",Object(g.jsx)("input",{className:u.a.input,name:"name",type:"text",value:r,onChange:function(t){var e=t.target;i((function(t){return e.value}))},placeholder:"Add name",required:!0})]}),Object(g.jsxs)("label",{className:u.a.label,children:["Number",Object(g.jsx)("input",{className:u.a.input,name:"number",type:"tel",value:O,onChange:function(t){var e=t.target;d((function(t){return e.value}))},pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",placeholder:"111-11-11",required:!0})]}),Object(g.jsx)("button",{className:u.a.button,type:"submit",children:"Add contact"}),Object(g.jsx)(s.a,{autoClose:3e3})]})})},k=n(107),w=n.n(k),C=function(){var t=Object(l.d)(v),e=Object(l.c)();return Object(g.jsx)("div",{className:w.a.listSection,children:Object(g.jsx)("ul",{children:t.map((function(t){var n=t.id,a=t.name,c=t.number;return Object(g.jsxs)("li",{className:w.a.item,children:[a," - ",c,Object(g.jsx)("button",{className:w.a.button,type:"button",onClick:function(){return e(function(t){return function(){var e=Object(p.a)(j.a.mark((function e(n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n(Object(h.e)());try{m.a.delete("/contacts/".concat(t)),n(Object(h.f)(t))}catch(a){n(Object(h.a)(a.message))}case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}(n))},children:"Delete"})]},n)}))})})},y=n(108),F=n.n(y),S=function(){var t=Object(l.d)(x),e=Object(l.c)();return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("h4",{className:F.a.title,children:"Find contacts by name "}),Object(g.jsx)("label",{className:F.a.label,children:Object(g.jsx)("input",{className:F.a.input,name:"filter",type:"text",value:t,onChange:function(t){return e(Object(h.j)(t.target.value))},placeholder:"Search name"})})]})},P=n(109),L=n.n(P);var T=function(){var t=Object(l.d)(d),e=Object(l.c)();return Object(a.useEffect)((function(){e(function(){var t=Object(p.a)(j.a.mark((function t(e){var n,a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(Object(h.h)()),t.prev=1,t.next=4,m.a.get("/contacts");case 4:n=t.sent,a=n.data,e(Object(h.i)(a)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e(Object(h.g)(t.t0.message));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}())}),[e]),Object(g.jsxs)("div",{className:L.a.container,children:[Object(g.jsx)("h1",{className:L.a.phonebook,children:"PHONEBOOK"}),Object(g.jsx)(N,{}),Object(g.jsx)("h2",{className:L.a.contacts,children:"CONTACTS"}),Object(g.jsx)(S,{}),Object(g.jsx)(C,{}),t&&Object(g.jsx)(r.a,{type:"Watch",color:"#1e99e0",height:100,width:100})]})}}}]);
//# sourceMappingURL=contacts-page.f7e868c6.chunk.js.map