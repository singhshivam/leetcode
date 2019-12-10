let multiply = (num1) => {
	return ((num2) => {
		return num1*num2
	})
}


// General curry function
function curry(fn, ...args) {
	return (..._arg) => {
		return fn(...args, ..._arg);
	}
}
