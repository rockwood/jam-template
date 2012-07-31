define [
  'backbone'
], (Backbone) ->

  appState = Backbone.Model.extend()

  appInstance = null

  class App
    constructor: ()->
      @State = new appState()
      @Models = {}
      @Collections = {}
      @Views = {}
      @Routers = {}

    namespace: (namespace) ->
      window[namespace or 'App'] = @

    log: () ->
      console.log(arg) for arg in arguments
      

  # Create an appInstance instance if it hasn't yet been instantiated
  appInstance = new App() if appInstance is null 
  
  appInstance