(function(){"use strict";var e={512:function(e,t,s){var a=s(9242),i=s(3396);const o=(0,i._)("div",{class:"tgme_background_wrap"},null,-1),n={class:"message-app"};function r(e,t,s,a,r,l){const m=(0,i.up)("MessageSpace");return(0,i.wg)(),(0,i.iD)(i.HY,null,[o,(0,i._)("div",n,[(0,i.Wm)(m,{class:"right-bar"})])],64)}var l=s(7139);const m={key:0},g={id:"chat-space",class:"no-scrollbar"},c={key:0,style:{width:"100%",height:"130px"}},d={key:1,class:"select-a-chat"},h=(0,i._)("div",{class:"select-a-chat-message"},"Select a chat to start conversation",-1),f=[h];function p(e,t,s,a,o,n){const r=(0,i.up)("LeftBar"),h=(0,i.up)("TopBar"),p=(0,i.up)("MessageBar"),u=(0,i.up)("InputArea");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(r,{leftbardata:o.leftbardata,class:(0,l.C_)(["left-bar-list",{"stretch-left-bar":!o.message.contact_name}])},null,8,["leftbardata","class"]),(0,i._)("div",{class:"message-space","on:loadMessage":t[0]||(t[0]=(...e)=>n.renderMessages&&n.renderMessages(...e))},[o.message.contact_name?((0,i.wg)(),(0,i.iD)("div",m,[(0,i.Wm)(h,{image:o.message.image,contact_name:o.message.contact_name,last_seen:"12:45"},null,8,["image","contact_name"]),(0,i._)("div",g,[o.message.messages?((0,i.wg)(),(0,i.iD)("div",c)):(0,i.kq)("",!0),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(o.message.messages,(e=>((0,i.wg)(),(0,i.j4)(p,{key:e,message:e},null,8,["message"])))),128))]),(0,i.Wm)(u)])):((0,i.wg)(),(0,i.iD)("div",d,f))],32)],64)}s(7658);const u=e=>((0,i.dD)("data-v-41a02a92"),e=e(),(0,i.Cn)(),e),v={class:"left-bar"},y={class:"left-contact-list"},w=u((()=>(0,i._)("div",{class:"resizer",id:"dragMe"},null,-1)));function b(e,t,s,a,o,n){const r=(0,i.up)("MessageContact");return(0,i.wg)(),(0,i.iD)("div",v,[(0,i._)("div",y,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(s.leftbardata,(e=>((0,i.wg)(),(0,i.iD)("div",{key:e,class:"contact-items"},[(0,i.Wm)(r,{class:"message-contact",message:e},null,8,["message"])])))),128))]),w])}const M={class:"contact-image"},_={class:"contact-first-row"},x={class:"contact-name"},B={class:"contact-message-details"},k={class:"contact-message"},I={class:"contact-message-time"};function C(e,t,s,o,n,r){const m=(0,i.up)("ImageView");return(0,i.wg)(),(0,i.iD)("div",{class:"contact",tabindex:"0",onClick:t[0]||(t[0]=e=>r.changeMessages(e)),onKeyup:t[1]||(t[1]=(0,a.D2)((e=>r.changeMessages(e)),["enter"]))},[(0,i._)("div",M,[(0,i.Wm)(m,{image:s.message.image,contact:s.message.contact_name},null,8,["image","contact"])]),(0,i._)("div",_,[(0,i._)("div",x,(0,l.zw)(s.message.contact_name),1),(0,i._)("div",B,[(0,i._)("div",k,(0,l.zw)(s.message.messages?.[s.message.messages.length-1]?.message),1),(0,i._)("div",I,(0,l.zw)(s.message.messages?.[s.message.messages.length-1]?.timestamp),1)])])],32)}const S={class:"profile-image"},O=["src"],E={class:"image-view-area"},H={class:"imageview-contact-name"},N=["src"];function D(e,t,s,o,n,r){return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",S,[(0,i._)("img",{onClick:t[0]||(t[0]=e=>r.hideImage()),src:s.image,alt:"img"},null,8,O)]),n.showimage&&s.openImage?((0,i.wg)(),(0,i.iD)("div",{key:0,onClick:t[1]||(t[1]=(0,a.iM)((e=>r.hideImage()),["self"])),class:"imageview-background"},[(0,i._)("div",E,[(0,i._)("div",H,(0,l.zw)(s.contact),1),(0,i._)("img",{class:"image-display",src:s.image},null,8,N)])])):(0,i.kq)("",!0)],64)}var z={name:"ImageView",props:{contact:String,image:String,openImage:Boolean},data(){return{showimage:!1}},methods:{hideImage(){this.showimage=!this.showimage}}},L=s(89);const A=(0,L.Z)(z,[["render",D]]);var j=A,T={name:"MessageContact",components:{ImageView:j},props:{message:Object},data(){return{}},methods:{changeMessages(e){let t=document.getElementsByClassName("selected-chat");for(let s=0;s<t.length;s++)t[s]!=e.target&&t[s].classList.remove("selected-chat");e.target?.closest(".contact")?.classList?.add("selected-chat"),this.emitter.emit("loadMessage",this.message)}}};const W=(0,L.Z)(T,[["render",C]]);var P=W,V=s(7387),q=s.n(V),Z={name:"LeftBar",components:{MessageContact:P},props:{leftbardata:Object},data(){return{minLeftWidth:25,maxLeftWidth:55,resizer:"",leftSide:"",rightSide:"",rightSide1:"",root:"",x:0,y:0}},mounted(){q()(document).ready((function(){var e=q()("#dragMe");q()(document.getElementsByClassName("left-bar-list")[0]).scroll((function(){e.stop().animate({marginTop:document.getElementsByClassName("left-bar-list")[0].scrollTop},"slow")}))})),this.root=document.querySelector(":root"),this.resizer=document.getElementById("dragMe"),this.leftSide=this.resizer.previousElementSibling,this.rightSide=document.getElementsByClassName("message-space")[0],this.rightSide1=document.getElementsByClassName("select-a-chat")[0],this.resizer.addEventListener("mousedown",this.mouseDownHandler)},methods:{mouseDownHandler(e){this.x=e.clientX,this.y=e.clientY,this.leftWidth=this.leftSide.getBoundingClientRect().width,document.addEventListener("mousemove",this.mouseMoveHandler),document.addEventListener("mouseup",this.mouseUpHandler)},mouseUpHandler(){this.resizer.style.removeProperty("cursor"),document.body.style.removeProperty("cursor"),this.leftSide.style.removeProperty("user-select"),this.leftSide.style.removeProperty("pointer-events"),this.rightSide.style.removeProperty("user-select"),this.rightSide.style.removeProperty("pointer-events"),document.removeEventListener("mousemove",this.mouseMoveHandler),document.removeEventListener("mouseup",this.mouseUpHandler)},mouseMoveHandler(e){document.body.style.cursor="col-resize";let t=parseInt((this.x||1)/document.getElementsByTagName("body")[0].getBoundingClientRect().width*100),s=parseInt(100-(this.x||1)/document.getElementsByTagName("body")[0].getBoundingClientRect().width*100);t<this.maxLeftWidth&&t>=this.minLeftWidth&&(this.root.style.setProperty("--left-width",`${t}%`),this.root.style.setProperty("--right-width",`${s}%`)),this.x=e.clientX,this.y=e.clientY,this.resizer.style.cursor="col-resize",this.leftSide.style.userSelect="none",this.leftSide.style.pointerEvents="none",this.rightSide.style.userSelect="none",this.rightSide.style.pointerEvents="none"}}};const Y=(0,L.Z)(Z,[["render",b],["__scopeId","data-v-41a02a92"]]);var U=Y;const G={key:0,class:"top-bar"},K={class:"icon-display-area"},R={class:"message-area-top-bar"},X={class:"contact-name-display"},$={class:"last-seen-status"},F={key:0,class:"online-status"},J={key:1,class:"online-status"},Q=(0,i._)("div",{class:"top-bar-right-space"},null,-1);function ee(e,t,s,a,o,n){const r=(0,i.up)("fa"),m=(0,i.up)("ImageView");return s.image&&s.contact_name?((0,i.wg)(),(0,i.iD)("div",G,[(0,i._)("div",K,[(0,i.Wm)(r,{icon:"arrow-left",size:"xl",onClick:n.emptyMessageArea},null,8,["onClick"])]),(0,i.Wm)(m,{image:s.image,contact:s.contact_name,openImage:!0},null,8,["image","contact"]),(0,i._)("div",R,[(0,i._)("div",X,[(0,i.Uk)((0,l.zw)(s.contact_name)+" ",1),(0,i._)("div",$,[s.online?((0,i.wg)(),(0,i.iD)("div",F,"Online")):s.last_seen?((0,i.wg)(),(0,i.iD)("div",J,"Last Seen at "+(0,l.zw)(s.last_seen),1)):(0,i.kq)("",!0)])]),Q])])):(0,i.kq)("",!0)}var te={name:"TopBar",components:{ImageView:j},props:{image:String,contact_name:String,last_seen:String,online:Boolean},methods:{emptyMessageArea(){let e=document.getElementsByClassName("selected-chat");for(let t=0;t<e.length;t++)e[t]!=event.target&&e[t].classList.remove("selected-chat");this.emitter.emit("emptyMessage")}},created(){let e=this;document.addEventListener("keyup",(function(t){if(t=t||window.event,27===t.keyCode){if(document.getElementsByClassName("imageview-background"))return void document.getElementsByClassName("imageview-background");e.emptyMessageArea()}})),this.emitter.on("emptyMessageArea",this.emptyMessageArea)},mounted(){this.emitter.off("emptyMessageArea",this.emptyMessageArea)}};const se=(0,L.Z)(te,[["render",ee]]);var ae=se;const ie=["id"],oe={key:0,class:"message-info message-info-from"},ne=["id"],re={key:1,class:"chat-end chat-start"},le=(0,i.uE)('<svg width="9" height="20" xmlns="http://www.w3.org/2000/svg"><defs><filter x="-50%" y="-14.7%" width="200%" height="141.2%" filterUnits="objectBoundingBox" id="a"><feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><feGaussianBlur stdDeviation="1" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur><feColorMatrix values="0 0 0 0 0.0621962482 0 0 0 0 0.138574144 0 0 0 0 0.185037364 0 0 0 0.15 0" in="shadowBlurOuter1"></feColorMatrix></filter></defs><g fill="none" fill-rule="evenodd"><path d="M6 17H0V0c.193 2.84.876 5.767 2.05 8.782.904 2.325 2.446 4.485 4.625 6.48A1 1 0 016 17z" fill="#000" filter="url(#a)"></path><path d="M6 17H0V0c.193 2.84.876 5.767 2.05 8.782.904 2.325 2.446 4.485 4.625 6.48A1 1 0 016 17z" fill="rgb(33, 33, 33)" class="corner"></path></g></svg>',1),me=[le],ge=["id"],ce={class:"message-area"},de={class:"message-timestamp"},he={key:2,class:"chat-end"},fe=(0,i.uE)('<svg width="9" height="20" xmlns="http://www.w3.org/2000/svg"><defs><filter x="-50%" y="-14.7%" width="200%" height="141.2%" filterUnits="objectBoundingBox" id="a"><feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><feGaussianBlur stdDeviation="1" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur><feColorMatrix values="0 0 0 0 0.0621962482 0 0 0 0 0.138574144 0 0 0 0 0.185037364 0 0 0 0.15 0" in="shadowBlurOuter1"></feColorMatrix></filter></defs><g fill="none" fill-rule="evenodd"><path d="M6 17H0V0c.193 2.84.876 5.767 2.05 8.782.904 2.325 2.446 4.485 4.625 6.48A1 1 0 016 17z" fill="#000" filter="url(#a)"></path><path d="M6 17H0V0c.193 2.84.876 5.767 2.05 8.782.904 2.325 2.446 4.485 4.625 6.48A1 1 0 016 17z" fill="rgb(118, 106, 200)" class="corner"></path></g></svg>',1),pe=[fe],ue={key:3,class:"message-info message-info-to"},ve=["id"];function ye(e,t,s,a,o,n){return(0,i.wg)(),(0,i.iD)("div",{class:(0,l.C_)(["message-box-display",{"message-box-display-right":s.message.self}]),id:"message-display-box-"+s.message.id},[s.message.self?((0,i.wg)(),(0,i.iD)("div",oe,[(0,i._)("input",{class:"select-message select-from-message",type:"checkbox",id:"select-"+s.message.id},null,8,ne)])):(0,i.kq)("",!0),s.message.self?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("div",re,me)),(0,i._)("div",{class:(0,l.C_)(["message-box",{"from-message":s.message.self}]),id:"message-"+s.message.id},[(0,i._)("div",ce,(0,l.zw)(s.message.message),1),(0,i._)("div",de,(0,l.zw)(s.message.timestamp),1)],10,ge),s.message.self?((0,i.wg)(),(0,i.iD)("div",he,pe)):(0,i.kq)("",!0),s.message.self?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("div",ue,[(0,i._)("input",{class:"select-message select-to-message",type:"checkbox",id:"select-"+s.message.id},null,8,ve)]))],10,ie)}var we={name:"MessageBar",props:{message:Object},mounted(){let e=document.getElementsByClassName("message-box-display"),t=e.length,s=e[t-1];s.scrollIntoView()}};const be=(0,L.Z)(we,[["render",ye]]);var Me=be;const _e={class:"bottom-area"},xe={class:"bottom-area-container"},Be={class:"emoji-selection"};function ke(e,t,s,o,n,r){const l=(0,i.up)("fa");return(0,i.wg)(),(0,i.iD)("div",_e,[(0,i._)("div",xe,[(0,i._)("div",Be,[(0,i.Wm)(l,{icon:"fa fa-smile",class:"smile-icon",size:"xxl"})]),(0,i._)("div",{class:"chat-input-area no-scrollbar",contenteditable:"true",onKeypress:t[0]||(t[0]=(0,a.D2)((0,a.iM)(((...e)=>r.insertNewMessage&&r.insertNewMessage(...e)),["ctrl"]),["enter"])),placeholder:"Type a Message...",oninput:"if(this.innerHTML.trim()==='<br>')this.innerHTML=''"},null,32),(0,i._)("div",{class:"send-messgae-btn",onClick:t[1]||(t[1]=(...e)=>r.insertNewMessage&&r.insertNewMessage(...e))},[(0,i.Wm)(l,{icon:"fa fa-paper-plane",size:"xl"})])])])}var Ie={name:"InputArea",data(){return{newMessage:""}},methods:{getNow(){const e=new Date;return e.getHours()+":"+e.getMinutes()},insertNewMessage(){if(this.newMessage=document.getElementsByClassName("chat-input-area")[0].innerText||"",!this.newMessage||!this.newMessage?.trim())return void(document.getElementsByClassName("chat-input-area")[0].innerText="");let e={message:this.newMessage?.trim(),self:!0,timestamp:this.getNow()};this.emitter.emit("addNewMessage",e),document.getElementsByClassName("chat-input-area")[0].innerText="",document.getElementsByClassName("chat-input-area")[0].focus()}},mounted(){document.getElementsByClassName("chat-input-area")[0].focus()}};const Ce=(0,L.Z)(Ie,[["render",ke]]);var Se=Ce,Oe={name:"MessageSpace",components:{TopBar:ae,LeftBar:U,MessageBar:Me,InputArea:Se},data(){return{message:{},leftbardata:[{contact_name:"Ponnusamy",image:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",messages:[{message:"If position: absolute; or position: fixed; - the right property sets the right edge of an element to a unit to the right of the right edge of its nearest positioned ancestor. If position: relative; - the right property sets the right edge of an element to a unit to the left/right of its normal position.",self:!0,id:1,timestamp:"10:45"},{message:"Hi",self:!1,id:2,timestamp:"10:46"},{message:"How are you?",self:!0,id:3,timestamp:"10:46"},{message:"If position: absolute; or position: fixed; - the right property sets the right edge of an element to a unit to the right of the right edge of its nearest positioned ancestor. If position: relative; - the right property sets the right edge of an element to a unit to the left/right of its normal position.",self:!1,id:4,timestamp:"10:47"},{message:"If position: absolute; or position: fixed; - the right property sets the right edge of an element to a unit to the right of the right edge of its nearest positioned ancestor. If position: relative; - the right property sets the right edge of an element to a unit to the left/right of its normal position.",self:!0,id:5,timestamp:"10:45"},{message:"Hi",self:!1,id:6,timestamp:"10:46"},{message:"How are you?",self:!0,id:7,timestamp:"10:46"},{message:"If position: absolute; or position: fixed; - the right property sets the right edge of an element to a unit to the right of the right edge of its nearest positioned ancestor. If position: relative; - the right property sets the right edge of an element to a unit to the left/right of its normal position.",self:!1,id:8,timestamp:"10:47"},{message:"If position: absolute; or position: fixed; - the right property sets the right edge of an element to a unit to the right of the right edge of its nearest positioned ancestor. If position: relative; - the right property sets the right edge of an element to a unit to the left/right of its normal position.",self:!0,id:9,timestamp:"10:45"},{message:"Hi",self:!1,id:10,timestamp:"10:46"},{message:"How are you?",self:!0,id:11,timestamp:"10:46"},{message:"If position: absolute; or position: fixed; - the right property sets the right edge of an element to a unit to the right of the right edge of its nearest positioned ancestor. If position: relative; - the right property sets the right edge of an element to a unit to the left/right of its normal position.",self:!1,id:12,timestamp:"10:47"},{message:"If position: absolute; or position: fixed; - the right property sets the right edge of an element to a unit to the right of the right edge of its nearest positioned ancestor. If position: relative; - the right property sets the right edge of an element to a unit to the left/right of its normal position.",self:!0,id:13,timestamp:"10:45"},{message:"Hi",self:!1,id:14,timestamp:"10:46"},{message:"How are you?",self:!0,id:15,timestamp:"10:46"},{message:"If position: absolute; or position: fixed; - the right property sets the right edge of an element to a unit to the right of the right edge of its nearest positioned ancestor. If position: relative; - the right property sets the right edge of an element to a unit to the left/right of its normal position.",self:!1,id:16,timestamp:"10:47"}]},{contact_name:"Ponnusamy",image:"https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_960_720.jpg",messages:[{message:"If position: absolute; or position: fixed; - the right property sets the right edge of an element to a unit to the right of the right edge of its nearest positioned ancestor. If position: relative; - the right property sets the right edge of an element to a unit to the left/right of its normal position.",self:!0,id:17,timestamp:"10:45"},{message:"Hi",self:!1,id:18,timestamp:"10:46"},{message:"How are you?",self:!0,id:19,timestamp:"10:46"}]},{contact_name:"Shankar",image:"https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg",messages:[]}]}},methods:{async renderMessages(e){await this.emptyMessage(),this.message=e},addNewMessage(e){this.message.messages||(this.message.messages=[]),this.message.messages.push(e)},async emptyMessage(){document.getElementById("chat-space")?.remove(),this.message={}}},created(){this.emitter.on("emptyMessage",this.emptyMessage),this.emitter.on("loadMessage",this.renderMessages),this.emitter.on("addNewMessage",this.addNewMessage)},unmounted(){this.emitter.off("emptyMessage",this.emptyMessage),this.emitter.off("loadMessage",this.renderMessages),this.emitter.off("addNewMessage",this.addNewMessage)}};const Ee=(0,L.Z)(Oe,[["render",p]]);var He=Ee,Ne={name:"App",components:{MessageSpace:He}};const De=(0,L.Z)(Ne,[["render",r]]);var ze=De,Le=s(1373),Ae=s(7749),je=s(3494),Te=s(8539);je.vI.add(Te.mRB);const We=(0,Le.Z)(),Pe=(0,a.ri)(ze).component("fa",Ae.GN);Pe.config.globalProperties.emitter=We,Pe.mount("#app")}},t={};function s(a){var i=t[a];if(void 0!==i)return i.exports;var o=t[a]={exports:{}};return e[a].call(o.exports,o,o.exports,s),o.exports}s.m=e,function(){var e=[];s.O=function(t,a,i,o){if(!a){var n=1/0;for(g=0;g<e.length;g++){a=e[g][0],i=e[g][1],o=e[g][2];for(var r=!0,l=0;l<a.length;l++)(!1&o||n>=o)&&Object.keys(s.O).every((function(e){return s.O[e](a[l])}))?a.splice(l--,1):(r=!1,o<n&&(n=o));if(r){e.splice(g--,1);var m=i();void 0!==m&&(t=m)}}return t}o=o||0;for(var g=e.length;g>0&&e[g-1][2]>o;g--)e[g]=e[g-1];e[g]=[a,i,o]}}(),function(){s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,{a:t}),t}}(),function(){s.d=function(e,t){for(var a in t)s.o(t,a)&&!s.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};s.O.j=function(t){return 0===e[t]};var t=function(t,a){var i,o,n=a[0],r=a[1],l=a[2],m=0;if(n.some((function(t){return 0!==e[t]}))){for(i in r)s.o(r,i)&&(s.m[i]=r[i]);if(l)var g=l(s)}for(t&&t(a);m<n.length;m++)o=n[m],s.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return s.O(g)},a=self["webpackChunkponnusamy"]=self["webpackChunkponnusamy"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=s.O(void 0,[998],(function(){return s(512)}));a=s.O(a)})();
//# sourceMappingURL=app.33407712.js.map