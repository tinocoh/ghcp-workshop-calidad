// Verificacion rapida de entorno antes del workshop.
// Uso:  npm run verifica

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const raiz = path.join(__dirname, '..');
let fallos = 0;

function ok(texto) { console.log('  OK    ' + texto); }
function mal(texto) { console.log('  FALLA ' + texto); fallos++; }

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

console.log('');
if (fallos === 0) {
  console.log('Entorno listo. Nos vemos en la sesion.\n');
} else {
  console.log('Hay ' + fallos + ' punto(s) por resolver. Revisa PRERREQUISITOS en el README.\n');
  process.exitCode = 1;
}
