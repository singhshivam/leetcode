let flatten = (arr) => {
	let res = []
	arr.forEach((a) => {
		if (Array.isArray(a)) {
			res.push(...flatten(a))
		} else {
			res.push(a)
		}
	})
	return res
}
