(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ml="175",nu=0,tc=1,iu=2,Hh=1,Gh=2,On=3,An=0,zt=1,cn=2,Wn=0,ns=1,nc=2,ic=3,sc=4,su=5,wi=100,ru=101,au=102,ou=103,lu=104,cu=200,hu=201,du=202,uu=203,yo=204,vo=205,fu=206,pu=207,mu=208,gu=209,_u=210,xu=211,yu=212,vu=213,Mu=214,Mo=0,bo=1,wo=2,rs=3,So=4,To=5,Eo=6,Ao=7,Vh=0,bu=1,wu=2,Xn=0,Wh=1,Xh=2,jh=3,Yh=4,Kh=5,qh=6,$h=7,rc="attached",Su="detached",Jh=300,as=301,os=302,Co=303,Ro=304,oa=306,oi=1e3,ri=1001,ta=1002,Ut=1003,Zh=1004,Ds=1005,tn=1006,Xr=1007,Gn=1008,Yn=1009,Qh=1010,ed=1011,Vs=1012,gl=1013,Ai=1014,yn=1015,ps=1016,_l=1017,xl=1018,Ws=1020,td=35902,nd=1021,id=1022,dn=1023,sd=1024,rd=1025,Xs=1026,js=1027,yl=1028,vl=1029,ad=1030,Ml=1031,bl=1033,jr=33776,Yr=33777,Kr=33778,qr=33779,Io=35840,Po=35841,Lo=35842,Do=35843,No=36196,ko=37492,Uo=37496,Fo=37808,Bo=37809,Oo=37810,zo=37811,Ho=37812,Go=37813,Vo=37814,Wo=37815,Xo=37816,jo=37817,Yo=37818,Ko=37819,qo=37820,$o=37821,$r=36492,Jo=36494,Zo=36495,od=36283,Qo=36284,el=36285,tl=36286,ld=2200,cd=2201,Tu=2202,Ys=2300,Ks=2301,pa=2302,Ji=2400,Zi=2401,na=2402,wl=2500,Eu=2501,Au=0,hd=1,nl=2,Cu=3200,Ru=3201,Sl=0,Iu=1,si="",mt="srgb",Yt="srgb-linear",ia="linear",ct="srgb",Ii=7680,ac=519,Pu=512,Lu=513,Du=514,dd=515,Nu=516,ku=517,Uu=518,Fu=519,il=35044,oc="300 es",Vn=2e3,sa=2001;class Ci{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let lc=1234567;const Fs=Math.PI/180,ls=180/Math.PI;function vn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Bt[s&255]+Bt[s>>8&255]+Bt[s>>16&255]+Bt[s>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[t&63|128]+Bt[t>>8&255]+"-"+Bt[t>>16&255]+Bt[t>>24&255]+Bt[n&255]+Bt[n>>8&255]+Bt[n>>16&255]+Bt[n>>24&255]).toLowerCase()}function Xe(s,e,t){return Math.max(e,Math.min(t,s))}function Tl(s,e){return(s%e+e)%e}function Bu(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Ou(s,e,t){return s!==e?(t-s)/(e-s):0}function Bs(s,e,t){return(1-t)*s+t*e}function zu(s,e,t,n){return Bs(s,e,1-Math.exp(-t*n))}function Hu(s,e=1){return e-Math.abs(Tl(s,e*2)-e)}function Gu(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Vu(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Wu(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Xu(s,e){return s+Math.random()*(e-s)}function ju(s){return s*(.5-Math.random())}function Yu(s){s!==void 0&&(lc=s);let e=lc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ku(s){return s*Fs}function qu(s){return s*ls}function $u(s){return(s&s-1)===0&&s!==0}function Ju(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Zu(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Qu(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),d=r((e-n)/2),u=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":s.set(o*h,l*d,l*u,o*c);break;case"YZY":s.set(l*u,o*h,l*d,o*c);break;case"ZXZ":s.set(l*d,l*u,o*h,o*c);break;case"XZX":s.set(o*h,l*g,l*f,o*c);break;case"YXY":s.set(l*f,o*h,l*g,o*c);break;case"ZYZ":s.set(l*g,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function xn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ht(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const $t={DEG2RAD:Fs,RAD2DEG:ls,generateUUID:vn,clamp:Xe,euclideanModulo:Tl,mapLinear:Bu,inverseLerp:Ou,lerp:Bs,damp:zu,pingpong:Hu,smoothstep:Gu,smootherstep:Vu,randInt:Wu,randFloat:Xu,randFloatSpread:ju,seededRandom:Yu,degToRad:Ku,radToDeg:qu,isPowerOfTwo:$u,ceilPowerOfTwo:Ju,floorPowerOfTwo:Zu,setQuaternionFromProperEuler:Qu,normalize:ht,denormalize:xn};class Ce{constructor(e=0,t=0){Ce.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Xe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ze{constructor(e,t,n,i,r,a,o,l,c){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],y=i[1],b=i[4],x=i[7],R=i[2],A=i[5],E=i[8];return r[0]=a*_+o*y+l*R,r[3]=a*m+o*b+l*A,r[6]=a*p+o*x+l*E,r[1]=c*_+h*y+d*R,r[4]=c*m+h*b+d*A,r[7]=c*p+h*x+d*E,r[2]=u*_+f*y+g*R,r[5]=u*m+f*b+g*A,r[8]=u*p+f*x+g*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,g=t*d+n*u+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(i*c-h*n)*_,e[2]=(o*n-i*a)*_,e[3]=u*_,e[4]=(h*t-i*l)*_,e[5]=(i*r-o*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ma.makeScale(e,t)),this}rotate(e){return this.premultiply(ma.makeRotation(-e)),this}translate(e,t){return this.premultiply(ma.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ma=new ze;function ud(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function qs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function ef(){const s=qs("canvas");return s.style.display="block",s}const cc={};function Jr(s){s in cc||(cc[s]=!0,console.warn(s))}function tf(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function nf(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function sf(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const hc=new ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),dc=new ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function rf(){const s={enabled:!0,workingColorSpace:Yt,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ct&&(i.r=jn(i.r),i.g=jn(i.g),i.b=jn(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ct&&(i.r=is(i.r),i.g=is(i.g),i.b=is(i.b))),i},fromWorkingColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},toWorkingColorSpace:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===si?ia:this.spaces[i].transfer},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Yt]:{primaries:e,whitePoint:n,transfer:ia,toXYZ:hc,fromXYZ:dc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:mt},outputColorSpaceConfig:{drawingBufferColorSpace:mt}},[mt]:{primaries:e,whitePoint:n,transfer:ct,toXYZ:hc,fromXYZ:dc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:mt}}}),s}const Ye=rf();function jn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function is(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Pi;class af{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Pi===void 0&&(Pi=qs("canvas")),Pi.width=e.width,Pi.height=e.height;const i=Pi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Pi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=qs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=jn(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(jn(t[n]/255)*255):t[n]=jn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let of=0;class El{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:of++}),this.uuid=vn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(ga(i[a].image)):r.push(ga(i[a]))}else r=ga(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function ga(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?af.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let lf=0;class Et extends Ci{constructor(e=Et.DEFAULT_IMAGE,t=Et.DEFAULT_MAPPING,n=ri,i=ri,r=tn,a=Gn,o=dn,l=Yn,c=Et.DEFAULT_ANISOTROPY,h=si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lf++}),this.uuid=vn(),this.name="",this.source=new El(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ce(0,0),this.repeat=new Ce(1,1),this.center=new Ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Jh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case oi:e.x=e.x-Math.floor(e.x);break;case ri:e.x=e.x<0?0:1;break;case ta:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case oi:e.y=e.y-Math.floor(e.y);break;case ri:e.y=e.y<0?0:1;break;case ta:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Et.DEFAULT_IMAGE=null;Et.DEFAULT_MAPPING=Jh;Et.DEFAULT_ANISOTROPY=1;class nt{constructor(e=0,t=0,n=0,i=1){nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,x=(f+1)/2,R=(p+1)/2,A=(h+u)/4,E=(d+_)/4,I=(g+m)/4;return b>x&&b>R?b<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(b),i=A/n,r=E/n):x>R?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=A/i,r=I/i):R<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(R),n=E/r,i=I/r),this.set(n,i,r,t),this}let y=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(d-_)/y,this.z=(u-h)/y,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this.w=Xe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this.w=Xe(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class cf extends Ci{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new nt(0,0,e,t),this.scissorTest=!1,this.viewport=new nt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Et(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new El(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class li extends cf{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class fd extends Et{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class hf extends Et{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3];const u=r[a+0],f=r[a+1],g=r[a+2],_=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=u,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(d!==_||l!==u||c!==f||h!==g){let m=1-o;const p=l*u+c*f+h*g+d*_,y=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){const R=Math.sqrt(b),A=Math.atan2(R,p*y);m=Math.sin(m*A)/R,o=Math.sin(o*A)/R}const x=o*y;if(l=l*m+u*x,c=c*m+f*x,h=h*m+g*x,d=d*m+_*x,m===1-o){const R=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=R,c*=R,h*=R,d*=R}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*d+l*f-c*u,e[t+1]=l*g+h*u+c*d-o*f,e[t+2]=c*g+h*f+o*u-l*d,e[t+3]=h*g-o*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),d=o(r/2),u=l(n/2),f=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+o+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-i)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(a-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xe(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=a*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class T{constructor(e=0,t=0,n=0){T.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(uc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(uc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-r*i),d=2*(r*n-a*t);return this.x=t+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=i+l*d+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return _a.copy(this).projectOnVector(e),this.sub(_a)}reflect(e){return this.sub(_a.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Xe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _a=new T,uc=new Mn;class bn{constructor(e=new T(1/0,1/0,1/0),t=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,mn):mn.fromBufferAttribute(r,a),mn.applyMatrix4(e.matrixWorld),this.expandByPoint(mn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),or.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),or.copy(n.boundingBox)),or.applyMatrix4(e.matrixWorld),this.union(or)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,mn),mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vs),lr.subVectors(this.max,vs),Li.subVectors(e.a,vs),Di.subVectors(e.b,vs),Ni.subVectors(e.c,vs),Kn.subVectors(Di,Li),qn.subVectors(Ni,Di),fi.subVectors(Li,Ni);let t=[0,-Kn.z,Kn.y,0,-qn.z,qn.y,0,-fi.z,fi.y,Kn.z,0,-Kn.x,qn.z,0,-qn.x,fi.z,0,-fi.x,-Kn.y,Kn.x,0,-qn.y,qn.x,0,-fi.y,fi.x,0];return!xa(t,Li,Di,Ni,lr)||(t=[1,0,0,0,1,0,0,0,1],!xa(t,Li,Di,Ni,lr))?!1:(cr.crossVectors(Kn,qn),t=[cr.x,cr.y,cr.z],xa(t,Li,Di,Ni,lr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Dn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Dn=[new T,new T,new T,new T,new T,new T,new T,new T],mn=new T,or=new bn,Li=new T,Di=new T,Ni=new T,Kn=new T,qn=new T,fi=new T,vs=new T,lr=new T,cr=new T,pi=new T;function xa(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){pi.fromArray(s,r);const o=i.x*Math.abs(pi.x)+i.y*Math.abs(pi.y)+i.z*Math.abs(pi.z),l=e.dot(pi),c=t.dot(pi),h=n.dot(pi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const df=new bn,Ms=new T,ya=new T;class In{constructor(e=new T,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):df.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ms.subVectors(e,this.center);const t=Ms.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ms,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ya.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ms.copy(e.center).add(ya)),this.expandByPoint(Ms.copy(e.center).sub(ya))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Nn=new T,va=new T,hr=new T,$n=new T,Ma=new T,dr=new T,ba=new T;class Zs{constructor(e=new T,t=new T(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Nn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Nn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Nn.copy(this.origin).addScaledVector(this.direction,t),Nn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){va.copy(e).add(t).multiplyScalar(.5),hr.copy(t).sub(e).normalize(),$n.copy(this.origin).sub(va);const r=e.distanceTo(t)*.5,a=-this.direction.dot(hr),o=$n.dot(this.direction),l=-$n.dot(hr),c=$n.lengthSq(),h=Math.abs(1-a*a);let d,u,f,g;if(h>0)if(d=a*l-o,u=a*o-l,g=r*h,d>=0)if(u>=-g)if(u<=g){const _=1/h;d*=_,u*=_,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(va).addScaledVector(hr,u),f}intersectSphere(e,t){Nn.subVectors(e.center,this.origin);const n=Nn.dot(this.direction),i=Nn.dot(Nn)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,i=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,i=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Nn)!==null}intersectTriangle(e,t,n,i,r){Ma.subVectors(t,e),dr.subVectors(n,e),ba.crossVectors(Ma,dr);let a=this.direction.dot(ba),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;$n.subVectors(this.origin,e);const l=o*this.direction.dot(dr.crossVectors($n,dr));if(l<0)return null;const c=o*this.direction.dot(Ma.cross($n));if(c<0||l+c>a)return null;const h=-o*$n.dot(ba);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Fe{constructor(e,t,n,i,r,a,o,l,c,h,d,u,f,g,_,m){Fe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,h,d,u,f,g,_,m)}set(e,t,n,i,r,a,o,l,c,h,d,u,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Fe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/ki.setFromMatrixColumn(e,0).length(),r=1/ki.setFromMatrixColumn(e,1).length(),a=1/ki.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const u=a*h,f=a*d,g=o*h,_=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=u-_*c,t[9]=-o*l,t[2]=_-u*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){const u=l*h,f=l*d,g=c*h,_=c*d;t[0]=u+_*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=_+u*o,t[10]=a*l}else if(e.order==="ZXY"){const u=l*h,f=l*d,g=c*h,_=c*d;t[0]=u-_*o,t[4]=-a*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=_-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const u=a*h,f=a*d,g=o*h,_=o*d;t[0]=l*h,t[4]=g*c-f,t[8]=u*c+_,t[1]=l*d,t[5]=_*c+u,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const u=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=_-u*d,t[8]=g*d+f,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*d+g,t[10]=u-_*d}else if(e.order==="XZY"){const u=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+_,t[5]=a*h,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*h,t[10]=_*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(uf,e,ff)}lookAt(e,t,n){const i=this.elements;return Zt.subVectors(e,t),Zt.lengthSq()===0&&(Zt.z=1),Zt.normalize(),Jn.crossVectors(n,Zt),Jn.lengthSq()===0&&(Math.abs(n.z)===1?Zt.x+=1e-4:Zt.z+=1e-4,Zt.normalize(),Jn.crossVectors(n,Zt)),Jn.normalize(),ur.crossVectors(Zt,Jn),i[0]=Jn.x,i[4]=ur.x,i[8]=Zt.x,i[1]=Jn.y,i[5]=ur.y,i[9]=Zt.y,i[2]=Jn.z,i[6]=ur.z,i[10]=Zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],y=n[3],b=n[7],x=n[11],R=n[15],A=i[0],E=i[4],I=i[8],w=i[12],v=i[1],P=i[5],F=i[9],O=i[13],j=i[2],W=i[6],V=i[10],q=i[14],H=i[3],re=i[7],pe=i[11],Se=i[15];return r[0]=a*A+o*v+l*j+c*H,r[4]=a*E+o*P+l*W+c*re,r[8]=a*I+o*F+l*V+c*pe,r[12]=a*w+o*O+l*q+c*Se,r[1]=h*A+d*v+u*j+f*H,r[5]=h*E+d*P+u*W+f*re,r[9]=h*I+d*F+u*V+f*pe,r[13]=h*w+d*O+u*q+f*Se,r[2]=g*A+_*v+m*j+p*H,r[6]=g*E+_*P+m*W+p*re,r[10]=g*I+_*F+m*V+p*pe,r[14]=g*w+_*O+m*q+p*Se,r[3]=y*A+b*v+x*j+R*H,r[7]=y*E+b*P+x*W+R*re,r[11]=y*I+b*F+x*V+R*pe,r[15]=y*w+b*O+x*q+R*Se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*l*d-i*c*d-r*o*u+n*c*u+i*o*f-n*l*f)+_*(+t*l*f-t*c*u+r*a*u-i*a*f+i*c*h-r*l*h)+m*(+t*c*d-t*o*f-r*a*d+n*a*f+r*o*h-n*c*h)+p*(-i*o*h-t*l*d+t*o*u+i*a*d-n*a*u+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],y=d*m*c-_*u*c+_*l*f-o*m*f-d*l*p+o*u*p,b=g*u*c-h*m*c-g*l*f+a*m*f+h*l*p-a*u*p,x=h*_*c-g*d*c+g*o*f-a*_*f-h*o*p+a*d*p,R=g*d*l-h*_*l-g*o*u+a*_*u+h*o*m-a*d*m,A=t*y+n*b+i*x+r*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/A;return e[0]=y*E,e[1]=(_*u*r-d*m*r-_*i*f+n*m*f+d*i*p-n*u*p)*E,e[2]=(o*m*r-_*l*r+_*i*c-n*m*c-o*i*p+n*l*p)*E,e[3]=(d*l*r-o*u*r-d*i*c+n*u*c+o*i*f-n*l*f)*E,e[4]=b*E,e[5]=(h*m*r-g*u*r+g*i*f-t*m*f-h*i*p+t*u*p)*E,e[6]=(g*l*r-a*m*r-g*i*c+t*m*c+a*i*p-t*l*p)*E,e[7]=(a*u*r-h*l*r+h*i*c-t*u*c-a*i*f+t*l*f)*E,e[8]=x*E,e[9]=(g*d*r-h*_*r-g*n*f+t*_*f+h*n*p-t*d*p)*E,e[10]=(a*_*r-g*o*r+g*n*c-t*_*c-a*n*p+t*o*p)*E,e[11]=(h*o*r-a*d*r-h*n*c+t*d*c+a*n*f-t*o*f)*E,e[12]=R*E,e[13]=(h*_*i-g*d*i+g*n*u-t*_*u-h*n*m+t*d*m)*E,e[14]=(g*o*i-a*_*i-g*n*l+t*_*l+a*n*m-t*o*m)*E,e[15]=(a*d*i-h*o*i+h*n*l-t*d*l-a*n*u+t*o*u)*E,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,g=r*d,_=a*h,m=a*d,p=o*d,y=l*c,b=l*h,x=l*d,R=n.x,A=n.y,E=n.z;return i[0]=(1-(_+p))*R,i[1]=(f+x)*R,i[2]=(g-b)*R,i[3]=0,i[4]=(f-x)*A,i[5]=(1-(u+p))*A,i[6]=(m+y)*A,i[7]=0,i[8]=(g+b)*E,i[9]=(m-y)*E,i[10]=(1-(u+_))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=ki.set(i[0],i[1],i[2]).length();const a=ki.set(i[4],i[5],i[6]).length(),o=ki.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],gn.copy(this);const c=1/r,h=1/a,d=1/o;return gn.elements[0]*=c,gn.elements[1]*=c,gn.elements[2]*=c,gn.elements[4]*=h,gn.elements[5]*=h,gn.elements[6]*=h,gn.elements[8]*=d,gn.elements[9]*=d,gn.elements[10]*=d,t.setFromRotationMatrix(gn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=Vn){const l=this.elements,c=2*r/(t-e),h=2*r/(n-i),d=(t+e)/(t-e),u=(n+i)/(n-i);let f,g;if(o===Vn)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===sa)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=Vn){const l=this.elements,c=1/(t-e),h=1/(n-i),d=1/(a-r),u=(t+e)*c,f=(n+i)*h;let g,_;if(o===Vn)g=(a+r)*d,_=-2*d;else if(o===sa)g=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ki=new T,gn=new Fe,uf=new T(0,0,0),ff=new T(1,1,1),Jn=new T,ur=new T,Zt=new T,fc=new Fe,pc=new Mn;class Cn{constructor(e=0,t=0,n=0,i=Cn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Xe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Xe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return fc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return pc.setFromEuler(this),this.setFromQuaternion(pc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Cn.DEFAULT_ORDER="XYZ";class Al{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let pf=0;const mc=new T,Ui=new Mn,kn=new Fe,fr=new T,bs=new T,mf=new T,gf=new Mn,gc=new T(1,0,0),_c=new T(0,1,0),xc=new T(0,0,1),yc={type:"added"},_f={type:"removed"},Fi={type:"childadded",child:null},wa={type:"childremoved",child:null};class at extends Ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pf++}),this.uuid=vn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=at.DEFAULT_UP.clone();const e=new T,t=new Cn,n=new Mn,i=new T(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Fe},normalMatrix:{value:new ze}}),this.matrix=new Fe,this.matrixWorld=new Fe,this.matrixAutoUpdate=at.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=at.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Al,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ui.setFromAxisAngle(e,t),this.quaternion.multiply(Ui),this}rotateOnWorldAxis(e,t){return Ui.setFromAxisAngle(e,t),this.quaternion.premultiply(Ui),this}rotateX(e){return this.rotateOnAxis(gc,e)}rotateY(e){return this.rotateOnAxis(_c,e)}rotateZ(e){return this.rotateOnAxis(xc,e)}translateOnAxis(e,t){return mc.copy(e).applyQuaternion(this.quaternion),this.position.add(mc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(gc,e)}translateY(e){return this.translateOnAxis(_c,e)}translateZ(e){return this.translateOnAxis(xc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(kn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?fr.copy(e):fr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),bs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?kn.lookAt(bs,fr,this.up):kn.lookAt(fr,bs,this.up),this.quaternion.setFromRotationMatrix(kn),i&&(kn.extractRotation(i.matrixWorld),Ui.setFromRotationMatrix(kn),this.quaternion.premultiply(Ui.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(yc),Fi.child=e,this.dispatchEvent(Fi),Fi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_f),wa.child=e,this.dispatchEvent(wa),wa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(kn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(yc),Fi.child=e,this.dispatchEvent(Fi),Fi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bs,e,mf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bs,gf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}at.DEFAULT_UP=new T(0,1,0);at.DEFAULT_MATRIX_AUTO_UPDATE=!0;at.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _n=new T,Un=new T,Sa=new T,Fn=new T,Bi=new T,Oi=new T,vc=new T,Ta=new T,Ea=new T,Aa=new T,Ca=new nt,Ra=new nt,Ia=new nt;class hn{constructor(e=new T,t=new T,n=new T){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),_n.subVectors(e,t),i.cross(_n);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){_n.subVectors(i,t),Un.subVectors(n,t),Sa.subVectors(e,t);const a=_n.dot(_n),o=_n.dot(Un),l=_n.dot(Sa),c=Un.dot(Un),h=Un.dot(Sa),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Fn)===null?!1:Fn.x>=0&&Fn.y>=0&&Fn.x+Fn.y<=1}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,Fn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Fn.x),l.addScaledVector(a,Fn.y),l.addScaledVector(o,Fn.z),l)}static getInterpolatedAttribute(e,t,n,i,r,a){return Ca.setScalar(0),Ra.setScalar(0),Ia.setScalar(0),Ca.fromBufferAttribute(e,t),Ra.fromBufferAttribute(e,n),Ia.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Ca,r.x),a.addScaledVector(Ra,r.y),a.addScaledVector(Ia,r.z),a}static isFrontFacing(e,t,n,i){return _n.subVectors(n,t),Un.subVectors(e,t),_n.cross(Un).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _n.subVectors(this.c,this.b),Un.subVectors(this.a,this.b),_n.cross(Un).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return hn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return hn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return hn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return hn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return hn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;Bi.subVectors(i,n),Oi.subVectors(r,n),Ta.subVectors(e,n);const l=Bi.dot(Ta),c=Oi.dot(Ta);if(l<=0&&c<=0)return t.copy(n);Ea.subVectors(e,i);const h=Bi.dot(Ea),d=Oi.dot(Ea);if(h>=0&&d<=h)return t.copy(i);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Bi,a);Aa.subVectors(e,r);const f=Bi.dot(Aa),g=Oi.dot(Aa);if(g>=0&&f<=g)return t.copy(r);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Oi,o);const m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return vc.subVectors(r,i),o=(d-h)/(d-h+(f-g)),t.copy(i).addScaledVector(vc,o);const p=1/(m+_+u);return a=_*p,o=u*p,t.copy(n).addScaledVector(Bi,a).addScaledVector(Oi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const pd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zn={h:0,s:0,l:0},pr={h:0,s:0,l:0};function Pa(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class ge{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=mt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Ye.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ye.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Ye.workingColorSpace){if(e=Tl(e,1),t=Xe(t,0,1),n=Xe(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Pa(a,r,e+1/3),this.g=Pa(a,r,e),this.b=Pa(a,r,e-1/3)}return Ye.toWorkingColorSpace(this,i),this}setStyle(e,t=mt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=mt){const n=pd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=jn(e.r),this.g=jn(e.g),this.b=jn(e.b),this}copyLinearToSRGB(e){return this.r=is(e.r),this.g=is(e.g),this.b=is(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mt){return Ye.fromWorkingColorSpace(Ot.copy(this),e),Math.round(Xe(Ot.r*255,0,255))*65536+Math.round(Xe(Ot.g*255,0,255))*256+Math.round(Xe(Ot.b*255,0,255))}getHexString(e=mt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ye.workingColorSpace){Ye.fromWorkingColorSpace(Ot.copy(this),t);const n=Ot.r,i=Ot.g,r=Ot.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ye.workingColorSpace){return Ye.fromWorkingColorSpace(Ot.copy(this),t),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e=mt){Ye.fromWorkingColorSpace(Ot.copy(this),e);const t=Ot.r,n=Ot.g,i=Ot.b;return e!==mt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Zn),this.setHSL(Zn.h+e,Zn.s+t,Zn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Zn),e.getHSL(pr);const n=Bs(Zn.h,pr.h,t),i=Bs(Zn.s,pr.s,t),r=Bs(Zn.l,pr.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ot=new ge;ge.NAMES=pd;let xf=0;class un extends Ci{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xf++}),this.uuid=vn(),this.name="",this.type="Material",this.blending=ns,this.side=An,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yo,this.blendDst=vo,this.blendEquation=wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ge(0,0,0),this.blendAlpha=0,this.depthFunc=rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ac,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ii,this.stencilZFail=Ii,this.stencilZPass=Ii,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ns&&(n.blending=this.blending),this.side!==An&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==yo&&(n.blendSrc=this.blendSrc),this.blendDst!==vo&&(n.blendDst=this.blendDst),this.blendEquation!==wi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==rs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ac&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ii&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ii&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ii&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class dt extends un{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.combine=Vh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wt=new T,mr=new Ce;let yf=0;class jt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:yf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=il,this.updateRanges=[],this.gpuType=yn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)mr.fromBufferAttribute(this,t),mr.applyMatrix3(e),this.setXY(t,mr.x,mr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=xn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ht(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=xn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=xn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=xn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=xn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),i=ht(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),i=ht(i,this.array),r=ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==il&&(e.usage=this.usage),e}}class md extends jt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class gd extends jt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ut extends jt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let vf=0;const on=new Fe,La=new at,zi=new T,Qt=new bn,ws=new bn,Pt=new T;class It extends Ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vf++}),this.uuid=vn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ud(e)?gd:md)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ze().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return on.makeRotationFromQuaternion(e),this.applyMatrix4(on),this}rotateX(e){return on.makeRotationX(e),this.applyMatrix4(on),this}rotateY(e){return on.makeRotationY(e),this.applyMatrix4(on),this}rotateZ(e){return on.makeRotationZ(e),this.applyMatrix4(on),this}translate(e,t,n){return on.makeTranslation(e,t,n),this.applyMatrix4(on),this}scale(e,t,n){return on.makeScale(e,t,n),this.applyMatrix4(on),this}lookAt(e){return La.lookAt(e),La.updateMatrix(),this.applyMatrix4(La.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zi).negate(),this.translate(zi.x,zi.y,zi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ut(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Qt.setFromBufferAttribute(r),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,Qt.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,Qt.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(Qt.min),this.boundingBox.expandByPoint(Qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new In);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new T,1/0);return}if(e){const n=this.boundingSphere.center;if(Qt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];ws.setFromBufferAttribute(o),this.morphTargetsRelative?(Pt.addVectors(Qt.min,ws.min),Qt.expandByPoint(Pt),Pt.addVectors(Qt.max,ws.max),Qt.expandByPoint(Pt)):(Qt.expandByPoint(ws.min),Qt.expandByPoint(ws.max))}Qt.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Pt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Pt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Pt.fromBufferAttribute(o,c),l&&(zi.fromBufferAttribute(e,c),Pt.add(zi)),i=Math.max(i,n.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new jt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let I=0;I<n.count;I++)o[I]=new T,l[I]=new T;const c=new T,h=new T,d=new T,u=new Ce,f=new Ce,g=new Ce,_=new T,m=new T;function p(I,w,v){c.fromBufferAttribute(n,I),h.fromBufferAttribute(n,w),d.fromBufferAttribute(n,v),u.fromBufferAttribute(r,I),f.fromBufferAttribute(r,w),g.fromBufferAttribute(r,v),h.sub(c),d.sub(c),f.sub(u),g.sub(u);const P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(P),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(P),o[I].add(_),o[w].add(_),o[v].add(_),l[I].add(m),l[w].add(m),l[v].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let I=0,w=y.length;I<w;++I){const v=y[I],P=v.start,F=v.count;for(let O=P,j=P+F;O<j;O+=3)p(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const b=new T,x=new T,R=new T,A=new T;function E(I){R.fromBufferAttribute(i,I),A.copy(R);const w=o[I];b.copy(w),b.sub(R.multiplyScalar(R.dot(w))).normalize(),x.crossVectors(A,w);const P=x.dot(l[I])<0?-1:1;a.setXYZW(I,b.x,b.y,b.z,P)}for(let I=0,w=y.length;I<w;++I){const v=y[I],P=v.start,F=v.count;for(let O=P,j=P+F;O<j;O+=3)E(e.getX(O+0)),E(e.getX(O+1)),E(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new jt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const i=new T,r=new T,a=new T,o=new T,l=new T,c=new T,h=new T,d=new T;if(e)for(let u=0,f=e.count;u<f;u+=3){const g=e.getX(u+0),_=e.getX(u+1),m=e.getX(u+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)i.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Pt.fromBufferAttribute(e,t),Pt.normalize(),e.setXYZ(t,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new jt(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new It,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=e(u,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Mc=new Fe,mi=new Zs,gr=new In,bc=new T,_r=new T,xr=new T,yr=new T,Da=new T,vr=new T,wc=new T,Mr=new T;class ee extends at{constructor(e=new It,t=new dt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){vr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],d=r[l];h!==0&&(Da.fromBufferAttribute(d,e),a?vr.addScaledVector(Da,h):vr.addScaledVector(Da.sub(t),h))}t.add(vr)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),gr.copy(n.boundingSphere),gr.applyMatrix4(r),mi.copy(e.ray).recast(e.near),!(gr.containsPoint(mi.origin)===!1&&(mi.intersectSphere(gr,bc)===null||mi.origin.distanceToSquared(bc)>(e.far-e.near)**2))&&(Mc.copy(r).invert(),mi.copy(e.ray).applyMatrix4(Mc),!(n.boundingBox!==null&&mi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,mi)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){const m=u[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),b=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let x=y,R=b;x<R;x+=3){const A=o.getX(x),E=o.getX(x+1),I=o.getX(x+2);i=br(this,p,e,n,c,h,d,A,E,I),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const y=o.getX(m),b=o.getX(m+1),x=o.getX(m+2);i=br(this,a,e,n,c,h,d,y,b,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){const m=u[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),b=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=y,R=b;x<R;x+=3){const A=x,E=x+1,I=x+2;i=br(this,p,e,n,c,h,d,A,E,I),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const y=m,b=m+1,x=m+2;i=br(this,a,e,n,c,h,d,y,b,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Mf(s,e,t,n,i,r,a,o){let l;if(e.side===zt?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===An,o),l===null)return null;Mr.copy(o),Mr.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Mr);return c<t.near||c>t.far?null:{distance:c,point:Mr.clone(),object:s}}function br(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,_r),s.getVertexPosition(l,xr),s.getVertexPosition(c,yr);const h=Mf(s,e,t,n,_r,xr,yr,wc);if(h){const d=new T;hn.getBarycoord(wc,_r,xr,yr,d),i&&(h.uv=hn.getInterpolatedAttribute(i,o,l,c,d,new Ce)),r&&(h.uv1=hn.getInterpolatedAttribute(r,o,l,c,d,new Ce)),a&&(h.normal=hn.getInterpolatedAttribute(a,o,l,c,d,new T),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new T,materialIndex:0};hn.getNormal(_r,xr,yr,u.normal),h.face=u,h.barycoord=d}return h}class oe extends It{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],d=[];let u=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new ut(c,3)),this.setAttribute("normal",new ut(h,3)),this.setAttribute("uv",new ut(d,2));function g(_,m,p,y,b,x,R,A,E,I,w){const v=x/E,P=R/I,F=x/2,O=R/2,j=A/2,W=E+1,V=I+1;let q=0,H=0;const re=new T;for(let pe=0;pe<V;pe++){const Se=pe*P-O;for(let Ve=0;Ve<W;Ve++){const ot=Ve*v-F;re[_]=ot*y,re[m]=Se*b,re[p]=j,c.push(re.x,re.y,re.z),re[_]=0,re[m]=0,re[p]=A>0?1:-1,h.push(re.x,re.y,re.z),d.push(Ve/E),d.push(1-pe/I),q+=1}}for(let pe=0;pe<I;pe++)for(let Se=0;Se<E;Se++){const Ve=u+Se+W*pe,ot=u+Se+W*(pe+1),Y=u+(Se+1)+W*(pe+1),ne=u+(Se+1)+W*pe;l.push(Ve,ot,ne),l.push(ot,Y,ne),H+=6}o.addGroup(f,H,w),f+=H,u+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oe(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function cs(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Wt(s){const e={};for(let t=0;t<s.length;t++){const n=cs(s[t]);for(const i in n)e[i]=n[i]}return e}function bf(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function _d(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}const Cl={clone:cs,merge:Wt};var wf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class wn extends un{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wf,this.fragmentShader=Sf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=cs(e.uniforms),this.uniformsGroups=bf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class xd extends at{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Fe,this.projectionMatrix=new Fe,this.projectionMatrixInverse=new Fe,this.coordinateSystem=Vn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Qn=new T,Sc=new Ce,Tc=new Ce;class Xt extends xd{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ls*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Fs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ls*2*Math.atan(Math.tan(Fs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Qn.x,Qn.y).multiplyScalar(-e/Qn.z),Qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qn.x,Qn.y).multiplyScalar(-e/Qn.z)}getViewSize(e,t){return this.getViewBounds(e,Sc,Tc),t.subVectors(Tc,Sc)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Fs*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Hi=-90,Gi=1;class Tf extends at{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Xt(Hi,Gi,e,t);i.layers=this.layers,this.add(i);const r=new Xt(Hi,Gi,e,t);r.layers=this.layers,this.add(r);const a=new Xt(Hi,Gi,e,t);a.layers=this.layers,this.add(a);const o=new Xt(Hi,Gi,e,t);o.layers=this.layers,this.add(o);const l=new Xt(Hi,Gi,e,t);l.layers=this.layers,this.add(l);const c=new Xt(Hi,Gi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Vn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===sa)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class yd extends Et{constructor(e=[],t=as,n,i,r,a,o,l,c,h){super(e,t,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ef extends li{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new yd(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:tn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new oe(5,5,5),r=new wn({name:"CubemapFromEquirect",uniforms:cs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:zt,blending:Wn});r.uniforms.tEquirect.value=t;const a=new ee(i,r),o=t.minFilter;return t.minFilter===Gn&&(t.minFilter=tn),new Tf(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}class we extends at{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Af={type:"move"};class Na{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new we,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new we,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new we,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Af)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new we;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Rl{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ge(e),this.near=t,this.far=n}clone(){return new Rl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Cf extends at{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Cn,this.environmentIntensity=1,this.environmentRotation=new Cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class vd{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=il,this.updateRanges=[],this.version=0,this.uuid=vn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Vt=new T;class $s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=xn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ht(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=xn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=xn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=xn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=xn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),i=ht(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),i=ht(i,this.array),r=ht(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new jt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new $s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Sn extends un{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ge(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Vi;const Ss=new T,Wi=new T,Xi=new T,ji=new Ce,Ts=new Ce,Md=new Fe,wr=new T,Es=new T,Sr=new T,Ec=new Ce,ka=new Ce,Ac=new Ce;class Rn extends at{constructor(e=new Sn){if(super(),this.isSprite=!0,this.type="Sprite",Vi===void 0){Vi=new It;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new vd(t,5);Vi.setIndex([0,1,2,0,2,3]),Vi.setAttribute("position",new $s(n,3,0,!1)),Vi.setAttribute("uv",new $s(n,2,3,!1))}this.geometry=Vi,this.material=e,this.center=new Ce(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Wi.setFromMatrixScale(this.matrixWorld),Md.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Xi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Wi.multiplyScalar(-Xi.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const a=this.center;Tr(wr.set(-.5,-.5,0),Xi,a,Wi,i,r),Tr(Es.set(.5,-.5,0),Xi,a,Wi,i,r),Tr(Sr.set(.5,.5,0),Xi,a,Wi,i,r),Ec.set(0,0),ka.set(1,0),Ac.set(1,1);let o=e.ray.intersectTriangle(wr,Es,Sr,!1,Ss);if(o===null&&(Tr(Es.set(-.5,.5,0),Xi,a,Wi,i,r),ka.set(0,1),o=e.ray.intersectTriangle(wr,Sr,Es,!1,Ss),o===null))return;const l=e.ray.origin.distanceTo(Ss);l<e.near||l>e.far||t.push({distance:l,point:Ss.clone(),uv:hn.getInterpolation(Ss,wr,Es,Sr,Ec,ka,Ac,new Ce),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Tr(s,e,t,n,i,r){ji.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(Ts.x=r*ji.x-i*ji.y,Ts.y=i*ji.x+r*ji.y):Ts.copy(ji),s.copy(e),s.x+=Ts.x,s.y+=Ts.y,s.applyMatrix4(Md)}const Cc=new T,Rc=new nt,Ic=new nt,Rf=new T,Pc=new Fe,Er=new T,Ua=new In,Lc=new Fe,Fa=new Zs;class If extends ee{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=rc,this.bindMatrix=new Fe,this.bindMatrixInverse=new Fe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new bn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Er),this.boundingBox.expandByPoint(Er)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new In),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Er),this.boundingSphere.expandByPoint(Er)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ua.copy(this.boundingSphere),Ua.applyMatrix4(i),e.ray.intersectsSphere(Ua)!==!1&&(Lc.copy(i).invert(),Fa.copy(e.ray).applyMatrix4(Lc),!(this.boundingBox!==null&&Fa.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Fa)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new nt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===rc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Su?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Rc.fromBufferAttribute(i.attributes.skinIndex,e),Ic.fromBufferAttribute(i.attributes.skinWeight,e),Cc.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=Ic.getComponent(r);if(a!==0){const o=Rc.getComponent(r);Pc.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Rf.copy(Cc).applyMatrix4(Pc),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class bd extends at{constructor(){super(),this.isBone=!0,this.type="Bone"}}class wd extends Et{constructor(e=null,t=1,n=1,i,r,a,o,l,c=Ut,h=Ut,d,u){super(null,a,o,l,c,h,i,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Dc=new Fe,Pf=new Fe;class Il{constructor(e=[],t=[]){this.uuid=vn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Fe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Fe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:Pf;Dc.multiplyMatrices(o,t[r]),Dc.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Il(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new wd(t,e,e,dn,yn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new bd),this.bones.push(a),this.boneInverses.push(new Fe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class sl extends jt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Yi=new Fe,Nc=new Fe,Ar=[],kc=new bn,Lf=new Fe,As=new ee,Cs=new In;class Os extends ee{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new sl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Lf)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new bn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Yi),kc.copy(e.boundingBox).applyMatrix4(Yi),this.boundingBox.union(kc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new In),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Yi),Cs.copy(e.boundingSphere).applyMatrix4(Yi),this.boundingSphere.union(Cs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(As.geometry=this.geometry,As.material=this.material,As.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Cs.copy(this.boundingSphere),Cs.applyMatrix4(n),e.ray.intersectsSphere(Cs)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Yi),Nc.multiplyMatrices(n,Yi),As.matrixWorld=Nc,As.raycast(e,Ar);for(let a=0,o=Ar.length;a<o;a++){const l=Ar[a];l.instanceId=r,l.object=this,t.push(l)}Ar.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new sl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new wd(new Float32Array(i*this.count),i,this.count,yl,yn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ba=new T,Df=new T,Nf=new ze;class Mi{constructor(e=new T(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ba.subVectors(n,t).cross(Df.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ba),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Nf.getNormalMatrix(e),i=this.coplanarPoint(Ba).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gi=new In,Cr=new T;class Pl{constructor(e=new Mi,t=new Mi,n=new Mi,i=new Mi,r=new Mi,a=new Mi){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Vn){const n=this.planes,i=e.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],d=i[6],u=i[7],f=i[8],g=i[9],_=i[10],m=i[11],p=i[12],y=i[13],b=i[14],x=i[15];if(n[0].setComponents(l-r,u-c,m-f,x-p).normalize(),n[1].setComponents(l+r,u+c,m+f,x+p).normalize(),n[2].setComponents(l+a,u+h,m+g,x+y).normalize(),n[3].setComponents(l-a,u-h,m-g,x-y).normalize(),n[4].setComponents(l-o,u-d,m-_,x-b).normalize(),t===Vn)n[5].setComponents(l+o,u+d,m+_,x+b).normalize();else if(t===sa)n[5].setComponents(o,d,_,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),gi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gi)}intersectsSprite(e){return gi.center.set(0,0,0),gi.radius=.7071067811865476,gi.applyMatrix4(e.matrixWorld),this.intersectsSphere(gi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Cr.x=i.normal.x>0?e.max.x:e.min.x,Cr.y=i.normal.y>0?e.max.y:e.min.y,Cr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Cr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Sd extends un{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ra=new T,aa=new T,Uc=new Fe,Rs=new Zs,Rr=new In,Oa=new T,Fc=new T;class Ll extends at{constructor(e=new It,t=new Sd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)ra.fromBufferAttribute(t,i-1),aa.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=ra.distanceTo(aa);e.setAttribute("lineDistance",new ut(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Rr.copy(n.boundingSphere),Rr.applyMatrix4(i),Rr.radius+=r,e.ray.intersectsSphere(Rr)===!1)return;Uc.copy(i).invert(),Rs.copy(e.ray).applyMatrix4(Uc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=c){const p=h.getX(_),y=h.getX(_+1),b=Ir(this,e,Rs,l,p,y,_);b&&t.push(b)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(f),p=Ir(this,e,Rs,l,_,m,g-1);p&&t.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=c){const p=Ir(this,e,Rs,l,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=Ir(this,e,Rs,l,g-1,f,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Ir(s,e,t,n,i,r,a){const o=s.geometry.attributes.position;if(ra.fromBufferAttribute(o,i),aa.fromBufferAttribute(o,r),t.distanceSqToSegment(ra,aa,Oa,Fc)>n)return;Oa.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Oa);if(!(c<e.near||c>e.far))return{distance:c,point:Fc.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}const Bc=new T,Oc=new T;class kf extends Ll{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Bc.fromBufferAttribute(t,i),Oc.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Bc.distanceTo(Oc);e.setAttribute("lineDistance",new ut(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Uf extends Ll{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Td extends un{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const zc=new Fe,rl=new Zs,Pr=new In,Lr=new T;class Ff extends at{constructor(e=new It,t=new Td){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Pr.copy(n.boundingSphere),Pr.applyMatrix4(i),Pr.radius+=r,e.ray.intersectsSphere(Pr)===!1)return;zc.copy(i).invert(),rl.copy(e.ray).applyMatrix4(zc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){const u=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=u,_=f;g<_;g++){const m=c.getX(g);Lr.fromBufferAttribute(d,m),Hc(Lr,m,l,i,e,t,this)}}else{const u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let g=u,_=f;g<_;g++)Lr.fromBufferAttribute(d,g),Hc(Lr,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Hc(s,e,t,n,i,r,a){const o=rl.distanceSqToPoint(s);if(o<t){const l=new T;rl.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Ht extends Et{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ed extends Et{constructor(e,t,n=Ai,i,r,a,o=Ut,l=Ut,c,h=Xs){if(h!==Xs&&h!==js)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new El(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Bf{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);const h=n[i],u=n[i+1]-h,f=(a-h)/u;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),l=t||(a.isVector2?new Ce:new T);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new T,i=[],r=[],a=[],o=new T,l=new Fe;for(let f=0;f<=e;f++){const g=f/e;i[f]=this.getTangentAt(g,new T)}r[0]=new T,a[0]=new T;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Xe(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(Xe(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),a[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function Dl(){let s=0,e=0,t=0,n=0;function i(r,a,o,l){s=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,f*=h,i(a,o,u,f)},calc:function(r){const a=r*r,o=a*r;return s+e*r+t*a+n*o}}}const Dr=new T,za=new Dl,Ha=new Dl,Ga=new Dl;class Zr extends Bf{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new T){const n=t,i=this.points,r=i.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(Dr.subVectors(i[0],i[1]).add(i[0]),c=Dr);const d=i[o%r],u=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(Dr.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Dr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),za.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,_,m),Ha.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,_,m),Ga.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(za.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Ha.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Ga.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(za.calc(l),Ha.calc(l),Ga.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new T().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class Dt extends It{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],a=[],o=[],l=[],c=new T,h=new Ce;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){const f=n+d/t*i;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new ut(a,3)),this.setAttribute("normal",new ut(o,3)),this.setAttribute("uv",new ut(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dt(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Ne extends It{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],d=[],u=[],f=[];let g=0;const _=[],m=n/2;let p=0;y(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new ut(d,3)),this.setAttribute("normal",new ut(u,3)),this.setAttribute("uv",new ut(f,2));function y(){const x=new T,R=new T;let A=0;const E=(t-e)/n;for(let I=0;I<=r;I++){const w=[],v=I/r,P=v*(t-e)+e;for(let F=0;F<=i;F++){const O=F/i,j=O*l+o,W=Math.sin(j),V=Math.cos(j);R.x=P*W,R.y=-v*n+m,R.z=P*V,d.push(R.x,R.y,R.z),x.set(W,E,V).normalize(),u.push(x.x,x.y,x.z),f.push(O,1-v),w.push(g++)}_.push(w)}for(let I=0;I<i;I++)for(let w=0;w<r;w++){const v=_[w][I],P=_[w+1][I],F=_[w+1][I+1],O=_[w][I+1];(e>0||w!==0)&&(h.push(v,P,O),A+=3),(t>0||w!==r-1)&&(h.push(P,F,O),A+=3)}c.addGroup(p,A,0),p+=A}function b(x){const R=g,A=new Ce,E=new T;let I=0;const w=x===!0?e:t,v=x===!0?1:-1;for(let F=1;F<=i;F++)d.push(0,m*v,0),u.push(0,v,0),f.push(.5,.5),g++;const P=g;for(let F=0;F<=i;F++){const j=F/i*l+o,W=Math.cos(j),V=Math.sin(j);E.x=w*V,E.y=m*v,E.z=w*W,d.push(E.x,E.y,E.z),u.push(0,v,0),A.x=W*.5+.5,A.y=V*.5*v+.5,f.push(A.x,A.y),g++}for(let F=0;F<i;F++){const O=R+F,j=P+F;x===!0?h.push(j,j+1,O):h.push(j+1,j,O),I+=3}c.addGroup(p,I,x===!0?1:2),p+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ne(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class At extends Ne{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new At(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Nl extends It{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],a=[];o(i),c(n),h(),this.setAttribute("position",new ut(r,3)),this.setAttribute("normal",new ut(r.slice(),3)),this.setAttribute("uv",new ut(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const b=new T,x=new T,R=new T;for(let A=0;A<t.length;A+=3)f(t[A+0],b),f(t[A+1],x),f(t[A+2],R),l(b,x,R,y)}function l(y,b,x,R){const A=R+1,E=[];for(let I=0;I<=A;I++){E[I]=[];const w=y.clone().lerp(x,I/A),v=b.clone().lerp(x,I/A),P=A-I;for(let F=0;F<=P;F++)F===0&&I===A?E[I][F]=w:E[I][F]=w.clone().lerp(v,F/P)}for(let I=0;I<A;I++)for(let w=0;w<2*(A-I)-1;w++){const v=Math.floor(w/2);w%2===0?(u(E[I][v+1]),u(E[I+1][v]),u(E[I][v])):(u(E[I][v+1]),u(E[I+1][v+1]),u(E[I+1][v]))}}function c(y){const b=new T;for(let x=0;x<r.length;x+=3)b.x=r[x+0],b.y=r[x+1],b.z=r[x+2],b.normalize().multiplyScalar(y),r[x+0]=b.x,r[x+1]=b.y,r[x+2]=b.z}function h(){const y=new T;for(let b=0;b<r.length;b+=3){y.x=r[b+0],y.y=r[b+1],y.z=r[b+2];const x=m(y)/2/Math.PI+.5,R=p(y)/Math.PI+.5;a.push(x,1-R)}g(),d()}function d(){for(let y=0;y<a.length;y+=6){const b=a[y+0],x=a[y+2],R=a[y+4],A=Math.max(b,x,R),E=Math.min(b,x,R);A>.9&&E<.1&&(b<.2&&(a[y+0]+=1),x<.2&&(a[y+2]+=1),R<.2&&(a[y+4]+=1))}}function u(y){r.push(y.x,y.y,y.z)}function f(y,b){const x=y*3;b.x=e[x+0],b.y=e[x+1],b.z=e[x+2]}function g(){const y=new T,b=new T,x=new T,R=new T,A=new Ce,E=new Ce,I=new Ce;for(let w=0,v=0;w<r.length;w+=9,v+=6){y.set(r[w+0],r[w+1],r[w+2]),b.set(r[w+3],r[w+4],r[w+5]),x.set(r[w+6],r[w+7],r[w+8]),A.set(a[v+0],a[v+1]),E.set(a[v+2],a[v+3]),I.set(a[v+4],a[v+5]),R.copy(y).add(b).add(x).divideScalar(3);const P=m(R);_(A,v+0,y,P),_(E,v+2,b,P),_(I,v+4,x,P)}}function _(y,b,x,R){R<0&&y.x===1&&(a[b]=y.x-1),x.x===0&&x.z===0&&(a[b]=R/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nl(e.vertices,e.indices,e.radius,e.details)}}class kl extends Nl{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new kl(e.radius,e.detail)}}class St extends It{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,d=e/o,u=t/l,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const y=p*u-a;for(let b=0;b<c;b++){const x=b*d-r;g.push(x,-y,0),_.push(0,0,1),m.push(b/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){const b=y+c*p,x=y+c*(p+1),R=y+1+c*(p+1),A=y+1+c*p;f.push(b,x,A),f.push(x,R,A)}this.setIndex(f),this.setAttribute("position",new ut(g,3)),this.setAttribute("normal",new ut(_,3)),this.setAttribute("uv",new ut(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new St(e.width,e.height,e.widthSegments,e.heightSegments)}}class Be extends It{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],d=new T,u=new T,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const y=[],b=p/n;let x=0;p===0&&a===0?x=.5/t:p===n&&l===Math.PI&&(x=-.5/t);for(let R=0;R<=t;R++){const A=R/t;d.x=-e*Math.cos(i+A*r)*Math.sin(a+b*o),d.y=e*Math.cos(a+b*o),d.z=e*Math.sin(i+A*r)*Math.sin(a+b*o),g.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),m.push(A+x,1-b),y.push(c++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<t;y++){const b=h[p][y+1],x=h[p][y],R=h[p+1][y],A=h[p+1][y+1];(p!==0||a>0)&&f.push(b,x,A),(p!==n-1||l<Math.PI)&&f.push(x,R,A)}this.setIndex(f),this.setAttribute("position",new ut(g,3)),this.setAttribute("normal",new ut(_,3)),this.setAttribute("uv",new ut(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Be(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ci extends It{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],l=[],c=[],h=new T,d=new T,u=new T;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){const _=g/i*r,m=f/n*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(_),d.y=(e+t*Math.cos(m))*Math.sin(_),d.z=t*Math.sin(m),o.push(d.x,d.y,d.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(g/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){const _=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,y=(i+1)*f+g;a.push(_,m,y),a.push(m,p,y)}this.setIndex(a),this.setAttribute("position",new ut(o,3)),this.setAttribute("normal",new ut(l,3)),this.setAttribute("uv",new ut(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ci(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Of extends wn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ul extends un{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sl,this.normalScale=new Ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Pn extends Ul{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ce(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Xe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ge(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ge(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ge(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Fl extends un{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ge(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sl,this.normalScale=new Ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class zf extends un{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Cu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Hf extends un{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Nr(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Gf(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Vf(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Gc(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)i[a++]=s[o+l]}return i}function Ad(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}class Qs{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Wf extends Qs{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ji,endingEnd:Ji}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Zi:r=e,o=2*t-n;break;case na:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Zi:a=e,l=2*n-t;break;case na:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,p=-u*m+2*u*_-u*g,y=(1+u)*m+(-1.5-2*u)*_+(-.5+u)*g+1,b=(-1-f)*m+(1.5+f)*_+.5*g,x=f*m-f*_;for(let R=0;R!==o;++R)r[R]=p*a[h+R]+y*a[c+R]+b*a[l+R]+x*a[d+R];return r}}class Cd extends Qs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}}class Xf extends Qs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Tn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Nr(t,this.TimeBufferType),this.values=Nr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Nr(e.times,Array),values:Nr(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Xf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Cd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Wf(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ys:t=this.InterpolantFactoryMethodDiscrete;break;case Ks:t=this.InterpolantFactoryMethodLinear;break;case pa:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ys;case this.InterpolantFactoryMethodLinear:return Ks;case this.InterpolantFactoryMethodSmooth:return pa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&Gf(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===pa,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)l=!0;else{const d=o*n,u=d-n,f=d+n;for(let g=0;g!==n;++g){const _=t[d+g];if(_!==t[u+g]||_!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const d=o*n,u=a*n;for(let f=0;f!==n;++f)t[u+f]=t[d+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Tn.prototype.ValueTypeName="";Tn.prototype.TimeBufferType=Float32Array;Tn.prototype.ValueBufferType=Float32Array;Tn.prototype.DefaultInterpolation=Ks;class ms extends Tn{constructor(e,t,n){super(e,t,n)}}ms.prototype.ValueTypeName="bool";ms.prototype.ValueBufferType=Array;ms.prototype.DefaultInterpolation=Ys;ms.prototype.InterpolantFactoryMethodLinear=void 0;ms.prototype.InterpolantFactoryMethodSmooth=void 0;class Rd extends Tn{constructor(e,t,n,i){super(e,t,n,i)}}Rd.prototype.ValueTypeName="color";class hs extends Tn{constructor(e,t,n,i){super(e,t,n,i)}}hs.prototype.ValueTypeName="number";class jf extends Qs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let h=c+o;c!==h;c+=4)Mn.slerpFlat(r,0,a,c-o,a,c,l);return r}}class ds extends Tn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new jf(this.times,this.values,this.getValueSize(),e)}}ds.prototype.ValueTypeName="quaternion";ds.prototype.InterpolantFactoryMethodSmooth=void 0;class gs extends Tn{constructor(e,t,n){super(e,t,n)}}gs.prototype.ValueTypeName="string";gs.prototype.ValueBufferType=Array;gs.prototype.DefaultInterpolation=Ys;gs.prototype.InterpolantFactoryMethodLinear=void 0;gs.prototype.InterpolantFactoryMethodSmooth=void 0;class us extends Tn{constructor(e,t,n,i){super(e,t,n,i)}}us.prototype.ValueTypeName="vector";class al{constructor(e="",t=-1,n=[],i=wl){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=vn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Kf(n[a]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(Tn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const h=Vf(l);l=Gc(l,1,h),c=Gc(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new hs(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(r);if(h&&h.length>1){const d=h[1];let u=i[d];u||(i[d]=u=[]),u.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(d,u,f,g,_){if(f.length!==0){const m=[],p=[];Ad(f,m,p,g),m.length!==0&&_.push(new d(u,m,p))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let d=0;d<c.length;d++){const u=c[d].keys;if(!(!u||u.length===0))if(u[0].morphTargets){const f={};let g;for(g=0;g<u.length;g++)if(u[g].morphTargets)for(let _=0;_<u[g].morphTargets.length;_++)f[u[g].morphTargets[_]]=-1;for(const _ in f){const m=[],p=[];for(let y=0;y!==u[g].morphTargets.length;++y){const b=u[g];m.push(b.time),p.push(b.morphTarget===_?1:0)}i.push(new hs(".morphTargetInfluence["+_+"]",m,p))}l=f.length*a}else{const f=".bones["+t[d].name+"]";n(us,f+".position",u,"pos",i),n(ds,f+".quaternion",u,"rot",i),n(us,f+".scale",u,"scl",i)}}return i.length===0?null:new this(r,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Yf(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return hs;case"vector":case"vector2":case"vector3":case"vector4":return us;case"color":return Rd;case"quaternion":return ds;case"bool":case"boolean":return ms;case"string":return gs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Kf(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Yf(s.type);if(s.times===void 0){const t=[],n=[];Ad(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const ai={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class qf{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){const f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const $f=new qf;class _s{constructor(e){this.manager=e!==void 0?e:$f,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}_s.DEFAULT_MATERIAL_NAME="__DEFAULT";const Bn={};class Jf extends Error{constructor(e,t){super(e),this.response=t}}class Id extends _s{constructor(e){super(e),this.mimeType="",this.responseType=""}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=ai.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Bn[e]!==void 0){Bn[e].push({onLoad:t,onProgress:n,onError:i});return}Bn[e]=[],Bn[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Bn[e],d=c.body.getReader(),u=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=u?parseInt(u):0,g=f!==0;let _=0;const m=new ReadableStream({start(p){y();function y(){d.read().then(({done:b,value:x})=>{if(b)p.close();else{_+=x.byteLength;const R=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let A=0,E=h.length;A<E;A++){const I=h[A];I.onProgress&&I.onProgress(R)}p.enqueue(x),y()}},b=>{p.error(b)})}}});return new Response(m)}else throw new Jf(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(o),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{ai.add(e,c);const h=Bn[e];delete Bn[e];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=Bn[e];if(h===void 0)throw this.manager.itemError(e),c;delete Bn[e];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Zf extends _s{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=ai.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=qs("img");function l(){h(),ai.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(d){h(),i&&i(d),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class Qf extends _s{constructor(e){super(e)}load(e,t,n,i){const r=new Et,a=new Zf(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class er extends at{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ge(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class ep extends er{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(at.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ge(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Va=new Fe,Vc=new T,Wc=new T;class Bl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ce(512,512),this.map=null,this.mapPass=null,this.matrix=new Fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Pl,this._frameExtents=new Ce(1,1),this._viewportCount=1,this._viewports=[new nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Vc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Vc),Wc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Wc),t.updateMatrixWorld(),Va.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Va),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Va)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class tp extends Bl{constructor(){super(new Xt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=ls*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class np extends er{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(at.DEFAULT_UP),this.updateMatrix(),this.target=new at,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new tp}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Xc=new Fe,Is=new T,Wa=new T;class ip extends Bl{constructor(){super(new Xt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ce(4,2),this._viewportCount=6,this._viewports=[new nt(2,1,1,1),new nt(0,1,1,1),new nt(3,1,1,1),new nt(1,1,1,1),new nt(3,0,1,1),new nt(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Is.setFromMatrixPosition(e.matrixWorld),n.position.copy(Is),Wa.copy(n.position),Wa.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Wa),n.updateMatrixWorld(),i.makeTranslation(-Is.x,-Is.y,-Is.z),Xc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xc)}}class Si extends er{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new ip}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class la extends xd{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class sp extends Bl{constructor(){super(new la(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ol extends er{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(at.DEFAULT_UP),this.updateMatrix(),this.target=new at,this.shadow=new sp}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class rp extends er{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class zs{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class ap extends _s{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=ai.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return ai.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),ai.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});ai.add(e,l),r.manager.itemStart(e)}}class op extends Xt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}class Pd{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=jc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=jc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function jc(){return performance.now()}class lp{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,a;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[r+o]=n[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){o.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,a=i;r!==a;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){Mn.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){const a=this._workIndex*r;Mn.multiplyQuaternionsFlat(e,a,e,t,e,n),Mn.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,r){const a=1-i;for(let o=0;o!==r;++o){const l=t+o;e[l]=e[l]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,r){for(let a=0;a!==r;++a){const o=t+a;e[o]=e[o]+e[n+a]*i}}}const Ol="\\[\\]\\.:\\/",cp=new RegExp("["+Ol+"]","g"),zl="[^"+Ol+"]",hp="[^"+Ol.replace("\\.","")+"]",dp=/((?:WC+[\/:])*)/.source.replace("WC",zl),up=/(WCOD+)?/.source.replace("WCOD",hp),fp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",zl),pp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",zl),mp=new RegExp("^"+dp+up+fp+pp+"$"),gp=["material","materials","bones","map"];class _p{constructor(e,t,n){const i=n||rt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class rt{constructor(e,t,n){this.path=t,this.parsedPath=n||rt.parseTrackName(t),this.node=rt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new rt.Composite(e,t,n):new rt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(cp,"")}static parseTrackName(e){const t=mp.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);gp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=rt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}rt.Composite=_p;rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};rt.prototype.GetterByBindingType=[rt.prototype._getValue_direct,rt.prototype._getValue_array,rt.prototype._getValue_arrayElement,rt.prototype._getValue_toArray];rt.prototype.SetterByBindingTypeAndVersioning=[[rt.prototype._setValue_direct,rt.prototype._setValue_direct_setNeedsUpdate,rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_array,rt.prototype._setValue_array_setNeedsUpdate,rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_arrayElement,rt.prototype._setValue_arrayElement_setNeedsUpdate,rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_fromArray,rt.prototype._setValue_fromArray_setNeedsUpdate,rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class xp{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const r=t.tracks,a=r.length,o=new Array(a),l={endingStart:Ji,endingEnd:Ji};for(let c=0;c!==a;++c){const h=r[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=cd,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){const i=this._clip.duration,r=e._clip.duration,a=r/i,o=i/r;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Eu:for(let h=0,d=l.length;h!==d;++h)l[h].evaluate(a),c[h].accumulateAdditive(o);break;case wl:default:for(let h=0,d=l.length;h!==d;++h)l[h].evaluate(a),c[h].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const a=n===Tu;if(e===0)return r===-1?i:a&&(r&1)===1?t-i:i;if(n===ld){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){const o=Math.floor(i/t);i-=t*o,r+=Math.abs(o);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=Zi,i.endingEnd=Zi):(e?i.endingStart=this.zeroSlopeAtStart?Zi:Ji:i.endingStart=na,t?i.endingEnd=this.zeroSlopeAtEnd?Zi:Ji:i.endingEnd=na)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=r,l[0]=t,o[1]=r+e,l[1]=n,this}}const yp=new Float32Array(1);class vp extends Ci{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,a=e._propertyBindings,o=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let d=0;d!==r;++d){const u=i[d],f=u.name;let g=h[f];if(g!==void 0)++g.referenceCount,a[d]=g;else{if(g=a[d],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,f));continue}const _=t&&t._propertyBindings[d].binding.parsedPath;g=new lp(rt.create(n,f,_),u.ValueTypeName,u.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,f),a[d]=g}o[d].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,a=this._actionsByClip,o=a[r],l=o.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const d=o.actionByRoot,u=(e._localRoot||this._root).uuid;delete d[u],l.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Cd(new Float32Array(2),new Float32Array(2),1,yp),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const i=t||this._root,r=i.uuid;let a=typeof e=="string"?al.findByName(i,e):e;const o=a!==null?a.uuid:e,l=this._actionsByClip[o];let c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=wl),l!==void 0){const d=l.actionByRoot[r];if(d!==void 0&&d.blendMode===n)return d;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const h=new xp(this,a,t,n);return this._bindAction(h,c),this._addInactiveAction(h,o,r),h}existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?al.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,a);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const a=r.knownActions;for(let o=0,l=a.length;o!==l;++o){const c=a[o];this._deactivateAction(c);const h=c._cacheIndex,d=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,d._cacheIndex=h,t[h]=d,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const a in r){const o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}const Yc=new Fe;class Hl{constructor(e,t,n=0,i=1/0){this.ray=new Zs(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Al,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Yc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Yc),this}intersectObject(e,t=!0,n=[]){return ll(e,this,n,t),n.sort(Kc),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)ll(e[i],this,n,t);return n.sort(Kc),n}}function Kc(s,e){return s.distance-e.distance}function ll(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let a=0,o=r.length;a<o;a++)ll(r[a],e,t,!0)}}function qc(s,e,t,n){const i=Mp(n);switch(t){case nd:return s*e;case sd:return s*e;case rd:return s*e*2;case yl:return s*e/i.components*i.byteLength;case vl:return s*e/i.components*i.byteLength;case ad:return s*e*2/i.components*i.byteLength;case Ml:return s*e*2/i.components*i.byteLength;case id:return s*e*3/i.components*i.byteLength;case dn:return s*e*4/i.components*i.byteLength;case bl:return s*e*4/i.components*i.byteLength;case jr:case Yr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Kr:case qr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Po:case Do:return Math.max(s,16)*Math.max(e,8)/4;case Io:case Lo:return Math.max(s,8)*Math.max(e,8)/2;case No:case ko:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Uo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Fo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Bo:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Oo:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case zo:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Ho:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Go:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Vo:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Wo:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Xo:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case jo:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Yo:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Ko:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case qo:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case $o:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case $r:case Jo:case Zo:return Math.ceil(s/4)*Math.ceil(e/4)*16;case od:case Qo:return Math.ceil(s/4)*Math.ceil(e/4)*8;case el:case tl:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Mp(s){switch(s){case Yn:case Qh:return{byteLength:1,components:1};case Vs:case ed:case ps:return{byteLength:2,components:1};case _l:case xl:return{byteLength:2,components:4};case Ai:case gl:case yn:return{byteLength:4,components:1};case td:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ml}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ml);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ld(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function bp(s){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,d=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const h=l.array,d=l.updateRanges;if(s.bindBuffer(c,o),d.length===0)s.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){const g=d[u],_=d[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,d[u]=_)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){const _=d[f];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var wp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Sp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Tp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ep=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ap=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Cp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ip=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Pp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Lp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Dp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Np=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Up=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Fp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Bp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Op=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Vp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Wp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Xp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,jp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Yp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Kp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,qp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$p=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qp="gl_FragColor = linearToOutputTexel( gl_FragColor );",em=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,nm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,im=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,sm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,am=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,om=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,dm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,um=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,mm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,gm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_m=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ym=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Mm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,bm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,wm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Sm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Tm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Em=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Am=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Rm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Im=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Lm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Nm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,km=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Um=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Om=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Hm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Gm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Xm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,jm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ym=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Km=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$m=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Jm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Zm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,e0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,t0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,n0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,i0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,s0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,r0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,a0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,o0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,l0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,c0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,h0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,d0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,u0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,f0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,p0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,m0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,g0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,_0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,x0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,y0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,v0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,M0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const b0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,w0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,S0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,T0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,A0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,R0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,I0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,P0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,L0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,D0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,N0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,k0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,U0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,F0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,B0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,O0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,z0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,H0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,G0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,V0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,W0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,X0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,j0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Y0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,K0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,q0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,J0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Z0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Q0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,eg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ge={alphahash_fragment:wp,alphahash_pars_fragment:Sp,alphamap_fragment:Tp,alphamap_pars_fragment:Ep,alphatest_fragment:Ap,alphatest_pars_fragment:Cp,aomap_fragment:Rp,aomap_pars_fragment:Ip,batching_pars_vertex:Pp,batching_vertex:Lp,begin_vertex:Dp,beginnormal_vertex:Np,bsdfs:kp,iridescence_fragment:Up,bumpmap_pars_fragment:Fp,clipping_planes_fragment:Bp,clipping_planes_pars_fragment:Op,clipping_planes_pars_vertex:zp,clipping_planes_vertex:Hp,color_fragment:Gp,color_pars_fragment:Vp,color_pars_vertex:Wp,color_vertex:Xp,common:jp,cube_uv_reflection_fragment:Yp,defaultnormal_vertex:Kp,displacementmap_pars_vertex:qp,displacementmap_vertex:$p,emissivemap_fragment:Jp,emissivemap_pars_fragment:Zp,colorspace_fragment:Qp,colorspace_pars_fragment:em,envmap_fragment:tm,envmap_common_pars_fragment:nm,envmap_pars_fragment:im,envmap_pars_vertex:sm,envmap_physical_pars_fragment:mm,envmap_vertex:rm,fog_vertex:am,fog_pars_vertex:om,fog_fragment:lm,fog_pars_fragment:cm,gradientmap_pars_fragment:hm,lightmap_pars_fragment:dm,lights_lambert_fragment:um,lights_lambert_pars_fragment:fm,lights_pars_begin:pm,lights_toon_fragment:gm,lights_toon_pars_fragment:_m,lights_phong_fragment:xm,lights_phong_pars_fragment:ym,lights_physical_fragment:vm,lights_physical_pars_fragment:Mm,lights_fragment_begin:bm,lights_fragment_maps:wm,lights_fragment_end:Sm,logdepthbuf_fragment:Tm,logdepthbuf_pars_fragment:Em,logdepthbuf_pars_vertex:Am,logdepthbuf_vertex:Cm,map_fragment:Rm,map_pars_fragment:Im,map_particle_fragment:Pm,map_particle_pars_fragment:Lm,metalnessmap_fragment:Dm,metalnessmap_pars_fragment:Nm,morphinstance_vertex:km,morphcolor_vertex:Um,morphnormal_vertex:Fm,morphtarget_pars_vertex:Bm,morphtarget_vertex:Om,normal_fragment_begin:zm,normal_fragment_maps:Hm,normal_pars_fragment:Gm,normal_pars_vertex:Vm,normal_vertex:Wm,normalmap_pars_fragment:Xm,clearcoat_normal_fragment_begin:jm,clearcoat_normal_fragment_maps:Ym,clearcoat_pars_fragment:Km,iridescence_pars_fragment:qm,opaque_fragment:$m,packing:Jm,premultiplied_alpha_fragment:Zm,project_vertex:Qm,dithering_fragment:e0,dithering_pars_fragment:t0,roughnessmap_fragment:n0,roughnessmap_pars_fragment:i0,shadowmap_pars_fragment:s0,shadowmap_pars_vertex:r0,shadowmap_vertex:a0,shadowmask_pars_fragment:o0,skinbase_vertex:l0,skinning_pars_vertex:c0,skinning_vertex:h0,skinnormal_vertex:d0,specularmap_fragment:u0,specularmap_pars_fragment:f0,tonemapping_fragment:p0,tonemapping_pars_fragment:m0,transmission_fragment:g0,transmission_pars_fragment:_0,uv_pars_fragment:x0,uv_pars_vertex:y0,uv_vertex:v0,worldpos_vertex:M0,background_vert:b0,background_frag:w0,backgroundCube_vert:S0,backgroundCube_frag:T0,cube_vert:E0,cube_frag:A0,depth_vert:C0,depth_frag:R0,distanceRGBA_vert:I0,distanceRGBA_frag:P0,equirect_vert:L0,equirect_frag:D0,linedashed_vert:N0,linedashed_frag:k0,meshbasic_vert:U0,meshbasic_frag:F0,meshlambert_vert:B0,meshlambert_frag:O0,meshmatcap_vert:z0,meshmatcap_frag:H0,meshnormal_vert:G0,meshnormal_frag:V0,meshphong_vert:W0,meshphong_frag:X0,meshphysical_vert:j0,meshphysical_frag:Y0,meshtoon_vert:K0,meshtoon_frag:q0,points_vert:$0,points_frag:J0,shadow_vert:Z0,shadow_frag:Q0,sprite_vert:eg,sprite_frag:tg},le={common:{diffuse:{value:new ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new Ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new ge(16777215)},opacity:{value:1},center:{value:new Ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},En={basic:{uniforms:Wt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Wt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new ge(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Wt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new ge(0)},specular:{value:new ge(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Wt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Wt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new ge(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Wt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Wt([le.points,le.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Wt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Wt([le.common,le.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Wt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Wt([le.sprite,le.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:Wt([le.common,le.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:Wt([le.lights,le.fog,{color:{value:new ge(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};En.physical={uniforms:Wt([En.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new Ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new Ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new ge(0)},specularColor:{value:new ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new Ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const kr={r:0,b:0,g:0},_i=new Cn,ng=new Fe;function ig(s,e,t,n,i,r,a){const o=new ge(0);let l=r===!0?0:1,c,h,d=null,u=0,f=null;function g(b){let x=b.isScene===!0?b.background:null;return x&&x.isTexture&&(x=(b.backgroundBlurriness>0?t:e).get(x)),x}function _(b){let x=!1;const R=g(b);R===null?p(o,l):R&&R.isColor&&(p(R,1),x=!0);const A=s.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(b,x){const R=g(x);R&&(R.isCubeTexture||R.mapping===oa)?(h===void 0&&(h=new ee(new oe(1,1,1),new wn({name:"BackgroundCubeMaterial",uniforms:cs(En.backgroundCube.uniforms),vertexShader:En.backgroundCube.vertexShader,fragmentShader:En.backgroundCube.fragmentShader,side:zt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,E,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),_i.copy(x.backgroundRotation),_i.x*=-1,_i.y*=-1,_i.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(_i.y*=-1,_i.z*=-1),h.material.uniforms.envMap.value=R,h.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(ng.makeRotationFromEuler(_i)),h.material.toneMapped=Ye.getTransfer(R.colorSpace)!==ct,(d!==R||u!==R.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,d=R,u=R.version,f=s.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new ee(new St(2,2),new wn({name:"BackgroundMaterial",uniforms:cs(En.background.uniforms),vertexShader:En.background.vertexShader,fragmentShader:En.background.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Ye.getTransfer(R.colorSpace)!==ct,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(d!==R||u!==R.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,d=R,u=R.version,f=s.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,x){b.getRGB(kr,_d(s)),n.buffers.color.setClear(kr.r,kr.g,kr.b,x,a)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,x=1){o.set(b),l=x,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(o,l)},render:_,addToRenderList:m,dispose:y}}function sg(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null);let r=i,a=!1;function o(v,P,F,O,j){let W=!1;const V=d(O,F,P);r!==V&&(r=V,c(r.object)),W=f(v,O,F,j),W&&g(v,O,F,j),j!==null&&e.update(j,s.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,x(v,P,F,O),j!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function l(){return s.createVertexArray()}function c(v){return s.bindVertexArray(v)}function h(v){return s.deleteVertexArray(v)}function d(v,P,F){const O=F.wireframe===!0;let j=n[v.id];j===void 0&&(j={},n[v.id]=j);let W=j[P.id];W===void 0&&(W={},j[P.id]=W);let V=W[O];return V===void 0&&(V=u(l()),W[O]=V),V}function u(v){const P=[],F=[],O=[];for(let j=0;j<t;j++)P[j]=0,F[j]=0,O[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:F,attributeDivisors:O,object:v,attributes:{},index:null}}function f(v,P,F,O){const j=r.attributes,W=P.attributes;let V=0;const q=F.getAttributes();for(const H in q)if(q[H].location>=0){const pe=j[H];let Se=W[H];if(Se===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(Se=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(Se=v.instanceColor)),pe===void 0||pe.attribute!==Se||Se&&pe.data!==Se.data)return!0;V++}return r.attributesNum!==V||r.index!==O}function g(v,P,F,O){const j={},W=P.attributes;let V=0;const q=F.getAttributes();for(const H in q)if(q[H].location>=0){let pe=W[H];pe===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(pe=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(pe=v.instanceColor));const Se={};Se.attribute=pe,pe&&pe.data&&(Se.data=pe.data),j[H]=Se,V++}r.attributes=j,r.attributesNum=V,r.index=O}function _(){const v=r.newAttributes;for(let P=0,F=v.length;P<F;P++)v[P]=0}function m(v){p(v,0)}function p(v,P){const F=r.newAttributes,O=r.enabledAttributes,j=r.attributeDivisors;F[v]=1,O[v]===0&&(s.enableVertexAttribArray(v),O[v]=1),j[v]!==P&&(s.vertexAttribDivisor(v,P),j[v]=P)}function y(){const v=r.newAttributes,P=r.enabledAttributes;for(let F=0,O=P.length;F<O;F++)P[F]!==v[F]&&(s.disableVertexAttribArray(F),P[F]=0)}function b(v,P,F,O,j,W,V){V===!0?s.vertexAttribIPointer(v,P,F,j,W):s.vertexAttribPointer(v,P,F,O,j,W)}function x(v,P,F,O){_();const j=O.attributes,W=F.getAttributes(),V=P.defaultAttributeValues;for(const q in W){const H=W[q];if(H.location>=0){let re=j[q];if(re===void 0&&(q==="instanceMatrix"&&v.instanceMatrix&&(re=v.instanceMatrix),q==="instanceColor"&&v.instanceColor&&(re=v.instanceColor)),re!==void 0){const pe=re.normalized,Se=re.itemSize,Ve=e.get(re);if(Ve===void 0)continue;const ot=Ve.buffer,Y=Ve.type,ne=Ve.bytesPerElement,Me=Y===s.INT||Y===s.UNSIGNED_INT||re.gpuType===gl;if(re.isInterleavedBufferAttribute){const ae=re.data,Ie=ae.stride,tt=re.offset;if(ae.isInstancedInterleavedBuffer){for(let Le=0;Le<H.locationSize;Le++)p(H.location+Le,ae.meshPerAttribute);v.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Le=0;Le<H.locationSize;Le++)m(H.location+Le);s.bindBuffer(s.ARRAY_BUFFER,ot);for(let Le=0;Le<H.locationSize;Le++)b(H.location+Le,Se/H.locationSize,Y,pe,Ie*ne,(tt+Se/H.locationSize*Le)*ne,Me)}else{if(re.isInstancedBufferAttribute){for(let ae=0;ae<H.locationSize;ae++)p(H.location+ae,re.meshPerAttribute);v.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let ae=0;ae<H.locationSize;ae++)m(H.location+ae);s.bindBuffer(s.ARRAY_BUFFER,ot);for(let ae=0;ae<H.locationSize;ae++)b(H.location+ae,Se/H.locationSize,Y,pe,Se*ne,Se/H.locationSize*ae*ne,Me)}}else if(V!==void 0){const pe=V[q];if(pe!==void 0)switch(pe.length){case 2:s.vertexAttrib2fv(H.location,pe);break;case 3:s.vertexAttrib3fv(H.location,pe);break;case 4:s.vertexAttrib4fv(H.location,pe);break;default:s.vertexAttrib1fv(H.location,pe)}}}}y()}function R(){I();for(const v in n){const P=n[v];for(const F in P){const O=P[F];for(const j in O)h(O[j].object),delete O[j];delete P[F]}delete n[v]}}function A(v){if(n[v.id]===void 0)return;const P=n[v.id];for(const F in P){const O=P[F];for(const j in O)h(O[j].object),delete O[j];delete P[F]}delete n[v.id]}function E(v){for(const P in n){const F=n[P];if(F[v.id]===void 0)continue;const O=F[v.id];for(const j in O)h(O[j].object),delete O[j];delete F[v.id]}}function I(){w(),a=!0,r!==i&&(r=i,c(r.object))}function w(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:I,resetDefaultState:w,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function rg(s,e,t){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,d){d!==0&&(s.drawArraysInstanced(n,c,h,d),t.update(h,n,d))}function o(c,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let f=0;for(let g=0;g<d;g++)f+=h[g];t.update(f,n,1)}function l(c,h,d,u){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],h[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_]*u[_];t.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function ag(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(E){return!(E!==dn&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){const I=E===ps&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==Yn&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==yn&&!I)}function l(E){if(E==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=t.logarithmicDepthBuffer===!0,u=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),b=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,A=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:b,maxFragmentUniforms:x,vertexTextures:R,maxSamples:A}}function og(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new Mi,o=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,p=s.get(d);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{const y=r?0:n,b=y*4;let x=p.clippingState||null;l.value=x,x=h(g,u,b,f);for(let R=0;R!==b;++R)x[R]=t[R];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,y=u.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,x=f;b!==_;++b,x+=4)a.copy(d[b]).applyMatrix4(y,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function lg(s){let e=new WeakMap;function t(a,o){return o===Co?a.mapping=as:o===Ro&&(a.mapping=os),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Co||o===Ro)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Ef(l.height);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const Qi=4,$c=[.125,.215,.35,.446,.526,.582],Ti=20,Xa=new la,Jc=new ge;let ja=null,Ya=0,Ka=0,qa=!1;const bi=(1+Math.sqrt(5))/2,Ki=1/bi,Zc=[new T(-bi,Ki,0),new T(bi,Ki,0),new T(-Ki,0,bi),new T(Ki,0,bi),new T(0,bi,-Ki),new T(0,bi,Ki),new T(-1,1,-1),new T(1,1,-1),new T(-1,1,1),new T(1,1,1)],cg=new T;class Qc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,r={}){const{size:a=256,position:o=cg}=r;ja=this._renderer.getRenderTarget(),Ya=this._renderer.getActiveCubeFace(),Ka=this._renderer.getActiveMipmapLevel(),qa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=th(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ja,Ya,Ka),this._renderer.xr.enabled=qa,e.scissorTest=!1,Ur(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===as||e.mapping===os?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ja=this._renderer.getRenderTarget(),Ya=this._renderer.getActiveCubeFace(),Ka=this._renderer.getActiveMipmapLevel(),qa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:tn,minFilter:tn,generateMipmaps:!1,type:ps,format:dn,colorSpace:Yt,depthBuffer:!1},i=eh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=eh(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=hg(r)),this._blurMaterial=dg(r,e,t)}return i}_compileMaterial(e){const t=new ee(this._lodPlanes[0],e);this._renderer.compile(t,Xa)}_sceneToCubeUV(e,t,n,i,r){const l=new Xt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(Jc),d.toneMapping=Xn,d.autoClear=!1;const g=new dt({name:"PMREM.Background",side:zt,depthWrite:!1,depthTest:!1}),_=new ee(new oe,g);let m=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,m=!0):(g.color.copy(Jc),m=!0);for(let y=0;y<6;y++){const b=y%3;b===0?(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[y],r.y,r.z)):b===1?(l.up.set(0,0,c[y]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[y],r.z)):(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[y]));const x=this._cubeSize;Ur(i,b*x,y>2?x:0,x,x),d.setRenderTarget(i),m&&d.render(_,l),d.render(e,l)}_.geometry.dispose(),_.material.dispose(),d.toneMapping=f,d.autoClear=u,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===as||e.mapping===os;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=nh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=th());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new ee(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Ur(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Xa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Zc[(i-r-1)%Zc.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new ee(this._lodPlanes[i],c),u=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ti-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Ti;m>Ti&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ti}`);const p=[];let y=0;for(let E=0;E<Ti;++E){const I=E/_,w=Math.exp(-I*I/2);p.push(w),E===0?y+=w:E<m&&(y+=2*w)}for(let E=0;E<p.length;E++)p[E]=p[E]/y;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:b}=this;u.dTheta.value=g,u.mipInt.value=b-n;const x=this._sizeLods[i],R=3*x*(i>b-Qi?i-b+Qi:0),A=4*(this._cubeSize-x);Ur(t,R,A,3*x,2*x),l.setRenderTarget(t),l.render(d,Xa)}}function hg(s){const e=[],t=[],n=[];let i=s;const r=s-Qi+1+$c.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>s-Qi?l=$c[a-s+Qi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,_=3,m=2,p=1,y=new Float32Array(_*g*f),b=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let A=0;A<f;A++){const E=A%3*2/3-1,I=A>2?0:-1,w=[E,I,0,E+2/3,I,0,E+2/3,I+1,0,E,I,0,E+2/3,I+1,0,E,I+1,0];y.set(w,_*g*A),b.set(u,m*g*A);const v=[A,A,A,A,A,A];x.set(v,p*g*A)}const R=new It;R.setAttribute("position",new jt(y,_)),R.setAttribute("uv",new jt(b,m)),R.setAttribute("faceIndex",new jt(x,p)),e.push(R),i>Qi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function eh(s,e,t){const n=new li(s,e,t);return n.texture.mapping=oa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ur(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function dg(s,e,t){const n=new Float32Array(Ti),i=new T(0,1,0);return new wn({name:"SphericalGaussianBlur",defines:{n:Ti,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Gl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function th(){return new wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function nh(){return new wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function Gl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ug(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Co||l===Ro,h=l===as||l===os;if(c||h){let d=e.get(o);const u=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return t===null&&(t=new Qc(s)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const f=o.image;return c&&f&&f.height>0||h&&f&&i(f)?(t===null&&(t=new Qc(s)),d=c?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function fg(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Jr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function pg(s,e,t,n){const i={},r=new WeakMap;function a(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete i[u.id];const f=r.get(u);f&&(e.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,t.memory.geometries++),u}function l(d){const u=d.attributes;for(const f in u)e.update(u[f],s.ARRAY_BUFFER)}function c(d){const u=[],f=d.index,g=d.attributes.position;let _=0;if(f!==null){const y=f.array;_=f.version;for(let b=0,x=y.length;b<x;b+=3){const R=y[b+0],A=y[b+1],E=y[b+2];u.push(R,A,A,E,E,R)}}else if(g!==void 0){const y=g.array;_=g.version;for(let b=0,x=y.length/3-1;b<x;b+=3){const R=b+0,A=b+1,E=b+2;u.push(R,A,A,E,E,R)}}else return;const m=new(ud(u)?gd:md)(u,1);m.version=_;const p=r.get(d);p&&e.remove(p),r.set(d,m)}function h(d){const u=r.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function mg(s,e,t){let n;function i(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,f){s.drawElements(n,f,r,u*a),t.update(f,n,1)}function c(u,f,g){g!==0&&(s.drawElementsInstanced(n,f,r,u*a,g),t.update(f,n,g))}function h(u,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function d(u,f,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)c(u[p]/a,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,u,0,_,0,g);let p=0;for(let y=0;y<g;y++)p+=f[y]*_[y];t.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function gg(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function _g(s,e,t){const n=new WeakMap,i=new nt;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==d){let v=function(){I.dispose(),n.delete(o),o.removeEventListener("dispose",v)};var f=v;u!==void 0&&u.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let R=o.attributes.position.count*x,A=1;R>e.maxTextureSize&&(A=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const E=new Float32Array(R*A*4*d),I=new fd(E,R,A,d);I.type=yn,I.needsUpdate=!0;const w=x*4;for(let P=0;P<d;P++){const F=p[P],O=y[P],j=b[P],W=R*A*4*P;for(let V=0;V<F.count;V++){const q=V*w;g===!0&&(i.fromBufferAttribute(F,V),E[W+q+0]=i.x,E[W+q+1]=i.y,E[W+q+2]=i.z,E[W+q+3]=0),_===!0&&(i.fromBufferAttribute(O,V),E[W+q+4]=i.x,E[W+q+5]=i.y,E[W+q+6]=i.z,E[W+q+7]=0),m===!0&&(i.fromBufferAttribute(j,V),E[W+q+8]=i.x,E[W+q+9]=i.y,E[W+q+10]=i.z,E[W+q+11]=j.itemSize===4?i.w:1)}}u={count:d,texture:I,size:new Ce(R,A)},n.set(o,u),o.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function xg(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,d=e.get(l,h);if(i.get(d)!==c&&(e.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;i.get(u)!==c&&(u.update(),i.set(u,c))}return d}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const Dd=new Et,ih=new Ed(1,1),Nd=new fd,kd=new hf,Ud=new yd,sh=[],rh=[],ah=new Float32Array(16),oh=new Float32Array(9),lh=new Float32Array(4);function xs(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=sh[i];if(r===void 0&&(r=new Float32Array(i),sh[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Ct(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Rt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function ca(s,e){let t=rh[e];t===void 0&&(t=new Int32Array(e),rh[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function yg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function vg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;s.uniform2fv(this.addr,e),Rt(t,e)}}function Mg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ct(t,e))return;s.uniform3fv(this.addr,e),Rt(t,e)}}function bg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;s.uniform4fv(this.addr,e),Rt(t,e)}}function wg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Rt(t,e)}else{if(Ct(t,n))return;lh.set(n),s.uniformMatrix2fv(this.addr,!1,lh),Rt(t,n)}}function Sg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Rt(t,e)}else{if(Ct(t,n))return;oh.set(n),s.uniformMatrix3fv(this.addr,!1,oh),Rt(t,n)}}function Tg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Rt(t,e)}else{if(Ct(t,n))return;ah.set(n),s.uniformMatrix4fv(this.addr,!1,ah),Rt(t,n)}}function Eg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Ag(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;s.uniform2iv(this.addr,e),Rt(t,e)}}function Cg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;s.uniform3iv(this.addr,e),Rt(t,e)}}function Rg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;s.uniform4iv(this.addr,e),Rt(t,e)}}function Ig(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Pg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;s.uniform2uiv(this.addr,e),Rt(t,e)}}function Lg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;s.uniform3uiv(this.addr,e),Rt(t,e)}}function Dg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;s.uniform4uiv(this.addr,e),Rt(t,e)}}function Ng(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(ih.compareFunction=dd,r=ih):r=Dd,t.setTexture2D(e||r,i)}function kg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||kd,i)}function Ug(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Ud,i)}function Fg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Nd,i)}function Bg(s){switch(s){case 5126:return yg;case 35664:return vg;case 35665:return Mg;case 35666:return bg;case 35674:return wg;case 35675:return Sg;case 35676:return Tg;case 5124:case 35670:return Eg;case 35667:case 35671:return Ag;case 35668:case 35672:return Cg;case 35669:case 35673:return Rg;case 5125:return Ig;case 36294:return Pg;case 36295:return Lg;case 36296:return Dg;case 35678:case 36198:case 36298:case 36306:case 35682:return Ng;case 35679:case 36299:case 36307:return kg;case 35680:case 36300:case 36308:case 36293:return Ug;case 36289:case 36303:case 36311:case 36292:return Fg}}function Og(s,e){s.uniform1fv(this.addr,e)}function zg(s,e){const t=xs(e,this.size,2);s.uniform2fv(this.addr,t)}function Hg(s,e){const t=xs(e,this.size,3);s.uniform3fv(this.addr,t)}function Gg(s,e){const t=xs(e,this.size,4);s.uniform4fv(this.addr,t)}function Vg(s,e){const t=xs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Wg(s,e){const t=xs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Xg(s,e){const t=xs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function jg(s,e){s.uniform1iv(this.addr,e)}function Yg(s,e){s.uniform2iv(this.addr,e)}function Kg(s,e){s.uniform3iv(this.addr,e)}function qg(s,e){s.uniform4iv(this.addr,e)}function $g(s,e){s.uniform1uiv(this.addr,e)}function Jg(s,e){s.uniform2uiv(this.addr,e)}function Zg(s,e){s.uniform3uiv(this.addr,e)}function Qg(s,e){s.uniform4uiv(this.addr,e)}function e_(s,e,t){const n=this.cache,i=e.length,r=ca(t,i);Ct(n,r)||(s.uniform1iv(this.addr,r),Rt(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Dd,r[a])}function t_(s,e,t){const n=this.cache,i=e.length,r=ca(t,i);Ct(n,r)||(s.uniform1iv(this.addr,r),Rt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||kd,r[a])}function n_(s,e,t){const n=this.cache,i=e.length,r=ca(t,i);Ct(n,r)||(s.uniform1iv(this.addr,r),Rt(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Ud,r[a])}function i_(s,e,t){const n=this.cache,i=e.length,r=ca(t,i);Ct(n,r)||(s.uniform1iv(this.addr,r),Rt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Nd,r[a])}function s_(s){switch(s){case 5126:return Og;case 35664:return zg;case 35665:return Hg;case 35666:return Gg;case 35674:return Vg;case 35675:return Wg;case 35676:return Xg;case 5124:case 35670:return jg;case 35667:case 35671:return Yg;case 35668:case 35672:return Kg;case 35669:case 35673:return qg;case 5125:return $g;case 36294:return Jg;case 36295:return Zg;case 36296:return Qg;case 35678:case 36198:case 36298:case 36306:case 35682:return e_;case 35679:case 36299:case 36307:return t_;case 35680:case 36300:case 36308:case 36293:return n_;case 36289:case 36303:case 36311:case 36292:return i_}}class r_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Bg(t.type)}}class a_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=s_(t.type)}}class o_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const $a=/(\w+)(\])?(\[|\.)?/g;function ch(s,e){s.seq.push(e),s.map[e.id]=e}function l_(s,e,t){const n=s.name,i=n.length;for($a.lastIndex=0;;){const r=$a.exec(n),a=$a.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){ch(t,c===void 0?new r_(o,s,e):new a_(o,s,e));break}else{let d=t.map[o];d===void 0&&(d=new o_(o),ch(t,d)),t=d}}}class Qr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);l_(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function hh(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const c_=37297;let h_=0;function d_(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const dh=new ze;function u_(s){Ye._getMatrix(dh,Ye.workingColorSpace,s);const e=`mat3( ${dh.elements.map(t=>t.toFixed(4))} )`;switch(Ye.getTransfer(s)){case ia:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function uh(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+d_(s.getShaderSource(e),a)}else return i}function f_(s,e){const t=u_(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function p_(s,e){let t;switch(e){case Wh:t="Linear";break;case Xh:t="Reinhard";break;case jh:t="Cineon";break;case Yh:t="ACESFilmic";break;case qh:t="AgX";break;case $h:t="Neutral";break;case Kh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Fr=new T;function m_(){Ye.getLuminanceCoefficients(Fr);const s=Fr.x.toFixed(4),e=Fr.y.toFixed(4),t=Fr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function g_(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ns).join(`
`)}function __(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function x_(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Ns(s){return s!==""}function fh(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ph(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const y_=/^[ \t]*#include +<([\w\d./]+)>/gm;function cl(s){return s.replace(y_,M_)}const v_=new Map;function M_(s,e){let t=Ge[e];if(t===void 0){const n=v_.get(e);if(n!==void 0)t=Ge[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return cl(t)}const b_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mh(s){return s.replace(b_,w_)}function w_(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function gh(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function S_(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Hh?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Gh?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===On&&(e="SHADOWMAP_TYPE_VSM"),e}function T_(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case as:case os:e="ENVMAP_TYPE_CUBE";break;case oa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function E_(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case os:e="ENVMAP_MODE_REFRACTION";break}return e}function A_(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Vh:e="ENVMAP_BLENDING_MULTIPLY";break;case bu:e="ENVMAP_BLENDING_MIX";break;case wu:e="ENVMAP_BLENDING_ADD";break}return e}function C_(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function R_(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=S_(t),c=T_(t),h=E_(t),d=A_(t),u=C_(t),f=g_(t),g=__(r),_=i.createProgram();let m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ns).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ns).join(`
`),p.length>0&&(p+=`
`)):(m=[gh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ns).join(`
`),p=[gh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Xn?"#define TONE_MAPPING":"",t.toneMapping!==Xn?Ge.tonemapping_pars_fragment:"",t.toneMapping!==Xn?p_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,f_("linearToOutputTexel",t.outputColorSpace),m_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ns).join(`
`)),a=cl(a),a=fh(a,t),a=ph(a,t),o=cl(o),o=fh(o,t),o=ph(o,t),a=mh(a),o=mh(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===oc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===oc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=y+m+a,x=y+p+o,R=hh(i,i.VERTEX_SHADER,b),A=hh(i,i.FRAGMENT_SHADER,x);i.attachShader(_,R),i.attachShader(_,A),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function E(P){if(s.debug.checkShaderErrors){const F=i.getProgramInfoLog(_).trim(),O=i.getShaderInfoLog(R).trim(),j=i.getShaderInfoLog(A).trim();let W=!0,V=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(W=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,R,A);else{const q=uh(i,R,"vertex"),H=uh(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+F+`
`+q+`
`+H)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(O===""||j==="")&&(V=!1);V&&(P.diagnostics={runnable:W,programLog:F,vertexShader:{log:O,prefix:m},fragmentShader:{log:j,prefix:p}})}i.deleteShader(R),i.deleteShader(A),I=new Qr(i,_),w=x_(i,_)}let I;this.getUniforms=function(){return I===void 0&&E(this),I};let w;this.getAttributes=function(){return w===void 0&&E(this),w};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(_,c_)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=h_++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=A,this}let I_=0;class P_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new L_(e),t.set(e,n)),n}}class L_{constructor(e){this.id=I_++,this.code=e,this.usedTimes=0}}function D_(s,e,t,n,i,r,a){const o=new Al,l=new P_,c=new Set,h=[],d=i.logarithmicDepthBuffer,u=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,v,P,F,O){const j=F.fog,W=O.geometry,V=w.isMeshStandardMaterial?F.environment:null,q=(w.isMeshStandardMaterial?t:e).get(w.envMap||V),H=q&&q.mapping===oa?q.image.height:null,re=g[w.type];w.precision!==null&&(f=i.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));const pe=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Se=pe!==void 0?pe.length:0;let Ve=0;W.morphAttributes.position!==void 0&&(Ve=1),W.morphAttributes.normal!==void 0&&(Ve=2),W.morphAttributes.color!==void 0&&(Ve=3);let ot,Y,ne,Me;if(re){const lt=En[re];ot=lt.vertexShader,Y=lt.fragmentShader}else ot=w.vertexShader,Y=w.fragmentShader,l.update(w),ne=l.getVertexShaderID(w),Me=l.getFragmentShaderID(w);const ae=s.getRenderTarget(),Ie=s.state.buffers.depth.getReversed(),tt=O.isInstancedMesh===!0,Le=O.isBatchedMesh===!0,Mt=!!w.map,xt=!!w.matcap,Ke=!!q,L=!!w.aoMap,sn=!!w.lightMap,Je=!!w.bumpMap,qe=!!w.normalMap,Ee=!!w.displacementMap,gt=!!w.emissiveMap,Te=!!w.metalnessMap,C=!!w.roughnessMap,M=w.anisotropy>0,B=w.clearcoat>0,$=w.dispersion>0,Q=w.iridescence>0,K=w.sheen>0,be=w.transmission>0,he=M&&!!w.anisotropyMap,_e=B&&!!w.clearcoatMap,Ze=B&&!!w.clearcoatNormalMap,ie=B&&!!w.clearcoatRoughnessMap,xe=Q&&!!w.iridescenceMap,Pe=Q&&!!w.iridescenceThicknessMap,ke=K&&!!w.sheenColorMap,ye=K&&!!w.sheenRoughnessMap,$e=!!w.specularMap,He=!!w.specularColorMap,pt=!!w.specularIntensityMap,D=be&&!!w.transmissionMap,de=be&&!!w.thicknessMap,X=!!w.gradientMap,J=!!w.alphaMap,fe=w.alphaTest>0,ue=!!w.alphaHash,Oe=!!w.extensions;let yt=Xn;w.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(yt=s.toneMapping);const Ft={shaderID:re,shaderType:w.type,shaderName:w.name,vertexShader:ot,fragmentShader:Y,defines:w.defines,customVertexShaderID:ne,customFragmentShaderID:Me,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:Le,batchingColor:Le&&O._colorsTexture!==null,instancing:tt,instancingColor:tt&&O.instanceColor!==null,instancingMorph:tt&&O.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:ae===null?s.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:Yt,alphaToCoverage:!!w.alphaToCoverage,map:Mt,matcap:xt,envMap:Ke,envMapMode:Ke&&q.mapping,envMapCubeUVHeight:H,aoMap:L,lightMap:sn,bumpMap:Je,normalMap:qe,displacementMap:u&&Ee,emissiveMap:gt,normalMapObjectSpace:qe&&w.normalMapType===Iu,normalMapTangentSpace:qe&&w.normalMapType===Sl,metalnessMap:Te,roughnessMap:C,anisotropy:M,anisotropyMap:he,clearcoat:B,clearcoatMap:_e,clearcoatNormalMap:Ze,clearcoatRoughnessMap:ie,dispersion:$,iridescence:Q,iridescenceMap:xe,iridescenceThicknessMap:Pe,sheen:K,sheenColorMap:ke,sheenRoughnessMap:ye,specularMap:$e,specularColorMap:He,specularIntensityMap:pt,transmission:be,transmissionMap:D,thicknessMap:de,gradientMap:X,opaque:w.transparent===!1&&w.blending===ns&&w.alphaToCoverage===!1,alphaMap:J,alphaTest:fe,alphaHash:ue,combine:w.combine,mapUv:Mt&&_(w.map.channel),aoMapUv:L&&_(w.aoMap.channel),lightMapUv:sn&&_(w.lightMap.channel),bumpMapUv:Je&&_(w.bumpMap.channel),normalMapUv:qe&&_(w.normalMap.channel),displacementMapUv:Ee&&_(w.displacementMap.channel),emissiveMapUv:gt&&_(w.emissiveMap.channel),metalnessMapUv:Te&&_(w.metalnessMap.channel),roughnessMapUv:C&&_(w.roughnessMap.channel),anisotropyMapUv:he&&_(w.anisotropyMap.channel),clearcoatMapUv:_e&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:Ze&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:Pe&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:ye&&_(w.sheenRoughnessMap.channel),specularMapUv:$e&&_(w.specularMap.channel),specularColorMapUv:He&&_(w.specularColorMap.channel),specularIntensityMapUv:pt&&_(w.specularIntensityMap.channel),transmissionMapUv:D&&_(w.transmissionMap.channel),thicknessMapUv:de&&_(w.thicknessMap.channel),alphaMapUv:J&&_(w.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(qe||M),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!W.attributes.uv&&(Mt||J),fog:!!j,useFog:w.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Ie,skinning:O.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:Ve,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:yt,decodeVideoTexture:Mt&&w.map.isVideoTexture===!0&&Ye.getTransfer(w.map.colorSpace)===ct,decodeVideoTextureEmissive:gt&&w.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(w.emissiveMap.colorSpace)===ct,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===cn,flipSided:w.side===zt,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Oe&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Oe&&w.extensions.multiDraw===!0||Le)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ft.vertexUv1s=c.has(1),Ft.vertexUv2s=c.has(2),Ft.vertexUv3s=c.has(3),c.clear(),Ft}function p(w){const v=[];if(w.shaderID?v.push(w.shaderID):(v.push(w.customVertexShaderID),v.push(w.customFragmentShaderID)),w.defines!==void 0)for(const P in w.defines)v.push(P),v.push(w.defines[P]);return w.isRawShaderMaterial===!1&&(y(v,w),b(v,w),v.push(s.outputColorSpace)),v.push(w.customProgramCacheKey),v.join()}function y(w,v){w.push(v.precision),w.push(v.outputColorSpace),w.push(v.envMapMode),w.push(v.envMapCubeUVHeight),w.push(v.mapUv),w.push(v.alphaMapUv),w.push(v.lightMapUv),w.push(v.aoMapUv),w.push(v.bumpMapUv),w.push(v.normalMapUv),w.push(v.displacementMapUv),w.push(v.emissiveMapUv),w.push(v.metalnessMapUv),w.push(v.roughnessMapUv),w.push(v.anisotropyMapUv),w.push(v.clearcoatMapUv),w.push(v.clearcoatNormalMapUv),w.push(v.clearcoatRoughnessMapUv),w.push(v.iridescenceMapUv),w.push(v.iridescenceThicknessMapUv),w.push(v.sheenColorMapUv),w.push(v.sheenRoughnessMapUv),w.push(v.specularMapUv),w.push(v.specularColorMapUv),w.push(v.specularIntensityMapUv),w.push(v.transmissionMapUv),w.push(v.thicknessMapUv),w.push(v.combine),w.push(v.fogExp2),w.push(v.sizeAttenuation),w.push(v.morphTargetsCount),w.push(v.morphAttributeCount),w.push(v.numDirLights),w.push(v.numPointLights),w.push(v.numSpotLights),w.push(v.numSpotLightMaps),w.push(v.numHemiLights),w.push(v.numRectAreaLights),w.push(v.numDirLightShadows),w.push(v.numPointLightShadows),w.push(v.numSpotLightShadows),w.push(v.numSpotLightShadowsWithMaps),w.push(v.numLightProbes),w.push(v.shadowMapType),w.push(v.toneMapping),w.push(v.numClippingPlanes),w.push(v.numClipIntersection),w.push(v.depthPacking)}function b(w,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),v.batchingColor&&o.enable(21),w.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reverseDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),w.push(o.mask)}function x(w){const v=g[w.type];let P;if(v){const F=En[v];P=Cl.clone(F.uniforms)}else P=w.uniforms;return P}function R(w,v){let P;for(let F=0,O=h.length;F<O;F++){const j=h[F];if(j.cacheKey===v){P=j,++P.usedTimes;break}}return P===void 0&&(P=new R_(s,v,w,r),h.push(P)),P}function A(w){if(--w.usedTimes===0){const v=h.indexOf(w);h[v]=h[h.length-1],h.pop(),w.destroy()}}function E(w){l.remove(w)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:R,releaseProgram:A,releaseShaderCache:E,programs:h,dispose:I}}function N_(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function k_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function _h(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function xh(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(d,u,f,g,_,m){let p=s[e];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},s[e]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=_,p.group=m),e++,p}function o(d,u,f,g,_,m){const p=a(d,u,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function l(d,u,f,g,_,m){const p=a(d,u,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function c(d,u){t.length>1&&t.sort(d||k_),n.length>1&&n.sort(u||_h),i.length>1&&i.sort(u||_h)}function h(){for(let d=e,u=s.length;d<u;d++){const f=s[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function U_(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new xh,s.set(n,[a])):i>=r.length?(a=new xh,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function F_(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new T,color:new ge};break;case"SpotLight":t={position:new T,direction:new T,color:new ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new T,color:new ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new T,skyColor:new ge,groundColor:new ge};break;case"RectAreaLight":t={color:new ge,position:new T,halfWidth:new T,halfHeight:new T};break}return s[e.id]=t,t}}}function B_(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let O_=0;function z_(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function H_(s){const e=new F_,t=B_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new T);const i=new T,r=new Fe,a=new Fe;function o(c){let h=0,d=0,u=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,y=0,b=0,x=0,R=0,A=0,E=0;c.sort(z_);for(let w=0,v=c.length;w<v;w++){const P=c[w],F=P.color,O=P.intensity,j=P.distance,W=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=F.r*O,d+=F.g*O,u+=F.b*O;else if(P.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(P.sh.coefficients[V],O);E++}else if(P.isDirectionalLight){const V=e.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const q=P.shadow,H=t.get(P);H.shadowIntensity=q.intensity,H.shadowBias=q.bias,H.shadowNormalBias=q.normalBias,H.shadowRadius=q.radius,H.shadowMapSize=q.mapSize,n.directionalShadow[f]=H,n.directionalShadowMap[f]=W,n.directionalShadowMatrix[f]=P.shadow.matrix,y++}n.directional[f]=V,f++}else if(P.isSpotLight){const V=e.get(P);V.position.setFromMatrixPosition(P.matrixWorld),V.color.copy(F).multiplyScalar(O),V.distance=j,V.coneCos=Math.cos(P.angle),V.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),V.decay=P.decay,n.spot[_]=V;const q=P.shadow;if(P.map&&(n.spotLightMap[R]=P.map,R++,q.updateMatrices(P),P.castShadow&&A++),n.spotLightMatrix[_]=q.matrix,P.castShadow){const H=t.get(P);H.shadowIntensity=q.intensity,H.shadowBias=q.bias,H.shadowNormalBias=q.normalBias,H.shadowRadius=q.radius,H.shadowMapSize=q.mapSize,n.spotShadow[_]=H,n.spotShadowMap[_]=W,x++}_++}else if(P.isRectAreaLight){const V=e.get(P);V.color.copy(F).multiplyScalar(O),V.halfWidth.set(P.width*.5,0,0),V.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=V,m++}else if(P.isPointLight){const V=e.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),V.distance=P.distance,V.decay=P.decay,P.castShadow){const q=P.shadow,H=t.get(P);H.shadowIntensity=q.intensity,H.shadowBias=q.bias,H.shadowNormalBias=q.normalBias,H.shadowRadius=q.radius,H.shadowMapSize=q.mapSize,H.shadowCameraNear=q.camera.near,H.shadowCameraFar=q.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=W,n.pointShadowMatrix[g]=P.shadow.matrix,b++}n.point[g]=V,g++}else if(P.isHemisphereLight){const V=e.get(P);V.skyColor.copy(P.color).multiplyScalar(O),V.groundColor.copy(P.groundColor).multiplyScalar(O),n.hemi[p]=V,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=le.LTC_FLOAT_1,n.rectAreaLTC2=le.LTC_FLOAT_2):(n.rectAreaLTC1=le.LTC_HALF_1,n.rectAreaLTC2=le.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const I=n.hash;(I.directionalLength!==f||I.pointLength!==g||I.spotLength!==_||I.rectAreaLength!==m||I.hemiLength!==p||I.numDirectionalShadows!==y||I.numPointShadows!==b||I.numSpotShadows!==x||I.numSpotMaps!==R||I.numLightProbes!==E)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=x+R-A,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=E,I.directionalLength=f,I.pointLength=g,I.spotLength=_,I.rectAreaLength=m,I.hemiLength=p,I.numDirectionalShadows=y,I.numPointShadows=b,I.numSpotShadows=x,I.numSpotMaps=R,I.numLightProbes=E,n.version=O_++)}function l(c,h){let d=0,u=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const b=c[p];if(b.isDirectionalLight){const x=n.directional[d];x.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),d++}else if(b.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),f++}else if(b.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),a.identity(),r.copy(b.matrixWorld),r.premultiply(m),a.extractRotation(r),x.halfWidth.set(b.width*.5,0,0),x.halfHeight.set(0,b.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){const x=n.point[u];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),u++}else if(b.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(b.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function yh(s){const e=new H_(s),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function G_(s){let e=new WeakMap;function t(i,r=0){const a=e.get(i);let o;return a===void 0?(o=new yh(s),e.set(i,[o])):r>=a.length?(o=new yh(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const V_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,W_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function X_(s,e,t){let n=new Pl;const i=new Ce,r=new Ce,a=new nt,o=new zf({depthPacking:Ru}),l=new Hf,c={},h=t.maxTextureSize,d={[An]:zt,[zt]:An,[cn]:cn},u=new wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ce},radius:{value:4}},vertexShader:V_,fragmentShader:W_}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new It;g.setAttribute("position",new jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ee(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hh;let p=this.type;this.render=function(A,E,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const w=s.getRenderTarget(),v=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),F=s.state;F.setBlending(Wn),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const O=p!==On&&this.type===On,j=p===On&&this.type!==On;for(let W=0,V=A.length;W<V;W++){const q=A[W],H=q.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const re=H.getFrameExtents();if(i.multiply(re),r.copy(H.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/re.x),i.x=r.x*re.x,H.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/re.y),i.y=r.y*re.y,H.mapSize.y=r.y)),H.map===null||O===!0||j===!0){const Se=this.type!==On?{minFilter:Ut,magFilter:Ut}:{};H.map!==null&&H.map.dispose(),H.map=new li(i.x,i.y,Se),H.map.texture.name=q.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();const pe=H.getViewportCount();for(let Se=0;Se<pe;Se++){const Ve=H.getViewport(Se);a.set(r.x*Ve.x,r.y*Ve.y,r.x*Ve.z,r.y*Ve.w),F.viewport(a),H.updateMatrices(q,Se),n=H.getFrustum(),x(E,I,H.camera,q,this.type)}H.isPointLightShadow!==!0&&this.type===On&&y(H,I),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(w,v,P)};function y(A,E){const I=e.update(_);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new li(i.x,i.y)),u.uniforms.shadow_pass.value=A.map.texture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(E,null,I,u,_,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(E,null,I,f,_,null)}function b(A,E,I,w){let v=null;const P=I.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)v=P;else if(v=I.isPointLight===!0?l:o,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const F=v.uuid,O=E.uuid;let j=c[F];j===void 0&&(j={},c[F]=j);let W=j[O];W===void 0&&(W=v.clone(),j[O]=W,E.addEventListener("dispose",R)),v=W}if(v.visible=E.visible,v.wireframe=E.wireframe,w===On?v.side=E.shadowSide!==null?E.shadowSide:E.side:v.side=E.shadowSide!==null?E.shadowSide:d[E.side],v.alphaMap=E.alphaMap,v.alphaTest=E.alphaTest,v.map=E.map,v.clipShadows=E.clipShadows,v.clippingPlanes=E.clippingPlanes,v.clipIntersection=E.clipIntersection,v.displacementMap=E.displacementMap,v.displacementScale=E.displacementScale,v.displacementBias=E.displacementBias,v.wireframeLinewidth=E.wireframeLinewidth,v.linewidth=E.linewidth,I.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const F=s.properties.get(v);F.light=I}return v}function x(A,E,I,w,v){if(A.visible===!1)return;if(A.layers.test(E.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&v===On)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,A.matrixWorld);const O=e.update(A),j=A.material;if(Array.isArray(j)){const W=O.groups;for(let V=0,q=W.length;V<q;V++){const H=W[V],re=j[H.materialIndex];if(re&&re.visible){const pe=b(A,re,w,v);A.onBeforeShadow(s,A,E,I,O,pe,H),s.renderBufferDirect(I,null,O,pe,A,H),A.onAfterShadow(s,A,E,I,O,pe,H)}}}else if(j.visible){const W=b(A,j,w,v);A.onBeforeShadow(s,A,E,I,O,W,null),s.renderBufferDirect(I,null,O,W,A,null),A.onAfterShadow(s,A,E,I,O,W,null)}}const F=A.children;for(let O=0,j=F.length;O<j;O++)x(F[O],E,I,w,v)}function R(A){A.target.removeEventListener("dispose",R);for(const I in c){const w=c[I],v=A.target.uuid;v in w&&(w[v].dispose(),delete w[v])}}}const j_={[Mo]:bo,[wo]:Eo,[So]:Ao,[rs]:To,[bo]:Mo,[Eo]:wo,[Ao]:So,[To]:rs};function Y_(s,e){function t(){let D=!1;const de=new nt;let X=null;const J=new nt(0,0,0,0);return{setMask:function(fe){X!==fe&&!D&&(s.colorMask(fe,fe,fe,fe),X=fe)},setLocked:function(fe){D=fe},setClear:function(fe,ue,Oe,yt,Ft){Ft===!0&&(fe*=yt,ue*=yt,Oe*=yt),de.set(fe,ue,Oe,yt),J.equals(de)===!1&&(s.clearColor(fe,ue,Oe,yt),J.copy(de))},reset:function(){D=!1,X=null,J.set(-1,0,0,0)}}}function n(){let D=!1,de=!1,X=null,J=null,fe=null;return{setReversed:function(ue){if(de!==ue){const Oe=e.get("EXT_clip_control");ue?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT),de=ue;const yt=fe;fe=null,this.setClear(yt)}},getReversed:function(){return de},setTest:function(ue){ue?ae(s.DEPTH_TEST):Ie(s.DEPTH_TEST)},setMask:function(ue){X!==ue&&!D&&(s.depthMask(ue),X=ue)},setFunc:function(ue){if(de&&(ue=j_[ue]),J!==ue){switch(ue){case Mo:s.depthFunc(s.NEVER);break;case bo:s.depthFunc(s.ALWAYS);break;case wo:s.depthFunc(s.LESS);break;case rs:s.depthFunc(s.LEQUAL);break;case So:s.depthFunc(s.EQUAL);break;case To:s.depthFunc(s.GEQUAL);break;case Eo:s.depthFunc(s.GREATER);break;case Ao:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}J=ue}},setLocked:function(ue){D=ue},setClear:function(ue){fe!==ue&&(de&&(ue=1-ue),s.clearDepth(ue),fe=ue)},reset:function(){D=!1,X=null,J=null,fe=null,de=!1}}}function i(){let D=!1,de=null,X=null,J=null,fe=null,ue=null,Oe=null,yt=null,Ft=null;return{setTest:function(lt){D||(lt?ae(s.STENCIL_TEST):Ie(s.STENCIL_TEST))},setMask:function(lt){de!==lt&&!D&&(s.stencilMask(lt),de=lt)},setFunc:function(lt,fn,Ln){(X!==lt||J!==fn||fe!==Ln)&&(s.stencilFunc(lt,fn,Ln),X=lt,J=fn,fe=Ln)},setOp:function(lt,fn,Ln){(ue!==lt||Oe!==fn||yt!==Ln)&&(s.stencilOp(lt,fn,Ln),ue=lt,Oe=fn,yt=Ln)},setLocked:function(lt){D=lt},setClear:function(lt){Ft!==lt&&(s.clearStencil(lt),Ft=lt)},reset:function(){D=!1,de=null,X=null,J=null,fe=null,ue=null,Oe=null,yt=null,Ft=null}}}const r=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let h={},d={},u=new WeakMap,f=[],g=null,_=!1,m=null,p=null,y=null,b=null,x=null,R=null,A=null,E=new ge(0,0,0),I=0,w=!1,v=null,P=null,F=null,O=null,j=null;const W=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,q=0;const H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(H)[1]),V=q>=1):H.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),V=q>=2);let re=null,pe={};const Se=s.getParameter(s.SCISSOR_BOX),Ve=s.getParameter(s.VIEWPORT),ot=new nt().fromArray(Se),Y=new nt().fromArray(Ve);function ne(D,de,X,J){const fe=new Uint8Array(4),ue=s.createTexture();s.bindTexture(D,ue),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Oe=0;Oe<X;Oe++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(de,0,s.RGBA,1,1,J,0,s.RGBA,s.UNSIGNED_BYTE,fe):s.texImage2D(de+Oe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,fe);return ue}const Me={};Me[s.TEXTURE_2D]=ne(s.TEXTURE_2D,s.TEXTURE_2D,1),Me[s.TEXTURE_CUBE_MAP]=ne(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[s.TEXTURE_2D_ARRAY]=ne(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Me[s.TEXTURE_3D]=ne(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ae(s.DEPTH_TEST),a.setFunc(rs),Je(!1),qe(tc),ae(s.CULL_FACE),L(Wn);function ae(D){h[D]!==!0&&(s.enable(D),h[D]=!0)}function Ie(D){h[D]!==!1&&(s.disable(D),h[D]=!1)}function tt(D,de){return d[D]!==de?(s.bindFramebuffer(D,de),d[D]=de,D===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=de),D===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=de),!0):!1}function Le(D,de){let X=f,J=!1;if(D){X=u.get(de),X===void 0&&(X=[],u.set(de,X));const fe=D.textures;if(X.length!==fe.length||X[0]!==s.COLOR_ATTACHMENT0){for(let ue=0,Oe=fe.length;ue<Oe;ue++)X[ue]=s.COLOR_ATTACHMENT0+ue;X.length=fe.length,J=!0}}else X[0]!==s.BACK&&(X[0]=s.BACK,J=!0);J&&s.drawBuffers(X)}function Mt(D){return g!==D?(s.useProgram(D),g=D,!0):!1}const xt={[wi]:s.FUNC_ADD,[ru]:s.FUNC_SUBTRACT,[au]:s.FUNC_REVERSE_SUBTRACT};xt[ou]=s.MIN,xt[lu]=s.MAX;const Ke={[cu]:s.ZERO,[hu]:s.ONE,[du]:s.SRC_COLOR,[yo]:s.SRC_ALPHA,[_u]:s.SRC_ALPHA_SATURATE,[mu]:s.DST_COLOR,[fu]:s.DST_ALPHA,[uu]:s.ONE_MINUS_SRC_COLOR,[vo]:s.ONE_MINUS_SRC_ALPHA,[gu]:s.ONE_MINUS_DST_COLOR,[pu]:s.ONE_MINUS_DST_ALPHA,[xu]:s.CONSTANT_COLOR,[yu]:s.ONE_MINUS_CONSTANT_COLOR,[vu]:s.CONSTANT_ALPHA,[Mu]:s.ONE_MINUS_CONSTANT_ALPHA};function L(D,de,X,J,fe,ue,Oe,yt,Ft,lt){if(D===Wn){_===!0&&(Ie(s.BLEND),_=!1);return}if(_===!1&&(ae(s.BLEND),_=!0),D!==su){if(D!==m||lt!==w){if((p!==wi||x!==wi)&&(s.blendEquation(s.FUNC_ADD),p=wi,x=wi),lt)switch(D){case ns:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case nc:s.blendFunc(s.ONE,s.ONE);break;case ic:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case sc:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case ns:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case nc:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case ic:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case sc:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}y=null,b=null,R=null,A=null,E.set(0,0,0),I=0,m=D,w=lt}return}fe=fe||de,ue=ue||X,Oe=Oe||J,(de!==p||fe!==x)&&(s.blendEquationSeparate(xt[de],xt[fe]),p=de,x=fe),(X!==y||J!==b||ue!==R||Oe!==A)&&(s.blendFuncSeparate(Ke[X],Ke[J],Ke[ue],Ke[Oe]),y=X,b=J,R=ue,A=Oe),(yt.equals(E)===!1||Ft!==I)&&(s.blendColor(yt.r,yt.g,yt.b,Ft),E.copy(yt),I=Ft),m=D,w=!1}function sn(D,de){D.side===cn?Ie(s.CULL_FACE):ae(s.CULL_FACE);let X=D.side===zt;de&&(X=!X),Je(X),D.blending===ns&&D.transparent===!1?L(Wn):L(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);const J=D.stencilWrite;o.setTest(J),J&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),gt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ae(s.SAMPLE_ALPHA_TO_COVERAGE):Ie(s.SAMPLE_ALPHA_TO_COVERAGE)}function Je(D){v!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),v=D)}function qe(D){D!==nu?(ae(s.CULL_FACE),D!==P&&(D===tc?s.cullFace(s.BACK):D===iu?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ie(s.CULL_FACE),P=D}function Ee(D){D!==F&&(V&&s.lineWidth(D),F=D)}function gt(D,de,X){D?(ae(s.POLYGON_OFFSET_FILL),(O!==de||j!==X)&&(s.polygonOffset(de,X),O=de,j=X)):Ie(s.POLYGON_OFFSET_FILL)}function Te(D){D?ae(s.SCISSOR_TEST):Ie(s.SCISSOR_TEST)}function C(D){D===void 0&&(D=s.TEXTURE0+W-1),re!==D&&(s.activeTexture(D),re=D)}function M(D,de,X){X===void 0&&(re===null?X=s.TEXTURE0+W-1:X=re);let J=pe[X];J===void 0&&(J={type:void 0,texture:void 0},pe[X]=J),(J.type!==D||J.texture!==de)&&(re!==X&&(s.activeTexture(X),re=X),s.bindTexture(D,de||Me[D]),J.type=D,J.texture=de)}function B(){const D=pe[re];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function $(){try{s.compressedTexImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{s.compressedTexImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function K(){try{s.texSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function be(){try{s.texSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function he(){try{s.compressedTexSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function _e(){try{s.compressedTexSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ze(){try{s.texStorage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ie(){try{s.texStorage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xe(){try{s.texImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Pe(){try{s.texImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ke(D){ot.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),ot.copy(D))}function ye(D){Y.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),Y.copy(D))}function $e(D,de){let X=c.get(de);X===void 0&&(X=new WeakMap,c.set(de,X));let J=X.get(D);J===void 0&&(J=s.getUniformBlockIndex(de,D.name),X.set(D,J))}function He(D,de){const J=c.get(de).get(D);l.get(de)!==J&&(s.uniformBlockBinding(de,J,D.__bindingPointIndex),l.set(de,J))}function pt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},re=null,pe={},d={},u=new WeakMap,f=[],g=null,_=!1,m=null,p=null,y=null,b=null,x=null,R=null,A=null,E=new ge(0,0,0),I=0,w=!1,v=null,P=null,F=null,O=null,j=null,ot.set(0,0,s.canvas.width,s.canvas.height),Y.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ae,disable:Ie,bindFramebuffer:tt,drawBuffers:Le,useProgram:Mt,setBlending:L,setMaterial:sn,setFlipSided:Je,setCullFace:qe,setLineWidth:Ee,setPolygonOffset:gt,setScissorTest:Te,activeTexture:C,bindTexture:M,unbindTexture:B,compressedTexImage2D:$,compressedTexImage3D:Q,texImage2D:xe,texImage3D:Pe,updateUBOMapping:$e,uniformBlockBinding:He,texStorage2D:Ze,texStorage3D:ie,texSubImage2D:K,texSubImage3D:be,compressedTexSubImage2D:he,compressedTexSubImage3D:_e,scissor:ke,viewport:ye,reset:pt}}function K_(s,e,t,n,i,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ce,h=new WeakMap;let d;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,M){return f?new OffscreenCanvas(C,M):qs("canvas")}function _(C,M,B){let $=1;const Q=Te(C);if((Q.width>B||Q.height>B)&&($=B/Math.max(Q.width,Q.height)),$<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const K=Math.floor($*Q.width),be=Math.floor($*Q.height);d===void 0&&(d=g(K,be));const he=M?g(K,be):d;return he.width=K,he.height=be,he.getContext("2d").drawImage(C,0,0,K,be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+K+"x"+be+")."),he}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){s.generateMipmap(C)}function y(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function b(C,M,B,$,Q=!1){if(C!==null){if(s[C]!==void 0)return s[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let K=M;if(M===s.RED&&(B===s.FLOAT&&(K=s.R32F),B===s.HALF_FLOAT&&(K=s.R16F),B===s.UNSIGNED_BYTE&&(K=s.R8)),M===s.RED_INTEGER&&(B===s.UNSIGNED_BYTE&&(K=s.R8UI),B===s.UNSIGNED_SHORT&&(K=s.R16UI),B===s.UNSIGNED_INT&&(K=s.R32UI),B===s.BYTE&&(K=s.R8I),B===s.SHORT&&(K=s.R16I),B===s.INT&&(K=s.R32I)),M===s.RG&&(B===s.FLOAT&&(K=s.RG32F),B===s.HALF_FLOAT&&(K=s.RG16F),B===s.UNSIGNED_BYTE&&(K=s.RG8)),M===s.RG_INTEGER&&(B===s.UNSIGNED_BYTE&&(K=s.RG8UI),B===s.UNSIGNED_SHORT&&(K=s.RG16UI),B===s.UNSIGNED_INT&&(K=s.RG32UI),B===s.BYTE&&(K=s.RG8I),B===s.SHORT&&(K=s.RG16I),B===s.INT&&(K=s.RG32I)),M===s.RGB_INTEGER&&(B===s.UNSIGNED_BYTE&&(K=s.RGB8UI),B===s.UNSIGNED_SHORT&&(K=s.RGB16UI),B===s.UNSIGNED_INT&&(K=s.RGB32UI),B===s.BYTE&&(K=s.RGB8I),B===s.SHORT&&(K=s.RGB16I),B===s.INT&&(K=s.RGB32I)),M===s.RGBA_INTEGER&&(B===s.UNSIGNED_BYTE&&(K=s.RGBA8UI),B===s.UNSIGNED_SHORT&&(K=s.RGBA16UI),B===s.UNSIGNED_INT&&(K=s.RGBA32UI),B===s.BYTE&&(K=s.RGBA8I),B===s.SHORT&&(K=s.RGBA16I),B===s.INT&&(K=s.RGBA32I)),M===s.RGB&&B===s.UNSIGNED_INT_5_9_9_9_REV&&(K=s.RGB9_E5),M===s.RGBA){const be=Q?ia:Ye.getTransfer($);B===s.FLOAT&&(K=s.RGBA32F),B===s.HALF_FLOAT&&(K=s.RGBA16F),B===s.UNSIGNED_BYTE&&(K=be===ct?s.SRGB8_ALPHA8:s.RGBA8),B===s.UNSIGNED_SHORT_4_4_4_4&&(K=s.RGBA4),B===s.UNSIGNED_SHORT_5_5_5_1&&(K=s.RGB5_A1)}return(K===s.R16F||K===s.R32F||K===s.RG16F||K===s.RG32F||K===s.RGBA16F||K===s.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function x(C,M){let B;return C?M===null||M===Ai||M===Ws?B=s.DEPTH24_STENCIL8:M===yn?B=s.DEPTH32F_STENCIL8:M===Vs&&(B=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ai||M===Ws?B=s.DEPTH_COMPONENT24:M===yn?B=s.DEPTH_COMPONENT32F:M===Vs&&(B=s.DEPTH_COMPONENT16),B}function R(C,M){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Ut&&C.minFilter!==tn?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function A(C){const M=C.target;M.removeEventListener("dispose",A),I(M),M.isVideoTexture&&h.delete(M)}function E(C){const M=C.target;M.removeEventListener("dispose",E),v(M)}function I(C){const M=n.get(C);if(M.__webglInit===void 0)return;const B=C.source,$=u.get(B);if($){const Q=$[M.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&w(C),Object.keys($).length===0&&u.delete(B)}n.remove(C)}function w(C){const M=n.get(C);s.deleteTexture(M.__webglTexture);const B=C.source,$=u.get(B);delete $[M.__cacheKey],a.memory.textures--}function v(C){const M=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(M.__webglFramebuffer[$]))for(let Q=0;Q<M.__webglFramebuffer[$].length;Q++)s.deleteFramebuffer(M.__webglFramebuffer[$][Q]);else s.deleteFramebuffer(M.__webglFramebuffer[$]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[$])}else{if(Array.isArray(M.__webglFramebuffer))for(let $=0;$<M.__webglFramebuffer.length;$++)s.deleteFramebuffer(M.__webglFramebuffer[$]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let $=0;$<M.__webglColorRenderbuffer.length;$++)M.__webglColorRenderbuffer[$]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[$]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const B=C.textures;for(let $=0,Q=B.length;$<Q;$++){const K=n.get(B[$]);K.__webglTexture&&(s.deleteTexture(K.__webglTexture),a.memory.textures--),n.remove(B[$])}n.remove(C)}let P=0;function F(){P=0}function O(){const C=P;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),P+=1,C}function j(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function W(C,M){const B=n.get(C);if(C.isVideoTexture&&Ee(C),C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){const $=C.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(B,C,M);return}}t.bindTexture(s.TEXTURE_2D,B.__webglTexture,s.TEXTURE0+M)}function V(C,M){const B=n.get(C);if(C.version>0&&B.__version!==C.version){Y(B,C,M);return}t.bindTexture(s.TEXTURE_2D_ARRAY,B.__webglTexture,s.TEXTURE0+M)}function q(C,M){const B=n.get(C);if(C.version>0&&B.__version!==C.version){Y(B,C,M);return}t.bindTexture(s.TEXTURE_3D,B.__webglTexture,s.TEXTURE0+M)}function H(C,M){const B=n.get(C);if(C.version>0&&B.__version!==C.version){ne(B,C,M);return}t.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+M)}const re={[oi]:s.REPEAT,[ri]:s.CLAMP_TO_EDGE,[ta]:s.MIRRORED_REPEAT},pe={[Ut]:s.NEAREST,[Zh]:s.NEAREST_MIPMAP_NEAREST,[Ds]:s.NEAREST_MIPMAP_LINEAR,[tn]:s.LINEAR,[Xr]:s.LINEAR_MIPMAP_NEAREST,[Gn]:s.LINEAR_MIPMAP_LINEAR},Se={[Pu]:s.NEVER,[Fu]:s.ALWAYS,[Lu]:s.LESS,[dd]:s.LEQUAL,[Du]:s.EQUAL,[Uu]:s.GEQUAL,[Nu]:s.GREATER,[ku]:s.NOTEQUAL};function Ve(C,M){if(M.type===yn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===tn||M.magFilter===Xr||M.magFilter===Ds||M.magFilter===Gn||M.minFilter===tn||M.minFilter===Xr||M.minFilter===Ds||M.minFilter===Gn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,re[M.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,re[M.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,re[M.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,pe[M.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,pe[M.minFilter]),M.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,Se[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Ut||M.minFilter!==Ds&&M.minFilter!==Gn||M.type===yn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");s.texParameterf(C,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function ot(C,M){let B=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",A));const $=M.source;let Q=u.get($);Q===void 0&&(Q={},u.set($,Q));const K=j(M);if(K!==C.__cacheKey){Q[K]===void 0&&(Q[K]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,B=!0),Q[K].usedTimes++;const be=Q[C.__cacheKey];be!==void 0&&(Q[C.__cacheKey].usedTimes--,be.usedTimes===0&&w(M)),C.__cacheKey=K,C.__webglTexture=Q[K].texture}return B}function Y(C,M,B){let $=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&($=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&($=s.TEXTURE_3D);const Q=ot(C,M),K=M.source;t.bindTexture($,C.__webglTexture,s.TEXTURE0+B);const be=n.get(K);if(K.version!==be.__version||Q===!0){t.activeTexture(s.TEXTURE0+B);const he=Ye.getPrimaries(Ye.workingColorSpace),_e=M.colorSpace===si?null:Ye.getPrimaries(M.colorSpace),Ze=M.colorSpace===si||he===_e?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze);let ie=_(M.image,!1,i.maxTextureSize);ie=gt(M,ie);const xe=r.convert(M.format,M.colorSpace),Pe=r.convert(M.type);let ke=b(M.internalFormat,xe,Pe,M.colorSpace,M.isVideoTexture);Ve($,M);let ye;const $e=M.mipmaps,He=M.isVideoTexture!==!0,pt=be.__version===void 0||Q===!0,D=K.dataReady,de=R(M,ie);if(M.isDepthTexture)ke=x(M.format===js,M.type),pt&&(He?t.texStorage2D(s.TEXTURE_2D,1,ke,ie.width,ie.height):t.texImage2D(s.TEXTURE_2D,0,ke,ie.width,ie.height,0,xe,Pe,null));else if(M.isDataTexture)if($e.length>0){He&&pt&&t.texStorage2D(s.TEXTURE_2D,de,ke,$e[0].width,$e[0].height);for(let X=0,J=$e.length;X<J;X++)ye=$e[X],He?D&&t.texSubImage2D(s.TEXTURE_2D,X,0,0,ye.width,ye.height,xe,Pe,ye.data):t.texImage2D(s.TEXTURE_2D,X,ke,ye.width,ye.height,0,xe,Pe,ye.data);M.generateMipmaps=!1}else He?(pt&&t.texStorage2D(s.TEXTURE_2D,de,ke,ie.width,ie.height),D&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ie.width,ie.height,xe,Pe,ie.data)):t.texImage2D(s.TEXTURE_2D,0,ke,ie.width,ie.height,0,xe,Pe,ie.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){He&&pt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,de,ke,$e[0].width,$e[0].height,ie.depth);for(let X=0,J=$e.length;X<J;X++)if(ye=$e[X],M.format!==dn)if(xe!==null)if(He){if(D)if(M.layerUpdates.size>0){const fe=qc(ye.width,ye.height,M.format,M.type);for(const ue of M.layerUpdates){const Oe=ye.data.subarray(ue*fe/ye.data.BYTES_PER_ELEMENT,(ue+1)*fe/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,X,0,0,ue,ye.width,ye.height,1,xe,Oe)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,X,0,0,0,ye.width,ye.height,ie.depth,xe,ye.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,X,ke,ye.width,ye.height,ie.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else He?D&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,X,0,0,0,ye.width,ye.height,ie.depth,xe,Pe,ye.data):t.texImage3D(s.TEXTURE_2D_ARRAY,X,ke,ye.width,ye.height,ie.depth,0,xe,Pe,ye.data)}else{He&&pt&&t.texStorage2D(s.TEXTURE_2D,de,ke,$e[0].width,$e[0].height);for(let X=0,J=$e.length;X<J;X++)ye=$e[X],M.format!==dn?xe!==null?He?D&&t.compressedTexSubImage2D(s.TEXTURE_2D,X,0,0,ye.width,ye.height,xe,ye.data):t.compressedTexImage2D(s.TEXTURE_2D,X,ke,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?D&&t.texSubImage2D(s.TEXTURE_2D,X,0,0,ye.width,ye.height,xe,Pe,ye.data):t.texImage2D(s.TEXTURE_2D,X,ke,ye.width,ye.height,0,xe,Pe,ye.data)}else if(M.isDataArrayTexture)if(He){if(pt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,de,ke,ie.width,ie.height,ie.depth),D)if(M.layerUpdates.size>0){const X=qc(ie.width,ie.height,M.format,M.type);for(const J of M.layerUpdates){const fe=ie.data.subarray(J*X/ie.data.BYTES_PER_ELEMENT,(J+1)*X/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,J,ie.width,ie.height,1,xe,Pe,fe)}M.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,xe,Pe,ie.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,ke,ie.width,ie.height,ie.depth,0,xe,Pe,ie.data);else if(M.isData3DTexture)He?(pt&&t.texStorage3D(s.TEXTURE_3D,de,ke,ie.width,ie.height,ie.depth),D&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,xe,Pe,ie.data)):t.texImage3D(s.TEXTURE_3D,0,ke,ie.width,ie.height,ie.depth,0,xe,Pe,ie.data);else if(M.isFramebufferTexture){if(pt)if(He)t.texStorage2D(s.TEXTURE_2D,de,ke,ie.width,ie.height);else{let X=ie.width,J=ie.height;for(let fe=0;fe<de;fe++)t.texImage2D(s.TEXTURE_2D,fe,ke,X,J,0,xe,Pe,null),X>>=1,J>>=1}}else if($e.length>0){if(He&&pt){const X=Te($e[0]);t.texStorage2D(s.TEXTURE_2D,de,ke,X.width,X.height)}for(let X=0,J=$e.length;X<J;X++)ye=$e[X],He?D&&t.texSubImage2D(s.TEXTURE_2D,X,0,0,xe,Pe,ye):t.texImage2D(s.TEXTURE_2D,X,ke,xe,Pe,ye);M.generateMipmaps=!1}else if(He){if(pt){const X=Te(ie);t.texStorage2D(s.TEXTURE_2D,de,ke,X.width,X.height)}D&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,xe,Pe,ie)}else t.texImage2D(s.TEXTURE_2D,0,ke,xe,Pe,ie);m(M)&&p($),be.__version=K.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function ne(C,M,B){if(M.image.length!==6)return;const $=ot(C,M),Q=M.source;t.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+B);const K=n.get(Q);if(Q.version!==K.__version||$===!0){t.activeTexture(s.TEXTURE0+B);const be=Ye.getPrimaries(Ye.workingColorSpace),he=M.colorSpace===si?null:Ye.getPrimaries(M.colorSpace),_e=M.colorSpace===si||be===he?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const Ze=M.isCompressedTexture||M.image[0].isCompressedTexture,ie=M.image[0]&&M.image[0].isDataTexture,xe=[];for(let J=0;J<6;J++)!Ze&&!ie?xe[J]=_(M.image[J],!0,i.maxCubemapSize):xe[J]=ie?M.image[J].image:M.image[J],xe[J]=gt(M,xe[J]);const Pe=xe[0],ke=r.convert(M.format,M.colorSpace),ye=r.convert(M.type),$e=b(M.internalFormat,ke,ye,M.colorSpace),He=M.isVideoTexture!==!0,pt=K.__version===void 0||$===!0,D=Q.dataReady;let de=R(M,Pe);Ve(s.TEXTURE_CUBE_MAP,M);let X;if(Ze){He&&pt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,de,$e,Pe.width,Pe.height);for(let J=0;J<6;J++){X=xe[J].mipmaps;for(let fe=0;fe<X.length;fe++){const ue=X[fe];M.format!==dn?ke!==null?He?D&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,fe,0,0,ue.width,ue.height,ke,ue.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,fe,$e,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,fe,0,0,ue.width,ue.height,ke,ye,ue.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,fe,$e,ue.width,ue.height,0,ke,ye,ue.data)}}}else{if(X=M.mipmaps,He&&pt){X.length>0&&de++;const J=Te(xe[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,de,$e,J.width,J.height)}for(let J=0;J<6;J++)if(ie){He?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,xe[J].width,xe[J].height,ke,ye,xe[J].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,$e,xe[J].width,xe[J].height,0,ke,ye,xe[J].data);for(let fe=0;fe<X.length;fe++){const Oe=X[fe].image[J].image;He?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,fe+1,0,0,Oe.width,Oe.height,ke,ye,Oe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,fe+1,$e,Oe.width,Oe.height,0,ke,ye,Oe.data)}}else{He?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ke,ye,xe[J]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,$e,ke,ye,xe[J]);for(let fe=0;fe<X.length;fe++){const ue=X[fe];He?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,fe+1,0,0,ke,ye,ue.image[J]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,fe+1,$e,ke,ye,ue.image[J])}}}m(M)&&p(s.TEXTURE_CUBE_MAP),K.__version=Q.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function Me(C,M,B,$,Q,K){const be=r.convert(B.format,B.colorSpace),he=r.convert(B.type),_e=b(B.internalFormat,be,he,B.colorSpace),Ze=n.get(M),ie=n.get(B);if(ie.__renderTarget=M,!Ze.__hasExternalTextures){const xe=Math.max(1,M.width>>K),Pe=Math.max(1,M.height>>K);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?t.texImage3D(Q,K,_e,xe,Pe,M.depth,0,be,he,null):t.texImage2D(Q,K,_e,xe,Pe,0,be,he,null)}t.bindFramebuffer(s.FRAMEBUFFER,C),qe(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,$,Q,ie.__webglTexture,0,Je(M)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,$,Q,ie.__webglTexture,K),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ae(C,M,B){if(s.bindRenderbuffer(s.RENDERBUFFER,C),M.depthBuffer){const $=M.depthTexture,Q=$&&$.isDepthTexture?$.type:null,K=x(M.stencilBuffer,Q),be=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,he=Je(M);qe(M)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,he,K,M.width,M.height):B?s.renderbufferStorageMultisample(s.RENDERBUFFER,he,K,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,K,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,be,s.RENDERBUFFER,C)}else{const $=M.textures;for(let Q=0;Q<$.length;Q++){const K=$[Q],be=r.convert(K.format,K.colorSpace),he=r.convert(K.type),_e=b(K.internalFormat,be,he,K.colorSpace),Ze=Je(M);B&&qe(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ze,_e,M.width,M.height):qe(M)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ze,_e,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,_e,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ie(C,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=n.get(M.depthTexture);$.__renderTarget=M,(!$.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),W(M.depthTexture,0);const Q=$.__webglTexture,K=Je(M);if(M.depthTexture.format===Xs)qe(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0,K):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0);else if(M.depthTexture.format===js)qe(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0,K):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function tt(C){const M=n.get(C),B=C.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==C.depthTexture){const $=C.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),$){const Q=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,$.removeEventListener("dispose",Q)};$.addEventListener("dispose",Q),M.__depthDisposeCallback=Q}M.__boundDepthTexture=$}if(C.depthTexture&&!M.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Ie(M.__webglFramebuffer,C)}else if(B){M.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[$]),M.__webglDepthbuffer[$]===void 0)M.__webglDepthbuffer[$]=s.createRenderbuffer(),ae(M.__webglDepthbuffer[$],C,!1);else{const Q=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,K=M.__webglDepthbuffer[$];s.bindRenderbuffer(s.RENDERBUFFER,K),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,K)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),ae(M.__webglDepthbuffer,C,!1);else{const $=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Q=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Q),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,Q)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Le(C,M,B){const $=n.get(C);M!==void 0&&Me($.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),B!==void 0&&tt(C)}function Mt(C){const M=C.texture,B=n.get(C),$=n.get(M);C.addEventListener("dispose",E);const Q=C.textures,K=C.isWebGLCubeRenderTarget===!0,be=Q.length>1;if(be||($.__webglTexture===void 0&&($.__webglTexture=s.createTexture()),$.__version=M.version,a.memory.textures++),K){B.__webglFramebuffer=[];for(let he=0;he<6;he++)if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer[he]=[];for(let _e=0;_e<M.mipmaps.length;_e++)B.__webglFramebuffer[he][_e]=s.createFramebuffer()}else B.__webglFramebuffer[he]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer=[];for(let he=0;he<M.mipmaps.length;he++)B.__webglFramebuffer[he]=s.createFramebuffer()}else B.__webglFramebuffer=s.createFramebuffer();if(be)for(let he=0,_e=Q.length;he<_e;he++){const Ze=n.get(Q[he]);Ze.__webglTexture===void 0&&(Ze.__webglTexture=s.createTexture(),a.memory.textures++)}if(C.samples>0&&qe(C)===!1){B.__webglMultisampledFramebuffer=s.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let he=0;he<Q.length;he++){const _e=Q[he];B.__webglColorRenderbuffer[he]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,B.__webglColorRenderbuffer[he]);const Ze=r.convert(_e.format,_e.colorSpace),ie=r.convert(_e.type),xe=b(_e.internalFormat,Ze,ie,_e.colorSpace,C.isXRRenderTarget===!0),Pe=Je(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,Pe,xe,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+he,s.RENDERBUFFER,B.__webglColorRenderbuffer[he])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(B.__webglDepthRenderbuffer=s.createRenderbuffer(),ae(B.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(K){t.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture),Ve(s.TEXTURE_CUBE_MAP,M);for(let he=0;he<6;he++)if(M.mipmaps&&M.mipmaps.length>0)for(let _e=0;_e<M.mipmaps.length;_e++)Me(B.__webglFramebuffer[he][_e],C,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+he,_e);else Me(B.__webglFramebuffer[he],C,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);m(M)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){for(let he=0,_e=Q.length;he<_e;he++){const Ze=Q[he],ie=n.get(Ze);t.bindTexture(s.TEXTURE_2D,ie.__webglTexture),Ve(s.TEXTURE_2D,Ze),Me(B.__webglFramebuffer,C,Ze,s.COLOR_ATTACHMENT0+he,s.TEXTURE_2D,0),m(Ze)&&p(s.TEXTURE_2D)}t.unbindTexture()}else{let he=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(he=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(he,$.__webglTexture),Ve(he,M),M.mipmaps&&M.mipmaps.length>0)for(let _e=0;_e<M.mipmaps.length;_e++)Me(B.__webglFramebuffer[_e],C,M,s.COLOR_ATTACHMENT0,he,_e);else Me(B.__webglFramebuffer,C,M,s.COLOR_ATTACHMENT0,he,0);m(M)&&p(he),t.unbindTexture()}C.depthBuffer&&tt(C)}function xt(C){const M=C.textures;for(let B=0,$=M.length;B<$;B++){const Q=M[B];if(m(Q)){const K=y(C),be=n.get(Q).__webglTexture;t.bindTexture(K,be),p(K),t.unbindTexture()}}}const Ke=[],L=[];function sn(C){if(C.samples>0){if(qe(C)===!1){const M=C.textures,B=C.width,$=C.height;let Q=s.COLOR_BUFFER_BIT;const K=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,be=n.get(C),he=M.length>1;if(he)for(let _e=0;_e<M.length;_e++)t.bindFramebuffer(s.FRAMEBUFFER,be.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,be.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let _e=0;_e<M.length;_e++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),he){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,be.__webglColorRenderbuffer[_e]);const Ze=n.get(M[_e]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ze,0)}s.blitFramebuffer(0,0,B,$,0,0,B,$,Q,s.NEAREST),l===!0&&(Ke.length=0,L.length=0,Ke.push(s.COLOR_ATTACHMENT0+_e),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Ke.push(K),L.push(K),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,L)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ke))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),he)for(let _e=0;_e<M.length;_e++){t.bindFramebuffer(s.FRAMEBUFFER,be.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.RENDERBUFFER,be.__webglColorRenderbuffer[_e]);const Ze=n.get(M[_e]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,be.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.TEXTURE_2D,Ze,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const M=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function Je(C){return Math.min(i.maxSamples,C.samples)}function qe(C){const M=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ee(C){const M=a.render.frame;h.get(C)!==M&&(h.set(C,M),C.update())}function gt(C,M){const B=C.colorSpace,$=C.format,Q=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||B!==Yt&&B!==si&&(Ye.getTransfer(B)===ct?($!==dn||Q!==Yn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),M}function Te(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=F,this.setTexture2D=W,this.setTexture2DArray=V,this.setTexture3D=q,this.setTextureCube=H,this.rebindTextures=Le,this.setupRenderTarget=Mt,this.updateRenderTargetMipmap=xt,this.updateMultisampleRenderTarget=sn,this.setupDepthRenderbuffer=tt,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=qe}function q_(s,e){function t(n,i=si){let r;const a=Ye.getTransfer(i);if(n===Yn)return s.UNSIGNED_BYTE;if(n===_l)return s.UNSIGNED_SHORT_4_4_4_4;if(n===xl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===td)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Qh)return s.BYTE;if(n===ed)return s.SHORT;if(n===Vs)return s.UNSIGNED_SHORT;if(n===gl)return s.INT;if(n===Ai)return s.UNSIGNED_INT;if(n===yn)return s.FLOAT;if(n===ps)return s.HALF_FLOAT;if(n===nd)return s.ALPHA;if(n===id)return s.RGB;if(n===dn)return s.RGBA;if(n===sd)return s.LUMINANCE;if(n===rd)return s.LUMINANCE_ALPHA;if(n===Xs)return s.DEPTH_COMPONENT;if(n===js)return s.DEPTH_STENCIL;if(n===yl)return s.RED;if(n===vl)return s.RED_INTEGER;if(n===ad)return s.RG;if(n===Ml)return s.RG_INTEGER;if(n===bl)return s.RGBA_INTEGER;if(n===jr||n===Yr||n===Kr||n===qr)if(a===ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===jr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===jr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Yr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Kr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===qr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Io||n===Po||n===Lo||n===Do)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Io)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Po)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Lo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Do)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===No||n===ko||n===Uo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===No||n===ko)return a===ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Uo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Fo||n===Bo||n===Oo||n===zo||n===Ho||n===Go||n===Vo||n===Wo||n===Xo||n===jo||n===Yo||n===Ko||n===qo||n===$o)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Fo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Bo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Oo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===zo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ho)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Go)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Vo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Wo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Xo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===jo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Yo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ko)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===qo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===$o)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===$r||n===Jo||n===Zo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===$r)return a===ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Jo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Zo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===od||n===Qo||n===el||n===tl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===$r)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Qo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===el)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===tl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ws?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const $_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,J_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Z_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Et,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new wn({vertexShader:$_,fragmentShader:J_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ee(new St(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Q_ extends Ci{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null;const _=new Z_,m=t.getContextAttributes();let p=null,y=null;const b=[],x=[],R=new Ce;let A=null;const E=new Xt;E.viewport=new nt;const I=new Xt;I.viewport=new nt;const w=[E,I],v=new op;let P=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ne=b[Y];return ne===void 0&&(ne=new Na,b[Y]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(Y){let ne=b[Y];return ne===void 0&&(ne=new Na,b[Y]=ne),ne.getGripSpace()},this.getHand=function(Y){let ne=b[Y];return ne===void 0&&(ne=new Na,b[Y]=ne),ne.getHandSpace()};function O(Y){const ne=x.indexOf(Y.inputSource);if(ne===-1)return;const Me=b[ne];Me!==void 0&&(Me.update(Y.inputSource,Y.frame,c||a),Me.dispatchEvent({type:Y.type,data:Y.inputSource}))}function j(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",j),i.removeEventListener("inputsourceschange",W);for(let Y=0;Y<b.length;Y++){const ne=x[Y];ne!==null&&(x[Y]=null,b[Y].disconnect(ne))}P=null,F=null,_.reset(),e.setRenderTarget(p),f=null,u=null,d=null,i=null,y=null,ot.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",j),i.addEventListener("inputsourceschange",W),m.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(R),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,ae=null,Ie=null;m.depth&&(Ie=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=m.stencil?js:Xs,ae=m.stencil?Ws:Ai);const tt={colorFormat:t.RGBA8,depthFormat:Ie,scaleFactor:r};d=new XRWebGLBinding(i,t),u=d.createProjectionLayer(tt),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),y=new li(u.textureWidth,u.textureHeight,{format:dn,type:Yn,depthTexture:new Ed(u.textureWidth,u.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const Me={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,Me),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new li(f.framebufferWidth,f.framebufferHeight,{format:dn,type:Yn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),ot.setContext(i),ot.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function W(Y){for(let ne=0;ne<Y.removed.length;ne++){const Me=Y.removed[ne],ae=x.indexOf(Me);ae>=0&&(x[ae]=null,b[ae].disconnect(Me))}for(let ne=0;ne<Y.added.length;ne++){const Me=Y.added[ne];let ae=x.indexOf(Me);if(ae===-1){for(let tt=0;tt<b.length;tt++)if(tt>=x.length){x.push(Me),ae=tt;break}else if(x[tt]===null){x[tt]=Me,ae=tt;break}if(ae===-1)break}const Ie=b[ae];Ie&&Ie.connect(Me)}}const V=new T,q=new T;function H(Y,ne,Me){V.setFromMatrixPosition(ne.matrixWorld),q.setFromMatrixPosition(Me.matrixWorld);const ae=V.distanceTo(q),Ie=ne.projectionMatrix.elements,tt=Me.projectionMatrix.elements,Le=Ie[14]/(Ie[10]-1),Mt=Ie[14]/(Ie[10]+1),xt=(Ie[9]+1)/Ie[5],Ke=(Ie[9]-1)/Ie[5],L=(Ie[8]-1)/Ie[0],sn=(tt[8]+1)/tt[0],Je=Le*L,qe=Le*sn,Ee=ae/(-L+sn),gt=Ee*-L;if(ne.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(gt),Y.translateZ(Ee),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Ie[10]===-1)Y.projectionMatrix.copy(ne.projectionMatrix),Y.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const Te=Le+Ee,C=Mt+Ee,M=Je-gt,B=qe+(ae-gt),$=xt*Mt/C*Te,Q=Ke*Mt/C*Te;Y.projectionMatrix.makePerspective(M,B,$,Q,Te,C),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function re(Y,ne){ne===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ne.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let ne=Y.near,Me=Y.far;_.texture!==null&&(_.depthNear>0&&(ne=_.depthNear),_.depthFar>0&&(Me=_.depthFar)),v.near=I.near=E.near=ne,v.far=I.far=E.far=Me,(P!==v.near||F!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),P=v.near,F=v.far),E.layers.mask=Y.layers.mask|2,I.layers.mask=Y.layers.mask|4,v.layers.mask=E.layers.mask|I.layers.mask;const ae=Y.parent,Ie=v.cameras;re(v,ae);for(let tt=0;tt<Ie.length;tt++)re(Ie[tt],ae);Ie.length===2?H(v,E,I):v.projectionMatrix.copy(E.projectionMatrix),pe(Y,v,ae)};function pe(Y,ne,Me){Me===null?Y.matrix.copy(ne.matrixWorld):(Y.matrix.copy(Me.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ne.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ne.projectionMatrix),Y.projectionMatrixInverse.copy(ne.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=ls*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(Y){l=Y,u!==null&&(u.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let Se=null;function Ve(Y,ne){if(h=ne.getViewerPose(c||a),g=ne,h!==null){const Me=h.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let ae=!1;Me.length!==v.cameras.length&&(v.cameras.length=0,ae=!0);for(let Le=0;Le<Me.length;Le++){const Mt=Me[Le];let xt=null;if(f!==null)xt=f.getViewport(Mt);else{const L=d.getViewSubImage(u,Mt);xt=L.viewport,Le===0&&(e.setRenderTargetTextures(y,L.colorTexture,L.depthStencilTexture),e.setRenderTarget(y))}let Ke=w[Le];Ke===void 0&&(Ke=new Xt,Ke.layers.enable(Le),Ke.viewport=new nt,w[Le]=Ke),Ke.matrix.fromArray(Mt.transform.matrix),Ke.matrix.decompose(Ke.position,Ke.quaternion,Ke.scale),Ke.projectionMatrix.fromArray(Mt.projectionMatrix),Ke.projectionMatrixInverse.copy(Ke.projectionMatrix).invert(),Ke.viewport.set(xt.x,xt.y,xt.width,xt.height),Le===0&&(v.matrix.copy(Ke.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),ae===!0&&v.cameras.push(Ke)}const Ie=i.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&d){const Le=d.getDepthInformation(Me[0]);Le&&Le.isValid&&Le.texture&&_.init(e,Le,i.renderState)}}for(let Me=0;Me<b.length;Me++){const ae=x[Me],Ie=b[Me];ae!==null&&Ie!==void 0&&Ie.update(ae,ne,c||a)}Se&&Se(Y,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),g=null}const ot=new Ld;ot.setAnimationLoop(Ve),this.setAnimationLoop=function(Y){Se=Y},this.dispose=function(){}}}const xi=new Cn,ex=new Fe;function tx(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,_d(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,y,b,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,y,b):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===zt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===zt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p),b=y.envMap,x=y.envMapRotation;b&&(m.envMap.value=b,xi.copy(x),xi.x*=-1,xi.y*=-1,xi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(xi.y*=-1,xi.z*=-1),m.envMapRotation.value.setFromMatrix4(ex.makeRotationFromEuler(xi)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=b*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===zt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function nx(s,e,t,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,b){const x=b.program;n.uniformBlockBinding(y,x)}function c(y,b){let x=i[y.id];x===void 0&&(g(y),x=h(y),i[y.id]=x,y.addEventListener("dispose",m));const R=b.program;n.updateUBOMapping(y,R);const A=e.render.frame;r[y.id]!==A&&(u(y),r[y.id]=A)}function h(y){const b=d();y.__bindingPointIndex=b;const x=s.createBuffer(),R=y.__size,A=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,R,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,b,x),x}function d(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){const b=i[y.id],x=y.uniforms,R=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let A=0,E=x.length;A<E;A++){const I=Array.isArray(x[A])?x[A]:[x[A]];for(let w=0,v=I.length;w<v;w++){const P=I[w];if(f(P,A,w,R)===!0){const F=P.__offset,O=Array.isArray(P.value)?P.value:[P.value];let j=0;for(let W=0;W<O.length;W++){const V=O[W],q=_(V);typeof V=="number"||typeof V=="boolean"?(P.__data[0]=V,s.bufferSubData(s.UNIFORM_BUFFER,F+j,P.__data)):V.isMatrix3?(P.__data[0]=V.elements[0],P.__data[1]=V.elements[1],P.__data[2]=V.elements[2],P.__data[3]=0,P.__data[4]=V.elements[3],P.__data[5]=V.elements[4],P.__data[6]=V.elements[5],P.__data[7]=0,P.__data[8]=V.elements[6],P.__data[9]=V.elements[7],P.__data[10]=V.elements[8],P.__data[11]=0):(V.toArray(P.__data,j),j+=q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,F,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(y,b,x,R){const A=y.value,E=b+"_"+x;if(R[E]===void 0)return typeof A=="number"||typeof A=="boolean"?R[E]=A:R[E]=A.clone(),!0;{const I=R[E];if(typeof A=="number"||typeof A=="boolean"){if(I!==A)return R[E]=A,!0}else if(I.equals(A)===!1)return I.copy(A),!0}return!1}function g(y){const b=y.uniforms;let x=0;const R=16;for(let E=0,I=b.length;E<I;E++){const w=Array.isArray(b[E])?b[E]:[b[E]];for(let v=0,P=w.length;v<P;v++){const F=w[v],O=Array.isArray(F.value)?F.value:[F.value];for(let j=0,W=O.length;j<W;j++){const V=O[j],q=_(V),H=x%R,re=H%q.boundary,pe=H+re;x+=re,pe!==0&&R-pe<q.storage&&(x+=R-pe),F.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=x,x+=q.storage}}}const A=x%R;return A>0&&(x+=R-A),y.__size=x,y.__cache={},this}function _(y){const b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=48,b.storage=48):y.isMatrix4?(b.boundary=64,b.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),b}function m(y){const b=y.target;b.removeEventListener("dispose",m);const x=a.indexOf(b.__bindingPointIndex);a.splice(x,1),s.deleteBuffer(i[b.id]),delete i[b.id],delete r[b.id]}function p(){for(const y in i)s.deleteBuffer(i[y]);a=[],i={},r={}}return{bind:l,update:c,dispose:p}}class ix{constructor(e={}){const{canvas:t=ef(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const y=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let R=!1;this._outputColorSpace=mt;let A=0,E=0,I=null,w=-1,v=null;const P=new nt,F=new nt;let O=null;const j=new ge(0);let W=0,V=t.width,q=t.height,H=1,re=null,pe=null;const Se=new nt(0,0,V,q),Ve=new nt(0,0,V,q);let ot=!1;const Y=new Pl;let ne=!1,Me=!1;const ae=new Fe,Ie=new Fe,tt=new T,Le=new nt,Mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let xt=!1;function Ke(){return I===null?H:1}let L=n;function sn(S,N){return t.getContext(S,N)}try{const S={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ml}`),t.addEventListener("webglcontextlost",J,!1),t.addEventListener("webglcontextrestored",fe,!1),t.addEventListener("webglcontextcreationerror",ue,!1),L===null){const N="webgl2";if(L=sn(N,S),L===null)throw sn(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Je,qe,Ee,gt,Te,C,M,B,$,Q,K,be,he,_e,Ze,ie,xe,Pe,ke,ye,$e,He,pt,D;function de(){Je=new fg(L),Je.init(),He=new q_(L,Je),qe=new ag(L,Je,e,He),Ee=new Y_(L,Je),qe.reverseDepthBuffer&&u&&Ee.buffers.depth.setReversed(!0),gt=new gg(L),Te=new N_,C=new K_(L,Je,Ee,Te,qe,He,gt),M=new lg(x),B=new ug(x),$=new bp(L),pt=new sg(L,$),Q=new pg(L,$,gt,pt),K=new xg(L,Q,$,gt),ke=new _g(L,qe,C),ie=new og(Te),be=new D_(x,M,B,Je,qe,pt,ie),he=new tx(x,Te),_e=new U_,Ze=new G_(Je),Pe=new ig(x,M,B,Ee,K,f,l),xe=new X_(x,K,qe),D=new nx(L,gt,qe,Ee),ye=new rg(L,Je,gt),$e=new mg(L,Je,gt),gt.programs=be.programs,x.capabilities=qe,x.extensions=Je,x.properties=Te,x.renderLists=_e,x.shadowMap=xe,x.state=Ee,x.info=gt}de();const X=new Q_(x,L);this.xr=X,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const S=Je.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Je.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(S){S!==void 0&&(H=S,this.setSize(V,q,!1))},this.getSize=function(S){return S.set(V,q)},this.setSize=function(S,N,z=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=S,q=N,t.width=Math.floor(S*H),t.height=Math.floor(N*H),z===!0&&(t.style.width=S+"px",t.style.height=N+"px"),this.setViewport(0,0,S,N)},this.getDrawingBufferSize=function(S){return S.set(V*H,q*H).floor()},this.setDrawingBufferSize=function(S,N,z){V=S,q=N,H=z,t.width=Math.floor(S*z),t.height=Math.floor(N*z),this.setViewport(0,0,S,N)},this.getCurrentViewport=function(S){return S.copy(P)},this.getViewport=function(S){return S.copy(Se)},this.setViewport=function(S,N,z,G){S.isVector4?Se.set(S.x,S.y,S.z,S.w):Se.set(S,N,z,G),Ee.viewport(P.copy(Se).multiplyScalar(H).round())},this.getScissor=function(S){return S.copy(Ve)},this.setScissor=function(S,N,z,G){S.isVector4?Ve.set(S.x,S.y,S.z,S.w):Ve.set(S,N,z,G),Ee.scissor(F.copy(Ve).multiplyScalar(H).round())},this.getScissorTest=function(){return ot},this.setScissorTest=function(S){Ee.setScissorTest(ot=S)},this.setOpaqueSort=function(S){re=S},this.setTransparentSort=function(S){pe=S},this.getClearColor=function(S){return S.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor(...arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha(...arguments)},this.clear=function(S=!0,N=!0,z=!0){let G=0;if(S){let k=!1;if(I!==null){const te=I.texture.format;k=te===bl||te===Ml||te===vl}if(k){const te=I.texture.type,ce=te===Yn||te===Ai||te===Vs||te===Ws||te===_l||te===xl,me=Pe.getClearColor(),ve=Pe.getClearAlpha(),Ue=me.r,De=me.g,Ae=me.b;ce?(g[0]=Ue,g[1]=De,g[2]=Ae,g[3]=ve,L.clearBufferuiv(L.COLOR,0,g)):(_[0]=Ue,_[1]=De,_[2]=Ae,_[3]=ve,L.clearBufferiv(L.COLOR,0,_))}else G|=L.COLOR_BUFFER_BIT}N&&(G|=L.DEPTH_BUFFER_BIT),z&&(G|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",J,!1),t.removeEventListener("webglcontextrestored",fe,!1),t.removeEventListener("webglcontextcreationerror",ue,!1),Pe.dispose(),_e.dispose(),Ze.dispose(),Te.dispose(),M.dispose(),B.dispose(),K.dispose(),pt.dispose(),D.dispose(),be.dispose(),X.dispose(),X.removeEventListener("sessionstart",Kl),X.removeEventListener("sessionend",ql),di.stop()};function J(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function fe(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const S=gt.autoReset,N=xe.enabled,z=xe.autoUpdate,G=xe.needsUpdate,k=xe.type;de(),gt.autoReset=S,xe.enabled=N,xe.autoUpdate=z,xe.needsUpdate=G,xe.type=k}function ue(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Oe(S){const N=S.target;N.removeEventListener("dispose",Oe),yt(N)}function yt(S){Ft(S),Te.remove(S)}function Ft(S){const N=Te.get(S).programs;N!==void 0&&(N.forEach(function(z){be.releaseProgram(z)}),S.isShaderMaterial&&be.releaseShaderCache(S))}this.renderBufferDirect=function(S,N,z,G,k,te){N===null&&(N=Mt);const ce=k.isMesh&&k.matrixWorld.determinant()<0,me=$d(S,N,z,G,k);Ee.setMaterial(G,ce);let ve=z.index,Ue=1;if(G.wireframe===!0){if(ve=Q.getWireframeAttribute(z),ve===void 0)return;Ue=2}const De=z.drawRange,Ae=z.attributes.position;let Qe=De.start*Ue,it=(De.start+De.count)*Ue;te!==null&&(Qe=Math.max(Qe,te.start*Ue),it=Math.min(it,(te.start+te.count)*Ue)),ve!==null?(Qe=Math.max(Qe,0),it=Math.min(it,ve.count)):Ae!=null&&(Qe=Math.max(Qe,0),it=Math.min(it,Ae.count));const bt=it-Qe;if(bt<0||bt===1/0)return;pt.setup(k,G,me,z,ve);let vt,et=ye;if(ve!==null&&(vt=$.get(ve),et=$e,et.setIndex(vt)),k.isMesh)G.wireframe===!0?(Ee.setLineWidth(G.wireframeLinewidth*Ke()),et.setMode(L.LINES)):et.setMode(L.TRIANGLES);else if(k.isLine){let Re=G.linewidth;Re===void 0&&(Re=1),Ee.setLineWidth(Re*Ke()),k.isLineSegments?et.setMode(L.LINES):k.isLineLoop?et.setMode(L.LINE_LOOP):et.setMode(L.LINE_STRIP)}else k.isPoints?et.setMode(L.POINTS):k.isSprite&&et.setMode(L.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)Jr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),et.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(Je.get("WEBGL_multi_draw"))et.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Re=k._multiDrawStarts,kt=k._multiDrawCounts,st=k._multiDrawCount,pn=ve?$.get(ve).bytesPerElement:1,Ri=Te.get(G).currentProgram.getUniforms();for(let Jt=0;Jt<st;Jt++)Ri.setValue(L,"_gl_DrawID",Jt),et.render(Re[Jt]/pn,kt[Jt])}else if(k.isInstancedMesh)et.renderInstances(Qe,bt,k.count);else if(z.isInstancedBufferGeometry){const Re=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,kt=Math.min(z.instanceCount,Re);et.renderInstances(Qe,bt,kt)}else et.render(Qe,bt)};function lt(S,N,z){S.transparent===!0&&S.side===cn&&S.forceSinglePass===!1?(S.side=zt,S.needsUpdate=!0,ar(S,N,z),S.side=An,S.needsUpdate=!0,ar(S,N,z),S.side=cn):ar(S,N,z)}this.compile=function(S,N,z=null){z===null&&(z=S),p=Ze.get(z),p.init(N),b.push(p),z.traverseVisible(function(k){k.isLight&&k.layers.test(N.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),S!==z&&S.traverseVisible(function(k){k.isLight&&k.layers.test(N.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights();const G=new Set;return S.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const te=k.material;if(te)if(Array.isArray(te))for(let ce=0;ce<te.length;ce++){const me=te[ce];lt(me,z,k),G.add(me)}else lt(te,z,k),G.add(te)}),p=b.pop(),G},this.compileAsync=function(S,N,z=null){const G=this.compile(S,N,z);return new Promise(k=>{function te(){if(G.forEach(function(ce){Te.get(ce).currentProgram.isReady()&&G.delete(ce)}),G.size===0){k(S);return}setTimeout(te,10)}Je.get("KHR_parallel_shader_compile")!==null?te():setTimeout(te,10)})};let fn=null;function Ln(S){fn&&fn(S)}function Kl(){di.stop()}function ql(){di.start()}const di=new Ld;di.setAnimationLoop(Ln),typeof self<"u"&&di.setContext(self),this.setAnimationLoop=function(S){fn=S,X.setAnimationLoop(S),S===null?di.stop():di.start()},X.addEventListener("sessionstart",Kl),X.addEventListener("sessionend",ql),this.render=function(S,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(N),N=X.getCamera()),S.isScene===!0&&S.onBeforeRender(x,S,N,I),p=Ze.get(S,b.length),p.init(N),b.push(p),Ie.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Y.setFromProjectionMatrix(Ie),Me=this.localClippingEnabled,ne=ie.init(this.clippingPlanes,Me),m=_e.get(S,y.length),m.init(),y.push(m),X.enabled===!0&&X.isPresenting===!0){const te=x.xr.getDepthSensingMesh();te!==null&&ua(te,N,-1/0,x.sortObjects)}ua(S,N,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(re,pe),xt=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,xt&&Pe.addToRenderList(m,S),this.info.render.frame++,ne===!0&&ie.beginShadows();const z=p.state.shadowsArray;xe.render(z,S,N),ne===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=m.opaque,k=m.transmissive;if(p.setupLights(),N.isArrayCamera){const te=N.cameras;if(k.length>0)for(let ce=0,me=te.length;ce<me;ce++){const ve=te[ce];Jl(G,k,S,ve)}xt&&Pe.render(S);for(let ce=0,me=te.length;ce<me;ce++){const ve=te[ce];$l(m,S,ve,ve.viewport)}}else k.length>0&&Jl(G,k,S,N),xt&&Pe.render(S),$l(m,S,N);I!==null&&E===0&&(C.updateMultisampleRenderTarget(I),C.updateRenderTargetMipmap(I)),S.isScene===!0&&S.onAfterRender(x,S,N),pt.resetDefaultState(),w=-1,v=null,b.pop(),b.length>0?(p=b[b.length-1],ne===!0&&ie.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function ua(S,N,z,G){if(S.visible===!1)return;if(S.layers.test(N.layers)){if(S.isGroup)z=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(N);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Y.intersectsSprite(S)){G&&Le.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Ie);const ce=K.update(S),me=S.material;me.visible&&m.push(S,ce,me,z,Le.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Y.intersectsObject(S))){const ce=K.update(S),me=S.material;if(G&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Le.copy(S.boundingSphere.center)):(ce.boundingSphere===null&&ce.computeBoundingSphere(),Le.copy(ce.boundingSphere.center)),Le.applyMatrix4(S.matrixWorld).applyMatrix4(Ie)),Array.isArray(me)){const ve=ce.groups;for(let Ue=0,De=ve.length;Ue<De;Ue++){const Ae=ve[Ue],Qe=me[Ae.materialIndex];Qe&&Qe.visible&&m.push(S,ce,Qe,z,Le.z,Ae)}}else me.visible&&m.push(S,ce,me,z,Le.z,null)}}const te=S.children;for(let ce=0,me=te.length;ce<me;ce++)ua(te[ce],N,z,G)}function $l(S,N,z,G){const k=S.opaque,te=S.transmissive,ce=S.transparent;p.setupLightsView(z),ne===!0&&ie.setGlobalState(x.clippingPlanes,z),G&&Ee.viewport(P.copy(G)),k.length>0&&rr(k,N,z),te.length>0&&rr(te,N,z),ce.length>0&&rr(ce,N,z),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function Jl(S,N,z,G){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[G.id]===void 0&&(p.state.transmissionRenderTarget[G.id]=new li(1,1,{generateMipmaps:!0,type:Je.has("EXT_color_buffer_half_float")||Je.has("EXT_color_buffer_float")?ps:Yn,minFilter:Gn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ye.workingColorSpace}));const te=p.state.transmissionRenderTarget[G.id],ce=G.viewport||P;te.setSize(ce.z*x.transmissionResolutionScale,ce.w*x.transmissionResolutionScale);const me=x.getRenderTarget();x.setRenderTarget(te),x.getClearColor(j),W=x.getClearAlpha(),W<1&&x.setClearColor(16777215,.5),x.clear(),xt&&Pe.render(z);const ve=x.toneMapping;x.toneMapping=Xn;const Ue=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),p.setupLightsView(G),ne===!0&&ie.setGlobalState(x.clippingPlanes,G),rr(S,z,G),C.updateMultisampleRenderTarget(te),C.updateRenderTargetMipmap(te),Je.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let Ae=0,Qe=N.length;Ae<Qe;Ae++){const it=N[Ae],bt=it.object,vt=it.geometry,et=it.material,Re=it.group;if(et.side===cn&&bt.layers.test(G.layers)){const kt=et.side;et.side=zt,et.needsUpdate=!0,Zl(bt,z,G,vt,et,Re),et.side=kt,et.needsUpdate=!0,De=!0}}De===!0&&(C.updateMultisampleRenderTarget(te),C.updateRenderTargetMipmap(te))}x.setRenderTarget(me),x.setClearColor(j,W),Ue!==void 0&&(G.viewport=Ue),x.toneMapping=ve}function rr(S,N,z){const G=N.isScene===!0?N.overrideMaterial:null;for(let k=0,te=S.length;k<te;k++){const ce=S[k],me=ce.object,ve=ce.geometry,Ue=ce.group;let De=ce.material;De.allowOverride===!0&&G!==null&&(De=G),me.layers.test(z.layers)&&Zl(me,N,z,ve,De,Ue)}}function Zl(S,N,z,G,k,te){S.onBeforeRender(x,N,z,G,k,te),S.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),k.onBeforeRender(x,N,z,G,S,te),k.transparent===!0&&k.side===cn&&k.forceSinglePass===!1?(k.side=zt,k.needsUpdate=!0,x.renderBufferDirect(z,N,G,k,S,te),k.side=An,k.needsUpdate=!0,x.renderBufferDirect(z,N,G,k,S,te),k.side=cn):x.renderBufferDirect(z,N,G,k,S,te),S.onAfterRender(x,N,z,G,k,te)}function ar(S,N,z){N.isScene!==!0&&(N=Mt);const G=Te.get(S),k=p.state.lights,te=p.state.shadowsArray,ce=k.state.version,me=be.getParameters(S,k.state,te,N,z),ve=be.getProgramCacheKey(me);let Ue=G.programs;G.environment=S.isMeshStandardMaterial?N.environment:null,G.fog=N.fog,G.envMap=(S.isMeshStandardMaterial?B:M).get(S.envMap||G.environment),G.envMapRotation=G.environment!==null&&S.envMap===null?N.environmentRotation:S.envMapRotation,Ue===void 0&&(S.addEventListener("dispose",Oe),Ue=new Map,G.programs=Ue);let De=Ue.get(ve);if(De!==void 0){if(G.currentProgram===De&&G.lightsStateVersion===ce)return ec(S,me),De}else me.uniforms=be.getUniforms(S),S.onBeforeCompile(me,x),De=be.acquireProgram(me,ve),Ue.set(ve,De),G.uniforms=me.uniforms;const Ae=G.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ae.clippingPlanes=ie.uniform),ec(S,me),G.needsLights=Zd(S),G.lightsStateVersion=ce,G.needsLights&&(Ae.ambientLightColor.value=k.state.ambient,Ae.lightProbe.value=k.state.probe,Ae.directionalLights.value=k.state.directional,Ae.directionalLightShadows.value=k.state.directionalShadow,Ae.spotLights.value=k.state.spot,Ae.spotLightShadows.value=k.state.spotShadow,Ae.rectAreaLights.value=k.state.rectArea,Ae.ltc_1.value=k.state.rectAreaLTC1,Ae.ltc_2.value=k.state.rectAreaLTC2,Ae.pointLights.value=k.state.point,Ae.pointLightShadows.value=k.state.pointShadow,Ae.hemisphereLights.value=k.state.hemi,Ae.directionalShadowMap.value=k.state.directionalShadowMap,Ae.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ae.spotShadowMap.value=k.state.spotShadowMap,Ae.spotLightMatrix.value=k.state.spotLightMatrix,Ae.spotLightMap.value=k.state.spotLightMap,Ae.pointShadowMap.value=k.state.pointShadowMap,Ae.pointShadowMatrix.value=k.state.pointShadowMatrix),G.currentProgram=De,G.uniformsList=null,De}function Ql(S){if(S.uniformsList===null){const N=S.currentProgram.getUniforms();S.uniformsList=Qr.seqWithValue(N.seq,S.uniforms)}return S.uniformsList}function ec(S,N){const z=Te.get(S);z.outputColorSpace=N.outputColorSpace,z.batching=N.batching,z.batchingColor=N.batchingColor,z.instancing=N.instancing,z.instancingColor=N.instancingColor,z.instancingMorph=N.instancingMorph,z.skinning=N.skinning,z.morphTargets=N.morphTargets,z.morphNormals=N.morphNormals,z.morphColors=N.morphColors,z.morphTargetsCount=N.morphTargetsCount,z.numClippingPlanes=N.numClippingPlanes,z.numIntersection=N.numClipIntersection,z.vertexAlphas=N.vertexAlphas,z.vertexTangents=N.vertexTangents,z.toneMapping=N.toneMapping}function $d(S,N,z,G,k){N.isScene!==!0&&(N=Mt),C.resetTextureUnits();const te=N.fog,ce=G.isMeshStandardMaterial?N.environment:null,me=I===null?x.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Yt,ve=(G.isMeshStandardMaterial?B:M).get(G.envMap||ce),Ue=G.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,De=!!z.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ae=!!z.morphAttributes.position,Qe=!!z.morphAttributes.normal,it=!!z.morphAttributes.color;let bt=Xn;G.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(bt=x.toneMapping);const vt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,et=vt!==void 0?vt.length:0,Re=Te.get(G),kt=p.state.lights;if(ne===!0&&(Me===!0||S!==v)){const Gt=S===v&&G.id===w;ie.setState(G,S,Gt)}let st=!1;G.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==kt.state.version||Re.outputColorSpace!==me||k.isBatchedMesh&&Re.batching===!1||!k.isBatchedMesh&&Re.batching===!0||k.isBatchedMesh&&Re.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Re.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Re.instancing===!1||!k.isInstancedMesh&&Re.instancing===!0||k.isSkinnedMesh&&Re.skinning===!1||!k.isSkinnedMesh&&Re.skinning===!0||k.isInstancedMesh&&Re.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Re.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Re.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Re.instancingMorph===!1&&k.morphTexture!==null||Re.envMap!==ve||G.fog===!0&&Re.fog!==te||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==ie.numPlanes||Re.numIntersection!==ie.numIntersection)||Re.vertexAlphas!==Ue||Re.vertexTangents!==De||Re.morphTargets!==Ae||Re.morphNormals!==Qe||Re.morphColors!==it||Re.toneMapping!==bt||Re.morphTargetsCount!==et)&&(st=!0):(st=!0,Re.__version=G.version);let pn=Re.currentProgram;st===!0&&(pn=ar(G,N,k));let Ri=!1,Jt=!1,ys=!1;const _t=pn.getUniforms(),rn=Re.uniforms;if(Ee.useProgram(pn.program)&&(Ri=!0,Jt=!0,ys=!0),G.id!==w&&(w=G.id,Jt=!0),Ri||v!==S){Ee.buffers.depth.getReversed()?(ae.copy(S.projectionMatrix),nf(ae),sf(ae),_t.setValue(L,"projectionMatrix",ae)):_t.setValue(L,"projectionMatrix",S.projectionMatrix),_t.setValue(L,"viewMatrix",S.matrixWorldInverse);const Kt=_t.map.cameraPosition;Kt!==void 0&&Kt.setValue(L,tt.setFromMatrixPosition(S.matrixWorld)),qe.logarithmicDepthBuffer&&_t.setValue(L,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&_t.setValue(L,"isOrthographic",S.isOrthographicCamera===!0),v!==S&&(v=S,Jt=!0,ys=!0)}if(k.isSkinnedMesh){_t.setOptional(L,k,"bindMatrix"),_t.setOptional(L,k,"bindMatrixInverse");const Gt=k.skeleton;Gt&&(Gt.boneTexture===null&&Gt.computeBoneTexture(),_t.setValue(L,"boneTexture",Gt.boneTexture,C))}k.isBatchedMesh&&(_t.setOptional(L,k,"batchingTexture"),_t.setValue(L,"batchingTexture",k._matricesTexture,C),_t.setOptional(L,k,"batchingIdTexture"),_t.setValue(L,"batchingIdTexture",k._indirectTexture,C),_t.setOptional(L,k,"batchingColorTexture"),k._colorsTexture!==null&&_t.setValue(L,"batchingColorTexture",k._colorsTexture,C));const an=z.morphAttributes;if((an.position!==void 0||an.normal!==void 0||an.color!==void 0)&&ke.update(k,z,pn),(Jt||Re.receiveShadow!==k.receiveShadow)&&(Re.receiveShadow=k.receiveShadow,_t.setValue(L,"receiveShadow",k.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(rn.envMap.value=ve,rn.flipEnvMap.value=ve.isCubeTexture&&ve.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&N.environment!==null&&(rn.envMapIntensity.value=N.environmentIntensity),Jt&&(_t.setValue(L,"toneMappingExposure",x.toneMappingExposure),Re.needsLights&&Jd(rn,ys),te&&G.fog===!0&&he.refreshFogUniforms(rn,te),he.refreshMaterialUniforms(rn,G,H,q,p.state.transmissionRenderTarget[S.id]),Qr.upload(L,Ql(Re),rn,C)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Qr.upload(L,Ql(Re),rn,C),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&_t.setValue(L,"center",k.center),_t.setValue(L,"modelViewMatrix",k.modelViewMatrix),_t.setValue(L,"normalMatrix",k.normalMatrix),_t.setValue(L,"modelMatrix",k.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Gt=G.uniformsGroups;for(let Kt=0,fa=Gt.length;Kt<fa;Kt++){const ui=Gt[Kt];D.update(ui,pn),D.bind(ui,pn)}}return pn}function Jd(S,N){S.ambientLightColor.needsUpdate=N,S.lightProbe.needsUpdate=N,S.directionalLights.needsUpdate=N,S.directionalLightShadows.needsUpdate=N,S.pointLights.needsUpdate=N,S.pointLightShadows.needsUpdate=N,S.spotLights.needsUpdate=N,S.spotLightShadows.needsUpdate=N,S.rectAreaLights.needsUpdate=N,S.hemisphereLights.needsUpdate=N}function Zd(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(S,N,z){const G=Te.get(S);G.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),Te.get(S.texture).__webglTexture=N,Te.get(S.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:z,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,N){const z=Te.get(S);z.__webglFramebuffer=N,z.__useDefaultFramebuffer=N===void 0};const Qd=L.createFramebuffer();this.setRenderTarget=function(S,N=0,z=0){I=S,A=N,E=z;let G=!0,k=null,te=!1,ce=!1;if(S){const ve=Te.get(S);if(ve.__useDefaultFramebuffer!==void 0)Ee.bindFramebuffer(L.FRAMEBUFFER,null),G=!1;else if(ve.__webglFramebuffer===void 0)C.setupRenderTarget(S);else if(ve.__hasExternalTextures)C.rebindTextures(S,Te.get(S.texture).__webglTexture,Te.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Ae=S.depthTexture;if(ve.__boundDepthTexture!==Ae){if(Ae!==null&&Te.has(Ae)&&(S.width!==Ae.image.width||S.height!==Ae.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(S)}}const Ue=S.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(ce=!0);const De=Te.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(De[N])?k=De[N][z]:k=De[N],te=!0):S.samples>0&&C.useMultisampledRTT(S)===!1?k=Te.get(S).__webglMultisampledFramebuffer:Array.isArray(De)?k=De[z]:k=De,P.copy(S.viewport),F.copy(S.scissor),O=S.scissorTest}else P.copy(Se).multiplyScalar(H).floor(),F.copy(Ve).multiplyScalar(H).floor(),O=ot;if(z!==0&&(k=Qd),Ee.bindFramebuffer(L.FRAMEBUFFER,k)&&G&&Ee.drawBuffers(S,k),Ee.viewport(P),Ee.scissor(F),Ee.setScissorTest(O),te){const ve=Te.get(S.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+N,ve.__webglTexture,z)}else if(ce){const ve=Te.get(S.texture),Ue=N;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,ve.__webglTexture,z,Ue)}else if(S!==null&&z!==0){const ve=Te.get(S.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ve.__webglTexture,z)}w=-1},this.readRenderTargetPixels=function(S,N,z,G,k,te,ce){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let me=Te.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ce!==void 0&&(me=me[ce]),me){Ee.bindFramebuffer(L.FRAMEBUFFER,me);try{const ve=S.texture,Ue=ve.format,De=ve.type;if(!qe.textureFormatReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qe.textureTypeReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=S.width-G&&z>=0&&z<=S.height-k&&L.readPixels(N,z,G,k,He.convert(Ue),He.convert(De),te)}finally{const ve=I!==null?Te.get(I).__webglFramebuffer:null;Ee.bindFramebuffer(L.FRAMEBUFFER,ve)}}},this.readRenderTargetPixelsAsync=async function(S,N,z,G,k,te,ce){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let me=Te.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ce!==void 0&&(me=me[ce]),me)if(N>=0&&N<=S.width-G&&z>=0&&z<=S.height-k){Ee.bindFramebuffer(L.FRAMEBUFFER,me);const ve=S.texture,Ue=ve.format,De=ve.type;if(!qe.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qe.textureTypeReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ae=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ae),L.bufferData(L.PIXEL_PACK_BUFFER,te.byteLength,L.STREAM_READ),L.readPixels(N,z,G,k,He.convert(Ue),He.convert(De),0);const Qe=I!==null?Te.get(I).__webglFramebuffer:null;Ee.bindFramebuffer(L.FRAMEBUFFER,Qe);const it=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await tf(L,it,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ae),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,te),L.deleteBuffer(Ae),L.deleteSync(it),te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,N=null,z=0){const G=Math.pow(2,-z),k=Math.floor(S.image.width*G),te=Math.floor(S.image.height*G),ce=N!==null?N.x:0,me=N!==null?N.y:0;C.setTexture2D(S,0),L.copyTexSubImage2D(L.TEXTURE_2D,z,0,0,ce,me,k,te),Ee.unbindTexture()};const eu=L.createFramebuffer(),tu=L.createFramebuffer();this.copyTextureToTexture=function(S,N,z=null,G=null,k=0,te=null){te===null&&(k!==0?(Jr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),te=k,k=0):te=0);let ce,me,ve,Ue,De,Ae,Qe,it,bt;const vt=S.isCompressedTexture?S.mipmaps[te]:S.image;if(z!==null)ce=z.max.x-z.min.x,me=z.max.y-z.min.y,ve=z.isBox3?z.max.z-z.min.z:1,Ue=z.min.x,De=z.min.y,Ae=z.isBox3?z.min.z:0;else{const an=Math.pow(2,-k);ce=Math.floor(vt.width*an),me=Math.floor(vt.height*an),S.isDataArrayTexture?ve=vt.depth:S.isData3DTexture?ve=Math.floor(vt.depth*an):ve=1,Ue=0,De=0,Ae=0}G!==null?(Qe=G.x,it=G.y,bt=G.z):(Qe=0,it=0,bt=0);const et=He.convert(N.format),Re=He.convert(N.type);let kt;N.isData3DTexture?(C.setTexture3D(N,0),kt=L.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(C.setTexture2DArray(N,0),kt=L.TEXTURE_2D_ARRAY):(C.setTexture2D(N,0),kt=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,N.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,N.unpackAlignment);const st=L.getParameter(L.UNPACK_ROW_LENGTH),pn=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Ri=L.getParameter(L.UNPACK_SKIP_PIXELS),Jt=L.getParameter(L.UNPACK_SKIP_ROWS),ys=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,vt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,vt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ue),L.pixelStorei(L.UNPACK_SKIP_ROWS,De),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ae);const _t=S.isDataArrayTexture||S.isData3DTexture,rn=N.isDataArrayTexture||N.isData3DTexture;if(S.isDepthTexture){const an=Te.get(S),Gt=Te.get(N),Kt=Te.get(an.__renderTarget),fa=Te.get(Gt.__renderTarget);Ee.bindFramebuffer(L.READ_FRAMEBUFFER,Kt.__webglFramebuffer),Ee.bindFramebuffer(L.DRAW_FRAMEBUFFER,fa.__webglFramebuffer);for(let ui=0;ui<ve;ui++)_t&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Te.get(S).__webglTexture,k,Ae+ui),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Te.get(N).__webglTexture,te,bt+ui)),L.blitFramebuffer(Ue,De,ce,me,Qe,it,ce,me,L.DEPTH_BUFFER_BIT,L.NEAREST);Ee.bindFramebuffer(L.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(k!==0||S.isRenderTargetTexture||Te.has(S)){const an=Te.get(S),Gt=Te.get(N);Ee.bindFramebuffer(L.READ_FRAMEBUFFER,eu),Ee.bindFramebuffer(L.DRAW_FRAMEBUFFER,tu);for(let Kt=0;Kt<ve;Kt++)_t?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,an.__webglTexture,k,Ae+Kt):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,an.__webglTexture,k),rn?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Gt.__webglTexture,te,bt+Kt):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Gt.__webglTexture,te),k!==0?L.blitFramebuffer(Ue,De,ce,me,Qe,it,ce,me,L.COLOR_BUFFER_BIT,L.NEAREST):rn?L.copyTexSubImage3D(kt,te,Qe,it,bt+Kt,Ue,De,ce,me):L.copyTexSubImage2D(kt,te,Qe,it,Ue,De,ce,me);Ee.bindFramebuffer(L.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else rn?S.isDataTexture||S.isData3DTexture?L.texSubImage3D(kt,te,Qe,it,bt,ce,me,ve,et,Re,vt.data):N.isCompressedArrayTexture?L.compressedTexSubImage3D(kt,te,Qe,it,bt,ce,me,ve,et,vt.data):L.texSubImage3D(kt,te,Qe,it,bt,ce,me,ve,et,Re,vt):S.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,te,Qe,it,ce,me,et,Re,vt.data):S.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,te,Qe,it,vt.width,vt.height,et,vt.data):L.texSubImage2D(L.TEXTURE_2D,te,Qe,it,ce,me,et,Re,vt);L.pixelStorei(L.UNPACK_ROW_LENGTH,st),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,pn),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ri),L.pixelStorei(L.UNPACK_SKIP_ROWS,Jt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,ys),te===0&&N.generateMipmaps&&L.generateMipmap(kt),Ee.unbindTexture()},this.copyTextureToTexture3D=function(S,N,z=null,G=null,k=0){return Jr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,N,z,G,k)},this.initRenderTarget=function(S){Te.get(S).__webglFramebuffer===void 0&&C.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?C.setTextureCube(S,0):S.isData3DTexture?C.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?C.setTexture2DArray(S,0):C.setTexture2D(S,0),Ee.unbindTexture()},this.resetState=function(){A=0,E=0,I=null,Ee.reset(),pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ye._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ye._getUnpackColorSpace()}}const sx={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class tr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const rx=new la(-1,1,1,-1,0,1);class ax extends It{constructor(){super(),this.setAttribute("position",new ut([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ut([0,2,0,0,2,0],2))}}const ox=new ax;class Fd{constructor(e){this._mesh=new ee(ox,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,rx)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Bd extends tr{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof wn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Cl.clone(e.uniforms),this.material=new wn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Fd(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class vh extends tr{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class lx extends tr{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class cx{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Ce);this._width=n.width,this._height=n.height,t=new li(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ps}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Bd(sx),this.copyPass.material.blending=Wn,this.clock=new Pd}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}vh!==void 0&&(a instanceof vh?n=!0:a instanceof lx&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ce);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class hx extends tr{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ge}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=i}}const dx={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new Ce(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec2 resolution;
		varying vec2 vUv;

		#define EDGE_STEP_COUNT 6
		#define EDGE_GUESS 8.0
		#define EDGE_STEPS 1.0, 1.5, 2.0, 2.0, 2.0, 4.0
		const float edgeSteps[EDGE_STEP_COUNT] = float[EDGE_STEP_COUNT]( EDGE_STEPS );

		float _ContrastThreshold = 0.0312;
		float _RelativeThreshold = 0.063;
		float _SubpixelBlending = 1.0;

		vec4 Sample( sampler2D  tex2D, vec2 uv ) {

			return texture( tex2D, uv );

		}

		float SampleLuminance( sampler2D tex2D, vec2 uv ) {

			return dot( Sample( tex2D, uv ).rgb, vec3( 0.3, 0.59, 0.11 ) );

		}

		float SampleLuminance( sampler2D tex2D, vec2 texSize, vec2 uv, float uOffset, float vOffset ) {

			uv += texSize * vec2(uOffset, vOffset);
			return SampleLuminance(tex2D, uv);

		}

		struct LuminanceData {

			float m, n, e, s, w;
			float ne, nw, se, sw;
			float highest, lowest, contrast;

		};

		LuminanceData SampleLuminanceNeighborhood( sampler2D tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData l;
			l.m = SampleLuminance( tex2D, uv );
			l.n = SampleLuminance( tex2D, texSize, uv,  0.0,  1.0 );
			l.e = SampleLuminance( tex2D, texSize, uv,  1.0,  0.0 );
			l.s = SampleLuminance( tex2D, texSize, uv,  0.0, -1.0 );
			l.w = SampleLuminance( tex2D, texSize, uv, -1.0,  0.0 );

			l.ne = SampleLuminance( tex2D, texSize, uv,  1.0,  1.0 );
			l.nw = SampleLuminance( tex2D, texSize, uv, -1.0,  1.0 );
			l.se = SampleLuminance( tex2D, texSize, uv,  1.0, -1.0 );
			l.sw = SampleLuminance( tex2D, texSize, uv, -1.0, -1.0 );

			l.highest = max( max( max( max( l.n, l.e ), l.s ), l.w ), l.m );
			l.lowest = min( min( min( min( l.n, l.e ), l.s ), l.w ), l.m );
			l.contrast = l.highest - l.lowest;
			return l;

		}

		bool ShouldSkipPixel( LuminanceData l ) {

			float threshold = max( _ContrastThreshold, _RelativeThreshold * l.highest );
			return l.contrast < threshold;

		}

		float DeterminePixelBlendFactor( LuminanceData l ) {

			float f = 2.0 * ( l.n + l.e + l.s + l.w );
			f += l.ne + l.nw + l.se + l.sw;
			f *= 1.0 / 12.0;
			f = abs( f - l.m );
			f = clamp( f / l.contrast, 0.0, 1.0 );

			float blendFactor = smoothstep( 0.0, 1.0, f );
			return blendFactor * blendFactor * _SubpixelBlending;

		}

		struct EdgeData {

			bool isHorizontal;
			float pixelStep;
			float oppositeLuminance, gradient;

		};

		EdgeData DetermineEdge( vec2 texSize, LuminanceData l ) {

			EdgeData e;
			float horizontal =
				abs( l.n + l.s - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.se - 2.0 * l.e ) +
				abs( l.nw + l.sw - 2.0 * l.w );
			float vertical =
				abs( l.e + l.w - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.nw - 2.0 * l.n ) +
				abs( l.se + l.sw - 2.0 * l.s );
			e.isHorizontal = horizontal >= vertical;

			float pLuminance = e.isHorizontal ? l.n : l.e;
			float nLuminance = e.isHorizontal ? l.s : l.w;
			float pGradient = abs( pLuminance - l.m );
			float nGradient = abs( nLuminance - l.m );

			e.pixelStep = e.isHorizontal ? texSize.y : texSize.x;

			if (pGradient < nGradient) {

				e.pixelStep = -e.pixelStep;
				e.oppositeLuminance = nLuminance;
				e.gradient = nGradient;

			} else {

				e.oppositeLuminance = pLuminance;
				e.gradient = pGradient;

			}

			return e;

		}

		float DetermineEdgeBlendFactor( sampler2D  tex2D, vec2 texSize, LuminanceData l, EdgeData e, vec2 uv ) {

			vec2 uvEdge = uv;
			vec2 edgeStep;
			if (e.isHorizontal) {

				uvEdge.y += e.pixelStep * 0.5;
				edgeStep = vec2( texSize.x, 0.0 );

			} else {

				uvEdge.x += e.pixelStep * 0.5;
				edgeStep = vec2( 0.0, texSize.y );

			}

			float edgeLuminance = ( l.m + e.oppositeLuminance ) * 0.5;
			float gradientThreshold = e.gradient * 0.25;

			vec2 puv = uvEdge + edgeStep * edgeSteps[0];
			float pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
			bool pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !pAtEnd; i++ ) {

				puv += edgeStep * edgeSteps[i];
				pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
				pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			}

			if ( !pAtEnd ) {

				puv += edgeStep * EDGE_GUESS;

			}

			vec2 nuv = uvEdge - edgeStep * edgeSteps[0];
			float nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
			bool nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !nAtEnd; i++ ) {

				nuv -= edgeStep * edgeSteps[i];
				nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
				nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			}

			if ( !nAtEnd ) {

				nuv -= edgeStep * EDGE_GUESS;

			}

			float pDistance, nDistance;
			if ( e.isHorizontal ) {

				pDistance = puv.x - uv.x;
				nDistance = uv.x - nuv.x;

			} else {

				pDistance = puv.y - uv.y;
				nDistance = uv.y - nuv.y;

			}

			float shortestDistance;
			bool deltaSign;
			if ( pDistance <= nDistance ) {

				shortestDistance = pDistance;
				deltaSign = pLuminanceDelta >= 0.0;

			} else {

				shortestDistance = nDistance;
				deltaSign = nLuminanceDelta >= 0.0;

			}

			if ( deltaSign == ( l.m - edgeLuminance >= 0.0 ) ) {

				return 0.0;

			}

			return 0.5 - shortestDistance / ( pDistance + nDistance );

		}

		vec4 ApplyFXAA( sampler2D  tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData luminance = SampleLuminanceNeighborhood( tex2D, texSize, uv );
			if ( ShouldSkipPixel( luminance ) ) {

				return Sample( tex2D, uv );

			}

			float pixelBlend = DeterminePixelBlendFactor( luminance );
			EdgeData edge = DetermineEdge( texSize, luminance );
			float edgeBlend = DetermineEdgeBlendFactor( tex2D, texSize, luminance, edge, uv );
			float finalBlend = max( pixelBlend, edgeBlend );

			if (edge.isHorizontal) {

				uv.y += edge.pixelStep * finalBlend;

			} else {

				uv.x += edge.pixelStep * finalBlend;

			}

			return Sample( tex2D, uv );

		}

		void main() {

			gl_FragColor = ApplyFXAA( tDiffuse, resolution.xy, vUv );

		}`},Br={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class ux extends tr{constructor(){super(),this.uniforms=Cl.clone(Br.uniforms),this.material=new Of({name:Br.name,uniforms:this.uniforms,vertexShader:Br.vertexShader,fragmentShader:Br.fragmentShader}),this._fsQuad=new Fd(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Ye.getTransfer(this._outputColorSpace)===ct&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Wh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Xh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===jh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Yh?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===qh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===$h?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Kh&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const Ja=new Map;let ei=null,yi=null;function Vl(){if(yi)return yi;const s=document.createElement("canvas");s.width=4,s.height=1;const e=s.getContext("2d"),t=e.createLinearGradient(0,0,4,0);return t.addColorStop(0,"#383838"),t.addColorStop(.42,"#9a9a9a"),t.addColorStop(1,"#ffffff"),e.fillStyle=t,e.fillRect(0,0,4,1),yi=new Ht(s),yi.minFilter=Ut,yi.magFilter=Ut,yi.generateMipmaps=!1,yi}function Mh(s){var t;if(!s||s.isMeshToonMaterial)return s;const e=new Fl({color:((t=s.color)==null?void 0:t.clone())??new ge(16777215),map:s.map??null,gradientMap:Vl(),transparent:s.transparent??!1,opacity:s.opacity??1,side:s.side??An,alphaTest:s.alphaTest??0});return e.map&&(e.map.colorSpace=mt,e.map.anisotropy=8),e}function U(s,e={}){const{map:t,transparent:n,opacity:i,emissive:r,emissiveIntensity:a,...o}=e,l=`toon:${s}:${(t==null?void 0:t.uuid)??""}:${n}:${i}:${JSON.stringify(o)}`;if(!Ja.has(l)){const c=new Fl({color:s,gradientMap:Vl(),map:t??null,transparent:n??!1,opacity:i??1,...o});r!=null&&(c.emissive=new ge(r),c.emissiveIntensity=a??.4),Ja.set(l,c)}return Ja.get(l)}function Od(s,e=1.068,t=657936){if(!s.geometry||s.userData.hasOutline)return s;const n=new ee(s.geometry,new dt({color:t,side:zt}));return n.scale.multiplyScalar(e),n.userData.isOutline=!0,n.raycast=()=>{},s.add(n),s.userData.hasOutline=!0,s}function Z(s,e,t=1.068){const n=new ee(s,e);return Od(n,t),n}function ft(s,e,t=1.042){return Z(s,e,t)}function fx(){if(ei)return ei;const s=256,e=document.createElement("canvas");e.width=s,e.height=s;const t=e.getContext("2d");t.fillStyle="#6a9a78",t.fillRect(0,0,s,s);for(let n=0;n<120;n++){const i=Math.random()*s,r=Math.random()*s,a=8+Math.random()*22;t.beginPath(),t.arc(i,r,a,0,Math.PI*2),t.fillStyle=Math.random()>.5?"rgba(90,140,100,0.35)":"rgba(110,160,115,0.28)",t.fill()}for(let n=0;n<6e3;n++){const i=Math.random()*s,r=Math.random()*s,a=100+Math.floor(Math.random()*40);t.fillStyle=`rgba(${a-25},${a+10},${a-30},0.22)`,t.fillRect(i,r,1,2+Math.random()*2)}return ei=new Ht(e),ei.wrapS=ei.wrapT=oi,ei.repeat.set(40,40),ei.colorSpace=mt,ei}const Za=new Map;function zd(s=5943464){const e=s.toString(16);if(Za.has(e))return Za.get(e);const t=document.createElement("canvas");t.width=128,t.height=192;const n=t.getContext("2d"),i=`#${new ge(s).getHexString()}`;n.fillStyle="#283038",n.fillRect(0,0,128,192),n.fillStyle=i,n.fillRect(0,0,128,22),n.fillStyle="#f0f8ff",n.font="bold 14px sans-serif",n.textAlign="center",n.fillText("DRINKS",64,16);const r=["#e8a050","#f0d050","#70b8c8","#e87878","#88c878","#c8a0e0"];for(let o=0;o<5;o++)for(let l=0;l<3;l++){const c=18+l*32,h=30+o*30;n.fillStyle=r[(o*3+l)%r.length],n.fillRect(c,h,18,22),n.strokeStyle="#1a1a1a",n.lineWidth=2,n.strokeRect(c,h,18,22),n.fillStyle="rgba(255,255,255,0.4)",n.fillRect(c+2,h+2,5,16)}n.fillStyle="#8898a8",n.fillRect(96,150,24,32),n.fillStyle="#f0f0f0",n.font="10px sans-serif",n.fillText("¥",108,170);const a=new Ht(t);return a.colorSpace=mt,Za.set(e,a),a}let ti=null;function px(){if(ti)return ti;const s=256,e=document.createElement("canvas");e.width=s,e.height=s;const t=e.getContext("2d");t.fillStyle="#4a90a8",t.fillRect(0,0,s,s);for(let n=0;n<s;n+=4)for(let i=0;i<s;i+=4){const r=.15+Math.sin(i*.08+n*.05)*.12+Math.random()*.08;t.fillStyle=`rgba(255,255,255,${r.toFixed(2)})`,t.fillRect(i,n,3,2)}return ti=new Ht(e),ti.wrapS=ti.wrapT=oi,ti.repeat.set(4,4),ti.colorSpace=mt,ti}function Hd(){const s=px(),e=new Fl({color:6992064,gradientMap:Vl(),map:s,transparent:!0,opacity:.9});return e.userData.waterMap=s,e}const We={road:13157564,roadLine:15265e3,sidewalk:14210252,wall:14210252,wallDark:12104876,roof:6972504,roofDark:5393476,green:8239234,meadow:6986360,gravel:11052188,vending:5943464,orange:15773792,skin:15782064,hair:1710618,shirt:16316664,pants:1710618,backpack:10000536,cone:15769680,sign:6986362,metal:9474192,awningRed:14186600,awningBlue:6850736};function Qa(){return new Promise(s=>requestAnimationFrame(s))}function bh(s,e){if(e===Au)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===nl||e===hd){let t=s.getIndex();if(t===null){const a=[],o=s.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===nl)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class mx extends _s{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new vx(t)}),this.register(function(t){return new Mx(t)}),this.register(function(t){return new Ix(t)}),this.register(function(t){return new Px(t)}),this.register(function(t){return new Lx(t)}),this.register(function(t){return new wx(t)}),this.register(function(t){return new Sx(t)}),this.register(function(t){return new Tx(t)}),this.register(function(t){return new Ex(t)}),this.register(function(t){return new yx(t)}),this.register(function(t){return new Ax(t)}),this.register(function(t){return new bx(t)}),this.register(function(t){return new Rx(t)}),this.register(function(t){return new Cx(t)}),this.register(function(t){return new _x(t)}),this.register(function(t){return new Dx(t)}),this.register(function(t){return new Nx(t)})}load(e,t,n,i){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=zs.extractUrlBase(e);a=zs.resolveURL(c,this.path)}else a=zs.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Id(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Gd){try{a[je.KHR_BINARY_GLTF]=new kx(e)}catch(d){i&&i(d);return}r=JSON.parse(a[je.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new Kx(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const d=this.pluginCallbacks[h](c);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[d.name]=d,a[d.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const d=r.extensionsUsed[h],u=r.extensionsRequired||[];switch(d){case je.KHR_MATERIALS_UNLIT:a[d]=new xx;break;case je.KHR_DRACO_MESH_COMPRESSION:a[d]=new Ux(r,this.dracoLoader);break;case je.KHR_TEXTURE_TRANSFORM:a[d]=new Fx;break;case je.KHR_MESH_QUANTIZATION:a[d]=new Bx;break;default:u.indexOf(d)>=0&&o[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function gx(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const je={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class _x{constructor(e){this.parser=e,this.name=je.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const h=new ge(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Yt);const d=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new ol(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Si(h),c.distance=d;break;case"spot":c=new np(h),c.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Hn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class xx{constructor(){this.name=je.KHR_MATERIALS_UNLIT}getMaterialType(){return dt}extendParams(e,t,n){const i=[];e.color=new ge(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Yt),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,mt))}return Promise.all(i)}}class yx{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class vx{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ce(o,o)}return Promise.all(r)}}class Mx{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class bx{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class wx{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new ge(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Yt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,mt)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class Sx{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class Tx{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new ge().setRGB(o[0],o[1],o[2],Yt),Promise.all(r)}}class Ex{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class Ax{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new ge().setRGB(o[0],o[1],o[2],Yt),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,mt)),Promise.all(r)}}class Cx{constructor(e){this.parser=e,this.name=je.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}}class Rx{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}}class Ix{constructor(e){this.parser=e,this.name=je.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class Px{constructor(e){this.parser=e,this.name=je.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Lx{constructor(e){this.parser=e,this.name=je.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Dx{constructor(e){this.name=je.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,d=i.byteStride,u=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,d,u,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(h*d);return a.decodeGltfBuffer(new Uint8Array(f),h,d,u,i.mode,i.filter),f})})}else return null}}class Nx{constructor(e){this.name=je.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==ln.TRIANGLES&&c.mode!==ln.TRIANGLE_STRIP&&c.mode!==ln.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const h=c.pop(),d=h.isGroup?h.children:[h],u=c[0].count,f=[];for(const g of d){const _=new Fe,m=new T,p=new Mn,y=new T(1,1,1),b=new Os(g.geometry,g.material,u);for(let x=0;x<u;x++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,x),l.SCALE&&y.fromBufferAttribute(l.SCALE,x),b.setMatrixAt(x,_.compose(m,p,y));for(const x in l)if(x==="_COLOR_0"){const R=l[x];b.instanceColor=new sl(R.array,R.itemSize,R.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&g.geometry.setAttribute(x,l[x]);at.prototype.copy.call(b,g),this.parser.assignFinalMaterial(b),f.push(b)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const Gd="glTF",Ps=12,wh={JSON:1313821514,BIN:5130562};class kx{constructor(e){this.name=je.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ps),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Gd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Ps,r=new DataView(e,Ps);let a=0;for(;a<i;){const o=r.getUint32(a,!0);a+=4;const l=r.getUint32(a,!0);if(a+=4,l===wh.JSON){const c=new Uint8Array(e,Ps+a,o);this.content=n.decode(c)}else if(l===wh.BIN){const c=Ps+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Ux{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=je.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const h in a){const d=hl[h]||h.toLowerCase();o[d]=a[h]}for(const h in e.attributes){const d=hl[h]||h.toLowerCase();if(a[h]!==void 0){const u=n.accessors[e.attributes[h]],f=ss[u.componentType];c[d]=f.name,l[d]=u.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(d,u){i.decodeDracoFile(h,function(f){for(const g in f.attributes){const _=f.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}d(f)},o,c,Yt,u)})})}}class Fx{constructor(){this.name=je.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Bx{constructor(){this.name=je.KHR_MESH_QUANTIZATION}}class Vd extends Qs{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=i-t,d=(n-t)/h,u=d*d,f=u*d,g=e*c,_=g-c,m=-2*f+3*u,p=f-u,y=1-m,b=p-u+d;for(let x=0;x!==o;x++){const R=a[_+x+o],A=a[_+x+l]*h,E=a[g+x+o],I=a[g+x]*h;r[x]=y*R+b*A+m*E+p*I}return r}}const Ox=new Mn;class zx extends Vd{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return Ox.fromArray(r).normalize().toArray(r),r}}const ln={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},ss={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Sh={9728:Ut,9729:tn,9984:Zh,9985:Xr,9986:Ds,9987:Gn},Th={33071:ri,33648:ta,10497:oi},eo={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},hl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ni={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Hx={CUBICSPLINE:void 0,LINEAR:Ks,STEP:Ys},to={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Gx(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Ul({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:An})),s.DefaultMaterial}function vi(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Hn(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Vx(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,h=e.length;c<h;c++){const d=e[c];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(i=!0),d.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){const d=e[c];if(n){const u=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):s.attributes.position;a.push(u)}if(i){const u=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):s.attributes.normal;o.push(u)}if(r){const u=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):s.attributes.color;l.push(u)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const h=c[0],d=c[1],u=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=d),r&&(s.morphAttributes.color=u),s.morphTargetsRelative=!0,s})}function Wx(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Xx(s){let e;const t=s.extensions&&s.extensions[je.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+no(t.attributes):e=s.indices+":"+no(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+no(s.targets[n]);return e}function no(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function dl(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function jx(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Yx=new Fe;class Kx{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new gx,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&a<98?this.textureLoader=new Qf(this.options.manager):this.textureLoader=new ap(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Id(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return vi(r,o,i),Hn(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,h]of a.children.entries())r(h,o.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[je.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,a){n.load(zs.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=eo[i.type],o=ss[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new jt(c,a,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],l=eo[i.type],c=ss[i.componentType],h=c.BYTES_PER_ELEMENT,d=h*l,u=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,m;if(f&&f!==d){const p=Math.floor(u/f),y="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let b=t.cache.get(y);b||(_=new c(o,p*f,i.count*f/h),b=new vd(_,f/h),t.cache.add(y,b)),m=new $s(b,l,u%f/h,g)}else o===null?_=new c(i.count*l):_=new c(o,u,i.count*l),m=new jt(_,l,g);if(i.sparse!==void 0){const p=eo.SCALAR,y=ss[i.sparse.indices.componentType],b=i.sparse.indices.byteOffset||0,x=i.sparse.values.byteOffset||0,R=new y(a[1],b,i.sparse.count*p),A=new c(a[2],x,i.sparse.count*l);o!==null&&(m=new jt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let E=0,I=R.length;E<I;E++){const w=R[E];if(m.setX(w,A[E*l]),l>=2&&m.setY(w,A[E*l+1]),l>=3&&m.setZ(w,A[E*l+2]),l>=4&&m.setW(w,A[E*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const i=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const u=(r.samplers||{})[a.sampler]||{};return h.magFilter=Sh[u.magFilter]||tn,h.minFilter=Sh[u.minFilter]||Gn,h.wrapS=Th[u.wrapS]||oi,h.wrapT=Th[u.wrapT]||oi,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Ut&&h.minFilter!==tn,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const a=i.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(d){c=!0;const u=new Blob([d],{type:a.mimeType});return l=o.createObjectURL(u),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(d){return new Promise(function(u,f){let g=u;t.isImageBitmapLoader===!0&&(g=function(_){const m=new Et(_);m.needsUpdate=!0,u(m)}),t.load(zs.resolveURL(d,r.path),g,void 0,f)})}).then(function(d){return c===!0&&o.revokeObjectURL(l),Hn(d,a),d.userData.mimeType=a.mimeType||jx(a.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[je.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[je.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=r.associations.get(a);a=r.extensions[je.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Td,un.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Sd,un.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Ul}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let a;const o={},l=r.extensions||{},c=[];if(l[je.KHR_MATERIALS_UNLIT]){const d=i[je.KHR_MATERIALS_UNLIT];a=d.getMaterialType(),c.push(d.extendParams(o,r,t))}else{const d=r.pbrMetallicRoughness||{};if(o.color=new ge(1,1,1),o.opacity=1,Array.isArray(d.baseColorFactor)){const u=d.baseColorFactor;o.color.setRGB(u[0],u[1],u[2],Yt),o.opacity=u[3]}d.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",d.baseColorTexture,mt)),o.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,o.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",d.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",d.metallicRoughnessTexture))),a=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=cn);const h=r.alphaMode||to.OPAQUE;if(h===to.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===to.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==dt&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Ce(1,1),r.normalTexture.scale!==void 0)){const d=r.normalTexture.scale;o.normalScale.set(d,d)}if(r.occlusionTexture!==void 0&&a!==dt&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==dt){const d=r.emissiveFactor;o.emissive=new ge().setRGB(d[0],d[1],d[2],Yt)}return r.emissiveTexture!==void 0&&a!==dt&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,mt)),Promise.all(c).then(function(){const d=new a(o);return r.name&&(d.name=r.name),Hn(d,r),t.associations.set(d,{materials:e}),r.extensions&&vi(i,d,r),d})}createUniqueName(e){const t=rt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[je.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Eh(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],h=Xx(c),d=i[h];if(d)a.push(d.promise);else{let u;c.extensions&&c.extensions[je.KHR_DRACO_MESH_COMPRESSION]?u=r(c):u=Eh(new It,c,t),i[h]={primitive:c,promise:u},a.push(u)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const h=a[l].material===void 0?Gx(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],d=[];for(let f=0,g=h.length;f<g;f++){const _=h[f],m=a[f];let p;const y=c[f];if(m.mode===ln.TRIANGLES||m.mode===ln.TRIANGLE_STRIP||m.mode===ln.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new If(_,y):new ee(_,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===ln.TRIANGLE_STRIP?p.geometry=bh(p.geometry,hd):m.mode===ln.TRIANGLE_FAN&&(p.geometry=bh(p.geometry,nl));else if(m.mode===ln.LINES)p=new kf(_,y);else if(m.mode===ln.LINE_STRIP)p=new Ll(_,y);else if(m.mode===ln.LINE_LOOP)p=new Uf(_,y);else if(m.mode===ln.POINTS)p=new Ff(_,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&Wx(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Hn(p,r),m.extensions&&vi(i,p,m),t.assignFinalMaterial(p),d.push(p)}for(let f=0,g=d.length;f<g;f++)t.associations.set(d[f],{meshes:e,primitives:f});if(d.length===1)return r.extensions&&vi(i,d[0],r),d[0];const u=new we;r.extensions&&vi(i,u,r),t.associations.set(u,{meshes:e});for(let f=0,g=d.length;f<g;f++)u.add(d[f]);return u})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Xt($t.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new la(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Hn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),a=i,o=[],l=[];for(let c=0,h=a.length;c<h;c++){const d=a[c];if(d){o.push(d);const u=new Fe;r!==null&&u.fromArray(r.array,c*16),l.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Il(o,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let d=0,u=i.channels.length;d<u;d++){const f=i.channels[d],g=i.samplers[f.sampler],_=f.target,m=_.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,y=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",y)),c.push(g),h.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(d){const u=d[0],f=d[1],g=d[2],_=d[3],m=d[4],p=[];for(let y=0,b=u.length;y<b;y++){const x=u[y],R=f[y],A=g[y],E=_[y],I=m[y];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const w=n._createAnimationTracks(x,R,A,E,I);if(w)for(let v=0;v<w.length;v++)p.push(w[v])}return new al(r,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){const h=c[0],d=c[1],u=c[2];u!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(u,Yx)});for(let f=0,g=d.length;f<g;f++)h.add(d[f]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new bd:c.length>1?h=new we:c.length===1?h=c[0]:h=new at,h!==c[0])for(let d=0,u=c.length;d<u;d++)h.add(c[d]);if(r.name&&(h.userData.name=r.name,h.name=a),Hn(h,r),r.extensions&&vi(n,h,r),r.matrix!==void 0){const d=new Fe;d.fromArray(r.matrix),h.applyMatrix4(d)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new we;n.name&&(r.name=i.createUniqueName(n.name)),Hn(r,n),n.extensions&&vi(t,r,n);const a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,d=l.length;h<d;h++)r.add(l[h]);const c=h=>{const d=new Map;for(const[u,f]of i.associations)(u instanceof un||u instanceof Et)&&d.set(u,f);return h.traverse(u=>{const f=i.associations.get(u);f!=null&&d.set(u,f)}),d};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){const a=[],o=e.name?e.name:e.uuid,l=[];ni[r.path]===ni.weights?e.traverse(function(u){u.morphTargetInfluences&&l.push(u.name?u.name:u.uuid)}):l.push(o);let c;switch(ni[r.path]){case ni.weights:c=hs;break;case ni.rotation:c=ds;break;case ni.translation:case ni.scale:c=us;break;default:switch(n.itemSize){case 1:c=hs;break;case 2:case 3:default:c=us;break}break}const h=i.interpolation!==void 0?Hx[i.interpolation]:Ks,d=this._getArrayFromAccessor(n);for(let u=0,f=l.length;u<f;u++){const g=new c(l[u]+"."+ni[r.path],t.array,d,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=dl(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof ds?zx:Vd;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function qx(s,e,t){const n=e.attributes,i=new bn;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new T(l[0],l[1],l[2]),new T(c[0],c[1],c[2])),o.normalized){const h=dl(ss[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new T,l=new T;for(let c=0,h=r.length;c<h;c++){const d=r[c];if(d.POSITION!==void 0){const u=t.json.accessors[d.POSITION],f=u.min,g=u.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),u.normalized){const _=dl(ss[u.componentType]);l.multiplyScalar(_)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;const a=new In;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function Eh(s,e,t){const n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){s.setAttribute(o,l)})}for(const a in n){const o=hl[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){const a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return Ye.workingColorSpace!==Yt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ye.workingColorSpace}" not supported.`),Hn(s,e),qx(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Vx(s,e.targets,t):s})}function $x(s){const e=new Map,t=new Map,n=s.clone();return Wd(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const r=i,a=e.get(i),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Wd(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)Wd(s.children[n],e.children[n],t)}const io={bench:{file:"bench.glb",targetHeight:.85,maxFootprint:1.5,credit:"Kenney Furniture Kit (CC0)"},bench_cushion:{file:"bench_cushion.glb",targetHeight:.88,maxFootprint:1.5,credit:"Kenney Furniture Kit (CC0)"},fence_low:{file:"fence_low.glb",targetHeight:.55,maxFootprint:2,credit:"Kenney City Kit Suburban (CC0)"},tree_normal:{file:"tree_normal.glb",targetHeight:3.2,maxFootprint:2.2,credit:"Kenney City Kit Suburban (CC0)"},tree_cherry:{file:"tree_cherry.glb",targetHeight:2.8,maxFootprint:1.8,credit:"Kenney City Kit Suburban (CC0)"},shrine:{file:"shrine.glb",targetHeight:2.6,maxFootprint:3.5,credit:"Tomb Chaser 2 / Polygonal Mind (CC0)"},shrine_stairs:{file:"shrine_stairs.glb",targetHeight:1.1,maxFootprint:2.8,credit:"Tomb Chaser 2 / Polygonal Mind (CC0)"},street_lamp:{file:"street_lamp.glb",targetHeight:2.4,maxFootprint:.8,credit:"Lunar Year / Polygonal Mind (CC0)"},fountain:{file:"fountain.glb",targetHeight:1.6,maxFootprint:2.2,credit:"MomusPark / Polygonal Mind (CC0)"},rock:{file:"rock.glb",targetHeight:.42,maxFootprint:1,credit:"Tomb Chaser 2 / Polygonal Mind (CC0)"},bush:{file:"bush.glb",targetHeight:.65,maxFootprint:1.2,credit:"MomusPark / Polygonal Mind (CC0)"},vending:{file:"vending.glb",targetHeight:1.85,maxFootprint:1,credit:"Tomb Chaser 2 / Polygonal Mind (CC0)"},decoration:{file:"decoration.glb",targetHeight:.35,maxFootprint:.7,credit:"Tomb Chaser 2 / Polygonal Mind (CC0)"},animal_cat:{file:"animal_cat.glb",targetHeight:.7,maxFootprint:.65,credit:"Kenney Cube Pets (CC0)"},animal_dog:{file:"animal_dog.glb",targetHeight:.72,maxFootprint:.65,credit:"Kenney Cube Pets (CC0)"},animal_bunny:{file:"animal_bunny.glb",targetHeight:.65,maxFootprint:.55,credit:"Kenney Cube Pets (CC0)"},animal_fox:{file:"animal_fox.glb",targetHeight:.68,maxFootprint:.6,credit:"Kenney Cube Pets (CC0)"},animal_duck:{file:"animal_duck.glb",targetHeight:.55,maxFootprint:.5,credit:"Kenney Cube Pets (CC0)"},animal_pig:{file:"animal_pig.glb",targetHeight:.65,maxFootprint:.55,credit:"Kenney Cube Pets (CC0)"},animal_parrot:{file:"animal_parrot.glb",targetHeight:.6,maxFootprint:.5,credit:"Kenney Cube Pets (CC0)"},shop_a:{file:"shop_a.glb",targetHeight:2.8,maxFootprint:3.8,credit:"Kenney City Kit Commercial (CC0)"},shop_b:{file:"shop_b.glb",targetHeight:2.7,maxFootprint:3.6,credit:"Kenney City Kit Commercial (CC0)"},shop_c:{file:"shop_c.glb",targetHeight:2.6,maxFootprint:3.4,credit:"Kenney City Kit Commercial (CC0)"},shop_d:{file:"shop_d.glb",targetHeight:2.5,maxFootprint:3.2,credit:"Kenney City Kit Commercial (CC0)"},building_a:{file:"building_a.glb",targetHeight:3.4,maxFootprint:4.2,credit:"Kenney City Kit Suburban (CC0)"},building_b:{file:"building_b.glb",targetHeight:3.6,maxFootprint:4.5,credit:"Kenney City Kit Suburban (CC0)"},building_c:{file:"building_c.glb",targetHeight:3.2,maxFootprint:4,credit:"Kenney City Kit Suburban (CC0)"},building_d:{file:"building_d.glb",targetHeight:3,maxFootprint:3.6,credit:"Kenney City Kit Suburban (CC0)"},awning:{file:"awning.glb",targetHeight:.5,maxFootprint:1.8,credit:"Kenney City Kit Commercial (CC0)"},character_female_a:{file:"character_female_a.glb",targetHeight:2.35,maxFootprint:1.4,rigged:!0,credit:"KayKit Character Pack Adventures (CC0)"},character_female_b:{file:"character_female_b.glb",targetHeight:2.35,maxFootprint:1.4,rigged:!0,credit:"KayKit Character Pack Adventures (CC0)"},character_female_c:{file:"character_female_c.glb",targetHeight:2.35,maxFootprint:1.4,rigged:!0,credit:"KayKit Character Pack Adventures (CC0)"},character_male_a:{file:"character_male_a.glb",targetHeight:2.35,maxFootprint:1.4,rigged:!0,credit:"KayKit Character Pack Adventures (CC0)"},character_male_b:{file:"character_male_b.glb",targetHeight:2.35,maxFootprint:1.4,rigged:!0,credit:"KayKit Character Pack Adventures (CC0)"},character_male_c:{file:"character_male_c.glb",targetHeight:2.35,maxFootprint:1.4,rigged:!0,credit:"KayKit Character Pack Adventures (CC0)"}};function Ah(s){return`/WalkingSimulation/models/cc0/${s}`}const Jx=["_armleft","_armright","_body","_head","_legleft","_legright","_head_hooded","_cape"];function Ch(s){const e=s.name.toLowerCase();return Jx.some(t=>e.endsWith(t))}function Zx(s){let e=!1;s.traverse(t=>{(t.isMesh||t.isSkinnedMesh)&&Ch(t)&&(e=!0)}),e&&s.traverse(t=>{!t.isMesh&&!t.isSkinnedMesh||Ch(t)||(t.visible=!1)})}function Qx(s,{outlineScale:e=1.055}={}){s.traverse(t=>{!t.isMesh||t.userData.isOutline||(t.castShadow=!0,t.receiveShadow=!0,t.frustumCulled=!0,Array.isArray(t.material)?t.material=t.material.map(Mh):t.material=Mh(t.material),t.geometry&&!t.userData.hasOutline&&e>1&&Od(t,e,657936))})}function ks(s){const e=new bn;let t=!1;return s.updateMatrixWorld(!0),s.traverse(n=>{if(!n.isMesh||!n.geometry||n.visible===!1)return;const i=n.geometry;i.boundingBox||i.computeBoundingBox();const r=i.boundingBox.clone();r.applyMatrix4(n.matrixWorld),t?e.union(r):(e.copy(r),t=!0)}),t?e:new bn().setFromObject(s)}function Us(s,e=0){const t=ks(s);return s.position.y+=e-t.min.y,s}function ey(s,e){const t={};for(const i of e){const r=s.clipAction(i);r.clampWhenFinished=!0,t[i.name.toLowerCase()]=r}const n={walking_a:"walk",walking_b:"walk",walking_c:"walk",running_a:"sprint",running_b:"sprint",jump_start:"jump",jump_idle:"jump",jump_full_short:"jump",sit_floor_idle:"sit",sit_chair_idle:"sit",unarmed_idle:"idle",cheer:"emote-yes",interact:"emote-no"};for(const[i,r]of Object.entries(n))t[i]&&!t[r]&&(t[r]=t[i]);return t.sit_chair_idle?t.sit=t.sit_chair_idle:t.sit_floor_idle&&(t.sit=t.sit_floor_idle),t}function Rh(s,{targetHeight:e,maxFootprint:t,maxHeight:n}){s.updateMatrixWorld(!0);let i=ks(s),r=i.getSize(new T);if(e&&r.y>1e-4){const o=e/r.y;s.scale.multiplyScalar(o),s.updateMatrixWorld(!0),i=ks(s),r=i.getSize(new T)}const a=Math.max(r.x,r.z);if(t&&a>t){const o=t/a;s.scale.multiplyScalar(o),s.updateMatrixWorld(!0),i=ks(s),r=i.getSize(new T)}return n&&r.y>n&&(s.scale.multiplyScalar(n/r.y),s.updateMatrixWorld(!0),i=ks(s)),s.position.y-=i.min.y,s.updateMatrixWorld(!0),s}class ty{constructor(){this.loader=new mx,this.templates=new Map,this.characterTemplates=new Map,this.failed=new Map,this.loadedKeys=[]}has(e){return(this.templates.has(e)||this.characterTemplates.has(e))&&!this.failed.has(e)}getLoadReport(){return{loaded:[...this.loadedKeys],failed:Object.fromEntries(this.failed),total:this.loadedKeys.length+this.failed.size}}async loadAll(e=io,t){const n=Object.entries(e);let i=0;const r=Ah("");await Promise.all(n.map(async([a,o])=>{const l=Ah(o.file);try{this.loader.setResourcePath(r);const c=await this.loader.loadAsync(l),h=c.scene;o.rigged&&Zx(h),Qx(h,{outlineScale:o.rigged?1:1.055}),Rh(h,{targetHeight:o.targetHeight,maxFootprint:o.rigged?null:o.maxFootprint,maxHeight:o.maxHeight}),h.traverse(d=>{d.userData.modelKey=a}),o.rigged?this.characterTemplates.set(a,{scene:h,animations:c.animations??[]}):this.templates.set(a,h),this.loadedKeys.push(a)}catch(c){const h=(c==null?void 0:c.message)??String(c);console.warn(`ModelLoader: failed "${a}" from ${l}: ${h}`),this.failed.set(a,{file:o.file,url:l,error:h})}finally{i+=1,t==null||t(`Loading 3D models… (${i}/${n.length})`)}})),this.failed.size>0&&console.warn("ModelLoader report:",this.getLoadReport())}createCharacterInstance(e,t={}){const n=this.characterTemplates.get(e);if(!n||this.failed.has(e))return null;io[e];const{rotationY:i=0,tint:r=null,tintStrength:a=.22}=t,o=$x(n.scene);o.traverse(d=>{if(!(!d.isMesh||!d.material)&&(Array.isArray(d.material)?d.material=d.material.map(u=>u.clone()):d.material=d.material.clone(),r!=null)){const u=Array.isArray(d.material)?d.material:[d.material];for(const f of u)f.color&&f.color.lerp(new ge(r),a)}});const l=new vp(o),c=ey(l,n.animations),h=new we;return i&&(o.rotation.y=i),h.add(o),h.userData.isRiggedCharacter=!0,h.userData.mixer=l,h.userData.actions=c,h.userData.currentAnim=null,h.userData.legs=null,h.userData.arms=null,h.userData.walkPhase=0,h.userData.sitBlend=0,h.userData.modelKey=e,h.userData.dynamic=!0,this._playCharacterAnim(h,"idle",0),h}_playCharacterAnim(e,t,n=.2){const i=e.userData.actions,r=i==null?void 0:i[t];if(!r){console.warn(`[Anim] missing clip "${t}" for`,e.userData.modelKey??"?","| available:",Object.keys(i??{}).filter(c=>!c.includes("_")).join(" "));return}const a=e.userData.currentAnim,o=a&&a!==t?i[a]:null,l=["sit","static"].includes(t);r.reset(),r.setEffectiveWeight(1),r.setLoop(l?ld:cd,l?1:1/0),r.clampWhenFinished=l,r.play(),o&&(n>0?o.fadeOut(n):o.stop()),e.userData.currentAnim=t}updateCharacterAnimation(e,t,n){var h;if(!((h=e==null?void 0:e.userData)!=null&&h.isRiggedCharacter))return;const i=e.userData.mixer;if(!i)return;i.update(n);const r=e.userData.isSitting,a=e.userData.isJumping;let o="idle";a?o="jump":r?o="sit":t>4.5?o="sprint":t>.15&&(o="walk");const l=e.userData.actions,c=l==null?void 0:l[e.userData.currentAnim];if((e.userData.currentAnim!==o||c&&!c.isRunning()&&!["sit"].includes(o))&&this._playCharacterAnim(e,o,.18),o==="walk"||o==="sprint"){const d=l==null?void 0:l[o];if(d){const u=o==="sprint"?6.5:3.2;d.setEffectiveTimeScale(Math.min(t/u,2.5))}}}playCharacterEmote(e,t,n=1.2){var o;if(!((o=e==null?void 0:e.userData)!=null&&o.isRiggedCharacter))return;const i=e.userData.actions;if(!(i==null?void 0:i[t]))return;const a=e.userData.isSitting?"sit":"idle";this._playCharacterAnim(e,t,.12),clearTimeout(e.userData._emoteTimer),e.userData._emoteTimer=setTimeout(()=>{e.userData.currentAnim===t&&this._playCharacterAnim(e,a,.2)},n*1e3)}createInstance(e,t={}){const n=this.templates.get(e);if(!n||this.failed.has(e))return null;const i=io[e]??{},{targetHeight:r=i.targetHeight,maxFootprint:a=i.maxFootprint,maxHeight:o=i.maxHeight,scale:l=1,tint:c=null,tintStrength:h=.28,rotationY:d=0}=t,u=n.clone(!0);return u.scale.set(1,1,1),u.position.set(0,0,0),u.rotation.set(0,0,0),u.traverse(f=>{if(!(!f.isMesh||!f.material)&&(Array.isArray(f.material)?f.material=f.material.map(g=>g.clone()):f.material=f.material.clone(),c!=null)){const g=Array.isArray(f.material)?f.material:[f.material];for(const _ of g)_.color&&_.color.lerp(new ge(c),h)}}),l!==1&&u.scale.multiplyScalar(l),Rh(u,{targetHeight:r,maxFootprint:a,maxHeight:o}),d&&(u.rotation.y=d),u.userData.modelKey=e,u.userData.isLoadedModel=!0,u}}function ny(s,e,t,n,i,r,a,o){const l=Math.cos(-o),c=Math.sin(-o),h=s-n,d=e-i,u=h*l-d*c,f=h*c+d*l,g=Math.max(-r,Math.min(r,u)),_=Math.max(-a,Math.min(a,f)),m=u-g,p=f-_,y=m*m+p*p;if(y>=t*t||y<1e-8)return null;const b=Math.sqrt(y),x=t-b,R=m/b,A=p/b,E=R*l+A*c,I=-R*c+A*l;return{x:s+E*x,z:e+I*x}}function iy(s,e,t,n,i,r){const a=s-n,o=e-i,l=Math.hypot(a,o),c=t+r;if(l>=c||l<1e-6)return null;const h=(c-l)/l;return{x:s+a*h,z:e+o*h}}class sy{constructor(){this.boxes=[],this.circles=[]}addBox(e,t,n,i,r=0){this.boxes.push({x:e,z:t,halfW:n,halfD:i,rotY:r})}addCircle(e,t,n){this.circles.push({x:e,z:t,radius:n})}resolve(e,t=.45,n=2){let i=e.x,r=e.z;for(let a=0;a<n;a++){for(const o of this.boxes){const l=ny(i,r,t,o.x,o.z,o.halfW,o.halfD,o.rotY);l&&(i=l.x,r=l.z)}for(const o of this.circles){const l=iy(i,r,t,o.x,o.z,o.radius);l&&(i=l.x,r=l.z)}}e.x=i,e.z=r}}let nn=null;function ry(s){nn=s}function hi(s,e,t,n={}){return(nn==null?void 0:nn.createInstance(s,{targetHeight:e,...n}))??t()}function ay(s){let e=null;return s.traverse(t=>{!e&&t.isMesh&&(e=t)}),e}function Lt(s,e,t,n,i,r=0){const a=e.getPointAt(t),o=e.getTangentAt(t),l=new T(-o.z,0,o.x).multiplyScalar(n);return s.position.copy(a).add(l.multiplyScalar(i)),s.position.y=r,s.lookAt(s.position.x+o.x,s.position.y,s.position.z+o.z),s.userData.isLoadedModel&&Us(s,r),s}function qt(s,e,t,n,i=0,r=180){const a=s.getSpacedPoints(r),o=[],l=[];for(let d=0;d<a.length;d++){const u=d/(a.length-1),f=a[d],g=s.getTangentAt(u).normalize(),_=new T(-g.z,0,g.x),m=f.clone().add(_.clone().multiplyScalar(i)),p=m.clone().add(_.clone().multiplyScalar(-e)),y=m.clone().add(_.clone().multiplyScalar(e));o.push(p.x,t,p.z,y.x,t,y.z)}for(let d=0;d<a.length-1;d++){const u=d*2,f=u+1,g=u+2,_=u+3;l.push(u,f,g,f,_,g)}const c=new It;c.setAttribute("position",new ut(o,3)),c.setIndex(l),c.computeVertexNormals();const h=new ee(c,n);return h.receiveShadow=!0,h}function Ih(s,e,t,n,i){const r=s.getPointAt(e),a=s.getTangentAt(e).normalize(),o=new T(-a.z,0,a.x).multiplyScalar(t),l=r.clone().add(o.clone().multiplyScalar(n*.55)),c=r.clone().add(o.clone().multiplyScalar(n)),h=[r,l,c,...i];return new Zr(h,!1,"catmullrom",.42)}function so(s,e,t,{pathHalf:n=1.45,y:i=.085,divisions:r=120,closed:a=!1}={}){const o=U(9077880),l=U(8025448),c=U(12104876),h=qt(s,n,i,o,0,r);t.add(h),e.push(h);const d=.14,u=n+d+.04,f=qt(s,d,i+.012,l,-u,r),g=qt(s,d,i+.012,l,u,r);t.add(f,g);const _=s.getSpacedPoints(r);for(let m=4;m<_.length-4;m+=a?5:6){const p=m/(_.length-1),y=_[m],b=s.getTangentAt(p).normalize(),x=new ee(new Ne(.07,.07,.012,6),c);x.position.set(y.x,i+.014,y.z),x.lookAt(y.x+b.x,i+.014,y.z+b.z),t.add(x)}return h}function ro(s,e,t,n,i,r,a){const h=U(9077880),d=s.clone().add(t.clone().multiplyScalar(n*(1.75-.2))),u=s.clone().add(t.clone().multiplyScalar(n*(1.75+1.45+.3))),f=i.clone().setY(0),g=[d.x,.084,d.z,u.x,.084,u.z,f.x,.084,f.z,s.x,.084,s.z],_=[0,1,2,0,2,3],m=new It;m.setAttribute("position",new ut(g,3)),m.setIndex(_),m.computeVertexNormals();const p=new ee(m,h);p.receiveShadow=!0,r.add(p),a.push(p)}function Wl(s,e,t,n,i,r="house",a={}){const o=new we,l=U(n),c=U(i),h=e/2,d=ft(new oe(s,t,e),l);d.position.y=t/2,o.add(d);const u=Math.min(1.4,t*.35),f=ft(new oe(s+.02,u,e+.02),U(new ge(n).offsetHSL(0,0,-.08).getHex()));f.position.y=u/2,o.add(f);const g=r==="apartment"?Math.max(2,Math.round(t/1.6)):1;for(let A=1;A<g;A++){const E=ft(new oe(s+.06,.1,e+.06),U(new ge(i).offsetHSL(0,0,.1).getHex()));E.position.y=t/g*A,o.add(E)}const _=U(12116208),m=U(new ge(n).offsetHSL(0,0,-.15).getHex()),p=.52,y=.58,b=Math.max(1,Math.floor(s/1.3)),x=s/(b+1),R=[];for(let A=0;A<g;A++){const E=t/g;R.push(u+(A===0?E*.6:t/g*A+E*.55))}if(R.forEach((A,E)=>{if(!(E===0&&r==="shop"))for(let I=0;I<b;I++){const w=-s/2+x*(I+1),v=new ee(new oe(p+.1,y+.1,.06),m);v.position.set(w,A,h+.02),o.add(v);const P=new ee(new St(p,y),_);P.position.set(w,A,h+.06),o.add(P);const F=new ee(new oe(p+.14,.07,.14),U(13682872));F.position.set(w,A-y/2-.02,h+.08),o.add(F)}}),r==="shop"){const A=ft(new oe(s*.65,u-.15,.08),m);A.position.set(0,u*.5+.08,h+.03),o.add(A);const E=new ee(new St(s*.6,u-.22),U(9490664));E.position.set(0,u*.5+.08,h+.07),o.add(E);const I=ft(new oe(.82,1.55,.07),U(5914672));I.position.set(s*.28,.78,h+.03),o.add(I);const w=new ee(new St(.55,1.1),U(8440040));w.position.set(s*.28,.9,h+.07),o.add(w);const v=[We.awningRed,We.awningBlue,5275728,12619824],P=a.awningColor??v[Math.floor(n)%v.length],F=ft(new oe(s+.5,.08,1.3),U(P));F.position.set(0,t*.72,h+.6),o.add(F);for(let j=0;j<3;j++){const W=new ee(new oe((s+.4)/6,.06,1.25),U(16777215));W.position.set(-s/3+j*(s/3),t*.72,h+.6),o.add(W)}const O=new ee(new oe(s+.5,.18,.06),U(P));O.position.set(0,t*.72-.09,h+1.22),o.add(O)}if(r==="house"){const A=ft(new oe(.75,1.45,.08),U(5914672));A.position.set(-s*.2,.73,h+.03),o.add(A);const E=new ee(new Be(.05,5,4),U(13150272));E.position.set(-s*.2+.26,.72,h+.09),o.add(E);const I=ft(new oe(.3,.14,.04),U(15788224));I.position.set(-s*.2-.52,1.1,h+.04),o.add(I)}if(r==="apartment"){const A=ft(new oe(1.4,2,.1),U(new ge(n).offsetHSL(0,0,-.12).getHex()));A.position.set(0,1,h+.04),o.add(A);const E=new ee(new St(.9,1.6),U(8437984));E.position.set(0,1,h+.1),o.add(E);for(let I=1;I<g;I++){const w=t/g*I+.18,v=ft(new oe(s*.45,.09,.65),U(9474192));v.position.set(s*.22,w,h+.36),o.add(v);const P=ft(new oe(s*.45,.32,.05),U(7368816));P.position.set(s*.22,w+.2,h+.67),o.add(P)}[t*.35,t*.65].forEach(I=>{const w=ft(new oe(.35,.2,.25),U(13158592));w.position.set(s/2+.1,I,0),o.add(w)})}if(r==="shrine"){const A=Z(new oe(s+.5,.12,e+.5),c);A.position.y=t+.06,o.add(A);const E=Z(new At(s*.58,1,4),c);E.position.y=t+.6,E.rotation.y=Math.PI/4,o.add(E)}else{const A=ft(new oe(s+.3,.22,e+.3),c);A.position.y=t+.11,o.add(A);const E=ft(new oe(s+.5,.1,e+.5),U(new ge(i).offsetHSL(0,0,-.07).getHex()));if(E.position.y=t+.05,o.add(E),t>3.2&&r!=="shop"){const I=Z(new Ne(.22,.24,.5,7),U(9079434));I.position.set(s*.3,t+.45,0),o.add(I);const w=Z(new At(.28,.2,7),U(6974058));w.position.set(s*.3,t+.8,0),o.add(w)}}return o}function ul(){const s=new we,e=U(12595248),t=new Ne(.12,.14,2.8,6);[-1.1,1.1].forEach(a=>{const o=Z(t,e);o.position.set(a,1.4,0),s.add(o)});const n=Z(new oe(2.8,.18,.18),e);n.position.y=2.55,s.add(n);const i=Z(new oe(3,.12,.22),e);i.position.y=2.85,s.add(i);const r=Z(new oe(.5,.25,.06),U(1710618));return r.position.set(0,2.35,.12),s.add(r),s}function $i(){const s=nn==null?void 0:nn.createInstance("street_lamp",{targetHeight:2.8});if(s){const r=new we;return r.add(s),r.userData.lanternMesh=ay(s)??s,r}const e=new we,t=Z(new Ne(.04,.05,1.6,6),U(We.metal));t.position.y=.8,e.add(t);const n=Z(new Ne(.18,.22,.45,8,1,!0),U(15753296));n.position.y=1.75,e.add(n);const i=Z(new At(.12,.15,4),U(3355443));return i.position.y=2.05,i.rotation.y=Math.PI/4,e.add(i),e.userData.lanternMesh=n,e}function oy(s=We.vending){const e=hi("vending",1.85,()=>{const t=new we,n=s,i=new ge(n).offsetHSL(0,0,-.12).getHex(),r=new ge(n).offsetHSL(0,0,.08).getHex(),a=ft(new oe(.95,.12,.75),U(i,{roughness:.9}));a.position.y=.06,t.add(a);const o=ft(new oe(.9,1.65,.7),U(n,{roughness:.75}));o.position.y=.95,t.add(o);const l=ft(new oe(.94,.1,.74),U(r,{roughness:.7}));l.position.y=1.82,t.add(l);const c=ft(new oe(1,.06,.22),U(r,{roughness:.65}));c.position.set(0,1.9,.38),c.rotation.x=-.12,t.add(c);const h=zd(s),d=new ee(new St(.68,1.15),U(16777215,{map:h,emissive:3172472,emissiveIntensity:.35}));d.position.set(0,1.02,.36),t.add(d);const u=ft(new oe(.76,1.22,.04),U(2764856,{roughness:.85}));u.position.set(0,1.02,.34),t.add(u);const f=ft(new oe(.18,.28,.05),U(8951976,{roughness:.55,metalness:.2}));f.position.set(.34,.55,.36),t.add(f);const g=ft(new oe(.1,.04,.06),U(1710618,{roughness:.95}));g.position.set(.34,.62,.39),t.add(g);const _=ft(new oe(.28,.14,.2),U(1712168,{roughness:.9}));return _.position.set(0,.28,.38),t.add(_),t},{tint:s,tintStrength:.32});return ly(e,s),e}function ly(s,e){if(s.userData.isLoadedModel&&!s.userData.vendingDisplay){const r=zd(e),a=new ee(new St(.64,1),U(16777215,{map:r,emissive:3172472,emissiveIntensity:.42,transparent:!0,opacity:.94,depthWrite:!1}));a.position.set(0,.98,.4),s.add(a),s.userData.vendingDisplay=a,s.userData.vendingGlow=a}else if(!s.userData.vendingGlow){const r=new ee(new St(.55,.9),U(9490664,{emissive:4233400,emissiveIntensity:.45,transparent:!0,opacity:.55,depthWrite:!1}));r.position.set(0,1.05,.37),s.add(r),s.userData.vendingGlow=r}const n=new ge(e),i=new Si(n,.7,6);i.position.set(0,1.45,.5),s.add(i),s.userData.vendingLight=i,s.userData.vendingColor=e}function cy(){const s=new we,e=Z(new Ne(.06,.08,1.2,6),U(We.metal));e.position.y=.6,s.add(e);const t=Z(new oe(.35,.3,.25),U(We.orange));t.position.y=1.25,s.add(t);const n=Z(new At(.28,.2,4),U(We.orange));return n.position.y=1.5,n.rotation.y=Math.PI/4,s.add(n),s}function hy(){const s=new we,e=Z(new Ne(.05,.06,2.5,6),U(We.orange));e.position.y=1.25,s.add(e);const t=Z(new Dt(.45,16),U(13691112));t.position.set(0,2.6,0),t.rotation.x=-.3,s.add(t);const n=Z(new ci(.45,.04,6,16),U(We.orange));return n.position.set(0,2.6,-.02),n.rotation.x=-.3,s.add(n),s}function dy(){const s=Z(new At(.15,.4,8),U(We.cone));return s.position.y=.2,s}function uy(){const s=new we,e=Z(new oe(.8,1.4,.5),U(We.sign));e.position.y=.7,s.add(e);const t=Z(new oe(.65,.9,.05),U(15790312));t.position.set(0,.85,.26),s.add(t);for(let n=0;n<5;n++){const i=new ee(new oe(.45,.03,.01),U(8947848));i.position.set(0,.55+n*.14,.29),s.add(i)}return s}function fy(){const s=new we,e=Z(new Ne(.07,.09,4.5,6),U(6969930));e.position.y=2.25,s.add(e);const t=Z(new oe(1.2,.06,.06),U(6969930));t.position.y=4,s.add(t);const n=Z(new Dt(.22,12),U(3178688));return n.position.set(0,3.2,.12),s.add(n),s}function Ph(){const s=new we,e=U(4227264),t=U(2236962),n=new ci(.28,.03,6,12);[-.45,.45].forEach(a=>{const o=Z(n,t);o.rotation.y=Math.PI/2,o.position.set(a,.28,0),s.add(o)});const i=Z(new oe(.9,.04,.04),e);i.position.set(0,.55,0),i.rotation.z=.15,s.add(i);const r=Z(new oe(.15,.06,.2),U(1710618));return r.position.set(-.15,.65,0),s.add(r),s}function Hs(s="normal"){return hi(s==="cushion"?"bench_cushion":"bench",.85,()=>{const t=new we,n=U(9071178),i=Z(new oe(.08,.35,.08),n);[[-.5,-.15],[.5,-.15],[-.5,.15],[.5,.15]].forEach(([o,l])=>{const c=i.clone();c.position.set(o,.18,l),t.add(c)});const r=Z(new oe(1.2,.06,.4),n);r.position.y=.38,t.add(r);const a=Z(new oe(1.2,.35,.06),n);return a.position.set(0,.6,-.17),t.add(a),t},{rotationY:Math.PI})}function py(){const s=Z(new Ne(.08,.1,.55,6),U(15777840));return s.position.y=.28,s}function my(){return hi("bush",.75,()=>{const s=new we,e=Z(new Ne(.15,.12,.25,6),U(9064496));e.position.y=.13,s.add(e);const t=Z(new Be(.22,8,6),U(4889162));return t.position.y=.38,s.add(t),s})}function ao(s="normal"){if(s!=="pine"){const n=s==="cherry"?"tree_cherry":"tree_normal",i=nn==null?void 0:nn.createInstance(n,{tint:s==="cherry"?15769784:null,tintStrength:s==="cherry"?.55:.28,rotationY:Math.random()*Math.PI*2});if(i)return s==="cherry"&&(i.userData.isCherry=!0),i}const e=new we,t=ft(new Ne(.1,.14,1,6),U(6967360));return t.position.y=.5,e.add(t),s==="cherry"?([[0,1.4,0,.65,15769784],[-.35,1.25,.15,.48,16300236],[.35,1.3,-.15,.5,15769792],[0,1.65,.2,.42,16761040]].forEach(([i,r,a,o,l])=>{const c=ft(new Be(o,9,7),U(l));c.position.set(i,r,a),e.add(c)}),e.userData.isCherry=!0):s==="pine"?[.65,.48,.32].forEach((n,i)=>{const r=ft(new At(n,.55,6),U(3832394));r.position.y=1+i*.42,e.add(r)}):[[0,1.35,0,.55],[-.28,1.2,.2,.4],[.3,1.25,-.18,.42],[0,1.55,.1,.35]].forEach(([n,i,r,a])=>{const o=ft(new Be(a,8,6),U(5937754+Math.floor(Math.random()*328965)));o.position.set(n,i,r),e.add(o)}),e}function gy(){const s=new we,e=U(5937754);for(let t=0;t<5;t++){const n=1.5+Math.random()*1.2,i=Z(new Ne(.04,.05,n,6),e);i.position.set((Math.random()-.5)*.6,n/2,(Math.random()-.5)*.6),s.add(i)}return s}function _y(s=0){const t=document.createElement("canvas");t.width=128,t.height=128;const n=t.getContext("2d");n.clearRect(0,0,128,128);const i=o=>{const l=Math.sin(s*127.1+o*311.7)*43758.5453;return l-Math.floor(l)},r=4+Math.floor(i(0)*3);for(let o=0;o<r;o++){const l=128*(.25+i(o+1)*.5),c=128*(.3+i(o+2)*.4),h=128*(.22+i(o+3)*.18),d=128*(.14+i(o+4)*.12),u=.55+i(o+5)*.35;n.save(),n.translate(l,c),n.rotate(i(o+6)*Math.PI),n.beginPath(),n.ellipse(0,0,h,d,0,0,Math.PI*2),n.fillStyle=`rgba(255, 255, 255, ${u})`,n.fill(),n.restore()}const a=new Ht(t);return a.colorSpace=mt,a}function xy(s,e,t,n){const i=s*.17+e*.31+t*.09,r=_y(i),a=new Rn(new Sn({map:r,transparent:!0,depthWrite:!1,opacity:.88})),o=1.6+i%.6,l=n*1.8;return a.scale.set(l*o,l,1),a.position.set(s,e,t),a.userData.driftSpeed=.15+i%.2,a.userData.driftPhase=i*Math.PI,a.userData.dynamic=!0,a}function yy(){const s=new we,e=U(9072720),t=U(6316112);for(let i=0;i<6;i++){const r=Z(new oe(2.8,.12,1.2),e);r.position.set(0,.18+i*.02,-i*1.1),s.add(r)}[-1.3,1.3].forEach(i=>{const r=Z(new oe(.1,.7,.1),t);r.position.set(i,.55,-2.5),s.add(r);const a=Z(new oe(.08,.08,5.5),t);a.position.set(i,.85,-2.7),s.add(a)});const n=$i();return n.position.set(0,0,-5.8),n.scale.setScalar(.85),s.add(n),s}function vy(s=5.5,e=3.8){const t=new we,n=U(9072736),i=U(6969416),r=new ee(new oe(s,.18,e),n);return r.position.y=.12,r.receiveShadow=!0,t.add(r),[-e/2+.12,e/2-.12].forEach(a=>{const o=new ee(new oe(s,.45,.1),i);o.position.set(0,.42,a),t.add(o),[-s/2+.2,s/2-.2].forEach(l=>{const c=new ee(new Ne(.06,.06,.45,6),i);c.position.set(l,.42,a),t.add(c)})}),t.userData.isBridge=!0,t}function qi(s,e,t,n,i,r=[.8,1.2]){const a=new Os(e,t,n),o=new at;let l=0;for(let c=0;c<n*4&&l<n;c++){const h=i();if(!h)continue;o.position.copy(h),o.rotation.y=Math.random()*Math.PI*2;const d=r[0]+Math.random()*(r[1]-r[0]);o.scale.setScalar(d),o.updateMatrix(),a.setMatrixAt(l++,o.matrix)}return a.count=l,a.instanceMatrix.needsUpdate=!0,s.add(a),a}function oo(){const s=new ee(new St(28,22),Hd());return s.rotation.x=-Math.PI/2,s.position.y=-.08,s.userData.isWater=!0,s}function My(){const s=new we,e=Z(new oe(3.5,.15,2.5),U(9998464));e.position.y=.45,s.add(e);const t=Hs();t.position.set(0,0,.3),t.scale.setScalar(.9),s.add(t);const n=Z(new oe(1.6,.9,.08),U(15788248));return n.position.set(-1.6,.95,0),s.add(n),s}function by(s=4){return hi("shrine_stairs",1.4,()=>{const e=new we,t=U(10000528);for(let n=0;n<s;n++){const i=Z(new oe(1.8-n*.1,.12,.45),t);i.position.set(0,.06+n*.12,-n*.4),e.add(i)}return e})}function wy(){return hi("shrine",3.2,()=>{const s=new we,e=Z(new oe(2.2,.25,1.8),U(8947840));e.position.y=.12,s.add(e);const t=Wl(1.8,1.5,1.6,15788248,3815994,"shrine");t.position.set(0,0,-.3),s.add(t);const n=ul();return n.position.set(0,0,1.6),n.scale.setScalar(.75),s.add(n),s})}function Sy(){const s=new we,e=new ee(new oe(2.5,.05,1.8),U(6967360));e.position.y=.03,s.add(e);for(let t=0;t<6;t++){const n=Z(new Be(.08,6,4),U([15753344,15777856,15790320,14713024][t%4]));n.position.set((Math.random()-.5)*2,.15,(Math.random()-.5)*1.4),s.add(n)}return s}function Xl(s,e,t=13123648,n=3.6){const i=new we,r=document.createElement("canvas");r.width=256,r.height=80;const a=r.getContext("2d");a.fillStyle="#fffef8",a.fillRect(4,4,248,72),a.fillStyle="#2a4a4a",a.font="bold 22px sans-serif",a.textAlign="center",a.fillText(s,128,32),a.fillStyle="#666",a.font="14px sans-serif",a.fillText(e,128,56);const o=new Ht(r),l=new Rn(new Sn({map:o,transparent:!0}));l.scale.set(2,.6,1),l.position.y=n+.55,i.add(l);const c=Z(new oe(2,.75,.08),U(t));return c.position.y=n,i.add(c),i}function Ty(s,e,t,n,i,r,a,o){var h;const l=new we,c=hi(s,e,()=>Wl(t,n,i,r,a,o),{maxHeight:e*1.15});return(h=c.userData)!=null&&h.isLoadedModel&&(c.rotation.y=-Math.PI/2),l.add(c),l}function Gs(s,e,t,n,i=2,r=15261904,a=6967360,o=3.2,l=3,c="crates",h="OPEN",d="🛍️"){return Xd({targetHeight:s,labelJa:e,labelEn:t,signColor:n,signDepth:i,awningColor:n,wallColor:r,roofColor:a,w:o,d:l,goodsType:c,windowLabel:h,windowEmoji:d})}function Ey(s="OPEN",e="🛍️",t="#283038"){const n=document.createElement("canvas");n.width=128,n.height=128;const i=n.getContext("2d");i.fillStyle=t,i.fillRect(0,0,128,128),i.fillStyle="rgba(255,255,255,0.15)",i.fillRect(8,8,112,112),i.font="48px sans-serif",i.textAlign="center",i.fillText(e,64,58),i.fillStyle="#f0f0f0",i.font="bold 14px sans-serif",i.fillText(s,64,100);const r=new Ht(n);return r.colorSpace=mt,r}function Xd({targetHeight:s=2.8,labelJa:e="店",labelEn:t="Shop",signColor:n=12599360,signDepth:i=2,awningColor:r=12599360,wallColor:a=15261904,roofColor:o=6967360,windowLabel:l="OPEN",windowEmoji:c="🛍️",goodsType:h="crates",w:d=3.2,d:u=3}={}){const f=new we,g=s,_=u/2,m=Wl(d,u,g,a,o,"shop",{awningColor:r});f.add(m);const p=Math.min(1.4,g*.35),y=Ey(l,c),b=U(8951976,{map:y,emissive:3359829,emissiveIntensity:.45}),x=new ee(new St(d*.55,p-.22),b);x.position.set(0,p*.5+.08,_+.1),f.add(x);const R=Xl(e,t,n,g*.82);R.position.set(0,0,_+.75),f.add(R);const A=ft(new oe(d+.9,.08,1.8),U(11577496));if(A.position.set(0,.04,_+1.05),f.add(A),h==="crates")[-1,1].forEach(E=>{const I=Z(new oe(.55,.38,.42),U(8413248));I.position.set(E,.19,_+1.35),f.add(I);const w=Z(new oe(.35,.22,.28),U(15769664));w.position.set(E,.42,_+1.35),f.add(w)});else if(h==="flowers")[-.85,.85].forEach(E=>{const I=Z(new Ne(.22,.2,.38,8),U(6320256));I.position.set(E,.19,_+1.3),f.add(I);const w=Z(new Be(.24,8,6),U(14712976));w.position.set(E,.44,_+1.3),f.add(w)});else if(h==="bread"){const E=Z(new Ne(.28,.24,.22,8),U(8413248));E.position.set(-.9,.11,_+1.3),f.add(E);const I=Z(new oe(.32,.14,.16),U(15255672));I.position.set(-.9,.28,_+1.3),f.add(I);const w=Z(new oe(.5,.35,.4),U(8413248));w.position.set(.9,.18,_+1.35),f.add(w)}return f}function lo(s,e,t=5933674){const n=new we,i=Z(new Ne(.06,.08,2.2,6),U(9072736));i.position.y=1.1,n.add(i);const r=document.createElement("canvas");r.width=256,r.height=96;const a=r.getContext("2d");a.fillStyle=`#${new ge(t).getHexString()}`,a.fillRect(0,0,256,96),a.strokeStyle="#f0f0f0",a.lineWidth=4,a.strokeRect(4,4,248,88),a.fillStyle="#ffffff",a.font='bold 22px "Noto Sans JP", sans-serif',a.textAlign="center",a.fillText(s,128,38),a.font="14px sans-serif",a.fillText(e,128,68);const o=new Ht(r);o.colorSpace=mt;const l=new ee(new oe(1.4,.5,.06),U(16777215,{map:o}));return l.position.y=2,n.add(l),n}function Ay(){const s=new we,e=[12599360,4227232,4235360,15769648];[-3.5,-1.2,1.2,3.5].forEach((n,i)=>{const r=Z(new oe(1.6,.85,1.1),U(13680800));r.position.set(n,.42,0),s.add(r);const a=hi("awning",.45,()=>Z(new oe(1.8,.06,1.3),U(e[i])),{scale:.9,tint:e[i],tintStrength:.35});a.position.set(n,.95,.25),s.add(a);const o=Z(new oe(.45,.25,.35),U([15769664,15753312,8437888,15786080][i]));o.position.set(n,.92,.1),s.add(o)});const t=Xl("朝市","Morning Market",15224912,2.2);return t.position.set(0,0,2.2),s.add(t),s}function Cy(){const s=new we,e=Z(new Ne(1.8,1.8,.1,8),U(9998464));e.position.y=.05,s.add(e);const t=Z(new At(2.2,1.2,6),U(5933674));t.position.y=2.8,s.add(t);for(let r=0;r<6;r++){const a=r/6*Math.PI*2,o=Z(new Ne(.08,.08,2.6,6),U(15788248));o.position.set(Math.sin(a)*1.5,1.3,Math.cos(a)*1.5),s.add(o)}const n=Xl("小さな公園","Town Park",5933674);n.position.set(0,0,2.5),n.scale.setScalar(.85),s.add(n);const i=nn==null?void 0:nn.createInstance("fountain",{targetHeight:1.2,scale:.85});return i&&(i.position.set(0,0,-.2),s.add(i)),s}function Ry(){const s=new we,e=Gs(3,"喫茶 木漏れ","Komorebi Cafe",6967360,1.8,15788248,5914672);return s.add(e),[-.8,.8].forEach(t=>{const n=Z(new Ne(.35,.35,.06,8),U(8413248));n.position.set(t,.45,2.2),s.add(n);const i=Hs();i.position.set(t,0,2.8),i.scale.setScalar(.55),s.add(i)}),s}function Iy(){const s=new we,e=Gs(2.8,"魚屋 水樹","Mizuki Fish",4227232,1.7,14739696,4219008);s.add(e);for(let t=0;t<3;t++){const n=Z(new oe(.6,.4,.5),U(8413248));n.position.set(-1+t*1,.2,1.2),s.add(n)}return s}class Py{constructor(e,t=null){this.scene=e,this.modelLoader=t,ry(t),this.groundMeshes=[],this.animatedClouds=[],this.lanterns=[],this.vendingMachines=[],this.waterMeshes=[],this.interactableSpawns=[],this.colliders=new sy,this.riverCurve=null,this.sidePaths={},this.walkableCurves=[],this._bridgeCenters=[{x:-12,z:-14},{x:-14,z:-100}],this._butterflies=null,this._fireflies=null,this.path=this._createPath(),this.walkableCurves=[this.path]}getPathForId(e){return!e||e==="main"?this.path:this.sidePaths[e]??this.path}getWalkableCurves(){return this.walkableCurves}_placeBridge(e,t,n,i=5.5,r=4){const a=vy(i,r);a.position.set(e,0,t),a.rotation.y=n,Us(a,0),this.scene.add(a);const o=a.children[0];return o!=null&&o.isMesh&&(o.userData.isWalkableGround=!0,this.groundMeshes.push(o)),this._bridgeCenters.push({x:e,z:t}),a}_addBankCollider(e,t,n,i,r=0){for(const a of this._bridgeCenters)if(Math.hypot(e-a.x,t-a.z)<3)return;this.colliders.addBox(e,t,n,i,r)}_addBoxCollider(e,t,n,i,r=0){this.colliders.addBox(e,t,n,i,r)}_addCircleCollider(e,t,n){this.colliders.addCircle(e,t,n)}_addGroupCollider(e,t,n){this._addBoxCollider(e.position.x,e.position.z,t,n,e.rotation.y)}_recordSpawn(e,t,n=0){this.interactableSpawns.push({propId:e,position:t.clone(),rotationY:n})}async build(e){e==null||e("Building sky…"),this._createSky(),this._createBackdrop(),this._createEdgeBackdrop(),await Qa(),e==null||e("Laying streets…"),this._createGround(),this._createRoad(),this._createRiver(),this._createSidePaths(),await Qa(),e==null||e("Placing buildings…"),this._createBuildings(),this._createLandmarks(),this._createShopsAndPlaces(),await Qa(),e==null||e("Adding details…"),this._createProps(),this._createStreetFurniture(),this._createVegetation(),this._createSceneryDecor(),this._createEnvironmentDetails(),this._createClouds(),this._createLighting(),e==null||e("Ready")}update(e){const t=Math.min(e-(this._lastElapsed??e),.05);if(this._lastElapsed=e,this.animatedClouds.forEach(n=>{n.position.x+=Math.sin(e*n.userData.driftSpeed+n.userData.driftPhase)*.003}),this.lanterns.forEach((n,i)=>{var a;if(!((a=n==null?void 0:n.material)!=null&&a.color))return;const r=.75+Math.sin(e*2+i)*.25;n.userData.baseColor||(n.userData.baseColor=n.material.color.clone()),n.material.color.copy(n.userData.baseColor).multiplyScalar(r)}),this.vendingMachines.forEach((n,i)=>{var o;const r=.82+Math.sin(e*1.6+i*1.3)*.18;n.userData.vendingLight&&(n.userData.vendingLight.intensity=.55*r);const a=n.userData.vendingGlow;((o=a==null?void 0:a.material)==null?void 0:o.emissiveIntensity)!=null&&(a.material.emissiveIntensity=.35+r*.2)}),this.waterMeshes.forEach((n,i)=>{var o,l;if(!((o=n==null?void 0:n.material)!=null&&o.color))return;const r=.92+Math.sin(e*.8+i*2.1)*.08;n.material.color.setHex(6992064),n.material.color.multiplyScalar(r),n.material.opacity=.84+Math.sin(e*1.1+i)*.06;const a=((l=n.material.userData)==null?void 0:l.waterMap)??n.material.map;a&&(a.offset.x=e*.02,a.offset.y=e*.015+i*.1)}),this._petalMesh&&this._petalData){const n=new at;this._petalData.forEach((i,r)=>{i.x+=(i.vx+Math.sin(e*.7+i.z)*.12)*t,i.y+=i.vy*t,i.z+=(i.vz+Math.cos(e*.5+i.x)*.08)*t,i.spin+=i.spinSpeed*t,i.y<-.5&&(i.y=i.resetY,i.x=-8+Math.random()*24,i.z=-2+Math.random()*-120),n.position.set(i.x,i.y,i.z),n.rotation.set(i.spin*.5,i.spin,i.spin*.3),n.updateMatrix(),this._petalMesh.setMatrixAt(r,n.matrix)}),this._petalMesh.instanceMatrix.needsUpdate=!0}if(this._butterflies){const n=new at;this._butterflyData.forEach((i,r)=>{i.phase+=t*i.speed,i.x+=Math.sin(i.phase)*.4*t,i.z+=Math.cos(i.phase*.7)*.3*t,i.y=i.baseY+Math.sin(i.phase*2)*.15,n.position.set(i.x,i.y,i.z),n.rotation.y=i.phase,n.scale.setScalar(.6+Math.sin(i.phase*3)*.15),n.updateMatrix(),this._butterflies.setMatrixAt(r,n.matrix)}),this._butterflies.instanceMatrix.needsUpdate=!0}if(this._fireflies){const n=new at;this._fireflyData.forEach((i,r)=>{i.phase+=t*i.speed,i.x=i.baseX+Math.sin(i.phase)*1.2,i.z=i.baseZ+Math.cos(i.phase*.8)*1,i.y=i.baseY+Math.sin(i.phase*1.5)*.4,n.position.set(i.x,i.y,i.z),n.scale.setScalar(.04+Math.sin(e*3+r)*.02),n.updateMatrix(),this._fireflies.setMatrixAt(r,n.matrix)}),this._fireflies.instanceMatrix.needsUpdate=!0}}_createPath(){const e=[new T(0,0,22),new T(-1,0,18),new T(0,0,14),new T(-2,0,10),new T(-3,0,6),new T(-2,0,2),new T(0,0,-2),new T(3,0,-6),new T(5,0,-10),new T(4,0,-14),new T(0,0,-18),new T(-4,0,-22),new T(-7,0,-26),new T(-5,0,-32),new T(-2,0,-36),new T(3,0,-40),new T(7,0,-44),new T(9,0,-48),new T(7,0,-52),new T(3,0,-56),new T(-1,0,-60),new T(-5,0,-64),new T(-3,0,-68),new T(1,0,-72),new T(6,0,-76),new T(11,0,-80),new T(13,0,-84),new T(11,0,-88),new T(7,0,-92),new T(3,0,-96),new T(0,0,-102),new T(-3,0,-108),new T(-6,0,-114),new T(-4,0,-120),new T(0,0,-126),new T(5,0,-130),new T(10,0,-134),new T(14,0,-128),new T(16,0,-118)];return new Zr(e,!1,"catmullrom",.45)}_createSky(){this.scene.fog=new Rl(13625570,60,210),this.scene.background=new ge(12115160);const e=new Be(220,24,16),t=document.createElement("canvas");t.width=1,t.height=64;const n=t.getContext("2d"),i=n.createLinearGradient(0,0,0,64);i.addColorStop(0,"#68a8a8"),i.addColorStop(.35,"#98d0c8"),i.addColorStop(.68,"#c0e8e0"),i.addColorStop(.88,"#e0d8c8"),i.addColorStop(1,"#f0e8d8"),n.fillStyle=i,n.fillRect(0,0,1,64);const r=new Ht(t),a=new dt({map:r,side:zt}),o=new ee(e,a);o.position.set(0,-10,-55),o.userData.dynamic=!0,this.scene.add(o),this._spawnGlobalPetals()}_spawnGlobalPetals(){const t=new St(.12,.09),n=new dt({color:16758988,side:cn}),i=new Os(t,n,80);i.userData.dynamic=!0;const r=[],a=new at;for(let o=0;o<80;o++){const l=-8+Math.random()*24,c=1.5+Math.random()*5,h=-2+Math.random()*-120;r.push({x:l,y:c,z:h,vx:(Math.random()-.5)*.3,vy:-(.25+Math.random()*.35),vz:(Math.random()-.5)*.2,spin:Math.random()*Math.PI,spinSpeed:(Math.random()-.5)*2.5,resetY:4+Math.random()*5}),a.position.set(l,c,h),a.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),a.updateMatrix(),i.setMatrixAt(o,a.matrix)}i.instanceMatrix.needsUpdate=!0,this.scene.add(i),this._petalMesh=i,this._petalData=r}_createBackdrop(){}_createEdgeBackdrop(){const e=U(6982266,{roughness:.95});[[-58,-88,10,7],[-48,-115,12,8],[52,-92,11,7],[58,-120,9,6],[-55,-135,13,8],[48,-138,10,7],[-62,-60,8,5],[60,-65,9,6]].forEach(([n,i,r,a])=>{const o=new ee(new Ne(r,r*1.1,a,6),e);o.position.set(n,a/2-1.5,i),this.scene.add(o)})}_createGround(){const e=fx(),t=new ee(new St(420,420),U(We.green,{map:e}));t.rotation.x=-Math.PI/2,t.position.set(2,-.06,-52),t.receiveShadow=!0,this.scene.add(t),this.groundMeshes.push(t);const n=new ee(new St(420,420),U(We.meadow,{map:e}));n.rotation.x=-Math.PI/2,n.position.set(2,-.055,-52),this.scene.add(n),[[-14,-6,5,4,8039048],[10,-16,6,5,8566928],[-8,-30,7,6,6986360],[16,-44,9,7,8039056],[20,-58,12,9,6986360],[-12,-52,6,5,8566928],[10,-74,14,10,8042632],[-10,-86,9,7,8039048],[-18,-105,11,8,6986360],[14,-112,10,9,8566936],[22,-125,14,10,6985864],[-6,-128,8,7,8039048],[8,8,6,5,8566928],[-10,4,5,4,8039040]].forEach(([c,h,d,u,f])=>{const g=new ee(new St(d,u),U(f));g.rotation.x=-Math.PI/2,g.position.set(c,.012,h),this.scene.add(g)}),[[-5,.08,-8,1.2,8],[6,.08,-24,1,7],[-4,.08,-48,1.2,9],[5,.08,-72,1,8],[-3,.08,-96,1.2,7]].forEach(([c,h,d,u,f])=>{const g=new ee(new St(u,f),U(We.gravel));g.rotation.x=-Math.PI/2,g.position.set(c,h,d),this.scene.add(g)});const a=oo();a.position.set(26,-.1,-92),a.scale.set(1.3,1,1.2),this.scene.add(a),this.waterMeshes.push(a);const o=oo();o.position.set(18,-.1,-108),o.scale.set(1.1,1,.9),this.scene.add(o),this.waterMeshes.push(o);const l=oo();l.position.set(30,-.1,-125),l.scale.set(.9,1,.75),this.scene.add(l),this.waterMeshes.push(l)}_createRoad(){const a=qt(this.path,1.75,.08,U(We.road),0,200);this.scene.add(a),this.groundMeshes.push(a);const o=U(We.sidewalk),l=qt(this.path,.75,.09,o,-2.65,200),c=qt(this.path,.75,.09,o,2.65,200);this.scene.add(l,c),this.groundMeshes.push(l,c);const h=U(9998464),d=qt(this.path,.06,.1,h,-1.87,200),u=qt(this.path,.06,.1,h,1.75+.12,200);this.scene.add(d,u);const f=this.path.getSpacedPoints(200),g=U(We.roadLine);for(let _=0;_<f.length-1;_+=6){const m=_/(f.length-1),p=f[_],y=this.path.getTangentAt(m).normalize(),b=new T(-y.z,0,y.x),x=p.clone().add(b.clone().multiplyScalar(1.75-.35)),R=p.distanceTo(f[Math.min(_+3,f.length-1)]),A=new ee(new oe(.12,.015,R*.55),g);A.position.copy(x),A.position.y=.065,A.lookAt(f[Math.min(_+3,f.length-1)].x,.065,f[Math.min(_+3,f.length-1)].z),this.scene.add(A)}for(let _=7;_<f.length;_+=18){const m=f[_],p=new ee(new Ne(.25,.25,.03,10),U(5263440));p.position.set(m.x,.07,m.z),this.scene.add(p)}}_createBuildings(){[{t:.03,side:1,modelKey:"building_d",height:3,w:3,d:4,h:3.5,wall:We.wall,roof:We.roof,style:"house"},{t:.06,side:-1,modelKey:"building_c",height:3,w:3.5,d:3,h:3.4,wall:15261904,roof:6967360,style:"house"},{t:.11,side:1,modelKey:"building_b",height:3.6,w:3.5,d:3,h:4.2,wall:13160640,roof:5929578,style:"apartment"},{t:.17,side:-1,modelKey:"building_a",height:3.4,w:5,d:4,h:4.5,wall:We.wallDark,roof:We.roof,style:"house"},{t:.24,side:1,modelKey:"building_b",height:3.2,w:3,d:3.5,h:3.2,wall:14735560,roof:6986362,style:"apartment"},{t:.31,side:-1,modelKey:"building_c",height:3.2,w:4,d:3,h:3.8,wall:14209216,roof:We.roofDark,style:"apartment"},{t:.38,side:1,modelKey:"building_d",height:3,w:3.5,d:4,h:3.5,wall:We.wall,roof:We.roof,style:"house"},{t:.44,side:-1,modelKey:"building_a",height:3.4,w:4.5,d:3.5,h:4.2,wall:12630184,roof:5933674,style:"house"},{t:.52,side:1,modelKey:"building_a",height:3.4,w:4,d:3.5,h:3.6,wall:15788248,roof:We.roofDark,style:"house"},{t:.58,side:-1,modelKey:"building_d",height:3,w:3.5,d:3,h:3.2,wall:13682872,roof:We.roof,style:"house"},{t:.64,side:1,modelKey:"building_c",height:3,w:3,d:3,h:3,wall:15261904,roof:We.roofDark,style:"house"},{t:.7,side:-1,modelKey:"building_b",height:3.4,w:4,d:3.5,h:3.6,wall:13682872,roof:We.roof,style:"apartment"},{t:.76,side:1,modelKey:"building_d",height:3,w:3.5,d:3.2,h:3.4,wall:14213328,roof:6982266,style:"house"},{t:.82,side:-1,modelKey:"building_a",height:3.4,w:4.2,d:3.8,h:3.8,wall:13156528,roof:We.roofDark,style:"house"},{t:.88,side:1,modelKey:"building_c",height:3,w:3.2,d:3,h:3.2,wall:14735560,roof:We.roof,style:"apartment"},{t:.94,side:-1,modelKey:"building_c",height:3.2,w:4,d:3.5,h:3.5,wall:13160664,roof:5275808,style:"apartment"}].forEach(({t,side:n,modelKey:i,height:r,w:a,d:o,h:l,wall:c,roof:h,style:d})=>{const u=this.path.getPointAt(t),f=this.path.getTangentAt(t),g=new T(-f.z,0,f.x).multiplyScalar(n),_=Ty(i,r,a,o,l,c,h,d);_.position.copy(u).add(g.multiplyScalar(5)),_.lookAt(_.position.x+f.x,_.position.y,_.position.z+f.z),this.scene.add(_),this._addBoxCollider(_.position.x,_.position.z,a*.5+.25,o*.5+.25,_.rotation.y);const m=hi("fence_low",.55,()=>null,{rotationY:Math.PI});m&&(m.position.copy(u).add(g.clone().normalize().multiplyScalar(3.4)),m.lookAt(m.position.x+f.x,m.position.y,m.position.z+f.z),this.scene.add(m),this._addBoxCollider(m.position.x,m.position.z,1,.12,m.rotation.y))})}_createLandmarks(){const e=wy();Lt(e,this.path,.64,1,7.5),this.scene.add(e),this._addBoxCollider(e.position.x,e.position.z,2.2,2,e.rotation.y),this._recordSpawn("shrine",e.position,e.rotation.y);const t=by(5);Lt(t,this.path,.62,1,5.5),this.scene.add(t),this._addBoxCollider(t.position.x,t.position.z,1.5,1.8,t.rotation.y);const n=ul();Lt(n,this.path,.36,-1,6),this.scene.add(n),this._addBoxCollider(n.position.x,n.position.z,1.8,.5,n.rotation.y);const i=Sy();Lt(i,this.path,.14,1,7),this.scene.add(i),this._addCircleCollider(i.position.x,i.position.z,1.5);const r=My();Lt(r,this.path,.86,-1,6.5),this.scene.add(r),this._addBoxCollider(r.position.x,r.position.z,2,1.5,r.rotation.y);const a=yy();Lt(a,this.path,.97,1,5),a.rotation.y+=Math.PI/6,this.scene.add(a),this._addBoxCollider(a.position.x,a.position.z,2.5,1.2,a.rotation.y);const o=ul();Lt(o,this.path,.93,-1,7),o.scale.setScalar(.65),this.scene.add(o),this._addBoxCollider(o.position.x,o.position.z,1.2,.4,o.rotation.y);const l=Cy();Lt(l,this.path,.8,1,8),this.scene.add(l),this._addCircleCollider(l.position.x,l.position.z,2)}_createShopsAndPlaces(){const e=Gs(3,"書店 文房","Bunbou Books",8413344,1.8,15789284,6967360,3.4,3.2,"crates","BOOKS","📚");Lt(e,this.path,.08,-1,5.5),this.scene.add(e),this._addBoxCollider(e.position.x,e.position.z,1.8,1.6,e.rotation.y),this._recordSpawn("shop_bookshop",e.position,e.rotation.y);const t=Gs(2.9,"麺処 山田","Yamada Ramen",12599360,1.7,16774380,9056304,3.2,3,"crates","RAMEN","🍜");Lt(t,this.path,.22,1,5.8),this.scene.add(t),this._addBoxCollider(t.position.x,t.position.z,1.6,1.4,t.rotation.y),this._recordSpawn("shop_ramen",t.position,t.rotation.y);const n=Gs(2.7,"花屋 はな","Hana Florist",14712976,1.6,16445682,12607616,3,2.8,"flowers","FLOWERS","🌸");Lt(n,this.path,.5,-1,5.5),this.scene.add(n),this._addBoxCollider(n.position.x,n.position.z,1.5,1.3,n.rotation.y),this._recordSpawn("shop_florist",n.position,n.rotation.y);const i=Ry();Lt(i,this.path,.46,1,6.5),this.scene.add(i),this._addBoxCollider(i.position.x,i.position.z,2,1.8,i.rotation.y),this._recordSpawn("shop_cafe",i.position,i.rotation.y);const r=Ay();Lt(r,this.path,.54,-1,7),this.scene.add(r),this._addBoxCollider(r.position.x,r.position.z,2.5,1.8,r.rotation.y),this._recordSpawn("shop_market",r.position,r.rotation.y);const a=Iy();Lt(a,this.path,.95,-1,6),this.scene.add(a),this._addBoxCollider(a.position.x,a.position.z,2.2,1.6,a.rotation.y),this._recordSpawn("shop_fishmarket",a.position,a.rotation.y)}_createProps(){[{t:.06,side:-1,type:"vending",offset:2.8,color:We.vending},{t:.1,side:1,type:"mailbox",offset:2.5},{t:.16,side:-1,type:"mirror",offset:2.2},{t:.2,side:1,type:"cone",offset:2},{t:.28,side:-1,type:"vending",offset:2.8,color:4219040},{t:.36,side:1,type:"kiosk",offset:2.6},{t:.44,side:-1,type:"bicycle",offset:2.3},{t:.5,side:1,type:"vending",offset:2.8,color:12599392},{t:.58,side:-1,type:"lantern",offset:2.4},{t:.64,side:1,type:"cone",offset:2},{t:.7,side:-1,type:"utility",offset:2.5},{t:.76,side:1,type:"mailbox",offset:2.5},{t:.82,side:-1,type:"mirror",offset:2.2},{t:.88,side:1,type:"vending",offset:2.8,color:4227232},{t:.94,side:-1,type:"bicycle",offset:2.4}].forEach(({t,side:n,type:i,offset:r,color:a})=>{let o;switch(i){case"vending":o=oy(a);break;case"mailbox":o=cy();break;case"mirror":o=hy();break;case"cone":o=dy();break;case"kiosk":o=uy();break;case"bicycle":o=Ph();break;case"lantern":{o=$i();const h=o.userData.lanternMesh;h&&this.lanterns.push(h);break}case"utility":o=fy();break;default:return}Lt(o,this.path,t,n,r);const c={vending:.55,mailbox:.35,mirror:.4,cone:.25,kiosk:.7,bicycle:.55,lantern:.35,utility:.3}[i]??.4;if(this._addCircleCollider(o.position.x,o.position.z,c),i==="vending"){const h=this.path.getPointAt(t);o.lookAt(h.x,o.position.y,h.z),this.vendingMachines.push(o),this._recordSpawn("vending",o.position,o.rotation.y)}this.scene.add(o)})}_createStreetFurniture(){[{t:.12,side:1,type:"bench",offset:2.2,benchVariant:"normal"},{t:.24,side:-1,type:"bollard",offset:2},{t:.26,side:-1,type:"bollard",offset:2.4},{t:.34,side:1,type:"plant",offset:2.1},{t:.36,side:1,type:"plant",offset:2.5},{t:.48,side:-1,type:"bench",offset:2.3,benchVariant:"cushion"},{t:.68,side:-1,type:"lantern",offset:2.3},{t:.74,side:1,type:"bench",offset:2.2,benchVariant:"normal"},{t:.84,side:-1,type:"plant",offset:2.2},{t:.62,side:1,type:"plant",offset:2.4}].forEach(({t,side:n,type:i,offset:r,benchVariant:a})=>{let o;switch(i){case"bench":o=Hs(a??"normal");break;case"bollard":o=py();break;case"plant":o=my();break;case"lantern":{o=$i();const c=o.userData.lanternMesh;c&&this.lanterns.push(c);break}default:return}Lt(o,this.path,t,n,r);const l={bench:.9,bollard:.2,plant:.35,lantern:.35};this._addCircleCollider(o.position.x,o.position.z,l[i]??.4),this.scene.add(o),i==="bench"&&this._recordSpawn("bench",o.position,o.rotation.y)})}_createVegetation(){[{t:.08,side:1,dist:9.5,variant:"cherry"},{t:.16,side:-1,dist:10,variant:"normal"},{t:.28,side:1,dist:9.5,variant:"pine"},{t:.38,side:-1,dist:10.5,variant:"cherry"},{t:.48,side:1,dist:9.5,variant:"normal"},{t:.58,side:-1,dist:10,variant:"pine"},{t:.68,side:1,dist:10.5,variant:"cherry"},{t:.78,side:-1,dist:9.5,variant:"normal"},{t:.86,side:1,dist:10,variant:"pine"},{t:.94,side:-1,dist:11,variant:"normal"}].forEach(({t,side:n,dist:i,variant:r})=>{const a=this.path.getPointAt(t),o=this.path.getTangentAt(t),l=new T(-o.z,0,o.x).multiplyScalar(n),c=ao(r);c.position.copy(a).add(l.multiplyScalar(i)),Us(c,0),this.scene.add(c),this._addCircleCollider(c.position.x,c.position.z,.9),r==="cherry"?this._recordSpawn("cherry_tree",c.position):r==="pine"&&t>.55&&t<.65&&this._recordSpawn("shrine_tree",c.position)});for(let t=0;t<16;t++){const n=.04+Math.random()*.92,i=this.path.getPointAt(n),r=this.path.getTangentAt(n),a=Math.random()>.5?1:-1,o=new T(-r.z,0,r.x).multiplyScalar(a),l=ao("normal");l.position.copy(i).add(o.multiplyScalar(9+Math.random()*4)),l.scale.setScalar(.75+Math.random()*.35),Us(l,0),this.scene.add(l),this._addCircleCollider(l.position.x,l.position.z,.7*l.scale.x)}[.22,.48,.72,.88].forEach(t=>{const n=gy();Lt(n,this.path,t,1,8+Math.random()*2),this.scene.add(n),this._addCircleCollider(n.position.x,n.position.z,1)})}_createSceneryDecor(){if(!this.modelLoader)return;[{t:.1,side:1,key:"rock",offset:10.5,height:.45},{t:.14,side:1,key:"bush",offset:10.2,height:.6},{t:.26,side:-1,key:"rock",offset:11,height:.5},{t:.3,side:-1,key:"bush",offset:10.8,height:.58},{t:.42,side:1,key:"bush",offset:10.5,height:.62},{t:.44,side:1,key:"rock",offset:11.2,height:.42},{t:.56,side:-1,key:"bush",offset:10.6,height:.55},{t:.58,side:-1,key:"decoration",offset:10.3,height:.35},{t:.66,side:1,key:"decoration",offset:10.2,height:.32},{t:.72,side:-1,key:"rock",offset:11.5,height:.48},{t:.8,side:1,key:"bush",offset:10.4,height:.6},{t:.84,side:-1,key:"bush",offset:10.7,height:.52},{t:.9,side:1,key:"rock",offset:11.3,height:.4},{t:.92,side:-1,key:"decoration",offset:10.5,height:.3}].forEach(({t:n,side:i,key:r,offset:a,height:o,scale:l=1})=>{const c=this.modelLoader.createInstance(r,{targetHeight:o,scale:l});c&&(Lt(c,this.path,n,i,a),this.scene.add(c),this._addCircleCollider(c.position.x,c.position.z,.45))}),[{x:-38,z:-28,key:"building_d",h:2.8,ry:.4},{x:40,z:-42,key:"building_d",h:2.4,ry:-.5},{x:-44,z:-68,key:"building_c",h:2.6,ry:.2},{x:42,z:-95,key:"building_c",h:2.3,ry:-.3},{x:-36,z:-118,key:"building_b",h:2.5,ry:.6}].forEach(({x:n,z:i,key:r,h:a,ry:o})=>{const l=this.modelLoader.createInstance(r,{targetHeight:a});l&&(l.position.set(n,0,i),l.rotation.y=o,this.scene.add(l),this._addBoxCollider(n,i,2,1.8,o))})}_createRiverCurve(){const e=[new T(-24,0,24),new T(-22,0,12),new T(-16,0,0),new T(-10,0,-14),new T(-18,0,-32),new T(-26,0,-52),new T(-20,0,-72),new T(-12,0,-92),new T(-22,0,-112),new T(-16,0,-132)];return new Zr(e,!1,"catmullrom",.45)}_createRiver(){this.riverCurve=this._createRiverCurve();const e=2.8,t=.6,n=Hd(),i=qt(this.riverCurve,e,-.06,n,0,160);i.userData.isWater=!0,this.scene.add(i),this.waterMeshes.push(i);const r=U(5931112),a=qt(this.riverCurve,t,.04,r,-3.5,160),o=qt(this.riverCurve,t,.04,r,e+t+.1,160);this.scene.add(a,o);const l=U(9476232),c=qt(this.riverCurve,.35,.06,l,-4.5,160),h=qt(this.riverCurve,.35,.06,l,e+t*2+.5,160);this.scene.add(c,h);const d=this.riverCurve.getSpacedPoints(80);for(let m=0;m<d.length;m++){const p=m/(d.length-1),y=d[m],b=this.riverCurve.getTangentAt(p).normalize(),x=new T(-b.z,0,b.x),R=Math.atan2(b.x,b.z),A=y.clone().add(x.clone().multiplyScalar(-3.0999999999999996)),E=y.clone().add(x.clone().multiplyScalar(e+.3));this._addBankCollider(A.x,A.z,.5,.25,R+Math.PI/2),this._addBankCollider(E.x,E.z,.5,.25,R+Math.PI/2)}const u=new Ne(.03,.04,.5,4),f=U(4882512);qi(this.scene,u,f,40,()=>{const m=Math.random(),p=this.riverCurve.getPointAt(m),y=this.riverCurve.getTangentAt(m).normalize(),b=new T(-y.z,0,y.x),R=(Math.random()>.5?1:-1)*(e+.8+Math.random()*.6);return p.clone().add(b.multiplyScalar(R)).setY(.25)},[.7,1.3]);const g=new Dt(.25,8),_=U(5283936);qi(this.scene,g,_,25,()=>{const m=Math.random(),p=this.riverCurve.getPointAt(m),y=this.riverCurve.getTangentAt(m).normalize(),b=new T(-y.z,0,y.x),x=(Math.random()-.5)*e*1.2;return p.clone().add(b.multiplyScalar(x)).setY(.02)},[.8,1.1])}_createSidePaths(){const i=this.path.getPointAt(.2),r=this.path.getTangentAt(.2).normalize(),a=new T(-r.z,0,r.x),o=Ih(this.path,.2,-1,6,[new T(-10,0,-14),new T(-12,0,-14),new T(-11,0,-32),new T(-13,0,-50),new T(-12,0,-70),new T(-11,0,-90),new T(-14,0,-100),new T(-8,0,-103)]);this.sidePaths.riverside=o,so(o,this.groundMeshes,this.scene,{pathHalf:1.45,divisions:140}),ro(i,r,a,-1,i.clone().add(a.clone().multiplyScalar(-6)),this.scene,this.groundMeshes),this._placeBridge(-12,-14,Math.PI/2,6,4.5),this._placeBridge(-14,-100,Math.PI/2+.2,6,4.5),[[-12,-14],[-14,-100]].forEach(([W,V])=>{[[-2.5,0],[2.5,0]].forEach(([q])=>{const H=$i();H.position.set(W+q,0,V+2),this.scene.add(H);const re=H.userData.lanternMesh;re&&this.lanterns.push(re)})});for(let W=0;W<6;W++){const V=Z(new Ne(.25,.28,.08,6),U(9476232));V.position.set(-9-W*.6,.04,-13.5+W*.3),this.scene.add(V)}const l=lo("川辺","Riverside",4227232);l.position.copy(i).add(a.clone().multiplyScalar(-4.5)),l.lookAt(i.x+r.x,0,i.z+r.z),this.scene.add(l);const c=.45,h=this.path.getPointAt(c),d=this.path.getTangentAt(c).normalize(),u=new T(-d.z,0,d.x),f=h.clone().add(u.clone().multiplyScalar(6)),g=[f.clone().add(new T(4,0,1)),f.clone().add(new T(6,0,-5)),f.clone().add(new T(2,0,-9)),f.clone().add(new T(-2,0,-5)),f.clone()],_=[h.clone(),h.clone().add(u.clone().multiplyScalar(6*.55)),h.clone().add(u.clone().multiplyScalar(6)),...g,h.clone().add(u.clone().multiplyScalar(6*.55))],m=new Zr(_,!0,"catmullrom",.42);this.sidePaths.shopping=m,so(m,this.groundMeshes,this.scene,{pathHalf:1.45,divisions:100,closed:!0}),ro(h,d,u,1,f,this.scene,this.groundMeshes);const p=lo("商店街","Shopping Lane",12599360);p.position.copy(h).add(u.clone().multiplyScalar(4.5)),p.lookAt(h.x+d.x,0,h.z+d.z),this.scene.add(p),[{t:.12,key:"bakery",ja:"パン屋 小麦",en:"Komugi Bakery",color:15245376,wall:16775404,roof:12615728,emoji:"🍞",label:"BREAD",goods:"bread"},{t:.35,key:"teahouse",ja:"茶屋 静",en:"Shizuka Tea",color:4227168,wall:15791340,roof:3825736,emoji:"🍵",label:"TEA",goods:"crates"},{t:.58,key:"konbini",ja:"コンビニ",en:"Mini Mart",color:4219040,wall:15790328,roof:3164280,emoji:"🏪",label:"OPEN",goods:"crates"},{t:.82,key:"sweets",ja:"和菓子 花",en:"Hana Sweets",color:14712976,wall:16773364,roof:12607600,emoji:"🍡",label:"SWEET",goods:"flowers"}].forEach(({t:W,key:V,ja:q,en:H,color:re,wall:pe,roof:Se,emoji:Ve,label:ot,goods:Y})=>{const ne=m.getPointAt(W),Me=m.getTangentAt(W),ae=Xd({targetHeight:2.6,labelJa:q,labelEn:H,signColor:re,awningColor:re,wallColor:pe,roofColor:Se,windowLabel:ot,windowEmoji:Ve,goodsType:Y,w:3,d:2.8});ae.position.copy(ne),ae.lookAt(ne.x+Me.x,ne.y,ne.z+Me.z),this.scene.add(ae),this._addBoxCollider(ne.x,ne.z,1.6,1.4,ae.rotation.y),this._recordSpawn(`shop_${V}`,ne,ae.rotation.y)}),[.25,.65].forEach(W=>{const V=m.getPointAt(W),q=Z(new oe(.6,.5,.06),U(3813408));q.position.set(V.x+2,.5,V.z),this.scene.add(q)});const b=Ph();b.position.copy(m.getPointAt(.5)),b.position.y=0,this.scene.add(b),this._addCircleCollider(b.position.x,b.position.z,.55);for(let W=0;W<5;W++){const V=.1+W*.18,q=m.getPointAt(V),H=$i();H.position.set(q.x,2.8,q.z),H.scale.setScalar(.7),this.scene.add(H);const re=H.userData.lanternMesh;re&&this.lanterns.push(re)}const x=.8,R=this.path.getPointAt(x),A=this.path.getTangentAt(x).normalize(),E=new T(-A.z,0,A.x),I=Ih(this.path,x,1,6,[R.clone().add(E.clone().multiplyScalar(9)).add(new T(0,0,-2)),R.clone().add(E.clone().multiplyScalar(11)).add(new T(0,0,-5)),R.clone().add(E.clone().multiplyScalar(8)).add(new T(0,0,-8))]);this.sidePaths.grove=I,so(I,this.groundMeshes,this.scene,{pathHalf:1.45,divisions:70}),ro(R,A,E,1,R.clone().add(E.clone().multiplyScalar(6)),this.scene,this.groundMeshes);const w=lo("公園","Park Grove",5933674);w.position.copy(R).add(E.clone().multiplyScalar(5)),w.lookAt(R.x+A.x,0,R.z+A.z),this.scene.add(w);const v=I.getPointAt(.85),P=new ee(new St(2.5,2),U(12599392));P.rotation.x=-Math.PI/2,P.position.set(v.x,.03,v.z),this.scene.add(P),[0,1,2,3,4].forEach(W=>{const V=W/5*Math.PI*2,q=W%2===0?"cherry":"normal",H=ao(q);H.position.set(v.x+Math.sin(V)*4,0,v.z+Math.cos(V)*4),Us(H,0),this.scene.add(H),this._addCircleCollider(H.position.x,H.position.z,.9)});const F=Hs("cushion");F.position.copy(I.getPointAt(.5)),F.position.y=0,this.scene.add(F),this._addCircleCollider(F.position.x,F.position.z,.9),this._recordSpawn("bench",F.position,F.rotation.y);const O=new Be(.08,6,5),j=U(14700624);qi(this.scene,O,j,12,()=>{const W=Math.random()*Math.PI*2,V=2+Math.random()*3;return new T(v.x+Math.sin(W)*V,.08,v.z+Math.cos(W)*V)},[.7,1.2]),this.walkableCurves=[this.path,o,m,I]}_createRiversideTrail(){if(!this.riverCurve)return;const e=.8,t=U(We.gravel),n=qt(this.riverCurve,e,.07,t,-5.4,160);this.scene.add(n),this.groundMeshes.push(n),[.15,.45,.68,.88].forEach(i=>{const r=this.riverCurve.getPointAt(i),a=this.riverCurve.getTangentAt(i).normalize(),o=new T(-a.z,0,a.x),l=r.clone().add(o.multiplyScalar(-7.5)),c=Hs("normal");c.position.copy(l),c.position.y=0,c.lookAt(l.x+a.x,0,l.z+a.z),this.scene.add(c),this._addCircleCollider(c.position.x,c.position.z,.9);const h=$i(),d=r.clone().add(o.multiplyScalar(-6.8));h.position.copy(d),h.position.y=0,this.scene.add(h);const u=h.userData.lanternMesh;u&&this.lanterns.push(u),this._addCircleCollider(h.position.x,h.position.z,.35)})}_createEnvironmentDetails(){const e=[16736400,15781952,6336767,16744512,12611808],t=new Be(.06,6,5);e.forEach((_,m)=>{const p=U(_);qi(this.scene,t,p,16,()=>{const y=-50+Math.random()*100,b=-130+Math.random()*150;return this._isNearPath(y,b,5)||this.riverCurve&&this._isNearRiver(y,b,4)?null:new T(y,.06,b)},[.8,1.4])});const n=new At(.08,.2,4),i=U(5937760);qi(this.scene,n,i,60,()=>{const _=-50+Math.random()*100,m=-130+Math.random()*150;return this._isNearPath(_,m,4.5)?null:new T(_,.1,m)},[.7,1.3]);const r=new kl(.12,0),a=U(8947840);qi(this.scene,r,a,30,()=>{const _=-50+Math.random()*100,m=-130+Math.random()*150;return this._isNearPath(_,m,3.5)?null:new T(_,.08,m)},[.6,1.2]);const o=10,l=new St(.15,.1),c=new dt({color:16752848,side:cn});this._butterflies=new Os(l,c,o),this._butterflyData=[];for(let _=0;_<o;_++)this._butterflyData.push({x:-10+Math.random()*30,z:-10+Math.random()*-100,baseY:1.2+Math.random()*1.5,y:1.2,phase:Math.random()*Math.PI*2,speed:.5+Math.random()*.8});this._butterflies.userData.dynamic=!0,this.scene.add(this._butterflies);const h=20,d=new Be(.04,4,4),u=new dt({color:12648320});this._fireflies=new Os(d,u,h),this._fireflyData=[];const g=this.path.getPointAt(.64);for(let _=0;_<h;_++)this._fireflyData.push({baseX:g.x+(Math.random()-.5)*6,baseZ:g.z+(Math.random()-.5)*6,baseY:.8+Math.random()*2,x:0,z:0,y:0,phase:Math.random()*Math.PI*2,speed:.4+Math.random()*.6});this._fireflies.userData.dynamic=!0,this.scene.add(this._fireflies)}_isNearPath(e,t,n){let i=1/0;for(let r=0;r<=80;r++){const a=this.path.getPointAt(r/80),o=Math.hypot(e-a.x,t-a.z);o<i&&(i=o)}return i<n}_isNearRiver(e,t,n){if(!this.riverCurve)return!1;let i=1/0;for(let r=0;r<=40;r++){const a=this.riverCurve.getPointAt(r/40),o=Math.hypot(e-a.x,t-a.z);o<i&&(i=o)}return i<n}_createClouds(){[[-18,20,-2,2.2],[12,22,-8,2.6],[-10,24,-22,2],[24,21,-18,2.4],[-24,23,2,1.8],[6,25,-28,2.2],[-14,20,-38,2.5],[18,22,-42,2],[0,26,-14,3],[26,21,-55,2.3],[-22,24,-65,2.1],[10,25,-72,2.6],[32,22,-50,2],[-8,23,-95,2.2],[20,24,-105,2.4],[-28,21,-115,2],[14,25,-128,2.3],[-32,19,-48,1.9],[8,28,-88,2.1],[30,20,-108,2.5],[-16,27,-78,2],[22,23,-32,2.2]].forEach(([t,n,i,r])=>{const a=xy(t,n,i,r);this.scene.add(a),this.animatedClouds.push(a)})}_createLighting(){const e=new ep(12642528,6985864,1.25);this.scene.add(e);const t=new ol(16774376,.65);t.position.set(18,28,12),t.castShadow=!0,t.shadow.mapSize.set(2048,2048),t.shadow.camera.near=.5,t.shadow.camera.far=120,t.shadow.camera.left=-40,t.shadow.camera.right=40,t.shadow.camera.top=40,t.shadow.camera.bottom=-40,t.shadow.bias=-4e-4,t.shadow.normalBias=.02,this.scene.add(t),this.scene.add(t.target),this.sun=t;const n=new ol(13164784,.55);n.position.set(-14,12,-8),this.scene.add(n);const i=new rp(15266028,.55);this.scene.add(i),[[-3,2.5,-10],[-5,2.5,-22],[4,2.5,-34],[6,2.5,-62]].forEach(([c,h,d])=>{const u=new Si(16763e3,.28,12);u.position.set(c,h,d),this.scene.add(u)});const r=new Si(9490656,.3,22);r.position.set(22,3,-95),this.scene.add(r);const a=new Si(16763e3,.25,14);a.position.set(6,3,-48),this.scene.add(a);const o=new Si(12624096,.22,14);o.position.set(-8,3,-68),this.scene.add(o);const l=new Si(11063528,.22,16);l.position.set(12,3,-128),this.scene.add(l)}getInteractableSpawns(){return this.interactableSpawns}getPath(){return this.path}getGroundMeshes(){return this.groundMeshes}}function Lh(s){const e=s.profile;s.routine=e.routine??"idle",s.patrolTs=e.patrolTs??null,s.patrolIndex=0,s.patrolSpeed=e.routine==="jog"?4.8:2.4,s.workPhase=Math.random()*Math.PI*2,s.routine==="sit"&&s.mesh.position.copy(s.homePos)}function Ly(s,e){if(!(s.isTalking||s.isCompanion||s.state==="following"||s.state==="approaching")&&!(s.playerNearby&&!s.profile.isAmbient))switch(s.routine){case"patrol":case"jog":Dy(s,e);break;case"work":Ny(s,e);break;case"sit":ky(s,e);break;default:Uy(s,e)}}function Dy(s,e){var r;if(s.mesh.userData.isSitting=!1,!((r=s.patrolTs)!=null&&r.length))return;const t=s.patrolTs[s.patrolIndex],n=s.path.getPointAt(t);n.y=s.mesh.position.y,s._moveToward(n,e,s.patrolSpeed,.9)&&(s.patrolIndex=(s.patrolIndex+1)%s.patrolTs.length)}function Ny(s,e){s.mesh.userData.isSitting=!1,s.workPhase+=e,s.mesh.position.y=s.homePos.y+Math.sin(s.workPhase*2.2)*.01;const t=Math.sin(s.workPhase*1.4)>.6;Ei(s.mesh,t?.35:0,e),s.mesh.rotation.y=s.homeFacing+Math.sin(s.workPhase*.7)*.25}function ky(s,e){s.idlePhase+=e*1.1,s.mesh.position.copy(s.homePos),s.mesh.position.y+=Math.sin(s.idlePhase)*.012,s.mesh.rotation.y=s.homeFacing,s.mesh.userData.isSitting=!0,Ei(s.mesh,0,e)}function Uy(s,e){s.mesh.userData.isSitting=!1,s.idlePhase+=e*1.5,s.mesh.position.y=s.homePos.y+Math.sin(s.idlePhase)*.015}function jd(s,e,t,n,i,r){const a=e.x-s.position.x,o=e.z-s.position.z,l=Math.hypot(a,o);if(l>i){const c=Math.min(n*t,l-i);return s.position.x+=a/l*c,s.position.z+=o/l*c,s.rotation.y=Math.atan2(a,o),r==null||r(n,t),!1}return r==null||r(0,t),!0}function Fy(s,e,t,n,i,r,a,o){const l=new T(-Math.sin(t)*r,0,-Math.cos(t)*r),c=e.clone().add(l);return c.y=s.position.y,jd(s,c,n,i,a,o)}const Tt=.961,By=1.278,se=s=>s*By;function Oy(){const s=new we,e=U(1118481),t=U(13381680),n=new ee(new Ne(se(.24),se(.25),se(.025),16),e);n.position.y=Tt+se(.012),s.add(n);const i=new ee(new Ne(se(.132),se(.132),se(.03),16),t);i.position.y=Tt+se(.025)+se(.015),s.add(i);const r=new ee(new Ne(se(.13),se(.135),se(.22),16),e);return r.position.y=Tt+se(.025)+se(.11),s.add(r),s}function zy(){const s=new we,e=U(2755162),t=U(1705536),n=U(8930440),i=new ee(new Ne(se(.3),se(.32),se(.03),16),t);i.position.y=Tt+se(.015),s.add(i);const r=new ee(new At(se(.13),se(.45),8),e);r.position.y=Tt+se(.03)+se(.225),s.add(r);const a=new ee(new Ne(se(.132),se(.132),se(.025),16),n);return a.position.y=Tt+se(.03)+se(.012),s.add(a),s}function Hy(){const s=new we,e=U(15777824),t=U(13373536),n=new ee(new Ne(se(.18),se(.17),se(.07),16),e);return n.position.y=Tt+se(.035),s.add(n),[0,72,144,216,288].forEach((i,r)=>{const a=i*Math.PI/180,o=r%2===0,l=se(o?.14:.08),c=se(.18),h=new ee(new At(se(.027),l,5),e);if(h.position.set(Math.sin(a)*c,Tt+se(.07)+l*.5,Math.cos(a)*c),s.add(h),o){const d=new ee(new Be(se(.025),6,5),t);d.position.set(Math.sin(a)*c,Tt+se(.07)+se(.01),Math.cos(a)*c),s.add(d)}}),s}function Gy(){const s=new we,e=U(5283888),t=[16732304,15781920,5292287,16744496,14704895,8972352,16732304,15781920],n=se(.18),i=new ee(new ci(n,se(.018),8,20),e);i.rotation.x=Math.PI/2,i.position.y=Tt+se(.02),s.add(i);for(let r=0;r<8;r++){const a=r/8*Math.PI*2,o=new ee(new Be(se(.042),7,6),U(t[r]));o.position.set(Math.sin(a)*n,Tt+se(.05),Math.cos(a)*n),s.add(o)}return s}function Vy(){const s=new we,e=U(16771136),t=new ee(new ci(se(.2),se(.024),8,24),e);return t.rotation.x=Math.PI/2,t.position.y=Tt+se(.28),s.add(t),s}function Wy(){const s=new we,e=U(1710634),t=U(16751052);return[-se(.12),se(.12)].forEach(n=>{const i=new ee(new At(se(.065),se(.15),3),e);i.position.set(n,Tt+se(.06),0),s.add(i);const r=new ee(new At(se(.038),se(.1),3),t);r.position.set(n,Tt+se(.06),0),s.add(r)}),s}function Xy(){const s=new we,e=U(8921634),t=new ee(new Ne(se(.2),se(.2),se(.055),16),e);t.position.y=Tt+se(.028),t.rotation.z=.3,s.add(t);const n=new ee(new Be(se(.023),6,5),e);return n.position.set(se(-.07),Tt+se(.075),se(.07)),s.add(n),s}function jy(){const s=new we,e=U(1118481),t=U(13377568),n=U(14540236),i=new ee(new Ne(se(.22),se(.23),se(.025),16),e);i.position.y=Tt+se(.012),s.add(i);const r=new ee(new Ne(se(.11),se(.14),se(.14),16),e);r.position.y=Tt+se(.025)+se(.07),s.add(r);const a=new ee(new Be(se(.028),6,5),n);a.position.set(se(.11),Tt+se(.025)+se(.08),0),s.add(a);const o=new ee(new Ne(se(.013),se(.005),se(.11),5),t);return o.rotation.z=.4,o.position.set(se(-.065),Tt+se(.025)+se(.145),se(.065)),s.add(o),s}function Yy(s){switch(s){case"tophat":return Oy();case"witchhat":return zy();case"crown":return Hy();case"flowerCrown":return Gy();case"halo":return Vy();case"catears":return Wy();case"beret":return Xy();case"piratecap":return jy();default:return null}}const Ky=["_hat","_helmet"];function co(s,e){s.traverse(t=>{if(!t.isMesh&&!t.isSkinnedMesh)return;const n=t.name.toLowerCase();Ky.some(i=>n.endsWith(i))&&(t.visible=e)})}function qy(s){const e=[];s.traverse(t=>{t.userData.isProceduralAccessory&&e.push(t)}),e.forEach(t=>{var n;return(n=t.parent)==null?void 0:n.remove(t)})}function Yd(s,e){if(!s)return;if(qy(s),!e||e==="none"){co(s,!1),s.userData.accessoryId="none";return}if(e==="class_hat"){co(s,!0),s.userData.accessoryId="class_hat";return}co(s,!1);const t=Yy(e);if(!t)return;let n=null;s.traverse(i=>{!n&&i.isBone&&i.name==="head"&&(n=i)}),n&&(t.userData.isProceduralAccessory=!0,t.traverse(i=>{i.userData.dynamic=!0}),n.add(t),s.userData.accessoryId=e)}let en=null;function $y(s){en=s}class Jy{constructor(e){this.keys={},this.move={x:0,z:0},this.cameraAngle=0,this.cameraPitch=.38,this.cameraDistance=4.5,this.isDragging=!1,this.lastPointer={x:0,y:0},this.justPressed=new Set,this.interactRequested=!1,this.dialogueOpen=!1,this.outfitOpen=!1,this.tap=null,this.pointerStart=null,this.touchStart=null,window.addEventListener("keydown",t=>{this.keys[t.code]||this.justPressed.add(t.code),this.keys[t.code]=!0,["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(t.code)&&t.preventDefault()}),window.addEventListener("keyup",t=>{this.keys[t.code]=!1}),e.addEventListener("pointerdown",t=>{this.isDragging=!0,this.lastPointer={x:t.clientX,y:t.clientY},this.pointerStart={x:t.clientX,y:t.clientY,id:t.pointerId}}),window.addEventListener("pointerup",t=>{var n;if(((n=this.pointerStart)==null?void 0:n.id)===t.pointerId){const i=t.clientX-this.pointerStart.x,r=t.clientY-this.pointerStart.y;Math.hypot(i,r)<12&&(this.tap={x:t.clientX,y:t.clientY}),this.pointerStart=null}this.isDragging=!1}),window.addEventListener("pointermove",t=>{if(!this.isDragging)return;const n=t.clientX-this.lastPointer.x,i=t.clientY-this.lastPointer.y;this.cameraAngle-=n*.005,this.cameraPitch=$t.clamp(this.cameraPitch+i*.003,.3,.55),this.lastPointer={x:t.clientX,y:t.clientY}}),e.addEventListener("wheel",t=>{this.cameraDistance=$t.clamp(this.cameraDistance+t.deltaY*.01,3.5,10)},{passive:!0}),this._setupTouch(e)}_setupTouch(e){const t={active:!1,origin:{x:0,y:0},current:{x:0,y:0}};e.addEventListener("touchstart",n=>{if(n.touches.length===1){const i=n.touches[0];this.touchStart={x:i.clientX,y:i.clientY},i.clientX<window.innerWidth*.4?(t.active=!0,t.origin={x:i.clientX,y:i.clientY},t.current={x:i.clientX,y:i.clientY}):(this.isDragging=!0,this.lastPointer={x:i.clientX,y:i.clientY})}},{passive:!0}),e.addEventListener("touchmove",n=>{if(t.active&&n.touches.length>=1){const i=n.touches[0];i.clientX<window.innerWidth*.5&&(t.current={x:i.clientX,y:i.clientY})}if(this.isDragging&&n.touches.length>=1){const i=n.touches[n.touches.length-1],r=i.clientX-this.lastPointer.x,a=i.clientY-this.lastPointer.y;this.cameraAngle-=r*.005,this.cameraPitch=$t.clamp(this.cameraPitch+a*.003,.3,.55),this.lastPointer={x:i.clientX,y:i.clientY}}},{passive:!0}),e.addEventListener("touchend",n=>{const i=n.changedTouches[0];if(i&&this.touchStart){const r=i.clientX-this.touchStart.x,a=i.clientY-this.touchStart.y;Math.hypot(r,a)<14&&(this.tap={x:i.clientX,y:i.clientY})}this.touchStart=null,t.active=!1,this.isDragging=!1}),this.joystick=t}update(){var i;let e=0,t=0;if((this.keys.KeyW||this.keys.ArrowUp)&&(t-=1),(this.keys.KeyS||this.keys.ArrowDown)&&(t+=1),(this.keys.KeyA||this.keys.ArrowLeft)&&(e-=1),(this.keys.KeyD||this.keys.ArrowRight)&&(e+=1),(i=this.joystick)!=null&&i.active){const r=this.joystick.current.x-this.joystick.origin.x,a=this.joystick.current.y-this.joystick.origin.y,o=Math.hypot(r,a);o>8&&(e=r/o,t=a/o)}const n=Math.hypot(e,t);n>0&&(e/=n,t/=n),this.move={x:e,z:t},this.isRunning=this.keys.ShiftLeft||this.keys.ShiftRight}requestInteract(){this.interactRequested=!0}consumeInteractRequest(){return this.interactRequested?(this.interactRequested=!1,!0):!1}consumeKey(e){return this.justPressed.has(e)?(this.justPressed.delete(e),!0):!1}consumeTap(){const e=this.tap;return this.tap=null,e}endFrame(){this.justPressed.clear()}}function fl(s={}){const e=s.modelKey??"character_female_a",t=en==null?void 0:en.createCharacterInstance(e,{tint:s.tint??null,tintStrength:s.tintStrength??.22});if(t){if(s.nameTag){const m=Dh(s.nameTag,s.nameTagJa);m.position.y=2.45,t.add(m)}return t}const n=new we,i=s.shirtColor??We.shirt,r=s.backpackColor??We.backpack,a=s.hairColor??We.hair,o=Z(new Ne(.2,.24,.72,8),U(i));o.position.y=1.05,n.add(o);const l=Z(new Ne(.26,.3,.28,8),U(We.pants));l.position.y=.58,n.add(l);const c=Z(new Be(.17,10,8),U(We.skin));c.position.y=1.58,n.add(c);const h=Z(new Be(.19,10,8,0,Math.PI*2,0,Math.PI*.55),U(a));h.position.y=1.64,h.scale.set(1,.82,1),n.add(h);const d=Z(new oe(.3,.38,.14),U(r));d.position.set(0,1.12,-.2),n.add(d);const u=new Ne(.065,.075,.52,6),f=[];[-.11,.11].forEach(m=>{const p=new we;p.position.set(m,.28,0);const y=Z(u,U(We.pants));p.add(y);const b=Z(new oe(.11,.06,.2),U(15790320));b.position.set(0,-.22,.04),p.add(b),n.add(p),f.push(p)});const g=new Ne(.044,.048,.42,6),_=[];return[-.26,.26].forEach(m=>{const p=new we;p.position.set(m,1.18,0),p.rotation.z=m>0?-.15:.15;const y=Z(g,U(i));p.add(y);const b=Z(new Be(.048,6,4),U(We.skin));b.position.y=-.24,p.add(b),n.add(p),_.push(p)}),n.userData.face=Zy(n),n.userData.legs=f,n.userData.arms=_,n.userData.walkPhase=0,n.userData.sitBlend=0,s.nameTag&&n.add(Dh(s.nameTag,s.nameTagJa)),n}function Zy(s){const e=new dt({color:16777215}),t=new dt({color:1718906}),n=new dt({color:1118498}),i=new dt({color:16777215}),r=U(13668496),a=new dt({color:13670520}),o=new ee(new Dt(.032,10),e),l=new ee(new Dt(.032,10),e);o.position.set(-.065,1.58,.195),l.position.set(.065,1.58,.195),s.add(o,l);const c=new ee(new Dt(.022,10),t),h=new ee(new Dt(.022,10),t);c.position.set(-.065,1.58,.196),h.position.set(.065,1.58,.196),s.add(c,h);const d=new ee(new Dt(.014,8),n),u=new ee(new Dt(.014,8),n);d.position.set(-.065,1.58,.197),u.position.set(.065,1.58,.197),s.add(d,u);const f=new ee(new Dt(.006,6),i),g=new ee(new Dt(.006,6),i);f.position.set(-.056,1.59,.198),g.position.set(.074,1.59,.198),s.add(f,g);const _=new ee(new Be(.013,6,5),a);_.scale.set(1.2,.75,.6),_.position.set(0,1.51,.205),s.add(_);const m=new ee(new oe(.055,.013,.015),r);m.position.set(0,1.475,.2),s.add(m);const p=new dt({color:15769768,transparent:!0,opacity:.65}),y=new ee(new Dt(.04,10),p);y.position.set(-.115,1.515,.175),y.rotation.y=.28,y.visible=!1,s.add(y);const b=new ee(new Dt(.04,10),p);return b.position.set(.115,1.515,.175),b.rotation.y=-.28,b.visible=!1,s.add(b),{leftEye:d,rightEye:u,mouth:m,blushL:y,blushR:b,baseMouthY:1.475,baseEyeY:1.58,_leftSclera:o,_rightSclera:l,_leftIris:c,_rightIris:h}}function zn(s,e){var _;if((_=s.userData)!=null&&_.isRiggedCharacter){e==="happy"?en==null||en.playCharacterEmote(s,"emote-yes"):(e==="shy"||e==="thinking")&&(en==null||en.playCharacterEmote(s,"emote-no"));return}const t=s.userData.face;if(!t)return;const{leftEye:n,rightEye:i,mouth:r,blushL:a,blushR:o,baseMouthY:l,baseEyeY:c,_leftSclera:h,_rightSclera:d,_leftIris:u,_rightIris:f}=t;for(const m of[n,i,h,d,u,f])m&&m.scale.set(1,1,1);n.position.set(-.065,c,.197),i.position.set(.065,c,.197),h&&h.position.set(-.065,c,.195),d&&d.position.set(.065,c,.195),u&&u.position.set(-.065,c,.196),f&&f.position.set(.065,c,.196),r.scale.set(1,1,1),r.position.set(0,l,.2),a.visible=!1,o.visible=!1;const g=(m,p)=>{for(const y of[n,i,h,d,u,f])y&&y.scale.set(m,p,1)};switch(e){case"happy":g(1,.38),r.scale.set(1.5,2.4,1);break;case"surprised":g(1.3,1.3),r.scale.set(.75,2.8,1),r.position.y=l-.012;break;case"thinking":n.position.set(-.04,c+.02,.197),i.position.set(.08,c+.02,.197),u&&u.position.set(-.04,c+.02,.196),f&&f.position.set(.08,c+.02,.196),r.scale.set(.75,.75,1);break;case"shy":g(1,.65),r.scale.set(.55,1,1),a.visible=!0,o.visible=!0;break}}function Dh(s,e){const t=document.createElement("canvas");t.width=256,t.height=64;const n=t.getContext("2d"),i=14;n.fillStyle="rgba(18,26,34,0.82)",n.strokeStyle="rgba(120,200,200,0.7)",n.lineWidth=2.5,n.beginPath(),n.moveTo(i+6,6),n.lineTo(250-i,6),n.quadraticCurveTo(250,6,250,6+i),n.lineTo(250,58-i),n.quadraticCurveTo(250,58,250-i,58),n.lineTo(i+6,58),n.quadraticCurveTo(6,58,6,58-i),n.lineTo(6,6+i),n.quadraticCurveTo(6,6,i+6,6),n.closePath(),n.fill(),n.stroke(),n.fillStyle="#e8f4f4",n.font="bold 18px sans-serif",n.textAlign="center",n.fillText(e||s,128,28),n.fillStyle="#90b8b8",n.font="13px sans-serif",n.fillText(s||"",128,48);const r=new Ht(t),a=new Sn({map:r,transparent:!0}),o=new Rn(a);o.position.y=2.45,o.scale.set(1.2,.32,1);const l=new Sn({transparent:!0,opacity:0,depthWrite:!1}),c=new Rn(l);c.position.y=2.45,c.scale.set(1.8,.65,1),c.userData.isNameTagHit=!0;const h=new we;return h.add(o),h.add(c),h.userData.isNameTag=!0,h}function Ei(s,e,t){var a,o,l,c;const n=s.userData;if(n.isRiggedCharacter){en==null||en.updateCharacterAnimation(s,e,t);return}const i=n.isSitting?1:0;if(n.sitBlend=$t.lerp(n.sitBlend??0,i,.1),Qy(s,n.sitBlend),n.isSitting)return;if(e<.1){(a=n.legs)==null||a.forEach(h=>{h.rotation.x=$t.lerp(h.rotation.x,0,.12)}),(o=n.arms)==null||o.forEach(h=>{h.rotation.x=$t.lerp(h.rotation.x,0,.12)});return}n.walkPhase+=t*e*7.5;const r=Math.min(e/3,1.5);(l=n.legs)==null||l.forEach((h,d)=>{h.rotation.x=Math.sin(n.walkPhase+d*Math.PI)*.42*r}),(c=n.arms)==null||c.forEach((h,d)=>{h.rotation.x=Math.sin(n.walkPhase+d*Math.PI+Math.PI)*.28*r})}function Qy(s,e){var i,r;if(e<.001)return;const n=s.children.find(a=>{var o;return((o=a.geometry)==null?void 0:o.type)==="CylinderGeometry"&&a.position.y>.7});n&&(n.position.y=$t.lerp(.85,.62,e)),(i=s.userData.legs)==null||i.forEach((a,o)=>{const l=o===0?-.9:.9;a.rotation.x=$t.lerp(0,l,e),a.position.z=$t.lerp(0,.18,e)}),(r=s.userData.arms)==null||r.forEach(a=>{a.rotation.x=$t.lerp(0,.6,e)})}const Nh=12,Or={minX:-75,maxX:75,minZ:-145,maxZ:28};class ev{constructor(e,t){this.scene=e,this.path=t,this.outfit={modelKey:"character_female_a",tint:null,scale:1},this.mesh=fl({modelKey:this.outfit.modelKey}),this.mesh.position.copy(t.getPointAt(.05)),e.add(this.mesh),this.velocity=new T,this.facing=0,this.walkSpeed=3.2,this.runSpeed=6.5,this.baseRunSpeed=6.5,this.speedBoostTimer=0,this.pathT=.05,this.raycaster=new Hl,this.restTimer=0,this.restPos=null,this.restSitY=.01,this.verticalVelocity=0,this.isGrounded=!0,this.colliderWorld=null,this.walkableCurves=null}applySpeedBoost(e,t){this.runSpeed=this.baseRunSpeed+e,this.speedBoostTimer=t}setOutfit({modelKey:e,tint:t,tintStrength:n,scale:i=1}){const r=this.mesh.position.clone(),a=this.mesh.rotation.y,o=this.mesh.userData.isSitting,l=this.mesh.userData.isJumping,c=this.mesh.userData.accessoryId??"none";this.scene.remove(this.mesh),this.mesh=fl({modelKey:e??this.outfit.modelKey,tint:t!==void 0?t:this.outfit.tint,tintStrength:n??this.outfit.tintStrength??.22}),i!==1&&this.mesh.scale.setScalar(i),this.mesh.position.copy(r),this.mesh.rotation.y=a,this.mesh.userData.isSitting=o,this.mesh.userData.isJumping=l,this.mesh.traverse(h=>{h.userData.dynamic=!0}),this.scene.add(this.mesh),c&&c!=="none"&&Yd(this.mesh,c),this.outfit={modelKey:e??this.outfit.modelKey,tint:t!==void 0?t:this.outfit.tint,tintStrength:n??this.outfit.tintStrength??.22,scale:i}}update(e,t,n){var a,o;if(this.speedBoostTimer>0&&(this.speedBoostTimer-=t,this.speedBoostTimer<=0&&(this.runSpeed=this.baseRunSpeed)),e.dialogueOpen||this.restTimer>0||e.outfitOpen)this.velocity.set(0,0,0),this.restTimer>0&&(this.restTimer-=t,this.mesh.userData.isSitting=!0,this.restPos&&(this.mesh.position.lerp(this.restPos,.08),this.mesh.position.y=this.restSitY),this.restTimer<=0&&(this.mesh.userData.isSitting=!1));else{e.consumeKey("Space")&&this.isGrounded&&(this.verticalVelocity=5.8,this.isGrounded=!1,this.mesh.userData.isJumping=!0);const l=e.isRunning?this.runSpeed:this.walkSpeed,c=new T(Math.sin(e.cameraAngle),0,Math.cos(e.cameraAngle)),h=new T(Math.cos(e.cameraAngle),0,-Math.sin(e.cameraAngle)),d=new T().addScaledVector(h,e.move.x).addScaledVector(c,e.move.z);d.lengthSq()>.001?(d.normalize(),this.velocity.copy(d.multiplyScalar(l)),this.facing=Math.atan2(d.x,d.z)):this.velocity.multiplyScalar(.85)}this.mesh.position.x+=this.velocity.x*t,this.mesh.position.z+=this.velocity.z*t,this.colliderWorld&&this.colliderWorld.resolve(this.mesh.position,.45),this._clampToWalkableArea();const i=this._sampleGround(this.mesh.position,n);!this.isGrounded||this.verticalVelocity>0?(this.verticalVelocity-=16*t,this.mesh.position.y+=this.verticalVelocity*t,this.mesh.position.y<=i&&(this.mesh.position.y=i,this.verticalVelocity=0,this.isGrounded=!0,this.mesh.userData.isJumping=!1)):this.mesh.position.y=i,this.mesh.rotation.y=$t.lerp(this.mesh.rotation.y,this.facing,.15);const r=this.velocity.length();Ei(this.mesh,r,t),this.pathT=((o=(a=this.path).getClosestPointT)==null?void 0:o.call(a,this.mesh.position))??0}rest(e,t,n={}){this.restTimer=e,this.restPos=t==null?void 0:t.clone(),this.restSitY=n.sitY??.01,n.facing!=null&&(this.mesh.rotation.y=n.facing),this.velocity.set(0,0,0)}_clampToWalkableArea(){var a;const e=this.mesh.position,t=((a=this.walkableCurves)==null?void 0:a.length)>0?this.walkableCurves:[this.path];let n=1/0,i=null,r=0;for(const o of t)if(o!=null&&o.getPointAt)for(let l=0;l<=80;l++){const c=l/80,h=o.getPointAt(c),d=Math.hypot(e.x-h.x,e.z-h.z);d<n&&(n=d,i=h,r=c)}if(i&&(this.pathT=r,n>Nh)){const o=Nh/n;e.x=i.x+(e.x-i.x)*o,e.z=i.z+(e.z-i.z)*o}e.x=$t.clamp(e.x,Or.minX,Or.maxX),e.z=$t.clamp(e.z,Or.minZ,Or.maxZ)}_sampleGround(e,t){this.raycaster.set(new T(e.x,20,e.z),new T(0,-1,0));const n=this.raycaster.intersectObjects(t,!1);return n.length>0?n[0].point.y:0}get position(){return this.mesh.position}}function tv(s,e="speech"){const t=(s??"").toUpperCase(),n=e==="ellipsis",i=n?22:13,r=220,a=n?28:18,o=14,l=10,c=document.createElement("canvas").getContext("2d");c.font=`bold ${i}px "Noto Sans JP", sans-serif`;const h=[];if(n)h.push("...");else{const m=t.split(/\s+/);let p="";for(const y of m){const b=p?`${p} ${y}`:y;c.measureText(b).width>r&&p?(h.push(p),p=y):p=b}p&&h.push(p),h.length===0&&h.push("")}const d=Math.max(80,...h.map(m=>c.measureText(m).width+o*2)),u=h.length*a+l*2+8,f=document.createElement("canvas");f.width=Math.ceil(d),f.height=Math.ceil(u);const g=f.getContext("2d"),_=10;if(g.fillStyle="#ffffff",g.strokeStyle="#1a1a1a",g.lineWidth=3,g.beginPath(),g.moveTo(_,0),g.lineTo(d-_,0),g.quadraticCurveTo(d,0,d,_),g.lineTo(d,u-_-8),g.quadraticCurveTo(d,u-8,d-_,u-8),g.lineTo(d*.55,u-8),g.lineTo(d*.5,u),g.lineTo(d*.45,u-8),g.lineTo(_,u-8),g.quadraticCurveTo(0,u-8,0,u-_-8),g.lineTo(0,_),g.quadraticCurveTo(0,0,_,0),g.closePath(),g.fill(),g.stroke(),n){g.fillStyle="#50a850";for(let m=0;m<3;m++)g.beginPath(),g.arc(d/2-14+m*14,u/2-2,4,0,Math.PI*2),g.fill()}else g.fillStyle="#1a1a1a",g.font=`bold ${i}px "Noto Sans JP", sans-serif`,g.textAlign="center",h.forEach((m,p)=>{g.fillText(m,d/2,l+a*(p+.75))});return{canvas:f,w:d,h:u}}function nv(){const s=new Rn(new Sn({transparent:!0,depthTest:!0}));return s.position.y=2.75,s.visible=!1,s.userData.mode="speech",s.userData.setText=(e,t="speech")=>{if(s.userData.mode=t,!e&&t!=="ellipsis"){s.visible=!1;return}const{canvas:n,w:i,h:r}=tv(e,t);s.material.map&&s.material.map.dispose(),s.material.map=new Ht(n),s.material.map.colorSpace=mt,s.material.needsUpdate=!0;const a=i/r,o=t==="ellipsis"?.38:Math.min(.95,.22+iv(e)*.12);s.scale.set(o*a,o,1),s.visible=!0},s.userData.hide=()=>{s.visible=!1},s}function iv(s){return Math.max(1,Math.ceil(((s==null?void 0:s.length)??0)/28))}function sv(){const s=document.createElement("canvas");s.width=32,s.height=24;const e=s.getContext("2d");e.fillStyle="#ffffff",e.strokeStyle="#1a1a1a",e.lineWidth=2.5,e.beginPath(),e.moveTo(16,20),e.lineTo(4,6),e.lineTo(28,6),e.closePath(),e.fill(),e.stroke();const t=new Ht(s),n=new Rn(new Sn({map:t,transparent:!0}));return n.position.y=2.25,n.scale.set(.28,.22,1),n.visible=!1,n}function rv(){const s=document.createElement("canvas");s.width=64,s.height=64;const e=s.getContext("2d");e.fillStyle="#f0c040",e.beginPath(),e.arc(32,36,22,0,Math.PI*2),e.fill(),e.strokeStyle="#1a1a1a",e.lineWidth=3,e.stroke(),e.fillStyle="#1a1a1a",e.font="bold 28px sans-serif",e.textAlign="center",e.fillText("!",32,44);const t=new Ht(s),n=new Rn(new Sn({map:t,transparent:!0}));return n.position.y=2.25,n.scale.set(.45,.45,1),n.visible=!1,n}function av(){const s=document.createElement("canvas");s.width=64,s.height=64;const e=s.getContext("2d");e.fillStyle="rgba(18,40,40,0.85)",e.beginPath(),e.arc(32,36,22,0,Math.PI*2),e.fill(),e.strokeStyle="#5ababa",e.lineWidth=3,e.stroke(),e.font="28px sans-serif",e.textAlign="center",e.fillText("👋",32,44);const t=new Ht(s),n=new Rn(new Sn({map:t,transparent:!0}));return n.position.y=2.25,n.scale.set(.5,.5,1),n.visible=!1,n}class ov{constructor(e,t,n){this.type="npc",this.path=t,this.profile=n,this.t=n.startT,this.isTalking=!1,this.playerNearby=!1,this.talkCount=0,this.friendship=0,this.ignoreUntil=0,this.idlePhase=Math.random()*Math.PI*2,this.state="idle",this.isCompanion=!1,this.homePos=new T,this.walkSpeed=2.8,this.followSpeed=3.4,this.mesh=fl({modelKey:n.characterModel??"character_male_a",shirtColor:n.shirtColor,backpackColor:n.backpackColor,hairColor:n.hairColor,nameTag:n.name,nameTagJa:n.nameJa}),this.alertBubble=rv(),this.waveBubble=av(),this.speechBubble=nv(),this.interactPrompt=sv(),this.mesh.add(this.alertBubble),this.mesh.add(this.waveBubble),this.mesh.add(this.speechBubble),this.mesh.add(this.interactPrompt),e.add(this.mesh),zn(this.mesh,n.defaultExpression),this._placeOnPath(),this.homePos.copy(this.mesh.position),this.homeFacing=this.mesh.rotation.y,Lh(this),this.nameTag=this.mesh.children.find(i=>{var r;return(r=i.userData)==null?void 0:r.isNameTag})??null,this.nameTag&&(this.nameTag.userData.interactable=this,this.nameTag.userData.interactNpc=this,this.nameTag.children.forEach(i=>{i.userData.interactable=this,i.userData.interactNpc=this})),this.mesh.userData.interactable=this}getHitTargets(){const e=[];return this.nameTag&&e.push(this.nameTag),e}canInteract(e){return this.distanceTo(e)<9}interact(e){var t;this.clearIgnore(),this.stopApproaching(),(t=e.dialogue)==null||t.showApproach(this,{initiated:!1})}_placeOnPath(){const e=this.path.getPointAt(this.t),t=this.path.getTangentAt(this.t);this.mesh.position.copy(e),this.mesh.position.y+=.02,this.mesh.rotation.y=Math.atan2(t.x,t.z)}distanceTo(e){const t=this.mesh.position.x-e.x,n=this.mesh.position.z-e.z;return Math.hypot(t,n)}isIgnored(){return Date.now()<this.ignoreUntil}ignoreFor(e){this.ignoreUntil=Date.now()+e*1e3,this.alertBubble.visible=!1,this.stopApproaching()}clearIgnore(){this.ignoreUntil=0}hasMetBefore(){return this.talkCount>0}markMet(){this.talkCount+=1}addFriendship(){this.friendship+=1}setExpression(e){zn(this.mesh,e)}showSpeechText(e){this.speechBubble.userData.setText(e,"speech"),this.interactPrompt.visible=!1}showEllipsisBubble(){this.speechBubble.userData.setText("","ellipsis")}hideSpeechBubble(){this.speechBubble.userData.hide()}showInteractPrompt(){!this.isTalking&&!this.isIgnored()&&(this.interactPrompt.visible=!0)}hideInteractPrompt(){this.interactPrompt.visible=!1}onApproach(e=!1){this.alertBubble.visible=!e,this.waveBubble.visible=e,this.hideInteractPrompt(),e||this.showEllipsisBubble(),zn(this.mesh,"happy")}clearApproachBubbles(){this.alertBubble.visible=!1,this.waveBubble.visible=!1,this.isTalking||this.hideSpeechBubble()}startApproaching(){this.state==="following"||this.isCompanion||(this.state="approaching",this.waveBubble.visible=!0,zn(this.mesh,"happy"))}stopApproaching(){this.state==="approaching"&&(this.state="idle"),this.waveBubble.visible=!1}startFollowing(){this.state="following",this.isCompanion=!0,this.clearApproachBubbles(),zn(this.mesh,"happy")}stopFollowing(e=!1){this.state="idle",this.isCompanion=!1,this.clearApproachBubbles(),zn(this.mesh,this.profile.defaultExpression),e&&(this.mesh.position.copy(this.homePos),Lh(this))}setPlayerNearby(e,t){this.playerNearby=e&&!this.isCompanion,e&&t&&!this.isTalking&&!this.isCompanion&&this.facePoint(t),!this.isTalking&&!this.isCompanion&&this.state!=="approaching"&&(this.alertBubble.visible=!1,e&&!this.isIgnored()?(this.showInteractPrompt(),(this.profile.routine==="sit"||this.mesh.userData.isSitting)&&this.showEllipsisBubble()):(this.hideInteractPrompt(),this.isTalking||this.hideSpeechBubble()))}startConversation(){this.isTalking=!0,this.clearApproachBubbles(),this.hideInteractPrompt(),this.state==="approaching"&&(this.state="idle")}endConversation(){this.isTalking=!1,this.hideSpeechBubble(),this.isCompanion||zn(this.mesh,this.profile.defaultExpression)}facePoint(e){const t=e.x-this.mesh.position.x,n=e.z-this.mesh.position.z;Math.hypot(t,n)>.01&&(this.mesh.rotation.y=Math.atan2(t,n))}_moveToward(e,t,n,i=1.4){return jd(this.mesh,e,t,n,i,(r,a)=>Ei(this.mesh,r,a))}update(e,t=null,n=0){if(this.isTalking){Ei(this.mesh,0,e),t&&this.facePoint(t);return}if(this.state==="following"&&t){Fy(this.mesh,t,n,e,this.followSpeed,1.4,1.2,(i,r)=>Ei(this.mesh,i,r)),this.mesh.position.y=.02+Math.sin(this.idlePhase)*.008,this.idlePhase+=e*2;return}if(this.state==="approaching"&&t){const i=this._moveToward(t,e,this.walkSpeed,2.2);this.waveBubble.visible=!0,i&&zn(this.mesh,"happy");return}if(this.playerNearby){Ei(this.mesh,0,e),t&&this.facePoint(t);return}Ly(this,e)}}const lv=[{id:"yuki",name:"Yuki Tanaka",nameJa:"田中 雪",characterModel:"character_female_b",personality:"Shy bookworm",tagline:"Always found reading near the vending machines.",approachInvite:"Um... excuse me. I noticed you walking alone. Would you... walk with me a little? I get nervous by myself.",walkAccept:"Really? Okay... I'll stay close. Just tap Chat anytime you want to talk.",partWayLine:"Oh... okay. I'll find a quiet bench. Thank you for walking with me.",emoji:"📖",shirtColor:15788280,backpackColor:8413376,hairColor:2760752,startT:.07,defaultExpression:"shy",routine:"sit",social:{befriend:{expression:"shy",text:"Friends...? I'd like that. Maybe we could swap book recommendations sometime."},argue:{expression:"surprised",text:"Oh... I didn't mean to upset you. Not everyone loves quiet poetry, I suppose."},flirt:{expression:"shy",text:"W-what?! My face is burning. You're... very bold. I don't know what to say."}},firstMeet:{greeting:{expression:"shy",text:"Oh—! S-sorry, I was lost in a poem. I didn't notice you there at all."},choices:[{label:'"What are you reading?"',response:{expression:"happy",text:'A book of haiku about quiet streets. This one goes: "Vending machine glow / humming in the afternoon / nobody hurries."'}},{label:'"This town feels peaceful."',response:{expression:"thinking",text:"It is... like the world forgot to be loud here. I come every day so I don't forget that feeling."},reward:{type:"journal",title:"Yuki's Haiku",body:'"Vending machine glow / humming in the afternoon / nobody hurries."'}},{label:'"Want to walk together?"',response:{expression:"shy",text:"I'd love that... when you're ready, tap Walk together. I know a quiet spot by the garden."},reward:{type:"friendship"}},{label:'"I should let you read."',response:{expression:"shy",text:"No, it's okay... talking is nice too. Maybe we'll see each other again."},end:!0}]},revisit:{greeting:{expression:"happy",text:"You again. I was just thinking about our last conversation... I mean—not in a weird way!"},choices:[{label:'"Got any new poems?"',response:{expression:"thinking",text:'I wrote one about the shrine steps: "Stone worn smooth by time / even footsteps whisper here / cherry petals fall."'},reward:{type:"journal",title:"Shrine Steps Poem",body:'"Stone worn smooth by time / even footsteps whisper here / cherry petals fall."'}},{label:'"Want to explore together?"',response:{expression:"shy",text:"I... I'd like that. Tap Walk together whenever you want me beside you—don't go too fast, okay?"},reward:{type:"friendship"}},{label:'"See you, Yuki."',response:{expression:"happy",text:"See you... I'll save a poem for you."},end:!0}]},companionTalk:{greeting:{expression:"happy",text:"Still here... I'm glad. The street feels less scary with someone beside me."},choices:[{label:`"Let's keep exploring."`,response:{expression:"shy",text:"Okay... lead the way. I'll stay right behind you."},end:!0},{label:'"I need to walk alone for a bit."',response:{expression:"shy",text:"I understand. I'll go back to my book. Maybe we'll meet again on the street."},reward:{type:"dismissCompanion"},end:!0}]}},{id:"ren",name:"Ren Okada",nameJa:"岡田 蓮",characterModel:"character_male_a",personality:"Energetic runner",tagline:"Training on the street every single day.",approachInvite:"Hey, you! Yeah you! Walk with me—I'll show you the best curve on the whole street!",walkAccept:"Alright, let's go! Try to keep up... kidding. I'll match your pace.",partWayLine:"No worries! Catch you on the next lap—I'll be stretching by the torii.",emoji:"🏃",shirtColor:15224912,backpackColor:15777856,hairColor:1710618,startT:.2,defaultExpression:"happy",routine:"jog",patrolTs:[.16,.24,.2],social:{befriend:{expression:"happy",text:"Friend request accepted! You're officially on Team Ren now. Let's hit the street!"},argue:{expression:"surprised",text:"Whoa, feisty! I respect someone who pushes back. Rematch on the torii curve?"},flirt:{expression:"happy",text:"Ha! Smooth. I'll pretend I didn't hear that... but I'm definitely grinning."}},firstMeet:{greeting:{expression:"happy",text:"Yo! New face on Sakura Street — love it! I was just about to sprint to the shrine and back."},choices:[{label:'"You run here every day?"',response:{expression:"happy",text:"Rain or shine! This road has the perfect curve by the torii gate. My legs know every crack in the pavement."}},{label:'"Think I could keep up?"',response:{expression:"surprised",text:"Ha! I like your energy. Here—feel this rush. Hold Shift and run the whole curve. The town opens up when you move fast."},reward:{type:"speedBoost",amount:1.8,duration:15,message:"⚡ Ren's runner's high! Sprint speed boosted."}},{label:'"Walk with me to the shrine?"',response:{expression:"happy",text:"YES! Tap Walk together and I'll jog beside you—well, walk-jog. Let's make this street ours!"},reward:{type:"friendship"}},{label:'"Good luck with your run."',response:{expression:"happy",text:"Thanks! If you change your mind, I'll be doing laps all afternoon!"},end:!0}]},revisit:{greeting:{expression:"surprised",text:"Back already? Either you love this street or you love talking to me. Either way—I'm flattered!"},choices:[{label:'"Race me to the shrine!"',response:{expression:"happy",text:"YOU'RE ON! Three... two... GO! Just kidding—I'll give you a head start. Feel that burn in your legs!"},reward:{type:"speedBoost",amount:2.2,duration:10,message:"🔥 Adrenaline rush! Max sprint unlocked."}},{label:'"Any tips for a beginner?"',response:{expression:"thinking",text:"Breathe through your nose, land on your midfoot, and never skip the stretch by the bench. Also—enjoy the view. Speed means nothing if you miss the town."}},{label:'"Catch you later, Ren."',response:{expression:"happy",text:"Later! Keep those legs moving!"},end:!0}]},companionTalk:{greeting:{expression:"happy",text:"This is great! Every step feels like a warm-up lap. Where to next, coach?"},choices:[{label:`"Let's keep going!"`,response:{expression:"happy",text:"Love the energy! I'll match your pace—just say the word if you want to sprint."},end:!0},{label:'"I want to walk solo for a while."',response:{expression:"happy",text:"All good! Solo runs build character too. Holler if you want a training buddy again."},reward:{type:"dismissCompanion"},end:!0}]}},{id:"haruko",name:"Haruko Sato",nameJa:"佐藤 春子",characterModel:"character_female_c",personality:"Wise neighbor",tagline:"Forty years on this street. Knows every story.",approachInvite:"Oh, dear—wait! Would you like this old woman to walk with you? Every corner here has a story.",walkAccept:"How lovely. I'll stroll right beside you. Point at anything—you ask, I'll tell you about it.",partWayLine:"Of course, dear. Every walk has its season. I'll be on my porch if you need a story.",emoji:"🌸",shirtColor:15259848,backpackColor:6332512,hairColor:6316128,startT:.62,defaultExpression:"happy",routine:"work",social:{befriend:{expression:"happy",text:"How lovely, dear. Friendship is the oldest kind of magic on any street."},argue:{expression:"thinking",text:"Even disagreeing can be honest. I appreciate your spirit, dear—don't hold back."},flirt:{expression:"surprised",text:"Oh my... at my age? You're a charmer. I'll pretend not to notice—but I noticed."}},firstMeet:{greeting:{expression:"happy",text:"Well hello, dear. You have that look—like someone seeing this street for the very first time."},choices:[{label:'"How long have you lived here?"',response:{expression:"thinking",text:"Forty years. This was all rice fields when I was a girl. Now there's vending machines and cherry trees. Time paints in colors you don't expect."},reward:{type:"journal",title:"Haruko's Memory",body:"Sakura Street was once rice fields. The cherry tree by the garden was planted when her daughter was born."}},{label:`"What's the best spot in town?"`,response:{expression:"happy",text:"The shrine steps, without question. Stand there at dusk. The light turns everything gold, and for a moment the whole world feels gentle."},reward:{type:"waypoint",location:"Shrine Steps",message:"Haruko pointed you toward the shrine steps at dusk."}},{label:'"Will you show me around?"',response:{expression:"happy",text:"Nothing would make me happier, dear. Tap Walk together and I'll stroll every step with you."},reward:{type:"friendship"}},{label:'"Thank you, Haruko."',response:{expression:"happy",text:"Come back anytime, dear. A town is only alive when people walk through it with open hearts."},end:!0}]},revisit:{greeting:{expression:"happy",text:"Welcome back, dear. I was just watching the clouds drift over the mountains. They look like old friends visiting."},choices:[{label:'"Tell me another story."',response:{expression:"thinking",text:"On rainy days, children used to huddle under the vending machine awning sharing sodas. That awning kept more than rain out—it kept loneliness out too."},reward:{type:"journal",title:"Rainy Day Awning",body:"Children gathered under the vending machine awning on rainy days, sharing sodas and stories."}},{label:'"The town feels different today."',response:{expression:"happy",text:"It's the same street—but you're different now. That's the secret. The town reflects whoever is walking through it."}},{label:'"Goodbye for now."',response:{expression:"happy",text:"Take care, dear. The street will be here when you return."},end:!0}]},companionTalk:{greeting:{expression:"happy",text:"What a lovely stroll this is, dear. The town looks different when you share it with someone."},choices:[{label:'"Tell me more as we walk."',response:{expression:"thinking",text:"Listen to the wind in the trees—that sound hasn't changed in forty years. Some things stay gentle on purpose."},end:!0},{label:`"I'd like to walk alone now."`,response:{expression:"happy",text:"Take your time, dear. Solitude is its own kind of companion. I'll be right here when you return."},reward:{type:"dismissCompanion"},end:!0}]}},{id:"mio",name:"Mio Ichikawa",nameJa:"市川 美央",characterModel:"character_female_a",personality:"Curious artist",tagline:"Sketching everything ordinary until it looks magical.",approachInvite:"Wait, wait! Before you go—walk with me? The light down the road is gorgeous right now!",walkAccept:"Perfect! I'll walk ahead and point out beautiful things. You just follow.",partWayLine:"No problem! I'll sketch the harbor light from here. Find me if you see something beautiful.",emoji:"🎨",shirtColor:13166832,backpackColor:15761568,hairColor:4861984,startT:.74,defaultExpression:"thinking",routine:"work",social:{befriend:{expression:"happy",text:"Friends! Now I have someone to point at beautiful things with. This is the best commission ever."},argue:{expression:"thinking",text:"Conflict is just contrasting colors. Bold choice—I respect it. Want to argue about art?"},flirt:{expression:"shy",text:"You're... kind of compositionally perfect. Don't make me blush while I'm holding a pencil."}},firstMeet:{greeting:{expression:"surprised",text:"Wait—hold still! The light just hit your shoulder perfectly. ...Sorry, artist reflex. Hi, I'm Mio!"},choices:[{label:'"What are you drawing?"',response:{expression:"thinking",text:"Everything everyone ignores. Vending machines, power lines, that orange cat on the wall. Ordinary things are secretly beautiful if you stare long enough."}},{label:`"Where's the best view?"`,response:{expression:"happy",text:"Torii gate curve at sunset. The cat on the wall near the bench. And the vending machine row when it rains—colors bleed into the wet pavement like watercolor."},reward:{type:"journal",title:"Mio's Sketch Spots",body:"Best views: torii curve at sunset, the orange cat on the wall, vending machines in the rain."}},{label:'"Walk with me and point out art?"',response:{expression:"happy",text:"That's literally my dream request! Tap Walk together and I'll whisper every beautiful thing I see."},reward:{type:"friendship"}},{label:'"Sorry to interrupt your art."',response:{expression:"happy",text:"Never apologize for that! Interruptions are just life adding itself to the composition."},end:!0}]},revisit:{greeting:{expression:"happy",text:"Perfect timing—I just finished a sketch of the power lines! They look like music notation if you squint."},choices:[{label:'"Can I see your sketchbook?"',response:{expression:"shy",text:"It's messy... pages of cats, mailboxes, one terrible traffic cone, and a self-portrait where I drew my nose too big. But... here."},reward:{type:"friendship",npc:"mio"}},{label:'"Teach me to see like you do."',response:{expression:"thinking",text:"Close your eyes. Open them slowly. Pick ONE color and hunt for it everywhere. The town rhymes with itself—you just have to listen with your eyes."},reward:{type:"waypoint",location:"Artist's Eye",message:"Mio taught you to see the town through an artist's eyes."}},{label:'"Keep creating, Mio."',response:{expression:"happy",text:"Always! Tell me if you find something worth a hundred sketches."},end:!0}]},companionTalk:{greeting:{expression:"happy",text:"Look—the light on that roof! Sorry, artist brain. I'm really glad we're walking together."},choices:[{label:'"Point out more beautiful things!"',response:{expression:"thinking",text:"See that crack in the sidewalk? It's shaped like a river. The town is full of hidden compositions."},end:!0},{label:'"I need some alone time to look around."',response:{expression:"happy",text:"Totally fair. Art needs space to breathe. I'll wander off and draw something quiet."},reward:{type:"dismissCompanion"},end:!0}]}}],cv={neutral:"😐",happy:"😊",surprised:"😮",thinking:"🤔",shy:"😳"},hv=[{id:"kenji",name:"Kenji Yamada",nameJa:"山田 健二",characterModel:"character_male_b",personality:"Baker",tagline:"Runs the morning market bread stall.",approachInvite:"Heading out? Perfect — I'm about to make my delivery rounds. Walk with me?",walkAccept:"Great! I'll tell you which shops get the best bread.",partWayLine:"Alright, I'll finish the rounds myself. Stop by the stall tomorrow!",emoji:"🍞",shirtColor:15786184,backpackColor:8413248,hairColor:3811872,startT:.54,defaultExpression:"happy",routine:"work",social:{befriend:{expression:"happy",text:"A fellow bread appreciator! Come by the stall early — I save the best batch for friends."}},firstMeet:{greeting:{expression:"happy",text:"Morning! Just pulled these melon pan from the oven. The whole market smells like butter and sunshine."},choices:[{label:'"Smells amazing!"',response:{expression:"happy",text:"You have good taste! A warm melon pan and a slow morning walk — that's the secret to a good day."},end:!0},{label:`"What's popular today?"`,response:{expression:"thinking",text:"Anko buns and curry bread. The fishermen buy half my stock before I finish setup."}},{label:'"Walk with me a bit?"',response:{expression:"happy",text:"I'd love that — I'm doing delivery rounds anyway. Come on!"},reward:{type:"friendship"},end:!0}]},revisit:{greeting:{expression:"happy",text:"Back for more? I saved a warm one just in case."},choices:[{label:`"How's business?"`,response:{expression:"happy",text:"Steady! A town feeds itself when people stop to talk between errands."},end:!0},{label:'"Tell me about the market."',response:{expression:"thinking",text:"It's been here fifty years. Old Mrs. Nakamura used to sell pickles at the corner — her recipe is still a secret."}},{label:'"Walk with me again?"',response:{expression:"happy",text:"Always! Deliveries are more fun with company."},reward:{type:"friendship"},end:!0}]},companionTalk:{greeting:{expression:"happy",text:"See that bakery smell drifting down the alley? That's Ito-san's place — we're friendly rivals."},choices:[{label:'"Who makes better bread?"',response:{expression:"happy",text:"Me, obviously. But his croissants are... acceptable. Don't tell him I said that."},end:!0},{label:'"I should head on alone."',response:{expression:"happy",text:"Of course! Come by the stall whenever. Free sample waiting for you."},reward:{type:"dismissCompanion"},end:!0}]}},{id:"sora",name:"Sora Mizuki",nameJa:"水樹 空",characterModel:"character_male_c",personality:"Fishmonger",tagline:"Sorting the morning catch at the harbor.",approachInvite:"Heading toward the water? I'm done here — I'll walk that way too.",walkAccept:"Good. The harbor path is best in the morning quiet.",partWayLine:"I'll take it from here. Come back when the boats return.",emoji:"🐟",shirtColor:13691120,backpackColor:4219008,hairColor:2764864,startT:.96,defaultExpression:"neutral",routine:"work",social:{befriend:{expression:"happy",text:"Hm. You're alright. Come back when the big catch comes in — I'll save you something."}},firstMeet:{greeting:{expression:"neutral",text:"Careful of the wet stones — fresh mackerel just came in. Glistening like silver coins."},choices:[{label:'"Caught locally?"',response:{expression:"happy",text:"Right off the pier this morning. This harbor keeps the whole town fed."}},{label:'"Beautiful view here."',response:{expression:"thinking",text:"I never get tired of it. The mountains, the water, the quiet after the boats leave."}},{label:'"Walk to the pier with me?"',response:{expression:"neutral",text:"Sure. I was heading back anyway."},reward:{type:"friendship"},end:!0}]},revisit:{greeting:{expression:"happy",text:"Good timing — still plenty of catch left."},choices:[{label:'"Busy day?"',response:{expression:"neutral",text:"The usual. Ren runs past, Haruko tells stories, the cat steals a nap on crate three."},end:!0},{label:'"Walk with me?"',response:{expression:"neutral",text:"Alright. Not much more to do here."},reward:{type:"friendship"},end:!0}]},companionTalk:{greeting:{expression:"neutral",text:"When the fog rolls in you can't see the mountains. But you can hear the harbor bells. That's enough."},choices:[{label:'"Tell me more about the harbor."',response:{expression:"thinking",text:"My grandfather built the first dock here. Three boats, two nets, and a lot of stubbornness."},end:!0},{label:`"I'll go on ahead."`,response:{expression:"neutral",text:"Right. Come back when the big fish are running."},reward:{type:"dismissCompanion"},end:!0}]}},{id:"emi",name:"Emi Okamoto",nameJa:"岡本 恵美",characterModel:"character_female_a",personality:"Playful kid",tagline:"Chasing pigeons near the park.",approachInvite:"Hey hey! I know every secret spot in this park! Want me to show you?",walkAccept:"Yes! Follow me! There's a cat behind the big tree and a pigeon who eats from your hand!",partWayLine:"Okay! I'll be near the swings. Come back and play!",emoji:"🎈",shirtColor:16304344,backpackColor:15786048,hairColor:1708048,startT:.8,defaultExpression:"happy",routine:"patrol",patrolTs:[.78,.82,.8],social:{befriend:{expression:"happy",text:"We're friends now! That means you get to see ALL the secret spots, including the one with three cats!"}},firstMeet:{greeting:{expression:"surprised",text:"Whoa! You're tall. Are you exploring? I know every bench and every cat in this park!"},choices:[{label:'"Show me around!"',response:{expression:"happy",text:"Okay! The orange cat lives by the big tree. The pigeons hang out by the gazebo. Walk with me!"},reward:{type:"friendship"},end:!0},{label:'"Having fun?"',response:{expression:"happy",text:"The best! Mom says I can play until the streetlights come on."},end:!0},{label:'"Which way to the shrine?"',response:{expression:"happy",text:"I'll show you! Follow me — I run there all the time!"},reward:{type:"friendship"},end:!0}]},revisit:{greeting:{expression:"happy",text:"Tag! You're it! ...Just kidding. Unless you want to be."},choices:[{label:'"Want to walk together?"',response:{expression:"happy",text:"Sure! I know a new spot where the sparrows eat bread crumbs!"},reward:{type:"friendship"},end:!0},{label:'"Catch you later!"',response:{expression:"happy",text:"Byeee! I'll be near the swings!"},end:!0}]},companionTalk:{greeting:{expression:"happy",text:"See that fat pigeon? His name is Mochi. I named him. He doesn't know that yet."},choices:[{label:'"What else have you named?"',response:{expression:"happy",text:"The orange cat is Tangerine, the big crow is Shogun, and the bench near the tree is Dave."},end:!0},{label:`"I'll explore by myself now."`,response:{expression:"happy",text:"Okay! Byeee! Find the three-cat bench — it's near the garden!"},reward:{type:"dismissCompanion"},end:!0}]}},{id:"jiro",name:"Jiro Sato",nameJa:"佐藤 次郎",characterModel:"character_male_c",personality:"Retired neighbor",tagline:"Watching the street from his bench.",approachInvite:"I was just thinking about getting up and walking to the shrine. Been a while. Care to join an old man?",walkAccept:"Ha! Good. Slow steps, slow talk. That's how you learn a place.",partWayLine:"My knees say that's enough for today. You go on — the town rewards the curious.",emoji:"🪑",shirtColor:14209216,backpackColor:5263440,hairColor:9474192,startT:.4,defaultExpression:"thinking",routine:"sit",social:{befriend:{expression:"happy",text:"Good. Friends are made slowly here. That's what makes them last."}},firstMeet:{greeting:{expression:"thinking",text:"Mm. Sit a moment, young one. I've watched this street change for sixty years. The vending machines were the big revolution."},choices:[{label:'"What was it like before?"',response:{expression:"thinking",text:"Quieter. More bicycles. Mrs. Tanaka — Haruko's mother — planted that cherry tree by the garden."}},{label:'"Walk with me to the shrine?"',response:{expression:"happy",text:"Ha! You talk me into it. Lead the way — my knees need the practice."},reward:{type:"friendship"},end:!0},{label:'"Enjoy your rest."',response:{expression:"happy",text:"Wise words. A bench is a fine place to understand a town."},end:!0}]},revisit:{greeting:{expression:"happy",text:"Ah, my regular visitor. The street looks different every time, doesn't it?"},choices:[{label:'"Any news today?"',response:{expression:"thinking",text:"Mio drew the torii again. Kenji sold out of anko buns by nine. A good day."},end:!0},{label:'"Walk with me again?"',response:{expression:"happy",text:"Alright, alright — you've convinced me. Slow and steady."},reward:{type:"friendship"},end:!0}]},companionTalk:{greeting:{expression:"thinking",text:"You know, I used to chase cats down this very lane as a boy. Different cats, same lane."},choices:[{label:'"Tell me more."',response:{expression:"happy",text:"There was one cat — huge, orange — sat on that wall for twelve years. Same spot, every morning. Reliable as the sunrise."},end:!0},{label:`"I'll head on alone."`,response:{expression:"happy",text:"Good. The street is best walked alone sometimes. I'll be at the bench."},reward:{type:"dismissCompanion"},end:!0}]}},{id:"yoko",name:"Yoko Ishida",nameJa:"石田 陽子",characterModel:"character_female_b",personality:"Florist",tagline:"Tending the flower shop on cafe row.",approachInvite:"I'm just closing up for a tea break. I'd love some company on the way to the park!",walkAccept:"Wonderful! I know where the best wildflowers grow along the path.",partWayLine:"I'll stop here and sketch the wild cosmos. Come back and see the shop anytime!",emoji:"🌻",shirtColor:15790296,backpackColor:14712976,hairColor:4861984,startT:.5,defaultExpression:"happy",routine:"work",social:{befriend:{expression:"happy",text:"A flower friend! Come by when the dahlias bloom — I'll make a little arrangement just for you."}},firstMeet:{greeting:{expression:"happy",text:"Welcome to Hana no Ie! These cosmos just arrived — look how they lean toward the light."},choices:[{label:'"Your shop is lovely."',response:{expression:"happy",text:"Flowers teach patience. You water, you wait, and one morning the whole window blooms."}},{label:'"What sells best?"',response:{expression:"thinking",text:"Cherry blossom sprigs in spring. Sunflowers in summer. Haruko buys something every week."}},{label:'"Walk with me a bit?"',response:{expression:"happy",text:"I was hoping for an excuse to step out! The park light is beautiful right now."},reward:{type:"friendship"},end:!0}]},revisit:{greeting:{expression:"happy",text:"Perfect timing — I was just trimming the display."},choices:[{label:'"They look beautiful."',response:{expression:"shy",text:"Thank you... I talk to them sometimes. It helps."},end:!0},{label:'"Walk with me?"',response:{expression:"happy",text:"Yes! The back path behind the shrine has wild cosmos this time of year."},reward:{type:"friendship"},end:!0}]},companionTalk:{greeting:{expression:"happy",text:"See those little white flowers in the wall cracks? Hakonechloa. They grow wherever they want — I admire that."},choices:[{label:'"Do you know all the flowers here?"',response:{expression:"happy",text:"Most of them! The old magnolia by the shrine gate was planted sixty years ago. Jiro was there for the planting."},end:!0},{label:`"I'll wander alone for a bit."`,response:{expression:"happy",text:"Of course! Come back to the shop — I'll have tea ready."},reward:{type:"dismissCompanion"},end:!0}]}},{id:"hana",name:"Hana Ito",nameJa:"伊藤 花",characterModel:"character_female_a",personality:"Baker",tagline:"Runs the bakery on Shopping Lane.",approachInvite:"Fresh bread just came out! Want to walk and eat while it's warm?",walkAccept:"Perfect — the lane smells like butter right now.",partWayLine:"Back to the oven! Save me a melon pan next time.",emoji:"🍞",shirtColor:15786184,backpackColor:8413248,hairColor:3811872,pathId:"shopping",startT:.12,defaultExpression:"happy",routine:"work",social:{befriend:{expression:"happy",text:"You appreciate good bread! I'll save the best batch for you."}},firstMeet:{greeting:{expression:"happy",text:"Welcome to Komugi Bakery! The melon pan is still warm — smell that?"},choices:[{label:'"Smells incredible!"',response:{expression:"happy",text:"The secret is butter and patience. Come early before the fishermen buy everything."},end:!0},{label:'"Walk with me?"',response:{expression:"happy",text:"I'd love a break! Let me grab a bag."},reward:{type:"friendship"},end:!0}]},revisit:{greeting:{expression:"happy",text:"Back for more? Anpan just came out of the oven."},choices:[{label:`"How's business?"`,response:{expression:"happy",text:"The shopping lane brings good foot traffic. Even the cats wait outside."},end:!0},{label:'"Walk together?"',response:{expression:"happy",text:"Always! Walking helps the dough rise in my mind."},reward:{type:"friendship"},end:!0}]},companionTalk:{greeting:{expression:"happy",text:"This lane used to be just grass. Now look — four shops and a bicycle."},choices:[{label:'"Best bread in town?"',response:{expression:"happy",text:"Obviously! Kenji at the market agrees. We're friendly rivals."},end:!0},{label:`"I'll head on alone."`,response:{expression:"happy",text:"Take a melon pan for the road!"},reward:{type:"dismissCompanion"},end:!0}]}},{id:"umi",name:"Umi Tanaka",nameJa:"田中 海",characterModel:"character_male_b",personality:"Fisherman",tagline:"Casts lines from the riverside bridge.",approachInvite:"The river's calm today. Walk the bank with me?",walkAccept:"Good — I'll show you where the big trout hide.",partWayLine:"Tide's turning. I'll stay here and cast a few more.",emoji:"🎣",shirtColor:13691120,backpackColor:4219008,hairColor:2764864,pathId:"riverside",startT:.15,defaultExpression:"neutral",routine:"work",social:{befriend:{expression:"happy",text:"You understand the river. Come back at dawn — that's when the magic happens."}},firstMeet:{greeting:{expression:"neutral",text:"Quiet spot, isn't it? The bridge creaks when the wind picks up. I like that sound."},choices:[{label:'"Catch anything?"',response:{expression:"happy",text:"A few trout this morning. The river feeds the harbor — everything's connected."}},{label:'"Walk the bank?"',response:{expression:"neutral",text:"Sure. The reeds are thick on the south bend."},reward:{type:"friendship"},end:!0}]},revisit:{greeting:{expression:"happy",text:"The herons are out today. Three of them near the second bridge."},choices:[{label:'"Beautiful river."',response:{expression:"thinking",text:"It winds like it has somewhere to be. I respect that."},end:!0},{label:'"Walk together?"',response:{expression:"happy",text:"Lead the way. I'll point out the lily pads."},reward:{type:"friendship"},end:!0}]},companionTalk:{greeting:{expression:"neutral",text:"See those stepping stones? Kids use them in summer. I used to, too."},choices:[{label:'"How deep is the river?"',response:{expression:"thinking",text:"Waist-deep in the middle. The banks are shallow — safe for wading."},end:!0},{label:`"I'll fish alone."`,response:{expression:"happy",text:"Enjoy the quiet. That's the best part."},reward:{type:"dismissCompanion"},end:!0}]}},{id:"ako",name:"Ako Fujita",nameJa:"藤田 亜子",characterModel:"character_female_c",personality:"Painter",tagline:"Sketches the grove in watercolor.",approachInvite:"The light in the grove is perfect right now. Sit with me?",walkAccept:"Wonderful. I'll bring my sketchbook.",partWayLine:"The shadows shifted — I need to capture this angle. See you in the grove.",emoji:"🎨",shirtColor:15257840,backpackColor:8413344,hairColor:2759216,pathId:"grove",startT:.5,defaultExpression:"shy",routine:"sit",social:{befriend:{expression:"happy",text:"You see the world the way I do. I'll paint something for you someday."}},firstMeet:{greeting:{expression:"shy",text:"Oh — I didn't hear you approach. I was watching the light through the cherry branches."},choices:[{label:'"What are you painting?"',response:{expression:"happy",text:"The picnic blanket and mushrooms. This grove changes every hour — never the same green twice."}},{label:'"Sit together?"',response:{expression:"shy",text:"I'd like that. The bench has the best view of the trees."},reward:{type:"friendship"},end:!0}]},revisit:{greeting:{expression:"happy",text:"You're back! The mushrooms grew since yesterday — little red caps everywhere."},choices:[{label:'"Your art is lovely."',response:{expression:"shy",text:"Thank you... I paint for myself, mostly. But it's nice when someone notices."},end:!0},{label:'"Walk with me?"',response:{expression:"happy",text:"Let me pack my brushes. The lane has good light too."},reward:{type:"friendship"},end:!0}]},companionTalk:{greeting:{expression:"happy",text:"The cherry trees here were planted by the old shopkeepers. Each one has a story."},choices:[{label:'"Tell me one."',response:{expression:"happy",text:"The tallest one? Yoko's grandmother planted it when the shop opened. It's eighty years old now."},end:!0},{label:`"I'll explore alone."`,response:{expression:"shy",text:"Take your time. The grove isn't going anywhere."},reward:{type:"dismissCompanion"},end:!0}]}},{id:"runa",name:"Runa Hayashi",nameJa:"林 瑠奈",characterModel:"character_female_b",personality:"Jogger",tagline:"Runs the riverside path every morning.",approachInvite:"I'm doing another lap of the river path. Join me?",walkAccept:"Great pace! The bridge to bridge loop is my favorite.",partWayLine:"Good run! I'll cool down by the water.",emoji:"🏃",shirtColor:15790320,backpackColor:4227264,hairColor:1710634,pathId:"riverside",startT:.3,defaultExpression:"happy",routine:"jog",patrolTs:[.1,.5,.85,.5],social:{befriend:{expression:"happy",text:"A running buddy! Meet me at the first bridge at sunrise."}},firstMeet:{greeting:{expression:"happy",text:"Morning! Well — anytime morning. I run this path four times a day."},choices:[{label:'"How far is the loop?"',response:{expression:"happy",text:"Bridge to bridge and back — about a kilometer. The gravel path is easy on the knees."}},{label:'"Run with me?"',response:{expression:"happy",text:"Let's go! Start at the bridge — I'll set the pace."},reward:{type:"friendship"},end:!0}]},revisit:{greeting:{expression:"happy",text:"Perfect timing — I was about to start another lap!"},choices:[{label:'"You run a lot!"',response:{expression:"happy",text:"The river air is the best in town. Better than the main road, anyway."},end:!0},{label:'"Run together?"',response:{expression:"happy",text:"Race you to the second bridge!"},reward:{type:"friendship"},end:!0}]},companionTalk:{greeting:{expression:"happy",text:"See how the path follows the river? Someone planned this well. Best addition to the town in years."},choices:[{label:'"Favorite spot?"',response:{expression:"happy",text:"The stepping stones near the first bridge. I hop across them every time."},end:!0},{label:`"I'll walk, not run."`,response:{expression:"happy",text:"Fair enough! Catch you at the bridge."},reward:{type:"dismissCompanion"},end:!0}]}}],dv={befriend:{label:"💛 Make friends",className:"social-befriend",mood:8,moodLabel:"New friend!"},argue:{label:"💢 Argue",className:"social-argue",mood:-6},flirt:{label:"💕 Flirt",className:"social-flirt",mood:10,moodLabel:"Bold move!"}};class uv{constructor(e){var t,n,i,r,a,o,l,c,h,d;this.box=e.box,this.approachModal=e.approachModal,this.approachPortrait=e.approachPortrait,this.approachName=e.approachName,this.approachPersonality=e.approachPersonality,this.approachTagline=e.approachTagline,this.approachChatBtn=e.approachChatBtn,this.approachWalkBtn=e.approachWalkBtn,this.approachPartBtn=e.approachPartBtn,this.approachIgnoreBtn=e.approachIgnoreBtn,this.companionTag=e.companionTag,this.companionLabel=e.companionLabel,this.companionPartBtn=e.companionPartBtn,this.nameEl=e.name,this.personalityEl=e.personality,this.textEl=e.text,this.expressionEl=e.expression,this.portraitEl=e.portrait,this.nextBtn=e.next,this.choicesEl=e.choices,this.dialogueWalkBtn=e.dialogueWalkBtn,this.dialogueStopWalkBtn=e.dialogueStopWalkBtn,this.toastEl=e.toast,this.journalPanel=e.journalPanel,this.journalList=e.journalList,this.journalBtn=e.journalBtn,this.closeJournalBtn=e.closeJournalBtn,this.interactHint=e.interactHint,this.continueHint=e.continueHint,this.active=!1,this.hintItem=null,this.onHintClick=null,this.approachOpen=!1,this.approachInitiated=!1,this.npc=null,this.conversation=null,this.phase="greeting",this.pendingChoices=!1,this.journal=[],this.nextBtn.addEventListener("click",()=>this.advance()),(t=this.approachChatBtn)==null||t.addEventListener("click",()=>this._onChatClicked()),(n=this.approachWalkBtn)==null||n.addEventListener("click",()=>this._onWalkClicked()),(i=this.approachPartBtn)==null||i.addEventListener("click",()=>this._onPartClicked()),(r=this.approachIgnoreBtn)==null||r.addEventListener("click",()=>this._onIgnoreClicked()),(a=this.companionPartBtn)==null||a.addEventListener("click",()=>this._onCompanionPartClicked()),(o=this.dialogueWalkBtn)==null||o.addEventListener("click",()=>this._onDialogueWalkClicked()),(l=this.dialogueStopWalkBtn)==null||l.addEventListener("click",()=>this._onDialogueStopWalkClicked()),(c=this.journalBtn)==null||c.addEventListener("click",()=>{var u;return(u=this.journalPanel)==null?void 0:u.classList.remove("hidden")}),(h=this.closeJournalBtn)==null||h.addEventListener("click",()=>{var u;return(u=this.journalPanel)==null?void 0:u.classList.add("hidden")}),(d=this.interactHint)==null||d.addEventListener("click",()=>{var u;(u=this.onHintClick)==null||u.call(this)})}setRewardHandler(e){this._rewardHandler=e}setGame(e){this.game=e}isOpen(){return this.active}isBlocking(){return this.active||this.approachOpen}showInteractHint(e){var n,i;if(!this.interactHint||!e||this.isBlocking()){this.hideInteractHint();return}this.hintItem=e;let t="<kbd>E</kbd> Interact";if(e.type==="npc")t=`<kbd>E</kbd> Interact? with ${((n=e.profile)==null?void 0:n.nameJa)||((i=e.profile)==null?void 0:i.name)||"Someone"}`;else if(e.type==="animal"){const r=e.definition;t=`<kbd>E</kbd> ${r.emoji} Meet ${r.nameJa||r.name}`}else if(e.type==="prop"){const r=e.definition;r.shopId?t=`<kbd>E</kbd> 🏪 ${r.label}`:r.id==="shrine"?t="<kbd>E</kbd> ⛩️ Pray at Shrine":r.id==="bench"?t="<kbd>E</kbd> 🪑 Rest on Bench":r.id==="cherry_tree"?t="<kbd>E</kbd> 🌸 Admire Cherry Tree":r.id==="shrine_tree"&&(t="<kbd>E</kbd> 🌿 Listen to the Wind")}this.interactHint.innerHTML=t,this.interactHint.classList.remove("hidden")}hideInteractHint(){var e;this.hintItem=null,(e=this.interactHint)==null||e.classList.add("hidden")}setCompanionTag(e){this.companionTag&&(e?(this.companionLabel?this.companionLabel.textContent=`${e.profile.emoji} Walking with ${e.profile.nameJa}`:this.companionTag.textContent=`${e.profile.emoji} Walking with ${e.profile.nameJa}`,this.companionTag.classList.remove("hidden")):this.companionTag.classList.add("hidden"))}_canWalk(e){var t;return!e||e.isCompanion?!1:!!((t=e.profile)!=null&&t.approachInvite)}_updateDialogueWalkButtons(){var n,i;const e=this.npc,t=e==null?void 0:e.isCompanion;(n=this.dialogueWalkBtn)==null||n.classList.toggle("hidden",!this.active||t||!this._canWalk(e)),(i=this.dialogueStopWalkBtn)==null||i.classList.toggle("hidden",!this.active||!t)}showApproach(e,t={}){var r,a,o,l;if(this.isBlocking()||!e)return;this.hintItem=null,(r=this.interactHint)==null||r.classList.add("hidden"),this.approachOpen=!0,this.approachInitiated=t.initiated??!1,this.npc=e;const n=e.profile,i=e.isCompanion;this.approachPortrait.textContent=n.emoji,this.approachName.textContent=`${n.nameJa} · ${n.name}`,this.approachPersonality.textContent=n.personality,this.approachTagline.textContent=i?"Your walking companion wants to talk.":this.approachInitiated?n.approachInvite:n.tagline,(a=this.approachWalkBtn)==null||a.classList.toggle("hidden",i||!this._canWalk(e)),(o=this.approachPartBtn)==null||o.classList.toggle("hidden",!i),(l=this.approachIgnoreBtn)==null||l.classList.toggle("hidden",i),this.approachModal.classList.remove("hidden"),i||(e.onApproach(this.approachInitiated),e.stopApproaching())}hideApproach(){var e,t,n;this.approachOpen=!1,this.approachInitiated=!1,this.approachModal.classList.add("hidden"),(e=this.approachWalkBtn)==null||e.classList.remove("hidden"),(t=this.approachPartBtn)==null||t.classList.add("hidden"),(n=this.approachIgnoreBtn)==null||n.classList.remove("hidden"),this.npc&&!this.active&&(this.npc.clearApproachBubbles(),this.npc.isCompanion||(this.npc=null))}_onChatClicked(){const e=this.npc;this.hideApproach(),e&&this.start(e)}_onWalkClicked(){const e=this.npc;this.hideApproach(),e&&(e.markMet(),this._beginCompanion(e))}_onPartClicked(){const e=this.npc;this.hideApproach(),e!=null&&e.isCompanion?this._dismissCompanion(e):e&&this.start(e)}_onCompanionPartClicked(){var e;(e=this.game)!=null&&e.companion&&this._dismissCompanion(this.game.companion)}_onDialogueWalkClicked(){var t;const e=this.npc;!e||e.isCompanion||(t=e.profile)!=null&&t.isAmbient||(this._beginCompanion(e),this._updateDialogueWalkButtons())}_onDialogueStopWalkClicked(){const e=this.npc;e!=null&&e.isCompanion&&(this._dismissCompanion(e),this._updateDialogueWalkButtons())}_beginCompanion(e){var t;(t=this._rewardHandler)==null||t.call(this,{type:"companion",npc:e}),this._showToast(`🚶 ${e.profile.name}: "${e.profile.walkAccept}"`)}_dismissCompanion(e){var t;(t=this._rewardHandler)==null||t.call(this,{type:"dismissCompanion",npc:e}),this._showToast(`👋 ${e.profile.name}: "${e.profile.partWayLine}"`),this.setCompanionTag(null),this._updateDialogueWalkButtons()}_onIgnoreClicked(){this.npc&&(this.npc.ignoreFor(15),this.npc.stopApproaching()),this.hideApproach(),this.npc=null}start(e){var t;this.active=!0,this.npc=e,e.isCompanion&&e.profile.companionTalk?this.conversation=e.profile.companionTalk:this.conversation=e.hasMetBefore()?e.profile.revisit:e.profile.firstMeet,this.phase="greeting",this.pendingChoices=!1,this.box.classList.remove("hidden"),this.box.classList.add("bubble-mode"),this.choicesEl.innerHTML="",this.choicesEl.classList.add("hidden"),this.nextBtn.classList.remove("hidden"),(t=this.continueHint)==null||t.classList.remove("hidden"),this._updateDialogueWalkButtons(),e.startConversation(),e.markMet(),this._showGreeting()}_showGreeting(){this._renderLine(this.conversation.greeting),this.nextBtn.textContent="▶ Continue"}_getSocialChoices(){var t,n;const e=(n=(t=this.npc)==null?void 0:t.profile)==null?void 0:n.social;return e?Object.entries(dv).filter(([i])=>e[i]).map(([i,r])=>({key:i,meta:r,response:e[i]})):[]}_showChoices(){var n;this.phase="choices",this.expressionEl.textContent="💬",this.textEl.textContent="What do you say?",this.npc.showSpeechText("What do you say?"),this.nextBtn.classList.add("hidden"),(n=this.continueHint)==null||n.classList.add("hidden"),this.choicesEl.classList.remove("hidden"),this.choicesEl.innerHTML="";let e=0;const t=(i,r,a)=>{const o=document.createElement("button");o.className=`dialogue-choice${r?` ${r}`:""}`,o.innerHTML=`<span class="choice-num">${e+1}</span>${i}`,o.addEventListener("click",a),this.choicesEl.appendChild(o),e+=1};for(const{key:i,meta:r,response:a}of this._getSocialChoices())t(r.label,r.className,()=>this._pickSocialChoice(i,a,r));this.conversation.choices.forEach((i,r)=>{t(i.label,"",()=>this._pickChoice(r))})}_pickSocialChoice(e,t,n){var i,r,a,o;this.phase="response",this.choicesEl.classList.add("hidden"),this.choicesEl.innerHTML="",this.nextBtn.classList.remove("hidden"),(i=this.continueHint)==null||i.classList.remove("hidden"),this._renderLine(t),this.nextBtn.textContent="▶ Keep talking",e==="befriend"?(this.npc.addFriendship(),this._showToast(`💛 ${this.npc.profile.name} warmed up to you.`)):e==="argue"?this._showToast(`💢 Tension rises with ${this.npc.profile.name}…`):e==="flirt"&&(this.npc.addFriendship(),this._showToast(`💕 ${this.npc.profile.name} seems flustered—in a good way.`)),(r=this.game)!=null&&r.mood&&n.mood&&(n.mood>0?this.game.mood.boost(n.mood,n.moodLabel??""):this.game.mood.drain(-n.mood),(o=(a=this.game)._updateMoodHUD)==null||o.call(a)),this.pendingChoices=!0}_pickChoice(e){var n;const t=this.conversation.choices[e];this.phase="response",this.choicesEl.classList.add("hidden"),this.choicesEl.innerHTML="",this.nextBtn.classList.remove("hidden"),(n=this.continueHint)==null||n.classList.remove("hidden"),this._renderLine(t.response),this.nextBtn.textContent=t.end?"👋 Say goodbye":"▶ Keep talking",t.reward&&this._applyReward(t.reward),this.pendingChoices=!t.end,t.end&&(this.phase="farewell")}_applyReward(e){var t;e.type==="journal"?(this.journal.push({title:e.title,body:e.body,npc:this.npc.profile.name}),this._updateJournalUI(),this._showToast(`📓 Saved to journal: ${e.title}`)):e.type==="speedBoost"?((t=this._rewardHandler)==null||t.call(this,{type:"speedBoost",amount:e.amount,duration:e.duration}),this._showToast(e.message)):e.type==="waypoint"?this._showToast(`📍 ${e.message}`):e.type==="friendship"?(this.npc.addFriendship(),this._showToast(`💛 ${this.npc.profile.name} opened up to you.`)):e.type==="dismissCompanion"&&this._dismissCompanion(this.npc)}_showToast(e){this.toastEl&&(this.toastEl.textContent=e,this.toastEl.classList.remove("hidden"),clearTimeout(this._toastTimer),this._toastTimer=setTimeout(()=>this.toastEl.classList.add("hidden"),4500))}_updateJournalUI(){if(this.journalList){if(this.journalList.innerHTML="",this.journal.length===0){this.journalList.innerHTML='<li class="journal-empty">Talk to townspeople to collect notes.</li>';return}this.journal.forEach(e=>{const t=document.createElement("li");t.innerHTML=`<strong>${e.title}</strong><span>${e.npc}</span><p>${e.body}</p>`,this.journalList.appendChild(t)})}}advance(){this.active&&(this.phase==="greeting"?this._showChoices():this.phase==="response"?this.pendingChoices?this._showChoices():this.close():this.phase==="farewell"&&this.close())}_renderLine(e){const t=this.npc.profile;this.nameEl.textContent=`${t.nameJa} · ${t.name}`,this.personalityEl.textContent=`${t.emoji} ${t.personality}`,this.textEl.textContent=e.text,this.expressionEl.textContent=cv[e.expression]??"😐",this.portraitEl.textContent=t.emoji,this.npc.setExpression(e.expression),this.npc.showSpeechText(e.text),this.continueHint&&(this.continueHint.textContent="▶ Continue")}close(){var e,t,n,i;this.active=!1,this.box.classList.add("hidden"),this.box.classList.remove("bubble-mode"),this.choicesEl.classList.add("hidden"),this.nextBtn.classList.remove("hidden"),this.nextBtn.textContent="▶ Continue",(e=this.continueHint)==null||e.classList.add("hidden"),(t=this.dialogueWalkBtn)==null||t.classList.add("hidden"),(n=this.dialogueStopWalkBtn)==null||n.classList.add("hidden"),this.npc&&(this.npc.hideSpeechBubble(),this.npc.endConversation(),this.npc.isCompanion||(this.npc=null),(i=this.onConversationEnd)==null||i.call(this))}tryAdvanceFromKey(){return!this.active||this.phase==="choices"?!1:(this.advance(),!0)}addJournalEntry(e,t,n){this.journal.push({title:e,body:t,npc:n}),this._updateJournalUI(),this._showToast(`📓 Saved to journal: ${e}`)}showToast(e){this._showToast(e)}}class fv{constructor(){this.raycaster=new Hl}pickFromTap(e,t,n,i){if(!e||!t||!n||!(i!=null&&i.length))return null;const r=n.getBoundingClientRect(),a=new Ce((e.x-r.left)/r.width*2-1,-((e.y-r.top)/r.height)*2+1);this.raycaster.setFromCamera(a,t);const o=this.raycaster.intersectObjects(i,!0);return o.length===0?null:this._interactableFromObject(o[0].object)}_interactableFromObject(e){var n,i;let t=e;for(;t;){if((n=t.userData)!=null&&n.interactable)return t.userData.interactable;if((i=t.userData)!=null&&i.interactNpc)return t.userData.interactNpc;t=t.parent}return null}}class pv{constructor(e,t,n,i,r,a){this.player=e,this.registry=t,this.dialogue=n,this.game=i,this.petUI=r,this.shopUI=a,this.picker=new fv,this.approachRange=9,this.spotRange=20,n.onHintClick=()=>{n.hintItem&&this._interactWithItem(n.hintItem)}}setRewardHandler(e){this.dialogue.setRewardHandler(e)}isBlocking(){var e,t,n;return this.dialogue.isBlocking()||((e=this.petUI)==null?void 0:e.isOpen())||((t=this.shopUI)==null?void 0:t.isOpen())||((n=this.game)==null?void 0:n.outfitOpen)}_interactWithNpc(e){var t,n;return e?((t=e.clearIgnore)==null||t.call(e),(n=e.stopApproaching)==null||n.call(e),this.dialogue.showApproach(e,{initiated:!1}),!0):!1}_interactWithItem(e){var i;if(!e)return!1;const t=this.player.position,n=e.type==="npc"?e.isCompanion?this.approachRange+2:this.spotRange:e.range??this.approachRange;return!((i=e.canInteract)!=null&&i.call(e,t))&&e.distanceTo(t)>n?(this.dialogue._showToast("Move closer to interact."),!1):e.type==="npc"?this._interactWithNpc(e):(e.interact({game:this.game,dialogue:this.dialogue,petUI:this.petUI,shopUI:this.shopUI,player:this.player}),!0)}update(e,t,n){if(this.isBlocking()){this.dialogue.hideInteractHint();return}const i=this.registry.getNpcs(),r=this.game.companion;for(const h of i){if(h.isCompanion)continue;const u=h.distanceTo(this.player.position)<this.approachRange;h.setPlayerNearby(u,this.player.position)}const o=!!this.registry.findNearest(this.player.position,this.approachRange,{types:["npc"]});this.dialogue.approachOpen&&!o&&!this.dialogue.approachInitiated&&this.dialogue.hideApproach();const l=this.registry.findNearest(this.player.position,this.approachRange,{});l?this.dialogue.showInteractHint(l):this.dialogue.hideInteractHint();const c=e.consumeTap();if(c){const h=this.picker.pickFromTap(c,t,n,this.registry.getHitTargets());h&&this._interactWithItem(h)}if(e.consumeKey("KeyE")){let h=null;r?h=r:h=this.registry.findNearest(this.player.position,this.approachRange+2,{includeIgnored:!0}),h?this._interactWithItem(h):this.dialogue._showToast("Nothing nearby to interact with.")}}}const mv={npc:0,animal:1,prop:2};class gv{constructor(){this.items=[]}register(e){e&&this.items.push(e)}registerAll(...e){for(const t of e)Array.isArray(t)?t.forEach(n=>this.register(n)):t&&this.register(t)}getHitTargets(){var t;const e=[];for(const n of this.items){const i=((t=n.getHitTargets)==null?void 0:t.call(n))??[];e.push(...i)}return e}findNearest(e,t,n={}){var c;const{types:i=null,includeIgnored:r=!1}=n;let a=null,o=1/0,l=1/0;for(const h of this.items){if(i&&!i.includes(h.type)||h.type==="npc"&&h.isCompanion||h.type==="npc"&&h.isTalking||h.type==="npc"&&!r&&((c=h.isIgnored)!=null&&c.call(h))||h.type==="animal"&&h.isPetCompanion)continue;const d=h.distanceTo(e);if(d>=t)continue;const u=mv[h.type]??9;(d<o-.5||Math.abs(d-o)<.5&&u<l)&&(a=h,o=d,l=u)}return a}getNpcs(){return this.items.filter(e=>e.type==="npc")}getAnimals(){return this.items.filter(e=>e.type==="animal")}findAllInRange(e,t,n={}){var a;const{includeIgnored:i=!1}=n,r=[];for(const o of this.items){if(o.type==="npc"&&o.isCompanion||o.type==="npc"&&o.isTalking||o.type==="npc"&&!i&&((a=o.isIgnored)!=null&&a.call(o))||o.type==="animal"&&o.isPetCompanion)continue;const l=o.distanceTo(e);l>=t||r.push({item:o,dist:l})}return r.sort((o,l)=>o.dist-l.dist)}}function ii(s,e,t,n,i,r=null,a=1.5){s.fillStyle=i,s.beginPath(),s.arc(e,t,n,0,Math.PI*2),s.fill(),r&&(s.strokeStyle=r,s.lineWidth=a,s.stroke())}function kh(s,e,t,n,i){s.fillStyle=n,s.fillRect(e-2.5,t-1,5,5),s.fillStyle=i??n,s.beginPath(),s.arc(e,t-2.8,2.8,0,Math.PI*2),s.fill()}function Uh(s,e,t,n){s.fillStyle=n,s.beginPath(),s.arc(e,t+1,2.8,0,Math.PI*2),s.fill(),[[-3,-2.5],[0,-4.5],[3,-2.5]].forEach(([i,r])=>{s.beginPath(),s.arc(e+i,t+r,1.5,0,Math.PI*2),s.fill()})}function _v(s,e,t,n,i=4){s.fillStyle=n,s.beginPath(),s.moveTo(e,t-i),s.lineTo(e+i,t),s.lineTo(e,t+i),s.lineTo(e-i,t),s.closePath(),s.fill()}function xv(s,e,t,n,i=4.5){s.fillStyle=n,s.beginPath();for(let r=0;r<8;r++){const a=r/8*Math.PI*2-Math.PI/2,o=r%2===0?i:i*.45,l=e+Math.cos(a)*o,c=t+Math.sin(a)*o;r===0?s.moveTo(l,c):s.lineTo(l,c)}s.closePath(),s.fill()}function yv(s,e,t,n){s.fillStyle=n,s.beginPath(),s.moveTo(e-4.5,t-.5),s.lineTo(e,t-5.5),s.lineTo(e+4.5,t-.5),s.closePath(),s.fill(),s.fillRect(e-3.5,t-.5,7,5.5)}const Nt={npc:"#f09030",animal:"#d060c8",shop:"#f0c030",shrine:"#50d0a0",vending:"#40c8d0",bench:"#a07050",tree:"#c090b0",companion:"#60e8d8",player:"#4a90e8"};function vv(s){var t,n;if(s.type==="npc")return Nt.npc;if(s.type==="animal")return Nt.animal;const e=((t=s.definition)==null?void 0:t.id)??"";return(n=s.definition)!=null&&n.shopId||e.startsWith("shop")?Nt.shop:e==="shrine"?Nt.shrine:e==="vending"?Nt.vending:e==="bench"?Nt.bench:e==="cherry_tree"||e==="shrine_tree"?Nt.tree:Nt.bench}function Mv(s){var e;return s.type==="npc"||s.type==="animal"?s.mesh.position:(e=s.mesh)==null?void 0:e.position}function bv(s,e,t,n,i=10,r=[]){var u;let a=1/0,o=-1/0,l=1/0,c=-1/0;const h=(f,g)=>{f<a&&(a=f),f>o&&(o=f),g<l&&(l=g),g>c&&(c=g)},d=f=>{if(f!=null&&f.getPointAt)for(let g=0;g<=60;g++){const _=f.getPointAt(g/60);h(_.x,_.z)}};d(s);for(const f of r)f!==s&&d(f);for(const f of e)h(f.mesh.position.x,f.mesh.position.z);for(const f of t)h(f.mesh.position.x,f.mesh.position.z);for(const f of n)(u=f.mesh)!=null&&u.position&&h(f.mesh.position.x,f.mesh.position.z);return Number.isFinite(a)?{minX:a-i,maxX:o+i,minZ:l-i,maxZ:c+i}:{minX:-20,maxX:20,minZ:-100,maxZ:20}}class wv{constructor(e,t,n=null,i=[]){var a;if(this.canvas=e,this.wrapEl=n,this.path=t,this.walkableCurves=i??[],this.player=null,this.npcs=[],this.animals=[],this.worldProps=[],this.companion=null,this.petCompanion=null,this.nearbyInteractables=[],this.bounds={minX:-20,maxX:20,minZ:-100,maxZ:20},this.padding=10,this._pulse=0,this.unavailable=!1,this.dpr=1,this.size=(e==null?void 0:e.width)||180,this.fallbackEl=(n==null?void 0:n.querySelector("#minimap-fallback"))??null,this.ctx=(e==null?void 0:e.getContext("2d"))??null,!this.ctx){console.warn("Minimap: 2D canvas context unavailable"),this.unavailable=!0,e&&(e.style.display="none"),(a=this.fallbackEl)==null||a.classList.remove("hidden");return}const r=(n==null?void 0:n.clientWidth)||e.width||180;this.resize(r)}setPlayer(e){this.player=e}setNpcs(e){this.npcs=e,this._recomputeBounds()}setAnimals(e){this.animals=e,this._recomputeBounds()}setWorldProps(e){this.worldProps=e,this._recomputeBounds()}setCompanion(e){this.companion=e}setPetCompanion(e){this.petCompanion=e}setNearbyInteractables(e){this.nearbyInteractables=e??[]}_recomputeBounds(){this.bounds=bv(this.path,this.npcs,this.animals,this.worldProps,10,this.walkableCurves)}resize(e){var n;if(this.unavailable||!this.canvas||!this.ctx)return;const t=Math.max(80,Math.round(e||((n=this.wrapEl)==null?void 0:n.clientWidth)||this.size||180));this.size=t,this.dpr=Math.min(window.devicePixelRatio||1,2),this.canvas.width=Math.round(t*this.dpr),this.canvas.height=Math.round(t*this.dpr),this.canvas.style.width=`${t}px`,this.canvas.style.height=`${t}px`,this.ctx.setTransform(this.dpr,0,0,this.dpr,0,0)}_worldToMap(e,t){const{minX:n,maxX:i,minZ:r,maxZ:a}=this.bounds,o=i-n||1,l=a-r||1,c=this.size-this.padding*2;return{mx:this.padding+(e-n)/o*c,my:this.padding+(t-r)/l*c}}update(){var i,r,a;if(this.unavailable||!this.ctx)return;const{ctx:e,size:t}=this;this._pulse=(this._pulse+.07)%(Math.PI*2),e.clearRect(0,0,t,t),e.save(),e.beginPath(),e.arc(t/2,t/2,t/2-2,0,Math.PI*2),e.clip(),e.fillStyle="#2d4a2d",e.fillRect(0,0,t,t);const n=this._worldToMap(22,-78);e.fillStyle="#3a6890",e.beginPath(),e.arc(n.mx,n.my,18,0,Math.PI*2),e.fill(),e.strokeStyle="#1a1a1a",e.lineWidth=7,e.lineCap="round",e.lineJoin="round",e.beginPath();for(let o=0;o<=60;o++){const l=this.path.getPointAt(o/60),{mx:c,my:h}=this._worldToMap(l.x,l.z);o===0?e.moveTo(c,h):e.lineTo(c,h)}if(e.stroke(),e.strokeStyle="rgba(220,210,180,0.55)",e.lineWidth=2.5,e.stroke(),(i=this.walkableCurves)!=null&&i.length){for(const o of this.walkableCurves)if(o!==this.path){e.strokeStyle="rgba(138,132,120,0.7)",e.lineWidth=5,e.beginPath();for(let l=0;l<=40;l++){const c=o.getPointAt(l/40),{mx:h,my:d}=this._worldToMap(c.x,c.z);l===0?e.moveTo(h,d):e.lineTo(h,d)}e.stroke()}}for(const o of this.worldProps){const l=o.mesh.position,{mx:c,my:h}=this._worldToMap(l.x,l.z),d=((r=o.definition)==null?void 0:r.id)??"";d==="shrine"?xv(e,c,h,Nt.shrine):d==="vending"?ii(e,c,h,2.8,Nt.vending,"#ffffff",1):d.startsWith("shop")?yv(e,c,h,Nt.shop):d==="bench"?ii(e,c,h,2,Nt.bench):(d==="cherry_tree"||d==="shrine_tree")&&ii(e,c,h,2,Nt.tree)}for(const o of this.animals){if(o===this.petCompanion)continue;const l=o.mesh.position,{mx:c,my:h}=this._worldToMap(l.x,l.z);Uh(e,c,h,Nt.animal)}if(this.petCompanion){const o=this.petCompanion.mesh.position,{mx:l,my:c}=this._worldToMap(o.x,o.z),h=5+Math.sin(this._pulse)*2;ii(e,l,c,h,"rgba(208,96,200,0.25)"),Uh(e,l,c,"#ff80f0"),e.strokeStyle="#ff80f0",e.lineWidth=1.5,e.beginPath(),e.arc(l,c,h,0,Math.PI*2),e.stroke()}for(const o of this.npcs){if(o===this.companion)continue;const{mx:l,my:c}=this._worldToMap(o.mesh.position.x,o.mesh.position.z);(a=o.profile)!=null&&a.isAmbient?ii(e,l,c,2,"rgba(200,160,100,0.65)"):kh(e,l,c,Nt.npc,"#f8d0a0")}if(this.companion){const{mx:o,my:l}=this._worldToMap(this.companion.mesh.position.x,this.companion.mesh.position.z),c=6+Math.sin(this._pulse)*2;ii(e,o,l,c,"rgba(96,232,216,0.22)"),kh(e,o,l,Nt.companion,"#c0fff8"),e.strokeStyle=Nt.companion,e.lineWidth=1.5,e.beginPath(),e.arc(o,l,c,0,Math.PI*2),e.stroke()}for(const{item:o,dist:l}of this.nearbyInteractables){const c=Mv(o);if(!c)continue;const{mx:h,my:d}=this._worldToMap(c.x,c.z),u=vv(o),f=1-Math.min(l/20,.75),g=8+Math.sin(this._pulse+l)*2.5*f,_=u.match(/#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})/i);if(_){const[,m,p,y]=_;ii(e,h,d,g,`rgba(${parseInt(m,16)},${parseInt(p,16)},${parseInt(y,16)},${.15+f*.2})`)}e.strokeStyle=u,e.lineWidth=2,e.beginPath(),e.arc(h,d,g,0,Math.PI*2),e.stroke(),_v(e,h,d,u,3.5)}if(this.player){const o=this.player.position,{mx:l,my:c}=this._worldToMap(o.x,o.z);ii(e,l,c,11,"rgba(74,144,232,0.22)"),e.fillStyle=Nt.player,e.strokeStyle="#ffffff",e.lineWidth=2.5,e.beginPath(),e.arc(l,c,6,0,Math.PI*2),e.fill(),e.stroke();const h=this.player.facing??0;e.fillStyle="#ffffff",e.beginPath(),e.moveTo(l+Math.sin(h)*11,c+Math.cos(h)*11),e.lineTo(l+Math.sin(h+2.5)*6,c+Math.cos(h+2.5)*6),e.lineTo(l+Math.sin(h-2.5)*6,c+Math.cos(h-2.5)*6),e.closePath(),e.fill()}e.restore(),e.strokeStyle="rgba(255,255,255,0.95)",e.lineWidth=3,e.beginPath(),e.arc(t/2,t/2,t/2-2,0,Math.PI*2),e.stroke(),e.strokeStyle="rgba(80,180,160,0.55)",e.lineWidth=1.5,e.beginPath(),e.arc(t/2,t/2,t/2-6,0,Math.PI*2),e.stroke()}}const ho=[{min:85,name:"joyful",emoji:"😄",expression:"happy",color:"#f0c030"},{min:65,name:"happy",emoji:"😊",expression:"happy",color:"#80d080"},{min:45,name:"content",emoji:"🙂",expression:null,color:"#60b8d8"},{min:25,name:"tired",emoji:"😐",expression:"thinking",color:"#a0a0b8"},{min:0,name:"sad",emoji:"😢",expression:"thinking",color:"#8070c0"}],zr=55,Fh=.4,Sv=4;class Tv{constructor(){this.score=60,this._driftTimer=0,this._prevMoodName="content",this._floatEl=null,this._floatTimeout=null}getMood(){for(const e of ho)if(this.score>=e.min)return e;return ho[ho.length-1]}boost(e,t=null){const n=this.getMood().name;this.score=Math.min(100,this.score+e);const i=this.getMood();return(i.name!==n||t)&&this._triggerFloat(i.emoji,t,i.color),i}drain(e){return this.score=Math.max(0,this.score-e),this.getMood()}update(e){return this._driftTimer+=e,this._driftTimer>=Sv&&(this._driftTimer=0,this.score>zr?this.score=Math.max(zr,this.score-Fh):this.score<zr&&(this.score=Math.min(zr,this.score+Fh*.5))),this.getMood()}setFloatContainer(e){this._floatEl=e}_triggerFloat(e,t,n){if(!this._floatEl)return;clearTimeout(this._floatTimeout);const i=t?`${e} ${t}`:e;this._floatEl.textContent=i,this._floatEl.style.color=n??"#f0e060",this._floatEl.classList.remove("mood-float-active"),this._floatEl.offsetWidth,this._floatEl.classList.add("mood-float-active"),this._floatTimeout=setTimeout(()=>{this._floatEl.classList.remove("mood-float-active")},2e3)}getPercent(){return this.score}}const Kd=80,Ev=[{id:"mochi",name:"Mochi",nameJa:"もち",species:"cat",emoji:"🐱",personality:"friendly",startT:.06,side:1,offset:3.2,petGain:15,sitGain:8,shooLoss:10,reactions:{pet:{happy:"Mochi purrs and rubs against your leg.",shy:"Mochi leans in cautiously.",skittish:"Mochi tolerates one pat."},sit:{happy:"Mochi curls up nearby.",shy:"Mochi watches from a safe distance.",skittish:"Mochi hops a little closer."},shoo:{happy:"Mochi looks confused but stays.",shy:"Mochi backs away.",skittish:"Mochi darts behind the bench!"},friend:"Mochi wants to follow you everywhere!"}},{id:"taro",name:"Taro",nameJa:"太郎",species:"shiba",emoji:"🐕",personality:"friendly",startT:.52,side:-1,offset:3,petGain:15,sitGain:10,shooLoss:15,reactions:{pet:{happy:"Taro wags his whole body!",shy:"Taro sniffs your hand.",skittish:"Taro yips once."},sit:{happy:"Taro sits proudly beside you.",shy:"Taro circles once, then rests.",skittish:"Taro keeps one eye on you."},shoo:{happy:"Taro whines softly.",shy:"Taro retreats to the stall.",skittish:"Taro hides under the awning!"},friend:"Taro is your loyal walking buddy now!"}},{id:"snow",name:"Snow",nameJa:"雪ちゃん",species:"rabbit",emoji:"🐰",personality:"shy",startT:.78,side:1,offset:4,petGain:5,sitGain:12,shooLoss:25,reactions:{pet:{happy:"Snow's nose twitches happily.",shy:"Snow flinches, then relaxes.",skittish:"Snow hops away a step."},sit:{happy:"Snow inches closer.",shy:"Snow appreciates the quiet company.",skittish:"Snow peeks from the grass."},shoo:{happy:"Snow hops off quickly.",shy:"Snow vanishes into the bushes!",skittish:"Snow is gone in a white blur!"},friend:"Snow trusts you enough to hop along!"}},{id:"kitsune",name:"Kitsune",nameJa:"きつね",species:"fox",emoji:"🦊",personality:"shy",startT:.64,side:-1,offset:5.5,petGain:6,sitGain:10,shooLoss:20,reactions:{pet:{happy:"Kitsune's tail swishes.",shy:"Kitsune watches with golden eyes.",skittish:"Kitsune steps back."},sit:{happy:"Kitsune settles on the stone steps.",shy:"Kitsune sits at a respectful distance.",skittish:"Kitsune hides behind the torii post."},shoo:{happy:"Kitsune trots toward the shrine.",shy:"Kitsune disappears behind the gate.",skittish:"Kitsune vanishes like a spirit!"},friend:"Kitsune pads quietly at your side."}},{id:"pippo",name:"Pippo",nameJa:"ピッポ",species:"duck",emoji:"🦆",personality:"friendly",startT:.94,side:-1,offset:3.5,petGain:12,sitGain:6,shooLoss:8,reactions:{pet:{happy:"Pippo quacks contentedly.",shy:"Pippo waddles in a circle.",skittish:"Pippo ruffles feathers."},sit:{happy:"Pippo floats near the dock.",shy:"Pippo preens on the pier.",skittish:"Pippo paddles away slowly."},shoo:{happy:"Pippo quacks and swims off.",shy:"Pippo dives underwater.",skittish:"Pippo flees to open water!"},friend:"Pippo waddles behind you on land!"}},{id:"maru",name:"Maru",nameJa:"まる",species:"cat",emoji:"🐈",personality:"skittish",startT:.36,side:1,offset:3.8,petGain:3,sitGain:8,shooLoss:30,reactions:{pet:{happy:"Maru tolerates exactly one pat.",shy:"Maru stiffens, then melts.",skittish:"Maru's tail puffs up!"},sit:{happy:"Maru watches from the wall.",shy:"Maru creeps a little closer.",skittish:"Maru stays on the wall, alert."},shoo:{happy:"Maru leaps to the roof.",shy:"Maru is already gone.",skittish:"Maru vanishes over the wall!"},friend:"Maru deigns to walk with you. Honor."}},{id:"buta",name:"Buta",nameJa:"ぶた",species:"pig",emoji:"🐷",personality:"friendly",startT:.42,side:-1,offset:3.5,petGain:14,sitGain:9,shooLoss:12,reactions:{pet:{happy:"Buta oinks happily and rolls over.",shy:"Buta snorts curiously.",skittish:"Buta backs up one step."},sit:{happy:"Buta flops down contentedly.",shy:"Buta roots at the grass.",skittish:"Buta watches from the shade."},shoo:{happy:"Buta trots to the next garden.",shy:"Buta disappears behind a stall.",skittish:"Buta squeals and runs!"},friend:"Buta waddles along beside you!"}},{id:"piko",name:"Piko",nameJa:"ピコ",species:"parrot",emoji:"🦜",personality:"friendly",startT:.3,side:1,offset:4.2,petGain:10,sitGain:7,shooLoss:10,reactions:{pet:{happy:"Piko chirps and bobs its head.",shy:"Piko tilts its head at you.",skittish:"Piko ruffles its feathers."},sit:{happy:"Piko perches on the shop sign.",shy:"Piko hops to a low branch.",skittish:"Piko flies to the roof."},shoo:{happy:"Piko squawks and flutters away.",shy:"Piko glides to the next awning.",skittish:"Piko vanishes into the trees!"},friend:"Piko hops along from sign to sign, following you!"}},{id:"quack",name:"Quack",nameJa:"ガー",species:"duck",emoji:"🦆",personality:"friendly",pathId:"riverside",startT:.2,side:1,offset:1.5,petGain:14,sitGain:6,shooLoss:8,reactions:{pet:{happy:"Quack waddles in circles happily.",shy:"Quack tilts its head.",skittish:"Quack flaps once."},sit:{happy:"Quack floats near the lily pads.",shy:"Quack preens on the bank.",skittish:"Quack paddles away slowly."},shoo:{happy:"Quack quacks and swims downstream.",shy:"Quack dives under.",skittish:"Quack flees to open water!"},friend:"Quack waddles along the riverbank behind you!"}},{id:"paddle",name:"Paddle",nameJa:"パドル",species:"duck",emoji:"🦆",personality:"shy",pathId:"riverside",startT:.7,side:-1,offset:1.2,petGain:8,sitGain:10,shooLoss:15,reactions:{pet:{happy:"Paddle nibbles your fingers gently.",shy:"Paddle inches closer.",skittish:"Paddle hops back."},sit:{happy:"Paddle rests on a lily pad.",shy:"Paddle watches from the reeds.",skittish:"Paddle hides in the grass."},shoo:{happy:"Paddle swims to the bridge.",shy:"Paddle disappears downstream.",skittish:"Paddle vanishes in a splash!"},friend:"Paddle follows you along the river path!"}},{id:"heron",name:"Heron",nameJa:"サギ",species:"parrot",emoji:"🦢",personality:"shy",pathId:"riverside",startT:.85,side:1,offset:1,petGain:5,sitGain:12,shooLoss:22,reactions:{pet:{happy:"Heron stands perfectly still, then bows.",shy:"Heron watches with one golden eye.",skittish:"Heron spreads its wings and lifts off."},sit:{happy:"Heron stands sentinel on the bridge railing.",shy:"Heron waits in the shallows.",skittish:"Heron flies to the far bank."},shoo:{happy:"Heron glides downstream gracefully.",shy:"Heron vanishes into the reeds.",skittish:"Heron takes flight with a great flap!"},friend:"Heron stalks along beside you, dignified and calm."}},{id:"chip",name:"Chip",nameJa:"チップ",species:"rabbit",emoji:"🐿️",personality:"skittish",pathId:"grove",startT:.6,side:1,offset:2,petGain:4,sitGain:10,shooLoss:25,reactions:{pet:{happy:"Chip's nose twitches rapidly.",shy:"Chip freezes, then relaxes.",skittish:"Chip darts behind a mushroom!"},sit:{happy:"Chip nibbles near the picnic blanket.",shy:"Chip peeks from behind a tree.",skittish:"Chip watches from the bushes."},shoo:{happy:"Chip scampers up a cherry tree.",shy:"Chip vanishes into the grove.",skittish:"Chip is gone in a brown blur!"},friend:"Chip hops along the grove path, stopping to sniff everything!"}}];let ea=null;function Av(s){ea=s}const Cv={cat:{key:"animal_cat",tint:15759400,tintStrength:.55},shiba:{key:"animal_dog",tint:15241280,tintStrength:.5},rabbit:{key:"animal_bunny",tint:13674728,tintStrength:.45},fox:{key:"animal_fox",tint:14701840,tintStrength:.6},duck:{key:"animal_duck",tint:16306208,tintStrength:.6},pig:{key:"animal_pig",tint:15765688,tintStrength:.55},parrot:{key:"animal_parrot",tint:1624200,tintStrength:.55}};function nr(s,e={x:1.2,y:.8,z:1.2}){const t=new ee(new oe(e.x,e.y,e.z),new dt({transparent:!0,opacity:0,depthWrite:!1}));return t.position.y=e.y/2,t.userData.isHitArea=!0,s.add(t),t}function ir(s,{cx:e,cy:t,cz:n=0,spread:i=.042,size:r=.02,pupilColor:a=1118498,irisColor:o=3170472}={}){const l=new dt({color:a}),c=new dt({color:o}),h=new dt({color:16777215});[-i,i].forEach(d=>{const u=new ee(new Dt(r*1.15,8),c);u.position.set(e+.001,t,n+d),u.rotation.y=-Math.PI/2,s.add(u);const f=new ee(new Dt(r*.72,8),l);f.position.set(e+.002,t,n+d),f.rotation.y=-Math.PI/2,s.add(f);const g=new ee(new Dt(r*.3,6),h);g.position.set(e+.003,t+r*.45,n+d+r*.3),g.rotation.y=-Math.PI/2,s.add(g)})}function ha(s,e,t,n,i=14509696,r=.013){const a=new dt({color:i}),o=new ee(new Be(r,7,5),a);o.scale.set(1.3,.85,.8),o.position.set(e,t,n),s.add(o)}function da(s,e,t,n,i=1){const r=new dt({color:1705992});[[-.022*i,-.006*i],[.022*i,-.006*i]].forEach(([a,o])=>{const l=new ee(new Be(.007*i,5,4),r);l.position.set(e,t+o,n+a),s.add(l)})}function Rv(s,e,t,n,i=3){const r=new dt({color:8947848,transparent:!0,opacity:.7});for(let a=0;a<i;a++){const o=(a-1)*.012;[-1,1].forEach(l=>{const c=new ee(new oe(.075,.003,.003),r);c.position.set(e,t+o,n+l*.015),c.rotation.y=l*.15,s.add(c)})}}function jl(s,e,t,n,i=16755387){const r=new ee(new At(.016,.038,3),new dt({color:i}));r.position.set(e,t,n),s.add(r)}function Iv(s,e,t,n,i,r=.032){const a=Z(new Be(r,7,5),U(i));a.scale.set(1.1,.55,.95),a.position.set(e,t,n),s.add(a)}function fs(s,e,t,n,i,r=.07,a=null){const o=Z(new Ne(.025,.028,r,6),U(i));o.position.set(e,t+r/2,n),s.add(o),Iv(s,e,t,n,a??i)}function pl(s=15769664){const e=new we,t=U(s),n=U(16773344),i=Z(new Be(.13,10,8),t);i.scale.set(1.25,.78,1.05),i.position.y=.14,e.add(i);const r=new ee(new Be(.075,8,6),n);r.scale.set(.85,.6,.6),r.position.set(.09,.14,0),e.add(r);const a=Z(new Be(.1,10,8),t);a.position.set(.16,.215,0),e.add(a),[[-.038,.038],[.038,.038]].forEach(([f,g])=>{const _=Z(new At(.033,.068,3),t);_.position.set(.2,.315+g*.2,f),_.rotation.x=f<0?-.1:.1,e.add(_),jl(e,.201,.318+g*.2,f,16751035)});const o=.255,l=.22,c=0;ir(e,{cx:o,cy:l+.008,cz:c,spread:.038,size:.021,irisColor:2789472}),ha(e,o+.003,l-.022,c,15628185,.014),da(e,o+.001,l-.038,c,.9),Rv(e,o-.01,l-.02,c,3);const h=Z(new Ne(.018,.03,.24,6),t);h.position.set(-.16,.18,0),h.rotation.z=.75,e.userData.tail=h,e.add(h);const d=Z(new Be(.032,7,5),n);d.position.set(-.265,.285,0),e.add(d);const u=s;return[[-.055,0],[.055,0],[-.04,.09],[.04,.09]].forEach(([f,g])=>{fs(e,.07+g,.02,f,u,.065)}),nr(e,{x:1.3,y:.75,z:1.3}),e}function Pv(){const s=new we,e=U(15245392),t=U(16773328),n=Z(new Be(.15,10,8),e);n.scale.set(1.32,.88,1.1),n.position.y=.15,s.add(n);const i=new ee(new Be(.09,8,6),t);i.scale.set(.75,.7,.55),i.position.set(.11,.17,0),s.add(i);const r=Z(new Be(.12,10,8),e);r.position.set(.18,.24,0),s.add(r),[[-.048,0],[.048,0]].forEach(([h])=>{const d=Z(new At(.034,.075,3),e);d.position.set(.22,.35,h),d.rotation.x=h<0?-.15:.15,s.add(d),jl(s,.221,.352,h,16764074)});const a=Z(new Be(.055,8,6),t);a.scale.set(1,.75,.85),a.position.set(.295,.22,0),s.add(a),ir(s,{cx:.35-.04,cy:.255,cz:0,spread:.046,size:.024,irisColor:5910544}),ha(s,.346,.22,0,1710618,.018),da(s,.34,.202,0,1.1);const c=Z(new ci(.075,.025,6,10,Math.PI*1.4),e);return c.position.set(-.14,.32,0),c.rotation.set(.4,0,1.6),s.userData.tail=c,s.add(c),[[-.065,0],[.065,0],[-.05,.1],[.05,.1]].forEach(([h,d])=>{fs(s,.08+d,.02,h,15245392,.08,15245392)}),nr(s,{x:1.45,y:.8,z:1.45}),s}function Lv(){const s=new we,e=U(16119285);U(16764125);const t=Z(new Be(.11,10,8),e);t.scale.set(1.1,1.05,1),t.position.y=.12,s.add(t);const n=Z(new Be(.1,10,8),e);n.position.set(.12,.23,0),s.add(n),[[-.036,0],[.036,0]].forEach(([o])=>{const l=Z(new Ne(.022,.026,.18,8),e);l.position.set(.11,.42,o),s.add(l);const c=Z(new Be(.022,7,5),e);c.position.set(.11,.51,o),s.add(c);const h=new ee(new Ne(.012,.014,.14,6),U(16759756));h.position.set(.112,.42,o),s.add(h)});const i=.215,r=.24;ir(s,{cx:i,cy:r+.005,cz:0,spread:.036,size:.026,irisColor:13382468,pupilColor:4456465}),ha(s,i+.005,r-.018,0,16755404,.013),da(s,i,r-.032,0,.85);const a=Z(new Be(.038,8,6),e);return a.position.set(-.12,.16,0),s.add(a),s.userData.tail=a,[[-.04,0],[.04,0]].forEach(([o])=>{fs(s,.05,.02,o,16119285,.07)}),[[-.045,-.06],[.045,-.06]].forEach(([o,l])=>{fs(s,l,.02,o,16119285,.085,16119285)}),nr(s,{x:1.05,y:.7,z:1.05}),s}function Dv(){const s=new we,e=U(15233088),t=U(16117992);U(2759184);const n=Z(new Be(.12,10,8),e);n.scale.set(1.22,.8,1.05),n.position.y=.13,s.add(n);const i=new ee(new Be(.065,8,6),t);i.scale.set(.7,.7,.5),i.position.set(.1,.14,0),s.add(i);const r=Z(new Be(.1,10,8),e);r.position.set(.15,.2,0),s.add(r),[[-.04,0],[.04,0]].forEach(([d])=>{const u=Z(new At(.03,.072,3),e);u.position.set(.19,.32,d),u.rotation.x=d<0?-.2:.2,s.add(u),jl(s,.191,.322,d,16755370)});const a=new ee(new Be(.05,8,6),t);a.scale.set(1.1,.7,.75),a.position.set(.245,.195,0),s.add(a);const o=.248,l=.205;ir(s,{cx:o-.025,cy:l+.01,cz:0,spread:.04,size:.022,irisColor:13666352,pupilColor:1705984}),ha(s,.255,l-.015,0,1710618,.016),da(s,.252,l-.03,0,.9),[[-.05,0],[.05,0]].forEach(([d])=>{fs(s,.07,.02,d,15233088,.065,2759184)}),[[-.04,-.06],[.04,-.06]].forEach(([d,u])=>{fs(s,u,.02,d,15233088,.065,2759184)});const c=Z(new Ne(.04,.055,.22,7),e);c.position.set(-.14,.15,0),c.rotation.z=1,s.userData.tail=c,s.add(c);const h=Z(new Be(.06,8,6),t);return h.position.set(-.26,.23,0),s.add(h),nr(s,{x:1.3,y:.75,z:1.3}),s}function Bh(){const s=new we,e=U(15786064),t=U(15759392),n=Z(new Be(.12,10,8),e);n.scale.set(1.22,.95,1.12),n.position.y=.13,s.add(n),[-1,1].forEach(h=>{const d=Z(new Be(.065,8,6),e);d.scale.set(.75,.55,.4),d.position.set(-.03,.17,h*.13),s.add(d)});const i=Z(new Be(.085,10,8),e);i.position.set(.155,.23,0),s.add(i);const r=Z(new oe(.075,.022,.06),t);r.position.set(.238,.225,0),s.add(r);const a=Z(new oe(.065,.016,.054),t);a.position.set(.238,.208,0),s.add(a),ir(s,{cx:.235-.022,cy:.25,cz:0,spread:.036,size:.02,irisColor:1718810,pupilColor:1118481});const c=Z(new At(.04,.07,4),e);return c.position.set(-.155,.21,0),c.rotation.z=-Math.PI/2+.4,s.userData.tail=c,s.add(c),[[-.04,0],[.04,0]].forEach(([h])=>{const d=Z(new oe(.065,.014,.05),t);d.position.set(.06,.015,h),s.add(d)}),nr(s,{x:1.2,y:.7,z:1.2}),s}const Nv={cat:pl,shiba:Pv,rabbit:Lv,fox:Dv,duck:Bh,pig:pl,parrot:Bh};function kv(s,e){const t=Cv[s];if(t){const a=ea==null?void 0:ea.createInstance(t.key,{tint:t.tint??null,tintStrength:t.tintStrength??0});if(a){a.rotation.y=Math.PI;const o=new we;return o.add(a),o.userData.isLoadedModel=!0,o}}const i=(Nv[s]??pl)(e);i.rotation.y=-Math.PI/2;const r=new we;return r.add(i),r.userData.tail=i.userData.tail,r}const Uv={cat:{bg:"rgba(40,18,28,0.82)",border:"#d06888",text:"#f8d0dc"},shiba:{bg:"rgba(40,28,10,0.82)",border:"#c88040",text:"#f8ddb0"},rabbit:{bg:"rgba(30,18,40,0.82)",border:"#aa70c8",text:"#e8c8f8"},fox:{bg:"rgba(42,20,10,0.82)",border:"#d06030",text:"#f8ccb0"},duck:{bg:"rgba(34,30,10,0.82)",border:"#c8a820",text:"#f0e890"},pig:{bg:"rgba(40,18,28,0.82)",border:"#e080a0",text:"#f8d0e0"},parrot:{bg:"rgba(18,34,28,0.82)",border:"#40b880",text:"#c8f8e0"}};function Fv(s,e,t="cat"){const r=document.createElement("canvas");r.width=160,r.height=46;const a=r.getContext("2d"),o=Uv[t]??{bg:"rgba(18,26,34,0.82)",border:"#5ababa",text:"#e8f4f4"},l=12;a.fillStyle=o.bg,a.strokeStyle=o.border,a.lineWidth=2.5,a.beginPath(),a.moveTo(l,2),a.lineTo(160-l,2),a.quadraticCurveTo(158,2,158,l),a.lineTo(158,46-l),a.quadraticCurveTo(158,44,160-l,44),a.lineTo(l,44),a.quadraticCurveTo(2,44,2,46-l),a.lineTo(2,l),a.quadraticCurveTo(2,2,l,2),a.closePath(),a.fill(),a.stroke(),a.fillStyle=o.text,a.font="bold 15px sans-serif",a.textAlign="center",a.textBaseline="middle",a.fillText(`${s} ${e}`,160/2,46/2);const c=new Ht(r),h=new Rn(new Sn({map:c,transparent:!0}));return h.position.y=.6,h.scale.set(1.1,.32,1),h}let Hr=null;function Bv(){if(Hr)return Hr;const s=document.createElement("canvas");s.width=32,s.height=32;const e=s.getContext("2d");return e.fillStyle="#ff4488",e.beginPath(),e.arc(10,11,8,0,Math.PI*2),e.arc(22,11,8,0,Math.PI*2),e.fill(),e.beginPath(),e.moveTo(2,15),e.lineTo(16,29),e.lineTo(30,15),e.fill(),Hr=new Ht(s),Hr}const uo=1.8,Oh=.7,Ls=.02;class Ov{constructor(e,t,n){this.type="animal",this.path=t,this.definition=n,this.affinity=0,this.isPetCompanion=!1,this.state="idle",this.idlePhase=Math.random()*Math.PI*2,this.walkPhase=0,this.scaredTimer=0,this.followSpeed=3,this.range=5,this.wanderAngle=Math.random()*Math.PI*2,this.wanderTimer=Math.random()*3,this.isMoving=!1,this.mesh=kv(n.species);const i=Fv(n.emoji,n.name,n.species);this.mesh.userData.isLoadedModel?i.position.y=.85:(this.mesh.scale.setScalar(3.5),i.scale.divideScalar(3.5)),this.mesh.add(i),this.nameLabel=i,e.add(this.mesh),this._placeOnPath(),this.homePos=this.mesh.position.clone(),this.homeFacing=this.mesh.rotation.y,this.heartParticles=[],this.mesh.userData.interactable=this,this.mesh.traverse(r=>{r.userData.interactable=this})}spawnHearts(e=4,t="#ff4488"){const n=Bv();for(let i=0;i<e;i++){const r=new Sn({map:n,transparent:!0,opacity:1,color:t}),a=new Rn(r);a.scale.set(.18,.18,1),a.position.set((Math.random()-.5)*.25,.35+Math.random()*.1,(Math.random()-.5)*.2),a.userData.vy=.012+Math.random()*.01,a.userData.vx=(Math.random()-.5)*.006,a.userData.life=1,this.mesh.add(a),this.heartParticles.push(a)}}_placeOnPath(){const e=this.path.getPointAt(this.definition.startT),t=this.path.getTangentAt(this.definition.startT),n=new T(-t.z,0,t.x).multiplyScalar(this.definition.side??1);this.mesh.position.copy(e).add(n.multiplyScalar(this.definition.offset??3)),this.mesh.position.y=.02,this.mesh.rotation.y=Math.atan2(t.x,t.z)}get profile(){return this.definition}getHitTargets(){return[this.mesh]}distanceTo(e){const t=this.mesh.position.x-e.x,n=this.mesh.position.z-e.z;return Math.hypot(t,n)}canInteract(e){return this.distanceTo(e)<=this.range}interact(e){var t;(t=e.petUI)==null||t.show(this)}addAffinity(e){return this.affinity=Math.max(0,Math.min(100,this.affinity+e)),this.affinity}isFriend(){return this.affinity>=Kd}getReaction(e){var n,i,r;const t=this.definition.personality;return((i=(n=this.definition.reactions)==null?void 0:n[e])==null?void 0:i[t])??((r=this.definition.reactions)==null?void 0:r[e])??""}startFollowing(){this.state="following",this.isPetCompanion=!0,this.nameLabel&&(this.nameLabel.visible=!1)}stopFollowing(e=!0){this.state="idle",this.isPetCompanion=!1,this.nameLabel&&(this.nameLabel.visible=!0),e&&(this.mesh.position.copy(this.homePos),this.mesh.rotation.y=this.homeFacing)}scare(e=1.5){this.scaredTimer=e,this.state="scared"}applyAction(e){var i;const t=this.definition;let n=0;return e==="pet"?n=t.petGain??5:e==="sit"?n=t.sitGain??8:e==="shoo"&&(n=-(t.shooLoss??15)),this.addAffinity(n),e==="shoo"&&this.scare(2),{affinity:this.affinity,message:this.getReaction(e),isFriend:this.isFriend(),friendMessage:(i=this.definition.reactions)==null?void 0:i.friend}}update(e,t=null,n=0){for(let c=this.heartParticles.length-1;c>=0;c--){const h=this.heartParticles[c];h.userData.life-=e,h.position.y+=h.userData.vy,h.position.x+=h.userData.vx,h.material.opacity=Math.max(0,h.userData.life),h.scale.setScalar(.18*(.5+h.userData.life*.7)),h.userData.life<=0&&(this.mesh.remove(h),this.heartParticles.splice(c,1))}if(this.scaredTimer>0){this.scaredTimer-=e,this.idlePhase+=e*8,this.mesh.position.x=this.homePos.x+Math.sin(this.idlePhase*3)*.15,this.mesh.position.y=Ls,this.scaredTimer<=0&&(this.state=this.isPetCompanion?"following":"idle");return}if(this.state==="following"&&t){const c=Math.sin(n),h=Math.cos(n),d=t.x-c*2.2,u=t.z-h*2.2;this._followTarget?(this._followTarget.x+=(d-this._followTarget.x)*Math.min(1,e*4),this._followTarget.z+=(u-this._followTarget.z)*Math.min(1,e*4)):this._followTarget=new T(d,0,u);const f=this._followTarget.x-this.mesh.position.x,g=this._followTarget.z-this.mesh.position.z,_=Math.hypot(f,g);if(_>.8){const m=Math.min(this.followSpeed*e,_-.8);this.mesh.position.x+=f/_*m,this.mesh.position.z+=g/_*m;const y=(Math.atan2(f,g)-this.mesh.rotation.y+Math.PI*3)%(Math.PI*2)-Math.PI;this.mesh.rotation.y+=y*Math.min(1,e*8),this.walkPhase+=e*this.followSpeed*4,this.mesh.position.y=Ls+Math.abs(Math.sin(this.walkPhase))*.05}else{const m=(n-this.mesh.rotation.y+Math.PI*3)%(Math.PI*2)-Math.PI;this.mesh.rotation.y+=m*Math.min(1,e*4),this.mesh.position.y=Ls}this._animateTail(e,_>.8?6:2.5);return}if(this.wanderTimer-=e,this.wanderTimer<=0){const c=this.homePos.x-this.mesh.position.x,h=this.homePos.z-this.mesh.position.z;Math.hypot(c,h)>uo*.75?this.wanderAngle=Math.atan2(c,h):this.wanderAngle+=(Math.random()-.5)*2,this.wanderTimer=2+Math.random()*3}const i=this.homePos.x+Math.sin(this.wanderAngle)*uo,r=this.homePos.z+Math.cos(this.wanderAngle)*uo,a=i-this.mesh.position.x,o=r-this.mesh.position.z,l=Math.hypot(a,o);if(l>.25){const c=Math.min(Oh*e,l);this.mesh.position.x+=a/l*c,this.mesh.position.z+=o/l*c,this.mesh.rotation.y=Math.atan2(a,o),this.walkPhase+=e*Oh*4,this.mesh.position.y=Ls+Math.abs(Math.sin(this.walkPhase))*.035,this.isMoving=!0}else if(this.idlePhase+=e*1.8,this.mesh.position.y=Ls+Math.sin(this.idlePhase)*.008,this.isMoving=!1,t&&this.distanceTo(t)<6){const c=t.x-this.mesh.position.x,h=t.z-this.mesh.position.z;Math.hypot(c,h)>.1&&(this.mesh.rotation.y=Math.atan2(c,h))}this._animateTail(e,this.isMoving?4.5:2.5)}_animateTail(e,t=3){var i;const n=(i=this.mesh.userData)==null?void 0:i.tail;n&&(this.idlePhase+=e*t,n.userData.baseRotZ===void 0&&(n.userData.baseRotZ=n.rotation.z),n.rotation.z=n.userData.baseRotZ+Math.sin(this.idlePhase)*.35)}}const zh=["大吉 · Great Fortune! The road ahead is bright.","吉 · Good Luck. Keep walking forward.","中吉 · Moderate Fortune. Steady steps bring reward.","小吉 · Small Fortune. Good things come quietly.","末吉 · Future Fortune. Patience will be rewarded.","凶 · Misfortune today. Tomorrow holds new hope."];function zv(){return zh[Math.floor(Math.random()*zh.length)]}const Js={bench:{id:"bench",label:"Bench",range:3.5,actions:{sit:{message:"You sit for a moment. The town feels unhurried.",sitDuration:4,sitHeight:.4}}},cherry_tree:{id:"cherry_tree",label:"Cherry tree",range:4,actions:{admire:{message:"🌸 Pink petals drift down. For a moment, nothing else matters.",journal:{title:"Cherry Blossom Moment",body:"Petals fall without hurry. The tree teaches patience."}}}},shrine_tree:{id:"shrine_tree",label:"Shrine tree",range:4.5,actions:{listen:{message:"🌿 Wind rustles the leaves. Even the birds seem to whisper here."}}},shrine:{id:"shrine",label:"Shrine",range:7,hitRadius:2.5},vending:{id:"vending",label:"Vending Machine",shopId:"vending",range:3,hitRadius:.6}};function Hv(s=1.2,e=2){const t=new ee(new Ne(s,s,e,8),new dt({transparent:!0,opacity:0,depthWrite:!1}));return t.position.y=e/2,t}class sr{constructor(e,t,n,i=0){this.type="prop",this.definition=t,this.range=t.range??3.5,this.mesh=new we,this.mesh.position.copy(n),this.mesh.rotation.y=i,this.hitVolume=Hv(t.hitRadius??1.2),this.mesh.add(this.hitVolume),this.mesh.userData.interactable=this,this.hitVolume.userData.interactable=this,e.add(this.mesh)}getHitTargets(){return[this.hitVolume]}distanceTo(e){const t=this.mesh.position.x-e.x,n=this.mesh.position.z-e.z;return Math.hypot(t,n)}canInteract(e){return this.distanceTo(e)<=this.range}getSitPosition(e=.4){const t=this.mesh.position.clone(),n=.55;return t.x-=Math.sin(this.mesh.rotation.y)*n,t.z-=Math.cos(this.mesh.rotation.y)*n,t.y=e,t}interact(e){var r,a,o,l,c,h,d,u,f,g,_,m,p,y,b,x,R,A;const t=this.definition;if(t.shopId){(r=e.game)==null||r.openShop(t.shopId);return}if(t.id==="shrine"){const E=zv();(a=e.dialogue)==null||a._showToast(`⛩️ ${E}`),(l=(o=e.dialogue)==null?void 0:o.addJournalEntry)==null||l.call(o,"御神籤 · Fortune",E,"神社 · Shrine"),(h=(c=e.game)==null?void 0:c.mood)==null||h.boost(18,"Blessed ⛩️"),(u=(d=e.game)==null?void 0:d._updateMoodHUD)==null||u.call(d);return}const n=t.defaultAction??"interact",i=(f=t.actions)==null?void 0:f[n];if(i){if(i.sitDuration){const E=i.sitHeight??.4,I=this.getSitPosition(E);(_=(g=e.game)==null?void 0:g.playerRest)==null||_.call(g,i.sitDuration,I,{sitY:E,facing:this.mesh.rotation.y}),(p=(m=e.game)==null?void 0:m.mood)==null||p.boost(6,"Taking a rest"),(b=(y=e.game)==null?void 0:y._updateMoodHUD)==null||b.call(y)}(x=e.dialogue)==null||x._showToast(i.message),i.journal&&((A=(R=e.dialogue)==null?void 0:R.addJournalEntry)==null||A.call(R,i.journal.title,i.journal.body,t.label))}}}function Gv(s,e,t=0){const n={...Js.bench,defaultAction:"sit",hitRadius:1.4};return new sr(s,n,e,t)}function Vv(s,e,t="cherry_tree"){const n={...Js[t]??Js.cherry_tree,defaultAction:t==="shrine_tree"?"listen":"admire",hitRadius:1.8};return new sr(s,n,e,0)}function Wv(s,e,t=0){const n={...Js.shrine};return new sr(s,n,e,t)}function Xv(s,e,t,n,i){const r={id:`shop_${n}`,label:i,shopId:n,range:7,hitRadius:2.5};return new sr(s,r,e,t)}function jv(s,e,t=0){const n={...Js.vending};return new sr(s,n,e,t)}const qd={bookshop:{id:"bookshop",label:"書店 文房 · Bunbou Books",emoji:"📚",items:[{id:"townMap",name:"町の地図",nameEn:"Town Map",price:200,emoji:"🗺️",desc:"A hand-drawn map of every alley."},{id:"novel",name:"小説",nameEn:"Novel",price:350,emoji:"📖",desc:"A quiet seaside tale.",reward:{type:"journal",title:"小説を読んだ",body:"A slow story about a lighthouse keeper. You feel calm."}},{id:"postcard",name:"ポストカード",nameEn:"Postcard Set",price:150,emoji:"💌",desc:"Cherry blossom illustrations."}]},ramen:{id:"ramen",label:"麺処 山田 · Yamada Ramen",emoji:"🍜",items:[{id:"ramen",name:"ラーメン",nameEn:"Ramen Bowl",price:800,emoji:"🍜",desc:"Rich tonkotsu broth. Gives a short speed boost!",reward:{type:"speedBoost",amount:1.6,duration:14,message:"🍜 Energy surges through you!"}},{id:"gyoza",name:"餃子",nameEn:"Gyoza",price:400,emoji:"🥟",desc:"Crispy pan-fried dumplings."},{id:"greentea",name:"緑茶",nameEn:"Green Tea",price:150,emoji:"🍵",desc:"A calming cup."}]},florist:{id:"florist",label:"花屋 はな · Hana Florist",emoji:"🌸",items:[{id:"sakura",name:"桜の花束",nameEn:"Sakura Bouquet",price:600,emoji:"🌸",desc:"Delicate cherry blossoms."},{id:"wildflowers",name:"野花",nameEn:"Wildflowers",price:300,emoji:"💐",desc:"A mix of local wildflowers."},{id:"potplant",name:"観葉植物",nameEn:"Potted Plant",price:480,emoji:"🪴",desc:"A small fern to carry home."}]},cafe:{id:"cafe",label:"喫茶 木漏れ · Komorebi Cafe",emoji:"☕",items:[{id:"matcha",name:"抹茶ラテ",nameEn:"Matcha Latte",price:550,emoji:"🍵",desc:"Velvety and sweet."},{id:"coffee",name:"コーヒー",nameEn:"Coffee",price:450,emoji:"☕",desc:"A smooth morning cup."},{id:"wagashi",name:"和菓子",nameEn:"Wagashi",price:300,emoji:"🍡",desc:"Traditional mochi sweets."}]},market:{id:"market",label:"朝市 · Morning Market",emoji:"🛒",items:[{id:"onigiri",name:"おにぎり",nameEn:"Onigiri",price:180,emoji:"🍙",desc:"Rice ball with pickled plum."},{id:"mikan",name:"みかん",nameEn:"Mikan Oranges",price:200,emoji:"🍊",desc:"Sweet local oranges."},{id:"yakitori",name:"焼き鳥",nameEn:"Yakitori",price:250,emoji:"🍢",desc:"Skewered grilled chicken."}]},fishmarket:{id:"fishmarket",label:"魚屋 水樹 · Mizuki Fish",emoji:"🐟",items:[{id:"taiyaki",name:"たい焼き",nameEn:"Taiyaki",price:250,emoji:"🐟",desc:"Fish-shaped cake with sweet bean."},{id:"ikayaki",name:"イカ焼き",nameEn:"Grilled Squid",price:350,emoji:"🦑",desc:"Fresh off the harbor grill."},{id:"kanikama",name:"蟹かまぼこ",nameEn:"Crab Stick",price:200,emoji:"🦀",desc:"Local catch from the bay."}]},vending:{id:"vending",label:"自動販売機 · Vending Machine",emoji:"🥤",items:[{id:"cola",name:"コーラ",nameEn:"Cola",price:120,emoji:"🥤",desc:"Ice-cold soda."},{id:"juice",name:"ジュース",nameEn:"Juice",price:120,emoji:"🧃",desc:"Sweet fruit juice."},{id:"water",name:"水",nameEn:"Water",price:80,emoji:"💧",desc:"Pure mineral water."}]},bakery:{id:"bakery",label:"パン屋 小麦 · Komugi Bakery",emoji:"🍞",items:[{id:"melonpan",name:"メロンパン",nameEn:"Melon Pan",price:280,emoji:"🍞",desc:"Crispy sweet bread with melon aroma."},{id:"anpan",name:"あんパン",nameEn:"Anpan",price:220,emoji:"🥐",desc:"Soft bun filled with sweet red bean."},{id:"currypan",name:"カレーパン",nameEn:"Curry Pan",price:300,emoji:"🥖",desc:"Fried bread stuffed with mild curry."}]},teahouse:{id:"teahouse",label:"茶屋 静 · Shizuka Tea House",emoji:"🍵",items:[{id:"sencha",name:"煎茶",nameEn:"Sencha",price:400,emoji:"🍵",desc:"Freshly whisked green tea."},{id:"hojicha",name:"ほうじ茶",nameEn:"Hojicha",price:380,emoji:"🍵",desc:"Roasted tea with a nutty warmth."},{id:"dango",name:"団子",nameEn:"Dango Set",price:350,emoji:"🍡",desc:"Three sweet rice dumplings on a stick."}]},konbini:{id:"konbini",label:"コンビニ · Mini Mart",emoji:"🏪",items:[{id:"onigiri2",name:"おにぎり",nameEn:"Onigiri",price:150,emoji:"🍙",desc:"Salmon rice ball, ready to go."},{id:"bento",name:"弁当",nameEn:"Bento Box",price:650,emoji:"🍱",desc:"Today's special lunch box."},{id:"pocky",name:"ポッキー",nameEn:"Pocky",price:180,emoji:"🍫",desc:"Chocolate-dipped biscuit sticks."}]},sweets:{id:"sweets",label:"和菓子 花 · Hana Sweets",emoji:"🍡",items:[{id:"mochi",name:"大福",nameEn:"Daifuku",price:320,emoji:"🍡",desc:"Soft mochi wrapped around sweet bean."},{id:"dorayaki",name:"どら焼き",nameEn:"Dorayaki",price:280,emoji:"🥞",desc:"Pancake sandwich with red bean filling."},{id:"sakura2",name:"桜餅",nameEn:"Sakura Mochi",price:380,emoji:"🌸",desc:"Pink rice cake wrapped in a cherry leaf."}]}};function Yv(s,e,t=100){let n=0,i=1/0;for(let r=0;r<=t;r++){const a=r/t,l=s.getPointAt(a).distanceToSquared(e);l<i&&(i=l,n=a)}return n}const fo=[{tMax:.08,label:"静かな入口 · Town Entrance"},{tMax:.16,label:"本屋通り · Bookshop Row"},{tMax:.28,label:"桜通り · Sakura Street"},{tMax:.38,label:"鳥居坂 · Torii Slope"},{tMax:.48,label:"朝市 · Morning Market"},{tMax:.58,label:"神社の参道 · Shrine Approach"},{tMax:.68,label:"公園 · Town Park"},{tMax:.78,label:"港の見晴台 · Harbor View"},{tMax:.88,label:"漁港 · Fishing Port"},{tMax:.96,label:"海岸通り · Coastal Path"},{tMax:1,label:"岬の灯台 · Cape Outlook"}];class Yl{constructor(e){this.canvas=e,this.clock=new Pd,this.raycaster=new Hl,this.ready=!1,this.renderer=new ix({canvas:e,antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Gh,this.renderer.outputColorSpace=mt,this.renderer.toneMapping=Xn,this.scene=new Cf,this.scene.background=new ge(11066580),this.camera=new Xt(42,window.innerWidth/window.innerHeight,.1,280),this.input=new Jy(e),this.cameraTarget=new T,this._cameraSmoothed=new T,this.outfitOpen=!1,this.composer=new cx(this.renderer),this.composer.addPass(new hx(this.scene,this.camera)),this.composer.addPass(new ux),this._fxaaPass=new Bd(dx),this._fxaaPass.material.uniforms.resolution.value.set(1/(window.innerWidth*Math.min(window.devicePixelRatio,2)),1/(window.innerHeight*Math.min(window.devicePixelRatio,2))),this.composer.addPass(this._fxaaPass),window.addEventListener("resize",()=>this._onResize())}static async create(e,t){t==null||t("Initializing WebGL…");let n;try{n=new Yl(e)}catch(i){throw new Error(`WebGL failed: ${i.message}`)}try{t==null||t("Building town…"),n.modelLoader=new ty,await n.modelLoader.loadAll(void 0,t),$y(n.modelLoader),Av(n.modelLoader),n.town=new Py(n.scene,n.modelLoader),await n.town.build(t),n.path=n.town.getPath(),n.path.getClosestPointT=r=>Yv(n.path,r),t==null||t("Spawning characters…"),n.player=new ev(n.scene,n.path),n.player.colliderWorld=n.town.colliders,n.player.walkableCurves=n.town.getWalkableCurves(),n.player.mesh.traverse(r=>{r.userData.dynamic=!0});const i=n.path.getTangentAt(.05);n.input.cameraAngle=Math.atan2(-i.x,-i.z),n.npcs=[...lv,...hv].map(r=>new ov(n.scene,n.town.getPathForId(r.pathId),r)),n.npcs.forEach(r=>r.mesh.traverse(a=>{a.userData.dynamic=!0})),t==null||t("Spawning animals…"),n.animals=Ev.map(r=>new Ov(n.scene,n.town.getPathForId(r.pathId),r)),n.animals.forEach(r=>r.mesh.traverse(a=>{a.userData.dynamic=!0})),n.worldProps=[];for(const r of n.town.getInteractableSpawns()){const{propId:a,position:o,rotationY:l}=r;if(a==="bench")n.worldProps.push(Gv(n.scene,o,l));else if(a==="cherry_tree"||a==="shrine_tree")n.worldProps.push(Vv(n.scene,o,a));else if(a==="shrine")n.worldProps.push(Wv(n.scene,o,l));else if(a==="vending")n.worldProps.push(jv(n.scene,o,l));else if(a.startsWith("shop_")){const c=a.slice(5),h=qd[c];h&&n.worldProps.push(Xv(n.scene,o,l,c,h.label))}}return n.interactables=new gv,n.interactables.registerAll(n.npcs,n.animals,n.worldProps),n.scene.traverse(r=>{r.userData.dynamic||(r.updateMatrix(),r.matrixAutoUpdate=!1,r.isMesh&&(r.castShadow=!1,r.receiveShadow=!0))}),[...n.npcs,...n.animals].forEach(r=>{r.mesh.traverse(a=>{a.isMesh&&(a.castShadow=!0)})}),n.player.mesh.traverse(r=>{r.isMesh&&(r.castShadow=!0)}),n.ready=!0,n}catch(i){throw i}}initInteraction(e,t,n){var a;this.dialogue=e,this.petUI=t,this.shopUI=n,this.companion=null,this.petCompanion=null,this.yen=1e3,this.locationTag=document.getElementById("location-tag"),this.petTag=document.getElementById("pet-companion-tag"),this.petLabel=document.getElementById("pet-companion-label"),this.petPartBtn=document.getElementById("pet-companion-part"),e.setGame(this),e.onConversationEnd=()=>{var o;(o=this.mood)==null||o.boost(9,"Good chat!"),this._updateMoodHUD()},n&&(n.setGame(this),n.onPurchase=()=>{var o;(o=this.mood)==null||o.boost(7,"Treat yourself!"),this._updateMoodHUD()}),this.interaction=new pv(this.player,this.interactables,e,this,t,n),this.interaction.setRewardHandler(o=>this._handleReward(o)),t==null||t.setHandlers({onAction:(o,l)=>this._handlePetAction(o,l),onInvite:o=>this.setPetCompanion(o)}),(a=this.petPartBtn)==null||a.addEventListener("click",()=>this.clearPetCompanion()),this.yenEl=document.getElementById("yen-display"),this._updateYenHUD();const i=document.getElementById("minimap"),r=document.getElementById("minimap-wrap");i?(this.minimap=new wv(i,this.path,r,this.town.getWalkableCurves()),this.minimap.setPlayer(this.player),this.minimap.setNpcs(this.npcs),this.minimap.setAnimals(this.animals),this.minimap.setWorldProps(this.worldProps),this.minimap.update()):console.warn("Minimap: #minimap canvas not found in DOM"),this.mood=new Tv,this.moodEl=document.getElementById("mood-display"),this.moodBar=document.getElementById("mood-bar-fill"),this.moodFloat=document.getElementById("mood-float"),this.moodFloat&&this.mood.setFloatContainer(this.moodFloat),this._updateMoodHUD()}spendYen(e){this.yen=Math.max(0,this.yen-e),this._updateYenHUD()}earnYen(e){this.yen+=e,this._updateYenHUD()}_updateYenHUD(){this.yenEl&&(this.yenEl.textContent=`💴 ¥${this.yen}`)}_updateMoodHUD(){var t;if(!this.mood)return;const e=this.mood.getMood();this.moodEl&&(this.moodEl.textContent=`${e.emoji} ${e.name}`,this.moodEl.style.borderColor=e.color),this.moodBar&&(this.moodBar.style.width=`${this.mood.getPercent()}%`,this.moodBar.style.background=e.color),(t=this.player)!=null&&t.mesh&&e.expression&&zn(this.player.mesh,e.expression)}openShop(e){this.shopUI&&e&&this.shopUI.open(e)}playerRest(e,t,n={}){this.player.rest(e,t,n)}_handlePetAction(e,t){const n=e.applyAction(t);return n.message&&this.dialogue.showToast(n.message),n.isFriend&&t!=="shoo"&&this.dialogue.showToast(`${e.definition.name} seems to really like you! ♥`),this.mood&&(t==="pet"?this.mood.boost(10,"Petted a friend!"):t==="sit"?this.mood.boost(7,"Cozy moment"):t==="shoo"&&this.mood.drain(5),this._updateMoodHUD()),n}setCompanion(e){var t,n,i;this.companion&&this.companion!==e&&(this._removeCompanionRing(this.companion),this.companion.stopFollowing(!0)),this.companion=e,e.startFollowing(),this._addCompanionRing(e),this.dialogue.setCompanionTag(e),(t=this.minimap)==null||t.setCompanion(e),(i=(n=this.dialogue)._updateDialogueWalkButtons)==null||i.call(n)}clearCompanion(){var e,t,n;this.companion&&(this._removeCompanionRing(this.companion),this.companion.stopFollowing(!0),this.companion=null,this.dialogue.setCompanionTag(null),(e=this.minimap)==null||e.setCompanion(null),(n=(t=this.dialogue)._updateDialogueWalkButtons)==null||n.call(t))}_addCompanionRing(e){if(e.mesh.userData.companionRing){e.mesh.userData.companionRing.visible=!0;return}const t=new ee(new ci(.52,.045,6,24),new dt({color:6351064,transparent:!0,opacity:.82}));t.rotation.x=Math.PI/2,t.position.y=.06,e.mesh.add(t),e.mesh.userData.companionRing=t}_removeCompanionRing(e){var n,i;const t=(i=(n=e.mesh)==null?void 0:n.userData)==null?void 0:i.companionRing;t&&(t.visible=!1)}setPetCompanion(e){var t,n,i;this.petCompanion&&this.petCompanion!==e&&this.petCompanion.stopFollowing(!0),this.petCompanion=e,(t=this.minimap)==null||t.setPetCompanion(e),(n=this.mood)==null||n.boost(12,`${e.definition.name} joined!`),this._updateMoodHUD(),e.startFollowing(),this._setPetCompanionTag(e),this.dialogue.showToast(((i=e.definition.reactions)==null?void 0:i.friend)??`${e.definition.name} is following you!`)}clearPetCompanion(){this.petCompanion&&(this.petCompanion.stopFollowing(!0),this.petCompanion=null,this._setPetCompanionTag(null),this.dialogue.showToast("Your pet friend headed home."))}_setPetCompanionTag(e){this.petTag&&(e?(this.petLabel&&(this.petLabel.textContent=`${e.definition.emoji} ${e.definition.name} is following`),this.petTag.classList.remove("hidden")):this.petTag.classList.add("hidden"))}_handleReward(e){var t,n,i,r,a,o,l;e.type==="speedBoost"?(this.player.applySpeedBoost(e.amount,e.duration),e.message&&((t=this.dialogue)==null||t.showToast(e.message)),(n=this.mood)==null||n.boost(6,"Energy boost!")):e.type==="companion"?(this.setCompanion(e.npc),(i=this.mood)==null||i.boost(14,"New friend!")):e.type==="dismissCompanion"?(this.clearCompanion(),(r=this.mood)==null||r.drain(4)):e.type==="journal"&&((o=(a=this.dialogue)==null?void 0:a.addJournalEntry)==null||o.call(a,e.title,e.body,"購入 · Purchase"),(l=this.mood)==null||l.boost(8,"Memory made"))}_updateLocationTag(){if(!this.locationTag||!this.path)return;const e=this.path.getClosestPointT(this.player.position),t=fo.find(n=>e<=n.tMax)??fo[fo.length-1];this.locationTag.textContent=t.label}_onResize(){var r;const e=window.innerWidth,t=window.innerHeight,n=Math.min(window.devicePixelRatio,2);this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),this.composer.setSize(e,t),this._fxaaPass&&this._fxaaPass.material.uniforms.resolution.value.set(1/(e*n),1/(t*n));const i=document.getElementById("minimap-wrap");(r=this.minimap)!=null&&r.resize&&i&&this.minimap.resize(i.clientWidth)}_updateCamera(){if(!this.player)return;const e=this.player.position,t=this.input.cameraAngle,n=this.input.cameraPitch,i=this.input.cameraDistance,r=1.95,a=e.clone().add(new T(0,r,0));this.cameraTarget.lerp(a,.22);const o=i*Math.cos(n),l=new T(Math.sin(t)*o,Math.sin(n)*i+i*.08,Math.cos(t)*o),c=this.cameraTarget.clone().add(l);this._cameraSmoothed.lengthSq()<.001?this._cameraSmoothed.copy(c):this._cameraSmoothed.lerp(c,.22),this.camera.position.copy(this._cameraSmoothed),this.camera.lookAt(this.cameraTarget)}update(){var n,i,r,a,o,l,c,h,d,u,f;if(!this.ready)return;const e=Math.min(this.clock.getDelta(),.05);this.input.update();const t=((n=this.interaction)==null?void 0:n.isBlocking())??((i=this.dialogue)==null?void 0:i.isBlocking())??((r=this.shopUI)==null?void 0:r.isOpen())??this.outfitOpen??!1;if(this.input.dialogueOpen=t,this.input.outfitOpen=this.outfitOpen,t?this.dialogue.isOpen()?(this.input.consumeKey("KeyE")||this.input.consumeKey("Space")||this.input.consumeKey("Enter"))&&this.dialogue.tryAdvanceFromKey():this.dialogue.approachOpen&&((this.input.consumeKey("KeyE")||this.input.consumeKey("Enter"))&&this.dialogue._onChatClicked(),this.input.consumeKey("KeyW")&&(this.input.keys.AltLeft||this.input.keys.AltRight)&&this.dialogue._onWalkClicked(),(this.input.consumeKey("KeyX")||this.input.consumeKey("Backspace"))&&(this.companion&&((a=this.dialogue.npc)!=null&&a.isCompanion)?this.dialogue._onPartClicked():this.dialogue._onIgnoreClicked())):(o=this.interaction)==null||o.update(this.input,this.camera,this.canvas),this.player.update(this.input,e,this.town.getGroundMeshes()),this.npcs.forEach(g=>g.update(e,this.player.position,this.player.facing)),(h=(c=(l=this.companion)==null?void 0:l.mesh)==null?void 0:c.userData)!=null&&h.companionRing){const g=this.companion.mesh.userData.companionRing;g.material.opacity=.5+Math.sin(this.clock.elapsedTime*3)*.3,g.rotation.z+=e*.8}if((d=this.animals)==null||d.forEach(g=>g.update(e,this.player.position,this.player.facing)),this._updateLocationTag(),this.mood&&(this.mood.update(e),this._updateMoodHUD()),this.minimap&&this.interactables&&this.player&&this.minimap.setNearbyInteractables(this.interactables.findAllInRange(this.player.position,20)),(u=this.minimap)==null||u.update(),this.town.update(this.clock.elapsedTime),(f=this.town)!=null&&f.sun&&this.player){const g=this.player.position;this.town.sun.position.set(g.x+18,28,g.z+12),this.town.sun.target.position.set(g.x,0,g.z),this.town.sun.target.updateMatrixWorld()}this._updateCamera(),this.input.endFrame()}render(){this.composer.render()}start(){const e=()=>{requestAnimationFrame(e),this.update(),this.render()};e()}}class Kv{constructor(e){var t,n,i,r,a;this.modal=e.modal,this.portrait=e.portrait,this.nameEl=e.name,this.personalityEl=e.personality,this.heartsEl=e.hearts,this.petBtn=e.petBtn,this.sitBtn=e.sitBtn,this.shooBtn=e.shooBtn,this.leaveBtn=e.leaveBtn,this.inviteBtn=e.inviteBtn,this.animal=null,this.open=!1,this.onAction=null,this.onInvite=null,(t=this.petBtn)==null||t.addEventListener("click",()=>this._action("pet")),(n=this.sitBtn)==null||n.addEventListener("click",()=>this._action("sit")),(i=this.shooBtn)==null||i.addEventListener("click",()=>this._action("shoo")),(r=this.leaveBtn)==null||r.addEventListener("click",()=>this.hide()),(a=this.inviteBtn)==null||a.addEventListener("click",()=>this._invite())}setHandlers({onAction:e,onInvite:t}){this.onAction=e,this.onInvite=t}isOpen(){return this.open}show(e){!e||!this.modal||(this.animal=e,this.open=!0,this._render(),this.modal.classList.remove("hidden"))}hide(){var e;this.open=!1,this.animal=null,(e=this.modal)==null||e.classList.add("hidden")}_render(){var i;const e=this.animal;if(!e)return;const t=e.definition;this.portrait.textContent=t.emoji,this.nameEl.textContent=`${t.nameJa} · ${t.name}`,this.personalityEl.textContent=`${t.species} · ${t.personality}`,this._renderHearts(e.affinity);const n=e.affinity>=Kd;(i=this.inviteBtn)==null||i.classList.toggle("hidden",!n||e.isPetCompanion),n&&!e.isPetCompanion&&(this.inviteBtn.textContent=`🐾 Invite ${t.name} to follow`)}_renderHearts(e){if(!this.heartsEl)return;const t=Math.floor(e/20);this.heartsEl.innerHTML="";for(let n=0;n<5;n++){const i=document.createElement("span");i.className="pet-heart"+(n<t?" filled":""),i.textContent=n<t?"♥":"♡",this.heartsEl.appendChild(i)}}_action(e){var t,n,i,r,a;this.animal&&((t=this.onAction)==null||t.call(this,this.animal,e),e==="pet"?(i=(n=this.animal).spawnHearts)==null||i.call(n,5,"#ff4488"):e==="sit"?(a=(r=this.animal).spawnHearts)==null||a.call(r,2,"#ffcc00"):e==="shoo"&&setTimeout(()=>this.hide(),500),this._render())}_invite(){var e;this.animal&&((e=this.onInvite)==null||e.call(this,this.animal),this.hide())}refresh(){this.open&&this.animal&&this._render()}}class qv{constructor(e,t){var n,i;this.modal=e.modal,this.portrait=e.portrait,this.nameEl=e.name,this.yenEl=e.yen,this.itemsEl=e.items,this.closeBtn=e.closeBtn,this.catalog=t,this._open=!1,this._game=null,this._currentShop=null,(n=this.closeBtn)==null||n.addEventListener("click",()=>this.close()),(i=this.modal)==null||i.addEventListener("click",r=>{r.target===this.modal&&this.close()})}setGame(e){this._game=e}isOpen(){return this._open}open(e){var n;const t=this.catalog[e];t&&(this._currentShop=t,this._open=!0,this.portrait&&(this.portrait.textContent=t.emoji),this.nameEl&&(this.nameEl.textContent=t.label),this._refreshYen(),this._renderItems(t),(n=this.modal)==null||n.classList.remove("hidden"))}close(){var e;this._open=!1,this._currentShop=null,(e=this.modal)==null||e.classList.add("hidden")}_refreshYen(){this.yenEl&&this._game&&(this.yenEl.textContent=`💴 ¥${this._game.yen}`)}_renderItems(e){this.itemsEl&&(this.itemsEl.innerHTML="",e.items.forEach(t=>{const n=!this._game||this._game.yen>=t.price,i=document.createElement("div");i.className="shop-item",i.innerHTML=`
        <div class="shop-item-left">
          <span class="shop-item-emoji">${t.emoji}</span>
          <div class="shop-item-info">
            <div class="shop-item-name">${t.nameEn} <span class="shop-item-ja">${t.name}</span></div>
            <div class="shop-item-desc">${t.desc}</div>
          </div>
        </div>
        <button class="shop-buy-btn${n?"":" disabled"}" ${n?"":"disabled"}>
          ¥${t.price}
        </button>
      `,i.querySelector(".shop-buy-btn").addEventListener("click",()=>this._buy(t)),this.itemsEl.appendChild(i)}))}_buy(e){var t,n,i;if(this._game){if(this._game.yen<e.price){(t=this._game.dialogue)==null||t.showToast("お金が足りない · Not enough yen!");return}this._game.spendYen(e.price),(n=this._game.dialogue)==null||n.showToast(`${e.emoji} ${e.nameEn} — ¥${e.price} spent!`),e.reward&&this._game._handleReward(e.reward),(i=this.onPurchase)==null||i.call(this),this._refreshYen(),this._currentShop&&this._renderItems(this._currentShop)}}}const Gr=[{key:"character_female_a",label:"Mage"},{key:"character_female_a",label:"Arcane Mage",tint:8921292,tintStrength:.45},{key:"character_female_a",label:"Ice Mage",tint:2142463,tintStrength:.45},{key:"character_female_a",label:"Fire Mage",tint:16726016,tintStrength:.48},{key:"character_female_a",label:"Nature Druid",tint:3713088,tintStrength:.45},{key:"character_female_b",label:"Rogue"},{key:"character_female_b",label:"Shadow Rogue",tint:1579066,tintStrength:.6},{key:"character_female_b",label:"Forest Scout",tint:3832368,tintStrength:.42},{key:"character_female_b",label:"Crimson Thief",tint:13377568,tintStrength:.45},{key:"character_female_c",label:"Wanderer"},{key:"character_female_c",label:"Desert Wanderer",tint:13668400,tintStrength:.42},{key:"character_female_c",label:"Sea Wanderer",tint:1609920,tintStrength:.42},{key:"character_male_a",label:"Knight"},{key:"character_male_a",label:"Paladin",tint:15779872,tintStrength:.42},{key:"character_male_a",label:"Dark Knight",tint:2099240,tintStrength:.6},{key:"character_male_a",label:"Iron Guard",tint:6320256,tintStrength:.45},{key:"character_male_b",label:"Barbarian"},{key:"character_male_b",label:"Berserker",tint:13113368,tintStrength:.45},{key:"character_male_b",label:"Thunder Chief",tint:2121936,tintStrength:.42},{key:"character_male_c",label:"Duelist"},{key:"character_male_c",label:"Night Stalker",tint:1054768,tintStrength:.6},{key:"character_male_c",label:"Golden Blade",tint:15249440,tintStrength:.45}],Vr=[{tint:null,label:"Default"},{tint:15781984,label:"Sunny"},{tint:15235192,label:"Coral"},{tint:7911656,label:"Sky"},{tint:8964216,label:"Mint"},{tint:13138152,label:"Lilac"},{tint:2105376,label:"Obsidian"}],Wr=[{id:"none",label:"None"},{id:"class_hat",label:"Class Hat"},{id:"tophat",label:"Top Hat"},{id:"witchhat",label:"Witch Hat"},{id:"crown",label:"Crown"},{id:"flowerCrown",label:"Flower Crown"},{id:"halo",label:"Halo"},{id:"catears",label:"Cat Ears"},{id:"beret",label:"Beret"},{id:"piratecap",label:"Pirate Cap"}],po=[{label:"Classic",tint:null},{label:"Golden",tint:15781984},{label:"White",tint:15790320},{label:"Dark",tint:2763306},{label:"Red",tint:15224912}];class $v{constructor(e,t){var n;this.modal=e.modal,this.closeBtn=e.closeBtn,this.modelLabel=e.modelLabel,this.accentLabel=e.accentLabel,this.hatLabel=e.hatLabel,this.shoesLabel=e.shoesLabel,this.game=t,this.indices={model:0,accent:0,hat:0,shoes:0},this.open=!1,(n=this.closeBtn)==null||n.addEventListener("click",()=>this.hide()),this._wirePair("model",e.modelPrev,e.modelNext,Gr),this._wirePair("accent",e.accentPrev,e.accentNext,Vr),this._wirePair("hat",e.hatPrev,e.hatNext,Wr),this._wirePair("shoes",e.shoesPrev,e.shoesNext,po)}_wirePair(e,t,n,i){t==null||t.addEventListener("click",()=>this._cycle(e,i,-1)),n==null||n.addEventListener("click",()=>this._cycle(e,i,1))}_cycle(e,t,n){this.indices[e]=(this.indices[e]+n+t.length)%t.length,this._applyOutfit(),this._updateLabels()}_applyOutfit(){var l;const e=Gr[this.indices.model],t=Vr[this.indices.accent],n=Wr[this.indices.hat],i=po[this.indices.shoes];let r,a;t.tint!==null?(r=t.tint,a=.3):i.tint!==null?(r=i.tint,a=.22):(r=e.tint??null,a=e.tintStrength??.22);const o=(l=this.game)==null?void 0:l.player;o&&(o.setOutfit({modelKey:e.key,tint:r,tintStrength:a}),Yd(o.mesh,n.id))}_updateLabels(){this.modelLabel&&(this.modelLabel.textContent=Gr[this.indices.model].label),this.accentLabel&&(this.accentLabel.textContent=Vr[this.indices.accent].label),this.hatLabel&&(this.hatLabel.textContent=Wr[this.indices.hat].label),this.shoesLabel&&(this.shoesLabel.textContent=po[this.indices.shoes].label)}_syncFromPlayer(){var a,o,l,c,h,d;const e=(o=(a=this.game)==null?void 0:a.player)==null?void 0:o.outfit;if(!e)return;const t=Gr.findIndex(u=>u.key===e.modelKey);t>=0&&(this.indices.model=t);const n=Vr.findIndex(u=>u.tint===e.tint);n>=0&&(this.indices.accent=n);const i=((d=(h=(c=(l=this.game)==null?void 0:l.player)==null?void 0:c.mesh)==null?void 0:h.userData)==null?void 0:d.accessoryId)??"none",r=Wr.findIndex(u=>u.id===i);r>=0&&(this.indices.hat=r),this._updateLabels()}show(){this.modal&&(this.open=!0,this._syncFromPlayer(),this.modal.classList.remove("hidden"),this.game&&(this.game.outfitOpen=!0,this._savedCamera={angle:this.game.input.cameraAngle,pitch:this.game.input.cameraPitch,distance:this.game.input.cameraDistance},this.game.input.cameraPitch=.38,this.game.input.cameraDistance=3.8,this.game.input.cameraAngle=this.game.player.facing+Math.PI))}hide(){var e;this.open=!1,(e=this.modal)==null||e.classList.add("hidden"),this.game&&(this.game.outfitOpen=!1,this._savedCamera&&(this.game.input.cameraAngle=this._savedCamera.angle,this.game.input.cameraPitch=this._savedCamera.pitch,this.game.input.cameraDistance=this._savedCamera.distance))}isOpen(){return this.open}toggle(){this.open?this.hide():this.show()}}const Jv=document.getElementById("game-canvas"),Zv=document.getElementById("loading"),es=document.querySelector(".loading-sub"),ts=document.querySelector(".loading-fill"),Qv=document.getElementById("menu-btn"),eM=document.getElementById("close-menu"),mo=document.getElementById("menu-panel"),go=document.getElementById("music-btn"),tM=document.getElementById("custom-btn");function _o(s,e){es&&(es.textContent=s),ts&&(ts.style.width=`${e}%`)}function xo(s){es&&(es.textContent=s,es.style.maxWidth="320px",es.style.lineHeight="1.5"),ts!=null&&ts.parentElement&&(ts.parentElement.style.display="none")}async function nM(){var e;if(window.location.protocol==="file:")return;window.addEventListener("error",t=>{xo(`Error: ${t.message}. Check the browser console (F12).`)});let s;try{_o("Starting…",15),s=await Yl.create(Jv,t=>_o(t,40+Math.random()*40)),_o("Ready!",100),window.__gameBooted=!0,await new Promise(t=>setTimeout(t,200)),Zv.classList.add("hidden");try{iM(s),s.start()}catch(t){console.error("Failed to start UI:",t),xo(`UI failed: ${t.message}. Check the browser console (F12).`)}}catch(t){console.error("Failed to start game:",t),window.__gameBooted=!0,xo((e=t==null?void 0:t.message)!=null&&e.includes("WebGL")?"WebGL is not available. Try Chrome or Firefox, or enable hardware acceleration.":`Could not start: ${t.message}. Run npm run dev, then open http://localhost:5173`)}}function iM(s){var r;const e=new uv({box:document.getElementById("dialogue-box"),approachModal:document.getElementById("approach-modal"),approachPortrait:document.getElementById("approach-portrait"),approachName:document.getElementById("approach-name"),approachPersonality:document.getElementById("approach-personality"),approachTagline:document.getElementById("approach-tagline"),approachChatBtn:document.getElementById("approach-chat"),approachWalkBtn:document.getElementById("approach-walk"),approachPartBtn:document.getElementById("approach-part"),approachIgnoreBtn:document.getElementById("approach-ignore"),companionTag:document.getElementById("companion-tag"),companionLabel:document.getElementById("companion-label"),companionPartBtn:document.getElementById("companion-part"),name:document.getElementById("dialogue-name"),personality:document.getElementById("dialogue-personality"),text:document.getElementById("dialogue-text"),expression:document.getElementById("dialogue-expression"),portrait:document.getElementById("dialogue-portrait"),next:document.getElementById("dialogue-next"),choices:document.getElementById("dialogue-choices"),toast:document.getElementById("reward-toast"),journalPanel:document.getElementById("journal-panel"),journalList:document.getElementById("journal-list"),journalBtn:document.getElementById("journal-btn"),closeJournalBtn:document.getElementById("close-journal"),interactHint:document.getElementById("interact-hint"),continueHint:document.getElementById("speech-continue"),dialogueWalkBtn:document.getElementById("dialogue-walk"),dialogueStopWalkBtn:document.getElementById("dialogue-stop-walk")});e._updateJournalUI();const t=new Kv({modal:document.getElementById("pet-modal"),portrait:document.getElementById("pet-portrait"),name:document.getElementById("pet-name"),personality:document.getElementById("pet-personality"),hearts:document.getElementById("pet-hearts"),petBtn:document.getElementById("pet-action-pet"),sitBtn:document.getElementById("pet-action-sit"),shooBtn:document.getElementById("pet-action-shoo"),leaveBtn:document.getElementById("pet-action-leave"),inviteBtn:document.getElementById("pet-action-invite")}),n=new qv({modal:document.getElementById("shop-modal"),portrait:document.getElementById("shop-portrait"),name:document.getElementById("shop-name"),yen:document.getElementById("shop-yen"),items:document.getElementById("shop-items"),closeBtn:document.getElementById("shop-close")},qd);s.initInteraction(e,t,n);const i=new $v({modal:document.getElementById("outfit-modal"),closeBtn:document.getElementById("outfit-close"),modelLabel:document.getElementById("outfit-model-label"),accentLabel:document.getElementById("outfit-accent-label"),hatLabel:document.getElementById("outfit-hat-label"),shoesLabel:document.getElementById("outfit-shoes-label"),modelPrev:document.getElementById("outfit-model-prev"),modelNext:document.getElementById("outfit-model-next"),accentPrev:document.getElementById("outfit-accent-prev"),accentNext:document.getElementById("outfit-accent-next"),hatPrev:document.getElementById("outfit-hat-prev"),hatNext:document.getElementById("outfit-hat-next"),shoesPrev:document.getElementById("outfit-shoes-prev"),shoesNext:document.getElementById("outfit-shoes-next")},s);s.outfitUI=i,(r=e.continueHint)==null||r.addEventListener("click",()=>e.advance()),Qv.addEventListener("click",()=>mo.classList.remove("hidden")),eM.addEventListener("click",()=>mo.classList.add("hidden")),go.addEventListener("click",()=>{s.isMusicPlaying=!s.isMusicPlaying,go.textContent=s.isMusicPlaying?"♫":"♪",go.style.background=s.isMusicPlaying?"#d0ecec":""}),tM.addEventListener("click",()=>{i.toggle()}),document.addEventListener("keydown",a=>{var o,l,c,h,d;if(a.code==="Escape"&&(i.isOpen()?i.hide():(o=s.shopUI)!=null&&o.isOpen()?s.shopUI.close():(l=s.petUI)!=null&&l.isOpen()?s.petUI.hide():(c=s.dialogue)!=null&&c.isOpen()?s.dialogue.close():(h=s.dialogue)!=null&&h.approachOpen?s.dialogue._onIgnoreClicked():document.getElementById("journal-panel").classList.contains("hidden")?mo.classList.toggle("hidden"):document.getElementById("journal-panel").classList.add("hidden")),(d=s.dialogue)!=null&&d.isOpen()&&/^Digit[1-9]$/.test(a.code)){const u=parseInt(a.code.replace("Digit",""),10)-1,f=document.querySelectorAll(".dialogue-choice");f[u]&&f[u].click()}})}nM();
