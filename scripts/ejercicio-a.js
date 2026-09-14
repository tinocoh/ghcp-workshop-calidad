// Prepara el ejercicio del Bloque A creando un cambio real sin confirmar.
// Copia ejercicios/bloque-a/descuentos.js a src/ y engancha una ruta nueva
// en src/server.js, de modo que tengas un diff de 2 archivos para revisar.
//
// Uso:  npm run ejercicio:a

const fs = require('fs');
const path = require('path');

const raiz = path.join(__dirname, '..');
const origen = path.join(raiz, 'ejercicios', 'bloque-a', 'descuentos.js');
const destino = path.join(raiz, 'src', 'descuentos.js');
const servidor = path.join(raiz, 'src', 'server.js');

const MARCA = '// --- BLOQUE A ---';

const RUTA = `
${MARCA}
const descuentos = require('./descuentos');

app.post('/promociones', (req, res) => {
  const total = descuentos.aplicarPromociones(
    req.body.pedido,
    req.body.promociones,
    req.body.historial
  );
  res.json({ total });
});
`;

function main() {
  if (!fs.existsSync(origen)) {
    console.error('No encuentro ejercicios/bloque-a/descuentos.js');
    process.exit(1);
  }

  fs.copyFileSync(origen, destino);

  let codigo = fs.readFileSync(servidor, 'utf8');
  if (codigo.includes(MARCA)) {
    console.log('La ruta /promociones ya estaba enganchada. Nada que hacer ahi.');
  } else {
    codigo = codigo.replace(
      'const PUERTO =',
      `${RUTA.trim()}\n\nconst PUERTO =`
    );
    fs.writeFileSync(servidor, codigo);
  }

  console.log('');
  console.log('Listo. Cambio sin confirmar preparado:');
  console.log('  src/descuentos.js   (nuevo)');
  console.log('  src/server.js       (modificado)');
  console.log('');
  console.log('Abre el panel de Control de codigo fuente en VS Code y sigue la guia.');
}

main();
