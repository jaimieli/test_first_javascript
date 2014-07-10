var Calculator = function() {
    var total = 0;
    this.value = function () {
        return total;
    };
    this.add = function (x) {
        return total += x 
    };
    this.subtract = function (x) {
        return total -= x;
    };
};

