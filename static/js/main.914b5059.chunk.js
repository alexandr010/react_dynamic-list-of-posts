(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(6),r=n.n(c),s=n(1),a=n.n(s),u=n(3),o=n(4),i=n(2),l=(n(12),n(13),n(14),"https://mate.academy/students-api"),j=function(){var e=Object(u.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(l,"/posts"));case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=Object(u.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(l,"/posts?userId=").concat(t));case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(u.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(l,"/users"));case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(u.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(l,"/posts/").concat(t));case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(u.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(l,"/comments?postId=").concat(t));case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(e){return fetch("".concat(l,"/comments/").concat(e),{method:"DELETE"})},h=function(){var e=Object(u.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("".concat(l,"/comments"),{method:"POST",headers:{"Content-Type":"application/json; charset=UTF-8"},body:JSON.stringify(t)}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=n(0),x=function(e){var t=e.userId,n=e.setSelectedPostId,c=e.selectedPostId,r=Object(i.useState)([]),s=Object(o.a)(r,2),l=s[0],p=s[1];return Object(i.useEffect)((function(){Object(u.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j();case 2:t=e.sent,p(t);case 4:case"end":return e.stop()}}),e)})))()}),[]),Object(i.useEffect)((function(){Object(u.a)(a.a.mark((function e(){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=6;break}return e.next=3,d(t);case 3:e.t0=e.sent,e.next=9;break;case 6:return e.next=8,j();case 8:e.t0=e.sent;case 9:n=e.t0,p(n);case 11:case"end":return e.stop()}}),e)})))()}),[t]),Object(O.jsxs)("div",{className:"PostsList",children:[Object(O.jsx)("h2",{children:"Posts:"}),Object(O.jsx)("ul",{className:"PostsList__list",children:l.map((function(e){return Object(O.jsxs)("li",{className:"PostsList__item",children:[Object(O.jsxs)("div",{children:[Object(O.jsxs)("b",{children:["[User #",e.userId,"]:"," "]}),e.title]}),c===e.id?Object(O.jsx)("button",{type:"button",className:"PostsList__button button",onClick:function(){return n(0)},children:"Close"}):Object(O.jsx)("button",{type:"button",className:"PostsList__button button",onClick:function(){return n(e.id)},children:"Open"})]},e.id)}))})]})},v=(n(16),function(e){var t=e.addComment,n=e.postId,c=Object(i.useState)(""),r=Object(o.a)(c,2),s=r[0],a=r[1],u=Object(i.useState)(""),l=Object(o.a)(u,2),j=l[0],d=l[1],p=Object(i.useState)(""),b=Object(o.a)(p,2),f=b[0],m=b[1];return Object(O.jsxs)("form",{className:"NewCommentForm",onSubmit:function(e){e.preventDefault(),t({postId:n,name:s,email:j,body:f}),a(""),d(""),m("")},children:[Object(O.jsx)("div",{className:"form-field",children:Object(O.jsx)("input",{required:!0,type:"text",name:"name",placeholder:"Your name",className:"NewCommentForm__input",value:s,onChange:function(e){return a(e.target.value)}})}),Object(O.jsx)("div",{className:"form-field",children:Object(O.jsx)("input",{required:!0,type:"text",name:"email",placeholder:"Your email",className:"NewCommentForm__input",value:j,onChange:function(e){return d(e.target.value)}})}),Object(O.jsx)("div",{className:"form-field",children:Object(O.jsx)("textarea",{required:!0,name:"body",placeholder:"Type comment here",className:"NewCommentForm__input",value:f,onChange:function(e){return m(e.target.value)}})}),Object(O.jsx)("button",{type:"submit",className:"NewCommentForm__submit-button button",children:"Add a comment"})]})}),_=(n(17),function(e){var t=e.selectedPostId,n=Object(i.useState)(null),c=Object(o.a)(n,2),r=c[0],s=c[1],l=Object(i.useState)([]),j=Object(o.a)(l,2),d=j[0],p=j[1],x=Object(i.useState)(!0),_=Object(o.a)(x,2),w=_[0],N=_[1];Object(i.useEffect)((function(){Object(u.a)(a.a.mark((function e(){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b(t);case 2:n=e.sent,s(n);case 4:case"end":return e.stop()}}),e)})))()}),[t]),Object(i.useEffect)((function(){Object(u.a)(a.a.mark((function e(){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(t);case 2:n=e.sent,p(n);case 4:case"end":return e.stop()}}),e)})))()}),[t]);var y=function(){var e=Object(u.a)(a.a.mark((function e(n){var c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(n);case 2:return e.next=4,f(t);case 4:c=e.sent,p(c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(u.a)(a.a.mark((function e(n){var c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m(n);case 2:return e.next=4,f(t);case 4:c=e.sent,p(c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsxs)("div",{className:"PostDetails",children:[Object(O.jsx)("h2",{children:"Post details:"}),Object(O.jsx)("section",{className:"PostDetails__post",children:Object(O.jsx)("p",{children:null===r||void 0===r?void 0:r.body})}),Object(O.jsxs)("section",{className:"PostDetails__comments",children:[Object(O.jsxs)("button",{type:"button",className:"button",onClick:function(){return N((function(e){return!e}))},children:[w?"Hide":"Show"," ",d.length," ","comments"]}),w&&Object(O.jsx)("ul",{className:"PostDetails__list",children:d.map((function(e){return Object(O.jsxs)("li",{className:"PostDetails__list-item",children:[Object(O.jsx)("button",{type:"button",className:"PostDetails__remove-button button",onClick:function(){return k(e.id)},children:"X"}),Object(O.jsx)("p",{children:e.body})]},e.id)}))})]}),Object(O.jsx)("section",{children:Object(O.jsx)("div",{className:"PostDetails__form-wrapper",children:Object(O.jsx)(v,{addComment:y,postId:t})})})]})}),w=function(){var e=Object(i.useState)([]),t=Object(o.a)(e,2),n=t[0],c=t[1],r=Object(i.useState)(0),s=Object(o.a)(r,2),l=s[0],j=s[1],d=Object(i.useState)(0),b=Object(o.a)(d,2),f=b[0],m=b[1];Object(i.useEffect)((function(){Object(u.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p();case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}}),e)})))()}),[]);return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)("header",{className:"App__header",children:Object(O.jsxs)("label",{children:["Select a user: \xa0",Object(O.jsxs)("select",{className:"App__user-selector",onChange:function(e){j(+e.target.value)},children:[Object(O.jsx)("option",{value:0,children:"All users"}),n.map((function(e){return Object(O.jsx)("option",{value:e.id,children:e.name},e.id)}))]})]})}),Object(O.jsxs)("main",{className:"App__main",children:[Object(O.jsx)("div",{className:"App__sidebar",children:Object(O.jsx)(x,{userId:l,setSelectedPostId:m,selectedPostId:f})}),!!f&&Object(O.jsx)("div",{className:"App__content",children:Object(O.jsx)(_,{selectedPostId:f})})]})]})};r.a.render(Object(O.jsx)(w,{}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.914b5059.chunk.js.map