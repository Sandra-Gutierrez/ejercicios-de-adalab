'use strict';

const boxPears = {
    numMax: 5,
    numMin: 0,
    numActual: 0,
    numStart: 0,
    addPear: function() {
        if(this.numActual >= this.numMax){
            console.log(`Tengo el numero maximo de peras en mi cesta: ${this.numActual}.`);
        } else{
            this.numActual = this.numActual + 1;
            console.log(`Actualmente tengo ${this.numActual} en mi cesta`);
        }
    },
    removePear: function() {
        if(this.numActual <= this.numMin){
            console.log(`Tengo el numero mínimo de peras en mi cesta: ${this.numActual}.`);
        } else{
            this.numActual = this.numActual - 1;
            console.log(`Actualmente tengo ${this.numActual} en mi cesta`);
        }
    },
    reset: function() {
        this.numActual = this.numStart;
        console.log(`Actualmente tengo ${this.numActual} en mi cesta`);
    } 
}