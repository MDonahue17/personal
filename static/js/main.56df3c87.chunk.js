(this.webpackJsonppersonal=this.webpackJsonppersonal||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,a){},,,,,,,function(e,t,a){e.exports=a.p+"static/media/home.51aa035c.jpg"},function(e,t,a){e.exports=a.p+"static/media/homeMobile.822f58e1.jpg"},function(e,t,a){e.exports=a.p+"static/media/Beach.c782af8d.jpg"},,,function(e,t,a){e.exports=a(45)},,,,,function(e,t,a){},,function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(20),r=a.n(c),o=(a(31),a(32),a(1)),i=a(2),s=a(4),u=a(3),h=a(5),m=(a(33),a(14),a(34),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{class:"footer"},l.a.createElement("hr",{class:"hline"}),l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col"}),l.a.createElement("div",null,l.a.createElement("a",{style:{color:"inherit"},href:"https://github.com/MDonahue17"},l.a.createElement("i",{class:"icons fa fa-github"}))),l.a.createElement("div",null,l.a.createElement("a",{style:{color:"inherit"},href:"https://www.instagram.com/mike.donahue/"},l.a.createElement("i",{class:"fa fa-instagram icons"}))),l.a.createElement("div",null,l.a.createElement("a",{style:{color:"inherit"},href:"spotify:user:oecs54niyzomumcfvuq5v83ws"},l.a.createElement("i",{class:"icons fa fa-spotify"}))),l.a.createElement("div",null,l.a.createElement("a",{style:{color:"inherit"},href:"https://vsco.co/pichael17/images"},l.a.createElement("span",{class:"iconify vsco","data-icon":"simple-icons:vsco"}))),l.a.createElement("div",{class:"col"})))}}]),t}(n.Component)),p=(a(35),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t={width:"25%"};return 1==this.props.info.length&&(t.width="100%"),2==this.props.info.length&&(t.width="50%"),3==this.props.info.length&&(t.width="33%"),window.screen.width<900&&(t.width="100%"),l.a.createElement("div",{class:"card card-stories",style:t},l.a.createElement("hr",null),l.a.createElement("div",{class:"card-body title-author"},l.a.createElement("div",null,l.a.createElement("h3",null,this.props.info[this.props.id-1].meta.data.name),l.a.createElement("h6",null,"By: Michael Donahue"))),l.a.createElement("div",{class:"card-body"},l.a.createElement("div",null,l.a.createElement("button",{onClick:function(){document.body.scrollTop=document.documentElement.scrollTop=0,e.props.idFunction(e.props.id)},class:"btn btn-primary"},"See Story"))),l.a.createElement("hr",null))}}]),t}(n.Component)),d=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{class:"container"},l.a.createElement("div",{dangerouslySetInnerHTML:{__html:this.props.doc}}))}}]),t}(n.Component),v=(a(36),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement("div",{class:"row author"},l.a.createElement("div",{class:"col",id:"author"},l.a.createElement("img",{class:"card-img-body imgBeach",src:this.props.image,alt:"Card image cap"})),l.a.createElement("div",{class:"col"},l.a.createElement("div",{class:"details"},"Michael Donahue",l.a.createElement("p",{class:"details-p"},"Michael Donahue is a writer who currently dedicates his prose to short story fiction. The small town author explores worlds much like our own with a twist! He does so favoring tools like humor, loss, regret along with a touch of his own personality. Michael has finished the curriculum required to graduate with the Creative Writing Minor, which he will do this Spring... hopefully. As well, he's known for being an 'okay' cook and laughing - a little too much - at his own jokes."),l.a.createElement("p",{class:"details-p"},"(See stories below)")))))}}]),t}(n.Component)),f=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={value:null,id:0},a.receiveNumberBack=function(e){a.setState({id:e}),console.log(e)},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;if(null==this.state.value)return l.a.createElement("div",{class:"minHeight"},l.a.createElement(v,{image:this.props.image}));if(0==this.state.id){for(var t=[],a=1;a<=this.state.value.length;a++)t.push(l.a.createElement(p,{info:this.state.value,idFunction:this.receiveNumberBack,id:a}));return l.a.createElement("div",{class:"minHeight"},l.a.createElement(v,{image:this.props.image}),l.a.createElement("div",{class:"card-container"},t))}return l.a.createElement("div",{class:"minHeight"},l.a.createElement("div",{class:"container backButton",style:{marginBottom:"15px",marginTop:"10px",marginLeft:"25px"}},l.a.createElement("button",{onClick:function(){e.setState({id:0}),document.body.scrollTop=document.documentElement.scrollTop=0},class:"btn btn-lg btn-primary"},"Back")),l.a.createElement(d,{doc:this.state.value[this.state.id-1].doc.data}),l.a.createElement("div",{class:"container backButton"},l.a.createElement("button",{onClick:function(){e.setState({id:0}),document.body.scrollTop=document.documentElement.scrollTop=0},class:"btn btn-lg btn-primary"},"Back")))}},{key:"componentDidMount",value:function(){this.setState({value:this.props.value}),console.log(this.state.value),console.log("HELLO")}}]),t}(n.Component),b=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("h1",null,"404: NOT FOUND")}}]),t}(n.Component),E=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){for(var e=[],t=0;t<this.props.items.length;t++)e.push(l.a.createElement("li",null,this.props.items[t]));return l.a.createElement("div",null,e)}}]),t}(n.Component),g=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={items:["Begin making the api","create the footer with ig, github, vsco","check if vsco has an api and connect your account","Spotify","Add stories to the DB","Style the front page","full connection from DB to Server to webpage","Move api from local host to cloud server"]},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{class:"container minHeight"},l.a.createElement(E,{items:this.state.items}))}}]),t}(n.Component),y=(a(37),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={url:null},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return null!==this.state.url?l.a.createElement("div",{class:"card playlistCard"},l.a.createElement("img",{src:this.state.url,class:"card-img-top playlistImg",alt:"..."}),l.a.createElement("div",{class:"container"},l.a.createElement("h4",null,l.a.createElement("b",null,this.props.data.name)),l.a.createElement("p",null,this.props.data.description),this.props.data.external_urls.spotify)):l.a.createElement("div",null)}},{key:"componentDidMount",value:function(){null==this.state.url&&this.setState({url:this.props.data.images[0].url})}}]),t}(n.Component)),j=a(21),O=a.n(j),w=a(22),k=a.n(w),C=(a(38),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{class:"contain"},l.a.createElement("div",{class:"homeDiv"},l.a.createElement("img",{class:"home",src:O.a}),l.a.createElement("img",{class:"home-mobile",src:k.a})),l.a.createElement("div",{class:"Michael-Div"},l.a.createElement("h1",{class:"Michael-font"},"MICHAEL")))}}]),t}(n.Component)),D=(a(39),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){if(void 0!=this.props.playlists){for(var e=[],t=0;t<this.props.playlists.length;t++)e.push(l.a.createElement(y,{data:this.props.playlists[t]}));return l.a.createElement("div",{class:"minHeight"},l.a.createElement("div",null,l.a.createElement(C,null)),l.a.createElement("div",{class:"card-columns playlistCol"},e))}return l.a.createElement("div",{class:"minHeight"},l.a.createElement("h1",null,"HEEELO"))}}]),t}(n.Component)),S=a(10),x=a(11),B=a(23),M=a.n(B),A=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={storyValue:null,playlistData:null},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t="http://localhost:5000/spotifyPlaylists";null===this.state.playlistData&&fetch(t).then((function(e){return e.json()})).then((function(t){console.log(t.body.items),e.setState({playlistData:t.body.items})})).catch((function(e){return console.log(e)})),t="http://localhost:5000/stories",console.log(this.state),null===this.state.storyValue&&fetch(t).then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({storyValue:t})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement(S.a,null,l.a.createElement("div",null,l.a.createElement("nav",{class:"navbar navbar-expand-lg navbar-light"},l.a.createElement(S.b,{to:"/"},l.a.createElement("a",{class:"navbar-brand"},"Website")),l.a.createElement("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{class:"navbar-toggler-icon"})),l.a.createElement("div",{class:"collapse navbar-collapse",id:"navbarNav"},l.a.createElement("div",{class:"navbar-nav"},l.a.createElement(S.b,{to:"/personal"},l.a.createElement("a",{class:"nav-link active"},"Home")),l.a.createElement(S.b,{to:"/stories"},l.a.createElement("a",{class:"nav-link active"},"Stories")),l.a.createElement(S.b,{to:"/todo"},l.a.createElement("a",{class:"nav-link active"},"ToDo"))))),l.a.createElement(x.c,null,l.a.createElement(x.a,{exact:!0,path:"/personal",component:function(){return l.a.createElement(D,{playlists:e.state.playlistData})}}),l.a.createElement(x.a,{exact:!0,path:"/",id:"hello",component:function(){return l.a.createElement(D,{playlists:e.state.playlistData})}}),l.a.createElement(x.a,{path:"/stories",id:"hello",component:function(){return l.a.createElement(f,{value:e.state.storyValue,image:M.a})}}),l.a.createElement(x.a,{path:"/todo",component:g}),l.a.createElement(x.a,{component:b})))),l.a.createElement(m,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[26,1,2]]]);
//# sourceMappingURL=main.56df3c87.chunk.js.map