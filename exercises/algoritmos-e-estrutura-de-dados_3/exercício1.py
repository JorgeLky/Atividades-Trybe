def soma(n):
    count = 0
    resultado = 0
    while count <= n:
        resultado += count
        count += 1
    return resultado

print(soma(5))