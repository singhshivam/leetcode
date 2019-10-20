# https://leetcode.com/problems/lru-cache/

class LRUCache
	attr_accessor :hash
	def initialize(capacity)
		@capacity = capacity
		@hash = {} # = {value: V, last_used_at: t}
		@timer = 0
	end

	def get(key)
		increment_timer
		if @hash[key]
			@hash[key][:last_used_at] = @timer
			@hash[key][:value]
		else
			-1
		end
	end

	def increment_timer
		@timer += 1
	end

	def put(key, value)
		increment_timer
		if @hash[key]
			@hash[key] =  {
				:value => value,
				:last_used_at => @timer
			}
		else
			if @hash.size >= @capacity
				krm = nil # key to remove
				# find the key(s) whose:
				#   access count is least:
				#       remove the key which was added first
				@hash.each { |k,v|
					if !krm
						krm = k
					elsif @hash[krm][:last_used_at] > v[:last_used_at]
						krm = k
					end
				}
				@hash.delete(krm)
			end
			@hash[key] = {
				:value => value,
				:last_used_at => @timer
			}
		end
	end
end

