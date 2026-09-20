# Workshop GitHub Copilot — Code Review · Unit Testing · AI Credits

Repositorio de trabajo para la sesion practica de 2 horas. **Tu ejecutas, el presentador guia.**

El repositorio existe por una sola razon: que los 50 participantes partan exactamente
del mismo codigo, con los mismos defectos y la misma cobertura de pruebas en cero.
Asi cualquier diferencia en el resultado viene de como usas Copilot, no del punto de partida.

---

## Que vamos a ver

| Bloque | Tema | Entorno | Duracion |
|---|---|---|---|
| A | **Code Review** con Copilot | VS Code → complemento en github.com | 43 min |
| B | **Unit Testing** con Copilot | VS Code | 40 min |
| C | **Managing AI Credits** | github.com → complemento en VS Code | 20 min |

Los tres bloques usan el mismo codigo y se encadenan: lo que revisas en A es lo que
pruebas en B, y lo que aprendes en C explica por que A y B te costaron lo que costaron.

---

## Prerrequisitos

Resuelvelos **antes** de la sesion. No hay tiempo para instalar nada en vivo.

| Requisito | Detalle |
|---|---|
| Licencia de GitHub Copilot | Business o Enterprise, asignada y **activa**. Verificala entrando a github.com/settings/copilot |
| Cuenta de GitHub | La misma que tiene la licencia, con sesion iniciada en el navegador |
| Visual Studio Code | Version **1.120 o superior** (necesaria para ver el consumo correcto de AI credits) |
| Extensiones | **GitHub Copilot** y **GitHub Copilot Chat**, actualizadas y con sesion iniciada |
| Node.js | **20 o superior** |
| Git | Cualquier version reciente, con acceso a github.com |

> **Ubicacion del repositorio.** Clona en una ruta local (`C:\dev\...` o `~/dev/...`).
> **No** lo pongas en OneDrive, Dropbox ni ninguna carpeta sincronizada: el modo agente
> escribe muchos archivos seguidos y los bloqueos de sincronizacion lo rompen a mitad
> del ejercicio.

### Puesta en marcha

1. **Haz fork** de este repositorio a tu cuenta personal (boton **Fork**, arriba a la derecha).
   Lo necesitas en el Bloque A para abrir un pull request propio.

2. Clona **tu fork**:

   ```bash
   git clone https://github.com/TU-USUARIO/ghcp-workshop-calidad.git C:/dev/ghcp-workshop-calidad
   cd C:/dev/ghcp-workshop-calidad
   npm install
   ```

3. Verifica:

   ```bash
   npm run verifica
   npm test        # debe decir "No tests found". Ese cero es el punto de partida.
   npm start       # http://localhost:3000/health -> {"estado":"ok",...}
   ```

4. Abre la carpeta en VS Code. Cuando te ofrezca instalar las extensiones recomendadas, acepta.

Si `npm run verifica` termina sin fallas, estas listo.

---

## Que hay aqui

| Ruta | Rol |
|---|---|
| `src/inventory.js` | Codigo que **si** cumple las convenciones. Referencia de contraste. |
| `src/pricing.js` | Codigo heredado: sin nombres, sin validacion, sin documentacion, sin pruebas. Es la materia prima del **Bloque B**. |
| `src/tarifas.js` | Tablas de impuestos y tipo de cambio. Datos ficticios. |
| `src/server.js` | API HTTP minima. |
| `src/db-falsa.js` | Stub de datos para que el ejercicio del Bloque A corra. |
| `tests/` | Vacio a proposito. Cobertura inicial = 0 %. |
| `ejercicios/bloque-a/` | El cambio a revisar y las instrucciones de revision. |
| `scripts/` | Preparacion y verificacion de ejercicios. |
| `.github/copilot-instructions.md` | Instrucciones del repositorio. Lo vas a mejorar en el Bloque C. |
| `PROMPTS.md` | **Todos los prompts de la sesion, listos para copiar.** |
| `guia-presentador/` | Guia del presentador. Si vas a conducir la sesion, empieza ahi. |

---

## Comandos que vas a usar

```bash
npm run verifica          # revisa tu entorno
npm test                  # corre las pruebas
npm run test:cov          # corre las pruebas con reporte de cobertura
npm run ejercicio:a       # prepara el cambio a revisar del Bloque A
npm run ejercicio:a:reset # deshace el Bloque A para repetirlo
npm start                 # levanta la API en el puerto 3000
```

---

## Reglas de la sesion

1. **Copia los prompts de `PROMPTS.md`.** No los escribas de memoria: queremos que los
   50 obtengan resultados comparables.
2. **Lee antes de aceptar.** Todo lo que Copilot proponga pasa por tu criterio. Ese es
   justamente el musculo que venimos a ejercitar.
3. **Si te atoras, no te quedes callado.** Cada bloque tiene una ruta base que todos
   completan y una ruta extra opcional. Si vas retrasado, sigue la ruta base y listo.
4. **No edites `PROMPTS.md` ni este README durante la sesion.**

---

## Licencia

MIT. Datos, tarifas y credenciales de este repositorio son ficticios.
