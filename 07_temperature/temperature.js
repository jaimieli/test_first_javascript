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
	this.setFahrenheit = function (f) {
		return temperatureF = f;
		return temperatureC = (f -  32)  *  5 /9;
	};
	this.setCelcius = function (c) {
		return temperatureF = c *  9 / 5 + 32;
		return temperatureC = c;
	};
}