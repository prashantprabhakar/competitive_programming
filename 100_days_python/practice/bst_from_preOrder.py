
class Node:

    def __init__(self, value):
        self.left = None
        self.right = None
        self.value = value


arr = [10,5,1,7,40,50]

def indexOfHighVal(arr, start,end, compVal):
    print(start, end)
    for i in range(start,end):
        if(arr[i] > compVal): return i


print(indexOfHighVal(arr,0, len(arr), 10))