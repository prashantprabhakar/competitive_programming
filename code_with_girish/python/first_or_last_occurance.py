
import math

def firstAndLastOccurance(elements, num, isFirstOcc, start, end):
    # base case
    if(len(elements) == 0):
        return -1

    if start == end:
        return start if elements[start] == num else -1
    
   

    medianIndex = math.floor((start+end)/2)
    medianValue = elements[medianIndex]

    if medianValue > num:
        # searhc in left part
        return firstAndLastOccurance(elements, num, isFirstOcc, start, medianIndex)

    elif medianValue < num :
        # search in right bar
        return firstAndLastOccurance(elements, num, isFirstOcc, medianIndex+1, end)

    else:
        if isFirstOcc:
            if (medianIndex == 0 or elements[medianIndex-1] < num):
                return medianIndex
            else:
                return firstAndLastOccurance(elements, num, isFirstOcc, start, medianIndex)

        else:
            if (medianIndex == len(elements)-1 or elements[medianIndex+1] > num) :
                return medianIndex

            else:
                return firstAndLastOccurance(elements, num, isFirstOcc, medianIndex+1, end)


def driver(elements, num):
    first = firstAndLastOccurance(elements, num, True, 0, len(elements)-1)
    last = firstAndLastOccurance(elements, num, False, 0, len(elements)-1)
    return [first, last]



print(driver([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,],5))
print(driver([2,3,5,5,5,6,6,8,9,9,9],5))
print(driver([9,10], 9))
print(driver([],0))