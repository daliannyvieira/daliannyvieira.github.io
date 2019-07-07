(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{196:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=(a(209),a(228)),o=a(199),c=a(206),s=a.n(c),l=a(229),A=a(201),u=a(198),d="855753304",m=function(){return r.a.createElement(o.b,{query:d,render:function(e){var t=e.site.siteMetadata.author;return r.a.createElement("div",{className:"main-bio-container"},r.a.createElement(s.a,{className:"avatar",fixed:e.avatar.childImageSharp.fixed,alt:t,imgStyle:{borderRadius:"50%"}}),r.a.createElement("div",{className:"main-bio"},r.a.createElement("p",{className:"title"},"Hello, you can call me Dali."),r.a.createElement("p",null,"Someone who loves code, art, humanity, and believes that ",r.a.createElement("strong",null,"we need a more diverse software industry")," and that the development of new technologies as well as their access needs to be democratized. Today I teach code to inspire and encourage young people in territories of conflict and social vulnerability to change their lives and communities."),r.a.createElement("ul",{className:"horizontal-links",style:{marginBottom:Object(u.a)(1)}},A.a.map(function(e){return r.a.createElement("li",{key:e.kind},r.a.createElement("a",{className:"u-no-box-shadow",href:e.url},r.a.createElement(l.a,{icon:e.icon,color:"var(--gray)",title:"Link to my "+e.kind})))}))))},data:i})},h=a(204),p=a(203);a.d(t,"pageQuery",function(){return f});t.default=function(e){var t=e.data,a=e.location,n=t.site.siteMetadata.title;return r.a.createElement(h.a,{location:a,title:n},r.a.createElement(p.a,{title:"Home",keywords:["blog","gatsby","javascript","vuejs","vue","nodejs","node","reactjs","react","python","vainaweb","dalianny vieira","teaching","leadership"]}),r.a.createElement(m,null))};var f="1097489062"},198:function(e,t,a){"use strict";a.d(t,"a",function(){return A}),a.d(t,"b",function(){return u});var n=a(211),r=a.n(n),i=a(212),o=a.n(i),c=(a(191),["granville","serif"]),s=["neue-haas-unica","-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Helvetica","Arial","sans-serif"];o.a.overrideThemeStyles=function(){return{"h1, h2, h3, h4, h5, h6":{marginTop:"2.5rem"},"h1, h2":{fontFamily:c.join(","),lineHeight:"1.3em"},"h3, h4, h5, h6":{fontFamily:s.join(","),lineHeight:"1.3em"},a:{color:"var(--textLink)"},hr:{background:"var(--hr)"},"a.gatsby-resp-image-link":{boxShadow:"none"},"a.anchor":{boxShadow:"none"},'a.anchor svg[aria-hidden="true"]':{stroke:"var(--gray)"},"h1 code, h2 code, h3 code, h4 code, h5 code, h6 code":{fontSize:"inherit"},blockquote:{color:"inherit",borderLeftColor:"inherit",opacity:"0.8"},"blockquote.translation":{fontSize:"1rem"},footer:{fontSize:"0.8rem",display:"flex","justify-content":"space-between"},small:{color:"var(--gray)"},".blog-post figcaption":{fontSize:"0.8rem",color:"var(--gray)",textAlign:"center"}}},delete o.a.googleFonts,o.a.baseFontSize="18px",o.a.headerFontFamily=c,o.a.bodyFontFamily=s;var l=new r.a(o.a);var A=l.rhythm,u=l.scale},199:function(e,t,a){"use strict";a.d(t,"b",function(){return A});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(32),s=a.n(c);a.d(t,"a",function(){return s.a});a(200);var l=r.a.createContext({}),A=function(e){return r.a.createElement(l.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};A.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},200:function(e,t,a){var n;e.exports=(n=a(205))&&n.default||n},201:function(e,t,a){"use strict";var n=a(213);t.a=[{kind:"GitHub",icon:n.b,url:"https://github.com/daliannyvieira"},{kind:"Twitter",icon:n.d,url:"https://twitter.com/daliannyvieira"},{kind:"LinkedIn",icon:n.c,url:"https://www.linkedin.com/in/daliannyvieira/"},{kind:"Codepen",icon:n.a,url:"https://codepen.io/daliannyvieira"}]},203:function(e,t,a){"use strict";var n=a(208),r=a(0),i=a.n(r),o=a(214),c=a.n(o);t.a=function(e){var t=e.description,a=e.lang,r=void 0===a?"en":a,o=e.meta,s=void 0===o?[]:o,l=e.keywords,A=void 0===l?[]:l,u=e.title,d=n.data.site,m=t||d.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:r},title:u,titleTemplate:"%s | "+d.siteMetadata.title+" - A blog by "+d.siteMetadata.author,meta:[{name:"description",content:m},{property:"og:title",content:u},{property:"og:description",content:m},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:d.siteMetadata.author},{name:"twitter:title",content:u},{name:"twitter:description",content:m}].concat(A.length>0?{name:"keywords",content:A.join(", ")}:[]).concat(s)})}},204:function(e,t,a){"use strict";a(33);var n=a(0),r=a.n(n),i=a(199),o=a(198),c=a(207),s=a.n(c),l=a(201),A=a(7),u=a.n(A),d=a(202),m=a.n(d),h=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={numBurstsToGenerate:5,bursts:[]},t.rand=function(e){var t=e.min,a=void 0===t?0:t,n=e.max,r=void 0===n?1:n,i=e.int;return void 0===i||i?Math.floor(Math.random()*(r-a)+a):Math.random()*(r-a)+a},t.generateBursts=function(e){for(void 0===e&&(e=t.state.numBurstsToGenerate),t.setState({bursts:[]});t.state.bursts.length<t.state.numBurstsToGenerate;)t.state.bursts.push(new m.a.Burst({left:0,top:0,radius:{4:19},angle:t.rand({min:0,max:359}),children:{shape:"line",radius:t.rand({min:2,max:12}),scale:t.rand({min:.5,max:4,int:!1}),stroke:"rgb(\n                "+t.rand({min:175,max:255})+",\n                "+t.rand({min:175,max:255})+",\n                "+t.rand({min:175,max:255})+"\n              )",strokeDasharray:"100%",strokeDashoffset:{"-100%":"100%"},duration:t.rand({min:400,max:600}),easing:"quad.out"},onStart:function(){this.el.style.zIndex="9999"},onComplete:function(){this.el.style.zIndex="0"}}))},t.kaboom=function(e,a){e.stopPropagation(),t.state.bursts.length!==t.state.numBurstsToGenerate&&t.generateBursts(),t.state.bursts[t.rand({max:t.state.bursts.length})].tune({x:e.pageX,y:e.pageY}).replay(),a.props.onClick&&a.props.onClick()},t}return u()(t,e),t.prototype.render=function(){var e=this;return r.a.Children.map(this.props.children,function(t){return r.a.cloneElement(t,{onClick:function(a){return e.kaboom(a,t)},style:{cursor:"pointer",userSelect:"none"}})})},t}(r.a.Component),p=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={numBurstsToGenerate:10,bursts:[]},t.rand=function(e){var t=e.min,a=void 0===t?0:t,n=e.max,r=void 0===n?1:n,i=e.int;return void 0===i||i?Math.floor(Math.random()*(r-a)+a):Math.random()*(r-a)+a},t.generateBursts=function(e){for(void 0===e&&(e=t.state.numBurstsToGenerate),t.setState({bursts:[]});t.state.bursts.length<e;)t.state.bursts.push(new m.a.Burst({left:0,top:0,radius:{4:19},children:{top:0,left:0,shape:"rect",fill:"none",radius:t.rand({min:2,max:100}),stroke:"rgb(\n              "+t.rand({min:175,max:255})+",\n              "+t.rand({min:175,max:255})+",\n              "+t.rand({min:175,max:255})+"\n            )",strokeWidth:t.rand({min:1,max:2}),strokeDasharray:"100%",strokeDashoffset:{"-100%":"100%"},angle:t.rand({min:50,max:1e3}),duration:t.rand({min:1e3,max:4e3}),repeat:t.rand({min:1,max:10})},onStart:function(){this.el.style.zIndex="9999"}}))},t.kaboom=function(e,a){e.stopPropagation(),t.state.bursts.length!==t.state.numBurstsToGenerate&&t.generateBursts(),t.state.bursts[t.rand({max:t.state.bursts.length})].tune({x:e.pageX,y:e.pageY}).replay(),a.props.onClick&&a.props.onClick()},t}return u()(t,e),t.prototype.render=function(){var e=this;return r.a.Children.map(this.props.children,function(t){return r.a.cloneElement(t,{onClick:function(a){return e.kaboom(a,t)},style:{cursor:"pointer",userSelect:"none"}})})},t}(r.a.Component);function f(e,t){return t.pathname===e}t.a=function(e){var t,a=e.location,n=e.title,c=e.children;return r.a.createElement("div",{className:"main-container"},r.a.createElement(p,null,r.a.createElement("header",null,r.a.createElement("div",{className:"logo rainbow"},r.a.createElement(s.a,{style:{verticalAlign:"middle",marginRight:Object(o.a)(.25)}}),r.a.createElement("h2",{style:Object.assign({},Object(o.b)(.3),{display:"inline"})},r.a.createElement(i.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},n))),r.a.createElement("ul",{className:"horizontal-links"},r.a.createElement("li",null,r.a.createElement(i.a,{style:f("/",a)?{textDecoration:"underline"}:null,to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(i.a,((t={style:f("/posts",a)?{textDecoration:"underline"}:null,to:"/posts"}).to="/posts",t),"Posts"))))),r.a.createElement(h,null,r.a.createElement("main",null,c)),r.a.createElement(p,null,r.a.createElement("footer",null,"© ",(new Date).getFullYear()," Dali",r.a.createElement("div",null,l.a.map(function(e,t){return r.a.createElement(r.a.Fragment,{key:e.kind},r.a.createElement("a",{href:e.url},e.kind),t===l.a.length-1?"":r.a.createElement("span",null," / "))})))))}},205:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(59),s=a(2),l=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},207:function(e,t,a){var n=a(0);function r(e){return n.createElement("svg",e,[n.createElement("path",{d:"m86.2 61.6c-1.6-4.3-2.8-7.6.3-11.6.7-.9.5-2.1-.3-2.8-.9-.7-2.1-.5-2.8.3-4.6 5.8-2.6 11-.9 15.5 1.8 4.8 3.4 9-1.7 14.6-3.4 3.8-9 4.4-14.9 4.4.3-.4.6-.8.8-1.2 4.9-8.4 4.2-24.8 3.6-31.5 0-.4-.1-.9-.1-1.3h4.5c1.1 0 2-.9 2-2s-.9-2-2-2h-4.9c-.2-2-.5-3.9-.8-5.8h5.7c1.1 0 2-.9 2-2s-.9-2-2-2h-6.5c-1.6-7.6-3.8-14.1-6.4-18.8-.7-1.2-2-2-3.4-2h-.1c-1.4 0-2.6.7-3.4 1.8l-5.6 8.8h-10.1l-4.9-8.6c-.7-1.3-2-2-3.5-2h-.1c-1.5 0-2.8.9-3.5 2.2-2.3 4.6-4.2 11.1-5.6 18.6h-7.1c-1.1 0-2 .9-2 2s.9 2 2 2h6.4c-.3 1.9-.5 3.8-.7 5.8h-5.7c-1.1 0-2 .9-2 2s.9 2 2 2h5.3c-.1.8-.1 1.5-.2 2.3-.4 6.9-1 23.7 3.8 31.4 2.6 3.7 5.6 4.3 7.3 4.3h27.9c.3 0 .7 0 1.1-.1h2.3 3.5c6.7 0 13.6-.7 18.2-5.7 6.7-7.3 4.4-13.6 2.5-18.6zm-62.3-13.7h3.8c1.1 0 2-.9 2-2s-.9-2-2-2h-3.4c.2-1.9.5-3.9.8-5.8h2.6c1.1 0 2-.9 2-2s-.9-2-2-2h-1.9c1.2-6.6 3-12.5 5.1-16.8l6 10.7h14.6l6.8-10.7c2.4 4.3 4.4 10.2 5.8 16.8h-2.5c-1.1 0-2 .9-2 2s.9 2 2 2h3.3c.3 1.9.6 3.8.9 5.8h-4.1c-1.1 0-2 .9-2 2s.9 2 2 2h4.6c1.6 16.7-.3 32.9-6.9 34-.2 0-.4 0-.6 0s-.4 0-.5.1h-27.6c-6.3 0-8.2-16.8-6.8-34.1z",key:0}),n.createElement("circle",{cx:"38.4",cy:"34.9",r:"2",key:1}),n.createElement("circle",{cx:"49.9",cy:"34.9",r:"2",key:2})])}r.defaultProps={fill:"#FF7A60",width:"100pt",height:"100pt",version:"1.1",viewBox:"0 0 100 100"},e.exports=r,r.default=r},208:function(e){e.exports={data:{site:{siteMetadata:{title:"Dali",description:"Dalianny Vieira's personal blog",author:"Dalianny Vieira"}}}}},228:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGgABAAIDAQAAAAAAAAAAAAAAAAQFAQIDBv/EABYBAQEBAAAAAAAAAAAAAAAAAAMBAP/aAAwDAQACEAMQAAAB5yo+hpZsNKaEWegBp//EAB0QAQABBAMBAAAAAAAAAAAAAAECAwQREwASMUH/2gAIAQEAAQUC0hUt4dZJjla4ls34lFml379FD//EABgRAAIDAAAAAAAAAAAAAAAAAAIQESEx/9oACAEDAQE/AahFq//EABgRAAIDAAAAAAAAAAAAAAAAAAIQESEx/9oACAECAQE/AblDi//EAB4QAAEEAQUAAAAAAAAAAAAAAAEAAhEhcRASIjFB/9oACAEBAAY/AnbxhGOiFbCcKxDfFEUuLk3X/8QAHRABAAICAgMAAAAAAAAAAAAAAQARITFRYUGBkf/aAAgBAQABPyFRLTr1PBWEMsUzzpCE55EXLV9wKgHcXylrlBAM/9oADAMBAAIAAwAAABBzCPz/xAAYEQADAQEAAAAAAAAAAAAAAAAAARExIf/aAAgBAwEBPxBrQkNBrp//xAAYEQADAQEAAAAAAAAAAAAAAAAAASExQf/aAAgBAgEBPxBcCMzE4f/EAB4QAQACAgMAAwAAAAAAAAAAAAEAESFBMVFxYZHR/9oACAEBAAE/EGR8i3n7QWqudXsblvozMjVdeTAVKEtrv58j1jAVaHn5KHv4Nsaq8CgWcFJW6KNT/9k=",width:250,height:250,src:"/static/c4202e22dc7cb3af46427bbb2866212b/8e184/profile-pic2.jpg",srcSet:"/static/c4202e22dc7cb3af46427bbb2866212b/8e184/profile-pic2.jpg 1x,\n/static/c4202e22dc7cb3af46427bbb2866212b/73cd2/profile-pic2.jpg 1.5x,\n/static/c4202e22dc7cb3af46427bbb2866212b/72b55/profile-pic2.jpg 2x,\n/static/c4202e22dc7cb3af46427bbb2866212b/b1b6c/profile-pic2.jpg 3x"}}},site:{siteMetadata:{author:"Dalianny Vieira",social:{twitter:"daliannyvieira"}}}}}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-7891bbe7a4262e08eb54.js.map