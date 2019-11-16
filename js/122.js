// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
	if (!prices || prices.length === 0) {
		return 0
	}

	let prev = prices[0]
	let profit = 0
	prices.forEach((price) => {
		if (price > prev) {
			profit += price-prev
		}
		prev = price
	})
	return profit
};
