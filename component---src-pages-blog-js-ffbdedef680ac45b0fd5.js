(self.webpackChunkdaliannyvieira=self.webpackChunkdaliannyvieira||[]).push([[7],{1496:function(e,t,r){"use strict";var a=r(8580);t.Z=void 0;var i,n=a(r(5666)),o=a(r(3793)),s=a(r(3246)),d=a(r(4362)),l=a(r(7294)),c=a(r(5697)),u=["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"],f=function(e){var t=(0,d.default)({},e),r=t.resolutions,a=t.sizes,i=t.critical;return r&&(t.fixed=r,delete t.resolutions),a&&(t.fluid=a,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=E([].concat(t.fluid))),t.fixed&&(t.fixed=E([].concat(t.fixed))),t},p=function(e){var t=e.media;return!!t&&(v&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,r=e.fixed,a=h(t||r||[]);return a&&a.src},h=function(e){if(v&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(p);if(-1!==t)return e[t];var r=e.findIndex((function(e){return void 0===e.media}));if(-1!==r)return e[r]}return e[0]},g=Object.create({}),b=function(e){var t=f(e),r=m(t);return g[r]||!1},y="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,v="undefined"!=typeof window,w=v&&window.IntersectionObserver,x=new WeakMap;function S(e){return e.map((function(e){var t=e.src,r=e.srcSet,a=e.srcSetWebp,i=e.media,n=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},a&&l.default.createElement("source",{type:"image/webp",media:i,srcSet:a,sizes:n}),r&&l.default.createElement("source",{media:i,srcSet:r,sizes:n}))}))}function E(e){var t=[],r=[];return e.forEach((function(e){return(e.media?t:r).push(e)})),[].concat(t,r)}function I(e){return e.map((function(e){var t=e.src,r=e.media,a=e.tracedSVG;return l.default.createElement("source",{key:t,media:r,srcSet:a})}))}function L(e){return e.map((function(e){var t=e.src,r=e.media,a=e.base64;return l.default.createElement("source",{key:t,media:r,srcSet:a})}))}function R(e,t){var r=e.srcSet,a=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?a:r)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var C=function(e,t){var r=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(x.has(e.target)){var t=x.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),x.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return r&&(r.observe(e),x.set(e,t)),function(){r.unobserve(e),x.delete(e)}},k=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",a=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?R(e,!0):"")+R(e)})).join("")+"<img "+l+o+s+r+a+t+n+i+d+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},O=l.default.forwardRef((function(e,t){var r=e.src,a=e.imageVariants,i=e.generateSources,n=e.spreadProps,o=e.ariaHidden,s=l.default.createElement(z,(0,d.default)({ref:t,src:r},n,{ariaHidden:o}));return a.length>1?l.default.createElement("picture",null,i(a),s):s})),z=l.default.forwardRef((function(e,t){var r=e.sizes,a=e.srcSet,i=e.src,n=e.style,o=e.onLoad,c=e.onError,f=e.loading,p=e.draggable,m=e.ariaHidden,h=(0,s.default)(e,u);return l.default.createElement("img",(0,d.default)({"aria-hidden":m,sizes:r,srcSet:a,src:i},h,{onLoad:o,onError:c,ref:t,loading:f,draggable:p,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));z.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var V=function(e){function t(t){var r;(r=e.call(this,t)||this).seenBefore=v&&b(t),r.isCritical="eager"===t.loading||t.critical,r.addNoScript=!(r.isCritical&&!t.fadeIn),r.useIOSupport=!y&&w&&!r.isCritical&&!r.seenBefore;var a=r.isCritical||v&&(y||!r.useIOSupport);return r.state={isVisible:a,imgLoaded:!1,imgCached:!1,fadeIn:!r.seenBefore&&t.fadeIn,isHydrated:!1},r.imageRef=l.default.createRef(),r.placeholderRef=t.placeholderRef||l.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,n.default)(r)),r.handleRef=r.handleRef.bind((0,n.default)(r)),r}(0,o.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.setState({isHydrated:v}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:b(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=C(e,(function(){var e=b(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},r.handleImageLoaded=function(){var e,t,r;e=this.props,t=f(e),(r=m(t))&&(g[r]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=f(this.props),t=e.title,r=e.alt,a=e.className,i=e.style,n=void 0===i?{}:i,o=e.imgStyle,s=void 0===o?{}:o,c=e.placeholderStyle,u=void 0===c?{}:c,p=e.placeholderClassName,m=e.fluid,g=e.fixed,b=e.backgroundColor,y=e.durationFadeIn,v=e.Tag,w=e.itemProp,x=e.loading,E=e.draggable,R=m||g;if(!R)return null;var C=!1===this.state.fadeIn||this.state.imgLoaded,V=!0===this.state.fadeIn&&!this.state.imgCached,P=(0,d.default)({opacity:C?1:0,transition:V?"opacity "+y+"ms":"none"},s),H="boolean"==typeof b?"lightgray":b,j={transitionDelay:y+"ms"},N=(0,d.default)({opacity:this.state.imgLoaded?0:1},V&&j,s,u),T={title:t,alt:this.state.isVisible?"":r,style:N,className:p,itemProp:w},_=this.state.isHydrated?h(R):R[0];if(m)return l.default.createElement(v,{className:(a||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden",maxWidth:_.maxWidth?_.maxWidth+"px":null,maxHeight:_.maxHeight?_.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(_.srcSet)},l.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/_.aspectRatio+"%"}}),H&&l.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:H,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},V&&j)}),_.base64&&l.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:_.base64,spreadProps:T,imageVariants:R,generateSources:L}),_.tracedSVG&&l.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:_.tracedSVG,spreadProps:T,imageVariants:R,generateSources:I}),this.state.isVisible&&l.default.createElement("picture",null,S(R),l.default.createElement(z,{alt:r,title:t,sizes:_.sizes,src:_.src,crossOrigin:this.props.crossOrigin,srcSet:_.srcSet,style:P,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:x,draggable:E})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:k((0,d.default)({alt:r,title:t,loading:x},_,{imageVariants:R}))}}));if(g){var W=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:_.width,height:_.height},n);return"inherit"===n.display&&delete W.display,l.default.createElement(v,{className:(a||"")+" gatsby-image-wrapper",style:W,ref:this.handleRef,key:"fixed-"+JSON.stringify(_.srcSet)},H&&l.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:H,width:_.width,opacity:this.state.imgLoaded?0:1,height:_.height},V&&j)}),_.base64&&l.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:_.base64,spreadProps:T,imageVariants:R,generateSources:L}),_.tracedSVG&&l.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:_.tracedSVG,spreadProps:T,imageVariants:R,generateSources:I}),this.state.isVisible&&l.default.createElement("picture",null,S(R),l.default.createElement(z,{alt:r,title:t,width:_.width,height:_.height,sizes:_.sizes,src:_.src,crossOrigin:this.props.crossOrigin,srcSet:_.srcSet,style:P,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:x,draggable:E})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:k((0,d.default)({alt:r,title:t,loading:x},_,{imageVariants:R}))}}))}return null},t}(l.default.Component);V.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var P=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),H=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});function j(e){return function(t,r,a){var i;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+a+"`, but their values are both `undefined`.");c.default.checkPropTypes(((i={})[r]=e,i),t,"prop",a)}}V.propTypes={resolutions:P,sizes:H,fixed:j(c.default.oneOfType([P,c.default.arrayOf(P)])),fluid:j(c.default.oneOfType([H,c.default.arrayOf(H)])),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var N=V;t.Z=N},1780:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return g}});var a=r(7294),i=r(6809),n=r(3751),o=r(5444),s=r(1496),d=r(9),l=d.ZP.div.withConfig({displayName:"posts__Wrap",componentId:"sc-1pvexwy-0"})(["display:flex;flex-direction:column;"]),c=d.ZP.section.withConfig({displayName:"posts__Container",componentId:"sc-1pvexwy-1"})(["display:flex;flex-direction:column;flex-wrap:wrap;justify-content:space-between;position:relative;@media (min-width:992px){margin:1rem 0;}h3{padding:0.55rem 0;margin:0 0 1rem;width:4rem;border-bottom:5px solid transparent;@media (min-width:992px){margin:0 1rem;padding:1rem 0;position:absolute;text-align:right;top:0;left:-5.45rem;}}&:nth-child(2){h3{border-bottom-color:#F583BA;color:#F583BA;}}&:nth-child(3){h3{border-bottom-color:#6DDAF2;color:#6DDAF2;}}&:nth-child(4){h3{border-bottom-color:#92E085;color:#92E085;}}&:nth-child(5){h3{border-bottom-color:#F5BD69;color:#F5BD69;}}&:nth-child(6){h3{border-bottom-color:#F2856D;color:#F2856D;}}"]),u=d.ZP.section.withConfig({displayName:"posts__PostsContainer",componentId:"sc-1pvexwy-2"})(["display:flex;flex-wrap:wrap;"]),f=d.ZP.article.withConfig({displayName:"posts__Post",componentId:"sc-1pvexwy-3"})(["position:relative;width:100%;box-shadow:rgba(52,61,68,0.1) 0px 1px 2px;background:#fff;border:1px solid rgba(52,61,68,0.05);border-bottom:4px solid rgba(52,61,68,0.05);border-image:initial;transition:all 0.8s cubic-bezier(0.2,0.8,0.2,1) 0s;margin:0em 1em 1em auto;border-radius:6px;padding:0.25rem 0.85rem 0.25rem;cursor:pointer;@media (min-width:992px){margin:0.45rem;max-width:14rem;}&:hover{transform:scale(1.015);box-shadow:rgba(0,0,0,0.15) 0px 10px 30px -10px;border-radius:0px 0px 6px 6px;border-bottom:4px solid #92E085;}a{text-decoration:none;}h2{font-size:1.513rem;line-height:1.65rem;}"]),p=d.ZP.header.withConfig({displayName:"posts__Cover",componentId:"sc-1pvexwy-4"})(["position:relative;img,div{height:10rem;border-radius:6px;margin:1rem 0;}&::after{content:'';width:100%;height:100%;position:absolute;top:0;left:0;background:#439145;height:10rem;margin:1rem 0;mix-blend-mode:screen;border-radius:6px;opacity:0.5;}&::before{content:'';width:100%;height:100%;position:absolute;bottom:0;left:0;height:2rem;border-radius:6px;opacity:0.65;background:linear-gradient(0deg,rgba(0,0,0,1) 0%,rgba(249,249,246,0) 100%);z-index:10;}"]),m=d.ZP.small.withConfig({displayName:"posts__Legend",componentId:"sc-1pvexwy-5"})(["position:absolute;bottom:0;z-index:10;right:0;margin:0.5rem;color:#f7c836;color:white;text-shadow:1px 1px 2px black;"]),h=function(e){var t,r=e.posts,i=(t="year",function(e){return e.reduce((function(e,r){var a=r[t];return e[a]=(e[a]||[]).concat(r),e}),{})})(r),n=Object.keys(i).reverse();return a.createElement(l,null,a.createElement("h1",null,"Últimas postagens"),n.map((function(e){return a.createElement(c,null,a.createElement("h3",null,e),a.createElement(u,null,i[e].reverse().map((function(e){return a.createElement(f,null,a.createElement(o.Link,{style:{boxShadow:"none"},to:"/blog"+e.slug},a.createElement(p,null,a.createElement(m,null,e.shortDate),a.createElement(s.Z,{fluid:e.cover.childImageSharp.fluid,alt:e.coverAuthor})),a.createElement("h2",null,e.title)))}))))})))},g=function(e){var t=e.data.allMarkdownRemark.edges.map((function(e){return Object.assign({},e.node.frontmatter,e.node.fields)}));return a.createElement(i.Z,null,a.createElement(n.Z,{title:"Blog",keywords:["blog","gatsby","javascript","vuejs","vue","nodejs","node","reactjs","react","python","vainaweb","dalianny vieira","teaching","leadership"]}),a.createElement(h,{posts:t}))}}}]);
//# sourceMappingURL=component---src-pages-blog-js-ffbdedef680ac45b0fd5.js.map