#!/opt/homebrew/bin/python3
from functools import reduce

def min_max_sum(numbers):
  numbers.sort()
  def sum_reduce(n1, n2):
    return n1 + n2
  min = reduce(sum_reduce, numbers[:-1])
  max = reduce(sum_reduce, numbers[1:])
  print(f'{min}  {max}')

min_max_sum([3, 2, 4, 1, 9])
min_max_sum([1, 3, 5, 7, 9])
min_max_sum([1, 2, 3, 4, 5])
