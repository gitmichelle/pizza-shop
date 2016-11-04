function Pizza(orderName, pizzaToppings, pizzaSize){
  this.orderName = orderName;
  this.pizzaToppings = pizzaToppings;
  this.pizzaSize = pizzaSize;
};

// Pizza.prototype.receipt = function(){
//   var receiptTotal = this.pizzaToppings + this.pizzaSize);
//   return receiptTotal;
// };


var pepperoni = {price: 1.00};
var sausage = {price: 1.00};
var prosciutto ={price: 2.00};
var mushroom = {price: .50};
var kale = {price: .50};
var caramelizedOnions = {price: 1.00};
var toppings = {toppings: [pepperoni, sausage, prosciutto, mushroom, kale, caramelizedOnions]};

var personal = {price: 12.00};
var medium = {price: 16.00};
var large = {price: 18.00};
var xlarge = {price: 22.00};
var size = [personal, medium, large, xlarge];

$(document).ready(function() {
  $("form#new-order").submit(function(event) {
    event.preventDefault();

  var inputtedName = $("input#new-name").val();
  var inputtedToppings = [];
  $('#toppings:checked').each(function() {
    inputtedToppings.push($(this).val());
  });
  console.log(inputtedToppings);
  var inputtedSize = $("#size").val();
  console.log(inputtedSize);

  var newPizza = new Pizza (inputtedName, inputtedToppings, inputtedSize);

  $("ul#receiptdetails").append("<li><span class='receiptdetail'>" + newPizza.orderName + "</span></li>");
  $("ul#receiptdetails").append("<li><span class='receiptdetail'>" + newPizza.pizzaToppings + "</span></li>");
  $("ul#receiptdetails").append("<li><span class='receiptdetail'>" + newPizza.pizzaSize + "</span></li>");

    $("input#new-name").val("");
  });
});
