!function(t){"function"==typeof define&&define.amd?define(["picker","jquery"],t):"object"==typeof exports?module.exports=t(require("./picker.js"),require("jquery")):t(Picker,jQuery)}(function(t,e){function i(t,e){var i=this,r=t.$node[0].value,n=t.$node.data("value"),a=n||r,s=n?e.formatSubmit:e.format;i.settings=e,i.$node=t.$node,i.queue={interval:"i",min:"measure create",max:"measure create",now:"now create",select:"parse create validate",highlight:"parse create validate",view:"parse create validate",disable:"deactivate",enable:"activate"},i.item={},i.item.clear=null,i.item.interval=e.interval||30,i.item.disable=(e.disable||[]).slice(0),i.item.enable=-function(t){return t[0]===!0?t.shift():-1}(i.item.disable),i.set("min",e.min).set("max",e.max).set("now"),a?i.set("select",a,{format:s,fromValue:!!r}):i.set("select",null).set("highlight",i.item.now),i.key={40:1,38:-1,39:1,37:-1,go:function(t){i.set("highlight",i.item.highlight.pick+t*i.item.interval,{interval:t*i.item.interval}),this.render()}},t.on("render",function(){var i=t.$root.children(),r=i.find("."+e.klass.viewset),n=function(t){return["webkit","moz","ms","o",""].map(function(e){return(e?"-"+e+"-":"")+t})},a=function(t,e){n("transform").map(function(i){t.css(i,e)}),n("transition").map(function(i){t.css(i,e)})};r.length&&(a(i,"none"),i[0].scrollTop=~~r.position().top-2*r[0].clientHeight,a(i,""))},1).on("open",function(){t.$root.find("button").attr("disabled",!1)},1).on("close",function(){t.$root.find("button").attr("disabled",!0)},1)}var r=24,n=60,a=12,s=r*n,o=t._;i.prototype.set=function(t,e,i){var r=this,n=r.item;return null===e?("clear"==t&&(t="select"),n[t]=e,r):(n["enable"==t?"disable":"flip"==t?"enable":t]=r.queue[t].split(" ").map(function(n){return e=r[n](t,e,i)}).pop(),"select"==t?r.set("highlight",n.select,i):"highlight"==t?r.set("view",n.highlight,i):"interval"==t?r.set("min",n.min,i).set("max",n.max,i):t.match(/^(flip|min|max|disable|enable)$/)&&("min"==t&&r.set("max",n.max,i),n.select&&r.disabled(n.select)&&r.set("select",n.select,i),n.highlight&&r.disabled(n.highlight)&&r.set("highlight",n.highlight,i)),r)},i.prototype.get=function(t){return this.item[t]},i.prototype.create=function(t,i,a){var l=this;return i=void 0===i?t:i,o.isDate(i)&&(i=[i.getHours(),i.getMinutes()]),e.isPlainObject(i)&&o.isInteger(i.pick)?i=i.pick:e.isArray(i)?i=+i[0]*n+ +i[1]:o.isInteger(i)||(i=l.now(t,i,a)),"max"==t&&i<l.item.min.pick&&(i+=s),"min"!=t&&"max"!=t&&(i-l.item.min.pick)%l.item.interval!==0&&(i+=l.item.interval),i=l.normalize(t,i,a),{hour:~~(r+i/n)%r,mins:(n+i%n)%n,time:(s+i)%s,pick:i}},i.prototype.createRange=function(t,i){var r=this,n=function(t){return t===!0||e.isArray(t)||o.isDate(t)?r.create(t):t};return o.isInteger(t)||(t=n(t)),o.isInteger(i)||(i=n(i)),o.isInteger(t)&&e.isPlainObject(i)?t=[i.hour,i.mins+t*r.settings.interval]:o.isInteger(i)&&e.isPlainObject(t)&&(i=[t.hour,t.mins+i*r.settings.interval]),{from:n(t),to:n(i)}},i.prototype.withinRange=function(t,e){return t=this.createRange(t.from,t.to),e.pick>=t.from.pick&&e.pick<=t.to.pick},i.prototype.overlapRanges=function(t,e){var i=this;return t=i.createRange(t.from,t.to),e=i.createRange(e.from,e.to),i.withinRange(t,e.from)||i.withinRange(t,e.to)||i.withinRange(e,t.from)||i.withinRange(e,t.to)},i.prototype.now=function(t,e){var i,r=this.item.interval,a=new Date,s=a.getHours()*n+a.getMinutes(),l=o.isInteger(e);return s-=s%r,i=0>e&&-r>=r*e+s,s+="min"==t&&i?0:r,l&&(s+=r*(i&&"max"!=t?e+1:e)),s},i.prototype.normalize=function(t,e){var i=this.item.interval,r=this.item.min&&this.item.min.pick||0;return e-="min"==t?0:(e-r)%i},i.prototype.measure=function(t,i,a){var s=this;return i||(i="min"==t?[0,0]:[r-1,n-1]),"string"==typeof i?i=s.parse(t,i):i===!0||o.isInteger(i)?i=s.now(t,i,a):e.isPlainObject(i)&&o.isInteger(i.pick)&&(i=s.normalize(t,i.pick,a)),i},i.prototype.validate=function(t,e,i){var r=this,n=i&&i.interval?i.interval:r.item.interval;return r.disabled(e)&&(e=r.shift(e,n)),e=r.scope(e),r.disabled(e)&&(e=r.shift(e,-1*n)),e},i.prototype.disabled=function(t){var i=this,r=i.item.disable.filter(function(r){return o.isInteger(r)?t.hour==r:e.isArray(r)||o.isDate(r)?t.pick==i.create(r).pick:e.isPlainObject(r)?i.withinRange(r,t):void 0});return r=r.length&&!r.filter(function(t){return e.isArray(t)&&"inverted"==t[2]||e.isPlainObject(t)&&t.inverted}).length,-1===i.item.enable?!r:r||t.pick<i.item.min.pick||t.pick>i.item.max.pick},i.prototype.shift=function(t,e){var i=this,r=i.item.min.pick,n=i.item.max.pick;for(e=e||i.item.interval;i.disabled(t)&&(t=i.create(t.pick+=e),!(t.pick<=r||t.pick>=n)););return t},i.prototype.scope=function(t){var e=this.item.min.pick,i=this.item.max.pick;return this.create(t.pick>i?i:t.pick<e?e:t)},i.prototype.parse=function(t,e,i){var r,a,s,l,c,m=this,u={};if(!e||"string"!=typeof e)return e;i&&i.format||(i=i||{},i.format=m.settings.format),m.formats.toArray(i.format).map(function(t){var i,r=m.formats[t],n=r?o.trigger(r,m,[e,u]):t.replace(/^!/,"").length;r&&(i=e.substr(0,n),u[t]=i.match(/^\d+$/)?+i:i),e=e.substr(n)});for(l in u)c=u[l],o.isInteger(c)?l.match(/^(h|hh)$/i)?(r=c,("h"==l||"hh"==l)&&(r%=12)):"i"==l&&(a=c):l.match(/^a$/i)&&c.match(/^p/i)&&("h"in u||"hh"in u)&&(s=!0);return(s?r+12:r)*n+a},i.prototype.formats={h:function(t,e){return t?o.digits(t):e.hour%a||a},hh:function(t,e){return t?2:o.lead(e.hour%a||a)},H:function(t,e){return t?o.digits(t):""+e.hour%24},HH:function(t,e){return t?o.digits(t):o.lead(e.hour%24)},i:function(t,e){return t?2:o.lead(e.mins)},a:function(t,e){return t?4:s/2>e.time%s?"a.m.":"p.m."},A:function(t,e){return t?2:s/2>e.time%s?"AM":"PM"},toArray:function(t){return t.split(/(h{1,2}|H{1,2}|i|a|A|!.)/g)},toString:function(t,e){var i=this;return i.formats.toArray(t).map(function(t){return o.trigger(i.formats[t],i,[0,e])||t.replace(/^!/,"")}).join("")}},i.prototype.isTimeExact=function(t,i){var r=this;return o.isInteger(t)&&o.isInteger(i)||"boolean"==typeof t&&"boolean"==typeof i?t===i:(o.isDate(t)||e.isArray(t))&&(o.isDate(i)||e.isArray(i))?r.create(t).pick===r.create(i).pick:e.isPlainObject(t)&&e.isPlainObject(i)?r.isTimeExact(t.from,i.from)&&r.isTimeExact(t.to,i.to):!1},i.prototype.isTimeOverlap=function(t,i){var r=this;return o.isInteger(t)&&(o.isDate(i)||e.isArray(i))?t===r.create(i).hour:o.isInteger(i)&&(o.isDate(t)||e.isArray(t))?i===r.create(t).hour:e.isPlainObject(t)&&e.isPlainObject(i)?r.overlapRanges(t,i):!1},i.prototype.flipEnable=function(t){var e=this.item;e.enable=t||(-1==e.enable?1:-1)},i.prototype.deactivate=function(t,i){var r=this,n=r.item.disable.slice(0);return"flip"==i?r.flipEnable():i===!1?(r.flipEnable(1),n=[]):i===!0?(r.flipEnable(-1),n=[]):i.map(function(t){for(var i,a=0;a<n.length;a+=1)if(r.isTimeExact(t,n[a])){i=!0;break}i||(o.isInteger(t)||o.isDate(t)||e.isArray(t)||e.isPlainObject(t)&&t.from&&t.to)&&n.push(t)}),n},i.prototype.activate=function(t,i){var r=this,n=r.item.disable,a=n.length;return"flip"==i?r.flipEnable():i===!0?(r.flipEnable(1),n=[]):i===!1?(r.flipEnable(-1),n=[]):i.map(function(t){var i,s,l,c;for(l=0;a>l;l+=1){if(s=n[l],r.isTimeExact(s,t)){i=n[l]=null,c=!0;break}if(r.isTimeOverlap(s,t)){e.isPlainObject(t)?(t.inverted=!0,i=t):e.isArray(t)?(i=t,i[2]||i.push("inverted")):o.isDate(t)&&(i=[t.getFullYear(),t.getMonth(),t.getDate(),"inverted"]);break}}if(i)for(l=0;a>l;l+=1)if(r.isTimeExact(n[l],t)){n[l]=null;break}if(c)for(l=0;a>l;l+=1)if(r.isTimeOverlap(n[l],t)){n[l]=null;break}i&&n.push(i)}),n.filter(function(t){return null!=t})},i.prototype.i=function(t,e){return o.isInteger(e)&&e>0?e:this.item.interval},i.prototype.nodes=function(t){var e=this,i=e.settings,r=e.item.select,n=e.item.highlight,a=e.item.view,s=e.item.disable;return o.node("ul",o.group({min:e.item.min.pick,max:e.item.max.pick,i:e.item.interval,node:"li",item:function(t){t=e.create(t);var l=t.pick,c=r&&r.pick==l,m=n&&n.pick==l,u=s&&e.disabled(t);return[o.trigger(e.formats.toString,e,[o.trigger(i.formatLabel,e,[t])||i.format,t]),function(t){return c&&t.push(i.klass.selected),m&&t.push(i.klass.highlighted),a&&a.pick==l&&t.push(i.klass.viewset),u&&t.push(i.klass.disabled),t.join(" ")}([i.klass.listItem]),"data-pick="+t.pick+" "+o.ariaAttr({role:"option",selected:c&&e.$node.val()===o.trigger(e.formats.toString,e,[i.format,t])?!0:null,activedescendant:m?!0:null,disabled:u?!0:null})]}})+o.node("li",o.node("button",i.clear,i.klass.buttonClear,"type=button data-clear=1"+(t?"":" disabled")+" "+o.ariaAttr({controls:e.$node[0].id})),"",o.ariaAttr({role:"presentation"})),i.klass.list,o.ariaAttr({role:"listbox",controls:e.$node[0].id}))},i.defaults=function(t){return{clear:"Clear",format:"h:i A",interval:30,klass:{picker:t+" "+t+"--time",holder:t+"__holder",list:t+"__list",listItem:t+"__list-item",disabled:t+"__list-item--disabled",selected:t+"__list-item--selected",highlighted:t+"__list-item--highlighted",viewset:t+"__list-item--viewset",now:t+"__list-item--now",buttonClear:t+"__button--clear"}}}(t.klasses().picker),t.extend("pickatime",i)});