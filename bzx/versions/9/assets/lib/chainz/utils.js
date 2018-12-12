var isCompact=(window.innerWidth<765);function ageString(t){if(t==0)return '';var k=2;function p(n,u){if(k<=0||t<n)return '';k--;var i=Math.floor(t/n);t-=i*n;return i+' '+u+((u.length>1&&i>1)?'s':'')+' ';}
var t=Date.now()*0.001-t;if(t<60){if(isCompact){return t>0?p(1,'"'):'< 1"'}else{return t>1?p(1,'second'):'just now'}}else{if(isCompact){return p(86400,'d')||p(3600,'h')||p(60,'\'')}else{return p(31536000,'year')+p(86400,'day')+p(3600,'hour')+p(60,'minute')}}}
function fmtDateISO(d,d4){function pad2(v){return v<10?'0'+v:v}
return(d.getUTCFullYear()-(d4?2000:0))+'-'+pad2(d.getUTCMonth()+1)+'-'+pad2(d.getUTCDate())+' '
+pad2(d.getUTCHours())+':'+pad2(d.getUTCMinutes())+':'+pad2(d.getUTCSeconds());}
function fmtDateUS(d){return d.getFullYear()+', '
+['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][d.getMonth()]
+' '+d.getDate();}
function fmtThousandths(v){if(v<0){return '-'+fmtThousandths(-v)}
v=''+v;var dot=v.indexOf('.');if(dot>=0){return fmtThousandths(v.substr(0,dot))+v.substr(dot)};var a=String(v).split('');for(var i=a.length-3;i>0;i-=3)a.splice(i,0,',');return a.join('');}
function fmtAmount(a,n,unit){if(!a&&!n)return '0<small>.0</small> '+(unit||coinShort);var f,v,left,right;if(n){f=parseFloat(a.toFixed(n));v=f.toFixed(n);}else{f=parseFloat(a.toFixed(8));v=isCompact?f.toFixed(3):(f>=1e-6)?f.toString():f.toFixed(8),left,right;}
var p=v.indexOf('.');if(p>0){left=v.substr(0,p);right='<small>.'+v.substr(p+1)+'</small>';}else{left=v;right='<small>.0</small>';}
if(left.length>3)left=fmtThousandths(left);return left+right+(isCompact?"":" "+(unit||coinShort));}
function fmtBTC(p){if(p<1e-4){if(p<1e-8){return(p*1e8).toFixed(2)+' satoshis'}else{return Math.round(p*1e8)+' satoshis'}}else if(p<1e-1){return(p*1e3).toFixed(5)+' mBTC'}else{return p.toFixed(6)+' BTC'}}
function fmtCurr(p){if(p<1e-2){if(p<1e-4){return(p*1e6).toFixed(2)+' /&nbsp;M&nbsp;'+coinShort}else{return p.toFixed(6)}}else{return p.toFixed(3)}}
function fmtSI(n){if(n>1e4){if(n>=1e13){return(n*1e-12).toFixed(2)+'&nbsp;T';}else if(n>=1e10){return(n*1e-9).toFixed(2)+'&nbsp;G';}else if(n>=1e7){return(n*1e-6).toFixed(1)+'&nbsp;M';}
return(n*1e-3).toFixed(1)+'&nbsp;k';}else{if(n<1){return parseFloat(n).toFixed(4)+' ';}else if(n<100){return parseFloat(n).toFixed(2)+' ';}
return parseFloat(n).toFixed(1)+' ';}}
function fmtDiff(n){return fmtSI(n);}
function fmtBytes(n){if(n>=1e13){return(n*1e-12).toFixed(1)+'&nbsp;T';}else if(n>=1e10){return(n*1e-9).toFixed(1)+'&nbsp;G';}else if(n>=1e7){return(n*1e-6).toFixed(1)+'&nbsp;M';}
return(n*1e-3).toFixed(1)+'&nbsp;k';}
function syntaxHighlight(json){json=json.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,function(match){var cls='number';if(/^"/.test(match)){if(/:$/.test(match)){cls='key';}else{cls='string';}}else if(/true|false/.test(match)){cls='boolean';}else if(/null/.test(match)){cls='null';}
return '<span class="'+cls+'">'+match+'</span>';});}
function loadScript(surl,cb){if(loadScript[surl]){if(cb&&loadScript[surl]==2)cb();return;};loadScript[surl]=1;var r=document.createElement('script');r.async='async';r.type='text/javascript';r.src=surl;r.onload=function(){loadScript[surl]=2;if(cb)cb();};document.getElementsByTagName('head')[0].appendChild(r);}
function clipboard(btnSel,dataSel){var btn=$(btnSel);var client=btn[0];btn.css('opacity',1).click(function(){var textArea=document.createElement('textarea');var style=textArea.style;style.position='absolute';style.top=0;style.left=0;style.width='2em';style.height='2em';style.opacity=0;textArea.value=$(dataSel).text();document.body.appendChild(textArea);try{textArea.select();if(document.execCommand('copy')){btn.tooltip({title:'Copied!',trigger:'manual',placement:'right'});btn.tooltip('show');setTimeout(function(){btn.tooltip('hide')},1000);}}finally{document.body.removeChild(textArea);};});}
function getWithRetry(url,cb,t){t=t||250;$.get(url,function(data){if(data=="busy"){setTimeout(function(){getWithRetry(url,cb,t+250);},t);}else cb(data);});}
$(document).ajaxError(function(e,xhr){if(xhr.status==503)location.reload();});