// complete 

function countWords(string) {
	return string.split(" ").length;
}

function makeAdder (A) {
	return function adderOf2function (B) {
		return A + B; 
	}
	return adderOf2function();
}

function forEach (array, action) {
	for (var i = 0; i < array.length; i++) {
		action(array[i])
	}
}

function map(array, transform) {
  var mapped = [];
  for (var i = 0; i < array.length; i++)
    mapped.push(transform(array[i]));
  return mapped;
}

function filter(array, test) {
  var filtered = [];
  for (var i = 0; i < array.length; i++) {
    if (test(array[i]))
      filtered.push(array[i]);
  }
  return filtered;
}

function contains(array, value) {
    var newArray = [];
    for (var key in array) {
        newArray.push(array[key]);
    }
    for(var i=0; i<newArray.length; i++) {
    if (newArray[i] === value) return true;
  }
  return false;
}

function every(array, context) {
    for (var i=0; i< array.length; i++) {
        if (!(context(array[i]))) {
            return false
        }
    }
    return true;
}

function any(array, context) {
	var isTrue = function(bool) {
		if (bool === true) {
			return true;
		}
		else {
			return false;
		}
	};
	context = context || isTrue;
	for (var i = 0; i < array.length; i++) {
		if (context(array[i])) {
			return true;
		}
	}
	return false;
}

function reduce (array, start, func) {
	function countWordsInReduce (x, y) {
      return x.split(" ").length + y.split(" ").length;
    };
	for (var i = start; i < array.length; i++) {
		var item1 = array.pop();
		var item2 = array.pop();
		var total = func(item1, item2);
		array.push(total);
	}
	return total;
}

function sum(x) {
	function add (a, b) {
      return a + b;
    };
	return reduce(x, 0, add);
}

function once (func) {
	var called = false;
	return function () {
		if (!called) {
			func();
		}
		called = true;
	}
}

function wrapper(func, wrap) {
	return function () {
		return wrap(func);
	}
}




















