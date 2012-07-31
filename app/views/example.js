define(['backbone', 'app/app', 'hbt!app/templates/example'], function(Backbone, app, template) {
  return app.Views.ExampleView = Backbone.View.extend({
    id: 'exampleView',
    initialize: function() {
      return this.render();
    },
    render: function() {
      this.$el.html(template({
        name: 'Hello World'
      }));
      return this;
    }
  });
});