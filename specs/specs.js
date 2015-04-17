describe("Pizza", function () {
  describe('order', function() {
    it("will return 'small with cheese' for a new pizza", function() {
      var testPizza = Object.create(Pizza);
      expect(testPizza.order()).to.equal('small pizza with cheese');
    });

    it("will return 'medium with cheese' for a medium pizza", function() {
      var testPizza = Object.create(Pizza);
      testPizza.size = "medium";
      expect(testPizza.order()).to.equal('medium pizza with cheese');
    });

    it("will return 'large with cheese' for a large pizza", function() {
      var testPizza = Object.create(Pizza);
      testPizza.size = "large";
      expect(testPizza.order()).to.equal('large pizza with cheese');
    });

    it("will return 'small with pepperoni' for a small pizza w/ pepperoni", function() {
      var testPizza = Object.create(Pizza);
      testPizza.toppings = "pepperoni";
      expect(testPizza.order()).to.equal('small pizza with pepperoni');
    });
  });

  describe('price', function() {
    it("will return 10 for a new pizza", function() {
      var testPizza = Object.create(Pizza);
      expect(testPizza.price()).to.equal(10);
    });

    it("will return 12 for a medium cheese pizza", function() {
      var testPizza = Object.create(Pizza);
      testPizza.size = "medium"
      expect(testPizza.price()).to.equal(12);
    });

    it("will return 14 for a large pepperoni pizza", function() {
      var testPizza = Object.create(Pizza);
      testPizza.size = "large";
      testPizza.toppings = "pepperoni";
      expect(testPizza.price()).to.equal(14);
    });


  });
});
