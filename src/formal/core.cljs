(ns formal.core
  (:require [formal.dom :as dom]))

; given a form, return array of inputs that have "x_" prefix in name
(defn x-inputs [form]
  (let [inputs (dom/by-tag form "input")]
    (filter #(re-find #"^x_" (str (dom/input-name %))) inputs)))

; given array of inputs, return map with name/value pairs
; input-data: into/juxt version
(defn input-data [inputs]
  (into {}
    (map (juxt dom/input-name dom/input-value) inputs)))

; input-data: reduce version
; (defn input-data [inputs]
;   (reduce (fn [result input]
;     (assoc result (dom/input-name input) (dom/input-value input))) {} inputs))

; input-data: for version
; (defn input-data [inputs]
;   (apply conj
;     (for [input inputs]
;       {(dom/input-name input) (dom/input-value input)})))

; input-data: zipmap version
; (defn input-data [inputs]
;   (let [names (map dom/input-name inputs)
;         values (map dom/input-value inputs)]
;     (zipmap names values)))

; expects etrigueForm.js to be loaded in head
; equivalent to "new EtrigueForm"
(defn etrigue-form [id]
  (js/EtrigueForm. id))

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

    ; todo: use etrigue-form submitManually function to submit js-data
    ; (dom/console-log (etrigue-form form-id))

    ; todo: use this glorious data
    (dom/console-log js-data)))

(dom/ready
  (fn []
    (let [form (dom/by-id "formal")]
      (dom/console-log "dom is ready")
      (dom/on-submit form submit-handler))))
