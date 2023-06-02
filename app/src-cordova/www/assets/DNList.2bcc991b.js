import{Q as d}from"./QItemLabel.58eb6bb3.js";import{Q as W,b as $,a as U}from"./QList.3cc5bd82.js";import{_ as X,az as x,J as G,aP as H,r as K,c as t,w as E,o as Y,M as C,O as Z,R as s,f as n,S as u,U as c,X as M,V as q,W as ee,F,$ as ae,aA as te}from"./index.08e92286.js";import{u as ne}from"./use-quasar.de271e6e.js";import{a as se}from"./index.2885cb15.js";import{u as oe}from"./vue-i18n.runtime.esm-bundler.114ddd7d.js";const ce=x({name:"DNList",data(){return{}},setup(){const e=G(),S=H(),m=ne(),r=K(0),{t:g}=oe(),y=t({get:()=>e.state.fabchange.fab1}),i=t({get:()=>e.state.fabchange.fab2}),f=t({get:()=>e.state.fabchange.fab3}),N=t({get:()=>e.state.fabchange.fab4}),Q=t({get:()=>e.state.screenchange.screenscroll}),L=t({get:()=>e.state.loginauth.authin}),P=t({get:()=>e.state.loginauth.login_name}),k=t({get:()=>e.state.loginauth.operator}),w=t({get:()=>e.state.settings.openid}),A=t({get:()=>e.state.langchange.lang}),b=t({get:()=>e.state.settings.server}),R=t({get:()=>e.state.scanchanged.scandata,set:a=>{e.commit("scanchanged/ScanChanged",a)}}),j=t({get:()=>e.state.scanchanged.datadetail,set:a=>{e.commit("scanchanged/ScanDataChanged",a)}}),z=t({get:()=>e.state.scanchanged.asndata,set:a=>{e.commit("scanchanged/ASNDataChanged",a)}}),V=t({get:()=>e.state.scanchanged.dndata,set:a=>{e.commit("scanchanged/DNDataChanged",a)}}),J=t({get:()=>e.state.scanchanged.bindata,set:a=>{e.commit("scanchanged/BinDataChanged",a)}}),h=t({get:()=>e.state.scanchanged.tablelist,set:a=>{e.commit("scanchanged/TableDataChanged",a)}}),_=t({get:()=>e.state.scanchanged.scanmode,set:a=>{e.commit("scanchanged/ScanModeChanged",a)}}),p=t({get:()=>e.state.scanchanged.apiurl,set:a=>{e.commit("scanchanged/ApiUrlChanged",a)}}),v=t({get:()=>e.state.scanchanged.apiurlnext,set:a=>{e.commit("scanchanged/ApiUrlNextChanged",a)}}),B=t({get:()=>e.state.scanchanged.apiurlprevious,set:a=>{e.commit("scanchanged/ApiUrlPreviousChanged",a)}});function I(a){if(a!==null){var o=b.value.split(":"),l=a.split(":");return o[0]!==l[0]?o[0]+":"+l[1]:l}else return null}function O(a){V.value=a,_.value="DN",S.push({name:"dndetail"})}function T(a){se.get(p.value+a,{headers:{"Content-Type":"application/json",token:w.value,language:A.value,operator:k.value}}).then(o=>{if(o.data.detail)m.notify({type:"negative",message:g("notice.mobile_scan.notice1")});else{var l=[];h.value.forEach(D=>{l.push(D)}),o.data.results.forEach(D=>{l.push(D)}),h.value=l,B.value=I(o.data.previous),v.value=I(o.data.next)}}).catch(o=>{m.notify({type:"negative",message:g("notice.mobile_scan.notice3")})})}return E(Q,(a,o)=>{a>=.95?v.value!==null&&(p.value=v.value,r.value=1):r.value=0}),E(r,(a,o)=>{a===1&&T("")}),Y(()=>{L.value==="0"?m.notify({type:"negative",message:g("notice.mobile_userlogin.notice9")}):(_.value="DN",p.value=b.value+"dn/list/",h.value=[],T(""))}),{t:g,fab1:y,fab2:i,fab3:f,fab4:N,screenscroll:Q,authin:L,login_name:P,openid:w,operator:k,lang:A,requestauth:r,baseurl:b,apiurl:p,apiurlnext:v,apiurlprevious:B,scandata:R,datadetail:j,tablelist:h,asndata:z,dndata:V,bindata:J,scanmode:_,DetailLine:O}}});function ie(e,S,m,r,g,y){return C(),Z(W,{bordered:"",padding:""},{default:s(()=>[n(U,null,{default:s(()=>[n($,null,{default:s(()=>[n(d,{overline:""},{default:s(()=>[u(c(e.$t("notice.mobile_dn.notice1")),1)]),_:1}),n(d,{caption:""},{default:s(()=>[u(c(e.$t("notice.mobile_dn.notice2")),1)]),_:1})]),_:1})]),_:1}),n(M,{spaced:""}),n(d,{header:""},{default:s(()=>[u(c(e.$t("notice.detail")),1)]),_:1}),(C(!0),q(F,null,ee(e.tablelist,(i,f)=>(C(),q(F,{key:f},[n(U,null,{default:s(()=>[n($,{onClick:N=>e.DetailLine(i.dn_code)},{default:s(()=>[n(d,null,{default:s(()=>[u(c(i.dn_code),1)]),_:2},1024),n(d,{caption:"",lines:"2"},{default:s(()=>[u(c(e.$t("notice.mobile_dn.notice3"))+c(i.customer),1)]),_:2},1024)]),_:2},1032,["onClick"]),n($,{side:"",top:""},{default:s(()=>[n(d,{caption:""},{default:s(()=>[u(c(e.$t("notice.mobile_dn.notice4"))+":"+c(i.total_cost),1)]),_:2},1024),n(d,{caption:""},{default:s(()=>[u(c(e.$t("notice.mobile_dn.notice5"))+c(i.dn_status),1)]),_:2},1024)]),_:2},1024)]),_:2},1024),ae(n(M,{spaced:"",inset:"item"},null,512),[[te,f+1!==e.tablelist.length]])],64))),128))]),_:1})}var fe=X(ce,[["render",ie]]);export{fe as default};