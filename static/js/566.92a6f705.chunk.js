"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[566],{8555:function(n,t,e){var i=e(1061),d={createToDo:function(n){return i.Z.post("/todos/test",n)},getToDo:function(){return i.Z.get("/todos")},deleteTodo:function(n){var t=n.seq;return i.Z.post("/todos/remove",{seq:t})},detailTodo:function(n){return i.Z.get("/todos/".concat(n))},updateTodo:function(n,t){var e=t.data;return i.Z.put("/todos/".concat(n),e)},postTodo:function(n){return i.Z.post("/todos/image",n,{})},getTodoImage:function(n){return i.Z.get("/todos/image/".concat(n))}};t.Z=d},5566:function(n,t,e){e.r(t);var i=e(4942),d=e(1413),o=e(9439),a=e(4087),s=e(7697),r=e(1417),l=e(7526),p=e(7689),c=e(8555),u=e(2791),x=e(2426),m=e.n(x),f=e(3853),g=e(3728),h=e(9126),b=e(7692),v=e(5661),j=e(184);t.default=function(){var n=(0,p.UO)().id,t=(0,u.useState)(!0),e=(0,o.Z)(t,2),x=e[0],Z=e[1],y=(0,u.useState)({title:"",content:"",_id:"",updatedAt:"",createdAt:"",img_URL:""}),w=(0,o.Z)(y,2),_=w[0],R=w[1],U=function(n){c.Z.detailTodo(n).then((function(n){console.log(n.data.data[0],null===n.data.data[0].updatedAt),R((function(){return(0,d.Z)((0,d.Z)({},n.data.data[0]),{},{createdAt:m()(n.data.data[0].createdAt).format("YYYY-MM-DD"),updatedAt:null===n.data.data[0].updatedAt?null:m()().format("YYYY-MM-DD"),img_URL:null===n.data.data[0].img_URL||void 0===n.data.data[0].img_URL?null:n.data.data[0].img_URL.replace("public/","")})}))}))},A=function(n,t){c.Z.updateTodo(n,t).then((function(n){console.log(n.data),(0,v.Vp)("\uc218\uc815\ub418\uc5c8\uc2b5\ub2c8\ub2e4"),Z(!0)})).catch((function(n){console.log(n.response)}))},T=function(n,t){R((function(e){return(0,d.Z)((0,d.Z)({},e),{},(0,i.Z)({},t,n.target.value))}))};return(0,u.useEffect)((function(){U(n)}),[x]),(0,j.jsxs)(a.xu,{p:(0,r.S)()?"20px 20px":"20px 40px",children:[(0,j.jsxs)(a.xu,{border:" 1px solid #d1d1d1",borderRadius:"5px",children:[(0,j.jsxs)(l.Mv,{children:[x?(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("div",{children:(0,j.jsxs)("p",{children:["\uc81c\ubaa9: ",_.title]})}),(0,j.jsx)("div",{children:(0,j.jsxs)("p",{children:["\ub0b4\uc6a9: ",_.content]})}),null!==_.img_URL&&(0,j.jsx)(a.xu,{border:"1px solid #E2E8F0",p:"20px",mb:"10px",children:(0,j.jsx)("img",{src:_.img_URL,alt:"\uc774\ubbf8\uc9c0"})})]}):(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(a.xu,{display:"flex",alignItems:"center",mb:"10px",pb:"10px",borderBottom:"1px solid #ddd",children:[(0,j.jsx)("p",{children:"\uc81c\ubaa9:"}),(0,j.jsx)(s.I,{ml:"10px",w:"auto",value:_.title,onChange:function(n){T(n,"title")}})]}),(0,j.jsxs)(a.xu,{display:"flex",alignItems:"center",mb:"10px",pb:"10px",borderBottom:"1px solid #ddd",children:[(0,j.jsx)("p",{children:"\ub0b4\uc6a9: "}),(0,j.jsx)(s.I,{ml:"10px",w:"auto",value:_.content,onChange:function(n){T(n,"content")}})]}),null!==_.img_URL&&(0,j.jsx)(a.xu,{border:"1px solid #E2E8F0",p:"20px",mb:"10px",className:"img_container",children:(0,j.jsxs)("div",{children:[(0,j.jsx)("img",{src:_.img_URL,alt:"\uc774\ubbf8\uc9c0"}),(0,j.jsx)(b.GTT,{className:"img_remove_btn",size:"30px",color:"rgb(213, 0, 0)"})]})})]}),(0,j.jsxs)("div",{children:[(0,j.jsxs)("p",{className:"date",children:["\ub4f1\ub85d\uc77c: ",_.createdAt]}),null!==_.updatedAt&&(0,j.jsxs)("p",{className:"date",children:["\uc218\uc815\uc77c: ",_.updatedAt]})]})]}),(0,j.jsx)(a.xu,{mb:"20px",display:"flex",justifyContent:"center",alignItems:"center",children:x?(0,j.jsx)(f.vPQ,{size:"30px",onClick:function(){Z(!1)}}):(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(g.VuA,{size:"30px",onClick:function(){Z(!0)}}),(0,j.jsx)(h.nRB,{onClick:function(){A(n,{data:_})},style:{marginLeft:"20px"},size:"24px",color:"#359741"})]})})]}),(0,j.jsx)(v.FN,{})]})}},7526:function(n,t,e){e.d(t,{Mv:function(){return p},W2:function(){return r},aV:function(){return l}});var i,d,o,a=e(168),s=e(8789),r=s.ZP.div(i||(i=(0,a.Z)(['\n  font-family: "bsfont-r";\n  margin: 0;\n  padding: 20px;\n  min-height: 450px;\n  & > ul > li {\n    border-bottom: 1px solid #bbb;\n    padding: 10px;\n  }\n']))),l=s.ZP.div(d||(d=(0,a.Z)(["\n  display: flex;\n  b\n  justify-content: space-between;\n  & > a {\n    width: 88%;\n    display: flex;\n  }\n  & > a > p {\n    padding-right: 10px;\n    width:100%;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n  & > button {\n    width: 12%;\n  }\n"]))),p=s.ZP.div(o||(o=(0,a.Z)(['\n  font-family: "bsfont-r";\n  margin: 0;\n  padding: 20px 20px 0 20px;\n  min-height: 200px;\n  font-size: 20px;\n  & input {\n    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;\n  }\n  & > div > p {\n    min-width: 35px;\n  }\n  & > div > input {\n    min-width: 50px;\n    width: 100%;\n  }\n  & > div:first-child {\n    border-bottom: 1px solid #ddd;\n    padding-bottom: 5px;\n  }\n  & > div:nth-child(2) {\n    margin-top: 10px;\n    margin-bottom: 10px;\n    border-bottom: 1px solid #ddd;\n    padding-bottom: 20px;\n  }\n  & > div > p.date {\n    text-align: right;\n    font-size: 14px;\n  }\n  & > .img_container > div {\n    display: felx;\n  }\n  & > .img_container > div > svg {\n    position: relative;\n    left: -30px;\n    min-width: 30px;\n  }\n'])))},1417:function(n,t,e){e.d(t,{S:function(){return d}});var i=e(4805),d=function(){return(0,i.useMediaQuery)({query:"(max-width:768px)"})}}}]);
//# sourceMappingURL=566.92a6f705.chunk.js.map