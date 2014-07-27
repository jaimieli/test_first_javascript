function Mammal (name) {
	this.name = name;
	this.offspring = [];
	this.sayHello = function () {
		return "My name is " + this.name + ", I'm a Mammal";
	}
	this.haveBaby = function () { 
		// extends the Mammal prototype with a method, haveBaby, added to the Mammal prototype
		var newBaby = new Mammal("Baby "+this.name);
		// newBaby is an instance of Mammal with the name "Baby" + parent's name
		this.offspring.push(newBaby);
		// pushes newBaby's name to the offspring array
		return newBaby;
	} 
}

function Cat (name, color) {
	this.name = name;
	this.color = color;
	// this.offspring = [] // not needed since it'll inherit the method from the Mammal constructor
}

Cat.prototype = new Mammal(); // inherits all the methods from Mammal
// Cat.prototype.constructor = Cat; // ensures that instanceof works properly

Cat.prototype.haveBaby = function (x) {
	var newCat = new Cat("Baby " + this.name);
	this.offspring.push(newCat);
	newCat.color = x;
	return newCat;
}