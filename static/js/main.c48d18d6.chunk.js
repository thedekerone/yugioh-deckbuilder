(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{35:function(e,t,a){e.exports=a(64)},40:function(e,t,a){},46:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(31),l=a.n(c),o=(a(40),a(34)),i=a(6),s=a(7),m=a(9),u=a(8),d=a(11),h=a(10);a(41);function p(e){var t=e.card;return r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:t.image_url,alt:"",width:"200px"}))}var b=a(13);function g(e){var t=e.data;return r.a.createElement("div",{className:"CardList"},r.a.createElement("ul",null,t.map(function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(b.b,{to:{pathname:"/"+e.id,state:{carta:e}}},r.a.createElement(p,{card:e})))})))}a(46);function E(){return r.a.createElement("div",{className:"loading"},r.a.createElement("div",{className:"lds-hourglass"}))}var v=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h1",null,"Cards"),r.a.createElement("input",{type:"text",className:"form-control",onChange:this.props.change,placeholder:"search",value:this.props.main.match}),r.a.createElement("button",{className:"btn btn-dark mb-4",onClick:this.props.click},"Show more!"),this.props.main.loading?r.a.createElement(E,null):null,r.a.createElement(g,{data:this.props.main.data.filter(function(t){return t.name.toLowerCase().includes(e.props.main.match.toLowerCase())}).slice(1,this.props.main.limitValue).reverse()}))}}]),t}(n.Component),f=a(12),y=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={target:{error:"error"}},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){try{this.props.location.state.carta?this.setState({error:null,target:this.props.location.state.carta}):this.setState({error:"error"})}catch(e){console.log("whoops something went wrong pepega")}}},{key:"render",value:function(){return"error"===this.state.target.error?r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Card not found"),r.a.createElement(b.b,{to:"/",className:"btn btn-primary"},"Go back")):!0===this.state.loading?r.a.createElement("div",{className:"loading"},r.a.createElement(E,null)):r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,this.state.target.name," ",r.a.createElement(b.b,{to:"/",className:"btn btn-primary"},"Go back")),r.a.createElement("div",{className:"loading card mb-3 ",style:{maxWidth:" 840px"}},r.a.createElement("div",{className:"row no-gutters"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("img",{src:this.state.target.image_url,alt:"",width:"300px"})),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("p",{className:"ml-4 col-md-8"},this.state.target.desc)))),r.a.createElement("div",null,"ebay:",r.a.createElement("button",{className:"btn btn-secondary"}," ",this.state.target.ebay_price)),r.a.createElement("div",null,"amazon:",r.a.createElement("button",{className:"btn btn-secondary"}," ",this.state.target.amazon_price)))}}]),t}(n.Component);function k(){return r.a.createElement("div",null,r.a.createElement("h1",null,"error lul"))}var j=a(16),O=a.n(j),w=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={loading:!1,error:null,data:[],limitValue:50,match:""},a.getData=function(){a.setState({loading:!0,error:null}),a.req=O.a.get("https://db.ygoprodeck.com/api/v4/cardinfo.php").then(function(e){var t=e.data[0];a.setState({loading:!1,data:t})}).then(function(e){a.props.start(Object(d.a)(a))}).catch(function(e){console.log(e),a.setState({loading:!1,error:e})})},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentWillUnmount",value:function(){console.log("unmount component"),this.axiosCancelSource.cancel("Component unmounted.")}},{key:"componentDidMount",value:function(){this.axiosCancelSource=O.a.CancelToken.source(),this.getData()}},{key:"render",value:function(){return r.a.createElement("div",null,this.props.children)}}]),t}(n.Component),C=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).handleStart=function(e){a.setState(Object(o.a)({},e.state))},a.handleChange=function(e){a.setState({match:e.target.value})},a.handleClick=function(){a.setState({limitValue:a.state.limitValue+50})},a.state={loading:!0},a.handleStart=a.handleStart.bind(Object(d.a)(a)),a.handleClick=a.handleClick.bind(Object(d.a)(a)),a.handleChange=a.handleChange.bind(Object(d.a)(a)),a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidUpdate",value:function(){}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return r.a.createElement(b.a,{basename:"yugioh-deckbuilder"},r.a.createElement(w,{start:this.handleStart},this.state.loading?r.a.createElement(E,null):r.a.createElement(f.c,null,r.a.createElement(f.a,{exact:!0,path:"/",render:function(t){return r.a.createElement(v,{state:t,change:e.handleChange,click:e.handleClick,main:e.state})}}),r.a.createElement(f.a,{exact:!0,path:"/:cardId",component:y}),r.a.createElement(f.a,{component:k}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[35,1,2]]]);
//# sourceMappingURL=main.c48d18d6.chunk.js.map