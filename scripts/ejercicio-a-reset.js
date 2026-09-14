// Revierte el ejercicio del Bloque A para poder repetirlo desde cero.
// Uso:  npm run ejercicio:a:reset

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const raiz = path.join(__dirname, '..');
const destino = path.join(raiz, 'src', 'descuentos.js');

if (fs.existsSync(destino)) {
  fs.unlinkSync(destino);
}

try {
  execSync('git checkout -- src/server.js', { cwd: raiz, stdio: 'ignore' });
} catch (e) {
  console.log('No pude restaurar src/server.js con git. Hazlo a mano si hace falta.');
}

console.log('Ejercicio A revertido. Puedes volver a ejecutar: npm run ejercicio:a');
