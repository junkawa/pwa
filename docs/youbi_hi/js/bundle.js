!function(e){var t={};function s(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=t,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=1)}([function(e,t,s){"use strict";const a=["sun","mon","tue","wed","thu","fri","sat"],n={mon:"月曜日",tue:"火曜日",wed:"水曜日",thu:"木曜日",fri:"金曜日",sat:"土曜日",sun:"日曜日"};let r="1",c="8",o="1",i="8";e.exports={setTensplace:e=>{switch(e){case"0":case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":r=e;break;default:throw new Error("invalid argument:"+e)}},setOnesplace:e=>{switch(e){case"0":case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":c=e;break;default:throw new Error("invalid argument:"+e)}},setMonth:e=>{switch(e){case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":case"10":case"11":case"12":i=e;break;default:throw new Error("invalid argument:"+e)}},setWeek:e=>{switch(e){case"0":case"1":case"2":case"3":case"4":case"5":case"6":o=e;break;default:throw new Error("invalid argument:"+e)}},getTextView1:()=>((e,t,s,r)=>`20${e}${t}年${s}月 ${n[a[r]]}`)(r,c,i,o),getTextView2:()=>((e,t,s,a)=>{const n=`20${e}${t}/${s}/1`;let r=new Date(n);const c=new Date(r.getFullYear(),r.getMonth()+1,0).getDate(),o=r.getDay();let i=1,u="";for(let e=i+=a>=o?a-o:a-o+7;e<=c;e+=7)u+=`${e}日 `;return u.trim()})(r,c,i,o)}},function(e,t,s){"use strict";var a=s(0);const n=()=>{r(),c()},r=()=>{$("#view1").text(a.getTextView1())},c=()=>{$("#view2").text(a.getTextView2())};(()=>{(e=>{const t=e.getFullYear(),s=e.getMonth(),n=String(parseInt((t-2e3)/10));a.setTensplace(n),$("#tensplaceList a#"+n).tab("show");const r=String((t-2e3)%10);a.setOnesplace(r),$("#onesplaceList a#"+r).tab("show");const c=String(s+1);a.setMonth(c),$("#monthList a#"+c).tab("show");const o=String(e.getDay());a.setWeek(o),$("#weekList a#"+o).tab("show")})(new Date),n()})(),$("#tensplaceList a").on("click",function(e){e.preventDefault(),$(this).tab("show"),a.setTensplace($(this).attr("id")),n()}),$("#onesplaceList a").on("click",function(e){e.preventDefault(),$(this).tab("show"),a.setOnesplace($(this).attr("id")),n()}),$("#monthList a").on("click",function(e){e.preventDefault(),$(this).tab("show"),a.setMonth($(this).attr("id")),n()}),$("#weekList a").on("click",function(e){e.preventDefault(),$(this).tab("show"),a.setWeek($(this).attr("id")),n()}),"serviceWorker"in navigator&&navigator.serviceWorker.register("./sw.js").then(function(){console.log("Service Worker Registered")})}]);