define  [
  'backbone'
  'jquery'
  'app/app'
  'app/views/example'
], (Backbone, $, app, ExampleView) ->
  app.Routers.AppRouter = Backbone.Router.extend
    
    routes: {
      "example": "example",
    }

    initialize: ->
      app.log('appRouter initialized')
    
    example: ->
      $('#main').html(new ExampleView().el);