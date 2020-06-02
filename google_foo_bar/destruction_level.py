from fractions import Fraction  

def solution(pegs):
    arr_len = len(pegs)
    if ((not pegs) or arr_len == 1):
        return [-1,-1]

    even = True if (arr_len % 2 == 0) else False
    sum = (- pegs[0] + pegs[arr_len - 1]) if even else (- pegs[0] - pegs[arr_len -1])

    if (arr_len > 2):
        for index in xrange(1, arr_len-1):
            sum += 2 * (-1)**(index+1) * pegs[index]

    first_gear_radius = Fraction(2 * (float(sum)/3 if even else sum)).limit_denominator()


    current_radius = first_gear_radius
    for index in xrange(0, arr_len-2):
        center_dist = pegs[index+1] - pegs[index]
        next_radius = center_dist - current_radius
        if (current_radius < 1 or next_radius < 1):
            return [-1,-1]
        else:
            currentRadius = next_radius

    return [first_gear_radius.numerator, first_gear_radius.denominator]