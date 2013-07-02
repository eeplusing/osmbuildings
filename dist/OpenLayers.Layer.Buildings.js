var OSMBuildings=function(){function f(a,b){var d=a[0]-b[0],c=a[1]-b[1];return d*d+c*c}function G(a){for(var b=0,d=0,c=0,j=a.length-3;c<j;c+=2)b+=a[c],d+=a[c+1];a=(a.length-2)/2;return[b/a<<0,d/a<<0]}function u(a,b){var d,c,j,f,h=0,k,l;k=0;for(l=a.length-3;k<l;k+=2)d=a[k],c=a[k+1],j=a[k+2],f=a[k+3],h+=d*f-j*c;if((0<h/2?"CW":"CCW")===b)return a;d=[];for(c=a.length-2;0<=c;c-=2)d.push(a[c],a[c+1]);return d}var V=V||Array,Aa=Aa||Array,h=Math,Ja=h.exp,Ka=h.log,La=h.sin,Ma=h.cos,ta=h.tan,Na=h.atan,na=h.min,
ua=h.max,Ba=h.ceil,Ca=h.floor,Da=document,P,$=function(a){var b,d,c;if(0===a.s)b=d=c=a.l;else{c=0.5>a.l?a.l*(1+a.s):a.l+a.s-a.l*a.s;var j=2*a.l-c;a.h/=360;b=Q(j,c,a.h+1/3);d=Q(j,c,a.h);c=Q(j,c,a.h-1/3)}return new D(255*b<<0,255*d<<0,255*c<<0,a.a)},Q=function(a,b,d){0>d&&(d+=1);1<d&&(d-=1);return d<1/6?a+6*(b-a)*d:0.5>d?b:d<2/3?a+6*(b-a)*(2/3-d):a},D=function(a,b,d,c){this.r=a;this.g=b;this.b=d;this.a=4>arguments.length?1:c},h=D.prototype;h.toString=function(){return"rgba("+[this.r<<0,this.g<<0,this.b<<
0,this.a.toFixed(2)].join()+")"};h.setLightness=function(a){var b=D.toHSLA(this);b.l*=a;b.l=Math.min(1,Math.max(0,b.l));return $(b)};h.setAlpha=function(a){return new D(this.r,this.g,this.b,this.a*a)};D.parse=function(a){var b;a+="";if(~a.indexOf("#")&&(b=a.match(/^#?(\w{2})(\w{2})(\w{2})(\w{2})?$/)))return new D(parseInt(b[1],16),parseInt(b[2],16),parseInt(b[3],16),b[4]?parseInt(b[4],16)/255:1);if(b=a.match(/rgba?\((\d+)\D+(\d+)\D+(\d+)(\D+([\d.]+))?\)/))return new D(parseInt(b[1],10),parseInt(b[2],
10),parseInt(b[3],10),b[4]?parseFloat(b[5]):1);if(b=a.match(/hsla?\(([\d.]+)\D+([\d.]+)\D+([\d.]+)(\D+([\d.]+))?\)/))return $({h:parseInt(b[1],10),s:parseFloat(b[2]),l:parseFloat(b[3]),a:b[4]?parseFloat(b[5]):1})};D.toHSLA=function(a){var b=a.r/255,d=a.g/255,c=a.b/255,j=Math.max(b,d,c),f=Math.min(b,d,c),h,k=(j+f)/2,l;if(j===f)h=f=0;else{l=j-f;f=0.5<k?l/(2-j-f):l/(j+f);switch(j){case b:h=(d-c)/l+(d<c?6:0);break;case d:h=(c-b)/l+2;break;case c:h=(b-d)/l+4}h/=6}return{h:360*h,s:f,l:k,a:a.a}};P=D;var Ea,
h=Math,R=h.PI,m=h.sin,v=h.cos,aa=h.tan,ba=h.asin,ca=h.atan2,w=R/180,K=23.4397*w;Ea=function(a,b,d){d=w*-d;b*=w;a=a.valueOf()/864E5-0.5+2440588-2451545;var c=w*(357.5291+0.98560028*a),j=w*(1.9148*m(c)+0.02*m(2*c)+3E-4*m(3*c)),j=c+j+102.9372*w+R,c=ba(m(0)*v(K)+v(0)*m(K)*m(j)),j=ca(m(j)*v(K)-aa(0)*m(K),v(j));d=w*(280.16+360.9856235*a)-d-j;return{altitude:ba(m(b)*m(c)+v(b)*v(c)*v(d)),azimuth:ca(m(d),v(d)*m(b)-aa(c)*v(b))-R/2}};var Fa,L=function(a){var b=parseFloat(a);return~a.indexOf("m")?b<<0:~a.indexOf("yd")?
b*Oa<<0:~a.indexOf("ft")?b*da<<0:~a.indexOf("'")?(a=a.split("'"),a[0]*da+a[1]*Pa<<0):b<<0},H=function(a){a=a.toLowerCase();return"#"===a[0]?a:Qa[Ra[a]||a]||null},ea=function(a){return(a=a.tags)&&!a.landuse&&(a.building||a["building:part"])&&(!a.layer||0<=a.layer)},T=function(a){if(a){for(var b=[],d,c=0,j=a.length;c<j;c++)d=S[a[c]],b.push(d[0],d[1]);b[b.length-2]!==b[0]&&b[b.length-1]!==b[1]&&b.push(b[0],b[1]);if(!(8>b.length))return b}},fa=function(a){var b=0,d=0;a.height&&(b=L(a.height));!b&&a["building:height"]&&
(b=L(a["building:height"]));!b&&a.levels&&(b=a.levels*M<<0);!b&&a["building:levels"]&&(b=a["building:levels"]*M<<0);a.min_height&&(d=L(a.min_height));!d&&a["building:min_height"]&&(d=L(a["building:min_height"]));!d&&a.min_level&&(d=a.min_level*M<<0);!d&&a["building:min_level"]&&(d=a["building:min_level"]*M<<0);var c,j;a["building:material"]&&(c=H(a["building:material"]));a["building:facade:material"]&&(c=H(a["building:facade:material"]));a["building:cladding"]&&(c=H(a["building:cladding"]));a["building:color"]&&
(c=a["building:color"]);a["building:colour"]&&(c=a["building:colour"]);a["roof:material"]&&(j=H(a["roof:material"]));a["building:roof:material"]&&(j=H(a["building:roof:material"]));a["roof:color"]&&(j=a["roof:color"]);a["roof:colour"]&&(j=a["roof:colour"]);a["building:roof:color"]&&(j=a["building:roof:color"]);a["building:roof:colour"]&&(j=a["building:roof:colour"]);return{height:b,minHeight:d,wallColor:c,roofColor:j}},Ga=function(a,b,d,c){a={id:a,footprint:u(d,"CW"),holes:c};b.height&&(a.height=
b.height);b.minHeight&&(a.minHeight=b.minHeight);b.wallColor&&(a.wallColor=b.wallColor);b.roofColor&&(a.roofColor=b.roofColor);c&&(a.holes=c);W.push(a)},Oa=0.9144,da=0.3048,Pa=0.0254,M=3,Ra={asphalt:"tar_paper",bitumen:"tar_paper",block:"stone",bricks:"brick",glas:"glass",glassfront:"glass",grass:"plants",masonry:"stone",granite:"stone",panels:"panel",paving_stones:"stone",plastered:"plaster",rooftiles:"roof_tiles",roofingfelt:"tar_paper",sandstone:"stone",sheet:"canvas",sheets:"canvas",shingle:"tar_paper",
shingles:"tar_paper",slates:"slate",steel:"metal",tar:"tar_paper",tent:"canvas",thatch:"plants",tile:"roof_tiles",tiles:"roof_tiles"},Qa={brick:"#cc7755",bronze:"#ffeecc",canvas:"#fff8f0",concrete:"#999999",copper:"#a0e0d0",glass:"#e8f8f8",gold:"#ffcc00",plants:"#009933",metal:"#aaaaaa",panel:"#fff8f0",plaster:"#999999",roof_tiles:"#f08060",silver:"#cccccc",slate:"#666666",stone:"#996666",tar_paper:"#333333",wood:"#deb887"},S,N,W;Fa=function(a){S={};N={};W=[];for(var b,d=0,c=a.length;d<c;d++)switch(b=
a[d],b.type){case "node":S[b.id]=[b.lat,b.lon];break;case "way":var j=void 0,f=void 0;if(ea(b))j=fa(b.tags),(f=T(b.nodes))&&Ga(b.id,j,f);else if(j=b.tags,!j||!j.highway&&!j.railway&&!j.landuse)N[b.id]=b;break;case "relation":var f=b,h=void 0,k=void 0;b=[];var l=void 0,t=void 0,j=void 0;if(ea(f)&&("multipolygon"===f.tags.type||"building"===f.tags.type)){for(var h=f.members,t=k=void 0,l=[],z=0,m=h.length;z<m;z++)k=h[z],"way"===k.type&&N[k.ref]&&(!k.role||"outer"===k.role?t=N[k.ref]:("inner"===k.role||
"enclave"===k.role)&&l.push(N[k.ref]));h=t&&t.tags?{outer:t,inner:l}:void 0;if(h&&(z=fa(f.tags),k=h.outer))if(l=fa(k.tags),t=T(k.nodes)){f=l;l=z;z=void 0;for(z in l)f[z]||(f[z]=l[z]);l=f;f=0;for(z=h.inner.length;f<z;f++)(j=T(h.inner[f].nodes))&&b.push(u(j,"CCW"));Ga(k.id,l,t,b.length?b:null)}}}return W};var ga=Math.PI,Ha=ga/2,Sa=ga/4,Ta=180/ga,Ua=256,Va="latitude",Wa="longitude",h=function(){function a(B,a){var e={};B/=w;a/=w;e[Va]=0>=a?90:1<=a?-90:Ta*(2*Na(Ja(ga*(1-2*a)))-Ha);e[Wa]=360*(1===B?1:
(B%1+1)%1)-180;return e}function b(B,a,e){function b(a){if("XDomainRequest"in window&&a!==g.readyState&&(g.readyState=a,g.onreadystatechange))g.onreadystatechange()}B=B.replace(/\{ *([\w_]+) *\}/g,function(B,e){return a[e]||B});var g="XDomainRequest"in window?new XDomainRequest:new XMLHttpRequest;g.onerror=function(){g.status=500;g.statusText="Error";b(4)};g.ontimeout=function(){g.status=408;g.statusText="Timeout";b(4)};g.onprogress=function(){b(3)};g.onload=function(){g.status=200;g.statusText="Ok";
b(4)};g.onreadystatechange=function(){4===g.readyState&&g.status&&!(200>g.status||299<g.status)&&e&&g.responseText&&e(JSON.parse(g.responseText))};b(0);g.open("GET",B);b(1);g.send(null);b(2);return g}function d(){ha.render();oa.render();c()}function c(){C.clearRect(0,0,l,t);if(!(v<M||ia)){var a,b,e,d,g,n,c,Xa=oa.MAX_HEIGHT,Ia=[ja+E,ka+F],k=E,p=E+l,q=F,Ya=F+t,s,va,x,y;A.renderItems.sort(function(a,B){return f(B.center,Ia)/B.height-f(a.center,Ia)/a.height});a=0;for(b=A.renderItems.length;a<b;a++)if(g=
A.renderItems[a],!(g.height<=Xa)){n=!1;s=g.footprint;e=0;for(d=s.length-1;e<d;e+=2)n||(n=s[e]>k&&s[e]<p&&s[e+1]>q&&s[e+1]<Ya);if(n){e=1>g.scale?g.height*g.scale:g.height;n=X/(X-e);c=0;g.minHeight&&(e=1>g.scale?g.minHeight*g.scale:g.minHeight,c=X/(X-e));x=g.wallColor||N;y=g.altColor||K;s=j(s,n,c,x,y);va=[];if(g.holes){e=0;for(d=g.holes.length;e<d;e++)va[e]=j(g.holes[e],n,c,x,y)}C.fillStyle=g.roofColor||la;C.strokeStyle=y;h(s,!0,va)}}}}function j(a,b,e,d,g){for(var n={x:0,y:0},c={x:0,y:0},f,j,l=[],
p=0,q=a.length-3;p<q;p+=2)n.x=a[p]-E,n.y=a[p+1]-F,c.x=a[p+2]-E,c.y=a[p+3]-F,f=m(n.x,n.y,b),j=m(c.x,c.y,b),e&&(n=m(n.x,n.y,e),c=m(c.x,c.y,e)),(c.x-n.x)*(f.y-n.y)>(f.x-n.x)*(c.y-n.y)&&(C.fillStyle=n.x<c.x&&n.y<c.y||n.x>c.x&&n.y>c.y?g:d,h([c.x,c.y,n.x,n.y,f.x,f.y,j.x,j.y])),l[p]=f.x,l[p+1]=f.y;return l}function h(a,b,e){if(a.length){var c,g,n,d;C.beginPath();C.moveTo(a[0],a[1]);c=2;for(g=a.length;c<g;c+=2)C.lineTo(a[c],a[c+1]);if(e){c=0;for(g=e.length;c<g;c++){a=e[c];C.moveTo(a[0],a[1]);n=2;for(d=a.length;n<
d;n+=2)C.lineTo(a[n],a[n+1])}}C.closePath();b&&C.stroke();C.fill()}}function m(a,b,e){return{x:(a-ja)*e+ja<<0,y:(b-ka)*e+ka<<0}}function k(a){v=a;w=Ua<<v;a=v;var b=M,e=Q;a=na(ua(a,b),e);I=1-na(ua(0+0.3*((a-b)/(e-b)),0),0.3);N=O.setAlpha(I)+"";K=H.setAlpha(I)+"";la=Y.setAlpha(I)+""}var l=0,t=0,z=0,D=0,E=0,F=0,v,w,C,O=new P(200,190,180),H=O.setLightness(0.8),Y=O.setLightness(1.2),N=O+"",K=H+"",la=Y+"",L,I=1,M=15,Q=20,R,ja,ka,X,ia,S=new Date,Z={},T={add:function(a,b){Z[a]={data:b,time:Date.now()}},get:function(a){return Z[a]&&
Z[a].data},purge:function(){S.setMinutes(S.getMinutes()-5);for(var a in Z)Z[a].time<S&&delete Z[a]}},A,fa=function(a){return function(b){W(b,a)}},W=function(a,b){if(a){var e;if("FeatureCollection"===a.type){e=a.features;var c,g,n,d,f,j,h=[],p,q,l,s,k,x,y,r;c=0;for(g=e.length;c<g;c++)if(p=e[c],"Feature"===p.type&&(q=p.geometry,p=p.properties,"LineString"===q.type&&(x=l.length-1,l[0][0]===l[x][0]&&l[0][1]===l[x][1]&&(l=q.coordinates)),"Polygon"===q.type&&(l=q.coordinates),"MultiPolygon"===q.type&&(l=
q.coordinates[0]),l)){if(p.color||p.wallColor)s=p.color||p.wallColor;p.roofColor&&(k=p.roofColor);q=l[0];r=[];y=p.height;n=x=0;for(d=q.length;n<d;n++)r.push(q[n][1],q[n][0]),x+=y||q[n][2]||0;y=[];n=1;for(d=l.length;n<d;n++){q=l[c];y[n-1]=[];f=0;for(j=q.length;f<j;f++)y[n-1].push(q[f][1],q[f][0])}n={id:p.id||r[0]+","+r[1],footprint:u(r,"CW")};x&&(n.height=x/q.length<<0);p.minHeight&&(n.minHeight=p.minHeight);s&&(n.wallColor=s);k&&(n.roofColor=k);y.length&&(n.holes=y);h.push(n)}e=h}else a.osm3s&&(e=
Fa(a.elements));b&&T.add(b,e);aa(e,!0)}},$=function(a){for(var b,e,c=new V(a.length),g=0,d=a.length-1;g<d;g+=2)b=a[g+1],e=na(1,ua(0,0.5-Ka(ta(Sa+Ha*a[g]/180))/ga/2)),b=(b/360+0.5)*w<<0,e=e*w<<0,c[g]=b,c[g+1]=e;a=c;c=a.length/2;g=new Aa(c);d=0;b=c-1;var f,j,h,l=[],p=[],q=[];for(g[d]=g[b]=1;b;){f=0;for(e=d+1;e<b;e++){j=a[2*e];var k=a[2*e+1],s=a[2*d],r=a[2*d+1],x=a[2*b],y=a[2*b+1],t=x-s,m=y-r,v=void 0;if(0!==t||0!==m)v=((j-s)*t+(k-r)*m)/(t*t+m*m),1<v?(s=x,r=y):0<v&&(s+=t*v,r+=m*v);t=j-s;m=k-r;j=t*t+
m*m;j>f&&(h=e,f=j)}2<f&&(g[h]=1,l.push(d),p.push(h),l.push(h),p.push(b));d=l.pop();b=p.pop()}for(e=0;e<c;e++)g[e]&&q.push(a[2*e],a[2*e+1]);c=q;if(!(8>c.length))return c},aa=function(a,b){var e,c,g,f,j=[],h,l,k,p,q,r,s,t,m=Q-v;e=0;for(c=a.length;e<c;e++)if(h=a[e],l=3*(h.height||15)>>m)if(k=3*h.minHeight>>m,!(k>R)&&(p=$(h.footprint))){s=[];if(h.holes){g=0;for(f=h.holes.length;g<f;g++)(t=$(h.holes[g]))&&s.push(t)}f=g=null;if(h.wallColor&&(q=P.parse(h.wallColor)))g=q.setAlpha(I),f=""+g.setLightness(0.8),
g=""+g;r=null;if(h.roofColor&&(q=P.parse(h.roofColor)))r=""+q.setAlpha(I);j.push({id:h.id,footprint:p,height:na(l,R),minHeight:k,wallColor:g,altColor:f,roofColor:r,center:G(p),holes:s.length?s:null})}c=0;for(h=j.length;c<h;c++)e=j[c],pa[e.id]||(e.scale=b?0:1,ma.renderItems.push(j[c]),pa[e.id]=1);L||(L=setInterval(function(){for(var a,b=!1,e=0,c=A.renderItems.length;e<c;e++)a=A.renderItems[e],1>a.scale&&(a.scale+=0.1,1<a.scale&&(a.scale=1),b=!0);d();b||(clearInterval(L),L=null)},33))},wa,pa={},ma=
{renderItems:[],load:function(a){wa=a||"http://overpass-api.de/api/interpreter?data=[out:json];(way[%22building%22]({s},{w},{n},{e});node(w);way[%22building:part%22=%22yes%22]({s},{w},{n},{e});node(w);relation[%22building%22]({s},{w},{n},{e});way(r);node(w););out;";ma.update()},update:function(){if(wa&&!(15>v)){var c=a(E,F),d=a(E+l,F+t),e=0.0075*Ba(c.latitude/0.0075),f=0.015*Ba(d.longitude/0.015),d=0.0075*Ca(d.latitude/0.0075),c=0.015*Ca(c.longitude/0.015);T.purge();ma.renderItems=[];pa={};for(var g,
h,j;d<=e;d+=0.0075)for(g=c;g<=f;g+=0.015)j=d+","+g,(h=T.get(j))?aa(h):b(wa,{n:(1E4*(d+0.0075)<<0)/1E4,e:(1E4*(g+0.015)<<0)/1E4,s:(1E4*d<<0)/1E4,w:(1E4*g<<0)/1E4},fa(j))}},set:function(a){ma.renderItems=[];pa={};W(a)}};A=ma;var ha,ra=function(a,b,e){return{x:a+qa.x*e,y:b+qa.y*e}},r,ba=!0,ca=new P(0,0,0),da=null,qa={x:0,y:0},xa={setContext:function(a){r=a;xa.setDate((new Date).setHours(10))},enable:function(a){ba=!!a},render:function(){var b,c,e,d;r.clearRect(0,0,l,t);if(ba&&!(v<M||ia))if(b=a(E+z,F+
D),b=Ea(da,b.latitude,b.longitude),!(0>=b.altitude)){c=1/ta(b.altitude);e=0.4/c;qa.x=Ma(b.azimuth)*c;qa.y=La(b.azimuth)*c;ca.a=e;d=ca+"";var g,f,h,j,k,m,p,q,u,s,w,x,y=[];r.beginPath();b=0;for(c=A.renderItems.length;b<c;b++){f=A.renderItems[b];q=!1;h=f.footprint;p=[];e=0;for(g=h.length-1;e<g;e+=2)p[e]=k=h[e]-E,p[e+1]=m=h[e+1]-F,q||(q=0<k&&k<l&&0<m&&m<t);if(q){h=1>f.scale?f.height*f.scale:f.height;f.minHeight&&(j=1>f.scale?f.minHeight*f.scale:f.minHeight);k=null;e=0;for(g=p.length-3;e<g;e+=2)m=p[e],
u=p[e+1],q=p[e+2],s=p[e+3],w=ra(m,u,h),x=ra(q,s,h),f.minHeight&&(u=ra(m,u,j),s=ra(q,s,j),m=u.x,u=u.y,q=s.x,s=s.y),(q-m)*(w.y-u)>(w.x-m)*(s-u)?(1===k&&r.lineTo(m,u),k=0,e||r.moveTo(m,u),r.lineTo(q,s)):(0===k&&r.lineTo(w.x,w.y),k=1,e||r.moveTo(w.x,w.y),r.lineTo(x.x,x.y));r.closePath();y.push(p)}}r.fillStyle=d;r.fill();r.globalCompositeOperation="destination-out";r.beginPath();b=0;for(c=y.length;b<c;b++){j=y[b];r.moveTo(j[0],j[1]);e=2;for(g=j.length;e<g;e+=2)r.lineTo(j[e],j[e+1]);r.lineTo(j[0],j[1]);
r.closePath()}r.fillStyle="#00ff00";r.fill();r.globalCompositeOperation="source-over"}},setDate:function(a){da=a;xa.render()}};ha=xa;var oa,J,ea={MAX_HEIGHT:8,setContext:function(a){J=a},render:function(){J.clearRect(0,0,l,t);if(!(v<M||ia)){var a,b,c,d,f,h,j,k,m;J.beginPath();a=0;for(b=A.renderItems.length;a<b;a++)if(c=A.renderItems[a],!(c.height>ea.MAX_HEIGHT)){m=!1;f=c.footprint;k=[];c=0;for(d=f.length-1;c<d;c+=2)k[c]=h=f[c]-E,k[c+1]=j=f[c+1]-F,m||(m=0<h&&h<l&&0<j&&j<t);if(m){c=0;for(d=k.length-
3;c<d;c+=2)m=k[c],f=k[c+1],c?J.lineTo(m,f):J.moveTo(m,f);J.closePath()}}J.fillStyle=la;J.strokeStyle=K;J.stroke();J.fill()}}};oa=ea;var ya,za=function(){var a=Da.createElement("CANVAS");a.style.webkitTransform="translate3d(0,0,0)";a.style.imageRendering="optimizeSpeed";a.style.position="absolute";a.style.left=0;a.style.top=0;var b=a.getContext("2d");b.lineCap="round";b.lineJoin="round";b.lineWidth=1;b.mozImageSmoothingEnabled=!1;b.webkitImageSmoothingEnabled=!1;sa.push(a);U.appendChild(a);return b},
U=Da.createElement("DIV");U.style.pointerEvents="none";U.style.position="absolute";U.style.left=0;U.style.top=0;var sa=[];ha.setContext(za());oa.setContext(za());C=za();ya={appendTo:function(a){a.appendChild(U);return U},setSize:function(a,b){for(var c=0,d=sa.length;c<d;c++)sa[c].width=a,sa[c].height=b}};this.setStyle=function(a){a=a||{};if(a.color||a.wallColor)O=P.parse(a.color||a.wallColor),N=O.setAlpha(I)+"",H=O.setLightness(0.8),K=H.setAlpha(I)+"",Y=O.setLightness(1.2),la=Y.setAlpha(I)+"";a.roofColor&&
(Y=P.parse(a.roofColor),la=Y.setAlpha(I)+"");void 0!==a.shadows&&ha.enable(a.shadows);d()};this.setCamOffset=function(a,b){ja=z+a;ka=t+b};this.setMaxZoom=function(a){Q=a};this.setDate=function(a){ha.setDate(a)};this.appendTo=function(a){return ya.appendTo(a)};this.loadData=function(a){A.load(a)};this.setData=function(a){A.set(a)};this.onMoveEnd=function(){d();A.update()};this.onZoomEnd=function(a){ia=!1;k(a.zoom);A.update();d()};this.onZoomStart=function(){ia=!0;d()};this.setOrigin=function(a,b){E=
a;F=b};this.setSize=function(a,b){l=a;t=b;z=l/2<<0;D=t/2<<0;ja=z;ka=t;X=l/(1.5/(window.devicePixelRatio||1))/ta(45)<<0;ya.setSize(l,t);R=X-50};this.setZoom=k;this.render=c;this.renderAll=d};h.VERSION="0.1.8a";h.ATTRIBUTION='&copy; <a href="http://osmbuildings.org">OSM Buildings</a>';return h}();
OpenLayers.Layer.Buildings=OpenLayers.Class(OpenLayers.Layer,{CLASS_NAME:"OpenLayers.Layer.Buildings",name:"OSM Buildings",attribution:OSMBuildings.ATTRIBUTION,isBaseLayer:!1,alwaysInRange:!0,dxSum:0,dySum:0,initialize:function(f){f=f||{};f.projection="EPSG:900913";OpenLayers.Layer.prototype.initialize.call(this,this.name,f)},setOrigin:function(){var f=this.map.getLonLatFromPixel(new OpenLayers.Pixel(0,0)),G=this.map.resolution,u=this.maxExtent,V=Math.round((f.lon-u.left)/G),f=Math.round((u.top-f.lat)/
G);this.osmb.setOrigin(V,f)},setMap:function(f){this.map||OpenLayers.Layer.prototype.setMap.call(this,f);this.osmb||(this.osmb=new OSMBuildings,this.container=this.osmb.appendTo(this.div));this.osmb.setSize(this.map.size.w,this.map.size.h);this.osmb.setZoom(this.map.zoom);this.setOrigin()},removeMap:function(f){this.container.parentNode.removeChild(this.container);OpenLayers.Layer.prototype.removeMap.call(this,f)},onMapResize:function(){OpenLayers.Layer.prototype.onMapResize.call(this);this.osmb.onResize({width:this.map.size.w,
height:this.map.size.h})},moveTo:function(f,G,u){f=OpenLayers.Layer.prototype.moveTo.call(this,f,G,u);if(!u){u=parseInt(this.map.layerContainerDiv.style.left,10);var V=parseInt(this.map.layerContainerDiv.style.top,10);this.div.style.left=-u+"px";this.div.style.top=-V+"px"}this.setOrigin();this.dySum=this.dxSum=0;this.osmb.setCamOffset(this.dxSum,this.dySum);if(G)this.osmb.onZoomEnd({zoom:this.map.zoom});else this.osmb.onMoveEnd();return f},moveByPx:function(f,G){this.dxSum+=f;this.dySum+=G;var u=
OpenLayers.Layer.prototype.moveByPx.call(this,f,G);this.osmb.setCamOffset(this.dxSum,this.dySum);this.osmb.render();return u},setStyle:function(f){this.osmb.setStyle(f);return this},setDate:function(f){this.osmb.setDate(f);return this},load:function(f){this.osmb.loadData(f);return this},geoJSON:function(f){this.osmb.setData(f);return this}});
