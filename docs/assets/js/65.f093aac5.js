(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{336:function(t,n,i){"use strict";i.r(n);var c={name:"pl-button",props:{color:String,type:String,label:String,size:String,icon:{type:String,default:null},iconLeft:{type:String,default:null},iconRight:{type:String,default:null}},computed:{classNames:function(){var t=[];return this.size&&t.push("is-".concat(this.size)),this.color&&t.push("is-".concat(this.color)),this.type&&t.push("is-".concat(this.type)),t}},methods:{onClick:function(t){this.$emit("click",t)}}},o=i(0),s=Object(o.a)(c,function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("button",{staticClass:"button",class:t.classNames,on:{"!click":function(n){return t.onClick(n)}},nativeOn:{"!click":function(n){return t.onClick(n)}}},[t.iconLeft?i("pl-icon",{class:{"is-left":t.iconLeft},attrs:{icon:t.iconLeft}}):t._e(),t._v(" "),t.icon?i("pl-icon",{attrs:{icon:t.icon}}):t._e(),t._v(" "),t._t("default"),t._v(t._s(t.label)+"\n    "),t.iconRight?i("pl-icon",{class:{"is-right":t.iconRight},attrs:{icon:t.iconRight}}):t._e()],2)},[],!1,null,null,null);n.default=s.exports}}]);