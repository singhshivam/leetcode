// https://leetcode.com/problems/task-scheduler/
/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
	if (!tasks || !tasks.length) {
		return 0
	} else if (n === 0) {
		return tasks.length
	}

	let hash = Object.create(null)
	tasks.forEach((task) => {
		hash[task] = hash[task] || 0
		hash[task] += 1
	})
	let counts = Object.values(hash)
	counts.sort((a,b) => b-a)
	let count = counts[0]
	let i = 0, m = 0
	while (i < counts.length) {
		if (counts[i] === count) {
			m += 1
		} else {
			break
		}
		i += 1
	}
	return Math.max(count + (count-1) * n + m -1, tasks.length)
}
