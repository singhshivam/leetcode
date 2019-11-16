// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
	let min = prices[0]
	let max = 0
	prices.forEach((price) => {
		min = Math.min(min, price)
		max = Math.max(max, price-min)
	})
	return max
};
