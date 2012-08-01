define(["app/app"], function(app) {
  return describe("An app instance", function() {
    it("should be namespaced under `window`", function() {
      app.namespace('something');
      return expect(window.something).toBe(app);
    });
    return it("should have model, view, and collection objects", function() {
      expect(app.Models).toEqual({});
      expect(app.Views).toEqual({});
      expect(app.Collections).toEqual({});
      return expect(app.Routers).toEqual({});
    });
  });
});