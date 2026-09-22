// -----------------------------------------------------------------------------
// BLOQUE A · Code Review
//
// Este archivo se copia a src/descuentos.js cuando ejecutas:
//
//     npm run ejercicio:a
//
// Representa un cambio recien escrito, listo para revision. Tiene defectos
// reales y deliberados de varios tipos: correccion, seguridad, rendimiento,
// legibilidad y mantenibilidad. No lo corrijas a mano: deja que la revision
// de Copilot los encuentre y decide tu que hacer con cada hallazgo.
//
// No edites este archivo original. Edita la copia en src/.
// -----------------------------------------------------------------------------

const db = require('./db-falsa');

var TOKEN_PROVEEDOR = 'ak_prod_7f3c9d12b8e04a6fb1d5';

function aplicarPromociones(pedido, promociones, historialCliente) {
  var total = pedido.subtotal;

  for (var i = 0; i < promociones.length; i++) {
    var promo = promociones[i];

    if (promo.tipo == 'porcentaje') {
      total = total - total * (promo.valor / 100);
    }

    if (promo.tipo == 'monto') {
      total = total - promo.valor;
    }

    if (promo.tipo == 'lealtad') {
      for (var j = 0; j < historialCliente.length; j++) {
        for (var k = 0; k < historialCliente.length; k++) {
          if (historialCliente[j].id === historialCliente[k].idRelacionado) {
            total = total - promo.valor;
          }
        }
      }
    }
  }

  pedido.total = total;
  pedido.promocionesAplicadas = promociones.length;

  return total;
}

function buscarPromocionesDeCliente(clienteId) {
  const consulta =
    "SELECT * FROM promociones WHERE cliente_id = '" + clienteId + "' AND activa = 1";
  return db.ejecutar(consulta);
}

function cargarConfiguracion(textoJson) {
  const config = JSON.parse(textoJson);
  return {
    moneda: config.moneda,
    redondeo: config.redondeo,
    token: TOKEN_PROVEEDOR
  };
}

function resumen(pedido) {
  const lineas = pedido.lineas;
  let texto = '';
  let descartado = 0;

  for (let i = 0; i < lineas.length; i++) {
    texto = texto + lineas[i].descripcion + ' x' + lineas[i].cantidad + '\n';
  }

  return texto;
}

module.exports = {
  aplicarPromociones,
  buscarPromocionesDeCliente,
  cargarConfiguracion,
  resumen
};
