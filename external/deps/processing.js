!function e(t,n,r){function i(o,a){if(!n[o]){if(!t[o]){var l="function"==typeof require&&require
if(!a&&l)return l(o,!0)
if(s)return s(o,!0)
var h=new Error("Cannot find module '"+o+"'")
throw h.code="MODULE_NOT_FOUND",h}var u=n[o]={exports:{}}
t[o][0].call(u.exports,function(e){var n=t[o][1][e]
return i(n||e)},u,u.exports,e,t,n,r)}return n[o].exports}for(var s="function"==typeof require&&require,o=0;o<r.length;o++)i(r[o])
return i}({1:[function(e,t,n){var r={isDomPresent:!0,navigator:navigator,window:window,document:document,ajax:function(e){var t=new XMLHttpRequest
if(t.open("GET",e,!1),t.overrideMimeType&&t.overrideMimeType("text/plain"),t.setRequestHeader("If-Modified-Since","Fri, 01 Jan 1960 00:00:00 GMT"),t.send(null),200!==t.status&&0!==t.status)throw"XMLHttpRequest failed, status code "+t.status
return t.responseText}}
window.Processing=e("./src/")(r)},{"./src/":28}],2:[function(e,t,n){t.exports={name:"processing-js",version:"1.6.6",author:"Processing.js",repository:{type:"git",url:"git@github.com/processing-js/processing-js.git"},main:"processing.min.js",bugs:"https://github.com/processing-js/processing-js/issues",devDependencies:{argv:"~0.0.2",browserify:"^11.0.1",express:"~3.3.3",grunt:"~0.4.1","grunt-cli":"~0.1.8","grunt-contrib-jshint":"~0.4.3","http-server":"^0.9.0",minifier:"^0.7.1","node-minify":"~0.7.3",nunjucks:"~0.1.9",open:"0.0.3"},scripts:{test:"node test","test:manual":"http-server -o test/manual",start:"browserify build.js -o processing.js && minify --output processing.min.js processing.js"},license:"MIT",dependencies:{minifier:"^0.7.1"}}},{}],3:[function(e,t,n){t.exports=function(e){if(!(e instanceof Array)){if(e.iterator instanceof Function)return e.iterator()
throw"Unable to iterate: "+e}var t=-1
this.hasNext=function(){return++t<e.length},this.next=function(){return e[t]}}},{}],4:[function(e,t,n){t.exports={X:0,Y:1,Z:2,R:3,G:4,B:5,A:6,U:7,V:8,NX:9,NY:10,NZ:11,EDGE:12,SR:13,SG:14,SB:15,SA:16,SW:17,TX:18,TY:19,TZ:20,VX:21,VY:22,VZ:23,VW:24,AR:25,AG:26,AB:27,DR:3,DG:4,DB:5,DA:6,SPR:28,SPG:29,SPB:30,SHINE:31,ER:32,EG:33,EB:34,BEEN_LIT:35,VERTEX_FIELD_COUNT:36,P2D:1,JAVA2D:1,WEBGL:2,P3D:2,OPENGL:2,PDF:0,DXF:0,OTHER:0,WINDOWS:1,MACOSX:2,LINUX:3,EPSILON:1e-4,MAX_FLOAT:3.4028235e38,MIN_FLOAT:-3.4028235e38,MAX_INT:2147483647,MIN_INT:-2147483648,PI:Math.PI,TWO_PI:2*Math.PI,TAU:2*Math.PI,HALF_PI:Math.PI/2,THIRD_PI:Math.PI/3,QUARTER_PI:Math.PI/4,DEG_TO_RAD:Math.PI/180,RAD_TO_DEG:180/Math.PI,WHITESPACE:" \t\n\r\f ",RGB:1,ARGB:2,HSB:3,ALPHA:4,CMYK:5,TIFF:0,TARGA:1,JPEG:2,GIF:3,BLUR:11,GRAY:12,INVERT:13,OPAQUE:14,POSTERIZE:15,THRESHOLD:16,ERODE:17,DILATE:18,REPLACE:0,BLEND:1,ADD:2,SUBTRACT:4,LIGHTEST:8,DARKEST:16,DIFFERENCE:32,EXCLUSION:64,MULTIPLY:128,SCREEN:256,OVERLAY:512,HARD_LIGHT:1024,SOFT_LIGHT:2048,DODGE:4096,BURN:8192,ALPHA_MASK:4278190080,RED_MASK:16711680,GREEN_MASK:65280,BLUE_MASK:255,CUSTOM:0,ORTHOGRAPHIC:2,PERSPECTIVE:3,POINT:2,POINTS:2,LINE:4,LINES:4,TRIANGLE:8,TRIANGLES:9,TRIANGLE_STRIP:10,TRIANGLE_FAN:11,QUAD:16,QUADS:16,QUAD_STRIP:17,POLYGON:20,PATH:21,RECT:30,ELLIPSE:31,ARC:32,SPHERE:40,BOX:41,CHORD:2,PIE:3,GROUP:0,PRIMITIVE:1,GEOMETRY:3,VERTEX:0,BEZIER_VERTEX:1,CURVE_VERTEX:2,BREAK:3,CLOSESHAPE:4,OPEN:1,CLOSE:2,CORNER:0,CORNERS:1,RADIUS:2,CENTER_RADIUS:2,CENTER:3,DIAMETER:3,CENTER_DIAMETER:3,BASELINE:0,TOP:101,BOTTOM:102,NORMAL:1,NORMALIZED:1,IMAGE:2,MODEL:4,SHAPE:5,SQUARE:"butt",ROUND:"round",PROJECT:"square",MITER:"miter",BEVEL:"bevel",AMBIENT:0,DIRECTIONAL:1,SPOT:3,BACKSPACE:8,TAB:9,ENTER:10,RETURN:13,ESC:27,DELETE:127,CODED:65535,SHIFT:16,CONTROL:17,ALT:18,CAPSLK:20,PGUP:33,PGDN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLK:144,META:157,INSERT:155,ARROW:"default",CROSS:"crosshair",HAND:"pointer",MOVE:"move",TEXT:"text",WAIT:"wait",NOCURSOR:"url('data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='), auto",DISABLE_OPENGL_2X_SMOOTH:1,ENABLE_OPENGL_2X_SMOOTH:-1,ENABLE_OPENGL_4X_SMOOTH:2,ENABLE_NATIVE_FONTS:3,DISABLE_DEPTH_TEST:4,ENABLE_DEPTH_TEST:-4,ENABLE_DEPTH_SORT:5,DISABLE_DEPTH_SORT:-5,DISABLE_OPENGL_ERROR_REPORT:6,ENABLE_OPENGL_ERROR_REPORT:-6,ENABLE_ACCURATE_TEXTURES:7,DISABLE_ACCURATE_TEXTURES:-7,HINT_COUNT:10,SINCOS_LENGTH:720,PRECISIONB:15,PRECISIONF:32768,PREC_MAXVAL:32767,PREC_ALPHA_SHIFT:9,PREC_RED_SHIFT:1,NORMAL_MODE_AUTO:0,NORMAL_MODE_SHAPE:1,NORMAL_MODE_VERTEX:2,MAX_LIGHTS:8}},{}],5:[function(e,n,r){n.exports=function(e){var n={BufferMax:200},r=e.createElement("style"),i=!1
return r.textContent=[".pjsconsole.hidden {","  display: none!important;","}"].join("\n"),n.wrapper=e.createElement("div"),r.textContent+=["",".pjsconsole {","  opacity: .75;","  display: block;","  position: fixed;","  bottom: 0px;","  left: 0px;","  right: 0px;","  height: 50px;","  background-color: #aaa;","}"].join("\n"),n.wrapper.classList.add("pjsconsole"),n.dragger=e.createElement("div"),r.textContent+=["",".pjsconsole .dragger {","  display: block;","  border: 3px black raised;","  cursor: n-resize;","  position: absolute;","  top: 0px;","  left: 0px;","  right: 0px;","  height: 5px;","  background-color: #333;","}"].join("\n"),n.dragger.classList.add("dragger"),n.closer=e.createElement("div"),r.textContent+=["",".pjsconsole .closer {","  opacity: .5;","  display: block;","  border: 3px black raised;","  position: absolute;","  top: 10px;","  right: 30px;","  height: 20px;","  width: 20px;","  background-color: #ddd;","  color: #000;","  line-height: 20px;","  text-align: center;","  cursor: pointer","}"].join("\n"),n.closer.classList.add("closer"),n.closer.innerHTML="&#10006;",n.javaconsole=e.createElement("div"),r.textContent+=["",".pjsconsole .console {","  overflow-x: auto;","  display: block;","  position: absolute;","  left: 10px;","  right: 0px;","  bottom: 5px;","  top: 10px;","  overflow-y: scroll;","  height: 40px;","}"].join("\n"),n.javaconsole.setAttribute("class","console"),n.wrapper.appendChild(n.dragger),n.wrapper.appendChild(n.javaconsole),n.wrapper.appendChild(n.closer),n.dragger.onmousedown=function(t){n.divheight=n.wrapper.style.height,e.selection?e.selection.empty():window.getSelection().removeAllRanges()
var r=t.screenY
window.onmousemove=function(e){n.wrapper.style.height=parseFloat(n.divheight)+(r-e.screenY)+"px",n.javaconsole.style.height=parseFloat(n.divheight)+(r-e.screenY)-10+"px"},window.onmouseup=function(t){e.selection?e.selection.empty():window.getSelection().removeAllRanges(),n.wrapper.style.height=parseFloat(n.divheight)+(r-t.screenY)+"px",n.javaconsole.style.height=parseFloat(n.divheight)+(r-t.screenY)-10+"px",window.onmousemove=null,window.onmouseup=null}},n.BufferArray=[],n.print=n.log=function(){i||(e.body.appendChild(r),e.body.appendChild(n.wrapper),i=!0)
var s=Array.prototype.slice.call(arguments)
t=s.map(function(e,t){return e+(t+1===s.length?"":" ")}).join(""),n.BufferArray[n.BufferArray.length-1]?n.BufferArray[n.BufferArray.length-1]+=t+"":n.BufferArray.push(t),n.javaconsole.innerHTML=n.BufferArray.join(""),n.showconsole()},n.println=function(){var e=Array.prototype.slice.call(arguments)
e.push("<br>"),n.print.apply(n,e),n.BufferArray.length>n.BufferMax?n.BufferArray.splice(0,1):n.javaconsole.scrollTop=n.javaconsole.scrollHeight},n.showconsole=function(){n.wrapper.classList.remove("hidden")},n.hideconsole=function(){n.wrapper.classList.add("hidden")},n.closer.onclick=function(){n.hideconsole()},n.hideconsole(),n}},{}],6:[function(e,t,n){t.exports=function(e){function t(){}function n(e,t,n){if(!e.hasOwnProperty(t)||"function"!=typeof e[t])return void(e[t]=n)
var r=e[t]
if("$overloads"in r)return void(r.$defaultOverload=n)
if("$overloads"in n||r.length!==n.length){var i,s
"$overloads"in n?(i=n.$overloads.slice(0),i[r.length]=r,s=n.$defaultOverload):(i=[],i[n.length]=n,i[r.length]=r,s=r)
var o=function(){return(o.$overloads[arguments.length]||("$methodArgsIndex"in o&&arguments.length>o.$methodArgsIndex?o.$overloads[o.$methodArgsIndex]:null)||o.$defaultOverload).apply(this,arguments)}
o.$overloads=i,"$methodArgsIndex"in n&&(o.$methodArgsIndex=n.$methodArgsIndex),o.$defaultOverload=s,o.name=t,e[t]=o}}function r(e,t){var r=[]
for(var i in t)"function"==typeof t[i]?n(e,i,t[i]):"$"===i.charAt(0)||i in e||r.push(i)
for(;r.length>0;)!function(n){s.defineProperty(e,n,{get:function(){return t[n]},set:function(e){t[n]=e},enumerable:!0})}(r.shift())
e.$super=t}function i(e){return"string"==typeof e&&-1!==["byte","int","char","color","float","long","double"].indexOf(e)}t.prototype=e.PConstants
var s=new t
return Object.keys(e).forEach(function(t){s[t]=e[t]}),s.defineProperty=function(e,t,n){"defineProperty"in Object?Object.defineProperty(e,t,n):(n.hasOwnProperty("get")&&e.__defineGetter__(t,n.get),n.hasOwnProperty("set")&&e.__defineSetter__(t,n.set))},s.extendClassChain=function(e){for(var t=[e],n=e.$upcast;n;n=n.$upcast)r(n,e),t.push(n),e=n
for(;t.length>0;)t.pop().$self=e},s.extendStaticMembers=function(e,t){r(e,t)},s.extendInterfaceMembers=function(e,t){r(e,t)},s.addMethod=function(e,t,n,r){var i=e[t]
if(i||r){var s=n.length
if("$overloads"in i)i.$overloads[s]=n
else{var o=function(){return(o.$overloads[arguments.length]||("$methodArgsIndex"in o&&arguments.length>o.$methodArgsIndex?o.$overloads[o.$methodArgsIndex]:null)||o.$defaultOverload).apply(this,arguments)},a=[]
i&&(a[i.length]=i),a[s]=n,o.$overloads=a,o.$defaultOverload=i||n,r&&(o.$methodArgsIndex=s),o.name=t,e[t]=o}}else e[t]=n},s.createJavaArray=function(e,t){var n=null,r=null
if("string"==typeof e&&("boolean"===e?r=!1:i(e)&&(r=0)),"number"==typeof t[0]){var o=0|t[0]
if(t.length<=1){n=[],n.length=o
for(var a=0;a<o;++a)n[a]=r}else{n=[]
for(var l=t.slice(1),h=0;h<o;++h)n.push(s.createJavaArray(e,l))}}return n},s.defineProperty(s,"screenWidth",{get:function(){return window.innerWidth}}),s.defineProperty(s,"screenHeight",{get:function(){return window.innerHeight}}),s}},{}],7:[function(e,t,n){t.exports=function(e,t){var n=t.window,r=t.document,i=n.XMLHttpRequest,s=t.noop,o=t.isDOMPresent,a=t.version
e.version=a||"@DEV-VERSION@",e.lib={},e.registerLibrary=function(t,n){e.lib[t]=n,n.hasOwnProperty("init")&&n.init(defaultScope)},e.Sketch=function(e){this.attachFunction=e,this.options={pauseOnBlur:!1,globalKeyEvents:!1},this.onLoad=s,this.onSetup=s,this.onPause=s,this.onLoop=s,this.onFrameStart=s,this.onFrameEnd=s,this.onExit=s,this.params={},this.imageCache={pending:0,images:{},operaCache:{},add:function(e,t){if(!this.images[e]&&(o||(this.images[e]=null),t||(t=new Image,t.onload=function(e){return function(){e.pending--}}(this),this.pending++,t.src=e),this.images[e]=t,n.opera)){var i=r.createElement("div")
i.appendChild(t),i.style.position="absolute",i.style.opacity=0,i.style.width="1px",i.style.height="1px",this.operaCache[e]||(r.body.appendChild(i),this.operaCache[e]=i)}}},this.sourceCode=void 0,this.attach=function(e){if("function"==typeof this.attachFunction)this.attachFunction(e)
else{if(!this.sourceCode)throw"Unable to attach sketch to the processing instance"
var t=new Function("return ("+this.sourceCode+");")()
t(e),this.attachFunction=t}},this.toString=function(){var e,t="((function(Sketch) {\n"
t+="var sketch = new Sketch(\n"+this.sourceCode+");\n"
for(e in this.options)if(this.options.hasOwnProperty(e)){var n=this.options[e]
t+="sketch.options."+e+" = "+("string"==typeof n?'"'+n+'"':""+n)+";\n"}for(e in this.imageCache)this.options.hasOwnProperty(e)&&(t+='sketch.imageCache.add("'+e+'");\n')
return t+="return sketch;\n})(Processing.Sketch))"}}
var h=e.loadSketchFromSources=function(t,s,o){function a(e,t){var r=new i
r.onreadystatechange=function(){if(4===r.readyState){var e
200!==r.status&&0!==r.status?e="Invalid XHR status "+r.status:""===r.responseText&&(e="withCredentials"in new i&&!1===(new i).withCredentials&&"file:"===n.location.protocol?"XMLHttpRequest failure, possibly due to a same-origin policy violation. You can try loading this page in another browser, or load it from http://localhost using a local webserver. See the Processing.js README for a more detailed explanation of this problem and solutions.":"File is empty."),t(r.responseText,e)}},r.open("GET",e,!0),r.overrideMimeType&&r.overrideMimeType("application/json"),r.setRequestHeader("If-Modified-Since","Fri, 01 Jan 1960 00:00:00 GMT"),r.send(null)}for(var l=[],h=[],u=s.length,c=0,f=0;f<u;++f)!function(n,i){function s(r,s){if(l[n]=r,++c,s&&h.push(i+" ==> "+s),c===u){if(0!==h.length)throw"Processing.js: Unable to load pjs sketch files: "+h.join("\n")
var a=new e(t,l.join("\n"))
o&&o(a)}}if("#"===i.charAt(0)){var f=r.getElementById(i.substring(1))
return void(f?s(f.text||f.textContent):s("","Unable to load pjs sketch: element with id '"+i.substring(1)+"' was not found"))}a(i,s)}(f,s[f])},u=function(){r.removeEventListener("DOMContentLoaded",u,!1)
for(var t;e.instances.length>0;)for(t=e.instances.length-1;t>=0;t--)e.instances[t]&&e.instances[t].exit()
var n,i=r.getElementsByTagName("canvas")
for(t=0,l=i.length;t<l;t++){var s=i[t].getAttribute("data-processing-sources")
if(null===s&&null===(s=i[t].getAttribute("data-src"))&&(s=i[t].getAttribute("datasrc")),s){n=s.split(/\s+/g)
for(var o=0;o<n.length;)n[o]?o++:n.splice(o,1)
h(i[t],n)}}var a,c,f,p=r.getElementsByTagName("script"),m=[]
for(a=p.length-1;a>=0;a--)m.push(p[a])
for(a=0,c=m.length;a<c;a++){var g=m[a]
if(g.getAttribute){var d=g.getAttribute("type")
if(d&&("text/processing"===d.toLowerCase()||"application/processing"===d.toLowerCase())){var v=g.getAttribute("data-processing-target")
if(i=void 0,v)i=r.getElementById(v)
else{for(var y=g.nextSibling;y&&1!==y.nodeType;)y=y.nextSibling
y&&"canvas"===y.nodeName.toLowerCase()&&(i=y)}if(i){if(g.getAttribute("src")){n=g.getAttribute("src").split(/\s+/),h(i,n)
continue}f=g.textContent||g.text,new e(i,f)}}}}}
return r.addEventListener("DOMContentLoaded",u,!1),e.reload=u,e.disableInit=function(){r.removeEventListener("DOMContentLoaded",u,!1)},e}},{}],8:[function(e,t,n){t.exports=function(e,t){return null===e||null===t?null===e&&null===t:"string"==typeof e?e===t:"object"!=typeof e?e===t:e.equals instanceof Function?e.equals(t):e===t}},{}],9:[function(e,t,n){t.exports=function(e,t){if("string"==typeof e){for(var n=0,r=0;r<e.length;++r)n=31*n+e.charCodeAt(r)&4294967295
return n}return"object"!=typeof e?4294967295&e:e.hashCode instanceof Function?e.hashCode():(e.$id===t&&(e.$id=Math.floor(65536*Math.random())-32768<<16|Math.floor(65536*Math.random())),e.$id)}},{}],10:[function(e,t,n){t.exports=function(e){function t(e){var t=-1
this.hasNext=function(){return t+1<e.length},this.next=function(){return e[++t]},this.remove=function(){e.splice(t--,1)}}function n(e){var i=[]
e&&e.toArray&&(i=e.toArray()),this.get=function(e){return i[e]},this.contains=function(e){return this.indexOf(e)>-1},this.indexOf=function(e){for(var t=0,n=i.length;t<n;++t)if(r(e,i[t]))return t
return-1},this.lastIndexOf=function(e){for(var t=i.length-1;t>=0;--t)if(r(e,i[t]))return t
return-1},this.add=function(){if(1===arguments.length)i.push(arguments[0])
else{if(2!==arguments.length)throw"Please use the proper number of parameters."
var e=arguments[0]
if("number"!=typeof e)throw typeof e+" is not a number"
if(!(e>=0&&e<=i.length))throw e+" is not a valid index"
i.splice(e,0,arguments[1])}},this.addAll=function(e,t){var n
if("number"==typeof e){if(e<0||e>i.length)throw"Index out of bounds for addAll: "+e+" greater or equal than "+i.length
for(n=new ObjectIterator(t);n.hasNext();)i.splice(e++,0,n.next())}else for(n=new ObjectIterator(e);n.hasNext();)i.push(n.next())},this.set=function(){if(2!==arguments.length)throw"Please use the proper number of parameters."
var e=arguments[0]
if("number"!=typeof e)throw typeof e+" is not a number"
if(!(e>=0&&e<i.length))throw e+" is not a valid index."
i.splice(e,1,arguments[1])},this.size=function(){return i.length},this.clear=function(){i.length=0},this.remove=function(e){return"number"==typeof e?i.splice(e,1)[0]:(e=this.indexOf(e))>-1&&(i.splice(e,1),!0)},this.removeAll=function(e){var t,r,i,s=new n
for(s.addAll(this),this.clear(),t=0,r=0;t<s.size();t++)i=s.get(t),e.contains(i)||this.add(r++,i)
return this.size()<s.size()},this.isEmpty=function(){return!i.length},this.clone=function(){return new n(this)},this.toArray=function(){return i.slice(0)},this.iterator=function(){return new t(i)}}var r=(e.virtHashCode,e.virtEquals)
return n}},{}],11:[function(e,t,n){t.exports=function(e,t){var n=function(t){return"string"==typeof t&&1===t.length?this.code=t.charCodeAt(0):this.code="number"==typeof t?t:t instanceof n?t:NaN,void 0===e[this.code]?e[this.code]=this:e[this.code]}
return n.prototype.toString=function(){return String.fromCharCode(this.code)},n.prototype.valueOf=function(){return this.code},n}({})},{}],12:[function(e,t,n){t.exports=function(e){function t(){function e(e){var t=n(e)%u.length
return t<0?u.length+t:t}function i(){if(!(c<=h*u.length)){for(var t=[],n=0;n<u.length;++n)void 0!==u[n]&&(t=t.concat(u[n]))
var r=2*u.length
u=[],u.length=r
for(var i=0;i<t.length;++i){var s=e(t[i].key),o=u[s]
void 0===o&&(u[s]=o=[]),o.push(t[i])}}}function s(e,t){function n(){for(;!o;)if(++s,i>=u.length)o=!0
else{if(!(void 0===u[i]||s>=u[i].length))return
s=-1,++i}}var r,i=0,s=-1,o=!1
this.hasNext=function(){return!o},this.next=function(){return r=e(u[i][s]),n(),r},this.remove=function(){void 0!==r&&(t(r),--s,n())},n()}function o(e,t,n){this.clear=function(){f.clear()},this.contains=function(e){return t(e)},this.containsAll=function(e){for(var t=e.iterator();t.hasNext();)if(!this.contains(t.next()))return!1
return!0},this.isEmpty=function(){return f.isEmpty()},this.iterator=function(){return new s(e,n)},this.remove=function(e){return!!this.contains(e)&&(n(e),!0)},this.removeAll=function(e){for(var t=e.iterator();t.hasNext();){var r=t.next()
this.contains(r)&&(n(r),!0)}return!0},this.retainAll=function(e){for(var t=this.iterator(),r=[];t.hasNext();){var i=t.next()
e.contains(i)||r.push(i)}for(var s=0;s<r.length;++s)n(r[s])
return r.length>0},this.size=function(){return f.size()},this.toArray=function(){for(var e=[],t=this.iterator();t.hasNext();)e.push(t.next())
return e}}function a(e){this._isIn=function(t){return t===f&&void 0===e.removed},this.equals=function(t){return r(e.key,t.getKey())},this.getKey=function(){return e.key},this.getValue=function(){return e.value},this.hashCode=function(t){return n(e.key)},this.setValue=function(t){var n=e.value
return e.value=t,n}}if(1===arguments.length&&arguments[0]instanceof t)return arguments[0].clone()
var l=arguments.length>0?arguments[0]:16,h=arguments.length>1?arguments[1]:.75,u=[]
u.length=l
var c=0,f=this
this.clear=function(){c=0,u=[],u.length=l},this.clone=function(){var e=new t
return e.putAll(this),e},this.containsKey=function(t){var n=e(t),i=u[n]
if(void 0===i)return!1
for(var s=0;s<i.length;++s)if(r(i[s].key,t))return!0
return!1},this.containsValue=function(e){for(var t=0;t<u.length;++t){var n=u[t]
if(void 0!==n)for(var i=0;i<n.length;++i)if(r(n[i].value,e))return!0}return!1},this.entrySet=function(){return new o(function(e){return new a(e)},function(e){return e instanceof a&&e._isIn(f)},function(e){return f.remove(e.getKey())})},this.get=function(t){var n=e(t),i=u[n]
if(void 0===i)return null
for(var s=0;s<i.length;++s)if(r(i[s].key,t))return i[s].value
return null},this.isEmpty=function(){return 0===c},this.keySet=function(){return new o(function(e){return e.key},function(e){return f.containsKey(e)},function(e){return f.remove(e)})},this.values=function(){return new o(function(e){return e.value},function(e){return f.containsValue(e)},function(e){return f.removeByValue(e)})},this.put=function(t,n){var s=e(t),o=u[s]
if(void 0===o)return++c,u[s]=[{key:t,value:n}],i(),null
for(var a=0;a<o.length;++a)if(r(o[a].key,t)){var l=o[a].value
return o[a].value=n,l}return++c,o.push({key:t,value:n}),i(),null},this.putAll=function(e){for(var t=e.entrySet().iterator();t.hasNext();){var n=t.next()
this.put(n.getKey(),n.getValue())}},this.remove=function(t){var n=e(t),i=u[n]
if(void 0===i)return null
for(var s=0;s<i.length;++s)if(r(i[s].key,t)){--c
var o=i[s].value
return i[s].removed=!0,i.length>1?i.splice(s,1):u[n]=void 0,o}return null},this.removeByValue=function(e){var t,n,r,i
for(t in u)if(u.hasOwnProperty(t))for(n=0,r=u[t].length;n<r;n++)if(i=u[t][n],i.value===e)return u[t].splice(n,1),!0
return!1},this.size=function(){return c}}var n=e.virtHashCode,r=e.virtEquals
return t}},{}],13:[function(e,t,n){t.exports=function(e,t){function n(e){var t=e.size/250,n=i.createElement("canvas")
n.width=500,n.height=500,n.style.opacity=0
var r=e.getCSSDefinition("250px","normal"),o=n.getContext("2d")
o.font=r
n.width=o.measureText("dbflkhyjqpg").width,o.font=r
var a=i.createElement("div")
a.style.position="absolute",a.style.opacity=0,a.style.fontFamily='"'+e.name+'"',a.style.fontSize="250px",a.innerHTML="dbflkhyjqpg<br/>dbflkhyjqpg",i.body.appendChild(a)
var l=n.width,h=n.height,u=h/2
o.fillStyle="white",o.fillRect(0,0,l,h),o.fillStyle="black",o.fillText("dbflkhyjqpg",0,u)
for(var c=o.getImageData(0,0,l,h).data,f=0,p=4*l,m=c.length;++f<m&&255===c[f];)s()
var g=Math.round(f/p)
for(f=m-1;--f>0&&255===c[f];)s()
var d=Math.round(f/p)
if(e.ascent=t*(u-g),e.descent=t*(d-u),i.defaultView.getComputedStyle){var v=i.defaultView.getComputedStyle(a,null).getPropertyValue("height")
v=t*v.replace("px",""),v>=2*e.size&&(e.leading=Math.round(v/2))}if(i.body.removeChild(a),e.caching)return o}function r(e,r){e===t&&(e=""),this.name=e,r===t&&(r=0),this.size=r,this.glyph=!1,this.ascent=0,this.descent=0,this.leading=1.2*r
var i=e.indexOf(" Italic Bold");-1!==i&&(e=e.substring(0,i)),this.style="normal"
var s=e.indexOf(" Italic");-1!==s&&(e=e.substring(0,s),this.style="italic"),this.weight="normal"
var o=e.indexOf(" Bold")
if(-1!==o&&(e=e.substring(0,o),this.weight="bold"),this.family="sans-serif",e!==t)switch(e){case"sans-serif":case"serif":case"monospace":case"fantasy":case"cursive":this.family=e
break
default:this.family='"'+e+'", sans-serif'}this.context2d=n(this),this.css=this.getCSSDefinition(),this.context2d&&(this.context2d.font=this.css)}var i=(e.Browser.window,e.Browser.document),s=e.noop
return r.prototype.caching=!0,r.prototype.getCSSDefinition=function(e,n){return e===t&&(e=this.size+"px"),n===t&&(n=this.leading+"px"),[this.style,"normal",this.weight,e+"/"+n,this.family].join(" ")},r.prototype.measureTextWidth=function(e){return this.context2d.measureText(e).width},r.prototype.measureTextWidthFallback=function(e){var t=i.createElement("canvas"),n=t.getContext("2d")
return n.font=this.css,n.measureText(e).width},r.PFontCache={length:0},r.get=function(e,t){t=(10*t+.5|0)/10
var n=r.PFontCache,i=e+"/"+t
if(!n[i]){if(n[i]=new r(e,t),50===++n.length){r.prototype.measureTextWidth=r.prototype.measureTextWidthFallback,r.prototype.caching=!1
var s
for(s in n)"length"!==s&&(n[s].context2d=null)
return new r(e,t)}if(400===n.length)return r.PFontCache={},r.get=r.getFallback,new r(e,t)}return n[i]},r.getFallback=function(e,t){return new r(e,t)},r.list=function(){return["sans-serif","serif","monospace","fantasy","cursive"]},r.preloading={template:{},initialized:!1,initialize:function(){var e=i.createElement("style")
e.setAttribute("type","text/css"),e.innerHTML='@font-face {\n  font-family: "PjsEmptyFont";\n  src: url(\'data:application/x-font-ttf;base64,'+function(){return"#E3KAI2wAgT1MvMg7Eo3VmNtYX7ABi3CxnbHlm7Abw3kaGVhZ7ACs3OGhoZWE7A53CRobXR47AY3AGbG9jYQ7G03Bm1heH7ABC3CBuYW1l7Ae3AgcG9zd7AI3AE#B3AQ2kgTY18PPPUACwAg3ALSRoo3#yld0xg32QAB77#E777773B#E3C#I#Q77773E#Q7777777772CMAIw7AB77732B#M#Q3wAB#g3B#E#E2BB//82BB////w#B7#gAEg3E77x2B32B#E#Q#MTcBAQ32gAe#M#QQJ#E32M#QQJ#I#g32Q77#".replace(/[#237]/g,function(e){return"AAAAAAAA".substr(~~e?7-e:6)})}()+"')\n       format('truetype');\n}",i.head.appendChild(e)
var t=i.createElement("span")
t.style.cssText='position: absolute; top: -1000; left: 0; opacity: 0; font-family: "PjsEmptyFont", fantasy;',t.innerHTML="AAAAAAAA",i.body.appendChild(t),this.template=t,this.initialized=!0},getElementWidth:function(e){return i.defaultView.getComputedStyle(e,"").getPropertyValue("width")},timeAttempted:0,pending:function(e){this.initialized||this.initialize()
for(var t,n,r=this.getElementWidth(this.template),s=0;s<this.fontList.length;s++){if(t=this.fontList[s],n=this.getElementWidth(t),this.timeAttempted<4e3&&n===r)return this.timeAttempted+=e,!0
i.body.removeChild(t),this.fontList.splice(s--,1),this.timeAttempted=0}return 0!==this.fontList.length},fontList:[],addedList:{},add:function(e){this.initialized||this.initialize()
var t="object"==typeof e?e.fontFace:e,n="object"==typeof e?e.url:e
if(!this.addedList[t]){var r=i.createElement("style")
r.setAttribute("type","text/css"),r.innerHTML="@font-face{\n  font-family: '"+t+"';\n  src:  url('"+n+"');\n}\n",i.head.appendChild(r),this.addedList[t]=!0
var s=i.createElement("span")
s.style.cssText="position: absolute; top: 0; left: 0; opacity: 0;",s.style.fontFamily='"'+t+'", "PjsEmptyFont", fantasy',s.innerHTML="AAAAAAAA",i.body.appendChild(s),this.fontList.push(s)}}},r}},{}],14:[function(e,t,n){t.exports=function(e,t){var n=e.p,r=function(){0===arguments.length?this.reset():1===arguments.length&&arguments[0]instanceof r?this.set(arguments[0].array()):6===arguments.length&&this.set(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])}
return r.prototype={set:function(){if(6===arguments.length){var e=arguments
this.set([e[0],e[1],e[2],e[3],e[4],e[5]])}else 1===arguments.length&&arguments[0]instanceof r?this.elements=arguments[0].array():1===arguments.length&&arguments[0]instanceof Array&&(this.elements=arguments[0].slice())},get:function(){var e=new r
return e.set(this.elements),e},reset:function(){this.set([1,0,0,0,1,0])},array:function(){return this.elements.slice()},translate:function(e,t){this.elements[2]=e*this.elements[0]+t*this.elements[1]+this.elements[2],this.elements[5]=e*this.elements[3]+t*this.elements[4]+this.elements[5]},invTranslate:function(e,t){this.translate(-e,-t)},transpose:function(){},mult:function(e,t){var n,r
return e instanceof PVector?(n=e.x,r=e.y,t||(t=new PVector)):e instanceof Array&&(n=e[0],r=e[1],t||(t=[])),t instanceof Array?(t[0]=this.elements[0]*n+this.elements[1]*r+this.elements[2],t[1]=this.elements[3]*n+this.elements[4]*r+this.elements[5]):t instanceof PVector&&(t.x=this.elements[0]*n+this.elements[1]*r+this.elements[2],t.y=this.elements[3]*n+this.elements[4]*r+this.elements[5],t.z=0),t},multX:function(e,t){return e*this.elements[0]+t*this.elements[1]+this.elements[2]},multY:function(e,t){return e*this.elements[3]+t*this.elements[4]+this.elements[5]},skewX:function(e){this.apply(1,0,1,e,0,0)},skewY:function(e){this.apply(1,0,1,0,e,0)},shearX:function(e){this.apply(1,0,1,Math.tan(e),0,0)},shearY:function(e){this.apply(1,0,1,0,Math.tan(e),0)},determinant:function(){return this.elements[0]*this.elements[4]-this.elements[1]*this.elements[3]},invert:function(){var e=this.determinant()
if(Math.abs(e)>PConstants.MIN_INT){var t=this.elements[0],n=this.elements[1],r=this.elements[2],i=this.elements[3],s=this.elements[4],o=this.elements[5]
return this.elements[0]=s/e,this.elements[3]=-i/e,this.elements[1]=-n/e,this.elements[4]=t/e,this.elements[2]=(n*o-s*r)/e,this.elements[5]=(i*r-t*o)/e,!0}return!1},scale:function(e,n){e&&n===t&&(n=e),e&&n&&(this.elements[0]*=e,this.elements[1]*=n,this.elements[3]*=e,this.elements[4]*=n)},invScale:function(e,t){e&&!t&&(t=e),this.scale(1/e,1/t)},apply:function(){var e
1===arguments.length&&arguments[0]instanceof r?e=arguments[0].array():6===arguments.length?e=Array.prototype.slice.call(arguments):1===arguments.length&&arguments[0]instanceof Array&&(e=arguments[0])
for(var t=[0,0,this.elements[2],0,0,this.elements[5]],n=0,i=0;i<2;i++)for(var s=0;s<3;s++,n++)t[n]+=this.elements[3*i+0]*e[s+0]+this.elements[3*i+1]*e[s+3]
this.elements=t.slice()},preApply:function(){var e
1===arguments.length&&arguments[0]instanceof r?e=arguments[0].array():6===arguments.length?e=Array.prototype.slice.call(arguments):1===arguments.length&&arguments[0]instanceof Array&&(e=arguments[0])
var t=[0,0,e[2],0,0,e[5]]
t[2]=e[2]+this.elements[2]*e[0]+this.elements[5]*e[1],t[5]=e[5]+this.elements[2]*e[3]+this.elements[5]*e[4],t[0]=this.elements[0]*e[0]+this.elements[3]*e[1],t[3]=this.elements[0]*e[3]+this.elements[3]*e[4],t[1]=this.elements[1]*e[0]+this.elements[4]*e[1],t[4]=this.elements[1]*e[3]+this.elements[4]*e[4],this.elements=t.slice()},rotate:function(e){var t=Math.cos(e),n=Math.sin(e),r=this.elements[0],i=this.elements[1]
this.elements[0]=t*r+n*i,this.elements[1]=-n*r+t*i,r=this.elements[3],i=this.elements[4],this.elements[3]=t*r+n*i,this.elements[4]=-n*r+t*i},rotateZ:function(e){this.rotate(e)},invRotateZ:function(e){this.rotateZ(e-Math.PI)},print:function(){var e=printMatrixHelper(this.elements),t=n.nfs(this.elements[0],e,4)+" "+n.nfs(this.elements[1],e,4)+" "+n.nfs(this.elements[2],e,4)+"\n"+n.nfs(this.elements[3],e,4)+" "+n.nfs(this.elements[4],e,4)+" "+n.nfs(this.elements[5],e,4)+"\n\n"
n.println(t)}},r}},{}],15:[function(e,t,n){t.exports=function(e,t){var n=e.p,r=function(){this.reset()}
return r.prototype={set:function(){16===arguments.length?this.elements=Array.prototype.slice.call(arguments):1===arguments.length&&arguments[0]instanceof r?this.elements=arguments[0].array():1===arguments.length&&arguments[0]instanceof Array&&(this.elements=arguments[0].slice())},get:function(){var e=new r
return e.set(this.elements),e},reset:function(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]},array:function(){return this.elements.slice()},translate:function(e,n,r){r===t&&(r=0),this.elements[3]+=e*this.elements[0]+n*this.elements[1]+r*this.elements[2],this.elements[7]+=e*this.elements[4]+n*this.elements[5]+r*this.elements[6],this.elements[11]+=e*this.elements[8]+n*this.elements[9]+r*this.elements[10],this.elements[15]+=e*this.elements[12]+n*this.elements[13]+r*this.elements[14]},transpose:function(){var e=this.elements[4]
this.elements[4]=this.elements[1],this.elements[1]=e,e=this.elements[8],this.elements[8]=this.elements[2],this.elements[2]=e,e=this.elements[6],this.elements[6]=this.elements[9],this.elements[9]=e,e=this.elements[3],this.elements[3]=this.elements[12],this.elements[12]=e,e=this.elements[7],this.elements[7]=this.elements[13],this.elements[13]=e,e=this.elements[11],this.elements[11]=this.elements[14],this.elements[14]=e},mult:function(e,t){var n,r,i,s
return e instanceof PVector?(n=e.x,r=e.y,i=e.z,s=1,t||(t=new PVector)):e instanceof Array&&(n=e[0],r=e[1],i=e[2],s=e[3]||1,(!t||3!==t.length&&4!==t.length)&&(t=[0,0,0])),t instanceof Array&&(3===t.length?(t[0]=this.elements[0]*n+this.elements[1]*r+this.elements[2]*i+this.elements[3],t[1]=this.elements[4]*n+this.elements[5]*r+this.elements[6]*i+this.elements[7],t[2]=this.elements[8]*n+this.elements[9]*r+this.elements[10]*i+this.elements[11]):4===t.length&&(t[0]=this.elements[0]*n+this.elements[1]*r+this.elements[2]*i+this.elements[3]*s,t[1]=this.elements[4]*n+this.elements[5]*r+this.elements[6]*i+this.elements[7]*s,t[2]=this.elements[8]*n+this.elements[9]*r+this.elements[10]*i+this.elements[11]*s,t[3]=this.elements[12]*n+this.elements[13]*r+this.elements[14]*i+this.elements[15]*s)),t instanceof PVector&&(t.x=this.elements[0]*n+this.elements[1]*r+this.elements[2]*i+this.elements[3],t.y=this.elements[4]*n+this.elements[5]*r+this.elements[6]*i+this.elements[7],t.z=this.elements[8]*n+this.elements[9]*r+this.elements[10]*i+this.elements[11]),t},preApply:function(){var e
1===arguments.length&&arguments[0]instanceof r?e=arguments[0].array():16===arguments.length?e=Array.prototype.slice.call(arguments):1===arguments.length&&arguments[0]instanceof Array&&(e=arguments[0])
for(var t=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],n=0,i=0;i<4;i++)for(var s=0;s<4;s++,n++)t[n]+=this.elements[s+0]*e[4*i+0]+this.elements[s+4]*e[4*i+1]+this.elements[s+8]*e[4*i+2]+this.elements[s+12]*e[4*i+3]
this.elements=t.slice()},apply:function(){var e
1===arguments.length&&arguments[0]instanceof r?e=arguments[0].array():16===arguments.length?e=Array.prototype.slice.call(arguments):1===arguments.length&&arguments[0]instanceof Array&&(e=arguments[0])
for(var t=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],n=0,i=0;i<4;i++)for(var s=0;s<4;s++,n++)t[n]+=this.elements[4*i+0]*e[s+0]+this.elements[4*i+1]*e[s+4]+this.elements[4*i+2]*e[s+8]+this.elements[4*i+3]*e[s+12]
this.elements=t.slice()},rotate:function(e,t,n,r){if(n){var i=Math.cos(e),s=Math.sin(e),o=1-i
this.apply(o*t*t+i,o*t*n-s*r,o*t*r+s*n,0,o*t*n+s*r,o*n*n+i,o*n*r-s*t,0,o*t*r-s*n,o*n*r+s*t,o*r*r+i,0,0,0,0,1)}else this.rotateZ(e)},invApply:function(){inverseCopy===t&&(inverseCopy=new r)
var e=arguments
return inverseCopy.set(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15]),!!inverseCopy.invert()&&(this.preApply(inverseCopy),!0)},rotateX:function(e){var t=Math.cos(e),n=Math.sin(e)
this.apply([1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1])},rotateY:function(e){var t=Math.cos(e),n=Math.sin(e)
this.apply([t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1])},rotateZ:function(e){var t=Math.cos(e),n=Math.sin(e)
this.apply([t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1])},scale:function(e,n,r){e&&n===t&&r===t?n=r=e:e&&n&&r===t&&(r=1),e&&n&&r&&(this.elements[0]*=e,this.elements[1]*=n,this.elements[2]*=r,this.elements[4]*=e,this.elements[5]*=n,this.elements[6]*=r,this.elements[8]*=e,this.elements[9]*=n,this.elements[10]*=r,this.elements[12]*=e,this.elements[13]*=n,this.elements[14]*=r)},skewX:function(e){var t=Math.tan(e)
this.apply(1,t,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},skewY:function(e){var t=Math.tan(e)
this.apply(1,0,0,0,t,1,0,0,0,0,1,0,0,0,0,1)},shearX:function(e){var t=Math.tan(e)
this.apply(1,t,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},shearY:function(e){var t=Math.tan(e)
this.apply(1,0,0,0,t,1,0,0,0,0,1,0,0,0,0,1)},multX:function(e,t,n,r){return n?r?this.elements[0]*e+this.elements[1]*t+this.elements[2]*n+this.elements[3]*r:this.elements[0]*e+this.elements[1]*t+this.elements[2]*n+this.elements[3]:this.elements[0]*e+this.elements[1]*t+this.elements[3]},multY:function(e,t,n,r){return n?r?this.elements[4]*e+this.elements[5]*t+this.elements[6]*n+this.elements[7]*r:this.elements[4]*e+this.elements[5]*t+this.elements[6]*n+this.elements[7]:this.elements[4]*e+this.elements[5]*t+this.elements[7]},multZ:function(e,t,n,r){return r?this.elements[8]*e+this.elements[9]*t+this.elements[10]*n+this.elements[11]*r:this.elements[8]*e+this.elements[9]*t+this.elements[10]*n+this.elements[11]},multW:function(e,t,n,r){return r?this.elements[12]*e+this.elements[13]*t+this.elements[14]*n+this.elements[15]*r:this.elements[12]*e+this.elements[13]*t+this.elements[14]*n+this.elements[15]},invert:function(){var e=this.elements[0]*this.elements[5]-this.elements[1]*this.elements[4],t=this.elements[0]*this.elements[6]-this.elements[2]*this.elements[4],n=this.elements[0]*this.elements[7]-this.elements[3]*this.elements[4],r=this.elements[1]*this.elements[6]-this.elements[2]*this.elements[5],i=this.elements[1]*this.elements[7]-this.elements[3]*this.elements[5],s=this.elements[2]*this.elements[7]-this.elements[3]*this.elements[6],o=this.elements[8]*this.elements[13]-this.elements[9]*this.elements[12],a=this.elements[8]*this.elements[14]-this.elements[10]*this.elements[12],l=this.elements[8]*this.elements[15]-this.elements[11]*this.elements[12],h=this.elements[9]*this.elements[14]-this.elements[10]*this.elements[13],u=this.elements[9]*this.elements[15]-this.elements[11]*this.elements[13],c=this.elements[10]*this.elements[15]-this.elements[11]*this.elements[14],f=e*c-t*u+n*h+r*l-i*a+s*o
if(Math.abs(f)<=1e-9)return!1
var p=[]
p[0]=+this.elements[5]*c-this.elements[6]*u+this.elements[7]*h,p[4]=-this.elements[4]*c+this.elements[6]*l-this.elements[7]*a,p[8]=+this.elements[4]*u-this.elements[5]*l+this.elements[7]*o,p[12]=-this.elements[4]*h+this.elements[5]*a-this.elements[6]*o,p[1]=-this.elements[1]*c+this.elements[2]*u-this.elements[3]*h,p[5]=+this.elements[0]*c-this.elements[2]*l+this.elements[3]*a,p[9]=-this.elements[0]*u+this.elements[1]*l-this.elements[3]*o,p[13]=+this.elements[0]*h-this.elements[1]*a+this.elements[2]*o,p[2]=+this.elements[13]*s-this.elements[14]*i+this.elements[15]*r,p[6]=-this.elements[12]*s+this.elements[14]*n-this.elements[15]*t,p[10]=+this.elements[12]*i-this.elements[13]*n+this.elements[15]*e,p[14]=-this.elements[12]*r+this.elements[13]*t-this.elements[14]*e,p[3]=-this.elements[9]*s+this.elements[10]*i-this.elements[11]*r,p[7]=+this.elements[8]*s-this.elements[10]*n+this.elements[11]*t,p[11]=-this.elements[8]*i+this.elements[9]*n-this.elements[11]*e,p[15]=+this.elements[8]*r-this.elements[9]*t+this.elements[10]*e
var m=1/f
return p[0]*=m,p[1]*=m,p[2]*=m,p[3]*=m,p[4]*=m,p[5]*=m,p[6]*=m,p[7]*=m,p[8]*=m,p[9]*=m,p[10]*=m,p[11]*=m,p[12]*=m,p[13]*=m,p[14]*=m,p[15]*=m,this.elements=p.slice(),!0},toString:function(){for(var e="",t=0;t<15;t++)e+=this.elements[t]+", "
return e+=this.elements[15]},print:function(){var e=printMatrixHelper(this.elements),t=n.nfs(this.elements[0],e,4)+" "+n.nfs(this.elements[1],e,4)+" "+n.nfs(this.elements[2],e,4)+" "+n.nfs(this.elements[3],e,4)+"\n"+n.nfs(this.elements[4],e,4)+" "+n.nfs(this.elements[5],e,4)+" "+n.nfs(this.elements[6],e,4)+" "+n.nfs(this.elements[7],e,4)+"\n"+n.nfs(this.elements[8],e,4)+" "+n.nfs(this.elements[9],e,4)+" "+n.nfs(this.elements[10],e,4)+" "+n.nfs(this.elements[11],e,4)+"\n"+n.nfs(this.elements[12],e,4)+" "+n.nfs(this.elements[13],e,4)+" "+n.nfs(this.elements[14],e,4)+" "+n.nfs(this.elements[15],e,4)+"\n\n"
n.println(t)},invTranslate:function(e,t,n){this.preApply(1,0,0,-e,0,1,0,-t,0,0,1,-n,0,0,0,1)},invRotateX:function(e){var t=Math.cos(-e),n=Math.sin(-e)
this.preApply([1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1])},invRotateY:function(e){var t=Math.cos(-e),n=Math.sin(-e)
this.preApply([t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1])},invRotateZ:function(e){var t=Math.cos(-e),n=Math.sin(-e)
this.preApply([t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1])},invScale:function(e,t,n){this.preApply([1/e,0,0,0,0,1/t,0,0,0,0,1/n,0,0,0,0,1])}},r}},{}],16:[function(e,t,n){t.exports=function(e){var t=e.PConstants,n=e.PMatrix2D,r=e.PMatrix3D,i=function(e){this.family=e||t.GROUP,this.visible=!0,this.style=!0,this.children=[],this.nameTable=[],this.params=[],this.name="",this.image=null,this.matrix=null,this.kind=null,this.close=null,this.width=null,this.height=null,this.parent=null}
return i.prototype={isVisible:function(){return this.visible},setVisible:function(e){this.visible=e},disableStyle:function(){this.style=!1
for(var e=0,t=this.children.length;e<t;e++)this.children[e].disableStyle()},enableStyle:function(){this.style=!0
for(var e=0,t=this.children.length;e<t;e++)this.children[e].enableStyle()},getFamily:function(){return this.family},getWidth:function(){return this.width},getHeight:function(){return this.height},setName:function(e){this.name=e},getName:function(){return this.name},draw:function(e){if(!e)throw"render context missing for draw() in PShape"
this.visible&&(this.pre(e),this.drawImpl(e),this.post(e))},drawImpl:function(e){this.family===t.GROUP?this.drawGroup(e):this.family===t.PRIMITIVE?this.drawPrimitive(e):this.family===t.GEOMETRY?this.drawGeometry(e):this.family===t.PATH&&this.drawPath(e)},drawPath:function(e){var n,r
if(0!==this.vertices.length){if(e.beginShape(),0===this.vertexCodes.length)if(2===this.vertices[0].length)for(n=0,r=this.vertices.length;n<r;n++)e.vertex(this.vertices[n][0],this.vertices[n][1])
else for(n=0,r=this.vertices.length;n<r;n++)e.vertex(this.vertices[n][0],this.vertices[n][1],this.vertices[n][2])
else{var i=0
if(2===this.vertices[0].length)for(n=0,r=this.vertexCodes.length;n<r;n++)this.vertexCodes[n]===t.VERTEX?(e.vertex(this.vertices[i][0],this.vertices[i][1],this.vertices[i].moveTo),e.breakShape=!1,i++):this.vertexCodes[n]===t.BEZIER_VERTEX?(e.bezierVertex(this.vertices[i+0][0],this.vertices[i+0][1],this.vertices[i+1][0],this.vertices[i+1][1],this.vertices[i+2][0],this.vertices[i+2][1]),i+=3):this.vertexCodes[n]===t.CURVE_VERTEX?(e.curveVertex(this.vertices[i][0],this.vertices[i][1]),i++):this.vertexCodes[n]===t.BREAK&&(e.breakShape=!0)
else for(n=0,r=this.vertexCodes.length;n<r;n++)this.vertexCodes[n]===t.VERTEX?(e.vertex(this.vertices[i][0],this.vertices[i][1],this.vertices[i][2]),!0===this.vertices[i].moveTo?vertArray[vertArray.length-1].moveTo=!0:!1===this.vertices[i].moveTo&&(vertArray[vertArray.length-1].moveTo=!1),e.breakShape=!1):this.vertexCodes[n]===t.BEZIER_VERTEX?(e.bezierVertex(this.vertices[i+0][0],this.vertices[i+0][1],this.vertices[i+0][2],this.vertices[i+1][0],this.vertices[i+1][1],this.vertices[i+1][2],this.vertices[i+2][0],this.vertices[i+2][1],this.vertices[i+2][2]),i+=3):this.vertexCodes[n]===t.CURVE_VERTEX?(e.curveVertex(this.vertices[i][0],this.vertices[i][1],this.vertices[i][2]),i++):this.vertexCodes[n]===t.BREAK&&(e.breakShape=!0)}e.endShape(this.close?t.CLOSE:t.OPEN)}},drawGeometry:function(e){var t,n
if(e.beginShape(this.kind),this.style)for(t=0,n=this.vertices.length;t<n;t++)e.vertex(this.vertices[t])
else for(t=0,n=this.vertices.length;t<n;t++){var r=this.vertices[t]
0===r[2]?e.vertex(r[0],r[1]):e.vertex(r[0],r[1],r[2])}e.endShape()},drawGroup:function(e){for(var t=0,n=this.children.length;t<n;t++)this.children[t].draw(e)},drawPrimitive:function(e){if(this.kind===t.POINT)e.point(this.params[0],this.params[1])
else if(this.kind===t.LINE)4===this.params.length?e.line(this.params[0],this.params[1],this.params[2],this.params[3]):e.line(this.params[0],this.params[1],this.params[2],this.params[3],this.params[4],this.params[5])
else if(this.kind===t.TRIANGLE)e.triangle(this.params[0],this.params[1],this.params[2],this.params[3],this.params[4],this.params[5])
else if(this.kind===t.QUAD)e.quad(this.params[0],this.params[1],this.params[2],this.params[3],this.params[4],this.params[5],this.params[6],this.params[7])
else if(this.kind===t.RECT)if(null!==this.image){var n=imageModeConvert
e.imageMode(t.CORNER),e.image(this.image,this.params[0],this.params[1],this.params[2],this.params[3]),imageModeConvert=n}else{var r=e.curRectMode
e.rectMode(t.CORNER),e.rect(this.params[0],this.params[1],this.params[2],this.params[3]),e.curRectMode=r}else if(this.kind===t.ELLIPSE){var i=e.curEllipseMode
e.ellipseMode(t.CORNER),e.ellipse(this.params[0],this.params[1],this.params[2],this.params[3]),e.curEllipseMode=i}else if(this.kind===t.ARC){var s=curEllipseMode
e.ellipseMode(t.CORNER),e.arc(this.params[0],this.params[1],this.params[2],this.params[3],this.params[4],this.params[5]),curEllipseMode=s}else this.kind===t.BOX?1===this.params.length?e.box(this.params[0]):e.box(this.params[0],this.params[1],this.params[2]):this.kind===t.SPHERE&&e.sphere(this.params[0])},pre:function(e){this.matrix&&(e.pushMatrix(),e.transform(this.matrix)),this.style&&(e.pushStyle(),this.styles(e))},post:function(e){this.matrix&&e.popMatrix(),this.style&&e.popStyle()},styles:function(e){this.stroke?(e.stroke(this.strokeColor),e.strokeWeight(this.strokeWeight),e.strokeCap(this.strokeCap),e.strokeJoin(this.strokeJoin)):e.noStroke(),this.fill?e.fill(this.fillColor):e.noFill()},getChild:function(e){var t,n
if("number"==typeof e)return this.children[e]
var r
if(""===e||this.name===e)return this
if(this.nameTable.length>0){for(t=0,n=this.nameTable.length;t<n||r;t++)if(this.nameTable[t].getName===e){r=this.nameTable[t]
break}if(r)return r}for(t=0,n=this.children.length;t<n;t++)if(r=this.children[t].getChild(e))return r
return null},getChildCount:function(){return this.children.length},addChild:function(e){this.children.push(e),e.parent=this,null!==e.getName()&&this.addName(e.getName(),e)},addName:function(e,t){null!==this.parent?this.parent.addName(e,t):this.nameTable.push([e,t])},translate:function(){2===arguments.length?(this.checkMatrix(2),this.matrix.translate(arguments[0],arguments[1])):(this.checkMatrix(3),this.matrix.translate(arguments[0],arguments[1],0))},checkMatrix:function(e){null===this.matrix?this.matrix=2===e?new n:new r:3===e&&this.matrix instanceof n&&(this.matrix=new r)},rotateX:function(e){this.rotate(e,1,0,0)},rotateY:function(e){this.rotate(e,0,1,0)},rotateZ:function(e){this.rotate(e,0,0,1)},rotate:function(){1===arguments.length?(this.checkMatrix(2),this.matrix.rotate(arguments[0])):(this.checkMatrix(3),this.matrix.rotate(arguments[0],arguments[1],arguments[2],arguments[3]))},scale:function(){2===arguments.length?(this.checkMatrix(2),this.matrix.scale(arguments[0],arguments[1])):3===arguments.length?(this.checkMatrix(2),this.matrix.scale(arguments[0],arguments[1],arguments[2])):(this.checkMatrix(2),this.matrix.scale(arguments[0]))},resetMatrix:function(){this.checkMatrix(2),this.matrix.reset()},applyMatrix:function(e){1===arguments.length?this.applyMatrix(e.elements[0],e.elements[1],0,e.elements[2],e.elements[3],e.elements[4],0,e.elements[5],0,0,1,0,0,0,0,1):6===arguments.length?(this.checkMatrix(2),this.matrix.apply(arguments[0],arguments[1],arguments[2],0,arguments[3],arguments[4],arguments[5],0,0,0,1,0,0,0,0,1)):16===arguments.length&&(this.checkMatrix(3),this.matrix.apply(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5],arguments[6],arguments[7],arguments[8],arguments[9],arguments[10],arguments[11],arguments[12],arguments[13],arguments[14],arguments[15]))}},i}},{}],17:[function(e,t,n){t.exports=function(e){var t=e.CommonFunctions,n=e.PConstants,r=e.PShape,i=e.XMLElement,s=e.colors,o=function(){if(r.call(this),1===arguments.length){if(this.element=arguments[0],this.vertexCodes=[],this.vertices=[],this.opacity=1,this.stroke=!1,this.strokeColor=n.ALPHA_MASK,this.strokeWeight=1,this.strokeCap=n.SQUARE,this.strokeJoin=n.MITER,this.strokeGradient=null,this.strokeGradientPaint=null,this.strokeName=null,this.strokeOpacity=1,this.fill=!0,this.fillColor=n.ALPHA_MASK,this.fillGradient=null,this.fillGradientPaint=null,this.fillName=null,this.fillOpacity=1,"svg"!==this.element.getName())throw"root is not <svg>, it's <"+this.element.getName()+">"}else 2===arguments.length&&("string"==typeof arguments[1]?arguments[1].indexOf(".svg")>-1&&(this.element=new i(!0,arguments[1]),this.vertexCodes=[],this.vertices=[],this.opacity=1,this.stroke=!1,this.strokeColor=n.ALPHA_MASK,this.strokeWeight=1,this.strokeCap=n.SQUARE,this.strokeJoin=n.MITER,this.strokeGradient="",this.strokeGradientPaint="",this.strokeName="",this.strokeOpacity=1,this.fill=!0,this.fillColor=n.ALPHA_MASK,this.fillGradient=null,this.fillGradientPaint=null,this.fillOpacity=1):arguments[0]&&(this.element=arguments[1],this.vertexCodes=arguments[0].vertexCodes.slice(),this.vertices=arguments[0].vertices.slice(),this.stroke=arguments[0].stroke,this.strokeColor=arguments[0].strokeColor,this.strokeWeight=arguments[0].strokeWeight,this.strokeCap=arguments[0].strokeCap,this.strokeJoin=arguments[0].strokeJoin,this.strokeGradient=arguments[0].strokeGradient,this.strokeGradientPaint=arguments[0].strokeGradientPaint,this.strokeName=arguments[0].strokeName,this.fill=arguments[0].fill,this.fillColor=arguments[0].fillColor,this.fillGradient=arguments[0].fillGradient,this.fillGradientPaint=arguments[0].fillGradientPaint,this.fillName=arguments[0].fillName,this.strokeOpacity=arguments[0].strokeOpacity,this.fillOpacity=arguments[0].fillOpacity,this.opacity=arguments[0].opacity))
this.name=this.element.getStringAttribute("id")
var e=this.element.getStringAttribute("display","inline")
this.visible="none"!==e
var t=this.element.getAttribute("transform")
t&&(this.matrix=this.parseMatrix(t))
var s=this.element.getStringAttribute("viewBox")
if(null!==s){var o=s.split(" ")
this.width=o[2],this.height=o[3]}var a=this.element.getStringAttribute("width"),l=this.element.getStringAttribute("height")
if(null!==a)this.width=this.parseUnitSize(a),this.height=this.parseUnitSize(l)
else if(0===this.width||0===this.height)throw this.width=1,this.height=1,"The width and/or height is not readable in the <svg> tag of this file."
this.parseColors(this.element),this.parseChildren(this.element)}
return o.prototype=new r,o.prototype.parseMatrix=function(){function e(e){var t=[]
return e.replace(/\((.*?)\)/,function(){return function(e,n){t=n.replace(/,+/g," ").split(/\s+/)}}()),t}return function(n){this.checkMatrix(2)
var r=[]
if(n.replace(/\s*(\w+)\((.*?)\)/g,function(e){r.push(t.trim(e))}),0===r.length)return null
for(var i=0,s=r.length;i<s;i++){var o=e(r[i])
if(-1!==r[i].indexOf("matrix"))this.matrix.set(o[0],o[2],o[4],o[1],o[3],o[5])
else if(-1!==r[i].indexOf("translate")){var a=o[0],l=2===o.length?o[1]:0
this.matrix.translate(a,l)}else if(-1!==r[i].indexOf("scale")){var h=o[0],u=2===o.length?o[1]:o[0]
this.matrix.scale(h,u)}else if(-1!==r[i].indexOf("rotate")){var c=o[0]
1===o.length?this.matrix.rotate(t.radians(c)):3===o.length&&(this.matrix.translate(o[1],o[2]),this.matrix.rotate(t.radians(o[0])),this.matrix.translate(-o[1],-o[2]))}else-1!==r[i].indexOf("skewX")?this.matrix.skewX(parseFloat(o[0])):-1!==r[i].indexOf("skewY")?this.matrix.skewY(o[0]):-1!==r[i].indexOf("shearX")?this.matrix.shearX(o[0]):-1!==r[i].indexOf("shearY")&&this.matrix.shearY(o[0])}return this.matrix}}(),o.prototype.parseChildren=function(e){var t,n,i=e.getChildren(),s=new r
for(t=0,n=i.length;t<n;t++){var o=this.parseChild(i[t])
o&&s.addChild(o)}for(t=0,n=s.children.length;t<n;t++)this.children.push(s.children[t])},o.prototype.getName=function(){return this.name},o.prototype.parseChild=function(e){var t,n=e.getName()
return"g"===n?t=new o(this,e):"defs"===n?t=new o(this,e):"line"===n?(t=new o(this,e),t.parseLine()):"circle"===n?(t=new o(this,e),t.parseEllipse(!0)):"ellipse"===n?(t=new o(this,e),t.parseEllipse(!1)):"rect"===n?(t=new o(this,e),t.parseRect()):"polygon"===n?(t=new o(this,e),t.parsePoly(!0)):"polyline"===n?(t=new o(this,e),t.parsePoly(!1)):"path"===n?(t=new o(this,e),t.parsePath()):"radialGradient"===n?unimplemented("PShapeSVG.prototype.parseChild, name = radialGradient"):"linearGradient"===n?unimplemented("PShapeSVG.prototype.parseChild, name = linearGradient"):"text"===n?unimplemented("PShapeSVG.prototype.parseChild, name = text"):"filter"===n?unimplemented("PShapeSVG.prototype.parseChild, name = filter"):"mask"===n&&unimplemented("PShapeSVG.prototype.parseChild, name = mask"),t},o.prototype.parsePath=function(){this.family=n.PATH,this.kind=0
var e=t.trim(this.element.getStringAttribute("d").replace(/[\s,]+/g," "))
if(null!==e){e=e.split("")
for(var r,i,s,o,a=0,l=0,h=0,u=0,c=0,f=0,p=0,m=0,g=0,d=0,v=0,y=0,b=0,A=0,x=0,w=0,E="",S=[],P=!1;x<e.length;)if((w=e[x].charCodeAt(0))>=65&&w<=90||w>=97&&w<=122){if(s=x,++x<e.length)for(S=[],w=e[x].charCodeAt(0);!(w>=65&&w<=90||w>=97&&w<=100||w>=102&&w<=122)&&!1===P;)32===w?(""!==E&&(S.push(parseFloat(E)),E=""),x++):45===w?101===e[x-1].charCodeAt(0)?(E+=e[x].toString(),x++):(""!==E&&S.push(parseFloat(E)),E=e[x].toString(),x++):(E+=e[x].toString(),x++),x===e.length?P=!0:w=e[x].charCodeAt(0)
if(""!==E&&(S.push(parseFloat(E)),E=""),i=e[s],77===(w=i.charCodeAt(0))){if(S.length>=2&&S.length%2==0&&(a=S[0],l=S[1],this.parsePathMoveto(a,l),S.length>2))for(s=2,o=S.length;s<o;s+=2)a=S[s],l=S[s+1],this.parsePathLineto(a,l)}else if(109===w){if(S.length>=2&&S.length%2==0&&(a+=S[0],l+=S[1],this.parsePathMoveto(a,l),S.length>2))for(s=2,o=S.length;s<o;s+=2)a+=S[s],l+=S[s+1],this.parsePathLineto(a,l)}else if(76===w){if(S.length>=2&&S.length%2==0)for(s=0,o=S.length;s<o;s+=2)a=S[s],l=S[s+1],this.parsePathLineto(a,l)}else if(108===w){if(S.length>=2&&S.length%2==0)for(s=0,o=S.length;s<o;s+=2)a+=S[s],l+=S[s+1],this.parsePathLineto(a,l)}else if(72===w)for(s=0,o=S.length;s<o;s++)a=S[s],this.parsePathLineto(a,l)
else if(104===w)for(s=0,o=S.length;s<o;s++)a+=S[s],this.parsePathLineto(a,l)
else if(86===w)for(s=0,o=S.length;s<o;s++)l=S[s],this.parsePathLineto(a,l)
else if(118===w)for(s=0,o=S.length;s<o;s++)l+=S[s],this.parsePathLineto(a,l)
else if(67===w){if(S.length>=6&&S.length%6==0)for(s=0,o=S.length;s<o;s+=6)c=S[s],p=S[s+1],f=S[s+2],m=S[s+3],g=S[s+4],d=S[s+5],this.parsePathCurveto(c,p,f,m,g,d),a=g,l=d}else if(99===w){if(S.length>=6&&S.length%6==0)for(s=0,o=S.length;s<o;s+=6)c=a+S[s],p=l+S[s+1],f=a+S[s+2],m=l+S[s+3],g=a+S[s+4],d=l+S[s+5],this.parsePathCurveto(c,p,f,m,g,d),a=g,l=d}else if(83===w){if(S.length>=4&&S.length%4==0)for(s=0,o=S.length;s<o;s+=4)"c"===r.toLowerCase()||"s"===r.toLowerCase()?(v=this.vertices[this.vertices.length-2][0],y=this.vertices[this.vertices.length-2][1],b=this.vertices[this.vertices.length-1][0],A=this.vertices[this.vertices.length-1][1],c=b+(b-v),p=A+(A-y)):(c=this.vertices[this.vertices.length-1][0],p=this.vertices[this.vertices.length-1][1]),f=S[s],m=S[s+1],g=S[s+2],d=S[s+3],this.parsePathCurveto(c,p,f,m,g,d),a=g,l=d}else if(115===w){if(S.length>=4&&S.length%4==0)for(s=0,o=S.length;s<o;s+=4)"c"===r.toLowerCase()||"s"===r.toLowerCase()?(v=this.vertices[this.vertices.length-2][0],y=this.vertices[this.vertices.length-2][1],b=this.vertices[this.vertices.length-1][0],A=this.vertices[this.vertices.length-1][1],c=b+(b-v),p=A+(A-y)):(c=this.vertices[this.vertices.length-1][0],p=this.vertices[this.vertices.length-1][1]),f=a+S[s],m=l+S[s+1],g=a+S[s+2],d=l+S[s+3],this.parsePathCurveto(c,p,f,m,g,d),a=g,l=d}else if(81===w){if(S.length>=4&&S.length%4==0)for(s=0,o=S.length;s<o;s+=4)h=S[s],u=S[s+1],g=S[s+2],d=S[s+3],this.parsePathQuadto(a,l,h,u,g,d),a=g,l=d}else if(113===w){if(S.length>=4&&S.length%4==0)for(s=0,o=S.length;s<o;s+=4)h=a+S[s],u=l+S[s+1],g=a+S[s+2],d=l+S[s+3],this.parsePathQuadto(a,l,h,u,g,d),a=g,l=d}else if(84===w){if(S.length>=2&&S.length%2==0)for(s=0,o=S.length;s<o;s+=2)"q"===r.toLowerCase()||"t"===r.toLowerCase()?(v=this.vertices[this.vertices.length-2][0],y=this.vertices[this.vertices.length-2][1],b=this.vertices[this.vertices.length-1][0],A=this.vertices[this.vertices.length-1][1],h=b+(b-v),u=A+(A-y)):(h=a,u=l),g=S[s],d=S[s+1],this.parsePathQuadto(a,l,h,u,g,d),a=g,l=d}else if(116===w){if(S.length>=2&&S.length%2==0)for(s=0,o=S.length;s<o;s+=2)"q"===r.toLowerCase()||"t"===r.toLowerCase()?(v=this.vertices[this.vertices.length-2][0],y=this.vertices[this.vertices.length-2][1],b=this.vertices[this.vertices.length-1][0],A=this.vertices[this.vertices.length-1][1],h=b+(b-v),u=A+(A-y)):(h=a,u=l),g=a+S[s],d=l+S[s+1],this.parsePathQuadto(a,l,h,u,g,d),a=g,l=d}else 90!==w&&122!==w||(this.close=!0)
r=i.toString()}else x++}},o.prototype.parsePathQuadto=function(e,t,r,i,s,o){if(!(this.vertices.length>0))throw"Path must start with M/m"
this.parsePathCode(n.BEZIER_VERTEX),this.parsePathVertex(e+2*(r-e)/3,t+2*(i-t)/3),this.parsePathVertex(s+2*(r-s)/3,o+2*(i-o)/3),this.parsePathVertex(s,o)},o.prototype.parsePathCurveto=function(e,t,r,i,s,o){if(!(this.vertices.length>0))throw"Path must start with M/m"
this.parsePathCode(n.BEZIER_VERTEX),this.parsePathVertex(e,t),this.parsePathVertex(r,i),this.parsePathVertex(s,o)},o.prototype.parsePathLineto=function(e,t){if(!(this.vertices.length>0))throw"Path must start with M/m"
this.parsePathCode(n.VERTEX),this.parsePathVertex(e,t),this.vertices[this.vertices.length-1].moveTo=!1},o.prototype.parsePathMoveto=function(e,t){this.vertices.length>0&&this.parsePathCode(n.BREAK),this.parsePathCode(n.VERTEX),this.parsePathVertex(e,t),this.vertices[this.vertices.length-1].moveTo=!0},o.prototype.parsePathVertex=function(e,t){var n=[]
n[0]=e,n[1]=t,this.vertices.push(n)},o.prototype.parsePathCode=function(e){this.vertexCodes.push(e)},o.prototype.parsePoly=function(e){this.family=n.PATH,this.close=e
var r=t.trim(this.element.getStringAttribute("points").replace(/[,\s]+/g," "))
if(null!==r){var i=r.split(" ")
if(i.length%2!=0)throw"Error parsing polygon points: odd number of coordinates provided"
for(var s=0,o=i.length;s<o;s++){var a=[]
a[0]=i[s],a[1]=i[++s],this.vertices.push(a)}}},o.prototype.parseRect=function(){if(this.kind=n.RECT,this.family=n.PRIMITIVE,this.params=[],this.params[0]=this.element.getFloatAttribute("x"),this.params[1]=this.element.getFloatAttribute("y"),this.params[2]=this.element.getFloatAttribute("width"),this.params[3]=this.element.getFloatAttribute("height"),this.params[2]<0||this.params[3]<0)throw"svg error: negative width or height found while parsing <rect>"},o.prototype.parseEllipse=function(e){this.kind=n.ELLIPSE,this.family=n.PRIMITIVE,this.params=[],this.params[0]=0|this.element.getFloatAttribute("cx"),this.params[1]=0|this.element.getFloatAttribute("cy")
var t,r
if(e){if((t=r=this.element.getFloatAttribute("r"))<0)throw"svg error: negative radius found while parsing <circle>"}else if(t=this.element.getFloatAttribute("rx"),r=this.element.getFloatAttribute("ry"),t<0||r<0)throw"svg error: negative x-axis radius or y-axis radius found while parsing <ellipse>"
this.params[0]-=t,this.params[1]-=r,this.params[2]=2*t,this.params[3]=2*r},o.prototype.parseLine=function(){this.kind=n.LINE,this.family=n.PRIMITIVE,this.params=[],this.params[0]=this.element.getFloatAttribute("x1"),this.params[1]=this.element.getFloatAttribute("y1"),this.params[2]=this.element.getFloatAttribute("x2"),this.params[3]=this.element.getFloatAttribute("y2")},o.prototype.parseColors=function(e){if(e.hasAttribute("opacity")&&this.setOpacity(e.getAttribute("opacity")),e.hasAttribute("stroke")&&this.setStroke(e.getAttribute("stroke")),e.hasAttribute("stroke-width")&&this.setStrokeWeight(e.getAttribute("stroke-width")),e.hasAttribute("stroke-linejoin")&&this.setStrokeJoin(e.getAttribute("stroke-linejoin")),e.hasAttribute("stroke-linecap")&&this.setStrokeCap(e.getStringAttribute("stroke-linecap")),e.hasAttribute("fill")&&this.setFill(e.getStringAttribute("fill")),e.hasAttribute("style"))for(var n=e.getStringAttribute("style"),r=n.toString().split(";"),i=0,s=r.length;i<s;i++){var o=t.trim(r[i].split(":"))
"fill"===o[0]?this.setFill(o[1]):"fill-opacity"===o[0]?this.setFillOpacity(o[1]):"stroke"===o[0]?this.setStroke(o[1]):"stroke-width"===o[0]?this.setStrokeWeight(o[1]):"stroke-linecap"===o[0]?this.setStrokeCap(o[1]):"stroke-linejoin"===o[0]?this.setStrokeJoin(o[1]):"stroke-opacity"===o[0]?this.setStrokeOpacity(o[1]):"opacity"===o[0]&&this.setOpacity(o[1])}},o.prototype.setFillOpacity=function(e){this.fillOpacity=parseFloat(e),this.fillColor=255*this.fillOpacity<<24|16777215&this.fillColor},o.prototype.setFill=function(e){var t=4278190080&this.fillColor
"none"===e?this.fill=!1:0===e.indexOf("#")?(this.fill=!0,4===e.length&&(e=e.replace(/#(.)(.)(.)/,"#$1$1$2$2$3$3")),this.fillColor=t|16777215&parseInt(e.substring(1),16)):0===e.indexOf("rgb")?(this.fill=!0,this.fillColor=t|this.parseRGB(e)):0===e.indexOf("url(#")?this.fillName=e.substring(5,e.length-1):s[e]&&(this.fill=!0,this.fillColor=t|16777215&parseInt(s[e].substring(1),16))},o.prototype.setOpacity=function(e){this.strokeColor=255*parseFloat(e)<<24|16777215&this.strokeColor,this.fillColor=255*parseFloat(e)<<24|16777215&this.fillColor},o.prototype.setStroke=function(e){var t=4278190080&this.strokeColor
"none"===e?this.stroke=!1:"#"===e.charAt(0)?(this.stroke=!0,4===e.length&&(e=e.replace(/#(.)(.)(.)/,"#$1$1$2$2$3$3")),this.strokeColor=t|16777215&parseInt(e.substring(1),16)):0===e.indexOf("rgb")?(this.stroke=!0,this.strokeColor=t|this.parseRGB(e)):0===e.indexOf("url(#")?this.strokeName=e.substring(5,e.length-1):s[e]&&(this.stroke=!0,this.strokeColor=t|16777215&parseInt(s[e].substring(1),16))},o.prototype.setStrokeWeight=function(e){this.strokeWeight=this.parseUnitSize(e)},o.prototype.setStrokeJoin=function(e){"miter"===e?this.strokeJoin=n.MITER:"round"===e?this.strokeJoin=n.ROUND:"bevel"===e&&(this.strokeJoin=n.BEVEL)},o.prototype.setStrokeCap=function(e){"butt"===e?this.strokeCap=n.SQUARE:"round"===e?this.strokeCap=n.ROUND:"square"===e&&(this.strokeCap=n.PROJECT)},o.prototype.setStrokeOpacity=function(e){this.strokeOpacity=parseFloat(e),this.strokeColor=255*this.strokeOpacity<<24|16777215&this.strokeColor},o.prototype.parseRGB=function(e){var t=e.substring(e.indexOf("(")+1,e.indexOf(")")),n=t.split(", ")
return n[0]<<16|n[1]<<8|n[2]},o.prototype.parseUnitSize=function(e){var t=e.length-2
return t<0?e:e.indexOf("pt")===t?1.25*parseFloat(e.substring(0,t)):e.indexOf("pc")===t?15*parseFloat(e.substring(0,t)):e.indexOf("mm")===t?3.543307*parseFloat(e.substring(0,t)):e.indexOf("cm")===t?35.43307*parseFloat(e.substring(0,t)):e.indexOf("in")===t?90*parseFloat(e.substring(0,t)):e.indexOf("px")===t?parseFloat(e.substring(0,t)):parseFloat(e)},o}},{}],18:[function(e,t,n){t.exports=function(e,t){function n(e,t,n){this.x=e||0,this.y=t||0,this.z=n||0}var r=e.PConstants
n.fromAngle=function(e,r){return r!==t&&null!==r||(r=new n),r.x=Math.cos(e),r.y=Math.sin(e),r},n.random2D=function(e){return n.fromAngle(Math.random()*r.TWO_PI,e)},n.random3D=function(e){var i=Math.random()*r.TWO_PI,s=2*Math.random()-1,o=Math.sqrt(1-s*s),a=o*Math.cos(i),l=o*Math.sin(i)
return e===t||null===e?e=new n(a,l,s):e.set(a,l,s),e},n.dist=function(e,t){return e.dist(t)},n.dot=function(e,t){return e.dot(t)},n.cross=function(e,t){return e.cross(t)},n.sub=function(e,t){return new n(e.x-t.x,e.y-t.y,e.z-t.z)},n.angleBetween=function(e,t){return Math.acos(e.dot(t)/Math.sqrt(e.magSq()*t.magSq()))},n.lerp=function(e,t,r){var i=new n(e.x,e.y,e.z)
return i.lerp(t,r),i},n.prototype={set:function(e,t,n){1===arguments.length?this.set(e.x||e[0]||0,e.y||e[1]||0,e.z||e[2]||0):(this.x=e,this.y=t,this.z=n)},get:function(){return new n(this.x,this.y,this.z)},mag:function(){var e=this.x,t=this.y,n=this.z
return Math.sqrt(e*e+t*t+n*n)},magSq:function(){var e=this.x,t=this.y,n=this.z
return e*e+t*t+n*n},setMag:function(e,n){if(n!==t){var r=e
return r.normalize(),r.mult(n),r}n=e,this.normalize(),this.mult(n)},add:function(e,t,n){1===arguments.length?(this.x+=e.x,this.y+=e.y,this.z+=e.z):2===arguments.length?(this.x+=e,this.y+=t):(this.x+=e,this.y+=t,this.z+=n)},sub:function(e,t,n){1===arguments.length?(this.x-=e.x,this.y-=e.y,this.z-=e.z):2===arguments.length?(this.x-=e,this.y-=t):(this.x-=e,this.y-=t,this.z-=n)},mult:function(e){"number"==typeof e?(this.x*=e,this.y*=e,this.z*=e):(this.x*=e.x,this.y*=e.y,this.z*=e.z)},div:function(e){"number"==typeof e?(this.x/=e,this.y/=e,this.z/=e):(this.x/=e.x,this.y/=e.y,this.z/=e.z)},rotate:function(e){var t=this.x,n=Math.cos(e),r=Math.sin(e)
this.x=n*this.x-r*this.y,this.y=r*t+n*this.y},dist:function(e){var t=this.x-e.x,n=this.y-e.y,r=this.z-e.z
return Math.sqrt(t*t+n*n+r*r)},dot:function(e,t,n){return 1===arguments.length?this.x*e.x+this.y*e.y+this.z*e.z:this.x*e+this.y*t+this.z*n},cross:function(e){var t=this.x,r=this.y,i=this.z
return new n(r*e.z-e.y*i,i*e.x-e.z*t,t*e.y-e.x*r)},lerp:function(e,t,n,r){var i,s,o=function(e,t,n){return e+(t-e)*n}
2===arguments.length?(r=t,i=e.x,s=e.y,n=e.z):(i=e,s=t),this.x=o(this.x,i,r),this.y=o(this.y,s,r),this.z=o(this.z,n,r)},normalize:function(){var e=this.mag()
e>0&&this.div(e)},limit:function(e){this.mag()>e&&(this.normalize(),this.mult(e))},heading:function(){return-Math.atan2(-this.y,this.x)},heading2D:function(){return this.heading()},toString:function(){return"["+this.x+", "+this.y+", "+this.z+"]"},array:function(){return[this.x,this.y,this.z]}}
for(var i in n.prototype)n.prototype.hasOwnProperty(i)&&!n.hasOwnProperty(i)&&(n[i]=function(e){return function(t,n){var r=t.get()
return r[e](n),r}}(i))
return n}},{}],19:[function(e,t,n){t.exports=function(){var e=function(e,t,n,r,i){this.fullName=e||"",this.name=t||"",this.namespace=n||"",this.value=r,this.type=i}
return e.prototype={getName:function(){return this.name},getFullName:function(){return this.fullName},getNamespace:function(){return this.namespace},getValue:function(){return this.value},getType:function(){return this.type},setValue:function(e){this.value=e}},e}},{}],20:[function(e,t,n){t.exports=function(e,t){var n=e.Browser,r=n.ajax,i=n.window,s=(i.XMLHttpRequest,i.DOMParser),o=e.XMLAttribute,a=function(e,n,r,i){this.attributes=[],this.children=[],this.fullName=null,this.name=null,this.namespace="",this.content=null,this.parent=null,this.lineNr="",this.systemID="",this.type="ELEMENT",e&&("string"==typeof e?n===t&&e.indexOf("<")>-1?this.parse(e):(this.fullName=e,this.namespace=n,this.systemId=r,this.lineNr=i):this.parse(n,!0))}
return a.prototype={parse:function(e,t){var n
try{t&&(e=r(e)),n=(new s).parseFromString(e,"text/xml")
var i=n.documentElement
if(!i)throw"Error loading document"
return this.parseChildrenRecursive(null,i),this}catch(e){throw e}},parseChildrenRecursive:function(e,t){var n,r,i,s,l,h
if(e?(n=new a(t.nodeName),n.parent=e):(this.fullName=t.localName,this.name=t.nodeName,n=this),3===t.nodeType&&""!==t.textContent)return this.createPCDataElement(t.textContent)
if(4===t.nodeType)return this.createCDataElement(t.textContent)
if(t.attributes)for(s=0,l=t.attributes.length;s<l;s++)i=t.attributes[s],r=new o(i.getname,i.nodeName,i.namespaceURI,i.nodeValue,i.nodeType),n.attributes.push(r)
if(t.childNodes)for(s=0,l=t.childNodes.length;s<l;s++){var u=t.childNodes[s]
h=n.parseChildrenRecursive(n,u),null!==h&&n.children.push(h)}return n},createElement:function(e,n,r,i){return r===t?new a(e,n):new a(e,n,r,i)},createPCDataElement:function(e,t){if(""===e.replace(/^\s+$/g,""))return null
var n=new a
return n.type="TEXT",n.content=e,n},createCDataElement:function(e){var t=this.createPCDataElement(e)
if(null===t)return null
t.type="CDATA"
var n,r={"<":"&lt;",">":"&gt;","'":"&apos;",'"':"&quot;"}
for(n in r)Object.hasOwnProperty(r,n)||(e=e.replace(new RegExp(n,"g"),r[n]))
return t.cdata=e,t},hasAttribute:function(){return 1===arguments.length?null!==this.getAttribute(arguments[0]):2===arguments.length?null!==this.getAttribute(arguments[0],arguments[1]):void 0},equals:function(e){if(!(e instanceof a))return!1
var t,n
if(this.fullName!==e.fullName)return!1
if(this.attributes.length!==e.getAttributeCount())return!1
if(this.attributes.length!==e.attributes.length)return!1
var r,i,s
for(t=0,n=this.attributes.length;t<n;t++){if(r=this.attributes[t].getName(),i=this.attributes[t].getNamespace(),null===(s=e.findAttribute(r,i)))return!1
if(this.attributes[t].getValue()!==s.getValue())return!1
if(this.attributes[t].getType()!==s.getType())return!1}if(this.children.length!==e.getChildCount())return!1
if(this.children.length>0){var o,l
for(t=0,n=this.children.length;t<n;t++)if(o=this.getChild(t),l=e.getChild(t),!o.equals(l))return!1
return!0}return this.content===e.content},getContent:function(){if("TEXT"===this.type||"CDATA"===this.type)return this.content
var e=this.children
return 1!==e.length||"TEXT"!==e[0].type&&"CDATA"!==e[0].type?null:e[0].content},getAttribute:function(){var e
return 2===arguments.length?(e=this.findAttribute(arguments[0]),e?e.getValue():arguments[1]):1===arguments.length?(e=this.findAttribute(arguments[0]),e?e.getValue():null):3===arguments.length?(e=this.findAttribute(arguments[0],arguments[1]),e?e.getValue():arguments[2]):void 0},getStringAttribute:function(){return 1===arguments.length?this.getAttribute(arguments[0]):2===arguments.length?this.getAttribute(arguments[0],arguments[1]):this.getAttribute(arguments[0],arguments[1],arguments[2])},getString:function(e){return this.getStringAttribute(e)},getFloatAttribute:function(){return 1===arguments.length?parseFloat(this.getAttribute(arguments[0],0)):2===arguments.length?this.getAttribute(arguments[0],arguments[1]):this.getAttribute(arguments[0],arguments[1],arguments[2])},getFloat:function(e){return this.getFloatAttribute(e)},getIntAttribute:function(){return 1===arguments.length?this.getAttribute(arguments[0],0):2===arguments.length?this.getAttribute(arguments[0],arguments[1]):this.getAttribute(arguments[0],arguments[1],arguments[2])},getInt:function(e){return this.getIntAttribute(e)},hasChildren:function(){return this.children.length>0},addChild:function(e){null!==e&&(e.parent=this,this.children.push(e))},insertChild:function(e,t){if(e){if(null===e.getLocalName()&&!this.hasChildren()){var n=this.children[this.children.length-1]
if(null===n.getLocalName())return void n.setContent(n.getContent()+e.getContent())}e.parent=this,this.children.splice(t,0,e)}},getChild:function(e){if("number"==typeof e)return this.children[e]
if(-1!==e.indexOf("/"))return this.getChildRecursive(e.split("/"),0)
for(var t,n,r=0,i=this.getChildCount();r<i;r++)if(t=this.getChild(r),null!==(n=t.getName())&&n===e)return t
return null},getChildren:function(){if(1===arguments.length){if("number"==typeof arguments[0])return this.getChild(arguments[0])
if(-1!==arguments[0].indexOf("/"))return this.getChildrenRecursive(arguments[0].split("/"),0)
for(var e,t,n=[],r=0,i=this.getChildCount();r<i;r++)e=this.getChild(r),null!==(t=e.getName())&&t===arguments[0]&&n.push(e)
return n}return this.children},getChildCount:function(){return this.children.length},getChildRecursive:function(e,t){if(t===e.length)return this
for(var n,r,i=e[t],s=0,o=this.getChildCount();s<o;s++)if(n=this.getChild(s),null!==(r=n.getName())&&r===i)return n.getChildRecursive(e,t+1)
return null},getChildrenRecursive:function(e,t){if(t===e.length-1)return this.getChildren(e[t])
for(var n=this.getChildren(e[t]),r=[],i=0;i<n.length;i++)r=r.concat(n[i].getChildrenRecursive(e,t+1))
return r},isLeaf:function(){return!this.hasChildren()},listChildren:function(){for(var e=[],t=0,n=this.children.length;t<n;t++)e.push(this.getChild(t).getName())
return e},removeAttribute:function(e,t){this.namespace=t||""
for(var n=0,r=this.attributes.length;n<r;n++)if(this.attributes[n].getName()===e&&this.attributes[n].getNamespace()===this.namespace){this.attributes.splice(n,1)
break}},removeChild:function(e){if(e)for(var t=0,n=this.children.length;t<n;t++)if(this.children[t].equals(e)){this.children.splice(t,1)
break}},removeChildAtIndex:function(e){this.children.length>e&&this.children.splice(e,1)},findAttribute:function(e,t){this.namespace=t||""
for(var n=0,r=this.attributes.length;n<r;n++)if(this.attributes[n].getName()===e&&this.attributes[n].getNamespace()===this.namespace)return this.attributes[n]
return null},setAttribute:function(){var e
if(3===arguments.length){var t=arguments[0].indexOf(":"),n=arguments[0].substring(t+1)
e=this.findAttribute(n,arguments[1]),e?e.setValue(arguments[2]):(e=new o(arguments[0],n,arguments[1],arguments[2],"CDATA"),this.attributes.push(e))}else e=this.findAttribute(arguments[0]),e?e.setValue(arguments[1]):(e=new o(arguments[0],arguments[0],null,arguments[1],"CDATA"),this.attributes.push(e))},setString:function(e,t){this.setAttribute(e,t)},setInt:function(e,t){this.setAttribute(e,t)},setFloat:function(e,t){this.setAttribute(e,t)},setContent:function(e){this.children.length>0&&Processing.debug("Tried to set content for XMLElement with children"),this.content=e},setName:function(){if(1===arguments.length)this.name=arguments[0],this.fullName=arguments[0],this.namespace=null
else{var e=arguments[0].indexOf(":")
null===arguments[1]||e<0?this.name=arguments[0]:this.name=arguments[0].substring(e+1),this.fullName=arguments[0],this.namespace=arguments[1]}},getName:function(){return this.fullName},getLocalName:function(){return this.name},getAttributeCount:function(){return this.attributes.length},toString:function(){if("TEXT"===this.type)return this.content||""
if("CDATA"===this.type)return this.cdata||""
var e,t,n=this.fullName,r="<"+n
for(e=0;e<this.attributes.length;e++){var i=this.attributes[e]
r+=" "+i.getName()+'="'+i.getValue()+'"'}if(0===this.children.length)""===this.content||null===this.content||void 0===this.content?r+="/>":r+=">"+this.content+"</"+n+">"
else{for(r+=">",t=0;t<this.children.length;t++)r+=this.children[t].toString()
r+="</"+n+">"}return r}},a.parse=function(e){var t=new a
return t.parse(e),t},a}},{}],21:[function(e,t,n){t.exports={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgrey:"#d3d3d3",lightgreen:"#90ee90",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370d8",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#d87093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"}},{}],22:[function(e,t,n){t.exports=function(e,t,n){return function(r,i){r.__contains=function(e,t){return"string"!=typeof e?e.contains.apply(e,i(arguments)):null!==e&&null!==t&&"string"==typeof t&&e.indexOf(t)>-1},r.__replaceAll=function(e,t,n){return"string"!=typeof e?e.replaceAll.apply(e,i(arguments)):e.replace(new RegExp(t,"g"),n)},r.__replaceFirst=function(e,t,n){return"string"!=typeof e?e.replaceFirst.apply(e,i(arguments)):e.replace(new RegExp(t,""),n)},r.__replace=function(e,t,n){if("string"!=typeof e)return e.replace.apply(e,i(arguments))
if(t instanceof RegExp)return e.replace(t,n)
if("string"!=typeof t&&(t=t.toString()),""===t)return e
var r=e.indexOf(t)
if(r<0)return e
var s=0,o=""
do{o+=e.substring(s,r)+n,s=r+t.length}while((r=e.indexOf(t,s))>=0)
return o+e.substring(s)},r.__equals=function(e,n){return e.equals instanceof Function?e.equals.apply(e,i(arguments)):t(e,n)},r.__equalsIgnoreCase=function(e,t){return"string"!=typeof e?e.equalsIgnoreCase.apply(e,i(arguments)):e.toLowerCase()===t.toLowerCase()},r.__toCharArray=function(e){if("string"!=typeof e)return e.toCharArray.apply(e,i(arguments))
for(var t=[],n=0,r=e.length;n<r;++n)t[n]=new Char(e.charAt(n))
return t},r.__split=function(e,t,r){if("string"!=typeof e)return e.split.apply(e,i(arguments))
var s=new RegExp(t)
if(r===n||r<1)return e.split(s)
for(var o,a=[],l=e;-1!==(o=l.search(s))&&a.length<r-1;){var h=s.exec(l).toString()
a.push(l.substring(0,o)),l=l.substring(o+h.length)}return-1===o&&""===l||a.push(l),a},r.__codePointAt=function(e,t){var n,r,i=e.charCodeAt(t)
return 55296<=i&&i<=56319?(n=i,r=e.charCodeAt(t+1),1024*(n-55296)+(r-56320)+65536):i},r.__matches=function(e,t){return new RegExp(t).test(e)},r.__startsWith=function(e,t,n){return"string"!=typeof e?e.startsWith.apply(e,i(arguments)):!((n=n||0)<0||n>e.length)&&(""===t||t===e||e.indexOf(t)===n)},r.__endsWith=function(e,t){if("string"!=typeof e)return e.endsWith.apply(e,i(arguments))
var n=t?t.length:0
return""===t||t===e||e.indexOf(t)===e.length-n},r.__hashCode=function(t){return t.hashCode instanceof Function?t.hashCode.apply(t,i(arguments)):e(t)},r.__printStackTrace=function(e){r.println("Exception: "+e.toString())}}}},{}],23:[function(e,t,n){t.exports=function(e,t){function n(e,t){var n=e||362436069,r=t||521288629,i=function(){return n=36969*(65535&n)+(n>>>16)&4294967295,r=18e3*(65535&r)+(r>>>16)&4294967295,4294967295&((65535&n)<<16|65535&r)}
this.doubleGenerator=function(){var e=i()/4294967296
return e<0?1+e:e},this.intGenerator=i}function r(e){function r(e,t,n,r){var i=15&e,s=i<8?t:n,o=i<4?n:12===i||14===i?t:r
return(0==(1&i)?s:-s)+(0==(2&i)?o:-o)}function i(e,t,n){var r=0==(1&e)?t:n
return 0==(2&e)?-r:r}function s(e,t){return 0==(1&e)?-t:t}function o(e,t,n){return t+e*(n-t)}var a,l,h=e!==t?new n(e,(e<<16)+(e>>16)):n.createRandomized(),u=new Uint8Array(512)
for(a=0;a<256;++a)u[a]=a
for(a=0;a<256;++a){var c=u[l=255&h.intGenerator()]
u[l]=u[a],u[a]=c}for(a=0;a<256;++a)u[a+256]=u[a]
this.noise3d=function(e,t,n){var i=255&Math.floor(e),s=255&Math.floor(t),a=255&Math.floor(n)
e-=Math.floor(e),t-=Math.floor(t),n-=Math.floor(n)
var l=(3-2*e)*e*e,h=(3-2*t)*t*t,c=(3-2*n)*n*n,f=u[i]+s,p=u[f]+a,m=u[f+1]+a,g=u[i+1]+s,d=u[g]+a,v=u[g+1]+a
return o(c,o(h,o(l,r(u[p],e,t,n),r(u[d],e-1,t,n)),o(l,r(u[m],e,t-1,n),r(u[v],e-1,t-1,n))),o(h,o(l,r(u[p+1],e,t,n-1),r(u[d+1],e-1,t,n-1)),o(l,r(u[m+1],e,t-1,n-1),r(u[v+1],e-1,t-1,n-1))))},this.noise2d=function(e,t){var n=255&Math.floor(e),r=255&Math.floor(t)
e-=Math.floor(e),t-=Math.floor(t)
var s=(3-2*e)*e*e,a=(3-2*t)*t*t,l=u[n]+r,h=u[n+1]+r
return o(a,o(s,i(u[l],e,t),i(u[h],e-1,t)),o(s,i(u[l+1],e,t-1),i(u[h+1],e-1,t-1)))},this.noise1d=function(e){var t=255&Math.floor(e)
return e-=Math.floor(e),o((3-2*e)*e*e,s(u[t],e),s(u[t+1],e-1))}}var i=function(){return Math.random()}
e.abs=Math.abs,e.ceil=Math.ceil,e.exp=Math.exp,e.floor=Math.floor,e.log=Math.log,e.pow=Math.pow,e.round=Math.round,e.sqrt=Math.sqrt,e.acos=Math.acos,e.asin=Math.asin,e.atan=Math.atan,e.atan2=Math.atan2,e.cos=Math.cos,e.sin=Math.sin,e.tan=Math.tan,e.constrain=function(e,t,n){return e>n?n:e<t?t:e},e.dist=function(){var e,t,n
return 4===arguments.length?(e=arguments[0]-arguments[2],t=arguments[1]-arguments[3],Math.sqrt(e*e+t*t)):6===arguments.length?(e=arguments[0]-arguments[3],t=arguments[1]-arguments[4],n=arguments[2]-arguments[5],Math.sqrt(e*e+t*t+n*n)):void 0},e.lerp=function(e,t,n){return(t-e)*n+e},e.mag=function(e,t,n){return n?Math.sqrt(e*e+t*t+n*n):Math.sqrt(e*e+t*t)},e.map=function(e,t,n,r,i){return r+(e-t)/(n-t)*(i-r)},e.max=function(){if(2===arguments.length)return arguments[0]<arguments[1]?arguments[1]:arguments[0]
var e=1===arguments.length?arguments[0]:arguments
if(!("length"in e&&e.length>0))throw"Non-empty array is expected"
for(var t=e[0],n=e.length,r=1;r<n;++r)t<e[r]&&(t=e[r])
return t},e.min=function(){if(2===arguments.length)return arguments[0]<arguments[1]?arguments[0]:arguments[1]
var e=1===arguments.length?arguments[0]:arguments
if(!("length"in e&&e.length>0))throw"Non-empty array is expected"
for(var t=e[0],n=e.length,r=1;r<n;++r)t>e[r]&&(t=e[r])
return t},e.norm=function(e,t,n){return(e-t)/(n-t)},e.sq=function(e){return e*e},e.degrees=function(e){return 180*e/Math.PI},e.random=function(e,t){if(0===arguments.length?(t=1,e=0):1===arguments.length&&(t=e,e=0),e===t)return e
for(var n=0;n<100;n++){var r=i(),s=r*(t-e)+e
if(s!==t)return s}return e},n.createRandomized=function(){var e=new Date
return new n(e/6e4&4294967295,4294967295&e)},e.randomSeed=function(e){i=new n(e,(e<<16)+(e>>16)).doubleGenerator,this.haveNextNextGaussian=!1},e.randomGaussian=function(){if(this.haveNextNextGaussian)return this.haveNextNextGaussian=!1,this.nextNextGaussian
var e,t,n
do{e=2*i()-1,t=2*i()-1,n=e*e+t*t}while(n>=1||0===n)
var r=Math.sqrt(-2*Math.log(n)/n)
return this.nextNextGaussian=t*r,this.haveNextNextGaussian=!0,e*r}
var s={generator:t,octaves:4,fallout:.5,seed:t}
e.noise=function(e,n,i){s.generator===t&&(s.generator=new r(s.seed))
for(var o=s.generator,a=1,l=1,h=0,u=0;u<s.octaves;++u){switch(a*=s.fallout,arguments.length){case 1:h+=a*(1+o.noise1d(l*e))/2
break
case 2:h+=a*(1+o.noise2d(l*e,l*n))/2
break
case 3:h+=a*(1+o.noise3d(l*e,l*n,l*i))/2}l*=2}return h},e.noiseDetail=function(e,n){s.octaves=e,n!==t&&(s.fallout=n)},e.noiseSeed=function(e){s.seed=e,s.generator=t}}},{}],24:[function(e,t,n){t.exports=function(e){var t={trim:function(e){if(e instanceof Array){for(var t=[],n=0;n<e.length;n++)t.push(e[n].replace(/^\s*/,"").replace(/\s*$/,"").replace(/\r*$/,""))
return t}return e.replace(/^\s*/,"").replace(/\s*$/,"").replace(/\r*$/,"")},radians:function(e){return e/180*Math.PI},nfCoreScalar:function(t,n,r,i,s,o){var a=t<0?r:n,l=0===s,h=s===e||s<0?0:s,u=Math.abs(t)
if(l)for(h=1,u*=10;Math.abs(Math.round(u)-u)>1e-6&&h<7;)++h,u*=10
else 0!==h&&(u*=Math.pow(10,h))
var c,f=2*u
if(Math.floor(u)===u)c=u
else if(Math.floor(f)===f){var p=Math.floor(u)
c=p+p%2}else c=Math.round(u)
for(var m="",g=i+h;g>0||c>0;)g--,m=""+c%10+m,c=Math.floor(c/10)
if(o!==e)for(var d=m.length-3-h;d>0;)m=m.substring(0,d)+o+m.substring(d),d-=3
return h>0?a+m.substring(0,m.length-h)+"."+m.substring(m.length-h,m.length):a+m},nfCore:function(e,n,r,i,s,o){if(e instanceof Array){for(var a=[],l=0,h=e.length;l<h;l++)a.push(t.nfCoreScalar(e[l],n,r,i,s,o))
return a}return t.nfCoreScalar(e,n,r,i,s,o)},nf:function(e,n,r){return t.nfCore(e,"","-",n,r)},nfs:function(e,n,r){return t.nfCore(e," ","-",n,r)},nfp:function(e,n,r){return t.nfCore(e,"+","-",n,r)},nfc:function(e,n){return t.nfCore(e,"","-",0,n,",")},withCommonFunctions:function(e){["trim","radians","nf","nfs","nfp","nfc"].forEach(function(n){e[n]=t[n]})}}
return t}()},{}],25:[function(e,t,n){t.exports=function(e,t,n,r,i,s,o){function a(t,n){var r=t,s=0,o=0
if(e.pmouseX=e.mouseX,e.pmouseY=e.mouseY,r.offsetParent)do{s+=r.offsetLeft,o+=r.offsetTop}while(r=r.offsetParent)
r=t
do{s-=r.scrollLeft||0,o-=r.scrollTop||0}while(r=r.parentNode)
var a,l,h,u
return i.defaultView&&i.defaultView.getComputedStyle&&(a=parseInt(i.defaultView.getComputedStyle(t,null).paddingLeft,10)||0,l=parseInt(i.defaultView.getComputedStyle(t,null).paddingTop,10)||0,h=parseInt(i.defaultView.getComputedStyle(t,null).borderLeftWidth,10)||0,u=parseInt(i.defaultView.getComputedStyle(t,null).borderTopWidth,10)||0),s+=a,o+=l,s+=h,o+=u,s+=window.pageXOffset,o+=window.pageYOffset,{X:s,Y:o}}function l(t,n){var r=a(t,n)
e.mouseX=n.pageX-r.X,e.mouseY=n.pageY-r.Y}function h(e){var t,n=a(e.changedTouches[0].target,e.changedTouches[0])
for(t=0;t<e.touches.length;t++){var r=e.touches[t]
r.offsetX=r.pageX-n.X,r.offsetY=r.pageY-n.Y}for(t=0;t<e.targetTouches.length;t++){var i=e.targetTouches[t]
i.offsetX=i.pageX-n.X,i.offsetY=i.pageY-n.Y}for(t=0;t<e.changedTouches.length;t++){var s=e.changedTouches[t]
s.offsetX=s.pageX-n.X,s.offsetY=s.pageY-n.Y}return e}var u=["mouseout","mousemove","mousedown","mouseup","DOMMouseScroll","mousewheel","touchstart"]
n(t,"touchstart",function(i){t.setAttribute("style","-webkit-user-select: none"),t.setAttribute("onclick","void(0)"),t.setAttribute("style","-webkit-tap-highlight-color:rgba(0,0,0,0)"),r(t,u),e.touchStart!==o||e.touchMove!==o||e.touchEnd!==o||e.touchCancel!==o?(n(t,"touchstart",function(t){e.touchStart!==o&&(t=h(t),e.touchStart(t))}),n(t,"touchmove",function(t){e.touchMove!==o&&(t.preventDefault(),t=h(t),e.touchMove(t))}),n(t,"touchend",function(t){e.touchEnd!==o&&(t=h(t),e.touchEnd(t))}),n(t,"touchcancel",function(t){e.touchCancel!==o&&(t=h(t),e.touchCancel(t))})):(n(t,"touchstart",function(n){l(t,n.touches[0]),e.__mousePressed=!0,e.mouseDragging=!1,e.mouseButton=s.LEFT,"function"==typeof e.mousePressed&&e.mousePressed()}),n(t,"touchmove",function(n){n.preventDefault(),l(t,n.touches[0]),"function"!=typeof e.mouseMoved||e.__mousePressed||e.mouseMoved(),"function"==typeof e.mouseDragged&&e.__mousePressed&&(e.mouseDragged(),e.mouseDragging=!0)}),n(t,"touchend",function(t){e.__mousePressed=!1,"function"!=typeof e.mouseClicked||e.mouseDragging||e.mouseClicked(),"function"==typeof e.mouseReleased&&e.mouseReleased()}))}),function(){var r=!0,i=function(e){e.preventDefault(),e.stopPropagation()}
e.disableContextMenu=function(){r&&(n(t,"contextmenu",i),r=!1)},e.enableContextMenu=function(){r||(detachEventHandler({elem:t,type:"contextmenu",fn:i}),r=!0)}}(),n(t,"mousemove",function(n){l(t,n),"function"!=typeof e.mouseMoved||e.__mousePressed||e.mouseMoved(),"function"==typeof e.mouseDragged&&e.__mousePressed&&(e.mouseDragged(),e.mouseDragging=!0)}),n(t,"mouseout",function(t){"function"==typeof e.mouseOut&&e.mouseOut()}),n(t,"mouseover",function(n){l(t,n),"function"==typeof e.mouseOver&&e.mouseOver()}),t.onmousedown=function(){return t.focus(),!1},n(t,"mousedown",function(t){switch(e.__mousePressed=!0,e.mouseDragging=!1,t.which){case 1:e.mouseButton=s.LEFT
break
case 2:e.mouseButton=s.CENTER
break
case 3:e.mouseButton=s.RIGHT}"function"==typeof e.mousePressed&&e.mousePressed()}),n(t,"mouseup",function(t){e.__mousePressed=!1,"function"!=typeof e.mouseClicked||e.mouseDragging||e.mouseClicked(),"function"==typeof e.mouseReleased&&e.mouseReleased()})
var c=function(n){if(n.target===t){var r=0
n.wheelDelta?(r=n.wheelDelta/120,window.opera&&(r=-r)):n.detail&&(r=-n.detail/3),e.mouseScroll=r,r&&"function"==typeof e.mouseScrolled&&(n.stopPropagation(),n.preventDefault(),e.mouseScrolled())}}
n(i,"DOMMouseScroll",c),n(i,"mousewheel",c)}},{}],26:[function(e,t,n){t.exports=function(t,n){function r(){var e=["abs","acos","alpha","ambient","ambientLight","append","applyMatrix","arc","arrayCopy","asin","atan","atan2","background","beginCamera","beginDraw","beginShape","bezier","bezierDetail","bezierPoint","bezierTangent","bezierVertex","binary","blend","blendColor","blit_resize","blue","box","breakShape","brightness","camera","ceil","Character","color","colorMode","concat","constrain","copy","cos","createFont","createGraphics","createImage","cursor","curve","curveDetail","curvePoint","curveTangent","curveTightness","curveVertex","day","degrees","directionalLight","disableContextMenu","dist","draw","ellipse","ellipseMode","emissive","enableContextMenu","endCamera","endDraw","endShape","exit","exp","expand","externals","fill","filter","floor","focused","frameCount","frameRate","frustum","get","glyphLook","glyphTable","green","height","hex","hint","hour","hue","image","imageMode","intersect","join","key","keyCode","keyPressed","keyReleased","keyTyped","lerp","lerpColor","lightFalloff","lights","lightSpecular","line","link","loadBytes","loadFont","loadGlyphs","loadImage","loadPixels","loadShape","loadXML","loadStrings","log","loop","mag","map","match","matchAll","max","millis","min","minute","mix","modelX","modelY","modelZ","modes","month","mouseButton","mouseClicked","mouseDragged","mouseMoved","mouseOut","mouseOver","mousePressed","mouseReleased","mouseScroll","mouseScrolled","mouseX","mouseY","name","nf","nfc","nfp","nfs","noCursor","noFill","noise","noiseDetail","noiseSeed","noLights","noLoop","norm","normal","noSmooth","noStroke","noTint","ortho","param","parseBoolean","parseByte","parseChar","parseFloat","parseInt","parseXML","peg","perspective","PImage","pixels","PMatrix2D","PMatrix3D","PMatrixStack","pmouseX","pmouseY","point","pointLight","popMatrix","popStyle","pow","print","printCamera","println","printMatrix","printProjection","PShape","PShapeSVG","pushMatrix","pushStyle","quad","radians","random","randomGaussian","randomSeed","rect","rectMode","red","redraw","requestImage","resetMatrix","reverse","rotate","rotateX","rotateY","rotateZ","round","saturation","save","saveFrame","saveStrings","scale","screenX","screenY","screenZ","second","set","setup","shape","shapeMode","shared","shearX","shearY","shininess","shorten","sin","size","smooth","sort","specular","sphere","sphereDetail","splice","split","splitTokens","spotLight","sq","sqrt","status","str","stroke","strokeCap","strokeJoin","strokeWeight","subset","tan","text","textAlign","textAscent","textDescent","textFont","textLeading","textMode","textSize","texture","textureMode","textWidth","tint","toImageData","touchCancel","touchEnd","touchMove","touchStart","translate","transform","triangle","trim","unbinary","unhex","updatePixels","use3DContext","vertex","width","XMLElement","XML","year","__contains","__equals","__equalsIgnoreCase","__frameRate","__hashCode","__int_cast","__instanceof","__keyPressed","__mousePressed","__printStackTrace","__replace","__replaceAll","__replaceFirst","__toCharArray","__split","__codePointAt","__startsWith","__endsWith","__matches"]
h&&Object.keys(h).forEach(function(t){e.push(t)})
var n,r,i={}
for(n=0,r=e.length;n<r;++n)i[e[n]]=null
for(var s in t.lib)if(t.lib.hasOwnProperty(s)&&t.lib[s].exports){var o=t.lib[s].exports
for(n=0,r=o.length;n<r;++n)i[o[n]]=null}return i}function i(e){function t(e){var t,n=/^\s*/.exec(e)
if(n[0].length===e.length)t={left:n[0],middle:"",right:""}
else{var r=/\s*$/.exec(e)
t={left:n[0],middle:e.substring(n[0].length,r.index),right:r[0]}}return t.untrim=function(e){return this.left+e+this.right},t}function n(e){return e.replace(/^\s+/,"").replace(/\s+$/,"")}function i(e,t){for(var n=0,r=t.length;n<r;++n)e[t[n]]=null
return e}function s(e){for(var t in e)if(e.hasOwnProperty(t))return!1
return!0}function h(e){return e.substring(2,e.length-1)}function u(e,t){var n=Pe.length
return Pe.push(e),'"'+t+n+'"'}function c(){return"class"+ ++Me}function f(e,t,n){e.classId=t,e.scopeId=n,Ce[t]=e}function p(e){var t=e
return t=t.replace(Te,function(e){return u(e,"E")}),t=t.replace(_e,function(e){return u(e,"D")}),t=t.replace(De,function(e){return u(e,"H")})}function m(e,t){return e.replace(Le,function(e,n,r,i,s,o){return r!==t?e:u(e,"G")})}function g(e){this.name=e}function d(e,t){this.params=e,this.methodArgsParam=t}function v(e){var t=n(e.substring(1,e.length-1)),r=[],i=null
if(""!==t)for(var s=t.split(","),o=0;o<s.length;++o){var a=/\b([A-Za-z_$][\w$]*\b)(\s*"[ABC][\d]*")*\s*$/.exec(s[o])
if(o===s.length-1&&s[o].indexOf("...")>=0){i=new g(a[1])
break}r.push(new g(a[1]))}return new d(r,i)}function y(e){function n(e,n,r,i){var o=Pe[i]
s=!0
var a=t(o.substring(1,o.length-1))
return"__"+r+(""===a.middle?u("("+n.replace(/\.\s*$/,"")+")","B"):u("("+n.replace(/\.\s*$/,"")+","+a.middle+")","B"))}function r(e,t,n){return s=!0,"__instanceof"+u("("+t+", "+n+")","B")}var i=e
i=i.replace(/\bnew\s+([A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)(?:\s*"C\d+")+\s*("A\d+")/g,function(e,t,n){return n}),i=i.replace(/\bnew\s+([A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)(?:\s*"B\d+")\s*("A\d+")/g,function(e,t,n){return u(e,"F")}),i=i.replace(De,function(e){return u(e,"H")}),i=i.replace(/\bnew\s+([A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)\s*("C\d+"(?:\s*"C\d+")*)/g,function(e,t,n){var r=n.replace(/"C(\d+)"/g,function(e,t){return Pe[t]}).replace(/\[\s*\]/g,"[null]").replace(/\s*\]\s*\[\s*/g,", ")
return"$p.createJavaArray"+u("('"+t+"', "+u("{"+r.substring(1,r.length-1)+"}","A")+")","B")}),i=i.replace(/(\.\s*length)\s*"B\d+"/g,"$1"),i=i.replace(/#([0-9A-Fa-f]{6})\b/g,function(e,t){return"0xFF"+t}),i=i.replace(/"B(\d+)"(\s*(?:[\w$']|"B))/g,function(e,t,n){var r=Pe[t]
if(!/^\(\s*[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*\s*(?:"C\d+"\s*)*\)$/.test(r))return e
if(/^\(\s*int\s*\)$/.test(r))return"(int)"+n
var i=r.split(/"C(\d+)"/g)
return i.length>1&&!/^\[\s*\]$/.test(Pe[i[1]])?e:""+n}),i=i.replace(/\(int\)([^,\]\)\}\?\:\*\+\-\/\^\|\%\&\~<\>\=]+)/g,function(e,n){var r=t(n)
return r.untrim("__int_cast("+r.middle+")")}),i=i.replace(/\bsuper(\s*"B\d+")/g,"$$superCstr$1").replace(/\bsuper(\s*\.)/g,"$$super$1"),i=i.replace(/\b0+((\d*)(?:\.[\d*])?(?:[eE][\-\+]?\d+)?[fF]?)\b/,function(e,t,n){return t===n?e:""===n?"0"+t:t}),i=i.replace(/\b(\.?\d+\.?)[fF]\b/g,"$1"),i=i.replace(/([^\s])%([^=\s])/g,"$1 % $2"),i=i.replace(/\b(frameRate|keyPressed|mousePressed)\b(?!\s*"B)/g,"__$1"),i=i.replace(/\b(boolean|byte|char|float|int)\s*"B/g,function(e,t){return"parse"+t.substring(0,1).toUpperCase()+t.substring(1)+'"B'}),i=i.replace(/\bpixels\b\s*(("C(\d+)")|\.length)?(\s*=(?!=)([^,\]\)\}]+))?/g,function(e,t,n,r,i,s){if(n){var o=Pe[r]
return i?"pixels.setPixel"+u("("+o.substring(1,o.length-1)+","+s+")","B"):"pixels.getPixel"+u("("+o.substring(1,o.length-1)+")","B")}return t?"pixels.getLength"+u("()","B"):i?"pixels.set"+u("("+s+")","B"):"pixels.toArray"+u("()","B")})
var s
do{s=!1,i=i.replace(/((?:'\d+'|\b[A-Za-z_$][\w$]*\s*(?:"[BC]\d+")*)\s*\.\s*(?:[A-Za-z_$][\w$]*\s*(?:"[BC]\d+"\s*)*\.\s*)*)(replace|replaceAll|replaceFirst|contains|equals|equalsIgnoreCase|hashCode|toCharArray|printStackTrace|split|startsWith|endsWith|codePointAt|matches)\s*"B(\d+)"/g,n)}while(s)
do{s=!1,i=i.replace(/((?:'\d+'|\b[A-Za-z_$][\w$]*\s*(?:"[BC]\d+")*)\s*(?:\.\s*[A-Za-z_$][\w$]*\s*(?:"[BC]\d+"\s*)*)*)instanceof\s+([A-Za-z_$][\w$]*\s*(?:\.\s*[A-Za-z_$][\w$]*)*)/g,r)}while(s)
return i=i.replace(/\bthis(\s*"B\d+")/g,"$$constr$1")}function b(e,t){this.baseInterfaceName=e,this.body=t,t.owner=this}function A(e){var t=new RegExp(/\bnew\s*([A-Za-z_$][\w$]*\s*(?:\.\s*[A-Za-z_$][\w$]*)*)\s*"B\d+"\s*"A(\d+)"/).exec(e),n=ye,r=c()
ye=r
var i=t[1]+"$"+r,s=new b(i,be(Pe[t[2]],i,"","implements "+t[1]))
return f(s,r,n),ye=n,s}function x(e,t,n){this.name=e,this.params=t,this.body=n}function w(e){var t=new RegExp(/\b([A-Za-z_$][\w$]*)\s*"B(\d+)"\s*"A(\d+)"/).exec(e)
return new x("function"!==t[1]?t[1]:null,v(Pe[t[2]]),xe(Pe[t[3]]))}function E(e){this.members=e}function S(e){for(var t=e.split(","),r=0;r<t.length;++r){var i=t[r].indexOf(":")
t[r]=i<0?{value:Se(t[r])}:{label:n(t[r].substring(0,i)),value:Se(n(t[r].substring(i+1)))}}return new E(t)}function P(e){if("("===e.charAt(0)||"["===e.charAt(0))return e.charAt(0)+P(e.substring(1,e.length-1))+e.charAt(e.length-1)
if("{"===e.charAt(0))return/^\{\s*(?:[A-Za-z_$][\w$]*|'\d+')\s*:/.test(e)?"{"+u(e.substring(1,e.length-1),"I")+"}":"["+P(e.substring(1,e.length-1))+"]"
var n=t(e),r=y(n.middle)
return r=r.replace(/"[ABC](\d+)"/g,function(e,t){return P(Pe[t])}),n.untrim(r)}function C(e){return e.replace(/(\.\s*)?((?:\b[A-Za-z_]|\$)[\w$]*)(\s*\.\s*([A-Za-z_$][\w$]*)(\s*\()?)?/g,function(e,t,n,r,i,s){return t?e:ve({name:n,member:i,callSign:!!s})+(r===o?"":r)})}function M(e,t){this.expr=e,this.transforms=t}function T(e,t,n){this.name=e,this.value=t,this.isDefault=n}function _(e,t){var r,i,s,o=e.indexOf("=")
return o<0?(r=e,i=t,s=!0):(r=e.substring(0,o),i=Se(e.substring(o+1)),s=!1),new T(n(r.replace(/(\s*"C\d+")+/g,"")),i,s)}function R(e){return"int"===e||"float"===e?"0":"boolean"===e?"false":"color"===e?"0x00000000":"null"}function L(e,t){this.definitions=e,this.varType=t}function I(e){this.expression=e}function D(e){if(Re.test(e)){for(var t=Ie.exec(e),n=e.substring(t[0].length).split(","),r=R(t[2]),i=0;i<n.length;++i)n[i]=_(n[i],r)
return new L(n,t[2])}return new I(Se(e))}function O(e,t,n){this.initStatement=e,this.condition=t,this.step=n}function N(e,t){this.initStatement=e,this.container=t}function F(e,t){this.initStatement=e,this.container=t}function k(e){var t
return/\bin\b/.test(e)?(t=e.substring(1,e.length-1).split(/\bin\b/g),new N(D(n(t[0])),Se(t[1]))):e.indexOf(":")>=0&&e.indexOf(";")<0?(t=e.substring(1,e.length-1).split(":"),new F(D(n(t[0])),Se(t[1]))):(t=e.substring(1,e.length-1).split(";"),new O(D(n(t[0])),Se(t[1]),Se(t[2])))}function B(e){e.sort(function(e,t){return t.weight-e.weight})}function $(e,t,n){this.name=e,this.body=t,this.isStatic=n,t.owner=this}function G(e,t,n){this.name=e,this.body=t,this.isStatic=n,t.owner=this}function V(e){var t=Te.exec(e)
Te.lastIndex=0
var n,r=t[1].indexOf("static")>=0,i=Pe[h(t[6])],s=ye,o=c()
return ye=o,n="interface"===t[2]?new $(t[3],Ae(i,t[3],t[4]),r):new G(t[3],be(i,t[3],t[4],t[5]),r),f(n,o,s),ye=s,n}function z(e,t,n,r){this.name=e,this.params=t,this.body=n,this.isStatic=r}function U(e){var t=_e.exec(e)
_e.lastIndex=0
var n=t[1].indexOf("static")>=0,r=";"!==t[6]?Pe[h(t[6])]:"{}"
return new z(t[3],v(Pe[h(t[4])]),xe(r),n)}function H(e,t,n){this.definitions=e,this.fieldType=t,this.isStatic=n}function X(e){for(var t=Ie.exec(e),n=t[1].indexOf("static")>=0,r=e.substring(t[0].length).split(/,\s*/g),i=R(t[2]),s=0;s<r.length;++s)r[s]=_(r[s],i)
return new H(r,t[2],n)}function j(e,t){this.params=e,this.body=t}function Y(e){var t=new RegExp(/"B(\d+)"\s*"A(\d+)"/).exec(e)
return new j(v(Pe[t[1]]),xe(Pe[t[2]]))}function K(e,t,n,r,i,s){var o,a
for(this.name=e,this.interfacesNames=t,this.methodsNames=n,this.fields=r,this.innerClasses=i,this.misc=s,o=0,a=r.length;o<a;++o)r[o].owner=this}function W(e,t,n,r,i,s,o,a,l){var h,u
for(this.name=e,this.baseClassName=t,this.interfacesNames=n,this.functions=r,this.methods=i,this.fields=s,this.cstrs=o,this.innerClasses=a,this.misc=l,h=0,u=s.length;h<u;++h)s[h].owner=this}function Z(e,t){this.name=e,this.body=t,t.owner=this}function q(e,t){this.name=e,this.body=t,t.owner=this}function Q(e){var t=Te.exec(e)
Te.lastIndex=0
var n=Pe[h(t[6])],r=ye,i=c()
ye=i
var s
return s="interface"===t[2]?new Z(t[3],Ae(n,t[3],t[4])):new q(t[3],be(n,t[3],t[4],t[5])),f(s,i,r),ye=r,s}function J(e,t,n){this.name=e,this.params=t,this.body=n}function ee(e){var t=_e.exec(e)
_e.lastIndex=0
return new J(t[3],v(Pe[h(t[4])]),xe(Pe[h(t[6])]))}function te(e){var t=e
return t=t.replace(/\b(catch\s*"B\d+"\s*"A\d+")(\s*catch\s*"B\d+"\s*"A\d+")+/g,"$1")}function ne(e,t){this.argument=e,this.misc=t}function re(e,t){this.argument=e,this.misc=t}function ie(e,t,n){this.name=e,this.argument=t,this.misc=n}function se(e){this.expr=e}function oe(e){this.label=e}function ae(e){for(var t=[],n=0,r=e.length;n<r;++n){var s=e[n]
s instanceof L?t=t.concat(s.getNames()):s instanceof ne&&s.argument.initStatement instanceof L?t=t.concat(s.argument.initStatement.getNames()):(s instanceof $||s instanceof G||s instanceof Z||s instanceof q||s instanceof J||s instanceof x)&&t.push(s.name)}return i({},t)}function le(e){this.statements=e}function he(e){this.statements=e}var ue=r(),ce=e.replace(/\r\n?|\n\r/g,"\n"),fe=[],pe=ce.replace(/("(?:[^"\\\n]|\\.)*")|('(?:[^'\\\n]|\\.)*')|(([\[\(=|&!\^:?]\s*)(\/(?![*\/])(?:[^\/\\\n]|\\.)*\/[gim]*)\b)|(\/\/[^\n]*\n)|(\/\*(?:(?!\*\/)(?:.|\n))*\*\/)/g,function(e,t,n,r,i,s,o,a){var l
return t||n?(l=fe.length,fe.push(e),"'"+l+"'"):r?(l=fe.length,fe.push(s),i+"'"+l+"'"):""!==a?" ":"\n"})
pe=pe.replace(/__x([0-9A-F]{4})/g,function(e,t){return"__x005F_x"+t}),pe=pe.replace(/\$/g,"__x0024"),pe=pe.replace(/return\s*[\n\r]+/g,"return ")
var me,ge=pe,de=function(e,t,n,r){return t||r?e:(me=!0,"")}
do{me=!1,ge=ge.replace(/([<]?)<\s*((?:\?|[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)(?:\[\])*(?:\s+(?:extends|super)\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)?(?:\s*,\s*(?:\?|[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)(?:\[\])*(?:\s+(?:extends|super)\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)?)*)\s*>([=]?)/g,de)}while(me)
var ve,ye,be,Ae,xe,we,Ee,Se,Pe=function(e){for(var t=[],n=e.split(/([\{\[\(\)\]\}])/),r=n[0],i=[],s=1;s<n.length;s+=2){var o=n[s]
if("["===o||"{"===o||"("===o)i.push(r),r=o
else if("]"===o||"}"===o||")"===o){var a="}"===o?"A":")"===o?"B":"C",l=t.length
t.push(r+o),r=i.pop()+'"'+a+(l+1)+'"'}r+=n[s+1]}return t.unshift(r),t}(ge),Ce={},Me=0,Te=/\b((?:(?:public|private|final|protected|static|abstract)\s+)*)(class|interface)\s+([A-Za-z_$][\w$]*\b)(\s+extends\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*,\s*[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*\b)*)?(\s+implements\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*,\s*[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*\b)*)?\s*("A\d+")/g,_e=/\b((?:(?:public|private|final|protected|static|abstract|synchronized)\s+)*)((?!(?:else|new|return|throw|function|public|private|protected)\b)[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*"C\d+")*)\s*([A-Za-z_$][\w$]*\b)\s*("B\d+")(\s*throws\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*,\s*[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)*)?\s*("A\d+"|;)/g,Re=/^((?:(?:public|private|final|protected|static)\s+)*)((?!(?:else|new|return|throw)\b)[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*"C\d+")*)\s*([A-Za-z_$][\w$]*\b)\s*(?:"C\d+"\s*)*([=,]|$)/,Le=/\b((?:(?:public|private|final|protected|static|abstract)\s+)*)((?!(?:new|return|throw)\b)[A-Za-z_$][\w$]*\b)\s*("B\d+")(\s*throws\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*,\s*[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)*)?\s*("A\d+")/g,Ie=/^((?:(?:public|private|final|protected|static)\s+)*)((?!(?:new|return|throw)\b)[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*"C\d+")*)\s*/,De=/\bfunction(?:\s+([A-Za-z_$][\w$]*))?\s*("B\d+")\s*("A\d+")/g
g.prototype.toString=function(){return this.name},d.prototype.getNames=function(){for(var e=[],t=0,n=this.params.length;t<n;++t)e.push(this.params[t].name)
return e},d.prototype.prependMethodArgs=function(e){return this.methodArgsParam?"{\nvar "+this.methodArgsParam.name+" = Array.prototype.slice.call(arguments, "+this.params.length+");\n"+e.substring(1):e},d.prototype.toString=function(){if(0===this.params.length)return"()"
for(var e="(",t=0,n=this.params.length;t<n;++t)e+=this.params[t]+", "
return e.substring(0,e.length-2)+")"},b.prototype.toString=function(){return"new ("+this.body+")"},x.prototype.toString=function(){var e=ve,t=i({this:null},this.params.getNames())
ve=function(n){return t.hasOwnProperty(n.name)?n.name:e(n)}
var n="function"
this.name&&(n+=" "+this.name)
var r=this.params.prependMethodArgs(this.body.toString())
return n+=this.params+" "+r,ve=e,n},E.prototype.toString=function(){var e=ve
ve=function(t){return"this"===t.name?"this":e(t)}
for(var t="",n=0,r=this.members.length;n<r;++n)this.members[n].label&&(t+=this.members[n].label+": "),t+=this.members[n].value.toString()+", "
return ve=e,t.substring(0,t.length-2)},M.prototype.toString=function(){var e=this.transforms
return C(this.expr).replace(/"!(\d+)"/g,function(t,n){return e[n].toString()})},Se=function(e){var t=[],n=P(e)
return n=n.replace(/"H(\d+)"/g,function(e,n){return t.push(w(Pe[n])),'"!'+(t.length-1)+'"'}),n=n.replace(/"F(\d+)"/g,function(e,n){return t.push(A(Pe[n])),'"!'+(t.length-1)+'"'}),n=n.replace(/"I(\d+)"/g,function(e,n){return t.push(S(Pe[n])),'"!'+(t.length-1)+'"'}),new M(n,t)},T.prototype.toString=function(){return this.name+" = "+this.value},L.prototype.getNames=function(){for(var e=[],t=0,n=this.definitions.length;t<n;++t)e.push(this.definitions[t].name)
return e},L.prototype.toString=function(){return"var "+this.definitions.join(",")},I.prototype.toString=function(){return this.expression.toString()},O.prototype.toString=function(){return"("+this.initStatement+"; "+this.condition+"; "+this.step+")"},N.prototype.toString=function(){var e=this.initStatement.toString()
return e.indexOf("=")>=0&&(e=e.substring(0,e.indexOf("="))),"("+e+" in "+this.container+")"},F.iteratorId=0,F.prototype.toString=function(){var e=this.initStatement.toString(),t="$it"+F.iteratorId++,n=e.replace(/^\s*var\s*/,"").split("=")[0]
return"(var "+t+" = new $p.ObjectIterator("+this.container+"), "+n+" = void(0); "+t+".hasNext() && (("+n+" = "+t+".next()) || true);)"},$.prototype.toString=function(){return""+this.body},G.prototype.toString=function(){return""+this.body},z.prototype.toString=function(){var e=i({},this.params.getNames()),t=ve
ve=function(n){return e.hasOwnProperty(n.name)?n.name:t(n)}
var n=this.params.prependMethodArgs(this.body.toString()),r="function "+this.methodId+this.params+" "+n+"\n"
return ve=t,r},H.prototype.getNames=function(){for(var e=[],t=0,n=this.definitions.length;t<n;++t)e.push(this.definitions[t].name)
return e},H.prototype.toString=function(){var e=ve({name:"[this]"})
if(this.isStatic){for(var t=this.owner.name,n=[],r=0,i=this.definitions.length;r<i;++r){var s=this.definitions[r],o=s.name,a=t+"."+o,l="if("+a+" === void(0)) {\n "+a+" = "+s.value+"; }\n$p.defineProperty("+e+", '"+o+"', { get: function(){return "+a+";}, set: function(val){"+a+" = val;} });\n"
n.push(l)}return n.join("")}return e+"."+this.definitions.join("; "+e+".")},j.prototype.toString=function(){var e=i({},this.params.getNames()),t=ve
ve=function(n){return e.hasOwnProperty(n.name)?n.name:t(n)}
var n="function $constr_"+this.params.params.length+this.params.toString(),r=this.params.prependMethodArgs(this.body.toString())
return/\$(superCstr|constr)\b/.test(r)||(r="{\n$superCstr();\n"+r.substring(1)),ve=t,n+r+"\n"},K.prototype.getMembers=function(e,t,n){this.owner.base&&this.owner.base.body.getMembers(e,t,n)
var r,i,s,o
for(r=0,s=this.fields.length;r<s;++r){var a=this.fields[r].getNames()
for(i=0,o=a.length;i<o;++i)e[a[i]]=this.fields[r]}for(r=0,s=this.methodsNames.length;r<s;++r){t[this.methodsNames[r]]=!0}for(r=0,s=this.innerClasses.length;r<s;++r){var l=this.innerClasses[r]
n[l.name]=l}},K.prototype.toString=function(){var e=(function(e){for(var t=0;e;)++t,e=e.scope}(this.owner),this.name),t="",n="",r={},i={},s={}
this.getMembers(r,i,s)
var o,a
if(this.owner.interfaces){var l,h=[]
for(o=0,a=this.interfacesNames.length;o<a;++o)this.owner.interfaces[o]&&(l=ve({name:this.interfacesNames[o]}),h.push(l),t+="$p.extendInterfaceMembers("+e+", "+l+");\n")
n+=e+".$interfaces = ["+h.join(", ")+"];\n"}for(n+=e+".$isInterface = true;\n",n+=e+".$methods = ['"+this.methodsNames.join("', '")+"'];\n",B(this.innerClasses),o=0,a=this.innerClasses.length;o<a;++o){var u=this.innerClasses[o]
u.isStatic&&(t+=e+"."+u.name+" = "+u+";\n")}for(o=0,a=this.fields.length;o<a;++o){var c=this.fields[o]
c.isStatic&&(t+=e+"."+c.definitions.join(";\n"+e+".")+";\n")}return"(function() {\nfunction "+e+"() { throw 'Unable to create the interface'; }\n"+t+n+"return "+e+";\n})()"},Ae=function(e,n,r){var i=e.substring(1,e.length-1)
i=p(i),i=m(i,n)
var s=[],a=[]
i=i.replace(/"([DE])(\d+)"/g,function(e,t,n){return"D"===t?s.push(n):"E"===t&&a.push(n),""})
var l,h,u,c=i.split(/;(?:\s*;)*/g)
for(r!==o&&(l=r.replace(/^\s*extends\s+(.+?)\s*$/g,"$1").split(/\s*,\s*/g)),h=0,u=s.length;h<u;++h){var f=U(Pe[s[h]])
s[h]=f.name}for(h=0,u=c.length-1;h<u;++h){var g=t(c[h])
c[h]=X(g.middle)}var d=c.pop()
for(h=0,u=a.length;h<u;++h)a[h]=V(Pe[a[h]])
return new K(n,l,s,c,a,{tail:d})},W.prototype.getMembers=function(e,t,n){this.owner.base&&this.owner.base.body.getMembers(e,t,n)
var r,i,s,o
for(r=0,s=this.fields.length;r<s;++r){var a=this.fields[r].getNames()
for(i=0,o=a.length;i<o;++i)e[a[i]]=this.fields[r]}for(r=0,s=this.methods.length;r<s;++r){var l=this.methods[r]
t[l.name]=l}for(r=0,s=this.innerClasses.length;r<s;++r){var h=this.innerClasses[r]
n[h.name]=h}},W.prototype.toString=function(){var e=function(e){for(var t=0;e;)++t,e=e.scope
return t}(this.owner),t="$this_"+e,r=this.name,i="var "+t+" = this;\n",s="",o="",a={},l={},h={}
this.getMembers(a,l,h)
var u=ve
ve=function(e){var n=e.name
return"this"===n?e.callSign||!e.member?t+".$self":t:a.hasOwnProperty(n)?a[n].isStatic?r+"."+n:t+"."+n:h.hasOwnProperty(n)?t+"."+n:l.hasOwnProperty(n)?l[n].isStatic?r+"."+n:t+".$self."+n:u(e)}
var c
this.baseClassName?(c=u({name:this.baseClassName}),i+="var $super = { $upcast: "+t+" };\n",i+="function $superCstr(){"+c+".apply($super,arguments);if(!('$self' in $super)) $p.extendClassChain($super)}\n",o+=r+".$base = "+c+";\n"):i+="function $superCstr(){$p.extendClassChain("+t+")}\n",this.owner.base&&(s+="$p.extendStaticMembers("+r+", "+c+");\n")
var f,p,m,g
if(this.owner.interfaces){var d,v=[]
for(f=0,p=this.interfacesNames.length;f<p;++f)this.owner.interfaces[f]&&(d=u({name:this.interfacesNames[f]}),v.push(d),s+="$p.extendInterfaceMembers("+r+", "+d+");\n")
o+=r+".$interfaces = ["+v.join(", ")+"];\n"}for(this.functions.length>0&&(i+=this.functions.join("\n")+"\n"),B(this.innerClasses),f=0,p=this.innerClasses.length;f<p;++f){var y=this.innerClasses[f]
y.isStatic?(s+=r+"."+y.name+" = "+y+";\n",i+=t+"."+y.name+" = "+r+"."+y.name+";\n"):i+=t+"."+y.name+" = "+y+";\n"}for(f=0,p=this.fields.length;f<p;++f){var b=this.fields[f]
if(b.isStatic)for(s+=r+"."+b.definitions.join(";\n"+r+".")+";\n",m=0,g=b.definitions.length;m<g;++m){var A=b.definitions[m].name,x=r+"."+A
i+="$p.defineProperty("+t+", '"+A+"', {get: function(){return "+x+"}, set: function(val){"+x+" = val}});\n"}else i+=t+"."+b.definitions.join(";\n"+t+".")+";\n"}var w={}
for(f=0,p=this.methods.length;f<p;++f){var E=this.methods[f],S=w[E.name],P=E.name+"$"+E.params.params.length,C=!!E.params.methodArgsParam
S?(++S,P+="_"+S):S=1,E.methodId=P,w[E.name]=S,E.isStatic?(s+=E,s+="$p.addMethod("+r+", '"+E.name+"', "+P+", "+C+");\n",i+="$p.addMethod("+t+", '"+E.name+"', "+P+", "+C+");\n"):(i+=E,i+="$p.addMethod("+t+", '"+E.name+"', "+P+", "+C+");\n")}i+=n(this.misc.tail),this.cstrs.length>0&&(i+=this.cstrs.join("\n")+"\n"),i+="function $constr() {\n"
var M=[]
for(f=0,p=this.cstrs.length;f<p;++f){var T=this.cstrs[f].params.params.length,_=!!this.cstrs[f].params.methodArgsParam
M.push("if(arguments.length "+(_?">=":"===")+" "+T+") { $constr_"+T+".apply("+t+", arguments); }")}return M.length>0&&(i+=M.join(" else ")+" else "),i+="$superCstr();\n}\n",i+="$constr.apply(null, arguments);\n",ve=u,"(function() {\nfunction "+r+"() {\n"+i+"}\n"+s+o+"return "+r+";\n})()"},be=function(e,n,r,i){var s=e.substring(1,e.length-1)
s=p(s),s=m(s,n)
var a=[],l=[],h=[],u=[]
s=s.replace(/"([DEGH])(\d+)"/g,function(e,t,n){return"D"===t?a.push(n):"E"===t?l.push(n):"H"===t?u.push(n):h.push(n),""})
var c,f,g,d=s.replace(/^(?:\s*;)+/,"").split(/;(?:\s*;)*/g)
for(r!==o&&(c=r.replace(/^\s*extends\s+([A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)\s*$/g,"$1")),i!==o&&(f=i.replace(/^\s*implements\s+(.+?)\s*$/g,"$1").split(/\s*,\s*/g)),g=0;g<u.length;++g)u[g]=w(Pe[u[g]])
for(g=0;g<a.length;++g)a[g]=U(Pe[a[g]])
for(g=0;g<d.length-1;++g){var v=t(d[g])
d[g]=X(v.middle)}var y=d.pop()
for(g=0;g<h.length;++g)h[g]=Y(Pe[h[g]])
for(g=0;g<l.length;++g)l[g]=V(Pe[l[g]])
return new W(n,c,f,u,a,d,h,l,{tail:y})},Z.prototype.toString=function(){return"var "+this.name+" = "+this.body+";\n$p."+this.name+" = "+this.name+";\n"},q.prototype.toString=function(){return"var "+this.name+" = "+this.body+";\n$p."+this.name+" = "+this.name+";\n"},J.prototype.toString=function(){var e=i({},this.params.getNames()),t=ve
ve=function(n){return e.hasOwnProperty(n.name)?n.name:t(n)}
var n=this.params.prependMethodArgs(this.body.toString()),r="function "+this.name+this.params+" "+n+"\n$p."+this.name+" = "+this.name+";\n"+this.name+" = "+this.name+".bind($p);"
return ve=t,r},ne.prototype.toString=function(){return this.misc.prefix+this.argument.toString()},re.prototype.toString=function(){return this.misc.prefix+this.argument.toString()},ie.prototype.toString=function(){var e=this.misc.prefix
return this.argument!==o&&(e+=this.argument.toString()),e},se.prototype.toString=function(){return"case "+this.expr+":"},oe.prototype.toString=function(){return this.label},we=function(e,r,i){var s=new RegExp(/\b(catch|for|if|switch|while|with)\s*"B(\d+)"|\b(do|else|finally|return|throw|try|break|continue)\b|("[ADEH](\d+)")|\b(case)\s+([^:]+):|\b([A-Za-z_$][\w$]*\s*:)|(;)/g),a=[]
e=te(e)
for(var l,h,u=0;null!==(l=s.exec(e));){if(l[1]!==o){var c=e.lastIndexOf('"B',s.lastIndex),f=e.substring(u,c)
"for"===l[1]?a.push(new ne(k(Pe[l[2]]),{prefix:f})):"catch"===l[1]?a.push(new re(v(Pe[l[2]]),{prefix:f})):a.push(new ie(l[1],Se(Pe[l[2]]),{prefix:f}))}else if(l[3]!==o)a.push(new ie(l[3],o,{prefix:e.substring(u,s.lastIndex)}))
else if(l[4]!==o){if(h=e.substring(u,s.lastIndex-l[4].length),0!==n(h).length)continue
a.push(h)
var p=l[4].charAt(1),m=l[5]
"D"===p?a.push(r(Pe[m])):"E"===p?a.push(i(Pe[m])):"H"===p?a.push(w(Pe[m])):a.push(xe(Pe[m]))}else if(l[6]!==o)a.push(new se(Se(n(l[7]))))
else if(l[8]!==o){if(h=e.substring(u,s.lastIndex-l[8].length),0!==n(h).length)continue
a.push(new oe(e.substring(u,s.lastIndex)))}else{var g=t(e.substring(u,s.lastIndex-1))
a.push(g.left),a.push(D(g.middle)),a.push(g.right+";")}u=s.lastIndex}var d=t(e.substring(u))
return a.push(d.left),""!==d.middle&&(a.push(D(d.middle)),a.push(";"+d.right)),a},le.prototype.toString=function(){var e=ae(this.statements),t=ve
s(e)||(ve=function(n){return e.hasOwnProperty(n.name)?n.name:t(n)})
var n="{\n"+this.statements.join("")+"\n}"
return ve=t,n},xe=function(e){var n=t(e.substring(1,e.length-1))
return new le(we(n.middle))},he.prototype.toString=function(){for(var e,t=[],n=[],r=0,i=this.statements.length;r<i;++r)e=this.statements[r],e instanceof q||e instanceof Z?t.push(e):n.push(e)
B(t)
var s=ae(this.statements)
ve=function(e){var t=e.name
return s.hasOwnProperty(t)?t:ue.hasOwnProperty(t)||l.hasOwnProperty(t)||a.hasOwnProperty(t)?"$p."+t:t}
var o="// this code was autogenerated from PJS\n(function($p) {\n"+t.join("")+"\n"+n.join("")+"\n})"
return ve=null,o},Ee=function(){var e=p(Pe[0])
return e=e.replace(/\bimport\s+[^;]+;/g,""),new he(we(e,ee,Q))}
var Oe=Ee()
!function(e){function t(e,t){for(var n,r=t.split("."),s=e.scope;s;){if(s.hasOwnProperty(r[0])){n=s[r[0]]
break}s=s.scope}n===o&&(n=i[r[0]])
for(var a=1,l=r.length;a<l&&n;++a)n=n.inScope[r[a]]
return n}var n,r,i={}
for(n in Ce)if(Ce.hasOwnProperty(n)){r=Ce[n]
var s=r.scopeId,a=r.name
if(s){var l=Ce[s]
r.scope=l,l.inScope===o&&(l.inScope={}),l.inScope[a]=r}else i[a]=r}for(n in Ce)if(Ce.hasOwnProperty(n)){r=Ce[n]
var h=r.body.baseClassName
if(h){var u=t(r,h)
u&&(r.base=u,u.derived||(u.derived=[]),u.derived.push(r))}var c,f,p=r.body.interfacesNames,m=[]
if(p&&p.length>0){for(c=0,f=p.length;c<f;++c){var g=t(r,p[c])
m.push(g),g&&(g.derived||(g.derived=[]),g.derived.push(r))}m.length>0&&(r.interfaces=m)}}}(),function(e){function t(e,t){var n=o[e]
if(!n)return!1
var r=n.indexOf(t)
return!(r<0||(n.splice(r,1),n.length>0||(delete o[e],0)))}var n,r,i,s=[],o={}
for(n in Ce)if(Ce.hasOwnProperty(n))if(i=Ce[n],i.inScope||i.derived){var a=[]
if(i.inScope)for(r in i.inScope)i.inScope.hasOwnProperty(r)&&a.push(i.inScope[r])
i.derived&&(a=a.concat(i.derived)),o[n]=a}else s.push(n),i.weight=0
for(;s.length>0;)if(n=s.shift(),i=Ce[n],i.scopeId&&t(i.scopeId,i)&&(s.push(i.scopeId),Ce[i.scopeId].weight=i.weight+1),i.base&&t(i.base.classId,i)&&(s.push(i.base.classId),i.base.weight=i.weight+1),i.interfaces){var l,h
for(l=0,h=i.interfaces.length;l<h;++l)i.interfaces[l]&&t(i.interfaces[l].classId,i)&&(s.push(i.interfaces[l].classId),i.interfaces[l].weight=i.weight+1)}}()
var Ne=Oe.toString()
return Ne=Ne.replace(/\s*\n(?:[\t ]*\n)+/g,"\n\n"),Ne=Ne.replace(/__x([0-9A-F]{4})/g,function(e,t){return String.fromCharCode(parseInt(t,16))}),function(e,t){return e.replace(/'(\d+)'/g,function(e,n){var r=t[n]
return"/"===r.charAt(0)?r:/^'((?:[^'\\\n])|(?:\\.[0-9A-Fa-f]*))'$/.test(r)?"(new $p.Character("+r+"))":r})}(Ne,fe)}function s(e,t){var n=new RegExp(/\/\*\s*@pjs\s+((?:[^\*]|\*+[^\*\/])*)\*\//g).exec(e)
if(n&&2===n.length)for(var r=[],i=n.splice(1,2)[0].replace(/\{([\s\S]*?)\}/g,function(){return function(e,t){return r.push(t),"{"+(r.length-1)+"}"}}()).replace("\n","").replace("\r","").split(";"),s=function(e){return e.replace(/^\s*["']?/,"").replace(/["']?\s*$/,"")},o=0,a=i.length;o<a;o++){var l=i[o].split("=")
if(l&&2===l.length){var h=s(l[0]),u=s(l[1]),c=[]
if("preload"===h){c=u.split(",")
for(var f=0,p=c.length;f<p;f++){var m=s(c[f])
t.imageCache.add(m)}}else if("font"===h){c=u.split(",")
for(var g=0,d=c.length;g<d;g++){var v=s(c[g]),y=/^\{(\d*?)\}$/.exec(v)
PFont.preloading.add(y?JSON.parse("{"+r[y[1]]+"}"):v)}}else"pauseOnBlur"===h?t.options.pauseOnBlur="true"===u:"globalKeyEvents"===h?t.options.globalKeyEvents="true"===u:"param-"===h.substring(0,6)?t.params[h.substring(6)]=u:t.options[h]=u}}return e}var o,a=n.defaultScope,l=a.PConstants,h=n.aFunctions,u=n.Browser,c=u.document
t.compile=function(e){var n=new t.Sketch,r=s(e,n),o=i(r)
return n.sourceCode=o,n}
var f=e("../Helpers/PjsConsole")
return t.logger=new f(c),t}},{"../Helpers/PjsConsole":5}],27:[function(e,t,n){t.exports=function(e,t){function n(e,t){return e in l?l[e]:"function"==typeof l[t]?l[t]:function(e){if(e instanceof Array)return e
if("number"==typeof e){var t=[]
return t.length=e,t}}}var r=e.defaultScope,i=e.extend,s=e.Browser,o=s.ajax,a=s.navigator,l=s.window,h=(l.XMLHttpRequest,s.document),u=e.noop,c=r.PConstants
PFont=r.PFont,PShapeSVG=r.PShapeSVG,PVector=r.PVector,Char=Character=r.Char,ObjectIterator=r.ObjectIterator,XMLElement=r.XMLElement,XML=r.XML
var f,p=l.HTMLCanvasElement,m=l.HTMLImageElement
try{f=l.localStorage}catch(e){f={}}"document"in this&&this.document
h.head||(h.head=h.getElementsByTagName("head")[0])
var g=n("Float32Array","WebGLFloatArray"),d=n("Int32Array","WebGLIntArray"),v=n("Uint16Array","WebGLUnsignedShortArray"),y=n("Uint8Array","WebGLUnsignedByteArray")
if(h.documentMode>=9&&!h.doctype)throw"The doctype directive is missing. The recommended doctype in Internet Explorer is the HTML5 doctype: <!DOCTYPE html>"
var b=[],A={},x=function(e){e.externals.canvas.id!==t&&e.externals.canvas.id.length||(e.externals.canvas.id="__processing"+b.length),A[e.externals.canvas.id]=b.length,b.push(e)},w=function(e){b.splice(A[e],1),delete A[e]},E=this.Processing=function(e,n,s){function b(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent("on"+t,n),ye.push({elem:e,type:t,fn:n})}function A(e){var t=e.elem,n=e.type,r=e.fn
t.removeEventListener?t.removeEventListener(n,r,!1):t.detachEvent&&t.detachEvent("on"+n,r)}function S(e,t){Object.keys(ye).forEach(function(n){t.indexOf(n.type)>-1&&n.elem==e&&A(n.type)})}function P(e){return Array.prototype.slice.call(e,1)}function C(e,n,r,i){var s=Wt.locations[e]
s===t&&(s=Ae.getUniformLocation(n,r),Wt.locations[e]=s),null!==s&&(4===i.length?Ae.uniform4fv(s,i):3===i.length?Ae.uniform3fv(s,i):2===i.length?Ae.uniform2fv(s,i):Ae.uniform1f(s,i))}function M(e,n,r,i){var s=Wt.locations[e]
s===t&&(s=Ae.getUniformLocation(n,r),Wt.locations[e]=s),null!==s&&(4===i.length?Ae.uniform4iv(s,i):3===i.length?Ae.uniform3iv(s,i):2===i.length?Ae.uniform2iv(s,i):Ae.uniform1i(s,i))}function T(e,n,r,i,s){var o=Wt.locations[e]
o===t&&(o=Ae.getUniformLocation(n,r),Wt.locations[e]=o),-1!==o&&(16===s.length?Ae.uniformMatrix4fv(o,i,s):9===s.length?Ae.uniformMatrix3fv(o,i,s):Ae.uniformMatrix2fv(o,i,s))}function _(e,n,r,i,s){var o=Wt.attributes[e]
o===t&&(o=Ae.getAttribLocation(n,r),Wt.attributes[e]=o),-1!==o&&(Ae.bindBuffer(Ae.ARRAY_BUFFER,s),Ae.vertexAttribPointer(o,i,Ae.FLOAT,!1,0,0),Ae.enableVertexAttribArray(o))}function R(e,n,r){var i=Wt.attributes[e]
i===t&&(i=Ae.getAttribLocation(n,r),Wt.attributes[e]=i),-1!==i&&Ae.disableVertexAttribArray(i)}function L(e,t,n,r){var i,s,o,a
if(Ut===c.HSB){var l=be.color.toRGB(e,t,n)
i=l[0],s=l[1],o=l[2]}else i=Math.round(e/Bt*255),s=Math.round(t/$t*255),o=Math.round(n/Gt*255)
return a=Math.round(r/kt*255),i=i<0?0:i,s=s<0?0:s,o=o<0?0:o,a=a<0?0:a,i=i>255?255:i,s=s>255?255:s,o=o>255?255:o,(a=a>255?255:a)<<24&c.ALPHA_MASK|i<<16&c.RED_MASK|s<<8&c.GREEN_MASK|o&c.BLUE_MASK}function I(e,t){var n
return e&c.ALPHA_MASK?(n=Math.round(t/kt*255),n=n>255?255:n,n=n<0?0:n,e-(e&c.ALPHA_MASK)+(n<<24&c.ALPHA_MASK)):Ut===c.RGB?L(e,e,e,t):Ut===c.HSB?L(0,0,e/Bt*Gt,t):void 0}function D(e){if(e<=Bt&&e>=0){if(Ut===c.RGB)return L(e,e,e,kt)
if(Ut===c.HSB)return L(0,0,e/Bt*Gt,kt)}if(e)return e>2147483647&&(e-=4294967296),e}function O(e){var t,n,r
t=((e&c.RED_MASK)>>>16)/255,n=((e&c.GREEN_MASK)>>>8)/255,r=(e&c.BLUE_MASK)/255
var i,s,o=be.max(be.max(t,n),r),a=be.min(be.min(t,n),r)
return a===o?[0,0,o*Gt]:(s=(o-a)/o,i=t===o?(n-r)/(o-a):n===o?2+(r-t)/(o-a):4+(t-n)/(o-a),i/=6,i<0?i+=1:i>1&&(i-=1),[i*Bt,s*$t,o*Gt])}function N(){Ae.save()}function F(){Ae.restore(),mt=!0,ut=!0}function k(){var e=(Date.now()-Yt)/1e3
Kt++
var t=Kt/e
e>.5&&(Yt=Date.now(),Kt=0,be.__frameRate=t),be.frameCount++}function B(e){var t=parseInt("0x"+e,16)
return t>2147483647&&(t-=4294967296),t}function $(e){return"number"==typeof e?0!==e:"boolean"==typeof e?e:"string"==typeof e?"true"===e.toLowerCase():e instanceof Char?49===e.code||84===e.code||116===e.code:void 0}function G(e){return"number"==typeof e?e:"boolean"==typeof e?e?1:0:"string"==typeof e?parseFloat(e):e instanceof Char?e.code:void 0}function V(e,t){if("number"==typeof e)return 4294967295&e
if("boolean"==typeof e)return e?1:0
if("string"==typeof e){return 4294967295&parseInt(e,t||10)}return e instanceof Char?e.code:void 0}function z(){at&&(ut&&(Ae.fillStyle=be.color.toString(ht),ut=!1),Ae.fill())}function U(){ct&&(mt&&(Ae.strokeStyle=be.color.toString(pt),mt=!1),Ae.stroke())}function H(){z(),U(),Ae.closePath()}function X(e,n,r){var i=vr.shift()
i===t&&(i={},i.canvas=h.createElement("canvas"),i.context=i.canvas.getContext("2d")),vr.push(i)
var s=i.canvas,o=i.context,a=n||e.width,l=r||e.height
return s.width=a,s.height=l,e?"data"in e?o.putImageData(e,0,0):(o.clearRect(0,0,a,l),o.drawImage(e,0,0,a,l)):o.clearRect(0,0,a,l),i}function j(e){return{getLength:function(e){return function(){if(e.isRemote)throw"Image is loaded remotely. Cannot get length."
return e.imageData.data.length?e.imageData.data.length/4:0}}(e),getPixel:function(e){return function(t){var n=4*t,r=e.imageData.data
if(e.isRemote)throw"Image is loaded remotely. Cannot get pixels."
return r[n+3]<<24&c.ALPHA_MASK|r[n]<<16&c.RED_MASK|r[n+1]<<8&c.GREEN_MASK|r[n+2]&c.BLUE_MASK}}(e),setPixel:function(e){return function(t,n){var r=4*t,i=e.imageData.data
if(e.isRemote)throw"Image is loaded remotely. Cannot set pixel."
i[r+0]=(n&c.RED_MASK)>>>16,i[r+1]=(n&c.GREEN_MASK)>>>8,i[r+2]=n&c.BLUE_MASK,i[r+3]=(n&c.ALPHA_MASK)>>>24,e.__isDirty=!0}}(e),toArray:function(e){return function(){var t=[],n=e.imageData.data,r=e.width*e.height
if(e.isRemote)throw"Image is loaded remotely. Cannot get pixels."
for(var i=0,s=0;i<r;i++,s+=4)t.push(n[s+3]<<24&c.ALPHA_MASK|n[s]<<16&c.RED_MASK|n[s+1]<<8&c.GREEN_MASK|n[s+2]&c.BLUE_MASK)
return t}}(e),set:function(e){return function(t){var n,r,i
if(this.isRemote)throw"Image is loaded remotely. Cannot set pixels."
r=e.imageData.data
for(var s=0,o=t.length;s<o;s++)i=t[s],n=4*s,r[n+0]=(i&c.RED_MASK)>>>16,r[n+1]=(i&c.GREEN_MASK)>>>8,r[n+2]=i&c.BLUE_MASK,r[n+3]=(i&c.ALPHA_MASK)>>>24
e.__isDirty=!0}}(e)}}function Y(e,t){var n
if(e>=be.width||e<0||t<0||t>=be.height)return 0
if(un){var r=4*((0|e)+be.width*(0|t))
return n=be.imageData.data,n[r+3]<<24&c.ALPHA_MASK|n[r]<<16&c.RED_MASK|n[r+1]<<8&c.GREEN_MASK|n[r+2]&c.BLUE_MASK}return n=be.toImageData(0|e,0|t,1,1).data,n[3]<<24&c.ALPHA_MASK|n[0]<<16&c.RED_MASK|n[1]<<8&c.GREEN_MASK|n[2]&c.BLUE_MASK}function K(e,t,n){if(n.isRemote)throw"Image is loaded remotely. Cannot get x,y."
var r=t*n.width*4+4*e,i=n.imageData.data
return i[r+3]<<24&c.ALPHA_MASK|i[r]<<16&c.RED_MASK|i[r+1]<<8&c.GREEN_MASK|i[r+2]&c.BLUE_MASK}function W(e,t,n,r){var i=new yr(n,r,c.ARGB)
return i.fromImageData(be.toImageData(e,t,n,r)),i}function Z(e,t,n,r,i){if(i.isRemote)throw"Image is loaded remotely. Cannot get x,y,w,h."
for(var s=new yr(n,r,c.ARGB),o=s.imageData.data,a=i.width,l=i.height,h=i.imageData.data,u=Math.max(0,-t),f=Math.max(0,-e),p=Math.min(r,l-t),m=Math.min(n,a-e),g=u;g<p;++g)for(var d=4*((t+g)*a+(e+f)),v=4*(g*n+f),y=f;y<m;++y)o[v++]=h[d++],o[v++]=h[d++],o[v++]=h[d++],o[v++]=h[d++]
return s.__isDirty=!0,s}function q(){un&&(Ae=Ze,un=!1,be.updatePixels())}function Q(){for(var e in Ae)"function"==typeof Ae[e]?function(e,t){function n(){q(),Ae[t].apply(Ae,arguments)}e[t]=n}(this,e):function(e,t){function n(){return q(),Ae[t]}function r(e){q(),Ae[t]=e}be.defineProperty(e,t,{get:n,set:r})}(this,e)}function J(){un||(be.loadPixels(),null===hn&&(Ze=Ae,hn=new Q),un=!0,Ae=hn,qe=0)}function ee(e,t,n){e<be.width&&e>=0&&t>=0&&t<be.height&&(J(),be.pixels.setPixel((0|e)+be.width*(0|t),n),++qe>cn&&q())}function te(e,t,n,r){if(r.isRemote)throw"Image is loaded remotely. Cannot set x,y."
var i=be.color.toArray(n),s=t*r.width*4+4*e,o=r.imageData.data
o[s]=i[0],o[s+1]=i[1],o[s+2]=i[2],o[s+3]=i[3]}function ne(e){return e instanceof String?e:"number"==typeof e?e===(0|e)?e.toString():be.nf(e,0,3):null===e||e===t?"":e.toString()}function re(e,t,n,r){var i,s
e.indexOf("\n")<0?(i=[e],s=1):(i=e.split(/\r?\n/g),s=i.length)
var o=0
en===c.TOP?o=sn+on:en===c.CENTER?o=sn/2-(s-1)*an/2:en===c.BOTTOM&&(o=-(on+(s-1)*an))
for(var a=0;a<s;++a){var l=i[a]
we.text$line(l,t,n+o,r,Jt),o+=an}}function ie(e,t,n,r,i,s){if(0!==e.length&&0!==r&&0!==i&&!(rn>i)){for(var o=-1,a=0,l=0,h=[],u=0,f=e.length;u<f;u++){var p=e[u],m=" "===p,g=ln.measureTextWidth(p)
if("\n"!==p&&l+g<=r)m&&(o=u),l+=g
else{if(o+1===a){if(!(u>0))return
o=u}"\n"===p?(h.push({text:e.substring(a,u),width:l}),a=u+1):(h.push({text:e.substring(a,o+1),width:l}),a=o+1),l=0,u=a-1}}a<f&&h.push({text:e.substring(a),width:l})
var d=1,v=sn
Jt===c.CENTER?d=r/2:Jt===c.RIGHT&&(d=r)
var y=h.length,b=Math.min(y,Math.floor(i/an))
en===c.TOP?v=sn+on:en===c.CENTER?v=i/2-an*(b/2-1):en===c.BOTTOM&&(v=on+an)
var A,x,w
for(A=0;A<y&&(w=A*an,!(v+w>i-on));A++)x=h[A],we.text$line(x.text,t+d,n+v+w,s,Jt)}}function se(e){we="3D"===e?new er:"2D"===e?new Jn:new tr
for(var t in tr.prototype)tr.prototype.hasOwnProperty(t)&&t.indexOf("$")<0&&(be[t]=we[t])
we.$init()}function oe(e){return function(){return se("2D"),we[e].apply(this,arguments)}}function ae(e){var t=e.which||e.keyCode
switch(t){case 13:return 10
case 91:case 93:case 224:return 157
case 57392:return 17
case 46:return 127
case 45:return 155}return t}function le(e){var t=e.which||e.keyCode,n=e.shiftKey||e.ctrlKey||e.altKey||e.metaKey
switch(t){case 13:t=n?13:10
break
case 8:t=n?127:8}return new Char(t)}function he(e){return"function"==typeof e.preventDefault?e.preventDefault():"function"==typeof e.stopPropagation&&e.stopPropagation(),!1}function ue(){var e
for(e in fn)if(fn.hasOwnProperty(e))return void(be.__keyPressed=!0)
be.__keyPressed=!1}function ce(){be.__keyPressed=!1,fn=[],pn=null}function fe(e,t){fn[e]=t,pn=null,be.key=t,be.keyCode=e,be.keyPressed(),be.keyCode=0,be.keyTyped(),ue()}function pe(e){var t=ae(e)
if(t===c.DELETE)return void fe(t,new Char(127))
if(mn.indexOf(t)<0)return void(pn=t)
var n=new Char(c.CODED)
return be.key=n,be.keyCode=t,fn[t]=n,be.keyPressed(),pn=null,ue(),he(e)}function me(e){if(null!==pn){return fe(pn,le(e)),he(e)}}function ge(e){var n=ae(e),r=fn[n]
r!==t&&(be.key=r,be.keyCode=n,be.keyReleased(),delete fn[n],ue())}if(!(this instanceof E))throw"called Processing constructor as if it were a function: missing 'new'."
var de={},ve=e===t&&n===t
if(!("getContext"in(de=ve?h.createElement("canvas"):"string"==typeof e?h.getElementById(e):e)))throw"called Processing constructor without passing canvas element reference or id."
var ye=[],be=this
be.Char=be.Character=Char,ye=[],i.withCommonFunctions(be),i.withMath(be),i.withProxyFunctions(be,P),i.withTouch(be,de,b,S,h,c),s&&Object.keys(s).forEach(function(e){be[e]=s[e]}),be.externals={canvas:de,context:t,sketch:t,window:l},be.name="Processing.js Instance",be.use3DContext=!1,be.focused=!1,be.breakShape=!1,be.glyphTable={},be.pmouseX=0,be.pmouseY=0,be.mouseX=0,be.mouseY=0,be.mouseButton=0,be.mouseScroll=0,be.mouseClicked=t,be.mouseDragged=t,be.mouseMoved=t,be.mousePressed=t,be.mouseReleased=t,be.mouseScrolled=t,be.mouseOver=t,be.mouseOut=t,be.touchStart=t,be.touchEnd=t,be.touchMove=t,be.touchCancel=t,be.key=t,be.keyCode=t,be.keyPressed=u,be.keyReleased=u,be.keyTyped=u,be.draw=t,be.setup=t,be.__mousePressed=!1,be.__keyPressed=!1,be.__frameRate=60,be.frameCount=0,be.width=100,be.height=100
var Ae,xe,we,Ee,Se,Pe,Ce,Me,Te,_e,Re,Le,Ie,De,Oe,Ne,Fe,ke,Be,$e,Ge,Ve,ze,Ue,He,Xe,je,Ye,Ke,We,Ze,qe,Qe,Je,et,tt,nt,rt,it,st,ot,at=!0,lt=[1,1,1,1],ht=4294967295,ut=!0,ct=!0,ft=[0,0,0,1],pt=4278190080,mt=!0,gt=1,dt=!1,vt=!1,yt=!0,bt=0,At=c.CORNER,xt=c.CENTER,wt=0,Et=0,St=0,Pt=c.NORMAL_MODE_AUTO,Ct=60,Mt=1e3/Ct,Tt=c.ARROW,_t=de.style.cursor,Rt=c.POLYGON,Lt=[],It=0,Dt=20,Ot=!1,Nt=-3355444,Ft=20,kt=255,Bt=255,$t=255,Gt=255,Vt=0,zt=0,Ut=c.RGB,Ht=null,Xt=null,jt=Date.now(),Yt=jt,Kt=0,Wt={attributes:{},locations:{}},Zt={width:0,height:0},qt=c.IMAGE,Qt=!1,Jt=c.LEFT,en=c.BASELINE,tn=c.MODEL,nn="Arial",rn=12,sn=9,on=2,an=14,ln=PFont.get(nn,rn),hn=null,un=!1,cn=1e3,fn=[],pn=null,mn=[c.SHIFT,c.CONTROL,c.ALT,c.CAPSLK,c.PGUP,c.PGDN,c.END,c.HOME,c.LEFT,c.UP,c.RIGHT,c.DOWN,c.NUMLK,c.INSERT,c.F1,c.F2,c.F3,c.F4,c.F5,c.F6,c.F7,c.F8,c.F9,c.F10,c.F11,c.F12,c.META],gn=0,dn=0,vn=0,yn=[],bn=[],An=[],xn=new g(c.SINCOS_LENGTH),wn=new g(c.SINCOS_LENGTH),En=!1,Sn=!1,Pn=Math.PI/180*60,Cn=be.width/2,Mn=be.height/2,Tn=Mn/Math.tan(Pn/2),_n=Tn/10,Rn=10*Tn,Ln=be.width/be.height,In=[],Dn=[],On=0,Nn=!1,Fn=!1,kn=!0,Bn=c.CORNER,$n=[],Gn=new g([.5,.5,-.5,.5,-.5,-.5,-.5,-.5,-.5,-.5,-.5,-.5,-.5,.5,-.5,.5,.5,-.5,.5,.5,.5,-.5,.5,.5,-.5,-.5,.5,-.5,-.5,.5,.5,-.5,.5,.5,.5,.5,.5,.5,-.5,.5,.5,.5,.5,-.5,.5,.5,-.5,.5,.5,-.5,-.5,.5,.5,-.5,.5,-.5,-.5,.5,-.5,.5,-.5,-.5,.5,-.5,-.5,.5,-.5,-.5,-.5,.5,-.5,-.5,-.5,-.5,-.5,-.5,-.5,.5,-.5,.5,.5,-.5,.5,.5,-.5,.5,-.5,-.5,-.5,-.5,.5,.5,.5,.5,.5,-.5,-.5,.5,-.5,-.5,.5,-.5,-.5,.5,.5,.5,.5,.5]),Vn=new g([.5,.5,.5,.5,-.5,.5,.5,.5,-.5,.5,-.5,-.5,-.5,.5,-.5,-.5,-.5,-.5,-.5,.5,.5,-.5,-.5,.5,.5,.5,.5,.5,.5,-.5,.5,.5,-.5,-.5,.5,-.5,-.5,.5,-.5,-.5,.5,.5,-.5,.5,.5,.5,.5,.5,.5,-.5,.5,.5,-.5,-.5,.5,-.5,-.5,-.5,-.5,-.5,-.5,-.5,-.5,-.5,-.5,.5,-.5,-.5,.5,.5,-.5,.5]),zn=new g([0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0]),Un=new g([0,0,0,0,1,0,1,1,0,1,0,0]),Hn=new g([0,0,1,0,0,1,0,0,1,0,0,1]),Xn=/Windows/.test(a.userAgent),jn="varying vec4 vFrontColor;attribute vec3 aVertex;attribute vec3 aNormal;attribute vec4 aColor;attribute vec2 aTexture;varying   vec2 vTexture;uniform vec4 uColor;uniform bool uUsingMat;uniform vec3 uSpecular;uniform vec3 uMaterialEmissive;uniform vec3 uMaterialAmbient;uniform vec3 uMaterialSpecular;uniform float uShininess;uniform mat4 uModel;uniform mat4 uView;uniform mat4 uProjection;uniform mat4 uNormalTransform;uniform int uLightCount;uniform vec3 uFalloff;struct Light {  int type;  vec3 color;  vec3 position;  vec3 direction;  float angle;  vec3 halfVector;  float concentration;};uniform Light uLights0;uniform Light uLights1;uniform Light uLights2;uniform Light uLights3;uniform Light uLights4;uniform Light uLights5;uniform Light uLights6;uniform Light uLights7;Light getLight(int index){  if(index == 0) return uLights0;  if(index == 1) return uLights1;  if(index == 2) return uLights2;  if(index == 3) return uLights3;  if(index == 4) return uLights4;  if(index == 5) return uLights5;  if(index == 6) return uLights6;  return uLights7;}void AmbientLight( inout vec3 totalAmbient, in vec3 ecPos, in Light light ) {  float d = length( light.position - ecPos );  float attenuation = 1.0 / ( uFalloff[0] + ( uFalloff[1] * d ) + ( uFalloff[2] * d * d ));  totalAmbient += light.color * attenuation;}void DirectionalLight( inout vec3 col, inout vec3 spec, in vec3 vertNormal, in vec3 ecPos, in Light light ) {  float powerFactor = 0.0;  float nDotVP = max(0.0, dot( vertNormal, normalize(-light.position) ));  float nDotVH = max(0.0, dot( vertNormal, normalize(-light.position-normalize(ecPos) )));  if( nDotVP != 0.0 ){    powerFactor = pow( nDotVH, uShininess );  }  col += light.color * nDotVP;  spec += uSpecular * powerFactor;}void PointLight( inout vec3 col, inout vec3 spec, in vec3 vertNormal, in vec3 ecPos, in Light light ) {  float powerFactor;   vec3 VP = light.position - ecPos;  float d = length( VP );   VP = normalize( VP );  float attenuation = 1.0 / ( uFalloff[0] + ( uFalloff[1] * d ) + ( uFalloff[2] * d * d ));  float nDotVP = max( 0.0, dot( vertNormal, VP ));  vec3 halfVector = normalize( VP - normalize(ecPos) );  float nDotHV = max( 0.0, dot( vertNormal, halfVector ));  if( nDotVP == 0.0 ) {    powerFactor = 0.0;  }  else {    powerFactor = pow( nDotHV, uShininess );  }  spec += uSpecular * powerFactor * attenuation;  col += light.color * nDotVP * attenuation;}void SpotLight( inout vec3 col, inout vec3 spec, in vec3 vertNormal, in vec3 ecPos, in Light light ) {  float spotAttenuation;  float powerFactor = 0.0;  vec3 VP = light.position - ecPos;  vec3 ldir = normalize( -light.direction );  float d = length( VP );  VP = normalize( VP );  float attenuation = 1.0 / ( uFalloff[0] + ( uFalloff[1] * d ) + ( uFalloff[2] * d * d ) );  float spotDot = dot( VP, ldir );"+(Xn?"  spotAttenuation = 1.0; ":"  if( spotDot > cos( light.angle ) ) {    spotAttenuation = pow( spotDot, light.concentration );  }  else{    spotAttenuation = 0.0;  }  attenuation *= spotAttenuation;")+"  float nDotVP = max( 0.0, dot( vertNormal, VP ) );  vec3 halfVector = normalize( VP - normalize(ecPos) );  float nDotHV = max( 0.0, dot( vertNormal, halfVector ) );  if( nDotVP != 0.0 ) {    powerFactor = pow( nDotHV, uShininess );  }  spec += uSpecular * powerFactor * attenuation;  col += light.color * nDotVP * attenuation;}void main(void) {  vec3 finalAmbient = vec3( 0.0 );  vec3 finalDiffuse = vec3( 0.0 );  vec3 finalSpecular = vec3( 0.0 );  vec4 col = uColor;  if ( uColor[0] == -1.0 ){    col = aColor;  }  vec3 norm = normalize(vec3( uNormalTransform * vec4( aNormal, 0.0 ) ));  vec4 ecPos4 = uView * uModel * vec4(aVertex, 1.0);  vec3 ecPos = (vec3(ecPos4))/ecPos4.w;  if( uLightCount == 0 ) {    vFrontColor = col + vec4(uMaterialSpecular, 1.0);  }  else {    for( int i = 0; i < 8; i++ ) {      Light l = getLight(i);      if( i >= uLightCount ){        break;      }      if( l.type == 0 ) {        AmbientLight( finalAmbient, ecPos, l );      }      else if( l.type == 1 ) {        DirectionalLight( finalDiffuse, finalSpecular, norm, ecPos, l );      }      else if( l.type == 2 ) {        PointLight( finalDiffuse, finalSpecular, norm, ecPos, l );      }      else {        SpotLight( finalDiffuse, finalSpecular, norm, ecPos, l );      }    }   if( uUsingMat == false ) {     vFrontColor = vec4(       vec3( col ) * finalAmbient +       vec3( col ) * finalDiffuse +       vec3( col ) * finalSpecular,       col[3] );   }   else{     vFrontColor = vec4(        uMaterialEmissive +        (vec3(col) * uMaterialAmbient * finalAmbient ) +        (vec3(col) * finalDiffuse) +        (uMaterialSpecular * finalSpecular),        col[3] );    }  }  vTexture.xy = aTexture.xy;  gl_Position = uProjection * uView * uModel * vec4( aVertex, 1.0 );}",Yn=function(e,t,n){var r=e.createShader(e.VERTEX_SHADER)
if(e.shaderSource(r,t),e.compileShader(r),!e.getShaderParameter(r,e.COMPILE_STATUS))throw e.getShaderInfoLog(r)
var i=e.createShader(e.FRAGMENT_SHADER)
if(e.shaderSource(i,n),e.compileShader(i),!e.getShaderParameter(i,e.COMPILE_STATUS))throw e.getShaderInfoLog(i)
var s=e.createProgram()
if(e.attachShader(s,r),e.attachShader(s,i),e.linkProgram(s),!e.getProgramParameter(s,e.LINK_STATUS))throw"Error linking shaders."
return s},Kn=function(e,t,n,r,i){return{x:e,y:t,w:n,h:r}},Wn=Kn,Zn=function(e,t,n,r,i){return{x:e,y:t,w:i?n:n-e,h:i?r:r-t}},qn=function(e,t,n,r,i){return{x:e-n/2,y:t-r/2,w:n,h:r}},Qn=function(){},Jn=function(){},er=function(){},tr=function(){}
Jn.prototype=new Qn,Jn.prototype.constructor=Jn,er.prototype=new Qn,er.prototype.constructor=er,tr.prototype=new Qn,tr.prototype.constructor=tr,Qn.prototype.a3DOnlyFunction=u,be.shape=function(e,t,n,r,i){arguments.length>=1&&null!==arguments[0]&&e.isVisible()&&(be.pushMatrix(),Bn===c.CENTER?5===arguments.length?(be.translate(t-r/2,n-i/2),be.scale(r/e.getWidth(),i/e.getHeight())):3===arguments.length?be.translate(t-e.getWidth()/2,-e.getHeight()/2):be.translate(-e.getWidth()/2,-e.getHeight()/2):Bn===c.CORNER?5===arguments.length?(be.translate(t,n),be.scale(r/e.getWidth(),i/e.getHeight())):3===arguments.length&&be.translate(t,n):Bn===c.CORNERS&&(5===arguments.length?(r-=t,i-=n,be.translate(t,n),be.scale(r/e.getWidth(),i/e.getHeight())):3===arguments.length&&be.translate(t,n)),e.draw(be),(1===arguments.length&&Bn===c.CENTER||arguments.length>1)&&be.popMatrix())},be.shapeMode=function(e){Bn=e},be.loadShape=function(e){return 1===arguments.length&&e.indexOf(".svg")>-1?new PShapeSVG(null,e):null},be.loadXML=function(e){return new XML(be,e)},be.parseXML=function(e){var t=new XML
return t.parse(e),t}
var nr=function(e){for(var t=0,n=0;n<e.length;n++)t=0!==n?Math.max(t,Math.abs(e[n])):Math.abs(e[n])
var r=(t+"").indexOf(".")
return 0===r?r=1:-1===r&&(r=(t+"").length),r},rr=be.PMatrix2D=function(){0===arguments.length?this.reset():1===arguments.length&&arguments[0]instanceof rr?this.set(arguments[0].array()):6===arguments.length&&this.set(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])}
rr.prototype={set:function(){if(6===arguments.length){var e=arguments
this.set([e[0],e[1],e[2],e[3],e[4],e[5]])}else 1===arguments.length&&arguments[0]instanceof rr?this.elements=arguments[0].array():1===arguments.length&&arguments[0]instanceof Array&&(this.elements=arguments[0].slice())},get:function(){var e=new rr
return e.set(this.elements),e},reset:function(){this.set([1,0,0,0,1,0])},array:function(){return this.elements.slice()},translate:function(e,t){this.elements[2]=e*this.elements[0]+t*this.elements[1]+this.elements[2],this.elements[5]=e*this.elements[3]+t*this.elements[4]+this.elements[5]},invTranslate:function(e,t){this.translate(-e,-t)},transpose:function(){},mult:function(e,t){var n,r
return e instanceof PVector?(n=e.x,r=e.y,t||(t=new PVector)):e instanceof Array&&(n=e[0],r=e[1],t||(t=[])),t instanceof Array?(t[0]=this.elements[0]*n+this.elements[1]*r+this.elements[2],t[1]=this.elements[3]*n+this.elements[4]*r+this.elements[5]):t instanceof PVector&&(t.x=this.elements[0]*n+this.elements[1]*r+this.elements[2],t.y=this.elements[3]*n+this.elements[4]*r+this.elements[5],t.z=0),t},multX:function(e,t){return e*this.elements[0]+t*this.elements[1]+this.elements[2]},multY:function(e,t){return e*this.elements[3]+t*this.elements[4]+this.elements[5]},skewX:function(e){this.apply(1,0,1,e,0,0)},skewY:function(e){this.apply(1,0,1,0,e,0)},shearX:function(e){this.apply(1,0,1,Math.tan(e),0,0)},shearY:function(e){this.apply(1,0,1,0,Math.tan(e),0)},determinant:function(){return this.elements[0]*this.elements[4]-this.elements[1]*this.elements[3]},invert:function(){var e=this.determinant()
if(Math.abs(e)>c.MIN_INT){var t=this.elements[0],n=this.elements[1],r=this.elements[2],i=this.elements[3],s=this.elements[4],o=this.elements[5]
return this.elements[0]=s/e,this.elements[3]=-i/e,this.elements[1]=-n/e,this.elements[4]=t/e,this.elements[2]=(n*o-s*r)/e,this.elements[5]=(i*r-t*o)/e,!0}return!1},scale:function(e,t){e&&!t&&(t=e),e&&t&&(this.elements[0]*=e,this.elements[1]*=t,this.elements[3]*=e,this.elements[4]*=t)},invScale:function(e,t){e&&!t&&(t=e),this.scale(1/e,1/t)},apply:function(){var e
1===arguments.length&&arguments[0]instanceof rr?e=arguments[0].array():6===arguments.length?e=Array.prototype.slice.call(arguments):1===arguments.length&&arguments[0]instanceof Array&&(e=arguments[0])
for(var t=[0,0,this.elements[2],0,0,this.elements[5]],n=0,r=0;r<2;r++)for(var i=0;i<3;i++,n++)t[n]+=this.elements[3*r+0]*e[i+0]+this.elements[3*r+1]*e[i+3]
this.elements=t.slice()},preApply:function(){var e
1===arguments.length&&arguments[0]instanceof rr?e=arguments[0].array():6===arguments.length?e=Array.prototype.slice.call(arguments):1===arguments.length&&arguments[0]instanceof Array&&(e=arguments[0])
var t=[0,0,e[2],0,0,e[5]]
t[2]=e[2]+this.elements[2]*e[0]+this.elements[5]*e[1],t[5]=e[5]+this.elements[2]*e[3]+this.elements[5]*e[4],t[0]=this.elements[0]*e[0]+this.elements[3]*e[1],t[3]=this.elements[0]*e[3]+this.elements[3]*e[4],t[1]=this.elements[1]*e[0]+this.elements[4]*e[1],t[4]=this.elements[1]*e[3]+this.elements[4]*e[4],this.elements=t.slice()},rotate:function(e){var t=Math.cos(e),n=Math.sin(e),r=this.elements[0],i=this.elements[1]
this.elements[0]=t*r+n*i,this.elements[1]=-n*r+t*i,r=this.elements[3],i=this.elements[4],this.elements[3]=t*r+n*i,this.elements[4]=-n*r+t*i},rotateZ:function(e){this.rotate(e)},invRotateZ:function(e){this.rotateZ(e-Math.PI)},print:function(){var e=nr(this.elements),t=be.nfs(this.elements[0],e,4)+" "+be.nfs(this.elements[1],e,4)+" "+be.nfs(this.elements[2],e,4)+"\n"+be.nfs(this.elements[3],e,4)+" "+be.nfs(this.elements[4],e,4)+" "+be.nfs(this.elements[5],e,4)+"\n\n"
be.println(t)}}
var ir=be.PMatrix3D=function(){this.reset()}
ir.prototype={set:function(){16===arguments.length?this.elements=Array.prototype.slice.call(arguments):1===arguments.length&&arguments[0]instanceof ir?this.elements=arguments[0].array():1===arguments.length&&arguments[0]instanceof Array&&(this.elements=arguments[0].slice())},get:function(){var e=new ir
return e.set(this.elements),e},reset:function(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]},array:function(){return this.elements.slice()},translate:function(e,n,r){r===t&&(r=0),this.elements[3]+=e*this.elements[0]+n*this.elements[1]+r*this.elements[2],this.elements[7]+=e*this.elements[4]+n*this.elements[5]+r*this.elements[6],this.elements[11]+=e*this.elements[8]+n*this.elements[9]+r*this.elements[10],this.elements[15]+=e*this.elements[12]+n*this.elements[13]+r*this.elements[14]},transpose:function(){var e=this.elements[4]
this.elements[4]=this.elements[1],this.elements[1]=e,e=this.elements[8],this.elements[8]=this.elements[2],this.elements[2]=e,e=this.elements[6],this.elements[6]=this.elements[9],this.elements[9]=e,e=this.elements[3],this.elements[3]=this.elements[12],this.elements[12]=e,e=this.elements[7],this.elements[7]=this.elements[13],this.elements[13]=e,e=this.elements[11],this.elements[11]=this.elements[14],this.elements[14]=e},mult:function(e,t){var n,r,i,s
return e instanceof PVector?(n=e.x,r=e.y,i=e.z,s=1,t||(t=new PVector)):e instanceof Array&&(n=e[0],r=e[1],i=e[2],s=e[3]||1,(!t||3!==t.length&&4!==t.length)&&(t=[0,0,0])),t instanceof Array&&(3===t.length?(t[0]=this.elements[0]*n+this.elements[1]*r+this.elements[2]*i+this.elements[3],t[1]=this.elements[4]*n+this.elements[5]*r+this.elements[6]*i+this.elements[7],t[2]=this.elements[8]*n+this.elements[9]*r+this.elements[10]*i+this.elements[11]):4===t.length&&(t[0]=this.elements[0]*n+this.elements[1]*r+this.elements[2]*i+this.elements[3]*s,t[1]=this.elements[4]*n+this.elements[5]*r+this.elements[6]*i+this.elements[7]*s,t[2]=this.elements[8]*n+this.elements[9]*r+this.elements[10]*i+this.elements[11]*s,t[3]=this.elements[12]*n+this.elements[13]*r+this.elements[14]*i+this.elements[15]*s)),t instanceof PVector&&(t.x=this.elements[0]*n+this.elements[1]*r+this.elements[2]*i+this.elements[3],t.y=this.elements[4]*n+this.elements[5]*r+this.elements[6]*i+this.elements[7],t.z=this.elements[8]*n+this.elements[9]*r+this.elements[10]*i+this.elements[11]),t},preApply:function(){var e
1===arguments.length&&arguments[0]instanceof ir?e=arguments[0].array():16===arguments.length?e=Array.prototype.slice.call(arguments):1===arguments.length&&arguments[0]instanceof Array&&(e=arguments[0])
for(var t=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],n=0,r=0;r<4;r++)for(var i=0;i<4;i++,n++)t[n]+=this.elements[i+0]*e[4*r+0]+this.elements[i+4]*e[4*r+1]+this.elements[i+8]*e[4*r+2]+this.elements[i+12]*e[4*r+3]
this.elements=t.slice()},apply:function(){var e
1===arguments.length&&arguments[0]instanceof ir?e=arguments[0].array():16===arguments.length?e=Array.prototype.slice.call(arguments):1===arguments.length&&arguments[0]instanceof Array&&(e=arguments[0])
for(var t=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],n=0,r=0;r<4;r++)for(var i=0;i<4;i++,n++)t[n]+=this.elements[4*r+0]*e[i+0]+this.elements[4*r+1]*e[i+4]+this.elements[4*r+2]*e[i+8]+this.elements[4*r+3]*e[i+12]
this.elements=t.slice()},rotate:function(e,t,n,r){if(arguments.length<4)this.rotateZ(e)
else{var i=new PVector(t,n,r),s=i.mag()
if(0===s)return
1!=s&&(i.normalize(),t=i.x,n=i.y,r=i.z)
var o=be.cos(e),a=be.sin(e),l=1-o
this.apply(l*t*t+o,l*t*n-a*r,l*t*r+a*n,0,l*t*n+a*r,l*n*n+o,l*n*r-a*t,0,l*t*r-a*n,l*n*r+a*t,l*r*r+o,0,0,0,0,1)}},invApply:function(){st===t&&(st=new ir)
var e=arguments
return st.set(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15]),!!st.invert()&&(this.preApply(st),!0)},rotateX:function(e){var t=be.cos(e),n=be.sin(e)
this.apply([1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1])},rotateY:function(e){var t=be.cos(e),n=be.sin(e)
this.apply([t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1])},rotateZ:function(e){var t=Math.cos(e),n=Math.sin(e)
this.apply([t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1])},scale:function(e,t,n){!e||t||n?e&&t&&!n&&(n=1):t=n=e,e&&t&&n&&(this.elements[0]*=e,this.elements[1]*=t,this.elements[2]*=n,this.elements[4]*=e,this.elements[5]*=t,this.elements[6]*=n,this.elements[8]*=e,this.elements[9]*=t,this.elements[10]*=n,this.elements[12]*=e,this.elements[13]*=t,this.elements[14]*=n)},skewX:function(e){var t=Math.tan(e)
this.apply(1,t,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},skewY:function(e){var t=Math.tan(e)
this.apply(1,0,0,0,t,1,0,0,0,0,1,0,0,0,0,1)},shearX:function(e){var t=Math.tan(e)
this.apply(1,t,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},shearY:function(e){var t=Math.tan(e)
this.apply(1,0,0,0,t,1,0,0,0,0,1,0,0,0,0,1)},multX:function(e,t,n,r){return n?r?this.elements[0]*e+this.elements[1]*t+this.elements[2]*n+this.elements[3]*r:this.elements[0]*e+this.elements[1]*t+this.elements[2]*n+this.elements[3]:this.elements[0]*e+this.elements[1]*t+this.elements[3]},multY:function(e,t,n,r){return n?r?this.elements[4]*e+this.elements[5]*t+this.elements[6]*n+this.elements[7]*r:this.elements[4]*e+this.elements[5]*t+this.elements[6]*n+this.elements[7]:this.elements[4]*e+this.elements[5]*t+this.elements[7]},multZ:function(e,t,n,r){return r?this.elements[8]*e+this.elements[9]*t+this.elements[10]*n+this.elements[11]*r:this.elements[8]*e+this.elements[9]*t+this.elements[10]*n+this.elements[11]},multW:function(e,t,n,r){return r?this.elements[12]*e+this.elements[13]*t+this.elements[14]*n+this.elements[15]*r:this.elements[12]*e+this.elements[13]*t+this.elements[14]*n+this.elements[15]},invert:function(){var e=this.elements[0]*this.elements[5]-this.elements[1]*this.elements[4],t=this.elements[0]*this.elements[6]-this.elements[2]*this.elements[4],n=this.elements[0]*this.elements[7]-this.elements[3]*this.elements[4],r=this.elements[1]*this.elements[6]-this.elements[2]*this.elements[5],i=this.elements[1]*this.elements[7]-this.elements[3]*this.elements[5],s=this.elements[2]*this.elements[7]-this.elements[3]*this.elements[6],o=this.elements[8]*this.elements[13]-this.elements[9]*this.elements[12],a=this.elements[8]*this.elements[14]-this.elements[10]*this.elements[12],l=this.elements[8]*this.elements[15]-this.elements[11]*this.elements[12],h=this.elements[9]*this.elements[14]-this.elements[10]*this.elements[13],u=this.elements[9]*this.elements[15]-this.elements[11]*this.elements[13],c=this.elements[10]*this.elements[15]-this.elements[11]*this.elements[14],f=e*c-t*u+n*h+r*l-i*a+s*o
if(Math.abs(f)<=1e-9)return!1
var p=[]
p[0]=+this.elements[5]*c-this.elements[6]*u+this.elements[7]*h,p[4]=-this.elements[4]*c+this.elements[6]*l-this.elements[7]*a,p[8]=+this.elements[4]*u-this.elements[5]*l+this.elements[7]*o,p[12]=-this.elements[4]*h+this.elements[5]*a-this.elements[6]*o,p[1]=-this.elements[1]*c+this.elements[2]*u-this.elements[3]*h,p[5]=+this.elements[0]*c-this.elements[2]*l+this.elements[3]*a,p[9]=-this.elements[0]*u+this.elements[1]*l-this.elements[3]*o,p[13]=+this.elements[0]*h-this.elements[1]*a+this.elements[2]*o,p[2]=+this.elements[13]*s-this.elements[14]*i+this.elements[15]*r,p[6]=-this.elements[12]*s+this.elements[14]*n-this.elements[15]*t,p[10]=+this.elements[12]*i-this.elements[13]*n+this.elements[15]*e,p[14]=-this.elements[12]*r+this.elements[13]*t-this.elements[14]*e,p[3]=-this.elements[9]*s+this.elements[10]*i-this.elements[11]*r,p[7]=+this.elements[8]*s-this.elements[10]*n+this.elements[11]*t,p[11]=-this.elements[8]*i+this.elements[9]*n-this.elements[11]*e,p[15]=+this.elements[8]*r-this.elements[9]*t+this.elements[10]*e
var m=1/f
return p[0]*=m,p[1]*=m,p[2]*=m,p[3]*=m,p[4]*=m,p[5]*=m,p[6]*=m,p[7]*=m,p[8]*=m,p[9]*=m,p[10]*=m,p[11]*=m,p[12]*=m,p[13]*=m,p[14]*=m,p[15]*=m,this.elements=p.slice(),!0},toString:function(){for(var e="",t=0;t<15;t++)e+=this.elements[t]+", "
return e+=this.elements[15]},print:function(){var e=nr(this.elements),t=be.nfs(this.elements[0],e,4)+" "+be.nfs(this.elements[1],e,4)+" "+be.nfs(this.elements[2],e,4)+" "+be.nfs(this.elements[3],e,4)+"\n"+be.nfs(this.elements[4],e,4)+" "+be.nfs(this.elements[5],e,4)+" "+be.nfs(this.elements[6],e,4)+" "+be.nfs(this.elements[7],e,4)+"\n"+be.nfs(this.elements[8],e,4)+" "+be.nfs(this.elements[9],e,4)+" "+be.nfs(this.elements[10],e,4)+" "+be.nfs(this.elements[11],e,4)+"\n"+be.nfs(this.elements[12],e,4)+" "+be.nfs(this.elements[13],e,4)+" "+be.nfs(this.elements[14],e,4)+" "+be.nfs(this.elements[15],e,4)+"\n\n"
be.println(t)},invTranslate:function(e,t,n){this.preApply(1,0,0,-e,0,1,0,-t,0,0,1,-n,0,0,0,1)},invRotateX:function(e){var t=Math.cos(-e),n=Math.sin(-e)
this.preApply([1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1])},invRotateY:function(e){var t=Math.cos(-e),n=Math.sin(-e)
this.preApply([t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1])},invRotateZ:function(e){var t=Math.cos(-e),n=Math.sin(-e)
this.preApply([t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1])},invScale:function(e,t,n){this.preApply([1/e,0,0,0,0,1/t,0,0,0,0,1/n,0,0,0,0,1])}}
var sr=be.PMatrixStack=function(){this.matrixStack=[]}
sr.prototype.load=function(){var e=we.$newPMatrix()
1===arguments.length?e.set(arguments[0]):e.set(arguments),this.matrixStack.push(e)},Jn.prototype.$newPMatrix=function(){return new rr},er.prototype.$newPMatrix=function(){return new ir},sr.prototype.push=function(){this.matrixStack.push(this.peek())},sr.prototype.pop=function(){return this.matrixStack.pop()},sr.prototype.peek=function(){var e=we.$newPMatrix()
return e.set(this.matrixStack[this.matrixStack.length-1]),e},sr.prototype.mult=function(e){this.matrixStack[this.matrixStack.length-1].apply(e)},be.split=function(e,t){return e.split(t)},be.splitTokens=function(e,n){if(n===t)return e.split(/\s+/g)
var r,i,s=n.split(/()/g),o="",a=e.length,l=[]
for(r=0;r<a;r++)i=e[r],s.indexOf(i)>-1?(""!==o&&l.push(o),o=""):o+=i
return""!==o&&l.push(o),l},be.append=function(e,t){return e[e.length]=t,e},be.concat=function(e,t){return e.concat(t)},be.sort=function(e,t){var n=[]
if(e.length>0){for(var r=t>0?t:e.length,i=0;i<r;i++)n.push(e[i])
if("string"==typeof e[0]?n.sort():n.sort(function(e,t){return e-t}),t>0)for(var s=n.length;s<e.length;s++)n.push(e[s])}return n},be.splice=function(e,t,n){if(0===t.length)return e
if(t instanceof Array)for(var r=0,i=n;r<t.length;i++,r++)e.splice(i,0,t[r])
else e.splice(n,0,t)
return e},be.subset=function(e,n,r){var i=r!==t?n+r:e.length
return e.slice(n,i)},be.join=function(e,t){return e.join(t)},be.shorten=function(e){for(var t=[],n=e.length,r=0;r<n;r++)t[r]=e[r]
return t.pop(),t},be.expand=function(e,t){var n=e.slice(0),r=t||2*e.length
return n.length=r,n},be.arrayCopy=function(){var e,n,r,i=0,s=0
2===arguments.length?(e=arguments[0],n=arguments[1],r=e.length):3===arguments.length?(e=arguments[0],n=arguments[1],r=arguments[2]):5===arguments.length&&(e=arguments[0],i=arguments[1],n=arguments[2],s=arguments[3],r=arguments[4])
for(var o=i,a=s;o<r+i;o++,a++){if(n[a]===t)throw"array index out of bounds exception"
n[a]=e[o]}},be.reverse=function(e){return e.reverse()},be.mix=function(e,t,n){return e+((t-e)*n>>8)},be.peg=function(e){return e<0?0:e>255?255:e},be.modes=function(){function e(e,t,n,r,i,o,a,l,h,u,c){var f=s(((4278190080&e)>>>24)+t,255)<<24,p=n+((h-n)*t>>8)
p=(p<0?0:p>255?255:p)<<16
var m=r+((u-r)*t>>8)
m=(m<0?0:m>255?255:m)<<8
var g=i+((c-i)*t>>8)
return g=g<0?0:g>255?255:g,f|p|m|g}var t=c.ALPHA_MASK,n=c.RED_MASK,r=c.GREEN_MASK,i=c.BLUE_MASK,s=Math.min,o=Math.max
return{replace:function(e,t){return t},blend:function(e,o){var a=(o&t)>>>24,l=e&n,h=e&r,u=e&i,c=o&n,f=o&r,p=o&i
return s(((e&t)>>>24)+a,255)<<24|l+((c-l)*a>>8)&n|h+((f-h)*a>>8)&r|u+((p-u)*a>>8)&i},add:function(e,o){var a=(o&t)>>>24
return s(((e&t)>>>24)+a,255)<<24|s((e&n)+((o&n)>>8)*a,n)&n|s((e&r)+((o&r)>>8)*a,r)&r|s((e&i)+((o&i)*a>>8),i)},subtract:function(e,a){var l=(a&t)>>>24
return s(((e&t)>>>24)+l,255)<<24|o((e&n)-((a&n)>>8)*l,r)&n|o((e&r)-((a&r)>>8)*l,i)&r|o((e&i)-((a&i)*l>>8),0)},lightest:function(e,a){var l=(a&t)>>>24
return s(((e&t)>>>24)+l,255)<<24|o(e&n,((a&n)>>8)*l)&n|o(e&r,((a&r)>>8)*l)&r|o(e&i,(a&i)*l>>8)},darkest:function(e,o){var a=(o&t)>>>24,l=e&n,h=e&r,u=e&i,c=s(e&n,((o&n)>>8)*a),f=s(e&r,((o&r)>>8)*a),p=s(e&i,(o&i)*a>>8)
return s(((e&t)>>>24)+a,255)<<24|l+((c-l)*a>>8)&n|h+((f-h)*a>>8)&r|u+((p-u)*a>>8)&i},difference:function(s,o){var a=(o&t)>>>24,l=(s&n)>>16,h=(s&r)>>8,u=s&i,c=(o&n)>>16,f=(o&r)>>8,p=o&i
return e(s,a,l,h,u,c,f,p,l>c?l-c:c-l,h>f?h-f:f-h,u>p?u-p:p-u)},exclusion:function(s,o){var a=(o&t)>>>24,l=(s&n)>>16,h=(s&r)>>8,u=s&i,c=(o&n)>>16,f=(o&r)>>8,p=o&i
return e(s,a,l,h,u,c,f,p,l+c-(l*c>>7),h+f-(h*f>>7),u+p-(u*p>>7))},multiply:function(s,o){var a=(o&t)>>>24,l=(s&n)>>16,h=(s&r)>>8,u=s&i,c=(o&n)>>16,f=(o&r)>>8,p=o&i
return e(s,a,l,h,u,c,f,p,l*c>>8,h*f>>8,u*p>>8)},screen:function(s,o){var a=(o&t)>>>24,l=(s&n)>>16,h=(s&r)>>8,u=s&i,c=(o&n)>>16,f=(o&r)>>8,p=o&i
return e(s,a,l,h,u,c,f,p,255-((255-l)*(255-c)>>8),255-((255-h)*(255-f)>>8),255-((255-u)*(255-p)>>8))},hard_light:function(s,o){var a=(o&t)>>>24,l=(s&n)>>16,h=(s&r)>>8,u=s&i,c=(o&n)>>16,f=(o&r)>>8,p=o&i
return e(s,a,l,h,u,c,f,p,c<128?l*c>>7:255-((255-l)*(255-c)>>7),f<128?h*f>>7:255-((255-h)*(255-f)>>7),p<128?u*p>>7:255-((255-u)*(255-p)>>7))},soft_light:function(s,o){var a=(o&t)>>>24,l=(s&n)>>16,h=(s&r)>>8,u=s&i,c=(o&n)>>16,f=(o&r)>>8,p=o&i
return e(s,a,l,h,u,c,f,p,(l*c>>7)+(l*l>>8)-(l*l*c>>15),(h*f>>7)+(h*h>>8)-(h*h*f>>15),(u*p>>7)+(u*u>>8)-(u*u*p>>15))},overlay:function(s,o){var a=(o&t)>>>24,l=(s&n)>>16,h=(s&r)>>8,u=s&i,c=(o&n)>>16,f=(o&r)>>8,p=o&i
return e(s,a,l,h,u,c,f,p,l<128?l*c>>7:255-((255-l)*(255-c)>>7),h<128?h*f>>7:255-((255-h)*(255-f)>>7),u<128?u*p>>7:255-((255-u)*(255-p)>>7))},dodge:function(s,o){var a=(o&t)>>>24,l=(s&n)>>16,h=(s&r)>>8,u=s&i,c=(o&n)>>16,f=(o&r)>>8,p=o&i,m=255
255!==c&&(m=(l<<8)/(255-c),m=m<0?0:m>255?255:m)
var g=255
255!==f&&(g=(h<<8)/(255-f),g=g<0?0:g>255?255:g)
var d=255
return 255!==p&&(d=(u<<8)/(255-p),d=d<0?0:d>255?255:d),e(s,a,l,h,u,c,f,p,m,g,d)},burn:function(s,o){var a=(o&t)>>>24,l=(s&n)>>16,h=(s&r)>>8,u=s&i,c=(o&n)>>16,f=(o&r)>>8,p=o&i,m=0
0!==c&&(m=(255-l<<8)/c,m=255-(m<0?0:m>255?255:m))
var g=0
0!==f&&(g=(255-h<<8)/f,g=255-(g<0?0:g>255?255:g))
var d=0
return 0!==p&&(d=(255-u<<8)/p,d=255-(d<0?0:d>255?255:d)),e(s,a,l,h,u,c,f,p,m,g,d)}}}(),be.color=function(e,n,r,i){return e!==t&&n!==t&&r!==t&&i!==t?L(e,n,r,i):e!==t&&n!==t&&r!==t?L(e,n,r,kt):e!==t&&n!==t?I(e,n):"number"==typeof e?D(e):L(Bt,$t,Gt,kt)},be.color.toString=function(e){return"rgba("+((e&c.RED_MASK)>>>16)+","+((e&c.GREEN_MASK)>>>8)+","+(e&c.BLUE_MASK)+","+((e&c.ALPHA_MASK)>>>24)/255+")"},be.color.toInt=function(e,t,n,r){return r<<24&c.ALPHA_MASK|e<<16&c.RED_MASK|t<<8&c.GREEN_MASK|n&c.BLUE_MASK},be.color.toArray=function(e){return[(e&c.RED_MASK)>>>16,(e&c.GREEN_MASK)>>>8,e&c.BLUE_MASK,(e&c.ALPHA_MASK)>>>24]},be.color.toGLArray=function(e){return[((e&c.RED_MASK)>>>16)/255,((e&c.GREEN_MASK)>>>8)/255,(e&c.BLUE_MASK)/255,((e&c.ALPHA_MASK)>>>24)/255]},be.color.toRGB=function(e,t,n){e=e>Bt?Bt:e,t=t>$t?$t:t,n=n>Gt?Gt:n,e=e<0?0:e,e=e/Bt*360,t=t/$t*100,n=n/Gt*100
var r=Math.round(n/100*255)
if(0===t)return[r,r,r]
var i=e%360,s=i%60,o=Math.round(n*(100-t)/1e4*255),a=Math.round(n*(6e3-t*s)/6e5*255),l=Math.round(n*(6e3-t*(60-s))/6e5*255)
switch(Math.floor(i/60)){case 0:return[r,l,o]
case 1:return[a,r,o]
case 2:return[o,r,l]
case 3:return[o,a,r]
case 4:return[l,o,r]
case 5:return[r,o,a]
default:E.debug("Unexpectedly hit default case in toRGB function.")}},be.brightness=function(e){return O(e)[2]},be.saturation=function(e){return O(e)[1]},be.hue=function(e){return O(e)[0]},be.red=function(e){return((e&c.RED_MASK)>>>16)/255*Bt},be.green=function(e){return((e&c.GREEN_MASK)>>>8)/255*$t},be.blue=function(e){return(e&c.BLUE_MASK)/255*Gt},be.alpha=function(e){return((e&c.ALPHA_MASK)>>>24)/255*kt},be.lerpColor=function(e,t,n){var r,i,s,o,a,l,h,u,f,p,m,g,d,v,y,b,A=be.color(e),x=be.color(t)
return Ut===c.HSB?(g=O(A),h=((A&c.ALPHA_MASK)>>>24)/kt,d=O(x),m=((x&c.ALPHA_MASK)>>>24)/kt,y=be.lerp(g[0],d[0],n),b=be.lerp(g[1],d[1],n),s=be.lerp(g[2],d[2],n),v=be.color.toRGB(y,b,s),(be.lerp(h,m,n)*kt+.5|0)<<24&c.ALPHA_MASK|v[0]<<16&c.RED_MASK|v[1]<<8&c.GREEN_MASK|v[2]&c.BLUE_MASK):(o=(A&c.RED_MASK)>>>16,a=(A&c.GREEN_MASK)>>>8,l=A&c.BLUE_MASK,h=((A&c.ALPHA_MASK)>>>24)/kt,u=(x&c.RED_MASK)>>>16,f=(x&c.GREEN_MASK)>>>8,p=x&c.BLUE_MASK,m=((x&c.ALPHA_MASK)>>>24)/kt,r=be.lerp(o,u,n)+.5|0,i=be.lerp(a,f,n)+.5|0,s=be.lerp(l,p,n)+.5|0,(be.lerp(h,m,n)*kt+.5|0)<<24&c.ALPHA_MASK|r<<16&c.RED_MASK|i<<8&c.GREEN_MASK|s&c.BLUE_MASK)},be.colorMode=function(){Ut=arguments[0],arguments.length>1&&(Bt=arguments[1],$t=arguments[2]||arguments[1],Gt=arguments[3]||arguments[1],kt=arguments[4]||arguments[1])},be.blendColor=function(e,t,n){return n===c.REPLACE?be.modes.replace(e,t):n===c.BLEND?be.modes.blend(e,t):n===c.ADD?be.modes.add(e,t):n===c.SUBTRACT?be.modes.subtract(e,t):n===c.LIGHTEST?be.modes.lightest(e,t):n===c.DARKEST?be.modes.darkest(e,t):n===c.DIFFERENCE?be.modes.difference(e,t):n===c.EXCLUSION?be.modes.exclusion(e,t):n===c.MULTIPLY?be.modes.multiply(e,t):n===c.SCREEN?be.modes.screen(e,t):n===c.HARD_LIGHT?be.modes.hard_light(e,t):n===c.SOFT_LIGHT?be.modes.soft_light(e,t):n===c.OVERLAY?be.modes.overlay(e,t):n===c.DODGE?be.modes.dodge(e,t):n===c.BURN?be.modes.burn(e,t):void 0},be.printMatrix=function(){tt.print()},Jn.prototype.translate=function(e,t){tt.translate(e,t),nt.invTranslate(e,t),Ae.translate(e,t)},er.prototype.translate=function(e,t,n){tt.translate(e,t,n),nt.invTranslate(e,t,n)},Jn.prototype.scale=function(e,t){tt.scale(e,t),nt.invScale(e,t),Ae.scale(e,t||e)},er.prototype.scale=function(e,t,n){tt.scale(e,t,n),nt.invScale(e,t,n)},Jn.prototype.transform=function(e){var t=e.array()
Ae.transform(t[0],t[3],t[1],t[4],t[2],t[5])},er.prototype.transformm=function(e){throw"p.transform is currently not supported in 3D mode"},Jn.prototype.pushMatrix=function(){rt.load(tt),it.load(nt),N()},er.prototype.pushMatrix=function(){rt.load(tt),it.load(nt)},Jn.prototype.popMatrix=function(){tt.set(rt.pop()),nt.set(it.pop()),F()},er.prototype.popMatrix=function(){tt.set(rt.pop()),nt.set(it.pop())},Jn.prototype.resetMatrix=function(){tt.reset(),nt.reset(),Ae.setTransform(1,0,0,1,0,0)},er.prototype.resetMatrix=function(){tt.reset(),nt.reset()},Qn.prototype.applyMatrix=function(){var e=arguments
tt.apply(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15]),nt.invApply(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15])},Jn.prototype.applyMatrix=function(){for(var e=arguments,t=e.length;t<16;t++)e[t]=0
e[10]=e[15]=1,Qn.prototype.applyMatrix.apply(this,e)},be.rotateX=function(e){tt.rotateX(e),nt.invRotateX(e)},Jn.prototype.rotateZ=function(){throw"rotateZ() is not supported in 2D mode. Use rotate(float) instead."},er.prototype.rotateZ=function(e){tt.rotateZ(e),nt.invRotateZ(e)},be.rotateY=function(e){tt.rotateY(e),nt.invRotateY(e)},Jn.prototype.rotate=function(e){tt.rotateZ(e),nt.invRotateZ(e),Ae.rotate(e)},er.prototype.rotate=function(e){arguments.length<4?be.rotateZ(e):(tt.rotate(e,arguments[1],arguments[2],arguments[3]),nt.rotate(-e,arguments[1],arguments[2],arguments[3]))},Jn.prototype.shearX=function(e){tt.shearX(e),Ae.transform(1,0,e,1,0,0)},er.prototype.shearX=function(e){tt.shearX(e)},Jn.prototype.shearY=function(e){tt.shearY(e),Ae.transform(1,e,0,1,0,0)},er.prototype.shearY=function(e){tt.shearY(e)},be.pushStyle=function(){N(),be.pushMatrix()
var e={doFill:at,currentFillColor:ht,doStroke:ct,currentStrokeColor:pt,curTint:Ht,curRectMode:At,curColorMode:Ut,colorModeX:Bt,colorModeZ:Gt,colorModeY:$t,colorModeA:kt,curTextFont:ln,horizontalTextAlignment:Jt,verticalTextAlignment:en,textMode:tn,curFontName:nn,curTextSize:rn,curTextAscent:sn,curTextDescent:on,curTextLeading:an}
$n.push(e)},be.popStyle=function(){var e=$n.pop()
if(!e)throw"Too many popStyle() without enough pushStyle()"
F(),be.popMatrix(),at=e.doFill,ht=e.currentFillColor,ct=e.doStroke,pt=e.currentStrokeColor,Ht=e.curTint,At=e.curRectMode,Ut=e.curColorMode,Bt=e.colorModeX,Gt=e.colorModeZ,$t=e.colorModeY,kt=e.colorModeA,ln=e.curTextFont,nn=e.curFontName,rn=e.curTextSize,Jt=e.horizontalTextAlignment,en=e.verticalTextAlignment,tn=e.textMode,sn=e.curTextAscent,on=e.curTextDescent,an=e.curTextLeading},be.year=function(){return(new Date).getFullYear()},be.month=function(){return(new Date).getMonth()+1},be.day=function(){return(new Date).getDate()},be.hour=function(){return(new Date).getHours()},be.minute=function(){return(new Date).getMinutes()},be.second=function(){return(new Date).getSeconds()},be.millis=function(){return Date.now()-jt},Jn.prototype.redraw=function(){k(),Ae.lineWidth=gt
var e=be.pmouseX,t=be.pmouseY
be.pmouseX=Vt,be.pmouseY=zt,N(),be.draw(),F(),Vt=be.mouseX,zt=be.mouseY,be.pmouseX=e,be.pmouseY=t},er.prototype.redraw=function(){k()
var e=be.pmouseX,t=be.pmouseY
be.pmouseX=Vt,be.pmouseY=zt,Ae.clear(Ae.DEPTH_BUFFER_BIT),Wt={attributes:{},locations:{}},be.noLights(),be.lightFalloff(1,0,0),be.shininess(1),be.ambient(255,255,255),be.specular(0,0,0),be.emissive(0,0,0),be.camera(),be.draw(),Vt=be.mouseX,zt=be.mouseY,be.pmouseX=e,be.pmouseY=t},be.noLoop=function(){yt=!1,dt=!1,clearInterval(bt),xe.onPause()},be.loop=function(){dt||(Yt=Date.now(),Kt=0,bt=l.setInterval(function(){try{xe.onFrameStart(),be.redraw(),xe.onFrameEnd()}catch(e){throw l.clearInterval(bt),e}},Mt),yt=!0,dt=!0,xe.onLoop())},be.frameRate=function(e){Ct=e,Mt=1e3/Ct,yt&&(be.noLoop(),be.loop())},be.exit=function(){l.clearInterval(bt),w(be.externals.canvas.id),delete de.onmousedown
for(var e in E.lib)E.lib.hasOwnProperty(e)&&E.lib[e].hasOwnProperty("detach")&&E.lib[e].detach(be)
for(var t=ye.length;t--;)A(ye[t])
xe.onExit()},be.cursor=function(){if(arguments.length>1||1===arguments.length&&arguments[0]instanceof be.PImage){var e,t,n=arguments[0]
if(arguments.length>=3){if(e=arguments[1],t=arguments[2],e<0||t<0||t>=n.height||e>=n.width)throw"x and y must be non-negative and less than the dimensions of the image"}else e=n.width>>>1,t=n.height>>>1
var r=n.toDataURL(),i='url("'+r+'") '+e+" "+t+", default"
Tt=de.style.cursor=i}else if(1===arguments.length){var s=arguments[0]
Tt=de.style.cursor=s}else Tt=de.style.cursor=_t},be.noCursor=function(){Tt=de.style.cursor=c.NOCURSOR},be.link=function(e,n){n!==t?l.open(e,n):l.location=e},be.beginDraw=u,be.endDraw=u,Jn.prototype.toImageData=function(e,n,r,i){return e=e!==t?e:0,n=n!==t?n:0,r=r!==t?r:be.width,i=i!==t?i:be.height,Ae.getImageData(e,n,r,i)},er.prototype.toImageData=function(e,n,r,i){e=e!==t?e:0,n=n!==t?n:0,r=r!==t?r:be.width,i=i!==t?i:be.height
var s=h.createElement("canvas"),o=s.getContext("2d"),a=o.createImageData(r,i),l=new y(r*i*4)
Ae.readPixels(e,n,r,i,Ae.RGBA,Ae.UNSIGNED_BYTE,l)
for(var u=0,c=l.length,f=a.data;u<c;u++)f[u]=l[(i-1-Math.floor(u/4/r))*r*4+u%(4*r)]
return a},be.status=function(e){l.status=e},be.binary=function(e,t){var n
if(t>0)n=t
else if(e instanceof Char)n=16,e|=0
else for(n=32;n>1&&!(e>>>n-1&1);)n--
for(var r="";n>0;)r+=e>>>--n&1?"1":"0"
return r},be.unbinary=function(e){for(var t=e.length-1,n=1,r=0;t>=0;){var i=e[t--]
if("0"!==i&&"1"!==i)throw"the value passed into unbinary was not an 8 bit binary number"
"1"===i&&(r+=n),n<<=1}return r}
var or=function(e,n){n=n===t||null===n?n=8:n,e<0&&(e=4294967295+e+1)
for(var r=Number(e).toString(16).toUpperCase();r.length<n;)r="0"+r
return r.length>=n&&(r=r.substring(r.length-n,r.length)),r}
be.hex=function(e,t){return 1===arguments.length&&(t=e instanceof Char?4:8),or(e,t)},be.unhex=function(e){if(e instanceof Array){for(var t=[],n=0;n<e.length;n++)t.push(B(e[n]))
return t}return B(e)},be.loadStrings=function(e){if(f[e])return f[e].split("\n")
var t=o(e)
return"string"!=typeof t||""===t?[]:(t=t.replace(/(\r\n?)/g,"\n").replace(/\n$/,""),t.split("\n"))},be.saveStrings=function(e,t){f[e]=t.join("\n")},be.loadBytes=function(e){for(var t=o(e),n=[],r=0;r<t.length;r++)n.push(t.charCodeAt(r))
return n},be.matchAll=function(e,t){for(var n,r=[],i=new RegExp(t,"g");null!==(n=i.exec(e));)r.push(n),0===n[0].length&&++i.lastIndex
return r.length>0?r:null},be.match=function(e,t){return e.match(t)}
be.println=function(){E.logger.println.apply(E.logger,arguments)},be.print=function(){E.logger.print.apply(E.logger,arguments)},be.str=function(e){if(e instanceof Array){for(var t=[],n=0;n<e.length;n++)t.push(e[n].toString()+"")
return t}return e.toString()+""},be.parseBoolean=function(e){if(e instanceof Array){for(var t=[],n=0;n<e.length;n++)t.push($(e[n]))
return t}return $(e)},be.parseByte=function(e){if(e instanceof Array){for(var t=[],n=0;n<e.length;n++)t.push(0-(128&e[n])|127&e[n])
return t}return 0-(128&e)|127&e},be.parseChar=function(e){if("number"==typeof e)return new Char(String.fromCharCode(65535&e))
if(e instanceof Array){for(var t=[],n=0;n<e.length;n++)t.push(new Char(String.fromCharCode(65535&e[n])))
return t}throw"char() may receive only one argument of type int, byte, int[], or byte[]."},be.parseFloat=function(e){if(e instanceof Array){for(var t=[],n=0;n<e.length;n++)t.push(G(e[n]))
return t}return G(e)},be.parseInt=function(e,t){if(e instanceof Array){for(var n=[],r=0;r<e.length;r++)"string"!=typeof e[r]||/^\s*[+\-]?\d+\s*$/.test(e[r])?n.push(V(e[r],t)):n.push(0)
return n}return V(e,t)},be.__int_cast=function(e){return 0|e},be.__instanceof=function(e,t){if("function"!=typeof t)throw"Function is expected as type argument for instanceof operator"
if("string"==typeof e)return t===Object||t===String
if(e instanceof t)return!0
if("object"!=typeof e||null===e)return!1
var n=e.constructor
if(t.$isInterface){for(var r=[];n;)n.$interfaces&&(r=r.concat(n.$interfaces)),n=n.$base
for(;r.length>0;){var i=r.shift()
if(i===t)return!0
i.$interfaces&&(r=r.concat(i.$interfaces))}return!1}for(;n.hasOwnProperty("$base");)if((n=n.$base)===t)return!0
return!1},Qn.prototype.size=function(e,t,n){ct&&be.stroke(0),at&&be.fill(255)
var r={fillStyle:Ae.fillStyle,strokeStyle:Ae.strokeStyle,lineCap:Ae.lineCap,lineJoin:Ae.lineJoin}
de.style.length>0&&(de.style.removeProperty("width"),de.style.removeProperty("height")),de.width=be.width=e||100,de.height=be.height=t||100
for(var i in r)r.hasOwnProperty(i)&&(Ae[i]=r[i])
be.textFont(ln),be.background(),cn=Math.max(1e3,e*t*.05),be.externals.context=Ae
for(var s=0;s<c.SINCOS_LENGTH;s++)xn[s]=be.sin(s*(c.PI/180)*.5),wn[s]=be.cos(s*(c.PI/180)*.5)},Jn.prototype.size=function(e,n,r){Ae===t&&(Ae=de.getContext("2d"),rt=new sr,it=new sr,tt=new rr,nt=new rr),Qn.prototype.size.apply(this,arguments)},er.prototype.size=function(){var e=!1
return function(t,n,r){if(e)throw"Multiple calls to size() for 3D renders are not allowed."
e=!0
try{de.width=be.width=t||100,de.height=be.height=n||100,Ae=function(e){for(var t,n=["experimental-webgl","webgl","webkit-3d"],r=0,i=n.length;r<i&&!(t=e.getContext(n[r],{antialias:!1,preserveDrawingBuffer:!0}));r++);return t}(de),Xe=Ae.createTexture(),je=Ae.createTexture()}catch(e){E.debug(e)}if(!Ae)throw"WebGL context is not supported on this browser."
Ae.viewport(0,0,de.width,de.height),Ae.enable(Ae.DEPTH_TEST),Ae.enable(Ae.BLEND),Ae.blendFunc(Ae.SRC_ALPHA,Ae.ONE_MINUS_SRC_ALPHA),Le=Yn(Ae,"varying vec4 vFrontColor;attribute vec3 aVertex;attribute vec2 aTextureCoord;uniform vec4 uColor;uniform mat4 uModel;uniform mat4 uView;uniform mat4 uProjection;uniform float uPointSize;varying vec2 vTextureCoord;void main(void) {  gl_PointSize = uPointSize;  vFrontColor = uColor;  gl_Position = uProjection * uView * uModel * vec4(aVertex, 1.0);  vTextureCoord = aTextureCoord;}","#ifdef GL_ES\nprecision highp float;\n#endif\nvarying vec4 vFrontColor;varying vec2 vTextureCoord;uniform sampler2D uSampler;uniform int uIsDrawingText;uniform bool uSmooth;void main(void){  if(uSmooth == true){    float dist = distance(gl_PointCoord, vec2(0.5));    if(dist > 0.5){      discard;    }  }  if(uIsDrawingText == 1){    float alpha = texture2D(uSampler, vTextureCoord).a;    gl_FragColor = vec4(vFrontColor.rgb * alpha, alpha);  }  else{    gl_FragColor = vFrontColor;  }}"),Ie=Yn(Ae,"varying vec4 vFrontColor;attribute vec3 aVertex;attribute vec4 aColor;uniform mat4 uView;uniform mat4 uProjection;uniform float uPointSize;void main(void) {  vFrontColor = aColor;  gl_PointSize = uPointSize;  gl_Position = uProjection * uView * vec4(aVertex, 1.0);}","#ifdef GL_ES\nprecision highp float;\n#endif\nvarying vec4 vFrontColor;uniform bool uSmooth;void main(void){  if(uSmooth == true){    float dist = distance(gl_PointCoord, vec2(0.5));    if(dist > 0.5){      discard;    }  }  gl_FragColor = vFrontColor;}"),be.strokeWeight(1),Re=Yn(Ae,jn,"#ifdef GL_ES\nprecision highp float;\n#endif\nvarying vec4 vFrontColor;uniform sampler2D uSampler;uniform bool uUsingTexture;varying vec2 vTexture;void main(void){  if( uUsingTexture ){    gl_FragColor = vec4(texture2D(uSampler, vTexture.xy)) * vFrontColor;  }  else{    gl_FragColor = vFrontColor;  }}"),Ae.useProgram(Re),M("usingTexture3d",Re,"usingTexture",Qt),be.lightFalloff(1,0,0),be.shininess(1),be.ambient(255,255,255),be.specular(0,0,0),be.emissive(0,0,0),De=Ae.createBuffer(),Ae.bindBuffer(Ae.ARRAY_BUFFER,De),Ae.bufferData(Ae.ARRAY_BUFFER,Gn,Ae.STATIC_DRAW),Oe=Ae.createBuffer(),Ae.bindBuffer(Ae.ARRAY_BUFFER,Oe),Ae.bufferData(Ae.ARRAY_BUFFER,zn,Ae.STATIC_DRAW),Ne=Ae.createBuffer(),Ae.bindBuffer(Ae.ARRAY_BUFFER,Ne),Ae.bufferData(Ae.ARRAY_BUFFER,Vn,Ae.STATIC_DRAW),Fe=Ae.createBuffer(),Ae.bindBuffer(Ae.ARRAY_BUFFER,Fe),Ae.bufferData(Ae.ARRAY_BUFFER,Un,Ae.STATIC_DRAW),ke=Ae.createBuffer(),Ae.bindBuffer(Ae.ARRAY_BUFFER,ke),Ae.bufferData(Ae.ARRAY_BUFFER,Hn,Ae.STATIC_DRAW),Be=Ae.createBuffer(),$e=Ae.createBuffer(),Ge=Ae.createBuffer(),Ve=Ae.createBuffer(),ze=Ae.createBuffer(),He=Ae.createBuffer(),Ue=Ae.createBuffer(),Ae.bindBuffer(Ae.ARRAY_BUFFER,Ue),Ae.bufferData(Ae.ARRAY_BUFFER,new g([0,0,0]),Ae.STATIC_DRAW),Ye=Ae.createBuffer(),Ae.bindBuffer(Ae.ARRAY_BUFFER,Ye),Ae.bufferData(Ae.ARRAY_BUFFER,new g([1,1,0,-1,1,0,-1,-1,0,1,-1,0]),Ae.STATIC_DRAW),Ke=Ae.createBuffer(),Ae.bindBuffer(Ae.ARRAY_BUFFER,Ke),Ae.bufferData(Ae.ARRAY_BUFFER,new g([0,0,1,0,1,1,0,1]),Ae.STATIC_DRAW),We=Ae.createBuffer(),Ae.bindBuffer(Ae.ELEMENT_ARRAY_BUFFER,We),Ae.bufferData(Ae.ELEMENT_ARRAY_BUFFER,new v([0,1,2,2,3,0]),Ae.STATIC_DRAW),Je=new ir,et=new ir,tt=new ir,nt=new ir,ot=new ir,be.camera(),be.perspective(),rt=new sr,it=new sr,Se=new ir,Pe=new ir,Ce=new ir,Me=new ir,Te=new ir,_e=new ir,_e.set(-1,3,-3,1,3,-6,3,0,-3,3,0,0,1,0,0,0),Qn.prototype.size.apply(this,arguments)}}(),Jn.prototype.ambientLight=Qn.prototype.a3DOnlyFunction,er.prototype.ambientLight=function(e,t,n,r,i,s){if(gn===c.MAX_LIGHTS)throw"can only create "+c.MAX_LIGHTS+" lights"
var o=new PVector(r,i,s),a=new ir
a.scale(1,-1,1),a.apply(tt.array()),a.mult(o,o)
var l=L(e,t,n,0),h=[((l&c.RED_MASK)>>>16)/255,((l&c.GREEN_MASK)>>>8)/255,(l&c.BLUE_MASK)/255]
Ae.useProgram(Re),C("uLights.color.3d."+gn,Re,"uLights"+gn+".color",h),C("uLights.position.3d."+gn,Re,"uLights"+gn+".position",o.array()),M("uLights.type.3d."+gn,Re,"uLights"+gn+".type",0),M("uLightCount3d",Re,"uLightCount",++gn)},Jn.prototype.directionalLight=Qn.prototype.a3DOnlyFunction,er.prototype.directionalLight=function(e,t,n,r,i,s){if(gn===c.MAX_LIGHTS)throw"can only create "+c.MAX_LIGHTS+" lights"
Ae.useProgram(Re)
var o=new ir
o.scale(1,-1,1),o.apply(tt.array()),o=o.array()
var a=[o[0]*r+o[4]*i+o[8]*s,o[1]*r+o[5]*i+o[9]*s,o[2]*r+o[6]*i+o[10]*s],l=L(e,t,n,0),h=[((l&c.RED_MASK)>>>16)/255,((l&c.GREEN_MASK)>>>8)/255,(l&c.BLUE_MASK)/255]
C("uLights.color.3d."+gn,Re,"uLights"+gn+".color",h),C("uLights.position.3d."+gn,Re,"uLights"+gn+".position",a),M("uLights.type.3d."+gn,Re,"uLights"+gn+".type",1),M("uLightCount3d",Re,"uLightCount",++gn)},Jn.prototype.lightFalloff=Qn.prototype.a3DOnlyFunction,er.prototype.lightFalloff=function(e,t,n){Ae.useProgram(Re),C("uFalloff3d",Re,"uFalloff",[e,t,n])},Jn.prototype.lightSpecular=Qn.prototype.a3DOnlyFunction,er.prototype.lightSpecular=function(e,t,n){var r=L(e,t,n,0),i=[((r&c.RED_MASK)>>>16)/255,((r&c.GREEN_MASK)>>>8)/255,(r&c.BLUE_MASK)/255]
Ae.useProgram(Re),C("uSpecular3d",Re,"uSpecular",i)},be.lights=function(){be.ambientLight(128,128,128),be.directionalLight(128,128,128,0,0,-1),be.lightFalloff(1,0,0),be.lightSpecular(0,0,0)},Jn.prototype.pointLight=Qn.prototype.a3DOnlyFunction,er.prototype.pointLight=function(e,t,n,r,i,s){if(gn===c.MAX_LIGHTS)throw"can only create "+c.MAX_LIGHTS+" lights"
var o=new PVector(r,i,s),a=new ir
a.scale(1,-1,1),a.apply(tt.array()),a.mult(o,o)
var l=L(e,t,n,0),h=[((l&c.RED_MASK)>>>16)/255,((l&c.GREEN_MASK)>>>8)/255,(l&c.BLUE_MASK)/255]
Ae.useProgram(Re),C("uLights.color.3d."+gn,Re,"uLights"+gn+".color",h),C("uLights.position.3d."+gn,Re,"uLights"+gn+".position",o.array()),M("uLights.type.3d."+gn,Re,"uLights"+gn+".type",2),M("uLightCount3d",Re,"uLightCount",++gn)},Jn.prototype.noLights=Qn.prototype.a3DOnlyFunction,er.prototype.noLights=function(){gn=0,Ae.useProgram(Re),M("uLightCount3d",Re,"uLightCount",gn)},Jn.prototype.spotLight=Qn.prototype.a3DOnlyFunction,er.prototype.spotLight=function(e,t,n,r,i,s,o,a,l,h,u){if(gn===c.MAX_LIGHTS)throw"can only create "+c.MAX_LIGHTS+" lights"
Ae.useProgram(Re)
var f=new PVector(r,i,s),p=new ir
p.scale(1,-1,1),p.apply(tt.array()),p.mult(f,f),p=p.array()
var m=[p[0]*o+p[4]*a+p[8]*l,p[1]*o+p[5]*a+p[9]*l,p[2]*o+p[6]*a+p[10]*l],g=L(e,t,n,0),d=[((g&c.RED_MASK)>>>16)/255,((g&c.GREEN_MASK)>>>8)/255,(g&c.BLUE_MASK)/255]
C("uLights.color.3d."+gn,Re,"uLights"+gn+".color",d),C("uLights.position.3d."+gn,Re,"uLights"+gn+".position",f.array()),C("uLights.direction.3d."+gn,Re,"uLights"+gn+".direction",m),C("uLights.concentration.3d."+gn,Re,"uLights"+gn+".concentration",u),C("uLights.angle.3d."+gn,Re,"uLights"+gn+".angle",h),M("uLights.type.3d."+gn,Re,"uLights"+gn+".type",3),M("uLightCount3d",Re,"uLightCount",++gn)},Jn.prototype.beginCamera=function(){throw"beginCamera() is not available in 2D mode"},er.prototype.beginCamera=function(){if(En)throw"You cannot call beginCamera() again before calling endCamera()"
En=!0,tt=et,nt=Je},Jn.prototype.endCamera=function(){throw"endCamera() is not available in 2D mode"},er.prototype.endCamera=function(){if(!En)throw"You cannot call endCamera() before calling beginCamera()"
tt.set(Je),nt.set(et),En=!1},be.camera=function(e,n,r,i,s,o,a,l,h){e===t&&(Cn=be.width/2,Mn=be.height/2,Tn=Mn/Math.tan(Pn/2),e=Cn,n=Mn,r=Tn,i=Cn,s=Mn,o=0,a=0,l=1,h=0)
var u=new PVector(e-i,n-s,r-o),c=new PVector(a,l,h)
u.normalize()
var f=PVector.cross(c,u)
c=PVector.cross(u,f),f.normalize(),c.normalize()
var p=f.x,m=f.y,g=f.z,d=c.x,v=c.y,y=c.z,b=u.x,A=u.y,x=u.z
Je.set(p,m,g,0,d,v,y,0,b,A,x,0,0,0,0,1),Je.translate(-e,-n,-r),et.reset(),et.invApply(p,m,g,0,d,v,y,0,b,A,x,0,0,0,0,1),et.translate(e,n,r),tt.set(Je),nt.set(et)},be.perspective=function(e,t,n,r){0===arguments.length&&(Mn=de.height/2,Tn=Mn/Math.tan(Pn/2),_n=Tn/10,Rn=10*Tn,Ln=be.width/be.height,e=Pn,t=Ln,n=_n,r=Rn)
var i,s,o,a
i=n*Math.tan(e/2),s=-i,o=i*t,a=s*t,be.frustum(a,o,s,i,n,r)},Jn.prototype.frustum=function(){throw"Processing.js: frustum() is not supported in 2D mode"},er.prototype.frustum=function(e,t,n,r,i,s){Sn=!0,ot=new ir,ot.set(2*i/(t-e),0,(t+e)/(t-e),0,0,2*i/(r-n),(r+n)/(r-n),0,0,0,-(s+i)/(s-i),-2*s*i/(s-i),0,0,-1,0)
var o=new ir
o.set(ot),o.transpose(),Ae.useProgram(Le),T("projection2d",Le,"uProjection",!1,o.array()),Ae.useProgram(Re),T("projection3d",Re,"uProjection",!1,o.array()),Ae.useProgram(Ie),T("uProjectionUS",Ie,"uProjection",!1,o.array())},be.ortho=function(e,t,n,r,i,s){0===arguments.length&&(e=0,t=be.width,n=0,r=be.height,i=-10,s=10)
var o=2/(t-e),a=2/(r-n),l=-2/(s-i),h=-(t+e)/(t-e),u=-(r+n)/(r-n),c=-(s+i)/(s-i)
ot=new ir,ot.set(o,0,0,h,0,a,0,u,0,0,l,c,0,0,0,1)
var f=new ir
f.set(ot),f.transpose(),Ae.useProgram(Le),T("projection2d",Le,"uProjection",!1,f.array()),Ae.useProgram(Re),T("projection3d",Re,"uProjection",!1,f.array()),Ae.useProgram(Ie),T("uProjectionUS",Ie,"uProjection",!1,f.array()),Sn=!1},be.printProjection=function(){ot.print()},be.printCamera=function(){Je.print()},Jn.prototype.box=Qn.prototype.a3DOnlyFunction,er.prototype.box=function(e,t,n){t&&n||(t=n=e)
var r=new ir
r.scale(e,t,n)
var i=new ir
if(i.scale(1,-1,1),i.apply(tt.array()),i.transpose(),at){if(Ae.useProgram(Re),T("model3d",Re,"uModel",!1,r.array()),T("view3d",Re,"uView",!1,i.array()),Ae.enable(Ae.POLYGON_OFFSET_FILL),Ae.polygonOffset(1,1),C("color3d",Re,"uColor",lt),gn>0){var s=new ir
s.set(i)
var o=new ir
o.set(r),s.mult(o)
var a=new ir
a.set(s),a.invert(),a.transpose(),T("uNormalTransform3d",Re,"uNormalTransform",!1,a.array()),_("aNormal3d",Re,"aNormal",3,Oe)}else R("aNormal3d",Re,"aNormal")
_("aVertex3d",Re,"aVertex",3,De),R("aColor3d",Re,"aColor"),R("aTexture3d",Re,"aTexture"),Ae.drawArrays(Ae.TRIANGLES,0,Gn.length/3),Ae.disable(Ae.POLYGON_OFFSET_FILL)}gt>0&&ct&&(Ae.useProgram(Le),T("uModel2d",Le,"uModel",!1,r.array()),T("uView2d",Le,"uView",!1,i.array()),C("uColor2d",Le,"uColor",ft),M("uIsDrawingText2d",Le,"uIsDrawingText",!1),_("vertex2d",Le,"aVertex",3,Ne),R("aTextureCoord2d",Le,"aTextureCoord"),Ae.drawArrays(Ae.LINES,0,Vn.length/3))}
var ar=function(){var e
for(Qe=[],e=0;e<vn;e++)Qe.push(0),Qe.push(-1),Qe.push(0),Qe.push(yn[e]),Qe.push(bn[e]),Qe.push(An[e])
Qe.push(0),Qe.push(-1),Qe.push(0),Qe.push(yn[0]),Qe.push(bn[0]),Qe.push(An[0])
var t,n,r,i=0
for(e=2;e<dn;e++){t=n=i,i+=vn,r=i
for(var s=0;s<vn;s++)Qe.push(yn[t]),Qe.push(bn[t]),Qe.push(An[t++]),Qe.push(yn[r]),Qe.push(bn[r]),Qe.push(An[r++])
t=n,r=i,Qe.push(yn[t]),Qe.push(bn[t]),Qe.push(An[t]),Qe.push(yn[r]),Qe.push(bn[r]),Qe.push(An[r])}for(e=0;e<vn;e++)r=i+e,Qe.push(yn[r]),Qe.push(bn[r]),Qe.push(An[r]),Qe.push(0),Qe.push(1),Qe.push(0)
Qe.push(yn[i]),Qe.push(bn[i]),Qe.push(An[i]),Qe.push(0),Qe.push(1),Qe.push(0),Ae.bindBuffer(Ae.ARRAY_BUFFER,Be),Ae.bufferData(Ae.ARRAY_BUFFER,new g(Qe),Ae.STATIC_DRAW)}
be.sphereDetail=function(e,t){var n
if(1===arguments.length&&(e=t=arguments[0]),e<3&&(e=3),t<2&&(t=2),e!==vn||t!==dn){var r=c.SINCOS_LENGTH/e,i=new g(e),s=new g(e)
for(n=0;n<e;n++)i[n]=wn[n*r%c.SINCOS_LENGTH|0],s[n]=xn[n*r%c.SINCOS_LENGTH|0]
var o=e*(t-1)+2,a=0
yn=new g(o),bn=new g(o),An=new g(o)
var l=.5*c.SINCOS_LENGTH/t,h=l
for(n=1;n<t;n++){for(var u=xn[h%c.SINCOS_LENGTH|0],f=-wn[h%c.SINCOS_LENGTH|0],p=0;p<e;p++)yn[a]=i[p]*u,bn[a]=f,An[a++]=s[p]*u
h+=l}vn=e,dn=t,ar()}},Jn.prototype.sphere=Qn.prototype.a3DOnlyFunction,er.prototype.sphere=function(){var e=arguments[0];(vn<3||dn<2)&&be.sphereDetail(30)
var t=new ir
t.scale(e,e,e)
var n=new ir
if(n.scale(1,-1,1),n.apply(tt.array()),n.transpose(),at){if(gn>0){var r=new ir
r.set(n)
var i=new ir
i.set(t),r.mult(i)
var s=new ir
s.set(r),s.invert(),s.transpose(),T("uNormalTransform3d",Re,"uNormalTransform",!1,s.array()),_("aNormal3d",Re,"aNormal",3,Be)}else R("aNormal3d",Re,"aNormal")
Ae.useProgram(Re),R("aTexture3d",Re,"aTexture"),T("uModel3d",Re,"uModel",!1,t.array()),T("uView3d",Re,"uView",!1,n.array()),_("aVertex3d",Re,"aVertex",3,Be),R("aColor3d",Re,"aColor"),Ae.enable(Ae.POLYGON_OFFSET_FILL),Ae.polygonOffset(1,1),C("uColor3d",Re,"uColor",lt),Ae.drawArrays(Ae.TRIANGLE_STRIP,0,Qe.length/3),Ae.disable(Ae.POLYGON_OFFSET_FILL)}gt>0&&ct&&(Ae.useProgram(Le),T("uModel2d",Le,"uModel",!1,t.array()),T("uView2d",Le,"uView",!1,n.array()),_("aVertex2d",Le,"aVertex",3,Be),R("aTextureCoord2d",Le,"aTextureCoord"),C("uColor2d",Le,"uColor",ft),M("uIsDrawingText",Le,"uIsDrawingText",!1),Ae.drawArrays(Ae.LINE_STRIP,0,Qe.length/3))},be.modelX=function(e,t,n){var r=tt.array(),i=et.array(),s=r[0]*e+r[1]*t+r[2]*n+r[3],o=r[4]*e+r[5]*t+r[6]*n+r[7],a=r[8]*e+r[9]*t+r[10]*n+r[11],l=r[12]*e+r[13]*t+r[14]*n+r[15],h=i[0]*s+i[1]*o+i[2]*a+i[3]*l,u=i[12]*s+i[13]*o+i[14]*a+i[15]*l
return 0!==u?h/u:h},be.modelY=function(e,t,n){var r=tt.array(),i=et.array(),s=r[0]*e+r[1]*t+r[2]*n+r[3],o=r[4]*e+r[5]*t+r[6]*n+r[7],a=r[8]*e+r[9]*t+r[10]*n+r[11],l=r[12]*e+r[13]*t+r[14]*n+r[15],h=i[4]*s+i[5]*o+i[6]*a+i[7]*l,u=i[12]*s+i[13]*o+i[14]*a+i[15]*l
return 0!==u?h/u:h},be.modelZ=function(e,t,n){var r=tt.array(),i=et.array(),s=r[0]*e+r[1]*t+r[2]*n+r[3],o=r[4]*e+r[5]*t+r[6]*n+r[7],a=r[8]*e+r[9]*t+r[10]*n+r[11],l=r[12]*e+r[13]*t+r[14]*n+r[15],h=i[8]*s+i[9]*o+i[10]*a+i[11]*l,u=i[12]*s+i[13]*o+i[14]*a+i[15]*l
return 0!==u?h/u:h},Jn.prototype.ambient=Qn.prototype.a3DOnlyFunction,er.prototype.ambient=function(e,t,n){Ae.useProgram(Re),M("uUsingMat3d",Re,"uUsingMat",!0)
var r=be.color(e,t,n)
C("uMaterialAmbient3d",Re,"uMaterialAmbient",be.color.toGLArray(r).slice(0,3))},Jn.prototype.emissive=Qn.prototype.a3DOnlyFunction,er.prototype.emissive=function(e,t,n){Ae.useProgram(Re),M("uUsingMat3d",Re,"uUsingMat",!0)
var r=be.color(e,t,n)
C("uMaterialEmissive3d",Re,"uMaterialEmissive",be.color.toGLArray(r).slice(0,3))},Jn.prototype.shininess=Qn.prototype.a3DOnlyFunction,er.prototype.shininess=function(e){Ae.useProgram(Re),M("uUsingMat3d",Re,"uUsingMat",!0),C("uShininess3d",Re,"uShininess",e)},Jn.prototype.specular=Qn.prototype.a3DOnlyFunction,er.prototype.specular=function(e,t,n){Ae.useProgram(Re),M("uUsingMat3d",Re,"uUsingMat",!0)
var r=be.color(e,t,n)
C("uMaterialSpecular3d",Re,"uMaterialSpecular",be.color.toGLArray(r).slice(0,3))},be.screenX=function(e,t,n){var r=tt.array()
if(16===r.length){var i=r[0]*e+r[1]*t+r[2]*n+r[3],s=r[4]*e+r[5]*t+r[6]*n+r[7],o=r[8]*e+r[9]*t+r[10]*n+r[11],a=r[12]*e+r[13]*t+r[14]*n+r[15],l=ot.array(),h=l[0]*i+l[1]*s+l[2]*o+l[3]*a,u=l[12]*i+l[13]*s+l[14]*o+l[15]*a
return 0!==u&&(h/=u),be.width*(1+h)/2}return tt.multX(e,t)},be.screenY=function(e,t,n){var r=tt.array()
if(16===r.length){var i=r[0]*e+r[1]*t+r[2]*n+r[3],s=r[4]*e+r[5]*t+r[6]*n+r[7],o=r[8]*e+r[9]*t+r[10]*n+r[11],a=r[12]*e+r[13]*t+r[14]*n+r[15],l=ot.array(),h=l[4]*i+l[5]*s+l[6]*o+l[7]*a,u=l[12]*i+l[13]*s+l[14]*o+l[15]*a
return 0!==u&&(h/=u),be.height*(1+h)/2}return tt.multY(e,t)},be.screenZ=function(e,t,n){var r=tt.array()
if(16!==r.length)return 0
var i=ot.array(),s=r[0]*e+r[1]*t+r[2]*n+r[3],o=r[4]*e+r[5]*t+r[6]*n+r[7],a=r[8]*e+r[9]*t+r[10]*n+r[11],l=r[12]*e+r[13]*t+r[14]*n+r[15],h=i[8]*s+i[9]*o+i[10]*a+i[11]*l,u=i[12]*s+i[13]*o+i[14]*a+i[15]*l
return 0!==u&&(h/=u),(h+1)/2},Qn.prototype.fill=function(){var e=be.color.apply(this,arguments)
e===ht&&at||(at=!0,ht=e)},Jn.prototype.fill=function(){Qn.prototype.fill.apply(this,arguments),ut=!0},er.prototype.fill=function(){Qn.prototype.fill.apply(this,arguments),lt=be.color.toGLArray(ht)},be.noFill=function(){at=!1},Qn.prototype.stroke=function(){var e=be.color.apply(this,arguments)
e===pt&&ct||(ct=!0,pt=e)},Jn.prototype.stroke=function(){Qn.prototype.stroke.apply(this,arguments),mt=!0},er.prototype.stroke=function(){Qn.prototype.stroke.apply(this,arguments),ft=be.color.toGLArray(pt)},be.noStroke=function(){ct=!1},Qn.prototype.strokeWeight=function(e){gt=e},Jn.prototype.strokeWeight=function(e){Qn.prototype.strokeWeight.apply(this,arguments),Ae.lineWidth=e},er.prototype.strokeWeight=function(e){Qn.prototype.strokeWeight.apply(this,arguments),Ae.useProgram(Le),C("pointSize2d",Le,"uPointSize",e),Ae.useProgram(Ie),C("pointSizeUnlitShape",Ie,"uPointSize",e),Ae.lineWidth(e)},be.strokeCap=function(e){we.$ensureContext().lineCap=e},be.strokeJoin=function(e){we.$ensureContext().lineJoin=e},Jn.prototype.smooth=function(){vt=!0
var e=de.style
e.setProperty("image-rendering","optimizeQuality","important"),e.setProperty("-ms-interpolation-mode","bicubic","important"),Ae.hasOwnProperty("mozImageSmoothingEnabled")&&(Ae.mozImageSmoothingEnabled=!0)},er.prototype.smooth=function(){vt=!0},Jn.prototype.noSmooth=function(){vt=!1
var e=de.style
e.setProperty("image-rendering","optimizeSpeed","important"),e.setProperty("image-rendering","-moz-crisp-edges","important"),e.setProperty("image-rendering","-webkit-optimize-contrast","important"),e.setProperty("image-rendering","optimize-contrast","important"),e.setProperty("-ms-interpolation-mode","nearest-neighbor","important"),Ae.hasOwnProperty("mozImageSmoothingEnabled")&&(Ae.mozImageSmoothingEnabled=!1)},er.prototype.noSmooth=function(){vt=!1},Jn.prototype.point=function(e,t){ct&&(vt||(e=Math.round(e),t=Math.round(t)),Ae.fillStyle=be.color.toString(pt),ut=!0,gt>1?(Ae.beginPath(),Ae.arc(e,t,gt/2,0,c.TWO_PI,!1),Ae.fill()):Ae.fillRect(e,t,1,1))},er.prototype.point=function(e,t,n){var r=new ir
r.translate(e,t,n||0),r.transpose()
var i=new ir
i.scale(1,-1,1),i.apply(tt.array()),i.transpose(),Ae.useProgram(Le),T("uModel2d",Le,"uModel",!1,r.array()),T("uView2d",Le,"uView",!1,i.array()),gt>0&&ct&&(C("uColor2d",Le,"uColor",ft),M("uIsDrawingText2d",Le,"uIsDrawingText",!1),M("uSmooth2d",Le,"uSmooth",vt),_("aVertex2d",Le,"aVertex",3,Ue),R("aTextureCoord2d",Le,"aTextureCoord"),Ae.drawArrays(Ae.POINTS,0,1))},be.beginShape=function(e){Rt=e,Lt=[],In=[]},Jn.prototype.vertex=function(e,t,n){var r=[]
kn&&(kn=!1),r.isVert=!0,r[0]=e,r[1]=t,r[2]=0,r[3]=0,r[4]=0,r[5]=ht,r[6]=pt,In.push(r),n&&(In[In.length-1].moveTo=n)},er.prototype.vertex=function(e,n,r,i,s){var o=[]
kn&&(kn=!1),o.isVert=!0,s===t&&Qt&&(s=i,i=r,r=0),i!==t&&s!==t&&(qt===c.IMAGE&&(i/=Zt.width,s/=Zt.height),i=i>1?1:i,i=i<0?0:i,s=s>1?1:s,s=s<0?0:s),o[0]=e,o[1]=n,o[2]=r||0,o[3]=i||0,o[4]=s||0,o[5]=lt[0],o[6]=lt[1],o[7]=lt[2],o[8]=lt[3],o[9]=ft[0],o[10]=ft[1],o[11]=ft[2],o[12]=ft[3],o[13]=wt,o[14]=Et,o[15]=St,In.push(o)}
var lr=function(e,t){var n=new ir
n.scale(1,-1,1),n.apply(tt.array()),n.transpose(),Ae.useProgram(Ie),T("uViewUS",Ie,"uView",!1,n.array()),M("uSmoothUS",Ie,"uSmooth",vt),_("aVertexUS",Ie,"aVertex",3,Ue),Ae.bufferData(Ae.ARRAY_BUFFER,new g(e),Ae.STREAM_DRAW),_("aColorUS",Ie,"aColor",4,Ve),Ae.bufferData(Ae.ARRAY_BUFFER,new g(t),Ae.STREAM_DRAW),Ae.drawArrays(Ae.POINTS,0,e.length/3)},hr=function(e,t,n){var r
r="LINES"===t?Ae.LINES:"LINE_LOOP"===t?Ae.LINE_LOOP:Ae.LINE_STRIP
var i=new ir
i.scale(1,-1,1),i.apply(tt.array()),i.transpose(),Ae.useProgram(Ie),T("uViewUS",Ie,"uView",!1,i.array()),_("aVertexUS",Ie,"aVertex",3,$e),Ae.bufferData(Ae.ARRAY_BUFFER,new g(e),Ae.STREAM_DRAW),_("aColorUS",Ie,"aColor",4,ze),Ae.bufferData(Ae.ARRAY_BUFFER,new g(n),Ae.STREAM_DRAW),Ae.drawArrays(r,0,e.length/3)},ur=function(e,t,n,r){var i
i="TRIANGLES"===t?Ae.TRIANGLES:"TRIANGLE_FAN"===t?Ae.TRIANGLE_FAN:Ae.TRIANGLE_STRIP
var s=new ir
s.scale(1,-1,1),s.apply(tt.array()),s.transpose(),Ae.useProgram(Re),T("model3d",Re,"uModel",!1,[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),T("view3d",Re,"uView",!1,s.array()),Ae.enable(Ae.POLYGON_OFFSET_FILL),Ae.polygonOffset(1,1),C("color3d",Re,"uColor",[-1,0,0,0]),_("vertex3d",Re,"aVertex",3,Ge),Ae.bufferData(Ae.ARRAY_BUFFER,new g(e),Ae.STREAM_DRAW),Qt&&null!==Ht&&Xt(n),_("aColor3d",Re,"aColor",4,Ve),Ae.bufferData(Ae.ARRAY_BUFFER,new g(n),Ae.STREAM_DRAW),R("aNormal3d",Re,"aNormal"),Qt&&(M("uUsingTexture3d",Re,"uUsingTexture",Qt),_("aTexture3d",Re,"aTexture",2,He),Ae.bufferData(Ae.ARRAY_BUFFER,new g(r),Ae.STREAM_DRAW)),Ae.drawArrays(i,0,e.length/3),Ae.disable(Ae.POLYGON_OFFSET_FILL)}
Jn.prototype.endShape=function(e){if(0!==In.length){var n=e===c.CLOSE
n&&In.push(In[0])
var r,i=[],s=[],o=[],a=[]
kn=!0
var l,h,u=In.length
for(l=0;l<u;l++)for(r=In[l],h=0;h<3;h++)i.push(r[h])
for(l=0;l<u;l++)for(r=In[l],h=5;h<9;h++)s.push(r[h])
for(l=0;l<u;l++)for(r=In[l],h=9;h<13;h++)o.push(r[h])
for(l=0;l<u;l++)r=In[l],a.push(r[3]),a.push(r[4])
if(!Nn||Rt!==c.POLYGON&&Rt!==t)if(!Fn||Rt!==c.POLYGON&&Rt!==t)if(Rt===c.POINTS)for(l=0;l<u;l++)r=In[l],ct&&be.stroke(r[6]),be.point(r[0],r[1])
else if(Rt===c.LINES)for(l=0;l+1<u;l+=2)r=In[l],ct&&be.stroke(In[l+1][6]),be.line(r[0],r[1],In[l+1][0],In[l+1][1])
else if(Rt===c.TRIANGLES)for(l=0;l+2<u;l+=3)r=In[l],Ae.beginPath(),Ae.moveTo(r[0],r[1]),Ae.lineTo(In[l+1][0],In[l+1][1]),Ae.lineTo(In[l+2][0],In[l+2][1]),Ae.lineTo(r[0],r[1]),at&&(be.fill(In[l+2][5]),z()),ct&&(be.stroke(In[l+2][6]),U()),Ae.closePath()
else if(Rt===c.TRIANGLE_STRIP)for(l=0;l+1<u;l++)r=In[l],Ae.beginPath(),Ae.moveTo(In[l+1][0],In[l+1][1]),Ae.lineTo(r[0],r[1]),ct&&be.stroke(In[l+1][6]),at&&be.fill(In[l+1][5]),l+2<u&&(Ae.lineTo(In[l+2][0],In[l+2][1]),ct&&be.stroke(In[l+2][6]),at&&be.fill(In[l+2][5])),H()
else if(Rt===c.TRIANGLE_FAN){if(u>2)for(Ae.beginPath(),Ae.moveTo(In[0][0],In[0][1]),Ae.lineTo(In[1][0],In[1][1]),Ae.lineTo(In[2][0],In[2][1]),at&&(be.fill(In[2][5]),z()),ct&&(be.stroke(In[2][6]),U()),Ae.closePath(),l=3;l<u;l++)r=In[l],Ae.beginPath(),Ae.moveTo(In[0][0],In[0][1]),Ae.lineTo(In[l-1][0],In[l-1][1]),Ae.lineTo(r[0],r[1]),at&&(be.fill(r[5]),z()),ct&&(be.stroke(r[6]),U()),Ae.closePath()}else if(Rt===c.QUADS)for(l=0;l+3<u;l+=4){for(r=In[l],Ae.beginPath(),Ae.moveTo(r[0],r[1]),h=1;h<4;h++)Ae.lineTo(In[l+h][0],In[l+h][1])
Ae.lineTo(r[0],r[1]),at&&(be.fill(In[l+3][5]),z()),ct&&(be.stroke(In[l+3][6]),U()),Ae.closePath()}else if(Rt===c.QUAD_STRIP){if(u>3)for(l=0;l+1<u;l+=2)r=In[l],Ae.beginPath(),l+3<u?(Ae.moveTo(In[l+2][0],In[l+2][1]),Ae.lineTo(r[0],r[1]),Ae.lineTo(In[l+1][0],In[l+1][1]),Ae.lineTo(In[l+3][0],In[l+3][1]),at&&be.fill(In[l+3][5]),ct&&be.stroke(In[l+3][6])):(Ae.moveTo(r[0],r[1]),Ae.lineTo(In[l+1][0],In[l+1][1])),H()}else{for(Ae.beginPath(),Ae.moveTo(In[0][0],In[0][1]),l=1;l<u;l++)r=In[l],r.isVert&&(r.moveTo?Ae.moveTo(r[0],r[1]):Ae.lineTo(r[0],r[1]))
H()}else{for(Ae.beginPath(),l=0;l<u;l++)r=In[l],In[l].isVert?In[l].moveTo?Ae.moveTo(r[0],r[1]):Ae.lineTo(r[0],r[1]):Ae.bezierCurveTo(In[l][0],In[l][1],In[l][2],In[l][3],In[l][4],In[l][5])
H()}else if(u>3){var f=[],p=1-It
for(Ae.beginPath(),Ae.moveTo(In[1][0],In[1][1]),l=1;l+2<u;l++)r=In[l],f[0]=[r[0],r[1]],f[1]=[r[0]+(p*In[l+1][0]-p*In[l-1][0])/6,r[1]+(p*In[l+1][1]-p*In[l-1][1])/6],f[2]=[In[l+1][0]+(p*In[l][0]-p*In[l+2][0])/6,In[l+1][1]+(p*In[l][1]-p*In[l+2][1])/6],f[3]=[In[l+1][0],In[l+1][1]],Ae.bezierCurveTo(f[1][0],f[1][1],f[2][0],f[2][1],f[3][0],f[3][1])
H()}Nn=!1,Fn=!1,Dn=[],On=0,n&&In.pop()}},er.prototype.endShape=function(e){if(0!==In.length){var n,r=e===c.CLOSE,i=[],s=[],o=[],a=[],l=[]
kn=!0
var h,u,f,p=In.length
for(h=0;h<p;h++)for(n=In[h],u=0;u<3;u++)s.push(n[u])
for(h=0;h<p;h++)for(n=In[h],u=5;u<9;u++)o.push(n[u])
for(h=0;h<p;h++)for(n=In[h],u=9;u<13;u++)a.push(n[u])
for(h=0;h<p;h++)n=In[h],l.push(n[3]),l.push(n[4])
if(r){for(s.push(In[0][0]),s.push(In[0][1]),s.push(In[0][2]),h=5;h<9;h++)o.push(In[0][h])
for(h=9;h<13;h++)a.push(In[0][h])
l.push(In[0][3]),l.push(In[0][4])}if(!Nn||Rt!==c.POLYGON&&Rt!==t)if(!Fn||Rt!==c.POLYGON&&Rt!==t){if(Rt===c.POINTS){for(h=0;h<p;h++)for(n=In[h],u=0;u<3;u++)i.push(n[u])
lr(i,a)}else if(Rt===c.LINES){for(h=0;h<p;h++)for(n=In[h],u=0;u<3;u++)i.push(n[u])
for(h=0;h<p;h++)for(n=In[h],u=5;u<9;u++)o.push(n[u])
hr(i,"LINES",a)}else if(Rt===c.TRIANGLES){if(p>2)for(h=0;h+2<p;h+=3){for(s=[],l=[],i=[],o=[],a=[],u=0;u<3;u++)for(f=0;f<3;f++)i.push(In[h+u][f]),s.push(In[h+u][f])
for(u=0;u<3;u++)for(f=3;f<5;f++)l.push(In[h+u][f])
for(u=0;u<3;u++)for(f=5;f<9;f++)o.push(In[h+u][f]),a.push(In[h+u][f+4])
ct&&hr(i,"LINE_LOOP",a),(at||Qt)&&ur(s,"TRIANGLES",o,l)}}else if(Rt===c.TRIANGLE_STRIP){if(p>2)for(h=0;h+2<p;h++){for(i=[],s=[],a=[],o=[],l=[],u=0;u<3;u++)for(f=0;f<3;f++)i.push(In[h+u][f]),s.push(In[h+u][f])
for(u=0;u<3;u++)for(f=3;f<5;f++)l.push(In[h+u][f])
for(u=0;u<3;u++)for(f=5;f<9;f++)a.push(In[h+u][f+4]),o.push(In[h+u][f]);(at||Qt)&&ur(s,"TRIANGLE_STRIP",o,l),ct&&hr(i,"LINE_LOOP",a)}}else if(Rt===c.TRIANGLE_FAN){if(p>2){for(h=0;h<3;h++)for(n=In[h],u=0;u<3;u++)i.push(n[u])
for(h=0;h<3;h++)for(n=In[h],u=9;u<13;u++)a.push(n[u])
for(ct&&hr(i,"LINE_LOOP",a),h=2;h+1<p;h++){for(i=[],a=[],i.push(In[0][0]),i.push(In[0][1]),i.push(In[0][2]),a.push(In[0][9]),a.push(In[0][10]),a.push(In[0][11]),a.push(In[0][12]),u=0;u<2;u++)for(f=0;f<3;f++)i.push(In[h+u][f])
for(u=0;u<2;u++)for(f=9;f<13;f++)a.push(In[h+u][f])
ct&&hr(i,"LINE_STRIP",a)}(at||Qt)&&ur(s,"TRIANGLE_FAN",o,l)}}else if(Rt===c.QUADS)for(h=0;h+3<p;h+=4){for(i=[],u=0;u<4;u++)for(n=In[h+u],f=0;f<3;f++)i.push(n[f])
if(ct&&hr(i,"LINE_LOOP",a),at){for(s=[],o=[],l=[],u=0;u<3;u++)s.push(In[h][u])
for(u=5;u<9;u++)o.push(In[h][u])
for(u=0;u<3;u++)s.push(In[h+1][u])
for(u=5;u<9;u++)o.push(In[h+1][u])
for(u=0;u<3;u++)s.push(In[h+3][u])
for(u=5;u<9;u++)o.push(In[h+3][u])
for(u=0;u<3;u++)s.push(In[h+2][u])
for(u=5;u<9;u++)o.push(In[h+2][u])
Qt&&(l.push(In[h+0][3]),l.push(In[h+0][4]),l.push(In[h+1][3]),l.push(In[h+1][4]),l.push(In[h+3][3]),l.push(In[h+3][4]),l.push(In[h+2][3]),l.push(In[h+2][4])),ur(s,"TRIANGLE_STRIP",o,l)}}else if(Rt===c.QUAD_STRIP){if(p>3){for(h=0;h<2;h++)for(n=In[h],u=0;u<3;u++)i.push(n[u])
for(h=0;h<2;h++)for(n=In[h],u=9;u<13;u++)a.push(n[u])
for(hr(i,"LINE_STRIP",a),p>4&&p%2>0&&(s.splice(s.length-3),In.pop()),h=0;h+3<p;h+=2){for(i=[],a=[],u=0;u<3;u++)i.push(In[h+1][u])
for(u=0;u<3;u++)i.push(In[h+3][u])
for(u=0;u<3;u++)i.push(In[h+2][u])
for(u=0;u<3;u++)i.push(In[h+0][u])
for(u=9;u<13;u++)a.push(In[h+1][u])
for(u=9;u<13;u++)a.push(In[h+3][u])
for(u=9;u<13;u++)a.push(In[h+2][u])
for(u=9;u<13;u++)a.push(In[h+0][u])
ct&&hr(i,"LINE_STRIP",a)}(at||Qt)&&ur(s,"TRIANGLE_LIST",o,l)}}else if(1===p){for(u=0;u<3;u++)i.push(In[0][u])
for(u=9;u<13;u++)a.push(In[0][u])
lr(i,a)}else{for(h=0;h<p;h++){for(n=In[h],u=0;u<3;u++)i.push(n[u])
for(u=5;u<9;u++)a.push(n[u])}ct&&r?hr(i,"LINE_LOOP",a):ct&&!r&&hr(i,"LINE_STRIP",a),(at||Qt)&&ur(s,"TRIANGLE_FAN",o,l)}Qt=!1,Ae.useProgram(Re),M("usingTexture3d",Re,"uUsingTexture",Qt)}else i=s,i.splice(i.length-3),a.splice(a.length-4),ct&&hr(i,null,a),at&&ur(s,"TRIANGLES",o)
else i=s,ct&&hr(i,null,a),at&&ur(s,null,o)
Nn=!1,Fn=!1,Dn=[],On=0}}
var cr=function(e,t){var n=1/e,r=n*n,i=r*n
t.set(0,0,0,1,i,r,n,0,6*i,2*r,0,0,6*i,0,0,0)},fr=function(){Ce||(Se=new ir,Ce=new ir,Ot=!0)
var e=It
Se.set((e-1)/2,(e+3)/2,(-3-e)/2,(1-e)/2,1-e,(-5-e)/2,e+2,(e-1)/2,(e-1)/2,0,(1-e)/2,0,0,1,0,0),cr(Dt,Ce),Te||(Pe=new ir),Pe.set(Se),Pe.preApply(Te),Ce.apply(Se)}
Jn.prototype.bezierVertex=function(){Fn=!0
var e=[]
if(kn)throw"vertex() must be used at least once before calling bezierVertex()"
for(var t=0;t<arguments.length;t++)e[t]=arguments[t]
In.push(e),In[In.length-1].isVert=!1},er.prototype.bezierVertex=function(){Fn=!0
if(kn)throw"vertex() must be used at least once before calling bezierVertex()"
if(9===arguments.length){Me===t&&(Me=new ir)
var e=In.length-1
cr(Ft,Me),Me.apply(_e)
for(var n=Me.array(),r=In[e][0],i=In[e][1],s=In[e][2],o=n[4]*r+n[5]*arguments[0]+n[6]*arguments[3]+n[7]*arguments[6],a=n[8]*r+n[9]*arguments[0]+n[10]*arguments[3]+n[11]*arguments[6],l=n[12]*r+n[13]*arguments[0]+n[14]*arguments[3]+n[15]*arguments[6],h=n[4]*i+n[5]*arguments[1]+n[6]*arguments[4]+n[7]*arguments[7],u=n[8]*i+n[9]*arguments[1]+n[10]*arguments[4]+n[11]*arguments[7],c=n[12]*i+n[13]*arguments[1]+n[14]*arguments[4]+n[15]*arguments[7],f=n[4]*s+n[5]*arguments[2]+n[6]*arguments[5]+n[7]*arguments[8],p=n[8]*s+n[9]*arguments[2]+n[10]*arguments[5]+n[11]*arguments[8],m=n[12]*s+n[13]*arguments[2]+n[14]*arguments[5]+n[15]*arguments[8],g=0;g<Ft;g++)r+=o,o+=a,a+=l,i+=h,h+=u,u+=c,s+=f,f+=p,p+=m,be.vertex(r,i,s)
be.vertex(arguments[6],arguments[7],arguments[8])}},be.texture=function(e){var t=we.$ensureContext()
if(e.__texture)t.bindTexture(t.TEXTURE_2D,e.__texture)
else if("canvas"===e.localName)t.bindTexture(t.TEXTURE_2D,Xe),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,e),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.generateMipmap(t.TEXTURE_2D),Zt.width=e.width,Zt.height=e.height
else{var n,r=t.createTexture(),i=h.createElement("canvas"),s=i.getContext("2d")
if(e.width&e.width-1==0)i.width=e.width
else{for(n=1;n<e.width;)n*=2
i.width=n}if(e.height&e.height-1==0)i.height=e.height
else{for(n=1;n<e.height;)n*=2
i.height=n}s.drawImage(e.sourceImg,0,0,e.width,e.height,0,0,i.width,i.height),t.bindTexture(t.TEXTURE_2D,r),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR_MIPMAP_LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,i),t.generateMipmap(t.TEXTURE_2D),e.__texture=r,Zt.width=e.width,Zt.height=e.height}Qt=!0,t.useProgram(Re),M("usingTexture3d",Re,"uUsingTexture",Qt)},be.textureMode=function(e){qt=e}
var pr=function(e,t,n,r,i,s,o,a,l,h,u,c){var f=r,p=i,m=s,g=Ce.array(),d=g[4]*e+g[5]*r+g[6]*o+g[7]*h,v=g[8]*e+g[9]*r+g[10]*o+g[11]*h,y=g[12]*e+g[13]*r+g[14]*o+g[15]*h,b=g[4]*t+g[5]*i+g[6]*a+g[7]*u,A=g[8]*t+g[9]*i+g[10]*a+g[11]*u,x=g[12]*t+g[13]*i+g[14]*a+g[15]*u,w=g[4]*n+g[5]*s+g[6]*l+g[7]*c,E=g[8]*n+g[9]*s+g[10]*l+g[11]*c,S=g[12]*n+g[13]*s+g[14]*l+g[15]*c
be.vertex(f,p,m)
for(var P=0;P<Dt;P++)f+=d,d+=v,v+=y,p+=b,b+=A,A+=x,m+=w,w+=E,E+=S,be.vertex(f,p,m)}
Jn.prototype.curveVertex=function(e,t){Nn=!0,be.vertex(e,t)},er.prototype.curveVertex=function(e,t,n){Nn=!0,Ot||fr()
var r=[]
r[0]=e,r[1]=t,r[2]=n,Dn.push(r),++On>3&&pr(Dn[On-4][0],Dn[On-4][1],Dn[On-4][2],Dn[On-3][0],Dn[On-3][1],Dn[On-3][2],Dn[On-2][0],Dn[On-2][1],Dn[On-2][2],Dn[On-1][0],Dn[On-1][1],Dn[On-1][2])},Jn.prototype.curve=function(e,t,n,r,i,s,o,a){be.beginShape(),be.curveVertex(e,t),be.curveVertex(n,r),be.curveVertex(i,s),be.curveVertex(o,a),be.endShape()},er.prototype.curve=function(e,n,r,i,s,o,a,l,h,u,c,f){if(f!==t)return be.beginShape(),be.curveVertex(e,n,r),be.curveVertex(i,s,o),be.curveVertex(a,l,h),be.curveVertex(u,c,f),void be.endShape()
be.beginShape(),be.curveVertex(e,n),be.curveVertex(r,i),be.curveVertex(s,o),be.curveVertex(a,l),be.endShape()},be.curveTightness=function(e){It=e},be.curveDetail=function(e){Dt=e,fr()},be.rectMode=function(e){At=e},be.imageMode=function(e){switch(e){case c.CORNER:Wn=Kn
break
case c.CORNERS:Wn=Zn
break
case c.CENTER:Wn=qn
break
default:throw"Invalid imageMode"}},be.ellipseMode=function(e){xt=e},be.arc=function(e,t,n,r,i,s,o){if(!(n<=0||s<i)){for(xt===c.CORNERS?(n-=e,r-=t):xt===c.RADIUS?(e-=n,t-=r,n*=2,r*=2):xt===c.CENTER&&(e-=n/2,t-=r/2);i<0;)i+=c.TWO_PI,s+=c.TWO_PI
s-i>c.TWO_PI&&(s=i+c.TWO_PI)
var a=n/2,l=r/2,h=e+a,u=t+l,f=1/(a+l),p=function(e,t,n,r,i){return function(s,f,p,m,g){for(p=0,m=n,g=i+r,s.beginShape(),f&&s.vertex(e-.5,t-.5);m<g;p++,m=p*r+n)s.vertex(e+Math.cos(m)*a|0,t+Math.sin(m)*l|0)
o===c.OPEN&&at?s.vertex(h+Math.cos(n)*a,u+Math.sin(n)*l):o===c.CHORD?s.vertex(h+Math.cos(n)*a,u+Math.sin(n)*l):o===c.PIE&&(s.line(h+Math.cos(n)*a,u+Math.sin(n)*l,h,u),s.line(h,u,h+Math.cos(i)*a,u+Math.sin(i)*l)),s.endShape(f?c.CLOSE:void 0)}}(h+.5,u+.5,i,f,s)
if(at){var m=ct
ct=!1,p(be,!0),ct=m}if(ct){var g=at
at=!1,p(be),at=g}}},Jn.prototype.line=function(e,n,r,i){if(ct){if(vt||(e=Math.round(e),r=Math.round(r),n=Math.round(n),i=Math.round(i)),e===r&&n===i)return void be.point(e,n)
for(var s=t,o=t,a=!0,l=tt.array(),h=[1,0,0,0,1,0],u=0;u<6&&a;u++)a=l[u]===h[u]
a&&(e===r?(n>i&&(s=n,n=i,i=s),i++,gt%2==1&&Ae.translate(.5,0)):n===i&&(e>r&&(s=e,e=r,r=s),r++,gt%2==1&&Ae.translate(0,.5)),1===gt&&(o=Ae.lineCap,Ae.lineCap="butt")),Ae.beginPath(),Ae.moveTo(e||0,n||0),Ae.lineTo(r||0,i||0),U(),a&&(e===r&&gt%2==1?Ae.translate(-.5,0):n===i&&gt%2==1&&Ae.translate(0,-.5),1===gt&&(Ae.lineCap=o))}},er.prototype.line=function(e,n,r,i,s,o){if(s!==t&&o!==t||(o=0,s=i,i=r,r=0),e===i&&n===s&&r===o)return void be.point(e,n,r)
var a=[e,n,r,i,s,o],l=new ir
l.scale(1,-1,1),l.apply(tt.array()),l.transpose(),gt>0&&ct&&(Ae.useProgram(Le),T("uModel2d",Le,"uModel",!1,[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),T("uView2d",Le,"uView",!1,l.array()),C("uColor2d",Le,"uColor",ft),M("uIsDrawingText",Le,"uIsDrawingText",!1),_("aVertex2d",Le,"aVertex",3,$e),R("aTextureCoord2d",Le,"aTextureCoord"),Ae.bufferData(Ae.ARRAY_BUFFER,new g(a),Ae.STREAM_DRAW),Ae.drawArrays(Ae.LINES,0,2))},Jn.prototype.bezier=function(){if(8!==arguments.length)throw"You must use 8 parameters for bezier() in 2D mode"
be.beginShape(),be.vertex(arguments[0],arguments[1]),be.bezierVertex(arguments[2],arguments[3],arguments[4],arguments[5],arguments[6],arguments[7]),be.endShape()},er.prototype.bezier=function(){if(12!==arguments.length)throw"You must use 12 parameters for bezier() in 3D mode"
be.beginShape(),be.vertex(arguments[0],arguments[1],arguments[2]),be.bezierVertex(arguments[3],arguments[4],arguments[5],arguments[6],arguments[7],arguments[8],arguments[9],arguments[10],arguments[11]),be.endShape()},be.bezierDetail=function(e){Ft=e},be.bezierPoint=function(e,t,n,r,i){return(1-i)*(1-i)*(1-i)*e+3*(1-i)*(1-i)*i*t+3*(1-i)*i*i*n+i*i*i*r},be.bezierTangent=function(e,t,n,r,i){return 3*i*i*(3*t-e-3*n+r)+6*i*(e-2*t+n)+3*(-e+t)},be.curvePoint=function(e,t,n,r,i){return.5*(2*t+(-e+n)*i+(2*e-5*t+4*n-r)*i*i+(3*t-e-3*n+r)*i*i*i)},be.curveTangent=function(e,t,n,r,i){return.5*(-e+n+2*(2*e-5*t+4*n-r)*i+3*(3*t-e-3*n+r)*i*i)},be.triangle=function(e,t,n,r,i,s){be.beginShape(c.TRIANGLES),be.vertex(e,t,0),be.vertex(n,r,0),be.vertex(i,s,0),be.endShape()},be.quad=function(e,t,n,r,i,s,o,a){be.beginShape(c.QUADS),be.vertex(e,t,0),be.vertex(n,r,0),be.vertex(i,s,0),be.vertex(o,a,0),be.endShape()}
var mr=function(e,n,r,i,s,o,a,l){l===t&&(o=s,a=s,l=s)
var h=r/2,u=i/2;(s>h||s>u)&&(s=Math.min(h,u)),(o>h||o>u)&&(o=Math.min(h,u)),(a>h||a>u)&&(a=Math.min(h,u)),(l>h||l>u)&&(l=Math.min(h,u)),at&&!ct||Ae.translate(.5,.5),Ae.beginPath(),Ae.moveTo(e+s,n),Ae.lineTo(e+r-o,n),Ae.quadraticCurveTo(e+r,n,e+r,n+o),Ae.lineTo(e+r,n+i-a),Ae.quadraticCurveTo(e+r,n+i,e+r-a,n+i),Ae.lineTo(e+l,n+i),Ae.quadraticCurveTo(e,n+i,e,n+i-l),Ae.lineTo(e,n+s),Ae.quadraticCurveTo(e,n,e+s,n),at&&!ct||Ae.translate(-.5,-.5),z(),U()}
Jn.prototype.rect=function(e,n,r,i,s,o,a,l){if(r==""+r||i==""+i){if(At===c.CORNERS?(r-=e,i-=n):At===c.RADIUS?(r*=2,i*=2,e-=r/2,n-=i/2):At===c.CENTER&&(e-=r/2,n-=i/2),vt||(e=Math.round(e),n=Math.round(n),r=Math.round(r),i=Math.round(i)),s!==t)return void mr(e,n,r,i,s,o,a,l)
ct&&gt%2==1&&Ae.translate(.5,.5),Ae.beginPath(),Ae.rect(e,n,r,i),z(),U(),ct&&gt%2==1&&Ae.translate(-.5,-.5)}},er.prototype.rect=function(e,n,r,i,s,o,a,l){if(s!==t)throw"rect() with rounded corners is not supported in 3D mode"
At===c.CORNERS?(r-=e,i-=n):At===c.RADIUS?(r*=2,i*=2,e-=r/2,n-=i/2):At===c.CENTER&&(e-=r/2,n-=i/2)
var h=new ir
h.translate(e,n,0),h.scale(r,i,1),h.transpose()
var u=new ir
if(u.scale(1,-1,1),u.apply(tt.array()),u.transpose(),gt>0&&ct&&(Ae.useProgram(Le),T("uModel2d",Le,"uModel",!1,h.array()),T("uView2d",Le,"uView",!1,u.array()),C("uColor2d",Le,"uColor",ft),M("uIsDrawingText2d",Le,"uIsDrawingText",!1),_("aVertex2d",Le,"aVertex",3,Fe),R("aTextureCoord2d",Le,"aTextureCoord"),Ae.drawArrays(Ae.LINE_LOOP,0,Un.length/3)),at){if(Ae.useProgram(Re),T("uModel3d",Re,"uModel",!1,h.array()),T("uView3d",Re,"uView",!1,u.array()),Ae.enable(Ae.POLYGON_OFFSET_FILL),Ae.polygonOffset(1,1),C("color3d",Re,"uColor",lt),gn>0){var f=new ir
f.set(u)
var p=new ir
p.set(h),f.mult(p)
var m=new ir
m.set(f),m.invert(),m.transpose(),T("uNormalTransform3d",Re,"uNormalTransform",!1,m.array()),_("aNormal3d",Re,"aNormal",3,ke)}else R("normal3d",Re,"aNormal")
_("vertex3d",Re,"aVertex",3,Fe),Ae.drawArrays(Ae.TRIANGLE_FAN,0,Un.length/3),Ae.disable(Ae.POLYGON_OFFSET_FILL)}},Jn.prototype.ellipse=function(e,t,n,r){if(e=e||0,t=t||0,!(n<=0&&r<=0))if(xt===c.RADIUS?(n*=2,r*=2):xt===c.CORNERS?(n-=e,r-=t,e+=n/2,t+=r/2):xt===c.CORNER&&(e+=n/2,t+=r/2),n===r)Ae.beginPath(),Ae.arc(e,t,n/2,0,c.TWO_PI,!1),z(),U()
else{var i=n/2,s=r/2,o=.5522847498307933,a=o*i,l=o*s
be.beginShape(),be.vertex(e+i,t),be.bezierVertex(e+i,t-l,e+a,t-s,e,t-s),be.bezierVertex(e-a,t-s,e-i,t-l,e-i,t),be.bezierVertex(e-i,t+l,e-a,t+s,e,t+s),be.bezierVertex(e+a,t+s,e+i,t+l,e+i,t),be.endShape()}},er.prototype.ellipse=function(e,t,n,r){if(e=e||0,t=t||0,!(n<=0&&r<=0)){xt===c.RADIUS?(n*=2,r*=2):xt===c.CORNERS?(n-=e,r-=t,e+=n/2,t+=r/2):xt===c.CORNER&&(e+=n/2,t+=r/2)
var i=n/2,s=r/2,o=.5522847498307933,a=o*i,l=o*s
if(be.beginShape(),be.vertex(e+i,t),be.bezierVertex(e+i,t-l,0,e+a,t-s,0,e,t-s,0),be.bezierVertex(e-a,t-s,0,e-i,t-l,0,e-i,t,0),be.bezierVertex(e-i,t+l,0,e-a,t+s,0,e,t+s,0),be.bezierVertex(e+a,t+s,0,e+i,t+l,0,e+i,t,0),be.endShape(),at){var h,u,f=0,p=0
for(h=0;h<In.length;h++)f+=In[h][0],p+=In[h][1]
f/=In.length,p/=In.length
var m=[],g=[],d=[]
for(m[0]=f,m[1]=p,m[2]=0,m[3]=0,m[4]=0,m[5]=lt[0],m[6]=lt[1],m[7]=lt[2],m[8]=lt[3],m[9]=ft[0],m[10]=ft[1],m[11]=ft[2],m[12]=ft[3],m[13]=wt,m[14]=Et,m[15]=St,In.unshift(m),h=0;h<In.length;h++){for(u=0;u<3;u++)g.push(In[h][u])
for(u=5;u<9;u++)d.push(In[h][u])}ur(g,"TRIANGLE_FAN",d)}}},be.normal=function(e,t,n){if(3!==arguments.length||"number"!=typeof e||"number"!=typeof t||"number"!=typeof n)throw"normal() requires three numeric arguments."
wt=e,Et=t,St=n,0!==Rt&&(Pt===c.NORMAL_MODE_AUTO?Pt=c.NORMAL_MODE_SHAPE:Pt===c.NORMAL_MODE_SHAPE&&(Pt=c.NORMAL_MODE_VERTEX))},be.save=function(e,n){return n!==t?l.open(n.toDataURL(),"_blank"):l.open(be.externals.canvas.toDataURL(),"_blank")}
var gr=0
be.saveFrame=function(e){e===t&&(e="screen-####.png")
var n=e.replace(/#+/,function(e){for(var t=""+gr++;t.length<e.length;)t="0"+t
return t})
be.save(n)}
var dr=h.createElement("canvas").getContext("2d"),vr=[t,t,t],yr=function(e,t,n){if(this.__isDirty=!1,e instanceof m)this.fromHTMLImageData(e)
else if(t||n){this.width=e||1,this.height=t||1
var r=this.sourceImg=h.createElement("canvas")
r.width=this.width,r.height=this.height
this.imageData=r.getContext("2d").createImageData(this.width,this.height)
if(this.format=n===c.ARGB||n===c.ALPHA?n:c.RGB,this.format===c.RGB)for(var i=3,s=this.imageData.data,o=s.length;i<o;i+=4)s[i]=255
this.__isDirty=!0,this.updatePixels()}else this.width=0,this.height=0,this.imageData=dr.createImageData(1,1),this.format=c.ARGB
this.pixels=j(this)}
yr.prototype={__isPImage:!0,updatePixels:function(){var e=this.sourceImg
e&&e instanceof p&&this.__isDirty&&e.getContext("2d").putImageData(this.imageData,0,0),this.__isDirty=!1},fromHTMLImageData:function(e){var t=X(e)
try{var n=t.context.getImageData(0,0,e.width,e.height)
this.fromImageData(n)}catch(t){e.width&&e.height&&(this.isRemote=!0,this.width=e.width,this.height=e.height)}this.sourceImg=e},get:function(e,t,n,r){return arguments.length?2===arguments.length?be.get(e,t,this):4===arguments.length?be.get(e,t,n,r,this):void 0:be.get(this)},set:function(e,t,n){be.set(e,t,n,this),this.__isDirty=!0},blend:function(e,t,n,r,i,s,o,a,l,h){9===arguments.length?be.blend(this,e,t,n,r,i,s,o,a,l,this):10===arguments.length&&be.blend(e,t,n,r,i,s,o,a,l,h,this),delete this.sourceImg},copy:function(e,t,n,r,i,s,o,a,l){8===arguments.length?be.blend(this,e,t,n,r,i,s,o,a,c.REPLACE,this):9===arguments.length&&be.blend(e,t,n,r,i,s,o,a,l,c.REPLACE,this),delete this.sourceImg},filter:function(e,t){2===arguments.length?be.filter(e,t,this):1===arguments.length&&be.filter(e,null,this),delete this.sourceImg},save:function(e){be.save(e,this)},resize:function(e,t){if(this.isRemote)throw"Image is loaded remotely. Cannot resize."
if(0!==this.width||0!==this.height){0===e&&0!==t?e=Math.floor(this.width/this.height*t):0===t&&0!==e&&(t=Math.floor(this.height/this.width*e))
var n=X(this.imageData).canvas,r=X(n,e,t).context.getImageData(0,0,e,t)
this.fromImageData(r)}},mask:function(e){var t,n,r=this.toImageData()
if(e instanceof yr||e.__isPImage){if(e.width!==this.width||e.height!==this.height)throw"mask must have the same dimensions as PImage."
for(e=e.toImageData(),t=2,n=this.width*this.height*4;t<n;t+=4)r.data[t+1]=e.data[t]}else if(e instanceof Array){if(this.width*this.height!==e.length)throw"mask array must be the same length as PImage pixels array."
for(t=0,n=e.length;t<n;++t)r.data[4*t+3]=e[t]}this.fromImageData(r)},loadPixels:u,toImageData:function(){return this.isRemote?this.sourceImg:this.__isDirty?X(this.sourceImg).context.getImageData(0,0,this.width,this.height):this.imageData},toDataURL:function(){if(this.isRemote)throw"Image is loaded remotely. Cannot create dataURI."
return X(this.imageData).canvas.toDataURL()},fromImageData:function(e){var t=e.width,n=e.height,r=h.createElement("canvas"),i=r.getContext("2d")
this.width=r.width=t,this.height=r.height=n,i.putImageData(e,0,0),this.format=c.ARGB,this.imageData=e,this.sourceImg=r}},be.PImage=yr,be.createImage=function(e,t,n){return new yr(e,t,n)},be.loadImage=function(e,t,n){var r
if(xe.imageCache.images[e])return r=new yr(xe.imageCache.images[e]),r.loaded=!0,r
r=new yr
var i=h.createElement("img")
return r.sourceImg=i,i.onload=function(e,t,n){var r=e,i=t,s=n
return function(){i.fromHTMLImageData(r),i.loaded=!0,s&&s()}}(i,r,n),i.crossOrigin="Anonymous",i.src=e,r},be.requestImage=be.loadImage,be.get=function(e,t,n,r,i){return void 0!==i?Z(e,t,n,r,i):void 0!==r?W(e,t,n,r):void 0!==n?K(e,t,n):void 0!==t?Y(e,t):void 0!==e?Z(0,0,e.width,e.height,e):W(0,0,be.width,be.height)},be.createGraphics=function(e,t,n){var r=new E
return r.size(e,t,n),r.background(0,0),r},be.set=function(e,t,n,r){3===arguments.length?"number"==typeof n?ee(e,t,n):(n instanceof yr||n.__isPImage)&&be.image(n,e,t):4===arguments.length&&te(e,t,n,r)},be.imageData={},be.pixels={getLength:function(){return be.imageData.data.length?be.imageData.data.length/4:0},getPixel:function(e){var t=4*e,n=be.imageData.data
return n[t+3]<<24&4278190080|n[t+0]<<16&16711680|n[t+1]<<8&65280|255&n[t+2]},setPixel:function(e,t){var n=4*e,r=be.imageData.data
r[n+0]=(16711680&t)>>>16,r[n+1]=(65280&t)>>>8,r[n+2]=255&t,r[n+3]=(4278190080&t)>>>24},toArray:function(){for(var e=[],t=be.imageData.width*be.imageData.height,n=be.imageData.data,r=0,i=0;r<t;r++,i+=4)e.push(n[i+3]<<24&4278190080|n[i+0]<<16&16711680|n[i+1]<<8&65280|255&n[i+2])
return e},set:function(e){for(var t=0,n=e.length;t<n;t++)this.setPixel(t,e[t])}},be.loadPixels=function(){be.imageData=we.$ensureContext().getImageData(0,0,be.width,be.height)},be.updatePixels=function(){be.imageData&&we.$ensureContext().putImageData(be.imageData,0,0)},be.hint=function(e){var t=we.$ensureContext()
e===c.DISABLE_DEPTH_TEST?(t.disable(t.DEPTH_TEST),t.depthMask(!1),t.clear(t.DEPTH_BUFFER_BIT)):e===c.ENABLE_DEPTH_TEST?(t.enable(t.DEPTH_TEST),t.depthMask(!0)):e===c.ENABLE_OPENGL_2X_SMOOTH||e===c.ENABLE_OPENGL_4X_SMOOTH?vt=!0:e===c.DISABLE_OPENGL_2X_SMOOTH&&(vt=!1)}
var br=function(e,t,n,r){var i
if(e instanceof yr||e.__isPImage){if(i=e,!i.loaded)throw"Error using image in background(): PImage not loaded."
if(i.width!==be.width||i.height!==be.height)throw"Background image must be the same dimensions as the canvas."}else i=be.color(e,t,n,r)
Nt=i}
Jn.prototype.background=function(e,n,r,i){e!==t&&br(e,n,r,i),Nt instanceof yr||Nt.__isPImage?(N(),Ae.setTransform(1,0,0,1,0,0),be.image(Nt,0,0),F()):(N(),Ae.setTransform(1,0,0,1,0,0),be.alpha(Nt)!==kt&&Ae.clearRect(0,0,be.width,be.height),Ae.fillStyle=be.color.toString(Nt),Ae.fillRect(0,0,be.width,be.height),ut=!0,F())},er.prototype.background=function(e,t,n,r){arguments.length>0&&br(e,t,n,r)
var i=be.color.toGLArray(Nt)
Ae.clearColor(i[0],i[1],i[2],i[3]),Ae.clear(Ae.COLOR_BUFFER_BIT|Ae.DEPTH_BUFFER_BIT)},Jn.prototype.image=function(e,t,n,r,i){if(t=Math.round(t),n=Math.round(n),e.width>0){var s=(r||e.width,i||e.height,Wn(t||0,n||0,r||e.width,i||e.height,arguments.length<4))
if(!!e.sourceImg&&null===Ht){var o=e.sourceImg
e.__isDirty&&e.updatePixels(),Ae.drawImage(o,0,0,o.width,o.height,s.x,s.y,s.w,s.h)}else{var a=e.toImageData()
null!==Ht&&(Ht(a),e.__isDirty=!0),Ae.drawImage(X(a).canvas,0,0,e.width,e.height,s.x,s.y,s.w,s.h)}}},er.prototype.image=function(e,t,n,r,i){e.width>0&&(t=Math.round(t),n=Math.round(n),r=r||e.width,i=i||e.height,be.beginShape(be.QUADS),be.texture(e),be.vertex(t,n,0,0,0),be.vertex(t,n+i,0,0,i),be.vertex(t+r,n+i,0,r,i),be.vertex(t+r,n,0,r,0),be.endShape())},be.tint=function(e,t,n,r){var i=be.color(e,t,n,r),s=be.red(i)/Bt,o=be.green(i)/$t,a=be.blue(i)/Gt,l=be.alpha(i)/kt
Ht=function(e){for(var t=e.data,n=4*e.width*e.height,r=0;r<n;)t[r++]*=s,t[r++]*=o,t[r++]*=a,t[r++]*=l},Xt=function(e){for(var t=0;t<e.length;)e[t++]=s,e[t++]=o,e[t++]=a,e[t++]=l}},be.noTint=function(){Ht=null,Xt=null},be.copy=function(e,n,r,i,s,o,a,l,h){h===t&&(h=l,l=a,a=o,o=s,s=i,i=r,r=n,n=e,e=be),be.blend(e,n,r,i,s,o,a,l,h,c.REPLACE)},be.blend=function(e,n,r,i,s,o,a,l,h,u,c){if(e.isRemote)throw"Image is loaded remotely. Cannot blend image."
u===t&&(u=h,h=l,l=a,a=o,o=s,s=i,i=r,r=n,n=e,e=be)
var f=n+i,p=r+s,m=o+l,g=a+h,d=c||be
c!==t&&u!==t||be.loadPixels(),e.loadPixels(),e===be&&be.intersect(n,r,f,p,o,a,m,g)?be.blit_resize(be.get(n,r,f-n,p-r),0,0,f-n-1,p-r-1,d.imageData.data,d.width,d.height,o,a,m,g,u):be.blit_resize(e,n,r,f,p,d.imageData.data,d.width,d.height,o,a,m,g,u),c===t&&be.updatePixels()}
var Ar=function(e){var t,n=be.floor(3.5*e)
if(n=n<1?1:n<248?n:248,be.shared.blurRadius!==n){be.shared.blurRadius=n,be.shared.blurKernelSize=1+(be.shared.blurRadius<<1),be.shared.blurKernel=new g(be.shared.blurKernelSize)
var r=be.shared.blurKernel,i=be.shared.blurKernelSize
be.shared.blurRadius
for(t=0;t<i;t++)r[t]=0
var s=(n-1)*(n-1)
for(t=1;t<n;t++)r[n+t]=r[n-t]=s
r[n]=n*n}},xr=function(e,t){var n,r,i,s,o,a,l,h,u,c,f,p,m,d,v,y=t.pixels.getLength(),b=new g(y),A=new g(y),x=new g(y),w=new g(y),E=0
Ar(e)
var S=t.height,P=t.width,C=be.shared.blurKernelSize,M=be.shared.blurRadius,T=be.shared.blurKernel,_=t.imageData.data
for(m=0;m<S;m++){for(p=0;p<P;p++){if(s=i=r=o=n=0,(l=p-M)<0)f=-l,l=0
else{if(l>=P)break
f=0}for(d=f;d<C&&!(l>=P);d++)v=4*(l+E),a=T[d],o+=a*_[v+3],r+=a*_[v],i+=a*_[v+1],s+=a*_[v+2],n+=a,l++
h=E+p,w[h]=o/n,b[h]=r/n,A[h]=i/n,x[h]=s/n}E+=P}for(E=0,u=-M,c=u*P,m=0;m<S;m++){for(p=0;p<P;p++){if(s=i=r=o=n=0,u<0)f=h=-u,l=p
else{if(u>=S)break
f=0,h=u,l=p+c}for(d=f;d<C&&!(h>=S);d++)a=T[d],o+=a*w[l],r+=a*b[l],i+=a*A[l],s+=a*x[l],n+=a,h++,l+=P
v=4*(p+E),_[v]=r/n,_[v+1]=i/n,_[v+2]=s/n,_[v+3]=o/n}E+=P,c+=P,u++}},wr=function(e,t){var n,r,i,s,o,a,l,h,u,c,f,p,m,g,v,y,b,A=0,x=t.pixels.getLength(),w=new d(x)
if(e)for(;A<x;)for(n=A,r=A+t.width;A<r;)i=s=t.pixels.getPixel(A),l=A-1,a=A+1,h=A-t.width,u=A+t.width,l<n&&(l=A),a>=r&&(a=A),h<0&&(h=0),u>=x&&(u=A),p=t.pixels.getPixel(h),f=t.pixels.getPixel(l),m=t.pixels.getPixel(u),c=t.pixels.getPixel(a),o=77*(i>>16&255)+151*(i>>8&255)+28*(255&i),v=77*(f>>16&255)+151*(f>>8&255)+28*(255&f),g=77*(c>>16&255)+151*(c>>8&255)+28*(255&c),y=77*(p>>16&255)+151*(p>>8&255)+28*(255&p),b=77*(m>>16&255)+151*(m>>8&255)+28*(255&m),v<o&&(s=f,o=v),g<o&&(s=c,o=g),y<o&&(s=p,o=y),b<o&&(s=m,o=b),w[A++]=s
else for(;A<x;)for(n=A,r=A+t.width;A<r;)i=s=t.pixels.getPixel(A),l=A-1,a=A+1,h=A-t.width,u=A+t.width,l<n&&(l=A),a>=r&&(a=A),h<0&&(h=0),u>=x&&(u=A),p=t.pixels.getPixel(h),f=t.pixels.getPixel(l),m=t.pixels.getPixel(u),c=t.pixels.getPixel(a),o=77*(i>>16&255)+151*(i>>8&255)+28*(255&i),v=77*(f>>16&255)+151*(f>>8&255)+28*(255&f),g=77*(c>>16&255)+151*(c>>8&255)+28*(255&c),y=77*(p>>16&255)+151*(p>>8&255)+28*(255&p),b=77*(m>>16&255)+151*(m>>8&255)+28*(255&m),v>o&&(s=f,o=v),g>o&&(s=c,o=g),y>o&&(s=p,o=y),b>o&&(s=m,o=b),w[A++]=s
t.pixels.set(w)}
be.filter=function(e,n,r){var i,s,o,a
if(3===arguments.length?(r.loadPixels(),i=r):(be.loadPixels(),i=be),n===t&&(n=null),i.isRemote)throw"Image is loaded remotely. Cannot filter image."
var l=i.pixels.getLength()
switch(e){case c.BLUR:xr(n||1,i)
break
case c.GRAY:if(i.format===c.ALPHA){for(a=0;a<l;a++)s=255-i.pixels.getPixel(a),i.pixels.setPixel(a,4278190080|s<<16|s<<8|s)
i.format=c.RGB}else for(a=0;a<l;a++)s=i.pixels.getPixel(a),o=77*(s>>16&255)+151*(s>>8&255)+28*(255&s)>>8,i.pixels.setPixel(a,s&c.ALPHA_MASK|o<<16|o<<8|o)
break
case c.INVERT:for(a=0;a<l;a++)i.pixels.setPixel(a,16777215^i.pixels.getPixel(a))
break
case c.POSTERIZE:if(null===n)throw"Use filter(POSTERIZE, int levels) instead of filter(POSTERIZE)"
var h=be.floor(n)
if(h<2||h>255)throw"Levels must be between 2 and 255 for filter(POSTERIZE, levels)"
var u=h-1
for(a=0;a<l;a++){var f=i.pixels.getPixel(a)>>16&255,p=i.pixels.getPixel(a)>>8&255,m=255&i.pixels.getPixel(a)
f=255*(f*h>>8)/u,p=255*(p*h>>8)/u,m=255*(m*h>>8)/u,i.pixels.setPixel(a,4278190080&i.pixels.getPixel(a)|f<<16|p<<8|m)}break
case c.OPAQUE:for(a=0;a<l;a++)i.pixels.setPixel(a,4278190080|i.pixels.getPixel(a))
i.format=c.RGB
break
case c.THRESHOLD:if(null===n&&(n=.5),n<0||n>1)throw"Level must be between 0 and 1 for filter(THRESHOLD, level)"
var g=be.floor(255*n)
for(a=0;a<l;a++){var d=be.max((i.pixels.getPixel(a)&c.RED_MASK)>>16,be.max((i.pixels.getPixel(a)&c.GREEN_MASK)>>8,i.pixels.getPixel(a)&c.BLUE_MASK))
i.pixels.setPixel(a,i.pixels.getPixel(a)&c.ALPHA_MASK|(d<g?0:16777215))}break
case c.ERODE:wr(!0,i)
break
case c.DILATE:wr(!1,i)}i.updatePixels()},be.shared={fracU:0,ifU:0,fracV:0,ifV:0,u1:0,u2:0,v1:0,v2:0,sX:0,sY:0,iw:0,iw1:0,ih1:0,ul:0,ll:0,ur:0,lr:0,cUL:0,cLL:0,cUR:0,cLR:0,srcXOffset:0,srcYOffset:0,r:0,g:0,b:0,a:0,srcBuffer:null,blurRadius:0,blurKernelSize:0,blurKernel:null},be.intersect=function(e,t,n,r,i,s,o,a){var l=n-e+1,h=r-t+1,u=o-i+1,c=a-s+1
if(i<e)(u+=i-e)>l&&(u=l)
else{var f=l+e-i
u>f&&(u=f)}if(s<t)(c+=s-t)>h&&(c=h)
else{var p=h+t-s
c>p&&(c=p)}return!(u<=0||c<=0)}
var Er={}
if(Er[c.BLEND]=be.modes.blend,Er[c.ADD]=be.modes.add,Er[c.SUBTRACT]=be.modes.subtract,Er[c.LIGHTEST]=be.modes.lightest,Er[c.DARKEST]=be.modes.darkest,Er[c.REPLACE]=be.modes.replace,Er[c.DIFFERENCE]=be.modes.difference,Er[c.EXCLUSION]=be.modes.exclusion,Er[c.MULTIPLY]=be.modes.multiply,Er[c.SCREEN]=be.modes.screen,Er[c.OVERLAY]=be.modes.overlay,Er[c.HARD_LIGHT]=be.modes.hard_light,Er[c.SOFT_LIGHT]=be.modes.soft_light,Er[c.DODGE]=be.modes.dodge,Er[c.BURN]=be.modes.burn,be.blit_resize=function(e,t,n,r,i,s,o,a,l,h,u,f,p){var m,g
t<0&&(t=0),n<0&&(n=0),r>=e.width&&(r=e.width-1),i>=e.height&&(i=e.height-1)
var d=r-t,v=i-n,y=u-l,b=f-h
if(!(y<=0||b<=0||d<=0||v<=0||l>=o||h>=a||t>=e.width||n>=e.height)){var A=Math.floor(d/y*c.PRECISIONF),x=Math.floor(v/b*c.PRECISIONF),w=be.shared
w.srcXOffset=Math.floor(l<0?-l*A:t*c.PRECISIONF),w.srcYOffset=Math.floor(h<0?-h*x:n*c.PRECISIONF),l<0&&(y+=l,l=0),h<0&&(b+=h,h=0),y=Math.min(y,o-l),b=Math.min(b,a-h)
var E,S=h*o+l
w.srcBuffer=e.imageData.data,w.iw=e.width,w.iw1=e.width-1,w.ih1=e.height-1
var P,C,M,T,_,R,L=(be.filter_bilinear,be.filter_new_scanline,Er[p]),I=c.ALPHA_MASK,D=c.RED_MASK,O=c.GREEN_MASK,N=c.BLUE_MASK,F=c.PREC_MAXVAL,k=c.PRECISIONB,B=c.PREC_RED_SHIFT,$=c.PREC_ALPHA_SHIFT,G=w.srcBuffer,V=Math.min
for(g=0;g<b;g++){for(w.sX=w.srcXOffset,w.fracV=w.srcYOffset&F,w.ifV=F-w.fracV,w.v1=(w.srcYOffset>>k)*w.iw,w.v2=V(1+(w.srcYOffset>>k),w.ih1)*w.iw,m=0;m<y;m++)C=4*(S+m),E=s[C+3]<<24&I|s[C]<<16&D|s[C+1]<<8&O|s[C+2]&N,w.fracU=w.sX&F,w.ifU=F-w.fracU,w.ul=w.ifU*w.ifV>>k,w.ll=w.ifU*w.fracV>>k,w.ur=w.fracU*w.ifV>>k,w.lr=w.fracU*w.fracV>>k,w.u1=w.sX>>k,w.u2=V(w.u1+1,w.iw1),M=4*(w.v1+w.u1),T=4*(w.v1+w.u2),_=4*(w.v2+w.u1),R=4*(w.v2+w.u2),w.cUL=G[M+3]<<24&I|G[M]<<16&D|G[M+1]<<8&O|G[M+2]&N,w.cUR=G[T+3]<<24&I|G[T]<<16&D|G[T+1]<<8&O|G[T+2]&N,w.cLL=G[_+3]<<24&I|G[_]<<16&D|G[_+1]<<8&O|G[_+2]&N,w.cLR=G[R+3]<<24&I|G[R]<<16&D|G[R+1]<<8&O|G[R+2]&N,w.r=w.ul*((w.cUL&D)>>16)+w.ll*((w.cLL&D)>>16)+w.ur*((w.cUR&D)>>16)+w.lr*((w.cLR&D)>>16)<<B&D,w.g=w.ul*(w.cUL&O)+w.ll*(w.cLL&O)+w.ur*(w.cUR&O)+w.lr*(w.cLR&O)>>>k&O,w.b=w.ul*(w.cUL&N)+w.ll*(w.cLL&N)+w.ur*(w.cUR&N)+w.lr*(w.cLR&N)>>>k,w.a=w.ul*((w.cUL&I)>>>24)+w.ll*((w.cLL&I)>>>24)+w.ur*((w.cUR&I)>>>24)+w.lr*((w.cLR&I)>>>24)<<$&I,P=L(E,w.a|w.r|w.g|w.b),s[C]=(P&D)>>>16,s[C+1]=(P&O)>>>8,s[C+2]=P&N,s[C+3]=(P&I)>>>24,w.sX+=A
S+=o,w.srcYOffset+=x}}},be.loadFont=function(e,n){if(e===t)throw"font name required in loadFont."
if(-1===e.indexOf(".svg"))return n===t&&(n=ln.size),PFont.get(e,n)
var r=be.loadGlyphs(e)
return{name:e,css:"12px sans-serif",glyph:!0,units_per_em:r.units_per_em,horiz_adv_x:1/r.units_per_em*r.horiz_adv_x,ascent:r.ascent,descent:r.descent,width:function(t){for(var n=0,r=t.length,i=0;i<r;i++)try{n+=parseFloat(be.glyphLook(be.glyphTable[e],t[i]).horiz_adv_x)}catch(e){E.debug(e)}return n/be.glyphTable[e].units_per_em}}},be.createFont=function(e,t){return be.loadFont(e,t)},be.textFont=function(e,n){n!==t&&(e.glyph||(e=PFont.get(e.name,n)),rn=n),ln=e,nn=ln.name,sn=ln.ascent,on=ln.descent,an=ln.leading,we.$ensureContext().font=ln.css},be.textSize=function(e){ln=PFont.get(nn,e),rn=e,sn=ln.ascent,on=ln.descent,an=ln.leading,we.$ensureContext().font=ln.css},be.textAscent=function(){return sn},be.textDescent=function(){return on},be.textLeading=function(e){an=e},be.textAlign=function(e,t){Jt=e,en=t||c.BASELINE},Jn.prototype.textWidth=function(e){var t,n=ne(e).split(/\r?\n/g),r=0,i=n.length
for(Ae.font=ln.css,t=0;t<i;++t)r=Math.max(r,ln.measureTextWidth(n[t]))
return 0|r},er.prototype.textWidth=function(e){var n,r=ne(e).split(/\r?\n/g),i=0,s=r.length
Ee===t&&(Ee=h.createElement("canvas"))
var o=Ee.getContext("2d")
for(o.font=ln.css,n=0;n<s;++n)i=Math.max(i,o.measureText(r[n]).width)
return 0|i},be.glyphLook=function(e,t){try{switch(t){case"1":return e.one
case"2":return e.two
case"3":return e.three
case"4":return e.four
case"5":return e.five
case"6":return e.six
case"7":return e.seven
case"8":return e.eight
case"9":return e.nine
case"0":return e.zero
case" ":return e.space
case"$":return e.dollar
case"!":return e.exclam
case'"':return e.quotedbl
case"#":return e.numbersign
case"%":return e.percent
case"&":return e.ampersand
case"'":return e.quotesingle
case"(":return e.parenleft
case")":return e.parenright
case"*":return e.asterisk
case"+":return e.plus
case",":return e.comma
case"-":return e.hyphen
case".":return e.period
case"/":return e.slash
case"_":return e.underscore
case":":return e.colon
case";":return e.semicolon
case"<":return e.less
case"=":return e.equal
case">":return e.greater
case"?":return e.question
case"@":return e.at
case"[":return e.bracketleft
case"\\":return e.backslash
case"]":return e.bracketright
case"^":return e.asciicircum
case"`":return e.grave
case"{":return e.braceleft
case"|":return e.bar
case"}":return e.braceright
case"~":return e.asciitilde
default:return e[t]}}catch(e){E.debug(e)}},Jn.prototype.text$line=function(e,t,n,r,i){var s=0,o=0
if(ln.glyph){var a=be.glyphTable[nn]
N(),Ae.translate(t,n+rn),i!==c.RIGHT&&i!==c.CENTER||(s=a.width(e),o=i===c.RIGHT?-s:-s/2)
var l=a.units_per_em,h=1/l*rn
Ae.scale(h,h)
for(var u=0,f=e.length;u<f;u++)try{be.glyphLook(a,e[u]).draw()}catch(e){E.debug(e)}F()}else e&&"fillText"in Ae&&(ut&&(Ae.fillStyle=be.color.toString(ht),ut=!1),i!==c.RIGHT&&i!==c.CENTER||(s=ln.measureTextWidth(e),o=i===c.RIGHT?-s:-s/2),Ae.fillText(e,t+o,n))},er.prototype.text$line=function(e,n,r,i,s){Ee===t&&(Ee=h.createElement("canvas"))
var o=Ae
Ae=Ee.getContext("2d"),Ae.font=ln.css
var a=ln.measureTextWidth(e)
Ee.width=a,Ee.height=rn,Ae=Ee.getContext("2d"),Ae.font=ln.css,Ae.textBaseline="top",Jn.prototype.text$line(e,0,0,0,c.LEFT)
var l=Ee.width/Ee.height
Ae=o,Ae.bindTexture(Ae.TEXTURE_2D,je),Ae.texImage2D(Ae.TEXTURE_2D,0,Ae.RGBA,Ae.RGBA,Ae.UNSIGNED_BYTE,Ee),Ae.texParameteri(Ae.TEXTURE_2D,Ae.TEXTURE_MAG_FILTER,Ae.LINEAR),Ae.texParameteri(Ae.TEXTURE_2D,Ae.TEXTURE_MIN_FILTER,Ae.LINEAR),Ae.texParameteri(Ae.TEXTURE_2D,Ae.TEXTURE_WRAP_T,Ae.CLAMP_TO_EDGE),Ae.texParameteri(Ae.TEXTURE_2D,Ae.TEXTURE_WRAP_S,Ae.CLAMP_TO_EDGE)
var u=0
s===c.RIGHT?u=-a:s===c.CENTER&&(u=-a/2)
var f=new ir,p=.5*rn
f.translate(n+u-p/2,r-p,i),f.scale(-l*p,-p,p),f.translate(-1,-1,-1),f.transpose()
var m=new ir
m.scale(1,-1,1),m.apply(tt.array()),m.transpose(),Ae.useProgram(Le),_("aVertex2d",Le,"aVertex",3,Ye),_("aTextureCoord2d",Le,"aTextureCoord",2,Ke),M("uSampler2d",Le,"uSampler",[0]),M("uIsDrawingText2d",Le,"uIsDrawingText",!0),T("uModel2d",Le,"uModel",!1,f.array()),T("uView2d",Le,"uView",!1,m.array()),C("uColor2d",Le,"uColor",lt),Ae.bindBuffer(Ae.ELEMENT_ARRAY_BUFFER,We),Ae.drawElements(Ae.TRIANGLES,6,Ae.UNSIGNED_SHORT,0)},be.text=function(){tn!==c.SHAPE&&(3===arguments.length?re(ne(arguments[0]),arguments[1],arguments[2],0):4===arguments.length?re(ne(arguments[0]),arguments[1],arguments[2],arguments[3]):5===arguments.length?ie(ne(arguments[0]),arguments[1],arguments[2],arguments[3],arguments[4],0):6===arguments.length&&ie(ne(arguments[0]),arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]))},be.textMode=function(e){tn=e},be.loadGlyphs=function(e){var n,r,i,s,o,a,u,c,f,p,m,g,d=function(e,t){var n,r=0,i=[],s=new RegExp(e,"g")
for(n=i[r]=s.exec(t);n;)r++,n=i[r]=s.exec(t)
return i},v=function(e){var t=d("[A-Za-z][0-9\\- ]+|Z",e),l=function(){return N(),we.$ensureContext()},h=function(){z(),U(),F()}
g="return {draw:function(){var curContext=beforePathDraw();curContext.beginPath();",n=0,r=0,i=0,s=0,o=0,a=0,e=0,c=0,f="",p=t.length-1
for(var u=0;u<p;u++){var v=t[u][0],y=d("[0-9\\-]+",v)
switch(v[0]){case"M":n=parseFloat(y[0][0]),r=parseFloat(y[1][0]),g+="curContext.moveTo("+n+","+-r+");"
break
case"L":n=parseFloat(y[0][0]),r=parseFloat(y[1][0]),g+="curContext.lineTo("+n+","+-r+");"
break
case"H":n=parseFloat(y[0][0]),g+="curContext.lineTo("+n+","+-r+");"
break
case"V":r=parseFloat(y[0][0]),g+="curContext.lineTo("+n+","+-r+");"
break
case"T":o=parseFloat(y[0][0]),a=parseFloat(y[1][0]),"Q"===f||"T"===f?(e=Math.sqrt(Math.pow(n-i,2)+Math.pow(s-r,2)),c=Math.PI+Math.atan2(i-n,s-r),i=n+Math.sin(c)*e,s=r+Math.cos(c)*e):(i=n,s=r),g+="curContext.quadraticCurveTo("+i+","+-s+","+o+","+-a+");",n=o,r=a
break
case"Q":i=parseFloat(y[0][0]),s=parseFloat(y[1][0]),o=parseFloat(y[2][0]),a=parseFloat(y[3][0]),g+="curContext.quadraticCurveTo("+i+","+-s+","+o+","+-a+");",n=o,r=a
break
case"Z":g+="curContext.closePath();"}f=v[0]}return g+="afterPathDraw();",g+="curContext.translate("+m+",0);",g+="}}",new Function("beforePathDraw","afterPathDraw",g)(l,h)},y=function(n){var r=n.getElementsByTagName("font")
be.glyphTable[e].horiz_adv_x=r[0].getAttribute("horiz-adv-x")
var i=n.getElementsByTagName("font-face")[0]
be.glyphTable[e].units_per_em=parseFloat(i.getAttribute("units-per-em")),be.glyphTable[e].ascent=parseFloat(i.getAttribute("ascent")),be.glyphTable[e].descent=parseFloat(i.getAttribute("descent"))
for(var s=n.getElementsByTagName("glyph"),o=s.length,a=0;a<o;a++){var l=s[a].getAttribute("unicode"),h=s[a].getAttribute("glyph-name")
m=s[a].getAttribute("horiz-adv-x"),null===m&&(m=be.glyphTable[e].horiz_adv_x),u=s[a].getAttribute("d"),u!==t&&(g=v(u),be.glyphTable[e][h]={name:h,unicode:l,horiz_adv_x:m,draw:g.draw})}}
return be.glyphTable[e]={},function(){var t
try{t=h.implementation.createDocument("","",null)}catch(e){return void E.debug(e.message)}try{t.async=!1,t.load(e),y(t.getElementsByTagName("svg")[0])}catch(t){E.debug(t)
try{var n=new l.XMLHttpRequest
n.open("GET",e,!1),n.send(null),y(n.responseXML.documentElement)}catch(e){E.debug(t)}}}(),be.glyphTable[e]},be.param=function(e){var t="data-processing-"+e
if(de.hasAttribute(t))return de.getAttribute(t)
for(var n=0,r=de.childNodes.length;n<r;++n){var i=de.childNodes.item(n)
if(1===i.nodeType&&"param"===i.tagName.toLowerCase()&&i.getAttribute("name")===e)return i.getAttribute("value")}return xe.params.hasOwnProperty(e)?xe.params[e]:null},tr.prototype.translate=oe("translate"),tr.prototype.transform=oe("transform"),tr.prototype.scale=oe("scale"),tr.prototype.pushMatrix=oe("pushMatrix"),tr.prototype.popMatrix=oe("popMatrix"),tr.prototype.resetMatrix=oe("resetMatrix"),tr.prototype.applyMatrix=oe("applyMatrix"),tr.prototype.rotate=oe("rotate"),tr.prototype.rotateZ=oe("rotateZ"),tr.prototype.shearX=oe("shearX"),tr.prototype.shearY=oe("shearY"),tr.prototype.redraw=oe("redraw"),tr.prototype.toImageData=oe("toImageData"),tr.prototype.ambientLight=oe("ambientLight"),tr.prototype.directionalLight=oe("directionalLight"),tr.prototype.lightFalloff=oe("lightFalloff"),tr.prototype.lightSpecular=oe("lightSpecular"),tr.prototype.pointLight=oe("pointLight"),tr.prototype.noLights=oe("noLights"),tr.prototype.spotLight=oe("spotLight"),tr.prototype.beginCamera=oe("beginCamera"),tr.prototype.endCamera=oe("endCamera"),tr.prototype.frustum=oe("frustum"),tr.prototype.box=oe("box"),tr.prototype.sphere=oe("sphere"),tr.prototype.ambient=oe("ambient"),tr.prototype.emissive=oe("emissive"),tr.prototype.shininess=oe("shininess"),tr.prototype.specular=oe("specular"),tr.prototype.fill=oe("fill"),tr.prototype.stroke=oe("stroke"),tr.prototype.strokeWeight=oe("strokeWeight"),tr.prototype.smooth=oe("smooth"),tr.prototype.noSmooth=oe("noSmooth"),tr.prototype.point=oe("point"),tr.prototype.vertex=oe("vertex"),tr.prototype.endShape=oe("endShape"),tr.prototype.bezierVertex=oe("bezierVertex"),tr.prototype.curveVertex=oe("curveVertex"),tr.prototype.curve=oe("curve"),tr.prototype.line=oe("line"),tr.prototype.bezier=oe("bezier"),tr.prototype.rect=oe("rect"),tr.prototype.ellipse=oe("ellipse"),tr.prototype.background=oe("background"),tr.prototype.image=oe("image"),tr.prototype.textWidth=oe("textWidth"),tr.prototype.text$line=oe("text$line"),tr.prototype.$ensureContext=oe("$ensureContext"),tr.prototype.$newPMatrix=oe("$newPMatrix"),tr.prototype.size=function(e,t,n){se(n===c.WEBGL?"3D":"2D"),be.size(e,t,n)},tr.prototype.$init=u,Jn.prototype.$init=function(){be.size(be.width,be.height),Ae.lineCap="round",be.noSmooth(),be.disableContextMenu()},er.prototype.$init=function(){be.use3DContext=!0,be.disableContextMenu()},Qn.prototype.$ensureContext=function(){return Ae},de.getAttribute("tabindex")||de.setAttribute("tabindex",0),ve)xe=new E.Sketch,se(),be.size=function(e,t,n){se(n&&n===c.WEBGL?"3D":"2D"),be.size(e,t,n)}
else{xe=n instanceof E.Sketch?n:"function"==typeof n?new E.Sketch(n):n?E.compile(n):new E.Sketch(function(){}),be.externals.sketch=xe,se(),de.onfocus=function(){be.focused=!0},de.onblur=function(){be.focused=!1,xe.options.globalKeyEvents||ce()},xe.options.pauseOnBlur&&(b(l,"focus",function(){yt&&be.loop()}),b(l,"blur",function(){yt&&dt&&(be.noLoop(),yt=!0),ce()}))
var Sr=xe.options.globalKeyEvents?l:de
b(Sr,"keydown",pe),b(Sr,"keypress",me),b(Sr,"keyup",ge)
for(var Pr in E.lib)E.lib.hasOwnProperty(Pr)&&(E.lib[Pr].hasOwnProperty("attach")?E.lib[Pr].attach(be):E.lib[Pr]instanceof Function&&E.lib[Pr].call(this))
var Cr=function(e){if(xe.imageCache.pending||PFont.preloading.pending(100))l.setTimeout(function(){Cr(e)},100)
else{if(l.opera){var t,n,i=xe.imageCache.operaCache
for(t in i)i.hasOwnProperty(t)&&(n=i[t],null!==n&&h.body.removeChild(n),delete i[t])}xe.attach(e,r),xe.onLoad(e),e.setup&&(e.setup(),e.resetMatrix(),xe.onSetup()),q(),e.draw&&(yt?e.loop():e.redraw())}}
x(this),Cr(be)}}
return E.debug=function(){return"console"in l?function(e){l.console.log("Processing.js: "+e)}:u}(),E.prototype=r,E.instances=b,E.getInstanceById=function(e){return b[A[e]]},function(e){for(var t,n,r="open() createOutput() createInput() BufferedReader selectFolder() dataPath() createWriter() selectOutput() beginRecord() saveStream() endRecord() selectInput() saveBytes() createReader() beginRaw() endRaw() PrintWriter delay()".split(" "),i=r.length;i--;)t=r[i],n=t.replace("()",""),e[n]=function(e){return function(){throw"Processing.js does not support "+e+"."}}(t)}(r),E}},{}],28:[function(e,t,n){var r={virtEquals:e("./Helpers/virtEquals"),virtHashCode:e("./Helpers/virtHashCode"),ObjectIterator:e("./Helpers/ObjectIterator"),PConstants:e("./Helpers/PConstants"),ArrayList:e("./Objects/ArrayList"),HashMap:e("./Objects/HashMap"),PVector:e("./Objects/PVector"),PFont:e("./Objects/PFont"),Char:e("./Objects/Char"),XMLAttribute:e("./Objects/XMLAttribute"),XMLElement:e("./Objects/XMLElement"),PMatrix2D:e("./Objects/PMatrix2D"),PMatrix3D:e("./Objects/PMatrix3D"),PShape:e("./Objects/PShape"),colors:e("./Objects/webcolors"),PShapeSVG:e("./Objects/PShapeSVG"),CommonFunctions:e("./P5Functions/commonFunctions"),defaultScope:e("./Helpers/defaultScope"),Processing:e("./Processing"),setupParser:e("./Parser/Parser"),finalize:e("./Helpers/finalizeProcessing")}
r.extend={withMath:e("./P5Functions/Math.js"),withProxyFunctions:e("./P5Functions/JavaProxyFunctions")(r.virtHashCode,r.virtEquals),withTouch:e("./P5Functions/touchmouse"),withCommonFunctions:r.CommonFunctions.withCommonFunctions},t.exports=function(t,n){var i=function(){},s=r.virtEquals,o=r.virtHashCode,a=r.PConstants,l=r.CommonFunctions,h=r.ObjectIterator,u=r.Char,c=r.XMLAttribute(),f=r.ArrayList({virtHashCode:o,virtEquals:s}),p=r.HashMap({virtHashCode:o,virtEquals:s}),m=r.PVector({PConstants:a}),g=r.PFont({Browser:t,noop:i}),d=r.XMLElement({Browser:t,XMLAttribute:c}),v=r.PMatrix2D({p:l}),y=r.PMatrix3D({p:l}),b=r.PShape({PConstants:a,PMatrix2D:v,PMatrix3D:y}),A=r.PShapeSVG({CommonFunctions:l,PConstants:a,PShape:b,XMLElement:d,colors:r.colors}),x=r.defaultScope({ArrayList:f,HashMap:p,PVector:m,PFont:g,PShapeSVG:A,ObjectIterator:h,PConstants:a,Char:u,XMLElement:d,XML:d}),w=r.Processing({defaultScope:x,Browser:t,extend:r.extend,noop:i})
return w=r.setupParser(w,{Browser:t,aFunctions:n,defaultScope:x}),w=r.finalize(w,{version:e("../package.json").version,isDomPresent:t.isDomPresent,window:t.window,document:t.document,noop:i})}},{"../package.json":2,"./Helpers/ObjectIterator":3,"./Helpers/PConstants":4,"./Helpers/defaultScope":6,"./Helpers/finalizeProcessing":7,"./Helpers/virtEquals":8,"./Helpers/virtHashCode":9,"./Objects/ArrayList":10,"./Objects/Char":11,"./Objects/HashMap":12,"./Objects/PFont":13,"./Objects/PMatrix2D":14,"./Objects/PMatrix3D":15,"./Objects/PShape":16,"./Objects/PShapeSVG":17,"./Objects/PVector":18,"./Objects/XMLAttribute":19,"./Objects/XMLElement":20,"./Objects/webcolors":21,"./P5Functions/JavaProxyFunctions":22,"./P5Functions/Math.js":23,"./P5Functions/commonFunctions":24,"./P5Functions/touchmouse":25,"./Parser/Parser":26,"./Processing":27}]},{},[1])
