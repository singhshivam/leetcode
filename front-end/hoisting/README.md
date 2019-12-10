# Hoisting
When Javascript compiles all of your code, all variable declarations using `var` are hoisted/lifted to the top of their functional/local scope (if declared inside a function) or to the top of their global scope (if declared outside of a function) regardless of where the actual declaration has been made. This is what we mean by “hoisting”.

# Example

Below code works as expected:
```
	var a = "hello", b = "world"
	console.log(a,b) // hello world
```

What if we declare a new variable after console.log but reference in console.log?
```
	var a = "hello", b = "world"
	console.log(a,b,c) // hello world undefined
	var c
```
We expected a `Reference Error` but got undefined instead. This is because the declarating of `c` was hoisted by the compiler. That is its declaration was raised to the top before `console.log`.

What if we assign a value to the hoisted variable?
```
	var a = "hello", b = "world"
	console.log(a,b,c) // hello world undefined
	var c = "foo"
```
We might would have expected the console log to print "hello world foo" but instead it printed "hello world undefined". This is because only the declaration gets hoisted, and not assignments.

# Hoisting named function
Similar to `var`s, named functions get hoisted too.
```
	console.log(hello()) // foo
	function name() {
		return "foo"
	}
```

However, this wont work for function expression:
```
	console.log(hello()) // TypeError: hello is not a function
	var hello = function () {
		return "foo"
	}
```
In the above example, even though `var hello` got hoisted, its assignment didn't. Means for compiler at the `console.log` line, the value for `hello` is `undefined`. And hence the error.
