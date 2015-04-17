describe("Pizza", function () {
  describe('order', function() {
    it("will return 'small with cheese' for a new pizza", function() {
      var testPizza = Object.create(Pizza);

      console.log(testPizza);

      expect(testPizza.order()).to.equal('small with cheese');
    });

  });
});
