define [
  'backbone'
  'jquery'
  'app/app'
  'app/routers/app_router'
], (Backbone, $, app, AppRouter) ->
  "use strict"
  ->
    app.router = new AppRouter();
    Backbone.history.start({pushState: true})

    # TODO - kill this in production
    app.namespace('Pampers');