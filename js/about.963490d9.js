(this["webpackJsonp"]=this["webpackJsonp"]||[]).push([["about"],{"08a0":function(t,e,n){t.exports=n.p+"img/dp.de586225.jpeg"},"0ca6":function(t,e,n){"use strict";n("d9a4")},"17c2":function(t,e,n){"use strict";var i=n("b727").forEach,a=n("a640"),r=n("ae40"),o=a("forEach"),s=r("forEach");t.exports=o&&s?[].forEach:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}},"300a":function(t,e,n){"use strict";n("3627")},3627:function(t,e,n){},4160:function(t,e,n){"use strict";var i=n("23e7"),a=n("17c2");i({target:"Array",proto:!0,forced:[].forEach!=a},{forEach:a})},"65f0":function(t,e,n){var i=n("861d"),a=n("e8b5"),r=n("b622"),o=r("species");t.exports=function(t,e){var n;return a(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!a(n.prototype)?i(n)&&(n=n[o],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},a11e:function(t,e,n){t.exports=n.p+"js/0.2f46b732.worker.js"},a640:function(t,e,n){"use strict";var i=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&i((function(){n.call(null,e||function(){throw 1},1)}))}},ae40:function(t,e,n){var i=n("83ab"),a=n("d039"),r=n("5135"),o=Object.defineProperty,s={},c=function(t){throw t};t.exports=function(t,e){if(r(s,t))return s[t];e||(e={});var n=[][t],u=!!r(e,"ACCESSORS")&&e.ACCESSORS,l=r(e,0)?e[0]:c,f=r(e,1)?e[1]:void 0;return s[t]=!!n&&!a((function(){if(u&&!i)return!0;var t={length:-1};u?o(t,1,{enumerable:!0,get:c}):t[1]=1,n.call(t,l,f)}))}},b2a7:function(t){t.exports=JSON.parse('{"name":"Y. Sriram Sai","prof":"Software Engineer","DOB":"14/04/1996","place":"Razole","skills":["html","css","java script","Vue","React","Angular","Hapi","Knex","MongoDB","MySQL","Python","Django"],"experinec":"2Y 11Months"}')},b727:function(t,e,n){var i=n("0366"),a=n("44ad"),r=n("7b0b"),o=n("50c4"),s=n("65f0"),c=[].push,u=function(t){var e=1==t,n=2==t,u=3==t,l=4==t,f=6==t,h=7==t,d=5==t||f;return function(v,m,p,b){for(var g,w,y=r(v),C=a(y),x=i(m,p,3),k=o(C.length),E=0,_=b||s,A=e?_(v,k):n||h?_(v,0):void 0;k>E;E++)if((d||E in C)&&(g=C[E],w=x(g,E,y),t))if(e)A[E]=w;else if(w)switch(t){case 3:return!0;case 5:return g;case 6:return E;case 2:c.call(A,g)}else switch(t){case 4:return!1;case 7:c.call(A,g)}return f?-1:u||l?l:A}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterOut:u(7)}},bb51:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("my-details",{staticClass:"vh-100 vw-100",attrs:{data:t.data}}),n("nav-bar",{staticClass:"p-0 m-0"}),t.hideComponent?t._e():n("Bounce"),t.hideComponent?t._e():n("Collasion"),t.hideComponent?t._e():n("image-animation"),t.hideComponent?t._e():n("particle-animation"),t.hideComponent?t._e():n("Rain")],1)},a=[],r=(n("d3b7"),n("b2a7")),o=function(){return n.e("chunk-2d0b1a62").then(n.bind(null,"216c"))},s=function(){return n.e("chunk-6151be2c").then(n.bind(null,"fda7"))},c=function(){return n.e("chunk-3d83f990").then(n.bind(null,"4218"))},u=function(){return Promise.resolve().then(n.bind(null,"d45e"))},l=function(){return n.e("chunk-ec1490ec").then(n.bind(null,"4e5f"))},f=function(){return n.e("chunk-5ba72e2c").then(n.bind(null,"edf8"))},h={name:"Home",components:{NavBar:o,MyDetails:function(){return n.e("chunk-796ecc96").then(n.bind(null,"2959"))},Bounce:s,Collasion:c,ImageAnimation:u,ParticleAnimation:l,Rain:f},data:function(){return{data:r,hideComponent:!0}},methods:{}},d=h,v=(n("300a"),n("2877")),m=Object(v["a"])(d,i,a,!1,null,"c62128be",null);e["default"]=m.exports},c4b9:function(t,e,n){"use strict";(function(t){n("4160");var i=n("08a0"),a=n.n(i);e["a"]={mounted:function(){this.startPrepartion()},data:function(){return{isHidden:!0,worker:null,Ccanvas:null,canvas:null,image:null}},methods:{startPrepartion:function(){var e=this;this.worker=new Worker(t,void 0),this.$refs.test.height=this.$refs.dummy.height=screen.availHeight/1.5,this.$refs.test.width=this.$refs.dummy.width=screen.availWidth/2,this.canvas=this.$refs.test.transferControlToOffscreen();var n=["mousemove","moseover","touchmove","touchstart","mouseleave","touchend"];n.forEach((function(t){e.$refs.test.addEventListener(t,e.debounce((function(t){var n=t.pageX,i=t.pageY;e.worker.postMessage({isInitial:!1,type:t.type,mouse:{x:n,y:i}})})),1e3)})),this.init()},init:function(){var t=this;this.image=new Image,this.image.src=a.a;var e=[];this.image.onload=function(){var n=t.$refs.dummy,i=n.getContext("2d");t.image.width=n.width,t.image.height=n.height,i.drawImage(t.image,0,0,n.width,n.height),e=i.getImageData(0,0,n.width,n.height),i.clearRect(0,0,n.width,n.height),t.worker.postMessage({isInitial:!0,canvas:t.canvas,image:e},[t.canvas])}},debounce:function(t,e){var n;return function(){var i=this,a=arguments;clearTimeout(n),n=setTimeout((function(){return t.apply(i,a)}),e)}}},destoryed:function(){this.worker.terminate()}}}).call(this,n("a11e"))},d45e:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"position-relative vw-100 vh-100 p-0 m-0"},[n("canvas",{ref:"test",staticClass:"position-absolute canvas-img"}),n("canvas",{ref:"dummy",staticClass:"position-absolute dummy canvas-img"})])},a=[],r=n("c4b9"),o=r["a"],s=(n("0ca6"),n("2877")),c=Object(s["a"])(o,i,a,!1,null,null,null);e["default"]=c.exports},d9a4:function(t,e,n){},e46f:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"introduction vh-100 vw-100 position-relative"},[n("div",{staticClass:"position-absolute h-100 w-100 row align-content-center justify-content-center m-0 p-0"},[t.isHidden?n("particles-bg",{on:{detach:function(e){t.isHidden,t.isHidden}}}):t._e()],1)])},a=[],r=n("d45e"),o={name:"introduction",components:{ParticlesBg:r["default"]},data:function(){return{isHidden:!0}}},s=o,c=n("2877"),u=Object(c["a"])(s,i,a,!1,null,"1793fc7e",null);e["default"]=u.exports},e8b5:function(t,e,n){var i=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==i(t)}}}]);
//# sourceMappingURL=about.963490d9.js.map