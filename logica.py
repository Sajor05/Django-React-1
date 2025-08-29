var = 55

def cantidad_digitos(numero):
    numero = numero 
    contador = 0
    if numero == 0:
        return 1
    
    while numero > 0:
        numero = numero//10  # División entera
        contador += 1
    return contador
print("\n")
print (cantidad_digitos(var))