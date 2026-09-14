# Instrucciones del repositorio

Servicio de cotizacion y promociones. Node.js, sin framework mas alla de Express.

## Convenciones

- JavaScript de Node 20, CommonJS (`require` / `module.exports`). No usar ESM.
- Nombres de funciones y variables en espanol, descriptivos y completos.
- Todo el dinero se redondea a 2 decimales con `Math.round(x * 100) / 100`.
- Las funciones publicas validan sus entradas y lanzan `TypeError` con mensaje en espanol.
- No introducir dependencias nuevas sin justificarlo.

## Pruebas

- Framework: Jest. Los archivos viven en `tests/` y terminan en `.test.js`.
- Comandos: `npm test` y `npm run test:cov`.
- Cada prueba verifica un solo comportamiento y su nombre describe ese comportamiento.

## Estilo de respuesta

- Responde en espanol.
- Se conciso. Muestra el codigo y explica solo lo que no sea evidente.

<!--
BLOQUE C DEL WORKSHOP
Aqui vas a agregar tus propias reglas al final de la sesion.
Un buen archivo de instrucciones reduce el contexto que Copilot tiene que
leer en cada corrida, y eso se traduce en menos creditos consumidos.
-->
