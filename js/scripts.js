function Pizza(orderName, pizzaToppings, pizzaSize, toppingsPrice, sizePrice){
  this.orderName = orderName;
  this.pizzaToppings = pizzaToppings;
  this.pizzaSize = pizzaSize;
  this.toppingsPrice = toppingsPrice;
  this.sizePrice = sizePrice;
};


Pizza.prototype.receipt = function(){
  var receiptTotal = this.toppingsPrice + this.sizePrice;
  return receiptTotal;
};


var pepperoni = {name: "Pepperoni", price: 1.00};
var sausage = {name: "Sausage", price: 1.00};
var prosciutto ={name: "Prosciutto", price: 2.00};
var mushroom = {name: "Mushrooms", price: .50};
var kale = {name: "Kale", price: .50};
var caramelizedOnions = {name: "Caramelized Onions", price: 1.00};
var toppings = [pepperoni, sausage, prosciutto, mushroom, kale, caramelizedOnions];

var personal = {name: 'Personal - 10"', price: 12.00};
var medium = {name: 'Medium - 12"', price: 16.00};
var large = {name:'Large - 18"', price: 18.00};
var xlarge = {name:'XL - 22"', price: 22.00};
var sizes = [personal, medium, large, xlarge];

$(document).ready(function() {
  $("form#new-order").submit(function(event) {
    event.preventDefault();

  var inputtedName = $("input#new-name").val();
  var toppingsTotal = 0;
  var inputtedToppings = [];
  $('#toppings:checked').each(function() {
    var inputtedTopping = $(this).val();
    inputtedToppings.push(inputtedTopping);
    toppings.forEach(function(topping) {
      if (topping.name === inputtedTopping) {
        toppingsTotal += topping.price;
      };
    });
  });
  var sizeTotal = 0;
   var inputtedSize = $("#size").val();
   sizes.forEach(function(size) {
     if (size.name === inputtedSize) {
       sizeTotal = size.price;
    };
  });

  var newPizza = new Pizza (inputtedName, inputtedToppings, inputtedSize, toppingsTotal, sizeTotal);

  $("ul#receiptdetails").append("<li><span class='receiptdetail'>" + "Order name: " + newPizza.orderName + "</span></li>");
  $("ul#receiptdetails").append("<li><span class='receiptdetail'>" + "Order total: $" + newPizza.receipt() + "</span></li>");
  $(".receiptwell").show();
    $("input#new-name").val("");
  });
});
