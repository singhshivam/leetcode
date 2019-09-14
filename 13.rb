# https://leetcode.com/problems/roman-to-integer/
=begin
Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999.
=end
# @param {String} s
# @return {Integer}
def hash
    {
        'I' => 1,
        'V' => 5,
        'X' => 10,
        'L' => 50,
        'C' => 100,
        'D' => 500,
        'M' => 1000,
        'IV' => 4,
        'IX' => 9,
        'XL' => 40,
        'XC' => 90,
        'CD' => 400,
        'CM' => 900
    }
end

def roman_to_int(s)
    carr = s.chars
    tot = carr.size
    num = 0
    skip = nil
    carr.each_with_index { |c,i|
        #puts "c: #{c}, i: #{i}"
        next if i == skip
        if i < tot-1 && ['I', 'X', 'C'].include?(c) && hash[c+carr[i+1]]
            num += hash[c+carr[i+1]]
            skip = i+1
        else
            num += hash[c]
        end
    }
    num
end
