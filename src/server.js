const express = require('express');
const pricing = require('./pricing');
const inventory = require('./inventory');

const app = express();
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ estado: 'ok', servicio: 'ghcp-workshop-calidad' });
});

app.post('/cotizar', (req, res) => {
  const cuerpo = req.body;
  if (!pricing.ok(cuerpo)) {
    return res.status(400).json({ error: 'peticion invalida' });
  }
  const total = pricing.calc(
    cuerpo.c,
    cuerpo.q,
    cuerpo.t,
    cuerpo.p,
    cuerpo.d
  );
  res.json({ total });
});

app.get('/inventario/cobertura', (req, res) => {
  const unidades = Number(req.query.unidades);
  const consumo = Number(req.query.consumo);
  res.json({ dias: inventory.diasCobertura(unidades, consumo) });
});

// --- BLOQUE A ---
const descuentos = require('./descuentos');

app.post('/promociones', (req, res) => {
  const total = descuentos.aplicarPromociones(
    req.body.pedido,
    req.body.promociones,
    req.body.historial
  );
  res.json({ total });
});

const PUERTO = process.env.PORT || 3000;

if (require.main === module) {
  app.listen(PUERTO, () => {
    console.log(`ghcp-workshop-calidad escuchando en http://localhost:${PUERTO}`);
  });
}

module.exports = app;
