describe("RecipeListView", function() {
  beforeEach(function() {
    setFixtures("<div id='recipe_list_view'></div>");
    this.recipes = new Cookbook.Collections.Recipes([
      {
        title: "Yummy food",
        id: 1
      }, {
        title: "Yucky food",
        id: 2
      }
    ]);
    this.recipeListView = new Cookbook.Views.RecipeListView({
      el: $("#recipe_list_view"),
      collection: this.recipes
    });
    return this.recipeListView.render();
  });
  return it("should render the recipes into its element", function() {
    expect(this.recipeListView.$el).toHaveText(/Yummy food/);
    return expect(this.recipeListView.$el).toHaveText(/Yucky food/);
  });
});