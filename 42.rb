# https://leetcode.com/problems/trapping-rain-water/

def trap(height)
	lindex = 0 
	rindex = 1
	water = 0
	return water if height.empty?

	height.each_with_index { |currh, i|
		# puts "left: #{lindex}, right: #{rindex}, i: #{i}, water: #{water}"
		if currh < height[lindex]
			rindex = [i+1, height.size-1].min if rindex <= i
			if height[rindex] >= height[lindex]
				water += height[lindex] - currh
			else
				rindex += height[rindex..-1].index(height[rindex..-1].max)
				# puts "####left: #{lindex}, right: #{rindex}, i: #{i}, water: #{water}"
				if height[rindex] > currh
					water += [height[lindex], height[rindex]].min - currh
				end
			end
		else
			lindex = i
		end
	} 
	water
end
