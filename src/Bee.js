var Bee = function() {
	Grub.call(this); // call Grup superclass
	this.age = 5;
	this.color = 'yellow';
	//this.food; // TODO inherit from Grup
	//this.eat; // TODO inherit from Grub - function
	this.job = 'keep on growing';
};
Bee.prototype = Object.create(Grub.prototype); // sets inheritence
Bee.prototype.constructor = Bee; // set Bee constructor function
//Bee.prototype.food = Bee.prototype.food;
