(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{37:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var c=n(26),a=n(9),r=(n(35),n(36),n(37),n(3)),s=n(0),j=n(13),i=n.n(j),o=n(2),b=function(e){var t=e.to,n=e.text;return Object(o.jsx)(a.c,{to:t,className:function(e){var t=e.isActive;return i()("navbar-item",{"has-background-grey-lighter":t})},children:n})},l=function(){return Object(o.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"navbar-brand",children:[Object(o.jsx)(b,{to:"/",text:"Home"}),Object(o.jsx)(b,{to:"/people",text:"People"})]})})})},d=function(e){var t=e.title;return Object(o.jsx)("h1",{className:"title",children:t})},h=function(){return Object(o.jsx)(d,{title:"Home Page"})},u=n(4),O=function(e){var t=e.person,n=t.slug,c=t.sex,r=t.name;return Object(o.jsx)(a.b,{to:"/people/".concat(n),className:i()({"has-text-danger":"f"===c}),children:r})},x=function(e){var t=e.person,n=t.slug,c=t.sex,a=t.born,s=t.died,j=t.motherName,b=t.fatherName,l=t.mother,d=t.father,h=Object(r.p)().personSlug;return Object(o.jsxs)("tr",{"data-cy":"person",className:i()({"has-background-warning":n===h}),children:[Object(o.jsx)("td",{children:Object(o.jsx)(O,{person:t})}),Object(o.jsx)("td",{children:c}),Object(o.jsx)("td",{children:a}),Object(o.jsx)("td",{children:s}),Object(o.jsx)("td",{children:l?Object(o.jsx)(O,{person:l}):j||"-"}),Object(o.jsx)("td",{children:d?Object(o.jsx)(O,{person:d}):b||"-"})]})},p=["Name","Sex","Born","Died","Mother","Father"],m=function(e){var t=e.people;return Object(o.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(o.jsx)("thead",{children:Object(o.jsx)("tr",{children:p.map((function(e){return Object(o.jsx)("th",{children:e},e)}))})}),Object(o.jsx)("tbody",{children:t.map((function(e){return Object(o.jsx)(x,{person:e},e.slug)}))})]})},f=(n(39),function(){return Object(o.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(o.jsx)("div",{className:"Loader__content"})})});function v(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}var g=n(24),N=function(){var e=Object(s.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],a=Object(s.useState)(!1),r=Object(u.a)(a,2),j=r[0],i=r[1],b=Object(s.useState)(!0),l=Object(u.a)(b,2),h=l[0],O=l[1],x=Object(s.useState)(!1),p=Object(u.a)(x,2),N=p[0],y=p[1];return Object(s.useEffect)((function(){v().then((function(e){var t=function(e){return e.map((function(t){var n=e.find((function(e){return e.name===t.motherName})),c=e.find((function(e){return e.name===t.fatherName}));return Object(g.a)(Object(g.a)({},t),{},{mother:n,father:c})}))}(e);c(t),y(!0)})).catch((function(){i(!0)})).finally((function(){return O(!1)}))}),[]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(d,{title:"People Page"}),Object(o.jsx)("div",{className:"block",children:Object(o.jsxs)("div",{className:"box table-container",children:[j&&Object(o.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),N&&0===n.length&&Object(o.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),h&&Object(o.jsx)(f,{}),0!==n.length&&Object(o.jsx)(m,{people:n})]})})]})},y=function(){return Object(o.jsx)(d,{title:"Page not found"})},w=function(){return Object(o.jsxs)("div",{"data-cy":"app",children:[Object(o.jsx)(l,{}),Object(o.jsx)("main",{className:"section",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)(r.d,{children:[Object(o.jsx)(r.b,{path:"/",element:Object(o.jsx)(h,{})}),Object(o.jsx)(r.b,{path:"home",element:Object(o.jsx)(r.a,{to:"/",replace:!0})}),Object(o.jsxs)(r.b,{path:"people",children:[Object(o.jsx)(r.b,{index:!0,element:Object(o.jsx)(N,{})}),Object(o.jsx)(r.b,{path:":personSlug",element:Object(o.jsx)(N,{})})]}),Object(o.jsx)(r.b,{path:"*",element:Object(o.jsx)(y,{})})]})})})]})};Object(c.createRoot)(document.getElementById("root")).render(Object(o.jsx)(a.a,{children:Object(o.jsx)(w,{})}))}},[[40,1,2]]]);
//# sourceMappingURL=main.63030aab.chunk.js.map