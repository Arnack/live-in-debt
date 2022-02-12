(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[650],{91903:function(e,a,s){"use strict";s.r(a),s.d(a,{default:function(){return Q}});var t=s(85893),n=(s(67294),s(56941)),l=s(91121),i=s(53522),c=s(98687),r=s(56880),d=s(99307),u=s(94831),h=s(87226),o=s(46888),x=s(86108),m=s(11934),j=s(51252),f=s(10267),p=[{uv:2034,sales:623,br:56,ns:2343},{uv:2734,sales:1223,br:43,ns:3200},{uv:2522,sales:723,br:64,ns:3063},{uv:2944,sales:1043,br:44,ns:3666},{uv:1822,sales:433,br:74,ns:1909},{uv:1122,sales:893,br:64,ns:2309}],v=function(){return(0,t.jsxs)(j.Z,{sm:3,children:[(0,t.jsxs)(c.w,{width:140,height:60,data:p,children:[(0,t.jsx)(r.x,{type:"monotone",dataKey:"uv",stroke:"#8884d8",strokeWidth:2}),(0,t.jsx)(d.u,{labelStyle:{display:"none"}})]}),(0,t.jsx)("div",{className:"ml-2 small",children:"Line Chart"})]})},b=function(){return(0,t.jsxs)(j.Z,{sm:3,children:[(0,t.jsxs)(u.v,{width:140,height:60,data:p,children:[(0,t.jsx)(h.$,{type:"monotone",dataKey:"sales",fill:"#8884d8"}),(0,t.jsx)(d.u,{labelStyle:{display:"none"}})]}),(0,t.jsx)("div",{className:"ml-2 small",children:"Bar Chart"})]})},y=function(){return(0,t.jsxs)(j.Z,{sm:3,children:[(0,t.jsxs)(o.T,{width:140,height:60,data:p,children:[(0,t.jsx)(x.u,{type:"monotone",dataKey:"br",fill:"#8884d8",stroke:"#8884d8"}),(0,t.jsx)(d.u,{labelStyle:{display:"none"}})]}),(0,t.jsx)("div",{className:"ml-2 small",children:"Area Chart"})]})},k=function(){return(0,t.jsxs)(j.Z,{sm:3,children:[(0,t.jsxs)(m.c,{width:140,height:60,data:p,children:[(0,t.jsx)(h.$,{dataKey:"ns",barSize:20,fill:"#413ea0"}),(0,t.jsx)(r.x,{type:"monotone",dataKey:"uv",stroke:"#ff7300"}),(0,t.jsx)(d.u,{labelStyle:{display:"none"}})]}),(0,t.jsx)("div",{className:"ml-2 small",children:"Composed Chart"})]})},w=function(){return(0,t.jsxs)(f.Z,{children:[(0,t.jsx)(v,{}),(0,t.jsx)(b,{}),(0,t.jsx)(y,{}),(0,t.jsx)(k,{})]})},N=s(29009),g=s(3023),C=s(75358),Z=[{month:"2015.01",a:4e3,b:2400,c:2400},{month:"2015.02",a:3e3,b:1398,c:2210},{month:"2015.03",a:2e3,b:9800,c:2290},{month:"2015.04",a:2780,b:3908,c:2e3},{month:"2015.05",a:1890,b:4800,c:2181},{month:"2015.06",a:2390,b:3800,c:2500},{month:"2015.07",a:3490,b:4300,c:2100}],K=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return"".concat((100*e).toFixed(a),"%")},A=function(e,a){return K(a>0?e/a:0,2)},G=function(e){var a=e.payload,s=e.label,n=a.reduce((function(e,a){return e+a.value}),0);return(0,t.jsxs)("div",{className:"customized-tooltip-content",children:[(0,t.jsx)("p",{className:"total",children:"".concat(s," (Total: ").concat(n,")")}),(0,t.jsx)("ul",{className:"list",children:a.map((function(e,a){return(0,t.jsx)("li",{style:{color:e.color},children:"".concat(e.name,": ").concat(e.value,"(").concat(A(e.value,n),")")},"item-".concat(a))}))})]})},S=function(){return(0,t.jsx)(n.Z,{children:(0,t.jsxs)(l.Z,{style:{width:"100%",height:"350px"},children:[(0,t.jsx)("h6",{className:"text-uppercase mb-4",children:"Area Chart Full"}),(0,t.jsx)(N.h,{children:(0,t.jsxs)(o.T,{width:600,height:300,data:Z,stackOffset:"expand",margin:{top:20,right:10,left:-20,bottom:20},children:[(0,t.jsx)(g.K,{dataKey:"month",fontSize:10,axisLine:!1,tickLine:!1}),(0,t.jsx)(C.B,{tickFormatter:K,fontSize:10,tickLine:!1,axisLine:!1}),(0,t.jsx)(d.u,{content:G,wrapperStyle:{background:"#fff",padding:"1rem",fontSize:10}}),(0,t.jsx)(x.u,{type:"monotone",dataKey:"a",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),(0,t.jsx)(x.u,{type:"monotone",dataKey:"b",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),(0,t.jsx)(x.u,{type:"monotone",dataKey:"c",stackId:"1",stroke:"#ffc658",fill:"#ffc658"})]})})]})})},B=s(98321),_=s(50294),R=s(90508),E=s(39277),M=s(81508),z=[{subject:"Math",A:120,B:110,fullMark:150},{subject:"Chinese",A:98,B:130,fullMark:150},{subject:"English",A:86,B:130,fullMark:150},{subject:"Geography",A:99,B:100,fullMark:150},{subject:"Physics",A:85,B:90,fullMark:150},{subject:"History",A:65,B:85,fullMark:150}],F=function(){return(0,t.jsx)(n.Z,{children:(0,t.jsxs)(l.Z,{style:{width:"100%",height:"350px"},children:[(0,t.jsx)("h6",{className:"text-uppercase mb-4",children:"Radar Chart"}),(0,t.jsx)(N.h,{children:(0,t.jsxs)(B.H,{cy:150,outerRadius:100,data:z,children:[(0,t.jsx)(_.F,{name:"Mike",dataKey:"A",stroke:"#8884d8",fill:"#8884d8",fillOpacity:.6}),(0,t.jsx)(R.n,{}),(0,t.jsx)(E.I,{dataKey:"subject"}),(0,t.jsx)(M.S,{})]})})]})})},T=s(1516),L=s(91096),I=s(23872),O=[{name:"18-24",uv:31.47,pv:2400,fill:"#8884d8"},{name:"25-29",uv:26.69,pv:4567,fill:"#83a6ed"},{name:"30-34",uv:15.69,pv:1398,fill:"#8dd1e1"},{name:"35-39",uv:8.22,pv:9800,fill:"#82ca9d"},{name:"40-49",uv:8.63,pv:3908,fill:"#a4de6c"},{name:"50+",uv:2.63,pv:4800,fill:"#d0ed57"},{name:"unknow",uv:6.67,pv:4800,fill:"#ffc658"}],P=function(){return(0,t.jsx)(n.Z,{children:(0,t.jsxs)(l.Z,{style:{width:"100%",height:"400px"},children:[(0,t.jsx)("h6",{className:"text-uppercase mb-4",children:"Radial BarChart"}),(0,t.jsx)(N.h,{children:(0,t.jsxs)(T.B,{width:450,height:300,cy:150,innerRadius:20,outerRadius:140,barSize:10,data:O,children:[(0,t.jsx)(L.G,{minAngle:15,label:!0,background:!0,clockWise:!0,dataKey:"uv"}),(0,t.jsx)(I.D,{wrapperStyle:{bottom:45,left:0,lineHeight:"24px",fontSize:11}})]})})]})})},D=s(1752),H=s(46208),W=[{name:"Group A",value:400},{name:"Group B",value:300},{name:"Group C",value:300},{name:"Group D",value:200},{name:"Group E",value:278},{name:"Group F",value:189}],X=[{name:"Group A",value:2400},{name:"Group B",value:4567},{name:"Group C",value:1398},{name:"Group D",value:9800},{name:"Group E",value:3908},{name:"Group F",value:4800}],$=function(){return(0,t.jsx)(n.Z,{children:(0,t.jsxs)(l.Z,{style:{width:"100%",height:"300px"},children:[(0,t.jsx)("h6",{className:"text-uppercase mb-4",children:"Pie Charts"}),(0,t.jsx)(N.h,{children:(0,t.jsxs)(D.u,{width:800,height:400,children:[(0,t.jsx)(H.b,{isAnimationActive:!1,dataKey:"value",data:W,cx:150,cy:100,outerRadius:60,fill:"#8884d8",label:!0}),(0,t.jsx)(H.b,{data:X,cx:350,dataKey:"value",cy:100,innerRadius:40,outerRadius:60,fill:"#82ca9d"}),(0,t.jsx)(d.u,{})]})})]})})},q=function(){return(0,t.jsx)("div",{className:"view-header",children:(0,t.jsxs)("header",{className:"text-white",children:[(0,t.jsx)("h1",{className:"h5 title text-uppercase",children:"Charts"}),(0,t.jsx)("p",{className:"mb-0 subtitle",children:"React recharts example with both tiny and full width charts"})]})})},J=function(e){var a=e.children;return(0,t.jsx)("div",{className:"view-content view-components",children:a})};function Q(){return(0,t.jsxs)(i.Z,{children:[(0,t.jsx)(q,{}),(0,t.jsxs)(J,{children:[(0,t.jsx)(n.Z,{className:"mb-4",children:(0,t.jsxs)(l.Z,{children:[(0,t.jsx)("h6",{className:"text-uppercase mb-5",children:"Tiny Charts"}),(0,t.jsx)(w,{})]})}),(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-12 col-md-6 mb-4",children:(0,t.jsx)(S,{})}),(0,t.jsx)("div",{className:"col-12 col-md-6 mb-4",children:(0,t.jsx)(F,{})}),(0,t.jsx)("div",{className:"col-12 col-md-6 mb-4",children:(0,t.jsx)(P,{})}),(0,t.jsx)("div",{className:"col-12 col-md-6 mb-4",children:(0,t.jsx)($,{})})]})]})]})}},87776:function(e,a,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/charts",function(){return s(91903)}])}},function(e){e.O(0,[774,351,658,695,9,941,254,200,522],(function(){return a=87776,e(e.s=a);var a}));var a=e.O();_N_E=a}]);