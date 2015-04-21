(defproject parature "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-3208"]
                 [prismatic/dommy "1.0.0"]]

  :plugins [[lein-cljsbuild "1.0.5"]]

  :cljsbuild {
    :builds [{:id "dev"
              :source-paths ["src/parature"]
              :compiler {
                :output-to "resources/public/parature.js"
                :output-dir "resources/public/out"
                :optimizations :none
                :source-map true}}]})
