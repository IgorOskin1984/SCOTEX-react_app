"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[402,496,171,308,333,44,955,834,650],{5171:function(t,e,a){a.r(e),a.d(e,{AboutPage_1:function(){return _},default:function(){return d}});var n=a(2791),s=a(7496),l="content_content__Z81nO",o="content_actions__r5Gfb",i=a(924),c=a(8650),u=a(8350),m=a(3308),r=a(184),_=function(t){var e=(0,n.useRef)(null);return(0,n.useEffect)((function(){e.current.scrollIntoView({behavior:"smooth"})}),[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("section",{ref:e,className:s.default.aboutPage,children:(0,r.jsxs)("div",{className:s.default.container,children:[(0,r.jsxs)("div",{className:l,children:[(0,r.jsx)(u.Z,{payload:t.aboutPageContent}),(0,r.jsxs)("div",{className:o,children:[(0,r.jsx)(i.z,{buttonText:t.buttonText.ourServices}),(0,r.jsx)(i.z,{buttonText:t.buttonText.contactUs,buttonColor:t.buttonColor.gray})]})]}),(0,r.jsxs)("div",{className:s.default.images,children:[(0,r.jsxs)("div",{className:s.default.imageColumn,children:[(0,r.jsx)("div",{className:"".concat(s.default.imageItem," ").concat(s.default.item_1),children:(0,r.jsx)("img",{src:t.peoplsPhotos[0],alt:""})}),(0,r.jsx)("div",{className:"".concat(s.default.imageItem," ").concat(s.default.item_2),children:(0,r.jsx)("img",{src:t.peoplsPhotos[1],alt:""})})]}),(0,r.jsxs)("div",{className:s.default.imageColumn,children:[(0,r.jsx)("div",{className:"".concat(s.default.imageItem," ").concat(s.default.item_3),children:(0,r.jsx)("img",{src:t.peoplsPhotos[2],alt:""})}),(0,r.jsx)("div",{className:"".concat(s.default.imageItem," ").concat(s.default.item_4),children:(0,r.jsx)("img",{src:t.peoplsPhotos[3],alt:""})})]})]})]})}),(0,r.jsx)(c.default,{})]})},d=function(t){var e=t.peoplsPhotos,a=t.buttonText,s=t.buttonColor,l=t.aboutPageContent,o=(0,n.useRef)(null);return(0,n.useEffect)((function(){o.current.scrollIntoView({behavior:"smooth"})}),[]),(0,r.jsxs)("div",{ref:o,children:[(0,r.jsx)(_,{peoplsPhotos:e,buttonText:a,buttonColor:s,aboutPageContent:l}),(0,r.jsx)(m.default,{})]})}},1402:function(t,e,a){a.r(e);var n=a(3531),s=a(5171),l=(0,n.$j)((function(t){return{peoplsPhotos:t.aboutPage.peoplsPhotos,buttonText:t.commonSate.buttons.buttonTexts,buttonColor:t.commonSate.buttons.buttonColors,aboutPageContent:t.commonSate.content.aboutPageContent}}),null)(s.default);e.default=l},3308:function(t,e,a){a.r(e);var n=a(3531),s=a(3333),l=(0,n.$j)((function(t){return{whyUsPageContent:t.commonSate.content.whyUsPageContent,listItems:t.whyUsPage.listItems,largeImage:t.whyUsPage.images.large,smallImage:t.whyUsPage.images.small}}),null)(s.default);e.default=l},3333:function(t,e,a){a.r(e);a(2791);var n=a(3044),s=a(8350),l=a(184),o=function(t){var e=0;return t.map((function(t){return e+=1,(0,l.jsx)("li",{className:n.default.listItem,children:t},e)}))};e.default=function(t){return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("section",{className:n.default.whyUs,children:(0,l.jsxs)("div",{className:n.default.container,children:[(0,l.jsxs)("div",{className:n.default.images,children:[(0,l.jsx)("div",{className:n.default.img_01,children:(0,l.jsx)("img",{src:t.largeImage,alt:"largeImage"})}),(0,l.jsx)("div",{className:n.default.img_02,children:(0,l.jsx)("img",{src:t.smallImage,alt:"smallImage"})})]}),(0,l.jsxs)("div",{className:n.default.content,children:[(0,l.jsx)(s.Z,{payload:t.whyUsPageContent}),(0,l.jsx)("ul",{className:n.default.list,children:o(t.listItems)})]})]})})})}},955:function(t,e,a){a.r(e);a(2791);var n=a(834),s=a(184);e.default=function(t){return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("section",{className:n.default.container,children:[(0,s.jsx)("h2",{className:n.default.tittle,children:t.tittleText}),(0,s.jsx)("div",{className:n.default.items,children:(e=t.clientsImages,e.map((function(t){return(0,s.jsx)("div",{className:n.default.item,children:(0,s.jsx)("img",{src:t,alt:"img"})},t)})))})]})});var e}},8650:function(t,e,a){a.r(e);var n=a(3531),s=a(955),l=(0,n.$j)((function(t){return{clientsImages:t.commonSate.clients.images,tittleText:t.commonSate.clients.tittleText}}),null)(s.default);e.default=l},8350:function(t,e,a){a.d(e,{Z:function(){return m}});a(2791);var n="ContentComponent_wrapper__wLlzF",s="ContentComponent_label__kpe02",l="ContentComponent_title__BZPf8",o="ContentComponent_titleWithBefore__yPPRs",i="ContentComponent_text__fp+Zc",c=a(1087),u=a(184),m=function(t){var e=function(t){switch(t){case"why choose us":return"/aboutUs";case"Testimonials":return"/testimonials";case"Blog":return"/blog";default:return"/".concat(t)}}(t.payload.label);return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)("div",{className:n,children:[t.payload.label&&(0,u.jsx)(c.OL,{to:e,className:s,children:t.payload.label}),t.payload.label?(0,u.jsx)("h2",{className:l,children:t.payload.title}):(0,u.jsx)("h2",{className:o,children:t.payload.title}),(0,u.jsx)("div",{className:i,children:t.payload.text})]})})}},7496:function(t,e,a){a.r(e),e.default={aboutPage:"AboutPage_aboutPage__y5lNz",container:"AboutPage_container__szZnh",images:"AboutPage_images__bwmrW",imageColumn:"AboutPage_imageColumn__O9q2S",imageItem:"AboutPage_imageItem__iIPtp",item_1:"AboutPage_item_1__9F3vQ",item_4:"AboutPage_item_4__LW+BD",item_3:"AboutPage_item_3__sbMe-",item_2:"AboutPage_item_2__A9Z+N",content:"AboutPage_content__WDmSt",actions:"AboutPage_actions__Zp-Za"}},3044:function(t,e,a){a.r(e),e.default={whyUs:"WhyUs_whyUs__8mikn",container:"WhyUs_container__1V-Nl",images:"WhyUs_images__DCnMN",img_01:"WhyUs_img_01__-i79S",img_02:"WhyUs_img_02__bLz4v",content:"WhyUs_content__iBRdr",list:"WhyUs_list__Q1m5R",listItem:"WhyUs_listItem__qHCeY"}},834:function(t,e,a){a.r(e),e.default={container:"ClientsPage_container__YQ-1P",tittle:"ClientsPage_tittle__0Ptkq",items:"ClientsPage_items__xU+Jg",item:"ClientsPage_item__8yKNa"}}}]);
//# sourceMappingURL=402.4112e0f6.chunk.js.map