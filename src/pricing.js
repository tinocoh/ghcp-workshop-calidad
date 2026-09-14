// Modulo de tarifacion heredado.
// Nadie del equipo original sigue en la empresa.
// No hay documentacion, no hay pruebas.

const T = require('./tarifas');

function calc(c, q, t, p, d) {
  let r = 0;
  let b = 0;

  for (let i = 0; i < q.length; i++) {
    b = b + q[i].u * q[i].pu;
  }

  if (t === 'A') {
    r = b * 0.85;
  } else if (t === 'B') {
    r = b * 0.9;
  } else if (t === 'C') {
    r = b * 0.95;
  } else {
    r = b;
  }

  if (p > 12) {
    r = r * 0.97;
  }

  if (d && d.length > 0) {
    for (let j = 0; j < d.length; j++) {
      if (d[j].tp === 1) {
        r = r - d[j].v;
      }
      if (d[j].tp === 2) {
        r = r - r * (d[j].v / 100);
      }
    }
  }

  const im = T.tasa(c) || 0;
  const tt = r + r * im;

  return Math.round(tt * 100) / 100;
}

function conv(m, de, a) {
  const tc = T.fx(de, a);
  return Math.round(m * tc * 100) / 100;
}

function ok(o) {
  if (!o) return false;
  if (!o.c) return false;
  if (!o.q) return false;
  return true;
}

module.exports = { calc, conv, ok };
