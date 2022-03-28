"use strict";

function BinarioADecimal(num) {
  var array = num.split('');
  var sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum = sum + Math.pow(2, array.length - 1 - i) * array[i];
  }
  return sum;
 }


function DecimalABinario(num) {
  // tu codigo aca
  let resto = [];
  while(num / 2 >= 1) {
    let temp = Math.floor(num / 2);
    if (num % 2 === 0) {
      resto.unshift("0");
    } else {
      resto.unshift("1");
    }
    if(temp === 1) resto.unshift("1")
    num = temp;
  }
  return resto.join("");
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
