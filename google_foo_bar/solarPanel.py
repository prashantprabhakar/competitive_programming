import math

def solution (area, res=[]):
    if area == 0:
        return res
    
    [sqrt, square] = findSqrt(area)
    res.append(square)
    return solution(area-square, res)


def findSqrt(no):
    sqrt = int(math.floor(math.sqrt(no)))
    square = sqrt * sqrt
    return [sqrt, square]


print(solution(12))