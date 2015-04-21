(ns formal.dom)

; ಠ_ಠ
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

(defn input-name [input]
  (attr input "name"))

(defn input-value [input]
  (.-value input))

(defn on-submit [form handler]
  (.addEventListener form "submit" handler))

(defn target [event] (.-target event))
