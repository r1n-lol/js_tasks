import { filterEvenNumbers, findMax } from "./arrayUtils.js";

const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = [12, 45, 7, 89, 34];

console.log("Массив 1:", arr1);
console.log("Чётные числа:", filterEvenNumbers(arr1));

console.log("Массив 2:", arr2);
console.log("Максимальное число:", findMax(arr2));