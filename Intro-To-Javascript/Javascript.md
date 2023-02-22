<h1 style="text-align: center;">Javascript Basics Notes </h1>

## Table of Contents

1. **[Functions](#functions)**
   1. [Function Declaration](#function-declaration)
   2. [Function Expression](#function-expression)
   3. [Function Hoisting](#function-hoisting)
   4. [Function Scope](#function-scope)
   5. [Function Parameters](#function-parameters)
   6. [Function Properties](#function-properties)
   7. [Function Methods](#function-methods)
2. **[Objects](#objects)**
   1. [Object Literal](#object-literal)
   2. [Object Constructor](#object-constructor)
   3. [Object Prototype](#object-prototype)
   4. [Object Properties](#object-properties)
   5. [Object Methods](#object-methods)
   6. [Object Inheritance](#object-inheritance)
   7. [Object Enumeration](#object-enumeration)
3. **[Arrays](#arrays)**
    1. [Array Literal](#array-literal)
    2. [Array Constructor](#array-constructor)
    3. [Array Properties](#array-properties)
    4. [Array Methods](#array-methods)
4. **[Strings](#strings)**
   1. [String Properties](#string-properties)
   2. [String Methods](#string-methods)
5. **[Numbers](#numbers)**
   1. [Number Properties](#number-properties)
   2. [Number Methods](#number-methods)

6. **[Booleans](#booleans)**
7. **[Dates](#dates)**
   1. [Date Properties](#date-properties)
   2. [Date Methods](#date-methods)
8. [RegExpressions](#regular-expressions)
9. **[Math](#math)**
10. [JSON](#json)
11. [Global Methods](#global-methods)
12. [Global Objects](#global-objects)
13. [Global Contructors](#global-constructors)
14. [Global Functions](#global-functions)
15. [References vs Values](#references-vs-values)
16. [Truthy vs Falsy](#truthy-vs-falsy)
17. [Global Scope](#global-scope)
18. [Local Scope](#local-scope)

## Functions

### Function Declaration

```javascript
function myFunction() {
  // code
}
```

### Function Expression

```javascript
var myFunction = function () {
  // code
};
```

### Function Hoisting

```javascript
myFunction(); // works

function myFunction() {
  // code
}
```

### Function Scope

```javascript
var myFunction = function () {
  var myVar = 1;
  console.log(myVar); // 1
};

myFunction();
console.log(myVar); // undefined
```

### Function Parameters

```javascript
function myFunction(myParam) {
  console.log(myParam); // 1
}

myFunction(1);
```

### Function Properties

```javascript
function myFunction() {
  // code
}

console.log(myFunction.length); // 0
console.log(myFunction.prototype); // [Function]
```

### Function Methods

```javascript
function myFunction() {
  // code
}

console.log(myFunction.toString()); // function myFunction() { // code }
```

---

## Objects

### Object Literal

```javascript
var myObject = {
  myProperty: 1,
  myMethod: function () {
    // code
  },
};
```

### Object Constructor

```javascript
function MyObject() {
  this.myProperty = 1;
  this.myMethod = function () {
    // code
  };
}

var myObject = new MyObject();
```

### Object Prototype

```javascript
function MyObject() {
  this.myProperty = 1;
}

MyObject.prototype.myMethod = function () {
  // code
};

var myObject = new MyObject();
```

### Object Properties

```javascript
var myObject = {
  myProperty: 1,
};

console.log(myObject.myProperty); // 1
```

### Object Methods

```javascript
var myObject = {
  myMethod: function () {
    // code
  },
};

myObject.myMethod();
```

### Object Inheritance

```javascript
function MyObject() {
  this.myProperty = 1;
}

MyObject.prototype.myMethod = function () {
  // code
};

function MyOtherObject() {
  this.myOtherProperty = 2;
}

MyOtherObject.prototype = new MyObject();

var myOtherObject = new MyOtherObject();

console.log(myOtherObject.myProperty); // 1
console.log(myOtherObject.myMethod()); // code
```

### Object Enumeration

```javascript
var myObject = {
  myProperty: 1,
  myOtherProperty: 2,
};

for (property in myObject) {
  console.log(property); // myProperty, myOtherProperty
}
```

---

## Arrays

### Array Literal

```javascript
var myArray = [1, 2, 3];
```

### Array Constructor

```javascript
var myArray = new Array(1, 2, 3);
console.log(myArray) // [1,2,3]
```

### Array Properties

```javascript
var myArray = [1, 2, 3];
var mySecondArray = [4, 5, 6];

console.log(myArray.length); // 3   array.length
console.log(myArray.concat(mySecondArray)); // [1,2,3,4,5,6]   array.concat(arrayX, arrayX, ..., arrayX)
console.log(myArray.join(' ')); // 1 2 3     array.join(separator)
console.log(myArray.reverse()); // [3,2,1]  array.reverse() 
console.log(myArray.slice(1, 2)); // [2] array.slice(start, end)
console.log(myArray.splice(1, 2)); // [2,3] array.splice(index, howmany, item1, ....., itemX)
console.log(myArray.push(4)); // [1,2,3,4] array.push(item1, ....., itemX)
console.log(myArray.pop()); // [1,2,3] array.pop()
console.log(myArray.unshift(0)); // [0,1,2,3] array.unshift(item1, ....., itemX)
console.log(myArray.shift()); // [1,2,3] array.shift()
console.log(myArray.sort()); // [1,2,3]  array.sort(sortby)
console.log(myArray.toString()); // 1,2,3 array.toString()
console.log(myArray.valueOf()); // [1,2,3] array.valueOf()
console.log(myArray.indexOf(2)); // 1 array.indexOf(item, start)
console.log(myArray.lastIndexOf(2)); // 1 array.lastIndexOf(item, start)

console.log(myArray.every(function (element) { return element > 0; })); // true     array.every(function(currentValue, index, arr), thisValue)
console.log(myArray.some(function (element) { return element > 0; })); // true      array.some(function(currentValue, index, arr), thisValue)
console.log(myArray.filter(function (element) { return element > 0; })); // [1,2,3]     array.filter(function(currentValue, index, arr), thisValue)
console.log(myArray.forEach(function (element) { console.log(element); })); // 1,2,3    array.forEach(function(currentValue, index, arr), thisValue)
console.log(myArray.map(function (element) { return element * 2; })); // [2,4,6]    array.map(function(currentValue, index, arr), thisValue)
console.log(myArray.reduce(function (previous, current) { return previous + current; })); // 6  array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
console.log(myArray.reduceRight(function (previous, current) { return previous + current; })); // 6     array.reduceRight(function(total, currentValue, currentIndex, arr), initialValue)
console.log(myArray.copyWithin(0, 1, 2)); // [2,2,3]    array.copyWithin(target, start, end)
console.log(myArray.fill(1, 0, 2)); // [1,1,3]      array.fill(value, start, end)
console.log(myArray.find(function (element) { return element > 0; })); // 1     array.find(function(currentValue, index, arr), thisValue)
console.log(myArray.findIndex(function (element) { return element > 0; })); // 0    array.findIndex(function(currentValue, index, arr), thisValue)
console.log(myArray.includes(1)); // true       array.includes(valueToFind, fromIndex)
console.log(myArray.keys()); // [0,1,2]     array.keys()
console.log(myArray.entries()); // [[0,1],[1,2],[2,3]]      array.entries()
console.log(myArray.values()); // [1,2,3]       array.values()

console.log(myArray[Symbol.iterator]()); // [1,2,3]     array[Symbol.iterator]()
console.log(myArray[Symbol.unscopables]); // { copyWithin: true, entries: true, fill: true, find: true, findIndex: true, includes: true, keys: true, values: true } 
console.log(myArray[Symbol.isConcatSpreadable]); // undefined       array[Symbol.isConcatSpreadable]
console.log(myArray[Symbol.species]); // undefined      array[Symbol.species]
console.log(myArray[Symbol.match]); // undefined    array[Symbol.match]
console.log(myArray[Symbol.replace]); // undefined  array[Symbol.replace]
console.log(myArray[Symbol.search]); // undefined   array[Symbol.search]
console.log(myArray[Symbol.split]); // undefined    array[Symbol.split]
console.log(myArray[Symbol.toPrimitive]); // undefined  array[Symbol.toPrimitive]
console.log(myArray[Symbol.toStringTag]); // undefined  array[Symbol.toStringTag]
console.log(myArray[Symbol.unscopables]); // undefined  array[Symbol.unscopables]
 

```

### Array Methods

```javascript
var myArray = [1, 2, 3];

myArray.push(4); // [1,2,3,4]
myArray.pop(); // [1,2,3]
myArray.unshift(0); // [0,1,2,3]
myArray.shift(); // [1,2,3]
```

### Array Enumeration

```javascript
var myArray = [1, 2, 3];

for (var i = 0; i < myArray.length; i++) {
  console.log(myArray[i]); // 1,2,3
}

for (index in myArray) {
  console.log(myArray[index]); // 1,2,3
}
```

---

## Strings

### String Properties

```javascript
var myString = 'hello';

console.log(myString.length); // 5
```

### String Methods

```javascript
var myString = 'hello';

console.log(myString.charAt(0)); // h
console.log(myString.charCodeAt(0)); // 104
console.log(myString.concat(' world')); // hello world
console.log(myString.indexOf('l')); // 2
console.log(myString.lastIndexOf('l')); // 3
console.log(myString.match(/l/g)); // ["l","l"]
console.log(myString.replace('l', 'L')); // heLlo
console.log(myString.search('l')); // 2
console.log(myString.slice(0, 2)); // he
console.log(myString.split('l')); // ["he","","o"]
console.log(myString.substr(0, 2)); // he
console.log(myString.substring(0, 2)); // he
console.log(myString.toLowerCase()); // hello
console.log(myString.toUpperCase()); // HELLO
```

---

## Numbers

### Number Properties

```javascript
var myNumber = 1;

console.log(myNumber.MAX_VALUE); // 1.7976931348623157e+308
console.log(myNumber.MIN_VALUE); // 5e-324
console.log(myNumber.NaN); // NaN
console.log(myNumber.NEGATIVE_INFINITY); // -Infinity
console.log(myNumber.POSITIVE_INFINITY); // Infinity
```

### Number Methods

```javascript
var myNumber = 1;

console.log(myNumber.toExponential()); // 1e+0
console.log(myNumber.toFixed(2)); // 1.00
console.log(myNumber.toPrecision(2)); // 1.0
```

---

## Booleans

### Boolean Properties

```javascript
var myBoolean = true;

console.log(myBoolean.prototype); // [Boolean: false]
```

### Boolean Methods

```javascript
var myBoolean = true;

console.log(myBoolean.toString()); // true
```

---

## Dates

### Date Properties

```javascript
var myDate = new Date();

console.log(myDate.getDate()); // 19
console.log(myDate.getDay()); // 0
console.log(myDate.getFullYear()); // 2015
console.log(myDate.getHours()); // 18
console.log(myDate.getMilliseconds()); // 114
console.log(myDate.getMinutes()); // 37
console.log(myDate.getMonth()); // 1
console.log(myDate.getSeconds()); // 40
console.log(myDate.getTime()); // 1424393460114
```

### Date Methods

```javascript
var myDate = new Date();

console.log(myDate.setDate(1)); // 1420070400000
console.log(myDate.setFullYear(2014)); // 1391212800000
console.log(myDate.setHours(1)); // 1391220000000
console.log(myDate.setMilliseconds(1)); // 1391220000010
console.log(myDate.setMinutes(1)); // 1391220060010
console.log(myDate.setMonth(1)); // 1391216400010
console.log(myDate.setSeconds(1)); // 1391220060010
console.log(myDate.setTime(1)); // 1
```

---

## Regular Expressions

### Regular Expression Properties

```javascript
var myRegExp = /hello/;

console.log(myRegExp.global); // false
console.log(myRegExp.ignoreCase); // false
console.log(myRegExp.lastIndex); // 0
console.log(myRegExp.multiline); // false
console.log(myRegExp.source); // hello
```

### Regular Expression Methods

```javascript
var myRegExp = /hello/;

console.log(myRegExp.compile()); // /hello/
console.log(myRegExp.exec('hello world')); // ["hello", index: 0, input: "hello world"]
console.log(myRegExp.test('hello world')); // true
```

---

## Math

### Math Properties

```javascript
console.log(Math.E); // 2.718281828459045
console.log(Math.LN10); // 2.302585092994046
console.log(Math.LN2); // 0.6931471805599453
console.log(Math.LOG10E); // 0.4342944819032518
console.log(Math.LOG2E); // 1.4426950408889634
console.log(Math.PI); // 3.141592653589793
console.log(Math.SQRT1_2); // 0.7071067811865476
console.log(Math.SQRT2); // 1.4142135623730951
```

### Math Methods

```javascript
console.log(Math.abs(-1)); // 1
console.log(Math.acos(1)); // 0
console.log(Math.asin(1)); // 1.5707963267948966
console.log(Math.atan(1)); // 0.7853981633974483
console.log(Math.atan2(1, 1)); // 0.7853981633974483
console.log(Math.ceil(1.1)); // 2
console.log(Math.cos(1)); // 0.5403023058681398
console.log(Math.exp(1)); // 2.718281828459045
console.log(Math.floor(1.9)); // 1
console.log(Math.log(1)); // 0
console.log(Math.max(1, 2)); // 2
console.log(Math.min(1, 2)); // 1
console.log(Math.pow(2, 3)); // 8
console.log(Math.random()); // 0.123456789
console.log(Math.round(1.5)); // 2
console.log(Math.sin(1)); // 0.8414709848078965
console.log(Math.sqrt(4)); // 2
console.log(Math.tan(1)); // 1.5574077246549023
```

---

## JSON

### JSON Methods

```javascript
console.log(JSON.parse('{"hello": "world"}')); // { hello: 'world' }
console.log(JSON.stringify({ hello: 'world' })); // {"hello":"world"}
```

---

## Global Methods

```javascript
console.log(escape('hello world')); // hello%20world
console.log(eval('1 + 1')); // 2
console.log(isFinite(1)); // true
console.log(isNaN(1)); // false
console.log(parseFloat('1.1')); // 1.1
console.log(parseInt('1')); // 1
console.log(unescape('hello%20world')); // hello world
```

---

## Global Objects

### Global Objects Properties

```javascript
console.log(decodeURI('http://www.google.com')); // http://www.google.com
console.log(decodeURIComponent('http%3A%2F%2Fwww.google.com')); // http://www.google.com
console.log(encodeURI('http://www.google.com')); // http://www.google.com
console.log(encodeURIComponent('http://www.google.com')); // http%3A%2F%2Fwww.google.com
console.log(Infinity); // Infinity
console.log(isFinite(1)); // true
console.log(isNaN(1)); // false
console.log(NaN); // NaN
console.log(undefined); // undefined
```

### Global Objects Methods

```javascript
console.log(escape('hello world')); // hello%20world
console.log(eval('1 + 1')); // 2
console.log(parseFloat('1.1')); // 1.1
console.log(parseInt('1')); // 1
console.log(unescape('hello%20world')); // hello world
```

---

## Global Constructors

### Global Constructors Properties

```javascript
console.log(Array.prototype); // []
console.log(Boolean.prototype); // [Boolean: false]
console.log(Date.prototype); // [Date: 2015-02-19T19:10:51.000Z]
console.log(Function.prototype); // function () { [native code] }
console.log(Math.prototype); // {}
console.log(Number.prototype); // [Number: 0]
console.log(Object.prototype); // {}
console.log(RegExp.prototype); // /(?:)/
console.log(String.prototype); // ''
```

### Global Constructors Methods

```javascript
console.log(Array.isArray([])); // true
console.log(Boolean(true)); // [Boolean: true]
console.log(Date.now()); // 1424393460114
console.log(Function('return 1 + 1;')()); // 2
console.log(Number(1)); // [Number: 1]
console.log(Object.create({ hello: 'world' })); // {}
console.log(RegExp('hello')); // /hello/
console.log(String('hello')); // hello
```

---

## Global Variables

```javascript
console.log(arguments); // [Arguments] { '0': 1, '1': 2 }
console.log(Infinity); // Infinity
console.log(NaN); // NaN
console.log(undefined); // undefined
```

---

## Global Functions

```javascript
console.log(escape('hello world')); // hello%20world
console.log(eval('1 + 1')); // 2
console.log(isFinite(1)); // true
console.log(isNaN(1)); // false
console.log(parseFloat('1.1')); // 1.1
console.log(parseInt('1')); // 1
console.log(unescape('hello%20world')); // hello world
```

---
## Global Properties

```javascript
console.log(Infinity); // Infinity
console.log(NaN); // NaN
console.log(undefined); // undefined
```
---

## References vs Values
### Primitive Types - number, string, boolean, null, undefined 
### Non-Primitive Types - object, array, function, date, regexp
#### when assigning a primitive type to a variable, the variable is assigned a copy of the value of the primitive type (a reference to the value)   
#### when assigning a non-primitive type to a variable, the variable is assigned a reference to the value of the non-primitive type (a reference to the reference)

```javascript
var a = 1;
var b = a;
a = 2;
console.log(a); // 2
console.log(b); // 1
```

```javascript
var a = { hello: 'world' };
var b = a;
a.hello = 'universe';
console.log(a); // { hello: 'universe' }
console.log(b); // { hello: 'universe' }
```

---

## Truthy vs Falsy
### Truthy - true, 1, 'hello', {}, [], function() {}
### Falsy - false, 0, '', null, undefined, NaN

```javascript
if (true) {
  console.log('true');
} else {
  console.log('false');
} // true
```

```javascript
if (false) {
  console.log('true');
} else {
  console.log('false');
} // false
```

```javascript
if (1) {
  console.log('true');
} else {
  console.log('false');
} // true
```

```javascript
if (0) {
  console.log('true');
} else {
  console.log('false');
} // false
```

```javascript
if ('hello') {
  console.log('true');
} else {
  console.log('false');
} // true
```

```javascript
if ('') {
  console.log('true');
} else {
  console.log('false');
} // false
```

```javascript
if (null) {
  console.log('true');
} else {
  console.log('false');
} // false
```

```javascript
if (undefined) {
  console.log('true');
} else {
  console.log('false');
} // false
```

```javascript
if (NaN) {
  console.log('true');
} else {
  console.log('false');
} // false
```

---
## Global Scope

```javascript
var a = 1;
function foo() {
  console.log(a); // 1
}
foo();
```

```javascript
var a = 1;
function foo() {
  var a = 2;
  console.log(a); // 2
}
foo();
```

```javascript  
var a = 1;
function foo() {
  a = 2;
  console.log(a); // 2
}
foo();
console.log(a); // 2
```

```javascript
var a = 1;
function foo() {
  var a = 2;
  console.log(a); // 2
}
foo();
console.log(a); // 1
```

```javascript
var a = 1;
function foo() {
  var a = 2;
  console.log(a); // 2
}
foo();
console.log(a); // 1
function bar() {
  console.log(a); // 1
}
bar();
```

```javascript
var a = 1;
function foo() {
  var a = 2;
  console.log(a); // 2
}
foo();
console.log(a); // 1
function bar() {
  var a = 3;
  console.log(a); // 3
}
bar();
```

```javascript
var a = 1;
function foo() {
  var a = 2;
  console.log(a); // 2
}
foo();
console.log(a); // 1
function bar() {
  a = 3;
  console.log(a); // 3
}  
bar();
console.log(a); // 3
```

```javascript
var a = 1;
function foo() {
  var a = 2;
  console.log(a); // 2
}
foo();
console.log(a); // 1
function bar() {
  a = 3;
  console.log(a); // 3
}
bar();
console.log(a); // 3
function baz() {
  console.log(a); // 3
}
baz();
```

```javascript
var a = 1;
function foo() {
  var a = 2;
  console.log(a); // 2
}
foo();
console.log(a); // 1
function bar() {
  a = 3;
  console.log(a); // 3
}
bar();
console.log(a); // 3
function baz() {
  var a = 4;
  console.log(a); // 4
}

baz();
```
---
## Local Scope

```javascript
function foo() {
  var a = 1;
  console.log(a); // 1
}
foo();
console.log(a); // ReferenceError: a is not defined
```

```javascript  
function foo() {
  var a = 1;
  console.log(a); // 1
}
foo();
console.log(a); // ReferenceError: a is not defined
function bar() {
  console.log(a); // ReferenceError: a is not defined
}
bar();
```

```javascript
function foo() {
  var a = 1;
  console.log(a); // 1
}
foo();
console.log(a); // ReferenceError: a is not defined
function bar() {
  a = 2;
  console.log(a); // 2
}
bar();
console.log(a); // 2
```

```javascript
function foo() {
  var a = 1;
  console.log(a); // 1
}
foo();
console.log(a); // ReferenceError: a is not defined
function bar() {
  a = 2;
  console.log(a); // 2
}
bar();
console.log(a); // 2
function baz() {
  console.log(a); // 2
}
baz();
```


---



