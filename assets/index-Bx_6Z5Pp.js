(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Fl="175",Yd=0,Tc=1,qd=2,gu=1,_u=2,zn=3,An=0,Ht=1,xn=2,Xn=0,as=1,Ec=2,Ac=3,Cc=4,Kd=5,Ei=100,$d=101,Jd=102,Zd=103,Qd=104,ef=200,tf=201,nf=202,sf=203,ko=204,Fo=205,rf=206,af=207,of=208,lf=209,cf=210,hf=211,uf=212,df=213,ff=214,Bo=0,Oo=1,zo=2,hs=3,Ho=4,Go=5,Vo=6,Wo=7,xu=0,pf=1,mf=2,hi=0,yu=1,vu=2,Mu=3,Bl=4,bu=5,Su=6,wu=7,Rc="attached",gf="detached",Tu=300,us=301,ds=302,Xo=303,jo=304,Aa=306,Yn=1e3,li=1001,Ma=1002,Ft=1003,Eu=1004,Vs=1005,nn=1006,da=1007,Vn=1008,qn=1009,Au=1010,Cu=1011,tr=1012,Ol=1013,Ri=1014,Mn=1015,vs=1016,zl=1017,Hl=1018,nr=1020,Ru=35902,Iu=1021,Pu=1022,hn=1023,Lu=1024,Du=1025,ir=1026,sr=1027,Gl=1028,Vl=1029,Nu=1030,Wl=1031,Xl=1033,fa=33776,pa=33777,ma=33778,ga=33779,Yo=35840,qo=35841,Ko=35842,$o=35843,Jo=36196,Zo=37492,Qo=37496,el=37808,tl=37809,nl=37810,il=37811,sl=37812,rl=37813,al=37814,ol=37815,ll=37816,cl=37817,hl=37818,ul=37819,dl=37820,fl=37821,_a=36492,pl=36494,ml=36495,Uu=36283,gl=36284,_l=36285,xl=36286,ku=2200,Fu=2201,_f=2202,rr=2300,ar=2301,Na=2302,es=2400,ts=2401,ba=2402,jl=2500,xf=2501,yf=0,Bu=1,yl=2,vf=3200,Mf=3201,Yl=0,bf=1,oi="",ut="srgb",qt="srgb-linear",Sa="linear",lt="srgb",Di=7680,Ic=519,Sf=512,wf=513,Tf=514,Ou=515,Ef=516,Af=517,Cf=518,Rf=519,vl=35044,Pc="300 es",Wn=2e3,wa=2001;class Pi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Lc=1234567;const Ys=Math.PI/180,fs=180/Math.PI;function un(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ot[s&255]+Ot[s>>8&255]+Ot[s>>16&255]+Ot[s>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[t&63|128]+Ot[t>>8&255]+"-"+Ot[t>>16&255]+Ot[t>>24&255]+Ot[n&255]+Ot[n>>8&255]+Ot[n>>16&255]+Ot[n>>24&255]).toLowerCase()}function Ve(s,e,t){return Math.max(e,Math.min(t,s))}function ql(s,e){return(s%e+e)%e}function If(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Pf(s,e,t){return s!==e?(t-s)/(e-s):0}function qs(s,e,t){return(1-t)*s+t*e}function Lf(s,e,t,n){return qs(s,e,1-Math.exp(-t*n))}function Df(s,e=1){return e-Math.abs(ql(s,e*2)-e)}function Nf(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Uf(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function kf(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Ff(s,e){return s+Math.random()*(e-s)}function Bf(s){return s*(.5-Math.random())}function Of(s){s!==void 0&&(Lc=s);let e=Lc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function zf(s){return s*Ys}function Hf(s){return s*fs}function Gf(s){return(s&s-1)===0&&s!==0}function Vf(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Wf(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Xf(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),m=a((n-e)/2);switch(i){case"XYX":s.set(o*h,l*u,l*d,o*c);break;case"YZY":s.set(l*d,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*d,o*h,o*c);break;case"XZX":s.set(o*h,l*m,l*f,o*c);break;case"YXY":s.set(l*f,o*h,l*m,o*c);break;case"ZYZ":s.set(l*m,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function yn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ct(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const kt={DEG2RAD:Ys,RAD2DEG:fs,generateUUID:un,clamp:Ve,euclideanModulo:ql,mapLinear:If,inverseLerp:Pf,lerp:qs,damp:Lf,pingpong:Df,smoothstep:Nf,smootherstep:Uf,randInt:kf,randFloat:Ff,randFloatSpread:Bf,seededRandom:Of,degToRad:zf,radToDeg:Hf,isPowerOfTwo:Gf,ceilPowerOfTwo:Vf,floorPowerOfTwo:Wf,setQuaternionFromProperEuler:Xf,normalize:ct,denormalize:yn};class re{constructor(e=0,t=0){re.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ve(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Oe{constructor(e,t,n,i,r,a,o,l,c){Oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],_=i[0],g=i[3],p=i[6],v=i[1],y=i[4],x=i[7],I=i[2],A=i[5],E=i[8];return r[0]=a*_+o*v+l*I,r[3]=a*g+o*y+l*A,r[6]=a*p+o*x+l*E,r[1]=c*_+h*v+u*I,r[4]=c*g+h*y+u*A,r[7]=c*p+h*x+u*E,r[2]=d*_+f*v+m*I,r[5]=d*g+f*y+m*A,r[8]=d*p+f*x+m*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,m=t*u+n*d+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return e[0]=u*_,e[1]=(i*c-h*n)*_,e[2]=(o*n-i*a)*_,e[3]=d*_,e[4]=(h*t-i*l)*_,e[5]=(i*r-o*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ua.makeScale(e,t)),this}rotate(e){return this.premultiply(Ua.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ua.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ua=new Oe;function zu(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function or(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function jf(){const s=or("canvas");return s.style.display="block",s}const Dc={};function xa(s){s in Dc||(Dc[s]=!0,console.warn(s))}function Yf(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function qf(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Kf(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Nc=new Oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Uc=new Oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $f(){const s={enabled:!0,workingColorSpace:qt,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===lt&&(i.r=jn(i.r),i.g=jn(i.g),i.b=jn(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===lt&&(i.r=os(i.r),i.g=os(i.g),i.b=os(i.b))),i},fromWorkingColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},toWorkingColorSpace:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===oi?Sa:this.spaces[i].transfer},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[qt]:{primaries:e,whitePoint:n,transfer:Sa,toXYZ:Nc,fromXYZ:Uc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ut},outputColorSpaceConfig:{drawingBufferColorSpace:ut}},[ut]:{primaries:e,whitePoint:n,transfer:lt,toXYZ:Nc,fromXYZ:Uc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ut}}}),s}const je=$f();function jn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function os(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ni;class Jf{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ni===void 0&&(Ni=or("canvas")),Ni.width=e.width,Ni.height=e.height;const i=Ni.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ni}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=or("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=jn(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(jn(t[n]/255)*255):t[n]=jn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Zf=0;class Kl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zf++}),this.uuid=un(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(ka(i[a].image)):r.push(ka(i[a]))}else r=ka(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function ka(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Jf.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Qf=0;class Ct extends Pi{constructor(e=Ct.DEFAULT_IMAGE,t=Ct.DEFAULT_MAPPING,n=li,i=li,r=nn,a=Vn,o=hn,l=qn,c=Ct.DEFAULT_ANISOTROPY,h=oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qf++}),this.uuid=un(),this.name="",this.source=new Kl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Tu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Yn:e.x=e.x-Math.floor(e.x);break;case li:e.x=e.x<0?0:1;break;case Ma:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Yn:e.y=e.y-Math.floor(e.y);break;case li:e.y=e.y<0?0:1;break;case Ma:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ct.DEFAULT_IMAGE=null;Ct.DEFAULT_MAPPING=Tu;Ct.DEFAULT_ANISOTROPY=1;class it{constructor(e=0,t=0,n=0,i=1){it.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],m=l[9],_=l[2],g=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,x=(f+1)/2,I=(p+1)/2,A=(h+d)/4,E=(u+_)/4,R=(m+g)/4;return y>x&&y>I?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=A/n,r=E/n):x>I?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=A/i,r=R/i):I<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(I),n=E/r,i=R/r),this.set(n,i,r,t),this}let v=Math.sqrt((g-m)*(g-m)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(g-m)/v,this.y=(u-_)/v,this.z=(d-h)/v,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this.w=Ve(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this.w=Ve(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ep extends Pi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new it(0,0,e,t),this.scissorTest=!1,this.viewport=new it(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ct(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Kl(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ui extends ep{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Hu extends Ct{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class tp extends Ct{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=r[a+0],f=r[a+1],m=r[a+2],_=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=m,e[t+3]=_;return}if(u!==_||l!==d||c!==f||h!==m){let g=1-o;const p=l*d+c*f+h*m+u*_,v=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const I=Math.sqrt(y),A=Math.atan2(I,p*v);g=Math.sin(g*A)/I,o=Math.sin(o*A)/I}const x=o*v;if(l=l*g+d*x,c=c*g+f*x,h=h*g+m*x,u=u*g+_*x,g===1-o){const I=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=I,c*=I,h*=I,u*=I}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],d=r[a+1],f=r[a+2],m=r[a+3];return e[t]=o*m+h*u+l*f-c*d,e[t+1]=l*m+h*d+c*u-o*f,e[t+2]=c*m+h*f+o*d-l*u,e[t+3]=h*m-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),d=l(n/2),f=l(i/2),m=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"YZX":this._x=d*h*u+c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u-d*f*m;break;case"XZY":this._x=d*h*u-c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-i)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ve(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class T{constructor(e=0,t=0,n=0){T.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(kc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(kc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-r*i),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=i+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Fa.copy(this).projectOnVector(e),this.sub(Fa)}reflect(e){return this.sub(Fa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ve(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Fa=new T,kc=new bn;class Jt{constructor(e=new T(1/0,1/0,1/0),t=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,mn):mn.fromBufferAttribute(r,a),mn.applyMatrix4(e.matrixWorld),this.expandByPoint(mn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),br.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),br.copy(n.boundingBox)),br.applyMatrix4(e.matrixWorld),this.union(br)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,mn),mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Es),Sr.subVectors(this.max,Es),Ui.subVectors(e.a,Es),ki.subVectors(e.b,Es),Fi.subVectors(e.c,Es),Kn.subVectors(ki,Ui),$n.subVectors(Fi,ki),mi.subVectors(Ui,Fi);let t=[0,-Kn.z,Kn.y,0,-$n.z,$n.y,0,-mi.z,mi.y,Kn.z,0,-Kn.x,$n.z,0,-$n.x,mi.z,0,-mi.x,-Kn.y,Kn.x,0,-$n.y,$n.x,0,-mi.y,mi.x,0];return!Ba(t,Ui,ki,Fi,Sr)||(t=[1,0,0,0,1,0,0,0,1],!Ba(t,Ui,ki,Fi,Sr))?!1:(wr.crossVectors(Kn,$n),t=[wr.x,wr.y,wr.z],Ba(t,Ui,ki,Fi,Sr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Nn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Nn=[new T,new T,new T,new T,new T,new T,new T,new T],mn=new T,br=new Jt,Ui=new T,ki=new T,Fi=new T,Kn=new T,$n=new T,mi=new T,Es=new T,Sr=new T,wr=new T,gi=new T;function Ba(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){gi.fromArray(s,r);const o=i.x*Math.abs(gi.x)+i.y*Math.abs(gi.y)+i.z*Math.abs(gi.z),l=e.dot(gi),c=t.dot(gi),h=n.dot(gi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const np=new Jt,As=new T,Oa=new T;class In{constructor(e=new T,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):np.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;As.subVectors(e,this.center);const t=As.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(As,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Oa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(As.copy(e.center).add(Oa)),this.expandByPoint(As.copy(e.center).sub(Oa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Un=new T,za=new T,Tr=new T,Jn=new T,Ha=new T,Er=new T,Ga=new T;class fr{constructor(e=new T,t=new T(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Un)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Un.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Un.copy(this.origin).addScaledVector(this.direction,t),Un.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){za.copy(e).add(t).multiplyScalar(.5),Tr.copy(t).sub(e).normalize(),Jn.copy(this.origin).sub(za);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Tr),o=Jn.dot(this.direction),l=-Jn.dot(Tr),c=Jn.lengthSq(),h=Math.abs(1-a*a);let u,d,f,m;if(h>0)if(u=a*l-o,d=a*o-l,m=r*h,u>=0)if(d>=-m)if(d<=m){const _=1/h;u*=_,d*=_,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(za).addScaledVector(Tr,d),f}intersectSphere(e,t){Un.subVectors(e.center,this.origin);const n=Un.dot(this.direction),i=Un.dot(Un)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Un)!==null}intersectTriangle(e,t,n,i,r){Ha.subVectors(t,e),Er.subVectors(n,e),Ga.crossVectors(Ha,Er);let a=this.direction.dot(Ga),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Jn.subVectors(this.origin,e);const l=o*this.direction.dot(Er.crossVectors(Jn,Er));if(l<0)return null;const c=o*this.direction.dot(Ha.cross(Jn));if(c<0||l+c>a)return null;const h=-o*Jn.dot(Ga);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ke{constructor(e,t,n,i,r,a,o,l,c,h,u,d,f,m,_,g){ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,h,u,d,f,m,_,g)}set(e,t,n,i,r,a,o,l,c,h,u,d,f,m,_,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ke().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Bi.setFromMatrixColumn(e,0).length(),r=1/Bi.setFromMatrixColumn(e,1).length(),a=1/Bi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=a*h,f=a*u,m=o*h,_=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+m*c,t[5]=d-_*c,t[9]=-o*l,t[2]=_-d*c,t[6]=m+f*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,m=c*h,_=c*u;t[0]=d+_*o,t[4]=m*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-m,t[6]=_+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,m=c*h,_=c*u;t[0]=d-_*o,t[4]=-a*u,t[8]=m+f*o,t[1]=f+m*o,t[5]=a*h,t[9]=_-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*h,f=a*u,m=o*h,_=o*u;t[0]=l*h,t[4]=m*c-f,t[8]=d*c+_,t[1]=l*u,t[5]=_*c+d,t[9]=f*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,f=a*c,m=o*l,_=o*c;t[0]=l*h,t[4]=_-d*u,t[8]=m*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+m,t[10]=d-_*u}else if(e.order==="XZY"){const d=a*l,f=a*c,m=o*l,_=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+_,t[5]=a*h,t[9]=f*u-m,t[2]=m*u-f,t[6]=o*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ip,e,sp)}lookAt(e,t,n){const i=this.elements;return Qt.subVectors(e,t),Qt.lengthSq()===0&&(Qt.z=1),Qt.normalize(),Zn.crossVectors(n,Qt),Zn.lengthSq()===0&&(Math.abs(n.z)===1?Qt.x+=1e-4:Qt.z+=1e-4,Qt.normalize(),Zn.crossVectors(n,Qt)),Zn.normalize(),Ar.crossVectors(Qt,Zn),i[0]=Zn.x,i[4]=Ar.x,i[8]=Qt.x,i[1]=Zn.y,i[5]=Ar.y,i[9]=Qt.y,i[2]=Zn.z,i[6]=Ar.z,i[10]=Qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],_=n[6],g=n[10],p=n[14],v=n[3],y=n[7],x=n[11],I=n[15],A=i[0],E=i[4],R=i[8],b=i[12],M=i[1],P=i[5],F=i[9],B=i[13],W=i[2],q=i[6],X=i[10],Z=i[14],V=i[3],le=i[7],_e=i[11],Te=i[15];return r[0]=a*A+o*M+l*W+c*V,r[4]=a*E+o*P+l*q+c*le,r[8]=a*R+o*F+l*X+c*_e,r[12]=a*b+o*B+l*Z+c*Te,r[1]=h*A+u*M+d*W+f*V,r[5]=h*E+u*P+d*q+f*le,r[9]=h*R+u*F+d*X+f*_e,r[13]=h*b+u*B+d*Z+f*Te,r[2]=m*A+_*M+g*W+p*V,r[6]=m*E+_*P+g*q+p*le,r[10]=m*R+_*F+g*X+p*_e,r[14]=m*b+_*B+g*Z+p*Te,r[3]=v*A+y*M+x*W+I*V,r[7]=v*E+y*P+x*q+I*le,r[11]=v*R+y*F+x*X+I*_e,r[15]=v*b+y*B+x*Z+I*Te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],m=e[3],_=e[7],g=e[11],p=e[15];return m*(+r*l*u-i*c*u-r*o*d+n*c*d+i*o*f-n*l*f)+_*(+t*l*f-t*c*d+r*a*d-i*a*f+i*c*h-r*l*h)+g*(+t*c*u-t*o*f-r*a*u+n*a*f+r*o*h-n*c*h)+p*(-i*o*h-t*l*u+t*o*d+i*a*u-n*a*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],m=e[12],_=e[13],g=e[14],p=e[15],v=u*g*c-_*d*c+_*l*f-o*g*f-u*l*p+o*d*p,y=m*d*c-h*g*c-m*l*f+a*g*f+h*l*p-a*d*p,x=h*_*c-m*u*c+m*o*f-a*_*f-h*o*p+a*u*p,I=m*u*l-h*_*l-m*o*d+a*_*d+h*o*g-a*u*g,A=t*v+n*y+i*x+r*I;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/A;return e[0]=v*E,e[1]=(_*d*r-u*g*r-_*i*f+n*g*f+u*i*p-n*d*p)*E,e[2]=(o*g*r-_*l*r+_*i*c-n*g*c-o*i*p+n*l*p)*E,e[3]=(u*l*r-o*d*r-u*i*c+n*d*c+o*i*f-n*l*f)*E,e[4]=y*E,e[5]=(h*g*r-m*d*r+m*i*f-t*g*f-h*i*p+t*d*p)*E,e[6]=(m*l*r-a*g*r-m*i*c+t*g*c+a*i*p-t*l*p)*E,e[7]=(a*d*r-h*l*r+h*i*c-t*d*c-a*i*f+t*l*f)*E,e[8]=x*E,e[9]=(m*u*r-h*_*r-m*n*f+t*_*f+h*n*p-t*u*p)*E,e[10]=(a*_*r-m*o*r+m*n*c-t*_*c-a*n*p+t*o*p)*E,e[11]=(h*o*r-a*u*r-h*n*c+t*u*c+a*n*f-t*o*f)*E,e[12]=I*E,e[13]=(h*_*i-m*u*i+m*n*d-t*_*d-h*n*g+t*u*g)*E,e[14]=(m*o*i-a*_*i-m*n*l+t*_*l+a*n*g-t*o*g)*E,e[15]=(a*u*i-h*o*i+h*n*l-t*u*l-a*n*d+t*o*d)*E,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,m=r*u,_=a*h,g=a*u,p=o*u,v=l*c,y=l*h,x=l*u,I=n.x,A=n.y,E=n.z;return i[0]=(1-(_+p))*I,i[1]=(f+x)*I,i[2]=(m-y)*I,i[3]=0,i[4]=(f-x)*A,i[5]=(1-(d+p))*A,i[6]=(g+v)*A,i[7]=0,i[8]=(m+y)*E,i[9]=(g-v)*E,i[10]=(1-(d+_))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Bi.set(i[0],i[1],i[2]).length();const a=Bi.set(i[4],i[5],i[6]).length(),o=Bi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],gn.copy(this);const c=1/r,h=1/a,u=1/o;return gn.elements[0]*=c,gn.elements[1]*=c,gn.elements[2]*=c,gn.elements[4]*=h,gn.elements[5]*=h,gn.elements[6]*=h,gn.elements[8]*=u,gn.elements[9]*=u,gn.elements[10]*=u,t.setFromRotationMatrix(gn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=Wn){const l=this.elements,c=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i);let f,m;if(o===Wn)f=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===wa)f=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=Wn){const l=this.elements,c=1/(t-e),h=1/(n-i),u=1/(a-r),d=(t+e)*c,f=(n+i)*h;let m,_;if(o===Wn)m=(a+r)*u,_=-2*u;else if(o===wa)m=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Bi=new T,gn=new ke,ip=new T(0,0,0),sp=new T(1,1,1),Zn=new T,Ar=new T,Qt=new T,Fc=new ke,Bc=new bn;class Cn{constructor(e=0,t=0,n=0,i=Cn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ve(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ve(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ve(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ve(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Fc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Bc.setFromEuler(this),this.setFromQuaternion(Bc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Cn.DEFAULT_ORDER="XYZ";class $l{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let rp=0;const Oc=new T,Oi=new bn,kn=new ke,Cr=new T,Cs=new T,ap=new T,op=new bn,zc=new T(1,0,0),Hc=new T(0,1,0),Gc=new T(0,0,1),Vc={type:"added"},lp={type:"removed"},zi={type:"childadded",child:null},Va={type:"childremoved",child:null};class ht extends Pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rp++}),this.uuid=un(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ht.DEFAULT_UP.clone();const e=new T,t=new Cn,n=new bn,i=new T(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ke},normalMatrix:{value:new Oe}}),this.matrix=new ke,this.matrixWorld=new ke,this.matrixAutoUpdate=ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $l,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Oi.setFromAxisAngle(e,t),this.quaternion.multiply(Oi),this}rotateOnWorldAxis(e,t){return Oi.setFromAxisAngle(e,t),this.quaternion.premultiply(Oi),this}rotateX(e){return this.rotateOnAxis(zc,e)}rotateY(e){return this.rotateOnAxis(Hc,e)}rotateZ(e){return this.rotateOnAxis(Gc,e)}translateOnAxis(e,t){return Oc.copy(e).applyQuaternion(this.quaternion),this.position.add(Oc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(zc,e)}translateY(e){return this.translateOnAxis(Hc,e)}translateZ(e){return this.translateOnAxis(Gc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(kn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Cr.copy(e):Cr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Cs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?kn.lookAt(Cs,Cr,this.up):kn.lookAt(Cr,Cs,this.up),this.quaternion.setFromRotationMatrix(kn),i&&(kn.extractRotation(i.matrixWorld),Oi.setFromRotationMatrix(kn),this.quaternion.premultiply(Oi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Vc),zi.child=e,this.dispatchEvent(zi),zi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(lp),Va.child=e,this.dispatchEvent(Va),Va.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(kn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Vc),zi.child=e,this.dispatchEvent(zi),zi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,e,ap),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,op,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}ht.DEFAULT_UP=new T(0,1,0);ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _n=new T,Fn=new T,Wa=new T,Bn=new T,Hi=new T,Gi=new T,Wc=new T,Xa=new T,ja=new T,Ya=new T,qa=new it,Ka=new it,$a=new it;class cn{constructor(e=new T,t=new T,n=new T){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),_n.subVectors(e,t),i.cross(_n);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){_n.subVectors(i,t),Fn.subVectors(n,t),Wa.subVectors(e,t);const a=_n.dot(_n),o=_n.dot(Fn),l=_n.dot(Wa),c=Fn.dot(Fn),h=Fn.dot(Wa),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-o*h)*d,m=(a*h-o*l)*d;return r.set(1-f-m,m,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Bn)===null?!1:Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,Bn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Bn.x),l.addScaledVector(a,Bn.y),l.addScaledVector(o,Bn.z),l)}static getInterpolatedAttribute(e,t,n,i,r,a){return qa.setScalar(0),Ka.setScalar(0),$a.setScalar(0),qa.fromBufferAttribute(e,t),Ka.fromBufferAttribute(e,n),$a.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(qa,r.x),a.addScaledVector(Ka,r.y),a.addScaledVector($a,r.z),a}static isFrontFacing(e,t,n,i){return _n.subVectors(n,t),Fn.subVectors(e,t),_n.cross(Fn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _n.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),_n.cross(Fn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return cn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return cn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return cn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return cn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return cn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;Hi.subVectors(i,n),Gi.subVectors(r,n),Xa.subVectors(e,n);const l=Hi.dot(Xa),c=Gi.dot(Xa);if(l<=0&&c<=0)return t.copy(n);ja.subVectors(e,i);const h=Hi.dot(ja),u=Gi.dot(ja);if(h>=0&&u<=h)return t.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Hi,a);Ya.subVectors(e,r);const f=Hi.dot(Ya),m=Gi.dot(Ya);if(m>=0&&f<=m)return t.copy(r);const _=f*c-l*m;if(_<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(n).addScaledVector(Gi,o);const g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return Wc.subVectors(r,i),o=(u-h)/(u-h+(f-m)),t.copy(i).addScaledVector(Wc,o);const p=1/(g+_+d);return a=_*p,o=d*p,t.copy(n).addScaledVector(Hi,a).addScaledVector(Gi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Gu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qn={h:0,s:0,l:0},Rr={h:0,s:0,l:0};function Ja(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class pe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=je.workingColorSpace){return this.r=e,this.g=t,this.b=n,je.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=je.workingColorSpace){if(e=ql(e,1),t=Ve(t,0,1),n=Ve(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Ja(a,r,e+1/3),this.g=Ja(a,r,e),this.b=Ja(a,r,e-1/3)}return je.toWorkingColorSpace(this,i),this}setStyle(e,t=ut){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ut){const n=Gu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=jn(e.r),this.g=jn(e.g),this.b=jn(e.b),this}copyLinearToSRGB(e){return this.r=os(e.r),this.g=os(e.g),this.b=os(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ut){return je.fromWorkingColorSpace(zt.copy(this),e),Math.round(Ve(zt.r*255,0,255))*65536+Math.round(Ve(zt.g*255,0,255))*256+Math.round(Ve(zt.b*255,0,255))}getHexString(e=ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.fromWorkingColorSpace(zt.copy(this),t);const n=zt.r,i=zt.g,r=zt.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=je.workingColorSpace){return je.fromWorkingColorSpace(zt.copy(this),t),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=ut){je.fromWorkingColorSpace(zt.copy(this),e);const t=zt.r,n=zt.g,i=zt.b;return e!==ut?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Qn),this.setHSL(Qn.h+e,Qn.s+t,Qn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Qn),e.getHSL(Rr);const n=qs(Qn.h,Rr.h,t),i=qs(Qn.s,Rr.s,t),r=qs(Qn.l,Rr.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zt=new pe;pe.NAMES=Gu;let cp=0;class dn extends Pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cp++}),this.uuid=un(),this.name="",this.type="Material",this.blending=as,this.side=An,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ko,this.blendDst=Fo,this.blendEquation=Ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pe(0,0,0),this.blendAlpha=0,this.depthFunc=hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ic,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Di,this.stencilZFail=Di,this.stencilZPass=Di,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==as&&(n.blending=this.blending),this.side!==An&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ko&&(n.blendSrc=this.blendSrc),this.blendDst!==Fo&&(n.blendDst=this.blendDst),this.blendEquation!==Ei&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==hs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ic&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Di&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Di&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Di&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class dt extends dn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.combine=xu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wt=new T,Ir=new re;let hp=0;class Yt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:hp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=vl,this.updateRanges=[],this.gpuType=Mn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ir.fromBufferAttribute(this,t),Ir.applyMatrix3(e),this.setXY(t,Ir.x,Ir.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=yn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ct(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=yn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=yn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=yn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=yn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),i=ct(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),i=ct(i,this.array),r=ct(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==vl&&(e.usage=this.usage),e}}class Vu extends Yt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Wu extends Yt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Qe extends Yt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let up=0;const on=new ke,Za=new ht,Vi=new T,en=new Jt,Rs=new Jt,Pt=new T;class Et extends Pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:up++}),this.uuid=un(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zu(e)?Wu:Vu)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Oe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return on.makeRotationFromQuaternion(e),this.applyMatrix4(on),this}rotateX(e){return on.makeRotationX(e),this.applyMatrix4(on),this}rotateY(e){return on.makeRotationY(e),this.applyMatrix4(on),this}rotateZ(e){return on.makeRotationZ(e),this.applyMatrix4(on),this}translate(e,t,n){return on.makeTranslation(e,t,n),this.applyMatrix4(on),this}scale(e,t,n){return on.makeScale(e,t,n),this.applyMatrix4(on),this}lookAt(e){return Za.lookAt(e),Za.updateMatrix(),this.applyMatrix4(Za.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vi).negate(),this.translate(Vi.x,Vi.y,Vi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Qe(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];en.setFromBufferAttribute(r),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new In);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new T,1/0);return}if(e){const n=this.boundingSphere.center;if(en.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Rs.setFromBufferAttribute(o),this.morphTargetsRelative?(Pt.addVectors(en.min,Rs.min),en.expandByPoint(Pt),Pt.addVectors(en.max,Rs.max),en.expandByPoint(Pt)):(en.expandByPoint(Rs.min),en.expandByPoint(Rs.max))}en.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Pt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Pt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Pt.fromBufferAttribute(o,c),l&&(Vi.fromBufferAttribute(e,c),Pt.add(Vi)),i=Math.max(i,n.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<n.count;R++)o[R]=new T,l[R]=new T;const c=new T,h=new T,u=new T,d=new re,f=new re,m=new re,_=new T,g=new T;function p(R,b,M){c.fromBufferAttribute(n,R),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,M),d.fromBufferAttribute(r,R),f.fromBufferAttribute(r,b),m.fromBufferAttribute(r,M),h.sub(c),u.sub(c),f.sub(d),m.sub(d);const P=1/(f.x*m.y-m.x*f.y);isFinite(P)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(P),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(P),o[R].add(_),o[b].add(_),o[M].add(_),l[R].add(g),l[b].add(g),l[M].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let R=0,b=v.length;R<b;++R){const M=v[R],P=M.start,F=M.count;for(let B=P,W=P+F;B<W;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const y=new T,x=new T,I=new T,A=new T;function E(R){I.fromBufferAttribute(i,R),A.copy(I);const b=o[R];y.copy(b),y.sub(I.multiplyScalar(I.dot(b))).normalize(),x.crossVectors(A,b);const P=x.dot(l[R])<0?-1:1;a.setXYZW(R,y.x,y.y,y.z,P)}for(let R=0,b=v.length;R<b;++R){const M=v[R],P=M.start,F=M.count;for(let B=P,W=P+F;B<W;B+=3)E(e.getX(B+0)),E(e.getX(B+1)),E(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Yt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new T,r=new T,a=new T,o=new T,l=new T,c=new T,h=new T,u=new T;if(e)for(let d=0,f=e.count;d<f;d+=3){const m=e.getX(d+0),_=e.getX(d+1),g=e.getX(d+2);i.fromBufferAttribute(t,m),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,g),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Pt.fromBufferAttribute(e,t),Pt.normalize(),e.setXYZ(t,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let f=0,m=0;for(let _=0,g=l.length;_<g;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*h;for(let p=0;p<h;p++)d[m++]=c[f++]}return new Yt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Et,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Xc=new ke,_i=new fr,Pr=new In,jc=new T,Lr=new T,Dr=new T,Nr=new T,Qa=new T,Ur=new T,Yc=new T,kr=new T;class ne extends ht{constructor(e=new Et,t=new dt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){Ur.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(Qa.fromBufferAttribute(u,e),a?Ur.addScaledVector(Qa,h):Ur.addScaledVector(Qa.sub(t),h))}t.add(Ur)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Pr.copy(n.boundingSphere),Pr.applyMatrix4(r),_i.copy(e.ray).recast(e.near),!(Pr.containsPoint(_i.origin)===!1&&(_i.intersectSphere(Pr,jc)===null||_i.origin.distanceToSquared(jc)>(e.far-e.near)**2))&&(Xc.copy(r).invert(),_i.copy(e.ray).applyMatrix4(Xc),!(n.boundingBox!==null&&_i.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,_i)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,_=d.length;m<_;m++){const g=d[m],p=a[g.materialIndex],v=Math.max(g.start,f.start),y=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let x=v,I=y;x<I;x+=3){const A=o.getX(x),E=o.getX(x+1),R=o.getX(x+2);i=Fr(this,p,e,n,c,h,u,A,E,R),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const m=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const v=o.getX(g),y=o.getX(g+1),x=o.getX(g+2);i=Fr(this,a,e,n,c,h,u,v,y,x),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,_=d.length;m<_;m++){const g=d[m],p=a[g.materialIndex],v=Math.max(g.start,f.start),y=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let x=v,I=y;x<I;x+=3){const A=x,E=x+1,R=x+2;i=Fr(this,p,e,n,c,h,u,A,E,R),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const m=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const v=g,y=g+1,x=g+2;i=Fr(this,a,e,n,c,h,u,v,y,x),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}}function dp(s,e,t,n,i,r,a,o){let l;if(e.side===Ht?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===An,o),l===null)return null;kr.copy(o),kr.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(kr);return c<t.near||c>t.far?null:{distance:c,point:kr.clone(),object:s}}function Fr(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,Lr),s.getVertexPosition(l,Dr),s.getVertexPosition(c,Nr);const h=dp(s,e,t,n,Lr,Dr,Nr,Yc);if(h){const u=new T;cn.getBarycoord(Yc,Lr,Dr,Nr,u),i&&(h.uv=cn.getInterpolatedAttribute(i,o,l,c,u,new re)),r&&(h.uv1=cn.getInterpolatedAttribute(r,o,l,c,u,new re)),a&&(h.normal=cn.getInterpolatedAttribute(a,o,l,c,u,new T),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new T,materialIndex:0};cn.getNormal(Lr,Dr,Nr,d.normal),h.face=d,h.barycoord=u}return h}class me extends Et{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,f=0;m("z","y","x",-1,-1,n,t,e,a,r,0),m("z","y","x",1,-1,n,t,-e,a,r,1),m("x","z","y",1,1,e,n,t,i,a,2),m("x","z","y",1,-1,e,n,-t,i,a,3),m("x","y","z",1,-1,e,t,n,i,r,4),m("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Qe(c,3)),this.setAttribute("normal",new Qe(h,3)),this.setAttribute("uv",new Qe(u,2));function m(_,g,p,v,y,x,I,A,E,R,b){const M=x/E,P=I/R,F=x/2,B=I/2,W=A/2,q=E+1,X=R+1;let Z=0,V=0;const le=new T;for(let _e=0;_e<X;_e++){const Te=_e*P-B;for(let We=0;We<q;We++){const ft=We*M-F;le[_]=ft*v,le[g]=Te*y,le[p]=W,c.push(le.x,le.y,le.z),le[_]=0,le[g]=0,le[p]=A>0?1:-1,h.push(le.x,le.y,le.z),u.push(We/E),u.push(1-_e/R),Z+=1}}for(let _e=0;_e<R;_e++)for(let Te=0;Te<E;Te++){const We=d+Te+q*_e,ft=d+Te+q*(_e+1),Y=d+(Te+1)+q*(_e+1),se=d+(Te+1)+q*_e;l.push(We,ft,se),l.push(ft,Y,se),V+=6}o.addGroup(f,V,b),f+=V,d+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new me(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ps(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Wt(s){const e={};for(let t=0;t<s.length;t++){const n=ps(s[t]);for(const i in n)e[i]=n[i]}return e}function fp(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Xu(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}const Jl={clone:ps,merge:Wt};var pp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Sn extends dn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pp,this.fragmentShader=mp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ps(e.uniforms),this.uniformsGroups=fp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ju extends ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ke,this.projectionMatrix=new ke,this.projectionMatrixInverse=new ke,this.coordinateSystem=Wn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ei=new T,qc=new re,Kc=new re;class Xt extends ju{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=fs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ys*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fs*2*Math.atan(Math.tan(Ys*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ei.x,ei.y).multiplyScalar(-e/ei.z),ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ei.x,ei.y).multiplyScalar(-e/ei.z)}getViewSize(e,t){return this.getViewBounds(e,qc,Kc),t.subVectors(Kc,qc)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ys*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Wi=-90,Xi=1;class gp extends ht{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Xt(Wi,Xi,e,t);i.layers=this.layers,this.add(i);const r=new Xt(Wi,Xi,e,t);r.layers=this.layers,this.add(r);const a=new Xt(Wi,Xi,e,t);a.layers=this.layers,this.add(a);const o=new Xt(Wi,Xi,e,t);o.layers=this.layers,this.add(o);const l=new Xt(Wi,Xi,e,t);l.layers=this.layers,this.add(l);const c=new Xt(Wi,Xi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Wn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===wa)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Yu extends Ct{constructor(e=[],t=us,n,i,r,a,o,l,c,h){super(e,t,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class _p extends ui{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Yu(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:nn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new me(5,5,5),r=new Sn({name:"CubemapFromEquirect",uniforms:ps(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ht,blending:Xn});r.uniforms.tEquirect.value=t;const a=new ne(i,r),o=t.minFilter;return t.minFilter===Vn&&(t.minFilter=nn),new gp(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}class Re extends ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xp={type:"move"};class eo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Re,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Re,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Re,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,n),p=this._getHandJoint(c,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(xp)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Re;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Zl{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new pe(e),this.near=t,this.far=n}clone(){return new Zl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class yp extends ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Cn,this.environmentIntensity=1,this.environmentRotation=new Cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class qu{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=vl,this.updateRanges=[],this.version=0,this.uuid=un()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=un()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=un()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Vt=new T;class lr{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=yn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ct(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=yn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=yn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=yn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=yn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),i=ct(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),i=ct(i,this.array),r=ct(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Yt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new lr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class wn extends dn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new pe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ji;const Is=new T,Yi=new T,qi=new T,Ki=new re,Ps=new re,Ku=new ke,Br=new T,Ls=new T,Or=new T,$c=new re,to=new re,Jc=new re;class Rn extends ht{constructor(e=new wn){if(super(),this.isSprite=!0,this.type="Sprite",ji===void 0){ji=new Et;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new qu(t,5);ji.setIndex([0,1,2,0,2,3]),ji.setAttribute("position",new lr(n,3,0,!1)),ji.setAttribute("uv",new lr(n,2,3,!1))}this.geometry=ji,this.material=e,this.center=new re(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Yi.setFromMatrixScale(this.matrixWorld),Ku.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),qi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Yi.multiplyScalar(-qi.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const a=this.center;zr(Br.set(-.5,-.5,0),qi,a,Yi,i,r),zr(Ls.set(.5,-.5,0),qi,a,Yi,i,r),zr(Or.set(.5,.5,0),qi,a,Yi,i,r),$c.set(0,0),to.set(1,0),Jc.set(1,1);let o=e.ray.intersectTriangle(Br,Ls,Or,!1,Is);if(o===null&&(zr(Ls.set(-.5,.5,0),qi,a,Yi,i,r),to.set(0,1),o=e.ray.intersectTriangle(Br,Or,Ls,!1,Is),o===null))return;const l=e.ray.origin.distanceTo(Is);l<e.near||l>e.far||t.push({distance:l,point:Is.clone(),uv:cn.getInterpolation(Is,Br,Ls,Or,$c,to,Jc,new re),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function zr(s,e,t,n,i,r){Ki.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(Ps.x=r*Ki.x-i*Ki.y,Ps.y=i*Ki.x+r*Ki.y):Ps.copy(Ki),s.copy(e),s.x+=Ps.x,s.y+=Ps.y,s.applyMatrix4(Ku)}const Zc=new T,Qc=new it,eh=new it,vp=new T,th=new ke,Hr=new T,no=new In,nh=new ke,io=new fr;class Mp extends ne{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Rc,this.bindMatrix=new ke,this.bindMatrixInverse=new ke,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Jt),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Hr),this.boundingBox.expandByPoint(Hr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new In),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Hr),this.boundingSphere.expandByPoint(Hr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),no.copy(this.boundingSphere),no.applyMatrix4(i),e.ray.intersectsSphere(no)!==!1&&(nh.copy(i).invert(),io.copy(e.ray).applyMatrix4(nh),!(this.boundingBox!==null&&io.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,io)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new it,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Rc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===gf?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Qc.fromBufferAttribute(i.attributes.skinIndex,e),eh.fromBufferAttribute(i.attributes.skinWeight,e),Zc.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=eh.getComponent(r);if(a!==0){const o=Qc.getComponent(r);th.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(vp.copy(Zc).applyMatrix4(th),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class $u extends ht{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Ju extends Ct{constructor(e=null,t=1,n=1,i,r,a,o,l,c=Ft,h=Ft,u,d){super(null,a,o,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ih=new ke,bp=new ke;class Ql{constructor(e=[],t=[]){this.uuid=un(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new ke)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ke;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:bp;ih.multiplyMatrices(o,t[r]),ih.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Ql(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Ju(t,e,e,hn,Mn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new $u),this.bones.push(a),this.boneInverses.push(new ke().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class Ml extends Yt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const $i=new ke,sh=new ke,Gr=[],rh=new Jt,Sp=new ke,Ds=new ne,Ns=new In;class bl extends ne{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ml(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Sp)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Jt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,$i),rh.copy(e.boundingBox).applyMatrix4($i),this.boundingBox.union(rh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new In),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,$i),Ns.copy(e.boundingSphere).applyMatrix4($i),this.boundingSphere.union(Ns)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Ds.geometry=this.geometry,Ds.material=this.material,Ds.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ns.copy(this.boundingSphere),Ns.applyMatrix4(n),e.ray.intersectsSphere(Ns)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,$i),sh.multiplyMatrices(n,$i),Ds.matrixWorld=sh,Ds.raycast(e,Gr);for(let a=0,o=Gr.length;a<o;a++){const l=Gr[a];l.instanceId=r,l.object=this,t.push(l)}Gr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ml(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ju(new Float32Array(i*this.count),i,this.count,Gl,Mn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const so=new T,wp=new T,Tp=new Oe;class wi{constructor(e=new T(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=so.subVectors(n,t).cross(wp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(so),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Tp.getNormalMatrix(e),i=this.coplanarPoint(so).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xi=new In,Vr=new T;class ec{constructor(e=new wi,t=new wi,n=new wi,i=new wi,r=new wi,a=new wi){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Wn){const n=this.planes,i=e.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],f=i[8],m=i[9],_=i[10],g=i[11],p=i[12],v=i[13],y=i[14],x=i[15];if(n[0].setComponents(l-r,d-c,g-f,x-p).normalize(),n[1].setComponents(l+r,d+c,g+f,x+p).normalize(),n[2].setComponents(l+a,d+h,g+m,x+v).normalize(),n[3].setComponents(l-a,d-h,g-m,x-v).normalize(),n[4].setComponents(l-o,d-u,g-_,x-y).normalize(),t===Wn)n[5].setComponents(l+o,d+u,g+_,x+y).normalize();else if(t===wa)n[5].setComponents(o,u,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),xi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xi)}intersectsSprite(e){return xi.center.set(0,0,0),xi.radius=.7071067811865476,xi.applyMatrix4(e.matrixWorld),this.intersectsSphere(xi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Vr.x=i.normal.x>0?e.max.x:e.min.x,Vr.y=i.normal.y>0?e.max.y:e.min.y,Vr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Vr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Zu extends dn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new pe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ta=new T,Ea=new T,ah=new ke,Us=new fr,Wr=new In,ro=new T,oh=new T;class tc extends ht{constructor(e=new Et,t=new Zu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Ta.fromBufferAttribute(t,i-1),Ea.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Ta.distanceTo(Ea);e.setAttribute("lineDistance",new Qe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wr.copy(n.boundingSphere),Wr.applyMatrix4(i),Wr.radius+=r,e.ray.intersectsSphere(Wr)===!1)return;ah.copy(i).invert(),Us.copy(e.ray).applyMatrix4(ah);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let _=f,g=m-1;_<g;_+=c){const p=h.getX(_),v=h.getX(_+1),y=Xr(this,e,Us,l,p,v,_);y&&t.push(y)}if(this.isLineLoop){const _=h.getX(m-1),g=h.getX(f),p=Xr(this,e,Us,l,_,g,m-1);p&&t.push(p)}}else{const f=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let _=f,g=m-1;_<g;_+=c){const p=Xr(this,e,Us,l,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=Xr(this,e,Us,l,m-1,f,m-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Xr(s,e,t,n,i,r,a){const o=s.geometry.attributes.position;if(Ta.fromBufferAttribute(o,i),Ea.fromBufferAttribute(o,r),t.distanceSqToSegment(Ta,Ea,ro,oh)>n)return;ro.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(ro);if(!(c<e.near||c>e.far))return{distance:c,point:oh.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}const lh=new T,ch=new T;class Ep extends tc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)lh.fromBufferAttribute(t,i),ch.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+lh.distanceTo(ch);e.setAttribute("lineDistance",new Qe(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ap extends tc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Qu extends dn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const hh=new ke,Sl=new fr,jr=new In,Yr=new T;class Cp extends ht{constructor(e=new Et,t=new Qu){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),jr.copy(n.boundingSphere),jr.applyMatrix4(i),jr.radius+=r,e.ray.intersectsSphere(jr)===!1)return;hh.copy(i).invert(),Sl.copy(e.ray).applyMatrix4(hh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let m=d,_=f;m<_;m++){const g=c.getX(m);Yr.fromBufferAttribute(u,g),uh(Yr,g,l,i,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let m=d,_=f;m<_;m++)Yr.fromBufferAttribute(u,m),uh(Yr,m,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function uh(s,e,t,n,i,r,a){const o=Sl.distanceSqToPoint(s);if(o<t){const l=new T;Sl.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Dt extends Ct{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ed extends Ct{constructor(e,t,n=Ri,i,r,a,o=Ft,l=Ft,c,h=ir){if(h!==ir&&h!==sr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Kl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Pn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);const h=n[i],d=n[i+1]-h,f=(a-h)/d;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),l=t||(a.isVector2?new re:new T);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new T,i=[],r=[],a=[],o=new T,l=new ke;for(let f=0;f<=e;f++){const m=f/e;i[f]=this.getTangentAt(m,new T)}r[0]=new T,a[0]=new T;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const m=Math.acos(Ve(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,m))}a[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(Ve(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(i[m],f*m)),a[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class nc extends Pn{constructor(e=0,t=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new re){const n=t,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Rp extends nc{constructor(e,t,n,i,r,a){super(e,t,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function ic(){let s=0,e=0,t=0,n=0;function i(r,a,o,l){s=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,i(a,o,d,f)},calc:function(r){const a=r*r,o=a*r;return s+e*r+t*a+n*o}}}const qr=new T,ao=new ic,oo=new ic,lo=new ic;class td extends Pn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new T){const n=t,i=this.points,r=i.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(qr.subVectors(i[0],i[1]).add(i[0]),c=qr);const u=i[o%r],d=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(qr.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=qr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),m<1e-4&&(m=_),g<1e-4&&(g=_),ao.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,m,_,g),oo.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,m,_,g),lo.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,m,_,g)}else this.curveType==="catmullrom"&&(ao.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),oo.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),lo.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(ao.calc(l),oo.calc(l),lo.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new T().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function dh(s,e,t,n,i){const r=(n-e)*.5,a=(i-t)*.5,o=s*s,l=s*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*s+t}function Ip(s,e){const t=1-s;return t*t*e}function Pp(s,e){return 2*(1-s)*s*e}function Lp(s,e){return s*s*e}function Ks(s,e,t,n){return Ip(s,e)+Pp(s,t)+Lp(s,n)}function Dp(s,e){const t=1-s;return t*t*t*e}function Np(s,e){const t=1-s;return 3*t*t*s*e}function Up(s,e){return 3*(1-s)*s*s*e}function kp(s,e){return s*s*s*e}function $s(s,e,t,n,i){return Dp(s,e)+Np(s,t)+Up(s,n)+kp(s,i)}class nd extends Pn{constructor(e=new re,t=new re,n=new re,i=new re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new re){const n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set($s(e,i.x,r.x,a.x,o.x),$s(e,i.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Fp extends Pn{constructor(e=new T,t=new T,n=new T,i=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new T){const n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set($s(e,i.x,r.x,a.x,o.x),$s(e,i.y,r.y,a.y,o.y),$s(e,i.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class id extends Pn{constructor(e=new re,t=new re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new re){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new re){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Bp extends Pn{constructor(e=new T,t=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new T){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new T){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class sd extends Pn{constructor(e=new re,t=new re,n=new re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new re){const n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(Ks(e,i.x,r.x,a.x),Ks(e,i.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class sc extends Pn{constructor(e=new T,t=new T,n=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new T){const n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(Ks(e,i.x,r.x,a.x),Ks(e,i.y,r.y,a.y),Ks(e,i.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class rd extends Pn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new re){const n=t,i=this.points,r=(i.length-1)*e,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(dh(o,l.x,c.x,h.x,u.x),dh(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new re().fromArray(i))}return this}}var wl=Object.freeze({__proto__:null,ArcCurve:Rp,CatmullRomCurve3:td,CubicBezierCurve:nd,CubicBezierCurve3:Fp,EllipseCurve:nc,LineCurve:id,LineCurve3:Bp,QuadraticBezierCurve:sd,QuadraticBezierCurve3:sc,SplineCurve:rd});class Op extends Pn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new wl[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const a=i[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const a=r[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new wl[i.type]().fromJSON(i))}return this}}class fh extends Op{constructor(e){super(),this.type="Path",this.currentPoint=new re,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new id(this.currentPoint.clone(),new re(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new sd(this.currentPoint.clone(),new re(e,t),new re(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,a){const o=new nd(this.currentPoint.clone(),new re(e,t),new re(n,i),new re(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new rd(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,r,a),this}absarc(e,t,n,i,r,a){return this.absellipse(e,t,n,n,i,r,a),this}ellipse(e,t,n,i,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,r,a,o,l),this}absellipse(e,t,n,i,r,a,o,l){const c=new nc(e,t,n,i,r,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class At extends Et{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],a=[],o=[],l=[],c=new T,h=new re;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const f=n+u/t*i;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Qe(a,3)),this.setAttribute("normal",new Qe(o,3)),this.setAttribute("uv",new Qe(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new At(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Ge extends Et{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],f=[];let m=0;const _=[],g=n/2;let p=0;v(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Qe(u,3)),this.setAttribute("normal",new Qe(d,3)),this.setAttribute("uv",new Qe(f,2));function v(){const x=new T,I=new T;let A=0;const E=(t-e)/n;for(let R=0;R<=r;R++){const b=[],M=R/r,P=M*(t-e)+e;for(let F=0;F<=i;F++){const B=F/i,W=B*l+o,q=Math.sin(W),X=Math.cos(W);I.x=P*q,I.y=-M*n+g,I.z=P*X,u.push(I.x,I.y,I.z),x.set(q,E,X).normalize(),d.push(x.x,x.y,x.z),f.push(B,1-M),b.push(m++)}_.push(b)}for(let R=0;R<i;R++)for(let b=0;b<r;b++){const M=_[b][R],P=_[b+1][R],F=_[b+1][R+1],B=_[b][R+1];(e>0||b!==0)&&(h.push(M,P,B),A+=3),(t>0||b!==r-1)&&(h.push(P,F,B),A+=3)}c.addGroup(p,A,0),p+=A}function y(x){const I=m,A=new re,E=new T;let R=0;const b=x===!0?e:t,M=x===!0?1:-1;for(let F=1;F<=i;F++)u.push(0,g*M,0),d.push(0,M,0),f.push(.5,.5),m++;const P=m;for(let F=0;F<=i;F++){const W=F/i*l+o,q=Math.cos(W),X=Math.sin(W);E.x=b*X,E.y=g*M,E.z=b*q,u.push(E.x,E.y,E.z),d.push(0,M,0),A.x=q*.5+.5,A.y=X*.5*M+.5,f.push(A.x,A.y),m++}for(let F=0;F<i;F++){const B=I+F,W=P+F;x===!0?h.push(W,W+1,B):h.push(W+1,W,B),R+=3}c.addGroup(p,R,x===!0?1:2),p+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ge(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Kt extends Ge{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Kt(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class rc extends Et{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],a=[];o(i),c(n),h(),this.setAttribute("position",new Qe(r,3)),this.setAttribute("normal",new Qe(r.slice(),3)),this.setAttribute("uv",new Qe(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(v){const y=new T,x=new T,I=new T;for(let A=0;A<t.length;A+=3)f(t[A+0],y),f(t[A+1],x),f(t[A+2],I),l(y,x,I,v)}function l(v,y,x,I){const A=I+1,E=[];for(let R=0;R<=A;R++){E[R]=[];const b=v.clone().lerp(x,R/A),M=y.clone().lerp(x,R/A),P=A-R;for(let F=0;F<=P;F++)F===0&&R===A?E[R][F]=b:E[R][F]=b.clone().lerp(M,F/P)}for(let R=0;R<A;R++)for(let b=0;b<2*(A-R)-1;b++){const M=Math.floor(b/2);b%2===0?(d(E[R][M+1]),d(E[R+1][M]),d(E[R][M])):(d(E[R][M+1]),d(E[R+1][M+1]),d(E[R+1][M]))}}function c(v){const y=new T;for(let x=0;x<r.length;x+=3)y.x=r[x+0],y.y=r[x+1],y.z=r[x+2],y.normalize().multiplyScalar(v),r[x+0]=y.x,r[x+1]=y.y,r[x+2]=y.z}function h(){const v=new T;for(let y=0;y<r.length;y+=3){v.x=r[y+0],v.y=r[y+1],v.z=r[y+2];const x=g(v)/2/Math.PI+.5,I=p(v)/Math.PI+.5;a.push(x,1-I)}m(),u()}function u(){for(let v=0;v<a.length;v+=6){const y=a[v+0],x=a[v+2],I=a[v+4],A=Math.max(y,x,I),E=Math.min(y,x,I);A>.9&&E<.1&&(y<.2&&(a[v+0]+=1),x<.2&&(a[v+2]+=1),I<.2&&(a[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function f(v,y){const x=v*3;y.x=e[x+0],y.y=e[x+1],y.z=e[x+2]}function m(){const v=new T,y=new T,x=new T,I=new T,A=new re,E=new re,R=new re;for(let b=0,M=0;b<r.length;b+=9,M+=6){v.set(r[b+0],r[b+1],r[b+2]),y.set(r[b+3],r[b+4],r[b+5]),x.set(r[b+6],r[b+7],r[b+8]),A.set(a[M+0],a[M+1]),E.set(a[M+2],a[M+3]),R.set(a[M+4],a[M+5]),I.copy(v).add(y).add(x).divideScalar(3);const P=g(I);_(A,M+0,v,P),_(E,M+2,y,P),_(R,M+4,x,P)}}function _(v,y,x,I){I<0&&v.x===1&&(a[y]=v.x-1),x.x===0&&x.z===0&&(a[y]=I/2/Math.PI+.5)}function g(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rc(e.vertices,e.indices,e.radius,e.details)}}class ac extends rc{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ac(e.radius,e.detail)}}class ad extends fh{constructor(e){super(e),this.uuid=un(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new fh().fromJSON(i))}return this}}function zp(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=od(s,0,i,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Xp(s,e,r,t)),s.length>80*t){o=1/0,l=1/0;let h=-1/0,u=-1/0;for(let d=t;d<i;d+=t){const f=s[d],m=s[d+1];f<o&&(o=f),m<l&&(l=m),f>h&&(h=f),m>u&&(u=m)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return cr(r,a,t,o,l,c,0),a}function od(s,e,t,n,i){let r;if(i===nm(s,e,t,n)>0)for(let a=e;a<t;a+=n)r=ph(a/n|0,s[a],s[a+1],r);else for(let a=t-n;a>=e;a-=n)r=ph(a/n|0,s[a],s[a+1],r);return r&&ms(r,r.next)&&(ur(r),r=r.next),r}function Ii(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(ms(t,t.next)||yt(t.prev,t,t.next)===0)){if(ur(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function cr(s,e,t,n,i,r,a){if(!s)return;!a&&r&&$p(s,n,i,r);let o=s;for(;s.prev!==s.next;){const l=s.prev,c=s.next;if(r?Gp(s,n,i,r):Hp(s)){e.push(l.i,s.i,c.i),ur(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=Vp(Ii(s),e),cr(s,e,t,n,i,r,2)):a===2&&Wp(s,e,t,n,i,r):cr(Ii(s),e,t,n,i,r,1);break}}}function Hp(s){const e=s.prev,t=s,n=s.next;if(yt(e,t,n)>=0)return!1;const i=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=Math.min(i,r,a),u=Math.min(o,l,c),d=Math.max(i,r,a),f=Math.max(o,l,c);let m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=f&&Ws(i,o,r,l,a,c,m.x,m.y)&&yt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Gp(s,e,t,n){const i=s.prev,r=s,a=s.next;if(yt(i,r,a)>=0)return!1;const o=i.x,l=r.x,c=a.x,h=i.y,u=r.y,d=a.y,f=Math.min(o,l,c),m=Math.min(h,u,d),_=Math.max(o,l,c),g=Math.max(h,u,d),p=Tl(f,m,e,t,n),v=Tl(_,g,e,t,n);let y=s.prevZ,x=s.nextZ;for(;y&&y.z>=p&&x&&x.z<=v;){if(y.x>=f&&y.x<=_&&y.y>=m&&y.y<=g&&y!==i&&y!==a&&Ws(o,h,l,u,c,d,y.x,y.y)&&yt(y.prev,y,y.next)>=0||(y=y.prevZ,x.x>=f&&x.x<=_&&x.y>=m&&x.y<=g&&x!==i&&x!==a&&Ws(o,h,l,u,c,d,x.x,x.y)&&yt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;y&&y.z>=p;){if(y.x>=f&&y.x<=_&&y.y>=m&&y.y<=g&&y!==i&&y!==a&&Ws(o,h,l,u,c,d,y.x,y.y)&&yt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;x&&x.z<=v;){if(x.x>=f&&x.x<=_&&x.y>=m&&x.y<=g&&x!==i&&x!==a&&Ws(o,h,l,u,c,d,x.x,x.y)&&yt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Vp(s,e){let t=s;do{const n=t.prev,i=t.next.next;!ms(n,i)&&cd(n,t,t.next,i)&&hr(n,i)&&hr(i,n)&&(e.push(n.i,t.i,i.i),ur(t),ur(t.next),t=s=i),t=t.next}while(t!==s);return Ii(t)}function Wp(s,e,t,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Qp(a,o)){let l=hd(a,o);a=Ii(a,a.next),l=Ii(l,l.next),cr(a,e,t,n,i,r,0),cr(l,e,t,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function Xp(s,e,t,n){const i=[];for(let r=0,a=e.length;r<a;r++){const o=e[r]*n,l=r<a-1?e[r+1]*n:s.length,c=od(s,o,l,n,!1);c===c.next&&(c.steiner=!0),i.push(Zp(c))}i.sort(jp);for(let r=0;r<i.length;r++)t=Yp(i[r],t);return t}function jp(s,e){let t=s.x-e.x;if(t===0&&(t=s.y-e.y,t===0)){const n=(s.next.y-s.y)/(s.next.x-s.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function Yp(s,e){const t=qp(s,e);if(!t)return e;const n=hd(t,s);return Ii(n,n.next),Ii(t,t.next)}function qp(s,e){let t=e;const n=s.x,i=s.y;let r=-1/0,a;if(ms(s,t))return t;do{if(ms(s,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const u=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,a=t.x<t.next.x?t:t.next,u===n))return a}t=t.next}while(t!==e);if(!a)return null;const o=a,l=a.x,c=a.y;let h=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&ld(i<c?n:r,i,l,c,i<c?r:n,i,t.x,t.y)){const u=Math.abs(i-t.y)/(n-t.x);hr(t,s)&&(u<h||u===h&&(t.x>a.x||t.x===a.x&&Kp(a,t)))&&(a=t,h=u)}t=t.next}while(t!==o);return a}function Kp(s,e){return yt(s.prev,s,e.prev)<0&&yt(e.next,s,s.next)<0}function $p(s,e,t,n){let i=s;do i.z===0&&(i.z=Tl(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Jp(i)}function Jp(s){let e,t=1;do{let n=s,i;s=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(i=n,n=n.nextZ,o--):(i=a,a=a.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=a}r.nextZ=null,t*=2}while(e>1);return s}function Tl(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function Zp(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function ld(s,e,t,n,i,r,a,o){return(i-a)*(e-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(i-a)*(n-o)}function Ws(s,e,t,n,i,r,a,o){return!(s===a&&e===o)&&ld(s,e,t,n,i,r,a,o)}function Qp(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!em(s,e)&&(hr(s,e)&&hr(e,s)&&tm(s,e)&&(yt(s.prev,s,e.prev)||yt(s,e.prev,e))||ms(s,e)&&yt(s.prev,s,s.next)>0&&yt(e.prev,e,e.next)>0)}function yt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function ms(s,e){return s.x===e.x&&s.y===e.y}function cd(s,e,t,n){const i=$r(yt(s,e,t)),r=$r(yt(s,e,n)),a=$r(yt(t,n,s)),o=$r(yt(t,n,e));return!!(i!==r&&a!==o||i===0&&Kr(s,t,e)||r===0&&Kr(s,n,e)||a===0&&Kr(t,s,n)||o===0&&Kr(t,e,n))}function Kr(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function $r(s){return s>0?1:s<0?-1:0}function em(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&cd(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function hr(s,e){return yt(s.prev,s,s.next)<0?yt(s,e,s.next)>=0&&yt(s,s.prev,e)>=0:yt(s,e,s.prev)<0||yt(s,s.next,e)<0}function tm(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function hd(s,e){const t=El(s.i,s.x,s.y),n=El(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function ph(s,e,t,n){const i=El(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function ur(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function El(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function nm(s,e,t,n){let i=0;for(let r=e,a=t-n;r<t;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}class im{static triangulate(e,t,n=2){return zp(e,t,n)}}class Js{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return Js.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];mh(e),gh(n,e);let a=e.length;t.forEach(mh);for(let l=0;l<t.length;l++)i.push(a),a+=t[l].length,gh(n,t[l]);const o=im.triangulate(n,i);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function mh(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function gh(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class jt extends Et{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=e/o,d=t/l,f=[],m=[],_=[],g=[];for(let p=0;p<h;p++){const v=p*d-a;for(let y=0;y<c;y++){const x=y*u-r;m.push(x,-v,0),_.push(0,0,1),g.push(y/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<o;v++){const y=v+c*p,x=v+c*(p+1),I=v+1+c*(p+1),A=v+1+c*p;f.push(y,x,A),f.push(x,I,A)}this.setIndex(f),this.setAttribute("position",new Qe(m,3)),this.setAttribute("normal",new Qe(_,3)),this.setAttribute("uv",new Qe(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jt(e.width,e.height,e.widthSegments,e.heightSegments)}}class oc extends Et{constructor(e=new ad([new re(0,.5),new re(-.5,-.5),new re(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],r=[],a=[];let o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Qe(i,3)),this.setAttribute("normal",new Qe(r,3)),this.setAttribute("uv",new Qe(a,2));function c(h){const u=i.length/3,d=h.extractPoints(t);let f=d.shape;const m=d.holes;Js.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,p=m.length;g<p;g++){const v=m[g];Js.isClockWise(v)===!0&&(m[g]=v.reverse())}const _=Js.triangulateShape(f,m);for(let g=0,p=m.length;g<p;g++){const v=m[g];f=f.concat(v)}for(let g=0,p=f.length;g<p;g++){const v=f[g];i.push(v.x,v.y,0),r.push(0,0,1),a.push(v.x,v.y)}for(let g=0,p=_.length;g<p;g++){const v=_[g],y=v[0]+u,x=v[1]+u,I=v[2]+u;n.push(y,x,I),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return sm(t,e)}static fromJSON(e,t){const n=[];for(let i=0,r=e.shapes.length;i<r;i++){const a=t[e.shapes[i]];n.push(a)}return new oc(n,e.curveSegments)}}function sm(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){const i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}class Fe extends Et{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new T,d=new T,f=[],m=[],_=[],g=[];for(let p=0;p<=n;p++){const v=[],y=p/n;let x=0;p===0&&a===0?x=.5/t:p===n&&l===Math.PI&&(x=-.5/t);for(let I=0;I<=t;I++){const A=I/t;u.x=-e*Math.cos(i+A*r)*Math.sin(a+y*o),u.y=e*Math.cos(a+y*o),u.z=e*Math.sin(i+A*r)*Math.sin(a+y*o),m.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),g.push(A+x,1-y),v.push(c++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<t;v++){const y=h[p][v+1],x=h[p][v],I=h[p+1][v],A=h[p+1][v+1];(p!==0||a>0)&&f.push(y,x,A),(p!==n-1||l<Math.PI)&&f.push(x,I,A)}this.setIndex(f),this.setAttribute("position",new Qe(m,3)),this.setAttribute("normal",new Qe(_,3)),this.setAttribute("uv",new Qe(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fe(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class di extends Et{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],l=[],c=[],h=new T,u=new T,d=new T;for(let f=0;f<=n;f++)for(let m=0;m<=i;m++){const _=m/i*r,g=f/n*Math.PI*2;u.x=(e+t*Math.cos(g))*Math.cos(_),u.y=(e+t*Math.cos(g))*Math.sin(_),u.z=t*Math.sin(g),o.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(m/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=i;m++){const _=(i+1)*f+m-1,g=(i+1)*(f-1)+m-1,p=(i+1)*(f-1)+m,v=(i+1)*f+m;a.push(_,g,v),a.push(g,p,v)}this.setIndex(a),this.setAttribute("position",new Qe(o,3)),this.setAttribute("normal",new Qe(l,3)),this.setAttribute("uv",new Qe(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new di(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class lc extends Et{constructor(e=new sc(new T(-1,-1,0),new T(-1,1,0),new T(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};const a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new T,l=new T,c=new re;let h=new T;const u=[],d=[],f=[],m=[];_(),this.setIndex(m),this.setAttribute("position",new Qe(u,3)),this.setAttribute("normal",new Qe(d,3)),this.setAttribute("uv",new Qe(f,2));function _(){for(let y=0;y<t;y++)g(y);g(r===!1?t:0),v(),p()}function g(y){h=e.getPointAt(y/t,h);const x=a.normals[y],I=a.binormals[y];for(let A=0;A<=i;A++){const E=A/i*Math.PI*2,R=Math.sin(E),b=-Math.cos(E);l.x=b*x.x+R*I.x,l.y=b*x.y+R*I.y,l.z=b*x.z+R*I.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function p(){for(let y=1;y<=t;y++)for(let x=1;x<=i;x++){const I=(i+1)*(y-1)+(x-1),A=(i+1)*y+(x-1),E=(i+1)*y+x,R=(i+1)*(y-1)+x;m.push(I,A,R),m.push(A,E,R)}}function v(){for(let y=0;y<=t;y++)for(let x=0;x<=i;x++)c.x=y/t,c.y=x/i,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new lc(new wl[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class rm extends Sn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class cc extends dn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yl,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ln extends cc{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new re(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ve(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new pe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new pe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new pe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class ud extends dn{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new pe(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yl,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class am extends dn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class om extends dn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Jr(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function lm(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function cm(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function _h(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)i[a++]=s[o+l]}return i}function dd(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}class pr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class hm extends pr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:es,endingEnd:es}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case ts:r=e,o=2*t-n;break;case ba:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ts:a=e,l=2*n-t;break;case ba:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-t)/(i-t),_=m*m,g=_*m,p=-d*g+2*d*_-d*m,v=(1+d)*g+(-1.5-2*d)*_+(-.5+d)*m+1,y=(-1-f)*g+(1.5+f)*_+.5*m,x=f*g-f*_;for(let I=0;I!==o;++I)r[I]=p*a[h+I]+v*a[c+I]+y*a[l+I]+x*a[u+I];return r}}class fd extends pr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}}class um extends pr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Tn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Jr(t,this.TimeBufferType),this.values=Jr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Jr(e.times,Array),values:Jr(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new um(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new fd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new hm(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case rr:t=this.InterpolantFactoryMethodDiscrete;break;case ar:t=this.InterpolantFactoryMethodLinear;break;case Na:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return rr;case this.InterpolantFactoryMethodLinear:return ar;case this.InterpolantFactoryMethodSmooth:return Na}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&lm(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Na,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)l=!0;else{const u=o*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){const _=t[u+m];if(_!==t[d+m]||_!==t[f+m]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Tn.prototype.ValueTypeName="";Tn.prototype.TimeBufferType=Float32Array;Tn.prototype.ValueBufferType=Float32Array;Tn.prototype.DefaultInterpolation=ar;class Ms extends Tn{constructor(e,t,n){super(e,t,n)}}Ms.prototype.ValueTypeName="bool";Ms.prototype.ValueBufferType=Array;Ms.prototype.DefaultInterpolation=rr;Ms.prototype.InterpolantFactoryMethodLinear=void 0;Ms.prototype.InterpolantFactoryMethodSmooth=void 0;class pd extends Tn{constructor(e,t,n,i){super(e,t,n,i)}}pd.prototype.ValueTypeName="color";class gs extends Tn{constructor(e,t,n,i){super(e,t,n,i)}}gs.prototype.ValueTypeName="number";class dm extends pr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let h=c+o;c!==h;c+=4)bn.slerpFlat(r,0,a,c-o,a,c,l);return r}}class _s extends Tn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new dm(this.times,this.values,this.getValueSize(),e)}}_s.prototype.ValueTypeName="quaternion";_s.prototype.InterpolantFactoryMethodSmooth=void 0;class bs extends Tn{constructor(e,t,n){super(e,t,n)}}bs.prototype.ValueTypeName="string";bs.prototype.ValueBufferType=Array;bs.prototype.DefaultInterpolation=rr;bs.prototype.InterpolantFactoryMethodLinear=void 0;bs.prototype.InterpolantFactoryMethodSmooth=void 0;class xs extends Tn{constructor(e,t,n,i){super(e,t,n,i)}}xs.prototype.ValueTypeName="vector";class Al{constructor(e="",t=-1,n=[],i=jl){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=un(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(pm(n[a]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(Tn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const h=cm(l);l=_h(l,1,h),c=_h(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new gs(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,m,_){if(f.length!==0){const g=[],p=[];dd(f,g,p,m),g.length!==0&&_.push(new u(d,g,p))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let _=0;_<d[m].morphTargets.length;_++)f[d[m].morphTargets[_]]=-1;for(const _ in f){const g=[],p=[];for(let v=0;v!==d[m].morphTargets.length;++v){const y=d[m];g.push(y.time),p.push(y.morphTarget===_?1:0)}i.push(new gs(".morphTargetInfluence["+_+"]",g,p))}l=f.length*a}else{const f=".bones["+t[u].name+"]";n(xs,f+".position",d,"pos",i),n(_s,f+".quaternion",d,"rot",i),n(xs,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function fm(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return gs;case"vector":case"vector2":case"vector3":case"vector4":return xs;case"color":return pd;case"quaternion":return _s;case"bool":case"boolean":return Ms;case"string":return bs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function pm(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=fm(s.type);if(s.times===void 0){const t=[],n=[];dd(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const ci={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class mm{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],m=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null}}}const gm=new mm;class Ss{constructor(e){this.manager=e!==void 0?e:gm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ss.DEFAULT_MATERIAL_NAME="__DEFAULT";const On={};class _m extends Error{constructor(e,t){super(e),this.response=t}}class md extends Ss{constructor(e){super(e),this.mimeType="",this.responseType=""}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=ci.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(On[e]!==void 0){On[e].push({onLoad:t,onProgress:n,onError:i});return}On[e]=[],On[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=On[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0;let _=0;const g=new ReadableStream({start(p){v();function v(){u.read().then(({done:y,value:x})=>{if(y)p.close();else{_+=x.byteLength;const I=new ProgressEvent("progress",{lengthComputable:m,loaded:_,total:f});for(let A=0,E=h.length;A<E;A++){const R=h[A];R.onProgress&&R.onProgress(I)}p.enqueue(x),v()}},y=>{p.error(y)})}}});return new Response(g)}else throw new _m(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(m=>f.decode(m))}}}).then(c=>{ci.add(e,c);const h=On[e];delete On[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=On[e];if(h===void 0)throw this.manager.itemError(e),c;delete On[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class xm extends Ss{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=ci.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=or("img");function l(){h(),ci.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class ym extends Ss{constructor(e){super(e)}load(e,t,n,i){const r=new Ct,a=new xm(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class mr extends ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new pe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class vm extends mr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.groundColor=new pe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const co=new ke,xh=new T,yh=new T;class hc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new re(512,512),this.map=null,this.mapPass=null,this.matrix=new ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ec,this._frameExtents=new re(1,1),this._viewportCount=1,this._viewports=[new it(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;xh.setFromMatrixPosition(e.matrixWorld),t.position.copy(xh),yh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(yh),t.updateMatrixWorld(),co.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(co),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(co)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Mm extends hc{constructor(){super(new Xt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=fs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class bm extends mr{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.target=new ht,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Mm}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const vh=new ke,ks=new T,ho=new T;class Sm extends hc{constructor(){super(new Xt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new re(4,2),this._viewportCount=6,this._viewports=[new it(2,1,1,1),new it(0,1,1,1),new it(3,1,1,1),new it(1,1,1,1),new it(3,0,1,1),new it(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ks.setFromMatrixPosition(e.matrixWorld),n.position.copy(ks),ho.copy(n.position),ho.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ho),n.updateMatrixWorld(),i.makeTranslation(-ks.x,-ks.y,-ks.z),vh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vh)}}class ns extends mr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Sm}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Ca extends ju{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class wm extends hc{constructor(){super(new Ca(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Cl extends mr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.target=new ht,this.shadow=new wm}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Tm extends mr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Zs{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Em extends Ss{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=ci.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return ci.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),ci.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});ci.add(e,l),r.manager.itemStart(e)}}class Am extends Xt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}class gd{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Mh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Mh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Mh(){return performance.now()}class Cm{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,a;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[r+o]=n[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){o.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,a=i;r!==a;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){bn.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){const a=this._workIndex*r;bn.multiplyQuaternionsFlat(e,a,e,t,e,n),bn.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,r){const a=1-i;for(let o=0;o!==r;++o){const l=t+o;e[l]=e[l]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,r){for(let a=0;a!==r;++a){const o=t+a;e[o]=e[o]+e[n+a]*i}}}const uc="\\[\\]\\.:\\/",Rm=new RegExp("["+uc+"]","g"),dc="[^"+uc+"]",Im="[^"+uc.replace("\\.","")+"]",Pm=/((?:WC+[\/:])*)/.source.replace("WC",dc),Lm=/(WCOD+)?/.source.replace("WCOD",Im),Dm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",dc),Nm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",dc),Um=new RegExp("^"+Pm+Lm+Dm+Nm+"$"),km=["material","materials","bones","map"];class Fm{constructor(e,t,n){const i=n||at.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class at{constructor(e,t,n){this.path=t,this.parsedPath=n||at.parseTrackName(t),this.node=at.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new at.Composite(e,t,n):new at(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Rm,"")}static parseTrackName(e){const t=Um.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);km.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=at.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}at.Composite=Fm;at.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};at.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};at.prototype.GetterByBindingType=[at.prototype._getValue_direct,at.prototype._getValue_array,at.prototype._getValue_arrayElement,at.prototype._getValue_toArray];at.prototype.SetterByBindingTypeAndVersioning=[[at.prototype._setValue_direct,at.prototype._setValue_direct_setNeedsUpdate,at.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[at.prototype._setValue_array,at.prototype._setValue_array_setNeedsUpdate,at.prototype._setValue_array_setMatrixWorldNeedsUpdate],[at.prototype._setValue_arrayElement,at.prototype._setValue_arrayElement_setNeedsUpdate,at.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[at.prototype._setValue_fromArray,at.prototype._setValue_fromArray_setNeedsUpdate,at.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Bm{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const r=t.tracks,a=r.length,o=new Array(a),l={endingStart:es,endingEnd:es};for(let c=0;c!==a;++c){const h=r[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Fu,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){const i=this._clip.duration,r=e._clip.duration,a=r/i,o=i/r;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case xf:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulateAdditive(o);break;case jl:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const a=n===_f;if(e===0)return r===-1?i:a&&(r&1)===1?t-i:i;if(n===ku){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){const o=Math.floor(i/t);i-=t*o,r+=Math.abs(o);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=ts,i.endingEnd=ts):(e?i.endingStart=this.zeroSlopeAtStart?ts:es:i.endingStart=ba,t?i.endingEnd=this.zeroSlopeAtEnd?ts:es:i.endingEnd=ba)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=r,l[0]=t,o[1]=r+e,l[1]=n,this}}const Om=new Float32Array(1);class zm extends Pi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,a=e._propertyBindings,o=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==r;++u){const d=i[u],f=d.name;let m=h[f];if(m!==void 0)++m.referenceCount,a[u]=m;else{if(m=a[u],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,l,f));continue}const _=t&&t._propertyBindings[u].binding.parsedPath;m=new Cm(at.create(n,f,_),d.ValueTypeName,d.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,l,f),a[u]=m}o[u].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,a=this._actionsByClip,o=a[r],l=o.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const u=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],l.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new fd(new Float32Array(2),new Float32Array(2),1,Om),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const i=t||this._root,r=i.uuid;let a=typeof e=="string"?Al.findByName(i,e):e;const o=a!==null?a.uuid:e,l=this._actionsByClip[o];let c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=jl),l!==void 0){const u=l.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const h=new Bm(this,a,t,n);return this._bindAction(h,c),this._addInactiveAction(h,o,r),h}existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?Al.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,a);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const a=r.knownActions;for(let o=0,l=a.length;o!==l;++o){const c=a[o];this._deactivateAction(c);const h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const a in r){const o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}const bh=new ke;class fc{constructor(e,t,n=0,i=1/0){this.ray=new fr(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new $l,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return bh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(bh),this}intersectObject(e,t=!0,n=[]){return Rl(e,this,n,t),n.sort(Sh),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Rl(e[i],this,n,t);return n.sort(Sh),n}}function Sh(s,e){return s.distance-e.distance}function Rl(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let a=0,o=r.length;a<o;a++)Rl(r[a],e,t,!0)}}function wh(s,e,t,n){const i=Hm(n);switch(t){case Iu:return s*e;case Lu:return s*e;case Du:return s*e*2;case Gl:return s*e/i.components*i.byteLength;case Vl:return s*e/i.components*i.byteLength;case Nu:return s*e*2/i.components*i.byteLength;case Wl:return s*e*2/i.components*i.byteLength;case Pu:return s*e*3/i.components*i.byteLength;case hn:return s*e*4/i.components*i.byteLength;case Xl:return s*e*4/i.components*i.byteLength;case fa:case pa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ma:case ga:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case qo:case $o:return Math.max(s,16)*Math.max(e,8)/4;case Yo:case Ko:return Math.max(s,8)*Math.max(e,8)/2;case Jo:case Zo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Qo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case el:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case tl:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case nl:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case il:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case sl:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case rl:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case al:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case ol:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case ll:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case cl:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case hl:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case ul:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case dl:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case fl:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case _a:case pl:case ml:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Uu:case gl:return Math.ceil(s/4)*Math.ceil(e/4)*8;case _l:case xl:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Hm(s){switch(s){case qn:case Au:return{byteLength:1,components:1};case tr:case Cu:case vs:return{byteLength:2,components:1};case zl:case Hl:return{byteLength:2,components:4};case Ri:case Ol:case Mn:return{byteLength:4,components:1};case Ru:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fl);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function _d(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Gm(s){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){const m=u[d],_=u[f];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){const _=u[f];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var Vm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wm=`#ifdef USE_ALPHAHASH
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
#endif`,Xm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ym=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Km=`#ifdef USE_AOMAP
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
#endif`,$m=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jm=`#ifdef USE_BATCHING
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
#endif`,Zm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Qm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,e0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,t0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,n0=`#ifdef USE_IRIDESCENCE
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
#endif`,i0=`#ifdef USE_BUMPMAP
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
#endif`,s0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,r0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,a0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,o0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,l0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,c0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,h0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,u0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,d0=`#define PI 3.141592653589793
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
} // validated`,f0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,p0=`vec3 transformedNormal = objectNormal;
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
#endif`,m0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,g0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,x0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,y0="gl_FragColor = linearToOutputTexel( gl_FragColor );",v0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,M0=`#ifdef USE_ENVMAP
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
#endif`,b0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,S0=`#ifdef USE_ENVMAP
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
#endif`,w0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,T0=`#ifdef USE_ENVMAP
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
#endif`,E0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,A0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,C0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,R0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,I0=`#ifdef USE_GRADIENTMAP
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
}`,P0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,L0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,D0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,N0=`uniform bool receiveShadow;
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
#endif`,U0=`#ifdef USE_ENVMAP
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
#endif`,k0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,F0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,B0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,O0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,z0=`PhysicalMaterial material;
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
#endif`,H0=`struct PhysicalMaterial {
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
}`,G0=`
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
#endif`,V0=`#if defined( RE_IndirectDiffuse )
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
#endif`,W0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,X0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,j0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Y0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,q0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,K0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,J0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Z0=`#if defined( USE_POINTS_UV )
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
#endif`,Q0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,eg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ng=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ig=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sg=`#ifdef USE_MORPHTARGETS
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
#endif`,rg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ag=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,og=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,lg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ug=`#ifdef USE_NORMALMAP
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
#endif`,dg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_g=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,xg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Tg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Eg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ag=`float getShadowMask() {
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
}`,Cg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Rg=`#ifdef USE_SKINNING
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
#endif`,Ig=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Pg=`#ifdef USE_SKINNING
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
#endif`,Lg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Dg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ng=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ug=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,kg=`#ifdef USE_TRANSMISSION
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
#endif`,Fg=`#ifdef USE_TRANSMISSION
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
#endif`,Bg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Og=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Gg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vg=`uniform sampler2D t2D;
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
}`,Wg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,jg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qg=`#include <common>
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
}`,Kg=`#if DEPTH_PACKING == 3200
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
}`,$g=`#define DISTANCE
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
}`,Jg=`#define DISTANCE
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
}`,Zg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Qg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,e_=`uniform float scale;
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
}`,t_=`uniform vec3 diffuse;
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
}`,n_=`#include <common>
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
}`,i_=`uniform vec3 diffuse;
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
}`,s_=`#define LAMBERT
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
}`,r_=`#define LAMBERT
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
}`,a_=`#define MATCAP
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
}`,o_=`#define MATCAP
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
}`,l_=`#define NORMAL
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
}`,c_=`#define NORMAL
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
}`,h_=`#define PHONG
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
}`,u_=`#define PHONG
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
}`,d_=`#define STANDARD
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
}`,f_=`#define STANDARD
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
}`,p_=`#define TOON
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
}`,m_=`#define TOON
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
}`,g_=`uniform float size;
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
}`,__=`uniform vec3 diffuse;
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
}`,x_=`#include <common>
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
}`,y_=`uniform vec3 color;
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
}`,v_=`uniform float rotation;
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
}`,M_=`uniform vec3 diffuse;
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
}`,He={alphahash_fragment:Vm,alphahash_pars_fragment:Wm,alphamap_fragment:Xm,alphamap_pars_fragment:jm,alphatest_fragment:Ym,alphatest_pars_fragment:qm,aomap_fragment:Km,aomap_pars_fragment:$m,batching_pars_vertex:Jm,batching_vertex:Zm,begin_vertex:Qm,beginnormal_vertex:e0,bsdfs:t0,iridescence_fragment:n0,bumpmap_pars_fragment:i0,clipping_planes_fragment:s0,clipping_planes_pars_fragment:r0,clipping_planes_pars_vertex:a0,clipping_planes_vertex:o0,color_fragment:l0,color_pars_fragment:c0,color_pars_vertex:h0,color_vertex:u0,common:d0,cube_uv_reflection_fragment:f0,defaultnormal_vertex:p0,displacementmap_pars_vertex:m0,displacementmap_vertex:g0,emissivemap_fragment:_0,emissivemap_pars_fragment:x0,colorspace_fragment:y0,colorspace_pars_fragment:v0,envmap_fragment:M0,envmap_common_pars_fragment:b0,envmap_pars_fragment:S0,envmap_pars_vertex:w0,envmap_physical_pars_fragment:U0,envmap_vertex:T0,fog_vertex:E0,fog_pars_vertex:A0,fog_fragment:C0,fog_pars_fragment:R0,gradientmap_pars_fragment:I0,lightmap_pars_fragment:P0,lights_lambert_fragment:L0,lights_lambert_pars_fragment:D0,lights_pars_begin:N0,lights_toon_fragment:k0,lights_toon_pars_fragment:F0,lights_phong_fragment:B0,lights_phong_pars_fragment:O0,lights_physical_fragment:z0,lights_physical_pars_fragment:H0,lights_fragment_begin:G0,lights_fragment_maps:V0,lights_fragment_end:W0,logdepthbuf_fragment:X0,logdepthbuf_pars_fragment:j0,logdepthbuf_pars_vertex:Y0,logdepthbuf_vertex:q0,map_fragment:K0,map_pars_fragment:$0,map_particle_fragment:J0,map_particle_pars_fragment:Z0,metalnessmap_fragment:Q0,metalnessmap_pars_fragment:eg,morphinstance_vertex:tg,morphcolor_vertex:ng,morphnormal_vertex:ig,morphtarget_pars_vertex:sg,morphtarget_vertex:rg,normal_fragment_begin:ag,normal_fragment_maps:og,normal_pars_fragment:lg,normal_pars_vertex:cg,normal_vertex:hg,normalmap_pars_fragment:ug,clearcoat_normal_fragment_begin:dg,clearcoat_normal_fragment_maps:fg,clearcoat_pars_fragment:pg,iridescence_pars_fragment:mg,opaque_fragment:gg,packing:_g,premultiplied_alpha_fragment:xg,project_vertex:yg,dithering_fragment:vg,dithering_pars_fragment:Mg,roughnessmap_fragment:bg,roughnessmap_pars_fragment:Sg,shadowmap_pars_fragment:wg,shadowmap_pars_vertex:Tg,shadowmap_vertex:Eg,shadowmask_pars_fragment:Ag,skinbase_vertex:Cg,skinning_pars_vertex:Rg,skinning_vertex:Ig,skinnormal_vertex:Pg,specularmap_fragment:Lg,specularmap_pars_fragment:Dg,tonemapping_fragment:Ng,tonemapping_pars_fragment:Ug,transmission_fragment:kg,transmission_pars_fragment:Fg,uv_pars_fragment:Bg,uv_pars_vertex:Og,uv_vertex:zg,worldpos_vertex:Hg,background_vert:Gg,background_frag:Vg,backgroundCube_vert:Wg,backgroundCube_frag:Xg,cube_vert:jg,cube_frag:Yg,depth_vert:qg,depth_frag:Kg,distanceRGBA_vert:$g,distanceRGBA_frag:Jg,equirect_vert:Zg,equirect_frag:Qg,linedashed_vert:e_,linedashed_frag:t_,meshbasic_vert:n_,meshbasic_frag:i_,meshlambert_vert:s_,meshlambert_frag:r_,meshmatcap_vert:a_,meshmatcap_frag:o_,meshnormal_vert:l_,meshnormal_frag:c_,meshphong_vert:h_,meshphong_frag:u_,meshphysical_vert:d_,meshphysical_frag:f_,meshtoon_vert:p_,meshtoon_frag:m_,points_vert:g_,points_frag:__,shadow_vert:x_,shadow_frag:y_,sprite_vert:v_,sprite_frag:M_},ae={common:{diffuse:{value:new pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new pe(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},En={basic:{uniforms:Wt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:Wt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new pe(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:Wt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new pe(0)},specular:{value:new pe(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:Wt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:Wt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new pe(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:Wt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:Wt([ae.points,ae.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:Wt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:Wt([ae.common,ae.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:Wt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:Wt([ae.sprite,ae.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:Wt([ae.common,ae.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:Wt([ae.lights,ae.fog,{color:{value:new pe(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};En.physical={uniforms:Wt([En.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new pe(0)},specularColor:{value:new pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const Zr={r:0,b:0,g:0},yi=new Cn,b_=new ke;function S_(s,e,t,n,i,r,a){const o=new pe(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function m(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?t:e).get(x)),x}function _(y){let x=!1;const I=m(y);I===null?p(o,l):I&&I.isColor&&(p(I,1),x=!0);const A=s.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(y,x){const I=m(x);I&&(I.isCubeTexture||I.mapping===Aa)?(h===void 0&&(h=new ne(new me(1,1,1),new Sn({name:"BackgroundCubeMaterial",uniforms:ps(En.backgroundCube.uniforms),vertexShader:En.backgroundCube.vertexShader,fragmentShader:En.backgroundCube.fragmentShader,side:Ht,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,E,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),yi.copy(x.backgroundRotation),yi.x*=-1,yi.y*=-1,yi.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(yi.y*=-1,yi.z*=-1),h.material.uniforms.envMap.value=I,h.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(b_.makeRotationFromEuler(yi)),h.material.toneMapped=je.getTransfer(I.colorSpace)!==lt,(u!==I||d!==I.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=I,d=I.version,f=s.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):I&&I.isTexture&&(c===void 0&&(c=new ne(new jt(2,2),new Sn({name:"BackgroundMaterial",uniforms:ps(En.background.uniforms),vertexShader:En.background.vertexShader,fragmentShader:En.background.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=I,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=je.getTransfer(I.colorSpace)!==lt,I.matrixAutoUpdate===!0&&I.updateMatrix(),c.material.uniforms.uvTransform.value.copy(I.matrix),(u!==I||d!==I.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=I,d=I.version,f=s.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,x){y.getRGB(Zr,Xu(s)),n.buffers.color.setClear(Zr.r,Zr.g,Zr.b,x,a)}function v(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,x=1){o.set(y),l=x,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(o,l)},render:_,addToRenderList:g,dispose:v}}function w_(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,a=!1;function o(M,P,F,B,W){let q=!1;const X=u(B,F,P);r!==X&&(r=X,c(r.object)),q=f(M,B,F,W),q&&m(M,B,F,W),W!==null&&e.update(W,s.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,x(M,P,F,B),W!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return s.createVertexArray()}function c(M){return s.bindVertexArray(M)}function h(M){return s.deleteVertexArray(M)}function u(M,P,F){const B=F.wireframe===!0;let W=n[M.id];W===void 0&&(W={},n[M.id]=W);let q=W[P.id];q===void 0&&(q={},W[P.id]=q);let X=q[B];return X===void 0&&(X=d(l()),q[B]=X),X}function d(M){const P=[],F=[],B=[];for(let W=0;W<t;W++)P[W]=0,F[W]=0,B[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:F,attributeDivisors:B,object:M,attributes:{},index:null}}function f(M,P,F,B){const W=r.attributes,q=P.attributes;let X=0;const Z=F.getAttributes();for(const V in Z)if(Z[V].location>=0){const _e=W[V];let Te=q[V];if(Te===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(Te=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(Te=M.instanceColor)),_e===void 0||_e.attribute!==Te||Te&&_e.data!==Te.data)return!0;X++}return r.attributesNum!==X||r.index!==B}function m(M,P,F,B){const W={},q=P.attributes;let X=0;const Z=F.getAttributes();for(const V in Z)if(Z[V].location>=0){let _e=q[V];_e===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(_e=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(_e=M.instanceColor));const Te={};Te.attribute=_e,_e&&_e.data&&(Te.data=_e.data),W[V]=Te,X++}r.attributes=W,r.attributesNum=X,r.index=B}function _(){const M=r.newAttributes;for(let P=0,F=M.length;P<F;P++)M[P]=0}function g(M){p(M,0)}function p(M,P){const F=r.newAttributes,B=r.enabledAttributes,W=r.attributeDivisors;F[M]=1,B[M]===0&&(s.enableVertexAttribArray(M),B[M]=1),W[M]!==P&&(s.vertexAttribDivisor(M,P),W[M]=P)}function v(){const M=r.newAttributes,P=r.enabledAttributes;for(let F=0,B=P.length;F<B;F++)P[F]!==M[F]&&(s.disableVertexAttribArray(F),P[F]=0)}function y(M,P,F,B,W,q,X){X===!0?s.vertexAttribIPointer(M,P,F,W,q):s.vertexAttribPointer(M,P,F,B,W,q)}function x(M,P,F,B){_();const W=B.attributes,q=F.getAttributes(),X=P.defaultAttributeValues;for(const Z in q){const V=q[Z];if(V.location>=0){let le=W[Z];if(le===void 0&&(Z==="instanceMatrix"&&M.instanceMatrix&&(le=M.instanceMatrix),Z==="instanceColor"&&M.instanceColor&&(le=M.instanceColor)),le!==void 0){const _e=le.normalized,Te=le.itemSize,We=e.get(le);if(We===void 0)continue;const ft=We.buffer,Y=We.type,se=We.bytesPerElement,be=Y===s.INT||Y===s.UNSIGNED_INT||le.gpuType===Ol;if(le.isInterleavedBufferAttribute){const ce=le.data,Ie=ce.stride,tt=le.offset;if(ce.isInstancedInterleavedBuffer){for(let Le=0;Le<V.locationSize;Le++)p(V.location+Le,ce.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Le=0;Le<V.locationSize;Le++)g(V.location+Le);s.bindBuffer(s.ARRAY_BUFFER,ft);for(let Le=0;Le<V.locationSize;Le++)y(V.location+Le,Te/V.locationSize,Y,_e,Ie*se,(tt+Te/V.locationSize*Le)*se,be)}else{if(le.isInstancedBufferAttribute){for(let ce=0;ce<V.locationSize;ce++)p(V.location+ce,le.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ce=0;ce<V.locationSize;ce++)g(V.location+ce);s.bindBuffer(s.ARRAY_BUFFER,ft);for(let ce=0;ce<V.locationSize;ce++)y(V.location+ce,Te/V.locationSize,Y,_e,Te*se,Te/V.locationSize*ce*se,be)}}else if(X!==void 0){const _e=X[Z];if(_e!==void 0)switch(_e.length){case 2:s.vertexAttrib2fv(V.location,_e);break;case 3:s.vertexAttrib3fv(V.location,_e);break;case 4:s.vertexAttrib4fv(V.location,_e);break;default:s.vertexAttrib1fv(V.location,_e)}}}}v()}function I(){R();for(const M in n){const P=n[M];for(const F in P){const B=P[F];for(const W in B)h(B[W].object),delete B[W];delete P[F]}delete n[M]}}function A(M){if(n[M.id]===void 0)return;const P=n[M.id];for(const F in P){const B=P[F];for(const W in B)h(B[W].object),delete B[W];delete P[F]}delete n[M.id]}function E(M){for(const P in n){const F=n[P];if(F[M.id]===void 0)continue;const B=F[M.id];for(const W in B)h(B[W].object),delete B[W];delete F[M.id]}}function R(){b(),a=!0,r!==i&&(r=i,c(r.object))}function b(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:R,resetDefaultState:b,dispose:I,releaseStatesOfGeometry:A,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:g,disableUnusedAttributes:v}}function T_(s,e,t){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=h[m];t.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<c.length;m++)a(c[m],h[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let m=0;for(let _=0;_<u;_++)m+=h[_]*d[_];t.update(m,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function E_(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(E){return!(E!==hn&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){const R=E===vs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==qn&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Mn&&!R)}function l(E){if(E==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),I=m>0,A=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:I,maxSamples:A}}function A_(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new wi,o=new Oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const m=u.clippingPlanes,_=u.clipIntersection,g=u.clipShadows,p=s.get(u);if(!i||m===null||m.length===0||r&&!g)r?h(null):c();else{const v=r?0:n,y=v*4;let x=p.clippingState||null;l.value=x,x=h(m,d,y,f);for(let I=0;I!==y;++I)x[I]=t[I];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,m){const _=u!==null?u.length:0;let g=null;if(_!==0){if(g=l.value,m!==!0||g===null){const p=f+_*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(g===null||g.length<p)&&(g=new Float32Array(p));for(let y=0,x=f;y!==_;++y,x+=4)a.copy(u[y]).applyMatrix4(v,o),a.normal.toArray(g,x),g[x+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function C_(s){let e=new WeakMap;function t(a,o){return o===Xo?a.mapping=us:o===jo&&(a.mapping=ds),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Xo||o===jo)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new _p(l.height);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const is=4,Th=[.125,.215,.35,.446,.526,.582],Ai=20,uo=new Ca,Eh=new pe;let fo=null,po=0,mo=0,go=!1;const Ti=(1+Math.sqrt(5))/2,Ji=1/Ti,Ah=[new T(-Ti,Ji,0),new T(Ti,Ji,0),new T(-Ji,0,Ti),new T(Ji,0,Ti),new T(0,Ti,-Ji),new T(0,Ti,Ji),new T(-1,1,-1),new T(1,1,-1),new T(-1,1,1),new T(1,1,1)],R_=new T;class Ch{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,r={}){const{size:a=256,position:o=R_}=r;fo=this._renderer.getRenderTarget(),po=this._renderer.getActiveCubeFace(),mo=this._renderer.getActiveMipmapLevel(),go=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ph(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ih(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(fo,po,mo),this._renderer.xr.enabled=go,e.scissorTest=!1,Qr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===us||e.mapping===ds?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),fo=this._renderer.getRenderTarget(),po=this._renderer.getActiveCubeFace(),mo=this._renderer.getActiveMipmapLevel(),go=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:vs,format:hn,colorSpace:qt,depthBuffer:!1},i=Rh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rh(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=I_(r)),this._blurMaterial=P_(r,e,t)}return i}_compileMaterial(e){const t=new ne(this._lodPlanes[0],e);this._renderer.compile(t,uo)}_sceneToCubeUV(e,t,n,i,r){const l=new Xt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Eh),u.toneMapping=hi,u.autoClear=!1;const m=new dt({name:"PMREM.Background",side:Ht,depthWrite:!1,depthTest:!1}),_=new ne(new me,m);let g=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,g=!0):(m.color.copy(Eh),g=!0);for(let v=0;v<6;v++){const y=v%3;y===0?(l.up.set(0,c[v],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[v],r.y,r.z)):y===1?(l.up.set(0,0,c[v]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[v],r.z)):(l.up.set(0,c[v],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[v]));const x=this._cubeSize;Qr(i,y*x,v>2?x:0,x,x),u.setRenderTarget(i),g&&u.render(_,l),u.render(e,l)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===us||e.mapping===ds;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ph()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ih());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new ne(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Qr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,uo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Ah[(i-r-1)%Ah.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new ne(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ai-1),_=r/m,g=isFinite(r)?1+Math.floor(h*_):Ai;g>Ai&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ai}`);const p=[];let v=0;for(let E=0;E<Ai;++E){const R=E/_,b=Math.exp(-R*R/2);p.push(b),E===0?v+=b:E<g&&(v+=2*b)}for(let E=0;E<p.length;E++)p[E]=p[E]/v;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:y}=this;d.dTheta.value=m,d.mipInt.value=y-n;const x=this._sizeLods[i],I=3*x*(i>y-is?i-y+is:0),A=4*(this._cubeSize-x);Qr(t,I,A,3*x,2*x),l.setRenderTarget(t),l.render(u,uo)}}function I_(s){const e=[],t=[],n=[];let i=s;const r=s-is+1+Th.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>s-is?l=Th[a-s+is-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,_=3,g=2,p=1,v=new Float32Array(_*m*f),y=new Float32Array(g*m*f),x=new Float32Array(p*m*f);for(let A=0;A<f;A++){const E=A%3*2/3-1,R=A>2?0:-1,b=[E,R,0,E+2/3,R,0,E+2/3,R+1,0,E,R,0,E+2/3,R+1,0,E,R+1,0];v.set(b,_*m*A),y.set(d,g*m*A);const M=[A,A,A,A,A,A];x.set(M,p*m*A)}const I=new Et;I.setAttribute("position",new Yt(v,_)),I.setAttribute("uv",new Yt(y,g)),I.setAttribute("faceIndex",new Yt(x,p)),e.push(I),i>is&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Rh(s,e,t){const n=new ui(s,e,t);return n.texture.mapping=Aa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Qr(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function P_(s,e,t){const n=new Float32Array(Ai),i=new T(0,1,0);return new Sn({name:"SphericalGaussianBlur",defines:{n:Ai,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:pc(),fragmentShader:`

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
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function Ih(){return new Sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pc(),fragmentShader:`

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
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function Ph(){return new Sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function pc(){return`

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
	`}function L_(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Xo||l===jo,h=l===us||l===ds;if(c||h){let u=e.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Ch(s)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return c&&f&&f.height>0||h&&f&&i(f)?(t===null&&(t=new Ch(s)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function D_(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&xa("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function N_(s,e,t,n){const i={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",a),delete i[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const f in d)e.update(d[f],s.ARRAY_BUFFER)}function c(u){const d=[],f=u.index,m=u.attributes.position;let _=0;if(f!==null){const v=f.array;_=f.version;for(let y=0,x=v.length;y<x;y+=3){const I=v[y+0],A=v[y+1],E=v[y+2];d.push(I,A,A,E,E,I)}}else if(m!==void 0){const v=m.array;_=m.version;for(let y=0,x=v.length/3-1;y<x;y+=3){const I=y+0,A=y+1,E=y+2;d.push(I,A,A,E,E,I)}}else return;const g=new(zu(d)?Wu:Vu)(d,1);g.version=_;const p=r.get(u);p&&e.remove(p),r.set(u,g)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function U_(s,e,t){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){s.drawElements(n,f,r,d*a),t.update(f,n,1)}function c(d,f,m){m!==0&&(s.drawElementsInstanced(n,f,r,d*a,m),t.update(f,n,m))}function h(d,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];t.update(g,n,1)}function u(d,f,m,_){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],_[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,m);let p=0;for(let v=0;v<m;v++)p+=f[v]*_[v];t.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function k_(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function F_(s,e,t){const n=new WeakMap,i=new it;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let M=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",M)};var f=M;d!==void 0&&d.texture.dispose();const m=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let x=0;m===!0&&(x=1),_===!0&&(x=2),g===!0&&(x=3);let I=o.attributes.position.count*x,A=1;I>e.maxTextureSize&&(A=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const E=new Float32Array(I*A*4*u),R=new Hu(E,I,A,u);R.type=Mn,R.needsUpdate=!0;const b=x*4;for(let P=0;P<u;P++){const F=p[P],B=v[P],W=y[P],q=I*A*4*P;for(let X=0;X<F.count;X++){const Z=X*b;m===!0&&(i.fromBufferAttribute(F,X),E[q+Z+0]=i.x,E[q+Z+1]=i.y,E[q+Z+2]=i.z,E[q+Z+3]=0),_===!0&&(i.fromBufferAttribute(B,X),E[q+Z+4]=i.x,E[q+Z+5]=i.y,E[q+Z+6]=i.z,E[q+Z+7]=0),g===!0&&(i.fromBufferAttribute(W,X),E[q+Z+8]=i.x,E[q+Z+9]=i.y,E[q+Z+10]=i.z,E[q+Z+11]=W.itemSize===4?i.w:1)}}d={count:u,texture:R,size:new re(I,A)},n.set(o,d),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let m=0;for(let g=0;g<c.length;g++)m+=c[g];const _=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function B_(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const xd=new Ct,Lh=new ed(1,1),yd=new Hu,vd=new tp,Md=new Yu,Dh=[],Nh=[],Uh=new Float32Array(16),kh=new Float32Array(9),Fh=new Float32Array(4);function ws(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Dh[i];if(r===void 0&&(r=new Float32Array(i),Dh[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Rt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function It(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Ra(s,e){let t=Nh[e];t===void 0&&(t=new Int32Array(e),Nh[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function O_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function z_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;s.uniform2fv(this.addr,e),It(t,e)}}function H_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Rt(t,e))return;s.uniform3fv(this.addr,e),It(t,e)}}function G_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;s.uniform4fv(this.addr,e),It(t,e)}}function V_(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),It(t,e)}else{if(Rt(t,n))return;Fh.set(n),s.uniformMatrix2fv(this.addr,!1,Fh),It(t,n)}}function W_(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),It(t,e)}else{if(Rt(t,n))return;kh.set(n),s.uniformMatrix3fv(this.addr,!1,kh),It(t,n)}}function X_(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),It(t,e)}else{if(Rt(t,n))return;Uh.set(n),s.uniformMatrix4fv(this.addr,!1,Uh),It(t,n)}}function j_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Y_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;s.uniform2iv(this.addr,e),It(t,e)}}function q_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;s.uniform3iv(this.addr,e),It(t,e)}}function K_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;s.uniform4iv(this.addr,e),It(t,e)}}function $_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function J_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;s.uniform2uiv(this.addr,e),It(t,e)}}function Z_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;s.uniform3uiv(this.addr,e),It(t,e)}}function Q_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;s.uniform4uiv(this.addr,e),It(t,e)}}function ex(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Lh.compareFunction=Ou,r=Lh):r=xd,t.setTexture2D(e||r,i)}function tx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||vd,i)}function nx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Md,i)}function ix(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||yd,i)}function sx(s){switch(s){case 5126:return O_;case 35664:return z_;case 35665:return H_;case 35666:return G_;case 35674:return V_;case 35675:return W_;case 35676:return X_;case 5124:case 35670:return j_;case 35667:case 35671:return Y_;case 35668:case 35672:return q_;case 35669:case 35673:return K_;case 5125:return $_;case 36294:return J_;case 36295:return Z_;case 36296:return Q_;case 35678:case 36198:case 36298:case 36306:case 35682:return ex;case 35679:case 36299:case 36307:return tx;case 35680:case 36300:case 36308:case 36293:return nx;case 36289:case 36303:case 36311:case 36292:return ix}}function rx(s,e){s.uniform1fv(this.addr,e)}function ax(s,e){const t=ws(e,this.size,2);s.uniform2fv(this.addr,t)}function ox(s,e){const t=ws(e,this.size,3);s.uniform3fv(this.addr,t)}function lx(s,e){const t=ws(e,this.size,4);s.uniform4fv(this.addr,t)}function cx(s,e){const t=ws(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function hx(s,e){const t=ws(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function ux(s,e){const t=ws(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function dx(s,e){s.uniform1iv(this.addr,e)}function fx(s,e){s.uniform2iv(this.addr,e)}function px(s,e){s.uniform3iv(this.addr,e)}function mx(s,e){s.uniform4iv(this.addr,e)}function gx(s,e){s.uniform1uiv(this.addr,e)}function _x(s,e){s.uniform2uiv(this.addr,e)}function xx(s,e){s.uniform3uiv(this.addr,e)}function yx(s,e){s.uniform4uiv(this.addr,e)}function vx(s,e,t){const n=this.cache,i=e.length,r=Ra(t,i);Rt(n,r)||(s.uniform1iv(this.addr,r),It(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||xd,r[a])}function Mx(s,e,t){const n=this.cache,i=e.length,r=Ra(t,i);Rt(n,r)||(s.uniform1iv(this.addr,r),It(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||vd,r[a])}function bx(s,e,t){const n=this.cache,i=e.length,r=Ra(t,i);Rt(n,r)||(s.uniform1iv(this.addr,r),It(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Md,r[a])}function Sx(s,e,t){const n=this.cache,i=e.length,r=Ra(t,i);Rt(n,r)||(s.uniform1iv(this.addr,r),It(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||yd,r[a])}function wx(s){switch(s){case 5126:return rx;case 35664:return ax;case 35665:return ox;case 35666:return lx;case 35674:return cx;case 35675:return hx;case 35676:return ux;case 5124:case 35670:return dx;case 35667:case 35671:return fx;case 35668:case 35672:return px;case 35669:case 35673:return mx;case 5125:return gx;case 36294:return _x;case 36295:return xx;case 36296:return yx;case 35678:case 36198:case 36298:case 36306:case 35682:return vx;case 35679:case 36299:case 36307:return Mx;case 35680:case 36300:case 36308:case 36293:return bx;case 36289:case 36303:case 36311:case 36292:return Sx}}class Tx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=sx(t.type)}}class Ex{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=wx(t.type)}}class Ax{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const _o=/(\w+)(\])?(\[|\.)?/g;function Bh(s,e){s.seq.push(e),s.map[e.id]=e}function Cx(s,e,t){const n=s.name,i=n.length;for(_o.lastIndex=0;;){const r=_o.exec(n),a=_o.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Bh(t,c===void 0?new Tx(o,s,e):new Ex(o,s,e));break}else{let u=t.map[o];u===void 0&&(u=new Ax(o),Bh(t,u)),t=u}}}class ya{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);Cx(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Oh(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const Rx=37297;let Ix=0;function Px(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const zh=new Oe;function Lx(s){je._getMatrix(zh,je.workingColorSpace,s);const e=`mat3( ${zh.elements.map(t=>t.toFixed(4))} )`;switch(je.getTransfer(s)){case Sa:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Hh(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Px(s.getShaderSource(e),a)}else return i}function Dx(s,e){const t=Lx(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Nx(s,e){let t;switch(e){case yu:t="Linear";break;case vu:t="Reinhard";break;case Mu:t="Cineon";break;case Bl:t="ACESFilmic";break;case Su:t="AgX";break;case wu:t="Neutral";break;case bu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ea=new T;function Ux(){je.getLuminanceCoefficients(ea);const s=ea.x.toFixed(4),e=ea.y.toFixed(4),t=ea.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function kx(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xs).join(`
`)}function Fx(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Bx(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Xs(s){return s!==""}function Gh(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vh(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ox=/^[ \t]*#include +<([\w\d./]+)>/gm;function Il(s){return s.replace(Ox,Hx)}const zx=new Map;function Hx(s,e){let t=He[e];if(t===void 0){const n=zx.get(e);if(n!==void 0)t=He[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Il(t)}const Gx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wh(s){return s.replace(Gx,Vx)}function Vx(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Xh(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function Wx(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===gu?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===_u?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===zn&&(e="SHADOWMAP_TYPE_VSM"),e}function Xx(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case us:case ds:e="ENVMAP_TYPE_CUBE";break;case Aa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function jx(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ds:e="ENVMAP_MODE_REFRACTION";break}return e}function Yx(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case xu:e="ENVMAP_BLENDING_MULTIPLY";break;case pf:e="ENVMAP_BLENDING_MIX";break;case mf:e="ENVMAP_BLENDING_ADD";break}return e}function qx(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Kx(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Wx(t),c=Xx(t),h=jx(t),u=Yx(t),d=qx(t),f=kx(t),m=Fx(r),_=i.createProgram();let g,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Xs).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Xs).join(`
`),p.length>0&&(p+=`
`)):(g=[Xh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xs).join(`
`),p=[Xh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==hi?"#define TONE_MAPPING":"",t.toneMapping!==hi?He.tonemapping_pars_fragment:"",t.toneMapping!==hi?Nx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,Dx("linearToOutputTexel",t.outputColorSpace),Ux(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xs).join(`
`)),a=Il(a),a=Gh(a,t),a=Vh(a,t),o=Il(o),o=Gh(o,t),o=Vh(o,t),a=Wh(a),o=Wh(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===Pc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Pc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=v+g+a,x=v+p+o,I=Oh(i,i.VERTEX_SHADER,y),A=Oh(i,i.FRAGMENT_SHADER,x);i.attachShader(_,I),i.attachShader(_,A),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function E(P){if(s.debug.checkShaderErrors){const F=i.getProgramInfoLog(_).trim(),B=i.getShaderInfoLog(I).trim(),W=i.getShaderInfoLog(A).trim();let q=!0,X=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,I,A);else{const Z=Hh(i,I,"vertex"),V=Hh(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+F+`
`+Z+`
`+V)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(B===""||W==="")&&(X=!1);X&&(P.diagnostics={runnable:q,programLog:F,vertexShader:{log:B,prefix:g},fragmentShader:{log:W,prefix:p}})}i.deleteShader(I),i.deleteShader(A),R=new ya(i,_),b=Bx(i,_)}let R;this.getUniforms=function(){return R===void 0&&E(this),R};let b;this.getAttributes=function(){return b===void 0&&E(this),b};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(_,Rx)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ix++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=I,this.fragmentShader=A,this}let $x=0;class Jx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Zx(e),t.set(e,n)),n}}class Zx{constructor(e){this.id=$x++,this.code=e,this.usedTimes=0}}function Qx(s,e,t,n,i,r,a){const o=new $l,l=new Jx,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return c.add(b),b===0?"uv":`uv${b}`}function g(b,M,P,F,B){const W=F.fog,q=B.geometry,X=b.isMeshStandardMaterial?F.environment:null,Z=(b.isMeshStandardMaterial?t:e).get(b.envMap||X),V=Z&&Z.mapping===Aa?Z.image.height:null,le=m[b.type];b.precision!==null&&(f=i.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));const _e=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Te=_e!==void 0?_e.length:0;let We=0;q.morphAttributes.position!==void 0&&(We=1),q.morphAttributes.normal!==void 0&&(We=2),q.morphAttributes.color!==void 0&&(We=3);let ft,Y,se,be;if(le){const ot=En[le];ft=ot.vertexShader,Y=ot.fragmentShader}else ft=b.vertexShader,Y=b.fragmentShader,l.update(b),se=l.getVertexShaderID(b),be=l.getFragmentShaderID(b);const ce=s.getRenderTarget(),Ie=s.state.buffers.depth.getReversed(),tt=B.isInstancedMesh===!0,Le=B.isBatchedMesh===!0,bt=!!b.map,xt=!!b.matcap,Ye=!!Z,L=!!b.aoMap,sn=!!b.lightMap,$e=!!b.bumpMap,qe=!!b.normalMap,Ee=!!b.displacementMap,mt=!!b.emissiveMap,we=!!b.metalnessMap,C=!!b.roughnessMap,S=b.anisotropy>0,k=b.clearcoat>0,K=b.dispersion>0,J=b.iridescence>0,j=b.sheen>0,Se=b.transmission>0,he=S&&!!b.anisotropyMap,xe=k&&!!b.clearcoatMap,Je=k&&!!b.clearcoatNormalMap,te=k&&!!b.clearcoatRoughnessMap,ye=J&&!!b.iridescenceMap,Pe=J&&!!b.iridescenceThicknessMap,Ne=j&&!!b.sheenColorMap,ve=j&&!!b.sheenRoughnessMap,Ke=!!b.specularMap,ze=!!b.specularColorMap,pt=!!b.specularIntensityMap,D=Se&&!!b.transmissionMap,ue=Se&&!!b.thicknessMap,G=!!b.gradientMap,$=!!b.alphaMap,fe=b.alphaTest>0,de=!!b.alphaHash,Be=!!b.extensions;let vt=hi;b.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(vt=s.toneMapping);const Bt={shaderID:le,shaderType:b.type,shaderName:b.name,vertexShader:ft,fragmentShader:Y,defines:b.defines,customVertexShaderID:se,customFragmentShaderID:be,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:Le,batchingColor:Le&&B._colorsTexture!==null,instancing:tt,instancingColor:tt&&B.instanceColor!==null,instancingMorph:tt&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ce===null?s.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:qt,alphaToCoverage:!!b.alphaToCoverage,map:bt,matcap:xt,envMap:Ye,envMapMode:Ye&&Z.mapping,envMapCubeUVHeight:V,aoMap:L,lightMap:sn,bumpMap:$e,normalMap:qe,displacementMap:d&&Ee,emissiveMap:mt,normalMapObjectSpace:qe&&b.normalMapType===bf,normalMapTangentSpace:qe&&b.normalMapType===Yl,metalnessMap:we,roughnessMap:C,anisotropy:S,anisotropyMap:he,clearcoat:k,clearcoatMap:xe,clearcoatNormalMap:Je,clearcoatRoughnessMap:te,dispersion:K,iridescence:J,iridescenceMap:ye,iridescenceThicknessMap:Pe,sheen:j,sheenColorMap:Ne,sheenRoughnessMap:ve,specularMap:Ke,specularColorMap:ze,specularIntensityMap:pt,transmission:Se,transmissionMap:D,thicknessMap:ue,gradientMap:G,opaque:b.transparent===!1&&b.blending===as&&b.alphaToCoverage===!1,alphaMap:$,alphaTest:fe,alphaHash:de,combine:b.combine,mapUv:bt&&_(b.map.channel),aoMapUv:L&&_(b.aoMap.channel),lightMapUv:sn&&_(b.lightMap.channel),bumpMapUv:$e&&_(b.bumpMap.channel),normalMapUv:qe&&_(b.normalMap.channel),displacementMapUv:Ee&&_(b.displacementMap.channel),emissiveMapUv:mt&&_(b.emissiveMap.channel),metalnessMapUv:we&&_(b.metalnessMap.channel),roughnessMapUv:C&&_(b.roughnessMap.channel),anisotropyMapUv:he&&_(b.anisotropyMap.channel),clearcoatMapUv:xe&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:Je&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:Pe&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:ve&&_(b.sheenRoughnessMap.channel),specularMapUv:Ke&&_(b.specularMap.channel),specularColorMapUv:ze&&_(b.specularColorMap.channel),specularIntensityMapUv:pt&&_(b.specularIntensityMap.channel),transmissionMapUv:D&&_(b.transmissionMap.channel),thicknessMapUv:ue&&_(b.thicknessMap.channel),alphaMapUv:$&&_(b.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(qe||S),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!q.attributes.uv&&(bt||$),fog:!!W,useFog:b.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ie,skinning:B.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:Te,morphTextureStride:We,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:vt,decodeVideoTexture:bt&&b.map.isVideoTexture===!0&&je.getTransfer(b.map.colorSpace)===lt,decodeVideoTextureEmissive:mt&&b.emissiveMap.isVideoTexture===!0&&je.getTransfer(b.emissiveMap.colorSpace)===lt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===xn,flipSided:b.side===Ht,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Be&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Be&&b.extensions.multiDraw===!0||Le)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Bt.vertexUv1s=c.has(1),Bt.vertexUv2s=c.has(2),Bt.vertexUv3s=c.has(3),c.clear(),Bt}function p(b){const M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(const P in b.defines)M.push(P),M.push(b.defines[P]);return b.isRawShaderMaterial===!1&&(v(M,b),y(M,b),M.push(s.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function v(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function y(b,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),b.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),b.push(o.mask)}function x(b){const M=m[b.type];let P;if(M){const F=En[M];P=Jl.clone(F.uniforms)}else P=b.uniforms;return P}function I(b,M){let P;for(let F=0,B=h.length;F<B;F++){const W=h[F];if(W.cacheKey===M){P=W,++P.usedTimes;break}}return P===void 0&&(P=new Kx(s,M,b,r),h.push(P)),P}function A(b){if(--b.usedTimes===0){const M=h.indexOf(b);h[M]=h[h.length-1],h.pop(),b.destroy()}}function E(b){l.remove(b)}function R(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:x,acquireProgram:I,releaseProgram:A,releaseShaderCache:E,programs:h,dispose:R}}function ey(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function ty(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function jh(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Yh(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(u,d,f,m,_,g){let p=s[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:_,group:g},s[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=_,p.group=g),e++,p}function o(u,d,f,m,_,g){const p=a(u,d,f,m,_,g);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function l(u,d,f,m,_,g){const p=a(u,d,f,m,_,g);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||ty),n.length>1&&n.sort(d||jh),i.length>1&&i.sort(d||jh)}function h(){for(let u=e,d=s.length;u<d;u++){const f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function ny(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new Yh,s.set(n,[a])):i>=r.length?(a=new Yh,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function iy(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new T,color:new pe};break;case"SpotLight":t={position:new T,direction:new T,color:new pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new T,color:new pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new T,skyColor:new pe,groundColor:new pe};break;case"RectAreaLight":t={color:new pe,position:new T,halfWidth:new T,halfHeight:new T};break}return s[e.id]=t,t}}}function sy(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let ry=0;function ay(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function oy(s){const e=new iy,t=sy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new T);const i=new T,r=new ke,a=new ke;function o(c){let h=0,u=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let f=0,m=0,_=0,g=0,p=0,v=0,y=0,x=0,I=0,A=0,E=0;c.sort(ay);for(let b=0,M=c.length;b<M;b++){const P=c[b],F=P.color,B=P.intensity,W=P.distance,q=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=F.r*B,u+=F.g*B,d+=F.b*B;else if(P.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(P.sh.coefficients[X],B);E++}else if(P.isDirectionalLight){const X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Z=P.shadow,V=t.get(P);V.shadowIntensity=Z.intensity,V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,n.directionalShadow[f]=V,n.directionalShadowMap[f]=q,n.directionalShadowMatrix[f]=P.shadow.matrix,v++}n.directional[f]=X,f++}else if(P.isSpotLight){const X=e.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(F).multiplyScalar(B),X.distance=W,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,n.spot[_]=X;const Z=P.shadow;if(P.map&&(n.spotLightMap[I]=P.map,I++,Z.updateMatrices(P),P.castShadow&&A++),n.spotLightMatrix[_]=Z.matrix,P.castShadow){const V=t.get(P);V.shadowIntensity=Z.intensity,V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,n.spotShadow[_]=V,n.spotShadowMap[_]=q,x++}_++}else if(P.isRectAreaLight){const X=e.get(P);X.color.copy(F).multiplyScalar(B),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),n.rectArea[g]=X,g++}else if(P.isPointLight){const X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),X.distance=P.distance,X.decay=P.decay,P.castShadow){const Z=P.shadow,V=t.get(P);V.shadowIntensity=Z.intensity,V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,V.shadowCameraNear=Z.camera.near,V.shadowCameraFar=Z.camera.far,n.pointShadow[m]=V,n.pointShadowMap[m]=q,n.pointShadowMatrix[m]=P.shadow.matrix,y++}n.point[m]=X,m++}else if(P.isHemisphereLight){const X=e.get(P);X.skyColor.copy(P.color).multiplyScalar(B),X.groundColor.copy(P.groundColor).multiplyScalar(B),n.hemi[p]=X,p++}}g>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ae.LTC_FLOAT_1,n.rectAreaLTC2=ae.LTC_FLOAT_2):(n.rectAreaLTC1=ae.LTC_HALF_1,n.rectAreaLTC2=ae.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const R=n.hash;(R.directionalLength!==f||R.pointLength!==m||R.spotLength!==_||R.rectAreaLength!==g||R.hemiLength!==p||R.numDirectionalShadows!==v||R.numPointShadows!==y||R.numSpotShadows!==x||R.numSpotMaps!==I||R.numLightProbes!==E)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=x+I-A,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=E,R.directionalLength=f,R.pointLength=m,R.spotLength=_,R.rectAreaLength=g,R.hemiLength=p,R.numDirectionalShadows=v,R.numPointShadows=y,R.numSpotShadows=x,R.numSpotMaps=I,R.numLightProbes=E,n.version=ry++)}function l(c,h){let u=0,d=0,f=0,m=0,_=0;const g=h.matrixWorldInverse;for(let p=0,v=c.length;p<v;p++){const y=c[p];if(y.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(g),u++}else if(y.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(g),f++}else if(y.isRectAreaLight){const x=n.rectArea[m];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),a.identity(),r.copy(y.matrixWorld),r.premultiply(g),a.extractRotation(r),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),m++}else if(y.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),d++}else if(y.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(g),_++}}}return{setup:o,setupView:l,state:n}}function qh(s){const e=new oy(s),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function ly(s){let e=new WeakMap;function t(i,r=0){const a=e.get(i);let o;return a===void 0?(o=new qh(s),e.set(i,[o])):r>=a.length?(o=new qh(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const cy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hy=`uniform sampler2D shadow_pass;
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
}`;function uy(s,e,t){let n=new ec;const i=new re,r=new re,a=new it,o=new am({depthPacking:Mf}),l=new om,c={},h=t.maxTextureSize,u={[An]:Ht,[Ht]:An,[xn]:xn},d=new Sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:cy,fragmentShader:hy}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new Et;m.setAttribute("position",new Yt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ne(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gu;let p=this.type;this.render=function(A,E,R){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;const b=s.getRenderTarget(),M=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),F=s.state;F.setBlending(Xn),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const B=p!==zn&&this.type===zn,W=p===zn&&this.type!==zn;for(let q=0,X=A.length;q<X;q++){const Z=A[q],V=Z.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const le=V.getFrameExtents();if(i.multiply(le),r.copy(V.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/le.x),i.x=r.x*le.x,V.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/le.y),i.y=r.y*le.y,V.mapSize.y=r.y)),V.map===null||B===!0||W===!0){const Te=this.type!==zn?{minFilter:Ft,magFilter:Ft}:{};V.map!==null&&V.map.dispose(),V.map=new ui(i.x,i.y,Te),V.map.texture.name=Z.name+".shadowMap",V.camera.updateProjectionMatrix()}s.setRenderTarget(V.map),s.clear();const _e=V.getViewportCount();for(let Te=0;Te<_e;Te++){const We=V.getViewport(Te);a.set(r.x*We.x,r.y*We.y,r.x*We.z,r.y*We.w),F.viewport(a),V.updateMatrices(Z,Te),n=V.getFrustum(),x(E,R,V.camera,Z,this.type)}V.isPointLightShadow!==!0&&this.type===zn&&v(V,R),V.needsUpdate=!1}p=this.type,g.needsUpdate=!1,s.setRenderTarget(b,M,P)};function v(A,E){const R=e.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new ui(i.x,i.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(E,null,R,d,_,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(E,null,R,f,_,null)}function y(A,E,R,b){let M=null;const P=R.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)M=P;else if(M=R.isPointLight===!0?l:o,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const F=M.uuid,B=E.uuid;let W=c[F];W===void 0&&(W={},c[F]=W);let q=W[B];q===void 0&&(q=M.clone(),W[B]=q,E.addEventListener("dispose",I)),M=q}if(M.visible=E.visible,M.wireframe=E.wireframe,b===zn?M.side=E.shadowSide!==null?E.shadowSide:E.side:M.side=E.shadowSide!==null?E.shadowSide:u[E.side],M.alphaMap=E.alphaMap,M.alphaTest=E.alphaTest,M.map=E.map,M.clipShadows=E.clipShadows,M.clippingPlanes=E.clippingPlanes,M.clipIntersection=E.clipIntersection,M.displacementMap=E.displacementMap,M.displacementScale=E.displacementScale,M.displacementBias=E.displacementBias,M.wireframeLinewidth=E.wireframeLinewidth,M.linewidth=E.linewidth,R.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const F=s.properties.get(M);F.light=R}return M}function x(A,E,R,b,M){if(A.visible===!1)return;if(A.layers.test(E.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===zn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,A.matrixWorld);const B=e.update(A),W=A.material;if(Array.isArray(W)){const q=B.groups;for(let X=0,Z=q.length;X<Z;X++){const V=q[X],le=W[V.materialIndex];if(le&&le.visible){const _e=y(A,le,b,M);A.onBeforeShadow(s,A,E,R,B,_e,V),s.renderBufferDirect(R,null,B,_e,A,V),A.onAfterShadow(s,A,E,R,B,_e,V)}}}else if(W.visible){const q=y(A,W,b,M);A.onBeforeShadow(s,A,E,R,B,q,null),s.renderBufferDirect(R,null,B,q,A,null),A.onAfterShadow(s,A,E,R,B,q,null)}}const F=A.children;for(let B=0,W=F.length;B<W;B++)x(F[B],E,R,b,M)}function I(A){A.target.removeEventListener("dispose",I);for(const R in c){const b=c[R],M=A.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}const dy={[Bo]:Oo,[zo]:Vo,[Ho]:Wo,[hs]:Go,[Oo]:Bo,[Vo]:zo,[Wo]:Ho,[Go]:hs};function fy(s,e){function t(){let D=!1;const ue=new it;let G=null;const $=new it(0,0,0,0);return{setMask:function(fe){G!==fe&&!D&&(s.colorMask(fe,fe,fe,fe),G=fe)},setLocked:function(fe){D=fe},setClear:function(fe,de,Be,vt,Bt){Bt===!0&&(fe*=vt,de*=vt,Be*=vt),ue.set(fe,de,Be,vt),$.equals(ue)===!1&&(s.clearColor(fe,de,Be,vt),$.copy(ue))},reset:function(){D=!1,G=null,$.set(-1,0,0,0)}}}function n(){let D=!1,ue=!1,G=null,$=null,fe=null;return{setReversed:function(de){if(ue!==de){const Be=e.get("EXT_clip_control");de?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT),ue=de;const vt=fe;fe=null,this.setClear(vt)}},getReversed:function(){return ue},setTest:function(de){de?ce(s.DEPTH_TEST):Ie(s.DEPTH_TEST)},setMask:function(de){G!==de&&!D&&(s.depthMask(de),G=de)},setFunc:function(de){if(ue&&(de=dy[de]),$!==de){switch(de){case Bo:s.depthFunc(s.NEVER);break;case Oo:s.depthFunc(s.ALWAYS);break;case zo:s.depthFunc(s.LESS);break;case hs:s.depthFunc(s.LEQUAL);break;case Ho:s.depthFunc(s.EQUAL);break;case Go:s.depthFunc(s.GEQUAL);break;case Vo:s.depthFunc(s.GREATER);break;case Wo:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}$=de}},setLocked:function(de){D=de},setClear:function(de){fe!==de&&(ue&&(de=1-de),s.clearDepth(de),fe=de)},reset:function(){D=!1,G=null,$=null,fe=null,ue=!1}}}function i(){let D=!1,ue=null,G=null,$=null,fe=null,de=null,Be=null,vt=null,Bt=null;return{setTest:function(ot){D||(ot?ce(s.STENCIL_TEST):Ie(s.STENCIL_TEST))},setMask:function(ot){ue!==ot&&!D&&(s.stencilMask(ot),ue=ot)},setFunc:function(ot,fn,Dn){(G!==ot||$!==fn||fe!==Dn)&&(s.stencilFunc(ot,fn,Dn),G=ot,$=fn,fe=Dn)},setOp:function(ot,fn,Dn){(de!==ot||Be!==fn||vt!==Dn)&&(s.stencilOp(ot,fn,Dn),de=ot,Be=fn,vt=Dn)},setLocked:function(ot){D=ot},setClear:function(ot){Bt!==ot&&(s.clearStencil(ot),Bt=ot)},reset:function(){D=!1,ue=null,G=null,$=null,fe=null,de=null,Be=null,vt=null,Bt=null}}}const r=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],m=null,_=!1,g=null,p=null,v=null,y=null,x=null,I=null,A=null,E=new pe(0,0,0),R=0,b=!1,M=null,P=null,F=null,B=null,W=null;const q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,Z=0;const V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(V)[1]),X=Z>=1):V.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),X=Z>=2);let le=null,_e={};const Te=s.getParameter(s.SCISSOR_BOX),We=s.getParameter(s.VIEWPORT),ft=new it().fromArray(Te),Y=new it().fromArray(We);function se(D,ue,G,$){const fe=new Uint8Array(4),de=s.createTexture();s.bindTexture(D,de),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Be=0;Be<G;Be++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(ue,0,s.RGBA,1,1,$,0,s.RGBA,s.UNSIGNED_BYTE,fe):s.texImage2D(ue+Be,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,fe);return de}const be={};be[s.TEXTURE_2D]=se(s.TEXTURE_2D,s.TEXTURE_2D,1),be[s.TEXTURE_CUBE_MAP]=se(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),be[s.TEXTURE_2D_ARRAY]=se(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),be[s.TEXTURE_3D]=se(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ce(s.DEPTH_TEST),a.setFunc(hs),$e(!1),qe(Tc),ce(s.CULL_FACE),L(Xn);function ce(D){h[D]!==!0&&(s.enable(D),h[D]=!0)}function Ie(D){h[D]!==!1&&(s.disable(D),h[D]=!1)}function tt(D,ue){return u[D]!==ue?(s.bindFramebuffer(D,ue),u[D]=ue,D===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=ue),D===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=ue),!0):!1}function Le(D,ue){let G=f,$=!1;if(D){G=d.get(ue),G===void 0&&(G=[],d.set(ue,G));const fe=D.textures;if(G.length!==fe.length||G[0]!==s.COLOR_ATTACHMENT0){for(let de=0,Be=fe.length;de<Be;de++)G[de]=s.COLOR_ATTACHMENT0+de;G.length=fe.length,$=!0}}else G[0]!==s.BACK&&(G[0]=s.BACK,$=!0);$&&s.drawBuffers(G)}function bt(D){return m!==D?(s.useProgram(D),m=D,!0):!1}const xt={[Ei]:s.FUNC_ADD,[$d]:s.FUNC_SUBTRACT,[Jd]:s.FUNC_REVERSE_SUBTRACT};xt[Zd]=s.MIN,xt[Qd]=s.MAX;const Ye={[ef]:s.ZERO,[tf]:s.ONE,[nf]:s.SRC_COLOR,[ko]:s.SRC_ALPHA,[cf]:s.SRC_ALPHA_SATURATE,[of]:s.DST_COLOR,[rf]:s.DST_ALPHA,[sf]:s.ONE_MINUS_SRC_COLOR,[Fo]:s.ONE_MINUS_SRC_ALPHA,[lf]:s.ONE_MINUS_DST_COLOR,[af]:s.ONE_MINUS_DST_ALPHA,[hf]:s.CONSTANT_COLOR,[uf]:s.ONE_MINUS_CONSTANT_COLOR,[df]:s.CONSTANT_ALPHA,[ff]:s.ONE_MINUS_CONSTANT_ALPHA};function L(D,ue,G,$,fe,de,Be,vt,Bt,ot){if(D===Xn){_===!0&&(Ie(s.BLEND),_=!1);return}if(_===!1&&(ce(s.BLEND),_=!0),D!==Kd){if(D!==g||ot!==b){if((p!==Ei||x!==Ei)&&(s.blendEquation(s.FUNC_ADD),p=Ei,x=Ei),ot)switch(D){case as:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ec:s.blendFunc(s.ONE,s.ONE);break;case Ac:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Cc:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case as:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ec:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Ac:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Cc:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}v=null,y=null,I=null,A=null,E.set(0,0,0),R=0,g=D,b=ot}return}fe=fe||ue,de=de||G,Be=Be||$,(ue!==p||fe!==x)&&(s.blendEquationSeparate(xt[ue],xt[fe]),p=ue,x=fe),(G!==v||$!==y||de!==I||Be!==A)&&(s.blendFuncSeparate(Ye[G],Ye[$],Ye[de],Ye[Be]),v=G,y=$,I=de,A=Be),(vt.equals(E)===!1||Bt!==R)&&(s.blendColor(vt.r,vt.g,vt.b,Bt),E.copy(vt),R=Bt),g=D,b=!1}function sn(D,ue){D.side===xn?Ie(s.CULL_FACE):ce(s.CULL_FACE);let G=D.side===Ht;ue&&(G=!G),$e(G),D.blending===as&&D.transparent===!1?L(Xn):L(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);const $=D.stencilWrite;o.setTest($),$&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),mt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ce(s.SAMPLE_ALPHA_TO_COVERAGE):Ie(s.SAMPLE_ALPHA_TO_COVERAGE)}function $e(D){M!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),M=D)}function qe(D){D!==Yd?(ce(s.CULL_FACE),D!==P&&(D===Tc?s.cullFace(s.BACK):D===qd?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ie(s.CULL_FACE),P=D}function Ee(D){D!==F&&(X&&s.lineWidth(D),F=D)}function mt(D,ue,G){D?(ce(s.POLYGON_OFFSET_FILL),(B!==ue||W!==G)&&(s.polygonOffset(ue,G),B=ue,W=G)):Ie(s.POLYGON_OFFSET_FILL)}function we(D){D?ce(s.SCISSOR_TEST):Ie(s.SCISSOR_TEST)}function C(D){D===void 0&&(D=s.TEXTURE0+q-1),le!==D&&(s.activeTexture(D),le=D)}function S(D,ue,G){G===void 0&&(le===null?G=s.TEXTURE0+q-1:G=le);let $=_e[G];$===void 0&&($={type:void 0,texture:void 0},_e[G]=$),($.type!==D||$.texture!==ue)&&(le!==G&&(s.activeTexture(G),le=G),s.bindTexture(D,ue||be[D]),$.type=D,$.texture=ue)}function k(){const D=_e[le];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function K(){try{s.compressedTexImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{s.compressedTexImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function j(){try{s.texSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Se(){try{s.texSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function he(){try{s.compressedTexSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xe(){try{s.compressedTexSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Je(){try{s.texStorage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function te(){try{s.texStorage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ye(){try{s.texImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Pe(){try{s.texImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ne(D){ft.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),ft.copy(D))}function ve(D){Y.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),Y.copy(D))}function Ke(D,ue){let G=c.get(ue);G===void 0&&(G=new WeakMap,c.set(ue,G));let $=G.get(D);$===void 0&&($=s.getUniformBlockIndex(ue,D.name),G.set(D,$))}function ze(D,ue){const $=c.get(ue).get(D);l.get(ue)!==$&&(s.uniformBlockBinding(ue,$,D.__bindingPointIndex),l.set(ue,$))}function pt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},le=null,_e={},u={},d=new WeakMap,f=[],m=null,_=!1,g=null,p=null,v=null,y=null,x=null,I=null,A=null,E=new pe(0,0,0),R=0,b=!1,M=null,P=null,F=null,B=null,W=null,ft.set(0,0,s.canvas.width,s.canvas.height),Y.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ce,disable:Ie,bindFramebuffer:tt,drawBuffers:Le,useProgram:bt,setBlending:L,setMaterial:sn,setFlipSided:$e,setCullFace:qe,setLineWidth:Ee,setPolygonOffset:mt,setScissorTest:we,activeTexture:C,bindTexture:S,unbindTexture:k,compressedTexImage2D:K,compressedTexImage3D:J,texImage2D:ye,texImage3D:Pe,updateUBOMapping:Ke,uniformBlockBinding:ze,texStorage2D:Je,texStorage3D:te,texSubImage2D:j,texSubImage3D:Se,compressedTexSubImage2D:he,compressedTexSubImage3D:xe,scissor:Ne,viewport:ve,reset:pt}}function py(s,e,t,n,i,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new re,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(C,S){return f?new OffscreenCanvas(C,S):or("canvas")}function _(C,S,k){let K=1;const J=we(C);if((J.width>k||J.height>k)&&(K=k/Math.max(J.width,J.height)),K<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const j=Math.floor(K*J.width),Se=Math.floor(K*J.height);u===void 0&&(u=m(j,Se));const he=S?m(j,Se):u;return he.width=j,he.height=Se,he.getContext("2d").drawImage(C,0,0,j,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+j+"x"+Se+")."),he}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),C;return C}function g(C){return C.generateMipmaps}function p(C){s.generateMipmap(C)}function v(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function y(C,S,k,K,J=!1){if(C!==null){if(s[C]!==void 0)return s[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let j=S;if(S===s.RED&&(k===s.FLOAT&&(j=s.R32F),k===s.HALF_FLOAT&&(j=s.R16F),k===s.UNSIGNED_BYTE&&(j=s.R8)),S===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&(j=s.R8UI),k===s.UNSIGNED_SHORT&&(j=s.R16UI),k===s.UNSIGNED_INT&&(j=s.R32UI),k===s.BYTE&&(j=s.R8I),k===s.SHORT&&(j=s.R16I),k===s.INT&&(j=s.R32I)),S===s.RG&&(k===s.FLOAT&&(j=s.RG32F),k===s.HALF_FLOAT&&(j=s.RG16F),k===s.UNSIGNED_BYTE&&(j=s.RG8)),S===s.RG_INTEGER&&(k===s.UNSIGNED_BYTE&&(j=s.RG8UI),k===s.UNSIGNED_SHORT&&(j=s.RG16UI),k===s.UNSIGNED_INT&&(j=s.RG32UI),k===s.BYTE&&(j=s.RG8I),k===s.SHORT&&(j=s.RG16I),k===s.INT&&(j=s.RG32I)),S===s.RGB_INTEGER&&(k===s.UNSIGNED_BYTE&&(j=s.RGB8UI),k===s.UNSIGNED_SHORT&&(j=s.RGB16UI),k===s.UNSIGNED_INT&&(j=s.RGB32UI),k===s.BYTE&&(j=s.RGB8I),k===s.SHORT&&(j=s.RGB16I),k===s.INT&&(j=s.RGB32I)),S===s.RGBA_INTEGER&&(k===s.UNSIGNED_BYTE&&(j=s.RGBA8UI),k===s.UNSIGNED_SHORT&&(j=s.RGBA16UI),k===s.UNSIGNED_INT&&(j=s.RGBA32UI),k===s.BYTE&&(j=s.RGBA8I),k===s.SHORT&&(j=s.RGBA16I),k===s.INT&&(j=s.RGBA32I)),S===s.RGB&&k===s.UNSIGNED_INT_5_9_9_9_REV&&(j=s.RGB9_E5),S===s.RGBA){const Se=J?Sa:je.getTransfer(K);k===s.FLOAT&&(j=s.RGBA32F),k===s.HALF_FLOAT&&(j=s.RGBA16F),k===s.UNSIGNED_BYTE&&(j=Se===lt?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT_4_4_4_4&&(j=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&(j=s.RGB5_A1)}return(j===s.R16F||j===s.R32F||j===s.RG16F||j===s.RG32F||j===s.RGBA16F||j===s.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function x(C,S){let k;return C?S===null||S===Ri||S===nr?k=s.DEPTH24_STENCIL8:S===Mn?k=s.DEPTH32F_STENCIL8:S===tr&&(k=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Ri||S===nr?k=s.DEPTH_COMPONENT24:S===Mn?k=s.DEPTH_COMPONENT32F:S===tr&&(k=s.DEPTH_COMPONENT16),k}function I(C,S){return g(C)===!0||C.isFramebufferTexture&&C.minFilter!==Ft&&C.minFilter!==nn?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function A(C){const S=C.target;S.removeEventListener("dispose",A),R(S),S.isVideoTexture&&h.delete(S)}function E(C){const S=C.target;S.removeEventListener("dispose",E),M(S)}function R(C){const S=n.get(C);if(S.__webglInit===void 0)return;const k=C.source,K=d.get(k);if(K){const J=K[S.__cacheKey];J.usedTimes--,J.usedTimes===0&&b(C),Object.keys(K).length===0&&d.delete(k)}n.remove(C)}function b(C){const S=n.get(C);s.deleteTexture(S.__webglTexture);const k=C.source,K=d.get(k);delete K[S.__cacheKey],a.memory.textures--}function M(C){const S=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(S.__webglFramebuffer[K]))for(let J=0;J<S.__webglFramebuffer[K].length;J++)s.deleteFramebuffer(S.__webglFramebuffer[K][J]);else s.deleteFramebuffer(S.__webglFramebuffer[K]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[K])}else{if(Array.isArray(S.__webglFramebuffer))for(let K=0;K<S.__webglFramebuffer.length;K++)s.deleteFramebuffer(S.__webglFramebuffer[K]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let K=0;K<S.__webglColorRenderbuffer.length;K++)S.__webglColorRenderbuffer[K]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[K]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const k=C.textures;for(let K=0,J=k.length;K<J;K++){const j=n.get(k[K]);j.__webglTexture&&(s.deleteTexture(j.__webglTexture),a.memory.textures--),n.remove(k[K])}n.remove(C)}let P=0;function F(){P=0}function B(){const C=P;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),P+=1,C}function W(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function q(C,S){const k=n.get(C);if(C.isVideoTexture&&Ee(C),C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){const K=C.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(k,C,S);return}}t.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+S)}function X(C,S){const k=n.get(C);if(C.version>0&&k.__version!==C.version){Y(k,C,S);return}t.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+S)}function Z(C,S){const k=n.get(C);if(C.version>0&&k.__version!==C.version){Y(k,C,S);return}t.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+S)}function V(C,S){const k=n.get(C);if(C.version>0&&k.__version!==C.version){se(k,C,S);return}t.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+S)}const le={[Yn]:s.REPEAT,[li]:s.CLAMP_TO_EDGE,[Ma]:s.MIRRORED_REPEAT},_e={[Ft]:s.NEAREST,[Eu]:s.NEAREST_MIPMAP_NEAREST,[Vs]:s.NEAREST_MIPMAP_LINEAR,[nn]:s.LINEAR,[da]:s.LINEAR_MIPMAP_NEAREST,[Vn]:s.LINEAR_MIPMAP_LINEAR},Te={[Sf]:s.NEVER,[Rf]:s.ALWAYS,[wf]:s.LESS,[Ou]:s.LEQUAL,[Tf]:s.EQUAL,[Cf]:s.GEQUAL,[Ef]:s.GREATER,[Af]:s.NOTEQUAL};function We(C,S){if(S.type===Mn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===nn||S.magFilter===da||S.magFilter===Vs||S.magFilter===Vn||S.minFilter===nn||S.minFilter===da||S.minFilter===Vs||S.minFilter===Vn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,le[S.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,le[S.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,le[S.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,_e[S.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,_e[S.minFilter]),S.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,Te[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Ft||S.minFilter!==Vs&&S.minFilter!==Vn||S.type===Mn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");s.texParameterf(C,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function ft(C,S){let k=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",A));const K=S.source;let J=d.get(K);J===void 0&&(J={},d.set(K,J));const j=W(S);if(j!==C.__cacheKey){J[j]===void 0&&(J[j]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,k=!0),J[j].usedTimes++;const Se=J[C.__cacheKey];Se!==void 0&&(J[C.__cacheKey].usedTimes--,Se.usedTimes===0&&b(S)),C.__cacheKey=j,C.__webglTexture=J[j].texture}return k}function Y(C,S,k){let K=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(K=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(K=s.TEXTURE_3D);const J=ft(C,S),j=S.source;t.bindTexture(K,C.__webglTexture,s.TEXTURE0+k);const Se=n.get(j);if(j.version!==Se.__version||J===!0){t.activeTexture(s.TEXTURE0+k);const he=je.getPrimaries(je.workingColorSpace),xe=S.colorSpace===oi?null:je.getPrimaries(S.colorSpace),Je=S.colorSpace===oi||he===xe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Je);let te=_(S.image,!1,i.maxTextureSize);te=mt(S,te);const ye=r.convert(S.format,S.colorSpace),Pe=r.convert(S.type);let Ne=y(S.internalFormat,ye,Pe,S.colorSpace,S.isVideoTexture);We(K,S);let ve;const Ke=S.mipmaps,ze=S.isVideoTexture!==!0,pt=Se.__version===void 0||J===!0,D=j.dataReady,ue=I(S,te);if(S.isDepthTexture)Ne=x(S.format===sr,S.type),pt&&(ze?t.texStorage2D(s.TEXTURE_2D,1,Ne,te.width,te.height):t.texImage2D(s.TEXTURE_2D,0,Ne,te.width,te.height,0,ye,Pe,null));else if(S.isDataTexture)if(Ke.length>0){ze&&pt&&t.texStorage2D(s.TEXTURE_2D,ue,Ne,Ke[0].width,Ke[0].height);for(let G=0,$=Ke.length;G<$;G++)ve=Ke[G],ze?D&&t.texSubImage2D(s.TEXTURE_2D,G,0,0,ve.width,ve.height,ye,Pe,ve.data):t.texImage2D(s.TEXTURE_2D,G,Ne,ve.width,ve.height,0,ye,Pe,ve.data);S.generateMipmaps=!1}else ze?(pt&&t.texStorage2D(s.TEXTURE_2D,ue,Ne,te.width,te.height),D&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,te.width,te.height,ye,Pe,te.data)):t.texImage2D(s.TEXTURE_2D,0,Ne,te.width,te.height,0,ye,Pe,te.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ze&&pt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ue,Ne,Ke[0].width,Ke[0].height,te.depth);for(let G=0,$=Ke.length;G<$;G++)if(ve=Ke[G],S.format!==hn)if(ye!==null)if(ze){if(D)if(S.layerUpdates.size>0){const fe=wh(ve.width,ve.height,S.format,S.type);for(const de of S.layerUpdates){const Be=ve.data.subarray(de*fe/ve.data.BYTES_PER_ELEMENT,(de+1)*fe/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,G,0,0,de,ve.width,ve.height,1,ye,Be)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,G,0,0,0,ve.width,ve.height,te.depth,ye,ve.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,G,Ne,ve.width,ve.height,te.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ze?D&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,G,0,0,0,ve.width,ve.height,te.depth,ye,Pe,ve.data):t.texImage3D(s.TEXTURE_2D_ARRAY,G,Ne,ve.width,ve.height,te.depth,0,ye,Pe,ve.data)}else{ze&&pt&&t.texStorage2D(s.TEXTURE_2D,ue,Ne,Ke[0].width,Ke[0].height);for(let G=0,$=Ke.length;G<$;G++)ve=Ke[G],S.format!==hn?ye!==null?ze?D&&t.compressedTexSubImage2D(s.TEXTURE_2D,G,0,0,ve.width,ve.height,ye,ve.data):t.compressedTexImage2D(s.TEXTURE_2D,G,Ne,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?D&&t.texSubImage2D(s.TEXTURE_2D,G,0,0,ve.width,ve.height,ye,Pe,ve.data):t.texImage2D(s.TEXTURE_2D,G,Ne,ve.width,ve.height,0,ye,Pe,ve.data)}else if(S.isDataArrayTexture)if(ze){if(pt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ue,Ne,te.width,te.height,te.depth),D)if(S.layerUpdates.size>0){const G=wh(te.width,te.height,S.format,S.type);for(const $ of S.layerUpdates){const fe=te.data.subarray($*G/te.data.BYTES_PER_ELEMENT,($+1)*G/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,$,te.width,te.height,1,ye,Pe,fe)}S.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,ye,Pe,te.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ne,te.width,te.height,te.depth,0,ye,Pe,te.data);else if(S.isData3DTexture)ze?(pt&&t.texStorage3D(s.TEXTURE_3D,ue,Ne,te.width,te.height,te.depth),D&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,ye,Pe,te.data)):t.texImage3D(s.TEXTURE_3D,0,Ne,te.width,te.height,te.depth,0,ye,Pe,te.data);else if(S.isFramebufferTexture){if(pt)if(ze)t.texStorage2D(s.TEXTURE_2D,ue,Ne,te.width,te.height);else{let G=te.width,$=te.height;for(let fe=0;fe<ue;fe++)t.texImage2D(s.TEXTURE_2D,fe,Ne,G,$,0,ye,Pe,null),G>>=1,$>>=1}}else if(Ke.length>0){if(ze&&pt){const G=we(Ke[0]);t.texStorage2D(s.TEXTURE_2D,ue,Ne,G.width,G.height)}for(let G=0,$=Ke.length;G<$;G++)ve=Ke[G],ze?D&&t.texSubImage2D(s.TEXTURE_2D,G,0,0,ye,Pe,ve):t.texImage2D(s.TEXTURE_2D,G,Ne,ye,Pe,ve);S.generateMipmaps=!1}else if(ze){if(pt){const G=we(te);t.texStorage2D(s.TEXTURE_2D,ue,Ne,G.width,G.height)}D&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ye,Pe,te)}else t.texImage2D(s.TEXTURE_2D,0,Ne,ye,Pe,te);g(S)&&p(K),Se.__version=j.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function se(C,S,k){if(S.image.length!==6)return;const K=ft(C,S),J=S.source;t.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+k);const j=n.get(J);if(J.version!==j.__version||K===!0){t.activeTexture(s.TEXTURE0+k);const Se=je.getPrimaries(je.workingColorSpace),he=S.colorSpace===oi?null:je.getPrimaries(S.colorSpace),xe=S.colorSpace===oi||Se===he?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Je=S.isCompressedTexture||S.image[0].isCompressedTexture,te=S.image[0]&&S.image[0].isDataTexture,ye=[];for(let $=0;$<6;$++)!Je&&!te?ye[$]=_(S.image[$],!0,i.maxCubemapSize):ye[$]=te?S.image[$].image:S.image[$],ye[$]=mt(S,ye[$]);const Pe=ye[0],Ne=r.convert(S.format,S.colorSpace),ve=r.convert(S.type),Ke=y(S.internalFormat,Ne,ve,S.colorSpace),ze=S.isVideoTexture!==!0,pt=j.__version===void 0||K===!0,D=J.dataReady;let ue=I(S,Pe);We(s.TEXTURE_CUBE_MAP,S);let G;if(Je){ze&&pt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ue,Ke,Pe.width,Pe.height);for(let $=0;$<6;$++){G=ye[$].mipmaps;for(let fe=0;fe<G.length;fe++){const de=G[fe];S.format!==hn?Ne!==null?ze?D&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,fe,0,0,de.width,de.height,Ne,de.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,fe,Ke,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,fe,0,0,de.width,de.height,Ne,ve,de.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,fe,Ke,de.width,de.height,0,Ne,ve,de.data)}}}else{if(G=S.mipmaps,ze&&pt){G.length>0&&ue++;const $=we(ye[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,ue,Ke,$.width,$.height)}for(let $=0;$<6;$++)if(te){ze?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,ye[$].width,ye[$].height,Ne,ve,ye[$].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ke,ye[$].width,ye[$].height,0,Ne,ve,ye[$].data);for(let fe=0;fe<G.length;fe++){const Be=G[fe].image[$].image;ze?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,fe+1,0,0,Be.width,Be.height,Ne,ve,Be.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,fe+1,Ke,Be.width,Be.height,0,Ne,ve,Be.data)}}else{ze?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Ne,ve,ye[$]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ke,Ne,ve,ye[$]);for(let fe=0;fe<G.length;fe++){const de=G[fe];ze?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,fe+1,0,0,Ne,ve,de.image[$]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,fe+1,Ke,Ne,ve,de.image[$])}}}g(S)&&p(s.TEXTURE_CUBE_MAP),j.__version=J.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function be(C,S,k,K,J,j){const Se=r.convert(k.format,k.colorSpace),he=r.convert(k.type),xe=y(k.internalFormat,Se,he,k.colorSpace),Je=n.get(S),te=n.get(k);if(te.__renderTarget=S,!Je.__hasExternalTextures){const ye=Math.max(1,S.width>>j),Pe=Math.max(1,S.height>>j);J===s.TEXTURE_3D||J===s.TEXTURE_2D_ARRAY?t.texImage3D(J,j,xe,ye,Pe,S.depth,0,Se,he,null):t.texImage2D(J,j,xe,ye,Pe,0,Se,he,null)}t.bindFramebuffer(s.FRAMEBUFFER,C),qe(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,K,J,te.__webglTexture,0,$e(S)):(J===s.TEXTURE_2D||J>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,K,J,te.__webglTexture,j),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ce(C,S,k){if(s.bindRenderbuffer(s.RENDERBUFFER,C),S.depthBuffer){const K=S.depthTexture,J=K&&K.isDepthTexture?K.type:null,j=x(S.stencilBuffer,J),Se=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,he=$e(S);qe(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,he,j,S.width,S.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,he,j,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,j,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Se,s.RENDERBUFFER,C)}else{const K=S.textures;for(let J=0;J<K.length;J++){const j=K[J],Se=r.convert(j.format,j.colorSpace),he=r.convert(j.type),xe=y(j.internalFormat,Se,he,j.colorSpace),Je=$e(S);k&&qe(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Je,xe,S.width,S.height):qe(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Je,xe,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,xe,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ie(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(S.depthTexture);K.__renderTarget=S,(!K.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),q(S.depthTexture,0);const J=K.__webglTexture,j=$e(S);if(S.depthTexture.format===ir)qe(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0);else if(S.depthTexture.format===sr)qe(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function tt(C){const S=n.get(C),k=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){const K=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),K){const J=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,K.removeEventListener("dispose",J)};K.addEventListener("dispose",J),S.__depthDisposeCallback=J}S.__boundDepthTexture=K}if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Ie(S.__webglFramebuffer,C)}else if(k){S.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[K]),S.__webglDepthbuffer[K]===void 0)S.__webglDepthbuffer[K]=s.createRenderbuffer(),ce(S.__webglDepthbuffer[K],C,!1);else{const J=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,j=S.__webglDepthbuffer[K];s.bindRenderbuffer(s.RENDERBUFFER,j),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,j)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),ce(S.__webglDepthbuffer,C,!1);else{const K=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,J=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,J),s.framebufferRenderbuffer(s.FRAMEBUFFER,K,s.RENDERBUFFER,J)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Le(C,S,k){const K=n.get(C);S!==void 0&&be(K.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&tt(C)}function bt(C){const S=C.texture,k=n.get(C),K=n.get(S);C.addEventListener("dispose",E);const J=C.textures,j=C.isWebGLCubeRenderTarget===!0,Se=J.length>1;if(Se||(K.__webglTexture===void 0&&(K.__webglTexture=s.createTexture()),K.__version=S.version,a.memory.textures++),j){k.__webglFramebuffer=[];for(let he=0;he<6;he++)if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer[he]=[];for(let xe=0;xe<S.mipmaps.length;xe++)k.__webglFramebuffer[he][xe]=s.createFramebuffer()}else k.__webglFramebuffer[he]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer=[];for(let he=0;he<S.mipmaps.length;he++)k.__webglFramebuffer[he]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(Se)for(let he=0,xe=J.length;he<xe;he++){const Je=n.get(J[he]);Je.__webglTexture===void 0&&(Je.__webglTexture=s.createTexture(),a.memory.textures++)}if(C.samples>0&&qe(C)===!1){k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let he=0;he<J.length;he++){const xe=J[he];k.__webglColorRenderbuffer[he]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[he]);const Je=r.convert(xe.format,xe.colorSpace),te=r.convert(xe.type),ye=y(xe.internalFormat,Je,te,xe.colorSpace,C.isXRRenderTarget===!0),Pe=$e(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,Pe,ye,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+he,s.RENDERBUFFER,k.__webglColorRenderbuffer[he])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),ce(k.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(j){t.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture),We(s.TEXTURE_CUBE_MAP,S);for(let he=0;he<6;he++)if(S.mipmaps&&S.mipmaps.length>0)for(let xe=0;xe<S.mipmaps.length;xe++)be(k.__webglFramebuffer[he][xe],C,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+he,xe);else be(k.__webglFramebuffer[he],C,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);g(S)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let he=0,xe=J.length;he<xe;he++){const Je=J[he],te=n.get(Je);t.bindTexture(s.TEXTURE_2D,te.__webglTexture),We(s.TEXTURE_2D,Je),be(k.__webglFramebuffer,C,Je,s.COLOR_ATTACHMENT0+he,s.TEXTURE_2D,0),g(Je)&&p(s.TEXTURE_2D)}t.unbindTexture()}else{let he=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(he=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(he,K.__webglTexture),We(he,S),S.mipmaps&&S.mipmaps.length>0)for(let xe=0;xe<S.mipmaps.length;xe++)be(k.__webglFramebuffer[xe],C,S,s.COLOR_ATTACHMENT0,he,xe);else be(k.__webglFramebuffer,C,S,s.COLOR_ATTACHMENT0,he,0);g(S)&&p(he),t.unbindTexture()}C.depthBuffer&&tt(C)}function xt(C){const S=C.textures;for(let k=0,K=S.length;k<K;k++){const J=S[k];if(g(J)){const j=v(C),Se=n.get(J).__webglTexture;t.bindTexture(j,Se),p(j),t.unbindTexture()}}}const Ye=[],L=[];function sn(C){if(C.samples>0){if(qe(C)===!1){const S=C.textures,k=C.width,K=C.height;let J=s.COLOR_BUFFER_BIT;const j=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Se=n.get(C),he=S.length>1;if(he)for(let xe=0;xe<S.length;xe++)t.bindFramebuffer(s.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Se.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let xe=0;xe<S.length;xe++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(J|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(J|=s.STENCIL_BUFFER_BIT)),he){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Se.__webglColorRenderbuffer[xe]);const Je=n.get(S[xe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Je,0)}s.blitFramebuffer(0,0,k,K,0,0,k,K,J,s.NEAREST),l===!0&&(Ye.length=0,L.length=0,Ye.push(s.COLOR_ATTACHMENT0+xe),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Ye.push(j),L.push(j),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,L)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ye))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),he)for(let xe=0;xe<S.length;xe++){t.bindFramebuffer(s.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.RENDERBUFFER,Se.__webglColorRenderbuffer[xe]);const Je=n.get(S[xe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Se.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.TEXTURE_2D,Je,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const S=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function $e(C){return Math.min(i.maxSamples,C.samples)}function qe(C){const S=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ee(C){const S=a.render.frame;h.get(C)!==S&&(h.set(C,S),C.update())}function mt(C,S){const k=C.colorSpace,K=C.format,J=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||k!==qt&&k!==oi&&(je.getTransfer(k)===lt?(K!==hn||J!==qn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),S}function we(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=F,this.setTexture2D=q,this.setTexture2DArray=X,this.setTexture3D=Z,this.setTextureCube=V,this.rebindTextures=Le,this.setupRenderTarget=bt,this.updateRenderTargetMipmap=xt,this.updateMultisampleRenderTarget=sn,this.setupDepthRenderbuffer=tt,this.setupFrameBufferTexture=be,this.useMultisampledRTT=qe}function my(s,e){function t(n,i=oi){let r;const a=je.getTransfer(i);if(n===qn)return s.UNSIGNED_BYTE;if(n===zl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Hl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Ru)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Au)return s.BYTE;if(n===Cu)return s.SHORT;if(n===tr)return s.UNSIGNED_SHORT;if(n===Ol)return s.INT;if(n===Ri)return s.UNSIGNED_INT;if(n===Mn)return s.FLOAT;if(n===vs)return s.HALF_FLOAT;if(n===Iu)return s.ALPHA;if(n===Pu)return s.RGB;if(n===hn)return s.RGBA;if(n===Lu)return s.LUMINANCE;if(n===Du)return s.LUMINANCE_ALPHA;if(n===ir)return s.DEPTH_COMPONENT;if(n===sr)return s.DEPTH_STENCIL;if(n===Gl)return s.RED;if(n===Vl)return s.RED_INTEGER;if(n===Nu)return s.RG;if(n===Wl)return s.RG_INTEGER;if(n===Xl)return s.RGBA_INTEGER;if(n===fa||n===pa||n===ma||n===ga)if(a===lt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===fa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===pa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ma)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ga)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===fa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===pa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ma)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ga)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Yo||n===qo||n===Ko||n===$o)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Yo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===qo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ko)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===$o)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Jo||n===Zo||n===Qo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Jo||n===Zo)return a===lt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Qo)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===el||n===tl||n===nl||n===il||n===sl||n===rl||n===al||n===ol||n===ll||n===cl||n===hl||n===ul||n===dl||n===fl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===el)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===tl)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===nl)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===il)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===sl)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===rl)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===al)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ol)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ll)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===cl)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===hl)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ul)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===dl)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===fl)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===_a||n===pl||n===ml)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===_a)return a===lt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===pl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ml)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Uu||n===gl||n===_l||n===xl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===_a)return r.COMPRESSED_RED_RGTC1_EXT;if(n===gl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===_l)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===xl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===nr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const gy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_y=`
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

}`;class xy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Ct,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Sn({vertexShader:gy,fragmentShader:_y,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ne(new jt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class yy extends Pi{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,m=null;const _=new xy,g=t.getContextAttributes();let p=null,v=null;const y=[],x=[],I=new re;let A=null;const E=new Xt;E.viewport=new it;const R=new Xt;R.viewport=new it;const b=[E,R],M=new Am;let P=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let se=y[Y];return se===void 0&&(se=new eo,y[Y]=se),se.getTargetRaySpace()},this.getControllerGrip=function(Y){let se=y[Y];return se===void 0&&(se=new eo,y[Y]=se),se.getGripSpace()},this.getHand=function(Y){let se=y[Y];return se===void 0&&(se=new eo,y[Y]=se),se.getHandSpace()};function B(Y){const se=x.indexOf(Y.inputSource);if(se===-1)return;const be=y[se];be!==void 0&&(be.update(Y.inputSource,Y.frame,c||a),be.dispatchEvent({type:Y.type,data:Y.inputSource}))}function W(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",q);for(let Y=0;Y<y.length;Y++){const se=x[Y];se!==null&&(x[Y]=null,y[Y].disconnect(se))}P=null,F=null,_.reset(),e.setRenderTarget(p),f=null,d=null,u=null,i=null,v=null,ft.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",W),i.addEventListener("inputsourceschange",q),g.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(I),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,ce=null,Ie=null;g.depth&&(Ie=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,be=g.stencil?sr:ir,ce=g.stencil?nr:Ri);const tt={colorFormat:t.RGBA8,depthFormat:Ie,scaleFactor:r};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(tt),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new ui(d.textureWidth,d.textureHeight,{format:hn,type:qn,depthTexture:new ed(d.textureWidth,d.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const be={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,be),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new ui(f.framebufferWidth,f.framebufferHeight,{format:hn,type:qn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),ft.setContext(i),ft.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function q(Y){for(let se=0;se<Y.removed.length;se++){const be=Y.removed[se],ce=x.indexOf(be);ce>=0&&(x[ce]=null,y[ce].disconnect(be))}for(let se=0;se<Y.added.length;se++){const be=Y.added[se];let ce=x.indexOf(be);if(ce===-1){for(let tt=0;tt<y.length;tt++)if(tt>=x.length){x.push(be),ce=tt;break}else if(x[tt]===null){x[tt]=be,ce=tt;break}if(ce===-1)break}const Ie=y[ce];Ie&&Ie.connect(be)}}const X=new T,Z=new T;function V(Y,se,be){X.setFromMatrixPosition(se.matrixWorld),Z.setFromMatrixPosition(be.matrixWorld);const ce=X.distanceTo(Z),Ie=se.projectionMatrix.elements,tt=be.projectionMatrix.elements,Le=Ie[14]/(Ie[10]-1),bt=Ie[14]/(Ie[10]+1),xt=(Ie[9]+1)/Ie[5],Ye=(Ie[9]-1)/Ie[5],L=(Ie[8]-1)/Ie[0],sn=(tt[8]+1)/tt[0],$e=Le*L,qe=Le*sn,Ee=ce/(-L+sn),mt=Ee*-L;if(se.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(mt),Y.translateZ(Ee),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Ie[10]===-1)Y.projectionMatrix.copy(se.projectionMatrix),Y.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{const we=Le+Ee,C=bt+Ee,S=$e-mt,k=qe+(ce-mt),K=xt*bt/C*we,J=Ye*bt/C*we;Y.projectionMatrix.makePerspective(S,k,K,J,we,C),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function le(Y,se){se===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(se.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let se=Y.near,be=Y.far;_.texture!==null&&(_.depthNear>0&&(se=_.depthNear),_.depthFar>0&&(be=_.depthFar)),M.near=R.near=E.near=se,M.far=R.far=E.far=be,(P!==M.near||F!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,F=M.far),E.layers.mask=Y.layers.mask|2,R.layers.mask=Y.layers.mask|4,M.layers.mask=E.layers.mask|R.layers.mask;const ce=Y.parent,Ie=M.cameras;le(M,ce);for(let tt=0;tt<Ie.length;tt++)le(Ie[tt],ce);Ie.length===2?V(M,E,R):M.projectionMatrix.copy(E.projectionMatrix),_e(Y,M,ce)};function _e(Y,se,be){be===null?Y.matrix.copy(se.matrixWorld):(Y.matrix.copy(be.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(se.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(se.projectionMatrix),Y.projectionMatrixInverse.copy(se.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=fs*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let Te=null;function We(Y,se){if(h=se.getViewerPose(c||a),m=se,h!==null){const be=h.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let ce=!1;be.length!==M.cameras.length&&(M.cameras.length=0,ce=!0);for(let Le=0;Le<be.length;Le++){const bt=be[Le];let xt=null;if(f!==null)xt=f.getViewport(bt);else{const L=u.getViewSubImage(d,bt);xt=L.viewport,Le===0&&(e.setRenderTargetTextures(v,L.colorTexture,L.depthStencilTexture),e.setRenderTarget(v))}let Ye=b[Le];Ye===void 0&&(Ye=new Xt,Ye.layers.enable(Le),Ye.viewport=new it,b[Le]=Ye),Ye.matrix.fromArray(bt.transform.matrix),Ye.matrix.decompose(Ye.position,Ye.quaternion,Ye.scale),Ye.projectionMatrix.fromArray(bt.projectionMatrix),Ye.projectionMatrixInverse.copy(Ye.projectionMatrix).invert(),Ye.viewport.set(xt.x,xt.y,xt.width,xt.height),Le===0&&(M.matrix.copy(Ye.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ce===!0&&M.cameras.push(Ye)}const Ie=i.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&u){const Le=u.getDepthInformation(be[0]);Le&&Le.isValid&&Le.texture&&_.init(e,Le,i.renderState)}}for(let be=0;be<y.length;be++){const ce=x[be],Ie=y[be];ce!==null&&Ie!==void 0&&Ie.update(ce,se,c||a)}Te&&Te(Y,se),se.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:se}),m=null}const ft=new _d;ft.setAnimationLoop(We),this.setAnimationLoop=function(Y){Te=Y},this.dispose=function(){}}}const vi=new Cn,vy=new ke;function My(s,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Xu(s)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,v,y,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,x)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),_(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,v,y):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Ht&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Ht&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const v=e.get(p),y=v.envMap,x=v.envMapRotation;y&&(g.envMap.value=y,vi.copy(x),vi.x*=-1,vi.y*=-1,vi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(vi.y*=-1,vi.z*=-1),g.envMapRotation.value.setFromMatrix4(vy.makeRotationFromEuler(vi)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,v,y){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*v,g.scale.value=y*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,v){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ht&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){const v=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function by(s,e,t,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,y){const x=y.program;n.uniformBlockBinding(v,x)}function c(v,y){let x=i[v.id];x===void 0&&(m(v),x=h(v),i[v.id]=x,v.addEventListener("dispose",g));const I=y.program;n.updateUBOMapping(v,I);const A=e.render.frame;r[v.id]!==A&&(d(v),r[v.id]=A)}function h(v){const y=u();v.__bindingPointIndex=y;const x=s.createBuffer(),I=v.__size,A=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,I,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,x),x}function u(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const y=i[v.id],x=v.uniforms,I=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let A=0,E=x.length;A<E;A++){const R=Array.isArray(x[A])?x[A]:[x[A]];for(let b=0,M=R.length;b<M;b++){const P=R[b];if(f(P,A,b,I)===!0){const F=P.__offset,B=Array.isArray(P.value)?P.value:[P.value];let W=0;for(let q=0;q<B.length;q++){const X=B[q],Z=_(X);typeof X=="number"||typeof X=="boolean"?(P.__data[0]=X,s.bufferSubData(s.UNIFORM_BUFFER,F+W,P.__data)):X.isMatrix3?(P.__data[0]=X.elements[0],P.__data[1]=X.elements[1],P.__data[2]=X.elements[2],P.__data[3]=0,P.__data[4]=X.elements[3],P.__data[5]=X.elements[4],P.__data[6]=X.elements[5],P.__data[7]=0,P.__data[8]=X.elements[6],P.__data[9]=X.elements[7],P.__data[10]=X.elements[8],P.__data[11]=0):(X.toArray(P.__data,W),W+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,F,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(v,y,x,I){const A=v.value,E=y+"_"+x;if(I[E]===void 0)return typeof A=="number"||typeof A=="boolean"?I[E]=A:I[E]=A.clone(),!0;{const R=I[E];if(typeof A=="number"||typeof A=="boolean"){if(R!==A)return I[E]=A,!0}else if(R.equals(A)===!1)return R.copy(A),!0}return!1}function m(v){const y=v.uniforms;let x=0;const I=16;for(let E=0,R=y.length;E<R;E++){const b=Array.isArray(y[E])?y[E]:[y[E]];for(let M=0,P=b.length;M<P;M++){const F=b[M],B=Array.isArray(F.value)?F.value:[F.value];for(let W=0,q=B.length;W<q;W++){const X=B[W],Z=_(X),V=x%I,le=V%Z.boundary,_e=V+le;x+=le,_e!==0&&I-_e<Z.storage&&(x+=I-_e),F.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=x,x+=Z.storage}}}const A=x%I;return A>0&&(x+=I-A),v.__size=x,v.__cache={},this}function _(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function g(v){const y=v.target;y.removeEventListener("dispose",g);const x=a.indexOf(y.__bindingPointIndex);a.splice(x,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function p(){for(const v in i)s.deleteBuffer(i[v]);a=[],i={},r={}}return{bind:l,update:c,dispose:p}}class Sy{constructor(e={}){const{canvas:t=jf(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const m=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const v=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=hi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let I=!1;this._outputColorSpace=ut;let A=0,E=0,R=null,b=-1,M=null;const P=new it,F=new it;let B=null;const W=new pe(0);let q=0,X=t.width,Z=t.height,V=1,le=null,_e=null;const Te=new it(0,0,X,Z),We=new it(0,0,X,Z);let ft=!1;const Y=new ec;let se=!1,be=!1;const ce=new ke,Ie=new ke,tt=new T,Le=new it,bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let xt=!1;function Ye(){return R===null?V:1}let L=n;function sn(w,N){return t.getContext(w,N)}try{const w={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Fl}`),t.addEventListener("webglcontextlost",$,!1),t.addEventListener("webglcontextrestored",fe,!1),t.addEventListener("webglcontextcreationerror",de,!1),L===null){const N="webgl2";if(L=sn(N,w),L===null)throw sn(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let $e,qe,Ee,mt,we,C,S,k,K,J,j,Se,he,xe,Je,te,ye,Pe,Ne,ve,Ke,ze,pt,D;function ue(){$e=new D_(L),$e.init(),ze=new my(L,$e),qe=new E_(L,$e,e,ze),Ee=new fy(L,$e),qe.reverseDepthBuffer&&d&&Ee.buffers.depth.setReversed(!0),mt=new k_(L),we=new ey,C=new py(L,$e,Ee,we,qe,ze,mt),S=new C_(x),k=new L_(x),K=new Gm(L),pt=new w_(L,K),J=new N_(L,K,mt,pt),j=new B_(L,J,K,mt),Ne=new F_(L,qe,C),te=new A_(we),Se=new Qx(x,S,k,$e,qe,pt,te),he=new My(x,we),xe=new ny,Je=new ly($e),Pe=new S_(x,S,k,Ee,j,f,l),ye=new uy(x,j,qe),D=new by(L,mt,qe,Ee),ve=new T_(L,$e,mt),Ke=new U_(L,$e,mt),mt.programs=Se.programs,x.capabilities=qe,x.extensions=$e,x.properties=we,x.renderLists=xe,x.shadowMap=ye,x.state=Ee,x.info=mt}ue();const G=new yy(x,L);this.xr=G,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const w=$e.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=$e.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(w){w!==void 0&&(V=w,this.setSize(X,Z,!1))},this.getSize=function(w){return w.set(X,Z)},this.setSize=function(w,N,O=!0){if(G.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=w,Z=N,t.width=Math.floor(w*V),t.height=Math.floor(N*V),O===!0&&(t.style.width=w+"px",t.style.height=N+"px"),this.setViewport(0,0,w,N)},this.getDrawingBufferSize=function(w){return w.set(X*V,Z*V).floor()},this.setDrawingBufferSize=function(w,N,O){X=w,Z=N,V=O,t.width=Math.floor(w*O),t.height=Math.floor(N*O),this.setViewport(0,0,w,N)},this.getCurrentViewport=function(w){return w.copy(P)},this.getViewport=function(w){return w.copy(Te)},this.setViewport=function(w,N,O,z){w.isVector4?Te.set(w.x,w.y,w.z,w.w):Te.set(w,N,O,z),Ee.viewport(P.copy(Te).multiplyScalar(V).round())},this.getScissor=function(w){return w.copy(We)},this.setScissor=function(w,N,O,z){w.isVector4?We.set(w.x,w.y,w.z,w.w):We.set(w,N,O,z),Ee.scissor(F.copy(We).multiplyScalar(V).round())},this.getScissorTest=function(){return ft},this.setScissorTest=function(w){Ee.setScissorTest(ft=w)},this.setOpaqueSort=function(w){le=w},this.setTransparentSort=function(w){_e=w},this.getClearColor=function(w){return w.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor(...arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha(...arguments)},this.clear=function(w=!0,N=!0,O=!0){let z=0;if(w){let U=!1;if(R!==null){const Q=R.texture.format;U=Q===Xl||Q===Wl||Q===Vl}if(U){const Q=R.texture.type,oe=Q===qn||Q===Ri||Q===tr||Q===nr||Q===zl||Q===Hl,ge=Pe.getClearColor(),Me=Pe.getClearAlpha(),Ue=ge.r,De=ge.g,Ae=ge.b;oe?(m[0]=Ue,m[1]=De,m[2]=Ae,m[3]=Me,L.clearBufferuiv(L.COLOR,0,m)):(_[0]=Ue,_[1]=De,_[2]=Ae,_[3]=Me,L.clearBufferiv(L.COLOR,0,_))}else z|=L.COLOR_BUFFER_BIT}N&&(z|=L.DEPTH_BUFFER_BIT),O&&(z|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",$,!1),t.removeEventListener("webglcontextrestored",fe,!1),t.removeEventListener("webglcontextcreationerror",de,!1),Pe.dispose(),xe.dispose(),Je.dispose(),we.dispose(),S.dispose(),k.dispose(),j.dispose(),pt.dispose(),D.dispose(),Se.dispose(),G.dispose(),G.removeEventListener("sessionstart",xc),G.removeEventListener("sessionend",yc),fi.stop()};function $(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function fe(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const w=mt.autoReset,N=ye.enabled,O=ye.autoUpdate,z=ye.needsUpdate,U=ye.type;ue(),mt.autoReset=w,ye.enabled=N,ye.autoUpdate=O,ye.needsUpdate=z,ye.type=U}function de(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Be(w){const N=w.target;N.removeEventListener("dispose",Be),vt(N)}function vt(w){Bt(w),we.remove(w)}function Bt(w){const N=we.get(w).programs;N!==void 0&&(N.forEach(function(O){Se.releaseProgram(O)}),w.isShaderMaterial&&Se.releaseShaderCache(w))}this.renderBufferDirect=function(w,N,O,z,U,Q){N===null&&(N=bt);const oe=U.isMesh&&U.matrixWorld.determinant()<0,ge=Hd(w,N,O,z,U);Ee.setMaterial(z,oe);let Me=O.index,Ue=1;if(z.wireframe===!0){if(Me=J.getWireframeAttribute(O),Me===void 0)return;Ue=2}const De=O.drawRange,Ae=O.attributes.position;let Ze=De.start*Ue,st=(De.start+De.count)*Ue;Q!==null&&(Ze=Math.max(Ze,Q.start*Ue),st=Math.min(st,(Q.start+Q.count)*Ue)),Me!==null?(Ze=Math.max(Ze,0),st=Math.min(st,Me.count)):Ae!=null&&(Ze=Math.max(Ze,0),st=Math.min(st,Ae.count));const St=st-Ze;if(St<0||St===1/0)return;pt.setup(U,z,ge,O,Me);let Mt,et=ve;if(Me!==null&&(Mt=K.get(Me),et=Ke,et.setIndex(Mt)),U.isMesh)z.wireframe===!0?(Ee.setLineWidth(z.wireframeLinewidth*Ye()),et.setMode(L.LINES)):et.setMode(L.TRIANGLES);else if(U.isLine){let Ce=z.linewidth;Ce===void 0&&(Ce=1),Ee.setLineWidth(Ce*Ye()),U.isLineSegments?et.setMode(L.LINES):U.isLineLoop?et.setMode(L.LINE_LOOP):et.setMode(L.LINE_STRIP)}else U.isPoints?et.setMode(L.POINTS):U.isSprite&&et.setMode(L.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)xa("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),et.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if($e.get("WEBGL_multi_draw"))et.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Ce=U._multiDrawStarts,Nt=U._multiDrawCounts,rt=U._multiDrawCount,pn=Me?K.get(Me).bytesPerElement:1,Li=we.get(z).currentProgram.getUniforms();for(let Zt=0;Zt<rt;Zt++)Li.setValue(L,"_gl_DrawID",Zt),et.render(Ce[Zt]/pn,Nt[Zt])}else if(U.isInstancedMesh)et.renderInstances(Ze,St,U.count);else if(O.isInstancedBufferGeometry){const Ce=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,Nt=Math.min(O.instanceCount,Ce);et.renderInstances(Ze,St,Nt)}else et.render(Ze,St)};function ot(w,N,O){w.transparent===!0&&w.side===xn&&w.forceSinglePass===!1?(w.side=Ht,w.needsUpdate=!0,Mr(w,N,O),w.side=An,w.needsUpdate=!0,Mr(w,N,O),w.side=xn):Mr(w,N,O)}this.compile=function(w,N,O=null){O===null&&(O=w),p=Je.get(O),p.init(N),y.push(p),O.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),w!==O&&w.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights();const z=new Set;return w.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const Q=U.material;if(Q)if(Array.isArray(Q))for(let oe=0;oe<Q.length;oe++){const ge=Q[oe];ot(ge,O,U),z.add(ge)}else ot(Q,O,U),z.add(Q)}),p=y.pop(),z},this.compileAsync=function(w,N,O=null){const z=this.compile(w,N,O);return new Promise(U=>{function Q(){if(z.forEach(function(oe){we.get(oe).currentProgram.isReady()&&z.delete(oe)}),z.size===0){U(w);return}setTimeout(Q,10)}$e.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let fn=null;function Dn(w){fn&&fn(w)}function xc(){fi.stop()}function yc(){fi.start()}const fi=new _d;fi.setAnimationLoop(Dn),typeof self<"u"&&fi.setContext(self),this.setAnimationLoop=function(w){fn=w,G.setAnimationLoop(w),w===null?fi.stop():fi.start()},G.addEventListener("sessionstart",xc),G.addEventListener("sessionend",yc),this.render=function(w,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(G.cameraAutoUpdate===!0&&G.updateCamera(N),N=G.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,N,R),p=Je.get(w,y.length),p.init(N),y.push(p),Ie.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Y.setFromProjectionMatrix(Ie),be=this.localClippingEnabled,se=te.init(this.clippingPlanes,be),g=xe.get(w,v.length),g.init(),v.push(g),G.enabled===!0&&G.isPresenting===!0){const Q=x.xr.getDepthSensingMesh();Q!==null&&La(Q,N,-1/0,x.sortObjects)}La(w,N,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(le,_e),xt=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,xt&&Pe.addToRenderList(g,w),this.info.render.frame++,se===!0&&te.beginShadows();const O=p.state.shadowsArray;ye.render(O,w,N),se===!0&&te.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=g.opaque,U=g.transmissive;if(p.setupLights(),N.isArrayCamera){const Q=N.cameras;if(U.length>0)for(let oe=0,ge=Q.length;oe<ge;oe++){const Me=Q[oe];Mc(z,U,w,Me)}xt&&Pe.render(w);for(let oe=0,ge=Q.length;oe<ge;oe++){const Me=Q[oe];vc(g,w,Me,Me.viewport)}}else U.length>0&&Mc(z,U,w,N),xt&&Pe.render(w),vc(g,w,N);R!==null&&E===0&&(C.updateMultisampleRenderTarget(R),C.updateRenderTargetMipmap(R)),w.isScene===!0&&w.onAfterRender(x,w,N),pt.resetDefaultState(),b=-1,M=null,y.pop(),y.length>0?(p=y[y.length-1],se===!0&&te.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?g=v[v.length-1]:g=null};function La(w,N,O,z){if(w.visible===!1)return;if(w.layers.test(N.layers)){if(w.isGroup)O=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(N);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Y.intersectsSprite(w)){z&&Le.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Ie);const oe=j.update(w),ge=w.material;ge.visible&&g.push(w,oe,ge,O,Le.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Y.intersectsObject(w))){const oe=j.update(w),ge=w.material;if(z&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Le.copy(w.boundingSphere.center)):(oe.boundingSphere===null&&oe.computeBoundingSphere(),Le.copy(oe.boundingSphere.center)),Le.applyMatrix4(w.matrixWorld).applyMatrix4(Ie)),Array.isArray(ge)){const Me=oe.groups;for(let Ue=0,De=Me.length;Ue<De;Ue++){const Ae=Me[Ue],Ze=ge[Ae.materialIndex];Ze&&Ze.visible&&g.push(w,oe,Ze,O,Le.z,Ae)}}else ge.visible&&g.push(w,oe,ge,O,Le.z,null)}}const Q=w.children;for(let oe=0,ge=Q.length;oe<ge;oe++)La(Q[oe],N,O,z)}function vc(w,N,O,z){const U=w.opaque,Q=w.transmissive,oe=w.transparent;p.setupLightsView(O),se===!0&&te.setGlobalState(x.clippingPlanes,O),z&&Ee.viewport(P.copy(z)),U.length>0&&vr(U,N,O),Q.length>0&&vr(Q,N,O),oe.length>0&&vr(oe,N,O),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function Mc(w,N,O,z){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[z.id]===void 0&&(p.state.transmissionRenderTarget[z.id]=new ui(1,1,{generateMipmaps:!0,type:$e.has("EXT_color_buffer_half_float")||$e.has("EXT_color_buffer_float")?vs:qn,minFilter:Vn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:je.workingColorSpace}));const Q=p.state.transmissionRenderTarget[z.id],oe=z.viewport||P;Q.setSize(oe.z*x.transmissionResolutionScale,oe.w*x.transmissionResolutionScale);const ge=x.getRenderTarget();x.setRenderTarget(Q),x.getClearColor(W),q=x.getClearAlpha(),q<1&&x.setClearColor(16777215,.5),x.clear(),xt&&Pe.render(O);const Me=x.toneMapping;x.toneMapping=hi;const Ue=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),p.setupLightsView(z),se===!0&&te.setGlobalState(x.clippingPlanes,z),vr(w,O,z),C.updateMultisampleRenderTarget(Q),C.updateRenderTargetMipmap(Q),$e.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let Ae=0,Ze=N.length;Ae<Ze;Ae++){const st=N[Ae],St=st.object,Mt=st.geometry,et=st.material,Ce=st.group;if(et.side===xn&&St.layers.test(z.layers)){const Nt=et.side;et.side=Ht,et.needsUpdate=!0,bc(St,O,z,Mt,et,Ce),et.side=Nt,et.needsUpdate=!0,De=!0}}De===!0&&(C.updateMultisampleRenderTarget(Q),C.updateRenderTargetMipmap(Q))}x.setRenderTarget(ge),x.setClearColor(W,q),Ue!==void 0&&(z.viewport=Ue),x.toneMapping=Me}function vr(w,N,O){const z=N.isScene===!0?N.overrideMaterial:null;for(let U=0,Q=w.length;U<Q;U++){const oe=w[U],ge=oe.object,Me=oe.geometry,Ue=oe.group;let De=oe.material;De.allowOverride===!0&&z!==null&&(De=z),ge.layers.test(O.layers)&&bc(ge,N,O,Me,De,Ue)}}function bc(w,N,O,z,U,Q){w.onBeforeRender(x,N,O,z,U,Q),w.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),U.onBeforeRender(x,N,O,z,w,Q),U.transparent===!0&&U.side===xn&&U.forceSinglePass===!1?(U.side=Ht,U.needsUpdate=!0,x.renderBufferDirect(O,N,z,U,w,Q),U.side=An,U.needsUpdate=!0,x.renderBufferDirect(O,N,z,U,w,Q),U.side=xn):x.renderBufferDirect(O,N,z,U,w,Q),w.onAfterRender(x,N,O,z,U,Q)}function Mr(w,N,O){N.isScene!==!0&&(N=bt);const z=we.get(w),U=p.state.lights,Q=p.state.shadowsArray,oe=U.state.version,ge=Se.getParameters(w,U.state,Q,N,O),Me=Se.getProgramCacheKey(ge);let Ue=z.programs;z.environment=w.isMeshStandardMaterial?N.environment:null,z.fog=N.fog,z.envMap=(w.isMeshStandardMaterial?k:S).get(w.envMap||z.environment),z.envMapRotation=z.environment!==null&&w.envMap===null?N.environmentRotation:w.envMapRotation,Ue===void 0&&(w.addEventListener("dispose",Be),Ue=new Map,z.programs=Ue);let De=Ue.get(Me);if(De!==void 0){if(z.currentProgram===De&&z.lightsStateVersion===oe)return wc(w,ge),De}else ge.uniforms=Se.getUniforms(w),w.onBeforeCompile(ge,x),De=Se.acquireProgram(ge,Me),Ue.set(Me,De),z.uniforms=ge.uniforms;const Ae=z.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ae.clippingPlanes=te.uniform),wc(w,ge),z.needsLights=Vd(w),z.lightsStateVersion=oe,z.needsLights&&(Ae.ambientLightColor.value=U.state.ambient,Ae.lightProbe.value=U.state.probe,Ae.directionalLights.value=U.state.directional,Ae.directionalLightShadows.value=U.state.directionalShadow,Ae.spotLights.value=U.state.spot,Ae.spotLightShadows.value=U.state.spotShadow,Ae.rectAreaLights.value=U.state.rectArea,Ae.ltc_1.value=U.state.rectAreaLTC1,Ae.ltc_2.value=U.state.rectAreaLTC2,Ae.pointLights.value=U.state.point,Ae.pointLightShadows.value=U.state.pointShadow,Ae.hemisphereLights.value=U.state.hemi,Ae.directionalShadowMap.value=U.state.directionalShadowMap,Ae.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Ae.spotShadowMap.value=U.state.spotShadowMap,Ae.spotLightMatrix.value=U.state.spotLightMatrix,Ae.spotLightMap.value=U.state.spotLightMap,Ae.pointShadowMap.value=U.state.pointShadowMap,Ae.pointShadowMatrix.value=U.state.pointShadowMatrix),z.currentProgram=De,z.uniformsList=null,De}function Sc(w){if(w.uniformsList===null){const N=w.currentProgram.getUniforms();w.uniformsList=ya.seqWithValue(N.seq,w.uniforms)}return w.uniformsList}function wc(w,N){const O=we.get(w);O.outputColorSpace=N.outputColorSpace,O.batching=N.batching,O.batchingColor=N.batchingColor,O.instancing=N.instancing,O.instancingColor=N.instancingColor,O.instancingMorph=N.instancingMorph,O.skinning=N.skinning,O.morphTargets=N.morphTargets,O.morphNormals=N.morphNormals,O.morphColors=N.morphColors,O.morphTargetsCount=N.morphTargetsCount,O.numClippingPlanes=N.numClippingPlanes,O.numIntersection=N.numClipIntersection,O.vertexAlphas=N.vertexAlphas,O.vertexTangents=N.vertexTangents,O.toneMapping=N.toneMapping}function Hd(w,N,O,z,U){N.isScene!==!0&&(N=bt),C.resetTextureUnits();const Q=N.fog,oe=z.isMeshStandardMaterial?N.environment:null,ge=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:qt,Me=(z.isMeshStandardMaterial?k:S).get(z.envMap||oe),Ue=z.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,De=!!O.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Ae=!!O.morphAttributes.position,Ze=!!O.morphAttributes.normal,st=!!O.morphAttributes.color;let St=hi;z.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(St=x.toneMapping);const Mt=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,et=Mt!==void 0?Mt.length:0,Ce=we.get(z),Nt=p.state.lights;if(se===!0&&(be===!0||w!==M)){const Gt=w===M&&z.id===b;te.setState(z,w,Gt)}let rt=!1;z.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==Nt.state.version||Ce.outputColorSpace!==ge||U.isBatchedMesh&&Ce.batching===!1||!U.isBatchedMesh&&Ce.batching===!0||U.isBatchedMesh&&Ce.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Ce.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Ce.instancing===!1||!U.isInstancedMesh&&Ce.instancing===!0||U.isSkinnedMesh&&Ce.skinning===!1||!U.isSkinnedMesh&&Ce.skinning===!0||U.isInstancedMesh&&Ce.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Ce.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Ce.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Ce.instancingMorph===!1&&U.morphTexture!==null||Ce.envMap!==Me||z.fog===!0&&Ce.fog!==Q||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==te.numPlanes||Ce.numIntersection!==te.numIntersection)||Ce.vertexAlphas!==Ue||Ce.vertexTangents!==De||Ce.morphTargets!==Ae||Ce.morphNormals!==Ze||Ce.morphColors!==st||Ce.toneMapping!==St||Ce.morphTargetsCount!==et)&&(rt=!0):(rt=!0,Ce.__version=z.version);let pn=Ce.currentProgram;rt===!0&&(pn=Mr(z,N,U));let Li=!1,Zt=!1,Ts=!1;const _t=pn.getUniforms(),rn=Ce.uniforms;if(Ee.useProgram(pn.program)&&(Li=!0,Zt=!0,Ts=!0),z.id!==b&&(b=z.id,Zt=!0),Li||M!==w){Ee.buffers.depth.getReversed()?(ce.copy(w.projectionMatrix),qf(ce),Kf(ce),_t.setValue(L,"projectionMatrix",ce)):_t.setValue(L,"projectionMatrix",w.projectionMatrix),_t.setValue(L,"viewMatrix",w.matrixWorldInverse);const $t=_t.map.cameraPosition;$t!==void 0&&$t.setValue(L,tt.setFromMatrixPosition(w.matrixWorld)),qe.logarithmicDepthBuffer&&_t.setValue(L,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&_t.setValue(L,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,Zt=!0,Ts=!0)}if(U.isSkinnedMesh){_t.setOptional(L,U,"bindMatrix"),_t.setOptional(L,U,"bindMatrixInverse");const Gt=U.skeleton;Gt&&(Gt.boneTexture===null&&Gt.computeBoneTexture(),_t.setValue(L,"boneTexture",Gt.boneTexture,C))}U.isBatchedMesh&&(_t.setOptional(L,U,"batchingTexture"),_t.setValue(L,"batchingTexture",U._matricesTexture,C),_t.setOptional(L,U,"batchingIdTexture"),_t.setValue(L,"batchingIdTexture",U._indirectTexture,C),_t.setOptional(L,U,"batchingColorTexture"),U._colorsTexture!==null&&_t.setValue(L,"batchingColorTexture",U._colorsTexture,C));const an=O.morphAttributes;if((an.position!==void 0||an.normal!==void 0||an.color!==void 0)&&Ne.update(U,O,pn),(Zt||Ce.receiveShadow!==U.receiveShadow)&&(Ce.receiveShadow=U.receiveShadow,_t.setValue(L,"receiveShadow",U.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(rn.envMap.value=Me,rn.flipEnvMap.value=Me.isCubeTexture&&Me.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&N.environment!==null&&(rn.envMapIntensity.value=N.environmentIntensity),Zt&&(_t.setValue(L,"toneMappingExposure",x.toneMappingExposure),Ce.needsLights&&Gd(rn,Ts),Q&&z.fog===!0&&he.refreshFogUniforms(rn,Q),he.refreshMaterialUniforms(rn,z,V,Z,p.state.transmissionRenderTarget[w.id]),ya.upload(L,Sc(Ce),rn,C)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(ya.upload(L,Sc(Ce),rn,C),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&_t.setValue(L,"center",U.center),_t.setValue(L,"modelViewMatrix",U.modelViewMatrix),_t.setValue(L,"normalMatrix",U.normalMatrix),_t.setValue(L,"modelMatrix",U.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Gt=z.uniformsGroups;for(let $t=0,Da=Gt.length;$t<Da;$t++){const pi=Gt[$t];D.update(pi,pn),D.bind(pi,pn)}}return pn}function Gd(w,N){w.ambientLightColor.needsUpdate=N,w.lightProbe.needsUpdate=N,w.directionalLights.needsUpdate=N,w.directionalLightShadows.needsUpdate=N,w.pointLights.needsUpdate=N,w.pointLightShadows.needsUpdate=N,w.spotLights.needsUpdate=N,w.spotLightShadows.needsUpdate=N,w.rectAreaLights.needsUpdate=N,w.hemisphereLights.needsUpdate=N}function Vd(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(w,N,O){const z=we.get(w);z.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),we.get(w.texture).__webglTexture=N,we.get(w.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:O,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,N){const O=we.get(w);O.__webglFramebuffer=N,O.__useDefaultFramebuffer=N===void 0};const Wd=L.createFramebuffer();this.setRenderTarget=function(w,N=0,O=0){R=w,A=N,E=O;let z=!0,U=null,Q=!1,oe=!1;if(w){const Me=we.get(w);if(Me.__useDefaultFramebuffer!==void 0)Ee.bindFramebuffer(L.FRAMEBUFFER,null),z=!1;else if(Me.__webglFramebuffer===void 0)C.setupRenderTarget(w);else if(Me.__hasExternalTextures)C.rebindTextures(w,we.get(w.texture).__webglTexture,we.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Ae=w.depthTexture;if(Me.__boundDepthTexture!==Ae){if(Ae!==null&&we.has(Ae)&&(w.width!==Ae.image.width||w.height!==Ae.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(w)}}const Ue=w.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(oe=!0);const De=we.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(De[N])?U=De[N][O]:U=De[N],Q=!0):w.samples>0&&C.useMultisampledRTT(w)===!1?U=we.get(w).__webglMultisampledFramebuffer:Array.isArray(De)?U=De[O]:U=De,P.copy(w.viewport),F.copy(w.scissor),B=w.scissorTest}else P.copy(Te).multiplyScalar(V).floor(),F.copy(We).multiplyScalar(V).floor(),B=ft;if(O!==0&&(U=Wd),Ee.bindFramebuffer(L.FRAMEBUFFER,U)&&z&&Ee.drawBuffers(w,U),Ee.viewport(P),Ee.scissor(F),Ee.setScissorTest(B),Q){const Me=we.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+N,Me.__webglTexture,O)}else if(oe){const Me=we.get(w.texture),Ue=N;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Me.__webglTexture,O,Ue)}else if(w!==null&&O!==0){const Me=we.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Me.__webglTexture,O)}b=-1},this.readRenderTargetPixels=function(w,N,O,z,U,Q,oe){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ge=we.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&oe!==void 0&&(ge=ge[oe]),ge){Ee.bindFramebuffer(L.FRAMEBUFFER,ge);try{const Me=w.texture,Ue=Me.format,De=Me.type;if(!qe.textureFormatReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qe.textureTypeReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=w.width-z&&O>=0&&O<=w.height-U&&L.readPixels(N,O,z,U,ze.convert(Ue),ze.convert(De),Q)}finally{const Me=R!==null?we.get(R).__webglFramebuffer:null;Ee.bindFramebuffer(L.FRAMEBUFFER,Me)}}},this.readRenderTargetPixelsAsync=async function(w,N,O,z,U,Q,oe){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=we.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&oe!==void 0&&(ge=ge[oe]),ge)if(N>=0&&N<=w.width-z&&O>=0&&O<=w.height-U){Ee.bindFramebuffer(L.FRAMEBUFFER,ge);const Me=w.texture,Ue=Me.format,De=Me.type;if(!qe.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qe.textureTypeReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ae=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ae),L.bufferData(L.PIXEL_PACK_BUFFER,Q.byteLength,L.STREAM_READ),L.readPixels(N,O,z,U,ze.convert(Ue),ze.convert(De),0);const Ze=R!==null?we.get(R).__webglFramebuffer:null;Ee.bindFramebuffer(L.FRAMEBUFFER,Ze);const st=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Yf(L,st,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ae),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,Q),L.deleteBuffer(Ae),L.deleteSync(st),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,N=null,O=0){const z=Math.pow(2,-O),U=Math.floor(w.image.width*z),Q=Math.floor(w.image.height*z),oe=N!==null?N.x:0,ge=N!==null?N.y:0;C.setTexture2D(w,0),L.copyTexSubImage2D(L.TEXTURE_2D,O,0,0,oe,ge,U,Q),Ee.unbindTexture()};const Xd=L.createFramebuffer(),jd=L.createFramebuffer();this.copyTextureToTexture=function(w,N,O=null,z=null,U=0,Q=null){Q===null&&(U!==0?(xa("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Q=U,U=0):Q=0);let oe,ge,Me,Ue,De,Ae,Ze,st,St;const Mt=w.isCompressedTexture?w.mipmaps[Q]:w.image;if(O!==null)oe=O.max.x-O.min.x,ge=O.max.y-O.min.y,Me=O.isBox3?O.max.z-O.min.z:1,Ue=O.min.x,De=O.min.y,Ae=O.isBox3?O.min.z:0;else{const an=Math.pow(2,-U);oe=Math.floor(Mt.width*an),ge=Math.floor(Mt.height*an),w.isDataArrayTexture?Me=Mt.depth:w.isData3DTexture?Me=Math.floor(Mt.depth*an):Me=1,Ue=0,De=0,Ae=0}z!==null?(Ze=z.x,st=z.y,St=z.z):(Ze=0,st=0,St=0);const et=ze.convert(N.format),Ce=ze.convert(N.type);let Nt;N.isData3DTexture?(C.setTexture3D(N,0),Nt=L.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(C.setTexture2DArray(N,0),Nt=L.TEXTURE_2D_ARRAY):(C.setTexture2D(N,0),Nt=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,N.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,N.unpackAlignment);const rt=L.getParameter(L.UNPACK_ROW_LENGTH),pn=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Li=L.getParameter(L.UNPACK_SKIP_PIXELS),Zt=L.getParameter(L.UNPACK_SKIP_ROWS),Ts=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Mt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Mt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ue),L.pixelStorei(L.UNPACK_SKIP_ROWS,De),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ae);const _t=w.isDataArrayTexture||w.isData3DTexture,rn=N.isDataArrayTexture||N.isData3DTexture;if(w.isDepthTexture){const an=we.get(w),Gt=we.get(N),$t=we.get(an.__renderTarget),Da=we.get(Gt.__renderTarget);Ee.bindFramebuffer(L.READ_FRAMEBUFFER,$t.__webglFramebuffer),Ee.bindFramebuffer(L.DRAW_FRAMEBUFFER,Da.__webglFramebuffer);for(let pi=0;pi<Me;pi++)_t&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,we.get(w).__webglTexture,U,Ae+pi),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,we.get(N).__webglTexture,Q,St+pi)),L.blitFramebuffer(Ue,De,oe,ge,Ze,st,oe,ge,L.DEPTH_BUFFER_BIT,L.NEAREST);Ee.bindFramebuffer(L.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(U!==0||w.isRenderTargetTexture||we.has(w)){const an=we.get(w),Gt=we.get(N);Ee.bindFramebuffer(L.READ_FRAMEBUFFER,Xd),Ee.bindFramebuffer(L.DRAW_FRAMEBUFFER,jd);for(let $t=0;$t<Me;$t++)_t?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,an.__webglTexture,U,Ae+$t):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,an.__webglTexture,U),rn?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Gt.__webglTexture,Q,St+$t):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Gt.__webglTexture,Q),U!==0?L.blitFramebuffer(Ue,De,oe,ge,Ze,st,oe,ge,L.COLOR_BUFFER_BIT,L.NEAREST):rn?L.copyTexSubImage3D(Nt,Q,Ze,st,St+$t,Ue,De,oe,ge):L.copyTexSubImage2D(Nt,Q,Ze,st,Ue,De,oe,ge);Ee.bindFramebuffer(L.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else rn?w.isDataTexture||w.isData3DTexture?L.texSubImage3D(Nt,Q,Ze,st,St,oe,ge,Me,et,Ce,Mt.data):N.isCompressedArrayTexture?L.compressedTexSubImage3D(Nt,Q,Ze,st,St,oe,ge,Me,et,Mt.data):L.texSubImage3D(Nt,Q,Ze,st,St,oe,ge,Me,et,Ce,Mt):w.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,Q,Ze,st,oe,ge,et,Ce,Mt.data):w.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,Q,Ze,st,Mt.width,Mt.height,et,Mt.data):L.texSubImage2D(L.TEXTURE_2D,Q,Ze,st,oe,ge,et,Ce,Mt);L.pixelStorei(L.UNPACK_ROW_LENGTH,rt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,pn),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Li),L.pixelStorei(L.UNPACK_SKIP_ROWS,Zt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ts),Q===0&&N.generateMipmaps&&L.generateMipmap(Nt),Ee.unbindTexture()},this.copyTextureToTexture3D=function(w,N,O=null,z=null,U=0){return xa('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,N,O,z,U)},this.initRenderTarget=function(w){we.get(w).__webglFramebuffer===void 0&&C.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?C.setTextureCube(w,0):w.isData3DTexture?C.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?C.setTexture2DArray(w,0):C.setTexture2D(w,0),Ee.unbindTexture()},this.resetState=function(){A=0,E=0,R=null,Ee.reset(),pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=je._getDrawingBufferColorSpace(e),t.unpackColorSpace=je._getUnpackColorSpace()}}const wy={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class gr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Ty=new Ca(-1,1,1,-1,0,1);class Ey extends Et{constructor(){super(),this.setAttribute("position",new Qe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Qe([0,2,0,0,2,0],2))}}const Ay=new Ey;class bd{constructor(e){this._mesh=new ne(Ay,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Ty)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Sd extends gr{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Sn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Jl.clone(e.uniforms),this.material=new Sn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new bd(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Kh extends gr{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class Cy extends gr{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Ry{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new re);this._width=n.width,this._height=n.height,t=new ui(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:vs}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Sd(wy),this.copyPass.material.blending=Xn,this.clock=new gd}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Kh!==void 0&&(a instanceof Kh?n=!0:a instanceof Cy&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new re);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Iy extends gr{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new pe}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=i}}const Py={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new re(1/1024,1/512)}},vertexShader:`

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

		}`},ta={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class Ly extends gr{constructor(){super(),this.uniforms=Jl.clone(ta.uniforms),this.material=new rm({name:ta.name,uniforms:this.uniforms,vertexShader:ta.vertexShader,fragmentShader:ta.fragmentShader}),this._fsQuad=new bd(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},je.getTransfer(this._outputColorSpace)===lt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===yu?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===vu?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Mu?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Bl?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Su?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===wu?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===bu&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const xo=new Map;let ti=null,Mi=null;function wd(){if(Mi)return Mi;const s=document.createElement("canvas");s.width=5,s.height=1;const e=s.getContext("2d"),t=e.createLinearGradient(0,0,5,0);return t.addColorStop(0,"#3a3a3a"),t.addColorStop(.28,"#6e6e6e"),t.addColorStop(.55,"#a8a8a8"),t.addColorStop(1,"#ffffff"),e.fillStyle=t,e.fillRect(0,0,5,1),Mi=new Dt(s),Mi.minFilter=Ft,Mi.magFilter=Ft,Mi.generateMipmaps=!1,Mi}function $h(s){var t;if(!s||s.isMeshToonMaterial)return s;const e=new ud({color:((t=s.color)==null?void 0:t.clone())??new pe(16777215),map:s.map??null,gradientMap:wd(),transparent:s.transparent??!1,opacity:s.opacity??1,side:s.side??An,alphaTest:s.alphaTest??0});return e.map&&(e.map.colorSpace=ut,e.map.anisotropy=8),e}function H(s,e={}){const{map:t,transparent:n,opacity:i,emissive:r,emissiveIntensity:a,...o}=e,l=`toon:${s}:${(t==null?void 0:t.uuid)??""}:${n}:${i}:${JSON.stringify(o)}`;if(!xo.has(l)){const c=new ud({color:s,gradientMap:wd(),map:t??null,transparent:n??!1,opacity:i??1,...o});r!=null&&(c.emissive=new pe(r),c.emissiveIntensity=a??.4),xo.set(l,c)}return xo.get(l)}function Td(s,e=1.068,t=657936){if(!s.geometry||s.userData.hasOutline)return s;const n=new ne(s.geometry,new dt({color:t,side:Ht}));return n.scale.multiplyScalar(e),n.userData.isOutline=!0,n.raycast=()=>{},s.add(n),s.userData.hasOutline=!0,s}function ee(s,e,t=1.068){const n=new ne(s,e);return Td(n,t),n}function nt(s,e,t=1.042){return ee(s,e,t)}function Ed(){if(ti)return ti;const s=256,e=document.createElement("canvas");e.width=s,e.height=s;const t=e.getContext("2d");t.fillStyle="#6aad90",t.fillRect(0,0,s,s);for(let n=0;n<120;n++){const i=Math.random()*s,r=Math.random()*s,a=8+Math.random()*22;t.beginPath(),t.arc(i,r,a,0,Math.PI*2),t.fillStyle=Math.random()>.5?"rgba(100,180,150,0.32)":"rgba(120,200,170,0.25)",t.fill()}for(let n=0;n<6e3;n++){const i=Math.random()*s,r=Math.random()*s,a=140+Math.floor(Math.random()*40);t.fillStyle=`rgba(${a-40},${a+20},${a-10},0.2)`,t.fillRect(i,r,1,2+Math.random()*2)}return ti=new Dt(e),ti.wrapS=ti.wrapT=Yn,ti.repeat.set(28,28),ti.colorSpace=ut,ti}let ni=null,ii=null;function Dy(){if(ni)return ni;const s=128,e=document.createElement("canvas");e.width=s,e.height=s;const t=e.getContext("2d");t.fillStyle="#5a4030",t.fillRect(0,0,s,s);for(let n=0;n<180;n++){const i=Math.random()*s,r=Math.random()*s,a=1+Math.random()*3;t.beginPath(),t.arc(i,r,a,0,Math.PI*2),t.fillStyle=Math.random()>.5?"rgba(40,28,20,0.35)":"rgba(90,65,48,0.28)",t.fill()}for(let n=0;n<400;n++)t.fillStyle=`rgba(${70+Math.random()*30},${50+Math.random()*20},${35+Math.random()*15},0.18)`,t.fillRect(Math.random()*s,Math.random()*s,1,1+Math.random());return ni=new Dt(e),ni.wrapS=ni.wrapT=Yn,ni.repeat.set(3,3),ni.colorSpace=ut,ni}function Ny(){if(ii)return ii;const s=128,e=document.createElement("canvas");e.width=s,e.height=s;const t=e.getContext("2d");t.fillStyle="#4a3828",t.fillRect(0,0,s,s);for(let n=0;n<220;n++){const i=Math.random()*s,r=Math.random()*s,a=2+Math.random()*5,o=1+Math.random()*2;t.save(),t.translate(i,r),t.rotate(Math.random()*Math.PI),t.fillStyle=Math.random()>.5?"#6a5040":"#3a2a20",t.fillRect(-a/2,-o/2,a,o),t.restore()}return ii=new Dt(e),ii.wrapS=ii.wrapT=Yn,ii.repeat.set(3,3),ii.colorSpace=ut,ii}const yo=new Map;function Ad(s=5943464){const e=s.toString(16);if(yo.has(e))return yo.get(e);const t=document.createElement("canvas");t.width=128,t.height=192;const n=t.getContext("2d"),i=`#${new pe(s).getHexString()}`;n.fillStyle="#1a3040",n.fillRect(0,0,128,192),n.fillStyle=i,n.fillRect(0,0,128,22),n.fillStyle="#e8f4ff",n.font="bold 11px sans-serif",n.textAlign="center",n.fillText("COLD",64,14),n.font="bold 13px sans-serif",n.fillText("DRINKS",64,20);const r=["#e8a050","#f0d050","#70b8c8","#e87878","#88c878","#c8a0e0"];for(let o=0;o<5;o++)for(let l=0;l<3;l++){const c=18+l*32,h=30+o*30;n.fillStyle=r[(o*3+l)%r.length],n.fillRect(c+1,h,16,26),n.strokeStyle="#1a1a1a",n.lineWidth=2,n.strokeRect(c+1,h,16,26),n.fillStyle="rgba(255,255,255,0.45)",n.fillRect(c+3,h+2,4,18)}n.fillStyle="#8898a8",n.fillRect(96,150,24,32),n.fillStyle="#f0f0f0",n.font="10px sans-serif",n.fillText("¥",108,170);const a=new Dt(t);return a.colorSpace=ut,yo.set(e,a),a}const gt={sky:9556936,fog:13494500,road:11581631,roadLine:16448250,sidewalk:13159890,curb:10528943,green:8174746,meadow:6991248,vending:9556936,orange:15784626,skin:15782064,hair:1710618,shirt:16316664,pants:1710618,backpack:10000536,metal:11583688,awningRed:15573177,awningBlue:9946589};function vo(){return new Promise(s=>requestAnimationFrame(s))}function Jh(s,e){if(e===yf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===yl||e===Bu){let t=s.getIndex();if(t===null){const a=[],o=s.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===yl)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class Uy extends Ss{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new zy(t)}),this.register(function(t){return new Hy(t)}),this.register(function(t){return new $y(t)}),this.register(function(t){return new Jy(t)}),this.register(function(t){return new Zy(t)}),this.register(function(t){return new Vy(t)}),this.register(function(t){return new Wy(t)}),this.register(function(t){return new Xy(t)}),this.register(function(t){return new jy(t)}),this.register(function(t){return new Oy(t)}),this.register(function(t){return new Yy(t)}),this.register(function(t){return new Gy(t)}),this.register(function(t){return new Ky(t)}),this.register(function(t){return new qy(t)}),this.register(function(t){return new Fy(t)}),this.register(function(t){return new Qy(t)}),this.register(function(t){return new ev(t)})}load(e,t,n,i){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=Zs.extractUrlBase(e);a=Zs.resolveURL(c,this.path)}else a=Zs.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new md(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Cd){try{a[Xe.KHR_BINARY_GLTF]=new tv(e)}catch(u){i&&i(u);return}r=JSON.parse(a[Xe.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new pv(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case Xe.KHR_MATERIALS_UNLIT:a[u]=new By;break;case Xe.KHR_DRACO_MESH_COMPRESSION:a[u]=new nv(r,this.dracoLoader);break;case Xe.KHR_TEXTURE_TRANSFORM:a[u]=new iv;break;case Xe.KHR_MESH_QUANTIZATION:a[u]=new sv;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function ky(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const Xe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Fy{constructor(e){this.parser=e,this.name=Xe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const h=new pe(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],qt);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Cl(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new ns(h),c.distance=u;break;case"spot":c=new bm(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Gn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class By{constructor(){this.name=Xe.KHR_MATERIALS_UNLIT}getMaterialType(){return dt}extendParams(e,t,n){const i=[];e.color=new pe(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],qt),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,ut))}return Promise.all(i)}}class Oy{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class zy{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new re(o,o)}return Promise.all(r)}}class Hy{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class Gy{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class Vy{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new pe(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],qt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,ut)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class Wy{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class Xy{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new pe().setRGB(o[0],o[1],o[2],qt),Promise.all(r)}}class jy{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class Yy{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new pe().setRGB(o[0],o[1],o[2],qt),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,ut)),Promise.all(r)}}class qy{constructor(e){this.parser=e,this.name=Xe.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}}class Ky{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}}class $y{constructor(e){this.parser=e,this.name=Xe.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class Jy{constructor(e){this.parser=e,this.name=Xe.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Zy{constructor(e){this.parser=e,this.name=Xe.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Qy{constructor(e){this.name=Xe.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}}class ev{constructor(e){this.name=Xe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==ln.TRIANGLES&&c.mode!==ln.TRIANGLE_STRIP&&c.mode!==ln.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(const m of u){const _=new ke,g=new T,p=new bn,v=new T(1,1,1),y=new bl(m.geometry,m.material,d);for(let x=0;x<d;x++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,x),l.SCALE&&v.fromBufferAttribute(l.SCALE,x),y.setMatrixAt(x,_.compose(g,p,v));for(const x in l)if(x==="_COLOR_0"){const I=l[x];y.instanceColor=new Ml(I.array,I.itemSize,I.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&m.geometry.setAttribute(x,l[x]);ht.prototype.copy.call(y,m),this.parser.assignFinalMaterial(y),f.push(y)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const Cd="glTF",Fs=12,Zh={JSON:1313821514,BIN:5130562};class tv{constructor(e){this.name=Xe.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Fs),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Cd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Fs,r=new DataView(e,Fs);let a=0;for(;a<i;){const o=r.getUint32(a,!0);a+=4;const l=r.getUint32(a,!0);if(a+=4,l===Zh.JSON){const c=new Uint8Array(e,Fs+a,o);this.content=n.decode(c)}else if(l===Zh.BIN){const c=Fs+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class nv{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Xe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const h in a){const u=Pl[h]||h.toLowerCase();o[u]=a[h]}for(const h in e.attributes){const u=Pl[h]||h.toLowerCase();if(a[h]!==void 0){const d=n.accessors[e.attributes[h]],f=ls[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(const m in f.attributes){const _=f.attributes[m],g=l[m];g!==void 0&&(_.normalized=g)}u(f)},o,c,qt,d)})})}}class iv{constructor(){this.name=Xe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class sv{constructor(){this.name=Xe.KHR_MESH_QUANTIZATION}}class Rd extends pr{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,m=e*c,_=m-c,g=-2*f+3*d,p=f-d,v=1-g,y=p-d+u;for(let x=0;x!==o;x++){const I=a[_+x+o],A=a[_+x+l]*h,E=a[m+x+o],R=a[m+x]*h;r[x]=v*I+y*A+g*E+p*R}return r}}const rv=new bn;class av extends Rd{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return rv.fromArray(r).normalize().toArray(r),r}}const ln={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},ls={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Qh={9728:Ft,9729:nn,9984:Eu,9985:da,9986:Vs,9987:Vn},eu={33071:li,33648:Ma,10497:Yn},Mo={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Pl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},si={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},ov={CUBICSPLINE:void 0,LINEAR:ar,STEP:rr},bo={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function lv(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new cc({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:An})),s.DefaultMaterial}function bi(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Gn(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function cv(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;a.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;o.push(d)}if(r){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function hv(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function uv(s){let e;const t=s.extensions&&s.extensions[Xe.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+So(t.attributes):e=s.indices+":"+So(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+So(s.targets[n]);return e}function So(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Ll(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function dv(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const fv=new ke;class pv{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new ky,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&a<98?this.textureLoader=new ym(this.options.manager):this.textureLoader=new Em(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new md(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return bi(r,o,i),Gn(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,h]of a.children.entries())r(h,o.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Xe.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,a){n.load(Zs.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=Mo[i.type],o=ls[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new Yt(c,a,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],l=Mo[i.type],c=ls[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0;let _,g;if(f&&f!==u){const p=Math.floor(d/f),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let y=t.cache.get(v);y||(_=new c(o,p*f,i.count*f/h),y=new qu(_,f/h),t.cache.add(v,y)),g=new lr(y,l,d%f/h,m)}else o===null?_=new c(i.count*l):_=new c(o,d,i.count*l),g=new Yt(_,l,m);if(i.sparse!==void 0){const p=Mo.SCALAR,v=ls[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,x=i.sparse.values.byteOffset||0,I=new v(a[1],y,i.sparse.count*p),A=new c(a[2],x,i.sparse.count*l);o!==null&&(g=new Yt(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let E=0,R=I.length;E<R;E++){const b=I[E];if(g.setX(b,A[E*l]),l>=2&&g.setY(b,A[E*l+1]),l>=3&&g.setZ(b,A[E*l+2]),l>=4&&g.setW(b,A[E*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const i=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const d=(r.samplers||{})[a.sampler]||{};return h.magFilter=Qh[d.magFilter]||nn,h.minFilter=Qh[d.minFilter]||Vn,h.wrapS=eu[d.wrapS]||Yn,h.wrapT=eu[d.wrapT]||Yn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Ft&&h.minFilter!==nn,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const a=i.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let m=d;t.isImageBitmapLoader===!0&&(m=function(_){const g=new Ct(_);g.needsUpdate=!0,d(g)}),t.load(Zs.resolveURL(u,r.path),m,void 0,f)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),Gn(u,a),u.userData.mimeType=a.mimeType||dv(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[Xe.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[Xe.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=r.associations.get(a);a=r.extensions[Xe.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Qu,dn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Zu,dn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return cc}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let a;const o={},l=r.extensions||{},c=[];if(l[Xe.KHR_MATERIALS_UNLIT]){const u=i[Xe.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,r,t))}else{const u=r.pbrMetallicRoughness||{};if(o.color=new pe(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],qt),o.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,ut)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=xn);const h=r.alphaMode||bo.OPAQUE;if(h===bo.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===bo.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==dt&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new re(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==dt&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==dt){const u=r.emissiveFactor;o.emissive=new pe().setRGB(u[0],u[1],u[2],qt)}return r.emissiveTexture!==void 0&&a!==dt&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,ut)),Promise.all(c).then(function(){const u=new a(o);return r.name&&(u.name=r.name),Gn(u,r),t.associations.set(u,{materials:e}),r.extensions&&bi(i,u,r),u})}createUniqueName(e){const t=at.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[Xe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return tu(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],h=uv(c),u=i[h];if(u)a.push(u.promise);else{let d;c.extensions&&c.extensions[Xe.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=tu(new Et,c,t),i[h]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const h=a[l].material===void 0?lv(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,m=h.length;f<m;f++){const _=h[f],g=a[f];let p;const v=c[f];if(g.mode===ln.TRIANGLES||g.mode===ln.TRIANGLE_STRIP||g.mode===ln.TRIANGLE_FAN||g.mode===void 0)p=r.isSkinnedMesh===!0?new Mp(_,v):new ne(_,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===ln.TRIANGLE_STRIP?p.geometry=Jh(p.geometry,Bu):g.mode===ln.TRIANGLE_FAN&&(p.geometry=Jh(p.geometry,yl));else if(g.mode===ln.LINES)p=new Ep(_,v);else if(g.mode===ln.LINE_STRIP)p=new tc(_,v);else if(g.mode===ln.LINE_LOOP)p=new Ap(_,v);else if(g.mode===ln.POINTS)p=new Cp(_,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&hv(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Gn(p,r),g.extensions&&bi(i,p,g),t.assignFinalMaterial(p),u.push(p)}for(let f=0,m=u.length;f<m;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&bi(i,u[0],r),u[0];const d=new Re;r.extensions&&bi(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,m=u.length;f<m;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Xt(kt.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Ca(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Gn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),a=i,o=[],l=[];for(let c=0,h=a.length;c<h;c++){const u=a[c];if(u){o.push(u);const d=new ke;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Ql(o,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const f=i.channels[u],m=i.samplers[f.sampler],_=f.target,g=_.node,p=i.parameters!==void 0?i.parameters[m.input]:m.input,v=i.parameters!==void 0?i.parameters[m.output]:m.output;_.node!==void 0&&(a.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",v)),c.push(m),h.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],m=u[2],_=u[3],g=u[4],p=[];for(let v=0,y=d.length;v<y;v++){const x=d[v],I=f[v],A=m[v],E=_[v],R=g[v];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const b=n._createAnimationTracks(x,I,A,E,R);if(b)for(let M=0;M<b.length;M++)p.push(b[M])}return new Al(r,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,fv)});for(let f=0,m=u.length;f<m;f++)h.add(u[f]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new $u:c.length>1?h=new Re:c.length===1?h=c[0]:h=new ht,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=a),Gn(h,r),r.extensions&&bi(n,h,r),r.matrix!==void 0){const u=new ke;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new Re;n.name&&(r.name=i.createUniqueName(n.name)),Gn(r,n),n.extensions&&bi(t,r,n);const a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);const c=h=>{const u=new Map;for(const[d,f]of i.associations)(d instanceof dn||d instanceof Ct)&&u.set(d,f);return h.traverse(d=>{const f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){const a=[],o=e.name?e.name:e.uuid,l=[];si[r.path]===si.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(o);let c;switch(si[r.path]){case si.weights:c=gs;break;case si.rotation:c=_s;break;case si.translation:case si.scale:c=xs;break;default:switch(n.itemSize){case 1:c=gs;break;case 2:case 3:default:c=xs;break}break}const h=i.interpolation!==void 0?ov[i.interpolation]:ar,u=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const m=new c(l[d]+"."+si[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),a.push(m)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Ll(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof _s?av:Rd;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function mv(s,e,t){const n=e.attributes,i=new Jt;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new T(l[0],l[1],l[2]),new T(c[0],c[1],c[2])),o.normalized){const h=Ll(ls[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new T,l=new T;for(let c=0,h=r.length;c<h;c++){const u=r[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){const _=Ll(ls[d.componentType]);l.multiplyScalar(_)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;const a=new In;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function tu(s,e,t){const n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){s.setAttribute(o,l)})}for(const a in n){const o=Pl[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){const a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return je.workingColorSpace!==qt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${je.workingColorSpace}" not supported.`),Gn(s,e),mv(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?cv(s,e.targets,t):s})}function gv(s){const e=new Map,t=new Map,n=s.clone();return Id(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const r=i,a=e.get(i),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Id(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)Id(s.children[n],e.children[n],t)}const wo={bench:{file:"bench.glb",targetHeight:.85,maxFootprint:1.5,credit:"Kenney Furniture Kit (CC0)"},bench_cushion:{file:"bench_cushion.glb",targetHeight:.88,maxFootprint:1.5,credit:"Kenney Furniture Kit (CC0)"},fence_low:{file:"fence_low.glb",targetHeight:.55,maxFootprint:2,credit:"Kenney City Kit Suburban (CC0)"},tree_normal:{file:"tree_normal.glb",targetHeight:5.5,maxFootprint:3.5,credit:"Kenney City Kit Suburban (CC0)"},tree_cherry:{file:"tree_cherry.glb",targetHeight:4.8,maxFootprint:3,credit:"Kenney City Kit Suburban (CC0)"},shrine:{file:"shrine.glb",targetHeight:2.6,maxFootprint:3.5,credit:"Tomb Chaser 2 / Polygonal Mind (CC0)"},shrine_stairs:{file:"shrine_stairs.glb",targetHeight:1.1,maxFootprint:2.8,credit:"Tomb Chaser 2 / Polygonal Mind (CC0)"},street_lamp:{file:"street_lamp.glb",targetHeight:2.4,maxFootprint:.8,credit:"Lunar Year / Polygonal Mind (CC0)"},fountain:{file:"fountain.glb",targetHeight:1.6,maxFootprint:2.2,credit:"MomusPark / Polygonal Mind (CC0)"},rock:{file:"rock.glb",targetHeight:.42,maxFootprint:1,credit:"Tomb Chaser 2 / Polygonal Mind (CC0)"},bush:{file:"bush.glb",targetHeight:.65,maxFootprint:1.2,credit:"MomusPark / Polygonal Mind (CC0)"},vending:{file:"vending.glb",targetHeight:1.85,maxFootprint:1,credit:"Tomb Chaser 2 / Polygonal Mind (CC0)"},decoration:{file:"decoration.glb",targetHeight:.35,maxFootprint:.7,credit:"Tomb Chaser 2 / Polygonal Mind (CC0)"},animal_cat:{file:"animal_cat.glb",targetHeight:.7,maxFootprint:.65,credit:"Kenney Cube Pets (CC0)"},animal_dog:{file:"animal_dog.glb",targetHeight:.72,maxFootprint:.65,credit:"Kenney Cube Pets (CC0)"},animal_bunny:{file:"animal_bunny.glb",targetHeight:.65,maxFootprint:.55,credit:"Kenney Cube Pets (CC0)"},animal_fox:{file:"animal_fox.glb",targetHeight:.68,maxFootprint:.6,credit:"Kenney Cube Pets (CC0)"},animal_duck:{file:"animal_duck.glb",targetHeight:.55,maxFootprint:.5,credit:"Kenney Cube Pets (CC0)"},animal_pig:{file:"animal_pig.glb",targetHeight:.65,maxFootprint:.55,credit:"Kenney Cube Pets (CC0)"},animal_parrot:{file:"animal_parrot.glb",targetHeight:.6,maxFootprint:.5,credit:"Kenney Cube Pets (CC0)"},shop_a:{file:"shop_a.glb",targetHeight:2.8,maxFootprint:3.8,credit:"Kenney City Kit Commercial (CC0)"},shop_b:{file:"shop_b.glb",targetHeight:2.7,maxFootprint:3.6,credit:"Kenney City Kit Commercial (CC0)"},shop_c:{file:"shop_c.glb",targetHeight:2.6,maxFootprint:3.4,credit:"Kenney City Kit Commercial (CC0)"},shop_d:{file:"shop_d.glb",targetHeight:2.5,maxFootprint:3.2,credit:"Kenney City Kit Commercial (CC0)"},building_a:{file:"building_a.glb",targetHeight:3.4,maxFootprint:4.2,credit:"Kenney City Kit Suburban (CC0)"},building_b:{file:"building_b.glb",targetHeight:3.6,maxFootprint:4.5,credit:"Kenney City Kit Suburban (CC0)"},building_c:{file:"building_c.glb",targetHeight:3.2,maxFootprint:4,credit:"Kenney City Kit Suburban (CC0)"},building_d:{file:"building_d.glb",targetHeight:3,maxFootprint:3.6,credit:"Kenney City Kit Suburban (CC0)"},awning:{file:"awning.glb",targetHeight:.5,maxFootprint:1.8,credit:"Kenney City Kit Commercial (CC0)"},character_female_a:{file:"character_female_a.glb",targetHeight:1.72,maxFootprint:.9,rigged:!0,credit:"KayKit Character Pack Adventures (CC0)"},character_female_b:{file:"character_female_b.glb",targetHeight:1.72,maxFootprint:.9,rigged:!0,credit:"KayKit Character Pack Adventures (CC0)"},character_female_c:{file:"character_female_c.glb",targetHeight:1.72,maxFootprint:.9,rigged:!0,credit:"KayKit Character Pack Adventures (CC0)"},character_male_a:{file:"character_male_a.glb",targetHeight:1.72,maxFootprint:.9,rigged:!0,credit:"KayKit Character Pack Adventures (CC0)"},character_male_b:{file:"character_male_b.glb",targetHeight:1.72,maxFootprint:.9,rigged:!0,credit:"KayKit Character Pack Adventures (CC0)"},character_male_c:{file:"character_male_c.glb",targetHeight:1.72,maxFootprint:.9,rigged:!0,credit:"KayKit Character Pack Adventures (CC0)"}};function nu(s){return`/WalkingSimulation/models/cc0/${s}`}const _v=["_armleft","_armright","_body","_head","_legleft","_legright","_head_hooded","_cape"];function iu(s){const e=s.name.toLowerCase();return _v.some(t=>e.endsWith(t))}function xv(s){let e=!1;s.traverse(t=>{(t.isMesh||t.isSkinnedMesh)&&iu(t)&&(e=!0)}),e&&s.traverse(t=>{!t.isMesh&&!t.isSkinnedMesh||iu(t)||(t.visible=!1)})}function yv(s,{outlineScale:e=1.055}={}){s.traverse(t=>{!t.isMesh||t.userData.isOutline||(t.castShadow=!0,t.receiveShadow=!0,t.frustumCulled=!0,Array.isArray(t.material)?t.material=t.material.map($h):t.material=$h(t.material),t.geometry&&!t.userData.hasOutline&&e>1&&Td(t,e,657936))})}function js(s){const e=new Jt;let t=!1;return s.updateMatrixWorld(!0),s.traverse(n=>{if(!n.isMesh||!n.geometry||n.visible===!1)return;const i=n.geometry;i.boundingBox||i.computeBoundingBox();const r=i.boundingBox.clone();r.applyMatrix4(n.matrixWorld),t?e.union(r):(e.copy(r),t=!0)}),t?e:new Jt().setFromObject(s)}function vv(s,e=0){const t=js(s);return s.position.y+=e-t.min.y,s}function Mv(s,e){const t={};for(const i of e){const r=s.clipAction(i);r.clampWhenFinished=!0,t[i.name.toLowerCase()]=r}const n={walking_a:"walk",walking_b:"walk",walking_c:"walk",running_a:"sprint",running_b:"sprint",jump_start:"jump",jump_idle:"jump",jump_full_short:"jump",sit_floor_idle:"sit",sit_chair_idle:"sit",unarmed_idle:"idle",cheer:"emote-yes",interact:"emote-no"};for(const[i,r]of Object.entries(n))t[i]&&!t[r]&&(t[r]=t[i]);return t.sit_chair_idle?t.sit=t.sit_chair_idle:t.sit_floor_idle&&(t.sit=t.sit_floor_idle),t}function su(s,{targetHeight:e,maxFootprint:t,maxHeight:n}){s.updateMatrixWorld(!0);let i=js(s),r=i.getSize(new T);if(e&&r.y>1e-4){const o=e/r.y;s.scale.multiplyScalar(o),s.updateMatrixWorld(!0),i=js(s),r=i.getSize(new T)}const a=Math.max(r.x,r.z);if(t&&a>t){const o=t/a;s.scale.multiplyScalar(o),s.updateMatrixWorld(!0),i=js(s),r=i.getSize(new T)}return n&&r.y>n&&(s.scale.multiplyScalar(n/r.y),s.updateMatrixWorld(!0),i=js(s)),s.position.y-=i.min.y,s.updateMatrixWorld(!0),s}class bv{constructor(){this.loader=new Uy,this.templates=new Map,this.characterTemplates=new Map,this.failed=new Map,this.loadedKeys=[]}has(e){return(this.templates.has(e)||this.characterTemplates.has(e))&&!this.failed.has(e)}getLoadReport(){return{loaded:[...this.loadedKeys],failed:Object.fromEntries(this.failed),total:this.loadedKeys.length+this.failed.size}}async loadAll(e=wo,t){const n=Object.entries(e);let i=0;const r=nu("");await Promise.all(n.map(async([a,o])=>{const l=nu(o.file);try{this.loader.setResourcePath(r);const c=await this.loader.loadAsync(l),h=c.scene;o.rigged&&xv(h),yv(h,{outlineScale:o.rigged?1:1.055}),su(h,{targetHeight:o.targetHeight,maxFootprint:o.rigged?null:o.maxFootprint,maxHeight:o.maxHeight}),h.traverse(u=>{u.userData.modelKey=a}),o.rigged?this.characterTemplates.set(a,{scene:h,animations:c.animations??[]}):this.templates.set(a,h),this.loadedKeys.push(a)}catch(c){const h=(c==null?void 0:c.message)??String(c);console.warn(`ModelLoader: failed "${a}" from ${l}: ${h}`),this.failed.set(a,{file:o.file,url:l,error:h})}finally{i+=1,t==null||t(`Loading 3D models… (${i}/${n.length})`)}})),this.failed.size>0&&console.warn("ModelLoader report:",this.getLoadReport())}createCharacterInstance(e,t={}){const n=this.characterTemplates.get(e);if(!n||this.failed.has(e))return null;wo[e];const{rotationY:i=0,tint:r=null,tintStrength:a=.22}=t,o=gv(n.scene);o.traverse(u=>{if(!(!u.isMesh||!u.material)&&(Array.isArray(u.material)?u.material=u.material.map(d=>d.clone()):u.material=u.material.clone(),r!=null)){const d=Array.isArray(u.material)?u.material:[u.material];for(const f of d)f.color&&f.color.lerp(new pe(r),a)}});const l=new zm(o),c=Mv(l,n.animations),h=new Re;return i&&(o.rotation.y=i),h.add(o),h.userData.isRiggedCharacter=!0,h.userData.mixer=l,h.userData.actions=c,h.userData.currentAnim=null,h.userData.legs=null,h.userData.arms=null,h.userData.walkPhase=0,h.userData.sitBlend=0,h.userData.modelKey=e,h.userData.dynamic=!0,this._playCharacterAnim(h,"idle",0),h}_playCharacterAnim(e,t,n=.2){const i=e.userData.actions,r=i==null?void 0:i[t];if(!r){console.warn(`[Anim] missing clip "${t}" for`,e.userData.modelKey??"?","| available:",Object.keys(i??{}).filter(c=>!c.includes("_")).join(" "));return}const a=e.userData.currentAnim,o=a&&a!==t?i[a]:null,l=["sit","static"].includes(t);r.reset(),r.setEffectiveWeight(1),r.setLoop(l?ku:Fu,l?1:1/0),r.clampWhenFinished=l,r.play(),o&&(n>0?o.fadeOut(n):o.stop()),e.userData.currentAnim=t}updateCharacterAnimation(e,t,n){var h;if(!((h=e==null?void 0:e.userData)!=null&&h.isRiggedCharacter))return;const i=e.userData.mixer;if(!i)return;i.update(n);const r=e.userData.isSitting,a=e.userData.isJumping;let o="idle";a?o="jump":r?o="sit":t>4.5?o="sprint":t>.15&&(o="walk");const l=e.userData.actions,c=l==null?void 0:l[e.userData.currentAnim];if((e.userData.currentAnim!==o||c&&!c.isRunning()&&!["sit"].includes(o))&&this._playCharacterAnim(e,o,.18),o==="walk"||o==="sprint"){const u=l==null?void 0:l[o];if(u){const d=o==="sprint"?6.5:3.2;u.setEffectiveTimeScale(Math.min(t/d,2.5))}}}playCharacterEmote(e,t,n=1.2){var o;if(!((o=e==null?void 0:e.userData)!=null&&o.isRiggedCharacter))return;const i=e.userData.actions;if(!(i==null?void 0:i[t]))return;const a=e.userData.isSitting?"sit":"idle";this._playCharacterAnim(e,t,.12),clearTimeout(e.userData._emoteTimer),e.userData._emoteTimer=setTimeout(()=>{e.userData.currentAnim===t&&this._playCharacterAnim(e,a,.2)},n*1e3)}createInstance(e,t={}){const n=this.templates.get(e);if(!n||this.failed.has(e))return null;const i=wo[e]??{},{targetHeight:r=i.targetHeight,maxFootprint:a=i.maxFootprint,maxHeight:o=i.maxHeight,scale:l=1,tint:c=null,tintStrength:h=.28,rotationY:u=0}=t,d=n.clone(!0);return d.scale.set(1,1,1),d.position.set(0,0,0),d.rotation.set(0,0,0),d.traverse(f=>{if(!(!f.isMesh||!f.material)&&(Array.isArray(f.material)?f.material=f.material.map(m=>m.clone()):f.material=f.material.clone(),c!=null)){const m=Array.isArray(f.material)?f.material:[f.material];for(const _ of m)_.color&&_.color.lerp(new pe(c),h)}}),l!==1&&d.scale.multiplyScalar(l),su(d,{targetHeight:r,maxFootprint:a,maxHeight:o}),u&&(d.rotation.y=u),d.userData.modelKey=e,d.userData.isLoadedModel=!0,d}}function Sv(s,e,t,n,i,r,a,o){const l=Math.cos(-o),c=Math.sin(-o),h=s-n,u=e-i,d=h*l-u*c,f=h*c+u*l,m=Math.max(-r,Math.min(r,d)),_=Math.max(-a,Math.min(a,f)),g=d-m,p=f-_,v=g*g+p*p;if(v>=t*t||v<1e-8)return null;const y=Math.sqrt(v),x=t-y,I=g/y,A=p/y,E=I*l+A*c,R=-I*c+A*l;return{x:s+E*x,z:e+R*x}}function wv(s,e,t,n,i,r){const a=s-n,o=e-i,l=Math.hypot(a,o),c=t+r;if(l>=c||l<1e-6)return null;const h=(c-l)/l;return{x:s+a*h,z:e+o*h}}class Tv{constructor(){this.boxes=[],this.circles=[]}addBox(e,t,n,i,r=0){this.boxes.push({x:e,z:t,halfW:n,halfD:i,rotY:r})}addCircle(e,t,n){this.circles.push({x:e,z:t,radius:n})}resolve(e,t=.45,n=2){let i=e.x,r=e.z;for(let a=0;a<n;a++){for(const o of this.boxes){const l=Sv(i,r,t,o.x,o.z,o.halfW,o.halfD,o.rotY);l&&(i=l.x,r=l.z)}for(const o of this.circles){const l=wv(i,r,t,o.x,o.z,o.radius);l&&(i=l.x,r=l.z)}}e.x=i,e.z=r}}let Ci=null;function Ev(s){Ci=s}function cs(s,e,t,n={}){return(Ci==null?void 0:Ci.createInstance(s,{targetHeight:e,...n}))??t()}const Pd=2.85,Zi=6.6,Bs=5,na=7.4,To=13.5;function Av(s,e,t,n,i,r=0,a="street"){const o=e.getPointAt(t),l=e.getTangentAt(t).normalize(),c=new T(-l.z,0,l.x).multiplyScalar(n);return s.position.copy(o).add(c.multiplyScalar(i)),s.position.y=r,a==="street"?s.lookAt(o.x,s.position.y,o.z):a==="gate"?(s.lookAt(o.x,s.position.y,o.z),s.rotateY(Math.PI/2)):a==="path"&&s.lookAt(s.position.x+l.x,s.position.y,s.position.z+l.z),Cv(s,r),s}function Cv(s,e=0){var n;if((n=s.userData)!=null&&n.isLoadedModel)return vv(s,e),s;s.updateMatrixWorld(!0);const t=new Jt().setFromObject(s);return Number.isFinite(t.min.y)&&(s.position.y+=e-t.min.y),s}function Os(s,e,t=3){const n=e.clone();n.userData={radius:t},s.push(n)}function Rv(s,e,t=1){var n;for(const i of e){const r=(((n=i.userData)==null?void 0:n.radius)??1)+t;if(Math.hypot(s.x-i.x,s.z-i.z)<r)return!0}return!1}function zs(s,e,t,n,i,r,a,o="street"){const l=[];for(const c of[0,.03,-.03,.06,-.06,.09,-.09,.12,-.12])for(const h of[0,.35,.7])l.push({t:t+c,offset:i+h});for(const{t:c,offset:h}of l){const u=kt.clamp(c,.02,.98);if(!(h<Pd-.2)&&(Av(s,e,u,n,h,0,o),!Rv(s.position,r,a)))return{t:u,offset:h}}return null}function Hs(s,e=1){s.updateMatrixWorld(!0);const n=new Jt().setFromObject(s).getSize(new T);return!Number.isFinite(n.x)||!Number.isFinite(n.z)?e:Math.max(Math.hypot(n.x,n.z)*.5,e)}function ru(s,e=1,t=1){s.updateMatrixWorld(!0);const i=new Jt().setFromObject(s).getSize(new T);return!Number.isFinite(i.x)||!Number.isFinite(i.z)?{halfW:e,halfD:t}:{halfW:Math.max(i.x,i.z)*.5,halfD:Math.min(i.x,i.z)*.5}}function Si(s,e,t,n,i=0,r=180){const a=s.getSpacedPoints(r),o=[],l=[];for(let u=0;u<a.length;u++){const d=u/(a.length-1),f=a[u],m=s.getTangentAt(d).normalize(),_=new T(-m.z,0,m.x),g=f.clone().add(_.clone().multiplyScalar(i)),p=g.clone().add(_.clone().multiplyScalar(-e)),v=g.clone().add(_.clone().multiplyScalar(e));o.push(p.x,t,p.z,v.x,t,v.z)}for(let u=0;u<a.length-1;u++){const d=u*2,f=d+1,m=d+2,_=d+3;l.push(d,f,m,f,_,m)}const c=new Et;c.setAttribute("position",new Qe(o,3)),c.setIndex(l),c.computeVertexNormals();const h=new ne(c,n);return h.receiveShadow=!0,h}function Ld(s,e,t,n,i,r="house",a={}){const o=new Re,l=H(n),c=H(i),h=e/2,u=nt(new me(s,t,e),l);u.position.y=t/2,o.add(u);const d=Math.min(1.4,t*.35),f=nt(new me(s+.02,d,e+.02),H(new pe(n).offsetHSL(0,0,-.08).getHex()));f.position.y=d/2,o.add(f);const m=r==="apartment"?Math.max(2,Math.round(t/1.6)):1;for(let A=1;A<m;A++){const E=nt(new me(s+.06,.1,e+.06),H(new pe(i).offsetHSL(0,0,.1).getHex()));E.position.y=t/m*A,o.add(E)}const _=H(12116208),g=H(new pe(n).offsetHSL(0,0,-.15).getHex()),p=.52,v=.58,y=Math.max(1,Math.floor(s/1.3)),x=s/(y+1),I=[];for(let A=0;A<m;A++){const E=t/m;I.push(d+(A===0?E*.6:t/m*A+E*.55))}if(I.forEach((A,E)=>{if(!(E===0&&r==="shop"))for(let R=0;R<y;R++){const b=-s/2+x*(R+1),M=new ne(new me(p+.1,v+.1,.06),g);M.position.set(b,A,h+.02),o.add(M);const P=new ne(new jt(p,v),_);P.position.set(b,A,h+.06),o.add(P);const F=new ne(new me(p+.14,.07,.14),H(13682872));F.position.set(b,A-v/2-.02,h+.08),o.add(F)}}),r==="shop"){const A=nt(new me(s*.65,d-.15,.08),g);A.position.set(0,d*.5+.08,h+.03),o.add(A);const E=new ne(new jt(s*.6,d-.22),H(9490664));E.position.set(0,d*.5+.08,h+.07),o.add(E);const R=nt(new me(.82,1.55,.07),H(5914672));R.position.set(s*.28,.78,h+.03),o.add(R);const b=new ne(new jt(.55,1.1),H(8440040));b.position.set(s*.28,.9,h+.07),o.add(b);const M=[gt.awningRed,gt.awningBlue,5275728,12619824],P=a.awningColor??M[Math.floor(n)%M.length],F=nt(new me(s+.5,.08,1.3),H(P));F.position.set(0,t*.72,h+.6),o.add(F);for(let W=0;W<3;W++){const q=new ne(new me((s+.4)/6,.06,1.25),H(16777215));q.position.set(-s/3+W*(s/3),t*.72,h+.6),o.add(q)}const B=new ne(new me(s+.5,.18,.06),H(P));B.position.set(0,t*.72-.09,h+1.22),o.add(B)}if(r==="house"){const A=nt(new me(.75,1.45,.08),H(5914672));A.position.set(-s*.2,.73,h+.03),o.add(A);const E=new ne(new Fe(.05,5,4),H(13150272));E.position.set(-s*.2+.26,.72,h+.09),o.add(E);const R=nt(new me(.3,.14,.04),H(15788224));R.position.set(-s*.2-.52,1.1,h+.04),o.add(R)}if(r==="apartment"){const A=nt(new me(1.4,2,.1),H(new pe(n).offsetHSL(0,0,-.12).getHex()));A.position.set(0,1,h+.04),o.add(A);const E=new ne(new jt(.9,1.6),H(8437984));E.position.set(0,1,h+.1),o.add(E);for(let R=1;R<m;R++){const b=t/m*R+.18,M=nt(new me(s*.45,.09,.65),H(9474192));M.position.set(s*.22,b,h+.36),o.add(M);const P=nt(new me(s*.45,.32,.05),H(7368816));P.position.set(s*.22,b+.2,h+.67),o.add(P)}[t*.35,t*.65].forEach(R=>{const b=nt(new me(.35,.2,.25),H(13158592));b.position.set(s/2+.1,R,0),o.add(b)})}if(r==="shrine"){const A=ee(new me(s+.5,.12,e+.5),c);A.position.y=t+.06,o.add(A);const E=ee(new Kt(s*.58,1,4),c);E.position.y=t+.6,E.rotation.y=Math.PI/4,o.add(E)}else{const A=nt(new me(s+.3,.22,e+.3),c);A.position.y=t+.11,o.add(A);const E=nt(new me(s+.5,.1,e+.5),H(new pe(i).offsetHSL(0,0,-.07).getHex()));if(E.position.y=t+.05,o.add(E),t>3.2&&r!=="shop"){const R=ee(new Ge(.22,.24,.5,7),H(9079434));R.position.set(s*.3,t+.45,0),o.add(R);const b=ee(new Kt(.28,.2,7),H(6974058));b.position.set(s*.3,t+.8,0),o.add(b)}}return o}function Iv(){const s=new Re,e=H(12595248),t=new Ge(.12,.14,2.8,6);[-1.1,1.1].forEach(a=>{const o=ee(t,e);o.position.set(a,1.4,0),s.add(o)});const n=ee(new me(2.8,.18,.18),e);n.position.y=2.55,s.add(n);const i=ee(new me(3,.12,.22),e);i.position.y=2.85,s.add(i);const r=ee(new me(.5,.25,.06),H(1710618));return r.position.set(0,2.35,.12),s.add(r),s}function Pv(s=gt.vending){const e=cs("vending",1.85,()=>{const t=new Re,n=s,i=new pe(n).offsetHSL(0,0,-.12).getHex(),r=new pe(n).offsetHSL(0,0,.08).getHex(),a=nt(new me(.95,.12,.75),H(i,{roughness:.9}));a.position.y=.06,t.add(a);const o=nt(new me(.9,1.65,.7),H(n,{roughness:.75}));o.position.y=.95,t.add(o);const l=nt(new me(.94,.1,.74),H(r,{roughness:.7}));l.position.y=1.82,t.add(l);const c=nt(new me(1,.06,.22),H(r,{roughness:.65}));c.position.set(0,1.9,.38),c.rotation.x=-.12,t.add(c);const h=Ad(s),u=new ne(new jt(.68,1.15),H(16777215,{map:h,emissive:3172472,emissiveIntensity:.35}));u.position.set(0,1.02,.36),t.add(u);const d=nt(new me(.76,1.22,.04),H(2764856,{roughness:.85}));d.position.set(0,1.02,.34),t.add(d);const f=nt(new me(.18,.28,.05),H(8951976,{roughness:.55,metalness:.2}));f.position.set(.34,.55,.36),t.add(f);const m=nt(new me(.1,.04,.06),H(1710618,{roughness:.95}));m.position.set(.34,.62,.39),t.add(m);const _=nt(new me(.28,.14,.2),H(1712168,{roughness:.9}));return _.position.set(0,.28,.38),t.add(_),t},{tint:s,tintStrength:.32});return Lv(e,s),e}function Lv(s,e){if(s.userData.isLoadedModel&&!s.userData.vendingDisplay){const r=Ad(e),a=new ne(new jt(.64,1),H(16777215,{map:r,emissive:3172472,emissiveIntensity:.42,transparent:!0,opacity:.94,depthWrite:!1}));a.position.set(0,.98,.4),s.add(a),s.userData.vendingDisplay=a,s.userData.vendingGlow=a}else if(!s.userData.vendingGlow){const r=new ne(new jt(.55,.9),H(9490664,{emissive:4233400,emissiveIntensity:.45,transparent:!0,opacity:.55,depthWrite:!1}));r.position.set(0,1.05,.37),s.add(r),s.userData.vendingGlow=r}const n=new pe(e),i=new ns(n,.7,6);i.position.set(0,1.45,.5),s.add(i),s.userData.vendingLight=i,s.userData.vendingColor=e}function Dv(){const s=new Re,e=ee(new Ge(.06,.08,1.2,6),H(gt.metal));e.position.y=.6,s.add(e);const t=ee(new me(.35,.3,.25),H(gt.orange));t.position.y=1.25,s.add(t);const n=ee(new Kt(.28,.2,4),H(gt.orange));return n.position.y=1.5,n.rotation.y=Math.PI/4,s.add(n),s}function Nv(){const s=new Re,e=ee(new Ge(.05,.06,2.5,6),H(gt.orange));e.position.y=1.25,s.add(e);const t=ee(new At(.45,16),H(13691112));t.position.set(0,2.6,0),t.rotation.x=-.3,s.add(t);const n=ee(new di(.45,.04,6,16),H(gt.orange));return n.position.set(0,2.6,-.02),n.rotation.x=-.3,s.add(n),s}function Dd(s,e,t=.25){const n=new T().addVectors(s,e).multiplyScalar(.5);n.y-=t;const i=new sc(s.clone(),n,e.clone()),r=new lc(i,10,.015,4,!1),a=ee(r,H(1710618),1.02);return a.raycast=()=>{},a}function Uv(){const s=document.createElement("canvas");s.width=128,s.height=64;const e=s.getContext("2d");e.fillStyle="#f5f5f0",e.fillRect(0,0,128,64),e.strokeStyle="#1a1a1a",e.lineWidth=3,e.strokeRect(2,2,124,60),e.fillStyle="#1a1a1a",e.font="bold 18px sans-serif",e.textAlign="center",e.fillText("バス停",64,26),e.font="11px sans-serif",e.fillText("BUS STOP",64,46);const t=new Dt(s);return t.colorSpace=ut,t}function kv(){const s=new Re,e=15690538,t=ee(new Ge(.05,.06,3.2,6),H(e));t.position.y=1.6,s.add(t);const n=ee(new At(.42,16),H(e));n.position.set(0,3.15,.02),s.add(n);const i=ee(new di(.42,.04,6,16),H(1710618));i.position.set(0,3.15,.01),s.add(i);const r=ee(new me(.55,.32,.04),H(16119280,{map:Uv()}));return r.position.set(0,2.55,.08),s.add(r),s}function Fv(s="right"){const e=new Re,t=ee(new Ge(.05,.06,1.8,6),H(9072736));t.position.y=.9,e.add(t);const n=ee(new me(.9,.7,.06),H(15769648));n.position.y=1.75,e.add(n);const i=new ad;s==="right"?(i.moveTo(-.22,.14),i.lineTo(.08,.14),i.lineTo(.08,.24),i.lineTo(.32,0),i.lineTo(.08,-.24),i.lineTo(.08,-.14),i.lineTo(-.22,-.14),i.closePath()):(i.moveTo(.22,.14),i.lineTo(-.08,.14),i.lineTo(-.08,.24),i.lineTo(-.32,0),i.lineTo(-.08,-.24),i.lineTo(-.08,-.14),i.lineTo(.22,-.14),i.closePath());const r=ee(new oc(i),H(1710618));return r.position.set(0,1.75,.04),e.add(r),e}function Bv(){const s=document.createElement("canvas");s.width=128,s.height=256;const e=s.getContext("2d");e.fillStyle="#3a9090",e.fillRect(0,0,128,256),e.fillStyle="#e8f4f4",e.font="bold 14px sans-serif",e.textAlign="center";const t=["町の案内","Community","お知らせ","Notice","案内図"];t.forEach((i,r)=>{e.fillText(i,64,36+r*38)}),e.strokeStyle="rgba(255,255,255,0.35)",e.lineWidth=1;for(let i=1;i<t.length;i++)e.beginPath(),e.moveTo(16,20+i*38),e.lineTo(112,20+i*38),e.stroke();const n=new Dt(s);return n.colorSpace=ut,n}function Ov(){const s=new Re,e=ee(new Ge(.06,.08,1.4,6),H(6978168));e.position.y=.7,s.add(e);const t=ee(new me(1.2,2.2,.1),H(3838096,{map:Bv()}));return t.position.y=2.5,s.add(t),s}function zv(){const s=new Re,e=ee(new Ge(.18,.18,.55,8),H(2777184));e.position.y=.275,s.add(e);const t=ee(new Ge(.21,.21,.04,8),H(1984584));return t.position.y=.57,s.add(t),s}function Hv(){const s=new Re,e=H(6969930),t=ee(new Ge(.07,.09,4.5,6),e);t.position.y=2.25,s.add(t);const n=ee(new me(1.2,.06,.06),e);n.position.y=4,s.add(n);const i=ee(new At(.22,12),H(3178688));i.position.set(0,3.2,.12),s.add(i);const r=4;return[-.55,0,.55].forEach(o=>{const l=Dd(new T(o-.35,r,0),new T(o+.35,r,0),.18);s.add(l)}),s.userData.wireAnchor=new T(0,r,0),s}function Gv(s,e){const t=new Re,n=s.clone(),i=e.clone(),r=Math.min(.45,Math.max(.2,n.distanceTo(i)*.04));return[-.12,0,.12].forEach(a=>{const o=new T().subVectors(i,n).normalize(),l=new T(-o.z,0,o.x).multiplyScalar(a),c=Dd(n.clone().add(l),i.clone().add(l),r);t.add(c)}),t.raycast=()=>{},t}function Vv(s="normal"){const e={cherry:4.8,normal:5.5,pine:6};if(s!=="pine"){const r=s==="cherry"?"tree_cherry":"tree_normal",a=Ci==null?void 0:Ci.createInstance(r,{targetHeight:e[s]??5.5,tint:s==="cherry"?15769784:null,tintStrength:s==="cherry"?.55:.28,rotationY:Math.random()*Math.PI*2});if(a)return s==="cherry"&&(a.userData.isCherry=!0),a}const t=new Re,n=nt(new Ge(.1,.14,1,6),H(6967360));n.position.y=.5,t.add(n),s==="cherry"?([[0,1.4,0,.65,15769784],[-.35,1.25,.15,.48,16300236],[.35,1.3,-.15,.5,15769792],[0,1.65,.2,.42,16761040]].forEach(([a,o,l,c,h])=>{const u=nt(new Fe(c,9,7),H(h));u.position.set(a,o,l),t.add(u)}),t.userData.isCherry=!0):s==="pine"?[.65,.48,.32].forEach((r,a)=>{const o=nt(new Kt(r,.55,6),H(3832394));o.position.y=1+a*.42,t.add(o)}):[[0,1.35,0,.55],[-.28,1.2,.2,.4],[.3,1.25,-.18,.42],[0,1.55,.1,.35]].forEach(([r,a,o,l])=>{const c=nt(new Fe(l,8,6),H(5937754+Math.floor(Math.random()*328965)));c.position.set(r,a,o),t.add(c)});const i=s==="pine"?2.3:s==="cherry"?1.9:2.1;return t.scale.setScalar(i),t}function Wv(s=0){const t=document.createElement("canvas");t.width=128,t.height=128;const n=t.getContext("2d");n.clearRect(0,0,128,128);const i=o=>{const l=Math.sin(s*127.1+o*311.7)*43758.5453;return l-Math.floor(l)},r=4+Math.floor(i(0)*3);for(let o=0;o<r;o++){const l=128*(.25+i(o+1)*.5),c=128*(.3+i(o+2)*.4),h=128*(.32+i(o+3)*.22),u=128*(.08+i(o+4)*.08),d=.55+i(o+5)*.35;n.save(),n.translate(l,c),n.rotate(i(o+6)*Math.PI),n.beginPath(),n.ellipse(0,0,h,u,0,0,Math.PI*2),n.fillStyle=`rgba(255, 255, 255, ${d})`,n.fill(),n.restore()}const a=new Dt(t);return a.colorSpace=ut,a}function Xv(s,e,t,n){const i=s*.17+e*.31+t*.09,r=Wv(i),a=new Rn(new wn({map:r,transparent:!0,depthWrite:!1,opacity:.88})),o=2.4+i%1.2,l=n*1.2;return a.scale.set(l*o,l,1),a.position.set(s,e,t),a.userData.driftSpeed=.15+i%.2,a.userData.driftPhase=i*Math.PI,a.userData.dynamic=!0,a}function jv(){const s=new Re,e=5,t=.13,n=.34,i=2.6,r=H(10132114),a=H(8024168),o=H(8684672);for(const d of[-1,1]){const f=nt(new me(.16,e*t+.55,e*n+1),a);f.position.set(d*(i*.5+.1),e*t*.48+.08,.05),s.add(f)}for(let d=0;d<e;d++){const f=cs("shrine_stairs",.32,()=>{const m=i-d*.05;return ee(new me(m,t,n),r)});f.position.set(0,t*.5+d*t,1.05-d*n),s.add(f)}const l=e*t,c=nt(new me(3.5,.3,3.1),o);c.position.set(0,l+.15,-.9),s.add(c);const h=nt(new me(3.6,.5,.22),a);h.position.set(0,l+.38,-2.25),s.add(h);const u=cs("shrine",2.4,()=>{const d=new Re,f=ee(new me(2.1,.22,1.7),o);f.position.y=.11,d.add(f);const m=Ld(1.65,1.4,1.45,15788248,3815994,"shrine");return m.position.set(0,0,-.15),d.add(m),d});return u.position.set(0,l+.3,-1.05),s.add(u),[-1.05,1.05].forEach(d=>{const f=cs("street_lamp",.55,()=>{const m=ee(new Ge(.035,.045,.5,6),H(gt.metal));return m.position.y=.25,m});f.position.set(d,l,.35),s.add(f)}),s}function Yv(s){let e=s%2147483646||1;return()=>(e=e*16807%2147483647,(e-1)/2147483646)}function Ut(s,e,t,n,i,r=0,a=1){const o=cs(e,i,()=>{if(e==="bush"){const l=new Re,c=ee(new Fe(.38,8,6),H(4885074));return c.position.y=.28,c.scale.set(1.1,.72,1.1),l.add(c),l}if(e==="rock"){const l=new Re,c=ee(new ac(.22,0),H(9078912));return c.position.y=.16,c.rotation.set(.2,r,.1),l.add(c),l}if(e==="fence_low"){const l=new Re,c=ee(new me(.85,.42,.07),H(9072736));return c.position.y=.21,l.add(c),l}return null},{scale:a});o&&(o.position.set(t,0,n),o.rotation.y=r,s.add(o))}function ia(s,e,t,n,i=1){const r=.26*i,a=ee(new Ge(.012*i,.018*i,r,5),H(3828282));a.position.set(e,r*.5+.1,t),s.add(a);const o=ee(new Fe(.055*i,7,5),H(n));o.position.set(e,.1+r+.04*i,t),s.add(o);for(let l=0;l<5;l++){const c=l/5*Math.PI*2,h=ee(new Fe(.028*i,6,4),H(n));h.position.set(e+Math.cos(c)*.05*i,.1+r+.038*i,t+Math.sin(c)*.05*i),h.scale.set(1.2,.45,1.2),s.add(h)}}function sa(s,e,t,n="soil"){const i=Ed(),r=new ne(new jt(e+.8,t+.8),H(gt.meadow,{map:i}));r.rotation.x=-Math.PI/2,r.position.y=.004,r.receiveShadow=!0,s.add(r);const a=H(8020048),o=.14,l=.07;[[0,-t/2-l/2,e+l*2,l],[0,t/2+l/2,e+l*2,l],[-e/2-l/2,0,l,t],[e/2+l/2,0,l,t]].forEach(([d,f,m,_])=>{const g=nt(new me(m,o,_),a);g.position.set(d,o*.5,f),s.add(g)});const c=n==="mulch"?Ny():Dy(),h=n==="mulch"?5914672:6967360,u=new ne(new me(e,.07,t),H(h,{map:c}));u.position.y=.11,u.receiveShadow=!0,s.add(u)}function qv(s="flower",e=1){const t=Yv(e),n=new Re,i=[15753344,15777856,16315632,14713024,16748656,15769808];if(s==="flower"){sa(n,2.6,1.9,"soil");const o=10+Math.floor(t()*4);for(let l=0;l<o;l++){const c=(t()-.5)*2.1,h=(t()-.5)*(1.9-.4);ia(n,c,h,i[Math.floor(t()*i.length)],.85+t()*.35)}Ut(n,"bush",-2.6*.38,-1.9*.32,.55,t()*Math.PI*2,.9+t()*.2),Ut(n,"bush",2.6*.36,-1.9*.28,.48,t()*Math.PI*2,.85+t()*.15),Ut(n,"rock",2.6*.3,1.9*.25,.28,t()*Math.PI,.8+t()*.4),Ut(n,"decoration",-2.6*.32,1.9*.22,.32,t()*Math.PI*2);for(let l=-1;l<=1;l++)Ut(n,"fence_low",l*.85,1.9/2+.18,.52,Math.PI,.95)}else if(s==="shrub")sa(n,2.4,2,"mulch"),[[-.55,-.35,.62],[.5,-.4,.58],[0,.15,.72],[-.15,.45,.52]].forEach(([l,c,h],u)=>{Ut(n,"bush",l,c,h,t()*Math.PI*2+u,.9+t()*.25)}),Ut(n,"rock",.65,.42,.24,t()*Math.PI,.7),Ut(n,"fence_low",-.9,2/2+.16,.5,Math.PI),Ut(n,"fence_low",.9,2/2+.16,.5,Math.PI);else if(s==="rock"){sa(n,2.2,1.8,"mulch");for(let o=0;o<4;o++){const l=(t()-.5)*1.6,c=(t()-.5)*(1.8-.5);Ut(n,"rock",l,c,.22+t()*.18,t()*Math.PI*2,.7+t()*.55)}Ut(n,"bush",-2.2*.35,1.8*.28,.42,t()*Math.PI*2),Ut(n,"bush",2.2*.32,-1.8*.2,.38,t()*Math.PI*2,.88),ia(n,-.2,.1,15790320,.75),ia(n,.25,-.15,15777856,.7)}else{sa(n,2.3,2.1,"soil");for(let o=0;o<7;o++){const l=-.8049999999999999+t()*2.3*.7,c=-2.1*.35+t()*2.1*.65;ia(n,l,c,i[Math.floor(t()*i.length)],.8+t()*.25)}Ut(n,"bush",2.3*.34,.1,.58,t()*Math.PI*2),Ut(n,"bush",-2.3*.34,-2.1*.2,.5,t()*Math.PI*2,.92),Ut(n,"decoration",0,2.1*.28,.3,t()*Math.PI*2),Ut(n,"fence_low",0,2.1/2+.16,.5,Math.PI),Ut(n,"fence_low",2.3/2+.14,.2,.48,-Math.PI/2)}return n}function Nd(s,e,t=13123648,n=3.6){const i=new Re,r=document.createElement("canvas");r.width=256,r.height=80;const a=r.getContext("2d");a.fillStyle="#fffef8",a.fillRect(4,4,248,72),a.fillStyle="#2a4a4a",a.font="bold 22px sans-serif",a.textAlign="center",a.fillText(s,128,32),a.fillStyle="#666",a.font="14px sans-serif",a.fillText(e,128,56);const o=new Dt(r),l=new Rn(new wn({map:o,transparent:!0}));l.scale.set(2,.6,1),l.position.y=n+.55,i.add(l);const c=ee(new me(2,.75,.08),H(t));return c.position.y=n,i.add(c),i}function Qs(s,e,t,n,i=2,r=15261904,a=6967360,o=3.2,l=3,c="crates",h="OPEN",u="🛍️"){return $v({targetHeight:s,labelJa:e,labelEn:t,signColor:n,signDepth:i,awningColor:n,wallColor:r,roofColor:a,w:o,d:l,goodsType:c,windowLabel:h,windowEmoji:u})}function Kv(s="OPEN",e="🛍️",t="#283038"){const n=document.createElement("canvas");n.width=128,n.height=128;const i=n.getContext("2d");i.fillStyle=t,i.fillRect(0,0,128,128),i.fillStyle="rgba(255,255,255,0.15)",i.fillRect(8,8,112,112),i.font="48px sans-serif",i.textAlign="center",i.fillText(e,64,58),i.fillStyle="#f0f0f0",i.font="bold 14px sans-serif",i.fillText(s,64,100);const r=new Dt(n);return r.colorSpace=ut,r}function $v({targetHeight:s=2.8,labelJa:e="店",labelEn:t="Shop",signColor:n=12599360,signDepth:i=2,awningColor:r=12599360,wallColor:a=15261904,roofColor:o=6967360,windowLabel:l="OPEN",windowEmoji:c="🛍️",goodsType:h="crates",w:u=3.2,d=3}={}){const f=new Re,m=s,_=d/2,g=Ld(u,d,m,a,o,"shop",{awningColor:r});f.add(g);const p=Math.min(1.4,m*.35),v=Kv(l,c),y=H(8951976,{map:v,emissive:3359829,emissiveIntensity:.45}),x=new ne(new jt(u*.55,p-.22),y);x.position.set(0,p*.5+.08,_+.1),f.add(x);const I=Nd(e,t,n,m*.82);I.position.set(0,0,_+.75),f.add(I);const A=nt(new me(u+.5,.08,1.1),H(11577496));if(A.position.set(0,.04,_+.72),f.add(A),h==="crates")[-1,1].forEach(E=>{const R=ee(new me(.55,.38,.42),H(8413248));R.position.set(E,.19,_+.92),f.add(R);const b=ee(new me(.35,.22,.28),H(15769664));b.position.set(E,.42,_+.92),f.add(b)});else if(h==="flowers")[-.85,.85].forEach(E=>{const R=ee(new Ge(.22,.2,.38,8),H(6320256));R.position.set(E,.19,_+.9),f.add(R);const b=ee(new Fe(.24,8,6),H(14712976));b.position.set(E,.44,_+.9),f.add(b)});else if(h==="bread"){const E=ee(new Ge(.28,.24,.22,8),H(8413248));E.position.set(-.9,.11,_+.9),f.add(E);const R=ee(new me(.32,.14,.16),H(15255672));R.position.set(-.9,.28,_+.9),f.add(R);const b=ee(new me(.5,.35,.4),H(8413248));b.position.set(.9,.18,_+.92),f.add(b)}return f}function Jv(){const s=new Re,e=[12599360,4227232,4235360,15769648];[-3.5,-1.2,1.2,3.5].forEach((n,i)=>{const r=ee(new me(1.6,.85,1.1),H(13680800));r.position.set(n,.42,0),s.add(r);const a=cs("awning",.45,()=>ee(new me(1.8,.06,1.3),H(e[i])),{scale:.9,tint:e[i],tintStrength:.35});a.position.set(n,.95,.25),s.add(a);const o=ee(new me(.45,.25,.35),H([15769664,15753312,8437888,15786080][i]));o.position.set(n,.92,.1),s.add(o)});const t=Nd("朝市","Morning Market",15224912,2.2);return t.position.set(0,0,2.2),s.add(t),s}function Zv(){const s=new Re,e=Qs(3,"喫茶 木漏れ","Komorebi Cafe",6967360,1.8,15788248,5914672);return s.add(e),[-.8,.8].forEach(t=>{const n=ee(new Ge(.35,.35,.06,8),H(8413248));n.position.set(t,.45,2.2),s.add(n)}),s}function Qv(){const s=new Re,e=Qs(2.8,"魚屋 水樹","Mizuki Fish",4227232,1.7,14739696,4219008);s.add(e);for(let t=0;t<3;t++){const n=ee(new me(.6,.4,.5),H(8413248));n.position.set(-1+t*1,.2,1.2),s.add(n)}return s}class eM{constructor(e,t=null){this.scene=e,this.modelLoader=t,Ev(t),this.groundMeshes=[],this.animatedClouds=[],this.lanterns=[],this.vendingMachines=[],this.waterMeshes=[],this.interactableSpawns=[],this.colliders=new Tv,this.riverCurve=null,this.sidePaths={},this.walkableCurves=[],this._butterflies=null,this._fireflies=null,this.path=this._createPath(),this.walkableCurves=[this.path]}getPathForId(e){return!e||e==="main"?this.path:this.sidePaths[e]??this.path}getWalkableCurves(){return this.walkableCurves}_addBankCollider(e,t,n,i,r=0){this.colliders.addBox(e,t,n,i,r)}_addBoxCollider(e,t,n,i,r=0){this.colliders.addBox(e,t,n,i,r)}_addCircleCollider(e,t,n){this.colliders.addCircle(e,t,n)}_addGroupCollider(e,t,n){this._addBoxCollider(e.position.x,e.position.z,t,n,e.rotation.y)}_recordSpawn(e,t,n=0){this.interactableSpawns.push({propId:e,position:t.clone(),rotationY:n})}async build(e){e==null||e("Building sky…"),this._createSky(),await vo(),e==null||e("Laying streets…"),this._placedPositions=[],this._createGround(),this._createRoad(),await vo(),e==null||e("Placing buildings…"),this._createLandmarks(),this._createShopsAndPlaces(),this._createGardens(),await vo(),e==null||e("Adding details…"),this._createProps(),this._createStreetFurniture(),this._createVegetation(),this._createEnvironmentDetails(),this._createClouds(),this._createLighting(),e==null||e("Ready")}update(e){const t=Math.min(e-(this._lastElapsed??e),.05);if(this._lastElapsed=e,this.animatedClouds.forEach(n=>{n.position.x+=Math.sin(e*n.userData.driftSpeed+n.userData.driftPhase)*.003}),this.lanterns.forEach((n,i)=>{var a;if(!((a=n==null?void 0:n.material)!=null&&a.color))return;const r=.75+Math.sin(e*2+i)*.25;n.userData.baseColor||(n.userData.baseColor=n.material.color.clone()),n.material.color.copy(n.userData.baseColor).multiplyScalar(r)}),this.vendingMachines.forEach((n,i)=>{var o;const r=.82+Math.sin(e*1.6+i*1.3)*.18;n.userData.vendingLight&&(n.userData.vendingLight.intensity=.55*r);const a=n.userData.vendingGlow;((o=a==null?void 0:a.material)==null?void 0:o.emissiveIntensity)!=null&&(a.material.emissiveIntensity=.35+r*.2)}),this.waterMeshes.forEach((n,i)=>{var o,l;if(!((o=n==null?void 0:n.material)!=null&&o.color))return;const r=.92+Math.sin(e*.8+i*2.1)*.08;n.material.color.setHex(9946589),n.material.color.multiplyScalar(r),n.material.opacity=.78+Math.sin(e*1.1+i)*.06;const a=((l=n.material.userData)==null?void 0:l.waterMap)??n.material.map;a&&(a.offset.x=e*.02,a.offset.y=e*.015+i*.1)}),this._petalMesh&&this._petalData){const n=new ht;this._petalData.forEach((i,r)=>{i.x+=(i.vx+Math.sin(e*.7+i.z)*.12)*t,i.y+=i.vy*t,i.z+=(i.vz+Math.cos(e*.5+i.x)*.08)*t,i.spin+=i.spinSpeed*t,i.y<-.5&&(i.y=i.resetY,i.x=-8+Math.random()*24,i.z=-2+Math.random()*-120),n.position.set(i.x,i.y,i.z),n.rotation.set(i.spin*.5,i.spin,i.spin*.3),n.updateMatrix(),this._petalMesh.setMatrixAt(r,n.matrix)}),this._petalMesh.instanceMatrix.needsUpdate=!0}if(this._butterflies){const n=new ht;this._butterflyData.forEach((i,r)=>{i.phase+=t*i.speed,i.x+=Math.sin(i.phase)*.4*t,i.z+=Math.cos(i.phase*.7)*.3*t,i.y=i.baseY+Math.sin(i.phase*2)*.15,n.position.set(i.x,i.y,i.z),n.rotation.y=i.phase,n.scale.setScalar(.6+Math.sin(i.phase*3)*.15),n.updateMatrix(),this._butterflies.setMatrixAt(r,n.matrix)}),this._butterflies.instanceMatrix.needsUpdate=!0}if(this._fireflies){const n=new ht;this._fireflyData.forEach((i,r)=>{i.phase+=t*i.speed,i.x=i.baseX+Math.sin(i.phase)*1.2,i.z=i.baseZ+Math.cos(i.phase*.8)*1,i.y=i.baseY+Math.sin(i.phase*1.5)*.4,n.position.set(i.x,i.y,i.z),n.scale.setScalar(.04+Math.sin(e*3+r)*.02),n.updateMatrix(),this._fireflies.setMatrixAt(r,n.matrix)}),this._fireflies.instanceMatrix.needsUpdate=!0}}_createPath(){const e=[new T(0,0,22),new T(-1,0,18),new T(0,0,14),new T(-2,0,10),new T(-3,0,6),new T(-2,0,2),new T(0,0,-2),new T(3,0,-6),new T(5,0,-10),new T(4,0,-14),new T(0,0,-18),new T(-4,0,-22),new T(-7,0,-26),new T(-5,0,-32),new T(-2,0,-36),new T(3,0,-40),new T(7,0,-44),new T(9,0,-48),new T(7,0,-52),new T(3,0,-56),new T(-1,0,-60),new T(-5,0,-64),new T(-3,0,-68),new T(1,0,-72),new T(6,0,-76),new T(11,0,-80),new T(13,0,-84),new T(11,0,-88),new T(7,0,-92),new T(3,0,-96),new T(0,0,-102),new T(-3,0,-108),new T(-6,0,-114),new T(-4,0,-120),new T(0,0,-126),new T(5,0,-130),new T(10,0,-134),new T(14,0,-128),new T(16,0,-118)];return new td(e,!1,"catmullrom",.45)}_createSky(){this.scene.fog=new Zl(gt.fog,32,88),this.scene.background=new pe(gt.sky);const e=new Fe(220,24,16),t=document.createElement("canvas");t.width=1,t.height=64;const n=t.getContext("2d"),i=n.createLinearGradient(0,0,0,64);i.addColorStop(0,"#97c5dd"),i.addColorStop(.35,"#91d3c8"),i.addColorStop(.68,"#cde8e4"),i.addColorStop(.88,"#f0dab2"),i.addColorStop(1,"#e8ddd9"),n.fillStyle=i,n.fillRect(0,0,1,64),this.skyCtx=n;const r=new Dt(t);this.skyTex=r;const a=new dt({map:r,side:Ht}),o=new ne(e,a);o.position.set(0,-10,-55),o.userData.dynamic=!0,this.scene.add(o),this._spawnGlobalPetals()}_spawnGlobalPetals(){const t=new jt(.12,.09),n=new dt({color:15573177,side:xn}),i=new bl(t,n,24);i.userData.dynamic=!0;const r=[],a=new ht;for(let o=0;o<24;o++){const l=-8+Math.random()*24,c=1.5+Math.random()*5,h=-2+Math.random()*-120;r.push({x:l,y:c,z:h,vx:(Math.random()-.5)*.3,vy:-(.25+Math.random()*.35),vz:(Math.random()-.5)*.2,spin:Math.random()*Math.PI,spinSpeed:(Math.random()-.5)*2.5,resetY:4+Math.random()*5}),a.position.set(l,c,h),a.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),a.updateMatrix(),i.setMatrixAt(o,a.matrix)}i.instanceMatrix.needsUpdate=!0,this.scene.add(i),this._petalMesh=i,this._petalData=r}_createGround(){const e=Ed(),t=new ne(new jt(130,175),H(gt.green,{map:e}));t.rotation.x=-Math.PI/2,t.position.set(2,-.06,-52),t.receiveShadow=!0,this.scene.add(t),this.groundMeshes.push(t)}_createRoad(){const a=Si(this.path,1.75,.08,H(gt.road),0,200);this.scene.add(a),this.groundMeshes.push(a);const o=H(gt.sidewalk),l=Si(this.path,.75,.09,o,-2.65,200),c=Si(this.path,.75,.09,o,2.65,200);this.scene.add(l,c),this.groundMeshes.push(l,c);const h=H(gt.curb),u=Si(this.path,.06,.1,h,-1.87,200),d=Si(this.path,.06,.1,h,1.75+.12,200);this.scene.add(u,d);const f=H(gt.roadLine),m=.03,_=Si(this.path,m,.066,f,-1.6,200),g=Si(this.path,m,.066,f,1.75-.15,200);this.scene.add(_,g);const p=this.path.getSpacedPoints(200);for(let v=0;v<p.length-1;v+=6){const y=v/(p.length-1),x=p[v],I=this.path.getTangentAt(y).normalize(),A=new T(-I.z,0,I.x),E=x.clone().add(A.clone().multiplyScalar(1.75-.35)),R=x.distanceTo(p[Math.min(v+3,p.length-1)]),b=new ne(new me(.12,.015,R*.55),f);b.position.copy(E),b.position.y=.065,b.lookAt(p[Math.min(v+3,p.length-1)].x,.065,p[Math.min(v+3,p.length-1)].z),this.scene.add(b)}for(let v=7;v<p.length;v+=28){const y=p[v],x=new ne(new Ge(.25,.25,.03,10),H(5263440));x.position.set(y.x,.07,y.z),this.scene.add(x)}}_createLandmarks(){[{id:"torii",t:.34,side:-1,offset:Bs,halfW:1.6,halfD:.45,make:()=>Iv(),face:"street",spawn:"torii"},{id:"shrine",t:.66,side:1,offset:na,halfW:2.4,halfD:2.6,spawn:"shrine",make:()=>jv(),face:"street"}].forEach(t=>{const n=t.make(),i=t.radius??Hs(n,2.2);if(!zs(n,this.path,t.t,t.side,t.offset,this._placedPositions,i,t.face??"street"))return;t.scale&&n.scale.setScalar(t.scale),t.extraRot&&(n.rotation.y+=t.extraRot),this.scene.add(n);const{halfW:a,halfD:o}=ru(n,t.halfW??i,t.halfD??i);t.radius!=null?this._addCircleCollider(n.position.x,n.position.z,t.radius):this._addBoxCollider(n.position.x,n.position.z,a,o,n.rotation.y),Os(this._placedPositions,n.position,i),t.spawn&&this._recordSpawn(t.spawn,n.position,n.rotation.y)})}_createShopsAndPlaces(){[{t:.12,side:-1,offset:Zi,spawn:"shop_bookshop",make:()=>Qs(3,"書店 文房","Bunbou Books",8413344,1.8,15789284,6967360,3.2,2.8,"crates","BOOKS","📚")},{t:.26,side:1,offset:Zi,spawn:"shop_ramen",make:()=>Qs(2.9,"麺処 山田","Yamada Ramen",12599360,1.7,16774380,9056304,3,2.8,"crates","RAMEN","🍜")},{t:.46,side:1,offset:Zi,spawn:"shop_cafe",make:()=>Zv()},{t:.52,side:-1,offset:Zi,spawn:"shop_florist",make:()=>Qs(2.7,"花屋 はな","Hana Florist",14712976,1.6,16445682,12607616,2.8,2.6,"flowers","FLOWERS","🌸")},{t:.58,side:-1,offset:Zi+.5,spawn:"shop_market",make:()=>Jv()},{t:.92,side:-1,offset:Zi+.5,spawn:"shop_fishmarket",make:()=>Qv()}].forEach(t=>{const n=t.make(),i=Hs(n,3);if(!zs(n,this.path,t.t,t.side,t.offset,this._placedPositions,i))return;this.scene.add(n);const{halfW:a,halfD:o}=ru(n,i,i*.85);this._addBoxCollider(n.position.x,n.position.z,a,o,n.rotation.y),this._recordSpawn(t.spawn,n.position,n.rotation.y),Os(this._placedPositions,n.position,i)})}_createGardens(){[{t:.11,side:-1,offset:na+.4,variant:"flower",seed:11,radius:1.9},{t:.24,side:1,offset:Bs+.5,variant:"shrub",seed:22,radius:1.75},{t:.37,side:1,offset:na,variant:"corner",seed:33,radius:1.7},{t:.49,side:-1,offset:Bs+.6,variant:"flower",seed:44,radius:1.85},{t:.63,side:-1,offset:Bs,variant:"rock",seed:55,radius:1.65},{t:.76,side:1,offset:Bs+.3,variant:"shrub",seed:66,radius:1.7},{t:.89,side:1,offset:na-.3,variant:"flower",seed:77,radius:1.8}].forEach(t=>{const n=qv(t.variant,t.seed),i=t.radius??Hs(n,1.8);zs(n,this.path,t.t,t.side,t.offset,this._placedPositions,i,"street")&&(this.scene.add(n),this._addCircleCollider(n.position.x,n.position.z,i*.82),Os(this._placedPositions,n.position,i))})}_createProps(){const e={vending:.55,mailbox:.4,mirror:.5,utility:.75,busStop:.6,dirSign:.55,infoBoard:.75,trashCan:.32},t=[{t:.06,side:-1,type:"vending",color:gt.vending},{t:.2,side:1,type:"mailbox"},{t:.3,side:-1,type:"dirSign"},{t:.4,side:1,type:"mirror"},{t:.5,side:-1,type:"trashCan"},{t:.64,side:1,type:"infoBoard"},{t:.74,side:-1,type:"utility"},{t:.8,side:-1,type:"utility"},{t:.86,side:1,type:"busStop"},{t:.94,side:-1,type:"vending",color:4227232}],n=[];if(t.forEach(({t:i,side:r,type:a,color:o})=>{let l;switch(a){case"vending":l=Pv(o);break;case"mailbox":l=Dv();break;case"mirror":l=Nv();break;case"utility":l=Hv();break;case"busStop":l=kv();break;case"dirSign":l=Fv("right");break;case"infoBoard":l=Ov();break;case"trashCan":l=zv();break;default:return}const c=Math.max(Hs(l,e[a]??.5),e[a]??.5);if(zs(l,this.path,i,r,Pd,this._placedPositions,c)){if(this._addCircleCollider(l.position.x,l.position.z,c*.85),a==="vending"&&(this.vendingMachines.push(l),this._recordSpawn("vending",l.position,l.rotation.y)),a==="utility"){const u=l.userData.wireAnchor?l.localToWorld(l.userData.wireAnchor.clone()):l.position.clone().add(new T(0,4,0));n.push(u)}this.scene.add(l),Os(this._placedPositions,l.position,c)}}),n.length>=2)for(let i=0;i<n.length-1;i++){const r=Gv(n[i],n[i+1]);this.scene.add(r)}}_createStreetFurniture(){}_createVegetation(){[{t:.08,side:1,dist:To,variant:"cherry",cherryTree:!0},{t:.42,side:-1,dist:To+.5,variant:"cherry"},{t:.72,side:1,dist:To,variant:"pine",shrineTree:!0}].forEach(({t,side:n,dist:i,variant:r,shrineTree:a,cherryTree:o})=>{const l=Vv(r),c=Hs(l,2);zs(l,this.path,t,n,i,this._placedPositions,c)&&(this.scene.add(l),this._addCircleCollider(l.position.x,l.position.z,Math.min(c,1.2)),Os(this._placedPositions,l.position,c),o?this._recordSpawn("cherry_tree",l.position):a&&this._recordSpawn("shrine_tree",l.position))})}_createEnvironmentDetails(){const t=new Fe(.04,4,4),n=new dt({color:12648320});this._fireflies=new bl(t,n,20),this._fireflyData=[];const r=this.path.getPointAt(.66);for(let a=0;a<20;a++)this._fireflyData.push({baseX:r.x+(Math.random()-.5)*6,baseZ:r.z+(Math.random()-.5)*6,baseY:.8+Math.random()*2,x:0,z:0,y:0,phase:Math.random()*Math.PI*2,speed:.4+Math.random()*.6});this._fireflies.userData.dynamic=!0,this.scene.add(this._fireflies)}_isNearPath(e,t,n){var a;let i=1/0;const r=(a=this.walkableCurves)!=null&&a.length?this.walkableCurves:[this.path];for(const o of r){if(!(o!=null&&o.getPointAt))continue;const l=o===this.path?80:40;for(let c=0;c<=l;c++){const h=o.getPointAt(c/l),u=Math.hypot(e-h.x,t-h.z);u<i&&(i=u)}}return i<n}_isNearRiver(e,t,n){if(!this.riverCurve)return!1;let i=1/0;for(let r=0;r<=40;r++){const a=this.riverCurve.getPointAt(r/40),o=Math.hypot(e-a.x,t-a.z);o<i&&(i=o)}return i<n}_createClouds(){[[-8,22,-8,2.6],[10,24,-18,2.8],[0,26,-32,3],[-12,23,-48,2.5],[14,25,-62,2.7],[4,24,-78,2.6]].forEach(([t,n,i,r])=>{const a=Xv(t,n,i,r);this.scene.add(a),this.animatedClouds.push(a)})}_createLighting(){const e=new vm(9946589,9556936,1.35);this.scene.add(e);const t=new Cl(16774376,.65);t.position.set(18,28,12),t.castShadow=!0,t.shadow.mapSize.set(2048,2048),t.shadow.camera.near=.5,t.shadow.camera.far=100,t.shadow.camera.left=-22,t.shadow.camera.right=22,t.shadow.camera.top=22,t.shadow.camera.bottom=-22,t.shadow.bias=-4e-4,t.shadow.normalBias=.02,this.scene.add(t),this.scene.add(t.target),this.sun=t;const n=new Cl(9946589,.5);n.position.set(-14,12,-8),this.scene.add(n);const i=new Tm(15261145,.45);this.scene.add(i);const r=[];[[-3,2.5,-10],[-5,2.5,-22],[4,2.5,-34]].forEach(([c,h,u])=>{const d=new ns(16763e3,.28,12);d.position.set(c,h,u),this.scene.add(d),r.push(d)});const a=new ns(9490656,.3,14);a.position.set(10,3,-95),this.scene.add(a),r.push(a);const o=new ns(16763e3,.25,14);o.position.set(6,3,-48),this.scene.add(o),r.push(o);const l=new ns(12624096,.22,14);l.position.set(-8,3,-68),this.scene.add(l),this.lights={hemi:e,sun:t,fill:n,ambient:i,street:r,shrine:l}}getInteractableSpawns(){return this.interactableSpawns}getPath(){return this.path}getGroundMeshes(){return this.groundMeshes}}function Dl(s){var t;const e=s.profile;if(s.routine=e.routine??"idle",s.patrolTs=e.patrolTs?[...e.patrolTs]:null,s.patrolIndex=0,s.patrolWait=0,s.patrolSpeed=e.routine==="jog"?3.6:2.2,s.workPhase=Math.random()*Math.PI*2,s.homeFacing=s.mesh.rotation.y,!((t=s.patrolTs)!=null&&t.length)&&(s.routine==="patrol"||s.routine==="jog"||s.routine==="work")){const n=e.startT??.5,i=s.routine==="work"?.035:s.routine==="jog"?.12:.06;s.patrolTs=[ra(n-i),ra(n),ra(n+i),ra(n)]}s.routine==="sit"?(s.mesh.position.copy(s.homePos),s.mesh.userData.isSitting=!0):s.mesh.userData.isSitting=!1,vn(s.mesh,0,0)}function tM(s,e){if(!(s.isTalking||s.interactionEngaged||s.isCompanion||s.state==="following"||s.state==="approaching"))switch(s.routine){case"patrol":case"jog":case"work":iM(s,e);break;case"sit":sM(s,e);break;default:Ud(s,e)}}function ra(s){return Math.min(.98,Math.max(.02,s))}function nM(s){return s.profile.patrolWait!=null?s.profile.patrolWait:s.routine==="jog"?1.4:s.routine==="work"?3.2:2.6}function iM(s,e){var r;if(s.mesh.userData.isSitting=!1,!((r=s.patrolTs)!=null&&r.length)){Ud(s,e);return}if(s.patrolWait>0){s.patrolWait-=e,s.idlePhase+=e*1.2,s.mesh.position.y=.02+Math.sin(s.idlePhase)*.01,vn(s.mesh,0,e);return}const t=s.patrolTs[s.patrolIndex],n=Nl(s.path,t,s.pathSide,s.pathOffset);if(n.y=s.mesh.position.y,s._moveToward(n,e,s.patrolSpeed,.75)){s.patrolIndex=(s.patrolIndex+1)%s.patrolTs.length,s.patrolWait=nM(s);const a=s.patrolTs[s.patrolIndex],o=Nl(s.path,a,s.pathSide,s.pathOffset);s.facePoint(o),vn(s.mesh,0,e)}}function sM(s,e){s.idlePhase+=e*1.1,s.mesh.position.copy(s.homePos),s.mesh.position.y+=Math.sin(s.idlePhase)*.012,s.mesh.rotation.y=s.homeFacing,s.mesh.userData.isSitting=!0,vn(s.mesh,0,e)}function Ud(s,e){s.mesh.userData.isSitting=!1,s.idlePhase+=e*1.5,s.mesh.position.y=.02+Math.sin(s.idlePhase)*.015,vn(s.mesh,0,e)}function kd(s,e,t,n,i,r){const a=e.x-s.position.x,o=e.z-s.position.z,l=Math.hypot(a,o);if(l>i){const c=Math.min(n*t,l-i);return s.position.x+=a/l*c,s.position.z+=o/l*c,s.rotation.y=Math.atan2(a,o),r==null||r(n,t),!1}return r==null||r(0,t),!0}function rM(s,e,t,n,i,r,a,o){const l=new T(-Math.sin(t)*r,0,-Math.cos(t)*r),c=e.clone().add(l);return c.y=s.position.y,kd(s,c,n,i,a,o)}const Tt=.961,aM=1.745,ie=s=>s*aM;function oM(){const s=new Re,e=H(1118481),t=H(13381680),n=new ne(new Ge(ie(.24),ie(.25),ie(.025),16),e);n.position.y=Tt+ie(.012),s.add(n);const i=new ne(new Ge(ie(.132),ie(.132),ie(.03),16),t);i.position.y=Tt+ie(.025)+ie(.015),s.add(i);const r=new ne(new Ge(ie(.13),ie(.135),ie(.22),16),e);return r.position.y=Tt+ie(.025)+ie(.11),s.add(r),s}function lM(){const s=new Re,e=H(2755162),t=H(1705536),n=H(8930440),i=new ne(new Ge(ie(.3),ie(.32),ie(.03),16),t);i.position.y=Tt+ie(.015),s.add(i);const r=new ne(new Kt(ie(.13),ie(.45),8),e);r.position.y=Tt+ie(.03)+ie(.225),s.add(r);const a=new ne(new Ge(ie(.132),ie(.132),ie(.025),16),n);return a.position.y=Tt+ie(.03)+ie(.012),s.add(a),s}function cM(){const s=new Re,e=H(15777824),t=H(13373536),n=new ne(new Ge(ie(.18),ie(.17),ie(.07),16),e);return n.position.y=Tt+ie(.035),s.add(n),[0,72,144,216,288].forEach((i,r)=>{const a=i*Math.PI/180,o=r%2===0,l=ie(o?.14:.08),c=ie(.18),h=new ne(new Kt(ie(.027),l,5),e);if(h.position.set(Math.sin(a)*c,Tt+ie(.07)+l*.5,Math.cos(a)*c),s.add(h),o){const u=new ne(new Fe(ie(.025),6,5),t);u.position.set(Math.sin(a)*c,Tt+ie(.07)+ie(.01),Math.cos(a)*c),s.add(u)}}),s}function hM(){const s=new Re,e=H(5283888),t=[16732304,15781920,5292287,16744496,14704895,8972352,16732304,15781920],n=ie(.18),i=new ne(new di(n,ie(.018),8,20),e);i.rotation.x=Math.PI/2,i.position.y=Tt+ie(.02),s.add(i);for(let r=0;r<8;r++){const a=r/8*Math.PI*2,o=new ne(new Fe(ie(.042),7,6),H(t[r]));o.position.set(Math.sin(a)*n,Tt+ie(.05),Math.cos(a)*n),s.add(o)}return s}function uM(){const s=new Re,e=H(16771136),t=new ne(new di(ie(.2),ie(.024),8,24),e);return t.rotation.x=Math.PI/2,t.position.y=Tt+ie(.28),s.add(t),s}function dM(){const s=new Re,e=H(1710634),t=H(16751052);return[-ie(.12),ie(.12)].forEach(n=>{const i=new ne(new Kt(ie(.065),ie(.15),3),e);i.position.set(n,Tt+ie(.06),0),s.add(i);const r=new ne(new Kt(ie(.038),ie(.1),3),t);r.position.set(n,Tt+ie(.06),0),s.add(r)}),s}function fM(){const s=new Re,e=H(8921634),t=new ne(new Ge(ie(.2),ie(.2),ie(.055),16),e);t.position.y=Tt+ie(.028),t.rotation.z=.3,s.add(t);const n=new ne(new Fe(ie(.023),6,5),e);return n.position.set(ie(-.07),Tt+ie(.075),ie(.07)),s.add(n),s}function pM(){const s=new Re,e=H(1118481),t=H(13377568),n=H(14540236),i=new ne(new Ge(ie(.22),ie(.23),ie(.025),16),e);i.position.y=Tt+ie(.012),s.add(i);const r=new ne(new Ge(ie(.11),ie(.14),ie(.14),16),e);r.position.y=Tt+ie(.025)+ie(.07),s.add(r);const a=new ne(new Fe(ie(.028),6,5),n);a.position.set(ie(.11),Tt+ie(.025)+ie(.08),0),s.add(a);const o=new ne(new Ge(ie(.013),ie(.005),ie(.11),5),t);return o.rotation.z=.4,o.position.set(ie(-.065),Tt+ie(.025)+ie(.145),ie(.065)),s.add(o),s}function mM(s){switch(s){case"tophat":return oM();case"witchhat":return lM();case"crown":return cM();case"flowerCrown":return hM();case"halo":return uM();case"catears":return dM();case"beret":return fM();case"piratecap":return pM();default:return null}}const gM=["_hat","_helmet"];function Eo(s,e){s.traverse(t=>{if(!t.isMesh&&!t.isSkinnedMesh)return;const n=t.name.toLowerCase();gM.some(i=>n.endsWith(i))&&(t.visible=e)})}function _M(s){const e=[];s.traverse(t=>{t.userData.isProceduralAccessory&&e.push(t)}),e.forEach(t=>{var n;return(n=t.parent)==null?void 0:n.remove(t)})}function Fd(s,e){if(!s)return;if(_M(s),!e||e==="none"){Eo(s,!1),s.userData.accessoryId="none";return}if(e==="class_hat"){Eo(s,!0),s.userData.accessoryId="class_hat";return}Eo(s,!1);const t=mM(e);if(!t)return;let n=null;s.traverse(i=>{!n&&i.isBone&&i.name==="head"&&(n=i)}),n&&(t.userData.isProceduralAccessory=!0,t.traverse(i=>{i.userData.dynamic=!0}),n.add(t),s.userData.accessoryId=e)}const xM=2.75,yM=1.55,vM=12;function mc(s=""){return[...s].reduce((e,t)=>e+t.charCodeAt(0),0)}function MM(s,e=0){return s.pathSide!=null?s.pathSide:mc(s.id)%2===0?-1:1}function bM(s){if(s.pathOffset!=null)return s.pathOffset;const e=s.routine==="jog"?yM:xM,t=mc(s.id)%5*.1;return e+t}function Nl(s,e,t,n){const i=s.getPointAt(e),r=s.getTangentAt(e).normalize(),a=new T(-r.z,0,r.x).multiplyScalar(t);return i.add(a.multiplyScalar(n)),i}let tn=null;function SM(s){tn=s}class wM{constructor(e){this.keys={},this.move={x:0,z:0},this.cameraAngle=0,this.cameraPitch=.38,this.cameraDistance=4.5,this.isDragging=!1,this.lastPointer={x:0,y:0},this.justPressed=new Set,this.interactRequested=!1,this.dialogueOpen=!1,this.outfitOpen=!1,this.tap=null,this.pointerStart=null,this.touchStart=null,window.addEventListener("keydown",t=>{this.keys[t.code]||this.justPressed.add(t.code),this.keys[t.code]=!0,["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(t.code)&&t.preventDefault()}),window.addEventListener("keyup",t=>{this.keys[t.code]=!1}),e.addEventListener("pointerdown",t=>{this.isDragging=!0,this.lastPointer={x:t.clientX,y:t.clientY},this.pointerStart={x:t.clientX,y:t.clientY,id:t.pointerId}}),window.addEventListener("pointerup",t=>{var n;if(((n=this.pointerStart)==null?void 0:n.id)===t.pointerId){const i=t.clientX-this.pointerStart.x,r=t.clientY-this.pointerStart.y;Math.hypot(i,r)<12&&(this.tap={x:t.clientX,y:t.clientY}),this.pointerStart=null}this.isDragging=!1}),window.addEventListener("pointermove",t=>{if(!this.isDragging)return;const n=t.clientX-this.lastPointer.x,i=t.clientY-this.lastPointer.y;this.cameraAngle-=n*.005,this.cameraPitch=kt.clamp(this.cameraPitch+i*.003,.3,.55),this.lastPointer={x:t.clientX,y:t.clientY}}),e.addEventListener("wheel",t=>{this.cameraDistance=kt.clamp(this.cameraDistance+t.deltaY*.01,3.5,10)},{passive:!0}),this._setupTouch(e)}_setupTouch(e){const t={active:!1,origin:{x:0,y:0},current:{x:0,y:0}};e.addEventListener("touchstart",n=>{if(n.touches.length===1){const i=n.touches[0];this.touchStart={x:i.clientX,y:i.clientY},i.clientX<window.innerWidth*.4?(t.active=!0,t.origin={x:i.clientX,y:i.clientY},t.current={x:i.clientX,y:i.clientY}):(this.isDragging=!0,this.lastPointer={x:i.clientX,y:i.clientY})}},{passive:!0}),e.addEventListener("touchmove",n=>{if(t.active&&n.touches.length>=1){const i=n.touches[0];i.clientX<window.innerWidth*.5&&(t.current={x:i.clientX,y:i.clientY})}if(this.isDragging&&n.touches.length>=1){const i=n.touches[n.touches.length-1],r=i.clientX-this.lastPointer.x,a=i.clientY-this.lastPointer.y;this.cameraAngle-=r*.005,this.cameraPitch=kt.clamp(this.cameraPitch+a*.003,.3,.55),this.lastPointer={x:i.clientX,y:i.clientY}}},{passive:!0}),e.addEventListener("touchend",n=>{const i=n.changedTouches[0];if(i&&this.touchStart){const r=i.clientX-this.touchStart.x,a=i.clientY-this.touchStart.y;Math.hypot(r,a)<14&&(this.tap={x:i.clientX,y:i.clientY})}this.touchStart=null,t.active=!1,this.isDragging=!1}),this.joystick=t}update(){var i;let e=0,t=0;if((this.keys.KeyW||this.keys.ArrowUp)&&(t-=1),(this.keys.KeyS||this.keys.ArrowDown)&&(t+=1),(this.keys.KeyA||this.keys.ArrowLeft)&&(e-=1),(this.keys.KeyD||this.keys.ArrowRight)&&(e+=1),(i=this.joystick)!=null&&i.active){const r=this.joystick.current.x-this.joystick.origin.x,a=this.joystick.current.y-this.joystick.origin.y,o=Math.hypot(r,a);o>8&&(e=r/o,t=a/o)}const n=Math.hypot(e,t);n>0&&(e/=n,t/=n),this.move={x:e,z:t},this.isRunning=this.keys.ShiftLeft||this.keys.ShiftRight}requestInteract(){this.interactRequested=!0}consumeInteractRequest(){return this.interactRequested?(this.interactRequested=!1,!0):!1}consumeKey(e){return this.justPressed.has(e)?(this.justPressed.delete(e),!0):!1}consumeTap(){const e=this.tap;return this.tap=null,e}endFrame(){this.justPressed.clear()}}function au(s=.38){const e=new ne(new At(s,16),new dt({color:1710616,transparent:!0,opacity:.28,depthWrite:!1}));return e.rotation.x=-Math.PI/2,e.position.y=.02,e.userData.isBlobShadow=!0,e}function Ul(s={}){const e=s.modelKey??"character_female_a",t=tn==null?void 0:tn.createCharacterInstance(e,{tint:s.tint??null,tintStrength:s.tintStrength??.22});if(t){if(s.nameTag){const g=ou(s.nameTag,s.nameTagJa);g.position.y=1.79,t.add(g)}return t.add(au()),t}const n=new Re,i=s.shirtColor??gt.shirt,r=s.backpackColor??gt.backpack,a=s.hairColor??gt.hair,o=ee(new Ge(.2,.24,.72,8),H(i));o.position.y=1.05,n.add(o);const l=ee(new Ge(.26,.3,.28,8),H(gt.pants));l.position.y=.58,n.add(l);const c=ee(new Fe(.17,10,8),H(gt.skin));c.position.y=1.58,n.add(c);const h=ee(new Fe(.19,10,8,0,Math.PI*2,0,Math.PI*.55),H(a));h.position.y=1.64,h.scale.set(1,.82,1),n.add(h);const u=ee(new me(.3,.38,.14),H(r));u.position.set(0,1.12,-.2),n.add(u);const d=new Ge(.065,.075,.52,6),f=[];[-.11,.11].forEach(g=>{const p=new Re;p.position.set(g,.28,0);const v=ee(d,H(gt.pants));p.add(v);const y=ee(new me(.11,.06,.2),H(15790320));y.position.set(0,-.22,.04),p.add(y),n.add(p),f.push(p)});const m=new Ge(.044,.048,.42,6),_=[];return[-.26,.26].forEach(g=>{const p=new Re;p.position.set(g,1.18,0),p.rotation.z=g>0?-.15:.15;const v=ee(m,H(i));p.add(v);const y=ee(new Fe(.048,6,4),H(gt.skin));y.position.y=-.24,p.add(y),n.add(p),_.push(p)}),n.userData.face=TM(n),n.userData.legs=f,n.userData.arms=_,n.userData.walkPhase=0,n.userData.sitBlend=0,s.nameTag&&n.add(ou(s.nameTag,s.nameTagJa)),n.add(au()),n.scale.setScalar(1.72/1.65),n}function TM(s){const e=new dt({color:16777215}),t=new dt({color:1718906}),n=new dt({color:1118498}),i=new dt({color:16777215}),r=H(13668496),a=new dt({color:13670520}),o=new ne(new At(.032,10),e),l=new ne(new At(.032,10),e);o.position.set(-.065,1.58,.195),l.position.set(.065,1.58,.195),s.add(o,l);const c=new ne(new At(.022,10),t),h=new ne(new At(.022,10),t);c.position.set(-.065,1.58,.196),h.position.set(.065,1.58,.196),s.add(c,h);const u=new ne(new At(.014,8),n),d=new ne(new At(.014,8),n);u.position.set(-.065,1.58,.197),d.position.set(.065,1.58,.197),s.add(u,d);const f=new ne(new At(.006,6),i),m=new ne(new At(.006,6),i);f.position.set(-.056,1.59,.198),m.position.set(.074,1.59,.198),s.add(f,m);const _=new ne(new Fe(.013,6,5),a);_.scale.set(1.2,.75,.6),_.position.set(0,1.51,.205),s.add(_);const g=new ne(new me(.055,.013,.015),r);g.position.set(0,1.475,.2),s.add(g);const p=new dt({color:15769768,transparent:!0,opacity:.65}),v=new ne(new At(.04,10),p);v.position.set(-.115,1.515,.175),v.rotation.y=.28,v.visible=!1,s.add(v);const y=new ne(new At(.04,10),p);return y.position.set(.115,1.515,.175),y.rotation.y=-.28,y.visible=!1,s.add(y),{leftEye:u,rightEye:d,mouth:g,blushL:v,blushR:y,baseMouthY:1.475,baseEyeY:1.58,_leftSclera:o,_rightSclera:l,_leftIris:c,_rightIris:h}}function Hn(s,e){var _;if((_=s.userData)!=null&&_.isRiggedCharacter){e==="happy"?tn==null||tn.playCharacterEmote(s,"emote-yes"):(e==="shy"||e==="thinking")&&(tn==null||tn.playCharacterEmote(s,"emote-no"));return}const t=s.userData.face;if(!t)return;const{leftEye:n,rightEye:i,mouth:r,blushL:a,blushR:o,baseMouthY:l,baseEyeY:c,_leftSclera:h,_rightSclera:u,_leftIris:d,_rightIris:f}=t;for(const g of[n,i,h,u,d,f])g&&g.scale.set(1,1,1);n.position.set(-.065,c,.197),i.position.set(.065,c,.197),h&&h.position.set(-.065,c,.195),u&&u.position.set(.065,c,.195),d&&d.position.set(-.065,c,.196),f&&f.position.set(.065,c,.196),r.scale.set(1,1,1),r.position.set(0,l,.2),a.visible=!1,o.visible=!1;const m=(g,p)=>{for(const v of[n,i,h,u,d,f])v&&v.scale.set(g,p,1)};switch(e){case"happy":m(1,.38),r.scale.set(1.5,2.4,1);break;case"surprised":m(1.3,1.3),r.scale.set(.75,2.8,1),r.position.y=l-.012;break;case"thinking":n.position.set(-.04,c+.02,.197),i.position.set(.08,c+.02,.197),d&&d.position.set(-.04,c+.02,.196),f&&f.position.set(.08,c+.02,.196),r.scale.set(.75,.75,1);break;case"shy":m(1,.65),r.scale.set(.55,1,1),a.visible=!0,o.visible=!0;break}}function ou(s,e){const t=document.createElement("canvas");t.width=256,t.height=64;const n=t.getContext("2d"),i=14;n.fillStyle="rgba(18,26,34,0.82)",n.strokeStyle="rgba(120,200,200,0.7)",n.lineWidth=2.5,n.beginPath(),n.moveTo(i+6,6),n.lineTo(250-i,6),n.quadraticCurveTo(250,6,250,6+i),n.lineTo(250,58-i),n.quadraticCurveTo(250,58,250-i,58),n.lineTo(i+6,58),n.quadraticCurveTo(6,58,6,58-i),n.lineTo(6,6+i),n.quadraticCurveTo(6,6,i+6,6),n.closePath(),n.fill(),n.stroke(),n.fillStyle="#e8f4f4",n.font="bold 18px sans-serif",n.textAlign="center",n.fillText(e||s,128,28),n.fillStyle="#90b8b8",n.font="13px sans-serif",n.fillText(s||"",128,48);const r=new Dt(t),a=new wn({map:r,transparent:!0}),o=new Rn(a);o.position.y=1.79,o.scale.set(1.2,.32,1);const l=new wn({transparent:!0,opacity:0,depthWrite:!1}),c=new Rn(l);c.position.y=1.79,c.scale.set(1.8,.65,1),c.userData.isNameTagHit=!0;const h=new Re;return h.add(o),h.add(c),h.userData.isNameTag=!0,h}function vn(s,e,t){var a,o,l,c;const n=s.userData;if(n.isRiggedCharacter){tn==null||tn.updateCharacterAnimation(s,e,t);return}const i=n.isSitting?1:0;if(n.sitBlend=kt.lerp(n.sitBlend??0,i,.1),EM(s,n.sitBlend),n.isSitting)return;if(e<.1){(a=n.legs)==null||a.forEach(h=>{h.rotation.x=kt.lerp(h.rotation.x,0,.12)}),(o=n.arms)==null||o.forEach(h=>{h.rotation.x=kt.lerp(h.rotation.x,0,.12)});return}n.walkPhase+=t*e*7.5;const r=Math.min(e/3,1.5);(l=n.legs)==null||l.forEach((h,u)=>{h.rotation.x=Math.sin(n.walkPhase+u*Math.PI)*.42*r}),(c=n.arms)==null||c.forEach((h,u)=>{h.rotation.x=Math.sin(n.walkPhase+u*Math.PI+Math.PI)*.28*r})}function EM(s,e){var i,r;if(e<.001)return;const n=s.children.find(a=>{var o;return((o=a.geometry)==null?void 0:o.type)==="CylinderGeometry"&&a.position.y>.7});n&&(n.position.y=kt.lerp(.85,.62,e)),(i=s.userData.legs)==null||i.forEach((a,o)=>{const l=o===0?-.9:.9;a.rotation.x=kt.lerp(0,l,e),a.position.z=kt.lerp(0,.18,e)}),(r=s.userData.arms)==null||r.forEach(a=>{a.rotation.x=kt.lerp(0,.6,e)})}const lu=12,aa={minX:-75,maxX:75,minZ:-145,maxZ:28};class AM{constructor(e,t){this.scene=e,this.path=t,this.outfit={modelKey:"character_female_a",tint:null,scale:1},this.mesh=Ul({modelKey:this.outfit.modelKey}),this.mesh.position.copy(t.getPointAt(.05)),e.add(this.mesh),this.velocity=new T,this.facing=0,this.walkSpeed=3.2,this.runSpeed=6.5,this.baseRunSpeed=6.5,this.speedBoostTimer=0,this.pathT=.05,this.raycaster=new fc,this.verticalVelocity=0,this.isGrounded=!0,this.colliderWorld=null,this.walkableCurves=null}applySpeedBoost(e,t){this.runSpeed=this.baseRunSpeed+e,this.speedBoostTimer=t}setOutfit({modelKey:e,tint:t,tintStrength:n,scale:i=1}){const r=this.mesh.position.clone(),a=this.mesh.rotation.y,o=this.mesh.userData.isJumping,l=this.mesh.userData.accessoryId??"none";this.scene.remove(this.mesh),this.mesh=Ul({modelKey:e??this.outfit.modelKey,tint:t!==void 0?t:this.outfit.tint,tintStrength:n??this.outfit.tintStrength??.22}),i!==1&&this.mesh.scale.setScalar(i),this.mesh.position.copy(r),this.mesh.rotation.y=a,this.mesh.userData.isJumping=o,this.mesh.traverse(c=>{c.userData.dynamic=!0}),this.scene.add(this.mesh),l&&l!=="none"&&Fd(this.mesh,l),this.outfit={modelKey:e??this.outfit.modelKey,tint:t!==void 0?t:this.outfit.tint,tintStrength:n??this.outfit.tintStrength??.22,scale:i}}update(e,t,n){var a,o;if(this.speedBoostTimer>0&&(this.speedBoostTimer-=t,this.speedBoostTimer<=0&&(this.runSpeed=this.baseRunSpeed)),e.dialogueOpen||e.outfitOpen)this.velocity.set(0,0,0);else{e.consumeKey("Space")&&this.isGrounded&&(this.verticalVelocity=5.8,this.isGrounded=!1,this.mesh.userData.isJumping=!0);const l=e.isRunning?this.runSpeed:this.walkSpeed,c=new T(Math.sin(e.cameraAngle),0,Math.cos(e.cameraAngle)),h=new T(Math.cos(e.cameraAngle),0,-Math.sin(e.cameraAngle)),u=new T().addScaledVector(h,e.move.x).addScaledVector(c,e.move.z);u.lengthSq()>.001?(u.normalize(),this.velocity.copy(u.multiplyScalar(l)),this.facing=Math.atan2(u.x,u.z)):this.velocity.multiplyScalar(.85)}this.mesh.position.x+=this.velocity.x*t,this.mesh.position.z+=this.velocity.z*t,this.colliderWorld&&this.colliderWorld.resolve(this.mesh.position,.45),this._clampToWalkableArea();const i=this._sampleGround(this.mesh.position,n);!this.isGrounded||this.verticalVelocity>0?(this.verticalVelocity-=16*t,this.mesh.position.y+=this.verticalVelocity*t,this.mesh.position.y<=i&&(this.mesh.position.y=i,this.verticalVelocity=0,this.isGrounded=!0,this.mesh.userData.isJumping=!1)):this.mesh.position.y=i,this.mesh.rotation.y=kt.lerp(this.mesh.rotation.y,this.facing,.15);const r=this.velocity.length();vn(this.mesh,r,t),this.pathT=((o=(a=this.path).getClosestPointT)==null?void 0:o.call(a,this.mesh.position))??0}_clampToWalkableArea(){var a;const e=this.mesh.position,t=((a=this.walkableCurves)==null?void 0:a.length)>0?this.walkableCurves:[this.path];let n=1/0,i=null,r=0;for(const o of t)if(o!=null&&o.getPointAt)for(let l=0;l<=80;l++){const c=l/80,h=o.getPointAt(c),u=Math.hypot(e.x-h.x,e.z-h.z);u<n&&(n=u,i=h,r=c)}if(i&&(this.pathT=r,n>lu)){const o=lu/n;e.x=i.x+(e.x-i.x)*o,e.z=i.z+(e.z-i.z)*o}e.x=kt.clamp(e.x,aa.minX,aa.maxX),e.z=kt.clamp(e.z,aa.minZ,aa.maxZ)}_sampleGround(e,t){this.raycaster.set(new T(e.x,20,e.z),new T(0,-1,0));const n=this.raycaster.intersectObjects(t,!1);return n.length>0?n[0].point.y:0}get position(){return this.mesh.position}}function CM(s,e="speech"){const t=(s??"").toUpperCase(),n=e==="ellipsis",i=n?22:13,r=220,a=n?28:18,o=14,l=10,c=document.createElement("canvas").getContext("2d");c.font=`bold ${i}px "Noto Sans JP", sans-serif`;const h=[];if(n)h.push("...");else{const g=t.split(/\s+/);let p="";for(const v of g){const y=p?`${p} ${v}`:v;c.measureText(y).width>r&&p?(h.push(p),p=v):p=y}p&&h.push(p),h.length===0&&h.push("")}const u=Math.max(80,...h.map(g=>c.measureText(g).width+o*2)),d=h.length*a+l*2+8,f=document.createElement("canvas");f.width=Math.ceil(u),f.height=Math.ceil(d);const m=f.getContext("2d"),_=10;if(m.fillStyle="#ffffff",m.strokeStyle="#1a1a1a",m.lineWidth=3,m.beginPath(),m.moveTo(_,0),m.lineTo(u-_,0),m.quadraticCurveTo(u,0,u,_),m.lineTo(u,d-_-8),m.quadraticCurveTo(u,d-8,u-_,d-8),m.lineTo(u*.55,d-8),m.lineTo(u*.5,d),m.lineTo(u*.45,d-8),m.lineTo(_,d-8),m.quadraticCurveTo(0,d-8,0,d-_-8),m.lineTo(0,_),m.quadraticCurveTo(0,0,_,0),m.closePath(),m.fill(),m.stroke(),n){m.fillStyle="#50a850";for(let g=0;g<3;g++)m.beginPath(),m.arc(u/2-14+g*14,d/2-2,4,0,Math.PI*2),m.fill()}else m.fillStyle="#1a1a1a",m.font=`bold ${i}px "Noto Sans JP", sans-serif`,m.textAlign="center",h.forEach((g,p)=>{m.fillText(g,u/2,l+a*(p+.75))});return{canvas:f,w:u,h:d}}function RM(){const s=new Rn(new wn({transparent:!0,depthTest:!0}));return s.position.y=2,s.visible=!1,s.userData.mode="speech",s.userData.setText=(e,t="speech")=>{if(s.userData.mode=t,!e&&t!=="ellipsis"){s.visible=!1;return}const{canvas:n,w:i,h:r}=CM(e,t);s.material.map&&s.material.map.dispose(),s.material.map=new Dt(n),s.material.map.colorSpace=ut,s.material.needsUpdate=!0;const a=i/r,o=t==="ellipsis"?.38:Math.min(.95,.22+IM(e)*.12);s.scale.set(o*a,o,1),s.visible=!0},s.userData.hide=()=>{s.visible=!1},s}function IM(s){return Math.max(1,Math.ceil(((s==null?void 0:s.length)??0)/28))}function PM(){const s=document.createElement("canvas");s.width=32,s.height=24;const e=s.getContext("2d");e.fillStyle="#ffffff",e.strokeStyle="#1a1a1a",e.lineWidth=2.5,e.beginPath(),e.moveTo(16,20),e.lineTo(4,6),e.lineTo(28,6),e.closePath(),e.fill(),e.stroke();const t=new Dt(s),n=new Rn(new wn({map:t,transparent:!0}));return n.position.y=1.65,n.scale.set(.28,.22,1),n.visible=!1,n}function LM(){const s=document.createElement("canvas");s.width=64,s.height=64;const e=s.getContext("2d");e.fillStyle="#f0c040",e.beginPath(),e.arc(32,36,22,0,Math.PI*2),e.fill(),e.strokeStyle="#1a1a1a",e.lineWidth=3,e.stroke(),e.fillStyle="#1a1a1a",e.font="bold 28px sans-serif",e.textAlign="center",e.fillText("!",32,44);const t=new Dt(s),n=new Rn(new wn({map:t,transparent:!0}));return n.position.y=1.65,n.scale.set(.45,.45,1),n.visible=!1,n}function DM(){const s=document.createElement("canvas");s.width=64,s.height=64;const e=s.getContext("2d");e.fillStyle="rgba(18,40,40,0.85)",e.beginPath(),e.arc(32,36,22,0,Math.PI*2),e.fill(),e.strokeStyle="#5ababa",e.lineWidth=3,e.stroke(),e.font="28px sans-serif",e.textAlign="center",e.fillText("👋",32,44);const t=new Dt(s),n=new Rn(new wn({map:t,transparent:!0}));return n.position.y=1.65,n.scale.set(.5,.5,1),n.visible=!1,n}class NM{constructor(e,t,n){this.type="npc",this.path=t,this.profile=n,this.t=n.startT,this.isTalking=!1,this.interactionEngaged=!1,this.playerNearby=!1,this.talkCount=0,this.friendship=0,this.ignoreUntil=0,this.idlePhase=Math.random()*Math.PI*2,this.state="idle",this.isCompanion=!1,this.homePos=new T,this.pathSide=MM(n),this.pathOffset=bM(n),this.walkSpeed=2.8,this.followSpeed=3.4,this.mesh=Ul({modelKey:n.characterModel??"character_male_a",shirtColor:n.shirtColor,backpackColor:n.backpackColor,hairColor:n.hairColor,nameTag:n.name,nameTagJa:n.nameJa}),this.alertBubble=LM(),this.waveBubble=DM(),this.speechBubble=RM(),this.interactPrompt=PM(),this.mesh.add(this.alertBubble),this.mesh.add(this.waveBubble),this.mesh.add(this.speechBubble),this.mesh.add(this.interactPrompt),e.add(this.mesh),Hn(this.mesh,n.defaultExpression),this._placeOnPath(),this.homePos.copy(this.mesh.position),this.homeFacing=this.mesh.rotation.y,Dl(this),this.nameTag=this.mesh.children.find(i=>{var r;return(r=i.userData)==null?void 0:r.isNameTag})??null,this.nameTag&&(this.nameTag.userData.interactable=this,this.nameTag.userData.interactNpc=this,this.nameTag.children.forEach(i=>{i.userData.interactable=this,i.userData.interactNpc=this})),this.mesh.userData.interactable=this}getHitTargets(){const e=[];return this.nameTag&&e.push(this.nameTag),e}canInteract(e){return this.distanceTo(e)<9}interact(e){var t;this.clearIgnore(),this.stopApproaching(),(t=e.dialogue)==null||t.showApproach(this,{initiated:!1})}_placeOnPath(){const e=Nl(this.path,this.t,this.pathSide,this.pathOffset);this.mesh.position.copy(e),this.mesh.position.y=.02;const t=this.path.getTangentAt(this.t);this.mesh.rotation.y=Math.atan2(t.x,t.z)}distanceTo(e){const t=this.mesh.position.x-e.x,n=this.mesh.position.z-e.z;return Math.hypot(t,n)}isIgnored(){return Date.now()<this.ignoreUntil}ignoreFor(e){this.ignoreUntil=Date.now()+e*1e3,this.alertBubble.visible=!1,this.stopApproaching()}clearIgnore(){this.ignoreUntil=0}hasMetBefore(){return this.talkCount>0}markMet(){this.talkCount+=1}addFriendship(){this.friendship+=1}setExpression(e){Hn(this.mesh,e)}showSpeechText(e){this.speechBubble.userData.setText(e,"speech"),this.interactPrompt.visible=!1}showEllipsisBubble(){this.speechBubble.userData.setText("","ellipsis")}hideSpeechBubble(){this.speechBubble.userData.hide()}showInteractPrompt(){!this.isTalking&&!this.isIgnored()&&(this.interactPrompt.visible=!0)}hideInteractPrompt(){this.interactPrompt.visible=!1}onApproach(e=!1){this.alertBubble.visible=!e,this.waveBubble.visible=e,this.hideInteractPrompt(),e||this.showEllipsisBubble(),Hn(this.mesh,"happy")}clearApproachBubbles(){this.alertBubble.visible=!1,this.waveBubble.visible=!1,this.isTalking||this.hideSpeechBubble()}startApproaching(){this.state==="following"||this.isCompanion||(this.state="approaching",this.waveBubble.visible=!0,Hn(this.mesh,"happy"))}stopApproaching(){this.state==="approaching"&&(this.state="idle"),this.waveBubble.visible=!1}startFollowing(){this.state="following",this.isCompanion=!0,this.clearApproachBubbles(),Hn(this.mesh,"happy")}stopFollowing(e=!1){this.state="idle",this.isCompanion=!1,this.clearApproachBubbles(),Hn(this.mesh,this.profile.defaultExpression),e&&(this.mesh.position.copy(this.homePos),Dl(this))}setPlayerNearby(e,t){this.playerNearby=e&&!this.isCompanion,!this.isTalking&&!this.interactionEngaged&&!this.isCompanion&&this.state!=="approaching"&&(this.alertBubble.visible=!1,e&&!this.isIgnored()?(this.showInteractPrompt(),(this.profile.routine==="sit"||this.mesh.userData.isSitting)&&this.showEllipsisBubble()):(this.hideInteractPrompt(),this.isTalking||this.hideSpeechBubble()))}startConversation(){this.isTalking=!0,this.clearApproachBubbles(),this.hideInteractPrompt(),this.state==="approaching"&&(this.state="idle")}endConversation(){this.isTalking=!1,this.interactionEngaged=!1,this.hideSpeechBubble(),this.isCompanion||Hn(this.mesh,this.profile.defaultExpression)}facePoint(e,t=!1,n=0){const i=e.x-this.mesh.position.x,r=e.z-this.mesh.position.z;if(Math.hypot(i,r)>.01){const a=Math.atan2(i,r);t&&n>0?this.mesh.rotation.y=kt.lerp(this.mesh.rotation.y,a,Math.min(1,n*10)):this.mesh.rotation.y=a}}_moveToward(e,t,n,i=1.4){return kd(this.mesh,e,t,n,i,(r,a)=>vn(this.mesh,r,a))}update(e,t=null,n=0){if(this.isTalking){vn(this.mesh,0,e),t&&this.facePoint(t,!0,e);return}if(this.state==="following"&&t){rM(this.mesh,t,n,e,this.followSpeed,1.4,1.2,(i,r)=>vn(this.mesh,i,r)),this.mesh.position.y=.02+Math.sin(this.idlePhase)*.008,this.idlePhase+=e*2;return}if(this.state==="approaching"&&t){const i=mc(this.profile.id)%8/8*Math.PI*2,r=new T(t.x+Math.sin(i)*2,this.mesh.position.y,t.z+Math.cos(i)*2),a=this._moveToward(r,e,this.walkSpeed,.55);this.waveBubble.visible=!0,a&&Hn(this.mesh,"happy");return}if(this.interactionEngaged&&t){vn(this.mesh,0,e),this.facePoint(t,!0,e);return}if(t&&!this.isCompanion&&this.state!=="following"&&this.state!=="approaching"&&this.distanceTo(t)<vM){this.facePoint(t,!0,e),this.idlePhase+=e*1.5,this.mesh.position.y=.02+Math.sin(this.idlePhase)*.015,vn(this.mesh,0,e);return}tM(this,e)}}const UM=[{id:"yuki",name:"Yuki Tanaka",nameJa:"田中 雪",characterModel:"character_female_b",personality:"Shy bookworm",tagline:"Always found reading near the vending machines.",approachInvite:"Um... excuse me. I noticed you walking alone. Would you... walk with me a little? I get nervous by myself.",walkAccept:"Really? Okay... I'll stay close. Just tap Chat anytime you want to talk.",partWayLine:"Oh... okay. I'll find a quiet bench. Thank you for walking with me.",emoji:"📖",shirtColor:15788280,backpackColor:8413376,hairColor:2760752,startT:.07,pathSide:-1,defaultExpression:"shy",routine:"idle",social:{befriend:{expression:"shy",text:"Friends...? I'd like that. Maybe we could swap book recommendations sometime."},argue:{expression:"surprised",text:"Oh... I didn't mean to upset you. Not everyone loves quiet poetry, I suppose."},flirt:{expression:"shy",text:"W-what?! My face is burning. You're... very bold. I don't know what to say."}},firstMeet:{greeting:{expression:"shy",text:"Oh—! S-sorry, I was lost in a poem. I didn't notice you there at all."},choices:[{label:'"What are you reading?"',response:{expression:"happy",text:'A book of haiku about quiet streets. This one goes: "Vending machine glow / humming in the afternoon / nobody hurries."'}},{label:'"This town feels peaceful."',response:{expression:"thinking",text:"It is... like the world forgot to be loud here. I come every day so I don't forget that feeling."},reward:{type:"journal",title:"Yuki's Haiku",body:'"Vending machine glow / humming in the afternoon / nobody hurries."'}},{label:'"Want to walk together?"',response:{expression:"shy",text:"I'd love that... when you're ready, tap Walk together. I know a quiet spot by the garden."},reward:{type:"friendship"}},{label:'"I should let you read."',response:{expression:"shy",text:"No, it's okay... talking is nice too. Maybe we'll see each other again."},end:!0}]},revisit:{greeting:{expression:"happy",text:"You again. I was just thinking about our last conversation... I mean—not in a weird way!"},choices:[{label:'"Got any new poems?"',response:{expression:"thinking",text:'I wrote one about the shrine steps: "Stone worn smooth by time / even footsteps whisper here / cherry petals fall."'},reward:{type:"journal",title:"Shrine Steps Poem",body:'"Stone worn smooth by time / even footsteps whisper here / cherry petals fall."'}},{label:'"Want to explore together?"',response:{expression:"shy",text:"I... I'd like that. Tap Walk together whenever you want me beside you—don't go too fast, okay?"},reward:{type:"friendship"}},{label:'"See you, Yuki."',response:{expression:"happy",text:"See you... I'll save a poem for you."},end:!0}]},companionTalk:{greeting:{expression:"happy",text:"Still here... I'm glad. The street feels less scary with someone beside me."},choices:[{label:`"Let's keep exploring."`,response:{expression:"shy",text:"Okay... lead the way. I'll stay right behind you."},end:!0},{label:'"I need to walk alone for a bit."',response:{expression:"shy",text:"I understand. I'll go back to my book. Maybe we'll meet again on the street."},reward:{type:"dismissCompanion"},end:!0}]}},{id:"ren",name:"Ren Okada",nameJa:"岡田 蓮",characterModel:"character_male_a",personality:"Energetic runner",tagline:"Training on the street every single day.",approachInvite:"Hey, you! Yeah you! Walk with me—I'll show you the best curve on the whole street!",walkAccept:"Alright, let's go! Try to keep up... kidding. I'll match your pace.",partWayLine:"No worries! Catch you on the next lap—I'll be stretching by the torii.",emoji:"🏃",shirtColor:15224912,backpackColor:15777856,hairColor:1710618,startT:.2,defaultExpression:"happy",routine:"jog",patrolTs:[.16,.24,.2],social:{befriend:{expression:"happy",text:"Friend request accepted! You're officially on Team Ren now. Let's hit the street!"},argue:{expression:"surprised",text:"Whoa, feisty! I respect someone who pushes back. Rematch on the torii curve?"},flirt:{expression:"happy",text:"Ha! Smooth. I'll pretend I didn't hear that... but I'm definitely grinning."}},firstMeet:{greeting:{expression:"happy",text:"Yo! New face on Sakura Street — love it! I was just about to sprint to the shrine and back."},choices:[{label:'"You run here every day?"',response:{expression:"happy",text:"Rain or shine! This road has the perfect curve by the torii gate. My legs know every crack in the pavement."}},{label:'"Think I could keep up?"',response:{expression:"surprised",text:"Ha! I like your energy. Here—feel this rush. Hold Shift and run the whole curve. The town opens up when you move fast."},reward:{type:"speedBoost",amount:1.8,duration:15,message:"⚡ Ren's runner's high! Sprint speed boosted."}},{label:'"Walk with me to the shrine?"',response:{expression:"happy",text:"YES! Tap Walk together and I'll jog beside you—well, walk-jog. Let's make this street ours!"},reward:{type:"friendship"}},{label:'"Good luck with your run."',response:{expression:"happy",text:"Thanks! If you change your mind, I'll be doing laps all afternoon!"},end:!0}]},revisit:{greeting:{expression:"surprised",text:"Back already? Either you love this street or you love talking to me. Either way—I'm flattered!"},choices:[{label:'"Race me to the shrine!"',response:{expression:"happy",text:"YOU'RE ON! Three... two... GO! Just kidding—I'll give you a head start. Feel that burn in your legs!"},reward:{type:"speedBoost",amount:2.2,duration:10,message:"🔥 Adrenaline rush! Max sprint unlocked."}},{label:'"Any tips for a beginner?"',response:{expression:"thinking",text:"Breathe through your nose, land on your midfoot, and never skip the stretch by the bench. Also—enjoy the view. Speed means nothing if you miss the town."}},{label:'"Catch you later, Ren."',response:{expression:"happy",text:"Later! Keep those legs moving!"},end:!0}]},companionTalk:{greeting:{expression:"happy",text:"This is great! Every step feels like a warm-up lap. Where to next, coach?"},choices:[{label:`"Let's keep going!"`,response:{expression:"happy",text:"Love the energy! I'll match your pace—just say the word if you want to sprint."},end:!0},{label:'"I want to walk solo for a while."',response:{expression:"happy",text:"All good! Solo runs build character too. Holler if you want a training buddy again."},reward:{type:"dismissCompanion"},end:!0}]}},{id:"haruko",name:"Haruko Sato",nameJa:"佐藤 春子",characterModel:"character_female_c",personality:"Wise neighbor",tagline:"Forty years on this street. Knows every story.",approachInvite:"Oh, dear—wait! Would you like this old woman to walk with you? Every corner here has a story.",walkAccept:"How lovely. I'll stroll right beside you. Point at anything—you ask, I'll tell you about it.",partWayLine:"Of course, dear. Every walk has its season. I'll be on my porch if you need a story.",emoji:"🌸",shirtColor:15259848,backpackColor:6332512,hairColor:6316128,startT:.62,defaultExpression:"happy",routine:"work",social:{befriend:{expression:"happy",text:"How lovely, dear. Friendship is the oldest kind of magic on any street."},argue:{expression:"thinking",text:"Even disagreeing can be honest. I appreciate your spirit, dear—don't hold back."},flirt:{expression:"surprised",text:"Oh my... at my age? You're a charmer. I'll pretend not to notice—but I noticed."}},firstMeet:{greeting:{expression:"happy",text:"Well hello, dear. You have that look—like someone seeing this street for the very first time."},choices:[{label:'"How long have you lived here?"',response:{expression:"thinking",text:"Forty years. This was all rice fields when I was a girl. Now there's vending machines and cherry trees. Time paints in colors you don't expect."},reward:{type:"journal",title:"Haruko's Memory",body:"Sakura Street was once rice fields. The cherry tree by the garden was planted when her daughter was born."}},{label:`"What's the best spot in town?"`,response:{expression:"happy",text:"The shrine steps, without question. Stand there at dusk. The light turns everything gold, and for a moment the whole world feels gentle."},reward:{type:"waypoint",location:"Shrine Steps",message:"Haruko pointed you toward the shrine steps at dusk."}},{label:'"Will you show me around?"',response:{expression:"happy",text:"Nothing would make me happier, dear. Tap Walk together and I'll stroll every step with you."},reward:{type:"friendship"}},{label:'"Thank you, Haruko."',response:{expression:"happy",text:"Come back anytime, dear. A town is only alive when people walk through it with open hearts."},end:!0}]},revisit:{greeting:{expression:"happy",text:"Welcome back, dear. I was just watching the clouds drift over the mountains. They look like old friends visiting."},choices:[{label:'"Tell me another story."',response:{expression:"thinking",text:"On rainy days, children used to huddle under the vending machine awning sharing sodas. That awning kept more than rain out—it kept loneliness out too."},reward:{type:"journal",title:"Rainy Day Awning",body:"Children gathered under the vending machine awning on rainy days, sharing sodas and stories."}},{label:'"The town feels different today."',response:{expression:"happy",text:"It's the same street—but you're different now. That's the secret. The town reflects whoever is walking through it."}},{label:'"Goodbye for now."',response:{expression:"happy",text:"Take care, dear. The street will be here when you return."},end:!0}]},companionTalk:{greeting:{expression:"happy",text:"What a lovely stroll this is, dear. The town looks different when you share it with someone."},choices:[{label:'"Tell me more as we walk."',response:{expression:"thinking",text:"Listen to the wind in the trees—that sound hasn't changed in forty years. Some things stay gentle on purpose."},end:!0},{label:`"I'd like to walk alone now."`,response:{expression:"happy",text:"Take your time, dear. Solitude is its own kind of companion. I'll be right here when you return."},reward:{type:"dismissCompanion"},end:!0}]}},{id:"mio",name:"Mio Ichikawa",nameJa:"市川 美央",characterModel:"character_female_a",personality:"Curious artist",tagline:"Sketching everything ordinary until it looks magical.",approachInvite:"Wait, wait! Before you go—walk with me? The light down the road is gorgeous right now!",walkAccept:"Perfect! I'll walk ahead and point out beautiful things. You just follow.",partWayLine:"No problem! I'll sketch the harbor light from here. Find me if you see something beautiful.",emoji:"🎨",shirtColor:13166832,backpackColor:15761568,hairColor:4861984,startT:.74,defaultExpression:"thinking",routine:"work",social:{befriend:{expression:"happy",text:"Friends! Now I have someone to point at beautiful things with. This is the best commission ever."},argue:{expression:"thinking",text:"Conflict is just contrasting colors. Bold choice—I respect it. Want to argue about art?"},flirt:{expression:"shy",text:"You're... kind of compositionally perfect. Don't make me blush while I'm holding a pencil."}},firstMeet:{greeting:{expression:"surprised",text:"Wait—hold still! The light just hit your shoulder perfectly. ...Sorry, artist reflex. Hi, I'm Mio!"},choices:[{label:'"What are you drawing?"',response:{expression:"thinking",text:"Everything everyone ignores. Vending machines, power lines, that orange cat on the wall. Ordinary things are secretly beautiful if you stare long enough."}},{label:`"Where's the best view?"`,response:{expression:"happy",text:"Torii gate curve at sunset. The cat on the wall near the bench. And the vending machine row when it rains—colors bleed into the wet pavement like watercolor."},reward:{type:"journal",title:"Mio's Sketch Spots",body:"Best views: torii curve at sunset, the orange cat on the wall, vending machines in the rain."}},{label:'"Walk with me and point out art?"',response:{expression:"happy",text:"That's literally my dream request! Tap Walk together and I'll whisper every beautiful thing I see."},reward:{type:"friendship"}},{label:'"Sorry to interrupt your art."',response:{expression:"happy",text:"Never apologize for that! Interruptions are just life adding itself to the composition."},end:!0}]},revisit:{greeting:{expression:"happy",text:"Perfect timing—I just finished a sketch of the power lines! They look like music notation if you squint."},choices:[{label:'"Can I see your sketchbook?"',response:{expression:"shy",text:"It's messy... pages of cats, mailboxes, one terrible traffic cone, and a self-portrait where I drew my nose too big. But... here."},reward:{type:"friendship",npc:"mio"}},{label:'"Teach me to see like you do."',response:{expression:"thinking",text:"Close your eyes. Open them slowly. Pick ONE color and hunt for it everywhere. The town rhymes with itself—you just have to listen with your eyes."},reward:{type:"waypoint",location:"Artist's Eye",message:"Mio taught you to see the town through an artist's eyes."}},{label:'"Keep creating, Mio."',response:{expression:"happy",text:"Always! Tell me if you find something worth a hundred sketches."},end:!0}]},companionTalk:{greeting:{expression:"happy",text:"Look—the light on that roof! Sorry, artist brain. I'm really glad we're walking together."},choices:[{label:'"Point out more beautiful things!"',response:{expression:"thinking",text:"See that crack in the sidewalk? It's shaped like a river. The town is full of hidden compositions."},end:!0},{label:'"I need some alone time to look around."',response:{expression:"happy",text:"Totally fair. Art needs space to breathe. I'll wander off and draw something quiet."},reward:{type:"dismissCompanion"},end:!0}]}}],kM={neutral:"😐",happy:"😊",surprised:"😮",thinking:"🤔",shy:"😳"},FM=[{id:"kenji",name:"Kenji Yamada",nameJa:"山田 健二",characterModel:"character_male_b",personality:"Baker",tagline:"Runs the morning market bread stall.",approachInvite:"Heading out? Perfect — I'm about to make my delivery rounds. Walk with me?",walkAccept:"Great! I'll tell you which shops get the best bread.",partWayLine:"Alright, I'll finish the rounds myself. Stop by the stall tomorrow!",emoji:"🍞",shirtColor:15786184,backpackColor:8413248,hairColor:3811872,startT:.54,defaultExpression:"happy",routine:"work",social:{befriend:{expression:"happy",text:"A fellow bread appreciator! Come by the stall early — I save the best batch for friends."}},firstMeet:{greeting:{expression:"happy",text:"Morning! Just pulled these melon pan from the oven. The whole market smells like butter and sunshine."},choices:[{label:'"Smells amazing!"',response:{expression:"happy",text:"You have good taste! A warm melon pan and a slow morning walk — that's the secret to a good day."},end:!0},{label:`"What's popular today?"`,response:{expression:"thinking",text:"Anko buns and curry bread. The fishermen buy half my stock before I finish setup."}},{label:'"Walk with me a bit?"',response:{expression:"happy",text:"I'd love that — I'm doing delivery rounds anyway. Come on!"},reward:{type:"friendship"},end:!0}]},revisit:{greeting:{expression:"happy",text:"Back for more? I saved a warm one just in case."},choices:[{label:`"How's business?"`,response:{expression:"happy",text:"Steady! A town feeds itself when people stop to talk between errands."},end:!0},{label:'"Tell me about the market."',response:{expression:"thinking",text:"It's been here fifty years. Old Mrs. Nakamura used to sell pickles at the corner — her recipe is still a secret."}},{label:'"Walk with me again?"',response:{expression:"happy",text:"Always! Deliveries are more fun with company."},reward:{type:"friendship"},end:!0}]},companionTalk:{greeting:{expression:"happy",text:"See that bakery smell drifting down the alley? That's Ito-san's place — we're friendly rivals."},choices:[{label:'"Who makes better bread?"',response:{expression:"happy",text:"Me, obviously. But his croissants are... acceptable. Don't tell him I said that."},end:!0},{label:'"I should head on alone."',response:{expression:"happy",text:"Of course! Come by the stall whenever. Free sample waiting for you."},reward:{type:"dismissCompanion"},end:!0}]}},{id:"sora",name:"Sora Mizuki",nameJa:"水樹 空",characterModel:"character_male_c",personality:"Fishmonger",tagline:"Sorting the morning catch at the harbor.",approachInvite:"Heading toward the water? I'm done here — I'll walk that way too.",walkAccept:"Good. The harbor path is best in the morning quiet.",partWayLine:"I'll take it from here. Come back when the boats return.",emoji:"🐟",shirtColor:13691120,backpackColor:4219008,hairColor:2764864,startT:.96,defaultExpression:"neutral",routine:"work",social:{befriend:{expression:"happy",text:"Hm. You're alright. Come back when the big catch comes in — I'll save you something."}},firstMeet:{greeting:{expression:"neutral",text:"Careful of the wet stones — fresh mackerel just came in. Glistening like silver coins."},choices:[{label:'"Caught locally?"',response:{expression:"happy",text:"Right off the pier this morning. This harbor keeps the whole town fed."}},{label:'"Beautiful view here."',response:{expression:"thinking",text:"I never get tired of it. The mountains, the water, the quiet after the boats leave."}},{label:'"Walk to the pier with me?"',response:{expression:"neutral",text:"Sure. I was heading back anyway."},reward:{type:"friendship"},end:!0}]},revisit:{greeting:{expression:"happy",text:"Good timing — still plenty of catch left."},choices:[{label:'"Busy day?"',response:{expression:"neutral",text:"The usual. Ren runs past, Haruko tells stories, the cat steals a nap on crate three."},end:!0},{label:'"Walk with me?"',response:{expression:"neutral",text:"Alright. Not much more to do here."},reward:{type:"friendship"},end:!0}]},companionTalk:{greeting:{expression:"neutral",text:"When the fog rolls in you can't see the mountains. But you can hear the harbor bells. That's enough."},choices:[{label:'"Tell me more about the harbor."',response:{expression:"thinking",text:"My grandfather built the first dock here. Three boats, two nets, and a lot of stubbornness."},end:!0},{label:`"I'll go on ahead."`,response:{expression:"neutral",text:"Right. Come back when the big fish are running."},reward:{type:"dismissCompanion"},end:!0}]}},{id:"emi",name:"Emi Okamoto",nameJa:"岡本 恵美",characterModel:"character_female_a",personality:"Playful kid",tagline:"Chasing pigeons near the park.",approachInvite:"Hey hey! I know every secret spot in this park! Want me to show you?",walkAccept:"Yes! Follow me! There's a cat behind the big tree and a pigeon who eats from your hand!",partWayLine:"Okay! I'll be near the swings. Come back and play!",emoji:"🎈",shirtColor:16304344,backpackColor:15786048,hairColor:1708048,startT:.8,defaultExpression:"happy",routine:"patrol",patrolTs:[.78,.82,.8],social:{befriend:{expression:"happy",text:"We're friends now! That means you get to see ALL the secret spots, including the one with three cats!"}},firstMeet:{greeting:{expression:"surprised",text:"Whoa! You're tall. Are you exploring? I know every bench and every cat in this park!"},choices:[{label:'"Show me around!"',response:{expression:"happy",text:"Okay! The orange cat lives by the big tree. The pigeons hang out by the gazebo. Walk with me!"},reward:{type:"friendship"},end:!0},{label:'"Having fun?"',response:{expression:"happy",text:"The best! Mom says I can play until the streetlights come on."},end:!0},{label:'"Which way to the shrine?"',response:{expression:"happy",text:"I'll show you! Follow me — I run there all the time!"},reward:{type:"friendship"},end:!0}]},revisit:{greeting:{expression:"happy",text:"Tag! You're it! ...Just kidding. Unless you want to be."},choices:[{label:'"Want to walk together?"',response:{expression:"happy",text:"Sure! I know a new spot where the sparrows eat bread crumbs!"},reward:{type:"friendship"},end:!0},{label:'"Catch you later!"',response:{expression:"happy",text:"Byeee! I'll be near the swings!"},end:!0}]},companionTalk:{greeting:{expression:"happy",text:"See that fat pigeon? His name is Mochi. I named him. He doesn't know that yet."},choices:[{label:'"What else have you named?"',response:{expression:"happy",text:"The orange cat is Tangerine, the big crow is Shogun, and the bench near the tree is Dave."},end:!0},{label:`"I'll explore by myself now."`,response:{expression:"happy",text:"Okay! Byeee! Find the three-cat bench — it's near the garden!"},reward:{type:"dismissCompanion"},end:!0}]}},{id:"jiro",name:"Jiro Sato",nameJa:"佐藤 次郎",characterModel:"character_male_c",personality:"Retired neighbor",tagline:"Watching the street from his bench.",approachInvite:"I was just thinking about getting up and walking to the shrine. Been a while. Care to join an old man?",walkAccept:"Ha! Good. Slow steps, slow talk. That's how you learn a place.",partWayLine:"My knees say that's enough for today. You go on — the town rewards the curious.",emoji:"🪑",shirtColor:14209216,backpackColor:5263440,hairColor:9474192,startT:.4,defaultExpression:"thinking",routine:"idle",social:{befriend:{expression:"happy",text:"Good. Friends are made slowly here. That's what makes them last."}},firstMeet:{greeting:{expression:"thinking",text:"Mm. Slow down a moment, young one. I've watched this street change for sixty years. The vending machines were the big revolution."},choices:[{label:'"What was it like before?"',response:{expression:"thinking",text:"Quieter. More bicycles. Mrs. Tanaka — Haruko's mother — planted that cherry tree by the garden."}},{label:'"Walk with me to the shrine?"',response:{expression:"happy",text:"Ha! You talk me into it. Lead the way — my knees need the practice."},reward:{type:"friendship"},end:!0},{label:'"Enjoy your rest."',response:{expression:"happy",text:"Wise words. A bench is a fine place to understand a town."},end:!0}]},revisit:{greeting:{expression:"happy",text:"Ah, my regular visitor. The street looks different every time, doesn't it?"},choices:[{label:'"Any news today?"',response:{expression:"thinking",text:"Mio drew the torii again. Kenji sold out of anko buns by nine. A good day."},end:!0},{label:'"Walk with me again?"',response:{expression:"happy",text:"Alright, alright — you've convinced me. Slow and steady."},reward:{type:"friendship"},end:!0}]},companionTalk:{greeting:{expression:"thinking",text:"You know, I used to chase cats down this very lane as a boy. Different cats, same lane."},choices:[{label:'"Tell me more."',response:{expression:"happy",text:"There was one cat — huge, orange — sat on that wall for twelve years. Same spot, every morning. Reliable as the sunrise."},end:!0},{label:`"I'll head on alone."`,response:{expression:"happy",text:"Good. The street is best walked alone sometimes. I'll be at the bench."},reward:{type:"dismissCompanion"},end:!0}]}},{id:"yoko",name:"Yoko Ishida",nameJa:"石田 陽子",characterModel:"character_female_b",personality:"Florist",tagline:"Tending the flower shop on cafe row.",approachInvite:"I'm just closing up for a tea break. I'd love some company on the way to the park!",walkAccept:"Wonderful! I know where the best wildflowers grow along the path.",partWayLine:"I'll stop here and sketch the wild cosmos. Come back and see the shop anytime!",emoji:"🌻",shirtColor:15790296,backpackColor:14712976,hairColor:4861984,startT:.48,pathSide:-1,defaultExpression:"happy",routine:"work",social:{befriend:{expression:"happy",text:"A flower friend! Come by when the dahlias bloom — I'll make a little arrangement just for you."}},firstMeet:{greeting:{expression:"happy",text:"Welcome to Hana no Ie! These cosmos just arrived — look how they lean toward the light."},choices:[{label:'"Your shop is lovely."',response:{expression:"happy",text:"Flowers teach patience. You water, you wait, and one morning the whole window blooms."}},{label:'"What sells best?"',response:{expression:"thinking",text:"Cherry blossom sprigs in spring. Sunflowers in summer. Haruko buys something every week."}},{label:'"Walk with me a bit?"',response:{expression:"happy",text:"I was hoping for an excuse to step out! The park light is beautiful right now."},reward:{type:"friendship"},end:!0}]},revisit:{greeting:{expression:"happy",text:"Perfect timing — I was just trimming the display."},choices:[{label:'"They look beautiful."',response:{expression:"shy",text:"Thank you... I talk to them sometimes. It helps."},end:!0},{label:'"Walk with me?"',response:{expression:"happy",text:"Yes! The back path behind the shrine has wild cosmos this time of year."},reward:{type:"friendship"},end:!0}]},companionTalk:{greeting:{expression:"happy",text:"See those little white flowers in the wall cracks? Hakonechloa. They grow wherever they want — I admire that."},choices:[{label:'"Do you know all the flowers here?"',response:{expression:"happy",text:"Most of them! The old magnolia by the shrine gate was planted sixty years ago. Jiro was there for the planting."},end:!0},{label:`"I'll wander alone for a bit."`,response:{expression:"happy",text:"Of course! Come back to the shop — I'll have tea ready."},reward:{type:"dismissCompanion"},end:!0}]}},{id:"hana",name:"Hana Ito",nameJa:"伊藤 花",characterModel:"character_female_a",personality:"Baker",tagline:"Runs the bakery on Shopping Lane.",approachInvite:"Fresh bread just came out! Want to walk and eat while it's warm?",walkAccept:"Perfect — the lane smells like butter right now.",partWayLine:"Back to the oven! Save me a melon pan next time.",emoji:"🍞",shirtColor:15786184,backpackColor:8413248,hairColor:3811872,pathId:"shopping",startT:.14,pathSide:1,defaultExpression:"happy",routine:"work",social:{befriend:{expression:"happy",text:"You appreciate good bread! I'll save the best batch for you."}},firstMeet:{greeting:{expression:"happy",text:"Welcome to Komugi Bakery! The melon pan is still warm — smell that?"},choices:[{label:'"Smells incredible!"',response:{expression:"happy",text:"The secret is butter and patience. Come early before the fishermen buy everything."},end:!0},{label:'"Walk with me?"',response:{expression:"happy",text:"I'd love a break! Let me grab a bag."},reward:{type:"friendship"},end:!0}]},revisit:{greeting:{expression:"happy",text:"Back for more? Anpan just came out of the oven."},choices:[{label:`"How's business?"`,response:{expression:"happy",text:"The shopping lane brings good foot traffic. Even the cats wait outside."},end:!0},{label:'"Walk together?"',response:{expression:"happy",text:"Always! Walking helps the dough rise in my mind."},reward:{type:"friendship"},end:!0}]},companionTalk:{greeting:{expression:"happy",text:"This lane used to be just grass. Now look — four shops and a bicycle."},choices:[{label:'"Best bread in town?"',response:{expression:"happy",text:"Obviously! Kenji at the market agrees. We're friendly rivals."},end:!0},{label:`"I'll head on alone."`,response:{expression:"happy",text:"Take a melon pan for the road!"},reward:{type:"dismissCompanion"},end:!0}]}},{id:"umi",name:"Umi Tanaka",nameJa:"田中 海",characterModel:"character_male_b",personality:"Fisherman",tagline:"Casts lines from the riverside bridge.",approachInvite:"The river's calm today. Walk the bank with me?",walkAccept:"Good — I'll show you where the big trout hide.",partWayLine:"Tide's turning. I'll stay here and cast a few more.",emoji:"🎣",shirtColor:13691120,backpackColor:4219008,hairColor:2764864,pathId:"riverside",startT:.15,defaultExpression:"neutral",routine:"work",social:{befriend:{expression:"happy",text:"You understand the river. Come back at dawn — that's when the magic happens."}},firstMeet:{greeting:{expression:"neutral",text:"Quiet spot, isn't it? The bridge creaks when the wind picks up. I like that sound."},choices:[{label:'"Catch anything?"',response:{expression:"happy",text:"A few trout this morning. The river feeds the harbor — everything's connected."}},{label:'"Walk the bank?"',response:{expression:"neutral",text:"Sure. The reeds are thick on the south bend."},reward:{type:"friendship"},end:!0}]},revisit:{greeting:{expression:"happy",text:"The herons are out today. Three of them near the second bridge."},choices:[{label:'"Beautiful river."',response:{expression:"thinking",text:"It winds like it has somewhere to be. I respect that."},end:!0},{label:'"Walk together?"',response:{expression:"happy",text:"Lead the way. I'll point out the lily pads."},reward:{type:"friendship"},end:!0}]},companionTalk:{greeting:{expression:"neutral",text:"See those stepping stones? Kids use them in summer. I used to, too."},choices:[{label:'"How deep is the river?"',response:{expression:"thinking",text:"Waist-deep in the middle. The banks are shallow — safe for wading."},end:!0},{label:`"I'll fish alone."`,response:{expression:"happy",text:"Enjoy the quiet. That's the best part."},reward:{type:"dismissCompanion"},end:!0}]}},{id:"ako",name:"Ako Fujita",nameJa:"藤田 亜子",characterModel:"character_female_c",personality:"Painter",tagline:"Sketches the grove in watercolor.",approachInvite:"The light in the grove is perfect right now. Sit with me?",walkAccept:"Wonderful. I'll bring my sketchbook.",partWayLine:"The shadows shifted — I need to capture this angle. See you in the grove.",emoji:"🎨",shirtColor:15257840,backpackColor:8413344,hairColor:2759216,pathId:"grove",startT:.55,pathSide:1,defaultExpression:"shy",routine:"idle",social:{befriend:{expression:"happy",text:"You see the world the way I do. I'll paint something for you someday."}},firstMeet:{greeting:{expression:"shy",text:"Oh — I didn't hear you approach. I was watching the light through the cherry branches."},choices:[{label:'"What are you painting?"',response:{expression:"happy",text:"The picnic blanket and mushrooms. This grove changes every hour — never the same green twice."}},{label:'"Can I watch you work?"',response:{expression:"shy",text:"I'd like that. The light through the trees is best from here."},reward:{type:"friendship"},end:!0}]},revisit:{greeting:{expression:"happy",text:"You're back! The mushrooms grew since yesterday — little red caps everywhere."},choices:[{label:'"Your art is lovely."',response:{expression:"shy",text:"Thank you... I paint for myself, mostly. But it's nice when someone notices."},end:!0},{label:'"Walk with me?"',response:{expression:"happy",text:"Let me pack my brushes. The lane has good light too."},reward:{type:"friendship"},end:!0}]},companionTalk:{greeting:{expression:"happy",text:"The cherry trees here were planted by the old shopkeepers. Each one has a story."},choices:[{label:'"Tell me one."',response:{expression:"happy",text:"The tallest one? Yoko's grandmother planted it when the shop opened. It's eighty years old now."},end:!0},{label:`"I'll explore alone."`,response:{expression:"shy",text:"Take your time. The grove isn't going anywhere."},reward:{type:"dismissCompanion"},end:!0}]}},{id:"runa",name:"Runa Hayashi",nameJa:"林 瑠奈",characterModel:"character_female_b",personality:"Jogger",tagline:"Runs the riverside path every morning.",approachInvite:"I'm doing another lap of the river path. Join me?",walkAccept:"Great pace! The bridge to bridge loop is my favorite.",partWayLine:"Good run! I'll cool down by the water.",emoji:"🏃",shirtColor:15790320,backpackColor:4227264,hairColor:1710634,pathId:"riverside",startT:.3,defaultExpression:"happy",routine:"jog",patrolTs:[.1,.5,.85,.5],social:{befriend:{expression:"happy",text:"A running buddy! Meet me at the first bridge at sunrise."}},firstMeet:{greeting:{expression:"happy",text:"Morning! Well — anytime morning. I run this path four times a day."},choices:[{label:'"How far is the loop?"',response:{expression:"happy",text:"Bridge to bridge and back — about a kilometer. The gravel path is easy on the knees."}},{label:'"Run with me?"',response:{expression:"happy",text:"Let's go! Start at the bridge — I'll set the pace."},reward:{type:"friendship"},end:!0}]},revisit:{greeting:{expression:"happy",text:"Perfect timing — I was about to start another lap!"},choices:[{label:'"You run a lot!"',response:{expression:"happy",text:"The river air is the best in town. Better than the main road, anyway."},end:!0},{label:'"Run together?"',response:{expression:"happy",text:"Race you to the second bridge!"},reward:{type:"friendship"},end:!0}]},companionTalk:{greeting:{expression:"happy",text:"See how the path follows the river? Someone planned this well. Best addition to the town in years."},choices:[{label:'"Favorite spot?"',response:{expression:"happy",text:"The stepping stones near the first bridge. I hop across them every time."},end:!0},{label:`"I'll walk, not run."`,response:{expression:"happy",text:"Fair enough! Catch you at the bridge."},reward:{type:"dismissCompanion"},end:!0}]}}],BM={befriend:{label:"💛 Make friends",className:"social-befriend",mood:8,moodLabel:"New friend!"},argue:{label:"💢 Argue",className:"social-argue",mood:-6},flirt:{label:"💕 Flirt",className:"social-flirt",mood:10,moodLabel:"Bold move!"}};class OM{constructor(e){var t,n,i,r,a,o,l,c,h,u;this.box=e.box,this.approachModal=e.approachModal,this.approachPortrait=e.approachPortrait,this.approachName=e.approachName,this.approachPersonality=e.approachPersonality,this.approachTagline=e.approachTagline,this.approachChatBtn=e.approachChatBtn,this.approachWalkBtn=e.approachWalkBtn,this.approachPartBtn=e.approachPartBtn,this.approachIgnoreBtn=e.approachIgnoreBtn,this.companionTag=e.companionTag,this.companionLabel=e.companionLabel,this.companionPartBtn=e.companionPartBtn,this.nameEl=e.name,this.personalityEl=e.personality,this.textEl=e.text,this.expressionEl=e.expression,this.portraitEl=e.portrait,this.nextBtn=e.next,this.choicesEl=e.choices,this.dialogueWalkBtn=e.dialogueWalkBtn,this.dialogueStopWalkBtn=e.dialogueStopWalkBtn,this.toastEl=e.toast,this.journalPanel=e.journalPanel,this.journalList=e.journalList,this.journalBtn=e.journalBtn,this.closeJournalBtn=e.closeJournalBtn,this.interactHint=e.interactHint,this.continueHint=e.continueHint,this.active=!1,this.hintItem=null,this.onHintClick=null,this.approachOpen=!1,this.approachInitiated=!1,this.npc=null,this.conversation=null,this.phase="greeting",this.pendingChoices=!1,this.journal=[],this.nextBtn.addEventListener("click",()=>this.advance()),(t=this.approachChatBtn)==null||t.addEventListener("click",()=>this._onChatClicked()),(n=this.approachWalkBtn)==null||n.addEventListener("click",()=>this._onWalkClicked()),(i=this.approachPartBtn)==null||i.addEventListener("click",()=>this._onPartClicked()),(r=this.approachIgnoreBtn)==null||r.addEventListener("click",()=>this._onIgnoreClicked()),(a=this.companionPartBtn)==null||a.addEventListener("click",()=>this._onCompanionPartClicked()),(o=this.dialogueWalkBtn)==null||o.addEventListener("click",()=>this._onDialogueWalkClicked()),(l=this.dialogueStopWalkBtn)==null||l.addEventListener("click",()=>this._onDialogueStopWalkClicked()),(c=this.journalBtn)==null||c.addEventListener("click",()=>{var d;return(d=this.journalPanel)==null?void 0:d.classList.remove("hidden")}),(h=this.closeJournalBtn)==null||h.addEventListener("click",()=>{var d;return(d=this.journalPanel)==null?void 0:d.classList.add("hidden")}),(u=this.interactHint)==null||u.addEventListener("click",()=>{var d;(d=this.onHintClick)==null||d.call(this)})}setRewardHandler(e){this._rewardHandler=e}setGame(e){this.game=e}isOpen(){return this.active}isBlocking(){return this.active||this.approachOpen}showInteractHint(e){var n,i,r;if(!this.interactHint||!e||this.isBlocking()){this.hideInteractHint();return}this.hintItem=e;let t="<kbd>E</kbd> Interact";if(e.type==="npc")t=`<kbd>E</kbd> Interact? with ${((n=e.profile)==null?void 0:n.nameJa)||((i=e.profile)==null?void 0:i.name)||"Someone"}`;else if(e.type==="animal"){const a=e.definition;t=`<kbd>E</kbd> ${a.emoji} Meet ${a.nameJa||a.name}`}else if(e.type==="prop"){const a=e.definition;if(a.shopId)t=`<kbd>E</kbd> 🏪 ${a.label}`;else if(a.id==="shrine")t="<kbd>E</kbd> ⛩️ Pray at Shrine";else if(a.id==="torii"){const o=((r=this.game)==null?void 0:r.offeringTokens)??0,l=a.tokenCost??1;t=`<kbd>E</kbd> 🪙 Pray (${l} token${l>1?"s":""}) · ${o} left`}else a.id==="cherry_tree"?t="<kbd>E</kbd> 🌸 Admire Cherry Tree":a.id==="shrine_tree"&&(t="<kbd>E</kbd> 🌿 Listen to the Wind")}this.interactHint.innerHTML=t,this.interactHint.classList.remove("hidden")}hideInteractHint(){var e;this.hintItem=null,(e=this.interactHint)==null||e.classList.add("hidden")}setCompanionTag(e){this.companionTag&&(e?(this.companionLabel?this.companionLabel.textContent=`${e.profile.emoji} Walking with ${e.profile.nameJa}`:this.companionTag.textContent=`${e.profile.emoji} Walking with ${e.profile.nameJa}`,this.companionTag.classList.remove("hidden")):this.companionTag.classList.add("hidden"))}_canWalk(e){var t;return!e||e.isCompanion?!1:!!((t=e.profile)!=null&&t.approachInvite)}_updateDialogueWalkButtons(){var n,i;const e=this.npc,t=e==null?void 0:e.isCompanion;(n=this.dialogueWalkBtn)==null||n.classList.toggle("hidden",!this.active||t||!this._canWalk(e)),(i=this.dialogueStopWalkBtn)==null||i.classList.toggle("hidden",!this.active||!t)}showApproach(e,t={}){var r,a,o,l;if(this.isBlocking()||!e)return;this.hintItem=null,(r=this.interactHint)==null||r.classList.add("hidden"),this.approachOpen=!0,this.approachInitiated=t.initiated??!1,this.npc=e;const n=e.profile,i=e.isCompanion;this.approachPortrait.textContent=n.emoji,this.approachName.textContent=`${n.nameJa} · ${n.name}`,this.approachPersonality.textContent=n.personality,this.approachTagline.textContent=i?"Your walking companion wants to talk.":this.approachInitiated?n.approachInvite:n.tagline,(a=this.approachWalkBtn)==null||a.classList.toggle("hidden",i||!this._canWalk(e)),(o=this.approachPartBtn)==null||o.classList.toggle("hidden",!i),(l=this.approachIgnoreBtn)==null||l.classList.toggle("hidden",i),this.approachModal.classList.remove("hidden"),i||(e.interactionEngaged=!0,e.onApproach(this.approachInitiated),e.stopApproaching())}hideApproach(){var e,t,n;this.approachOpen=!1,this.approachInitiated=!1,this.approachModal.classList.add("hidden"),(e=this.approachWalkBtn)==null||e.classList.remove("hidden"),(t=this.approachPartBtn)==null||t.classList.add("hidden"),(n=this.approachIgnoreBtn)==null||n.classList.remove("hidden"),this.npc&&!this.active&&(this.npc.interactionEngaged=!1,this.npc.clearApproachBubbles(),this.npc.isCompanion||(this.npc=null))}_onChatClicked(){const e=this.npc;this.hideApproach(),e&&this.start(e)}_onWalkClicked(){const e=this.npc;this.hideApproach(),e&&(e.markMet(),this._beginCompanion(e))}_onPartClicked(){const e=this.npc;this.hideApproach(),e!=null&&e.isCompanion?this._dismissCompanion(e):e&&this.start(e)}_onCompanionPartClicked(){var e;(e=this.game)!=null&&e.companion&&this._dismissCompanion(this.game.companion)}_onDialogueWalkClicked(){var t;const e=this.npc;!e||e.isCompanion||(t=e.profile)!=null&&t.isAmbient||(this._beginCompanion(e),this._updateDialogueWalkButtons())}_onDialogueStopWalkClicked(){const e=this.npc;e!=null&&e.isCompanion&&(this._dismissCompanion(e),this._updateDialogueWalkButtons())}_beginCompanion(e){var t;(t=this._rewardHandler)==null||t.call(this,{type:"companion",npc:e}),this._showToast(`🚶 ${e.profile.name}: "${e.profile.walkAccept}"`)}_dismissCompanion(e){var t;(t=this._rewardHandler)==null||t.call(this,{type:"dismissCompanion",npc:e}),this._showToast(`👋 ${e.profile.name}: "${e.profile.partWayLine}"`),this.setCompanionTag(null),this._updateDialogueWalkButtons()}_onIgnoreClicked(){this.npc&&(this.npc.ignoreFor(15),this.npc.stopApproaching()),this.hideApproach(),this.npc=null}start(e){var t;this.active=!0,this.npc=e,e.isCompanion&&e.profile.companionTalk?this.conversation=e.profile.companionTalk:this.conversation=e.hasMetBefore()?e.profile.revisit:e.profile.firstMeet,this.phase="greeting",this.pendingChoices=!1,this.box.classList.remove("hidden"),this.box.classList.add("bubble-mode"),this.choicesEl.innerHTML="",this.choicesEl.classList.add("hidden"),this.nextBtn.classList.remove("hidden"),(t=this.continueHint)==null||t.classList.remove("hidden"),this._updateDialogueWalkButtons(),e.startConversation(),e.markMet(),this._showGreeting()}_showGreeting(){this._renderLine(this.conversation.greeting),this.nextBtn.textContent="▶ Continue"}_getSocialChoices(){var t,n;const e=(n=(t=this.npc)==null?void 0:t.profile)==null?void 0:n.social;return e?Object.entries(BM).filter(([i])=>e[i]).map(([i,r])=>({key:i,meta:r,response:e[i]})):[]}_showChoices(){var n;this.phase="choices",this.expressionEl.textContent="💬",this.textEl.textContent="What do you say?",this.npc.showSpeechText("What do you say?"),this.nextBtn.classList.add("hidden"),(n=this.continueHint)==null||n.classList.add("hidden"),this.choicesEl.classList.remove("hidden"),this.choicesEl.innerHTML="";let e=0;const t=(i,r,a)=>{const o=document.createElement("button");o.className=`dialogue-choice${r?` ${r}`:""}`,o.innerHTML=`<span class="choice-num">${e+1}</span>${i}`,o.addEventListener("click",a),this.choicesEl.appendChild(o),e+=1};for(const{key:i,meta:r,response:a}of this._getSocialChoices())t(r.label,r.className,()=>this._pickSocialChoice(i,a,r));this.conversation.choices.forEach((i,r)=>{t(i.label,"",()=>this._pickChoice(r))})}_pickSocialChoice(e,t,n){var i,r,a,o;this.phase="response",this.choicesEl.classList.add("hidden"),this.choicesEl.innerHTML="",this.nextBtn.classList.remove("hidden"),(i=this.continueHint)==null||i.classList.remove("hidden"),this._renderLine(t),this.nextBtn.textContent="▶ Keep talking",e==="befriend"?(this.npc.addFriendship(),this._showToast(`💛 ${this.npc.profile.name} warmed up to you.`)):e==="argue"?this._showToast(`💢 Tension rises with ${this.npc.profile.name}…`):e==="flirt"&&(this.npc.addFriendship(),this._showToast(`💕 ${this.npc.profile.name} seems flustered—in a good way.`)),(r=this.game)!=null&&r.mood&&n.mood&&(n.mood>0?this.game.mood.boost(n.mood,n.moodLabel??""):this.game.mood.drain(-n.mood),(o=(a=this.game)._updateMoodHUD)==null||o.call(a)),this.pendingChoices=!0}_pickChoice(e){var n;const t=this.conversation.choices[e];this.phase="response",this.choicesEl.classList.add("hidden"),this.choicesEl.innerHTML="",this.nextBtn.classList.remove("hidden"),(n=this.continueHint)==null||n.classList.remove("hidden"),this._renderLine(t.response),this.nextBtn.textContent=t.end?"👋 Say goodbye":"▶ Keep talking",t.reward&&this._applyReward(t.reward),this.pendingChoices=!t.end,t.end&&(this.phase="farewell")}_applyReward(e){var t;e.type==="journal"?(this.journal.push({title:e.title,body:e.body,npc:this.npc.profile.name}),this._updateJournalUI(),this._showToast(`📓 Saved to journal: ${e.title}`)):e.type==="speedBoost"?((t=this._rewardHandler)==null||t.call(this,{type:"speedBoost",amount:e.amount,duration:e.duration}),this._showToast(e.message)):e.type==="waypoint"?this._showToast(`📍 ${e.message}`):e.type==="friendship"?(this.npc.addFriendship(),this._showToast(`💛 ${this.npc.profile.name} opened up to you.`)):e.type==="dismissCompanion"&&this._dismissCompanion(this.npc)}_showToast(e){this.toastEl&&(this.toastEl.textContent=e,this.toastEl.classList.remove("hidden"),clearTimeout(this._toastTimer),this._toastTimer=setTimeout(()=>this.toastEl.classList.add("hidden"),4500))}_updateJournalUI(){if(this.journalList){if(this.journalList.innerHTML="",this.journal.length===0){this.journalList.innerHTML='<li class="journal-empty">Talk to townspeople to collect notes.</li>';return}this.journal.forEach(e=>{const t=document.createElement("li");t.innerHTML=`<strong>${e.title}</strong><span>${e.npc}</span><p>${e.body}</p>`,this.journalList.appendChild(t)})}}advance(){this.active&&(this.phase==="greeting"?this._showChoices():this.phase==="response"?this.pendingChoices?this._showChoices():this.close():this.phase==="farewell"&&this.close())}_renderLine(e){const t=this.npc.profile;this.nameEl.textContent=`${t.nameJa} · ${t.name}`,this.personalityEl.textContent=`${t.emoji} ${t.personality}`,this.textEl.textContent=e.text,this.expressionEl.textContent=kM[e.expression]??"😐",this.portraitEl.textContent=t.emoji,this.npc.setExpression(e.expression),this.npc.showSpeechText(e.text),this.continueHint&&(this.continueHint.textContent="▶ Continue")}close(){var e,t,n,i;this.active=!1,this.box.classList.add("hidden"),this.box.classList.remove("bubble-mode"),this.choicesEl.classList.add("hidden"),this.nextBtn.classList.remove("hidden"),this.nextBtn.textContent="▶ Continue",(e=this.continueHint)==null||e.classList.add("hidden"),(t=this.dialogueWalkBtn)==null||t.classList.add("hidden"),(n=this.dialogueStopWalkBtn)==null||n.classList.add("hidden"),this.npc&&(this.npc.hideSpeechBubble(),this.npc.endConversation(),this.npc.isCompanion||(this.npc=null),(i=this.onConversationEnd)==null||i.call(this))}tryAdvanceFromKey(){return!this.active||this.phase==="choices"?!1:(this.advance(),!0)}addJournalEntry(e,t,n){this.journal.push({title:e,body:t,npc:n}),this._updateJournalUI(),this._showToast(`📓 Saved to journal: ${e}`)}showToast(e){this._showToast(e)}}class zM{constructor(){this.raycaster=new fc}pickFromTap(e,t,n,i){if(!e||!t||!n||!(i!=null&&i.length))return null;const r=n.getBoundingClientRect(),a=new re((e.x-r.left)/r.width*2-1,-((e.y-r.top)/r.height)*2+1);this.raycaster.setFromCamera(a,t);const o=this.raycaster.intersectObjects(i,!0);return o.length===0?null:this._interactableFromObject(o[0].object)}_interactableFromObject(e){var n,i;let t=e;for(;t;){if((n=t.userData)!=null&&n.interactable)return t.userData.interactable;if((i=t.userData)!=null&&i.interactNpc)return t.userData.interactNpc;t=t.parent}return null}}class HM{constructor(e,t,n,i,r,a){this.player=e,this.registry=t,this.dialogue=n,this.game=i,this.petUI=r,this.shopUI=a,this.picker=new zM,this.approachRange=9,this.spotRange=20,n.onHintClick=()=>{n.hintItem&&this._interactWithItem(n.hintItem)}}setRewardHandler(e){this.dialogue.setRewardHandler(e)}isBlocking(){var e,t,n;return this.dialogue.isBlocking()||((e=this.petUI)==null?void 0:e.isOpen())||((t=this.shopUI)==null?void 0:t.isOpen())||((n=this.game)==null?void 0:n.outfitOpen)}_interactWithNpc(e){var t,n;return e?((t=e.clearIgnore)==null||t.call(e),(n=e.stopApproaching)==null||n.call(e),this.dialogue.showApproach(e,{initiated:!1}),!0):!1}_interactWithItem(e){var i;if(!e)return!1;const t=this.player.position,n=e.type==="npc"?e.isCompanion?this.approachRange+2:this.spotRange:e.range??this.approachRange;return!((i=e.canInteract)!=null&&i.call(e,t))&&e.distanceTo(t)>n?(this.dialogue._showToast("Move closer to interact."),!1):e.type==="npc"?this._interactWithNpc(e):(e.interact({game:this.game,dialogue:this.dialogue,petUI:this.petUI,shopUI:this.shopUI,player:this.player}),!0)}update(e,t,n){if(this.isBlocking()){this.dialogue.hideInteractHint();return}const i=this.registry.getNpcs(),r=this.game.companion;for(const h of i){if(h.isCompanion)continue;const d=h.distanceTo(this.player.position)<this.approachRange;h.setPlayerNearby(d,this.player.position)}const o=!!this.registry.findNearest(this.player.position,this.approachRange,{types:["npc"]});this.dialogue.approachOpen&&!o&&!this.dialogue.approachInitiated&&this.dialogue.hideApproach();const l=this.registry.findNearest(this.player.position,this.approachRange,{});l?this.dialogue.showInteractHint(l):this.dialogue.hideInteractHint();const c=e.consumeTap();if(c){const h=this.picker.pickFromTap(c,t,n,this.registry.getHitTargets());h&&this._interactWithItem(h)}if(e.consumeKey("KeyE")){let h=null;r?h=r:h=this.registry.findNearest(this.player.position,this.approachRange+2,{includeIgnored:!0}),h?this._interactWithItem(h):this.dialogue._showToast("Nothing nearby to interact with.")}}}const GM={npc:0,animal:1,prop:2};class VM{constructor(){this.items=[]}register(e){e&&this.items.push(e)}registerAll(...e){for(const t of e)Array.isArray(t)?t.forEach(n=>this.register(n)):t&&this.register(t)}getHitTargets(){var t;const e=[];for(const n of this.items){const i=((t=n.getHitTargets)==null?void 0:t.call(n))??[];e.push(...i)}return e}findNearest(e,t,n={}){var c;const{types:i=null,includeIgnored:r=!1}=n;let a=null,o=1/0,l=1/0;for(const h of this.items){if(i&&!i.includes(h.type)||h.type==="npc"&&h.isCompanion||h.type==="npc"&&h.isTalking||h.type==="npc"&&!r&&((c=h.isIgnored)!=null&&c.call(h))||h.type==="animal"&&h.isPetCompanion)continue;const u=h.distanceTo(e);if(u>=t)continue;const d=GM[h.type]??9;(u<o-.5||Math.abs(u-o)<.5&&d<l)&&(a=h,o=u,l=d)}return a}getNpcs(){return this.items.filter(e=>e.type==="npc")}getAnimals(){return this.items.filter(e=>e.type==="animal")}findAllInRange(e,t,n={}){var a;const{includeIgnored:i=!1}=n,r=[];for(const o of this.items){if(o.type==="npc"&&o.isCompanion||o.type==="npc"&&o.isTalking||o.type==="npc"&&!i&&((a=o.isIgnored)!=null&&a.call(o))||o.type==="animal"&&o.isPetCompanion)continue;const l=o.distanceTo(e);l>=t||r.push({item:o,dist:l})}return r.sort((o,l)=>o.dist-l.dist)}}function ri(s,e,t,n,i,r=null,a=1.5){s.fillStyle=i,s.beginPath(),s.arc(e,t,n,0,Math.PI*2),s.fill(),r&&(s.strokeStyle=r,s.lineWidth=a,s.stroke())}function cu(s,e,t,n,i){s.fillStyle=n,s.fillRect(e-2.5,t-1,5,5),s.fillStyle=i??n,s.beginPath(),s.arc(e,t-2.8,2.8,0,Math.PI*2),s.fill()}function hu(s,e,t,n){s.fillStyle=n,s.beginPath(),s.arc(e,t+1,2.8,0,Math.PI*2),s.fill(),[[-3,-2.5],[0,-4.5],[3,-2.5]].forEach(([i,r])=>{s.beginPath(),s.arc(e+i,t+r,1.5,0,Math.PI*2),s.fill()})}function WM(s,e,t,n,i=4){s.fillStyle=n,s.beginPath(),s.moveTo(e,t-i),s.lineTo(e+i,t),s.lineTo(e,t+i),s.lineTo(e-i,t),s.closePath(),s.fill()}function XM(s,e,t,n,i=4.5){s.fillStyle=n,s.beginPath();for(let r=0;r<8;r++){const a=r/8*Math.PI*2-Math.PI/2,o=r%2===0?i:i*.45,l=e+Math.cos(a)*o,c=t+Math.sin(a)*o;r===0?s.moveTo(l,c):s.lineTo(l,c)}s.closePath(),s.fill()}function jM(s,e,t,n){s.fillStyle=n,s.beginPath(),s.moveTo(e-4.5,t-.5),s.lineTo(e,t-5.5),s.lineTo(e+4.5,t-.5),s.closePath(),s.fill(),s.fillRect(e-3.5,t-.5,7,5.5)}const Lt={npc:"#f09030",animal:"#d060c8",shop:"#f0c030",shrine:"#50d0a0",vending:"#40c8d0",bench:"#a07050",tree:"#c090b0",companion:"#60e8d8",player:"#4a90e8"};function YM(s){var t,n;if(s.type==="npc")return Lt.npc;if(s.type==="animal")return Lt.animal;const e=((t=s.definition)==null?void 0:t.id)??"";return(n=s.definition)!=null&&n.shopId||e.startsWith("shop")?Lt.shop:e==="shrine"?Lt.shrine:e==="vending"?Lt.vending:e==="bench"?Lt.bench:e==="cherry_tree"||e==="shrine_tree"?Lt.tree:Lt.bench}function qM(s){var e;return s.type==="npc"||s.type==="animal"?s.mesh.position:(e=s.mesh)==null?void 0:e.position}function KM(s,e,t,n,i=10,r=[]){var d;let a=1/0,o=-1/0,l=1/0,c=-1/0;const h=(f,m)=>{f<a&&(a=f),f>o&&(o=f),m<l&&(l=m),m>c&&(c=m)},u=f=>{if(f!=null&&f.getPointAt)for(let m=0;m<=60;m++){const _=f.getPointAt(m/60);h(_.x,_.z)}};u(s);for(const f of r)f!==s&&u(f);for(const f of e)h(f.mesh.position.x,f.mesh.position.z);for(const f of t)h(f.mesh.position.x,f.mesh.position.z);for(const f of n)(d=f.mesh)!=null&&d.position&&h(f.mesh.position.x,f.mesh.position.z);return Number.isFinite(a)?{minX:a-i,maxX:o+i,minZ:l-i,maxZ:c+i}:{minX:-20,maxX:20,minZ:-100,maxZ:20}}class $M{constructor(e,t,n=null,i=[]){var a;if(this.canvas=e,this.wrapEl=n,this.path=t,this.walkableCurves=i??[],this.player=null,this.npcs=[],this.animals=[],this.worldProps=[],this.companion=null,this.petCompanion=null,this.nearbyInteractables=[],this.bounds={minX:-20,maxX:20,minZ:-100,maxZ:20},this.padding=10,this._pulse=0,this.unavailable=!1,this.dpr=1,this.size=(e==null?void 0:e.width)||180,this.fallbackEl=(n==null?void 0:n.querySelector("#minimap-fallback"))??null,this.ctx=(e==null?void 0:e.getContext("2d"))??null,!this.ctx){console.warn("Minimap: 2D canvas context unavailable"),this.unavailable=!0,e&&(e.style.display="none"),(a=this.fallbackEl)==null||a.classList.remove("hidden");return}const r=(n==null?void 0:n.clientWidth)||e.width||180;this.resize(r)}setPlayer(e){this.player=e}setNpcs(e){this.npcs=e,this._recomputeBounds()}setAnimals(e){this.animals=e,this._recomputeBounds()}setWorldProps(e){this.worldProps=e,this._recomputeBounds()}setCompanion(e){this.companion=e}setPetCompanion(e){this.petCompanion=e}setNearbyInteractables(e){this.nearbyInteractables=e??[]}_recomputeBounds(){this.bounds=KM(this.path,this.npcs,this.animals,this.worldProps,10,this.walkableCurves)}resize(e){var n;if(this.unavailable||!this.canvas||!this.ctx)return;const t=Math.max(80,Math.round(e||((n=this.wrapEl)==null?void 0:n.clientWidth)||this.size||180));this.size=t,this.dpr=Math.min(window.devicePixelRatio||1,2),this.canvas.width=Math.round(t*this.dpr),this.canvas.height=Math.round(t*this.dpr),this.canvas.style.width=`${t}px`,this.canvas.style.height=`${t}px`,this.ctx.setTransform(this.dpr,0,0,this.dpr,0,0)}_worldToMap(e,t){const{minX:n,maxX:i,minZ:r,maxZ:a}=this.bounds,o=i-n||1,l=a-r||1,c=this.size-this.padding*2;return{mx:this.padding+(e-n)/o*c,my:this.padding+(t-r)/l*c}}update(){var i,r,a;if(this.unavailable||!this.ctx)return;const{ctx:e,size:t}=this;this._pulse=(this._pulse+.07)%(Math.PI*2),e.clearRect(0,0,t,t),e.save(),e.beginPath(),e.arc(t/2,t/2,t/2-2,0,Math.PI*2),e.clip(),e.fillStyle="#243c24",e.fillRect(0,0,t,t);const n=this._worldToMap(22,-78);e.fillStyle="#3a6890",e.beginPath(),e.arc(n.mx,n.my,18,0,Math.PI*2),e.fill(),e.strokeStyle="#1a1a1a",e.lineWidth=7,e.lineCap="round",e.lineJoin="round",e.beginPath();for(let o=0;o<=60;o++){const l=this.path.getPointAt(o/60),{mx:c,my:h}=this._worldToMap(l.x,l.z);o===0?e.moveTo(c,h):e.lineTo(c,h)}if(e.stroke(),e.strokeStyle="rgba(220,210,180,0.55)",e.lineWidth=2.5,e.stroke(),(i=this.walkableCurves)!=null&&i.length){for(const o of this.walkableCurves)if(o!==this.path){e.strokeStyle="rgba(138,132,120,0.7)",e.lineWidth=5,e.beginPath();for(let l=0;l<=40;l++){const c=o.getPointAt(l/40),{mx:h,my:u}=this._worldToMap(c.x,c.z);l===0?e.moveTo(h,u):e.lineTo(h,u)}e.stroke()}}for(const o of this.worldProps){const l=o.mesh.position,{mx:c,my:h}=this._worldToMap(l.x,l.z),u=((r=o.definition)==null?void 0:r.id)??"";u==="shrine"?XM(e,c,h,Lt.shrine):u==="vending"?ri(e,c,h,2.8,Lt.vending,"#ffffff",1):u.startsWith("shop")?jM(e,c,h,Lt.shop):u==="bench"?ri(e,c,h,2,Lt.bench):(u==="cherry_tree"||u==="shrine_tree")&&ri(e,c,h,2,Lt.tree)}for(const o of this.animals){if(o===this.petCompanion)continue;const l=o.mesh.position,{mx:c,my:h}=this._worldToMap(l.x,l.z);hu(e,c,h,Lt.animal)}if(this.petCompanion){const o=this.petCompanion.mesh.position,{mx:l,my:c}=this._worldToMap(o.x,o.z),h=5+Math.sin(this._pulse)*2;ri(e,l,c,h,"rgba(208,96,200,0.25)"),hu(e,l,c,"#ff80f0"),e.strokeStyle="#ff80f0",e.lineWidth=1.5,e.beginPath(),e.arc(l,c,h,0,Math.PI*2),e.stroke()}for(const o of this.npcs){if(o===this.companion)continue;const{mx:l,my:c}=this._worldToMap(o.mesh.position.x,o.mesh.position.z);(a=o.profile)!=null&&a.isAmbient?ri(e,l,c,2,"rgba(200,160,100,0.65)"):cu(e,l,c,Lt.npc,"#f8d0a0")}if(this.companion){const{mx:o,my:l}=this._worldToMap(this.companion.mesh.position.x,this.companion.mesh.position.z),c=6+Math.sin(this._pulse)*2;ri(e,o,l,c,"rgba(96,232,216,0.22)"),cu(e,o,l,Lt.companion,"#c0fff8"),e.strokeStyle=Lt.companion,e.lineWidth=1.5,e.beginPath(),e.arc(o,l,c,0,Math.PI*2),e.stroke()}for(const{item:o,dist:l}of this.nearbyInteractables){const c=qM(o);if(!c)continue;const{mx:h,my:u}=this._worldToMap(c.x,c.z),d=YM(o),f=1-Math.min(l/20,.75),m=8+Math.sin(this._pulse+l)*2.5*f,_=d.match(/#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})/i);if(_){const[,g,p,v]=_;ri(e,h,u,m,`rgba(${parseInt(g,16)},${parseInt(p,16)},${parseInt(v,16)},${.15+f*.2})`)}e.strokeStyle=d,e.lineWidth=2,e.beginPath(),e.arc(h,u,m,0,Math.PI*2),e.stroke(),WM(e,h,u,d,3.5)}if(this.player){const o=this.player.position,{mx:l,my:c}=this._worldToMap(o.x,o.z);ri(e,l,c,11,"rgba(74,144,232,0.22)"),e.fillStyle=Lt.player,e.strokeStyle="#ffffff",e.lineWidth=2.5,e.beginPath(),e.arc(l,c,6,0,Math.PI*2),e.fill(),e.stroke();const h=this.player.facing??0;e.fillStyle="#ffffff",e.beginPath(),e.moveTo(l+Math.sin(h)*11,c+Math.cos(h)*11),e.lineTo(l+Math.sin(h+2.5)*6,c+Math.cos(h+2.5)*6),e.lineTo(l+Math.sin(h-2.5)*6,c+Math.cos(h-2.5)*6),e.closePath(),e.fill()}e.restore(),e.strokeStyle="rgba(255,255,255,0.95)",e.lineWidth=3,e.beginPath(),e.arc(t/2,t/2,t/2-2,0,Math.PI*2),e.stroke(),e.strokeStyle="rgba(80,180,160,0.55)",e.lineWidth=1.5,e.beginPath(),e.arc(t/2,t/2,t/2-6,0,Math.PI*2),e.stroke()}}const Ao=[{min:85,name:"joyful",emoji:"😄",expression:"happy",color:"#f0c030"},{min:65,name:"happy",emoji:"😊",expression:"happy",color:"#80d080"},{min:45,name:"content",emoji:"🙂",expression:null,color:"#60b8d8"},{min:25,name:"tired",emoji:"😐",expression:"thinking",color:"#a0a0b8"},{min:0,name:"sad",emoji:"😢",expression:"thinking",color:"#8070c0"}],oa=55,uu=.4,JM=4;class ZM{constructor(){this.score=60,this._driftTimer=0,this._prevMoodName="content",this._floatEl=null,this._floatTimeout=null}getMood(){for(const e of Ao)if(this.score>=e.min)return e;return Ao[Ao.length-1]}boost(e,t=null){const n=this.getMood().name;this.score=Math.min(100,this.score+e);const i=this.getMood();return(i.name!==n||t)&&this._triggerFloat(i.emoji,t,i.color),i}drain(e){return this.score=Math.max(0,this.score-e),this.getMood()}update(e){return this._driftTimer+=e,this._driftTimer>=JM&&(this._driftTimer=0,this.score>oa?this.score=Math.max(oa,this.score-uu):this.score<oa&&(this.score=Math.min(oa,this.score+uu*.5))),this.getMood()}setFloatContainer(e){this._floatEl=e}_triggerFloat(e,t,n){if(!this._floatEl)return;clearTimeout(this._floatTimeout);const i=t?`${e} ${t}`:e;this._floatEl.textContent=i,this._floatEl.style.color=n??"#f0e060",this._floatEl.classList.remove("mood-float-active"),this._floatEl.offsetWidth,this._floatEl.classList.add("mood-float-active"),this._floatTimeout=setTimeout(()=>{this._floatEl.classList.remove("mood-float-active")},2e3)}getPercent(){return this.score}}const QM={morning:"Morning",day:"Daytime",evening:"Evening",night:"Night"},ai=[{hour:0,sky:1714240,fog:1714240,hemiSky:3359846,hemiGround:1714224,sun:6719675,sunI:.12,ambient:2241348,ambientI:.35,exposure:.72},{hour:5,sky:4876424,fog:5929112,hemiSky:8952251,hemiGround:5927008,sun:16756864,sunI:.28,ambient:13152416,ambientI:.38,exposure:.88},{hour:8,sky:9556936,fog:9556936,hemiSky:9946589,hemiGround:9556936,sun:16774376,sunI:.65,ambient:15261145,ambientI:.45,exposure:1.08},{hour:12,sky:10016976,fog:10016976,hemiSky:10541296,hemiGround:9357480,sun:16775408,sunI:.72,ambient:15789288,ambientI:.48,exposure:1.12},{hour:17,sky:15251592,fog:14725264,hemiSky:15777936,hemiGround:13146232,sun:16746564,sunI:.48,ambient:15782064,ambientI:.42,exposure:.98},{hour:20,sky:3819624,fog:3819624,hemiSky:5596808,hemiGround:2766920,sun:8952268,sunI:.18,ambient:4478310,ambientI:.38,exposure:.78},{hour:24,sky:1714240,fog:1714240,hemiSky:3359846,hemiGround:1714224,sun:6719675,sunI:.12,ambient:2241348,ambientI:.35,exposure:.72}];function Qi(s,e,t){const n=new pe(s),i=new pe(e);return n.lerp(i,t).getHex()}function er(s,e,t){return s+(e-s)*t}function eb(s){let e=ai[0],t=ai[ai.length-1];for(let r=0;r<ai.length-1;r++)if(s>=ai[r].hour&&s<ai[r+1].hour){e=ai[r],t=ai[r+1];break}const n=t.hour-e.hour||1,i=kt.clamp((s-e.hour)/n,0,1);return{sky:Qi(e.sky,t.sky,i),fog:Qi(e.fog,t.fog,i),hemiSky:Qi(e.hemiSky,t.hemiSky,i),hemiGround:Qi(e.hemiGround,t.hemiGround,i),sun:Qi(e.sun,t.sun,i),sunI:er(e.sunI,t.sunI,i),ambient:Qi(e.ambient,t.ambient,i),ambientI:er(e.ambientI,t.ambientI,i),exposure:er(e.exposure,t.exposure,i)}}class tb{constructor(e,t){this.game=e,this.town=t,this.minutesPerSecond=1.5,this.timeMinutes=495,this.timeEl=document.getElementById("time-display"),this.periodEl=document.getElementById("period-display")}get hour24(){return Math.floor(this.timeMinutes/60)%24}get minute(){return Math.floor(this.timeMinutes%60)}get hourFloat(){return this.timeMinutes%1440/60}getPeriod(){const e=this.hour24;return e>=5&&e<11?"morning":e>=11&&e<17?"day":e>=17&&e<20?"evening":"night"}formatTime(){const e=this.hour24,t=this.minute,n=e>=12?"PM":"AM";return`${e%12||12}:${t.toString().padStart(2,"0")} ${n}`}update(e){this.timeMinutes=(this.timeMinutes+e*this.minutesPerSecond)%1440,this._applyLighting(),this._updateHUD()}_updateHUD(){if(this.timeEl&&(this.timeEl.textContent=this.formatTime()),this.periodEl){const e=this.getPeriod();this.periodEl.textContent=QM[e],this.periodEl.dataset.period=e}}_applyLighting(){var o,l,c;const{scene:e,renderer:t}=this.game,n=(o=this.town)==null?void 0:o.lights;if(!e||!n)return;const i=this.hourFloat,r=eb(i);if(e.background.setHex(r.sky),e.fog&&e.fog.color.setHex(r.fog),n.hemi&&(n.hemi.color.setHex(r.hemiSky),n.hemi.groundColor.setHex(r.hemiGround),n.hemi.intensity=er(.9,1.35,r.sunI/.72)),n.sun){n.sun.color.setHex(r.sun),n.sun.intensity=r.sunI;const h=(i-6)/12*Math.PI,u=Math.max(.08,Math.sin(h)),d=((l=this.game.player)==null?void 0:l.position)??{x:0,z:-40};n.sun.position.set(d.x+14*Math.cos(h*.5),8+u*24,d.z+10+u*8)}n.ambient&&(n.ambient.color.setHex(r.ambient),n.ambient.intensity=r.ambientI),n.fill&&(n.fill.intensity=er(.22,.5,r.sunI/.72));const a=i<5||i>=20;(c=n.street)==null||c.forEach(h=>{h.intensity=a?.55:.22}),n.shrine&&(n.shrine.intensity=a?.45:.22),t&&(t.toneMappingExposure=r.exposure),this._updateSkyGradient(r)}_updateSkyGradient(e){var o,l;const t=(o=this.town)==null?void 0:o.skyCtx;if(!t||!((l=this.town)!=null&&l.skyTex))return;const n=new pe(e.hemiSky),i=new pe(e.sky),r=new pe(e.hemiGround),a=t.createLinearGradient(0,0,0,64);a.addColorStop(0,`#${n.getHexString()}`),a.addColorStop(.55,`#${i.getHexString()}`),a.addColorStop(1,`#${r.getHexString()}`),t.fillStyle=a,t.fillRect(0,0,1,64),this.town.skyTex.needsUpdate=!0}}const Bd=80,nb=[{id:"mochi",name:"Mochi",nameJa:"もち",species:"cat",emoji:"🐱",personality:"friendly",startT:.06,side:1,offset:3.2,petGain:15,sitGain:8,shooLoss:10,reactions:{pet:{happy:"Mochi purrs and rubs against your leg.",shy:"Mochi leans in cautiously.",skittish:"Mochi tolerates one pat."},sit:{happy:"Mochi curls up nearby.",shy:"Mochi watches from a safe distance.",skittish:"Mochi hops a little closer."},shoo:{happy:"Mochi looks confused but stays.",shy:"Mochi backs away.",skittish:"Mochi darts behind the bench!"},friend:"Mochi wants to follow you everywhere!"}},{id:"taro",name:"Taro",nameJa:"太郎",species:"shiba",emoji:"🐕",personality:"friendly",startT:.52,side:-1,offset:3,petGain:15,sitGain:10,shooLoss:15,reactions:{pet:{happy:"Taro wags his whole body!",shy:"Taro sniffs your hand.",skittish:"Taro yips once."},sit:{happy:"Taro sits proudly beside you.",shy:"Taro circles once, then rests.",skittish:"Taro keeps one eye on you."},shoo:{happy:"Taro whines softly.",shy:"Taro retreats to the stall.",skittish:"Taro hides under the awning!"},friend:"Taro is your loyal walking buddy now!"}},{id:"snow",name:"Snow",nameJa:"雪ちゃん",species:"rabbit",emoji:"🐰",personality:"shy",startT:.78,side:1,offset:4,petGain:5,sitGain:12,shooLoss:25,reactions:{pet:{happy:"Snow's nose twitches happily.",shy:"Snow flinches, then relaxes.",skittish:"Snow hops away a step."},sit:{happy:"Snow inches closer.",shy:"Snow appreciates the quiet company.",skittish:"Snow peeks from the grass."},shoo:{happy:"Snow hops off quickly.",shy:"Snow vanishes into the bushes!",skittish:"Snow is gone in a white blur!"},friend:"Snow trusts you enough to hop along!"}},{id:"kitsune",name:"Kitsune",nameJa:"きつね",species:"fox",emoji:"🦊",personality:"shy",startT:.64,side:-1,offset:5.5,petGain:6,sitGain:10,shooLoss:20,reactions:{pet:{happy:"Kitsune's tail swishes.",shy:"Kitsune watches with golden eyes.",skittish:"Kitsune steps back."},sit:{happy:"Kitsune settles on the stone steps.",shy:"Kitsune sits at a respectful distance.",skittish:"Kitsune hides behind the torii post."},shoo:{happy:"Kitsune trots toward the shrine.",shy:"Kitsune disappears behind the gate.",skittish:"Kitsune vanishes like a spirit!"},friend:"Kitsune pads quietly at your side."}},{id:"pippo",name:"Pippo",nameJa:"ピッポ",species:"duck",emoji:"🦆",personality:"friendly",startT:.94,side:-1,offset:3.5,petGain:12,sitGain:6,shooLoss:8,reactions:{pet:{happy:"Pippo quacks contentedly.",shy:"Pippo waddles in a circle.",skittish:"Pippo ruffles feathers."},sit:{happy:"Pippo floats near the dock.",shy:"Pippo preens on the pier.",skittish:"Pippo paddles away slowly."},shoo:{happy:"Pippo quacks and swims off.",shy:"Pippo dives underwater.",skittish:"Pippo flees to open water!"},friend:"Pippo waddles behind you on land!"}},{id:"maru",name:"Maru",nameJa:"まる",species:"cat",emoji:"🐈",personality:"skittish",startT:.36,side:1,offset:3.8,petGain:3,sitGain:8,shooLoss:30,reactions:{pet:{happy:"Maru tolerates exactly one pat.",shy:"Maru stiffens, then melts.",skittish:"Maru's tail puffs up!"},sit:{happy:"Maru watches from the wall.",shy:"Maru creeps a little closer.",skittish:"Maru stays on the wall, alert."},shoo:{happy:"Maru leaps to the roof.",shy:"Maru is already gone.",skittish:"Maru vanishes over the wall!"},friend:"Maru deigns to walk with you. Honor."}},{id:"buta",name:"Buta",nameJa:"ぶた",species:"pig",emoji:"🐷",personality:"friendly",startT:.42,side:-1,offset:3.5,petGain:14,sitGain:9,shooLoss:12,reactions:{pet:{happy:"Buta oinks happily and rolls over.",shy:"Buta snorts curiously.",skittish:"Buta backs up one step."},sit:{happy:"Buta flops down contentedly.",shy:"Buta roots at the grass.",skittish:"Buta watches from the shade."},shoo:{happy:"Buta trots to the next garden.",shy:"Buta disappears behind a stall.",skittish:"Buta squeals and runs!"},friend:"Buta waddles along beside you!"}},{id:"piko",name:"Piko",nameJa:"ピコ",species:"parrot",emoji:"🦜",personality:"friendly",startT:.3,side:1,offset:4.2,petGain:10,sitGain:7,shooLoss:10,reactions:{pet:{happy:"Piko chirps and bobs its head.",shy:"Piko tilts its head at you.",skittish:"Piko ruffles its feathers."},sit:{happy:"Piko perches on the shop sign.",shy:"Piko hops to a low branch.",skittish:"Piko flies to the roof."},shoo:{happy:"Piko squawks and flutters away.",shy:"Piko glides to the next awning.",skittish:"Piko vanishes into the trees!"},friend:"Piko hops along from sign to sign, following you!"}},{id:"quack",name:"Quack",nameJa:"ガー",species:"duck",emoji:"🦆",personality:"friendly",pathId:"riverside",startT:.2,side:1,offset:1.5,petGain:14,sitGain:6,shooLoss:8,reactions:{pet:{happy:"Quack waddles in circles happily.",shy:"Quack tilts its head.",skittish:"Quack flaps once."},sit:{happy:"Quack floats near the lily pads.",shy:"Quack preens on the bank.",skittish:"Quack paddles away slowly."},shoo:{happy:"Quack quacks and swims downstream.",shy:"Quack dives under.",skittish:"Quack flees to open water!"},friend:"Quack waddles along the riverbank behind you!"}},{id:"paddle",name:"Paddle",nameJa:"パドル",species:"duck",emoji:"🦆",personality:"shy",pathId:"riverside",startT:.7,side:-1,offset:1.2,petGain:8,sitGain:10,shooLoss:15,reactions:{pet:{happy:"Paddle nibbles your fingers gently.",shy:"Paddle inches closer.",skittish:"Paddle hops back."},sit:{happy:"Paddle rests on a lily pad.",shy:"Paddle watches from the reeds.",skittish:"Paddle hides in the grass."},shoo:{happy:"Paddle swims to the bridge.",shy:"Paddle disappears downstream.",skittish:"Paddle vanishes in a splash!"},friend:"Paddle follows you along the river path!"}},{id:"heron",name:"Heron",nameJa:"サギ",species:"parrot",emoji:"🦢",personality:"shy",pathId:"riverside",startT:.85,side:1,offset:1,petGain:5,sitGain:12,shooLoss:22,reactions:{pet:{happy:"Heron stands perfectly still, then bows.",shy:"Heron watches with one golden eye.",skittish:"Heron spreads its wings and lifts off."},sit:{happy:"Heron stands sentinel on the bridge railing.",shy:"Heron waits in the shallows.",skittish:"Heron flies to the far bank."},shoo:{happy:"Heron glides downstream gracefully.",shy:"Heron vanishes into the reeds.",skittish:"Heron takes flight with a great flap!"},friend:"Heron stalks along beside you, dignified and calm."}},{id:"chip",name:"Chip",nameJa:"チップ",species:"rabbit",emoji:"🐿️",personality:"skittish",pathId:"grove",startT:.6,side:1,offset:2,petGain:4,sitGain:10,shooLoss:25,reactions:{pet:{happy:"Chip's nose twitches rapidly.",shy:"Chip freezes, then relaxes.",skittish:"Chip darts behind a mushroom!"},sit:{happy:"Chip nibbles near the picnic blanket.",shy:"Chip peeks from behind a tree.",skittish:"Chip watches from the bushes."},shoo:{happy:"Chip scampers up a cherry tree.",shy:"Chip vanishes into the grove.",skittish:"Chip is gone in a brown blur!"},friend:"Chip hops along the grove path, stopping to sniff everything!"}}];let va=null;function ib(s){va=s}const sb={cat:{key:"animal_cat",tint:15759400,tintStrength:.55},shiba:{key:"animal_dog",tint:15241280,tintStrength:.5},rabbit:{key:"animal_bunny",tint:13674728,tintStrength:.45},fox:{key:"animal_fox",tint:14701840,tintStrength:.6},duck:{key:"animal_duck",tint:16306208,tintStrength:.6},pig:{key:"animal_pig",tint:15765688,tintStrength:.55},parrot:{key:"animal_parrot",tint:1624200,tintStrength:.55}};function _r(s,e={x:1.2,y:.8,z:1.2}){const t=new ne(new me(e.x,e.y,e.z),new dt({transparent:!0,opacity:0,depthWrite:!1}));return t.position.y=e.y/2,t.userData.isHitArea=!0,s.add(t),t}function xr(s,{cx:e,cy:t,cz:n=0,spread:i=.042,size:r=.02,pupilColor:a=1118498,irisColor:o=3170472}={}){const l=new dt({color:a}),c=new dt({color:o}),h=new dt({color:16777215});[-i,i].forEach(u=>{const d=new ne(new At(r*1.15,8),c);d.position.set(e+.001,t,n+u),d.rotation.y=-Math.PI/2,s.add(d);const f=new ne(new At(r*.72,8),l);f.position.set(e+.002,t,n+u),f.rotation.y=-Math.PI/2,s.add(f);const m=new ne(new At(r*.3,6),h);m.position.set(e+.003,t+r*.45,n+u+r*.3),m.rotation.y=-Math.PI/2,s.add(m)})}function Ia(s,e,t,n,i=14509696,r=.013){const a=new dt({color:i}),o=new ne(new Fe(r,7,5),a);o.scale.set(1.3,.85,.8),o.position.set(e,t,n),s.add(o)}function Pa(s,e,t,n,i=1){const r=new dt({color:1705992});[[-.022*i,-.006*i],[.022*i,-.006*i]].forEach(([a,o])=>{const l=new ne(new Fe(.007*i,5,4),r);l.position.set(e,t+o,n+a),s.add(l)})}function rb(s,e,t,n,i=3){const r=new dt({color:8947848,transparent:!0,opacity:.7});for(let a=0;a<i;a++){const o=(a-1)*.012;[-1,1].forEach(l=>{const c=new ne(new me(.075,.003,.003),r);c.position.set(e,t+o,n+l*.015),c.rotation.y=l*.15,s.add(c)})}}function gc(s,e,t,n,i=16755387){const r=new ne(new Kt(.016,.038,3),new dt({color:i}));r.position.set(e,t,n),s.add(r)}function ab(s,e,t,n,i,r=.032){const a=ee(new Fe(r,7,5),H(i));a.scale.set(1.1,.55,.95),a.position.set(e,t,n),s.add(a)}function ys(s,e,t,n,i,r=.07,a=null){const o=ee(new Ge(.025,.028,r,6),H(i));o.position.set(e,t+r/2,n),s.add(o),ab(s,e,t,n,a??i)}function kl(s=15769664){const e=new Re,t=H(s),n=H(16773344),i=ee(new Fe(.13,10,8),t);i.scale.set(1.25,.78,1.05),i.position.y=.14,e.add(i);const r=new ne(new Fe(.075,8,6),n);r.scale.set(.85,.6,.6),r.position.set(.09,.14,0),e.add(r);const a=ee(new Fe(.1,10,8),t);a.position.set(.16,.215,0),e.add(a),[[-.038,.038],[.038,.038]].forEach(([f,m])=>{const _=ee(new Kt(.033,.068,3),t);_.position.set(.2,.315+m*.2,f),_.rotation.x=f<0?-.1:.1,e.add(_),gc(e,.201,.318+m*.2,f,16751035)});const o=.255,l=.22,c=0;xr(e,{cx:o,cy:l+.008,cz:c,spread:.038,size:.021,irisColor:2789472}),Ia(e,o+.003,l-.022,c,15628185,.014),Pa(e,o+.001,l-.038,c,.9),rb(e,o-.01,l-.02,c,3);const h=ee(new Ge(.018,.03,.24,6),t);h.position.set(-.16,.18,0),h.rotation.z=.75,e.userData.tail=h,e.add(h);const u=ee(new Fe(.032,7,5),n);u.position.set(-.265,.285,0),e.add(u);const d=s;return[[-.055,0],[.055,0],[-.04,.09],[.04,.09]].forEach(([f,m])=>{ys(e,.07+m,.02,f,d,.065)}),_r(e,{x:1.3,y:.75,z:1.3}),e}function ob(){const s=new Re,e=H(15245392),t=H(16773328),n=ee(new Fe(.15,10,8),e);n.scale.set(1.32,.88,1.1),n.position.y=.15,s.add(n);const i=new ne(new Fe(.09,8,6),t);i.scale.set(.75,.7,.55),i.position.set(.11,.17,0),s.add(i);const r=ee(new Fe(.12,10,8),e);r.position.set(.18,.24,0),s.add(r),[[-.048,0],[.048,0]].forEach(([h])=>{const u=ee(new Kt(.034,.075,3),e);u.position.set(.22,.35,h),u.rotation.x=h<0?-.15:.15,s.add(u),gc(s,.221,.352,h,16764074)});const a=ee(new Fe(.055,8,6),t);a.scale.set(1,.75,.85),a.position.set(.295,.22,0),s.add(a),xr(s,{cx:.35-.04,cy:.255,cz:0,spread:.046,size:.024,irisColor:5910544}),Ia(s,.346,.22,0,1710618,.018),Pa(s,.34,.202,0,1.1);const c=ee(new di(.075,.025,6,10,Math.PI*1.4),e);return c.position.set(-.14,.32,0),c.rotation.set(.4,0,1.6),s.userData.tail=c,s.add(c),[[-.065,0],[.065,0],[-.05,.1],[.05,.1]].forEach(([h,u])=>{ys(s,.08+u,.02,h,15245392,.08,15245392)}),_r(s,{x:1.45,y:.8,z:1.45}),s}function lb(){const s=new Re,e=H(16119285);H(16764125);const t=ee(new Fe(.11,10,8),e);t.scale.set(1.1,1.05,1),t.position.y=.12,s.add(t);const n=ee(new Fe(.1,10,8),e);n.position.set(.12,.23,0),s.add(n),[[-.036,0],[.036,0]].forEach(([o])=>{const l=ee(new Ge(.022,.026,.18,8),e);l.position.set(.11,.42,o),s.add(l);const c=ee(new Fe(.022,7,5),e);c.position.set(.11,.51,o),s.add(c);const h=new ne(new Ge(.012,.014,.14,6),H(16759756));h.position.set(.112,.42,o),s.add(h)});const i=.215,r=.24;xr(s,{cx:i,cy:r+.005,cz:0,spread:.036,size:.026,irisColor:13382468,pupilColor:4456465}),Ia(s,i+.005,r-.018,0,16755404,.013),Pa(s,i,r-.032,0,.85);const a=ee(new Fe(.038,8,6),e);return a.position.set(-.12,.16,0),s.add(a),s.userData.tail=a,[[-.04,0],[.04,0]].forEach(([o])=>{ys(s,.05,.02,o,16119285,.07)}),[[-.045,-.06],[.045,-.06]].forEach(([o,l])=>{ys(s,l,.02,o,16119285,.085,16119285)}),_r(s,{x:1.05,y:.7,z:1.05}),s}function cb(){const s=new Re,e=H(15233088),t=H(16117992);H(2759184);const n=ee(new Fe(.12,10,8),e);n.scale.set(1.22,.8,1.05),n.position.y=.13,s.add(n);const i=new ne(new Fe(.065,8,6),t);i.scale.set(.7,.7,.5),i.position.set(.1,.14,0),s.add(i);const r=ee(new Fe(.1,10,8),e);r.position.set(.15,.2,0),s.add(r),[[-.04,0],[.04,0]].forEach(([u])=>{const d=ee(new Kt(.03,.072,3),e);d.position.set(.19,.32,u),d.rotation.x=u<0?-.2:.2,s.add(d),gc(s,.191,.322,u,16755370)});const a=new ne(new Fe(.05,8,6),t);a.scale.set(1.1,.7,.75),a.position.set(.245,.195,0),s.add(a);const o=.248,l=.205;xr(s,{cx:o-.025,cy:l+.01,cz:0,spread:.04,size:.022,irisColor:13666352,pupilColor:1705984}),Ia(s,.255,l-.015,0,1710618,.016),Pa(s,.252,l-.03,0,.9),[[-.05,0],[.05,0]].forEach(([u])=>{ys(s,.07,.02,u,15233088,.065,2759184)}),[[-.04,-.06],[.04,-.06]].forEach(([u,d])=>{ys(s,d,.02,u,15233088,.065,2759184)});const c=ee(new Ge(.04,.055,.22,7),e);c.position.set(-.14,.15,0),c.rotation.z=1,s.userData.tail=c,s.add(c);const h=ee(new Fe(.06,8,6),t);return h.position.set(-.26,.23,0),s.add(h),_r(s,{x:1.3,y:.75,z:1.3}),s}function du(){const s=new Re,e=H(15786064),t=H(15759392),n=ee(new Fe(.12,10,8),e);n.scale.set(1.22,.95,1.12),n.position.y=.13,s.add(n),[-1,1].forEach(h=>{const u=ee(new Fe(.065,8,6),e);u.scale.set(.75,.55,.4),u.position.set(-.03,.17,h*.13),s.add(u)});const i=ee(new Fe(.085,10,8),e);i.position.set(.155,.23,0),s.add(i);const r=ee(new me(.075,.022,.06),t);r.position.set(.238,.225,0),s.add(r);const a=ee(new me(.065,.016,.054),t);a.position.set(.238,.208,0),s.add(a),xr(s,{cx:.235-.022,cy:.25,cz:0,spread:.036,size:.02,irisColor:1718810,pupilColor:1118481});const c=ee(new Kt(.04,.07,4),e);return c.position.set(-.155,.21,0),c.rotation.z=-Math.PI/2+.4,s.userData.tail=c,s.add(c),[[-.04,0],[.04,0]].forEach(([h])=>{const u=ee(new me(.065,.014,.05),t);u.position.set(.06,.015,h),s.add(u)}),_r(s,{x:1.2,y:.7,z:1.2}),s}const hb={cat:kl,shiba:ob,rabbit:lb,fox:cb,duck:du,pig:kl,parrot:du};function ub(s,e){const t=sb[s];if(t){const a=va==null?void 0:va.createInstance(t.key,{tint:t.tint??null,tintStrength:t.tintStrength??0});if(a){const o=new Re;return o.add(a),o.userData.isLoadedModel=!0,o}}const i=(hb[s]??kl)(e);i.rotation.y=-Math.PI/2;const r=new Re;return r.add(i),r.userData.tail=i.userData.tail,r}const db={cat:{bg:"rgba(40,18,28,0.82)",border:"#d06888",text:"#f8d0dc"},shiba:{bg:"rgba(40,28,10,0.82)",border:"#c88040",text:"#f8ddb0"},rabbit:{bg:"rgba(30,18,40,0.82)",border:"#aa70c8",text:"#e8c8f8"},fox:{bg:"rgba(42,20,10,0.82)",border:"#d06030",text:"#f8ccb0"},duck:{bg:"rgba(34,30,10,0.82)",border:"#c8a820",text:"#f0e890"},pig:{bg:"rgba(40,18,28,0.82)",border:"#e080a0",text:"#f8d0e0"},parrot:{bg:"rgba(18,34,28,0.82)",border:"#40b880",text:"#c8f8e0"}};function fb(s,e,t="cat"){const r=document.createElement("canvas");r.width=160,r.height=46;const a=r.getContext("2d"),o=db[t]??{bg:"rgba(18,26,34,0.82)",border:"#5ababa",text:"#e8f4f4"},l=12;a.fillStyle=o.bg,a.strokeStyle=o.border,a.lineWidth=2.5,a.beginPath(),a.moveTo(l,2),a.lineTo(160-l,2),a.quadraticCurveTo(158,2,158,l),a.lineTo(158,46-l),a.quadraticCurveTo(158,44,160-l,44),a.lineTo(l,44),a.quadraticCurveTo(2,44,2,46-l),a.lineTo(2,l),a.quadraticCurveTo(2,2,l,2),a.closePath(),a.fill(),a.stroke(),a.fillStyle=o.text,a.font="bold 15px sans-serif",a.textAlign="center",a.textBaseline="middle",a.fillText(`${s} ${e}`,160/2,46/2);const c=new Dt(r),h=new Rn(new wn({map:c,transparent:!0}));return h.position.y=.6,h.scale.set(1.1,.32,1),h}let la=null;function pb(){if(la)return la;const s=document.createElement("canvas");s.width=32,s.height=32;const e=s.getContext("2d");return e.fillStyle="#ff4488",e.beginPath(),e.arc(10,11,8,0,Math.PI*2),e.arc(22,11,8,0,Math.PI*2),e.fill(),e.beginPath(),e.moveTo(2,15),e.lineTo(16,29),e.lineTo(30,15),e.fill(),la=new Dt(s),la}const Co=1.8,fu=.7,Gs=.02;class mb{constructor(e,t,n){this.type="animal",this.path=t,this.definition=n,this.affinity=0,this.isPetCompanion=!1,this.state="idle",this.idlePhase=Math.random()*Math.PI*2,this.walkPhase=0,this.scaredTimer=0,this.followSpeed=3,this.range=5,this.wanderAngle=Math.random()*Math.PI*2,this.wanderTimer=Math.random()*3,this.isMoving=!1,this.mesh=ub(n.species);const i=fb(n.emoji,n.name,n.species);this.mesh.userData.isLoadedModel?i.position.y=.85:(this.mesh.scale.setScalar(3.5),i.scale.divideScalar(3.5)),this.mesh.add(i),this.nameLabel=i,e.add(this.mesh),this._placeOnPath(),this.homePos=this.mesh.position.clone(),this.homeFacing=this.mesh.rotation.y,this.heartParticles=[],this.mesh.userData.interactable=this,this.mesh.traverse(r=>{r.userData.interactable=this})}spawnHearts(e=4,t="#ff4488"){const n=pb();for(let i=0;i<e;i++){const r=new wn({map:n,transparent:!0,opacity:1,color:t}),a=new Rn(r);a.scale.set(.18,.18,1),a.position.set((Math.random()-.5)*.25,.35+Math.random()*.1,(Math.random()-.5)*.2),a.userData.vy=.012+Math.random()*.01,a.userData.vx=(Math.random()-.5)*.006,a.userData.life=1,this.mesh.add(a),this.heartParticles.push(a)}}_placeOnPath(){const e=this.path.getPointAt(this.definition.startT),t=this.path.getTangentAt(this.definition.startT),n=new T(-t.z,0,t.x).multiplyScalar(this.definition.side??1);this.mesh.position.copy(e).add(n.multiplyScalar(this.definition.offset??3)),this.mesh.position.y=.02,this.mesh.rotation.y=Math.atan2(t.x,t.z)}get profile(){return this.definition}getHitTargets(){return[this.mesh]}distanceTo(e){const t=this.mesh.position.x-e.x,n=this.mesh.position.z-e.z;return Math.hypot(t,n)}canInteract(e){return this.distanceTo(e)<=this.range}interact(e){var t;(t=e.petUI)==null||t.show(this)}addAffinity(e){return this.affinity=Math.max(0,Math.min(100,this.affinity+e)),this.affinity}isFriend(){return this.affinity>=Bd}getReaction(e){var n,i,r;const t=this.definition.personality;return((i=(n=this.definition.reactions)==null?void 0:n[e])==null?void 0:i[t])??((r=this.definition.reactions)==null?void 0:r[e])??""}startFollowing(){this.state="following",this.isPetCompanion=!0,this.nameLabel&&(this.nameLabel.visible=!1)}stopFollowing(e=!0){this.state="idle",this.isPetCompanion=!1,this.nameLabel&&(this.nameLabel.visible=!0),e&&(this.mesh.position.copy(this.homePos),this.mesh.rotation.y=this.homeFacing)}scare(e=1.5){this.scaredTimer=e,this.state="scared"}applyAction(e){var i;const t=this.definition;let n=0;return e==="pet"?n=t.petGain??5:e==="sit"?n=t.sitGain??8:e==="shoo"&&(n=-(t.shooLoss??15)),this.addAffinity(n),e==="shoo"&&this.scare(2),{affinity:this.affinity,message:this.getReaction(e),isFriend:this.isFriend(),friendMessage:(i=this.definition.reactions)==null?void 0:i.friend}}update(e,t=null,n=0){for(let c=this.heartParticles.length-1;c>=0;c--){const h=this.heartParticles[c];h.userData.life-=e,h.position.y+=h.userData.vy,h.position.x+=h.userData.vx,h.material.opacity=Math.max(0,h.userData.life),h.scale.setScalar(.18*(.5+h.userData.life*.7)),h.userData.life<=0&&(this.mesh.remove(h),this.heartParticles.splice(c,1))}if(this.scaredTimer>0){this.scaredTimer-=e,this.idlePhase+=e*8,this.mesh.position.x=this.homePos.x+Math.sin(this.idlePhase*3)*.15,this.mesh.position.y=Gs,this.scaredTimer<=0&&(this.state=this.isPetCompanion?"following":"idle");return}if(this.state==="following"&&t){const c=Math.sin(n),h=Math.cos(n),u=t.x-c*2.2,d=t.z-h*2.2;this._followTarget?(this._followTarget.x+=(u-this._followTarget.x)*Math.min(1,e*4),this._followTarget.z+=(d-this._followTarget.z)*Math.min(1,e*4)):this._followTarget=new T(u,0,d);const f=this._followTarget.x-this.mesh.position.x,m=this._followTarget.z-this.mesh.position.z,_=Math.hypot(f,m);if(_>.8){const g=Math.min(this.followSpeed*e,_-.8);this.mesh.position.x+=f/_*g,this.mesh.position.z+=m/_*g;const v=(Math.atan2(f,m)-this.mesh.rotation.y+Math.PI*3)%(Math.PI*2)-Math.PI;this.mesh.rotation.y+=v*Math.min(1,e*8),this.walkPhase+=e*this.followSpeed*4,this.mesh.position.y=Gs+Math.abs(Math.sin(this.walkPhase))*.05}else{const g=(n-this.mesh.rotation.y+Math.PI*3)%(Math.PI*2)-Math.PI;this.mesh.rotation.y+=g*Math.min(1,e*4),this.mesh.position.y=Gs}this._animateTail(e,_>.8?6:2.5);return}if(this.wanderTimer-=e,this.wanderTimer<=0){const c=this.homePos.x-this.mesh.position.x,h=this.homePos.z-this.mesh.position.z;Math.hypot(c,h)>Co*.75?this.wanderAngle=Math.atan2(c,h):this.wanderAngle+=(Math.random()-.5)*2,this.wanderTimer=2+Math.random()*3}const i=this.homePos.x+Math.sin(this.wanderAngle)*Co,r=this.homePos.z+Math.cos(this.wanderAngle)*Co,a=i-this.mesh.position.x,o=r-this.mesh.position.z,l=Math.hypot(a,o);if(l>.25){const c=Math.min(fu*e,l);this.mesh.position.x+=a/l*c,this.mesh.position.z+=o/l*c,this.mesh.rotation.y=Math.atan2(a,o),this.walkPhase+=e*fu*4,this.mesh.position.y=Gs+Math.abs(Math.sin(this.walkPhase))*.035,this.isMoving=!0}else if(this.idlePhase+=e*1.8,this.mesh.position.y=Gs+Math.sin(this.idlePhase)*.008,this.isMoving=!1,t&&this.distanceTo(t)<6){const c=t.x-this.mesh.position.x,h=t.z-this.mesh.position.z;Math.hypot(c,h)>.1&&(this.mesh.rotation.y=Math.atan2(c,h))}this._animateTail(e,this.isMoving?4.5:2.5)}_animateTail(e,t=3){var i;const n=(i=this.mesh.userData)==null?void 0:i.tail;n&&(this.idlePhase+=e*t,n.userData.baseRotZ===void 0&&(n.userData.baseRotZ=n.rotation.z),n.rotation.z=n.userData.baseRotZ+Math.sin(this.idlePhase)*.35)}}const pu=["大吉 · Great Fortune! The road ahead is bright.","吉 · Good Luck. Keep walking forward.","中吉 · Moderate Fortune. Steady steps bring reward.","小吉 · Small Fortune. Good things come quietly.","末吉 · Future Fortune. Patience will be rewarded.","凶 · Misfortune today. Tomorrow holds new hope."];function mu(){return pu[Math.floor(Math.random()*pu.length)]}const dr={cherry_tree:{id:"cherry_tree",label:"Cherry tree",range:4,actions:{admire:{message:"🌸 Pink petals drift down. For a moment, nothing else matters.",journal:{title:"Cherry Blossom Moment",body:"Petals fall without hurry. The tree teaches patience."}}}},shrine_tree:{id:"shrine_tree",label:"Shrine tree",range:4.5,actions:{listen:{message:"🌿 Wind rustles the leaves. Even the birds seem to whisper here."}}},shrine:{id:"shrine",label:"Shrine",range:8,hitRadius:2.8},torii:{id:"torii",label:"Torii gate",range:5,hitRadius:1.6,tokenCost:1},vending:{id:"vending",label:"Vending Machine",shopId:"vending",range:3,hitRadius:.6}};function gb(s=1.2,e=2){const t=new ne(new Ge(s,s,e,8),new dt({transparent:!0,opacity:0,depthWrite:!1}));return t.position.y=e/2,t}class yr{constructor(e,t,n,i=0){this.type="prop",this.definition=t,this.range=t.range??3.5,this.mesh=new Re,this.mesh.position.copy(n),this.mesh.rotation.y=i,this.hitVolume=gb(t.hitRadius??1.2),this.mesh.add(this.hitVolume),this.mesh.userData.interactable=this,this.hitVolume.userData.interactable=this,e.add(this.mesh)}getHitTargets(){return[this.hitVolume]}distanceTo(e){const t=this.mesh.position.x-e.x,n=this.mesh.position.z-e.z;return Math.hypot(t,n)}canInteract(e){return this.distanceTo(e)<=this.range}interact(e){var r,a,o,l,c,h,u,d,f,m,_,g,p,v,y,x,I,A,E,R,b;const t=this.definition;if(t.shopId){(r=e.game)==null||r.openShop(t.shopId);return}if(t.id==="shrine"){const M=mu();(a=e.dialogue)==null||a._showToast(`⛩️ ${M}`),(l=(o=e.dialogue)==null?void 0:o.addJournalEntry)==null||l.call(o,"御神籤 · Fortune",M,"神社 · Shrine"),(h=(c=e.game)==null?void 0:c.mood)==null||h.boost(18,"Blessed ⛩️"),(d=(u=e.game)==null?void 0:u._updateMoodHUD)==null||d.call(u);return}if(t.id==="torii"){const M=t.tokenCost??1;if(!((f=e.game)!=null&&f.spendOfferingToken(M))){(m=e.dialogue)==null||m._showToast("🪙 No offering tokens left. Rest and try again tomorrow.");return}const P=mu();(_=e.dialogue)==null||_._showToast(`🪙⛩️ ${P}`),(p=(g=e.dialogue)==null?void 0:g.addJournalEntry)==null||p.call(g,"参拝 · Prayer",P,"鳥居 · Torii Gate"),(y=(v=e.game)==null?void 0:v.mood)==null||y.boost(14,"Peaceful prayer"),(I=(x=e.game)==null?void 0:x._updateMoodHUD)==null||I.call(x);return}const n=t.defaultAction??"interact",i=(A=t.actions)==null?void 0:A[n];i&&((E=e.dialogue)==null||E._showToast(i.message),i.journal&&((b=(R=e.dialogue)==null?void 0:R.addJournalEntry)==null||b.call(R,i.journal.title,i.journal.body,t.label)))}}function _b(s,e,t="cherry_tree"){const n={...dr[t]??dr.cherry_tree,defaultAction:t==="shrine_tree"?"listen":"admire",hitRadius:1.8};return new yr(s,n,e,0)}function xb(s,e,t=0){const n={...dr.shrine};return new yr(s,n,e,t)}function yb(s,e,t=0){const n={...dr.torii};return new yr(s,n,e,t)}function vb(s,e,t,n,i){const r={id:`shop_${n}`,label:i,shopId:n,range:7,hitRadius:2.5};return new yr(s,r,e,t)}function Mb(s,e,t=0){const n={...dr.vending};return new yr(s,n,e,t)}const Od={bookshop:{id:"bookshop",label:"書店 文房 · Bunbou Books",emoji:"📚",items:[{id:"townMap",name:"町の地図",nameEn:"Town Map",price:200,emoji:"🗺️",desc:"A hand-drawn map of every alley."},{id:"novel",name:"小説",nameEn:"Novel",price:350,emoji:"📖",desc:"A quiet seaside tale.",reward:{type:"journal",title:"小説を読んだ",body:"A slow story about a lighthouse keeper. You feel calm."}},{id:"postcard",name:"ポストカード",nameEn:"Postcard Set",price:150,emoji:"💌",desc:"Cherry blossom illustrations."}]},ramen:{id:"ramen",label:"麺処 山田 · Yamada Ramen",emoji:"🍜",items:[{id:"ramen",name:"ラーメン",nameEn:"Ramen Bowl",price:800,emoji:"🍜",desc:"Rich tonkotsu broth. Gives a short speed boost!",reward:{type:"speedBoost",amount:1.6,duration:14,message:"🍜 Energy surges through you!"}},{id:"gyoza",name:"餃子",nameEn:"Gyoza",price:400,emoji:"🥟",desc:"Crispy pan-fried dumplings."},{id:"greentea",name:"緑茶",nameEn:"Green Tea",price:150,emoji:"🍵",desc:"A calming cup."}]},florist:{id:"florist",label:"花屋 はな · Hana Florist",emoji:"🌸",items:[{id:"sakura",name:"桜の花束",nameEn:"Sakura Bouquet",price:600,emoji:"🌸",desc:"Delicate cherry blossoms."},{id:"wildflowers",name:"野花",nameEn:"Wildflowers",price:300,emoji:"💐",desc:"A mix of local wildflowers."},{id:"potplant",name:"観葉植物",nameEn:"Potted Plant",price:480,emoji:"🪴",desc:"A small fern to carry home."}]},cafe:{id:"cafe",label:"喫茶 木漏れ · Komorebi Cafe",emoji:"☕",items:[{id:"matcha",name:"抹茶ラテ",nameEn:"Matcha Latte",price:550,emoji:"🍵",desc:"Velvety and sweet."},{id:"coffee",name:"コーヒー",nameEn:"Coffee",price:450,emoji:"☕",desc:"A smooth morning cup."},{id:"wagashi",name:"和菓子",nameEn:"Wagashi",price:300,emoji:"🍡",desc:"Traditional mochi sweets."}]},market:{id:"market",label:"朝市 · Morning Market",emoji:"🛒",items:[{id:"onigiri",name:"おにぎり",nameEn:"Onigiri",price:180,emoji:"🍙",desc:"Rice ball with pickled plum."},{id:"mikan",name:"みかん",nameEn:"Mikan Oranges",price:200,emoji:"🍊",desc:"Sweet local oranges."},{id:"yakitori",name:"焼き鳥",nameEn:"Yakitori",price:250,emoji:"🍢",desc:"Skewered grilled chicken."}]},fishmarket:{id:"fishmarket",label:"魚屋 水樹 · Mizuki Fish",emoji:"🐟",items:[{id:"taiyaki",name:"たい焼き",nameEn:"Taiyaki",price:250,emoji:"🐟",desc:"Fish-shaped cake with sweet bean."},{id:"ikayaki",name:"イカ焼き",nameEn:"Grilled Squid",price:350,emoji:"🦑",desc:"Fresh off the harbor grill."},{id:"kanikama",name:"蟹かまぼこ",nameEn:"Crab Stick",price:200,emoji:"🦀",desc:"Local catch from the bay."}]},vending:{id:"vending",label:"自動販売機 · Vending Machine",emoji:"🥤",items:[{id:"cola",name:"コーラ",nameEn:"Cola",price:120,emoji:"🥤",desc:"Ice-cold soda."},{id:"juice",name:"ジュース",nameEn:"Juice",price:120,emoji:"🧃",desc:"Sweet fruit juice."},{id:"water",name:"水",nameEn:"Water",price:80,emoji:"💧",desc:"Pure mineral water."}]},bakery:{id:"bakery",label:"パン屋 小麦 · Komugi Bakery",emoji:"🍞",items:[{id:"melonpan",name:"メロンパン",nameEn:"Melon Pan",price:280,emoji:"🍞",desc:"Crispy sweet bread with melon aroma."},{id:"anpan",name:"あんパン",nameEn:"Anpan",price:220,emoji:"🥐",desc:"Soft bun filled with sweet red bean."},{id:"currypan",name:"カレーパン",nameEn:"Curry Pan",price:300,emoji:"🥖",desc:"Fried bread stuffed with mild curry."}]},teahouse:{id:"teahouse",label:"茶屋 静 · Shizuka Tea House",emoji:"🍵",items:[{id:"sencha",name:"煎茶",nameEn:"Sencha",price:400,emoji:"🍵",desc:"Freshly whisked green tea."},{id:"hojicha",name:"ほうじ茶",nameEn:"Hojicha",price:380,emoji:"🍵",desc:"Roasted tea with a nutty warmth."},{id:"dango",name:"団子",nameEn:"Dango Set",price:350,emoji:"🍡",desc:"Three sweet rice dumplings on a stick."}]},konbini:{id:"konbini",label:"コンビニ · Mini Mart",emoji:"🏪",items:[{id:"onigiri2",name:"おにぎり",nameEn:"Onigiri",price:150,emoji:"🍙",desc:"Salmon rice ball, ready to go."},{id:"bento",name:"弁当",nameEn:"Bento Box",price:650,emoji:"🍱",desc:"Today's special lunch box."},{id:"pocky",name:"ポッキー",nameEn:"Pocky",price:180,emoji:"🍫",desc:"Chocolate-dipped biscuit sticks."}]},sweets:{id:"sweets",label:"和菓子 花 · Hana Sweets",emoji:"🍡",items:[{id:"mochi",name:"大福",nameEn:"Daifuku",price:320,emoji:"🍡",desc:"Soft mochi wrapped around sweet bean."},{id:"dorayaki",name:"どら焼き",nameEn:"Dorayaki",price:280,emoji:"🥞",desc:"Pancake sandwich with red bean filling."},{id:"sakura2",name:"桜餅",nameEn:"Sakura Mochi",price:380,emoji:"🌸",desc:"Pink rice cake wrapped in a cherry leaf."}]}},zd=1.2;function Ro(s){return Math.min(.97,Math.max(.03,s))}function bb(s,e){const t=s.x-e.x,n=s.z-e.z;return Math.hypot(t,n)}function Sb(s,e,t,n){const i=s.mesh.position;for(let r=0;r<t;r++)if(bb(i,e[r].mesh.position)<n)return!0;return!1}function wb(s){for(let e=0;e<s.length;e++){const t=s[e];for(let n=0;n<36&&Sb(t,s,e,zd);n++){const i=n%7;i===0?t.pathSide*=-1:i===1?t.pathOffset+=.45:i===2?t.pathOffset=Math.max(1.65,t.pathOffset-.4):i===3?t.t=Ro(t.t+.04):i===4?t.t=Ro(t.t-.04):i===5?t.t=Ro(t.t+.07):t.pathOffset+=.3,t._placeOnPath()}t.homePos.copy(t.mesh.position),t.homeFacing=t.mesh.rotation.y,Dl(t)}}function Tb(s,e){return s!==e}function Eb(s,e,t,n){const i=e.mesh.position.x-s.mesh.position.x,r=e.mesh.position.z-s.mesh.position.z,a=Math.hypot(i,r);if(a>=t||a<1e-4)return;const o=t-a,l=i/a,c=r/a,h=o*.5*n;s.mesh.position.x-=l*h,s.mesh.position.z-=c*h,e.mesh.position.x+=l*h,e.mesh.position.z+=c*h}function Ab(s,e){const t=Math.min(1,6*e+.35),n=3;for(let i=0;i<n;i++)for(let r=0;r<s.length;r++)for(let a=r+1;a<s.length;a++){const o=s[r],l=s[a];Tb(o,l)&&Eb(o,l,zd,t)}}function Cb(s,e,t=100){let n=0,i=1/0;for(let r=0;r<=t;r++){const a=r/t,l=s.getPointAt(a).distanceToSquared(e);l<i&&(i=l,n=a)}return n}const Io=[{tMax:.08,label:"静かな入口 · Town Entrance"},{tMax:.16,label:"本屋通り · Bookshop Row"},{tMax:.28,label:"桜通り · Sakura Street"},{tMax:.38,label:"鳥居坂 · Torii Slope"},{tMax:.48,label:"朝市 · Morning Market"},{tMax:.58,label:"神社の参道 · Shrine Approach"},{tMax:.68,label:"公園 · Town Park"},{tMax:.78,label:"港の見晴台 · Harbor View"},{tMax:.88,label:"漁港 · Fishing Port"},{tMax:.96,label:"海岸通り · Coastal Path"},{tMax:1,label:"岬の灯台 · Cape Outlook"}];class _c{constructor(e){this.canvas=e,this.clock=new gd,this.raycaster=new fc,this.ready=!1,this.renderer=new Sy({canvas:e,antialias:!1,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=_u,this.renderer.outputColorSpace=ut,this.renderer.toneMapping=Bl,this.renderer.toneMappingExposure=1.08,this.scene=new yp,this.scene.background=new pe(9556936),this.camera=new Xt(42,window.innerWidth/window.innerHeight,.1,280),this.input=new wM(e),this.cameraTarget=new T,this._cameraSmoothed=new T,this.outfitOpen=!1,this.composer=new Ry(this.renderer),this.composer.addPass(new Iy(this.scene,this.camera)),this.composer.addPass(new Ly),this._fxaaPass=new Sd(Py),this._fxaaPass.material.uniforms.resolution.value.set(1/(window.innerWidth*Math.min(window.devicePixelRatio,2)),1/(window.innerHeight*Math.min(window.devicePixelRatio,2))),this.composer.addPass(this._fxaaPass),window.addEventListener("resize",()=>this._onResize())}static async create(e,t){t==null||t("Initializing WebGL…");let n;try{n=new _c(e)}catch(i){throw new Error(`WebGL failed: ${i.message}`)}try{t==null||t("Building town…"),n.modelLoader=new bv,await n.modelLoader.loadAll(void 0,t),SM(n.modelLoader),ib(n.modelLoader),n.town=new eM(n.scene,n.modelLoader),await n.town.build(t),n.path=n.town.getPath(),n.path.getClosestPointT=r=>Cb(n.path,r),t==null||t("Spawning characters…"),n.player=new AM(n.scene,n.path),n.player.colliderWorld=n.town.colliders,n.player.walkableCurves=n.town.getWalkableCurves(),n.player.mesh.traverse(r=>{r.userData.dynamic=!0});const i=n.path.getTangentAt(.05);n.input.cameraAngle=Math.atan2(-i.x,-i.z),n.npcs=[...UM,...FM.map(r=>({...r,isAmbient:!0}))].map(r=>new NM(n.scene,n.town.getPathForId(r.pathId),r)),wb(n.npcs),n.npcs.forEach(r=>r.mesh.traverse(a=>{a.userData.dynamic=!0})),t==null||t("Spawning animals…"),n.animals=nb.map(r=>new mb(n.scene,n.town.getPathForId(r.pathId),r)),n.animals.forEach(r=>r.mesh.traverse(a=>{a.userData.dynamic=!0})),n.worldProps=[];for(const r of n.town.getInteractableSpawns()){const{propId:a,position:o,rotationY:l}=r;if(a==="cherry_tree"||a==="shrine_tree")n.worldProps.push(_b(n.scene,o,a));else if(a==="shrine")n.worldProps.push(xb(n.scene,o,l));else if(a==="torii")n.worldProps.push(yb(n.scene,o,l));else if(a==="vending")n.worldProps.push(Mb(n.scene,o,l));else if(a.startsWith("shop_")){const c=a.slice(5),h=Od[c];h&&n.worldProps.push(vb(n.scene,o,l,c,h.label))}}return n.interactables=new VM,n.interactables.registerAll(n.npcs,n.animals,n.worldProps),n.scene.traverse(r=>{r.userData.dynamic||(r.updateMatrix(),r.matrixAutoUpdate=!1,r.isMesh&&(r.castShadow=!1,r.receiveShadow=!0))}),[...n.npcs,...n.animals].forEach(r=>{r.mesh.traverse(a=>{a.isMesh&&(a.castShadow=!0)})}),n.player.mesh.traverse(r=>{r.isMesh&&(r.castShadow=!0)}),n.ready=!0,n}catch(i){throw i}}initInteraction(e,t,n){var a;this.dialogue=e,this.petUI=t,this.shopUI=n,this.companion=null,this.petCompanion=null,this.yen=1e3,this.offeringTokens=5,this.dayNight=new tb(this,this.town),this.dayNight._applyLighting(),this.dayNight._updateHUD(),this.locationTag=document.getElementById("location-tag"),this.petTag=document.getElementById("pet-companion-tag"),this.petLabel=document.getElementById("pet-companion-label"),this.petPartBtn=document.getElementById("pet-companion-part"),e.setGame(this),e.onConversationEnd=()=>{var o;(o=this.mood)==null||o.boost(9,"Good chat!"),this._updateMoodHUD()},n&&(n.setGame(this),n.onPurchase=()=>{var o;(o=this.mood)==null||o.boost(7,"Treat yourself!"),this._updateMoodHUD()}),this.interaction=new HM(this.player,this.interactables,e,this,t,n),this.interaction.setRewardHandler(o=>this._handleReward(o)),t==null||t.setHandlers({onAction:(o,l)=>this._handlePetAction(o,l),onInvite:o=>this.setPetCompanion(o)}),(a=this.petPartBtn)==null||a.addEventListener("click",()=>this.clearPetCompanion()),this.yenEl=document.getElementById("yen-display"),this.tokenEl=document.getElementById("token-display"),this._updateYenHUD(),this._updateTokenHUD();const i=document.getElementById("minimap"),r=document.getElementById("minimap-wrap");i?(this.minimap=new $M(i,this.path,r,this.town.getWalkableCurves()),this.minimap.setPlayer(this.player),this.minimap.setNpcs(this.npcs),this.minimap.setAnimals(this.animals),this.minimap.setWorldProps(this.worldProps),this.minimap.update()):console.warn("Minimap: #minimap canvas not found in DOM"),this.mood=new ZM,this.moodEl=document.getElementById("mood-display"),this.moodBar=document.getElementById("mood-bar-fill"),this.moodFloat=document.getElementById("mood-float"),this.moodFloat&&this.mood.setFloatContainer(this.moodFloat),this._updateMoodHUD()}spendYen(e){this.yen=Math.max(0,this.yen-e),this._updateYenHUD()}earnYen(e){this.yen+=e,this._updateYenHUD()}_updateYenHUD(){this.yenEl&&(this.yenEl.textContent=`💴 ¥${this.yen}`)}spendOfferingToken(e=1){return this.offeringTokens<e?!1:(this.offeringTokens-=e,this._updateTokenHUD(),!0)}_updateTokenHUD(){this.tokenEl&&(this.tokenEl.textContent=`🪙 ${this.offeringTokens}`)}_updateMoodHUD(){var t;if(!this.mood)return;const e=this.mood.getMood();this.moodEl&&(this.moodEl.textContent=`${e.emoji} ${e.name}`,this.moodEl.style.borderColor=e.color),this.moodBar&&(this.moodBar.style.width=`${this.mood.getPercent()}%`,this.moodBar.style.background=e.color),(t=this.player)!=null&&t.mesh&&e.expression&&Hn(this.player.mesh,e.expression)}openShop(e){this.shopUI&&e&&this.shopUI.open(e)}_handlePetAction(e,t){const n=e.applyAction(t);return n.message&&this.dialogue.showToast(n.message),n.isFriend&&t!=="shoo"&&this.dialogue.showToast(`${e.definition.name} seems to really like you! ♥`),this.mood&&(t==="pet"?this.mood.boost(10,"Petted a friend!"):t==="sit"?this.mood.boost(7,"Cozy moment"):t==="shoo"&&this.mood.drain(5),this._updateMoodHUD()),n}setCompanion(e){var t,n,i;this.companion&&this.companion!==e&&(this._removeCompanionRing(this.companion),this.companion.stopFollowing(!0)),this.companion=e,e.startFollowing(),this._addCompanionRing(e),this.dialogue.setCompanionTag(e),(t=this.minimap)==null||t.setCompanion(e),(i=(n=this.dialogue)._updateDialogueWalkButtons)==null||i.call(n)}clearCompanion(){var e,t,n;this.companion&&(this._removeCompanionRing(this.companion),this.companion.stopFollowing(!0),this.companion=null,this.dialogue.setCompanionTag(null),(e=this.minimap)==null||e.setCompanion(null),(n=(t=this.dialogue)._updateDialogueWalkButtons)==null||n.call(t))}_addCompanionRing(e){if(e.mesh.userData.companionRing){e.mesh.userData.companionRing.visible=!0;return}const t=new ne(new di(.52,.045,6,24),new dt({color:6351064,transparent:!0,opacity:.82}));t.rotation.x=Math.PI/2,t.position.y=.06,e.mesh.add(t),e.mesh.userData.companionRing=t}_removeCompanionRing(e){var n,i;const t=(i=(n=e.mesh)==null?void 0:n.userData)==null?void 0:i.companionRing;t&&(t.visible=!1)}setPetCompanion(e){var t,n,i;this.petCompanion&&this.petCompanion!==e&&this.petCompanion.stopFollowing(!0),this.petCompanion=e,(t=this.minimap)==null||t.setPetCompanion(e),(n=this.mood)==null||n.boost(12,`${e.definition.name} joined!`),this._updateMoodHUD(),e.startFollowing(),this._setPetCompanionTag(e),this.dialogue.showToast(((i=e.definition.reactions)==null?void 0:i.friend)??`${e.definition.name} is following you!`)}clearPetCompanion(){this.petCompanion&&(this.petCompanion.stopFollowing(!0),this.petCompanion=null,this._setPetCompanionTag(null),this.dialogue.showToast("Your pet friend headed home."))}_setPetCompanionTag(e){this.petTag&&(e?(this.petLabel&&(this.petLabel.textContent=`${e.definition.emoji} ${e.definition.name} is following`),this.petTag.classList.remove("hidden")):this.petTag.classList.add("hidden"))}_handleReward(e){var t,n,i,r,a,o,l;e.type==="speedBoost"?(this.player.applySpeedBoost(e.amount,e.duration),e.message&&((t=this.dialogue)==null||t.showToast(e.message)),(n=this.mood)==null||n.boost(6,"Energy boost!")):e.type==="companion"?(this.setCompanion(e.npc),(i=this.mood)==null||i.boost(14,"New friend!")):e.type==="dismissCompanion"?(this.clearCompanion(),(r=this.mood)==null||r.drain(4)):e.type==="journal"&&((o=(a=this.dialogue)==null?void 0:a.addJournalEntry)==null||o.call(a,e.title,e.body,"購入 · Purchase"),(l=this.mood)==null||l.boost(8,"Memory made"))}_updateLocationTag(){if(!this.locationTag||!this.path)return;const e=this.path.getClosestPointT(this.player.position),t=Io.find(n=>e<=n.tMax)??Io[Io.length-1];this.locationTag.textContent=t.label}_onResize(){var r;const e=window.innerWidth,t=window.innerHeight,n=Math.min(window.devicePixelRatio,2);this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),this.composer.setSize(e,t),this._fxaaPass&&this._fxaaPass.material.uniforms.resolution.value.set(1/(e*n),1/(t*n));const i=document.getElementById("minimap-wrap");(r=this.minimap)!=null&&r.resize&&i&&this.minimap.resize(i.clientWidth)}_updateCamera(){if(!this.player)return;const e=this.player.position,t=this.input.cameraAngle,n=this.input.cameraPitch,i=this.input.cameraDistance,r=1.95,a=e.clone().add(new T(0,r,0));this.cameraTarget.lerp(a,.22);const o=i*Math.cos(n),l=new T(Math.sin(t)*o,Math.sin(n)*i+i*.08,Math.cos(t)*o),c=this.cameraTarget.clone().add(l);this._cameraSmoothed.lengthSq()<.001?this._cameraSmoothed.copy(c):this._cameraSmoothed.lerp(c,.22),this.camera.position.copy(this._cameraSmoothed),this.camera.lookAt(this.cameraTarget)}update(){var n,i,r,a,o,l,c,h,u,d,f,m;if(!this.ready)return;const e=Math.min(this.clock.getDelta(),.05);this.input.update();const t=((n=this.interaction)==null?void 0:n.isBlocking())??((i=this.dialogue)==null?void 0:i.isBlocking())??((r=this.shopUI)==null?void 0:r.isOpen())??this.outfitOpen??!1;if(this.input.dialogueOpen=t,this.input.outfitOpen=this.outfitOpen,t?this.dialogue.isOpen()?(this.input.consumeKey("KeyE")||this.input.consumeKey("Space")||this.input.consumeKey("Enter"))&&this.dialogue.tryAdvanceFromKey():this.dialogue.approachOpen&&((this.input.consumeKey("KeyE")||this.input.consumeKey("Enter"))&&this.dialogue._onChatClicked(),this.input.consumeKey("KeyW")&&(this.input.keys.AltLeft||this.input.keys.AltRight)&&this.dialogue._onWalkClicked(),(this.input.consumeKey("KeyX")||this.input.consumeKey("Backspace"))&&(this.companion&&((a=this.dialogue.npc)!=null&&a.isCompanion)?this.dialogue._onPartClicked():this.dialogue._onIgnoreClicked())):(o=this.interaction)==null||o.update(this.input,this.camera,this.canvas),this.player.update(this.input,e,this.town.getGroundMeshes()),this.npcs.forEach(_=>_.update(e,this.player.position,this.player.facing)),Ab(this.npcs,e),(h=(c=(l=this.companion)==null?void 0:l.mesh)==null?void 0:c.userData)!=null&&h.companionRing){const _=this.companion.mesh.userData.companionRing;_.material.opacity=.5+Math.sin(this.clock.elapsedTime*3)*.3,_.rotation.z+=e*.8}if((u=this.animals)==null||u.forEach(_=>_.update(e,this.player.position,this.player.facing)),this._updateLocationTag(),this.mood&&(this.mood.update(e),this._updateMoodHUD()),this.minimap&&this.interactables&&this.player&&this.minimap.setNearbyInteractables(this.interactables.findAllInRange(this.player.position,20)),(d=this.minimap)==null||d.update(),(f=this.dayNight)==null||f.update(e),this.town.update(this.clock.elapsedTime),(m=this.town)!=null&&m.sun&&this.player){const _=this.player.position;this.town.sun.target.position.set(_.x,0,_.z),this.town.sun.target.updateMatrixWorld()}this._updateCamera(),this.input.endFrame()}render(){this.composer.render()}start(){const e=()=>{requestAnimationFrame(e),this.update(),this.render()};e()}}class Rb{constructor(e){var t,n,i,r,a;this.modal=e.modal,this.portrait=e.portrait,this.nameEl=e.name,this.personalityEl=e.personality,this.heartsEl=e.hearts,this.petBtn=e.petBtn,this.sitBtn=e.sitBtn,this.shooBtn=e.shooBtn,this.leaveBtn=e.leaveBtn,this.inviteBtn=e.inviteBtn,this.animal=null,this.open=!1,this.onAction=null,this.onInvite=null,(t=this.petBtn)==null||t.addEventListener("click",()=>this._action("pet")),(n=this.sitBtn)==null||n.addEventListener("click",()=>this._action("sit")),(i=this.shooBtn)==null||i.addEventListener("click",()=>this._action("shoo")),(r=this.leaveBtn)==null||r.addEventListener("click",()=>this.hide()),(a=this.inviteBtn)==null||a.addEventListener("click",()=>this._invite())}setHandlers({onAction:e,onInvite:t}){this.onAction=e,this.onInvite=t}isOpen(){return this.open}show(e){!e||!this.modal||(this.animal=e,this.open=!0,this._render(),this.modal.classList.remove("hidden"))}hide(){var e;this.open=!1,this.animal=null,(e=this.modal)==null||e.classList.add("hidden")}_render(){var i;const e=this.animal;if(!e)return;const t=e.definition;this.portrait.textContent=t.emoji,this.nameEl.textContent=`${t.nameJa} · ${t.name}`,this.personalityEl.textContent=`${t.species} · ${t.personality}`,this._renderHearts(e.affinity);const n=e.affinity>=Bd;(i=this.inviteBtn)==null||i.classList.toggle("hidden",!n||e.isPetCompanion),n&&!e.isPetCompanion&&(this.inviteBtn.textContent=`🐾 Invite ${t.name} to follow`)}_renderHearts(e){if(!this.heartsEl)return;const t=Math.floor(e/20);this.heartsEl.innerHTML="";for(let n=0;n<5;n++){const i=document.createElement("span");i.className="pet-heart"+(n<t?" filled":""),i.textContent=n<t?"♥":"♡",this.heartsEl.appendChild(i)}}_action(e){var t,n,i,r,a;this.animal&&((t=this.onAction)==null||t.call(this,this.animal,e),e==="pet"?(i=(n=this.animal).spawnHearts)==null||i.call(n,5,"#ff4488"):e==="sit"?(a=(r=this.animal).spawnHearts)==null||a.call(r,2,"#ffcc00"):e==="shoo"&&setTimeout(()=>this.hide(),500),this._render())}_invite(){var e;this.animal&&((e=this.onInvite)==null||e.call(this,this.animal),this.hide())}refresh(){this.open&&this.animal&&this._render()}}class Ib{constructor(e,t){var n,i;this.modal=e.modal,this.portrait=e.portrait,this.nameEl=e.name,this.yenEl=e.yen,this.itemsEl=e.items,this.closeBtn=e.closeBtn,this.catalog=t,this._open=!1,this._game=null,this._currentShop=null,(n=this.closeBtn)==null||n.addEventListener("click",()=>this.close()),(i=this.modal)==null||i.addEventListener("click",r=>{r.target===this.modal&&this.close()})}setGame(e){this._game=e}isOpen(){return this._open}open(e){var n;const t=this.catalog[e];t&&(this._currentShop=t,this._open=!0,this.portrait&&(this.portrait.textContent=t.emoji),this.nameEl&&(this.nameEl.textContent=t.label),this._refreshYen(),this._renderItems(t),(n=this.modal)==null||n.classList.remove("hidden"))}close(){var e;this._open=!1,this._currentShop=null,(e=this.modal)==null||e.classList.add("hidden")}_refreshYen(){this.yenEl&&this._game&&(this.yenEl.textContent=`💴 ¥${this._game.yen}`)}_renderItems(e){this.itemsEl&&(this.itemsEl.innerHTML="",e.items.forEach(t=>{const n=!this._game||this._game.yen>=t.price,i=document.createElement("div");i.className="shop-item",i.innerHTML=`
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
      `,i.querySelector(".shop-buy-btn").addEventListener("click",()=>this._buy(t)),this.itemsEl.appendChild(i)}))}_buy(e){var t,n,i;if(this._game){if(this._game.yen<e.price){(t=this._game.dialogue)==null||t.showToast("お金が足りない · Not enough yen!");return}this._game.spendYen(e.price),(n=this._game.dialogue)==null||n.showToast(`${e.emoji} ${e.nameEn} — ¥${e.price} spent!`),e.reward&&this._game._handleReward(e.reward),(i=this.onPurchase)==null||i.call(this),this._refreshYen(),this._currentShop&&this._renderItems(this._currentShop)}}}const ca=[{key:"character_female_a",label:"Mage"},{key:"character_female_a",label:"Arcane Mage",tint:8921292,tintStrength:.45},{key:"character_female_a",label:"Ice Mage",tint:2142463,tintStrength:.45},{key:"character_female_a",label:"Fire Mage",tint:16726016,tintStrength:.48},{key:"character_female_a",label:"Nature Druid",tint:3713088,tintStrength:.45},{key:"character_female_b",label:"Rogue"},{key:"character_female_b",label:"Shadow Rogue",tint:1579066,tintStrength:.6},{key:"character_female_b",label:"Forest Scout",tint:3832368,tintStrength:.42},{key:"character_female_b",label:"Crimson Thief",tint:13377568,tintStrength:.45},{key:"character_female_c",label:"Wanderer"},{key:"character_female_c",label:"Desert Wanderer",tint:13668400,tintStrength:.42},{key:"character_female_c",label:"Sea Wanderer",tint:1609920,tintStrength:.42},{key:"character_male_a",label:"Knight"},{key:"character_male_a",label:"Paladin",tint:15779872,tintStrength:.42},{key:"character_male_a",label:"Dark Knight",tint:2099240,tintStrength:.6},{key:"character_male_a",label:"Iron Guard",tint:6320256,tintStrength:.45},{key:"character_male_b",label:"Barbarian"},{key:"character_male_b",label:"Berserker",tint:13113368,tintStrength:.45},{key:"character_male_b",label:"Thunder Chief",tint:2121936,tintStrength:.42},{key:"character_male_c",label:"Duelist"},{key:"character_male_c",label:"Night Stalker",tint:1054768,tintStrength:.6},{key:"character_male_c",label:"Golden Blade",tint:15249440,tintStrength:.45}],ha=[{tint:null,label:"Default"},{tint:15781984,label:"Sunny"},{tint:15235192,label:"Coral"},{tint:7911656,label:"Sky"},{tint:8964216,label:"Mint"},{tint:13138152,label:"Lilac"},{tint:2105376,label:"Obsidian"}],ua=[{id:"none",label:"None"},{id:"class_hat",label:"Class Hat"},{id:"tophat",label:"Top Hat"},{id:"witchhat",label:"Witch Hat"},{id:"crown",label:"Crown"},{id:"flowerCrown",label:"Flower Crown"},{id:"halo",label:"Halo"},{id:"catears",label:"Cat Ears"},{id:"beret",label:"Beret"},{id:"piratecap",label:"Pirate Cap"}],Po=[{label:"Classic",tint:null},{label:"Golden",tint:15781984},{label:"White",tint:15790320},{label:"Dark",tint:2763306},{label:"Red",tint:15224912}];class Pb{constructor(e,t){var n;this.modal=e.modal,this.closeBtn=e.closeBtn,this.modelLabel=e.modelLabel,this.accentLabel=e.accentLabel,this.hatLabel=e.hatLabel,this.shoesLabel=e.shoesLabel,this.game=t,this.indices={model:0,accent:0,hat:0,shoes:0},this.open=!1,(n=this.closeBtn)==null||n.addEventListener("click",()=>this.hide()),this._wirePair("model",e.modelPrev,e.modelNext,ca),this._wirePair("accent",e.accentPrev,e.accentNext,ha),this._wirePair("hat",e.hatPrev,e.hatNext,ua),this._wirePair("shoes",e.shoesPrev,e.shoesNext,Po)}_wirePair(e,t,n,i){t==null||t.addEventListener("click",()=>this._cycle(e,i,-1)),n==null||n.addEventListener("click",()=>this._cycle(e,i,1))}_cycle(e,t,n){this.indices[e]=(this.indices[e]+n+t.length)%t.length,this._applyOutfit(),this._updateLabels()}_applyOutfit(){var l;const e=ca[this.indices.model],t=ha[this.indices.accent],n=ua[this.indices.hat],i=Po[this.indices.shoes];let r,a;t.tint!==null?(r=t.tint,a=.3):i.tint!==null?(r=i.tint,a=.22):(r=e.tint??null,a=e.tintStrength??.22);const o=(l=this.game)==null?void 0:l.player;o&&(o.setOutfit({modelKey:e.key,tint:r,tintStrength:a}),Fd(o.mesh,n.id))}_updateLabels(){this.modelLabel&&(this.modelLabel.textContent=ca[this.indices.model].label),this.accentLabel&&(this.accentLabel.textContent=ha[this.indices.accent].label),this.hatLabel&&(this.hatLabel.textContent=ua[this.indices.hat].label),this.shoesLabel&&(this.shoesLabel.textContent=Po[this.indices.shoes].label)}_syncFromPlayer(){var a,o,l,c,h,u;const e=(o=(a=this.game)==null?void 0:a.player)==null?void 0:o.outfit;if(!e)return;const t=ca.findIndex(d=>d.key===e.modelKey);t>=0&&(this.indices.model=t);const n=ha.findIndex(d=>d.tint===e.tint);n>=0&&(this.indices.accent=n);const i=((u=(h=(c=(l=this.game)==null?void 0:l.player)==null?void 0:c.mesh)==null?void 0:h.userData)==null?void 0:u.accessoryId)??"none",r=ua.findIndex(d=>d.id===i);r>=0&&(this.indices.hat=r),this._updateLabels()}show(){this.modal&&(this.open=!0,this._syncFromPlayer(),this.modal.classList.remove("hidden"),this.game&&(this.game.outfitOpen=!0,this._savedCamera={angle:this.game.input.cameraAngle,pitch:this.game.input.cameraPitch,distance:this.game.input.cameraDistance},this.game.input.cameraPitch=.38,this.game.input.cameraDistance=3.8,this.game.input.cameraAngle=this.game.player.facing+Math.PI))}hide(){var e;this.open=!1,(e=this.modal)==null||e.classList.add("hidden"),this.game&&(this.game.outfitOpen=!1,this._savedCamera&&(this.game.input.cameraAngle=this._savedCamera.angle,this.game.input.cameraPitch=this._savedCamera.pitch,this.game.input.cameraDistance=this._savedCamera.distance))}isOpen(){return this.open}toggle(){this.open?this.hide():this.show()}}const Lb=document.getElementById("game-canvas"),Db=document.getElementById("loading"),ss=document.querySelector(".loading-sub"),rs=document.querySelector(".loading-fill"),Nb=document.getElementById("menu-btn"),Ub=document.getElementById("close-menu"),Lo=document.getElementById("menu-panel"),Do=document.getElementById("music-btn"),kb=document.getElementById("custom-btn");function No(s,e){ss&&(ss.textContent=s),rs&&(rs.style.width=`${e}%`)}function Uo(s){ss&&(ss.textContent=s,ss.style.maxWidth="320px",ss.style.lineHeight="1.5"),rs!=null&&rs.parentElement&&(rs.parentElement.style.display="none")}async function Fb(){var e;if(window.location.protocol==="file:")return;window.addEventListener("error",t=>{Uo(`Error: ${t.message}. Check the browser console (F12).`)});let s;try{No("Starting…",15),s=await _c.create(Lb,t=>No(t,40+Math.random()*40)),No("Ready!",100),window.__gameBooted=!0,await new Promise(t=>setTimeout(t,200)),Db.classList.add("hidden");try{Bb(s),s.start()}catch(t){console.error("Failed to start UI:",t),Uo(`UI failed: ${t.message}. Check the browser console (F12).`)}}catch(t){console.error("Failed to start game:",t),window.__gameBooted=!0,Uo((e=t==null?void 0:t.message)!=null&&e.includes("WebGL")?"WebGL is not available. Try Chrome or Firefox, or enable hardware acceleration.":`Could not start: ${t.message}. Run npm run dev, then open http://localhost:5173`)}}function Bb(s){var r;const e=new OM({box:document.getElementById("dialogue-box"),approachModal:document.getElementById("approach-modal"),approachPortrait:document.getElementById("approach-portrait"),approachName:document.getElementById("approach-name"),approachPersonality:document.getElementById("approach-personality"),approachTagline:document.getElementById("approach-tagline"),approachChatBtn:document.getElementById("approach-chat"),approachWalkBtn:document.getElementById("approach-walk"),approachPartBtn:document.getElementById("approach-part"),approachIgnoreBtn:document.getElementById("approach-ignore"),companionTag:document.getElementById("companion-tag"),companionLabel:document.getElementById("companion-label"),companionPartBtn:document.getElementById("companion-part"),name:document.getElementById("dialogue-name"),personality:document.getElementById("dialogue-personality"),text:document.getElementById("dialogue-text"),expression:document.getElementById("dialogue-expression"),portrait:document.getElementById("dialogue-portrait"),next:document.getElementById("dialogue-next"),choices:document.getElementById("dialogue-choices"),toast:document.getElementById("reward-toast"),journalPanel:document.getElementById("journal-panel"),journalList:document.getElementById("journal-list"),journalBtn:document.getElementById("journal-btn"),closeJournalBtn:document.getElementById("close-journal"),interactHint:document.getElementById("interact-hint"),continueHint:document.getElementById("speech-continue"),dialogueWalkBtn:document.getElementById("dialogue-walk"),dialogueStopWalkBtn:document.getElementById("dialogue-stop-walk")});e._updateJournalUI();const t=new Rb({modal:document.getElementById("pet-modal"),portrait:document.getElementById("pet-portrait"),name:document.getElementById("pet-name"),personality:document.getElementById("pet-personality"),hearts:document.getElementById("pet-hearts"),petBtn:document.getElementById("pet-action-pet"),sitBtn:document.getElementById("pet-action-sit"),shooBtn:document.getElementById("pet-action-shoo"),leaveBtn:document.getElementById("pet-action-leave"),inviteBtn:document.getElementById("pet-action-invite")}),n=new Ib({modal:document.getElementById("shop-modal"),portrait:document.getElementById("shop-portrait"),name:document.getElementById("shop-name"),yen:document.getElementById("shop-yen"),items:document.getElementById("shop-items"),closeBtn:document.getElementById("shop-close")},Od);s.initInteraction(e,t,n);const i=new Pb({modal:document.getElementById("outfit-modal"),closeBtn:document.getElementById("outfit-close"),modelLabel:document.getElementById("outfit-model-label"),accentLabel:document.getElementById("outfit-accent-label"),hatLabel:document.getElementById("outfit-hat-label"),shoesLabel:document.getElementById("outfit-shoes-label"),modelPrev:document.getElementById("outfit-model-prev"),modelNext:document.getElementById("outfit-model-next"),accentPrev:document.getElementById("outfit-accent-prev"),accentNext:document.getElementById("outfit-accent-next"),hatPrev:document.getElementById("outfit-hat-prev"),hatNext:document.getElementById("outfit-hat-next"),shoesPrev:document.getElementById("outfit-shoes-prev"),shoesNext:document.getElementById("outfit-shoes-next")},s);s.outfitUI=i,(r=e.continueHint)==null||r.addEventListener("click",()=>e.advance()),Nb.addEventListener("click",()=>Lo.classList.remove("hidden")),Ub.addEventListener("click",()=>Lo.classList.add("hidden")),Do.addEventListener("click",()=>{s.isMusicPlaying=!s.isMusicPlaying,Do.textContent=s.isMusicPlaying?"♫":"♪",Do.style.background=s.isMusicPlaying?"#d0ecec":""}),kb.addEventListener("click",()=>{i.toggle()}),document.addEventListener("keydown",a=>{var o,l,c,h,u;if(a.code==="Escape"&&(i.isOpen()?i.hide():(o=s.shopUI)!=null&&o.isOpen()?s.shopUI.close():(l=s.petUI)!=null&&l.isOpen()?s.petUI.hide():(c=s.dialogue)!=null&&c.isOpen()?s.dialogue.close():(h=s.dialogue)!=null&&h.approachOpen?s.dialogue._onIgnoreClicked():document.getElementById("journal-panel").classList.contains("hidden")?Lo.classList.toggle("hidden"):document.getElementById("journal-panel").classList.add("hidden")),(u=s.dialogue)!=null&&u.isOpen()&&/^Digit[1-9]$/.test(a.code)){const d=parseInt(a.code.replace("Digit",""),10)-1,f=document.querySelectorAll(".dialogue-choice");f[d]&&f[d].click()}})}Fb();
