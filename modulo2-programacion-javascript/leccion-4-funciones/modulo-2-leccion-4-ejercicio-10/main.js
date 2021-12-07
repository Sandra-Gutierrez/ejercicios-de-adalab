'use strict';

function calcBox (box, wid, pad, bor){
  
  const caja = box;
  if(caja === "content-box"){
    const totalWidht = wid + pad + bor;
    return `El ancho del contenido es: ${wid}px y el ancho total de la caja es: ${totalWidht}px`;
  }else if (caja === "border-box"){
    return `El ancho del contenido es: ${wid}px y el ancho total de la caja es: ${wid}px`;
  } else{
    return `No tienes caja`;
  }

}
console.log(calcBox( "content-box", 30, 3, 1 ))
