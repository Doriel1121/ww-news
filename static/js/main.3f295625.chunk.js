(this.webpackJsonpnews=this.webpackJsonpnews||[]).push([[0],{20:function(e,t,a){},22:function(e,t,a){e.exports=a(49)},27:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(3),o=a.n(r),c=(a(27),a(5)),l=a(6),i=a(8),m=a(7),u=a(2),h=a.n(u),p=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={},n}return Object(l.a)(a,[{key:"render",value:function(){return"small"===this.props.size?s.a.createElement("div",{id:"allStory"},s.a.createElement("div",{className:"container-fluid"},s.a.createElement("div",{className:"col-12 mt-3",style:{marginTop:0}},s.a.createElement("div",{className:"card"},s.a.createElement("div",{className:"card-horizontal"},s.a.createElement("div",{className:"img-square-wrapper"},s.a.createElement("img",{className:"storyImg",src:this.props.story.urlToImage,alt:"Card  cap"})),s.a.createElement("div",{className:"card-body"},s.a.createElement("a",{href:this.props.story.url,className:"card-title title",style:{fontSize:15}},s.a.createElement("h4",null,this.props.story.title)),s.a.createElement("p",{className:"card-text"},this.props.story.content))),s.a.createElement("div",{className:"card-footer"},s.a.createElement("p",{className:"card-text",id:"StoryAbout"},s.a.createElement("small",{className:"text-muted"},s.a.createElement("span",null,this.props.story.source.name)," | ",s.a.createElement("span",null,this.props.story.publishedAt)))))))):s.a.createElement("div",{id:"allStory"},s.a.createElement("div",{className:"card mb-3",style:{marginTop:15}},s.a.createElement("img",{className:"card-img-top",id:"img",style:{height:150},src:this.props.story.urlToImage,alt:"theme"})),s.a.createElement("div",{style:{paddingTop:0,paddingBottom:0},className:"card-body"},s.a.createElement("div",{style:{textAlign:"left",fontSize:13,fontWeight:"bolder"}},s.a.createElement("a",{href:this.props.story.url,className:"card-title title",style:{fontSize:18,textAlign:"left"}},this.props.story.title),s.a.createElement("hr",null),s.a.createElement("p",{className:"card-text",id:"StoryAbout"},s.a.createElement("small",{className:"text-muted"},s.a.createElement("span",null,this.props.story.source.name)," | ",s.a.createElement("span",null,this.props.story.publishedAt))))),s.a.createElement("div",{className:"col-sm"}))}}]),a}(n.Component),d=a(9),g=(a(20),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).componentDidMount=function(){var e=new Date,t=String(e.getDate()).padStart(2,"0"),a=String(e.getMonth()+1).padStart(2,"0"),s=e.getFullYear();e=s+"/"+a+"/"+t,console.log(e),n.setState({currentDate:e}),h.a.get("https://newsapi.org/v2/everything?q=bitcoin&from=".concat(e,"&sortBy=publishedAt&apiKey=").concat(n.state.APIkey)).then((function(e){n.setState({Data:e.data.articles}),console.log(e)})).catch((function(e){alert("something wrong")}))},n.ShowAllStories=function(){n.BitcoinStories(),n.BusinessStories(),n.ApplesStories(),n.TechCrunchStories(),n.WallStreetStories();var e=[n.state.BitcoinStories,n.state.BusinessStories,n.state.ApplesStories,n.state.TechCrunchStories,n.state.WallStreetStories];console.log(e)},n.BitcoinStories=function(){h.a.get("http://newsapi.org/v2/everything?q=bitcoin&from=".concat(n.state.currentDate,"&sortBy=publishedAt&apiKey=").concat(n.state.APIkey)).then((function(e){return n.setState({Data:e.data.articles,BitcoinStories:e.data.articles}),console.log(e),e.data.articles})).catch((function(e){alert("something wrong")}))},n.BusinessStories=function(){h.a.get("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=".concat(n.state.APIkey)).then((function(e){n.setState({Data:e.data.articles,BusinessStories:e.data.articles}),console.log(e)})).catch((function(e){console.log(e),alert("something wrong")}))},n.ApplesStories=function(){h.a.get("https://newsapi.org/v2/everything?q=apple&from=".concat(n.state.currentDate,"&to=").concat(n.state.currentDate,"&sortBy=popularity&apiKey=").concat(n.state.APIkey)).then((function(e){n.setState({Data:e.data.articles,ApplesStories:e.data.articles})})).catch((function(e){console.log(e),alert("something wrong")}))},n.TechCrunchStories=function(){h.a.get("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=".concat(n.state.APIkey)).then((function(e){n.setState({Data:e.data.articles,TechCrunchStories:e.data.articles})})).catch((function(e){alert("something wrong")}))},n.WallStreetStories=function(){h.a.get("https://newsapi.org/v2/everything?domains=wsj.com&apiKey=".concat(n.state.APIkey)).then((function(e){n.setState({Data:e.data.articles,WallStreetStories:e.data.articles}),console.log(n.state.AllStories)})).catch((function(e){alert("something wrong")}))},n.state={APIkey:"56e5c7bb3749419b8eb54212d6bf370a",Data:[],AllStories:[],BitcoinStories:[],BusinessStories:[],ApplesStories:[],TechCrunchStories:[],WallStreetStories:[],currentDate:""},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement("div",{id:"navbar",className:""},s.a.createElement(d.a,{indicators:!1},this.state.Data.map((function(e){return s.a.createElement(d.a.Item,{id:"carouselImages",style:{height:500}},s.a.createElement("img",{style:{height:500},className:"d-block w-100",src:e.urlToImage,alt:"carousel"}),s.a.createElement(d.a.Caption,null))}))),s.a.createElement("div",{style:{backgroundColor:"#102039",color:"white",height:80,marginBottom:30},className:"sticky-top row"},s.a.createElement("div",{className:"col-3"},s.a.createElement("h1",{id:"title"},"WW NEWS")),s.a.createElement("div",{className:"col-1 "},s.a.createElement("button",{onClick:function(){return e.BitcoinStories()},className:"butt btn btn-link",style:{color:"white",fontWeight:"bolder"}},"Bitcoin")),s.a.createElement("div",{className:"col-2 "},s.a.createElement("button",{onClick:function(){return e.BusinessStories()},className:"butt btn btn-link",style:{color:"white",fontWeight:"bolder"}},"Businesses")),s.a.createElement("div",{className:"col-1 "},s.a.createElement("button",{onClick:function(){return e.ApplesStories()},className:"butt btn btn-link",style:{color:"white",fontWeight:"bolder"}},"Apple")),s.a.createElement("div",{className:"col-2 "},s.a.createElement("button",{onClick:function(){return e.TechCrunchStories()},className:"butt btn btn-link",style:{color:"white",fontWeight:"bolder"}},"TechCrunch ")),s.a.createElement("div",{className:"col-2 "},s.a.createElement("button",{onClick:function(){return e.WallStreetStories()},className:"butt btn btn-link",style:{color:"white",fontWeight:"bolder"}},"Wall Street Journal")))),s.a.createElement("div",{className:"row no-gutters"},s.a.createElement("div",{className:"col-3"},this.state.Data.map((function(t){if(e.state.Data.indexOf(t)%2==0)return s.a.createElement("div",{className:"col-12 "},s.a.createElement(p,{size:"big",story:t}))}))),s.a.createElement("div",{className:"col-9"},this.state.Data.map((function(t){if(e.state.Data.indexOf(t)%2!==0)return s.a.createElement("div",{className:"col-12"},s.a.createElement(p,{size:"small",story:t}))})))),s.a.createElement("footer",{className:"page-footer font-small special-color-dark pt-4"},s.a.createElement("div",{className:"container"}),s.a.createElement("div",{className:"footer-copyright text-center py-3"},"\xa9 2020 Copyright:",s.a.createElement("a",{href:"https://mdbootstrap.com/"}," MDBootstrap.com"))))}}]),a}(n.Component));a(48);var f=function(){return s.a.createElement("div",{className:"App"},s.a.createElement(g,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.3f295625.chunk.js.map