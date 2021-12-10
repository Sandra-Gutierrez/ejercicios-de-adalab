'use strict';

let acc = 0;
console.log(`El resultado inicial es ${acc}`);

for (let i = 1; i <= 10; i++) {
  acc += 2;
  console.log(`Vuelta ${i}. El resultado es ${acc}`);
}

console.log(`El resultado final es ${acc}`)