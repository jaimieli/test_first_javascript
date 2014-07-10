var repeat = function (string, count) {
	var total = "";
	for(var i = 0; i < count; i++) {
		total += string;
	}
	return total;
}

var join = function (array, delimeter){
     
    var total = "";
    
    if (array.length === 0) {
        return "";
    }
    else if (array.length === 1) {
        return array[0];
    }
    else if ((array.length > 1) && (typeof delimeter !== "undefined")) {
        for (var i = 0; i < array.length; i++) {
            total += array.shift();
            total += delimeter;
    }
    total += array[0];
    return total;    
    }
    else {
        for (var i = 0; i < array.length; i++) {
            total += array.shift();
    }
    total += array[0];
    return total;
    }
}

var sum = function (array) {
    var count = 0;
    for (var i = 0; i < array.length; i++) {
        count +=  array[i];
    }
    return count;
}

var paramify = function (dictionary) {
    // sorts the dictionary hash so that it's alphabetized by keys and omits inherited properties  
    var sortedKeys = [];
    var sortedObj = {};
    for (var i in dictionary){ 
        if (dictionary.hasOwnProperty(i)) {                     
            sortedKeys.push(i);
        }
    }
    sortedKeys.sort();
    for (var k in sortedKeys){
        sortedObj[sortedKeys[k]] = dictionary[sortedKeys[k]];
    }
    // sorted dictionary is now in a new variable, sorted object
    var length = 0;
    for(var object in sortedObj) {
        length++;
    }
    var total = "";     
    if (length === 0) {                                             
        return "";
    }
    else {                                                      
        for (var b in sortedObj) {
          total += b + "=" + sortedObj[b] + "&";
        }
        totallength = total.length;
        total = total.slice(0,totallength-1);
        return total;
    }
}


var factorial = function(n) {
	var fact = [];
	if (n === 0 || n === 1) {
        return 1;
    }
  	if (fact[n] > 0) {
        return f[n];
    }
  	return fact[n] = factorial(n-1) * n;
}

var concat_string = function(){
	if(arguments.length === 0){
		return "";
	}
	else {
		return Array.prototype.slice.call(arguments).join("");
	}
}
