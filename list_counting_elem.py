#!/opt/homebrew/bin/python3

def count_elem_appearance(num_list):
 frequency_array = [0]
 frequency_array *= 100
 for num in num_list:
   frequency_array[num] += 1
 return frequency_array 

result = count_elem_appearance([1, 1, 3, 2, 1])
