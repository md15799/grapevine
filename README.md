Web application to provide the following statistics:
- Whitespace delimited word count
- Line count
- Mean, mode and median letters per word (1 decimal place)
- Most common letter


Build using Leiningen:

    lein repl

Run via Leiningen REPL on port 3000:

    user=> (require 'hello-compojure.handler)
    user=> server (hello-compojure.handler/-main)

Procfile included enables deployment to heroku via cli or by github itegrations.
