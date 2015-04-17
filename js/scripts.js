var Pizza = {
  size: "small",
  toppings: "cheese",

  order: function() {
    return this.size + " pizza with " + this.toppings;
  },

  price: function() {
      var topCost;
      var sizeCost;

    if (this.toppings === "cheese") {
      var topCost = 0
    } else {
      var topCost = 1
  }
    if (this.size === "small") {
      var sizeCost = 0
    }
    if (this.size === "medium") {
      var sizeCost = 2
    }
    if (this.size === "large") {
      var sizeCost = 3
    }

    return 10 + topCost + sizeCost;
  }

};


$(document).ready(function() {

  $('form#input').submit(function(event) {

    var yourPizza = Object.create(Pizza);

    var inputSize = $('input#size');
    var inputTopping = $('input#topping');

    yourPizza.size = inputSize;
    yourPizza.toppings = inputTopping;

    var cost = yourPizza.price();

    $('#order').text(yourPizza.order)
    $('#cost').text(cost)



  $('#result').show();
  event.preventDefault();

  });

});
