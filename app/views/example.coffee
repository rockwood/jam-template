define [
  'backbone'
  'app/app'
  'jade!app/templates/example'
], (Backbone, app, template) ->
  
  app.Views.ExampleView = Backbone.View.extend
    
    id: 'exampleView'

    className: 'span'

    initialize: ->
      @render()

    render: ->
      @$el.html(template(name: 'Hello World'))
      @