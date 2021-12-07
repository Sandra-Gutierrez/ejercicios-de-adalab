'use strict';

function calcularIva(a){
  let iva = "21%";
  let ivaFloat = 1.21;
  let total = a * ivaFloat;
  return `Precio sin IVA: ${a}€, IVA: ${iva} y Total: ${total}€`;

}

const precioCompleto = calcularIva(15);
console.log( precioCompleto );
