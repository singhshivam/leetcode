# https://leetcode.com/problems/integer-to-roman/
=begin
Given an integer, convert it to a roman numeral. Input is guaranteed to be within the range from 1 to 3999.
=end
# @param {Integer} num
# @return {String}
def hash
    @hash ||= {
        1 => 'I',
        5 => 'V',
        10 =>'X',
        50 => 'L',
        100 => 'C',
        500 => 'D',
        1000 => 'M',
        4 => 'IV',
        9 => 'IX',
        40 => 'XL',
        90 => 'XC',
        400 => 'CD',
        900=> 'CM'
    }
end

def populate_single_digits
    (1..9).each { |num|
        next if hash[num]
        if num < 5
            hash[num] = "I"*num
        else
            hash[num] = "V" + ("I"*(num-5))
        end
    }
end

def int_to_roman(num)
  populate_single_digits
  res = ""
  num.to_s.chars.reverse.each_with_index { |n, i|
    int = n.to_i
    anum = int * (10**i) # actual num
    next if
    if hash[anum]
      res = hash[anum] + res
    else
      if int == 4
        puts "i: #{i}, n: #{n}, 10i: #{hash[10**i]}, 5i: #{hash[(5*(10**2))]}"
        res = hash[10**i] + hash[(5*(10**i))] + res
      elsif int == 9
        puts "i: #{i}, n: #{n}, 10i-: #{hash[10**(i-1)]}, 10i+: #{hash[(50**(i+1))]}"
        res = hash[10**(i-1)] + hash[(10**(i+1))] + res
      elsif int < 4
        puts "i: #{i}, n: #{n}, 10i: #{hash[10**i]}"
        res = hash[10**i]*int + res
      else
        puts "i: #{i}, n: #{n}, 50i: #{hash[5*(10**2)]}, 10i: #{hash[(10**i)]}"
        res = hash[5*(10**i)] + hash[10**i]*(int-5) + res
      end
    end
  }
  res 
end
