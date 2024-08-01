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

""" mix = ["uno", 2, 3.4, True, [1, 2, 3]]
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
 """
""" while True:
  print("Hola compañeros eligue tu nombre")
  integrante=input("1. Alexander \n2. Alvaro \n3. Camilo\n")
  if integrante=="1":
    pregunta1= input("Hola Alexander Cual es tu comida favorita?\n")
    pregunta2= input("Alexander Como te dicen tus amigos\n")
    repuesta = [pregunta1,pregunta2]
    print("fue un placer aqui tengo un resumen de tus respuestas: ", repuesta)
    
  elif integrante=="2":
    pregunta1= input("Hola Alvaro anime, caricatura o serie favorita?")
    pregunta2= input("genero musical favorito?")
    pregunta3= input("Color Favorito?")
    pregunta4= input("Pelicula favorita?")
    pregunta5= input("Bebida favorita para quitarte el frío?")
    respuesta = [pregunta1, pregunta2, pregunta3, pregunta4, pregunta5]
    print("Fue un placer aqui tengo un resumen de tus respuestas: ", respuesta)
  
  elif integrante=="3":
    pregunta1= input("Hola Camilo, cual es tu comida favorita?")
    pregunta2= input("genero musical favorito?")
    pregunta3= input("como te dicen tus amigos?")
    pregunta4= input("serie o pelicula favorita")
    respuesta = [pregunta1,pregunta2,pregunta3,pregunta4]
    print("Fue un placer aqui tengo un resumen de tus respuestas: ", respuesta)
  elif integrante == "4":
    print("gracias por estar aqui")
    break
  else:
    print("opcion invalida elige una correcta")

 """
""" print("Hola compañeros eligue tu nombre")
integrante=input("1. Alexander \n2. Alvaro \n3. Camilo\n4.\n")
if integrante=="1":
    pregunta1= input("Hola Alexander Cual es tu comida favorita?\n")
    pregunta2= input("Alexander Como te dicen tus amigos\n")
    pregunta4= input("Cual es tu serie favorita\n")
    pregunta3= input(f"Cual es tu personaje favorito de {pregunta2}\n")
    pregunta5= input("Alexander Como te dicen tus amigos\n")
     """
