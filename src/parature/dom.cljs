(ns parature.dom)

; grrr
(extend-type js/HTMLCollection
  ISeqable (-seq [array] (array-seq array 0)))

(defn attr [el key]
  (.getAttribute el key))

(defn by-id [id]
  (.getElementById js/document id))

(defn console-log [message]
  (.log js/console message))

(defn data [el key]
  (.getAttribute el (str "data-" key)))

(defn domready [handler]
  (.addEventListener js/window "DOMContentLoaded" handler))

(defn target [event] (.-target event))
