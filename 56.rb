# https://leetcode.com/problems/merge-intervals/
# @param {Integer[][]} intervals
# @return {Integer[][]}
def merge(intervals)
	res = []
	return intervals if intervals.size < 2

	intervals.sort! { |a,b| a[0] <=> b[0] }
	intervals.each_with_index { |curr, i|
		next if !curr

		if i < intervals.size-1
			n = i+1
			while n < intervals.size && intervals[n][0] <= curr[1]
				curr = intervals[i] = [(curr+intervals[n]).min, (curr+intervals[n]).max]
				intervals[n] = nil
				n += 1
			end
		end
	}
	intervals.compact
end
