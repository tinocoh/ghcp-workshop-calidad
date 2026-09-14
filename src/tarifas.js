// Tablas de referencia. Datos ficticios, solo para el laboratorio.

const TASAS_IMPUESTO = {
  MX: 0.16,
  CO: 0.19,
  CL: 0.19,
  PE: 0.18,
  AR: 0.21,
  US: 0.0
};

const TIPOS_CAMBIO = {
  'USD:MXN': 17.2,
  'USD:COP': 3950.0,
  'USD:CLP': 940.0,
  'USD:PEN': 3.75,
  'USD:ARS': 900.0,
  'USD:USD': 1.0
};

function tasa(pais) {
  return TASAS_IMPUESTO[pais];
}

function fx(de, a) {
  const clave = `${de}:${a}`;
  return TIPOS_CAMBIO[clave];
}

module.exports = { tasa, fx, TASAS_IMPUESTO, TIPOS_CAMBIO };
