(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const al="175",Wu=0,Wl=1,Xu=2,Rh=1,Ih=2,Bn=3,En=0,zt=1,gn=2,Vn=0,Ji=1,Xl=2,jl=3,Kl=4,ju=5,Mi=100,Ku=101,Yu=102,qu=103,$u=104,Zu=200,Ju=201,Qu=202,ed=203,oo=204,lo=205,td=206,nd=207,id=208,sd=209,rd=210,ad=211,od=212,ld=213,cd=214,co=0,ho=1,uo=2,ts=3,fo=4,po=5,mo=6,go=7,Ph=0,hd=1,ud=2,Wn=0,Lh=1,Dh=2,Nh=3,Uh=4,Fh=5,kh=6,Bh=7,Yl="attached",dd="detached",Oh=300,ns=301,is=302,_o=303,xo=304,ea=306,wi=1e3,si=1001,Yr=1002,Ut=1003,zh=1004,Is=1005,Qt=1006,Or=1007,Hn=1008,jn=1009,Hh=1010,Gh=1011,ks=1012,ol=1013,Ti=1014,xn=1015,hs=1016,ll=1017,cl=1018,Bs=1020,Vh=35902,Wh=1021,Xh=1022,cn=1023,jh=1024,Kh=1025,Os=1026,zs=1027,hl=1028,ul=1029,Yh=1030,dl=1031,fl=1033,zr=33776,Hr=33777,Gr=33778,Vr=33779,yo=35840,vo=35841,Mo=35842,So=35843,bo=36196,wo=37492,To=37496,Eo=37808,Ao=37809,Co=37810,Ro=37811,Io=37812,Po=37813,Lo=37814,Do=37815,No=37816,Uo=37817,Fo=37818,ko=37819,Bo=37820,Oo=37821,Wr=36492,zo=36494,Ho=36495,qh=36283,Go=36284,Vo=36285,Wo=36286,$h=2200,Zh=2201,fd=2202,Hs=2300,Gs=2301,oa=2302,Ki=2400,Yi=2401,qr=2402,pl=2500,pd=2501,md=0,Jh=1,Xo=2,gd=3200,_d=3201,ml=0,xd=1,ii="",xt="srgb",jt="srgb-linear",$r="linear",ot="srgb",Ci=7680,ql=519,yd=512,vd=513,Md=514,Qh=515,Sd=516,bd=517,wd=518,Td=519,jo=35044,$l="300 es",Gn=2e3,Zr=2001;class Ei{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Zl=1234567;const Ds=Math.PI/180,ss=180/Math.PI;function yn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Bt[s&255]+Bt[s>>8&255]+Bt[s>>16&255]+Bt[s>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[t&63|128]+Bt[t>>8&255]+"-"+Bt[t>>16&255]+Bt[t>>24&255]+Bt[n&255]+Bt[n>>8&255]+Bt[n>>16&255]+Bt[n>>24&255]).toLowerCase()}function He(s,e,t){return Math.max(e,Math.min(t,s))}function gl(s,e){return(s%e+e)%e}function Ed(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Ad(s,e,t){return s!==e?(t-s)/(e-s):0}function Ns(s,e,t){return(1-t)*s+t*e}function Cd(s,e,t,n){return Ns(s,e,1-Math.exp(-t*n))}function Rd(s,e=1){return e-Math.abs(gl(s,e*2)-e)}function Id(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Pd(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Ld(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Dd(s,e){return s+Math.random()*(e-s)}function Nd(s){return s*(.5-Math.random())}function Ud(s){s!==void 0&&(Zl=s);let e=Zl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Fd(s){return s*Ds}function kd(s){return s*ss}function Bd(s){return(s&s-1)===0&&s!==0}function Od(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function zd(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Hd(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":s.set(o*h,l*u,l*d,o*c);break;case"YZY":s.set(l*d,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*d,o*h,o*c);break;case"XZX":s.set(o*h,l*g,l*f,o*c);break;case"YXY":s.set(l*f,o*h,l*g,o*c);break;case"ZYZ":s.set(l*g,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function _n(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function lt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Yt={DEG2RAD:Ds,RAD2DEG:ss,generateUUID:yn,clamp:He,euclideanModulo:gl,mapLinear:Ed,inverseLerp:Ad,lerp:Ns,damp:Cd,pingpong:Rd,smoothstep:Id,smootherstep:Pd,randInt:Ld,randFloat:Dd,randFloatSpread:Nd,seededRandom:Ud,degToRad:Fd,radToDeg:kd,isPowerOfTwo:Bd,ceilPowerOfTwo:Od,floorPowerOfTwo:zd,setQuaternionFromProperEuler:Hd,normalize:lt,denormalize:_n};class Re{constructor(e=0,t=0){Re.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(He(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Be{constructor(e,t,n,i,r,a,o,l,c){Be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],b=i[1],w=i[4],M=i[7],R=i[2],C=i[5],A=i[8];return r[0]=a*_+o*b+l*R,r[3]=a*m+o*w+l*C,r[6]=a*p+o*M+l*A,r[1]=c*_+h*b+u*R,r[4]=c*m+h*w+u*C,r[7]=c*p+h*M+u*A,r[2]=d*_+f*b+g*R,r[5]=d*m+f*w+g*C,r[8]=d*p+f*M+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,g=t*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(i*c-h*n)*_,e[2]=(o*n-i*a)*_,e[3]=d*_,e[4]=(h*t-i*l)*_,e[5]=(i*r-o*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(la.makeScale(e,t)),this}rotate(e){return this.premultiply(la.makeRotation(-e)),this}translate(e,t){return this.premultiply(la.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const la=new Be;function eu(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Vs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Gd(){const s=Vs("canvas");return s.style.display="block",s}const Jl={};function Xr(s){s in Jl||(Jl[s]=!0,console.warn(s))}function Vd(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Wd(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Xd(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ql=new Be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ec=new Be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function jd(){const s={enabled:!0,workingColorSpace:jt,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ot&&(i.r=Xn(i.r),i.g=Xn(i.g),i.b=Xn(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ot&&(i.r=Qi(i.r),i.g=Qi(i.g),i.b=Qi(i.b))),i},fromWorkingColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},toWorkingColorSpace:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ii?$r:this.spaces[i].transfer},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[jt]:{primaries:e,whitePoint:n,transfer:$r,toXYZ:Ql,fromXYZ:ec,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:xt},outputColorSpaceConfig:{drawingBufferColorSpace:xt}},[xt]:{primaries:e,whitePoint:n,transfer:ot,toXYZ:Ql,fromXYZ:ec,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:xt}}}),s}const Ke=jd();function Xn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Qi(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ri;class Kd{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ri===void 0&&(Ri=Vs("canvas")),Ri.width=e.width,Ri.height=e.height;const i=Ri.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ri}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Vs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Xn(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Xn(t[n]/255)*255):t[n]=Xn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Yd=0;class _l{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Yd++}),this.uuid=yn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(ca(i[a].image)):r.push(ca(i[a]))}else r=ca(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function ca(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Kd.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let qd=0;class Tt extends Ei{constructor(e=Tt.DEFAULT_IMAGE,t=Tt.DEFAULT_MAPPING,n=si,i=si,r=Qt,a=Hn,o=cn,l=jn,c=Tt.DEFAULT_ANISOTROPY,h=ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qd++}),this.uuid=yn(),this.name="",this.source=new _l(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Re(0,0),this.repeat=new Re(1,1),this.center=new Re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Oh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wi:e.x=e.x-Math.floor(e.x);break;case si:e.x=e.x<0?0:1;break;case Yr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wi:e.y=e.y-Math.floor(e.y);break;case si:e.y=e.y<0?0:1;break;case Yr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Tt.DEFAULT_IMAGE=null;Tt.DEFAULT_MAPPING=Oh;Tt.DEFAULT_ANISOTROPY=1;class nt{constructor(e=0,t=0,n=0,i=1){nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(c+1)/2,M=(f+1)/2,R=(p+1)/2,C=(h+d)/4,A=(u+_)/4,L=(g+m)/4;return w>M&&w>R?w<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(w),i=C/n,r=A/n):M>R?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=C/i,r=L/i):R<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(R),n=A/r,i=L/r),this.set(n,i,r,t),this}let b=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(u-_)/b,this.z=(d-h)/b,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this.z=He(this.z,e.z,t.z),this.w=He(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this.z=He(this.z,e,t),this.w=He(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $d extends Ei{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new nt(0,0,e,t),this.scissorTest=!1,this.viewport=new nt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Tt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new _l(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ai extends $d{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class tu extends Tt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Zd extends Tt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=r[a+0],f=r[a+1],g=r[a+2],_=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(u!==_||l!==d||c!==f||h!==g){let m=1-o;const p=l*d+c*f+h*g+u*_,b=p>=0?1:-1,w=1-p*p;if(w>Number.EPSILON){const R=Math.sqrt(w),C=Math.atan2(R,p*b);m=Math.sin(m*C)/R,o=Math.sin(o*C)/R}const M=o*b;if(l=l*m+d*M,c=c*m+f*M,h=h*m+g*M,u=u*m+_*M,m===1-o){const R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-o*f,e[t+2]=c*g+h*f+o*d-l*u,e[t+3]=h*g-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),d=l(n/2),f=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-i)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(He(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class E{constructor(e=0,t=0,n=0){E.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(tc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(tc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-r*i),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=i+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this.z=He(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this.z=He(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ha.copy(this).projectOnVector(e),this.sub(ha)}reflect(e){return this.sub(ha.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(He(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ha=new E,tc=new vn;class Mn{constructor(e=new E(1/0,1/0,1/0),t=new E(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(fn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(fn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=fn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,fn):fn.fromBufferAttribute(r,a),fn.applyMatrix4(e.matrixWorld),this.expandByPoint(fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),tr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),tr.copy(n.boundingBox)),tr.applyMatrix4(e.matrixWorld),this.union(tr)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,fn),fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(gs),nr.subVectors(this.max,gs),Ii.subVectors(e.a,gs),Pi.subVectors(e.b,gs),Li.subVectors(e.c,gs),Kn.subVectors(Pi,Ii),Yn.subVectors(Li,Pi),ui.subVectors(Ii,Li);let t=[0,-Kn.z,Kn.y,0,-Yn.z,Yn.y,0,-ui.z,ui.y,Kn.z,0,-Kn.x,Yn.z,0,-Yn.x,ui.z,0,-ui.x,-Kn.y,Kn.x,0,-Yn.y,Yn.x,0,-ui.y,ui.x,0];return!ua(t,Ii,Pi,Li,nr)||(t=[1,0,0,0,1,0,0,0,1],!ua(t,Ii,Pi,Li,nr))?!1:(ir.crossVectors(Kn,Yn),t=[ir.x,ir.y,ir.z],ua(t,Ii,Pi,Li,nr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ln),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ln=[new E,new E,new E,new E,new E,new E,new E,new E],fn=new E,tr=new Mn,Ii=new E,Pi=new E,Li=new E,Kn=new E,Yn=new E,ui=new E,gs=new E,nr=new E,ir=new E,di=new E;function ua(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){di.fromArray(s,r);const o=i.x*Math.abs(di.x)+i.y*Math.abs(di.y)+i.z*Math.abs(di.z),l=e.dot(di),c=t.dot(di),h=n.dot(di);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Jd=new Mn,_s=new E,da=new E;class Rn{constructor(e=new E,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Jd.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_s.subVectors(e,this.center);const t=_s.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(_s,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(da.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_s.copy(e.center).add(da)),this.expandByPoint(_s.copy(e.center).sub(da))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Dn=new E,fa=new E,sr=new E,qn=new E,pa=new E,rr=new E,ma=new E;class js{constructor(e=new E,t=new E(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Dn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Dn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Dn.copy(this.origin).addScaledVector(this.direction,t),Dn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){fa.copy(e).add(t).multiplyScalar(.5),sr.copy(t).sub(e).normalize(),qn.copy(this.origin).sub(fa);const r=e.distanceTo(t)*.5,a=-this.direction.dot(sr),o=qn.dot(this.direction),l=-qn.dot(sr),c=qn.lengthSq(),h=Math.abs(1-a*a);let u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(fa).addScaledVector(sr,d),f}intersectSphere(e,t){Dn.subVectors(e.center,this.origin);const n=Dn.dot(this.direction),i=Dn.dot(Dn)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Dn)!==null}intersectTriangle(e,t,n,i,r){pa.subVectors(t,e),rr.subVectors(n,e),ma.crossVectors(pa,rr);let a=this.direction.dot(ma),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;qn.subVectors(this.origin,e);const l=o*this.direction.dot(rr.crossVectors(qn,rr));if(l<0)return null;const c=o*this.direction.dot(pa.cross(qn));if(c<0||l+c>a)return null;const h=-o*qn.dot(ma);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Fe{constructor(e,t,n,i,r,a,o,l,c,h,u,d,f,g,_,m){Fe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,h,u,d,f,g,_,m)}set(e,t,n,i,r,a,o,l,c,h,u,d,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Fe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Di.setFromMatrixColumn(e,0).length(),r=1/Di.setFromMatrixColumn(e,1).length(),a=1/Di.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=a*h,f=a*u,g=o*h,_=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-_*c,t[9]=-o*l,t[2]=_-d*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,g=c*h,_=c*u;t[0]=d+_*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=_+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,g=c*h,_=c*u;t[0]=d-_*o,t[4]=-a*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=_-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*h,f=a*u,g=o*h,_=o*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+_,t[1]=l*u,t[5]=_*c+d,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=_-d*u,t[8]=g*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-_*u}else if(e.order==="XZY"){const d=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+_,t[5]=a*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Qd,e,ef)}lookAt(e,t,n){const i=this.elements;return $t.subVectors(e,t),$t.lengthSq()===0&&($t.z=1),$t.normalize(),$n.crossVectors(n,$t),$n.lengthSq()===0&&(Math.abs(n.z)===1?$t.x+=1e-4:$t.z+=1e-4,$t.normalize(),$n.crossVectors(n,$t)),$n.normalize(),ar.crossVectors($t,$n),i[0]=$n.x,i[4]=ar.x,i[8]=$t.x,i[1]=$n.y,i[5]=ar.y,i[9]=$t.y,i[2]=$n.z,i[6]=ar.z,i[10]=$t.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],b=n[3],w=n[7],M=n[11],R=n[15],C=i[0],A=i[4],L=i[8],S=i[12],v=i[1],P=i[5],z=i[9],k=i[13],W=i[2],$=i[6],X=i[10],J=i[14],V=i[3],oe=i[7],me=i[11],Te=i[15];return r[0]=a*C+o*v+l*W+c*V,r[4]=a*A+o*P+l*$+c*oe,r[8]=a*L+o*z+l*X+c*me,r[12]=a*S+o*k+l*J+c*Te,r[1]=h*C+u*v+d*W+f*V,r[5]=h*A+u*P+d*$+f*oe,r[9]=h*L+u*z+d*X+f*me,r[13]=h*S+u*k+d*J+f*Te,r[2]=g*C+_*v+m*W+p*V,r[6]=g*A+_*P+m*$+p*oe,r[10]=g*L+_*z+m*X+p*me,r[14]=g*S+_*k+m*J+p*Te,r[3]=b*C+w*v+M*W+R*V,r[7]=b*A+w*P+M*$+R*oe,r[11]=b*L+w*z+M*X+R*me,r[15]=b*S+w*k+M*J+R*Te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*l*u-i*c*u-r*o*d+n*c*d+i*o*f-n*l*f)+_*(+t*l*f-t*c*d+r*a*d-i*a*f+i*c*h-r*l*h)+m*(+t*c*u-t*o*f-r*a*u+n*a*f+r*o*h-n*c*h)+p*(-i*o*h-t*l*u+t*o*d+i*a*u-n*a*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],b=u*m*c-_*d*c+_*l*f-o*m*f-u*l*p+o*d*p,w=g*d*c-h*m*c-g*l*f+a*m*f+h*l*p-a*d*p,M=h*_*c-g*u*c+g*o*f-a*_*f-h*o*p+a*u*p,R=g*u*l-h*_*l-g*o*d+a*_*d+h*o*m-a*u*m,C=t*b+n*w+i*M+r*R;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/C;return e[0]=b*A,e[1]=(_*d*r-u*m*r-_*i*f+n*m*f+u*i*p-n*d*p)*A,e[2]=(o*m*r-_*l*r+_*i*c-n*m*c-o*i*p+n*l*p)*A,e[3]=(u*l*r-o*d*r-u*i*c+n*d*c+o*i*f-n*l*f)*A,e[4]=w*A,e[5]=(h*m*r-g*d*r+g*i*f-t*m*f-h*i*p+t*d*p)*A,e[6]=(g*l*r-a*m*r-g*i*c+t*m*c+a*i*p-t*l*p)*A,e[7]=(a*d*r-h*l*r+h*i*c-t*d*c-a*i*f+t*l*f)*A,e[8]=M*A,e[9]=(g*u*r-h*_*r-g*n*f+t*_*f+h*n*p-t*u*p)*A,e[10]=(a*_*r-g*o*r+g*n*c-t*_*c-a*n*p+t*o*p)*A,e[11]=(h*o*r-a*u*r-h*n*c+t*u*c+a*n*f-t*o*f)*A,e[12]=R*A,e[13]=(h*_*i-g*u*i+g*n*d-t*_*d-h*n*m+t*u*m)*A,e[14]=(g*o*i-a*_*i-g*n*l+t*_*l+a*n*m-t*o*m)*A,e[15]=(a*u*i-h*o*i+h*n*l-t*u*l-a*n*d+t*o*d)*A,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,g=r*u,_=a*h,m=a*u,p=o*u,b=l*c,w=l*h,M=l*u,R=n.x,C=n.y,A=n.z;return i[0]=(1-(_+p))*R,i[1]=(f+M)*R,i[2]=(g-w)*R,i[3]=0,i[4]=(f-M)*C,i[5]=(1-(d+p))*C,i[6]=(m+b)*C,i[7]=0,i[8]=(g+w)*A,i[9]=(m-b)*A,i[10]=(1-(d+_))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Di.set(i[0],i[1],i[2]).length();const a=Di.set(i[4],i[5],i[6]).length(),o=Di.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],pn.copy(this);const c=1/r,h=1/a,u=1/o;return pn.elements[0]*=c,pn.elements[1]*=c,pn.elements[2]*=c,pn.elements[4]*=h,pn.elements[5]*=h,pn.elements[6]*=h,pn.elements[8]*=u,pn.elements[9]*=u,pn.elements[10]*=u,t.setFromRotationMatrix(pn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=Gn){const l=this.elements,c=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i);let f,g;if(o===Gn)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Zr)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=Gn){const l=this.elements,c=1/(t-e),h=1/(n-i),u=1/(a-r),d=(t+e)*c,f=(n+i)*h;let g,_;if(o===Gn)g=(a+r)*u,_=-2*u;else if(o===Zr)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Di=new E,pn=new Fe,Qd=new E(0,0,0),ef=new E(1,1,1),$n=new E,ar=new E,$t=new E,nc=new Fe,ic=new vn;class An{constructor(e=0,t=0,n=0,i=An.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(He(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-He(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(He(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-He(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(He(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-He(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return nc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(nc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ic.setFromEuler(this),this.setFromQuaternion(ic,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}An.DEFAULT_ORDER="XYZ";class xl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let tf=0;const sc=new E,Ni=new vn,Nn=new Fe,or=new E,xs=new E,nf=new E,sf=new vn,rc=new E(1,0,0),ac=new E(0,1,0),oc=new E(0,0,1),lc={type:"added"},rf={type:"removed"},Ui={type:"childadded",child:null},ga={type:"childremoved",child:null};class pt extends Ei{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tf++}),this.uuid=yn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pt.DEFAULT_UP.clone();const e=new E,t=new An,n=new vn,i=new E(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Fe},normalMatrix:{value:new Be}}),this.matrix=new Fe,this.matrixWorld=new Fe,this.matrixAutoUpdate=pt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ni.setFromAxisAngle(e,t),this.quaternion.multiply(Ni),this}rotateOnWorldAxis(e,t){return Ni.setFromAxisAngle(e,t),this.quaternion.premultiply(Ni),this}rotateX(e){return this.rotateOnAxis(rc,e)}rotateY(e){return this.rotateOnAxis(ac,e)}rotateZ(e){return this.rotateOnAxis(oc,e)}translateOnAxis(e,t){return sc.copy(e).applyQuaternion(this.quaternion),this.position.add(sc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(rc,e)}translateY(e){return this.translateOnAxis(ac,e)}translateZ(e){return this.translateOnAxis(oc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Nn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?or.copy(e):or.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nn.lookAt(xs,or,this.up):Nn.lookAt(or,xs,this.up),this.quaternion.setFromRotationMatrix(Nn),i&&(Nn.extractRotation(i.matrixWorld),Ni.setFromRotationMatrix(Nn),this.quaternion.premultiply(Ni.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(lc),Ui.child=e,this.dispatchEvent(Ui),Ui.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(rf),ga.child=e,this.dispatchEvent(ga),ga.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Nn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Nn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Nn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(lc),Ui.child=e,this.dispatchEvent(Ui),Ui.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xs,e,nf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xs,sf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}pt.DEFAULT_UP=new E(0,1,0);pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mn=new E,Un=new E,_a=new E,Fn=new E,Fi=new E,ki=new E,cc=new E,xa=new E,ya=new E,va=new E,Ma=new nt,Sa=new nt,ba=new nt;class ln{constructor(e=new E,t=new E,n=new E){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),mn.subVectors(e,t),i.cross(mn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){mn.subVectors(i,t),Un.subVectors(n,t),_a.subVectors(e,t);const a=mn.dot(mn),o=mn.dot(Un),l=mn.dot(_a),c=Un.dot(Un),h=Un.dot(_a),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Fn)===null?!1:Fn.x>=0&&Fn.y>=0&&Fn.x+Fn.y<=1}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,Fn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Fn.x),l.addScaledVector(a,Fn.y),l.addScaledVector(o,Fn.z),l)}static getInterpolatedAttribute(e,t,n,i,r,a){return Ma.setScalar(0),Sa.setScalar(0),ba.setScalar(0),Ma.fromBufferAttribute(e,t),Sa.fromBufferAttribute(e,n),ba.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Ma,r.x),a.addScaledVector(Sa,r.y),a.addScaledVector(ba,r.z),a}static isFrontFacing(e,t,n,i){return mn.subVectors(n,t),Un.subVectors(e,t),mn.cross(Un).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mn.subVectors(this.c,this.b),Un.subVectors(this.a,this.b),mn.cross(Un).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ln.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ln.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return ln.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return ln.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ln.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;Fi.subVectors(i,n),ki.subVectors(r,n),xa.subVectors(e,n);const l=Fi.dot(xa),c=ki.dot(xa);if(l<=0&&c<=0)return t.copy(n);ya.subVectors(e,i);const h=Fi.dot(ya),u=ki.dot(ya);if(h>=0&&u<=h)return t.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Fi,a);va.subVectors(e,r);const f=Fi.dot(va),g=ki.dot(va);if(g>=0&&f<=g)return t.copy(r);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(ki,o);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return cc.subVectors(r,i),o=(u-h)/(u-h+(f-g)),t.copy(i).addScaledVector(cc,o);const p=1/(m+_+d);return a=_*p,o=d*p,t.copy(n).addScaledVector(Fi,a).addScaledVector(ki,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const nu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zn={h:0,s:0,l:0},lr={h:0,s:0,l:0};function wa(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class _e{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ke.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Ke.workingColorSpace){if(e=gl(e,1),t=He(t,0,1),n=He(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=wa(a,r,e+1/3),this.g=wa(a,r,e),this.b=wa(a,r,e-1/3)}return Ke.toWorkingColorSpace(this,i),this}setStyle(e,t=xt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=xt){const n=nu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xn(e.r),this.g=Xn(e.g),this.b=Xn(e.b),this}copyLinearToSRGB(e){return this.r=Qi(e.r),this.g=Qi(e.g),this.b=Qi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xt){return Ke.fromWorkingColorSpace(Ot.copy(this),e),Math.round(He(Ot.r*255,0,255))*65536+Math.round(He(Ot.g*255,0,255))*256+Math.round(He(Ot.b*255,0,255))}getHexString(e=xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.fromWorkingColorSpace(Ot.copy(this),t);const n=Ot.r,i=Ot.g,r=Ot.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ke.workingColorSpace){return Ke.fromWorkingColorSpace(Ot.copy(this),t),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e=xt){Ke.fromWorkingColorSpace(Ot.copy(this),e);const t=Ot.r,n=Ot.g,i=Ot.b;return e!==xt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Zn),this.setHSL(Zn.h+e,Zn.s+t,Zn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Zn),e.getHSL(lr);const n=Ns(Zn.h,lr.h,t),i=Ns(Zn.s,lr.s,t),r=Ns(Zn.l,lr.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ot=new _e;_e.NAMES=nu;let af=0;class hn extends Ei{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:af++}),this.uuid=yn(),this.name="",this.type="Material",this.blending=Ji,this.side=En,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=oo,this.blendDst=lo,this.blendEquation=Mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _e(0,0,0),this.blendAlpha=0,this.depthFunc=ts,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ql,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ci,this.stencilZFail=Ci,this.stencilZPass=Ci,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ji&&(n.blending=this.blending),this.side!==En&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==oo&&(n.blendSrc=this.blendSrc),this.blendDst!==lo&&(n.blendDst=this.blendDst),this.blendEquation!==Mi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ts&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ql&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ci&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ci&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ci&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class dt extends hn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=Ph,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bt=new E,cr=new Re;let of=0;class Xt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:of++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=jo,this.updateRanges=[],this.gpuType=xn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)cr.fromBufferAttribute(this,t),cr.applyMatrix3(e),this.setXY(t,cr.x,cr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=_n(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=lt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=_n(t,this.array)),t}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=_n(t,this.array)),t}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=_n(t,this.array)),t}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=_n(t,this.array)),t}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),i=lt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),i=lt(i,this.array),r=lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==jo&&(e.usage=this.usage),e}}class iu extends Xt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class su extends Xt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class gt extends Xt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let lf=0;const an=new Fe,Ta=new pt,Bi=new E,Zt=new Mn,ys=new Mn,Ct=new E;class Ft extends Ei{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lf++}),this.uuid=yn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(eu(e)?su:iu)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Be().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return an.makeRotationFromQuaternion(e),this.applyMatrix4(an),this}rotateX(e){return an.makeRotationX(e),this.applyMatrix4(an),this}rotateY(e){return an.makeRotationY(e),this.applyMatrix4(an),this}rotateZ(e){return an.makeRotationZ(e),this.applyMatrix4(an),this}translate(e,t,n){return an.makeTranslation(e,t,n),this.applyMatrix4(an),this}scale(e,t,n){return an.makeScale(e,t,n),this.applyMatrix4(an),this}lookAt(e){return Ta.lookAt(e),Ta.updateMatrix(),this.applyMatrix4(Ta.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bi).negate(),this.translate(Bi.x,Bi.y,Bi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new gt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new E(-1/0,-1/0,-1/0),new E(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Zt.setFromBufferAttribute(r),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,Zt.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,Zt.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(Zt.min),this.boundingBox.expandByPoint(Zt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new E,1/0);return}if(e){const n=this.boundingSphere.center;if(Zt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];ys.setFromBufferAttribute(o),this.morphTargetsRelative?(Ct.addVectors(Zt.min,ys.min),Zt.expandByPoint(Ct),Ct.addVectors(Zt.max,ys.max),Zt.expandByPoint(Ct)):(Zt.expandByPoint(ys.min),Zt.expandByPoint(ys.max))}Zt.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Ct.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Ct));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ct.fromBufferAttribute(o,c),l&&(Bi.fromBufferAttribute(e,c),Ct.add(Bi)),i=Math.max(i,n.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<n.count;L++)o[L]=new E,l[L]=new E;const c=new E,h=new E,u=new E,d=new Re,f=new Re,g=new Re,_=new E,m=new E;function p(L,S,v){c.fromBufferAttribute(n,L),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,v),d.fromBufferAttribute(r,L),f.fromBufferAttribute(r,S),g.fromBufferAttribute(r,v),h.sub(c),u.sub(c),f.sub(d),g.sub(d);const P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(P),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(P),o[L].add(_),o[S].add(_),o[v].add(_),l[L].add(m),l[S].add(m),l[v].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let L=0,S=b.length;L<S;++L){const v=b[L],P=v.start,z=v.count;for(let k=P,W=P+z;k<W;k+=3)p(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const w=new E,M=new E,R=new E,C=new E;function A(L){R.fromBufferAttribute(i,L),C.copy(R);const S=o[L];w.copy(S),w.sub(R.multiplyScalar(R.dot(S))).normalize(),M.crossVectors(C,S);const P=M.dot(l[L])<0?-1:1;a.setXYZW(L,w.x,w.y,w.z,P)}for(let L=0,S=b.length;L<S;++L){const v=b[L],P=v.start,z=v.count;for(let k=P,W=P+z;k<W;k+=3)A(e.getX(k+0)),A(e.getX(k+1)),A(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Xt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new E,r=new E,a=new E,o=new E,l=new E,c=new E,h=new E,u=new E;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ct.fromBufferAttribute(e,t),Ct.normalize(),e.setXYZ(t,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new Xt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ft,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const hc=new Fe,fi=new js,hr=new Rn,uc=new E,ur=new E,dr=new E,fr=new E,Ea=new E,pr=new E,dc=new E,mr=new E;class te extends pt{constructor(e=new Ft,t=new dt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){pr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(Ea.fromBufferAttribute(u,e),a?pr.addScaledVector(Ea,h):pr.addScaledVector(Ea.sub(t),h))}t.add(pr)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),hr.copy(n.boundingSphere),hr.applyMatrix4(r),fi.copy(e.ray).recast(e.near),!(hr.containsPoint(fi.origin)===!1&&(fi.intersectSphere(hr,uc)===null||fi.origin.distanceToSquared(uc)>(e.far-e.near)**2))&&(hc.copy(r).invert(),fi.copy(e.ray).applyMatrix4(hc),!(n.boundingBox!==null&&fi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,fi)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],b=Math.max(m.start,f.start),w=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let M=b,R=w;M<R;M+=3){const C=o.getX(M),A=o.getX(M+1),L=o.getX(M+2);i=gr(this,p,e,n,c,h,u,C,A,L),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const b=o.getX(m),w=o.getX(m+1),M=o.getX(m+2);i=gr(this,a,e,n,c,h,u,b,w,M),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],b=Math.max(m.start,f.start),w=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let M=b,R=w;M<R;M+=3){const C=M,A=M+1,L=M+2;i=gr(this,p,e,n,c,h,u,C,A,L),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const b=m,w=m+1,M=m+2;i=gr(this,a,e,n,c,h,u,b,w,M),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function cf(s,e,t,n,i,r,a,o){let l;if(e.side===zt?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===En,o),l===null)return null;mr.copy(o),mr.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(mr);return c<t.near||c>t.far?null:{distance:c,point:mr.clone(),object:s}}function gr(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,ur),s.getVertexPosition(l,dr),s.getVertexPosition(c,fr);const h=cf(s,e,t,n,ur,dr,fr,dc);if(h){const u=new E;ln.getBarycoord(dc,ur,dr,fr,u),i&&(h.uv=ln.getInterpolatedAttribute(i,o,l,c,u,new Re)),r&&(h.uv1=ln.getInterpolatedAttribute(r,o,l,c,u,new Re)),a&&(h.normal=ln.getInterpolatedAttribute(a,o,l,c,u,new E),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new E,materialIndex:0};ln.getNormal(ur,dr,fr,d.normal),h.face=d,h.barycoord=u}return h}class fe extends Ft{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new gt(c,3)),this.setAttribute("normal",new gt(h,3)),this.setAttribute("uv",new gt(u,2));function g(_,m,p,b,w,M,R,C,A,L,S){const v=M/A,P=R/L,z=M/2,k=R/2,W=C/2,$=A+1,X=L+1;let J=0,V=0;const oe=new E;for(let me=0;me<X;me++){const Te=me*P-k;for(let Xe=0;Xe<$;Xe++){const ct=Xe*v-z;oe[_]=ct*b,oe[m]=Te*w,oe[p]=W,c.push(oe.x,oe.y,oe.z),oe[_]=0,oe[m]=0,oe[p]=C>0?1:-1,h.push(oe.x,oe.y,oe.z),u.push(Xe/A),u.push(1-me/L),J+=1}}for(let me=0;me<L;me++)for(let Te=0;Te<A;Te++){const Xe=d+Te+$*me,ct=d+Te+$*(me+1),K=d+(Te+1)+$*(me+1),se=d+(Te+1)+$*me;l.push(Xe,ct,se),l.push(ct,K,se),V+=6}o.addGroup(f,V,S),f+=V,d+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fe(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function rs(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Vt(s){const e={};for(let t=0;t<s.length;t++){const n=rs(s[t]);for(const i in n)e[i]=n[i]}return e}function hf(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function ru(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}const yl={clone:rs,merge:Vt};var uf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,df=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Sn extends hn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=uf,this.fragmentShader=df,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=rs(e.uniforms),this.uniformsGroups=hf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class au extends pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Fe,this.projectionMatrix=new Fe,this.projectionMatrixInverse=new Fe,this.coordinateSystem=Gn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Jn=new E,fc=new Re,pc=new Re;class Wt extends au{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ss*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ds*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ss*2*Math.atan(Math.tan(Ds*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Jn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Jn.x,Jn.y).multiplyScalar(-e/Jn.z),Jn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Jn.x,Jn.y).multiplyScalar(-e/Jn.z)}getViewSize(e,t){return this.getViewBounds(e,fc,pc),t.subVectors(pc,fc)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ds*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Oi=-90,zi=1;class ff extends pt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Wt(Oi,zi,e,t);i.layers=this.layers,this.add(i);const r=new Wt(Oi,zi,e,t);r.layers=this.layers,this.add(r);const a=new Wt(Oi,zi,e,t);a.layers=this.layers,this.add(a);const o=new Wt(Oi,zi,e,t);o.layers=this.layers,this.add(o);const l=new Wt(Oi,zi,e,t);l.layers=this.layers,this.add(l);const c=new Wt(Oi,zi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Gn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Zr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class ou extends Tt{constructor(e=[],t=ns,n,i,r,a,o,l,c,h){super(e,t,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class pf extends ai{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new ou(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Qt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new fe(5,5,5),r=new Sn({name:"CubemapFromEquirect",uniforms:rs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:zt,blending:Vn});r.uniforms.tEquirect.value=t;const a=new te(i,r),o=t.minFilter;return t.minFilter===Hn&&(t.minFilter=Qt),new ff(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}class we extends pt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const mf={type:"move"};class Aa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new we,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new we,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new E,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new E),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new we,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new E,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new E),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(mf)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new we;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class vl{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new _e(e),this.near=t,this.far=n}clone(){return new vl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class gf extends pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new An,this.environmentIntensity=1,this.environmentRotation=new An,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class lu{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=jo,this.updateRanges=[],this.version=0,this.uuid=yn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Gt=new E;class Ws{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=_n(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=lt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=_n(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=_n(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=_n(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=_n(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),i=lt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),i=lt(i,this.array),r=lt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Xt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ws(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class bn extends hn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new _e(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Hi;const vs=new E,Gi=new E,Vi=new E,Wi=new Re,Ms=new Re,cu=new Fe,_r=new E,Ss=new E,xr=new E,mc=new Re,Ca=new Re,gc=new Re;class Cn extends pt{constructor(e=new bn){if(super(),this.isSprite=!0,this.type="Sprite",Hi===void 0){Hi=new Ft;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new lu(t,5);Hi.setIndex([0,1,2,0,2,3]),Hi.setAttribute("position",new Ws(n,3,0,!1)),Hi.setAttribute("uv",new Ws(n,2,3,!1))}this.geometry=Hi,this.material=e,this.center=new Re(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Gi.setFromMatrixScale(this.matrixWorld),cu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Vi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Gi.multiplyScalar(-Vi.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const a=this.center;yr(_r.set(-.5,-.5,0),Vi,a,Gi,i,r),yr(Ss.set(.5,-.5,0),Vi,a,Gi,i,r),yr(xr.set(.5,.5,0),Vi,a,Gi,i,r),mc.set(0,0),Ca.set(1,0),gc.set(1,1);let o=e.ray.intersectTriangle(_r,Ss,xr,!1,vs);if(o===null&&(yr(Ss.set(-.5,.5,0),Vi,a,Gi,i,r),Ca.set(0,1),o=e.ray.intersectTriangle(_r,xr,Ss,!1,vs),o===null))return;const l=e.ray.origin.distanceTo(vs);l<e.near||l>e.far||t.push({distance:l,point:vs.clone(),uv:ln.getInterpolation(vs,_r,Ss,xr,mc,Ca,gc,new Re),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function yr(s,e,t,n,i,r){Wi.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(Ms.x=r*Wi.x-i*Wi.y,Ms.y=i*Wi.x+r*Wi.y):Ms.copy(Wi),s.copy(e),s.x+=Ms.x,s.y+=Ms.y,s.applyMatrix4(cu)}const _c=new E,xc=new nt,yc=new nt,_f=new E,vc=new Fe,vr=new E,Ra=new Rn,Mc=new Fe,Ia=new js;class xf extends te{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Yl,this.bindMatrix=new Fe,this.bindMatrixInverse=new Fe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Mn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,vr),this.boundingBox.expandByPoint(vr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Rn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,vr),this.boundingSphere.expandByPoint(vr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ra.copy(this.boundingSphere),Ra.applyMatrix4(i),e.ray.intersectsSphere(Ra)!==!1&&(Mc.copy(i).invert(),Ia.copy(e.ray).applyMatrix4(Mc),!(this.boundingBox!==null&&Ia.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ia)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new nt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Yl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===dd?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;xc.fromBufferAttribute(i.attributes.skinIndex,e),yc.fromBufferAttribute(i.attributes.skinWeight,e),_c.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=yc.getComponent(r);if(a!==0){const o=xc.getComponent(r);vc.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(_f.copy(_c).applyMatrix4(vc),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class hu extends pt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class uu extends Tt{constructor(e=null,t=1,n=1,i,r,a,o,l,c=Ut,h=Ut,u,d){super(null,a,o,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Sc=new Fe,yf=new Fe;class Ml{constructor(e=[],t=[]){this.uuid=yn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Fe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Fe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:yf;Sc.multiplyMatrices(o,t[r]),Sc.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Ml(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new uu(t,e,e,cn,xn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new hu),this.bones.push(a),this.boneInverses.push(new Fe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class Ko extends Xt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Xi=new Fe,bc=new Fe,Mr=[],wc=new Mn,vf=new Fe,bs=new te,ws=new Rn;class Mf extends te{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ko(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,vf)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Mn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Xi),wc.copy(e.boundingBox).applyMatrix4(Xi),this.boundingBox.union(wc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Rn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Xi),ws.copy(e.boundingSphere).applyMatrix4(Xi),this.boundingSphere.union(ws)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(bs.geometry=this.geometry,bs.material=this.material,bs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ws.copy(this.boundingSphere),ws.applyMatrix4(n),e.ray.intersectsSphere(ws)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Xi),bc.multiplyMatrices(n,Xi),bs.matrixWorld=bc,bs.raycast(e,Mr);for(let a=0,o=Mr.length;a<o;a++){const l=Mr[a];l.instanceId=r,l.object=this,t.push(l)}Mr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ko(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new uu(new Float32Array(i*this.count),i,this.count,hl,xn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Pa=new E,Sf=new E,bf=new Be;class yi{constructor(e=new E(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Pa.subVectors(n,t).cross(Sf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Pa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||bf.getNormalMatrix(e),i=this.coplanarPoint(Pa).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const pi=new Rn,Sr=new E;class Sl{constructor(e=new yi,t=new yi,n=new yi,i=new yi,r=new yi,a=new yi){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Gn){const n=this.planes,i=e.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],f=i[8],g=i[9],_=i[10],m=i[11],p=i[12],b=i[13],w=i[14],M=i[15];if(n[0].setComponents(l-r,d-c,m-f,M-p).normalize(),n[1].setComponents(l+r,d+c,m+f,M+p).normalize(),n[2].setComponents(l+a,d+h,m+g,M+b).normalize(),n[3].setComponents(l-a,d-h,m-g,M-b).normalize(),n[4].setComponents(l-o,d-u,m-_,M-w).normalize(),t===Gn)n[5].setComponents(l+o,d+u,m+_,M+w).normalize();else if(t===Zr)n[5].setComponents(o,u,_,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),pi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),pi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(pi)}intersectsSprite(e){return pi.center.set(0,0,0),pi.radius=.7071067811865476,pi.applyMatrix4(e.matrixWorld),this.intersectsSphere(pi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Sr.x=i.normal.x>0?e.max.x:e.min.x,Sr.y=i.normal.y>0?e.max.y:e.min.y,Sr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Sr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class du extends hn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new _e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Jr=new E,Qr=new E,Tc=new Fe,Ts=new js,br=new Rn,La=new E,Ec=new E;class bl extends pt{constructor(e=new Ft,t=new du){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Jr.fromBufferAttribute(t,i-1),Qr.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Jr.distanceTo(Qr);e.setAttribute("lineDistance",new gt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),br.copy(n.boundingSphere),br.applyMatrix4(i),br.radius+=r,e.ray.intersectsSphere(br)===!1)return;Tc.copy(i).invert(),Ts.copy(e.ray).applyMatrix4(Tc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=c){const p=h.getX(_),b=h.getX(_+1),w=wr(this,e,Ts,l,p,b,_);w&&t.push(w)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(f),p=wr(this,e,Ts,l,_,m,g-1);p&&t.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=c){const p=wr(this,e,Ts,l,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=wr(this,e,Ts,l,g-1,f,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function wr(s,e,t,n,i,r,a){const o=s.geometry.attributes.position;if(Jr.fromBufferAttribute(o,i),Qr.fromBufferAttribute(o,r),t.distanceSqToSegment(Jr,Qr,La,Ec)>n)return;La.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(La);if(!(c<e.near||c>e.far))return{distance:c,point:Ec.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}const Ac=new E,Cc=new E;class wf extends bl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Ac.fromBufferAttribute(t,i),Cc.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Ac.distanceTo(Cc);e.setAttribute("lineDistance",new gt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Tf extends bl{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class fu extends hn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new _e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Rc=new Fe,Yo=new js,Tr=new Rn,Er=new E;class Ef extends pt{constructor(e=new Ft,t=new fu){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Tr.copy(n.boundingSphere),Tr.applyMatrix4(i),Tr.radius+=r,e.ray.intersectsSphere(Tr)===!1)return;Rc.copy(i).invert(),Yo.copy(e.ray).applyMatrix4(Rc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,_=f;g<_;g++){const m=c.getX(g);Er.fromBufferAttribute(u,m),Ic(Er,m,l,i,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,_=f;g<_;g++)Er.fromBufferAttribute(u,g),Ic(Er,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Ic(s,e,t,n,i,r,a){const o=Yo.distanceSqToPoint(s);if(o<t){const l=new E;Yo.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class tn extends Tt{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class pu extends Tt{constructor(e,t,n=Ti,i,r,a,o=Ut,l=Ut,c,h=Os){if(h!==Os&&h!==zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new _l(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Af{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);const h=n[i],d=n[i+1]-h,f=(a-h)/d;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),l=t||(a.isVector2?new Re:new E);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new E,i=[],r=[],a=[],o=new E,l=new Fe;for(let f=0;f<=e;f++){const g=f/e;i[f]=this.getTangentAt(g,new E)}r[0]=new E,a[0]=new E;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(He(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(He(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),a[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function wl(){let s=0,e=0,t=0,n=0;function i(r,a,o,l){s=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,i(a,o,d,f)},calc:function(r){const a=r*r,o=a*r;return s+e*r+t*a+n*o}}}const Ar=new E,Da=new wl,Na=new wl,Ua=new wl;class Cf extends Af{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new E){const n=t,i=this.points,r=i.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(Ar.subVectors(i[0],i[1]).add(i[0]),c=Ar);const u=i[o%r],d=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(Ar.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Ar),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Da.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,_,m),Na.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,_,m),Ua.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(Da.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Na.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Ua.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Da.calc(l),Na.calc(l),Ua.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new E().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class Dt extends Ft{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],a=[],o=[],l=[],c=new E,h=new Re;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const f=n+u/t*i;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new gt(a,3)),this.setAttribute("normal",new gt(o,3)),this.setAttribute("uv",new gt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dt(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Ve extends Ft{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;b(),a===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new gt(u,3)),this.setAttribute("normal",new gt(d,3)),this.setAttribute("uv",new gt(f,2));function b(){const M=new E,R=new E;let C=0;const A=(t-e)/n;for(let L=0;L<=r;L++){const S=[],v=L/r,P=v*(t-e)+e;for(let z=0;z<=i;z++){const k=z/i,W=k*l+o,$=Math.sin(W),X=Math.cos(W);R.x=P*$,R.y=-v*n+m,R.z=P*X,u.push(R.x,R.y,R.z),M.set($,A,X).normalize(),d.push(M.x,M.y,M.z),f.push(k,1-v),S.push(g++)}_.push(S)}for(let L=0;L<i;L++)for(let S=0;S<r;S++){const v=_[S][L],P=_[S+1][L],z=_[S+1][L+1],k=_[S][L+1];(e>0||S!==0)&&(h.push(v,P,k),C+=3),(t>0||S!==r-1)&&(h.push(P,z,k),C+=3)}c.addGroup(p,C,0),p+=C}function w(M){const R=g,C=new Re,A=new E;let L=0;const S=M===!0?e:t,v=M===!0?1:-1;for(let z=1;z<=i;z++)u.push(0,m*v,0),d.push(0,v,0),f.push(.5,.5),g++;const P=g;for(let z=0;z<=i;z++){const W=z/i*l+o,$=Math.cos(W),X=Math.sin(W);A.x=S*X,A.y=m*v,A.z=S*$,u.push(A.x,A.y,A.z),d.push(0,v,0),C.x=$*.5+.5,C.y=X*.5*v+.5,f.push(C.x,C.y),g++}for(let z=0;z<i;z++){const k=R+z,W=P+z;M===!0?h.push(W,W+1,k):h.push(W+1,W,k),L+=3}c.addGroup(p,L,M===!0?1:2),p+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ve(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Pt extends Ve{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Pt(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Nt extends Ft{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=e/o,d=t/l,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const b=p*d-a;for(let w=0;w<c;w++){const M=w*u-r;g.push(M,-b,0),_.push(0,0,1),m.push(w/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<o;b++){const w=b+c*p,M=b+c*(p+1),R=b+1+c*(p+1),C=b+1+c*p;f.push(w,M,C),f.push(M,R,C)}this.setIndex(f),this.setAttribute("position",new gt(g,3)),this.setAttribute("normal",new gt(_,3)),this.setAttribute("uv",new gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nt(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ge extends Ft{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new E,d=new E,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const b=[],w=p/n;let M=0;p===0&&a===0?M=.5/t:p===n&&l===Math.PI&&(M=-.5/t);for(let R=0;R<=t;R++){const C=R/t;u.x=-e*Math.cos(i+C*r)*Math.sin(a+w*o),u.y=e*Math.cos(a+w*o),u.z=e*Math.sin(i+C*r)*Math.sin(a+w*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(C+M,1-w),b.push(c++)}h.push(b)}for(let p=0;p<n;p++)for(let b=0;b<t;b++){const w=h[p][b+1],M=h[p][b],R=h[p+1][b],C=h[p+1][b+1];(p!==0||a>0)&&f.push(w,M,C),(p!==n-1||l<Math.PI)&&f.push(M,R,C)}this.setIndex(f),this.setAttribute("position",new gt(g,3)),this.setAttribute("normal",new gt(_,3)),this.setAttribute("uv",new gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ge(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class oi extends Ft{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],l=[],c=[],h=new E,u=new E,d=new E;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){const _=g/i*r,m=f/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(_),u.y=(e+t*Math.cos(m))*Math.sin(_),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){const _=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,b=(i+1)*f+g;a.push(_,m,b),a.push(m,p,b)}this.setIndex(a),this.setAttribute("position",new gt(o,3)),this.setAttribute("normal",new gt(l,3)),this.setAttribute("uv",new gt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oi(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Rf extends Sn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Tl extends hn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new _e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ml,this.normalScale=new Re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class In extends Tl{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Re(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return He(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new _e(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new _e(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new _e(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class El extends hn{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new _e(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ml,this.normalScale=new Re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class If extends hn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Pf extends hn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Cr(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Lf(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Df(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Pc(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)i[a++]=s[o+l]}return i}function mu(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}class Ks{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Nf extends Ks{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ki,endingEnd:Ki}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Yi:r=e,o=2*t-n;break;case qr:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Yi:a=e,l=2*n-t;break;case qr:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,b=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,w=(-1-f)*m+(1.5+f)*_+.5*g,M=f*m-f*_;for(let R=0;R!==o;++R)r[R]=p*a[h+R]+b*a[c+R]+w*a[l+R]+M*a[u+R];return r}}class gu extends Ks{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}}class Uf extends Ks{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class wn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Cr(t,this.TimeBufferType),this.values=Cr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Cr(e.times,Array),values:Cr(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Uf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new gu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Nf(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Hs:t=this.InterpolantFactoryMethodDiscrete;break;case Gs:t=this.InterpolantFactoryMethodLinear;break;case oa:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Hs;case this.InterpolantFactoryMethodLinear:return Gs;case this.InterpolantFactoryMethodSmooth:return oa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&Lf(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===oa,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)l=!0;else{const u=o*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){const _=t[u+g];if(_!==t[d+g]||_!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}wn.prototype.ValueTypeName="";wn.prototype.TimeBufferType=Float32Array;wn.prototype.ValueBufferType=Float32Array;wn.prototype.DefaultInterpolation=Gs;class us extends wn{constructor(e,t,n){super(e,t,n)}}us.prototype.ValueTypeName="bool";us.prototype.ValueBufferType=Array;us.prototype.DefaultInterpolation=Hs;us.prototype.InterpolantFactoryMethodLinear=void 0;us.prototype.InterpolantFactoryMethodSmooth=void 0;class _u extends wn{constructor(e,t,n,i){super(e,t,n,i)}}_u.prototype.ValueTypeName="color";class as extends wn{constructor(e,t,n,i){super(e,t,n,i)}}as.prototype.ValueTypeName="number";class Ff extends Ks{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let h=c+o;c!==h;c+=4)vn.slerpFlat(r,0,a,c-o,a,c,l);return r}}class os extends wn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Ff(this.times,this.values,this.getValueSize(),e)}}os.prototype.ValueTypeName="quaternion";os.prototype.InterpolantFactoryMethodSmooth=void 0;class ds extends wn{constructor(e,t,n){super(e,t,n)}}ds.prototype.ValueTypeName="string";ds.prototype.ValueBufferType=Array;ds.prototype.DefaultInterpolation=Hs;ds.prototype.InterpolantFactoryMethodLinear=void 0;ds.prototype.InterpolantFactoryMethodSmooth=void 0;class ls extends wn{constructor(e,t,n,i){super(e,t,n,i)}}ls.prototype.ValueTypeName="vector";class qo{constructor(e="",t=-1,n=[],i=pl){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=yn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Bf(n[a]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(wn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const h=Df(l);l=Pc(l,1,h),c=Pc(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new as(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,g,_){if(f.length!==0){const m=[],p=[];mu(f,m,p,g),m.length!==0&&_.push(new u(d,m,p))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)f[d[g].morphTargets[_]]=-1;for(const _ in f){const m=[],p=[];for(let b=0;b!==d[g].morphTargets.length;++b){const w=d[g];m.push(w.time),p.push(w.morphTarget===_?1:0)}i.push(new as(".morphTargetInfluence["+_+"]",m,p))}l=f.length*a}else{const f=".bones["+t[u].name+"]";n(ls,f+".position",d,"pos",i),n(os,f+".quaternion",d,"rot",i),n(ls,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function kf(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return as;case"vector":case"vector2":case"vector3":case"vector4":return ls;case"color":return _u;case"quaternion":return os;case"bool":case"boolean":return us;case"string":return ds}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Bf(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=kf(s.type);if(s.times===void 0){const t=[],n=[];mu(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const ri={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Of{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const zf=new Of;class fs{constructor(e){this.manager=e!==void 0?e:zf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}fs.DEFAULT_MATERIAL_NAME="__DEFAULT";const kn={};class Hf extends Error{constructor(e,t){super(e),this.response=t}}class xu extends fs{constructor(e){super(e),this.mimeType="",this.responseType=""}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=ri.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(kn[e]!==void 0){kn[e].push({onLoad:t,onProgress:n,onError:i});return}kn[e]=[],kn[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=kn[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let _=0;const m=new ReadableStream({start(p){b();function b(){u.read().then(({done:w,value:M})=>{if(w)p.close();else{_+=M.byteLength;const R=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let C=0,A=h.length;C<A;C++){const L=h[C];L.onProgress&&L.onProgress(R)}p.enqueue(M),b()}},w=>{p.error(w)})}}});return new Response(m)}else throw new Hf(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{ri.add(e,c);const h=kn[e];delete kn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=kn[e];if(h===void 0)throw this.manager.itemError(e),c;delete kn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Gf extends fs{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=ri.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=Vs("img");function l(){h(),ri.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class Vf extends fs{constructor(e){super(e)}load(e,t,n,i){const r=new Tt,a=new Gf(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Ys extends pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new _e(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Wf extends Ys{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new _e(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Fa=new Fe,Lc=new E,Dc=new E;class Al{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Re(512,512),this.map=null,this.mapPass=null,this.matrix=new Fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Sl,this._frameExtents=new Re(1,1),this._viewportCount=1,this._viewports=[new nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Lc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Lc),Dc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Dc),t.updateMatrixWorld(),Fa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Fa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Xf extends Al{constructor(){super(new Wt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=ss*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class jf extends Ys{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.target=new pt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Xf}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Nc=new Fe,Es=new E,ka=new E;class Kf extends Al{constructor(){super(new Wt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Re(4,2),this._viewportCount=6,this._viewports=[new nt(2,1,1,1),new nt(0,1,1,1),new nt(3,1,1,1),new nt(1,1,1,1),new nt(3,0,1,1),new nt(1,0,1,1)],this._cubeDirections=[new E(1,0,0),new E(-1,0,0),new E(0,0,1),new E(0,0,-1),new E(0,1,0),new E(0,-1,0)],this._cubeUps=[new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,0,1),new E(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Es.setFromMatrixPosition(e.matrixWorld),n.position.copy(Es),ka.copy(n.position),ka.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ka),n.updateMatrixWorld(),i.makeTranslation(-Es.x,-Es.y,-Es.z),Nc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nc)}}class ni extends Ys{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Kf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class ta extends au{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Yf extends Al{constructor(){super(new ta(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class $o extends Ys{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.target=new pt,this.shadow=new Yf}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class qf extends Ys{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Us{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class $f extends fs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=ri.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return ri.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),ri.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});ri.add(e,l),r.manager.itemStart(e)}}class Zf extends Wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}class yu{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Uc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Uc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Uc(){return performance.now()}class Jf{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,a;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[r+o]=n[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){o.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,a=i;r!==a;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){vn.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){const a=this._workIndex*r;vn.multiplyQuaternionsFlat(e,a,e,t,e,n),vn.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,r){const a=1-i;for(let o=0;o!==r;++o){const l=t+o;e[l]=e[l]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,r){for(let a=0;a!==r;++a){const o=t+a;e[o]=e[o]+e[n+a]*i}}}const Cl="\\[\\]\\.:\\/",Qf=new RegExp("["+Cl+"]","g"),Rl="[^"+Cl+"]",ep="[^"+Cl.replace("\\.","")+"]",tp=/((?:WC+[\/:])*)/.source.replace("WC",Rl),np=/(WCOD+)?/.source.replace("WCOD",ep),ip=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Rl),sp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Rl),rp=new RegExp("^"+tp+np+ip+sp+"$"),ap=["material","materials","bones","map"];class op{constructor(e,t,n){const i=n||rt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class rt{constructor(e,t,n){this.path=t,this.parsedPath=n||rt.parseTrackName(t),this.node=rt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new rt.Composite(e,t,n):new rt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Qf,"")}static parseTrackName(e){const t=rp.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);ap.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=rt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}rt.Composite=op;rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};rt.prototype.GetterByBindingType=[rt.prototype._getValue_direct,rt.prototype._getValue_array,rt.prototype._getValue_arrayElement,rt.prototype._getValue_toArray];rt.prototype.SetterByBindingTypeAndVersioning=[[rt.prototype._setValue_direct,rt.prototype._setValue_direct_setNeedsUpdate,rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_array,rt.prototype._setValue_array_setNeedsUpdate,rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_arrayElement,rt.prototype._setValue_arrayElement_setNeedsUpdate,rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_fromArray,rt.prototype._setValue_fromArray_setNeedsUpdate,rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class lp{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const r=t.tracks,a=r.length,o=new Array(a),l={endingStart:Ki,endingEnd:Ki};for(let c=0;c!==a;++c){const h=r[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Zh,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){const i=this._clip.duration,r=e._clip.duration,a=r/i,o=i/r;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case pd:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulateAdditive(o);break;case pl:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const a=n===fd;if(e===0)return r===-1?i:a&&(r&1)===1?t-i:i;if(n===$h){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){const o=Math.floor(i/t);i-=t*o,r+=Math.abs(o);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=Yi,i.endingEnd=Yi):(e?i.endingStart=this.zeroSlopeAtStart?Yi:Ki:i.endingStart=qr,t?i.endingEnd=this.zeroSlopeAtEnd?Yi:Ki:i.endingEnd=qr)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=r,l[0]=t,o[1]=r+e,l[1]=n,this}}const cp=new Float32Array(1);class hp extends Ei{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,a=e._propertyBindings,o=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==r;++u){const d=i[u],f=d.name;let g=h[f];if(g!==void 0)++g.referenceCount,a[u]=g;else{if(g=a[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,f));continue}const _=t&&t._propertyBindings[u].binding.parsedPath;g=new Jf(rt.create(n,f,_),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,f),a[u]=g}o[u].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,a=this._actionsByClip,o=a[r],l=o.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const u=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],l.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new gu(new Float32Array(2),new Float32Array(2),1,cp),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const i=t||this._root,r=i.uuid;let a=typeof e=="string"?qo.findByName(i,e):e;const o=a!==null?a.uuid:e,l=this._actionsByClip[o];let c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=pl),l!==void 0){const u=l.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const h=new lp(this,a,t,n);return this._bindAction(h,c),this._addInactiveAction(h,o,r),h}existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?qo.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,a);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const a=r.knownActions;for(let o=0,l=a.length;o!==l;++o){const c=a[o];this._deactivateAction(c);const h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const a in r){const o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}const Fc=new Fe;class Il{constructor(e,t,n=0,i=1/0){this.ray=new js(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new xl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Fc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Fc),this}intersectObject(e,t=!0,n=[]){return Zo(e,this,n,t),n.sort(kc),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Zo(e[i],this,n,t);return n.sort(kc),n}}function kc(s,e){return s.distance-e.distance}function Zo(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let a=0,o=r.length;a<o;a++)Zo(r[a],e,t,!0)}}function Bc(s,e,t,n){const i=up(n);switch(t){case Wh:return s*e;case jh:return s*e;case Kh:return s*e*2;case hl:return s*e/i.components*i.byteLength;case ul:return s*e/i.components*i.byteLength;case Yh:return s*e*2/i.components*i.byteLength;case dl:return s*e*2/i.components*i.byteLength;case Xh:return s*e*3/i.components*i.byteLength;case cn:return s*e*4/i.components*i.byteLength;case fl:return s*e*4/i.components*i.byteLength;case zr:case Hr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Gr:case Vr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case vo:case So:return Math.max(s,16)*Math.max(e,8)/4;case yo:case Mo:return Math.max(s,8)*Math.max(e,8)/2;case bo:case wo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case To:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Eo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ao:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Co:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Ro:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Io:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Po:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Lo:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Do:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case No:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Uo:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Fo:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case ko:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Bo:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Oo:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Wr:case zo:case Ho:return Math.ceil(s/4)*Math.ceil(e/4)*16;case qh:case Go:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Vo:case Wo:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function up(s){switch(s){case jn:case Hh:return{byteLength:1,components:1};case ks:case Gh:case hs:return{byteLength:2,components:1};case ll:case cl:return{byteLength:2,components:4};case Ti:case ol:case xn:return{byteLength:4,components:1};case Vh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:al}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=al);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function vu(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function dp(s){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const _=u[f];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var fp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pp=`#ifdef USE_ALPHAHASH
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
#endif`,mp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_p=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yp=`#ifdef USE_AOMAP
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
#endif`,vp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Mp=`#ifdef USE_BATCHING
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
#endif`,Sp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Tp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ep=`#ifdef USE_IRIDESCENCE
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
#endif`,Ap=`#ifdef USE_BUMPMAP
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
#endif`,Cp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Rp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ip=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Pp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Lp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Dp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Np=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Up=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Fp=`#define PI 3.141592653589793
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
} // validated`,kp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Bp=`vec3 transformedNormal = objectNormal;
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
#endif`,Op=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Xp=`#ifdef USE_ENVMAP
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
#endif`,jp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Kp=`#ifdef USE_ENVMAP
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
#endif`,Yp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qp=`#ifdef USE_ENVMAP
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
#endif`,$p=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,em=`#ifdef USE_GRADIENTMAP
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
}`,tm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,im=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sm=`uniform bool receiveShadow;
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
#endif`,rm=`#ifdef USE_ENVMAP
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
#endif`,am=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,om=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hm=`PhysicalMaterial material;
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
#endif`,um=`struct PhysicalMaterial {
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
}`,dm=`
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
#endif`,fm=`#if defined( RE_IndirectDiffuse )
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
#endif`,pm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_m=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ym=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Mm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Sm=`#if defined( USE_POINTS_UV )
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
#endif`,bm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Tm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Em=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Am=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cm=`#ifdef USE_MORPHTARGETS
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
#endif`,Rm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Im=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Pm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Lm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Um=`#ifdef USE_NORMALMAP
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
#endif`,Fm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,km=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Om=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Gm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Km=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ym=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$m=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Zm=`float getShadowMask() {
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
}`,Jm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qm=`#ifdef USE_SKINNING
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
#endif`,eg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tg=`#ifdef USE_SKINNING
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
#endif`,ng=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ig=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ag=`#ifdef USE_TRANSMISSION
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
#endif`,og=`#ifdef USE_TRANSMISSION
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
#endif`,lg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ug=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const dg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fg=`uniform sampler2D t2D;
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
}`,pg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,gg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_g=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xg=`#include <common>
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
}`,yg=`#if DEPTH_PACKING == 3200
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
}`,vg=`#define DISTANCE
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
}`,Mg=`#define DISTANCE
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
}`,Sg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wg=`uniform float scale;
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
}`,Tg=`uniform vec3 diffuse;
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
}`,Eg=`#include <common>
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
}`,Ag=`uniform vec3 diffuse;
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
}`,Cg=`#define LAMBERT
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
}`,Rg=`#define LAMBERT
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
}`,Ig=`#define MATCAP
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
}`,Pg=`#define MATCAP
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
}`,Lg=`#define NORMAL
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
}`,Dg=`#define NORMAL
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
}`,Ng=`#define PHONG
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
}`,Ug=`#define PHONG
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
}`,Fg=`#define STANDARD
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
}`,kg=`#define STANDARD
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
}`,Bg=`#define TOON
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
}`,Og=`#define TOON
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
}`,zg=`uniform float size;
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
}`,Hg=`uniform vec3 diffuse;
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
}`,Gg=`#include <common>
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
}`,Vg=`uniform vec3 color;
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
}`,Wg=`uniform float rotation;
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
}`,Xg=`uniform vec3 diffuse;
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
}`,ze={alphahash_fragment:fp,alphahash_pars_fragment:pp,alphamap_fragment:mp,alphamap_pars_fragment:gp,alphatest_fragment:_p,alphatest_pars_fragment:xp,aomap_fragment:yp,aomap_pars_fragment:vp,batching_pars_vertex:Mp,batching_vertex:Sp,begin_vertex:bp,beginnormal_vertex:wp,bsdfs:Tp,iridescence_fragment:Ep,bumpmap_pars_fragment:Ap,clipping_planes_fragment:Cp,clipping_planes_pars_fragment:Rp,clipping_planes_pars_vertex:Ip,clipping_planes_vertex:Pp,color_fragment:Lp,color_pars_fragment:Dp,color_pars_vertex:Np,color_vertex:Up,common:Fp,cube_uv_reflection_fragment:kp,defaultnormal_vertex:Bp,displacementmap_pars_vertex:Op,displacementmap_vertex:zp,emissivemap_fragment:Hp,emissivemap_pars_fragment:Gp,colorspace_fragment:Vp,colorspace_pars_fragment:Wp,envmap_fragment:Xp,envmap_common_pars_fragment:jp,envmap_pars_fragment:Kp,envmap_pars_vertex:Yp,envmap_physical_pars_fragment:rm,envmap_vertex:qp,fog_vertex:$p,fog_pars_vertex:Zp,fog_fragment:Jp,fog_pars_fragment:Qp,gradientmap_pars_fragment:em,lightmap_pars_fragment:tm,lights_lambert_fragment:nm,lights_lambert_pars_fragment:im,lights_pars_begin:sm,lights_toon_fragment:am,lights_toon_pars_fragment:om,lights_phong_fragment:lm,lights_phong_pars_fragment:cm,lights_physical_fragment:hm,lights_physical_pars_fragment:um,lights_fragment_begin:dm,lights_fragment_maps:fm,lights_fragment_end:pm,logdepthbuf_fragment:mm,logdepthbuf_pars_fragment:gm,logdepthbuf_pars_vertex:_m,logdepthbuf_vertex:xm,map_fragment:ym,map_pars_fragment:vm,map_particle_fragment:Mm,map_particle_pars_fragment:Sm,metalnessmap_fragment:bm,metalnessmap_pars_fragment:wm,morphinstance_vertex:Tm,morphcolor_vertex:Em,morphnormal_vertex:Am,morphtarget_pars_vertex:Cm,morphtarget_vertex:Rm,normal_fragment_begin:Im,normal_fragment_maps:Pm,normal_pars_fragment:Lm,normal_pars_vertex:Dm,normal_vertex:Nm,normalmap_pars_fragment:Um,clearcoat_normal_fragment_begin:Fm,clearcoat_normal_fragment_maps:km,clearcoat_pars_fragment:Bm,iridescence_pars_fragment:Om,opaque_fragment:zm,packing:Hm,premultiplied_alpha_fragment:Gm,project_vertex:Vm,dithering_fragment:Wm,dithering_pars_fragment:Xm,roughnessmap_fragment:jm,roughnessmap_pars_fragment:Km,shadowmap_pars_fragment:Ym,shadowmap_pars_vertex:qm,shadowmap_vertex:$m,shadowmask_pars_fragment:Zm,skinbase_vertex:Jm,skinning_pars_vertex:Qm,skinning_vertex:eg,skinnormal_vertex:tg,specularmap_fragment:ng,specularmap_pars_fragment:ig,tonemapping_fragment:sg,tonemapping_pars_fragment:rg,transmission_fragment:ag,transmission_pars_fragment:og,uv_pars_fragment:lg,uv_pars_vertex:cg,uv_vertex:hg,worldpos_vertex:ug,background_vert:dg,background_frag:fg,backgroundCube_vert:pg,backgroundCube_frag:mg,cube_vert:gg,cube_frag:_g,depth_vert:xg,depth_frag:yg,distanceRGBA_vert:vg,distanceRGBA_frag:Mg,equirect_vert:Sg,equirect_frag:bg,linedashed_vert:wg,linedashed_frag:Tg,meshbasic_vert:Eg,meshbasic_frag:Ag,meshlambert_vert:Cg,meshlambert_frag:Rg,meshmatcap_vert:Ig,meshmatcap_frag:Pg,meshnormal_vert:Lg,meshnormal_frag:Dg,meshphong_vert:Ng,meshphong_frag:Ug,meshphysical_vert:Fg,meshphysical_frag:kg,meshtoon_vert:Bg,meshtoon_frag:Og,points_vert:zg,points_frag:Hg,shadow_vert:Gg,shadow_frag:Vg,sprite_vert:Wg,sprite_frag:Xg},re={common:{diffuse:{value:new _e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new Re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new _e(16777215)},opacity:{value:1},center:{value:new Re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},Tn={basic:{uniforms:Vt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Vt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new _e(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Vt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new _e(0)},specular:{value:new _e(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Vt([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new _e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Vt([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new _e(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Vt([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Vt([re.points,re.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Vt([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Vt([re.common,re.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Vt([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Vt([re.sprite,re.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:Vt([re.common,re.displacementmap,{referencePosition:{value:new E},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:Vt([re.lights,re.fog,{color:{value:new _e(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};Tn.physical={uniforms:Vt([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new Re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new _e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new Re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new _e(0)},specularColor:{value:new _e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new Re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const Rr={r:0,b:0,g:0},mi=new An,jg=new Fe;function Kg(s,e,t,n,i,r,a){const o=new _e(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(w){let M=w.isScene===!0?w.background:null;return M&&M.isTexture&&(M=(w.backgroundBlurriness>0?t:e).get(M)),M}function _(w){let M=!1;const R=g(w);R===null?p(o,l):R&&R.isColor&&(p(R,1),M=!0);const C=s.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(w,M){const R=g(M);R&&(R.isCubeTexture||R.mapping===ea)?(h===void 0&&(h=new te(new fe(1,1,1),new Sn({name:"BackgroundCubeMaterial",uniforms:rs(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:zt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,A,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),mi.copy(M.backgroundRotation),mi.x*=-1,mi.y*=-1,mi.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(mi.y*=-1,mi.z*=-1),h.material.uniforms.envMap.value=R,h.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(jg.makeRotationFromEuler(mi)),h.material.toneMapped=Ke.getTransfer(R.colorSpace)!==ot,(u!==R||d!==R.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=R,d=R.version,f=s.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new te(new Nt(2,2),new Sn({name:"BackgroundMaterial",uniforms:rs(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=Ke.getTransfer(R.colorSpace)!==ot,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(u!==R||d!==R.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=R,d=R.version,f=s.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function p(w,M){w.getRGB(Rr,ru(s)),n.buffers.color.setClear(Rr.r,Rr.g,Rr.b,M,a)}function b(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(w,M=1){o.set(w),l=M,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,p(o,l)},render:_,addToRenderList:m,dispose:b}}function Yg(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,a=!1;function o(v,P,z,k,W){let $=!1;const X=u(k,z,P);r!==X&&(r=X,c(r.object)),$=f(v,k,z,W),$&&g(v,k,z,W),W!==null&&e.update(W,s.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,M(v,P,z,k),W!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return s.createVertexArray()}function c(v){return s.bindVertexArray(v)}function h(v){return s.deleteVertexArray(v)}function u(v,P,z){const k=z.wireframe===!0;let W=n[v.id];W===void 0&&(W={},n[v.id]=W);let $=W[P.id];$===void 0&&($={},W[P.id]=$);let X=$[k];return X===void 0&&(X=d(l()),$[k]=X),X}function d(v){const P=[],z=[],k=[];for(let W=0;W<t;W++)P[W]=0,z[W]=0,k[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:z,attributeDivisors:k,object:v,attributes:{},index:null}}function f(v,P,z,k){const W=r.attributes,$=P.attributes;let X=0;const J=z.getAttributes();for(const V in J)if(J[V].location>=0){const me=W[V];let Te=$[V];if(Te===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(Te=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(Te=v.instanceColor)),me===void 0||me.attribute!==Te||Te&&me.data!==Te.data)return!0;X++}return r.attributesNum!==X||r.index!==k}function g(v,P,z,k){const W={},$=P.attributes;let X=0;const J=z.getAttributes();for(const V in J)if(J[V].location>=0){let me=$[V];me===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(me=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(me=v.instanceColor));const Te={};Te.attribute=me,me&&me.data&&(Te.data=me.data),W[V]=Te,X++}r.attributes=W,r.attributesNum=X,r.index=k}function _(){const v=r.newAttributes;for(let P=0,z=v.length;P<z;P++)v[P]=0}function m(v){p(v,0)}function p(v,P){const z=r.newAttributes,k=r.enabledAttributes,W=r.attributeDivisors;z[v]=1,k[v]===0&&(s.enableVertexAttribArray(v),k[v]=1),W[v]!==P&&(s.vertexAttribDivisor(v,P),W[v]=P)}function b(){const v=r.newAttributes,P=r.enabledAttributes;for(let z=0,k=P.length;z<k;z++)P[z]!==v[z]&&(s.disableVertexAttribArray(z),P[z]=0)}function w(v,P,z,k,W,$,X){X===!0?s.vertexAttribIPointer(v,P,z,W,$):s.vertexAttribPointer(v,P,z,k,W,$)}function M(v,P,z,k){_();const W=k.attributes,$=z.getAttributes(),X=P.defaultAttributeValues;for(const J in $){const V=$[J];if(V.location>=0){let oe=W[J];if(oe===void 0&&(J==="instanceMatrix"&&v.instanceMatrix&&(oe=v.instanceMatrix),J==="instanceColor"&&v.instanceColor&&(oe=v.instanceColor)),oe!==void 0){const me=oe.normalized,Te=oe.itemSize,Xe=e.get(oe);if(Xe===void 0)continue;const ct=Xe.buffer,K=Xe.type,se=Xe.bytesPerElement,Me=K===s.INT||K===s.UNSIGNED_INT||oe.gpuType===ol;if(oe.isInterleavedBufferAttribute){const le=oe.data,Ie=le.stride,tt=oe.offset;if(le.isInstancedInterleavedBuffer){for(let Le=0;Le<V.locationSize;Le++)p(V.location+Le,le.meshPerAttribute);v.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Le=0;Le<V.locationSize;Le++)m(V.location+Le);s.bindBuffer(s.ARRAY_BUFFER,ct);for(let Le=0;Le<V.locationSize;Le++)w(V.location+Le,Te/V.locationSize,K,me,Ie*se,(tt+Te/V.locationSize*Le)*se,Me)}else{if(oe.isInstancedBufferAttribute){for(let le=0;le<V.locationSize;le++)p(V.location+le,oe.meshPerAttribute);v.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let le=0;le<V.locationSize;le++)m(V.location+le);s.bindBuffer(s.ARRAY_BUFFER,ct);for(let le=0;le<V.locationSize;le++)w(V.location+le,Te/V.locationSize,K,me,Te*se,Te/V.locationSize*le*se,Me)}}else if(X!==void 0){const me=X[J];if(me!==void 0)switch(me.length){case 2:s.vertexAttrib2fv(V.location,me);break;case 3:s.vertexAttrib3fv(V.location,me);break;case 4:s.vertexAttrib4fv(V.location,me);break;default:s.vertexAttrib1fv(V.location,me)}}}}b()}function R(){L();for(const v in n){const P=n[v];for(const z in P){const k=P[z];for(const W in k)h(k[W].object),delete k[W];delete P[z]}delete n[v]}}function C(v){if(n[v.id]===void 0)return;const P=n[v.id];for(const z in P){const k=P[z];for(const W in k)h(k[W].object),delete k[W];delete P[z]}delete n[v.id]}function A(v){for(const P in n){const z=n[P];if(z[v.id]===void 0)continue;const k=z[v.id];for(const W in k)h(k[W].object),delete k[W];delete z[v.id]}}function L(){S(),a=!0,r!==i&&(r=i,c(r.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:L,resetDefaultState:S,dispose:R,releaseStatesOfGeometry:C,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:b}}function qg(s,e,t){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];t.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function $g(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(A){return!(A!==cn&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const L=A===hs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==jn&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==xn&&!L)}function l(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),b=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),w=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,C=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:w,maxFragmentUniforms:M,vertexTextures:R,maxSamples:C}}function Zg(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new yi,o=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{const b=r?0:n,w=b*4;let M=p.clippingState||null;l.value=M,M=h(g,d,w,f);for(let R=0;R!==w;++R)M[R]=t[R];p.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,M=f;w!==_;++w,M+=4)a.copy(u[w]).applyMatrix4(b,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Jg(s){let e=new WeakMap;function t(a,o){return o===_o?a.mapping=ns:o===xo&&(a.mapping=is),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===_o||o===xo)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new pf(l.height);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const qi=4,Oc=[.125,.215,.35,.446,.526,.582],Si=20,Ba=new ta,zc=new _e;let Oa=null,za=0,Ha=0,Ga=!1;const vi=(1+Math.sqrt(5))/2,ji=1/vi,Hc=[new E(-vi,ji,0),new E(vi,ji,0),new E(-ji,0,vi),new E(ji,0,vi),new E(0,vi,-ji),new E(0,vi,ji),new E(-1,1,-1),new E(1,1,-1),new E(-1,1,1),new E(1,1,1)],Qg=new E;class Gc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,r={}){const{size:a=256,position:o=Qg}=r;Oa=this._renderer.getRenderTarget(),za=this._renderer.getActiveCubeFace(),Ha=this._renderer.getActiveMipmapLevel(),Ga=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Oa,za,Ha),this._renderer.xr.enabled=Ga,e.scissorTest=!1,Ir(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ns||e.mapping===is?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Oa=this._renderer.getRenderTarget(),za=this._renderer.getActiveCubeFace(),Ha=this._renderer.getActiveMipmapLevel(),Ga=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Qt,minFilter:Qt,generateMipmaps:!1,type:hs,format:cn,colorSpace:jt,depthBuffer:!1},i=Vc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vc(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=e0(r)),this._blurMaterial=t0(r,e,t)}return i}_compileMaterial(e){const t=new te(this._lodPlanes[0],e);this._renderer.compile(t,Ba)}_sceneToCubeUV(e,t,n,i,r){const l=new Wt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(zc),u.toneMapping=Wn,u.autoClear=!1;const g=new dt({name:"PMREM.Background",side:zt,depthWrite:!1,depthTest:!1}),_=new te(new fe,g);let m=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,m=!0):(g.color.copy(zc),m=!0);for(let b=0;b<6;b++){const w=b%3;w===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[b],r.y,r.z)):w===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[b]));const M=this._cubeSize;Ir(i,w*M,b>2?M:0,M,M),u.setRenderTarget(i),m&&u.render(_,l),u.render(e,l)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ns||e.mapping===is;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wc());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new te(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Ir(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Ba)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Hc[(i-r-1)%Hc.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new te(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Si-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Si;m>Si&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Si}`);const p=[];let b=0;for(let A=0;A<Si;++A){const L=A/_,S=Math.exp(-L*L/2);p.push(S),A===0?b+=S:A<m&&(b+=2*S)}for(let A=0;A<p.length;A++)p[A]=p[A]/b;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:w}=this;d.dTheta.value=g,d.mipInt.value=w-n;const M=this._sizeLods[i],R=3*M*(i>w-qi?i-w+qi:0),C=4*(this._cubeSize-M);Ir(t,R,C,3*M,2*M),l.setRenderTarget(t),l.render(u,Ba)}}function e0(s){const e=[],t=[],n=[];let i=s;const r=s-qi+1+Oc.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>s-qi?l=Oc[a-s+qi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,b=new Float32Array(_*g*f),w=new Float32Array(m*g*f),M=new Float32Array(p*g*f);for(let C=0;C<f;C++){const A=C%3*2/3-1,L=C>2?0:-1,S=[A,L,0,A+2/3,L,0,A+2/3,L+1,0,A,L,0,A+2/3,L+1,0,A,L+1,0];b.set(S,_*g*C),w.set(d,m*g*C);const v=[C,C,C,C,C,C];M.set(v,p*g*C)}const R=new Ft;R.setAttribute("position",new Xt(b,_)),R.setAttribute("uv",new Xt(w,m)),R.setAttribute("faceIndex",new Xt(M,p)),e.push(R),i>qi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Vc(s,e,t){const n=new ai(s,e,t);return n.texture.mapping=ea,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ir(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function t0(s,e,t){const n=new Float32Array(Si),i=new E(0,1,0);return new Sn({name:"SphericalGaussianBlur",defines:{n:Si,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Pl(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Wc(){return new Sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pl(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Xc(){return new Sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Pl(){return`

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
	`}function n0(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===_o||l===xo,h=l===ns||l===is;if(c||h){let u=e.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Gc(s)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return c&&f&&f.height>0||h&&f&&i(f)?(t===null&&(t=new Gc(s)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function i0(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Xr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function s0(s,e,t,n){const i={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete i[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const f in d)e.update(d[f],s.ARRAY_BUFFER)}function c(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const b=f.array;_=f.version;for(let w=0,M=b.length;w<M;w+=3){const R=b[w+0],C=b[w+1],A=b[w+2];d.push(R,C,C,A,A,R)}}else if(g!==void 0){const b=g.array;_=g.version;for(let w=0,M=b.length/3-1;w<M;w+=3){const R=w+0,C=w+1,A=w+2;d.push(R,C,C,A,A,R)}}else return;const m=new(eu(d)?su:iu)(d,1);m.version=_;const p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function r0(s,e,t){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){s.drawElements(n,f,r,d*a),t.update(f,n,1)}function c(d,f,g){g!==0&&(s.drawElementsInstanced(n,f,r,d*a,g),t.update(f,n,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function u(d,f,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let p=0;for(let b=0;b<g;b++)p+=f[b]*_[b];t.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function a0(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function o0(s,e,t){const n=new WeakMap,i=new nt;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let v=function(){L.dispose(),n.delete(o),o.removeEventListener("dispose",v)};var f=v;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],b=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let M=0;g===!0&&(M=1),_===!0&&(M=2),m===!0&&(M=3);let R=o.attributes.position.count*M,C=1;R>e.maxTextureSize&&(C=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const A=new Float32Array(R*C*4*u),L=new tu(A,R,C,u);L.type=xn,L.needsUpdate=!0;const S=M*4;for(let P=0;P<u;P++){const z=p[P],k=b[P],W=w[P],$=R*C*4*P;for(let X=0;X<z.count;X++){const J=X*S;g===!0&&(i.fromBufferAttribute(z,X),A[$+J+0]=i.x,A[$+J+1]=i.y,A[$+J+2]=i.z,A[$+J+3]=0),_===!0&&(i.fromBufferAttribute(k,X),A[$+J+4]=i.x,A[$+J+5]=i.y,A[$+J+6]=i.z,A[$+J+7]=0),m===!0&&(i.fromBufferAttribute(W,X),A[$+J+8]=i.x,A[$+J+9]=i.y,A[$+J+10]=i.z,A[$+J+11]=W.itemSize===4?i.w:1)}}d={count:u,texture:L,size:new Re(R,C)},n.set(o,d),o.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function l0(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const Mu=new Tt,jc=new pu(1,1),Su=new tu,bu=new Zd,wu=new ou,Kc=[],Yc=[],qc=new Float32Array(16),$c=new Float32Array(9),Zc=new Float32Array(4);function ps(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Kc[i];if(r===void 0&&(r=new Float32Array(i),Kc[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Et(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function At(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function na(s,e){let t=Yc[e];t===void 0&&(t=new Int32Array(e),Yc[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function c0(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function h0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;s.uniform2fv(this.addr,e),At(t,e)}}function u0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;s.uniform3fv(this.addr,e),At(t,e)}}function d0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;s.uniform4fv(this.addr,e),At(t,e)}}function f0(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),At(t,e)}else{if(Et(t,n))return;Zc.set(n),s.uniformMatrix2fv(this.addr,!1,Zc),At(t,n)}}function p0(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),At(t,e)}else{if(Et(t,n))return;$c.set(n),s.uniformMatrix3fv(this.addr,!1,$c),At(t,n)}}function m0(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),At(t,e)}else{if(Et(t,n))return;qc.set(n),s.uniformMatrix4fv(this.addr,!1,qc),At(t,n)}}function g0(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function _0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;s.uniform2iv(this.addr,e),At(t,e)}}function x0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;s.uniform3iv(this.addr,e),At(t,e)}}function y0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;s.uniform4iv(this.addr,e),At(t,e)}}function v0(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function M0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;s.uniform2uiv(this.addr,e),At(t,e)}}function S0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;s.uniform3uiv(this.addr,e),At(t,e)}}function b0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;s.uniform4uiv(this.addr,e),At(t,e)}}function w0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(jc.compareFunction=Qh,r=jc):r=Mu,t.setTexture2D(e||r,i)}function T0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||bu,i)}function E0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||wu,i)}function A0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Su,i)}function C0(s){switch(s){case 5126:return c0;case 35664:return h0;case 35665:return u0;case 35666:return d0;case 35674:return f0;case 35675:return p0;case 35676:return m0;case 5124:case 35670:return g0;case 35667:case 35671:return _0;case 35668:case 35672:return x0;case 35669:case 35673:return y0;case 5125:return v0;case 36294:return M0;case 36295:return S0;case 36296:return b0;case 35678:case 36198:case 36298:case 36306:case 35682:return w0;case 35679:case 36299:case 36307:return T0;case 35680:case 36300:case 36308:case 36293:return E0;case 36289:case 36303:case 36311:case 36292:return A0}}function R0(s,e){s.uniform1fv(this.addr,e)}function I0(s,e){const t=ps(e,this.size,2);s.uniform2fv(this.addr,t)}function P0(s,e){const t=ps(e,this.size,3);s.uniform3fv(this.addr,t)}function L0(s,e){const t=ps(e,this.size,4);s.uniform4fv(this.addr,t)}function D0(s,e){const t=ps(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function N0(s,e){const t=ps(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function U0(s,e){const t=ps(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function F0(s,e){s.uniform1iv(this.addr,e)}function k0(s,e){s.uniform2iv(this.addr,e)}function B0(s,e){s.uniform3iv(this.addr,e)}function O0(s,e){s.uniform4iv(this.addr,e)}function z0(s,e){s.uniform1uiv(this.addr,e)}function H0(s,e){s.uniform2uiv(this.addr,e)}function G0(s,e){s.uniform3uiv(this.addr,e)}function V0(s,e){s.uniform4uiv(this.addr,e)}function W0(s,e,t){const n=this.cache,i=e.length,r=na(t,i);Et(n,r)||(s.uniform1iv(this.addr,r),At(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Mu,r[a])}function X0(s,e,t){const n=this.cache,i=e.length,r=na(t,i);Et(n,r)||(s.uniform1iv(this.addr,r),At(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||bu,r[a])}function j0(s,e,t){const n=this.cache,i=e.length,r=na(t,i);Et(n,r)||(s.uniform1iv(this.addr,r),At(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||wu,r[a])}function K0(s,e,t){const n=this.cache,i=e.length,r=na(t,i);Et(n,r)||(s.uniform1iv(this.addr,r),At(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Su,r[a])}function Y0(s){switch(s){case 5126:return R0;case 35664:return I0;case 35665:return P0;case 35666:return L0;case 35674:return D0;case 35675:return N0;case 35676:return U0;case 5124:case 35670:return F0;case 35667:case 35671:return k0;case 35668:case 35672:return B0;case 35669:case 35673:return O0;case 5125:return z0;case 36294:return H0;case 36295:return G0;case 36296:return V0;case 35678:case 36198:case 36298:case 36306:case 35682:return W0;case 35679:case 36299:case 36307:return X0;case 35680:case 36300:case 36308:case 36293:return j0;case 36289:case 36303:case 36311:case 36292:return K0}}class q0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=C0(t.type)}}class $0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Y0(t.type)}}class Z0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const Va=/(\w+)(\])?(\[|\.)?/g;function Jc(s,e){s.seq.push(e),s.map[e.id]=e}function J0(s,e,t){const n=s.name,i=n.length;for(Va.lastIndex=0;;){const r=Va.exec(n),a=Va.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Jc(t,c===void 0?new q0(o,s,e):new $0(o,s,e));break}else{let u=t.map[o];u===void 0&&(u=new Z0(o),Jc(t,u)),t=u}}}class jr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);J0(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Qc(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const Q0=37297;let e_=0;function t_(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const eh=new Be;function n_(s){Ke._getMatrix(eh,Ke.workingColorSpace,s);const e=`mat3( ${eh.elements.map(t=>t.toFixed(4))} )`;switch(Ke.getTransfer(s)){case $r:return[e,"LinearTransferOETF"];case ot:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function th(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+t_(s.getShaderSource(e),a)}else return i}function i_(s,e){const t=n_(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function s_(s,e){let t;switch(e){case Lh:t="Linear";break;case Dh:t="Reinhard";break;case Nh:t="Cineon";break;case Uh:t="ACESFilmic";break;case kh:t="AgX";break;case Bh:t="Neutral";break;case Fh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Pr=new E;function r_(){Ke.getLuminanceCoefficients(Pr);const s=Pr.x.toFixed(4),e=Pr.y.toFixed(4),t=Pr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function a_(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ps).join(`
`)}function o_(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function l_(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Ps(s){return s!==""}function nh(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ih(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const c_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jo(s){return s.replace(c_,u_)}const h_=new Map;function u_(s,e){let t=ze[e];if(t===void 0){const n=h_.get(e);if(n!==void 0)t=ze[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Jo(t)}const d_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sh(s){return s.replace(d_,f_)}function f_(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function rh(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function p_(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Rh?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Ih?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Bn&&(e="SHADOWMAP_TYPE_VSM"),e}function m_(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ns:case is:e="ENVMAP_TYPE_CUBE";break;case ea:e="ENVMAP_TYPE_CUBE_UV";break}return e}function g_(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case is:e="ENVMAP_MODE_REFRACTION";break}return e}function __(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Ph:e="ENVMAP_BLENDING_MULTIPLY";break;case hd:e="ENVMAP_BLENDING_MIX";break;case ud:e="ENVMAP_BLENDING_ADD";break}return e}function x_(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function y_(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=p_(t),c=m_(t),h=g_(t),u=__(t),d=x_(t),f=a_(t),g=o_(r),_=i.createProgram();let m,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ps).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ps).join(`
`),p.length>0&&(p+=`
`)):(m=[rh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ps).join(`
`),p=[rh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Wn?"#define TONE_MAPPING":"",t.toneMapping!==Wn?ze.tonemapping_pars_fragment:"",t.toneMapping!==Wn?s_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,i_("linearToOutputTexel",t.outputColorSpace),r_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ps).join(`
`)),a=Jo(a),a=nh(a,t),a=ih(a,t),o=Jo(o),o=nh(o,t),o=ih(o,t),a=sh(a),o=sh(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===$l?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===$l?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const w=b+m+a,M=b+p+o,R=Qc(i,i.VERTEX_SHADER,w),C=Qc(i,i.FRAGMENT_SHADER,M);i.attachShader(_,R),i.attachShader(_,C),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function A(P){if(s.debug.checkShaderErrors){const z=i.getProgramInfoLog(_).trim(),k=i.getShaderInfoLog(R).trim(),W=i.getShaderInfoLog(C).trim();let $=!0,X=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if($=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,R,C);else{const J=th(i,R,"vertex"),V=th(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+z+`
`+J+`
`+V)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(k===""||W==="")&&(X=!1);X&&(P.diagnostics={runnable:$,programLog:z,vertexShader:{log:k,prefix:m},fragmentShader:{log:W,prefix:p}})}i.deleteShader(R),i.deleteShader(C),L=new jr(i,_),S=l_(i,_)}let L;this.getUniforms=function(){return L===void 0&&A(this),L};let S;this.getAttributes=function(){return S===void 0&&A(this),S};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(_,Q0)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=e_++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=C,this}let v_=0;class M_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new S_(e),t.set(e,n)),n}}class S_{constructor(e){this.id=v_++,this.code=e,this.usedTimes=0}}function b_(s,e,t,n,i,r,a){const o=new xl,l=new M_,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,v,P,z,k){const W=z.fog,$=k.geometry,X=S.isMeshStandardMaterial?z.environment:null,J=(S.isMeshStandardMaterial?t:e).get(S.envMap||X),V=J&&J.mapping===ea?J.image.height:null,oe=g[S.type];S.precision!==null&&(f=i.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const me=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Te=me!==void 0?me.length:0;let Xe=0;$.morphAttributes.position!==void 0&&(Xe=1),$.morphAttributes.normal!==void 0&&(Xe=2),$.morphAttributes.color!==void 0&&(Xe=3);let ct,K,se,Me;if(oe){const at=Tn[oe];ct=at.vertexShader,K=at.fragmentShader}else ct=S.vertexShader,K=S.fragmentShader,l.update(S),se=l.getVertexShaderID(S),Me=l.getFragmentShaderID(S);const le=s.getRenderTarget(),Ie=s.state.buffers.depth.getReversed(),tt=k.isInstancedMesh===!0,Le=k.isBatchedMesh===!0,Mt=!!S.map,_t=!!S.matcap,Ye=!!J,I=!!S.aoMap,nn=!!S.lightMap,Ze=!!S.bumpMap,qe=!!S.normalMap,Ee=!!S.displacementMap,ft=!!S.emissiveMap,be=!!S.metalnessMap,T=!!S.roughnessMap,x=S.anisotropy>0,F=S.clearcoat>0,Y=S.dispersion>0,Z=S.iridescence>0,j=S.sheen>0,Se=S.transmission>0,ce=x&&!!S.anisotropyMap,ge=F&&!!S.clearcoatMap,Je=F&&!!S.clearcoatNormalMap,ne=F&&!!S.clearcoatRoughnessMap,xe=Z&&!!S.iridescenceMap,Pe=Z&&!!S.iridescenceThicknessMap,Ne=j&&!!S.sheenColorMap,ye=j&&!!S.sheenRoughnessMap,$e=!!S.specularMap,Oe=!!S.specularColorMap,ht=!!S.specularIntensityMap,D=Se&&!!S.transmissionMap,he=Se&&!!S.thicknessMap,G=!!S.gradientMap,q=!!S.alphaMap,de=S.alphaTest>0,ue=!!S.alphaHash,ke=!!S.extensions;let yt=Wn;S.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(yt=s.toneMapping);const kt={shaderID:oe,shaderType:S.type,shaderName:S.name,vertexShader:ct,fragmentShader:K,defines:S.defines,customVertexShaderID:se,customFragmentShaderID:Me,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Le,batchingColor:Le&&k._colorsTexture!==null,instancing:tt,instancingColor:tt&&k.instanceColor!==null,instancingMorph:tt&&k.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:le===null?s.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:jt,alphaToCoverage:!!S.alphaToCoverage,map:Mt,matcap:_t,envMap:Ye,envMapMode:Ye&&J.mapping,envMapCubeUVHeight:V,aoMap:I,lightMap:nn,bumpMap:Ze,normalMap:qe,displacementMap:d&&Ee,emissiveMap:ft,normalMapObjectSpace:qe&&S.normalMapType===xd,normalMapTangentSpace:qe&&S.normalMapType===ml,metalnessMap:be,roughnessMap:T,anisotropy:x,anisotropyMap:ce,clearcoat:F,clearcoatMap:ge,clearcoatNormalMap:Je,clearcoatRoughnessMap:ne,dispersion:Y,iridescence:Z,iridescenceMap:xe,iridescenceThicknessMap:Pe,sheen:j,sheenColorMap:Ne,sheenRoughnessMap:ye,specularMap:$e,specularColorMap:Oe,specularIntensityMap:ht,transmission:Se,transmissionMap:D,thicknessMap:he,gradientMap:G,opaque:S.transparent===!1&&S.blending===Ji&&S.alphaToCoverage===!1,alphaMap:q,alphaTest:de,alphaHash:ue,combine:S.combine,mapUv:Mt&&_(S.map.channel),aoMapUv:I&&_(S.aoMap.channel),lightMapUv:nn&&_(S.lightMap.channel),bumpMapUv:Ze&&_(S.bumpMap.channel),normalMapUv:qe&&_(S.normalMap.channel),displacementMapUv:Ee&&_(S.displacementMap.channel),emissiveMapUv:ft&&_(S.emissiveMap.channel),metalnessMapUv:be&&_(S.metalnessMap.channel),roughnessMapUv:T&&_(S.roughnessMap.channel),anisotropyMapUv:ce&&_(S.anisotropyMap.channel),clearcoatMapUv:ge&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:Je&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Pe&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:ye&&_(S.sheenRoughnessMap.channel),specularMapUv:$e&&_(S.specularMap.channel),specularColorMapUv:Oe&&_(S.specularColorMap.channel),specularIntensityMapUv:ht&&_(S.specularIntensityMap.channel),transmissionMapUv:D&&_(S.transmissionMap.channel),thicknessMapUv:he&&_(S.thicknessMap.channel),alphaMapUv:q&&_(S.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(qe||x),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!$.attributes.uv&&(Mt||q),fog:!!W,useFog:S.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ie,skinning:k.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:Te,morphTextureStride:Xe,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:yt,decodeVideoTexture:Mt&&S.map.isVideoTexture===!0&&Ke.getTransfer(S.map.colorSpace)===ot,decodeVideoTextureEmissive:ft&&S.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(S.emissiveMap.colorSpace)===ot,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===gn,flipSided:S.side===zt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:ke&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ke&&S.extensions.multiDraw===!0||Le)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return kt.vertexUv1s=c.has(1),kt.vertexUv2s=c.has(2),kt.vertexUv3s=c.has(3),c.clear(),kt}function p(S){const v=[];if(S.shaderID?v.push(S.shaderID):(v.push(S.customVertexShaderID),v.push(S.customFragmentShaderID)),S.defines!==void 0)for(const P in S.defines)v.push(P),v.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(b(v,S),w(v,S),v.push(s.outputColorSpace)),v.push(S.customProgramCacheKey),v.join()}function b(S,v){S.push(v.precision),S.push(v.outputColorSpace),S.push(v.envMapMode),S.push(v.envMapCubeUVHeight),S.push(v.mapUv),S.push(v.alphaMapUv),S.push(v.lightMapUv),S.push(v.aoMapUv),S.push(v.bumpMapUv),S.push(v.normalMapUv),S.push(v.displacementMapUv),S.push(v.emissiveMapUv),S.push(v.metalnessMapUv),S.push(v.roughnessMapUv),S.push(v.anisotropyMapUv),S.push(v.clearcoatMapUv),S.push(v.clearcoatNormalMapUv),S.push(v.clearcoatRoughnessMapUv),S.push(v.iridescenceMapUv),S.push(v.iridescenceThicknessMapUv),S.push(v.sheenColorMapUv),S.push(v.sheenRoughnessMapUv),S.push(v.specularMapUv),S.push(v.specularColorMapUv),S.push(v.specularIntensityMapUv),S.push(v.transmissionMapUv),S.push(v.thicknessMapUv),S.push(v.combine),S.push(v.fogExp2),S.push(v.sizeAttenuation),S.push(v.morphTargetsCount),S.push(v.morphAttributeCount),S.push(v.numDirLights),S.push(v.numPointLights),S.push(v.numSpotLights),S.push(v.numSpotLightMaps),S.push(v.numHemiLights),S.push(v.numRectAreaLights),S.push(v.numDirLightShadows),S.push(v.numPointLightShadows),S.push(v.numSpotLightShadows),S.push(v.numSpotLightShadowsWithMaps),S.push(v.numLightProbes),S.push(v.shadowMapType),S.push(v.toneMapping),S.push(v.numClippingPlanes),S.push(v.numClipIntersection),S.push(v.depthPacking)}function w(S,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),v.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reverseDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),S.push(o.mask)}function M(S){const v=g[S.type];let P;if(v){const z=Tn[v];P=yl.clone(z.uniforms)}else P=S.uniforms;return P}function R(S,v){let P;for(let z=0,k=h.length;z<k;z++){const W=h[z];if(W.cacheKey===v){P=W,++P.usedTimes;break}}return P===void 0&&(P=new y_(s,v,S,r),h.push(P)),P}function C(S){if(--S.usedTimes===0){const v=h.indexOf(S);h[v]=h[h.length-1],h.pop(),S.destroy()}}function A(S){l.remove(S)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:R,releaseProgram:C,releaseShaderCache:A,programs:h,dispose:L}}function w_(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function T_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function ah(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function oh(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(u,d,f,g,_,m){let p=s[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},s[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),e++,p}function o(u,d,f,g,_,m){const p=a(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function l(u,d,f,g,_,m){const p=a(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||T_),n.length>1&&n.sort(d||ah),i.length>1&&i.sort(d||ah)}function h(){for(let u=e,d=s.length;u<d;u++){const f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function E_(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new oh,s.set(n,[a])):i>=r.length?(a=new oh,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function A_(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new E,color:new _e};break;case"SpotLight":t={position:new E,direction:new E,color:new _e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new E,color:new _e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new E,skyColor:new _e,groundColor:new _e};break;case"RectAreaLight":t={color:new _e,position:new E,halfWidth:new E,halfHeight:new E};break}return s[e.id]=t,t}}}function C_(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let R_=0;function I_(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function P_(s){const e=new A_,t=C_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new E);const i=new E,r=new Fe,a=new Fe;function o(c){let h=0,u=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,b=0,w=0,M=0,R=0,C=0,A=0;c.sort(I_);for(let S=0,v=c.length;S<v;S++){const P=c[S],z=P.color,k=P.intensity,W=P.distance,$=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=z.r*k,u+=z.g*k,d+=z.b*k;else if(P.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(P.sh.coefficients[X],k);A++}else if(P.isDirectionalLight){const X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const J=P.shadow,V=t.get(P);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,n.directionalShadow[f]=V,n.directionalShadowMap[f]=$,n.directionalShadowMatrix[f]=P.shadow.matrix,b++}n.directional[f]=X,f++}else if(P.isSpotLight){const X=e.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(z).multiplyScalar(k),X.distance=W,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,n.spot[_]=X;const J=P.shadow;if(P.map&&(n.spotLightMap[R]=P.map,R++,J.updateMatrices(P),P.castShadow&&C++),n.spotLightMatrix[_]=J.matrix,P.castShadow){const V=t.get(P);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,n.spotShadow[_]=V,n.spotShadowMap[_]=$,M++}_++}else if(P.isRectAreaLight){const X=e.get(P);X.color.copy(z).multiplyScalar(k),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=X,m++}else if(P.isPointLight){const X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),X.distance=P.distance,X.decay=P.decay,P.castShadow){const J=P.shadow,V=t.get(P);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,V.shadowCameraNear=J.camera.near,V.shadowCameraFar=J.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=$,n.pointShadowMatrix[g]=P.shadow.matrix,w++}n.point[g]=X,g++}else if(P.isHemisphereLight){const X=e.get(P);X.skyColor.copy(P.color).multiplyScalar(k),X.groundColor.copy(P.groundColor).multiplyScalar(k),n.hemi[p]=X,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=re.LTC_FLOAT_1,n.rectAreaLTC2=re.LTC_FLOAT_2):(n.rectAreaLTC1=re.LTC_HALF_1,n.rectAreaLTC2=re.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const L=n.hash;(L.directionalLength!==f||L.pointLength!==g||L.spotLength!==_||L.rectAreaLength!==m||L.hemiLength!==p||L.numDirectionalShadows!==b||L.numPointShadows!==w||L.numSpotShadows!==M||L.numSpotMaps!==R||L.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=M+R-C,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=A,L.directionalLength=f,L.pointLength=g,L.spotLength=_,L.rectAreaLength=m,L.hemiLength=p,L.numDirectionalShadows=b,L.numPointShadows=w,L.numSpotShadows=M,L.numSpotMaps=R,L.numLightProbes=A,n.version=R_++)}function l(c,h){let u=0,d=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){const w=c[p];if(w.isDirectionalLight){const M=n.directional[u];M.direction.setFromMatrixPosition(w.matrixWorld),i.setFromMatrixPosition(w.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(m),u++}else if(w.isSpotLight){const M=n.spot[f];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(w.matrixWorld),i.setFromMatrixPosition(w.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(m),f++}else if(w.isRectAreaLight){const M=n.rectArea[g];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(m),a.identity(),r.copy(w.matrixWorld),r.premultiply(m),a.extractRotation(r),M.halfWidth.set(w.width*.5,0,0),M.halfHeight.set(0,w.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(w.isPointLight){const M=n.point[d];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(m),d++}else if(w.isHemisphereLight){const M=n.hemi[_];M.direction.setFromMatrixPosition(w.matrixWorld),M.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function lh(s){const e=new P_(s),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function L_(s){let e=new WeakMap;function t(i,r=0){const a=e.get(i);let o;return a===void 0?(o=new lh(s),e.set(i,[o])):r>=a.length?(o=new lh(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const D_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,N_=`uniform sampler2D shadow_pass;
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
}`;function U_(s,e,t){let n=new Sl;const i=new Re,r=new Re,a=new nt,o=new If({depthPacking:_d}),l=new Pf,c={},h=t.maxTextureSize,u={[En]:zt,[zt]:En,[gn]:gn},d=new Sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Re},radius:{value:4}},vertexShader:D_,fragmentShader:N_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Ft;g.setAttribute("position",new Xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new te(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rh;let p=this.type;this.render=function(C,A,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const S=s.getRenderTarget(),v=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),z=s.state;z.setBlending(Vn),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const k=p!==Bn&&this.type===Bn,W=p===Bn&&this.type!==Bn;for(let $=0,X=C.length;$<X;$++){const J=C[$],V=J.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const oe=V.getFrameExtents();if(i.multiply(oe),r.copy(V.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/oe.x),i.x=r.x*oe.x,V.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/oe.y),i.y=r.y*oe.y,V.mapSize.y=r.y)),V.map===null||k===!0||W===!0){const Te=this.type!==Bn?{minFilter:Ut,magFilter:Ut}:{};V.map!==null&&V.map.dispose(),V.map=new ai(i.x,i.y,Te),V.map.texture.name=J.name+".shadowMap",V.camera.updateProjectionMatrix()}s.setRenderTarget(V.map),s.clear();const me=V.getViewportCount();for(let Te=0;Te<me;Te++){const Xe=V.getViewport(Te);a.set(r.x*Xe.x,r.y*Xe.y,r.x*Xe.z,r.y*Xe.w),z.viewport(a),V.updateMatrices(J,Te),n=V.getFrustum(),M(A,L,V.camera,J,this.type)}V.isPointLightShadow!==!0&&this.type===Bn&&b(V,L),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(S,v,P)};function b(C,A){const L=e.update(_);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new ai(i.x,i.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,s.setRenderTarget(C.mapPass),s.clear(),s.renderBufferDirect(A,null,L,d,_,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,s.setRenderTarget(C.map),s.clear(),s.renderBufferDirect(A,null,L,f,_,null)}function w(C,A,L,S){let v=null;const P=L.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(P!==void 0)v=P;else if(v=L.isPointLight===!0?l:o,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const z=v.uuid,k=A.uuid;let W=c[z];W===void 0&&(W={},c[z]=W);let $=W[k];$===void 0&&($=v.clone(),W[k]=$,A.addEventListener("dispose",R)),v=$}if(v.visible=A.visible,v.wireframe=A.wireframe,S===Bn?v.side=A.shadowSide!==null?A.shadowSide:A.side:v.side=A.shadowSide!==null?A.shadowSide:u[A.side],v.alphaMap=A.alphaMap,v.alphaTest=A.alphaTest,v.map=A.map,v.clipShadows=A.clipShadows,v.clippingPlanes=A.clippingPlanes,v.clipIntersection=A.clipIntersection,v.displacementMap=A.displacementMap,v.displacementScale=A.displacementScale,v.displacementBias=A.displacementBias,v.wireframeLinewidth=A.wireframeLinewidth,v.linewidth=A.linewidth,L.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const z=s.properties.get(v);z.light=L}return v}function M(C,A,L,S,v){if(C.visible===!1)return;if(C.layers.test(A.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&v===Bn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,C.matrixWorld);const k=e.update(C),W=C.material;if(Array.isArray(W)){const $=k.groups;for(let X=0,J=$.length;X<J;X++){const V=$[X],oe=W[V.materialIndex];if(oe&&oe.visible){const me=w(C,oe,S,v);C.onBeforeShadow(s,C,A,L,k,me,V),s.renderBufferDirect(L,null,k,me,C,V),C.onAfterShadow(s,C,A,L,k,me,V)}}}else if(W.visible){const $=w(C,W,S,v);C.onBeforeShadow(s,C,A,L,k,$,null),s.renderBufferDirect(L,null,k,$,C,null),C.onAfterShadow(s,C,A,L,k,$,null)}}const z=C.children;for(let k=0,W=z.length;k<W;k++)M(z[k],A,L,S,v)}function R(C){C.target.removeEventListener("dispose",R);for(const L in c){const S=c[L],v=C.target.uuid;v in S&&(S[v].dispose(),delete S[v])}}}const F_={[co]:ho,[uo]:mo,[fo]:go,[ts]:po,[ho]:co,[mo]:uo,[go]:fo,[po]:ts};function k_(s,e){function t(){let D=!1;const he=new nt;let G=null;const q=new nt(0,0,0,0);return{setMask:function(de){G!==de&&!D&&(s.colorMask(de,de,de,de),G=de)},setLocked:function(de){D=de},setClear:function(de,ue,ke,yt,kt){kt===!0&&(de*=yt,ue*=yt,ke*=yt),he.set(de,ue,ke,yt),q.equals(he)===!1&&(s.clearColor(de,ue,ke,yt),q.copy(he))},reset:function(){D=!1,G=null,q.set(-1,0,0,0)}}}function n(){let D=!1,he=!1,G=null,q=null,de=null;return{setReversed:function(ue){if(he!==ue){const ke=e.get("EXT_clip_control");ue?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT),he=ue;const yt=de;de=null,this.setClear(yt)}},getReversed:function(){return he},setTest:function(ue){ue?le(s.DEPTH_TEST):Ie(s.DEPTH_TEST)},setMask:function(ue){G!==ue&&!D&&(s.depthMask(ue),G=ue)},setFunc:function(ue){if(he&&(ue=F_[ue]),q!==ue){switch(ue){case co:s.depthFunc(s.NEVER);break;case ho:s.depthFunc(s.ALWAYS);break;case uo:s.depthFunc(s.LESS);break;case ts:s.depthFunc(s.LEQUAL);break;case fo:s.depthFunc(s.EQUAL);break;case po:s.depthFunc(s.GEQUAL);break;case mo:s.depthFunc(s.GREATER);break;case go:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}q=ue}},setLocked:function(ue){D=ue},setClear:function(ue){de!==ue&&(he&&(ue=1-ue),s.clearDepth(ue),de=ue)},reset:function(){D=!1,G=null,q=null,de=null,he=!1}}}function i(){let D=!1,he=null,G=null,q=null,de=null,ue=null,ke=null,yt=null,kt=null;return{setTest:function(at){D||(at?le(s.STENCIL_TEST):Ie(s.STENCIL_TEST))},setMask:function(at){he!==at&&!D&&(s.stencilMask(at),he=at)},setFunc:function(at,un,Pn){(G!==at||q!==un||de!==Pn)&&(s.stencilFunc(at,un,Pn),G=at,q=un,de=Pn)},setOp:function(at,un,Pn){(ue!==at||ke!==un||yt!==Pn)&&(s.stencilOp(at,un,Pn),ue=at,ke=un,yt=Pn)},setLocked:function(at){D=at},setClear:function(at){kt!==at&&(s.clearStencil(at),kt=at)},reset:function(){D=!1,he=null,G=null,q=null,de=null,ue=null,ke=null,yt=null,kt=null}}}const r=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,b=null,w=null,M=null,R=null,C=null,A=new _e(0,0,0),L=0,S=!1,v=null,P=null,z=null,k=null,W=null;const $=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,J=0;const V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(V)[1]),X=J>=1):V.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),X=J>=2);let oe=null,me={};const Te=s.getParameter(s.SCISSOR_BOX),Xe=s.getParameter(s.VIEWPORT),ct=new nt().fromArray(Te),K=new nt().fromArray(Xe);function se(D,he,G,q){const de=new Uint8Array(4),ue=s.createTexture();s.bindTexture(D,ue),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ke=0;ke<G;ke++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(he,0,s.RGBA,1,1,q,0,s.RGBA,s.UNSIGNED_BYTE,de):s.texImage2D(he+ke,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,de);return ue}const Me={};Me[s.TEXTURE_2D]=se(s.TEXTURE_2D,s.TEXTURE_2D,1),Me[s.TEXTURE_CUBE_MAP]=se(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[s.TEXTURE_2D_ARRAY]=se(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Me[s.TEXTURE_3D]=se(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),le(s.DEPTH_TEST),a.setFunc(ts),Ze(!1),qe(Wl),le(s.CULL_FACE),I(Vn);function le(D){h[D]!==!0&&(s.enable(D),h[D]=!0)}function Ie(D){h[D]!==!1&&(s.disable(D),h[D]=!1)}function tt(D,he){return u[D]!==he?(s.bindFramebuffer(D,he),u[D]=he,D===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=he),D===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=he),!0):!1}function Le(D,he){let G=f,q=!1;if(D){G=d.get(he),G===void 0&&(G=[],d.set(he,G));const de=D.textures;if(G.length!==de.length||G[0]!==s.COLOR_ATTACHMENT0){for(let ue=0,ke=de.length;ue<ke;ue++)G[ue]=s.COLOR_ATTACHMENT0+ue;G.length=de.length,q=!0}}else G[0]!==s.BACK&&(G[0]=s.BACK,q=!0);q&&s.drawBuffers(G)}function Mt(D){return g!==D?(s.useProgram(D),g=D,!0):!1}const _t={[Mi]:s.FUNC_ADD,[Ku]:s.FUNC_SUBTRACT,[Yu]:s.FUNC_REVERSE_SUBTRACT};_t[qu]=s.MIN,_t[$u]=s.MAX;const Ye={[Zu]:s.ZERO,[Ju]:s.ONE,[Qu]:s.SRC_COLOR,[oo]:s.SRC_ALPHA,[rd]:s.SRC_ALPHA_SATURATE,[id]:s.DST_COLOR,[td]:s.DST_ALPHA,[ed]:s.ONE_MINUS_SRC_COLOR,[lo]:s.ONE_MINUS_SRC_ALPHA,[sd]:s.ONE_MINUS_DST_COLOR,[nd]:s.ONE_MINUS_DST_ALPHA,[ad]:s.CONSTANT_COLOR,[od]:s.ONE_MINUS_CONSTANT_COLOR,[ld]:s.CONSTANT_ALPHA,[cd]:s.ONE_MINUS_CONSTANT_ALPHA};function I(D,he,G,q,de,ue,ke,yt,kt,at){if(D===Vn){_===!0&&(Ie(s.BLEND),_=!1);return}if(_===!1&&(le(s.BLEND),_=!0),D!==ju){if(D!==m||at!==S){if((p!==Mi||M!==Mi)&&(s.blendEquation(s.FUNC_ADD),p=Mi,M=Mi),at)switch(D){case Ji:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Xl:s.blendFunc(s.ONE,s.ONE);break;case jl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Kl:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Ji:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Xl:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case jl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Kl:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}b=null,w=null,R=null,C=null,A.set(0,0,0),L=0,m=D,S=at}return}de=de||he,ue=ue||G,ke=ke||q,(he!==p||de!==M)&&(s.blendEquationSeparate(_t[he],_t[de]),p=he,M=de),(G!==b||q!==w||ue!==R||ke!==C)&&(s.blendFuncSeparate(Ye[G],Ye[q],Ye[ue],Ye[ke]),b=G,w=q,R=ue,C=ke),(yt.equals(A)===!1||kt!==L)&&(s.blendColor(yt.r,yt.g,yt.b,kt),A.copy(yt),L=kt),m=D,S=!1}function nn(D,he){D.side===gn?Ie(s.CULL_FACE):le(s.CULL_FACE);let G=D.side===zt;he&&(G=!G),Ze(G),D.blending===Ji&&D.transparent===!1?I(Vn):I(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);const q=D.stencilWrite;o.setTest(q),q&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ft(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?le(s.SAMPLE_ALPHA_TO_COVERAGE):Ie(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ze(D){v!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),v=D)}function qe(D){D!==Wu?(le(s.CULL_FACE),D!==P&&(D===Wl?s.cullFace(s.BACK):D===Xu?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ie(s.CULL_FACE),P=D}function Ee(D){D!==z&&(X&&s.lineWidth(D),z=D)}function ft(D,he,G){D?(le(s.POLYGON_OFFSET_FILL),(k!==he||W!==G)&&(s.polygonOffset(he,G),k=he,W=G)):Ie(s.POLYGON_OFFSET_FILL)}function be(D){D?le(s.SCISSOR_TEST):Ie(s.SCISSOR_TEST)}function T(D){D===void 0&&(D=s.TEXTURE0+$-1),oe!==D&&(s.activeTexture(D),oe=D)}function x(D,he,G){G===void 0&&(oe===null?G=s.TEXTURE0+$-1:G=oe);let q=me[G];q===void 0&&(q={type:void 0,texture:void 0},me[G]=q),(q.type!==D||q.texture!==he)&&(oe!==G&&(s.activeTexture(G),oe=G),s.bindTexture(D,he||Me[D]),q.type=D,q.texture=he)}function F(){const D=me[oe];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Y(){try{s.compressedTexImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Z(){try{s.compressedTexImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function j(){try{s.texSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Se(){try{s.texSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ce(){try{s.compressedTexSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ge(){try{s.compressedTexSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Je(){try{s.texStorage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ne(){try{s.texStorage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xe(){try{s.texImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Pe(){try{s.texImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ne(D){ct.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),ct.copy(D))}function ye(D){K.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),K.copy(D))}function $e(D,he){let G=c.get(he);G===void 0&&(G=new WeakMap,c.set(he,G));let q=G.get(D);q===void 0&&(q=s.getUniformBlockIndex(he,D.name),G.set(D,q))}function Oe(D,he){const q=c.get(he).get(D);l.get(he)!==q&&(s.uniformBlockBinding(he,q,D.__bindingPointIndex),l.set(he,q))}function ht(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},oe=null,me={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,b=null,w=null,M=null,R=null,C=null,A=new _e(0,0,0),L=0,S=!1,v=null,P=null,z=null,k=null,W=null,ct.set(0,0,s.canvas.width,s.canvas.height),K.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:le,disable:Ie,bindFramebuffer:tt,drawBuffers:Le,useProgram:Mt,setBlending:I,setMaterial:nn,setFlipSided:Ze,setCullFace:qe,setLineWidth:Ee,setPolygonOffset:ft,setScissorTest:be,activeTexture:T,bindTexture:x,unbindTexture:F,compressedTexImage2D:Y,compressedTexImage3D:Z,texImage2D:xe,texImage3D:Pe,updateUBOMapping:$e,uniformBlockBinding:Oe,texStorage2D:Je,texStorage3D:ne,texSubImage2D:j,texSubImage3D:Se,compressedTexSubImage2D:ce,compressedTexSubImage3D:ge,scissor:Ne,viewport:ye,reset:ht}}function B_(s,e,t,n,i,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Re,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,x){return f?new OffscreenCanvas(T,x):Vs("canvas")}function _(T,x,F){let Y=1;const Z=be(T);if((Z.width>F||Z.height>F)&&(Y=F/Math.max(Z.width,Z.height)),Y<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const j=Math.floor(Y*Z.width),Se=Math.floor(Y*Z.height);u===void 0&&(u=g(j,Se));const ce=x?g(j,Se):u;return ce.width=j,ce.height=Se,ce.getContext("2d").drawImage(T,0,0,j,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+j+"x"+Se+")."),ce}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){s.generateMipmap(T)}function b(T){return T.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?s.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function w(T,x,F,Y,Z=!1){if(T!==null){if(s[T]!==void 0)return s[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let j=x;if(x===s.RED&&(F===s.FLOAT&&(j=s.R32F),F===s.HALF_FLOAT&&(j=s.R16F),F===s.UNSIGNED_BYTE&&(j=s.R8)),x===s.RED_INTEGER&&(F===s.UNSIGNED_BYTE&&(j=s.R8UI),F===s.UNSIGNED_SHORT&&(j=s.R16UI),F===s.UNSIGNED_INT&&(j=s.R32UI),F===s.BYTE&&(j=s.R8I),F===s.SHORT&&(j=s.R16I),F===s.INT&&(j=s.R32I)),x===s.RG&&(F===s.FLOAT&&(j=s.RG32F),F===s.HALF_FLOAT&&(j=s.RG16F),F===s.UNSIGNED_BYTE&&(j=s.RG8)),x===s.RG_INTEGER&&(F===s.UNSIGNED_BYTE&&(j=s.RG8UI),F===s.UNSIGNED_SHORT&&(j=s.RG16UI),F===s.UNSIGNED_INT&&(j=s.RG32UI),F===s.BYTE&&(j=s.RG8I),F===s.SHORT&&(j=s.RG16I),F===s.INT&&(j=s.RG32I)),x===s.RGB_INTEGER&&(F===s.UNSIGNED_BYTE&&(j=s.RGB8UI),F===s.UNSIGNED_SHORT&&(j=s.RGB16UI),F===s.UNSIGNED_INT&&(j=s.RGB32UI),F===s.BYTE&&(j=s.RGB8I),F===s.SHORT&&(j=s.RGB16I),F===s.INT&&(j=s.RGB32I)),x===s.RGBA_INTEGER&&(F===s.UNSIGNED_BYTE&&(j=s.RGBA8UI),F===s.UNSIGNED_SHORT&&(j=s.RGBA16UI),F===s.UNSIGNED_INT&&(j=s.RGBA32UI),F===s.BYTE&&(j=s.RGBA8I),F===s.SHORT&&(j=s.RGBA16I),F===s.INT&&(j=s.RGBA32I)),x===s.RGB&&F===s.UNSIGNED_INT_5_9_9_9_REV&&(j=s.RGB9_E5),x===s.RGBA){const Se=Z?$r:Ke.getTransfer(Y);F===s.FLOAT&&(j=s.RGBA32F),F===s.HALF_FLOAT&&(j=s.RGBA16F),F===s.UNSIGNED_BYTE&&(j=Se===ot?s.SRGB8_ALPHA8:s.RGBA8),F===s.UNSIGNED_SHORT_4_4_4_4&&(j=s.RGBA4),F===s.UNSIGNED_SHORT_5_5_5_1&&(j=s.RGB5_A1)}return(j===s.R16F||j===s.R32F||j===s.RG16F||j===s.RG32F||j===s.RGBA16F||j===s.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function M(T,x){let F;return T?x===null||x===Ti||x===Bs?F=s.DEPTH24_STENCIL8:x===xn?F=s.DEPTH32F_STENCIL8:x===ks&&(F=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Ti||x===Bs?F=s.DEPTH_COMPONENT24:x===xn?F=s.DEPTH_COMPONENT32F:x===ks&&(F=s.DEPTH_COMPONENT16),F}function R(T,x){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Ut&&T.minFilter!==Qt?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function C(T){const x=T.target;x.removeEventListener("dispose",C),L(x),x.isVideoTexture&&h.delete(x)}function A(T){const x=T.target;x.removeEventListener("dispose",A),v(x)}function L(T){const x=n.get(T);if(x.__webglInit===void 0)return;const F=T.source,Y=d.get(F);if(Y){const Z=Y[x.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&S(T),Object.keys(Y).length===0&&d.delete(F)}n.remove(T)}function S(T){const x=n.get(T);s.deleteTexture(x.__webglTexture);const F=T.source,Y=d.get(F);delete Y[x.__cacheKey],a.memory.textures--}function v(T){const x=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(x.__webglFramebuffer[Y]))for(let Z=0;Z<x.__webglFramebuffer[Y].length;Z++)s.deleteFramebuffer(x.__webglFramebuffer[Y][Z]);else s.deleteFramebuffer(x.__webglFramebuffer[Y]);x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer[Y])}else{if(Array.isArray(x.__webglFramebuffer))for(let Y=0;Y<x.__webglFramebuffer.length;Y++)s.deleteFramebuffer(x.__webglFramebuffer[Y]);else s.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&s.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Y=0;Y<x.__webglColorRenderbuffer.length;Y++)x.__webglColorRenderbuffer[Y]&&s.deleteRenderbuffer(x.__webglColorRenderbuffer[Y]);x.__webglDepthRenderbuffer&&s.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const F=T.textures;for(let Y=0,Z=F.length;Y<Z;Y++){const j=n.get(F[Y]);j.__webglTexture&&(s.deleteTexture(j.__webglTexture),a.memory.textures--),n.remove(F[Y])}n.remove(T)}let P=0;function z(){P=0}function k(){const T=P;return T>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+i.maxTextures),P+=1,T}function W(T){const x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function $(T,x){const F=n.get(T);if(T.isVideoTexture&&Ee(T),T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){const Y=T.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(F,T,x);return}}t.bindTexture(s.TEXTURE_2D,F.__webglTexture,s.TEXTURE0+x)}function X(T,x){const F=n.get(T);if(T.version>0&&F.__version!==T.version){K(F,T,x);return}t.bindTexture(s.TEXTURE_2D_ARRAY,F.__webglTexture,s.TEXTURE0+x)}function J(T,x){const F=n.get(T);if(T.version>0&&F.__version!==T.version){K(F,T,x);return}t.bindTexture(s.TEXTURE_3D,F.__webglTexture,s.TEXTURE0+x)}function V(T,x){const F=n.get(T);if(T.version>0&&F.__version!==T.version){se(F,T,x);return}t.bindTexture(s.TEXTURE_CUBE_MAP,F.__webglTexture,s.TEXTURE0+x)}const oe={[wi]:s.REPEAT,[si]:s.CLAMP_TO_EDGE,[Yr]:s.MIRRORED_REPEAT},me={[Ut]:s.NEAREST,[zh]:s.NEAREST_MIPMAP_NEAREST,[Is]:s.NEAREST_MIPMAP_LINEAR,[Qt]:s.LINEAR,[Or]:s.LINEAR_MIPMAP_NEAREST,[Hn]:s.LINEAR_MIPMAP_LINEAR},Te={[yd]:s.NEVER,[Td]:s.ALWAYS,[vd]:s.LESS,[Qh]:s.LEQUAL,[Md]:s.EQUAL,[wd]:s.GEQUAL,[Sd]:s.GREATER,[bd]:s.NOTEQUAL};function Xe(T,x){if(x.type===xn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Qt||x.magFilter===Or||x.magFilter===Is||x.magFilter===Hn||x.minFilter===Qt||x.minFilter===Or||x.minFilter===Is||x.minFilter===Hn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(T,s.TEXTURE_WRAP_S,oe[x.wrapS]),s.texParameteri(T,s.TEXTURE_WRAP_T,oe[x.wrapT]),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,oe[x.wrapR]),s.texParameteri(T,s.TEXTURE_MAG_FILTER,me[x.magFilter]),s.texParameteri(T,s.TEXTURE_MIN_FILTER,me[x.minFilter]),x.compareFunction&&(s.texParameteri(T,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(T,s.TEXTURE_COMPARE_FUNC,Te[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Ut||x.minFilter!==Is&&x.minFilter!==Hn||x.type===xn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");s.texParameterf(T,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function ct(T,x){let F=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",C));const Y=x.source;let Z=d.get(Y);Z===void 0&&(Z={},d.set(Y,Z));const j=W(x);if(j!==T.__cacheKey){Z[j]===void 0&&(Z[j]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,F=!0),Z[j].usedTimes++;const Se=Z[T.__cacheKey];Se!==void 0&&(Z[T.__cacheKey].usedTimes--,Se.usedTimes===0&&S(x)),T.__cacheKey=j,T.__webglTexture=Z[j].texture}return F}function K(T,x,F){let Y=s.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Y=s.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Y=s.TEXTURE_3D);const Z=ct(T,x),j=x.source;t.bindTexture(Y,T.__webglTexture,s.TEXTURE0+F);const Se=n.get(j);if(j.version!==Se.__version||Z===!0){t.activeTexture(s.TEXTURE0+F);const ce=Ke.getPrimaries(Ke.workingColorSpace),ge=x.colorSpace===ii?null:Ke.getPrimaries(x.colorSpace),Je=x.colorSpace===ii||ce===ge?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Je);let ne=_(x.image,!1,i.maxTextureSize);ne=ft(x,ne);const xe=r.convert(x.format,x.colorSpace),Pe=r.convert(x.type);let Ne=w(x.internalFormat,xe,Pe,x.colorSpace,x.isVideoTexture);Xe(Y,x);let ye;const $e=x.mipmaps,Oe=x.isVideoTexture!==!0,ht=Se.__version===void 0||Z===!0,D=j.dataReady,he=R(x,ne);if(x.isDepthTexture)Ne=M(x.format===zs,x.type),ht&&(Oe?t.texStorage2D(s.TEXTURE_2D,1,Ne,ne.width,ne.height):t.texImage2D(s.TEXTURE_2D,0,Ne,ne.width,ne.height,0,xe,Pe,null));else if(x.isDataTexture)if($e.length>0){Oe&&ht&&t.texStorage2D(s.TEXTURE_2D,he,Ne,$e[0].width,$e[0].height);for(let G=0,q=$e.length;G<q;G++)ye=$e[G],Oe?D&&t.texSubImage2D(s.TEXTURE_2D,G,0,0,ye.width,ye.height,xe,Pe,ye.data):t.texImage2D(s.TEXTURE_2D,G,Ne,ye.width,ye.height,0,xe,Pe,ye.data);x.generateMipmaps=!1}else Oe?(ht&&t.texStorage2D(s.TEXTURE_2D,he,Ne,ne.width,ne.height),D&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ne.width,ne.height,xe,Pe,ne.data)):t.texImage2D(s.TEXTURE_2D,0,Ne,ne.width,ne.height,0,xe,Pe,ne.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Oe&&ht&&t.texStorage3D(s.TEXTURE_2D_ARRAY,he,Ne,$e[0].width,$e[0].height,ne.depth);for(let G=0,q=$e.length;G<q;G++)if(ye=$e[G],x.format!==cn)if(xe!==null)if(Oe){if(D)if(x.layerUpdates.size>0){const de=Bc(ye.width,ye.height,x.format,x.type);for(const ue of x.layerUpdates){const ke=ye.data.subarray(ue*de/ye.data.BYTES_PER_ELEMENT,(ue+1)*de/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,G,0,0,ue,ye.width,ye.height,1,xe,ke)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,G,0,0,0,ye.width,ye.height,ne.depth,xe,ye.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,G,Ne,ye.width,ye.height,ne.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?D&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,G,0,0,0,ye.width,ye.height,ne.depth,xe,Pe,ye.data):t.texImage3D(s.TEXTURE_2D_ARRAY,G,Ne,ye.width,ye.height,ne.depth,0,xe,Pe,ye.data)}else{Oe&&ht&&t.texStorage2D(s.TEXTURE_2D,he,Ne,$e[0].width,$e[0].height);for(let G=0,q=$e.length;G<q;G++)ye=$e[G],x.format!==cn?xe!==null?Oe?D&&t.compressedTexSubImage2D(s.TEXTURE_2D,G,0,0,ye.width,ye.height,xe,ye.data):t.compressedTexImage2D(s.TEXTURE_2D,G,Ne,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?D&&t.texSubImage2D(s.TEXTURE_2D,G,0,0,ye.width,ye.height,xe,Pe,ye.data):t.texImage2D(s.TEXTURE_2D,G,Ne,ye.width,ye.height,0,xe,Pe,ye.data)}else if(x.isDataArrayTexture)if(Oe){if(ht&&t.texStorage3D(s.TEXTURE_2D_ARRAY,he,Ne,ne.width,ne.height,ne.depth),D)if(x.layerUpdates.size>0){const G=Bc(ne.width,ne.height,x.format,x.type);for(const q of x.layerUpdates){const de=ne.data.subarray(q*G/ne.data.BYTES_PER_ELEMENT,(q+1)*G/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,q,ne.width,ne.height,1,xe,Pe,de)}x.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,xe,Pe,ne.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ne,ne.width,ne.height,ne.depth,0,xe,Pe,ne.data);else if(x.isData3DTexture)Oe?(ht&&t.texStorage3D(s.TEXTURE_3D,he,Ne,ne.width,ne.height,ne.depth),D&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,xe,Pe,ne.data)):t.texImage3D(s.TEXTURE_3D,0,Ne,ne.width,ne.height,ne.depth,0,xe,Pe,ne.data);else if(x.isFramebufferTexture){if(ht)if(Oe)t.texStorage2D(s.TEXTURE_2D,he,Ne,ne.width,ne.height);else{let G=ne.width,q=ne.height;for(let de=0;de<he;de++)t.texImage2D(s.TEXTURE_2D,de,Ne,G,q,0,xe,Pe,null),G>>=1,q>>=1}}else if($e.length>0){if(Oe&&ht){const G=be($e[0]);t.texStorage2D(s.TEXTURE_2D,he,Ne,G.width,G.height)}for(let G=0,q=$e.length;G<q;G++)ye=$e[G],Oe?D&&t.texSubImage2D(s.TEXTURE_2D,G,0,0,xe,Pe,ye):t.texImage2D(s.TEXTURE_2D,G,Ne,xe,Pe,ye);x.generateMipmaps=!1}else if(Oe){if(ht){const G=be(ne);t.texStorage2D(s.TEXTURE_2D,he,Ne,G.width,G.height)}D&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,xe,Pe,ne)}else t.texImage2D(s.TEXTURE_2D,0,Ne,xe,Pe,ne);m(x)&&p(Y),Se.__version=j.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function se(T,x,F){if(x.image.length!==6)return;const Y=ct(T,x),Z=x.source;t.bindTexture(s.TEXTURE_CUBE_MAP,T.__webglTexture,s.TEXTURE0+F);const j=n.get(Z);if(Z.version!==j.__version||Y===!0){t.activeTexture(s.TEXTURE0+F);const Se=Ke.getPrimaries(Ke.workingColorSpace),ce=x.colorSpace===ii?null:Ke.getPrimaries(x.colorSpace),ge=x.colorSpace===ii||Se===ce?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Je=x.isCompressedTexture||x.image[0].isCompressedTexture,ne=x.image[0]&&x.image[0].isDataTexture,xe=[];for(let q=0;q<6;q++)!Je&&!ne?xe[q]=_(x.image[q],!0,i.maxCubemapSize):xe[q]=ne?x.image[q].image:x.image[q],xe[q]=ft(x,xe[q]);const Pe=xe[0],Ne=r.convert(x.format,x.colorSpace),ye=r.convert(x.type),$e=w(x.internalFormat,Ne,ye,x.colorSpace),Oe=x.isVideoTexture!==!0,ht=j.__version===void 0||Y===!0,D=Z.dataReady;let he=R(x,Pe);Xe(s.TEXTURE_CUBE_MAP,x);let G;if(Je){Oe&&ht&&t.texStorage2D(s.TEXTURE_CUBE_MAP,he,$e,Pe.width,Pe.height);for(let q=0;q<6;q++){G=xe[q].mipmaps;for(let de=0;de<G.length;de++){const ue=G[de];x.format!==cn?Ne!==null?Oe?D&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,de,0,0,ue.width,ue.height,Ne,ue.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,de,$e,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,de,0,0,ue.width,ue.height,Ne,ye,ue.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,de,$e,ue.width,ue.height,0,Ne,ye,ue.data)}}}else{if(G=x.mipmaps,Oe&&ht){G.length>0&&he++;const q=be(xe[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,he,$e,q.width,q.height)}for(let q=0;q<6;q++)if(ne){Oe?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,xe[q].width,xe[q].height,Ne,ye,xe[q].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,$e,xe[q].width,xe[q].height,0,Ne,ye,xe[q].data);for(let de=0;de<G.length;de++){const ke=G[de].image[q].image;Oe?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,de+1,0,0,ke.width,ke.height,Ne,ye,ke.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,de+1,$e,ke.width,ke.height,0,Ne,ye,ke.data)}}else{Oe?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,Ne,ye,xe[q]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,$e,Ne,ye,xe[q]);for(let de=0;de<G.length;de++){const ue=G[de];Oe?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,de+1,0,0,Ne,ye,ue.image[q]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,de+1,$e,Ne,ye,ue.image[q])}}}m(x)&&p(s.TEXTURE_CUBE_MAP),j.__version=Z.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function Me(T,x,F,Y,Z,j){const Se=r.convert(F.format,F.colorSpace),ce=r.convert(F.type),ge=w(F.internalFormat,Se,ce,F.colorSpace),Je=n.get(x),ne=n.get(F);if(ne.__renderTarget=x,!Je.__hasExternalTextures){const xe=Math.max(1,x.width>>j),Pe=Math.max(1,x.height>>j);Z===s.TEXTURE_3D||Z===s.TEXTURE_2D_ARRAY?t.texImage3D(Z,j,ge,xe,Pe,x.depth,0,Se,ce,null):t.texImage2D(Z,j,ge,xe,Pe,0,Se,ce,null)}t.bindFramebuffer(s.FRAMEBUFFER,T),qe(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Y,Z,ne.__webglTexture,0,Ze(x)):(Z===s.TEXTURE_2D||Z>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Y,Z,ne.__webglTexture,j),t.bindFramebuffer(s.FRAMEBUFFER,null)}function le(T,x,F){if(s.bindRenderbuffer(s.RENDERBUFFER,T),x.depthBuffer){const Y=x.depthTexture,Z=Y&&Y.isDepthTexture?Y.type:null,j=M(x.stencilBuffer,Z),Se=x.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ce=Ze(x);qe(x)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ce,j,x.width,x.height):F?s.renderbufferStorageMultisample(s.RENDERBUFFER,ce,j,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,j,x.width,x.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Se,s.RENDERBUFFER,T)}else{const Y=x.textures;for(let Z=0;Z<Y.length;Z++){const j=Y[Z],Se=r.convert(j.format,j.colorSpace),ce=r.convert(j.type),ge=w(j.internalFormat,Se,ce,j.colorSpace),Je=Ze(x);F&&qe(x)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Je,ge,x.width,x.height):qe(x)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Je,ge,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,ge,x.width,x.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ie(T,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=n.get(x.depthTexture);Y.__renderTarget=x,(!Y.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),$(x.depthTexture,0);const Z=Y.__webglTexture,j=Ze(x);if(x.depthTexture.format===Os)qe(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0);else if(x.depthTexture.format===zs)qe(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function tt(T){const x=n.get(T),F=T.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==T.depthTexture){const Y=T.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Y){const Z=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Y.removeEventListener("dispose",Z)};Y.addEventListener("dispose",Z),x.__depthDisposeCallback=Z}x.__boundDepthTexture=Y}if(T.depthTexture&&!x.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Ie(x.__webglFramebuffer,T)}else if(F){x.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[Y]),x.__webglDepthbuffer[Y]===void 0)x.__webglDepthbuffer[Y]=s.createRenderbuffer(),le(x.__webglDepthbuffer[Y],T,!1);else{const Z=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,j=x.__webglDepthbuffer[Y];s.bindRenderbuffer(s.RENDERBUFFER,j),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,j)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=s.createRenderbuffer(),le(x.__webglDepthbuffer,T,!1);else{const Y=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Z=x.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Z),s.framebufferRenderbuffer(s.FRAMEBUFFER,Y,s.RENDERBUFFER,Z)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Le(T,x,F){const Y=n.get(T);x!==void 0&&Me(Y.__webglFramebuffer,T,T.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),F!==void 0&&tt(T)}function Mt(T){const x=T.texture,F=n.get(T),Y=n.get(x);T.addEventListener("dispose",A);const Z=T.textures,j=T.isWebGLCubeRenderTarget===!0,Se=Z.length>1;if(Se||(Y.__webglTexture===void 0&&(Y.__webglTexture=s.createTexture()),Y.__version=x.version,a.memory.textures++),j){F.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer[ce]=[];for(let ge=0;ge<x.mipmaps.length;ge++)F.__webglFramebuffer[ce][ge]=s.createFramebuffer()}else F.__webglFramebuffer[ce]=s.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer=[];for(let ce=0;ce<x.mipmaps.length;ce++)F.__webglFramebuffer[ce]=s.createFramebuffer()}else F.__webglFramebuffer=s.createFramebuffer();if(Se)for(let ce=0,ge=Z.length;ce<ge;ce++){const Je=n.get(Z[ce]);Je.__webglTexture===void 0&&(Je.__webglTexture=s.createTexture(),a.memory.textures++)}if(T.samples>0&&qe(T)===!1){F.__webglMultisampledFramebuffer=s.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ce=0;ce<Z.length;ce++){const ge=Z[ce];F.__webglColorRenderbuffer[ce]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,F.__webglColorRenderbuffer[ce]);const Je=r.convert(ge.format,ge.colorSpace),ne=r.convert(ge.type),xe=w(ge.internalFormat,Je,ne,ge.colorSpace,T.isXRRenderTarget===!0),Pe=Ze(T);s.renderbufferStorageMultisample(s.RENDERBUFFER,Pe,xe,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ce,s.RENDERBUFFER,F.__webglColorRenderbuffer[ce])}s.bindRenderbuffer(s.RENDERBUFFER,null),T.depthBuffer&&(F.__webglDepthRenderbuffer=s.createRenderbuffer(),le(F.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(j){t.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture),Xe(s.TEXTURE_CUBE_MAP,x);for(let ce=0;ce<6;ce++)if(x.mipmaps&&x.mipmaps.length>0)for(let ge=0;ge<x.mipmaps.length;ge++)Me(F.__webglFramebuffer[ce][ge],T,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ge);else Me(F.__webglFramebuffer[ce],T,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);m(x)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let ce=0,ge=Z.length;ce<ge;ce++){const Je=Z[ce],ne=n.get(Je);t.bindTexture(s.TEXTURE_2D,ne.__webglTexture),Xe(s.TEXTURE_2D,Je),Me(F.__webglFramebuffer,T,Je,s.COLOR_ATTACHMENT0+ce,s.TEXTURE_2D,0),m(Je)&&p(s.TEXTURE_2D)}t.unbindTexture()}else{let ce=s.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ce=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ce,Y.__webglTexture),Xe(ce,x),x.mipmaps&&x.mipmaps.length>0)for(let ge=0;ge<x.mipmaps.length;ge++)Me(F.__webglFramebuffer[ge],T,x,s.COLOR_ATTACHMENT0,ce,ge);else Me(F.__webglFramebuffer,T,x,s.COLOR_ATTACHMENT0,ce,0);m(x)&&p(ce),t.unbindTexture()}T.depthBuffer&&tt(T)}function _t(T){const x=T.textures;for(let F=0,Y=x.length;F<Y;F++){const Z=x[F];if(m(Z)){const j=b(T),Se=n.get(Z).__webglTexture;t.bindTexture(j,Se),p(j),t.unbindTexture()}}}const Ye=[],I=[];function nn(T){if(T.samples>0){if(qe(T)===!1){const x=T.textures,F=T.width,Y=T.height;let Z=s.COLOR_BUFFER_BIT;const j=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Se=n.get(T),ce=x.length>1;if(ce)for(let ge=0;ge<x.length;ge++)t.bindFramebuffer(s.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ge,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Se.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ge,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let ge=0;ge<x.length;ge++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Z|=s.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Z|=s.STENCIL_BUFFER_BIT)),ce){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Se.__webglColorRenderbuffer[ge]);const Je=n.get(x[ge]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Je,0)}s.blitFramebuffer(0,0,F,Y,0,0,F,Y,Z,s.NEAREST),l===!0&&(Ye.length=0,I.length=0,Ye.push(s.COLOR_ATTACHMENT0+ge),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Ye.push(j),I.push(j),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,I)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ye))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ce)for(let ge=0;ge<x.length;ge++){t.bindFramebuffer(s.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ge,s.RENDERBUFFER,Se.__webglColorRenderbuffer[ge]);const Je=n.get(x[ge]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Se.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ge,s.TEXTURE_2D,Je,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const x=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[x])}}}function Ze(T){return Math.min(i.maxSamples,T.samples)}function qe(T){const x=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Ee(T){const x=a.render.frame;h.get(T)!==x&&(h.set(T,x),T.update())}function ft(T,x){const F=T.colorSpace,Y=T.format,Z=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||F!==jt&&F!==ii&&(Ke.getTransfer(F)===ot?(Y!==cn||Z!==jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),x}function be(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=z,this.setTexture2D=$,this.setTexture2DArray=X,this.setTexture3D=J,this.setTextureCube=V,this.rebindTextures=Le,this.setupRenderTarget=Mt,this.updateRenderTargetMipmap=_t,this.updateMultisampleRenderTarget=nn,this.setupDepthRenderbuffer=tt,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=qe}function O_(s,e){function t(n,i=ii){let r;const a=Ke.getTransfer(i);if(n===jn)return s.UNSIGNED_BYTE;if(n===ll)return s.UNSIGNED_SHORT_4_4_4_4;if(n===cl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Vh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Hh)return s.BYTE;if(n===Gh)return s.SHORT;if(n===ks)return s.UNSIGNED_SHORT;if(n===ol)return s.INT;if(n===Ti)return s.UNSIGNED_INT;if(n===xn)return s.FLOAT;if(n===hs)return s.HALF_FLOAT;if(n===Wh)return s.ALPHA;if(n===Xh)return s.RGB;if(n===cn)return s.RGBA;if(n===jh)return s.LUMINANCE;if(n===Kh)return s.LUMINANCE_ALPHA;if(n===Os)return s.DEPTH_COMPONENT;if(n===zs)return s.DEPTH_STENCIL;if(n===hl)return s.RED;if(n===ul)return s.RED_INTEGER;if(n===Yh)return s.RG;if(n===dl)return s.RG_INTEGER;if(n===fl)return s.RGBA_INTEGER;if(n===zr||n===Hr||n===Gr||n===Vr)if(a===ot)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===zr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Hr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===zr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Hr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Gr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Vr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===yo||n===vo||n===Mo||n===So)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===yo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===vo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Mo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===So)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===bo||n===wo||n===To)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===bo||n===wo)return a===ot?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===To)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Eo||n===Ao||n===Co||n===Ro||n===Io||n===Po||n===Lo||n===Do||n===No||n===Uo||n===Fo||n===ko||n===Bo||n===Oo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Eo)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ao)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Co)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ro)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Io)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Po)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Lo)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Do)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===No)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Uo)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Fo)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ko)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Bo)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Oo)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Wr||n===zo||n===Ho)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Wr)return a===ot?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===zo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ho)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===qh||n===Go||n===Vo||n===Wo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Wr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Go)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Vo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Wo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Bs?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const z_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,H_=`
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

}`;class G_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Tt,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Sn({vertexShader:z_,fragmentShader:H_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new te(new Nt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class V_ extends Ei{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const _=new G_,m=t.getContextAttributes();let p=null,b=null;const w=[],M=[],R=new Re;let C=null;const A=new Wt;A.viewport=new nt;const L=new Wt;L.viewport=new nt;const S=[A,L],v=new Zf;let P=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let se=w[K];return se===void 0&&(se=new Aa,w[K]=se),se.getTargetRaySpace()},this.getControllerGrip=function(K){let se=w[K];return se===void 0&&(se=new Aa,w[K]=se),se.getGripSpace()},this.getHand=function(K){let se=w[K];return se===void 0&&(se=new Aa,w[K]=se),se.getHandSpace()};function k(K){const se=M.indexOf(K.inputSource);if(se===-1)return;const Me=w[se];Me!==void 0&&(Me.update(K.inputSource,K.frame,c||a),Me.dispatchEvent({type:K.type,data:K.inputSource}))}function W(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",$);for(let K=0;K<w.length;K++){const se=M[K];se!==null&&(M[K]=null,w[K].disconnect(se))}P=null,z=null,_.reset(),e.setRenderTarget(p),f=null,d=null,u=null,i=null,b=null,ct.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",W),i.addEventListener("inputsourceschange",$),m.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(R),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,le=null,Ie=null;m.depth&&(Ie=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=m.stencil?zs:Os,le=m.stencil?Bs:Ti);const tt={colorFormat:t.RGBA8,depthFormat:Ie,scaleFactor:r};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(tt),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new ai(d.textureWidth,d.textureHeight,{format:cn,type:jn,depthTexture:new pu(d.textureWidth,d.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const Me={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,Me),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new ai(f.framebufferWidth,f.framebufferHeight,{format:cn,type:jn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),ct.setContext(i),ct.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function $(K){for(let se=0;se<K.removed.length;se++){const Me=K.removed[se],le=M.indexOf(Me);le>=0&&(M[le]=null,w[le].disconnect(Me))}for(let se=0;se<K.added.length;se++){const Me=K.added[se];let le=M.indexOf(Me);if(le===-1){for(let tt=0;tt<w.length;tt++)if(tt>=M.length){M.push(Me),le=tt;break}else if(M[tt]===null){M[tt]=Me,le=tt;break}if(le===-1)break}const Ie=w[le];Ie&&Ie.connect(Me)}}const X=new E,J=new E;function V(K,se,Me){X.setFromMatrixPosition(se.matrixWorld),J.setFromMatrixPosition(Me.matrixWorld);const le=X.distanceTo(J),Ie=se.projectionMatrix.elements,tt=Me.projectionMatrix.elements,Le=Ie[14]/(Ie[10]-1),Mt=Ie[14]/(Ie[10]+1),_t=(Ie[9]+1)/Ie[5],Ye=(Ie[9]-1)/Ie[5],I=(Ie[8]-1)/Ie[0],nn=(tt[8]+1)/tt[0],Ze=Le*I,qe=Le*nn,Ee=le/(-I+nn),ft=Ee*-I;if(se.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(ft),K.translateZ(Ee),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Ie[10]===-1)K.projectionMatrix.copy(se.projectionMatrix),K.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{const be=Le+Ee,T=Mt+Ee,x=Ze-ft,F=qe+(le-ft),Y=_t*Mt/T*be,Z=Ye*Mt/T*be;K.projectionMatrix.makePerspective(x,F,Y,Z,be,T),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function oe(K,se){se===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(se.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;let se=K.near,Me=K.far;_.texture!==null&&(_.depthNear>0&&(se=_.depthNear),_.depthFar>0&&(Me=_.depthFar)),v.near=L.near=A.near=se,v.far=L.far=A.far=Me,(P!==v.near||z!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),P=v.near,z=v.far),A.layers.mask=K.layers.mask|2,L.layers.mask=K.layers.mask|4,v.layers.mask=A.layers.mask|L.layers.mask;const le=K.parent,Ie=v.cameras;oe(v,le);for(let tt=0;tt<Ie.length;tt++)oe(Ie[tt],le);Ie.length===2?V(v,A,L):v.projectionMatrix.copy(A.projectionMatrix),me(K,v,le)};function me(K,se,Me){Me===null?K.matrix.copy(se.matrixWorld):(K.matrix.copy(Me.matrixWorld),K.matrix.invert(),K.matrix.multiply(se.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(se.projectionMatrix),K.projectionMatrixInverse.copy(se.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=ss*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(K){l=K,d!==null&&(d.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let Te=null;function Xe(K,se){if(h=se.getViewerPose(c||a),g=se,h!==null){const Me=h.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let le=!1;Me.length!==v.cameras.length&&(v.cameras.length=0,le=!0);for(let Le=0;Le<Me.length;Le++){const Mt=Me[Le];let _t=null;if(f!==null)_t=f.getViewport(Mt);else{const I=u.getViewSubImage(d,Mt);_t=I.viewport,Le===0&&(e.setRenderTargetTextures(b,I.colorTexture,I.depthStencilTexture),e.setRenderTarget(b))}let Ye=S[Le];Ye===void 0&&(Ye=new Wt,Ye.layers.enable(Le),Ye.viewport=new nt,S[Le]=Ye),Ye.matrix.fromArray(Mt.transform.matrix),Ye.matrix.decompose(Ye.position,Ye.quaternion,Ye.scale),Ye.projectionMatrix.fromArray(Mt.projectionMatrix),Ye.projectionMatrixInverse.copy(Ye.projectionMatrix).invert(),Ye.viewport.set(_t.x,_t.y,_t.width,_t.height),Le===0&&(v.matrix.copy(Ye.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),le===!0&&v.cameras.push(Ye)}const Ie=i.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&u){const Le=u.getDepthInformation(Me[0]);Le&&Le.isValid&&Le.texture&&_.init(e,Le,i.renderState)}}for(let Me=0;Me<w.length;Me++){const le=M[Me],Ie=w[Me];le!==null&&Ie!==void 0&&Ie.update(le,se,c||a)}Te&&Te(K,se),se.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:se}),g=null}const ct=new vu;ct.setAnimationLoop(Xe),this.setAnimationLoop=function(K){Te=K},this.dispose=function(){}}}const gi=new An,W_=new Fe;function X_(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,ru(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,b,w,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,b,w):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===zt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===zt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const b=e.get(p),w=b.envMap,M=b.envMapRotation;w&&(m.envMap.value=w,gi.copy(M),gi.x*=-1,gi.y*=-1,gi.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(gi.y*=-1,gi.z*=-1),m.envMapRotation.value.setFromMatrix4(W_.makeRotationFromEuler(gi)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=w*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===zt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const b=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function j_(s,e,t,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,w){const M=w.program;n.uniformBlockBinding(b,M)}function c(b,w){let M=i[b.id];M===void 0&&(g(b),M=h(b),i[b.id]=M,b.addEventListener("dispose",m));const R=w.program;n.updateUBOMapping(b,R);const C=e.render.frame;r[b.id]!==C&&(d(b),r[b.id]=C)}function h(b){const w=u();b.__bindingPointIndex=w;const M=s.createBuffer(),R=b.__size,C=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,R,C),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,w,M),M}function u(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const w=i[b.id],M=b.uniforms,R=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,w);for(let C=0,A=M.length;C<A;C++){const L=Array.isArray(M[C])?M[C]:[M[C]];for(let S=0,v=L.length;S<v;S++){const P=L[S];if(f(P,C,S,R)===!0){const z=P.__offset,k=Array.isArray(P.value)?P.value:[P.value];let W=0;for(let $=0;$<k.length;$++){const X=k[$],J=_(X);typeof X=="number"||typeof X=="boolean"?(P.__data[0]=X,s.bufferSubData(s.UNIFORM_BUFFER,z+W,P.__data)):X.isMatrix3?(P.__data[0]=X.elements[0],P.__data[1]=X.elements[1],P.__data[2]=X.elements[2],P.__data[3]=0,P.__data[4]=X.elements[3],P.__data[5]=X.elements[4],P.__data[6]=X.elements[5],P.__data[7]=0,P.__data[8]=X.elements[6],P.__data[9]=X.elements[7],P.__data[10]=X.elements[8],P.__data[11]=0):(X.toArray(P.__data,W),W+=J.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,z,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(b,w,M,R){const C=b.value,A=w+"_"+M;if(R[A]===void 0)return typeof C=="number"||typeof C=="boolean"?R[A]=C:R[A]=C.clone(),!0;{const L=R[A];if(typeof C=="number"||typeof C=="boolean"){if(L!==C)return R[A]=C,!0}else if(L.equals(C)===!1)return L.copy(C),!0}return!1}function g(b){const w=b.uniforms;let M=0;const R=16;for(let A=0,L=w.length;A<L;A++){const S=Array.isArray(w[A])?w[A]:[w[A]];for(let v=0,P=S.length;v<P;v++){const z=S[v],k=Array.isArray(z.value)?z.value:[z.value];for(let W=0,$=k.length;W<$;W++){const X=k[W],J=_(X),V=M%R,oe=V%J.boundary,me=V+oe;M+=oe,me!==0&&R-me<J.storage&&(M+=R-me),z.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=M,M+=J.storage}}}const C=M%R;return C>0&&(M+=R-C),b.__size=M,b.__cache={},this}function _(b){const w={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(w.boundary=4,w.storage=4):b.isVector2?(w.boundary=8,w.storage=8):b.isVector3||b.isColor?(w.boundary=16,w.storage=12):b.isVector4?(w.boundary=16,w.storage=16):b.isMatrix3?(w.boundary=48,w.storage=48):b.isMatrix4?(w.boundary=64,w.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),w}function m(b){const w=b.target;w.removeEventListener("dispose",m);const M=a.indexOf(w.__bindingPointIndex);a.splice(M,1),s.deleteBuffer(i[w.id]),delete i[w.id],delete r[w.id]}function p(){for(const b in i)s.deleteBuffer(i[b]);a=[],i={},r={}}return{bind:l,update:c,dispose:p}}class K_{constructor(e={}){const{canvas:t=Gd(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const b=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let R=!1;this._outputColorSpace=xt;let C=0,A=0,L=null,S=-1,v=null;const P=new nt,z=new nt;let k=null;const W=new _e(0);let $=0,X=t.width,J=t.height,V=1,oe=null,me=null;const Te=new nt(0,0,X,J),Xe=new nt(0,0,X,J);let ct=!1;const K=new Sl;let se=!1,Me=!1;const le=new Fe,Ie=new Fe,tt=new E,Le=new nt,Mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let _t=!1;function Ye(){return L===null?V:1}let I=n;function nn(y,N){return t.getContext(y,N)}try{const y={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${al}`),t.addEventListener("webglcontextlost",q,!1),t.addEventListener("webglcontextrestored",de,!1),t.addEventListener("webglcontextcreationerror",ue,!1),I===null){const N="webgl2";if(I=nn(N,y),I===null)throw nn(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Ze,qe,Ee,ft,be,T,x,F,Y,Z,j,Se,ce,ge,Je,ne,xe,Pe,Ne,ye,$e,Oe,ht,D;function he(){Ze=new i0(I),Ze.init(),Oe=new O_(I,Ze),qe=new $g(I,Ze,e,Oe),Ee=new k_(I,Ze),qe.reverseDepthBuffer&&d&&Ee.buffers.depth.setReversed(!0),ft=new a0(I),be=new w_,T=new B_(I,Ze,Ee,be,qe,Oe,ft),x=new Jg(M),F=new n0(M),Y=new dp(I),ht=new Yg(I,Y),Z=new s0(I,Y,ft,ht),j=new l0(I,Z,Y,ft),Ne=new o0(I,qe,T),ne=new Zg(be),Se=new b_(M,x,F,Ze,qe,ht,ne),ce=new X_(M,be),ge=new E_,Je=new L_(Ze),Pe=new Kg(M,x,F,Ee,j,f,l),xe=new U_(M,j,qe),D=new j_(I,ft,qe,Ee),ye=new qg(I,Ze,ft),$e=new r0(I,Ze,ft),ft.programs=Se.programs,M.capabilities=qe,M.extensions=Ze,M.properties=be,M.renderLists=ge,M.shadowMap=xe,M.state=Ee,M.info=ft}he();const G=new V_(M,I);this.xr=G,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const y=Ze.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Ze.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(y){y!==void 0&&(V=y,this.setSize(X,J,!1))},this.getSize=function(y){return y.set(X,J)},this.setSize=function(y,N,B=!0){if(G.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=y,J=N,t.width=Math.floor(y*V),t.height=Math.floor(N*V),B===!0&&(t.style.width=y+"px",t.style.height=N+"px"),this.setViewport(0,0,y,N)},this.getDrawingBufferSize=function(y){return y.set(X*V,J*V).floor()},this.setDrawingBufferSize=function(y,N,B){X=y,J=N,V=B,t.width=Math.floor(y*B),t.height=Math.floor(N*B),this.setViewport(0,0,y,N)},this.getCurrentViewport=function(y){return y.copy(P)},this.getViewport=function(y){return y.copy(Te)},this.setViewport=function(y,N,B,O){y.isVector4?Te.set(y.x,y.y,y.z,y.w):Te.set(y,N,B,O),Ee.viewport(P.copy(Te).multiplyScalar(V).round())},this.getScissor=function(y){return y.copy(Xe)},this.setScissor=function(y,N,B,O){y.isVector4?Xe.set(y.x,y.y,y.z,y.w):Xe.set(y,N,B,O),Ee.scissor(z.copy(Xe).multiplyScalar(V).round())},this.getScissorTest=function(){return ct},this.setScissorTest=function(y){Ee.setScissorTest(ct=y)},this.setOpaqueSort=function(y){oe=y},this.setTransparentSort=function(y){me=y},this.getClearColor=function(y){return y.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor(...arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha(...arguments)},this.clear=function(y=!0,N=!0,B=!0){let O=0;if(y){let U=!1;if(L!==null){const Q=L.texture.format;U=Q===fl||Q===dl||Q===ul}if(U){const Q=L.texture.type,ae=Q===jn||Q===Ti||Q===ks||Q===Bs||Q===ll||Q===cl,pe=Pe.getClearColor(),ve=Pe.getClearAlpha(),Ue=pe.r,De=pe.g,Ae=pe.b;ae?(g[0]=Ue,g[1]=De,g[2]=Ae,g[3]=ve,I.clearBufferuiv(I.COLOR,0,g)):(_[0]=Ue,_[1]=De,_[2]=Ae,_[3]=ve,I.clearBufferiv(I.COLOR,0,_))}else O|=I.COLOR_BUFFER_BIT}N&&(O|=I.DEPTH_BUFFER_BIT),B&&(O|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",q,!1),t.removeEventListener("webglcontextrestored",de,!1),t.removeEventListener("webglcontextcreationerror",ue,!1),Pe.dispose(),ge.dispose(),Je.dispose(),be.dispose(),x.dispose(),F.dispose(),j.dispose(),ht.dispose(),D.dispose(),Se.dispose(),G.dispose(),G.removeEventListener("sessionstart",kl),G.removeEventListener("sessionend",Bl),ci.stop()};function q(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function de(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const y=ft.autoReset,N=xe.enabled,B=xe.autoUpdate,O=xe.needsUpdate,U=xe.type;he(),ft.autoReset=y,xe.enabled=N,xe.autoUpdate=B,xe.needsUpdate=O,xe.type=U}function ue(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function ke(y){const N=y.target;N.removeEventListener("dispose",ke),yt(N)}function yt(y){kt(y),be.remove(y)}function kt(y){const N=be.get(y).programs;N!==void 0&&(N.forEach(function(B){Se.releaseProgram(B)}),y.isShaderMaterial&&Se.releaseShaderCache(y))}this.renderBufferDirect=function(y,N,B,O,U,Q){N===null&&(N=Mt);const ae=U.isMesh&&U.matrixWorld.determinant()<0,pe=Bu(y,N,B,O,U);Ee.setMaterial(O,ae);let ve=B.index,Ue=1;if(O.wireframe===!0){if(ve=Z.getWireframeAttribute(B),ve===void 0)return;Ue=2}const De=B.drawRange,Ae=B.attributes.position;let Qe=De.start*Ue,it=(De.start+De.count)*Ue;Q!==null&&(Qe=Math.max(Qe,Q.start*Ue),it=Math.min(it,(Q.start+Q.count)*Ue)),ve!==null?(Qe=Math.max(Qe,0),it=Math.min(it,ve.count)):Ae!=null&&(Qe=Math.max(Qe,0),it=Math.min(it,Ae.count));const St=it-Qe;if(St<0||St===1/0)return;ht.setup(U,O,pe,B,ve);let vt,et=ye;if(ve!==null&&(vt=Y.get(ve),et=$e,et.setIndex(vt)),U.isMesh)O.wireframe===!0?(Ee.setLineWidth(O.wireframeLinewidth*Ye()),et.setMode(I.LINES)):et.setMode(I.TRIANGLES);else if(U.isLine){let Ce=O.linewidth;Ce===void 0&&(Ce=1),Ee.setLineWidth(Ce*Ye()),U.isLineSegments?et.setMode(I.LINES):U.isLineLoop?et.setMode(I.LINE_LOOP):et.setMode(I.LINE_STRIP)}else U.isPoints?et.setMode(I.POINTS):U.isSprite&&et.setMode(I.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Xr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),et.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Ze.get("WEBGL_multi_draw"))et.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Ce=U._multiDrawStarts,Lt=U._multiDrawCounts,st=U._multiDrawCount,dn=ve?Y.get(ve).bytesPerElement:1,Ai=be.get(O).currentProgram.getUniforms();for(let qt=0;qt<st;qt++)Ai.setValue(I,"_gl_DrawID",qt),et.render(Ce[qt]/dn,Lt[qt])}else if(U.isInstancedMesh)et.renderInstances(Qe,St,U.count);else if(B.isInstancedBufferGeometry){const Ce=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Lt=Math.min(B.instanceCount,Ce);et.renderInstances(Qe,St,Lt)}else et.render(Qe,St)};function at(y,N,B){y.transparent===!0&&y.side===gn&&y.forceSinglePass===!1?(y.side=zt,y.needsUpdate=!0,er(y,N,B),y.side=En,y.needsUpdate=!0,er(y,N,B),y.side=gn):er(y,N,B)}this.compile=function(y,N,B=null){B===null&&(B=y),p=Je.get(B),p.init(N),w.push(p),B.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),y!==B&&y.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights();const O=new Set;return y.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const Q=U.material;if(Q)if(Array.isArray(Q))for(let ae=0;ae<Q.length;ae++){const pe=Q[ae];at(pe,B,U),O.add(pe)}else at(Q,B,U),O.add(Q)}),p=w.pop(),O},this.compileAsync=function(y,N,B=null){const O=this.compile(y,N,B);return new Promise(U=>{function Q(){if(O.forEach(function(ae){be.get(ae).currentProgram.isReady()&&O.delete(ae)}),O.size===0){U(y);return}setTimeout(Q,10)}Ze.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let un=null;function Pn(y){un&&un(y)}function kl(){ci.stop()}function Bl(){ci.start()}const ci=new vu;ci.setAnimationLoop(Pn),typeof self<"u"&&ci.setContext(self),this.setAnimationLoop=function(y){un=y,G.setAnimationLoop(y),y===null?ci.stop():ci.start()},G.addEventListener("sessionstart",kl),G.addEventListener("sessionend",Bl),this.render=function(y,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(G.cameraAutoUpdate===!0&&G.updateCamera(N),N=G.getCamera()),y.isScene===!0&&y.onBeforeRender(M,y,N,L),p=Je.get(y,w.length),p.init(N),w.push(p),Ie.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),K.setFromProjectionMatrix(Ie),Me=this.localClippingEnabled,se=ne.init(this.clippingPlanes,Me),m=ge.get(y,b.length),m.init(),b.push(m),G.enabled===!0&&G.isPresenting===!0){const Q=M.xr.getDepthSensingMesh();Q!==null&&ra(Q,N,-1/0,M.sortObjects)}ra(y,N,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(oe,me),_t=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,_t&&Pe.addToRenderList(m,y),this.info.render.frame++,se===!0&&ne.beginShadows();const B=p.state.shadowsArray;xe.render(B,y,N),se===!0&&ne.endShadows(),this.info.autoReset===!0&&this.info.reset();const O=m.opaque,U=m.transmissive;if(p.setupLights(),N.isArrayCamera){const Q=N.cameras;if(U.length>0)for(let ae=0,pe=Q.length;ae<pe;ae++){const ve=Q[ae];zl(O,U,y,ve)}_t&&Pe.render(y);for(let ae=0,pe=Q.length;ae<pe;ae++){const ve=Q[ae];Ol(m,y,ve,ve.viewport)}}else U.length>0&&zl(O,U,y,N),_t&&Pe.render(y),Ol(m,y,N);L!==null&&A===0&&(T.updateMultisampleRenderTarget(L),T.updateRenderTargetMipmap(L)),y.isScene===!0&&y.onAfterRender(M,y,N),ht.resetDefaultState(),S=-1,v=null,w.pop(),w.length>0?(p=w[w.length-1],se===!0&&ne.setGlobalState(M.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function ra(y,N,B,O){if(y.visible===!1)return;if(y.layers.test(N.layers)){if(y.isGroup)B=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(N);else if(y.isLight)p.pushLight(y),y.castShadow&&p.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||K.intersectsSprite(y)){O&&Le.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Ie);const ae=j.update(y),pe=y.material;pe.visible&&m.push(y,ae,pe,B,Le.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||K.intersectsObject(y))){const ae=j.update(y),pe=y.material;if(O&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Le.copy(y.boundingSphere.center)):(ae.boundingSphere===null&&ae.computeBoundingSphere(),Le.copy(ae.boundingSphere.center)),Le.applyMatrix4(y.matrixWorld).applyMatrix4(Ie)),Array.isArray(pe)){const ve=ae.groups;for(let Ue=0,De=ve.length;Ue<De;Ue++){const Ae=ve[Ue],Qe=pe[Ae.materialIndex];Qe&&Qe.visible&&m.push(y,ae,Qe,B,Le.z,Ae)}}else pe.visible&&m.push(y,ae,pe,B,Le.z,null)}}const Q=y.children;for(let ae=0,pe=Q.length;ae<pe;ae++)ra(Q[ae],N,B,O)}function Ol(y,N,B,O){const U=y.opaque,Q=y.transmissive,ae=y.transparent;p.setupLightsView(B),se===!0&&ne.setGlobalState(M.clippingPlanes,B),O&&Ee.viewport(P.copy(O)),U.length>0&&Qs(U,N,B),Q.length>0&&Qs(Q,N,B),ae.length>0&&Qs(ae,N,B),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function zl(y,N,B,O){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[O.id]===void 0&&(p.state.transmissionRenderTarget[O.id]=new ai(1,1,{generateMipmaps:!0,type:Ze.has("EXT_color_buffer_half_float")||Ze.has("EXT_color_buffer_float")?hs:jn,minFilter:Hn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace}));const Q=p.state.transmissionRenderTarget[O.id],ae=O.viewport||P;Q.setSize(ae.z*M.transmissionResolutionScale,ae.w*M.transmissionResolutionScale);const pe=M.getRenderTarget();M.setRenderTarget(Q),M.getClearColor(W),$=M.getClearAlpha(),$<1&&M.setClearColor(16777215,.5),M.clear(),_t&&Pe.render(B);const ve=M.toneMapping;M.toneMapping=Wn;const Ue=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),p.setupLightsView(O),se===!0&&ne.setGlobalState(M.clippingPlanes,O),Qs(y,B,O),T.updateMultisampleRenderTarget(Q),T.updateRenderTargetMipmap(Q),Ze.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let Ae=0,Qe=N.length;Ae<Qe;Ae++){const it=N[Ae],St=it.object,vt=it.geometry,et=it.material,Ce=it.group;if(et.side===gn&&St.layers.test(O.layers)){const Lt=et.side;et.side=zt,et.needsUpdate=!0,Hl(St,B,O,vt,et,Ce),et.side=Lt,et.needsUpdate=!0,De=!0}}De===!0&&(T.updateMultisampleRenderTarget(Q),T.updateRenderTargetMipmap(Q))}M.setRenderTarget(pe),M.setClearColor(W,$),Ue!==void 0&&(O.viewport=Ue),M.toneMapping=ve}function Qs(y,N,B){const O=N.isScene===!0?N.overrideMaterial:null;for(let U=0,Q=y.length;U<Q;U++){const ae=y[U],pe=ae.object,ve=ae.geometry,Ue=ae.group;let De=ae.material;De.allowOverride===!0&&O!==null&&(De=O),pe.layers.test(B.layers)&&Hl(pe,N,B,ve,De,Ue)}}function Hl(y,N,B,O,U,Q){y.onBeforeRender(M,N,B,O,U,Q),y.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),U.onBeforeRender(M,N,B,O,y,Q),U.transparent===!0&&U.side===gn&&U.forceSinglePass===!1?(U.side=zt,U.needsUpdate=!0,M.renderBufferDirect(B,N,O,U,y,Q),U.side=En,U.needsUpdate=!0,M.renderBufferDirect(B,N,O,U,y,Q),U.side=gn):M.renderBufferDirect(B,N,O,U,y,Q),y.onAfterRender(M,N,B,O,U,Q)}function er(y,N,B){N.isScene!==!0&&(N=Mt);const O=be.get(y),U=p.state.lights,Q=p.state.shadowsArray,ae=U.state.version,pe=Se.getParameters(y,U.state,Q,N,B),ve=Se.getProgramCacheKey(pe);let Ue=O.programs;O.environment=y.isMeshStandardMaterial?N.environment:null,O.fog=N.fog,O.envMap=(y.isMeshStandardMaterial?F:x).get(y.envMap||O.environment),O.envMapRotation=O.environment!==null&&y.envMap===null?N.environmentRotation:y.envMapRotation,Ue===void 0&&(y.addEventListener("dispose",ke),Ue=new Map,O.programs=Ue);let De=Ue.get(ve);if(De!==void 0){if(O.currentProgram===De&&O.lightsStateVersion===ae)return Vl(y,pe),De}else pe.uniforms=Se.getUniforms(y),y.onBeforeCompile(pe,M),De=Se.acquireProgram(pe,ve),Ue.set(ve,De),O.uniforms=pe.uniforms;const Ae=O.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ae.clippingPlanes=ne.uniform),Vl(y,pe),O.needsLights=zu(y),O.lightsStateVersion=ae,O.needsLights&&(Ae.ambientLightColor.value=U.state.ambient,Ae.lightProbe.value=U.state.probe,Ae.directionalLights.value=U.state.directional,Ae.directionalLightShadows.value=U.state.directionalShadow,Ae.spotLights.value=U.state.spot,Ae.spotLightShadows.value=U.state.spotShadow,Ae.rectAreaLights.value=U.state.rectArea,Ae.ltc_1.value=U.state.rectAreaLTC1,Ae.ltc_2.value=U.state.rectAreaLTC2,Ae.pointLights.value=U.state.point,Ae.pointLightShadows.value=U.state.pointShadow,Ae.hemisphereLights.value=U.state.hemi,Ae.directionalShadowMap.value=U.state.directionalShadowMap,Ae.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Ae.spotShadowMap.value=U.state.spotShadowMap,Ae.spotLightMatrix.value=U.state.spotLightMatrix,Ae.spotLightMap.value=U.state.spotLightMap,Ae.pointShadowMap.value=U.state.pointShadowMap,Ae.pointShadowMatrix.value=U.state.pointShadowMatrix),O.currentProgram=De,O.uniformsList=null,De}function Gl(y){if(y.uniformsList===null){const N=y.currentProgram.getUniforms();y.uniformsList=jr.seqWithValue(N.seq,y.uniforms)}return y.uniformsList}function Vl(y,N){const B=be.get(y);B.outputColorSpace=N.outputColorSpace,B.batching=N.batching,B.batchingColor=N.batchingColor,B.instancing=N.instancing,B.instancingColor=N.instancingColor,B.instancingMorph=N.instancingMorph,B.skinning=N.skinning,B.morphTargets=N.morphTargets,B.morphNormals=N.morphNormals,B.morphColors=N.morphColors,B.morphTargetsCount=N.morphTargetsCount,B.numClippingPlanes=N.numClippingPlanes,B.numIntersection=N.numClipIntersection,B.vertexAlphas=N.vertexAlphas,B.vertexTangents=N.vertexTangents,B.toneMapping=N.toneMapping}function Bu(y,N,B,O,U){N.isScene!==!0&&(N=Mt),T.resetTextureUnits();const Q=N.fog,ae=O.isMeshStandardMaterial?N.environment:null,pe=L===null?M.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:jt,ve=(O.isMeshStandardMaterial?F:x).get(O.envMap||ae),Ue=O.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,De=!!B.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),Ae=!!B.morphAttributes.position,Qe=!!B.morphAttributes.normal,it=!!B.morphAttributes.color;let St=Wn;O.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(St=M.toneMapping);const vt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,et=vt!==void 0?vt.length:0,Ce=be.get(O),Lt=p.state.lights;if(se===!0&&(Me===!0||y!==v)){const Ht=y===v&&O.id===S;ne.setState(O,y,Ht)}let st=!1;O.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==Lt.state.version||Ce.outputColorSpace!==pe||U.isBatchedMesh&&Ce.batching===!1||!U.isBatchedMesh&&Ce.batching===!0||U.isBatchedMesh&&Ce.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Ce.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Ce.instancing===!1||!U.isInstancedMesh&&Ce.instancing===!0||U.isSkinnedMesh&&Ce.skinning===!1||!U.isSkinnedMesh&&Ce.skinning===!0||U.isInstancedMesh&&Ce.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Ce.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Ce.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Ce.instancingMorph===!1&&U.morphTexture!==null||Ce.envMap!==ve||O.fog===!0&&Ce.fog!==Q||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==ne.numPlanes||Ce.numIntersection!==ne.numIntersection)||Ce.vertexAlphas!==Ue||Ce.vertexTangents!==De||Ce.morphTargets!==Ae||Ce.morphNormals!==Qe||Ce.morphColors!==it||Ce.toneMapping!==St||Ce.morphTargetsCount!==et)&&(st=!0):(st=!0,Ce.__version=O.version);let dn=Ce.currentProgram;st===!0&&(dn=er(O,N,U));let Ai=!1,qt=!1,ms=!1;const mt=dn.getUniforms(),sn=Ce.uniforms;if(Ee.useProgram(dn.program)&&(Ai=!0,qt=!0,ms=!0),O.id!==S&&(S=O.id,qt=!0),Ai||v!==y){Ee.buffers.depth.getReversed()?(le.copy(y.projectionMatrix),Wd(le),Xd(le),mt.setValue(I,"projectionMatrix",le)):mt.setValue(I,"projectionMatrix",y.projectionMatrix),mt.setValue(I,"viewMatrix",y.matrixWorldInverse);const Kt=mt.map.cameraPosition;Kt!==void 0&&Kt.setValue(I,tt.setFromMatrixPosition(y.matrixWorld)),qe.logarithmicDepthBuffer&&mt.setValue(I,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&mt.setValue(I,"isOrthographic",y.isOrthographicCamera===!0),v!==y&&(v=y,qt=!0,ms=!0)}if(U.isSkinnedMesh){mt.setOptional(I,U,"bindMatrix"),mt.setOptional(I,U,"bindMatrixInverse");const Ht=U.skeleton;Ht&&(Ht.boneTexture===null&&Ht.computeBoneTexture(),mt.setValue(I,"boneTexture",Ht.boneTexture,T))}U.isBatchedMesh&&(mt.setOptional(I,U,"batchingTexture"),mt.setValue(I,"batchingTexture",U._matricesTexture,T),mt.setOptional(I,U,"batchingIdTexture"),mt.setValue(I,"batchingIdTexture",U._indirectTexture,T),mt.setOptional(I,U,"batchingColorTexture"),U._colorsTexture!==null&&mt.setValue(I,"batchingColorTexture",U._colorsTexture,T));const rn=B.morphAttributes;if((rn.position!==void 0||rn.normal!==void 0||rn.color!==void 0)&&Ne.update(U,B,dn),(qt||Ce.receiveShadow!==U.receiveShadow)&&(Ce.receiveShadow=U.receiveShadow,mt.setValue(I,"receiveShadow",U.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(sn.envMap.value=ve,sn.flipEnvMap.value=ve.isCubeTexture&&ve.isRenderTargetTexture===!1?-1:1),O.isMeshStandardMaterial&&O.envMap===null&&N.environment!==null&&(sn.envMapIntensity.value=N.environmentIntensity),qt&&(mt.setValue(I,"toneMappingExposure",M.toneMappingExposure),Ce.needsLights&&Ou(sn,ms),Q&&O.fog===!0&&ce.refreshFogUniforms(sn,Q),ce.refreshMaterialUniforms(sn,O,V,J,p.state.transmissionRenderTarget[y.id]),jr.upload(I,Gl(Ce),sn,T)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(jr.upload(I,Gl(Ce),sn,T),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&mt.setValue(I,"center",U.center),mt.setValue(I,"modelViewMatrix",U.modelViewMatrix),mt.setValue(I,"normalMatrix",U.normalMatrix),mt.setValue(I,"modelMatrix",U.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const Ht=O.uniformsGroups;for(let Kt=0,aa=Ht.length;Kt<aa;Kt++){const hi=Ht[Kt];D.update(hi,dn),D.bind(hi,dn)}}return dn}function Ou(y,N){y.ambientLightColor.needsUpdate=N,y.lightProbe.needsUpdate=N,y.directionalLights.needsUpdate=N,y.directionalLightShadows.needsUpdate=N,y.pointLights.needsUpdate=N,y.pointLightShadows.needsUpdate=N,y.spotLights.needsUpdate=N,y.spotLightShadows.needsUpdate=N,y.rectAreaLights.needsUpdate=N,y.hemisphereLights.needsUpdate=N}function zu(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(y,N,B){const O=be.get(y);O.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),be.get(y.texture).__webglTexture=N,be.get(y.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:B,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,N){const B=be.get(y);B.__webglFramebuffer=N,B.__useDefaultFramebuffer=N===void 0};const Hu=I.createFramebuffer();this.setRenderTarget=function(y,N=0,B=0){L=y,C=N,A=B;let O=!0,U=null,Q=!1,ae=!1;if(y){const ve=be.get(y);if(ve.__useDefaultFramebuffer!==void 0)Ee.bindFramebuffer(I.FRAMEBUFFER,null),O=!1;else if(ve.__webglFramebuffer===void 0)T.setupRenderTarget(y);else if(ve.__hasExternalTextures)T.rebindTextures(y,be.get(y.texture).__webglTexture,be.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Ae=y.depthTexture;if(ve.__boundDepthTexture!==Ae){if(Ae!==null&&be.has(Ae)&&(y.width!==Ae.image.width||y.height!==Ae.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(y)}}const Ue=y.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(ae=!0);const De=be.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(De[N])?U=De[N][B]:U=De[N],Q=!0):y.samples>0&&T.useMultisampledRTT(y)===!1?U=be.get(y).__webglMultisampledFramebuffer:Array.isArray(De)?U=De[B]:U=De,P.copy(y.viewport),z.copy(y.scissor),k=y.scissorTest}else P.copy(Te).multiplyScalar(V).floor(),z.copy(Xe).multiplyScalar(V).floor(),k=ct;if(B!==0&&(U=Hu),Ee.bindFramebuffer(I.FRAMEBUFFER,U)&&O&&Ee.drawBuffers(y,U),Ee.viewport(P),Ee.scissor(z),Ee.setScissorTest(k),Q){const ve=be.get(y.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+N,ve.__webglTexture,B)}else if(ae){const ve=be.get(y.texture),Ue=N;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,ve.__webglTexture,B,Ue)}else if(y!==null&&B!==0){const ve=be.get(y.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ve.__webglTexture,B)}S=-1},this.readRenderTargetPixels=function(y,N,B,O,U,Q,ae){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pe=be.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ae!==void 0&&(pe=pe[ae]),pe){Ee.bindFramebuffer(I.FRAMEBUFFER,pe);try{const ve=y.texture,Ue=ve.format,De=ve.type;if(!qe.textureFormatReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qe.textureTypeReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=y.width-O&&B>=0&&B<=y.height-U&&I.readPixels(N,B,O,U,Oe.convert(Ue),Oe.convert(De),Q)}finally{const ve=L!==null?be.get(L).__webglFramebuffer:null;Ee.bindFramebuffer(I.FRAMEBUFFER,ve)}}},this.readRenderTargetPixelsAsync=async function(y,N,B,O,U,Q,ae){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pe=be.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ae!==void 0&&(pe=pe[ae]),pe)if(N>=0&&N<=y.width-O&&B>=0&&B<=y.height-U){Ee.bindFramebuffer(I.FRAMEBUFFER,pe);const ve=y.texture,Ue=ve.format,De=ve.type;if(!qe.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qe.textureTypeReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ae=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Ae),I.bufferData(I.PIXEL_PACK_BUFFER,Q.byteLength,I.STREAM_READ),I.readPixels(N,B,O,U,Oe.convert(Ue),Oe.convert(De),0);const Qe=L!==null?be.get(L).__webglFramebuffer:null;Ee.bindFramebuffer(I.FRAMEBUFFER,Qe);const it=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Vd(I,it,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Ae),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Q),I.deleteBuffer(Ae),I.deleteSync(it),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,N=null,B=0){const O=Math.pow(2,-B),U=Math.floor(y.image.width*O),Q=Math.floor(y.image.height*O),ae=N!==null?N.x:0,pe=N!==null?N.y:0;T.setTexture2D(y,0),I.copyTexSubImage2D(I.TEXTURE_2D,B,0,0,ae,pe,U,Q),Ee.unbindTexture()};const Gu=I.createFramebuffer(),Vu=I.createFramebuffer();this.copyTextureToTexture=function(y,N,B=null,O=null,U=0,Q=null){Q===null&&(U!==0?(Xr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Q=U,U=0):Q=0);let ae,pe,ve,Ue,De,Ae,Qe,it,St;const vt=y.isCompressedTexture?y.mipmaps[Q]:y.image;if(B!==null)ae=B.max.x-B.min.x,pe=B.max.y-B.min.y,ve=B.isBox3?B.max.z-B.min.z:1,Ue=B.min.x,De=B.min.y,Ae=B.isBox3?B.min.z:0;else{const rn=Math.pow(2,-U);ae=Math.floor(vt.width*rn),pe=Math.floor(vt.height*rn),y.isDataArrayTexture?ve=vt.depth:y.isData3DTexture?ve=Math.floor(vt.depth*rn):ve=1,Ue=0,De=0,Ae=0}O!==null?(Qe=O.x,it=O.y,St=O.z):(Qe=0,it=0,St=0);const et=Oe.convert(N.format),Ce=Oe.convert(N.type);let Lt;N.isData3DTexture?(T.setTexture3D(N,0),Lt=I.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(T.setTexture2DArray(N,0),Lt=I.TEXTURE_2D_ARRAY):(T.setTexture2D(N,0),Lt=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,N.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,N.unpackAlignment);const st=I.getParameter(I.UNPACK_ROW_LENGTH),dn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Ai=I.getParameter(I.UNPACK_SKIP_PIXELS),qt=I.getParameter(I.UNPACK_SKIP_ROWS),ms=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,vt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,vt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ue),I.pixelStorei(I.UNPACK_SKIP_ROWS,De),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ae);const mt=y.isDataArrayTexture||y.isData3DTexture,sn=N.isDataArrayTexture||N.isData3DTexture;if(y.isDepthTexture){const rn=be.get(y),Ht=be.get(N),Kt=be.get(rn.__renderTarget),aa=be.get(Ht.__renderTarget);Ee.bindFramebuffer(I.READ_FRAMEBUFFER,Kt.__webglFramebuffer),Ee.bindFramebuffer(I.DRAW_FRAMEBUFFER,aa.__webglFramebuffer);for(let hi=0;hi<ve;hi++)mt&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,be.get(y).__webglTexture,U,Ae+hi),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,be.get(N).__webglTexture,Q,St+hi)),I.blitFramebuffer(Ue,De,ae,pe,Qe,it,ae,pe,I.DEPTH_BUFFER_BIT,I.NEAREST);Ee.bindFramebuffer(I.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(U!==0||y.isRenderTargetTexture||be.has(y)){const rn=be.get(y),Ht=be.get(N);Ee.bindFramebuffer(I.READ_FRAMEBUFFER,Gu),Ee.bindFramebuffer(I.DRAW_FRAMEBUFFER,Vu);for(let Kt=0;Kt<ve;Kt++)mt?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,rn.__webglTexture,U,Ae+Kt):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,rn.__webglTexture,U),sn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ht.__webglTexture,Q,St+Kt):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ht.__webglTexture,Q),U!==0?I.blitFramebuffer(Ue,De,ae,pe,Qe,it,ae,pe,I.COLOR_BUFFER_BIT,I.NEAREST):sn?I.copyTexSubImage3D(Lt,Q,Qe,it,St+Kt,Ue,De,ae,pe):I.copyTexSubImage2D(Lt,Q,Qe,it,Ue,De,ae,pe);Ee.bindFramebuffer(I.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else sn?y.isDataTexture||y.isData3DTexture?I.texSubImage3D(Lt,Q,Qe,it,St,ae,pe,ve,et,Ce,vt.data):N.isCompressedArrayTexture?I.compressedTexSubImage3D(Lt,Q,Qe,it,St,ae,pe,ve,et,vt.data):I.texSubImage3D(Lt,Q,Qe,it,St,ae,pe,ve,et,Ce,vt):y.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Q,Qe,it,ae,pe,et,Ce,vt.data):y.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Q,Qe,it,vt.width,vt.height,et,vt.data):I.texSubImage2D(I.TEXTURE_2D,Q,Qe,it,ae,pe,et,Ce,vt);I.pixelStorei(I.UNPACK_ROW_LENGTH,st),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,dn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ai),I.pixelStorei(I.UNPACK_SKIP_ROWS,qt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,ms),Q===0&&N.generateMipmaps&&I.generateMipmap(Lt),Ee.unbindTexture()},this.copyTextureToTexture3D=function(y,N,B=null,O=null,U=0){return Xr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,N,B,O,U)},this.initRenderTarget=function(y){be.get(y).__webglFramebuffer===void 0&&T.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?T.setTextureCube(y,0):y.isData3DTexture?T.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?T.setTexture2DArray(y,0):T.setTexture2D(y,0),Ee.unbindTexture()},this.resetState=function(){C=0,A=0,L=null,Ee.reset(),ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}}const Y_={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class qs{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const q_=new ta(-1,1,1,-1,0,1);class $_ extends Ft{constructor(){super(),this.setAttribute("position",new gt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new gt([0,2,0,0,2,0],2))}}const Z_=new $_;class Tu{constructor(e){this._mesh=new te(Z_,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,q_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Eu extends qs{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Sn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=yl.clone(e.uniforms),this.material=new Sn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Tu(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class ch extends qs{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class J_ extends qs{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Q_{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Re);this._width=n.width,this._height=n.height,t=new ai(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:hs}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Eu(Y_),this.copyPass.material.blending=Vn,this.clock=new yu}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}ch!==void 0&&(a instanceof ch?n=!0:a instanceof J_&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Re);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class ex extends qs{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new _e}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=i}}const tx={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new Re(1/1024,1/512)}},vertexShader:`

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

		}`},Lr={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class nx extends qs{constructor(){super(),this.uniforms=yl.clone(Lr.uniforms),this.material=new Rf({name:Lr.name,uniforms:this.uniforms,vertexShader:Lr.vertexShader,fragmentShader:Lr.fragmentShader}),this._fsQuad=new Tu(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Ke.getTransfer(this._outputColorSpace)===ot&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Lh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Dh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Nh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Uh?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===kh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Bh?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Fh&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const Wa=new Map;let Qn=null,_i=null;function Ll(){if(_i)return _i;const s=document.createElement("canvas");s.width=4,s.height=1;const e=s.getContext("2d"),t=e.createLinearGradient(0,0,4,0);return t.addColorStop(0,"#383838"),t.addColorStop(.42,"#9a9a9a"),t.addColorStop(1,"#ffffff"),e.fillStyle=t,e.fillRect(0,0,4,1),_i=new tn(s),_i.minFilter=Ut,_i.magFilter=Ut,_i.generateMipmaps=!1,_i}function hh(s){var t;if(!s||s.isMeshToonMaterial)return s;const e=new El({color:((t=s.color)==null?void 0:t.clone())??new _e(16777215),map:s.map??null,gradientMap:Ll(),transparent:s.transparent??!1,opacity:s.opacity??1,side:s.side??En,alphaTest:s.alphaTest??0});return e.map&&(e.map.colorSpace=xt,e.map.anisotropy=8),e}function H(s,e={}){const{map:t,transparent:n,opacity:i,emissive:r,emissiveIntensity:a,...o}=e,l=`toon:${s}:${(t==null?void 0:t.uuid)??""}:${n}:${i}:${JSON.stringify(o)}`;if(!Wa.has(l)){const c=new El({color:s,gradientMap:Ll(),map:t??null,transparent:n??!1,opacity:i??1,...o});r!=null&&(c.emissive=new _e(r),c.emissiveIntensity=a??.4),Wa.set(l,c)}return Wa.get(l)}function Au(s,e=1.068,t=657936){if(!s.geometry||s.userData.hasOutline)return s;const n=new te(s.geometry,new dt({color:t,side:zt}));return n.scale.multiplyScalar(e),n.userData.isOutline=!0,n.raycast=()=>{},s.add(n),s.userData.hasOutline=!0,s}function ee(s,e,t=1.068){const n=new te(s,e);return Au(n,t),n}function ut(s,e,t=1.042){return ee(s,e,t)}function ix(){if(Qn)return Qn;const s=128,e=document.createElement("canvas");e.width=s,e.height=s;const t=e.getContext("2d");t.fillStyle="#7aaa88",t.fillRect(0,0,s,s);for(let n=0;n<3e3;n++){const i=Math.random()*s,r=Math.random()*s,a=110+Math.floor(Math.random()*30);t.fillStyle=`rgba(${a-30},${a},${a-35},0.25)`,t.fillRect(i,r,1,2)}return Qn=new tn(e),Qn.wrapS=Qn.wrapT=wi,Qn.repeat.set(40,40),Qn.colorSpace=xt,Qn}const Xa=new Map;function Cu(s=5943464){const e=s.toString(16);if(Xa.has(e))return Xa.get(e);const t=document.createElement("canvas");t.width=128,t.height=192;const n=t.getContext("2d"),i=`#${new _e(s).getHexString()}`;n.fillStyle="#283038",n.fillRect(0,0,128,192),n.fillStyle=i,n.fillRect(0,0,128,22),n.fillStyle="#f0f8ff",n.font="bold 14px sans-serif",n.textAlign="center",n.fillText("DRINKS",64,16);const r=["#e8a050","#f0d050","#70b8c8","#e87878","#88c878","#c8a0e0"];for(let o=0;o<5;o++)for(let l=0;l<3;l++){const c=18+l*32,h=30+o*30;n.fillStyle=r[(o*3+l)%r.length],n.fillRect(c,h,18,22),n.strokeStyle="#1a1a1a",n.lineWidth=2,n.strokeRect(c,h,18,22),n.fillStyle="rgba(255,255,255,0.4)",n.fillRect(c+2,h+2,5,16)}n.fillStyle="#8898a8",n.fillRect(96,150,24,32),n.fillStyle="#f0f0f0",n.font="10px sans-serif",n.fillText("¥",108,170);const a=new tn(t);return a.colorSpace=xt,Xa.set(e,a),a}function sx(){return new El({color:6992064,gradientMap:Ll(),transparent:!0,opacity:.9})}const We={road:13157564,roadLine:15265e3,sidewalk:14210252,wall:14210252,wallDark:12104876,roof:6972504,roofDark:5393476,green:8239234,meadow:6986360,gravel:11052188,vending:5943464,orange:15773792,skin:15782064,hair:1710618,shirt:16316664,pants:1710618,backpack:10000536,cone:15769680,sign:6986362,metal:9474192,awningRed:14186600,awningBlue:6850736};function ja(){return new Promise(s=>requestAnimationFrame(s))}function uh(s,e){if(e===md)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Xo||e===Jh){let t=s.getIndex();if(t===null){const a=[],o=s.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===Xo)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class rx extends fs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new hx(t)}),this.register(function(t){return new ux(t)}),this.register(function(t){return new vx(t)}),this.register(function(t){return new Mx(t)}),this.register(function(t){return new Sx(t)}),this.register(function(t){return new fx(t)}),this.register(function(t){return new px(t)}),this.register(function(t){return new mx(t)}),this.register(function(t){return new gx(t)}),this.register(function(t){return new cx(t)}),this.register(function(t){return new _x(t)}),this.register(function(t){return new dx(t)}),this.register(function(t){return new yx(t)}),this.register(function(t){return new xx(t)}),this.register(function(t){return new ox(t)}),this.register(function(t){return new bx(t)}),this.register(function(t){return new wx(t)})}load(e,t,n,i){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=Us.extractUrlBase(e);a=Us.resolveURL(c,this.path)}else a=Us.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new xu(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Ru){try{a[je.KHR_BINARY_GLTF]=new Tx(e)}catch(u){i&&i(u);return}r=JSON.parse(a[je.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new Bx(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case je.KHR_MATERIALS_UNLIT:a[u]=new lx;break;case je.KHR_DRACO_MESH_COMPRESSION:a[u]=new Ex(r,this.dracoLoader);break;case je.KHR_TEXTURE_TRANSFORM:a[u]=new Ax;break;case je.KHR_MESH_QUANTIZATION:a[u]=new Cx;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function ax(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const je={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class ox{constructor(e){this.parser=e,this.name=je.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const h=new _e(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],jt);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new $o(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new ni(h),c.distance=u;break;case"spot":c=new jf(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),zn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class lx{constructor(){this.name=je.KHR_MATERIALS_UNLIT}getMaterialType(){return dt}extendParams(e,t,n){const i=[];e.color=new _e(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],jt),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,xt))}return Promise.all(i)}}class cx{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class hx{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Re(o,o)}return Promise.all(r)}}class ux{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class dx{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class fx{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new _e(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],jt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,xt)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class px{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class mx{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new _e().setRGB(o[0],o[1],o[2],jt),Promise.all(r)}}class gx{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class _x{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new _e().setRGB(o[0],o[1],o[2],jt),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,xt)),Promise.all(r)}}class xx{constructor(e){this.parser=e,this.name=je.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}}class yx{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}}class vx{constructor(e){this.parser=e,this.name=je.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class Mx{constructor(e){this.parser=e,this.name=je.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Sx{constructor(e){this.parser=e,this.name=je.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class bx{constructor(e){this.name=je.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}}class wx{constructor(e){this.name=je.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==on.TRIANGLES&&c.mode!==on.TRIANGLE_STRIP&&c.mode!==on.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(const g of u){const _=new Fe,m=new E,p=new vn,b=new E(1,1,1),w=new Mf(g.geometry,g.material,d);for(let M=0;M<d;M++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,M),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,M),l.SCALE&&b.fromBufferAttribute(l.SCALE,M),w.setMatrixAt(M,_.compose(m,p,b));for(const M in l)if(M==="_COLOR_0"){const R=l[M];w.instanceColor=new Ko(R.array,R.itemSize,R.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&g.geometry.setAttribute(M,l[M]);pt.prototype.copy.call(w,g),this.parser.assignFinalMaterial(w),f.push(w)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const Ru="glTF",As=12,dh={JSON:1313821514,BIN:5130562};class Tx{constructor(e){this.name=je.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,As),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Ru)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-As,r=new DataView(e,As);let a=0;for(;a<i;){const o=r.getUint32(a,!0);a+=4;const l=r.getUint32(a,!0);if(a+=4,l===dh.JSON){const c=new Uint8Array(e,As+a,o);this.content=n.decode(c)}else if(l===dh.BIN){const c=As+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Ex{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=je.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const h in a){const u=Qo[h]||h.toLowerCase();o[u]=a[h]}for(const h in e.attributes){const u=Qo[h]||h.toLowerCase();if(a[h]!==void 0){const d=n.accessors[e.attributes[h]],f=es[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(const g in f.attributes){const _=f.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}u(f)},o,c,jt,d)})})}}class Ax{constructor(){this.name=je.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Cx{constructor(){this.name=je.KHR_MESH_QUANTIZATION}}class Iu extends Ks{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,g=e*c,_=g-c,m=-2*f+3*d,p=f-d,b=1-m,w=p-d+u;for(let M=0;M!==o;M++){const R=a[_+M+o],C=a[_+M+l]*h,A=a[g+M+o],L=a[g+M]*h;r[M]=b*R+w*C+m*A+p*L}return r}}const Rx=new vn;class Ix extends Iu{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return Rx.fromArray(r).normalize().toArray(r),r}}const on={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},es={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},fh={9728:Ut,9729:Qt,9984:zh,9985:Or,9986:Is,9987:Hn},ph={33071:si,33648:Yr,10497:wi},Ka={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Qo={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ei={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Px={CUBICSPLINE:void 0,LINEAR:Gs,STEP:Hs},Ya={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Lx(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Tl({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:En})),s.DefaultMaterial}function xi(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function zn(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Dx(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;a.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;o.push(d)}if(r){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function Nx(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Ux(s){let e;const t=s.extensions&&s.extensions[je.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+qa(t.attributes):e=s.indices+":"+qa(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+qa(s.targets[n]);return e}function qa(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function el(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Fx(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const kx=new Fe;class Bx{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new ax,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&a<98?this.textureLoader=new Vf(this.options.manager):this.textureLoader=new $f(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new xu(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return xi(r,o,i),zn(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,h]of a.children.entries())r(h,o.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[je.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,a){n.load(Us.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=Ka[i.type],o=es[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new Xt(c,a,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],l=Ka[i.type],c=es[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,m;if(f&&f!==u){const p=Math.floor(d/f),b="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let w=t.cache.get(b);w||(_=new c(o,p*f,i.count*f/h),w=new lu(_,f/h),t.cache.add(b,w)),m=new Ws(w,l,d%f/h,g)}else o===null?_=new c(i.count*l):_=new c(o,d,i.count*l),m=new Xt(_,l,g);if(i.sparse!==void 0){const p=Ka.SCALAR,b=es[i.sparse.indices.componentType],w=i.sparse.indices.byteOffset||0,M=i.sparse.values.byteOffset||0,R=new b(a[1],w,i.sparse.count*p),C=new c(a[2],M,i.sparse.count*l);o!==null&&(m=new Xt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let A=0,L=R.length;A<L;A++){const S=R[A];if(m.setX(S,C[A*l]),l>=2&&m.setY(S,C[A*l+1]),l>=3&&m.setZ(S,C[A*l+2]),l>=4&&m.setW(S,C[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const i=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const d=(r.samplers||{})[a.sampler]||{};return h.magFilter=fh[d.magFilter]||Qt,h.minFilter=fh[d.minFilter]||Hn,h.wrapS=ph[d.wrapS]||wi,h.wrapT=ph[d.wrapT]||wi,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Ut&&h.minFilter!==Qt,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const a=i.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const m=new Tt(_);m.needsUpdate=!0,d(m)}),t.load(Us.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),zn(u,a),u.userData.mimeType=a.mimeType||Fx(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[je.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[je.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=r.associations.get(a);a=r.extensions[je.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new fu,hn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new du,hn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Tl}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let a;const o={},l=r.extensions||{},c=[];if(l[je.KHR_MATERIALS_UNLIT]){const u=i[je.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,r,t))}else{const u=r.pbrMetallicRoughness||{};if(o.color=new _e(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],jt),o.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,xt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=gn);const h=r.alphaMode||Ya.OPAQUE;if(h===Ya.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Ya.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==dt&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Re(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==dt&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==dt){const u=r.emissiveFactor;o.emissive=new _e().setRGB(u[0],u[1],u[2],jt)}return r.emissiveTexture!==void 0&&a!==dt&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,xt)),Promise.all(c).then(function(){const u=new a(o);return r.name&&(u.name=r.name),zn(u,r),t.associations.set(u,{materials:e}),r.extensions&&xi(i,u,r),u})}createUniqueName(e){const t=rt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[je.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return mh(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],h=Ux(c),u=i[h];if(u)a.push(u.promise);else{let d;c.extensions&&c.extensions[je.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=mh(new Ft,c,t),i[h]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const h=a[l].material===void 0?Lx(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,g=h.length;f<g;f++){const _=h[f],m=a[f];let p;const b=c[f];if(m.mode===on.TRIANGLES||m.mode===on.TRIANGLE_STRIP||m.mode===on.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new xf(_,b):new te(_,b),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===on.TRIANGLE_STRIP?p.geometry=uh(p.geometry,Jh):m.mode===on.TRIANGLE_FAN&&(p.geometry=uh(p.geometry,Xo));else if(m.mode===on.LINES)p=new wf(_,b);else if(m.mode===on.LINE_STRIP)p=new bl(_,b);else if(m.mode===on.LINE_LOOP)p=new Tf(_,b);else if(m.mode===on.POINTS)p=new Ef(_,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&Nx(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),zn(p,r),m.extensions&&xi(i,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&xi(i,u[0],r),u[0];const d=new we;r.extensions&&xi(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Wt(Yt.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new ta(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),zn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),a=i,o=[],l=[];for(let c=0,h=a.length;c<h;c++){const u=a[c];if(u){o.push(u);const d=new Fe;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Ml(o,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const f=i.channels[u],g=i.samplers[f.sampler],_=f.target,m=_.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,b=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",b)),c.push(g),h.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],g=u[2],_=u[3],m=u[4],p=[];for(let b=0,w=d.length;b<w;b++){const M=d[b],R=f[b],C=g[b],A=_[b],L=m[b];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();const S=n._createAnimationTracks(M,R,C,A,L);if(S)for(let v=0;v<S.length;v++)p.push(S[v])}return new qo(r,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,kx)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new hu:c.length>1?h=new we:c.length===1?h=c[0]:h=new pt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=a),zn(h,r),r.extensions&&xi(n,h,r),r.matrix!==void 0){const u=new Fe;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new we;n.name&&(r.name=i.createUniqueName(n.name)),zn(r,n),n.extensions&&xi(t,r,n);const a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);const c=h=>{const u=new Map;for(const[d,f]of i.associations)(d instanceof hn||d instanceof Tt)&&u.set(d,f);return h.traverse(d=>{const f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){const a=[],o=e.name?e.name:e.uuid,l=[];ei[r.path]===ei.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(o);let c;switch(ei[r.path]){case ei.weights:c=as;break;case ei.rotation:c=os;break;case ei.translation:case ei.scale:c=ls;break;default:switch(n.itemSize){case 1:c=as;break;case 2:case 3:default:c=ls;break}break}const h=i.interpolation!==void 0?Px[i.interpolation]:Gs,u=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const g=new c(l[d]+"."+ei[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=el(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof os?Ix:Iu;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Ox(s,e,t){const n=e.attributes,i=new Mn;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new E(l[0],l[1],l[2]),new E(c[0],c[1],c[2])),o.normalized){const h=el(es[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new E,l=new E;for(let c=0,h=r.length;c<h;c++){const u=r[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const _=el(es[d.componentType]);l.multiplyScalar(_)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;const a=new Rn;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function mh(s,e,t){const n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){s.setAttribute(o,l)})}for(const a in n){const o=Qo[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){const a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return Ke.workingColorSpace!==jt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ke.workingColorSpace}" not supported.`),zn(s,e),Ox(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Dx(s,e.targets,t):s})}function zx(s){const e=new Map,t=new Map,n=s.clone();return Pu(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const r=i,a=e.get(i),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Pu(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)Pu(s.children[n],e.children[n],t)}const $a={bench:{file:"bench.glb",targetHeight:.85,maxFootprint:1.5,credit:"Kenney Furniture Kit (CC0)"},bench_cushion:{file:"bench_cushion.glb",targetHeight:.88,maxFootprint:1.5,credit:"Kenney Furniture Kit (CC0)"},fence_low:{file:"fence_low.glb",targetHeight:.55,maxFootprint:2,credit:"Kenney City Kit Suburban (CC0)"},tree_normal:{file:"tree_normal.glb",targetHeight:3.2,maxFootprint:2.2,credit:"Kenney City Kit Suburban (CC0)"},tree_cherry:{file:"tree_cherry.glb",targetHeight:2.8,maxFootprint:1.8,credit:"Kenney City Kit Suburban (CC0)"},shrine:{file:"shrine.glb",targetHeight:2.6,maxFootprint:3.5,credit:"Tomb Chaser 2 / Polygonal Mind (CC0)"},shrine_stairs:{file:"shrine_stairs.glb",targetHeight:1.1,maxFootprint:2.8,credit:"Tomb Chaser 2 / Polygonal Mind (CC0)"},street_lamp:{file:"street_lamp.glb",targetHeight:2.4,maxFootprint:.8,credit:"Lunar Year / Polygonal Mind (CC0)"},fountain:{file:"fountain.glb",targetHeight:1.6,maxFootprint:2.2,credit:"MomusPark / Polygonal Mind (CC0)"},rock:{file:"rock.glb",targetHeight:.42,maxFootprint:1,credit:"Tomb Chaser 2 / Polygonal Mind (CC0)"},bush:{file:"bush.glb",targetHeight:.65,maxFootprint:1.2,credit:"MomusPark / Polygonal Mind (CC0)"},vending:{file:"vending.glb",targetHeight:1.85,maxFootprint:1,credit:"Tomb Chaser 2 / Polygonal Mind (CC0)"},decoration:{file:"decoration.glb",targetHeight:.35,maxFootprint:.7,credit:"Tomb Chaser 2 / Polygonal Mind (CC0)"},animal_cat:{file:"animal_cat.glb",targetHeight:.7,maxFootprint:.65,credit:"Kenney Cube Pets (CC0)"},animal_dog:{file:"animal_dog.glb",targetHeight:.72,maxFootprint:.65,credit:"Kenney Cube Pets (CC0)"},animal_bunny:{file:"animal_bunny.glb",targetHeight:.65,maxFootprint:.55,credit:"Kenney Cube Pets (CC0)"},animal_fox:{file:"animal_fox.glb",targetHeight:.68,maxFootprint:.6,credit:"Kenney Cube Pets (CC0)"},animal_duck:{file:"animal_duck.glb",targetHeight:.55,maxFootprint:.5,credit:"Kenney Cube Pets (CC0)"},animal_pig:{file:"animal_pig.glb",targetHeight:.65,maxFootprint:.55,credit:"Kenney Cube Pets (CC0)"},animal_parrot:{file:"animal_parrot.glb",targetHeight:.6,maxFootprint:.5,credit:"Kenney Cube Pets (CC0)"},shop_a:{file:"shop_a.glb",targetHeight:2.8,maxFootprint:3.8,credit:"Kenney City Kit Commercial (CC0)"},shop_b:{file:"shop_b.glb",targetHeight:2.7,maxFootprint:3.6,credit:"Kenney City Kit Commercial (CC0)"},shop_c:{file:"shop_c.glb",targetHeight:2.6,maxFootprint:3.4,credit:"Kenney City Kit Commercial (CC0)"},shop_d:{file:"shop_d.glb",targetHeight:2.5,maxFootprint:3.2,credit:"Kenney City Kit Commercial (CC0)"},building_a:{file:"building_a.glb",targetHeight:3.4,maxFootprint:4.2,credit:"Kenney City Kit Suburban (CC0)"},building_b:{file:"building_b.glb",targetHeight:3.6,maxFootprint:4.5,credit:"Kenney City Kit Suburban (CC0)"},building_c:{file:"building_c.glb",targetHeight:3.2,maxFootprint:4,credit:"Kenney City Kit Suburban (CC0)"},building_d:{file:"building_d.glb",targetHeight:3,maxFootprint:3.6,credit:"Kenney City Kit Suburban (CC0)"},awning:{file:"awning.glb",targetHeight:.5,maxFootprint:1.8,credit:"Kenney City Kit Commercial (CC0)"},character_female_a:{file:"character_female_a.glb",targetHeight:2.35,maxFootprint:1.4,rigged:!0,credit:"KayKit Character Pack Adventures (CC0)"},character_female_b:{file:"character_female_b.glb",targetHeight:2.35,maxFootprint:1.4,rigged:!0,credit:"KayKit Character Pack Adventures (CC0)"},character_female_c:{file:"character_female_c.glb",targetHeight:2.35,maxFootprint:1.4,rigged:!0,credit:"KayKit Character Pack Adventures (CC0)"},character_male_a:{file:"character_male_a.glb",targetHeight:2.35,maxFootprint:1.4,rigged:!0,credit:"KayKit Character Pack Adventures (CC0)"},character_male_b:{file:"character_male_b.glb",targetHeight:2.35,maxFootprint:1.4,rigged:!0,credit:"KayKit Character Pack Adventures (CC0)"},character_male_c:{file:"character_male_c.glb",targetHeight:2.35,maxFootprint:1.4,rigged:!0,credit:"KayKit Character Pack Adventures (CC0)"}};function gh(s){return`/WalkingSimulation/models/cc0/${s}`}const Hx=["_armleft","_armright","_body","_head","_legleft","_legright","_head_hooded","_cape"];function _h(s){const e=s.name.toLowerCase();return Hx.some(t=>e.endsWith(t))}function Gx(s){let e=!1;s.traverse(t=>{(t.isMesh||t.isSkinnedMesh)&&_h(t)&&(e=!0)}),e&&s.traverse(t=>{!t.isMesh&&!t.isSkinnedMesh||_h(t)||(t.visible=!1)})}function Vx(s,{outlineScale:e=1.055}={}){s.traverse(t=>{!t.isMesh||t.userData.isOutline||(t.castShadow=!0,t.receiveShadow=!0,t.frustumCulled=!0,Array.isArray(t.material)?t.material=t.material.map(hh):t.material=hh(t.material),t.geometry&&!t.userData.hasOutline&&e>1&&Au(t,e,657936))})}function Ls(s){const e=new Mn;let t=!1;return s.updateMatrixWorld(!0),s.traverse(n=>{if(!n.isMesh||!n.geometry||n.visible===!1)return;const i=n.geometry;i.boundingBox||i.computeBoundingBox();const r=i.boundingBox.clone();r.applyMatrix4(n.matrixWorld),t?e.union(r):(e.copy(r),t=!0)}),t?e:new Mn().setFromObject(s)}function tl(s,e=0){const t=Ls(s);return s.position.y+=e-t.min.y,s}function Wx(s,e){const t={};for(const i of e){const r=s.clipAction(i);r.clampWhenFinished=!0,t[i.name.toLowerCase()]=r}const n={walking_a:"walk",walking_b:"walk",walking_c:"walk",running_a:"sprint",running_b:"sprint",jump_start:"jump",jump_idle:"jump",jump_full_short:"jump",sit_floor_idle:"sit",sit_chair_idle:"sit",unarmed_idle:"idle",cheer:"emote-yes",interact:"emote-no"};for(const[i,r]of Object.entries(n))t[i]&&!t[r]&&(t[r]=t[i]);return t.sit_chair_idle?t.sit=t.sit_chair_idle:t.sit_floor_idle&&(t.sit=t.sit_floor_idle),t}function xh(s,{targetHeight:e,maxFootprint:t,maxHeight:n}){s.updateMatrixWorld(!0);let i=Ls(s),r=i.getSize(new E);if(e&&r.y>1e-4){const o=e/r.y;s.scale.multiplyScalar(o),s.updateMatrixWorld(!0),i=Ls(s),r=i.getSize(new E)}const a=Math.max(r.x,r.z);if(t&&a>t){const o=t/a;s.scale.multiplyScalar(o),s.updateMatrixWorld(!0),i=Ls(s),r=i.getSize(new E)}return n&&r.y>n&&(s.scale.multiplyScalar(n/r.y),s.updateMatrixWorld(!0),i=Ls(s)),s.position.y-=i.min.y,s.updateMatrixWorld(!0),s}class Xx{constructor(){this.loader=new rx,this.templates=new Map,this.characterTemplates=new Map,this.failed=new Map,this.loadedKeys=[]}has(e){return(this.templates.has(e)||this.characterTemplates.has(e))&&!this.failed.has(e)}getLoadReport(){return{loaded:[...this.loadedKeys],failed:Object.fromEntries(this.failed),total:this.loadedKeys.length+this.failed.size}}async loadAll(e=$a,t){const n=Object.entries(e);let i=0;const r=gh("");await Promise.all(n.map(async([a,o])=>{const l=gh(o.file);try{this.loader.setResourcePath(r);const c=await this.loader.loadAsync(l),h=c.scene;o.rigged&&Gx(h),Vx(h,{outlineScale:o.rigged?1:1.055}),xh(h,{targetHeight:o.targetHeight,maxFootprint:o.rigged?null:o.maxFootprint,maxHeight:o.maxHeight}),h.traverse(u=>{u.userData.modelKey=a}),o.rigged?this.characterTemplates.set(a,{scene:h,animations:c.animations??[]}):this.templates.set(a,h),this.loadedKeys.push(a)}catch(c){const h=(c==null?void 0:c.message)??String(c);console.warn(`ModelLoader: failed "${a}" from ${l}: ${h}`),this.failed.set(a,{file:o.file,url:l,error:h})}finally{i+=1,t==null||t(`Loading 3D models… (${i}/${n.length})`)}})),this.failed.size>0&&console.warn("ModelLoader report:",this.getLoadReport())}createCharacterInstance(e,t={}){const n=this.characterTemplates.get(e);if(!n||this.failed.has(e))return null;$a[e];const{rotationY:i=0,tint:r=null,tintStrength:a=.22}=t,o=zx(n.scene);o.traverse(u=>{if(!(!u.isMesh||!u.material)&&(Array.isArray(u.material)?u.material=u.material.map(d=>d.clone()):u.material=u.material.clone(),r!=null)){const d=Array.isArray(u.material)?u.material:[u.material];for(const f of d)f.color&&f.color.lerp(new _e(r),a)}});const l=new hp(o),c=Wx(l,n.animations),h=new we;return i&&(o.rotation.y=i),h.add(o),h.userData.isRiggedCharacter=!0,h.userData.mixer=l,h.userData.actions=c,h.userData.currentAnim=null,h.userData.legs=null,h.userData.arms=null,h.userData.walkPhase=0,h.userData.sitBlend=0,h.userData.modelKey=e,h.userData.dynamic=!0,this._playCharacterAnim(h,"idle",0),h}_playCharacterAnim(e,t,n=.2){const i=e.userData.actions,r=i==null?void 0:i[t];if(!r){console.warn(`[Anim] missing clip "${t}" for`,e.userData.modelKey??"?","| available:",Object.keys(i??{}).filter(c=>!c.includes("_")).join(" "));return}const a=e.userData.currentAnim,o=a&&a!==t?i[a]:null,l=["sit","static"].includes(t);r.reset(),r.setEffectiveWeight(1),r.setLoop(l?$h:Zh,l?1:1/0),r.clampWhenFinished=l,r.play(),o&&(n>0?o.fadeOut(n):o.stop()),e.userData.currentAnim=t}updateCharacterAnimation(e,t,n){var h;if(!((h=e==null?void 0:e.userData)!=null&&h.isRiggedCharacter))return;const i=e.userData.mixer;if(!i)return;i.update(n);const r=e.userData.isSitting,a=e.userData.isJumping;let o="idle";a?o="jump":r?o="sit":t>4.5?o="sprint":t>.15&&(o="walk");const l=e.userData.actions,c=l==null?void 0:l[e.userData.currentAnim];if((e.userData.currentAnim!==o||c&&!c.isRunning()&&!["sit"].includes(o))&&this._playCharacterAnim(e,o,.18),o==="walk"||o==="sprint"){const u=l==null?void 0:l[o];if(u){const d=o==="sprint"?6.5:3.2;u.setEffectiveTimeScale(Math.min(t/d,2.5))}}}playCharacterEmote(e,t,n=1.2){var o;if(!((o=e==null?void 0:e.userData)!=null&&o.isRiggedCharacter))return;const i=e.userData.actions;if(!(i==null?void 0:i[t]))return;const a=e.userData.isSitting?"sit":"idle";this._playCharacterAnim(e,t,.12),clearTimeout(e.userData._emoteTimer),e.userData._emoteTimer=setTimeout(()=>{e.userData.currentAnim===t&&this._playCharacterAnim(e,a,.2)},n*1e3)}createInstance(e,t={}){const n=this.templates.get(e);if(!n||this.failed.has(e))return null;const i=$a[e]??{},{targetHeight:r=i.targetHeight,maxFootprint:a=i.maxFootprint,maxHeight:o=i.maxHeight,scale:l=1,tint:c=null,tintStrength:h=.28,rotationY:u=0}=t,d=n.clone(!0);return d.scale.set(1,1,1),d.position.set(0,0,0),d.rotation.set(0,0,0),d.traverse(f=>{if(!(!f.isMesh||!f.material)&&(Array.isArray(f.material)?f.material=f.material.map(g=>g.clone()):f.material=f.material.clone(),c!=null)){const g=Array.isArray(f.material)?f.material:[f.material];for(const _ of g)_.color&&_.color.lerp(new _e(c),h)}}),l!==1&&d.scale.multiplyScalar(l),xh(d,{targetHeight:r,maxFootprint:a,maxHeight:o}),u&&(d.rotation.y=u),d.userData.modelKey=e,d.userData.isLoadedModel=!0,d}}let en=null;function jx(s){en=s}function li(s,e,t,n={}){return(en==null?void 0:en.createInstance(s,{targetHeight:e,...n}))??t()}function Kx(s){let e=null;return s.traverse(t=>{!e&&t.isMesh&&(e=t)}),e}function Rt(s,e,t,n,i,r=0){const a=e.getPointAt(t),o=e.getTangentAt(t),l=new E(-o.z,0,o.x).multiplyScalar(n);return s.position.copy(a).add(l.multiplyScalar(i)),s.position.y=r,s.lookAt(s.position.x+o.x,s.position.y,s.position.z+o.z),s.userData.isLoadedModel&&tl(s,r),s}function Cs(s,e,t,n,i=0,r=180){const a=s.getSpacedPoints(r),o=[],l=[];for(let u=0;u<a.length;u++){const d=u/(a.length-1),f=a[u],g=s.getTangentAt(d).normalize(),_=new E(-g.z,0,g.x),m=f.clone().add(_.clone().multiplyScalar(i)),p=m.clone().add(_.clone().multiplyScalar(-e)),b=m.clone().add(_.clone().multiplyScalar(e));o.push(p.x,t,p.z,b.x,t,b.z)}for(let u=0;u<a.length-1;u++){const d=u*2,f=d+1,g=d+2,_=d+3;l.push(d,f,g,f,_,g)}const c=new Ft;c.setAttribute("position",new gt(o,3)),c.setIndex(l),c.computeVertexNormals();const h=new te(c,n);return h.receiveShadow=!0,h}function Lu(s,e,t,n,i,r="house"){const a=new we,o=H(n),l=H(i),c=e/2,h=ut(new fe(s,t,e),o);h.position.y=t/2,a.add(h);const u=Math.min(1.4,t*.35),d=ut(new fe(s+.02,u,e+.02),H(new _e(n).offsetHSL(0,0,-.08).getHex()));d.position.y=u/2,a.add(d);const f=r==="apartment"?Math.max(2,Math.round(t/1.6)):1;for(let R=1;R<f;R++){const C=ut(new fe(s+.06,.1,e+.06),H(new _e(i).offsetHSL(0,0,.1).getHex()));C.position.y=t/f*R,a.add(C)}const g=H(12116208),_=H(new _e(n).offsetHSL(0,0,-.15).getHex()),m=.52,p=.58,b=Math.max(1,Math.floor(s/1.3)),w=s/(b+1),M=[];for(let R=0;R<f;R++){const C=t/f;M.push(u+(R===0?C*.6:t/f*R+C*.55))}if(M.forEach((R,C)=>{if(!(C===0&&r==="shop"))for(let A=0;A<b;A++){const L=-s/2+w*(A+1),S=new te(new fe(m+.1,p+.1,.06),_);S.position.set(L,R,c+.02),a.add(S);const v=new te(new Nt(m,p),g);v.position.set(L,R,c+.06),a.add(v);const P=new te(new fe(m+.14,.07,.14),H(13682872));P.position.set(L,R-p/2-.02,c+.08),a.add(P)}}),r==="shop"){const R=ut(new fe(s*.65,u-.15,.08),_);R.position.set(0,u*.5+.08,c+.03),a.add(R);const C=new te(new Nt(s*.6,u-.22),H(9490664));C.position.set(0,u*.5+.08,c+.07),a.add(C);const A=ut(new fe(.82,1.55,.07),H(5914672));A.position.set(s*.28,.78,c+.03),a.add(A);const L=new te(new Nt(.55,1.1),H(8440040));L.position.set(s*.28,.9,c+.07),a.add(L);const S=[We.awningRed,We.awningBlue,5275728,12619824],v=S[Math.floor(n)%S.length],P=ut(new fe(s+.5,.08,1.3),H(v));P.position.set(0,t*.72,c+.6),a.add(P);for(let k=0;k<3;k++){const W=new te(new fe((s+.4)/6,.06,1.25),H(16777215));W.position.set(-s/3+k*(s/3),t*.72,c+.6),a.add(W)}const z=new te(new fe(s+.5,.18,.06),H(v));z.position.set(0,t*.72-.09,c+1.22),a.add(z)}if(r==="house"){const R=ut(new fe(.75,1.45,.08),H(5914672));R.position.set(-s*.2,.73,c+.03),a.add(R);const C=new te(new Ge(.05,5,4),H(13150272));C.position.set(-s*.2+.26,.72,c+.09),a.add(C);const A=ut(new fe(.3,.14,.04),H(15788224));A.position.set(-s*.2-.52,1.1,c+.04),a.add(A)}if(r==="apartment"){const R=ut(new fe(1.4,2,.1),H(new _e(n).offsetHSL(0,0,-.12).getHex()));R.position.set(0,1,c+.04),a.add(R);const C=new te(new Nt(.9,1.6),H(8437984));C.position.set(0,1,c+.1),a.add(C);for(let A=1;A<f;A++){const L=t/f*A+.18,S=ut(new fe(s*.45,.09,.65),H(9474192));S.position.set(s*.22,L,c+.36),a.add(S);const v=ut(new fe(s*.45,.32,.05),H(7368816));v.position.set(s*.22,L+.2,c+.67),a.add(v)}[t*.35,t*.65].forEach(A=>{const L=ut(new fe(.35,.2,.25),H(13158592));L.position.set(s/2+.1,A,0),a.add(L)})}if(r==="shrine"){const R=ee(new fe(s+.5,.12,e+.5),l);R.position.y=t+.06,a.add(R);const C=ee(new Pt(s*.58,1,4),l);C.position.y=t+.6,C.rotation.y=Math.PI/4,a.add(C)}else{const R=ut(new fe(s+.3,.22,e+.3),l);R.position.y=t+.11,a.add(R);const C=ut(new fe(s+.5,.1,e+.5),H(new _e(i).offsetHSL(0,0,-.07).getHex()));if(C.position.y=t+.05,a.add(C),t>3.2&&r!=="shop"){const A=ee(new Ve(.22,.24,.5,7),H(9079434));A.position.set(s*.3,t+.45,0),a.add(A);const L=ee(new Pt(.28,.2,7),H(6974058));L.position.set(s*.3,t+.8,0),a.add(L)}}return a}function nl(){const s=new we,e=H(12595248),t=new Ve(.12,.14,2.8,6);[-1.1,1.1].forEach(a=>{const o=ee(t,e);o.position.set(a,1.4,0),s.add(o)});const n=ee(new fe(2.8,.18,.18),e);n.position.y=2.55,s.add(n);const i=ee(new fe(3,.12,.22),e);i.position.y=2.85,s.add(i);const r=ee(new fe(.5,.25,.06),H(1710618));return r.position.set(0,2.35,.12),s.add(r),s}function il(){const s=en==null?void 0:en.createInstance("street_lamp",{targetHeight:2.8});if(s){const r=new we;return r.add(s),r.userData.lanternMesh=Kx(s)??s,r}const e=new we,t=ee(new Ve(.04,.05,1.6,6),H(We.metal));t.position.y=.8,e.add(t);const n=ee(new Ve(.18,.22,.45,8,1,!0),H(15753296));n.position.y=1.75,e.add(n);const i=ee(new Pt(.12,.15,4),H(3355443));return i.position.y=2.05,i.rotation.y=Math.PI/4,e.add(i),e.userData.lanternMesh=n,e}function Yx(s=We.vending){const e=li("vending",1.85,()=>{const t=new we,n=s,i=new _e(n).offsetHSL(0,0,-.12).getHex(),r=new _e(n).offsetHSL(0,0,.08).getHex(),a=ut(new fe(.95,.12,.75),H(i,{roughness:.9}));a.position.y=.06,t.add(a);const o=ut(new fe(.9,1.65,.7),H(n,{roughness:.75}));o.position.y=.95,t.add(o);const l=ut(new fe(.94,.1,.74),H(r,{roughness:.7}));l.position.y=1.82,t.add(l);const c=ut(new fe(1,.06,.22),H(r,{roughness:.65}));c.position.set(0,1.9,.38),c.rotation.x=-.12,t.add(c);const h=Cu(s),u=new te(new Nt(.68,1.15),H(16777215,{map:h,emissive:3172472,emissiveIntensity:.35}));u.position.set(0,1.02,.36),t.add(u);const d=ut(new fe(.76,1.22,.04),H(2764856,{roughness:.85}));d.position.set(0,1.02,.34),t.add(d);const f=ut(new fe(.18,.28,.05),H(8951976,{roughness:.55,metalness:.2}));f.position.set(.34,.55,.36),t.add(f);const g=ut(new fe(.1,.04,.06),H(1710618,{roughness:.95}));g.position.set(.34,.62,.39),t.add(g);const _=ut(new fe(.28,.14,.2),H(1712168,{roughness:.9}));return _.position.set(0,.28,.38),t.add(_),t},{tint:s,tintStrength:.32});return qx(e,s),e}function qx(s,e){if(s.userData.isLoadedModel&&!s.userData.vendingDisplay){const r=Cu(e),a=new te(new Nt(.64,1),H(16777215,{map:r,emissive:3172472,emissiveIntensity:.42,transparent:!0,opacity:.94,depthWrite:!1}));a.position.set(0,.98,.4),s.add(a),s.userData.vendingDisplay=a,s.userData.vendingGlow=a}else if(!s.userData.vendingGlow){const r=new te(new Nt(.55,.9),H(9490664,{emissive:4233400,emissiveIntensity:.45,transparent:!0,opacity:.55,depthWrite:!1}));r.position.set(0,1.05,.37),s.add(r),s.userData.vendingGlow=r}const n=new _e(e),i=new ni(n,.7,6);i.position.set(0,1.45,.5),s.add(i),s.userData.vendingLight=i,s.userData.vendingColor=e}function $x(){const s=new we,e=ee(new Ve(.06,.08,1.2,6),H(We.metal));e.position.y=.6,s.add(e);const t=ee(new fe(.35,.3,.25),H(We.orange));t.position.y=1.25,s.add(t);const n=ee(new Pt(.28,.2,4),H(We.orange));return n.position.y=1.5,n.rotation.y=Math.PI/4,s.add(n),s}function Zx(){const s=new we,e=ee(new Ve(.05,.06,2.5,6),H(We.orange));e.position.y=1.25,s.add(e);const t=ee(new Dt(.45,16),H(13691112));t.position.set(0,2.6,0),t.rotation.x=-.3,s.add(t);const n=ee(new oi(.45,.04,6,16),H(We.orange));return n.position.set(0,2.6,-.02),n.rotation.x=-.3,s.add(n),s}function Jx(){const s=ee(new Pt(.15,.4,8),H(We.cone));return s.position.y=.2,s}function Qx(){const s=new we,e=ee(new fe(.8,1.4,.5),H(We.sign));e.position.y=.7,s.add(e);const t=ee(new fe(.65,.9,.05),H(15790312));t.position.set(0,.85,.26),s.add(t);for(let n=0;n<5;n++){const i=new te(new fe(.45,.03,.01),H(8947848));i.position.set(0,.55+n*.14,.29),s.add(i)}return s}function ey(){const s=new we,e=ee(new Ve(.07,.09,4.5,6),H(6969930));e.position.y=2.25,s.add(e);const t=ee(new fe(1.2,.06,.06),H(6969930));t.position.y=4,s.add(t);const n=ee(new Dt(.22,12),H(3178688));return n.position.set(0,3.2,.12),s.add(n),s}function ty(){const s=new we,e=H(4227264),t=H(2236962),n=new oi(.28,.03,6,12);[-.45,.45].forEach(a=>{const o=ee(n,t);o.rotation.y=Math.PI/2,o.position.set(a,.28,0),s.add(o)});const i=ee(new fe(.9,.04,.04),e);i.position.set(0,.55,0),i.rotation.z=.15,s.add(i);const r=ee(new fe(.15,.06,.2),H(1710618));return r.position.set(-.15,.65,0),s.add(r),s}function Dl(s="normal"){return li(s==="cushion"?"bench_cushion":"bench",.85,()=>{const t=new we,n=H(9071178),i=ee(new fe(.08,.35,.08),n);[[-.5,-.15],[.5,-.15],[-.5,.15],[.5,.15]].forEach(([o,l])=>{const c=i.clone();c.position.set(o,.18,l),t.add(c)});const r=ee(new fe(1.2,.06,.4),n);r.position.y=.38,t.add(r);const a=ee(new fe(1.2,.35,.06),n);return a.position.set(0,.6,-.17),t.add(a),t},{rotationY:Math.PI})}function ny(){const s=ee(new Ve(.08,.1,.55,6),H(15777840));return s.position.y=.28,s}function iy(){return li("bush",.75,()=>{const s=new we,e=ee(new Ve(.15,.12,.25,6),H(9064496));e.position.y=.13,s.add(e);const t=ee(new Ge(.22,8,6),H(4889162));return t.position.y=.38,s.add(t),s})}function yh(s="normal"){if(s!=="pine"){const n=s==="cherry"?"tree_cherry":"tree_normal",i=en==null?void 0:en.createInstance(n,{tint:s==="cherry"?15769784:null,tintStrength:s==="cherry"?.55:.28,rotationY:Math.random()*Math.PI*2});if(i)return s==="cherry"&&(i.userData.isCherry=!0),i}const e=new we,t=ut(new Ve(.1,.14,1,6),H(6967360));return t.position.y=.5,e.add(t),s==="cherry"?([[0,1.4,0,.65,15769784],[-.35,1.25,.15,.48,16300236],[.35,1.3,-.15,.5,15769792],[0,1.65,.2,.42,16761040]].forEach(([i,r,a,o,l])=>{const c=ut(new Ge(o,9,7),H(l));c.position.set(i,r,a),e.add(c)}),e.userData.isCherry=!0):s==="pine"?[.65,.48,.32].forEach((n,i)=>{const r=ut(new Pt(n,.55,6),H(3832394));r.position.y=1+i*.42,e.add(r)}):[[0,1.35,0,.55],[-.28,1.2,.2,.4],[.3,1.25,-.18,.42],[0,1.55,.1,.35]].forEach(([n,i,r,a])=>{const o=ut(new Ge(a,8,6),H(5937754+Math.floor(Math.random()*328965)));o.position.set(n,i,r),e.add(o)}),e}function sy(){const s=new we,e=H(5937754);for(let t=0;t<5;t++){const n=1.5+Math.random()*1.2,i=ee(new Ve(.04,.05,n,6),e);i.position.set((Math.random()-.5)*.6,n/2,(Math.random()-.5)*.6),s.add(i)}return s}function ry(s=0){const t=document.createElement("canvas");t.width=128,t.height=128;const n=t.getContext("2d");n.clearRect(0,0,128,128);const i=o=>{const l=Math.sin(s*127.1+o*311.7)*43758.5453;return l-Math.floor(l)},r=4+Math.floor(i(0)*3);for(let o=0;o<r;o++){const l=128*(.25+i(o+1)*.5),c=128*(.3+i(o+2)*.4),h=128*(.22+i(o+3)*.18),u=128*(.14+i(o+4)*.12),d=.55+i(o+5)*.35;n.save(),n.translate(l,c),n.rotate(i(o+6)*Math.PI),n.beginPath(),n.ellipse(0,0,h,u,0,0,Math.PI*2),n.fillStyle=`rgba(255, 255, 255, ${d})`,n.fill(),n.restore()}const a=new tn(t);return a.colorSpace=xt,a}function ay(s,e,t,n){const i=s*.17+e*.31+t*.09,r=ry(i),a=new Cn(new bn({map:r,transparent:!0,depthWrite:!1,opacity:.88})),o=1.6+i%.6,l=n*1.8;return a.scale.set(l*o,l,1),a.position.set(s,e,t),a.userData.driftSpeed=.15+i%.2,a.userData.driftPhase=i*Math.PI,a.userData.dynamic=!0,a}function oy(){const s=new we,e=H(9072720),t=H(6316112);for(let i=0;i<6;i++){const r=ee(new fe(2.8,.12,1.2),e);r.position.set(0,.18+i*.02,-i*1.1),s.add(r)}[-1.3,1.3].forEach(i=>{const r=ee(new fe(.1,.7,.1),t);r.position.set(i,.55,-2.5),s.add(r);const a=ee(new fe(.08,.08,5.5),t);a.position.set(i,.85,-2.7),s.add(a)});const n=il();return n.position.set(0,0,-5.8),n.scale.setScalar(.85),s.add(n),s}function Za(){const s=new te(new Nt(28,22),sx());return s.rotation.x=-Math.PI/2,s.position.y=-.08,s.userData.isWater=!0,s}function ly(){const s=new we,e=ee(new fe(3.5,.15,2.5),H(9998464));e.position.y=.45,s.add(e);const t=Dl();t.position.set(0,0,.3),t.scale.setScalar(.9),s.add(t);const n=ee(new fe(1.6,.9,.08),H(15788248));return n.position.set(-1.6,.95,0),s.add(n),s}function cy(s=4){return li("shrine_stairs",1.4,()=>{const e=new we,t=H(10000528);for(let n=0;n<s;n++){const i=ee(new fe(1.8-n*.1,.12,.45),t);i.position.set(0,.06+n*.12,-n*.4),e.add(i)}return e})}function hy(){return li("shrine",3.2,()=>{const s=new we,e=ee(new fe(2.2,.25,1.8),H(8947840));e.position.y=.12,s.add(e);const t=Lu(1.8,1.5,1.6,15788248,3815994,"shrine");t.position.set(0,0,-.3),s.add(t);const n=nl();return n.position.set(0,0,1.6),n.scale.setScalar(.75),s.add(n),s})}function uy(){const s=new we,e=new te(new fe(2.5,.05,1.8),H(6967360));e.position.y=.03,s.add(e);for(let t=0;t<6;t++){const n=ee(new Ge(.08,6,4),H([15753344,15777856,15790320,14713024][t%4]));n.position.set((Math.random()-.5)*2,.15,(Math.random()-.5)*1.4),s.add(n)}return s}function Nl(s,e,t=13123648,n=3.6){const i=new we,r=document.createElement("canvas");r.width=256,r.height=80;const a=r.getContext("2d");a.fillStyle="#fffef8",a.fillRect(4,4,248,72),a.fillStyle="#2a4a4a",a.font="bold 22px sans-serif",a.textAlign="center",a.fillText(s,128,32),a.fillStyle="#666",a.font="14px sans-serif",a.fillText(e,128,56);const o=new tn(r),l=new Cn(new bn({map:o,transparent:!0}));l.scale.set(2,.6,1),l.position.y=n+.55,i.add(l);const c=ee(new fe(2,.75,.08),H(t));return c.position.y=n,i.add(c),i}function Du(s,e,t,n,i,r,a,o){var h;const l=new we,c=li(s,e,()=>Lu(t,n,i,r,a,o),{maxHeight:e*1.15});return(h=c.userData)!=null&&h.isLoadedModel&&(c.rotation.y=-Math.PI/2),l.add(c),l}function Fs(s,e,t,n,i,r=2){const a=new we,o=Du(s,e,3,3,e,15261904,6967360,"shop");a.add(o);const l=Nl(t,n,i,e*.72);return l.position.set(0,0,r),a.add(l),a}function dy(){const s=new we,e=[12599360,4227232,4235360,15769648];[-3.5,-1.2,1.2,3.5].forEach((n,i)=>{const r=ee(new fe(1.6,.85,1.1),H(13680800));r.position.set(n,.42,0),s.add(r);const a=li("awning",.45,()=>ee(new fe(1.8,.06,1.3),H(e[i])),{scale:.9,tint:e[i],tintStrength:.35});a.position.set(n,.95,.25),s.add(a);const o=ee(new fe(.45,.25,.35),H([15769664,15753312,8437888,15786080][i]));o.position.set(n,.92,.1),s.add(o)});const t=Nl("朝市","Morning Market",15224912,2.2);return t.position.set(0,0,2.2),s.add(t),s}function fy(){const s=new we,e=ee(new Ve(1.8,1.8,.1,8),H(9998464));e.position.y=.05,s.add(e);const t=ee(new Pt(2.2,1.2,6),H(5933674));t.position.y=2.8,s.add(t);for(let r=0;r<6;r++){const a=r/6*Math.PI*2,o=ee(new Ve(.08,.08,2.6,6),H(15788248));o.position.set(Math.sin(a)*1.5,1.3,Math.cos(a)*1.5),s.add(o)}const n=Nl("小さな公園","Town Park",5933674);n.position.set(0,0,2.5),n.scale.setScalar(.85),s.add(n);const i=en==null?void 0:en.createInstance("fountain",{targetHeight:1.2,scale:.85});return i&&(i.position.set(0,0,-.2),s.add(i)),s}function py(){const s=new we,e=Fs("shop_a",3,"喫茶 木漏れ","Komorebi Cafe",6967360,1.8);return s.add(e),[-.8,.8].forEach(t=>{const n=ee(new Ve(.35,.35,.06,8),H(8413248));n.position.set(t,.45,2.2),s.add(n);const i=Dl();i.position.set(t,0,2.8),i.scale.setScalar(.55),s.add(i)}),s}function my(){const s=new we,e=Fs("shop_b",2.8,"魚屋 水樹","Mizuki Fish",4227232,1.7);s.add(e);for(let t=0;t<3;t++){const n=ee(new fe(.6,.4,.5),H(8413248));n.position.set(-1+t*1,.2,1.2),s.add(n)}return s}class gy{constructor(e,t=null){this.scene=e,this.modelLoader=t,jx(t),this.groundMeshes=[],this.animatedClouds=[],this.lanterns=[],this.vendingMachines=[],this.waterMeshes=[],this.interactableSpawns=[],this.path=this._createPath()}_recordSpawn(e,t,n=0){this.interactableSpawns.push({propId:e,position:t.clone(),rotationY:n})}async build(e){e==null||e("Building sky…"),this._createSky(),this._createBackdrop(),this._createEdgeBackdrop(),await ja(),e==null||e("Laying streets…"),this._createGround(),this._createRoad(),await ja(),e==null||e("Placing buildings…"),this._createBuildings(),this._createLandmarks(),this._createShopsAndPlaces(),await ja(),e==null||e("Adding details…"),this._createProps(),this._createStreetFurniture(),this._createVegetation(),this._createSceneryDecor(),this._createClouds(),this._createLighting(),e==null||e("Ready")}update(e){const t=Math.min(e-(this._lastElapsed??e),.05);this._lastElapsed=e,this.animatedClouds.forEach(n=>{n.position.x+=Math.sin(e*n.userData.driftSpeed+n.userData.driftPhase)*.003}),this.lanterns.forEach((n,i)=>{var a;if(!((a=n==null?void 0:n.material)!=null&&a.color))return;const r=.75+Math.sin(e*2+i)*.25;n.userData.baseColor||(n.userData.baseColor=n.material.color.clone()),n.material.color.copy(n.userData.baseColor).multiplyScalar(r)}),this.vendingMachines.forEach((n,i)=>{var o;const r=.82+Math.sin(e*1.6+i*1.3)*.18;n.userData.vendingLight&&(n.userData.vendingLight.intensity=.55*r);const a=n.userData.vendingGlow;((o=a==null?void 0:a.material)==null?void 0:o.emissiveIntensity)!=null&&(a.material.emissiveIntensity=.35+r*.2)}),this.waterMeshes.forEach((n,i)=>{var a;if(!((a=n==null?void 0:n.material)!=null&&a.color))return;const r=.92+Math.sin(e*.8+i*2.1)*.08;n.material.color.setHex(6992064),n.material.color.multiplyScalar(r),n.material.opacity=.84+Math.sin(e*1.1+i)*.06}),this._petals&&this._petals.forEach(n=>{const i=n.userData.vel;n.position.x+=(i.x+Math.sin(e*.7+n.position.z)*.12)*t,n.position.y+=i.y*t,n.position.z+=(i.z+Math.cos(e*.5+n.position.x)*.08)*t,n.rotation.z+=n.userData.spin*t,n.rotation.x+=n.userData.spin*.5*t,n.position.y<-.5&&(n.position.y=n.userData.resetY,n.position.x=-8+Math.random()*24,n.position.z=-2+Math.random()*-120)})}_createPath(){const e=[new E(0,0,22),new E(-1,0,18),new E(0,0,14),new E(-2,0,10),new E(-3,0,6),new E(-2,0,2),new E(0,0,-2),new E(3,0,-6),new E(5,0,-10),new E(4,0,-14),new E(0,0,-18),new E(-4,0,-22),new E(-7,0,-26),new E(-5,0,-32),new E(-2,0,-36),new E(3,0,-40),new E(7,0,-44),new E(9,0,-48),new E(7,0,-52),new E(3,0,-56),new E(-1,0,-60),new E(-5,0,-64),new E(-3,0,-68),new E(1,0,-72),new E(6,0,-76),new E(11,0,-80),new E(13,0,-84),new E(11,0,-88),new E(7,0,-92),new E(3,0,-96),new E(0,0,-102),new E(-3,0,-108),new E(-6,0,-114),new E(-4,0,-120),new E(0,0,-126),new E(5,0,-130),new E(10,0,-134),new E(14,0,-128),new E(16,0,-118)];return new Cf(e,!1,"catmullrom",.45)}_createSky(){this.scene.fog=new vl(12116184,50,200),this.scene.background=new _e(11066580);const e=new Ge(220,24,16),t=document.createElement("canvas");t.width=1,t.height=64;const n=t.getContext("2d"),i=n.createLinearGradient(0,0,0,64);i.addColorStop(0,"#68a8a8"),i.addColorStop(.35,"#98d0c8"),i.addColorStop(.68,"#c0e8e0"),i.addColorStop(.88,"#e0d8c8"),i.addColorStop(1,"#f0e8d8"),n.fillStyle=i,n.fillRect(0,0,1,64);const r=new tn(t),a=new dt({map:r,side:zt}),o=new te(e,a);o.position.set(0,-10,-55),o.userData.dynamic=!0,this.scene.add(o),this._spawnGlobalPetals()}_spawnGlobalPetals(){const t=new dt({color:16758988,side:gn}),n=[];for(let i=0;i<80;i++){const r=new te(new Nt(.12,.09),t);r.position.set(-8+Math.random()*24,1.5+Math.random()*5,-2+Math.random()*-120),r.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),r.userData.dynamic=!0,r.userData.vel=new E((Math.random()-.5)*.3,-(.25+Math.random()*.35),(Math.random()-.5)*.2),r.userData.spin=(Math.random()-.5)*2.5,r.userData.resetY=4+Math.random()*5,this.scene.add(r),n.push(r)}this._petals=n}_createBackdrop(){}_createEdgeBackdrop(){const e=H(6982266,{roughness:.95});[[-58,-88,10,7],[-48,-115,12,8],[52,-92,11,7],[58,-120,9,6],[-55,-135,13,8],[48,-138,10,7],[-62,-60,8,5],[60,-65,9,6]].forEach(([n,i,r,a])=>{const o=new te(new Ve(r,r*1.1,a,6),e);o.position.set(n,a/2-1.5,i),this.scene.add(o)})}_createGround(){const e=ix(),t=new te(new Nt(420,420),H(We.green,{map:e}));t.rotation.x=-Math.PI/2,t.position.set(2,-.06,-52),t.receiveShadow=!0,this.scene.add(t),this.groundMeshes.push(t);const n=new te(new Nt(420,420),H(We.meadow,{map:e}));n.rotation.x=-Math.PI/2,n.position.set(2,-.055,-52),this.scene.add(n),[[-14,-6,5,4,8039048],[10,-16,6,5,8566928],[-8,-30,7,6,6986360],[16,-44,9,7,8039056],[20,-58,12,9,6986360],[-12,-52,6,5,8566928],[10,-74,14,10,8042632],[-10,-86,9,7,8039048],[-18,-105,11,8,6986360],[14,-112,10,9,8566936],[22,-125,14,10,6985864],[-6,-128,8,7,8039048],[8,8,6,5,8566928],[-10,4,5,4,8039040]].forEach(([c,h,u,d,f])=>{const g=new te(new Nt(u,d),H(f));g.rotation.x=-Math.PI/2,g.position.set(c,.012,h),this.scene.add(g)}),[[-5,.08,-8,1.2,8],[6,.08,-24,1,7],[-4,.08,-48,1.2,9],[5,.08,-72,1,8],[-3,.08,-96,1.2,7]].forEach(([c,h,u,d,f])=>{const g=new te(new Nt(d,f),H(We.gravel));g.rotation.x=-Math.PI/2,g.position.set(c,h,u),this.scene.add(g)});const a=Za();a.position.set(26,-.1,-92),a.scale.set(1.3,1,1.2),this.scene.add(a),this.waterMeshes.push(a);const o=Za();o.position.set(18,-.1,-108),o.scale.set(1.1,1,.9),this.scene.add(o),this.waterMeshes.push(o);const l=Za();l.position.set(30,-.1,-125),l.scale.set(.9,1,.75),this.scene.add(l),this.waterMeshes.push(l)}_createRoad(){const a=Cs(this.path,1.75,.08,H(We.road),0,200);this.scene.add(a),this.groundMeshes.push(a);const o=H(We.sidewalk),l=Cs(this.path,.75,.09,o,-2.65,200),c=Cs(this.path,.75,.09,o,2.65,200);this.scene.add(l,c),this.groundMeshes.push(l,c);const h=H(9998464),u=Cs(this.path,.06,.1,h,-1.87,200),d=Cs(this.path,.06,.1,h,1.75+.12,200);this.scene.add(u,d);const f=this.path.getSpacedPoints(200),g=H(We.roadLine);for(let _=0;_<f.length-1;_+=6){const m=_/(f.length-1),p=f[_],b=this.path.getTangentAt(m).normalize(),w=new E(-b.z,0,b.x),M=p.clone().add(w.clone().multiplyScalar(1.75-.35)),R=p.distanceTo(f[Math.min(_+3,f.length-1)]),C=new te(new fe(.12,.015,R*.55),g);C.position.copy(M),C.position.y=.065,C.lookAt(f[Math.min(_+3,f.length-1)].x,.065,f[Math.min(_+3,f.length-1)].z),this.scene.add(C)}for(let _=7;_<f.length;_+=18){const m=f[_],p=new te(new Ve(.25,.25,.03,10),H(5263440));p.position.set(m.x,.07,m.z),this.scene.add(p)}}_createBuildings(){[{t:.03,side:1,modelKey:"building_d",height:3,w:3,d:4,h:3.5,wall:We.wall,roof:We.roof,style:"house"},{t:.06,side:-1,modelKey:"shop_a",height:2.8,w:3.5,d:3,h:3.4,wall:15261904,roof:6967360,style:"shop"},{t:.11,side:1,modelKey:"building_b",height:3.6,w:3.5,d:3,h:4.2,wall:13160640,roof:5929578,style:"apartment"},{t:.17,side:-1,modelKey:"building_a",height:3.4,w:5,d:4,h:4.5,wall:We.wallDark,roof:We.roof,style:"house"},{t:.24,side:1,modelKey:"shop_b",height:2.7,w:3,d:3.5,h:3.2,wall:14735560,roof:6986362,style:"shop"},{t:.31,side:-1,modelKey:"building_c",height:3.2,w:4,d:3,h:3.8,wall:14209216,roof:We.roofDark,style:"apartment"},{t:.38,side:1,modelKey:"building_d",height:3,w:3.5,d:4,h:3.5,wall:We.wall,roof:We.roof,style:"house"},{t:.44,side:-1,modelKey:"shop_c",height:2.6,w:4.5,d:3.5,h:4.2,wall:12630184,roof:5933674,style:"shop"},{t:.52,side:1,modelKey:"building_a",height:3.4,w:4,d:3.5,h:3.6,wall:15788248,roof:We.roofDark,style:"house"},{t:.58,side:-1,modelKey:"shop_d",height:2.5,w:3.5,d:3,h:3.2,wall:13682872,roof:We.roof,style:"shop"},{t:.64,side:1,modelKey:"building_c",height:3,w:3,d:3,h:3,wall:15261904,roof:We.roofDark,style:"house"},{t:.7,side:-1,modelKey:"building_b",height:3.4,w:4,d:3.5,h:3.6,wall:13682872,roof:We.roof,style:"apartment"},{t:.76,side:1,modelKey:"building_d",height:3,w:3.5,d:3.2,h:3.4,wall:14213328,roof:6982266,style:"house"},{t:.82,side:-1,modelKey:"building_a",height:3.4,w:4.2,d:3.8,h:3.8,wall:13156528,roof:We.roofDark,style:"house"},{t:.88,side:1,modelKey:"building_c",height:3,w:3.2,d:3,h:3.2,wall:14735560,roof:We.roof,style:"apartment"},{t:.94,side:-1,modelKey:"shop_a",height:2.8,w:4,d:3.5,h:3.5,wall:13160664,roof:5275808,style:"shop"}].forEach(({t,side:n,modelKey:i,height:r,w:a,d:o,h:l,wall:c,roof:h,style:u})=>{const d=this.path.getPointAt(t),f=this.path.getTangentAt(t),g=new E(-f.z,0,f.x).multiplyScalar(n),_=Du(i,r,a,o,l,c,h,u);_.position.copy(d).add(g.multiplyScalar(5)),_.lookAt(_.position.x+f.x,_.position.y,_.position.z+f.z),this.scene.add(_);const m=li("fence_low",.55,()=>null,{rotationY:Math.PI});m&&(m.position.copy(d).add(g.clone().normalize().multiplyScalar(3.4)),m.lookAt(m.position.x+f.x,m.position.y,m.position.z+f.z),this.scene.add(m))})}_createLandmarks(){const e=hy();Rt(e,this.path,.64,1,7.5),this.scene.add(e),this._recordSpawn("shrine",e.position,e.rotation.y);const t=cy(5);Rt(t,this.path,.62,1,5.5),this.scene.add(t);const n=nl();Rt(n,this.path,.36,-1,6),this.scene.add(n);const i=uy();Rt(i,this.path,.14,1,7),this.scene.add(i);const r=ly();Rt(r,this.path,.86,-1,6.5),this.scene.add(r);const a=oy();Rt(a,this.path,.97,1,5),a.rotation.y+=Math.PI/6,this.scene.add(a);const o=nl();Rt(o,this.path,.93,-1,7),o.scale.setScalar(.65),this.scene.add(o);const l=fy();Rt(l,this.path,.8,1,8),this.scene.add(l)}_createShopsAndPlaces(){const e=Fs("shop_b",3,"書店 文房","Bunbou Books",8413344,1.8);Rt(e,this.path,.08,-1,5.5),this.scene.add(e),this._recordSpawn("shop_bookshop",e.position,e.rotation.y);const t=Fs("shop_c",2.8,"麺処 山田","Yamada Ramen",12599360,1.7);Rt(t,this.path,.22,1,5.8),this.scene.add(t),this._recordSpawn("shop_ramen",t.position,t.rotation.y);const n=Fs("shop_d",2.6,"花屋 はな","Hana Florist",14712976,1.6);Rt(n,this.path,.5,-1,5.5),this.scene.add(n),this._recordSpawn("shop_florist",n.position,n.rotation.y);const i=py();Rt(i,this.path,.46,1,6.5),this.scene.add(i),this._recordSpawn("shop_cafe",i.position,i.rotation.y);const r=dy();Rt(r,this.path,.54,-1,7),this.scene.add(r),this._recordSpawn("shop_market",r.position,r.rotation.y);const a=my();Rt(a,this.path,.95,-1,6),this.scene.add(a),this._recordSpawn("shop_fishmarket",a.position,a.rotation.y)}_createProps(){[{t:.06,side:-1,type:"vending",offset:2.8,color:We.vending},{t:.1,side:1,type:"mailbox",offset:2.5},{t:.16,side:-1,type:"mirror",offset:2.2},{t:.2,side:1,type:"cone",offset:2},{t:.28,side:-1,type:"vending",offset:2.8,color:4219040},{t:.36,side:1,type:"kiosk",offset:2.6},{t:.44,side:-1,type:"bicycle",offset:2.3},{t:.5,side:1,type:"vending",offset:2.8,color:12599392},{t:.58,side:-1,type:"lantern",offset:2.4},{t:.64,side:1,type:"cone",offset:2},{t:.7,side:-1,type:"utility",offset:2.5},{t:.76,side:1,type:"mailbox",offset:2.5},{t:.82,side:-1,type:"mirror",offset:2.2},{t:.88,side:1,type:"vending",offset:2.8,color:4227232},{t:.94,side:-1,type:"bicycle",offset:2.4}].forEach(({t,side:n,type:i,offset:r,color:a})=>{let o;switch(i){case"vending":o=Yx(a);break;case"mailbox":o=$x();break;case"mirror":o=Zx();break;case"cone":o=Jx();break;case"kiosk":o=Qx();break;case"bicycle":o=ty();break;case"lantern":{o=il();const l=o.userData.lanternMesh;l&&this.lanterns.push(l);break}case"utility":o=ey();break;default:return}if(Rt(o,this.path,t,n,r),i==="vending"){const l=this.path.getPointAt(t);o.lookAt(l.x,o.position.y,l.z),this.vendingMachines.push(o),this._recordSpawn("vending",o.position,o.rotation.y)}this.scene.add(o)})}_createStreetFurniture(){[{t:.12,side:1,type:"bench",offset:2.2,benchVariant:"normal"},{t:.24,side:-1,type:"bollard",offset:2},{t:.26,side:-1,type:"bollard",offset:2.4},{t:.34,side:1,type:"plant",offset:2.1},{t:.36,side:1,type:"plant",offset:2.5},{t:.48,side:-1,type:"bench",offset:2.3,benchVariant:"cushion"},{t:.68,side:-1,type:"lantern",offset:2.3},{t:.74,side:1,type:"bench",offset:2.2,benchVariant:"normal"},{t:.84,side:-1,type:"plant",offset:2.2},{t:.62,side:1,type:"plant",offset:2.4}].forEach(({t,side:n,type:i,offset:r,benchVariant:a})=>{let o;switch(i){case"bench":o=Dl(a??"normal");break;case"bollard":o=ny();break;case"plant":o=iy();break;case"lantern":{o=il();const l=o.userData.lanternMesh;l&&this.lanterns.push(l);break}default:return}Rt(o,this.path,t,n,r),this.scene.add(o),i==="bench"&&this._recordSpawn("bench",o.position,o.rotation.y)})}_createVegetation(){[{t:.08,side:1,dist:9.5,variant:"cherry"},{t:.16,side:-1,dist:10,variant:"normal"},{t:.28,side:1,dist:9.5,variant:"pine"},{t:.38,side:-1,dist:10.5,variant:"cherry"},{t:.48,side:1,dist:9.5,variant:"normal"},{t:.58,side:-1,dist:10,variant:"pine"},{t:.68,side:1,dist:10.5,variant:"cherry"},{t:.78,side:-1,dist:9.5,variant:"normal"},{t:.86,side:1,dist:10,variant:"pine"},{t:.94,side:-1,dist:11,variant:"normal"}].forEach(({t,side:n,dist:i,variant:r})=>{const a=this.path.getPointAt(t),o=this.path.getTangentAt(t),l=new E(-o.z,0,o.x).multiplyScalar(n),c=yh(r);c.position.copy(a).add(l.multiplyScalar(i)),tl(c,0),this.scene.add(c),r==="cherry"?this._recordSpawn("cherry_tree",c.position):r==="pine"&&t>.55&&t<.65&&this._recordSpawn("shrine_tree",c.position)});for(let t=0;t<16;t++){const n=.04+Math.random()*.92,i=this.path.getPointAt(n),r=this.path.getTangentAt(n),a=Math.random()>.5?1:-1,o=new E(-r.z,0,r.x).multiplyScalar(a),l=yh("normal");l.position.copy(i).add(o.multiplyScalar(9+Math.random()*4)),l.scale.setScalar(.75+Math.random()*.35),tl(l,0),this.scene.add(l)}[.22,.48,.72,.88].forEach(t=>{const n=sy();Rt(n,this.path,t,1,8+Math.random()*2),this.scene.add(n)})}_createSceneryDecor(){if(!this.modelLoader)return;[{t:.1,side:1,key:"rock",offset:10.5,height:.45},{t:.14,side:1,key:"bush",offset:10.2,height:.6},{t:.26,side:-1,key:"rock",offset:11,height:.5},{t:.3,side:-1,key:"bush",offset:10.8,height:.58},{t:.42,side:1,key:"bush",offset:10.5,height:.62},{t:.44,side:1,key:"rock",offset:11.2,height:.42},{t:.56,side:-1,key:"bush",offset:10.6,height:.55},{t:.58,side:-1,key:"decoration",offset:10.3,height:.35},{t:.66,side:1,key:"decoration",offset:10.2,height:.32},{t:.72,side:-1,key:"rock",offset:11.5,height:.48},{t:.8,side:1,key:"bush",offset:10.4,height:.6},{t:.84,side:-1,key:"bush",offset:10.7,height:.52},{t:.9,side:1,key:"rock",offset:11.3,height:.4},{t:.92,side:-1,key:"decoration",offset:10.5,height:.3}].forEach(({t:n,side:i,key:r,offset:a,height:o,scale:l=1})=>{const c=this.modelLoader.createInstance(r,{targetHeight:o,scale:l});c&&(Rt(c,this.path,n,i,a),this.scene.add(c))}),[{x:-38,z:-28,key:"shop_d",h:2.2,ry:.4},{x:40,z:-42,key:"building_d",h:2.4,ry:-.5},{x:-44,z:-68,key:"shop_c",h:2,ry:.2},{x:42,z:-95,key:"building_c",h:2.3,ry:-.3},{x:-36,z:-118,key:"shop_b",h:2.1,ry:.6}].forEach(({x:n,z:i,key:r,h:a,ry:o})=>{const l=this.modelLoader.createInstance(r,{targetHeight:a});l&&(l.position.set(n,0,i),l.rotation.y=o,this.scene.add(l))})}_createClouds(){[[-18,20,-2,2.2],[12,22,-8,2.6],[-10,24,-22,2],[24,21,-18,2.4],[-24,23,2,1.8],[6,25,-28,2.2],[-14,20,-38,2.5],[18,22,-42,2],[0,26,-14,3],[26,21,-55,2.3],[-22,24,-65,2.1],[10,25,-72,2.6],[32,22,-50,2],[-8,23,-95,2.2],[20,24,-105,2.4],[-28,21,-115,2],[14,25,-128,2.3],[-32,19,-48,1.9],[8,28,-88,2.1],[30,20,-108,2.5],[-16,27,-78,2],[22,23,-32,2.2]].forEach(([t,n,i,r])=>{const a=ay(t,n,i,r);this.scene.add(a),this.animatedClouds.push(a)})}_createLighting(){const e=new Wf(12642528,6985864,1.25);this.scene.add(e);const t=new $o(16774376,.65);t.position.set(18,28,12),t.castShadow=!0,t.shadow.mapSize.set(1024,1024),t.shadow.camera.near=.5,t.shadow.camera.far=220,t.shadow.camera.left=-85,t.shadow.camera.right=85,t.shadow.camera.top=85,t.shadow.camera.bottom=-150,t.shadow.bias=-4e-4,t.shadow.normalBias=.02,this.scene.add(t),this.sun=t;const n=new $o(13164784,.55);n.position.set(-14,12,-8),this.scene.add(n);const i=new qf(15266028,.55);this.scene.add(i),[[-3,2.5,-10],[-5,2.5,-22],[4,2.5,-34],[-2,2.5,-46],[6,2.5,-62],[3,2.5,-88]].forEach(([h,u,d])=>{const f=new ni(16763e3,.28,12);f.position.set(h,u,d),this.scene.add(f)});const r=new ni(9490656,.3,22);r.position.set(22,3,-95),this.scene.add(r);const a=new ni(8437976,.25,18);a.position.set(28,3,-118),this.scene.add(a);const o=new ni(16763e3,.25,14);o.position.set(6,3,-48),this.scene.add(o);const l=new ni(12624096,.22,14);l.position.set(-8,3,-68),this.scene.add(l);const c=new ni(11063528,.22,16);c.position.set(12,3,-128),this.scene.add(c)}getInteractableSpawns(){return this.interactableSpawns}getPath(){return this.path}getGroundMeshes(){return this.groundMeshes}}function vh(s){const e=s.profile;s.routine=e.routine??"idle",s.patrolTs=e.patrolTs??null,s.patrolIndex=0,s.patrolSpeed=e.routine==="jog"?4.8:2.4,s.workPhase=Math.random()*Math.PI*2,s.routine==="sit"&&s.mesh.position.copy(s.homePos)}function _y(s,e){if(!(s.isTalking||s.isCompanion||s.state==="following"||s.state==="approaching")&&!(s.playerNearby&&!s.profile.isAmbient))switch(s.routine){case"patrol":case"jog":xy(s,e);break;case"work":yy(s,e);break;case"sit":vy(s,e);break;default:My(s,e)}}function xy(s,e){var r;if(s.mesh.userData.isSitting=!1,!((r=s.patrolTs)!=null&&r.length))return;const t=s.patrolTs[s.patrolIndex],n=s.path.getPointAt(t);n.y=s.mesh.position.y,s._moveToward(n,e,s.patrolSpeed,.9)&&(s.patrolIndex=(s.patrolIndex+1)%s.patrolTs.length)}function yy(s,e){s.mesh.userData.isSitting=!1,s.workPhase+=e,s.mesh.position.y=s.homePos.y+Math.sin(s.workPhase*2.2)*.01;const t=Math.sin(s.workPhase*1.4)>.6;bi(s.mesh,t?.35:0,e),s.mesh.rotation.y=s.homeFacing+Math.sin(s.workPhase*.7)*.25}function vy(s,e){s.idlePhase+=e*1.1,s.mesh.position.copy(s.homePos),s.mesh.position.y+=Math.sin(s.idlePhase)*.012,s.mesh.rotation.y=s.homeFacing,s.mesh.userData.isSitting=!0,bi(s.mesh,0,e)}function My(s,e){s.mesh.userData.isSitting=!1,s.idlePhase+=e*1.5,s.mesh.position.y=s.homePos.y+Math.sin(s.idlePhase)*.015}function Nu(s,e,t,n,i,r){const a=e.x-s.position.x,o=e.z-s.position.z,l=Math.hypot(a,o);if(l>i){const c=Math.min(n*t,l-i);return s.position.x+=a/l*c,s.position.z+=o/l*c,s.rotation.y=Math.atan2(a,o),r==null||r(n,t),!1}return r==null||r(0,t),!0}function Sy(s,e,t,n,i,r,a,o){const l=new E(-Math.sin(t)*r,0,-Math.cos(t)*r),c=e.clone().add(l);return c.y=s.position.y,Nu(s,c,n,i,a,o)}const wt=.961,by=1.278,ie=s=>s*by;function wy(){const s=new we,e=H(1118481),t=H(13381680),n=new te(new Ve(ie(.24),ie(.25),ie(.025),16),e);n.position.y=wt+ie(.012),s.add(n);const i=new te(new Ve(ie(.132),ie(.132),ie(.03),16),t);i.position.y=wt+ie(.025)+ie(.015),s.add(i);const r=new te(new Ve(ie(.13),ie(.135),ie(.22),16),e);return r.position.y=wt+ie(.025)+ie(.11),s.add(r),s}function Ty(){const s=new we,e=H(2755162),t=H(1705536),n=H(8930440),i=new te(new Ve(ie(.3),ie(.32),ie(.03),16),t);i.position.y=wt+ie(.015),s.add(i);const r=new te(new Pt(ie(.13),ie(.45),8),e);r.position.y=wt+ie(.03)+ie(.225),s.add(r);const a=new te(new Ve(ie(.132),ie(.132),ie(.025),16),n);return a.position.y=wt+ie(.03)+ie(.012),s.add(a),s}function Ey(){const s=new we,e=H(15777824),t=H(13373536),n=new te(new Ve(ie(.18),ie(.17),ie(.07),16),e);return n.position.y=wt+ie(.035),s.add(n),[0,72,144,216,288].forEach((i,r)=>{const a=i*Math.PI/180,o=r%2===0,l=ie(o?.14:.08),c=ie(.18),h=new te(new Pt(ie(.027),l,5),e);if(h.position.set(Math.sin(a)*c,wt+ie(.07)+l*.5,Math.cos(a)*c),s.add(h),o){const u=new te(new Ge(ie(.025),6,5),t);u.position.set(Math.sin(a)*c,wt+ie(.07)+ie(.01),Math.cos(a)*c),s.add(u)}}),s}function Ay(){const s=new we,e=H(5283888),t=[16732304,15781920,5292287,16744496,14704895,8972352,16732304,15781920],n=ie(.18),i=new te(new oi(n,ie(.018),8,20),e);i.rotation.x=Math.PI/2,i.position.y=wt+ie(.02),s.add(i);for(let r=0;r<8;r++){const a=r/8*Math.PI*2,o=new te(new Ge(ie(.042),7,6),H(t[r]));o.position.set(Math.sin(a)*n,wt+ie(.05),Math.cos(a)*n),s.add(o)}return s}function Cy(){const s=new we,e=H(16771136),t=new te(new oi(ie(.2),ie(.024),8,24),e);return t.rotation.x=Math.PI/2,t.position.y=wt+ie(.28),s.add(t),s}function Ry(){const s=new we,e=H(1710634),t=H(16751052);return[-ie(.12),ie(.12)].forEach(n=>{const i=new te(new Pt(ie(.065),ie(.15),3),e);i.position.set(n,wt+ie(.06),0),s.add(i);const r=new te(new Pt(ie(.038),ie(.1),3),t);r.position.set(n,wt+ie(.06),0),s.add(r)}),s}function Iy(){const s=new we,e=H(8921634),t=new te(new Ve(ie(.2),ie(.2),ie(.055),16),e);t.position.y=wt+ie(.028),t.rotation.z=.3,s.add(t);const n=new te(new Ge(ie(.023),6,5),e);return n.position.set(ie(-.07),wt+ie(.075),ie(.07)),s.add(n),s}function Py(){const s=new we,e=H(1118481),t=H(13377568),n=H(14540236),i=new te(new Ve(ie(.22),ie(.23),ie(.025),16),e);i.position.y=wt+ie(.012),s.add(i);const r=new te(new Ve(ie(.11),ie(.14),ie(.14),16),e);r.position.y=wt+ie(.025)+ie(.07),s.add(r);const a=new te(new Ge(ie(.028),6,5),n);a.position.set(ie(.11),wt+ie(.025)+ie(.08),0),s.add(a);const o=new te(new Ve(ie(.013),ie(.005),ie(.11),5),t);return o.rotation.z=.4,o.position.set(ie(-.065),wt+ie(.025)+ie(.145),ie(.065)),s.add(o),s}function Ly(s){switch(s){case"tophat":return wy();case"witchhat":return Ty();case"crown":return Ey();case"flowerCrown":return Ay();case"halo":return Cy();case"catears":return Ry();case"beret":return Iy();case"piratecap":return Py();default:return null}}const Dy=["_hat","_helmet"];function Ja(s,e){s.traverse(t=>{if(!t.isMesh&&!t.isSkinnedMesh)return;const n=t.name.toLowerCase();Dy.some(i=>n.endsWith(i))&&(t.visible=e)})}function Ny(s){const e=[];s.traverse(t=>{t.userData.isProceduralAccessory&&e.push(t)}),e.forEach(t=>{var n;return(n=t.parent)==null?void 0:n.remove(t)})}function Uu(s,e){if(!s)return;if(Ny(s),!e||e==="none"){Ja(s,!1),s.userData.accessoryId="none";return}if(e==="class_hat"){Ja(s,!0),s.userData.accessoryId="class_hat";return}Ja(s,!1);const t=Ly(e);if(!t)return;let n=null;s.traverse(i=>{!n&&i.isBone&&i.name==="head"&&(n=i)}),n&&(t.userData.isProceduralAccessory=!0,t.traverse(i=>{i.userData.dynamic=!0}),n.add(t),s.userData.accessoryId=e)}let Jt=null;function Uy(s){Jt=s}class Fy{constructor(e){this.keys={},this.move={x:0,z:0},this.cameraAngle=0,this.cameraPitch=.38,this.cameraDistance=4.5,this.isDragging=!1,this.lastPointer={x:0,y:0},this.justPressed=new Set,this.interactRequested=!1,this.dialogueOpen=!1,this.outfitOpen=!1,this.tap=null,this.pointerStart=null,this.touchStart=null,window.addEventListener("keydown",t=>{this.keys[t.code]||this.justPressed.add(t.code),this.keys[t.code]=!0,["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(t.code)&&t.preventDefault()}),window.addEventListener("keyup",t=>{this.keys[t.code]=!1}),e.addEventListener("pointerdown",t=>{this.isDragging=!0,this.lastPointer={x:t.clientX,y:t.clientY},this.pointerStart={x:t.clientX,y:t.clientY,id:t.pointerId}}),window.addEventListener("pointerup",t=>{var n;if(((n=this.pointerStart)==null?void 0:n.id)===t.pointerId){const i=t.clientX-this.pointerStart.x,r=t.clientY-this.pointerStart.y;Math.hypot(i,r)<12&&(this.tap={x:t.clientX,y:t.clientY}),this.pointerStart=null}this.isDragging=!1}),window.addEventListener("pointermove",t=>{if(!this.isDragging)return;const n=t.clientX-this.lastPointer.x,i=t.clientY-this.lastPointer.y;this.cameraAngle-=n*.005,this.cameraPitch=Yt.clamp(this.cameraPitch+i*.003,.3,.55),this.lastPointer={x:t.clientX,y:t.clientY}}),e.addEventListener("wheel",t=>{this.cameraDistance=Yt.clamp(this.cameraDistance+t.deltaY*.01,3.5,10)},{passive:!0}),this._setupTouch(e)}_setupTouch(e){const t={active:!1,origin:{x:0,y:0},current:{x:0,y:0}};e.addEventListener("touchstart",n=>{if(n.touches.length===1){const i=n.touches[0];this.touchStart={x:i.clientX,y:i.clientY},i.clientX<window.innerWidth*.4?(t.active=!0,t.origin={x:i.clientX,y:i.clientY},t.current={x:i.clientX,y:i.clientY}):(this.isDragging=!0,this.lastPointer={x:i.clientX,y:i.clientY})}},{passive:!0}),e.addEventListener("touchmove",n=>{if(t.active&&n.touches.length>=1){const i=n.touches[0];i.clientX<window.innerWidth*.5&&(t.current={x:i.clientX,y:i.clientY})}if(this.isDragging&&n.touches.length>=1){const i=n.touches[n.touches.length-1],r=i.clientX-this.lastPointer.x,a=i.clientY-this.lastPointer.y;this.cameraAngle-=r*.005,this.cameraPitch=Yt.clamp(this.cameraPitch+a*.003,.3,.55),this.lastPointer={x:i.clientX,y:i.clientY}}},{passive:!0}),e.addEventListener("touchend",n=>{const i=n.changedTouches[0];if(i&&this.touchStart){const r=i.clientX-this.touchStart.x,a=i.clientY-this.touchStart.y;Math.hypot(r,a)<14&&(this.tap={x:i.clientX,y:i.clientY})}this.touchStart=null,t.active=!1,this.isDragging=!1}),this.joystick=t}update(){var i;let e=0,t=0;if((this.keys.KeyW||this.keys.ArrowUp)&&(t-=1),(this.keys.KeyS||this.keys.ArrowDown)&&(t+=1),(this.keys.KeyA||this.keys.ArrowLeft)&&(e-=1),(this.keys.KeyD||this.keys.ArrowRight)&&(e+=1),(i=this.joystick)!=null&&i.active){const r=this.joystick.current.x-this.joystick.origin.x,a=this.joystick.current.y-this.joystick.origin.y,o=Math.hypot(r,a);o>8&&(e=r/o,t=a/o)}const n=Math.hypot(e,t);n>0&&(e/=n,t/=n),this.move={x:e,z:t},this.isRunning=this.keys.ShiftLeft||this.keys.ShiftRight}requestInteract(){this.interactRequested=!0}consumeInteractRequest(){return this.interactRequested?(this.interactRequested=!1,!0):!1}consumeKey(e){return this.justPressed.has(e)?(this.justPressed.delete(e),!0):!1}consumeTap(){const e=this.tap;return this.tap=null,e}endFrame(){this.justPressed.clear()}}function sl(s={}){const e=s.modelKey??"character_female_a",t=Jt==null?void 0:Jt.createCharacterInstance(e,{tint:s.tint??null,tintStrength:s.tintStrength??.22});if(t){if(s.nameTag){const m=Mh(s.nameTag,s.nameTagJa);m.position.y=2.45,t.add(m)}return t}const n=new we,i=s.shirtColor??We.shirt,r=s.backpackColor??We.backpack,a=s.hairColor??We.hair,o=ee(new Ve(.2,.24,.72,8),H(i));o.position.y=1.05,n.add(o);const l=ee(new Ve(.26,.3,.28,8),H(We.pants));l.position.y=.58,n.add(l);const c=ee(new Ge(.17,10,8),H(We.skin));c.position.y=1.58,n.add(c);const h=ee(new Ge(.19,10,8,0,Math.PI*2,0,Math.PI*.55),H(a));h.position.y=1.64,h.scale.set(1,.82,1),n.add(h);const u=ee(new fe(.3,.38,.14),H(r));u.position.set(0,1.12,-.2),n.add(u);const d=new Ve(.065,.075,.52,6),f=[];[-.11,.11].forEach(m=>{const p=new we;p.position.set(m,.28,0);const b=ee(d,H(We.pants));p.add(b);const w=ee(new fe(.11,.06,.2),H(15790320));w.position.set(0,-.22,.04),p.add(w),n.add(p),f.push(p)});const g=new Ve(.044,.048,.42,6),_=[];return[-.26,.26].forEach(m=>{const p=new we;p.position.set(m,1.18,0),p.rotation.z=m>0?-.15:.15;const b=ee(g,H(i));p.add(b);const w=ee(new Ge(.048,6,4),H(We.skin));w.position.y=-.24,p.add(w),n.add(p),_.push(p)}),n.userData.face=ky(n),n.userData.legs=f,n.userData.arms=_,n.userData.walkPhase=0,n.userData.sitBlend=0,s.nameTag&&n.add(Mh(s.nameTag,s.nameTagJa)),n}function ky(s){const e=new dt({color:16777215}),t=new dt({color:1718906}),n=new dt({color:1118498}),i=new dt({color:16777215}),r=H(13668496),a=new dt({color:13670520}),o=new te(new Dt(.032,10),e),l=new te(new Dt(.032,10),e);o.position.set(-.065,1.58,.195),l.position.set(.065,1.58,.195),s.add(o,l);const c=new te(new Dt(.022,10),t),h=new te(new Dt(.022,10),t);c.position.set(-.065,1.58,.196),h.position.set(.065,1.58,.196),s.add(c,h);const u=new te(new Dt(.014,8),n),d=new te(new Dt(.014,8),n);u.position.set(-.065,1.58,.197),d.position.set(.065,1.58,.197),s.add(u,d);const f=new te(new Dt(.006,6),i),g=new te(new Dt(.006,6),i);f.position.set(-.056,1.59,.198),g.position.set(.074,1.59,.198),s.add(f,g);const _=new te(new Ge(.013,6,5),a);_.scale.set(1.2,.75,.6),_.position.set(0,1.51,.205),s.add(_);const m=new te(new fe(.055,.013,.015),r);m.position.set(0,1.475,.2),s.add(m);const p=new dt({color:15769768,transparent:!0,opacity:.65}),b=new te(new Dt(.04,10),p);b.position.set(-.115,1.515,.175),b.rotation.y=.28,b.visible=!1,s.add(b);const w=new te(new Dt(.04,10),p);return w.position.set(.115,1.515,.175),w.rotation.y=-.28,w.visible=!1,s.add(w),{leftEye:u,rightEye:d,mouth:m,blushL:b,blushR:w,baseMouthY:1.475,baseEyeY:1.58,_leftSclera:o,_rightSclera:l,_leftIris:c,_rightIris:h}}function On(s,e){var _;if((_=s.userData)!=null&&_.isRiggedCharacter){e==="happy"?Jt==null||Jt.playCharacterEmote(s,"emote-yes"):(e==="shy"||e==="thinking")&&(Jt==null||Jt.playCharacterEmote(s,"emote-no"));return}const t=s.userData.face;if(!t)return;const{leftEye:n,rightEye:i,mouth:r,blushL:a,blushR:o,baseMouthY:l,baseEyeY:c,_leftSclera:h,_rightSclera:u,_leftIris:d,_rightIris:f}=t;for(const m of[n,i,h,u,d,f])m&&m.scale.set(1,1,1);n.position.set(-.065,c,.197),i.position.set(.065,c,.197),h&&h.position.set(-.065,c,.195),u&&u.position.set(.065,c,.195),d&&d.position.set(-.065,c,.196),f&&f.position.set(.065,c,.196),r.scale.set(1,1,1),r.position.set(0,l,.2),a.visible=!1,o.visible=!1;const g=(m,p)=>{for(const b of[n,i,h,u,d,f])b&&b.scale.set(m,p,1)};switch(e){case"happy":g(1,.38),r.scale.set(1.5,2.4,1);break;case"surprised":g(1.3,1.3),r.scale.set(.75,2.8,1),r.position.y=l-.012;break;case"thinking":n.position.set(-.04,c+.02,.197),i.position.set(.08,c+.02,.197),d&&d.position.set(-.04,c+.02,.196),f&&f.position.set(.08,c+.02,.196),r.scale.set(.75,.75,1);break;case"shy":g(1,.65),r.scale.set(.55,1,1),a.visible=!0,o.visible=!0;break}}function Mh(s,e){const t=document.createElement("canvas");t.width=256,t.height=64;const n=t.getContext("2d"),i=14;n.fillStyle="rgba(18,26,34,0.82)",n.strokeStyle="rgba(120,200,200,0.7)",n.lineWidth=2.5,n.beginPath(),n.moveTo(i+6,6),n.lineTo(250-i,6),n.quadraticCurveTo(250,6,250,6+i),n.lineTo(250,58-i),n.quadraticCurveTo(250,58,250-i,58),n.lineTo(i+6,58),n.quadraticCurveTo(6,58,6,58-i),n.lineTo(6,6+i),n.quadraticCurveTo(6,6,i+6,6),n.closePath(),n.fill(),n.stroke(),n.fillStyle="#e8f4f4",n.font="bold 18px sans-serif",n.textAlign="center",n.fillText(e||s,128,28),n.fillStyle="#90b8b8",n.font="13px sans-serif",n.fillText(s||"",128,48);const r=new tn(t),a=new bn({map:r,transparent:!0}),o=new Cn(a);o.position.y=2.45,o.scale.set(1.2,.32,1);const l=new bn({transparent:!0,opacity:0,depthWrite:!1}),c=new Cn(l);c.position.y=2.45,c.scale.set(1.8,.65,1),c.userData.isNameTagHit=!0;const h=new we;return h.add(o),h.add(c),h.userData.isNameTag=!0,h}function bi(s,e,t){var a,o,l,c;const n=s.userData;if(n.isRiggedCharacter){Jt==null||Jt.updateCharacterAnimation(s,e,t);return}const i=n.isSitting?1:0;if(n.sitBlend=Yt.lerp(n.sitBlend??0,i,.1),By(s,n.sitBlend),n.isSitting)return;if(e<.1){(a=n.legs)==null||a.forEach(h=>{h.rotation.x=Yt.lerp(h.rotation.x,0,.12)}),(o=n.arms)==null||o.forEach(h=>{h.rotation.x=Yt.lerp(h.rotation.x,0,.12)});return}n.walkPhase+=t*e*7.5;const r=Math.min(e/3,1.5);(l=n.legs)==null||l.forEach((h,u)=>{h.rotation.x=Math.sin(n.walkPhase+u*Math.PI)*.42*r}),(c=n.arms)==null||c.forEach((h,u)=>{h.rotation.x=Math.sin(n.walkPhase+u*Math.PI+Math.PI)*.28*r})}function By(s,e){var i,r;if(e<.001)return;const n=s.children.find(a=>{var o;return((o=a.geometry)==null?void 0:o.type)==="CylinderGeometry"&&a.position.y>.7});n&&(n.position.y=Yt.lerp(.85,.62,e)),(i=s.userData.legs)==null||i.forEach((a,o)=>{const l=o===0?-.9:.9;a.rotation.x=Yt.lerp(0,l,e),a.position.z=Yt.lerp(0,.18,e)}),(r=s.userData.arms)==null||r.forEach(a=>{a.rotation.x=Yt.lerp(0,.6,e)})}const Sh=10.5,Dr={minX:-55,maxX:65,minZ:-145,maxZ:28};class Oy{constructor(e,t){this.scene=e,this.path=t,this.outfit={modelKey:"character_female_a",tint:null,scale:1},this.mesh=sl({modelKey:this.outfit.modelKey}),this.mesh.position.copy(t.getPointAt(.05)),e.add(this.mesh),this.velocity=new E,this.facing=0,this.walkSpeed=3.2,this.runSpeed=6.5,this.baseRunSpeed=6.5,this.speedBoostTimer=0,this.pathT=.05,this.raycaster=new Il,this.restTimer=0,this.restPos=null,this.restSitY=.01,this.verticalVelocity=0,this.isGrounded=!0}applySpeedBoost(e,t){this.runSpeed=this.baseRunSpeed+e,this.speedBoostTimer=t}setOutfit({modelKey:e,tint:t,tintStrength:n,scale:i=1}){const r=this.mesh.position.clone(),a=this.mesh.rotation.y,o=this.mesh.userData.isSitting,l=this.mesh.userData.isJumping,c=this.mesh.userData.accessoryId??"none";this.scene.remove(this.mesh),this.mesh=sl({modelKey:e??this.outfit.modelKey,tint:t!==void 0?t:this.outfit.tint,tintStrength:n??this.outfit.tintStrength??.22}),i!==1&&this.mesh.scale.setScalar(i),this.mesh.position.copy(r),this.mesh.rotation.y=a,this.mesh.userData.isSitting=o,this.mesh.userData.isJumping=l,this.mesh.traverse(h=>{h.userData.dynamic=!0}),this.scene.add(this.mesh),c&&c!=="none"&&Uu(this.mesh,c),this.outfit={modelKey:e??this.outfit.modelKey,tint:t!==void 0?t:this.outfit.tint,tintStrength:n??this.outfit.tintStrength??.22,scale:i}}update(e,t,n){var a,o;if(this.speedBoostTimer>0&&(this.speedBoostTimer-=t,this.speedBoostTimer<=0&&(this.runSpeed=this.baseRunSpeed)),e.dialogueOpen||this.restTimer>0||e.outfitOpen)this.velocity.set(0,0,0),this.restTimer>0&&(this.restTimer-=t,this.mesh.userData.isSitting=!0,this.restPos&&(this.mesh.position.lerp(this.restPos,.08),this.mesh.position.y=this.restSitY),this.restTimer<=0&&(this.mesh.userData.isSitting=!1));else{e.consumeKey("Space")&&this.isGrounded&&(this.verticalVelocity=5.8,this.isGrounded=!1,this.mesh.userData.isJumping=!0);const l=e.isRunning?this.runSpeed:this.walkSpeed,c=new E(Math.sin(e.cameraAngle),0,Math.cos(e.cameraAngle)),h=new E(Math.cos(e.cameraAngle),0,-Math.sin(e.cameraAngle)),u=new E().addScaledVector(h,e.move.x).addScaledVector(c,e.move.z);u.lengthSq()>.001?(u.normalize(),this.velocity.copy(u.multiplyScalar(l)),this.facing=Math.atan2(u.x,u.z)):this.velocity.multiplyScalar(.85)}this.mesh.position.x+=this.velocity.x*t,this.mesh.position.z+=this.velocity.z*t,this._clampToWalkableArea();const i=this._sampleGround(this.mesh.position,n);!this.isGrounded||this.verticalVelocity>0?(this.verticalVelocity-=16*t,this.mesh.position.y+=this.verticalVelocity*t,this.mesh.position.y<=i&&(this.mesh.position.y=i,this.verticalVelocity=0,this.isGrounded=!0,this.mesh.userData.isJumping=!1)):this.mesh.position.y=i,this.mesh.rotation.y=Yt.lerp(this.mesh.rotation.y,this.facing,.15);const r=this.velocity.length();bi(this.mesh,r,t),this.pathT=((o=(a=this.path).getClosestPointT)==null?void 0:o.call(a,this.mesh.position))??0}rest(e,t,n={}){this.restTimer=e,this.restPos=t==null?void 0:t.clone(),this.restSitY=n.sitY??.01,n.facing!=null&&(this.mesh.rotation.y=n.facing),this.velocity.set(0,0,0)}_clampToWalkableArea(){var t;const e=this.mesh.position;if((t=this.path)!=null&&t.getClosestPointT){this.pathT=this.path.getClosestPointT(e);const n=this.path.getPointAt(this.pathT),i=e.x-n.x,r=e.z-n.z,a=Math.hypot(i,r);if(a>Sh){const o=Sh/a;e.x=n.x+i*o,e.z=n.z+r*o}}e.x=Yt.clamp(e.x,Dr.minX,Dr.maxX),e.z=Yt.clamp(e.z,Dr.minZ,Dr.maxZ)}_sampleGround(e,t){this.raycaster.set(new E(e.x,20,e.z),new E(0,-1,0));const n=this.raycaster.intersectObjects(t,!1);return n.length>0?n[0].point.y:0}get position(){return this.mesh.position}}function zy(s,e="speech"){const t=(s??"").toUpperCase(),n=e==="ellipsis",i=n?22:13,r=220,a=n?28:18,o=14,l=10,c=document.createElement("canvas").getContext("2d");c.font=`bold ${i}px "Noto Sans JP", sans-serif`;const h=[];if(n)h.push("...");else{const m=t.split(/\s+/);let p="";for(const b of m){const w=p?`${p} ${b}`:b;c.measureText(w).width>r&&p?(h.push(p),p=b):p=w}p&&h.push(p),h.length===0&&h.push("")}const u=Math.max(80,...h.map(m=>c.measureText(m).width+o*2)),d=h.length*a+l*2+8,f=document.createElement("canvas");f.width=Math.ceil(u),f.height=Math.ceil(d);const g=f.getContext("2d"),_=10;if(g.fillStyle="#ffffff",g.strokeStyle="#1a1a1a",g.lineWidth=3,g.beginPath(),g.moveTo(_,0),g.lineTo(u-_,0),g.quadraticCurveTo(u,0,u,_),g.lineTo(u,d-_-8),g.quadraticCurveTo(u,d-8,u-_,d-8),g.lineTo(u*.55,d-8),g.lineTo(u*.5,d),g.lineTo(u*.45,d-8),g.lineTo(_,d-8),g.quadraticCurveTo(0,d-8,0,d-_-8),g.lineTo(0,_),g.quadraticCurveTo(0,0,_,0),g.closePath(),g.fill(),g.stroke(),n){g.fillStyle="#50a850";for(let m=0;m<3;m++)g.beginPath(),g.arc(u/2-14+m*14,d/2-2,4,0,Math.PI*2),g.fill()}else g.fillStyle="#1a1a1a",g.font=`bold ${i}px "Noto Sans JP", sans-serif`,g.textAlign="center",h.forEach((m,p)=>{g.fillText(m,u/2,l+a*(p+.75))});return{canvas:f,w:u,h:d}}function Hy(){const s=new Cn(new bn({transparent:!0,depthTest:!0}));return s.position.y=2.75,s.visible=!1,s.userData.mode="speech",s.userData.setText=(e,t="speech")=>{if(s.userData.mode=t,!e&&t!=="ellipsis"){s.visible=!1;return}const{canvas:n,w:i,h:r}=zy(e,t);s.material.map&&s.material.map.dispose(),s.material.map=new tn(n),s.material.map.colorSpace=xt,s.material.needsUpdate=!0;const a=i/r,o=t==="ellipsis"?.38:Math.min(.95,.22+Gy(e)*.12);s.scale.set(o*a,o,1),s.visible=!0},s.userData.hide=()=>{s.visible=!1},s}function Gy(s){return Math.max(1,Math.ceil(((s==null?void 0:s.length)??0)/28))}function Vy(){const s=document.createElement("canvas");s.width=32,s.height=24;const e=s.getContext("2d");e.fillStyle="#ffffff",e.strokeStyle="#1a1a1a",e.lineWidth=2.5,e.beginPath(),e.moveTo(16,20),e.lineTo(4,6),e.lineTo(28,6),e.closePath(),e.fill(),e.stroke();const t=new tn(s),n=new Cn(new bn({map:t,transparent:!0}));return n.position.y=2.25,n.scale.set(.28,.22,1),n.visible=!1,n}function Wy(){const s=document.createElement("canvas");s.width=64,s.height=64;const e=s.getContext("2d");e.fillStyle="#f0c040",e.beginPath(),e.arc(32,36,22,0,Math.PI*2),e.fill(),e.strokeStyle="#1a1a1a",e.lineWidth=3,e.stroke(),e.fillStyle="#1a1a1a",e.font="bold 28px sans-serif",e.textAlign="center",e.fillText("!",32,44);const t=new tn(s),n=new Cn(new bn({map:t,transparent:!0}));return n.position.y=2.25,n.scale.set(.45,.45,1),n.visible=!1,n}function Xy(){const s=document.createElement("canvas");s.width=64,s.height=64;const e=s.getContext("2d");e.fillStyle="rgba(18,40,40,0.85)",e.beginPath(),e.arc(32,36,22,0,Math.PI*2),e.fill(),e.strokeStyle="#5ababa",e.lineWidth=3,e.stroke(),e.font="28px sans-serif",e.textAlign="center",e.fillText("👋",32,44);const t=new tn(s),n=new Cn(new bn({map:t,transparent:!0}));return n.position.y=2.25,n.scale.set(.5,.5,1),n.visible=!1,n}class jy{constructor(e,t,n){this.type="npc",this.path=t,this.profile=n,this.t=n.startT,this.isTalking=!1,this.playerNearby=!1,this.talkCount=0,this.friendship=0,this.ignoreUntil=0,this.idlePhase=Math.random()*Math.PI*2,this.state="idle",this.isCompanion=!1,this.homePos=new E,this.walkSpeed=2.8,this.followSpeed=3.4,this.mesh=sl({modelKey:n.characterModel??"character_male_a",shirtColor:n.shirtColor,backpackColor:n.backpackColor,hairColor:n.hairColor,nameTag:n.name,nameTagJa:n.nameJa}),this.alertBubble=Wy(),this.waveBubble=Xy(),this.speechBubble=Hy(),this.interactPrompt=Vy(),this.mesh.add(this.alertBubble),this.mesh.add(this.waveBubble),this.mesh.add(this.speechBubble),this.mesh.add(this.interactPrompt),e.add(this.mesh),On(this.mesh,n.defaultExpression),this._placeOnPath(),this.homePos.copy(this.mesh.position),this.homeFacing=this.mesh.rotation.y,vh(this),this.nameTag=this.mesh.children.find(i=>{var r;return(r=i.userData)==null?void 0:r.isNameTag})??null,this.nameTag&&(this.nameTag.userData.interactable=this,this.nameTag.userData.interactNpc=this,this.nameTag.children.forEach(i=>{i.userData.interactable=this,i.userData.interactNpc=this})),this.mesh.userData.interactable=this}getHitTargets(){const e=[];return this.nameTag&&e.push(this.nameTag),e}canInteract(e){return this.distanceTo(e)<9}interact(e){var t;this.clearIgnore(),this.stopApproaching(),(t=e.dialogue)==null||t.showApproach(this,{initiated:!1})}_placeOnPath(){const e=this.path.getPointAt(this.t),t=this.path.getTangentAt(this.t);this.mesh.position.copy(e),this.mesh.position.y+=.02,this.mesh.rotation.y=Math.atan2(t.x,t.z)}distanceTo(e){const t=this.mesh.position.x-e.x,n=this.mesh.position.z-e.z;return Math.hypot(t,n)}isIgnored(){return Date.now()<this.ignoreUntil}ignoreFor(e){this.ignoreUntil=Date.now()+e*1e3,this.alertBubble.visible=!1,this.stopApproaching()}clearIgnore(){this.ignoreUntil=0}hasMetBefore(){return this.talkCount>0}markMet(){this.talkCount+=1}addFriendship(){this.friendship+=1}setExpression(e){On(this.mesh,e)}showSpeechText(e){this.speechBubble.userData.setText(e,"speech"),this.interactPrompt.visible=!1}showEllipsisBubble(){this.speechBubble.userData.setText("","ellipsis")}hideSpeechBubble(){this.speechBubble.userData.hide()}showInteractPrompt(){!this.isTalking&&!this.isIgnored()&&(this.interactPrompt.visible=!0)}hideInteractPrompt(){this.interactPrompt.visible=!1}onApproach(e=!1){this.alertBubble.visible=!e,this.waveBubble.visible=e,this.hideInteractPrompt(),e||this.showEllipsisBubble(),On(this.mesh,"happy")}clearApproachBubbles(){this.alertBubble.visible=!1,this.waveBubble.visible=!1,this.isTalking||this.hideSpeechBubble()}startApproaching(){this.state==="following"||this.isCompanion||(this.state="approaching",this.waveBubble.visible=!0,On(this.mesh,"happy"))}stopApproaching(){this.state==="approaching"&&(this.state="idle"),this.waveBubble.visible=!1}startFollowing(){this.state="following",this.isCompanion=!0,this.clearApproachBubbles(),On(this.mesh,"happy")}stopFollowing(e=!1){this.state="idle",this.isCompanion=!1,this.clearApproachBubbles(),On(this.mesh,this.profile.defaultExpression),e&&(this.mesh.position.copy(this.homePos),vh(this))}setPlayerNearby(e,t){this.playerNearby=e&&!this.isCompanion,e&&t&&!this.isTalking&&!this.isCompanion&&this.facePoint(t),!this.isTalking&&!this.isCompanion&&this.state!=="approaching"&&(this.alertBubble.visible=!1,e&&!this.isIgnored()?(this.showInteractPrompt(),(this.profile.routine==="sit"||this.mesh.userData.isSitting)&&this.showEllipsisBubble()):(this.hideInteractPrompt(),this.isTalking||this.hideSpeechBubble()))}startConversation(){this.isTalking=!0,this.clearApproachBubbles(),this.hideInteractPrompt(),this.state==="approaching"&&(this.state="idle")}endConversation(){this.isTalking=!1,this.hideSpeechBubble(),this.isCompanion||On(this.mesh,this.profile.defaultExpression)}facePoint(e){const t=e.x-this.mesh.position.x,n=e.z-this.mesh.position.z;Math.hypot(t,n)>.01&&(this.mesh.rotation.y=Math.atan2(t,n))}_moveToward(e,t,n,i=1.4){return Nu(this.mesh,e,t,n,i,(r,a)=>bi(this.mesh,r,a))}update(e,t=null,n=0){if(this.isTalking){bi(this.mesh,0,e),t&&this.facePoint(t);return}if(this.state==="following"&&t){Sy(this.mesh,t,n,e,this.followSpeed,1.4,1.2,(i,r)=>bi(this.mesh,i,r)),this.mesh.position.y=.02+Math.sin(this.idlePhase)*.008,this.idlePhase+=e*2;return}if(this.state==="approaching"&&t){const i=this._moveToward(t,e,this.walkSpeed,2.2);this.waveBubble.visible=!0,i&&On(this.mesh,"happy");return}if(this.playerNearby){bi(this.mesh,0,e),t&&this.facePoint(t);return}_y(this,e)}}const Ky=[{id:"yuki",name:"Yuki Tanaka",nameJa:"田中 雪",characterModel:"character_female_b",personality:"Shy bookworm",tagline:"Always found reading near the vending machines.",approachInvite:"Um... excuse me. I noticed you walking alone. Would you... walk with me a little? I get nervous by myself.",walkAccept:"Really? Okay... I'll stay close. Just tap Chat anytime you want to talk.",partWayLine:"Oh... okay. I'll find a quiet bench. Thank you for walking with me.",emoji:"📖",shirtColor:15788280,backpackColor:8413376,hairColor:2760752,startT:.07,defaultExpression:"shy",routine:"sit",social:{befriend:{expression:"shy",text:"Friends...? I'd like that. Maybe we could swap book recommendations sometime."},argue:{expression:"surprised",text:"Oh... I didn't mean to upset you. Not everyone loves quiet poetry, I suppose."},flirt:{expression:"shy",text:"W-what?! My face is burning. You're... very bold. I don't know what to say."}},firstMeet:{greeting:{expression:"shy",text:"Oh—! S-sorry, I was lost in a poem. I didn't notice you there at all."},choices:[{label:'"What are you reading?"',response:{expression:"happy",text:'A book of haiku about quiet streets. This one goes: "Vending machine glow / humming in the afternoon / nobody hurries."'}},{label:'"This town feels peaceful."',response:{expression:"thinking",text:"It is... like the world forgot to be loud here. I come every day so I don't forget that feeling."},reward:{type:"journal",title:"Yuki's Haiku",body:'"Vending machine glow / humming in the afternoon / nobody hurries."'}},{label:'"Want to walk together?"',response:{expression:"shy",text:"I'd love that... when you're ready, tap Walk together. I know a quiet spot by the garden."},reward:{type:"friendship"}},{label:'"I should let you read."',response:{expression:"shy",text:"No, it's okay... talking is nice too. Maybe we'll see each other again."},end:!0}]},revisit:{greeting:{expression:"happy",text:"You again. I was just thinking about our last conversation... I mean—not in a weird way!"},choices:[{label:'"Got any new poems?"',response:{expression:"thinking",text:'I wrote one about the shrine steps: "Stone worn smooth by time / even footsteps whisper here / cherry petals fall."'},reward:{type:"journal",title:"Shrine Steps Poem",body:'"Stone worn smooth by time / even footsteps whisper here / cherry petals fall."'}},{label:'"Want to explore together?"',response:{expression:"shy",text:"I... I'd like that. Tap Walk together whenever you want me beside you—don't go too fast, okay?"},reward:{type:"friendship"}},{label:'"See you, Yuki."',response:{expression:"happy",text:"See you... I'll save a poem for you."},end:!0}]},companionTalk:{greeting:{expression:"happy",text:"Still here... I'm glad. The street feels less scary with someone beside me."},choices:[{label:`"Let's keep exploring."`,response:{expression:"shy",text:"Okay... lead the way. I'll stay right behind you."},end:!0},{label:'"I need to walk alone for a bit."',response:{expression:"shy",text:"I understand. I'll go back to my book. Maybe we'll meet again on the street."},reward:{type:"dismissCompanion"},end:!0}]}},{id:"ren",name:"Ren Okada",nameJa:"岡田 蓮",characterModel:"character_male_a",personality:"Energetic runner",tagline:"Training on the street every single day.",approachInvite:"Hey, you! Yeah you! Walk with me—I'll show you the best curve on the whole street!",walkAccept:"Alright, let's go! Try to keep up... kidding. I'll match your pace.",partWayLine:"No worries! Catch you on the next lap—I'll be stretching by the torii.",emoji:"🏃",shirtColor:15224912,backpackColor:15777856,hairColor:1710618,startT:.2,defaultExpression:"happy",routine:"jog",patrolTs:[.16,.24,.2],social:{befriend:{expression:"happy",text:"Friend request accepted! You're officially on Team Ren now. Let's hit the street!"},argue:{expression:"surprised",text:"Whoa, feisty! I respect someone who pushes back. Rematch on the torii curve?"},flirt:{expression:"happy",text:"Ha! Smooth. I'll pretend I didn't hear that... but I'm definitely grinning."}},firstMeet:{greeting:{expression:"happy",text:"Yo! New face on Sakura Street — love it! I was just about to sprint to the shrine and back."},choices:[{label:'"You run here every day?"',response:{expression:"happy",text:"Rain or shine! This road has the perfect curve by the torii gate. My legs know every crack in the pavement."}},{label:'"Think I could keep up?"',response:{expression:"surprised",text:"Ha! I like your energy. Here—feel this rush. Hold Shift and run the whole curve. The town opens up when you move fast."},reward:{type:"speedBoost",amount:1.8,duration:15,message:"⚡ Ren's runner's high! Sprint speed boosted."}},{label:'"Walk with me to the shrine?"',response:{expression:"happy",text:"YES! Tap Walk together and I'll jog beside you—well, walk-jog. Let's make this street ours!"},reward:{type:"friendship"}},{label:'"Good luck with your run."',response:{expression:"happy",text:"Thanks! If you change your mind, I'll be doing laps all afternoon!"},end:!0}]},revisit:{greeting:{expression:"surprised",text:"Back already? Either you love this street or you love talking to me. Either way—I'm flattered!"},choices:[{label:'"Race me to the shrine!"',response:{expression:"happy",text:"YOU'RE ON! Three... two... GO! Just kidding—I'll give you a head start. Feel that burn in your legs!"},reward:{type:"speedBoost",amount:2.2,duration:10,message:"🔥 Adrenaline rush! Max sprint unlocked."}},{label:'"Any tips for a beginner?"',response:{expression:"thinking",text:"Breathe through your nose, land on your midfoot, and never skip the stretch by the bench. Also—enjoy the view. Speed means nothing if you miss the town."}},{label:'"Catch you later, Ren."',response:{expression:"happy",text:"Later! Keep those legs moving!"},end:!0}]},companionTalk:{greeting:{expression:"happy",text:"This is great! Every step feels like a warm-up lap. Where to next, coach?"},choices:[{label:`"Let's keep going!"`,response:{expression:"happy",text:"Love the energy! I'll match your pace—just say the word if you want to sprint."},end:!0},{label:'"I want to walk solo for a while."',response:{expression:"happy",text:"All good! Solo runs build character too. Holler if you want a training buddy again."},reward:{type:"dismissCompanion"},end:!0}]}},{id:"haruko",name:"Haruko Sato",nameJa:"佐藤 春子",characterModel:"character_female_c",personality:"Wise neighbor",tagline:"Forty years on this street. Knows every story.",approachInvite:"Oh, dear—wait! Would you like this old woman to walk with you? Every corner here has a story.",walkAccept:"How lovely. I'll stroll right beside you. Point at anything—you ask, I'll tell you about it.",partWayLine:"Of course, dear. Every walk has its season. I'll be on my porch if you need a story.",emoji:"🌸",shirtColor:15259848,backpackColor:6332512,hairColor:6316128,startT:.62,defaultExpression:"happy",routine:"work",social:{befriend:{expression:"happy",text:"How lovely, dear. Friendship is the oldest kind of magic on any street."},argue:{expression:"thinking",text:"Even disagreeing can be honest. I appreciate your spirit, dear—don't hold back."},flirt:{expression:"surprised",text:"Oh my... at my age? You're a charmer. I'll pretend not to notice—but I noticed."}},firstMeet:{greeting:{expression:"happy",text:"Well hello, dear. You have that look—like someone seeing this street for the very first time."},choices:[{label:'"How long have you lived here?"',response:{expression:"thinking",text:"Forty years. This was all rice fields when I was a girl. Now there's vending machines and cherry trees. Time paints in colors you don't expect."},reward:{type:"journal",title:"Haruko's Memory",body:"Sakura Street was once rice fields. The cherry tree by the garden was planted when her daughter was born."}},{label:`"What's the best spot in town?"`,response:{expression:"happy",text:"The shrine steps, without question. Stand there at dusk. The light turns everything gold, and for a moment the whole world feels gentle."},reward:{type:"waypoint",location:"Shrine Steps",message:"Haruko pointed you toward the shrine steps at dusk."}},{label:'"Will you show me around?"',response:{expression:"happy",text:"Nothing would make me happier, dear. Tap Walk together and I'll stroll every step with you."},reward:{type:"friendship"}},{label:'"Thank you, Haruko."',response:{expression:"happy",text:"Come back anytime, dear. A town is only alive when people walk through it with open hearts."},end:!0}]},revisit:{greeting:{expression:"happy",text:"Welcome back, dear. I was just watching the clouds drift over the mountains. They look like old friends visiting."},choices:[{label:'"Tell me another story."',response:{expression:"thinking",text:"On rainy days, children used to huddle under the vending machine awning sharing sodas. That awning kept more than rain out—it kept loneliness out too."},reward:{type:"journal",title:"Rainy Day Awning",body:"Children gathered under the vending machine awning on rainy days, sharing sodas and stories."}},{label:'"The town feels different today."',response:{expression:"happy",text:"It's the same street—but you're different now. That's the secret. The town reflects whoever is walking through it."}},{label:'"Goodbye for now."',response:{expression:"happy",text:"Take care, dear. The street will be here when you return."},end:!0}]},companionTalk:{greeting:{expression:"happy",text:"What a lovely stroll this is, dear. The town looks different when you share it with someone."},choices:[{label:'"Tell me more as we walk."',response:{expression:"thinking",text:"Listen to the wind in the trees—that sound hasn't changed in forty years. Some things stay gentle on purpose."},end:!0},{label:`"I'd like to walk alone now."`,response:{expression:"happy",text:"Take your time, dear. Solitude is its own kind of companion. I'll be right here when you return."},reward:{type:"dismissCompanion"},end:!0}]}},{id:"mio",name:"Mio Ichikawa",nameJa:"市川 美央",characterModel:"character_female_a",personality:"Curious artist",tagline:"Sketching everything ordinary until it looks magical.",approachInvite:"Wait, wait! Before you go—walk with me? The light down the road is gorgeous right now!",walkAccept:"Perfect! I'll walk ahead and point out beautiful things. You just follow.",partWayLine:"No problem! I'll sketch the harbor light from here. Find me if you see something beautiful.",emoji:"🎨",shirtColor:13166832,backpackColor:15761568,hairColor:4861984,startT:.74,defaultExpression:"thinking",routine:"work",social:{befriend:{expression:"happy",text:"Friends! Now I have someone to point at beautiful things with. This is the best commission ever."},argue:{expression:"thinking",text:"Conflict is just contrasting colors. Bold choice—I respect it. Want to argue about art?"},flirt:{expression:"shy",text:"You're... kind of compositionally perfect. Don't make me blush while I'm holding a pencil."}},firstMeet:{greeting:{expression:"surprised",text:"Wait—hold still! The light just hit your shoulder perfectly. ...Sorry, artist reflex. Hi, I'm Mio!"},choices:[{label:'"What are you drawing?"',response:{expression:"thinking",text:"Everything everyone ignores. Vending machines, power lines, that orange cat on the wall. Ordinary things are secretly beautiful if you stare long enough."}},{label:`"Where's the best view?"`,response:{expression:"happy",text:"Torii gate curve at sunset. The cat on the wall near the bench. And the vending machine row when it rains—colors bleed into the wet pavement like watercolor."},reward:{type:"journal",title:"Mio's Sketch Spots",body:"Best views: torii curve at sunset, the orange cat on the wall, vending machines in the rain."}},{label:'"Walk with me and point out art?"',response:{expression:"happy",text:"That's literally my dream request! Tap Walk together and I'll whisper every beautiful thing I see."},reward:{type:"friendship"}},{label:'"Sorry to interrupt your art."',response:{expression:"happy",text:"Never apologize for that! Interruptions are just life adding itself to the composition."},end:!0}]},revisit:{greeting:{expression:"happy",text:"Perfect timing—I just finished a sketch of the power lines! They look like music notation if you squint."},choices:[{label:'"Can I see your sketchbook?"',response:{expression:"shy",text:"It's messy... pages of cats, mailboxes, one terrible traffic cone, and a self-portrait where I drew my nose too big. But... here."},reward:{type:"friendship",npc:"mio"}},{label:'"Teach me to see like you do."',response:{expression:"thinking",text:"Close your eyes. Open them slowly. Pick ONE color and hunt for it everywhere. The town rhymes with itself—you just have to listen with your eyes."},reward:{type:"waypoint",location:"Artist's Eye",message:"Mio taught you to see the town through an artist's eyes."}},{label:'"Keep creating, Mio."',response:{expression:"happy",text:"Always! Tell me if you find something worth a hundred sketches."},end:!0}]},companionTalk:{greeting:{expression:"happy",text:"Look—the light on that roof! Sorry, artist brain. I'm really glad we're walking together."},choices:[{label:'"Point out more beautiful things!"',response:{expression:"thinking",text:"See that crack in the sidewalk? It's shaped like a river. The town is full of hidden compositions."},end:!0},{label:'"I need some alone time to look around."',response:{expression:"happy",text:"Totally fair. Art needs space to breathe. I'll wander off and draw something quiet."},reward:{type:"dismissCompanion"},end:!0}]}}],Yy={neutral:"😐",happy:"😊",surprised:"😮",thinking:"🤔",shy:"😳"},qy=[{id:"kenji",name:"Kenji Yamada",nameJa:"山田 健二",characterModel:"character_male_b",personality:"Baker",tagline:"Runs the morning market bread stall.",approachInvite:"Heading out? Perfect — I'm about to make my delivery rounds. Walk with me?",walkAccept:"Great! I'll tell you which shops get the best bread.",partWayLine:"Alright, I'll finish the rounds myself. Stop by the stall tomorrow!",emoji:"🍞",shirtColor:15786184,backpackColor:8413248,hairColor:3811872,startT:.54,defaultExpression:"happy",routine:"work",social:{befriend:{expression:"happy",text:"A fellow bread appreciator! Come by the stall early — I save the best batch for friends."}},firstMeet:{greeting:{expression:"happy",text:"Morning! Just pulled these melon pan from the oven. The whole market smells like butter and sunshine."},choices:[{label:'"Smells amazing!"',response:{expression:"happy",text:"You have good taste! A warm melon pan and a slow morning walk — that's the secret to a good day."},end:!0},{label:`"What's popular today?"`,response:{expression:"thinking",text:"Anko buns and curry bread. The fishermen buy half my stock before I finish setup."}},{label:'"Walk with me a bit?"',response:{expression:"happy",text:"I'd love that — I'm doing delivery rounds anyway. Come on!"},reward:{type:"friendship"},end:!0}]},revisit:{greeting:{expression:"happy",text:"Back for more? I saved a warm one just in case."},choices:[{label:`"How's business?"`,response:{expression:"happy",text:"Steady! A town feeds itself when people stop to talk between errands."},end:!0},{label:'"Tell me about the market."',response:{expression:"thinking",text:"It's been here fifty years. Old Mrs. Nakamura used to sell pickles at the corner — her recipe is still a secret."}},{label:'"Walk with me again?"',response:{expression:"happy",text:"Always! Deliveries are more fun with company."},reward:{type:"friendship"},end:!0}]},companionTalk:{greeting:{expression:"happy",text:"See that bakery smell drifting down the alley? That's Ito-san's place — we're friendly rivals."},choices:[{label:'"Who makes better bread?"',response:{expression:"happy",text:"Me, obviously. But his croissants are... acceptable. Don't tell him I said that."},end:!0},{label:'"I should head on alone."',response:{expression:"happy",text:"Of course! Come by the stall whenever. Free sample waiting for you."},reward:{type:"dismissCompanion"},end:!0}]}},{id:"sora",name:"Sora Mizuki",nameJa:"水樹 空",characterModel:"character_male_c",personality:"Fishmonger",tagline:"Sorting the morning catch at the harbor.",approachInvite:"Heading toward the water? I'm done here — I'll walk that way too.",walkAccept:"Good. The harbor path is best in the morning quiet.",partWayLine:"I'll take it from here. Come back when the boats return.",emoji:"🐟",shirtColor:13691120,backpackColor:4219008,hairColor:2764864,startT:.96,defaultExpression:"neutral",routine:"work",social:{befriend:{expression:"happy",text:"Hm. You're alright. Come back when the big catch comes in — I'll save you something."}},firstMeet:{greeting:{expression:"neutral",text:"Careful of the wet stones — fresh mackerel just came in. Glistening like silver coins."},choices:[{label:'"Caught locally?"',response:{expression:"happy",text:"Right off the pier this morning. This harbor keeps the whole town fed."}},{label:'"Beautiful view here."',response:{expression:"thinking",text:"I never get tired of it. The mountains, the water, the quiet after the boats leave."}},{label:'"Walk to the pier with me?"',response:{expression:"neutral",text:"Sure. I was heading back anyway."},reward:{type:"friendship"},end:!0}]},revisit:{greeting:{expression:"happy",text:"Good timing — still plenty of catch left."},choices:[{label:'"Busy day?"',response:{expression:"neutral",text:"The usual. Ren runs past, Haruko tells stories, the cat steals a nap on crate three."},end:!0},{label:'"Walk with me?"',response:{expression:"neutral",text:"Alright. Not much more to do here."},reward:{type:"friendship"},end:!0}]},companionTalk:{greeting:{expression:"neutral",text:"When the fog rolls in you can't see the mountains. But you can hear the harbor bells. That's enough."},choices:[{label:'"Tell me more about the harbor."',response:{expression:"thinking",text:"My grandfather built the first dock here. Three boats, two nets, and a lot of stubbornness."},end:!0},{label:`"I'll go on ahead."`,response:{expression:"neutral",text:"Right. Come back when the big fish are running."},reward:{type:"dismissCompanion"},end:!0}]}},{id:"emi",name:"Emi Okamoto",nameJa:"岡本 恵美",characterModel:"character_female_a",personality:"Playful kid",tagline:"Chasing pigeons near the park.",approachInvite:"Hey hey! I know every secret spot in this park! Want me to show you?",walkAccept:"Yes! Follow me! There's a cat behind the big tree and a pigeon who eats from your hand!",partWayLine:"Okay! I'll be near the swings. Come back and play!",emoji:"🎈",shirtColor:16304344,backpackColor:15786048,hairColor:1708048,startT:.8,defaultExpression:"happy",routine:"patrol",patrolTs:[.78,.82,.8],social:{befriend:{expression:"happy",text:"We're friends now! That means you get to see ALL the secret spots, including the one with three cats!"}},firstMeet:{greeting:{expression:"surprised",text:"Whoa! You're tall. Are you exploring? I know every bench and every cat in this park!"},choices:[{label:'"Show me around!"',response:{expression:"happy",text:"Okay! The orange cat lives by the big tree. The pigeons hang out by the gazebo. Walk with me!"},reward:{type:"friendship"},end:!0},{label:'"Having fun?"',response:{expression:"happy",text:"The best! Mom says I can play until the streetlights come on."},end:!0},{label:'"Which way to the shrine?"',response:{expression:"happy",text:"I'll show you! Follow me — I run there all the time!"},reward:{type:"friendship"},end:!0}]},revisit:{greeting:{expression:"happy",text:"Tag! You're it! ...Just kidding. Unless you want to be."},choices:[{label:'"Want to walk together?"',response:{expression:"happy",text:"Sure! I know a new spot where the sparrows eat bread crumbs!"},reward:{type:"friendship"},end:!0},{label:'"Catch you later!"',response:{expression:"happy",text:"Byeee! I'll be near the swings!"},end:!0}]},companionTalk:{greeting:{expression:"happy",text:"See that fat pigeon? His name is Mochi. I named him. He doesn't know that yet."},choices:[{label:'"What else have you named?"',response:{expression:"happy",text:"The orange cat is Tangerine, the big crow is Shogun, and the bench near the tree is Dave."},end:!0},{label:`"I'll explore by myself now."`,response:{expression:"happy",text:"Okay! Byeee! Find the three-cat bench — it's near the garden!"},reward:{type:"dismissCompanion"},end:!0}]}},{id:"jiro",name:"Jiro Sato",nameJa:"佐藤 次郎",characterModel:"character_male_c",personality:"Retired neighbor",tagline:"Watching the street from his bench.",approachInvite:"I was just thinking about getting up and walking to the shrine. Been a while. Care to join an old man?",walkAccept:"Ha! Good. Slow steps, slow talk. That's how you learn a place.",partWayLine:"My knees say that's enough for today. You go on — the town rewards the curious.",emoji:"🪑",shirtColor:14209216,backpackColor:5263440,hairColor:9474192,startT:.4,defaultExpression:"thinking",routine:"sit",social:{befriend:{expression:"happy",text:"Good. Friends are made slowly here. That's what makes them last."}},firstMeet:{greeting:{expression:"thinking",text:"Mm. Sit a moment, young one. I've watched this street change for sixty years. The vending machines were the big revolution."},choices:[{label:'"What was it like before?"',response:{expression:"thinking",text:"Quieter. More bicycles. Mrs. Tanaka — Haruko's mother — planted that cherry tree by the garden."}},{label:'"Walk with me to the shrine?"',response:{expression:"happy",text:"Ha! You talk me into it. Lead the way — my knees need the practice."},reward:{type:"friendship"},end:!0},{label:'"Enjoy your rest."',response:{expression:"happy",text:"Wise words. A bench is a fine place to understand a town."},end:!0}]},revisit:{greeting:{expression:"happy",text:"Ah, my regular visitor. The street looks different every time, doesn't it?"},choices:[{label:'"Any news today?"',response:{expression:"thinking",text:"Mio drew the torii again. Kenji sold out of anko buns by nine. A good day."},end:!0},{label:'"Walk with me again?"',response:{expression:"happy",text:"Alright, alright — you've convinced me. Slow and steady."},reward:{type:"friendship"},end:!0}]},companionTalk:{greeting:{expression:"thinking",text:"You know, I used to chase cats down this very lane as a boy. Different cats, same lane."},choices:[{label:'"Tell me more."',response:{expression:"happy",text:"There was one cat — huge, orange — sat on that wall for twelve years. Same spot, every morning. Reliable as the sunrise."},end:!0},{label:`"I'll head on alone."`,response:{expression:"happy",text:"Good. The street is best walked alone sometimes. I'll be at the bench."},reward:{type:"dismissCompanion"},end:!0}]}},{id:"yoko",name:"Yoko Ishida",nameJa:"石田 陽子",characterModel:"character_female_b",personality:"Florist",tagline:"Tending the flower shop on cafe row.",approachInvite:"I'm just closing up for a tea break. I'd love some company on the way to the park!",walkAccept:"Wonderful! I know where the best wildflowers grow along the path.",partWayLine:"I'll stop here and sketch the wild cosmos. Come back and see the shop anytime!",emoji:"🌻",shirtColor:15790296,backpackColor:14712976,hairColor:4861984,startT:.5,defaultExpression:"happy",routine:"work",social:{befriend:{expression:"happy",text:"A flower friend! Come by when the dahlias bloom — I'll make a little arrangement just for you."}},firstMeet:{greeting:{expression:"happy",text:"Welcome to Hana no Ie! These cosmos just arrived — look how they lean toward the light."},choices:[{label:'"Your shop is lovely."',response:{expression:"happy",text:"Flowers teach patience. You water, you wait, and one morning the whole window blooms."}},{label:'"What sells best?"',response:{expression:"thinking",text:"Cherry blossom sprigs in spring. Sunflowers in summer. Haruko buys something every week."}},{label:'"Walk with me a bit?"',response:{expression:"happy",text:"I was hoping for an excuse to step out! The park light is beautiful right now."},reward:{type:"friendship"},end:!0}]},revisit:{greeting:{expression:"happy",text:"Perfect timing — I was just trimming the display."},choices:[{label:'"They look beautiful."',response:{expression:"shy",text:"Thank you... I talk to them sometimes. It helps."},end:!0},{label:'"Walk with me?"',response:{expression:"happy",text:"Yes! The back path behind the shrine has wild cosmos this time of year."},reward:{type:"friendship"},end:!0}]},companionTalk:{greeting:{expression:"happy",text:"See those little white flowers in the wall cracks? Hakonechloa. They grow wherever they want — I admire that."},choices:[{label:'"Do you know all the flowers here?"',response:{expression:"happy",text:"Most of them! The old magnolia by the shrine gate was planted sixty years ago. Jiro was there for the planting."},end:!0},{label:`"I'll wander alone for a bit."`,response:{expression:"happy",text:"Of course! Come back to the shop — I'll have tea ready."},reward:{type:"dismissCompanion"},end:!0}]}}],$y={befriend:{label:"💛 Make friends",className:"social-befriend",mood:8,moodLabel:"New friend!"},argue:{label:"💢 Argue",className:"social-argue",mood:-6},flirt:{label:"💕 Flirt",className:"social-flirt",mood:10,moodLabel:"Bold move!"}};class Zy{constructor(e){var t,n,i,r,a,o,l,c,h,u;this.box=e.box,this.approachModal=e.approachModal,this.approachPortrait=e.approachPortrait,this.approachName=e.approachName,this.approachPersonality=e.approachPersonality,this.approachTagline=e.approachTagline,this.approachChatBtn=e.approachChatBtn,this.approachWalkBtn=e.approachWalkBtn,this.approachPartBtn=e.approachPartBtn,this.approachIgnoreBtn=e.approachIgnoreBtn,this.companionTag=e.companionTag,this.companionLabel=e.companionLabel,this.companionPartBtn=e.companionPartBtn,this.nameEl=e.name,this.personalityEl=e.personality,this.textEl=e.text,this.expressionEl=e.expression,this.portraitEl=e.portrait,this.nextBtn=e.next,this.choicesEl=e.choices,this.dialogueWalkBtn=e.dialogueWalkBtn,this.dialogueStopWalkBtn=e.dialogueStopWalkBtn,this.toastEl=e.toast,this.journalPanel=e.journalPanel,this.journalList=e.journalList,this.journalBtn=e.journalBtn,this.closeJournalBtn=e.closeJournalBtn,this.interactHint=e.interactHint,this.continueHint=e.continueHint,this.active=!1,this.hintItem=null,this.onHintClick=null,this.approachOpen=!1,this.approachInitiated=!1,this.npc=null,this.conversation=null,this.phase="greeting",this.pendingChoices=!1,this.journal=[],this.nextBtn.addEventListener("click",()=>this.advance()),(t=this.approachChatBtn)==null||t.addEventListener("click",()=>this._onChatClicked()),(n=this.approachWalkBtn)==null||n.addEventListener("click",()=>this._onWalkClicked()),(i=this.approachPartBtn)==null||i.addEventListener("click",()=>this._onPartClicked()),(r=this.approachIgnoreBtn)==null||r.addEventListener("click",()=>this._onIgnoreClicked()),(a=this.companionPartBtn)==null||a.addEventListener("click",()=>this._onCompanionPartClicked()),(o=this.dialogueWalkBtn)==null||o.addEventListener("click",()=>this._onDialogueWalkClicked()),(l=this.dialogueStopWalkBtn)==null||l.addEventListener("click",()=>this._onDialogueStopWalkClicked()),(c=this.journalBtn)==null||c.addEventListener("click",()=>{var d;return(d=this.journalPanel)==null?void 0:d.classList.remove("hidden")}),(h=this.closeJournalBtn)==null||h.addEventListener("click",()=>{var d;return(d=this.journalPanel)==null?void 0:d.classList.add("hidden")}),(u=this.interactHint)==null||u.addEventListener("click",()=>{var d;(d=this.onHintClick)==null||d.call(this)})}setRewardHandler(e){this._rewardHandler=e}setGame(e){this.game=e}isOpen(){return this.active}isBlocking(){return this.active||this.approachOpen}showInteractHint(e){var n,i;if(!this.interactHint||!e||this.isBlocking()){this.hideInteractHint();return}this.hintItem=e;let t="<kbd>E</kbd> Interact";if(e.type==="npc")t=`<kbd>E</kbd> Interact? with ${((n=e.profile)==null?void 0:n.nameJa)||((i=e.profile)==null?void 0:i.name)||"Someone"}`;else if(e.type==="animal"){const r=e.definition;t=`<kbd>E</kbd> ${r.emoji} Meet ${r.nameJa||r.name}`}else if(e.type==="prop"){const r=e.definition;r.shopId?t=`<kbd>E</kbd> 🏪 ${r.label}`:r.id==="shrine"?t="<kbd>E</kbd> ⛩️ Pray at Shrine":r.id==="bench"?t="<kbd>E</kbd> 🪑 Rest on Bench":r.id==="cherry_tree"?t="<kbd>E</kbd> 🌸 Admire Cherry Tree":r.id==="shrine_tree"&&(t="<kbd>E</kbd> 🌿 Listen to the Wind")}this.interactHint.innerHTML=t,this.interactHint.classList.remove("hidden")}hideInteractHint(){var e;this.hintItem=null,(e=this.interactHint)==null||e.classList.add("hidden")}setCompanionTag(e){this.companionTag&&(e?(this.companionLabel?this.companionLabel.textContent=`${e.profile.emoji} Walking with ${e.profile.nameJa}`:this.companionTag.textContent=`${e.profile.emoji} Walking with ${e.profile.nameJa}`,this.companionTag.classList.remove("hidden")):this.companionTag.classList.add("hidden"))}_canWalk(e){var t;return!e||e.isCompanion?!1:!!((t=e.profile)!=null&&t.approachInvite)}_updateDialogueWalkButtons(){var n,i;const e=this.npc,t=e==null?void 0:e.isCompanion;(n=this.dialogueWalkBtn)==null||n.classList.toggle("hidden",!this.active||t||!this._canWalk(e)),(i=this.dialogueStopWalkBtn)==null||i.classList.toggle("hidden",!this.active||!t)}showApproach(e,t={}){var r,a,o,l;if(this.isBlocking()||!e)return;this.hintItem=null,(r=this.interactHint)==null||r.classList.add("hidden"),this.approachOpen=!0,this.approachInitiated=t.initiated??!1,this.npc=e;const n=e.profile,i=e.isCompanion;this.approachPortrait.textContent=n.emoji,this.approachName.textContent=`${n.nameJa} · ${n.name}`,this.approachPersonality.textContent=n.personality,this.approachTagline.textContent=i?"Your walking companion wants to talk.":this.approachInitiated?n.approachInvite:n.tagline,(a=this.approachWalkBtn)==null||a.classList.toggle("hidden",i||!this._canWalk(e)),(o=this.approachPartBtn)==null||o.classList.toggle("hidden",!i),(l=this.approachIgnoreBtn)==null||l.classList.toggle("hidden",i),this.approachModal.classList.remove("hidden"),i||(e.onApproach(this.approachInitiated),e.stopApproaching())}hideApproach(){var e,t,n;this.approachOpen=!1,this.approachInitiated=!1,this.approachModal.classList.add("hidden"),(e=this.approachWalkBtn)==null||e.classList.remove("hidden"),(t=this.approachPartBtn)==null||t.classList.add("hidden"),(n=this.approachIgnoreBtn)==null||n.classList.remove("hidden"),this.npc&&!this.active&&(this.npc.clearApproachBubbles(),this.npc.isCompanion||(this.npc=null))}_onChatClicked(){const e=this.npc;this.hideApproach(),e&&this.start(e)}_onWalkClicked(){const e=this.npc;this.hideApproach(),e&&(e.markMet(),this._beginCompanion(e))}_onPartClicked(){const e=this.npc;this.hideApproach(),e!=null&&e.isCompanion?this._dismissCompanion(e):e&&this.start(e)}_onCompanionPartClicked(){var e;(e=this.game)!=null&&e.companion&&this._dismissCompanion(this.game.companion)}_onDialogueWalkClicked(){var t;const e=this.npc;!e||e.isCompanion||(t=e.profile)!=null&&t.isAmbient||(this._beginCompanion(e),this._updateDialogueWalkButtons())}_onDialogueStopWalkClicked(){const e=this.npc;e!=null&&e.isCompanion&&(this._dismissCompanion(e),this._updateDialogueWalkButtons())}_beginCompanion(e){var t;(t=this._rewardHandler)==null||t.call(this,{type:"companion",npc:e}),this._showToast(`🚶 ${e.profile.name}: "${e.profile.walkAccept}"`)}_dismissCompanion(e){var t;(t=this._rewardHandler)==null||t.call(this,{type:"dismissCompanion",npc:e}),this._showToast(`👋 ${e.profile.name}: "${e.profile.partWayLine}"`),this.setCompanionTag(null),this._updateDialogueWalkButtons()}_onIgnoreClicked(){this.npc&&(this.npc.ignoreFor(15),this.npc.stopApproaching()),this.hideApproach(),this.npc=null}start(e){var t;this.active=!0,this.npc=e,e.isCompanion&&e.profile.companionTalk?this.conversation=e.profile.companionTalk:this.conversation=e.hasMetBefore()?e.profile.revisit:e.profile.firstMeet,this.phase="greeting",this.pendingChoices=!1,this.box.classList.remove("hidden"),this.box.classList.add("bubble-mode"),this.choicesEl.innerHTML="",this.choicesEl.classList.add("hidden"),this.nextBtn.classList.remove("hidden"),(t=this.continueHint)==null||t.classList.remove("hidden"),this._updateDialogueWalkButtons(),e.startConversation(),e.markMet(),this._showGreeting()}_showGreeting(){this._renderLine(this.conversation.greeting),this.nextBtn.textContent="▶ Continue"}_getSocialChoices(){var t,n;const e=(n=(t=this.npc)==null?void 0:t.profile)==null?void 0:n.social;return e?Object.entries($y).filter(([i])=>e[i]).map(([i,r])=>({key:i,meta:r,response:e[i]})):[]}_showChoices(){var n;this.phase="choices",this.expressionEl.textContent="💬",this.textEl.textContent="What do you say?",this.npc.showSpeechText("What do you say?"),this.nextBtn.classList.add("hidden"),(n=this.continueHint)==null||n.classList.add("hidden"),this.choicesEl.classList.remove("hidden"),this.choicesEl.innerHTML="";let e=0;const t=(i,r,a)=>{const o=document.createElement("button");o.className=`dialogue-choice${r?` ${r}`:""}`,o.innerHTML=`<span class="choice-num">${e+1}</span>${i}`,o.addEventListener("click",a),this.choicesEl.appendChild(o),e+=1};for(const{key:i,meta:r,response:a}of this._getSocialChoices())t(r.label,r.className,()=>this._pickSocialChoice(i,a,r));this.conversation.choices.forEach((i,r)=>{t(i.label,"",()=>this._pickChoice(r))})}_pickSocialChoice(e,t,n){var i,r,a,o;this.phase="response",this.choicesEl.classList.add("hidden"),this.choicesEl.innerHTML="",this.nextBtn.classList.remove("hidden"),(i=this.continueHint)==null||i.classList.remove("hidden"),this._renderLine(t),this.nextBtn.textContent="▶ Keep talking",e==="befriend"?(this.npc.addFriendship(),this._showToast(`💛 ${this.npc.profile.name} warmed up to you.`)):e==="argue"?this._showToast(`💢 Tension rises with ${this.npc.profile.name}…`):e==="flirt"&&(this.npc.addFriendship(),this._showToast(`💕 ${this.npc.profile.name} seems flustered—in a good way.`)),(r=this.game)!=null&&r.mood&&n.mood&&(n.mood>0?this.game.mood.boost(n.mood,n.moodLabel??""):this.game.mood.drain(-n.mood),(o=(a=this.game)._updateMoodHUD)==null||o.call(a)),this.pendingChoices=!0}_pickChoice(e){var n;const t=this.conversation.choices[e];this.phase="response",this.choicesEl.classList.add("hidden"),this.choicesEl.innerHTML="",this.nextBtn.classList.remove("hidden"),(n=this.continueHint)==null||n.classList.remove("hidden"),this._renderLine(t.response),this.nextBtn.textContent=t.end?"👋 Say goodbye":"▶ Keep talking",t.reward&&this._applyReward(t.reward),this.pendingChoices=!t.end,t.end&&(this.phase="farewell")}_applyReward(e){var t;e.type==="journal"?(this.journal.push({title:e.title,body:e.body,npc:this.npc.profile.name}),this._updateJournalUI(),this._showToast(`📓 Saved to journal: ${e.title}`)):e.type==="speedBoost"?((t=this._rewardHandler)==null||t.call(this,{type:"speedBoost",amount:e.amount,duration:e.duration}),this._showToast(e.message)):e.type==="waypoint"?this._showToast(`📍 ${e.message}`):e.type==="friendship"?(this.npc.addFriendship(),this._showToast(`💛 ${this.npc.profile.name} opened up to you.`)):e.type==="dismissCompanion"&&this._dismissCompanion(this.npc)}_showToast(e){this.toastEl&&(this.toastEl.textContent=e,this.toastEl.classList.remove("hidden"),clearTimeout(this._toastTimer),this._toastTimer=setTimeout(()=>this.toastEl.classList.add("hidden"),4500))}_updateJournalUI(){if(this.journalList){if(this.journalList.innerHTML="",this.journal.length===0){this.journalList.innerHTML='<li class="journal-empty">Talk to townspeople to collect notes.</li>';return}this.journal.forEach(e=>{const t=document.createElement("li");t.innerHTML=`<strong>${e.title}</strong><span>${e.npc}</span><p>${e.body}</p>`,this.journalList.appendChild(t)})}}advance(){this.active&&(this.phase==="greeting"?this._showChoices():this.phase==="response"?this.pendingChoices?this._showChoices():this.close():this.phase==="farewell"&&this.close())}_renderLine(e){const t=this.npc.profile;this.nameEl.textContent=`${t.nameJa} · ${t.name}`,this.personalityEl.textContent=`${t.emoji} ${t.personality}`,this.textEl.textContent=e.text,this.expressionEl.textContent=Yy[e.expression]??"😐",this.portraitEl.textContent=t.emoji,this.npc.setExpression(e.expression),this.npc.showSpeechText(e.text),this.continueHint&&(this.continueHint.textContent="▶ Continue")}close(){var e,t,n,i;this.active=!1,this.box.classList.add("hidden"),this.box.classList.remove("bubble-mode"),this.choicesEl.classList.add("hidden"),this.nextBtn.classList.remove("hidden"),this.nextBtn.textContent="▶ Continue",(e=this.continueHint)==null||e.classList.add("hidden"),(t=this.dialogueWalkBtn)==null||t.classList.add("hidden"),(n=this.dialogueStopWalkBtn)==null||n.classList.add("hidden"),this.npc&&(this.npc.hideSpeechBubble(),this.npc.endConversation(),this.npc.isCompanion||(this.npc=null),(i=this.onConversationEnd)==null||i.call(this))}tryAdvanceFromKey(){return!this.active||this.phase==="choices"?!1:(this.advance(),!0)}addJournalEntry(e,t,n){this.journal.push({title:e,body:t,npc:n}),this._updateJournalUI(),this._showToast(`📓 Saved to journal: ${e}`)}showToast(e){this._showToast(e)}}class Jy{constructor(){this.raycaster=new Il}pickFromTap(e,t,n,i){if(!e||!t||!n||!(i!=null&&i.length))return null;const r=n.getBoundingClientRect(),a=new Re((e.x-r.left)/r.width*2-1,-((e.y-r.top)/r.height)*2+1);this.raycaster.setFromCamera(a,t);const o=this.raycaster.intersectObjects(i,!0);return o.length===0?null:this._interactableFromObject(o[0].object)}_interactableFromObject(e){var n,i;let t=e;for(;t;){if((n=t.userData)!=null&&n.interactable)return t.userData.interactable;if((i=t.userData)!=null&&i.interactNpc)return t.userData.interactNpc;t=t.parent}return null}}class Qy{constructor(e,t,n,i,r,a){this.player=e,this.registry=t,this.dialogue=n,this.game=i,this.petUI=r,this.shopUI=a,this.picker=new Jy,this.approachRange=9,this.spotRange=20,n.onHintClick=()=>{n.hintItem&&this._interactWithItem(n.hintItem)}}setRewardHandler(e){this.dialogue.setRewardHandler(e)}isBlocking(){var e,t,n;return this.dialogue.isBlocking()||((e=this.petUI)==null?void 0:e.isOpen())||((t=this.shopUI)==null?void 0:t.isOpen())||((n=this.game)==null?void 0:n.outfitOpen)}_interactWithNpc(e){var t,n;return e?((t=e.clearIgnore)==null||t.call(e),(n=e.stopApproaching)==null||n.call(e),this.dialogue.showApproach(e,{initiated:!1}),!0):!1}_interactWithItem(e){var i;if(!e)return!1;const t=this.player.position,n=e.type==="npc"?e.isCompanion?this.approachRange+2:this.spotRange:e.range??this.approachRange;return!((i=e.canInteract)!=null&&i.call(e,t))&&e.distanceTo(t)>n?(this.dialogue._showToast("Move closer to interact."),!1):e.type==="npc"?this._interactWithNpc(e):(e.interact({game:this.game,dialogue:this.dialogue,petUI:this.petUI,shopUI:this.shopUI,player:this.player}),!0)}update(e,t,n){if(this.isBlocking()){this.dialogue.hideInteractHint();return}const i=this.registry.getNpcs(),r=this.game.companion;for(const h of i){if(h.isCompanion)continue;const d=h.distanceTo(this.player.position)<this.approachRange;h.setPlayerNearby(d,this.player.position)}const o=!!this.registry.findNearest(this.player.position,this.approachRange,{types:["npc"]});this.dialogue.approachOpen&&!o&&!this.dialogue.approachInitiated&&this.dialogue.hideApproach();const l=this.registry.findNearest(this.player.position,this.approachRange,{});l?this.dialogue.showInteractHint(l):this.dialogue.hideInteractHint();const c=e.consumeTap();if(c){const h=this.picker.pickFromTap(c,t,n,this.registry.getHitTargets());h&&this._interactWithItem(h)}if(e.consumeKey("KeyE")){let h=null;r?h=r:h=this.registry.findNearest(this.player.position,this.approachRange+2,{includeIgnored:!0}),h?this._interactWithItem(h):this.dialogue._showToast("Nothing nearby to interact with.")}}}const ev={npc:0,animal:1,prop:2};class tv{constructor(){this.items=[]}register(e){e&&this.items.push(e)}registerAll(...e){for(const t of e)Array.isArray(t)?t.forEach(n=>this.register(n)):t&&this.register(t)}getHitTargets(){var t;const e=[];for(const n of this.items){const i=((t=n.getHitTargets)==null?void 0:t.call(n))??[];e.push(...i)}return e}findNearest(e,t,n={}){var c;const{types:i=null,includeIgnored:r=!1}=n;let a=null,o=1/0,l=1/0;for(const h of this.items){if(i&&!i.includes(h.type)||h.type==="npc"&&h.isCompanion||h.type==="npc"&&h.isTalking||h.type==="npc"&&!r&&((c=h.isIgnored)!=null&&c.call(h))||h.type==="animal"&&h.isPetCompanion)continue;const u=h.distanceTo(e);if(u>=t)continue;const d=ev[h.type]??9;(u<o-.5||Math.abs(u-o)<.5&&d<l)&&(a=h,o=u,l=d)}return a}getNpcs(){return this.items.filter(e=>e.type==="npc")}getAnimals(){return this.items.filter(e=>e.type==="animal")}findAllInRange(e,t,n={}){var a;const{includeIgnored:i=!1}=n,r=[];for(const o of this.items){if(o.type==="npc"&&o.isCompanion||o.type==="npc"&&o.isTalking||o.type==="npc"&&!i&&((a=o.isIgnored)!=null&&a.call(o))||o.type==="animal"&&o.isPetCompanion)continue;const l=o.distanceTo(e);l>=t||r.push({item:o,dist:l})}return r.sort((o,l)=>o.dist-l.dist)}}function ti(s,e,t,n,i,r=null,a=1.5){s.fillStyle=i,s.beginPath(),s.arc(e,t,n,0,Math.PI*2),s.fill(),r&&(s.strokeStyle=r,s.lineWidth=a,s.stroke())}function bh(s,e,t,n,i){s.fillStyle=n,s.fillRect(e-2.5,t-1,5,5),s.fillStyle=i??n,s.beginPath(),s.arc(e,t-2.8,2.8,0,Math.PI*2),s.fill()}function wh(s,e,t,n){s.fillStyle=n,s.beginPath(),s.arc(e,t+1,2.8,0,Math.PI*2),s.fill(),[[-3,-2.5],[0,-4.5],[3,-2.5]].forEach(([i,r])=>{s.beginPath(),s.arc(e+i,t+r,1.5,0,Math.PI*2),s.fill()})}function nv(s,e,t,n,i=4){s.fillStyle=n,s.beginPath(),s.moveTo(e,t-i),s.lineTo(e+i,t),s.lineTo(e,t+i),s.lineTo(e-i,t),s.closePath(),s.fill()}function iv(s,e,t,n,i=4.5){s.fillStyle=n,s.beginPath();for(let r=0;r<8;r++){const a=r/8*Math.PI*2-Math.PI/2,o=r%2===0?i:i*.45,l=e+Math.cos(a)*o,c=t+Math.sin(a)*o;r===0?s.moveTo(l,c):s.lineTo(l,c)}s.closePath(),s.fill()}function sv(s,e,t,n){s.fillStyle=n,s.beginPath(),s.moveTo(e-4.5,t-.5),s.lineTo(e,t-5.5),s.lineTo(e+4.5,t-.5),s.closePath(),s.fill(),s.fillRect(e-3.5,t-.5,7,5.5)}const It={npc:"#f09030",animal:"#d060c8",shop:"#f0c030",shrine:"#50d0a0",vending:"#40c8d0",bench:"#a07050",tree:"#c090b0",companion:"#60e8d8",player:"#4a90e8"};function rv(s){var t,n;if(s.type==="npc")return It.npc;if(s.type==="animal")return It.animal;const e=((t=s.definition)==null?void 0:t.id)??"";return(n=s.definition)!=null&&n.shopId||e.startsWith("shop")?It.shop:e==="shrine"?It.shrine:e==="vending"?It.vending:e==="bench"?It.bench:e==="cherry_tree"||e==="shrine_tree"?It.tree:It.bench}function av(s){var e;return s.type==="npc"||s.type==="animal"?s.mesh.position:(e=s.mesh)==null?void 0:e.position}function ov(s,e,t,n,i=10){var h;let r=1/0,a=-1/0,o=1/0,l=-1/0;const c=(u,d)=>{u<r&&(r=u),u>a&&(a=u),d<o&&(o=d),d>l&&(l=d)};if(s!=null&&s.getPointAt)for(let u=0;u<=60;u++){const d=s.getPointAt(u/60);c(d.x,d.z)}for(const u of e)c(u.mesh.position.x,u.mesh.position.z);for(const u of t)c(u.mesh.position.x,u.mesh.position.z);for(const u of n)(h=u.mesh)!=null&&h.position&&c(u.mesh.position.x,u.mesh.position.z);return Number.isFinite(r)?{minX:r-i,maxX:a+i,minZ:o-i,maxZ:l+i}:{minX:-20,maxX:20,minZ:-100,maxZ:20}}class lv{constructor(e,t,n=null){var r;if(this.canvas=e,this.wrapEl=n,this.path=t,this.player=null,this.npcs=[],this.animals=[],this.worldProps=[],this.companion=null,this.petCompanion=null,this.nearbyInteractables=[],this.bounds={minX:-20,maxX:20,minZ:-100,maxZ:20},this.padding=10,this._pulse=0,this.unavailable=!1,this.dpr=1,this.size=(e==null?void 0:e.width)||180,this.fallbackEl=(n==null?void 0:n.querySelector("#minimap-fallback"))??null,this.ctx=(e==null?void 0:e.getContext("2d"))??null,!this.ctx){console.warn("Minimap: 2D canvas context unavailable"),this.unavailable=!0,e&&(e.style.display="none"),(r=this.fallbackEl)==null||r.classList.remove("hidden");return}const i=(n==null?void 0:n.clientWidth)||e.width||180;this.resize(i)}setPlayer(e){this.player=e}setNpcs(e){this.npcs=e,this._recomputeBounds()}setAnimals(e){this.animals=e,this._recomputeBounds()}setWorldProps(e){this.worldProps=e,this._recomputeBounds()}setCompanion(e){this.companion=e}setPetCompanion(e){this.petCompanion=e}setNearbyInteractables(e){this.nearbyInteractables=e??[]}_recomputeBounds(){this.bounds=ov(this.path,this.npcs,this.animals,this.worldProps,10)}resize(e){var n;if(this.unavailable||!this.canvas||!this.ctx)return;const t=Math.max(80,Math.round(e||((n=this.wrapEl)==null?void 0:n.clientWidth)||this.size||180));this.size=t,this.dpr=Math.min(window.devicePixelRatio||1,2),this.canvas.width=Math.round(t*this.dpr),this.canvas.height=Math.round(t*this.dpr),this.canvas.style.width=`${t}px`,this.canvas.style.height=`${t}px`,this.ctx.setTransform(this.dpr,0,0,this.dpr,0,0)}_worldToMap(e,t){const{minX:n,maxX:i,minZ:r,maxZ:a}=this.bounds,o=i-n||1,l=a-r||1,c=this.size-this.padding*2;return{mx:this.padding+(e-n)/o*c,my:this.padding+(t-r)/l*c}}update(){var i,r;if(this.unavailable||!this.ctx)return;const{ctx:e,size:t}=this;this._pulse=(this._pulse+.07)%(Math.PI*2),e.clearRect(0,0,t,t),e.save(),e.beginPath(),e.arc(t/2,t/2,t/2-2,0,Math.PI*2),e.clip(),e.fillStyle="#2d4a2d",e.fillRect(0,0,t,t);const n=this._worldToMap(22,-78);e.fillStyle="#3a6890",e.beginPath(),e.arc(n.mx,n.my,18,0,Math.PI*2),e.fill(),e.strokeStyle="#1a1a1a",e.lineWidth=7,e.lineCap="round",e.lineJoin="round",e.beginPath();for(let a=0;a<=60;a++){const o=this.path.getPointAt(a/60),{mx:l,my:c}=this._worldToMap(o.x,o.z);a===0?e.moveTo(l,c):e.lineTo(l,c)}e.stroke(),e.strokeStyle="rgba(220,210,180,0.55)",e.lineWidth=2.5,e.stroke();for(const a of this.worldProps){const o=a.mesh.position,{mx:l,my:c}=this._worldToMap(o.x,o.z),h=((i=a.definition)==null?void 0:i.id)??"";h==="shrine"?iv(e,l,c,It.shrine):h==="vending"?ti(e,l,c,2.8,It.vending,"#ffffff",1):h.startsWith("shop")?sv(e,l,c,It.shop):h==="bench"?ti(e,l,c,2,It.bench):(h==="cherry_tree"||h==="shrine_tree")&&ti(e,l,c,2,It.tree)}for(const a of this.animals){if(a===this.petCompanion)continue;const o=a.mesh.position,{mx:l,my:c}=this._worldToMap(o.x,o.z);wh(e,l,c,It.animal)}if(this.petCompanion){const a=this.petCompanion.mesh.position,{mx:o,my:l}=this._worldToMap(a.x,a.z),c=5+Math.sin(this._pulse)*2;ti(e,o,l,c,"rgba(208,96,200,0.25)"),wh(e,o,l,"#ff80f0"),e.strokeStyle="#ff80f0",e.lineWidth=1.5,e.beginPath(),e.arc(o,l,c,0,Math.PI*2),e.stroke()}for(const a of this.npcs){if(a===this.companion)continue;const{mx:o,my:l}=this._worldToMap(a.mesh.position.x,a.mesh.position.z);(r=a.profile)!=null&&r.isAmbient?ti(e,o,l,2,"rgba(200,160,100,0.65)"):bh(e,o,l,It.npc,"#f8d0a0")}if(this.companion){const{mx:a,my:o}=this._worldToMap(this.companion.mesh.position.x,this.companion.mesh.position.z),l=6+Math.sin(this._pulse)*2;ti(e,a,o,l,"rgba(96,232,216,0.22)"),bh(e,a,o,It.companion,"#c0fff8"),e.strokeStyle=It.companion,e.lineWidth=1.5,e.beginPath(),e.arc(a,o,l,0,Math.PI*2),e.stroke()}for(const{item:a,dist:o}of this.nearbyInteractables){const l=av(a);if(!l)continue;const{mx:c,my:h}=this._worldToMap(l.x,l.z),u=rv(a),d=1-Math.min(o/20,.75),f=8+Math.sin(this._pulse+o)*2.5*d,g=u.match(/#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})/i);if(g){const[,_,m,p]=g;ti(e,c,h,f,`rgba(${parseInt(_,16)},${parseInt(m,16)},${parseInt(p,16)},${.15+d*.2})`)}e.strokeStyle=u,e.lineWidth=2,e.beginPath(),e.arc(c,h,f,0,Math.PI*2),e.stroke(),nv(e,c,h,u,3.5)}if(this.player){const a=this.player.position,{mx:o,my:l}=this._worldToMap(a.x,a.z);ti(e,o,l,11,"rgba(74,144,232,0.22)"),e.fillStyle=It.player,e.strokeStyle="#ffffff",e.lineWidth=2.5,e.beginPath(),e.arc(o,l,6,0,Math.PI*2),e.fill(),e.stroke();const c=this.player.facing??0;e.fillStyle="#ffffff",e.beginPath(),e.moveTo(o+Math.sin(c)*11,l+Math.cos(c)*11),e.lineTo(o+Math.sin(c+2.5)*6,l+Math.cos(c+2.5)*6),e.lineTo(o+Math.sin(c-2.5)*6,l+Math.cos(c-2.5)*6),e.closePath(),e.fill()}e.restore(),e.strokeStyle="rgba(255,255,255,0.95)",e.lineWidth=3,e.beginPath(),e.arc(t/2,t/2,t/2-2,0,Math.PI*2),e.stroke(),e.strokeStyle="rgba(80,180,160,0.55)",e.lineWidth=1.5,e.beginPath(),e.arc(t/2,t/2,t/2-6,0,Math.PI*2),e.stroke()}}const Qa=[{min:85,name:"joyful",emoji:"😄",expression:"happy",color:"#f0c030"},{min:65,name:"happy",emoji:"😊",expression:"happy",color:"#80d080"},{min:45,name:"content",emoji:"🙂",expression:null,color:"#60b8d8"},{min:25,name:"tired",emoji:"😐",expression:"thinking",color:"#a0a0b8"},{min:0,name:"sad",emoji:"😢",expression:"thinking",color:"#8070c0"}],Nr=55,Th=.4,cv=4;class hv{constructor(){this.score=60,this._driftTimer=0,this._prevMoodName="content",this._floatEl=null,this._floatTimeout=null}getMood(){for(const e of Qa)if(this.score>=e.min)return e;return Qa[Qa.length-1]}boost(e,t=null){const n=this.getMood().name;this.score=Math.min(100,this.score+e);const i=this.getMood();return(i.name!==n||t)&&this._triggerFloat(i.emoji,t,i.color),i}drain(e){return this.score=Math.max(0,this.score-e),this.getMood()}update(e){return this._driftTimer+=e,this._driftTimer>=cv&&(this._driftTimer=0,this.score>Nr?this.score=Math.max(Nr,this.score-Th):this.score<Nr&&(this.score=Math.min(Nr,this.score+Th*.5))),this.getMood()}setFloatContainer(e){this._floatEl=e}_triggerFloat(e,t,n){if(!this._floatEl)return;clearTimeout(this._floatTimeout);const i=t?`${e} ${t}`:e;this._floatEl.textContent=i,this._floatEl.style.color=n??"#f0e060",this._floatEl.classList.remove("mood-float-active"),this._floatEl.offsetWidth,this._floatEl.classList.add("mood-float-active"),this._floatTimeout=setTimeout(()=>{this._floatEl.classList.remove("mood-float-active")},2e3)}getPercent(){return this.score}}const Fu=80,uv=[{id:"mochi",name:"Mochi",nameJa:"もち",species:"cat",emoji:"🐱",personality:"friendly",startT:.06,side:1,offset:3.2,petGain:15,sitGain:8,shooLoss:10,reactions:{pet:{happy:"Mochi purrs and rubs against your leg.",shy:"Mochi leans in cautiously.",skittish:"Mochi tolerates one pat."},sit:{happy:"Mochi curls up nearby.",shy:"Mochi watches from a safe distance.",skittish:"Mochi hops a little closer."},shoo:{happy:"Mochi looks confused but stays.",shy:"Mochi backs away.",skittish:"Mochi darts behind the bench!"},friend:"Mochi wants to follow you everywhere!"}},{id:"taro",name:"Taro",nameJa:"太郎",species:"shiba",emoji:"🐕",personality:"friendly",startT:.52,side:-1,offset:3,petGain:15,sitGain:10,shooLoss:15,reactions:{pet:{happy:"Taro wags his whole body!",shy:"Taro sniffs your hand.",skittish:"Taro yips once."},sit:{happy:"Taro sits proudly beside you.",shy:"Taro circles once, then rests.",skittish:"Taro keeps one eye on you."},shoo:{happy:"Taro whines softly.",shy:"Taro retreats to the stall.",skittish:"Taro hides under the awning!"},friend:"Taro is your loyal walking buddy now!"}},{id:"snow",name:"Snow",nameJa:"雪ちゃん",species:"rabbit",emoji:"🐰",personality:"shy",startT:.78,side:1,offset:4,petGain:5,sitGain:12,shooLoss:25,reactions:{pet:{happy:"Snow's nose twitches happily.",shy:"Snow flinches, then relaxes.",skittish:"Snow hops away a step."},sit:{happy:"Snow inches closer.",shy:"Snow appreciates the quiet company.",skittish:"Snow peeks from the grass."},shoo:{happy:"Snow hops off quickly.",shy:"Snow vanishes into the bushes!",skittish:"Snow is gone in a white blur!"},friend:"Snow trusts you enough to hop along!"}},{id:"kitsune",name:"Kitsune",nameJa:"きつね",species:"fox",emoji:"🦊",personality:"shy",startT:.64,side:-1,offset:5.5,petGain:6,sitGain:10,shooLoss:20,reactions:{pet:{happy:"Kitsune's tail swishes.",shy:"Kitsune watches with golden eyes.",skittish:"Kitsune steps back."},sit:{happy:"Kitsune settles on the stone steps.",shy:"Kitsune sits at a respectful distance.",skittish:"Kitsune hides behind the torii post."},shoo:{happy:"Kitsune trots toward the shrine.",shy:"Kitsune disappears behind the gate.",skittish:"Kitsune vanishes like a spirit!"},friend:"Kitsune pads quietly at your side."}},{id:"pippo",name:"Pippo",nameJa:"ピッポ",species:"duck",emoji:"🦆",personality:"friendly",startT:.94,side:-1,offset:3.5,petGain:12,sitGain:6,shooLoss:8,reactions:{pet:{happy:"Pippo quacks contentedly.",shy:"Pippo waddles in a circle.",skittish:"Pippo ruffles feathers."},sit:{happy:"Pippo floats near the dock.",shy:"Pippo preens on the pier.",skittish:"Pippo paddles away slowly."},shoo:{happy:"Pippo quacks and swims off.",shy:"Pippo dives underwater.",skittish:"Pippo flees to open water!"},friend:"Pippo waddles behind you on land!"}},{id:"maru",name:"Maru",nameJa:"まる",species:"cat",emoji:"🐈",personality:"skittish",startT:.36,side:1,offset:3.8,petGain:3,sitGain:8,shooLoss:30,reactions:{pet:{happy:"Maru tolerates exactly one pat.",shy:"Maru stiffens, then melts.",skittish:"Maru's tail puffs up!"},sit:{happy:"Maru watches from the wall.",shy:"Maru creeps a little closer.",skittish:"Maru stays on the wall, alert."},shoo:{happy:"Maru leaps to the roof.",shy:"Maru is already gone.",skittish:"Maru vanishes over the wall!"},friend:"Maru deigns to walk with you. Honor."}},{id:"buta",name:"Buta",nameJa:"ぶた",species:"pig",emoji:"🐷",personality:"friendly",startT:.42,side:-1,offset:3.5,petGain:14,sitGain:9,shooLoss:12,reactions:{pet:{happy:"Buta oinks happily and rolls over.",shy:"Buta snorts curiously.",skittish:"Buta backs up one step."},sit:{happy:"Buta flops down contentedly.",shy:"Buta roots at the grass.",skittish:"Buta watches from the shade."},shoo:{happy:"Buta trots to the next garden.",shy:"Buta disappears behind a stall.",skittish:"Buta squeals and runs!"},friend:"Buta waddles along beside you!"}},{id:"piko",name:"Piko",nameJa:"ピコ",species:"parrot",emoji:"🦜",personality:"friendly",startT:.3,side:1,offset:4.2,petGain:10,sitGain:7,shooLoss:10,reactions:{pet:{happy:"Piko chirps and bobs its head.",shy:"Piko tilts its head at you.",skittish:"Piko ruffles its feathers."},sit:{happy:"Piko perches on the shop sign.",shy:"Piko hops to a low branch.",skittish:"Piko flies to the roof."},shoo:{happy:"Piko squawks and flutters away.",shy:"Piko glides to the next awning.",skittish:"Piko vanishes into the trees!"},friend:"Piko hops along from sign to sign, following you!"}}];let Kr=null;function dv(s){Kr=s}const fv={cat:{key:"animal_cat",tint:15759400,tintStrength:.55},shiba:{key:"animal_dog",tint:15241280,tintStrength:.5},rabbit:{key:"animal_bunny",tint:13674728,tintStrength:.45},fox:{key:"animal_fox",tint:14701840,tintStrength:.6},duck:{key:"animal_duck",tint:16306208,tintStrength:.6},pig:{key:"animal_pig",tint:15765688,tintStrength:.55},parrot:{key:"animal_parrot",tint:1624200,tintStrength:.55}};function $s(s,e={x:1.2,y:.8,z:1.2}){const t=new te(new fe(e.x,e.y,e.z),new dt({transparent:!0,opacity:0,depthWrite:!1}));return t.position.y=e.y/2,t.userData.isHitArea=!0,s.add(t),t}function Zs(s,{cx:e,cy:t,cz:n=0,spread:i=.042,size:r=.02,pupilColor:a=1118498,irisColor:o=3170472}={}){const l=new dt({color:a}),c=new dt({color:o}),h=new dt({color:16777215});[-i,i].forEach(u=>{const d=new te(new Dt(r*1.15,8),c);d.position.set(e+.001,t,n+u),d.rotation.y=-Math.PI/2,s.add(d);const f=new te(new Dt(r*.72,8),l);f.position.set(e+.002,t,n+u),f.rotation.y=-Math.PI/2,s.add(f);const g=new te(new Dt(r*.3,6),h);g.position.set(e+.003,t+r*.45,n+u+r*.3),g.rotation.y=-Math.PI/2,s.add(g)})}function ia(s,e,t,n,i=14509696,r=.013){const a=new dt({color:i}),o=new te(new Ge(r,7,5),a);o.scale.set(1.3,.85,.8),o.position.set(e,t,n),s.add(o)}function sa(s,e,t,n,i=1){const r=new dt({color:1705992});[[-.022*i,-.006*i],[.022*i,-.006*i]].forEach(([a,o])=>{const l=new te(new Ge(.007*i,5,4),r);l.position.set(e,t+o,n+a),s.add(l)})}function pv(s,e,t,n,i=3){const r=new dt({color:8947848,transparent:!0,opacity:.7});for(let a=0;a<i;a++){const o=(a-1)*.012;[-1,1].forEach(l=>{const c=new te(new fe(.075,.003,.003),r);c.position.set(e,t+o,n+l*.015),c.rotation.y=l*.15,s.add(c)})}}function Ul(s,e,t,n,i=16755387){const r=new te(new Pt(.016,.038,3),new dt({color:i}));r.position.set(e,t,n),s.add(r)}function mv(s,e,t,n,i,r=.032){const a=ee(new Ge(r,7,5),H(i));a.scale.set(1.1,.55,.95),a.position.set(e,t,n),s.add(a)}function cs(s,e,t,n,i,r=.07,a=null){const o=ee(new Ve(.025,.028,r,6),H(i));o.position.set(e,t+r/2,n),s.add(o),mv(s,e,t,n,a??i)}function rl(s=15769664){const e=new we,t=H(s),n=H(16773344),i=ee(new Ge(.13,10,8),t);i.scale.set(1.25,.78,1.05),i.position.y=.14,e.add(i);const r=new te(new Ge(.075,8,6),n);r.scale.set(.85,.6,.6),r.position.set(.09,.14,0),e.add(r);const a=ee(new Ge(.1,10,8),t);a.position.set(.16,.215,0),e.add(a),[[-.038,.038],[.038,.038]].forEach(([f,g])=>{const _=ee(new Pt(.033,.068,3),t);_.position.set(.2,.315+g*.2,f),_.rotation.x=f<0?-.1:.1,e.add(_),Ul(e,.201,.318+g*.2,f,16751035)});const o=.255,l=.22,c=0;Zs(e,{cx:o,cy:l+.008,cz:c,spread:.038,size:.021,irisColor:2789472}),ia(e,o+.003,l-.022,c,15628185,.014),sa(e,o+.001,l-.038,c,.9),pv(e,o-.01,l-.02,c,3);const h=ee(new Ve(.018,.03,.24,6),t);h.position.set(-.16,.18,0),h.rotation.z=.75,e.userData.tail=h,e.add(h);const u=ee(new Ge(.032,7,5),n);u.position.set(-.265,.285,0),e.add(u);const d=s;return[[-.055,0],[.055,0],[-.04,.09],[.04,.09]].forEach(([f,g])=>{cs(e,.07+g,.02,f,d,.065)}),$s(e,{x:1.3,y:.75,z:1.3}),e}function gv(){const s=new we,e=H(15245392),t=H(16773328),n=ee(new Ge(.15,10,8),e);n.scale.set(1.32,.88,1.1),n.position.y=.15,s.add(n);const i=new te(new Ge(.09,8,6),t);i.scale.set(.75,.7,.55),i.position.set(.11,.17,0),s.add(i);const r=ee(new Ge(.12,10,8),e);r.position.set(.18,.24,0),s.add(r),[[-.048,0],[.048,0]].forEach(([h])=>{const u=ee(new Pt(.034,.075,3),e);u.position.set(.22,.35,h),u.rotation.x=h<0?-.15:.15,s.add(u),Ul(s,.221,.352,h,16764074)});const a=ee(new Ge(.055,8,6),t);a.scale.set(1,.75,.85),a.position.set(.295,.22,0),s.add(a),Zs(s,{cx:.35-.04,cy:.255,cz:0,spread:.046,size:.024,irisColor:5910544}),ia(s,.346,.22,0,1710618,.018),sa(s,.34,.202,0,1.1);const c=ee(new oi(.075,.025,6,10,Math.PI*1.4),e);return c.position.set(-.14,.32,0),c.rotation.set(.4,0,1.6),s.userData.tail=c,s.add(c),[[-.065,0],[.065,0],[-.05,.1],[.05,.1]].forEach(([h,u])=>{cs(s,.08+u,.02,h,15245392,.08,15245392)}),$s(s,{x:1.45,y:.8,z:1.45}),s}function _v(){const s=new we,e=H(16119285);H(16764125);const t=ee(new Ge(.11,10,8),e);t.scale.set(1.1,1.05,1),t.position.y=.12,s.add(t);const n=ee(new Ge(.1,10,8),e);n.position.set(.12,.23,0),s.add(n),[[-.036,0],[.036,0]].forEach(([o])=>{const l=ee(new Ve(.022,.026,.18,8),e);l.position.set(.11,.42,o),s.add(l);const c=ee(new Ge(.022,7,5),e);c.position.set(.11,.51,o),s.add(c);const h=new te(new Ve(.012,.014,.14,6),H(16759756));h.position.set(.112,.42,o),s.add(h)});const i=.215,r=.24;Zs(s,{cx:i,cy:r+.005,cz:0,spread:.036,size:.026,irisColor:13382468,pupilColor:4456465}),ia(s,i+.005,r-.018,0,16755404,.013),sa(s,i,r-.032,0,.85);const a=ee(new Ge(.038,8,6),e);return a.position.set(-.12,.16,0),s.add(a),s.userData.tail=a,[[-.04,0],[.04,0]].forEach(([o])=>{cs(s,.05,.02,o,16119285,.07)}),[[-.045,-.06],[.045,-.06]].forEach(([o,l])=>{cs(s,l,.02,o,16119285,.085,16119285)}),$s(s,{x:1.05,y:.7,z:1.05}),s}function xv(){const s=new we,e=H(15233088),t=H(16117992);H(2759184);const n=ee(new Ge(.12,10,8),e);n.scale.set(1.22,.8,1.05),n.position.y=.13,s.add(n);const i=new te(new Ge(.065,8,6),t);i.scale.set(.7,.7,.5),i.position.set(.1,.14,0),s.add(i);const r=ee(new Ge(.1,10,8),e);r.position.set(.15,.2,0),s.add(r),[[-.04,0],[.04,0]].forEach(([u])=>{const d=ee(new Pt(.03,.072,3),e);d.position.set(.19,.32,u),d.rotation.x=u<0?-.2:.2,s.add(d),Ul(s,.191,.322,u,16755370)});const a=new te(new Ge(.05,8,6),t);a.scale.set(1.1,.7,.75),a.position.set(.245,.195,0),s.add(a);const o=.248,l=.205;Zs(s,{cx:o-.025,cy:l+.01,cz:0,spread:.04,size:.022,irisColor:13666352,pupilColor:1705984}),ia(s,.255,l-.015,0,1710618,.016),sa(s,.252,l-.03,0,.9),[[-.05,0],[.05,0]].forEach(([u])=>{cs(s,.07,.02,u,15233088,.065,2759184)}),[[-.04,-.06],[.04,-.06]].forEach(([u,d])=>{cs(s,d,.02,u,15233088,.065,2759184)});const c=ee(new Ve(.04,.055,.22,7),e);c.position.set(-.14,.15,0),c.rotation.z=1,s.userData.tail=c,s.add(c);const h=ee(new Ge(.06,8,6),t);return h.position.set(-.26,.23,0),s.add(h),$s(s,{x:1.3,y:.75,z:1.3}),s}function Eh(){const s=new we,e=H(15786064),t=H(15759392),n=ee(new Ge(.12,10,8),e);n.scale.set(1.22,.95,1.12),n.position.y=.13,s.add(n),[-1,1].forEach(h=>{const u=ee(new Ge(.065,8,6),e);u.scale.set(.75,.55,.4),u.position.set(-.03,.17,h*.13),s.add(u)});const i=ee(new Ge(.085,10,8),e);i.position.set(.155,.23,0),s.add(i);const r=ee(new fe(.075,.022,.06),t);r.position.set(.238,.225,0),s.add(r);const a=ee(new fe(.065,.016,.054),t);a.position.set(.238,.208,0),s.add(a),Zs(s,{cx:.235-.022,cy:.25,cz:0,spread:.036,size:.02,irisColor:1718810,pupilColor:1118481});const c=ee(new Pt(.04,.07,4),e);return c.position.set(-.155,.21,0),c.rotation.z=-Math.PI/2+.4,s.userData.tail=c,s.add(c),[[-.04,0],[.04,0]].forEach(([h])=>{const u=ee(new fe(.065,.014,.05),t);u.position.set(.06,.015,h),s.add(u)}),$s(s,{x:1.2,y:.7,z:1.2}),s}const yv={cat:rl,shiba:gv,rabbit:_v,fox:xv,duck:Eh,pig:rl,parrot:Eh};function vv(s,e){const t=fv[s];if(t){const a=Kr==null?void 0:Kr.createInstance(t.key,{tint:t.tint??null,tintStrength:t.tintStrength??0});if(a){a.rotation.y=Math.PI;const o=new we;return o.add(a),o.userData.isLoadedModel=!0,o}}const i=(yv[s]??rl)(e);i.rotation.y=-Math.PI/2;const r=new we;return r.add(i),r.userData.tail=i.userData.tail,r}const Mv={cat:{bg:"rgba(40,18,28,0.82)",border:"#d06888",text:"#f8d0dc"},shiba:{bg:"rgba(40,28,10,0.82)",border:"#c88040",text:"#f8ddb0"},rabbit:{bg:"rgba(30,18,40,0.82)",border:"#aa70c8",text:"#e8c8f8"},fox:{bg:"rgba(42,20,10,0.82)",border:"#d06030",text:"#f8ccb0"},duck:{bg:"rgba(34,30,10,0.82)",border:"#c8a820",text:"#f0e890"},pig:{bg:"rgba(40,18,28,0.82)",border:"#e080a0",text:"#f8d0e0"},parrot:{bg:"rgba(18,34,28,0.82)",border:"#40b880",text:"#c8f8e0"}};function Sv(s,e,t="cat"){const r=document.createElement("canvas");r.width=160,r.height=46;const a=r.getContext("2d"),o=Mv[t]??{bg:"rgba(18,26,34,0.82)",border:"#5ababa",text:"#e8f4f4"},l=12;a.fillStyle=o.bg,a.strokeStyle=o.border,a.lineWidth=2.5,a.beginPath(),a.moveTo(l,2),a.lineTo(160-l,2),a.quadraticCurveTo(158,2,158,l),a.lineTo(158,46-l),a.quadraticCurveTo(158,44,160-l,44),a.lineTo(l,44),a.quadraticCurveTo(2,44,2,46-l),a.lineTo(2,l),a.quadraticCurveTo(2,2,l,2),a.closePath(),a.fill(),a.stroke(),a.fillStyle=o.text,a.font="bold 15px sans-serif",a.textAlign="center",a.textBaseline="middle",a.fillText(`${s} ${e}`,160/2,46/2);const c=new tn(r),h=new Cn(new bn({map:c,transparent:!0}));return h.position.y=.6,h.scale.set(1.1,.32,1),h}let Ur=null;function bv(){if(Ur)return Ur;const s=document.createElement("canvas");s.width=32,s.height=32;const e=s.getContext("2d");return e.fillStyle="#ff4488",e.beginPath(),e.arc(10,11,8,0,Math.PI*2),e.arc(22,11,8,0,Math.PI*2),e.fill(),e.beginPath(),e.moveTo(2,15),e.lineTo(16,29),e.lineTo(30,15),e.fill(),Ur=new tn(s),Ur}const eo=1.8,Ah=.7,Rs=.02;class wv{constructor(e,t,n){this.type="animal",this.path=t,this.definition=n,this.affinity=0,this.isPetCompanion=!1,this.state="idle",this.idlePhase=Math.random()*Math.PI*2,this.walkPhase=0,this.scaredTimer=0,this.followSpeed=3,this.range=5,this.wanderAngle=Math.random()*Math.PI*2,this.wanderTimer=Math.random()*3,this.isMoving=!1,this.mesh=vv(n.species);const i=Sv(n.emoji,n.name,n.species);this.mesh.userData.isLoadedModel?i.position.y=.85:(this.mesh.scale.setScalar(3.5),i.scale.divideScalar(3.5)),this.mesh.add(i),this.nameLabel=i,e.add(this.mesh),this._placeOnPath(),this.homePos=this.mesh.position.clone(),this.homeFacing=this.mesh.rotation.y,this.heartParticles=[],this.mesh.userData.interactable=this,this.mesh.traverse(r=>{r.userData.interactable=this})}spawnHearts(e=4,t="#ff4488"){const n=bv();for(let i=0;i<e;i++){const r=new bn({map:n,transparent:!0,opacity:1,color:t}),a=new Cn(r);a.scale.set(.18,.18,1),a.position.set((Math.random()-.5)*.25,.35+Math.random()*.1,(Math.random()-.5)*.2),a.userData.vy=.012+Math.random()*.01,a.userData.vx=(Math.random()-.5)*.006,a.userData.life=1,this.mesh.add(a),this.heartParticles.push(a)}}_placeOnPath(){const e=this.path.getPointAt(this.definition.startT),t=this.path.getTangentAt(this.definition.startT),n=new E(-t.z,0,t.x).multiplyScalar(this.definition.side??1);this.mesh.position.copy(e).add(n.multiplyScalar(this.definition.offset??3)),this.mesh.position.y=.02,this.mesh.rotation.y=Math.atan2(t.x,t.z)}get profile(){return this.definition}getHitTargets(){return[this.mesh]}distanceTo(e){const t=this.mesh.position.x-e.x,n=this.mesh.position.z-e.z;return Math.hypot(t,n)}canInteract(e){return this.distanceTo(e)<=this.range}interact(e){var t;(t=e.petUI)==null||t.show(this)}addAffinity(e){return this.affinity=Math.max(0,Math.min(100,this.affinity+e)),this.affinity}isFriend(){return this.affinity>=Fu}getReaction(e){var n,i,r;const t=this.definition.personality;return((i=(n=this.definition.reactions)==null?void 0:n[e])==null?void 0:i[t])??((r=this.definition.reactions)==null?void 0:r[e])??""}startFollowing(){this.state="following",this.isPetCompanion=!0,this.nameLabel&&(this.nameLabel.visible=!1)}stopFollowing(e=!0){this.state="idle",this.isPetCompanion=!1,this.nameLabel&&(this.nameLabel.visible=!0),e&&(this.mesh.position.copy(this.homePos),this.mesh.rotation.y=this.homeFacing)}scare(e=1.5){this.scaredTimer=e,this.state="scared"}applyAction(e){var i;const t=this.definition;let n=0;return e==="pet"?n=t.petGain??5:e==="sit"?n=t.sitGain??8:e==="shoo"&&(n=-(t.shooLoss??15)),this.addAffinity(n),e==="shoo"&&this.scare(2),{affinity:this.affinity,message:this.getReaction(e),isFriend:this.isFriend(),friendMessage:(i=this.definition.reactions)==null?void 0:i.friend}}update(e,t=null,n=0){for(let c=this.heartParticles.length-1;c>=0;c--){const h=this.heartParticles[c];h.userData.life-=e,h.position.y+=h.userData.vy,h.position.x+=h.userData.vx,h.material.opacity=Math.max(0,h.userData.life),h.scale.setScalar(.18*(.5+h.userData.life*.7)),h.userData.life<=0&&(this.mesh.remove(h),this.heartParticles.splice(c,1))}if(this.scaredTimer>0){this.scaredTimer-=e,this.idlePhase+=e*8,this.mesh.position.x=this.homePos.x+Math.sin(this.idlePhase*3)*.15,this.mesh.position.y=Rs,this.scaredTimer<=0&&(this.state=this.isPetCompanion?"following":"idle");return}if(this.state==="following"&&t){const c=Math.sin(n),h=Math.cos(n),u=t.x-c*2.2,d=t.z-h*2.2;this._followTarget?(this._followTarget.x+=(u-this._followTarget.x)*Math.min(1,e*4),this._followTarget.z+=(d-this._followTarget.z)*Math.min(1,e*4)):this._followTarget=new E(u,0,d);const f=this._followTarget.x-this.mesh.position.x,g=this._followTarget.z-this.mesh.position.z,_=Math.hypot(f,g);if(_>.8){const m=Math.min(this.followSpeed*e,_-.8);this.mesh.position.x+=f/_*m,this.mesh.position.z+=g/_*m;const b=(Math.atan2(f,g)-this.mesh.rotation.y+Math.PI*3)%(Math.PI*2)-Math.PI;this.mesh.rotation.y+=b*Math.min(1,e*8),this.walkPhase+=e*this.followSpeed*4,this.mesh.position.y=Rs+Math.abs(Math.sin(this.walkPhase))*.05}else{const m=(n-this.mesh.rotation.y+Math.PI*3)%(Math.PI*2)-Math.PI;this.mesh.rotation.y+=m*Math.min(1,e*4),this.mesh.position.y=Rs}this._animateTail(e,_>.8?6:2.5);return}if(this.wanderTimer-=e,this.wanderTimer<=0){const c=this.homePos.x-this.mesh.position.x,h=this.homePos.z-this.mesh.position.z;Math.hypot(c,h)>eo*.75?this.wanderAngle=Math.atan2(c,h):this.wanderAngle+=(Math.random()-.5)*2,this.wanderTimer=2+Math.random()*3}const i=this.homePos.x+Math.sin(this.wanderAngle)*eo,r=this.homePos.z+Math.cos(this.wanderAngle)*eo,a=i-this.mesh.position.x,o=r-this.mesh.position.z,l=Math.hypot(a,o);if(l>.25){const c=Math.min(Ah*e,l);this.mesh.position.x+=a/l*c,this.mesh.position.z+=o/l*c,this.mesh.rotation.y=Math.atan2(a,o),this.walkPhase+=e*Ah*4,this.mesh.position.y=Rs+Math.abs(Math.sin(this.walkPhase))*.035,this.isMoving=!0}else if(this.idlePhase+=e*1.8,this.mesh.position.y=Rs+Math.sin(this.idlePhase)*.008,this.isMoving=!1,t&&this.distanceTo(t)<6){const c=t.x-this.mesh.position.x,h=t.z-this.mesh.position.z;Math.hypot(c,h)>.1&&(this.mesh.rotation.y=Math.atan2(c,h))}this._animateTail(e,this.isMoving?4.5:2.5)}_animateTail(e,t=3){var i;const n=(i=this.mesh.userData)==null?void 0:i.tail;n&&(this.idlePhase+=e*t,n.userData.baseRotZ===void 0&&(n.userData.baseRotZ=n.rotation.z),n.rotation.z=n.userData.baseRotZ+Math.sin(this.idlePhase)*.35)}}const Ch=["大吉 · Great Fortune! The road ahead is bright.","吉 · Good Luck. Keep walking forward.","中吉 · Moderate Fortune. Steady steps bring reward.","小吉 · Small Fortune. Good things come quietly.","末吉 · Future Fortune. Patience will be rewarded.","凶 · Misfortune today. Tomorrow holds new hope."];function Tv(){return Ch[Math.floor(Math.random()*Ch.length)]}const Xs={bench:{id:"bench",label:"Bench",range:3.5,actions:{sit:{message:"You sit for a moment. The town feels unhurried.",sitDuration:4,sitHeight:.4}}},cherry_tree:{id:"cherry_tree",label:"Cherry tree",range:4,actions:{admire:{message:"🌸 Pink petals drift down. For a moment, nothing else matters.",journal:{title:"Cherry Blossom Moment",body:"Petals fall without hurry. The tree teaches patience."}}}},shrine_tree:{id:"shrine_tree",label:"Shrine tree",range:4.5,actions:{listen:{message:"🌿 Wind rustles the leaves. Even the birds seem to whisper here."}}},shrine:{id:"shrine",label:"Shrine",range:7,hitRadius:2.5},vending:{id:"vending",label:"Vending Machine",shopId:"vending",range:3,hitRadius:.6}};function Ev(s=1.2,e=2){const t=new te(new Ve(s,s,e,8),new dt({transparent:!0,opacity:0,depthWrite:!1}));return t.position.y=e/2,t}class Js{constructor(e,t,n,i=0){this.type="prop",this.definition=t,this.range=t.range??3.5,this.mesh=new we,this.mesh.position.copy(n),this.mesh.rotation.y=i,this.hitVolume=Ev(t.hitRadius??1.2),this.mesh.add(this.hitVolume),this.mesh.userData.interactable=this,this.hitVolume.userData.interactable=this,e.add(this.mesh)}getHitTargets(){return[this.hitVolume]}distanceTo(e){const t=this.mesh.position.x-e.x,n=this.mesh.position.z-e.z;return Math.hypot(t,n)}canInteract(e){return this.distanceTo(e)<=this.range}getSitPosition(e=.4){const t=this.mesh.position.clone(),n=.55;return t.x-=Math.sin(this.mesh.rotation.y)*n,t.z-=Math.cos(this.mesh.rotation.y)*n,t.y=e,t}interact(e){var r,a,o,l,c,h,u,d,f,g,_,m,p,b,w,M,R,C;const t=this.definition;if(t.shopId){(r=e.game)==null||r.openShop(t.shopId);return}if(t.id==="shrine"){const A=Tv();(a=e.dialogue)==null||a._showToast(`⛩️ ${A}`),(l=(o=e.dialogue)==null?void 0:o.addJournalEntry)==null||l.call(o,"御神籤 · Fortune",A,"神社 · Shrine"),(h=(c=e.game)==null?void 0:c.mood)==null||h.boost(18,"Blessed ⛩️"),(d=(u=e.game)==null?void 0:u._updateMoodHUD)==null||d.call(u);return}const n=t.defaultAction??"interact",i=(f=t.actions)==null?void 0:f[n];if(i){if(i.sitDuration){const A=i.sitHeight??.4,L=this.getSitPosition(A);(_=(g=e.game)==null?void 0:g.playerRest)==null||_.call(g,i.sitDuration,L,{sitY:A,facing:this.mesh.rotation.y}),(p=(m=e.game)==null?void 0:m.mood)==null||p.boost(6,"Taking a rest"),(w=(b=e.game)==null?void 0:b._updateMoodHUD)==null||w.call(b)}(M=e.dialogue)==null||M._showToast(i.message),i.journal&&((C=(R=e.dialogue)==null?void 0:R.addJournalEntry)==null||C.call(R,i.journal.title,i.journal.body,t.label))}}}function Av(s,e,t=0){const n={...Xs.bench,defaultAction:"sit",hitRadius:1.4};return new Js(s,n,e,t)}function Cv(s,e,t="cherry_tree"){const n={...Xs[t]??Xs.cherry_tree,defaultAction:t==="shrine_tree"?"listen":"admire",hitRadius:1.8};return new Js(s,n,e,0)}function Rv(s,e,t=0){const n={...Xs.shrine};return new Js(s,n,e,t)}function Iv(s,e,t,n,i){const r={id:`shop_${n}`,label:i,shopId:n,range:7,hitRadius:2.5};return new Js(s,r,e,t)}function Pv(s,e,t=0){const n={...Xs.vending};return new Js(s,n,e,t)}const ku={bookshop:{id:"bookshop",label:"書店 文房 · Bunbou Books",emoji:"📚",items:[{id:"townMap",name:"町の地図",nameEn:"Town Map",price:200,emoji:"🗺️",desc:"A hand-drawn map of every alley."},{id:"novel",name:"小説",nameEn:"Novel",price:350,emoji:"📖",desc:"A quiet seaside tale.",reward:{type:"journal",title:"小説を読んだ",body:"A slow story about a lighthouse keeper. You feel calm."}},{id:"postcard",name:"ポストカード",nameEn:"Postcard Set",price:150,emoji:"💌",desc:"Cherry blossom illustrations."}]},ramen:{id:"ramen",label:"麺処 山田 · Yamada Ramen",emoji:"🍜",items:[{id:"ramen",name:"ラーメン",nameEn:"Ramen Bowl",price:800,emoji:"🍜",desc:"Rich tonkotsu broth. Gives a short speed boost!",reward:{type:"speedBoost",amount:1.6,duration:14,message:"🍜 Energy surges through you!"}},{id:"gyoza",name:"餃子",nameEn:"Gyoza",price:400,emoji:"🥟",desc:"Crispy pan-fried dumplings."},{id:"greentea",name:"緑茶",nameEn:"Green Tea",price:150,emoji:"🍵",desc:"A calming cup."}]},florist:{id:"florist",label:"花屋 はな · Hana Florist",emoji:"🌸",items:[{id:"sakura",name:"桜の花束",nameEn:"Sakura Bouquet",price:600,emoji:"🌸",desc:"Delicate cherry blossoms."},{id:"wildflowers",name:"野花",nameEn:"Wildflowers",price:300,emoji:"💐",desc:"A mix of local wildflowers."},{id:"potplant",name:"観葉植物",nameEn:"Potted Plant",price:480,emoji:"🪴",desc:"A small fern to carry home."}]},cafe:{id:"cafe",label:"喫茶 木漏れ · Komorebi Cafe",emoji:"☕",items:[{id:"matcha",name:"抹茶ラテ",nameEn:"Matcha Latte",price:550,emoji:"🍵",desc:"Velvety and sweet."},{id:"coffee",name:"コーヒー",nameEn:"Coffee",price:450,emoji:"☕",desc:"A smooth morning cup."},{id:"wagashi",name:"和菓子",nameEn:"Wagashi",price:300,emoji:"🍡",desc:"Traditional mochi sweets."}]},market:{id:"market",label:"朝市 · Morning Market",emoji:"🛒",items:[{id:"onigiri",name:"おにぎり",nameEn:"Onigiri",price:180,emoji:"🍙",desc:"Rice ball with pickled plum."},{id:"mikan",name:"みかん",nameEn:"Mikan Oranges",price:200,emoji:"🍊",desc:"Sweet local oranges."},{id:"yakitori",name:"焼き鳥",nameEn:"Yakitori",price:250,emoji:"🍢",desc:"Skewered grilled chicken."}]},fishmarket:{id:"fishmarket",label:"魚屋 水樹 · Mizuki Fish",emoji:"🐟",items:[{id:"taiyaki",name:"たい焼き",nameEn:"Taiyaki",price:250,emoji:"🐟",desc:"Fish-shaped cake with sweet bean."},{id:"ikayaki",name:"イカ焼き",nameEn:"Grilled Squid",price:350,emoji:"🦑",desc:"Fresh off the harbor grill."},{id:"kanikama",name:"蟹かまぼこ",nameEn:"Crab Stick",price:200,emoji:"🦀",desc:"Local catch from the bay."}]},vending:{id:"vending",label:"自動販売機 · Vending Machine",emoji:"🥤",items:[{id:"cola",name:"コーラ",nameEn:"Cola",price:120,emoji:"🥤",desc:"Ice-cold soda."},{id:"juice",name:"ジュース",nameEn:"Juice",price:120,emoji:"🧃",desc:"Sweet fruit juice."},{id:"water",name:"水",nameEn:"Water",price:80,emoji:"💧",desc:"Pure mineral water."}]}};function Lv(s,e,t=100){let n=0,i=1/0;for(let r=0;r<=t;r++){const a=r/t,l=s.getPointAt(a).distanceToSquared(e);l<i&&(i=l,n=a)}return n}const to=[{tMax:.08,label:"静かな入口 · Town Entrance"},{tMax:.16,label:"本屋通り · Bookshop Row"},{tMax:.28,label:"桜通り · Sakura Street"},{tMax:.38,label:"鳥居坂 · Torii Slope"},{tMax:.48,label:"朝市 · Morning Market"},{tMax:.58,label:"神社の参道 · Shrine Approach"},{tMax:.68,label:"公園 · Town Park"},{tMax:.78,label:"港の見晴台 · Harbor View"},{tMax:.88,label:"漁港 · Fishing Port"},{tMax:.96,label:"海岸通り · Coastal Path"},{tMax:1,label:"岬の灯台 · Cape Outlook"}];class Fl{constructor(e){this.canvas=e,this.clock=new yu,this.raycaster=new Il,this.ready=!1,this.renderer=new K_({canvas:e,antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Ih,this.renderer.outputColorSpace=xt,this.renderer.toneMapping=Wn,this.scene=new gf,this.scene.background=new _e(11066580),this.camera=new Wt(42,window.innerWidth/window.innerHeight,.1,280),this.input=new Fy(e),this.cameraTarget=new E,this._cameraSmoothed=new E,this.outfitOpen=!1,this.composer=new Q_(this.renderer),this.composer.addPass(new ex(this.scene,this.camera)),this.composer.addPass(new nx),this._fxaaPass=new Eu(tx),this._fxaaPass.material.uniforms.resolution.value.set(1/(window.innerWidth*Math.min(window.devicePixelRatio,2)),1/(window.innerHeight*Math.min(window.devicePixelRatio,2))),this.composer.addPass(this._fxaaPass),window.addEventListener("resize",()=>this._onResize())}static async create(e,t){t==null||t("Initializing WebGL…");let n;try{n=new Fl(e)}catch(i){throw new Error(`WebGL failed: ${i.message}`)}try{t==null||t("Building town…"),n.modelLoader=new Xx,await n.modelLoader.loadAll(void 0,t),Uy(n.modelLoader),dv(n.modelLoader),n.town=new gy(n.scene,n.modelLoader),await n.town.build(t),n.path=n.town.getPath(),n.path.getClosestPointT=r=>Lv(n.path,r),t==null||t("Spawning characters…"),n.player=new Oy(n.scene,n.path),n.player.mesh.traverse(r=>{r.userData.dynamic=!0});const i=n.path.getTangentAt(.05);n.input.cameraAngle=Math.atan2(-i.x,-i.z),n.npcs=[...Ky,...qy].map(r=>new jy(n.scene,n.path,r)),n.npcs.forEach(r=>r.mesh.traverse(a=>{a.userData.dynamic=!0})),t==null||t("Spawning animals…"),n.animals=uv.map(r=>new wv(n.scene,n.path,r)),n.animals.forEach(r=>r.mesh.traverse(a=>{a.userData.dynamic=!0})),n.worldProps=[];for(const r of n.town.getInteractableSpawns()){const{propId:a,position:o,rotationY:l}=r;if(a==="bench")n.worldProps.push(Av(n.scene,o,l));else if(a==="cherry_tree"||a==="shrine_tree")n.worldProps.push(Cv(n.scene,o,a));else if(a==="shrine")n.worldProps.push(Rv(n.scene,o,l));else if(a==="vending")n.worldProps.push(Pv(n.scene,o,l));else if(a.startsWith("shop_")){const c=a.slice(5),h=ku[c];h&&n.worldProps.push(Iv(n.scene,o,l,c,h.label))}}return n.interactables=new tv,n.interactables.registerAll(n.npcs,n.animals,n.worldProps),n.scene.traverse(r=>{r.isMesh&&!r.userData.dynamic&&(r.castShadow=!1,r.receiveShadow=!0)}),[...n.npcs,...n.animals].forEach(r=>{r.mesh.traverse(a=>{a.isMesh&&(a.castShadow=!0)})}),n.player.mesh.traverse(r=>{r.isMesh&&(r.castShadow=!0)}),n.ready=!0,n}catch(i){throw i}}initInteraction(e,t,n){var a;this.dialogue=e,this.petUI=t,this.shopUI=n,this.companion=null,this.petCompanion=null,this.yen=1e3,this.locationTag=document.getElementById("location-tag"),this.petTag=document.getElementById("pet-companion-tag"),this.petLabel=document.getElementById("pet-companion-label"),this.petPartBtn=document.getElementById("pet-companion-part"),e.setGame(this),e.onConversationEnd=()=>{var o;(o=this.mood)==null||o.boost(9,"Good chat!"),this._updateMoodHUD()},n&&(n.setGame(this),n.onPurchase=()=>{var o;(o=this.mood)==null||o.boost(7,"Treat yourself!"),this._updateMoodHUD()}),this.interaction=new Qy(this.player,this.interactables,e,this,t,n),this.interaction.setRewardHandler(o=>this._handleReward(o)),t==null||t.setHandlers({onAction:(o,l)=>this._handlePetAction(o,l),onInvite:o=>this.setPetCompanion(o)}),(a=this.petPartBtn)==null||a.addEventListener("click",()=>this.clearPetCompanion()),this.yenEl=document.getElementById("yen-display"),this._updateYenHUD();const i=document.getElementById("minimap"),r=document.getElementById("minimap-wrap");i?(this.minimap=new lv(i,this.path,r),this.minimap.setPlayer(this.player),this.minimap.setNpcs(this.npcs),this.minimap.setAnimals(this.animals),this.minimap.setWorldProps(this.worldProps),this.minimap.update()):console.warn("Minimap: #minimap canvas not found in DOM"),this.mood=new hv,this.moodEl=document.getElementById("mood-display"),this.moodBar=document.getElementById("mood-bar-fill"),this.moodFloat=document.getElementById("mood-float"),this.moodFloat&&this.mood.setFloatContainer(this.moodFloat),this._updateMoodHUD()}spendYen(e){this.yen=Math.max(0,this.yen-e),this._updateYenHUD()}earnYen(e){this.yen+=e,this._updateYenHUD()}_updateYenHUD(){this.yenEl&&(this.yenEl.textContent=`💴 ¥${this.yen}`)}_updateMoodHUD(){var t;if(!this.mood)return;const e=this.mood.getMood();this.moodEl&&(this.moodEl.textContent=`${e.emoji} ${e.name}`,this.moodEl.style.borderColor=e.color),this.moodBar&&(this.moodBar.style.width=`${this.mood.getPercent()}%`,this.moodBar.style.background=e.color),(t=this.player)!=null&&t.mesh&&e.expression&&On(this.player.mesh,e.expression)}openShop(e){this.shopUI&&e&&this.shopUI.open(e)}playerRest(e,t,n={}){this.player.rest(e,t,n)}_handlePetAction(e,t){const n=e.applyAction(t);return n.message&&this.dialogue.showToast(n.message),n.isFriend&&t!=="shoo"&&this.dialogue.showToast(`${e.definition.name} seems to really like you! ♥`),this.mood&&(t==="pet"?this.mood.boost(10,"Petted a friend!"):t==="sit"?this.mood.boost(7,"Cozy moment"):t==="shoo"&&this.mood.drain(5),this._updateMoodHUD()),n}setCompanion(e){var t,n,i;this.companion&&this.companion!==e&&(this._removeCompanionRing(this.companion),this.companion.stopFollowing(!0)),this.companion=e,e.startFollowing(),this._addCompanionRing(e),this.dialogue.setCompanionTag(e),(t=this.minimap)==null||t.setCompanion(e),(i=(n=this.dialogue)._updateDialogueWalkButtons)==null||i.call(n)}clearCompanion(){var e,t,n;this.companion&&(this._removeCompanionRing(this.companion),this.companion.stopFollowing(!0),this.companion=null,this.dialogue.setCompanionTag(null),(e=this.minimap)==null||e.setCompanion(null),(n=(t=this.dialogue)._updateDialogueWalkButtons)==null||n.call(t))}_addCompanionRing(e){if(e.mesh.userData.companionRing){e.mesh.userData.companionRing.visible=!0;return}const t=new te(new oi(.52,.045,6,24),new dt({color:6351064,transparent:!0,opacity:.82}));t.rotation.x=Math.PI/2,t.position.y=.06,e.mesh.add(t),e.mesh.userData.companionRing=t}_removeCompanionRing(e){var n,i;const t=(i=(n=e.mesh)==null?void 0:n.userData)==null?void 0:i.companionRing;t&&(t.visible=!1)}setPetCompanion(e){var t,n,i;this.petCompanion&&this.petCompanion!==e&&this.petCompanion.stopFollowing(!0),this.petCompanion=e,(t=this.minimap)==null||t.setPetCompanion(e),(n=this.mood)==null||n.boost(12,`${e.definition.name} joined!`),this._updateMoodHUD(),e.startFollowing(),this._setPetCompanionTag(e),this.dialogue.showToast(((i=e.definition.reactions)==null?void 0:i.friend)??`${e.definition.name} is following you!`)}clearPetCompanion(){this.petCompanion&&(this.petCompanion.stopFollowing(!0),this.petCompanion=null,this._setPetCompanionTag(null),this.dialogue.showToast("Your pet friend headed home."))}_setPetCompanionTag(e){this.petTag&&(e?(this.petLabel&&(this.petLabel.textContent=`${e.definition.emoji} ${e.definition.name} is following`),this.petTag.classList.remove("hidden")):this.petTag.classList.add("hidden"))}_handleReward(e){var t,n,i,r,a,o,l;e.type==="speedBoost"?(this.player.applySpeedBoost(e.amount,e.duration),e.message&&((t=this.dialogue)==null||t.showToast(e.message)),(n=this.mood)==null||n.boost(6,"Energy boost!")):e.type==="companion"?(this.setCompanion(e.npc),(i=this.mood)==null||i.boost(14,"New friend!")):e.type==="dismissCompanion"?(this.clearCompanion(),(r=this.mood)==null||r.drain(4)):e.type==="journal"&&((o=(a=this.dialogue)==null?void 0:a.addJournalEntry)==null||o.call(a,e.title,e.body,"購入 · Purchase"),(l=this.mood)==null||l.boost(8,"Memory made"))}_updateLocationTag(){if(!this.locationTag||!this.path)return;const e=this.path.getClosestPointT(this.player.position),t=to.find(n=>e<=n.tMax)??to[to.length-1];this.locationTag.textContent=t.label}_onResize(){var r;const e=window.innerWidth,t=window.innerHeight,n=Math.min(window.devicePixelRatio,2);this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),this.composer.setSize(e,t),this._fxaaPass&&this._fxaaPass.material.uniforms.resolution.value.set(1/(e*n),1/(t*n));const i=document.getElementById("minimap-wrap");(r=this.minimap)!=null&&r.resize&&i&&this.minimap.resize(i.clientWidth)}_updateCamera(){if(!this.player)return;const e=this.player.position,t=this.input.cameraAngle,n=this.input.cameraPitch,i=this.input.cameraDistance,r=1.95,a=e.clone().add(new E(0,r,0));this.cameraTarget.lerp(a,.22);const o=i*Math.cos(n),l=new E(Math.sin(t)*o,Math.sin(n)*i+i*.08,Math.cos(t)*o),c=this.cameraTarget.clone().add(l);this._cameraSmoothed.lengthSq()<.001?this._cameraSmoothed.copy(c):this._cameraSmoothed.lerp(c,.22),this.camera.position.copy(this._cameraSmoothed),this.camera.lookAt(this.cameraTarget)}update(){var n,i,r,a,o,l,c,h,u,d;if(!this.ready)return;const e=Math.min(this.clock.getDelta(),.05);this.input.update();const t=((n=this.interaction)==null?void 0:n.isBlocking())??((i=this.dialogue)==null?void 0:i.isBlocking())??((r=this.shopUI)==null?void 0:r.isOpen())??this.outfitOpen??!1;if(this.input.dialogueOpen=t,this.input.outfitOpen=this.outfitOpen,t?this.dialogue.isOpen()?(this.input.consumeKey("KeyE")||this.input.consumeKey("Space")||this.input.consumeKey("Enter"))&&this.dialogue.tryAdvanceFromKey():this.dialogue.approachOpen&&((this.input.consumeKey("KeyE")||this.input.consumeKey("Enter"))&&this.dialogue._onChatClicked(),this.input.consumeKey("KeyW")&&(this.input.keys.AltLeft||this.input.keys.AltRight)&&this.dialogue._onWalkClicked(),(this.input.consumeKey("KeyX")||this.input.consumeKey("Backspace"))&&(this.companion&&((a=this.dialogue.npc)!=null&&a.isCompanion)?this.dialogue._onPartClicked():this.dialogue._onIgnoreClicked())):(o=this.interaction)==null||o.update(this.input,this.camera,this.canvas),this.player.update(this.input,e,this.town.getGroundMeshes()),this.npcs.forEach(f=>f.update(e,this.player.position,this.player.facing)),(h=(c=(l=this.companion)==null?void 0:l.mesh)==null?void 0:c.userData)!=null&&h.companionRing){const f=this.companion.mesh.userData.companionRing;f.material.opacity=.5+Math.sin(this.clock.elapsedTime*3)*.3,f.rotation.z+=e*.8}(u=this.animals)==null||u.forEach(f=>f.update(e,this.player.position,this.player.facing)),this._updateLocationTag(),this.mood&&(this.mood.update(e),this._updateMoodHUD()),this.minimap&&this.interactables&&this.player&&this.minimap.setNearbyInteractables(this.interactables.findAllInRange(this.player.position,20)),(d=this.minimap)==null||d.update(),this.town.update(this.clock.elapsedTime),this._updateCamera(),this.input.endFrame()}render(){this.composer.render()}start(){const e=()=>{requestAnimationFrame(e),this.update(),this.render()};e()}}class Dv{constructor(e){var t,n,i,r,a;this.modal=e.modal,this.portrait=e.portrait,this.nameEl=e.name,this.personalityEl=e.personality,this.heartsEl=e.hearts,this.petBtn=e.petBtn,this.sitBtn=e.sitBtn,this.shooBtn=e.shooBtn,this.leaveBtn=e.leaveBtn,this.inviteBtn=e.inviteBtn,this.animal=null,this.open=!1,this.onAction=null,this.onInvite=null,(t=this.petBtn)==null||t.addEventListener("click",()=>this._action("pet")),(n=this.sitBtn)==null||n.addEventListener("click",()=>this._action("sit")),(i=this.shooBtn)==null||i.addEventListener("click",()=>this._action("shoo")),(r=this.leaveBtn)==null||r.addEventListener("click",()=>this.hide()),(a=this.inviteBtn)==null||a.addEventListener("click",()=>this._invite())}setHandlers({onAction:e,onInvite:t}){this.onAction=e,this.onInvite=t}isOpen(){return this.open}show(e){!e||!this.modal||(this.animal=e,this.open=!0,this._render(),this.modal.classList.remove("hidden"))}hide(){var e;this.open=!1,this.animal=null,(e=this.modal)==null||e.classList.add("hidden")}_render(){var i;const e=this.animal;if(!e)return;const t=e.definition;this.portrait.textContent=t.emoji,this.nameEl.textContent=`${t.nameJa} · ${t.name}`,this.personalityEl.textContent=`${t.species} · ${t.personality}`,this._renderHearts(e.affinity);const n=e.affinity>=Fu;(i=this.inviteBtn)==null||i.classList.toggle("hidden",!n||e.isPetCompanion),n&&!e.isPetCompanion&&(this.inviteBtn.textContent=`🐾 Invite ${t.name} to follow`)}_renderHearts(e){if(!this.heartsEl)return;const t=Math.floor(e/20);this.heartsEl.innerHTML="";for(let n=0;n<5;n++){const i=document.createElement("span");i.className="pet-heart"+(n<t?" filled":""),i.textContent=n<t?"♥":"♡",this.heartsEl.appendChild(i)}}_action(e){var t,n,i,r,a;this.animal&&((t=this.onAction)==null||t.call(this,this.animal,e),e==="pet"?(i=(n=this.animal).spawnHearts)==null||i.call(n,5,"#ff4488"):e==="sit"?(a=(r=this.animal).spawnHearts)==null||a.call(r,2,"#ffcc00"):e==="shoo"&&setTimeout(()=>this.hide(),500),this._render())}_invite(){var e;this.animal&&((e=this.onInvite)==null||e.call(this,this.animal),this.hide())}refresh(){this.open&&this.animal&&this._render()}}class Nv{constructor(e,t){var n,i;this.modal=e.modal,this.portrait=e.portrait,this.nameEl=e.name,this.yenEl=e.yen,this.itemsEl=e.items,this.closeBtn=e.closeBtn,this.catalog=t,this._open=!1,this._game=null,this._currentShop=null,(n=this.closeBtn)==null||n.addEventListener("click",()=>this.close()),(i=this.modal)==null||i.addEventListener("click",r=>{r.target===this.modal&&this.close()})}setGame(e){this._game=e}isOpen(){return this._open}open(e){var n;const t=this.catalog[e];t&&(this._currentShop=t,this._open=!0,this.portrait&&(this.portrait.textContent=t.emoji),this.nameEl&&(this.nameEl.textContent=t.label),this._refreshYen(),this._renderItems(t),(n=this.modal)==null||n.classList.remove("hidden"))}close(){var e;this._open=!1,this._currentShop=null,(e=this.modal)==null||e.classList.add("hidden")}_refreshYen(){this.yenEl&&this._game&&(this.yenEl.textContent=`💴 ¥${this._game.yen}`)}_renderItems(e){this.itemsEl&&(this.itemsEl.innerHTML="",e.items.forEach(t=>{const n=!this._game||this._game.yen>=t.price,i=document.createElement("div");i.className="shop-item",i.innerHTML=`
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
      `,i.querySelector(".shop-buy-btn").addEventListener("click",()=>this._buy(t)),this.itemsEl.appendChild(i)}))}_buy(e){var t,n,i;if(this._game){if(this._game.yen<e.price){(t=this._game.dialogue)==null||t.showToast("お金が足りない · Not enough yen!");return}this._game.spendYen(e.price),(n=this._game.dialogue)==null||n.showToast(`${e.emoji} ${e.nameEn} — ¥${e.price} spent!`),e.reward&&this._game._handleReward(e.reward),(i=this.onPurchase)==null||i.call(this),this._refreshYen(),this._currentShop&&this._renderItems(this._currentShop)}}}const Fr=[{key:"character_female_a",label:"Mage"},{key:"character_female_a",label:"Arcane Mage",tint:8921292,tintStrength:.45},{key:"character_female_a",label:"Ice Mage",tint:2142463,tintStrength:.45},{key:"character_female_a",label:"Fire Mage",tint:16726016,tintStrength:.48},{key:"character_female_a",label:"Nature Druid",tint:3713088,tintStrength:.45},{key:"character_female_b",label:"Rogue"},{key:"character_female_b",label:"Shadow Rogue",tint:1579066,tintStrength:.6},{key:"character_female_b",label:"Forest Scout",tint:3832368,tintStrength:.42},{key:"character_female_b",label:"Crimson Thief",tint:13377568,tintStrength:.45},{key:"character_female_c",label:"Wanderer"},{key:"character_female_c",label:"Desert Wanderer",tint:13668400,tintStrength:.42},{key:"character_female_c",label:"Sea Wanderer",tint:1609920,tintStrength:.42},{key:"character_male_a",label:"Knight"},{key:"character_male_a",label:"Paladin",tint:15779872,tintStrength:.42},{key:"character_male_a",label:"Dark Knight",tint:2099240,tintStrength:.6},{key:"character_male_a",label:"Iron Guard",tint:6320256,tintStrength:.45},{key:"character_male_b",label:"Barbarian"},{key:"character_male_b",label:"Berserker",tint:13113368,tintStrength:.45},{key:"character_male_b",label:"Thunder Chief",tint:2121936,tintStrength:.42},{key:"character_male_c",label:"Duelist"},{key:"character_male_c",label:"Night Stalker",tint:1054768,tintStrength:.6},{key:"character_male_c",label:"Golden Blade",tint:15249440,tintStrength:.45}],kr=[{tint:null,label:"Default"},{tint:15781984,label:"Sunny"},{tint:15235192,label:"Coral"},{tint:7911656,label:"Sky"},{tint:8964216,label:"Mint"},{tint:13138152,label:"Lilac"},{tint:2105376,label:"Obsidian"}],Br=[{id:"none",label:"None"},{id:"class_hat",label:"Class Hat"},{id:"tophat",label:"Top Hat"},{id:"witchhat",label:"Witch Hat"},{id:"crown",label:"Crown"},{id:"flowerCrown",label:"Flower Crown"},{id:"halo",label:"Halo"},{id:"catears",label:"Cat Ears"},{id:"beret",label:"Beret"},{id:"piratecap",label:"Pirate Cap"}],no=[{label:"Classic",tint:null},{label:"Golden",tint:15781984},{label:"White",tint:15790320},{label:"Dark",tint:2763306},{label:"Red",tint:15224912}];class Uv{constructor(e,t){var n;this.modal=e.modal,this.closeBtn=e.closeBtn,this.modelLabel=e.modelLabel,this.accentLabel=e.accentLabel,this.hatLabel=e.hatLabel,this.shoesLabel=e.shoesLabel,this.game=t,this.indices={model:0,accent:0,hat:0,shoes:0},this.open=!1,(n=this.closeBtn)==null||n.addEventListener("click",()=>this.hide()),this._wirePair("model",e.modelPrev,e.modelNext,Fr),this._wirePair("accent",e.accentPrev,e.accentNext,kr),this._wirePair("hat",e.hatPrev,e.hatNext,Br),this._wirePair("shoes",e.shoesPrev,e.shoesNext,no)}_wirePair(e,t,n,i){t==null||t.addEventListener("click",()=>this._cycle(e,i,-1)),n==null||n.addEventListener("click",()=>this._cycle(e,i,1))}_cycle(e,t,n){this.indices[e]=(this.indices[e]+n+t.length)%t.length,this._applyOutfit(),this._updateLabels()}_applyOutfit(){var l;const e=Fr[this.indices.model],t=kr[this.indices.accent],n=Br[this.indices.hat],i=no[this.indices.shoes];let r,a;t.tint!==null?(r=t.tint,a=.3):i.tint!==null?(r=i.tint,a=.22):(r=e.tint??null,a=e.tintStrength??.22);const o=(l=this.game)==null?void 0:l.player;o&&(o.setOutfit({modelKey:e.key,tint:r,tintStrength:a}),Uu(o.mesh,n.id))}_updateLabels(){this.modelLabel&&(this.modelLabel.textContent=Fr[this.indices.model].label),this.accentLabel&&(this.accentLabel.textContent=kr[this.indices.accent].label),this.hatLabel&&(this.hatLabel.textContent=Br[this.indices.hat].label),this.shoesLabel&&(this.shoesLabel.textContent=no[this.indices.shoes].label)}_syncFromPlayer(){var a,o,l,c,h,u;const e=(o=(a=this.game)==null?void 0:a.player)==null?void 0:o.outfit;if(!e)return;const t=Fr.findIndex(d=>d.key===e.modelKey);t>=0&&(this.indices.model=t);const n=kr.findIndex(d=>d.tint===e.tint);n>=0&&(this.indices.accent=n);const i=((u=(h=(c=(l=this.game)==null?void 0:l.player)==null?void 0:c.mesh)==null?void 0:h.userData)==null?void 0:u.accessoryId)??"none",r=Br.findIndex(d=>d.id===i);r>=0&&(this.indices.hat=r),this._updateLabels()}show(){this.modal&&(this.open=!0,this._syncFromPlayer(),this.modal.classList.remove("hidden"),this.game&&(this.game.outfitOpen=!0,this._savedCamera={angle:this.game.input.cameraAngle,pitch:this.game.input.cameraPitch,distance:this.game.input.cameraDistance},this.game.input.cameraPitch=.38,this.game.input.cameraDistance=3.8,this.game.input.cameraAngle=this.game.player.facing+Math.PI))}hide(){var e;this.open=!1,(e=this.modal)==null||e.classList.add("hidden"),this.game&&(this.game.outfitOpen=!1,this._savedCamera&&(this.game.input.cameraAngle=this._savedCamera.angle,this.game.input.cameraPitch=this._savedCamera.pitch,this.game.input.cameraDistance=this._savedCamera.distance))}isOpen(){return this.open}toggle(){this.open?this.hide():this.show()}}const Fv=document.getElementById("game-canvas"),kv=document.getElementById("loading"),$i=document.querySelector(".loading-sub"),Zi=document.querySelector(".loading-fill"),Bv=document.getElementById("menu-btn"),Ov=document.getElementById("close-menu"),io=document.getElementById("menu-panel"),so=document.getElementById("music-btn"),zv=document.getElementById("custom-btn");function ro(s,e){$i&&($i.textContent=s),Zi&&(Zi.style.width=`${e}%`)}function ao(s){$i&&($i.textContent=s,$i.style.maxWidth="320px",$i.style.lineHeight="1.5"),Zi!=null&&Zi.parentElement&&(Zi.parentElement.style.display="none")}async function Hv(){var e;if(window.location.protocol==="file:")return;window.addEventListener("error",t=>{ao(`Error: ${t.message}. Check the browser console (F12).`)});let s;try{ro("Starting…",15),s=await Fl.create(Fv,t=>ro(t,40+Math.random()*40)),ro("Ready!",100),window.__gameBooted=!0,await new Promise(t=>setTimeout(t,200)),kv.classList.add("hidden");try{Gv(s),s.start()}catch(t){console.error("Failed to start UI:",t),ao(`UI failed: ${t.message}. Check the browser console (F12).`)}}catch(t){console.error("Failed to start game:",t),window.__gameBooted=!0,ao((e=t==null?void 0:t.message)!=null&&e.includes("WebGL")?"WebGL is not available. Try Chrome or Firefox, or enable hardware acceleration.":`Could not start: ${t.message}. Run npm run dev, then open http://localhost:5173`)}}function Gv(s){var r;const e=new Zy({box:document.getElementById("dialogue-box"),approachModal:document.getElementById("approach-modal"),approachPortrait:document.getElementById("approach-portrait"),approachName:document.getElementById("approach-name"),approachPersonality:document.getElementById("approach-personality"),approachTagline:document.getElementById("approach-tagline"),approachChatBtn:document.getElementById("approach-chat"),approachWalkBtn:document.getElementById("approach-walk"),approachPartBtn:document.getElementById("approach-part"),approachIgnoreBtn:document.getElementById("approach-ignore"),companionTag:document.getElementById("companion-tag"),companionLabel:document.getElementById("companion-label"),companionPartBtn:document.getElementById("companion-part"),name:document.getElementById("dialogue-name"),personality:document.getElementById("dialogue-personality"),text:document.getElementById("dialogue-text"),expression:document.getElementById("dialogue-expression"),portrait:document.getElementById("dialogue-portrait"),next:document.getElementById("dialogue-next"),choices:document.getElementById("dialogue-choices"),toast:document.getElementById("reward-toast"),journalPanel:document.getElementById("journal-panel"),journalList:document.getElementById("journal-list"),journalBtn:document.getElementById("journal-btn"),closeJournalBtn:document.getElementById("close-journal"),interactHint:document.getElementById("interact-hint"),continueHint:document.getElementById("speech-continue"),dialogueWalkBtn:document.getElementById("dialogue-walk"),dialogueStopWalkBtn:document.getElementById("dialogue-stop-walk")});e._updateJournalUI();const t=new Dv({modal:document.getElementById("pet-modal"),portrait:document.getElementById("pet-portrait"),name:document.getElementById("pet-name"),personality:document.getElementById("pet-personality"),hearts:document.getElementById("pet-hearts"),petBtn:document.getElementById("pet-action-pet"),sitBtn:document.getElementById("pet-action-sit"),shooBtn:document.getElementById("pet-action-shoo"),leaveBtn:document.getElementById("pet-action-leave"),inviteBtn:document.getElementById("pet-action-invite")}),n=new Nv({modal:document.getElementById("shop-modal"),portrait:document.getElementById("shop-portrait"),name:document.getElementById("shop-name"),yen:document.getElementById("shop-yen"),items:document.getElementById("shop-items"),closeBtn:document.getElementById("shop-close")},ku);s.initInteraction(e,t,n);const i=new Uv({modal:document.getElementById("outfit-modal"),closeBtn:document.getElementById("outfit-close"),modelLabel:document.getElementById("outfit-model-label"),accentLabel:document.getElementById("outfit-accent-label"),hatLabel:document.getElementById("outfit-hat-label"),shoesLabel:document.getElementById("outfit-shoes-label"),modelPrev:document.getElementById("outfit-model-prev"),modelNext:document.getElementById("outfit-model-next"),accentPrev:document.getElementById("outfit-accent-prev"),accentNext:document.getElementById("outfit-accent-next"),hatPrev:document.getElementById("outfit-hat-prev"),hatNext:document.getElementById("outfit-hat-next"),shoesPrev:document.getElementById("outfit-shoes-prev"),shoesNext:document.getElementById("outfit-shoes-next")},s);s.outfitUI=i,(r=e.continueHint)==null||r.addEventListener("click",()=>e.advance()),Bv.addEventListener("click",()=>io.classList.remove("hidden")),Ov.addEventListener("click",()=>io.classList.add("hidden")),so.addEventListener("click",()=>{s.isMusicPlaying=!s.isMusicPlaying,so.textContent=s.isMusicPlaying?"♫":"♪",so.style.background=s.isMusicPlaying?"#d0ecec":""}),zv.addEventListener("click",()=>{i.toggle()}),document.addEventListener("keydown",a=>{var o,l,c,h,u;if(a.code==="Escape"&&(i.isOpen()?i.hide():(o=s.shopUI)!=null&&o.isOpen()?s.shopUI.close():(l=s.petUI)!=null&&l.isOpen()?s.petUI.hide():(c=s.dialogue)!=null&&c.isOpen()?s.dialogue.close():(h=s.dialogue)!=null&&h.approachOpen?s.dialogue._onIgnoreClicked():document.getElementById("journal-panel").classList.contains("hidden")?io.classList.toggle("hidden"):document.getElementById("journal-panel").classList.add("hidden")),(u=s.dialogue)!=null&&u.isOpen()&&/^Digit[1-9]$/.test(a.code)){const d=parseInt(a.code.replace("Digit",""),10)-1,f=document.querySelectorAll(".dialogue-choice");f[d]&&f[d].click()}})}Hv();
