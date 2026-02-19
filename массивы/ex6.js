// Задание 6: Дан массив чисел let array = [1,2,7,9,2,5], найти наибольшее и наименьшее значение (без Math.max).
let array = [1, 2, 7, 9, 2, 5];
let max = array[0];
let min = array[0];

for (let i = 0; i < array.length; i++) {
  if (array[i] > max) {
    max = array[i];
  }

  if (array[i] < min) {
    min = array[i];
  }
}

console.log("Max " + max);
console.log("Min " + min);
