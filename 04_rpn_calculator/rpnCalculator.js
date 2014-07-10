var Calculator = function() {
    var total = 0;
    var arr = []; // stores values and inputs

  	this.value = function(){
  		return total;
  	};

	this.push = function (x) {
    	arr.push(x); // will push numbers to be stored into the array
    };

   	this.plus = function(){
   		if(arr.length < 2) {
   			throw "calculator is empty"
   		}
   		else {
        val1 = arr.pop();
        val2 = arr.pop();
        total = val1 + val2;
        arr.push(total);
        }	
    };

	this.minus = function(){
		if(arr.length < 2) {
   			throw "calculator is empty"
   		}
   		else {
        val1 = arr.pop();
        val2 = arr.pop();
        total = val2 - val1;
        arr.push(total);	
    	}
    };

    this.times = function() {
    	if(arr.length < 2) {
   			throw "calculator is empty"
   		}
   		else {
    	val1 = arr.pop();
        val2 = arr.pop();
        total = val2 * val1;
        arr.push(total);
        }	
    };

    this.divide = function() {
    	if(arr.length < 2) {
   			throw "calculator is empty"
   		}
   		else {
    	val1 = arr.pop();
        val2 = arr.pop();
        total = val2 / val1;
        arr.push(total);
        }	
    };
};
