ObjectA.prototype = new MVCObject();

function ObjectA() {
	this.foo = 'bar';
};

ObjectA.prototype.foo_changed = function () {
	console.log('foo changed, it is now: ' + this.get('foo'));
};

ObjectB.prototype = new MVCObject();

function ObjectB() {
	this.foo = 'this will be overwritten when bound';
};

var object_a = new ObjectA();
var object_b = new ObjectB();

object_b.bindTo('foo', object_a);

object_b.set('foo', 'I am cool');

// alerts 'foo changed, it is now: I am cool';