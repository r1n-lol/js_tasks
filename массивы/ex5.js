// Задание 5: Создать массив чисел, посчитать сумму и среднее, вывести в консоль.

let array = [1,56,78,67,52];
let sum  = 0;

for(let i = 0; i < array.length; i++){
    sum += array[i];
}

let average = sum / array.length;

console.log("Сумма " + sum);
console.log("Среднее " + average);