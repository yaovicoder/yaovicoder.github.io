(function(g){var window=this;var oDa=function(a,b){return g.Wb(a,b)},i6=function(a){g.Vm(a,"zx",g.wb());
return a},j6=function(a,b,c){g.xa(c)||(c=[String(c)]);
g.Ym(a.o,b,c)},pDa=function(a,b){var c=[];
g.Ik(b,function(a){try{var b=g.wD.prototype.A.call(this,a,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}g.u(b)?g.vD(b)&&c.push(a):c.push(a)},a);
return c},qDa=function(a,b){var c=pDa(a,b);
(0,g.D)(c,function(a){g.wD.prototype.remove.call(this,a)},a)},rDa=function(a){if(a.Jd){if(a.Jd.locationOverrideToken)return{locationOverrideToken:a.Jd.locationOverrideToken};
if(null!=a.Jd.latitudeE7&&null!=a.Jd.longitudeE7)return{latitudeE7:a.Jd.latitudeE7,longitudeE7:a.Jd.longitudeE7}}return null},sDa=function(a,b,c,d){var e=new g.Mm(null,void 0);
a&&g.Nm(e,a);b&&g.Om(e,b);c&&g.Pm(e,c);d&&g.Qm(e,d);return e},tDa=function(a){g.bG[a]&&(a=g.bG[a],(0,g.D)(a,function(a){g.$F[a]&&delete g.$F[a]}),a.length=0)},uDa=function(a){var b=g.ZF();
if(b)if(b.clear(a),a)tDa(a);else for(var c in g.bG)tDa(c)},k6=function(a){this.app=this.name=this.id="";
this.type="REMOTE_CONTROL";this.obfuscatedGaiaId=this.avatar=this.username="";this.B=!1;this.capabilities=new window.Set;this.experiments=new window.Set;this.theme="u";new g.Gm;this.o=this.A="";a&&(this.id=a.id||a.name,this.name=a.name,this.app=a.app,this.type=a.type||"REMOTE_CONTROL",this.username=a.user||"",this.avatar=a.userAvatarUri||"",this.obfuscatedGaiaId=a.obfuscatedGaiaId||"",this.theme=a.theme||"u",vDa(this,a.capabilities||""),wDa(this,a.experiments||""),this.A=a.remoteControllerUrl||"",
this.o=a.localChannelEncryptionKey||"")},vDa=function(a,b){a.capabilities.clear();
(0,g.Vd)(b.split(","),g.Da(oDa,xDa)).forEach(function(b){a.capabilities.add(b)})},wDa=function(a,b){a.experiments.clear();
b.split(",").forEach(function(b){a.experiments.add(b)})},l6=function(a){a=a||{};
this.name=a.name||"";this.id=a.id||a.screenId||"";this.token=a.token||a.loungeToken||"";this.uuid=a.uuid||a.dialId||""},m6=function(a,b){return!!b&&(a.id==b||a.uuid==b)},yDa=function(a){return{name:a.name,
screenId:a.id,loungeToken:a.token,dialId:a.uuid}},zDa=function(a){return new l6(a)},ADa=function(a){return g.xa(a)?(0,g.I)(a,zDa):[]},n6=function(a){return a?'{name:"'+a.name+'",id:'+a.id.substr(0,6)+"..,token:"+(a.token?".."+a.token.slice(-6):"-")+",uuid:"+(a.uuid?".."+a.uuid.slice(-6):"-")+"}":"null"},o6=function(a){return g.xa(a)?"["+(0,g.I)(a,n6).join(",")+"]":"null"},p6=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=16*Math.random()|0;
return("x"==a?b:b&3|8).toString(16)})},BDa=function(a){return(0,g.I)(a,function(a){return{key:a.id,
name:a.name}})},q6=function(a,b){return g.Ja(a,function(a){return a||b?!a!=!b?!1:a.id==b.id:!0})},r6=function(a,b){return g.Ja(a,function(a){return m6(a,b)})},CDa=function(){var a=(0,g.lH)();
a&&qDa(a,a.o.ge(!0))},s6=function(){var a=g.oH("yt-remote-connected-devices")||[];
g.fb(a);return a},DDa=function(a){if(g.Oa(a))return[];
var b=a[0].indexOf("#"),c=-1==b?a[0]:a[0].substring(0,b);return(0,g.I)(a,function(a,b){return 0==b?a:a.substring(c.length)})},EDa=function(a){g.nH("yt-remote-connected-devices",a,86400)},u6=function(){if(t6)return t6;
var a=g.oH("yt-remote-device-id");a||(a=p6(),g.nH("yt-remote-device-id",a,31536E3));for(var b=s6(),c=1,d=a;g.Na(b,d);)c++,d=a+"#"+c;return t6=d},v6=function(){var a=s6(),b=u6();
g.Na(a,b);g.qH()&&g.ib(a,b);a=DDa(a);if(g.Oa(a))try{g.KG("remote_sid")}catch(c){}else try{g.JG("remote_sid",a.join(","),-1)}catch(c){}},FDa=function(){return g.oH("yt-remote-session-browser-channel")},GDa=function(){return g.oH("yt-remote-local-screens")||[]},HDa=function(){g.nH("yt-remote-lounge-token-expiration",!0,86400)},IDa=function(a){5<a.length&&(a=a.slice(a.length-5));
var b=(0,g.I)(GDa(),function(a){return a.loungeToken}),c=(0,g.I)(a,function(a){return a.loungeToken});
(0,g.tm)(c,function(a){return!g.Na(b,a)})&&HDa();
g.nH("yt-remote-local-screens",a,31536E3)},JDa=function(a,b){g.nH("yt-remote-session-browser-channel",a);
g.nH("yt-remote-session-screen-id",b);var c=s6(),d=u6();g.Na(c,d)||c.push(d);EDa(c);v6()},w6=function(a){a||(g.pH("yt-remote-session-screen-id"),g.pH("yt-remote-session-video-id"));
v6();a=s6();g.Sa(a,u6());EDa(a)},KDa=function(){if(!x6){var a=g.HD();
a&&(x6=new g.qD(a))}return x6?!!x6.get("yt-remote-use-staging-server"):!1},LDa=function(){var a=window.document.createElement("a");
g.id(a,"http://web.archive.org/web/20181009235331/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js");a=a.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+g.Ab(a)},MDa=function(a,b,c){c=void 0===c?null:c;
var d=g.Od("SCRIPT");d.id=a;d.onload=function(){b&&(0,window.setTimeout)(b,0)};
d.onreadystatechange=function(){switch(d.readyState){case "loaded":case "complete":d.onload()}};
c&&d.setAttribute("nonce",c);g.kd(d,g.me("http://web.archive.org/web/20181009235331/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"));a=window.document.getElementsByTagName("head")[0]||window.document.body;a.insertBefore(d,a.firstChild);return d},NDa=function(a){a=void 0===a?null:a;
var b=LDa(),c=window.document.getElementById(b),d=c&&g.kF(c,"loaded");d||c&&!d||(c=MDa(b,function(){g.kF(c,"loaded")||(g.jF(c,"loaded","true"),g.fG(b),g.iE(g.Da(uDa,b),0))},a))},ODa=function(){var a=void 0===a?null:a;
window.spf?window.spf.script.load("http://web.archive.org/web/20181009235331/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js","",void 0):NDa(a)},y6=function(a){return!!window.document.currentScript&&(-1!=window.document.currentScript.src.indexOf("?"+a)||-1!=window.document.currentScript.src.indexOf("&"+a))},PDa=function(){return"function"==typeof window.__onGCastApiAvailable?window.__onGCastApiAvailable:null},z6=function(a){a.length?QDa(a.shift(),function(){z6(a)}):A6()},RDa=function(a){return"chrome-extension://"+a+B6},QDa=function(a,
b,c){var d=window.document.createElement("script");
d.onerror=b;c&&(d.onload=c);d.src=a;(window.document.head||window.document.documentElement).appendChild(d)},C6=function(a){return 0<=window.navigator.userAgent.indexOf(a)},A6=function(){var a=PDa();
a&&a(!1,"No cast extension found")},D6=function(){if(SDa){var a=2,b=PDa(),c=function(){a--;
0==a&&b&&b(!0)};
window.__onGCastApiAvailable=c;QDa("//web.archive.org/web/20181009235331/https://www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",A6,c)}},TDa=function(){var a=window.__gCrWeb&&window.__gCrWeb.message&&window.__gCrWeb.message.invokeOnHost;
a&&(D6(),a({command:"cast.sender.init"}))},UDa=function(){D6();
var a=window.navigator.userAgent.match(/Chrome\/([0-9]+)/);z6(["//web.archive.org/web/20181009235331/https://www.gstatic.com/eureka/clank/"+(a?(0,window.parseInt)(a[1],10):0)+B6,"//web.archive.org/web/20181009235331/https://www.gstatic.com/eureka/clank"+B6])},E6=function(a,b,c){g.M.call(this);
this.F=null!=c?(0,g.B)(a,c):a;this.Bd=b;this.D=(0,g.B)(this.IL,this);this.o=!1;this.A=0;this.B=this.Ea=null;this.C=[]},F6=function(){},G6=function(a,b,c,d){this.o=a;
this.B=b;this.G=c;this.F=d||1;this.C=45E3;this.Z=new g.bn(this);this.A=new g.Bg;this.A.setInterval(250)},WDa=function(a,b,c){a.zk=1;
a.Sh=i6(b.clone());a.Ej=c;a.D=!0;VDa(a,null)},H6=function(a,b,c,d,e){a.zk=1;
a.Sh=i6(b.clone());a.Ej=null;a.D=c;e&&(a.HF=!1);VDa(a,d)},VDa=function(a,b){a.xl=(0,g.H)();
I6(a);a.zi=a.Sh.clone();j6(a.zi,"t",a.F);a.bo=0;a.Xc=a.o.ht(a.o.Un()?b:null);0<a.Tt&&(a.Vq=new g.nl((0,g.B)(a.ZG,a,a.Xc),a.Tt));a.Z.W(a.Xc,"readystatechange",a.ZW);var c=a.fj?g.dc(a.fj):{};a.Ej?(a.Pr="POST",c["Content-Type"]="application/x-www-form-urlencoded",a.Xc.send(a.zi,a.Pr,a.Ej,c)):(a.Pr="GET",a.HF&&!g.Kd&&(c.Connection="close"),a.Xc.send(a.zi,a.Pr,null,c));a.o.Kf(1)},ZDa=function(a,b,c){for(var d=!0;!a.Si&&a.bo<c.length;){var e=XDa(a,c);
if(e==J6){4==b&&(a.Th=4,K6(15),d=!1);break}else if(e==YDa){a.Th=4;K6(16);d=!1;break}else L6(a,e)}4==b&&0==c.length&&(a.Th=1,K6(17),d=!1);a.Rf=a.Rf&&d;d||(M6(a),N6(a))},XDa=function(a,b){var c=a.bo,d=b.indexOf("\n",c);
if(-1==d)return J6;c=Number(b.substring(c,d));if((0,window.isNaN)(c))return YDa;d+=1;if(d+c>b.length)return J6;var e=b.substr(d,c);a.bo=d+c;return e},aEa=function(a,b){a.xl=(0,g.H)();
I6(a);var c=b?window.location.hostname:"";a.zi=a.Sh.clone();g.Vm(a.zi,"DOMAIN",c);g.Vm(a.zi,"t",a.F);try{a.Sf=new window.ActiveXObject("htmlfile")}catch(n){M6(a);a.Th=7;K6(22);N6(a);return}var d="<html><body>";if(b){for(var e="",f=0;f<c.length;f++){var k=c.charAt(f);if("<"==k)e+="\\x3c";else if(">"==k)e+="\\x3e";else{var l=k;if(l in O6)k=O6[l];else if(l in $Da)k=O6[l]=$Da[l];else{var m=l.charCodeAt(0);if(31<m&&127>m)k=l;else{if(256>m){if(k="\\x",16>m||256<m)k+="0"}else k="\\u",4096>m&&(k+="0");k+=
m.toString(16).toUpperCase()}k=O6[l]=k}e+=k}}d+='<script>document.domain="'+e+'"\x3c/script>'}c=g.ld(g.Bc("b/12014412"),d+"</body></html>");a.Sf.open();a.Sf.write(g.bd(c));a.Sf.close();a.Sf.parentWindow.m=(0,g.B)(a.hW,a);a.Sf.parentWindow.d=(0,g.B)(a.PE,a,!0);a.Sf.parentWindow.rpcClose=(0,g.B)(a.PE,a,!1);c=a.Sf.createElement("DIV");a.Sf.parentWindow.document.body.appendChild(c);d=g.Pc(a.zi.toString());d=g.pb(g.Mc(d));d=g.ld(g.Bc("b/12014412"),'<iframe src="'+d+'"></iframe>');g.hd(c,g.bd(d));a.o.Kf(1)},
I6=function(a){a.Gx=(0,g.H)()+a.C;
bEa(a,a.C)},bEa=function(a,b){if(null!=a.Ol)throw Error("WatchDog timer not null");
a.Ol=P6((0,g.B)(a.xW,a),b)},Q6=function(a){a.Ol&&(g.x.clearTimeout(a.Ol),a.Ol=null)},N6=function(a){a.o.QA()||a.Si||a.o.Fq(a)},M6=function(a){Q6(a);
g.lf(a.Vq);a.Vq=null;a.A.stop();g.hn(a.Z);if(a.Xc){var b=a.Xc;a.Xc=null;b.abort();b.dispose()}a.Sf&&(a.Sf=null)},L6=function(a,b){try{a.o.HE(a,b),a.o.Kf(4)}catch(c){}},dEa=function(a,b,c,d,e){if(0==d)c(!1);
else{var f=e||0;d--;cEa(a,b,function(e){e?c(!0):g.x.setTimeout(function(){dEa(a,b,c,d,f)},f)})}},cEa=function(a,b,c){var d=new window.Image;
d.onload=function(){try{R6(d),c(!0)}catch(e){}};
d.onerror=function(){try{R6(d),c(!1)}catch(e){}};
d.onabort=function(){try{R6(d),c(!1)}catch(e){}};
d.ontimeout=function(){try{R6(d),c(!1)}catch(e){}};
g.x.setTimeout(function(){if(d.ontimeout)d.ontimeout()},b);
d.src=a},R6=function(a){a.onload=null;
a.onerror=null;a.onabort=null;a.ontimeout=null},eEa=function(a){this.o=a;
this.A=new F6},fEa=function(a){var b=S6(a.o,a.Wl,"/mail/images/cleardot.gif");
i6(b);dEa(b.toString(),5E3,(0,g.B)(a.LK,a),3,2E3);a.Kf(1)},U6=function(a){var b=a.o.J;
if(null!=b)K6(5),b?(K6(11),T6(a.o,a,!1)):(K6(12),T6(a.o,a,!0));else if(a.Ke=new G6(a,void 0,void 0,void 0),a.Ke.fj=a.Rt,b=a.o,b=S6(b,b.Un()?a.Nm:null,a.St),K6(5),!g.Id||g.tc(10))j6(b,"TYPE","xmlhttp"),H6(a.Ke,b,!1,a.Nm,!1);else{j6(b,"TYPE","html");var c=a.Ke;a=!!a.Nm;c.zk=3;c.Sh=i6(b.clone());aEa(c,a)}},V6=function(a,b,c){this.o=1;
this.A=[];this.C=[];this.D=new F6;this.H=a||null;this.J=null!=b?b:null;this.F=c||!1},gEa=function(a,b){this.o=a;
this.map=b;this.context=null},hEa=function(a){g.nf.call(this,"statevent",a)},iEa=function(a,b){g.nf.call(this,"timingevent",a);
this.size=b},jEa=function(a){g.nf.call(this,"serverreachability",a)},mEa=function(a){kEa(a);
if(3==a.o){var b=a.Gn++,c=a.rp.clone();g.Vm(c,"SID",a.B);g.Vm(c,"RID",b);g.Vm(c,"TYPE","terminate");W6(a,c);b=new G6(a,a.B,b,void 0);b.zk=2;b.Sh=i6(c.clone());(new window.Image).src=b.Sh;b.xl=(0,g.H)();I6(b)}lEa(a)},nEa=function(a){a.iL(1,0);
a.rp=S6(a,null,a.Qt);X6(a)},kEa=function(a){a.Fh&&(a.Fh.abort(),a.Fh=null);
a.Ac&&(a.Ac.cancel(),a.Ac=null);a.Lg&&(g.x.clearTimeout(a.Lg),a.Lg=null);Y6(a);a.ne&&(a.ne.cancel(),a.ne=null);a.Kh&&(g.x.clearTimeout(a.Kh),a.Kh=null)},oEa=function(a,b){if(0==a.o)throw Error("Invalid operation: sending map when state is closed");
a.A.push(new gEa(a.UR++,b));2!=a.o&&3!=a.o||X6(a)},X6=function(a){a.ne||a.Kh||(a.Kh=P6((0,g.B)(a.NE,a),0),a.nk=0)},qEa=function(a,b){if(1==a.o){if(!b){a.Gn=Math.floor(1E5*Math.random());
var c=a.Gn++,d=new G6(a,"",c,void 0);d.fj=null;var e=Z6(a),f=a.rp.clone();g.Vm(f,"RID",c);g.Vm(f,"CVER","1");W6(a,f);WDa(d,f,e);a.ne=d;a.o=2}}else 3==a.o&&(b?pEa(a,b):0==a.A.length||a.ne||pEa(a))},pEa=function(a,b){if(b)if(6<a.Ui){a.A=a.C.concat(a.A);
a.C.length=0;var c=a.Gn-1;var d=Z6(a)}else c=b.G,d=b.Ej;else c=a.Gn++,d=Z6(a);var e=a.rp.clone();g.Vm(e,"SID",a.B);g.Vm(e,"RID",c);g.Vm(e,"AID",a.Pk);W6(a,e);c=new G6(a,a.B,c,a.nk+1);c.fj=null;c.setTimeout(1E4+Math.round(1E4*Math.random()));a.ne=c;WDa(c,e,d)},W6=function(a,b){if(a.Ad){var c=a.Ad.wA();
c&&g.Ib(c,function(a,c){g.Vm(b,c,a)})}},Z6=function(a){var b=Math.min(a.A.length,1E3),c=["count="+b];
if(6<a.Ui&&0<b){var d=a.A[0].o;c.push("ofs="+d)}else d=0;for(var e=0;e<b;e++){var f=a.A[e].o,k=a.A[e].map;f=6>=a.Ui?e:f-d;try{g.Ib(k,function(a,b){c.push("req"+f+"_"+b+"="+(0,window.encodeURIComponent)(a))})}catch(l){c.push("req"+f+"_type="+(0,window.encodeURIComponent)("_badmap"))}}a.C=a.C.concat(a.A.splice(0,b));
return c.join("&")},rEa=function(a){a.Ac||a.Lg||(a.G=1,a.Lg=P6((0,g.B)(a.ME,a),0),a.bk=0)},$6=function(a){if(a.Ac||a.Lg||3<=a.bk)return!1;
a.G++;a.Lg=P6((0,g.B)(a.ME,a),sEa(a,a.bk));a.bk++;return!0},T6=function(a,b,c){a.Nr=c;
a.jg=b.Zg;a.F||nEa(a)},Y6=function(a){null!=a.Vi&&(g.x.clearTimeout(a.Vi),a.Vi=null)},sEa=function(a,b){var c=5E3+Math.floor(1E4*Math.random());
a.isActive()||(c*=2);return c*b},a7=function(a,b){if(2==b||9==b){var c=null;
a.Ad&&(c=null);var d=(0,g.B)(a.NX,a);c||(c=new g.Mm("//web.archive.org/web/20181009235331/https://www.google.com/images/cleardot.gif"),i6(c));cEa(c.toString(),1E4,d)}else K6(2);tEa(a,b)},tEa=function(a,b){a.o=0;
a.Ad&&a.Ad.yz(b);lEa(a);kEa(a)},lEa=function(a){a.o=0;
a.jg=-1;if(a.Ad)if(0==a.C.length&&0==a.A.length)a.Ad.Os();else{g.Wa(a.C);var b=g.Wa(a.A);a.C.length=0;a.A.length=0;a.Ad.Os(b)}},S6=function(a,b,c){var d=g.Wm(c);
if(""!=d.A)b&&g.Om(d,b+"."+d.A),g.Pm(d,d.D);else{var e=window.location;d=sDa(e.protocol,b?b+"."+e.hostname:e.hostname,+e.port,c)}a.wm&&g.Ib(a.wm,function(a,b){g.Vm(d,b,a)});
g.Vm(d,"VER",a.Ui);W6(a,d);return d},P6=function(a,b){if(!g.za(a))throw Error("Fn must not be null and must be a function");
return g.x.setTimeout(function(){a()},b)},K6=function(a){b7.dispatchEvent(new hEa(b7,a))},uEa=function(){},vEa=function(a,b){this.action=a;
this.params=b||{}},c7=function(a,b){g.M.call(this);
this.o=new g.V(this.YV,0,this);g.N(this,this.o);this.Bd=5E3;this.A=0;if(g.za(a))b&&(a=(0,g.B)(a,b));else if(a&&g.za(a.handleEvent))a=(0,g.B)(a.handleEvent,a);else throw Error("Invalid listener argument");this.B=a},d7=function(a,b,c){this.L=a;
this.F=b;this.B=new g.pD;this.A=new c7(this.xY,this);this.o=this.fb=null;this.K=!1;this.D=null;this.J="";this.H=this.C=0;this.G=[];this.N=c||!1},wEa=function(a){return{firstTestResults:[""],
secondTestResults:!a.o.Nr,sessionId:a.o.B,arrayId:a.o.Pk}},xEa=function(a,b){a.H=b||0;
a.A.stop();a.o&&(3==a.o.o&&qEa(a.o),mEa(a.o));a.H=0},e7=function(a){return!!a.o&&3==a.o.o},yEa=function(a,b){(a.F.loungeIdToken=b)||a.A.stop()},f7=function(a){this.port=this.domain="";
this.o="/api/lounge";this.A=!0;a=a||window.document.location.href;var b=g.Qg(a)||"";b&&(this.port=":"+b);this.domain=g.Pg(a)||"";a=g.Gb;0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>g.zb(a,"10.0")&&(this.A=!1))},g7=function(a,b){var c=a.o;
if(g.u(void 0)?0:a.A)c="https://"+a.domain+a.port+a.o;return g.Zg(c+b,{})},h7=function(a,b,c,d,e){a={format:"JSON",
method:"POST",context:a,timeout:5E3,withCredentials:!1,onSuccess:g.Da(a.C,d,!0),onError:g.Da(a.B,e),Fd:g.Da(a.D,e)};c&&(a.Rb=c,a.headers={"Content-Type":"application/x-www-form-urlencoded"});return g.zE(b,a)},CEa=function(){var a=zEa;
AEa();i7.push(a);BEa(i7)},j7=function(a,b){AEa();
var c=i7,d=DEa(a,String(b));g.Oa(c)?EEa(d):(BEa(c),(0,g.D)(c,function(a){a(d)}))},AEa=function(){i7||(i7=g.y("yt.mdx.remote.debug.handlers_")||[],g.ua("yt.mdx.remote.debug.handlers_",i7,void 0))},EEa=function(a){var b=(k7+1)%50;
k7=b;l7[b]=a;m7||(m7=49==b)},BEa=function(a){var b=l7;
if(b[0]){var c=k7,d=m7?c:-1;do{d=(d+1)%50;var e=b[d];(0,g.D)(a,function(a){a(e)})}while(d!=c);
l7=Array(50);k7=-1;m7=!1}},DEa=function(a,b){var c=((0,g.H)()-FEa)/1E3;
c.toFixed&&(c=c.toFixed(3));var d=[];d.push("[",c+"s","] ");d.push("[","yt.mdx.remote","] ");d.push(a+": "+b,"\n");return d.join("")},n7=function(a){g.SF.call(this);
this.G=a;this.o=[]},GEa=function(a,b){var c=a.get(b.uuid)||a.get(b.id);
if(c){var d=c.name;c.id=b.id||c.id;c.name=b.name;c.token=b.token;c.uuid=b.uuid||c.uuid;return c.name!=d}a.o.push(b);return!0},HEa=function(a,b){var c=a.o.length!=b.length;
a.o=(0,g.Vd)(a.o,function(a){return!!q6(b,a)});
for(var d=0,e=b.length;d<e;d++)c=GEa(a,b[d])||c;return c},IEa=function(a,b){var c=a.o.length;
a.o=(0,g.Vd)(a.o,function(a){return!(a||b?!a!=!b?0:a.id==b.id:1)});
return a.o.length<c},o7=function(a,b,c,d){g.SF.call(this);
this.F=a;this.D=b;this.B=c;this.C=d;this.A=0;this.o=null;this.Ea=window.NaN},q7=function(a){n7.call(this,"LocalScreenService");
this.B=a;this.A=window.NaN;p7(this);this.info("Initializing with "+o6(this.o))},JEa=function(a){if(a.o.length){var b=(0,g.I)(a.o,function(a){return a.id}),c=g7(a.B,"/pairing/get_lounge_token_batch");
h7(a.B,c,{screen_ids:b.join(",")},(0,g.B)(a.VL,a),(0,g.B)(a.UL,a))}},p7=function(a){var b=ADa(GDa());
b=(0,g.Vd)(b,function(a){return!a.uuid});
return HEa(a,b)},r7=function(a,b){IDa((0,g.I)(a.o,yDa));
b&&HDa()},t7=function(a,b){g.SF.call(this);
this.F=b;var c=g.oH("yt-remote-online-screen-ids")||"";c=c?c.split(","):[];for(var d={},e=this.F(),f=0,k=e.length;f<k;++f){var l=e[f].id;d[l]=g.Na(c,l)}this.o=d;this.D=a;this.B=this.C=window.NaN;this.A=null;s7("Initialized with "+g.Hg(this.o))},KEa=function(a,b,c){var d=g7(a.D,"/pairing/get_screen_availability");
h7(a.D,d,{lounge_token:b.token},(0,g.B)(function(a){a=a.screens||[];for(var d=0,e=a.length;d<e;++d)if(a[d].loungeToken==b.token){c("online"==a[d].status);return}c(!1)},a),(0,g.B)(function(){c(!1)},a))},u7=function(a,b){a:if(g.Ob(b)!=g.Ob(a.o))var c=!1;
else{c=g.Rb(b);for(var d=0,e=c.length;d<e;++d)if(!a.o[c[d]]){c=!1;break a}c=!0}c||(s7("Updated online screens: "+g.Hg(a.o)),a.o=b,a.V("screenChange"));LEa(a)},v7=function(a){(0,window.isNaN)(a.B)||g.kE(a.B);
a.B=g.iE((0,g.B)(a.Jw,a),0<a.C&&a.C<(0,g.H)()?2E4:1E4)},s7=function(a){j7("OnlineScreenService",a)},MEa=function(a){var b={};
(0,g.D)(a.F(),function(a){a.token?b[a.token]=a.id:this.sc("Requesting availability of screen w/o lounge token.")});
return b},LEa=function(a){a=g.Rb(g.Jb(a.o,function(a){return a}));
g.fb(a);a.length?g.nH("yt-remote-online-screen-ids",a.join(","),60):g.pH("yt-remote-online-screen-ids")},w7=function(a){n7.call(this,"ScreenService");
this.F=a;this.A=this.B=null;this.C=[];this.D={};NEa(this)},PEa=function(a,b,c,d,e,f){a.info("getAutomaticScreenByIds "+c+" / "+b);
c||(c=a.D[b]);var k=a.Ee();if(k=(c?r6(k,c):null)||r6(k,b)){k.uuid=b;var l=x7(a,k);KEa(a.A,l,function(a){e(a?l:null)})}else c?OEa(a,c,(0,g.B)(function(a){var f=x7(this,new l6({name:d,
screenId:c,loungeToken:a,dialId:b||""}));KEa(this.A,f,function(a){e(a?f:null)})},a),f):e(null)},QEa=function(a,b){for(var c=0,d=a.o.length;c<d;++c)if(a.o[c].name==b)return a.o[c];
return null},OEa=function(a,b,c,d){a.info("requestLoungeToken_ for "+b);
var e={Rb:{screen_ids:b},method:"POST",context:a,onSuccess:function(a,e){var f=e&&e.screens||[];f[0]&&f[0].screenId==b?c(f[0].loungeToken):d(Error("Missing lounge token in token response"))},
onError:function(){d(Error("Request screen lounge token failed"))}};
g.zE(g7(a.F,"/pairing/get_lounge_token_batch"),e)},REa=function(a){a.o=a.B.Ee();
var b=a.D,c={},d;for(d in b)c[b[d]]=d;b=0;for(d=a.o.length;b<d;++b){var e=a.o[b];e.uuid=c[e.id]||""}a.info("Updated manual screens: "+o6(a.o))},NEa=function(a){y7(a);
a.B=new q7(a.F);a.B.subscribe("screenChange",(0,g.B)(a.jM,a));REa(a);a.C=ADa(g.oH("yt-remote-automatic-screen-cache")||[]);y7(a);a.info("Initializing automatic screens: "+o6(a.C));a.A=new t7(a.F,(0,g.B)(a.Ee,a,!0));a.A.subscribe("screenChange",(0,g.B)(function(){this.V("onlineScreenChange")},a))},x7=function(a,b){var c=a.get(b.id);
c?(c.uuid=b.uuid,b=c):((c=r6(a.C,b.uuid))?(c.id=b.id,c.token=b.token,b=c):a.C.push(b),g.nH("yt-remote-automatic-screen-cache",(0,g.I)(a.C,yDa)));y7(a);a.D[b.uuid]=b.id;g.nH("yt-remote-device-id-map",a.D,31536E3);return b},y7=function(a){a.D=g.oH("yt-remote-device-id-map")||{}},z7=function(a,b,c){g.SF.call(this);
this.N=c;this.J=a;this.A=b;this.B=null},A7=function(a,b){j7(a.N,b)},B7=function(a,b){z7.call(this,a,b,"CastSession");
this.o=null;this.C=0;this.F=(0,g.B)(this.DY,this);this.D=(0,g.B)(this.KW,this);this.C=g.iE((0,g.B)(function(){SEa(this,null)},this),12E4)},TEa=function(a){a.info("sendYoutubeMessage_: getMdxSessionStatus "+g.Hg(void 0));
var b={type:"getMdxSessionStatus"};a.o?a.o.sendMessage("urn:x-cast:com.google.youtube.mdx",b,g.A,(0,g.B)(function(){A7(this,"Failed to send message: getMdxSessionStatus.")},a)):A7(a,"Sending yt message without session: "+g.Hg(b))},SEa=function(a,b){g.kE(a.C);
if(b){if(a.info("onConnectedScreenId_: Received screenId: "+b),!a.B||a.B.id!=b){var c=(0,g.B)(a.Gq,a),d=(0,g.B)(a.Je,a);a.GA(b,c,d,5)}}else a.Je(Error("Waiting for session status timed out."))},C7=function(a,b,c){z7.call(this,a,b,"DialSession");
this.C=this.H=null;this.K="";this.O=c;this.D=null;this.G=g.A;this.F=window.NaN;this.L=(0,g.B)(this.GY,this);this.o=g.A},UEa=function(a){a.o=a.J.gH(a.K,a.A.label,a.A.friendlyName,(0,g.B)(function(a){this.o=g.A;
this.Gq(a)},a),(0,g.B)(function(a){this.o=g.A;
this.Je(a)},a))},VEa=function(a){var b={};
b.pairingCode=a.K;b.theme=a.O;if(a.D){var c=a.D.currentTime||0;b.v=a.D.videoId;b.t=c}KDa()&&(b.env_useStageMdx=1);return g.Xg(b)},D7=function(a,b){z7.call(this,a,b,"ManualSession");
this.o=g.iE((0,g.B)(this.Rk,this,null),150)},E7=function(a,b,c,d){g.SF.call(this);
this.A=a;this.G=b||"233637DE";this.F=c||"cl";this.H=d||!1;this.o=null;this.D=!1;this.B=[];this.C=(0,g.B)(this.kV,this)},WEa=function(a,b){return b?g.Ja(a.B,function(a){return m6(b,a.label)},a):null},F7=function(a){j7("Controller",a)},zEa=function(a){window.chrome&&window.chrome.cast&&window.chrome.cast.logMessage&&window.chrome.cast.logMessage(a)},G7=function(a){return a.D||!!a.B.length||!!a.o},H7=function(a,b,c){b!=a.o&&(g.lf(a.o),(a.o=b)?(c?a.V("yt-remote-cast2-receiver-resumed",b.A):a.V("yt-remote-cast2-receiver-selected",
b.A),b.subscribe("sessionScreen",(0,g.B)(a.KE,a,b)),b.B?a.V("yt-remote-cast2-session-change",b.B):c&&a.o.Rk(null)):a.V("yt-remote-cast2-session-change",null))},XEa=function(a){var b=a.A.fH(),c=a.o&&a.o.A;
a=(0,g.I)(b,function(a){c&&m6(a,c.label)&&(c=null);var b=a.uuid?a.uuid:a.id,d=WEa(this,a);d?(d.label=b,d.friendlyName=a.name):(d=new window.chrome.cast.Receiver(b,a.name),d.receiverType=window.chrome.cast.ReceiverType.CUSTOM);return d},a);
c&&(c.receiverType!=window.chrome.cast.ReceiverType.CUSTOM&&(c=new window.chrome.cast.Receiver(c.label,c.friendlyName),c.receiverType=window.chrome.cast.ReceiverType.CUSTOM),a.push(c));return a},cFa=function(a,b,c,d,e,f,k){YEa()?ZEa(b,e,f,k)&&(J7(!0),window.chrome&&window.chrome.cast&&window.chrome.cast.isAvailable?$Ea(a,c):(window.__onGCastApiAvailable=function(b,d){b?$Ea(a,c):(K7("Failed to load cast API: "+d),L7(!1),J7(!1),g.pH("yt-remote-cast-available"),g.pH("yt-remote-cast-receiver"),aFa(),
c(!1))},d?ODa():C6("CriOS")?TDa():C6("Android")&&C6("Chrome/")&&window.navigator.presentation?UDa():window.chrome&&window.navigator.presentation&&!C6("Edge")?(D6(),z6(bFa.map(RDa))):A6())):I7("Cannot initialize because not running Chrome")},aFa=function(){I7("dispose");
var a=M7();a&&a.dispose();g.ua("yt.mdx.remote.cloudview.instance_",null,void 0);dFa(!1);g.dG(N7);N7.length=0},O7=function(){return!!g.oH("yt-remote-cast-installed")},eFa=function(){var a=g.oH("yt-remote-cast-receiver");
return a?a.friendlyName:null},fFa=function(){I7("clearCurrentReceiver");
g.pH("yt-remote-cast-receiver")},gFa=function(){return O7()?M7()?M7().getCastSession():(K7("getCastSelector: Cast is not initialized."),null):(K7("getCastSelector: Cast API is not installed!"),null)},Q7=function(){O7()?M7()?P7()?(I7("Requesting cast selector."),M7().requestSession()):(I7("Wait for cast API to be ready to request the session."),N7.push(g.cG("yt-remote-cast2-api-ready",Q7))):K7("requestCastSelector: Cast is not initialized."):K7("requestCastSelector: Cast API is not installed!")},R7=
function(a,b){P7()?M7().setConnectedScreenStatus(a,b):K7("setConnectedScreenStatus called before ready.")},YEa=function(){var a=0<=g.Gb.search(/ (CrMo|Chrome|CriOS)\//);
return g.EI||a},hFa=function(a,b){M7().init(a,b)},ZEa=function(a,b,c,d){var e=!1;
M7()||(a=new E7(a,b,c,d),a.subscribe("yt-remote-cast2-availability-change",function(a){g.nH("yt-remote-cast-available",a);g.gG("yt-remote-cast2-availability-change",a)}),a.subscribe("yt-remote-cast2-receiver-selected",function(a){I7("onReceiverSelected: "+a.friendlyName);
g.nH("yt-remote-cast-receiver",a);g.gG("yt-remote-cast2-receiver-selected",a)}),a.subscribe("yt-remote-cast2-receiver-resumed",function(a){I7("onReceiverResumed: "+a.friendlyName);
g.nH("yt-remote-cast-receiver",a)}),a.subscribe("yt-remote-cast2-session-change",function(a){I7("onSessionChange: "+n6(a));
a||g.pH("yt-remote-cast-receiver");g.gG("yt-remote-cast2-session-change",a)}),g.ua("yt.mdx.remote.cloudview.instance_",a,void 0),e=!0);
I7("cloudview.createSingleton_: "+e);return e},M7=function(){return g.y("yt.mdx.remote.cloudview.instance_")},$Ea=function(a,b){L7(!0);
J7(!1);hFa(a,function(a){a?(dFa(!0),g.fG("yt-remote-cast2-api-ready")):(K7("Failed to initialize cast API."),L7(!1),g.pH("yt-remote-cast-available"),g.pH("yt-remote-cast-receiver"),aFa());b(a)})},I7=function(a){j7("cloudview",a)},K7=function(a){j7("cloudview",a)},L7=function(a){I7("setCastInstalled_ "+a);
g.nH("yt-remote-cast-installed",a)},P7=function(){return!!g.y("yt.mdx.remote.cloudview.apiReady_")},dFa=function(a){I7("setApiReady_ "+a);
g.ua("yt.mdx.remote.cloudview.apiReady_",a,void 0)},J7=function(a){g.ua("yt.mdx.remote.cloudview.initializing_",a,void 0)},S7=function(a){this.index=-1;
this.videoId=this.listId="";this.volume=this.o=-1;this.muted=!1;this.audioTrackId=null;this.G=this.H=0;this.A=null;this.hasNext=this.ng=!1;this.K=this.J=this.B=this.D=0;this.C=window.NaN;this.F=!1;this.reset(a)},T7=function(a){a.audioTrackId=null;
a.A=null;a.o=-1;a.ng=!1;a.hasNext=!1;a.H=0;a.G=(0,g.H)();a.D=0;a.B=0;a.J=0;a.K=0;a.C=window.NaN;a.F=!1},U7=function(a){return a.qb()?((0,g.H)()-a.G)/1E3:0},V7=function(a,b){a.H=b;
a.G=(0,g.H)()},W7=function(a){switch(a.o){case 1:case 1081:return((0,g.H)()-a.G)/1E3+a.H;
case -1E3:return 0}return a.H},X7=function(a,b,c){var d=a.videoId;
a.videoId=b;a.index=c;b!=d&&T7(a)},Y7=function(a){var b={};
b.index=a.index;b.listId=a.listId;b.videoId=a.videoId;b.playerState=a.o;b.volume=a.volume;b.muted=a.muted;b.audioTrackId=a.audioTrackId;b.trackData=g.ec(a.A);b.hasPrevious=a.ng;b.hasNext=a.hasNext;b.playerTime=a.H;b.playerTimeAt=a.G;b.seekableStart=a.D;b.seekableEnd=a.B;b.duration=a.J;b.loadedTime=a.K;b.liveIngestionTime=a.C;return b},$7=function(a,b){g.SF.call(this);
this.o=0;this.C=a;this.F=[];this.D=new g.GC;this.B=this.A=null;this.J=(0,g.B)(this.DS,this);this.G=(0,g.B)(this.Jn,this);this.H=(0,g.B)(this.CS,this);this.K=(0,g.B)(this.PS,this);var c=0;a?(c=a.getProxyState(),3!=c&&(a.subscribe("proxyStateChange",this.Nx,this),iFa(this))):c=3;0!=c&&(b?this.Nx(c):g.iE((0,g.B)(function(){this.Nx(c)},this),0));
var d=gFa();d&&Z7(this,d);this.subscribe("yt-remote-cast2-session-change",this.K)},a8=function(a){return new S7(a.C.getPlayerContextData())},iFa=function(a){(0,g.D)("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange".split(" "),function(a){this.F.push(this.C.subscribe(a,g.Da(this.fV,a),this))},a)},jFa=function(a){(0,g.D)(a.F,function(a){this.C.unsubscribeByKey(a)},a);
a.F.length=0},b8=function(a,b){50>a.D.Bc()&&g.IC(a.D,b)},d8=function(a,b,c){var d=a8(a);
V7(d,c);-1E3!=d.o&&(d.o=b);c8(a,d)},e8=function(a,b,c){a.C.sendMessage(b,c)},c8=function(a,b){jFa(a);
a.C.setPlayerContextData(Y7(b));iFa(a)},Z7=function(a,b){a.B&&(a.B.removeUpdateListener(a.J),a.B.removeMediaListener(a.G),a.Jn(null));
a.B=b;a.B&&(j7("CP","Setting cast session: "+a.B.sessionId),a.B.addUpdateListener(a.J),a.B.addMediaListener(a.G),a.B.media.length&&a.Jn(a.B.media[0]))},kFa=function(a){var b=a.A.media,c=a.A.customData;
if(b&&c){var d=a8(a);b.contentId!=d.videoId&&j7("CP","Cast changing video to: "+b.contentId);d.videoId=b.contentId;d.o=c.playerState;V7(d,a.A.getEstimatedTime());c8(a,d)}else j7("CP","No cast media video. Ignoring state update.")},f8=function(a,b,c){return(0,g.B)(function(a){this.sc("Failed to "+b+" with cast v2 channel. Error code: "+a.code);
a.code!=window.chrome.cast.ErrorCode.TIMEOUT&&(this.sc("Retrying "+b+" using MDx browser channel."),e8(this,b,c))},a)},g8=function(a,b,c){g.SF.call(this);
this.D=window.NaN;this.O=!1;this.K=this.J=this.L=this.N=window.NaN;this.Y=[];this.C=this.G=this.B=this.gb=this.o=null;this.ua=a;this.Y.push(g.BF(window,"beforeunload",(0,g.B)(this.ML,this)));this.A=[];this.gb=new S7;this.ba=b.id;this.o=lFa(this,c);this.o.subscribe("handlerOpened",this.HS,this);this.o.subscribe("handlerClosed",this.ES,this);this.o.subscribe("handlerError",this.FS,this);this.o.subscribe("handlerMessage",this.GS,this);yEa(this.o,b.token);this.subscribe("remoteQueueChange",function(){var a=
this.gb.videoId;g.qH()&&g.nH("yt-remote-session-video-id",a)},this)},h8=function(a){j7("conn",a)},lFa=function(a,b){return new d7(g7(a.ua,"/bc"),b)},i8=function(a,b){a.V("proxyStateChange",b)},mFa=function(a){a.D=g.iE((0,g.B)(function(){h8("Connecting timeout");
this.F(1)},a),2E4)},j8=function(a){g.kE(a.D);
a.D=window.NaN},k8=function(a){g.kE(a.N);
a.N=window.NaN},nFa=function(a){l8(a);
a.L=g.iE((0,g.B)(function(){m8(this,"getNowPlaying")},a),2E4)},l8=function(a){g.kE(a.L);
a.L=window.NaN},pFa=function(a,b){b&&(j8(a),k8(a));
b==(e7(a.o)&&(0,window.isNaN)(a.D))?b&&(i8(a,1),m8(a,"getSubtitlesTrack")):b?(a.aa()&&a.gb.reset(),i8(a,1),m8(a,"getNowPlaying"),oFa(a)):a.F(1)},qFa=function(a,b){var c=b.params.videoId;
delete b.params.videoId;c==a.gb.videoId&&(g.Zb(b.params)?a.gb.A=null:a.gb.A=b.params,a.V("remotePlayerChange"))},rFa=function(a,b){var c=b.params.videoId||b.params.video_id,d=(0,window.parseInt)(b.params.currentIndex,10);
a.gb.listId=b.params.listId||a.gb.listId;X7(a.gb,c,d);a.V("remoteQueueChange")},tFa=function(a,b){b.params=b.params||{};
rFa(a,b);sFa(a,b);a.V("autoplayDismissed")},sFa=function(a,b){var c=(0,window.parseInt)(b.params.currentTime||b.params.current_time,10);
V7(a.gb,(0,window.isNaN)(c)?0:c);c=(0,window.parseInt)(b.params.state,10);c=(0,window.isNaN)(c)?-1:c;-1==c&&-1E3==a.gb.o&&(c=-1E3);a.gb.o=c;c=Number(b.params.loadedTime);a.gb.K=(0,window.isNaN)(c)?0:c;c=Number(b.params.duration);a.gb.J=(0,window.isNaN)(c)?0:c;c=a.gb;var d=Number(b.params.liveIngestionTime);c.C=d;c.F=(0,window.isNaN)(d)?!1:!0;c=a.gb;d=Number(b.params.seekableStartTime);var e=Number(b.params.seekableEndTime);c.D=(0,window.isNaN)(d)?0:d;c.B=(0,window.isNaN)(e)?0:e;1==a.gb.o?nFa(a):l8(a);
a.V("remotePlayerChange")},uFa=function(a,b){if(-1E3!=a.gb.o){var c=1085;
switch((0,window.parseInt)(b.params.adState,10)){case 1:c=1081;break;case 2:c=1084;break;case 0:c=1083}a.gb.o=c;c=(0,window.parseInt)(b.params.currentTime,10);V7(a.gb,(0,window.isNaN)(c)?0:c);a.V("remotePlayerChange")}},vFa=function(a,b){var c="true"==b.params.muted;
a.gb.volume=(0,window.parseInt)(b.params.volume,10);a.gb.muted=c;a.V("remotePlayerChange")},wFa=function(a,b){a.G=b.params.videoId;
a.V("nowAutoplaying",(0,window.parseInt)(b.params.timeout,10))},xFa=function(a,b){var c="true"==b.params.hasNext;
a.gb.ng="true"==b.params.hasPrevious;a.gb.hasNext=c;a.V("previousNextChange")},oFa=function(a){g.kE(a.K);
a.K=g.iE((0,g.B)(a.F,a,1),864E5)},m8=function(a,b,c){c?h8("Sending: action="+b+", params="+g.Hg(c)):h8("Sending: action="+b);
a.o.sendMessage(b,c)},n8=function(a){n7.call(this,"ScreenServiceProxy");
this.ld=a;this.A=[];this.A.push(this.ld.$_s("screenChange",(0,g.B)(this.BY,this)));this.A.push(this.ld.$_s("onlineScreenChange",(0,g.B)(this.FU,this)))},CFa=function(a){var b={device:"Desktop",
app:"youtube-desktop"};b=g.bE("MDX_CONFIG")||b;CDa();v6();o8||(o8=new f7(b?b.loungeApiHost:void 0),KDa()&&(o8.o="/api/loungedev"));p8||(p8=g.y("yt.mdx.remote.deferredProxies_")||[],g.ua("yt.mdx.remote.deferredProxies_",p8,void 0));yFa();var c=q8();if(!c){var d=new w7(o8);g.ua("yt.mdx.remote.screenService_",d,void 0);c=q8();var e=!1,f=void 0,k=void 0,l=!1;b&&(e=!!b.loadCastApiSetupScript,f=b.appId,k=b.theme,l=!!b.disableDial);cFa(a,d,function(a){a?r8()&&R7(r8(),"YouTube TV"):d.subscribe("onlineScreenChange",
function(){g.gG("yt-remote-receiver-availability-change")})},e,f,k,l)}b&&!g.y("yt.mdx.remote.initialized_")&&(g.ua("yt.mdx.remote.initialized_",!0,void 0),s8("Initializing: "+g.Hg(b)),t8.push(g.cG("yt-remote-cast2-availability-change",function(){g.gG("yt-remote-receiver-availability-change")})),t8.push(g.cG("yt-remote-cast2-receiver-selected",function(){u8(null);
g.gG("yt-remote-auto-connect","cast-selector-receiver")})),t8.push(g.cG("yt-remote-cast2-receiver-resumed",function(){g.gG("yt-remote-receiver-resumed","cast-selector-receiver")})),t8.push(g.cG("yt-remote-cast2-session-change",zFa)),t8.push(g.cG("yt-remote-connection-change",function(a){a?R7(r8(),"YouTube TV"):v8()||(R7(null,null),fFa())})),a=w8(),b.isAuto&&(a.id+="#dial"),g.fE("desktop_enable_autoplay")&&(a.capabilities=["atp"]),a.name=b.device,a.app=b.app,(k=b.theme)&&(a.theme=k),s8(" -- with channel params: "+
g.Hg(a)),AFa(a),c.start(),r8()||BFa())},EFa=function(){var a=DFa();
O7()&&g.oH("yt-remote-cast-available")&&a.push({key:"cast-selector-receiver",name:"Cast..."});return a},DFa=function(){var a=q8().ld.$_gos();
var b=x8();b&&y8()&&(q6(a,b)||a.push(b));return BDa(a)},z8=function(){var a=FFa();
!a&&O7()&&eFa()&&(a={key:"cast-selector-receiver",name:eFa()});return a},FFa=function(){var a=DFa(),b=x8();
b||(b=v8());return g.Ja(a,function(a){return b&&m6(b,a.key)?!0:!1})},x8=function(){var a=r8();
if(!a)return null;var b=q8().Ee();return r6(b,a)},zFa=function(a){s8("remote.onCastSessionChange_: "+n6(a));
if(a){var b=x8();b&&b.id==a.id?R7(b.id,"YouTube TV"):(b&&A8(),B8(a,1))}else y8()&&A8()},A8=function(){P7()?M7().stopSession():K7("stopSession called before API ready.");
var a=y8();a&&(a.disconnect(1),C8(null))},D8=function(){var a=y8();
return!!a&&3!=a.getProxyState()},s8=function(a){j7("remote",a)},q8=function(){if(!E8){var a=g.y("yt.mdx.remote.screenService_");
E8=a?new n8(a):null}return E8},r8=function(){return g.y("yt.mdx.remote.currentScreenId_")},GFa=function(a){g.ua("yt.mdx.remote.currentScreenId_",a,void 0)},HFa=function(){return g.y("yt.mdx.remote.connectData_")},u8=function(a){g.ua("yt.mdx.remote.connectData_",a,void 0)},y8=function(){return g.y("yt.mdx.remote.connection_")},C8=function(a){var b=y8();
u8(null);a||GFa("");g.ua("yt.mdx.remote.connection_",a,void 0);p8&&((0,g.D)(p8,function(b){b(a)}),p8.length=0);
b&&!a?g.gG("yt-remote-connection-change",!1):!b&&a&&g.gG("yt-remote-connection-change",!0)},v8=function(){var a=g.qH();
if(!a)return null;var b=q8().Ee();return r6(b,a)},B8=function(a,b){x8()&&x8();
GFa(a.id);var c=new g8(o8,a,w8());c.connect(b,HFa());c.subscribe("beforeDisconnect",function(a){g.gG("yt-remote-before-disconnect",a)});
c.subscribe("beforeDispose",function(){y8()&&C8(null)});
C8(c)},BFa=function(){var a=v8();
a?(s8("Resume connection to: "+n6(a)),B8(a,0)):(w6(),fFa(),s8("Skipping connecting because no session screen found."))},yFa=function(){var a=w8();
if(g.Zb(a)){a=u6();var b=g.oH("yt-remote-session-name")||"",c=g.oH("yt-remote-session-app")||"";a={device:"REMOTE_CONTROL",id:a,name:b,app:c,mdxVersion:3};g.ua("yt.mdx.remote.channelParams_",a,void 0)}},w8=function(){return g.y("yt.mdx.remote.channelParams_")||{}},AFa=function(a){a?(g.nH("yt-remote-session-app",a.app),g.nH("yt-remote-session-name",a.name)):(g.pH("yt-remote-session-app"),g.pH("yt-remote-session-name"));
g.ua("yt.mdx.remote.channelParams_",a,void 0)},F8=function(a,b,c){g.M.call(this);
this.C=a;this.T=b;this.A=new g.PF(this);g.N(this,this.A);this.A.R(b,"onCaptionsTrackListChanged",this.aU);this.A.R(b,"captionschanged",this.BS);this.A.R(b,"captionssettingschanged",this.pG);this.A.R(b,"videoplayerreset",this.Hq);this.A.R(b,"mdxautoplaycancel",this.KK);this.O=this.A.R(b,"onVolumeChange",this.qE);this.G=!1;this.o=c;c.subscribe("proxyStateChange",this.GE,this);c.subscribe("remotePlayerChange",this.Ln,this);c.subscribe("remoteQueueChange",this.Hq,this);c.subscribe("autoplayUpNext",this.cE,
this);c.subscribe("previousNextChange",this.DE,this);c.subscribe("nowAutoplaying",this.uE,this);c.subscribe("autoplayDismissed",this.bE,this);this.suggestion=null;this.H=new g.TP(64);this.B=new g.V(this.lG,500,this);g.N(this,this.B);this.D=new g.V(this.mG,1E3,this);g.N(this,this.D);this.K=new E6(this.cY,0,this);g.N(this,this.K);this.F={};this.L=new g.V(this.NG,1E3,this);g.N(this,this.L);this.J=new g.nl(this.FQ,1E3,this);g.N(this,this.J);this.N=g.A;this.pG();this.Hq();this.Ln()},G8=function(a,b){var c=
a.C,d=a.T.getVideoData().lengthSeconds;
c.J=b||0;c.player.V("progresssync",b,d)},IFa=function(a){G8(a,0);
a.B.stop();H8(a,new g.TP(64))},J8=function(a,b){if(I8(a)&&!a.G){var c=null;
b&&(c={style:a.T.xj()},g.gc(c,b));a.o.aG(a.T.getVideoData(1).videoId,c);a.F=a8(a.o).A}},K8=function(a,b){var c=a.T.vg();
if(c){var d=c.Ce();var e=c.listId.toString()}var f=a.T.getVideoData(1);c=a.o;var k=f.videoId,l=d;d=f.playerParams;var m=f.Ik;f=rDa(f);var n=a8(c);l=l||0;var p={videoId:k,currentIndex:l};X7(n,k,l);g.u(b)&&(V7(n,b),p.currentTime=b);g.u(e)&&(p.listId=e);null!=d&&(p.playerParams=d);null!=m&&(p.clickTrackingParams=m);null!=f&&(p.locationInfo=g.Hg(f));e8(c,"setPlaylist",p);e||c8(c,n);H8(a,new g.TP(1))},JFa=function(a,b){if(b){var c=a.T.Fc("captions","tracklist",{AB:1});
c&&c.length?(a.T.Xd("captions","track",b),a.G=!1):(a.T.Zk("captions"),a.G=!0)}else a.T.Xd("captions","track",{})},I8=function(a){return a8(a.o).videoId==a.T.getVideoData(1).videoId},H8=function(a,b){a.D.stop();
var c=a.H;if(!g.YP(c,b)){var d=g.X(b,2);d!=g.X(a.H,2)&&g.eU(a.T,d);a.H=b;KFa(a.C,c,b)}},L8=function(a){g.W.call(this,{I:"div",
M:"ytp-remote",P:[{I:"div",M:"ytp-remote-display-status",P:[{I:"div",M:"ytp-remote-display-status-icon",P:[g.$qa()]},{I:"div",M:"ytp-remote-display-status-text",da:"{{statustext}}"}]}]});this.B=new g.dV(this,250);g.N(this,this.B);this.C=a;this.R(a,"presentingplayerstatechange",this.D);LFa(this,g.$T(a))},LFa=function(a,b){if(3==a.C.Sa()){var c={RECEIVER_NAME:a.C.Fc("remote","currentReceiver").name};
c=g.X(b,128)?g.mX("Error on $RECEIVER_NAME",c):b.qb()||g.X(b,4)?g.mX("Playing on $RECEIVER_NAME",c):g.mX("Connected to $RECEIVER_NAME",c);a.updateValue("statustext",c);a.B.show()}else a.B.hide()},M8=function(a,b){g.CY.call(this,"Play on",0,a,b);
this.T=a;this.H={};this.R(a,"onMdxReceiversChange",this.K);this.R(a,"presentingplayerstatechange",this.K);this.K()},N8=function(a){g.GU.call(this,a);
this.A={key:p6(),name:"This computer"};this.C=null;this.D=[];this.K=this.o=null;this.H=[this.A];this.B=this.A;this.F=new g.TP(64);this.J=0;this.G=-1;if(!g.hN(g.Y(this.player))){a=this.player;var b=g.fI(a);b&&(b=b.An())&&(b=new M8(a,b),g.N(this,b));b=new L8(a);g.N(this,b);g.uU(a,b.element,4)}},KFa=function(a,b,c){a.F=c;
a.player.V("presentingplayerstatechange",new g.cQ(c,b))},O8=function(a,b){if(b.key!=a.B.key)if(b.key==a.A.key)A8();
else{a.B=b;var c=a.player.getPlaylistId();var d=a.player.getVideoData(1);var e=d.videoId;if(c||e){var f=a.player.vg();if(f){var k=[];for(var l=0;l<f.getLength();l++)k[l]=f.bc(l).videoId}else k=[e];f=a.player.getCurrentTime(1);c={videoIds:k,listId:c,videoId:e,playerParams:d.playerParams,clickTrackingParams:d.Ik,index:Math.max(a.player.GC(),0),currentTime:0==f?void 0:f};(d=rDa(d))&&(c.locationInfo=d);d=c}else d=null;s8("Connecting to: "+g.Hg(b));"cast-selector-receiver"==b.key?(u8(d||null),P7()?M7().setLaunchParams(d||
null):K7("setLaunchParams called before ready.")):!d&&D8()&&r8()==b.key?g.gG("yt-remote-connection-change",!0):(A8(),u8(d||null),d=q8().Ee(),(d=r6(d,b.key))&&B8(d,1))}},$Da={"\x00":"\\0",
"\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\","<":"<"},O6={"'":"\\'"},MFa={},xDa={QZ:"atp",B4:"ska",Q3:"que",b3:"mus",x4:"sus",d1:"dsp"};
k6.prototype.Wo=function(){var a=new k6({id:this.id,name:this.name,app:this.app,type:this.type,user:this.username,userAvatarUri:this.avatar,obfuscatedGaiaId:this.obfuscatedGaiaId,theme:this.theme,capabilities:Array.from(this.capabilities.values()).join(","),experiments:Array.from(this.experiments.values()).join(",")});a.B=this.B;a.A=this.A;a.o=this.o};
var x6,t6="",B6=y6("loadGamesSDK")?"/cast_game_sender.js":"/cast_sender.js",SDa=y6("loadCastFramework")||y6("loadCastApplicationFramework"),bFa=["pkedcjkdefgpdelpbcmbmeomcjbeemfm","enhhojjnijigcajfphajepfemndkmdlo"];g.C(E6,g.M);g.h=E6.prototype;g.h.HL=function(a){this.C=arguments;this.o=!1;this.Ea?this.B=(0,g.H)()+this.Bd:this.Ea=g.Cg(this.D,this.Bd)};
g.h.stop=function(){this.Ea&&(g.Dg(this.Ea),this.Ea=null);this.B=null;this.o=!1;this.C=[]};
g.h.pause=function(){++this.A};
g.h.resume=function(){this.A&&(--this.A,!this.A&&this.o&&(this.o=!1,this.F.apply(null,this.C)))};
g.h.X=function(){this.stop();E6.ea.X.call(this)};
g.h.IL=function(){this.B?(this.Ea=g.Cg(this.D,this.B-(0,g.H)()),this.B=null):(this.Ea=null,this.A?this.o=!0:(this.o=!1,this.F.apply(null,this.C)))};F6.prototype.stringify=function(a){return g.x.JSON.stringify(a,void 0)};
F6.prototype.parse=function(a){return g.x.JSON.parse(a,void 0)};g.h=G6.prototype;g.h.fj=null;g.h.Rf=!1;g.h.Ol=null;g.h.Gx=null;g.h.xl=null;g.h.zk=null;g.h.Sh=null;g.h.zi=null;g.h.Ej=null;g.h.Xc=null;g.h.bo=0;g.h.Sf=null;g.h.Pr=null;g.h.Th=null;g.h.Om=-1;g.h.HF=!0;g.h.Si=!1;g.h.Tt=0;g.h.Vq=null;var YDa={},J6={};g.h=G6.prototype;g.h.setTimeout=function(a){this.C=a};
g.h.ZW=function(a){a=a.target;var b=this.Vq;b&&3==g.Bx(a)?b.Km():this.ZG(a)};
g.h.ZG=function(a){try{if(a==this.Xc)a:{var b=g.Bx(this.Xc),c=this.Xc.A,d=this.Xc.getStatus();if(g.Id&&!g.tc(10)||g.Kd&&!g.sc("420+")){if(4>b)break a}else if(3>b||3==b&&!g.qf&&!g.Fx(this.Xc))break a;this.Si||4!=b||7==c||(8==c||0>=d?this.o.Kf(3):this.o.Kf(2));Q6(this);var e=this.Xc.getStatus();this.Om=e;var f=g.Fx(this.Xc);(this.Rf=200==e)?(4==b&&M6(this),this.D?(ZDa(this,b,f),g.qf&&this.Rf&&3==b&&(this.Z.W(this.A,"tick",this.VW),this.A.start())):L6(this,f),this.Rf&&!this.Si&&(4==b?this.o.Fq(this):
(this.Rf=!1,I6(this)))):(400==e&&0<f.indexOf("Unknown SID")?(this.Th=3,K6(13)):(this.Th=0,K6(14)),M6(this),N6(this))}}catch(k){this.Xc&&g.Fx(this.Xc)}finally{}};
g.h.VW=function(){var a=g.Bx(this.Xc),b=g.Fx(this.Xc);this.bo<b.length&&(Q6(this),ZDa(this,a,b),this.Rf&&4!=a&&I6(this))};
g.h.hW=function(a){P6((0,g.B)(this.gW,this,a),0)};
g.h.gW=function(a){this.Si||(Q6(this),L6(this,a),I6(this))};
g.h.PE=function(a){P6((0,g.B)(this.fW,this,a),0)};
g.h.fW=function(a){this.Si||(M6(this),this.Rf=a,this.o.Fq(this),this.o.Kf(4))};
g.h.cancel=function(){this.Si=!0;M6(this)};
g.h.xW=function(){this.Ol=null;var a=(0,g.H)();0<=a-this.Gx?(2!=this.zk&&this.o.Kf(3),M6(this),this.Th=2,K6(18),N6(this)):bEa(this,this.Gx-a)};g.h=eEa.prototype;g.h.Rt=null;g.h.Ke=null;g.h.Wq=!1;g.h.RA=null;g.h.mp=null;g.h.Lu=null;g.h.St=null;g.h.df=null;g.h.Zg=-1;g.h.Nm=null;g.h.Wl=null;g.h.connect=function(a){this.St=a;a=S6(this.o,null,this.St);K6(3);this.RA=(0,g.H)();var b=this.o.H;null!=b?(this.Nm=b[0],(this.Wl=b[1])?(this.df=1,fEa(this)):(this.df=2,U6(this))):(j6(a,"MODE","init"),this.Ke=new G6(this,void 0,void 0,void 0),this.Ke.fj=this.Rt,H6(this.Ke,a,!1,null,!0),this.df=0)};
g.h.LK=function(a){if(a)this.df=2,U6(this);else{K6(4);var b=this.o;b.jg=b.Fh.Zg;a7(b,9)}a&&this.Kf(2)};
g.h.ht=function(a){return this.o.ht(a)};
g.h.abort=function(){this.Ke&&(this.Ke.cancel(),this.Ke=null);this.Zg=-1};
g.h.QA=function(){return!1};
g.h.HE=function(a,b){this.Zg=a.Om;if(0==this.df)if(b){try{var c=this.A.parse(b)}catch(d){c=this.o;c.jg=this.Zg;a7(c,2);return}this.Nm=c[0];this.Wl=c[1]}else c=this.o,c.jg=this.Zg,a7(c,2);else if(2==this.df)if(this.Wq)K6(7),this.Lu=(0,g.H)();else if("11111"==b){if(K6(6),this.Wq=!0,this.mp=(0,g.H)(),c=this.mp-this.RA,!g.Id||g.tc(10)||500>c)this.Zg=200,this.Ke.cancel(),K6(12),T6(this.o,this,!0)}else K6(8),this.mp=this.Lu=(0,g.H)(),this.Wq=!1};
g.h.Fq=function(){this.Zg=this.Ke.Om;if(this.Ke.Rf)0==this.df?this.Wl?(this.df=1,fEa(this)):(this.df=2,U6(this)):2==this.df&&((!g.Id||g.tc(10)?!this.Wq:200>this.Lu-this.mp)?(K6(11),T6(this.o,this,!1)):(K6(12),T6(this.o,this,!0)));else{0==this.df?K6(9):2==this.df&&K6(10);var a=this.o;a.jg=this.Zg;a7(a,2)}};
g.h.Un=function(){return this.o.Un()};
g.h.isActive=function(){return this.o.isActive()};
g.h.Kf=function(a){this.o.Kf(a)};g.h=V6.prototype;g.h.wm=null;g.h.ne=null;g.h.Ac=null;g.h.Qt=null;g.h.rp=null;g.h.mz=null;g.h.Fp=null;g.h.Gn=0;g.h.UR=0;g.h.Ad=null;g.h.Kh=null;g.h.Lg=null;g.h.Vi=null;g.h.Fh=null;g.h.Nr=null;g.h.Pk=-1;g.h.PB=-1;g.h.jg=-1;g.h.nk=0;g.h.bk=0;g.h.Ui=8;var b7=new g.Pf;g.C(hEa,g.nf);g.C(iEa,g.nf);g.C(jEa,g.nf);g.h=V6.prototype;g.h.connect=function(a,b,c,d,e){K6(0);this.Qt=b;this.wm=c||{};d&&g.u(e)&&(this.wm.OSID=d,this.wm.OAID=e);this.F?(P6((0,g.B)(this.Jz,this,a),100),nEa(this)):this.Jz(a)};
g.h.Jz=function(a){this.Fh=new eEa(this);this.Fh.Rt=null;this.Fh.A=this.D;this.Fh.connect(a)};
g.h.QA=function(){return 0==this.o};
g.h.NE=function(a){this.Kh=null;qEa(this,a)};
g.h.ME=function(){this.Lg=null;this.Ac=new G6(this,this.B,"rpc",this.G);this.Ac.fj=null;this.Ac.Tt=0;var a=this.mz.clone();g.Vm(a,"RID","rpc");g.Vm(a,"SID",this.B);g.Vm(a,"CI",this.Nr?"0":"1");g.Vm(a,"AID",this.Pk);W6(this,a);if(!g.Id||g.tc(10))g.Vm(a,"TYPE","xmlhttp"),H6(this.Ac,a,!0,this.Fp,!1);else{g.Vm(a,"TYPE","html");var b=this.Ac,c=!!this.Fp;b.zk=3;b.Sh=i6(a.clone());aEa(b,c)}};
g.h.HE=function(a,b){if(0!=this.o&&(this.Ac==a||this.ne==a))if(this.jg=a.Om,this.ne==a&&3==this.o)if(7<this.Ui){try{var c=this.D.parse(b)}catch(f){c=null}if(g.xa(c)&&3==c.length)if(0==c[0])a:{if(!this.Lg){if(this.Ac)if(this.Ac.xl+3E3<this.ne.xl)Y6(this),this.Ac.cancel(),this.Ac=null;else break a;$6(this);K6(19)}}else this.PB=c[1],0<this.PB-this.Pk&&37500>c[2]&&this.Nr&&0==this.bk&&!this.Vi&&(this.Vi=P6((0,g.B)(this.wS,this),6E3));else a7(this,11)}else b!=MFa.T_.o&&a7(this,11);else if(this.Ac==a&&
Y6(this),!g.F(b)){c=this.D.parse(b);g.xa(c);for(var d=0;d<c.length;d++){var e=c[d];this.Pk=e[0];e=e[1];2==this.o?"c"==e[0]?(this.B=e[1],this.Fp=e[2],e=e[3],null!=e?this.Ui=e:this.Ui=6,this.o=3,this.Ad&&this.Ad.Az(),this.mz=S6(this,this.Un()?this.Fp:null,this.Qt),rEa(this)):"stop"==e[0]&&a7(this,7):3==this.o&&("stop"==e[0]?a7(this,7):"noop"!=e[0]&&this.Ad&&this.Ad.zz(e),this.bk=0)}}};
g.h.wS=function(){null!=this.Vi&&(this.Vi=null,this.Ac.cancel(),this.Ac=null,$6(this),K6(20))};
g.h.Fq=function(a){if(this.Ac==a){Y6(this);this.Ac=null;var b=2}else if(this.ne==a)this.ne=null,b=1;else return;this.jg=a.Om;if(0!=this.o)if(a.Rf)1==b?(b=(0,g.H)()-a.xl,b7.dispatchEvent(new iEa(b7,a.Ej?a.Ej.length:0,b,this.nk)),X6(this),this.C.length=0):rEa(this);else{var c=a.Th,d;if(!(d=3==c||7==c||0==c&&0<this.jg)){if(d=1==b)this.ne||this.Kh||1==this.o||2<=this.nk?d=!1:(this.Kh=P6((0,g.B)(this.NE,this,a),sEa(this,this.nk)),this.nk++,d=!0);d=!(d||2==b&&$6(this))}if(d)switch(c){case 1:a7(this,5);
break;case 4:a7(this,10);break;case 3:a7(this,6);break;case 7:a7(this,12);break;default:a7(this,2)}}};
g.h.iL=function(a){if(!g.Na(arguments,this.o))throw Error("Unexpected channel state: "+this.o);};
g.h.NX=function(a){a?K6(2):(K6(1),tEa(this,8))};
g.h.ht=function(a){if(a)throw Error("Can't create secondary domain capable XhrIo object.");a=new g.vx;a.H=!1;return a};
g.h.isActive=function(){return!!this.Ad&&this.Ad.isActive(this)};
g.h.Kf=function(a){b7.dispatchEvent(new jEa(b7,a))};
g.h.Un=function(){return!(!g.Id||g.tc(10))};
g.h=uEa.prototype;g.h.Az=function(){};
g.h.zz=function(){};
g.h.yz=function(){};
g.h.Os=function(){};
g.h.wA=function(){return{}};
g.h.isActive=function(){return!0};g.C(c7,g.M);g.h=c7.prototype;g.h.YV=function(){this.Bd=Math.min(3E5,2*this.Bd);this.B();this.A&&this.start()};
g.h.start=function(){var a=this.Bd+15E3*Math.random();g.uu(this.o,a);this.A=(0,g.H)()+a};
g.h.stop=function(){this.o.stop();this.A=0};
g.h.isActive=function(){return this.o.isActive()};
g.h.reset=function(){this.o.stop();this.Bd=5E3};g.C(d7,uEa);g.h=d7.prototype;g.h.subscribe=function(a,b,c){return this.B.subscribe(a,b,c)};
g.h.unsubscribe=function(a,b,c){return this.B.unsubscribe(a,b,c)};
g.h.de=function(a){return this.B.de(a)};
g.h.V=function(a,b){return this.B.V.apply(this.B,arguments)};
g.h.dispose=function(){this.K||(this.K=!0,g.lf(this.B),xEa(this),g.lf(this.A),this.A=null)};
g.h.la=function(){return this.K};
g.h.connect=function(a,b,c){if(!this.o||2!=this.o.o){this.J="";this.A.stop();this.D=a||null;this.C=b||0;a=this.L+"/test";b=this.L+"/bind";var d=new V6(c?c.firstTestResults:null,c?c.secondTestResults:null,this.N),e=this.o;e&&(e.Ad=null);d.Ad=this;this.o=d;e?this.o.connect(a,b,this.F,e.B,e.Pk):c?this.o.connect(a,b,this.F,c.sessionId,c.arrayId):this.o.connect(a,b,this.F)}};
g.h.sendMessage=function(a,b){var c={_sc:a};b&&g.gc(c,b);this.A.isActive()||2==(this.o?this.o.o:0)?this.G.push(c):e7(this)&&oEa(this.o,c)};
g.h.Az=function(){this.A.reset();this.D=null;this.C=0;if(this.G.length){var a=this.G;this.G=[];for(var b=0,c=a.length;b<c;++b)oEa(this.o,a[b])}this.V("handlerOpened")};
g.h.yz=function(a){var b=2==a&&401==this.o.jg;4==a||b||this.A.start();this.V("handlerError",a)};
g.h.Os=function(a){if(!this.A.isActive())this.V("handlerClosed");else if(a)for(var b=0,c=a.length;b<c;++b){var d=a[b].map;d&&this.G.push(d)}};
g.h.wA=function(){var a={v:2};this.J&&(a.gsessionid=this.J);0!=this.C&&(a.ui=""+this.C);0!=this.H&&(a.ui=""+this.H);this.D&&g.gc(a,this.D);return a};
g.h.zz=function(a){"S"==a[0]?this.J=a[1]:"gracefulReconnect"==a[0]?(this.A.start(),mEa(this.o)):this.V("handlerMessage",new vEa(a[0],a[1]))};
g.h.xY=function(){this.A.isActive();var a=this.o,b=0;a.Ac&&b++;a.ne&&b++;0!=b||this.connect(this.D,this.C)};f7.prototype.C=function(a,b,c,d){b?a(d):a({text:c.responseText})};
f7.prototype.B=function(a,b){a(Error("Request error: "+b.status))};
f7.prototype.D=function(a){a(Error("request timed out"))};var FEa=(0,g.H)(),i7=null,l7=Array(50),k7=-1,m7=!1;g.C(n7,g.SF);n7.prototype.Ee=function(){return this.o};
n7.prototype.contains=function(a){return!!q6(this.o,a)};
n7.prototype.get=function(a){return a?r6(this.o,a):null};
n7.prototype.info=function(a){j7(this.G,a)};g.C(o7,g.SF);var NFa=[2E3,2E3,1E3,1E3,1E3,2E3,2E3,5E3,5E3,1E4];g.h=o7.prototype;g.h.start=function(){!this.o&&(0,window.isNaN)(this.Ea)&&this.eH()};
g.h.stop=function(){this.o&&(this.o.abort(),this.o=null);(0,window.isNaN)(this.Ea)||(g.kE(this.Ea),this.Ea=window.NaN)};
g.h.X=function(){this.stop();o7.ea.X.call(this)};
g.h.eH=function(){this.Ea=window.NaN;this.o=g.zE(g7(this.F,"/pairing/get_screen"),{method:"POST",Rb:{pairing_code:this.D},timeout:5E3,onSuccess:(0,g.B)(this.zY,this),onError:(0,g.B)(this.yY,this),Fd:(0,g.B)(this.AY,this)})};
g.h.zY=function(a,b){this.o=null;var c=b.screen||{};c.dialId=this.B;c.name=this.C;this.V("pairingComplete",new l6(c))};
g.h.yY=function(a){this.o=null;a.status&&404==a.status?this.A>=NFa.length?this.V("pairingFailed",Error("DIAL polling timed out")):(a=NFa[this.A],this.Ea=g.iE((0,g.B)(this.eH,this),a),this.A++):this.V("pairingFailed",Error("Server error "+a.status))};
g.h.AY=function(){this.o=null;this.V("pairingFailed",Error("Server not responding"))};g.C(q7,n7);g.h=q7.prototype;g.h.start=function(){p7(this)&&this.V("screenChange");!g.oH("yt-remote-lounge-token-expiration")&&JEa(this);g.kE(this.A);this.A=g.iE((0,g.B)(this.start,this),1E4)};
g.h.add=function(a,b){p7(this);GEa(this,a);r7(this,!1);this.V("screenChange");b(a);a.token||JEa(this)};
g.h.remove=function(a,b){var c=p7(this);IEa(this,a)&&(r7(this,!1),c=!0);b(a);c&&this.V("screenChange")};
g.h.Ir=function(a,b,c,d){var e=p7(this),f=this.get(a.id);f?(f.name!=b&&(f.name=b,r7(this,!1),e=!0),c(a)):d(Error("no such local screen."));e&&this.V("screenChange")};
g.h.X=function(){g.kE(this.A);q7.ea.X.call(this)};
g.h.VL=function(a){p7(this);var b=this.o.length;a=a&&a.screens||[];for(var c=0,d=a.length;c<d;++c){var e=a[c],f=this.get(e.screenId);f&&(f.token=e.loungeToken,--b)}r7(this,!b);b&&j7(this.G,"Missed "+b+" lounge tokens.")};
g.h.UL=function(a){j7(this.G,"Requesting lounge tokens failed: "+a)};g.C(t7,g.SF);g.h=t7.prototype;g.h.start=function(){var a=(0,window.parseInt)(g.oH("yt-remote-fast-check-period")||"0",10);(this.C=(0,g.H)()-144E5<a?0:a)?v7(this):(this.C=(0,g.H)()+3E5,g.nH("yt-remote-fast-check-period",this.C),this.Jw())};
g.h.isEmpty=function(){return g.Zb(this.o)};
g.h.update=function(){s7("Updating availability on schedule.");var a=this.F(),b=g.Jb(this.o,function(b,d){return b&&!!r6(a,d)},this);
u7(this,b)};
g.h.X=function(){g.kE(this.B);this.B=window.NaN;this.A&&(this.A.abort(),this.A=null);t7.ea.X.call(this)};
g.h.Jw=function(){g.kE(this.B);this.B=window.NaN;this.A&&this.A.abort();var a=MEa(this);if(g.Ob(a)){var b=g7(this.D,"/pairing/get_screen_availability");this.A=h7(this.D,b,{lounge_token:g.Rb(a).join(",")},(0,g.B)(this.GV,this,a),(0,g.B)(this.FV,this))}else u7(this,{}),v7(this)};
g.h.GV=function(a,b){this.A=null;var c=g.Rb(MEa(this));if(g.gb(c,g.Rb(a))){c=b.screens||[];for(var d={},e=0,f=c.length;e<f;++e)d[a[c[e].loungeToken]]="online"==c[e].status;u7(this,d);v7(this)}else this.sc("Changing Screen set during request."),this.Jw()};
g.h.FV=function(a){this.sc("Screen availability failed: "+a);this.A=null;v7(this)};
g.h.sc=function(a){j7("OnlineScreenService",a)};g.C(w7,n7);g.h=w7.prototype;g.h.start=function(){this.B.start();this.A.start();this.o.length&&(this.V("screenChange"),this.A.isEmpty()||this.V("onlineScreenChange"))};
g.h.add=function(a,b,c){this.B.add(a,b,c)};
g.h.remove=function(a,b,c){this.B.remove(a,b,c);this.A.update()};
g.h.Ir=function(a,b,c,d){this.B.contains(a)?this.B.Ir(a,b,c,d):(a="Updating name of unknown screen: "+a.name,j7(this.G,a),d(Error(a)))};
g.h.Ee=function(a){return a?this.o:g.Va(this.o,(0,g.Vd)(this.C,function(a){return!this.contains(a)},this))};
g.h.fH=function(){return(0,g.Vd)(this.Ee(!0),function(a){return!!this.A.o[a.id]},this)};
g.h.gH=function(a,b,c,d,e){this.info("getDialScreenByPairingCode "+a+" / "+b);var f=new o7(this.F,a,b,c);f.subscribe("pairingComplete",(0,g.B)(function(a){g.lf(f);d(x7(this,a))},this));
f.subscribe("pairingFailed",function(a){g.lf(f);e(a)});
f.start();return(0,g.B)(f.stop,f)};
g.h.CY=function(a,b,c,d){g.zE(g7(this.F,"/pairing/get_screen"),{method:"POST",Rb:{pairing_code:a},timeout:5E3,onSuccess:(0,g.B)(function(a,d){var e=new l6(d.screen||{});if(!e.name||QEa(this,e.name)){a:{var f=e.name;for(var m=2,n=b(f,m);QEa(this,n);){m++;if(20<m)break a;n=b(f,m)}f=n}e.name=f}c(x7(this,e))},this),
onError:(0,g.B)(function(a){d(Error("pairing request failed: "+a.status))},this),
Fd:(0,g.B)(function(){d(Error("pairing request timed out."))},this)})};
g.h.X=function(){g.lf(this.B);g.lf(this.A);w7.ea.X.call(this)};
g.h.jM=function(){REa(this);this.V("screenChange");this.A.update()};
w7.prototype.dispose=w7.prototype.dispose;g.C(z7,g.SF);g.h=z7.prototype;g.h.Gq=function(a){this.B=a;this.V("sessionScreen",this.B)};
g.h.Je=function(a){this.la()||(a&&A7(this,""+a),this.B=null,this.V("sessionScreen",null))};
g.h.info=function(a){j7(this.N,a)};
g.h.iH=function(){return null};
g.h.Qw=function(a){var b=this.A;a?(b.displayStatus=new window.chrome.cast.ReceiverDisplayStatus(a,[]),b.displayStatus.showStop=!0):b.displayStatus=null;window.chrome.cast.setReceiverDisplayStatus(b,(0,g.B)(function(){this.info("Updated receiver status for "+b.friendlyName+": "+a)},this),(0,g.B)(function(){A7(this,"Failed to update receiver status for: "+b.friendlyName)},this))};
g.h.X=function(){this.Qw("");z7.ea.X.call(this)};g.C(B7,z7);g.h=B7.prototype;g.h.Pw=function(a){if(this.o){if(this.o==a)return;A7(this,"Overriding cast sesison with new session object");this.o.removeUpdateListener(this.F);this.o.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.D)}this.o=a;this.o.addUpdateListener(this.F);this.o.addMessageListener("urn:x-cast:com.google.youtube.mdx",this.D);TEa(this)};
g.h.Rk=function(a){this.info("launchWithParams no-op for Cast: "+g.Hg(a))};
g.h.stop=function(){this.o?this.o.stop((0,g.B)(function(){this.Je()},this),(0,g.B)(function(){this.Je(Error("Failed to stop receiver app."))},this)):this.Je(Error("Stopping cast device witout session."))};
g.h.Qw=g.A;g.h.X=function(){this.info("disposeInternal");g.kE(this.C);this.C=0;this.o&&(this.o.removeUpdateListener(this.F),this.o.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.D));this.o=null;B7.ea.X.call(this)};
g.h.KW=function(a,b){if(!this.la())if(b){var c=g.px(b);if(g.Aa(c)){var d=""+c.type;c=c.data||{};this.info("onYoutubeMessage_: "+d+" "+g.Hg(c));switch(d){case "mdxSessionStatus":SEa(this,c.screenId);break;default:A7(this,"Unknown youtube message: "+d)}}else A7(this,"Unable to parse message.")}else A7(this,"No data in message.")};
g.h.GA=function(a,b,c,d){PEa(this.J,this.A.label,a,this.A.friendlyName,(0,g.B)(function(e){e?b(e):0<=d?(A7(this,"Screen "+a+" appears to be offline. "+d+" retries left."),g.iE((0,g.B)(this.GA,this,a,b,c,d-1),300)):c(Error("Unable to fetch screen."))},this),c)};
g.h.iH=function(){return this.o};
g.h.DY=function(a){this.la()||a||(A7(this,"Cast session died."),this.Je())};g.C(C7,z7);g.h=C7.prototype;g.h.Pw=function(a){this.C=a;this.C.addUpdateListener(this.L)};
g.h.Rk=function(a){this.D=a;this.G()};
g.h.stop=function(){this.o();this.o=g.A;g.kE(this.F);this.C?this.C.stop((0,g.B)(this.Je,this,null),(0,g.B)(this.Je,this,"Failed to stop DIAL device.")):this.Je()};
g.h.X=function(){this.o();this.o=g.A;g.kE(this.F);this.C&&this.C.removeUpdateListener(this.L);this.C=null;C7.ea.X.call(this)};
g.h.GY=function(a){this.la()||a||(A7(this,"DIAL session died."),this.o(),this.o=g.A,this.Je())};
g.h.xu=function(a){this.K=p6();if(this.D){var b=new window.chrome.cast.DialLaunchResponse(!0,VEa(this));a(b);UEa(this)}else this.G=(0,g.B)(function(){g.kE(this.F);this.G=g.A;this.F=window.NaN;var b=new window.chrome.cast.DialLaunchResponse(!0,VEa(this));a(b);UEa(this)},this),this.F=g.iE((0,g.B)(function(){this.G()},this),100)};
g.h.xN=function(a,b,c){PEa(this.J,this.H.receiver.label,a,this.A.friendlyName,(0,g.B)(function(a){a&&a.token?(this.Gq(a),b(new window.chrome.cast.DialLaunchResponse(!1))):this.xu(b,c)},this),(0,g.B)(function(a){A7(this,"Failed to get DIAL screen: "+a);
this.xu(b,c)},this))};g.C(D7,z7);D7.prototype.stop=function(){this.Je()};
D7.prototype.Pw=g.A;D7.prototype.Rk=function(){g.kE(this.o);this.o=window.NaN;var a=r6(this.J.Ee(),this.A.label);a?this.Gq(a):this.Je(Error("No such screen"))};
D7.prototype.X=function(){g.kE(this.o);this.o=window.NaN;D7.ea.X.call(this)};g.C(E7,g.SF);g.h=E7.prototype;
g.h.init=function(a,b){window.chrome.cast.timeout.requestSession=3E4;var c=new window.chrome.cast.SessionRequest(this.G);this.H||(c.dialRequest=new window.chrome.cast.DialRequest("YouTube"));var d=window.chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED,e=a?window.chrome.cast.DefaultActionPolicy.CAST_THIS_TAB:window.chrome.cast.DefaultActionPolicy.CREATE_SESSION;c=new window.chrome.cast.ApiConfig(c,(0,g.B)(this.JE,this),(0,g.B)(this.oV,this),d,e);c.customDialLaunchCallback=(0,g.B)(this.hT,this);window.chrome.cast.initialize(c,
(0,g.B)(function(){this.la()||(window.chrome.cast.addReceiverActionListener(this.C),CEa(),this.A.subscribe("onlineScreenChange",(0,g.B)(this.hH,this)),this.B=XEa(this),window.chrome.cast.setCustomReceivers(this.B,g.A,(0,g.B)(function(a){this.sc("Failed to set initial custom receivers: "+g.Hg(a))},this)),this.V("yt-remote-cast2-availability-change",G7(this)),b(!0))},this),(0,g.B)(function(a){this.sc("Failed to initialize API: "+g.Hg(a));
b(!1)},this))};
g.h.vX=function(a,b){F7("Setting connected screen ID: "+a+" -> "+b);if(this.o){var c=this.o.B;if(!a||c&&c.id!=a)F7("Unsetting old screen status: "+this.o.A.friendlyName),H7(this,null)}if(a&&b){if(!this.o){c=r6(this.A.Ee(),a);if(!c){F7("setConnectedScreenStatus: Unknown screen.");return}var d=WEa(this,c);d||(F7("setConnectedScreenStatus: Connected receiver not custom..."),d=new window.chrome.cast.Receiver(c.uuid?c.uuid:c.id,c.name),d.receiverType=window.chrome.cast.ReceiverType.CUSTOM,this.B.push(d),
window.chrome.cast.setCustomReceivers(this.B,g.A,(0,g.B)(function(a){this.sc("Failed to set initial custom receivers: "+g.Hg(a))},this)));
F7("setConnectedScreenStatus: new active receiver: "+d.friendlyName);H7(this,new D7(this.A,d),!0)}this.o.Qw(b)}else F7("setConnectedScreenStatus: no screen.")};
g.h.wX=function(a){this.la()?this.sc("Setting connection data on disposed cast v2"):this.o?this.o.Rk(a):this.sc("Setting connection data without a session")};
g.h.FY=function(){this.la()?this.sc("Stopping session on disposed cast v2"):this.o?(this.o.stop(),H7(this,null)):F7("Stopping non-existing session")};
g.h.requestSession=function(){window.chrome.cast.requestSession((0,g.B)(this.JE,this),(0,g.B)(this.KV,this))};
g.h.X=function(){this.A.unsubscribe("onlineScreenChange",(0,g.B)(this.hH,this));window.chrome&&window.chrome.cast&&window.chrome.cast.removeReceiverActionListener(this.C);g.Sa(g.y("yt.mdx.remote.debug.handlers_")||[],zEa);g.lf(this.o);E7.ea.X.call(this)};
g.h.sc=function(a){j7("Controller",a)};
g.h.KE=function(a,b){this.o==a&&(b||H7(this,null),this.V("yt-remote-cast2-session-change",b))};
g.h.kV=function(a,b){if(!this.la())if(a)switch(a.friendlyName=window.chrome.cast.unescape(a.friendlyName),F7("onReceiverAction_ "+a.label+" / "+a.friendlyName+"-- "+b),b){case window.chrome.cast.ReceiverAction.CAST:if(this.o)if(this.o.A.label!=a.label)F7("onReceiverAction_: Stopping active receiver: "+this.o.A.friendlyName),this.o.stop();else{F7("onReceiverAction_: Casting to active receiver.");this.o.B&&this.V("yt-remote-cast2-session-change",this.o.B);break}switch(a.receiverType){case window.chrome.cast.ReceiverType.CUSTOM:H7(this,
new D7(this.A,a));break;case window.chrome.cast.ReceiverType.DIAL:H7(this,new C7(this.A,a,this.F));break;case window.chrome.cast.ReceiverType.CAST:H7(this,new B7(this.A,a));break;default:this.sc("Unknown receiver type: "+a.receiverType)}break;case window.chrome.cast.ReceiverAction.STOP:this.o&&this.o.A.label==a.label?this.o.stop():this.sc("Stopping receiver w/o session: "+a.friendlyName)}else this.sc("onReceiverAction_ called without receiver.")};
g.h.hT=function(a){if(this.la())return window.Promise.reject(Error("disposed"));var b=a.receiver;b.receiverType!=window.chrome.cast.ReceiverType.DIAL&&(this.sc("Not DIAL receiver: "+b.friendlyName),b.receiverType=window.chrome.cast.ReceiverType.DIAL);var c=this.o?this.o.A:null;if(!c||c.label!=b.label)return this.sc("Receiving DIAL launch request for non-clicked DIAL receiver: "+b.friendlyName),window.Promise.reject(Error("illegal DIAL launch"));if(c&&c.label==b.label&&c.receiverType!=window.chrome.cast.ReceiverType.DIAL){if(this.o.B)return F7("Reselecting dial screen."),
this.V("yt-remote-cast2-session-change",this.o.B),window.Promise.resolve(new window.chrome.cast.DialLaunchResponse(!1));this.sc('Changing CAST intent from "'+c.receiverType+'" to "dial" for '+b.friendlyName);H7(this,new C7(this.A,b,this.F))}b=this.o;b.H=a;return b.H.appState==window.chrome.cast.DialAppState.RUNNING?new window.Promise((0,g.B)(b.xN,b,(b.H.extraData||{}).screenId||null)):new window.Promise((0,g.B)(b.xu,b))};
g.h.JE=function(a){if(!this.la()){F7("New cast session ID: "+a.sessionId);var b=a.receiver;if(b.receiverType!=window.chrome.cast.ReceiverType.CUSTOM){if(!this.o)if(b.receiverType==window.chrome.cast.ReceiverType.CAST)F7("Got resumed cast session before resumed mdx connection."),b.friendlyName=window.chrome.cast.unescape(b.friendlyName),H7(this,new B7(this.A,b),!0);else{this.sc("Got non-cast session without previous mdx receiver event, or mdx resume.");return}var c=this.o.A,d=r6(this.A.Ee(),c.label);
d&&m6(d,b.label)&&c.receiverType!=window.chrome.cast.ReceiverType.CAST&&b.receiverType==window.chrome.cast.ReceiverType.CAST&&(F7("onSessionEstablished_: manual to cast session change "+b.friendlyName),g.lf(this.o),this.o=new B7(this.A,b),this.o.subscribe("sessionScreen",(0,g.B)(this.KE,this,this.o)),this.o.Rk(null));this.o.Pw(a)}}};
g.h.EY=function(){return this.o?this.o.iH():null};
g.h.KV=function(a){this.la()||(this.sc("Failed to estabilish a session: "+g.Hg(a)),a.code!=window.chrome.cast.ErrorCode.CANCEL&&H7(this,null))};
g.h.oV=function(a){F7("Receiver availability updated: "+a);if(!this.la()){var b=G7(this);this.D=a==window.chrome.cast.ReceiverAvailability.AVAILABLE;G7(this)!=b&&this.V("yt-remote-cast2-availability-change",G7(this))}};
g.h.hH=function(){this.la()||(this.B=XEa(this),F7("Updating custom receivers: "+g.Hg(this.B)),window.chrome.cast.setCustomReceivers(this.B,g.A,(0,g.B)(function(){this.sc("Failed to set custom receivers.")},this)),this.V("yt-remote-cast2-availability-change",G7(this)))};
E7.prototype.setLaunchParams=E7.prototype.wX;E7.prototype.setConnectedScreenStatus=E7.prototype.vX;E7.prototype.stopSession=E7.prototype.FY;E7.prototype.getCastSession=E7.prototype.EY;E7.prototype.requestSession=E7.prototype.requestSession;E7.prototype.init=E7.prototype.init;E7.prototype.dispose=E7.prototype.dispose;var N7=[];g.h=S7.prototype;
g.h.reset=function(a){this.listId="";this.index=-1;this.videoId="";T7(this);this.volume=-1;this.muted=!1;a&&(this.index=a.index,this.listId=a.listId,this.videoId=a.videoId,this.o=a.playerState,this.volume=a.volume,this.muted=a.muted,this.audioTrackId=a.audioTrackId,this.A=a.trackData,this.ng=a.hasPrevious,this.hasNext=a.hasNext,this.H=a.playerTime,this.G=a.playerTimeAt,this.D=a.seekableStart,this.B=a.seekableEnd,this.J=a.duration,this.K=a.loadedTime,this.C=a.liveIngestionTime,this.F=!(0,window.isNaN)(this.C))};
g.h.qb=function(){return 1==this.o};
g.h.isAdPlaying=function(){return 1081==this.o};
g.h.getDuration=function(){return this.F?this.J+U7(this):this.J};
g.h.clone=function(){return new S7(Y7(this))};g.C($7,g.SF);g.h=$7.prototype;g.h.play=function(){1==this.o?(this.A?this.A.play(null,g.A,f8(this,"play")):e8(this,"play"),d8(this,1,W7(a8(this))),this.V("remotePlayerChange")):b8(this,this.play)};
g.h.pause=function(){1==this.o?(this.A?this.A.pause(null,g.A,f8(this,"pause")):e8(this,"pause"),d8(this,2,W7(a8(this))),this.V("remotePlayerChange")):b8(this,this.pause)};
g.h.dH=function(a){if(1==this.o){if(this.A){var b=a8(this),c=new window.chrome.cast.media.SeekRequest;c.currentTime=a;c.resumeState=b.qb()||3==b.o?window.chrome.cast.media.ResumeState.PLAYBACK_START:window.chrome.cast.media.ResumeState.PLAYBACK_PAUSE;this.A.seek(c,g.A,f8(this,"seekTo",{newTime:a}))}else e8(this,"seekTo",{newTime:a});d8(this,3,a);this.V("remotePlayerChange")}else b8(this,g.Da(this.dH,a))};
g.h.stop=function(){if(1==this.o){this.A?this.A.stop(null,g.A,f8(this,"stopVideo")):e8(this,"stopVideo");var a=a8(this);a.index=-1;a.videoId="";T7(a);c8(this,a);this.V("remotePlayerChange")}else b8(this,this.stop)};
g.h.setVolume=function(a,b){if(1==this.o){var c=a8(this);if(this.B){if(c.volume!=a){var d=Math.round(a)/100;this.B.setReceiverVolumeLevel(d,(0,g.B)(function(){j7("CP","set receiver volume: "+d)},this),(0,g.B)(function(){this.sc("failed to set receiver volume.")},this))}c.muted!=b&&this.B.setReceiverMuted(b,(0,g.B)(function(){j7("CP","set receiver muted: "+b)},this),(0,g.B)(function(){this.sc("failed to set receiver muted.")},this))}else{var e={volume:a,
muted:b};-1!=c.volume&&(e.delta=a-c.volume);e8(this,"setVolume",e)}c.muted=b;c.volume=a;c8(this,c)}else b8(this,g.Da(this.setVolume,a,b))};
g.h.aG=function(a,b){if(1==this.o){var c=a8(this),d={videoId:a};b&&(c.A={trackName:b.name,languageCode:b.languageCode,sourceLanguageCode:b.translationLanguage?b.translationLanguage.languageCode:"",languageName:b.languageName,format:b.format,kind:b.kind},d.style=g.Hg(b.style),g.gc(d,c.A));e8(this,"setSubtitlesTrack",d);c8(this,c)}else b8(this,g.Da(this.aG,a,b))};
g.h.Mx=function(a,b){if(1==this.o){e8(this,"setAudioTrack",{videoId:a,audioTrackId:b.Kb.id});var c=a8(this);c.audioTrackId=b.Kb.id;c8(this,c)}else b8(this,g.Da(this.Mx,a,b))};
g.h.cH=function(a,b){if(1==this.o){if(a&&b){var c=a8(this);X7(c,a,b);c8(this,c)}e8(this,"previous")}else b8(this,g.Da(this.cH,a,b))};
g.h.bH=function(a,b){if(1==this.o){if(a&&b){var c=a8(this);X7(c,a,b);c8(this,c)}e8(this,"next")}else b8(this,g.Da(this.bH,a,b))};
g.h.bA=function(){1==this.o?e8(this,"dismissAutoplay"):b8(this,this.bA)};
g.h.dispose=function(){if(3!=this.o){var a=this.o;this.o=3;this.V("proxyStateChange",a,this.o)}$7.ea.dispose.call(this)};
g.h.X=function(){jFa(this);this.C=null;this.D.clear();Z7(this,null);$7.ea.X.call(this)};
g.h.Nx=function(a){if((a!=this.o||2==a)&&3!=this.o&&0!=a){var b=this.o;this.o=a;this.V("proxyStateChange",b,a);if(1==a)for(;!this.D.isEmpty();)g.JC(this.D).apply(this);else 3==a&&this.dispose()}};
g.h.fV=function(a,b){this.V(a,b)};
g.h.DS=function(a){if(!a)this.Jn(null),Z7(this,null);else if(this.B.receiver.volume){a=this.B.receiver.volume;var b=a8(this),c=Math.round(100*a.level||0);if(b.volume!=c||b.muted!=a.muted)j7("CP","Cast volume update: "+a.level+(a.muted?" muted":"")),b.volume=c,b.muted=!!a.muted,c8(this,b)}};
g.h.Jn=function(a){j7("CP","Cast media: "+!!a);this.A&&this.A.removeUpdateListener(this.H);if(this.A=a)this.A.addUpdateListener(this.H),kFa(this),this.V("remotePlayerChange")};
g.h.CS=function(a){a?(kFa(this),this.V("remotePlayerChange")):this.Jn(null)};
g.h.PS=function(){var a=gFa();a&&Z7(this,a)};
g.h.sc=function(a){j7("CP",a)};g.C(g8,g.SF);g.h=g8.prototype;
g.h.connect=function(a,b){if(b){var c=b.listId,d=b.videoId,e=b.playerParams,f=b.clickTrackingParams,k=b.index,l={videoId:d},m=b.currentTime,n=b.locationInfo;g.u(m)&&(l.currentTime=5>=m?0:m);e&&(l.playerParams=e);n&&(l.locationInfo=n);f&&(l.clickTrackingParams=f);c&&(l.listId=c);g.u(k)&&(l.currentIndex=k);c&&(this.gb.listId=c);this.gb.videoId=d;this.gb.index=k||0;this.gb.state=3;V7(this.gb,m);this.C="UNSUPPORTED";h8("Connecting with setPlaylist and params: "+g.Hg(l));this.o.connect({method:"setPlaylist",
params:g.Hg(l)},a,FDa())}else h8("Connecting without params"),this.o.connect({},a,FDa());mFa(this)};
g.h.dispose=function(){this.la()||(this.V("beforeDispose"),i8(this,3));g8.ea.dispose.call(this)};
g.h.X=function(){j8(this);l8(this);k8(this);g.kE(this.J);this.J=window.NaN;g.kE(this.K);this.K=window.NaN;this.B=null;g.CF(this.Y);this.Y.length=0;this.o.dispose();g8.ea.X.call(this);this.C=this.G=this.A=this.gb=this.o=null};
g.h.ML=function(){this.F(2)};
g.h.HS=function(){h8("Channel opened");this.O&&(this.O=!1,k8(this),this.N=g.iE((0,g.B)(function(){h8("Timing out waiting for a screen.");this.F(1)},this),15E3));
JDa(wEa(this.o),this.ba)};
g.h.ES=function(){h8("Channel closed");(0,window.isNaN)(this.D)?w6(!0):w6();this.dispose()};
g.h.FS=function(a){w6();(0,window.isNaN)(this.H())?(h8("Channel error: "+a+" without reconnection"),this.dispose()):(this.O=!0,h8("Channel error: "+a+" with reconnection in "+this.H()+" ms"),i8(this,2))};
g.h.GS=function(a){a.params?h8("Received: action="+a.action+", params="+g.Hg(a.params)):h8("Received: action="+a.action+" {}");switch(a.action){case "loungeStatus":a=g.px(a.params.devices);this.A=(0,g.I)(a,function(a){return new k6(a)});
a=!!g.Ja(this.A,function(a){return"LOUNGE_SCREEN"==a.type});
pFa(this,a);break;case "loungeScreenDisconnected":g.Ua(this.A,function(a){return"LOUNGE_SCREEN"==a.type});
pFa(this,!1);break;case "remoteConnected":var b=new k6(g.px(a.params.device));g.Ja(this.A,function(a){return b?a.id==b.id:!1})||g.Qa(this.A,b);
break;case "remoteDisconnected":b=new k6(g.px(a.params.device));g.Ua(this.A,function(a){return b?a.id==b.id:!1});
break;case "gracefulDisconnect":break;case "playlistModified":rFa(this,a);break;case "nowPlaying":tFa(this,a);break;case "onStateChange":sFa(this,a);break;case "onAdStateChange":uFa(this,a);break;case "onVolumeChanged":vFa(this,a);break;case "onSubtitlesTrackChanged":qFa(this,a);break;case "nowAutoplaying":wFa(this,a);break;case "autoplayDismissed":this.V("autoplayDismissed");break;case "autoplayUpNext":this.G=a.params.videoId||null;this.V("autoplayUpNext",this.G);break;case "onAutoplayModeChanged":this.C=
a.params.autoplayMode;this.V("autoplayModeChange",this.C);"DISABLED"==this.C&&this.V("autoplayDismissed");break;case "onHasPreviousNextChanged":xFa(this,a);break;case "requestAssistedSignIn":this.V("assistedSignInRequested",a.params.authCode);break;default:h8("Unrecognized action: "+a.action)}};
g.h.hX=function(){if(this.B){var a=this.B;this.B=null;this.gb.videoId!=a&&m8(this,"getNowPlaying")}};
g8.prototype.subscribe=g8.prototype.subscribe;g8.prototype.unsubscribeByKey=g8.prototype.de;g8.prototype.ka=function(){var a=3;this.la()||(a=0,(0,window.isNaN)(this.H())?e7(this.o)&&(0,window.isNaN)(this.D)&&(a=1):a=2);return a};
g8.prototype.getProxyState=g8.prototype.ka;g8.prototype.F=function(a){h8("Disconnecting with "+a);j8(this);this.V("beforeDisconnect",a);1==a&&w6();xEa(this.o,a);this.dispose()};
g8.prototype.disconnect=g8.prototype.F;g8.prototype.ha=function(){var a=this.gb;this.B&&(a=this.gb.clone(),X7(a,this.B,a.index));return Y7(a)};
g8.prototype.getPlayerContextData=g8.prototype.ha;
g8.prototype.pa=function(a){var b=new S7(a);b.videoId&&b.videoId!=this.gb.videoId&&(this.B=b.videoId,g.kE(this.J),this.J=g.iE((0,g.B)(this.hX,this),5E3));var c=[];this.gb.listId==b.listId&&this.gb.videoId==b.videoId&&this.gb.index==b.index||c.push("remoteQueueChange");this.gb.o==b.o&&this.gb.volume==b.volume&&this.gb.muted==b.muted&&W7(this.gb)==W7(b)&&g.Hg(this.gb.A)==g.Hg(b.A)||c.push("remotePlayerChange");this.gb.reset(a);(0,g.D)(c,function(a){this.V(a)},this)};
g8.prototype.setPlayerContextData=g8.prototype.pa;g8.prototype.aa=function(){var a=this.o.F.id,b=g.Ja(this.A,function(b){return"REMOTE_CONTROL"==b.type&&b.id!=a});
return b?b.id:""};
g8.prototype.getOtherConnectedRemoteId=g8.prototype.aa;g8.prototype.H=function(){var a=this.o;return a.A.isActive()?a.A.A-(0,g.H)():window.NaN};
g8.prototype.getReconnectTimeout=g8.prototype.H;g8.prototype.ca=function(){return this.C||"UNSUPPORTED"};
g8.prototype.getAutoplayMode=g8.prototype.ca;g8.prototype.ga=function(){return this.G||""};
g8.prototype.getAutoplayVideoId=g8.prototype.ga;g8.prototype.wa=function(){if(!(0,window.isNaN)(this.H())){var a=this.o.A;g.vu(a.o);a.start()}};
g8.prototype.reconnect=g8.prototype.wa;g8.prototype.ma=function(a,b){m8(this,a,b);oFa(this)};
g8.prototype.sendMessage=g8.prototype.ma;g.C(n8,n7);g.h=n8.prototype;g.h.Ee=function(a){return this.ld.$_gs(a)};
g.h.contains=function(a){return!!this.ld.$_c(a)};
g.h.get=function(a){return this.ld.$_g(a)};
g.h.start=function(){this.ld.$_st()};
g.h.add=function(a,b,c){this.ld.$_a(a,b,c)};
g.h.remove=function(a,b,c){this.ld.$_r(a,b,c)};
g.h.Ir=function(a,b,c,d){this.ld.$_un(a,b,c,d)};
g.h.X=function(){for(var a=0,b=this.A.length;a<b;++a)this.ld.$_ubk(this.A[a]);this.A.length=0;this.ld=null;n8.ea.X.call(this)};
g.h.BY=function(){this.V("screenChange")};
g.h.FU=function(){this.V("onlineScreenChange")};
w7.prototype.$_st=w7.prototype.start;w7.prototype.$_gspc=w7.prototype.CY;w7.prototype.$_gsppc=w7.prototype.gH;w7.prototype.$_c=w7.prototype.contains;w7.prototype.$_g=w7.prototype.get;w7.prototype.$_a=w7.prototype.add;w7.prototype.$_un=w7.prototype.Ir;w7.prototype.$_r=w7.prototype.remove;w7.prototype.$_gs=w7.prototype.Ee;w7.prototype.$_gos=w7.prototype.fH;w7.prototype.$_s=w7.prototype.subscribe;w7.prototype.$_ubk=w7.prototype.de;var o8=null,p8=null,E8=null,t8=[];g.t(F8,g.M);g.h=F8.prototype;
g.h.X=function(){g.M.prototype.X.call(this);this.B.stop();this.D.stop();this.K.stop();this.N();this.o.unsubscribe("proxyStateChange",this.GE,this);this.o.unsubscribe("remotePlayerChange",this.Ln,this);this.o.unsubscribe("remoteQueueChange",this.Hq,this);this.o.unsubscribe("autoplayUpNext",this.cE,this);this.o.unsubscribe("previousNextChange",this.DE,this);this.o.unsubscribe("nowAutoplaying",this.uE,this);this.o.unsubscribe("autoplayDismissed",this.bE,this);this.o=this.C=null};
g.h.ZC=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(2!=this.o.o)if(I8(this)){if(!a8(this.o).isAdPlaying()||"control_seek"!=a)switch(a){case "control_toggle_play_pause":a8(this.o).qb()?this.o.pause():this.o.play();break;case "control_play":this.o.play();break;case "control_pause":this.o.pause();break;case "control_seek":this.J.Km(c[0],c[1]);break;case "control_subtitles_set_track":J8(this,c[0]);break;case "control_set_audio_track":c=c[0],I8(this)&&this.o.Mx(this.T.getVideoData(1).videoId,
c)}}else switch(a){case "control_toggle_play_pause":case "control_play":case "control_pause":c=this.T.getCurrentTime();K8(this,0==c?void 0:c);break;case "control_seek":K8(this,c[0]);break;case "control_subtitles_set_track":J8(this,c[0]);break;case "control_set_audio_track":c=c[0],I8(this)&&this.o.Mx(this.T.getVideoData(1).videoId,c)}};
g.h.BS=function(a){this.K.HL(a)};
g.h.cY=function(a){this.ZC("control_subtitles_set_track",g.Zb(a)?null:a)};
g.h.pG=function(){var a=this.T.Fc("captions","track");g.Zb(a)||J8(this,a)};
g.h.qE=function(a){if(I8(this)){this.o.unsubscribe("remotePlayerChange",this.Ln,this);var b=Math.round(a.volume);a=!!a.muted;var c=a8(this.o);if(b!=c.volume||a!=c.muted)this.o.setVolume(b,a),this.L.start();this.o.subscribe("remotePlayerChange",this.Ln,this)}};
g.h.aU=function(){g.Zb(this.F)||JFa(this,this.F);this.G=!1};
g.h.GE=function(a,b){this.D.stop();2==b&&this.mG()};
g.h.Ln=function(){if(I8(this)){this.B.stop();var a=a8(this.o);switch(a.o){case 1080:case 1081:case 1084:case 1085:this.C.G=1;break;case 1082:case 1083:this.C.G=0;break;default:this.C.G=-1}switch(a.o){case 1081:case 1:H8(this,new g.TP(8));this.lG();break;case 1085:case 3:H8(this,new g.TP(9));break;case 1083:case 0:H8(this,new g.TP(2));this.J.stop();G8(this,this.T.getVideoData().lengthSeconds);break;case 1084:H8(this,new g.TP(4));break;case 2:H8(this,new g.TP(4));G8(this,W7(a));break;case -1:H8(this,
new g.TP(64));break;case -1E3:H8(this,new g.TP(128,{errorCode:"mdx.remoteerror",message:"This video is not available for remote playback."}))}a=a8(this.o).A;var b=this.F;(a||b?a&&b&&a.trackName==b.trackName&&a.languageCode==b.languageCode&&a.languageName==b.languageName&&a.format==b.format&&a.kind==b.kind:1)||(this.F=a,JFa(this,a));a=a8(this.o);-1==a.volume||Math.round(this.T.getVolume())==a.volume&&this.T.isMuted()==a.muted||this.L.isActive()||this.NG()}else IFa(this)};
g.h.DE=function(){this.T.V("mdxpreviousnextchange")};
g.h.Hq=function(){I8(this)||IFa(this)};
g.h.KK=function(){this.o.bA()};
g.h.cE=function(a){a&&(a=g.zE("/watch_queue_ajax",{method:"GET",fd:{action_get_watch_queue_item:1,video_id:a},onSuccess:(0,g.B)(this.kW,this)}))&&(this.N=(0,g.B)(a.abort,a))};
g.h.kW=function(a,b){var c=new g.UO(g.Y(this.T),{videoId:b.videoId,title:b.title,author:b.author,murlmq_webp:b.url});this.suggestion=c;this.T.V("mdxautoplayupnext",c)};
g.h.uE=function(a){(0,window.isNaN)(a)||this.T.V("mdxnowautoplaying",a)};
g.h.bE=function(){this.T.V("mdxautoplaycanceled")};
g.h.FQ=function(a,b){-1==a8(this.o).o?K8(this,a):b&&this.o.dH(a)};
g.h.NG=function(){if(I8(this)){var a=a8(this.o);this.A.Ha(this.O);a.muted?this.T.mute():this.T.wg();this.T.setVolume(a.volume);this.O=this.A.R(this.T,"onVolumeChange",this.qE)}};
g.h.lG=function(){this.B.stop();if(!this.o.la()){var a=a8(this.o);a.qb()&&H8(this,new g.TP(8));G8(this,W7(a));this.B.start()}};
g.h.mG=function(){this.D.stop();this.B.stop();var a=this.o.C.getReconnectTimeout();2==this.o.o&&!(0,window.isNaN)(a)&&this.D.start()};g.t(L8,g.W);L8.prototype.D=function(a){LFa(this,a.state)};g.t(M8,g.CY);M8.prototype.K=function(){var a=this.T.Fc("remote","receivers");a&&1<a.length&&!this.T.Fc("remote","quickCast")?(this.H=g.jb(a,this.D,this),g.DY(this,(0,g.I)(a,this.D)),a=this.T.Fc("remote","currentReceiver"),this.Jf(this.D(a)),this.enable(!0)):this.enable(!1)};
M8.prototype.D=function(a){return a.key};
M8.prototype.If=function(a){return"cast-selector-receiver"==a?"Cast...":this.H[a].name};
M8.prototype.Dd=function(a){g.CY.prototype.Dd.call(this,a);this.T.Xd("remote","currentReceiver",this.H[a]);this.C.Pb()};g.t(N8,g.GU);g.h=N8.prototype;g.h.create=function(){CFa(g.UM(g.Y(this.player)));this.D.push(g.cG("yt-remote-before-disconnect",this.xS,this));this.D.push(g.cG("yt-remote-connection-change",this.pV,this));this.D.push(g.cG("yt-remote-receiver-availability-change",this.EE,this));this.D.push(g.cG("yt-remote-auto-connect",this.nV,this));this.D.push(g.cG("yt-remote-receiver-resumed",this.mV,this));this.EE()};
g.h.load=function(){this.player.vv();g.GU.prototype.load.call(this);this.C=new F8(this,this.player,this.o);var a=(a=HFa())?a.currentTime:0;var b=D8()?new $7(y8(),void 0):null;0==a&&b&&(a=W7(a8(b)));0!=a&&(this.J=a||0,this.player.V("progresssync",a,void 0));KFa(this,this.F,this.F);g.P_(this.player.app,6)};
g.h.unload=function(){this.player.V("mdxautoplaycanceled");this.B=this.A;g.mf(this.C,this.o);this.o=this.C=null;g.GU.prototype.unload.call(this);g.P_(this.player.app,5)};
g.h.X=function(){g.dG(this.D);g.GU.prototype.X.call(this)};
g.h.zn=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];this.loaded&&this.C.ZC.apply(this.C,[a].concat(g.ia(c)))};
g.h.BL=function(){return this.loaded?this.C.suggestion:null};
g.h.ng=function(){return this.o?a8(this.o).ng:!1};
g.h.hasNext=function(){return this.o?a8(this.o).hasNext:!1};
g.h.getCurrentTime=function(){return this.J};
g.h.tQ=function(){var a=a8(this.o),b=this.player.getVideoData();return{allowSeeking:g.Y(this.player).experiments.o("web_player_mdx_allow_seeking_change_killswitch")?this.player.Zc():!a.isAdPlaying()&&this.player.Zc(),clipEnd:b.clipEnd,clipStart:b.clipStart,current:this.getCurrentTime(),displayedStart:-1,duration:a.getDuration(),ingestionTime:a.F?a.C+U7(a):a.C,isPeggedToLive:1>=(a.F?a.B+U7(a):a.B)-this.getCurrentTime(),loaded:a.K,seekableEnd:a.F?a.B+U7(a):a.B,seekableStart:0<a.D?a.D+U7(a):a.D}};
g.h.uQ=function(){this.o&&this.o.bH()};
g.h.vQ=function(){this.o&&this.o.cH()};
g.h.xS=function(a){1==a&&(this.K=this.o?a8(this.o):null)};
g.h.pV=function(){var a=D8()?new $7(y8(),void 0):null;if(a){var b=this.B;this.loaded&&this.unload();this.o=a;this.K=null;b.key!=this.A.key&&(this.B=b,this.load())}else g.lf(this.o),this.o=null,this.loaded&&(this.unload(),(a=this.K)&&a.videoId==this.player.getVideoData().videoId&&this.player.EC(a.videoId,W7(a)));this.player.V("videodatachange","newdata",this.player.getVideoData(),3)};
g.h.EE=function(){this.H=[this.A].concat(EFa());var a=z8()||this.A;O8(this,a);this.player.ya("onMdxReceiversChange")};
g.h.nV=function(){var a=z8();O8(this,a)};
g.h.mV=function(){this.B=z8()};
g.h.sQ=function(a,b){switch(a){case "casting":return this.loaded;case "receivers":return this.H;case "currentReceiver":return b&&("cast-selector-receiver"==b.key?Q7():O8(this,b)),this.loaded?this.B:this.A;case "quickCast":return 2==this.H.length&&"cast-selector-receiver"==this.H[1].key?(b&&Q7(),!0):!1}};
g.h.wQ=function(){e8(this.o,"sendDebugCommand",{debugCommand:"stats4nerds "})};
g.h.Hc=function(){return!1};g.DX.remote=N8;})(_yt_player);

/*
     FILE ARCHIVED ON 23:53:31 Oct 09, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 16:02:21 Dec 12, 2018.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 914.114 (3)
  esindex: 0.007
  captures_list: 929.68
  CDXLines.iter: 11.031 (3)
  PetaboxLoader3.datanode: 868.781 (4)
  exclusion.robots: 0.226
  exclusion.robots.policy: 0.208
  RedisCDXSource: 1.613
  PetaboxLoader3.resolve: 77.275 (2)
  load_resource: 39.547
*/