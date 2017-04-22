(defproject hello-compojure "0.1.0-SNAPSHOT"
  :description "Grapevine"
  :url "http://example.com/FIXME"
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [compojure "1.5.1"]
                 [ring/ring-defaults "0.2.1"]
                 [ring/ring-jetty-adapter "1.3.2"]
                 [environ "1.0.0"]]
  :min-lein-version "2.0.0"
  :plugins [[lein-ring "0.9.7"]
            [environ/environ.lein "0.3.1"]]
  :hooks [environ.leiningen.hooks]
  :uberjar-name "hello-compojure.jar"
  :ring {:handler hello-compojure.handler/app}
  :profiles
  {:production {:env {:production true}}
      :dev {:dependencies [[javax.servlet/servlet-api "2.5"]
                        [ring/ring-mock "0.3.0"]]}})
