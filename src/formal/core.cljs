(ns formal.core
  (:require [formal.dom :as dom]))

; given a form, return array of inputs that have "x_" prefix in name
(defn x-inputs [form]
  (let [inputs (dom/by-tag form "input")]
    (filter #(re-find #"^x_" (str (dom/input-name %))) inputs)))

; given array of inputs, return map with name/value pairs
(defn input-data [inputs]
  (let [names (map dom/input-name inputs)
        values (map dom/input-value inputs)]
    (zipmap names values)))

; given a form submission event, build a js object with
; name/value pairs for x_ inputs
(defn submit-handler [event]
  (dom/console-log "submit being handled")
  (.preventDefault event)

  (let [form (dom/target event)
        form-id (dom/data form "form-id")
        inputs (x-inputs form)
        data (assoc (input-data inputs) "formid" form-id)
        js-data (clj->js data)]

    ; todo: do something with this glorious data
    (dom/console-log js-data)))

(dom/ready
  (fn []
    (let [form (dom/by-id "formal")]
      (dom/console-log "dom is ready")
      (dom/on-submit form submit-handler))))
