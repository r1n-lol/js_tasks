// Задание 2:  Создайте массив чисел и найдите сумму всех его элементов.

let array = [2,5,7,9];
let sum = 0;
for(let i = 0; i < array.length; i++){
    sum += array[i];
}
console.log("Сумма " + sum);