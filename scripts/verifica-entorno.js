// Verificacion rapida de entorno antes del workshop.
// Uso:  npm run verifica

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const raiz = path.join(__dirname, '..');
let fallos = 0;
let avisos = 0;

function ok(texto) { console.log('  OK    ' + texto); }
function mal(texto) { console.log('  FALLA ' + texto); fallos++; }
function advertencia(texto) { console.log('  AVISO ' + texto); avisos++; }

function cmd(comando) {
  return execSync(comando, { stdio: ['ignore', 'pipe', 'ignore'] }).toString().trim();
}

console.log('\nVerificacion de entorno - Workshop GitHub Copilot\n');

try {
  const v = process.versions.node.split('.').map(Number);
  if (v[0] >= 20) ok('Node.js ' + process.versions.node);
  else mal('Node.js ' + process.versions.node + ' (se requiere 20 o superior)');
} catch (e) { mal('No pude leer la version de Node.js'); }

try {
  ok(cmd('git --version'));
} catch (e) { mal('git no esta instalado o no esta en el PATH'); }

// VS Code 1.120 o superior: necesario para ver el consumo correcto de AI credits.
// En versiones recientes Copilot viene integrado, no se instala como extension.
try {
  const v = cmd('code --version').split('\n')[0].trim();
  const [may, men] = v.split('.').map(Number);
  if (may > 1 || (may === 1 && men >= 120)) ok('Visual Studio Code ' + v);
  else mal('Visual Studio Code ' + v + ' (se requiere 1.120 o superior)');
} catch (e) {
  advertencia('No pude ejecutar "code --version". Si usas VS Code, verifica a mano que sea 1.120 o superior (Ayuda > Acerca de).');
}

if (fs.existsSync(path.join(raiz, 'node_modules'))) ok('Dependencias instaladas (node_modules)');
else mal('Faltan dependencias. Ejecuta: npm install');

const rutaReal = raiz.toLowerCase();
if (rutaReal.includes('onedrive') || rutaReal.includes('dropbox') || rutaReal.includes('google drive')) {
  mal('El repositorio esta en una carpeta sincronizada. Muevelo a C:\\dev o ~/dev');
} else {
  ok('Ubicacion del repositorio fuera de carpetas sincronizadas');
}

['src/pricing.js', 'src/server.js', 'ejercicios/bloque-a/descuentos.js'].forEach(f => {
  if (fs.existsSync(path.join(raiz, f))) ok('Existe ' + f);
  else mal('Falta ' + f);
});

// La app debe poder cargarse. Esto detecta un repositorio en estado inconsistente
// (por ejemplo, un require a un modulo que todavia no existe).
try {
  require(path.join(raiz, 'src', 'server.js'));
  ok('La aplicacion carga sin errores');
} catch (e) {
  mal('La aplicacion no carga: ' + e.message);
}

console.log('');
if (fallos === 0 && avisos === 0) {
  console.log('Entorno listo. Nos vemos en la sesion.\n');
} else if (fallos === 0) {
  console.log('Entorno listo, con ' + avisos + ' aviso(s) que conviene revisar.');
  console.log('Recuerda: no instalas extensiones de Copilot. En VS Code reciente viene');
  console.log('integrado; solo necesitas haber iniciado sesion.\n');
} else {
  console.log('Hay ' + fallos + ' punto(s) por resolver. Revisa PRERREQUISITOS en el README.\n');
  process.exitCode = 1;
}
