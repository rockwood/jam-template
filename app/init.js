define(['backbone', 'jquery', 'app/app', 'app/routers/app_router'], function(Backbone, $, app, AppRouter) {
  "use strict";
  return function() {
    app.router = new AppRouter();
    Backbone.history.start();
    return app.namespace('App');
  };
});