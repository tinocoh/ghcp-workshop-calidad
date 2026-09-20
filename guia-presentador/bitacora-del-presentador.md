# Bitácora del presentador

Trátala como tu tablero de control durante la sesión: cada punto tiene una **señal
observable** (qué ves en la sala, no qué crees) y un **umbral** para decidir si sigues
o ajustas. Márcalos conforme avanzas.

---

- [ ] **0. La sala arrancó a tiempo** · minuto 12
  - **Cómo ganas:** los 50 corrieron `npm run verifica` y `npm test`. Ya sabes quiénes
    tienen problemas y los emparejaste con un vecino.
  - **Umbral:** si al minuto 15 sigues resolviendo entorno, arranca la etapa A de todos
    modos y resuelve por el canal.

- [ ] **1. Revisaron antes de confirmar** · minuto 28
  - **Cómo ganas:** cada participante tiene hallazgos anotados de su revisión local, con
    el cambio todavía sin confirmar.
  - **Señal:** alguien comenta en voz alta que no sabía que se podía revisar antes del commit.
  - **Umbral:** si más de diez personas no encontraron el botón, proyecta la ruta alterna
    del menú contextual y sigue.

- [ ] **2. Vieron la diferencia con instrucciones del equipo** · minuto 45
  - **Cómo ganas:** compararon los hallazgos de A.1 contra los de A.3 y pueden decir en
    qué cambió el resultado.
  - **Señal:** alguien pregunta cómo llevar ese archivo a su monorepo. **Esa pregunta vale
    la etapa completa.**
  - **Umbral:** si nadie anotó los hallazgos de A.1, el ejercicio pierde fuerza. Proyecta
    tu propia comparación.

- [ ] **3. Llegaron al pull request** · minuto 55
  - **Cómo ganas:** al menos la mitad tiene un pull request en su fork con revisión de
    Copilot y una sugerencia aplicada.
  - **Umbral:** si la revisión en la web no responde, **no detengas la sesión.** El valor
    de la etapa ya ocurrió en el IDE.

- [ ] **4. Anotaron la línea base en cero** · minuto 58
  - **Cómo ganas:** todos vieron "No tests found" y lo anotaron.
  - **Por qué importa:** sin el cero anotado no hay antes y después, y sin antes y después
    no hay caso de negocio que llevarse.

- [ ] **5. Vieron pruebas en rojo en B.2** · minuto 80
  - **Cómo ganas:** el resultado típico es **3 en rojo y 3 en verde**, revelando el total
    negativo, el descuento compuesto y el impuesto cero silencioso.
  - **Señal:** la sala se queda callada un segundo al entender que el defecto es real.
  - **Umbral:** si alguien reporta las seis en verde, el prompt se copió incompleto. Pídele
    que lo vuelva a correr completo. **Este es el punto que no puedes perder.**

- [ ] **6. Cerraron con cobertura medida** · minuto 95
  - **Cómo ganas:** corrieron `npm run test:cov` y tienen un número, no una impresión.
  - **Umbral:** etapa comprimible. Si vas tarde, proyecta tu número y sigue.

- [ ] **7. Encontraron su consumo** · minuto 98
  - **Cómo ganas:** cada quien localizó sus créditos del ciclo, qué le consumió más y la
    fecha de reinicio.
  - **Señal de alarma:** si alguien pregunta con preocupación si lo van a medir por su
    número, **corrige el tono de inmediato**. El mensaje es "úsenlo mejor", no "úsenlo menos".

- [ ] **8. Compararon dos modelos con las manos** · minuto 108
  - **Cómo ganas:** corrieron la misma tarea con Auto y con el modelo más potente, y vieron
    qué modelo se usó realmente en cada caso.
  - **Por qué importa:** es la diferencia entre creer el dato y haberlo comprobado.

- [ ] **9. Se llevaron el remate** · minuto 112
  - **Cómo ganas:** la sala puede repetir la frase: un repositorio con pruebas, linter y
    revisión automática consume menos IA que uno sin ellas, haciendo el mismo trabajo.
  - **Por qué importa:** es lo único que conecta las tres etapas en una sola idea.

- [ ] **10. Cerraste con los tres compromisos** · minuto 120
  - **Cómo ganas:** dijiste las tres acciones para el lunes y pegaste los enlaces en el canal.
  - **Umbral:** innegociable. Si vas tarde, corta cualquier otra cosa antes que esto.

---

## Marcadores de tiempo

Si en estos minutos no estás donde dice la tabla, ajusta de inmediato.

| Minuto | Dónde debes estar | Si vas tarde, cortas… |
|---|---|---|
| 12 | Arrancando la etapa A | Verificación: empareja y sigue |
| 45 | Terminando A.3 | A.5 completo |
| 55 | Cerrando la etapa A | La discusión del pull request |
| 80 | Pruebas en rojo visibles | Nada. Este punto se protege |
| 95 | Cerrando la etapa B | B.4 y B.5 |
| 112 | Terminando las cuatro palancas | C.3 pasa a demostración tuya |
| 120 | Cierre dicho | Nada |
