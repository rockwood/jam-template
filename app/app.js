define(['backbone'], function(Backbone) {
  var App, appInstance, appState;
  appState = Backbone.Model.extend();
  appInstance = null;
  App = (function() {

    function App() {
      this.State = new appState();
      this.Models = {};
      this.Collections = {};
      this.Views = {};
      this.Routers = {};
    }

    App.prototype.namespace = function(namespace) {
      return window[namespace || 'App'] = this;
    };

    App.prototype.log = function() {
      var arg, _i, _len, _results;
      _results = [];
      for (_i = 0, _len = arguments.length; _i < _len; _i++) {
        arg = arguments[_i];
        _results.push(console.log(arg));
      }
      return _results;
    };

    return App;

  })();
  if (appInstance === null) {
    appInstance = new App();
  }
  return appInstance;
});