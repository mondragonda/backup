#!/opt/homebrew/bin/python3

def find_unique_integer(l): 
 list_length = len(l)
 l.sort()
 if list_length == 1:
    return l[0]
 for index, integer in enumerate(l):
   if index == list_length - 1 and l[index-1] != integer:
    return integer
   if l[index-1] != integer and l[index+1] != integer:
    return integer 
	
result = find_unique_integer([1,2,3,3,4,3,2,2,2,1])
print(result)
