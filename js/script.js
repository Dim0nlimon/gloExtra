let num = 266219;
let numStr = String(num);
let numStrLength = numStr.length;
let numStrArr = numStr.split(''); // преобразование числа в массив


let i = 0;
for (i; i < numStrLength; i++) {
  numStrArr[i] = Number(numStrArr[i]);
} // преобразование элеиентов массива в числа


let j = 0;
let result = 1;
for (j; j < numStrLength; j++) {
  result = result * numStrArr[j];
}
console.log(result);


let resultPowThree = result ** 3;
console.log(resultPowThree);


let str = String(resultPowThree);
let strFirstTwo = str.substring(0, 2);
let intFirstTwo = Number(strFirstTwo);
console.log(intFirstTwo);