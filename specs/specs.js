describe("Pizza", function () {
  describe('order', function() {
    it("will return 'small with cheese' for a new pizza", function() {
      var testPizza = Object.create(Pizza);
      expect(testPizza.order()).to.equal('small with cheese');
    });

    it("will return 'medium with cheese' for a medium pizza", function() {
      var testPizza = Object.create(Pizza);
      testPizza.size = "medium";
      expect(testPizza.order()).to.equal('medium with cheese');
    });

    it("will return 'large with cheese' for a large pizza", function() {
      var testPizza = Object.create(Pizza);
      testPizza.size = "large";
      expect(testPizza.order()).to.equal('large with cheese');
    });

  });
});
