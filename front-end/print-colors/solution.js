let colors = ["red", "blue", "green", "yellow"]
let str = "Lorem ipsum dolor sit amet"
let i = 0
let res = ''
str.split('').forEach((char) => {
	if (char !== " ") {
		res += `<span style='color:${colors[i%4]}'>${char}</span>`
		i++
	} else {
		res += " "
	}
})
res
document.getElementsByTagName("body")[0].innerHTML = res
