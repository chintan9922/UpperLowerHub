(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(2),c=a.n(r);a(12),a(13);function o(e){return n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},n.a.createElement("div",{className:"container-fluid"},n.a.createElement("a",{className:"navbar-brand",href:"#"},e.title),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},n.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link active","aria-current":"page",href:"#"},"Home"))),n.a.createElement("form",{className:"d-flex"},n.a.createElement("div",{className:"form-check form-switch",style:{color:"light"===e.mode?"black":"white"}},n.a.createElement("input",{className:"form-check-input",type:"checkbox",role:"switch",id:"flexSwitchCheckDefault",onClick:e.changeMode}),n.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"light"===e.mode?"Enable Dark Mode":"Enable Light Mode"))))))}function s(e){const[t,a]=Object(l.useState)("");return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"container"},n.a.createElement("h1",null,e.title),n.a.createElement("div",{className:"mb-3",style:{color:"light"===e.mode?"white":"black"}},n.a.createElement("textarea",{className:"form-control",value:t,onChange:e=>{a(e.target.value)},id:"textBox",rows:"8"})),n.a.createElement("button",{className:"btn btn-primary mx-2",onClick:()=>{let l=t.toUpperCase();a(l),e.alert("Converted to Upper Case","success")}},"Convert to UpperCase"),n.a.createElement("button",{className:"btn btn-primary mx-2",onClick:()=>{let l=t.toLowerCase();a(l),e.alert("Converted to Lower Case","success")}},"Convert to LowerCase"),n.a.createElement("button",{className:"btn btn-primary mx-2",onClick:()=>{a(""),e.alert("Successfully clear the text","success")}},"Clear Text")),n.a.createElement("div",{className:"container my-3"},n.a.createElement("h1",null,"Your Text Summary"),n.a.createElement("p",null,t.length>1?t.match(/\S+/g).length:0," words and ",t.length," characters"),n.a.createElement("h2",null,"Preview"),n.a.createElement("p",null,t.length>0?t:"Enter the text above to preview it.")))}o.defaultProps={title:"UpperLowerHub",about:"About"};var m=function(e){return e.alert&&n.a.createElement("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},n.a.createElement("strong",null,(e=>{var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)})(e.alert.type))," : ",e.alert.msg)};var u=function(){const[e,t]=Object(l.useState)("light"),[a,r]=Object(l.useState)(null),c=(e,t)=>{r({msg:e,type:t}),setTimeout(()=>{r(null)},2e3)};return n.a.createElement(n.a.Fragment,null,n.a.createElement(o,{mode:e,changeMode:()=>{"light"===e?(t("dark"),document.body.style.backgroundColor="black",c("Dark Mode Enabled","success")):(t("light"),document.body.style.backgroundColor="white",c("Light Mode Enabled","success"))},changeRed:()=>{"light"===e?(t("dark"),document.body.style.backgroundColor="#913636",c("Dark Mode Enabled","success")):(t("light"),document.body.style.backgroundColor="#fa7373",c("Light Mode Enabled","success"))},changeGreen:()=>{"light"===e?(t("dark"),document.body.style.backgroundColor="#237a4f",c("Dark Green Mode Enabled","success")):(t("light"),document.body.style.backgroundColor="#81fcbf",c("Light Green Color Enabled","success"))},changeBlue:()=>{"light"===e?(t("dark"),document.body.style.backgroundColor="#7afbff",c("Light Blue Color Enabled","success")):(t("light"),document.body.style.backgroundColor="#45acb0",c("Dark Blue Color Enabled","success"))}}),n.a.createElement(m,{alert:a}),n.a.createElement("div",{className:"container my-3",style:{color:"light"===e?"black":"white"}},n.a.createElement(s,{title:"Enter Your Text Here",mode:e,alert:c})))};var d=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,15)).then(t=>{let{getCLS:a,getFID:l,getFCP:n,getLCP:r,getTTFB:c}=t;a(e),l(e),n(e),r(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(u,null))),d()},3:function(e,t,a){e.exports=a(14)}},[[3,1,2]]]);
//# sourceMappingURL=main.f8b81829.chunk.js.map