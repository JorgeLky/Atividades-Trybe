def somaR(n):
    if 1 == n:
        return n
    return n + somaR(n - 1)
