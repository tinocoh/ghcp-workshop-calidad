/**
 * Utilidades de inventario.
 *
 * Este archivo mantiene un estilo deliberadamente consistente:
 * cada funcion es pura, valida sus entradas, lanza TypeError con
 * mensaje en espanol y devuelve un valor primitivo o un objeto nuevo.
 *
 * Usalo como referencia: asi se ve el codigo que SI cumple las convenciones
 * del repositorio. Contrasta con src/pricing.js.
 */

/**
 * Calcula el valor total de una linea de inventario.
 * @param {number} unidades - Cantidad de unidades en existencia.
 * @param {number} costoUnitario - Costo por unidad en la moneda base.
 * @returns {number} Valor total redondeado a 2 decimales.
 * @throws {TypeError} Si algun argumento no es un numero finito no negativo.
 */
function valorLinea(unidades, costoUnitario) {
  if (!Number.isFinite(unidades) || unidades < 0) {
    throw new TypeError('unidades debe ser un numero finito no negativo');
  }
  if (!Number.isFinite(costoUnitario) || costoUnitario < 0) {
    throw new TypeError('costoUnitario debe ser un numero finito no negativo');
  }
  return Math.round(unidades * costoUnitario * 100) / 100;
}

/**
 * Determina si una linea de inventario esta por debajo del punto de reorden.
 * @param {number} unidades - Cantidad de unidades en existencia.
 * @param {number} puntoReorden - Umbral por debajo del cual se debe reabastecer.
 * @returns {boolean} true si se debe reabastecer.
 * @throws {TypeError} Si algun argumento no es un numero finito no negativo.
 */
function requiereReorden(unidades, puntoReorden) {
  if (!Number.isFinite(unidades) || unidades < 0) {
    throw new TypeError('unidades debe ser un numero finito no negativo');
  }
  if (!Number.isFinite(puntoReorden) || puntoReorden < 0) {
    throw new TypeError('puntoReorden debe ser un numero finito no negativo');
  }
  return unidades < puntoReorden;
}

/**
 * Calcula los dias de cobertura de inventario segun el consumo diario promedio.
 * @param {number} unidades - Cantidad de unidades en existencia.
 * @param {number} consumoDiario - Unidades consumidas por dia en promedio.
 * @returns {number} Dias de cobertura redondeados hacia abajo. Infinity si el consumo es 0.
 * @throws {TypeError} Si algun argumento no es un numero finito no negativo.
 */
function diasCobertura(unidades, consumoDiario) {
  if (!Number.isFinite(unidades) || unidades < 0) {
    throw new TypeError('unidades debe ser un numero finito no negativo');
  }
  if (!Number.isFinite(consumoDiario) || consumoDiario < 0) {
    throw new TypeError('consumoDiario debe ser un numero finito no negativo');
  }
  if (consumoDiario === 0) {
    return Infinity;
  }
  return Math.floor(unidades / consumoDiario);
}

module.exports = { valorLinea, requiereReorden, diasCobertura };
