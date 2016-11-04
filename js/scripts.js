function Pizza(pizzaToppings, pizzaSize){
  this.pizzaToppings = pizzaToppings;
  this.pizzaSize = pizzaSize;
};

Pizza.prototype.receipt = function(){
  var receiptTotal = this.pizzaToppings + this.pizzaSize);
  return receiptTotal;
};

var toppings = [pepperoni, sausage, prosciutto, mushroom, kale, caramelizedOnions];
var pepperoni = {price: 1.00};
var sausage = {price: 1.00};
var prosciutto ={price: 2.00};
var mushroom = {price: .50};
var kale = {price: .50};
var caramelizedOnions = {price: 1.00};

var size = [personal, medium, large, xlarge];
var personal = {price: 12.00};
var medium = {price: 16.00};
var large = {price: 18.00};
var xlarge = {price: 22.00};
