var Grub = function() {
	this.age = 0;
	this.color = 'pink';
	this.food = 'jelly';
};
Grub.prototype.eat = function() {
  console.log('eating');
};
/*
var Stack = function() {
	this.storage = {}
	this.length = 0;
};
Stack.prototype.push = function(value) {
	this.storage[this.length] = value;
	this.length++;
}
*/
