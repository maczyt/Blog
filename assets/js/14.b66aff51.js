(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{187:function(e,t,i){},209:function(e,t,i){"use strict";var n=i(187);i.n(n).a},224:function(e,t,i){"use strict";i.r(t);var n=[{active:!0,name:"facebook",label:"Facebook",link:()=>"#",meta:(e,t,i,n,a)=>({name:encodeURI(e),link:encodeURI(t),picture:encodeURI(i),caption:encodeURI(a),description:encodeURI(n)})},{active:!0,name:"twitter",label:"Twitter",link:(e,t,i,n,a)=>encodeURI(`https://twitter.com/intent/tweet?url=${t}&amp;text=${e}&amp;via=${a}`),target:"_blank"},{active:!1,name:"linkedin",label:"linkedin",link:(e,t,i,n)=>encodeURI(`https://www.linkedin.com/shareArticle?mini=true&amp;url=${t}&amp;title=${e}&amp;summary=${n}&amp;source=`),target:"_blank"},{active:!0,name:"google",label:"Google plus",link:(e,t)=>encodeURI(`https://plus.google.com/share?url=${t}`),target:"_blank"}],a=(i(4),{name:"SharePost",props:{post:{type:Object,required:!0}},data:()=>({networks:n}),mounted(){this.snippetFacebook(),this.snippetTwitter()},methods:{getFullURL(e){return this.$themeConfig.url+this.post.path+`?utm_source=${e}&amp;utm_medium=single-post&amp;utm_campaign=share`},getLinkInfo(e,t){const i="twitter"===t.name?this.$themeLocaleConfig.share.twitterVia:null;return t.link(e.title,this.getFullURL(t.name),`${this.$themeConfig.url}${e.coverName}.${this.$themeConfig.responsive.ext}`,e.excerpt,i)},snippetFacebook(){window.FB||(window.fbAsyncInit=(()=>{window.FB.init({appId:this.$themeConfig.share.facebook.appId,xfbml:!0,version:this.$themeConfig.share.facebook.version}),window.FB.AppEvents.logPageView()}),function(e,t,i,n){let a=null,s=e.getElementsByTagName(t)[0];e.getElementById(i)||((a=e.createElement(t)).id=i,a.src=`//connect.facebook.net/${n.$lang.replace("-","_")}/sdk.js`,s.parentNode.insertBefore(a,s))}(document,"script","facebook-jssdk",this))},facebook(e){const t=e.meta(this.post.title,this.$el.baseURI,`${this.$themeConfig.url}${this.post.coverName}.${this.$themeConfig.responsive.ext}`,this.post.excerpt,this.$themeLocaleConfig.share.facebookCaption);window.FB.ui({method:"feed",display:"popup",name:t.name,link:t.link+"?utm_source=facebook&amp;utm_medium=single-post&amp;utm_campaign=share",picture:t.picture,caption:t.caption,description:t.description})},snippetTwitter(){window.twttr||(window.twttr=((e,t,i)=>{var n=e.getElementsByTagName(t)[0],a=window.twttr||{};if(e.getElementById(i))return a;let s=e.createElement(t);return s.id=i,s.src="https://platform.twitter.com/widgets.js",n.parentNode.insertBefore(s,n),a._e=[],a.ready=(e=>{a._e.push(e)}),a})(document,"script","twitter-wjs"))},handle(e){"facebook"===e.name&&this.facebook(e)}}}),s=(i(209),i(0)),o=Object(s.a)(a,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"share"},[i("ul",{staticClass:"share__list"},[i("li",{staticClass:"share__item"},[i("span",{staticClass:"txt-share"},[e._v(e._s(e.$t("share"))+":")])]),e._v(" "),e._l(e.networks,function(t,n){return t.active?i("li",{key:t.name+"-"+n,staticClass:"share__item"},[i("a",{staticClass:"link share__link",class:"link--filler-s-"+t.name,attrs:{role:"button",href:e.getLinkInfo(e.post,t),title:t.label,target:t.target},on:{click:function(i){return e.handle(t)}}},[i("span",{staticClass:"icon"},[e._v(e._s(t.name)+"share")])])]):e._e()})],2),e._v(" "),i("div",{attrs:{id:"fb-root"}})])},[],!1,null,null,null);t.default=o.exports}}]);