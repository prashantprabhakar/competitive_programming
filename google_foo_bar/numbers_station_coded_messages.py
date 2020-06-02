
def solution(arr, num):
    for i in range(len(arr)):
        sum = arr[i]
        if(sum == num):
            return [i, i]
        for j in range(i+1, len(arr)):
            sum += arr[j]
            if(sum == num):
                return [i, j]

    return [-1, -1]



print(solution([4,3,5,7,8], 12))
print(solution([1,2,3,4], 15))
print(solution([4,3,10,2,8], 12))
print(solution([6,2,3], 6))
