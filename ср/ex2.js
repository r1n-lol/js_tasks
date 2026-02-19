// 2. Дан массив цен: let prices = [100, 250, 50, 300, 75, 500];
// Создайте новый массив affordable, куда попадут цены ≤ 200
// Создайте массив expensive, куда попадут цены > 200
// Выведите оба массива

let prices = [100, 250, 50, 300, 75, 500];

let affordable = prices.filter(price => price <= 200);
let expensive = prices.filter(price => price > 200);

console.log(affordable);
console.log(expensive);
