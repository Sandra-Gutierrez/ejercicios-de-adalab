'use strict';

let year = 2017;

console.log(`La última luna fue en ${year}`);

for (let i = 1; i <= 15; i++) {
  year += 3;
  console.log(`${i} - Luna del cazador año ${year}.`);
}

