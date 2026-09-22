# PROMPTS — copia y pega

Todos los prompts de la sesion, en orden. Copialos tal cual.
Donde dice `[ ]` es una accion en la interfaz, no un prompt.

---

# PASO 0 · Todos en la misma version

**Lo hacemos juntos al inicio de la sesion.** No importa como hayas preparado tu
entorno: esto deja a todo el grupo en el mismo punto de partida.

## Si ya tienes el repositorio en tu maquina

```bash
cd C:/dev/ghcp-workshop-calidad
git fetch https://github.com/tinocoh/ghcp-workshop-calidad.git main
git checkout -B main FETCH_HEAD
npm run verifica
```

Funciona aunque hayas hecho fork, aunque tu copia este vieja, aunque hayas tocado
archivos y aunque ya hayas hecho ramas o commits. **Conserva tu `node_modules`**, asi que
no vuelves a instalar nada.

> `git checkout -B main FETCH_HEAD` te devuelve a la rama `main` con el contenido exacto
> del repositorio, descartando cualquier cambio local. Es justo lo que queremos: partir
> todos de cero.

## Si no alcanzaste a preparar nada

```bash
git clone https://github.com/tinocoh/ghcp-workshop-calidad.git C:/dev/ghcp-workshop-calidad
cd C:/dev/ghcp-workshop-calidad
npm install
npm run verifica
```

En ambos casos, `npm run verifica` debe terminar con **"Entorno listo"**.

---

# BLOQUE A · Code Review

## A.0 — Prepara el cambio a revisar

```bash
npm run ejercicio:a
```

Esto crea `src/descuentos.js` y modifica `src/server.js`. Son cambios **sin confirmar**:
exactamente lo que tendrias justo antes de pedirle revision a un companero.

---

## A.1 — Revision local, antes de confirmar nada

`[ ]` Haz clic en el icono de **Control de codigo fuente** en la barra lateral izquierda
(el de la rama, con el numero de cambios). Si prefieres el atajo es `Ctrl+Shift+G`, pero
**primero haz clic fuera de la terminal**: si el foco esta en la terminal, el atajo no
funciona.

`[ ]` **Ruta principal:** abre `src/descuentos.js`, haz clic **dentro del codigo**,
presiona `Ctrl+A` para seleccionar todo, clic derecho → **Review**.

> Ojo con `Ctrl+A`: si el foco esta en el Explorador, selecciona archivos en vez de
> texto. Haz clic dentro del codigo primero.

`[ ]` Los comentarios aparecen sobre las lineas. Para verlos todos juntos, abre el panel
**Comments** (abajo, junto a Terminal). Es mas comodo que recorrerlos con `F8`.

> **No toques "Apply and Go to Next" ni "Discard and Go to Next".** En este ejercicio
> solo se lee y se cuenta. Si aplicas cambios ahora, la comparacion de A.3 se rompe.

**Cuenta cuantos hallazgos encontraste.** Lo vamos a comparar en A.3.

> En versiones recientes de VS Code el boton de revision no esta en la barra de titulo
> de Cambios. Por eso la ruta principal es el menu contextual.

---

## A.2 — Como prioriza cuando nadie le dijo que importa

En el chat de Copilot, con `src/descuentos.js` abierto, modo **Ask**:

```
Resume los hallazgos de tu revision de #file:src/descuentos.js
y dime cual arreglarias primero.
```

Fijate en **tres cosas** de la respuesta:

1. **Que puso primero.** ¿Seguridad? ¿Dinero? ¿Otra cosa?
2. **Que escala de severidad uso.** ¿Alta/Media/Baja? ¿Critico/Alto/Medio/Bajo?
   Nadie se la dio: se la invento.
3. **Cuantos creditos costo.** El dato aparece al pie de la respuesta. Anotalo.

**Guarda esta respuesta.** La vas a comparar en el siguiente ejercicio.

---

## A.3 — El mismo prompt, con las reglas de tu equipo

`[ ]` Primero abre `ejercicios/bloque-a/revision.instructions.md` y **leelo**. Son treinta
lineas: que es grave en este repositorio, en que orden, y que ignorar.

Ahora copialo al unico lugar donde Copilot lo lee:

```bash
mkdir .github\instructions
copy ejercicios\bloque-a\revision.instructions.md .github\instructions\
```

En macOS o Linux:

```bash
mkdir -p .github/instructions
cp ejercicios/bloque-a/revision.instructions.md .github/instructions/
```

> Si pegas las dos lineas juntas, PowerShell muestra `>>` y parece colgado. Presiona
> Enter otra vez para ejecutarlas. Si prefieres, corre una a la vez.

`[ ]` Verifica que llego: `dir .github\instructions`

### La vuelta: el mismo prompt, otra vez

`[ ]` Abre un **chat nuevo** (importante: que no arrastre el contexto anterior).

`[ ]` Pega **exactamente el mismo prompt de A.2**, sin cambiarle una coma:

```
Resume los hallazgos de tu revision de #file:src/descuentos.js
y dime cual arreglarias primero.
```

`[ ]` Compara contra la respuesta que guardaste:

- ¿Que puso primero ahora?
- ¿Que escala de severidad uso?
- ¿Aparecieron hallazgos que antes no estaban?
- ¿Cuantos creditos costo esta vez?

**No cambiaste el prompt. Cambiaste el repositorio.**

---

## A.4 — Confirma tu trabajo (local)

Hasta aqui todo ocurrio sin confirmar nada. Ahora cierra el ciclo como lo harias
en tu repositorio real:

```bash
git checkout -B bloque-a/promociones
git add .
git commit -m "Agrega calculo de promociones y ruta /promociones"
```

`[ ]` Mira el historial de tu rama:

```bash
git log --oneline -3
```

`[ ]` Fijate en el autor del commit. Si configuraste bien tu identidad, deberia ser
la tuya. Es el mismo principio del Bloque A: el repositorio determina el contexto.

> **Nota:** este repositorio es de solo lectura para ti, asi que `git push` no va a
> funcionar. No es un error tuyo. En tu trabajo real este seria el momento de subir
> la rama y abrir el pull request; el presentador te lo va a mostrar en vivo ahora.

---

## A.5 — La revision en el pull request (demostracion del presentador)

**No ejecutas nada aqui. Observa y toma nota.**

El presentador va a mostrar el mismo cambio que acabas de revisar, pero ya en un
pull request de GitHub. Presta atencion a cuatro cosas:

`[ ]` **Donde se pide la revision.** En la barra lateral derecha, junto a *Reviewers*,
aparece **Copilot** igual que un companero de equipo.

`[ ]` **El nivel de esfuerzo.** Antes de pedirla se elige **Lite** o **Balanced**.
Lite va por lo evidente y es barato; Balanced analiza logica compleja y codigo
sensible a seguridad, con un modelo de mayor razonamiento. Es una decision de costo.

`[ ]` **Las etiquetas de severidad.** Cada comentario trae **High**, **Medium** o
**Low**. Comparalo con el triaje que hiciste tu en A.2: ¿coinciden?

`[ ]` **Las dos formas de aplicar un hallazgo.** *Commit suggestion* es un parche de
una linea, dos clics. *Fix with Copilot* abre trabajo agentico sobre la rama. No
cuestan lo mismo ni sirven para lo mismo.

### Pregunta para la discusion

La revision en el IDE (A.1) y la del pull request cubren momentos distintos del
flujo, no compiten. ¿En cual de los dos crees que atraparias mas problemas en tu
equipo, y por que?

---

# BLOQUE B · Unit Testing

> **Sigues en la rama `bloque-a/promociones`.** No cambies de rama: el archivo de
> criterios que escribiste en el Bloque A vive ahi, y lo vas a necesitar.

## B.0 — La linea base

En la **terminal integrada de VS Code**:

```bash
npm test
```

Debe decir **No tests found**. Ese cero es tu punto de partida. Anotalo.

---

## B.1 — La primera bateria de pruebas

`[ ]` Abre `src/pricing.js`. Leelo 30 segundos. Nadie del equipo original sigue en la empresa.

`[ ]` **Abre un hilo nuevo de chat** con el boton `+` de la parte superior del panel.
El hilo del Bloque A venia de una conversacion de analisis y arrastra esa inercia:
explica en lugar de actuar.

En el chat de Copilot, modo **Agent**:

```
Crea el archivo tests/pricing.test.js con pruebas unitarias en Jest para las
tres funciones exportadas de #file:src/pricing.js

- Agrupa con describe() por funcion y usa it() con nombres en espanol que
  describan el comportamiento esperado
- Cubre el camino feliz de cada funcion y al menos un caso limite por funcion
- No modifiques src/pricing.js

Escribe el archivo en disco y despues ejecuta npm test y muestrame el resultado.
```

**Por que el prompt empieza con "Crea el archivo".** El comando `/tests` tiene su
propio flujo: genera el codigo y te lo propone en el chat, pero no lo escribe en
disco. Compite con las herramientas del agente y gana. Con el verbo al inicio y
"escribe el archivo en disco" al final, el agente actua.

```bash
npm test
```

Deben pasar todas. Ese verde es una trampa: Copilot probo lo que el codigo **hace**,
no lo que el negocio **necesita**.

---

## B.2 — Donde de verdad duele: los casos limite

Sigue en **el mismo hilo** que B.1: quieres que recuerde las pruebas que acaba de escribir.

```
Ahora agrega a tests/pricing.test.js pruebas para estos casos limite de calc():

1. Un arreglo de descuentos vacio
2. Un descuento porcentual de 100
3. Dos descuentos porcentuales de 60 cada uno aplicados al mismo pedido
4. Un descuento de monto fijo mayor que el subtotal
5. Un pais que no existe en la tabla de impuestos
6. Un arreglo de partidas vacio

Para cada caso escribe la prueba con el resultado que el NEGOCIO esperaria,
no con el resultado que el codigo actual produce. Si el codigo actual no lo
cumple, deja que la prueba falle.

Ejecuta npm test y dime cuales fallan y por que.
```

**Esto es el punto del bloque.** Las pruebas que fallan no estan mal escritas:
estan revelando defectos que llevaban anios en produccion.

Fijate en el que produce un **total negativo**. Ahora vuelve a abrir el
`revision.instructions.md` que escribiste en el Bloque A y lee la regla 1.
La escribiste sin haber visto este archivo.

---

## B.3 — Del defecto a la correccion

```
Las pruebas que fallan describen el comportamiento correcto.

Corrige src/pricing.js para que pase todas, respetando las convenciones de
#file:.github/copilot-instructions.md:
- el total nunca puede ser negativo
- todo monto se redondea a 2 decimales
- un pais sin tasa registrada debe lanzar un error explicito, no asumir 0

No cambies las pruebas. Ejecuta npm test al terminar.
```

**La frase "no cambies las pruebas" no es un adorno.** Sin ella, el camino mas corto
al verde es modificar la prueba en lugar de arreglar el codigo.

---

## B.4 — Cobertura: de cero a numero real

En la **terminal integrada de VS Code** (la misma donde corriste `npm test`):

```bash
npm run test:cov
```

Mira la tabla que imprime Jest. Fijate en dos cosas: el porcentaje de **All files**,
y la fila de `descuentos.js` — el archivo del Bloque A.

Despues, en el chat:

```
Ejecuta npm run test:cov.

Con la tabla de cobertura que obtengas, dime exactamente que ramas de
src/pricing.js siguen sin cubrir y escribe solo las pruebas necesarias
para cerrarlas. No inventes pruebas de relleno para subir el porcentaje.
```

**La ultima linea es la importante.** Sin ella, el camino mas corto a un porcentaje
bonito son pruebas de adorno que no prueban nada.

---

## B.5 — Ruta extra: prueba de la API

> **Opcional.** Solo si terminaste B.4 antes que el resto. No es parte del recorrido;
> esta aqui para que no te quedes esperando. `supertest` ya viene instalado.

```
Escribe tests/server.test.js usando supertest sobre #file:src/server.js.

Cubre:
- GET /health responde 200 con estado ok
- POST /cotizar con un cuerpo valido responde 200 con un total numerico
- POST /cotizar con un cuerpo invalido responde 400

No levantes el servidor con app.listen dentro de las pruebas.
```

---

# BLOQUE C · Managing AI Credits

## C.1 — Tu consumo real (web)

`[ ]` Ve a **github.com** → tu foto de perfil → **Settings** → **Billing and licensing**.

`[ ]` Abre la vista de **AI usage / Copilot**. Ahi ves tus AI credits consumidos
en el ciclo actual.

`[ ]` Localiza tres cosas y anotalas:
1. Cuantos credits llevas consumidos este mes
2. Que funcionalidad te consumio mas
3. La fecha de reinicio del ciclo

> Lo que acabas de hacer en los Bloques A y B ya aparece aqui, con unos minutos de retraso.

---

## C.2 — La aritmetica, en una linea

- **1 AI credit = $0.01 USD.**
- Copilot **Business** incluye **1,900 credits** por usuario al mes; **Enterprise**, 3,900.
- Esos credits **se juntan en una bolsa comun** de toda la organizacion. Tu no tienes
  una cubeta individual: los usuarios intensivos toman mas y los ligeros compensan.
- La bolsa **se reinicia el dia 1** de cada mes a las 00:00 UTC. Lo que no usaste, se pierde.
- **El autocompletado y las next edit suggestions no consumen credits.** Son ilimitados.
- Lo que si consume: chat, modo agente, CLI, cloud agent, Spaces y la revision de codigo.
- El costo de cada interaccion = **modelo elegido × tokens consumidos** (entrada, salida y cache).

`[ ]` Abre la tabla oficial de precios por modelo:
<https://docs.github.com/en/copilot/reference/copilot-billing/models-and-pricing>

`[ ]` Busca un modelo **ligero** y uno **frontier** y compara el precio de salida
por millon de tokens. El factor entre ambos suele ser de 10x a 40x. **Esa es la palanca #1.**

---

## C.3 — La misma tarea, dos costos (VS Code)

`[ ]` En el chat de Copilot, abre el selector de modelo y elige **Auto**.
Si tu version lo ofrece, elige el tier **Efficiency**.

Corre esta tarea:

```
Agrega documentacion JSDoc en espanol a las tres funciones exportadas de
#file:src/pricing.js, siguiendo el mismo formato que #file:src/inventory.js.
No cambies la logica. Solo agrega documentacion.
```

`[ ]` Pasa el cursor sobre la respuesta: te dice **que modelo se uso realmente**.

`[ ]` Ahora deshaz el cambio (`git checkout -- src/pricing.js`), abre un **chat nuevo**,
selecciona a mano el modelo mas potente disponible y corre **el mismo prompt**.

**Misma tarea. Mismo resultado util. Costo muy distinto.**

Regla practica:

| Tipo de tarea | Modelo |
|---|---|
| Arquitectura, depuracion compleja, planeacion | Razonamiento (el caro) |
| El plan ya esta claro, solo hay que ejecutarlo | Intermedio |
| Refactor, formato, documentacion, renombrar | Ligero |

Y por defecto: **Auto**. Ademas de elegir por ti, trae **10 % de descuento** en el costo
del modelo si estas en un plan de pago.

---

## C.4 — Las cuatro palancas que de verdad mueven la aguja

1. **Modelo correcto para la tarea.** No uses el mas caro para todo: ademas de costar
   mas, en tareas de ejecucion a veces empeora el resultado porque sobre-piensa.

2. **Contexto delgado.** Todo lo que Copilot puede ver se envia como tokens de entrada:
   pestanias abiertas, archivos adjuntos y **todo el historial de la conversacion**.
   Cuando cambies de problema, abre un **chat nuevo**. No arrastres la conversacion anterior.

3. **Respeta el cache.** Los tokens en cache cuestan cerca del **10 %** de los tokens
   normales de entrada. Se invalida el cache cuando:
   - cambias de modelo a media sesion,
   - cambias el nivel de razonamiento o las herramientas habilitadas a media sesion,
   - retomas una sesion vieja (el cache expira en 24 h en modelos de OpenAI, 1 h en la mayoria).

   Configura antes de empezar y no lo muevas durante la sesion.

4. **Guardarraiiles deterministas.** Esto conecta con el Bloque B: las **pruebas unitarias**,
   los linters y los escaneos de seguridad le dan al agente una senial clara de exito o
   fracaso. Sin ellas, el agente construye sobre errores y encadena corridas equivocadas,
   que es el mayor desperdicio de tokens que existe.

   La razon economica para escribir pruebas no es solo la calidad. Es que **las pruebas
   pagan credits**.

---

## C.5 — Cierra el ciclo: convierte lo aprendido en instrucciones

`[ ]` Abre `.github/copilot-instructions.md`.

```
Basandote en lo que hicimos hoy en este repositorio, propon 5 reglas cortas y
concretas para agregar al final de #file:.github/copilot-instructions.md.

Criterios:
- Cada regla en una linea, en imperativo
- Solo reglas especificas de ESTE repositorio: comandos, convenciones y errores
  que de verdad cometimos hoy
- Nada de buenas practicas genericas de la industria
- Incluye los comandos de prueba y cobertura
```

`[ ]` **Edita a mano** lo que te proponga, borra lo generico y quedate con 5 lineas.

```bash
git add .github/copilot-instructions.md
git commit -m "Agrega instrucciones aprendidas en el workshop"
```

Un buen archivo de instrucciones evita que el agente tenga que leer medio repositorio
para orientarse en cada corrida. Se escribe una vez y ahorra en todas las sesiones futuras.

---

## Referencias oficiales

- Optimizar el uso de IA y reducir costo: <https://docs.github.com/en/copilot/tutorials/optimize-ai-usage>
- Facturacion por AI credits: <https://docs.github.com/en/copilot/concepts/billing-and-usage/organizations-and-enterprises/billing>
- Precios por modelo: <https://docs.github.com/en/copilot/reference/copilot-billing/models-and-pricing>
- Seleccion automatica de modelo: <https://docs.github.com/en/copilot/concepts/models/auto-model-selection>
- Revision de codigo con Copilot: <https://docs.github.com/en/copilot/concepts/agents/code-review>
