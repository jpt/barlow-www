webpackJsonp([0],Array(139).concat([function(n,e,o){function t(n){o(201)}var f=o(17)(o(140),o(199),t,null,null);n.exports=f.exports},function(n,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=o(68),f=o.n(t);e.default={data:function(){return{selectedStyle:"Roman",selectedWidth:"Regular",selectedWeight:"Regular",selectedCase:"Sentence case",bodyText:"There's a time when the operation of the machine becomes so odious, makes you so sick at heart, that you can't take part! You can't even passively take part! And you've got to put your bodies upon the gears and upon the wheels, upon the levers, upon all the apparatus, and you've got to make it stop! And you've got to indicate to the people who run it, to the people who own it, that unless you're free, the machine will be prevented from working at all!",weights:{Thin:{name:"Thin",css:100},UltraLight:{name:"UltraLight",css:200},Light:{name:"Light",css:300},Regular:{name:"Regular",css:400},Medium:{name:"Medium",css:500},DemiBold:{name:"DemiBold",css:600},Bold:{name:"Bold",css:700},ExtraBold:{name:"ExtraBold",css:800},Black:{name:"Black",css:900}},widths:["Regular","SemiCondensed","Condensed"],styles:["Roman","Oblique"],cases:["Uppercase","Lowercase","Sentence case","Title Case"],pairs:[[54,84],[48,82],[36,58],[30,52],[24,42],[18,30],[16,27],[14,24],[12,20]]}},methods:{updateText:function(n){this.bodyText=n.target.innerText},updateWeight:function(n){this.selectedWeight=n},updateWidth:function(n){this.selectedWidth=n},updateCase:function(n){this.selectedCase=n},updateStyle:function(n){this.selectedStyle=n},fontWeightCSS:function(n){return this.weights[n].css},fontName:function(n,e,o){return"Regular"===e&&(e=""),"Roman"===o&&(o=""),"Barlow-"+n+e+o}},computed:{selectedFontFamily:function(){return"Regular"===this.selectedWidth&&(this.selectedWidth=""),"Roman"===this.selectedStyle&&(this.selectedStyle=""),"Barlow-"+this.selectedWeight+this.selectedWidth+this.selectedStyle},allStyles:function(){for(var n=[],e=0;e<f()(this.weights).length;e++)for(var o=0;o<this.widths.length;o++)for(var t=0;t<this.styles.length;t++){var l=this.widths[o];"Regular"===l&&(l="");var s=this.styles[t];"Roman"===s&&(s="");var a=["Barlow-",f()(this.weights)[e],l,s].join("");n.push(a)}return n}}}},function(n,e,o){e=n.exports=o(47)(!0),e.push([n.i,"@font-face{font-family:Barlow-Black;src:url("+o(144)+")}@font-face{font-family:Barlow-BlackCondensed;src:url("+o(145)+")}@font-face{font-family:Barlow-BlackCondensedOblique;src:url("+o(146)+")}@font-face{font-family:Barlow-BlackOblique;src:url("+o(147)+")}@font-face{font-family:Barlow-BlackSemiCondensed;src:url("+o(148)+")}@font-face{font-family:Barlow-BlackSemiCondensedOblique;src:url("+o(149)+")}@font-face{font-family:Barlow-Bold;src:url("+o(150)+")}@font-face{font-family:Barlow-BoldCondensed;src:url("+o(151)+")}@font-face{font-family:Barlow-BoldCondensedOblique;src:url("+o(152)+")}@font-face{font-family:Barlow-BoldOblique;src:url("+o(153)+")}@font-face{font-family:Barlow-BoldSemiCondensed;src:url("+o(154)+")}@font-face{font-family:Barlow-BoldSemiCondensedOblique;src:url("+o(155)+")}@font-face{font-family:Barlow-DemiBold;src:url("+o(156)+")}@font-face{font-family:Barlow-DemiBoldCondensed;src:url("+o(157)+")}@font-face{font-family:Barlow-DemiBoldCondensedOblique;src:url("+o(158)+")}@font-face{font-family:Barlow-DemiBoldOblique;src:url("+o(159)+")}@font-face{font-family:Barlow-DemiBoldSemiCondensed;src:url("+o(160)+")}@font-face{font-family:Barlow-DemiBoldSemiCondensedOblique;src:url("+o(161)+")}@font-face{font-family:Barlow-ExtraBold;src:url("+o(162)+")}@font-face{font-family:Barlow-ExtraBoldCondensed;src:url("+o(163)+")}@font-face{font-family:Barlow-ExtraBoldCondensedOblique;src:url("+o(164)+")}@font-face{font-family:Barlow-ExtraBoldOblique;src:url("+o(165)+")}@font-face{font-family:Barlow-ExtraBoldSemiCondensed;src:url("+o(166)+")}@font-face{font-family:Barlow-ExtraBoldSemiCondensedOblique;src:url("+o(167)+")}@font-face{font-family:Barlow-Light;src:url("+o(168)+")}@font-face{font-family:Barlow-LightCondensed;src:url("+o(169)+")}@font-face{font-family:Barlow-LightCondensedOblique;src:url("+o(170)+")}@font-face{font-family:Barlow-LightOblique;src:url("+o(171)+")}@font-face{font-family:Barlow-LightSemiCondensed;src:url("+o(172)+")}@font-face{font-family:Barlow-LightSemiCondensedOblique;src:url("+o(173)+")}@font-face{font-family:Barlow-Medium;src:url("+o(174)+")}@font-face{font-family:Barlow-MediumCondensed;src:url("+o(175)+")}@font-face{font-family:Barlow-MediumCondensedOblique;src:url("+o(176)+")}@font-face{font-family:Barlow-MediumOblique;src:url("+o(177)+")}@font-face{font-family:Barlow-MediumSemiCondensed;src:url("+o(178)+")}@font-face{font-family:Barlow-MediumSemiCondensedOblique;src:url("+o(179)+")}@font-face{font-family:Barlow-Regular;src:url("+o(180)+")}@font-face{font-family:Barlow-RegularCondensed;src:url("+o(181)+")}@font-face{font-family:Barlow-RegularCondensedOblique;src:url("+o(182)+")}@font-face{font-family:Barlow-RegularOblique;src:url("+o(183)+")}@font-face{font-family:Barlow-RegularSemiCondensed;src:url("+o(184)+")}@font-face{font-family:Barlow-RegularSemiCondensedOblique;src:url("+o(185)+")}@font-face{font-family:Barlow-Thin;src:url("+o(186)+")}@font-face{font-family:Barlow-ThinCondensed;src:url("+o(187)+")}@font-face{font-family:Barlow-ThinCondensedOblique;src:url("+o(188)+")}@font-face{font-family:Barlow-ThinOblique;src:url("+o(189)+")}@font-face{font-family:Barlow-ThinSemiCondensed;src:url("+o(190)+")}@font-face{font-family:Barlow-ThinSemiCondensedOblique;src:url("+o(191)+")}@font-face{font-family:Barlow-UltraLight;src:url("+o(192)+")}@font-face{font-family:Barlow-UltraLightCondensed;src:url("+o(193)+")}@font-face{font-family:Barlow-UltraLightCondensedOblique;src:url("+o(194)+")}@font-face{font-family:Barlow-UltraLightOblique;src:url("+o(195)+")}@font-face{font-family:Barlow-UltraLightSemiCondensed;src:url("+o(196)+")}@font-face{font-family:Barlow-UltraLightSemiCondensedOblique;src:url("+o(197)+")}","",{version:3,sources:["/Users/tribby/projects/barlow-www/assets/fonts/fonts.css"],names:[],mappings:"AAAA,WACE,yBAA4B,AAC5B,iCAA4C,CAC7C,AACD,WACE,kCAAqC,AACrC,iCAAqD,CACtD,AACD,WACE,yCAA4C,AAC5C,iCAA4D,CAC7D,AACD,WACE,gCAAmC,AACnC,iCAAmD,CACpD,AACD,WACE,sCAAyC,AACzC,iCAAyD,CAC1D,AACD,WACE,6CAAgD,AAChD,iCAAgE,CACjE,AACD,WACE,wBAA2B,AAC3B,iCAA2C,CAC5C,AACD,WACE,iCAAoC,AACpC,iCAAoD,CACrD,AACD,WACE,wCAA2C,AAC3C,iCAA2D,CAC5D,AACD,WACE,+BAAkC,AAClC,iCAAkD,CACnD,AACD,WACE,qCAAwC,AACxC,kCAAwD,CACzD,AACD,WACE,4CAA+C,AAC/C,kCAA+D,CAChE,AACD,WACE,4BAA+B,AAC/B,kCAA+C,CAChD,AACD,WACE,qCAAwC,AACxC,kCAAwD,CACzD,AACD,WACE,4CAA+C,AAC/C,kCAA+D,CAChE,AACD,WACE,mCAAsC,AACtC,kCAAsD,CACvD,AACD,WACE,yCAA4C,AAC5C,kCAA4D,CAC7D,AACD,WACE,gDAAmD,AACnD,kCAAmE,CACpE,AACD,WACE,6BAAgC,AAChC,kCAAgD,CACjD,AACD,WACE,sCAAyC,AACzC,kCAAyD,CAC1D,AACD,WACE,6CAAgD,AAChD,kCAAgE,CACjE,AACD,WACE,oCAAuC,AACvC,kCAAuD,CACxD,AACD,WACE,0CAA6C,AAC7C,kCAA6D,CAC9D,AACD,WACE,iDAAoD,AACpD,kCAAoE,CACrE,AACD,WACE,yBAA4B,AAC5B,kCAA4C,CAC7C,AACD,WACE,kCAAqC,AACrC,kCAAqD,CACtD,AACD,WACE,yCAA4C,AAC5C,kCAA4D,CAC7D,AACD,WACE,gCAAmC,AACnC,kCAAmD,CACpD,AACD,WACE,sCAAyC,AACzC,kCAAyD,CAC1D,AACD,WACE,6CAAgD,AAChD,kCAAgE,CACjE,AACD,WACE,0BAA6B,AAC7B,kCAA6C,CAC9C,AACD,WACE,mCAAsC,AACtC,kCAAsD,CACvD,AACD,WACE,0CAA6C,AAC7C,kCAA6D,CAC9D,AACD,WACE,iCAAoC,AACpC,kCAAoD,CACrD,AACD,WACE,uCAA0C,AAC1C,kCAA0D,CAC3D,AACD,WACE,8CAAiD,AACjD,kCAAiE,CAClE,AACD,WACE,2BAA8B,AAC9B,kCAA8C,CAC/C,AACD,WACE,oCAAuC,AACvC,kCAAuD,CACxD,AACD,WACE,2CAA8C,AAC9C,kCAA8D,CAC/D,AACD,WACE,kCAAqC,AACrC,kCAAqD,CACtD,AACD,WACE,wCAA2C,AAC3C,kCAA2D,CAC5D,AACD,WACE,+CAAkD,AAClD,kCAAkE,CACnE,AACD,WACE,wBAA2B,AAC3B,kCAA2C,CAC5C,AACD,WACE,iCAAoC,AACpC,kCAAoD,CACrD,AACD,WACE,wCAA2C,AAC3C,kCAA2D,CAC5D,AACD,WACE,+BAAkC,AAClC,kCAAkD,CACnD,AACD,WACE,qCAAwC,AACxC,kCAAwD,CACzD,AACD,WACE,4CAA+C,AAC/C,kCAA+D,CAChE,AACD,WACE,8BAAiC,AACjC,kCAAiD,CAClD,AACD,WACE,uCAA0C,AAC1C,kCAA0D,CAC3D,AACD,WACE,8CAAiD,AACjD,kCAAiE,CAClE,AACD,WACE,qCAAwC,AACxC,kCAAwD,CACzD,AACD,WACE,2CAA8C,AAC9C,kCAA8D,CAC/D,AACD,WACE,kDAAqD,AACrD,kCAAqE,CACtE",file:"fonts.css",sourcesContent:["@font-face {\n  font-family: 'Barlow-Black';\n  src: url('~assets/fonts/Barlow-Black.woff');\n}\n@font-face {\n  font-family: 'Barlow-BlackCondensed';\n  src: url('~assets/fonts/Barlow-BlackCondensed.woff');\n}\n@font-face {\n  font-family: 'Barlow-BlackCondensedOblique';\n  src: url('~assets/fonts/Barlow-BlackCondensedOblique.woff');\n}\n@font-face {\n  font-family: 'Barlow-BlackOblique';\n  src: url('~assets/fonts/Barlow-BlackOblique.woff');\n}\n@font-face {\n  font-family: 'Barlow-BlackSemiCondensed';\n  src: url('~assets/fonts/Barlow-BlackSemiCondensed.woff');\n}\n@font-face {\n  font-family: 'Barlow-BlackSemiCondensedOblique';\n  src: url('~assets/fonts/Barlow-BlackSemiCondensedOblique.woff');\n}\n@font-face {\n  font-family: 'Barlow-Bold';\n  src: url('~assets/fonts/Barlow-Bold.woff');\n}\n@font-face {\n  font-family: 'Barlow-BoldCondensed';\n  src: url('~assets/fonts/Barlow-BoldCondensed.woff');\n}\n@font-face {\n  font-family: 'Barlow-BoldCondensedOblique';\n  src: url('~assets/fonts/Barlow-BoldCondensedOblique.woff');\n}\n@font-face {\n  font-family: 'Barlow-BoldOblique';\n  src: url('~assets/fonts/Barlow-BoldOblique.woff');\n}\n@font-face {\n  font-family: 'Barlow-BoldSemiCondensed';\n  src: url('~assets/fonts/Barlow-BoldSemiCondensed.woff');\n}\n@font-face {\n  font-family: 'Barlow-BoldSemiCondensedOblique';\n  src: url('~assets/fonts/Barlow-BoldSemiCondensedOblique.woff');\n}\n@font-face {\n  font-family: 'Barlow-DemiBold';\n  src: url('~assets/fonts/Barlow-DemiBold.woff');\n}\n@font-face {\n  font-family: 'Barlow-DemiBoldCondensed';\n  src: url('~assets/fonts/Barlow-DemiBoldCondensed.woff');\n}\n@font-face {\n  font-family: 'Barlow-DemiBoldCondensedOblique';\n  src: url('~assets/fonts/Barlow-DemiBoldCondensedOblique.woff');\n}\n@font-face {\n  font-family: 'Barlow-DemiBoldOblique';\n  src: url('~assets/fonts/Barlow-DemiBoldOblique.woff');\n}\n@font-face {\n  font-family: 'Barlow-DemiBoldSemiCondensed';\n  src: url('~assets/fonts/Barlow-DemiBoldSemiCondensed.woff');\n}\n@font-face {\n  font-family: 'Barlow-DemiBoldSemiCondensedOblique';\n  src: url('~assets/fonts/Barlow-DemiBoldSemiCondensedOblique.woff');\n}\n@font-face {\n  font-family: 'Barlow-ExtraBold';\n  src: url('~assets/fonts/Barlow-ExtraBold.woff');\n}\n@font-face {\n  font-family: 'Barlow-ExtraBoldCondensed';\n  src: url('~assets/fonts/Barlow-ExtraBoldCondensed.woff');\n}\n@font-face {\n  font-family: 'Barlow-ExtraBoldCondensedOblique';\n  src: url('~assets/fonts/Barlow-ExtraBoldCondensedOblique.woff');\n}\n@font-face {\n  font-family: 'Barlow-ExtraBoldOblique';\n  src: url('~assets/fonts/Barlow-ExtraBoldOblique.woff');\n}\n@font-face {\n  font-family: 'Barlow-ExtraBoldSemiCondensed';\n  src: url('~assets/fonts/Barlow-ExtraBoldSemiCondensed.woff');\n}\n@font-face {\n  font-family: 'Barlow-ExtraBoldSemiCondensedOblique';\n  src: url('~assets/fonts/Barlow-ExtraBoldSemiCondensedOblique.woff');\n}\n@font-face {\n  font-family: 'Barlow-Light';\n  src: url('~assets/fonts/Barlow-Light.woff');\n}\n@font-face {\n  font-family: 'Barlow-LightCondensed';\n  src: url('~assets/fonts/Barlow-LightCondensed.woff');\n}\n@font-face {\n  font-family: 'Barlow-LightCondensedOblique';\n  src: url('~assets/fonts/Barlow-LightCondensedOblique.woff');\n}\n@font-face {\n  font-family: 'Barlow-LightOblique';\n  src: url('~assets/fonts/Barlow-LightOblique.woff');\n}\n@font-face {\n  font-family: 'Barlow-LightSemiCondensed';\n  src: url('~assets/fonts/Barlow-LightSemiCondensed.woff');\n}\n@font-face {\n  font-family: 'Barlow-LightSemiCondensedOblique';\n  src: url('~assets/fonts/Barlow-LightSemiCondensedOblique.woff');\n}\n@font-face {\n  font-family: 'Barlow-Medium';\n  src: url('~assets/fonts/Barlow-Medium.woff');\n}\n@font-face {\n  font-family: 'Barlow-MediumCondensed';\n  src: url('~assets/fonts/Barlow-MediumCondensed.woff');\n}\n@font-face {\n  font-family: 'Barlow-MediumCondensedOblique';\n  src: url('~assets/fonts/Barlow-MediumCondensedOblique.woff');\n}\n@font-face {\n  font-family: 'Barlow-MediumOblique';\n  src: url('~assets/fonts/Barlow-MediumOblique.woff');\n}\n@font-face {\n  font-family: 'Barlow-MediumSemiCondensed';\n  src: url('~assets/fonts/Barlow-MediumSemiCondensed.woff');\n}\n@font-face {\n  font-family: 'Barlow-MediumSemiCondensedOblique';\n  src: url('~assets/fonts/Barlow-MediumSemiCondensedOblique.woff');\n}\n@font-face {\n  font-family: 'Barlow-Regular';\n  src: url('~assets/fonts/Barlow-Regular.woff');\n}\n@font-face {\n  font-family: 'Barlow-RegularCondensed';\n  src: url('~assets/fonts/Barlow-RegularCondensed.woff');\n}\n@font-face {\n  font-family: 'Barlow-RegularCondensedOblique';\n  src: url('~assets/fonts/Barlow-RegularCondensedOblique.woff');\n}\n@font-face {\n  font-family: 'Barlow-RegularOblique';\n  src: url('~assets/fonts/Barlow-RegularOblique.woff');\n}\n@font-face {\n  font-family: 'Barlow-RegularSemiCondensed';\n  src: url('~assets/fonts/Barlow-RegularSemiCondensed.woff');\n}\n@font-face {\n  font-family: 'Barlow-RegularSemiCondensedOblique';\n  src: url('~assets/fonts/Barlow-RegularSemiCondensedOblique.woff');\n}\n@font-face {\n  font-family: 'Barlow-Thin';\n  src: url('~assets/fonts/Barlow-Thin.woff');\n}\n@font-face {\n  font-family: 'Barlow-ThinCondensed';\n  src: url('~assets/fonts/Barlow-ThinCondensed.woff');\n}\n@font-face {\n  font-family: 'Barlow-ThinCondensedOblique';\n  src: url('~assets/fonts/Barlow-ThinCondensedOblique.woff');\n}\n@font-face {\n  font-family: 'Barlow-ThinOblique';\n  src: url('~assets/fonts/Barlow-ThinOblique.woff');\n}\n@font-face {\n  font-family: 'Barlow-ThinSemiCondensed';\n  src: url('~assets/fonts/Barlow-ThinSemiCondensed.woff');\n}\n@font-face {\n  font-family: 'Barlow-ThinSemiCondensedOblique';\n  src: url('~assets/fonts/Barlow-ThinSemiCondensedOblique.woff');\n}\n@font-face {\n  font-family: 'Barlow-UltraLight';\n  src: url('~assets/fonts/Barlow-UltraLight.woff');\n}\n@font-face {\n  font-family: 'Barlow-UltraLightCondensed';\n  src: url('~assets/fonts/Barlow-UltraLightCondensed.woff');\n}\n@font-face {\n  font-family: 'Barlow-UltraLightCondensedOblique';\n  src: url('~assets/fonts/Barlow-UltraLightCondensedOblique.woff');\n}\n@font-face {\n  font-family: 'Barlow-UltraLightOblique';\n  src: url('~assets/fonts/Barlow-UltraLightOblique.woff');\n}\n@font-face {\n  font-family: 'Barlow-UltraLightSemiCondensed';\n  src: url('~assets/fonts/Barlow-UltraLightSemiCondensed.woff');\n}\n@font-face {\n  font-family: 'Barlow-UltraLightSemiCondensedOblique';\n  src: url('~assets/fonts/Barlow-UltraLightSemiCondensedOblique.woff');\n}"],sourceRoot:""}])},,function(n,e,o){e=n.exports=o(47)(!0),e.i(o(141),""),e.push([n.i,'.preload{position:absolute;top:0;left:0;z-index:-1}.size{margin-top:35px;font-size:12px;color:#a9a9a9;margin-bottom:7px}.container,.styles{overflow:scroll!important}.examples{margin-left:208px;width:720px}h1{font-size:128px;font-weight:900;margin-left:200px;margin-bottom:30px}.width{font-size:1em}.styles{float:left;overflow:scroll;width:160px;position:fixed;top:30px;left:40px;height:100%}.styles>ul>li{-webkit-font-feature-settings:"smcp";font-feature-settings:"smcp";text-transform:lowercase;font-family:Barlow-Regular;letter-spacing:.07em;font-weight:500;font-size:14px;line-height:22px}.styles>ul>li:hover{cursor:pointer}p{font-size:12px;font-weight:400;line-height:16px}p,ul{margin-bottom:2em}ul{list-style-type:none;margin-right:2em}li{font-size:1em;line-height:1.35em;font-weight:400}.styles ul>ul:first-of-type{margin-right:4em}.thin{font-weight:100}.examples p:focus{outline:none}',"",{version:3,sources:["/Users/tribby/projects/barlow-www/pages/index.vue"],names:[],mappings:"AAEA,SAAS,kBAAkB,MAAM,OAAO,UAAU,CACjD,AACD,MAAM,gBAAgB,eAAe,cAAc,iBAAiB,CACnE,AACD,mBAAmB,yBAA0B,CAC5C,AACD,UAAU,kBAAkB,WAAW,CACtC,AACD,GAAG,gBAAgB,gBAAgB,kBAAkB,kBAAkB,CACtE,AACD,OAAO,aAAa,CACnB,AACD,QAAQ,WAAW,gBAAgB,YAAY,eAAe,SAAS,UAAU,WAAW,CAC3F,AACD,cAAc,qCAAqC,6BAA6B,yBAAyB,2BAA6B,qBAAsB,gBAAgB,eAAe,gBAAgB,CAC1M,AACD,oBAAoB,cAAc,CACjC,AACD,EAAoB,eAAe,gBAAgB,gBAAgB,CAClE,AACD,KAFE,iBAAkB,CAGnB,AADD,GAAG,qBAAqB,AAAkB,gBAAgB,CACzD,AACD,GAAG,cAAc,mBAAmB,eAAe,CAClD,AACD,4BAA4B,gBAAgB,CAC3C,AACD,MAAM,eAAe,CACpB,AACD,kBAAkB,YAAY,CAC7B",file:"index.vue",sourcesContent:['\n@import url(~assets/fonts/fonts.css);\n.preload{position:absolute;top:0;left:0;z-index:-1\n}\n.size{margin-top:35px;font-size:12px;color:#a9a9a9;margin-bottom:7px\n}\n.container,.styles{overflow:scroll !important\n}\n.examples{margin-left:208px;width:720px\n}\nh1{font-size:128px;font-weight:900;margin-left:200px;margin-bottom:30px\n}\n.width{font-size:1em\n}\n.styles{float:left;overflow:scroll;width:160px;position:fixed;top:30px;left:40px;height:100%\n}\n.styles>ul>li{-webkit-font-feature-settings:"smcp";font-feature-settings:"smcp";text-transform:lowercase;font-family:\'Barlow-Regular\';letter-spacing:0.07em;font-weight:500;font-size:14px;line-height:22px\n}\n.styles>ul>li:hover{cursor:pointer\n}\np{margin-bottom:2em;font-size:12px;font-weight:400;line-height:16px\n}\nul{list-style-type:none;margin-bottom:2em;margin-right:2em\n}\nli{font-size:1em;line-height:1.35em;font-weight:400\n}\n.styles ul>ul:first-of-type{margin-right:4em\n}\n.thin{font-weight:100\n}\n.examples p:focus{outline:none\n}\n'],sourceRoot:""}])},function(n,e,o){n.exports=o.p+"fonts/Barlow-Black.c9d9ac7.woff"},function(n,e,o){n.exports=o.p+"fonts/Barlow-BlackCondensed.a8c335e.woff"},function(n,e,o){n.exports=o.p+"fonts/Barlow-BlackCondensedOblique.fea11e0.woff"},function(n,e,o){n.exports=o.p+"fonts/Barlow-BlackOblique.246e0b3.woff"},function(n,e,o){n.exports=o.p+"fonts/Barlow-BlackSemiCondensed.1ee12fa.woff"},function(n,e,o){n.exports=o.p+"fonts/Barlow-BlackSemiCondensedOblique.58484e4.woff"},function(n,e,o){n.exports=o.p+"fonts/Barlow-Bold.0b745ee.woff"},function(n,e,o){n.exports=o.p+"fonts/Barlow-BoldCondensed.867ba5d.woff"},function(n,e,o){n.exports=o.p+"fonts/Barlow-BoldCondensedOblique.0bdac9b.woff"},function(n,e,o){n.exports=o.p+"fonts/Barlow-BoldOblique.3943b07.woff"},function(n,e,o){n.exports=o.p+"fonts/Barlow-BoldSemiCondensed.3c2bfcb.woff"},function(n,e,o){n.exports=o.p+"fonts/Barlow-BoldSemiCondensedOblique.6cf0a1c.woff"},function(n,e,o){n.exports=o.p+"fonts/Barlow-DemiBold.fcc92e9.woff"},function(n,e,o){n.exports=o.p+"fonts/Barlow-DemiBoldCondensed.7ce8d0c.woff"},function(n,e,o){n.exports=o.p+"fonts/Barlow-DemiBoldCondensedOblique.e834d3f.woff"},function(n,e,o){n.exports=o.p+"fonts/Barlow-DemiBoldOblique.2c8aa58.woff"},function(n,e,o){n.exports=o.p+"fonts/Barlow-DemiBoldSemiCondensed.b5b41a4.woff"},function(n,e,o){n.exports=o.p+"fonts/Barlow-DemiBoldSemiCondensedOblique.edea63b.woff"},function(n,e,o){n.exports=o.p+"fonts/Barlow-ExtraBold.a9aab33.woff"},function(n,e,o){n.exports=o.p+"fonts/Barlow-ExtraBoldCondensed.b1d3e0b.woff"},function(n,e,o){n.exports=o.p+"fonts/Barlow-ExtraBoldCondensedOblique.340dc40.woff"},function(n,e,o){n.exports=o.p+"fonts/Barlow-ExtraBoldOblique.ff0e036.woff"},function(n,e,o){n.exports=o.p+"fonts/Barlow-ExtraBoldSemiCondensed.b4c46d8.woff"},function(n,e,o){n.exports=o.p+"fonts/Barlow-ExtraBoldSemiCondensedOblique.2e1dfbb.woff"},function(n,e,o){n.exports=o.p+"fonts/Barlow-Light.502a6bf.woff"},function(n,e,o){n.exports=o.p+"fonts/Barlow-LightCondensed.903899d.woff"},function(n,e,o){n.exports=o.p+"fonts/Barlow-LightCondensedOblique.44b75c3.woff"},function(n,e,o){n.exports=o.p+"fonts/Barlow-LightOblique.216c809.woff"},function(n,e,o){n.exports=o.p+"fonts/Barlow-LightSemiCondensed.acfc718.woff"},function(n,e,o){n.exports=o.p+"fonts/Barlow-LightSemiCondensedOblique.91ef89d.woff"},function(n,e,o){n.exports=o.p+"fonts/Barlow-Medium.78f72fa.woff"},function(n,e,o){n.exports=o.p+"fonts/Barlow-MediumCondensed.b4c57d5.woff"},function(n,e,o){n.exports=o.p+"fonts/Barlow-MediumCondensedOblique.608a9e0.woff"},function(n,e,o){n.exports=o.p+"fonts/Barlow-MediumOblique.6025802.woff"},function(n,e,o){n.exports=o.p+"fonts/Barlow-MediumSemiCondensed.e0a2eca.woff"},function(n,e,o){n.exports=o.p+"fonts/Barlow-MediumSemiCondensedOblique.c351a3e.woff"},function(n,e,o){n.exports=o.p+"fonts/Barlow-Regular.87e52ae.woff"},function(n,e,o){n.exports=o.p+"fonts/Barlow-RegularCondensed.5ce0b4a.woff"},function(n,e,o){n.exports=o.p+"fonts/Barlow-RegularCondensedOblique.5efa06c.woff"},function(n,e,o){n.exports=o.p+"fonts/Barlow-RegularOblique.2f53b9c.woff"},function(n,e,o){n.exports=o.p+"fonts/Barlow-RegularSemiCondensed.b80b3fe.woff"},function(n,e,o){n.exports=o.p+"fonts/Barlow-RegularSemiCondensedOblique.57be0ad.woff"},function(n,e,o){n.exports=o.p+"fonts/Barlow-Thin.58f7189.woff"},function(n,e,o){n.exports=o.p+"fonts/Barlow-ThinCondensed.2874af5.woff"},function(n,e,o){n.exports=o.p+"fonts/Barlow-ThinCondensedOblique.6a2a515.woff"},function(n,e,o){n.exports=o.p+"fonts/Barlow-ThinOblique.c0865ac.woff"},function(n,e,o){n.exports=o.p+"fonts/Barlow-ThinSemiCondensed.53f52b5.woff"},function(n,e,o){n.exports=o.p+"fonts/Barlow-ThinSemiCondensedOblique.d3f44bb.woff"},function(n,e,o){n.exports=o.p+"fonts/Barlow-UltraLight.07e52a1.woff"},function(n,e,o){n.exports=o.p+"fonts/Barlow-UltraLightCondensed.a5fb81f.woff"},function(n,e,o){n.exports=o.p+"fonts/Barlow-UltraLightCondensedOblique.485a7c1.woff"},function(n,e,o){n.exports=o.p+"fonts/Barlow-UltraLightOblique.809c812.woff"},function(n,e,o){n.exports=o.p+"fonts/Barlow-UltraLightSemiCondensed.850f90d.woff"},function(n,e,o){n.exports=o.p+"fonts/Barlow-UltraLightSemiCondensedOblique.6376cc8.woff"},,function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,o=n._self._c||e;return o("div",{staticClass:"container"},[o("div",{staticClass:"preload"},[n._l(n.allStyles,function(e){return[o("span",{style:{fontFamily:e}},[n._v("‌")])]})],2),o("div",[o("h1",{style:{fontFamily:n.selectedFontFamily,fontWeight:n.fontWeightCSS(n.selectedWeight)}},[n._v("Barlow")])]),o("div",{staticClass:"styles"},[o("ul",n._l(n.weights,function(e){return o("li",[o("a",{on:{click:function(o){n.updateWeight(e.name)}}},[n._v(n._s(e.name)+" ")]),e.name===n.selectedWeight?[n._v("*")]:n._e()],2)})),o("ul",n._l(n.widths,function(e){return o("li",[o("a",{on:{click:function(o){n.updateWidth(e)}}},[n._v(n._s(e)+" ")]),e===n.selectedWidth?[n._v("*")]:n._e(),""===n.selectedWidth&&"Regular"===e?[n._v("*")]:n._e()],2)})),o("ul",n._l(n.styles,function(e){return o("li",[o("a",{on:{click:function(o){n.updateStyle(e)}}},[n._v(n._s(e)+" ")]),e===n.selectedStyle?[n._v("*")]:n._e(),""===n.selectedStyle&&"Roman"===e?[n._v("*")]:n._e()],2)})),o("ul",n._l(n.cases,function(e){return o("li",[o("a",{on:{click:function(o){n.updateCase(e)}}},[n._v(n._s(e)+" ")]),e===n.selectedCase?[n._v("*")]:n._e()],2)}))]),o("div",{staticClass:"examples"},n._l(n.pairs,function(e){return o("div",[o("div",{staticClass:"size"},[n._v(n._s(e[0])+"px / "+n._s(e[1])+"px")]),o("p",{style:{fontStyle:n.selectedStyle,fontSize:e[0]+"px",lineHeight:e[1]+"px",fontFamily:n.selectedFontFamily},attrs:{contenteditable:"",spellcheck:"false"},on:{input:n.updateText}},[n._v(n._s(n.bodyText))])])}))])},staticRenderFns:[]}},,function(n,e,o){var t=o(143);"string"==typeof t&&(t=[[n.i,t,""]]),t.locals&&(n.exports=t.locals);o(48)("fcea1100",t,!0)}]));