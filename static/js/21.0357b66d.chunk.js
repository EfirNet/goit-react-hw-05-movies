"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[21],{9021:function(r,t,e){e.r(t),e.d(t,{default:function(){return m}});var n=e(1413),a=e(5861),s=e(9439),c=e(7757),u=e.n(c),i=e(2791),o=e(7689),p=e(232),f={list:"CastPage_list__ievSZ",item:"CastPage_item__ycgBh",img:"CastPage_img__DAvKf"},l=e(184),m=function(){var r=(0,i.useState)({items:[],loading:!1,error:null}),t=(0,s.Z)(r,2),e=t[0],c=t[1],m=(0,o.UO)().id;(0,i.useEffect)((function(){var r=function(){var r=(0,a.Z)(u().mark((function r(){var t,e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return c((function(r){return(0,n.Z)((0,n.Z)({},r),{},{loading:!0,error:!1})})),r.prev=1,r.next=4,(0,p.Ku)(m);case 4:t=r.sent,e=t.cast,c((function(r){return(0,n.Z)((0,n.Z)({},r),{},{items:e,loading:!1})})),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(1),c((function(t){return(0,n.Z)((0,n.Z)({},t),{},{loading:!1,error:r.t0})}));case 12:case"end":return r.stop()}}),r,null,[[1,9]])})));return function(){return r.apply(this,arguments)}}();r()}),[m]);var d=e.items.map((function(r){var t=r.id,e=r.original_name,n=r.character,a=r.profile_path,s="https://image.tmdb.org/t/p/w200".concat(a);return(0,l.jsxs)("li",{className:f.item,children:[(0,l.jsx)("img",{className:f.img,src:s,alt:e}),(0,l.jsxs)("p",{className:f.text,children:[(0,l.jsx)("span",{className:f.span,children:"Name:"})," ",e]}),(0,l.jsxs)("p",{className:f.text,children:[(0,l.jsx)("span",{className:f.span,children:"Character:"})," ",n]})]},t)}));return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("ul",{className:f.list,children:d})})}},232:function(r,t,e){e.d(t,{HI:function(){return i},Ku:function(){return f},Pg:function(){return o},Wf:function(){return p},lV:function(){return l}});var n=e(5861),a=e(7757),s=e.n(a),c=e(3263).Z.create({baseURL:"https://api.themoviedb.org/3/"}),u="90ff20d482691dd64f3226f1017ad871",i=function(){var r=(0,n.Z)(s().mark((function r(){var t,e,n,a=arguments;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:1,r.next=3,c.get("trending/movie/day",{params:{api_key:u,page:t}});case 3:return e=r.sent,n=e.data.results,r.abrupt("return",n);case 6:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),o=function(){var r=(0,n.Z)(s().mark((function r(t){var e,n;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.get("/movie/".concat(t),{params:{api_key:u}});case 2:return e=r.sent,n=e.data,r.abrupt("return",n);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),p=function(){var r=(0,n.Z)(s().mark((function r(t){var e,n;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.get("search/movie",{params:{api_key:u,query:t}});case 2:return e=r.sent,n=e.data,r.abrupt("return",n);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),f=function(){var r=(0,n.Z)(s().mark((function r(t){var e,n;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.get("/movie/".concat(t,"/credits"),{params:{api_key:u}});case 2:return e=r.sent,n=e.data,r.abrupt("return",n);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),l=function(){var r=(0,n.Z)(s().mark((function r(t){var e,n;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.get("/movie/".concat(t,"/reviews"),{params:{api_key:u}});case 2:return e=r.sent,n=e.data,r.abrupt("return",n);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}()}}]);
//# sourceMappingURL=21.0357b66d.chunk.js.map