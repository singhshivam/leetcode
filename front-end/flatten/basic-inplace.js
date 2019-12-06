let flatten = (arr) => {
	while (arr.some(Array.isArray)) {
		arr = [].concat.apply([], arr)
	}
	return arr
}
