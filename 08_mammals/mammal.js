function Mammal (name) {
	this.name = name;
	this.offspring = [];
	this.sayHello = function () {
		return "My name is " + this.name + ", I'm a Mammal";
	}
}

Mammal.prototype.haveBaby = function () { 
	var newBaby = new Mammal("Baby "+this.name);
	this.offspring.push(newBaby);
	return newBaby;
} 

function Cat (name, color) {
	this.name = name;
	this.color = color;
	this.offspring = []
}

Cat.prototype = new Mammal(); // inherits all the methods from Mammal
Cat.prototype.constructor = Cat; // ensures that instanceof works properly

Cat.prototype.haveBaby = function (x) {
	var newCat = new Cat("Baby " + this.name);
	this.offspring.push(newCat);
	newCat.color = x;
	return newCat;
}