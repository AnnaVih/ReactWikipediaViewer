(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(e,t,n){"use strict";n.r(t);var a,r=n(0),c=n.n(r),i=n(28),o=n.n(i),u=(n(43),n(29)),l=n(30),s=n(36),p=n(31),m=n(37),f=n(32),d=n.n(f),h=function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("img",{src:d.a,alt:"Wikipedia Logo"}))},b=n(5),w=n(10),E=n.n(w),k=n(33),g=n(34),v=n.n(g),j=function(e){var t=Object(r.useState)([]),n=Object(b.a)(t,2),c=n[0],i=n[1],o=function(){var e=Object(k.a)(E.a.mark(function e(t){var n;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=".concat(t));case 2:n=e.sent,a&&i(n.data.query.search);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}();return Object(r.useEffect)(function(){return a=!0,o(e),function(){a=!1}},[e]),c},y=n(35),O=n.n(y),_=function(e){var t=e.query,n=j(t);return c.a.createElement("ul",null,n.map(function(e){return c.a.createElement("li",{key:e.pageid,onClick:function(){return window.open("https://en.wikipedia.org/?curid=".concat(e.pageid),"_blank")}},c.a.createElement("h3",null,e.title),c.a.createElement("p",null,O()(e.snippet)))}))},C=function(e){var t=Object(r.useState)(""),n=Object(b.a)(t,2),a=n[0],i=n[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"search_container"},c.a.createElement("input",{type:"text",placeholder:"Search for article",className:"search_input",value:a,onChange:function(e){i(e.target.value)}})),function(){if(a)return c.a.createElement(_,{query:a})}())},N=function(){return c.a.createElement("button",{type:"button",className:"random_button",onClick:function(){return window.open("https://en.wikipedia.org/wiki/Special:Random","_blank")}},"Click here for a random article")},x=function(){return c.a.createElement("div",{className:"wikipedia_footer"},c.a.createElement("button",{onClick:function(){return window.open("https://github.com/AnnaVih/ReactWikipediaViewer","_blank")},className:"footer_button"},"Check source code on GitHub"),c.a.createElement("p",null,"Developed in React by Anna Vihrogonova. It is a result of hard work, passion and learning from failure."))},q=function(e){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(h,null),c.a.createElement("div",{className:"wikipedia_wrapper"},c.a.createElement(C,null),c.a.createElement("h1",null,"OR"),c.a.createElement(N,null)),c.a.createElement(x,null))}}]),t}(r.Component);o.a.render(c.a.createElement(q,null),document.getElementById("root"))},32:function(e,t,n){e.exports=n.p+"static/media/wikipediaLogo.71b4aad3.png"},38:function(e,t,n){e.exports=n(104)},43:function(e,t,n){},74:function(e,t){}},[[38,2,1]]]);
//# sourceMappingURL=main.7cb8860b.chunk.js.map