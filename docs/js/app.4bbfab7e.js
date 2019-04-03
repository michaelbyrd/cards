(function(e){function t(t){for(var r,a,c=t[0],u=t[1],o=t[2],d=0,f=[];d<c.length;d++)a=c[d],s[a]&&f.push(s[a][0]),s[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(f.length)f.shift()();return i.push.apply(i,o||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,c=1;c<n.length;c++){var u=n[c];0!==s[u]&&(r=!1)}r&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},s={app:0},i=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var o=0;o<c.length;o++)t(c[o]);var l=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("64a9"),s=n.n(r);s.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("h1",[e._v("Remaining Sets: "+e._s(e.remainingSetsCount))]),n("h4",[e._v("Remaining attempts: "+e._s(e.numberOfTries))]),n("hr"),n("div",{staticClass:"deck"},e._l(e.cards,function(t){return n("Card",{key:t.id,attrs:{value:t.rank,suit:t.suit,selected:t.selected,completed:t.completed},on:{flip:function(n){return e.onFlip(t)}}})}),1),e.gameOver?n("div",[n("hr"),0==e.remainingSetsCount?n("div",[e._v("\n      !!!CONGRATULATIONS!!!!\n      "),n("br"),n("button",{on:{click:function(t){return e.reset()}}},[e._v("Play Again")])]):n("div",[n("button",{on:{click:function(t){return e.reset()}}},[e._v("Try Again")])]),n("hr")]):e._e()])},i=[],a=(n("ac6a"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card",on:{click:function(t){return e.$emit("flip")}}},[e.showCard?[n("span",{class:e.suitToColor()},[e._v("\n      "+e._s(e.value)+"\n      "+e._s(e.suitMap[e.suit])+"\n    ")])]:[n("span",[e._v("\n      X\n    ")])]],2)}),c=[],u={name:"Card",props:{value:String,suit:String,selected:{type:Boolean,default:!1},completed:{type:Boolean,default:!1}},data:function(){return{suitMap:{hearts:"♥",diamonds:"♦",spades:"♠",clubs:"♣"}}},computed:{showCard:function(){return this.selected||this.completed}},methods:{suitToColor:function(){return"hearts"==this.suit||"diamonds"==this.suit?"red":"black"}}},o=u,l=(n("cff2"),n("2877")),d=Object(l["a"])(o,a,c,!1,null,"7a5f793f",null),f=d.exports,h=5,p=["10","J","Q","K","A"],m=["hearts","spades","hearts","spades"],v={name:"app",components:{Card:f},data:function(){return{ranks:p,suits:m,cards:[],displayDeck:!0,numberOfTries:h}},computed:{selectedCards:function(){return this.cards.filter(function(e){return e.selected})},completedCards:function(){return this.cards.filter(function(e){return e.completed})},remainingSetsCount:function(){return(this.cards.length-this.completedCards.length)/2},gameOver:function(){return 0==this.numberOfTries||0==this.remainingSetsCount}},created:function(){this.initializeDeck()},methods:{reset:function(){this.cards=[],this.initializeDeck(),this.shuffle(),this.numberOfTries=h},initializeDeck:function(){for(var e=1,t=0;t<this.suits.length;t++)for(var n=0;n<this.ranks.length;n++){var r={id:e,rank:this.ranks[n],suit:this.suits[t],selected:!1,completed:!1};this.cards.push(r),e++}},onFlip:function(e){if(this.gameOver||e.completed)return"early";this.selectedCards.length>=2&&this.selectedCards.forEach(function(e){e.selected=!1}),e.selected=!e.selected,this.selectedCardsMatch()&&this.selectedCards.forEach(function(e){e.completed=!0})},selectedCardsMatch:function(){return!(this.selectedCards.length<2)&&(this.selectedCards[0].suit==this.selectedCards[1].suit&&this.selectedCards[0].rank==this.selectedCards[1].rank||(this.numberOfTries-=1,!1))},shuffle:function(){var e,t,n=this.cards.length;while(0!==n)t=Math.floor(Math.random()*n),n-=1,e=this.cards[n],this.$set(this.cards,n,this.cards[t]),this.cards[t]=e;return this.cards}}},b=v,g=(n("034f"),Object(l["a"])(b,s,i,!1,null,null,null)),C=g.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(C)}}).$mount("#app")},"64a9":function(e,t,n){},cff2:function(e,t,n){"use strict";var r=n("fb71"),s=n.n(r);s.a},fb71:function(e,t,n){}});
//# sourceMappingURL=app.4bbfab7e.js.map