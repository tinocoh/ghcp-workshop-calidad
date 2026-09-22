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
git reset --hard FETCH_HEAD
npm run verifica
```

Funciona aunque hayas hecho fork, aunque tu copia este vieja y aunque hayas tocado
archivos. **Conserva tu `node_modules`**, asi que no vuelves a instalar nada.

> `git reset --hard` descarta cualquier cambio local que tengas en el repositorio.
> Es justo lo que queremos: partir todos de cero.

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

`[ ]` Abre el panel **Control de codigo fuente** (`Ctrl+Shift+G`).

`[ ]` En la barra de titulo de **Cambios**, haz clic en el icono de **revision de Copilot**
(las estrellitas). Copilot revisa el diff completo y deja comentarios en los archivos.

`[ ]` Recorre los comentarios con `F8` / `Shift+F8`.

> Si no ves el boton, usa la alternativa: selecciona todo el contenido de
> `src/descuentos.js` (`Ctrl+A`), clic derecho → **Copilot** → **Review and Comment**.

**Cuenta cuantos hallazgos encontraste y de que tipo.** Lo vamos a comparar en A.3.

---

## A.2 — Triaje: no todos los hallazgos valen lo mismo

En el chat de Copilot, con `src/descuentos.js` abierto, modo **Ask**:

```
Revisaste #file:src/descuentos.js. Organiza tus hallazgos en una tabla con estas
columnas: linea, problema, severidad (alta/media/baja) y por que importa para el
negocio, no para el estilo.

Ordena de mayor a menor severidad. Si un hallazgo solo es preferencia de estilo,
ponlo al final y marcalo como tal.

Al final, dime cual arreglarias primero si solo tuvieras 10 minutos.
```

---

## A.3 — Lo mismo, pero con las reglas de tu equipo

Copia las instrucciones de revision al lugar donde Copilot las lee:

```bash
mkdir .github\instructions
copy ejercicios\bloque-a\revision.instructions.md .github\instructions\
```

En macOS o Linux:

```bash
mkdir -p .github/instructions
cp ejercicios/bloque-a/revision.instructions.md .github/instructions/
```

`[ ]` Abre `.github/instructions/revision.instructions.md` y **leelo**. Eso es lo que
tu equipo considera importante, escrito una sola vez.

`[ ]` Vuelve a pedir la revision de `src/descuentos.js` (como en A.1).

**Compara con lo que anotaste en A.1.** Misma herramienta, mismo codigo, distinto resultado:
la diferencia son las instrucciones.

---

## A.4 — Confirma tu trabajo (local)

Hasta aqui todo ocurrio sin confirmar nada. Ahora cierra el ciclo como lo harias
en tu repositorio real:

```bash
git checkout -b bloque-a/promociones
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

## B.0 — La linea base

```bash
npm test
```

Debe decir **No tests found**. Ese cero es tu punto de partida. Anotalo.

---

## B.1 — La primera bateria de pruebas

`[ ]` Abre `src/pricing.js`. Leelo 30 segundos. Nadie del equipo original sigue en la empresa.

En el chat de Copilot, modo **Agent**:

```
/tests #file:src/pricing.js

Genera pruebas unitarias con Jest para las tres funciones exportadas.

Requisitos:
- Crea el archivo en tests/pricing.test.js
- Agrupa con describe() por funcion y usa it() con nombres que describan el
  comportamiento esperado, en espanol
- Cubre el camino feliz de cada funcion y al menos un caso limite por funcion
- No modifiques src/pricing.js todavia
- Al terminar, ejecuta npm test y muestrame el resultado
```

```bash
npm test
```

---

## B.2 — Donde de verdad duele: los casos limite

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

---

## B.4 — Cobertura: de cero a numero real

```bash
npm run test:cov
```

Mira la tabla. Despues, en el chat:

```
Este es el reporte de cobertura de npm run test:cov:

[pega aqui la tabla completa]

Dime exactamente que ramas de src/pricing.js siguen sin cubrir y escribe solo
las pruebas necesarias para cerrarlas. No inventes pruebas de relleno para
subir el porcentaje.
```

---

## B.5 — Ruta extra: prueba de la API

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
