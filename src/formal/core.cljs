(ns ^:figwheel-always formal.core
  (:require [reagent.core :as ra]))

(enable-console-print!)

(println "welcome! 吃饭了吗?")

;; define your app data so that it doesn't get over-written on reload
(defonce app-state
  (atom {:form {}}))

(defn input-change-handler [event]
  (let [input-name (.. event -target -name)
        input-value (.. event -target -value)]
    (swap! app-state
      assoc-in [:form (keyword input-name)] input-value)))

(defn submit-handler [event]
  (.preventDefault event)
  (let [form-data (clj->js (:form @app-state))]
    (swap! app-state dissoc :form)
    (.log js/console form-data)))

(defn text-input [input-name data & {:keys [placeholder]}]
  [:input {:type "text"
           :name input-name
           :placeholder placeholder
           :value (get (:form data) (keyword input-name))
           :onChange input-change-handler}])

(defn form-wrapper [data]
  [:div#formal
    [:form {:onSubmit submit-handler}
      [:p [text-input "x_firstname" data :placeholder "First Name"]]
      [:p [text-input "x_lastname" data :placeholder "Last Name"]]
      [:p [text-input "x_emailaddress" data :placeholder "Email Address"]]
      [:p [:input {:type "submit"}]]]])

(defn render [data]
  (ra/render [form-wrapper data]
    (.getElementById js/document "app")))

(defonce watch-app-state
  (add-watch app-state :on-change
    (fn [_ _ _ new-state]
     (prn new-state)
     (render new-state))))

(render @app-state)
