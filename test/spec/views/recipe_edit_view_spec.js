define(["app/app", "app/models/recipe", "app/views/recipe_edit_view"], function(app, Recipe, RecipeEditView) {
  return describe("EditRecipeSpec", function() {
    beforeEach(function() {
      jasmine.Ajax.useMock();
      setFixtures("<div id='recipe_edit_view'></div>");
      this.recipe = new Recipe({
        title: "Food",
        description: "It is delicious.",
        id: 1
      });
      this.recipeEditView = new RecipeEditView({
        el: $("#recipe_edit_view"),
        model: this.recipe
      });
      return this.recipeEditView.render();
    });
    it("should have inputs", function() {
      expect(this.recipeEditView.$("input[name=title]").val()).toEqual(this.recipe.get("title"));
      return expect(this.recipeEditView.$("textarea[name=description]").val()).toEqual(this.recipe.get("description"));
    });
    return describe("saving", function() {
      beforeEach(function() {
        this.recipeEditView.$("input[name=title]").val("the new title");
        this.recipeEditView.$("textarea[name=description]").val("the new description");
        return this.recipeEditView.save(new jQuery.Event);
      });
      describe("a successful response", function() {
        beforeEach(function() {
          this.request = mostRecentAjaxRequest();
          return this.request.response({
            status: 200
          });
        });
        it("should update the model", function() {
          expect(this.recipe.get("title")).toEqual("the new title");
          return expect(this.recipe.get("description")).toEqual("the new description");
        });
        return it("posts to the backend", function() {
          expect(this.request.method).toEqual("PUT");
          return expect(this.request.url).toEqual("/recipes/1");
        });
      });
      return describe("with an error", function() {
        beforeEach(function() {
          this.request = mostRecentAjaxRequest();
          return this.request.response({
            status: 422,
            responseText: JSON.stringify({
              errors: {
                title: ["cannot be blank"]
              }
            })
          });
        });
        it("marks the field as error", function() {
          return expect(this.recipeEditView.$("div.control-group:first")).toHaveClass("error");
        });
        return it("displays the error message", function() {
          return expect(this.recipeEditView.$("div.control-group:first span.help-inline")).toHaveText("cannot be blank");
        });
      });
    });
  });
});