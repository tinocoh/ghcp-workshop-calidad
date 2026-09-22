---
applyTo: "src/**/*.js"
---

# Criterios de revision para este repositorio

Al revisar codigo en `src/`, prioriza en este orden y marca la severidad:

1. **Correccion del dinero.** Cualquier operacion monetaria sin redondeo a 2 decimales,
   o que pueda producir un total negativo, es severidad alta.
2. **Seguridad.** Credenciales o tokens en el codigo, consultas construidas por
   concatenacion de cadenas, y `JSON.parse` sin manejo de error son severidad alta.
3. **Validacion de entradas.** Una funcion publica que asume que sus argumentos existen
   y son del tipo correcto es severidad media.
4. **Efectos secundarios.** Mutar los objetos recibidos por parametro es severidad media;
   propon devolver un objeto nuevo.
5. **Rendimiento.** Bucles anidados sobre la misma coleccion son severidad media.
6. **Legibilidad.** `var` en lugar de `const`/`let`, comparaciones con `==`, codigo muerto
   y variables sin uso son severidad baja.

No comentes sobre formato, comillas ni punto y coma: de eso se encarga el formateador.
Cada comentario debe incluir la correccion sugerida, no solo el diagnostico.
