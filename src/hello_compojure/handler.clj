(ns hello-compojure.handler
  (:use ring.util.response)
  (:require [compojure.handler :as handler]
            [compojure.route :as route]
            [clojure.java.io :as io]
            [compojure.core :refer [GET POST defroutes]]))


(defroutes app-routes
  (GET "/" [] (resource-response "index.html" {:root "public"}))
  (route/resources "/")
  (route/not-found "Not Found"))


(def app
  (handler/api app-routes))
