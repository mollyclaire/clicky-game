(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,image:"https://www.moma.org/media/W1siZiIsIjE4MjYyMyJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDUxMng1MTJcdTAwM2UiXV0.jpg?sha=aa9165dfd834cdd1"},{id:2,image:"https://www.moma.org/media/W1siZiIsIjE3NjA1MSJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDUxMng1MTJcdTAwM2UiXV0.jpg?sha=227807f00213e3fa"},{id:3,image:"https://www.moma.org/media/W1siZiIsIjE3NTA4NCJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDUxMng1MTJcdTAwM2UiXV0.jpg?sha=fcd3c470929f58da"},{id:4,image:"https://www.moma.org/media/W1siZiIsIjE3NTk2NyJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDUxMng1MTJcdTAwM2UiXV0.jpg?sha=6400e9973be29b7a"},{id:5,image:"https://www.moma.org/media/W1siZiIsIjE3NTk2NiJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDUxMng1MTJcdTAwM2UiXV0.jpg?sha=87e5b23e29bd7654"},{id:6,image:"https://www.moma.org/media/W1siZiIsIjE4MjYyMSJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDUxMng1MTJcdTAwM2UiXV0.jpg?sha=080e3fbf04bff13c"},{id:7,image:"https://www.moma.org/media/W1siZiIsIjE4MjYyMiJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDUxMng1MTJcdTAwM2UiXV0.jpg?sha=4fa85a1c204b1d29"},{id:8,image:"https://www.moma.org/media/W1siZiIsIjIyNDQwOCJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDUxMng1MTJcdTAwM2UiXV0.jpg?sha=df7102587d2f9a7d"},{id:9,image:"https://www.moma.org/media/W1siZiIsIjE3NTk2OCJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDUxMng1MTJcdTAwM2UiXV0.jpg?sha=d87e06811bdf54d0"},{id:10,image:"https://www.moma.org/media/W1siZiIsIjE3NTA4NSJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDUxMng1MTJcdTAwM2UiXV0.jpg?sha=0fb800f2cad33843"},{id:11,image:"https://www.moma.org/media/W1siZiIsIjE2MTkyMCJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDUxMng1MTJcdTAwM2UiXV0.jpg?sha=b12bbc15e1ed6ee4"},{id:12,image:"https://www.moma.org/media/W1siZiIsIjExODU0NiJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDUxMng1MTJcdTAwM2UiXV0.jpg?sha=c057e15f82a95d3d"}]},,,,,,,,function(e,a,t){e.exports=t(22)},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),c=t(3),s=t.n(c),r=(t(15),t(4)),m=t(5),o=t(7),l=t(6),d=t(8);t(16),t(17);var I=function(e){return i.a.createElement("nav",{className:"navbar"},i.a.createElement("span",{className:"navbar-brand",href:"/"},"Clicky Game"),i.a.createElement("ul",{className:"nav navbar-nav ml-auto"},i.a.createElement("li",{className:"nav-item"},i.a.createElement("span",{className:"message"},e.message)),i.a.createElement("li",{className:"nav-item"},i.a.createElement("span",{className:"score"},"Your Score: ",e.score))))},g=(t(18),function(e){return i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"img-container"},i.a.createElement("img",{alt:e.name,src:e.image,id:e.id,onClick:function(){return e.shuffleArt(e.id)}})))});t(19);var w=function(){return i.a.createElement("div",{className:"jumbotron jumbotron-fluid"},i.a.createElement("div",{className:"container"},i.a.createElement("h1",{className:"display-4 text-center"},"Clicky Game - The Ellsworth Kelly Edition"),i.a.createElement("h5",{className:"text-center"},"Click on one of Kelly's masterpieces to earn points, but don't click on an artwork more than once!")))},u=t(1);t(20);var h=function(e){return i.a.createElement("div",{className:"wrapper"},e.children)};t(21);var f=function(){return i.a.createElement("footer",{className:"footer mt-auto py-3"},i.a.createElement("div",{className:"container text-center"},i.a.createElement("span",null,"Game created by",i.a.createElement("a",{href:"https://github.com/mollyclaire"}," mollyclaire"),".")))},p=function(e){function a(){var e,t;Object(r.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(t=Object(o.a)(this,(e=Object(l.a)(a)).call.apply(e,[this].concat(i)))).state={art:u,clickedArtworks:[],score:0,goal:12,message:""},t.shuffleArt=function(e){var a=t.state.clickedArtworks;if(a.includes(e))t.setState({clickedArtworks:[],score:0,message:"Sorry, you've clicked that one before! Game over."});else{if(a.push(e),12===a.length)return t.setState({score:12,message:"You Won! Great Job!",clickedArtworks:[]}),void console.log("You Win");t.setState({art:u,clickedArtworks:a,score:a.length,message:""});!function(e){var a,t,n;for(a=e.length-1;a>0;a--)t=Math.floor(Math.random()*(a+1)),n=e[a],e[a]=e[t],e[t]=n}(u)}},t}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(I,{score:this.state.score,message:this.state.message}),i.a.createElement(w,null),i.a.createElement(h,null,this.state.art.map(function(a){return i.a.createElement(g,{shuffleArt:e.shuffleArt,id:a.id,key:a.id,image:a.image})})),i.a.createElement(f,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.41fc4c62.chunk.js.map