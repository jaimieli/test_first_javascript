function hello(person) {
	if(typeof person == 'undefined') {
		return "Hello!";
	}
	else {
		return "Hello, " + person + "!";
	}
}

hello();
hello("Fred");