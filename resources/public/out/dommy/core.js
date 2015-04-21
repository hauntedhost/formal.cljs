// Compiled by ClojureScript 0.0-3208 {}
goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('dommy.utils');
goog.require('clojure.string');
/**
 * Returns a selector in string format.
 * Accepts string, keyword, or collection.
 */
dommy.core.selector = (function dommy$core$selector(data){
if(cljs.core.coll_QMARK_.call(null,data)){
return clojure.string.join.call(null," ",cljs.core.map.call(null,dommy$core$selector,data));
} else {
if((typeof data === 'string') || ((data instanceof cljs.core.Keyword))){
return cljs.core.name.call(null,data);
} else {
return null;
}
}
});
dommy.core.text = (function dommy$core$text(elem){
var or__4333__auto__ = elem.textContent;
if(cljs.core.truth_(or__4333__auto__)){
return or__4333__auto__;
} else {
return elem.innerText;
}
});
dommy.core.html = (function dommy$core$html(elem){
return elem.innerHTML;
});
dommy.core.value = (function dommy$core$value(elem){
return elem.value;
});
dommy.core.class$ = (function dommy$core$class(elem){
return elem.className;
});
dommy.core.attr = (function dommy$core$attr(elem,k){
if(cljs.core.truth_(k)){
return elem.getAttribute(dommy.utils.as_str.call(null,k));
} else {
return null;
}
});
/**
 * The computed style of `elem`, optionally specifying the key of
 * a particular style to return
 */
dommy.core.style = (function dommy$core$style(){
var G__5677 = arguments.length;
switch (G__5677) {
case 1:
return dommy.core.style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

dommy.core.style.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return cljs.core.js__GT_clj.call(null,window.getComputedStyle(elem));
});

dommy.core.style.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return (window.getComputedStyle(elem)[dommy.utils.as_str.call(null,k)]);
});

dommy.core.style.cljs$lang$maxFixedArity = 2;
dommy.core.px = (function dommy$core$px(elem,k){

var pixels = dommy.core.style.call(null,elem,k);
if(cljs.core.seq.call(null,pixels)){
return parseInt(pixels);
} else {
return null;
}
});
/**
 * Does `elem` contain `c` in its class list
 */
dommy.core.has_class_QMARK_ = (function dommy$core$has_class_QMARK_(elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4124__auto__ = elem.classList;
if(cljs.core.truth_(temp__4124__auto__)){
var class_list = temp__4124__auto__;
return class_list.contains(c__$1);
} else {
var temp__4126__auto__ = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(temp__4126__auto__)){
var class_name = temp__4126__auto__;
var temp__4126__auto____$1 = dommy.utils.class_index.call(null,class_name,c__$1);
if(cljs.core.truth_(temp__4126__auto____$1)){
var i = temp__4126__auto____$1;
return (i >= (0));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Is `elem` hidden (as associated with hide!/show!/toggle!, using display: none)
 */
dommy.core.hidden_QMARK_ = (function dommy$core$hidden_QMARK_(elem){
return (dommy.core.style.call(null,elem,new cljs.core.Keyword(null,"display","display",242065432)) === "none");
});
/**
 * Returns a map of the bounding client rect of `elem`
 * as a map with [:top :left :right :bottom :width :height]
 */
dommy.core.bounding_client_rect = (function dommy$core$bounding_client_rect(elem){
var r = elem.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"top","top",-1856271961),r.top,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),r.bottom,new cljs.core.Keyword(null,"left","left",-399115937),r.left,new cljs.core.Keyword(null,"right","right",-452581833),r.right,new cljs.core.Keyword(null,"width","width",-384071477),r.width,new cljs.core.Keyword(null,"height","height",1025178622),r.height], null);
});
dommy.core.parent = (function dommy$core$parent(elem){
return elem.parentNode;
});
dommy.core.children = (function dommy$core$children(elem){
return elem.children;
});
/**
 * Lazy seq of the ancestors of `elem`
 */
dommy.core.ancestors = (function dommy$core$ancestors(elem){
return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,dommy.core.parent,elem));
});
dommy.core.ancestor_nodes = dommy.core.ancestors;
/**
 * Returns a predicate on nodes that match `selector` at the
 * time of this `matches-pred` call (may return outdated results
 * if you fuck with the DOM)
 */
dommy.core.matches_pred = (function dommy$core$matches_pred(){
var G__5680 = arguments.length;
switch (G__5680) {
case 2:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2 = (function (base,selector){
var matches = dommy.utils.__GT_Array.call(null,base.querySelectorAll(dommy.core.selector.call(null,selector)));
return ((function (matches){
return (function (elem){
return (matches.indexOf(elem) >= (0));
});
;})(matches))
});

dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1 = (function (selector){
return dommy.core.matches_pred.call(null,document,selector);
});

dommy.core.matches_pred.cljs$lang$maxFixedArity = 2;
/**
 * Closest ancestor of `elem` (up to `base`, if provided)
 * that matches `selector`
 */
dommy.core.closest = (function dommy$core$closest(){
var G__5684 = arguments.length;
switch (G__5684) {
case 3:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$3 = (function (base,elem,selector){
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base,selector),cljs.core.take_while.call(null,(function (p1__5682_SHARP_){
return !((p1__5682_SHARP_ === base));
}),dommy.core.ancestors.call(null,elem))));
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$2 = (function (elem,selector){
return dommy.core.closest.call(null,document.body,elem,selector);
});

dommy.core.closest.cljs$lang$maxFixedArity = 3;
/**
 * Is `descendant` a descendant of `ancestor`?
 * (http://goo.gl/T8pgCX)
 */
dommy.core.descendant_QMARK_ = (function dommy$core$descendant_QMARK_(descendant,ancestor){
if(cljs.core.truth_(ancestor.contains)){
return ancestor.contains(descendant);
} else {
if(cljs.core.truth_(ancestor.compareDocumentPosition)){
return ((ancestor.compareDocumentPosition(descendant) & (1 << (4))) != 0);
} else {
return null;
}
}
});
/**
 * Set the textContent of `elem` to `text`, fall back to innerText
 */
dommy.core.set_text_BANG_ = (function dommy$core$set_text_BANG_(elem,text){
if(!((void 0 === elem.textContent))){
elem.textContent = text;
} else {
elem.innerText = text;
}

return elem;
});
/**
 * Set the innerHTML of `elem` to `html`
 */
dommy.core.set_html_BANG_ = (function dommy$core$set_html_BANG_(elem,html){
elem.innerHTML = html;

return elem;
});
/**
 * Set the value of `elem` to `value`
 */
dommy.core.set_value_BANG_ = (function dommy$core$set_value_BANG_(elem,value){
elem.value = value;

return elem;
});
/**
 * Set the css class of `elem` to `elem`
 */
dommy.core.set_class_BANG_ = (function dommy$core$set_class_BANG_(elem,c){
return elem.className = c;
});
/**
 * Set the style of `elem` using key-value pairs:
 * 
 * (set-style! elem :display "block" :color "red")
 */
dommy.core.set_style_BANG_ = (function dommy$core$set_style_BANG_(){
var argseq__5373__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5373__auto__);
});

dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

var style = elem.style;
var seq__5688_5694 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__5689_5695 = null;
var count__5690_5696 = (0);
var i__5691_5697 = (0);
while(true){
if((i__5691_5697 < count__5690_5696)){
var vec__5692_5698 = cljs.core._nth.call(null,chunk__5689_5695,i__5691_5697);
var k_5699 = cljs.core.nth.call(null,vec__5692_5698,(0),null);
var v_5700 = cljs.core.nth.call(null,vec__5692_5698,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_5699),v_5700);

var G__5701 = seq__5688_5694;
var G__5702 = chunk__5689_5695;
var G__5703 = count__5690_5696;
var G__5704 = (i__5691_5697 + (1));
seq__5688_5694 = G__5701;
chunk__5689_5695 = G__5702;
count__5690_5696 = G__5703;
i__5691_5697 = G__5704;
continue;
} else {
var temp__4126__auto___5705 = cljs.core.seq.call(null,seq__5688_5694);
if(temp__4126__auto___5705){
var seq__5688_5706__$1 = temp__4126__auto___5705;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5688_5706__$1)){
var c__5118__auto___5707 = cljs.core.chunk_first.call(null,seq__5688_5706__$1);
var G__5708 = cljs.core.chunk_rest.call(null,seq__5688_5706__$1);
var G__5709 = c__5118__auto___5707;
var G__5710 = cljs.core.count.call(null,c__5118__auto___5707);
var G__5711 = (0);
seq__5688_5694 = G__5708;
chunk__5689_5695 = G__5709;
count__5690_5696 = G__5710;
i__5691_5697 = G__5711;
continue;
} else {
var vec__5693_5712 = cljs.core.first.call(null,seq__5688_5706__$1);
var k_5713 = cljs.core.nth.call(null,vec__5693_5712,(0),null);
var v_5714 = cljs.core.nth.call(null,vec__5693_5712,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_5713),v_5714);

var G__5715 = cljs.core.next.call(null,seq__5688_5706__$1);
var G__5716 = null;
var G__5717 = (0);
var G__5718 = (0);
seq__5688_5694 = G__5715;
chunk__5689_5695 = G__5716;
count__5690_5696 = G__5717;
i__5691_5697 = G__5718;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_style_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq5686){
var G__5687 = cljs.core.first.call(null,seq5686);
var seq5686__$1 = cljs.core.next.call(null,seq5686);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__5687,seq5686__$1);
});
dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(){
var argseq__5373__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5373__auto__);
});

dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

var seq__5721_5727 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__5722_5728 = null;
var count__5723_5729 = (0);
var i__5724_5730 = (0);
while(true){
if((i__5724_5730 < count__5723_5729)){
var vec__5725_5731 = cljs.core._nth.call(null,chunk__5722_5728,i__5724_5730);
var k_5732 = cljs.core.nth.call(null,vec__5725_5731,(0),null);
var v_5733 = cljs.core.nth.call(null,vec__5725_5731,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_5732,[cljs.core.str(v_5733),cljs.core.str("px")].join(''));

var G__5734 = seq__5721_5727;
var G__5735 = chunk__5722_5728;
var G__5736 = count__5723_5729;
var G__5737 = (i__5724_5730 + (1));
seq__5721_5727 = G__5734;
chunk__5722_5728 = G__5735;
count__5723_5729 = G__5736;
i__5724_5730 = G__5737;
continue;
} else {
var temp__4126__auto___5738 = cljs.core.seq.call(null,seq__5721_5727);
if(temp__4126__auto___5738){
var seq__5721_5739__$1 = temp__4126__auto___5738;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5721_5739__$1)){
var c__5118__auto___5740 = cljs.core.chunk_first.call(null,seq__5721_5739__$1);
var G__5741 = cljs.core.chunk_rest.call(null,seq__5721_5739__$1);
var G__5742 = c__5118__auto___5740;
var G__5743 = cljs.core.count.call(null,c__5118__auto___5740);
var G__5744 = (0);
seq__5721_5727 = G__5741;
chunk__5722_5728 = G__5742;
count__5723_5729 = G__5743;
i__5724_5730 = G__5744;
continue;
} else {
var vec__5726_5745 = cljs.core.first.call(null,seq__5721_5739__$1);
var k_5746 = cljs.core.nth.call(null,vec__5726_5745,(0),null);
var v_5747 = cljs.core.nth.call(null,vec__5726_5745,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_5746,[cljs.core.str(v_5747),cljs.core.str("px")].join(''));

var G__5748 = cljs.core.next.call(null,seq__5721_5739__$1);
var G__5749 = null;
var G__5750 = (0);
var G__5751 = (0);
seq__5721_5727 = G__5748;
chunk__5722_5728 = G__5749;
count__5723_5729 = G__5750;
i__5724_5730 = G__5751;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_px_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq5719){
var G__5720 = cljs.core.first.call(null,seq5719);
var seq5719__$1 = cljs.core.next.call(null,seq5719);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__5720,seq5719__$1);
});
/**
 * Sets dom attributes on and returns `elem`.
 * Attributes without values will be set to "true":
 * 
 * (set-attr! elem :disabled)
 * 
 * With values, the function takes variadic kv pairs:
 * 
 * (set-attr! elem :id "some-id"
 * :name "some-name")
 */
dommy.core.set_attr_BANG_ = (function dommy$core$set_attr_BANG_(){
var G__5757 = arguments.length;
switch (G__5757) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__5385__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,3),(0)));
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5385__auto__);

}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.set_attr_BANG_.call(null,elem,k,"true");
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_.call(null,v)){
var G__5758 = elem;
(G__5758[k__$1] = v);

return G__5758;
} else {
var G__5759 = elem;
G__5759.setAttribute(k__$1,v);

return G__5759;
}
} else {
return null;
}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,v,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

var seq__5760_5767 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));
var chunk__5761_5768 = null;
var count__5762_5769 = (0);
var i__5763_5770 = (0);
while(true){
if((i__5763_5770 < count__5762_5769)){
var vec__5764_5771 = cljs.core._nth.call(null,chunk__5761_5768,i__5763_5770);
var k_5772__$1 = cljs.core.nth.call(null,vec__5764_5771,(0),null);
var v_5773__$1 = cljs.core.nth.call(null,vec__5764_5771,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_5772__$1,v_5773__$1);

var G__5774 = seq__5760_5767;
var G__5775 = chunk__5761_5768;
var G__5776 = count__5762_5769;
var G__5777 = (i__5763_5770 + (1));
seq__5760_5767 = G__5774;
chunk__5761_5768 = G__5775;
count__5762_5769 = G__5776;
i__5763_5770 = G__5777;
continue;
} else {
var temp__4126__auto___5778 = cljs.core.seq.call(null,seq__5760_5767);
if(temp__4126__auto___5778){
var seq__5760_5779__$1 = temp__4126__auto___5778;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5760_5779__$1)){
var c__5118__auto___5780 = cljs.core.chunk_first.call(null,seq__5760_5779__$1);
var G__5781 = cljs.core.chunk_rest.call(null,seq__5760_5779__$1);
var G__5782 = c__5118__auto___5780;
var G__5783 = cljs.core.count.call(null,c__5118__auto___5780);
var G__5784 = (0);
seq__5760_5767 = G__5781;
chunk__5761_5768 = G__5782;
count__5762_5769 = G__5783;
i__5763_5770 = G__5784;
continue;
} else {
var vec__5765_5785 = cljs.core.first.call(null,seq__5760_5779__$1);
var k_5786__$1 = cljs.core.nth.call(null,vec__5765_5785,(0),null);
var v_5787__$1 = cljs.core.nth.call(null,vec__5765_5785,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_5786__$1,v_5787__$1);

var G__5788 = cljs.core.next.call(null,seq__5760_5779__$1);
var G__5789 = null;
var G__5790 = (0);
var G__5791 = (0);
seq__5760_5767 = G__5788;
chunk__5761_5768 = G__5789;
count__5762_5769 = G__5790;
i__5763_5770 = G__5791;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq5752){
var G__5753 = cljs.core.first.call(null,seq5752);
var seq5752__$1 = cljs.core.next.call(null,seq5752);
var G__5754 = cljs.core.first.call(null,seq5752__$1);
var seq5752__$2 = cljs.core.next.call(null,seq5752__$1);
var G__5755 = cljs.core.first.call(null,seq5752__$2);
var seq5752__$3 = cljs.core.next.call(null,seq5752__$2);
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__5753,G__5754,G__5755,seq5752__$3);
});

dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(){
var G__5796 = arguments.length;
switch (G__5796) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__5385__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,2),(0)));
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5385__auto__);

}
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_5802__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null).call(null,k_5802__$1))){
dommy.core.set_class_BANG_.call(null,elem,"");
} else {
elem.removeAttribute(k_5802__$1);
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__5797_5803 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));
var chunk__5798_5804 = null;
var count__5799_5805 = (0);
var i__5800_5806 = (0);
while(true){
if((i__5800_5806 < count__5799_5805)){
var k_5807__$1 = cljs.core._nth.call(null,chunk__5798_5804,i__5800_5806);
dommy.core.remove_attr_BANG_.call(null,elem,k_5807__$1);

var G__5808 = seq__5797_5803;
var G__5809 = chunk__5798_5804;
var G__5810 = count__5799_5805;
var G__5811 = (i__5800_5806 + (1));
seq__5797_5803 = G__5808;
chunk__5798_5804 = G__5809;
count__5799_5805 = G__5810;
i__5800_5806 = G__5811;
continue;
} else {
var temp__4126__auto___5812 = cljs.core.seq.call(null,seq__5797_5803);
if(temp__4126__auto___5812){
var seq__5797_5813__$1 = temp__4126__auto___5812;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5797_5813__$1)){
var c__5118__auto___5814 = cljs.core.chunk_first.call(null,seq__5797_5813__$1);
var G__5815 = cljs.core.chunk_rest.call(null,seq__5797_5813__$1);
var G__5816 = c__5118__auto___5814;
var G__5817 = cljs.core.count.call(null,c__5118__auto___5814);
var G__5818 = (0);
seq__5797_5803 = G__5815;
chunk__5798_5804 = G__5816;
count__5799_5805 = G__5817;
i__5800_5806 = G__5818;
continue;
} else {
var k_5819__$1 = cljs.core.first.call(null,seq__5797_5813__$1);
dommy.core.remove_attr_BANG_.call(null,elem,k_5819__$1);

var G__5820 = cljs.core.next.call(null,seq__5797_5813__$1);
var G__5821 = null;
var G__5822 = (0);
var G__5823 = (0);
seq__5797_5803 = G__5820;
chunk__5798_5804 = G__5821;
count__5799_5805 = G__5822;
i__5800_5806 = G__5823;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq5792){
var G__5793 = cljs.core.first.call(null,seq5792);
var seq5792__$1 = cljs.core.next.call(null,seq5792);
var G__5794 = cljs.core.first.call(null,seq5792__$1);
var seq5792__$2 = cljs.core.next.call(null,seq5792__$1);
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__5793,G__5794,seq5792__$2);
});

dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = 2;
/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(){
var G__5825 = arguments.length;
switch (G__5825) {
case 2:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.toggle_attr_BANG_.call(null,elem,k,cljs.core.boolean$.call(null,dommy.core.attr.call(null,elem,k)));
});

dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,add_QMARK_){
if(add_QMARK_){
return dommy.core.set_attr_BANG_.call(null,elem,k);
} else {
return dommy.core.remove_attr_BANG_.call(null,elem,k);
}
});

dommy.core.toggle_attr_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Add `classes` to `elem`, trying to use Element::classList, and
 * falling back to fast string parsing/manipulation
 */
dommy.core.add_class_BANG_ = (function dommy$core$add_class_BANG_(){
var G__5831 = arguments.length;
switch (G__5831) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__5385__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,2),(0)));
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5385__auto__);

}
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim.call(null,dommy.utils.as_str.call(null,classes)).split(/\s+/);
if(cljs.core.seq.call(null,classes__$1)){
var temp__4124__auto___5845 = elem.classList;
if(cljs.core.truth_(temp__4124__auto___5845)){
var class_list_5846 = temp__4124__auto___5845;
var seq__5832_5847 = cljs.core.seq.call(null,classes__$1);
var chunk__5833_5848 = null;
var count__5834_5849 = (0);
var i__5835_5850 = (0);
while(true){
if((i__5835_5850 < count__5834_5849)){
var c_5851 = cljs.core._nth.call(null,chunk__5833_5848,i__5835_5850);
class_list_5846.add(c_5851);

var G__5852 = seq__5832_5847;
var G__5853 = chunk__5833_5848;
var G__5854 = count__5834_5849;
var G__5855 = (i__5835_5850 + (1));
seq__5832_5847 = G__5852;
chunk__5833_5848 = G__5853;
count__5834_5849 = G__5854;
i__5835_5850 = G__5855;
continue;
} else {
var temp__4126__auto___5856 = cljs.core.seq.call(null,seq__5832_5847);
if(temp__4126__auto___5856){
var seq__5832_5857__$1 = temp__4126__auto___5856;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5832_5857__$1)){
var c__5118__auto___5858 = cljs.core.chunk_first.call(null,seq__5832_5857__$1);
var G__5859 = cljs.core.chunk_rest.call(null,seq__5832_5857__$1);
var G__5860 = c__5118__auto___5858;
var G__5861 = cljs.core.count.call(null,c__5118__auto___5858);
var G__5862 = (0);
seq__5832_5847 = G__5859;
chunk__5833_5848 = G__5860;
count__5834_5849 = G__5861;
i__5835_5850 = G__5862;
continue;
} else {
var c_5863 = cljs.core.first.call(null,seq__5832_5857__$1);
class_list_5846.add(c_5863);

var G__5864 = cljs.core.next.call(null,seq__5832_5857__$1);
var G__5865 = null;
var G__5866 = (0);
var G__5867 = (0);
seq__5832_5847 = G__5864;
chunk__5833_5848 = G__5865;
count__5834_5849 = G__5866;
i__5835_5850 = G__5867;
continue;
}
} else {
}
}
break;
}
} else {
var seq__5836_5868 = cljs.core.seq.call(null,classes__$1);
var chunk__5837_5869 = null;
var count__5838_5870 = (0);
var i__5839_5871 = (0);
while(true){
if((i__5839_5871 < count__5838_5870)){
var c_5872 = cljs.core._nth.call(null,chunk__5837_5869,i__5839_5871);
var class_name_5873 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_5873,c_5872))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_5873 === ""))?c_5872:[cljs.core.str(class_name_5873),cljs.core.str(" "),cljs.core.str(c_5872)].join('')));
}

var G__5874 = seq__5836_5868;
var G__5875 = chunk__5837_5869;
var G__5876 = count__5838_5870;
var G__5877 = (i__5839_5871 + (1));
seq__5836_5868 = G__5874;
chunk__5837_5869 = G__5875;
count__5838_5870 = G__5876;
i__5839_5871 = G__5877;
continue;
} else {
var temp__4126__auto___5878 = cljs.core.seq.call(null,seq__5836_5868);
if(temp__4126__auto___5878){
var seq__5836_5879__$1 = temp__4126__auto___5878;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5836_5879__$1)){
var c__5118__auto___5880 = cljs.core.chunk_first.call(null,seq__5836_5879__$1);
var G__5881 = cljs.core.chunk_rest.call(null,seq__5836_5879__$1);
var G__5882 = c__5118__auto___5880;
var G__5883 = cljs.core.count.call(null,c__5118__auto___5880);
var G__5884 = (0);
seq__5836_5868 = G__5881;
chunk__5837_5869 = G__5882;
count__5838_5870 = G__5883;
i__5839_5871 = G__5884;
continue;
} else {
var c_5885 = cljs.core.first.call(null,seq__5836_5879__$1);
var class_name_5886 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_5886,c_5885))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_5886 === ""))?c_5885:[cljs.core.str(class_name_5886),cljs.core.str(" "),cljs.core.str(c_5885)].join('')));
}

var G__5887 = cljs.core.next.call(null,seq__5836_5879__$1);
var G__5888 = null;
var G__5889 = (0);
var G__5890 = (0);
seq__5836_5868 = G__5887;
chunk__5837_5869 = G__5888;
count__5838_5870 = G__5889;
i__5839_5871 = G__5890;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return elem;
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,classes,more_classes){
var seq__5840_5891 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));
var chunk__5841_5892 = null;
var count__5842_5893 = (0);
var i__5843_5894 = (0);
while(true){
if((i__5843_5894 < count__5842_5893)){
var c_5895 = cljs.core._nth.call(null,chunk__5841_5892,i__5843_5894);
dommy.core.add_class_BANG_.call(null,elem,c_5895);

var G__5896 = seq__5840_5891;
var G__5897 = chunk__5841_5892;
var G__5898 = count__5842_5893;
var G__5899 = (i__5843_5894 + (1));
seq__5840_5891 = G__5896;
chunk__5841_5892 = G__5897;
count__5842_5893 = G__5898;
i__5843_5894 = G__5899;
continue;
} else {
var temp__4126__auto___5900 = cljs.core.seq.call(null,seq__5840_5891);
if(temp__4126__auto___5900){
var seq__5840_5901__$1 = temp__4126__auto___5900;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5840_5901__$1)){
var c__5118__auto___5902 = cljs.core.chunk_first.call(null,seq__5840_5901__$1);
var G__5903 = cljs.core.chunk_rest.call(null,seq__5840_5901__$1);
var G__5904 = c__5118__auto___5902;
var G__5905 = cljs.core.count.call(null,c__5118__auto___5902);
var G__5906 = (0);
seq__5840_5891 = G__5903;
chunk__5841_5892 = G__5904;
count__5842_5893 = G__5905;
i__5843_5894 = G__5906;
continue;
} else {
var c_5907 = cljs.core.first.call(null,seq__5840_5901__$1);
dommy.core.add_class_BANG_.call(null,elem,c_5907);

var G__5908 = cljs.core.next.call(null,seq__5840_5901__$1);
var G__5909 = null;
var G__5910 = (0);
var G__5911 = (0);
seq__5840_5891 = G__5908;
chunk__5841_5892 = G__5909;
count__5842_5893 = G__5910;
i__5843_5894 = G__5911;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq5827){
var G__5828 = cljs.core.first.call(null,seq5827);
var seq5827__$1 = cljs.core.next.call(null,seq5827);
var G__5829 = cljs.core.first.call(null,seq5827__$1);
var seq5827__$2 = cljs.core.next.call(null,seq5827__$1);
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__5828,G__5829,seq5827__$2);
});

dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = 2;
/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(){
var G__5916 = arguments.length;
switch (G__5916) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__5385__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,2),(0)));
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5385__auto__);

}
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4124__auto___5922 = elem.classList;
if(cljs.core.truth_(temp__4124__auto___5922)){
var class_list_5923 = temp__4124__auto___5922;
class_list_5923.remove(c__$1);
} else {
var class_name_5924 = dommy.core.class$.call(null,elem);
var new_class_name_5925 = dommy.utils.remove_class_str.call(null,class_name_5924,c__$1);
if((class_name_5924 === new_class_name_5925)){
} else {
dommy.core.set_class_BANG_.call(null,elem,new_class_name_5925);
}
}

return elem;
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__5917 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));
var chunk__5918 = null;
var count__5919 = (0);
var i__5920 = (0);
while(true){
if((i__5920 < count__5919)){
var c = cljs.core._nth.call(null,chunk__5918,i__5920);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__5926 = seq__5917;
var G__5927 = chunk__5918;
var G__5928 = count__5919;
var G__5929 = (i__5920 + (1));
seq__5917 = G__5926;
chunk__5918 = G__5927;
count__5919 = G__5928;
i__5920 = G__5929;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__5917);
if(temp__4126__auto__){
var seq__5917__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5917__$1)){
var c__5118__auto__ = cljs.core.chunk_first.call(null,seq__5917__$1);
var G__5930 = cljs.core.chunk_rest.call(null,seq__5917__$1);
var G__5931 = c__5118__auto__;
var G__5932 = cljs.core.count.call(null,c__5118__auto__);
var G__5933 = (0);
seq__5917 = G__5930;
chunk__5918 = G__5931;
count__5919 = G__5932;
i__5920 = G__5933;
continue;
} else {
var c = cljs.core.first.call(null,seq__5917__$1);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__5934 = cljs.core.next.call(null,seq__5917__$1);
var G__5935 = null;
var G__5936 = (0);
var G__5937 = (0);
seq__5917 = G__5934;
chunk__5918 = G__5935;
count__5919 = G__5936;
i__5920 = G__5937;
continue;
}
} else {
return null;
}
}
break;
}
});

dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq5912){
var G__5913 = cljs.core.first.call(null,seq5912);
var seq5912__$1 = cljs.core.next.call(null,seq5912);
var G__5914 = cljs.core.first.call(null,seq5912__$1);
var seq5912__$2 = cljs.core.next.call(null,seq5912__$1);
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__5913,G__5914,seq5912__$2);
});

dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = 2;
/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(){
var G__5939 = arguments.length;
switch (G__5939) {
case 2:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4124__auto___5941 = elem.classList;
if(cljs.core.truth_(temp__4124__auto___5941)){
var class_list_5942 = temp__4124__auto___5941;
class_list_5942.toggle(c__$1);
} else {
dommy.core.toggle_class_BANG_.call(null,elem,c__$1,!(dommy.core.has_class_QMARK_.call(null,elem,c__$1)));
}

return elem;
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,class$,add_QMARK_){
if(add_QMARK_){
dommy.core.add_class_BANG_.call(null,elem,class$);
} else {
dommy.core.remove_class_BANG_.call(null,elem,class$);
}

return elem;
});

dommy.core.toggle_class_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Display or hide the given `elem` (using display: none).
 * Takes an optional boolean `show?`
 */
dommy.core.toggle_BANG_ = (function dommy$core$toggle_BANG_(){
var G__5944 = arguments.length;
switch (G__5944) {
case 2:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,show_QMARK_){
return dommy.core.set_style_BANG_.call(null,elem,new cljs.core.Keyword(null,"display","display",242065432),((show_QMARK_)?"":"none"));
});

dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return dommy.core.toggle_BANG_.call(null,elem,dommy.core.hidden_QMARK_.call(null,elem));
});

dommy.core.toggle_BANG_.cljs$lang$maxFixedArity = 2;
dommy.core.hide_BANG_ = (function dommy$core$hide_BANG_(elem){
return dommy.core.toggle_BANG_.call(null,elem,false);
});
dommy.core.show_BANG_ = (function dommy$core$show_BANG_(elem){
return dommy.core.toggle_BANG_.call(null,elem,true);
});
dommy.core.scroll_into_view = (function dommy$core$scroll_into_view(elem,align_with_top_QMARK_){
var top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dommy.core.bounding_client_rect.call(null,elem));
if((window.innerHeight < (top + elem.offsetHeight))){
return elem.scrollIntoView(align_with_top_QMARK_);
} else {
return null;
}
});
dommy.core.create_element = (function dommy$core$create_element(){
var G__5947 = arguments.length;
switch (G__5947) {
case 1:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

dommy.core.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return document.createElement(dommy.utils.as_str.call(null,tag));
});

dommy.core.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag_ns,tag){
return document.createElementNS(dommy.utils.as_str.call(null,tag_ns),dommy.utils.as_str.call(null,tag));
});

dommy.core.create_element.cljs$lang$maxFixedArity = 2;
dommy.core.create_text_node = (function dommy$core$create_text_node(text){
return document.createTextNode(text);
});
/**
 * Clears all children from `elem`
 */
dommy.core.clear_BANG_ = (function dommy$core$clear_BANG_(elem){
return dommy.core.set_html_BANG_.call(null,elem,"");
});
/**
 * Append `child` to `parent`
 */
dommy.core.append_BANG_ = (function dommy$core$append_BANG_(){
var G__5953 = arguments.length;
switch (G__5953) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__5385__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,2),(0)));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5385__auto__);

}
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__5954 = parent;
G__5954.appendChild(child);

return G__5954;
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__5955_5960 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__5956_5961 = null;
var count__5957_5962 = (0);
var i__5958_5963 = (0);
while(true){
if((i__5958_5963 < count__5957_5962)){
var c_5964 = cljs.core._nth.call(null,chunk__5956_5961,i__5958_5963);
dommy.core.append_BANG_.call(null,parent,c_5964);

var G__5965 = seq__5955_5960;
var G__5966 = chunk__5956_5961;
var G__5967 = count__5957_5962;
var G__5968 = (i__5958_5963 + (1));
seq__5955_5960 = G__5965;
chunk__5956_5961 = G__5966;
count__5957_5962 = G__5967;
i__5958_5963 = G__5968;
continue;
} else {
var temp__4126__auto___5969 = cljs.core.seq.call(null,seq__5955_5960);
if(temp__4126__auto___5969){
var seq__5955_5970__$1 = temp__4126__auto___5969;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5955_5970__$1)){
var c__5118__auto___5971 = cljs.core.chunk_first.call(null,seq__5955_5970__$1);
var G__5972 = cljs.core.chunk_rest.call(null,seq__5955_5970__$1);
var G__5973 = c__5118__auto___5971;
var G__5974 = cljs.core.count.call(null,c__5118__auto___5971);
var G__5975 = (0);
seq__5955_5960 = G__5972;
chunk__5956_5961 = G__5973;
count__5957_5962 = G__5974;
i__5958_5963 = G__5975;
continue;
} else {
var c_5976 = cljs.core.first.call(null,seq__5955_5970__$1);
dommy.core.append_BANG_.call(null,parent,c_5976);

var G__5977 = cljs.core.next.call(null,seq__5955_5970__$1);
var G__5978 = null;
var G__5979 = (0);
var G__5980 = (0);
seq__5955_5960 = G__5977;
chunk__5956_5961 = G__5978;
count__5957_5962 = G__5979;
i__5958_5963 = G__5980;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq5949){
var G__5950 = cljs.core.first.call(null,seq5949);
var seq5949__$1 = cljs.core.next.call(null,seq5949);
var G__5951 = cljs.core.first.call(null,seq5949__$1);
var seq5949__$2 = cljs.core.next.call(null,seq5949__$1);
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__5950,G__5951,seq5949__$2);
});

dommy.core.append_BANG_.cljs$lang$maxFixedArity = 2;
/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(){
var G__5985 = arguments.length;
switch (G__5985) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__5385__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,2),(0)));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5385__auto__);

}
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__5986 = parent;
G__5986.insertBefore(child,parent.firstChild);

return G__5986;
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__5987_5992 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__5988_5993 = null;
var count__5989_5994 = (0);
var i__5990_5995 = (0);
while(true){
if((i__5990_5995 < count__5989_5994)){
var c_5996 = cljs.core._nth.call(null,chunk__5988_5993,i__5990_5995);
dommy.core.prepend_BANG_.call(null,parent,c_5996);

var G__5997 = seq__5987_5992;
var G__5998 = chunk__5988_5993;
var G__5999 = count__5989_5994;
var G__6000 = (i__5990_5995 + (1));
seq__5987_5992 = G__5997;
chunk__5988_5993 = G__5998;
count__5989_5994 = G__5999;
i__5990_5995 = G__6000;
continue;
} else {
var temp__4126__auto___6001 = cljs.core.seq.call(null,seq__5987_5992);
if(temp__4126__auto___6001){
var seq__5987_6002__$1 = temp__4126__auto___6001;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5987_6002__$1)){
var c__5118__auto___6003 = cljs.core.chunk_first.call(null,seq__5987_6002__$1);
var G__6004 = cljs.core.chunk_rest.call(null,seq__5987_6002__$1);
var G__6005 = c__5118__auto___6003;
var G__6006 = cljs.core.count.call(null,c__5118__auto___6003);
var G__6007 = (0);
seq__5987_5992 = G__6004;
chunk__5988_5993 = G__6005;
count__5989_5994 = G__6006;
i__5990_5995 = G__6007;
continue;
} else {
var c_6008 = cljs.core.first.call(null,seq__5987_6002__$1);
dommy.core.prepend_BANG_.call(null,parent,c_6008);

var G__6009 = cljs.core.next.call(null,seq__5987_6002__$1);
var G__6010 = null;
var G__6011 = (0);
var G__6012 = (0);
seq__5987_5992 = G__6009;
chunk__5988_5993 = G__6010;
count__5989_5994 = G__6011;
i__5990_5995 = G__6012;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq5981){
var G__5982 = cljs.core.first.call(null,seq5981);
var seq5981__$1 = cljs.core.next.call(null,seq5981);
var G__5983 = cljs.core.first.call(null,seq5981__$1);
var seq5981__$2 = cljs.core.next.call(null,seq5981__$1);
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__5982,G__5983,seq5981__$2);
});

dommy.core.prepend_BANG_.cljs$lang$maxFixedArity = 2;
/**
 * Insert `elem` before `other`, `other` must have a parent
 */
dommy.core.insert_before_BANG_ = (function dommy$core$insert_before_BANG_(elem,other){
var p = dommy.core.parent.call(null,other);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"p","p",1791580836,null)))].join('')));
}

p.insertBefore(elem,other);

return elem;
});
/**
 * Insert `elem` after `other`, `other` must have a parent
 */
dommy.core.insert_after_BANG_ = (function dommy$core$insert_after_BANG_(elem,other){
var temp__4124__auto___6013 = other.nextSibling;
if(cljs.core.truth_(temp__4124__auto___6013)){
var next_6014 = temp__4124__auto___6013;
dommy.core.insert_before_BANG_.call(null,elem,next_6014);
} else {
dommy.core.append_BANG_.call(null,dommy.core.parent.call(null,other),elem);
}

return elem;
});
/**
 * Replace `elem` with `new`, return `new`
 */
dommy.core.replace_BANG_ = (function dommy$core$replace_BANG_(elem,new$){
var p = dommy.core.parent.call(null,elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"p","p",1791580836,null)))].join('')));
}

p.replaceChild(new$,elem);

return new$;
});
/**
 * Replace children of `elem` with `child`
 */
dommy.core.replace_contents_BANG_ = (function dommy$core$replace_contents_BANG_(p,child){
return dommy.core.append_BANG_.call(null,dommy.core.clear_BANG_.call(null,p),child);
});
/**
 * Remove `elem` from `parent`, return `parent`
 */
dommy.core.remove_BANG_ = (function dommy$core$remove_BANG_(){
var G__6016 = arguments.length;
switch (G__6016) {
case 1:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
var p = dommy.core.parent.call(null,elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"p","p",1791580836,null)))].join('')));
}

return dommy.core.remove_BANG_.call(null,p,elem);
});

dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (p,elem){
var G__6017 = p;
G__6017.removeChild(elem);

return G__6017;
});

dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2;
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__6019){
var vec__6020 = p__6019;
var special_mouse_event = cljs.core.nth.call(null,vec__6020,(0),null);
var real_mouse_event = cljs.core.nth.call(null,vec__6020,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__6020,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__6020,special_mouse_event,real_mouse_event){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__4333__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__4333__auto__)){
return or__4333__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__4321__auto__ = related_target;
if(cljs.core.truth_(and__4321__auto__)){
return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else {
return and__4321__auto__;
}
})())){
return null;
} else {
return f.call(null,event);
}
});
;})(vec__6020,special_mouse_event,real_mouse_event))
});})(vec__6020,special_mouse_event,real_mouse_event))
], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
 * fires f if event.target is found with `selector`
 */
dommy.core.live_listener = (function dommy$core$live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.call(null,elem,event.target,selector);
if(cljs.core.truth_((function (){var and__4321__auto__ = selected_target;
if(cljs.core.truth_(and__4321__auto__)){
return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else {
return and__4321__auto__;
}
})())){
event.selectedTarget = selected_target;

return f.call(null,event);
} else {
return null;
}
});
});
/**
 * Returns a nested map of event listeners on `elem`
 */
dommy.core.event_listeners = (function dommy$core$event_listeners(elem){
var or__4333__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__4333__auto__)){
return or__4333__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
dommy.core.update_event_listeners_BANG_ = (function dommy$core$update_event_listeners_BANG_(){
var argseq__5373__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5373__auto__);
});

dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,f,args){
var elem__$1 = elem;
return elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args);
});

dommy.core.update_event_listeners_BANG_.cljs$lang$maxFixedArity = (2);

dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq6021){
var G__6022 = cljs.core.first.call(null,seq6021);
var seq6021__$1 = cljs.core.next.call(null,seq6021);
var G__6023 = cljs.core.first.call(null,seq6021__$1);
var seq6021__$2 = cljs.core.next.call(null,seq6021__$1);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__6022,G__6023,seq6021__$2);
});
dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_.call(null,elem_sel)){
return cljs.core.juxt.call(null,cljs.core.first,cljs.core.rest).call(null,elem_sel);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem_sel,null], null);
}
});
/**
 * Adds `f` as a listener for events of type `event-type` on
 * `elem-sel`, which must either be a DOM node, or a sequence
 * whose first item is a DOM node.
 * 
 * In other words, the call to `listen!` can take two forms:
 * 
 * If `elem-sel` is a DOM node, i.e., you're doing something like:
 * 
 * (listen! elem :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on the `elem`.
 * 
 * If `elem-sel` is a sequence:
 * 
 * (listen! [elem :.selector.for :.some.descendants] :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on descendants of `elem` that match the selector
 * 
 * Also accepts any number of event-type and handler pairs for setting
 * multiple listeners at once:
 * 
 * (listen! some-elem :click click-handler :hover hover-handler)
 */
dommy.core.listen_BANG_ = (function dommy$core$listen_BANG_(){
var argseq__5373__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5373__auto__);
});

dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null)))))].join('')));
}

var vec__6026_6049 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_6050 = cljs.core.nth.call(null,vec__6026_6049,(0),null);
var selector_6051 = cljs.core.nth.call(null,vec__6026_6049,(1),null);
var seq__6027_6052 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__6034_6053 = null;
var count__6035_6054 = (0);
var i__6036_6055 = (0);
while(true){
if((i__6036_6055 < count__6035_6054)){
var vec__6043_6056 = cljs.core._nth.call(null,chunk__6034_6053,i__6036_6055);
var orig_type_6057 = cljs.core.nth.call(null,vec__6043_6056,(0),null);
var f_6058 = cljs.core.nth.call(null,vec__6043_6056,(1),null);
var seq__6037_6059 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_6057,new cljs.core.PersistentArrayMap.fromArray([orig_type_6057,cljs.core.identity], true, false)));
var chunk__6039_6060 = null;
var count__6040_6061 = (0);
var i__6041_6062 = (0);
while(true){
if((i__6041_6062 < count__6040_6061)){
var vec__6044_6063 = cljs.core._nth.call(null,chunk__6039_6060,i__6041_6062);
var actual_type_6064 = cljs.core.nth.call(null,vec__6044_6063,(0),null);
var factory_6065 = cljs.core.nth.call(null,vec__6044_6063,(1),null);
var canonical_f_6066 = (cljs.core.truth_(selector_6051)?cljs.core.partial.call(null,dommy.core.live_listener,elem_6050,selector_6051):cljs.core.identity).call(null,factory_6065.call(null,f_6058));
dommy.core.update_event_listeners_BANG_.call(null,elem_6050,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_6051,actual_type_6064,f_6058], null),canonical_f_6066);

if(cljs.core.truth_(elem_6050.addEventListener)){
elem_6050.addEventListener(cljs.core.name.call(null,actual_type_6064),canonical_f_6066);
} else {
elem_6050.attachEvent(cljs.core.name.call(null,actual_type_6064),canonical_f_6066);
}

var G__6067 = seq__6037_6059;
var G__6068 = chunk__6039_6060;
var G__6069 = count__6040_6061;
var G__6070 = (i__6041_6062 + (1));
seq__6037_6059 = G__6067;
chunk__6039_6060 = G__6068;
count__6040_6061 = G__6069;
i__6041_6062 = G__6070;
continue;
} else {
var temp__4126__auto___6071 = cljs.core.seq.call(null,seq__6037_6059);
if(temp__4126__auto___6071){
var seq__6037_6072__$1 = temp__4126__auto___6071;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6037_6072__$1)){
var c__5118__auto___6073 = cljs.core.chunk_first.call(null,seq__6037_6072__$1);
var G__6074 = cljs.core.chunk_rest.call(null,seq__6037_6072__$1);
var G__6075 = c__5118__auto___6073;
var G__6076 = cljs.core.count.call(null,c__5118__auto___6073);
var G__6077 = (0);
seq__6037_6059 = G__6074;
chunk__6039_6060 = G__6075;
count__6040_6061 = G__6076;
i__6041_6062 = G__6077;
continue;
} else {
var vec__6045_6078 = cljs.core.first.call(null,seq__6037_6072__$1);
var actual_type_6079 = cljs.core.nth.call(null,vec__6045_6078,(0),null);
var factory_6080 = cljs.core.nth.call(null,vec__6045_6078,(1),null);
var canonical_f_6081 = (cljs.core.truth_(selector_6051)?cljs.core.partial.call(null,dommy.core.live_listener,elem_6050,selector_6051):cljs.core.identity).call(null,factory_6080.call(null,f_6058));
dommy.core.update_event_listeners_BANG_.call(null,elem_6050,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_6051,actual_type_6079,f_6058], null),canonical_f_6081);

if(cljs.core.truth_(elem_6050.addEventListener)){
elem_6050.addEventListener(cljs.core.name.call(null,actual_type_6079),canonical_f_6081);
} else {
elem_6050.attachEvent(cljs.core.name.call(null,actual_type_6079),canonical_f_6081);
}

var G__6082 = cljs.core.next.call(null,seq__6037_6072__$1);
var G__6083 = null;
var G__6084 = (0);
var G__6085 = (0);
seq__6037_6059 = G__6082;
chunk__6039_6060 = G__6083;
count__6040_6061 = G__6084;
i__6041_6062 = G__6085;
continue;
}
} else {
}
}
break;
}

var G__6086 = seq__6027_6052;
var G__6087 = chunk__6034_6053;
var G__6088 = count__6035_6054;
var G__6089 = (i__6036_6055 + (1));
seq__6027_6052 = G__6086;
chunk__6034_6053 = G__6087;
count__6035_6054 = G__6088;
i__6036_6055 = G__6089;
continue;
} else {
var temp__4126__auto___6090 = cljs.core.seq.call(null,seq__6027_6052);
if(temp__4126__auto___6090){
var seq__6027_6091__$1 = temp__4126__auto___6090;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6027_6091__$1)){
var c__5118__auto___6092 = cljs.core.chunk_first.call(null,seq__6027_6091__$1);
var G__6093 = cljs.core.chunk_rest.call(null,seq__6027_6091__$1);
var G__6094 = c__5118__auto___6092;
var G__6095 = cljs.core.count.call(null,c__5118__auto___6092);
var G__6096 = (0);
seq__6027_6052 = G__6093;
chunk__6034_6053 = G__6094;
count__6035_6054 = G__6095;
i__6036_6055 = G__6096;
continue;
} else {
var vec__6046_6097 = cljs.core.first.call(null,seq__6027_6091__$1);
var orig_type_6098 = cljs.core.nth.call(null,vec__6046_6097,(0),null);
var f_6099 = cljs.core.nth.call(null,vec__6046_6097,(1),null);
var seq__6028_6100 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_6098,new cljs.core.PersistentArrayMap.fromArray([orig_type_6098,cljs.core.identity], true, false)));
var chunk__6030_6101 = null;
var count__6031_6102 = (0);
var i__6032_6103 = (0);
while(true){
if((i__6032_6103 < count__6031_6102)){
var vec__6047_6104 = cljs.core._nth.call(null,chunk__6030_6101,i__6032_6103);
var actual_type_6105 = cljs.core.nth.call(null,vec__6047_6104,(0),null);
var factory_6106 = cljs.core.nth.call(null,vec__6047_6104,(1),null);
var canonical_f_6107 = (cljs.core.truth_(selector_6051)?cljs.core.partial.call(null,dommy.core.live_listener,elem_6050,selector_6051):cljs.core.identity).call(null,factory_6106.call(null,f_6099));
dommy.core.update_event_listeners_BANG_.call(null,elem_6050,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_6051,actual_type_6105,f_6099], null),canonical_f_6107);

if(cljs.core.truth_(elem_6050.addEventListener)){
elem_6050.addEventListener(cljs.core.name.call(null,actual_type_6105),canonical_f_6107);
} else {
elem_6050.attachEvent(cljs.core.name.call(null,actual_type_6105),canonical_f_6107);
}

var G__6108 = seq__6028_6100;
var G__6109 = chunk__6030_6101;
var G__6110 = count__6031_6102;
var G__6111 = (i__6032_6103 + (1));
seq__6028_6100 = G__6108;
chunk__6030_6101 = G__6109;
count__6031_6102 = G__6110;
i__6032_6103 = G__6111;
continue;
} else {
var temp__4126__auto___6112__$1 = cljs.core.seq.call(null,seq__6028_6100);
if(temp__4126__auto___6112__$1){
var seq__6028_6113__$1 = temp__4126__auto___6112__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6028_6113__$1)){
var c__5118__auto___6114 = cljs.core.chunk_first.call(null,seq__6028_6113__$1);
var G__6115 = cljs.core.chunk_rest.call(null,seq__6028_6113__$1);
var G__6116 = c__5118__auto___6114;
var G__6117 = cljs.core.count.call(null,c__5118__auto___6114);
var G__6118 = (0);
seq__6028_6100 = G__6115;
chunk__6030_6101 = G__6116;
count__6031_6102 = G__6117;
i__6032_6103 = G__6118;
continue;
} else {
var vec__6048_6119 = cljs.core.first.call(null,seq__6028_6113__$1);
var actual_type_6120 = cljs.core.nth.call(null,vec__6048_6119,(0),null);
var factory_6121 = cljs.core.nth.call(null,vec__6048_6119,(1),null);
var canonical_f_6122 = (cljs.core.truth_(selector_6051)?cljs.core.partial.call(null,dommy.core.live_listener,elem_6050,selector_6051):cljs.core.identity).call(null,factory_6121.call(null,f_6099));
dommy.core.update_event_listeners_BANG_.call(null,elem_6050,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_6051,actual_type_6120,f_6099], null),canonical_f_6122);

if(cljs.core.truth_(elem_6050.addEventListener)){
elem_6050.addEventListener(cljs.core.name.call(null,actual_type_6120),canonical_f_6122);
} else {
elem_6050.attachEvent(cljs.core.name.call(null,actual_type_6120),canonical_f_6122);
}

var G__6123 = cljs.core.next.call(null,seq__6028_6113__$1);
var G__6124 = null;
var G__6125 = (0);
var G__6126 = (0);
seq__6028_6100 = G__6123;
chunk__6030_6101 = G__6124;
count__6031_6102 = G__6125;
i__6032_6103 = G__6126;
continue;
}
} else {
}
}
break;
}

var G__6127 = cljs.core.next.call(null,seq__6027_6091__$1);
var G__6128 = null;
var G__6129 = (0);
var G__6130 = (0);
seq__6027_6052 = G__6127;
chunk__6034_6053 = G__6128;
count__6035_6054 = G__6129;
i__6036_6055 = G__6130;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.listen_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq6024){
var G__6025 = cljs.core.first.call(null,seq6024);
var seq6024__$1 = cljs.core.next.call(null,seq6024);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__6025,seq6024__$1);
});
/**
 * Removes event listener for the element defined in `elem-sel`,
 * which is the same format as listen!.
 * 
 * The following forms are allowed, and will remove all handlers
 * that match the parameters passed in:
 * 
 * (unlisten! [elem :.selector] :click event-listener)
 * 
 * (unlisten! [elem :.selector]
 * :click event-listener
 * :mouseover other-event-listener)
 */
dommy.core.unlisten_BANG_ = (function dommy$core$unlisten_BANG_(){
var argseq__5373__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5373__auto__);
});

dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null)))))].join('')));
}

var vec__6133_6156 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_6157 = cljs.core.nth.call(null,vec__6133_6156,(0),null);
var selector_6158 = cljs.core.nth.call(null,vec__6133_6156,(1),null);
var seq__6134_6159 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__6141_6160 = null;
var count__6142_6161 = (0);
var i__6143_6162 = (0);
while(true){
if((i__6143_6162 < count__6142_6161)){
var vec__6150_6163 = cljs.core._nth.call(null,chunk__6141_6160,i__6143_6162);
var orig_type_6164 = cljs.core.nth.call(null,vec__6150_6163,(0),null);
var f_6165 = cljs.core.nth.call(null,vec__6150_6163,(1),null);
var seq__6144_6166 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_6164,new cljs.core.PersistentArrayMap.fromArray([orig_type_6164,cljs.core.identity], true, false)));
var chunk__6146_6167 = null;
var count__6147_6168 = (0);
var i__6148_6169 = (0);
while(true){
if((i__6148_6169 < count__6147_6168)){
var vec__6151_6170 = cljs.core._nth.call(null,chunk__6146_6167,i__6148_6169);
var actual_type_6171 = cljs.core.nth.call(null,vec__6151_6170,(0),null);
var __6172 = cljs.core.nth.call(null,vec__6151_6170,(1),null);
var keys_6173 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_6158,actual_type_6171,f_6165], null);
var canonical_f_6174 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_6157),keys_6173);
dommy.core.update_event_listeners_BANG_.call(null,elem_6157,dommy.utils.dissoc_in,keys_6173);

if(cljs.core.truth_(elem_6157.removeEventListener)){
elem_6157.removeEventListener(cljs.core.name.call(null,actual_type_6171),canonical_f_6174);
} else {
elem_6157.detachEvent(cljs.core.name.call(null,actual_type_6171),canonical_f_6174);
}

var G__6175 = seq__6144_6166;
var G__6176 = chunk__6146_6167;
var G__6177 = count__6147_6168;
var G__6178 = (i__6148_6169 + (1));
seq__6144_6166 = G__6175;
chunk__6146_6167 = G__6176;
count__6147_6168 = G__6177;
i__6148_6169 = G__6178;
continue;
} else {
var temp__4126__auto___6179 = cljs.core.seq.call(null,seq__6144_6166);
if(temp__4126__auto___6179){
var seq__6144_6180__$1 = temp__4126__auto___6179;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6144_6180__$1)){
var c__5118__auto___6181 = cljs.core.chunk_first.call(null,seq__6144_6180__$1);
var G__6182 = cljs.core.chunk_rest.call(null,seq__6144_6180__$1);
var G__6183 = c__5118__auto___6181;
var G__6184 = cljs.core.count.call(null,c__5118__auto___6181);
var G__6185 = (0);
seq__6144_6166 = G__6182;
chunk__6146_6167 = G__6183;
count__6147_6168 = G__6184;
i__6148_6169 = G__6185;
continue;
} else {
var vec__6152_6186 = cljs.core.first.call(null,seq__6144_6180__$1);
var actual_type_6187 = cljs.core.nth.call(null,vec__6152_6186,(0),null);
var __6188 = cljs.core.nth.call(null,vec__6152_6186,(1),null);
var keys_6189 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_6158,actual_type_6187,f_6165], null);
var canonical_f_6190 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_6157),keys_6189);
dommy.core.update_event_listeners_BANG_.call(null,elem_6157,dommy.utils.dissoc_in,keys_6189);

if(cljs.core.truth_(elem_6157.removeEventListener)){
elem_6157.removeEventListener(cljs.core.name.call(null,actual_type_6187),canonical_f_6190);
} else {
elem_6157.detachEvent(cljs.core.name.call(null,actual_type_6187),canonical_f_6190);
}

var G__6191 = cljs.core.next.call(null,seq__6144_6180__$1);
var G__6192 = null;
var G__6193 = (0);
var G__6194 = (0);
seq__6144_6166 = G__6191;
chunk__6146_6167 = G__6192;
count__6147_6168 = G__6193;
i__6148_6169 = G__6194;
continue;
}
} else {
}
}
break;
}

var G__6195 = seq__6134_6159;
var G__6196 = chunk__6141_6160;
var G__6197 = count__6142_6161;
var G__6198 = (i__6143_6162 + (1));
seq__6134_6159 = G__6195;
chunk__6141_6160 = G__6196;
count__6142_6161 = G__6197;
i__6143_6162 = G__6198;
continue;
} else {
var temp__4126__auto___6199 = cljs.core.seq.call(null,seq__6134_6159);
if(temp__4126__auto___6199){
var seq__6134_6200__$1 = temp__4126__auto___6199;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6134_6200__$1)){
var c__5118__auto___6201 = cljs.core.chunk_first.call(null,seq__6134_6200__$1);
var G__6202 = cljs.core.chunk_rest.call(null,seq__6134_6200__$1);
var G__6203 = c__5118__auto___6201;
var G__6204 = cljs.core.count.call(null,c__5118__auto___6201);
var G__6205 = (0);
seq__6134_6159 = G__6202;
chunk__6141_6160 = G__6203;
count__6142_6161 = G__6204;
i__6143_6162 = G__6205;
continue;
} else {
var vec__6153_6206 = cljs.core.first.call(null,seq__6134_6200__$1);
var orig_type_6207 = cljs.core.nth.call(null,vec__6153_6206,(0),null);
var f_6208 = cljs.core.nth.call(null,vec__6153_6206,(1),null);
var seq__6135_6209 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_6207,new cljs.core.PersistentArrayMap.fromArray([orig_type_6207,cljs.core.identity], true, false)));
var chunk__6137_6210 = null;
var count__6138_6211 = (0);
var i__6139_6212 = (0);
while(true){
if((i__6139_6212 < count__6138_6211)){
var vec__6154_6213 = cljs.core._nth.call(null,chunk__6137_6210,i__6139_6212);
var actual_type_6214 = cljs.core.nth.call(null,vec__6154_6213,(0),null);
var __6215 = cljs.core.nth.call(null,vec__6154_6213,(1),null);
var keys_6216 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_6158,actual_type_6214,f_6208], null);
var canonical_f_6217 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_6157),keys_6216);
dommy.core.update_event_listeners_BANG_.call(null,elem_6157,dommy.utils.dissoc_in,keys_6216);

if(cljs.core.truth_(elem_6157.removeEventListener)){
elem_6157.removeEventListener(cljs.core.name.call(null,actual_type_6214),canonical_f_6217);
} else {
elem_6157.detachEvent(cljs.core.name.call(null,actual_type_6214),canonical_f_6217);
}

var G__6218 = seq__6135_6209;
var G__6219 = chunk__6137_6210;
var G__6220 = count__6138_6211;
var G__6221 = (i__6139_6212 + (1));
seq__6135_6209 = G__6218;
chunk__6137_6210 = G__6219;
count__6138_6211 = G__6220;
i__6139_6212 = G__6221;
continue;
} else {
var temp__4126__auto___6222__$1 = cljs.core.seq.call(null,seq__6135_6209);
if(temp__4126__auto___6222__$1){
var seq__6135_6223__$1 = temp__4126__auto___6222__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6135_6223__$1)){
var c__5118__auto___6224 = cljs.core.chunk_first.call(null,seq__6135_6223__$1);
var G__6225 = cljs.core.chunk_rest.call(null,seq__6135_6223__$1);
var G__6226 = c__5118__auto___6224;
var G__6227 = cljs.core.count.call(null,c__5118__auto___6224);
var G__6228 = (0);
seq__6135_6209 = G__6225;
chunk__6137_6210 = G__6226;
count__6138_6211 = G__6227;
i__6139_6212 = G__6228;
continue;
} else {
var vec__6155_6229 = cljs.core.first.call(null,seq__6135_6223__$1);
var actual_type_6230 = cljs.core.nth.call(null,vec__6155_6229,(0),null);
var __6231 = cljs.core.nth.call(null,vec__6155_6229,(1),null);
var keys_6232 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_6158,actual_type_6230,f_6208], null);
var canonical_f_6233 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_6157),keys_6232);
dommy.core.update_event_listeners_BANG_.call(null,elem_6157,dommy.utils.dissoc_in,keys_6232);

if(cljs.core.truth_(elem_6157.removeEventListener)){
elem_6157.removeEventListener(cljs.core.name.call(null,actual_type_6230),canonical_f_6233);
} else {
elem_6157.detachEvent(cljs.core.name.call(null,actual_type_6230),canonical_f_6233);
}

var G__6234 = cljs.core.next.call(null,seq__6135_6223__$1);
var G__6235 = null;
var G__6236 = (0);
var G__6237 = (0);
seq__6135_6209 = G__6234;
chunk__6137_6210 = G__6235;
count__6138_6211 = G__6236;
i__6139_6212 = G__6237;
continue;
}
} else {
}
}
break;
}

var G__6238 = cljs.core.next.call(null,seq__6134_6200__$1);
var G__6239 = null;
var G__6240 = (0);
var G__6241 = (0);
seq__6134_6159 = G__6238;
chunk__6141_6160 = G__6239;
count__6142_6161 = G__6240;
i__6143_6162 = G__6241;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.unlisten_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq6131){
var G__6132 = cljs.core.first.call(null,seq6131);
var seq6131__$1 = cljs.core.next.call(null,seq6131);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__6132,seq6131__$1);
});
/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(){
var argseq__5373__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5373__auto__);
});

dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null)))))].join('')));
}

var vec__6244_6251 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_6252 = cljs.core.nth.call(null,vec__6244_6251,(0),null);
var selector_6253 = cljs.core.nth.call(null,vec__6244_6251,(1),null);
var seq__6245_6254 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__6246_6255 = null;
var count__6247_6256 = (0);
var i__6248_6257 = (0);
while(true){
if((i__6248_6257 < count__6247_6256)){
var vec__6249_6258 = cljs.core._nth.call(null,chunk__6246_6255,i__6248_6257);
var type_6259 = cljs.core.nth.call(null,vec__6249_6258,(0),null);
var f_6260 = cljs.core.nth.call(null,vec__6249_6258,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_6259,((function (seq__6245_6254,chunk__6246_6255,count__6247_6256,i__6248_6257,vec__6249_6258,type_6259,f_6260,vec__6244_6251,elem_6252,selector_6253){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_6259,dommy$core$this_fn);

return f_6260.call(null,e);
});})(seq__6245_6254,chunk__6246_6255,count__6247_6256,i__6248_6257,vec__6249_6258,type_6259,f_6260,vec__6244_6251,elem_6252,selector_6253))
);

var G__6261 = seq__6245_6254;
var G__6262 = chunk__6246_6255;
var G__6263 = count__6247_6256;
var G__6264 = (i__6248_6257 + (1));
seq__6245_6254 = G__6261;
chunk__6246_6255 = G__6262;
count__6247_6256 = G__6263;
i__6248_6257 = G__6264;
continue;
} else {
var temp__4126__auto___6265 = cljs.core.seq.call(null,seq__6245_6254);
if(temp__4126__auto___6265){
var seq__6245_6266__$1 = temp__4126__auto___6265;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6245_6266__$1)){
var c__5118__auto___6267 = cljs.core.chunk_first.call(null,seq__6245_6266__$1);
var G__6268 = cljs.core.chunk_rest.call(null,seq__6245_6266__$1);
var G__6269 = c__5118__auto___6267;
var G__6270 = cljs.core.count.call(null,c__5118__auto___6267);
var G__6271 = (0);
seq__6245_6254 = G__6268;
chunk__6246_6255 = G__6269;
count__6247_6256 = G__6270;
i__6248_6257 = G__6271;
continue;
} else {
var vec__6250_6272 = cljs.core.first.call(null,seq__6245_6266__$1);
var type_6273 = cljs.core.nth.call(null,vec__6250_6272,(0),null);
var f_6274 = cljs.core.nth.call(null,vec__6250_6272,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_6273,((function (seq__6245_6254,chunk__6246_6255,count__6247_6256,i__6248_6257,vec__6250_6272,type_6273,f_6274,seq__6245_6266__$1,temp__4126__auto___6265,vec__6244_6251,elem_6252,selector_6253){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_6273,dommy$core$this_fn);

return f_6274.call(null,e);
});})(seq__6245_6254,chunk__6246_6255,count__6247_6256,i__6248_6257,vec__6250_6272,type_6273,f_6274,seq__6245_6266__$1,temp__4126__auto___6265,vec__6244_6251,elem_6252,selector_6253))
);

var G__6275 = cljs.core.next.call(null,seq__6245_6266__$1);
var G__6276 = null;
var G__6277 = (0);
var G__6278 = (0);
seq__6245_6254 = G__6275;
chunk__6246_6255 = G__6276;
count__6247_6256 = G__6277;
i__6248_6257 = G__6278;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.listen_once_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq6242){
var G__6243 = cljs.core.first.call(null,seq6242);
var seq6242__$1 = cljs.core.next.call(null,seq6242);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__6243,seq6242__$1);
});

//# sourceMappingURL=core.js.map