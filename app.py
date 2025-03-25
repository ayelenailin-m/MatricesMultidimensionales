personas = []

# Preguntar cuántas personas se desean cargar
cantidad = int(input("¿Cuántas personas vas a cargar? "))

for i in range(cantidad):
    print(f"\nCargando datos de la persona {i + 1}")
    nombre = input("Nombre: ")
    apellido = input("Apellido: ")
    dni = input("DNI: ")

    telefonos = []
    cantidad_telefonos = int(input(f"¿Cuántos teléfonos querés cargar para {nombre} {apellido}? "))

    for j in range(cantidad_telefonos):
        telefono = input(f"Teléfono {j + 1}: ")
        telefonos.append(telefono)

    personas.append([nombre, apellido, dni, telefonos])

# Mostrar los datos cargados
print("\nListado de personas con sus teléfonos:")
print("----------------------------------------")

for i, persona in enumerate(personas, start=1):
    print(f"Persona {i}:")
    print(f"Nombre: {persona[0]}")
    print(f"Apellido: {persona[1]}")
    print(f"DNI: {persona[2]}")
    print("Teléfonos:")
    for j, tel in enumerate(persona[3], start=1):
        print(f"  {j}. {tel}")
    print("----------------------------------------")
