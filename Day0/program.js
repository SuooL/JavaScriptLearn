document.writeln('Hello, world!');
var myObject = {
	value : 0,
	increment: function (inc){
		this.value += typeof inc === 'number' ? inc : 1;
	}
};

myObject.increment();
document.writeln(myObject.value);

myObject.increment();
document.writeln(myObject.value);

myObject.increment(2);

document.writeln(myObject.value);

var add = function (a, b){
	document.writeln("the value has invoked");
	return a + b;
};

document.writeln(add(2,3))

document.writeln(myObject.value);

myObject.double = function () {
	var that = this;
	var helper = function () {
		that.value = add(that.value, that.value);
	};
	helper();
}

myObject.double()

document.writeln(myObject.value);


var Quo = function (string) {
	this.status = string;
	// body...
}

Quo.prototype.get_status = function(){
	return this.status;
};

var myQuo = new Quo("onfused");

document.writeln(myQuo.get_status());




