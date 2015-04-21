// Compiled by ClojureScript 0.0-3208 {}
goog.provide('parature.core');
goog.require('cljs.core');
goog.require('dommy.core');
HTMLCollection.prototype.cljs$core$ISeqable$ = true;

HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (array){
var array__$1 = this;
return cljs.core.array_seq.call(null,array__$1,(0));
});
parature.core.click_handler = (function parature$core$click_handler(e){
return console.log("you clicked!");
});
parature.core.console_log = (function parature$core$console_log(message){
return console.log(message);
});
parature.core.attr = (function parature$core$attr(el,key){
return el.getAttribute(key);
});
parature.core.data = (function parature$core$data(el,key){
return el.getAttribute([cljs.core.str("data-"),cljs.core.str(key)].join(''));
});
parature.core.target = (function parature$core$target(event){
return event.target;
});
parature.core.domready = (function parature$core$domready(handler){
return window.addEventListener("DOMContentLoaded",handler);
});
parature.core.by_id = (function parature$core$by_id(id){
return document.getElementById(cljs.core.name.call(null,id));
});
parature.core.extract_inputs = (function parature$core$extract_inputs(form){
var inputs = form.getElementsByTagName("input");
var filtered = cljs.core.filter.call(null,((function (inputs){
return (function (p1__7265_SHARP_){
return cljs.core.re_find.call(null,/^x_/,[cljs.core.str(parature.core.attr.call(null,p1__7265_SHARP_,"name"))].join(''));
});})(inputs))
,inputs);
var seq__7270 = cljs.core.seq.call(null,filtered);
var chunk__7271 = null;
var count__7272 = (0);
var i__7273 = (0);
while(true){
if((i__7273 < count__7272)){
var input = cljs.core._nth.call(null,chunk__7271,i__7273);
console.log(parature.core.attr.call(null,input,"name"));

var G__7274 = seq__7270;
var G__7275 = chunk__7271;
var G__7276 = count__7272;
var G__7277 = (i__7273 + (1));
seq__7270 = G__7274;
chunk__7271 = G__7275;
count__7272 = G__7276;
i__7273 = G__7277;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__7270);
if(temp__4126__auto__){
var seq__7270__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7270__$1)){
var c__5118__auto__ = cljs.core.chunk_first.call(null,seq__7270__$1);
var G__7278 = cljs.core.chunk_rest.call(null,seq__7270__$1);
var G__7279 = c__5118__auto__;
var G__7280 = cljs.core.count.call(null,c__5118__auto__);
var G__7281 = (0);
seq__7270 = G__7278;
chunk__7271 = G__7279;
count__7272 = G__7280;
i__7273 = G__7281;
continue;
} else {
var input = cljs.core.first.call(null,seq__7270__$1);
console.log(parature.core.attr.call(null,input,"name"));

var G__7282 = cljs.core.next.call(null,seq__7270__$1);
var G__7283 = null;
var G__7284 = (0);
var G__7285 = (0);
seq__7270 = G__7282;
chunk__7271 = G__7283;
count__7272 = G__7284;
i__7273 = G__7285;
continue;
}
} else {
return null;
}
}
break;
}
});
parature.core.submit_handler = (function parature$core$submit_handler(event){
event.preventDefault();

console.log("submit handler");

return parature.core.extract_inputs.call(null,parature.core.target.call(null,event));
});
parature.core.on_submit = (function parature$core$on_submit(selector){
return parature.core.by_id.call(null,selector).addEventListener("submit",parature.core.submit_handler);
});
parature.core.werd = (function parature$core$werd(event){
event.preventDefault();

return console.log("yep");
});
parature.core.domready.call(null,(function (){
console.log("dom is ready");

return parature.core.on_submit.call(null,"hello");
}));

//# sourceMappingURL=core.js.map