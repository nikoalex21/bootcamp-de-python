#operaciones matematicas
a = 10
b = 3

print("Suma", a+b)
print("Resta", a-b)
print("Multiplicacion", a*b)
print("Division", a/b)
#en python el operador (%) el residuo de una division
print("modulo", a%b)
#division entera //
print("division entera", a // b)
#potencia
print("potnecia", a **b)
a+=2
print(a)
a*=2
print(a)
a/=2
print(a)
a-=2
print(a)

operacion1 = 2 + 3 * 4
print(f'2 + 3 * 4 = {operacion1}')

operacion2 = 2+(3*4)
print(f'2+(3*4)={operacion2}')

operacion3 = (2+3)*4
print(f'(2+3)*4={operacion3}')

operacion4 = (2+3)* (4**2)/8-1
print(f'(2+3)* (4**2)/8-1={operacion4}')

print(f'a > b = {a > b}')
print(f'a < b = {a < b}')
print(f'a >= b = {a >= b}')
print(f'a <= b = {a <= b}')
print(f'a == b = {a == b}')
print(f'a != b = {a != b}')

