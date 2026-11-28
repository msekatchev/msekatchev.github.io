(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const aa="170",lh=0,ka=1,hh=2,al=1,cl=2,Sn=3,Hn=0,Le=1,En=2,Bn=0,Ci=1,Va=2,Ha=3,Ga=4,uh=5,Qn=100,fh=101,dh=102,ph=103,mh=104,gh=200,_h=201,vh=202,xh=203,lo=204,ho=205,Mh=206,yh=207,Sh=208,Eh=209,Th=210,bh=211,Ah=212,wh=213,Rh=214,uo=0,fo=1,po=2,Ii=3,mo=4,go=5,_o=6,vo=7,ca=0,Ch=1,Ph=2,kn=0,Lh=1,Dh=2,Ih=3,Uh=4,Nh=5,Fh=6,ll=7,hl=300,Ui=301,Ni=302,xo=303,Mo=304,fr=306,yo=1e3,ni=1001,So=1002,We=1003,Oh=1004,Ts=1005,ln=1006,yr=1007,ii=1008,An=1009,ul=1010,fl=1011,us=1012,la=1013,oi=1014,hn=1015,gs=1016,ha=1017,ua=1018,Fi=1020,dl=35902,pl=1021,ml=1022,nn=1023,gl=1024,_l=1025,Pi=1026,Oi=1027,fa=1028,da=1029,vl=1030,pa=1031,ma=1033,$s=33776,js=33777,Qs=33778,tr=33779,Eo=35840,To=35841,bo=35842,Ao=35843,wo=36196,Ro=37492,Co=37496,Po=37808,Lo=37809,Do=37810,Io=37811,Uo=37812,No=37813,Fo=37814,Oo=37815,zo=37816,Bo=37817,ko=37818,Vo=37819,Ho=37820,Go=37821,er=36492,Wo=36494,Xo=36495,xl=36283,qo=36284,Yo=36285,Zo=36286,zh=3200,Bh=3201,ga=0,kh=1,On="",Ye="srgb",ki="srgb-linear",dr="linear",te="srgb",ui=7680,Wa=519,Vh=512,Hh=513,Gh=514,Ml=515,Wh=516,Xh=517,qh=518,Yh=519,Xa=35044,yl=35048,qa="300 es",Tn=2e3,cr=2001;class Vi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Ae=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Sr=Math.PI/180,Jo=180/Math.PI;function Hi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ae[i&255]+Ae[i>>8&255]+Ae[i>>16&255]+Ae[i>>24&255]+"-"+Ae[t&255]+Ae[t>>8&255]+"-"+Ae[t>>16&15|64]+Ae[t>>24&255]+"-"+Ae[e&63|128]+Ae[e>>8&255]+"-"+Ae[e>>16&255]+Ae[e>>24&255]+Ae[n&255]+Ae[n>>8&255]+Ae[n>>16&255]+Ae[n>>24&255]).toLowerCase()}function ye(i,t,e){return Math.max(t,Math.min(e,i))}function Zh(i,t){return(i%t+t)%t}function Er(i,t,e){return(1-e)*i+e*t}function Zi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Fe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class ht{constructor(t=0,e=0){ht.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class kt{constructor(t,e,n,s,r,o,a,c,l){kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],M=s[0],m=s[3],p=s[6],v=s[1],x=s[4],_=s[7],R=s[2],T=s[5],A=s[8];return r[0]=o*M+a*v+c*R,r[3]=o*m+a*x+c*T,r[6]=o*p+a*_+c*A,r[1]=l*M+h*v+u*R,r[4]=l*m+h*x+u*T,r[7]=l*p+h*_+u*A,r[2]=d*M+f*v+g*R,r[5]=d*m+f*x+g*T,r[8]=d*p+f*_+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,g=e*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/g;return t[0]=u*M,t[1]=(s*l-h*n)*M,t[2]=(a*n-s*o)*M,t[3]=d*M,t[4]=(h*e-s*c)*M,t[5]=(s*r-a*e)*M,t[6]=f*M,t[7]=(n*c-l*e)*M,t[8]=(o*e-n*r)*M,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Tr.makeScale(t,e)),this}rotate(t){return this.premultiply(Tr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Tr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Tr=new kt;function Sl(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function lr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Jh(){const i=lr("canvas");return i.style.display="block",i}const Ya={};function is(i){i in Ya||(Ya[i]=!0,console.warn(i))}function Kh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function $h(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function jh(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Yt={enabled:!0,workingColorSpace:ki,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===te&&(i.r=bn(i.r),i.g=bn(i.g),i.b=bn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===te&&(i.r=Li(i.r),i.g=Li(i.g),i.b=Li(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===On?dr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function bn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Li(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Za=[.64,.33,.3,.6,.15,.06],Ja=[.2126,.7152,.0722],Ka=[.3127,.329],$a=new kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ja=new kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Yt.define({[ki]:{primaries:Za,whitePoint:Ka,transfer:dr,toXYZ:$a,fromXYZ:ja,luminanceCoefficients:Ja,workingColorSpaceConfig:{unpackColorSpace:Ye},outputColorSpaceConfig:{drawingBufferColorSpace:Ye}},[Ye]:{primaries:Za,whitePoint:Ka,transfer:te,toXYZ:$a,fromXYZ:ja,luminanceCoefficients:Ja,outputColorSpaceConfig:{drawingBufferColorSpace:Ye}}});let fi;class Qh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{fi===void 0&&(fi=lr("canvas")),fi.width=t.width,fi.height=t.height;const n=fi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=fi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=lr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=bn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(bn(e[n]/255)*255):e[n]=bn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let tu=0;class El{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:tu++}),this.uuid=Hi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(br(s[o].image)):r.push(br(s[o]))}else r=br(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function br(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Qh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let eu=0;class De extends Vi{constructor(t=De.DEFAULT_IMAGE,e=De.DEFAULT_MAPPING,n=ni,s=ni,r=ln,o=ii,a=nn,c=An,l=De.DEFAULT_ANISOTROPY,h=On){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:eu++}),this.uuid=Hi(),this.name="",this.source=new El(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==hl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case yo:t.x=t.x-Math.floor(t.x);break;case ni:t.x=t.x<0?0:1;break;case So:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case yo:t.y=t.y-Math.floor(t.y);break;case ni:t.y=t.y<0?0:1;break;case So:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}De.DEFAULT_IMAGE=null;De.DEFAULT_MAPPING=hl;De.DEFAULT_ANISOTROPY=1;class ue{constructor(t=0,e=0,n=0,s=1){ue.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],M=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-M)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+M)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(l+1)/2,_=(f+1)/2,R=(p+1)/2,T=(h+d)/4,A=(u+M)/4,C=(g+m)/4;return x>_&&x>R?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=T/n,r=A/n):_>R?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=T/s,r=C/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=A/r,s=C/r),this.set(n,s,r,e),this}let v=Math.sqrt((m-g)*(m-g)+(u-M)*(u-M)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(u-M)/v,this.z=(d-h)/v,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class nu extends Vi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ue(0,0,t,e),this.scissorTest=!1,this.viewport=new ue(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new De(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new El(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ai extends nu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Tl extends De{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=We,this.minFilter=We,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class iu extends De{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=We,this.minFilter=We,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ze{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const d=r[o+0],f=r[o+1],g=r[o+2],M=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=M;return}if(u!==M||c!==d||l!==f||h!==g){let m=1-a;const p=c*d+l*f+h*g+u*M,v=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const R=Math.sqrt(x),T=Math.atan2(R,p*v);m=Math.sin(m*T)/R,a=Math.sin(a*T)/R}const _=a*v;if(c=c*m+d*_,l=l*m+f*_,h=h*m+g*_,u=u*m+M*_,m===1-a){const R=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=R,l*=R,h*=R,u*=R}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*u+c*f-l*d,t[e+1]=c*g+h*d+l*u-a*f,t[e+2]=l*g+h*f+a*d-c*u,t[e+3]=h*g-a*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),d=c(n/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ye(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,n=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Qa.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Qa.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ar.copy(this).projectOnVector(t),this.sub(Ar)}reflect(t){return this.sub(Ar.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ar=new D,Qa=new ze;class li{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(je.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(je.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=je.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,je):je.fromBufferAttribute(r,o),je.applyMatrix4(t.matrixWorld),this.expandByPoint(je);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),bs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),bs.copy(n.boundingBox)),bs.applyMatrix4(t.matrixWorld),this.union(bs)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,je),je.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ji),As.subVectors(this.max,Ji),di.subVectors(t.a,Ji),pi.subVectors(t.b,Ji),mi.subVectors(t.c,Ji),Ln.subVectors(pi,di),Dn.subVectors(mi,pi),Xn.subVectors(di,mi);let e=[0,-Ln.z,Ln.y,0,-Dn.z,Dn.y,0,-Xn.z,Xn.y,Ln.z,0,-Ln.x,Dn.z,0,-Dn.x,Xn.z,0,-Xn.x,-Ln.y,Ln.x,0,-Dn.y,Dn.x,0,-Xn.y,Xn.x,0];return!wr(e,di,pi,mi,As)||(e=[1,0,0,0,1,0,0,0,1],!wr(e,di,pi,mi,As))?!1:(ws.crossVectors(Ln,Dn),e=[ws.x,ws.y,ws.z],wr(e,di,pi,mi,As))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,je).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(je).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(pn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const pn=[new D,new D,new D,new D,new D,new D,new D,new D],je=new D,bs=new li,di=new D,pi=new D,mi=new D,Ln=new D,Dn=new D,Xn=new D,Ji=new D,As=new D,ws=new D,qn=new D;function wr(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){qn.fromArray(i,r);const a=s.x*Math.abs(qn.x)+s.y*Math.abs(qn.y)+s.z*Math.abs(qn.z),c=t.dot(qn),l=e.dot(qn),h=n.dot(qn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const su=new li,Ki=new D,Rr=new D;class _s{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):su.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ki.subVectors(t,this.center);const e=Ki.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ki,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Rr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ki.copy(t.center).add(Rr)),this.expandByPoint(Ki.copy(t.center).sub(Rr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const mn=new D,Cr=new D,Rs=new D,In=new D,Pr=new D,Cs=new D,Lr=new D;class bl{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,mn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=mn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(mn.copy(this.origin).addScaledVector(this.direction,e),mn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Cr.copy(t).add(e).multiplyScalar(.5),Rs.copy(e).sub(t).normalize(),In.copy(this.origin).sub(Cr);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Rs),a=In.dot(this.direction),c=-In.dot(Rs),l=In.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){const M=1/h;u*=M,d*=M,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Cr).addScaledVector(Rs,d),f}intersectSphere(t,e){mn.subVectors(t.center,this.origin);const n=mn.dot(this.direction),s=mn.dot(mn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,mn)!==null}intersectTriangle(t,e,n,s,r){Pr.subVectors(e,t),Cs.subVectors(n,t),Lr.crossVectors(Pr,Cs);let o=this.direction.dot(Lr),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;In.subVectors(this.origin,t);const c=a*this.direction.dot(Cs.crossVectors(In,Cs));if(c<0)return null;const l=a*this.direction.dot(Pr.cross(In));if(l<0||c+l>o)return null;const h=-a*In.dot(Lr);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qt{constructor(t,e,n,s,r,o,a,c,l,h,u,d,f,g,M,m){qt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,u,d,f,g,M,m)}set(t,e,n,s,r,o,a,c,l,h,u,d,f,g,M,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=M,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/gi.setFromMatrixColumn(t,0).length(),r=1/gi.setFromMatrixColumn(t,1).length(),o=1/gi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,f=o*u,g=a*h,M=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+g*l,e[5]=d-M*l,e[9]=-a*c,e[2]=M-d*l,e[6]=g+f*l,e[10]=o*c}else if(t.order==="YXZ"){const d=c*h,f=c*u,g=l*h,M=l*u;e[0]=d+M*a,e[4]=g*a-f,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=M+d*a,e[10]=o*c}else if(t.order==="ZXY"){const d=c*h,f=c*u,g=l*h,M=l*u;e[0]=d-M*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=M-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const d=o*h,f=o*u,g=a*h,M=a*u;e[0]=c*h,e[4]=g*l-f,e[8]=d*l+M,e[1]=c*u,e[5]=M*l+d,e[9]=f*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,f=o*l,g=a*c,M=a*l;e[0]=c*h,e[4]=M-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*u+g,e[10]=d-M*u}else if(t.order==="XZY"){const d=o*c,f=o*l,g=a*c,M=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+M,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=M*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ru,t,ou)}lookAt(t,e,n){const s=this.elements;return ke.subVectors(t,e),ke.lengthSq()===0&&(ke.z=1),ke.normalize(),Un.crossVectors(n,ke),Un.lengthSq()===0&&(Math.abs(n.z)===1?ke.x+=1e-4:ke.z+=1e-4,ke.normalize(),Un.crossVectors(n,ke)),Un.normalize(),Ps.crossVectors(ke,Un),s[0]=Un.x,s[4]=Ps.x,s[8]=ke.x,s[1]=Un.y,s[5]=Ps.y,s[9]=ke.y,s[2]=Un.z,s[6]=Ps.z,s[10]=ke.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],M=n[6],m=n[10],p=n[14],v=n[3],x=n[7],_=n[11],R=n[15],T=s[0],A=s[4],C=s[8],E=s[12],y=s[1],P=s[5],z=s[9],N=s[13],I=s[2],X=s[6],H=s[10],$=s[14],V=s[3],nt=s[7],ft=s[11],mt=s[15];return r[0]=o*T+a*y+c*I+l*V,r[4]=o*A+a*P+c*X+l*nt,r[8]=o*C+a*z+c*H+l*ft,r[12]=o*E+a*N+c*$+l*mt,r[1]=h*T+u*y+d*I+f*V,r[5]=h*A+u*P+d*X+f*nt,r[9]=h*C+u*z+d*H+f*ft,r[13]=h*E+u*N+d*$+f*mt,r[2]=g*T+M*y+m*I+p*V,r[6]=g*A+M*P+m*X+p*nt,r[10]=g*C+M*z+m*H+p*ft,r[14]=g*E+M*N+m*$+p*mt,r[3]=v*T+x*y+_*I+R*V,r[7]=v*A+x*P+_*X+R*nt,r[11]=v*C+x*z+_*H+R*ft,r[15]=v*E+x*N+_*$+R*mt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],M=t[7],m=t[11],p=t[15];return g*(+r*c*u-s*l*u-r*a*d+n*l*d+s*a*f-n*c*f)+M*(+e*c*f-e*l*d+r*o*d-s*o*f+s*l*h-r*c*h)+m*(+e*l*u-e*a*f-r*o*u+n*o*f+r*a*h-n*l*h)+p*(-s*a*h-e*c*u+e*a*d+s*o*u-n*o*d+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],M=t[13],m=t[14],p=t[15],v=u*m*l-M*d*l+M*c*f-a*m*f-u*c*p+a*d*p,x=g*d*l-h*m*l-g*c*f+o*m*f+h*c*p-o*d*p,_=h*M*l-g*u*l+g*a*f-o*M*f-h*a*p+o*u*p,R=g*u*c-h*M*c-g*a*d+o*M*d+h*a*m-o*u*m,T=e*v+n*x+s*_+r*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return t[0]=v*A,t[1]=(M*d*r-u*m*r-M*s*f+n*m*f+u*s*p-n*d*p)*A,t[2]=(a*m*r-M*c*r+M*s*l-n*m*l-a*s*p+n*c*p)*A,t[3]=(u*c*r-a*d*r-u*s*l+n*d*l+a*s*f-n*c*f)*A,t[4]=x*A,t[5]=(h*m*r-g*d*r+g*s*f-e*m*f-h*s*p+e*d*p)*A,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*p-e*c*p)*A,t[7]=(o*d*r-h*c*r+h*s*l-e*d*l-o*s*f+e*c*f)*A,t[8]=_*A,t[9]=(g*u*r-h*M*r-g*n*f+e*M*f+h*n*p-e*u*p)*A,t[10]=(o*M*r-g*a*r+g*n*l-e*M*l-o*n*p+e*a*p)*A,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*f-e*a*f)*A,t[12]=R*A,t[13]=(h*M*s-g*u*s+g*n*d-e*M*d-h*n*m+e*u*m)*A,t[14]=(g*a*s-o*M*s-g*n*c+e*M*c+o*n*m-e*a*m)*A,t[15]=(o*u*s-h*a*s+h*n*c-e*u*c-o*n*d+e*a*d)*A,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,g=r*u,M=o*h,m=o*u,p=a*u,v=c*l,x=c*h,_=c*u,R=n.x,T=n.y,A=n.z;return s[0]=(1-(M+p))*R,s[1]=(f+_)*R,s[2]=(g-x)*R,s[3]=0,s[4]=(f-_)*T,s[5]=(1-(d+p))*T,s[6]=(m+v)*T,s[7]=0,s[8]=(g+x)*A,s[9]=(m-v)*A,s[10]=(1-(d+M))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=gi.set(s[0],s[1],s[2]).length();const o=gi.set(s[4],s[5],s[6]).length(),a=gi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Qe.copy(this);const l=1/r,h=1/o,u=1/a;return Qe.elements[0]*=l,Qe.elements[1]*=l,Qe.elements[2]*=l,Qe.elements[4]*=h,Qe.elements[5]*=h,Qe.elements[6]*=h,Qe.elements[8]*=u,Qe.elements[9]*=u,Qe.elements[10]*=u,e.setFromRotationMatrix(Qe),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Tn){const c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let f,g;if(a===Tn)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===cr)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Tn){const c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(o-r),d=(e+t)*l,f=(n+s)*h;let g,M;if(a===Tn)g=(o+r)*u,M=-2*u;else if(a===cr)g=r*u,M=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=M,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const gi=new D,Qe=new qt,ru=new D(0,0,0),ou=new D(1,1,1),Un=new D,Ps=new D,ke=new D,tc=new qt,ec=new ze;class Ue{constructor(t=0,e=0,n=0,s=Ue.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ye(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ye(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ye(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(ye(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return tc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(tc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ec.setFromEuler(this),this.setFromQuaternion(ec,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ue.DEFAULT_ORDER="XYZ";class _a{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let au=0;const nc=new D,_i=new ze,gn=new qt,Ls=new D,$i=new D,cu=new D,lu=new ze,ic=new D(1,0,0),sc=new D(0,1,0),rc=new D(0,0,1),oc={type:"added"},hu={type:"removed"},vi={type:"childadded",child:null},Dr={type:"childremoved",child:null};class Te extends Vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:au++}),this.uuid=Hi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Te.DEFAULT_UP.clone();const t=new D,e=new Ue,n=new ze,s=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new qt},normalMatrix:{value:new kt}}),this.matrix=new qt,this.matrixWorld=new qt,this.matrixAutoUpdate=Te.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _a,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return _i.setFromAxisAngle(t,e),this.quaternion.multiply(_i),this}rotateOnWorldAxis(t,e){return _i.setFromAxisAngle(t,e),this.quaternion.premultiply(_i),this}rotateX(t){return this.rotateOnAxis(ic,t)}rotateY(t){return this.rotateOnAxis(sc,t)}rotateZ(t){return this.rotateOnAxis(rc,t)}translateOnAxis(t,e){return nc.copy(t).applyQuaternion(this.quaternion),this.position.add(nc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ic,t)}translateY(t){return this.translateOnAxis(sc,t)}translateZ(t){return this.translateOnAxis(rc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(gn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ls.copy(t):Ls.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),$i.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gn.lookAt($i,Ls,this.up):gn.lookAt(Ls,$i,this.up),this.quaternion.setFromRotationMatrix(gn),s&&(gn.extractRotation(s.matrixWorld),_i.setFromRotationMatrix(gn),this.quaternion.premultiply(_i.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(oc),vi.child=t,this.dispatchEvent(vi),vi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(hu),Dr.child=t,this.dispatchEvent(Dr),Dr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),gn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),gn.multiply(t.parent.matrixWorld)),t.applyMatrix4(gn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(oc),vi.child=t,this.dispatchEvent(vi),vi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($i,t,cu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($i,lu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Te.DEFAULT_UP=new D(0,1,0);Te.DEFAULT_MATRIX_AUTO_UPDATE=!0;Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const tn=new D,_n=new D,Ir=new D,vn=new D,xi=new D,Mi=new D,ac=new D,Ur=new D,Nr=new D,Fr=new D,Or=new ue,zr=new ue,Br=new ue;class en{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),tn.subVectors(t,e),s.cross(tn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){tn.subVectors(s,e),_n.subVectors(n,e),Ir.subVectors(t,e);const o=tn.dot(tn),a=tn.dot(_n),c=tn.dot(Ir),l=_n.dot(_n),h=_n.dot(Ir),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,vn)===null?!1:vn.x>=0&&vn.y>=0&&vn.x+vn.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,vn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,vn.x),c.addScaledVector(o,vn.y),c.addScaledVector(a,vn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return Or.setScalar(0),zr.setScalar(0),Br.setScalar(0),Or.fromBufferAttribute(t,e),zr.fromBufferAttribute(t,n),Br.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Or,r.x),o.addScaledVector(zr,r.y),o.addScaledVector(Br,r.z),o}static isFrontFacing(t,e,n,s){return tn.subVectors(n,e),_n.subVectors(t,e),tn.cross(_n).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return tn.subVectors(this.c,this.b),_n.subVectors(this.a,this.b),tn.cross(_n).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return en.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return en.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return en.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return en.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return en.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;xi.subVectors(s,n),Mi.subVectors(r,n),Ur.subVectors(t,n);const c=xi.dot(Ur),l=Mi.dot(Ur);if(c<=0&&l<=0)return e.copy(n);Nr.subVectors(t,s);const h=xi.dot(Nr),u=Mi.dot(Nr);if(h>=0&&u<=h)return e.copy(s);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(xi,o);Fr.subVectors(t,r);const f=xi.dot(Fr),g=Mi.dot(Fr);if(g>=0&&f<=g)return e.copy(r);const M=f*l-c*g;if(M<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Mi,a);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return ac.subVectors(r,s),a=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(ac,a);const p=1/(m+M+d);return o=M*p,a=d*p,e.copy(n).addScaledVector(xi,o).addScaledVector(Mi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Al={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Nn={h:0,s:0,l:0},Ds={h:0,s:0,l:0};function kr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Dt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ye){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Yt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Yt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Yt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Yt.workingColorSpace){if(t=Zh(t,1),e=ye(e,0,1),n=ye(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=kr(o,r,t+1/3),this.g=kr(o,r,t),this.b=kr(o,r,t-1/3)}return Yt.toWorkingColorSpace(this,s),this}setStyle(t,e=Ye){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ye){const n=Al[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=bn(t.r),this.g=bn(t.g),this.b=bn(t.b),this}copyLinearToSRGB(t){return this.r=Li(t.r),this.g=Li(t.g),this.b=Li(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ye){return Yt.fromWorkingColorSpace(we.copy(this),t),Math.round(ye(we.r*255,0,255))*65536+Math.round(ye(we.g*255,0,255))*256+Math.round(ye(we.b*255,0,255))}getHexString(t=Ye){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Yt.workingColorSpace){Yt.fromWorkingColorSpace(we.copy(this),e);const n=we.r,s=we.g,r=we.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Yt.workingColorSpace){return Yt.fromWorkingColorSpace(we.copy(this),e),t.r=we.r,t.g=we.g,t.b=we.b,t}getStyle(t=Ye){Yt.fromWorkingColorSpace(we.copy(this),t);const e=we.r,n=we.g,s=we.b;return t!==Ye?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Nn),this.setHSL(Nn.h+t,Nn.s+e,Nn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Nn),t.getHSL(Ds);const n=Er(Nn.h,Ds.h,e),s=Er(Nn.s,Ds.s,e),r=Er(Nn.l,Ds.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const we=new Dt;Dt.NAMES=Al;let uu=0;class Gi extends Vi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:uu++}),this.uuid=Hi(),this.name="",this.blending=Ci,this.side=Hn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=lo,this.blendDst=ho,this.blendEquation=Qn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Dt(0,0,0),this.blendAlpha=0,this.depthFunc=Ii,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ui,this.stencilZFail=ui,this.stencilZPass=ui,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ci&&(n.blending=this.blending),this.side!==Hn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==lo&&(n.blendSrc=this.blendSrc),this.blendDst!==ho&&(n.blendDst=this.blendDst),this.blendEquation!==Qn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ii&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wa&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ui&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ui&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ui&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class zn extends Gi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ue,this.combine=ca,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const fe=new D,Is=new ht;class Se{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Xa,this.updateRanges=[],this.gpuType=hn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Is.fromBufferAttribute(this,e),Is.applyMatrix3(t),this.setXY(e,Is.x,Is.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix3(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix4(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyNormalMatrix(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.transformDirection(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Zi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Fe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Zi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Zi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Zi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Zi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),n=Fe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),n=Fe(n,this.array),s=Fe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),n=Fe(n,this.array),s=Fe(s,this.array),r=Fe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Xa&&(t.usage=this.usage),t}}class wl extends Se{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Rl extends Se{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ne extends Se{constructor(t,e,n){super(new Float32Array(t),e,n)}}let fu=0;const qe=new qt,Vr=new Te,yi=new D,Ve=new li,ji=new li,Me=new D;class Ce extends Vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fu++}),this.uuid=Hi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Sl(t)?Rl:wl)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return qe.makeRotationFromQuaternion(t),this.applyMatrix4(qe),this}rotateX(t){return qe.makeRotationX(t),this.applyMatrix4(qe),this}rotateY(t){return qe.makeRotationY(t),this.applyMatrix4(qe),this}rotateZ(t){return qe.makeRotationZ(t),this.applyMatrix4(qe),this}translate(t,e,n){return qe.makeTranslation(t,e,n),this.applyMatrix4(qe),this}scale(t,e,n){return qe.makeScale(t,e,n),this.applyMatrix4(qe),this}lookAt(t){return Vr.lookAt(t),Vr.updateMatrix(),this.applyMatrix4(Vr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yi).negate(),this.translate(yi.x,yi.y,yi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ne(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new li);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Ve.setFromBufferAttribute(r),this.morphTargetsRelative?(Me.addVectors(this.boundingBox.min,Ve.min),this.boundingBox.expandByPoint(Me),Me.addVectors(this.boundingBox.max,Ve.max),this.boundingBox.expandByPoint(Me)):(this.boundingBox.expandByPoint(Ve.min),this.boundingBox.expandByPoint(Ve.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _s);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const n=this.boundingSphere.center;if(Ve.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];ji.setFromBufferAttribute(a),this.morphTargetsRelative?(Me.addVectors(Ve.min,ji.min),Ve.expandByPoint(Me),Me.addVectors(Ve.max,ji.max),Ve.expandByPoint(Me)):(Ve.expandByPoint(ji.min),Ve.expandByPoint(ji.max))}Ve.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Me.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Me));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Me.fromBufferAttribute(a,l),c&&(yi.fromBufferAttribute(t,l),Me.add(yi)),s=Math.max(s,n.distanceToSquared(Me))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Se(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let C=0;C<n.count;C++)a[C]=new D,c[C]=new D;const l=new D,h=new D,u=new D,d=new ht,f=new ht,g=new ht,M=new D,m=new D;function p(C,E,y){l.fromBufferAttribute(n,C),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,y),d.fromBufferAttribute(r,C),f.fromBufferAttribute(r,E),g.fromBufferAttribute(r,y),h.sub(l),u.sub(l),f.sub(d),g.sub(d);const P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(M.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(P),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(P),a[C].add(M),a[E].add(M),a[y].add(M),c[C].add(m),c[E].add(m),c[y].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let C=0,E=v.length;C<E;++C){const y=v[C],P=y.start,z=y.count;for(let N=P,I=P+z;N<I;N+=3)p(t.getX(N+0),t.getX(N+1),t.getX(N+2))}const x=new D,_=new D,R=new D,T=new D;function A(C){R.fromBufferAttribute(s,C),T.copy(R);const E=a[C];x.copy(E),x.sub(R.multiplyScalar(R.dot(E))).normalize(),_.crossVectors(T,E);const P=_.dot(c[C])<0?-1:1;o.setXYZW(C,x.x,x.y,x.z,P)}for(let C=0,E=v.length;C<E;++C){const y=v[C],P=y.start,z=y.count;for(let N=P,I=P+z;N<I;N+=3)A(t.getX(N+0)),A(t.getX(N+1)),A(t.getX(N+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Se(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new D,r=new D,o=new D,a=new D,c=new D,l=new D,h=new D,u=new D;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),M=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,M),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,M),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(M,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Me.fromBufferAttribute(t,e),Me.normalize(),t.setXYZ(e,Me.x,Me.y,Me.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let f=0,g=0;for(let M=0,m=c.length;M<m;M++){a.isInterleavedBufferAttribute?f=c[M]*a.data.stride+a.offset:f=c[M]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new Se(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ce,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const cc=new qt,Yn=new bl,Us=new _s,lc=new D,Ns=new D,Fs=new D,Os=new D,Hr=new D,zs=new D,hc=new D,Bs=new D;class ee extends Te{constructor(t=new Ce,e=new zn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){zs.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(Hr.fromBufferAttribute(u,t),o?zs.addScaledVector(Hr,h):zs.addScaledVector(Hr.sub(e),h))}e.add(zs)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Us.copy(n.boundingSphere),Us.applyMatrix4(r),Yn.copy(t.ray).recast(t.near),!(Us.containsPoint(Yn.origin)===!1&&(Yn.intersectSphere(Us,lc)===null||Yn.origin.distanceToSquared(lc)>(t.far-t.near)**2))&&(cc.copy(r).invert(),Yn.copy(t.ray).applyMatrix4(cc),!(n.boundingBox!==null&&Yn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Yn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,M=d.length;g<M;g++){const m=d[g],p=o[m.materialIndex],v=Math.max(m.start,f.start),x=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let _=v,R=x;_<R;_+=3){const T=a.getX(_),A=a.getX(_+1),C=a.getX(_+2);s=ks(this,p,t,n,l,h,u,T,A,C),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),M=Math.min(a.count,f.start+f.count);for(let m=g,p=M;m<p;m+=3){const v=a.getX(m),x=a.getX(m+1),_=a.getX(m+2);s=ks(this,o,t,n,l,h,u,v,x,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,M=d.length;g<M;g++){const m=d[g],p=o[m.materialIndex],v=Math.max(m.start,f.start),x=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let _=v,R=x;_<R;_+=3){const T=_,A=_+1,C=_+2;s=ks(this,p,t,n,l,h,u,T,A,C),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),M=Math.min(c.count,f.start+f.count);for(let m=g,p=M;m<p;m+=3){const v=m,x=m+1,_=m+2;s=ks(this,o,t,n,l,h,u,v,x,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function du(i,t,e,n,s,r,o,a){let c;if(t.side===Le?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===Hn,a),c===null)return null;Bs.copy(a),Bs.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Bs);return l<e.near||l>e.far?null:{distance:l,point:Bs.clone(),object:i}}function ks(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,Ns),i.getVertexPosition(c,Fs),i.getVertexPosition(l,Os);const h=du(i,t,e,n,Ns,Fs,Os,hc);if(h){const u=new D;en.getBarycoord(hc,Ns,Fs,Os,u),s&&(h.uv=en.getInterpolatedAttribute(s,a,c,l,u,new ht)),r&&(h.uv1=en.getInterpolatedAttribute(r,a,c,l,u,new ht)),o&&(h.normal=en.getInterpolatedAttribute(o,a,c,l,u,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new D,materialIndex:0};en.getNormal(Ns,Fs,Os,d.normal),h.face=d,h.barycoord=u}return h}class vs extends Ce{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ne(l,3)),this.setAttribute("normal",new ne(h,3)),this.setAttribute("uv",new ne(u,2));function g(M,m,p,v,x,_,R,T,A,C,E){const y=_/A,P=R/C,z=_/2,N=R/2,I=T/2,X=A+1,H=C+1;let $=0,V=0;const nt=new D;for(let ft=0;ft<H;ft++){const mt=ft*P-N;for(let Rt=0;Rt<X;Rt++){const Nt=Rt*y-z;nt[M]=Nt*v,nt[m]=mt*x,nt[p]=I,l.push(nt.x,nt.y,nt.z),nt[M]=0,nt[m]=0,nt[p]=T>0?1:-1,h.push(nt.x,nt.y,nt.z),u.push(Rt/A),u.push(1-ft/C),$+=1}}for(let ft=0;ft<C;ft++)for(let mt=0;mt<A;mt++){const Rt=d+mt+X*ft,Nt=d+mt+X*(ft+1),J=d+(mt+1)+X*(ft+1),it=d+(mt+1)+X*ft;c.push(Rt,Nt,it),c.push(Nt,J,it),V+=6}a.addGroup(f,V,E),f+=V,d+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vs(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function zi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Pe(i){const t={};for(let e=0;e<i.length;e++){const n=zi(i[e]);for(const s in n)t[s]=n[s]}return t}function pu(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Cl(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Yt.workingColorSpace}const mu={clone:zi,merge:Pe};var gu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_u=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class wn extends Gi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gu,this.fragmentShader=_u,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=zi(t.uniforms),this.uniformsGroups=pu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Pl extends Te{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qt,this.projectionMatrix=new qt,this.projectionMatrixInverse=new qt,this.coordinateSystem=Tn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Fn=new D,uc=new ht,fc=new ht;class Ze extends Pl{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Jo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Sr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Jo*2*Math.atan(Math.tan(Sr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Fn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Fn.x,Fn.y).multiplyScalar(-t/Fn.z),Fn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Fn.x,Fn.y).multiplyScalar(-t/Fn.z)}getViewSize(t,e){return this.getViewBounds(t,uc,fc),e.subVectors(fc,uc)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Sr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Si=-90,Ei=1;class vu extends Te{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ze(Si,Ei,t,e);s.layers=this.layers,this.add(s);const r=new Ze(Si,Ei,t,e);r.layers=this.layers,this.add(r);const o=new Ze(Si,Ei,t,e);o.layers=this.layers,this.add(o);const a=new Ze(Si,Ei,t,e);a.layers=this.layers,this.add(a);const c=new Ze(Si,Ei,t,e);c.layers=this.layers,this.add(c);const l=new Ze(Si,Ei,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===Tn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===cr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=M,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Ll extends De{constructor(t,e,n,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Ui,super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class xu extends ai{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ll(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ln}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new vs(5,5,5),r=new wn({name:"CubemapFromEquirect",uniforms:zi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Le,blending:Bn});r.uniforms.tEquirect.value=e;const o=new ee(s,r),a=e.minFilter;return e.minFilter===ii&&(e.minFilter=ln),new vu(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const Gr=new D,Mu=new D,yu=new kt;class $n{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Gr.subVectors(n,e).cross(Mu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Gr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||yu.getNormalMatrix(t),s=this.coplanarPoint(Gr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zn=new _s,Vs=new D;class va{constructor(t=new $n,e=new $n,n=new $n,s=new $n,r=new $n,o=new $n){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Tn){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],M=s[10],m=s[11],p=s[12],v=s[13],x=s[14],_=s[15];if(n[0].setComponents(c-r,d-l,m-f,_-p).normalize(),n[1].setComponents(c+r,d+l,m+f,_+p).normalize(),n[2].setComponents(c+o,d+h,m+g,_+v).normalize(),n[3].setComponents(c-o,d-h,m-g,_-v).normalize(),n[4].setComponents(c-a,d-u,m-M,_-x).normalize(),e===Tn)n[5].setComponents(c+a,d+u,m+M,_+x).normalize();else if(e===cr)n[5].setComponents(a,u,M,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Zn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Zn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Zn)}intersectsSprite(t){return Zn.center.set(0,0,0),Zn.radius=.7071067811865476,Zn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Zn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Vs.x=s.normal.x>0?t.max.x:t.min.x,Vs.y=s.normal.y>0?t.max.y:t.min.y,Vs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Vs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Dl(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Su(i){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],M=u[f];M.start<=g.start+g.count+1?g.count=Math.max(g.count,M.start+M.count-g.start):(++d,u[d]=M)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const M=u[f];i.bufferSubData(l,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class xs extends Ce{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,d=e/c,f=[],g=[],M=[],m=[];for(let p=0;p<h;p++){const v=p*d-o;for(let x=0;x<l;x++){const _=x*u-r;g.push(_,-v,0),M.push(0,0,1),m.push(x/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<a;v++){const x=v+l*p,_=v+l*(p+1),R=v+1+l*(p+1),T=v+1+l*p;f.push(x,_,T),f.push(_,R,T)}this.setIndex(f),this.setAttribute("position",new ne(g,3)),this.setAttribute("normal",new ne(M,3)),this.setAttribute("uv",new ne(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xs(t.width,t.height,t.widthSegments,t.heightSegments)}}var Eu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Tu=`#ifdef USE_ALPHAHASH
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
#endif`,bu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Au=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ru=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cu=`#ifdef USE_AOMAP
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
#endif`,Pu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Lu=`#ifdef USE_BATCHING
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
#endif`,Du=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Iu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Uu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Nu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Fu=`#ifdef USE_IRIDESCENCE
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
#endif`,Ou=`#ifdef USE_BUMPMAP
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
#endif`,zu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Bu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ku=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Gu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Wu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Xu=`#if defined( USE_COLOR_ALPHA )
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
#endif`,qu=`#define PI 3.141592653589793
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
} // validated`,Yu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Zu=`vec3 transformedNormal = objectNormal;
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
#endif`,Ju=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ku=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$u=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ju=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qu="gl_FragColor = linearToOutputTexel( gl_FragColor );",tf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ef=`#ifdef USE_ENVMAP
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
#endif`,nf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,sf=`#ifdef USE_ENVMAP
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
#endif`,rf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,of=`#ifdef USE_ENVMAP
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
#endif`,af=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,uf=`#ifdef USE_GRADIENTMAP
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
}`,ff=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,df=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mf=`uniform bool receiveShadow;
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
#endif`,gf=`#ifdef USE_ENVMAP
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
#endif`,_f=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Mf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yf=`PhysicalMaterial material;
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
#endif`,Sf=`struct PhysicalMaterial {
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
}`,Ef=`
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
#endif`,Tf=`#if defined( RE_IndirectDiffuse )
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
#endif`,bf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Af=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Pf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Lf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Df=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,If=`#if defined( USE_POINTS_UV )
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
#endif`,Uf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Nf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ff=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Of=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bf=`#ifdef USE_MORPHTARGETS
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
#endif`,kf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Hf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Gf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qf=`#ifdef USE_NORMALMAP
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
#endif`,Yf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Jf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Kf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$f=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Qf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,td=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ed=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,id=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,od=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ad=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,cd=`float getShadowMask() {
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
}`,ld=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hd=`#ifdef USE_SKINNING
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
#endif`,ud=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fd=`#ifdef USE_SKINNING
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
#endif`,dd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,md=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,_d=`#ifdef USE_TRANSMISSION
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
#endif`,vd=`#ifdef USE_TRANSMISSION
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
#endif`,xd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Md=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ed=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Td=`uniform sampler2D t2D;
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
}`,bd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ad=`#ifdef ENVMAP_TYPE_CUBE
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
}`,wd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cd=`#include <common>
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
}`,Pd=`#if DEPTH_PACKING == 3200
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
}`,Ld=`#define DISTANCE
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
}`,Dd=`#define DISTANCE
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
}`,Id=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ud=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nd=`uniform float scale;
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
}`,Fd=`uniform vec3 diffuse;
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
}`,Od=`#include <common>
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
}`,zd=`uniform vec3 diffuse;
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
}`,Bd=`#define LAMBERT
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
}`,kd=`#define LAMBERT
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
}`,Vd=`#define MATCAP
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
}`,Hd=`#define MATCAP
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
}`,Gd=`#define NORMAL
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
}`,Wd=`#define NORMAL
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
}`,Xd=`#define PHONG
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
}`,qd=`#define PHONG
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
}`,Yd=`#define STANDARD
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
}`,Zd=`#define STANDARD
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
}`,Jd=`#define TOON
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
}`,Kd=`#define TOON
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
}`,$d=`uniform float size;
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
}`,jd=`uniform vec3 diffuse;
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
}`,Qd=`#include <common>
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
}`,tp=`uniform vec3 color;
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
}`,ep=`uniform float rotation;
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
}`,np=`uniform vec3 diffuse;
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
}`,Ht={alphahash_fragment:Eu,alphahash_pars_fragment:Tu,alphamap_fragment:bu,alphamap_pars_fragment:Au,alphatest_fragment:wu,alphatest_pars_fragment:Ru,aomap_fragment:Cu,aomap_pars_fragment:Pu,batching_pars_vertex:Lu,batching_vertex:Du,begin_vertex:Iu,beginnormal_vertex:Uu,bsdfs:Nu,iridescence_fragment:Fu,bumpmap_pars_fragment:Ou,clipping_planes_fragment:zu,clipping_planes_pars_fragment:Bu,clipping_planes_pars_vertex:ku,clipping_planes_vertex:Vu,color_fragment:Hu,color_pars_fragment:Gu,color_pars_vertex:Wu,color_vertex:Xu,common:qu,cube_uv_reflection_fragment:Yu,defaultnormal_vertex:Zu,displacementmap_pars_vertex:Ju,displacementmap_vertex:Ku,emissivemap_fragment:$u,emissivemap_pars_fragment:ju,colorspace_fragment:Qu,colorspace_pars_fragment:tf,envmap_fragment:ef,envmap_common_pars_fragment:nf,envmap_pars_fragment:sf,envmap_pars_vertex:rf,envmap_physical_pars_fragment:gf,envmap_vertex:of,fog_vertex:af,fog_pars_vertex:cf,fog_fragment:lf,fog_pars_fragment:hf,gradientmap_pars_fragment:uf,lightmap_pars_fragment:ff,lights_lambert_fragment:df,lights_lambert_pars_fragment:pf,lights_pars_begin:mf,lights_toon_fragment:_f,lights_toon_pars_fragment:vf,lights_phong_fragment:xf,lights_phong_pars_fragment:Mf,lights_physical_fragment:yf,lights_physical_pars_fragment:Sf,lights_fragment_begin:Ef,lights_fragment_maps:Tf,lights_fragment_end:bf,logdepthbuf_fragment:Af,logdepthbuf_pars_fragment:wf,logdepthbuf_pars_vertex:Rf,logdepthbuf_vertex:Cf,map_fragment:Pf,map_pars_fragment:Lf,map_particle_fragment:Df,map_particle_pars_fragment:If,metalnessmap_fragment:Uf,metalnessmap_pars_fragment:Nf,morphinstance_vertex:Ff,morphcolor_vertex:Of,morphnormal_vertex:zf,morphtarget_pars_vertex:Bf,morphtarget_vertex:kf,normal_fragment_begin:Vf,normal_fragment_maps:Hf,normal_pars_fragment:Gf,normal_pars_vertex:Wf,normal_vertex:Xf,normalmap_pars_fragment:qf,clearcoat_normal_fragment_begin:Yf,clearcoat_normal_fragment_maps:Zf,clearcoat_pars_fragment:Jf,iridescence_pars_fragment:Kf,opaque_fragment:$f,packing:jf,premultiplied_alpha_fragment:Qf,project_vertex:td,dithering_fragment:ed,dithering_pars_fragment:nd,roughnessmap_fragment:id,roughnessmap_pars_fragment:sd,shadowmap_pars_fragment:rd,shadowmap_pars_vertex:od,shadowmap_vertex:ad,shadowmask_pars_fragment:cd,skinbase_vertex:ld,skinning_pars_vertex:hd,skinning_vertex:ud,skinnormal_vertex:fd,specularmap_fragment:dd,specularmap_pars_fragment:pd,tonemapping_fragment:md,tonemapping_pars_fragment:gd,transmission_fragment:_d,transmission_pars_fragment:vd,uv_pars_fragment:xd,uv_pars_vertex:Md,uv_vertex:yd,worldpos_vertex:Sd,background_vert:Ed,background_frag:Td,backgroundCube_vert:bd,backgroundCube_frag:Ad,cube_vert:wd,cube_frag:Rd,depth_vert:Cd,depth_frag:Pd,distanceRGBA_vert:Ld,distanceRGBA_frag:Dd,equirect_vert:Id,equirect_frag:Ud,linedashed_vert:Nd,linedashed_frag:Fd,meshbasic_vert:Od,meshbasic_frag:zd,meshlambert_vert:Bd,meshlambert_frag:kd,meshmatcap_vert:Vd,meshmatcap_frag:Hd,meshnormal_vert:Gd,meshnormal_frag:Wd,meshphong_vert:Xd,meshphong_frag:qd,meshphysical_vert:Yd,meshphysical_frag:Zd,meshtoon_vert:Jd,meshtoon_frag:Kd,points_vert:$d,points_frag:jd,shadow_vert:Qd,shadow_frag:tp,sprite_vert:ep,sprite_frag:np},dt={common:{diffuse:{value:new Dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new Dt(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},an={basic:{uniforms:Pe([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:Pe([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Dt(0)}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:Pe([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Dt(0)},specular:{value:new Dt(1118481)},shininess:{value:30}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:Pe([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new Dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:Pe([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new Dt(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:Pe([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:Pe([dt.points,dt.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:Pe([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:Pe([dt.common,dt.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:Pe([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:Pe([dt.sprite,dt.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distanceRGBA:{uniforms:Pe([dt.common,dt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distanceRGBA_vert,fragmentShader:Ht.distanceRGBA_frag},shadow:{uniforms:Pe([dt.lights,dt.fog,{color:{value:new Dt(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};an.physical={uniforms:Pe([an.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new Dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new Dt(0)},specularColor:{value:new Dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};const Hs={r:0,b:0,g:0},Jn=new Ue,ip=new qt;function sp(i,t,e,n,s,r,o){const a=new Dt(0);let c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(v){let x=v.isScene===!0?v.background:null;return x&&x.isTexture&&(x=(v.backgroundBlurriness>0?e:t).get(x)),x}function M(v){let x=!1;const _=g(v);_===null?p(a,c):_&&_.isColor&&(p(_,1),x=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(v,x){const _=g(x);_&&(_.isCubeTexture||_.mapping===fr)?(h===void 0&&(h=new ee(new vs(1,1,1),new wn({name:"BackgroundCubeMaterial",uniforms:zi(an.backgroundCube.uniforms),vertexShader:an.backgroundCube.vertexShader,fragmentShader:an.backgroundCube.fragmentShader,side:Le,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Jn.copy(x.backgroundRotation),Jn.x*=-1,Jn.y*=-1,Jn.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Jn.y*=-1,Jn.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(ip.makeRotationFromEuler(Jn)),h.material.toneMapped=Yt.getTransfer(_.colorSpace)!==te,(u!==_||d!==_.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,f=i.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new ee(new xs(2,2),new wn({name:"BackgroundMaterial",uniforms:zi(an.background.uniforms),vertexShader:an.background.vertexShader,fragmentShader:an.background.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=Yt.getTransfer(_.colorSpace)!==te,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=_,d=_.version,f=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,x){v.getRGB(Hs,Cl(i)),n.buffers.color.setClear(Hs.r,Hs.g,Hs.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(v,x=1){a.set(v),c=x,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,p(a,c)},render:M,addToRenderList:m}}function rp(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(y,P,z,N,I){let X=!1;const H=u(N,z,P);r!==H&&(r=H,l(r.object)),X=f(y,N,z,I),X&&g(y,N,z,I),I!==null&&t.update(I,i.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,_(y,P,z,N),I!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(I).buffer))}function c(){return i.createVertexArray()}function l(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function u(y,P,z){const N=z.wireframe===!0;let I=n[y.id];I===void 0&&(I={},n[y.id]=I);let X=I[P.id];X===void 0&&(X={},I[P.id]=X);let H=X[N];return H===void 0&&(H=d(c()),X[N]=H),H}function d(y){const P=[],z=[],N=[];for(let I=0;I<e;I++)P[I]=0,z[I]=0,N[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:z,attributeDivisors:N,object:y,attributes:{},index:null}}function f(y,P,z,N){const I=r.attributes,X=P.attributes;let H=0;const $=z.getAttributes();for(const V in $)if($[V].location>=0){const ft=I[V];let mt=X[V];if(mt===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(mt=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(mt=y.instanceColor)),ft===void 0||ft.attribute!==mt||mt&&ft.data!==mt.data)return!0;H++}return r.attributesNum!==H||r.index!==N}function g(y,P,z,N){const I={},X=P.attributes;let H=0;const $=z.getAttributes();for(const V in $)if($[V].location>=0){let ft=X[V];ft===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(ft=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(ft=y.instanceColor));const mt={};mt.attribute=ft,ft&&ft.data&&(mt.data=ft.data),I[V]=mt,H++}r.attributes=I,r.attributesNum=H,r.index=N}function M(){const y=r.newAttributes;for(let P=0,z=y.length;P<z;P++)y[P]=0}function m(y){p(y,0)}function p(y,P){const z=r.newAttributes,N=r.enabledAttributes,I=r.attributeDivisors;z[y]=1,N[y]===0&&(i.enableVertexAttribArray(y),N[y]=1),I[y]!==P&&(i.vertexAttribDivisor(y,P),I[y]=P)}function v(){const y=r.newAttributes,P=r.enabledAttributes;for(let z=0,N=P.length;z<N;z++)P[z]!==y[z]&&(i.disableVertexAttribArray(z),P[z]=0)}function x(y,P,z,N,I,X,H){H===!0?i.vertexAttribIPointer(y,P,z,I,X):i.vertexAttribPointer(y,P,z,N,I,X)}function _(y,P,z,N){M();const I=N.attributes,X=z.getAttributes(),H=P.defaultAttributeValues;for(const $ in X){const V=X[$];if(V.location>=0){let nt=I[$];if(nt===void 0&&($==="instanceMatrix"&&y.instanceMatrix&&(nt=y.instanceMatrix),$==="instanceColor"&&y.instanceColor&&(nt=y.instanceColor)),nt!==void 0){const ft=nt.normalized,mt=nt.itemSize,Rt=t.get(nt);if(Rt===void 0)continue;const Nt=Rt.buffer,J=Rt.type,it=Rt.bytesPerElement,yt=J===i.INT||J===i.UNSIGNED_INT||nt.gpuType===la;if(nt.isInterleavedBufferAttribute){const at=nt.data,Ct=at.stride,It=nt.offset;if(at.isInstancedInterleavedBuffer){for(let Lt=0;Lt<V.locationSize;Lt++)p(V.location+Lt,at.meshPerAttribute);y.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let Lt=0;Lt<V.locationSize;Lt++)m(V.location+Lt);i.bindBuffer(i.ARRAY_BUFFER,Nt);for(let Lt=0;Lt<V.locationSize;Lt++)x(V.location+Lt,mt/V.locationSize,J,ft,Ct*it,(It+mt/V.locationSize*Lt)*it,yt)}else{if(nt.isInstancedBufferAttribute){for(let at=0;at<V.locationSize;at++)p(V.location+at,nt.meshPerAttribute);y.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let at=0;at<V.locationSize;at++)m(V.location+at);i.bindBuffer(i.ARRAY_BUFFER,Nt);for(let at=0;at<V.locationSize;at++)x(V.location+at,mt/V.locationSize,J,ft,mt*it,mt/V.locationSize*at*it,yt)}}else if(H!==void 0){const ft=H[$];if(ft!==void 0)switch(ft.length){case 2:i.vertexAttrib2fv(V.location,ft);break;case 3:i.vertexAttrib3fv(V.location,ft);break;case 4:i.vertexAttrib4fv(V.location,ft);break;default:i.vertexAttrib1fv(V.location,ft)}}}}v()}function R(){C();for(const y in n){const P=n[y];for(const z in P){const N=P[z];for(const I in N)h(N[I].object),delete N[I];delete P[z]}delete n[y]}}function T(y){if(n[y.id]===void 0)return;const P=n[y.id];for(const z in P){const N=P[z];for(const I in N)h(N[I].object),delete N[I];delete P[z]}delete n[y.id]}function A(y){for(const P in n){const z=n[P];if(z[y.id]===void 0)continue;const N=z[y.id];for(const I in N)h(N[I].object),delete N[I];delete z[y.id]}}function C(){E(),o=!0,r!==s&&(r=s,l(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:E,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:M,enableAttribute:m,disableUnusedAttributes:v}}function op(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function c(l,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let M=0;M<u;M++)g+=h[M]*d[M];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function ap(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==nn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const C=A===gs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==An&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==hn&&!C)}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:M,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:x,maxFragmentUniforms:_,vertexTextures:R,maxSamples:T}}function cp(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new $n,a=new kt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,M=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{const v=r?0:n,x=v*4;let _=p.clippingState||null;c.value=_,_=h(g,d,x,f);for(let R=0;R!==x;++R)_[R]=e[R];p.clippingState=_,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){const M=u!==null?u.length:0;let m=null;if(M!==0){if(m=c.value,g!==!0||m===null){const p=f+M*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,_=f;x!==M;++x,_+=4)o.copy(u[x]).applyMatrix4(v,a),o.normal.toArray(m,_),m[_+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,m}}function lp(i){let t=new WeakMap;function e(o,a){return a===xo?o.mapping=Ui:a===Mo&&(o.mapping=Ni),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===xo||a===Mo)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new xu(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Il extends Pl{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const wi=4,dc=[.125,.215,.35,.446,.526,.582],ti=20,Wr=new Il,pc=new Dt;let Xr=null,qr=0,Yr=0,Zr=!1;const jn=(1+Math.sqrt(5))/2,Ti=1/jn,mc=[new D(-jn,Ti,0),new D(jn,Ti,0),new D(-Ti,0,jn),new D(Ti,0,jn),new D(0,jn,-Ti),new D(0,jn,Ti),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class gc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Xr=this._renderer.getRenderTarget(),qr=this._renderer.getActiveCubeFace(),Yr=this._renderer.getActiveMipmapLevel(),Zr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Xr,qr,Yr),this._renderer.xr.enabled=Zr,t.scissorTest=!1,Gs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ui||t.mapping===Ni?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Xr=this._renderer.getRenderTarget(),qr=this._renderer.getActiveCubeFace(),Yr=this._renderer.getActiveMipmapLevel(),Zr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ln,minFilter:ln,generateMipmaps:!1,type:gs,format:nn,colorSpace:ki,depthBuffer:!1},s=_c(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_c(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=hp(r)),this._blurMaterial=up(r,t,e)}return s}_compileMaterial(t){const e=new ee(this._lodPlanes[0],t);this._renderer.compile(e,Wr)}_sceneToCubeUV(t,e,n,s){const a=new Ze(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(pc),h.toneMapping=kn,h.autoClear=!1;const f=new zn({name:"PMREM.Background",side:Le,depthWrite:!1,depthTest:!1}),g=new ee(new vs,f);let M=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,M=!0):(f.color.copy(pc),M=!0);for(let p=0;p<6;p++){const v=p%3;v===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):v===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const x=this._cubeSize;Gs(s,v*x,p>2?x:0,x,x),h.setRenderTarget(s),M&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Ui||t.mapping===Ni;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=xc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new ee(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;Gs(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Wr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=mc[(s-r-1)%mc.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new ee(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ti-1),M=r/g,m=isFinite(r)?1+Math.floor(h*M):ti;m>ti&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ti}`);const p=[];let v=0;for(let A=0;A<ti;++A){const C=A/M,E=Math.exp(-C*C/2);p.push(E),A===0?v+=E:A<m&&(v+=2*E)}for(let A=0;A<p.length;A++)p[A]=p[A]/v;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;const _=this._sizeLods[s],R=3*_*(s>x-wi?s-x+wi:0),T=4*(this._cubeSize-_);Gs(e,R,T,3*_,2*_),c.setRenderTarget(e),c.render(u,Wr)}}function hp(i){const t=[],e=[],n=[];let s=i;const r=i-wi+1+dc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-wi?c=dc[o-i+wi-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,M=3,m=2,p=1,v=new Float32Array(M*g*f),x=new Float32Array(m*g*f),_=new Float32Array(p*g*f);for(let T=0;T<f;T++){const A=T%3*2/3-1,C=T>2?0:-1,E=[A,C,0,A+2/3,C,0,A+2/3,C+1,0,A,C,0,A+2/3,C+1,0,A,C+1,0];v.set(E,M*g*T),x.set(d,m*g*T);const y=[T,T,T,T,T,T];_.set(y,p*g*T)}const R=new Ce;R.setAttribute("position",new Se(v,M)),R.setAttribute("uv",new Se(x,m)),R.setAttribute("faceIndex",new Se(_,p)),t.push(R),s>wi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function _c(i,t,e){const n=new ai(i,t,e);return n.texture.mapping=fr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Gs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function up(i,t,e){const n=new Float32Array(ti),s=new D(0,1,0);return new wn({name:"SphericalGaussianBlur",defines:{n:ti,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:xa(),fragmentShader:`

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
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function vc(){return new wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xa(),fragmentShader:`

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
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function xc(){return new wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function xa(){return`

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
	`}function fp(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===xo||c===Mo,h=c===Ui||c===Ni;if(l||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new gc(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return l&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new gc(i)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function dp(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&is("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function pp(i,t,e,n){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const M=d.morphAttributes[g];for(let m=0,p=M.length;m<p;m++)t.remove(M[m])}d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const M=f[g];for(let m=0,p=M.length;m<p;m++)t.update(M[m],i.ARRAY_BUFFER)}}function l(u){const d=[],f=u.index,g=u.attributes.position;let M=0;if(f!==null){const v=f.array;M=f.version;for(let x=0,_=v.length;x<_;x+=3){const R=v[x+0],T=v[x+1],A=v[x+2];d.push(R,T,T,A,A,R)}}else if(g!==void 0){const v=g.array;M=g.version;for(let x=0,_=v.length/3-1;x<_;x+=3){const R=x+0,T=x+1,A=x+2;d.push(R,T,T,A,A,R)}}else return;const m=new(Sl(d)?Rl:wl)(d,1);m.version=M;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function mp(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function l(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function u(d,f,g,M){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],M[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,M,0,g);let p=0;for(let v=0;v<g;v++)p+=f[v]*M[v];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function gp(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function _p(i,t,e){const n=new WeakMap,s=new ue;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let y=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",y)};var f=y;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,M=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let _=0;g===!0&&(_=1),M===!0&&(_=2),m===!0&&(_=3);let R=a.attributes.position.count*_,T=1;R>t.maxTextureSize&&(T=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const A=new Float32Array(R*T*4*u),C=new Tl(A,R,T,u);C.type=hn,C.needsUpdate=!0;const E=_*4;for(let P=0;P<u;P++){const z=p[P],N=v[P],I=x[P],X=R*T*4*P;for(let H=0;H<z.count;H++){const $=H*E;g===!0&&(s.fromBufferAttribute(z,H),A[X+$+0]=s.x,A[X+$+1]=s.y,A[X+$+2]=s.z,A[X+$+3]=0),M===!0&&(s.fromBufferAttribute(N,H),A[X+$+4]=s.x,A[X+$+5]=s.y,A[X+$+6]=s.z,A[X+$+7]=0),m===!0&&(s.fromBufferAttribute(I,H),A[X+$+8]=s.x,A[X+$+9]=s.y,A[X+$+10]=s.z,A[X+$+11]=I.itemSize===4?s.w:1)}}d={count:u,texture:C,size:new ht(R,T)},n.set(a,d),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const M=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",M),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function vp(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class Ul extends De{constructor(t,e,n,s,r,o,a,c,l,h=Pi){if(h!==Pi&&h!==Oi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Pi&&(n=oi),n===void 0&&h===Oi&&(n=Fi),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:We,this.minFilter=c!==void 0?c:We,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Nl=new De,Mc=new Ul(1,1),Fl=new Tl,Ol=new iu,zl=new Ll,yc=[],Sc=[],Ec=new Float32Array(16),Tc=new Float32Array(9),bc=new Float32Array(4);function Wi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=yc[s];if(r===void 0&&(r=new Float32Array(s),yc[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function ve(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function xe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function pr(i,t){let e=Sc[t];e===void 0&&(e=new Int32Array(t),Sc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function xp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Mp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;i.uniform2fv(this.addr,t),xe(e,t)}}function yp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ve(e,t))return;i.uniform3fv(this.addr,t),xe(e,t)}}function Sp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;i.uniform4fv(this.addr,t),xe(e,t)}}function Ep(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),xe(e,t)}else{if(ve(e,n))return;bc.set(n),i.uniformMatrix2fv(this.addr,!1,bc),xe(e,n)}}function Tp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),xe(e,t)}else{if(ve(e,n))return;Tc.set(n),i.uniformMatrix3fv(this.addr,!1,Tc),xe(e,n)}}function bp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),xe(e,t)}else{if(ve(e,n))return;Ec.set(n),i.uniformMatrix4fv(this.addr,!1,Ec),xe(e,n)}}function Ap(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function wp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;i.uniform2iv(this.addr,t),xe(e,t)}}function Rp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;i.uniform3iv(this.addr,t),xe(e,t)}}function Cp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;i.uniform4iv(this.addr,t),xe(e,t)}}function Pp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Lp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;i.uniform2uiv(this.addr,t),xe(e,t)}}function Dp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;i.uniform3uiv(this.addr,t),xe(e,t)}}function Ip(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;i.uniform4uiv(this.addr,t),xe(e,t)}}function Up(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Mc.compareFunction=Ml,r=Mc):r=Nl,e.setTexture2D(t||r,s)}function Np(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Ol,s)}function Fp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||zl,s)}function Op(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Fl,s)}function zp(i){switch(i){case 5126:return xp;case 35664:return Mp;case 35665:return yp;case 35666:return Sp;case 35674:return Ep;case 35675:return Tp;case 35676:return bp;case 5124:case 35670:return Ap;case 35667:case 35671:return wp;case 35668:case 35672:return Rp;case 35669:case 35673:return Cp;case 5125:return Pp;case 36294:return Lp;case 36295:return Dp;case 36296:return Ip;case 35678:case 36198:case 36298:case 36306:case 35682:return Up;case 35679:case 36299:case 36307:return Np;case 35680:case 36300:case 36308:case 36293:return Fp;case 36289:case 36303:case 36311:case 36292:return Op}}function Bp(i,t){i.uniform1fv(this.addr,t)}function kp(i,t){const e=Wi(t,this.size,2);i.uniform2fv(this.addr,e)}function Vp(i,t){const e=Wi(t,this.size,3);i.uniform3fv(this.addr,e)}function Hp(i,t){const e=Wi(t,this.size,4);i.uniform4fv(this.addr,e)}function Gp(i,t){const e=Wi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Wp(i,t){const e=Wi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Xp(i,t){const e=Wi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function qp(i,t){i.uniform1iv(this.addr,t)}function Yp(i,t){i.uniform2iv(this.addr,t)}function Zp(i,t){i.uniform3iv(this.addr,t)}function Jp(i,t){i.uniform4iv(this.addr,t)}function Kp(i,t){i.uniform1uiv(this.addr,t)}function $p(i,t){i.uniform2uiv(this.addr,t)}function jp(i,t){i.uniform3uiv(this.addr,t)}function Qp(i,t){i.uniform4uiv(this.addr,t)}function tm(i,t,e){const n=this.cache,s=t.length,r=pr(e,s);ve(n,r)||(i.uniform1iv(this.addr,r),xe(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Nl,r[o])}function em(i,t,e){const n=this.cache,s=t.length,r=pr(e,s);ve(n,r)||(i.uniform1iv(this.addr,r),xe(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Ol,r[o])}function nm(i,t,e){const n=this.cache,s=t.length,r=pr(e,s);ve(n,r)||(i.uniform1iv(this.addr,r),xe(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||zl,r[o])}function im(i,t,e){const n=this.cache,s=t.length,r=pr(e,s);ve(n,r)||(i.uniform1iv(this.addr,r),xe(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Fl,r[o])}function sm(i){switch(i){case 5126:return Bp;case 35664:return kp;case 35665:return Vp;case 35666:return Hp;case 35674:return Gp;case 35675:return Wp;case 35676:return Xp;case 5124:case 35670:return qp;case 35667:case 35671:return Yp;case 35668:case 35672:return Zp;case 35669:case 35673:return Jp;case 5125:return Kp;case 36294:return $p;case 36295:return jp;case 36296:return Qp;case 35678:case 36198:case 36298:case 36306:case 35682:return tm;case 35679:case 36299:case 36307:return em;case 35680:case 36300:case 36308:case 36293:return nm;case 36289:case 36303:case 36311:case 36292:return im}}class rm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=zp(e.type)}}class om{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=sm(e.type)}}class am{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Jr=/(\w+)(\])?(\[|\.)?/g;function Ac(i,t){i.seq.push(t),i.map[t.id]=t}function cm(i,t,e){const n=i.name,s=n.length;for(Jr.lastIndex=0;;){const r=Jr.exec(n),o=Jr.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Ac(e,l===void 0?new rm(a,i,t):new om(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new am(a),Ac(e,u)),e=u}}}class nr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);cm(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function wc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const lm=37297;let hm=0;function um(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Rc=new kt;function fm(i){Yt._getMatrix(Rc,Yt.workingColorSpace,i);const t=`mat3( ${Rc.elements.map(e=>e.toFixed(4))} )`;switch(Yt.getTransfer(i)){case dr:return[t,"LinearTransferOETF"];case te:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Cc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+um(i.getShaderSource(t),o)}else return s}function dm(i,t){const e=fm(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function pm(i,t){let e;switch(t){case Lh:e="Linear";break;case Dh:e="Reinhard";break;case Ih:e="Cineon";break;case Uh:e="ACESFilmic";break;case Fh:e="AgX";break;case ll:e="Neutral";break;case Nh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ws=new D;function mm(){Yt.getLuminanceCoefficients(Ws);const i=Ws.x.toFixed(4),t=Ws.y.toFixed(4),e=Ws.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ss).join(`
`)}function _m(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function vm(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function ss(i){return i!==""}function Pc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Lc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const xm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ko(i){return i.replace(xm,ym)}const Mm=new Map;function ym(i,t){let e=Ht[t];if(e===void 0){const n=Mm.get(t);if(n!==void 0)e=Ht[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ko(e)}const Sm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dc(i){return i.replace(Sm,Em)}function Em(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ic(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Tm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===al?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===cl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Sn&&(t="SHADOWMAP_TYPE_VSM"),t}function bm(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ui:case Ni:t="ENVMAP_TYPE_CUBE";break;case fr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Am(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ni:t="ENVMAP_MODE_REFRACTION";break}return t}function wm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ca:t="ENVMAP_BLENDING_MULTIPLY";break;case Ch:t="ENVMAP_BLENDING_MIX";break;case Ph:t="ENVMAP_BLENDING_ADD";break}return t}function Rm(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Cm(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=Tm(e),l=bm(e),h=Am(e),u=wm(e),d=Rm(e),f=gm(e),g=_m(r),M=s.createProgram();let m,p,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ss).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ss).join(`
`),p.length>0&&(p+=`
`)):(m=[Ic(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ss).join(`
`),p=[Ic(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==kn?"#define TONE_MAPPING":"",e.toneMapping!==kn?Ht.tonemapping_pars_fragment:"",e.toneMapping!==kn?pm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,dm("linearToOutputTexel",e.outputColorSpace),mm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ss).join(`
`)),o=Ko(o),o=Pc(o,e),o=Lc(o,e),a=Ko(a),a=Pc(a,e),a=Lc(a,e),o=Dc(o),a=Dc(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===qa?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===qa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=v+m+o,_=v+p+a,R=wc(s,s.VERTEX_SHADER,x),T=wc(s,s.FRAGMENT_SHADER,_);s.attachShader(M,R),s.attachShader(M,T),e.index0AttributeName!==void 0?s.bindAttribLocation(M,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function A(P){if(i.debug.checkShaderErrors){const z=s.getProgramInfoLog(M).trim(),N=s.getShaderInfoLog(R).trim(),I=s.getShaderInfoLog(T).trim();let X=!0,H=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,M,R,T);else{const $=Cc(s,R,"vertex"),V=Cc(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+z+`
`+$+`
`+V)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(N===""||I==="")&&(H=!1);H&&(P.diagnostics={runnable:X,programLog:z,vertexShader:{log:N,prefix:m},fragmentShader:{log:I,prefix:p}})}s.deleteShader(R),s.deleteShader(T),C=new nr(s,M),E=vm(s,M)}let C;this.getUniforms=function(){return C===void 0&&A(this),C};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(M,lm)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=hm++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=R,this.fragmentShader=T,this}let Pm=0;class Lm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Dm(t),e.set(t,n)),n}}class Dm{constructor(t){this.id=Pm++,this.code=t,this.usedTimes=0}}function Im(i,t,e,n,s,r,o){const a=new _a,c=new Lm,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(E){return l.add(E),E===0?"uv":`uv${E}`}function m(E,y,P,z,N){const I=z.fog,X=N.geometry,H=E.isMeshStandardMaterial?z.environment:null,$=(E.isMeshStandardMaterial?e:t).get(E.envMap||H),V=$&&$.mapping===fr?$.image.height:null,nt=g[E.type];E.precision!==null&&(f=s.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));const ft=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,mt=ft!==void 0?ft.length:0;let Rt=0;X.morphAttributes.position!==void 0&&(Rt=1),X.morphAttributes.normal!==void 0&&(Rt=2),X.morphAttributes.color!==void 0&&(Rt=3);let Nt,J,it,yt;if(nt){const jt=an[nt];Nt=jt.vertexShader,J=jt.fragmentShader}else Nt=E.vertexShader,J=E.fragmentShader,c.update(E),it=c.getVertexShaderID(E),yt=c.getFragmentShaderID(E);const at=i.getRenderTarget(),Ct=i.state.buffers.depth.getReversed(),It=N.isInstancedMesh===!0,Lt=N.isBatchedMesh===!0,Gt=!!E.map,j=!!E.matcap,st=!!$,L=!!E.aoMap,k=!!E.lightMap,K=!!E.bumpMap,ot=!!E.normalMap,et=!!E.displacementMap,Tt=!!E.emissiveMap,ut=!!E.metalnessMap,w=!!E.roughnessMap,S=E.anisotropy>0,B=E.clearcoat>0,Z=E.dispersion>0,tt=E.iridescence>0,Y=E.sheen>0,xt=E.transmission>0,lt=S&&!!E.anisotropyMap,Mt=B&&!!E.clearcoatMap,Wt=B&&!!E.clearcoatNormalMap,rt=B&&!!E.clearcoatRoughnessMap,St=tt&&!!E.iridescenceMap,Ut=tt&&!!E.iridescenceThicknessMap,Ft=Y&&!!E.sheenColorMap,Et=Y&&!!E.sheenRoughnessMap,Xt=!!E.specularMap,Vt=!!E.specularColorMap,ie=!!E.specularIntensityMap,U=xt&&!!E.transmissionMap,pt=xt&&!!E.thicknessMap,q=!!E.gradientMap,Q=!!E.alphaMap,vt=E.alphaTest>0,gt=!!E.alphaHash,zt=!!E.extensions;let le=kn;E.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(le=i.toneMapping);const be={shaderID:nt,shaderType:E.type,shaderName:E.name,vertexShader:Nt,fragmentShader:J,defines:E.defines,customVertexShaderID:it,customFragmentShaderID:yt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:Lt,batchingColor:Lt&&N._colorsTexture!==null,instancing:It,instancingColor:It&&N.instanceColor!==null,instancingMorph:It&&N.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:at===null?i.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:ki,alphaToCoverage:!!E.alphaToCoverage,map:Gt,matcap:j,envMap:st,envMapMode:st&&$.mapping,envMapCubeUVHeight:V,aoMap:L,lightMap:k,bumpMap:K,normalMap:ot,displacementMap:d&&et,emissiveMap:Tt,normalMapObjectSpace:ot&&E.normalMapType===kh,normalMapTangentSpace:ot&&E.normalMapType===ga,metalnessMap:ut,roughnessMap:w,anisotropy:S,anisotropyMap:lt,clearcoat:B,clearcoatMap:Mt,clearcoatNormalMap:Wt,clearcoatRoughnessMap:rt,dispersion:Z,iridescence:tt,iridescenceMap:St,iridescenceThicknessMap:Ut,sheen:Y,sheenColorMap:Ft,sheenRoughnessMap:Et,specularMap:Xt,specularColorMap:Vt,specularIntensityMap:ie,transmission:xt,transmissionMap:U,thicknessMap:pt,gradientMap:q,opaque:E.transparent===!1&&E.blending===Ci&&E.alphaToCoverage===!1,alphaMap:Q,alphaTest:vt,alphaHash:gt,combine:E.combine,mapUv:Gt&&M(E.map.channel),aoMapUv:L&&M(E.aoMap.channel),lightMapUv:k&&M(E.lightMap.channel),bumpMapUv:K&&M(E.bumpMap.channel),normalMapUv:ot&&M(E.normalMap.channel),displacementMapUv:et&&M(E.displacementMap.channel),emissiveMapUv:Tt&&M(E.emissiveMap.channel),metalnessMapUv:ut&&M(E.metalnessMap.channel),roughnessMapUv:w&&M(E.roughnessMap.channel),anisotropyMapUv:lt&&M(E.anisotropyMap.channel),clearcoatMapUv:Mt&&M(E.clearcoatMap.channel),clearcoatNormalMapUv:Wt&&M(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&M(E.clearcoatRoughnessMap.channel),iridescenceMapUv:St&&M(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ut&&M(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ft&&M(E.sheenColorMap.channel),sheenRoughnessMapUv:Et&&M(E.sheenRoughnessMap.channel),specularMapUv:Xt&&M(E.specularMap.channel),specularColorMapUv:Vt&&M(E.specularColorMap.channel),specularIntensityMapUv:ie&&M(E.specularIntensityMap.channel),transmissionMapUv:U&&M(E.transmissionMap.channel),thicknessMapUv:pt&&M(E.thicknessMap.channel),alphaMapUv:Q&&M(E.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(ot||S),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!X.attributes.uv&&(Gt||Q),fog:!!I,useFog:E.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ct,skinning:N.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:mt,morphTextureStride:Rt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:le,decodeVideoTexture:Gt&&E.map.isVideoTexture===!0&&Yt.getTransfer(E.map.colorSpace)===te,decodeVideoTextureEmissive:Tt&&E.emissiveMap.isVideoTexture===!0&&Yt.getTransfer(E.emissiveMap.colorSpace)===te,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===En,flipSided:E.side===Le,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:zt&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(zt&&E.extensions.multiDraw===!0||Lt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return be.vertexUv1s=l.has(1),be.vertexUv2s=l.has(2),be.vertexUv3s=l.has(3),l.clear(),be}function p(E){const y=[];if(E.shaderID?y.push(E.shaderID):(y.push(E.customVertexShaderID),y.push(E.customFragmentShaderID)),E.defines!==void 0)for(const P in E.defines)y.push(P),y.push(E.defines[P]);return E.isRawShaderMaterial===!1&&(v(y,E),x(y,E),y.push(i.outputColorSpace)),y.push(E.customProgramCacheKey),y.join()}function v(E,y){E.push(y.precision),E.push(y.outputColorSpace),E.push(y.envMapMode),E.push(y.envMapCubeUVHeight),E.push(y.mapUv),E.push(y.alphaMapUv),E.push(y.lightMapUv),E.push(y.aoMapUv),E.push(y.bumpMapUv),E.push(y.normalMapUv),E.push(y.displacementMapUv),E.push(y.emissiveMapUv),E.push(y.metalnessMapUv),E.push(y.roughnessMapUv),E.push(y.anisotropyMapUv),E.push(y.clearcoatMapUv),E.push(y.clearcoatNormalMapUv),E.push(y.clearcoatRoughnessMapUv),E.push(y.iridescenceMapUv),E.push(y.iridescenceThicknessMapUv),E.push(y.sheenColorMapUv),E.push(y.sheenRoughnessMapUv),E.push(y.specularMapUv),E.push(y.specularColorMapUv),E.push(y.specularIntensityMapUv),E.push(y.transmissionMapUv),E.push(y.thicknessMapUv),E.push(y.combine),E.push(y.fogExp2),E.push(y.sizeAttenuation),E.push(y.morphTargetsCount),E.push(y.morphAttributeCount),E.push(y.numDirLights),E.push(y.numPointLights),E.push(y.numSpotLights),E.push(y.numSpotLightMaps),E.push(y.numHemiLights),E.push(y.numRectAreaLights),E.push(y.numDirLightShadows),E.push(y.numPointLightShadows),E.push(y.numSpotLightShadows),E.push(y.numSpotLightShadowsWithMaps),E.push(y.numLightProbes),E.push(y.shadowMapType),E.push(y.toneMapping),E.push(y.numClippingPlanes),E.push(y.numClipIntersection),E.push(y.depthPacking)}function x(E,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),E.push(a.mask)}function _(E){const y=g[E.type];let P;if(y){const z=an[y];P=mu.clone(z.uniforms)}else P=E.uniforms;return P}function R(E,y){let P;for(let z=0,N=h.length;z<N;z++){const I=h[z];if(I.cacheKey===y){P=I,++P.usedTimes;break}}return P===void 0&&(P=new Cm(i,y,E,r),h.push(P)),P}function T(E){if(--E.usedTimes===0){const y=h.indexOf(E);h[y]=h[h.length-1],h.pop(),E.destroy()}}function A(E){c.remove(E)}function C(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:R,releaseProgram:T,releaseShaderCache:A,programs:h,dispose:C}}function Um(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Nm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Uc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Nc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,f,g,M,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:M,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=M,p.group=m),t++,p}function a(u,d,f,g,M,m){const p=o(u,d,f,g,M,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function c(u,d,f,g,M,m){const p=o(u,d,f,g,M,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||Nm),n.length>1&&n.sort(d||Uc),s.length>1&&s.sort(d||Uc)}function h(){for(let u=t,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function Fm(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Nc,i.set(n,[o])):s>=r.length?(o=new Nc,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Om(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new Dt};break;case"SpotLight":e={position:new D,direction:new D,color:new Dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Dt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Dt,groundColor:new Dt};break;case"RectAreaLight":e={color:new Dt,position:new D,halfWidth:new D,halfHeight:new D};break}return i[t.id]=e,e}}}function zm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Bm=0;function km(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Vm(i){const t=new Om,e=zm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);const s=new D,r=new qt,o=new qt;function a(l){let h=0,u=0,d=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let f=0,g=0,M=0,m=0,p=0,v=0,x=0,_=0,R=0,T=0,A=0;l.sort(km);for(let E=0,y=l.length;E<y;E++){const P=l[E],z=P.color,N=P.intensity,I=P.distance,X=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=z.r*N,u+=z.g*N,d+=z.b*N;else if(P.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(P.sh.coefficients[H],N);A++}else if(P.isDirectionalLight){const H=t.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const $=P.shadow,V=e.get(P);V.shadowIntensity=$.intensity,V.shadowBias=$.bias,V.shadowNormalBias=$.normalBias,V.shadowRadius=$.radius,V.shadowMapSize=$.mapSize,n.directionalShadow[f]=V,n.directionalShadowMap[f]=X,n.directionalShadowMatrix[f]=P.shadow.matrix,v++}n.directional[f]=H,f++}else if(P.isSpotLight){const H=t.get(P);H.position.setFromMatrixPosition(P.matrixWorld),H.color.copy(z).multiplyScalar(N),H.distance=I,H.coneCos=Math.cos(P.angle),H.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),H.decay=P.decay,n.spot[M]=H;const $=P.shadow;if(P.map&&(n.spotLightMap[R]=P.map,R++,$.updateMatrices(P),P.castShadow&&T++),n.spotLightMatrix[M]=$.matrix,P.castShadow){const V=e.get(P);V.shadowIntensity=$.intensity,V.shadowBias=$.bias,V.shadowNormalBias=$.normalBias,V.shadowRadius=$.radius,V.shadowMapSize=$.mapSize,n.spotShadow[M]=V,n.spotShadowMap[M]=X,_++}M++}else if(P.isRectAreaLight){const H=t.get(P);H.color.copy(z).multiplyScalar(N),H.halfWidth.set(P.width*.5,0,0),H.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=H,m++}else if(P.isPointLight){const H=t.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),H.distance=P.distance,H.decay=P.decay,P.castShadow){const $=P.shadow,V=e.get(P);V.shadowIntensity=$.intensity,V.shadowBias=$.bias,V.shadowNormalBias=$.normalBias,V.shadowRadius=$.radius,V.shadowMapSize=$.mapSize,V.shadowCameraNear=$.camera.near,V.shadowCameraFar=$.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=P.shadow.matrix,x++}n.point[g]=H,g++}else if(P.isHemisphereLight){const H=t.get(P);H.skyColor.copy(P.color).multiplyScalar(N),H.groundColor.copy(P.groundColor).multiplyScalar(N),n.hemi[p]=H,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=dt.LTC_FLOAT_1,n.rectAreaLTC2=dt.LTC_FLOAT_2):(n.rectAreaLTC1=dt.LTC_HALF_1,n.rectAreaLTC2=dt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const C=n.hash;(C.directionalLength!==f||C.pointLength!==g||C.spotLength!==M||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==v||C.numPointShadows!==x||C.numSpotShadows!==_||C.numSpotMaps!==R||C.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=M,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=_+R-T,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=A,C.directionalLength=f,C.pointLength=g,C.spotLength=M,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=v,C.numPointShadows=x,C.numSpotShadows=_,C.numSpotMaps=R,C.numLightProbes=A,n.version=Bm++)}function c(l,h){let u=0,d=0,f=0,g=0,M=0;const m=h.matrixWorldInverse;for(let p=0,v=l.length;p<v;p++){const x=l[p];if(x.isDirectionalLight){const _=n.directional[u];_.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),u++}else if(x.isSpotLight){const _=n.spot[f];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),f++}else if(x.isRectAreaLight){const _=n.rectArea[g];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(x.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(x.width*.5,0,0),_.halfHeight.set(0,x.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const _=n.point[d];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){const _=n.hemi[M];_.direction.setFromMatrixPosition(x.matrixWorld),_.direction.transformDirection(m),M++}}}return{setup:a,setupView:c,state:n}}function Fc(i){const t=new Vm(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Hm(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Fc(i),t.set(s,[a])):r>=o.length?(a=new Fc(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class Gm extends Gi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=zh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Wm extends Gi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Xm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qm=`uniform sampler2D shadow_pass;
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
}`;function Ym(i,t,e){let n=new va;const s=new ht,r=new ht,o=new ue,a=new Gm({depthPacking:Bh}),c=new Wm,l={},h=e.maxTextureSize,u={[Hn]:Le,[Le]:Hn,[En]:En},d=new wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:Xm,fragmentShader:qm}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Ce;g.setAttribute("position",new Se(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new ee(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=al;let p=this.type;this.render=function(T,A,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const E=i.getRenderTarget(),y=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),z=i.state;z.setBlending(Bn),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const N=p!==Sn&&this.type===Sn,I=p===Sn&&this.type!==Sn;for(let X=0,H=T.length;X<H;X++){const $=T[X],V=$.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const nt=V.getFrameExtents();if(s.multiply(nt),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/nt.x),s.x=r.x*nt.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/nt.y),s.y=r.y*nt.y,V.mapSize.y=r.y)),V.map===null||N===!0||I===!0){const mt=this.type!==Sn?{minFilter:We,magFilter:We}:{};V.map!==null&&V.map.dispose(),V.map=new ai(s.x,s.y,mt),V.map.texture.name=$.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const ft=V.getViewportCount();for(let mt=0;mt<ft;mt++){const Rt=V.getViewport(mt);o.set(r.x*Rt.x,r.y*Rt.y,r.x*Rt.z,r.y*Rt.w),z.viewport(o),V.updateMatrices($,mt),n=V.getFrustum(),_(A,C,V.camera,$,this.type)}V.isPointLightShadow!==!0&&this.type===Sn&&v(V,C),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(E,y,P)};function v(T,A){const C=t.update(M);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new ai(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(A,null,C,d,M,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(A,null,C,f,M,null)}function x(T,A,C,E){let y=null;const P=C.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)y=P;else if(y=C.isPointLight===!0?c:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const z=y.uuid,N=A.uuid;let I=l[z];I===void 0&&(I={},l[z]=I);let X=I[N];X===void 0&&(X=y.clone(),I[N]=X,A.addEventListener("dispose",R)),y=X}if(y.visible=A.visible,y.wireframe=A.wireframe,E===Sn?y.side=A.shadowSide!==null?A.shadowSide:A.side:y.side=A.shadowSide!==null?A.shadowSide:u[A.side],y.alphaMap=A.alphaMap,y.alphaTest=A.alphaTest,y.map=A.map,y.clipShadows=A.clipShadows,y.clippingPlanes=A.clippingPlanes,y.clipIntersection=A.clipIntersection,y.displacementMap=A.displacementMap,y.displacementScale=A.displacementScale,y.displacementBias=A.displacementBias,y.wireframeLinewidth=A.wireframeLinewidth,y.linewidth=A.linewidth,C.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const z=i.properties.get(y);z.light=C}return y}function _(T,A,C,E,y){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&y===Sn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,T.matrixWorld);const N=t.update(T),I=T.material;if(Array.isArray(I)){const X=N.groups;for(let H=0,$=X.length;H<$;H++){const V=X[H],nt=I[V.materialIndex];if(nt&&nt.visible){const ft=x(T,nt,E,y);T.onBeforeShadow(i,T,A,C,N,ft,V),i.renderBufferDirect(C,null,N,ft,T,V),T.onAfterShadow(i,T,A,C,N,ft,V)}}}else if(I.visible){const X=x(T,I,E,y);T.onBeforeShadow(i,T,A,C,N,X,null),i.renderBufferDirect(C,null,N,X,T,null),T.onAfterShadow(i,T,A,C,N,X,null)}}const z=T.children;for(let N=0,I=z.length;N<I;N++)_(z[N],A,C,E,y)}function R(T){T.target.removeEventListener("dispose",R);for(const C in l){const E=l[C],y=T.target.uuid;y in E&&(E[y].dispose(),delete E[y])}}}const Zm={[uo]:fo,[po]:_o,[mo]:vo,[Ii]:go,[fo]:uo,[_o]:po,[vo]:mo,[go]:Ii};function Jm(i,t){function e(){let U=!1;const pt=new ue;let q=null;const Q=new ue(0,0,0,0);return{setMask:function(vt){q!==vt&&!U&&(i.colorMask(vt,vt,vt,vt),q=vt)},setLocked:function(vt){U=vt},setClear:function(vt,gt,zt,le,be){be===!0&&(vt*=le,gt*=le,zt*=le),pt.set(vt,gt,zt,le),Q.equals(pt)===!1&&(i.clearColor(vt,gt,zt,le),Q.copy(pt))},reset:function(){U=!1,q=null,Q.set(-1,0,0,0)}}}function n(){let U=!1,pt=!1,q=null,Q=null,vt=null;return{setReversed:function(gt){if(pt!==gt){const zt=t.get("EXT_clip_control");pt?zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.ZERO_TO_ONE_EXT):zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.NEGATIVE_ONE_TO_ONE_EXT);const le=vt;vt=null,this.setClear(le)}pt=gt},getReversed:function(){return pt},setTest:function(gt){gt?at(i.DEPTH_TEST):Ct(i.DEPTH_TEST)},setMask:function(gt){q!==gt&&!U&&(i.depthMask(gt),q=gt)},setFunc:function(gt){if(pt&&(gt=Zm[gt]),Q!==gt){switch(gt){case uo:i.depthFunc(i.NEVER);break;case fo:i.depthFunc(i.ALWAYS);break;case po:i.depthFunc(i.LESS);break;case Ii:i.depthFunc(i.LEQUAL);break;case mo:i.depthFunc(i.EQUAL);break;case go:i.depthFunc(i.GEQUAL);break;case _o:i.depthFunc(i.GREATER);break;case vo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Q=gt}},setLocked:function(gt){U=gt},setClear:function(gt){vt!==gt&&(pt&&(gt=1-gt),i.clearDepth(gt),vt=gt)},reset:function(){U=!1,q=null,Q=null,vt=null,pt=!1}}}function s(){let U=!1,pt=null,q=null,Q=null,vt=null,gt=null,zt=null,le=null,be=null;return{setTest:function(jt){U||(jt?at(i.STENCIL_TEST):Ct(i.STENCIL_TEST))},setMask:function(jt){pt!==jt&&!U&&(i.stencilMask(jt),pt=jt)},setFunc:function(jt,Ke,fn){(q!==jt||Q!==Ke||vt!==fn)&&(i.stencilFunc(jt,Ke,fn),q=jt,Q=Ke,vt=fn)},setOp:function(jt,Ke,fn){(gt!==jt||zt!==Ke||le!==fn)&&(i.stencilOp(jt,Ke,fn),gt=jt,zt=Ke,le=fn)},setLocked:function(jt){U=jt},setClear:function(jt){be!==jt&&(i.clearStencil(jt),be=jt)},reset:function(){U=!1,pt=null,q=null,Q=null,vt=null,gt=null,zt=null,le=null,be=null}}}const r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,M=!1,m=null,p=null,v=null,x=null,_=null,R=null,T=null,A=new Dt(0,0,0),C=0,E=!1,y=null,P=null,z=null,N=null,I=null;const X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,$=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(V)[1]),H=$>=1):V.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),H=$>=2);let nt=null,ft={};const mt=i.getParameter(i.SCISSOR_BOX),Rt=i.getParameter(i.VIEWPORT),Nt=new ue().fromArray(mt),J=new ue().fromArray(Rt);function it(U,pt,q,Q){const vt=new Uint8Array(4),gt=i.createTexture();i.bindTexture(U,gt),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let zt=0;zt<q;zt++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(pt,0,i.RGBA,1,1,Q,0,i.RGBA,i.UNSIGNED_BYTE,vt):i.texImage2D(pt+zt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,vt);return gt}const yt={};yt[i.TEXTURE_2D]=it(i.TEXTURE_2D,i.TEXTURE_2D,1),yt[i.TEXTURE_CUBE_MAP]=it(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),yt[i.TEXTURE_2D_ARRAY]=it(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),yt[i.TEXTURE_3D]=it(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),at(i.DEPTH_TEST),o.setFunc(Ii),K(!1),ot(ka),at(i.CULL_FACE),L(Bn);function at(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function Ct(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function It(U,pt){return u[U]!==pt?(i.bindFramebuffer(U,pt),u[U]=pt,U===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=pt),U===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=pt),!0):!1}function Lt(U,pt){let q=f,Q=!1;if(U){q=d.get(pt),q===void 0&&(q=[],d.set(pt,q));const vt=U.textures;if(q.length!==vt.length||q[0]!==i.COLOR_ATTACHMENT0){for(let gt=0,zt=vt.length;gt<zt;gt++)q[gt]=i.COLOR_ATTACHMENT0+gt;q.length=vt.length,Q=!0}}else q[0]!==i.BACK&&(q[0]=i.BACK,Q=!0);Q&&i.drawBuffers(q)}function Gt(U){return g!==U?(i.useProgram(U),g=U,!0):!1}const j={[Qn]:i.FUNC_ADD,[fh]:i.FUNC_SUBTRACT,[dh]:i.FUNC_REVERSE_SUBTRACT};j[ph]=i.MIN,j[mh]=i.MAX;const st={[gh]:i.ZERO,[_h]:i.ONE,[vh]:i.SRC_COLOR,[lo]:i.SRC_ALPHA,[Th]:i.SRC_ALPHA_SATURATE,[Sh]:i.DST_COLOR,[Mh]:i.DST_ALPHA,[xh]:i.ONE_MINUS_SRC_COLOR,[ho]:i.ONE_MINUS_SRC_ALPHA,[Eh]:i.ONE_MINUS_DST_COLOR,[yh]:i.ONE_MINUS_DST_ALPHA,[bh]:i.CONSTANT_COLOR,[Ah]:i.ONE_MINUS_CONSTANT_COLOR,[wh]:i.CONSTANT_ALPHA,[Rh]:i.ONE_MINUS_CONSTANT_ALPHA};function L(U,pt,q,Q,vt,gt,zt,le,be,jt){if(U===Bn){M===!0&&(Ct(i.BLEND),M=!1);return}if(M===!1&&(at(i.BLEND),M=!0),U!==uh){if(U!==m||jt!==E){if((p!==Qn||_!==Qn)&&(i.blendEquation(i.FUNC_ADD),p=Qn,_=Qn),jt)switch(U){case Ci:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Va:i.blendFunc(i.ONE,i.ONE);break;case Ha:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ga:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Ci:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Va:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ha:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ga:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}v=null,x=null,R=null,T=null,A.set(0,0,0),C=0,m=U,E=jt}return}vt=vt||pt,gt=gt||q,zt=zt||Q,(pt!==p||vt!==_)&&(i.blendEquationSeparate(j[pt],j[vt]),p=pt,_=vt),(q!==v||Q!==x||gt!==R||zt!==T)&&(i.blendFuncSeparate(st[q],st[Q],st[gt],st[zt]),v=q,x=Q,R=gt,T=zt),(le.equals(A)===!1||be!==C)&&(i.blendColor(le.r,le.g,le.b,be),A.copy(le),C=be),m=U,E=!1}function k(U,pt){U.side===En?Ct(i.CULL_FACE):at(i.CULL_FACE);let q=U.side===Le;pt&&(q=!q),K(q),U.blending===Ci&&U.transparent===!1?L(Bn):L(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);const Q=U.stencilWrite;a.setTest(Q),Q&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Tt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?at(i.SAMPLE_ALPHA_TO_COVERAGE):Ct(i.SAMPLE_ALPHA_TO_COVERAGE)}function K(U){y!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),y=U)}function ot(U){U!==lh?(at(i.CULL_FACE),U!==P&&(U===ka?i.cullFace(i.BACK):U===hh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ct(i.CULL_FACE),P=U}function et(U){U!==z&&(H&&i.lineWidth(U),z=U)}function Tt(U,pt,q){U?(at(i.POLYGON_OFFSET_FILL),(N!==pt||I!==q)&&(i.polygonOffset(pt,q),N=pt,I=q)):Ct(i.POLYGON_OFFSET_FILL)}function ut(U){U?at(i.SCISSOR_TEST):Ct(i.SCISSOR_TEST)}function w(U){U===void 0&&(U=i.TEXTURE0+X-1),nt!==U&&(i.activeTexture(U),nt=U)}function S(U,pt,q){q===void 0&&(nt===null?q=i.TEXTURE0+X-1:q=nt);let Q=ft[q];Q===void 0&&(Q={type:void 0,texture:void 0},ft[q]=Q),(Q.type!==U||Q.texture!==pt)&&(nt!==q&&(i.activeTexture(q),nt=q),i.bindTexture(U,pt||yt[U]),Q.type=U,Q.texture=pt)}function B(){const U=ft[nt];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Z(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function tt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Y(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function xt(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function lt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Mt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Wt(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function rt(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function St(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ut(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ft(U){Nt.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),Nt.copy(U))}function Et(U){J.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),J.copy(U))}function Xt(U,pt){let q=l.get(pt);q===void 0&&(q=new WeakMap,l.set(pt,q));let Q=q.get(U);Q===void 0&&(Q=i.getUniformBlockIndex(pt,U.name),q.set(U,Q))}function Vt(U,pt){const Q=l.get(pt).get(U);c.get(pt)!==Q&&(i.uniformBlockBinding(pt,Q,U.__bindingPointIndex),c.set(pt,Q))}function ie(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},nt=null,ft={},u={},d=new WeakMap,f=[],g=null,M=!1,m=null,p=null,v=null,x=null,_=null,R=null,T=null,A=new Dt(0,0,0),C=0,E=!1,y=null,P=null,z=null,N=null,I=null,Nt.set(0,0,i.canvas.width,i.canvas.height),J.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:at,disable:Ct,bindFramebuffer:It,drawBuffers:Lt,useProgram:Gt,setBlending:L,setMaterial:k,setFlipSided:K,setCullFace:ot,setLineWidth:et,setPolygonOffset:Tt,setScissorTest:ut,activeTexture:w,bindTexture:S,unbindTexture:B,compressedTexImage2D:Z,compressedTexImage3D:tt,texImage2D:St,texImage3D:Ut,updateUBOMapping:Xt,uniformBlockBinding:Vt,texStorage2D:Wt,texStorage3D:rt,texSubImage2D:Y,texSubImage3D:xt,compressedTexSubImage2D:lt,compressedTexSubImage3D:Mt,scissor:Ft,viewport:Et,reset:ie}}function Oc(i,t,e,n){const s=Km(n);switch(e){case pl:return i*t;case gl:return i*t;case _l:return i*t*2;case fa:return i*t/s.components*s.byteLength;case da:return i*t/s.components*s.byteLength;case vl:return i*t*2/s.components*s.byteLength;case pa:return i*t*2/s.components*s.byteLength;case ml:return i*t*3/s.components*s.byteLength;case nn:return i*t*4/s.components*s.byteLength;case ma:return i*t*4/s.components*s.byteLength;case $s:case js:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Qs:case tr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case To:case Ao:return Math.max(i,16)*Math.max(t,8)/4;case Eo:case bo:return Math.max(i,8)*Math.max(t,8)/2;case wo:case Ro:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Co:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Po:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Lo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Do:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Io:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Uo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case No:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Fo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Oo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case zo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Bo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ko:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Vo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ho:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Go:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case er:case Wo:case Xo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case xl:case qo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Yo:case Zo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Km(i){switch(i){case An:case ul:return{byteLength:1,components:1};case us:case fl:case gs:return{byteLength:2,components:1};case ha:case ua:return{byteLength:2,components:4};case oi:case la:case hn:return{byteLength:4,components:1};case dl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function $m(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ht,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,S){return f?new OffscreenCanvas(w,S):lr("canvas")}function M(w,S,B){let Z=1;const tt=ut(w);if((tt.width>B||tt.height>B)&&(Z=B/Math.max(tt.width,tt.height)),Z<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const Y=Math.floor(Z*tt.width),xt=Math.floor(Z*tt.height);u===void 0&&(u=g(Y,xt));const lt=S?g(Y,xt):u;return lt.width=Y,lt.height=xt,lt.getContext("2d").drawImage(w,0,0,Y,xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+Y+"x"+xt+")."),lt}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),w;return w}function m(w){return w.generateMipmaps}function p(w){i.generateMipmap(w)}function v(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(w,S,B,Z,tt=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let Y=S;if(S===i.RED&&(B===i.FLOAT&&(Y=i.R32F),B===i.HALF_FLOAT&&(Y=i.R16F),B===i.UNSIGNED_BYTE&&(Y=i.R8)),S===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.R8UI),B===i.UNSIGNED_SHORT&&(Y=i.R16UI),B===i.UNSIGNED_INT&&(Y=i.R32UI),B===i.BYTE&&(Y=i.R8I),B===i.SHORT&&(Y=i.R16I),B===i.INT&&(Y=i.R32I)),S===i.RG&&(B===i.FLOAT&&(Y=i.RG32F),B===i.HALF_FLOAT&&(Y=i.RG16F),B===i.UNSIGNED_BYTE&&(Y=i.RG8)),S===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.RG8UI),B===i.UNSIGNED_SHORT&&(Y=i.RG16UI),B===i.UNSIGNED_INT&&(Y=i.RG32UI),B===i.BYTE&&(Y=i.RG8I),B===i.SHORT&&(Y=i.RG16I),B===i.INT&&(Y=i.RG32I)),S===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),B===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),B===i.UNSIGNED_INT&&(Y=i.RGB32UI),B===i.BYTE&&(Y=i.RGB8I),B===i.SHORT&&(Y=i.RGB16I),B===i.INT&&(Y=i.RGB32I)),S===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),B===i.UNSIGNED_INT&&(Y=i.RGBA32UI),B===i.BYTE&&(Y=i.RGBA8I),B===i.SHORT&&(Y=i.RGBA16I),B===i.INT&&(Y=i.RGBA32I)),S===i.RGB&&B===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),S===i.RGBA){const xt=tt?dr:Yt.getTransfer(Z);B===i.FLOAT&&(Y=i.RGBA32F),B===i.HALF_FLOAT&&(Y=i.RGBA16F),B===i.UNSIGNED_BYTE&&(Y=xt===te?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function _(w,S){let B;return w?S===null||S===oi||S===Fi?B=i.DEPTH24_STENCIL8:S===hn?B=i.DEPTH32F_STENCIL8:S===us&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===oi||S===Fi?B=i.DEPTH_COMPONENT24:S===hn?B=i.DEPTH_COMPONENT32F:S===us&&(B=i.DEPTH_COMPONENT16),B}function R(w,S){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==We&&w.minFilter!==ln?Math.log2(Math.max(S.width,S.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?S.mipmaps.length:1}function T(w){const S=w.target;S.removeEventListener("dispose",T),C(S),S.isVideoTexture&&h.delete(S)}function A(w){const S=w.target;S.removeEventListener("dispose",A),y(S)}function C(w){const S=n.get(w);if(S.__webglInit===void 0)return;const B=w.source,Z=d.get(B);if(Z){const tt=Z[S.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&E(w),Object.keys(Z).length===0&&d.delete(B)}n.remove(w)}function E(w){const S=n.get(w);i.deleteTexture(S.__webglTexture);const B=w.source,Z=d.get(B);delete Z[S.__cacheKey],o.memory.textures--}function y(w){const S=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(S.__webglFramebuffer[Z]))for(let tt=0;tt<S.__webglFramebuffer[Z].length;tt++)i.deleteFramebuffer(S.__webglFramebuffer[Z][tt]);else i.deleteFramebuffer(S.__webglFramebuffer[Z]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[Z])}else{if(Array.isArray(S.__webglFramebuffer))for(let Z=0;Z<S.__webglFramebuffer.length;Z++)i.deleteFramebuffer(S.__webglFramebuffer[Z]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Z=0;Z<S.__webglColorRenderbuffer.length;Z++)S.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[Z]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const B=w.textures;for(let Z=0,tt=B.length;Z<tt;Z++){const Y=n.get(B[Z]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(B[Z])}n.remove(w)}let P=0;function z(){P=0}function N(){const w=P;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),P+=1,w}function I(w){const S=[];return S.push(w.wrapS),S.push(w.wrapT),S.push(w.wrapR||0),S.push(w.magFilter),S.push(w.minFilter),S.push(w.anisotropy),S.push(w.internalFormat),S.push(w.format),S.push(w.type),S.push(w.generateMipmaps),S.push(w.premultiplyAlpha),S.push(w.flipY),S.push(w.unpackAlignment),S.push(w.colorSpace),S.join()}function X(w,S){const B=n.get(w);if(w.isVideoTexture&&et(w),w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){const Z=w.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(B,w,S);return}}e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+S)}function H(w,S){const B=n.get(w);if(w.version>0&&B.__version!==w.version){J(B,w,S);return}e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+S)}function $(w,S){const B=n.get(w);if(w.version>0&&B.__version!==w.version){J(B,w,S);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+S)}function V(w,S){const B=n.get(w);if(w.version>0&&B.__version!==w.version){it(B,w,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+S)}const nt={[yo]:i.REPEAT,[ni]:i.CLAMP_TO_EDGE,[So]:i.MIRRORED_REPEAT},ft={[We]:i.NEAREST,[Oh]:i.NEAREST_MIPMAP_NEAREST,[Ts]:i.NEAREST_MIPMAP_LINEAR,[ln]:i.LINEAR,[yr]:i.LINEAR_MIPMAP_NEAREST,[ii]:i.LINEAR_MIPMAP_LINEAR},mt={[Vh]:i.NEVER,[Yh]:i.ALWAYS,[Hh]:i.LESS,[Ml]:i.LEQUAL,[Gh]:i.EQUAL,[qh]:i.GEQUAL,[Wh]:i.GREATER,[Xh]:i.NOTEQUAL};function Rt(w,S){if(S.type===hn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===ln||S.magFilter===yr||S.magFilter===Ts||S.magFilter===ii||S.minFilter===ln||S.minFilter===yr||S.minFilter===Ts||S.minFilter===ii)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,nt[S.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,nt[S.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,nt[S.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,ft[S.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,ft[S.minFilter]),S.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,mt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===We||S.minFilter!==Ts&&S.minFilter!==ii||S.type===hn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(w,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Nt(w,S){let B=!1;w.__webglInit===void 0&&(w.__webglInit=!0,S.addEventListener("dispose",T));const Z=S.source;let tt=d.get(Z);tt===void 0&&(tt={},d.set(Z,tt));const Y=I(S);if(Y!==w.__cacheKey){tt[Y]===void 0&&(tt[Y]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,B=!0),tt[Y].usedTimes++;const xt=tt[w.__cacheKey];xt!==void 0&&(tt[w.__cacheKey].usedTimes--,xt.usedTimes===0&&E(S)),w.__cacheKey=Y,w.__webglTexture=tt[Y].texture}return B}function J(w,S,B){let Z=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Z=i.TEXTURE_3D);const tt=Nt(w,S),Y=S.source;e.bindTexture(Z,w.__webglTexture,i.TEXTURE0+B);const xt=n.get(Y);if(Y.version!==xt.__version||tt===!0){e.activeTexture(i.TEXTURE0+B);const lt=Yt.getPrimaries(Yt.workingColorSpace),Mt=S.colorSpace===On?null:Yt.getPrimaries(S.colorSpace),Wt=S.colorSpace===On||lt===Mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);let rt=M(S.image,!1,s.maxTextureSize);rt=Tt(S,rt);const St=r.convert(S.format,S.colorSpace),Ut=r.convert(S.type);let Ft=x(S.internalFormat,St,Ut,S.colorSpace,S.isVideoTexture);Rt(Z,S);let Et;const Xt=S.mipmaps,Vt=S.isVideoTexture!==!0,ie=xt.__version===void 0||tt===!0,U=Y.dataReady,pt=R(S,rt);if(S.isDepthTexture)Ft=_(S.format===Oi,S.type),ie&&(Vt?e.texStorage2D(i.TEXTURE_2D,1,Ft,rt.width,rt.height):e.texImage2D(i.TEXTURE_2D,0,Ft,rt.width,rt.height,0,St,Ut,null));else if(S.isDataTexture)if(Xt.length>0){Vt&&ie&&e.texStorage2D(i.TEXTURE_2D,pt,Ft,Xt[0].width,Xt[0].height);for(let q=0,Q=Xt.length;q<Q;q++)Et=Xt[q],Vt?U&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,Et.width,Et.height,St,Ut,Et.data):e.texImage2D(i.TEXTURE_2D,q,Ft,Et.width,Et.height,0,St,Ut,Et.data);S.generateMipmaps=!1}else Vt?(ie&&e.texStorage2D(i.TEXTURE_2D,pt,Ft,rt.width,rt.height),U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,rt.width,rt.height,St,Ut,rt.data)):e.texImage2D(i.TEXTURE_2D,0,Ft,rt.width,rt.height,0,St,Ut,rt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Vt&&ie&&e.texStorage3D(i.TEXTURE_2D_ARRAY,pt,Ft,Xt[0].width,Xt[0].height,rt.depth);for(let q=0,Q=Xt.length;q<Q;q++)if(Et=Xt[q],S.format!==nn)if(St!==null)if(Vt){if(U)if(S.layerUpdates.size>0){const vt=Oc(Et.width,Et.height,S.format,S.type);for(const gt of S.layerUpdates){const zt=Et.data.subarray(gt*vt/Et.data.BYTES_PER_ELEMENT,(gt+1)*vt/Et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,gt,Et.width,Et.height,1,St,zt)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,Et.width,Et.height,rt.depth,St,Et.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,q,Ft,Et.width,Et.height,rt.depth,0,Et.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Vt?U&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,Et.width,Et.height,rt.depth,St,Ut,Et.data):e.texImage3D(i.TEXTURE_2D_ARRAY,q,Ft,Et.width,Et.height,rt.depth,0,St,Ut,Et.data)}else{Vt&&ie&&e.texStorage2D(i.TEXTURE_2D,pt,Ft,Xt[0].width,Xt[0].height);for(let q=0,Q=Xt.length;q<Q;q++)Et=Xt[q],S.format!==nn?St!==null?Vt?U&&e.compressedTexSubImage2D(i.TEXTURE_2D,q,0,0,Et.width,Et.height,St,Et.data):e.compressedTexImage2D(i.TEXTURE_2D,q,Ft,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Vt?U&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,Et.width,Et.height,St,Ut,Et.data):e.texImage2D(i.TEXTURE_2D,q,Ft,Et.width,Et.height,0,St,Ut,Et.data)}else if(S.isDataArrayTexture)if(Vt){if(ie&&e.texStorage3D(i.TEXTURE_2D_ARRAY,pt,Ft,rt.width,rt.height,rt.depth),U)if(S.layerUpdates.size>0){const q=Oc(rt.width,rt.height,S.format,S.type);for(const Q of S.layerUpdates){const vt=rt.data.subarray(Q*q/rt.data.BYTES_PER_ELEMENT,(Q+1)*q/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Q,rt.width,rt.height,1,St,Ut,vt)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,St,Ut,rt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ft,rt.width,rt.height,rt.depth,0,St,Ut,rt.data);else if(S.isData3DTexture)Vt?(ie&&e.texStorage3D(i.TEXTURE_3D,pt,Ft,rt.width,rt.height,rt.depth),U&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,St,Ut,rt.data)):e.texImage3D(i.TEXTURE_3D,0,Ft,rt.width,rt.height,rt.depth,0,St,Ut,rt.data);else if(S.isFramebufferTexture){if(ie)if(Vt)e.texStorage2D(i.TEXTURE_2D,pt,Ft,rt.width,rt.height);else{let q=rt.width,Q=rt.height;for(let vt=0;vt<pt;vt++)e.texImage2D(i.TEXTURE_2D,vt,Ft,q,Q,0,St,Ut,null),q>>=1,Q>>=1}}else if(Xt.length>0){if(Vt&&ie){const q=ut(Xt[0]);e.texStorage2D(i.TEXTURE_2D,pt,Ft,q.width,q.height)}for(let q=0,Q=Xt.length;q<Q;q++)Et=Xt[q],Vt?U&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,St,Ut,Et):e.texImage2D(i.TEXTURE_2D,q,Ft,St,Ut,Et);S.generateMipmaps=!1}else if(Vt){if(ie){const q=ut(rt);e.texStorage2D(i.TEXTURE_2D,pt,Ft,q.width,q.height)}U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,St,Ut,rt)}else e.texImage2D(i.TEXTURE_2D,0,Ft,St,Ut,rt);m(S)&&p(Z),xt.__version=Y.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function it(w,S,B){if(S.image.length!==6)return;const Z=Nt(w,S),tt=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+B);const Y=n.get(tt);if(tt.version!==Y.__version||Z===!0){e.activeTexture(i.TEXTURE0+B);const xt=Yt.getPrimaries(Yt.workingColorSpace),lt=S.colorSpace===On?null:Yt.getPrimaries(S.colorSpace),Mt=S.colorSpace===On||xt===lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);const Wt=S.isCompressedTexture||S.image[0].isCompressedTexture,rt=S.image[0]&&S.image[0].isDataTexture,St=[];for(let Q=0;Q<6;Q++)!Wt&&!rt?St[Q]=M(S.image[Q],!0,s.maxCubemapSize):St[Q]=rt?S.image[Q].image:S.image[Q],St[Q]=Tt(S,St[Q]);const Ut=St[0],Ft=r.convert(S.format,S.colorSpace),Et=r.convert(S.type),Xt=x(S.internalFormat,Ft,Et,S.colorSpace),Vt=S.isVideoTexture!==!0,ie=Y.__version===void 0||Z===!0,U=tt.dataReady;let pt=R(S,Ut);Rt(i.TEXTURE_CUBE_MAP,S);let q;if(Wt){Vt&&ie&&e.texStorage2D(i.TEXTURE_CUBE_MAP,pt,Xt,Ut.width,Ut.height);for(let Q=0;Q<6;Q++){q=St[Q].mipmaps;for(let vt=0;vt<q.length;vt++){const gt=q[vt];S.format!==nn?Ft!==null?Vt?U&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,vt,0,0,gt.width,gt.height,Ft,gt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,vt,Xt,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Vt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,vt,0,0,gt.width,gt.height,Ft,Et,gt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,vt,Xt,gt.width,gt.height,0,Ft,Et,gt.data)}}}else{if(q=S.mipmaps,Vt&&ie){q.length>0&&pt++;const Q=ut(St[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,pt,Xt,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(rt){Vt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,St[Q].width,St[Q].height,Ft,Et,St[Q].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Xt,St[Q].width,St[Q].height,0,Ft,Et,St[Q].data);for(let vt=0;vt<q.length;vt++){const zt=q[vt].image[Q].image;Vt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,vt+1,0,0,zt.width,zt.height,Ft,Et,zt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,vt+1,Xt,zt.width,zt.height,0,Ft,Et,zt.data)}}else{Vt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ft,Et,St[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Xt,Ft,Et,St[Q]);for(let vt=0;vt<q.length;vt++){const gt=q[vt];Vt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,vt+1,0,0,Ft,Et,gt.image[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,vt+1,Xt,Ft,Et,gt.image[Q])}}}m(S)&&p(i.TEXTURE_CUBE_MAP),Y.__version=tt.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function yt(w,S,B,Z,tt,Y){const xt=r.convert(B.format,B.colorSpace),lt=r.convert(B.type),Mt=x(B.internalFormat,xt,lt,B.colorSpace),Wt=n.get(S),rt=n.get(B);if(rt.__renderTarget=S,!Wt.__hasExternalTextures){const St=Math.max(1,S.width>>Y),Ut=Math.max(1,S.height>>Y);tt===i.TEXTURE_3D||tt===i.TEXTURE_2D_ARRAY?e.texImage3D(tt,Y,Mt,St,Ut,S.depth,0,xt,lt,null):e.texImage2D(tt,Y,Mt,St,Ut,0,xt,lt,null)}e.bindFramebuffer(i.FRAMEBUFFER,w),ot(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,tt,rt.__webglTexture,0,K(S)):(tt===i.TEXTURE_2D||tt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,tt,rt.__webglTexture,Y),e.bindFramebuffer(i.FRAMEBUFFER,null)}function at(w,S,B){if(i.bindRenderbuffer(i.RENDERBUFFER,w),S.depthBuffer){const Z=S.depthTexture,tt=Z&&Z.isDepthTexture?Z.type:null,Y=_(S.stencilBuffer,tt),xt=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=K(S);ot(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,lt,Y,S.width,S.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,lt,Y,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Y,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,xt,i.RENDERBUFFER,w)}else{const Z=S.textures;for(let tt=0;tt<Z.length;tt++){const Y=Z[tt],xt=r.convert(Y.format,Y.colorSpace),lt=r.convert(Y.type),Mt=x(Y.internalFormat,xt,lt,Y.colorSpace),Wt=K(S);B&&ot(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Wt,Mt,S.width,S.height):ot(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Wt,Mt,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Mt,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ct(w,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,w),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(S.depthTexture);Z.__renderTarget=S,(!Z.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),X(S.depthTexture,0);const tt=Z.__webglTexture,Y=K(S);if(S.depthTexture.format===Pi)ot(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0);else if(S.depthTexture.format===Oi)ot(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function It(w){const S=n.get(w),B=w.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==w.depthTexture){const Z=w.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Z){const tt=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Z.removeEventListener("dispose",tt)};Z.addEventListener("dispose",tt),S.__depthDisposeCallback=tt}S.__boundDepthTexture=Z}if(w.depthTexture&&!S.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Ct(S.__webglFramebuffer,w)}else if(B){S.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[Z]),S.__webglDepthbuffer[Z]===void 0)S.__webglDepthbuffer[Z]=i.createRenderbuffer(),at(S.__webglDepthbuffer[Z],w,!1);else{const tt=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=S.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,Y)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),at(S.__webglDepthbuffer,w,!1);else{const Z=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,tt=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,tt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Lt(w,S,B){const Z=n.get(w);S!==void 0&&yt(Z.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&It(w)}function Gt(w){const S=w.texture,B=n.get(w),Z=n.get(S);w.addEventListener("dispose",A);const tt=w.textures,Y=w.isWebGLCubeRenderTarget===!0,xt=tt.length>1;if(xt||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=S.version,o.memory.textures++),Y){B.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer[lt]=[];for(let Mt=0;Mt<S.mipmaps.length;Mt++)B.__webglFramebuffer[lt][Mt]=i.createFramebuffer()}else B.__webglFramebuffer[lt]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer=[];for(let lt=0;lt<S.mipmaps.length;lt++)B.__webglFramebuffer[lt]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(xt)for(let lt=0,Mt=tt.length;lt<Mt;lt++){const Wt=n.get(tt[lt]);Wt.__webglTexture===void 0&&(Wt.__webglTexture=i.createTexture(),o.memory.textures++)}if(w.samples>0&&ot(w)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let lt=0;lt<tt.length;lt++){const Mt=tt[lt];B.__webglColorRenderbuffer[lt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[lt]);const Wt=r.convert(Mt.format,Mt.colorSpace),rt=r.convert(Mt.type),St=x(Mt.internalFormat,Wt,rt,Mt.colorSpace,w.isXRRenderTarget===!0),Ut=K(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ut,St,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.RENDERBUFFER,B.__webglColorRenderbuffer[lt])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),at(B.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),Rt(i.TEXTURE_CUBE_MAP,S);for(let lt=0;lt<6;lt++)if(S.mipmaps&&S.mipmaps.length>0)for(let Mt=0;Mt<S.mipmaps.length;Mt++)yt(B.__webglFramebuffer[lt][Mt],w,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Mt);else yt(B.__webglFramebuffer[lt],w,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);m(S)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(xt){for(let lt=0,Mt=tt.length;lt<Mt;lt++){const Wt=tt[lt],rt=n.get(Wt);e.bindTexture(i.TEXTURE_2D,rt.__webglTexture),Rt(i.TEXTURE_2D,Wt),yt(B.__webglFramebuffer,w,Wt,i.COLOR_ATTACHMENT0+lt,i.TEXTURE_2D,0),m(Wt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let lt=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(lt=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(lt,Z.__webglTexture),Rt(lt,S),S.mipmaps&&S.mipmaps.length>0)for(let Mt=0;Mt<S.mipmaps.length;Mt++)yt(B.__webglFramebuffer[Mt],w,S,i.COLOR_ATTACHMENT0,lt,Mt);else yt(B.__webglFramebuffer,w,S,i.COLOR_ATTACHMENT0,lt,0);m(S)&&p(lt),e.unbindTexture()}w.depthBuffer&&It(w)}function j(w){const S=w.textures;for(let B=0,Z=S.length;B<Z;B++){const tt=S[B];if(m(tt)){const Y=v(w),xt=n.get(tt).__webglTexture;e.bindTexture(Y,xt),p(Y),e.unbindTexture()}}}const st=[],L=[];function k(w){if(w.samples>0){if(ot(w)===!1){const S=w.textures,B=w.width,Z=w.height;let tt=i.COLOR_BUFFER_BIT;const Y=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=n.get(w),lt=S.length>1;if(lt)for(let Mt=0;Mt<S.length;Mt++)e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let Mt=0;Mt<S.length;Mt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(tt|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(tt|=i.STENCIL_BUFFER_BIT)),lt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,xt.__webglColorRenderbuffer[Mt]);const Wt=n.get(S[Mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Wt,0)}i.blitFramebuffer(0,0,B,Z,0,0,B,Z,tt,i.NEAREST),c===!0&&(st.length=0,L.length=0,st.push(i.COLOR_ATTACHMENT0+Mt),w.depthBuffer&&w.resolveDepthBuffer===!1&&(st.push(Y),L.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,L)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,st))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),lt)for(let Mt=0;Mt<S.length;Mt++){e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,xt.__webglColorRenderbuffer[Mt]);const Wt=n.get(S[Mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,Wt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){const S=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function K(w){return Math.min(s.maxSamples,w.samples)}function ot(w){const S=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function et(w){const S=o.render.frame;h.get(w)!==S&&(h.set(w,S),w.update())}function Tt(w,S){const B=w.colorSpace,Z=w.format,tt=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||B!==ki&&B!==On&&(Yt.getTransfer(B)===te?(Z!==nn||tt!==An)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),S}function ut(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=N,this.resetTextureUnits=z,this.setTexture2D=X,this.setTexture2DArray=H,this.setTexture3D=$,this.setTextureCube=V,this.rebindTextures=Lt,this.setupRenderTarget=Gt,this.updateRenderTargetMipmap=j,this.updateMultisampleRenderTarget=k,this.setupDepthRenderbuffer=It,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=ot}function jm(i,t){function e(n,s=On){let r;const o=Yt.getTransfer(s);if(n===An)return i.UNSIGNED_BYTE;if(n===ha)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ua)return i.UNSIGNED_SHORT_5_5_5_1;if(n===dl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ul)return i.BYTE;if(n===fl)return i.SHORT;if(n===us)return i.UNSIGNED_SHORT;if(n===la)return i.INT;if(n===oi)return i.UNSIGNED_INT;if(n===hn)return i.FLOAT;if(n===gs)return i.HALF_FLOAT;if(n===pl)return i.ALPHA;if(n===ml)return i.RGB;if(n===nn)return i.RGBA;if(n===gl)return i.LUMINANCE;if(n===_l)return i.LUMINANCE_ALPHA;if(n===Pi)return i.DEPTH_COMPONENT;if(n===Oi)return i.DEPTH_STENCIL;if(n===fa)return i.RED;if(n===da)return i.RED_INTEGER;if(n===vl)return i.RG;if(n===pa)return i.RG_INTEGER;if(n===ma)return i.RGBA_INTEGER;if(n===$s||n===js||n===Qs||n===tr)if(o===te)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===$s)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===js)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Qs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===$s)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===js)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Qs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===tr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Eo||n===To||n===bo||n===Ao)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Eo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===To)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===bo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ao)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===wo||n===Ro||n===Co)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===wo||n===Ro)return o===te?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Co)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Po||n===Lo||n===Do||n===Io||n===Uo||n===No||n===Fo||n===Oo||n===zo||n===Bo||n===ko||n===Vo||n===Ho||n===Go)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Po)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Lo)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Do)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Io)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Uo)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===No)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Fo)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Oo)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===zo)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Bo)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ko)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Vo)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ho)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Go)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===er||n===Wo||n===Xo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===er)return o===te?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Wo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Xo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===xl||n===qo||n===Yo||n===Zo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===er)return r.COMPRESSED_RED_RGTC1_EXT;if(n===qo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Yo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Zo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Fi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Qm extends Ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class si extends Te{constructor(){super(),this.isGroup=!0,this.type="Group"}}const t0={type:"move"};class Kr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new si,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new si,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new si,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const M of t.hand.values()){const m=e.getJointPose(M,n),p=this._getHandJoint(l,M);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(t0)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new si;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const e0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,n0=`
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

}`;class i0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new De,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new wn({vertexShader:e0,fragmentShader:n0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ee(new xs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class s0 extends Vi{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null;const M=new i0,m=e.getContextAttributes();let p=null,v=null;const x=[],_=[],R=new ht;let T=null;const A=new Ze;A.viewport=new ue;const C=new Ze;C.viewport=new ue;const E=[A,C],y=new Qm;let P=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let it=x[J];return it===void 0&&(it=new Kr,x[J]=it),it.getTargetRaySpace()},this.getControllerGrip=function(J){let it=x[J];return it===void 0&&(it=new Kr,x[J]=it),it.getGripSpace()},this.getHand=function(J){let it=x[J];return it===void 0&&(it=new Kr,x[J]=it),it.getHandSpace()};function N(J){const it=_.indexOf(J.inputSource);if(it===-1)return;const yt=x[it];yt!==void 0&&(yt.update(J.inputSource,J.frame,l||o),yt.dispatchEvent({type:J.type,data:J.inputSource}))}function I(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",I),s.removeEventListener("inputsourceschange",X);for(let J=0;J<x.length;J++){const it=_[J];it!==null&&(_[J]=null,x[J].disconnect(it))}P=null,z=null,M.reset(),t.setRenderTarget(p),f=null,d=null,u=null,s=null,v=null,Nt.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",I),s.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(R),s.renderState.layers===void 0){const it={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,it),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new ai(f.framebufferWidth,f.framebufferHeight,{format:nn,type:An,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let it=null,yt=null,at=null;m.depth&&(at=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,it=m.stencil?Oi:Pi,yt=m.stencil?Fi:oi);const Ct={colorFormat:e.RGBA8,depthFormat:at,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(Ct),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),v=new ai(d.textureWidth,d.textureHeight,{format:nn,type:An,depthTexture:new Ul(d.textureWidth,d.textureHeight,yt,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Nt.setContext(s),Nt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function X(J){for(let it=0;it<J.removed.length;it++){const yt=J.removed[it],at=_.indexOf(yt);at>=0&&(_[at]=null,x[at].disconnect(yt))}for(let it=0;it<J.added.length;it++){const yt=J.added[it];let at=_.indexOf(yt);if(at===-1){for(let It=0;It<x.length;It++)if(It>=_.length){_.push(yt),at=It;break}else if(_[It]===null){_[It]=yt,at=It;break}if(at===-1)break}const Ct=x[at];Ct&&Ct.connect(yt)}}const H=new D,$=new D;function V(J,it,yt){H.setFromMatrixPosition(it.matrixWorld),$.setFromMatrixPosition(yt.matrixWorld);const at=H.distanceTo($),Ct=it.projectionMatrix.elements,It=yt.projectionMatrix.elements,Lt=Ct[14]/(Ct[10]-1),Gt=Ct[14]/(Ct[10]+1),j=(Ct[9]+1)/Ct[5],st=(Ct[9]-1)/Ct[5],L=(Ct[8]-1)/Ct[0],k=(It[8]+1)/It[0],K=Lt*L,ot=Lt*k,et=at/(-L+k),Tt=et*-L;if(it.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Tt),J.translateZ(et),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Ct[10]===-1)J.projectionMatrix.copy(it.projectionMatrix),J.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{const ut=Lt+et,w=Gt+et,S=K-Tt,B=ot+(at-Tt),Z=j*Gt/w*ut,tt=st*Gt/w*ut;J.projectionMatrix.makePerspective(S,B,Z,tt,ut,w),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function nt(J,it){it===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(it.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let it=J.near,yt=J.far;M.texture!==null&&(M.depthNear>0&&(it=M.depthNear),M.depthFar>0&&(yt=M.depthFar)),y.near=C.near=A.near=it,y.far=C.far=A.far=yt,(P!==y.near||z!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),P=y.near,z=y.far),A.layers.mask=J.layers.mask|2,C.layers.mask=J.layers.mask|4,y.layers.mask=A.layers.mask|C.layers.mask;const at=J.parent,Ct=y.cameras;nt(y,at);for(let It=0;It<Ct.length;It++)nt(Ct[It],at);Ct.length===2?V(y,A,C):y.projectionMatrix.copy(A.projectionMatrix),ft(J,y,at)};function ft(J,it,yt){yt===null?J.matrix.copy(it.matrixWorld):(J.matrix.copy(yt.matrixWorld),J.matrix.invert(),J.matrix.multiply(it.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(it.projectionMatrix),J.projectionMatrixInverse.copy(it.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Jo*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(J){c=J,d!==null&&(d.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(y)};let mt=null;function Rt(J,it){if(h=it.getViewerPose(l||o),g=it,h!==null){const yt=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let at=!1;yt.length!==y.cameras.length&&(y.cameras.length=0,at=!0);for(let It=0;It<yt.length;It++){const Lt=yt[It];let Gt=null;if(f!==null)Gt=f.getViewport(Lt);else{const st=u.getViewSubImage(d,Lt);Gt=st.viewport,It===0&&(t.setRenderTargetTextures(v,st.colorTexture,d.ignoreDepthValues?void 0:st.depthStencilTexture),t.setRenderTarget(v))}let j=E[It];j===void 0&&(j=new Ze,j.layers.enable(It),j.viewport=new ue,E[It]=j),j.matrix.fromArray(Lt.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(Lt.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(Gt.x,Gt.y,Gt.width,Gt.height),It===0&&(y.matrix.copy(j.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),at===!0&&y.cameras.push(j)}const Ct=s.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")){const It=u.getDepthInformation(yt[0]);It&&It.isValid&&It.texture&&M.init(t,It,s.renderState)}}for(let yt=0;yt<x.length;yt++){const at=_[yt],Ct=x[yt];at!==null&&Ct!==void 0&&Ct.update(at,it,l||o)}mt&&mt(J,it),it.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:it}),g=null}const Nt=new Dl;Nt.setAnimationLoop(Rt),this.setAnimationLoop=function(J){mt=J},this.dispose=function(){}}}const Kn=new Ue,r0=new qt;function o0(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Cl(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,v,x,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),M(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,v,x):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Le&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Le&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=t.get(p),x=v.envMap,_=v.envMapRotation;x&&(m.envMap.value=x,Kn.copy(_),Kn.x*=-1,Kn.y*=-1,Kn.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Kn.y*=-1,Kn.z*=-1),m.envMapRotation.value.setFromMatrix4(r0.makeRotationFromEuler(Kn)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,v,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=x*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Le&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function M(m,p){const v=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function a0(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,x){const _=x.program;n.uniformBlockBinding(v,_)}function l(v,x){let _=s[v.id];_===void 0&&(g(v),_=h(v),s[v.id]=_,v.addEventListener("dispose",m));const R=x.program;n.updateUBOMapping(v,R);const T=t.render.frame;r[v.id]!==T&&(d(v),r[v.id]=T)}function h(v){const x=u();v.__bindingPointIndex=x;const _=i.createBuffer(),R=v.__size,T=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,R,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,_),_}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const x=s[v.id],_=v.uniforms,R=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let T=0,A=_.length;T<A;T++){const C=Array.isArray(_[T])?_[T]:[_[T]];for(let E=0,y=C.length;E<y;E++){const P=C[E];if(f(P,T,E,R)===!0){const z=P.__offset,N=Array.isArray(P.value)?P.value:[P.value];let I=0;for(let X=0;X<N.length;X++){const H=N[X],$=M(H);typeof H=="number"||typeof H=="boolean"?(P.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,z+I,P.__data)):H.isMatrix3?(P.__data[0]=H.elements[0],P.__data[1]=H.elements[1],P.__data[2]=H.elements[2],P.__data[3]=0,P.__data[4]=H.elements[3],P.__data[5]=H.elements[4],P.__data[6]=H.elements[5],P.__data[7]=0,P.__data[8]=H.elements[6],P.__data[9]=H.elements[7],P.__data[10]=H.elements[8],P.__data[11]=0):(H.toArray(P.__data,I),I+=$.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,x,_,R){const T=v.value,A=x+"_"+_;if(R[A]===void 0)return typeof T=="number"||typeof T=="boolean"?R[A]=T:R[A]=T.clone(),!0;{const C=R[A];if(typeof T=="number"||typeof T=="boolean"){if(C!==T)return R[A]=T,!0}else if(C.equals(T)===!1)return C.copy(T),!0}return!1}function g(v){const x=v.uniforms;let _=0;const R=16;for(let A=0,C=x.length;A<C;A++){const E=Array.isArray(x[A])?x[A]:[x[A]];for(let y=0,P=E.length;y<P;y++){const z=E[y],N=Array.isArray(z.value)?z.value:[z.value];for(let I=0,X=N.length;I<X;I++){const H=N[I],$=M(H),V=_%R,nt=V%$.boundary,ft=V+nt;_+=nt,ft!==0&&R-ft<$.storage&&(_+=R-ft),z.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=_,_+=$.storage}}}const T=_%R;return T>0&&(_+=R-T),v.__size=_,v.__cache={},this}function M(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function m(v){const x=v.target;x.removeEventListener("dispose",m);const _=o.indexOf(x.__bindingPointIndex);o.splice(_,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function p(){for(const v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class c0{constructor(t={}){const{canvas:e=Jh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),M=new Int32Array(4);let m=null,p=null;const v=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ye,this.toneMapping=kn,this.toneMappingExposure=1;const _=this;let R=!1,T=0,A=0,C=null,E=-1,y=null;const P=new ue,z=new ue;let N=null;const I=new Dt(0);let X=0,H=e.width,$=e.height,V=1,nt=null,ft=null;const mt=new ue(0,0,H,$),Rt=new ue(0,0,H,$);let Nt=!1;const J=new va;let it=!1,yt=!1;const at=new qt,Ct=new qt,It=new D,Lt=new ue,Gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let j=!1;function st(){return C===null?V:1}let L=n;function k(b,F){return e.getContext(b,F)}try{const b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${aa}`),e.addEventListener("webglcontextlost",Q,!1),e.addEventListener("webglcontextrestored",vt,!1),e.addEventListener("webglcontextcreationerror",gt,!1),L===null){const F="webgl2";if(L=k(F,b),L===null)throw k(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let K,ot,et,Tt,ut,w,S,B,Z,tt,Y,xt,lt,Mt,Wt,rt,St,Ut,Ft,Et,Xt,Vt,ie,U;function pt(){K=new dp(L),K.init(),Vt=new jm(L,K),ot=new ap(L,K,t,Vt),et=new Jm(L,K),ot.reverseDepthBuffer&&d&&et.buffers.depth.setReversed(!0),Tt=new gp(L),ut=new Um,w=new $m(L,K,et,ut,ot,Vt,Tt),S=new lp(_),B=new fp(_),Z=new Su(L),ie=new rp(L,Z),tt=new pp(L,Z,Tt,ie),Y=new vp(L,tt,Z,Tt),Ft=new _p(L,ot,w),rt=new cp(ut),xt=new Im(_,S,B,K,ot,ie,rt),lt=new o0(_,ut),Mt=new Fm,Wt=new Hm(K),Ut=new sp(_,S,B,et,Y,f,c),St=new Ym(_,Y,ot),U=new a0(L,Tt,ot,et),Et=new op(L,K,Tt),Xt=new mp(L,K,Tt),Tt.programs=xt.programs,_.capabilities=ot,_.extensions=K,_.properties=ut,_.renderLists=Mt,_.shadowMap=St,_.state=et,_.info=Tt}pt();const q=new s0(_,L);this.xr=q,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const b=K.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=K.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(b){b!==void 0&&(V=b,this.setSize(H,$,!1))},this.getSize=function(b){return b.set(H,$)},this.setSize=function(b,F,G=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=b,$=F,e.width=Math.floor(b*V),e.height=Math.floor(F*V),G===!0&&(e.style.width=b+"px",e.style.height=F+"px"),this.setViewport(0,0,b,F)},this.getDrawingBufferSize=function(b){return b.set(H*V,$*V).floor()},this.setDrawingBufferSize=function(b,F,G){H=b,$=F,V=G,e.width=Math.floor(b*G),e.height=Math.floor(F*G),this.setViewport(0,0,b,F)},this.getCurrentViewport=function(b){return b.copy(P)},this.getViewport=function(b){return b.copy(mt)},this.setViewport=function(b,F,G,W){b.isVector4?mt.set(b.x,b.y,b.z,b.w):mt.set(b,F,G,W),et.viewport(P.copy(mt).multiplyScalar(V).round())},this.getScissor=function(b){return b.copy(Rt)},this.setScissor=function(b,F,G,W){b.isVector4?Rt.set(b.x,b.y,b.z,b.w):Rt.set(b,F,G,W),et.scissor(z.copy(Rt).multiplyScalar(V).round())},this.getScissorTest=function(){return Nt},this.setScissorTest=function(b){et.setScissorTest(Nt=b)},this.setOpaqueSort=function(b){nt=b},this.setTransparentSort=function(b){ft=b},this.getClearColor=function(b){return b.copy(Ut.getClearColor())},this.setClearColor=function(){Ut.setClearColor.apply(Ut,arguments)},this.getClearAlpha=function(){return Ut.getClearAlpha()},this.setClearAlpha=function(){Ut.setClearAlpha.apply(Ut,arguments)},this.clear=function(b=!0,F=!0,G=!0){let W=0;if(b){let O=!1;if(C!==null){const ct=C.texture.format;O=ct===ma||ct===pa||ct===da}if(O){const ct=C.texture.type,_t=ct===An||ct===oi||ct===us||ct===Fi||ct===ha||ct===ua,bt=Ut.getClearColor(),At=Ut.getClearAlpha(),Ot=bt.r,Bt=bt.g,wt=bt.b;_t?(g[0]=Ot,g[1]=Bt,g[2]=wt,g[3]=At,L.clearBufferuiv(L.COLOR,0,g)):(M[0]=Ot,M[1]=Bt,M[2]=wt,M[3]=At,L.clearBufferiv(L.COLOR,0,M))}else W|=L.COLOR_BUFFER_BIT}F&&(W|=L.DEPTH_BUFFER_BIT),G&&(W|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Q,!1),e.removeEventListener("webglcontextrestored",vt,!1),e.removeEventListener("webglcontextcreationerror",gt,!1),Mt.dispose(),Wt.dispose(),ut.dispose(),S.dispose(),B.dispose(),Y.dispose(),ie.dispose(),U.dispose(),xt.dispose(),q.dispose(),q.removeEventListener("sessionstart",Da),q.removeEventListener("sessionend",Ia),Wn.stop()};function Q(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function vt(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const b=Tt.autoReset,F=St.enabled,G=St.autoUpdate,W=St.needsUpdate,O=St.type;pt(),Tt.autoReset=b,St.enabled=F,St.autoUpdate=G,St.needsUpdate=W,St.type=O}function gt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function zt(b){const F=b.target;F.removeEventListener("dispose",zt),le(F)}function le(b){be(b),ut.remove(b)}function be(b){const F=ut.get(b).programs;F!==void 0&&(F.forEach(function(G){xt.releaseProgram(G)}),b.isShaderMaterial&&xt.releaseShaderCache(b))}this.renderBufferDirect=function(b,F,G,W,O,ct){F===null&&(F=Gt);const _t=O.isMesh&&O.matrixWorld.determinant()<0,bt=oh(b,F,G,W,O);et.setMaterial(W,_t);let At=G.index,Ot=1;if(W.wireframe===!0){if(At=tt.getWireframeAttribute(G),At===void 0)return;Ot=2}const Bt=G.drawRange,wt=G.attributes.position;let Zt=Bt.start*Ot,se=(Bt.start+Bt.count)*Ot;ct!==null&&(Zt=Math.max(Zt,ct.start*Ot),se=Math.min(se,(ct.start+ct.count)*Ot)),At!==null?(Zt=Math.max(Zt,0),se=Math.min(se,At.count)):wt!=null&&(Zt=Math.max(Zt,0),se=Math.min(se,wt.count));const re=se-Zt;if(re<0||re===1/0)return;ie.setup(O,W,bt,G,At);let Ne,Kt=Et;if(At!==null&&(Ne=Z.get(At),Kt=Xt,Kt.setIndex(Ne)),O.isMesh)W.wireframe===!0?(et.setLineWidth(W.wireframeLinewidth*st()),Kt.setMode(L.LINES)):Kt.setMode(L.TRIANGLES);else if(O.isLine){let Pt=W.linewidth;Pt===void 0&&(Pt=1),et.setLineWidth(Pt*st()),O.isLineSegments?Kt.setMode(L.LINES):O.isLineLoop?Kt.setMode(L.LINE_LOOP):Kt.setMode(L.LINE_STRIP)}else O.isPoints?Kt.setMode(L.POINTS):O.isSprite&&Kt.setMode(L.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Kt.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(K.get("WEBGL_multi_draw"))Kt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Pt=O._multiDrawStarts,dn=O._multiDrawCounts,$t=O._multiDrawCount,$e=At?Z.get(At).bytesPerElement:1,hi=ut.get(W).currentProgram.getUniforms();for(let Be=0;Be<$t;Be++)hi.setValue(L,"_gl_DrawID",Be),Kt.render(Pt[Be]/$e,dn[Be])}else if(O.isInstancedMesh)Kt.renderInstances(Zt,re,O.count);else if(G.isInstancedBufferGeometry){const Pt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,dn=Math.min(G.instanceCount,Pt);Kt.renderInstances(Zt,re,dn)}else Kt.render(Zt,re)};function jt(b,F,G){b.transparent===!0&&b.side===En&&b.forceSinglePass===!1?(b.side=Le,b.needsUpdate=!0,Es(b,F,G),b.side=Hn,b.needsUpdate=!0,Es(b,F,G),b.side=En):Es(b,F,G)}this.compile=function(b,F,G=null){G===null&&(G=b),p=Wt.get(G),p.init(F),x.push(p),G.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),b!==G&&b.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();const W=new Set;return b.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const ct=O.material;if(ct)if(Array.isArray(ct))for(let _t=0;_t<ct.length;_t++){const bt=ct[_t];jt(bt,G,O),W.add(bt)}else jt(ct,G,O),W.add(ct)}),x.pop(),p=null,W},this.compileAsync=function(b,F,G=null){const W=this.compile(b,F,G);return new Promise(O=>{function ct(){if(W.forEach(function(_t){ut.get(_t).currentProgram.isReady()&&W.delete(_t)}),W.size===0){O(b);return}setTimeout(ct,10)}K.get("KHR_parallel_shader_compile")!==null?ct():setTimeout(ct,10)})};let Ke=null;function fn(b){Ke&&Ke(b)}function Da(){Wn.stop()}function Ia(){Wn.start()}const Wn=new Dl;Wn.setAnimationLoop(fn),typeof self<"u"&&Wn.setContext(self),this.setAnimationLoop=function(b){Ke=b,q.setAnimationLoop(b),b===null?Wn.stop():Wn.start()},q.addEventListener("sessionstart",Da),q.addEventListener("sessionend",Ia),this.render=function(b,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(F),F=q.getCamera()),b.isScene===!0&&b.onBeforeRender(_,b,F,C),p=Wt.get(b,x.length),p.init(F),x.push(p),Ct.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),J.setFromProjectionMatrix(Ct),yt=this.localClippingEnabled,it=rt.init(this.clippingPlanes,yt),m=Mt.get(b,v.length),m.init(),v.push(m),q.enabled===!0&&q.isPresenting===!0){const ct=_.xr.getDepthSensingMesh();ct!==null&&Mr(ct,F,-1/0,_.sortObjects)}Mr(b,F,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(nt,ft),j=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,j&&Ut.addToRenderList(m,b),this.info.render.frame++,it===!0&&rt.beginShadows();const G=p.state.shadowsArray;St.render(G,b,F),it===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=m.opaque,O=m.transmissive;if(p.setupLights(),F.isArrayCamera){const ct=F.cameras;if(O.length>0)for(let _t=0,bt=ct.length;_t<bt;_t++){const At=ct[_t];Na(W,O,b,At)}j&&Ut.render(b);for(let _t=0,bt=ct.length;_t<bt;_t++){const At=ct[_t];Ua(m,b,At,At.viewport)}}else O.length>0&&Na(W,O,b,F),j&&Ut.render(b),Ua(m,b,F);C!==null&&(w.updateMultisampleRenderTarget(C),w.updateRenderTargetMipmap(C)),b.isScene===!0&&b.onAfterRender(_,b,F),ie.resetDefaultState(),E=-1,y=null,x.pop(),x.length>0?(p=x[x.length-1],it===!0&&rt.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function Mr(b,F,G,W){if(b.visible===!1)return;if(b.layers.test(F.layers)){if(b.isGroup)G=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(F);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||J.intersectsSprite(b)){W&&Lt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Ct);const _t=Y.update(b),bt=b.material;bt.visible&&m.push(b,_t,bt,G,Lt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||J.intersectsObject(b))){const _t=Y.update(b),bt=b.material;if(W&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Lt.copy(b.boundingSphere.center)):(_t.boundingSphere===null&&_t.computeBoundingSphere(),Lt.copy(_t.boundingSphere.center)),Lt.applyMatrix4(b.matrixWorld).applyMatrix4(Ct)),Array.isArray(bt)){const At=_t.groups;for(let Ot=0,Bt=At.length;Ot<Bt;Ot++){const wt=At[Ot],Zt=bt[wt.materialIndex];Zt&&Zt.visible&&m.push(b,_t,Zt,G,Lt.z,wt)}}else bt.visible&&m.push(b,_t,bt,G,Lt.z,null)}}const ct=b.children;for(let _t=0,bt=ct.length;_t<bt;_t++)Mr(ct[_t],F,G,W)}function Ua(b,F,G,W){const O=b.opaque,ct=b.transmissive,_t=b.transparent;p.setupLightsView(G),it===!0&&rt.setGlobalState(_.clippingPlanes,G),W&&et.viewport(P.copy(W)),O.length>0&&Ss(O,F,G),ct.length>0&&Ss(ct,F,G),_t.length>0&&Ss(_t,F,G),et.buffers.depth.setTest(!0),et.buffers.depth.setMask(!0),et.buffers.color.setMask(!0),et.setPolygonOffset(!1)}function Na(b,F,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[W.id]===void 0&&(p.state.transmissionRenderTarget[W.id]=new ai(1,1,{generateMipmaps:!0,type:K.has("EXT_color_buffer_half_float")||K.has("EXT_color_buffer_float")?gs:An,minFilter:ii,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Yt.workingColorSpace}));const ct=p.state.transmissionRenderTarget[W.id],_t=W.viewport||P;ct.setSize(_t.z,_t.w);const bt=_.getRenderTarget();_.setRenderTarget(ct),_.getClearColor(I),X=_.getClearAlpha(),X<1&&_.setClearColor(16777215,.5),_.clear(),j&&Ut.render(G);const At=_.toneMapping;_.toneMapping=kn;const Ot=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),p.setupLightsView(W),it===!0&&rt.setGlobalState(_.clippingPlanes,W),Ss(b,G,W),w.updateMultisampleRenderTarget(ct),w.updateRenderTargetMipmap(ct),K.has("WEBGL_multisampled_render_to_texture")===!1){let Bt=!1;for(let wt=0,Zt=F.length;wt<Zt;wt++){const se=F[wt],re=se.object,Ne=se.geometry,Kt=se.material,Pt=se.group;if(Kt.side===En&&re.layers.test(W.layers)){const dn=Kt.side;Kt.side=Le,Kt.needsUpdate=!0,Fa(re,G,W,Ne,Kt,Pt),Kt.side=dn,Kt.needsUpdate=!0,Bt=!0}}Bt===!0&&(w.updateMultisampleRenderTarget(ct),w.updateRenderTargetMipmap(ct))}_.setRenderTarget(bt),_.setClearColor(I,X),Ot!==void 0&&(W.viewport=Ot),_.toneMapping=At}function Ss(b,F,G){const W=F.isScene===!0?F.overrideMaterial:null;for(let O=0,ct=b.length;O<ct;O++){const _t=b[O],bt=_t.object,At=_t.geometry,Ot=W===null?_t.material:W,Bt=_t.group;bt.layers.test(G.layers)&&Fa(bt,F,G,At,Ot,Bt)}}function Fa(b,F,G,W,O,ct){b.onBeforeRender(_,F,G,W,O,ct),b.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),O.onBeforeRender(_,F,G,W,b,ct),O.transparent===!0&&O.side===En&&O.forceSinglePass===!1?(O.side=Le,O.needsUpdate=!0,_.renderBufferDirect(G,F,W,O,b,ct),O.side=Hn,O.needsUpdate=!0,_.renderBufferDirect(G,F,W,O,b,ct),O.side=En):_.renderBufferDirect(G,F,W,O,b,ct),b.onAfterRender(_,F,G,W,O,ct)}function Es(b,F,G){F.isScene!==!0&&(F=Gt);const W=ut.get(b),O=p.state.lights,ct=p.state.shadowsArray,_t=O.state.version,bt=xt.getParameters(b,O.state,ct,F,G),At=xt.getProgramCacheKey(bt);let Ot=W.programs;W.environment=b.isMeshStandardMaterial?F.environment:null,W.fog=F.fog,W.envMap=(b.isMeshStandardMaterial?B:S).get(b.envMap||W.environment),W.envMapRotation=W.environment!==null&&b.envMap===null?F.environmentRotation:b.envMapRotation,Ot===void 0&&(b.addEventListener("dispose",zt),Ot=new Map,W.programs=Ot);let Bt=Ot.get(At);if(Bt!==void 0){if(W.currentProgram===Bt&&W.lightsStateVersion===_t)return za(b,bt),Bt}else bt.uniforms=xt.getUniforms(b),b.onBeforeCompile(bt,_),Bt=xt.acquireProgram(bt,At),Ot.set(At,Bt),W.uniforms=bt.uniforms;const wt=W.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(wt.clippingPlanes=rt.uniform),za(b,bt),W.needsLights=ch(b),W.lightsStateVersion=_t,W.needsLights&&(wt.ambientLightColor.value=O.state.ambient,wt.lightProbe.value=O.state.probe,wt.directionalLights.value=O.state.directional,wt.directionalLightShadows.value=O.state.directionalShadow,wt.spotLights.value=O.state.spot,wt.spotLightShadows.value=O.state.spotShadow,wt.rectAreaLights.value=O.state.rectArea,wt.ltc_1.value=O.state.rectAreaLTC1,wt.ltc_2.value=O.state.rectAreaLTC2,wt.pointLights.value=O.state.point,wt.pointLightShadows.value=O.state.pointShadow,wt.hemisphereLights.value=O.state.hemi,wt.directionalShadowMap.value=O.state.directionalShadowMap,wt.directionalShadowMatrix.value=O.state.directionalShadowMatrix,wt.spotShadowMap.value=O.state.spotShadowMap,wt.spotLightMatrix.value=O.state.spotLightMatrix,wt.spotLightMap.value=O.state.spotLightMap,wt.pointShadowMap.value=O.state.pointShadowMap,wt.pointShadowMatrix.value=O.state.pointShadowMatrix),W.currentProgram=Bt,W.uniformsList=null,Bt}function Oa(b){if(b.uniformsList===null){const F=b.currentProgram.getUniforms();b.uniformsList=nr.seqWithValue(F.seq,b.uniforms)}return b.uniformsList}function za(b,F){const G=ut.get(b);G.outputColorSpace=F.outputColorSpace,G.batching=F.batching,G.batchingColor=F.batchingColor,G.instancing=F.instancing,G.instancingColor=F.instancingColor,G.instancingMorph=F.instancingMorph,G.skinning=F.skinning,G.morphTargets=F.morphTargets,G.morphNormals=F.morphNormals,G.morphColors=F.morphColors,G.morphTargetsCount=F.morphTargetsCount,G.numClippingPlanes=F.numClippingPlanes,G.numIntersection=F.numClipIntersection,G.vertexAlphas=F.vertexAlphas,G.vertexTangents=F.vertexTangents,G.toneMapping=F.toneMapping}function oh(b,F,G,W,O){F.isScene!==!0&&(F=Gt),w.resetTextureUnits();const ct=F.fog,_t=W.isMeshStandardMaterial?F.environment:null,bt=C===null?_.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:ki,At=(W.isMeshStandardMaterial?B:S).get(W.envMap||_t),Ot=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Bt=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),wt=!!G.morphAttributes.position,Zt=!!G.morphAttributes.normal,se=!!G.morphAttributes.color;let re=kn;W.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(re=_.toneMapping);const Ne=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Kt=Ne!==void 0?Ne.length:0,Pt=ut.get(W),dn=p.state.lights;if(it===!0&&(yt===!0||b!==y)){const Xe=b===y&&W.id===E;rt.setState(W,b,Xe)}let $t=!1;W.version===Pt.__version?(Pt.needsLights&&Pt.lightsStateVersion!==dn.state.version||Pt.outputColorSpace!==bt||O.isBatchedMesh&&Pt.batching===!1||!O.isBatchedMesh&&Pt.batching===!0||O.isBatchedMesh&&Pt.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Pt.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Pt.instancing===!1||!O.isInstancedMesh&&Pt.instancing===!0||O.isSkinnedMesh&&Pt.skinning===!1||!O.isSkinnedMesh&&Pt.skinning===!0||O.isInstancedMesh&&Pt.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Pt.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Pt.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Pt.instancingMorph===!1&&O.morphTexture!==null||Pt.envMap!==At||W.fog===!0&&Pt.fog!==ct||Pt.numClippingPlanes!==void 0&&(Pt.numClippingPlanes!==rt.numPlanes||Pt.numIntersection!==rt.numIntersection)||Pt.vertexAlphas!==Ot||Pt.vertexTangents!==Bt||Pt.morphTargets!==wt||Pt.morphNormals!==Zt||Pt.morphColors!==se||Pt.toneMapping!==re||Pt.morphTargetsCount!==Kt)&&($t=!0):($t=!0,Pt.__version=W.version);let $e=Pt.currentProgram;$t===!0&&($e=Es(W,F,O));let hi=!1,Be=!1,qi=!1;const oe=$e.getUniforms(),rn=Pt.uniforms;if(et.useProgram($e.program)&&(hi=!0,Be=!0,qi=!0),W.id!==E&&(E=W.id,Be=!0),hi||y!==b){et.buffers.depth.getReversed()?(at.copy(b.projectionMatrix),$h(at),jh(at),oe.setValue(L,"projectionMatrix",at)):oe.setValue(L,"projectionMatrix",b.projectionMatrix),oe.setValue(L,"viewMatrix",b.matrixWorldInverse);const Cn=oe.map.cameraPosition;Cn!==void 0&&Cn.setValue(L,It.setFromMatrixPosition(b.matrixWorld)),ot.logarithmicDepthBuffer&&oe.setValue(L,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&oe.setValue(L,"isOrthographic",b.isOrthographicCamera===!0),y!==b&&(y=b,Be=!0,qi=!0)}if(O.isSkinnedMesh){oe.setOptional(L,O,"bindMatrix"),oe.setOptional(L,O,"bindMatrixInverse");const Xe=O.skeleton;Xe&&(Xe.boneTexture===null&&Xe.computeBoneTexture(),oe.setValue(L,"boneTexture",Xe.boneTexture,w))}O.isBatchedMesh&&(oe.setOptional(L,O,"batchingTexture"),oe.setValue(L,"batchingTexture",O._matricesTexture,w),oe.setOptional(L,O,"batchingIdTexture"),oe.setValue(L,"batchingIdTexture",O._indirectTexture,w),oe.setOptional(L,O,"batchingColorTexture"),O._colorsTexture!==null&&oe.setValue(L,"batchingColorTexture",O._colorsTexture,w));const Yi=G.morphAttributes;if((Yi.position!==void 0||Yi.normal!==void 0||Yi.color!==void 0)&&Ft.update(O,G,$e),(Be||Pt.receiveShadow!==O.receiveShadow)&&(Pt.receiveShadow=O.receiveShadow,oe.setValue(L,"receiveShadow",O.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(rn.envMap.value=At,rn.flipEnvMap.value=At.isCubeTexture&&At.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&F.environment!==null&&(rn.envMapIntensity.value=F.environmentIntensity),Be&&(oe.setValue(L,"toneMappingExposure",_.toneMappingExposure),Pt.needsLights&&ah(rn,qi),ct&&W.fog===!0&&lt.refreshFogUniforms(rn,ct),lt.refreshMaterialUniforms(rn,W,V,$,p.state.transmissionRenderTarget[b.id]),nr.upload(L,Oa(Pt),rn,w)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(nr.upload(L,Oa(Pt),rn,w),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&oe.setValue(L,"center",O.center),oe.setValue(L,"modelViewMatrix",O.modelViewMatrix),oe.setValue(L,"normalMatrix",O.normalMatrix),oe.setValue(L,"modelMatrix",O.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Xe=W.uniformsGroups;for(let Cn=0,Pn=Xe.length;Cn<Pn;Cn++){const Ba=Xe[Cn];U.update(Ba,$e),U.bind(Ba,$e)}}return $e}function ah(b,F){b.ambientLightColor.needsUpdate=F,b.lightProbe.needsUpdate=F,b.directionalLights.needsUpdate=F,b.directionalLightShadows.needsUpdate=F,b.pointLights.needsUpdate=F,b.pointLightShadows.needsUpdate=F,b.spotLights.needsUpdate=F,b.spotLightShadows.needsUpdate=F,b.rectAreaLights.needsUpdate=F,b.hemisphereLights.needsUpdate=F}function ch(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(b,F,G){ut.get(b.texture).__webglTexture=F,ut.get(b.depthTexture).__webglTexture=G;const W=ut.get(b);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=G===void 0,W.__autoAllocateDepthBuffer||K.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,F){const G=ut.get(b);G.__webglFramebuffer=F,G.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(b,F=0,G=0){C=b,T=F,A=G;let W=!0,O=null,ct=!1,_t=!1;if(b){const At=ut.get(b);if(At.__useDefaultFramebuffer!==void 0)et.bindFramebuffer(L.FRAMEBUFFER,null),W=!1;else if(At.__webglFramebuffer===void 0)w.setupRenderTarget(b);else if(At.__hasExternalTextures)w.rebindTextures(b,ut.get(b.texture).__webglTexture,ut.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const wt=b.depthTexture;if(At.__boundDepthTexture!==wt){if(wt!==null&&ut.has(wt)&&(b.width!==wt.image.width||b.height!==wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(b)}}const Ot=b.texture;(Ot.isData3DTexture||Ot.isDataArrayTexture||Ot.isCompressedArrayTexture)&&(_t=!0);const Bt=ut.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Bt[F])?O=Bt[F][G]:O=Bt[F],ct=!0):b.samples>0&&w.useMultisampledRTT(b)===!1?O=ut.get(b).__webglMultisampledFramebuffer:Array.isArray(Bt)?O=Bt[G]:O=Bt,P.copy(b.viewport),z.copy(b.scissor),N=b.scissorTest}else P.copy(mt).multiplyScalar(V).floor(),z.copy(Rt).multiplyScalar(V).floor(),N=Nt;if(et.bindFramebuffer(L.FRAMEBUFFER,O)&&W&&et.drawBuffers(b,O),et.viewport(P),et.scissor(z),et.setScissorTest(N),ct){const At=ut.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+F,At.__webglTexture,G)}else if(_t){const At=ut.get(b.texture),Ot=F||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,At.__webglTexture,G||0,Ot)}E=-1},this.readRenderTargetPixels=function(b,F,G,W,O,ct,_t){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=ut.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&_t!==void 0&&(bt=bt[_t]),bt){et.bindFramebuffer(L.FRAMEBUFFER,bt);try{const At=b.texture,Ot=At.format,Bt=At.type;if(!ot.textureFormatReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ot.textureTypeReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=b.width-W&&G>=0&&G<=b.height-O&&L.readPixels(F,G,W,O,Vt.convert(Ot),Vt.convert(Bt),ct)}finally{const At=C!==null?ut.get(C).__webglFramebuffer:null;et.bindFramebuffer(L.FRAMEBUFFER,At)}}},this.readRenderTargetPixelsAsync=async function(b,F,G,W,O,ct,_t){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let bt=ut.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&_t!==void 0&&(bt=bt[_t]),bt){const At=b.texture,Ot=At.format,Bt=At.type;if(!ot.textureFormatReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ot.textureTypeReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=b.width-W&&G>=0&&G<=b.height-O){et.bindFramebuffer(L.FRAMEBUFFER,bt);const wt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,wt),L.bufferData(L.PIXEL_PACK_BUFFER,ct.byteLength,L.STREAM_READ),L.readPixels(F,G,W,O,Vt.convert(Ot),Vt.convert(Bt),0);const Zt=C!==null?ut.get(C).__webglFramebuffer:null;et.bindFramebuffer(L.FRAMEBUFFER,Zt);const se=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Kh(L,se,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,wt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ct),L.deleteBuffer(wt),L.deleteSync(se),ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,F=null,G=0){b.isTexture!==!0&&(is("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,b=arguments[1]);const W=Math.pow(2,-G),O=Math.floor(b.image.width*W),ct=Math.floor(b.image.height*W),_t=F!==null?F.x:0,bt=F!==null?F.y:0;w.setTexture2D(b,0),L.copyTexSubImage2D(L.TEXTURE_2D,G,0,0,_t,bt,O,ct),et.unbindTexture()},this.copyTextureToTexture=function(b,F,G=null,W=null,O=0){b.isTexture!==!0&&(is("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,b=arguments[1],F=arguments[2],O=arguments[3]||0,G=null);let ct,_t,bt,At,Ot,Bt,wt,Zt,se;const re=b.isCompressedTexture?b.mipmaps[O]:b.image;G!==null?(ct=G.max.x-G.min.x,_t=G.max.y-G.min.y,bt=G.isBox3?G.max.z-G.min.z:1,At=G.min.x,Ot=G.min.y,Bt=G.isBox3?G.min.z:0):(ct=re.width,_t=re.height,bt=re.depth||1,At=0,Ot=0,Bt=0),W!==null?(wt=W.x,Zt=W.y,se=W.z):(wt=0,Zt=0,se=0);const Ne=Vt.convert(F.format),Kt=Vt.convert(F.type);let Pt;F.isData3DTexture?(w.setTexture3D(F,0),Pt=L.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(w.setTexture2DArray(F,0),Pt=L.TEXTURE_2D_ARRAY):(w.setTexture2D(F,0),Pt=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,F.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,F.unpackAlignment);const dn=L.getParameter(L.UNPACK_ROW_LENGTH),$t=L.getParameter(L.UNPACK_IMAGE_HEIGHT),$e=L.getParameter(L.UNPACK_SKIP_PIXELS),hi=L.getParameter(L.UNPACK_SKIP_ROWS),Be=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,re.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,re.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,At),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ot),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Bt);const qi=b.isDataArrayTexture||b.isData3DTexture,oe=F.isDataArrayTexture||F.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){const rn=ut.get(b),Yi=ut.get(F),Xe=ut.get(rn.__renderTarget),Cn=ut.get(Yi.__renderTarget);et.bindFramebuffer(L.READ_FRAMEBUFFER,Xe.__webglFramebuffer),et.bindFramebuffer(L.DRAW_FRAMEBUFFER,Cn.__webglFramebuffer);for(let Pn=0;Pn<bt;Pn++)qi&&L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ut.get(b).__webglTexture,O,Bt+Pn),b.isDepthTexture?(oe&&L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ut.get(F).__webglTexture,O,se+Pn),L.blitFramebuffer(At,Ot,ct,_t,wt,Zt,ct,_t,L.DEPTH_BUFFER_BIT,L.NEAREST)):oe?L.copyTexSubImage3D(Pt,O,wt,Zt,se+Pn,At,Ot,ct,_t):L.copyTexSubImage2D(Pt,O,wt,Zt,se+Pn,At,Ot,ct,_t);et.bindFramebuffer(L.READ_FRAMEBUFFER,null),et.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else oe?b.isDataTexture||b.isData3DTexture?L.texSubImage3D(Pt,O,wt,Zt,se,ct,_t,bt,Ne,Kt,re.data):F.isCompressedArrayTexture?L.compressedTexSubImage3D(Pt,O,wt,Zt,se,ct,_t,bt,Ne,re.data):L.texSubImage3D(Pt,O,wt,Zt,se,ct,_t,bt,Ne,Kt,re):b.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,O,wt,Zt,ct,_t,Ne,Kt,re.data):b.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,O,wt,Zt,re.width,re.height,Ne,re.data):L.texSubImage2D(L.TEXTURE_2D,O,wt,Zt,ct,_t,Ne,Kt,re);L.pixelStorei(L.UNPACK_ROW_LENGTH,dn),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,$t),L.pixelStorei(L.UNPACK_SKIP_PIXELS,$e),L.pixelStorei(L.UNPACK_SKIP_ROWS,hi),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Be),O===0&&F.generateMipmaps&&L.generateMipmap(Pt),et.unbindTexture()},this.copyTextureToTexture3D=function(b,F,G=null,W=null,O=0){return b.isTexture!==!0&&(is("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,W=arguments[1]||null,b=arguments[2],F=arguments[3],O=arguments[4]||0),is('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,F,G,W,O)},this.initRenderTarget=function(b){ut.get(b).__webglFramebuffer===void 0&&w.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?w.setTextureCube(b,0):b.isData3DTexture?w.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?w.setTexture2DArray(b,0):w.setTexture2D(b,0),et.unbindTexture()},this.resetState=function(){T=0,A=0,C=null,et.reset(),ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Tn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Yt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Yt._getUnpackColorSpace()}}class Ma{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Dt(t),this.near=e,this.far=n}clone(){return new Ma(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class l0 extends Te{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ue,this.environmentIntensity=1,this.environmentRotation=new Ue,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class h0 extends De{constructor(t=null,e=1,n=1,s,r,o,a,c,l=We,h=We,u,d){super(null,o,a,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zc extends Se{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const bi=new qt,Bc=new qt,Xs=[],kc=new li,u0=new qt,Qi=new ee,ts=new _s;class Bl extends ee{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new zc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,u0)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new li),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,bi),kc.copy(t.boundingBox).applyMatrix4(bi),this.boundingBox.union(kc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new _s),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,bi),ts.copy(t.boundingSphere).applyMatrix4(bi),this.boundingSphere.union(ts)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Qi.geometry=this.geometry,Qi.material=this.material,Qi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ts.copy(this.boundingSphere),ts.applyMatrix4(n),t.ray.intersectsSphere(ts)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,bi),Bc.multiplyMatrices(n,bi),Qi.matrixWorld=Bc,Qi.raycast(t,Xs);for(let o=0,a=Xs.length;o<a;o++){const c=Xs[o];c.instanceId=r,c.object=this,e.push(c)}Xs.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new zc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new h0(new Float32Array(s*this.count),s,this.count,fa,hn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class un{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new ht:new D);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new D,s=[],r=[],o=[],a=new D,c=new qt;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new D)}r[0]=new D,o[0]=new D;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(ye(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(ye(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class ya extends un{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new ht){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class f0 extends ya{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Sa(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const qs=new D,$r=new Sa,jr=new Sa,Qr=new Sa;class d0 extends un{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new D){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(qs.subVectors(s[0],s[1]).add(s[0]),l=qs);const u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(qs.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=qs),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),f),M=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);M<1e-4&&(M=1),g<1e-4&&(g=M),m<1e-4&&(m=M),$r.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,M,m),jr.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,M,m),Qr.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,M,m)}else this.curveType==="catmullrom"&&($r.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),jr.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Qr.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set($r.calc(c),jr.calc(c),Qr.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new D().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Vc(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function p0(i,t){const e=1-i;return e*e*t}function m0(i,t){return 2*(1-i)*i*t}function g0(i,t){return i*i*t}function as(i,t,e,n){return p0(i,t)+m0(i,e)+g0(i,n)}function _0(i,t){const e=1-i;return e*e*e*t}function v0(i,t){const e=1-i;return 3*e*e*i*t}function x0(i,t){return 3*(1-i)*i*i*t}function M0(i,t){return i*i*i*t}function cs(i,t,e,n,s){return _0(i,t)+v0(i,e)+x0(i,n)+M0(i,s)}class kl extends un{constructor(t=new ht,e=new ht,n=new ht,s=new ht){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ht){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(cs(t,s.x,r.x,o.x,a.x),cs(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class y0 extends un{constructor(t=new D,e=new D,n=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new D){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(cs(t,s.x,r.x,o.x,a.x),cs(t,s.y,r.y,o.y,a.y),cs(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Vl extends un{constructor(t=new ht,e=new ht){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ht){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ht){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class S0 extends un{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Hl extends un{constructor(t=new ht,e=new ht,n=new ht){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ht){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(as(t,s.x,r.x,o.x),as(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class E0 extends un{constructor(t=new D,e=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new D){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(as(t,s.x,r.x,o.x),as(t,s.y,r.y,o.y),as(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Gl extends un{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ht){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Vc(a,c.x,l.x,h.x,u.x),Vc(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new ht().fromArray(s))}return this}}var $o=Object.freeze({__proto__:null,ArcCurve:f0,CatmullRomCurve3:d0,CubicBezierCurve:kl,CubicBezierCurve3:y0,EllipseCurve:ya,LineCurve:Vl,LineCurve3:S0,QuadraticBezierCurve:Hl,QuadraticBezierCurve3:E0,SplineCurve:Gl});class T0 extends un{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new $o[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new $o[s.type]().fromJSON(s))}return this}}class Hc extends T0{constructor(t){super(),this.type="Path",this.currentPoint=new ht,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Vl(this.currentPoint.clone(),new ht(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Hl(this.currentPoint.clone(),new ht(t,e),new ht(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new kl(this.currentPoint.clone(),new ht(t,e),new ht(n,s),new ht(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Gl(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){const l=new ya(t,e,n,s,r,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ea extends Ce{constructor(t=[new ht(0,-.5),new ht(.5,0),new ht(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=ye(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],h=1/e,u=new D,d=new ht,f=new D,g=new D,M=new D;let m=0,p=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:m=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,f.x=p*1,f.y=-m,f.z=p*0,M.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(M.x,M.y,M.z);break;default:m=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=M.x,f.y+=M.y,f.z+=M.z,f.normalize(),c.push(f.x,f.y,f.z),M.copy(g)}for(let v=0;v<=e;v++){const x=n+v*h*s,_=Math.sin(x),R=Math.cos(x);for(let T=0;T<=t.length-1;T++){u.x=t[T].x*_,u.y=t[T].y,u.z=t[T].x*R,o.push(u.x,u.y,u.z),d.x=v/e,d.y=T/(t.length-1),a.push(d.x,d.y);const A=c[3*T+0]*_,C=c[3*T+1],E=c[3*T+0]*R;l.push(A,C,E)}}for(let v=0;v<e;v++)for(let x=0;x<t.length-1;x++){const _=x+v*t.length,R=_,T=_+t.length,A=_+t.length+1,C=_+1;r.push(R,T,C),r.push(A,C,T)}this.setIndex(r),this.setAttribute("position",new ne(o,3)),this.setAttribute("uv",new ne(a,2)),this.setAttribute("normal",new ne(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ea(t.points,t.segments,t.phiStart,t.phiLength)}}class fs extends Ce{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new D,h=new ht;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=n+u/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ne(o,3)),this.setAttribute("normal",new ne(a,3)),this.setAttribute("uv",new ne(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fs(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Bi extends Ce{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const M=[],m=n/2;let p=0;v(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new ne(u,3)),this.setAttribute("normal",new ne(d,3)),this.setAttribute("uv",new ne(f,2));function v(){const _=new D,R=new D;let T=0;const A=(e-t)/n;for(let C=0;C<=r;C++){const E=[],y=C/r,P=y*(e-t)+t;for(let z=0;z<=s;z++){const N=z/s,I=N*c+a,X=Math.sin(I),H=Math.cos(I);R.x=P*X,R.y=-y*n+m,R.z=P*H,u.push(R.x,R.y,R.z),_.set(X,A,H).normalize(),d.push(_.x,_.y,_.z),f.push(N,1-y),E.push(g++)}M.push(E)}for(let C=0;C<s;C++)for(let E=0;E<r;E++){const y=M[E][C],P=M[E+1][C],z=M[E+1][C+1],N=M[E][C+1];(t>0||E!==0)&&(h.push(y,P,N),T+=3),(e>0||E!==r-1)&&(h.push(P,z,N),T+=3)}l.addGroup(p,T,0),p+=T}function x(_){const R=g,T=new ht,A=new D;let C=0;const E=_===!0?t:e,y=_===!0?1:-1;for(let z=1;z<=s;z++)u.push(0,m*y,0),d.push(0,y,0),f.push(.5,.5),g++;const P=g;for(let z=0;z<=s;z++){const I=z/s*c+a,X=Math.cos(I),H=Math.sin(I);A.x=E*H,A.y=m*y,A.z=E*X,u.push(A.x,A.y,A.z),d.push(0,y,0),T.x=X*.5+.5,T.y=H*.5*y+.5,f.push(T.x,T.y),g++}for(let z=0;z<s;z++){const N=R+z,I=P+z;_===!0?h.push(I,I+1,N):h.push(I+1,I,N),C+=3}l.addGroup(p,C,_===!0?1:2),p+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bi(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class hr extends Bi{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new hr(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ta extends Ce{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new ne(r,3)),this.setAttribute("normal",new ne(r.slice(),3)),this.setAttribute("uv",new ne(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const x=new D,_=new D,R=new D;for(let T=0;T<e.length;T+=3)f(e[T+0],x),f(e[T+1],_),f(e[T+2],R),c(x,_,R,v)}function c(v,x,_,R){const T=R+1,A=[];for(let C=0;C<=T;C++){A[C]=[];const E=v.clone().lerp(_,C/T),y=x.clone().lerp(_,C/T),P=T-C;for(let z=0;z<=P;z++)z===0&&C===T?A[C][z]=E:A[C][z]=E.clone().lerp(y,z/P)}for(let C=0;C<T;C++)for(let E=0;E<2*(T-C)-1;E++){const y=Math.floor(E/2);E%2===0?(d(A[C][y+1]),d(A[C+1][y]),d(A[C][y])):(d(A[C][y+1]),d(A[C+1][y+1]),d(A[C+1][y]))}}function l(v){const x=new D;for(let _=0;_<r.length;_+=3)x.x=r[_+0],x.y=r[_+1],x.z=r[_+2],x.normalize().multiplyScalar(v),r[_+0]=x.x,r[_+1]=x.y,r[_+2]=x.z}function h(){const v=new D;for(let x=0;x<r.length;x+=3){v.x=r[x+0],v.y=r[x+1],v.z=r[x+2];const _=m(v)/2/Math.PI+.5,R=p(v)/Math.PI+.5;o.push(_,1-R)}g(),u()}function u(){for(let v=0;v<o.length;v+=6){const x=o[v+0],_=o[v+2],R=o[v+4],T=Math.max(x,_,R),A=Math.min(x,_,R);T>.9&&A<.1&&(x<.2&&(o[v+0]+=1),_<.2&&(o[v+2]+=1),R<.2&&(o[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function f(v,x){const _=v*3;x.x=t[_+0],x.y=t[_+1],x.z=t[_+2]}function g(){const v=new D,x=new D,_=new D,R=new D,T=new ht,A=new ht,C=new ht;for(let E=0,y=0;E<r.length;E+=9,y+=6){v.set(r[E+0],r[E+1],r[E+2]),x.set(r[E+3],r[E+4],r[E+5]),_.set(r[E+6],r[E+7],r[E+8]),T.set(o[y+0],o[y+1]),A.set(o[y+2],o[y+3]),C.set(o[y+4],o[y+5]),R.copy(v).add(x).add(_).divideScalar(3);const P=m(R);M(T,y+0,v,P),M(A,y+2,x,P),M(C,y+4,_,P)}}function M(v,x,_,R){R<0&&v.x===1&&(o[x]=v.x-1),_.x===0&&_.z===0&&(o[x]=R/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ta(t.vertices,t.indices,t.radius,t.details)}}class ba extends Hc{constructor(t){super(t),this.uuid=Hi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Hc().fromJSON(s))}return this}}const b0={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Wl(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,d,f;if(n&&(r=P0(i,t,r,e)),i.length>80*e){a=l=i[0],c=h=i[1];for(let g=e;g<s;g+=e)u=i[g],d=i[g+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-a,h-c),f=f!==0?32767/f:0}return ds(r,o,e,a,c,f,0),o}};function Wl(i,t,e,n,s){let r,o;if(s===V0(i,t,e,n)>0)for(r=t;r<e;r+=n)o=Gc(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=Gc(r,i[r],i[r+1],o);return o&&mr(o,o.next)&&(ms(o),o=o.next),o}function ci(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(mr(e,e.next)||ce(e.prev,e,e.next)===0)){if(ms(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ds(i,t,e,n,s,r,o){if(!i)return;!o&&r&&N0(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?w0(i,n,s,r):A0(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),ms(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=R0(ci(i),t,e),ds(i,t,e,n,s,r,2)):o===2&&C0(i,t,e,n,s,r):ds(ci(i),t,e,n,s,r,1);break}}}function A0(i){const t=i.prev,e=i,n=i.next;if(ce(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,d=s>r?s>o?s:o:r>o?r:o,f=a>c?a>l?a:l:c>l?c:l;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&Ri(s,a,r,c,o,l,g.x,g.y)&&ce(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function w0(i,t,e,n){const s=i.prev,r=i,o=i.next;if(ce(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,d=o.y,f=a<c?a<l?a:l:c<l?c:l,g=h<u?h<d?h:d:u<d?u:d,M=a>c?a>l?a:l:c>l?c:l,m=h>u?h>d?h:d:u>d?u:d,p=jo(f,g,t,e,n),v=jo(M,m,t,e,n);let x=i.prevZ,_=i.nextZ;for(;x&&x.z>=p&&_&&_.z<=v;){if(x.x>=f&&x.x<=M&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&Ri(a,h,c,u,l,d,x.x,x.y)&&ce(x.prev,x,x.next)>=0||(x=x.prevZ,_.x>=f&&_.x<=M&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&Ri(a,h,c,u,l,d,_.x,_.y)&&ce(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;x&&x.z>=p;){if(x.x>=f&&x.x<=M&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&Ri(a,h,c,u,l,d,x.x,x.y)&&ce(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;_&&_.z<=v;){if(_.x>=f&&_.x<=M&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&Ri(a,h,c,u,l,d,_.x,_.y)&&ce(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function R0(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!mr(s,r)&&Xl(s,n,n.next,r)&&ps(s,r)&&ps(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),ms(n),ms(n.next),n=i=r),n=n.next}while(n!==i);return ci(n)}function C0(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&z0(o,a)){let c=ql(o,a);o=ci(o,o.next),c=ci(c,c.next),ds(o,t,e,n,s,r,0),ds(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function P0(i,t,e,n){const s=[];let r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=Wl(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(O0(l));for(s.sort(L0),r=0;r<s.length;r++)e=D0(s[r],e);return e}function L0(i,t){return i.x-t.x}function D0(i,t){const e=I0(i,t);if(!e)return t;const n=ql(e,i);return ci(n,n.next),ci(e,e.next)}function I0(i,t){let e=t,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,c=s.x,l=s.y;let h=1/0,u;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&Ri(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),ps(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&U0(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function U0(i,t){return ce(i.prev,i,t.prev)<0&&ce(t.next,i,i.next)<0}function N0(i,t,e,n){let s=i;do s.z===0&&(s.z=jo(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,F0(s)}function F0(i){let t,e,n,s,r,o,a,c,l=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(o>1);return i}function jo(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function O0(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Ri(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function z0(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!B0(i,t)&&(ps(i,t)&&ps(t,i)&&k0(i,t)&&(ce(i.prev,i,t.prev)||ce(i,t.prev,t))||mr(i,t)&&ce(i.prev,i,i.next)>0&&ce(t.prev,t,t.next)>0)}function ce(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function mr(i,t){return i.x===t.x&&i.y===t.y}function Xl(i,t,e,n){const s=Zs(ce(i,t,e)),r=Zs(ce(i,t,n)),o=Zs(ce(e,n,i)),a=Zs(ce(e,n,t));return!!(s!==r&&o!==a||s===0&&Ys(i,e,t)||r===0&&Ys(i,n,t)||o===0&&Ys(e,i,n)||a===0&&Ys(e,t,n))}function Ys(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Zs(i){return i>0?1:i<0?-1:0}function B0(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Xl(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function ps(i,t){return ce(i.prev,i,i.next)<0?ce(i,t,i.next)>=0&&ce(i,i.prev,t)>=0:ce(i,t,i.prev)<0||ce(i,i.next,t)<0}function k0(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function ql(i,t){const e=new Qo(i.i,i.x,i.y),n=new Qo(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Gc(i,t,e,n){const s=new Qo(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ms(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Qo(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function V0(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class ls{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return ls.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Wc(t),Xc(n,t);let o=t.length;e.forEach(Wc);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,Xc(n,e[c]);const a=b0.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function Wc(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Xc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class gr extends Ce{constructor(t=new ba([new ht(.5,.5),new ht(-.5,.5),new ht(-.5,-.5),new ht(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];o(l)}this.setAttribute("position",new ne(s,3)),this.setAttribute("uv",new ne(r,2)),this.computeVertexNormals();function o(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,M=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:H0;let x,_=!1,R,T,A,C;p&&(x=p.getSpacedPoints(h),_=!0,d=!1,R=p.computeFrenetFrames(h,!1),T=new D,A=new D,C=new D),d||(m=0,f=0,g=0,M=0);const E=a.extractPoints(l);let y=E.shape;const P=E.holes;if(!ls.isClockWise(y)){y=y.reverse();for(let j=0,st=P.length;j<st;j++){const L=P[j];ls.isClockWise(L)&&(P[j]=L.reverse())}}const N=ls.triangulateShape(y,P),I=y;for(let j=0,st=P.length;j<st;j++){const L=P[j];y=y.concat(L)}function X(j,st,L){return st||console.error("THREE.ExtrudeGeometry: vec does not exist"),j.clone().addScaledVector(st,L)}const H=y.length,$=N.length;function V(j,st,L){let k,K,ot;const et=j.x-st.x,Tt=j.y-st.y,ut=L.x-j.x,w=L.y-j.y,S=et*et+Tt*Tt,B=et*w-Tt*ut;if(Math.abs(B)>Number.EPSILON){const Z=Math.sqrt(S),tt=Math.sqrt(ut*ut+w*w),Y=st.x-Tt/Z,xt=st.y+et/Z,lt=L.x-w/tt,Mt=L.y+ut/tt,Wt=((lt-Y)*w-(Mt-xt)*ut)/(et*w-Tt*ut);k=Y+et*Wt-j.x,K=xt+Tt*Wt-j.y;const rt=k*k+K*K;if(rt<=2)return new ht(k,K);ot=Math.sqrt(rt/2)}else{let Z=!1;et>Number.EPSILON?ut>Number.EPSILON&&(Z=!0):et<-Number.EPSILON?ut<-Number.EPSILON&&(Z=!0):Math.sign(Tt)===Math.sign(w)&&(Z=!0),Z?(k=-Tt,K=et,ot=Math.sqrt(S)):(k=et,K=Tt,ot=Math.sqrt(S/2))}return new ht(k/ot,K/ot)}const nt=[];for(let j=0,st=I.length,L=st-1,k=j+1;j<st;j++,L++,k++)L===st&&(L=0),k===st&&(k=0),nt[j]=V(I[j],I[L],I[k]);const ft=[];let mt,Rt=nt.concat();for(let j=0,st=P.length;j<st;j++){const L=P[j];mt=[];for(let k=0,K=L.length,ot=K-1,et=k+1;k<K;k++,ot++,et++)ot===K&&(ot=0),et===K&&(et=0),mt[k]=V(L[k],L[ot],L[et]);ft.push(mt),Rt=Rt.concat(mt)}for(let j=0;j<m;j++){const st=j/m,L=f*Math.cos(st*Math.PI/2),k=g*Math.sin(st*Math.PI/2)+M;for(let K=0,ot=I.length;K<ot;K++){const et=X(I[K],nt[K],k);at(et.x,et.y,-L)}for(let K=0,ot=P.length;K<ot;K++){const et=P[K];mt=ft[K];for(let Tt=0,ut=et.length;Tt<ut;Tt++){const w=X(et[Tt],mt[Tt],k);at(w.x,w.y,-L)}}}const Nt=g+M;for(let j=0;j<H;j++){const st=d?X(y[j],Rt[j],Nt):y[j];_?(A.copy(R.normals[0]).multiplyScalar(st.x),T.copy(R.binormals[0]).multiplyScalar(st.y),C.copy(x[0]).add(A).add(T),at(C.x,C.y,C.z)):at(st.x,st.y,0)}for(let j=1;j<=h;j++)for(let st=0;st<H;st++){const L=d?X(y[st],Rt[st],Nt):y[st];_?(A.copy(R.normals[j]).multiplyScalar(L.x),T.copy(R.binormals[j]).multiplyScalar(L.y),C.copy(x[j]).add(A).add(T),at(C.x,C.y,C.z)):at(L.x,L.y,u/h*j)}for(let j=m-1;j>=0;j--){const st=j/m,L=f*Math.cos(st*Math.PI/2),k=g*Math.sin(st*Math.PI/2)+M;for(let K=0,ot=I.length;K<ot;K++){const et=X(I[K],nt[K],k);at(et.x,et.y,u+L)}for(let K=0,ot=P.length;K<ot;K++){const et=P[K];mt=ft[K];for(let Tt=0,ut=et.length;Tt<ut;Tt++){const w=X(et[Tt],mt[Tt],k);_?at(w.x,w.y+x[h-1].y,x[h-1].x+L):at(w.x,w.y,u+L)}}}J(),it();function J(){const j=s.length/3;if(d){let st=0,L=H*st;for(let k=0;k<$;k++){const K=N[k];Ct(K[2]+L,K[1]+L,K[0]+L)}st=h+m*2,L=H*st;for(let k=0;k<$;k++){const K=N[k];Ct(K[0]+L,K[1]+L,K[2]+L)}}else{for(let st=0;st<$;st++){const L=N[st];Ct(L[2],L[1],L[0])}for(let st=0;st<$;st++){const L=N[st];Ct(L[0]+H*h,L[1]+H*h,L[2]+H*h)}}n.addGroup(j,s.length/3-j,0)}function it(){const j=s.length/3;let st=0;yt(I,st),st+=I.length;for(let L=0,k=P.length;L<k;L++){const K=P[L];yt(K,st),st+=K.length}n.addGroup(j,s.length/3-j,1)}function yt(j,st){let L=j.length;for(;--L>=0;){const k=L;let K=L-1;K<0&&(K=j.length-1);for(let ot=0,et=h+m*2;ot<et;ot++){const Tt=H*ot,ut=H*(ot+1),w=st+k+Tt,S=st+K+Tt,B=st+K+ut,Z=st+k+ut;It(w,S,B,Z)}}}function at(j,st,L){c.push(j),c.push(st),c.push(L)}function Ct(j,st,L){Lt(j),Lt(st),Lt(L);const k=s.length/3,K=v.generateTopUV(n,s,k-3,k-2,k-1);Gt(K[0]),Gt(K[1]),Gt(K[2])}function It(j,st,L,k){Lt(j),Lt(st),Lt(k),Lt(st),Lt(L),Lt(k);const K=s.length/3,ot=v.generateSideWallUV(n,s,K-6,K-3,K-2,K-1);Gt(ot[0]),Gt(ot[1]),Gt(ot[3]),Gt(ot[1]),Gt(ot[2]),Gt(ot[3])}function Lt(j){s.push(c[j*3+0]),s.push(c[j*3+1]),s.push(c[j*3+2])}function Gt(j){r.push(j.x),r.push(j.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return G0(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new $o[s.type]().fromJSON(s)),new gr(n,t.options)}}const H0={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new ht(r,o),new ht(a,c),new ht(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],f=t[s*3+1],g=t[s*3+2],M=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new ht(o,1-c),new ht(l,1-u),new ht(d,1-g),new ht(M,1-p)]:[new ht(a,1-c),new ht(h,1-u),new ht(f,1-g),new ht(m,1-p)]}};function G0(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Vn extends Ta{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Vn(t.radius,t.detail)}}class Gn extends Ce{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new D,d=new D,f=[],g=[],M=[],m=[];for(let p=0;p<=n;p++){const v=[],x=p/n;let _=0;p===0&&o===0?_=.5/e:p===n&&c===Math.PI&&(_=-.5/e);for(let R=0;R<=e;R++){const T=R/e;u.x=-t*Math.cos(s+T*r)*Math.sin(o+x*a),u.y=t*Math.cos(o+x*a),u.z=t*Math.sin(s+T*r)*Math.sin(o+x*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),M.push(d.x,d.y,d.z),m.push(T+_,1-x),v.push(l++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<e;v++){const x=h[p][v+1],_=h[p][v],R=h[p+1][v],T=h[p+1][v+1];(p!==0||o>0)&&f.push(x,_,T),(p!==n-1||c<Math.PI)&&f.push(_,R,T)}this.setIndex(f),this.setAttribute("position",new ne(g,3)),this.setAttribute("normal",new ne(M,3)),this.setAttribute("uv",new ne(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ur extends Ce{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],h=new D,u=new D,d=new D;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const M=g/s*r,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(M),u.y=(t+e*Math.cos(m))*Math.sin(M),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(M),h.y=t*Math.sin(M),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const M=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,v=(s+1)*f+g;o.push(M,m,v),o.push(m,p,v)}this.setIndex(o),this.setAttribute("position",new ne(a,3)),this.setAttribute("normal",new ne(c,3)),this.setAttribute("uv",new ne(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ur(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class ir extends Gi{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Dt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ga,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ue,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class W0 extends ir{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ht(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ye(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Dt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Dt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Dt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class to extends Gi{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ga,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ue,this.combine=ca,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Yl extends Te{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Dt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class X0 extends Yl{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Dt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const eo=new qt,qc=new D,Yc=new D;class q0{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ht(512,512),this.map=null,this.mapPass=null,this.matrix=new qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new va,this._frameExtents=new ht(1,1),this._viewportCount=1,this._viewports=[new ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;qc.setFromMatrixPosition(t.matrixWorld),e.position.copy(qc),Yc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Yc),e.updateMatrixWorld(),eo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(eo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(eo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Y0 extends q0{constructor(){super(new Il(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Z0 extends Yl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.target=new Te,this.shadow=new Y0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class J0{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Zc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Zc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Zc(){return performance.now()}const Jc=new qt;class K0{constructor(t,e,n=0,s=1/0){this.ray=new bl(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new _a,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Jc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Jc),this}intersectObject(t,e=!0,n=[]){return ta(t,this,n,e),n.sort(Kc),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)ta(t[s],this,n,e);return n.sort(Kc),n}}function Kc(i,t){return i.distance-t.distance}function ta(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)ta(r[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:aa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=aa);function Aa(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new Ce;let l=0;for(let h=0;h<i.length;++h){const u=i[h];let d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(e){let h=0;const u=[];for(let d=0;d<i.length;++d){const f=i[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=i[d].attributes.position.count}c.setIndex(u)}for(const h in r){const u=$c(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let M=0;M<o[h].length;++M)f.push(o[h][M][d]);const g=$c(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function $c(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){const h=i[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const o=new t(r),a=new Se(o,e,n);let c=0;for(let l=0;l<i.length;++l){const h=i[l];if(h.isInterleavedBufferAttribute){const u=c/e;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<e;g++){const M=h.getComponent(d,g);a.setComponent(d+u,g,M)}}else o.set(h.array,c);c+=h.count*e}return s!==void 0&&(a.gpuType=s),a}function jc(i,t=1e-4){t=Math.max(t,Number.EPSILON);const e={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count;let o=0;const a=Object.keys(i.attributes),c={},l={},h=[],u=["getX","getY","getZ","getW"],d=["setX","setY","setZ","setW"];for(let v=0,x=a.length;v<x;v++){const _=a[v],R=i.attributes[_];c[_]=new R.constructor(new R.array.constructor(R.count*R.itemSize),R.itemSize,R.normalized);const T=i.morphAttributes[_];T&&(l[_]||(l[_]=[]),T.forEach((A,C)=>{const E=new A.array.constructor(A.count*A.itemSize);l[_][C]=new A.constructor(E,A.itemSize,A.normalized)}))}const f=t*.5,g=Math.log10(1/t),M=Math.pow(10,g),m=f*M;for(let v=0;v<r;v++){const x=n?n.getX(v):v;let _="";for(let R=0,T=a.length;R<T;R++){const A=a[R],C=i.getAttribute(A),E=C.itemSize;for(let y=0;y<E;y++)_+=`${~~(C[u[y]](x)*M+m)},`}if(_ in e)h.push(e[_]);else{for(let R=0,T=a.length;R<T;R++){const A=a[R],C=i.getAttribute(A),E=i.morphAttributes[A],y=C.itemSize,P=c[A],z=l[A];for(let N=0;N<y;N++){const I=u[N],X=d[N];if(P[X](o,C[I](x)),E)for(let H=0,$=E.length;H<$;H++)z[H][X](o,E[H][I](x))}}e[_]=o,h.push(o),o++}}const p=i.clone();for(const v in i.attributes){const x=c[v];if(p.setAttribute(v,new x.constructor(x.array.slice(0,o*x.itemSize),x.itemSize,x.normalized)),v in l)for(let _=0;_<l[v].length;_++){const R=l[v][_];p.morphAttributes[v][_]=new R.constructor(R.array.slice(0,o*R.itemSize),R.itemSize,R.normalized)}}return p.setIndex(h),p}function _r(i){let t=i>>>0;return function(){t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function $0(i,t,e=0){let n=(Math.imul(i|0,668265261)^Math.imul(t|0,374761393)^Math.imul(e|0,2654435761))>>>0;return n=Math.imul(n^n>>>15,2246822507)>>>0,n=Math.imul(n^n>>>13,3266489909)>>>0,(n^n>>>16)>>>0}function vr(i){const t=_r(i),e=new Uint8Array(256);for(let c=0;c<256;c++)e[c]=c;for(let c=255;c>0;c--){const l=Math.floor(t()*(c+1)),h=e[c];e[c]=e[l],e[l]=h}const n=new Uint8Array(512);for(let c=0;c<512;c++)n[c]=e[c&255];const s=new Float32Array([1,-1,1,-1,1,-1,0,0]),r=new Float32Array([1,1,-1,-1,0,0,1,-1]),o=.5*(Math.sqrt(3)-1),a=(3-Math.sqrt(3))/6;return function(l,h){const u=(l+h)*o,d=Math.floor(l+u),f=Math.floor(h+u),g=(d+f)*a,M=l-(d-g),m=h-(f-g);let p,v;M>m?(p=1,v=0):(p=0,v=1);const x=M-p+a,_=m-v+a,R=M-1+2*a,T=m-1+2*a,A=d&255,C=f&255;let E=0,y=.5-M*M-m*m;if(y>0){const N=n[A+n[C]]&7;y*=y,E+=y*y*(s[N]*M+r[N]*m)}let P=.5-x*x-_*_;if(P>0){const N=n[A+p+n[C+v]]&7;P*=P,E+=P*P*(s[N]*x+r[N]*_)}let z=.5-R*R-T*T;if(z>0){const N=n[A+1+n[C+1]]&7;z*=z,E+=z*z*(s[N]*R+r[N]*T)}return 70*E}}const Jt=48,cn=32,me=Jt/cn,Di=0,Ms=20261127,j0=vr(Ms),Zl=vr(Ms+1),Q0=vr(Ms+2),wa=vr(Ms+3);function sr(i,t,e,n){let s=0,r=1,o=1,a=0;for(let c=0;c<n;c++)s+=r*i(t*o,e*o),a+=r,r*=.5,o*=2.03;return s/a}function rs(i,t){const e=sr(j0,i*.004,t*.004,3),n=sr(Zl,i*.018,t*.018,3);let s=3+e*16+n*3.5;const r=Math.max(0,sr(Q0,i*.0055+31.7,t*.0055-12.3,4)-.12);s+=r*r*110,s+=wa(i*.09,t*.09)*.25;const o=Math.exp(-(i*i+t*t)/2500);return s*(1-o)+(3.5+n*1.5)*o}const os=i=>i<0?0:i>1?1:i,Ai=(i,t)=>(i+32768)*65536+(t+32768),he=i=>new Dt(i),xn={under:he("#bfae7e"),wet:he("#e2cd92"),sand:he("#f5e3a8"),g1:he("#9ad96f"),g2:he("#74c65f"),g3:he("#b6e27a"),rock:he("#aaa49c"),snow:he("#f7fbff")},ae={trunk:he("#9a6a45"),leaf:["#5cc06a","#77d16b","#4fb460","#93d968","#6fcf8a"].map(he),pine:["#3f9c63","#4cab6b","#378c5a"].map(he),rock:["#a6aab0","#b9b6ae","#9a9ea6","#c2bcb0"].map(he),cap:["#ff5d6c","#ff7a59","#c77dff"].map(he),capUnder:he("#f3dcc0"),stem:he("#fbf1de"),dot:he("#ffffff"),flower:["#ff7eb6","#ffd166","#ffffff","#b69cff","#ff9f68","#7dd3fc"].map(he),flowerMid:he("#ffcf4a"),berryLeaf:he("#4fb860"),stalk:he("#5fae4f"),grass:he("#6cc35a"),grass2:he("#86d466")};function on(i){const t=i.index?i.toNonIndexed():i;return t.deleteAttribute("uv"),t.attributes.normal||t.computeVertexNormals(),t}const de={trunk:on(new Bi(.75,1,1,10).translate(0,.5,0)),blob:on(new Vn(1,2)),cone:on(new hr(1,1,14).translate(0,.5,0)),rock:on(new Vn(1,2)),cap:on(new Gn(1,24,10,0,Math.PI*2,0,Math.PI/2)),disc:on(new fs(1,24).rotateX(Math.PI/2)),stem:on(new Bi(.8,1,1,14).translate(0,.5,0)),ico:on(new Vn(1,1)),blade:on(new hr(1,1,4).translate(0,.5,0)),leaf:on(new Gn(1,10,6))},ea=new qt,hs=new ze,Jl=new Ue,na=new D,ia=new D;function pe(i,t,e,n,s,r,o,a,c,l=0,h=0,u=0){const d=t.clone();hs.setFromEuler(Jl.set(l,h,u)),ea.compose(na.set(n,s,r),hs,ia.set(o,a,c)),d.applyMatrix4(ea);const f=d.attributes.position.count,g=new Float32Array(f*3);for(let M=0;M<f;M++)g[M*3]=e.r,g[M*3+1]=e.g,g[M*3+2]=e.b;d.setAttribute("color",new Se(g,3)),i.push(d)}const tg=new Dt;function Mn(i,t,e=.06){return tg.copy(i).offsetHSL((t()-.5)*e*.3,0,(t()-.5)*e)}function eg(){const i=[[0,-.24],[.07,-.21],[.15,-.12],[.2,0],[.205,.08],[.17,.15],[.09,.19],[0,.2]],t=i.map(([c,l])=>new ht(c,l)),e=[],n=(c,l,h)=>{c=c.index?c.toNonIndexed():c,c.deleteAttribute("uv"),h&&c.applyMatrix4(h);const u=c.attributes.position.count,d=new Float32Array(u*3),f=new Dt(l);for(let g=0;g<u;g++)d[g*3]=f.r,d[g*3+1]=f.g,d[g*3+2]=f.b;c.setAttribute("color",new Se(d,3)),e.push(c)};n(new Ea(t,18),"#ff3f5e");const s=new Gn(.014,5,4),r=_r(7),o=c=>{for(let l=1;l<i.length;l++)if(c<=i[l][1]){const h=(c-i[l-1][1])/(i[l][1]-i[l-1][1]);return i[l-1][0]+(i[l][0]-i[l-1][0])*h}return 0};for(let c=0;c<26;c++){const l=-.17+c/26*.3+(r()-.5)*.02,h=c*2.4,u=o(l)+.004;n(s.clone(),"#ffe27a",new qt().makeTranslation(Math.cos(h)*u,l,Math.sin(h)*u))}for(let c=0;c<6;c++){const l=c/6*Math.PI*2,h=new Gn(1,8,5),u=new qt().compose(new D(Math.cos(l)*.09,.2,Math.sin(l)*.09),new ze().setFromEuler(new Ue(0,-l,-.35)),new D(.1,.018,.045));n(h,"#46b45a",u)}n(new Bi(.012,.018,.09,6),"#3e9a4c",new qt().makeTranslation(0,.25,0));const a=Aa(e);for(const c of e)c.dispose();return a}function ng(){const i=new ba,t=5,e=.55,n=.26;for(let r=0;r<=t*2;r++){const o=r/(t*2)*Math.PI*2+Math.PI/2,a=r%2===0?e:n,c=Math.cos(o)*a,l=Math.sin(o)*a;r===0?i.moveTo(c,l):i.lineTo(c,l)}const s=new gr(i,{depth:.16,bevelEnabled:!0,bevelThickness:.08,bevelSize:.07,bevelSegments:2});return s.center(),s}class ig{constructor(t,e,n){this.cx=e,this.cz=n,this.x0=e*Jt,this.z0=n*Jt,this.colliders=[],this.stars=[];const s=cn+1,r=cn+3,o=new Float32Array(r*r);for(let M=0;M<r;M++)for(let m=0;m<r;m++)o[M*r+m]=rs(this.x0+(m-1)*me,this.z0+(M-1)*me);const a=new Float32Array(s*s),c=new Float32Array(s*s*3),l=new Float32Array(s*s*3),h=new Float32Array(s*s*3),u=new Dt;for(let M=0;M<s;M++)for(let m=0;m<s;m++){const p=(M+1)*r+(m+1),v=o[p];a[M*s+m]=v;const x=(M*s+m)*3,_=this.x0+m*me,R=this.z0+M*me;c[x]=_,c[x+1]=v,c[x+2]=R;const T=o[p+1]-o[p-1],A=o[p+r]-o[p-r],C=1/Math.sqrt(T*T+A*A+4*me*me),E=2*me*C;l[x]=-T*C,l[x+1]=E,l[x+2]=-A*C,sg(v,E,_,R,u),h[x]=u.r,h[x+1]=u.g,h[x+2]=u.b}this.heights=a;const d=new Uint32Array(cn*cn*6);let f=0;for(let M=0;M<cn;M++)for(let m=0;m<cn;m++){const p=M*s+m,v=p+1,x=p+s,_=x+1;d[f++]=p,d[f++]=x,d[f++]=v,d[f++]=v,d[f++]=x,d[f++]=_}const g=new Ce;g.setAttribute("position",new Se(c,3)),g.setAttribute("normal",new Se(l,3)),g.setAttribute("color",new Se(h,3)),g.setIndex(new Se(d,1)),g.computeBoundingSphere(),this.mesh=new ee(g,t.terrainMat),this.mesh.receiveShadow=!0,this.mesh.matrixAutoUpdate=!1}decorate(t){const e=_r($0(this.cx,this.cz,Ms)),n=[],s=new D,r=this.x0,o=this.z0,a=os((sr(wa,(r+24)*.006,(o+24)*.006,2)+.35)*1.3),c=[],l=(v,x,_)=>v*v+x*x<_*_,h=Math.floor(a*a*16+e()*2);for(let v=0;v<h;v++){const x=r+e()*Jt,_=o+e()*Jt,R=t.heightAt(x,_,s);if(R<1.6||s.y<.8||l(x,_,7))continue;const A=R>13||e()<.18?this.addPine(n,e,x,_,R):this.addTree(n,e,x,_,R);c.push(A)}const u=1+Math.floor(e()*4);for(let v=0;v<u;v++){const x=r+e()*Jt,_=o+e()*Jt,R=t.heightAt(x,_,s);R<-1.5||l(x,_,5)||this.addRock(n,e,x,_,R)}if(e()<.25+a*.35){const v=r+4+e()*(Jt-8),x=o+4+e()*(Jt-8),_=t.heightAt(v,x,s);_>1.2&&s.y>.85&&!l(v,x,6)&&this.addMushroom(n,e,v,x,_,.9+e()*.5)}if(this.cx===0&&this.cz===0){const _=t.heightAt(9,-8,s);this.addMushroom(n,e,9,-8,_,1.15)}const d=Math.floor(a*6*e());for(let v=0;v<d;v++){const x=r+e()*Jt,_=o+e()*Jt,R=t.heightAt(x,_,s);if(R<1.6||s.y<.85)continue;const T=.25+e()*.2;pe(n,de.stem,ae.stem,x,R-.05,_,.35*T,1.1*T,.35*T),pe(n,de.cap,ae.cap[Math.floor(e()*3)],x,R+1*T,_,T,.7*T,T)}const f=2+Math.floor(e()*4);for(let v=0;v<f;v++){const x=r+e()*Jt,_=o+e()*Jt,R=ae.flower[Math.floor(e()*ae.flower.length)],T=4+Math.floor(e()*7);for(let A=0;A<T;A++){const C=x+(e()-.5)*5,E=_+(e()-.5)*5,y=t.heightAt(C,E,s);if(y<1.6||y>16||s.y<.8)continue;const P=.3+e()*.25;pe(n,de.blade,ae.stalk,C,y-.02,E,.03,P,.03),pe(n,de.ico,Mn(R,e),C,y+P,E,.16,.07,.16,0,e()*3,0),pe(n,de.ico,ae.flowerMid,C,y+P+.04,E,.06,.05,.06)}}this.berries=[];const g=(e()<.85?1:0)+Math.floor(e()*2.5),M=[];for(let v=0;v<g;v++)M.push([r+3+e()*(Jt-6),o+3+e()*(Jt-6)]);this.cx===0&&this.cz===0&&M.push([-5,4]);for(const[v,x]of M){const _=t.heightAt(v,x,s);if(_<1.7||_>15||s.y<.82)continue;const R=3+Math.floor(e()*4);for(let T=0;T<R;T++){const A=e()*Math.PI*2,C=.5+e()*1.6,E=v+Math.cos(A)*C,y=x+Math.sin(A)*C,P=t.heightAt(E,y),z=`${this.cx},${this.cz},b${this.berries.length}`;this.berries.push({id:z,x:E,y:P+.2,z:y,ry:e()*6,tilt:(e()-.5)*.5,s:.85+e()*.35});for(let N=0;N<3;N++){const I=A+N*2.1+e()*.5;pe(n,de.leaf,Mn(ae.berryLeaf,e),E+Math.cos(I)*.25,P+.06,y+Math.sin(I)*.25,.26,.05,.14,0,-I,.25)}}}const m=30+Math.floor(e()*25);for(let v=0;v<m;v++){const x=r+e()*Jt,_=o+e()*Jt,R=t.heightAt(x,_,s);if(R<1.5||R>20||s.y<.75)continue;const T=e()<.5?ae.grass:ae.grass2;for(let A=0;A<3;A++){const C=e()*Math.PI*2;pe(n,de.blade,T,x+Math.cos(C)*.08,R-.05,_+Math.sin(C)*.08,.06,.35+e()*.3,.06,Math.cos(C)*.3,0,Math.sin(C)*.3)}}if(n.length){const v=Aa(n,!1);for(const x of n)x.dispose();v.computeBoundingSphere(),this.deco=new ee(v,t.decoMat),this.deco.castShadow=!0,this.deco.receiveShadow=!0,this.deco.matrixAutoUpdate=!1}const p=1+Math.floor(e()*2.6);for(let v=0;v<p;v++){const x=`${this.cx},${this.cz},${v}`;let _,R,T;if(c.length&&e()<.3){const A=c[Math.floor(e()*c.length)];_=A.x,R=A.y+1.4,T=A.z}else _=r+2+e()*(Jt-4),T=o+2+e()*(Jt-4),R=Math.max(t.heightAt(_,T),Di)+1.5+e()*.6;this.cx===0&&this.cz===0&&v===0&&(_=5,T=5,R=t.heightAt(5,5)+1.6),this.stars.push({id:x,x:_,y:R,z:T,mesh:null,phase:e()*6})}this.cx===0&&this.cz===0&&this.stars.push({id:"0,0,m",x:9,y:t.heightAt(9,-8)+9.5,z:-8,mesh:null,phase:1})}addTree(t,e,n,s,r){const o=.9+e()*.5,a=(3.2+e()*1.4)*o,c=.3*o;pe(t,de.trunk,Mn(ae.trunk,e),n,r-.3,s,c,a+.3,c,0,e()*6,0);const l=ae.leaf[Math.floor(e()*ae.leaf.length)],h=(1.6+e()*.6)*o,u=r+a+h*.6;pe(t,de.blob,Mn(l,e),n,u,s,h,h*.9,h,e(),e()*6,e());const d=e()*Math.PI*2;return pe(t,de.blob,Mn(l,e),n+Math.cos(d)*h*.7,u-h*.25,s+Math.sin(d)*h*.7,h*.62,h*.55,h*.62,e(),e()*6,0),pe(t,de.blob,Mn(l,e),n-Math.cos(d)*h*.55,u+h*.15,s-Math.sin(d)*h*.55,h*.5,h*.48,h*.5,e(),e()*6,0),this.colliders.push({type:1,x:n,z:s,r:c*1.1,y0:r-2,y1:r+a}),this.colliders.push({type:0,x:n,y:u,z:s,r:h*.92}),{x:n,y:u+h*.9,z:s}}addPine(t,e,n,s,r){const o=.8+e()*.6,a=1.2*o;pe(t,de.trunk,Mn(ae.trunk,e),n,r-.3,s,.28*o,a+.4,.28*o);const c=ae.pine[Math.floor(e()*ae.pine.length)];let l=r+a,h=2*o,u=2.4*o;for(let f=0;f<3;f++)pe(t,de.cone,Mn(c,e),n,l,s,h,u,h,0,e()*6,0),l+=u*.5,h*=.72,u*=.85;const d=l+u*.5;return this.colliders.push({type:1,x:n,z:s,r:1*o,y0:r-2,y1:r+a+2.4*o*.6}),this.colliders.push({type:1,x:n,z:s,r:.45*o,y0:r-2,y1:d-.6*o}),{x:n,y:d-.6*o,z:s}}addRock(t,e,n,s,r){const o=.6+e()*1.5,a=o*(.6+e()*.3),c=r+a*.3;pe(t,de.rock,Mn(ae.rock[Math.floor(e()*ae.rock.length)],e),n,c,s,o,a,o*(.85+e()*.3),e()*.4,e()*6,e()*.4);const l=(o+a)*.5*.88;this.colliders.push({type:0,x:n,y:c+a*.92-l,z:s,r:l})}addMushroom(t,e,n,s,r,o){const a=1.6*o,c=1.8*o;pe(t,de.stem,ae.stem,n,r-.2,s,.45*o,a+.2,.45*o);const l=ae.cap[Math.floor(e()*ae.cap.length)];pe(t,de.cap,l,n,r+a,s,c,c*.65,c),pe(t,de.disc,ae.capUnder,n,r+a+.01,s,c*.98,1,c*.98);const h=7;for(let d=0;d<h;d++){const f=d/h*Math.PI*2+e()*.5,g=.45+e()*.6,M=Math.cos(f)*Math.cos(g)*c,m=Math.sin(g)*c*.65,p=Math.sin(f)*Math.cos(g)*c;pe(t,de.blob,ae.dot,n+M*.96,r+a+m*.96,s+p*.96,.2*o,.2*o,.2*o)}pe(t,de.blob,ae.dot,n,r+a+c*.6,s,.3*o,.12*o,.3*o);const u=c*1.15;this.colliders.push({type:1,x:n,z:s,r:.45*o,y0:r-2,y1:r+a}),this.colliders.push({type:0,x:n,y:r+a+c*.65-u,z:s,r:u,bouncy:!0})}dispose(t){t.remove(this.mesh),this.mesh.geometry.dispose(),this.deco&&(t.remove(this.deco),this.deco.geometry.dispose()),this.berryMesh&&(t.remove(this.berryMesh),this.berryMesh.dispose());for(const e of this.stars)e.mesh&&t.remove(e.mesh)}}function sg(i,t,e,n,s){if(i<.9)s.copy(xn.wet).lerp(xn.under,os(-i/4));else if(i<1.7)s.copy(xn.sand);else{s.copy(xn.g2).lerp(xn.g1,(Zl(e*.05,n*.05)+1)*.5);const r=wa(e*.013,n*.013);r>.35&&s.lerp(xn.g3,os((r-.35)*3)*.7),i<2.2&&s.lerp(xn.sand,(2.2-i)/.5*.6)}i>=1.2&&t<.8&&s.lerp(xn.rock,os((.8-t)/.12)),i>22&&t>.6&&s.lerp(xn.snow,os((i-22)/5))}class rg{constructor(t,{viewRadius:e=3}={}){this.scene=t,this.viewRadius=e,this.chunks=new Map,this.lastChunk=null,this.near=[],this.groundBouncy=!1,this.terrainMat=new to({vertexColors:!0}),this.decoMat=new to({vertexColors:!0}),this.berryGeo=eg(),this.berryMat=new ir({vertexColors:!0,roughness:.35,metalness:0}),this.eaten=new Set,this.onEat=null,this._m4=new qt,this.starGeo=ng(),this.starMat=new ir({color:"#ffd84a",emissive:"#ffb300",emissiveIntensity:.55,roughness:.3,metalness:.1}),this.collected=new Set;try{const s=JSON.parse(localStorage.getItem("globby.stars")||"[]");for(const r of s)this.collected.add(r)}catch{}this.onCollect=null,this._n=new D,this.time=0;const n=new xs(1400,1400,1,1).rotateX(-Math.PI/2);this.water=new ee(n,new ir({color:"#5fc4ff",transparent:!0,opacity:.72,roughness:.12,metalness:0})),this.water.position.y=Di,this.water.receiveShadow=!0,t.add(this.water),this.makeClouds()}makeClouds(){this.clouds=[];const t=new to({color:"#ffffff",emissive:"#dde8ff",emissiveIntensity:.4}),e=_r(99);for(let n=0;n<22;n++){const s=[],r=3+Math.floor(e()*4);for(let a=0;a<r;a++){const c=3+e()*4,l=de.blob.clone();l.applyMatrix4(ea.compose(na.set((a-r/2)*4+e()*2,e()*2,e()*4-2),hs.identity(),ia.set(c,c*.7,c))),s.push(l)}const o=new ee(Aa(s),t);o.position.set((e()-.5)*600,55+e()*25,(e()-.5)*600),this.clouds.push(o),this.scene.add(o)}}setBerryMatrix(t,e,n){hs.setFromEuler(Jl.set(e.tilt,e.ry,e.tilt*.5)),this._m4.compose(na.set(e.x,e.y,e.z),hs,ia.setScalar(e.s*n)),t.setMatrixAt(e.i,this._m4)}heightAt(t,e,n){const s=Math.floor(t/Jt),r=Math.floor(e/Jt);let o=this.lastChunk;(!o||o.cx!==s||o.cz!==r)&&(o=this.chunks.get(Ai(s,r)),o&&(this.lastChunk=o));const a=(t-s*Jt)/me,c=(e-r*Jt)/me,l=Math.min(cn-1,Math.floor(a)),h=Math.min(cn-1,Math.floor(c)),u=a-l,d=c-h;let f,g,M,m;if(o){const _=o.heights,R=cn+1,T=h*R+l;f=_[T],g=_[T+1],M=_[T+R],m=_[T+R+1]}else{const _=s*Jt+l*me,R=r*Jt+h*me;f=rs(_,R),g=rs(_+me,R),M=rs(_,R+me),m=rs(_+me,R+me)}let p,v,x;if(u+d<=1?(p=f+(g-f)*u+(M-f)*d,v=(g-f)/me,x=(M-f)/me):(p=m+(M-m)*(1-u)+(g-m)*(1-d),v=(m-M)/me,x=(m-g)/me),n){const _=1/Math.sqrt(v*v+x*x+1);n.set(-v*_,_,-x*_)}return p}groundAt(t,e,n){let s=this.heightAt(t,e),r=!1;const o=this.near;for(let a=0;a<o.length;a++){const c=o[a],l=t-c.x,h=e-c.z,u=l*l+h*h;if(u>=c.r*c.r)continue;const d=c.type===0?c.y+Math.sqrt(c.r*c.r-u):c.y1;d>s&&d<=n+.3&&(s=d,r=!!c.bouncy)}return this.groundBouncy=r,s}updateNear(t,e=4){const n=this.near;n.length=0;const s=Math.floor(t.x/Jt),r=Math.floor(t.z/Jt);for(let o=-1;o<=1;o++)for(let a=-1;a<=1;a++){const c=this.chunks.get(Ai(s+a,r+o));if(c)for(const l of c.colliders){const h=t.x-l.x,u=t.z-l.z,d=l.r+e;h*h+u*u<d*d&&n.push(l)}}}ensureChunk(t,e){const n=Ai(t,e);let s=this.chunks.get(n);if(s)return s;if(s=new ig(this,t,e),this.chunks.set(n,s),s.decorate(this),this.scene.add(s.mesh),s.mesh.updateMatrix(),s.deco&&(this.scene.add(s.deco),s.deco.updateMatrix()),s.berries.length){const r=new Bl(this.berryGeo,this.berryMat,s.berries.length);r.castShadow=!0,s.berries.forEach((o,a)=>{o.i=a,this.setBerryMatrix(r,o,this.eaten.has(o.id)?0:1)}),r.instanceMatrix.needsUpdate=!0,r.computeBoundingSphere(),s.berryMesh=r,this.scene.add(r)}for(const r of s.stars)this.collected.has(r.id)||(r.mesh=new ee(this.starGeo,this.starMat),r.mesh.position.set(r.x,r.y,r.z),r.mesh.castShadow=!0,this.scene.add(r.mesh));return s}primeAround(t,e=this.viewRadius){const n=Math.floor(t.x/Jt),s=Math.floor(t.z/Jt);for(let r=-e;r<=e;r++)for(let o=-e;o<=e;o++)this.ensureChunk(n+o,s+r)}update(t,e){this.time+=t;const n=this.viewRadius,s=Math.floor(e.x/Jt),r=Math.floor(e.z/Jt);let o=0;for(let c=0;c<=n&&o<2;c++)for(let l=-c;l<=c&&o<2;l++)for(let h=-c;h<=c&&o<2;h++)Math.max(Math.abs(h),Math.abs(l))===c&&(this.chunks.has(Ai(s+h,r+l))||(this.ensureChunk(s+h,r+l),o++));for(const[c,l]of this.chunks)(Math.abs(l.cx-s)>n+1||Math.abs(l.cz-r)>n+1)&&(l.dispose(this.scene),this.chunks.delete(c),this.lastChunk===l&&(this.lastChunk=null));const a=this.time;for(let c=-1;c<=1;c++)for(let l=-1;l<=1;l++){const h=this.chunks.get(Ai(s+l,r+c));if(h)for(const u of h.stars){if(!u.mesh)continue;const d=e.x-u.x,f=e.y-u.y,g=e.z-u.z;if(d*d+f*f+g*g<1.8*1.8){this.scene.remove(u.mesh),u.mesh=null,this.collected.add(u.id);try{localStorage.setItem("globby.stars",JSON.stringify([...this.collected]))}catch{}this.onCollect&&this.onCollect(new D(u.x,u.y,u.z))}}}for(let c=-1;c<=1;c++)for(let l=-1;l<=1;l++){const h=this.chunks.get(Ai(s+l,r+c));if(!(!h||!h.berryMesh))for(const u of h.berries){if(this.eaten.has(u.id))continue;const d=e.x-u.x,f=e.y-u.y,g=e.z-u.z;d*d+f*f+g*g<1.55*1.55&&(this.eaten.add(u.id),this.setBerryMatrix(h.berryMesh,u,0),h.berryMesh.instanceMatrix.needsUpdate=!0,this.onEat&&this.onEat(new D(u.x,u.y,u.z),u))}}for(const c of this.chunks.values())for(const l of c.stars)l.mesh&&(l.mesh.rotation.y=a*1.8+l.phase,l.mesh.position.y=l.y+Math.sin(a*2.2+l.phase)*.18);this.water.position.x=Math.round(e.x/50)*50,this.water.position.z=Math.round(e.z/50)*50;for(const c of this.clouds)c.position.x+=t*1.6,c.position.x-e.x>320&&(c.position.x-=640),c.position.x-e.x<-320&&(c.position.x+=640),c.position.z-e.z>320&&(c.position.z-=640),c.position.z-e.z<-320&&(c.position.z+=640)}}const og=24,ag=.028,cg=.45,lg=2.4,no=.06,hg=150,ug=11,fg=.64,io=6.5,dg=4,Qc=10.5,pg=10,mg=17.5,gg=85,yn=.2,es=.2,Js=.2,tl=.48,_g=20,Kl=.55,ns=Math.cos(Kl),so=Math.sin(Kl),vg=[{sx:1,sz:1,phase:0},{sx:-1,sz:1,phase:Math.PI*.9},{sx:1,sz:-1,phase:Math.PI*1.15},{sx:-1,sz:-1,phase:Math.PI*.1}];function sa(i,t){const e=i.x,n=i.y,s=i.z,r=i.w;t[0]=1-2*(n*n+s*s),t[1]=2*(e*n-s*r),t[2]=2*(e*s+n*r),t[3]=2*(e*n+s*r),t[4]=1-2*(e*e+s*s),t[5]=2*(n*s-e*r),t[6]=2*(e*s-n*r),t[7]=2*(n*s+e*r),t[8]=1-2*(e*e+n*n)}function el(i,t,e){const n=[i[0]*t[0]+i[1]*t[3]+i[2]*t[6],i[0]*t[1]+i[1]*t[4]+i[2]*t[7],i[0]*t[2]+i[1]*t[5]+i[2]*t[8],i[3]*t[0]+i[4]*t[3]+i[5]*t[6],i[3]*t[1]+i[4]*t[4]+i[5]*t[7],i[3]*t[2]+i[4]*t[5]+i[5]*t[8],i[6]*t[0]+i[7]*t[3]+i[8]*t[6],i[6]*t[1]+i[7]*t[4]+i[8]*t[7],i[6]*t[2]+i[7]*t[5]+i[8]*t[8]];for(let s=0;s<9;s++)e[s]=n[s]}function xg(i,t,e){const n=[i[0]*t[0]+i[3]*t[3]+i[6]*t[6],i[0]*t[1]+i[3]*t[4]+i[6]*t[7],i[0]*t[2]+i[3]*t[5]+i[6]*t[8],i[1]*t[0]+i[4]*t[3]+i[7]*t[6],i[1]*t[1]+i[4]*t[4]+i[7]*t[7],i[1]*t[2]+i[4]*t[5]+i[7]*t[8],i[2]*t[0]+i[5]*t[3]+i[8]*t[6],i[2]*t[1]+i[5]*t[4]+i[8]*t[7],i[2]*t[2]+i[5]*t[5]+i[8]*t[8]];for(let s=0;s<9;s++)e[s]=n[s]}function $l(i){return i[0]*(i[4]*i[8]-i[5]*i[7])-i[1]*(i[3]*i[8]-i[5]*i[6])+i[2]*(i[3]*i[7]-i[4]*i[6])}function Mg(i,t){const e=1/$l(i),n=[(i[4]*i[8]-i[5]*i[7])*e,(i[2]*i[7]-i[1]*i[8])*e,(i[1]*i[5]-i[2]*i[4])*e,(i[5]*i[6]-i[3]*i[8])*e,(i[0]*i[8]-i[2]*i[6])*e,(i[2]*i[3]-i[0]*i[5])*e,(i[3]*i[7]-i[4]*i[6])*e,(i[1]*i[6]-i[0]*i[7])*e,(i[0]*i[4]-i[1]*i[3])*e];for(let s=0;s<9;s++)t[s]=n[s]}const nl=new ze,il=new Float64Array(9);function yg(i,t,e){for(let n=0;n<e;n++){sa(t,il);const s=il;let r=0,o=0,a=0,c=0;for(let d=0;d<3;d++){const f=s[d],g=s[3+d],M=s[6+d],m=i[d],p=i[3+d],v=i[6+d];r+=g*v-M*p,o+=M*m-f*v,a+=f*p-g*m,c+=f*m+g*p+M*v}const l=1/(Math.abs(c)+1e-9);r*=l,o*=l,a*=l;const h=Math.sqrt(r*r+o*o+a*a);if(h<1e-9)break;const u=Math.sin(h*.5)/h;nl.set(r*u,o*u,a*u,Math.cos(h*.5)),t.premultiply(nl).normalize()}}function sl(i){for(;i>Math.PI;)i-=Math.PI*2;for(;i<-Math.PI;)i+=Math.PI*2;return i}const ro=(i,t,e)=>i<t?t:i>e?e:i,Sg=new D(0,1,0),xr=["#cdb4ff","#ffaad4","#8ee8c0","#ffbf96","#94d4ff","#ffe58a"];class Eg{constructor(t,e,n,s=xr[0]){this.scene=t,this.world=e,this.hooks=n,this.time=0;let r=new Vn(1,3);r.deleteAttribute("normal"),r.deleteAttribute("uv"),r=jc(r,1e-4);const o=this.N=r.attributes.position.count;this.rest=new Float32Array(r.attributes.position.array),this.x=new Float32Array(o*3),this.v=new Float32Array(o*3),this.D=new Float32Array(o*3),r.dispose();const a=new Float64Array(9);for(let f=0;f<o;f++){const g=this.rest[f*3],M=this.rest[f*3+1],m=this.rest[f*3+2];a[0]+=g*g,a[1]+=g*M,a[2]+=g*m,a[3]+=M*g,a[4]+=M*M,a[5]+=M*m,a[6]+=m*g,a[7]+=m*M,a[8]+=m*m}this.AqqInv=new Float64Array(9),Mg(a,this.AqqInv),this.Apq=new Float64Array(9),this.A=new Float64Array(9),this.Rf=new Float64Array([1,0,0,0,1,0,0,0,1]),this.Ru=new Float64Array(9),this.S=new Float64Array(9),this.G=new Float64Array([1,0,0,0,1,0,0,0,1]),this.qFit=new ze,this.qTarget=new ze,this.qUsed=new ze,this.qYaw=new ze,this.targetYaw=0,this.kTilt=.04,this.kYaw=.08,this.angDamp=1.5,this.c=new D,this.com=new D,this.vel=new D,this.omega=new D,this.nrm=new D,this.impactN=new D,this.mat=new W0({color:s,roughness:.3,clearcoat:1,clearcoatRoughness:.1,sheen:.8,sheenColor:new Dt("#ffe2f4"),sheenRoughness:.35}),this.setColor(s);let c=new Vn(1,_g);c.deleteAttribute("normal"),c.deleteAttribute("uv"),c=jc(c,1e-4);const l=this.RN=c.attributes.position.count;this.rDir=new Float32Array(c.attributes.position.array);const h=this.K=6;this.rIdx=new Int32Array(l*h),this.rW=new Float32Array(l*h);const u=new Float32Array(o);for(let f=0;f<l;f++){const g=this.rDir[f*3],M=this.rDir[f*3+1],m=this.rDir[f*3+2];for(let v=0;v<o;v++)u[v]=g*this.rest[v*3]+M*this.rest[v*3+1]+m*this.rest[v*3+2];let p=0;for(let v=0;v<h;v++){let x=-1,_=-2;for(let A=0;A<o;A++)u[A]>_&&(_=u[A],x=A);u[x]=-3;const R=Math.acos(Math.min(1,_)),T=Math.exp(-(R/.2)*(R/.2));this.rIdx[f*h+v]=x,this.rW[f*h+v]=T,p+=T}for(let v=0;v<h;v++)this.rW[f*h+v]/=p}c.attributes.position.setUsage(yl),c.computeVertexNormals(),this.rgeo=c,this.body=new ee(c,this.mat),this.body.castShadow=!0,this.body.frustumCulled=!1,t.add(this.body);const d=(f,g,M)=>{let m=0,p=-2;for(let v=0;v<l;v++){const x=this.rDir[v*3]*f+this.rDir[v*3+1]*g+this.rDir[v*3+2]*M;x>p&&(p=x,m=v)}return m};this.legs=vg.map(f=>{const g=new D(f.sx*.5,-.707,f.sz*.5).normalize(),M=[],m=[];for(let R=0;R<o;R++){const T=g.x*this.rest[R*3]+g.y*this.rest[R*3+1]+g.z*this.rest[R*3+2];if(T>.55){const A=Math.acos(Math.min(1,T));M.push(R),m.push(Math.exp(-(A/.4)*(A/.4)))}}const p=m.reduce((R,T)=>R+T,0),v=[],x=[],_=[];for(let R=0;R<l;R++){const T=this.rDir[R*3],A=this.rDir[R*3+1],C=this.rDir[R*3+2],E=T*g.x+A*g.y+C*g.z,y=Math.acos(Math.min(1,E));if(y>=tl)continue;let P=T-g.x*E,z=A-g.y*E,N=C-g.z*E;const I=Math.hypot(P,z,N);I>1e-6?(P/=I,z/=I,N/=I):(P=1,z=0,N=0),v.push(R),x.push(y),_.push(P,z,N)}return{...f,dir:g,idx:Int32Array.from(M),w:Float32Array.from(m.map(R=>R/p)),hipVi:d(g.x,g.y,g.z),vIdx:Int32Array.from(v),vTh:Float32Array.from(x),vT:Float32Array.from(_),hip:new D,hipSurf:new D,n0:new D(0,-1,0),scurry:0,foot:new D,footVel:new D,from:new D,to:new D,planted:!1,stepping:!1,stepT:0,stepDur:.1,thresh:.15,contact:!1,lenMod:1}}),this.legScale=1,this.buildFace(t),this.ctl={mx:0,mz:0},this.facing=0,this.gaitPhase=0,this.groundTimer=0,this.groundLock=0,this.jumpBuffer=0,this.canDouble=!0,this.flipT=-1,this.spinKill=0,this.inWater=!1,this.wetFrac=0,this.bounceRequest=!1,this.bounceCooldown=0,this.bonkCooldown=0,this.maxImpact=0,this.airTime=0,this.minVy=0,this.tippedT=0,this.rightBoost=0,this.blinkT=2,this.blinkLeft=0,this.happyT=0,this.dizzyT=0,this.stunT=0,this.eatT=0,this.idleT=0,this.sleeping=!1,this.bodyContacts=0,this.legContacts=0,this.wasInWater=!1}setColor(t){this.mat.color.set(t),this.mat.emissive=new Dt(t).multiplyScalar(.16),this.colorHex=t}buildFace(t){const e=new zn({color:"#2b2140"}),n=new zn({color:"#ffffff"}),s=new zn({color:"#ff7fa8",transparent:!0,opacity:.55,depthWrite:!1}),r=new zn({color:"#7a2244"}),o=new Gn(1,16,12),a=new ur(.075,.02,6,14,Math.PI),c=(h,u,d)=>{const f=Math.hypot(h,u,d);h/=f,u/=f,d/=f;let g=0,M=-2;for(let m=0;m<this.RN;m++){const p=this.rDir[m*3]*h+this.rDir[m*3+1]*u+this.rDir[m*3+2]*d;p>M&&(M=p,g=m)}return g};this.face=[];const l=(h,u,d)=>(t.add(h),this.face.push({obj:h,vi:c(...u),lift:d}),h);this.eyes=[];for(const h of[-1,1]){const u=new si,d=new si,f=new ee(o,e);f.scale.set(.115,.15,.05);const g=new ee(o,n);g.scale.setScalar(.042),g.position.set(.035,.06,.045);const M=new ee(o,n);M.scale.setScalar(.02),M.position.set(-.04,-.055,.042),d.add(f,g,M);const m=new ee(a,e);m.position.y=-.03,m.scale.set(1,1.1,.6);const p=new ee(a,e);p.rotation.z=Math.PI,p.position.y=.02,p.scale.set(.9,.7,.6);const v=new ee(a,e);v.rotation.z=-h*Math.PI/2,v.position.x=-h*.02,v.scale.set(.85,1.1,.6),u.add(d,m,p,v),m.visible=p.visible=v.visible=!1,l(u,[h*.31,.1,.95],.01),this.eyes.push({group:u,open:d,happy:m,closed:p,squint:v})}for(const h of[-1,1]){const u=new ee(new fs(.075,20),s);u.scale.set(1.4,.85,1),l(u,[h*.52,-.08,.85],.012)}this.mouth=new si,this.smile=new ee(new ur(.05,.014,6,14,Math.PI),e),this.smile.rotation.z=Math.PI,this.smile.position.y=.03,this.oMouth=new ee(new fs(.055,20),r),this.oMouth.scale.set(.8,1,1),this.oMouth.visible=!1,this.mouth.add(this.smile,this.oMouth),l(this.mouth,[0,-.07,1],.012),this._fx=new D,this._fy=new D,this._fz=new D,this._fm=new qt}spawn(t,e,n){for(let s=0;s<this.N;s++)this.x[s*3]=t+this.rest[s*3],this.x[s*3+1]=e+this.rest[s*3+1],this.x[s*3+2]=n+this.rest[s*3+2],this.v[s*3]=this.v[s*3+1]=this.v[s*3+2]=0;this.qFit.identity(),this.flipT=-1,this.tippedT=0,this.com.set(t,e,n);for(const s of this.legs)s.hipSurf.set(t+s.dir.x,e+s.dir.y,n+s.dir.z),s.foot.set(t+s.dir.x,e+s.dir.y-es,n+s.dir.z),s.footVel.set(0,0,0),s.planted=!1,s.stepping=!1}requestJump(){this.jumpBuffer=.15,this.idleT=0}step(t){var st,L;const e=this.N,n=this.x,s=this.v,r=this.rest,o=this.world;let a=0,c=0,l=0,h=0,u=0,d=0;for(let k=0;k<e*3;k+=3)a+=n[k],c+=n[k+1],l+=n[k+2],h+=s[k],u+=s[k+1],d+=s[k+2];const f=1/e;a*=f,c*=f,l*=f,h*=f,u*=f,d*=f,this.c.set(a,c,l);const g=this.Apq;g.fill(0);for(let k=0;k<e*3;k+=3){const K=n[k]-a,ot=n[k+1]-c,et=n[k+2]-l,Tt=r[k],ut=r[k+1],w=r[k+2];g[0]+=K*Tt,g[1]+=K*ut,g[2]+=K*w,g[3]+=ot*Tt,g[4]+=ot*ut,g[5]+=ot*w,g[6]+=et*Tt,g[7]+=et*ut,g[8]+=et*w}yg(g,this.qFit,4);const M=this.Rf;sa(this.qFit,M);const m=this.A;el(g,this.AqqInv,m);const p=$l(m),v=this.S;if(p>1e-4){const k=1/Math.cbrt(p);for(let K=0;K<9;K++)m[K]*=k;xg(M,m,v)}else v.set([1,0,0,0,1,0,0,0,1]);const x=this.flipT>=0?.05:cg;for(let k=0;k<9;k++)v[k]=v[k]*x+(k%4===0?1-x:0);this.qUsed.copy(this.qFit);const _=M[2],R=M[8];if(_*_+R*R>.04){const k=sl(this.targetYaw-Math.atan2(_,R));this.qYaw.setFromAxisAngle(Sg,k*this.kYaw),this.qUsed.premultiply(this.qYaw)}this.qUsed.slerp(this.qTarget,this.kTilt),sa(this.qUsed,this.Ru);const T=this.G;el(this.Ru,v,T);const A=1+.018*Math.sin(this.time*2.4),C=1/Math.sqrt(A);T[0]*=C,T[3]*=C,T[6]*=C,T[1]*=A,T[4]*=A,T[7]*=A,T[2]*=C,T[5]*=C,T[8]*=C;const E=this.groundTimer>0,y=this.inWater&&!E,P=y?dg:io,z=this.ctl.mx*P,N=this.ctl.mz*P,I=this.ctl.mx*this.ctl.mx+this.ctl.mz*this.ctl.mz>.01;let X=E?this.legScale>.5?9:4:y?4:I?2.4:.25;this.flipT>=0&&(X*=.5);let H=(z-h)*X,$=(N-d)*X;const V=Math.hypot(H,$);V>45&&(H*=45/V,$*=45/V);const nt=ag/t;for(let k=0;k<e*3;k+=3){const K=r[k],ot=r[k+1],et=r[k+2],Tt=a+T[0]*K+T[1]*ot+T[2]*et,ut=c+T[3]*K+T[4]*ot+T[5]*et,w=l+T[6]*K+T[7]*ot+T[8]*et;s[k]+=(Tt-n[k])*nt+H*t,s[k+1]+=(ut-n[k+1])*nt-og*t,s[k+2]+=(w-n[k+2])*nt+$*t}this.legScale=ro((M[4]-.2)/.5,0,1)*(this.stunT>0?.35:1);let ft=0;for(const k of this.legs){let K=0,ot=0,et=0,Tt=0;const ut=k.idx,w=k.w;for(let Y=0;Y<ut.length;Y++){const xt=ut[Y]*3,lt=w[Y];K+=n[xt]*lt,ot+=n[xt+1]*lt,et+=n[xt+2]*lt,Tt+=s[xt+1]*lt}k.hip.set(K,ot,et);const S=o.groundAt(K,et,ot),B=o.groundBouncy,Z=fg*k.lenMod,tt=ot-S;if(k.contact=tt<Z+.12&&this.legScale>.3,k.contact&&ft++,tt<Z&&this.legScale>0){const Y=Math.min(Z-tt,Z);let xt=(hg*Y-ug*Tt)*this.legScale;if(xt>0){xt*=e*.25*t;for(let lt=0;lt<ut.length;lt++)s[ut[lt]*3+1]+=xt*w[lt]}B&&(this.bounceRequest=!0)}}h=u=d=0;let mt=0,Rt=0,Nt=0,J=0;for(let k=0;k<e*3;k+=3){const K=n[k]-a,ot=n[k+1]-c,et=n[k+2]-l;h+=s[k],u+=s[k+1],d+=s[k+2],mt+=ot*s[k+2]-et*s[k+1],Rt+=et*s[k]-K*s[k+2],Nt+=K*s[k+1]-ot*s[k],J+=K*K+ot*ot+et*et}h*=f,u*=f,d*=f;const it=1/(J*(2/3)+1e-6),yt=mt*it,at=Rt*it,Ct=Nt*it;this.omega.set(yt,at,Ct);const It=1-lg*t,Lt=Math.max(0,1-(this.spinKill>0?25:this.angDamp)*t);let Gt=0,j=0;for(let k=0;k<e*3;k+=3){const K=n[k]-a,ot=n[k+1]-c,et=n[k+2]-l,Tt=at*et-Ct*ot,ut=Ct*K-yt*et,w=yt*ot-at*K;s[k]=h+Tt*Lt+(s[k]-h-Tt)*It,s[k+1]=u+ut*Lt+(s[k+1]-u-ut)*It,s[k+2]=d+w*Lt+(s[k+2]-d-w)*It;const S=Di-n[k+1];if(S>0){Gt++,s[k+1]+=gg*Math.min(S*2,1)*t;const B=1-1.3*t;s[k]*=B,s[k+1]*=1-5*t,s[k+2]*=B}n[k]+=s[k]*t,n[k+1]+=s[k+1]*t,n[k+2]+=s[k+2]*t,this.collide(k)&&j++}if(this.wetFrac=Gt/e,this.inWater=this.wetFrac>.12,this.legContacts=ft,this.bodyContacts=j,this.groundLock<=0&&(ft>0||j>4)&&(this.groundTimer=.1),this.bounceRequest&&this.bounceCooldown<=0&&this.groundLock<=0&&this.doBounce(),this.bounceRequest=!1,this.maxImpact>6&&this.bonkCooldown<=0&&this.stunT<=0){this.bonkCooldown=1.2,this.dizzyT=1.6;const k=this.impactN;this.tumble(k.z,0,-k.x,Math.min(11,this.maxImpact*1.15)),this.stunT=Math.min(1.1,.4+this.maxImpact*.06),(L=(st=this.hooks).bonk)==null||L.call(st,this.c.clone(),this.maxImpact)}this.maxImpact=0}collide(t){const e=this.x;this.v;const n=this.world,s=this.nrm;let r=e[t],o=e[t+1],a=e[t+2],c=!1;const h=(n.heightAt(r,a,s)-o)*s.y;h>0&&(r+=s.x*h,o+=s.y*h,a+=s.z*h,this.respond(t,s.x,s.y,s.z,no),c=!0);const u=n.near;for(let d=0;d<u.length;d++){const f=u[d];if(f.type===0){const g=r-f.x,M=o-f.y,m=a-f.z,p=g*g+M*M+m*m;if(p<f.r*f.r&&p>1e-10){const v=Math.sqrt(p),x=g/v,_=M/v,R=m/v;r=f.x+x*f.r,o=f.y+_*f.r,a=f.z+R*f.r,!f.bouncy&&_<.6&&this.impact(t,x,_,R),this.respond(t,x,_,R,no),f.bouncy&&_>.35&&(this.bounceRequest=!0),_>.5&&(c=!0)}}else if(o>f.y0&&o<f.y1){const g=r-f.x,M=a-f.z,m=g*g+M*M;if(m<f.r*f.r&&m>1e-10){const p=Math.sqrt(m),v=g/p,x=M/p;f.y1-o<.25?(o=f.y1,this.respond(t,0,1,0,no),c=!0):(r=f.x+v*f.r,a=f.z+x*f.r,this.impact(t,v,0,x),this.respond(t,v,0,x,.04))}}}return e[t]=r,e[t+1]=o,e[t+2]=a,c}impact(t,e,n,s){const r=this.vel,o=-(r.x*e+r.y*n+r.z*s);o>this.maxImpact&&(this.maxImpact=o,this.impactN.set(e,n,s))}respond(t,e,n,s,r){const o=this.v;let a=o[t]*e+o[t+1]*n+o[t+2]*s;a<0&&(o[t]-=a*e,o[t+1]-=a*n,o[t+2]-=a*s,a=0);const c=o[t]-a*e,l=o[t+1]-a*n,h=o[t+2]-a*s;o[t]=a*e+c*(1-r),o[t+1]=a*n+l*(1-r),o[t+2]=a*s+h*(1-r)}launch(t,e,n){const s=this.N,r=this.x,o=this.v;let a=0;for(let c=1;c<s*3;c+=3)a+=r[c];a/=s;for(let c=0;c<s*3;c+=3)o[c+1]=t+(r[c+1]-a)*e,o[c]+=this.ctl.mx*n,o[c+2]+=this.ctl.mz*n;this.groundTimer=0,this.groundLock=.12,this.jumpBuffer=0}doJump(t){var e,n,s,r;t?(this.launch(pg,2.6,1),this.canDouble=!1,this.flipT=0,(n=(e=this.hooks).doubleJump)==null||n.call(e,this.com)):(this.legScale<.6&&(this.rightBoost=.5),this.launch(this.inWater&&this.legContacts===0?Qc*.9:Qc,3.6,1.2),(r=(s=this.hooks).jump)==null||r.call(s,this.com))}tumble(t,e,n,s){const r=Math.hypot(t,e,n);if(r<1e-6)return;t/=r,e/=r,n/=r;const o=this.N,a=this.x,c=this.v,l=this.com;for(let h=0;h<o*3;h+=3){const u=a[h]-l.x,d=a[h+1]-l.y,f=a[h+2]-l.z;c[h]+=(e*f-n*d)*s,c[h+1]+=(n*u-t*f)*s+1.5,c[h+2]+=(t*d-e*u)*s}this.groundLock=.08}hop(t){const e=this.N,n=this.x,s=this.v;let r=0;for(let c=1;c<e*3;c+=3)r+=n[c];r/=e;const o=Math.sin(this.facing),a=Math.cos(this.facing);for(let c=0;c<e*3;c+=3){const l=n[c+1]-r;s[c+1]+=t-l*1.2;const h=-((n[c]-this.com.x)*o+(n[c+2]-this.com.z)*a);s[c]+=o*h*.8,s[c+2]+=a*h*.8}}doBounce(){var t,e;this.launch(mg,3.2,.5),this.canDouble=!0,this.bounceCooldown=.35,this.happyT=.8,(e=(t=this.hooks).bounce)==null||e.call(t,this.com)}boop(t,e){var c,l;const n=this.N,s=this.x,r=this.v;for(let h=0;h<n*3;h+=3){const u=s[h]-t.x,d=s[h+1]-t.y,f=s[h+2]-t.z,g=Math.sqrt(u*u+d*d+f*f),M=Math.max(0,1-g/1.1);r[h]+=e.x*10*M,r[h+1]+=e.y*10*M+2.5,r[h+2]+=e.z*10*M}const o=e.x,a=e.z;this.tumble(a,0,-o,2.5*Math.max(0,t.y-this.com.y+.3)),this.stunT=Math.max(this.stunT,.25),this.happyT=1,this.idleT=0,(l=(c=this.hooks).boop)==null||l.call(c,t)}eat(){const t=this.N,e=this.x,n=this.v,s=this.com;for(let r=0;r<t*3;r+=3)n[r]-=(e[r]-s.x)*2.2,n[r+1]-=(e[r+1]-s.y)*2.2-1.5,n[r+2]-=(e[r+2]-s.z)*2.2;this.eatT=.75,this.happyT=1.1,this.idleT=0}update(t){var y,P,z,N;this.time+=t;const e=this.N,n=this.x,s=this.v;let r=0,o=0,a=0,c=0,l=0,h=0;for(let I=0;I<e*3;I+=3)r+=n[I],o+=n[I+1],a+=n[I+2],c+=s[I],l+=s[I+1],h+=s[I+2];if(!Number.isFinite(r)){this.spawn(0,this.world.heightAt(0,0)+4,0);return}this.com.set(r/e,o/e,a/e),this.vel.set(c/e,l/e,h/e),this.groundTimer-=t,this.groundLock-=t,this.bounceCooldown-=t,this.bonkCooldown-=t,this.jumpBuffer-=t,this.happyT-=t,this.dizzyT-=t,this.eatT-=t,this.spinKill-=t,this.stunT-=t,this.rightBoost-=t;const u=this.groundTimer>0;u&&(this.canDouble=!0),this.jumpBuffer>0&&(u||this.inWater&&this.com.y<Di+.9?this.doJump(!1):this.canDouble&&this.airTime>.06&&this.doJump(!0));const d=!u&&!this.inWater;d?(this.airTime+=t,this.minVy=Math.min(this.minVy,this.vel.y)):(this.airTime>.15&&this.minVy<-5&&u&&((P=(y=this.hooks).land)==null||P.call(y,new D(this.com.x,this.com.y-1.1,this.com.z),-this.minVy)),this.airTime=0,this.minVy=0),this.inWater&&!this.wasInWater&&this.vel.y<-2&&((N=(z=this.hooks).splash)==null||N.call(z,new D(this.com.x,Di,this.com.z),-this.vel.y)),this.wasInWater=this.inWater;const f=this.ctl.mx,g=this.ctl.mz,M=Math.hypot(f,g);let m=0;if(M>.08){const I=this.facing;this.facing+=sl(Math.atan2(f,g)-this.facing)*(1-Math.exp(-9*t)),m=(this.facing-I)/Math.max(t,.001),this.idleT=0}else this.idleT+=t;const p=Math.hypot(this.vel.x,this.vel.z),v=Math.min(1,p/io),x=this.legScale>.6,_=Math.floor(this.gaitPhase/(Math.PI*2));this.gaitPhase+=t*Math.PI*2*(1+1.5*v),u&&x&&v>.35&&this.flipT<0&&Math.floor(this.gaitPhase/(Math.PI*2))!==_&&Math.random()<.75&&this.hop(2.2+Math.random()*2.4*v);for(const I of this.legs)I.lenMod=u?1+.3*v*Math.sin(this.gaitPhase+I.phase):1;let R=0;if(this.flipT>=0)if(this.flipT+=t/.5,this.flipT>=1)this.flipT=-1,this.spinKill=.12;else{const I=this.flipT;R=I*I*(3-2*I)*Math.PI*2}u&&this.legScale<.5?this.tippedT+=t:this.tippedT=Math.max(0,this.tippedT-t*2),this.flipT>=0?(this.kTilt=.35,this.kYaw=0,this.angDamp=1):this.stunT>0?(this.kTilt=.002,this.kYaw=0,this.angDamp=.6):this.rightBoost>0?(this.kTilt=.12,this.kYaw=.05,this.angDamp=3):d?(this.kTilt=.004,this.kYaw=.015,this.angDamp=.25):this.inWater&&!u?(this.kTilt=.03,this.kYaw=.05,this.angDamp=2.5):(this.kTilt=.035+ro(this.tippedT-.6,0,1)*.11,this.kYaw=x?.08:.02,this.angDamp=2);const T=this.facing+Math.sin(this.gaitPhase*.5)*.14*v;this.targetYaw=T;const A=v*.16*(u?1:.5),C=Math.sin(this.gaitPhase)*.11*v+ro(-m*.05,-.3,.3),E=this.tippedT>.3?Math.sin(this.time*14)*.35:0;this.qTarget.setFromEuler(new Ue(A+R,T,C+E,"YXZ")),this.sleeping=this.idleT>14&&u&&x,this.updateRender(),this.updateLegs(t),this.shapeLegs(),this.rgeo.computeVertexNormals(),this.updateFace(t)}updateRender(){const t=this.N,e=this.x,n=this.rest,s=this.G,r=this.D,o=this.c.x,a=this.c.y,c=this.c.z;for(let g=0;g<t*3;g+=3){const M=n[g],m=n[g+1],p=n[g+2];r[g]=e[g]-(o+s[0]*M+s[1]*m+s[2]*p),r[g+1]=e[g+1]-(a+s[3]*M+s[4]*m+s[5]*p),r[g+2]=e[g+2]-(c+s[6]*M+s[7]*m+s[8]*p)}const l=this.rgeo.attributes.position.array,h=this.rDir,u=this.K,d=this.rIdx,f=this.rW;for(let g=0,M=0;g<this.RN;g++,M+=3){const m=h[M],p=h[M+1],v=h[M+2];let x=o+s[0]*m+s[1]*p+s[2]*v,_=a+s[3]*m+s[4]*p+s[5]*v,R=c+s[6]*m+s[7]*p+s[8]*v;for(let T=0;T<u;T++){const A=d[g*u+T]*3,C=f[g*u+T];x+=r[A]*C,_+=r[A+1]*C,R+=r[A+2]*C}l[M]=x,l[M+1]=_,l[M+2]=R}for(const g of this.legs){const M=g.hipVi*3;g.hipSurf.set(l[M],l[M+1],l[M+2])}this.rgeo.attributes.position.needsUpdate=!0}updateLegs(t){var f,g,M,m;const e=this.world,n=this.Rf,s=-n[1],r=-n[4],o=-n[7],a=Math.sin(this.facing),c=Math.cos(this.facing),l=Math.cos(this.facing),h=-Math.sin(this.facing),u=this.time,d=this.groundTimer>0;for(const p of this.legs){const v=p.hipSurf,x=p.dir,_=n[0]*x.x+n[1]*x.y+n[2]*x.z+s,R=n[3]*x.x+n[4]*x.y+n[5]*x.z+r,T=n[6]*x.x+n[7]*x.y+n[8]*x.z+o,A=Math.hypot(_,R,T)||1;p.n0.set(_/A,R/A,T/A);const C=p.n0.x*.18,E=p.n0.z*.18,y=v.x+C,P=v.z+E,z=e.groundAt(y,P,v.y),N=v.y-z<es+yn+.3&&(d||this.airTime<.05),I=p.foot,X=Math.hypot(this.vel.x,this.vel.z);if(N&&X>1.8){p.planted=!1,p.stepping=!1;const V=Math.sin(p.scurry+p.phase)>0;p.scurry+=t*(9+X*2.6);const nt=p.scurry+p.phase,ft=this.vel.x/X,mt=this.vel.z/X,Rt=-Math.cos(nt)*.13,Nt=Math.max(0,Math.sin(nt))*.13,J=y+ft*Rt,it=P+mt*Rt;I.set(J,e.groundAt(J,it,v.y)+yn+Nt,it),V&&Math.sin(nt)<=0&&((g=(f=this.hooks).step)==null||g.call(f,I)),p.footVel.set(0,0,0)}else if(N){if(!p.planted&&!p.stepping&&(p.planted=!0,I.set(y,z+yn,P)),p.stepping){p.stepT+=t/p.stepDur;const V=Math.min(1,p.stepT);p.to.set(y+this.vel.x*.04,0,P+this.vel.z*.04),p.to.y=e.groundAt(p.to.x,p.to.z,v.y)+yn,I.lerpVectors(p.from,p.to,V),I.y+=Math.sin(Math.PI*V)*(.12+.08*Math.min(1,this.vel.length()/io)),p.stepT>=1&&(p.stepping=!1,p.planted=!0)}else{const V=I.x-y,nt=I.z-P;(V*V+nt*nt>p.thresh*p.thresh||I.distanceTo(v)>.55||this.legBent(p,I))&&(p.stepping=!0,p.planted=!1,p.stepT=0,p.stepDur=.07+Math.random()*.05,p.thresh=.07+Math.random()*.2,p.from.copy(I),(m=(M=this.hooks).step)==null||m.call(M,I))}p.footVel.set(0,0,0)}else{p.planted=!1,p.stepping=!1;const V=p.phase*3.1;let nt=v.x+s*es+C,ft=v.y+r*es,mt=v.z+o*es+E;if(this.inWater){const Nt=u*13+V;nt+=a*Math.sin(Nt)*.14,mt+=c*Math.sin(Nt)*.14,ft+=Math.cos(Nt)*.08}else{const Nt=u*20+V;nt+=l*Math.sin(Nt)*.07+a*Math.cos(Nt*.7)*.06,mt+=h*Math.sin(Nt)*.07+c*Math.cos(Nt*.7)*.06,ft+=Math.sin(Nt*1.3)*.04}const Rt=p.footVel;Rt.x+=((nt-I.x)*220-Rt.x*11)*t,Rt.y+=((ft-I.y)*220-Rt.y*11)*t,Rt.z+=((mt-I.z)*220-Rt.z*11)*t,I.addScaledVector(Rt,t)}const H=I.distanceTo(v);H>.6&&I.sub(v).multiplyScalar(.6/H).add(v);const $=e.groundAt(I.x,I.z,I.y+.3)+yn*.8;I.y<$&&(I.y=$)}}legBent(t,e){const n=t.hipSurf,s=t.n0,r=e.x-n.x,o=e.y-n.y,a=e.z-n.z,c=Math.hypot(r,o,a);return c>1e-4&&(r*s.x+o*s.y+a*s.z)/c<ns}shapeLegs(){const t=this.rgeo.attributes.position.array,e=this.Rf,n=-e[1],s=-e[4],r=-e[7];for(const o of this.legs){const a=o.hipSurf;let c=o.foot.x,l=o.foot.y,h=o.foot.z;{const x=o.n0;let _=c-a.x,R=l-a.y,T=h-a.z;const A=Math.hypot(_,R,T);if(A>1e-4){_/=A,R/=A,T/=A;const C=_*x.x+R*x.y+T*x.z;if(C<ns){let E=_-x.x*C,y=R-x.y*C,P=T-x.z*C;const z=Math.hypot(E,y,P);z>1e-6?(E/=z,y/=z,P/=z):E=y=P=0,c=a.x+(x.x*ns+E*so)*A,l=a.y+(x.y*ns+y*so)*A,h=a.z+(x.z*ns+P*so)*A}}}const u=(c-a.x)*n+(l-a.y)*s+(h-a.z)*r;if(u<.08){const x=.08-u;c+=n*x,l+=s*x,h+=r*x}let d=c-a.x,f=l-a.y,g=h-a.z;const M=Math.hypot(d,f,g);d/=M,f/=M,g/=M;const m=o.vIdx,p=o.vTh,v=o.vT;for(let x=0;x<m.length;x++){const _=m[x]*3,R=v[x*3],T=v[x*3+1],A=v[x*3+2];let C=e[0]*R+e[1]*T+e[2]*A,E=e[3]*R+e[4]*T+e[5]*A,y=e[6]*R+e[7]*T+e[8]*A;const P=C*d+E*f+y*g;C-=d*P,E-=f*P,y-=g*P;const z=Math.hypot(C,E,y)||1;C/=z,E/=z,y/=z;const N=p[x];if(N<=Js){const I=N/Js*Math.PI*.5,X=Math.cos(I),H=Math.sin(I);t[_]=c+yn*(X*d+H*C),t[_+1]=l+yn*(X*f+H*E),t[_+2]=h+yn*(X*g+H*y)}else{const I=(N-Js)/(tl-Js),X=I*I*(3-2*I),H=yn*1.05,$=c+H*C-d*.04,V=l+H*E-f*.04,nt=h+H*y-g*.04;t[_]=$+(t[_]-$)*X,t[_+1]=V+(t[_+1]-V)*X,t[_+2]=nt+(t[_+2]-nt)*X}}}}updateFace(t){const e=this.rgeo.attributes.position.array,n=this.rgeo.attributes.normal.array,s=this.Rf,r=s[1],o=s[4],a=s[7],c=this._fx,l=this._fy,h=this._fz;for(const x of this.face){const _=x.vi*3;h.set(n[_],n[_+1],n[_+2]).normalize(),c.set(o*h.z-a*h.y,a*h.x-r*h.z,r*h.y-o*h.x),c.lengthSq()<1e-6&&c.set(1,0,0),c.normalize(),l.crossVectors(h,c),this._fm.makeBasis(c,l,h),x.obj.quaternion.setFromRotationMatrix(this._fm),x.obj.position.set(e[_]+h.x*x.lift,e[_+1]+h.y*x.lift,e[_+2]+h.z*x.lift)}this.blinkT-=t,this.blinkT<0&&(this.blinkLeft=.13,this.blinkT=1.8+Math.random()*3.5),this.blinkLeft-=t;const u=this.blinkLeft>0,d=this.groundTimer<=0&&!this.inWater,f=this.omega.length()>5&&this.flipT<0,g=this.dizzyT>0||f||this.tippedT>.2,M=this.eatT>0,m=(this.happyT>0||M)&&!g,p=this.sleeping;for(const x of this.eyes){x.open.visible=!m&&!p&&!g,x.happy.visible=m&&!p,x.closed.visible=p&&!g,x.squint.visible=g;const _=u?.12:1;x.open.scale.y+=(_-x.open.scale.y)*Math.min(1,t*40)}let v=0;M?v=Math.sin(this.eatT*30)>0?1.1:0:(d&&(this.vel.y<-9||this.flipT>=0)||this.bounceCooldown>.1||g)&&(v=g?.7:1),this.smile.visible=v===0,this.oMouth.visible=v>0,v>0&&this.oMouth.scale.set(.8*v,v,1)}}const Tg=260,bg=40;function Ag(){const i=new ba;i.moveTo(0,-.5),i.bezierCurveTo(-.1,-.35,-.6,-.1,-.55,.2),i.bezierCurveTo(-.5,.5,-.1,.55,0,.25),i.bezierCurveTo(.1,.55,.5,.5,.55,.2),i.bezierCurveTo(.6,-.1,.1,-.35,0,-.5);const t=new gr(i,{depth:.15,bevelEnabled:!0,bevelSize:.06,bevelThickness:.06,bevelSegments:2,curveSegments:8});return t.center(),t}class rl{constructor(t,e,n,s){this.mesh=new Bl(e,n,s),this.mesh.frustumCulled=!1,this.mesh.instanceMatrix.setUsage(yl);const r=new Dt(1,1,1);for(let o=0;o<s;o++)this.mesh.setColorAt(o,r);t.add(this.mesh),this.items=[];for(let o=0;o<s;o++)this.items.push({life:0,max:1,pos:new D,vel:new D,size:1,grav:0,drag:0,grow:!1,spin:0,rot:0});this.cursor=0,this.max=s,this.m=new qt,this.q=new ze,this.s=new D,this.e=new Ue}spawn(t,e,n,s,r,o=0,a=0,c=!1,l=0){const h=this.cursor;this.cursor=(this.cursor+1)%this.max;const u=this.items[h];u.life=r,u.max=r,u.pos.copy(t),u.vel.copy(e),u.size=s,u.grav=o,u.drag=a,u.grow=c,u.spin=l,u.rot=Math.random()*6,this.mesh.setColorAt(h,n),this.mesh.instanceColor.needsUpdate=!0}dizzyStars(t){for(let e=0;e<6;e++){const n=e/6*Math.PI*2;this._v.set(Math.cos(n)*2.2,1.2,Math.sin(n)*2.2),this.dots.spawn(t,this._v,this._c.setHSL(.14,1,.65),.11,.9,1,1.5,!1,6)}}update(t,e){for(let n=0;n<this.max;n++){const s=this.items[n];let r=0;if(s.life>0){s.life-=t,s.vel.y-=s.grav*t,s.vel.multiplyScalar(1-s.drag*t),s.pos.addScaledVector(s.vel,t),s.rot+=s.spin*t;const o=1-s.life/s.max;r=s.grow?s.size*Math.sin(Math.PI*Math.min(1,o*1.2)):s.size*(1-o*o),s.life<=0&&(r=0)}e&&this.billboard?(this.q.copy(e.quaternion),this.q.multiply(new ze().setFromEuler(this.e.set(0,0,Math.sin(s.rot)*.4)))):this.q.setFromEuler(this.e.set(s.rot,s.rot*.7,0)),this.m.compose(s.pos,this.q,this.s.setScalar(Math.max(r,0))),this.mesh.setMatrixAt(n,this.m)}this.mesh.instanceMatrix.needsUpdate=!0}}class wg{constructor(t){this.dots=new rl(t,new Vn(1,1),new zn({color:16777215}),Tg),this.hearts=new rl(t,Ag(),new zn({color:16777215}),bg),this.hearts.billboard=!0,this._v=new D,this._p=new D,this._c=new Dt}dust(t,e=1){const n=Math.round(6+e*8);for(let s=0;s<n;s++){const r=s/n*Math.PI*2+Math.random()*.4,o=2+Math.random()*2.5*e;this._v.set(Math.cos(r)*o,.6+Math.random()*1.2,Math.sin(r)*o),this._p.set(t.x+Math.cos(r)*.6,t.y+.1,t.z+Math.sin(r)*.6),this.dots.spawn(this._p,this._v,this._c.setHSL(.11,.3,.92),.12+Math.random()*.12*e,.5+Math.random()*.3,-1,3.5,!0)}}puff(t){this._v.set((Math.random()-.5)*.8,.5+Math.random()*.5,(Math.random()-.5)*.8),this.dots.spawn(t,this._v,this._c.setHSL(.11,.25,.9),.07+Math.random()*.05,.35,0,3,!0)}sparkle(t,e=18,n=.13){for(let s=0;s<e;s++)this._v.set(Math.random()-.5,Math.random()-.3,Math.random()-.5).normalize().multiplyScalar(3+Math.random()*4),this.dots.spawn(t,this._v,this._c.setHSL(n+(Math.random()-.5)*.08,1,.65+Math.random()*.2),.07+Math.random()*.07,.6+Math.random()*.4,6,2.5,!1,8)}ring(t,e){for(let s=0;s<16;s++){const r=s/16*Math.PI*2;this._v.set(Math.cos(r)*5,-1,Math.sin(r)*5),this.dots.spawn(t,this._v,this._c.set(e).lerp(new Dt(1,1,1),.5),.1,.45,0,4,!0)}}splash(t,e=1){const n=Math.round(10+e*14);for(let s=0;s<n;s++){const r=Math.random()*Math.PI*2,o=1+Math.random()*3;this._v.set(Math.cos(r)*o,3+Math.random()*4*e,Math.sin(r)*o),this._p.set(t.x+Math.cos(r)*.7,t.y,t.z+Math.sin(r)*.7),this.dots.spawn(this._p,this._v,this._c.setHSL(.55,.8,.8+Math.random()*.15),.08+Math.random()*.1,.8,18,.5,!1)}}heartBurst(t,e=4){for(let n=0;n<e;n++)this._v.set((Math.random()-.5)*2.5,2.5+Math.random()*2,(Math.random()-.5)*2.5),this._p.copy(t).add(this._v.clone().multiplyScalar(.1)),this.hearts.spawn(this._p,this._v,this._c.setHSL(.94+Math.random()*.05,.95,.72),.32+Math.random()*.15,1.1,1.5,1.8,!0,3)}dizzyStars(t){for(let e=0;e<6;e++){const n=e/6*Math.PI*2;this._v.set(Math.cos(n)*2.2,1.2,Math.sin(n)*2.2),this.dots.spawn(t,this._v,this._c.setHSL(.14,1,.65),.11,.9,1,1.5,!1,6)}}update(t,e){this.dots.update(t),this.hearts.update(t,e)}}class Rg{constructor(){this.ctx=null,this.master=null,this.muted=!1,this.lastStep=0}unlock(){if(!this.ctx){const t=window.AudioContext||window.webkitAudioContext;if(!t)return;const e=this.ctx=new t;this.master=e.createGain(),this.master.gain.value=this.muted?0:.5;const n=e.createDynamicsCompressor();this.master.connect(n).connect(e.destination);const s=e.sampleRate;this.noiseBuf=e.createBuffer(1,s,e.sampleRate);const r=this.noiseBuf.getChannelData(0);for(let o=0;o<s;o++)r[o]=Math.random()*2-1}this.ctx.state==="suspended"&&this.ctx.resume()}setMuted(t){this.muted=t,this.master&&(this.master.gain.value=t?0:.5)}get ok(){return this.ctx&&!this.muted}osc(t,e,n,s,r,o){const a=this.ctx,c=a.createOscillator(),l=a.createGain();return c.type=t,c.frequency.setValueAtTime(e,s),c.frequency.exponentialRampToValueAtTime(n,s+r),l.gain.setValueAtTime(1e-4,s),l.gain.exponentialRampToValueAtTime(o,s+.012),l.gain.exponentialRampToValueAtTime(1e-4,s+r),c.connect(l).connect(this.master),c.start(s),c.stop(s+r+.03),c}noise(t,e,n,s,r,o=1){const a=this.ctx,c=a.createBufferSource();c.buffer=this.noiseBuf;const l=a.createBiquadFilter();l.type=s,l.frequency.value=r,l.Q.value=o;const h=a.createGain();h.gain.setValueAtTime(n,t),h.gain.exponentialRampToValueAtTime(1e-4,t+e),c.connect(l).connect(h).connect(this.master),c.start(t,Math.random()*.5),c.stop(t+e+.02)}jump(){if(!this.ok)return;const t=this.ctx.currentTime;this.osc("sine",240,640,t,.17,.35),this.osc("triangle",480,1250,t,.1,.06)}doubleJump(){if(!this.ok)return;const t=this.ctx.currentTime;this.osc("sine",420,980,t,.13,.3),this.osc("sine",700,1600,t+.07,.14,.2);for(let e=0;e<3;e++)this.osc("triangle",1800+e*400,2400+e*400,t+.12+e*.04,.06,.05)}land(t){if(!this.ok)return;const e=this.ctx.currentTime,n=Math.min(1,t/18);this.noise(e,.14,.08+.25*n,"lowpass",500),this.osc("sine",200,70,e,.16,.15+.35*n),this.osc("sine",420,160,e+.03,.1,.1*n)}boing(){if(!this.ok)return;const t=this.ctx,e=t.currentTime,n=this.osc("sine",140,560,e,.5,.4),s=t.createOscillator(),r=t.createGain();s.frequency.value=16,r.gain.value=50,s.connect(r).connect(n.frequency),s.start(e),s.stop(e+.55)}collect(){if(!this.ok)return;const t=this.ctx.currentTime;[880,1109,1319,1760].forEach((e,n)=>this.osc("triangle",e,e*1.01,t+n*.06,.22,.16))}splash(t=1){if(!this.ok)return;const e=this.ctx.currentTime;this.noise(e,.4,.15+.15*Math.min(1,t/12),"bandpass",900,.6);for(let n=0;n<4;n++){const s=400+Math.random()*500;this.osc("sine",s,s*1.8,e+.05+Math.random()*.25,.06,.08)}}boop(){if(!this.ok)return;const t=this.ctx.currentTime;this.osc("sine",650,1350,t,.09,.3),this.osc("sine",1350,850,t+.09,.12,.25)}pop(){if(!this.ok)return;const t=this.ctx.currentTime;this.osc("sine",500,1100,t,.07,.15)}nom(){if(!this.ok)return;const t=this.ctx.currentTime;for(let e=0;e<3;e++){const n=t+e*.11;this.noise(n,.05,.12,"lowpass",1400),this.osc("sine",380-e*30,200,n,.06,.2)}this.osc("triangle",520,700,t+.36,.22,.09)}bonk(t=8){if(!this.ok)return;const e=this.ctx.currentTime,n=Math.min(1,t/14);this.osc("triangle",520,160,e,.18,.2+.2*n),this.noise(e,.08,.1+.15*n,"lowpass",700);for(let s=0;s<3;s++)this.osc("sine",1400+s*300,1500+s*300,e+.12+s*.07,.08,.05)}step(){if(!this.ok)return;const t=this.ctx.currentTime;t-this.lastStep<.06||(this.lastStep=t,this.noise(t,.035,.05,"lowpass",900+Math.random()*900),this.osc("sine",320+Math.random()*160,160,t,.04,.05))}}class Cg{constructor(t,{joyEl:e,knobEl:n,jumpBtn:s}){this.keys=new Set,this.joy={id:null,ox:0,oy:0,x:0,y:0},this.drag={id:null,lx:0,ly:0,sx:0,sy:0,t:0,moved:!1},this.camDX=0,this.camDY=0,this.zoom=0,this.jumpQueued=!1,this.taps=[],this.pinch=null,this.touches=new Map,this.joyEl=e,this.knobEl=n,this.enabled=!0;const r=56;window.addEventListener("keydown",l=>{(l.code==="Space"||l.code.startsWith("Arrow"))&&l.preventDefault(),!l.repeat&&(l.code==="Space"||l.code==="KeyJ")&&(this.jumpQueued=!0),this.keys.add(l.code)}),window.addEventListener("keyup",l=>this.keys.delete(l.code)),window.addEventListener("blur",()=>this.keys.clear()),t.addEventListener("pointerdown",l=>{l.preventDefault(),this.touches.set(l.pointerId,{x:l.clientX,y:l.clientY});const h=l.pointerType==="touch";if(h&&l.clientX<window.innerWidth*.45&&this.joy.id===null)this.joy.id=l.pointerId,this.joy.ox=l.clientX,this.joy.oy=l.clientY,this.joy.x=this.joy.y=0,e.style.left=`${l.clientX}px`,e.style.top=`${l.clientY}px`,e.classList.add("on"),n.style.transform="translate(-50%, -50%)";else if(this.drag.id===null)this.drag={id:l.pointerId,lx:l.clientX,ly:l.clientY,sx:l.clientX,sy:l.clientY,t:performance.now(),moved:!1};else if(h){const u=this.touches.get(this.drag.id);u&&(this.pinch={id:l.pointerId,d:Math.hypot(u.x-l.clientX,u.y-l.clientY)})}try{t.setPointerCapture(l.pointerId)}catch{}}),t.addEventListener("pointermove",l=>{if(this.touches.set(l.pointerId,{x:l.clientX,y:l.clientY}),l.pointerId===this.joy.id){let h=l.clientX-this.joy.ox,u=l.clientY-this.joy.oy;const d=Math.hypot(h,u);d>r&&(h*=r/d,u*=r/d),this.joy.x=h/r,this.joy.y=u/r,n.style.transform=`translate(calc(-50% + ${h}px), calc(-50% + ${u}px))`}else if(this.pinch&&(l.pointerId===this.pinch.id||l.pointerId===this.drag.id)){const h=this.touches.get(this.drag.id),u=this.touches.get(this.pinch.id);if(h&&u){const d=Math.hypot(h.x-u.x,h.y-u.y);this.zoom+=(this.pinch.d-d)*2.5,this.pinch.d=d}l.pointerId===this.drag.id&&(this.drag.lx=l.clientX,this.drag.ly=l.clientY,this.drag.moved=!0)}else l.pointerId===this.drag.id&&(this.camDX+=l.clientX-this.drag.lx,this.camDY+=l.clientY-this.drag.ly,this.drag.lx=l.clientX,this.drag.ly=l.clientY,Math.hypot(l.clientX-this.drag.sx,l.clientY-this.drag.sy)>8&&(this.drag.moved=!0))});const o=l=>{this.touches.delete(l.pointerId),l.pointerId===this.joy.id?(this.joy.id=null,this.joy.x=this.joy.y=0,e.classList.remove("on")):l.pointerId===this.drag.id?(!this.drag.moved&&performance.now()-this.drag.t<350&&l.type==="pointerup"&&this.taps.push({x:l.clientX,y:l.clientY}),this.drag.id=null,this.pinch=null):this.pinch&&l.pointerId===this.pinch.id&&(this.pinch=null)};t.addEventListener("pointerup",o),t.addEventListener("pointercancel",o),t.addEventListener("wheel",l=>{l.preventDefault(),this.zoom+=l.deltaY},{passive:!1}),t.addEventListener("contextmenu",l=>l.preventDefault());const a=l=>{l.preventDefault(),this.jumpQueued=!0,s.classList.add("down")},c=()=>s.classList.remove("down");s.addEventListener("pointerdown",a),s.addEventListener("pointerup",c),s.addEventListener("pointercancel",c),s.addEventListener("pointerleave",c)}move(){const t=this.keys;let e=(t.has("KeyD")||t.has("ArrowRight")?1:0)-(t.has("KeyA")||t.has("ArrowLeft")?1:0),n=(t.has("KeyW")||t.has("ArrowUp")?1:0)-(t.has("KeyS")||t.has("ArrowDown")?1:0);e+=this.joy.x,n-=this.joy.y;const s=Math.hypot(e,n);return s>1&&(e/=s,n/=s),s<.12&&(e=0,n=0),{x:e,y:n}}camKeys(){const t=this.keys;return(t.has("KeyE")?1:0)-(t.has("KeyQ")?1:0)}}const _e=i=>document.getElementById(i),ys=matchMedia("(pointer: coarse)").matches||"ontouchstart"in window;document.body.classList.toggle("touch",ys);const sn=new c0({antialias:!ys||devicePixelRatio<2,powerPreference:"high-performance"});sn.setPixelRatio(Math.min(devicePixelRatio,ys?1.75:2));sn.setSize(innerWidth,innerHeight);sn.shadowMap.enabled=!0;sn.shadowMap.type=cl;sn.toneMapping=ll;sn.toneMappingExposure=1.05;_e("app").appendChild(sn.domElement);const Je=new l0,jl=ys?2:3,Ra=new Dt("#d6efff");Je.background=Ra.clone();Je.fog=new Ma(Ra,45,jl*Jt*.95);const ge=new Ze(55,innerWidth/innerHeight,.1,900),Ql=new D(.45,.75,.35).normalize(),Ca=new ee(new Gn(600,32,16),new wn({side:Le,depthWrite:!1,fog:!1,uniforms:{top:{value:new Dt("#62b4ff")},horizon:{value:Ra.clone()},sunDir:{value:Ql}},vertexShader:`
      varying vec3 vDir;
      void main() {
        vDir = normalize(position);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,fragmentShader:`
      uniform vec3 top; uniform vec3 horizon; uniform vec3 sunDir;
      varying vec3 vDir;
      void main() {
        vec3 d = normalize(vDir);
        vec3 c = mix(horizon, top, smoothstep(-0.02, 0.55, d.y));
        float s = max(dot(d, sunDir), 0.0);
        c += vec3(1.0, 0.95, 0.8) * (pow(s, 300.0) * 1.2 + pow(s, 12.0) * 0.15);
        gl_FragColor = vec4(c, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`}));Ca.renderOrder=-1;Je.add(Ca);Je.add(new X0("#cfe8ff","#7fa36a",1.25));const Rn=new Z0("#fff4e0",2.1);Rn.castShadow=!0;Rn.shadow.mapSize.setScalar(ys?1024:2048);const Xi=Rn.shadow.camera;Xi.left=-22;Xi.right=22;Xi.top=22;Xi.bottom=-22;Xi.near=1;Xi.far=140;Rn.shadow.bias=-4e-4;Rn.shadow.normalBias=.04;Je.add(Rn,Rn.target);const Ie=new rg(Je,{viewRadius:jl}),Oe=new wg(Je),Re=new Rg,Pa=(i,t)=>{try{return localStorage.getItem(i)??t}catch{return t}},La=(i,t)=>{try{localStorage.setItem(i,t)}catch{}};let Qt;const Pg={jump:i=>{Re.jump(),Oe.dust(new D(i.x,i.y-1.2,i.z),.4)},doubleJump:i=>{Re.doubleJump(),Oe.ring(i,Qt.colorHex),Oe.sparkle(i,10,.75)},land:(i,t)=>{Re.land(t),Oe.dust(i,Math.min(1.6,t/12)),t>14&&(ei=Math.min(.35,t*.012))},bounce:i=>{Re.boing(),Oe.sparkle(new D(i.x,i.y-1,i.z),16,.95)},splash:(i,t)=>{Re.splash(t),Oe.splash(i,Math.min(1.6,t/7))},boop:i=>{Re.boop(),Oe.heartBurst(i,4)},step:i=>{Re.step(),Math.random()<.25&&Oe.puff(i)},bonk:(i,t)=>{Re.bonk(t),Oe.dizzyStars(new D(i.x,i.y+1.2,i.z)),ei=Math.min(.3,t*.02)}};Ie.primeAround(new D(0,0,0));let ra=Pa("globby.color",xr[0]);ra==="#b8a2ff"&&(ra=xr[0]);Qt=new Eg(Je,Ie,Pg,ra);Qt.spawn(0,Ie.heightAt(0,0)+3.5,0);const th=_e("starCount");th.textContent=Ie.collected.size;const eh=_e("berryCount");let rr=Number(Pa("globby.berries","0"))||0;eh.textContent=rr;const or=[];Ie.onEat=(i,t)=>{const e=new ee(Ie.berryGeo,Ie.berryMat);e.position.copy(i),e.scale.setScalar(t.s),Je.add(e),or.push({m:e,from:i.clone(),t:0,s:t.s}),Re.pop()};function Lg(i){for(let t=or.length-1;t>=0;t--){const e=or[t];e.t+=i/.22;const n=Math.min(1,e.t);if(e.m.position.lerpVectors(e.from,Qt.mouth.position,n*n),e.m.position.y+=Math.sin(Math.PI*n)*.5,e.m.scale.setScalar(e.s*(1-.7*n)),e.m.rotation.y+=i*12,e.t>=1){Je.remove(e.m),or.splice(t,1),Qt.eat(),Re.nom(),Oe.heartBurst(Qt.com.clone().add(new D(0,1,0)),2),Oe.sparkle(Qt.mouth.position,8,.97),rr++,eh.textContent=rr,La("globby.berries",String(rr));const s=_e("berries");s.classList.remove("pop"),s.offsetWidth,s.classList.add("pop")}}}Ie.onCollect=i=>{Re.collect(),Oe.sparkle(i,26,.13),Qt.happyT=.9,th.textContent=Ie.collected.size;const t=_e("stars");t.classList.remove("pop"),t.offsetWidth,t.classList.add("pop")};const Ge=new Cg(sn.domElement,{joyEl:_e("joy"),knobEl:_e("knob"),jumpBtn:_e("jumpBtn")});let ri=!1;_e("startBtn").addEventListener("click",()=>{Re.unlock(),ri=!0,document.body.classList.add("playing"),_e("title").classList.add("hide")});const oa=_e("palette");for(const i of xr){const t=document.createElement("button");t.className="swatch",t.style.background=i,t.setAttribute("aria-label",`Colour ${i}`),t.addEventListener("click",()=>{Qt.setColor(i),La("globby.color",i),oa.classList.remove("open"),Oe.heartBurst(Qt.com.clone().add(new D(0,1,0)),3),Re.boop()}),oa.appendChild(t)}_e("colorBtn").addEventListener("click",()=>oa.classList.toggle("open"));const nh=_e("muteBtn"),ih=i=>{Re.setMuted(i),nh.textContent=i?"🔇":"🔊",La("globby.muted",i?"1":"0")};ih(Pa("globby.muted","0")==="1");nh.addEventListener("click",()=>{Re.unlock(),ih(!Re.muted)});_e("helpBtn").addEventListener("click",()=>_e("help").classList.toggle("open"));_e("help").addEventListener("click",()=>_e("help").classList.remove("open"));_e("respawnBtn").addEventListener("click",()=>{Qt.spawn(0,Ie.heightAt(0,0)+4,0),He.set(0,Ie.heightAt(0,0)+2,0)});const Ee={yaw:0,pitch:.38,dist:8},He=Qt.com.clone();let ei=0,oo=-1.6;const ol=new K0,ao=_e("zzz"),ar=new D;function Dg(i){ri||(Ee.yaw+=i*.12),Ee.yaw-=Ge.camDX*.0065+Ge.camKeys()*i*2.2,Ee.pitch+=Ge.camDY*.005,Ge.camDX=Ge.camDY=0,Ee.pitch=Math.max(-.15,Math.min(1.25,Ee.pitch)),Ee.dist=Math.max(4,Math.min(18,Ee.dist*Math.exp(Ge.zoom*.0012))),Ge.zoom=0;const t=1-Math.exp(-9*i),e=1-Math.exp(-4.5*i);He.x+=(Qt.com.x-He.x)*t,He.z+=(Qt.com.z-He.z)*t,He.y+=(Qt.com.y+.6-He.y)*e;const n=Math.cos(Ee.pitch);ge.position.set(He.x+Math.sin(Ee.yaw)*n*Ee.dist,He.y+Math.sin(Ee.pitch)*Ee.dist,He.z+Math.cos(Ee.yaw)*n*Ee.dist);const s=Math.max(Ie.heightAt(ge.position.x,ge.position.z)+.7,Di+.4);ge.position.y<s&&(ge.position.y=s),oo+=((ri?0:-1.6)-oo)*(1-Math.exp(-3*i)),ge.lookAt(He.x,He.y+oo,He.z),ei>0&&(ge.position.x+=(Math.random()-.5)*ei,ge.position.y+=(Math.random()-.5)*ei,ei=Math.max(0,ei-i*1.5)),Ca.position.copy(ge.position)}function Ig(){for(const i of Ge.taps){if(!ri)continue;ol.setFromCamera({x:i.x/innerWidth*2-1,y:-(i.y/innerHeight)*2+1},ge);const t=ol.ray,e=ar.copy(t.origin).sub(Qt.com),n=e.dot(t.direction),s=e.lengthSq()-1.2*1.2,r=n*n-s;if(r>0){const o=-n-Math.sqrt(r);o>0&&Qt.boop(t.at(o,new D),t.direction.clone())}}Ge.taps.length=0}const co=1/240;let Ks=0;const Ug=new J0;function sh(){requestAnimationFrame(sh);const i=Math.min(Ug.getDelta(),1/20),t=ri?Ge.move():{x:0,y:0},e=-Math.sin(Ee.yaw),n=-Math.cos(Ee.yaw);Qt.ctl.mx=e*t.y-n*t.x,Qt.ctl.mz=n*t.y+e*t.x,Ge.jumpQueued&&(ri&&Qt.requestJump(),Ge.jumpQueued=!1),Ig(),Ie.updateNear(Qt.com),Ks+=i;let s=0;for(;Ks>=co&&s<10;)Qt.step(co),Ks-=co,s++;s===10&&(Ks=0),Qt.update(i),Lg(i),Ie.update(i,Qt.com),Oe.update(i,ge),Dg(i),Rn.position.copy(Qt.com).addScaledVector(Ql,60),Rn.target.position.copy(Qt.com),Qt.sleeping&&ri?(ar.copy(Qt.com).add(new D(.5,1.3,0)).project(ge),ao.style.transform=`translate(${(ar.x*.5+.5)*innerWidth}px, ${(-ar.y*.5+.5)*innerHeight}px)`,ao.classList.add("on")):ao.classList.remove("on"),sn.render(Je,ge)}function rh(){ge.aspect=innerWidth/innerHeight,ge.fov=ge.aspect<1?Math.min(80,55/Math.max(.6,ge.aspect)**.55):55,ge.updateProjectionMatrix(),sn.setSize(innerWidth,innerHeight)}rh();addEventListener("resize",rh);window.__globby={glob:Qt,world:Ie,camera:ge,cam:Ee,input:Ge,renderer:sn,scene:Je};sh();
