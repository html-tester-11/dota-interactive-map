(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.InteractiveMap = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
!function(e,r){if("object"==typeof exports&&"object"==typeof module)module.exports=r();else if("function"==typeof define&&define.amd)define([],r);else{var t=r();for(var n in t)("object"==typeof exports?exports:e)[n]=t[n]}}(this,function(){return function(e){function r(n){if(t[n])return t[n].exports;var o=t[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}var t={};return r.m=e,r.c=t,r.p="",r(0)}([function(e,r,t){e.exports=t(1)},function(e,r,t){"use strict";function n(){var e="undefined"==typeof JSON?{}:JSON;o.setupJSON(e)}var o=t(2),i=t(3);n();var a=window._rollbarConfig,s=a&&a.globalAlias||"Rollbar",u=window[s]&&"undefined"!=typeof window[s].shimId;!u&&a?o.wrapper.init(a):(window.Rollbar=o.wrapper,window.RollbarNotifier=i.Notifier),e.exports=o.wrapper},function(e,r,t){"use strict";function n(e,r,t){!t[4]&&window._rollbarWrappedError&&(t[4]=window._rollbarWrappedError,window._rollbarWrappedError=null),e.uncaughtError.apply(e,t),r&&r.apply(window,t)}function o(e,r){if(r.hasOwnProperty&&r.hasOwnProperty("addEventListener")){var t=r.addEventListener;r.addEventListener=function(r,n,o){t.call(this,r,e.wrap(n),o)};var n=r.removeEventListener;r.removeEventListener=function(e,r,t){n.call(this,e,r&&r._wrapped||r,t)}}}var i=t(3),a=t(8),s=i.Notifier;window._rollbarWrappedError=null;var u={};u.init=function(e,r){var t=new s(r);if(t.configure(e),e.captureUncaught){var i;r&&a.isType(r._rollbarOldOnError,"function")?i=r._rollbarOldOnError:window.onerror&&!window.onerror.belongsToShim&&(i=window.onerror),window.onerror=function(){var e=Array.prototype.slice.call(arguments,0);n(t,i,e)};var u,c,l=["EventTarget","Window","Node","ApplicationCache","AudioTrackList","ChannelMergerNode","CryptoOperation","EventSource","FileReader","HTMLUnknownElement","IDBDatabase","IDBRequest","IDBTransaction","KeyOperation","MediaController","MessagePort","ModalWindow","Notification","SVGElementInstance","Screen","TextTrack","TextTrackCue","TextTrackList","WebSocket","WebSocketWorker","Worker","XMLHttpRequest","XMLHttpRequestEventTarget","XMLHttpRequestUpload"];for(u=0;u<l.length;++u)c=l[u],window[c]&&window[c].prototype&&o(t,window[c].prototype)}return e.captureUnhandledRejections&&(r&&a.isType(r._unhandledRejectionHandler,"function")&&window.removeEventListener("unhandledrejection",r._unhandledRejectionHandler),t._unhandledRejectionHandler=function(e){var r=e.reason,n=e.promise,o=e.detail;!r&&o&&(r=o.reason,n=o.promise),t.unhandledRejection(r,n)},window.addEventListener("unhandledrejection",t._unhandledRejectionHandler)),window.Rollbar=t,s.processPayloads(),t},e.exports={wrapper:u,setupJSON:i.setupJSON}},function(e,r,t){"use strict";function n(e){E=e,w.setupJSON(e)}function o(e,r){return function(){var t=r||this;try{return e.apply(t,arguments)}catch(n){console.error("[Rollbar]:",n)}}}function i(){h||(h=setTimeout(f,1e3))}function a(){return _}function s(e){_=_||this;var r="https://"+s.DEFAULT_ENDPOINT;this.options={enabled:!0,endpoint:r,environment:"production",scrubFields:g([],s.DEFAULT_SCRUB_FIELDS),checkIgnore:null,logLevel:s.DEFAULT_LOG_LEVEL,reportLevel:s.DEFAULT_REPORT_LEVEL,uncaughtErrorLevel:s.DEFAULT_UNCAUGHT_ERROR_LEVEL,payload:{}},this.lastError=null,this.plugins={},this.parentNotifier=e,e&&(e.hasOwnProperty("shimId")?e.notifier=this:this.configure(e.options))}function u(e){window._rollbarPayloadQueue.push(e),i()}function c(e){return o(function(){var r=this._getLogArgs(arguments);return this._log(e||r.level||this.options.logLevel||s.DEFAULT_LOG_LEVEL,r.message,r.err,r.custom,r.callback)})}function l(e,r){e||(e=r?E.stringify(r):"");var t={body:e};return r&&(t.extra=g(!0,{},r)),{message:t}}function p(e,r,t){var n=m.guessErrorClass(r.message),o=r.name||n[0],i=n[1],a={exception:{"class":o,message:i}};if(e&&(a.exception.description=e||"uncaught exception"),r.stack){var s,u,c,p,f,d,h,w;for(a.frames=[],h=0;h<r.stack.length;++h)s=r.stack[h],u={filename:s.url?v.sanitizeUrl(s.url):"(unknown)",lineno:s.line||null,method:s.func&&"?"!==s.func?s.func:"[anonymous]",colno:s.column},c=p=f=null,d=s.context?s.context.length:0,d&&(w=Math.floor(d/2),p=s.context.slice(0,w),c=s.context[w],f=s.context.slice(w)),c&&(u.code=c),(p||f)&&(u.context={},p&&p.length&&(u.context.pre=p),f&&f.length&&(u.context.post=f)),s.args&&(u.args=s.args),a.frames.push(u);return a.frames.reverse(),t&&(a.extra=g(!0,{},t)),{trace:a}}return l(o+": "+i,t)}function f(){var e;try{for(;e=window._rollbarPayloadQueue.shift();)d(e)}finally{h=void 0}}function d(e){var r=e.endpointUrl,t=e.accessToken,n=e.payload,o=e.callback||function(){},i=(new Date).getTime();i-L>=6e4&&(L=i,R=0);var a=window._globalRollbarOptions.maxItems,c=window._globalRollbarOptions.itemsPerMinute,l=function(){return!n.ignoreRateLimit&&a>=1&&T>=a},p=function(){return!n.ignoreRateLimit&&c>=1&&R>=c};return l()?void o(new Error(a+" max items reached")):p()?void o(new Error(c+" items per minute reached")):(T++,R++,l()&&_._log(_.options.uncaughtErrorLevel,"maxItems has been hit. Ignoring errors for the remainder of the current page load.",null,{maxItems:a},null,!1,!0),n.ignoreRateLimit&&delete n.ignoreRateLimit,void y.post(r,t,n,function(r,t){return r?(r instanceof b&&(e.callback=function(){},setTimeout(function(){u(e)},s.RETRY_DELAY)),o(r)):o(null,t)}))}var h,g=t(4),m=t(5),v=t(8),w=t(10),y=w.XHR,b=w.ConnectionError,E=null;s.NOTIFIER_VERSION="1.9.2",s.DEFAULT_ENDPOINT="api.rollbar.com/api/1/",s.DEFAULT_SCRUB_FIELDS=["pw","pass","passwd","password","secret","confirm_password","confirmPassword","password_confirmation","passwordConfirmation","access_token","accessToken","secret_key","secretKey","secretToken"],s.DEFAULT_LOG_LEVEL="debug",s.DEFAULT_REPORT_LEVEL="debug",s.DEFAULT_UNCAUGHT_ERROR_LEVEL="error",s.DEFAULT_ITEMS_PER_MIN=60,s.DEFAULT_MAX_ITEMS=0,s.LEVELS={debug:0,info:1,warning:2,error:3,critical:4},s.RETRY_DELAY=1e4,window._rollbarPayloadQueue=window._rollbarPayloadQueue||[],window._globalRollbarOptions={startTime:(new Date).getTime(),maxItems:s.DEFAULT_MAX_ITEMS,itemsPerMinute:s.DEFAULT_ITEMS_PER_MIN};var _,x=s.prototype;x._getLogArgs=function(e){for(var r,t,n,i,a,u,c=this.options.logLevel||s.DEFAULT_LOG_LEVEL,l=[],p=0;p<e.length;++p)u=e[p],a=v.typeName(u),"string"===a?r?l.push(u):r=u:"function"===a?i=o(u,this):"date"===a?l.push(u):"error"===a||u instanceof Error||"undefined"!=typeof DOMException&&u instanceof DOMException?t?l.push(u):t=u:"object"!==a&&"array"!==a||(n?l.push(u):n=u);return l.length&&(n=n||{},n.extraArgs=l),{level:c,message:r,err:t,custom:n,callback:i}},x._route=function(e){var r=this.options.endpoint,t=/\/$/.test(r),n=/^\//.test(e);return t&&n?e=e.substring(1):t||n||(e="/"+e),r+e},x._processShimQueue=function(e){for(var r,t,n,o,i,a,u,c={};t=e.shift();)r=t.shim,n=t.method,o=t.args,i=r.parentShim,u=c[r.shimId],u||(i?(a=c[i.shimId],u=new s(a)):u=this,c[r.shimId]=u),u[n]&&v.isType(u[n],"function")&&u[n].apply(u,o)},x._buildPayload=function(e,r,t,n,o){var i=this.options.accessToken,a=this.options.environment,u=g(!0,{},this.options.payload),c=v.uuid4();if(void 0===s.LEVELS[r])throw new Error("Invalid level");if(!t&&!n&&!o)throw new Error("No message, stack info or custom data");var l={environment:a,endpoint:this.options.endpoint,uuid:c,level:r,platform:"browser",framework:"browser-js",language:"javascript",body:this._buildBody(t,n,o),request:{url:window.location.href,query_string:window.location.search,user_ip:"$remote_ip"},client:{runtime_ms:e.getTime()-window._globalRollbarOptions.startTime,timestamp:Math.round(e.getTime()/1e3),javascript:{browser:window.navigator.userAgent,language:window.navigator.language,cookie_enabled:window.navigator.cookieEnabled,screen:{width:window.screen.width,height:window.screen.height},plugins:this._getBrowserPlugins()}},server:{},notifier:{name:"rollbar-browser-js",version:s.NOTIFIER_VERSION}};u.body&&delete u.body;var p={access_token:i,data:g(!0,l,u)};return this._scrub(p.data),p},x._buildBody=function(e,r,t){var n;return n=r?p(e,r,t):l(e,t)},x._getBrowserPlugins=function(){if(!this._browserPlugins){var e,r,t=window.navigator.plugins||[],n=t.length,o=[];for(r=0;r<n;++r)e=t[r],o.push({name:e.name,description:e.description});this._browserPlugins=o}return this._browserPlugins},x._scrub=function(e){function r(e,r,t,n,o,i){return r+v.redact(i)}function t(e){var t;if(v.isType(e,"string"))for(t=0;t<s.length;++t)e=e.replace(s[t],r);return e}function n(e,r){var t;for(t=0;t<a.length;++t)if(a[t].test(e)){r=v.redact(r);break}return r}function o(e,r){var o=n(e,r);return o===r?t(o):o}var i=this.options.scrubFields,a=this._getScrubFieldRegexs(i),s=this._getScrubQueryParamRegexs(i);return v.traverse(e,o),e},x._getScrubFieldRegexs=function(e){for(var r,t=[],n=0;n<e.length;++n)r="\\[?(%5[bB])?"+e[n]+"\\[?(%5[bB])?\\]?(%5[dD])?",t.push(new RegExp(r,"i"));return t},x._getScrubQueryParamRegexs=function(e){for(var r,t=[],n=0;n<e.length;++n)r="\\[?(%5[bB])?"+e[n]+"\\[?(%5[bB])?\\]?(%5[dD])?",t.push(new RegExp("("+r+"=)([^&\\n]+)","igm"));return t},x._urlIsWhitelisted=function(e){var r,t,n,o,i,a,s,u,c,l;try{if(r=this.options.hostWhiteList,t=e&&e.data&&e.data.body&&e.data.body.trace,!r||0===r.length)return!0;if(!t)return!0;for(s=r.length,i=t.frames.length,c=0;c<i;c++){if(n=t.frames[c],o=n.filename,!v.isType(o,"string"))return!0;for(l=0;l<s;l++)if(a=r[l],u=new RegExp(a),u.test(o))return!0}}catch(p){return this.configure({hostWhiteList:null}),console.error("[Rollbar]: Error while reading your configuration's hostWhiteList option. Removing custom hostWhiteList.",p),!0}return!1},x._messageIsIgnored=function(e){var r,t,n,o,i,a,s,u,c;try{if(i=!1,n=this.options.ignoredMessages,!n||0===n.length)return!1;if(s=e&&e.data&&e.data.body,u=s&&s.trace&&s.trace.exception&&s.trace.exception.message,c=s&&s.message&&s.message.body,r=u||c,!r)return!1;for(o=n.length,t=0;t<o&&(a=new RegExp(n[t],"gi"),!(i=a.test(r)));t++);}catch(l){this.configure({ignoredMessages:null}),console.error("[Rollbar]: Error while reading your configuration's ignoredMessages option. Removing custom ignoredMessages.")}return i},x._enqueuePayload=function(e,r,t,n){var o={callback:n,accessToken:this.options.accessToken,endpointUrl:this._route("item/"),payload:e},i=function(){if(n){var e="This item was not sent to Rollbar because it was ignored. This can happen if a custom checkIgnore() function was used or if the item's level was less than the notifier' reportLevel. See https://rollbar.com/docs/notifier/rollbar.js/configuration for more details.";n(null,{err:0,result:{id:null,uuid:null,message:e}})}};if(this._internalCheckIgnore(r,t,e))return void i();try{if(v.isType(this.options.checkIgnore,"function")&&this.options.checkIgnore(r,t,e))return void i()}catch(a){this.configure({checkIgnore:null}),console.error("[Rollbar]: Error while calling custom checkIgnore() function. Removing custom checkIgnore().",a)}if(this._urlIsWhitelisted(e)&&!this._messageIsIgnored(e)){if(this.options.verbose){if(e.data&&e.data.body&&e.data.body.trace){var s=e.data.body.trace,c=s.exception.message;console.error("[Rollbar]: ",c)}console.info("[Rollbar]: ",o)}v.isType(this.options.logFunction,"function")&&this.options.logFunction(o);try{v.isType(this.options.transform,"function")&&this.options.transform(e)}catch(a){this.configure({transform:null}),console.error("[Rollbar]: Error while calling custom transform() function. Removing custom transform().",a)}this.options.enabled&&u(o)}},x._internalCheckIgnore=function(e,r,t){var n=r[0],o=s.LEVELS[n]||0,i=s.LEVELS[this.options.reportLevel]||0;if(o<i)return!0;var a=this.options?this.options.plugins:{};if(a&&a.jquery&&a.jquery.ignoreAjaxErrors)try{return!!t.data.body.message.extra.isAjax}catch(u){return!1}return!1},x._log=function(e,r,t,n,o,i,a){var s=null;if(t)try{if(s=t._savedStackTrace?t._savedStackTrace:m.parse(t),t===this.lastError)return;this.lastError=t}catch(u){console.error("[Rollbar]: Error while parsing the error object.",u),r=t.message||t.description||r||String(t),t=null}var c=this._buildPayload(new Date,e,r,s,n);a&&(c.ignoreRateLimit=!0),this._enqueuePayload(c,!!i,[e,r,t,n],o)},x.log=c(),x.debug=c("debug"),x.info=c("info"),x.warn=c("warning"),x.warning=c("warning"),x.error=c("error"),x.critical=c("critical"),x.uncaughtError=o(function(e,r,t,n,o,i){if(i=i||null,o&&v.isType(o,"error"))return void this._log(this.options.uncaughtErrorLevel,e,o,i,null,!0);if(r&&v.isType(r,"error"))return void this._log(this.options.uncaughtErrorLevel,e,r,i,null,!0);var a={url:r||"",line:t};a.func=m.guessFunctionName(a.url,a.line),a.context=m.gatherContext(a.url,a.line);var s={mode:"onerror",message:o?String(o):e||"uncaught exception",url:document.location.href,stack:[a],useragent:navigator.userAgent},u=this._buildPayload(new Date,this.options.uncaughtErrorLevel,e,s,i);this._enqueuePayload(u,!0,[this.options.uncaughtErrorLevel,e,r,t,n,o])}),x.unhandledRejection=o(function(e,r){if(null==e)return void _._log(_.options.uncaughtErrorLevel,"unhandled rejection was null or undefined!",null,{},null,!1,!1);var t=e.message||(e?String(e):"unhandled rejection"),n=e._rollbarContext||r._rollbarContext||null;if(e&&v.isType(e,"error"))return void this._log(this.options.uncaughtErrorLevel,t,e,n,null,!0);var o={url:"",line:0};o.func=m.guessFunctionName(o.url,o.line),o.context=m.gatherContext(o.url,o.line);var i={mode:"unhandledrejection",message:t,url:document.location.href,stack:[o],useragent:navigator.userAgent},a=this._buildPayload(new Date,this.options.uncaughtErrorLevel,t,i,n);this._enqueuePayload(a,!0,[this.options.uncaughtErrorLevel,t,o.url,o.line,0,e,r])}),x.global=o(function(e){e=e||{};var r={startTime:e.startTime,maxItems:e.maxItems,itemsPerMinute:e.itemsPerMinute};g(!0,window._globalRollbarOptions,r),void 0!==e.maxItems&&(T=0),void 0!==e.itemsPerMinute&&(R=0)}),x.configure=o(function(e,r){var t=g(!0,{},e);g(!r,this.options,t),this.global(t)}),x.scope=o(function(e){var r=new s(this);return g(!0,r.options.payload,e),r}),x.wrap=function(e,r){try{var t;if(t=v.isType(r,"function")?r:function(){return r||{}},!v.isType(e,"function"))return e;if(e._isWrap)return e;if(!e._wrapped){e._wrapped=function(){try{return e.apply(this,arguments)}catch(r){throw"string"==typeof r&&(r=new String(r)),r.stack||(r._savedStackTrace=m.parse(r)),r._rollbarContext=t()||{},r._rollbarContext._wrappedSource=e.toString(),window._rollbarWrappedError=r,r}},e._wrapped._isWrap=!0;for(var n in e)e.hasOwnProperty(n)&&(e._wrapped[n]=e[n])}return e._wrapped}catch(o){return e}},x.loadFull=function(){console.error("[Rollbar]: Unexpected Rollbar.loadFull() called on a Notifier instance")},s.processPayloads=function(e){return e?void f():void i()};var L=(new Date).getTime(),T=0,R=0;e.exports={Notifier:s,setupJSON:n,topLevelNotifier:a}},function(e,r){"use strict";var t=Object.prototype.hasOwnProperty,n=Object.prototype.toString,o=function(e){return"function"==typeof Array.isArray?Array.isArray(e):"[object Array]"===n.call(e)},i=function(e){if(!e||"[object Object]"!==n.call(e))return!1;var r=t.call(e,"constructor"),o=e.constructor&&e.constructor.prototype&&t.call(e.constructor.prototype,"isPrototypeOf");if(e.constructor&&!r&&!o)return!1;var i;for(i in e);return"undefined"==typeof i||t.call(e,i)};e.exports=function a(){var e,r,t,n,s,u,c=arguments[0],l=1,p=arguments.length,f=!1;for("boolean"==typeof c?(f=c,c=arguments[1]||{},l=2):("object"!=typeof c&&"function"!=typeof c||null==c)&&(c={});l<p;++l)if(e=arguments[l],null!=e)for(r in e)t=c[r],n=e[r],c!==n&&(f&&n&&(i(n)||(s=o(n)))?(s?(s=!1,u=t&&o(t)?t:[]):u=t&&i(t)?t:{},c[r]=a(f,u,n)):"undefined"!=typeof n&&(c[r]=n));return c}},function(e,r,t){"use strict";function n(){return l}function o(){return null}function i(e){var r={};return r._stackFrame=e,r.url=e.fileName,r.line=e.lineNumber,r.func=e.functionName,r.column=e.columnNumber,r.args=e.args,r.context=o(r.url,r.line),r}function a(e){function r(){var r=[];try{r=c.parse(e)}catch(t){r=[]}for(var n=[],o=0;o<r.length;o++)n.push(new i(r[o]));return n}return{stack:r(),message:e.message,name:e.name}}function s(e){return new a(e)}function u(e){if(!e)return["Unknown error. There was no error message to display.",""];var r=e.match(p),t="(unknown)";return r&&(t=r[r.length-1],e=e.replace((r[r.length-2]||"")+t+":",""),e=e.replace(/(^[\s]+|[\s]+$)/g,"")),[t,e]}var c=t(6),l="?",p=new RegExp("^(([a-zA-Z0-9-_$ ]*): *)?(Uncaught )?([a-zA-Z0-9-_$ ]*): ");e.exports={guessFunctionName:n,guessErrorClass:u,gatherContext:o,parse:s,Stack:a,Frame:i}},function(e,r,t){var n,o,i;!function(a,s){"use strict";o=[t(7)],n=s,i="function"==typeof n?n.apply(r,o):n,!(void 0!==i&&(e.exports=i))}(this,function(e){"use strict";function r(e,r,t){if("function"==typeof Array.prototype.map)return e.map(r,t);for(var n=new Array(e.length),o=0;o<e.length;o++)n[o]=r.call(t,e[o]);return n}function t(e,r,t){if("function"==typeof Array.prototype.filter)return e.filter(r,t);for(var n=[],o=0;o<e.length;o++)r.call(t,e[o])&&n.push(e[o]);return n}var n=/(^|@)\S+\:\d+/,o=/^\s*at .*(\S+\:\d+|\(native\))/m,i=/^(eval@)?(\[native code\])?$/;return{parse:function(e){if("undefined"!=typeof e.stacktrace||"undefined"!=typeof e["opera#sourceloc"])return this.parseOpera(e);if(e.stack&&e.stack.match(o))return this.parseV8OrIE(e);if(e.stack)return this.parseFFOrSafari(e);throw new Error("Cannot parse given Error object")},extractLocation:function(e){if(e.indexOf(":")===-1)return[e];var r=e.replace(/[\(\)\s]/g,"").split(":"),t=r.pop(),n=r[r.length-1];if(!isNaN(parseFloat(n))&&isFinite(n)){var o=r.pop();return[r.join(":"),o,t]}return[r.join(":"),t,void 0]},parseV8OrIE:function(n){var i=t(n.stack.split("\n"),function(e){return!!e.match(o)},this);return r(i,function(r){r.indexOf("(eval ")>-1&&(r=r.replace(/eval code/g,"eval").replace(/(\(eval at [^\()]*)|(\)\,.*$)/g,""));var t=r.replace(/^\s+/,"").replace(/\(eval code/g,"(").split(/\s+/).slice(1),n=this.extractLocation(t.pop()),o=t.join(" ")||void 0,i="eval"===n[0]?void 0:n[0];return new e(o,(void 0),i,n[1],n[2],r)},this)},parseFFOrSafari:function(n){var o=t(n.stack.split("\n"),function(e){return!e.match(i)},this);return r(o,function(r){if(r.indexOf(" > eval")>-1&&(r=r.replace(/ line (\d+)(?: > eval line \d+)* > eval\:\d+\:\d+/g,":$1")),r.indexOf("@")===-1&&r.indexOf(":")===-1)return new e(r);var t=r.split("@"),n=this.extractLocation(t.pop()),o=t.shift()||void 0;return new e(o,(void 0),n[0],n[1],n[2],r)},this)},parseOpera:function(e){return!e.stacktrace||e.message.indexOf("\n")>-1&&e.message.split("\n").length>e.stacktrace.split("\n").length?this.parseOpera9(e):e.stack?this.parseOpera11(e):this.parseOpera10(e)},parseOpera9:function(r){for(var t=/Line (\d+).*script (?:in )?(\S+)/i,n=r.message.split("\n"),o=[],i=2,a=n.length;i<a;i+=2){var s=t.exec(n[i]);s&&o.push(new e((void 0),(void 0),s[2],s[1],(void 0),n[i]))}return o},parseOpera10:function(r){for(var t=/Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i,n=r.stacktrace.split("\n"),o=[],i=0,a=n.length;i<a;i+=2){var s=t.exec(n[i]);s&&o.push(new e(s[3]||void 0,(void 0),s[2],s[1],(void 0),n[i]))}return o},parseOpera11:function(o){var i=t(o.stack.split("\n"),function(e){return!!e.match(n)&&!e.match(/^Error created at/)},this);return r(i,function(r){var t,n=r.split("@"),o=this.extractLocation(n.pop()),i=n.shift()||"",a=i.replace(/<anonymous function(: (\w+))?>/,"$2").replace(/\([^\)]*\)/g,"")||void 0;i.match(/\(([^\)]*)\)/)&&(t=i.replace(/^[^\(]+\(([^\)]*)\)$/,"$1"));var s=void 0===t||"[arguments not available]"===t?void 0:t.split(",");return new e(a,s,o[0],o[1],o[2],r)},this)}}})},function(e,r,t){var n,o,i;!function(t,a){"use strict";o=[],n=a,i="function"==typeof n?n.apply(r,o):n,!(void 0!==i&&(e.exports=i))}(this,function(){"use strict";function e(e){return!isNaN(parseFloat(e))&&isFinite(e)}function r(e,r,t,n,o,i){void 0!==e&&this.setFunctionName(e),void 0!==r&&this.setArgs(r),void 0!==t&&this.setFileName(t),void 0!==n&&this.setLineNumber(n),void 0!==o&&this.setColumnNumber(o),void 0!==i&&this.setSource(i)}return r.prototype={getFunctionName:function(){return this.functionName},setFunctionName:function(e){this.functionName=String(e)},getArgs:function(){return this.args},setArgs:function(e){if("[object Array]"!==Object.prototype.toString.call(e))throw new TypeError("Args must be an Array");this.args=e},getFileName:function(){return this.fileName},setFileName:function(e){this.fileName=String(e)},getLineNumber:function(){return this.lineNumber},setLineNumber:function(r){if(!e(r))throw new TypeError("Line Number must be a Number");this.lineNumber=Number(r)},getColumnNumber:function(){return this.columnNumber},setColumnNumber:function(r){if(!e(r))throw new TypeError("Column Number must be a Number");this.columnNumber=Number(r)},getSource:function(){return this.source},setSource:function(e){this.source=String(e)},toString:function(){var r=this.getFunctionName()||"{anonymous}",t="("+(this.getArgs()||[]).join(",")+")",n=this.getFileName()?"@"+this.getFileName():"",o=e(this.getLineNumber())?":"+this.getLineNumber():"",i=e(this.getColumnNumber())?":"+this.getColumnNumber():"";return r+t+n+o+i}},r})},function(e,r,t){"use strict";function n(e){return{}.toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase()}function o(e,r){return n(e)===r}function i(e){if(!o(e,"string"))throw new Error("received invalid input");for(var r=l,t=r.parser[r.strictMode?"strict":"loose"].exec(e),n={},i=14;i--;)n[r.key[i]]=t[i]||"";return n[r.q.name]={},n[r.key[12]].replace(r.q.parser,function(e,t,o){t&&(n[r.q.name][t]=o)}),n}function a(e){var r=i(e);return""===r.anchor&&(r.source=r.source.replace("#","")),e=r.source.replace("?"+r.query,"")}function s(e,r){var t,n,i,a=o(e,"object"),u=o(e,"array"),c=[];if(a)for(t in e)e.hasOwnProperty(t)&&c.push(t);else if(u)for(i=0;i<e.length;++i)c.push(i);for(i=0;i<c.length;++i)t=c[i],n=e[t],a=o(n,"object"),u=o(n,"array"),a||u?e[t]=s(n,r):e[t]=r(t,n);return e}function u(e){return e=String(e),new Array(e.length+1).join("*")}function c(){var e=(new Date).getTime(),r="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(r){var t=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"===r?t:7&t|8).toString(16)});return r}t(9);var l={strictMode:!1,key:["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],q:{name:"queryKey",parser:/(?:^|&)([^&=]*)=?([^&]*)/g},parser:{strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/}},p={isType:o,parseUri:i,parseUriOptions:l,redact:u,sanitizeUrl:a,traverse:s,typeName:n,uuid4:c};e.exports=p},function(e,r){!function(e){"use strict";e.console=e.console||{};for(var r,t,n=e.console,o={},i=function(){},a="memory".split(","),s="assert,clear,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profiles,profileEnd,show,table,time,timeEnd,timeline,timelineEnd,timeStamp,trace,warn".split(",");r=a.pop();)n[r]||(n[r]=o);for(;t=s.pop();)n[t]||(n[t]=i)}("undefined"==typeof window?this:window)},function(e,r,t){"use strict";function n(e){a=e}function o(e){this.name="Connection Error",this.message=e,this.stack=(new Error).stack}var i=t(8),a=null;o.prototype=Object.create(Error.prototype),o.prototype.constructor=o;var s={XMLHttpFactories:[function(){return new XMLHttpRequest},function(){return new ActiveXObject("Msxml2.XMLHTTP")},function(){return new ActiveXObject("Msxml3.XMLHTTP")},function(){return new ActiveXObject("Microsoft.XMLHTTP")}],createXMLHTTPObject:function(){var e,r=!1,t=s.XMLHttpFactories,n=t.length;for(e=0;e<n;e++)try{r=t[e]();break}catch(o){}return r},post:function(e,r,t,n){if(!i.isType(t,"object"))throw new Error("Expected an object to POST");t=a.stringify(t),n=n||function(){};var u=s.createXMLHTTPObject();if(u)try{try{var c=function(){try{if(c&&4===u.readyState){c=void 0;var e=a.parse(u.responseText);200===u.status?n(null,e):i.isType(u.status,"number")&&u.status>=400&&u.status<600?(403==u.status&&console.error("[Rollbar]:"+e.message),n(new Error(String(u.status)))):n(new o("XHR response had no status code (likely connection failure)"))}}catch(r){var t;t=r&&r.stack?r:new Error(r),n(t)}};u.open("POST",e,!0),u.setRequestHeader&&(u.setRequestHeader("Content-Type","application/json"),u.setRequestHeader("X-Rollbar-Access-Token",r)),u.onreadystatechange=c,u.send(t)}catch(l){if("undefined"!=typeof XDomainRequest){"http:"===window.location.href.substring(0,5)&&"https"===e.substring(0,5)&&(e="http"+e.substring(5));var p=function(){n(new o("Request timed out"))},f=function(){n(new Error("Error during request"))},d=function(){n(null,a.parse(u.responseText))};u=new XDomainRequest,u.onprogress=function(){},u.ontimeout=p,u.onerror=f,u.onload=d,u.open("POST",e,!0),u.send(t)}}}catch(h){n(h)}}};e.exports={XHR:s,setupJSON:n,ConnectionError:o}}])});
},{}],2:[function(require,module,exports){
var proj = require('./projections');
var ol = require('openlayers');
var mapConstants = require('./mapConstants');
var styles = require('./styleDefinitions');
var loadGeoJSON = require('./dataLoader').loadGeoJSON;
var loadJSON = require('./dataLoader').loadJSON;
var loadLayerGroupFromData = require('./dataLoader').loadLayerGroupFromData;
var getJSON = require('./util/getJSON');
var worldToLatLon = require('./conversionFunctions').worldToLatLon;
var getScaledRadius = require('./conversionFunctions').getScaledRadius;
var QueryString = require('./util/queryString');

function InteractiveMap(map_tile_path) {
    var self = this;
    this.map_tile_path = map_tile_path;
    this.MODE = 'navigation';
    this.layerDefs = require('./layerDefinitions');
    this.baseLayerDefs = require('./baseLayerDefinitions');
    this.view = new ol.View({
        zoom: 0,
        center: mapConstants.imgCenter,
        projection: proj.pixel,
        resolutions: mapConstants.resolutions,
        extent: [0, 0, mapConstants.map_w, mapConstants.map_h]
    });
    this.data = {};
    this.layerIndex = {};
    this.version = '700';
    this.visionRadius = mapConstants.visionRadius.observer;
    this.movementSpeed = mapConstants.defaultMovementSpeed;
    this.isNight = false;
    this.isDarkness = false;
    this.layerFilters = {
        marker: function(layer) {
            var layerDef = layer.get('layerDef');
            return layer.getVisible() && layerDef && (layerDef.group == 'structure' || layerDef.group == 'object');
        }
    };
    this.map = new ol.Map({
        controls: ol.control.defaults({ zoom: false, attribution: false, rotate: false }),
        interactions: ol.interaction.defaults({altShiftDragRotate:false, pinchRotate:false}),
        target: 'map',
        view: this.view
    });
    
    this.highlightSource = new ol.source.Vector({
        defaultDataProjection : 'pixel'
    });
    this.highlightLayer =  new ol.layer.Vector({
        source: this.highlightSource,
        style: styles.highlight
    });

    this.selectSource = new ol.source.Vector({
        defaultDataProjection : 'pixel'
    });
    this.selectLayer =  new ol.layer.Vector({
        source: this.selectSource,
        style: styles.select
    });

    this.wardRangeSource = new ol.source.Vector({
        defaultDataProjection : 'pixel'
    });
    this.wardRangeLayer =  new ol.layer.Vector({
        source: this.wardRangeSource
    });

    this.rangeSources = {
        dayVision: new ol.source.Vector({
            defaultDataProjection : 'pixel'
        }),
        nightVision: new ol.source.Vector({
            defaultDataProjection : 'pixel'
        }),
        trueSight: new ol.source.Vector({
            defaultDataProjection : 'pixel'
        }),
        attackRange: new ol.source.Vector({
            defaultDataProjection : 'pixel'
        })
    }
    this.rangeLayers = {
        dayVision: new ol.layer.Vector({
            source: this.rangeSources.dayVision,
            style: styles.dayVision
        }),
        nightVision: new ol.layer.Vector({
            source: this.rangeSources.nightVision,
            style: styles.nightVision
        }),
        trueSight: new ol.layer.Vector({
            source: this.rangeSources.trueSight,
            style: styles.trueSight
        }),
        attackRange: new ol.layer.Vector({
            source: this.rangeSources.attackRange,
            style: styles.attackRange
        })
    }

    // setup base layers
    this.baseLayers = this.baseLayerDefs.map(function (layerDef) {
        var layer = new ol.layer.Tile({
            title: layerDef.name,
            type: 'base',
            extent: proj.pixel.getExtent(),
            source: new ol.source.TileImage({
                tileGrid: new ol.tilegrid.TileGrid({
                    origin: [0, mapConstants.map_h],
                    resolutions: mapConstants.resolutions
                }),
                projection: proj.pixel,
                url: self.map_tile_path + layerDef.group + '/' + layerDef.id + '/{z}/tile_{x}_{y}.jpg'
            }),
            visible: !!layerDef.visible
        });
        layer.set('layerId', layerDef.group + '-' + layerDef.id, true);
        layer.set('layerDef', layerDef, true);
        return layer;
    });
    
    this.baseLayerGroup = new ol.layer.Group({
        title: 'Base Layers',
        layers: new ol.Collection(this.baseLayers)
    });
}

InteractiveMap.prototype.getMapData = function (version) {
    return this.data[version || this.version];
}

InteractiveMap.prototype.getData = function (version) {
    return this.data[version || this.version].data;
}

InteractiveMap.prototype.getOverlayData = function (version) {
    return this.data[version || this.version].data.data;
}

InteractiveMap.prototype.getStatData = function (version) {
    return this.data[version || this.version].data.stats;
}

InteractiveMap.prototype.getMapLayerIndex = function (version) {
    version = version || this.version;
    if (!this.layerIndex[version]) this.layerIndex[version] = {};
    return this.layerIndex[version];
}

InteractiveMap.prototype.getMapDataPath = function (version) {
    version = version || this.version;
    return 'data/' + version + '/mapdata2.json';
}

InteractiveMap.prototype.setMapLayers = function (version, callback) {
    var self = this;
    this.getDataJSON(version, function (data) {
        var currentLayerGroup = self.map.getLayerGroup();
        currentLayerGroup.setVisible(false);
        self.map.setLayerGroup(data.layerGroup);
        self.map.getLayerGroup().setVisible(true);
        if (callback) callback();
    });
}

InteractiveMap.prototype.getDataJSON = function (version, callback) {
    var self = this;
    if (this.data[version]) {
        callback(self.data[version]);
    }
    else {
        getJSON(self.getMapDataPath(version), function (data) {
            self.data[version] = {
                data: data,
                layerGroup: new ol.layer.Group({
                    title: version + ' Layers',
                    layers: new ol.Collection([
                        self.baseLayerGroup,
                        loadLayerGroupFromData(self, data, version, self.getMapLayerIndex(version), self.layerDefs)
                    ])
                })
            };                
            callback(self.data[version]);
        });
    }
}

InteractiveMap.prototype.panTo = function (coordinate, duration) {
    if (duration == null) duration = 1000;
    this.view.animate({
      center: coordinate,
      duration: 1000
    });
}

InteractiveMap.prototype.checkAndHighlightWard = function (pixel) {
    var self = this;
    var feature = this.map.forEachFeatureAtPixel(pixel, function (feature, layer) {
        return feature;
    }, {
        layerFilter: self.wardControl.layerFilter
    });
    this.highlightWard(feature);
    return feature;
}

InteractiveMap.prototype.highlightWard = function (feature) {
    if (feature !== this.highlightedWard) {
        if (this.highlightedWard) {
            this.highlightedWard.setStyle(styles[this.highlightedWard.get('wardType')].normal);
        }
        if (feature) {
            feature.setStyle(styles[feature.get('wardType')][this.MODE == 'navigate' ? 'highlight' : 'remove']);
        }
        this.highlightedWard = feature;
    }
}

InteractiveMap.prototype.unhighlightWard = function () {
    if (this.highlightedWard) {
        this.highlightedWard.setStyle(styles[this.highlightedWard.get('wardType')].normal);
    }
    this.highlightedWard = null;
}

InteractiveMap.prototype.highlight = function (feature) {
    if (feature !== this.highlightedFeature) {
        if (this.highlightedFeature) {
            this.highlightSource.removeFeature(this.highlightedFeature);
        }
        if (feature) {
            this.highlightSource.addFeature(feature);
        }
        this.highlightedFeature = feature;
    }
}

InteractiveMap.prototype.unhighlight = function () {
    if (this.highlightedFeature) {
        this.highlightSource.removeFeature(this.highlightedFeature);
    }
    this.highlightedFeature = null;
}

InteractiveMap.prototype.toggle = function (feature) {    
    if (feature) {
        if (feature.get("clicked")) {
            this.deselect(feature);
            return false;
        }
        else {
            this.select(feature);
            return true;
        }
    }
}

InteractiveMap.prototype.select = function (feature) {    
    if (feature && !feature.get("clicked")) {
        if (feature == this.highlightedFeature) {
            this.unhighlight();
        }
        this.selectSource.addFeature(feature);
        feature.set("clicked", true, true);
    }
}

InteractiveMap.prototype.deselectAll = function () {
    this.selectSource.getFeatures().forEach(function (feature) {
        feature.set("clicked", false, true);
    });
    this.selectSource.clear();
}
InteractiveMap.prototype.deselect = function (feature) {
    if (feature && feature.get("clicked")) {
        if (feature == this.highlightedFeature) {
            this.unhighlight();
        }
        
        this.selectSource.removeFeature(feature);
        feature.set("clicked", false, true);
    }
}

InteractiveMap.prototype.hasVisionRadius = function (feature) {
    return this.getFeatureVisionRadius(feature) != null;
}

InteractiveMap.prototype.getFeatureVisionRadius = function (feature, dotaProps, unitClass, rangeType) {
    dotaProps = dotaProps || feature.get('dotaProps');
    unitClass = unitClass || dotaProps.unitClass;
    var stats = this.getStatData();
    var radius;
    if (unitClass == 'observer') {
        radius = this.visionRadius || mapConstants.visionRadius[unitClass];
        if (this.isDarkness) {
            radius = Math.min(mapConstants.visionRadius.darkness, radius);
        }
    }
    else if (unitClass == 'sentry') {
        radius = mapConstants.visionRadius[unitClass];
    }
    else {
        if (rangeType && !stats[unitClass].hasOwnProperty(rangeType)) return null;
        
        switch (rangeType) {
            case 'dayVision':
            case 'nightVision':
                radius = stats[unitClass][rangeType];
                if (this.isDarkness) {
                    radius = Math.min(mapConstants.visionRadius.darkness, radius);
                }
            case 'trueSight':
            case 'attackRange':
                radius = stats[unitClass][rangeType];
            break;
            default:
                if (this.isNight) {
                    radius = stats[unitClass].nightVision;
                }
                else {
                    radius = stats[unitClass].dayVision;
                }
                if (this.isDarkness) {
                    radius = Math.min(mapConstants.visionRadius.darkness, radius);
                }
            break;
        }
    }
    return radius;
}

InteractiveMap.prototype.getRangeCircle = function (feature, coordinate, unitClass, rangeType, radius) {
    var dotaProps = feature.get('dotaProps');
    var radius = radius || this.getFeatureVisionRadius(feature, dotaProps, unitClass, rangeType);
    if (radius == null) return null;
    if (!coordinate) {
        coordinate = worldToLatLon([dotaProps.x, dotaProps.y]);
    }
    var circle = new ol.Feature(new ol.geom.Circle(coordinate, getScaledRadius(radius)));
    return circle;
}

module.exports = InteractiveMap;
},{"./baseLayerDefinitions":3,"./conversionFunctions":13,"./dataLoader":14,"./layerDefinitions":18,"./mapConstants":20,"./projections":21,"./styleDefinitions":23,"./util/getJSON":28,"./util/queryString":29,"openlayers":19}],3:[function(require,module,exports){
var layerDefinitions = [
    {
        id: 'default',
        name: 'Default',
        group: '700'
    },
    {
        id: 'journey',
        name: 'New Journey',
        group: '700'
    },
    {
        id: 'default',
        name: 'Default',
        group: '687'
    },
    {
        id: 'desert',
        name: 'Desert',
        group: '687'
    },
    {
        id: 'immortalgardens',
        name: 'Immortal Gardens',
        group: '687'
    }
];

module.exports = layerDefinitions;
},{}],4:[function(require,module,exports){
var ol = require('openlayers');
var mapConstants = require('./../mapConstants');
var styles = require('./../styleDefinitions');

function CreepControl(InteractiveMap) {
    this.InteractiveMap = InteractiveMap;
    this.postComposeListener = null;
    this.postComposeHandler = this.animateCreeps.bind(this);
    this.playbackSpeed = 1;
    this.paused = true;
    this.pauseTime = null;
    this.title = 'Lane Animation';
}

CreepControl.prototype.show = function (message) {
    this.setContent(message);
    this.info.classList.remove('slideUp');
    this.info.classList.add('slideDown');
}

CreepControl.prototype.setContent = function (html) {
    this.infoContent.innerHTML = html;
}

CreepControl.prototype.open = function () {
    this.info.classList.add('slideDown');
    this.info.classList.remove('slideUp');
}

CreepControl.prototype.close = function () {
    this.info.classList.add('slideUp');
    this.info.classList.remove('slideDown');
}

CreepControl.prototype.initialize = function (id) {
    var self = this;
    this.id = id;
    this.info = document.getElementById(id);
    this.infoContent = document.querySelector('#timer-time');
    this.playPauseBtn = document.querySelector('#timer-playPause');
    this.playPauseHandler = function (evt) {
        self.playPause.call(self, true);
    }
    this.playPauseBtn.addEventListener('click', this.playPauseHandler, false);
    
    this.stopBtn = document.querySelector('#timer-stop');
    this.stopHandler = function (evt) {
        self.stop.call(self, true);
    }
    this.stopBtn.addEventListener('click', this.stopHandler, false);
    
    this.fasterBtn = document.querySelector('#timer-faster');
    this.fasterHandler = function (evt) {
        self.faster.call(self, true);
    }
    this.fasterBtn.addEventListener('click', this.fasterHandler, false);
    
    this.slowerBtn = document.querySelector('#timer-slower');
    this.slowerHandler = function (evt) {
        self.slower.call(self, true);
    }
    this.slowerBtn.addEventListener('click', this.slowerHandler, false);
}

CreepControl.prototype.slower = function () {
    var oldVal = this.playbackSpeed;
    this.playbackSpeed = Math.max(1, this.playbackSpeed - 1);
    this.updatePlayback(oldVal, this.playbackSpeed);
}

CreepControl.prototype.faster = function () {
    var oldVal = this.playbackSpeed;
    this.playbackSpeed += 1;
    this.updatePlayback(oldVal, this.playbackSpeed);
}

CreepControl.prototype.updatePlayback = function (oldVal, newVal) {
    var features = this.InteractiveMap.getMapLayerIndex()['npc_dota_spawner'].getSource().getFeatures();
    var elapsedTime = this.currentTime - this.startTime;
    var adjustedElapsedTime = elapsedTime * oldVal / newVal;
    this.startTime = this.currentTime - adjustedElapsedTime;
    for (var i = 0; i < features.length; i++) {
        var feature = features[i];
        var waveTimes = feature.get('waveTimes');
        if (waveTimes) {
            var j = waveTimes.length;
            while (j--) {
                var elapsedTime = this.currentTime - waveTimes[j];
                var adjustedElapsedTime = elapsedTime * oldVal / newVal;
                waveTimes[j] = this.currentTime - adjustedElapsedTime;
            }
        }
    }
}

CreepControl.prototype.start = function () {
    if (!this.postComposeListener) {
        this.postComposeListener = this.InteractiveMap.map.on('postcompose', this.postComposeHandler);
    }
    if (this.paused) this.playPause();
    this.InteractiveMap.map.render();
}

CreepControl.prototype.stop = function () {
    ol.Observable.unByKey(this.postComposeListener);
    this.postComposeListener = null;
    var features = this.InteractiveMap.getMapLayerIndex()['npc_dota_spawner'].getSource().getFeatures();
    for (var i = 0; i < features.length; i++) {
        var feature = features[i];
        feature.set('waveTimes', null, true);
    }
    this.startTime = null;
    if (!this.paused) this.playPause();
    this.pauseTime = null;
    this.InteractiveMap.map.render();
    this.setContent(this.title);
}

CreepControl.prototype.playPause = function () {
    this.paused = !this.paused;
    if (this.paused) {
        this.playPauseBtn.classList.add('icon-play');
        this.playPauseBtn.classList.remove('icon-pause');
    }
    else {
        this.playPauseBtn.classList.add('icon-pause');
        this.playPauseBtn.classList.remove('icon-play');
        this.start();
    }
}

CreepControl.prototype.activate = function () {
    this.InteractiveMap.toggleLayerMenuOption('npc_dota_spawner', true);
    this.InteractiveMap.toggleLayerMenuOption('path_corner', true);
    this.show(this.title);
}

CreepControl.prototype.deactivate = function () {
    this.InteractiveMap.toggleLayerMenuOption('npc_dota_spawner', false);
    this.InteractiveMap.toggleLayerMenuOption('path_corner', false);
    this.stop();
    this.close();
}

function getDistance(speed, elapsedTime) {
    return speed * elapsedTime / 1000 * mapConstants.scale;
}

function getElapsedDistance(id, elapsedTime, playbackSpeed, bNoAdjust) {
    elapsedTime = elapsedTime * playbackSpeed;
    var base = mapConstants.creepBaseMovementSpeed;
    if (bNoAdjust) return getDistance(base, elapsedTime);
    switch (id) {
        case 'npc_dota_spawner_good_bot':
            if (elapsedTime < 10000) {
                return getDistance(base * 1.25, elapsedTime);
            }
            else {
                return getDistance(base * 1.25, 10000) + getDistance(base, elapsedTime - 10000);
            }
        break;
        case 'npc_dota_spawner_bad_top':
            if (elapsedTime < 2000) {
                return getDistance(base * 1.25, elapsedTime);
            }
            else {
                return getDistance(base * 1.25, 2000) + getDistance(base, elapsedTime - 2000);
            }
        break;
        case 'npc_dota_spawner_good_top':
            if (elapsedTime < 2000) {
                return getDistance(base * 0.75, elapsedTime);
            }
            else {
                return getDistance(base * 0.75, 2000) + getDistance(base, elapsedTime - 2000);
            }
        break;
        case 'npc_dota_spawner_bad_bot':
            if (elapsedTime < 22000) {
                return getDistance(base * 0.75, elapsedTime);
            }
            else {
                return getDistance(base * 0.75, 22000) + getDistance(base, elapsedTime - 22000);
            }
        break;
        default:
            return getDistance(base, elapsedTime);
        break;
    }
}

CreepControl.prototype.animateCreeps = function (event) {
    var vectorContext = event.vectorContext;
    var frameState = event.frameState;
    this.currentTime = frameState.time;
    var features = this.InteractiveMap.getMapLayerIndex()['npc_dota_spawner'].getSource().getFeatures();
    var pathLayer = this.InteractiveMap.getMapLayerIndex()['path_corner'];
    if (!this.startTime) this.startTime = this.currentTime;
    if (this.paused) {
        if (this.pauseTime == null) this.pauseTime = frameState.time;
        this.currentTime = this.pauseTime;
    }
    else {
        if (this.pauseTime != null) {
            for (var i = 0; i < features.length; i++) {
                var feature = features[i];
                var waveTimes = feature.get('waveTimes');
                if (waveTimes) {
                    var j = waveTimes.length;
                    while (j--) {
                        waveTimes[j] += (this.currentTime - this.pauseTime);
                    }
                }
            }
            this.startTime += (this.currentTime - this.pauseTime);
            this.pauseTime = null;
        }
    }
    for (var i = 0; i < features.length; i++) {
        var feature = features[i];
        var id = feature.getId();
        var pathFeature = pathLayer.getSource().getFeatureById(id);
        var waveTimes = feature.get('waveTimes');
        if (!waveTimes) {
            waveTimes = [this.currentTime];
            feature.set('waveTimes', waveTimes, true);
        }
        if (this.currentTime - waveTimes[waveTimes.length - 1] >= 30000 / this.playbackSpeed) {
            waveTimes.push(this.currentTime);
        }
        var j = waveTimes.length;
        while (j--) {                
            var path = feature.get('path');
            if (!path) {
                var path = pathFeature.getGeometry().clone();
                var coords = path.getCoordinates();
                coords[0] = feature.getGeometry().getCoordinates();
                path.setCoordinates(coords);
                feature.set('path', path, true);
            }
            var pathLength = path.getLength();
            var coords = path.getCoordinates();
            var elapsedTime = this.currentTime - waveTimes[j];
            var elapsedDistance = getElapsedDistance(id, elapsedTime, this.playbackSpeed);
            var elapsedFraction = Math.max(0, elapsedDistance / pathLength);
            if (elapsedFraction >= 1) {
                var endPoint = coords[coords.length - 1];
                waveTimes.splice(j, 1);
            }
            else {
                var endPoint = path.getCoordinateAt(elapsedFraction);
            }

            var point = new ol.geom.Circle(endPoint);
            vectorContext.setStyle(styles.creepColor(feature));
            vectorContext.drawCircle(point);
        }
    }
    var timeText = (((this.currentTime - this.startTime) % (60000 / this.playbackSpeed)) / 1000 * this.playbackSpeed).toFixed(1) + 's';
    if (this.playbackSpeed > 1) timeText += ', ' + this.playbackSpeed + 'x'
    this.setContent(timeText);
    frameState.animate = true;
}

module.exports = CreepControl;
},{"./../mapConstants":20,"./../styleDefinitions":23,"openlayers":19}],5:[function(require,module,exports){
var ol = require('openlayers');
var styles = require('./../styleDefinitions');

function CursorControl(InteractiveMap) {
    var self = this;
    this.InteractiveMap = InteractiveMap;
    this.source = new ol.source.Vector({
        defaultDataProjection : 'pixel'
    });
    this.layer =  new ol.layer.Vector({
        source: this.source,
        style: styles.cursor
    });
    this.layerFilter = function(layer) {
        return layer === self.layer;
    }
}


module.exports = CursorControl;
},{"./../styleDefinitions":23,"openlayers":19}],6:[function(require,module,exports){
var ol = require('openlayers');
var getPopupContent = require('./../getPopupContent');
var styles = require('./../styleDefinitions');
var mapConstants = require('./../mapConstants');
var worldToLatLon = require('./../conversionFunctions').worldToLatLon;
var createCirclePointCoords = require('./../util/createCirclePointCoords');

function InfoControl(InteractiveMap) {
    var self = this;
    this.InteractiveMap = InteractiveMap;
    //this.highlight = null;
    this.lastPointerMoveTime = Date.now();
    this.pointerMoveHandler = function (evt) {
        // When user was dragging map, then coordinates didn't change and there's
        // no need to continue
        if (evt.dragging) {
            return;
        }

        var pixel = self.InteractiveMap.map.getEventPixel(evt.originalEvent);
        
        // if mouse over a building feature, show info and highlight
        var feature = self.InteractiveMap.map.forEachFeatureAtPixel(pixel, function(feature) {
            return feature;
        }, {
            layerFilter: self.InteractiveMap.layerFilters.marker
        });
        if (feature) {
            if (!self.isActive()) {
                self.displayFeatureInfo(feature, false);
            }
            self.highlight(feature);
        }
        else {
            self.close(false);
    
            // if mouse over a ward feature, highlight
            var feature = self.InteractiveMap.checkAndHighlightWard(pixel);
            
            if (feature) {
                self.InteractiveMap.wardControl.showVisibilityInfo(feature.get('visionFeature'));
            }
            // no highlighted feature so unhighlight current feature
            else if (!self.isActive()) {
                self.unhighlight();
            }
        }
    }
    this.pointerMoveListener = null;
    
    this.clickHandler = function (evt) {
        self.unhighlight();
        var feature = self.InteractiveMap.map.forEachFeatureAtPixel(evt.pixel, function (feature, layer) {
            return feature;
        }, {
            layerFilter: self.InteractiveMap.layerFilters.marker
        });
        if (feature) {
            if (!feature.get("clicked")) {
                self.InteractiveMap.deselectAll();
                var dotaProps = feature.get('dotaProps');
                if (feature.get('dotaProps').id == "ent_dota_tree") {
                    self.InteractiveMap.treeControl.toggleTree(feature, dotaProps);
                }
                else {
                    self.displayFeatureInfo(feature, true);
                    self.select(feature);
                    self.InteractiveMap.panTo(evt.coordinate);
                }
            }
            else {
                self.InteractiveMap.deselectAll();
                self.close(true);
            }
        }
        else {
            // if clicked a ward feature, highlight
            var feature = self.InteractiveMap.checkAndHighlightWard(evt.pixel);
            
            if (feature) {
                var visionFeature = feature.get('visionFeature');
                if (visionFeature) {
                    self.InteractiveMap.wardControl.showVisibilityInfo(feature.get('visionFeature'), true);
                }
                else {
                    self.close(true);
                }
                self.InteractiveMap.panTo(evt.coordinate);
            }
            // no highlighted feature so unhighlight current feature
            else if (!self.isActive()) {
                self.unhighlight();            
                self.close(true);
            }
            self.InteractiveMap.deselectAll();
        }
    }
    this.clickListener = null;
}

InfoControl.prototype.activate = function () {
    if (!this.pointerMoveListener) {
        this.pointerMoveListener = this.InteractiveMap.map.on('pointermove', this.pointerMoveHandler);
    }
    if (!this.clickListener) {
        this.clickListener = this.InteractiveMap.map.on('click', this.clickHandler);
    }
}

InfoControl.prototype.deactivate = function () {
    this.InteractiveMap.unhighlightWard();
    ol.Observable.unByKey(this.pointerMoveListener);
    this.pointerMoveListener = null;
    ol.Observable.unByKey(this.clickListener);
    this.clickListener = null;
}

InfoControl.prototype.setContent = function (html) {
    this.infoContent.innerHTML = html;
}

InfoControl.prototype.isActive = function () {
    return this.info.classList.contains('active');
}

InfoControl.prototype.open = function (bClicked) {
    this.info.classList.add('slideUp');
    this.info.classList.remove('slideDown');
    if (bClicked) {
        this.info.classList.add('active');
    }
}

InfoControl.prototype.close = function (bOverrideActive) {
    if (!this.isActive() || bOverrideActive) {
        this.info.classList.add('slideDown');
        this.info.classList.remove('slideUp');
        this.info.classList.remove('active');
    }
}

InfoControl.prototype.initialize = function (id) {
    var self = this;
    this.id = id;
    this.info = document.getElementById(id);
    this.infoContent = document.querySelector('#' + id + ' .message-content');
    this.closeBtn = document.querySelector('#' + id + ' .btn-close');
    this.closeHandler = function (evt) {
        self.close.call(self, true);
    }
    this.closeBtn.addEventListener('click', this.closeHandler, false);
}

InfoControl.prototype.displayFeatureInfo = function (feature, bClicked) {
    this.setContent(getPopupContent(this.InteractiveMap.getMapData(), feature));
    this.open(bClicked);
};

InfoControl.prototype.unhighlight = function (feature) {
    var highlightedFeature = feature || this.InteractiveMap.highlightedFeature;
    if (highlightedFeature && !highlightedFeature.get("clicked")) {
        var dotaProps = highlightedFeature.get('dotaProps');
        if (dotaProps) {
            if (dotaProps.id == 'npc_dota_neutral_spawner') {
                var pullRange = highlightedFeature.get('pullRange');
                if (pullRange) {
                    this.InteractiveMap.getMapLayerIndex()['pullRange'].getSource().removeFeature(pullRange);
                    highlightedFeature.set("pullRange", null, true);
                }
                var guardRange = highlightedFeature.get('guardRange');
                if (guardRange) {
                    this.InteractiveMap.getMapLayerIndex()['pullRange'].getSource().removeFeature(guardRange);
                    highlightedFeature.set("guardRange", null, true);
                }
            }
        }
    }
    this.InteractiveMap.unhighlight();
}

InfoControl.prototype.highlight = function (feature) {
    this.unhighlight();
    var dotaProps = feature.get('dotaProps');
    if (dotaProps) {
        if (dotaProps.id == 'npc_dota_neutral_spawner') {
            if (!feature.get('pullRange')) {
                var circle = this.InteractiveMap.getRangeCircle(feature, null, null, null, 400);
                feature.set("guardRange", circle, true);
                this.InteractiveMap.getMapLayerIndex()['pullRange'].getSource().addFeature(circle);
                
                var center = worldToLatLon([dotaProps.x, dotaProps.y]);
                var pullTiming = mapConstants.pullRangeTiming[dotaProps.pullType];
                var pullMaxCoords = createCirclePointCoords(center[0], center[1], 400 + pullTiming * 350, 360);
                var pullMinCoords = createCirclePointCoords(center[0], center[1], 400 + pullTiming * 270, 360);
                var geom = new ol.geom.Polygon([pullMaxCoords]);
                geom.appendLinearRing(new ol.geom.LinearRing(pullMinCoords));
                var circle = new ol.Feature(geom);
                feature.set("pullRange", circle, true);
                this.InteractiveMap.getMapLayerIndex()['pullRange'].getSource().addFeature(circle);
            }
        }
    }
    this.InteractiveMap.highlight(feature);
}

InfoControl.prototype.select = function (feature) {    
    if (feature && !feature.get("clicked")) {
        if (feature == this.InteractiveMap.highlightedFeature) {
            this.unhighlight();
        }
        this.InteractiveMap.selectSource.addFeature(feature);
        feature.set("clicked", true, true);
    }
}

module.exports = InfoControl;
},{"./../conversionFunctions":13,"./../getPopupContent":16,"./../mapConstants":20,"./../styleDefinitions":23,"./../util/createCirclePointCoords":25,"openlayers":19}],7:[function(require,module,exports){
var ol = require('openlayers');
var styles = require('./../styleDefinitions');

function MeasureControl(InteractiveMap) {
    var self = this;
    this.InteractiveMap = InteractiveMap;
    this.map = InteractiveMap.map;
    this.info = InteractiveMap.infoControl;
    this.source = new ol.source.Vector({
        defaultDataProjection : 'pixel'
    });
    
    this.layer =  new ol.layer.Vector({
        source: this.source
    });

    /**
     * Currently drawn feature.
     * @type {ol.Feature}
     */
    var sketch;

    /**
     * The help tooltip element.
     * @type {Element}
     */
    var helpTooltipElement;

    /**
     * Overlay to show the help messages.
     * @type {ol.Overlay}
     */
    var helpTooltip;

    /**
     * The measure tooltip element.
     * @type {Element}
     */
    var measureTooltipElement;

    /**
     * Overlay to show the measurement.
     * @type {ol.Overlay}
     */
    var measureTooltip;
    
    /**
     * Message to show when the user is drawing a polygon.
     * @type {string}
     */
    var continuePolygonMsg = 'Click to continue drawing the polygon';
    
    /**
     * Message to show when the user is drawing a line.
     * @type {string}
     */
    var continueLineMsg = 'Click to continue drawing the line';
    
    /**
     * Handle pointer move.
     * @param {ol.MapBrowserEvent} evt The event.
     */
    var pointerMoveHandler = function(evt) {
        if (evt.dragging) {
            return;
        }
        /** @type {string} */
        var helpMsg = 'Click to start drawing';

        if (sketch) {
            var geom = (sketch.getGeometry());
            if (geom instanceof ol.geom.Polygon) {
                helpMsg = continuePolygonMsg;
            } else if (geom instanceof ol.geom.LineString) {
                helpMsg = continueLineMsg;
            }
        }

        helpTooltipElement.innerHTML = helpMsg;
        helpTooltip.setPosition(evt.coordinate);

        helpTooltipElement.classList.remove('hidden');
    };
    
    var pointerMoveListener;
    var mouseOutHandler = function() {
        helpTooltipElement.classList.add('hidden');
    };

    this.type = 'line';

    var draw; // global so we can remove it later


    /**
     * Format length output.
     * @param {ol.geom.LineString} line The line.
     * @return {string} The formatted length.
     */
    var formatLength = function(line) {
        var length = Math.round(line.getLength());
        var output;
        output = 'Distance: ' + length + ' ' + 'units<br>Travel Time: ' + (length / self.InteractiveMap.movementSpeed).toFixed(2) + 's at ' + self.InteractiveMap.movementSpeed + 'ms';
        return output;
    };
    
    var formatRadius = function(circle) {
        var length = Math.round(circle.getRadius());
        var output;
        output = 'Radius: ' + length + ' ' + 'units<br>Area: ' + (Math.PI * length * length).toFixed(2) + ' units<sup>2</sup>';
        return output;
    };


    /**
     * Format area output.
     * @param {ol.geom.Polygon} polygon The polygon.
     * @return {string} Formatted area.
     */
    var formatArea = function(polygon) {
        var area = polygon.getArea();
        var output;
        if (area > 10000) {
            output = (Math.round(area / 1000000 * 100) / 100) +
                ' ' + 'km<sup>2</sup>';
        } else {
            output = (Math.round(area * 100) / 100) +
                ' ' + 'm<sup>2</sup>';
        }
        return output;
    };
    var self = this;
    function addInteraction() {
        var type = (self.type == 'circle' ? 'Circle' : 'LineString');
        draw = new ol.interaction.Draw({
            source: self.source,
            type: /** @type {ol.geom.GeometryType} */ (type),
            style: styles.measure
        });
        self.map.addInteraction(draw);

        //createMeasureTooltip();
        createHelpTooltip();

        var listener;
        draw.on('drawstart',
            function(evt) {
                self.source.clear(true);
                self.info.setContent("");
                self.info.close(true);
                // set sketch
                sketch = evt.feature;
                /** @type {ol.Coordinate|undefined} */
                var tooltipCoord = evt.coordinate;

                listener = sketch.getGeometry().on('change', function(evt) {
                    var geom = evt.target;
                    var output;
                    if (geom instanceof ol.geom.Circle) {
                        output = formatRadius(geom);
                        tooltipCoord = geom.getLastCoordinate();
                    } else if (geom instanceof ol.geom.LineString) {
                        output = formatLength(geom);
                        tooltipCoord = geom.getLastCoordinate();
                    }
                    self.info.setContent(output);
                    self.info.open(true);
                    //measureTooltipElement.innerHTML = output;
                    //measureTooltip.setPosition(tooltipCoord);
                });
            }, self);

        draw.on('drawend',
            function() {
                //measureTooltipElement.className = 'tooltip tooltip-static';
                //measureTooltip.setOffset([0, -7]);
                // unset sketch
                sketch = null;
                // unset tooltip so that a new one can be created
                //measureTooltipElement = null;
                //createMeasureTooltip();
                ol.Observable.unByKey(listener);
            }, self);
    }


    /**
     * Creates a new help tooltip
     */
    function createHelpTooltip() {
        if (helpTooltipElement) {
            helpTooltipElement.parentNode.removeChild(helpTooltipElement);
        }
        helpTooltipElement = document.createElement('div');
        helpTooltipElement.className = 'tooltip hidden';
        helpTooltip = new ol.Overlay({
            element: helpTooltipElement,
            offset: [15, 0],
            positioning: 'center-left'
        });
        self.map.addOverlay(helpTooltip);
    }


    /**
     * Creates a new measure tooltip
     */
    function createMeasureTooltip() {
        if (measureTooltipElement) {
            measureTooltipElement.parentNode.removeChild(measureTooltipElement);
        }
        measureTooltipElement = document.createElement('div');
        measureTooltipElement.className = 'tooltip tooltip-measure';
        measureTooltip = new ol.Overlay({
            element: measureTooltipElement,
            offset: [0, -15],
            positioning: 'bottom-center'
        });
        self.map.addOverlay(measureTooltip);
    }

    this.change = function (type) {
        self.type = type;
        ol.Observable.unByKey(pointerMoveListener);
        self.map.getViewport().removeEventListener('mouseout', mouseOutHandler);
        self.map.removeInteraction(draw);
        self.source.clear(true);
        addInteraction.call(this);
        this.active = true;
    }
    
    this.active = false;
    this.activate = function () {
        if (!this.active) {
            pointerMoveListener = self.map.on('pointermove', pointerMoveHandler);
            self.map.getViewport().addEventListener('mouseout', mouseOutHandler);
            addInteraction();
        }
        this.active = true;
    }
    
    this.deactivate = function () {
        ol.Observable.unByKey(pointerMoveListener);
        self.map.getViewport().removeEventListener('mouseout', mouseOutHandler);
        self.map.removeInteraction(draw);
        self.source.clear(true);
        this.active = false;
    }
}

module.exports = MeasureControl;
},{"./../styleDefinitions":23,"openlayers":19}],8:[function(require,module,exports){
function MenuPanel(panelId, openId, closeId, fullscreen) {
    this.panelId = panelId;
    this.openId = openId;
    this.closeId = closeId;
    this.fullscreen = fullscreen;
    this.initialize();
}
MenuPanel.prototype.initialize = function () {
    this.panel = document.getElementById(this.panelId);
    this.openBtn = document.getElementById(this.openId);
    this.closeBtn = document.getElementById(this.closeId);
    
    this.openBtn.addEventListener("click", this.open.bind(this), false);
    this.closeHandler = this.close.bind(this);
    this.closeBtn.addEventListener("click", this.closeHandler, false);
}
MenuPanel.prototype.open = function (evt) {
    this.panel.classList.add('expand-horizontal');
    this.panel.classList.remove('collapsed-horizontal');
    this.openBtn.classList.add('collapsed-horizontal');
    this.openBtn.classList.remove('expand-horizontal');
    this.otherMenu.close(evt);
}
MenuPanel.prototype.close = function (evt) {
    this.panel.classList.remove('expand-horizontal');
    this.panel.classList.add('collapsed-horizontal');
    this.openBtn.classList.remove('collapsed-horizontal');
    this.openBtn.classList.add('expand-horizontal');
}
MenuPanel.prototype.createToggle = function (layerDef, handler) {
    var toggle = document.createElement('div');
        toggle.classList.add('btn-toggle');
        
    var toggleCb = document.createElement('input');
        toggleCb.setAttribute("type", "checkbox");
        toggleCb.id = 'toggle-' + layerDef.id;
        toggleCb.addEventListener("change", handler, false);
    toggle.appendChild(toggleCb);

    var toggleLbl = document.createElement('label');
        toggleLbl.setAttribute("for", toggleCb.id);
    toggle.appendChild(toggleLbl);
    
    return toggle;
}
MenuPanel.prototype.createMenuPanelItem = function (InteractiveMap, layerDef, handler, inputType, inputName) {
    var optionId = layerDef.id;
    
    var menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        menuItem.classList.add(inputName || 'data-layer');
        
    var menuItemCb = document.createElement('input');
        menuItemCb.setAttribute("type", inputType || "checkbox");
        if (inputType == "radio") {
            optionId = layerDef.group + '-' + layerDef.id;
            menuItemCb.setAttribute("name", inputName);
            menuItemCb.setAttribute("value", optionId);
        }
        menuItemCb.id = 'option-' + optionId;
        menuItemCb.setAttribute("data-layer-id", optionId);
        menuItemCb.addEventListener("change", handler, false);
    menuItem.appendChild(menuItemCb);
    
    var menuItemLbl = document.createElement('label');
        menuItemLbl.classList.add('checkbox');
        menuItemLbl.setAttribute("for", menuItemCb.id);
        menuItemLbl.innerHTML = layerDef.name;
    menuItem.appendChild(menuItemLbl);
    
    if (layerDef.toggle) {
        function toggleHandler() {
            var layer = InteractiveMap.getMapLayerIndex()[layerDef.id];
            if (layerDef.id == 'ent_dota_tree') {
                InteractiveMap.treeControl.toggleAllTrees(this.checked);
            }
            else {
                InteractiveMap.wardControl.toggleAll(layer, this.checked);
            }
        }
        var toggle = MenuPanel.prototype.createToggle(layerDef, toggleHandler);
        menuItem.appendChild(toggle);
    }
    
    return menuItem;
}

function MenuControl(InteractiveMap) {
    this.InteractiveMap = InteractiveMap;
    this.leftPanel = new MenuPanel("menu-left", "menu-left-open-btn", "menu-left-close-btn");
    this.rightPanel = new MenuPanel("menu-right", "menu-right-open-btn", "menu-right-close-btn");
    this.leftPanel.otherMenu = this.rightPanel;
    this.rightPanel.otherMenu = this.leftPanel;
}
MenuControl.prototype.initialize = function (layerToggleHandler, baseLayerToggleHandler) {
    var self = this;
    this.InteractiveMap.layerDefs.forEach(function (layerDef) {
        var group = layerDef.group;
        var menu = document.querySelector('#' + group + '-menu');
        var menuItem = MenuPanel.prototype.createMenuPanelItem(self.InteractiveMap, layerDef, layerToggleHandler);
        menu.appendChild(menuItem);
    });

    this.InteractiveMap.baseLayerDefs.forEach(function (layerDef) {
        var group = layerDef.group;
        var menu = document.querySelector('#base-' + group + '-menu');
        var menuItem = MenuPanel.prototype.createMenuPanelItem(self.InteractiveMap, layerDef, baseLayerToggleHandler, 'radio', 'base-layer');
        menu.appendChild(menuItem);
    });
}

module.exports = MenuControl;
},{}],9:[function(require,module,exports){
var styles = require('./../styleDefinitions');

function NotificationControl() {
    this.timer = null;
}

NotificationControl.prototype.show = function (message) {
    this.setContent(message);
    this.info.classList.remove('slideUp');
    this.info.classList.add('slideDown');
    clearTimeout(this.timer);
    var self = this;
    this.timer = setTimeout(function () {
        self.info.classList.add('slideUp');
        self.info.classList.remove('slideDown');
    }, 1500);
}

NotificationControl.prototype.setContent = function (html) {
    this.infoContent.innerHTML = html;
}

NotificationControl.prototype.open = function () {
    this.info.classList.add('slideDown');
    this.info.classList.remove('slideUp');
}

NotificationControl.prototype.close = function () {
    this.info.classList.add('slideUp');
    this.info.classList.remove('slideDown');
}

NotificationControl.prototype.initialize = function (id) {
    var self = this;
    this.id = id;
    this.info = document.getElementById(id);
    this.infoContent = document.querySelector('#' + id + ' .message-content');
}

module.exports = NotificationControl;
},{"./../styleDefinitions":23}],10:[function(require,module,exports){
var QueryString = require('./../util/queryString');

function TreeControl(InteractiveMap) {
    this.InteractiveMap = InteractiveMap;
    this.allTreesCutState = false;
}

TreeControl.prototype.updateQueryString = function () {
    var self = this;
    var keys = ['cut_trees', 'uncut_trees'];
    var layer = this.InteractiveMap.getMapLayerIndex()['ent_dota_tree'];
    var source = layer.getSource();
    var features = source.getFeatures();
    var values = features.filter(function (feature) {
        return !!feature.get('isCut') != self.allTreesCutState;
    }).map(function (feature) {
        var dotaProps = feature.get('dotaProps');
        return dotaProps.x + ',' + dotaProps.y;
    }).join(';');
    QueryString.setQueryString(keys[this.allTreesCutState ? 1 : 0], values || null);
    QueryString.setQueryString(keys[this.allTreesCutState ? 0 : 1], null);
    document.getElementById('toggle-ent_dota_tree').checked = this.allTreesCutState;
}

TreeControl.prototype.parseQueryString = function () {
    var self = this;
    var layer = this.InteractiveMap.getMapLayerIndex()['ent_dota_tree'];
    var source = layer.getSource();
    var features = source.getFeatures();
    var treeMap = {};
    features.forEach(function (feature) {
        var dotaProps = feature.get('dotaProps');
        var worldXY = dotaProps.x + ',' + dotaProps.y;
        treeMap[worldXY] = feature;
    });
    ['uncut_trees', 'cut_trees'].forEach(function (treeCutState, index) {
        var values = QueryString.getParameterByName(treeCutState);
        if (values) {
            self.toggleAllTrees(!index, true);
            values = values.split(';');
            values.forEach(function (worldXY) {
                var feature = treeMap[worldXY];
                if (feature) {
                    if (!!feature.get('isCut') == !index) {
                        self.toggleTree(feature, feature.get('dotaProps'), true)
                    }
                }
            });
        }
    });
    this.updateQueryString();
}

TreeControl.prototype.toggleTree = function (feature, dotaProps, bSkipQueryStringUpdate) {
    var gridXY = this.InteractiveMap.vs.WorldXYtoGridXY(dotaProps.x, dotaProps.y);
    this.InteractiveMap.vs.toggleTree(gridXY.x, gridXY.y);
    feature.set('isCut', !feature.get('isCut'));
    if (!bSkipQueryStringUpdate) this.updateQueryString();
}

TreeControl.prototype.toggleAllTrees = function (state, bSkipQueryStringUpdate) {
    var self = this;
    this.allTreesCutState = state;
    var layer = this.InteractiveMap.getMapLayerIndex()['ent_dota_tree'];
    var source = layer.getSource();
    var features = source.getFeatures();
    features.forEach(function (feature) {
        if (!!feature.get('isCut') != state) {
            self.toggleTree(feature, feature.get('dotaProps'), true);
        }
    });
    if (!bSkipQueryStringUpdate) this.updateQueryString();
}

module.exports = TreeControl;
},{"./../util/queryString":29}],11:[function(require,module,exports){
var ol = require('openlayers');
var latLonToWorld = require('./../conversionFunctions').latLonToWorld;
var worldToLatLon = require('./../conversionFunctions').worldToLatLon;
var getTileRadius = require('./../conversionFunctions').getTileRadius;
var getLightUnion = require('./../getLightUnion');
var styles = require('./../styleDefinitions');

function VisionControl(InteractiveMap) {
    var self = this;
    this.InteractiveMap = InteractiveMap;
    this.vs = InteractiveMap.vs;
    this.source = new ol.source.Vector({
        defaultDataProjection : 'pixel'
    });
    this.layer =  new ol.layer.Vector({
        source: this.source,
        style: styles.visionSimulation
    });
}

VisionControl.prototype.getVisionFeature = function (feature, coordinate, radius) {
    var vs = this.vs;

    // get coordinate from feature if not provided
    var worldCoordinate;
    if (!coordinate) {
        var dotaProps = feature.get('dotaProps');
        worldCoordinate = [dotaProps.x, dotaProps.y];
    }
    else {
        worldCoordinate = latLonToWorld(coordinate);
    }
    
    // get radius from feature if not provided
    radius = radius || this.InteractiveMap.getFeatureVisionRadius(feature, dotaProps)
    if (radius == null) return;
    
    var gridXY = vs.WorldXYtoGridXY(worldCoordinate[0], worldCoordinate[1]);
    if (vs.isValidXY(gridXY.x, gridXY.y, true, true, true)) {
        vs.updateVisibility(gridXY.x, gridXY.y, getTileRadius(radius));
        
        var outlines = getLightUnion(vs.grid, vs.lights).map(function (ring) {
            return ring.map(function (point) {
                var worldXY = vs.GridXYtoWorldXY(point.x, point.y);
                return worldToLatLon([worldXY.x, worldXY.y]);
            })
        });
        var multiPolygon = new ol.geom.MultiPolygon([outlines], 'XY');
        var feature = new ol.Feature({
            geometry: multiPolygon
        });
        feature.set('visionData', {
            area: vs.area,
            lightArea: vs.lightArea
        }, false);
        return feature;
    }
}

VisionControl.prototype.toggleVisionFeature = function (feature) {
    var visionFeature = feature.get('visionFeature');
    if (visionFeature) {
        this.source.removeFeature(visionFeature);
        feature.set('visionFeature', null);
        return null;
    }
    else {
        return this.setVisionFeature(feature);
    }
}

VisionControl.prototype.removeVisionFeature = function (feature) {
    var visionFeature = feature.get('visionFeature');
    if (visionFeature) {
        this.source.removeFeature(visionFeature);
        feature.set('visionFeature', null);
    }
}

VisionControl.prototype.setVisionFeature = function (feature, coordinate, unitClass) {
    // remove existing visionFeature for feature
    this.removeVisionFeature(feature);
    
    // determine radius according to unit type
    var radius = this.InteractiveMap.getFeatureVisionRadius(feature, feature.get('dotaProps'), unitClass);
    // create and add vision feature
    visionFeature = this.getVisionFeature(feature, coordinate, radius);
    if (visionFeature) {
        this.source.addFeature(visionFeature);
    }
    feature.set('visionFeature', visionFeature, true);
    return visionFeature;
}


module.exports = VisionControl;
},{"./../conversionFunctions":13,"./../getLightUnion":15,"./../styleDefinitions":23,"openlayers":19}],12:[function(require,module,exports){
var ol = require('openlayers');
var styles = require('./../styleDefinitions');
var mapConstants = require('./../mapConstants');
var latLonToWorld = require('./../conversionFunctions').latLonToWorld;
var worldToLatLon = require('./../conversionFunctions').worldToLatLon;
var QueryString = require('./../util/queryString');

function WardControl(InteractiveMap, throttleTime) {
    var self = this;
    this.InteractiveMap = InteractiveMap;
    this.source = new ol.source.Vector({
        defaultDataProjection : 'pixel'
    });
    this.layer =  new ol.layer.Vector({
        source: this.source
    });
    this.layerFilter = function(layer) {
        return layer === self.layer;
    }
    
    this.placedWardCoordinates = {
        observer: {},
        sentry: {}
    };
    
    this.lastPointerMoveTime = Date.now();
    this.pointerMoveHandler = function(evt) {
        if (evt.dragging) {
            return;
        }
        
        var pixel = self.InteractiveMap.map.getEventPixel(evt.originalEvent);
        
        // if mouse over a building feature, show info and highlight
        var bBuildingHover = false;
        var feature = self.InteractiveMap.map.forEachFeatureAtPixel(pixel, function(feature) {
            return feature;
        }, {
            layerFilter: self.InteractiveMap.layerFilters.marker
        });
        if (feature) {
            bBuildingHover = self.highlight(feature);
            
            if (bBuildingHover) {
                self.showVisibilityInfo();
            }
        }
        else {
            // if mouse over a ward feature, highlight
            var feature = InteractiveMap.checkAndHighlightWard(pixel);

            // no highlighted feature so unhighlight current feature
            if (!feature) {
                self.unhighlight();
            }
            else {
                self.showVisibilityInfo();
            }
        }
        
        // vision cursor
        if (Date.now() - self.lastPointerMoveTime < throttleTime) {
            return;
        }
        self.lastPointerMoveTime = Date.now();
        if (bBuildingHover) {
            if (!feature.get('visionFeature')) {
                var hoverFeature = self.InteractiveMap.visionControl.getVisionFeature(feature);
            }
            else {
                self.InteractiveMap.cursorControl.source.clear(true);
            }
        }
        else {
            var hoverFeature = self.InteractiveMap.visionControl.getVisionFeature(null, evt.coordinate, self.InteractiveMap.visionRadius);
        }
        if (hoverFeature) {
            self.InteractiveMap.cursorControl.source.clear(true);
            self.InteractiveMap.cursorControl.source.addFeature(hoverFeature);
            
            if (!bBuildingHover) {
                self.showVisibilityInfo();
            }
        }
        else if (!bBuildingHover) {
            self.clearInfo();
        }
    }
    this.pointerMoveListener = null;
    
    this.clickHandler = function (evt) {
        self.unhighlight();
        var feature = self.InteractiveMap.map.forEachFeatureAtPixel(evt.pixel, function (feature, layer) {
            return feature;
        }, {
            layerFilter: self.InteractiveMap.layerFilters.marker
        });
        if (feature && self.InteractiveMap.hasVisionRadius(feature)) {
            self.InteractiveMap.toggle(feature);
            if (self.InteractiveMap.visionControl.toggleVisionFeature(feature)) {
                self.showVisibilityInfo();
            }
            else {
                self.clearInfo();
            }
            self.InteractiveMap.cursorControl.source.clear(true);
        }
        else {
            feature = self.InteractiveMap.map.forEachFeatureAtPixel(evt.pixel, function (feature, layer) {
                return feature;
            }, {
                layerFilter: self.layerFilter
            });
            if (feature) {
                self.removeWard(feature);
                self.clearInfo(true);
            }
            else {
                self.addWard(evt.coordinate, self.InteractiveMap.MODE);
                self.InteractiveMap.cursorControl.source.clear(true);
            }
        }
    }
    this.clickListener = null;
}

WardControl.prototype.toggleAll = function (layer, state) {
    if (state) {
        this.showAll(layer);
    }
    else {
        this.hideAll(layer);
    }
}

WardControl.prototype.showAll = function (layer) {
    var self = this;
    var source = layer.getSource();
    var features = source.getFeatures();
    features.forEach(function (feature) {
        self.InteractiveMap.select(feature);
        self.highlight(feature);
    });
}

WardControl.prototype.hideAll = function (layer) {
    var self = this;
    var source = layer.getSource();
    var features = source.getFeatures();
    features.forEach(function (feature) {
        self.InteractiveMap.deselect(feature);
        self.unhighlight(feature);
    });
}

WardControl.prototype.showVisibilityInfo = function (visionFeature, bClicked) {
    var info = this.InteractiveMap.infoControl;
    var vs = this.InteractiveMap.vs;
    var lightArea = vs.lightArea;
    var area = vs.area;
    if (visionFeature) {
        var visionData = visionFeature.get('visionData');
        if (visionData) {
            lightArea = visionData.lightArea;
            area = visionData.area;
            info.setContent("Visibility: " + (lightArea / area * 100).toFixed() + '% ' + lightArea + "/" + area);
            info.open(bClicked);
        }
    }
    else {
        info.setContent("Visibility: " + (lightArea / area * 100).toFixed() + '% ' + lightArea + "/" + area);
        info.open(bClicked);
    }
}

WardControl.prototype.clearInfo = function (bOverrideActive) {
    this.InteractiveMap.infoControl.setContent("");
    this.InteractiveMap.infoControl.close(bOverrideActive);
}

WardControl.prototype.activate = function () {
    if (!this.pointerMoveListener) {
        this.pointerMoveListener = this.InteractiveMap.map.on('pointermove', this.pointerMoveHandler);
    }
    if (!this.clickListener) {
        this.clickListener = this.InteractiveMap.map.on('click', this.clickHandler);
    }
}

WardControl.prototype.deactivate = function () {
    this.InteractiveMap.unhighlightWard();
    this.InteractiveMap.cursorControl.source.clear(true);
    ol.Observable.unByKey(this.pointerMoveListener);
    this.pointerMoveListener = null;
    ol.Observable.unByKey(this.clickListener);
    this.clickListener = null;
}

WardControl.prototype.parseQueryString = function () {
    var self = this;
    ['observer', 'sentry'].forEach(function (wardType) {
        var values = QueryString.getParameterByName(wardType);
        if (values) {
            values = values.split(';');
            values.forEach(function (worldXY) {
                worldXY = worldXY.split(',');
                if (worldXY.length == 2) {
                    worldXY = worldXY.map(parseFloat);
                    if (!worldXY.some(isNaN)) {
                        var coordinate = worldToLatLon(worldXY);
                        self.addWard(coordinate, wardType, true);
                    }
                }
            });
        }
        self.updateQueryString(wardType);
    });
}

WardControl.prototype.updateQueryString = function (wardType) {
    var values = Object.keys(this.placedWardCoordinates[wardType]).join(';');
    QueryString.setQueryString(wardType, values || null);
}

WardControl.prototype.addWard = function (coordinate, wardType, bSkipQueryStringUpdate) {
    if (coordinate[0] < 0 || coordinate[0] > mapConstants.map_w || coordinate[1] < 0 || coordinate[1] > mapConstants.map_h) return;
    var geom = new ol.geom.Point(coordinate);
    var feature = new ol.Feature(geom);
    feature.set('wardType', wardType, true);
    feature.setStyle(styles[wardType].normal);
    this.source.addFeature(feature);
    if (wardType == 'observer') {
        if (this.InteractiveMap.visionControl.setVisionFeature(feature, coordinate, wardType)) {
            this.showVisibilityInfo();
        }
    }
    
    var circle = this.InteractiveMap.getRangeCircle(feature, coordinate, wardType);
    if (circle) {
        circle.setStyle(wardType == 'observer' ? styles.dayVision : styles.trueSight);
        feature.set('wardRange', circle, true);
        this.InteractiveMap.wardRangeSource.addFeature(circle);
    }
    var worldXY = latLonToWorld(coordinate).map(Math.round).join(',');
    this.placedWardCoordinates[wardType][worldXY] = true;
    if (!bSkipQueryStringUpdate) this.updateQueryString(wardType);
}

WardControl.prototype.removeWard = function (feature) {
    var wardRange = feature.get('wardRange');
    if (wardRange) {
        this.InteractiveMap.wardRangeSource.removeFeature(wardRange);
    }
    this.source.removeFeature(feature);
    this.InteractiveMap.visionControl.removeVisionFeature(feature);
    
    var worldXY = latLonToWorld(feature.getGeometry().getCoordinates()).map(Math.round).join(',');
    var wardType = feature.get('wardType');
    delete this.placedWardCoordinates[wardType][worldXY];
    this.updateQueryString(wardType);
}

WardControl.prototype.highlight = function (feature) {
    this.InteractiveMap.cursorControl.source.clear(true);
    this.unhighlight();
    var visionFeature = this.InteractiveMap.visionControl.setVisionFeature(feature);
    this.addRangeCircles(feature);
    this.InteractiveMap.highlight(feature);
    return visionFeature;
}

WardControl.prototype.unhighlight = function (feature) {
    var highlightedFeature = feature || this.InteractiveMap.highlightedFeature;
    if (highlightedFeature && !highlightedFeature.get("clicked")) {
        this.InteractiveMap.visionControl.removeVisionFeature(highlightedFeature);
        this.removeRangeCircles(highlightedFeature);
    }
    this.InteractiveMap.unhighlight();
}

WardControl.prototype.addRangeCircles = function (feature) {
    this.addRangeCircle(feature, 'dayVision');
    this.addRangeCircle(feature, 'nightVision');
    this.addRangeCircle(feature, 'trueSight');
    this.addRangeCircle(feature, 'attackRange');
}

WardControl.prototype.removeRangeCircles = function (feature) {
    this.removeRangeCircle(feature, 'dayVision');
    this.removeRangeCircle(feature, 'nightVision');
    this.removeRangeCircle(feature, 'trueSight');
    this.removeRangeCircle(feature, 'attackRange');
}

WardControl.prototype.addRangeCircle = function (feature, rangeType) {
    if (!feature.get(rangeType)) {
        var circle = this.InteractiveMap.getRangeCircle(feature, null, null, rangeType);
        if (circle) {
            feature.set(rangeType, circle, true);
            this.InteractiveMap.rangeSources[rangeType].addFeature(circle);
        }
    }
}

WardControl.prototype.removeRangeCircle = function (feature, rangeType) {
    var circle = feature.get(rangeType);
    if (circle) {
        feature.set(rangeType, null, true);
        this.InteractiveMap.rangeSources[rangeType].removeFeature(circle);
    }
}

module.exports = WardControl;
},{"./../conversionFunctions":13,"./../mapConstants":20,"./../styleDefinitions":23,"./../util/queryString":29,"openlayers":19}],13:[function(require,module,exports){
var mapConstants = require('./mapConstants');

function lerp(minVal, maxVal, pos_r) {
    return pos_r * (maxVal - minVal) + minVal;
}

function reverseLerp(minVal, maxVal, pos) {
    return (pos - minVal) / (maxVal - minVal);
}

function latLonToWorld(coordinate) {
    var x_r = lerp(mapConstants.map_x_boundaries[0], mapConstants.map_x_boundaries[1], coordinate[0] / mapConstants.map_w),
        y_r = lerp(mapConstants.map_y_boundaries[0], mapConstants.map_y_boundaries[1], (mapConstants.map_h - coordinate[1]) / mapConstants.map_h);
    return [x_r, y_r];
}

function worldToLatLon(coordinate) {
    var x = reverseLerp(mapConstants.map_x_boundaries[0], mapConstants.map_x_boundaries[1], coordinate[0]) * mapConstants.map_w,
        y = mapConstants.map_h - reverseLerp(mapConstants.map_y_boundaries[0], mapConstants.map_y_boundaries[1], coordinate[1]) * mapConstants.map_h;
    return [x, y]
}

function getTileRadius(r) {
    return parseInt(Math.floor(r / 64));
}

function getScaledRadius(r) {
    return r / (mapConstants.map_x_boundaries[1] - mapConstants.map_x_boundaries[0]) * mapConstants.map_w
}

function calculateDistance(order, units, measure) {
    if (order == 1) {
        if (units == "km") {
            return measure * mapConstants.scale * 1000;
        } else {
            return measure * mapConstants.scale;
        }
    } else {
        return measure * mapConstants.scale;
    }
}

module.exports = {
    lerp: lerp,
    reverseLerp: reverseLerp,
    latLonToWorld: latLonToWorld,
    worldToLatLon: worldToLatLon,
    getTileRadius: getTileRadius,
    getScaledRadius: getScaledRadius,
    calculateDistance: calculateDistance
}
},{"./mapConstants":20}],14:[function(require,module,exports){
var ol = require('openlayers');
var proj = require('./projections');

function loadGeoJSON(map, layerDef) {
    var source = new ol.source.Vector({
        url: 'data/700/' + layerDef.filename,
        format: new ol.format.GeoJSON({defaultDataProjection: layerDef.projection || proj.pixel})
    });
    var layer = new ol.layer.Vector({
        title: layerDef.name,
        projection: layerDef.projection || proj.pixel,
        source: source,
        visible: !!layerDef.visible,
        style: layerDef.style
    });

    return layer;
}

function loadPolygon(map, layerDef, data, layer) {
    var features = [];
    features = data.data[layerDef.id].map(function (obj) {
        var points = obj.points;
        var ring = points.map(function (point) {
            return ol.proj.transform([point.x, point.y], proj.dota, proj.pixel)
        });
        ring.push(ol.proj.transform([points[0].x, points[0].y], proj.dota, proj.pixel))
        var geom = new ol.geom.Polygon([ring]);
        var feature = new ol.Feature(geom);
        obj.id = layerDef.id;
        feature.set('dotaProps', obj, true);
        return feature;
    });
    
    var vectorSource = new ol.source.Vector({
        defaultDataProjection : 'dota',
        features: features
    });
    
    if (layer) {
        layer.setSource(vectorSource);
    }
    else {
        layer = new ol.layer.Vector({
            title: layerDef.name,
            source: vectorSource,
            visible: !!layerDef.visible,
            style: layerDef.style
        });
        layer.set('layerId', layerDef.id, true);
        layer.set('layerDef', layerDef, true);
        layer.set('showInfo', false, true);
    }

    return layer;
}

function loadJSON(map, layerDef, data, layer) {
    var features = [];
    features = data.data[layerDef.id].map(function (point) {
        var unitClass = point.subType ? layerDef.id + '_' + point.subType : layerDef.id;
        var stats = data.stats[unitClass];
        var bounds = layerDef.id == "ent_dota_tree" ? [64, 64] : stats.bounds;
        if (bounds && bounds[0] > 0 && bounds[1] > 0) {
            var geom = new ol.geom.Polygon([[
                ol.proj.transform([point.x-bounds[0], point.y-bounds[1]], proj.dota, proj.pixel),
                ol.proj.transform([point.x-bounds[0], point.y+bounds[1]], proj.dota, proj.pixel),
                ol.proj.transform([point.x+bounds[0], point.y+bounds[1]], proj.dota, proj.pixel),
                ol.proj.transform([point.x+bounds[0], point.y-bounds[1]], proj.dota, proj.pixel),
                ol.proj.transform([point.x-bounds[0], point.y-bounds[1]], proj.dota, proj.pixel)
            ]]);
        }
        else {
            var geom = new ol.geom.Point(ol.proj.transform([point.x, point.y], proj.dota, proj.pixel));
        }

        var feature = new ol.Feature(geom);
        
        point.id = layerDef.id;
        point.unitClass = unitClass;
        feature.set('dotaProps', point, true);
        
        return feature;
    });
    
    var vectorSource = new ol.source.Vector({
        defaultDataProjection : 'dota',
        features: features
    });
    
    if (layer) {
        layer.setSource(vectorSource);
    }
    else {
        layer = new ol.layer.Vector({
            title: layerDef.name,
            source: vectorSource,
            visible: !!layerDef.visible,
            style: layerDef.style
        });
        layer.set('layerId', layerDef.id, true);
        layer.set('layerDef', layerDef, true);
        layer.set('showInfo', false, true);
    }

    return layer;
}

function loadNeutralPullRange(InteractiveMap, layerDef, data, layer) {
    /*var features = InteractiveMap.getMapLayerIndex().npc_dota_neutral_spawner.getSource().getFeatures();
    var circles = features.map(function (feature) {
        var circle = InteractiveMap.getRangeCircle(feature, null, null, null, 400);
        feature.set("guard_range", circle, true);
        return circle;
    });
    circles = circles.concat(features.map(function (feature) {
        var dotaProps = feature.get("dotaProps");
        var center = worldToLatLon([dotaProps.x, dotaProps.y]);
        var pullMaxCoords = createCirclePointCoords(center[0], center[1], 400 + pullRangeTiming[dotaProps.pullType] * 350, 360);
        var pullMinCoords = createCirclePointCoords(center[0], center[1], 400 + pullRangeTiming[dotaProps.pullType] * 270, 360);
        var geom = new ol.geom.Polygon([pullMaxCoords]);
        geom.appendLinearRing(new ol.geom.LinearRing(pullMinCoords));
        feature.set("pull_range_min", geom, true);
        var circle = new ol.Feature({geometry: geom, visible: false});
        circle.visible(false);
        return circle;
    }));*/
    
    var vectorSource = new ol.source.Vector({
        defaultDataProjection : 'pixel',
        features: []
    });
    
    if (layer) {
        layer.setSource(vectorSource);
    }
    else {
        layer = new ol.layer.Vector({
            title: layerDef.name,
            source: vectorSource,
            visible: !!layerDef.visible,
            style: layerDef.style
        });
        layer.set('layerId', layerDef.id, true);
        layer.set('layerDef', layerDef, true);
        layer.set('showInfo', false, true);
    }

    return layer;
}

function loadLayerGroupFromData(InteractiveMap, data, version, layersIndex, layerDefs) {
    var layers = [];
    for (var i = 0; i < layerDefs.length; i++) {
        var layerDef = layerDefs[i];
        if (!data.data[layerDef.id] && ((layerDef.type !== 'pullRange' && layerDef.type !== 'GeoJSON') || version == '687')) continue;
        var layer;
        switch (layerDef.type) {
            case 'GeoJSON':
                layer = loadGeoJSON(InteractiveMap.map, layerDef, layersIndex[layerDef.id]);
            break;
            case 'polygon':
                layer = loadPolygon(InteractiveMap.map, layerDef, data, layersIndex[layerDef.id]);
            break;
            case 'pullRange':
                layer = loadNeutralPullRange(InteractiveMap, layerDef, data, layersIndex[layerDef.id]);
            break;
            default:
                layer = loadJSON(InteractiveMap.map, layerDef, data, layersIndex[layerDef.id]);
            break;
        }
        layersIndex[layerDef.id] = layer;
        layers.push(layer);
    }
    var layerGroup = new ol.layer.Group({
        title: 'Layers',
        layers: new ol.Collection(layers)
    });
    
    return layerGroup;
}

module.exports = {
    loadGeoJSON: loadGeoJSON,
    loadJSON: loadJSON,
    loadLayerGroupFromData: loadLayerGroupFromData,
};
},{"./projections":21,"openlayers":19}],15:[function(require,module,exports){
var VisionSimulation = require("dota-vision-simulation");
var key2pt = VisionSimulation.prototype.key2pt;
var xy2key = VisionSimulation.prototype.xy2key;
var xy2pt = VisionSimulation.prototype.xy2pt;

function processNeighbors(grid, lights, components, key, index) {
    var pt = key2pt(key);
    var dirs = [[1, 0], [0, -1], [-1, 0], [0, 1]];
    for (var i = 0; i < dirs.length; i++) {
        var aX = pt.x+dirs[i][0];
        var aY = pt.y+dirs[i][1];
        if (!grid[aX] || !grid[aX][aY]) continue;
        var keyAdj = grid[aX][aY].key
        if (components[keyAdj] || !lights[keyAdj]) continue;
        components[keyAdj] = index;
        processNeighbors(grid, lights, components, keyAdj, index);
    }
}

function getLightUnion(grid, lights) {
    var components = {};
    var index = 1;
    for (var key in lights) {
        if (!components[key]) {
            components[key] = index;
            processNeighbors(grid, lights, components, key, index);
            index++;
        }
    }
    
    var outlines = [];
    for (var i = 1; i < index; i++) {
        outlines.push(getOutline(grid, components, i))
    }
    return outlines;
}

function isSideFree(grid, components, pt, dir) {
    var aX = pt.x+dir[0];
    var aY = pt.y+dir[1];
    if (!grid[aX] || !grid[aX][aY]) return true;
    var keyAdj = grid[aX][aY].key
    return !components[keyAdj];
}

function notSurrounded(grid, components, pt) {
    for (var i = 0; i < 8; i+=2) {
        var aX = pt.x+Math.round(Math.cos(2 * Math.PI - Math.PI/4 * i));
        var aY = pt.y+Math.round(Math.sin(2 * Math.PI - Math.PI/4 * i));
        if (!grid[aX] || !grid[aX][aY]) return i;
        var keyAdj = grid[aX][aY].key
        if (!components[keyAdj]) return i;
    }
    return null;
}

function mod(n, m) {
        return ((n % m) + m) % m;
}

function getOutline(grid, components, index) {
    var outlinePoints = [];
    var startKey;
    var dir = null;
    for (var key in components) {
        var pt = key2pt(key);
        dir = notSurrounded(grid, components, pt);
        if (components[key] == index && dir !== null) {
            startKey = key;
            break;
        }
    }
    var next = processNext(grid, components, startKey, dir);
    while (startKey !== next.key || dir !== next.dir) {
        outlinePoints.push(next.point);
        next = processNext(grid, components, next.key, next.dir);
    }
    outlinePoints.push(next.point);
    return outlinePoints;
}

function checkAdj(grid, components, pt, key, dir, i, adjDir) {
    var aX = pt.x+dir[0];
    var aY = pt.y+dir[1];
    if (!grid[aX] || !grid[aX][aY]) return;
    var ptAdj = grid[pt.x+dir[0]][pt.y+dir[1]];
    if (components[ptAdj.key] == components[key] && isSideFree(grid, components, ptAdj, adjDir)) {
        return {
            key: ptAdj.key,
            dir: i
        }
    }
}

function processNext(grid, components, key, i) {
    var pt = key2pt(key);
    var next;
    
    var x = Math.round(Math.cos(2 * Math.PI - Math.PI/4 * i));
    var y = Math.round(Math.sin(2 * Math.PI - Math.PI/4 * i));
    
    var nI = mod(i+2, 8);
    var nX = Math.round(Math.cos(2 * Math.PI - Math.PI/4 * nI));
    var nY = Math.round(Math.sin(2 * Math.PI - Math.PI/4 * nI));
    
    var bI = mod(i-1, 8);
    var bX = Math.round(Math.cos(2 * Math.PI - Math.PI/4 * bI));
    var bY = Math.round(Math.sin(2 * Math.PI - Math.PI/4 * bI));

    if (isSideFree(grid, components, pt, [nX, nY])) {
        return {
            key: key,
            dir: mod(i+2, 8),
            point: xy2pt(pt.x+bX/2, pt.y+bY/2)
        }
    }
    if (!next) next = checkAdj(grid, components, pt, key, [nX, nY], i, [x, y]);
    if (!next) {
        var aI = mod(i + 1, 8);
        var aX = Math.round(Math.cos(2 * Math.PI - Math.PI/4 * aI));
        var aY = Math.round(Math.sin(2 * Math.PI - Math.PI/4 * aI));
        var pI = mod(i - 2, 8);
        var pX = Math.round(Math.cos(2 * Math.PI - Math.PI/4 * pI));
        var pY = Math.round(Math.sin(2 * Math.PI - Math.PI/4 * pI));
        next = checkAdj(grid, components, pt, key, [aX, aY], pI, [pX, pY]);
    }
    if (next) {
        next.point = xy2pt(pt.x+bX/2, pt.y+bY/2);
        return next;
    }
    else {
        console.log('error');
    }
}

module.exports = getLightUnion;
},{"dota-vision-simulation":35}],16:[function(require,module,exports){
var capitalize = require('./util/capitalize');

var unitNames = {
    npc_dota_roshan_spawner: "Roshan",
    dota_item_rune_spawner_powerup: "Rune",
    dota_item_rune_spawner_bounty: "Bounty Rune",
    ent_dota_tree: "Tree",
    npc_dota_healer: "Shrine",
    ent_dota_fountain: "Fountain",
    npc_dota_fort: "Ancient",
    ent_dota_shop: "Shop",
    npc_dota_tower: "Tower",
    npc_dota_barracks: "Barracks",
    npc_dota_filler: "Building",
    trigger_multiple: "Neutral Camp Spawn Box",
    npc_dota_neutral_spawner: "Neutral Camp",
    observer: "Observer Ward",
    sentry: "Sentry Ward"
};
    
function getUnitName(unitType, unitSubType) {
    return (unitSubType ? capitalize(unitSubType.replace('tower', 'Tier ').replace('range', 'Ranged')) + ' ' : '') + unitNames[unitType];
}
    
var pullTypes = ['Normal', 'Fast', 'Slow'];
var neutralTypes = ['Easy', 'Medium', 'Hard', 'Ancient'];
function getPopupContent(data, feature) {
    var dotaProps = feature.get('dotaProps');
    var unitClass = dotaProps.subType ? dotaProps.id + '_' + dotaProps.subType : dotaProps.id;
    var stats = data.data.stats[unitClass];
    var htmlContent = '<div class="info"><span class="info-header">' + getUnitName(dotaProps.id, dotaProps.subType) + '</span><span class="info-body">';
    if (dotaProps.pullType != null) {
        htmlContent += '<br><span class="info-line">Pull Type: ' + pullTypes[dotaProps.pullType] + '</span>';
    }
    if (dotaProps.neutralType != null) {
        htmlContent += '<br><span class="info-line">Difficulty: ' + neutralTypes[dotaProps.neutralType] + '</span>';
    }
    if (stats.hasOwnProperty('damageMin') && stats.hasOwnProperty('damageMax')) {
        htmlContent += '<br><span class="info-line">Damage: ' + stats.damageMin + "&ndash;" + stats.damageMax + '</span>';
    }
    if (stats.hasOwnProperty('bat')) {
        htmlContent += '<br><span class="info-line">BAT: ' + stats.bat + '</span>';
    }
    if (stats.hasOwnProperty('attackRange')) {
        htmlContent += '<br><span class="info-line">Attack Range: ' + stats.attackRange + '</span>';
    }
    if (stats.hasOwnProperty('health')) {
        htmlContent += '<br><span class="info-line">Health: ' + stats.health + '</span>';
    }
    if (stats.hasOwnProperty('armor')) {
        htmlContent += '<br><span class="info-line">Armor: ' + stats.armor + '</span>';
    }
    if (stats.hasOwnProperty('dayVision') && stats.hasOwnProperty('nightVision')) {
        htmlContent += '<br><span class="info-line">Vision: ' + stats.dayVision + "/" + stats.nightVision + '</span>';
    }
    htmlContent += '</span></div>';
    return htmlContent;
}

module.exports = getPopupContent;
},{"./util/capitalize":24}],17:[function(require,module,exports){
var VisionSimulation = require("dota-vision-simulation");
var worlddata = require("dota-vision-simulation/src/worlddata.json");
var QueryString = require('./util/queryString');
var ol = require('openlayers');
var proj = require('./projections');
var mapConstants = require('./mapConstants');
var MenuControl = require('./controls/menuControl');
var InfoControl = require('./controls/infoControl');
var NotificationControl = require('./controls/notificationControl');
var MeasureControl = require('./controls/measureControl');
var CreepControl = require('./controls/creepControl');
var VisionControl = require('./controls/visionControl');
var WardControl = require('./controls/wardControl');
var TreeControl = require('./controls/treeControl');
var CursorControl = require('./controls/cursorControl');
var InteractiveMapConstructor = require('./InteractiveMap');

var rollbar = require('./rollbar');

var buildDate = "2017-01-12 16:58:32 UTC";
var releaseTag = "4.0.0";

function App(map_tile_path, vision_data_image_path) {
    var InteractiveMap = new InteractiveMapConstructor(map_tile_path);
    InteractiveMap.toggleLayerMenuOption = function(layerId, state) {
        var element = document.querySelector('input[data-layer-id="' + layerId + '"]');
        if (state != null) element.checked = state;
        updateLayerAndQueryString(element, layerId);
    }

    var forEach = require('./util/forEach');
    InteractiveMap.vs = new VisionSimulation(worlddata, vision_data_image_path, initialize);
    InteractiveMap.menuControl = new MenuControl(InteractiveMap);
    InteractiveMap.menuControl.initialize(layerToggleHandler, baseLayerToggleHandler);
    InteractiveMap.infoControl = new InfoControl(InteractiveMap);
    InteractiveMap.infoControl.initialize('info');
    InteractiveMap.notificationControl = new NotificationControl();
    InteractiveMap.notificationControl.initialize('notification');
    InteractiveMap.visionControl = new VisionControl(InteractiveMap, 20);
    InteractiveMap.wardControl = new WardControl(InteractiveMap);
    InteractiveMap.treeControl = new TreeControl(InteractiveMap);
    InteractiveMap.cursorControl = new CursorControl(InteractiveMap);
    InteractiveMap.measureControl = new MeasureControl(InteractiveMap);
    InteractiveMap.creepControl = new CreepControl(InteractiveMap);
    InteractiveMap.creepControl.initialize('timer');

    //var DrawCurveControl = require('./drawCurveControl');
    //InteractiveMap.drawCurveControl = new DrawCurveControl(InteractiveMap);

    var modeNotificationText = {
        observer: "Ward Mode: Observer",
        sentry: "Ward Mode: Sentry",
        navigate: "Navigation Mode",
        line: "Measure Mode: Line",
        circle: "Measure Mode: Circle",
        treeEnable: "<span>Navigation Mode</span><span>Trees: On</span>",
        treeDisable: "<span>Navigation Mode</span><span>Trees: Off</span>",
        nightOn: "Nighttime Vision",
        nightOff: "Daytime Vision",
        darknessOn: "Darkness: On",
        darknessOff: "Darkness: Off",
        creepControlOn: "Lane Animation: On",
        creepControlOff: "Lane Animation: Off"
    }
    function changeMode(mode) {
        switch (mode) {
            case 'observer':
            case 'sentry':
                document.querySelector('input[name="ward-type"][value="' + mode + '"]').checked = true;
            case 'ward':
                document.querySelector('input[name="mode"][value="ward"]').checked = true;
                InteractiveMap.MODE = document.querySelector('input[name="ward-type"]:checked').value;
                document.getElementById('btn-ward').setAttribute('ward-type', InteractiveMap.MODE);
                document.getElementById('btn-ward').classList.add('active');
                document.getElementById('btn-tree').classList.remove('active');
                document.getElementById('btn-measure').classList.remove('active');
                QueryString.setQueryString('mode', InteractiveMap.MODE);
                InteractiveMap.measureControl.deactivate();
                InteractiveMap.wardControl.activate();
                InteractiveMap.infoControl.deactivate();
            break;
            case 'line':
            case 'circle':
                document.querySelector('input[name="measure-type"][value="' + mode + '"]').checked = true;
            case 'measure':
                document.querySelector('input[name="mode"][value="measure"]').checked = true;
                InteractiveMap.MODE = document.querySelector('input[name="measure-type"]:checked').value;
                document.getElementById('btn-ward').classList.remove('active');
                document.getElementById('btn-tree').classList.remove('active');
                document.getElementById('btn-measure').classList.add('active');
                document.getElementById('btn-measure').setAttribute('measure-type', InteractiveMap.MODE);
                QueryString.setQueryString('mode', InteractiveMap.MODE);
                InteractiveMap.measureControl.change(InteractiveMap.MODE);
                InteractiveMap.wardControl.deactivate();
                InteractiveMap.infoControl.deactivate();
                
            break;
            default:
                document.querySelector('input[name="mode"][value="navigate"]').checked = true;
                InteractiveMap.MODE = mode || "navigate";
                document.getElementById('btn-ward').classList.remove('active');
                document.getElementById('btn-tree').classList.add('active');
                document.getElementById('btn-measure').classList.remove('active');
                QueryString.setQueryString('mode', InteractiveMap.MODE == 'navigate' ? null : InteractiveMap.MODE);
                InteractiveMap.measureControl.deactivate();
                InteractiveMap.wardControl.deactivate();
                InteractiveMap.infoControl.activate();
            break;
        }
        InteractiveMap.notificationControl.show(modeNotificationText[InteractiveMap.MODE]);
    }

    forEach(document.querySelectorAll('input[name="mode"], input[name="ward-type"], input[name="measure-type"]'), function (element) {
        element.addEventListener("change", function () {
            changeMode(this.value);
        }, false);
    }, this);

    function updateLayerAndQueryString(element, layerId) {
        layerId = layerId || element.getAttribute('data-layer-id');
        var layer = InteractiveMap.getMapLayerIndex()[layerId];
        layer.setVisible(element.checked);
        var param = layer.get("title").replace(/ /g, '');
        QueryString.setQueryString(param, element.checked ? true : null);
        if (layerId == 'ent_dota_tree') {
            document.getElementById('btn-tree').setAttribute('trees-enabled', element.checked ? "yes" : "no");
        }
    }
    function layerToggleHandler() {
        updateLayerAndQueryString(this);
    }
    function baseLayerToggleHandler() {
        var layerId = this.getAttribute('data-layer-id');
        InteractiveMap.baseLayers.forEach(function (layer) {
            layer.setVisible(layer.get('layerId') === layerId);
        });
        QueryString.setQueryString('BaseLayer', layerId);
    }

    // updates element visibility based on map layer index
    // updates layer visibility based on element state
    function updateOverlayMenu() {
        forEach(document.querySelectorAll('.data-layer > input'), function (element) {
            var label = element.nextSibling;
            var layerId = element.getAttribute('data-layer-id');
            var layerIndex = InteractiveMap.getMapLayerIndex();
            var layer = layerIndex[layerId];
            if (!layer) {
                label.style.display = "none";
            }
            else {
                label.style.display = "block";
                layer.setVisible(element.checked);
            }
        }, this);
    }

    function setDefaults() {
        var x = QueryString.getParameterByName('x');
        var y = QueryString.getParameterByName('y');
        var zoom = QueryString.getParameterByName('zoom');
        if (zoom) {
            InteractiveMap.view.setZoom(zoom);
        }
        if (x && y) {
            var coordinate = ol.proj.transform([x, y], proj.dota, proj.pixel);
            if (ol.extent.containsXY([-100, -100, mapConstants.map_w+100, mapConstants.map_h+100], coordinate[0], coordinate[1])) {
                InteractiveMap.panTo(coordinate);
            }
        }
        
        document.getElementById('btn-ward').setAttribute('ward-type', 'observer');
        var mode = QueryString.getParameterByName('mode');
        changeMode(mode);

        var baseLayerName = QueryString.getParameterByName('BaseLayer');
        var element;
        if (baseLayerName) {
            element = document.querySelector('input[name="base-layer"][value="' + baseLayerName + '"]');
            if (element) {
                element.checked = true;
                InteractiveMap.baseLayers.filter(function (layer) { return layer.get("layerId") == baseLayerName })[0].setVisible(true);
            }
        }
        if (!element) {
            QueryString.setQueryString('BaseLayer', null);
            InteractiveMap.baseLayers[0].setVisible(true);
            document.querySelector('input[name="base-layer"][value="' + InteractiveMap.baseLayers[0].get("layerId") + '"]').checked = true;
        }
        
        InteractiveMap.layerDefs.forEach(function (layerDef) {
            var param = layerDef.name.replace(/ /g, '');
            var value = QueryString.getParameterByName(param);
            if (value && value !== "false") {
                layerDef.visible = true;
                document.querySelector('input[data-layer-id="' + layerDef.id + '"]').checked = true;
                QueryString.setQueryString(param, true);
            }
            else {
                QueryString.setQueryString(param, null);
            }
            if (layerDef.id == 'ent_dota_tree') {
                document.getElementById('btn-tree').setAttribute('trees-enabled', layerDef.visible ? "yes" : "no");
            }
        });
    }
        
    document.getElementById('nightControl').addEventListener('change', function () {
        InteractiveMap.isNight = this.checked;
        if (this.checked) {
            InteractiveMap.notificationControl.show(modeNotificationText.nightOn);
        }
        else {
            InteractiveMap.notificationControl.show(modeNotificationText.nightOff);
        }
    }, false);

    document.getElementById('darknessControl').addEventListener('change', function () {
        InteractiveMap.isDarkness = this.checked;
        if (this.checked) {
            InteractiveMap.notificationControl.show(modeNotificationText.darknessOn);
        }
        else {
            InteractiveMap.notificationControl.show(modeNotificationText.darknessOff);
        }
    }, false);

    document.getElementById('creepControl').addEventListener('change', function () {
        if (this.checked) {
            InteractiveMap.creepControl.activate();
            InteractiveMap.notificationControl.show(modeNotificationText.creepControlOn);
        }
        else {
            InteractiveMap.creepControl.deactivate();
            InteractiveMap.notificationControl.show(modeNotificationText.creepControlOff);
        }
    }, false);

    document.getElementById('version-select').addEventListener('change', function () {
        InteractiveMap.version = this.value;
    }, false);

    document.getElementById('vision-radius').addEventListener('change', function () {
        InteractiveMap.visionRadius = this.value;
    }, false);

    document.getElementById('movementSpeed').addEventListener('change', function () {
        InteractiveMap.movementSpeed = this.value;
    }, false);

    function onMoveEnd(evt) {
        var map = evt.map;
        var extent = map.getView().calculateExtent(map.getSize());
        var center = ol.extent.getCenter(extent);
        var worldXY = ol.proj.transform(center, proj.pixel, proj.dota);
        var coordinate = [Math.round(worldXY[0]), Math.round(worldXY[1])];
        QueryString.setQueryString('x', coordinate[0]);
        QueryString.setQueryString('y', coordinate[1]);
        QueryString.setQueryString('zoom', Math.round(InteractiveMap.view.getZoom()));
    }

    function initialize() {
        InteractiveMap.infoControl.activate();
        
        setDefaults();

        InteractiveMap.setMapLayers(InteractiveMap.version, function () {
            updateOverlayMenu();
            InteractiveMap.map.addLayer(InteractiveMap.measureControl.layer);
            InteractiveMap.map.addLayer(InteractiveMap.cursorControl.layer);
            InteractiveMap.map.addLayer(InteractiveMap.visionControl.layer);
            InteractiveMap.map.addLayer(InteractiveMap.wardControl.layer);
            InteractiveMap.map.addLayer(InteractiveMap.highlightLayer);
            InteractiveMap.map.addLayer(InteractiveMap.selectLayer);
            InteractiveMap.map.addLayer(InteractiveMap.wardRangeLayer);
            InteractiveMap.map.addLayer(InteractiveMap.rangeLayers.dayVision);
            InteractiveMap.map.addLayer(InteractiveMap.rangeLayers.nightVision);
            InteractiveMap.map.addLayer(InteractiveMap.rangeLayers.trueSight);
            InteractiveMap.map.addLayer(InteractiveMap.rangeLayers.attackRange);
            
            InteractiveMap.treeControl.parseQueryString();
            InteractiveMap.wardControl.parseQueryString();
        });
        
        InteractiveMap.map.on('moveend', onMoveEnd);
            
        document.getElementById('option-dayVision').addEventListener('change', function () {
            InteractiveMap.rangeLayers.dayVision.setVisible(this.checked);
        });
            
        document.getElementById('option-nightVision').addEventListener('change', function () {
            InteractiveMap.rangeLayers.nightVision.setVisible(this.checked);
        });
            
        document.getElementById('option-trueSight').addEventListener('change', function () {
            InteractiveMap.rangeLayers.trueSight.setVisible(this.checked);
        });
            
        document.getElementById('option-attackRange').addEventListener('change', function () {
            InteractiveMap.rangeLayers.attackRange.setVisible(this.checked);
        });
            
        document.getElementById('version-select').addEventListener('change', function () {
            InteractiveMap.setMapLayers(this.value);
        });
            
        document.getElementById('btn-zoom-in').addEventListener('click', function () {
            InteractiveMap.view.animate({zoom: InteractiveMap.view.getZoom() + 1});
        });
            
        document.getElementById('btn-zoom-out').addEventListener('click', function () {
            InteractiveMap.view.animate({zoom: InteractiveMap.view.getZoom() - 1});
        });

        document.getElementById('btn-tree').addEventListener('click', function () {
            if (this.classList.contains('active')) {
                this.setAttribute('trees-enabled', this.getAttribute('trees-enabled') == "yes" ? "no" : "yes");
            }
            this.classList.add('active');
            document.getElementById('btn-ward').classList.remove('active');
            document.getElementById('btn-measure').classList.remove('active');
            InteractiveMap.toggleLayerMenuOption("ent_dota_tree", this.getAttribute('trees-enabled') == "yes");
            changeMode('navigate');
            InteractiveMap.notificationControl.show(this.getAttribute('trees-enabled') == "yes" ? modeNotificationText.treeEnable : modeNotificationText.treeDisable);
        });

        document.getElementById('btn-ward').addEventListener('click', function () {
            if (this.classList.contains('active')) {
                this.setAttribute('ward-type', this.getAttribute('ward-type') == 'observer' ? 'sentry' : 'observer');
            }
            if (this.getAttribute('ward-type') == 'sentry') {
                document.querySelector('input[name="mode"][value="ward"]').checked = true;
                document.querySelector('input[name="ward-type"][value="sentry"]').checked = true;
            }
            else {
                document.querySelector('input[name="mode"][value="ward"]').checked = true;
                document.querySelector('input[name="ward-type"][value="observer"]').checked = true;
            }
            this.classList.add('active');
            document.getElementById('btn-tree').classList.remove('active');
            document.getElementById('btn-measure').classList.remove('active');
            changeMode('ward');
        });

        document.getElementById('btn-measure').addEventListener('click', function () {
            if (this.classList.contains('active')) {
                this.setAttribute('measure-type', this.getAttribute('measure-type') == 'line' ? 'circle' : 'line');
            }
            if (this.getAttribute('measure-type') == 'circle') {
                document.querySelector('input[name="mode"][value="measure"]').checked = true;
                document.querySelector('input[name="measure-type"][value="circle"]').checked = true;
            }
            else {
                document.querySelector('input[name="mode"][value="measure"]').checked = true;
                document.querySelector('input[name="measure-type"][value="line"]').checked = true;
            }
            this.classList.add('active');
            document.getElementById('btn-tree').classList.remove('active');
            document.getElementById('btn-ward').classList.remove('active');
            changeMode('measure');
        });
    }
}

module.exports = App;
},{"./InteractiveMap":2,"./controls/creepControl":4,"./controls/cursorControl":5,"./controls/infoControl":6,"./controls/measureControl":7,"./controls/menuControl":8,"./controls/notificationControl":9,"./controls/treeControl":10,"./controls/visionControl":11,"./controls/wardControl":12,"./mapConstants":20,"./projections":21,"./rollbar":22,"./util/forEach":26,"./util/queryString":29,"dota-vision-simulation":35,"dota-vision-simulation/src/worlddata.json":36,"openlayers":19}],18:[function(require,module,exports){
var ol = require('openlayers');
var styles = require('./styleDefinitions');
var proj = require('./projections');

var layerDefinitions = [
    {
        id: 'path_corner',
        name: 'Lanes',
        filename: 'path_corner.json',
        type: 'GeoJSON',
        group: 'overlay',
        projection: proj.dota,
        style: styles.teamColor
    },
    {
        id: 'npc_dota_spawner',
        name: 'Lane Spawns',
        filename: 'npc_dota_spawner.json',
        type: 'GeoJSON',
        group: 'overlay',
        projection: proj.dota,
        style: styles.creepSpawn
    },
    {
        id: 'ent_fow_blocker_node',
        name: 'Vision Blocker',
        filename: 'ent_fow_blocker_node2.json',
        type: 'GeoJSON',
        group: 'overlay',
        style: new ol.style.Style({
            fill: new ol.style.Fill({color: [0, 0, 255, 0.3]}),
            stroke: new ol.style.Stroke({color: [0, 0, 255, 0.8]})
        })
    },
    {
        id: 'no_wards',
        name: 'Invalid Wards',
        filename: 'no_wards2.json',
        type: 'GeoJSON',
        group: 'overlay',
        style: new ol.style.Style({
            fill: new ol.style.Fill({color: [255, 0, 0, 0.3]}),
            stroke: new ol.style.Stroke({color: [255, 0, 0, 0.8]})
        })
    },
    {
        id: 'trigger_multiple',
        name: 'Spawn Boxes',
        type: 'polygon',
        group: 'overlay',
        style: new ol.style.Style({
            fill: new ol.style.Fill({color: [0, 255, 125, 0.3]}),
            stroke: new ol.style.Stroke({color: [0, 255, 125, 0.8]})
        })
    },
    {
        id: 'npc_dota_neutral_spawner',
        name: 'Neutral Camps',
        group: 'object',
        style: function (feature, resolution) {
            return styles.neutralCamp[parseInt(feature.get('dotaProps').neutralType)]
        }
    },
    {
        id: 'ent_dota_tree',
        name: 'Trees',
        group: 'object',
        style:  function (feature, resolution) {
            if (feature.get('isCut')) {
                return styles.tree.dead;
            }
            else {
                return styles.tree.alive;
            }
        },
        toggle: true
    },
    {
        id: 'npc_dota_roshan_spawner',
        name: 'Roshan',
        group: 'object',
        style: styles.roshan
    },
    {
        id: 'dota_item_rune_spawner_powerup',
        name: 'Runes',
        group: 'object',
        style: styles.rune
    },
    {
        id: 'dota_item_rune_spawner_bounty',
        name: 'Bounty Runes',
        group: 'object',
        style: styles.bountyRune
    },
    {
        id: 'ent_dota_fountain',
        name: 'Fountain',
        group: 'structure',
        style: styles.ent_dota_fountain,
        toggle: true
    },
    {
        id: 'npc_dota_barracks',
        name: 'Barracks',
        group: 'structure',
        style: styles.npc_dota_barracks,
        toggle: true
    },
    {
        id: 'npc_dota_filler',
        name: 'Buildings',
        group: 'structure',
        style: styles.npc_dota_filler,
        toggle: true
    },
    {
        id: 'npc_dota_tower',
        name: 'Towers',
        group: 'structure',
        style: styles.npc_dota_tower,
        toggle: true
    },
    {
        id: 'ent_dota_shop',
        name: 'Shops',
        group: 'structure',
        style: styles.ent_dota_shop
    },
    {
        id: 'npc_dota_fort',
        name: 'Ancients',
        group: 'structure',
        style: styles.npc_dota_fort,
        toggle: true
    },
    {
        id: 'npc_dota_healer',
        name: 'Shrines',
        group: 'structure',
        style: styles.npc_dota_healer,
        toggle: true
    },
    {
        id: 'pullRange',
        name: 'Pull Range',
        type: 'pullRange',
        group: 'overlay',
        style: styles.pullRange,
        visible: true
    }
];

module.exports = layerDefinitions;
},{"./projections":21,"./styleDefinitions":23,"openlayers":19}],19:[function(require,module,exports){
(function (global){
// OpenLayers 3. See https://openlayers.org/
// License: https://raw.githubusercontent.com/openlayers/ol3/master/LICENSE.md
;(function (root, factory) {
  if (typeof exports === "object") {
    module.exports = factory();
  } else if (typeof define === "function" && define.amd) {
    define([], factory);
  } else {
    root.ol = factory();
  }
}(this, function () {
  var OPENLAYERS = {};
  var p,aa=this;function t(a,b){var c=a.split("."),d=OPENLAYERS||aa;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d[e]?d=d[e]:d=d[e]={}:d[e]=b};var ba;function z(a,b){a.prototype=Object.create(b.prototype);a.prototype.constructor=a}function da(){}function A(a){return a.Ne||(a.Ne=++ea)}var ea=0;function fa(a){this.message="Assertion failed. See /doc/errors/#"+a+" for details.";this.code=a;this.name="AssertionError"}z(fa,Error);function C(a,b){if(!a)throw new fa(b);};function ga(a,b,c){return Math.min(Math.max(a,b),c)}var ha=function(){var a;"cosh"in Math?a=Math.cosh:a=function(a){a=Math.exp(a);return(a+1/a)/2};return a}();function ia(a){C(0<a,29);return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function ja(a,b){var c=a%b;return 0>c*b?c+b:c};function ka(a){return function(b){if(b)return[ga(b[0],a[0],a[2]),ga(b[1],a[1],a[3])]}}function la(a){return a};function ma(a,b,c){this.center=a;this.resolution=b;this.rotation=c};var na="function"===typeof Object.assign?Object.assign:function(a,b){if(!a||!a)throw new TypeError("Cannot convert undefined or null to object");for(var c=Object(a),d=1,e=arguments.length;d<e;++d){var f=arguments[d];if(void 0!==f&&null!==f)for(var g in f)f.hasOwnProperty(g)&&(c[g]=f[g])}return c};function oa(a){for(var b in a)delete a[b]}function pa(a){var b=[],c;for(c in a)b.push(a[c]);return b}function qa(a){for(var b in a)return!1;return!b};function ra(a){function b(b){var d=a.listener,e=a.Kc||a.target;a.Nc&&D(a);return d.call(e,b)}return a.Lc=b}function sa(a,b,c,d){for(var e,f=0,g=a.length;f<g;++f)if(e=a[f],e.listener===b&&e.Kc===c)return d&&(e.deleteIndex=f),e}function ua(a,b){var c=a.ja;return c?c[b]:void 0}function va(a){var b=a.ja;b||(b=a.ja={});return b}
function wa(a,b){var c=ua(a,b);if(c){for(var d=0,e=c.length;d<e;++d)a.removeEventListener(b,c[d].Lc),oa(c[d]);c.length=0;if(c=a.ja)delete c[b],0===Object.keys(c).length&&delete a.ja}}function E(a,b,c,d,e){var f=va(a),g=f[b];g||(g=f[b]=[]);(f=sa(g,c,d,!1))?e||(f.Nc=!1):(f={Kc:d,Nc:!!e,listener:c,target:a,type:b},a.addEventListener(b,ra(f)),g.push(f));return f}function xa(a,b,c,d){(a=ua(a,b))&&(c=sa(a,c,d,!0))&&D(c)}
function D(a){if(a&&a.target){a.target.removeEventListener(a.type,a.Lc);var b=ua(a.target,a.type);if(b){var c="deleteIndex"in a?a.deleteIndex:b.indexOf(a);-1!==c&&b.splice(c,1);0===b.length&&wa(a.target,a.type)}oa(a)}}function ya(a){var b=va(a),c;for(c in b)wa(a,c)};function za(){}za.prototype.xa=!1;function Aa(a){a.xa||(a.xa=!0,a.Z())}za.prototype.Z=da;function Ba(a){this.type=a;this.target=null}Ba.prototype.preventDefault=Ba.prototype.stopPropagation=function(){this.Ve=!0};function Da(a){a.stopPropagation()};function Ea(){this.Y={};this.F={};this.D={}}z(Ea,za);Ea.prototype.addEventListener=function(a,b){var c=this.D[a];c||(c=this.D[a]=[]);-1===c.indexOf(b)&&c.push(b)};function H(a,b){var c="string"===typeof b?new Ba(b):b,d=c.type;c.target=a;var e=a.D[d],f;if(e){d in a.F||(a.F[d]=0,a.Y[d]=0);++a.F[d];for(var g=0,h=e.length;g<h;++g)if(!1===e[g].call(a,c)||c.Ve){f=!1;break}--a.F[d];if(0===a.F[d]){c=a.Y[d];for(delete a.Y[d];c--;)a.removeEventListener(d,da);delete a.F[d]}return f}}Ea.prototype.Z=function(){ya(this)};
function Fa(a,b){return b?b in a.D:0<Object.keys(a.D).length}Ea.prototype.removeEventListener=function(a,b){var c=this.D[a];if(c){var d=c.indexOf(b);a in this.Y?(c[d]=da,++this.Y[a]):(c.splice(d,1),0===c.length&&delete this.D[a])}};function Ga(){Ea.call(this);this.c=0}z(Ga,Ea);Ga.prototype.v=function(){++this.c;H(this,"change")};Ga.prototype.ka=function(a,b,c){if(Array.isArray(a)){for(var d=a.length,e=Array(d),f=0;f<d;++f)e[f]=E(this,a[f],b,c);return e}return E(this,a,b,c)};function Ha(a){Ga.call(this);A(this);this.o={};void 0!==a&&Ia(this,a)}z(Ha,Ga);var Ja={};function Ka(a){return Ja.hasOwnProperty(a)?Ja[a]:Ja[a]="change:"+a}Ha.prototype.get=function(a){var b;this.o.hasOwnProperty(a)&&(b=this.o[a]);return b};Ha.prototype.set=function(a,b,c){c?this.o[a]=b:(c=this.o[a],this.o[a]=b,c!==b&&(b=Ka(a),H(this,new La(b,a,c)),b=Ma,H(this,new La(b,a,c))))};function Ia(a,b){for(var c in b)a.set(c,b[c],void 0)}var Ma="propertychange";
function La(a,b,c){Ba.call(this,a);this.key=b;this.oldValue=c}z(La,Ba);function Na(a,b){return a>b?1:a<b?-1:0}function Oa(a,b,c){var d=a.length;if(a[0]<=b)return 0;if(!(b<=a[d-1]))if(0<c)for(c=1;c<d;++c){if(a[c]<b)return c-1}else if(0>c)for(c=1;c<d;++c){if(a[c]<=b)return c}else for(c=1;c<d;++c){if(a[c]==b)return c;if(a[c]<b)return a[c-1]-b<b-a[c]?c-1:c}return d-1}function Pa(a,b){var c,d=Array.isArray(b)?b:[b],e=d.length;for(c=0;c<e;c++)a[a.length]=d[c]}function Qa(a,b){var c=a.length;if(c!==b.length)return!1;for(var d=0;d<c;d++)if(a[d]!==b[d])return!1;return!0}
function Ra(a){var b=Sa,c=a.length,d=Array(a.length),e;for(e=0;e<c;e++)d[e]={index:e,value:a[e]};d.sort(function(a,c){return b(a.value,c.value)||a.index-c.index});for(e=0;e<a.length;e++)a[e]=d[e].value}function Ta(a,b){var c=b||Na;return a.every(function(b,e){if(0===e)return!0;var f=c(a[e-1],b);return!(0<f||0===f)})};function Ua(a){return function(b,c,d){if(void 0!==b)return b=Oa(a,b,d),b=ga(b+c,0,a.length-1),c=Math.floor(b),b!=c&&c<a.length-1?a[c]/Math.pow(a[c]/a[c+1],b-c):a[c]}}function Va(a,b,c){return function(d,e,f){if(void 0!==d)return d=Math.max(Math.floor(Math.log(b/d)/Math.log(a)+(-f/2+.5))+e,0),void 0!==c&&(d=Math.min(d,c)),b/Math.pow(a,d)}};function Wa(a){if(void 0!==a)return 0}function Xa(a,b){if(void 0!==a)return a+b}function Ya(a){var b=2*Math.PI/a;return function(a,d){if(void 0!==a)return a=Math.floor((a+d)/b+.5)*b}}function Za(){var a=5*Math.PI/180;return function(b,c){if(void 0!==b)return Math.abs(b+c)<=a?0:b+c}};function ab(a){a=""+a;var b=a.indexOf("."),b=-1===b?a.length:b;return 2<b?a:Array(3-b).join("0")+a};function bb(a,b){var c=Math.cos(b),d=Math.sin(b),e=a[1]*c+a[0]*d;a[0]=a[0]*c-a[1]*d;a[1]=e};function cb(a){return 1-Math.pow(1-a,3)}function db(a){return 3*a*a-2*a*a*a}function eb(a){return a};function fb(a){for(var b=gb(),c=0,d=a.length;c<d;++c)hb(b,a[c]);return b}function ib(a,b,c){return c?(c[0]=a[0]-b,c[1]=a[1]-b,c[2]=a[2]+b,c[3]=a[3]+b,c):[a[0]-b,a[1]-b,a[2]+b,a[3]+b]}function jb(a,b){return b?(b[0]=a[0],b[1]=a[1],b[2]=a[2],b[3]=a[3],b):a.slice()}function kb(a,b){return a[0]<=b[0]&&b[2]<=a[2]&&a[1]<=b[1]&&b[3]<=a[3]}function lb(a,b,c){return a[0]<=b&&b<=a[2]&&a[1]<=c&&c<=a[3]}function gb(){return[Infinity,Infinity,-Infinity,-Infinity]}
function mb(a,b,c,d,e){return e?(e[0]=a,e[1]=b,e[2]=c,e[3]=d,e):[a,b,c,d]}function nb(a){return mb(Infinity,Infinity,-Infinity,-Infinity,a)}function ob(a,b){var c=a[0],d=a[1];return mb(c,d,c,d,b)}function pb(a,b){return a[0]==b[0]&&a[2]==b[2]&&a[1]==b[1]&&a[3]==b[3]}function qb(a,b){b[0]<a[0]&&(a[0]=b[0]);b[2]>a[2]&&(a[2]=b[2]);b[1]<a[1]&&(a[1]=b[1]);b[3]>a[3]&&(a[3]=b[3])}function hb(a,b){b[0]<a[0]&&(a[0]=b[0]);b[0]>a[2]&&(a[2]=b[0]);b[1]<a[1]&&(a[1]=b[1]);b[1]>a[3]&&(a[3]=b[1])}
function rb(a,b,c,d,e){for(;c<d;c+=e){var f=a,g=b[c],h=b[c+1];f[0]=Math.min(f[0],g);f[1]=Math.min(f[1],h);f[2]=Math.max(f[2],g);f[3]=Math.max(f[3],h)}return a}function sb(a){var b=0;a[2]<a[0]||a[3]<a[1]||(b=tb(a)*ub(a));return b}function vb(a){return[(a[0]+a[2])/2,(a[1]+a[3])/2]}
function wb(a,b,c,d,e){var f=b*d[0]/2;d=b*d[1]/2;b=Math.cos(c);var g=Math.sin(c);c=f*b;f*=g;b*=d;var h=d*g,k=a[0],l=a[1];a=k-c+h;d=k-c-h;g=k+c-h;c=k+c+h;var h=l-f-b,k=l-f+b,n=l+f+b,f=l+f-b;return mb(Math.min(a,d,g,c),Math.min(h,k,n,f),Math.max(a,d,g,c),Math.max(h,k,n,f),e)}function ub(a){return a[3]-a[1]}function xb(a,b){var c=gb();yb(a,b)&&(c[0]=a[0]>b[0]?a[0]:b[0],c[1]=a[1]>b[1]?a[1]:b[1],c[2]=a[2]<b[2]?a[2]:b[2],c[3]=a[3]<b[3]?a[3]:b[3]);return c}function tb(a){return a[2]-a[0]}
function yb(a,b){return a[0]<=b[2]&&a[2]>=b[0]&&a[1]<=b[3]&&a[3]>=b[1]};function Ab(){return!0}function Bb(){return!1};/*

 Latitude/longitude spherical geodesy formulae taken from
 http://www.movable-type.co.uk/scripts/latlong.html
 Licensed under CC-BY-3.0.
*/
function Cb(a){this.radius=a}function Db(a,b){var c=a[1]*Math.PI/180,d=b[1]*Math.PI/180,e=(d-c)/2,f=(b[0]-a[0])*Math.PI/180/2,c=Math.sin(e)*Math.sin(e)+Math.sin(f)*Math.sin(f)*Math.cos(c)*Math.cos(d);return 2*Eb.radius*Math.atan2(Math.sqrt(c),Math.sqrt(1-c))}
Cb.prototype.offset=function(a,b,c){var d=a[1]*Math.PI/180;b/=this.radius;var e=Math.asin(Math.sin(d)*Math.cos(b)+Math.cos(d)*Math.sin(b)*Math.cos(c));return[180*(a[0]*Math.PI/180+Math.atan2(Math.sin(c)*Math.sin(b)*Math.cos(d),Math.cos(b)-Math.sin(d)*Math.sin(e)))/Math.PI,180*e/Math.PI]};var Eb=new Cb(6370997);var Fb={};Fb.degrees=2*Math.PI*Eb.radius/360;Fb.ft=.3048;Fb.m=1;Fb["us-ft"]=1200/3937;function Gb(a){this.a=a.code;this.b=a.units;this.i=void 0!==a.extent?a.extent:null;this.f=void 0!==a.global?a.global:!1;this.c=!(!this.f||!this.i);this.j=a.getPointResolution;this.g=null;this.o=a.metersPerUnit;var b=a.code,c=window.proj4;"function"==typeof c&&(b=c.ec(b),void 0!==b&&(void 0===a.metersPerUnit&&(this.o=b.Jf),void 0===a.units&&(this.b=b.units)))}Gb.prototype.M=function(){return this.i};function Hb(a){return a.o||Fb[a.b]};var Ib={};var Jb={};function Kb(a,b,c){a=a.a;b=b.a;a in Jb||(Jb[a]={});Jb[a][b]=c}function Lb(a,b){var c;a in Jb&&b in Jb[a]&&(c=Jb[a][b]);return c};function Mb(a,b,c){var d=a.j;d?b=d(b,c):"degrees"!=a.b&&(d=Nb(a,Ob("EPSG:4326")),b=[c[0]-b/2,c[1],c[0]+b/2,c[1],c[0],c[1]-b/2,c[0],c[1]+b/2],b=d(b,b,2),b=(Db(b.slice(0,2),b.slice(2,4))+Db(b.slice(4,6),b.slice(6,8)))/2,a=Hb(a),void 0!==a&&(b/=a));return b}function Pb(a){Qb(a);a.forEach(function(b){a.forEach(function(a){b!==a&&Kb(b,a,Rb)})})}function Sb(a){Ib[a.a]=a;Kb(a,a,Rb)}function Qb(a){var b=[];a.forEach(function(a){b.push(Sb(a))})}
function Tb(a){return a?"string"===typeof a?Ob(a):a:Ob("EPSG:3857")}function Ub(a,b,c,d){a=Ob(a);b=Ob(b);Kb(a,b,Vb(c));Kb(b,a,Vb(d))}function Vb(a){return function(b,c,d){var e=b.length;d=void 0!==d?d:2;c=void 0!==c?c:Array(e);var f,g;for(g=0;g<e;g+=d)for(f=a([b[g],b[g+1]]),c[g]=f[0],c[g+1]=f[1],f=d-1;2<=f;--f)c[g+f]=b[g+f];return c}}
function Ob(a){var b=null;if(a instanceof Gb)b=a;else if("string"===typeof a){var b=Ib[a]||null,c=window.proj4;b||"function"!=typeof c||void 0===c.ec(a)||(b=new Gb({code:a}),Sb(b))}return b}function Xb(a,b){if(a===b)return!0;var c=a.b===b.b;return a.a===b.a?c:Nb(a,b)===Rb&&c}function Yb(a,b){var c=Ob(a),d=Ob(b);return Nb(c,d)}
function Nb(a,b){var c=a.a,d=b.a,e=Lb(c,d);if(!e){var f=window.proj4;if("function"==typeof f){var g=f.ec(c),h=f.ec(d);void 0!==g&&void 0!==h&&(g===h?Pb([b,a]):(e=f(d,c),Ub(b,a,e.forward,e.inverse)),e=Lb(c,d))}}e||(e=Zb);return e}function Zb(a,b){if(void 0!==b&&a!==b){for(var c=0,d=a.length;c<d;++c)b[c]=a[c];a=b}return a}function Rb(a,b){var c;if(void 0!==b){c=0;for(var d=a.length;c<d;++c)b[c]=a[c];c=b}else c=a.slice();return c}function $b(a,b,c){return Yb(b,c)(a,void 0,a.length)}
function ac(a,b,c){b=Yb(b,c);a=[a[0],a[1],a[0],a[3],a[2],a[1],a[2],a[3]];b(a,a,2);c=[a[0],a[2],a[4],a[6]];var d=[a[1],a[3],a[5],a[7]];a=Math.min.apply(null,c);b=Math.min.apply(null,d);c=Math.max.apply(null,c);d=Math.max.apply(null,d);return mb(a,b,c,d,void 0)};function bc(){Ha.call(this);this.u=gb();this.B=-1;this.g={};this.l=this.i=0}z(bc,Ha);bc.prototype.M=function(a){this.B!=this.c&&(this.u=this.Cb(this.u),this.B=this.c);var b=this.u;a?(a[0]=b[0],a[1]=b[1],a[2]=b[2],a[3]=b[3]):a=b;return a};bc.prototype.transform=function(a,b){this.zb(Yb(a,b));return this};function cc(a,b,c,d,e,f){for(var g=f?f:[],h=0;b<c;b+=d){var k=a[b],l=a[b+1];g[h++]=e[0]*k+e[2]*l+e[4];g[h++]=e[1]*k+e[3]*l+e[5]}f&&g.length!=h&&(g.length=h);return g}function dc(a,b,c,d,e,f){var g=f?f:[],h=0,k,l;for(k=0;k<b;k+=c)for(g[h++]=a[k]+d,g[h++]=a[k+1]+e,l=k+2;l<k+c;++l)g[h++]=a[l];f&&g.length!=h&&(g.length=h);return g};function ec(){bc.call(this);this.X="XY";this.a=2;this.s=null}z(ec,bc);function fc(a){var b;"XY"==a?b=2:"XYZ"==a||"XYM"==a?b=3:"XYZM"==a&&(b=4);return b}p=ec.prototype;p.Cb=function(a){var b=this.s,c=this.s.length,d=this.a;a=nb(a);return rb(a,b,0,c,d)};p.Uc=function(){return this.s.slice(this.s.length-this.a)};
p.kc=function(a){this.l!=this.c&&(oa(this.g),this.i=0,this.l=this.c);if(0>a||0!==this.i&&a<=this.i)return this;var b=a.toString();if(this.g.hasOwnProperty(b))return this.g[b];var c=this.Ua(a);if(c.s.length<this.s.length)return this.g[b]=c;this.i=a;return this};p.Ua=function(){return this};function gc(a,b,c){a.a=fc(b);a.X=b;a.s=c}
function hc(a,b,c,d){if(b)c=fc(b);else{for(b=0;b<d;++b){if(0===c.length){a.X="XY";a.a=2;return}c=c[0]}c=c.length;var e;2==c?e="XY":3==c?e="XYZ":4==c&&(e="XYZM");b=e}a.X=b;a.a=c}p.zb=function(a){this.s&&(a(this.s,this.s,this.a),this.v())};p.rotate=function(a,b){var c=this.s;if(c){for(var d=c.length,e=this.a,f=c?c:[],g=Math.cos(a),h=Math.sin(a),k=b[0],l=b[1],n=0,m=0;m<d;m+=e){var q=c[m]-k,r=c[m+1]-l;f[n++]=k+q*g-r*h;f[n++]=l+q*h+r*g;for(q=m+2;q<m+e;++q)f[n++]=c[q]}c&&f.length!=n&&(f.length=n);this.v()}};
p.scale=function(a,b,c){var d=b;void 0===d&&(d=a);var e=c;e||(e=vb(this.M()));if(c=this.s){b=c.length;for(var f=this.a,g=c?c:[],h=e[0],e=e[1],k=0,l=0;l<b;l+=f){var n=c[l]-h,m=c[l+1]-e;g[k++]=h+a*n;g[k++]=e+d*m;for(n=l+2;n<l+f;++n)g[k++]=c[n]}c&&g.length!=k&&(g.length=k);this.v()}};p.translate=function(a,b){var c=this.s;c&&(dc(c,c.length,this.a,a,b,c),this.v())};function ic(a,b){var c=0,d,e;d=0;for(e=b.length;d<e;++d)a[c++]=b[d];return c}function jc(a,b,c,d){var e,f;e=0;for(f=c.length;e<f;++e){var g=c[e],h;for(h=0;h<d;++h)a[b++]=g[h]}return b}function kc(a,b,c,d,e){e=e?e:[];var f=0,g,h;g=0;for(h=c.length;g<h;++g)b=jc(a,b,c[g],d),e[f++]=b;e.length=f;return e};function lc(a,b,c,d,e){e=void 0!==e?e:[];for(var f=0;b<c;b+=d)e[f++]=a.slice(b,b+d);e.length=f;return e}function mc(a,b,c,d,e){e=void 0!==e?e:[];var f=0,g,h;g=0;for(h=c.length;g<h;++g){var k=c[g];e[f++]=lc(a,b,k,d,e[f]);b=k}e.length=f;return e};function nc(a,b,c,d,e,f,g){var h=(c-b)/d;if(3>h){for(;b<c;b+=d)f[g++]=a[b],f[g++]=a[b+1];return g}var k=Array(h);k[0]=1;k[h-1]=1;c=[b,c-d];for(var l=0,n;0<c.length;){var m=c.pop(),q=c.pop(),r=0,u=a[q],v=a[q+1],w=a[m],B=a[m+1];for(n=q+d;n<m;n+=d){var y,I=a[n];y=a[n+1];var J=u,F=v,K=w-J,x=B-F;if(0!==K||0!==x){var L=((I-J)*K+(y-F)*x)/(K*K+x*x);1<L?(J=w,F=B):0<L&&(J+=K*L,F+=x*L)}I=J-I;y=F-y;y=I*I+y*y;y>r&&(l=n,r=y)}r>e&&(k[(l-b)/d]=1,q+d<l&&c.push(q,l),l+d<m&&c.push(l,m))}for(n=0;n<h;++n)k[n]&&(f[g++]=
a[b+n*d],f[g++]=a[b+n*d+1]);return g}
function oc(a,b,c,d,e,f,g,h){var k,l;k=0;for(l=c.length;k<l;++k){var n=c[k];a:{var m=a,q=n,r=d,u=e,v=f;if(b!=q){var w=u*Math.round(m[b]/u),B=u*Math.round(m[b+1]/u);b+=r;v[g++]=w;v[g++]=B;var y,I;do if(y=u*Math.round(m[b]/u),I=u*Math.round(m[b+1]/u),b+=r,b==q){v[g++]=y;v[g++]=I;break a}while(y==w&&I==B);for(;b<q;){var J,F;J=u*Math.round(m[b]/u);F=u*Math.round(m[b+1]/u);b+=r;if(J!=y||F!=I){var K=y-w,x=I-B,L=J-w,P=F-B;K*P==x*L&&(0>K&&L<K||K==L||0<K&&L>K)&&(0>x&&P<x||x==P||0<x&&P>x)||(v[g++]=y,v[g++]=
I,w=y,B=I);y=J;I=F}}v[g++]=y;v[g++]=I}}h.push(g);b=n}return g};function pc(a,b){ec.call(this);this.ea(a,b)}z(pc,ec);p=pc.prototype;p.clone=function(){var a=new pc(null);gc(a,this.X,this.s.slice());a.v();return a};p.ua=function(){return lc(this.s,0,this.s.length,this.a)};p.Ua=function(a){var b=[];b.length=nc(this.s,0,this.s.length,this.a,a,b,0);a=new pc(null);gc(a,"XY",b);a.v();return a};p.$=function(){return"LinearRing"};p.ea=function(a,b){a?(hc(this,b,a,1),this.s||(this.s=[]),this.s.length=jc(this.s,0,a,this.a)):gc(this,"XY",null);this.v()};function qc(a,b){ec.call(this);this.ea(a,b)}z(qc,ec);p=qc.prototype;p.clone=function(){var a=new qc(null);a.U(this.X,this.s.slice());return a};p.ua=function(){return this.s?this.s.slice():[]};p.Cb=function(a){return ob(this.s,a)};p.$=function(){return"Point"};p.ea=function(a,b){a?(hc(this,b,a,0),this.s||(this.s=[]),this.s.length=ic(this.s,a),this.v()):this.U("XY",null)};p.U=function(a,b){gc(this,a,b);this.v()};function rc(a,b,c,d,e,f){for(var g=0,h=a[c-d],k=a[c-d+1];b<c;b+=d){var l=a[b],n=a[b+1];k<=f?n>f&&0<(l-h)*(f-k)-(e-h)*(n-k)&&g++:n<=f&&0>(l-h)*(f-k)-(e-h)*(n-k)&&g--;h=l;k=n}return 0!==g};function sc(a,b,c,d,e,f,g){var h,k,l,n,m,q=e[f+1],r=[],u=c[0];l=a[u-d];m=a[u-d+1];for(h=b;h<u;h+=d){n=a[h];k=a[h+1];if(q<=m&&k<=q||m<=q&&q<=k)l=(q-m)/(k-m)*(n-l)+l,r.push(l);l=n;m=k}u=NaN;m=-Infinity;r.sort(Na);l=r[0];h=1;for(k=r.length;h<k;++h){n=r[h];var v=Math.abs(n-l);if(v>m){l=(l+n)/2;var w;a:if(0!==c.length&&rc(a,b,c[0],d,l,q)){var B;w=1;for(B=c.length;w<B;++w)if(rc(a,c[w-1],c[w],d,l,q)){w=!1;break a}w=!0}else w=!1;w&&(u=l,m=v)}l=n}isNaN(u)&&(u=e[f]);return g?(g.push(u,q),g):[u,q]};function tc(a,b,c,d){for(var e=0,f=a[c-d],g=a[c-d+1];b<c;b+=d)var h=a[b],k=a[b+1],e=e+(h-f)*(k+g),f=h,g=k;return 0<e}function uc(a,b,c,d){var e=0;d=void 0!==d?d:!1;var f,g;f=0;for(g=b.length;f<g;++f){var h=b[f],e=tc(a,e,h,c);if(0===f){if(d&&e||!d&&!e)return!1}else if(d&&!e||!d&&e)return!1;e=h}return!0}
function vc(a,b,c,d,e){e=void 0!==e?e:!1;var f,g;f=0;for(g=c.length;f<g;++f){var h=c[f],k=tc(a,b,h,d);if(0===f?e&&k||!e&&!k:e&&!k||!e&&k)for(var k=a,l=h,n=d;b<l-n;){var m;for(m=0;m<n;++m){var q=k[b+m];k[b+m]=k[l-n+m];k[l-n+m]=q}b+=n;l-=n}b=h}return b}function wc(a,b,c,d){var e=0,f,g;f=0;for(g=b.length;f<g;++f)e=vc(a,e,b[f],c,d);return e};function xc(a,b){ec.call(this);this.f=[];this.A=-1;this.C=null;this.G=-1;this.j=null;this.ea(a,b)}z(xc,ec);p=xc.prototype;p.Ld=function(a){this.s?Pa(this.s,a.s):this.s=a.s.slice();this.f.push(this.s.length);this.v()};p.clone=function(){var a=new xc(null);a.U(this.X,this.s.slice(),this.f.slice());return a};p.ua=function(a){var b;void 0!==a?(b=yc(this).slice(),vc(b,0,this.f,this.a,a)):b=this.s;return mc(b,0,this.f,this.a)};p.Ta=function(){return this.f};
function zc(a){if(a.A!=a.c){var b=vb(a.M());a.C=sc(yc(a),0,a.f,a.a,b,0);a.A=a.c}return a.C}function Ac(a){var b=a.X,c=a.s;a=a.f;var d=[],e=0,f,g;f=0;for(g=a.length;f<g;++f){var h=a[f],k=new pc(null),l=k;gc(l,b,c.slice(e,h));l.v();d.push(k);e=h}return d}function yc(a){if(a.G!=a.c){var b=a.s;uc(b,a.f,a.a)?a.j=b:(a.j=b.slice(),a.j.length=vc(a.j,0,a.f,a.a));a.G=a.c}return a.j}p.Ua=function(a){var b=[],c=[];b.length=oc(this.s,0,this.f,this.a,Math.sqrt(a),b,0,c);a=new xc(null);a.U("XY",b,c);return a};
p.$=function(){return"Polygon"};p.ea=function(a,b){if(a){hc(this,b,a,2);this.s||(this.s=[]);var c=kc(this.s,0,a,this.a,this.f);this.s.length=0===c.length?0:c[c.length-1];this.v()}else this.U("XY",null,this.f)};p.U=function(a,b,c){gc(this,a,b);this.f=c;this.v()};function Bc(a){Ha.call(this);a=a||{};this.g=[0,0];this.a=[];this.Sb=this.Sb.bind(this);var b={};b[Cc]=void 0!==a.center?a.center:null;this.B=Tb(a.projection);var c,d,e,f=void 0!==a.minZoom?a.minZoom:0;c=void 0!==a.maxZoom?a.maxZoom:28;var g=void 0!==a.zoomFactor?a.zoomFactor:2;if(void 0!==a.resolutions)c=a.resolutions,d=c[0],e=c[c.length-1],c=Ua(c);else{d=Tb(a.projection);e=d.M();var h=(e?Math.max(tb(e),ub(e)):360*Fb.degrees/Hb(d))/256/Math.pow(2,0),k=h/Math.pow(2,28);d=a.maxResolution;void 0!==d?
f=0:d=h/Math.pow(g,f);e=a.minResolution;void 0===e&&(e=void 0!==a.maxZoom?void 0!==a.maxResolution?d/Math.pow(g,c):h/Math.pow(g,c):k);c=f+Math.floor(Math.log(d/e)/Math.log(g));e=d/Math.pow(g,c-f);c=Va(g,d,c-f)}this.b=d;this.u=e;this.A=g;this.i=a.resolutions;this.j=f;f=void 0!==a.extent?ka(a.extent):la;(void 0!==a.enableRotation?a.enableRotation:1)?(g=a.constrainRotation,g=void 0===g||!0===g?Za():!1===g?Xa:"number"===typeof g?Ya(g):Xa):g=Wa;this.f=new ma(f,c,g);void 0!==a.resolution?b[Dc]=a.resolution:
void 0!==a.zoom&&(b[Dc]=this.constrainResolution(this.b,a.zoom-this.j));b[Ec]=void 0!==a.rotation?a.rotation:0;Ia(this,b)}z(Bc,Ha);p=Bc.prototype;
p.animate=function(a){var b=Date.now(),c=this.get(Cc).slice(),d=Fc(this),e=this.get(Ec),f=arguments.length,g;1<f&&"function"===typeof arguments[f-1]&&(g=arguments[f-1],--f);for(var h=[],k=0;k<f;++k){var l=arguments[k],n={start:b,complete:!1,anchor:l.anchor,duration:void 0!==l.duration?l.duration:1E3,easing:l.easing||db};l.center&&(n.vc=c,n.xc=l.center,c=n.xc);void 0!==l.zoom?(n.Pb=d,n.Qb=this.constrainResolution(this.b,l.zoom-this.j,0),d=n.Qb):l.resolution&&(n.Pb=d,n.Qb=l.resolution,d=n.Qb);void 0!==
l.rotation&&(n.wc=e,n.rd=l.rotation,e=n.rd);n.Bb=g;b+=n.duration;h.push(n)}this.a.push(h);Gc(this,Hc,1);this.Sb()};function Ic(a){return 0<Jc(a)[Hc]}function Kc(a){Gc(a,Hc,-Jc(a)[Hc]);for(var b=0,c=a.a.length;b<c;++b){var d=a.a[b];d[0].Bb&&d[0].Bb(!1)}a.a.length=0}
p.Sb=function(){void 0!==this.l&&(cancelAnimationFrame(this.l),this.l=void 0);if(Ic(this)){for(var a=Date.now(),b=!1,c=this.a.length-1;0<=c;--c){for(var d=this.a[c],e=!0,f=0,g=d.length;f<g;++f){var h=d[f];if(!h.complete){b=a-h.start;b=0<h.duration?b/h.duration:1;1<=b?(h.complete=!0,b=1):e=!1;b=h.easing(b);if(h.vc){var k=h.vc[0],l=h.vc[1];this.set(Cc,[k+b*(h.xc[0]-k),l+b*(h.xc[1]-l)])}h.Pb&&(k=h.Pb+b*(h.Qb-h.Pb),h.anchor&&this.set(Cc,Lc(this,k,h.anchor)),this.set(Dc,k));void 0!==h.wc&&(b=h.wc+b*(h.rd-
h.wc),h.anchor&&this.set(Cc,Mc(this,b,h.anchor)),this.set(Ec,b));b=!0;if(!h.complete)break}}e&&(this.a[c]=null,Gc(this,Hc,-1),(d=d[0].Bb)&&d(!0))}this.a=this.a.filter(Boolean);b&&void 0===this.l&&(this.l=requestAnimationFrame(this.Sb))}};function Mc(a,b,c){var d,e=a.get(Cc);void 0!==e&&(d=[e[0]-c[0],e[1]-c[1]],bb(d,b-a.get(Ec)),a=d,a[0]+=c[0],a[1]+=c[1]);return d}function Lc(a,b,c){var d,e=a.get(Cc);a=Fc(a);void 0!==e&&void 0!==a&&(d=[c[0]-b*(c[0]-e[0])/a,c[1]-b*(c[1]-e[1])/a]);return d}
p.constrainResolution=function(a,b,c){return this.f.resolution(a,b||0,c||0)};p.constrainRotation=function(a,b){return this.f.rotation(a,b||0)};function Jc(a,b){return void 0!==b?(b[0]=a.g[0],b[1]=a.g[1],b):a.g.slice()}p.Mc=function(a){var b=this.get(Cc);C(b,1);var c=Fc(this);C(void 0!==c,2);var d=this.get(Ec);C(void 0!==d,3);return wb(b,c,d,a)};function Fc(a){return a.get(Dc)}
p.aa=function(){var a=this.get(Cc),b=this.B,c=Fc(this),d=this.get(Ec);return{center:a.slice(),projection:void 0!==b?b:null,resolution:c,rotation:d}};p.Td=function(){var a,b=Fc(this);if(void 0!==b&&b>=this.u&&b<=this.b){a=this.j||0;var c,d;if(this.i){d=Oa(this.i,b,1);a+=d;if(d==this.i.length-1)return a;c=this.i[d];d=c/this.i[d+1]}else c=this.b,d=this.A;a+=Math.log(c/b)/Math.log(d)}return a};p.rotate=function(a,b){if(void 0!==b){var c=Mc(this,a,b);Nc(this,c)}this.set(Ec,a);Ic(this)&&Kc(this)};
function Nc(a,b){a.set(Cc,b);Ic(a)&&Kc(a)}function Gc(a,b,c){a.g[b]+=c;a.v()}function Oc(a,b){a.set(Dc,b);Ic(a)&&Kc(a)}p.ff=function(a){a=this.constrainResolution(this.b,a-this.j,0);Oc(this,a)};var Cc="center",Dc="resolution",Ec="rotation",Hc=0;function Pc(a,b,c,d){this.K=a;this.J=b;this.N=c;this.R=d}function Qc(a,b,c){return a.K<=b&&b<=a.J&&a.N<=c&&c<=a.R}function Rc(a,b){return a.K==b.K&&a.N==b.N&&a.J==b.J&&a.R==b.R}function Sc(a,b){return a.K<=b.J&&a.J>=b.K&&a.N<=b.R&&a.R>=b.N};function Tc(a,b){if(Array.isArray(a))return a;void 0===b?b=[a,a]:b[0]=b[1]=a;return b};function Uc(a){this.minZoom=void 0!==a.minZoom?a.minZoom:0;this.a=a.resolutions;C(Ta(this.a,function(a,b){return b-a}),17);this.maxZoom=this.a.length-1;this.b=void 0!==a.origin?a.origin:null;this.f=null;void 0!==a.origins&&(this.f=a.origins,C(this.f.length==this.a.length,20));var b=a.extent;void 0===b||this.b||this.f||(this.b=[b[0],b[3]]);C(!this.b&&this.f||this.b&&!this.f,18);this.g=null;void 0!==a.tileSizes&&(this.g=a.tileSizes,C(this.g.length==this.a.length,19));this.i=void 0!==a.tileSize?a.tileSize:
this.g?null:256;C(!this.i&&this.g||this.i&&!this.g,22);this.j=void 0!==b?b:null;this.c=null;this.o=[0,0];void 0!==a.sizes?this.c=a.sizes.map(function(a){return new Pc(Math.min(0,a[0]),Math.max(a[0]-1,-1),Math.min(0,a[1]),Math.max(a[1]-1,-1))},this):b&&Vc(this,b)}var Wc=[0,0,0];function Xc(a,b,c,d,e){e=Yc(a,b,e);for(b=b[0]-1;b>=a.minZoom;){if(c.call(null,b,Zc(a,e,b,d)))return!0;--b}return!1}Uc.prototype.M=function(){return this.j};function $c(a,b){return a.b?a.b:a.f[b]}
function ad(a,b,c,d){return b[0]<a.maxZoom?(d=Yc(a,b,d),Zc(a,d,b[0]+1,c)):null}function bd(a,b,c,d){cd(a,b[0],b[1],c,!1,Wc);var e=Wc[1],f=Wc[2];cd(a,b[2],b[3],c,!0,Wc);a=Wc[1];b=Wc[2];void 0!==d?(d.K=e,d.J=a,d.N=f,d.R=b):d=new Pc(e,a,f,b);return d}function Zc(a,b,c,d){return bd(a,b,a.a[c],d)}function dd(a,b){var c=$c(a,b[0]),d=a.a[b[0]],e=Tc(ed(a,b[0]),a.o);return[c[0]+(b[1]+.5)*e[0]*d,c[1]+(b[2]+.5)*e[1]*d]}
function Yc(a,b,c){var d=$c(a,b[0]),e=a.a[b[0]];a=Tc(ed(a,b[0]),a.o);var f=d[0]+b[1]*a[0]*e;b=d[1]+b[2]*a[1]*e;return mb(f,b,f+a[0]*e,b+a[1]*e,c)}function cd(a,b,c,d,e,f){var g=fd(a,d),h=d/a.a[g],k=$c(a,g);a=Tc(ed(a,g),a.o);b=h*Math.floor((b-k[0])/d+(e?.5:0))/a[0];c=h*Math.floor((c-k[1])/d+(e?0:.5))/a[1];e?(b=Math.ceil(b)-1,c=Math.ceil(c)-1):(b=Math.floor(b),c=Math.floor(c));e=b;void 0!==f?(f[0]=g,f[1]=e,f[2]=c):f=[g,e,c];return f}function ed(a,b){return a.i?a.i:a.g[b]}
function fd(a,b,c){return ga(Oa(a.a,b,c||0),a.minZoom,a.maxZoom)}function Vc(a,b){for(var c=a.a.length,d=Array(c),e=a.minZoom;e<c;++e)d[e]=Zc(a,b,e);a.c=d};function gd(a){var b=a.g;if(!b){for(var b=hd(a),c=Tc(256),c=Math.max(tb(b)/c[0],ub(b)/c[1]),d=Array(43),e=0;43>e;++e)d[e]=c/Math.pow(2,e);b=new Uc({extent:b,origin:[b[0],b[3]],resolutions:d,tileSize:void 0});a.g=b}return b}function hd(a){a=Ob(a);var b=a.M();b||(a=180*Fb.degrees/Hb(a),b=mb(-a,-a,a,a));return b};function id(a){this.c=a.html;this.a=a.tileRanges?a.tileRanges:null};function jd(a){Ha.call(this);this.a=a?a:[];kd(this)}z(jd,Ha);p=jd.prototype;p.clear=function(){for(;0<this.get(ld);)this.pop()};p.forEach=function(a,b){this.a.forEach(a,b)};p.item=function(a){return this.a[a]};p.pop=function(){return md(this,this.get(ld)-1)};p.push=function(a){var b=this.get(ld);this.a.splice(b,0,a);kd(this);H(this,new nd(od,a));return this.get(ld)};p.remove=function(a){var b=this.a,c,d;c=0;for(d=b.length;c<d;++c)if(b[c]===a)return md(this,c)};
function md(a,b){var c=a.a[b];a.a.splice(b,1);kd(a);H(a,new nd(pd,c));return c}function kd(a){a.set(ld,a.a.length)}var ld="length",od="add",pd="remove";function nd(a,b){Ba.call(this,a);this.element=b}z(nd,Ba);var qd=/^#(?:[0-9a-f]{3}){1,2}$/i,rd=/^([a-z]*)$/i;function sd(a){return Array.isArray(a)?a:td(a)}function ud(a){if("string"!==typeof a){var b=a[0];b!=(b|0)&&(b=b+.5|0);var c=a[1];c!=(c|0)&&(c=c+.5|0);var d=a[2];d!=(d|0)&&(d=d+.5|0);a="rgba("+b+","+c+","+d+","+(void 0===a[3]?1:a[3])+")"}return a}
var td=function(){var a={},b=0;return function(c){var d;if(a.hasOwnProperty(c))d=a[c];else{if(1024<=b){d=0;for(var e in a)0===(d++&3)&&(delete a[e],--b)}d=c;var f;rd.exec(d)&&(e=document.createElement("div"),e.style.color=d,document.body.appendChild(e),d=getComputedStyle(e).color,document.body.removeChild(e));if(qd.exec(d)){f=d.length-1;C(3==f||6==f,54);var g=3==f?1:2;f=parseInt(d.substr(1+0*g,g),16);e=parseInt(d.substr(1+1*g,g),16);d=parseInt(d.substr(1+2*g,g),16);1==g&&(f=(f<<4)+f,e=(e<<4)+e,d=
(d<<4)+d);f=[f,e,d,1]}else 0==d.indexOf("rgba(")?(d=d.slice(5,-1).split(",").map(Number),f=vd(d)):0==d.indexOf("rgb(")?(d=d.slice(4,-1).split(",").map(Number),d.push(1),f=vd(d)):C(!1,14);d=f;a[c]=d;++b}return d}}();function vd(a){var b=[];b[0]=ga(a[0]+.5|0,0,255);b[1]=ga(a[1]+.5|0,0,255);b[2]=ga(a[2]+.5|0,0,255);b[3]=ga(a[3],0,1);return b};function wd(a){return"string"===typeof a||a instanceof CanvasPattern||a instanceof CanvasGradient?a:ud(a)};function xd(a,b){var c=document.createElement("CANVAS");a&&(c.width=a);b&&(c.height=b);return c.getContext("2d")}function yd(a){a&&a.parentNode&&a.parentNode.removeChild(a)};function zd(a,b,c){Ba.call(this,a);this.map=b;this.frameState=void 0!==c?c:null}z(zd,Ba);function Ad(a){Ha.call(this);this.element=a.element?a.element:null;this.l=this.G=null;this.u=[];this.render=a.render?a.render:da;a.target&&(a=a.target,this.G="string"===typeof a?document.getElementById(a):a)}z(Ad,Ha);Ad.prototype.Z=function(){yd(this.element);Ha.prototype.Z.call(this)};
Ad.prototype.setMap=function(a){this.l&&yd(this.element);for(var b=0,c=this.u.length;b<c;++b)D(this.u[b]);this.u.length=0;if(this.l=a)(this.G?this.G:a.l).appendChild(this.element),this.render!==da&&this.u.push(E(a,"postrender",this.render,this)),a.render()};function Bd(a){a=a?a:{};this.C=document.createElement("UL");this.g=document.createElement("LI");this.C.appendChild(this.g);this.g.style.display="none";this.f=void 0!==a.collapsed?a.collapsed:!0;this.B=void 0!==a.collapsible?a.collapsible:!0;this.B||(this.f=!1);var b=void 0!==a.className?a.className:"ol-attribution",c=void 0!==a.tipLabel?a.tipLabel:"Attributions",d=void 0!==a.collapseLabel?a.collapseLabel:"\u00bb";"string"===typeof d?(this.i=document.createElement("span"),this.i.textContent=d):this.i=
d;d=void 0!==a.label?a.label:"i";"string"===typeof d?(this.j=document.createElement("span"),this.j.textContent=d):this.j=d;var e=this.B&&!this.f?this.i:this.j,d=document.createElement("button");d.setAttribute("type","button");d.title=c;d.appendChild(e);E(d,"click",this.P,this);c=document.createElement("div");c.className=b+" ol-unselectable ol-control"+(this.f&&this.B?" ol-collapsed":"")+(this.B?"":" ol-uncollapsible");c.appendChild(this.C);c.appendChild(d);Ad.call(this,{element:c,render:a.render?
a.render:Cd,target:a.target});this.A=!0;this.b={};this.a={};this.L={}}z(Bd,Ad);
function Cd(a){if(a=a.frameState){var b,c,d,e,f,g,h,k,l,n,m,q=a.layerStatesArray,r=na({},a.attributions),u={},v={},w=a.viewState.projection;c=0;for(b=q.length;c<b;c++)if(g=q[c].layer.oa())if(n=A(g).toString(),l=g.B)for(d=0,e=l.length;d<e;d++)if(h=l[d],k=A(h).toString(),!(k in r)){if(f=a.usedTiles[n]){var B=g.Ga(w);a:{m=h;var y=w;if(m.a){var I,J,F,K=void 0;for(K in f)if(K in m.a){F=f[K];var x;I=0;for(J=m.a[K].length;I<J;++I){x=m.a[K][I];if(Sc(x,F)){m=!0;break a}var L=Zc(B,hd(y),parseInt(K,10)),P=L.J-
L.K+1;if(F.K<L.K||F.J>L.J)if(Sc(x,new Pc(ja(F.K,P),ja(F.J,P),F.N,F.R))||F.J-F.K+1>P&&Sc(x,L)){m=!0;break a}}}m=!1}else m=!0}}else m=!1;m?(k in u&&delete u[k],m=h.c,m in v||(v[m]=!0,r[k]=h)):u[k]=h}b=[r,u];c=b[0];b=b[1];for(var G in this.b)G in c?(this.a[G]||(this.b[G].style.display="",this.a[G]=!0),delete c[G]):G in b?(this.a[G]&&(this.b[G].style.display="none",delete this.a[G]),delete b[G]):(yd(this.b[G]),delete this.b[G],delete this.a[G]);for(G in c)d=document.createElement("LI"),d.innerHTML=c[G].c,
this.C.appendChild(d),this.b[G]=d,this.a[G]=!0;for(G in b)d=document.createElement("LI"),d.innerHTML=b[G].c,d.style.display="none",this.C.appendChild(d),this.b[G]=d;G=!qa(this.a)||!qa(a.logos);this.A!=G&&(this.element.style.display=G?"":"none",this.A=G);G&&qa(this.a)?this.element.classList.add("ol-logo-only"):this.element.classList.remove("ol-logo-only");var N;a=a.logos;G=this.L;for(N in G)N in a||(yd(G[N]),delete G[N]);for(var U in a)b=a[U],b instanceof HTMLElement&&(this.g.appendChild(b),G[U]=b),
U in G||(N=new Image,N.src=U,""===b?c=N:(c=document.createElement("a"),c.href=b,c.appendChild(N)),this.g.appendChild(c),G[U]=c);this.g.style.display=qa(a)?"none":""}else this.A&&(this.element.style.display="none",this.A=!1)}Bd.prototype.P=function(a){a.preventDefault();this.element.classList.toggle("ol-collapsed");if(this.f){a=this.j;var b=a.parentNode;b&&b.replaceChild(this.i,a)}else a=this.i,(b=a.parentNode)&&b.replaceChild(this.j,a);this.f=!this.f};function Dd(a){a=a?a:{};var b=void 0!==a.className?a.className:"ol-rotate",c=void 0!==a.label?a.label:"\u21e7";this.a=null;"string"===typeof c?(this.a=document.createElement("span"),this.a.className="ol-compass",this.a.textContent=c):(this.a=c,this.a.classList.add("ol-compass"));var d=a.tipLabel?a.tipLabel:"Reset rotation",c=document.createElement("button");c.className=b+"-reset";c.setAttribute("type","button");c.title=d;c.appendChild(this.a);E(c,"click",Dd.prototype.j,this);d=document.createElement("div");
d.className=b+" ol-unselectable ol-control";d.appendChild(c);b=a.render?a.render:Ed;this.f=a.resetNorth?a.resetNorth:void 0;Ad.call(this,{element:d,render:b,target:a.target});this.g=void 0!==a.duration?a.duration:250;this.b=void 0!==a.autoHide?a.autoHide:!0;this.i=void 0;this.b&&this.element.classList.add("ol-hidden")}z(Dd,Ad);
Dd.prototype.j=function(a){a.preventDefault();void 0!==this.f?this.f():(a=this.l.W())&&void 0!==a.get(Ec)&&(0<this.g?a.animate({rotation:0,duration:this.g,easing:cb}):(a.set(Ec,0),Ic(a)&&Kc(a)))};
function Ed(a){if(a=a.frameState){a=a.viewState.rotation;if(a!=this.i){var b="rotate("+a+"rad)";if(this.b){var c=this.element.classList.contains("ol-hidden");c||0!==a?c&&0!==a&&this.element.classList.remove("ol-hidden"):this.element.classList.add("ol-hidden")}this.a.style.msTransform=b;this.a.style.webkitTransform=b;this.a.style.transform=b}this.i=a}};function Fd(a){a=a?a:{};var b=void 0!==a.className?a.className:"ol-zoom",c=void 0!==a.delta?a.delta:1,d=void 0!==a.zoomInLabel?a.zoomInLabel:"+",e=void 0!==a.zoomOutLabel?a.zoomOutLabel:"\u2212",f=void 0!==a.zoomInTipLabel?a.zoomInTipLabel:"Zoom in",g=void 0!==a.zoomOutTipLabel?a.zoomOutTipLabel:"Zoom out",h=document.createElement("button");h.className=b+"-in";h.setAttribute("type","button");h.title=f;h.appendChild("string"===typeof d?document.createTextNode(d):d);E(h,"click",Fd.prototype.b.bind(this,
c));d=document.createElement("button");d.className=b+"-out";d.setAttribute("type","button");d.title=g;d.appendChild("string"===typeof e?document.createTextNode(e):e);E(d,"click",Fd.prototype.b.bind(this,-c));c=document.createElement("div");c.className=b+" ol-unselectable ol-control";c.appendChild(h);c.appendChild(d);Ad.call(this,{element:c,target:a.target});this.a=void 0!==a.duration?a.duration:250}z(Fd,Ad);
Fd.prototype.b=function(a,b){b.preventDefault();var c=this.l.W();if(c){var d=Fc(c);d&&(d=c.constrainResolution(d,a),0<this.a?(Ic(c)&&Kc(c),c.animate({resolution:d,duration:this.a,easing:cb})):Oc(c,d))}};function Gd(a){a=a?a:{};var b=new jd;(void 0!==a.zoom?a.zoom:1)&&b.push(new Fd(a.zoomOptions));(void 0!==a.rotate?a.rotate:1)&&b.push(new Dd(a.rotateOptions));(void 0!==a.attribution?a.attribution:1)&&b.push(new Bd(a.attributionOptions));return b};function Hd(a,b,c,d,e){zd.call(this,a,b,e);this.originalEvent=c;this.pixel=b.Tc(c);this.coordinate=b.Ka(this.pixel);this.dragging=void 0!==d?d:!1}z(Hd,zd);Hd.prototype.preventDefault=function(){zd.prototype.preventDefault.call(this);this.originalEvent.preventDefault()};Hd.prototype.stopPropagation=function(){zd.prototype.stopPropagation.call(this);this.originalEvent.stopPropagation()};
var Id={Af:"singleclick",nf:"click",pf:"dblclick",sf:"pointerdrag",vf:"pointermove",rf:"pointerdown",yf:"pointerup",xf:"pointerover",wf:"pointerout",tf:"pointerenter",uf:"pointerleave",qf:"pointercancel"};function Jd(a,b,c,d,e){Hd.call(this,a,b,c.a,d,e);this.a=c}z(Jd,Hd);var Kd=["experimental-webgl","webgl","webkit-3d","moz-webgl"];function Ld(a,b){var c,d,e=Kd.length;for(d=0;d<e;++d)try{if(c=a.getContext(Kd[d],b))return c}catch(f){}return null};var Md,Nd="undefined"!==typeof navigator?navigator.userAgent.toLowerCase():"",Od=-1!==Nd.indexOf("firefox"),Pd=-1!==Nd.indexOf("safari")&&-1==Nd.indexOf("chrom"),Qd=-1!==Nd.indexOf("webkit")&&-1==Nd.indexOf("edge"),Rd=-1!==Nd.indexOf("macintosh"),Sd=window.devicePixelRatio||1,Td=!1,Ud=function(){if(!("HTMLCanvasElement"in window))return!1;try{var a=document.createElement("CANVAS").getContext("2d");return a?(void 0!==a.setLineDash&&(Td=!0),!0):!1}catch(b){return!1}}(),Vd="ontouchstart"in window,Wd=
"PointerEvent"in window,Xd=!!navigator.msPointerEnabled,Yd=!1,Zd=[];if("WebGLRenderingContext"in window)try{var $d=Ld(document.createElement("CANVAS"),{failIfMajorPerformanceCaveat:!0});$d&&(Yd=!0,Zd=$d.getSupportedExtensions())}catch(a){}Md=Yd;ba=Zd;function ae(a,b){this.a=a;this.g=b};function ce(a){ae.call(this,a,{mousedown:this.ne,mousemove:this.oe,mouseup:this.re,mouseover:this.qe,mouseout:this.pe});this.c=a.c;this.b=[]}z(ce,ae);function de(a,b){for(var c=a.b,d=b.clientX,e=b.clientY,f=0,g=c.length,h;f<g&&(h=c[f]);f++){var k=Math.abs(e-h[1]);if(25>=Math.abs(d-h[0])&&25>=k)return!0}return!1}function ee(a){var b=fe(a,a),c=b.preventDefault;b.preventDefault=function(){a.preventDefault();c()};b.pointerId=1;b.isPrimary=!0;b.pointerType="mouse";return b}p=ce.prototype;
p.ne=function(a){if(!de(this,a)){if((1).toString()in this.c){var b=ee(a);ge(this.a,"pointercancel",b,a);delete this.c[(1).toString()]}b=ee(a);this.c[(1).toString()]=a;ge(this.a,"pointerdown",b,a)}};p.oe=function(a){if(!de(this,a)){var b=ee(a);ge(this.a,"pointermove",b,a)}};p.re=function(a){if(!de(this,a)){var b=this.c[(1).toString()];b&&b.button===a.button&&(b=ee(a),ge(this.a,"pointerup",b,a),delete this.c[(1).toString()])}};p.qe=function(a){if(!de(this,a)){var b=ee(a);he(this.a,b,a)}};
p.pe=function(a){if(!de(this,a)){var b=ee(a);ie(this.a,b,a)}};function je(a){ae.call(this,a,{MSPointerDown:this.we,MSPointerMove:this.xe,MSPointerUp:this.Ae,MSPointerOut:this.ye,MSPointerOver:this.ze,MSPointerCancel:this.ve,MSGotPointerCapture:this.te,MSLostPointerCapture:this.ue});this.c=a.c;this.b=["","unavailable","touch","pen","mouse"]}z(je,ae);function ke(a,b){var c=b;"number"===typeof b.pointerType&&(c=fe(b,b),c.pointerType=a.b[b.pointerType]);return c}p=je.prototype;
p.we=function(a){this.c[a.pointerId.toString()]=a;var b=ke(this,a);ge(this.a,"pointerdown",b,a)};p.xe=function(a){var b=ke(this,a);ge(this.a,"pointermove",b,a)};p.Ae=function(a){var b=ke(this,a);ge(this.a,"pointerup",b,a);delete this.c[a.pointerId.toString()]};p.ye=function(a){var b=ke(this,a);ie(this.a,b,a)};p.ze=function(a){var b=ke(this,a);he(this.a,b,a)};p.ve=function(a){var b=ke(this,a);ge(this.a,"pointercancel",b,a);delete this.c[a.pointerId.toString()]};
p.ue=function(a){H(this.a,new le("lostpointercapture",a,a))};p.te=function(a){H(this.a,new le("gotpointercapture",a,a))};function me(a){ae.call(this,a,{pointerdown:this.Qe,pointermove:this.Re,pointerup:this.Ue,pointerout:this.Se,pointerover:this.Te,pointercancel:this.Pe,gotpointercapture:this.Ud,lostpointercapture:this.le})}z(me,ae);p=me.prototype;p.Qe=function(a){ne(this.a,a)};p.Re=function(a){ne(this.a,a)};p.Ue=function(a){ne(this.a,a)};p.Se=function(a){ne(this.a,a)};p.Te=function(a){ne(this.a,a)};p.Pe=function(a){ne(this.a,a)};p.le=function(a){ne(this.a,a)};p.Ud=function(a){ne(this.a,a)};function le(a,b,c){Ba.call(this,a);this.a=b;a=c?c:{};this.buttons=oe(a);this.pressure=pe(a,this.buttons);this.bubbles="bubbles"in a?a.bubbles:!1;this.cancelable="cancelable"in a?a.cancelable:!1;this.view="view"in a?a.view:null;this.detail="detail"in a?a.detail:null;this.screenX="screenX"in a?a.screenX:0;this.screenY="screenY"in a?a.screenY:0;this.clientX="clientX"in a?a.clientX:0;this.clientY="clientY"in a?a.clientY:0;this.button="button"in a?a.button:0;this.relatedTarget="relatedTarget"in a?a.relatedTarget:
null;this.pointerId="pointerId"in a?a.pointerId:0;this.width="width"in a?a.width:0;this.height="height"in a?a.height:0;this.pointerType="pointerType"in a?a.pointerType:"";this.isPrimary="isPrimary"in a?a.isPrimary:!1;b.preventDefault&&(this.preventDefault=function(){b.preventDefault()})}z(le,Ba);function oe(a){if(a.buttons||qe)a=a.buttons;else switch(a.which){case 1:a=1;break;case 2:a=4;break;case 3:a=2;break;default:a=0}return a}
function pe(a,b){var c=0;a.pressure?c=a.pressure:c=b?.5:0;return c}var qe=!1;try{qe=1===(new MouseEvent("click",{buttons:1})).buttons}catch(a){};function re(a,b){ae.call(this,a,{touchstart:this.lf,touchmove:this.kf,touchend:this.jf,touchcancel:this.hf});this.c=a.c;this.o=b;this.b=void 0;this.i=0;this.f=void 0}z(re,ae);p=re.prototype;p.od=function(){this.i=0;this.f=void 0};
function se(a,b,c){b=fe(b,c);b.pointerId=c.identifier+2;b.bubbles=!0;b.cancelable=!0;b.detail=a.i;b.button=0;b.buttons=1;b.width=c.webkitRadiusX||c.radiusX||0;b.height=c.webkitRadiusY||c.radiusY||0;b.pressure=c.webkitForce||c.force||.5;b.isPrimary=a.b===c.identifier;b.pointerType="touch";b.clientX=c.clientX;b.clientY=c.clientY;b.screenX=c.screenX;b.screenY=c.screenY;return b}
function te(a,b,c){function d(){b.preventDefault()}var e=Array.prototype.slice.call(b.changedTouches),f=e.length,g,h;for(g=0;g<f;++g)h=se(a,b,e[g]),h.preventDefault=d,c.call(a,b,h)}
p.lf=function(a){var b=a.touches,c=Object.keys(this.c),d=c.length;if(d>=b.length){var e=[],f,g,h;for(f=0;f<d;++f){g=c[f];h=this.c[g];var k;if(!(k=1==g))a:{k=b.length;for(var l,n=0;n<k;n++)if(l=b[n],l.identifier===g-2){k=!0;break a}k=!1}k||e.push(h.out)}for(f=0;f<e.length;++f)this.bc(a,e[f])}b=a.changedTouches[0];c=Object.keys(this.c).length;if(0===c||1===c&&(1).toString()in this.c)this.b=b.identifier,void 0!==this.f&&clearTimeout(this.f);ue(this,a);this.i++;te(this,a,this.Oe)};
p.Oe=function(a,b){this.c[b.pointerId]={target:b.target,out:b,jd:b.target};var c=this.a;b.bubbles=!0;ge(c,"pointerover",b,a);c=this.a;b.bubbles=!1;ge(c,"pointerenter",b,a);ge(this.a,"pointerdown",b,a)};p.kf=function(a){a.preventDefault();te(this,a,this.se)};
p.se=function(a,b){var c=this.c[b.pointerId];if(c){var d=c.out,e=c.jd;ge(this.a,"pointermove",b,a);d&&e!==b.target&&(d.relatedTarget=b.target,b.relatedTarget=e,d.target=e,b.target?(ie(this.a,d,a),he(this.a,b,a)):(b.target=e,b.relatedTarget=null,this.bc(a,b)));c.out=b;c.jd=b.target}};p.jf=function(a){ue(this,a);te(this,a,this.mf)};
p.mf=function(a,b){ge(this.a,"pointerup",b,a);this.a.out(b,a);ve(this.a,b,a);delete this.c[b.pointerId];b.isPrimary&&(this.b=void 0,this.f=setTimeout(this.od.bind(this),200))};p.hf=function(a){te(this,a,this.bc)};p.bc=function(a,b){ge(this.a,"pointercancel",b,a);this.a.out(b,a);ve(this.a,b,a);delete this.c[b.pointerId];b.isPrimary&&(this.b=void 0,this.f=setTimeout(this.od.bind(this),200))};
function ue(a,b){var c=a.o.b,d=b.changedTouches[0];if(a.b===d.identifier){var e=[d.clientX,d.clientY];c.push(e);setTimeout(function(){var a=c.indexOf(e);-1<a&&c.splice(a,1)},2500)}};function we(a){Ea.call(this);this.g=a;this.c={};this.f={};this.a=[];Wd?xe(this,new me(this)):Xd?xe(this,new je(this)):(a=new ce(this),xe(this,a),Vd&&xe(this,new re(this,a)));a=this.a.length;for(var b,c=0;c<a;c++)b=this.a[c],ye(this,Object.keys(b.g))}z(we,Ea);function xe(a,b){var c=Object.keys(b.g);c&&(c.forEach(function(a){var c=b.g[a];c&&(this.f[a]=c.bind(b))},a),a.a.push(b))}we.prototype.b=function(a){var b=this.f[a.type];b&&b(a)};
function ye(a,b){b.forEach(function(a){E(this.g,a,this.b,this)},a)}function ze(a,b){b.forEach(function(a){xa(this.g,a,this.b,this)},a)}function fe(a,b){for(var c={},d,e=0,f=Ae.length;e<f;e++)d=Ae[e][0],c[d]=a[d]||b[d]||Ae[e][1];return c}function ve(a,b,c){b.bubbles=!1;ge(a,"pointerleave",b,c)}we.prototype.out=function(a,b){a.bubbles=!0;ge(this,"pointerout",a,b)};function ie(a,b,c){a.out(b,c);var d=b.target,e=b.relatedTarget;d&&e&&d.contains(e)||ve(a,b,c)}
function he(a,b,c){b.bubbles=!0;ge(a,"pointerover",b,c);var d=b.target,e=b.relatedTarget;d&&e&&d.contains(e)||(b.bubbles=!1,ge(a,"pointerenter",b,c))}function ge(a,b,c,d){H(a,new le(b,d,c))}function ne(a,b){H(a,new le(b.type,b,b))}we.prototype.Z=function(){for(var a=this.a.length,b,c=0;c<a;c++)b=this.a[c],ze(this,Object.keys(b.g));Ea.prototype.Z.call(this)};
var Ae=[["bubbles",!1],["cancelable",!1],["view",null],["detail",null],["screenX",0],["screenY",0],["clientX",0],["clientY",0],["ctrlKey",!1],["altKey",!1],["shiftKey",!1],["metaKey",!1],["button",0],["relatedTarget",null],["buttons",0],["pointerId",0],["width",0],["height",0],["pressure",0],["tiltX",0],["tiltY",0],["pointerType",""],["hwTimestamp",0],["isPrimary",!1],["type",""],["target",null],["currentTarget",null],["which",0]];function Be(a){Ea.call(this);this.b=a;this.i=0;this.o=!1;this.f=[];this.c=null;a=this.b.a;this.B=0;this.u={};this.g=new we(a);this.a=null;this.j=E(this.g,"pointerdown",this.ce,this);this.l=E(this.g,"pointermove",this.$e,this)}z(Be,Ea);function Ce(a,b){var c=new Jd("click",a.b,b);H(a,c);0!==a.i?(clearTimeout(a.i),a.i=0,c=new Jd("dblclick",a.b,b),H(a,c)):a.i=setTimeout(function(){this.i=0;var a=new Jd("singleclick",this.b,b);H(this,a)}.bind(a),250)}
function De(a,b){"pointerup"==b.type||"pointercancel"==b.type?delete a.u[b.pointerId]:"pointerdown"==b.type&&(a.u[b.pointerId]=!0);a.B=Object.keys(a.u).length}p=Be.prototype;p.Wc=function(a){De(this,a);var b=new Jd("pointerup",this.b,a);H(this,b);!this.o&&0===a.button&&Ce(this,this.c);0===this.B&&(this.f.forEach(D),this.f.length=0,this.o=!1,this.c=null,Aa(this.a),this.a=null)};
p.ce=function(a){De(this,a);var b=new Jd("pointerdown",this.b,a);H(this,b);this.c=a;0===this.f.length&&(this.a=new we(document),this.f.push(E(this.a,"pointermove",this.He,this),E(this.a,"pointerup",this.Wc,this),E(this.g,"pointercancel",this.Wc,this)))};p.He=function(a){if(a.clientX!=this.c.clientX||a.clientY!=this.c.clientY){this.o=!0;var b=new Jd("pointerdrag",this.b,a,this.o);H(this,b)}a.preventDefault()};
p.$e=function(a){H(this,new Jd(a.type,this.b,a,!(!this.c||a.clientX==this.c.clientX&&a.clientY==this.c.clientY)))};p.Z=function(){this.l&&(D(this.l),this.l=null);this.j&&(D(this.j),this.j=null);this.f.forEach(D);this.f.length=0;this.a&&(Aa(this.a),this.a=null);this.g&&(Aa(this.g),this.g=null);Ea.prototype.Z.call(this)};function Ee(a,b){Ea.call(this);this.ga=a;this.state=b;this.a=null;this.key=""}z(Ee,Ea);Ee.prototype.v=function(){H(this,"change")};Ee.prototype.getKey=function(){return this.key+"/"+this.ga};function Fe(a){if(!a.a)return a;var b=a.a;do{if(b.aa()==Ge)return b;b=b.a}while(b);return a}Ee.prototype.aa=function(){return this.state};var Ge=2;function He(a,b){this.l=a;this.f=b;this.a=[];this.b=[];this.c={}}He.prototype.clear=function(){this.a.length=0;this.b.length=0;oa(this.c)};function Ie(a){var b=a.a,c=a.b,d=b[0];1==b.length?(b.length=0,c.length=0):(b[0]=b.pop(),c[0]=c.pop(),Je(a,0));b=a.f(d);delete a.c[b];return d}He.prototype.g=function(a){C(!(this.f(a)in this.c),31);var b=this.l(a);return Infinity!=b?(this.a.push(a),this.b.push(b),this.c[this.f(a)]=!0,Ke(this,0,this.a.length-1),!0):!1};
function Je(a,b){for(var c=a.a,d=a.b,e=c.length,f=c[b],g=d[b],h=b;b<e>>1;){var k=2*b+1,l=2*b+2,k=l<e&&d[l]<d[k]?l:k;c[b]=c[k];d[b]=d[k];b=k}c[b]=f;d[b]=g;Ke(a,h,b)}function Ke(a,b,c){var d=a.a;a=a.b;for(var e=d[c],f=a[c];c>b;){var g=c-1>>1;if(a[g]>f)d[c]=d[g],a[c]=a[g],c=g;else break}d[c]=e;a[c]=f}function Le(a){var b=a.l,c=a.a,d=a.b,e=0,f=c.length,g,h,k;for(h=0;h<f;++h)g=c[h],k=b(g),Infinity==k?delete a.c[a.f(g)]:(d[e]=k,c[e++]=g);c.length=e;d.length=e;for(b=(a.a.length>>1)-1;0<=b;b--)Je(a,b)};function Me(a,b){He.call(this,function(b){return a.apply(null,b)},function(a){return a[0].getKey()});this.u=b;this.o=0;this.i={}}z(Me,He);Me.prototype.g=function(a){var b=He.prototype.g.call(this,a);b&&E(a[0],"change",this.j,this);return b};Me.prototype.j=function(a){a=a.target;var b=a.aa();if(b===Ge||3===b||4===b||5===b)xa(a,"change",this.j,this),a=a.getKey(),a in this.i&&(delete this.i[a],--this.o),this.u()};function Ne(){this.a=[];this.c=this.b=0};function Oe(a){Ha.call(this);this.V=null;this.set(Pe,!0);this.handleEvent=a.handleEvent}z(Oe,Ha);Oe.prototype.setMap=function(a){this.V=a};function Qe(a,b,c,d){if(void 0!==b){var e=a.get(Ec),f=a.get(Cc);void 0!==e&&f&&0<d?a.animate({rotation:b,anchor:c,duration:d,easing:cb}):a.rotate(b,c)}}function Re(a,b,c,d){var e=Fc(a);b=a.constrainResolution(e,b,0);Se(a,b,c,d)}
function Se(a,b,c,d){if(b){var e=Fc(a),f=a.get(Cc);void 0!==e&&f&&b!==e&&d?a.animate({resolution:b,anchor:c,duration:d,easing:cb}):(c&&(c=Lc(a,b,c),Nc(a,c)),Oc(a,b))}}var Pe="active";function Te(a){a=a?a:{};this.a=a.delta?a.delta:1;Oe.call(this,{handleEvent:Ue});this.b=void 0!==a.duration?a.duration:250}z(Te,Oe);function Ue(a){var b=!1,c=a.originalEvent;if("dblclick"==a.type){var b=a.coordinate,c=c.shiftKey?-this.a:this.a,d=a.map.W();Re(d,c,b,this.b);a.preventDefault();b=!0}return!b};function Ve(a){a=a.originalEvent;return a.altKey&&!(a.metaKey||a.ctrlKey)&&a.shiftKey}function We(a){a=a.originalEvent;return 0==a.button&&!(Qd&&Rd&&a.ctrlKey)}function Xe(a){a=a.originalEvent;return!a.altKey&&!(a.metaKey||a.ctrlKey)&&!a.shiftKey}function Ye(a){a=a.originalEvent;return!a.altKey&&!(a.metaKey||a.ctrlKey)&&a.shiftKey}function Ze(a){a=a.originalEvent.target.tagName;return"INPUT"!==a&&"SELECT"!==a&&"TEXTAREA"!==a}function $e(a){C(a.a,56);return"mouse"==a.a.pointerType};function af(a){a=a?a:{};Oe.call(this,{handleEvent:a.handleEvent?a.handleEvent:bf});this.Vb=a.handleDownEvent?a.handleDownEvent:Bb;this.Tb=a.handleDragEvent?a.handleDragEvent:da;this.Zb=a.handleMoveEvent?a.handleMoveEvent:da;this.ac=a.handleUpEvent?a.handleUpEvent:Bb;this.B=!1;this.P={};this.f=[]}z(af,Oe);function cf(a){for(var b=a.length,c=0,d=0,e=0;e<b;e++)c+=a[e].clientX,d+=a[e].clientY;return[c/b,d/b]}
function bf(a){if(!(a instanceof Jd))return!0;var b=!1,c=a.type;if("pointerdown"===c||"pointerdrag"===c||"pointerup"===c)c=a.a,"pointerup"==a.type?delete this.P[c.pointerId]:"pointerdown"==a.type?this.P[c.pointerId]=c:c.pointerId in this.P&&(this.P[c.pointerId]=c),this.f=pa(this.P);this.B&&("pointerdrag"==a.type?this.Tb(a):"pointerup"==a.type&&(this.B=this.ac(a)));"pointerdown"==a.type?(this.B=a=this.Vb(a),b=this.C(a)):"pointermove"==a.type&&this.Zb(a);return!b}af.prototype.C=function(a){return a};function df(a){af.call(this,{handleDownEvent:ef,handleDragEvent:ff,handleUpEvent:gf});a=a?a:{};this.a=a.kinetic;this.b=null;this.i=a.condition?a.condition:Xe;this.g=!1}z(df,af);function ff(a){var b=cf(this.f);this.a&&this.a.a.push(b[0],b[1],Date.now());if(this.b){var c=this.b[0]-b[0],d=b[1]-this.b[1];a=a.map.W();var e=a.aa(),d=c=[c,d],f=e.resolution;d[0]*=f;d[1]*=f;bb(c,e.rotation);d=c;e=e.center;d[0]+=e[0];d[1]+=e[1];c=a.f.center(c);Nc(a,c)}this.b=b}
function gf(a){var b=a.map;a=b.W();if(0===this.f.length){var c;if(c=!this.g&&this.a)if(c=this.a,6>c.a.length)c=!1;else{var d=Date.now()-100,e=c.a.length-3;if(c.a[e+2]<d)c=!1;else{for(var f=e-3;0<f&&c.a[f+2]>d;)f-=3;var d=c.a[e+2]-c.a[f+2],g=c.a[e]-c.a[f],e=c.a[e+1]-c.a[f+1];c.b=Math.atan2(e,g);c.c=Math.sqrt(g*g+e*e)/d;c=.05<c.c}}c&&(c=(.05-this.a.c)/-.005,e=this.a.b,f=a.get(Cc),f=hf(b,f),b=b.Ka([f[0]-c*Math.cos(e),f[1]-c*Math.sin(e)]),a.animate({center:a.f.center(b),duration:500,easing:cb}));Gc(a,
1,-1);return!1}this.b=null;return!0}function ef(a){if(0<this.f.length&&this.i(a)){var b=a.map.W();this.b=null;this.B||Gc(b,1,1);Nc(b,a.frameState.viewState.center);this.a&&(a=this.a,a.a.length=0,a.b=0,a.c=0);this.g=1<this.f.length;return!0}return!1}df.prototype.C=Bb;function jf(a){a=a?a:{};af.call(this,{handleDownEvent:kf,handleDragEvent:lf,handleUpEvent:mf});this.b=a.condition?a.condition:Ve;this.a=void 0;this.g=void 0!==a.duration?a.duration:250}z(jf,af);function lf(a){if($e(a)){var b=a.map,c=b.Ya();a=a.pixel;c=Math.atan2(c[1]/2-a[1],a[0]-c[0]/2);if(void 0!==this.a){a=c-this.a;var b=b.W(),d=b.get(Ec);Qe(b,d-a)}this.a=c}}function mf(a){if(!$e(a))return!0;a=a.map.W();Gc(a,1,-1);var b=a.get(Ec),c=this.g,b=a.constrainRotation(b,0);Qe(a,b,void 0,c);return!1}
function kf(a){return $e(a)&&We(a)&&this.b(a)?(Gc(a.map.W(),1,1),this.a=void 0,!0):!1}jf.prototype.C=Bb;function nf(a){this.f=null;this.c=document.createElement("div");this.c.style.position="absolute";this.c.className="ol-box "+a;this.b=this.g=this.a=null}z(nf,za);nf.prototype.Z=function(){this.setMap(null)};function of(a){var b=a.g,c=a.b;a=a.c.style;a.left=Math.min(b[0],c[0])+"px";a.top=Math.min(b[1],c[1])+"px";a.width=Math.abs(c[0]-b[0])+"px";a.height=Math.abs(c[1]-b[1])+"px"}
nf.prototype.setMap=function(a){if(this.a){this.a.u.removeChild(this.c);var b=this.c.style;b.left=b.top=b.width=b.height="inherit"}(this.a=a)&&this.a.u.appendChild(this.c)};function pf(a){var b=a.g,c=a.b,b=[b,[b[0],c[1]],c,[c[0],b[1]]].map(a.a.Ka,a.a);b[4]=b[0].slice();a.f?a.f.ea([b]):a.f=new xc([b])}nf.prototype.T=function(){return this.f};function qf(a){af.call(this,{handleDownEvent:rf,handleDragEvent:sf,handleUpEvent:tf});a=a?a:{};this.a=new nf(a.className||"ol-dragbox");this.b=null;this.j=a.condition?a.condition:Ab;this.i=a.boxEndCondition?a.boxEndCondition:uf}z(qf,af);function uf(a,b,c){a=c[0]-b[0];b=c[1]-b[1];return 64<=a*a+b*b}function sf(a){if($e(a)){var b=this.a,c=a.pixel;b.g=this.b;b.b=c;pf(b);of(b);H(this,new vf(wf,a.coordinate,a))}}qf.prototype.T=function(){return this.a.T()};qf.prototype.g=da;
function tf(a){if(!$e(a))return!0;this.a.setMap(null);this.i(a,this.b,a.pixel)&&(this.g(a),H(this,new vf(xf,a.coordinate,a)));return!1}function rf(a){if($e(a)&&We(a)&&this.j(a)){this.b=a.pixel;this.a.setMap(a.map);var b=this.a,c=this.b;b.g=this.b;b.b=c;pf(b);of(b);H(this,new vf(yf,a.coordinate,a));return!0}return!1}var yf="boxstart",wf="boxdrag",xf="boxend";function vf(a,b,c){Ba.call(this,a);this.coordinate=b;this.mapBrowserEvent=c}z(vf,Ba);function zf(a){a=a?a:{};var b=a.condition?a.condition:Ye;this.l=void 0!==a.duration?a.duration:200;this.u=void 0!==a.out?a.out:!1;qf.call(this,{condition:b,className:a.className||"ol-dragzoom"})}z(zf,qf);
zf.prototype.g=function(){var a=this.V,b=a.W(),c=a.Ya(),d=this.T().M();if(this.u){var e=b.Mc(c),d=[hf(a,[d[0],d[1]]),hf(a,[d[2],d[3]])],a=nb(void 0),f,g;f=0;for(g=d.length;f<g;++f)hb(a,d[f]);a=1/Math.max(tb(a)/c[0],ub(a)/c[1]);d=(e[2]-e[0])/2*(a-1);a=(e[3]-e[1])/2*(a-1);e[0]-=d;e[2]+=d;e[1]-=a;e[3]+=a;d=e}c=b.constrainResolution(Math.max(tb(d)/c[0],ub(d)/c[1]));b.animate({resolution:c,center:vb(d),duration:this.l,easing:cb})};function Af(a){Oe.call(this,{handleEvent:Bf});a=a||{};this.a=function(a){return Xe(a)&&Ze(a)};this.b=void 0!==a.condition?a.condition:this.a;this.f=void 0!==a.duration?a.duration:100;this.g=void 0!==a.pixelDelta?a.pixelDelta:128}z(Af,Oe);
function Bf(a){var b=!1;if("keydown"==a.type){var c=a.originalEvent.keyCode;if(this.b(a)&&(40==c||37==c||39==c||38==c)){var b=a.map.W(),d=Fc(b)*this.g,e=0,f=0;40==c?f=-d:37==c?e=-d:39==c?e=d:f=d;d=[e,f];bb(d,b.get(Ec));c=this.f;if(e=b.get(Cc))d=b.f.center([e[0]+d[0],e[1]+d[1]]),c?b.animate({duration:c,easing:eb,center:d}):Nc(b,d);a.preventDefault();b=!0}}return!b};function Cf(a){Oe.call(this,{handleEvent:Df});a=a?a:{};this.b=a.condition?a.condition:Ze;this.a=a.delta?a.delta:1;this.f=void 0!==a.duration?a.duration:100}z(Cf,Oe);function Df(a){var b=!1;if("keydown"==a.type||"keypress"==a.type){var c=a.originalEvent.charCode;!this.b(a)||43!=c&&45!=c||(b=43==c?this.a:-this.a,c=a.map.W(),Re(c,b,void 0,this.f),a.preventDefault(),b=!0)}return!b};function Ef(a){Oe.call(this,{handleEvent:Ff});a=a||{};this.f=0;this.B=void 0!==a.duration?a.duration:250;this.A=void 0!==a.timeout?a.timeout:80;this.C=void 0!==a.useAnchor?a.useAnchor:!0;this.a=null;this.i=this.g=this.j=this.b=void 0}z(Ef,Oe);
function Ff(a){var b=a.type;if("wheel"!==b&&"mousewheel"!==b)return!0;a.preventDefault();var b=a.map,c=a.originalEvent;this.C&&(this.a=a.coordinate);var d;"wheel"==a.type?(d=c.deltaY,Od&&c.deltaMode===WheelEvent.DOM_DELTA_PIXEL&&(d/=Sd),c.deltaMode===WheelEvent.DOM_DELTA_LINE&&(d*=40)):"mousewheel"==a.type&&(d=-c.wheelDeltaY,Pd&&(d/=3));if(0===d)return!1;a=Date.now();void 0===this.b&&(this.b=a);if(!this.g||400<a-this.b)this.g=4>Math.abs(d)?Gf:Hf;if(this.g===Gf){b=b.W();this.i?clearTimeout(this.i):
Gc(b,1,1);this.i=setTimeout(this.l.bind(this),400);d=Fc(b)*Math.pow(2,d/300);var c=b.u,e=b.b,f=0;d<c?(d=Math.max(d,c/1.5),f=1):d>e&&(d=Math.min(d,1.5*e),f=-1);if(this.a){var g=Lc(b,d,this.a);Nc(b,g)}Oc(b,d);0<f?b.animate({resolution:c,easing:cb,anchor:this.a,duration:500}):0>f&&b.animate({resolution:e,easing:cb,anchor:this.a,duration:500});this.b=a;return!1}this.f+=d;a=Math.max(this.A-(a-this.b),0);clearTimeout(this.j);this.j=setTimeout(this.u.bind(this,b),a);return!1}
Ef.prototype.l=function(){this.i=void 0;Gc(this.V.W(),1,-1)};Ef.prototype.u=function(a){a=a.W();Ic(a)&&Kc(a);Re(a,-ga(this.f,-1,1),this.a,this.B);this.g=void 0;this.f=0;this.a=null;this.j=this.b=void 0};var Gf="trackpad",Hf="wheel";function If(a){af.call(this,{handleDownEvent:Jf,handleDragEvent:Kf,handleUpEvent:Lf});a=a||{};this.b=null;this.g=void 0;this.a=!1;this.i=0;this.l=void 0!==a.threshold?a.threshold:.3;this.j=void 0!==a.duration?a.duration:250}z(If,af);
function Kf(a){var b=0,c=this.f[0],d=this.f[1],c=Math.atan2(d.clientY-c.clientY,d.clientX-c.clientX);void 0!==this.g&&(b=c-this.g,this.i+=b,!this.a&&Math.abs(this.i)>this.l&&(this.a=!0));this.g=c;a=a.map;c=a.a.getBoundingClientRect();d=cf(this.f);d[0]-=c.left;d[1]-=c.top;this.b=a.Ka(d);this.a&&(c=a.W(),d=c.get(Ec),a.render(),Qe(c,d+b,this.b))}
function Lf(a){if(2>this.f.length){a=a.map.W();Gc(a,1,-1);if(this.a){var b=a.get(Ec),c=this.b,d=this.j,b=a.constrainRotation(b,0);Qe(a,b,c,d)}return!1}return!0}function Jf(a){return 2<=this.f.length?(a=a.map,this.b=null,this.g=void 0,this.a=!1,this.i=0,this.B||Gc(a.W(),1,1),!0):!1}If.prototype.C=Bb;function Mf(a){af.call(this,{handleDownEvent:Nf,handleDragEvent:Of,handleUpEvent:Pf});a=a?a:{};this.i=a.constrainResolution||!1;this.b=null;this.j=void 0!==a.duration?a.duration:400;this.a=void 0;this.g=1}z(Mf,af);
function Of(a){var b=1,c=this.f[0],d=this.f[1],e=c.clientX-d.clientX,c=c.clientY-d.clientY,e=Math.sqrt(e*e+c*c);void 0!==this.a&&(b=this.a/e);this.a=e;1!=b&&(this.g=b);a=a.map;var e=a.W(),c=Fc(e),d=a.a.getBoundingClientRect(),f=cf(this.f);f[0]-=d.left;f[1]-=d.top;this.b=a.Ka(f);a.render();Se(e,c*b,this.b)}function Pf(a){if(2>this.f.length){a=a.map.W();Gc(a,1,-1);if(this.i){var b=Fc(a),c=this.b,d=this.j,b=a.constrainResolution(b,0,this.g-1);Se(a,b,c,d)}return!1}return!0}
function Nf(a){return 2<=this.f.length?(a=a.map,this.b=null,this.a=void 0,this.g=1,this.B||Gc(a.W(),1,1),!0):!1}Mf.prototype.C=Bb;function Qf(a){a=a?a:{};var b=new jd,c=new Ne;(void 0!==a.altShiftDragRotate?a.altShiftDragRotate:1)&&b.push(new jf);(void 0!==a.doubleClickZoom?a.doubleClickZoom:1)&&b.push(new Te({delta:a.zoomDelta,duration:a.zoomDuration}));(void 0!==a.dragPan?a.dragPan:1)&&b.push(new df({kinetic:c}));(void 0!==a.pinchRotate?a.pinchRotate:1)&&b.push(new If);(void 0!==a.pinchZoom?a.pinchZoom:1)&&b.push(new Mf({duration:a.zoomDuration}));if(void 0!==a.keyboard?a.keyboard:1)b.push(new Af),b.push(new Cf({delta:a.zoomDelta,
duration:a.zoomDuration}));(void 0!==a.mouseWheelZoom?a.mouseWheelZoom:1)&&b.push(new Ef({duration:a.zoomDuration}));(void 0!==a.shiftDragZoom?a.shiftDragZoom:1)&&b.push(new zf({duration:a.zoomDuration}));return b};function Rf(a){Ha.call(this);var b=na({},a);b[Sf]=void 0!==a.opacity?a.opacity:1;b[Tf]=void 0!==a.visible?a.visible:!0;b[Uf]=void 0!==a.zIndex?a.zIndex:0;b[Vf]=void 0!==a.maxResolution?a.maxResolution:Infinity;b[Wf]=void 0!==a.minResolution?a.minResolution:0;Ia(this,b);this.a={layer:this,Jb:!0}}z(Rf,Ha);function Xf(a){a.a.opacity=ga(a.get(Sf),0,1);a.a.pd=a.lc();a.a.visible=a.f();a.a.extent=a.M();a.a.zIndex=a.get(Uf);a.a.maxResolution=a.get(Vf);a.a.minResolution=Math.max(a.get(Wf),0);return a.a}
Rf.prototype.M=function(){return this.get(Yf)};Rf.prototype.f=function(){return this.get(Tf)};Rf.prototype.l=function(a){this.set(Tf,a)};var Sf="opacity",Tf="visible",Yf="extent",Uf="zIndex",Vf="maxResolution",Wf="minResolution";function Zf(a){var b=a||{};a=na({},b);delete a.layers;b=b.layers;Rf.call(this,a);this.g=[];this.b={};E(this,Ka($f),this.Zd,this);b?Array.isArray(b)?b=new jd(b.slice()):C(b instanceof jd,43):b=new jd;this.set($f,b)}z(Zf,Rf);p=Zf.prototype;p.Hb=function(){this.f()&&this.v()};
p.Zd=function(){this.g.forEach(D);this.g.length=0;var a=this.get($f);this.g.push(E(a,od,this.Yd,this),E(a,pd,this.$d,this));for(var b in this.b)this.b[b].forEach(D);oa(this.b);var a=a.a,c,d;b=0;for(c=a.length;b<c;b++)d=a[b],this.b[A(d).toString()]=[E(d,Ma,this.Hb,this),E(d,"change",this.Hb,this)];this.v()};p.Yd=function(a){a=a.element;var b=A(a).toString();this.b[b]=[E(a,Ma,this.Hb,this),E(a,"change",this.Hb,this)];this.v()};
p.$d=function(a){a=A(a.element).toString();this.b[a].forEach(D);delete this.b[a];this.v()};p.ic=function(a){var b=void 0!==a?a:[],c=b.length;this.get($f).forEach(function(a){a.ic(b)});a=Xf(this);var d,e;for(d=b.length;c<d;c++)e=b[c],e.opacity*=a.opacity,e.visible=e.visible&&a.visible,e.maxResolution=Math.min(e.maxResolution,a.maxResolution),e.minResolution=Math.max(e.minResolution,a.minResolution),void 0!==a.extent&&(e.extent=void 0!==e.extent?xb(e.extent,a.extent):a.extent);return b};p.lc=function(){return"ready"};
var $f="layers";function ag(a){Gb.call(this,{code:a,units:"m",extent:bg,global:!0,worldExtent:cg,getPointResolution:function(a,c){return a/ha(c[1]/6378137)}})}z(ag,Gb);var dg=6378137*Math.PI,bg=[-dg,-dg,dg,dg],cg=[-180,-85,180,85],eg="EPSG:3857 EPSG:102100 EPSG:102113 EPSG:900913 urn:ogc:def:crs:EPSG:6.18:3:3857 urn:ogc:def:crs:EPSG::3857 http://www.opengis.net/gml/srs/epsg.xml#3857".split(" ").map(function(a){return new ag(a)});
function fg(a,b,c){var d=a.length;c=1<c?c:2;void 0===b&&(2<c?b=a.slice():b=Array(d));for(var e=0;e<d;e+=c){b[e]=dg*a[e]/180;var f=6378137*Math.log(Math.tan(Math.PI*(a[e+1]+90)/360));f>dg?f=dg:f<-dg&&(f=-dg);b[e+1]=f}return b}function gg(a,b,c){var d=a.length;c=1<c?c:2;void 0===b&&(2<c?b=a.slice():b=Array(d));for(var e=0;e<d;e+=c)b[e]=180*a[e]/dg,b[e+1]=360*Math.atan(Math.exp(a[e+1]/6378137))/Math.PI-90;return b};var hg=new Cb(6378137);function ig(a,b){Gb.call(this,{code:a,units:"degrees",extent:jg,axisOrientation:b,global:!0,metersPerUnit:kg,worldExtent:jg})}z(ig,Gb);var jg=[-180,-90,180,90],kg=Math.PI*hg.radius/180,lg=[new ig("CRS:84"),new ig("EPSG:4326","neu"),new ig("urn:ogc:def:crs:EPSG::4326","neu"),new ig("urn:ogc:def:crs:EPSG:6.6:4326","neu"),new ig("urn:ogc:def:crs:OGC:1.3:CRS84"),new ig("urn:ogc:def:crs:OGC:2:84"),new ig("http://www.opengis.net/gml/srs/epsg.xml#4326","neu"),new ig("urn:x-ogc:def:crs:EPSG:4326","neu")];function mg(a,b,c,d,e){Ba.call(this,a);this.vectorContext=b;this.frameState=c;this.context=d;this.glContext=e}z(mg,Ba);function ng(a){var b=na({},a);delete b.source;Rf.call(this,b);this.j=this.g=this.b=null;a.map&&this.setMap(a.map);E(this,Ka("source"),this.he,this);this.set("source",a.source?a.source:null)}z(ng,Rf);function og(a,b){return a.visible&&b>=a.minResolution&&b<a.maxResolution}p=ng.prototype;p.ic=function(a){a=a?a:[];a.push(Xf(this));return a};p.oa=function(){return this.get("source")||null};p.lc=function(){var a=this.oa();return a?a.aa():"undefined"};p.Je=function(){this.v()};
p.he=function(){this.j&&(D(this.j),this.j=null);var a=this.oa();a&&(this.j=E(a,"change",this.Je,this));this.v()};p.setMap=function(a){this.b&&(D(this.b),this.b=null);a||this.v();this.g&&(D(this.g),this.g=null);a&&(this.b=E(a,"precompose",function(a){var c=Xf(this);c.Jb=!1;c.zIndex=Infinity;a.frameState.layerStatesArray.push(c);a.frameState.layerStates[A(this)]=c},this),this.g=E(this,"change",a.render,a),this.v())};function pg(){this.a={};this.c=0}pg.prototype.clear=function(){this.a={};this.c=0};pg.prototype.get=function(a,b,c){a=b+":"+a+":"+(c?ud(c):"null");return a in this.a?this.a[a]:null};pg.prototype.set=function(a,b,c,d){this.a[b+":"+a+":"+(c?ud(c):"null")]=d;++this.c};var qg=new pg;var rg=Array(6);function sg(){return[1,0,0,1,0,0]}function tg(a){return ug(a,1,0,0,1,0,0)}function vg(a,b){var c=a[0],d=a[1],e=a[2],f=a[3],g=a[4],h=a[5],k=b[0],l=b[1],n=b[2],m=b[3],q=b[4],r=b[5];a[0]=c*k+e*l;a[1]=d*k+f*l;a[2]=c*n+e*m;a[3]=d*n+f*m;a[4]=c*q+e*r+g;a[5]=d*q+f*r+h}function ug(a,b,c,d,e,f,g){a[0]=b;a[1]=c;a[2]=d;a[3]=e;a[4]=f;a[5]=g;return a}function wg(a,b){a[0]=b[0];a[1]=b[1];a[2]=b[2];a[3]=b[3];a[4]=b[4];a[5]=b[5];return a}
function xg(a,b){var c=b[0],d=b[1];b[0]=a[0]*c+a[2]*d+a[4];b[1]=a[1]*c+a[3]*d+a[5];return b}function yg(a,b){var c=Math.cos(b),d=Math.sin(b);vg(a,ug(rg,c,d,-d,c,0,0))}function zg(a,b,c,d,e,f,g,h){var k=Math.sin(f);f=Math.cos(f);a[0]=d*f;a[1]=e*k;a[2]=-d*k;a[3]=e*f;a[4]=g*d*f-h*d*k+b;a[5]=g*e*k+h*e*f+c;return a};function Ag(a,b){this.j=b;this.b={};this.u={}}z(Ag,za);function Bg(a){var b=a.viewState,c=a.coordinateToPixelTransform,d=a.pixelToCoordinateTransform;zg(c,a.size[0]/2,a.size[1]/2,1/b.resolution,-1/b.resolution,-b.rotation,-b.center[0],-b.center[1]);a=wg(d,c);b=a[0]*a[3]-a[1]*a[2];C(0!==b,32);var c=a[0],d=a[1],e=a[2],f=a[3],g=a[4],h=a[5];a[0]=f/b;a[1]=-d/b;a[2]=-e/b;a[3]=c/b;a[4]=(e*h-f*g)/b;a[5]=-(c*h-d*g)/b}p=Ag.prototype;p.Z=function(){for(var a in this.b)Aa(this.b[a])};
function Cg(){if(32<qg.c){var a=0,b,c;for(b in qg.a)c=qg.a[b],0!==(a++&3)||Fa(c)||(delete qg.a[b],--qg.c)}}
p.na=function(a,b,c,d,e,f,g){function h(a,c){var f=A(a).toString(),g=b.layerStates[A(c)].Jb;if(!(f in b.skippedFeatureUids)||g)return d.call(e,a,g?c:null)}var k,l=b.viewState,n=l.resolution,m=l.projection,l=a;if(m.c){var m=m.M(),q=tb(m),r=a[0];if(r<m[0]||r>m[2])l=[r+q*Math.ceil((m[0]-r)/q),a[1]]}m=b.layerStatesArray;for(q=m.length-1;0<=q;--q){var u=m[q],r=u.layer;if(og(u,n)&&f.call(g,r)&&(u=Dg(this,r),r.oa()&&(k=u.na(r.oa().u?l:a,b,c,h,e)),k))return k}};
function Dg(a,b){var c=A(b).toString();if(c in a.b)return a.b[c];var d=a.Oc(b);a.b[c]=d;a.u[c]=E(d,"change",a.Xd,a);return d}p.Xd=function(){this.j.render()};p.uc=da;p.bf=function(a,b){for(var c in this.b)if(!(b&&c in b.layerStates)){var d=c,e=this.b[d];delete this.b[d];D(this.u[d]);delete this.u[d];Aa(e)}};function Eg(a,b){for(var c in a.b)if(!(c in b.layerStates)){b.postRenderFunctions.push(a.bf.bind(a));break}}function Sa(a,b){return a.zIndex-b.zIndex};function Fg(a){a=a?a:{};var b=na({},a);delete b.preload;delete b.useInterimTilesOnError;ng.call(this,b);this.set(Gg,void 0!==a.preload?a.preload:0);this.set(Hg,void 0!==a.useInterimTilesOnError?a.useInterimTilesOnError:!0)}z(Fg,ng);var Gg="preload",Hg="useInterimTilesOnError";var Ig=[0,0,0,1],Jg=[],Kg=[0,0,0,1];function Lg(a,b,c,d){0!==b&&(a.translate(c,d),a.rotate(b),a.translate(-c,-d))};function Mg(a){this.j=a.opacity;this.F=a.rotateWithView;this.u=a.rotation;this.o=a.scale;this.B=a.snapToPixel};function Ng(a){this.A=this.D=this.i=null;this.f=void 0!==a.fill?a.fill:null;this.Y=[0,0];this.a=a.points;this.c=void 0!==a.radius?a.radius:a.radius1;this.g=void 0!==a.radius2?a.radius2:this.c;this.l=void 0!==a.angle?a.angle:0;this.b=void 0!==a.stroke?a.stroke:null;this.L=this.P=this.G=null;var b=this.C=a.atlasManager,c="",d="",e=0,f=null,g,h=0;this.b&&(g=wd(this.b.a),h=this.b.b,void 0===h&&(h=1),f=this.b.c,Td||(f=null),d=this.b.g,void 0===d&&(d="round"),c=this.b.f,void 0===c&&(c="round"),e=this.b.i,
void 0===e&&(e=10));var k=2*(this.c+h)+1,c={strokeStyle:g,qd:h,size:k,lineCap:c,lineDash:f,lineJoin:d,miterLimit:e};if(void 0===b){var l=xd(k,k);this.D=l.canvas;b=k=this.D.width;this.Rc(c,l,0,0);this.f?this.A=this.D:(l=xd(c.size,c.size),this.A=l.canvas,this.Qc(c,l,0,0))}else k=Math.round(k),(d=!this.f)&&(l=this.Qc.bind(this,c)),this.b?(e=this.b,void 0===e.o&&(e.o="s",e.o=e.a?"string"===typeof e.a?e.o+e.a:e.o+A(e.a).toString():e.o+"-",e.o+=","+(void 0!==e.f?e.f.toString():"-")+","+(e.c?e.c.toString():
"-")+","+(void 0!==e.g?e.g:"-")+","+(void 0!==e.i?e.i.toString():"-")+","+(void 0!==e.b?e.b.toString():"-")),e=e.o):e="-",this.f?(f=this.f,void 0===f.c&&(f.c=f.a instanceof CanvasPattern||f.a instanceof CanvasGradient?A(f.a).toString():"f"+(f.a?ud(f.a):"-")),f=f.c):f="-",this.i&&e==this.i[1]&&f==this.i[2]&&this.c==this.i[3]&&this.g==this.i[4]&&this.l==this.i[5]&&this.a==this.i[6]||(this.i=["r"+e+f+(void 0!==this.c?this.c.toString():"-")+(void 0!==this.g?this.g.toString():"-")+(void 0!==this.l?this.l.toString():
"-")+(void 0!==this.a?this.a.toString():"-"),e,f,this.c,this.g,this.l,this.a]),l=b.add(this.i[0],k,k,this.Rc.bind(this,c),l),this.D=l.image,this.Y=[l.offsetX,l.offsetY],b=l.image.width,this.A=d?l.a:this.D;this.G=[k/2,k/2];this.P=[k,k];this.L=[b,b];Mg.call(this,{opacity:1,rotateWithView:void 0!==a.rotateWithView?a.rotateWithView:!1,rotation:void 0!==a.rotation?a.rotation:0,scale:1,snapToPixel:void 0!==a.snapToPixel?a.snapToPixel:!0})}z(Ng,Mg);p=Ng.prototype;
p.clone=function(){var a=new Ng({fill:this.f?this.f.clone():void 0,points:this.g!==this.c?this.a/2:this.a,radius:this.c,radius2:this.g,angle:this.l,snapToPixel:this.B,stroke:this.b?this.b.clone():void 0,rotation:this.u,rotateWithView:this.F,atlasManager:this.C});a.j=this.j;a.o=this.o;return a};p.pb=function(){return this.G};p.pc=function(){return this.A};p.rb=function(){return this.D};p.hc=function(){return this.L};p.Lb=function(){return 2};p.sb=function(){return this.Y};p.Ma=function(){return this.P};
p.Yc=da;p.load=da;p.sd=da;
p.Rc=function(a,b,c,d){var e;b.setTransform(1,0,0,1,0,0);b.translate(c,d);b.beginPath();if(Infinity===this.a)b.arc(a.size/2,a.size/2,this.c,0,2*Math.PI,!0);else for(this.g!==this.c&&(this.a*=2),c=0;c<=this.a;c++)d=2*c*Math.PI/this.a-Math.PI/2+this.l,e=0===c%2?this.c:this.g,b.lineTo(a.size/2+e*Math.cos(d),a.size/2+e*Math.sin(d));this.f&&(b.fillStyle=wd(this.f.a),b.fill());this.b&&(b.strokeStyle=a.strokeStyle,b.lineWidth=a.qd,a.lineDash&&b.setLineDash(a.lineDash),b.lineCap=a.lineCap,b.lineJoin=a.lineJoin,
b.miterLimit=a.miterLimit,b.stroke());b.closePath()};
p.Qc=function(a,b,c,d){b.setTransform(1,0,0,1,0,0);b.translate(c,d);b.beginPath();if(Infinity===this.a)b.arc(a.size/2,a.size/2,this.c,0,2*Math.PI,!0);else{this.g!==this.c&&(this.a*=2);var e;for(c=0;c<=this.a;c++)e=2*c*Math.PI/this.a-Math.PI/2+this.l,d=0===c%2?this.c:this.g,b.lineTo(a.size/2+d*Math.cos(e),a.size/2+d*Math.sin(e))}b.fillStyle=Ig;b.fill();this.b&&(b.strokeStyle=a.strokeStyle,b.lineWidth=a.qd,a.lineDash&&b.setLineDash(a.lineDash),b.stroke());b.closePath()};function Og(a){a=a||{};Ng.call(this,{points:Infinity,fill:a.fill,radius:a.radius,snapToPixel:a.snapToPixel,stroke:a.stroke,atlasManager:a.atlasManager})}z(Og,Ng);Og.prototype.clone=function(){var a=new Og({fill:this.f?this.f.clone():void 0,stroke:this.b?this.b.clone():void 0,radius:this.c,snapToPixel:this.B,atlasManager:this.C});a.j=this.j;a.o=this.o;return a};function Pg(a){a=a||{};this.a=void 0!==a.color?a.color:null;this.c=void 0}Pg.prototype.clone=function(){var a=this.a;return new Pg({color:a&&a.slice?a.slice():a||void 0})};function Qg(a){a=a||{};this.a=void 0!==a.color?a.color:null;this.f=a.lineCap;this.c=void 0!==a.lineDash?a.lineDash:null;this.g=a.lineJoin;this.i=a.miterLimit;this.b=a.width;this.o=void 0}Qg.prototype.clone=function(){var a=this.a;return new Qg({color:a&&a.slice?a.slice():a||void 0,lineCap:this.f,lineDash:this.c?this.c.slice():void 0,lineJoin:this.g,miterLimit:this.i,width:this.b})};Qg.prototype.setLineDash=function(a){this.c=a;this.o=void 0};function Rg(a){a=a||{};this.i=null;this.g=Sg;void 0!==a.geometry&&this.Da(a.geometry);this.b=void 0!==a.fill?a.fill:null;this.f=void 0!==a.image?a.image:null;this.c=void 0!==a.stroke?a.stroke:null;this.o=void 0!==a.text?a.text:null;this.a=a.zIndex}Rg.prototype.clone=function(){var a=this.T();a&&a.clone&&(a=a.clone());return new Rg({geometry:a,fill:this.b?this.b.clone():void 0,image:this.f?this.f.clone():void 0,stroke:this.c?this.c.clone():void 0,text:this.ha()?this.ha().clone():void 0,zIndex:this.a})};
Rg.prototype.T=function(){return this.i};Rg.prototype.ha=function(){return this.o};Rg.prototype.Da=function(a){"function"===typeof a?this.g=a:"string"===typeof a?this.g=function(b){return b.get(a)}:a?a&&(this.g=function(){return a}):this.g=Sg;this.i=a};function Tg(a){if("function"!==typeof a){var b;Array.isArray(a)?b=a:(C(a instanceof Rg,41),b=[a]);a=function(){return b}}return a}var Ug=null;
function Vg(){if(!Ug){var a=new Pg({color:"rgba(255,255,255,0.4)"}),b=new Qg({color:"#3399CC",width:1.25});Ug=[new Rg({image:new Og({fill:a,stroke:b,radius:5}),fill:a,stroke:b})]}return Ug}
function Wg(){var a={},b=[255,255,255,1],c=[0,153,255,1];a.Polygon=[new Rg({fill:new Pg({color:[255,255,255,.5]})})];a.MultiPolygon=a.Polygon;a.LineString=[new Rg({stroke:new Qg({color:b,width:5})}),new Rg({stroke:new Qg({color:c,width:3})})];a.MultiLineString=a.LineString;a.Circle=a.Polygon.concat(a.LineString);a.Point=[new Rg({image:new Og({radius:6,fill:new Pg({color:c}),stroke:new Qg({color:b,width:1.5})}),zIndex:Infinity})];a.MultiPoint=a.Point;a.GeometryCollection=a.Polygon.concat(a.LineString,
a.Point);return a}function Sg(a){return a.T()};function Xg(a){a=a?a:{};var b=na({},a);delete b.style;delete b.renderBuffer;delete b.updateWhileAnimating;delete b.updateWhileInteracting;ng.call(this,b);this.i=void 0!==a.renderBuffer?a.renderBuffer:100;this.B=null;this.u=void 0;b=a.style;this.B=void 0!==b?b:Vg;this.u=null===b?void 0:Tg(this.B);this.v();this.A=void 0!==a.updateWhileAnimating?a.updateWhileAnimating:!1;this.C=void 0!==a.updateWhileInteracting?a.updateWhileInteracting:!1}z(Xg,ng);function Yg(){};function Zg(a,b,c,d,e){this.f=a;this.B=b;this.o=c;this.A=d;this.Oa=e;this.g=this.a=this.c=this.ka=this.ja=this.V=null;this.ca=this.ba=this.D=this.L=this.G=this.C=0;this.xa=!1;this.i=this.ia=0;this.sa=!1;this.Y=0;this.b="";this.za=this.ta=0;this.Aa=!1;this.l=this.Ba=0;this.P=this.u=this.j=null;this.F=[];this.Ja=sg()}z(Zg,Yg);
function $g(a,b,c){if(a.g){b=cc(b,0,c,2,a.A,a.F);c=a.f;var d=a.Ja,e=c.globalAlpha;1!=a.D&&(c.globalAlpha=e*a.D);var f=a.ia;a.xa&&(f+=a.Oa);var g,h;g=0;for(h=b.length;g<h;g+=2){var k=b[g]-a.C,l=b[g+1]-a.G;a.sa&&(k=Math.round(k),l=Math.round(l));if(0!==f||1!=a.i){var n=k+a.C,m=l+a.G;zg(d,n,m,a.i,a.i,f,-n,-m);c.setTransform.apply(c,d)}c.drawImage(a.g,a.ba,a.ca,a.Y,a.L,k,l,a.Y,a.L)}0===f&&1==a.i||c.setTransform(1,0,0,1,0,0);1!=a.D&&(c.globalAlpha=e)}}
function ah(a,b,c,d){var e=0;if(a.P&&""!==a.b){a.j&&bh(a,a.j);a.u&&ch(a,a.u);var f=a.P,g=a.f,h=a.ka;h?(h.font!=f.font&&(h.font=g.font=f.font),h.textAlign!=f.textAlign&&(h.textAlign=g.textAlign=f.textAlign),h.textBaseline!=f.textBaseline&&(h.textBaseline=g.textBaseline=f.textBaseline)):(g.font=f.font,g.textAlign=f.textAlign,g.textBaseline=f.textBaseline,a.ka={font:f.font,textAlign:f.textAlign,textBaseline:f.textBaseline});b=cc(b,e,c,d,a.A,a.F);f=a.f;g=a.Ba;for(a.Aa&&(g+=a.Oa);e<c;e+=d){var h=b[e]+
a.ta,k=b[e+1]+a.za;if(0!==g||1!=a.l){var l=zg(a.Ja,h,k,a.l,a.l,g,-h,-k);f.setTransform.apply(f,l)}a.u&&f.strokeText(a.b,h,k);a.j&&f.fillText(a.b,h,k)}0===g&&1==a.l||f.setTransform(1,0,0,1,0,0)}}function dh(a,b,c,d,e,f){var g=a.f;a=cc(b,c,d,e,a.A,a.F);g.moveTo(a[0],a[1]);b=a.length;f&&(b-=2);for(c=2;c<b;c+=2)g.lineTo(a[c],a[c+1]);f&&g.closePath();return d}function eh(a,b,c,d,e){var f,g;f=0;for(g=d.length;f<g;++f)c=dh(a,b,c,d[f],e,!0);return c}p=Zg.prototype;
p.Ra=function(a){if(yb(this.o,a.M())){if(this.c||this.a){this.c&&bh(this,this.c);this.a&&ch(this,this.a);var b;b=this.A;var c=this.F,d=a.s;b=d?cc(d,0,d.length,a.a,b,c):null;c=b[2]-b[0];d=b[3]-b[1];c=Math.sqrt(c*c+d*d);d=this.f;d.beginPath();d.arc(b[0],b[1],c,0,2*Math.PI);this.c&&d.fill();this.a&&d.stroke()}""!==this.b&&ah(this,a.s.slice(0,a.a),2,2)}};p.cd=function(a){this.fa(a.b,a.c);this.Ea(a.f);this.Ca(a.ha())};
p.mb=function(a){var b=a.s;a=a.a;this.g&&$g(this,b,b.length);""!==this.b&&ah(this,b,b.length,a)};p.kb=function(a){var b=a.s;a=a.a;this.g&&$g(this,b,b.length);""!==this.b&&ah(this,b,b.length,a)};p.ib=function(a){if(yb(this.o,a.M())){if(this.a){ch(this,this.a);var b=this.f,c=a.s;b.beginPath();dh(this,c,0,c.length,a.a,!1);b.stroke()}""!==this.b&&(a=fh(a),ah(this,a,2,2))}};
p.jb=function(a){var b=a.M();if(yb(this.o,b)){if(this.a){ch(this,this.a);var b=this.f,c=a.s,d=0,e=a.Ta(),f=a.a;b.beginPath();var g,h;g=0;for(h=e.length;g<h;++g)d=dh(this,c,d,e[g],f,!1);b.stroke()}""!==this.b&&(a=gh(a),ah(this,a,a.length,2))}};p.nb=function(a){if(yb(this.o,a.M())){if(this.a||this.c){this.c&&bh(this,this.c);this.a&&ch(this,this.a);var b=this.f;b.beginPath();eh(this,yc(a),0,a.Ta(),a.a);this.c&&b.fill();this.a&&b.stroke()}""!==this.b&&(a=zc(a),ah(this,a,2,2))}};
p.lb=function(a){if(yb(this.o,a.M())){if(this.a||this.c){this.c&&bh(this,this.c);this.a&&ch(this,this.a);var b=this.f,c=hh(a),d=0,e=a.f,f=a.a,g,h;b.beginPath();g=0;for(h=e.length;g<h;++g)d=eh(this,c,d,e[g],f);this.c&&b.fill();this.a&&b.stroke()}""!==this.b&&(a=ih(a),ah(this,a,a.length,2))}};function bh(a,b){var c=a.f,d=a.V;d?d.fillStyle!=b.fillStyle&&(d.fillStyle=c.fillStyle=b.fillStyle):(c.fillStyle=b.fillStyle,a.V={fillStyle:b.fillStyle})}
function ch(a,b){var c=a.f,d=a.ja;d?(d.lineCap!=b.lineCap&&(d.lineCap=c.lineCap=b.lineCap),Td&&!Qa(d.lineDash,b.lineDash)&&c.setLineDash(d.lineDash=b.lineDash),d.lineJoin!=b.lineJoin&&(d.lineJoin=c.lineJoin=b.lineJoin),d.lineWidth!=b.lineWidth&&(d.lineWidth=c.lineWidth=b.lineWidth),d.miterLimit!=b.miterLimit&&(d.miterLimit=c.miterLimit=b.miterLimit),d.strokeStyle!=b.strokeStyle&&(d.strokeStyle=c.strokeStyle=b.strokeStyle)):(c.lineCap=b.lineCap,Td&&c.setLineDash(b.lineDash),c.lineJoin=b.lineJoin,c.lineWidth=
b.lineWidth,c.miterLimit=b.miterLimit,c.strokeStyle=b.strokeStyle,a.ja={lineCap:b.lineCap,lineDash:b.lineDash,lineJoin:b.lineJoin,lineWidth:b.lineWidth,miterLimit:b.miterLimit,strokeStyle:b.strokeStyle})}
p.fa=function(a,b){if(a){var c=a.a;this.c={fillStyle:wd(c?c:Ig)}}else this.c=null;if(b){var c=b.a,d=b.f,e=b.c,f=b.g,g=b.b,h=b.i;this.a={lineCap:void 0!==d?d:"round",lineDash:e?e:Jg,lineJoin:void 0!==f?f:"round",lineWidth:this.B*(void 0!==g?g:1),miterLimit:void 0!==h?h:10,strokeStyle:wd(c?c:Kg)}}else this.a=null};
p.Ea=function(a){if(a){var b=a.pb(),c=a.rb(1),d=a.sb(),e=a.Ma();this.C=b[0];this.G=b[1];this.L=e[1];this.g=c;this.D=a.j;this.ba=d[0];this.ca=d[1];this.xa=a.F;this.ia=a.u;this.i=a.o;this.sa=a.B;this.Y=e[0]}else this.g=null};
p.Ca=function(a){if(a){var b=a.a;b?(b=b.a,this.j={fillStyle:wd(b?b:Ig)}):this.j=null;var c=a.b;if(c){var b=c.a,d=c.f,e=c.c,f=c.g,g=c.b,c=c.i;this.u={lineCap:void 0!==d?d:"round",lineDash:e?e:Jg,lineJoin:void 0!==f?f:"round",lineWidth:void 0!==g?g:1,miterLimit:void 0!==c?c:10,strokeStyle:wd(b?b:Kg)}}else this.u=null;var b=a.f,d=a.g,e=a.i,f=a.o,g=a.j,c=a.c,h=a.ha(),k=a.l;a=a.u;this.P={font:void 0!==b?b:"10px sans-serif",textAlign:void 0!==k?k:"center",textBaseline:void 0!==a?a:"middle"};this.b=void 0!==
h?h:"";this.ta=void 0!==d?this.B*d:0;this.za=void 0!==e?this.B*e:0;this.Aa=void 0!==f?f:!1;this.Ba=void 0!==g?g:0;this.l=this.B*(void 0!==c?c:1)}else this.b=""};function jh(a){Ga.call(this);this.a=a}z(jh,Ga);jh.prototype.na=da;jh.prototype.j=function(a,b,c){return function(d,e){return kh(a,b,d,e,function(a){c[d]||(c[d]={});c[d][a.ga.toString()]=a})}};function lh(a){var b=a.a;b.f()&&"ready"==b.lc()&&a.v()}function mh(a,b){b.gd()&&a.postRenderFunctions.push(function(a,b,e){b=A(a).toString();a.Sa(e.viewState.projection,e.usedTiles[b])}.bind(null,b))}function nh(a,b){if(b){var c,d,e;d=0;for(e=b.length;d<e;++d)c=b[d],a[A(c).toString()]=c}}
function oh(a,b){var c=b.P;void 0!==c&&("string"===typeof c?a.logos[c]="":c&&(C("string"==typeof c.href,44),C("string"==typeof c.src,45),a.logos[c.src]=c.href))}function ph(a,b,c,d){b=A(b).toString();c=c.toString();b in a?c in a[b]?(a=a[b][c],d.K<a.K&&(a.K=d.K),d.J>a.J&&(a.J=d.J),d.N<a.N&&(a.N=d.N),d.R>a.R&&(a.R=d.R)):a[b][c]=d:(a[b]={},a[b][c]=d)}
function qh(a,b,c,d,e,f,g,h,k,l){var n=A(b).toString();n in a.wantedTiles||(a.wantedTiles[n]={});var m=a.wantedTiles[n];a=a.tileQueue;var q=c.minZoom,r,u,v,w,B,y;for(y=g;y>=q;--y)for(u=Zc(c,f,y,u),v=c.a[y],w=u.K;w<=u.J;++w)for(B=u.N;B<=u.R;++B)g-y<=h?(r=rh(b,y,w,B,d,e),0==r.aa()&&(m[r.getKey()]=!0,r.getKey()in a.c||a.g([r,n,dd(c,r.ga),v])),void 0!==k&&k.call(l,r)):b.ud(y,w,B,e)};function sh(a){jh.call(this,a);this.P=sg()}z(sh,jh);function th(a,b,c){var d=b.pixelRatio,e=b.size[0]*d,f=b.size[1]*d,g=b.viewState.rotation,h=[c[0],c[3]],k=[c[2],c[3]],l=[c[2],c[1]];c=[c[0],c[1]];xg(b.coordinateToPixelTransform,h);xg(b.coordinateToPixelTransform,k);xg(b.coordinateToPixelTransform,l);xg(b.coordinateToPixelTransform,c);a.save();Lg(a,-g,e/2,f/2);a.beginPath();a.moveTo(h[0]*d,h[1]*d);a.lineTo(k[0]*d,k[1]*d);a.lineTo(l[0]*d,l[1]*d);a.lineTo(c[0]*d,c[1]*d);a.clip();Lg(a,g,e/2,f/2)}
function uh(a,b,c,d,e){var f=a.a;if(Fa(f,b)){var g=d.size[0]*d.pixelRatio,h=d.size[1]*d.pixelRatio,k=d.viewState.rotation;Lg(c,-k,g/2,h/2);a=void 0!==e?e:vh(a,d,0);H(f,new mg(b,new Zg(c,d.pixelRatio,d.extent,a,d.viewState.rotation),d,c,null));Lg(c,k,g/2,h/2)}}sh.prototype.L=function(a,b,c){uh(this,"postcompose",a,b,c)};function vh(a,b,c){var d=b.viewState,e=b.pixelRatio,f=e/d.resolution;return zg(a.P,e*b.size[0]/2,e*b.size[1]/2,f,-f,-d.rotation,-d.center[0]+c,-d.center[1])};function wh(a){sh.call(this,a);this.A=sg()}z(wh,sh);wh.prototype.o=function(a,b,c){uh(this,"precompose",c,a,void 0);var d=this.i.canvas;if(d){var e=b.extent,f=void 0!==e;f&&th(c,a,e);var e=this.u,g=c.globalAlpha;c.globalAlpha=b.opacity;c.drawImage(d,0,0,+d.width,+d.height,Math.round(e[4]),Math.round(e[5]),Math.round(d.width*e[0]),Math.round(d.height*e[3]));c.globalAlpha=g;f&&c.restore()}this.L(c,a)};
wh.prototype.na=function(a,b,c,d,e){var f=this.a;return f.oa().na(a,b.viewState.resolution,b.viewState.rotation,c,b.skippedFeatureUids,function(a){return d.call(e,a,f)})};function xh(a){wh.call(this,a);this.i=xd();this.b=null;this.g=[];this.V=gb();this.ba=new Pc(0,0,0,0);this.u=sg()}z(xh,wh);
xh.prototype.l=function(a,b){var c=a.pixelRatio,d=a.size,e=a.viewState,f=e.projection,g=e.resolution,e=e.center,h=this.a,k=h.oa(),l=k.c,n=k.Ga(f),m=fd(n,g,0),q=n.a[m],r=a.extent;void 0!==b.extent&&(r=xb(r,b.extent));if(r[2]<r[0]||r[3]<r[1])return!1;var u=bd(n,r,q),v,w=$c(n,m);v=n.a[m];var B=Tc(ed(n,m),n.o);v=mb(w[0]+u.K*B[0]*v,w[1]+u.N*B[1]*v,w[0]+(u.J+1)*B[0]*v,w[1]+(u.R+1)*B[1]*v,void 0);w=k.i;B={};B[m]={};var y=this.j(k,f,B),I=h.get(Hg),J=this.V,F=this.ba,K=!1,x,L,P;for(L=u.K;L<=u.J;++L)for(P=
u.N;P<=u.R;++P){x=rh(k,m,L,P,c,f);var G=x.aa();G==Ge||4==G||3==G&&!I?G==Ge&&(B[m][x.ga.toString()]=x,K||-1!=this.g.indexOf(x)||(K=!0)):(x=Fe(x),Xc(n,x.ga,y,F,J)||(x=ad(n,x.ga,F,J))&&y(m+1,x))}L=a.viewHints;if(!(this.f&&16<Date.now()-a.time&&(L[Hc]||L[1])||!K&&this.b&&pb(this.b,v)&&this.G==l)){x=yh(k,m,f);L=(u.J-u.K+1)*x[0];x=(u.R-u.N+1)*x[0];K=this.i;P=K.canvas;y=k.jc(f);P.width!=L||P.height!=x?(P.width=L,P.height=x):K.clearRect(0,0,L,x);this.g.length=0;I=Object.keys(B).map(Number);I.sort(Na);var N,
U,ca,ta,$a,zb,G=0;for(U=I.length;G<U;++G){L=I[G];F=yh(k,L,f);x=n.a[L];N=x/q;ca=w*k.gc(f);ta=B[L];for(var Ca in ta)x=ta[Ca],P=Yc(n,x.ga,J),L=(P[0]-v[0])/q*w,P=(v[3]-P[3])/q*w,$a=F[0]*N,zb=F[1]*N,y||K.clearRect(L,P,$a,zb),this.C(x,L,P,$a,zb,ca),this.g.push(x)}this.G=l;this.f=q;this.b=v}Ca=c/w*this.f/g;Ca=zg(this.u,c*d[0]/2,c*d[1]/2,Ca,Ca,0,w*(this.b[0]-e[0])/this.f,w*(e[1]-this.b[3])/this.f);zg(this.A,c*d[0]/2-Ca[4],c*d[1]/2-Ca[5],c/g,-c/g,0,-e[0],-e[1]);ph(a.usedTiles,k,m,u);qh(a,k,n,c,f,r,m,h.get(Gg));
mh(a,k);oh(a,k);return 0<this.g.length};xh.prototype.C=function(a,b,c,d,e,f){(a=a.Za())&&this.i.drawImage(a,f,f,a.width-2*f,a.height-2*f,b,c,d,e)};function zh(){};function Ah(a,b,c,d){this.ia=a;this.ja=b;this.overlaps=d;this.f=0;this.resolution=c;this.Y=this.L=null;this.c=[];this.coordinates=[];this.ka=sg();this.a=[];this.ba=[];this.xa=sg();this.ca=sg()}z(Ah,Yg);
function Bh(a,b,c,d,e,f,g){var h=a.coordinates.length,k=a.fc();g&&(c+=e);g=[b[c],b[c+1]];var l=[NaN,NaN],n=!0,m,q,r;for(m=c+e;m<d;m+=e){l[0]=b[m];l[1]=b[m+1];r=k[1];var u=k[2],v=k[3],w=l[0],B=l[1],y=0;w<k[0]?y|=16:w>u&&(y|=4);B<r?y|=8:B>v&&(y|=2);0===y&&(y=1);r=y;r!==q?(n&&(a.coordinates[h++]=g[0],a.coordinates[h++]=g[1]),a.coordinates[h++]=l[0],a.coordinates[h++]=l[1],n=!1):1===r?(a.coordinates[h++]=l[0],a.coordinates[h++]=l[1],n=!1):n=!0;g[0]=l[0];g[1]=l[1];q=r}if(f&&n||m===c+e)a.coordinates[h++]=
g[0],a.coordinates[h++]=g[1];return h}function Ch(a,b){a.L=[0,b,0];a.c.push(a.L);a.Y=[0,b,0];a.a.push(a.Y)}function Dh(a,b,c){if(a.V){var d=xg(a.ka,a.V.slice());b.translate(d[0],d[1]);b.rotate(c)}b.fill();a.V&&b.setTransform.apply(b,a.ca)}
function Eh(a,b,c,d,e,f,g,h,k){var l;Qa(d,a.ka)?l=a.ba:(l=cc(a.coordinates,0,a.coordinates.length,2,d,a.ba),wg(a.ka,d));d=!qa(f);for(var n=0,m=g.length,q=0,r,u=a.xa,v=a.ca,w,B,y,I,J=0,F=0,K=a.c!=g||a.overlaps?0:200;n<m;){var x=g[n],L,P,G,N;switch(x[0]){case 0:q=x[1];d&&f[A(q).toString()]||!q.T()?n=x[2]:void 0===k||yb(k,q.T().M())?++n:n=x[2]+1;break;case 1:J>K&&(Dh(a,b,e),J=0);F>K&&(b.stroke(),F=0);J||F||b.beginPath();++n;break;case 2:q=x[1];r=l[q];x=l[q+1];y=l[q+2]-r;q=l[q+3]-x;q=Math.sqrt(y*y+q*
q);b.moveTo(r+q,x);b.arc(r,x,q,0,2*Math.PI,!0);++n;break;case 3:b.closePath();++n;break;case 4:q=x[1];r=x[2];L=x[3];P=x[4]*c;G=x[5]*c;var U=x[6],ca=x[7],ta=x[8],$a=x[9];N=x[10];y=x[11];I=x[12];var zb=x[13],Ca=x[14];for(N&&(y+=e);q<r;q+=2){x=l[q]-P;N=l[q+1]-G;zb&&(x=Math.round(x),N=Math.round(N));if(1!=I||0!==y){var Wb=x+P,be=N+G;zg(u,Wb,be,I,I,y,-Wb,-be);b.setTransform.apply(b,u)}Wb=b.globalAlpha;1!=ca&&(b.globalAlpha=Wb*ca);var be=Ca+ta>L.width?L.width-ta:Ca,sj=U+$a>L.height?L.height-$a:U;b.drawImage(L,
ta,$a,be,sj,x,N,be*c,sj*c);1!=ca&&(b.globalAlpha=Wb);1==I&&0===y||b.setTransform.apply(b,v)}++n;break;case 5:q=x[1];r=x[2];G=x[3];U=x[4]*c;ca=x[5]*c;y=x[6];I=x[7]*c;L=x[8];P=x[9];for((N=x[10])&&(y+=e);q<r;q+=2){x=l[q]+U;N=l[q+1]+ca;if(1!=I||0!==y)zg(u,x,N,I,I,y,-x,-N),b.setTransform.apply(b,u);ta=G.split("\n");$a=ta.length;1<$a?(zb=Math.round(1.5*b.measureText("M").width),N-=($a-1)/2*zb):zb=0;for(Ca=0;Ca<$a;Ca++)Wb=ta[Ca],P&&b.strokeText(Wb,x,N),L&&b.fillText(Wb,x,N),N+=zb;1==I&&0===y||b.setTransform.apply(b,
v)}++n;break;case 6:if(void 0!==h&&(q=x[1],q=h(q)))return q;++n;break;case 7:K?J++:Dh(a,b,e);++n;break;case 8:q=x[1];r=x[2];x=l[q];N=l[q+1];y=x+.5|0;I=N+.5|0;if(y!==w||I!==B)b.moveTo(x,N),w=y,B=I;for(q+=2;q<r;q+=2)if(x=l[q],N=l[q+1],y=x+.5|0,I=N+.5|0,q==r-2||y!==w||I!==B)b.lineTo(x,N),w=y,B=I;++n;break;case 9:a.V=x[2];J&&(Dh(a,b,e),J=0);b.fillStyle=x[1];++n;break;case 10:w=void 0!==x[7]?x[7]:!0;var tj=x[8];B=x[2];F&&(b.stroke(),F=0);b.strokeStyle=x[1];b.lineWidth=w?B*c:B;b.lineCap=x[3];b.lineJoin=
x[4];b.miterLimit=x[5];Td&&(B=x[6],w&&c!==tj&&(B=B.map(function(a){return a*c/tj}),x[6]=B,x[8]=c),b.setLineDash(B));B=w=NaN;++n;break;case 11:b.font=x[1];b.textAlign=x[2];b.textBaseline=x[3];++n;break;case 12:K?F++:b.stroke();++n;break;default:++n}}J&&Dh(a,b,e);F&&b.stroke()}Ah.prototype.g=function(a,b,c,d,e){Eh(this,a,b,c,d,e,this.c,void 0,void 0)};
function Fh(a){var b=a.a;b.reverse();var c,d=b.length,e,f,g=-1;for(c=0;c<d;++c)if(e=b[c],f=e[0],6==f)g=c;else if(0==f){e[2]=c;e=a.a;for(f=c;g<f;){var h=e[g];e[g]=e[f];e[f]=h;++g;--f}g=-1}}function Gh(a,b){a.L[2]=a.c.length;a.L=null;a.Y[2]=a.a.length;a.Y=null;var c=[6,b];a.c.push(c);a.a.push(c)}Ah.prototype.Kb=da;Ah.prototype.fc=function(){return this.ja};function Hh(a,b,c,d){Ah.call(this,a,b,c,d);this.j=this.P=null;this.G=this.C=this.A=this.B=this.F=this.D=this.u=this.l=this.o=this.i=this.b=void 0}z(Hh,Ah);Hh.prototype.mb=function(a,b){if(this.j){Ch(this,b);var c=a.s,d=this.coordinates.length,c=Bh(this,c,0,c.length,a.a,!1,!1);this.c.push([4,d,c,this.j,this.b,this.i,this.o,this.l,this.u,this.D,this.F,this.B,this.A,this.C,this.G]);this.a.push([4,d,c,this.P,this.b,this.i,this.o,this.l,this.u,this.D,this.F,this.B,this.A,this.C,this.G]);Gh(this,b)}};
Hh.prototype.kb=function(a,b){if(this.j){Ch(this,b);var c=a.s,d=this.coordinates.length,c=Bh(this,c,0,c.length,a.a,!1,!1);this.c.push([4,d,c,this.j,this.b,this.i,this.o,this.l,this.u,this.D,this.F,this.B,this.A,this.C,this.G]);this.a.push([4,d,c,this.P,this.b,this.i,this.o,this.l,this.u,this.D,this.F,this.B,this.A,this.C,this.G]);Gh(this,b)}};Hh.prototype.Kb=function(){Fh(this);this.i=this.b=void 0;this.j=this.P=null;this.G=this.C=this.B=this.F=this.D=this.u=this.l=this.A=this.o=void 0};
Hh.prototype.Ea=function(a){var b=a.pb(),c=a.Ma(),d=a.pc(1),e=a.rb(1),f=a.sb();this.b=b[0];this.i=b[1];this.P=d;this.j=e;this.o=c[1];this.l=a.j;this.u=f[0];this.D=f[1];this.F=a.F;this.B=a.u;this.A=a.o;this.C=a.B;this.G=c[0]};function Ih(a,b,c,d){Ah.call(this,a,b,c,d);this.i=null;this.b={hb:void 0,bb:void 0,cb:null,eb:void 0,fb:void 0,gb:void 0,oc:0,strokeStyle:void 0,lineCap:void 0,lineDash:null,lineJoin:void 0,lineWidth:void 0,miterLimit:void 0}}z(Ih,Ah);function Jh(a,b,c,d,e){var f=a.coordinates.length;b=Bh(a,b,c,d,e,!1,!1);f=[8,f,b];a.c.push(f);a.a.push(f);return d}p=Ih.prototype;p.fc=function(){this.i||(this.i=jb(this.ja),0<this.f&&ib(this.i,this.resolution*(this.f+1)/2,this.i));return this.i};
function Kh(a){var b=a.b,c=b.strokeStyle,d=b.lineCap,e=b.lineDash,f=b.lineJoin,g=b.lineWidth,h=b.miterLimit;b.hb==c&&b.bb==d&&Qa(b.cb,e)&&b.eb==f&&b.fb==g&&b.gb==h||(b.oc!=a.coordinates.length&&(a.c.push([12]),b.oc=a.coordinates.length),a.c.push([10,c,g,d,f,h,e,!0,1],[1]),b.hb=c,b.bb=d,b.cb=e,b.eb=f,b.fb=g,b.gb=h)}
p.ib=function(a,b){var c=this.b,d=c.lineWidth;void 0!==c.strokeStyle&&void 0!==d&&(Kh(this),Ch(this,b),this.a.push([10,c.strokeStyle,c.lineWidth,c.lineCap,c.lineJoin,c.miterLimit,c.lineDash,!0,1],[1]),c=a.s,Jh(this,c,0,c.length,a.a),this.a.push([12]),Gh(this,b))};
p.jb=function(a,b){var c=this.b,d=c.lineWidth;if(void 0!==c.strokeStyle&&void 0!==d){Kh(this);Ch(this,b);this.a.push([10,c.strokeStyle,c.lineWidth,c.lineCap,c.lineJoin,c.miterLimit,c.lineDash,!0,1],[1]);var c=a.Ta(),d=a.s,e=a.a,f=0,g,h;g=0;for(h=c.length;g<h;++g)f=Jh(this,d,f,c[g],e);this.a.push([12]);Gh(this,b)}};p.Kb=function(){this.b.oc!=this.coordinates.length&&this.c.push([12]);Fh(this);this.b=null};
p.fa=function(a,b){var c=b.a;this.b.strokeStyle=wd(c?c:Kg);c=b.f;this.b.lineCap=void 0!==c?c:"round";c=b.c;this.b.lineDash=c?c:Jg;c=b.g;this.b.lineJoin=void 0!==c?c:"round";c=b.b;this.b.lineWidth=void 0!==c?c:1;c=b.i;this.b.miterLimit=void 0!==c?c:10;this.b.lineWidth>this.f&&(this.f=this.b.lineWidth,this.i=null)};function Lh(a,b,c,d){Ah.call(this,a,b,c,d);this.i=null;this.b={Pc:void 0,hb:void 0,bb:void 0,cb:null,eb:void 0,fb:void 0,gb:void 0,fillStyle:void 0,strokeStyle:void 0,lineCap:void 0,lineDash:null,lineJoin:void 0,lineWidth:void 0,miterLimit:void 0}}z(Lh,Ah);
function Mh(a,b,c,d,e){var f=a.b,g=void 0!==f.fillStyle,f=void 0!=f.strokeStyle,h=d.length,k=[1];a.c.push(k);a.a.push(k);for(k=0;k<h;++k){var l=d[k],n=a.coordinates.length;c=Bh(a,b,c,l,e,!0,!f);c=[8,n,c];a.c.push(c);a.a.push(c);f&&(c=[3],a.c.push(c),a.a.push(c));c=l}b=[7];a.a.push(b);g&&a.c.push(b);f&&(g=[12],a.c.push(g),a.a.push(g));return c}p=Lh.prototype;
p.Ra=function(a,b){var c=this.b,d=c.strokeStyle;if(void 0!==c.fillStyle||void 0!==d){Nh(this,a);Ch(this,b);this.a.push([9,ud(Ig)]);void 0!==c.strokeStyle&&this.a.push([10,c.strokeStyle,c.lineWidth,c.lineCap,c.lineJoin,c.miterLimit,c.lineDash,!0,1]);var e=a.s,d=this.coordinates.length;Bh(this,e,0,e.length,a.a,!1,!1);e=[1];d=[2,d];this.c.push(e,d);this.a.push(e,d);d=[7];this.a.push(d);void 0!==c.fillStyle&&this.c.push(d);void 0!==c.strokeStyle&&(c=[12],this.c.push(c),this.a.push(c));Gh(this,b)}};
p.nb=function(a,b){var c=this.b;Nh(this,a);Ch(this,b);this.a.push([9,ud(Ig)]);void 0!==c.strokeStyle&&this.a.push([10,c.strokeStyle,c.lineWidth,c.lineCap,c.lineJoin,c.miterLimit,c.lineDash,!0,1]);var c=a.Ta(),d=yc(a);Mh(this,d,0,c,a.a);Gh(this,b)};
p.lb=function(a,b){var c=this.b,d=c.strokeStyle;if(void 0!==c.fillStyle||void 0!==d){Nh(this,a);Ch(this,b);this.a.push([9,ud(Ig)]);void 0!==c.strokeStyle&&this.a.push([10,c.strokeStyle,c.lineWidth,c.lineCap,c.lineJoin,c.miterLimit,c.lineDash,!0,1]);var c=a.f,d=hh(a),e=a.a,f=0,g,h;g=0;for(h=c.length;g<h;++g)f=Mh(this,d,f,c[g],e);Gh(this,b)}};p.Kb=function(){Fh(this);this.b=null;var a=this.ia;if(0!==a){var b=this.coordinates,c,d;c=0;for(d=b.length;c<d;++c)b[c]=a*Math.round(b[c]/a)}};
p.fc=function(){this.i||(this.i=jb(this.ja),0<this.f&&ib(this.i,this.resolution*(this.f+1)/2,this.i));return this.i};
p.fa=function(a,b){var c=this.b;if(a){var d=a.a;c.fillStyle=wd(d?d:Ig)}else c.fillStyle=void 0;b?(d=b.a,c.strokeStyle=wd(d?d:Kg),d=b.f,c.lineCap=void 0!==d?d:"round",d=b.c,c.lineDash=d?d.slice():Jg,d=b.g,c.lineJoin=void 0!==d?d:"round",d=b.b,c.lineWidth=void 0!==d?d:1,d=b.i,c.miterLimit=void 0!==d?d:10,c.lineWidth>this.f&&(this.f=c.lineWidth,this.i=null)):(c.strokeStyle=void 0,c.lineCap=void 0,c.lineDash=null,c.lineJoin=void 0,c.lineWidth=void 0,c.miterLimit=void 0)};
function Nh(a,b){var c=a.b,d=c.fillStyle,e=c.strokeStyle,f=c.lineCap,g=c.lineDash,h=c.lineJoin,k=c.lineWidth,l=c.miterLimit;if(void 0!==d&&("string"!==typeof d||c.Pc!=d)){var n=[9,d];"string"!==typeof d&&(d=b.M(),n.push([d[0],d[3]]));a.c.push(n);c.Pc=c.fillStyle}void 0===e||c.hb==e&&c.bb==f&&Qa(c.cb,g)&&c.eb==h&&c.fb==k&&c.gb==l||(a.c.push([10,e,k,f,h,l,g,!0,1]),c.hb=e,c.bb=f,c.cb=g,c.eb=h,c.fb=k,c.gb=l)};function Oh(a,b,c,d){Ah.call(this,a,b,c,d);this.G=this.C=this.A=null;this.j="";this.u=this.l=0;this.D=void 0;this.B=this.F=0;this.o=this.i=this.b=null}z(Oh,Ah);
function Ph(a,b,c,d,e){if(""!==a.j&&a.o&&(a.b||a.i)){if(a.b){var f=a.b,g=a.A;if(!g||g.fillStyle!=f.fillStyle){var h=[9,f.fillStyle];a.c.push(h);a.a.push(h);g?g.fillStyle=f.fillStyle:a.A={fillStyle:f.fillStyle}}}a.i&&(f=a.i,g=a.C,g&&g.lineCap==f.lineCap&&g.lineDash==f.lineDash&&g.lineJoin==f.lineJoin&&g.lineWidth==f.lineWidth&&g.miterLimit==f.miterLimit&&g.strokeStyle==f.strokeStyle||(h=[10,f.strokeStyle,f.lineWidth,f.lineCap,f.lineJoin,f.miterLimit,f.lineDash,!1,1],a.c.push(h),a.a.push(h),g?(g.lineCap=
f.lineCap,g.lineDash=f.lineDash,g.lineJoin=f.lineJoin,g.lineWidth=f.lineWidth,g.miterLimit=f.miterLimit,g.strokeStyle=f.strokeStyle):a.C={lineCap:f.lineCap,lineDash:f.lineDash,lineJoin:f.lineJoin,lineWidth:f.lineWidth,miterLimit:f.miterLimit,strokeStyle:f.strokeStyle}));f=a.o;g=a.G;g&&g.font==f.font&&g.textAlign==f.textAlign&&g.textBaseline==f.textBaseline||(h=[11,f.font,f.textAlign,f.textBaseline],a.c.push(h),a.a.push(h),g?(g.font=f.font,g.textAlign=f.textAlign,g.textBaseline=f.textBaseline):a.G=
{font:f.font,textAlign:f.textAlign,textBaseline:f.textBaseline});Ch(a,e);f=a.coordinates.length;b=Bh(a,b,0,c,d,!1,!1);b=[5,f,b,a.j,a.l,a.u,a.F,a.B,!!a.b,!!a.i,a.D];a.c.push(b);a.a.push(b);Gh(a,e)}}
Oh.prototype.Ca=function(a){if(a){var b=a.a;b?(b=b.a,b=wd(b?b:Ig),this.b?this.b.fillStyle=b:this.b={fillStyle:b}):this.b=null;var c=a.b;if(c){var b=c.a,d=c.f,e=c.c,f=c.g,g=c.b,c=c.i,d=void 0!==d?d:"round",e=e?e.slice():Jg,f=void 0!==f?f:"round",g=void 0!==g?g:1,c=void 0!==c?c:10,b=wd(b?b:Kg);if(this.i){var h=this.i;h.lineCap=d;h.lineDash=e;h.lineJoin=f;h.lineWidth=g;h.miterLimit=c;h.strokeStyle=b}else this.i={lineCap:d,lineDash:e,lineJoin:f,lineWidth:g,miterLimit:c,strokeStyle:b}}else this.i=null;
var k=a.f,b=a.g,d=a.i,e=a.o,g=a.j,c=a.c,f=a.ha(),h=a.l,l=a.u;a=void 0!==k?k:"10px sans-serif";h=void 0!==h?h:"center";l=void 0!==l?l:"middle";this.o?(k=this.o,k.font=a,k.textAlign=h,k.textBaseline=l):this.o={font:a,textAlign:h,textBaseline:l};this.j=void 0!==f?f:"";this.l=void 0!==b?b:0;this.u=void 0!==d?d:0;this.D=void 0!==e?e:!1;this.F=void 0!==g?g:0;this.B=void 0!==c?c:1}else this.j=""};var Qh=["Polygon","Circle","LineString","Image","Text"];function Rh(a,b,c,d,e){this.D=a;this.f=b;this.l=d;this.u=c;this.i=e;this.c={};this.o=xd(1,1);this.j=sg()}z(Rh,zh);var Sh={0:[[!0]]};function Th(a,b,c){var d,e=Math.floor(a.length/2);if(b>=e)for(d=e;d<b;d++)a[d][c]=!0;else if(b<e)for(d=b+1;d<e;d++)a[d][c]=!0}
function Uh(a){if(void 0!==Sh[a])return Sh[a];for(var b=2*a+1,c=Array(b),d=0;d<b;d++)c[d]=Array(b);for(var b=a,e=d=0;b>=d;)Th(c,a+b,a+d),Th(c,a+d,a+b),Th(c,a-d,a+b),Th(c,a-b,a+d),Th(c,a-b,a-d),Th(c,a-d,a-b),Th(c,a+d,a-b),Th(c,a+b,a-d),d++,e+=1+2*d,0<2*(e-b)+1&&(--b,e+=1-2*b);return Sh[a]=c}function Vh(a){for(var b in a.c){var c=a.c[b],d;for(d in c)c[d].Kb()}}
Rh.prototype.na=function(a,b,c,d,e,f){d=Math.round(d);var g=2*d+1,h=zg(this.j,d+.5,d+.5,1/b,-1/b,-c,-a[0],-a[1]),k=this.o;k.canvas.width!==g||k.canvas.height!==g?(k.canvas.width=g,k.canvas.height=g):k.clearRect(0,0,g,g);var l;void 0!==this.i&&(l=gb(),hb(l,a),ib(l,b*(this.i+d),l));var n=Uh(d);return Wh(this,k,h,c,e,function(a){for(var b=k.getImageData(0,0,g,g).data,c=0;c<g;c++)for(var d=0;d<g;d++)if(n[c][d]&&0<b[4*(d*g+c)+3]){if(a=f(a))return a;k.clearRect(0,0,g,g);return}},l)};
Rh.prototype.a=function(a,b){var c=void 0!==a?a.toString():"0",d=this.c[c];void 0===d&&(d={},this.c[c]=d);c=d[b];void 0===c&&(c=new Xh[b](this.D,this.f,this.u,this.l),d[b]=c);return c};Rh.prototype.b=function(){return qa(this.c)};
Rh.prototype.g=function(a,b,c,d,e,f){var g=Object.keys(this.c).map(Number);g.sort(Na);var h=this.f,k=h[0],l=h[1],n=h[2],h=h[3],k=[k,l,k,h,n,h,n,l];cc(k,0,8,2,c,k);a.save();a.beginPath();a.moveTo(k[0],k[1]);a.lineTo(k[2],k[3]);a.lineTo(k[4],k[5]);a.lineTo(k[6],k[7]);a.clip();f=f?f:Qh;for(var m,q,k=0,l=g.length;k<l;++k)for(m=this.c[g[k].toString()],n=0,h=f.length;n<h;++n)q=m[f[n]],void 0!==q&&q.g(a,b,c,d,e);a.restore()};
function Wh(a,b,c,d,e,f,g){var h=Object.keys(a.c).map(Number);h.sort(function(a,b){return b-a});var k,l,n,m,q;k=0;for(l=h.length;k<l;++k)for(m=a.c[h[k].toString()],n=Qh.length-1;0<=n;--n)if(q=m[Qh[n]],void 0!==q&&(q=Eh(q,b,1,c,d,e,q.a,f,g)))return q}var Xh={Circle:Lh,Image:Hh,LineString:Ih,Polygon:Lh,Text:Oh};function Yh(a,b){return A(a)-A(b)}function Zh(a,b){var c=.5*a/b;return c*c}function $h(a,b,c,d,e,f){var g=!1,h,k;if(h=c.f)k=h.Lb(),2==k||3==k?h.sd(e,f):(0==k&&h.load(),h.Yc(e,f),g=!0);if(e=(0,c.g)(b))d=e.kc(d),(0,ai[d.$()])(a,d,c,b);return g}
var ai={Point:function(a,b,c,d){var e=c.f;if(e){if(2!=e.Lb())return;var f=a.a(c.a,"Image");f.Ea(e);f.mb(b,d)}if(e=c.ha())a=a.a(c.a,"Text"),a.Ca(e),Ph(a,b.s,2,2,d)},LineString:function(a,b,c,d){var e=c.c;if(e){var f=a.a(c.a,"LineString");f.fa(null,e);f.ib(b,d)}if(e=c.ha())a=a.a(c.a,"Text"),a.Ca(e),Ph(a,fh(b),2,2,d)},Polygon:function(a,b,c,d){var e=c.b,f=c.c;if(e||f){var g=a.a(c.a,"Polygon");g.fa(e,f);g.nb(b,d)}if(e=c.ha())a=a.a(c.a,"Text"),a.Ca(e),Ph(a,zc(b),2,2,d)},MultiPoint:function(a,b,c,d){var e=
c.f;if(e){if(2!=e.Lb())return;var f=a.a(c.a,"Image");f.Ea(e);f.kb(b,d)}if(e=c.ha())a=a.a(c.a,"Text"),a.Ca(e),c=b.s,Ph(a,c,c.length,b.a,d)},MultiLineString:function(a,b,c,d){var e=c.c;if(e){var f=a.a(c.a,"LineString");f.fa(null,e);f.jb(b,d)}if(e=c.ha())a=a.a(c.a,"Text"),a.Ca(e),b=gh(b),Ph(a,b,b.length,2,d)},MultiPolygon:function(a,b,c,d){var e=c.b,f=c.c;if(f||e){var g=a.a(c.a,"Polygon");g.fa(e,f);g.lb(b,d)}if(e=c.ha())a=a.a(c.a,"Text"),a.Ca(e),b=ih(b),Ph(a,b,b.length,2,d)},GeometryCollection:function(a,
b,c,d){b=b.b;var e,f;e=0;for(f=b.length;e<f;++e)(0,ai[b[e].$()])(a,b[e],c,d)},Circle:function(a,b,c,d){var e=c.b,f=c.c;if(e||f){var g=a.a(c.a,"Circle");g.fa(e,f);g.Ra(b,d)}if(e=c.ha())a=a.a(c.a,"Text"),a.Ca(e),Ph(a,b.s.slice(0,b.a),2,2,d)}};function bi(a){sh.call(this,a);this.b=!1;this.C=-1;this.A=NaN;this.i=gb();this.f=this.u=null;this.g=xd()}z(bi,sh);
bi.prototype.o=function(a,b,c){var d=a.extent,e=a.pixelRatio,f=b.Jb?a.skippedFeatureUids:{},g=a.viewState,h=g.projection,g=g.rotation,k=h.M(),l=this.a.oa(),n=vh(this,a,0);uh(this,"precompose",c,a,n);var m=b.extent,q=void 0!==m;q&&th(c,a,m);if((m=this.f)&&!m.b()){var r=0,u=0,v;if(Fa(this.a,"render")){v=c.canvas.width;var w=c.canvas.height;if(g){var B=Math.round(Math.sqrt(v*v+w*w)),r=(B-v)/2,u=(B-w)/2;v=w=B}this.g.canvas.width=v;this.g.canvas.height=w;v=this.g}else v=c;w=v.globalAlpha;v.globalAlpha=
b.opacity;v!=c&&v.translate(r,u);b=a.size[0]*e;B=a.size[1]*e;Lg(v,-g,b/2,B/2);m.g(v,e,n,g,f);if(l.u&&h.c&&!kb(k,d)){for(var h=d[0],l=tb(k),y=0;h<k[0];)--y,n=l*y,n=vh(this,a,n),m.g(v,e,n,g,f),h+=l;y=0;for(h=d[2];h>k[2];)++y,n=l*y,n=vh(this,a,n),m.g(v,e,n,g,f),h-=l;n=vh(this,a,0)}Lg(v,g,b/2,B/2);v!=c&&(uh(this,"render",v,a,n),c.drawImage(v.canvas,-r,-u),v.translate(-r,-u));v.globalAlpha=w}q&&c.restore();this.L(c,a,n)};
bi.prototype.na=function(a,b,c,d,e){if(this.f){var f=this.a,g={};return this.f.na(a,b.viewState.resolution,b.viewState.rotation,c,{},function(a){var b=A(a).toString();if(!(b in g))return g[b]=!0,d.call(e,a,f)})}};bi.prototype.G=function(){lh(this)};
bi.prototype.l=function(a){function b(a){var b,d=a.g;d?b=d.call(a,l):(d=c.u)&&(b=d(a,l));if(b){if(b){d=!1;if(Array.isArray(b))for(var e=0,f=b.length;e<f;++e)d=$h(q,a,b[e],Zh(l,n),this.G,this)||d;else d=$h(q,a,b,Zh(l,n),this.G,this)||d;a=d}else a=!1;this.b=this.b||a}}var c=this.a,d=c.oa();nh(a.attributions,d.B);oh(a,d);var e=a.viewHints[Hc],f=a.viewHints[1],g=c.A,h=c.C;if(!this.b&&!g&&e||!h&&f)return!0;var k=a.extent,h=a.viewState,e=h.projection,l=h.resolution,n=a.pixelRatio,f=c.c,m=c.i,g=c.get("renderOrder");
void 0===g&&(g=Yh);k=ib(k,m*l);m=h.projection.M();d.u&&h.projection.c&&!kb(m,a.extent)&&(a=Math.max(tb(k)/2,tb(m)),k[0]=m[0]-a,k[2]=m[2]+a);if(!this.b&&this.A==l&&this.C==f&&this.u==g&&kb(this.i,k))return!0;this.f=null;this.b=!1;var q=new Rh(.5*l/n,k,l,d.ba,c.i);ci(d,k,l,e);if(g){var r=[];di(d,k,function(a){r.push(a)},this);r.sort(g);r.forEach(b,this)}else di(d,k,b,this);Vh(q);this.A=l;this.C=f;this.u=g;this.i=k;this.f=q;return!0};function ei(a,b){Ag.call(this,0,b);this.f=xd();this.a=this.f.canvas;this.a.style.width="100%";this.a.style.height="100%";this.a.className="ol-unselectable";a.insertBefore(this.a,a.childNodes[0]||null);this.c=!0;this.g=sg()}z(ei,Ag);ei.prototype.Oc=function(a){return a instanceof Fg?new xh(a):a instanceof Xg?new bi(a):null};
function fi(a,b,c){var d=a.j,e=a.f;if(Fa(d,b)){var f=c.extent,g=c.pixelRatio,h=c.viewState.rotation,k=c.viewState,l=c.pixelRatio/k.resolution;a=zg(a.g,a.a.width/2,a.a.height/2,l,-l,-k.rotation,-k.center[0],-k.center[1]);H(d,new mg(b,new Zg(e,g,f,a,h),c,e,null))}}ei.prototype.$=function(){return"canvas"};
ei.prototype.uc=function(a){if(a){var b=this.f,c=a.pixelRatio,d=Math.round(a.size[0]*c),c=Math.round(a.size[1]*c);this.a.width!=d||this.a.height!=c?(this.a.width=d,this.a.height=c):b.clearRect(0,0,d,c);var e=a.viewState.rotation;Bg(a);fi(this,"precompose",a);var f=a.layerStatesArray;Ra(f);Lg(b,e,d/2,c/2);var g=a.viewState.resolution,h,k,l,n;h=0;for(k=f.length;h<k;++h)n=f[h],l=n.layer,l=Dg(this,l),og(n,g)&&"ready"==n.pd&&l.l(a,n)&&l.o(a,n,b);Lg(b,-e,d/2,c/2);fi(this,"postcompose",a);this.c||(this.a.style.display=
"",this.c=!0);Eg(this,a);a.postRenderFunctions.push(Cg)}else this.c&&(this.a.style.display="none",this.c=!1)};var gi=[0,0,0,1],hi=[],ii=[0,0,0,1];function ji(a,b,c,d,e,f){a=(c-a)*(f-b)-(e-a)*(d-b);return a<=ki&&a>=-ki?void 0:0<a}var ki=Number.EPSILON||2.220446049250313E-16;function li(a){this.a=a};function mi(a){this.a=a}z(mi,li);mi.prototype.$=function(){return 35632};function ni(a){this.a=a}z(ni,li);ni.prototype.$=function(){return 35633};function oi(){this.a="precision mediump float;varying vec2 a;varying vec2 b;varying float c;varying float d;uniform float m;uniform vec4 n;uniform vec4 o;uniform vec2 p;void main(void){vec2 windowCenter=vec2((a.x+1.0)/2.0*p.x*d,(a.y+1.0)/2.0*p.y*d);vec2 windowOffset=vec2((b.x+1.0)/2.0*p.x*d,(b.y+1.0)/2.0*p.y*d);float radius=length(windowCenter-windowOffset);float dist=length(windowCenter-gl_FragCoord.xy);if(dist>radius+c){if(o.a==0.0){gl_FragColor=n;}else{gl_FragColor=o;}gl_FragColor.a=gl_FragColor.a-(dist-(radius+c));}else if(n.a==0.0){gl_FragColor=o;if(dist<radius-c){gl_FragColor.a=gl_FragColor.a-(radius-c-dist);}} else{gl_FragColor=n;float strokeDist=radius-c;float antialias=2.0*d;if(dist>strokeDist){gl_FragColor=o;}else if(dist>=strokeDist-antialias){float step=smoothstep(strokeDist-antialias,strokeDist,dist);gl_FragColor=mix(n,o,step);}} gl_FragColor.a=gl_FragColor.a*m;if(gl_FragColor.a<=0.0){discard;}}"}
z(oi,mi);var pi=new oi;
function qi(){this.a="varying vec2 a;varying vec2 b;varying float c;varying float d;attribute vec2 e;attribute float f;attribute float g;uniform mat4 h;uniform mat4 i;uniform mat4 j;uniform float k;uniform float l;void main(void){mat4 offsetMatrix=i*j;a=vec4(h*vec4(e,0.0,1.0)).xy;d=l;float lineWidth=k*l;c=lineWidth/2.0;if(lineWidth==0.0){lineWidth=2.0*l;}vec2 offset;float radius=g+3.0*l;if(f==0.0){offset=vec2(-1.0,1.0);}else if(f==1.0){offset=vec2(-1.0,-1.0);}else if(f==2.0){offset=vec2(1.0,-1.0);}else{offset=vec2(1.0,1.0);}gl_Position=h*vec4(e+offset*radius,0.0,1.0)+offsetMatrix*vec4(offset*lineWidth,0.0,0.0);b=vec4(h*vec4(e.x+g,e.y,0.0,1.0)).xy;if(distance(a,b)>20000.0){gl_Position=vec4(a,0.0,1.0);}}"}
z(qi,ni);var ri=new qi;function si(a,b){this.C=a.getUniformLocation(b,"n");this.G=a.getUniformLocation(b,"k");this.f=a.getUniformLocation(b,"j");this.g=a.getUniformLocation(b,"i");this.c=a.getUniformLocation(b,"m");this.L=a.getUniformLocation(b,"l");this.b=a.getUniformLocation(b,"h");this.Y=a.getUniformLocation(b,"p");this.P=a.getUniformLocation(b,"o");this.o=a.getAttribLocation(b,"f");this.a=a.getAttribLocation(b,"e");this.F=a.getAttribLocation(b,"g")};function ti(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function ui(a,b){a[0]=b[0];a[1]=b[1];a[4]=b[2];a[5]=b[3];a[12]=b[4];a[13]=b[5];return a};function vi(a,b){this.origin=vb(b);this.Ba=sg();this.za=sg();this.Aa=sg();this.sa=ti();this.a=[];this.l=null;this.b=[];this.i=[];this.c=[];this.u=null;this.o=void 0}z(vi,Yg);
vi.prototype.g=function(a,b,c,d,e,f,g,h,k,l,n){var m=a.a,q,r,u,v,w,B,y,I;this.o&&(q=m.isEnabled(m.STENCIL_TEST),r=m.getParameter(m.STENCIL_FUNC),u=m.getParameter(m.STENCIL_VALUE_MASK),v=m.getParameter(m.STENCIL_REF),w=m.getParameter(m.STENCIL_WRITEMASK),B=m.getParameter(m.STENCIL_FAIL),y=m.getParameter(m.STENCIL_PASS_DEPTH_PASS),I=m.getParameter(m.STENCIL_PASS_DEPTH_FAIL),m.enable(m.STENCIL_TEST),m.clear(m.STENCIL_BUFFER_BIT),m.stencilMask(255),m.stencilFunc(m.ALWAYS,1,255),m.stencilOp(m.KEEP,m.KEEP,
m.REPLACE),this.o.g(a,b,c,d,e,f,g,h,k,l,n),m.stencilMask(0),m.stencilFunc(m.NOTEQUAL,1,255));wi(a,34962,this.u);wi(a,34963,this.l);f=this.Nb(m,a,e,f);var J=tg(this.Ba);vg(J,ug(rg,2/(c*e[0]),0,0,2/(c*e[1]),0,0));yg(J,-d);vg(J,ug(rg,1,0,0,1,-(b[0]-this.origin[0]),-(b[1]-this.origin[1])));b=tg(this.Aa);vg(b,ug(rg,2/e[0],0,0,2/e[1],0,0));e=tg(this.za);0!==d&&yg(e,-d);m.uniformMatrix4fv(f.b,!1,ui(this.sa,J));m.uniformMatrix4fv(f.g,!1,ui(this.sa,b));m.uniformMatrix4fv(f.f,!1,ui(this.sa,e));m.uniform1f(f.c,
g);var F;void 0===k?this.ob(m,a,h,!1):(l?a=this.Db(m,a,h,k,n):(m.clear(m.COLOR_BUFFER_BIT|m.DEPTH_BUFFER_BIT),this.ob(m,a,h,!0),a=(a=k(null))?a:void 0),F=a);this.Ob(m,f);this.o&&(q||m.disable(m.STENCIL_TEST),m.clear(m.STENCIL_BUFFER_BIT),m.stencilFunc(r,v,u),m.stencilMask(w),m.stencilOp(B,I,y));return F};function xi(a,b,c,d){a.drawElements(4,d-c,b.i?5125:5123,c*(b.i?4:2))};function yi(a){this.a=void 0!==a?a:[];this.c=zi}var zi=35044;function Ai(a,b){vi.call(this,0,b);this.D=null;this.j=[];this.F=[];this.B=0;this.f={fillColor:null,strokeColor:null,lineDash:null,lineWidth:void 0,v:!1}}z(Ai,vi);p=Ai.prototype;
p.Ra=function(a,b){var c=a.f(),d=a.a;if(c){this.b.push(this.a.length);this.i.push(b);this.f.v&&(this.F.push(this.a.length),this.f.v=!1);this.B=c;var c=a.s,c=dc(c,2,d,-this.origin[0],-this.origin[1]),e=this.c.length,f=this.a.length,g=e/4,h;for(h=0;2>h;h+=d)this.c[e++]=c[h],this.c[e++]=c[h+1],this.c[e++]=0,this.c[e++]=this.B,this.c[e++]=c[h],this.c[e++]=c[h+1],this.c[e++]=1,this.c[e++]=this.B,this.c[e++]=c[h],this.c[e++]=c[h+1],this.c[e++]=2,this.c[e++]=this.B,this.c[e++]=c[h],this.c[e++]=c[h+1],this.c[e++]=
3,this.c[e++]=this.B,this.a[f++]=g,this.a[f++]=g+1,this.a[f++]=g+2,this.a[f++]=g+2,this.a[f++]=g+3,this.a[f++]=g,g+=4}else this.f.v&&(this.j.pop(),this.j.length&&(d=this.j[this.j.length-1],this.f.fillColor=d[0],this.f.strokeColor=d[1],this.f.lineWidth=d[2],this.f.v=!1))};p.va=function(){this.u=new yi(this.c);this.l=new yi(this.a);this.b.push(this.a.length);0===this.F.length&&0<this.j.length&&(this.j=[]);this.a=this.c=null};p.wa=function(a){var b=this.u,c=this.l;return function(){Bi(a,b);Bi(a,c)}};
p.Nb=function(a,b,c,d){var e=Ci(b,pi,ri),f;this.D?f=this.D:this.D=f=new si(a,e);Di(b,e);a.enableVertexAttribArray(f.a);a.vertexAttribPointer(f.a,2,5126,!1,16,0);a.enableVertexAttribArray(f.o);a.vertexAttribPointer(f.o,1,5126,!1,16,8);a.enableVertexAttribArray(f.F);a.vertexAttribPointer(f.F,1,5126,!1,16,12);a.uniform2fv(f.Y,c);a.uniform1f(f.L,d);return f};p.Ob=function(a,b){a.disableVertexAttribArray(b.a);a.disableVertexAttribArray(b.o);a.disableVertexAttribArray(b.F)};
p.ob=function(a,b,c){if(qa(c)){var d,e,f;e=this.b[this.b.length-1];for(c=this.F.length-1;0<=c;--c)d=this.F[c],f=this.j[c],a.uniform4fv(this.D.C,f[0]),Ei(this,a,f[1],f[2]),xi(a,b,d,e),e=d}else{var g,h,k,l;k=this.b.length-2;f=e=this.b[k+1];for(d=this.F.length-1;0<=d;--d){g=this.j[d];a.uniform4fv(this.D.C,g[0]);Ei(this,a,g[1],g[2]);for(g=this.F[d];0<=k&&this.b[k]>=g;)l=this.b[k],h=this.i[k],h=A(h).toString(),c[h]&&(e!==f&&xi(a,b,e,f),f=l),k--,e=l;e!==f&&xi(a,b,e,f);e=f=g}}};
p.Db=function(a,b,c,d,e){var f,g,h,k,l,n,m;m=this.b.length-2;h=this.b[m+1];for(f=this.F.length-1;0<=f;--f)for(g=this.j[f],a.uniform4fv(this.D.C,g[0]),Ei(this,a,g[1],g[2]),k=this.F[f];0<=m&&this.b[m]>=k;){g=this.b[m];l=this.i[m];n=A(l).toString();if(void 0===c[n]&&l.T()&&(void 0===e||yb(e,l.T().M()))&&(a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT),xi(a,b,g,h),h=d(l)))return h;m--;h=g}};function Ei(a,b,c,d){b.uniform4fv(a.D.P,c);b.uniform1f(a.D.G,d)}
p.fa=function(a,b){var c,d;b?(c=b.c,this.f.lineDash=c?c:hi,c=b.a,c instanceof CanvasGradient||c instanceof CanvasPattern?c=ii:c=sd(c).map(function(a,b){return 3!=b?a/255:a})||ii,d=b.b,d=void 0!==d?d:1):(c=[0,0,0,0],d=0);var e=a?a.a:[0,0,0,0];e instanceof CanvasGradient||e instanceof CanvasPattern?e=gi:e=sd(e).map(function(a,b){return 3!=b?a/255:a})||gi;this.f.strokeColor&&Qa(this.f.strokeColor,c)&&this.f.fillColor&&Qa(this.f.fillColor,e)&&this.f.lineWidth===d||(this.f.v=!0,this.f.fillColor=e,this.f.strokeColor=
c,this.f.lineWidth=d,this.j.push([e,c,d]))};function Fi(){this.a="precision mediump float;varying vec2 a;varying float b;uniform float k;uniform sampler2D l;void main(void){vec4 texColor=texture2D(l,a);gl_FragColor.rgb=texColor.rgb;float alpha=texColor.a*b*k;if(alpha==0.0){discard;}gl_FragColor.a=alpha;}"}z(Fi,mi);var Gi=new Fi;
function Hi(){this.a="varying vec2 a;varying float b;attribute vec2 c;attribute vec2 d;attribute vec2 e;attribute float f;attribute float g;uniform mat4 h;uniform mat4 i;uniform mat4 j;void main(void){mat4 offsetMatrix=i;if(g==1.0){offsetMatrix=i*j;}vec4 offsets=offsetMatrix*vec4(e,0.0,0.0);gl_Position=h*vec4(c,0.0,1.0)+offsets;a=d;b=f;}"}z(Hi,ni);var Ii=new Hi;
function Ji(a,b){this.f=a.getUniformLocation(b,"j");this.g=a.getUniformLocation(b,"i");this.c=a.getUniformLocation(b,"k");this.b=a.getUniformLocation(b,"h");this.u=a.getAttribLocation(b,"e");this.D=a.getAttribLocation(b,"f");this.a=a.getAttribLocation(b,"c");this.B=a.getAttribLocation(b,"g");this.A=a.getAttribLocation(b,"d")};function Ki(a,b){this.u=a;this.a=b;this.c={};this.f={};this.b={};this.j=this.l=this.g=this.o=null;(this.i=0<=ba.indexOf("OES_element_index_uint"))&&b.getExtension("OES_element_index_uint");E(this.u,"webglcontextlost",this.D,this);E(this.u,"webglcontextrestored",this.F,this)}z(Ki,za);
function wi(a,b,c){var d=a.a,e=c.a,f=String(A(c));if(f in a.c)d.bindBuffer(b,a.c[f].buffer);else{var g=d.createBuffer();d.bindBuffer(b,g);var h;34962==b?h=new Float32Array(e):34963==b&&(h=a.i?new Uint32Array(e):new Uint16Array(e));d.bufferData(b,h,c.c);a.c[f]={Fa:c,buffer:g}}}function Bi(a,b){var c=a.a,d=String(A(b)),e=a.c[d];c.isContextLost()||c.deleteBuffer(e.buffer);delete a.c[d]}
Ki.prototype.Z=function(){ya(this.u);var a=this.a;if(!a.isContextLost()){for(var b in this.c)a.deleteBuffer(this.c[b].buffer);for(b in this.b)a.deleteProgram(this.b[b]);for(b in this.f)a.deleteShader(this.f[b]);a.deleteFramebuffer(this.g);a.deleteRenderbuffer(this.j);a.deleteTexture(this.l)}};
function Li(a){if(!a.g){var b=a.a,c=b.createFramebuffer();b.bindFramebuffer(b.FRAMEBUFFER,c);var d=Mi(b,1,1),e=b.createRenderbuffer();b.bindRenderbuffer(b.RENDERBUFFER,e);b.renderbufferStorage(b.RENDERBUFFER,b.DEPTH_COMPONENT16,1,1);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,d,0);b.framebufferRenderbuffer(b.FRAMEBUFFER,b.DEPTH_ATTACHMENT,b.RENDERBUFFER,e);b.bindTexture(b.TEXTURE_2D,null);b.bindRenderbuffer(b.RENDERBUFFER,null);b.bindFramebuffer(b.FRAMEBUFFER,null);a.g=c;
a.l=d;a.j=e}return a.g}function Ni(a,b){var c=String(A(b));if(c in a.f)return a.f[c];var d=a.a,e=d.createShader(b.$());d.shaderSource(e,b.a);d.compileShader(e);return a.f[c]=e}function Ci(a,b,c){var d=A(b)+"/"+A(c);if(d in a.b)return a.b[d];var e=a.a,f=e.createProgram();e.attachShader(f,Ni(a,b));e.attachShader(f,Ni(a,c));e.linkProgram(f);return a.b[d]=f}Ki.prototype.D=function(){oa(this.c);oa(this.f);oa(this.b);this.j=this.l=this.g=this.o=null};Ki.prototype.F=function(){};
function Di(a,b){if(b==a.o)return!1;a.a.useProgram(b);a.o=b;return!0}function Oi(a,b,c){var d=a.createTexture();a.bindTexture(a.TEXTURE_2D,d);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MAG_FILTER,a.LINEAR);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR);void 0!==b&&a.texParameteri(3553,10242,b);void 0!==c&&a.texParameteri(3553,10243,c);return d}function Mi(a,b,c){var d=Oi(a,void 0,void 0);a.texImage2D(a.TEXTURE_2D,0,a.RGBA,b,c,0,a.RGBA,a.UNSIGNED_BYTE,null);return d};function Pi(a,b){vi.call(this,0,b);this.C=this.A=void 0;this.B=[];this.D=[];this.L=void 0;this.j=[];this.f=[];this.P=this.Y=void 0;this.G=null;this.xa=this.ca=this.ba=this.ka=this.ja=this.V=void 0;this.ta=[];this.F=[];this.ia=void 0}z(Pi,vi);p=Pi.prototype;p.wa=function(a){var b=this.u,c=this.l,d=this.ta,e=this.F,f=a.a;return function(){if(!f.isContextLost()){var g,h;g=0;for(h=d.length;g<h;++g)f.deleteTexture(d[g]);g=0;for(h=e.length;g<h;++g)f.deleteTexture(e[g])}Bi(a,b);Bi(a,c)}};
function Qi(a,b,c,d){var e=a.A,f=a.C,g=a.L,h=a.Y,k=a.P,l=a.V,n=a.ja,m=a.ka,q=a.ba?1:0,r=-a.ca,u=a.xa,v=a.ia,w=Math.cos(r),r=Math.sin(r),B=a.a.length,y=a.c.length,I,J,F,K,x,L;for(I=0;I<c;I+=d)x=b[I]-a.origin[0],L=b[I+1]-a.origin[1],J=y/8,F=-u*e,K=-u*(g-f),a.c[y++]=x,a.c[y++]=L,a.c[y++]=F*w-K*r,a.c[y++]=F*r+K*w,a.c[y++]=n/k,a.c[y++]=(m+g)/h,a.c[y++]=l,a.c[y++]=q,F=u*(v-e),K=-u*(g-f),a.c[y++]=x,a.c[y++]=L,a.c[y++]=F*w-K*r,a.c[y++]=F*r+K*w,a.c[y++]=(n+v)/k,a.c[y++]=(m+g)/h,a.c[y++]=l,a.c[y++]=q,F=u*(v-
e),K=u*f,a.c[y++]=x,a.c[y++]=L,a.c[y++]=F*w-K*r,a.c[y++]=F*r+K*w,a.c[y++]=(n+v)/k,a.c[y++]=m/h,a.c[y++]=l,a.c[y++]=q,F=-u*e,K=u*f,a.c[y++]=x,a.c[y++]=L,a.c[y++]=F*w-K*r,a.c[y++]=F*r+K*w,a.c[y++]=n/k,a.c[y++]=m/h,a.c[y++]=l,a.c[y++]=q,a.a[B++]=J,a.a[B++]=J+1,a.a[B++]=J+2,a.a[B++]=J,a.a[B++]=J+2,a.a[B++]=J+3}p.kb=function(a,b){this.b.push(this.a.length);this.i.push(b);var c=a.s;Qi(this,c,c.length,a.a)};p.mb=function(a,b){this.b.push(this.a.length);this.i.push(b);var c=a.s;Qi(this,c,c.length,a.a)};
p.va=function(a){a=a.a;this.B.push(this.a.length);this.D.push(this.a.length);this.u=new yi(this.c);this.l=new yi(this.a);var b={};Ri(this.ta,this.j,b,a);Ri(this.F,this.f,b,a);this.L=this.C=this.A=void 0;this.f=this.j=null;this.P=this.Y=void 0;this.a=null;this.xa=this.ca=this.ba=this.ka=this.ja=this.V=void 0;this.c=null;this.ia=void 0};
function Ri(a,b,c,d){var e,f,g,h,k=b.length;for(h=0;h<k;++h){f=b[h];g=A(f).toString();if(g in c)e=c[g];else{e=d;var l=Oi(e,33071,33071);e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,f);e=l;c[g]=e}a[h]=e}}
p.Nb=function(a,b){var c=Ci(b,Gi,Ii),d;this.G?d=this.G:this.G=d=new Ji(a,c);Di(b,c);a.enableVertexAttribArray(d.a);a.vertexAttribPointer(d.a,2,5126,!1,32,0);a.enableVertexAttribArray(d.u);a.vertexAttribPointer(d.u,2,5126,!1,32,8);a.enableVertexAttribArray(d.A);a.vertexAttribPointer(d.A,2,5126,!1,32,16);a.enableVertexAttribArray(d.D);a.vertexAttribPointer(d.D,1,5126,!1,32,24);a.enableVertexAttribArray(d.B);a.vertexAttribPointer(d.B,1,5126,!1,32,28);return d};
p.Ob=function(a,b){a.disableVertexAttribArray(b.a);a.disableVertexAttribArray(b.u);a.disableVertexAttribArray(b.A);a.disableVertexAttribArray(b.D);a.disableVertexAttribArray(b.B)};
p.ob=function(a,b,c,d){var e=d?this.F:this.ta;d=d?this.D:this.B;if(qa(c)){var f,g;c=0;f=e.length;for(g=0;c<f;++c){a.bindTexture(3553,e[c]);var h=d[c];xi(a,b,g,h);g=h}}else for(g=f=0,h=e.length;g<h;++g){a.bindTexture(3553,e[g]);for(var k=0<g?d[g-1]:0,l=d[g],n=k;f<this.b.length&&this.b[f]<=l;){var m=A(this.i[f]).toString();void 0!==c[m]?(n!==k&&xi(a,b,n,k),k=n=f===this.b.length-1?l:this.b[f+1]):k=f===this.b.length-1?l:this.b[f+1];f++}n!==k&&xi(a,b,n,k)}};
p.Db=function(a,b,c,d,e){var f,g,h,k,l,n,m=this.b.length-1;for(f=this.F.length-1;0<=f;--f)for(a.bindTexture(3553,this.F[f]),g=0<f?this.D[f-1]:0,k=this.D[f];0<=m&&this.b[m]>=g;){h=this.b[m];l=this.i[m];n=A(l).toString();if(void 0===c[n]&&l.T()&&(void 0===e||yb(e,l.T().M()))&&(a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT),xi(a,b,h,k),k=d(l)))return k;k=h;m--}};
p.Ea=function(a){var b=a.pb(),c=a.rb(1),d=a.hc(),e=a.pc(1),f=a.j,g=a.sb(),h=a.F,k=a.u,l=a.Ma();a=a.o;var n;0===this.j.length?this.j.push(c):(n=this.j[this.j.length-1],A(n)!=A(c)&&(this.B.push(this.a.length),this.j.push(c)));0===this.f.length?this.f.push(e):(n=this.f[this.f.length-1],A(n)!=A(e)&&(this.D.push(this.a.length),this.f.push(e)));this.A=b[0];this.C=b[1];this.L=l[1];this.Y=d[1];this.P=d[0];this.V=f;this.ja=g[0];this.ka=g[1];this.ca=k;this.ba=h;this.xa=a;this.ia=l[0]};function Si(a,b,c){var d=b-c;if(a[0]===a[d]&&a[1]===a[d+1]&&3<(b-0)/c){for(var e=d=0,f=a[b-c],g=a[b-c+1];d<b;d+=c)var h=a[d],k=a[d+1],e=e+(g*h-f*k),f=h,g=k;a=!!(e/2)}else a=!1;return a};function Ti(){this.a="precision mediump float;varying float a;varying vec2 b;varying float c;uniform float m;uniform vec4 n;uniform vec2 o;uniform float p;void main(void){if(a>0.0){vec2 windowCoords=vec2((b.x+1.0)/2.0*o.x*p,(b.y+1.0)/2.0*o.y*p);if(length(windowCoords-gl_FragCoord.xy)>c*p){discard;}} gl_FragColor=n;float alpha=n.a*m;if(alpha==0.0){discard;}gl_FragColor.a=alpha;}"}z(Ti,mi);var Ui=new Ti;
function Vi(){this.a="varying float a;varying vec2 b;varying float c;attribute vec2 d;attribute vec2 e;attribute vec2 f;attribute float g;uniform mat4 h;uniform mat4 i;uniform mat4 j;uniform float k;uniform float l;bool nearlyEquals(in float value,in float ref){float epsilon=0.000000000001;return value>=ref-epsilon&&value<=ref+epsilon;}void alongNormal(out vec2 offset,in vec2 nextP,in float turnDir,in float direction){vec2 dirVect=nextP-e;vec2 normal=normalize(vec2(-turnDir*dirVect.y,turnDir*dirVect.x));offset=k/2.0*normal*direction;}void miterUp(out vec2 offset,out float round,in bool isRound,in float direction){float halfWidth=k/2.0;vec2 tangent=normalize(normalize(f-e)+normalize(e-d));vec2 normal=vec2(-tangent.y,tangent.x);vec2 dirVect=f-e;vec2 tmpNormal=normalize(vec2(-dirVect.y,dirVect.x));float miterLength=abs(halfWidth/dot(normal,tmpNormal));offset=normal*direction*miterLength;round=0.0;if(isRound){round=1.0;}else if(miterLength>l+k){offset=halfWidth*tmpNormal*direction;}} bool miterDown(out vec2 offset,in vec4 projPos,in mat4 offsetMatrix,in float direction){bool degenerate=false;vec2 tangent=normalize(normalize(f-e)+normalize(e-d));vec2 normal=vec2(-tangent.y,tangent.x);vec2 dirVect=d-e;vec2 tmpNormal=normalize(vec2(-dirVect.y,dirVect.x));vec2 longOffset,shortOffset,longVertex;vec4 shortProjVertex;float halfWidth=k/2.0;if(length(f-e)>length(d-e)){longOffset=tmpNormal*direction*halfWidth;shortOffset=normalize(vec2(dirVect.y,-dirVect.x))*direction*halfWidth;longVertex=f;shortProjVertex=h*vec4(d,0.0,1.0);}else{shortOffset=tmpNormal*direction*halfWidth;longOffset=normalize(vec2(dirVect.y,-dirVect.x))*direction*halfWidth;longVertex=d;shortProjVertex=h*vec4(f,0.0,1.0);}vec4 p1=h*vec4(longVertex,0.0,1.0)+offsetMatrix*vec4(longOffset,0.0,0.0);vec4 p2=projPos+offsetMatrix*vec4(longOffset,0.0,0.0);vec4 p3=shortProjVertex+offsetMatrix*vec4(-shortOffset,0.0,0.0);vec4 p4=shortProjVertex+offsetMatrix*vec4(shortOffset,0.0,0.0);float denom=(p4.y-p3.y)*(p2.x-p1.x)-(p4.x-p3.x)*(p2.y-p1.y);float firstU=((p4.x-p3.x)*(p1.y-p3.y)-(p4.y-p3.y)*(p1.x-p3.x))/denom;float secondU=((p2.x-p1.x)*(p1.y-p3.y)-(p2.y-p1.y)*(p1.x-p3.x))/denom;float epsilon=0.000000000001;if(firstU>epsilon&&firstU<1.0-epsilon&&secondU>epsilon&&secondU<1.0-epsilon){shortProjVertex.x=p1.x+firstU*(p2.x-p1.x);shortProjVertex.y=p1.y+firstU*(p2.y-p1.y);offset=shortProjVertex.xy;degenerate=true;}else{float miterLength=abs(halfWidth/dot(normal,tmpNormal));offset=normal*direction*miterLength;}return degenerate;}void squareCap(out vec2 offset,out float round,in bool isRound,in vec2 nextP,in float turnDir,in float direction){round=0.0;vec2 dirVect=e-nextP;vec2 firstNormal=normalize(dirVect);vec2 secondNormal=vec2(turnDir*firstNormal.y*direction,-turnDir*firstNormal.x*direction);vec2 hypotenuse=normalize(firstNormal-secondNormal);vec2 normal=vec2(turnDir*hypotenuse.y*direction,-turnDir*hypotenuse.x*direction);float length=sqrt(c*c*2.0);offset=normal*length;if(isRound){round=1.0;}} void main(void){bool degenerate=false;float direction=float(sign(g));mat4 offsetMatrix=i*j;vec2 offset;vec4 projPos=h*vec4(e,0.0,1.0);bool round=nearlyEquals(mod(g,2.0),0.0);a=0.0;c=k/2.0;b=projPos.xy;if(nearlyEquals(mod(g,3.0),0.0)||nearlyEquals(mod(g,17.0),0.0)){alongNormal(offset,f,1.0,direction);}else if(nearlyEquals(mod(g,5.0),0.0)||nearlyEquals(mod(g,13.0),0.0)){alongNormal(offset,d,-1.0,direction);}else if(nearlyEquals(mod(g,23.0),0.0)){miterUp(offset,a,round,direction);}else if(nearlyEquals(mod(g,19.0),0.0)){degenerate=miterDown(offset,projPos,offsetMatrix,direction);}else if(nearlyEquals(mod(g,7.0),0.0)){squareCap(offset,a,round,f,1.0,direction);}else if(nearlyEquals(mod(g,11.0),0.0)){squareCap(offset,a,round,d,-1.0,direction);}if(!degenerate){vec4 offsets=offsetMatrix*vec4(offset,0.0,0.0);gl_Position=projPos+offsets;}else{gl_Position=vec4(offset,0.0,1.0);}}"}
z(Vi,ni);var Wi=new Vi;function Xi(a,b){this.C=a.getUniformLocation(b,"n");this.G=a.getUniformLocation(b,"k");this.P=a.getUniformLocation(b,"l");this.f=a.getUniformLocation(b,"j");this.g=a.getUniformLocation(b,"i");this.c=a.getUniformLocation(b,"m");this.L=a.getUniformLocation(b,"p");this.b=a.getUniformLocation(b,"h");this.Y=a.getUniformLocation(b,"o");this.i=a.getAttribLocation(b,"g");this.j=a.getAttribLocation(b,"d");this.l=a.getAttribLocation(b,"f");this.a=a.getAttribLocation(b,"e")};function Yi(a,b){vi.call(this,0,b);this.D=null;this.F=[];this.j=[];this.f={strokeColor:null,lineCap:void 0,lineDash:null,lineJoin:void 0,lineWidth:void 0,miterLimit:void 0,v:!1}}z(Yi,vi);
function Zi(a,b,c,d){var e,f=a.c.length,g=a.a.length,h="bevel"===a.f.lineJoin?0:"miter"===a.f.lineJoin?1:2,k="butt"===a.f.lineCap?0:"square"===a.f.lineCap?1:2,l=Si(b,c,d),n,m,q,r=g,u=1,v,w,B;for(e=0;e<c;e+=d){q=f/7;v=w;w=B||[b[e],b[e+1]];if(0===e){B=[b[e+d],b[e+d+1]];if(c-0===2*d&&Qa(w,B))break;if(l)v=[b[c-2*d],b[c-2*d+1]],n=B;else{k&&(f=$i(a,[0,0],w,B,7*u*k,f),f=$i(a,[0,0],w,B,7*-u*k,f),a.a[g++]=q+2,a.a[g++]=q,a.a[g++]=q+1,a.a[g++]=q+1,a.a[g++]=q+3,a.a[g++]=q+2);f=$i(a,[0,0],w,B,3*u*(k||1),f);f=
$i(a,[0,0],w,B,3*-u*(k||1),f);r=f/7-1;continue}}else if(e===c-d){l?B=n:(v=v||[0,0],f=$i(a,v,w,[0,0],5*u*(k||1),f),f=$i(a,v,w,[0,0],5*-u*(k||1),f),a.a[g++]=q,a.a[g++]=r-1,a.a[g++]=r,a.a[g++]=r,a.a[g++]=q+1,a.a[g++]=q,k&&(f=$i(a,v,w,[0,0],11*u*k,f),f=$i(a,v,w,[0,0],11*-u*k,f),a.a[g++]=q+2,a.a[g++]=q,a.a[g++]=q+1,a.a[g++]=q+1,a.a[g++]=q+3,a.a[g++]=q+2));break}else B=[b[e+d],b[e+d+1]];m=ji(v[0],v[1],w[0],w[1],B[0],B[1])?-1:1;f=$i(a,v,w,B,13*m*(h||1),f);f=$i(a,v,w,B,17*m*(h||1),f);f=$i(a,v,w,B,19*-m*(h||
1),f);0<e&&(a.a[g++]=q,a.a[g++]=r-1,a.a[g++]=r,a.a[g++]=q+2,a.a[g++]=q,a.a[g++]=0<u*m?r:r-1);a.a[g++]=q;a.a[g++]=q+2;a.a[g++]=q+1;r=q+2;u=m;h&&(f=$i(a,v,w,B,23*m*h,f),a.a[g++]=q+1,a.a[g++]=q+3,a.a[g++]=q)}l&&(q=q||f/7,m=tc([v[0],v[1],w[0],w[1],B[0],B[1]],0,6,2)?1:-1,f=$i(a,v,w,B,13*m*(h||1),f),$i(a,v,w,B,19*-m*(h||1),f),a.a[g++]=q,a.a[g++]=r-1,a.a[g++]=r,a.a[g++]=q+1,a.a[g++]=q,a.a[g++]=0<u*m?r:r-1)}
function $i(a,b,c,d,e,f){a.c[f++]=b[0];a.c[f++]=b[1];a.c[f++]=c[0];a.c[f++]=c[1];a.c[f++]=d[0];a.c[f++]=d[1];a.c[f++]=e;return f}function aj(a,b,c){b-=0;return b<2*c?!1:b===2*c?!Qa([a[0],a[1]],[a[0+c],a[c+1]]):!0}p=Yi.prototype;p.ib=function(a,b){var c=a.s,d=a.a;aj(c,c.length,d)&&(c=dc(c,c.length,d,-this.origin[0],-this.origin[1]),this.f.v&&(this.j.push(this.a.length),this.f.v=!1),this.b.push(this.a.length),this.i.push(b),Zi(this,c,c.length,d))};
p.jb=function(a,b){var c=this.a.length,d=bj(a),e,f;e=0;for(f=d.length;e<f;++e){var g=d[e].s,h=d[e].a;aj(g,g.length,h)&&(g=dc(g,g.length,h,-this.origin[0],-this.origin[1]),Zi(this,g,g.length,h))}this.a.length>c&&(this.b.push(c),this.i.push(b),this.f.v&&(this.j.push(c),this.f.v=!1))};
function cj(a,b,c,d){Si(b,b.length,d)||(b.push(b[0]),b.push(b[1]));Zi(a,b,b.length,d);if(c.length){var e;b=0;for(e=c.length;b<e;++b)Si(c[b],c[b].length,d)||(c[b].push(c[b][0]),c[b].push(c[b][1])),Zi(a,c[b],c[b].length,d)}}function dj(a,b,c){c=void 0===c?a.a.length:c;a.b.push(c);a.i.push(b);a.f.v&&(a.j.push(c),a.f.v=!1)}p.va=function(){this.u=new yi(this.c);this.l=new yi(this.a);this.b.push(this.a.length);0===this.j.length&&0<this.F.length&&(this.F=[]);this.a=this.c=null};
p.wa=function(a){var b=this.u,c=this.l;return function(){Bi(a,b);Bi(a,c)}};p.Nb=function(a,b,c,d){var e=Ci(b,Ui,Wi),f;this.D?f=this.D:this.D=f=new Xi(a,e);Di(b,e);a.enableVertexAttribArray(f.j);a.vertexAttribPointer(f.j,2,5126,!1,28,0);a.enableVertexAttribArray(f.a);a.vertexAttribPointer(f.a,2,5126,!1,28,8);a.enableVertexAttribArray(f.l);a.vertexAttribPointer(f.l,2,5126,!1,28,16);a.enableVertexAttribArray(f.i);a.vertexAttribPointer(f.i,1,5126,!1,28,24);a.uniform2fv(f.Y,c);a.uniform1f(f.L,d);return f};
p.Ob=function(a,b){a.disableVertexAttribArray(b.j);a.disableVertexAttribArray(b.a);a.disableVertexAttribArray(b.l);a.disableVertexAttribArray(b.i)};
p.ob=function(a,b,c,d){var e=a.getParameter(a.DEPTH_FUNC),f=a.getParameter(a.DEPTH_WRITEMASK);d||(a.enable(a.DEPTH_TEST),a.depthMask(!0),a.depthFunc(a.NOTEQUAL));if(qa(c)){var g,h,k;h=this.b[this.b.length-1];for(c=this.j.length-1;0<=c;--c)g=this.j[c],k=this.F[c],ej(this,a,k[0],k[1],k[2]),xi(a,b,g,h),a.clear(a.DEPTH_BUFFER_BIT),h=g}else{var l,n,m,q;m=this.b.length-2;k=h=this.b[m+1];for(g=this.j.length-1;0<=g;--g){l=this.F[g];ej(this,a,l[0],l[1],l[2]);for(l=this.j[g];0<=m&&this.b[m]>=l;)q=this.b[m],
n=this.i[m],n=A(n).toString(),c[n]&&(h!==k&&(xi(a,b,h,k),a.clear(a.DEPTH_BUFFER_BIT)),k=q),m--,h=q;h!==k&&(xi(a,b,h,k),a.clear(a.DEPTH_BUFFER_BIT));h=k=l}}d||(a.disable(a.DEPTH_TEST),a.clear(a.DEPTH_BUFFER_BIT),a.depthMask(f),a.depthFunc(e))};
p.Db=function(a,b,c,d,e){var f,g,h,k,l,n,m;m=this.b.length-2;h=this.b[m+1];for(f=this.j.length-1;0<=f;--f)for(g=this.F[f],ej(this,a,g[0],g[1],g[2]),k=this.j[f];0<=m&&this.b[m]>=k;){g=this.b[m];l=this.i[m];n=A(l).toString();if(void 0===c[n]&&l.T()&&(void 0===e||yb(e,l.T().M()))&&(a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT),xi(a,b,g,h),h=d(l)))return h;m--;h=g}};function ej(a,b,c,d,e){b.uniform4fv(a.D.C,c);b.uniform1f(a.D.G,d);b.uniform1f(a.D.P,e)}
p.fa=function(a,b){var c=b.f;this.f.lineCap=void 0!==c?c:"round";c=b.c;this.f.lineDash=c?c:hi;c=b.g;this.f.lineJoin=void 0!==c?c:"round";c=b.a;c instanceof CanvasGradient||c instanceof CanvasPattern?c=ii:c=sd(c).map(function(a,b){return 3!=b?a/255:a})||ii;var d=b.b,d=void 0!==d?d:1,e=b.i,e=void 0!==e?e:10;this.f.strokeColor&&Qa(this.f.strokeColor,c)&&this.f.lineWidth===d&&this.f.miterLimit===e||(this.f.v=!0,this.f.strokeColor=c,this.f.lineWidth=d,this.f.miterLimit=e,this.F.push([c,d,e]))};function fj(){this.a="precision mediump float;uniform vec4 e;uniform float f;void main(void){gl_FragColor=e;float alpha=e.a*f;if(alpha==0.0){discard;}gl_FragColor.a=alpha;}"}z(fj,mi);var gj=new fj;function hj(){this.a="attribute vec2 a;uniform mat4 b;uniform mat4 c;uniform mat4 d;void main(void){gl_Position=b*vec4(a,0.0,1.0);}"}z(hj,ni);var ij=new hj;
function jj(a,b){this.C=a.getUniformLocation(b,"e");this.f=a.getUniformLocation(b,"d");this.g=a.getUniformLocation(b,"c");this.c=a.getUniformLocation(b,"f");this.b=a.getUniformLocation(b,"b");this.a=a.getAttribLocation(b,"a")};function kj(a){this.a=this.c=this.b=void 0;this.g=void 0===a?!0:a;this.f=0}function lj(a){var b=a.a;if(b){var c=b.next,d=b.pa;c&&(c.pa=d);d&&(d.next=c);a.a=c||d;a.b===a.c?(a.a=void 0,a.b=void 0,a.c=void 0):a.b===b?a.b=a.a:a.c===b&&(a.c=d?a.a.pa:a.a);a.f--}}function mj(a){a.a=a.b;if(a.a)return a.a.data}function nj(a){if(a.a&&a.a.next)return a.a=a.a.next,a.a.data}function oj(a){if(a.a&&a.a.next)return a.a.next.data}function pj(a){if(a.a&&a.a.pa)return a.a=a.a.pa,a.a.data}
function qj(a){if(a.a&&a.a.pa)return a.a.pa.data}function rj(a){if(a.a)return a.a.data}kj.prototype.concat=function(a){if(a.a){if(this.a){var b=this.a.next;this.a.next=a.b;a.b.pa=this.a;b.pa=a.c;a.c.next=b;this.f+=a.f}else this.a=a.a,this.b=a.b,this.c=a.c,this.f=a.f;a.a=void 0;a.b=void 0;a.c=void 0;a.f=0}};var uj;
(function(){var a={},b={S:a};(function(c){if("object"===typeof a&&"undefined"!==typeof b)b.S=c();else{var d;"undefined"!==typeof window?d=window:"undefined"!==typeof global?d=global:"undefined"!==typeof self?d=self:d=this;d.If=c()}})(function(){return function d(a,b,g){function h(l,m){if(!b[l]){if(!a[l]){var q="function"==typeof require&&require;if(!m&&q)return q(l,!0);if(k)return k(l,!0);q=Error("Cannot find module '"+l+"'");throw q.code="MODULE_NOT_FOUND",q;}q=b[l]={S:{}};a[l][0].call(q.S,function(b){var d=
a[l][1][b];return h(d?d:b)},q,q.S,d,a,b,g)}return b[l].S}for(var k="function"==typeof require&&require,l=0;l<g.length;l++)h(g[l]);return h}({1:[function(a,b){function f(a,b,d,e,q){d=d||0;e=e||a.length-1;for(q=q||h;e>d;){if(600<e-d){var r=e-d+1,u=b-d+1,v=Math.log(r),w=.5*Math.exp(2*v/3),v=.5*Math.sqrt(v*w*(r-w)/r)*(0>u-r/2?-1:1);f(a,b,Math.max(d,Math.floor(b-u*w/r+v)),Math.min(e,Math.floor(b+(r-u)*w/r+v)),q)}r=a[b];u=d;w=e;g(a,d,b);for(0<q(a[e],r)&&g(a,d,e);u<w;){g(a,u,w);u++;for(w--;0>q(a[u],r);)u++;
for(;0<q(a[w],r);)w--}0===q(a[d],r)?g(a,d,w):(w++,g(a,w,e));w<=b&&(d=w+1);b<=w&&(e=w-1)}}function g(a,b,d){var e=a[b];a[b]=a[d];a[d]=e}function h(a,b){return a<b?-1:a>b?1:0}b.S=f},{}],2:[function(a,b){function f(a,b){if(!(this instanceof f))return new f(a,b);this.Yb=Math.max(4,a||9);this.Fc=Math.max(2,Math.ceil(.4*this.Yb));b&&this.Dd(b);this.clear()}function g(a,b){h(a,0,a.children.length,b,a)}function h(a,b,d,e,f){f||(f=v(null));f.K=Infinity;f.N=Infinity;f.J=-Infinity;f.R=-Infinity;for(var g;b<
d;b++)g=a.children[b],k(f,a.ma?e(g):g);return f}function k(a,b){a.K=Math.min(a.K,b.K);a.N=Math.min(a.N,b.N);a.J=Math.max(a.J,b.J);a.R=Math.max(a.R,b.R)}function l(a,b){return a.K-b.K}function n(a,b){return a.N-b.N}function m(a){return(a.J-a.K)*(a.R-a.N)}function q(a){return a.J-a.K+(a.R-a.N)}function r(a,b){return a.K<=b.K&&a.N<=b.N&&b.J<=a.J&&b.R<=a.R}function u(a,b){return b.K<=a.J&&b.N<=a.R&&b.J>=a.K&&b.R>=a.N}function v(a){return{children:a,height:1,ma:!0,K:Infinity,N:Infinity,J:-Infinity,R:-Infinity}}
function w(a,b,d,e,f){for(var g=[b,d],h;g.length;)d=g.pop(),b=g.pop(),d-b<=e||(h=b+Math.ceil((d-b)/e/2)*e,B(a,h,b,d,f),g.push(b,h,h,d))}b.S=f;var B=a("quickselect");f.prototype={all:function(){return this.Ac(this.data,[])},search:function(a){var b=this.data,d=[],e=this.ra;if(!u(a,b))return d;for(var f=[],g,h,k,l;b;){g=0;for(h=b.children.length;g<h;g++)k=b.children[g],l=b.ma?e(k):k,u(a,l)&&(b.ma?d.push(k):r(a,l)?this.Ac(k,d):f.push(k));b=f.pop()}return d},load:function(a){if(!a||!a.length)return this;
if(a.length<this.Fc){for(var b=0,d=a.length;b<d;b++)this.Ha(a[b]);return this}a=this.Cc(a.slice(),0,a.length-1,0);this.data.children.length?this.data.height===a.height?this.Ic(this.data,a):(this.data.height<a.height&&(b=this.data,this.data=a,a=b),this.Ec(a,this.data.height-a.height-1,!0)):this.data=a;return this},Ha:function(a){a&&this.Ec(a,this.data.height-1);return this},clear:function(){this.data=v([]);return this},remove:function(a,b){if(!a)return this;for(var d=this.data,e=this.ra(a),f=[],g=
[],h,k,l,n;d||f.length;){d||(d=f.pop(),k=f[f.length-1],h=g.pop(),n=!0);if(d.ma){a:{l=a;var m=d.children,q=b;if(q){for(var u=0;u<m.length;u++)if(q(l,m[u])){l=u;break a}l=-1}else l=m.indexOf(l)}if(-1!==l){d.children.splice(l,1);f.push(d);this.Bd(f);break}}n||d.ma||!r(d,e)?k?(h++,d=k.children[h],n=!1):d=null:(f.push(d),g.push(h),h=0,k=d,d=d.children[0])}return this},ra:function(a){return a},cc:l,dc:n,toJSON:function(){return this.data},Ac:function(a,b){for(var d=[];a;)a.ma?b.push.apply(b,a.children):
d.push.apply(d,a.children),a=d.pop();return b},Cc:function(a,b,d,e){var f=d-b+1,h=this.Yb,k;if(f<=h)return k=v(a.slice(b,d+1)),g(k,this.ra),k;e||(e=Math.ceil(Math.log(f)/Math.log(h)),h=Math.ceil(f/Math.pow(h,e-1)));k=v([]);k.ma=!1;k.height=e;var f=Math.ceil(f/h),h=f*Math.ceil(Math.sqrt(h)),l,n,m;for(w(a,b,d,h,this.cc);b<=d;b+=h)for(n=Math.min(b+h-1,d),w(a,b,n,f,this.dc),l=b;l<=n;l+=f)m=Math.min(l+f-1,n),k.children.push(this.Cc(a,l,m,e-1));g(k,this.ra);return k},Ad:function(a,b,d,e){for(var f,g,h,
k,l,n,q,r;;){e.push(b);if(b.ma||e.length-1===d)break;q=r=Infinity;f=0;for(g=b.children.length;f<g;f++)h=b.children[f],l=m(h),n=(Math.max(h.J,a.J)-Math.min(h.K,a.K))*(Math.max(h.R,a.R)-Math.min(h.N,a.N))-l,n<r?(r=n,q=l<q?l:q,k=h):n===r&&l<q&&(q=l,k=h);b=k||b.children[0]}return b},Ec:function(a,b,d){var e=this.ra;d=d?a:e(a);var e=[],f=this.Ad(d,this.data,b,e);f.children.push(a);for(k(f,d);0<=b;)if(e[b].children.length>this.Yb)this.Hd(e,b),b--;else break;this.xd(d,e,b)},Hd:function(a,b){var d=a[b],e=
d.children.length,f=this.Fc;this.yd(d,f,e);e=this.zd(d,f,e);e=v(d.children.splice(e,d.children.length-e));e.height=d.height;e.ma=d.ma;g(d,this.ra);g(e,this.ra);b?a[b-1].children.push(e):this.Ic(d,e)},Ic:function(a,b){this.data=v([a,b]);this.data.height=a.height+1;this.data.ma=!1;g(this.data,this.ra)},zd:function(a,b,d){var e,f,g,k,l,n,q;l=n=Infinity;for(e=b;e<=d-b;e++)f=h(a,0,e,this.ra),g=h(a,e,d,this.ra),k=Math.max(0,Math.min(f.J,g.J)-Math.max(f.K,g.K))*Math.max(0,Math.min(f.R,g.R)-Math.max(f.N,
g.N)),f=m(f)+m(g),k<l?(l=k,q=e,n=f<n?f:n):k===l&&f<n&&(n=f,q=e);return q},yd:function(a,b,d){var e=a.ma?this.cc:l,f=a.ma?this.dc:n,g=this.Bc(a,b,d,e);b=this.Bc(a,b,d,f);g<b&&a.children.sort(e)},Bc:function(a,b,d,e){a.children.sort(e);e=this.ra;var f=h(a,0,b,e),g=h(a,d-b,d,e),l=q(f)+q(g),n,m;for(n=b;n<d-b;n++)m=a.children[n],k(f,a.ma?e(m):m),l+=q(f);for(n=d-b-1;n>=b;n--)m=a.children[n],k(g,a.ma?e(m):m),l+=q(g);return l},xd:function(a,b,d){for(;0<=d;d--)k(b[d],a)},Bd:function(a){for(var b=a.length-
1,d;0<=b;b--)0===a[b].children.length?0<b?(d=a[b-1].children,d.splice(d.indexOf(a[b]),1)):this.clear():g(a[b],this.ra)},Dd:function(a){var b=["return a"," - b",";"];this.cc=new Function("a","b",b.join(a[0]));this.dc=new Function("a","b",b.join(a[1]));this.ra=new Function("a","return {minX: a"+a[0]+", minY: a"+a[1]+", maxX: a"+a[2]+", maxY: a"+a[3]+"};")}}},{quickselect:1}]},{},[2])(2)});uj=b.S})();function vj(a){this.a=uj(a);this.c={}}p=vj.prototype;p.Ha=function(a,b){var c={K:a[0],N:a[1],J:a[2],R:a[3],value:b};this.a.Ha(c);this.c[A(b)]=c};p.load=function(a,b){for(var c=Array(b.length),d=0,e=b.length;d<e;d++){var f=a[d],g=b[d],f={K:f[0],N:f[1],J:f[2],R:f[3],value:g};c[d]=f;this.c[A(g)]=f}this.a.load(c)};p.remove=function(a){a=A(a);var b=this.c[a];delete this.c[a];return null!==this.a.remove(b)};function wj(a,b,c){var d=a.c[A(c)];pb([d.K,d.N,d.J,d.R],b)||(a.remove(c),a.Ha(b,c))}
function xj(a){return a.a.all().map(function(a){return a.value})}function yj(a,b){return a.a.search({K:b[0],N:b[1],J:b[2],R:b[3]}).map(function(a){return a.value})}p.forEach=function(a,b){return zj(xj(this),a,b)};function Aj(a,b,c,d){return zj(yj(a,b),c,d)}function zj(a,b,c){for(var d,e=0,f=a.length;e<f&&!(d=b.call(c,a[e]));e++);return d}p.clear=function(){this.a.clear();this.c={}};p.M=function(){var a=this.a.data;return[a.K,a.N,a.J,a.R]};function Bj(a,b){vi.call(this,0,b);this.o=new Yi(0,b);this.D=null;this.F=[];this.f=[];this.j={fillColor:null,v:!1}}z(Bj,vi);function Cj(a,b,c,d){var e=new kj,f=new vj;b=Dj(a,b,d,e,f,!0);if(c.length){var g,h,k=[];g=0;for(h=c.length;g<h;++g){var l={list:new kj,J:void 0};k.push(l);l.J=Dj(a,c[g],d,l.list,f,!1)}k.sort(function(a,b){return b.J-a.J});for(g=0;g<k.length;++g)Ej(k[g].list,k[g].J,e,b,f)}Fj(e,f,!1);Gj(a,e,f)}
function Dj(a,b,c,d,e,f){var g,h,k=a.c.length/2,l,n,m,q=[],r=[];if(f===tc(b,0,b.length,c))for(n=l=Hj(a,b[0],b[1],k++),f=b[0],g=c,h=b.length;g<h;g+=c)m=Hj(a,b[g],b[g+1],k++),r.push(Ij(n,m,d)),q.push([Math.min(n.x,m.x),Math.min(n.y,m.y),Math.max(n.x,m.x),Math.max(n.y,m.y)]),f=b[g]>f?b[g]:f,n=m;else for(g=b.length-c,n=l=Hj(a,b[g],b[g+1],k++),f=b[g],g-=c,h=0;g>=h;g-=c)m=Hj(a,b[g],b[g+1],k++),r.push(Ij(n,m,d)),q.push([Math.min(n.x,m.x),Math.min(n.y,m.y),Math.max(n.x,m.x),Math.max(n.y,m.y)]),f=b[g]>f?b[g]:
f,n=m;r.push(Ij(m,l,d));q.push([Math.min(n.x,m.x),Math.min(n.y,m.y),Math.max(n.x,m.x),Math.max(n.y,m.y)]);e.load(q,r);return f}function Fj(a,b,c){var d=mj(a),e=d,f=nj(a),g=!1;do{var h=c?ji(f.H.x,f.H.y,e.H.x,e.H.y,e.I.x,e.I.y):ji(e.I.x,e.I.y,e.H.x,e.H.y,f.H.x,f.H.y);void 0===h?(Jj(e,f,a,b),g=!0,f===d&&(d=oj(a)),f=e,pj(a)):e.H.qa!==h&&(e.H.qa=h,g=!0);e=f;f=nj(a)}while(e!==d);return g}
function Ej(a,b,c,d,e){Fj(a,e,!0);for(var f=mj(a);f.H.x!==b;)f=nj(a);b=f.H;d={x:d,y:b.y,la:-1};var g=Infinity,h,k,l,n;l=Kj({I:b,H:d},e,!0);h=0;for(k=l.length;h<k;++h){var m=l[h];if(void 0===m.I.qa){var q=Lj(b,d,m.I,m.H,!0),r=Math.abs(b.x-q[0]);r<g&&(g=r,n={x:q[0],y:q[1],la:-1},f=m)}}if(Infinity!==g){l=f.H;if(0<g&&(f=Mj(b,n,f.H,e),f.length))for(n=Infinity,h=0,k=f.length;h<k;++h)if(g=f[h],m=Math.atan2(b.y-g.y,d.x-g.x),m<n||m===n&&g.x<l.x)n=m,l=g;for(f=mj(c);f.H!==l;)f=nj(c);d={x:b.x,y:b.y,la:b.la,qa:void 0};
h={x:f.H.x,y:f.H.y,la:f.H.la,qa:void 0};oj(a).I=d;Ij(b,f.H,a,e);Ij(h,d,a,e);f.H=h;a.g&&a.a&&(a.b=a.a,a.c=a.a.pa);c.concat(a)}}
function Gj(a,b,c){for(var d=!1,e=Nj(b,c);3<b.f;)if(e){if(!Oj(a,b,c,e,d)&&!Fj(b,c,d)&&!Pj(a,b,c,!0))break}else if(!Oj(a,b,c,e,d)&&!Fj(b,c,d)&&!Pj(a,b,c))if(e=Nj(b,c)){var d=b,f=2*d.f,g=Array(f),h=mj(d),k=h,l=0;do g[l++]=k.I.x,g[l++]=k.I.y,k=nj(d);while(k!==h);d=!tc(g,0,f,2);Fj(b,c,d)}else{e=a;d=b;f=g=mj(d);do{h=Kj(f,c);if(h.length){g=h[0];h=Lj(f.I,f.H,g.I,g.H);h=Hj(e,h[0],h[1],e.c.length/2);k=new kj;l=new vj;Ij(h,f.H,k,l);f.H=h;wj(c,[Math.min(f.I.x,h.x),Math.min(f.I.y,h.y),Math.max(f.I.x,h.x),Math.max(f.I.y,
h.y)],f);for(f=nj(d);f!==g;)Ij(f.I,f.H,k,l),c.remove(f),lj(d),f=rj(d);Ij(g.I,h,k,l);g.I=h;wj(c,[Math.min(g.H.x,h.x),Math.min(g.H.y,h.y),Math.max(g.H.x,h.x),Math.max(g.H.y,h.y)],g);Fj(d,c,!1);Gj(e,d,c);Fj(k,l,!1);Gj(e,k,l);break}f=nj(d)}while(f!==g);break}3===b.f&&(e=a.a.length,a.a[e++]=qj(b).I.la,a.a[e++]=rj(b).I.la,a.a[e++]=oj(b).I.la)}
function Oj(a,b,c,d,e){var f=a.a.length,g=mj(b),h=qj(b),k=g,l=nj(b),n=oj(b),m,q,r,u=!1;do{m=k.I;q=k.H;r=l.H;if(!1===q.qa){var v=e?Qj(n.H,r,q,m,h.I):Qj(h.I,m,q,r,n.H);!d&&0!==Kj({I:m,H:r},c).length||!v||0!==Mj(m,q,r,c,!0).length||!d&&!1!==m.qa&&!1!==r.qa&&tc([h.I.x,h.I.y,m.x,m.y,q.x,q.y,r.x,r.y,n.H.x,n.H.y],0,10,2)!==!e||(a.a[f++]=m.la,a.a[f++]=q.la,a.a[f++]=r.la,Jj(k,l,b,c),l===g&&(g=n),u=!0)}h=qj(b);k=rj(b);l=nj(b);n=oj(b)}while(k!==g&&3<b.f);return u}
function Pj(a,b,c,d){var e=mj(b);nj(b);var f=e,g=nj(b),h=!1;do{var k=Lj(f.I,f.H,g.I,g.H,d);if(k){var l,h=a.a.length,n=a.c.length/2,m=pj(b);lj(b);c.remove(m);l=m===e;d?(k[0]===f.I.x&&k[1]===f.I.y?(pj(b),k=f.I,g.I=k,c.remove(f),l=l||f===e):(k=g.H,f.H=k,c.remove(g),l=l||g===e),lj(b)):(k=Hj(a,k[0],k[1],n),f.H=k,g.I=k,wj(c,[Math.min(f.I.x,f.H.x),Math.min(f.I.y,f.H.y),Math.max(f.I.x,f.H.x),Math.max(f.I.y,f.H.y)],f),wj(c,[Math.min(g.I.x,g.H.x),Math.min(g.I.y,g.H.y),Math.max(g.I.x,g.H.x),Math.max(g.I.y,g.H.y)],
g));a.a[h++]=m.I.la;a.a[h++]=m.H.la;a.a[h++]=k.la;h=!0;if(l)break}f=qj(b);g=nj(b)}while(f!==e);return h}function Nj(a,b){var c=mj(a),d=c;do{if(Kj(d,b).length)return!1;d=nj(a)}while(d!==c);return!0}function Hj(a,b,c,d){var e=a.c.length;a.c[e++]=b;a.c[e++]=c;return{x:b,y:c,la:d,qa:void 0}}
function Ij(a,b,c,d){var e={I:a,H:b},f={pa:void 0,next:void 0,data:e},g=c.a;if(g){var h=g.next;f.pa=g;f.next=h;g.next=f;h&&(h.pa=f);g===c.c&&(c.c=f)}else c.b=f,c.c=f,c.g&&(f.next=f,f.pa=f);c.a=f;c.f++;d&&d.Ha([Math.min(a.x,b.x),Math.min(a.y,b.y),Math.max(a.x,b.x),Math.max(a.y,b.y)],e);return e}function Jj(a,b,c,d){rj(c)===b&&(lj(c),a.H=b.H,d.remove(b),wj(d,[Math.min(a.I.x,a.H.x),Math.min(a.I.y,a.H.y),Math.max(a.I.x,a.H.x),Math.max(a.I.y,a.H.y)],a))}
function Mj(a,b,c,d,e){var f,g,h,k=[],l=yj(d,[Math.min(a.x,b.x,c.x),Math.min(a.y,b.y,c.y),Math.max(a.x,b.x,c.x),Math.max(a.y,b.y,c.y)]);d=0;for(f=l.length;d<f;++d)for(g in l[d])h=l[d][g],"object"!==typeof h||e&&!h.qa||h.x===a.x&&h.y===a.y||h.x===b.x&&h.y===b.y||h.x===c.x&&h.y===c.y||-1!==k.indexOf(h)||!rc([a.x,a.y,b.x,b.y,c.x,c.y],0,6,2,h.x,h.y)||k.push(h);return k}
function Kj(a,b,c){var d=a.I,e=a.H;b=yj(b,[Math.min(d.x,e.x),Math.min(d.y,e.y),Math.max(d.x,e.x),Math.max(d.y,e.y)]);var f=[],g,h;g=0;for(h=b.length;g<h;++g){var k=b[g];a!==k&&(c||k.I!==e||k.H!==d)&&Lj(d,e,k.I,k.H,c)&&f.push(k)}return f}
function Lj(a,b,c,d,e){var f=(d.y-c.y)*(b.x-a.x)-(d.x-c.x)*(b.y-a.y);if(0!==f&&(d=((d.x-c.x)*(a.y-c.y)-(d.y-c.y)*(a.x-c.x))/f,c=((b.x-a.x)*(a.y-c.y)-(b.y-a.y)*(a.x-c.x))/f,!e&&d>ki&&d<1-ki&&c>ki&&c<1-ki||e&&0<=d&&1>=d&&0<=c&&1>=c))return[a.x+d*(b.x-a.x),a.y+d*(b.y-a.y)]}
function Qj(a,b,c,d,e){if(void 0===b.qa||void 0===d.qa)return!1;var f=(c.x-d.x)*(b.y-d.y)>(c.y-d.y)*(b.x-d.x);e=(e.x-d.x)*(b.y-d.y)<(e.y-d.y)*(b.x-d.x);a=(a.x-b.x)*(d.y-b.y)>(a.y-b.y)*(d.x-b.x);c=(c.x-b.x)*(d.y-b.y)<(c.y-b.y)*(d.x-b.x);b=b.qa?c||a:c&&a;return(d.qa?e||f:e&&f)&&b}p=Bj.prototype;
p.lb=function(a,b){var c=Rj(a),d=a.a,e=this.a.length,f=this.o.a.length,g,h,k,l;g=0;for(h=c.length;g<h;++g){var n=Ac(c[g]);if(0<n.length){var m=n[0].s,m=dc(m,m.length,d,-this.origin[0],-this.origin[1]),q=[],r;k=1;for(l=n.length;k<l;++k)r=n[k].s,r=dc(r,r.length,d,-this.origin[0],-this.origin[1]),q.push(r);cj(this.o,m,q,d);Cj(this,m,q,d)}}this.a.length>e&&(this.b.push(e),this.i.push(b),this.j.v&&(this.f.push(e),this.j.v=!1));this.o.a.length>f&&dj(this.o,b,f)};
p.nb=function(a,b){var c=Ac(a),d=a.a;if(0<c.length){this.b.push(this.a.length);this.i.push(b);this.j.v&&(this.f.push(this.a.length),this.j.v=!1);dj(this.o,b);var e=c[0].s,e=dc(e,e.length,d,-this.origin[0],-this.origin[1]),f=[],g,h,k;g=1;for(h=c.length;g<h;++g)k=c[g].s,k=dc(k,k.length,d,-this.origin[0],-this.origin[1]),f.push(k);cj(this.o,e,f,d);Cj(this,e,f,d)}};
p.va=function(a){this.u=new yi(this.c);this.l=new yi(this.a);this.b.push(this.a.length);this.o.va(a);0===this.f.length&&0<this.F.length&&(this.F=[]);this.a=this.c=null};p.wa=function(a){var b=this.u,c=this.l,d=this.o.wa(a);return function(){Bi(a,b);Bi(a,c);d()}};p.Nb=function(a,b){var c=Ci(b,gj,ij),d;this.D?d=this.D:this.D=d=new jj(a,c);Di(b,c);a.enableVertexAttribArray(d.a);a.vertexAttribPointer(d.a,2,5126,!1,8,0);return d};p.Ob=function(a,b){a.disableVertexAttribArray(b.a)};
p.ob=function(a,b,c,d){var e=a.getParameter(a.DEPTH_FUNC),f=a.getParameter(a.DEPTH_WRITEMASK);d||(a.enable(a.DEPTH_TEST),a.depthMask(!0),a.depthFunc(a.NOTEQUAL));if(qa(c)){var g,h,k;h=this.b[this.b.length-1];for(c=this.f.length-1;0<=c;--c)g=this.f[c],k=this.F[c],a.uniform4fv(this.D.C,k),xi(a,b,g,h),h=g}else{var l,n,m,q;m=this.b.length-2;k=h=this.b[m+1];for(g=this.f.length-1;0<=g;--g){l=this.F[g];a.uniform4fv(this.D.C,l);for(l=this.f[g];0<=m&&this.b[m]>=l;)q=this.b[m],n=this.i[m],n=A(n).toString(),
c[n]&&(h!==k&&(xi(a,b,h,k),a.clear(a.DEPTH_BUFFER_BIT)),k=q),m--,h=q;h!==k&&(xi(a,b,h,k),a.clear(a.DEPTH_BUFFER_BIT));h=k=l}}d||(a.disable(a.DEPTH_TEST),a.clear(a.DEPTH_BUFFER_BIT),a.depthMask(f),a.depthFunc(e))};
p.Db=function(a,b,c,d,e){var f,g,h,k,l,n,m;m=this.b.length-2;h=this.b[m+1];for(f=this.f.length-1;0<=f;--f)for(g=this.F[f],a.uniform4fv(this.D.C,g),k=this.f[f];0<=m&&this.b[m]>=k;){g=this.b[m];l=this.i[m];n=A(l).toString();if(void 0===c[n]&&l.T()&&(void 0===e||yb(e,l.T().M()))&&(a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT),xi(a,b,g,h),h=d(l)))return h;m--;h=g}};
p.fa=function(a,b){var c=a?a.a:[0,0,0,0];c instanceof CanvasGradient||c instanceof CanvasPattern?c=gi:c=sd(c).map(function(a,b){return 3!=b?a/255:a})||gi;this.j.fillColor&&Qa(c,this.j.fillColor)||(this.j.fillColor=c,this.j.v=!0,this.F.push(c));b?this.o.fa(null,b):this.o.fa(null,new Qg({color:[0,0,0,0],lineWidth:0}))};function Sj(){}Sj.prototype.g=function(){};function Tj(a,b,c){this.i=b;this.o=a;this.f=c;this.c={}}z(Tj,zh);function Uj(a,b){var c=[],d;for(d in a.c){var e=a.c[d],f;for(f in e)c.push(e[f].wa(b))}return function(){for(var a=c.length,b,d=0;d<a;d++)b=c[d].apply(this,arguments);return b}}function Vj(a,b){for(var c in a.c){var d=a.c[c],e;for(e in d)d[e].va(b)}}Tj.prototype.a=function(a,b){var c=void 0!==a?a.toString():"0",d=this.c[c];void 0===d&&(d={},this.c[c]=d);c=d[b];void 0===c&&(c=new Wj[b](this.o,this.i),d[b]=c);return c};
Tj.prototype.b=function(){return qa(this.c)};Tj.prototype.g=function(a,b,c,d,e,f,g,h){var k=Object.keys(this.c).map(Number);k.sort(Na);var l,n,m,q,r,u;l=0;for(n=k.length;l<n;++l)for(r=this.c[k[l].toString()],m=0,q=Qh.length;m<q;++m)u=r[Qh[m]],void 0!==u&&u.g(a,b,c,d,e,f,g,h,void 0,!1)};
function Xj(a,b,c,d,e,f,g,h,k,l){var n=Yj,m=Object.keys(a.c).map(Number);m.sort(function(a,b){return b-a});var q,r,u,v,w;q=0;for(r=m.length;q<r;++q)for(v=a.c[m[q].toString()],u=Qh.length-1;0<=u;--u)if(w=v[Qh[u]],void 0!==w&&(w=w.g(b,c,d,e,n,f,g,h,k,!0,l)))return w}
Tj.prototype.na=function(a,b,c,d,e,f,g,h,k,l){var n=b.a;n.bindFramebuffer(n.FRAMEBUFFER,Li(b));var m;void 0!==this.f&&(m=ib(ob(a),d*this.f));return Xj(this,b,a,d,e,g,h,k,function(a){var b=new Uint8Array(4);n.readPixels(0,0,1,1,n.RGBA,n.UNSIGNED_BYTE,b);if(0<b[3]&&(a=l(a)))return a},m)};var Yj=[1,1],Wj={Circle:Ai,Image:Pi,LineString:Yi,Polygon:Bj,Text:Sj};function Zj(a,b,c,d,e,f,g){this.a=a;this.c=b;this.b=f;this.f=g;this.o=e;this.i=d;this.g=c;this.j=this.l=this.u=null}z(Zj,Yg);p=Zj.prototype;p.cd=function(a){this.fa(a.b,a.c);this.Ea(a.f)};p.mb=function(a,b){var c=this.a,d=(new Tj(1,this.b)).a(0,"Image");d.Ea(this.u);d.mb(a,b);d.va(c);d.g(this.a,this.c,this.g,this.i,this.o,this.f,1,{},void 0,!1);d.wa(c)()};
p.kb=function(a,b){var c=this.a,d=(new Tj(1,this.b)).a(0,"Image");d.Ea(this.u);d.kb(a,b);d.va(c);d.g(this.a,this.c,this.g,this.i,this.o,this.f,1,{},void 0,!1);d.wa(c)()};p.ib=function(a,b){var c=this.a,d=(new Tj(1,this.b)).a(0,"LineString");d.fa(null,this.j);d.ib(a,b);d.va(c);d.g(this.a,this.c,this.g,this.i,this.o,this.f,1,{},void 0,!1);d.wa(c)()};
p.jb=function(a,b){var c=this.a,d=(new Tj(1,this.b)).a(0,"LineString");d.fa(null,this.j);d.jb(a,b);d.va(c);d.g(this.a,this.c,this.g,this.i,this.o,this.f,1,{},void 0,!1);d.wa(c)()};p.nb=function(a,b){var c=this.a,d=(new Tj(1,this.b)).a(0,"Polygon");d.fa(this.l,this.j);d.nb(a,b);d.va(c);d.g(this.a,this.c,this.g,this.i,this.o,this.f,1,{},void 0,!1);d.wa(c)()};
p.lb=function(a,b){var c=this.a,d=(new Tj(1,this.b)).a(0,"Polygon");d.fa(this.l,this.j);d.lb(a,b);d.va(c);d.g(this.a,this.c,this.g,this.i,this.o,this.f,1,{},void 0,!1);d.wa(c)()};p.Ra=function(a,b){var c=this.a,d=(new Tj(1,this.b)).a(0,"Circle");d.fa(this.l,this.j);d.Ra(a,b);d.va(c);d.g(this.a,this.c,this.g,this.i,this.o,this.f,1,{},void 0,!1);d.wa(c)()};p.Ea=function(a){this.u=a};p.fa=function(a,b){this.l=a;this.j=b};function ak(){this.a="precision mediump float;varying vec2 a;uniform float f;uniform sampler2D g;void main(void){vec4 texColor=texture2D(g,a);gl_FragColor.rgb=texColor.rgb;gl_FragColor.a=texColor.a*f;}"}z(ak,mi);var bk=new ak;function ck(){this.a="varying vec2 a;attribute vec2 b;attribute vec2 c;uniform mat4 d;uniform mat4 e;void main(void){gl_Position=e*vec4(b,0.,1.);a=(d*vec4(c,0.,1.)).st;}"}z(ck,ni);var dk=new ck;
function ek(a,b){this.b=a.getUniformLocation(b,"f");this.f=a.getUniformLocation(b,"e");this.i=a.getUniformLocation(b,"d");this.g=a.getUniformLocation(b,"g");this.a=a.getAttribLocation(b,"b");this.c=a.getAttribLocation(b,"c")};function fk(a,b){jh.call(this,b);this.f=a;this.ba=new yi([-1,-1,0,0,1,-1,1,0,-1,1,0,1,1,1,1,1]);this.i=this.Ia=null;this.o=void 0;this.V=sg();this.ca=sg();this.C=ti();this.u=null}z(fk,jh);
function gk(a,b,c){var d=a.f.f;if(void 0===a.o||a.o!=c){b.postRenderFunctions.push(function(a,b,c){a.isContextLost()||(a.deleteFramebuffer(b),a.deleteTexture(c))}.bind(null,d,a.i,a.Ia));b=Mi(d,c,c);var e=d.createFramebuffer();d.bindFramebuffer(36160,e);d.framebufferTexture2D(36160,36064,3553,b,0);a.Ia=b;a.i=e;a.o=c}else d.bindFramebuffer(36160,a.i)}
fk.prototype.dd=function(a,b,c){hk(this,"precompose",c,a);wi(c,34962,this.ba);var d=c.a,e=Ci(c,bk,dk),f;this.u?f=this.u:this.u=f=new ek(d,e);Di(c,e)&&(d.enableVertexAttribArray(f.a),d.vertexAttribPointer(f.a,2,5126,!1,16,0),d.enableVertexAttribArray(f.c),d.vertexAttribPointer(f.c,2,5126,!1,16,8),d.uniform1i(f.g,0));d.uniformMatrix4fv(f.i,!1,ui(this.C,this.V));d.uniformMatrix4fv(f.f,!1,ui(this.C,this.ca));d.uniform1f(f.b,b.opacity);d.bindTexture(3553,this.Ia);d.drawArrays(5,0,4);hk(this,"postcompose",
c,a)};function hk(a,b,c,d){a=a.a;if(Fa(a,b)){var e=d.viewState;H(a,new mg(b,new Zj(c,e.center,e.resolution,e.rotation,d.size,d.extent,d.pixelRatio),d,null,c))}}fk.prototype.B=function(){this.i=this.Ia=null;this.o=void 0};var ik,jk=-1<navigator.userAgent.indexOf("OPR"),kk=-1<navigator.userAgent.indexOf("Edge");ik=!(!navigator.userAgent.match("CriOS")&&"chrome"in window&&"Google Inc."===navigator.vendor&&0==jk&&0==kk);function lk(a,b,c,d){a=c-a;b=d-b;var e=Math.sqrt(a*a+b*b);return[Math.round(c+a/e),Math.round(d+b/e)]}
function mk(a,b,c,d,e,f,g,h,k,l,n){var m=xd(Math.round(c*a),Math.round(c*b));if(0===k.length)return m.canvas;m.scale(c,c);var q=gb();k.forEach(function(a){qb(q,a.extent)});var r=xd(Math.round(c*tb(q)/d),Math.round(c*ub(q)/d)),u=c/d;k.forEach(function(a){r.drawImage(a.image,l,l,a.image.width-2*l,a.image.height-2*l,(a.extent[0]-q[0])*u,-(a.extent[3]-q[3])*u,tb(a.extent)*u,ub(a.extent)*u)});var v=[g[0],g[3]];h.f.forEach(function(a){var b=a.source,e=a.target,g=b[1][0],h=b[1][1],k=b[2][0],l=b[2][1];a=
(e[0][0]-v[0])/f;var n=-(e[0][1]-v[1])/f,u=(e[1][0]-v[0])/f,P=-(e[1][1]-v[1])/f,G=(e[2][0]-v[0])/f,N=-(e[2][1]-v[1])/f,e=b[0][0],b=b[0][1],g=g-e,h=h-b,k=k-e,l=l-b;a:{g=[[g,h,0,0,u-a],[k,l,0,0,G-a],[0,0,g,h,P-n],[0,0,k,l,N-n]];h=g.length;for(k=0;k<h;k++){for(var l=k,U=Math.abs(g[k][k]),ca=k+1;ca<h;ca++){var ta=Math.abs(g[ca][k]);ta>U&&(U=ta,l=ca)}if(0===U){g=null;break a}U=g[l];g[l]=g[k];g[k]=U;for(l=k+1;l<h;l++)for(U=-g[l][k]/g[k][k],ca=k;ca<h+1;ca++)g[l][ca]=k==ca?0:g[l][ca]+U*g[k][ca]}k=Array(h);
for(l=h-1;0<=l;l--)for(k[l]=g[l][h]/g[l][l],U=l-1;0<=U;U--)g[U][h]-=g[U][l]*k[l];g=k}g&&(m.save(),m.beginPath(),ik?(k=(a+u+G)/3,l=(n+P+N)/3,h=lk(k,l,a,n),u=lk(k,l,u,P),G=lk(k,l,G,N),m.moveTo(u[0],u[1]),m.lineTo(h[0],h[1]),m.lineTo(G[0],G[1])):(m.moveTo(u,P),m.lineTo(a,n),m.lineTo(G,N)),m.clip(),m.transform(g[0],g[2],g[1],g[3],a,n),m.translate(q[0]-e,q[3]-b),m.scale(d/c,-d/c),m.drawImage(r.canvas,0,0),m.restore())});n&&(m.save(),m.strokeStyle="black",m.lineWidth=1,h.f.forEach(function(a){var b=a.target;
a=(b[0][0]-v[0])/f;var c=-(b[0][1]-v[1])/f,d=(b[1][0]-v[0])/f,e=-(b[1][1]-v[1])/f,g=(b[2][0]-v[0])/f,b=-(b[2][1]-v[1])/f;m.beginPath();m.moveTo(d,e);m.lineTo(a,c);m.lineTo(g,b);m.closePath();m.stroke()}),m.restore());return m.canvas};function nk(a,b,c,d,e){this.b=a;this.g=b;var f={},g=Yb(this.g,this.b);this.c=function(a){var b=a[0]+"/"+a[1];f[b]||(f[b]=g(a));return f[b]};this.i=d;this.u=e*e;this.f=[];this.j=!1;this.l=this.b.c&&!!d&&!!this.b.M()&&tb(d)==tb(this.b.M());this.a=this.b.M()?tb(this.b.M()):null;this.o=this.g.M()?tb(this.g.M()):null;a=[c[0],c[3]];b=[c[2],c[3]];d=[c[2],c[1]];c=[c[0],c[1]];e=this.c(a);var h=this.c(b),k=this.c(d),l=this.c(c);ok(this,a,b,d,c,e,h,k,l,10);if(this.j){var n=Infinity;this.f.forEach(function(a){n=
Math.min(n,a.source[0][0],a.source[1][0],a.source[2][0])});this.f.forEach(function(a){if(Math.max(a.source[0][0],a.source[1][0],a.source[2][0])-n>this.a/2){var b=[[a.source[0][0],a.source[0][1]],[a.source[1][0],a.source[1][1]],[a.source[2][0],a.source[2][1]]];b[0][0]-n>this.a/2&&(b[0][0]-=this.a);b[1][0]-n>this.a/2&&(b[1][0]-=this.a);b[2][0]-n>this.a/2&&(b[2][0]-=this.a);Math.max(b[0][0],b[1][0],b[2][0])-Math.min(b[0][0],b[1][0],b[2][0])<this.a/2&&(a.source=b)}},this)}f={}}
function ok(a,b,c,d,e,f,g,h,k,l){var n=fb([f,g,h,k]),m=a.a?tb(n)/a.a:null,q=a.a,r=a.b.c&&.5<m&&1>m,u=!1;if(0<l){if(a.g.f&&a.o)var v=fb([b,c,d,e]),u=u|.25<tb(v)/a.o;!r&&a.b.f&&m&&(u|=.25<m)}if(u||!a.i||yb(n,a.i)){if(!(u||isFinite(f[0])&&isFinite(f[1])&&isFinite(g[0])&&isFinite(g[1])&&isFinite(h[0])&&isFinite(h[1])&&isFinite(k[0])&&isFinite(k[1])))if(0<l)u=!0;else return;if(0<l&&(u||(n=a.c([(b[0]+d[0])/2,(b[1]+d[1])/2]),q=r?(ja(f[0],q)+ja(h[0],q))/2-ja(n[0],q):(f[0]+h[0])/2-n[0],n=(f[1]+h[1])/2-n[1],
u=q*q+n*n>a.u),u)){Math.abs(b[0]-d[0])<=Math.abs(b[1]-d[1])?(r=[(c[0]+d[0])/2,(c[1]+d[1])/2],q=a.c(r),n=[(e[0]+b[0])/2,(e[1]+b[1])/2],m=a.c(n),ok(a,b,c,r,n,f,g,q,m,l-1),ok(a,n,r,d,e,m,q,h,k,l-1)):(r=[(b[0]+c[0])/2,(b[1]+c[1])/2],q=a.c(r),n=[(d[0]+e[0])/2,(d[1]+e[1])/2],m=a.c(n),ok(a,b,r,n,e,f,q,m,k,l-1),ok(a,r,c,d,n,q,g,h,m,l-1));return}if(r){if(!a.l)return;a.j=!0}a.f.push({source:[f,h,k],target:[b,d,e]});a.f.push({source:[f,g,h],target:[b,c,d]})}}
function pk(a){var b=gb();a.f.forEach(function(a){a=a.source;hb(b,a[0]);hb(b,a[1]);hb(b,a[2])});return b};function qk(a){Ha.call(this);this.g=Ob(a.projection);this.B=rk(a.attributions);this.P=a.logo;this.V=void 0!==a.state?a.state:"ready";this.u=void 0!==a.wrapX?a.wrapX:!1}z(qk,Ha);function rk(a){if("string"===typeof a)return[new id({html:a})];if(a instanceof id)return[a];if(Array.isArray(a)){for(var b=a.length,c=Array(b),d=0;d<b;d++){var e=a[d];c[d]="string"===typeof e?new id({html:e}):e}return c}return null}qk.prototype.na=da;qk.prototype.aa=function(){return this.V};function sk(){this.a="precision mediump float;varying vec2 a;uniform sampler2D e;void main(void){gl_FragColor=texture2D(e,a);}"}z(sk,mi);var tk=new sk;function uk(){this.a="varying vec2 a;attribute vec2 b;attribute vec2 c;uniform vec4 d;void main(void){gl_Position=vec4(b*d.xy+d.zw,0.,1.);a=c;}"}z(uk,ni);var vk=new uk;function wk(a,b){this.b=a.getUniformLocation(b,"e");this.f=a.getUniformLocation(b,"d");this.a=a.getAttribLocation(b,"b");this.c=a.getAttribLocation(b,"c")};function xk(a,b){fk.call(this,a,b);this.L=tk;this.ia=vk;this.b=null;this.G=new yi([0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0]);this.A=this.g=null;this.l=-1;this.P=[0,0]}z(xk,fk);xk.prototype.Z=function(){Bi(this.f.g,this.G);fk.prototype.Z.call(this)};xk.prototype.j=function(a,b,c){var d=this.f;return function(e,f){return kh(a,b,e,f,function(a){var b=yk(d.c,a.getKey());b&&(c[e]||(c[e]={}),c[e][a.ga.toString()]=a);return b})}};xk.prototype.B=function(){fk.prototype.B.call(this);this.b=null};
xk.prototype.ed=function(a,b,c){var d=this.f,e=c.a,f=a.viewState,g=f.projection,h=this.a,k=h.oa(),l=k.Ga(g),n=fd(l,f.resolution),m=l.a[n],q=yh(k,n,g),r=q[0]/Tc(ed(l,n),this.P)[0],u=m/r,v=k.i*k.gc(g),w=f.center,B=a.extent,y=bd(l,B,m);if(this.g&&Rc(this.g,y)&&this.l==k.c)u=this.A;else{var I=[y.J-y.K+1,y.R-y.N+1],J=ia(Math.max(I[0]*q[0],I[1]*q[1])),I=u*J,F=$c(l,n),K=F[0]+y.K*q[0]*u,u=F[1]+y.N*q[1]*u,u=[K,u,K+I,u+I];gk(this,a,J);e.viewport(0,0,J,J);e.clearColor(0,0,0,0);e.clear(16384);e.disable(3042);
J=Ci(c,this.L,this.ia);Di(c,J);this.b||(this.b=new wk(e,J));wi(c,34962,this.G);e.enableVertexAttribArray(this.b.a);e.vertexAttribPointer(this.b.a,2,5126,!1,16,0);e.enableVertexAttribArray(this.b.c);e.vertexAttribPointer(this.b.c,2,5126,!1,16,8);e.uniform1i(this.b.b,0);c={};c[n]={};var x=this.j(k,g,c),L=h.get(Hg),J=!0,K=gb(),P=new Pc(0,0,0,0),G,N,U;for(N=y.K;N<=y.J;++N)for(U=y.N;U<=y.R;++U){F=rh(k,n,N,U,r,g);if(void 0!==b.extent&&(G=Yc(l,F.ga,K),!yb(G,b.extent)))continue;G=F.aa();(G=G==Ge||4==G||3==
G&&!L)||(F=Fe(F));G=F.aa();if(G==Ge){if(yk(d.c,F.getKey())){c[n][F.ga.toString()]=F;continue}}else if(4==G||3==G&&!L)continue;J=!1;G=Xc(l,F.ga,x,P,K);G||(F=ad(l,F.ga,P,K))&&x(n+1,F)}b=Object.keys(c).map(Number);b.sort(Na);for(var x=new Float32Array(4),ca,L=0,P=b.length;L<P;++L)for(ca in N=c[b[L]],N)F=N[ca],G=Yc(l,F.ga,K),x[0]=2*(G[2]-G[0])/I,x[1]=2*(G[3]-G[1])/I,x[2]=2*(G[0]-u[0])/I-1,x[3]=2*(G[1]-u[1])/I-1,e.uniform4fv(this.b.f,x),zk(d,F,q,v*r),e.drawArrays(5,0,4);J?(this.g=y,this.A=u,this.l=k.c):
(this.A=this.g=null,this.l=-1,a.animate=!0)}ph(a.usedTiles,k,n,y);var ta=d.o;qh(a,k,l,r,g,B,n,h.get(Gg),function(a){var b;(b=a.aa()!=Ge||yk(d.c,a.getKey()))||(b=a.getKey()in ta.c);b||ta.g([a,dd(l,a.ga),l.a[a.ga[0]],q,v*r])},this);mh(a,k);oh(a,k);e=this.V;tg(e);vg(e,ug(rg,1,0,0,1,(Math.round(w[0]/m)*m-u[0])/(u[2]-u[0]),(Math.round(w[1]/m)*m-u[1])/(u[3]-u[1])));0!==f.rotation&&yg(e,f.rotation);vg(e,ug(rg,a.size[0]*f.resolution/(u[2]-u[0]),0,0,a.size[1]*f.resolution/(u[3]-u[1]),0,0));vg(e,ug(rg,1,0,
0,1,-.5,-.5));return!0};function Ak(a,b){fk.call(this,a,b);this.g=!1;this.P=-1;this.L=NaN;this.A=gb();this.l=this.b=this.G=null}z(Ak,fk);p=Ak.prototype;p.dd=function(a,b,c){this.l=b;var d=a.viewState,e=this.b,f=a.size,g=a.pixelRatio,h=this.f.f;e&&!e.b()&&(h.enable(h.SCISSOR_TEST),h.scissor(0,0,f[0]*g,f[1]*g),e.g(c,d.center,d.resolution,d.rotation,f,g,b.opacity,b.Jb?a.skippedFeatureUids:{}),h.disable(h.SCISSOR_TEST))};p.Z=function(){var a=this.b;a&&(Uj(a,this.f.g)(),this.b=null);fk.prototype.Z.call(this)};
p.na=function(a,b,c,d,e){if(this.b&&this.l){c=b.viewState;var f=this.a,g={};return this.b.na(a,this.f.g,c.center,c.resolution,c.rotation,b.size,b.pixelRatio,this.l.opacity,{},function(a){var b=A(a).toString();if(!(b in g))return g[b]=!0,d.call(e,a,f)})}};p.fd=function(){lh(this)};
p.ed=function(a,b,c){function d(a){var b,c=a.g;c?b=c.call(a,l):(c=e.u)&&(b=c(a,l));if(b){if(b){c=!1;if(Array.isArray(b))for(var d=b.length-1;0<=d;--d)c=$h(q,a,b[d],Zh(l,n),this.fd,this)||c;else c=$h(q,a,b,Zh(l,n),this.fd,this)||c;a=c}else a=!1;this.g=this.g||a}}var e=this.a;b=e.oa();nh(a.attributions,b.B);oh(a,b);var f=a.viewHints[Hc],g=a.viewHints[1],h=e.A,k=e.C;if(!this.g&&!h&&f||!k&&g)return!0;var g=a.extent,h=a.viewState,f=h.projection,l=h.resolution,n=a.pixelRatio,h=e.c,m=e.i,k=e.get("renderOrder");
void 0===k&&(k=Yh);g=ib(g,m*l);if(!this.g&&this.L==l&&this.P==h&&this.G==k&&kb(this.A,g))return!0;this.b&&a.postRenderFunctions.push(Uj(this.b,c));this.g=!1;var q=new Tj(.5*l/n,g,e.i);ci(b,g,l,f);if(k){var r=[];di(b,g,function(a){r.push(a)},this);r.sort(k);r.forEach(d,this)}else di(b,g,d,this);Vj(q,c);this.L=l;this.P=h;this.G=k;this.A=g;this.b=q;return!0};function Bk(){this.f=0;this.b={};this.c=this.a=null}p=Bk.prototype;p.clear=function(){this.f=0;this.b={};this.c=this.a=null};function yk(a,b){return a.b.hasOwnProperty(b)}p.forEach=function(a,b){for(var c=this.a;c;)a.call(b,c.Na,c.La,this),c=c.ya};p.get=function(a){a=this.b[a];C(void 0!==a,15);if(a===this.c)return a.Na;a===this.a?(this.a=this.a.ya,this.a.$a=null):(a.ya.$a=a.$a,a.$a.ya=a.ya);a.ya=null;a.$a=this.c;this.c=this.c.ya=a;return a.Na};
p.pop=function(){var a=this.a;delete this.b[a.La];a.ya&&(a.ya.$a=null);this.a=a.ya;this.a||(this.c=null);--this.f;return a.Na};p.replace=function(a,b){this.get(a);this.b[a].Na=b};p.set=function(a,b){C(!(a in this.b),16);var c={La:a,ya:null,$a:this.c,Na:b};this.c?this.c.ya=c:this.a=c;this.c=c;this.b[a]=c;++this.f};function Ck(a,b){Ag.call(this,0,b);this.a=document.createElement("CANVAS");this.a.style.width="100%";this.a.style.height="100%";this.a.className="ol-unselectable";a.insertBefore(this.a,a.childNodes[0]||null);this.F=this.B=0;this.A=xd();this.l=!0;this.f=Ld(this.a,{antialias:!0,depth:!0,failIfMajorPerformanceCaveat:!0,preserveDrawingBuffer:!1,stencil:!0});this.g=new Ki(this.a,this.f);E(this.a,"webglcontextlost",this.Ke,this);E(this.a,"webglcontextrestored",this.Le,this);this.c=new Bk;this.D=null;this.o=
new He(function(a){var b=a[1];a=a[2];var e=b[0]-this.D[0],b=b[1]-this.D[1];return 65536*Math.log(a)+Math.sqrt(e*e+b*b)/a}.bind(this),function(a){return a[0].getKey()});this.C=function(){if(0!==this.o.a.length){Le(this.o);var a=Ie(this.o);zk(this,a[0],a[3],a[4])}return!1}.bind(this);this.i=0;Dk(this)}z(Ck,Ag);
function zk(a,b,c,d){var e=a.f,f=b.getKey();if(yk(a.c,f))a=a.c.get(f),e.bindTexture(3553,a.Ia),9729!=a.Zc&&(e.texParameteri(3553,10240,9729),a.Zc=9729),9729!=a.$c&&(e.texParameteri(3553,10241,9729),a.$c=9729);else{var g=e.createTexture();e.bindTexture(3553,g);if(0<d){var h=a.A.canvas,k=a.A;a.B!==c[0]||a.F!==c[1]?(h.width=c[0],h.height=c[1],a.B=c[0],a.F=c[1]):k.clearRect(0,0,c[0],c[1]);k.drawImage(b.Za(),d,d,c[0],c[1],0,0,c[0],c[1]);e.texImage2D(3553,0,6408,6408,5121,h)}else e.texImage2D(3553,0,6408,
6408,5121,b.Za());e.texParameteri(3553,10240,9729);e.texParameteri(3553,10241,9729);e.texParameteri(3553,10242,33071);e.texParameteri(3553,10243,33071);a.c.set(f,{Ia:g,Zc:9729,$c:9729})}}p=Ck.prototype;p.Oc=function(a){return a instanceof Fg?new xk(this,a):a instanceof Xg?new Ak(this,a):null};function Ek(a,b,c){var d=a.j;if(Fa(d,b)){a=a.g;var e=c.viewState;H(d,new mg(b,new Zj(a,e.center,e.resolution,e.rotation,c.size,c.extent,c.pixelRatio),c,null,a))}}
p.Z=function(){var a=this.f;a.isContextLost()||this.c.forEach(function(b){b&&a.deleteTexture(b.Ia)});Aa(this.g);Ag.prototype.Z.call(this)};p.Od=function(a,b){for(var c=this.f,d;1024<this.c.f-this.i;){if(d=this.c.a.Na)c.deleteTexture(d.Ia);else if(+this.c.a.La==b.index)break;else--this.i;this.c.pop()}};p.$=function(){return"webgl"};p.Ke=function(a){a.preventDefault();this.c.clear();this.i=0;a=this.b;for(var b in a)a[b].B()};p.Le=function(){Dk(this);this.j.render()};
function Dk(a){a=a.f;a.activeTexture(33984);a.blendFuncSeparate(770,771,1,771);a.disable(2884);a.disable(2929);a.disable(3089);a.disable(2960)}
p.uc=function(a){var b=this.g,c=this.f;if(c.isContextLost())return!1;if(!a)return this.l&&(this.a.style.display="none",this.l=!1),!1;this.D=a.focus;this.c.set((-a.index).toString(),null);++this.i;Ek(this,"precompose",a);var d=[],e=a.layerStatesArray;Ra(e);var f=a.viewState.resolution,g,h,k,l;g=0;for(h=e.length;g<h;++g)l=e[g],og(l,f)&&"ready"==l.pd&&(k=Dg(this,l.layer),k.ed(a,l,b)&&d.push(l));e=a.size[0]*a.pixelRatio;f=a.size[1]*a.pixelRatio;if(this.a.width!=e||this.a.height!=f)this.a.width=e,this.a.height=
f;c.bindFramebuffer(36160,null);c.clearColor(0,0,0,0);c.clear(16384);c.enable(3042);c.viewport(0,0,this.a.width,this.a.height);g=0;for(h=d.length;g<h;++g)l=d[g],k=Dg(this,l.layer),k.dd(a,l,b);this.l||(this.a.style.display="",this.l=!0);Bg(a);1024<this.c.f-this.i&&a.postRenderFunctions.push(this.Od.bind(this));0!==this.o.a.length&&(a.postRenderFunctions.push(this.C),a.animate=!0);Ek(this,"postcompose",a);Eg(this,a);a.postRenderFunctions.push(Cg)};
p.na=function(a,b,c,d,e,f,g){var h;if(this.f.isContextLost())return!1;var k=b.viewState,l=b.layerStatesArray,n;for(n=l.length-1;0<=n;--n){h=l[n];var m=h.layer;if(og(h,k.resolution)&&f.call(g,m)&&(h=Dg(this,m).na(a,b,c,d,e)))return h}};var Fk=["canvas","webgl"];
function M(a){Ha.call(this);var b=Gk(a);this.Oa=void 0!==a.loadTilesWhileAnimating?a.loadTilesWhileAnimating:!1;this.Ub=void 0!==a.loadTilesWhileInteracting?a.loadTilesWhileInteracting:!1;this.Tb=void 0!==a.pixelRatio?a.pixelRatio:Sd;this.Vb=b.logos;this.Aa=function(){this.i=void 0;this.cf.call(this,Date.now())}.bind(this);this.Ba=sg();this.Zb=sg();this.Ja=0;this.b=null;this.za=gb();this.B=this.C=this.G=null;this.a=document.createElement("DIV");this.a.className="ol-viewport"+(Vd?" ol-touch":"");this.a.style.position=
"relative";this.a.style.overflow="hidden";this.a.style.width="100%";this.a.style.height="100%";this.a.style.msTouchAction="none";this.a.style.touchAction="none";this.u=document.createElement("DIV");this.u.className="ol-overlaycontainer";this.a.appendChild(this.u);this.l=document.createElement("DIV");this.l.className="ol-overlaycontainer-stopevent";a="click dblclick mousedown touchstart mspointerdown pointerdown mousewheel wheel".split(" ");for(var c=0,d=a.length;c<d;++c)E(this.l,a[c],Da);this.a.appendChild(this.l);
this.ca=new Be(this);for(var e in Id)E(this.ca,Id[e],this.Vc,this);this.ba=b.keyboardEventTarget;this.j=null;E(this.a,"wheel",this.Va,this);E(this.a,"mousewheel",this.Va,this);this.L=b.controls;this.g=b.interactions;this.A=b.overlays;this.kd={};this.V=new b.df(this.a,this);this.P=null;this.ta=[];this.sa=[];this.ia=new Me(this.Rd.bind(this),this.je.bind(this));this.ac={};E(this,Ka(Hk),this.Wd,this);E(this,Ka(Ik),this.ke,this);E(this,Ka(Jk),this.ge,this);E(this,Ka(Kk),this.ie,this);Ia(this,b.values);
this.L.forEach(function(a){a.setMap(this)},this);E(this.L,od,function(a){a.element.setMap(this)},this);E(this.L,pd,function(a){a.element.setMap(null)},this);this.g.forEach(function(a){a.setMap(this)},this);E(this.g,od,function(a){a.element.setMap(this)},this);E(this.g,pd,function(a){a.element.setMap(null)},this);this.A.forEach(this.Jc,this);E(this.A,od,function(a){this.Jc(a.element)},this);E(this.A,pd,function(a){var b=a.element.bd;void 0!==b&&delete this.kd[b.toString()];a.element.setMap(null)},
this)}z(M,Ha);p=M.prototype;p.Id=function(a){this.g.push(a)};p.Jd=function(a){this.Fb().get($f).push(a)};p.Kd=function(a){this.A.push(a)};p.Jc=function(a){var b=a.bd;void 0!==b&&(this.kd[b.toString()]=a);a.setMap(this)};p.Z=function(){Aa(this.ca);Aa(this.V);xa(this.a,"wheel",this.Va,this);xa(this.a,"mousewheel",this.Va,this);void 0!==this.f&&(window.removeEventListener("resize",this.f,!1),this.f=void 0);this.i&&(cancelAnimationFrame(this.i),this.i=void 0);this.set(Kk,null);Ha.prototype.Z.call(this)};
p.Pd=function(a,b,c){if(this.b)return a=this.Ka(a),c=void 0!==c?c:{},this.V.na(a,this.b,void 0!==c.hitTolerance?c.hitTolerance*this.b.pixelRatio:0,b,null,void 0!==c.layerFilter?c.layerFilter:Ab,null)};p.Tc=function(a){var b=this.a.getBoundingClientRect();a=a.changedTouches?a.changedTouches[0]:a;return[a.clientX-b.left,a.clientY-b.top]};function Lk(a){a=a.get(Kk);return void 0!==a?"string"===typeof a?document.getElementById(a):a:null}
p.Ka=function(a){var b=this.b;return b?xg(b.pixelToCoordinateTransform,a.slice()):null};p.Fb=function(){return this.get(Hk)};function hf(a,b){var c=a.b;return c?xg(c.coordinateToPixelTransform,b.slice(0,2)):null}p.Ya=function(){return this.get(Jk)};p.W=function(){return this.get(Ik)};p.Sd=function(){return this.a};
p.Rd=function(a,b,c,d){var e=this.b;if(!(e&&b in e.wantedTiles&&e.wantedTiles[b][a.getKey()]))return Infinity;a=c[0]-e.focus[0];c=c[1]-e.focus[1];return 65536*Math.log(d)+Math.sqrt(a*a+c*c)/d};p.Va=function(a,b){var c=new Hd(b||a.type,this,a);this.Vc(c)};p.Vc=function(a){if(this.b){this.P=a.coordinate;a.frameState=this.b;var b=this.g.a,c;if(!1!==H(this,a))for(c=b.length-1;0<=c;c--){var d=b[c];if(d.get(Pe)&&!d.handleEvent(a))break}}};
p.fe=function(){var a=this.b,b=this.ia;if(0!==b.a.length){var c=16,d=c;if(a){var e=a.viewHints;e[Hc]&&(c=this.Oa?8:0,d=2);e[1]&&(c=this.Ub?8:0,d=2)}if(b.o<c){Le(b);for(var e=0,f,g;b.o<c&&e<d&&0<b.a.length;)f=Ie(b)[0],g=f.getKey(),0!==f.aa()||g in b.i||(b.i[g]=!0,++b.o,++e,f.load())}}b=this.sa;c=0;for(d=b.length;c<d;++c)b[c](this,a);b.length=0};p.ge=function(){this.render()};
p.ie=function(){var a;this.get(Kk)&&(a=Lk(this));if(this.j){for(var b=0,c=this.j.length;b<c;++b)D(this.j[b]);this.j=null}a?(a.appendChild(this.a),a=this.ba?this.ba:a,this.j=[E(a,"keydown",this.Va,this),E(a,"keypress",this.Va,this)],this.f||(this.f=this.td.bind(this),window.addEventListener("resize",this.f,!1))):(yd(this.a),void 0!==this.f&&(window.removeEventListener("resize",this.f,!1),this.f=void 0));this.td()};p.je=function(){this.render()};p.Xc=function(){this.render()};
p.ke=function(){this.G&&(D(this.G),this.G=null);this.C&&(D(this.C),this.C=null);var a=this.W();a&&(this.G=E(a,Ma,this.Xc,this),this.C=E(a,"change",this.Xc,this));this.render()};p.Wd=function(){this.B&&(this.B.forEach(D),this.B=null);var a=this.Fb();a&&(this.B=[E(a,Ma,this.render,this),E(a,"change",this.render,this)]);this.render()};p.render=function(){void 0===this.i&&(this.i=requestAnimationFrame(this.Aa))};p.af=function(a){return this.g.remove(a)};
p.cf=function(a){var b,c,d,e=this.Ya(),f=this.W(),g=gb(),h=null;if(b=void 0!==e&&0<e[0]&&0<e[1]&&f)b=!!f.get(Cc)&&void 0!==Fc(f);if(b){var h=Jc(f,this.b?this.b.viewHints:void 0),k=this.Fb().ic(),l={};b=0;for(c=k.length;b<c;++b)l[A(k[b].layer)]=k[b];d=f.aa();h={animate:!1,attributions:{},coordinateToPixelTransform:this.Ba,extent:g,focus:this.P?this.P:d.center,index:this.Ja++,layerStates:l,layerStatesArray:k,logos:na({},this.Vb),pixelRatio:this.Tb,pixelToCoordinateTransform:this.Zb,postRenderFunctions:[],
size:e,skippedFeatureUids:this.ac,tileQueue:this.ia,time:a,usedTiles:{},viewState:d,viewHints:h,wantedTiles:{}}}if(h){a=this.ta;b=e=0;for(c=a.length;b<c;++b)f=a[b],f(this,h)&&(a[e++]=f);a.length=e;h.extent=wb(d.center,d.resolution,d.rotation,h.size,g)}this.b=h;this.V.uc(h);h&&(h.animate&&this.render(),Array.prototype.push.apply(this.sa,h.postRenderFunctions),0!==this.ta.length||h.viewHints[Hc]||h.viewHints[1]||pb(h.extent,this.za)||(H(this,new zd("moveend",this,h)),jb(h.extent,this.za)));H(this,new zd("postrender",
this,h));setTimeout(this.fe.bind(this),0)};p.ef=function(a){this.set(Hk,a)};p.td=function(){var a=Lk(this);if(a){var b=getComputedStyle(a);this.set(Jk,[a.offsetWidth-parseFloat(b.borderLeftWidth)-parseFloat(b.paddingLeft)-parseFloat(b.paddingRight)-parseFloat(b.borderRightWidth),a.offsetHeight-parseFloat(b.borderTopWidth)-parseFloat(b.paddingTop)-parseFloat(b.paddingBottom)-parseFloat(b.borderBottomWidth)])}else this.set(Jk,void 0)};
function Gk(a){var b=null;void 0!==a.keyboardEventTarget&&(b="string"===typeof a.keyboardEventTarget?document.getElementById(a.keyboardEventTarget):a.keyboardEventTarget);var c={},d={};if(void 0===a.logo||"boolean"===typeof a.logo&&a.logo)d["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAHGAAABxgEXwfpGAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAhNQTFRF////AP//AICAgP//AFVVQECA////K1VVSbbbYL/fJ05idsTYJFtbbcjbJllmZszWWMTOIFhoHlNiZszTa9DdUcHNHlNlV8XRIVdiasrUHlZjIVZjaMnVH1RlIFRkH1RkH1ZlasvYasvXVsPQH1VkacnVa8vWIVZjIFRjVMPQa8rXIVVkXsXRsNveIFVkIFZlIVVj3eDeh6GmbMvXH1ZkIFRka8rWbMvXIFVkIFVjIFVkbMvWH1VjbMvWIFVlbcvWIFVla8vVIFVkbMvWbMvVH1VkbMvWIFVlbcvWIFVkbcvVbMvWjNPbIFVkU8LPwMzNIFVkbczWIFVkbsvWbMvXIFVkRnB8bcvW2+TkW8XRIFVkIlZlJVloJlpoKlxrLl9tMmJwOWd0Omh1RXF8TneCT3iDUHiDU8LPVMLPVcLPVcPQVsPPVsPQV8PQWMTQWsTQW8TQXMXSXsXRX4SNX8bSYMfTYcfTYsfTY8jUZcfSZsnUaIqTacrVasrVa8jTa8rWbI2VbMvWbcvWdJObdcvUdszUd8vVeJaee87Yfc3WgJyjhqGnitDYjaarldPZnrK2oNbborW5o9bbo9fbpLa6q9ndrL3ArtndscDDutzfu8fJwN7gwt7gxc/QyuHhy+HizeHi0NfX0+Pj19zb1+Tj2uXk29/e3uLg3+Lh3+bl4uXj4ufl4+fl5Ofl5ufl5ujm5+jmySDnBAAAAFp0Uk5TAAECAgMEBAYHCA0NDg4UGRogIiMmKSssLzU7PkJJT1JTVFliY2hrdHZ3foSFhYeJjY2QkpugqbG1tre5w8zQ09XY3uXn6+zx8vT09vf4+Pj5+fr6/P39/f3+gz7SsAAAAVVJREFUOMtjYKA7EBDnwCPLrObS1BRiLoJLnte6CQy8FLHLCzs2QUG4FjZ5GbcmBDDjxJBXDWxCBrb8aM4zbkIDzpLYnAcE9VXlJSWlZRU13koIeW57mGx5XjoMZEUqwxWYQaQbSzLSkYGfKFSe0QMsX5WbjgY0YS4MBplemI4BdGBW+DQ11eZiymfqQuXZIjqwyadPNoSZ4L+0FVM6e+oGI6g8a9iKNT3o8kVzNkzRg5lgl7p4wyRUL9Yt2jAxVh6mQCogae6GmflI8p0r13VFWTHBQ0rWPW7ahgWVcPm+9cuLoyy4kCJDzCm6d8PSFoh0zvQNC5OjDJhQopPPJqph1doJBUD5tnkbZiUEqaCnB3bTqLTFG1bPn71kw4b+GFdpLElKIzRxxgYgWNYc5SCENVHKeUaltHdXx0dZ8uBI1hJ2UUDgq82CM2MwKeibqAvSO7MCABq0wXEPiqWEAAAAAElFTkSuQmCC"]=
"https://openlayers.org/";else{var e=a.logo;"string"===typeof e?d[e]="":e instanceof HTMLElement?d[A(e).toString()]=e:e&&(C("string"==typeof e.href,44),C("string"==typeof e.src,45),d[e.src]=e.href)}e=a.layers instanceof Zf?a.layers:new Zf({layers:a.layers});c[Hk]=e;c[Kk]=a.target;c[Ik]=void 0!==a.view?a.view:new Bc;var e=Ag,f;void 0!==a.renderer?(Array.isArray(a.renderer)?f=a.renderer:"string"===typeof a.renderer?f=[a.renderer]:C(!1,46),0<=f.indexOf("dom")&&(f=f.concat(Fk))):f=Fk;var g,h;g=0;for(h=
f.length;g<h;++g){var k=f[g];if("canvas"==k){if(Ud){e=ei;break}}else if("webgl"==k&&Md){e=Ck;break}}void 0!==a.controls?Array.isArray(a.controls)?f=new jd(a.controls.slice()):(C(a.controls instanceof jd,47),f=a.controls):f=Gd();void 0!==a.interactions?Array.isArray(a.interactions)?g=new jd(a.interactions.slice()):(C(a.interactions instanceof jd,48),g=a.interactions):g=Qf();void 0!==a.overlays?Array.isArray(a.overlays)?a=new jd(a.overlays.slice()):(C(a.overlays instanceof jd,49),a=a.overlays):a=new jd;
return{controls:f,interactions:g,keyboardEventTarget:b,logos:d,overlays:a,df:e,values:c}}var Hk="layergroup",Jk="size",Kk="target",Ik="view";Pb(eg);Pb(lg);lg.forEach(function(a){eg.forEach(function(b){Kb(a,b,fg);Kb(b,a,gg)})});function Mk(a){Ha.call(this);this.bd=a.id;this.j=void 0!==a.insertFirst?a.insertFirst:!0;this.l=void 0!==a.stopEvent?a.stopEvent:!0;this.b=document.createElement("DIV");this.b.className="ol-overlay-container";this.b.style.position="absolute";this.autoPan=void 0!==a.autoPan?a.autoPan:!1;this.g=a.autoPanAnimation||{};this.i=void 0!==a.autoPanMargin?a.autoPanMargin:20;this.a={Ab:"",Ib:"",Mb:"",Rb:"",visible:!0};this.f=null;E(this,Ka(Nk),this.Vd,this);E(this,Ka(Ok),this.ae,this);E(this,Ka(Pk),this.be,
this);E(this,Ka(Qk),this.de,this);E(this,Ka(Rk),this.ee,this);void 0!==a.element&&this.set(Nk,a.element);this.set(Pk,void 0!==a.offset?a.offset:[0,0]);this.set(Rk,void 0!==a.positioning?a.positioning:Sk);void 0!==a.position&&this.set(Qk,a.position)}z(Mk,Ha);p=Mk.prototype;p.Vd=function(){for(var a=this.b;a.lastChild;)a.removeChild(a.lastChild);(a=this.get(Nk))&&this.b.appendChild(a)};
p.ae=function(){this.f&&(yd(this.b),D(this.f),this.f=null);var a=this.get(Ok);a&&(this.f=E(a,"postrender",this.render,this),Tk(this),a=this.l?a.l:a.u,this.j?a.insertBefore(this.b,a.childNodes[0]||null):a.appendChild(this.b))};p.render=function(){Tk(this)};p.be=function(){Tk(this)};
p.de=function(){Tk(this);if(void 0!==this.get(Qk)&&this.autoPan){var a=this.get(Ok);if(void 0!==a&&Lk(a)){var b=Uk(Lk(a),a.Ya()),c=this.get(Nk),d=c.offsetWidth,e=c.currentStyle||getComputedStyle(c),d=d+(parseInt(e.marginLeft,10)+parseInt(e.marginRight,10)),e=c.offsetHeight,f=c.currentStyle||getComputedStyle(c),e=e+(parseInt(f.marginTop,10)+parseInt(f.marginBottom,10)),g=Uk(c,[d,e]),c=this.i;kb(b,g)||(d=g[0]-b[0],e=b[2]-g[2],f=g[1]-b[1],g=b[3]-g[3],b=[0,0],0>d?b[0]=d-c:0>e&&(b[0]=Math.abs(e)+c),0>
f?b[1]=f-c:0>g&&(b[1]=Math.abs(g)+c),0===b[0]&&0===b[1])||(c=a.W().get(Cc),c=hf(a,c),b=[c[0]+b[0],c[1]+b[1]],a.W().animate({center:a.Ka(b),duration:this.g.duration,easing:this.g.easing}))}}};p.ee=function(){Tk(this)};p.setMap=function(a){this.set(Ok,a)};function Uk(a,b){var c=a.getBoundingClientRect(),d=c.left+window.pageXOffset,c=c.top+window.pageYOffset;return[d,c,d+b[0],c+b[1]]}function Vk(a,b){a.a.visible!==b&&(a.b.style.display=b?"":"none",a.a.visible=b)}
function Tk(a){var b=a.get(Ok),c=a.get(Qk);if(void 0!==b&&b.b&&void 0!==c){var c=hf(b,c),d=b.Ya(),b=a.b.style,e=a.get(Pk),f=a.get(Rk),g=e[0],e=e[1];if(f==Wk||f==Xk||f==Yk)""!==a.a.Ib&&(a.a.Ib=b.left=""),g=Math.round(d[0]-c[0]-g)+"px",a.a.Mb!=g&&(a.a.Mb=b.right=g);else{""!==a.a.Mb&&(a.a.Mb=b.right="");if(f==Zk||f==$k||f==al)g-=a.b.offsetWidth/2;g=Math.round(c[0]+g)+"px";a.a.Ib!=g&&(a.a.Ib=b.left=g)}if(f==bl||f==Zk||f==Wk)""!==a.a.Rb&&(a.a.Rb=b.top=""),c=Math.round(d[1]-c[1]-e)+"px",a.a.Ab!=c&&(a.a.Ab=
b.bottom=c);else{""!==a.a.Ab&&(a.a.Ab=b.bottom="");if(f==cl||f==$k||f==Xk)e-=a.b.offsetHeight/2;c=Math.round(c[1]+e)+"px";a.a.Rb!=c&&(a.a.Rb=b.top=c)}Vk(a,!0)}else Vk(a,!1)}var bl="bottom-left",Zk="bottom-center",Wk="bottom-right",cl="center-left",$k="center-center",Xk="center-right",Sk="top-left",al="top-center",Yk="top-right",Nk="element",Ok="map",Pk="offset",Qk="position",Rk="positioning";function dl(a){Ha.call(this);this.a=void 0;this.b="geometry";this.i=null;this.g=void 0;this.f=null;E(this,Ka(this.b),this.Gb,this);void 0!==a&&(a instanceof bc||!a?this.Da(a):Ia(this,a))}z(dl,Ha);p=dl.prototype;p.clone=function(){var a=new dl(na({},this.o));el(a,this.b);var b=this.T();b&&a.Da(b.clone());(b=this.i)&&a.ad(b);return a};p.T=function(){return this.get(this.b)};p.De=function(){return this.a};p.Ee=function(){this.v()};
p.Gb=function(){this.f&&(D(this.f),this.f=null);var a=this.T();a&&(this.f=E(a,"change",this.Ee,this));this.v()};p.Da=function(a){this.set(this.b,a)};p.ad=function(a){this.g=(this.i=a)?fl(a):void 0;this.v()};function el(a,b){xa(a,Ka(a.b),a.Gb,a);a.b=b;E(a,Ka(a.b),a.Gb,a);a.Gb()}function fl(a){if("function"!==typeof a){var b;Array.isArray(a)?b=a:(C(a instanceof Rg,41),b=[a]);a=function(){return b}}return a};var gl=document.implementation.createDocument("","",null);function hl(a){return il(a,!1,[]).join("")}function il(a,b,c){if(a.nodeType==Node.CDATA_SECTION_NODE||a.nodeType==Node.TEXT_NODE)b?c.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,"")):c.push(a.nodeValue);else for(a=a.firstChild;a;a=a.nextSibling)il(a,b,c);return c}function jl(a){return(new DOMParser).parseFromString(a,"application/xml")}
function kl(a,b){return function(c,d){var e=a.call(void 0!==b?b:this,c,d);void 0!==e&&d[d.length-1].push(e)}}function ll(a,b){return function(c,d){var e=a.call(void 0!==b?b:this,c,d);void 0!==e&&(d[d.length-1]=e)}}function O(a){return function(b,c){var d=a.call(this,b,c);if(void 0!==d){var e=c[c.length-1],f=b.localName,g;f in e?g=e[f]:g=e[f]=[];g.push(d)}}}function Q(a,b){return function(c,d){var e=a.call(this,c,d);void 0!==e&&(d[d.length-1][void 0!==b?b:c.localName]=e)}}
function R(a){return function(b,c,d){a.call(this,b,c,d);d[d.length-1].node.appendChild(b)}}function ml(a){var b,c;return function(d,e,f){if(void 0===b){b={};var g={};g[d.localName]=a;b[d.namespaceURI]=g;c=nl(d.localName)}pl(b,c,e,f)}}function nl(a){return function(b,c,d){b=c[c.length-1].node;c=a;void 0===c&&(c=d);return gl.createElementNS(b.namespaceURI,c)}}var ql=nl();function rl(a,b){for(var c=b.length,d=Array(c),e=0;e<c;++e)d[e]=a[b[e]];return d}
function S(a,b,c){c=void 0!==c?c:{};var d,e;d=0;for(e=a.length;d<e;++d)c[a[d]]=b;return c}function sl(a,b,c,d){for(b=b.firstElementChild;b;b=b.nextElementSibling){var e=a[b.namespaceURI];void 0!==e&&(e=e[b.localName])&&e.call(d,b,c)}}function T(a,b,c,d,e){d.push(a);sl(b,c,d,e);return d.pop()}function pl(a,b,c,d,e,f){for(var g=(void 0!==e?e:c).length,h,k,l=0;l<g;++l)h=c[l],void 0!==h&&(k=b.call(f,h,d,void 0!==e?e[l]:void 0),void 0!==k&&a[k.namespaceURI][k.localName].call(f,k,h,d))}
function tl(a,b,c,d,e,f,g){e.push(a);pl(b,c,d,e,f,g);e.pop()};function ul(a,b,c){return function(d,e,f){var g=new XMLHttpRequest;g.open("GET","function"===typeof a?a(d,e,f):a,!0);"arraybuffer"==b.$()&&(g.responseType="arraybuffer");g.onload=function(){if(!g.status||200<=g.status&&300>g.status){var a=b.$(),d;"json"==a||"text"==a?d=g.responseText:"xml"==a?(d=g.responseXML)||(d=jl(g.responseText)):"arraybuffer"==a&&(d=g.response);d&&c.call(this,b.i(d,{featureProjection:f}),b.b(d))}}.bind(this);g.send()}}
function vl(a,b){return ul(a,b,function(a){wl(this,a);this.v()})};function xl(){this.f=this.defaultDataProjection=null}function yl(a,b,c){var d;c&&(d={dataProjection:c.dataProjection?c.dataProjection:a.b(b),featureProjection:c.featureProjection});return na({dataProjection:a.defaultDataProjection,featureProjection:a.f},d)}
function zl(a,b,c){var d=c?Ob(c.featureProjection):null,e=c?Ob(c.dataProjection):null,f;d&&e&&!Xb(d,e)?a instanceof bc?f=(b?a.clone():a).transform(b?d:e,b?e:d):f=ac(b?a.slice():a,b?d:e,b?e:d):f=a;if(b&&c&&c.decimals){var g=Math.pow(10,c.decimals);a=function(a){for(var b=0,c=a.length;b<c;++b)a[b]=Math.round(a[b]*g)/g;return a};Array.isArray(f)?a(f):f.zb(a)}return f};function Al(){xl.call(this)}z(Al,xl);function Bl(a){return"string"===typeof a?(a=JSON.parse(a))?a:null:null!==a?a:null}Al.prototype.$=function(){return"json"};Al.prototype.i=function(a,b){var c=Bl(a),d=yl(this,a,b),e;if("FeatureCollection"===c.type){e=[];var c=c.features,f,g;f=0;for(g=c.length;f<g;++f)e.push(Cl(this,c[f],d))}else e=[Cl(this,c,d)];return e};
Al.prototype.b=function(a){a=Bl(a).crs;var b;a?"name"==a.type?b=Ob(a.properties.name):"EPSG"==a.type?b=Ob("EPSG:"+a.properties.code):C(!1,36):b=this.defaultDataProjection;return b};function Dl(a,b,c,d,e,f){var g=NaN,h=NaN,k=(c-b)/d;if(0!==k)if(1==k)g=a[b],h=a[b+1];else if(2==k)g=(1-e)*a[b]+e*a[b+d],h=(1-e)*a[b+1]+e*a[b+d+1];else{var h=a[b],k=a[b+1],l=0,g=[0],n;for(n=b+d;n<c;n+=d){var m=a[n],q=a[n+1],l=l+Math.sqrt((m-h)*(m-h)+(q-k)*(q-k));g.push(l);h=m;k=q}c=e*l;k=0;l=g.length;for(n=!1;k<l;)e=k+(l-k>>1),h=+Na(g[e],c),0>h?k=e+1:(l=e,n=!h);e=n?k:~k;0>e?(c=(c-g[-e-2])/(g[-e-1]-g[-e-2]),b+=(-e-2)*d,g=a[b],g+=c*(a[b+d]-g),e=a[b+1],h=e+c*(a[b+d+1]-e)):(g=a[b+e*d],h=a[b+e*d+1])}return f?
(f[0]=g,f[1]=h,f):[g,h]};function V(a,b){ec.call(this);this.f=null;this.j=-1;this.ea(a,b)}z(V,ec);p=V.prototype;p.clone=function(){var a=new V(null);a.U(this.X,this.s.slice());return a};p.ua=function(){return lc(this.s,0,this.s.length,this.a)};p.Sc=function(a,b){return Dl(this.s,0,this.s.length,this.a,a,b)};p.Ie=function(){var a=this.s,b=this.a,c=a[0],d=a[1],e=0,f;for(f=0+b;f<this.s.length;f+=b)var g=a[f],h=a[f+1],e=e+Math.sqrt((g-c)*(g-c)+(h-d)*(h-d)),c=g,d=h;return e};
function fh(a){a.j!=a.c&&(a.f=a.Sc(.5,a.f),a.j=a.c);return a.f}p.Ua=function(a){var b=[];b.length=nc(this.s,0,this.s.length,this.a,a,b,0);a=new V(null);a.U("XY",b);return a};p.$=function(){return"LineString"};p.ea=function(a,b){a?(hc(this,b,a,1),this.s||(this.s=[]),this.s.length=jc(this.s,0,a,this.a),this.v()):this.U("XY",null)};p.U=function(a,b){gc(this,a,b);this.v()};function El(a,b){ec.call(this);this.f=[];this.ea(a,b)}z(El,ec);p=El.prototype;p.clone=function(){var a=new El(null);a.U(this.X,this.s.slice(),this.f.slice());return a};p.ua=function(){return mc(this.s,0,this.f,this.a)};p.Ta=function(){return this.f};function bj(a){var b=a.s,c=a.f;a=a.X;var d=[],e=0,f,g;f=0;for(g=c.length;f<g;++f){var h=c[f],k=new V(null);k.U(a,b.slice(e,h));d.push(k);e=h}return d}
function gh(a){var b=[],c=a.s,d=0,e=a.f;a=a.a;var f,g;f=0;for(g=e.length;f<g;++f){var h=e[f],d=Dl(c,d,h,a,.5);Pa(b,d);d=h}return b}p.Ua=function(a){var b=[],c=[],d=this.s,e=this.f,f=this.a,g=0,h=0,k,l;k=0;for(l=e.length;k<l;++k){var n=e[k],h=nc(d,g,n,f,a,b,h);c.push(h);g=n}b.length=h;a=new El(null);a.U("XY",b,c);return a};p.$=function(){return"MultiLineString"};
p.ea=function(a,b){if(a){hc(this,b,a,2);this.s||(this.s=[]);var c=kc(this.s,0,a,this.a,this.f);this.s.length=0===c.length?0:c[c.length-1];this.v()}else this.U("XY",null,this.f)};p.U=function(a,b,c){gc(this,a,b);this.f=c;this.v()};function Fl(a,b){var c=a.X,d=[],e=[],f,g;f=0;for(g=b.length;f<g;++f){var h=b[f];0===f&&(c=h.X);Pa(d,h.s);e.push(d.length)}a.U(c,d,e)};function Gl(a,b){ec.call(this);this.ea(a,b)}z(Gl,ec);p=Gl.prototype;p.clone=function(){var a=new Gl(null);a.U(this.X,this.s.slice());return a};p.ua=function(){return lc(this.s,0,this.s.length,this.a)};p.$=function(){return"MultiPoint"};p.ea=function(a,b){a?(hc(this,b,a,1),this.s||(this.s=[]),this.s.length=jc(this.s,0,a,this.a),this.v()):this.U("XY",null)};p.U=function(a,b){gc(this,a,b);this.v()};function Hl(a,b){ec.call(this);this.f=[];this.A=-1;this.C=null;this.G=-1;this.j=null;this.ea(a,b)}z(Hl,ec);p=Hl.prototype;p.clone=function(){for(var a=new Hl(null),b=this.f.length,c=Array(b),d=0;d<b;++d)c[d]=this.f[d].slice();Il(a,this.X,this.s.slice(),c);return a};p.ua=function(a){var b;void 0!==a?(b=hh(this).slice(),wc(b,this.f,this.a,a)):b=this.s;a=b;b=this.f;var c=this.a,d=0,e=[],f=0,g,h;g=0;for(h=b.length;g<h;++g){var k=b[g];e[f++]=mc(a,d,k,c,e[f]);d=k[k.length-1]}e.length=f;return e};
function ih(a){if(a.A!=a.c){var b=a.s,c=a.f,d=a.a,e=0,f=[],g,h,k;g=0;for(h=c.length;g<h;++g){var l=c[g];k=b;var n=l[0],m=d,q=nb(void 0);k=rb(q,k,e,n,m);f.push((k[0]+k[2])/2,(k[1]+k[3])/2);e=l[l.length-1]}b=hh(a);c=a.f;d=a.a;g=0;h=[];l=0;for(k=c.length;l<k;++l)e=c[l],h=sc(b,g,e,d,f,2*l,h),g=e[e.length-1];a.C=h;a.A=a.c}return a.C}
function hh(a){if(a.G!=a.c){var b=a.s,c;a:{c=a.f;var d,e;d=0;for(e=c.length;d<e;++d)if(!uc(b,c[d],a.a,void 0)){c=!1;break a}c=!0}c?a.j=b:(a.j=b.slice(),a.j.length=wc(a.j,a.f,a.a));a.G=a.c}return a.j}p.Ua=function(a){var b=[],c=[],d=this.s,e=this.f,f=this.a;a=Math.sqrt(a);var g=0,h=0,k,l;k=0;for(l=e.length;k<l;++k){var n=e[k],m=[],h=oc(d,g,n,f,a,b,h,m);c.push(m);g=n[n.length-1]}b.length=h;d=new Hl(null);Il(d,"XY",b,c);return d};
function Rj(a){var b=a.X,c=a.s;a=a.f;var d=[],e=0,f,g,h,k;f=0;for(g=a.length;f<g;++f){var l=a[f].slice(),n=l[l.length-1];if(0!==e)for(h=0,k=l.length;h<k;++h)l[h]-=e;h=new xc(null);h.U(b,c.slice(e,n),l);d.push(h);e=n}return d}p.$=function(){return"MultiPolygon"};
p.ea=function(a,b){if(a){hc(this,b,a,3);this.s||(this.s=[]);var c=this.s,d=this.a,e=this.f,f=0,e=e?e:[],g=0,h,k;h=0;for(k=a.length;h<k;++h)f=kc(c,f,a[h],d,e[g]),e[g++]=f,f=f[f.length-1];e.length=g;0===e.length?this.s.length=0:(c=e[e.length-1],this.s.length=0===c.length?0:c[c.length-1]);this.v()}else Il(this,"XY",null,this.f)};function Il(a,b,c,d){gc(a,b,c);a.f=d;a.v()};function Jl(a){bc.call(this);this.b=a?a:null;Kl(this)}z(Jl,bc);function Ll(a){var b=[],c,d;c=0;for(d=a.length;c<d;++c)b.push(a[c].clone());return b}function Ml(a){var b,c;if(a.b)for(b=0,c=a.b.length;b<c;++b)xa(a.b[b],"change",a.v,a)}function Kl(a){var b,c;if(a.b)for(b=0,c=a.b.length;b<c;++b)E(a.b[b],"change",a.v,a)}p=Jl.prototype;p.clone=function(){var a=new Jl(null),b=Ll(this.b);Ml(a);a.b=b;Kl(a);a.v();return a};p.Cb=function(a){nb(a);for(var b=this.b,c=0,d=b.length;c<d;++c)qb(a,b[c].M());return a};
p.kc=function(a){this.l!=this.c&&(oa(this.g),this.i=0,this.l=this.c);if(0>a||0!==this.i&&a<this.i)return this;var b=a.toString();if(this.g.hasOwnProperty(b))return this.g[b];var c=[],d=this.b,e=!1,f,g;f=0;for(g=d.length;f<g;++f){var h=d[f],k=h.kc(a);c.push(k);k!==h&&(e=!0)}if(e)return a=new Jl(null),Ml(a),a.b=c,Kl(a),a.v(),this.g[b]=a;this.i=a;return this};p.$=function(){return"GeometryCollection"};p.rotate=function(a,b){for(var c=this.b,d=0,e=c.length;d<e;++d)c[d].rotate(a,b);this.v()};
p.scale=function(a,b,c){c||(c=vb(this.M()));for(var d=this.b,e=0,f=d.length;e<f;++e)d[e].scale(a,b,c);this.v()};p.zb=function(a){var b=this.b,c,d;c=0;for(d=b.length;c<d;++c)b[c].zb(a);this.v()};p.translate=function(a,b){var c=this.b,d,e;d=0;for(e=c.length;d<e;++d)c[d].translate(a,b);this.v()};p.Z=function(){Ml(this);bc.prototype.Z.call(this)};function Nl(a){a=a?a:{};xl.call(this);this.defaultDataProjection=Ob(a.defaultDataProjection?a.defaultDataProjection:"EPSG:4326");a.featureProjection&&(this.f=Ob(a.featureProjection));this.a=a.geometryName}z(Nl,Al);function Ol(a,b){return a?zl((0,Pl[a.type])(a),!1,b):null}
var Pl={Point:function(a){return new qc(a.coordinates)},LineString:function(a){return new V(a.coordinates)},Polygon:function(a){return new xc(a.coordinates)},MultiPoint:function(a){return new Gl(a.coordinates)},MultiLineString:function(a){return new El(a.coordinates)},MultiPolygon:function(a){return new Hl(a.coordinates)},GeometryCollection:function(a,b){var c=a.geometries.map(function(a){return Ol(a,b)});return new Jl(c)}};
function Cl(a,b,c){b="Feature"===b.type?b:{type:"Feature",geometry:b};c=Ol(b.geometry,c);var d=new dl;a.a&&el(d,a.a);d.Da(c);void 0!==b.id&&(d.a=b.id,d.v());b.properties&&Ia(d,b.properties);return d};function Ql(){new XMLSerializer;xl.call(this)}z(Ql,xl);Ql.prototype.$=function(){return"xml"};Ql.prototype.i=function(a,b){if(a instanceof Document)return Rl(this,a,b);if(a instanceof Node)return Sl(this,a,b);if("string"===typeof a){var c=jl(a);return Rl(this,c,b)}return[]};function Rl(a,b,c){var d=[];for(b=b.firstChild;b;b=b.nextSibling)b.nodeType==Node.ELEMENT_NODE&&Pa(d,Sl(a,b,c));return d}
Ql.prototype.b=function(a){return a instanceof Document?this.defaultDataProjection:a instanceof Node?this.j(a):"string"===typeof a?(jl(a),this.defaultDataProjection):null};Ql.prototype.j=function(){return this.defaultDataProjection};function Tl(a){a=a?a:{};this.featureType=a.featureType;this.featureNS=a.featureNS;this.srsName=a.srsName;this.schemaLocation="";this.a={};this.a["http://www.opengis.net/gml"]={featureMember:ll(Tl.prototype.c),featureMembers:ll(Tl.prototype.c)};Ql.call(this)}z(Tl,Ql);var Ul=/^[\s\xa0]*$/;
Tl.prototype.c=function(a,b){var c=a.localName,d=null;if("FeatureCollection"==c)"http://www.opengis.net/wfs"===a.namespaceURI?d=T([],this.a,a,b,this):d=T(null,this.a,a,b,this);else if("featureMembers"==c||"featureMember"==c){var e=b[0],f=e.featureType,g=e.featureNS,h,k;if(!f&&a.childNodes){f=[];g={};h=0;for(k=a.childNodes.length;h<k;++h){var l=a.childNodes[h];if(1===l.nodeType){var n=l.nodeName.split(":").pop();if(-1===f.indexOf(n)){var m="",q=0,l=l.namespaceURI,r;for(r in g){if(g[r]===l){m=r;break}++q}m||
(m="p"+q,g[m]=l);f.push(m+":"+n)}}}"featureMember"!=c&&(e.featureType=f,e.featureNS=g)}"string"===typeof g&&(h=g,g={},g.p0=h);var e={},f=Array.isArray(f)?f:[f],u;for(u in g){n={};h=0;for(k=f.length;h<k;++h)(-1===f[h].indexOf(":")?"p0":f[h].split(":")[0])===u&&(n[f[h].split(":").pop()]="featureMembers"==c?kl(this.g,this):ll(this.g,this));e[g[u]]=n}"featureMember"==c?d=T(void 0,e,a,b):d=T([],e,a,b)}null===d&&(d=[]);return d};
Tl.prototype.o=function(a,b){var c=b[0];c.srsName=a.firstElementChild.getAttribute("srsName");var d=T(null,this.l,a,b,this);if(d)return zl(d,!1,c)};
Tl.prototype.g=function(a,b){var c,d;(d=a.getAttribute("fid"))||(d=a.getAttributeNS("http://www.opengis.net/gml","id")||"");var e={},f;for(c=a.firstElementChild;c;c=c.nextElementSibling){var g=c.localName;if(0===c.childNodes.length||1===c.childNodes.length&&(3===c.firstChild.nodeType||4===c.firstChild.nodeType)){var h=hl(c);Ul.test(h)&&(h=void 0);e[g]=h}else"boundedBy"!==g&&(f=g),e[g]=this.o(c,b)}c=new dl(e);f&&el(c,f);d&&(c.a=d,c.v());return c};
function Sl(a,b,c){var d={featureType:a.featureType,featureNS:a.featureNS};c&&na(d,yl(a,b,c));return a.c(b,[d])||[]}Tl.prototype.j=function(a){return Ob(this.srsName?this.srsName:a.firstElementChild.getAttribute("srsName"))};function Vl(a){a=hl(a);return Wl(a)}function Wl(a){if(a=/^\s*(true|1)|(false|0)\s*$/.exec(a))return void 0!==a[1]||!1}function Xl(a){a=hl(a);a=Date.parse(a);return isNaN(a)?void 0:a/1E3}function W(a){a=hl(a);return Yl(a)}function Yl(a){if(a=/^\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)\s*$/i.exec(a))return parseFloat(a[1])}function Zl(a){a=hl(a);return $l(a)}function $l(a){if(a=/^\s*(\d+)\s*$/.exec(a))return parseInt(a[1],10)}function X(a){return hl(a).trim()}function am(a,b){Y(a,b?"1":"0")}
function bm(a,b){a.appendChild(gl.createTextNode(b.toPrecision()))}function cm(a,b){a.appendChild(gl.createTextNode(b.toString()))}function Y(a,b){a.appendChild(gl.createTextNode(b))};var dm=[null,"http://www.topografix.com/GPX/1/0","http://www.topografix.com/GPX/1/1"];function em(a,b,c,d){a.push(parseFloat(c.getAttribute("lon")),parseFloat(c.getAttribute("lat")));"ele"in d?(a.push(d.ele),delete d.ele,b.nc=!0):a.push(0);"time"in d?(a.push(d.time),delete d.time,b.mc=!0):a.push(0);return a}
function fm(a,b,c){var d="XY",e=2;a.nc&&a.mc?(d="XYZM",e=4):a.nc?(d="XYZ",e=3):a.mc&&(d="XYM",e=3);if(4!==e){var f,g;f=0;for(g=b.length/4;f<g;f++)b[f*e]=b[4*f],b[f*e+1]=b[4*f+1],a.nc&&(b[f*e+2]=b[4*f+2]),a.mc&&(b[f*e+2]=b[4*f+3]);b.length=b.length/4*e;if(c)for(f=0,g=c.length;f<g;f++)c[f]=c[f]/4*e}return d}function gm(a,b){var c=b[b.length-1],d=a.getAttribute("href");null!==d&&(c.link=d);sl(hm,a,b)}function im(a,b){b[b.length-1].extensionsNode_=a}
S(dm,{rte:kl(function(a,b){var c=b[0],d=T({flatCoordinates:[],layoutOptions:{}},jm,a,b);if(d){var e=d.flatCoordinates;delete d.flatCoordinates;var f=d.layoutOptions;delete d.layoutOptions;var f=fm(f,e),g=new V(null);g.U(f,e);zl(g,!1,c);c=new dl(g);Ia(c,d);return c}}),trk:kl(function(a,b){var c=b[0],d=T({flatCoordinates:[],ends:[],layoutOptions:{}},km,a,b);if(d){var e=d.flatCoordinates;delete d.flatCoordinates;var f=d.ends;delete d.ends;var g=d.layoutOptions;delete d.layoutOptions;var g=fm(g,e,f),
h=new El(null);h.U(g,e,f);zl(h,!1,c);c=new dl(h);Ia(c,d);return c}}),wpt:kl(function(a,b){var c=b[0],d=T({},lm,a,b);if(d){var e={},f=em([],e,a,d),e=fm(e,f),f=new qc(f,e);zl(f,!1,c);c=new dl(f);Ia(c,d);return c}})});
var hm=S(dm,{text:Q(X,"linkText"),type:Q(X,"linkType")}),jm=S(dm,{name:Q(X),cmt:Q(X),desc:Q(X),src:Q(X),link:gm,number:Q(Zl),extensions:im,type:Q(X),rtept:function(a,b){var c=T({},mm,a,b);if(c){var d=b[b.length-1];em(d.flatCoordinates,d.layoutOptions,a,c)}}}),mm=S(dm,{ele:Q(W),time:Q(Xl)}),km=S(dm,{name:Q(X),cmt:Q(X),desc:Q(X),src:Q(X),link:gm,number:Q(Zl),type:Q(X),extensions:im,trkseg:function(a,b){var c=b[b.length-1];sl(nm,a,b);c.ends.push(c.flatCoordinates.length)}}),nm=S(dm,{trkpt:function(a,
b){var c=T({},om,a,b);if(c){var d=b[b.length-1];em(d.flatCoordinates,d.layoutOptions,a,c)}}}),om=S(dm,{ele:Q(W),time:Q(Xl)}),lm=S(dm,{ele:Q(W),time:Q(Xl),magvar:Q(W),geoidheight:Q(W),name:Q(X),cmt:Q(X),desc:Q(X),src:Q(X),link:gm,sym:Q(X),type:Q(X),fix:Q(X),sat:Q(Zl),hdop:Q(W),vdop:Q(W),pdop:Q(W),ageofdgpsdata:Q(W),dgpsid:Q(Zl),extensions:im});function pm(a,b,c){a.setAttribute("href",b);b=c[c.length-1].properties;tl({node:a},qm,ql,[b.linkText,b.linkType],c,rm)}
function sm(a,b,c){var d=c[c.length-1],e=d.node.namespaceURI,f=d.properties;a.setAttributeNS(null,"lat",b[1]);a.setAttributeNS(null,"lon",b[0]);switch(d.geometryLayout){case "XYZM":0!==b[3]&&(f.time=b[3]);case "XYZ":0!==b[2]&&(f.ele=b[2]);break;case "XYM":0!==b[2]&&(f.time=b[2])}b="rtept"==a.nodeName?tm[e]:um[e];d=rl(f,b);tl({node:a,properties:f},vm,ql,d,c,b)}
var rm=["text","type"],qm=S(dm,{text:R(Y),type:R(Y)}),wm=S(dm,"name cmt desc src link number type rtept".split(" ")),xm=S(dm,{name:R(Y),cmt:R(Y),desc:R(Y),src:R(Y),link:R(pm),number:R(cm),type:R(Y),rtept:ml(R(sm))}),tm=S(dm,["ele","time"]),ym=S(dm,"name cmt desc src link number type trkseg".split(" ")),Bm=S(dm,{name:R(Y),cmt:R(Y),desc:R(Y),src:R(Y),link:R(pm),number:R(cm),type:R(Y),trkseg:ml(R(function(a,b,c){tl({node:a,geometryLayout:b.X,properties:{}},zm,Am,b.ua(),c)}))}),Am=nl("trkpt"),zm=S(dm,
{trkpt:R(sm)}),um=S(dm,"ele time magvar geoidheight name cmt desc src link sym type fix sat hdop vdop pdop ageofdgpsdata dgpsid".split(" ")),vm=S(dm,{ele:R(bm),time:R(function(a,b){var c=new Date(1E3*b);a.appendChild(gl.createTextNode(c.getUTCFullYear()+"-"+ab(c.getUTCMonth()+1)+"-"+ab(c.getUTCDate())+"T"+ab(c.getUTCHours())+":"+ab(c.getUTCMinutes())+":"+ab(c.getUTCSeconds())+"Z"))}),magvar:R(bm),geoidheight:R(bm),name:R(Y),cmt:R(Y),desc:R(Y),src:R(Y),link:R(pm),sym:R(Y),type:R(Y),fix:R(Y),sat:R(cm),
hdop:R(bm),vdop:R(bm),pdop:R(bm),ageofdgpsdata:R(bm),dgpsid:R(cm)});
S(dm,{rte:R(function(a,b,c){var d=c[0],e=na({},b.o);a={node:a,properties:e};if(b=b.T())b=zl(b,!0,d),a.geometryLayout=b.X,e.rtept=b.ua();d=wm[c[c.length-1].node.namespaceURI];e=rl(e,d);tl(a,xm,ql,e,c,d)}),trk:R(function(a,b,c){var d=c[0],e=na({},b.o);a={node:a,properties:e};if(b=b.T())b=zl(b,!0,d),e.trkseg=bj(b);d=ym[c[c.length-1].node.namespaceURI];e=rl(e,d);tl(a,Bm,ql,e,c,d)}),wpt:R(function(a,b,c){var d=c[0],e=c[c.length-1];e.properties=na({},b.o);if(b=b.T())b=zl(b,!0,d),e.geometryLayout=b.X,sm(a,
b.ua(),c)})});function Cm(a,b,c,d,e,f){Ea.call(this);this.o=null;this.a=a?a:new Image;null!==d&&(this.a.crossOrigin=d);this.f=f?document.createElement("CANVAS"):null;this.i=f;this.g=null;this.b=e;this.c=c;this.j=b;this.l=!1;2==this.b&&Dm(this)}z(Cm,Ea);function Dm(a){var b=xd(1,1);try{b.drawImage(a.a,0,0),b.getImageData(0,0,1,1)}catch(c){a.l=!0}}Cm.prototype.u=function(){this.b=3;this.g.forEach(D);this.g=null;H(this,"change")};
Cm.prototype.B=function(){this.b=2;this.c&&(this.a.width=this.c[0],this.a.height=this.c[1]);this.c=[this.a.width,this.a.height];this.g.forEach(D);this.g=null;Dm(this);if(!this.l&&null!==this.i){this.f.width=this.a.width;this.f.height=this.a.height;var a=this.f.getContext("2d");a.drawImage(this.a,0,0);for(var b=a.getImageData(0,0,this.a.width,this.a.height),c=b.data,d=this.i[0]/255,e=this.i[1]/255,f=this.i[2]/255,g=0,h=c.length;g<h;g+=4)c[g]*=d,c[g+1]*=e,c[g+2]*=f;a.putImageData(b,0,0)}H(this,"change")};
Cm.prototype.load=function(){if(0==this.b){this.b=1;this.g=[E(this.a,"error",this.u,this,!0),E(this.a,"load",this.B,this,!0)];try{this.a.src=this.j}catch(a){this.u()}}};function Em(a){a=a||{};this.f=void 0!==a.anchor?a.anchor:[.5,.5];this.i=null;this.c=void 0!==a.anchorOrigin?a.anchorOrigin:Fm;this.A=void 0!==a.anchorXUnits?a.anchorXUnits:Gm;this.C=void 0!==a.anchorYUnits?a.anchorYUnits:Gm;this.L=void 0!==a.crossOrigin?a.crossOrigin:null;var b=void 0!==a.img?a.img:null,c=void 0!==a.imgSize?a.imgSize:null,d=a.src;C(!(void 0!==d&&b),4);C(!b||b&&c,5);void 0!==d&&0!==d.length||!b||(d=b.src||A(b).toString());C(void 0!==d&&0<d.length,6);var e=void 0!==a.src?0:2;this.g=
void 0!==a.color?sd(a.color):null;var f=this.L,g=this.g,h=qg.get(d,f,g);h||(h=new Cm(b,d,c,f,e,g),qg.set(d,f,g,h));this.a=h;this.G=void 0!==a.offset?a.offset:[0,0];this.b=void 0!==a.offsetOrigin?a.offsetOrigin:Fm;this.l=null;this.D=void 0!==a.size?a.size:null;Mg.call(this,{opacity:void 0!==a.opacity?a.opacity:1,rotation:void 0!==a.rotation?a.rotation:0,scale:void 0!==a.scale?a.scale:1,snapToPixel:void 0!==a.snapToPixel?a.snapToPixel:!0,rotateWithView:void 0!==a.rotateWithView?a.rotateWithView:!1})}
z(Em,Mg);p=Em.prototype;
p.clone=function(){var a=this.rb(1),b;if(2===this.a.b)if("IMG"===a.tagName.toUpperCase())b=a.cloneNode(!0);else{b=document.createElement("canvas");var c=b.getContext("2d");b.width=a.width;b.height=a.height;c.drawImage(a,0,0)}return new Em({anchor:this.f.slice(),anchorOrigin:this.c,anchorXUnits:this.A,anchorYUnits:this.C,crossOrigin:this.L,color:this.g&&this.g.slice?this.g.slice():this.g||void 0,img:b?b:void 0,imgSize:b?this.a.c.slice():void 0,src:b?void 0:this.a.j,offset:this.G.slice(),offsetOrigin:this.b,
size:null!==this.D?this.D.slice():void 0,opacity:this.j,scale:this.o,snapToPixel:this.B,rotation:this.u,rotateWithView:this.F})};p.pb=function(){if(this.i)return this.i;var a=this.f,b=this.Ma();if(this.A==Gm||this.C==Gm){if(!b)return null;a=this.f.slice();this.A==Gm&&(a[0]*=b[0]);this.C==Gm&&(a[1]*=b[1])}if(this.c!=Fm){if(!b)return null;a===this.f&&(a=this.f.slice());if(this.c==Hm||this.c==Im)a[0]=-a[0]+b[0];if(this.c==Jm||this.c==Im)a[1]=-a[1]+b[1]}return this.i=a};
p.rb=function(){var a=this.a;return a.f?a.f:a.a};p.hc=function(){return this.a.c};p.Lb=function(){return this.a.b};p.pc=function(){var a=this.a;if(!a.o)if(a.l){var b=a.c[0],c=a.c[1],d=xd(b,c);d.fillRect(0,0,b,c);a.o=d.canvas}else a.o=a.a;return a.o};p.sb=function(){if(this.l)return this.l;var a=this.G;if(this.b!=Fm){var b=this.Ma(),c=this.a.c;if(!b||!c)return null;a=a.slice();if(this.b==Hm||this.b==Im)a[0]=c[0]-b[0]-a[0];if(this.b==Jm||this.b==Im)a[1]=c[1]-b[1]-a[1]}return this.l=a};
p.Ma=function(){return this.D?this.D:this.a.c};p.Yc=function(a,b){return E(this.a,"change",a,b)};p.load=function(){this.a.load()};p.sd=function(a,b){xa(this.a,"change",a,b)};var Gm="fraction",Jm="bottom-left",Im="bottom-right",Fm="top-left",Hm="top-right";function Km(a){a=a||{};this.f=a.font;this.j=a.rotation;this.o=a.rotateWithView;this.c=a.scale;this.D=a.text;this.l=a.textAlign;this.u=a.textBaseline;this.a=void 0!==a.fill?a.fill:new Pg({color:"#333"});this.b=void 0!==a.stroke?a.stroke:null;this.g=void 0!==a.offsetX?a.offsetX:0;this.i=void 0!==a.offsetY?a.offsetY:0}
Km.prototype.clone=function(){return new Km({font:this.f,rotation:this.j,rotateWithView:this.o,scale:this.c,text:this.ha(),textAlign:this.l,textBaseline:this.u,fill:this.a?this.a.clone():void 0,stroke:this.b?this.b.clone():void 0,offsetX:this.g,offsetY:this.i})};Km.prototype.ha=function(){return this.D};var Lm=["http://www.google.com/kml/ext/2.2"],Z=[null,"http://earth.google.com/kml/2.0","http://earth.google.com/kml/2.1","http://earth.google.com/kml/2.2","http://www.opengis.net/kml/2.2"],Mm={fraction:Gm,pixels:"pixels"};function Nm(a){a=hl(a);if(a=/^\s*#?\s*([0-9A-Fa-f]{8})\s*$/.exec(a))return a=a[1],[parseInt(a.substr(6,2),16),parseInt(a.substr(4,2),16),parseInt(a.substr(2,2),16),parseInt(a.substr(0,2),16)/255]}
function Om(a){a=hl(a);for(var b=[],c=/^\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)\s*,\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)(?:\s*,\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?))?\s*/i,d;d=c.exec(a);)b.push(parseFloat(d[1]),parseFloat(d[2]),d[3]?parseFloat(d[3]):0),a=a.substr(d[0].length);return""!==a?void 0:b}function Pm(a){var b=hl(a).trim();return a.baseURI?(new URL(b,a.baseURI)).href:b}function Qm(a){return W(a)}function Rm(a,b){return T(null,Sm,a,b)}
function Tm(a,b){var c=T({s:[],vd:[]},Um,a,b);if(c){var d=c.s,c=c.vd,e,f;e=0;for(f=Math.min(d.length,c.length);e<f;++e)d[4*e+3]=c[e];c=new V(null);c.U("XYZM",d);return c}}function Vm(a,b){var c=T({},Wm,a,b),d=T(null,Xm,a,b);if(d){var e=new V(null);e.U("XYZ",d);Ia(e,c);return e}}function Ym(a,b){var c=T({},Wm,a,b),d=T(null,Xm,a,b);if(d){var e=new xc(null);e.U("XYZ",d,[d.length]);Ia(e,c);return e}}
function Zm(a,b){var c=T([],$m,a,b);if(!c)return null;if(0===c.length)return new Jl(c);var d,e=!0,f=c[0].$(),g,h,k;h=1;for(k=c.length;h<k;++h)if(g=c[h],g.$()!=f){e=!1;break}if(e)if("Point"==f){d=c[0];e=d.X;f=d.s;h=1;for(k=c.length;h<k;++h)g=c[h],Pa(f,g.s);d=new Gl(null);d.U(e,f);an(d,c)}else if("LineString"==f)d=new El(null),Fl(d,c),an(d,c);else if("Polygon"==f){g=d=new Hl(null);h=g.X;k=[];var e=[],l,n,f=0;for(l=c.length;f<l;++f){var m=c[f];0===f&&(h=m.X);var q=k.length;n=m.Ta();var r,u;r=0;for(u=
n.length;r<u;++r)n[r]+=q;Pa(k,m.s);e.push(n)}Il(g,h,k,e);an(d,c)}else"GeometryCollection"==f?d=new Jl(c):C(!1,37);else d=new Jl(c);return d}function bn(a,b){var c=T({},Wm,a,b),d=T(null,Xm,a,b);if(d){var e=new qc(null);e.U("XYZ",d);Ia(e,c);return e}}function cn(a,b){var c=T({},Wm,a,b),d=T([null],dn,a,b);if(d&&d[0]){var e=new xc(null),f=d[0],g=[f.length],h,k;h=1;for(k=d.length;h<k;++h)Pa(f,d[h]),g.push(f.length);e.U("XYZ",f,g);Ia(e,c);return e}}
function en(a,b){var c=T({},fn,a,b);if(!c)return null;var d="fillStyle"in c?c.fillStyle:void 0,e=c.fill;void 0===e||e||(d=null);e="imageStyle"in c?c.imageStyle:void 0;void 0==e&&(e=void 0);var f="textStyle"in c?c.textStyle:void 0,g="strokeStyle"in c?c.strokeStyle:void 0,c=c.outline;void 0===c||c||(g=null);return[new Rg({fill:d,image:e,stroke:g,text:f,zIndex:void 0})]}
function an(a,b){var c=b.length,d=Array(b.length),e=Array(b.length),f,g,h,k;h=k=!1;for(g=0;g<c;++g)f=b[g],d[g]=f.get("extrude"),e[g]=f.get("altitudeMode"),h=h||void 0!==d[g],k=k||e[g];h&&a.set("extrude",d);k&&a.set("altitudeMode",e)}function gn(a,b){sl(hn,a,b)}function jn(a,b){sl(kn,a,b)}
var ln=S(Z,{displayName:Q(X),value:Q(X)}),hn=S(Z,{Data:function(a,b){var c=a.getAttribute("name");sl(ln,a,b);var d=b[b.length-1];null!==c?d[c]=d.value:null!==d.displayName&&(d[d.displayName]=d.value)},SchemaData:function(a,b){sl(mn,a,b)}}),kn=S(Z,{LatLonAltBox:function(a,b){var c=T({},nn,a,b);if(c){var d=b[b.length-1];d.extent=[parseFloat(c.west),parseFloat(c.south),parseFloat(c.east),parseFloat(c.north)];d.altitudeMode=c.altitudeMode;d.minAltitude=parseFloat(c.minAltitude);d.maxAltitude=parseFloat(c.maxAltitude)}},
Lod:function(a,b){var c=T({},on,a,b);if(c){var d=b[b.length-1];d.minLodPixels=parseFloat(c.minLodPixels);d.maxLodPixels=parseFloat(c.maxLodPixels);d.minFadeExtent=parseFloat(c.minFadeExtent);d.maxFadeExtent=parseFloat(c.maxFadeExtent)}}}),nn=S(Z,{altitudeMode:Q(X),minAltitude:Q(W),maxAltitude:Q(W),north:Q(W),south:Q(W),east:Q(W),west:Q(W)}),on=S(Z,{minLodPixels:Q(W),maxLodPixels:Q(W),minFadeExtent:Q(W),maxFadeExtent:Q(W)}),Wm=S(Z,{extrude:Q(Vl),altitudeMode:Q(X)}),Sm=S(Z,{coordinates:ll(Om)}),dn=
S(Z,{innerBoundaryIs:function(a,b){var c=T(void 0,pn,a,b);c&&b[b.length-1].push(c)},outerBoundaryIs:function(a,b){var c=T(void 0,qn,a,b);c&&(b[b.length-1][0]=c)}}),Um=S(Z,{when:function(a,b){var c=b[b.length-1].vd,d=hl(a),d=Date.parse(d);c.push(isNaN(d)?0:d)}},S(Lm,{coord:function(a,b){var c=b[b.length-1].s,d=hl(a);(d=/^\s*([+\-]?\d+(?:\.\d*)?(?:e[+\-]?\d*)?)\s+([+\-]?\d+(?:\.\d*)?(?:e[+\-]?\d*)?)\s+([+\-]?\d+(?:\.\d*)?(?:e[+\-]?\d*)?)\s*$/i.exec(d))?c.push(parseFloat(d[1]),parseFloat(d[2]),parseFloat(d[3]),
0):c.push(0,0,0,0)}})),Xm=S(Z,{coordinates:ll(Om)}),rn=S(Z,{href:Q(Pm)},S(Lm,{x:Q(W),y:Q(W),w:Q(W),h:Q(W)})),sn=S(Z,{Icon:Q(function(a,b){var c=T({},rn,a,b);return c?c:null}),heading:Q(W),hotSpot:Q(function(a){var b=a.getAttribute("xunits"),c=a.getAttribute("yunits");return{x:parseFloat(a.getAttribute("x")),yc:Mm[b],y:parseFloat(a.getAttribute("y")),zc:Mm[c]}}),scale:Q(Qm)}),pn=S(Z,{LinearRing:ll(Rm)}),tn=S(Z,{color:Q(Nm),scale:Q(Qm)}),un=S(Z,{color:Q(Nm),width:Q(W)}),$m=S(Z,{LineString:kl(Vm),LinearRing:kl(Ym),
MultiGeometry:kl(Zm),Point:kl(bn),Polygon:kl(cn)}),vn=S(Lm,{Track:kl(Tm)});S(Z,{ExtendedData:gn,Region:jn,Link:function(a,b){sl(wn,a,b)},address:Q(X),description:Q(X),name:Q(X),open:Q(Vl),phoneNumber:Q(X),visibility:Q(Vl)});var wn=S(Z,{href:Q(Pm)}),qn=S(Z,{LinearRing:ll(Rm)}),xn=S(Z,{Style:Q(en),key:Q(X),styleUrl:Q(Pm)});
S(Z,{ExtendedData:gn,Region:jn,MultiGeometry:Q(Zm,"geometry"),LineString:Q(Vm,"geometry"),LinearRing:Q(Ym,"geometry"),Point:Q(bn,"geometry"),Polygon:Q(cn,"geometry"),Style:Q(en),StyleMap:function(a,b){var c=T(void 0,yn,a,b);if(c){var d=b[b.length-1];Array.isArray(c)?d.Style=c:"string"===typeof c?d.styleUrl=c:C(!1,38)}},address:Q(X),description:Q(X),name:Q(X),open:Q(Vl),phoneNumber:Q(X),styleUrl:Q(Pm),visibility:Q(Vl)},S(Lm,{MultiTrack:Q(function(a,b){var c=T([],vn,a,b);if(c){var d=new El(null);Fl(d,
c);return d}},"geometry"),Track:Q(Tm,"geometry")}));
var zn=S(Z,{color:Q(Nm),fill:Q(Vl),outline:Q(Vl)}),mn=S(Z,{SimpleData:function(a,b){var c=a.getAttribute("name");if(null!==c){var d=X(a);b[b.length-1][c]=d}}}),fn=S(Z,{IconStyle:function(a,b){var c=T({},sn,a,b);if(c){var d=b[b.length-1],e="Icon"in c?c.Icon:{},f=!("Icon"in c)||0<Object.keys(e).length,g,h=e.href;h?g=h:f&&(g=void 0);var k,l,n;(h=c.hotSpot)?(k=[h.x,h.y],l=h.yc,n=h.zc):void 0===g?n=l=k=void 0:/^http:\/\/maps\.(?:google|gstatic)\.com\//.test(g)&&(k=[.5,0],n=l=Gm);var m,h=e.x,q=e.y;void 0!==
h&&void 0!==q&&(m=[h,q]);var r,h=e.w,e=e.h;void 0!==h&&void 0!==e&&(r=[h,e]);var u,e=c.heading;void 0!==e&&(u=e*Math.PI/180);c=c.scale;f?(void 0==g&&(r=void 0,void 0===c&&(c=void 0)),f=new Em({anchor:k,anchorOrigin:Jm,anchorXUnits:l,anchorYUnits:n,crossOrigin:"anonymous",offset:m,offsetOrigin:Jm,rotation:u,scale:c,size:r,src:g}),d.imageStyle=f):d.imageStyle=void 0}},LabelStyle:function(a,b){var c=T({},tn,a,b);c&&(b[b.length-1].textStyle=new Km({fill:new Pg({color:"color"in c?c.color:void 0}),scale:c.scale}))},
LineStyle:function(a,b){var c=T({},un,a,b);c&&(b[b.length-1].strokeStyle=new Qg({color:"color"in c?c.color:void 0,width:"width"in c?c.width:1}))},PolyStyle:function(a,b){var c=T({},zn,a,b);if(c){var d=b[b.length-1];d.fillStyle=new Pg({color:"color"in c?c.color:void 0});var e=c.fill;void 0!==e&&(d.fill=e);c=c.outline;void 0!==c&&(d.outline=c)}}}),yn=S(Z,{Pair:function(a,b){var c=T({},xn,a,b);if(c){var d=c.key;d&&"normal"==d&&((d=c.styleUrl)&&(b[b.length-1]=d),(c=c.Style)&&(b[b.length-1]=c))}}});
function An(a,b){var c=sd(b),c=[255*(4==c.length?c[3]:1),c[2],c[1],c[0]],d;for(d=0;4>d;++d){var e=parseInt(c[d],10).toString(16);c[d]=1==e.length?"0"+e:e}Y(a,c.join(""))}function Bn(a,b,c){a={node:a};var d=b.$(),e,f;if("GeometryCollection"==d)e=Ll(b.b),f=Cn;else if("MultiPoint"==d){e=b.s;f=b.X;b=b.a;var d=[],g,h;g=0;for(h=e.length;g<h;g+=b){var k=new qc(null);k.U(f,e.slice(g,g+b));d.push(k)}e=d;f=Dn}else"MultiLineString"==d?(e=bj(b),f=En):"MultiPolygon"==d?(e=Rj(b),f=Fn):C(!1,39);tl(a,Gn,f,e,c)}
function Hn(a,b,c){tl({node:a},In,Jn,[b],c)}
function Kn(a,b,c){var d={node:a};b.a&&a.setAttribute("id",b.a);a=na({},b.o);var e={address:1,description:1,name:1,open:1,phoneNumber:1,styleUrl:1,visibility:1};e[b.b]=1;var f=Object.keys(a||{}).sort().filter(function(a){return!e[a]});if(0<f.length){var g=rl(a,f);tl(d,Ln,Mn,[{names:f,values:g}],c)}if(f=b.g)if(f=f.call(b,0))f=Array.isArray(f)?f[0]:f,this.a&&(a.Style=f),(f=f.ha())&&(a.name=f.ha());f=Nn[c[c.length-1].node.namespaceURI];a=rl(a,f);tl(d,Ln,ql,a,c,f);a=c[0];(b=b.T())&&(b=zl(b,!0,a));tl(d,
Ln,Cn,[b],c)}function On(a,b,c){var d=b.s;a={node:a};a.layout=b.X;a.stride=b.a;tl(a,Pn,Qn,[d],c)}function Rn(a,b,c){b=Ac(b);var d=b.shift();a={node:a};tl(a,Sn,Tn,b,c);tl(a,Sn,Un,[d],c)}function Vn(a,b){bm(a,Math.round(1E6*b)/1E6)}S(Z,["Document","Placemark"]);S(Z,{Document:R(function(a,b,c){tl({node:a},Wn,Xn,b,c,void 0,this)}),Placemark:R(Kn)});
var Wn=S(Z,{Placemark:R(Kn)}),Yn=S(Z,{Data:R(function(a,b,c){a.setAttribute("name",b.name);a={node:a};b=b.value;"object"==typeof b?(null!==b&&b.displayName&&tl(a,Yn,ql,[b.displayName],c,["displayName"]),null!==b&&b.value&&tl(a,Yn,ql,[b.value],c,["value"])):tl(a,Yn,ql,[b],c,["value"])}),value:R(function(a,b){Y(a,b)}),displayName:R(function(a,b){a.appendChild(gl.createCDATASection(b))})}),Zn={Point:"Point",LineString:"LineString",LinearRing:"LinearRing",Polygon:"Polygon",MultiPoint:"MultiGeometry",
MultiLineString:"MultiGeometry",MultiPolygon:"MultiGeometry",GeometryCollection:"MultiGeometry"},$n=S(Z,["href"],S(Lm,["x","y","w","h"])),ao=S(Z,{href:R(Y)},S(Lm,{x:R(bm),y:R(bm),w:R(bm),h:R(bm)})),bo=S(Z,["scale","heading","Icon","hotSpot"]),eo=S(Z,{Icon:R(function(a,b,c){a={node:a};var d=$n[c[c.length-1].node.namespaceURI],e=rl(b,d);tl(a,ao,ql,e,c,d);d=$n[Lm[0]];e=rl(b,d);tl(a,ao,co,e,c,d)}),heading:R(bm),hotSpot:R(function(a,b){a.setAttribute("x",b.x);a.setAttribute("y",b.y);a.setAttribute("xunits",
b.yc);a.setAttribute("yunits",b.zc)}),scale:R(Vn)}),fo=S(Z,["color","scale"]),go=S(Z,{color:R(An),scale:R(Vn)}),ho=S(Z,["color","width"]),io=S(Z,{color:R(An),width:R(bm)}),In=S(Z,{LinearRing:R(On)}),Gn=S(Z,{LineString:R(On),Point:R(On),Polygon:R(Rn),GeometryCollection:R(Bn)}),Nn=S(Z,"name open visibility address phoneNumber description styleUrl Style".split(" ")),Ln=S(Z,{ExtendedData:R(function(a,b,c){a={node:a};var d=b.names;b=b.values;for(var e=d.length,f=0;f<e;f++)tl(a,Yn,jo,[{name:d[f],value:b[f]}],
c)}),MultiGeometry:R(Bn),LineString:R(On),LinearRing:R(On),Point:R(On),Polygon:R(Rn),Style:R(function(a,b,c){a={node:a};var d={},e=b.b,f=b.c,g=b.f;b=b.ha();g instanceof Em&&(d.IconStyle=g);b&&(d.LabelStyle=b);f&&(d.LineStyle=f);e&&(d.PolyStyle=e);b=ko[c[c.length-1].node.namespaceURI];d=rl(d,b);tl(a,lo,ql,d,c,b)}),address:R(Y),description:R(Y),name:R(Y),open:R(am),phoneNumber:R(Y),styleUrl:R(Y),visibility:R(am)}),Pn=S(Z,{coordinates:R(function(a,b,c){c=c[c.length-1];var d=c.layout;c=c.stride;var e;
"XY"==d||"XYM"==d?e=2:"XYZ"==d||"XYZM"==d?e=3:C(!1,34);var f,g=b.length,h="";if(0<g){h+=b[0];for(d=1;d<e;++d)h+=","+b[d];for(f=c;f<g;f+=c)for(h+=" "+b[f],d=1;d<e;++d)h+=","+b[f+d]}Y(a,h)})}),Sn=S(Z,{outerBoundaryIs:R(Hn),innerBoundaryIs:R(Hn)}),mo=S(Z,{color:R(An)}),ko=S(Z,["IconStyle","LabelStyle","LineStyle","PolyStyle"]),lo=S(Z,{IconStyle:R(function(a,b,c){a={node:a};var d={},e=b.Ma(),f=b.hc(),g={href:b.a.j};if(e){g.w=e[0];g.h=e[1];var h=b.pb(),k=b.sb();k&&f&&0!==k[0]&&k[1]!==e[1]&&(g.x=k[0],g.y=
f[1]-(k[1]+e[1]));h&&0!==h[0]&&h[1]!==e[1]&&(d.hotSpot={x:h[0],yc:"pixels",y:e[1]-h[1],zc:"pixels"})}d.Icon=g;e=b.o;1!==e&&(d.scale=e);b=b.u;0!==b&&(d.heading=b);b=bo[c[c.length-1].node.namespaceURI];d=rl(d,b);tl(a,eo,ql,d,c,b)}),LabelStyle:R(function(a,b,c){a={node:a};var d={},e=b.a;e&&(d.color=e.a);(b=b.c)&&1!==b&&(d.scale=b);b=fo[c[c.length-1].node.namespaceURI];d=rl(d,b);tl(a,go,ql,d,c,b)}),LineStyle:R(function(a,b,c){a={node:a};var d=ho[c[c.length-1].node.namespaceURI];b=rl({color:b.a,width:b.b},
d);tl(a,io,ql,b,c,d)}),PolyStyle:R(function(a,b,c){tl({node:a},mo,no,[b.a],c)})});function co(a,b,c){return gl.createElementNS(Lm[0],"gx:"+c)}function Xn(a,b){return gl.createElementNS(b[b.length-1].node.namespaceURI,"Placemark")}function Cn(a,b){if(a)return gl.createElementNS(b[b.length-1].node.namespaceURI,Zn[a.$()])}var no=nl("color"),Qn=nl("coordinates"),jo=nl("Data"),Mn=nl("ExtendedData"),Tn=nl("innerBoundaryIs"),Dn=nl("Point"),En=nl("LineString"),Jn=nl("LinearRing"),Fn=nl("Polygon"),Un=nl("outerBoundaryIs");(function(){var a={},b={S:a};(function(c){if("object"===typeof a&&"undefined"!==typeof b)b.S=c();else{var d;"undefined"!==typeof window?d=window:"undefined"!==typeof global?d=global:"undefined"!==typeof self?d=self:d=this;d.Gf=c()}})(function(){return function d(a,b,g){function h(l,m){if(!b[l]){if(!a[l]){var q="function"==typeof require&&require;if(!m&&q)return q(l,!0);if(k)return k(l,!0);q=Error("Cannot find module '"+l+"'");throw q.code="MODULE_NOT_FOUND",q;}q=b[l]={S:{}};a[l][0].call(q.S,function(b){var d=
a[l][1][b];return h(d?d:b)},q,q.S,d,a,b,g)}return b[l].S}for(var k="function"==typeof require&&require,l=0;l<g.length;l++)h(g[l]);return h}({1:[function(a,b,f){f.read=function(a,b,d,e,f){var m;m=8*f-e-1;var q=(1<<m)-1,r=q>>1,u=-7;f=d?f-1:0;var v=d?-1:1,w=a[b+f];f+=v;d=w&(1<<-u)-1;w>>=-u;for(u+=m;0<u;d=256*d+a[b+f],f+=v,u-=8);m=d&(1<<-u)-1;d>>=-u;for(u+=e;0<u;m=256*m+a[b+f],f+=v,u-=8);if(0===d)d=1-r;else{if(d===q)return m?NaN:Infinity*(w?-1:1);m+=Math.pow(2,e);d-=r}return(w?-1:1)*m*Math.pow(2,d-e)};
f.write=function(a,b,d,e,f,m){var q,r=8*m-f-1,u=(1<<r)-1,v=u>>1,w=23===f?Math.pow(2,-24)-Math.pow(2,-77):0;m=e?0:m-1;var B=e?1:-1,y=0>b||0===b&&0>1/b?1:0;b=Math.abs(b);isNaN(b)||Infinity===b?(b=isNaN(b)?1:0,e=u):(e=Math.floor(Math.log(b)/Math.LN2),1>b*(q=Math.pow(2,-e))&&(e--,q*=2),b=1<=e+v?b+w/q:b+w*Math.pow(2,1-v),2<=b*q&&(e++,q/=2),e+v>=u?(b=0,e=u):1<=e+v?(b=(b*q-1)*Math.pow(2,f),e+=v):(b=b*Math.pow(2,v-1)*Math.pow(2,f),e=0));for(;8<=f;a[d+m]=b&255,m+=B,b/=256,f-=8);e=e<<f|b;for(r+=f;0<r;a[d+m]=
e&255,m+=B,e/=256,r-=8);a[d+m-B]|=128*y}},{}],2:[function(a,b){function f(a){this.Fa=ArrayBuffer.isView&&ArrayBuffer.isView(a)?a:new Uint8Array(a||0);this.type=this.O=0;this.length=this.Fa.length}function g(a,b,d){var e=d.Fa,f,g;g=e[d.O++];f=(g&112)>>4;if(128>g)return h(a,f,b);g=e[d.O++];f|=(g&127)<<3;if(128>g)return h(a,f,b);g=e[d.O++];f|=(g&127)<<10;if(128>g)return h(a,f,b);g=e[d.O++];f|=(g&127)<<17;if(128>g)return h(a,f,b);g=e[d.O++];f|=(g&127)<<24;if(128>g)return h(a,f,b);g=e[d.O++];if(128>g)return h(a,
f|(g&1)<<31,b);throw Error("Expected varint not more than 10 bytes");}function h(a,b,d){return d?4294967296*b+(a>>>0):4294967296*(b>>>0)+(a>>>0)}b.S=f;var k=a("ieee754");f.f=0;f.b=1;f.a=2;f.c=5;f.prototype={qc:function(a,b,d){for(d=d||this.length;this.O<d;){var e=this.da(),f=e>>3,g=this.O;this.type=e&7;a(f,b,this);this.O===g&&this.gf(e)}return b},Ye:function(){var a=k.read(this.Fa,this.O,!0,23,4);this.O+=4;return a},Xe:function(){var a=k.read(this.Fa,this.O,!0,52,8);this.O+=8;return a},da:function(a){var b=
this.Fa,d,e;e=b[this.O++];d=e&127;if(128>e)return d;e=b[this.O++];d|=(e&127)<<7;if(128>e)return d;e=b[this.O++];d|=(e&127)<<14;if(128>e)return d;e=b[this.O++];d|=(e&127)<<21;if(128>e)return d;e=b[this.O];return g(d|(e&15)<<28,a,this)},Ze:function(){return this.da(!0)},rc:function(){var a=this.da();return 1===a%2?(a+1)/-2:a/2},We:function(){return!!this.da()},sc:function(){for(var a=this.da()+this.O,b=this.Fa,d="",e=this.O;e<a;){var f=b[e],g=null,h=239<f?4:223<f?3:191<f?2:1;if(e+h>a)break;var k,B,
y;if(1===h)128>f&&(g=f);else if(2===h)k=b[e+1],128===(k&192)&&(g=(f&31)<<6|k&63,127>=g&&(g=null));else if(3===h){if(k=b[e+1],B=b[e+2],128===(k&192)&&128===(B&192)&&(g=(f&15)<<12|(k&63)<<6|B&63,2047>=g||55296<=g&&57343>=g))g=null}else 4===h&&(k=b[e+1],B=b[e+2],y=b[e+3],128===(k&192)&&128===(B&192)&&128===(y&192)&&(g=(f&15)<<18|(k&63)<<12|(B&63)<<6|y&63,65535>=g||1114112<=g))&&(g=null);null===g?(g=65533,h=1):65535<g&&(g-=65536,d+=String.fromCharCode(g>>>10&1023|55296),g=56320|g&1023);d+=String.fromCharCode(g);
e+=h}this.O=a;return d},gf:function(a){a&=7;if(a===f.f)for(;127<this.Fa[this.O++];);else if(a===f.a)this.O=this.da()+this.O;else if(a===f.c)this.O+=4;else if(a===f.b)this.O+=8;else throw Error("Unimplemented type: "+a);}}},{ieee754:1}]},{},[2])(2)})})();(function(){var a={},b={S:a};(function(c){if("object"===typeof a&&"undefined"!==typeof b)b.S=c();else{var d;"undefined"!==typeof window?d=window:"undefined"!==typeof global?d=global:"undefined"!==typeof self?d=self:d=this;d.Kf=c()}})(function(){return function d(a,b,g){function h(l,m){if(!b[l]){if(!a[l]){var q="function"==typeof require&&require;if(!m&&q)return q(l,!0);if(k)return k(l,!0);q=Error("Cannot find module '"+l+"'");throw q.code="MODULE_NOT_FOUND",q;}q=b[l]={S:{}};a[l][0].call(q.S,function(b){var d=
a[l][1][b];return h(d?d:b)},q,q.S,d,a,b,g)}return b[l].S}for(var k="function"==typeof require&&require,l=0;l<g.length;l++)h(g[l]);return h}({1:[function(a,b){function f(a,b){this.x=a;this.y=b}b.S=f;f.prototype={clone:function(){return new f(this.x,this.y)},add:function(a){return this.clone().wd(a)},rotate:function(a){return this.clone().Fd(a)},round:function(){return this.clone().Gd()},angle:function(){return Math.atan2(this.y,this.x)},wd:function(a){this.x+=a.x;this.y+=a.y;return this},Fd:function(a){var b=
Math.cos(a);a=Math.sin(a);var d=a*this.x+b*this.y;this.x=b*this.x-a*this.y;this.y=d;return this},Gd:function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this}};f.a=function(a){return a instanceof f?a:Array.isArray(a)?new f(a[0],a[1]):a}},{}],2:[function(a,b){b.S.Bf=a("./lib/vectortile.js");b.S.Cf=a("./lib/vectortilefeature.js");b.S.Df=a("./lib/vectortilelayer.js")},{"./lib/vectortile.js":3,"./lib/vectortilefeature.js":4,"./lib/vectortilelayer.js":5}],3:[function(a,b){function f(a,
b,d){3===a&&(a=new g(d,d.da()+d.O),a.length&&(b[a.name]=a))}var g=a("./vectortilelayer");b.S=function(a,b){this.layers=a.qc(f,{},b)}},{"./vectortilelayer":5}],4:[function(a,b){function f(a,b,d,e,f){this.properties={};this.extent=d;this.type=0;this.Qa=a;this.Dc=-1;this.vb=e;this.xb=f;a.qc(g,this,b)}function g(a,b,d){if(1==a)b.id=d.da();else if(2==a)for(a=d.da()+d.O;d.O<a;){var e=b.vb[d.da()],f=b.xb[d.da()];b.properties[e]=f}else 3==a?b.type=d.da():4==a&&(b.Dc=d.O)}a("point-geometry");b.S=f;f.a=["Unknown",
"Point","LineString","Polygon"];f.prototype.bbox=function(){var a=this.Qa;a.O=this.Dc;for(var b=a.da()+a.O,d=1,e=0,f=0,g=0,r=Infinity,u=-Infinity,v=Infinity,w=-Infinity;a.O<b;)if(e||(e=a.da(),d=e&7,e>>=3),e--,1===d||2===d)f+=a.rc(),g+=a.rc(),f<r&&(r=f),f>u&&(u=f),g<v&&(v=g),g>w&&(w=g);else if(7!==d)throw Error("unknown command "+d);return[r,v,u,w]}},{"point-geometry":1}],5:[function(a,b){function f(a,b){this.version=1;this.name=null;this.extent=4096;this.length=0;this.Qa=a;this.vb=[];this.xb=[];this.ub=
[];a.qc(g,this,b);this.length=this.ub.length}function g(a,b,d){15===a?b.version=d.da():1===a?b.name=d.sc():5===a?b.extent=d.da():2===a?b.ub.push(d.O):3===a?b.vb.push(d.sc()):4===a&&b.xb.push(h(d))}function h(a){for(var b=null,d=a.da()+a.O;a.O<d;)b=a.da()>>3,b=1===b?a.sc():2===b?a.Ye():3===b?a.Xe():4===b?a.Ze():5===b?a.da():6===b?a.rc():7===b?a.We():null;return b}var k=a("./vectortilefeature.js");b.S=f;f.prototype.feature=function(a){if(0>a||a>=this.ub.length)throw Error("feature index out of bounds");
this.Qa.O=this.ub[a];a=this.Qa.da()+this.Qa.O;return new k(this.Qa,a,this.extent,this.vb,this.xb)}},{"./vectortilefeature.js":4}]},{},[2])(2)})})();function oo(a,b){b[b.length-1].tb[a.getAttribute("k")]=a.getAttribute("v")}var po=[null],qo=S(po,{nd:function(a,b){b[b.length-1].Xa.push(a.getAttribute("ref"))},tag:oo});
S(po,{node:function(a,b){var c=b[0],d=b[b.length-1],e=a.getAttribute("id"),f=[parseFloat(a.getAttribute("lon")),parseFloat(a.getAttribute("lat"))];d.Ce[e]=f;var g=T({tb:{}},ro,a,b);qa(g.tb)||(f=new qc(f),zl(f,!1,c),c=new dl(f),c.a=e,c.v(),Ia(c,g.tb),d.features.push(c))},way:function(a,b){for(var c=b[0],d=a.getAttribute("id"),e=T({Xa:[],tb:{}},qo,a,b),f=b[b.length-1],g=[],h=0,k=e.Xa.length;h<k;h++)Pa(g,f.Ce[e.Xa[h]]);e.Xa[0]==e.Xa[e.Xa.length-1]?(h=new xc(null),h.U("XY",g,[g.length])):(h=new V(null),
h.U("XY",g));zl(h,!1,c);c=new dl(h);c.a=d;c.v();Ia(c,e.tb);f.features.push(c)}});var ro=S(po,{tag:oo});function so(a){return a.getAttributeNS("http://www.w3.org/1999/xlink","href")};var to=[null,"http://www.opengis.net/ows/1.1"];S(to,{ServiceIdentification:Q(function(a,b){return T({},uo,a,b)}),ServiceProvider:Q(function(a,b){return T({},vo,a,b)}),OperationsMetadata:Q(function(a,b){return T({},wo,a,b)})});
var xo=S(to,{DeliveryPoint:Q(X),City:Q(X),AdministrativeArea:Q(X),PostalCode:Q(X),Country:Q(X),ElectronicMailAddress:Q(X)}),yo=S(to,{Value:O(function(a){return X(a)})}),zo=S(to,{AllowedValues:Q(function(a,b){return T({},yo,a,b)})}),Bo=S(to,{Phone:Q(function(a,b){return T({},Ao,a,b)}),Address:Q(function(a,b){return T({},xo,a,b)})}),Do=S(to,{HTTP:Q(function(a,b){return T({},Co,a,b)})}),Co=S(to,{Get:O(function(a,b){var c=so(a);return c?T({href:c},Eo,a,b):void 0}),Post:void 0}),Fo=S(to,{DCP:Q(function(a,
b){return T({},Do,a,b)})}),wo=S(to,{Operation:function(a,b){var c=a.getAttribute("name"),d=T({},Fo,a,b);d&&(b[b.length-1][c]=d)}}),Ao=S(to,{Voice:Q(X),Facsimile:Q(X)}),Eo=S(to,{Constraint:O(function(a,b){var c=a.getAttribute("name");return c?T({name:c},zo,a,b):void 0})}),Go=S(to,{IndividualName:Q(X),PositionName:Q(X),ContactInfo:Q(function(a,b){return T({},Bo,a,b)})}),uo=S(to,{Title:Q(X),ServiceTypeVersion:Q(X),ServiceType:Q(X)}),vo=S(to,{ProviderName:Q(X),ProviderSite:Q(so),ServiceContact:Q(function(a,
b){return T({},Go,a,b)})});Q(Tl.prototype.o,"bounds");var Ho={"http://www.opengis.net/wfs":{totalInserted:Q(Zl),totalUpdated:Q(Zl),totalDeleted:Q(Zl)}},Io={"http://www.opengis.net/ogc":{FeatureId:kl(function(a){return a.getAttribute("fid")})}},Jo={"http://www.opengis.net/wfs":{Feature:function(a,b){sl(Io,a,b)}}};Q(function(a,b){return T({},Ho,a,b)},"transactionSummary");Q(function(a,b){return T([],Jo,a,b)},"insertIds");function Ko(a,b){return T({},Lo,a,b)}function Mo(a,b){return T({},No,a,b)}function Oo(a,b){var c=Ko(a,b);if(c){var d=[$l(a.getAttribute("width")),$l(a.getAttribute("height"))];c.size=d;return c}}function Po(a,b){return T([],Qo,a,b)}var Ro=[null,"http://www.opengis.net/wms"];S(Ro,{Service:Q(function(a,b){return T({},So,a,b)}),Capability:Q(function(a,b){return T({},To,a,b)})});
var To=S(Ro,{Request:Q(function(a,b){return T({},Uo,a,b)}),Exception:Q(function(a,b){return T([],Vo,a,b)}),Layer:Q(function(a,b){return T({},Wo,a,b)})}),So=S(Ro,{Name:Q(X),Title:Q(X),Abstract:Q(X),KeywordList:Q(Po),OnlineResource:Q(so),ContactInformation:Q(function(a,b){return T({},Xo,a,b)}),Fees:Q(X),AccessConstraints:Q(X),LayerLimit:Q(Zl),MaxWidth:Q(Zl),MaxHeight:Q(Zl)}),Xo=S(Ro,{ContactPersonPrimary:Q(function(a,b){return T({},Yo,a,b)}),ContactPosition:Q(X),ContactAddress:Q(function(a,b){return T({},
Zo,a,b)}),ContactVoiceTelephone:Q(X),ContactFacsimileTelephone:Q(X),ContactElectronicMailAddress:Q(X)}),Yo=S(Ro,{ContactPerson:Q(X),ContactOrganization:Q(X)}),Zo=S(Ro,{AddressType:Q(X),Address:Q(X),City:Q(X),StateOrProvince:Q(X),PostCode:Q(X),Country:Q(X)}),Vo=S(Ro,{Format:kl(X)}),Wo=S(Ro,{Name:Q(X),Title:Q(X),Abstract:Q(X),KeywordList:Q(Po),CRS:O(X),EX_GeographicBoundingBox:Q(function(a,b){var c=T({},$o,a,b);if(c){var d=c.westBoundLongitude,e=c.southBoundLatitude,f=c.eastBoundLongitude,c=c.northBoundLatitude;
return void 0===d||void 0===e||void 0===f||void 0===c?void 0:[d,e,f,c]}}),BoundingBox:O(function(a){var b=[Yl(a.getAttribute("minx")),Yl(a.getAttribute("miny")),Yl(a.getAttribute("maxx")),Yl(a.getAttribute("maxy"))],c=[Yl(a.getAttribute("resx")),Yl(a.getAttribute("resy"))];return{crs:a.getAttribute("CRS"),extent:b,res:c}}),Dimension:O(function(a){return{name:a.getAttribute("name"),units:a.getAttribute("units"),unitSymbol:a.getAttribute("unitSymbol"),"default":a.getAttribute("default"),multipleValues:Wl(a.getAttribute("multipleValues")),
nearestValue:Wl(a.getAttribute("nearestValue")),current:Wl(a.getAttribute("current")),values:X(a)}}),Attribution:Q(function(a,b){return T({},ap,a,b)}),AuthorityURL:O(function(a,b){var c=Ko(a,b);if(c)return c.name=a.getAttribute("name"),c}),Identifier:O(X),MetadataURL:O(function(a,b){var c=Ko(a,b);if(c)return c.type=a.getAttribute("type"),c}),DataURL:O(Ko),FeatureListURL:O(Ko),Style:O(function(a,b){return T({},bp,a,b)}),MinScaleDenominator:Q(W),MaxScaleDenominator:Q(W),Layer:O(function(a,b){var c=
b[b.length-1],d=T({},Wo,a,b);if(d){var e=Wl(a.getAttribute("queryable"));void 0===e&&(e=c.queryable);d.queryable=void 0!==e?e:!1;e=$l(a.getAttribute("cascaded"));void 0===e&&(e=c.cascaded);d.cascaded=e;e=Wl(a.getAttribute("opaque"));void 0===e&&(e=c.opaque);d.opaque=void 0!==e?e:!1;e=Wl(a.getAttribute("noSubsets"));void 0===e&&(e=c.noSubsets);d.noSubsets=void 0!==e?e:!1;(e=Yl(a.getAttribute("fixedWidth")))||(e=c.fixedWidth);d.fixedWidth=e;(e=Yl(a.getAttribute("fixedHeight")))||(e=c.fixedHeight);d.fixedHeight=
e;["Style","CRS","AuthorityURL"].forEach(function(a){a in c&&(d[a]=(d[a]||[]).concat(c[a]))});"EX_GeographicBoundingBox BoundingBox Dimension Attribution MinScaleDenominator MaxScaleDenominator".split(" ").forEach(function(a){a in d||(d[a]=c[a])});return d}})}),ap=S(Ro,{Title:Q(X),OnlineResource:Q(so),LogoURL:Q(Oo)}),$o=S(Ro,{westBoundLongitude:Q(W),eastBoundLongitude:Q(W),southBoundLatitude:Q(W),northBoundLatitude:Q(W)}),Uo=S(Ro,{GetCapabilities:Q(Mo),GetMap:Q(Mo),GetFeatureInfo:Q(Mo)}),No=S(Ro,
{Format:O(X),DCPType:O(function(a,b){return T({},cp,a,b)})}),cp=S(Ro,{HTTP:Q(function(a,b){return T({},dp,a,b)})}),dp=S(Ro,{Get:Q(Ko),Post:Q(Ko)}),bp=S(Ro,{Name:Q(X),Title:Q(X),Abstract:Q(X),LegendURL:O(Oo),StyleSheetURL:Q(Ko),StyleURL:Q(Ko)}),Lo=S(Ro,{Format:Q(X),OnlineResource:Q(so)}),Qo=S(Ro,{Keyword:kl(X)});function ep(a){var b=X(a).split(" ");if(b&&2==b.length)return a=+b[0],b=+b[1],isNaN(a)||isNaN(b)?void 0:[a,b]}var fp=[null,"http://www.opengis.net/wmts/1.0"],gp=[null,"http://www.opengis.net/ows/1.1"];S(fp,{Contents:Q(function(a,b){return T({},hp,a,b)})});
var hp=S(fp,{Layer:O(function(a,b){return T({},ip,a,b)}),TileMatrixSet:O(function(a,b){return T({},jp,a,b)})}),ip=S(fp,{Style:O(function(a,b){var c=T({},kp,a,b);if(c){var d="true"===a.getAttribute("isDefault");c.isDefault=d;return c}}),Format:O(X),TileMatrixSetLink:O(function(a,b){return T({},lp,a,b)}),Dimension:O(function(a,b){return T({},mp,a,b)}),ResourceURL:O(function(a){var b=a.getAttribute("format"),c=a.getAttribute("template");a=a.getAttribute("resourceType");var d={};b&&(d.format=b);c&&(d.template=
c);a&&(d.resourceType=a);return d})},S(gp,{Title:Q(X),Abstract:Q(X),WGS84BoundingBox:Q(function(a,b){var c=T([],np,a,b);return 2!=c.length?void 0:fb(c)}),Identifier:Q(X)})),kp=S(fp,{LegendURL:O(function(a){var b={};b.format=a.getAttribute("format");b.href=so(a);return b})},S(gp,{Title:Q(X),Identifier:Q(X)})),lp=S(fp,{TileMatrixSet:Q(X),TileMatrixSetLimits:Q(function(a,b){return T([],op,a,b)})}),op=S(fp,{TileMatrixLimits:kl(function(a,b){return T({},pp,a,b)})}),pp=S(fp,{TileMatrix:Q(X),MinTileRow:Q(Zl),
MaxTileRow:Q(Zl),MinTileCol:Q(Zl),MaxTileCol:Q(Zl)}),mp=S(fp,{Default:Q(X),Value:O(X)},S(gp,{Identifier:Q(X)})),np=S(gp,{LowerCorner:kl(ep),UpperCorner:kl(ep)}),jp=S(fp,{WellKnownScaleSet:Q(X),TileMatrix:O(function(a,b){return T({},qp,a,b)})},S(gp,{SupportedCRS:Q(X),Identifier:Q(X)})),qp=S(fp,{TopLeftCorner:Q(ep),ScaleDenominator:Q(W),TileWidth:Q(Zl),TileHeight:Q(Zl),MatrixWidth:Q(Zl),MatrixHeight:Q(Zl)},S(gp,{Identifier:Q(X)}));function rp(a,b,c){ec.call(this);sp(this,a,b?b:0,c)}z(rp,ec);rp.prototype.clone=function(){var a=new rp(null);gc(a,this.X,this.s.slice());a.v();return a};rp.prototype.Cb=function(a){var b=this.s,c=b[this.a]-b[0];return mb(b[0]-c,b[1]-c,b[0]+c,b[1]+c,a)};rp.prototype.f=function(){var a=this.s[this.a]-this.s[0],b=this.s[this.a+1]-this.s[1];return Math.sqrt(a*a+b*b)};rp.prototype.$=function(){return"Circle"};
function sp(a,b,c,d){if(b){hc(a,d,b,0);a.s||(a.s=[]);d=a.s;b=ic(d,b);d[b++]=d[0]+c;var e;c=1;for(e=a.a;c<e;++c)d[b++]=d[c];d.length=b}else gc(a,"XY",null);a.v()};function tp(a,b,c,d,e){Ee.call(this,a,b);this.f=c;this.c=new Image;null!==d&&(this.c.crossOrigin=d);this.b=null;this.g=e}z(tp,Ee);p=tp.prototype;p.Z=function(){1==this.state&&up(this);this.a&&Aa(this.a);this.state=5;this.v();Ee.prototype.Z.call(this)};p.Za=function(){return this.c};p.getKey=function(){return this.f};p.Fe=function(){this.state=3;up(this);this.v()};p.Ge=function(){this.state=this.c.naturalWidth&&this.c.naturalHeight?Ge:4;up(this);this.v()};
p.load=function(){if(0==this.state||3==this.state)this.state=1,this.v(),this.b=[E(this.c,"error",this.Fe,this,!0),E(this.c,"load",this.Ge,this,!0)],this.g(this,this.f)};function up(a){a.b.forEach(D);a.b=null};function vp(){return[[-Infinity,-Infinity,Infinity,Infinity]]};function wp(a){a=a||{};qk.call(this,{attributions:a.attributions,logo:a.logo,projection:void 0,state:"ready",wrapX:void 0!==a.wrapX?a.wrapX:!0});this.A=da;this.G=a.format;this.ba=void 0==a.overlaps?!0:a.overlaps;this.L=a.url;void 0!==a.loader?this.A=a.loader:void 0!==this.L&&(C(this.G,7),this.A=vl(this.L,this.G));this.ca=void 0!==a.strategy?a.strategy:vp;var b=void 0!==a.useSpatialIndex?a.useSpatialIndex:!0;this.a=b?new vj:null;this.C=new vj;this.b={};this.f={};this.j={};this.l={};this.i=null;var c,
d;a.features instanceof jd?(c=a.features,d=c.a):Array.isArray(a.features)&&(d=a.features);b||void 0!==c||(c=new jd(d));void 0!==d&&wl(this,d);void 0!==c&&xp(this,c)}z(wp,qk);p=wp.prototype;p.$b=function(a){var b=A(a).toString();if(yp(this,b,a)){zp(this,b,a);var c=a.T();c?(b=c.M(),this.a&&this.a.Ha(b,a)):this.b[b]=a;H(this,new Ap(Bp,a))}this.v()};function zp(a,b,c){a.l[b]=[E(c,"change",a.hd,a),E(c,Ma,a.hd,a)]}
function yp(a,b,c){var d=!0,e=c.a;void 0!==e?e.toString()in a.f?d=!1:a.f[e.toString()]=c:(C(!(b in a.j),30),a.j[b]=c);return d}function wl(a,b){var c,d,e,f,g=[],h=[],k=[];d=0;for(e=b.length;d<e;d++)f=b[d],c=A(f).toString(),yp(a,c,f)&&h.push(f);d=0;for(e=h.length;d<e;d++){f=h[d];c=A(f).toString();zp(a,c,f);var l=f.T();l?(c=l.M(),g.push(c),k.push(f)):a.b[c]=f}a.a&&a.a.load(g,k);d=0;for(e=h.length;d<e;d++)H(a,new Ap(Bp,h[d]))}
function xp(a,b){var c=!1;E(a,Bp,function(a){c||(c=!0,b.push(a.feature),c=!1)});E(a,Cp,function(a){c||(c=!0,b.remove(a.feature),c=!1)});E(b,od,function(a){c||(c=!0,this.$b(a.element),c=!1)},a);E(b,pd,function(a){c||(c=!0,this.ld(a.element),c=!1)},a);a.i=b}
p.clear=function(a){if(a){for(var b in this.l)this.l[b].forEach(D);this.i||(this.l={},this.f={},this.j={})}else if(this.a){this.a.forEach(this.tc,this);for(var c in this.b)this.tc(this.b[c])}this.i&&this.i.clear();this.a&&this.a.clear();this.C.clear();this.b={};H(this,new Ap(Dp));this.v()};function di(a,b,c,d){a.a?Aj(a.a,b,c,d):a.i&&a.i.forEach(c,d)}p.Me=function(){var a;this.i?a=this.i.a:this.a&&(a=xj(this.a),qa(this.b)||Pa(a,pa(this.b)));return a};p.M=function(){return this.a.M()};
p.Qd=function(a){a=this.f[a.toString()];return void 0!==a?a:null};p.hd=function(a){a=a.target;var b=A(a).toString(),c=a.T();c?(c=c.M(),b in this.b?(delete this.b[b],this.a&&this.a.Ha(c,a)):this.a&&wj(this.a,c,a)):b in this.b||(this.a&&this.a.remove(a),this.b[b]=a);c=a.a;void 0!==c?(c=c.toString(),b in this.j?(delete this.j[b],this.f[c]=a):this.f[c]!==a&&(Ep(this,a),this.f[c]=a)):b in this.j||(Ep(this,a),this.j[b]=a);this.v();H(this,new Ap(Fp,a))};
function ci(a,b,c,d){var e=a.C;b=a.ca(b,c);var f,g;f=0;for(g=b.length;f<g;++f){var h=b[f];Aj(e,h,function(a){return kb(a.extent,h)})||(a.A.call(a,h,c,d),e.Ha(h,{extent:h.slice()}))}}p.ld=function(a){var b=A(a).toString();b in this.b?delete this.b[b]:this.a&&this.a.remove(a);this.tc(a);this.v()};p.tc=function(a){var b=A(a).toString();this.l[b].forEach(D);delete this.l[b];var c=a.a;void 0!==c?delete this.f[c.toString()]:delete this.j[b];H(this,new Ap(Cp,a))};
function Ep(a,b){for(var c in a.f)if(a.f[c]===b){delete a.f[c];break}}function Ap(a,b){Ba.call(this,a);this.feature=b}z(Ap,Ba);var Bp="addfeature",Fp="changefeature",Dp="clear",Cp="removefeature";function Gp(a){af.call(this,{handleDownEvent:Hp,handleEvent:Ip,handleUpEvent:Jp});this.ba=null;this.j=!1;this.Aa=a.source?a.source:null;this.ta=a.features?a.features:null;this.Nd=a.snapTolerance?a.snapTolerance:12;this.L=a.type;this.b=Kp(this.L);this.sa=a.minPoints?a.minPoints:this.b===Lp?3:2;this.ia=a.maxPoints?a.maxPoints:Infinity;this.Oa=a.finishCondition?a.finishCondition:Ab;var b=a.geometryFunction;if(!b)if("Circle"===this.L)b=function(a,b){var c=b?b:new rp([NaN,NaN]),d=a[0],k=a[1],l=d[0]-k[0],
d=d[1]-k[1];sp(c,a[0],Math.sqrt(l*l+d*d));return c};else{var c,d=this.b;d===Mp?c=qc:d===Np?c=V:d===Lp&&(c=xc);b=function(a,b){var g=b;g?d===Lp?g.ea([a[0].concat([a[0][0]])]):g.ea(a):g=new c(a);return g}}this.A=b;this.G=this.l=this.a=this.u=this.g=this.i=null;this.Ba=a.clickTolerance?a.clickTolerance*a.clickTolerance:36;this.ca=new Xg({source:new wp({useSpatialIndex:!1,wrapX:a.wrapX?a.wrapX:!1}),style:a.style?a.style:Op()});this.za=a.geometryName;this.Md=a.condition?a.condition:Xe;this.Ub=a.freehand?
Ab:a.freehandCondition?a.freehandCondition:Ye;E(this,Ka(Pe),this.Ja,this)}z(Gp,af);function Op(){var a=Wg();return function(b){return a[b.T().$()]}}Gp.prototype.setMap=function(a){af.prototype.setMap.call(this,a);this.Ja()};function Ip(a){this.j=this.b!==Mp&&this.Ub(a);var b=!this.j;this.j&&"pointerdrag"===a.type&&null!==this.g?(Pp(this,a),b=!1):"pointermove"===a.type?b=Qp(this,a):"dblclick"===a.type&&(b=!1);return bf.call(this,a)&&b}
function Hp(a){return this.j?(this.ba=a.pixel,this.i||Rp(this,a),!0):this.Md(a)?(this.ba=a.pixel,!0):!1}function Jp(a){var b=this.ba,c=a.pixel,d=b[0]-c[0],b=b[1]-c[1],d=d*d+b*b,b=!0,c=this.b===Sp;(this.j?d>this.Ba:d<=this.Ba)?(Qp(this,a),this.i?this.j||c?Tp(this):Up(this,a)?this.Oa(a)&&Tp(this):Pp(this,a):(Rp(this,a),this.b===Mp&&Tp(this)),b=!1):c&&(this.i=null);return b}
function Qp(a,b){if(a.i){var c=b.coordinate,d=a.g.T(),e;a.b===Mp?e=a.a:a.b===Lp?(e=a.a[0],e=e[e.length-1],Up(a,b)&&(c=a.i.slice())):(e=a.a,e=e[e.length-1]);e[0]=c[0];e[1]=c[1];a.A(a.a,d);a.u&&a.u.T().ea(c);d instanceof xc&&a.b!==Lp?(a.l||(a.l=new dl(new V(null))),0>=d.f.length?c=null:(c=new pc(null),gc(c,d.X,d.s.slice(0,d.f[0])),c.v()),d=a.l.T(),d.U(c.X,c.s)):a.G&&(d=a.l.T(),d.ea(a.G));Vp(a)}else d=b.coordinate.slice(),a.u?a.u.T().ea(d):(a.u=new dl(new qc(d)),Vp(a));return!0}
function Up(a,b){var c=!1;if(a.g){var d=!1,e=[a.i];a.b===Np?d=a.a.length>a.sa:a.b===Lp&&(d=a.a[0].length>a.sa,e=[a.a[0][0],a.a[0][a.a[0].length-2]]);if(d)for(var d=b.map,f=0,g=e.length;f<g;f++){var h=e[f],k=hf(d,h),l=b.pixel,c=l[0]-k[0],k=l[1]-k[1];if(c=Math.sqrt(c*c+k*k)<=(a.j?1:a.Nd)){a.i=h;break}}}return c}
function Rp(a,b){var c=b.coordinate;a.i=c;a.b===Mp?a.a=c.slice():a.b===Lp?(a.a=[[c.slice(),c.slice()]],a.G=a.a[0]):(a.a=[c.slice(),c.slice()],a.b===Sp&&(a.G=a.a));a.G&&(a.l=new dl(new V(a.G)));c=a.A(a.a);a.g=new dl;a.za&&el(a.g,a.za);a.g.Da(c);Vp(a);H(a,new Wp(Xp,a.g))}
function Pp(a,b){var c=b.coordinate,d=a.g.T(),e,f;a.b===Np?(a.i=c.slice(),f=a.a,f.length>=a.ia&&(a.j?f.pop():e=!0),f.push(c.slice()),a.A(f,d)):a.b===Lp&&(f=a.a[0],f.length>=a.ia&&(a.j?f.pop():e=!0),f.push(c.slice()),e&&(a.i=f[0]),a.A(a.a,d));Vp(a);e&&Tp(a)}
function Tp(a){var b=Yp(a),c=a.a,d=b.T();a.b===Np?(c.pop(),a.A(c,d)):a.b===Lp&&(c[0].pop(),a.A(c,d),c=d.ua());"MultiPoint"===a.L?b.Da(new Gl([c])):"MultiLineString"===a.L?b.Da(new El([c])):"MultiPolygon"===a.L&&b.Da(new Hl([c]));H(a,new Wp(Zp,b));a.ta&&a.ta.push(b);a.Aa&&a.Aa.$b(b)}function Yp(a){a.i=null;var b=a.g;b&&(a.g=null,a.u=null,a.l=null,a.ca.oa().clear(!0));return b}Gp.prototype.C=Bb;
function Vp(a){var b=[];a.g&&b.push(a.g);a.l&&b.push(a.l);a.u&&b.push(a.u);a=a.ca.oa();a.clear(!0);wl(a,b);a.v()}Gp.prototype.Ja=function(){var a=this.V,b=this.get(Pe);a&&b||Yp(this);this.ca.setMap(b?a:null)};function Kp(a){var b;"Point"===a||"MultiPoint"===a?b=Mp:"LineString"===a||"MultiLineString"===a?b=Np:"Polygon"===a||"MultiPolygon"===a?b=Lp:"Circle"===a&&(b=Sp);return b}var Mp="Point",Np="LineString",Lp="Polygon",Sp="Circle";function Wp(a,b){Ba.call(this,a);this.feature=b}z(Wp,Ba);
var Xp="drawstart",Zp="drawend";function $p(a,b,c,d,e,f,g,h,k,l,n){Ee.call(this,e,0);this.B=void 0!==n?n:!1;this.u=g;this.l=h;this.j=null;this.b=b;this.g=d;this.i=f?f:e;this.c=[];this.ab=null;this.f=0;f=Yc(d,this.i);h=this.g.M();e=this.b.M();f=h?xb(f,h):f;if(0===sb(f))this.state=4;else if((h=a.M())&&(e?e=xb(e,h):e=h),h=vb(f),n=d.a[this.i[0]],d=$b(h,c,a),h=Mb(c,n,h),n=Hb(c),void 0!==n&&(h*=n),n=Hb(a),void 0!==n&&(h/=n),d=Mb(a,h,d)/h,isFinite(d)&&0<d&&(h/=d),d=h,!isFinite(d)||0>=d)this.state=4;else if(this.o=new nk(a,c,f,e,d*(void 0!==
l?l:.5)),0===this.o.f.length)this.state=4;else if(this.f=fd(b,d),c=pk(this.o),e&&(a.c?(c[1]=ga(c[1],e[1],e[3]),c[3]=ga(c[3],e[1],e[3])):c=xb(c,e)),sb(c)){a=Zc(b,c,this.f);for(b=a.K;b<=a.J;b++)for(c=a.N;c<=a.R;c++)(l=k(this.f,b,c,g))&&this.c.push(l);0===this.c.length&&(this.state=4)}else this.state=4}z($p,Ee);$p.prototype.Z=function(){1==this.state&&(this.ab.forEach(D),this.ab=null);Ee.prototype.Z.call(this)};$p.prototype.Za=function(){return this.j};
$p.prototype.md=function(){var a=[];this.c.forEach(function(b){b&&b.aa()==Ge&&a.push({extent:Yc(this.b,b.ga),image:b.Za()})},this);this.c.length=0;if(0===a.length)this.state=3;else{var b=this.i[0],c=ed(this.g,b),d="number"===typeof c?c:c[0],c="number"===typeof c?c:c[1],b=this.g.a[b],e=this.b.a[this.f],f=Yc(this.g,this.i);this.j=mk(d,c,this.u,e,this.b.M(),b,f,this.o,a,this.l,this.B);this.state=Ge}this.v()};
$p.prototype.load=function(){if(0==this.state){this.state=1;this.v();var a=0;this.ab=[];this.c.forEach(function(b){var c=b.aa();if(0==c||1==c){a++;var d;d=E(b,"change",function(){var c=b.aa();if(c==Ge||3==c||4==c)D(d),a--,0===a&&(this.ab.forEach(D),this.ab=null,this.md())},this);this.ab.push(d)}},this);this.c.forEach(function(a){0==a.aa()&&a.load()});0===a&&setTimeout(this.md.bind(this),0)}};function aq(a,b){var c=/\{z\}/g,d=/\{x\}/g,e=/\{y\}/g,f=/\{-y\}/g;return function(g){if(g)return a.replace(c,g[0].toString()).replace(d,g[1].toString()).replace(e,function(){return(-g[2]-1).toString()}).replace(f,function(){var a=b.c?b.c[g[0]]:null;C(a,55);return(a.R-a.N+1+g[2]).toString()})}}function bq(a,b){for(var c=a.length,d=Array(c),e=0;e<c;++e)d[e]=aq(a[e],b);return cq(d)}function cq(a){return 1===a.length?a[0]:function(b,c,d){if(b)return a[ja((b[1]<<b[0])+b[2],a.length)](b,c,d)}}
function dq(){};function eq(a){Bk.call(this);this.g=void 0!==a?a:2048}z(eq,Bk);function fq(a){return a.f>a.g}eq.prototype.Sa=function(a){for(var b,c;fq(this);){b=this.a.Na;c=b.ga[0].toString();var d;if(d=c in a)b=b.ga,d=Qc(a[c],b[1],b[2]);if(d)break;else Aa(this.pop())}};function gq(a){qk.call(this,{attributions:a.attributions,extent:a.extent,logo:a.logo,projection:a.projection,state:a.state,wrapX:a.wrapX});this.C=void 0!==a.opaque?a.opaque:!1;this.i=void 0!==a.tilePixelRatio?a.tilePixelRatio:1;this.tileGrid=void 0!==a.tileGrid?a.tileGrid:null;this.a=new eq(a.cacheSize);this.l=[0,0];this.La=""}z(gq,qk);p=gq.prototype;p.gd=function(){return fq(this.a)};p.Sa=function(a,b){var c=this.qb(a);c&&c.Sa(b)};
function kh(a,b,c,d,e){b=a.qb(b);if(!b)return!1;for(var f=!0,g,h,k=d.K;k<=d.J;++k)for(var l=d.N;l<=d.R;++l)g=a.Eb(c,k,l),h=!1,yk(b,g)&&(g=b.get(g),(h=g.aa()===Ge)&&(h=!1!==e(g))),h||(f=!1);return f}p.gc=function(){return 0};p.getKey=function(){return this.La};p.Eb=function(a,b,c){return a+"/"+b+"/"+c};p.jc=function(){return this.C};p.Ga=function(a){return this.tileGrid?this.tileGrid:gd(a)};p.qb=function(a){var b=this.g;return b&&!Xb(b,a)?null:this.a};
function yh(a,b,c){var d=a.Ga(c);c=a.i;b=Tc(ed(d,b),a.l);1==c?a=b:(a=a.l,void 0===a&&(a=[0,0]),a[0]=b[0]*c+.5|0,a[1]=b[1]*c+.5|0);return a}function hq(a,b,c){var d=void 0!==c?c:a.g;c=a.Ga(d);if(a.u&&d.f){var e=b;b=e[0];a=dd(c,e);d=hd(d);lb(d,a[0],a[1])?b=e:(e=tb(d),a[0]+=e*Math.ceil((d[0]-a[0])/e),b=cd(c,a[0],a[1],c.a[b],!1,void 0))}e=b[0];d=b[1];a=b[2];if(c.minZoom>e||e>c.maxZoom)c=!1;else{var f=c.M();c=(c=f?Zc(c,f,e):c.c?c.c[e]:null)?Qc(c,d,a):!0}return c?b:null}p.ud=da;
function iq(a,b){Ba.call(this,a);this.tile=b}z(iq,Ba);function jq(a){gq.call(this,{attributions:a.attributions,cacheSize:a.cacheSize,extent:a.extent,logo:a.logo,opaque:a.opaque,projection:a.projection,state:a.state,tileGrid:a.tileGrid,tilePixelRatio:a.tilePixelRatio,wrapX:a.wrapX});this.tileLoadFunction=a.tileLoadFunction;this.tileUrlFunction=this.f?this.f.bind(this):dq;this.urls=null;if(a.urls){var b=a.urls;this.urls=b;var c=b.join("\n");kq(this,this.f?this.f.bind(this):bq(b,this.tileGrid),c)}else if(a.url){b=a.url;var c=[],d=/\{([a-z])-([a-z])\}/.exec(b);
if(d){var e=d[2].charCodeAt(0),f;for(f=d[1].charCodeAt(0);f<=e;++f)c.push(b.replace(d[0],String.fromCharCode(f)))}else if(d=d=/\{(\d+)-(\d+)\}/.exec(b))for(e=parseInt(d[2],10),f=parseInt(d[1],10);f<=e;f++)c.push(b.replace(d[0],f.toString()));else c.push(b);c=this.urls=c;kq(this,this.f?this.f.bind(this):bq(c,this.tileGrid),b)}a.tileUrlFunction&&kq(this,a.tileUrlFunction)}z(jq,gq);
jq.prototype.A=function(a){a=a.target;switch(a.aa()){case 1:H(this,new iq("tileloadstart",a));break;case Ge:H(this,new iq("tileloadend",a));break;case 3:H(this,new iq("tileloaderror",a))}};function kq(a,b,c){a.tileUrlFunction=b;"undefined"!==typeof c?a.La!==c&&(a.La=c,a.v()):a.v()}jq.prototype.ud=function(a,b,c){a=this.Eb(a,b,c);yk(this.a,a)&&this.a.get(a)};function lq(a){jq.call(this,{attributions:a.attributions,cacheSize:a.cacheSize,extent:a.extent,logo:a.logo,opaque:a.opaque,projection:a.projection,state:a.state,tileGrid:a.tileGrid,tileLoadFunction:a.tileLoadFunction?a.tileLoadFunction:mq,tilePixelRatio:a.tilePixelRatio,tileUrlFunction:a.tileUrlFunction,url:a.url,urls:a.urls,wrapX:a.wrapX});this.crossOrigin=void 0!==a.crossOrigin?a.crossOrigin:null;this.tileClass=void 0!==a.tileClass?a.tileClass:tp;this.b={};this.j={};this.G=a.reprojectionErrorThreshold}
z(lq,jq);p=lq.prototype;p.gd=function(){if(fq(this.a))return!0;for(var a in this.b)if(fq(this.b[a]))return!0;return!1};p.Sa=function(a,b){var c=this.qb(a);this.a.Sa(this.a==c?b:{});for(var d in this.b){var e=this.b[d];e.Sa(e==c?b:{})}};p.gc=function(a){return this.g&&a&&Xb(this.g,a),0};p.jc=function(a){return this.g&&a&&!Xb(this.g,a)?!1:jq.prototype.jc.call(this,a)};p.Ga=function(a){var b=this.g;return!this.tileGrid||b&&!Xb(b,a)?(b=A(a).toString(),b in this.j||(this.j[b]=gd(a)),this.j[b]):this.tileGrid};
p.qb=function(a){var b=this.g;if(!b||Xb(b,a))return this.a;a=A(a).toString();a in this.b||(this.b[a]=new eq);return this.b[a]};function nq(a,b,c,d,e,f,g){b=[b,c,d];e=(c=hq(a,b,f))?a.tileUrlFunction(c,e,f):void 0;e=new a.tileClass(b,void 0!==e?0:4,void 0!==e?e:"",a.crossOrigin,a.tileLoadFunction);e.key=g;E(e,"change",a.A,a);return e}
function rh(a,b,c,d,e,f){if(a.g&&f&&!Xb(a.g,f)){e=a.qb(f);d=[b,c,d];var g;b=a.Eb.apply(a,d);yk(e,b)&&(g=e.get(b));c=a.getKey();if(g&&g.key==c)return g;var h=a.g,k=a.Ga(h),l=a.Ga(f),n=hq(a,d,f);a=new $p(h,k,f,l,d,n,a.i,0,function(a,b,c,d){return oq(this,a,b,c,d,h)}.bind(a),a.G,!1);a.key=c;g?(a.a=g,e.replace(b,a)):e.set(b,a);return a}return oq(a,b,c,d,e,f)}
function oq(a,b,c,d,e,f){var g,h=a.Eb(b,c,d),k=a.getKey();if(yk(a.a,h)){if(g=a.a.get(h),g.key!=k){var l=g;g=nq(a,b,c,d,e,f,k);0==l.aa()?g.a=l.a:g.a=l;if(g.a){b=g.a;c=g;do{if(b.aa()==Ge){b.a=null;break}else 1==b.aa()?c=b:0==b.aa()?c.a=b.a:c=b;b=c.a}while(b)}a.a.replace(h,g)}}else g=nq(a,b,c,d,e,f,k),a.a.set(h,g);return g}function mq(a,b){a.Za().src=b};(function(){var a={},b={S:a};(function(c){if("object"===typeof a&&"undefined"!==typeof b)b.S=c();else{var d;"undefined"!==typeof window?d=window:"undefined"!==typeof global?d=global:"undefined"!==typeof self?d=self:d=this;d.Hf=c()}})(function(){return function d(a,b,g){function h(l,m){if(!b[l]){if(!a[l]){var q="function"==typeof require&&require;if(!m&&q)return q(l,!0);if(k)return k(l,!0);q=Error("Cannot find module '"+l+"'");throw q.code="MODULE_NOT_FOUND",q;}q=b[l]={S:{}};a[l][0].call(q.S,function(b){var d=
a[l][1][b];return h(d?d:b)},q,q.S,d,a,b,g)}return b[l].S}for(var k="function"==typeof require&&require,l=0;l<g.length;l++)h(g[l]);return h}({1:[function(a,b,f){a=a("./processor");f.zf=a},{"./processor":2}],2:[function(a,b){function f(a){var b=!0;try{new ImageData(10,10)}catch(d){b=!1}return function(d){var e=d.buffers,f=d.meta,g=d.width,h=d.height,k=e.length,l=e[0].byteLength;if(d.imageOps){l=Array(k);for(d=0;d<k;++d){var I=l,J=d,F;F=new Uint8ClampedArray(e[d]);var K=g,x=h;F=b?new ImageData(F,K,x):
{data:F,width:K,height:x};I[J]=F}g=a(l,f).data}else{g=new Uint8ClampedArray(l);h=Array(k);I=Array(k);for(d=0;d<k;++d)h[d]=new Uint8ClampedArray(e[d]),I[d]=[0,0,0,0];for(e=0;e<l;e+=4){for(d=0;d<k;++d)J=h[d],I[d][0]=J[e],I[d][1]=J[e+1],I[d][2]=J[e+2],I[d][3]=J[e+3];d=a(I,f);g[e]=d[0];g[e+1]=d[1];g[e+2]=d[2];g[e+3]=d[3]}}return g.buffer}}function g(a,b){var d=Object.keys(a.lib||{}).map(function(b){return"var "+b+" = "+a.lib[b].toString()+";"}).concat(["var __minion__ = ("+f.toString()+")(",a.operation.toString(),
");",'self.addEventListener("message", function(event) {',"  var buffer = __minion__(event.data);","  self.postMessage({buffer: buffer, meta: event.data.meta}, [buffer]);","});"]),d=URL.createObjectURL(new Blob(d,{type:"text/javascript"})),d=new Worker(d);d.addEventListener("message",b);return d}function h(a,b){var d=f(a.operation);return{postMessage:function(a){setTimeout(function(){b({data:{buffer:d(a),meta:a.meta}})},0)}}}function k(a){this.Wb=!!a.Ff;var b;0===a.threads?b=0:this.Wb?b=1:b=a.threads||
1;var d=[];if(b)for(var e=0;e<b;++e)d[e]=g(a,this.Gc.bind(this,e));else d[0]=h(a,this.Gc.bind(this,0));this.yb=d;this.Hc=[];this.wb=0;this.Pa={};this.Xb=null}var l=a("./util").Be;k.prototype.Cd=function(){if(0===this.wb&&0<this.Hc.length){var a=this.Xb=this.Hc.shift(),b=a.Wa[0].width,d=a.Wa[0].height,e=a.Wa.map(function(a){return a.data.buffer}),f=this.yb.length;this.wb=f;if(1===f)this.yb[0].postMessage({buffers:e,meta:a.me,imageOps:this.Wb,width:b,height:d},e);else for(var g=4*Math.ceil(a.Wa[0].data.length/
4/f),h=0;h<f;++h){for(var k=h*g,l=[],I=0,J=e.length;I<J;++I)l.push(e[h].slice(k,k+g));this.yb[h].postMessage({buffers:l,meta:a.me,imageOps:this.Wb,width:b,height:d},l)}}};k.prototype.Gc=function(a,b){this.Ef||(this.Pa[a]=b.data,--this.wb,0===this.wb&&this.Ed())};k.prototype.Ed=function(){var a=this.Xb,b=this.yb.length,d,e;if(1===b)d=new Uint8ClampedArray(this.Pa[0].buffer),e=this.Pa[0].meta;else{var f=a.Wa[0].data.length;d=new Uint8ClampedArray(f);e=Array(f);for(var f=4*Math.ceil(f/4/b),g=0;g<b;++g){var h=
g*f;d.set(new Uint8ClampedArray(this.Pa[g].buffer),h);e[g]=this.Pa[g].meta}}this.Xb=null;this.Pa={};a.Bb(null,l(d,a.Wa[0].width,a.Wa[0].height),e);this.Cd()};b.S=k},{"./util":3}],3:[function(a,b,f){var g=!0;try{new ImageData(10,10)}catch(k){g=!1}var h=document.createElement("canvas").getContext("2d");f.Be=function(a,b,d){if(g)return new ImageData(a,b,d);b=h.createImageData(b,d);b.data.set(a);return b}},{}]},{},[1])(1)})})();t("ol.Collection",jd);t("ol.Feature",dl);dl.prototype.getGeometry=dl.prototype.T;dl.prototype.getId=dl.prototype.De;dl.prototype.setStyle=dl.prototype.ad;t("ol.Map",M);M.prototype.addInteraction=M.prototype.Id;M.prototype.addLayer=M.prototype.Jd;M.prototype.addOverlay=M.prototype.Kd;M.prototype.forEachFeatureAtPixel=M.prototype.Pd;M.prototype.getEventPixel=M.prototype.Tc;M.prototype.getLayerGroup=M.prototype.Fb;M.prototype.getSize=M.prototype.Ya;M.prototype.getView=M.prototype.W;
M.prototype.getViewport=M.prototype.Sd;M.prototype.on=M.prototype.ka;M.prototype.removeInteraction=M.prototype.af;M.prototype.setLayerGroup=M.prototype.ef;t("ol.Observable",Ga);t("ol.Observable.unByKey",function(a){if(Array.isArray(a))for(var b=0,c=a.length;b<c;++b)D(a[b]);else D(a)});t("ol.Overlay",Mk);t("ol.View",Bc);Bc.prototype.animate=Bc.prototype.animate;Bc.prototype.calculateExtent=Bc.prototype.Mc;Bc.prototype.getZoom=Bc.prototype.Td;Bc.prototype.setZoom=Bc.prototype.ff;
t("ol.control.defaults",Gd);t("ol.extent.containsXY",lb);t("ol.extent.getCenter",vb);t("ol.format.GeoJSON",Nl);t("ol.geom.Circle",rp);rp.prototype.getLastCoordinate=rp.prototype.Uc;rp.prototype.getRadius=rp.prototype.f;rp.prototype.on=rp.prototype.ka;t("ol.geom.LineString",V);V.prototype.getCoordinateAt=V.prototype.Sc;V.prototype.getCoordinates=V.prototype.ua;V.prototype.getLastCoordinate=V.prototype.Uc;V.prototype.getLength=V.prototype.Ie;V.prototype.on=V.prototype.ka;
V.prototype.setCoordinates=V.prototype.ea;t("ol.geom.LinearRing",pc);t("ol.geom.MultiPolygon",Hl);t("ol.geom.Point",qc);qc.prototype.getCoordinates=qc.prototype.ua;t("ol.geom.Polygon",xc);xc.prototype.appendLinearRing=xc.prototype.Ld;xc.prototype.getExtent=xc.prototype.M;t("ol.interaction.Draw",Gp);Gp.prototype.on=Gp.prototype.ka;t("ol.interaction.defaults",Qf);t("ol.layer.Group",Zf);Zf.prototype.getVisible=Zf.prototype.f;Zf.prototype.setVisible=Zf.prototype.l;t("ol.layer.Tile",Fg);
Fg.prototype.getVisible=Fg.prototype.f;Fg.prototype.setVisible=Fg.prototype.l;t("ol.layer.Vector",Xg);Xg.prototype.getSource=Xg.prototype.oa;Xg.prototype.getVisible=Xg.prototype.f;Xg.prototype.setVisible=Xg.prototype.l;t("ol.proj.Projection",Gb);Gb.prototype.getExtent=Gb.prototype.M;t("ol.proj.addCoordinateTransforms",Ub);t("ol.proj.addProjection",Sb);t("ol.proj.transform",$b);mg.prototype.frameState=mg.prototype.frameState;mg.prototype.vectorContext=mg.prototype.vectorContext;
t("ol.render.VectorContext",Yg);Zg.prototype.drawCircle=Zg.prototype.Ra;Zg.prototype.setStyle=Zg.prototype.cd;t("ol.source.TileImage",lq);t("ol.source.Vector",wp);wp.prototype.addFeature=wp.prototype.$b;wp.prototype.clear=wp.prototype.clear;wp.prototype.getFeatureById=wp.prototype.Qd;wp.prototype.getFeatures=wp.prototype.Me;wp.prototype.removeFeature=wp.prototype.ld;t("ol.style.Circle",Og);t("ol.style.Fill",Pg);t("ol.style.Icon",Em);t("ol.style.RegularShape",Ng);t("ol.style.Stroke",Qg);
t("ol.style.Style",Rg);t("ol.tilegrid.TileGrid",Uc);
  return OPENLAYERS.ol;
}));


}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],20:[function(require,module,exports){
var mapConstants = {
    map_w: 16384,
    map_h: 16384,
    map_x_boundaries: [-8475.58617377, 9327.49124559],
    map_y_boundaries: [9028.52473332, -8836.61406266],
    resolutions: [
        16384 / 1024,
        16384 / 1024 / 2,
        16384 / 1024 / 4,
        16384 / 1024 / 8,
        16384 / 1024 / 16
    ],
    visionRadius: {
        observer: 1600,
        sentry: 850,
        darkness: 675
    },
    defaultMovementSpeed: 300,
    creepBaseMovementSpeed: 325,
    pullRangeTiming: [4, 2.25, 4.75]
}
mapConstants.imgCenter = [mapConstants.map_w / 2, mapConstants.map_h / 2]
mapConstants.scale = Math.abs(mapConstants.map_x_boundaries[1] - mapConstants.map_x_boundaries[0]) / mapConstants.map_w;

module.exports = mapConstants;
},{}],21:[function(require,module,exports){
var ol = require('openlayers');
var conversionFunctions = require('./conversionFunctions');
var mapConstants = require('./mapConstants');

var pixelProj = new ol.proj.Projection({
    code: 'pixel',
    units: 'pixels',
    extent: [0, 0, mapConstants.map_w, mapConstants.map_h]
});

var dotaProj = new ol.proj.Projection({
    code: 'dota',
    extent: [-8288, -8288, 8288, 8288],
    units: 'units'
});

ol.proj.addProjection(pixelProj);
ol.proj.addCoordinateTransforms('pixel', dotaProj, conversionFunctions.latLonToWorld, conversionFunctions.worldToLatLon);

ol.proj.addProjection(dotaProj);
ol.proj.addCoordinateTransforms('dota', pixelProj, conversionFunctions.worldToLatLon, conversionFunctions.latLonToWorld);

module.exports = {
    pixel: pixelProj,
    dota: dotaProj
}
},{"./conversionFunctions":13,"./mapConstants":20,"openlayers":19}],22:[function(require,module,exports){
var Rollbar = require("rollbar-browser");

var rollbarConfig = {
    accessToken: "fe7cf327f2b24bb8991e252239f6200f",
    captureUncaught: true,
    ignoredMessages: [
        "Error:  DOM Exception 18",
        "SecurityError: DOM Exception 18: An attempt was made to break through the security policy of the user agent.",
        "SecurityError:  An attempt was made to break through the security policy of the user agent.",
        "Script error."
    ],
    payload: {
        environment: "production",
        client: {
            javascript: {
                source_map_enabled: true,
                code_version: "4eac1c0e61ae75859e961008f5948f72c3ffdc57",
                // Optionally have Rollbar guess which frames the error was thrown from
                // when the browser does not provide line and column numbers.
                guess_uncaught_frames: true
            }
        }
    }
};

var rollbar = Rollbar.init(rollbarConfig);

module.exports = rollbar;
},{"rollbar-browser":1}],23:[function(require,module,exports){
var ol = require('openlayers');
var getFeatureCenter = require('./util/getFeatureCenter');

var defaultStyle = new ol.style.Style({
    fill: new ol.style.Fill({
        color: 'rgba(255,255,255,0.4)'
    }),
    stroke: new ol.style.Stroke({
        color: '#3399CC',
        width: 1.25
    })
});

var styles = {
    creepSpawn: new ol.style.Style({
        image: new ol.style.RegularShape({
            points: 6,
            radius: 8,
            fill: new ol.style.Fill({
                color: 'rgba(0, 0, 255, 0.3)'
            }),
            stroke: new ol.style.Stroke({
                color: 'rgba(0, 0, 255, 0.7)',
                width: 2
            })
        })
    }),
    neutralCamp: [
        new ol.style.Style({
            image: new ol.style.RegularShape({
                points: 3,
                radius: 8,
                fill: new ol.style.Fill({
                    color: 'rgba(0, 255, 0, 0.3)'
                }),
                stroke: new ol.style.Stroke({
                    color: 'rgba(0, 255, 0, 0.7)',
                    width: 2
                })
            })
        }),
        new ol.style.Style({
            image: new ol.style.RegularShape({
                points: 3,
                radius: 9,
                fill: new ol.style.Fill({
                    color: 'rgba(255, 255, 0, 0.3)'
                }),
                stroke: new ol.style.Stroke({
                    color: 'rgba(255, 255, 0, 0.7)',
                    width: 2
                })
            })
        }),
        new ol.style.Style({
            image: new ol.style.RegularShape({
                points: 3,
                radius: 10,
                fill: new ol.style.Fill({
                    color: 'rgba(255, 150, 0, 0.3)'
                }),
                stroke: new ol.style.Stroke({
                    color: 'rgba(255, 150, 0, 0.7)',
                    width: 2
                })
            })
        }),
        new ol.style.Style({
            image: new ol.style.RegularShape({
                points: 3,
                radius: 11,
                fill: new ol.style.Fill({
                    color: 'rgba(255, 0, 0, 0.3)'
                }),
                stroke: new ol.style.Stroke({
                    color: 'rgba(255, 0, 0, 0.7)',
                    width: 2
                })
            })
        })
    ],
    dire: new ol.style.Style({
        fill: new ol.style.Fill({
            color: 'rgba(255, 51, 51, 0.2)'
        }),
        stroke: new ol.style.Stroke({
            color: '#FF3333',
            width: 2
        })
    }),
    radiant: new ol.style.Style({
        fill: new ol.style.Fill({
            color: 'rgba(51, 255, 51, 0.2)'
        }),
        stroke: new ol.style.Stroke({
            color: '#33FF33',
            width: 2
        })
    }),
    direCreep: new ol.style.Style({
        fill: new ol.style.Fill({
            color: 'rgba(255, 51, 51, 0.2)'
        }),
        stroke: new ol.style.Stroke({
            color: '#FF3333',
            width: 10
        })
    }),
    radiantCreep: new ol.style.Style({
        fill: new ol.style.Fill({
            color: 'rgba(51, 255, 51, 0.2)'
        }),
        stroke: new ol.style.Stroke({
            color: '#33FF33',
            width: 10
        })
    }),
    highlight: new ol.style.Style({
        fill: new ol.style.Fill({
            color: 'rgba(255, 255, 0, 0.2)'
        }),
        stroke: new ol.style.Stroke({
            color: '#ffff00',
            width: 2
        })
    }),
    select: new ol.style.Style({
        fill: new ol.style.Fill({
            color: 'rgba(0, 255, 0, 0.2)'
        }),
        stroke: new ol.style.Stroke({
            color: '#00ff00',
            width: 2
        })
    }),
    cursor: new ol.style.Style({
        fill: new ol.style.Fill({
            color: 'rgba(255, 255, 255, 0.2)'
        }),
        stroke: new ol.style.Stroke({
            color: 'rgba(255, 255, 255, 1)',
            width: 1
        })
    }),
    visionSimulation: new ol.style.Style({
        fill: new ol.style.Fill({
            color: 'rgba(255, 255, 0, 0.2)'
        }),
        stroke: new ol.style.Stroke({
            color: 'rgba(255, 255, 0, 1)',
            width: 1
        })
    }),
    dayVision: new ol.style.Style({
        fill: new ol.style.Fill({
            color: 'rgba(238, 153, 0, 0.1)'
        }),
        stroke: new ol.style.Stroke({
            color: 'rgba(238, 153, 0, 0.5)',
            width: 2
        })
    }),
    nightVision: new ol.style.Style({
        fill: new ol.style.Fill({
            color: 'rgba(0, 127, 255, 0.1)'
        }),
        stroke: new ol.style.Stroke({
            color: 'rgba(0, 0, 255, 0.5)',
            width: 2
        })
    }),
    trueSight: new ol.style.Style({
        fill: new ol.style.Fill({
            color: 'rgba(0, 127, 255, 0.1)'
        }),
        stroke: new ol.style.Stroke({
            color: 'rgba(0, 127, 255, 0.5)',
            width: 2
        })
    }),
    attackRange: new ol.style.Style({
        fill: new ol.style.Fill({
            color: 'rgba(255, 0, 0, 0.1)'
        }),
        stroke: new ol.style.Stroke({
            color: 'rgba(255, 0, 0, 0.5)',
            width: 2
        })
    }),
    ent_dota_fountain: [
        defaultStyle,
        new ol.style.Style({
            image: new ol.style.Icon({
                src: 'img/svgs/water-15.svg',
                anchor: [0.5, 0.5]
            }),
            geometry: getFeatureCenter
        })
    ],
    npc_dota_barracks: [
        defaultStyle,
        new ol.style.Style({
            image: new ol.style.Icon({
                src: 'img/svgs/stadium-15.svg',
                anchor: [0.5, 0.5]
            }),
            geometry: getFeatureCenter
        })
    ],
    npc_dota_filler: [
        defaultStyle,
        new ol.style.Style({
            image: new ol.style.Icon({
                src: 'img/svgs/landmark-15.svg',
                anchor: [0.5, 0.5]
            }),
            geometry: getFeatureCenter
        })
    ],
    npc_dota_tower: [
        defaultStyle,
        new ol.style.Style({
            image: new ol.style.Icon({
                src: 'img/svgs/castle-15.svg',
                anchor: [0.5, 0.5]
            }),
            geometry: getFeatureCenter
        })
    ],
    ent_dota_shop: [
        defaultStyle,
        new ol.style.Style({
            image: new ol.style.Icon({
                src: 'img/svgs/shop-15.svg',
                anchor: [0.5, 0.5]
            }),
            geometry: getFeatureCenter
        })
    ],
    npc_dota_fort: [
        defaultStyle,
        new ol.style.Style({
            image: new ol.style.Icon({
                src: 'img/svgs/town-hall-15.svg',
                anchor: [0.5, 0.5]
            }),
            geometry: getFeatureCenter
        })
    ],
    npc_dota_healer: [
        defaultStyle,
        new ol.style.Style({
            image: new ol.style.Icon({
                src: 'img/svgs/place-of-worship-15.svg',
                anchor: [0.5, 0.5]
            }),
            geometry: getFeatureCenter
        })
    ],
    measure: new ol.style.Style({
        fill: new ol.style.Fill({
            color: 'rgba(255, 255, 255, 0.3)'
        }),
        stroke: new ol.style.Stroke({
            color: 'rgba(255,165,0, 0.7)',
            lineDash: [10, 10],
            width: 3
        }),
        image: new ol.style.Circle({
            radius: 5,
            stroke: new ol.style.Stroke({
                color: 'rgba(255,165,0, 0.7)',
                width: 2
            }),
            fill: new ol.style.Fill({
                color: 'rgba(255,165,0, 0.3)'
            })
        })
    }),
    observer: {
        normal: new ol.style.Style({
            image: new ol.style.Icon({
                src: 'img/ward_observer.png',
                anchor: [0.5, 1]
            })
        }),
        highlight: new ol.style.Style({
            image: new ol.style.Icon({
                src: 'img/ward_observer.png',
                anchor: [0.5, 1],
                color: '#0000ff'
            })
        }),
        remove: new ol.style.Style({
            image: new ol.style.Icon({
                src: 'img/ward_observer.png',
                anchor: [0.5, 1],
                color: '#ff0000'
            })
        })
    },
    sentry: {
        normal: new ol.style.Style({
            image: new ol.style.Icon({
                src: 'img/ward_sentry.png',
                anchor: [0.5, 1]
            })
        }),
        highlight: new ol.style.Style({
            image: new ol.style.Icon({
                src: 'img/ward_sentry.png',
                anchor: [0.5, 1],
                color: '#0000ff'
            })
        }),
        remove: new ol.style.Style({
            image: new ol.style.Icon({
                src: 'img/ward_sentry.png',
                anchor: [0.5, 1],
                color: '#ff0000'
            })
        })
    },
    tree: {
        alive: new ol.style.Style({
            fill: new ol.style.Fill({color: [0, 255, 0, 0.3]}),
            stroke: new ol.style.Stroke({color: [0, 255, 0, 0.8]})
        }),
        dead: new ol.style.Style({
            fill: new ol.style.Fill({color: [51, 25, 0, 0.7]}),
            stroke: new ol.style.Stroke({color: [255, 128, 0, 0.8]})
        })
    },
    bountyRune: new ol.style.Style({
        image: new ol.style.Icon({
            src: 'img/bountyrune.png',
            anchor: [0.5, 0.5]
        })
    }),
    rune: new ol.style.Style({
        image: new ol.style.Icon({
            src: 'img/doubledamage.png',
            anchor: [0.5, 0.5]
        })
    }),
    roshan: new ol.style.Style({
        image: new ol.style.Icon({
            src: 'img/roshan.png',
            anchor: [0.5, 0.5]
        })
    }),
    pullRange: new ol.style.Style({
        fill: new ol.style.Fill({
            color: 'rgba(0, 153, 238, 0.1)'
        }),
        stroke: new ol.style.Stroke({
            color: 'rgba(0, 153, 238, 0.5)',
            width: 2
        })
    }),
}

styles.teamColor = function (feature, resolution) {
    if (feature.getId().indexOf('_bad_') == -1) {
        return styles.radiant;
    }
    else {
        return styles.dire;
    }
}

styles.creepColor = function (feature, resolution) {
    if (feature.getId().indexOf('_bad_') == -1) {
        return styles.radiantCreep;
    }
    else {
        return styles.direCreep;
    }
}
module.exports = styles;
},{"./util/getFeatureCenter":27,"openlayers":19}],24:[function(require,module,exports){
function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = capitalize;
},{}],25:[function(require,module,exports){
function createCirclePointCoords(circleCenterX, circleCenterY, circleRadius, pointsToFind) {
    var angleToAdd = 360/pointsToFind;
    var coords = [];  
    var angle = 0;
    for (var i=0;i<pointsToFind;i++){
        angle = angle+angleToAdd;
        var coordX = circleCenterX + circleRadius * Math.cos(angle*Math.PI/180);
        var coordY = circleCenterY + circleRadius * Math.sin(angle*Math.PI/180);
        coords.push([coordX,coordY]);
    }
    return coords;
}

module.exports = createCirclePointCoords;
},{}],26:[function(require,module,exports){
var forEach = function (array, callback, scope) {
    for (var i = 0; i < array.length; i++) {
        callback.call(scope, array[i], i); // passes back stuff we need
    }
};

module.exports = forEach;
},{}],27:[function(require,module,exports){
var ol = require('openlayers');

var getFeatureCenter = function(feature) {
    var extent = feature.getGeometry().getExtent();
    var center = ol.extent.getCenter(extent);
    return new ol.geom.Point(center);
};

module.exports = getFeatureCenter;
},{"openlayers":19}],28:[function(require,module,exports){
function getJSON(path, callback) {
    var request = new XMLHttpRequest();

    request.open('GET', path, true);
    request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
            var data = JSON.parse(request.responseText);
            callback(data);
        } else {
            alert('Error loading page.');
        }
    };
    request.onerror = function() {
        alert('Error loading page.');
    };
    request.send();
    return request;
}

module.exports = getJSON;
},{}],29:[function(require,module,exports){
var trim = require('./trim');

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function setQueryString(key, value) {
    if (history && history.replaceState) history.replaceState(null, "", updateQueryString(key, value));
}

function addQueryStringValue(key, value) {
    var qs = getParameterByName(key);
    qs = trim(trim(qs, ' ;') + ';' + value, ' ;');
    if (history && history.replaceState) history.replaceState(null, "", updateQueryString(key, qs));
}

function removeQueryStringValue(key, value) {
    var qs = getParameterByName(key);
    qs = trim(trim(qs, ' ;').replace(value, '').replace(/;;/g, ''), ' ;');
    if (history && history.replaceState) history.replaceState(null, "", updateQueryString(key, qs != '' ? qs : null));
}

function updateQueryString(key, value, url) {
    if (!url) url = window.location.href;
    var re = new RegExp("([?&])" + key + "=.*?(&|#|$)(.*)", "gi"),
        hash;

    if (re.test(url)) {
        if (typeof value !== 'undefined' && value !== null)
            return url.replace(re, '$1' + key + "=" + value + '$2$3');
        else {
            hash = url.split('#');
            url = hash[0].replace(re, '$1$3').replace(/(&|\?)$/, '');
            if (typeof hash[1] !== 'undefined' && hash[1] !== null)
                url += '#' + hash[1];
            return url;
        }
    } else {
        if (typeof value !== 'undefined' && value !== null) {
            var separator = url.indexOf('?') !== -1 ? '&' : '?';
            hash = url.split('#');
            url = hash[0] + separator + key + '=' + value;
            if (typeof hash[1] !== 'undefined' && hash[1] !== null)
                url += '#' + hash[1];
            return url;
        } else {
            return url;
        }
    }
}

module.exports = {
    getParameterByName: getParameterByName,
    setQueryString: setQueryString,
    addQueryStringValue: addQueryStringValue,
    removeQueryStringValue: removeQueryStringValue,
    updateQueryString: updateQueryString
}
},{"./trim":30}],30:[function(require,module,exports){
function escapeRegex(string) {
    return string.replace(/[\[\](){}?*+\^$\\.|\-]/g, "\\$&");
}

var trim = function trim(str, characters, flags) {
    flags = flags || "g";
    if (typeof str !== "string" || typeof characters !== "string" || typeof flags !== "string") {
        throw new TypeError("argument must be string");
    }

    if (!/^[gi]*$/.test(flags)) {
        throw new TypeError("Invalid flags supplied '" + flags.match(new RegExp("[^gi]*")) + "'");
    }

    characters = escapeRegex(characters);

    return str.replace(new RegExp("^[" + characters + "]+|[" + characters + "]+$", flags), '');
};

module.exports = trim;
},{}],31:[function(require,module,exports){
var PNG = require('png-js');

function ImageHandler(imagePath) {
    this.imagePath = imagePath;
    self.canvas = null;
    self.png = null;
}
ImageHandler.prototype.load = function (callback) {
    var self = this;
    var t1 = Date.now();
    self.canvas = document.createElement("canvas");
    PNG.load(this.imagePath, self.canvas, function(png) {
        self.png = png;
        self.ctx = self.canvas.getContext("2d");
        callback();
    });
}
ImageHandler.prototype.scan = function (offset, width, height, pixelHandler, grid) {
    var imgData = this.ctx.getImageData(offset, 0, width, height);
    var data = imgData.data;

    for (var i = 0; i < data.length; i += 4) {
        var r = data[i];
        var g = data[i+1];
        var b = data[i+2];
        var alpha = data[i+3];
        var x = Math.floor((i/4) % width);
        var y = Math.floor((i/4) / height);
        pixelHandler(x, y, [r, g, b], grid);
    }
}

module.exports = ImageHandler;
},{"png-js":32}],32:[function(require,module,exports){
// Generated by CoffeeScript 1.4.0

/*
# MIT LICENSE
# Copyright (c) 2011 Devon Govett
# 
# Permission is hereby granted, free of charge, to any person obtaining a copy of this 
# software and associated documentation files (the "Software"), to deal in the Software 
# without restriction, including without limitation the rights to use, copy, modify, merge, 
# publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons 
# to whom the Software is furnished to do so, subject to the following conditions:
# 
# The above copyright notice and this permission notice shall be included in all copies or 
# substantial portions of the Software.
# 
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING 
# BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND 
# NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, 
# DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, 
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var FlateStream = require('./zlib');

  var PNG;

  PNG = (function() {
    PNG.load = function(url, canvas, callback) {
      var xhr,
        _this = this;
      if (typeof canvas === 'function') {
        callback = canvas;
      }
      xhr = new XMLHttpRequest;
      xhr.open("GET", url, true);
      xhr.responseType = "arraybuffer";
      xhr.onload = function() {
        var data, png;
        data = new Uint8Array(xhr.response || xhr.mozResponseArrayBuffer);
        png = new PNG(data);
        if (typeof (canvas != null ? canvas.getContext : void 0) === 'function') {
          png.render(canvas);
        }
        return typeof callback === "function" ? callback(png) : void 0;
      };
      return xhr.send(null);
    };

    function PNG(data) {
      var chunkSize, colors, delayDen, delayNum, frame, i, index, key, section, short, text, _i, _j, _ref;
      this.data = data;
      this.pos = 8;
      this.palette = [];
      this.imgData = [];
      this.transparency = {};
      this.text = {};
      frame = null;
      while (true) {
        chunkSize = this.readUInt32();
        section = ((function() {
          var _i, _results;
          _results = [];
          for (i = _i = 0; _i < 4; i = ++_i) {
            _results.push(String.fromCharCode(this.data[this.pos++]));
          }
          return _results;
        }).call(this)).join('');
        switch (section) {
          case 'IHDR':
            this.width = this.readUInt32();
            this.height = this.readUInt32();
            this.bits = this.data[this.pos++];
            this.colorType = this.data[this.pos++];
            this.compressionMethod = this.data[this.pos++];
            this.filterMethod = this.data[this.pos++];
            this.interlaceMethod = this.data[this.pos++];
            break;
          case 'PLTE':
            this.palette = this.read(chunkSize);
            break;
          case 'IDAT':
            if (section === 'fdAT') {
              this.pos += 4;
              chunkSize -= 4;
            }
            data = (frame != null ? frame.data : void 0) || this.imgData;
            for (i = _i = 0; 0 <= chunkSize ? _i < chunkSize : _i > chunkSize; i = 0 <= chunkSize ? ++_i : --_i) {
              data.push(this.data[this.pos++]);
            }
            break;
          case 'tRNS':
            this.transparency = {};
            switch (this.colorType) {
              case 3:
                this.transparency.indexed = this.read(chunkSize);
                short = 255 - this.transparency.indexed.length;
                if (short > 0) {
                  for (i = _j = 0; 0 <= short ? _j < short : _j > short; i = 0 <= short ? ++_j : --_j) {
                    this.transparency.indexed.push(255);
                  }
                }
                break;
              case 0:
                this.transparency.grayscale = this.read(chunkSize)[0];
                break;
              case 2:
                this.transparency.rgb = this.read(chunkSize);
            }
            break;
          case 'tEXt':
            text = this.read(chunkSize);
            index = text.indexOf(0);
            key = String.fromCharCode.apply(String, text.slice(0, index));
            this.text[key] = String.fromCharCode.apply(String, text.slice(index + 1));
            break;
          case 'IEND':
            if (frame) {
              this.animation.frames.push(frame);
            }
            this.colors = (function() {
              switch (this.colorType) {
                case 0:
                case 3:
                case 4:
                  return 1;
                case 2:
                case 6:
                  return 3;
              }
            }).call(this);
            this.hasAlphaChannel = (_ref = this.colorType) === 4 || _ref === 6;
            colors = this.colors + (this.hasAlphaChannel ? 1 : 0);
            this.pixelBitlength = this.bits * colors;
            this.colorSpace = (function() {
              switch (this.colors) {
                case 1:
                  return 'DeviceGray';
                case 3:
                  return 'DeviceRGB';
              }
            }).call(this);
            this.imgData = new Uint8Array(this.imgData);
            return;
          default:
            this.pos += chunkSize;
        }
        this.pos += 4;
        if (this.pos > this.data.length) {
          throw new Error("Incomplete or corrupt PNG file");
        }
      }
      return;
    }

    PNG.prototype.read = function(bytes) {
      var i, _i, _results;
      _results = [];
      for (i = _i = 0; 0 <= bytes ? _i < bytes : _i > bytes; i = 0 <= bytes ? ++_i : --_i) {
        _results.push(this.data[this.pos++]);
      }
      return _results;
    };

    PNG.prototype.readUInt32 = function() {
      var b1, b2, b3, b4;
      b1 = this.data[this.pos++] << 24;
      b2 = this.data[this.pos++] << 16;
      b3 = this.data[this.pos++] << 8;
      b4 = this.data[this.pos++];
      return b1 | b2 | b3 | b4;
    };

    PNG.prototype.readUInt16 = function() {
      var b1, b2;
      b1 = this.data[this.pos++] << 8;
      b2 = this.data[this.pos++];
      return b1 | b2;
    };

    PNG.prototype.decodePixels = function(data) {
      var byte, c, col, i, left, length, p, pa, paeth, pb, pc, pixelBytes, pixels, pos, row, scanlineLength, upper, upperLeft, _i, _j, _k, _l, _m;
      if (data == null) {
        data = this.imgData;
      }
      if (data.length === 0) {
        return new Uint8Array(0);
      }
      data = new FlateStream(data);
      data = data.getBytes();
      pixelBytes = this.pixelBitlength / 8;
      scanlineLength = pixelBytes * this.width;
      pixels = new Uint8Array(scanlineLength * this.height);
      length = data.length;
      row = 0;
      pos = 0;
      c = 0;
      while (pos < length) {
        switch (data[pos++]) {
          case 0:
            for (i = _i = 0; _i < scanlineLength; i = _i += 1) {
              pixels[c++] = data[pos++];
            }
            break;
          case 1:
            for (i = _j = 0; _j < scanlineLength; i = _j += 1) {
              byte = data[pos++];
              left = i < pixelBytes ? 0 : pixels[c - pixelBytes];
              pixels[c++] = (byte + left) % 256;
            }
            break;
          case 2:
            for (i = _k = 0; _k < scanlineLength; i = _k += 1) {
              byte = data[pos++];
              col = (i - (i % pixelBytes)) / pixelBytes;
              upper = row && pixels[(row - 1) * scanlineLength + col * pixelBytes + (i % pixelBytes)];
              pixels[c++] = (upper + byte) % 256;
            }
            break;
          case 3:
            for (i = _l = 0; _l < scanlineLength; i = _l += 1) {
              byte = data[pos++];
              col = (i - (i % pixelBytes)) / pixelBytes;
              left = i < pixelBytes ? 0 : pixels[c - pixelBytes];
              upper = row && pixels[(row - 1) * scanlineLength + col * pixelBytes + (i % pixelBytes)];
              pixels[c++] = (byte + Math.floor((left + upper) / 2)) % 256;
            }
            break;
          case 4:
            for (i = _m = 0; _m < scanlineLength; i = _m += 1) {
              byte = data[pos++];
              col = (i - (i % pixelBytes)) / pixelBytes;
              left = i < pixelBytes ? 0 : pixels[c - pixelBytes];
              if (row === 0) {
                upper = upperLeft = 0;
              } else {
                upper = pixels[(row - 1) * scanlineLength + col * pixelBytes + (i % pixelBytes)];
                upperLeft = col && pixels[(row - 1) * scanlineLength + (col - 1) * pixelBytes + (i % pixelBytes)];
              }
              p = left + upper - upperLeft;
              pa = Math.abs(p - left);
              pb = Math.abs(p - upper);
              pc = Math.abs(p - upperLeft);
              if (pa <= pb && pa <= pc) {
                paeth = left;
              } else if (pb <= pc) {
                paeth = upper;
              } else {
                paeth = upperLeft;
              }
              pixels[c++] = (byte + paeth) % 256;
            }
            break;
          default:
            throw new Error("Invalid filter algorithm: " + data[pos - 1]);
        }
        row++;
      }
      return pixels;
    };

    PNG.prototype.decodePalette = function() {
      var c, i, length, palette, pos, ret, transparency, _i, _ref, _ref1;
      palette = this.palette;
      transparency = this.transparency.indexed || [];
      ret = new Uint8Array((transparency.length || 0) + palette.length);
      pos = 0;
      length = palette.length;
      c = 0;
      for (i = _i = 0, _ref = palette.length; _i < _ref; i = _i += 3) {
        ret[pos++] = palette[i];
        ret[pos++] = palette[i + 1];
        ret[pos++] = palette[i + 2];
        ret[pos++] = (_ref1 = transparency[c++]) != null ? _ref1 : 255;
      }
      return ret;
    };

    PNG.prototype.copyToImageData = function(imageData, pixels) {
      var alpha, colors, data, i, input, j, k, length, palette, v, _ref;
      colors = this.colors;
      palette = null;
      alpha = this.hasAlphaChannel;
      if (this.palette.length) {
        palette = (_ref = this._decodedPalette) != null ? _ref : this._decodedPalette = this.decodePalette();
        colors = 4;
        alpha = true;
      }
      data = imageData.data || imageData;
      length = data.length;
      input = palette || pixels;
      i = j = 0;
      if (colors === 1) {
        while (i < length) {
          k = palette ? pixels[i / 4] * 4 : j;
          v = input[k++];
          data[i++] = v;
          data[i++] = v;
          data[i++] = v;
          data[i++] = alpha ? input[k++] : 255;
          j = k;
        }
      } else {
        while (i < length) {
          k = palette ? pixels[i / 4] * 4 : j;
          data[i++] = input[k++];
          data[i++] = input[k++];
          data[i++] = input[k++];
          data[i++] = alpha ? input[k++] : 255;
          j = k;
        }
      }
    };

    PNG.prototype.decode = function() {
      var ret;
      ret = new Uint8Array(this.width * this.height * 4);
      this.copyToImageData(ret, this.decodePixels());
      return ret;
    };

    PNG.prototype.render = function(canvas) {
      var ctx, data;
      canvas.width = this.width;
      canvas.height = this.height;
      ctx = canvas.getContext("2d");
      data = ctx.createImageData(this.width, this.height);
      this.copyToImageData(data, this.decodePixels());
      return ctx.putImageData(data, 0, 0);
    };

    return PNG;

  })();

  module.exports = PNG;
},{"./zlib":33}],33:[function(require,module,exports){
/*
 * Extracted from pdf.js
 * https://github.com/andreasgal/pdf.js
 *
 * Copyright (c) 2011 Mozilla Foundation
 *
 * Contributors: Andreas Gal <gal@mozilla.com>
 *               Chris G Jones <cjones@mozilla.com>
 *               Shaon Barman <shaon.barman@gmail.com>
 *               Vivien Nicolas <21@vingtetun.org>
 *               Justin D'Arcangelo <justindarc@gmail.com>
 *               Yury Delendik
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 */

var DecodeStream = (function() {
  function constructor() {
    this.pos = 0;
    this.bufferLength = 0;
    this.eof = false;
    this.buffer = null;
  }

  constructor.prototype = {
    ensureBuffer: function decodestream_ensureBuffer(requested) {
      var buffer = this.buffer;
      var current = buffer ? buffer.byteLength : 0;
      if (requested < current)
        return buffer;
      var size = 512;
      while (size < requested)
        size <<= 1;
      var buffer2 = new Uint8Array(size);
      for (var i = 0; i < current; ++i)
        buffer2[i] = buffer[i];
      return this.buffer = buffer2;
    },
    getByte: function decodestream_getByte() {
      var pos = this.pos;
      while (this.bufferLength <= pos) {
        if (this.eof)
          return null;
        this.readBlock();
      }
      return this.buffer[this.pos++];
    },
    getBytes: function decodestream_getBytes(length) {
      var pos = this.pos;

      if (length) {
        this.ensureBuffer(pos + length);
        var end = pos + length;

        while (!this.eof && this.bufferLength < end)
          this.readBlock();

        var bufEnd = this.bufferLength;
        if (end > bufEnd)
          end = bufEnd;
      } else {
        while (!this.eof)
          this.readBlock();

        var end = this.bufferLength;
      }

      this.pos = end;
      return this.buffer.subarray(pos, end);
    },
    lookChar: function decodestream_lookChar() {
      var pos = this.pos;
      while (this.bufferLength <= pos) {
        if (this.eof)
          return null;
        this.readBlock();
      }
      return String.fromCharCode(this.buffer[this.pos]);
    },
    getChar: function decodestream_getChar() {
      var pos = this.pos;
      while (this.bufferLength <= pos) {
        if (this.eof)
          return null;
        this.readBlock();
      }
      return String.fromCharCode(this.buffer[this.pos++]);
    },
    makeSubStream: function decodestream_makeSubstream(start, length, dict) {
      var end = start + length;
      while (this.bufferLength <= end && !this.eof)
        this.readBlock();
      return new Stream(this.buffer, start, length, dict);
    },
    skip: function decodestream_skip(n) {
      if (!n)
        n = 1;
      this.pos += n;
    },
    reset: function decodestream_reset() {
      this.pos = 0;
    }
  };

  return constructor;
})();

var FlateStream = (function() {
  var codeLenCodeMap = new Uint32Array([
    16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15
  ]);

  var lengthDecode = new Uint32Array([
    0x00003, 0x00004, 0x00005, 0x00006, 0x00007, 0x00008, 0x00009, 0x0000a,
    0x1000b, 0x1000d, 0x1000f, 0x10011, 0x20013, 0x20017, 0x2001b, 0x2001f,
    0x30023, 0x3002b, 0x30033, 0x3003b, 0x40043, 0x40053, 0x40063, 0x40073,
    0x50083, 0x500a3, 0x500c3, 0x500e3, 0x00102, 0x00102, 0x00102
  ]);

  var distDecode = new Uint32Array([
    0x00001, 0x00002, 0x00003, 0x00004, 0x10005, 0x10007, 0x20009, 0x2000d,
    0x30011, 0x30019, 0x40021, 0x40031, 0x50041, 0x50061, 0x60081, 0x600c1,
    0x70101, 0x70181, 0x80201, 0x80301, 0x90401, 0x90601, 0xa0801, 0xa0c01,
    0xb1001, 0xb1801, 0xc2001, 0xc3001, 0xd4001, 0xd6001
  ]);

  var fixedLitCodeTab = [new Uint32Array([
    0x70100, 0x80050, 0x80010, 0x80118, 0x70110, 0x80070, 0x80030, 0x900c0,
    0x70108, 0x80060, 0x80020, 0x900a0, 0x80000, 0x80080, 0x80040, 0x900e0,
    0x70104, 0x80058, 0x80018, 0x90090, 0x70114, 0x80078, 0x80038, 0x900d0,
    0x7010c, 0x80068, 0x80028, 0x900b0, 0x80008, 0x80088, 0x80048, 0x900f0,
    0x70102, 0x80054, 0x80014, 0x8011c, 0x70112, 0x80074, 0x80034, 0x900c8,
    0x7010a, 0x80064, 0x80024, 0x900a8, 0x80004, 0x80084, 0x80044, 0x900e8,
    0x70106, 0x8005c, 0x8001c, 0x90098, 0x70116, 0x8007c, 0x8003c, 0x900d8,
    0x7010e, 0x8006c, 0x8002c, 0x900b8, 0x8000c, 0x8008c, 0x8004c, 0x900f8,
    0x70101, 0x80052, 0x80012, 0x8011a, 0x70111, 0x80072, 0x80032, 0x900c4,
    0x70109, 0x80062, 0x80022, 0x900a4, 0x80002, 0x80082, 0x80042, 0x900e4,
    0x70105, 0x8005a, 0x8001a, 0x90094, 0x70115, 0x8007a, 0x8003a, 0x900d4,
    0x7010d, 0x8006a, 0x8002a, 0x900b4, 0x8000a, 0x8008a, 0x8004a, 0x900f4,
    0x70103, 0x80056, 0x80016, 0x8011e, 0x70113, 0x80076, 0x80036, 0x900cc,
    0x7010b, 0x80066, 0x80026, 0x900ac, 0x80006, 0x80086, 0x80046, 0x900ec,
    0x70107, 0x8005e, 0x8001e, 0x9009c, 0x70117, 0x8007e, 0x8003e, 0x900dc,
    0x7010f, 0x8006e, 0x8002e, 0x900bc, 0x8000e, 0x8008e, 0x8004e, 0x900fc,
    0x70100, 0x80051, 0x80011, 0x80119, 0x70110, 0x80071, 0x80031, 0x900c2,
    0x70108, 0x80061, 0x80021, 0x900a2, 0x80001, 0x80081, 0x80041, 0x900e2,
    0x70104, 0x80059, 0x80019, 0x90092, 0x70114, 0x80079, 0x80039, 0x900d2,
    0x7010c, 0x80069, 0x80029, 0x900b2, 0x80009, 0x80089, 0x80049, 0x900f2,
    0x70102, 0x80055, 0x80015, 0x8011d, 0x70112, 0x80075, 0x80035, 0x900ca,
    0x7010a, 0x80065, 0x80025, 0x900aa, 0x80005, 0x80085, 0x80045, 0x900ea,
    0x70106, 0x8005d, 0x8001d, 0x9009a, 0x70116, 0x8007d, 0x8003d, 0x900da,
    0x7010e, 0x8006d, 0x8002d, 0x900ba, 0x8000d, 0x8008d, 0x8004d, 0x900fa,
    0x70101, 0x80053, 0x80013, 0x8011b, 0x70111, 0x80073, 0x80033, 0x900c6,
    0x70109, 0x80063, 0x80023, 0x900a6, 0x80003, 0x80083, 0x80043, 0x900e6,
    0x70105, 0x8005b, 0x8001b, 0x90096, 0x70115, 0x8007b, 0x8003b, 0x900d6,
    0x7010d, 0x8006b, 0x8002b, 0x900b6, 0x8000b, 0x8008b, 0x8004b, 0x900f6,
    0x70103, 0x80057, 0x80017, 0x8011f, 0x70113, 0x80077, 0x80037, 0x900ce,
    0x7010b, 0x80067, 0x80027, 0x900ae, 0x80007, 0x80087, 0x80047, 0x900ee,
    0x70107, 0x8005f, 0x8001f, 0x9009e, 0x70117, 0x8007f, 0x8003f, 0x900de,
    0x7010f, 0x8006f, 0x8002f, 0x900be, 0x8000f, 0x8008f, 0x8004f, 0x900fe,
    0x70100, 0x80050, 0x80010, 0x80118, 0x70110, 0x80070, 0x80030, 0x900c1,
    0x70108, 0x80060, 0x80020, 0x900a1, 0x80000, 0x80080, 0x80040, 0x900e1,
    0x70104, 0x80058, 0x80018, 0x90091, 0x70114, 0x80078, 0x80038, 0x900d1,
    0x7010c, 0x80068, 0x80028, 0x900b1, 0x80008, 0x80088, 0x80048, 0x900f1,
    0x70102, 0x80054, 0x80014, 0x8011c, 0x70112, 0x80074, 0x80034, 0x900c9,
    0x7010a, 0x80064, 0x80024, 0x900a9, 0x80004, 0x80084, 0x80044, 0x900e9,
    0x70106, 0x8005c, 0x8001c, 0x90099, 0x70116, 0x8007c, 0x8003c, 0x900d9,
    0x7010e, 0x8006c, 0x8002c, 0x900b9, 0x8000c, 0x8008c, 0x8004c, 0x900f9,
    0x70101, 0x80052, 0x80012, 0x8011a, 0x70111, 0x80072, 0x80032, 0x900c5,
    0x70109, 0x80062, 0x80022, 0x900a5, 0x80002, 0x80082, 0x80042, 0x900e5,
    0x70105, 0x8005a, 0x8001a, 0x90095, 0x70115, 0x8007a, 0x8003a, 0x900d5,
    0x7010d, 0x8006a, 0x8002a, 0x900b5, 0x8000a, 0x8008a, 0x8004a, 0x900f5,
    0x70103, 0x80056, 0x80016, 0x8011e, 0x70113, 0x80076, 0x80036, 0x900cd,
    0x7010b, 0x80066, 0x80026, 0x900ad, 0x80006, 0x80086, 0x80046, 0x900ed,
    0x70107, 0x8005e, 0x8001e, 0x9009d, 0x70117, 0x8007e, 0x8003e, 0x900dd,
    0x7010f, 0x8006e, 0x8002e, 0x900bd, 0x8000e, 0x8008e, 0x8004e, 0x900fd,
    0x70100, 0x80051, 0x80011, 0x80119, 0x70110, 0x80071, 0x80031, 0x900c3,
    0x70108, 0x80061, 0x80021, 0x900a3, 0x80001, 0x80081, 0x80041, 0x900e3,
    0x70104, 0x80059, 0x80019, 0x90093, 0x70114, 0x80079, 0x80039, 0x900d3,
    0x7010c, 0x80069, 0x80029, 0x900b3, 0x80009, 0x80089, 0x80049, 0x900f3,
    0x70102, 0x80055, 0x80015, 0x8011d, 0x70112, 0x80075, 0x80035, 0x900cb,
    0x7010a, 0x80065, 0x80025, 0x900ab, 0x80005, 0x80085, 0x80045, 0x900eb,
    0x70106, 0x8005d, 0x8001d, 0x9009b, 0x70116, 0x8007d, 0x8003d, 0x900db,
    0x7010e, 0x8006d, 0x8002d, 0x900bb, 0x8000d, 0x8008d, 0x8004d, 0x900fb,
    0x70101, 0x80053, 0x80013, 0x8011b, 0x70111, 0x80073, 0x80033, 0x900c7,
    0x70109, 0x80063, 0x80023, 0x900a7, 0x80003, 0x80083, 0x80043, 0x900e7,
    0x70105, 0x8005b, 0x8001b, 0x90097, 0x70115, 0x8007b, 0x8003b, 0x900d7,
    0x7010d, 0x8006b, 0x8002b, 0x900b7, 0x8000b, 0x8008b, 0x8004b, 0x900f7,
    0x70103, 0x80057, 0x80017, 0x8011f, 0x70113, 0x80077, 0x80037, 0x900cf,
    0x7010b, 0x80067, 0x80027, 0x900af, 0x80007, 0x80087, 0x80047, 0x900ef,
    0x70107, 0x8005f, 0x8001f, 0x9009f, 0x70117, 0x8007f, 0x8003f, 0x900df,
    0x7010f, 0x8006f, 0x8002f, 0x900bf, 0x8000f, 0x8008f, 0x8004f, 0x900ff
  ]), 9];

  var fixedDistCodeTab = [new Uint32Array([
    0x50000, 0x50010, 0x50008, 0x50018, 0x50004, 0x50014, 0x5000c, 0x5001c,
    0x50002, 0x50012, 0x5000a, 0x5001a, 0x50006, 0x50016, 0x5000e, 0x00000,
    0x50001, 0x50011, 0x50009, 0x50019, 0x50005, 0x50015, 0x5000d, 0x5001d,
    0x50003, 0x50013, 0x5000b, 0x5001b, 0x50007, 0x50017, 0x5000f, 0x00000
  ]), 5];
  
  function error(e) {
      throw new Error(e)
  }

  function constructor(bytes) {
    //var bytes = stream.getBytes();
    var bytesPos = 0;

    var cmf = bytes[bytesPos++];
    var flg = bytes[bytesPos++];
    if (cmf == -1 || flg == -1)
      error('Invalid header in flate stream');
    if ((cmf & 0x0f) != 0x08)
      error('Unknown compression method in flate stream');
    if ((((cmf << 8) + flg) % 31) != 0)
      error('Bad FCHECK in flate stream');
    if (flg & 0x20)
      error('FDICT bit set in flate stream');

    this.bytes = bytes;
    this.bytesPos = bytesPos;

    this.codeSize = 0;
    this.codeBuf = 0;

    DecodeStream.call(this);
  }

  constructor.prototype = Object.create(DecodeStream.prototype);

  constructor.prototype.getBits = function(bits) {
    var codeSize = this.codeSize;
    var codeBuf = this.codeBuf;
    var bytes = this.bytes;
    var bytesPos = this.bytesPos;

    var b;
    while (codeSize < bits) {
      if (typeof (b = bytes[bytesPos++]) == 'undefined')
        error('Bad encoding in flate stream');
      codeBuf |= b << codeSize;
      codeSize += 8;
    }
    b = codeBuf & ((1 << bits) - 1);
    this.codeBuf = codeBuf >> bits;
    this.codeSize = codeSize -= bits;
    this.bytesPos = bytesPos;
    return b;
  };

  constructor.prototype.getCode = function(table) {
    var codes = table[0];
    var maxLen = table[1];
    var codeSize = this.codeSize;
    var codeBuf = this.codeBuf;
    var bytes = this.bytes;
    var bytesPos = this.bytesPos;

    while (codeSize < maxLen) {
      var b;
      if (typeof (b = bytes[bytesPos++]) == 'undefined')
        error('Bad encoding in flate stream');
      codeBuf |= (b << codeSize);
      codeSize += 8;
    }
    var code = codes[codeBuf & ((1 << maxLen) - 1)];
    var codeLen = code >> 16;
    var codeVal = code & 0xffff;
    if (codeSize == 0 || codeSize < codeLen || codeLen == 0)
      error('Bad encoding in flate stream');
    this.codeBuf = (codeBuf >> codeLen);
    this.codeSize = (codeSize - codeLen);
    this.bytesPos = bytesPos;
    return codeVal;
  };

  constructor.prototype.generateHuffmanTable = function(lengths) {
    var n = lengths.length;

    // find max code length
    var maxLen = 0;
    for (var i = 0; i < n; ++i) {
      if (lengths[i] > maxLen)
        maxLen = lengths[i];
    }

    // build the table
    var size = 1 << maxLen;
    var codes = new Uint32Array(size);
    for (var len = 1, code = 0, skip = 2;
         len <= maxLen;
         ++len, code <<= 1, skip <<= 1) {
      for (var val = 0; val < n; ++val) {
        if (lengths[val] == len) {
          // bit-reverse the code
          var code2 = 0;
          var t = code;
          for (var i = 0; i < len; ++i) {
            code2 = (code2 << 1) | (t & 1);
            t >>= 1;
          }

          // fill the table entries
          for (var i = code2; i < size; i += skip)
            codes[i] = (len << 16) | val;

          ++code;
        }
      }
    }

    return [codes, maxLen];
  };

  constructor.prototype.readBlock = function() {
    function repeat(stream, array, len, offset, what) {
      var repeat = stream.getBits(len) + offset;
      while (repeat-- > 0)
        array[i++] = what;
    }

    // read block header
    var hdr = this.getBits(3);
    if (hdr & 1)
      this.eof = true;
    hdr >>= 1;

    if (hdr == 0) { // uncompressed block
      var bytes = this.bytes;
      var bytesPos = this.bytesPos;
      var b;

      if (typeof (b = bytes[bytesPos++]) == 'undefined')
        error('Bad block header in flate stream');
      var blockLen = b;
      if (typeof (b = bytes[bytesPos++]) == 'undefined')
        error('Bad block header in flate stream');
      blockLen |= (b << 8);
      if (typeof (b = bytes[bytesPos++]) == 'undefined')
        error('Bad block header in flate stream');
      var check = b;
      if (typeof (b = bytes[bytesPos++]) == 'undefined')
        error('Bad block header in flate stream');
      check |= (b << 8);
      if (check != (~blockLen & 0xffff))
        error('Bad uncompressed block length in flate stream');

      this.codeBuf = 0;
      this.codeSize = 0;

      var bufferLength = this.bufferLength;
      var buffer = this.ensureBuffer(bufferLength + blockLen);
      var end = bufferLength + blockLen;
      this.bufferLength = end;
      for (var n = bufferLength; n < end; ++n) {
        if (typeof (b = bytes[bytesPos++]) == 'undefined') {
          this.eof = true;
          break;
        }
        buffer[n] = b;
      }
      this.bytesPos = bytesPos;
      return;
    }

    var litCodeTable;
    var distCodeTable;
    if (hdr == 1) { // compressed block, fixed codes
      litCodeTable = fixedLitCodeTab;
      distCodeTable = fixedDistCodeTab;
    } else if (hdr == 2) { // compressed block, dynamic codes
      var numLitCodes = this.getBits(5) + 257;
      var numDistCodes = this.getBits(5) + 1;
      var numCodeLenCodes = this.getBits(4) + 4;

      // build the code lengths code table
      var codeLenCodeLengths = Array(codeLenCodeMap.length);
      var i = 0;
      while (i < numCodeLenCodes)
        codeLenCodeLengths[codeLenCodeMap[i++]] = this.getBits(3);
      var codeLenCodeTab = this.generateHuffmanTable(codeLenCodeLengths);

      // build the literal and distance code tables
      var len = 0;
      var i = 0;
      var codes = numLitCodes + numDistCodes;
      var codeLengths = new Array(codes);
      while (i < codes) {
        var code = this.getCode(codeLenCodeTab);
        if (code == 16) {
          repeat(this, codeLengths, 2, 3, len);
        } else if (code == 17) {
          repeat(this, codeLengths, 3, 3, len = 0);
        } else if (code == 18) {
          repeat(this, codeLengths, 7, 11, len = 0);
        } else {
          codeLengths[i++] = len = code;
        }
      }

      litCodeTable =
        this.generateHuffmanTable(codeLengths.slice(0, numLitCodes));
      distCodeTable =
        this.generateHuffmanTable(codeLengths.slice(numLitCodes, codes));
    } else {
      error('Unknown block type in flate stream');
    }

    var buffer = this.buffer;
    var limit = buffer ? buffer.length : 0;
    var pos = this.bufferLength;
    while (true) {
      var code1 = this.getCode(litCodeTable);
      if (code1 < 256) {
        if (pos + 1 >= limit) {
          buffer = this.ensureBuffer(pos + 1);
          limit = buffer.length;
        }
        buffer[pos++] = code1;
        continue;
      }
      if (code1 == 256) {
        this.bufferLength = pos;
        return;
      }
      code1 -= 257;
      code1 = lengthDecode[code1];
      var code2 = code1 >> 16;
      if (code2 > 0)
        code2 = this.getBits(code2);
      var len = (code1 & 0xffff) + code2;
      code1 = this.getCode(distCodeTable);
      code1 = distDecode[code1];
      code2 = code1 >> 16;
      if (code2 > 0)
        code2 = this.getBits(code2);
      var dist = (code1 & 0xffff) + code2;
      if (pos + len >= limit) {
        buffer = this.ensureBuffer(pos + len);
        limit = buffer.length;
      }
      for (var k = 0; k < len; ++k, ++pos)
        buffer[pos] = buffer[pos - dist];
    }
  };

  return constructor;
})();

module.exports = FlateStream;
},{}],34:[function(require,module,exports){
/*
	This is rot.js, the ROguelike Toolkit in JavaScript.
	Version 0.6~dev, generated on Tue Mar 17 16:16:31 CET 2015.
*/
/**
 * @namespace Top-level ROT namespace
 */
var ROT = {
	/** Directional constants. Ordering is important! */
	DIRS: {
		"4": [
			[ 0, -1],
			[ 1,  0],
			[ 0,  1],
			[-1,  0]
		],
		"8": [
			[ 0, -1],
			[ 1, -1],
			[ 1,  0],
			[ 1,  1],
			[ 0,  1],
			[-1,  1],
			[-1,  0],
			[-1, -1]
		],
		"6": [
			[-1, -1],
			[ 1, -1],
			[ 2,  0],
			[ 1,  1],
			[-1,  1],
			[-2,  0]
		]
	}
};
/**
 * Always positive modulus
 * @param {int} n Modulus
 * @returns {int} this modulo n
 */
Number.prototype.mod = function(n) {
	return ((this%n)+n)%n;
}
if (!Object.create) {  
	/**
	 * ES5 Object.create
	 */
	Object.create = function(o) {  
		var tmp = function() {};
		tmp.prototype = o;
		return new tmp();
	};  
}  
/**
 * Sets prototype of this function to an instance of parent function
 * @param {function} parent
 */
Function.prototype.extend = function(parent) {
	this.prototype = Object.create(parent.prototype);
	this.prototype.constructor = this;
	return this;
}
if (typeof window != "undefined") {
	window.requestAnimationFrame =
		window.requestAnimationFrame
		|| window.mozRequestAnimationFrame
		|| window.webkitRequestAnimationFrame
		|| window.oRequestAnimationFrame
		|| window.msRequestAnimationFrame
		|| function(cb) { return setTimeout(cb, 1000/60); };

	window.cancelAnimationFrame =
		window.cancelAnimationFrame
		|| window.mozCancelAnimationFrame
		|| window.webkitCancelAnimationFrame
		|| window.oCancelAnimationFrame
		|| window.msCancelAnimationFrame
		|| function(id) { return clearTimeout(id); };
}
/**
 * @class Abstract FOV algorithm
 * @param {function} lightPassesCallback Does the light pass through x,y?
 * @param {object} [options]
 * @param {int} [options.topology=8] 4/6/8
 */
ROT.FOV = function(lightPassesCallback, options) {
	this._lightPasses = lightPassesCallback;
	this._options = {
		topology: 8
	}
	for (var p in options) { this._options[p] = options[p]; }
};

/**
 * Compute visibility for a 360-degree circle
 * @param {int} x
 * @param {int} y
 * @param {int} R Maximum visibility radius
 * @param {function} callback
 */
ROT.FOV.prototype.compute = function(x, y, R, callback) {}

/**
 * Return all neighbors in a concentric ring
 * @param {int} cx center-x
 * @param {int} cy center-y
 * @param {int} r range
 */
ROT.FOV.prototype._getCircle = function(cx, cy, r) {
	var result = [];
	var dirs, countFactor, startOffset;

	switch (this._options.topology) {
		case 4:
			countFactor = 1;
			startOffset = [0, 1];
			dirs = [
				ROT.DIRS[8][7],
				ROT.DIRS[8][1],
				ROT.DIRS[8][3],
				ROT.DIRS[8][5]
			]
		break;

		case 6:
			dirs = ROT.DIRS[6];
			countFactor = 1;
			startOffset = [-1, 1];
		break;

		case 8:
			dirs = ROT.DIRS[4];
			countFactor = 2;
			startOffset = [-1, 1];
		break;
	}

	/* starting neighbor */
	var x = cx + startOffset[0]*r;
	var y = cy + startOffset[1]*r;

	/* circle */
	for (var i=0;i<dirs.length;i++) {
		for (var j=0;j<r*countFactor;j++) {
			result.push([x, y]);
			x += dirs[i][0];
			y += dirs[i][1];

		}
	}

	return result;
}
/**
 * @class Precise shadowcasting algorithm
 * @augments ROT.FOV
 */
ROT.FOV.PreciseShadowcasting = function(lightPassesCallback, options) {
	ROT.FOV.call(this, lightPassesCallback, options);
}
ROT.FOV.PreciseShadowcasting.extend(ROT.FOV);

ROT.FOV.PreciseShadowcasting.prototype.compute = function(x, y, R, callback) {
	/* this place is always visible */
	callback(x, y, 0, 1);
    
	callback(x-1, y-1, 0, 1);
	callback(x, y-1, 0, 1);
	callback(x+1, y-1, 0, 1);
	callback(x-1, y, 0, 1);
	callback(x+1, y, 0, 1);
	callback(x-1, y+1, 0, 1);
	callback(x, y+1, 0, 1);
	callback(x+1, y+1, 0, 1);
    
    callback(x-1, y-2, 0, 1);
    callback(x, y-2, 0, 1);
    callback(x+1, y-2, 0, 1);
    callback(x-2, y-1, 0, 1);
    callback(x-2, y, 0, 1);
    callback(x-2, y+1, 0, 1);
    callback(x+2, y-1, 0, 1);
    callback(x+2, y, 0, 1);
    callback(x+2, y+1, 0, 1);
    callback(x-1, y+2, 0, 1);
    callback(x, y+2, 0, 1);
    callback(x+1, y+2, 0, 1);

	/* standing in a dark place. FIXME is this a good idea?  */
	if (!this._lightPasses(x, y)) { return; }
	
	/* list of all shadows */
	var SHADOWS = [];
	var trees = {};
	var totalNeighborCount = 1;
    var cx, cy, blocks, A1, A2, visibility,
        dx, dy, dd, a, b, radius,
        cx2, cy2, dd1,
        obstacleType;

	/* analyze surrounding cells in concentric rings, starting from the center */
	for (var r=1; r<=R; r++) {
		var neighbors = this._getCircle(x, y, r);
		var neighborCount = neighbors.length;
        totalNeighborCount += neighborCount;
        trees = {};
		for (var i=0;i<neighborCount;i++) {
			cx = neighbors[i][0];
			cy = neighbors[i][1];
            var key = cx+","+cy;
            if ((x-cx)*(x-cx) + (y-cy)*(y-cy) >= R * R) {
                totalNeighborCount--;
                continue;
            }
            //if (key == "44,102") //console.log('KEY', key, !this._lightPasses(cx, cy));
            // if (key == "150,160") //console.log(key, obstacleType);
            // if (key == "151,161") //console.log(key, obstacleType);
            // if (key == "150,161") //console.log(key, obstacleType);
            var obstacleTypes = obstacleTypes = this.walls[key];
            if (obstacleTypes && obstacleTypes.length) {
                var skipVisibility = false;
                for (var j = 0; j < obstacleTypes.length; j++) {
                    var obstacleType = obstacleTypes[j];
                    cx2 = obstacleType[1];
                    cy2 = obstacleType[2];
                    radius = obstacleType[3];
                    
                    dx = cx2 - x;
                    dy = cy2 - y;
                    dd = Math.sqrt(dx * dx + dy * dy);
                    if (dd > 1/2) {
                        a = Math.asin(radius / dd);
                        b = Math.atan2(dy, dx),
                        A1 = normalize(b - a),
                        A2 = normalize(b + a);
                        blocks = !this._lightPasses(cx, cy);
                        
                        dx1 = cx - x;
                        dy1 = cy - y;
                        dd1 = Math.sqrt(dx1 * dx1 + dy1 * dy1);
                        if (dd1 < dd) {
                            trees[obstacleType[1]+","+obstacleType[2]] = [obstacleType[1], obstacleType[2]];
                        }
                        
                        dx = cx - x;
                        dy = cy - y;
                        dd = Math.sqrt(dx * dx + dy * dy);
                        a = Math.asin(radius / dd);
                        b = Math.atan2(dy, dx),
                        A1 = normalize(b - a),
                        A2 = normalize(b + a);
                        visibility = this._checkVisibility(b, A1, A2, false, SHADOWS);
                        if (!visibility) skipVisibility = true;
                    }
                }
                if (visibility && !skipVisibility) { callback(cx, cy, r, visibility); }
            }
            else {
                cx2 = cx;
                cy2 = cy;
                radius = Math.SQRT2 / 2;
                
                dx = cx2 - x;
                dy = cy2 - y;
                dd = Math.sqrt(dx * dx + dy * dy);
                if (dd > 1/2) {
                    a = Math.asin(radius / dd);
                    b = Math.atan2(dy, dx),
                    A1 = normalize(b - a),
                    A2 = normalize(b + a);
                    blocks = !this._lightPasses(cx, cy);
                    
                    visibility = this._checkVisibility(b, A1, A2, blocks, SHADOWS);
                    if (visibility) { callback(cx, cy, r, visibility); }
                    if (this.done) return;
                }
            }
            
            /*dx = cx2 - x;
            dy = cy2 - y;
            dd = Math.sqrt(dx * dx + dy * dy);
            if (dd > 1/2) {
                a = Math.asin(radius / dd);
                b = Math.atan2(dy, dx),
                A1 = normalize(b - a),
                A2 = normalize(b + a);
                blocks = !this._lightPasses(cx, cy);
                if (obstacleType && obstacleType[0] == 'tree') {
                    dx1 = cx - x;
                    dy1 = cy - y;
                    dd1 = Math.sqrt(dx1 * dx1 + dy1 * dy1);
                    if (dd1 < dd) {
                        trees[obstacleType[1]+","+obstacleType[2]] = [obstacleType[1], obstacleType[2]];
                    }
                    
                    dx = cx - x;
                    dy = cy - y;
                    dd = Math.sqrt(dx * dx + dy * dy);
                    a = Math.asin(radius / dd);
                    b = Math.atan2(dy, dx),
                    A1 = normalize(b - a),
                    A2 = normalize(b + a);
                    visibility = this._checkVisibility(b, A1, A2, false, SHADOWS);
                    if (visibility) { callback(cx, cy, r, visibility); }
                }
                else {
                    //if (obstacleType) //console.log(obstacleType[0], radius);
                    //console.log('BLOCKS', cx, cy, blocks, b);
                    visibility = this._checkVisibility(b, A1, A2, blocks, SHADOWS);
                    if (visibility) { callback(cx, cy, r, visibility); }
                    if (this.done) return;
                }
            }*/

		} /* for all cells in this ring */
        
        // apply tree blockers
        for (var k in trees) {
            ////console.log('apply tree');
            cx2 = trees[k][0];
            cy2 = trees[k][1];
            dx = cx2 - x;
            dy = cy2 - y;
            dd = Math.sqrt(dx * dx + dy * dy);
            radius = Math.SQRT2 - .01;
            if (dd > 1/2) {
                a = Math.asin(radius / dd);
                b = Math.atan2(dy, dx),
                A1 = normalize(b - a),
                A2 = normalize(b + a);
                visibility = this._checkVisibility(b, A1, A2, true, SHADOWS);
                if (this.done) return;
            }
        }
	} /* for all rings */
    
    return totalNeighborCount;
}

/**
 * @param {int[2]} A1 arc start
 * @param {int[2]} A2 arc end
 * @param {bool} blocks Does current arc block visibility?
 * @param {int[][]} SHADOWS list of active shadows
 */
ROT.FOV.PreciseShadowcasting.prototype._checkVisibility = function(b, A1, A2, blocks, SHADOWS) {
    ////console.log('_checkVisibility', b, A1, A2, blocks, SHADOWS);
    // check if target center is inside a shadow
    var visible = !blocks;
    //console.log('_checkVisibility', b, visible);
	for (var i = 0; i < SHADOWS.length; i++) {
		var old = SHADOWS[i];
        if (isBetween(b, old[0], old[1])) {
            if (blocks) {
                ////console.log('blocks but not visible', SHADOWS.length);
                visible = false;
            }
            else {
                //console.log(i, b, JSON.stringify(SHADOWS));
                return false; // not visible, return
            }
        }
	}
    
    if (blocks) {
        if (A1 < 0 && A2 >= 0) {
            //console.log('splitting');
            this._mergeShadows(b, 0, A2, blocks, SHADOWS);
            this.done = false;
            this._mergeShadows(b, A1, 0, blocks, SHADOWS);
        }
        else {
            //console.log('not splitting', blocks, visible, b);
            this._mergeShadows(b, A1, A2, blocks, SHADOWS);
        }
        //console.log('end', A1, A2, JSON.stringify(SHADOWS), !isBetween(A1, SHADOWS[0][0], SHADOWS[0][1]), !isBetween(A2, SHADOWS[0][0], SHADOWS[0][1]));
        if (SHADOWS.length == 1 && (!isBetween(A1, SHADOWS[0][0], SHADOWS[0][1]) || !isBetween(A2, SHADOWS[0][0], SHADOWS[0][1])) && A1 != SHADOWS[0][0] && A2 != SHADOWS[0][1] ) {
            this.done = true;
        }
    }
    
    return visible;
}

ROT.FOV.PreciseShadowcasting.prototype._mergeShadows = function(b, A1, A2, blocks, SHADOWS) {
    ////console.log('merging', b, A1, A2);
    // check if target first edge is inside a shadow or which shadows it is between
    var index1 = 0,
        edge1 = false,
        firstIndex = 0;
    while (index1 < SHADOWS.length) {
        var old = SHADOWS[index1];
        firstIndex = index1;
        if (isBetween(A1, old[0], old[1])) {
            edge1 = true;
            break;
        }
        if (index1 > 0 && isBetween(A1, SHADOWS[index1 - 1][1], old[0])) {
            edge1 = false;
            break;
        }
        if (!isBefore(A1, old[1])) {
            index1++;
            firstIndex = index1;
            continue;
        }
        if (isBefore(A1, old[0])) {
            break;
        }
        index1++;
    }
    
    // check if target second edge is inside a shadow or which shadows it is between
    var index2 = SHADOWS.length - 1,
        edge2 = false,
        secondIndex = 0;
    while (index2 >= 0) {
        var old = SHADOWS[index2];
        secondIndex = index2;
        ////console.log(A2, old[0], old[1], isBetween(A2, old[0], old[1]))
        if (isBetween(A2, old[0], old[1])) {
            edge2 = true;
            break;
        }
        if (isBefore(A2, old[0])) {
            index2--;
            secondIndex = index2;
            continue;
        }
        if (!isBefore(A2, old[1])) {
            break;
        }
        index2--;
    }
    
    ////console.log(firstIndex, secondIndex, edge1, edge2, A1, A2);
    if (firstIndex == SHADOWS.length && !edge1 && secondIndex == 0 && edge2) firstIndex = 0;
    //if (secondIndex == -1) secondIndex = SHADOWS.length - 1;
    //console.log(firstIndex, secondIndex, edge1, edge2, A1, A2);
    //console.log(JSON.stringify(SHADOWS));
    if (SHADOWS.length == 0) {
        //console.log('empty shadows pushing', [A1, A2]);
        SHADOWS.push([A1, A2]);
    }
    /*else if (SHADOWS.length > 1 && firstIndex == SHADOWS.length && secondIndex == 0 && !edge1 && edge2) {
    
    }*/
    else {
        var new_shadow = [edge1 ? SHADOWS[firstIndex][0] : A1, edge2 ? SHADOWS[secondIndex][1] : A2];
        //console.log('new_shadow', new_shadow);
        secondIndex = Math.max(firstIndex, secondIndex);
        var sum1 = diff_sum(SHADOWS);
        var doShift = false;
        if (isBetween(0, new_shadow[0], new_shadow[1]) && new_shadow[0] != 0 && new_shadow[1] != 0) {
            //console.log('crosses 0');
            SHADOWS.splice(firstIndex, firstIndex == secondIndex && edge1 == edge2 && !edge1 ? 0 : secondIndex - firstIndex + 1, [new_shadow[0], 0]);
            //console.log([new_shadow[0], 0], JSON.stringify(SHADOWS));
            if (SHADOWS[0][0] != 0 && SHADOWS[0][1] != new_shadow[1]) {
                SHADOWS.splice(firstIndex + 1, 0, [0, new_shadow[1]]);
                //console.log([0, new_shadow[1]], JSON.stringify(SHADOWS));
            }
            //console.log(JSON.stringify(SHADOWS));
            doShift = true;
        }
        else {
            SHADOWS.splice(firstIndex, firstIndex == secondIndex && edge1 == edge2 && !edge1 ? 0 : secondIndex - firstIndex + 1, new_shadow);
        }
        var sum2 = diff_sum(SHADOWS);
        //console.log('sum1', sum1, 'sum2', sum2, sum2 < sum1, SHADOWS.length == 1 && (!isBetween(A1, SHADOWS[0][0], SHADOWS[0][1]) || !isBetween(A2, SHADOWS[0][0], SHADOWS[0][1])));
        if (sum2 < sum1) this.done = true;
        /*if (SHADOWS.length == 1 && (!isBetween(A1, SHADOWS[0][0], SHADOWS[0][1]) || !isBetween(A2, SHADOWS[0][0], SHADOWS[0][1]))) {
            this.done = true;
        }*/
        if (new_shadow[0] == 0 || doShift) {
            var count = 0;
            //console.log('shifting');
            while (SHADOWS[0][0] != 0) {
                SHADOWS.push(SHADOWS.shift());
                if (count >= SHADOWS.length) break;
                count++;
                //console.log(JSON.stringify(SHADOWS));
            }
            //console.log('end shifting', JSON.stringify(SHADOWS));
        }
        //console.log(JSON.stringify(SHADOWS));
        //console.log(diff_sum(SHADOWS));
    }
}

function isBefore(A1, A2) {
    if (A1 > 0 && A2 < 0) { // A1 in bottom half, A2 in top half
        return true;
    }
    else if (A2 > 0 && A1 < 0) { // A1 in top half, A2 in bottom half
        return false;
    }
    else {
        return A1 < A2;
    }
}

function isAfter(A1, A2) {
    return !isBefore(A1, A2);
}

function isBetween(b, A1, A2) {
    if (A1 < A2) {
        return ((A1 <= b) && (b <= A2));
    }
    else {
        return ((A1 <= b) && (b <= Math.PI)) || ((-Math.PI <= b) && (b <= A2));
    }
}

function normalize(x) {
    if (x > Math.PI) {
        return -(2 * Math.PI - x);
    }
    else if ( x < -Math.PI) {
        return 2 * Math.PI + x;
    }
    else {
        return x;
    }
}

function diff(A1, A2) {
    if (A1 > 0 && A2 < 0) { // A1 in bottom half, A2 in top half
        return Math.abs((Math.PI - A1) - (-Math.PI - A2));
    }
    else if (A2 > 0 && A1 < 0) { // A1 in top half, A2 in bottom half
        return Math.abs(-A1 + A2);
    }
    if (A1 <= 0 && A2 <= 0) { // A1,A2 in bottom half
        if (isAfter(A1, A2)) { // A1 after A2
            return -A1 + Math.PI - (-Math.PI - A2)
        }
        else {
            return Math.abs(A2 - A1);
        }
    }
    else {
        if (isAfter(A1, A2)) {
            return Math.PI + (Math.PI - A1) + A2
        }
        else {
            return Math.abs(A2 - A1);
        }
    }
}

function diff_sum(SHADOWS) {
    var sum = 0;
    for (var i = 0; i < SHADOWS.length; i++) {
        ////console.log(SHADOWS[i][0], SHADOWS[i][1], diff(SHADOWS[i][0], SHADOWS[i][1]));
        sum += diff(SHADOWS[i][0], SHADOWS[i][1]);
    }
    return sum;
}

module.exports = ROT;
},{}],35:[function(require,module,exports){
var ImageHandler = require("./imageHandler.js");
var ROT = require("./rot6.js");

var key2pt_cache = {};
function key2pt(key) {
    if (key in key2pt_cache) return key2pt_cache[key];
    var p = key.split(',').map(function (c) { return parseInt(c) });
    var pt = {x: p[0], y: p[1], key: key};
    key2pt_cache[key] = pt;
    return pt;
}

function xy2key(x, y) {
    return x + "," + y;
}

function xy2pt(x, y) {
    return {x: x, y: y, key: x + "," + y};
}

function pt2key(pt) {
    return pt.x + "," + pt.y;
}

function generateElevationWalls(data, elevation) {
    var t1 = Date.now();
    var walls = {};
    for (var key in data) {
        var pt = data[key];
        if (pt.z > elevation) {
            adjLoop:
            for (var i = -1; i <= 1; i++) {
                for (var j = -1; j <= 1; j++) {
                    if (0 !== i || 0 !== j) {
                        var k = (pt.x + i) + "," + (pt.y + j);
                        if (data[k] && data[k].z <= elevation) {
                            walls[pt.key] = pt;
                            break adjLoop;
                        }
                    }
                }
            }
        }
    }
    console.log('generateElevationWalls', Date.now() - t1 + 'ms');
    return walls;
}

function setElevationWalls(obj, data, elevation) {
    for (var i = 0; i < data[elevation].length; i++) {
        var el = data[elevation][i];
        obj[el[1] + "," + el[2]] = el;
    }
}

function setWalls(obj, data, id, r) {
    id = id || 'wall';
    r = r || (Math.SQRT2 / 2);
    for (var i in data) {
        obj[i] = [id, data[i].x, data[i].y, r];
    }
}

function setTreeWalls(obj, elevation, tree, tree_elevations, tree_state, tree_blocks) {
    for (var i in tree) {
        if (elevation < tree_elevations[i]) {
            if (tree_state[i]) {
                //obj[i] = ['tree', tree[i].x, tree[i].y, Math.SQRT2];
                tree_blocks[i].forEach(function (pt) {
                    var k = pt.x + "," + pt.y;
                    obj[k] = (obj[k] || []).concat([['tree', tree[i].x, tree[i].y, Math.SQRT2]]);
                });
            }
        }
    }
}

function VisionSimulation(worlddata, mapDataImagePath, onReady, opts) {
    var self = this;
    
    this.opts = opts || {};
    this.grid = [];
    this.gridnav = null;
    this.ent_fow_blocker_node = null;
    this.tools_no_wards = null;
    this.elevationValues = [];
    this.elevationGrid = null;
    this.elevationWalls = {};
    this.treeWalls = {};
    this.tree = {}; // center key to point map
    this.tree_blocks = {}; // center to corners map
    this.tree_relations = {}; // corner to center map
    this.tree_elevations = {};
    this.tree_state = {};
    this.walls = {};
    this.radius = this.opts.radius || parseInt(1600 / 64);
    this.lights = {};
    this.worldMinX = worlddata.worldMinX;
    this.worldMinY = worlddata.worldMinY;
    this.worldMaxX = worlddata.worldMaxX;
    this.worldMaxY = worlddata.worldMaxY;
    this.worldWidth = this.worldMaxX - this.worldMinX;
    this.worldHeight = this.worldMaxY - this.worldMinY;
    this.gridWidth = this.worldWidth / 64 + 1;
    this.gridHeight = this.worldHeight / 64 + 1;
    this.ready = false;
    this.area = 0;
    
    this.imageHandler = new ImageHandler(mapDataImagePath);
    var t1 = Date.now();
    this.imageHandler.load(function () {
        var t2 = Date.now();
        console.log('image load', t2 - t1 + 'ms');
        self.gridnav = parseImage(self.imageHandler, self.gridWidth * 2, self.gridWidth, self.gridHeight, blackPixelHandler);
        self.ent_fow_blocker_node = parseImage(self.imageHandler, self.gridWidth * 3, self.gridWidth, self.gridHeight, blackPixelHandler);
        self.tools_no_wards = parseImage(self.imageHandler, self.gridWidth * 4, self.gridWidth, self.gridHeight, blackPixelHandler);
        parseImage(self.imageHandler, self.gridWidth, self.gridWidth, self.gridHeight, treeElevationPixelHandler);
        self.elevationGrid = parseImage(self.imageHandler, 0, self.gridWidth, self.gridHeight, elevationPixelHandler);
        var t3 = Date.now();
        console.log('image process', t3 - t2 + 'ms');
        self.elevationValues.forEach(function (elevation) {
            //self.elevationWalls[elevation] = generateElevationWalls(self.elevationGrid, elevation);
            self.treeWalls[elevation] = {};
            setTreeWalls(self.treeWalls[elevation], elevation, self.tree, self.tree_elevations, self.tree_state, self.tree_blocks)
        });
        var t4 = Date.now();
        console.log('walls generation', t4 - t3 + 'ms');
        for (var i = 0; i < self.gridWidth; i++) {
            self.grid[i] = [];
            for (var j = 0; j < self.gridHeight; j++) {
                var pt = xy2pt(i, j);
                key2pt_cache[pt.key] = pt;
                self.grid[i].push(pt);
            }
        }
        var t5 = Date.now();
        console.log('cache prime', t5 - t4 + 'ms');
        self.ready = true;
        onReady();
    });

    function parseImage(imageHandler, offset, width, height, pixelHandler) {
        var grid = {};
        imageHandler.scan(offset, width, height, pixelHandler, grid);
        return grid;
    }

    function blackPixelHandler(x, y, p, grid) {
        var pt = self.ImageXYtoGridXY(x, y);
        if (p[0] === 0) {
            grid[pt.x + "," + pt.y] = pt;
        }
    }

    
    function elevationPixelHandler(x, y, p, grid) {
        var pt = self.ImageXYtoGridXY(x, y);
        pt.z = p[0];
        grid[pt.x + "," + pt.y] = pt;
        if (self.elevationValues.indexOf(p[0]) == -1) {
            self.elevationValues.push(p[0]);
        }
    }

    function treeElevationPixelHandler(x, y, p, grid) {
        var pt = self.ImageXYtoGridXY(x, y);
        if (p[1] == 0 && p[2] == 0) {
            // trees are 2x2 in grid
            // tree origins rounded up when converted to grid, so they represent top right corner. subtract 0.5 to get grid origin
            var treeOrigin = xy2pt(pt.x - 0.5, pt.y - 0.5);
            var treeElevation = p[0] + 40;
            var kC = treeOrigin.key;
            self.tree[kC] = treeOrigin;
            self.tree_elevations[kC] = treeElevation;
            self.tree_blocks[kC] = [];
            self.tree_state[kC] = true;
            // iterate through tree 2x2 by taking floor and ceil of tree grid origin
            [Math.floor, Math.ceil].forEach(function (i) {
                [Math.floor, Math.ceil].forEach(function (j) {
                    var treeCorner = xy2pt(i(treeOrigin.x), j(treeOrigin.y));
                    self.tree_relations[treeCorner.key] = (self.tree_relations[treeCorner.key] || []).concat(treeOrigin);
                    self.tree_blocks[kC].push(treeCorner);
                });
            });
        }
    }

    this.lightPassesCallback = function (x, y) {
        var key = x + ',' + y;
        return !(key in self.elevationWalls[self.elevation]) && !(key in self.ent_fow_blocker_node) && !(key in self.treeWalls[self.elevation] && self.treeWalls[self.elevation][key].length > 0) ;
    }
    
    this.fov = new ROT.FOV.PreciseShadowcasting(this.lightPassesCallback, {topology:8});
}
VisionSimulation.prototype.updateVisibility = function (gX, gY, radius) {
    var self = this,
        key = xy2key(gX, gY);

    radius = radius || self.radius;
    this.elevation = this.elevationGrid[key].z;
    this.walls = this.treeWalls[this.elevation];
    if (!this.elevationWalls[this.elevation]) this.elevationWalls[this.elevation] = generateElevationWalls(this.elevationGrid, this.elevation);
    //setElevationWalls(this.walls, this.elevationWalls, this.elevation)
    //setWalls(this.walls, this.ent_fow_blocker_node);
    //setWalls(this.walls, this.tools_no_wards);
    //setTreeWalls(this.walls, this.elevation, this.tree, this.tree_elevations, this.tree_state, this.tree_blocks);

    this.fov.walls = this.walls;
    this.lights = {};
    this.area = this.fov.compute(gX, gY, radius, function(x2, y2, r, vis) {
        var key = xy2key(x2, y2);
        if (!self.elevationGrid[key]) return;
        var treePts = self.tree_relations[key];
        var treeBlocking = false;
        if (treePts) {
            for (var i = 0; i < treePts.length; i++) {
                var treePt = treePts[i];
                treeBlocking = self.tree_state[treePt.key] && self.tree_elevations[treePt.key] > self.elevation;
                if (treeBlocking) break;
            }
        }
        if (vis == 1 && !self.ent_fow_blocker_node[key] && !treeBlocking) {
            self.lights[key] = 255;
        }
    });
    this.lightArea = Object.keys(this.lights).length;
}

VisionSimulation.prototype.isValidXY = function (x, y, bCheckGridnav, bCheckToolsNoWards, bCheckTreeState) {
    if (!this.ready) return false;
    
    var key = xy2key(x, y),
        treeBlocking = false;
        
    if (bCheckTreeState) {
        var treePts = this.tree_relations[key];
        if (treePts) {
            for (var i = 0; i < treePts.length; i++) {
                var treePt = treePts[i];
                treeBlocking = this.tree_state[treePt.key];
                if (treeBlocking) break;
            }
        }
    }
    
    return x >= 0 && x < this.gridWidth && y >= 0 && y < this.gridHeight && (!bCheckGridnav || !this.gridnav[key]) && (!bCheckToolsNoWards || !this.tools_no_wards[key]) && (!bCheckTreeState || !treeBlocking);
}

VisionSimulation.prototype.toggleTree = function (x, y) {
    var self = this;
    var key = xy2key(x, y);
    var isTree = !!this.tree_relations[key];
    if (isTree) {
        var treePts = this.tree_relations[key];
        for (var i = 0; i < treePts.length; i++) {
            var pt = treePts[i];
            this.tree_state[pt.key] = !this.tree_state[pt.key];
            
            this.elevationValues.forEach(function (elevation) {
                if (elevation < self.tree_elevations[pt.key]) {
                    self.tree_blocks[pt.key].forEach(function (ptB) {
                        for (var j = self.treeWalls[elevation][ptB.key].length - 1; j >= 0; j--) {
                            if (pt.x == self.treeWalls[elevation][ptB.key][j][1] && pt.y == self.treeWalls[elevation][ptB.key][j][2]) {
                                self.treeWalls[elevation][ptB.key].splice(j, 1);
                            }
                        }
                    });
                    if (self.tree_state[pt.key]) {
                        self.tree_blocks[pt.key].forEach(function (ptB) {
                            self.treeWalls[elevation][ptB.key] = (self.treeWalls[elevation][ptB.key] || []).concat([['tree', pt.x, pt.y, Math.SQRT2]]);
                        });
                    }
                }
            });
        }
    }

    return isTree;
}
VisionSimulation.prototype.setRadius = function (r) {
    this.radius = r;
}
VisionSimulation.prototype.WorldXYtoGridXY = function (wX, wY, bNoRound) {
    var x = (wX - this.worldMinX) / 64,
        y = (wY - this.worldMinY) / 64;
    if (!bNoRound) {
        x = parseInt(Math.round(x))
        y = parseInt(Math.round(y))
    }
    return {x: x, y: y, key: x + ',' + y};
}
VisionSimulation.prototype.GridXYtoWorldXY = function (gX, gY) {
    return {x: gX * 64 + this.worldMinX, y: gY * 64 + this.worldMinY};
}

VisionSimulation.prototype.GridXYtoImageXY = function (gX, gY) {
    return {x: gX, y: this.gridHeight - gY - 1};
}

VisionSimulation.prototype.ImageXYtoGridXY = function (x, y) {
    var gY = this.gridHeight - y - 1;
    return {x: x, y: gY, key: x + ',' + gY};
}

VisionSimulation.prototype.WorldXYtoImageXY = function (wX, wY) {
    var pt = this.WorldXYtoGridXY(wX, wY);
    return this.GridXYtoImageXY(pt.x, pt.y);
}

VisionSimulation.prototype.key2pt = key2pt;
VisionSimulation.prototype.xy2key = xy2key;
VisionSimulation.prototype.xy2pt = xy2pt;
VisionSimulation.prototype.pt2key = pt2key;

module.exports = VisionSimulation;
},{"./imageHandler.js":31,"./rot6.js":34}],36:[function(require,module,exports){
module.exports={"worldMinX":-8288,"worldMaxX":8288,"worldMinY":-8288,"worldMaxY":8288}
},{}]},{},[17])(17)
});
//# sourceMappingURL=bundle-4eac1c0.js.map