# setTimeout
Allows us to run a function once after the interval of time
```
	setTimeout (func, delay=0, args1, arg2, ..) 
```

# setInterval
Allows us to run a function once after the interval of time and then run it continuously after that interval
```
	setInterval(func, delay=0, args1, arg2, ..)
```

# clearTimeout (canceling setTimeout)
`setTimeout` function returns a timerID. We can pass it to `clearTimeout` to cancel scheduled function.
```
	let timerID = setTimeout(func, 100)
	clearTimeour(timerID)
```

# clearInterval (canceling setInterval)
```
	let intervalID = setInterval(func, 100)
	clearInterval(intervalID)
```

# Nested setTimeout
We can also use nested `setTimeout`s instead of `setInterval` to run something repeatedly.
```
	let timerID = setTimeout(function repeat() {
			console.log('repeat after 100ms')
			timerID = setTimeout(repeat, 100)
	}, 100)
```

# Nested setTimeout VS setInterval
- Nested `setTimeout` is more flexible. We can adjust the interval dynamically based on return values. `setInterval` does not provide this flexibility.
- Nested `setTimeout` provides more accurate time gap between two function calls. `setInterval` starts its timer immediately after being invoked, however the function its executing might take longer to complete. Nested `setTimeout` on the other hand will start its timer only after the function completed its call.

# Zero delay setTimeout
```
	setTimeout(func, 0) // or simply setTimeout(func)
```
Tells scheduler to run this func after its completed its current task. In browsers schedulers can run 5 nested timeour one after another after which a small time interal (4 ms) break is mandatory.
