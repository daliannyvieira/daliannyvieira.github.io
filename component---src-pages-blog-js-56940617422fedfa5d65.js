(self.webpackChunkdaliannyvieira=self.webpackChunkdaliannyvieira||[]).push([[7],{1496:function(e,t,r){"use strict";var a=r(8580);t.Z=void 0;var i,n=a(r(5666)),o=a(r(3793)),s=a(r(3246)),d=a(r(4362)),l=a(r(7294)),c=a(r(5697)),u=["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"],f=function(e){var t=(0,d.default)({},e),r=t.resolutions,a=t.sizes,i=t.critical;return r&&(t.fixed=r,delete t.resolutions),a&&(t.fluid=a,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=E([].concat(t.fluid))),t.fixed&&(t.fixed=E([].concat(t.fixed))),t},p=function(e){var t=e.media;return!!t&&(v&&!!window.matchMedia(t).matches)},g=function(e){var t=e.fluid,r=e.fixed,a=m(t||r||[]);return a&&a.src},m=function(e){if(v&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(p);if(-1!==t)return e[t];var r=e.findIndex((function(e){return void 0===e.media}));if(-1!==r)return e[r]}return e[0]},h=Object.create({}),b=function(e){var t=f(e),r=g(t);return h[r]||!1},y="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,v="undefined"!=typeof window,w=v&&window.IntersectionObserver,S=new WeakMap;function x(e){return e.map((function(e){var t=e.src,r=e.srcSet,a=e.srcSetWebp,i=e.media,n=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},a&&l.default.createElement("source",{type:"image/webp",media:i,srcSet:a,sizes:n}),r&&l.default.createElement("source",{media:i,srcSet:r,sizes:n}))}))}function E(e){var t=[],r=[];return e.forEach((function(e){return(e.media?t:r).push(e)})),[].concat(t,r)}function I(e){return e.map((function(e){var t=e.src,r=e.media,a=e.tracedSVG;return l.default.createElement("source",{key:t,media:r,srcSet:a})}))}function L(e){return e.map((function(e){var t=e.src,r=e.media,a=e.base64;return l.default.createElement("source",{key:t,media:r,srcSet:a})}))}function R(e,t){var r=e.srcSet,a=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?a:r)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var C=function(e,t){var r=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(S.has(e.target)){var t=S.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),S.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return r&&(r.observe(e),S.set(e,t)),function(){r.unobserve(e),S.delete(e)}},k=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",a=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?R(e,!0):"")+R(e)})).join("")+"<img "+l+o+s+r+a+t+n+i+d+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},O=l.default.forwardRef((function(e,t){var r=e.src,a=e.imageVariants,i=e.generateSources,n=e.spreadProps,o=e.ariaHidden,s=l.default.createElement(z,(0,d.default)({ref:t,src:r},n,{ariaHidden:o}));return a.length>1?l.default.createElement("picture",null,i(a),s):s})),z=l.default.forwardRef((function(e,t){var r=e.sizes,a=e.srcSet,i=e.src,n=e.style,o=e.onLoad,c=e.onError,f=e.loading,p=e.draggable,g=e.ariaHidden,m=(0,s.default)(e,u);return l.default.createElement("img",(0,d.default)({"aria-hidden":g,sizes:r,srcSet:a,src:i},m,{onLoad:o,onError:c,ref:t,loading:f,draggable:p,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));z.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var P=function(e){function t(t){var r;(r=e.call(this,t)||this).seenBefore=v&&b(t),r.isCritical="eager"===t.loading||t.critical,r.addNoScript=!(r.isCritical&&!t.fadeIn),r.useIOSupport=!y&&w&&!r.isCritical&&!r.seenBefore;var a=r.isCritical||v&&(y||!r.useIOSupport);return r.state={isVisible:a,imgLoaded:!1,imgCached:!1,fadeIn:!r.seenBefore&&t.fadeIn,isHydrated:!1},r.imageRef=l.default.createRef(),r.placeholderRef=t.placeholderRef||l.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,n.default)(r)),r.handleRef=r.handleRef.bind((0,n.default)(r)),r}(0,o.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.setState({isHydrated:v}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:b(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=C(e,(function(){var e=b(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},r.handleImageLoaded=function(){var e,t,r;e=this.props,t=f(e),(r=g(t))&&(h[r]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=f(this.props),t=e.title,r=e.alt,a=e.className,i=e.style,n=void 0===i?{}:i,o=e.imgStyle,s=void 0===o?{}:o,c=e.placeholderStyle,u=void 0===c?{}:c,p=e.placeholderClassName,g=e.fluid,h=e.fixed,b=e.backgroundColor,y=e.durationFadeIn,v=e.Tag,w=e.itemProp,S=e.loading,E=e.draggable,R=g||h;if(!R)return null;var C=!1===this.state.fadeIn||this.state.imgLoaded,P=!0===this.state.fadeIn&&!this.state.imgCached,V=(0,d.default)({opacity:C?1:0,transition:P?"opacity "+y+"ms":"none"},s),H="boolean"==typeof b?"lightgray":b,N={transitionDelay:y+"ms"},_=(0,d.default)({opacity:this.state.imgLoaded?0:1},P&&N,s,u),j={title:t,alt:this.state.isVisible?"":r,style:_,className:p,itemProp:w},T=this.state.isHydrated?m(R):R[0];if(g)return l.default.createElement(v,{className:(a||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden",maxWidth:T.maxWidth?T.maxWidth+"px":null,maxHeight:T.maxHeight?T.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(T.srcSet)},l.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/T.aspectRatio+"%"}}),H&&l.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:H,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},P&&N)}),T.base64&&l.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:T.base64,spreadProps:j,imageVariants:R,generateSources:L}),T.tracedSVG&&l.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:T.tracedSVG,spreadProps:j,imageVariants:R,generateSources:I}),this.state.isVisible&&l.default.createElement("picture",null,x(R),l.default.createElement(z,{alt:r,title:t,sizes:T.sizes,src:T.src,crossOrigin:this.props.crossOrigin,srcSet:T.srcSet,style:V,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:S,draggable:E})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:k((0,d.default)({alt:r,title:t,loading:S},T,{imageVariants:R}))}}));if(h){var W=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:T.width,height:T.height},n);return"inherit"===n.display&&delete W.display,l.default.createElement(v,{className:(a||"")+" gatsby-image-wrapper",style:W,ref:this.handleRef,key:"fixed-"+JSON.stringify(T.srcSet)},H&&l.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:H,width:T.width,opacity:this.state.imgLoaded?0:1,height:T.height},P&&N)}),T.base64&&l.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:T.base64,spreadProps:j,imageVariants:R,generateSources:L}),T.tracedSVG&&l.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:T.tracedSVG,spreadProps:j,imageVariants:R,generateSources:I}),this.state.isVisible&&l.default.createElement("picture",null,x(R),l.default.createElement(z,{alt:r,title:t,width:T.width,height:T.height,sizes:T.sizes,src:T.src,crossOrigin:this.props.crossOrigin,srcSet:T.srcSet,style:V,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:S,draggable:E})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:k((0,d.default)({alt:r,title:t,loading:S},T,{imageVariants:R}))}}))}return null},t}(l.default.Component);P.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var V=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),H=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});function N(e){return function(t,r,a){var i;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+a+"`, but their values are both `undefined`.");c.default.checkPropTypes(((i={})[r]=e,i),t,"prop",a)}}P.propTypes={resolutions:V,sizes:H,fixed:N(c.default.oneOfType([V,c.default.arrayOf(V)])),fluid:N(c.default.oneOfType([H,c.default.arrayOf(H)])),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var _=P;t.Z=_},6409:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return v}});var a=r(7294),i=r(3751),n=r(1603),o=r(9),s=r(5444),d=r(1496),l=r(3135),c=o.ZP.section.withConfig({displayName:"blog-list__Section",componentId:"sc-yiev4g-0"})(["display:flex;flex-direction:column;"]),u=o.ZP.div.withConfig({displayName:"blog-list__Wrapper",componentId:"sc-yiev4g-1"})(["display:flex;flex-direction:column;flex-wrap:wrap;justify-content:space-between;position:relative;@media (min-width:992px){margin:1rem 0;}"]),f=o.ZP.div.withConfig({displayName:"blog-list__Content",componentId:"sc-yiev4g-2"})(["display:flex;flex-wrap:wrap;"]),p=o.ZP.h3.withConfig({displayName:"blog-list__Title",componentId:"sc-yiev4g-3"})(["padding:0.55rem 0;margin:0 0 1rem;width:4rem;border-bottom:5px solid transparent;color:",";border-bottom-color:",";@media (min-width:992px){margin:0 1rem;padding:1rem 0;position:absolute;text-align:right;top:0;left:-5.45rem;}"],(function(e){return e.color}),(function(e){return e.color})),g=o.ZP.article.withConfig({displayName:"blog-list__Post",componentId:"sc-yiev4g-4"})(["position:relative;padding:0.25rem 0.85rem 0.25rem;margin:0em 1em 1em auto;width:100%;border:1px solid var(--color-backgroundHigh);border-bottom-width:4px;box-shadow:0 4px 6px -1px rgb(0 0 0 / 10%),0 2px 4px -1px rgb(0 0 0 / 6%);cursor:pointer;background:var(--color-backgroundHigh);transition:all 0.8s cubic-bezier(0.2,0.8,0.2,1) 0s;border-radius:6px;@media (min-width:992px){margin:0.45rem;min-height:320px;width:14rem;}&:hover{border-bottom-color:",";border-bottom-width:10px;}a{text-decoration:none;}"],(function(e){return e.color})),m=o.ZP.header.withConfig({displayName:"blog-list__PostCover",componentId:"sc-yiev4g-5"})(["position:relative;img,div{height:8rem;border-radius:6px;margin:1rem 0;}&::before{content:'';position:absolute;bottom:0;left:0;width:100%;height:2rem;border-radius:6px;background:linear-gradient(0deg,rgba(0,0,0,1) 0%,rgba(249,249,246,0) 100%);z-index:10;opacity:0.85;}"]),h=o.ZP.small.withConfig({displayName:"blog-list__Legend",componentId:"sc-yiev4g-6"})(["position:absolute;bottom:0;right:0;margin:0.5rem;text-shadow:1px 1px 2px black;z-index:10;color:var(--color-secondary);"]),b=o.ZP.h2.withConfig({displayName:"blog-list__PostTitle",componentId:"sc-yiev4g-7"})(["font-size:1.513rem;line-height:1.65rem;color:",";border-bottom-color:",";"],(function(e){return e.color}),(function(e){return e.color})),y=function(e){var t=e.posts,r=(0,l.v)(t,"year"),i=Object.keys(r).reverse();return a.createElement(c,null,a.createElement("h1",null,"Últimas postagens"),i.map((function(e,t){var i=(0,l.M)(t);return a.createElement(u,{color:i},a.createElement(p,{color:i},e),a.createElement(f,null,r[e].map((function(e){return function(e,t){return a.createElement(g,{color:t,onClick:function(){return(0,s.navigate)(e.slug)}},a.createElement(m,null,a.createElement(h,null,e.shortDate),a.createElement(d.Z,{fluid:e.cover.childImageSharp.fluid,alt:e.coverAuthor})),a.createElement(b,{color:t},e.title))}(e,i)}))))})))},v=function(e){var t=e.data,r=e.location,o=t.allMarkdownRemark.edges.map((function(e){return Object.assign({},e.node.frontmatter,e.node.fields)}));return a.createElement(n.Z,{location:r},a.createElement(i.Z,{title:"Blog",keywords:["blog","gatsby","javascript","vuejs","vue","nodejs","node","reactjs","react","python","vainaweb","dalianny vieira","teaching","leadership"]}),a.createElement(y,{posts:o}))}}}]);
//# sourceMappingURL=component---src-pages-blog-js-56940617422fedfa5d65.js.map