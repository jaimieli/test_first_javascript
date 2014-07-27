function f2c (f) {
	return (f -  32)  *  5 /9; 
};

function c2f (c) {
	return c *  9 / 5 + 32;
};

function Temperature () {
	var temperatureF = 0;
	var temperatureC = 0;
	this.fahrenheit = function() {
		return temperatureF;
	}
	this.celcius = function() {
		return temperatureC;
	}
	this.setFahrenheit = function (x) {
		return temperatureF = x;
		return temperatureC = f2c(x);
	}
	this.setCelcius = function (x) {
		return temperatureF = c2f(x);
		return temperatureC = x;
	}
};