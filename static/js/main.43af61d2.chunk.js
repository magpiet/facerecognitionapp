(this.webpackJsonpfacerecognitionbrain=this.webpackJsonpfacerecognitionbrain||[]).push([[0],{305:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(42),o=a.n(i),c=(a(96),a(84)),l=a(85),s=a(90),m=a(89),u=(a(97),function(){return r.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},r.a.createElement("p",{className:"f3 link dim black underline pa3 pointer"},"Sign Out"))}),A=a(86),p=a.n(A),E=(a(98),a(87)),b=a.n(E),d=function(){return r.a.createElement("div",{className:"ma4 mt0"},r.a.createElement(p.a,{className:"Tilt br2 shadow-2",options:{max:30},style:{height:150,width:150}},r.a.createElement("div",{className:"Tilt-inner pa3"},r.a.createElement("img",{style:{paddingTop:"20px"},alt:"logo",src:b.a}))))},g=(a(99),function(e){var t=e.onInputChange,a=e.onButtonSubmit;return r.a.createElement("div",null,r.a.createElement("p",{className:"f3"},"This Magic Brain will detect faces in your pictures. Give it a try!"),r.a.createElement("div",{className:"center"},r.a.createElement("div",{className:"form center pa4 br3 shadow-5"},r.a.createElement("input",{className:"f4 pa2 w-70 center",type:"text",onChange:t}),r.a.createElement("button",{className:"w-30 grow f4 link ph3 pv2 dib white bg-light-purple",onClick:a},"Detect"))))}),f=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"white f3"},"Magnus, your current rank is..."),r.a.createElement("div",{className:"white f1"},"5"))},v=a(88),h=a.n(v),w=a(43),I=a.n(w),B=function(e){var t=e.imageUrl;return r.a.createElement("div",{className:"center ma"},r.a.createElement("div",{className:"absolute mt2"},r.a.createElement("img",{alt:"",src:t,width:"500px",height:"auto"})))},N=new I.a.App({apiKey:"ba457b9baafd46189fc17bf95a702406"}),T={particles:{number:{value:50,density:{enable:!0,value_area:800}}}},j=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).onInputChange=function(t){e.setState({input:t.target.value})},e.onButtonSubmit=function(){e.setState({imageUrl:e.state.input}),N.models.predict(I.a.FACE_DETECT_MODEL,e.state.input).then((function(e){console.log(e.outputs[0].data.regions[0].region_info.bounding_box)}),(function(e){}))},e.state={input:"",imageUrl:""},e}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(h.a,{className:"particles",params:T}),r.a.createElement(u,null),r.a.createElement(d,null),r.a.createElement(f,null),r.a.createElement(g,{onInputChange:this.onInputChange,onButtonSubmit:this.onButtonSubmit}),r.a.createElement(B,{imageUrl:this.state.imageUrl}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(304);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},87:function(e,t){e.exports="data:image/png;base64,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"},91:function(e,t,a){e.exports=a(305)},96:function(e,t,a){},97:function(e,t,a){},98:function(e,t,a){},99:function(e,t,a){}},[[91,1,2]]]);
//# sourceMappingURL=main.43af61d2.chunk.js.map