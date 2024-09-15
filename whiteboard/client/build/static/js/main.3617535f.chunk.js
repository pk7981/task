(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{58:function(e,t,s){},59:function(e,t,s){"use strict";s.r(t);var c=s(1),n=s(7),r=s.n(n),o=(s(31),s(32),s(3)),l=s(12),a=s.n(l),i=s(0);var d=e=>{let{userNo:t,socket:s,setUsers:n,setUserNo:r}=e;const l=Object(c.useRef)(null);return Object(c.useEffect)((()=>{s.on("message",(e=>{o.b.info(e.message)}))}),[]),Object(c.useEffect)((()=>{s.on("users",(e=>{n(e),r(e.length)}))}),[]),Object(c.useEffect)((()=>{s.on("canvasImage",(e=>{l.current.src=e}))}),[]),Object(i.jsxs)("div",{className:"container-fluid",children:[Object(i.jsx)("div",{className:"row pb-2",children:Object(i.jsxs)("h1",{className:"display-5 pt-4 pb-3 text-center",children:["React Drawing App - users online:",t]})}),Object(i.jsx)("div",{className:"row mt-5",children:Object(i.jsx)("div",{className:"col-md-8 overflow-hidden border border-dark px-0 mx-auto\r mt-3",style:{height:"500px"},children:Object(i.jsx)("img",{className:"w-100 h-100",ref:l,src:"",alt:"image"})})})]})},m=s(26);var b=e=>{let{uuid:t,setUser:s,setRoomJoined:n}=e;const[r,l]=Object(c.useState)(t()),[a,d]=Object(c.useState)(""),[b,j]=Object(c.useState)(""),[u,h]=Object(c.useState)("");return Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("div",{className:"row",children:Object(i.jsx)("div",{className:"col-md-12",children:Object(i.jsx)("h1",{className:"text-center my-5",children:"Welcome To Realtime Whiteboard Sharing App"})})}),Object(i.jsxs)("div",{className:"row mx-5 mt-5",children:[Object(i.jsxs)("div",{className:"col-md-5 p-5 border mx-auto",children:[Object(i.jsx)("h1",{className:"text-center text-primary mb-5",children:"Create Room"}),Object(i.jsxs)("form",{onSubmit:e=>{if(e.preventDefault(),!a)return o.b.dark("Please enter your name!");s({roomId:r,userId:t(),userName:a,host:!0,presenter:!0}),n(!0)},children:[Object(i.jsx)("div",{className:"form-group my-2",children:Object(i.jsx)("input",{type:"text",placeholder:"Name",className:"form-control",value:a,onChange:e=>d(e.target.value)})}),Object(i.jsxs)("div",{className:"input-group my-2 border align-items-center",children:[Object(i.jsx)("input",{type:"text",className:"form-control border-0 outline-0",value:r,readOnly:!0,style:{boxShadow:"none",zIndex:"0 !important",fontsize:"0.89rem !important"}}),Object(i.jsxs)("div",{className:"input-group-append",children:[Object(i.jsx)("button",{className:"btn btn-outline-primary  border-0 btn-sm",type:"button",onClick:()=>l(t()),children:"Generate"}),"\xa0\xa0",Object(i.jsx)(m.CopyToClipboard,{text:r,onCopy:()=>o.b.success("Room Id Copied To Clipboard!"),children:Object(i.jsx)("button",{className:"btn btn-outline-dark border-0 btn-sm",type:"button",children:"Copy"})})]})]}),Object(i.jsx)("div",{className:"form-group mt-5",children:Object(i.jsx)("button",{type:"submit",className:"form-control btn btn-dark",children:"Create Room"})})]})]}),Object(i.jsxs)("div",{className:"col-md-5 p-5 border mx-auto",children:[Object(i.jsx)("h1",{className:"text-center text-primary mb-5",children:"Join Room"}),Object(i.jsxs)("form",{onSubmit:e=>{if(e.preventDefault(),!b)return o.b.dark("Please enter your name!");s({roomId:u,userId:t(),userName:b,host:!1,presenter:!1}),n(!0)},children:[Object(i.jsx)("div",{className:"form-group my-2",children:Object(i.jsx)("input",{type:"text",placeholder:"Name",className:"form-control",value:b,onChange:e=>j(e.target.value)})}),Object(i.jsx)("div",{className:"form-group my-2",children:Object(i.jsx)("input",{type:"text",className:"form-control outline-0",value:u,onChange:e=>h(e.target.value),placeholder:"Room Id",style:{boxShadow:"none"}})}),Object(i.jsx)("div",{className:"form-group mt-5",children:Object(i.jsx)("button",{type:"submit",className:"form-control btn btn-dark",children:"Join Room"})})]})]})]})]})},j=s(13);const u=j.a.generator();var h=e=>{let{canvasRef:t,ctx:s,color:n,setElements:r,elements:o,tool:l,socket:a}=e;const[d,m]=Object(c.useState)(!1);Object(c.useEffect)((()=>{const e=t.current;e.height=2*window.innerHeight,e.width=2*window.innerWidth,e.style.width=`${window.innerWidth}px`,e.style.height=`${window.innerHeight}px`;const c=e.getContext("2d");c.strokeWidth=5,c.scale(2,2),c.lineCap="round",c.strokeStyle=n,c.lineWidth=5,s.current=c}),[]),Object(c.useEffect)((()=>{s.current.strokeStyle=n}),[n]);Object(c.useLayoutEffect)((()=>{const e=j.a.canvas(t.current);o.length>0&&s.current.clearRect(0,0,t.current.width,t.current.height),o.forEach(((t,s)=>{"rect"===t.element?e.draw(u.rectangle(t.offsetX,t.offsetY,t.width,t.height,{stroke:t.stroke,roughness:0,strokeWidth:5})):"line"===t.element?e.draw(u.line(t.offsetX,t.offsetY,t.width,t.height,{stroke:t.stroke,roughness:0,strokeWidth:5})):"pencil"===t.element&&e.linearPath(t.path,{stroke:t.stroke,roughness:0,strokeWidth:5})}));const c=t.current.toDataURL();a.emit("drawing",c)}),[o]);return Object(i.jsx)("div",{className:"col-md-8 overflow-hidden border border-dark px-0 mx-auto mt-3",style:{height:"500px"},onMouseDown:e=>{const{offsetX:t,offsetY:s}=e.nativeEvent;r("pencil"===l?e=>[...e,{offsetX:t,offsetY:s,path:[[t,s]],stroke:n,element:l}]:e=>[...e,{offsetX:t,offsetY:s,stroke:n,element:l}]),m(!0)},onMouseMove:e=>{if(!d)return;const{offsetX:t,offsetY:s}=e.nativeEvent;"rect"===l?r((e=>e.map(((e,c)=>c===o.length-1?{offsetX:e.offsetX,offsetY:e.offsetY,width:t-e.offsetX,height:s-e.offsetY,stroke:e.stroke,element:e.element}:e)))):"line"===l?r((e=>e.map(((e,c)=>c===o.length-1?{offsetX:e.offsetX,offsetY:e.offsetY,width:t,height:s,stroke:e.stroke,element:e.element}:e)))):"pencil"===l&&r((e=>e.map(((e,c)=>c===o.length-1?{offsetX:e.offsetX,offsetY:e.offsetY,path:[...e.path,[t,s]],stroke:e.stroke,element:e.element}:e))))},onMouseUp:()=>{m(!1)},children:Object(i.jsx)("canvas",{ref:t})})};var f=e=>{let{userNo:t,socket:s,setUsers:n,setUserNo:r}=e;const l=Object(c.useRef)(null),a=Object(c.useRef)(null),[d,m]=Object(c.useState)("#000000"),[b,j]=Object(c.useState)([]),[u,f]=Object(c.useState)([]),[p,x]=Object(c.useState)("pencil");Object(c.useEffect)((()=>{s.on("message",(e=>{o.b.info(e.message)}))}),[]),Object(c.useEffect)((()=>{s.on("users",(e=>{n(e),r(e.length)}))}),[]);return Object(i.jsxs)("div",{className:"container-fluid",children:[Object(i.jsx)("div",{className:"row",children:Object(i.jsxs)("h1",{className:"display-5 pt-4 pb-3 text-center",children:["React Drawing App - users online: ",t]})}),Object(i.jsx)("div",{className:"row justify-content-center align-items-center text-center py-2",children:Object(i.jsxs)("div",{className:"controls-container d-flex justify-content-between align-items-center",children:[Object(i.jsxs)("div",{className:"color-picker",children:["Color Picker : \xa0",Object(i.jsx)("input",{type:"color",value:d,onChange:e=>m(e.target.value)})]}),Object(i.jsxs)("div",{className:"tools d-flex align-items-center",children:[Object(i.jsxs)("div",{className:"form-check form-check-inline",children:[Object(i.jsx)("input",{className:"form-check-input",type:"radio",name:"tools",id:"pencil",value:"pencil",checked:"pencil"===p,onClick:e=>x(e.target.value),readOnly:!0}),Object(i.jsx)("label",{className:"form-check-label",htmlFor:"pencil",children:"Pencil"})]}),Object(i.jsxs)("div",{className:"form-check form-check-inline",children:[Object(i.jsx)("input",{className:"form-check-input",type:"radio",name:"tools",id:"line",value:"line",checked:"line"===p,onClick:e=>x(e.target.value),readOnly:!0}),Object(i.jsx)("label",{className:"form-check-label",htmlFor:"line",children:"Line"})]}),Object(i.jsxs)("div",{className:"form-check form-check-inline",children:[Object(i.jsx)("input",{className:"form-check-input",type:"radio",name:"tools",id:"rect",value:"rect",checked:"rect"===p,onClick:e=>x(e.target.value),readOnly:!0}),Object(i.jsx)("label",{className:"form-check-label",htmlFor:"rect",children:"Rectangle"})]})]}),Object(i.jsxs)("div",{className:"actions d-flex",children:[Object(i.jsx)("button",{type:"button",className:"btn btn-outline-primary",disabled:0===b.length,onClick:()=>(f((e=>[...e,b[b.length-1]])),void j((e=>e.filter(((e,t)=>t!==b.length-1))))),children:"Undo"}),"\xa0\xa0",Object(i.jsx)("button",{type:"button",className:"btn btn-outline-primary ml-1",disabled:u.length<1,onClick:()=>(j((e=>[...e,u[u.length-1]])),void f((e=>e.filter(((e,t)=>t!==u.length-1))))),children:"Redo"}),"\xa0\xa0",Object(i.jsx)("button",{type:"button",className:"btn btn-danger",onClick:()=>{const e=l.current,t=e.getContext("2d");t.fillStyle="white",t.fillRect(0,0,e.width,e.height),j([])},children:"Clear Canvas"})]})]})}),Object(i.jsx)("div",{className:"row",children:Object(i.jsx)(h,{canvasRef:l,ctx:a,color:d,setElements:j,elements:b,tool:p,socket:s})})]})};var p=e=>{let{users:t,user:s,socket:n}=e;const r=Object(c.useRef)(null);return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("button",{className:"btn btn-dark btn-sm",onClick:()=>{r.current.style.left=0},style:{position:"absolute",top:"3%",left:"3%"},children:"Users"}),Object(i.jsxs)("div",{className:"position-fixed pt-2 h-100 bg-dark",ref:r,style:{width:"200px",left:"-100%",transition:"0.3s linear",zIndex:"9999"},children:[Object(i.jsx)("button",{className:"btn btn-block border-0 sideform-control rounded-0 btn-light",onClick:()=>{r.current.style.left="-100%"},children:"Close"}),Object(i.jsx)("div",{className:"w-100 mt-5",children:t.map(((e,t)=>Object(i.jsxs)("p",{className:"text-white text-center py-2",children:[e.username,e.id===n.id&&" - (You)"]},t)))})]})]})};s(58);const x=a()("http://localhost:5000",{"force new connection":!0,reconnectionAttempts:"Infinity",timeout:1e4,transports:["websocket"]});var O=()=>{const[e,t]=Object(c.useState)(0),[s,n]=Object(c.useState)(!1),[r,l]=Object(c.useState)({}),[a,m]=Object(c.useState)([]);return Object(c.useEffect)((()=>{s&&x.emit("user-joined",r)}),[s]),Object(i.jsxs)("div",{className:"home",children:[Object(i.jsx)(o.a,{}),s?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(p,{users:a,user:r,socket:x}),r.presenter?Object(i.jsx)(f,{userNo:e,user:r,socket:x,setUsers:m,setUserNo:t}):Object(i.jsx)(d,{userNo:e,user:r,socket:x,setUsers:m,setUserNo:t})]}):Object(i.jsx)(b,{uuid:()=>{var e=()=>(65536*(1+Math.random())|0).toString(16).substring(1);return e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e()},setRoomJoined:n,setUser:l})]})};r.a.render(Object(i.jsx)(O,{}),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.3617535f.chunk.js.map