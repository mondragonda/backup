#!/opt/homebrew/bin/python3
from functools import reduce

# 1  2  3  4 
# 4  5  6  7
# 9  8  9  10
# 11 12 13 14

# 0, 1, 2, 3
# 3, 2, 1, 0
# 4, 3, 2, 1

# 4 - 4 = 0  4 - 1 = 3
# 4 - 3 = 1  3 - 1 = 2
# 4 - 2 = 2  2 - 1 = 1
# 4 - 1 = 3  1 - 1 = 0

def diagonal_difference(dim, mtx):
 prim_diag_indexes = range(0, dim)
 sec_diag_indexes = list(range(1, dim + 1))[::-1]
 prim_diag = [mtx[idx][idx] for idx in prim_diag_indexes]
 sec_diag = [mtx[dim-idx][idx-1] for idx in sec_diag_indexes]
 diags_diff = reduce(lambda el_1, el_2, : el_1 + el_2, prim_diag) - reduce(lambda el_1, el_2, : el_1 + el_2, sec_diag) 
 abs_diff = diags_diff * -1 if diags_diff < 0 else diags_diff
 return abs_diff

result = diagonal_difference(4, [[1,  2,  3,  4], [4,  5,  6,  7], [9,  8,  9,  10], [11, 12, 13, 14]])
print(result)
