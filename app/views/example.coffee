define [
  'backbone'
  'app/app'
  'hbt!app/templates/example'
], (Backbone, app, template) ->
  
  app.Views.ExampleView = Backbone.View.extend
    
    id: 'exampleView'

    initialize: ->
      @render()

    render: ->
      @$el.html(template(name: 'Hello World'))
      @