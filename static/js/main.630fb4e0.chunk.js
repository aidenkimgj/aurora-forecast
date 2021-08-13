(this["webpackJsonpaurora-web2"]=this["webpackJsonpaurora-web2"]||[]).push([[0],{124:function(e,t,c){},189:function(e,t,c){"use strict";c.r(t);var a=c(3),n=c.n(a),s=c(23),r=c.n(s),o=(c(123),c(124),c(6)),i=c(79),l=c(18),j=c(11),u=c.n(j),b=c(26),d=c(27),h=c.n(d),O=c(53),x=c(54),m=c(197),p=c(196),f=c(198),g=c(115),v=c(194),y=c(195),w=c(65),S=c.n(w),A=c(15),E=c(0),C={Thunderstorm:Object(E.jsx)(A.f,{size:70,color:"white"}),Drizzle:Object(E.jsx)(A.d,{size:70,color:"white"}),Rain:Object(E.jsx)(A.c,{size:65,color:"white"}),Snow:Object(E.jsx)(A.e,{size:70,color:"white"}),Tornado:Object(E.jsx)(A.r,{size:70,color:"white"}),Clear:Object(E.jsx)(A.g,{size:70,color:"white"}),Mist:Object(E.jsx)(A.i,{size:70,color:"white"}),Smoke:Object(E.jsx)(A.q,{size:70,color:"white"}),Haze:Object(E.jsx)(A.b,{size:70,color:"white"}),Dust:Object(E.jsx)(A.h,{size:70,color:"white"}),Ash:Object(E.jsx)(A.h,{size:70,color:"white"}),Squall:Object(E.jsx)(A.f,{size:70,color:"white"}),Clouds:Object(E.jsx)(A.a,{size:70,color:"white"})},N={Thunderstorm:Object(E.jsx)(A.n,{size:70,color:"white"}),Drizzle:Object(E.jsx)(A.l,{size:70,color:"white"}),Rain:Object(E.jsx)(A.k,{size:65,color:"white"}),Snow:Object(E.jsx)(A.m,{size:70,color:"white"}),Tornado:Object(E.jsx)(A.r,{size:70,color:"white"}),Clear:Object(E.jsx)(A.o,{size:70,color:"white"}),Mist:Object(E.jsx)(A.i,{size:70,color:"white"}),Smoke:Object(E.jsx)(A.q,{size:70,color:"white"}),Haze:Object(E.jsx)(A.p,{size:70,color:"white"}),Dust:Object(E.jsx)(A.h,{size:70,color:"white"}),Ash:Object(E.jsx)(A.h,{size:70,color:"white"}),Squall:Object(E.jsx)(A.n,{size:70,color:"white"}),Clouds:Object(E.jsx)(A.j,{size:70,color:"white"})},D=function(e){var t=e.currWeather,c=e.offset,n=e.utc,s=Object(a.useState)(new Date(1e3*t.sunrise)),r=Object(o.a)(s,2),i=r[0],l=r[1],j=Object(a.useState)(new Date(1e3*t.sunset)),u=Object(o.a)(j,2),b=u[0],d=u[1],h=Object(a.useState)(new Date(1e3*t.dt)),O=Object(o.a)(h,2),x=O[0],m=O[1],f=Object(a.useState)(t.clouds),g=Object(o.a)(f,2),w=g[0],A=g[1],D=Object(a.useState)(t.feels_like),_=Object(o.a)(D,2),T=_[0],z=_[1],F=Object(a.useState)(t.humidity),M=Object(o.a)(F,2),k=M[0],P=M[1],R=Object(a.useState)(t.pressure),I=Object(o.a)(R,2),H=I[0],W=I[1],L=Object(a.useState)(t.temp),B=Object(o.a)(L,2),K=B[0],Y=B[1],U=Object(a.useState)(t.weather),q=Object(o.a)(U,2),V=q[0],G=q[1];return Object(a.useEffect)((function(){l(new Date(n+1e3*(c+t.sunrise-t.dt))),d(new Date(n+1e3*(c+t.sunset-t.dt))),m(new Date(n+1e3*c)),A(t.clouds),z(t.feels_like),P(t.humidity),W(t.pressure),Y(t.temp),G(t.weather)}),[t]),Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)("h3",{children:"Current Weather"}),Object(E.jsxs)("div",{className:"curr-weather",children:[Object(E.jsxs)(v.a,{children:[Object(E.jsx)(y.a,{className:"curr-icon",children:t.sunset>t.dt&&t.sunrise<t.dt?C[V[0].main]:N[V[0].main]}),Object(E.jsxs)(y.a,{className:"curr-temp",children:[Math.round(K),"\xb0c"]})]}),Object(E.jsx)(v.a,{children:Object(E.jsx)(y.a,{className:"curr-description",children:function(){var e=V[0].description,t=e.substring(0,1),c=e.substring(1);return"".concat(t.toUpperCase()).concat(c)}()})}),Object(E.jsxs)(v.a,{className:"curr-info",children:[Object(E.jsxs)(y.a,{children:[Object(E.jsxs)(v.a,{children:[Object(E.jsx)(y.a,{children:Object(E.jsx)(p.a,{children:"Cloud Cover"})}),Object(E.jsxs)(y.a,{className:"col-right",children:[w,"%"]})]}),Object(E.jsxs)(v.a,{children:[Object(E.jsx)(y.a,{children:Object(E.jsx)(p.a,{children:"Humidity"})}),Object(E.jsxs)(y.a,{className:"col-right",children:[k,"%"]})]}),Object(E.jsxs)(v.a,{children:[Object(E.jsx)(y.a,{children:Object(E.jsx)(p.a,{children:"Sunrise"})}),Object(E.jsxs)(y.a,{className:"col-right",children:[i.getHours()<10?"0".concat(i.getHours()):i.getHours(),":",i.getMinutes()<10?"0".concat(i.getMinutes()):i.getMinutes()]})]})]}),Object(E.jsxs)(y.a,{children:[Object(E.jsxs)(v.a,{children:[Object(E.jsx)(y.a,{children:Object(E.jsx)(p.a,{children:"RealFeel"})}),Object(E.jsxs)(y.a,{className:"col-right",children:[Math.round(T),"\xb0c"]})]}),Object(E.jsxs)(v.a,{children:[Object(E.jsx)(y.a,{children:Object(E.jsx)(p.a,{children:"Pressure"})}),Object(E.jsxs)(y.a,{className:"col-right",children:[H," hPa"]})]}),Object(E.jsxs)(v.a,{children:[Object(E.jsx)(y.a,{children:Object(E.jsx)(p.a,{children:"Sunset"})}),Object(E.jsxs)(y.a,{className:"col-right",children:[b.getHours(),":",b.getMinutes()<10?"0".concat(b.getMinutes()):b.getMinutes()]})]})]})]}),Object(E.jsx)(v.a,{children:Object(E.jsxs)(y.a,{className:"curr-local",children:[Object(E.jsx)(p.a,{children:"Local Time : "})," ",S()().format("MMM"),"\xa0",x.getDate(),"\xa0",x.getFullYear()," \xa0",x.getHours()<10?"0".concat(x.getHours()):x.getHours(),":",x.getMinutes()<10?"0".concat(x.getMinutes()):x.getMinutes()]})})]})]})},_=c(44),T=c(20),z=c(86),F=Object(z.b)({name:"dataReducer",initialState:{page:"",offset:0,timezone:""},reducers:{add:function(e,t){e.page=t.payload},setOffset:function(e,t){e.offset=t.payload},setTimeZone:function(e,t){e.timezone=t.payload}}}),M=F.actions,k=M.add,P=M.setOffset,R=M.setTimeZone,I=Object(z.a)({reducer:F.reducer}),H=c(36),W=c.n(H),L=n.a.memo((function(e){var t=e.daily,c=e.offset,n=Object(a.useState)(t),s=Object(o.a)(n,2),r=s[0],i=s[1],l=60*(new Date).getTimezoneOffset();return Object(a.useEffect)((function(){i(t)}),[t]),Object(E.jsx)(E.Fragment,{children:Object(E.jsxs)("div",{children:[Object(E.jsx)("div",{className:"daily-date",children:Object(E.jsx)(v.a,{children:W()(new Date(1e3*(r.dt+c+l)),"ddd")})}),Object(E.jsx)("div",{className:"daily-date",children:Object(E.jsx)(v.a,{children:W()(new Date(1e3*(r.dt+c+l)),"mmm d")})}),Object(E.jsx)("div",{className:"daily-icon",children:Object(E.jsx)(v.a,{children:C[r.weather[0].main]})}),Object(E.jsxs)("div",{className:"daily-detail",children:[Object(E.jsx)("div",{className:"daily-temp",children:Object(E.jsxs)(v.a,{children:[Math.round(r.temp.max),"\xb0c /",Math.round(r.temp.min),"\xb0c"]})}),Object(E.jsx)("div",{className:"daily-description",children:Object(E.jsx)(v.a,{children:function(){var e=r.weather[0].description,t=e.substring(0,1),c=e.substring(1);return"".concat(t.toUpperCase()).concat(c)}()})})]})]})})})),B=n.a.memo((function(e){var t=e.dailyWeather,c=e.offset,n=e.timezone,s=Object(a.useState)([]),r=Object(o.a)(s,2),i=r[0],l=r[1],j=Object(a.useState)(c),u=Object(o.a)(j,2),b=u[0],d=u[1],h=Object(a.useState)(n),O=Object(o.a)(h,2),x=O[0],m=O[1],p=Object(T.b)();return p(P(b)),p(R(x)),Object(a.useEffect)((function(){!function(){for(var e=[],a=1;a<t.length;a++)e=[].concat(Object(_.a)(e),[t[a]]);l(e),d(c),m(n),console.log(c,"\uc124\uc815\ub41c \ub370\uc77c\ub9ac")}()}),[t]),Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)("h3",{children:"7 Days Weather"}),Object(E.jsx)(v.a,{children:i.map((function(e){return Object(E.jsx)(y.a,{className:"daily-weather",children:Object(E.jsx)(L,{daily:e,offset:c},e.dt)})}))})]})})),K=function(e){var t=e.weather,c=e.sunrise,n=e.sunset,s=e.offset,r=Object(a.useState)(t.weather[0]),i=Object(o.a)(r,2),l=i[0],j=i[1],u=60*(new Date).getTimezoneOffset();return Object(a.useEffect)((function(){j(t.weather[0])}),[t]),Object(E.jsx)(E.Fragment,{children:Object(E.jsxs)(v.a,{children:[Object(E.jsx)("div",{className:"hourly-time",children:Object(E.jsx)("div",{children:Object(E.jsxs)(y.a,{children:[new Date(1e3*(t.dt+s+u)).getMonth()+1,"/",new Date(1e3*(t.dt+s+u)).getDate(),"\xa0",new Date(1e3*(t.dt+s+u)).getHours()<10?"0".concat(new Date(1e3*(t.dt+s+u)).getHours()):new Date(1e3*(t.dt+s+u)).getHours(),":00"]})})}),Object(E.jsx)(y.a,{id:"hourly-icon",children:n>t.dt&&c<t.dt?C[t.weather[0].main]:N[t.weather[0].main]}),Object(E.jsx)("div",{className:"hourly-temp",children:Object(E.jsx)("div",{children:Object(E.jsxs)(y.a,{className:"",children:[Math.round(t.temp),"\xb0c"]})})}),Object(E.jsx)("div",{className:"hourly-windchill",children:Object(E.jsx)("div",{children:Object(E.jsxs)(y.a,{children:["RealFeel\xae ",Math.round(t.feels_like),"\xb0c"]})})}),Object(E.jsx)("div",{className:"hourly-description",children:Object(E.jsx)("div",{children:Object(E.jsx)(y.a,{children:function(){var e=l.description,t=e.substring(0,1),c=e.substring(1);return"".concat(t.toUpperCase()).concat(c)}()})})})]})})},Y=function(e){var t=e.hourlyWeather,c=e.sunrise,n=e.sunset,s=e.offset,r=Object(a.useState)([]),i=Object(o.a)(r,2),l=i[0],j=i[1];return Object(a.useEffect)((function(){!function(){for(var e=[],c=1;c<6;c++)e=[].concat(Object(_.a)(e),[t[c]]);j(e)}()}),[t]),Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)("h3",{children:"Hourly Weather"}),l.map((function(e){return Object(E.jsx)(K,{weather:e,sunrise:c,sunset:n,offset:s},e.dt)}))]})},U=n.a.memo((function(e){var t=e.location,c=Object(a.useState)(),n=Object(o.a)(c,2),s=n[0],r=n[1],i=Object(a.useState)(),l=Object(o.a)(i,2),j=l[0],d=l[1];console.log(t,"Weather compo");var O=function(){var e=Object(b.a)(u.a.mark((function e(){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(t.lat,"&lon=").concat(t.lng,"&exclude=minutely&units=metric&appid=").concat("ac0c8a710f68473924a21043fd62cb93"));case 2:c=e.sent,x(),r(c.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=new Date,t=e.getTime()+60*e.getTimezoneOffset()*1e3;d(t)};return console.log("state\uc758 \ub0a0\uc528 ==>",s),Object(a.useEffect)((function(){O()}),[t]),Object(E.jsx)(E.Fragment,{children:s?Object(E.jsx)(E.Fragment,{children:Object(E.jsxs)("div",{className:"weather",children:[Object(E.jsx)("h1",{children:"Weather Forecast"}),Object(E.jsxs)(v.a,{className:"weather-current",children:[Object(E.jsx)(y.a,{className:"col-md-5 current",children:Object(E.jsx)(D,{currWeather:s.current,offset:s.timezone_offset,utc:j})}),Object(E.jsx)(y.a,{className:"hourly",children:Object(E.jsx)(Y,{hourlyWeather:s.hourly,sunrise:s.current.sunrise,sunset:s.current.sunset,offset:s.timezone_offset})})]}),Object(E.jsx)(v.a,{className:"weather-daily",children:Object(E.jsx)(y.a,{children:Object(E.jsx)(B,{dailyWeather:s.daily,offset:s.timezone_offset,timezone:s.timezone,utc:j})})})]})}):Object(E.jsx)("h3",{children:"Weather is loading..."})})})),q=c(49),V=c.n(q),G=function(e){var t=e.time,c=Object(a.useState)(""),n=Object(o.a)(c,2),s=n[0],r=n[1],i=Object(a.useState)(""),l=Object(o.a)(i,2),j=l[0],u=l[1],b=Object(a.useState)(""),d=Object(o.a)(b,2),h=d[0],O=d[1],x=Object(a.useState)(""),m=Object(o.a)(x,2),p=m[0],f=m[1],g=Object(T.c)((function(e){return e.offset}));console.log(t,"\ub118\uc5b4\uc628 \ud0c0\uc784");return Object(a.useEffect)((function(){console.log("hello"),function(e){var t=60*new Date(e.start).getTimezoneOffset()*1e3,c=Date.parse(e.start)+t,a=Date.parse(e.end)+t,n=e.value,s="3"===e.value?"green":e.colour,o="".concat(W()(new Date(c),"HH"),":00 ~ ").concat(W()(new Date(a),"HH"),":00 ").concat(W()(new Date(c),"mmm dd yyyy")),i="".concat(W()(new Date(c+1e3*g),"HH"),":00 ~ ").concat(W()(new Date(a+1e3*g),"HH"),":00 ").concat(W()(new Date(c+1e3*g),"mmm dd yyyy"));console.log(new Date(c),"utc start \uc2dc\uac04"),console.log(new Date(a),"utc End \uc2dc\uac04"),console.log(new Date(c+1e3*g),"\ud604\uc9c0\uc2dc\uac04 start"),console.log(new Date(a+1e3*g),"\ud604\uc9c0\uc2dc\uac04 end"),r(o),u(i),f(s),O(n)}(t)}),[t]),Object(E.jsx)(E.Fragment,{children:Object(E.jsx)("div",{className:"threedays_kp",children:t.now?Object(E.jsxs)("div",{className:"threedays_ture",children:[Object(E.jsx)(v.a,{children:Object(E.jsxs)("span",{children:[s," UTC"]})}),Object(E.jsx)(v.a,{children:Object(E.jsxs)("span",{children:[j," Local"]})}),Object(E.jsx)(v.a,{children:Object(E.jsx)("span",{style:{color:p},children:h})})]}):Object(E.jsxs)("div",{className:"threedays_false",children:[Object(E.jsx)(v.a,{children:Object(E.jsxs)("span",{children:[s," UTC"]})}),Object(E.jsx)(v.a,{children:Object(E.jsxs)("span",{children:[j," Local"]})}),Object(E.jsx)(v.a,{children:Object(E.jsx)("span",{style:{color:p},children:h})})]})})})},Z=n.a.memo((function(e){var t=e.location,c=Object(a.useState)(""),n=Object(o.a)(c,2),s=n[0],r=n[1],i=Object(a.useState)(""),l=Object(o.a)(i,2),j=l[0],d=l[1],O=Object(a.useState)([]),x=Object(o.a)(O,2),m=x[0],p=x[1],f=Object(a.useState)([]),g=Object(o.a)(f,2),w=g[0],S=g[1],A=Object(a.useState)([]),C=Object(o.a)(A,2),N=C[0],D=C[1],_=Object(a.useState)([]),T=Object(o.a)(_,2),z=(T[0],T[1],Object(a.useState)([])),F=Object(o.a)(z,2),M=F[0],k=F[1],P=Object(a.useState)([]),R=Object(o.a)(P,2),I=R[0],H=R[1],W=function(){var e=Object(b.a)(u.a.mark((function e(c,a){var n,s,o,i,l,j;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t.lat,"lati"),console.log(a,"long"),e.next=4,h.a.get("https://api.auroras.live/v1/?type=ace&lat=".concat(c,"&long=").concat(a,"&data=all"));case 4:return n=e.sent,s=n.data,e.next=8,h.a.get("https://api.auroras.live/v1/?type=ace&lat=".concat(c,"&long=").concat(a,"&data=threeday"));case 8:return o=e.sent,i=o.data.values,e.next=12,h.a.get("https://api.auroras.live/v1/?type=ace&lat=".concat(c,"&long=").concat(a,"&data=probability"));case 12:l=e.sent,j=l.data.calculated,r(s),d(j),L(i),B();case 18:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}(),L=function(e){var t,c,a;e.forEach((function(e,n){switch(n){case 0:t=e;break;case 1:c=e;break;case 2:a=e;break;default:throw new Error("Something is Wrong!")}})),p(t),S(c),D(a),console.log("arr0",t),console.log("arr1",c),console.log("arr2",a)},B=function(){var e=Object(b.a)(u.a.mark((function e(){var t,c,a,n,s,r,o,i,l,j;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("https://services.swpc.noaa.gov/text/sgarf.txt");case 2:t=e.sent,c=t.data.indexOf("A.  Middle Latitudes"),a=t.data.slice(c),n=a.slice(43,45),s=a.slice(74,76),r=a.slice(105,107),o=a.slice(155,157),i=a.slice(186,188),l=a.slice(217,219),j=[o,i,l],k([n,s,r]),H(j);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){W(t.lat,t.lng)}),[t]),Object(E.jsx)(E.Fragment,{children:Object(E.jsxs)("div",{className:"aurora-forecast",children:[Object(E.jsx)("h1",{children:"Aurora Forecast"}),Object(E.jsxs)(v.a,{className:"current-aurora",children:[Object(E.jsxs)(y.a,{children:[Object(E.jsx)("h4",{children:"BZ"}),Object(E.jsx)("div",{className:"gauge-chart",children:Object(E.jsx)(V.a,{needleHeightRatio:.8,needleColor:"#9ba3a0",maxValue:20,customSegmentStops:[-20,-15,-10,0,20],segmentColors:["#FF471A","#F6961E","#ECDB23","#6AD72D"],minValue:-20,value:parseInt(s.bz),width:250,height:200})})]}),Object(E.jsxs)(y.a,{children:[Object(E.jsx)("h4",{children:"Density"}),Object(E.jsx)("div",{className:"gauge-chart",children:Object(E.jsx)(V.a,{needleHeightRatio:.8,needleColor:"#9ba3a0",maxValue:20,minValue:0,customSegmentStops:[0,4,10,15,20],segmentColors:["#6AD72D","#ECDB23","#F6961E","#FF471A"],value:parseFloat(s.density)>20?20:parseFloat(s.density),width:250,height:200})})]}),Object(E.jsxs)(y.a,{children:[Object(E.jsx)("h4",{children:"Speed"}),Object(E.jsx)("div",{className:"gauge-chart",children:Object(E.jsx)(V.a,{needleHeightRatio:.8,needleColor:"#9ba3a0",minValue:200,customSegmentStops:[200,350,500,700,1e3],segmentColors:["#6AD72D","#ECDB23","#F6961E","#FF471A"],value:parseInt(s.speed),width:250,height:200})})]})]}),Object(E.jsxs)(v.a,{children:[Object(E.jsxs)(y.a,{children:[Object(E.jsx)("h4",{children:"Current Kp"}),Object(E.jsx)("div",{className:"gauge-chart",children:Object(E.jsx)(V.a,{needleHeightRatio:.8,needleColor:"#9ba3a0",maxValue:10,segments:5,segmentColors:["#6AD72D","#AEE228","#ECDB23","#F6961E","#FF471A"],value:parseInt(s.kp),width:250,height:200})})]}),Object(E.jsxs)(y.a,{children:[Object(E.jsx)("h4",{children:"Kp 1 hour"}),Object(E.jsx)("div",{className:"gauge-chart",children:Object(E.jsx)(V.a,{needleHeightRatio:.8,needleColor:"#9ba3a0",maxValue:10,segments:5,segmentColors:["#6AD72D","#AEE228","#ECDB23","#F6961E","#FF471A"],value:parseInt(s.kp1hour),width:250,height:200})})]}),Object(E.jsxs)(y.a,{children:[Object(E.jsx)("h4",{children:"Kp 4 hours"}),Object(E.jsx)("div",{className:"gauge-chart",children:Object(E.jsx)(V.a,{needleHeightRatio:.8,needleColor:"#9ba3a0",maxValue:10,segments:5,segmentColors:["#6AD72D","#AEE228","#ECDB23","#F6961E","#FF471A"],value:parseInt(s.kp4hour),width:250,height:200})})]})]}),Object(E.jsx)("h4",{children:"Probability"}),Object(E.jsxs)(v.a,{children:[Object(E.jsxs)(y.a,{children:[Object(E.jsx)("h5",{children:"Local"}),Object(E.jsxs)("label",{style:{color:j.colour},children:[j.value,"%"]})]}),Object(E.jsxs)(y.a,{children:[Object(E.jsx)("h5",{children:"High latitude"}),Object(E.jsxs)("h6",{children:["Active \xa0 \xa0\xa0",I[0],"%"]}),Object(E.jsxs)("h6",{children:["Minor \xa0\xa0\xa0\xa0",I[1],"%"]}),Object(E.jsxs)("h6",{children:["Severe \xa0\xa0\xa0",I[2],"%"]})]}),Object(E.jsxs)(y.a,{children:[Object(E.jsx)("h5",{children:"Middle latitude"}),Object(E.jsxs)("h6",{children:["Active \xa0 \xa0\xa0",M[0],"%"]}),Object(E.jsxs)("h6",{children:["Minor \xa0\xa0\xa0\xa0",M[1],"%"]}),Object(E.jsxs)("h6",{children:["Severe \xa0\xa0\xa0",M[2],"%"]})]})]}),Object(E.jsxs)("div",{className:"threedays_block",children:[Object(E.jsx)("h4",{children:"Three Day Kp Forecast"}),Object(E.jsxs)(v.a,{children:[Object(E.jsx)(y.a,{children:m.map((function(e){return Object(E.jsx)(G,{time:e},e.start)}))}),Object(E.jsx)(y.a,{children:w.map((function(e){return Object(E.jsx)(G,{time:e},e.start)}))}),Object(E.jsx)(y.a,{children:N.map((function(e){return Object(E.jsx)(G,{time:e},e.start)}))})]})]})]})})})),Q=n.a.memo((function(e){var t=e.position,c=Object(a.useState)(t),n=Object(o.a)(c,2),s=n[0],r=n[1],i=Object(a.useState)(""),l=Object(o.a)(i,2),j=l[0],d=l[1],v=Object(a.useRef)(null),y=Object(T.b)();console.log("cityname ===>",j);var w="da817481fc8d41388ba31bca5ab65c47",S=function(){var e=Object(b.a)(u.a.mark((function e(){var t,c,a,n,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("city===>",j.toLowerCase()),console.log("api ===>",w),e.prev=2,e.next=5,h.a.get("https://api.opencagedata.com/geocode/v1/json?q=".concat(j,"&key=").concat(w));case 5:t=e.sent,console.log("location ===>",t),c=t.data.results.find((function(e){return e.components.city.toLowerCase()===j.toLowerCase()})),a=c.geometry,n=a.lat,s=a.lng,r({lat:n,lng:s}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),alert("Can't find city at all!");case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(b.a)(u.a.mark((function e(){var t,c,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("http://api.openweathermap.org/geo/1.0/reverse?lat=".concat(s.lat,"&lon=").concat(s.lng,"&limit=1&appid=").concat("ac0c8a710f68473924a21043fd62cb93"));case 2:t=e.sent,c=Object(o.a)(t.data,1),a=c[0].name,d(a);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){A(),y(k("Forecast"))}),[s]),Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)("div",{className:"search-form",children:Object(E.jsxs)(m.a,{onSubmit:function(e){e.preventDefault(),console.log("wanted city name ==>",j),S(),v.current.value=""},style:{width:"300px"},children:[Object(E.jsxs)("div",{className:"search",children:[Object(E.jsx)(p.a,{children:Object(E.jsx)("b",{children:"Find Location"})}),Object(E.jsx)(O.a,{icon:x.a,className:"search-icon"}),Object(E.jsx)(f.a,{id:"search",name:"search",onChange:function(e){var t=e.target.value;d(t)},placeholder:j,innerRef:v})]}),Object(E.jsx)(g.a,{className:"search-button",children:"Search"})]})}),Object(E.jsx)(U,{location:s}),Object(E.jsx)(Z,{location:s})]})})),J=c(199),X=c(200),$=c(201),ee=c(213),te=c(202),ce=c(203),ae=c(57),ne=(c(167),c(191),c(192),{apiKey:"AIzaSyDRQbRSemOdnnlWWQor4C5V4SwdxpTlrCM",authDomain:"aurora-project-6c5e5.firebaseapp.com",projectId:"aurora-project-6c5e5",storageBucket:"aurora-project-6c5e5.appspot.com",messagingSenderId:"360372183808",appId:Object({NODE_ENV:"production",PUBLIC_URL:"/aurora-web",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyDRQbRSemOdnnlWWQor4C5V4SwdxpTlrCM",REACT_APP_FIREBASE_APP_ID:"1:360372183808:web:608b6bfab73f10f91509e5",REACT_APP_FIREBASE_AUTH_DOMAIN:"aurora-project-6c5e5.firebaseapp.com",REACT_APP_FIREBASE_MESSAGIN_ID:"360372183808",REACT_APP_FIREBASE_PROJECT_ID:"aurora-project-6c5e5",REACT_APP_FIREBASE_STORAGE_BUCKET:"aurora-project-6c5e5.appspot.com",REACT_APP_GOOGLE_API_KEY1:"AIzaSyCWAa-pA7y2aXaBqn6rEE7Pq6M7ZxKSi-M",REACT_APP_GOOGLE_API_KEY2:"AIzaSyC-OmYMmxHV4Y7_Nsq3wD6UylMOTwzQh-w",REACT_APP_OPENCAGE_API_KEY:"da817481fc8d41388ba31bca5ab65c47",REACT_APP_OPENWEATHER_API_KEY:"ac0c8a710f68473924a21043fd62cb93"}).REACT_APP_APP_ID});ae.a.initializeApp(ne);var se=ae.a,re=ae.a.auth(),oe=(ae.a.firestore(),ae.a.storage(),function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(""),r=Object(o.a)(s,2),i=r[0],l=r[1],j=Object(a.useState)(!0),d=Object(o.a)(j,2),h=d[0],O=d[1],x=Object(a.useState)(""),v=Object(o.a)(x,2),w=v[0],S=v[1],A=function(e){var t=e.target,c=t.name,a=t.value;"email"===c?n(a):"password"===c&&l(a)},C=function(){var e=Object(b.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!h){e.next=8;break}return e.next=5,re.createUserWithEmailAndPassword(c,i);case 5:a=e.sent,e.next=11;break;case 8:return e.next=10,re.signInWithEmailAndPassword(c,i);case 10:a=e.sent;case 11:console.log(a),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(1),console.error(e.t0),S(e.t0.message);case 18:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(b.a)(u.a.mark((function e(t){var c,a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(c=t.target.name)?a=new se.auth.GoogleAuthProvider:"facebook"===c&&(a=new se.auth.FacebookAuthProvider),e.prev=2,e.next=5,re.signInWithPopup(a);case 5:n=e.sent,console.log(n),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(2),console.error(e.t0),S(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(E.jsx)(E.Fragment,{children:Object(E.jsx)(y.a,{sm:"12",md:{size:4,offset:4},className:"login",children:Object(E.jsxs)(J.a,{children:[Object(E.jsx)(X.a,{id:"card-header",children:Object(E.jsx)("strong",{children:"Login"})}),Object(E.jsxs)($.a,{children:[Object(E.jsxs)(m.a,{onSubmit:C,children:[w?Object(E.jsx)(ee.a,{color:"danger",children:w}):"",Object(E.jsxs)(te.a,{children:[Object(E.jsx)(p.a,{for:"title",children:"Email"}),Object(E.jsx)(f.a,{type:"email",name:"email",id:"email",value:c,className:"form-control mb-2",required:!0,onChange:A})]}),Object(E.jsxs)(te.a,{children:[Object(E.jsx)(p.a,{for:"title",children:"Password"}),Object(E.jsx)(f.a,{type:"password",name:"password",id:"password",value:i,className:"form-control",required:!0,onChange:A})]}),Object(E.jsx)(g.a,{color:"success",block:!0,className:"mt-4",children:h?"Create Account":"Login"})]}),Object(E.jsx)("span",{onClick:function(){return O(!h)},children:h?"Sign In":"Create Account"})]}),Object(E.jsxs)(ce.a,{children:[Object(E.jsx)(g.a,{block:!0,name:"google",className:"mt-4",onClick:N,children:"Continue with Google"}),Object(E.jsx)(g.a,{block:!0,name:"facebook",className:"mb-4",onClick:N,children:"Continue with Facebook"})]})]})})})}),ie=c(205),le=c(69),je={styles:[{featureType:"all",elementType:"geometry",stylers:[{color:"#202c3e"}]},{featureType:"all",elementType:"labels.text.fill",stylers:[{gamma:.01},{lightness:20},{weight:"1.39"},{color:"#ffffff"}]},{featureType:"all",elementType:"labels.text.stroke",stylers:[{weight:"0.96"},{saturation:"9"},{visibility:"on"},{color:"#000000"}]},{featureType:"all",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"landscape",elementType:"geometry",stylers:[{lightness:30},{saturation:"9"},{color:"#29446b"}]},{featureType:"poi",elementType:"geometry",stylers:[{saturation:20}]},{featureType:"poi.park",elementType:"geometry",stylers:[{lightness:20},{saturation:-20}]},{featureType:"road",elementType:"geometry",stylers:[{lightness:10},{saturation:-30}]},{featureType:"road",elementType:"geometry.fill",stylers:[{color:"#193a55"}]},{featureType:"road",elementType:"geometry.stroke",stylers:[{saturation:25},{lightness:25},{weight:"0.01"}]},{featureType:"water",elementType:"all",stylers:[{lightness:-20}]}]},ue=function(e){var t=e.text,c=Object(a.useState)(!1),n=Object(o.a)(c,2),s=n[0],r=n[1],i=function(){return r(!s)};return Object(E.jsx)(E.Fragment,{children:Object(E.jsxs)("div",{onMouseEnter:i,onMouseLeave:i,children:[Object(E.jsx)(O.a,{color:"red",icon:x.b,size:"3x"}),s?Object(E.jsx)("span",{style:{color:"white"},children:t}):null]})})},be=function(e){var t=e.center,c=Object(a.useState)([]),n=Object(o.a)(c,2),s=n[0],r=n[1],i=Object(T.b)(),l=[],j=function(){var e=Object(b.a)(u.a.mark((function e(){var t,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("https://api.auroras.live/v1/?type=locations");case 2:for(t=e.sent,c=0;c<Object.keys(t.data).length-1;c++)l=[].concat(Object(_.a)(l),[t.data[c]]);r(l);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=s.map((function(e){return{id:e.id,lat:e.lat,lng:e.long,info:e.description}}));return console.log(d),Object(a.useEffect)((function(){j(),i(k("Best Locations"))}),[]),Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)("h3",{children:"Best Locations"}),Object(E.jsx)("div",{style:{height:"70vh",width:"100%",marginTop:"50px"},children:Object(E.jsx)(le.a,{bootstrapURLKeys:{key:"AIzaSyC-OmYMmxHV4Y7_Nsq3wD6UylMOTwzQh-w",libraries:["visualization"]},defaultCenter:t,defaultZoom:1,options:je,children:d.map((function(e){return Object(E.jsx)(ue,{lat:e.lat,lng:e.lng,text:e.info},e.id)}))})})]})},de=function(e){var t=e.center,c=Object(a.useState)([]),n=Object(o.a)(c,2),s=n[0],r=n[1],i=Object(T.b)(),l=function(){return Object(E.jsx)(O.a,{icon:x.a,size:"3x"})},j=function(){var e=Object(b.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("https://services.swpc.noaa.gov/json/ovation_aurora_latest.json ");case 2:t=e.sent,console.log(t),r(t.data.coordinates.map((function(e){var t=e[0];return e[0]=e[1],e[1]=t,[e[0],e[1],e[2]]})).filter((function(e){return(e[0]>1||e[0]<-1)&&e[2]>0})));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d={positions:s.map((function(e){return{lat:e[0],lng:e[1],weight:e[2]}})),options:{radius:40,opacity:.5}};return Object(a.useEffect)((function(){j(),i(k("Aurora Map"))}),[]),Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)("h3",{children:"Aurora Map"}),Object(E.jsx)("div",{style:{height:"70vh",width:"100%",marginTop:"50px"},children:Object(E.jsx)(le.a,{bootstrapURLKeys:{key:"AIzaSyCWAa-pA7y2aXaBqn6rEE7Pq6M7ZxKSi-M",libraries:["visualization"]},defaultCenter:t,defaultZoom:4,heatmap:d,options:je,children:Object(E.jsx)(l,{lat:t.lat,lng:t.lng})})})]})},he=function(){var e=Object(a.useState)("https://auroramax.phys.ucalgary.ca/recent/recent_720p.jpg?".concat((new Date).getTime())),t=Object(o.a)(e,2),c=t[0],n=t[1],s=Object(T.b)();console.log(c,"image");return Object(a.useEffect)((function(){return setInterval((function(){return function(){var e=(new Date).getTime(),t="https://auroramax.phys.ucalgary.ca/recent/recent_720p.jpg?".concat(e);n(t)}()}),1e4),s(k("AuroraMax Live")),function(){clearInterval()}}),[]),Object(E.jsx)(E.Fragment,{children:Object(E.jsxs)("div",{children:[Object(E.jsx)("h3",{children:"AuroraMax Live"}),Object(E.jsx)("div",{className:"aurora-live",style:{marginTop:"50px"},children:Object(E.jsx)("img",{alt:"",id:"aurora",src:c})})]})})},Oe=function(){var e=Object(T.c)((function(e){return e})).page;return Object(E.jsx)("div",{id:"page-header",className:"mb-3",children:Object(E.jsx)(v.a,{children:Object(E.jsx)(y.a,{md:"6",sm:"auto",className:"text-center m-auto",children:Object(E.jsx)("h1",{children:e})})})})},xe=c(37),me=c(204),pe=c(206),fe=c(207),ge=c(208),ve=c(209),ye=c(210),we=c(211),Se=c(214),Ae=c(215),Ee=c(212),Ce=function(e){var t=e.isLoggedIn,c=Object(a.useState)(!1),n=Object(o.a)(c,2),s=n[0],r=n[1],i=Object(a.useState)(!1),j=Object(o.a)(i,2),u=j[0],b=j[1],d=Object(l.f)();console.log(t,"\ub124\ube44\uac8c\uc774\uc158\uc5d0\uc11c");var h=function(){return b((function(e){return!e}))};return Object(E.jsx)(me.a,{color:"dark",dark:!0,expand:"lg",className:"sticky-top",children:Object(E.jsxs)(ie.a,{children:[Object(E.jsx)(xe.b,{to:"/",className:"text-white text-decoration-none blog-name",children:Object(E.jsx)("h2",{style:{fontWeight:"bold"},children:"Aurora World"})}),Object(E.jsx)(pe.a,{onClick:function(){r(!s)}}),Object(E.jsx)(fe.a,{isOpen:s,navbar:!0,children:Object(E.jsxs)(ge.a,{className:"ml-auto d-felx justify-content-around",navbar:!0,style:{fontWeight:"bold"},children:[Object(E.jsx)(ve.a,{children:Object(E.jsx)(m.a,{className:"col pr-3 p-1",children:Object(E.jsx)(ye.a,{children:Object(E.jsx)(xe.b,{to:"/",className:"text-decoration-none",children:"Forecast"})})})}),Object(E.jsx)(ve.a,{children:Object(E.jsx)(m.a,{className:"col pr-3 p-1",children:Object(E.jsx)(ye.a,{children:Object(E.jsx)(xe.b,{to:"/bestlocations",className:"text-decoration-none",children:"Best Locations"})})})}),Object(E.jsx)(ve.a,{children:Object(E.jsx)(m.a,{className:"col pr-3 p-1",children:Object(E.jsx)(ye.a,{children:Object(E.jsx)(xe.b,{to:"/auroramap",className:"text-decoration-none",children:"Aurora Map"})})})}),Object(E.jsx)(ve.a,{children:Object(E.jsx)(m.a,{className:"col pr-3 p-1",children:Object(E.jsx)("div",{className:"drop-menu",children:Object(E.jsxs)(we.a,{nav:!0,isOpen:u,children:[Object(E.jsx)(Se.a,{nav:!0,caret:!0,onMouseEnter:h,onMouseLeave:h,children:"Observatory"}),Object(E.jsxs)(Ae.a,{onMouseEnter:h,onMouseLeave:h,children:[Object(E.jsx)(Ee.a,{children:Object(E.jsx)(xe.b,{to:"/live",className:"text-decoration-none",children:"AuroraMax Live"})}),Object(E.jsx)(Ee.a,{children:Object(E.jsx)(xe.b,{to:"/replay",className:"text-decoration-none",children:"AuroraMax Replay"})})]})]})})})}),t?Object(E.jsx)(ve.a,{children:Object(E.jsx)(m.a,{className:"col p-1",children:Object(E.jsx)(ye.a,{children:Object(E.jsx)(xe.b,{onClick:function(){re.signOut(),d.push("/")},to:"#",className:"text-decoration-none",children:"Logout"})})})}):""]})})]})})},Ne=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(""),r=Object(o.a)(s,2),i=r[0],l=r[1],j=Object(T.b)(),u=function(e,t,c){var a="https://data.phys.ucalgary.ca/sort_by_project/AuroraMAX/rt-movies/mp4/".concat(e,"/").concat(t,"/").concat(c,"/auroramaxHD_").concat(e).concat(t).concat(c,"_720p.mp4");n(a)};return Object(a.useEffect)((function(){!function(){var e=S()().format("YYYY-MM-DD HH:mm:ss"),t=e.substring(0,4),c=e.substring(5,7),a=e.substring(8,10)-1;a<10&&(a="0".concat(a)),"00"===a&&(a=["01","03","05","07","08","10","12"].some((function(e){return e===c}))?"31":"02"===c?"28":"30");var s="".concat(t,"-").concat(c,"-").concat(a);console.log(s),l(s),console.log(i,"lastday");var r="https://data.phys.ucalgary.ca/sort_by_project/AuroraMAX/rt-movies/mp4/".concat(t,"/").concat(c,"/").concat(a,"/auroramaxHD_").concat(t).concat(c).concat(a,"_720p.mp4");n(r),"05"!==c&&"06"!==c&&"07"!==c&&"08"!==c||alert("No videos in May, June, July, early August")}(),j(k("AuroraMax Replay"))}),[]),Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)("h3",{children:"AuroraMax Replay"}),Object(E.jsxs)("form",{onChange:function(e){e.preventDefault();var t=e.target.value,c=t.substring(0,4),a=t.substring(5,7),n=t.substring(8,10);u(c,a,n)},children:[Object(E.jsx)("label",{style:{fontWeight:"bold",fontSize:"20px",marginTop:"30px"},children:"Choose a date: \xa0"}),Object(E.jsx)("input",{type:"date",name:"date",min:"2012-09-10",max:i})]}),Object(E.jsx)("div",{className:"video-detail col-md-12 mt-5 pb-5",children:Object(E.jsx)("div",{className:"embed-responsive embed-responsive-16by9",children:Object(E.jsx)("iframe",{className:"embed-responsive-item",id:"video",src:c})})})]})},De=function(e){var t=e.isLoggedIn,c=e.location,a=function(e,t){return function(c){return Object(E.jsx)(e,Object(i.a)(Object(i.a)({},t),c))}};return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(Ce,{isLoggedIn:t}),Object(E.jsx)(Oe,{}),Object(E.jsx)(ie.a,{id:"main-body",children:Object(E.jsx)(l.c,{children:t?Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(l.a,{path:"/",exact:!0,component:a(Q,{position:c})}),Object(E.jsx)(l.a,{path:"/bestlocations",exact:!0,component:a(be,{center:c})}),Object(E.jsx)(l.a,{path:"/auroramap",exact:!0,component:a(de,{center:c})}),Object(E.jsx)(l.a,{path:"/live",exact:!0,component:he}),Object(E.jsx)(l.a,{path:"/replay",exact:!0,component:Ne})]}):Object(E.jsx)(E.Fragment,{children:Object(E.jsx)(l.a,{path:"*",exact:!0,component:oe})})})})]})},_e=function(){return Object(E.jsx)("div",{id:"main-footer",className:"text-center p-4",children:Object(E.jsx)(v.a,{children:Object(E.jsxs)(y.a,{children:[Object(E.jsxs)("p",{children:["Copyright \xa9 ",Object(E.jsx)("span",{children:(new Date).getFullYear()})," Aurora World"]}),Object(E.jsx)("h6",{children:"Powered by Auroras.live, AuroraMax, OpenWeather"})]})})})},Te=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(!1),r=Object(o.a)(s,2),i=r[0],l=r[1],j=Object(a.useState)({lat:"",lng:""}),u=Object(o.a)(j,2),b=u[0],d=u[1];return Object(a.useEffect)((function(){re.onAuthStateChanged((function(e){console.log(e),l(!!e),n(!0)})),function(){try{navigator.geolocation.getCurrentPosition((function(e){var t=e.coords,c=t.latitude,a=t.longitude;d({lat:c,lng:a})}))}catch(e){alert("Can't find your location!")}}()}),[]),Object(E.jsx)(E.Fragment,{children:Object(E.jsxs)("div",{style:{backgroundColor:"#020101"},children:[c?Object(E.jsx)(De,{isLoggedIn:i,location:b}):"Initializing....",Object(E.jsx)(_e,{})]})})};r.a.render(Object(E.jsx)(T.a,{store:I,children:Object(E.jsx)(xe.a,{children:Object(E.jsx)(Te,{})})}),document.getElementById("root"))}},[[189,1,2]]]);
//# sourceMappingURL=main.630fb4e0.chunk.js.map