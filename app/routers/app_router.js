define(['backbone', 'jquery', 'app/app', 'app/views/example'], function(Backbone, $, app, ExampleView) {
  return app.Routers.AppRouter = Backbone.Router.extend({
    routes: {
      "example": "example"
    },
    initialize: function() {
      return app.log('appRouter initialized');
    },
    example: function() {
      return $('#main').html(new ExampleView().el);
    }
  });
});