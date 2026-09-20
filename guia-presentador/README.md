# Workshop GitHub Copilot — Code Review, Unit Testing y Managing AI Credits

_Guía del presentador · Sesión práctica de 2 horas para 50 desarrolladores_

## Resumen de la sesión

Casi todos los equipos que ya tienen GitHub Copilot lo usan para lo mismo: escribir
código más rápido. Esta sesión va por las tres capacidades que casi nadie está usando
y que son justamente las que separan a un equipo que escribe más rápido de uno que
entrega mejor software: **cómo se revisa**, **cómo se prueba** y **cuánto cuesta**.

Los 50 participantes trabajan sobre un mismo repositorio público, con el mismo código
heredado, los mismos defectos deliberados y la misma cobertura de pruebas en cero.
Ellos ejecutan; tú marcas el ritmo y resuelves lo que se atore. Al final, cada quien
tiene artefactos propios en su fork: un pull request revisado, una suite de pruebas
donde no había ninguna, y defectos reales encontrados en código que llevaba años
en producción.

## Lo que se llevan

- Saber pedir una revisión de código útil **antes** de ocupar el tiempo de un compañero
- Saber generar pruebas que **encuentran defectos** en lugar de documentarlos
- Saber explicar, con números, por qué una tarea de IA cuesta lo que cuesta
- Un archivo de instrucciones escrito por ellos, que sigue ahorrando después de la sesión

## El escenario

El repositorio es un servicio de cotización y promociones en Node.js. Tiene tres
piezas que importan:

- `src/pricing.js` — módulo heredado. Variables llamadas `r`, `b`, `tt` y `q`. Sin
  documentación, sin validación, sin una sola prueba. Nadie del equipo original sigue
  en la empresa. **Y está en producción.**
- `src/inventory.js` — el contraste. Código que sí cumple las convenciones, documentado
  y validado. Sirve de referencia.
- `ejercicios/bloque-a/descuentos.js` — un cambio recién escrito, listo para revisar,
  con defectos deliberados de corrección, seguridad, rendimiento y legibilidad.

Las tres etapas se encadenan sobre ese mismo código:

1. **Revisar** un cambio antes de confirmarlo, y enseñarle a la herramienta los criterios del equipo.
2. **Probar** el módulo heredado hasta que las pruebas revelen los defectos que nadie había visto.
3. **Medir** lo que costaron las dos etapas anteriores y aprender a bajarlo sin perder capacidad.

## Etapas

Cada etapa abre con su diapositiva de la [presentación](Workshop-Deck-Etapas.pptx),
que resume objetivo, conceptos y valor antes de que nadie toque el teclado.

| # | Etapa | Minutos | Entorno |
|---|---|---|---|
| — | [Apertura y verificación de entorno](etapa-0-apertura.md) | 0–12 | Tu máquina |
| A | [Code Review](etapa-a-code-review.md) | 12–55 | VS Code → github.com |
| B | [Unit Testing](etapa-b-unit-testing.md) | 55–95 | VS Code |
| C | [Managing AI Credits](etapa-c-ai-credits.md) | 95–115 | github.com → VS Code |
| — | [Cierre](etapa-z-cierre.md) | 115–120 | Sala |

Lleva el control de la sesión con la [Bitácora del presentador](bitacora-del-presentador.md).
Al terminar cada etapa, regresa a marcar los puntos de control.

## Documentos hermanos

| Documento | Para quién | Cuándo |
|---|---|---|
| `Workshop-Prerrequisitos.docx` | Participantes | T menos 5 días |
| `Workshop-Guia-Participante.docx` | Participantes | En la sesión |
| [`PROMPTS.md`](../PROMPTS.md) | Participantes | En la sesión, para copiar |
| Esta guía | Solo tú | Segunda pantalla o impresa. **No la proyectes.** |

## Cómo leer esta guía

| Elemento | Para qué sirve |
|---|---|
| **Objetivo / Conceptos / Valor** | Lo que explicas con la diapositiva de apertura, antes de que ejecuten |
| **Lo que dices** | Versión hablada del punto. No es un guion para leer: es el sentido que no debe perderse |
| **Mensaje clave** | La idea que deben poder repetir mañana |
| **Riesgo** | Lo que se rompe en la práctica, con el plan B ya resuelto |
| **Puntos a discutir** | Preguntas para abrir la sala cuando vas bien de tiempo |
