(function(){"use strict";var t={8708:function(t,e,n){var l=n(9242),i=n(3396),u=n(7139);const o={class:"wrapper page"},r=(0,i._)("input",{type:"textarea",class:"textarea",placeholder:"Поле для текста"},null,-1),s=["value"],a={class:"inputs"},c=["value"],d=["value"],h={class:"inputs"},p=["value"],w=["value"],v=(0,i._)("div",{style:{display:"flex"}},[(0,i.Uk)(" Заказчик: "),(0,i._)("input",{type:"text",style:{padding:"0"}})],-1),_={style:{display:"flex",padding:"0"}},m={key:0},f=(0,i._)("div",{style:{margin:"10px 0 10px 0"}}," Конечная сумма в тенге ",-1),y={style:{"border-bottom":"1px solid black",padding:"5px"}};function g(t,e,n,g,b,x){const k=(0,i.up)("hello-world");return(0,i.wg)(),(0,i.iD)("div",o,[(0,i._)("form",{class:(0,u.C_)(["calc-form-container",{show:!1===b.show}]),onSubmit:e[6]||(e[6]=(0,l.iM)((()=>{}),["prevent"]))},[(0,i._)("div",null,[r,(0,i._)("input",{value:b.course,onInput:e[0]||(e[0]=t=>b.course=t.target.value),type:"number",class:"input-course",placeholder:"Курс $ к тг"},null,40,s),(0,i._)("div",a,[(0,i._)("input",{value:b.width,onInput:e[1]||(e[1]=t=>b.width=t.target.value),type:"number",class:"input-width",placeholder:"Ширина в см"},null,40,c),(0,i._)("input",{value:b.height,onInput:e[2]||(e[2]=t=>b.height=t.target.value),type:"number",class:"input-height",placeholder:"Высота в см"},null,40,d)]),(0,i._)("div",h,[(0,i._)("input",{value:b.count,onInput:e[3]||(e[3]=t=>b.count=t.target.value),type:"number",class:"input-count",placeholder:"Кол-во"},null,40,p),(0,i._)("input",{value:b.price,onInput:e[4]||(e[4]=t=>b.price=t.target.value),type:"number",class:"input-price",placeholder:"Стоимость"},null,40,w)]),(0,i._)("button",{class:"btn",onClick:e[5]||(e[5]=t=>x.createPost())},"Добавить")])],34),(0,i._)("div",null,"Заказ №"+(0,u.zw)(b.numDoc),1),(0,i._)("div",null,[v,(0,i._)("div",_,"Дата: "+(0,u.zw)(b.date.toLocaleString()),1)]),(0,i.Wm)(k,{array:b.array,show:b.show,sum:b.sum,onDeleteRow:x.deleteRow},null,8,["array","show","sum","onDeleteRow"]),this.sum[0]?((0,i.wg)(),(0,i.iD)("div",m,[f,(0,i._)("span",y,(0,u.zw)((this.sum.reduce(((t,e)=>t+e.An),0)*this.course).toFixed(2)),1)])):(0,i.kq)("",!0),(0,i._)("footer",null,[(0,i._)("div",null,[(0,i._)("button",{onClick:e[7]||(e[7]=t=>x.change()),class:"btn",style:{"margin-top":"100px"}}," Скрыть поля заполения ")])]),(0,i._)("div",null,[(0,i._)("button",{onClick:e[8]||(e[8]=t=>x.saveTable()),class:"btn"}," Новый заказ ")])])}const b=t=>((0,i.dD)("data-v-4ebd822c"),t=t(),(0,i.Cn)(),t),x={class:"hello mobile-table wrapper"},k={border:"1",rules:"all",cellspacing:"10",cellpadding:"0",class:"iksweb"},D=b((()=>(0,i._)("tr",null,[(0,i._)("th",null,"№"),(0,i._)("th",null,"ШИР. cm"),(0,i._)("th",null,"ВЫС. cm"),(0,i._)("th",null,"Площ. m2"),(0,i._)("th",null,"ШТ."),(0,i._)("th",null,"УПР."),(0,i._)("th",{style:{width:"10px"}},"НАИМЕНОВАНИЕ"),(0,i._)("th",null,"СТОИМОСТЬ"),(0,i._)("th",null,"СУММА")],-1))),z=["id"],O=b((()=>(0,i._)("td",{style:{"max-width":"20px"}},[(0,i._)("input",{type:"number",class:"input-td",style:{width:"30px"}})],-1))),C={style:{"max-width":"20px"}},A=b((()=>(0,i._)("input",{type:"text",class:"input-td"},null,-1))),I=b((()=>(0,i._)("input",{style:{width:"200px"},type:"text",class:"input-td"},null,-1))),R=["onClick"];function S(t,e,n,l,o,r){return(0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("div",x,[(0,i._)("table",k,[D,((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n.array,(t=>((0,i.wg)(),(0,i.iD)("tr",{key:t.id,id:t.id},[O,(0,i._)("td",null,(0,u.zw)(t.width),1),(0,i._)("td",null,(0,u.zw)(t.height),1),(0,i._)("td",null,(0,u.zw)(t.Square),1),(0,i._)("td",null,(0,u.zw)(t.count),1),(0,i._)("td",C,[A,(0,i.Uk)((0,u.zw)(),1)]),(0,i._)("td",null,[I,(0,i.Uk)((0,u.zw)(),1)]),(0,i._)("td",null,(0,u.zw)(t.price),1),(0,i._)("td",null,(0,u.zw)(t.An.toFixed(2)),1),(0,i._)("td",{class:(0,u.C_)({show:!1===n.show})},[(0,i._)("button",{class:"btn",style:{margin:"0"},onClick:e=>r.deleteR(t.id)},"X",8,R)],2)],8,z)))),128))])])])}var j={name:"HelloWorld",props:{array:{type:Array},sum:{type:Array},show:{type:Boolean}},methods:{deleteR(t){this.$emit("deleteRow",t);let e=document.getElementById(t);e.remove()}}},P=n(89);const T=(0,P.Z)(j,[["render",S],["__scopeId","data-v-4ebd822c"]]);var q=T,F={components:{HelloWorld:q},name:"App",data(){return{height:"",width:"",price:"",count:"",course:"",array:[],show:!0,numDoc:"1",sum:[],date:new Date}},methods:{createPost(){let t=0,e=0;t=this.width<100?100:this.width,e=this.height<160?160:this.height;const n={id:Date.now(),height:this.height,width:this.width,count:this.count,An:t*e/1e4*this.price*this.count,price:this.price,course:this.course,Square:t*e/1e4};this.sum.push({id:n.id,An:n.An}),this.array.push(n),this.height="",this.width="",this.count="",this.price=""},change(){this.show=!this.show},saveTable(){this.numDoc++,localStorage.numDoc=this.numDoc,location.reload()},deleteRow(t){this.sum=this.sum.filter((e=>e.id!==t))}},mounted(){localStorage.numDoc&&(this.numDoc=localStorage.numDoc)},computed(){}};const H=(0,P.Z)(F,[["render",g]]);var U=H;(0,l.ri)(U).mount("#app")}},e={};function n(l){var i=e[l];if(void 0!==i)return i.exports;var u=e[l]={exports:{}};return t[l](u,u.exports,n),u.exports}n.m=t,function(){var t=[];n.O=function(e,l,i,u){if(!l){var o=1/0;for(c=0;c<t.length;c++){l=t[c][0],i=t[c][1],u=t[c][2];for(var r=!0,s=0;s<l.length;s++)(!1&u||o>=u)&&Object.keys(n.O).every((function(t){return n.O[t](l[s])}))?l.splice(s--,1):(r=!1,u<o&&(o=u));if(r){t.splice(c--,1);var a=i();void 0!==a&&(e=a)}}return e}u=u||0;for(var c=t.length;c>0&&t[c-1][2]>u;c--)t[c]=t[c-1];t[c]=[l,i,u]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var l in e)n.o(e,l)&&!n.o(t,l)&&Object.defineProperty(t,l,{enumerable:!0,get:e[l]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,l){var i,u,o=l[0],r=l[1],s=l[2],a=0;if(o.some((function(e){return 0!==t[e]}))){for(i in r)n.o(r,i)&&(n.m[i]=r[i]);if(s)var c=s(n)}for(e&&e(l);a<o.length;a++)u=o[a],n.o(t,u)&&t[u]&&t[u][0](),t[u]=0;return n.O(c)},l=self["webpackChunkcalc"]=self["webpackChunkcalc"]||[];l.forEach(e.bind(null,0)),l.push=e.bind(null,l.push.bind(l))}();var l=n.O(void 0,[998],(function(){return n(8708)}));l=n.O(l)})();
//# sourceMappingURL=app.d2d8c95e.js.map