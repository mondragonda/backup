#!/opt/homebrew/bin/python3

def hundred_dot_twenty_five_equation():
  return (((5**2)*9 / 2) - (5**2 / 2)) + .25

#result1 = hundred_dot_twenty_five_equation()
#print(result1)

def square_root(number):
 precision = .000001
 root = precision
 root_found = False
 while root_found is not True:
  product = root * root
  if product < number:
    root = root + precision
  else:
    root_found = True  
 return root - precision

result2 = square_root(16) 
print(result2)

