define [
  "app/app"
], (app) ->
  
  describe "An app instance", ->

    it "should be namespaced under `window`", ->
      app.namespace('something')
      expect(window.something).toBe(app)

    it "should have model, view, and collection objects", ->
      expect(app.Models).toEqual({})
      expect(app.Views).toEqual({})
      expect(app.Collections).toEqual({})
      expect(app.Routers).toEqual({})