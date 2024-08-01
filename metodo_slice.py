# Crear una lista 'a'
a = [1, 2, 3, 4, 5]
# Asignar la referencia de 'a' a 'b'
b = a

# Imprimir las listas 'a' y 'b'
print("Lista a:", a)
print("Lista b:", b)

# Eliminar el primer elemento de la lista 'a'
del a[0]

# Imprimir las listas 'a' y 'b' después de la eliminación
print("Lista a después de eliminar el primer elemento:", a)
print("Lista b después de eliminar el primer elemento en 'a':", b)

# Imprimir las identificaciones de 'a' y 'b'
print("ID de a:", id(a))
print("ID de b:", id(b))

# Crear una copia superficial de 'a' y asignarla a 'c'
c = a[:]

# Imprimir la lista 'c' y sus identificaciones
print("Lista c:", c)
print("ID de a:", id(a))
print("ID de b:", id(b))
print("ID de c:", id(c))

# Agregar un elemento a la lista 'a'
a.append(6)

# Imprimir las listas después de agregar un elemento a 'a'
print("Lista a después de agregar 6:", a)
print("Lista b después de agregar 6 a 'a':", b)
print("Lista c después de agregar 6 a 'a':", c)
