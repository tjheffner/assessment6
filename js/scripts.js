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

    var inputSize = $('input[name=size]:checked', '#input').val()
    var inputTopping = $('input[name=topping]:checked', '#input').val()

    yourPizza.size = inputSize;
    yourPizza.toppings = inputTopping;

    $('#order').text(yourPizza.order());
    $('#cost').text(yourPizza.price());

  $('#result').show();
  event.preventDefault();

  });

});
