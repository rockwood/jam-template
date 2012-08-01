describe("RecipeView", function() {
  beforeEach(function() {
    setFixtures("<div id='recipe_view'></div>");
    this.recipe = new Cookbook.Models.Recipe({
      title: "Yummy food"
    });
    this.recipeView = new Cookbook.Views.RecipeView({
      el: $("#recipe_view"),
      model: this.recipe
    });
    return this.recipeView.render();
  });
  it("should render the recipe into its element", function() {
    return expect(this.recipeView.$el).toHaveText(/Yummy food/);
  });
  return describe("listening to model changes", function() {
    beforeEach(function() {
      return this.recipe.set({
        title: "Awful food"
      });
    });
    return it("should rerender the view", function() {
      return expect(this.recipeView.$el).toHaveText(/Awful food/);
    });
  });
});