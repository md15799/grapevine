(ns hello-compojure.handler
  (:use ring.util.response)
  (:require [compojure.handler :refer [site]]
            [compojure.route :as route]
            [clojure.java.io :as io]
            [compojure.core :refer [GET POST defroutes]]
            [ring.adapter.jetty :as jetty]
            [environ.core :refer [env]]))


(defroutes app-routes
  (GET "/" [] (resource-response "index.html" {:root "public"}))
  (route/resources "/")
  (route/not-found "Not Found"))

(defn -main [& [port]]
    (let [port (Integer. (or port (env :port) 3000))]
      (jetty/run-jetty (site #'app-routes) {:port port :join? false})))
