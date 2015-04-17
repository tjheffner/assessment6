var Pizza = {
  size: "small",
  toppings: "cheese",

  order: function() {
    return this.size + " with " + this.toppings;
  }


};


// var order = function(Pizza) {
//   return size + " " + toppings;
// };


//
// $(document).ready(function() {
//
//   $('form#input').submit(function(event) {
//
//   $('#result').show();
//   event.preventDefault();
//
//   });
//
// });
