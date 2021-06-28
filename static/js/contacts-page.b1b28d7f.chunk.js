(this["webpackJsonpgoit-react-hw-09-phonebook"]=this["webpackJsonpgoit-react-hw-09-phonebook"]||[]).push([[0],{106:function(e,t,n){e.exports={form:"ContactForm_form__1ppRQ",label:"ContactForm_label__3Hf0Q",input:"ContactForm_input__3wfRb",button:"ContactForm_button__1DASa"}},107:function(e,t,n){e.exports={listSection:"ContactList_listSection__pz1W4",item:"ContactList_item__wafQh",button:"ContactList_button__38Twb"}},108:function(e,t,n){e.exports={wrapper:"Filter_wrapper__34T7M",input:"Filter_input__3TTLo",title:"Filter_title__2C-iW"}},109:function(e,t,n){e.exports={container:"PhonebookPage_container__3lil9",phonebook:"PhonebookPage_phonebook__NuCEq",contacts:"PhonebookPage_contacts__2qqwf"}},113:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return A}));var a=n(0),c=n(38),r=n.n(c),o=n(3),s=n(19),u=n(103),i=n(112),b=(n(105),n(106)),l=n.n(b),j=n(9),m=n(17),p=n.n(m),f=n(24),h=n(20),O=n.n(h),d=n(11),_=n(30),x=function(e){return e.phonebook.loading},v=function(e){return e.phonebook.items},g=function(e){return e.phonebook.filter},N=Object(_.a)([v,g],(function(e,t){var n=t.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(n)}))})),k=n(1);var w=function(){var e=Object(j.d)(v),t=Object(j.c)(),n=Object(a.useState)({name:"",number:""}),c=Object(u.a)(n,2),r=c[0],b=c[1],m=function(e){var t=e.currentTarget.dataset.name,n=e.currentTarget.value;b((function(e){return Object(s.a)(Object(s.a)({},e),{},Object(o.a)({},t,n))}))},h=function(){b({name:"",number:""})};return Object(k.jsx)(k.Fragment,{children:Object(k.jsxs)("form",{className:l.a.form,onSubmit:function(n){n.preventDefault();var a,c,o=e.some((function(e){return e.name===r.name})),s=e.some((function(e){return e.number===r.number}));o?alert("".concat(r.name," is already in contacts!!!")):s?alert("".concat(r.number," is already in contacts!!!")):(t((a=r.name,c=r.number,function(){var e=Object(f.a)(p.a.mark((function e(t){var n,r,o;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={name:a,number:c},t(Object(d.b)()),e.prev=2,e.next=5,O.a.post("/contacts",n);case 5:r=e.sent,o=r.data,t(Object(d.c)(o)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),t(Object(d.a)(e.t0.message));case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}())),h())},type:"submit",children:[Object(k.jsxs)("label",{className:l.a.label,children:["Name",Object(k.jsx)("input",{className:l.a.input,name:"name",type:"text",value:r.name,onChange:m,placeholder:"Add name","data-name":"name",required:!0})]}),Object(k.jsxs)("label",{className:l.a.label,children:["Number",Object(k.jsx)("input",{className:l.a.input,name:"number",type:"tel",value:r.number,onChange:m,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",placeholder:"111-11-11","data-name":"number",required:!0})]}),Object(k.jsx)("button",{className:l.a.button,type:"submit",children:"Add contact"}),Object(k.jsx)(i.a,{autoClose:3e3})]})})},C=n(107),y=n.n(C),F=function(){var e=Object(j.d)(N),t=Object(j.c)();return Object(k.jsx)("div",{className:y.a.listSection,children:Object(k.jsx)("ul",{children:e.map((function(e){var n=e.id,a=e.name,c=e.number;return Object(k.jsxs)("li",{className:y.a.item,children:[a," - ",c,Object(k.jsx)("button",{className:y.a.button,type:"button",onClick:function(){return t(function(e){return function(){var t=Object(f.a)(p.a.mark((function t(n){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n(Object(d.e)());try{O.a.delete("/contacts/".concat(e)),n(Object(d.f)(e))}catch(a){n(Object(d.a)(a.message))}case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(n))},children:"Delete"})]},n)}))})})},S=n(108),T=n.n(S),P=function(){var e=Object(j.d)(g),t=Object(j.c)();return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("h4",{className:T.a.title,children:"Find contacts by name "}),Object(k.jsx)("label",{className:T.a.label,children:Object(k.jsx)("input",{className:T.a.input,name:"filter",type:"text",value:e,onChange:function(e){return t(Object(d.j)(e.target.value))},placeholder:"Search name"})})]})},L=n(109),q=n.n(L);var A=function(){var e=Object(j.d)(x),t=Object(j.c)();return Object(a.useEffect)((function(){t(function(){var e=Object(f.a)(p.a.mark((function e(t){var n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(Object(d.h)()),e.prev=1,e.next=4,O.a.get("/contacts");case 4:n=e.sent,a=n.data,t(Object(d.i)(a)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t(Object(d.g)(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}())}),[t]),Object(k.jsxs)("div",{className:q.a.container,children:[Object(k.jsx)("h1",{className:q.a.phonebook,children:"PHONEBOOK"}),Object(k.jsx)(w,{}),Object(k.jsx)("h2",{className:q.a.contacts,children:"CONTACTS"}),Object(k.jsx)(P,{}),Object(k.jsx)(F,{}),e&&Object(k.jsx)(r.a,{type:"Watch",color:"#1e99e0",height:100,width:100})]})}}}]);
//# sourceMappingURL=contacts-page.b1b28d7f.chunk.js.map