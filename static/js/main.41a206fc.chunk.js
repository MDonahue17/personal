(this.webpackJsonppersonal=this.webpackJsonppersonal||[]).push([[0],{14:function(e,t,a){},21:function(e,t,a){e.exports=a.p+"static/media/Beach.c782af8d.jpg"},24:function(e,t,a){e.exports=a(40)},29:function(e,t,a){},31:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(20),o=a.n(r),l=(a(29),a(30),a(2)),i=a(3),s=a(5),u=a(4),h=a(6),m=(a(31),a(14),a(32),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{class:"footer"},c.a.createElement("hr",{class:"hline"}),c.a.createElement("div",{class:"row"},c.a.createElement("div",{class:"col"}),c.a.createElement("div",null,c.a.createElement("a",{style:{color:"inherit"},href:"https://github.com/MDonahue17"},c.a.createElement("i",{class:"icons fa fa-github"}))),c.a.createElement("div",null,c.a.createElement("a",{style:{color:"inherit"},href:"https://www.instagram.com/mike.donahue/"},c.a.createElement("i",{class:"fa fa-instagram icons"}))),c.a.createElement("div",null,c.a.createElement("a",{style:{color:"inherit"},href:"spotify:user:oecs54niyzomumcfvuq5v83ws"},c.a.createElement("i",{class:"icons fa fa-spotify"}))),c.a.createElement("div",null,c.a.createElement("a",{style:{color:"inherit"},href:"https://vsco.co/pichael17/images"},c.a.createElement("span",{class:"iconify vsco","data-icon":"simple-icons:vsco"}))),c.a.createElement("div",{class:"col"})))}}]),t}(n.Component)),p=(a(33),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t={width:"25%"};return 1==this.props.info.length&&(t.width="100%"),2==this.props.info.length&&(t.width="50%"),3==this.props.info.length&&(t.width="33%"),window.screen.width<900&&(t.width="100%"),c.a.createElement("div",{class:"card card-stories",style:t},c.a.createElement("hr",null),c.a.createElement("div",{class:"card-body title-author"},c.a.createElement("div",null,c.a.createElement("h3",null,this.props.info[this.props.id-1].meta.data.name),c.a.createElement("h6",null,"By: Michael Donahue"))),c.a.createElement("div",{class:"card-body"},c.a.createElement("div",null,c.a.createElement("button",{onClick:function(){document.body.scrollTop=document.documentElement.scrollTop=0,e.props.idFunction(e.props.id)},class:"btn btn-primary"},"See Story"))),c.a.createElement("hr",null))}}]),t}(n.Component)),d=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{class:"container"},c.a.createElement("div",{dangerouslySetInnerHTML:{__html:this.props.doc}}))}}]),t}(n.Component),v=(a(34),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{style:{textAlign:"center"}},c.a.createElement("div",{class:"row author"},c.a.createElement("div",{class:"col",id:"author"},c.a.createElement("img",{class:"card-img-body",src:this.props.image,alt:"Card image cap"})),c.a.createElement("div",{class:"col"},c.a.createElement("div",{class:"details"},"Michael Donahue",c.a.createElement("p",{class:"details-p"},"Michael Donahue is a writer who currently dedicates his prose to short story fiction. The small town author explores worlds much like our own with a twist! He does so favoring tools like humor, loss, regret along with a touch of his own personality. Michael has finished the curriculum required to graduate with the Creative Writing Minor, which he will do this Spring... hopefully. As well, he's known for being an 'okay' cook and laughing - a little too much - at his own jokes."),c.a.createElement("p",{class:"details-p"},"(See stories below)")))))}}]),t}(n.Component)),f=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={value:null,id:0},a.receiveNumberBack=function(e){a.setState({id:e}),console.log(e)},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;if(null==this.state.value)return c.a.createElement("div",{class:"minHeight"},c.a.createElement(v,{image:this.props.image}));if(0==this.state.id){for(var t=[],a=1;a<=this.state.value.length;a++)t.push(c.a.createElement(p,{info:this.state.value,idFunction:this.receiveNumberBack,id:a}));return c.a.createElement("div",{class:"minHeight"},c.a.createElement(v,{image:this.props.image}),c.a.createElement("div",{class:"card-container"},t))}return c.a.createElement("div",{class:"minHeight"},c.a.createElement("div",{class:"container backButton",style:{marginBottom:"15px",marginTop:"10px",marginLeft:"25px"}},c.a.createElement("button",{onClick:function(){e.setState({id:0}),document.body.scrollTop=document.documentElement.scrollTop=0},class:"btn btn-lg btn-primary"},"Back")),c.a.createElement(d,{doc:this.state.value[this.state.id-1].doc.data}),c.a.createElement("div",{class:"container backButton"},c.a.createElement("button",{onClick:function(){e.setState({id:0}),document.body.scrollTop=document.documentElement.scrollTop=0},class:"btn btn-lg btn-primary"},"Back")))}},{key:"componentDidMount",value:function(){var e=this;null===this.props.value||void 0===this.props.value?fetch("http://localhost:3000/stories").then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({value:t})})).catch((function(e){return console.log(e)})):(this.setState({value:this.props.value}),console.log(this.state.value),console.log("HELLO"))}}]),t}(n.Component),b=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("h1",null,"404: NOT FOUND")}}]),t}(n.Component),E=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){for(var e=[],t=0;t<this.props.items.length;t++)e.push(c.a.createElement("li",null,this.props.items[t]));return c.a.createElement("div",null,e)}}]),t}(n.Component),g=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={items:["Begin making the api","create the footer with ig, github, vsco","check if vsco has an api and connect your account","Spotify","Add stories to the DB","Style the front page","full connection from DB to Server to webpage","Move api from local host to cloud server"]},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{class:"container minHeight"},c.a.createElement(E,{items:this.state.items}))}}]),t}(n.Component),y=a(10),j=a(11),O=a(21),w=a.n(O),k=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={storyValue:null},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=[];console.log(this.state),null===this.state.storyValue&&fetch("https://desolate-island-36268.herokuapp.com/stories").then((function(e){return e.json()})).then((function(a){t.push(a),console.log(a),e.setState({storyValue:a})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement(y.a,null,c.a.createElement("div",null,c.a.createElement("nav",{class:"navbar navbar-expand-lg navbar-light"},c.a.createElement(y.b,{to:"/"},c.a.createElement("a",{class:"navbar-brand"},"Website")),c.a.createElement("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},c.a.createElement("span",{class:"navbar-toggler-icon"})),c.a.createElement("div",{class:"collapse navbar-collapse",id:"navbarNav"},c.a.createElement("div",{class:"navbar-nav"},c.a.createElement(y.b,{to:"/personal"},c.a.createElement("a",{class:"nav-link active"},"Home")),c.a.createElement(y.b,{to:"/stories"},c.a.createElement("a",{class:"nav-link active"},"Stories")),c.a.createElement(y.b,{to:"/todo"},c.a.createElement("a",{class:"nav-link active"},"ToDo"))))),c.a.createElement(j.c,null,c.a.createElement(j.a,{exact:!0,path:"/personal",component:g}),c.a.createElement(j.a,{exact:!0,path:"/",id:"hello",component:g}),c.a.createElement(j.a,{path:"/stories",id:"hello",component:function(){return c.a.createElement(f,{value:e.state.storyValue,image:w.a})}}),c.a.createElement(j.a,{path:"/todo",component:g}),c.a.createElement(j.a,{component:b})))),c.a.createElement(m,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[24,1,2]]]);
//# sourceMappingURL=main.41a206fc.chunk.js.map