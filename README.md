Build using Leiningen:

    lein repl

Run via Leiningen REPL on port 3000:

    user=> (require 'hello-compojure.handler)
    user=> server (hello-compojure.handler/-main)

Procfile included enables deployment to heroku via cli or by github itegrations.
