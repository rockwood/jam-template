define [
  'backbone'
  'jquery'
  'app/app'
  'app/routers/app_router'
], (Backbone, $, app, AppRouter) ->
  "use strict"
  ->
    app.router = new AppRouter();
    Backbone.history.start()

    # TODO - kill this in production
    app.namespace('App');