""" lista = ["opcion peli",
        "comida"]
print(lista)
lista2 = ["levantarse","estudiar", "almorzar", "visitar abuelos", "estudiar", "bootcamp"]
print(lista2)
numbers = [1,2,3,4,"cinco"]
print(numbers)
print(type(numbers)) """
""" mix = ["uno" , 2,3.4, True, [1,2,3]]
print(mix)
print(len(mix)) """

""" mix = ["uno", 2, 3.4, True, [1, 2, 3]]
#print(mix)
for i in mix:
    pos=len(mix)
    print("elemento", str(mix[i]), i)
print(len(mix))
 """

mix = ["uno", 2, 3.4, True, [1, 2, 3]]
for i in mix:
    print("elemento:", i)
    
mix.append(False)
print(mix)
mix.append("Alex")
print(mix)
mix.insert(1,["a","b"])
print(mix)
print(mix.index(["a","b"]))
numbers=[1,2,3,4,19,18,99]
print("mayor: ", max(numbers))
print("menor: ", min(numbers))
del numbers[-1]
print(numbers)
del numbers[:2]



