arr = [2, 3, 567, 63526, 232, 756, 8]

def bubblesort(arr):
    n = len(arr)

    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]

    return arr

print(bubblesort(arr))

def quicksort(arr):
    if len(arr)<=1:
        return arr
    key=arr[0]
    left=[]
    right=[]


    for x in arr[1:]:
        if x<=key:
            left.append(x)
        else:
            right.append(x)

    return quicksort(left)+[key]+quicksort(right)

print(quicksort(arr))






#"fibonacci and factorial "::

# def recursive_factorial(n):
#     if n == 0:
#         return 1
#     return n * recursive_factorial(n - 1)


# def iterative_factorial(n):
#     result = 1
#     for i in range(1, n + 1):
#         result *= i
#     return result


# def recursive_fibonacci_with_count(n):
#     if n == 0:
#         return 0, 1
#     if n == 1:
#         return 1, 1

#     first_value, first_count = recursive_fibonacci_with_count(n - 1)
#     second_value, second_count = recursive_fibonacci_with_count(n - 2)

#     return first_value + second_value, first_count + second_count + 1


# def iterative_fibonacci(n):
#     if n == 0:
#         return 0

#     previous = 0
#     current = 1

#     for _ in range(2, n + 1):
#         next_value = previous + current
#         previous = current
#         current = next_value

#     return current


# def analyze_recursive_iterative(n):
#     recursive_fact = recursive_factorial(n)
#     iterative_fact = iterative_factorial(n)

#     recursive_fib, recursive_fib_count = recursive_fibonacci_with_count(n)
#     iterative_fib = iterative_fibonacci(n)

#     result = []

#     result.append("Computation Analysis Report")
#     result.append("Recursive Factorial: " + str(recursive_fact))
#     result.append("Iterative Factorial: " + str(iterative_fact))
#     result.append("Recursive Fibonacci: " + str(recursive_fib))
#     result.append("Iterative Fibonacci: " + str(iterative_fib))
#     result.append("Operation Count Comparison")
#     result.append("Recursive Factorial Count: " + str(n + 1))
#     result.append("Iterative Factorial Count: " + str(n))
#     result.append("Recursive Fibonacci Count: " + str(recursive_fib_count))
#     result.append("Iterative Fibonacci Count: " + str(n))

#     return result