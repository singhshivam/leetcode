/*
 * Given a grid of characters output a decoded message.
 * Encoded message:
		I B C A L K A
		D R F C A E A
		G H O E L A D

	Decoded message:
		I R O C L E D
 */
let decode = (arr) => {
	if (!arr || !arr.length || !arr[0].length) {
		return ""
	}
	let i=0,j=0,inc=false,res=''
	while (j<arr[0].length) {
		if (i===arr.length-1 || i===0) {
			inc = !inc
		}
		res += arr[i][j]
		inc ? i++ : i--
		j++
	}
	return res
}

console.log(decode([
	["I", "B", "C", "A", "L", "K", "A"],
	["D", "R", "F", "C", "A", "E", "A"],
	["G", "H", "O", "E", "L", "A", "D"]
]))
