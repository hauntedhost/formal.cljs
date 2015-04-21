(ns parature.core
  (:require [dommy.core :as dommy :refer-macros [sel1]]))

; grrr
(extend-type js/HTMLCollection
  ISeqable (-seq [array] (array-seq array 0)))

(defn click-handler [e]
  (.log js/console "you clicked!"))

(defn console-log [message]
  (.log js/console message))

; (dommy/listen! (sel1 "form[data-etrigue-form]") :click click-handler)

; (.log js/console "Hello world!")

(defn attr [el key]
  (.getAttribute el key))

(defn data [el key]
  (.getAttribute el (str "data-" key)))

(defn target [event] (.-target event))

(defn domready [handler]
  (.addEventListener js/window "DOMContentLoaded" handler))

(defn by-id [id]
  (.getElementById js/document (name id)))

(defn extract-inputs [form]
  (let [inputs (.getElementsByTagName form "input")
        filtered  (filter #(re-find #"^x_" (str (attr % "name"))) inputs)]

  ; filtered (filter fn [input]
  ;   (re-matches #"/^x_/" (attr input "name")) inputs)

    ; filtered (filter #(re-matches #"/^x_/" %) inputs)

    ; (.log js/console form)
    ; (.log js/console (count inputs))
    ; (.log js/console inputs)

    ; (filter fn [x]
    ;   (let [name (.getAttribute)]

    ;   )
    ;   (= ))
    ;   inputs)

    ; (filter (fn [x]
    ;   (= (count x) 1))
    ;   ["a" "aa" "b" "n" "f" "lisp" "clojure" "q" ""])

    (doseq [input filtered]
      (.log js/console (attr input "name")))))

    ; (doseq [input inputs]
    ;   (let [name (.getAttribute input "name")]
    ;     (.log js/console name)))))

(defn submit-handler [event]
  (.preventDefault event)
  (.log js/console "submit handler")
  ; (.log js/console event)
  ; (.log js/console (target event))
  (extract-inputs (target event)))

(defn on-submit [selector]
 (.addEventListener (by-id selector) "submit" submit-handler))

; (defn on-submit [selector handler]
;   (let [el (by-id selector)]
;     (.addEventListener js/window el "submit" handler)))

; (defn watch [event selector handler]
;   (let [filter-on-selector
;         (fn [e]
;           (let [target (target e)
;                 candidates (.querySelectorAll js/document selector)]
;             (when (el-in-nodelist candidates target)
;               (handler e))))]
;     (.addEventListener js/document event filter-on-selector)))

(defn werd [event]
  (.preventDefault event)
  (.log js/console "yep")
)

(domready
  (fn []
    ; (.addEventListener (by-id "btn") "click" (fn [] (.log js/console "click")))
    (.log js/console "dom is ready")
    (on-submit "hello")
  )
)
