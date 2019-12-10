let name = {
	fname: "Shivam",
	lname: "Singh"
}

let fullName = function (hometown, state, country) {
	console.log(`${this.fname} ${this.lname}, ${hometown} - ${state} - ${country}`)
}

Function.prototype.myBind = function(fn) {
	let context = this
	// let args = arguments.slice(1)   <--- wont work
	let args = [].slice.call(arguments, 1) // or 
	console.log(args)
	return function(...params) {
		context.apply(fn, [...args, ...params])
	}
}

let myName = fullName.bind(name, "Patna", "Bihar", "India")
myName()

let mn2 = fullName.myBind(name, "Stony Brook", "NY", "US")
mn2()
