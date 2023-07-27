#!/opt/homebrew/bin/python3
from functools import reduce

"""
 left quadrant coords

 0,0 | 0,1
 1,0 | 1,1
 
 0,0 | 0,1
 1,0 | 1,1

 0,0 | 0,1
 1,0 | 125
 
 119 83  112  112 112 112  
 56  125 101  49  49  49
 15  78  101  43  43  43
 62  98  114  108 108 108
 62  98  114  108 108 108
 62  98  114  108 108 108 

 119 83  114  112
 56  125 101  49
 15  78  56   43 
 62  98  42   108 

 119 | 0,1
 1,0 | 125

 112  0: 0,0: 
 42   1: 0,1:
 83   2: 0,2: 
 119  3: 0,3: 
 56:  4: 1,0: 
 125: 5: 1,1:

 [112, 42, 83, 119, 56, 125, 56, 49, 15, 78, 101, 43, 62, 98, 114, 108]
 [125, 119, 114, 112, 108, 101, 98, 83, 78, 62, 56, 56, 49, 43, 42, 15]
"""

def flipping_mat(mat):
 quadrant_size = len(mat[0])
 flat_mat = reduce(lambda arr1, arr2 : arr1 + arr2, mat) 
 quadrant_indexes = [index for index in enumerate(flat_mat[:(quadrant_size * (quadrant_size // 2)) - quadrant_size // 2])] 
 tmp_sum = 0
 print(quadrant_indexes) 
 for index in quadrant_indexes:
  if index > 1 && index < :
   quadrant_indexes[]
   tmp_sum += 1
 sorted_flat_mat = flat_mat[:]
 sorted_flat_mat.sort(reverse=True)
 quadrant_components = sorted_flat_mat[:quadrant_size]
 quadrant_elements_indexes = [flat_mat.index(element) for element in quadrant_components]
 quadrant_components = dict(zip(quadrant_elements_indexes, quadrant_components))

result = flipping_mat(
 [[112, 42, 83, 119],
 [56, 125, 56, 49],
 [15, 78, 101, 43],
 [62, 98, 114, 108]]
)








