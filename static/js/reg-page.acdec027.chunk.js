(this["webpackJsonpgoit-react-hw-09-phonebook"]=this["webpackJsonpgoit-react-hw-09-phonebook"]||[]).push([[4],{110:function(t,e,n){t.exports={form:"RegisterForm_form__21ht9",inputTitle:"RegisterForm_inputTitle__191xm",registrationLabel:"RegisterForm_registrationLabel__1sLE4",registrationInput:"RegisterForm_registrationInput__3S261",registrationButton:"RegisterForm_registrationButton__NBjoT"}},113:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return O}));var r=n(0),o=n(3);function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(t){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function u(t){return(u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(t,e){return!e||"object"!==u(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function p(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=c(t);if(e){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return l(this,n)}}var f=n(9),b=n(28),m=n(110),h=n.n(m),y=n(1),j=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}(u,t);var e,n,r,c=p(u);function u(){var t;a(this,u);for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return(t=c.call.apply(c,[this].concat(n))).state={name:"",email:"",password:""},t.inputHandler=function(e){var n=e.target,r=n.name,a=n.value;t.setState(Object(o.a)({},r,a))},t.submitHandler=function(e){e.preventDefault(),t.props.onRegister(t.state),t.setState({name:"",email:"",password:""})},t}return e=u,(n=[{key:"render",value:function(){var t=this.state,e=t.email,n=t.password,r=t.name;return Object(y.jsx)("div",{children:Object(y.jsxs)("form",{onSubmit:this.submitHandler,className:h.a.form,children:[Object(y.jsxs)("label",{className:h.a.registrationLabel,children:[Object(y.jsx)("span",{className:h.a.inputTitle,children:"Name"}),Object(y.jsx)("input",{className:h.a.registrationInput,type:"text",name:"name",value:r,onChange:this.inputHandler})]}),Object(y.jsxs)("label",{className:h.a.registrationLabel,children:[Object(y.jsx)("span",{className:h.a.inputTitle,children:"Email"}),Object(y.jsx)("input",{className:h.a.registrationInput,type:"email",name:"email",value:e,onChange:this.inputHandler})]}),Object(y.jsxs)("label",{className:h.a.registrationLabel,children:[Object(y.jsx)("span",{className:h.a.inputTitle,children:"Password"}),Object(y.jsx)("input",{className:h.a.registrationInput,type:"password",name:"password",value:n,onChange:this.inputHandler})]}),Object(y.jsx)("button",{className:h.a.registrationButton,type:"submit",children:"Register"})]})})}}])&&i(e.prototype,n),r&&i(e,r),u}(r.Component),g={onRegister:b.d},d=Object(f.b)(null,g)(j),O=function(){return Object(y.jsx)(y.Fragment,{children:Object(y.jsx)(d,{})})}}}]);
//# sourceMappingURL=reg-page.acdec027.chunk.js.map