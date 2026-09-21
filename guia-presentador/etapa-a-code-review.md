# Code Review: de revisar al final a revisar desde el principio

<img src="imgs/etapa-a.png" alt="Etapa A: Code Review" />

Cuarenta y tres minutos (12–55). El objetivo no es que Copilot revise por ellos: es que
**ellos revisen mejor y más rápido** con Copilot como primera pasada.

## Objetivo de la etapa

Que cada participante ejecute una revisión de código asistida en dos momentos distintos
del flujo — local antes del commit, y en el pull request — y compruebe con sus propios
ojos que el resultado cambia por completo cuando el repositorio le dice a la herramienta
qué le importa al equipo.

## Conceptos que explicas con la diapositiva

Proyecta la apertura de etapa **antes** de que corran nada, y recorre la línea de tiempo:

| Concepto | Qué tienen que entender |
|---|---|
| **Revisión local** | Copilot puede revisar un diff sin confirmar. Ocurre antes del commit, antes del push, antes de ocupar el tiempo de un compañero. |
| **Severidad y triaje** | Una lista de veinte comentarios sin jerarquía no es una revisión: es ruido. Ordenar es la habilidad, no encontrar. |
| **Instrucciones personalizadas** | Un archivo de texto plano versionado junto al código cambia lo que la herramienta considera importante. Se escribe una vez. |
| **Revisión en el pull request** | Es el registro auditable que el proceso de calidad necesita. No compite con la revisión local: cubre otro momento. |
| **Nivel de esfuerzo** | Lite para lo evidente, Balanced para lógica compleja y código sensible. Es una decisión de costo que toman ellos. |

## Por qué importa

**Lo que dices al abrir:**

> Piensen en la última vez que revisaron un pull request de un compañero. ¿Cuánto
> tardaron en dar la primera vuelta? ¿Y cuánto tardó él en recibirla?
>
> El problema de la revisión de código nunca fue la capacidad técnica del equipo. Fue el
> tiempo entre que alguien escribe algo y alguien más lo mira. A veces días. Y cuando por
> fin llega, el autor ya está en otra cosa.
>
> Vamos a meter una primera pasada antes de ese hueco. No para reemplazar la revisión
> humana: para que cuando llegue, llegue a un código que ya pasó por un filtro. Eso cambia
> la conversación del pull request por completo.

> **Mensaje clave.** La revisión de Copilot no sustituye al revisor humano: le cambia el
> punto de partida. El humano deja de cazar variables sin usar y empieza a discutir diseño.
> Esa es la venta real.

---

## Ejercicio A.0 — Prepara el cambio a revisar

**Minutos 12–18 · Ruta Base · Terminal**

Demuestra tú el comando en pantalla y pídeles que lo corran:

```bash
npm run ejercicio:a
```

El script crea `src/descuentos.js` y engancha una ruta nueva en `src/server.js`. El
resultado son **dos archivos con cambios sin confirmar**.

Abre el panel de Control de código fuente en tu pantalla y muéstrales el diff.

**Lo que dices:**

> Esto es exactamente lo que tendrían justo antes de pedirle revisión a un compañero.
> Todavía no existe públicamente.

> **Nota.** Los cincuenta parten del mismo diff, con los mismos defectos. Cuando comparen
> hallazgos al final del bloque, las diferencias van a venir de cómo pidieron la revisión,
> no de qué código les tocó.

---

## Ejercicio A.1 — Revisión local, antes de confirmar nada

**Minutos 18–28 · Ruta Base · VS Code**

### Pasos

1. Abrir el panel **Control de código fuente** (`Ctrl+Shift+G`).
2. En la barra de título de la sección **Cambios**, hacer clic en el icono de revisión
   de Copilot (las estrellitas).
3. Recorrer los comentarios con `F8` / `Shift+F8`.
4. **Anotar cuántos hallazgos obtuvieron y de qué tipo.**

Muestra el botón en tu pantalla. Es pequeño y la mitad de la sala no lo va a encontrar
sola: proyéctalo grande y señálalo.

> **La instrucción que no puedes olvidar.**
> Diles que **ANOTEN** cuántos hallazgos obtuvieron y de qué tipo. Sin ese dato, el
> ejercicio A.3 pierde todo su impacto, porque no van a tener contra qué comparar.
> Repítelo dos veces.

### Qué deberían ver

Entre seis y doce comentarios: una credencial escrita en el código, una consulta
construida por concatenación de cadenas, un `JSON.parse` sin protección, bucles anidados
sobre la misma colección, y varias observaciones de estilo sobre `var` y `==`.

> **Riesgo — el botón no aparece.**
> En versiones anteriores de VS Code, el icono de revisión no está en
> Control de código fuente. La alternativa está en su guía: seleccionar todo el archivo
> con `Ctrl+A`, clic derecho, menú Copilot, **Review and Comment**. Ten esa ruta lista
> para proyectarla; en un grupo de cincuenta siempre hay tres o cuatro versiones distintas.

---

## Ejercicio A.2 — Triaje: no todos los hallazgos valen lo mismo

**Minutos 28–36 · Ruta Base · VS Code, modo Ask**

Mientras corren el prompt, camina por la sala. Al minuto 33, pide a dos o tres personas
que lean en voz alta cuál pusieron como hallazgo número uno.

**Lo que dices:**

> Fíjense en lo que acaba de pasar. Todos recibimos más o menos los mismos comentarios,
> pero el orden importa más que la lista.
>
> Una revisión de veinte comentarios sin jerarquía no es una revisión: es ruido. Y el
> ruido es lo que hace que la gente deje de leer las revisiones.
>
> La habilidad que estamos practicando no es encontrar problemas. Es ordenarlos.

> **Mensaje clave.** Encontrar problemas es barato. Priorizarlos es lo caro, y es lo que
> sigue siendo trabajo humano aun con la mejor herramienta.

### Puntos a discutir

- ¿Coincidieron todos en cuál es el hallazgo de severidad más alta?
- ¿Alguno de los hallazgos "de estilo" tiene impacto de negocio que no sea obvio?
- ¿Qué harían si el pull request es urgente y solo pueden arreglar uno?

---

## Ejercicio A.3 — La misma revisión, con las reglas del equipo

**Minutos 36–45 · Ruta Base · VS Code**

**Este es el ejercicio más importante de toda la etapa. No lo apures y no lo cortes.**

### Pasos

1. Copiar `ejercicios/bloque-a/revision.instructions.md` a `.github/instructions/`.
2. **Abrir el archivo y leerlo.** Son las reglas de revisión de un equipo, escritas una
   sola vez: severidad por tipo de defecto, prioridad al dinero y a la seguridad, y una
   instrucción explícita de no comentar sobre formato.
3. Repetir la revisión del ejercicio A.1 sobre el mismo archivo.
4. Comparar con lo anotado en A.1.

**Lo que dices:**

> Van a copiar un archivo de treinta líneas. Ábranlo y léanlo antes de correr nada.
>
> Ahora pidan la misma revisión, sobre el mismo archivo, con la misma herramienta.
>
> Comparen con lo que anotaron hace veinte minutos. Misma herramienta, mismo código,
> resultado distinto. La diferencia son treinta líneas de texto plano versionadas junto
> al código.
>
> Cuando alguien les diga que la revisión automática es genérica, la respuesta es que
> nadie le dijo qué no es genérico en ese repositorio.

> **Mensaje clave.** Las instrucciones personalizadas son el multiplicador de todo lo
> demás. Es el único artefacto de la sesión que sigue trabajando cuando la sesión termina,
> y el que van a poder llevarse a su repositorio real el lunes.

> **Riesgo — el comando de copia.**
> Algunos van a estar en PowerShell, otros en Git Bash, otros en macOS. La guía del
> participante trae las dos variantes. Si alguien se atora, la ruta infalible es crear la
> carpeta y arrastrar el archivo desde el explorador de VS Code. No pierdas tres minutos
> depurando sintaxis de terminal.

---

## Ejercicio A.4 — Confirma tu trabajo (local)

**Minutos 45–48 · Ruta Base · Terminal**

Hasta aquí todo ocurrió sin confirmar nada. Que cierren el ciclo con `checkout -b`,
`add` y `commit`. El punto es que vean el commit con su propia identidad.

> **IMPORTANTE — leer antes de la sesión.**
> Los participantes son **Enterprise Managed Users** de la empresa del cliente. La
> documentación de GitHub es explícita: *"Managed user accounts cannot fork
> repositories from outside of the enterprise"*, y tampoco pueden hacer push ni abrir
> pull requests en repositorios ajenos a su empresa.
>
> Por eso **no hay fork y `git push` va a fallar**. Está previsto. Adelántate y dilo
> tú antes de que alguien lo intente, o vas a tener treinta manos levantadas.

**Lo que dices:**

> Este repositorio es de solo lectura para ustedes, así que el push no va a funcionar.
> No es un error suyo ni de su máquina: es una política de sus cuentas corporativas.
>
> En su trabajo real, este es el momento en que subirían la rama y abrirían el pull
> request. Como aquí no podemos, se los voy a mostrar en vivo.

---

## Ejercicio A.5 — La revisión en el pull request (TU demostración)

**Minutos 48–55 · Proyectas tú · Ellos observan**

Es el único momento de la sesión en que ellos no ejecutan. Compénsalo narrando más y
preguntando a la sala.

### Preparación — HAZLO ANTES DE LA SESIÓN

1. En tu fork propio, deja una rama con el cambio del ejercicio A y el **pull request
   ya creado**, pero **sin pedir la revisión todavía**.
2. Verifica que `.github/instructions/revision.instructions.md` esté en esa rama:
   quieres que la revisión salga con los criterios del equipo, igual que en su A.3.
3. Ten un **segundo** pull request con la revisión **ya completada** en otra pestaña.

> **Riesgo — pedir la revisión en vivo y que tarde.**
> Si la pides en vivo y no responde en un minuto, pierdes el momento. **Plan B:** pide
> la revisión en la pestaña 1 para que vean el gesto, y mientras "carga" te pasas a la
> pestaña 2 y trabajas sobre los comentarios reales. Nadie nota la diferencia y no
> dependes de la latencia.

### Qué mostrar, en este orden

**1. Dónde se pide.** Barra lateral derecha, *Reviewers* → Copilot aparece como un
compañero más. Señálalo: es el mismo lugar donde pedirían revisión a un humano.

**2. El nivel de esfuerzo.** Muestra el selector Lite / Balanced antes de dar clic.

> Antes de pedir la revisión pueden elegir el nivel de esfuerzo.
>
> **Lite** va por lo evidente: errores claros, vulnerabilidades, estilo. Rápido y barato.
>
> **Balanced** analiza lógica compleja, código sensible a seguridad y cambios que cruzan
> servicios, con un modelo de mayor razonamiento.
>
> Elegir siempre Balanced para un cambio de dos líneas es tirar dinero. Elegir Lite para
> el módulo de pagos es ahorrar en el lugar equivocado. Esa decisión es suya, y en la
> etapa C van a entender exactamente cuánto pesa.

**3. Las etiquetas de severidad.** High / Medium / Low en cada comentario.
**Pregunta a la sala:** *"¿coincide con el triaje que hicieron ustedes en A.2?"*
Deja que dos o tres contesten. Eso recupera la participación que perdiste al no
dejarlos ejecutar.

**4. Las dos formas de aplicar un hallazgo.** *Commit suggestion* (parche de una línea,
dos clics) contra *Fix with Copilot* (abre trabajo agéntico). Aplica una de cada una
en vivo.

**5. Que se puede discutir.** Responde a un comentario con tu criterio y ciérralo con
*Resolve conversation*. Quita la ansiedad de "y si me equivoco al aceptar".

> **Mensaje clave.** Aquí plantas la semilla de la etapa C. Cuando lleguen a los
> créditos, ya van a tener una decisión de costo con nombre y apellido.

> **Mensaje clave.** Revisar en el IDE y revisar en el pull request no compiten:
> cubren momentos distintos. En el IDE atrapas lo tuyo antes de que exista
> públicamente. En el pull request queda el registro auditable que tu proceso de
> calidad necesita.

### Cierra con una pregunta abierta

> ¿En cuál de los dos momentos creen que atraparían más problemas en su equipo?

Es la mejor forma de terminar un bloque demostrativo: los devuelve a su contexto real.

---

## ¿Qué hemos hecho hasta aquí?

**Lo que dices al cerrar:**

> Revisaron el mismo código dos veces. La primera con los criterios de fábrica. La segunda
> con los criterios de su equipo. Y vieron que el resultado cambia.
>
> Guarden los hallazgos. Porque los defectos que la revisión les señaló son, casualmente,
> los que vamos a convertir en pruebas ahora mismo.

Al terminar esta etapa, cada participante:

- **Revisó un cambio antes de confirmarlo**, no después de que le costara tiempo a alguien más.
- **Priorizó hallazgos** por impacto de negocio en lugar de por orden de aparición.
- **Enseñó al repositorio** qué considera importante su equipo, con un archivo versionado.
- **Vio el mismo flujo en el pull request**, que es donde queda el registro auditable.

## Regla de tiempo

> **Al minuto 55 tienes que estar cerrando esta etapa, pase lo que pase.** Si vas
> retrasado, acorta tu demostración de A.5 — con mostrar severidades y *Commit
> suggestion* basta. **Nunca sacrifiques la etapa B**: es la que deja el argumento de
> negocio. Perder el final por alargar el principio es el error más caro de esta sesión.

## Bitácora

Regresa a la [Bitácora del presentador](bitacora-del-presentador.md) y marca:

- [x] 1. Revisaron antes de confirmar
- [x] 2. Vieron la diferencia con instrucciones del equipo
- [x] 3. Vieron la revisión en el pull request
