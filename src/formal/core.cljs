(ns formal.core
  (:use [formal.dom :only
    [attr by-id console-log data domready input-name input-value
     on-submit target]]))

; given a form, return array of inputs that have "x_" prefix in name
(defn x-inputs [form]
  (let [inputs (.getElementsByTagName form "input")]
    (filter #(re-find #"^x_" (str (input-name %))) inputs)))

; given array of inputs, return map with name/value pairs
(defn input-data [inputs]
  (let [names (map input-name inputs)
        values (map input-value inputs)]
    (zipmap names values)))

; given a form submission event, build a js object with
; name/value pairs for x_ inputs
(defn submit-handler [event]
  (console-log "submit being handled")
  (.preventDefault event)

  (let [form (target event)
        form-id (data form "form-id")
        inputs (x-inputs form)
        data (assoc (input-data inputs) "formid" form-id)
        js-data (clj->js data)]

    ; todo: do something with this glorious data
    (console-log js-data)))

(domready
  (fn []
    (let [form (by-id "formal")]
      (console-log "dom is ready")
      (on-submit form submit-handler))))
